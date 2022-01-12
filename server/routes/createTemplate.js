// Externals Modules
var uniqid = require('uniqid');
const util = require("util");
var config = require("config");
const fs = require("fs");
const { zip } = require("zip-a-folder");
const exec = require("child_process").exec;
const homedir = require('os').homedir();
const rimraf = require("rimraf");
const ncp = require("ncp").ncp;
var tmp = require('os').tmpdir();
const path = require('path');
// Internals Modules
const migrationGnrt = require("./Generators/Migration");
const objectIdGnrt = require("./Generators/ObjectId");
const modelGnrt = require("./Generators/Module/Model");
const viewGnrt = require("./Generators/Module/View");
const paramsGnrt = require("./Generators/Params");
const messageGnrt = require("./Generators/Message");
const controllerGnrt = require("./Generators/Module/Controller");
const readmeGnrt = require("./Generators/Readme");
const gnrtUtils = require("./Generators/gneratorTemplateUtils");
const gitRunner = require("./Generators/GitActions");
const options = { encoding: "utf-8", flag: "w" };
var requestQ = {}

/*kebab-case
   camelCase
   PascalCase
   snake_case*/
async function gitInitialisation(baseDir, dataDir, gitHubToken) {
    return new Promise(async (resolve) => {
        if (!fs.existsSync(baseDir)) {
            fs.mkdirSync(baseDir);
        }
        console.log(`data dir located at ${baseDir}`)
        await execAsync(`git clone "https://${gitHubToken}@${config.get("gitConfig.gitRepo")}"`, baseDir + '/');
        await execAsync(`npm i`, dataDir + '/');
        resolve();
    })
}


async function gitPushStaff(dataDir, tableNameAsKabab) {
    return new Promise(async (resolve) => {
        await execAsync(`./node_modules/.bin/tslint './src/**/*.ts*' --format stylish --fix`, dataDir + '/');
        await execAsync(`node ts-style.js --tsfmt-config ./tsfmt.json './src/**/*.ts' './tests/**/*.ts' --fix`, dataDir + '/');

        await execAsync(`git add *`, dataDir);
        const branchName = `feature-add-${tableNameAsKabab}`;
        await execAsync(`git checkout -b ${branchName}`, dataDir + '/');

        await execAsync(`git commit -a -m "Initial commit from generator, don't trust commit!"`, dataDir + '/');
        await execAsync(`git push origin ${branchName}`, dataDir + '/');
        resolve();
    })
}



exports.createTemplate = async function (req, res) {
    if (req.body.tblName == null || req.body.columns == null) {
        res.status(404);
        res.send("you must fill table name and columns as an array");
        return;
    }

    const tsStandardTypes = ["number", "string", "boolean", "LocalDate", "Instant", "DbJson"];
    const jsJodaTypes = ["Instant", "LocalDate"];
    let jsJodaImportsArray = [];

    let objectIdImportArray = [];

    // Importent Params
    let tblNameAsSnake = req.body.tblName;
    let tblNameKabab = gnrtUtils.fromSnakeCaseToKababCase(req.body.tblName);
    let tblNameAsPaskal = gnrtUtils.postgressNameToObjectName(tblNameAsSnake);
    let tblNameAsCamel = gnrtUtils.objectToVariableName(tblNameAsPaskal);


    let gitFilesAdded = [];
    let columns = req.body.columns;
    let thePk;

    let tblPkObj;
    let tblPkObjAsVrbl;

    let colsToTsTypes = [];

    // controller
    let colsQuary = ``;
    let columnSelectString = ``;
    let columnsGetFromResultString = ``;

    // messages
    let msgTemplateCols = ``;
    let msgTemplateCreateCols = ``;
    let msgTemplateEditCols = ``;

    let colsHasNullableValue = false;
    // Parsers
    let parsersFromColText = "";

    // Readme
    let objectsIdToImport;
    let jsJodaToImport;
    let tblPkColName;
    ({ objectsIdToImport, jsJodaToImport, tblPkColName, msgTemplateCols, msgTemplateCreateCols, msgTemplateEditCols, thePk, tblPkObj, tblPkObjAsVrbl, colsQuary, columnSelectString, columnsGetFromResultString, colsHasNullableValue } = prepareVariables(columns, msgTemplateCols, msgTemplateCreateCols, msgTemplateEditCols, thePk, tblPkObj, tblNameAsPaskal, tblPkObjAsVrbl, tblNameAsCamel, colsQuary, columnSelectString, columnsGetFromResultString, tsStandardTypes, objectIdImportArray, jsJodaTypes, jsJodaImportsArray, colsToTsTypes));

    
    var base = path.join(tmp);
    if (!fs.existsSync(base)) {
        fs.mkdirSync(base);
    }

    fs.chmodSync(base, 0755);
    var baseObject = path.join(base, tblNameAsSnake);
    if (!fs.existsSync(baseObject)) {
        fs.mkdirSync(baseObject);
    }

    const pathDir = path.join(baseObject, tblNameAsSnake + "_template");
    if (!fs.existsSync(pathDir)) {
        fs.mkdirSync(pathDir);
    }

    const modulsPath = path.join(pathDir, tblNameAsSnake + "_module");
    if (!fs.existsSync(modulsPath)) {
        fs.mkdirSync(modulsPath);
    }

    const constrollersPath = path.join(modulsPath, "controllers");
    if (!fs.existsSync(constrollersPath)) {
        fs.mkdirSync(constrollersPath);
    }

    const viewsPath = path.join(modulsPath, "views");
    if (!fs.existsSync(viewsPath)) {
        fs.mkdirSync(viewsPath);
    }

    const modelPath = path.join(modulsPath, "model");
    if (!fs.existsSync(modelPath)) {
        fs.mkdirSync(modelPath);
    }

    let migrationText = migrationGnrt.generate(req);

    fs.writeFileSync(path.join(pathDir, `V1000_${tblNameAsSnake}`), migrationText, options);

    // not git
    // objectId file not git
    let objectIdTemplateText = objectIdGnrt.generate(tblNameAsPaskal);
    fs.writeFileSync(path.join(pathDir, "ObjectsIds.ts"), objectIdTemplateText, options);

    let messagesTemplateText = messageGnrt.generate(tblNameAsPaskal, tblNameAsCamel, objectsIdToImport, jsJodaToImport, msgTemplateCols, msgTemplateCreateCols, msgTemplateEditCols);

    // No Git
    // message file
    fs.writeFileSync(path.join(pathDir, tblNameAsPaskal + ".ts"), messagesTemplateText, options);
    // ctrl file
    let controllerTemplateText = controllerGnrt.generate(req, tblNameAsPaskal, tblNameAsCamel, tblPkColName, tblPkObj, tblPkObjAsVrbl, colsQuary, columnsGetFromResultString, colsToTsTypes, objectsIdToImport, jsJodaToImport, colsHasNullableValue);
    fs.writeFileSync(path.join(constrollersPath, tblNameAsPaskal + "Ctrl.ts"), controllerTemplateText, options);

    // params file
    let paramsTemplateText = paramsGnrt.generate(tblPkObj);
    fs.writeFileSync(path.join(viewsPath, tblNameAsPaskal + "Params.ts"), paramsTemplateText, options);

    // view file
    let viewTemplateText = viewGnrt.generate(req, tblNameAsPaskal, tblNameAsCamel, tblPkObjAsVrbl);
    fs.writeFileSync(path.join(viewsPath, tblNameAsPaskal + "View.ts"), viewTemplateText, options);

    // model file
    let modelTemplateText = modelGnrt.generate(tblNameAsPaskal, columns);
    fs.writeFileSync(path.join(modelPath, tblNameAsPaskal + ".ts"), modelTemplateText, options);
    // readme file
    let readmeTemplateText = readmeGnrt.generate(tblNameAsSnake, tblNameAsPaskal, tblNameAsCamel, thePk.name, tblPkObj);
    fs.writeFileSync(path.join(pathDir, "README.md"), readmeTemplateText, options);

    // git properties
    const githubtoken = req.body.githubToken;
    const gitProjectName = '_server2';
    const currentRequestId = uniqid();
    const tmpFolder = path.join(tmp);
    const baseDir = path.join(tmpFolder, currentRequestId);
    const gitDir = path.join(tmpFolder, currentRequestId, gitProjectName);
    if (req.body.githubToken) {

        requestQ[currentRequestId] = 'START';
        await gitInitialisation(baseDir, gitDir, githubtoken);


        // git
        // migration file
        let migrationCounter = 0;
        let sqlPath = path.join(gitDir, "sql");
        if (!fs.existsSync(sqlPath)) {
            fs.mkdirSync(sqlPath);
        }
        let migrationPath = path.join(sqlPath, "migrations");
        if (!fs.existsSync(migrationPath)) {
            fs.mkdirSync(migrationPath);
        }
        const files = fs.readdirSync(migrationPath);

        var numberPattern = /\d+/g;
        files.forEach(file => {
            migrationCounter = parseInt(file.match(numberPattern)[0], 10);
        });
        migrationCounter++;
        let migrationFileExtension = 'V';
        let paddToStartCounter = 4 - migrationCounter.toString().length;
        for (let i = 0; i < paddToStartCounter; i++) { migrationFileExtension += '0' }
        migrationFileExtension += migrationCounter.toString();
        let migrationFileName = `${migrationFileExtension}__${tblNameAsSnake}.sql`;
        gitFilesAdded.push(path.join(migrationPath, migrationFileName));

        fs.writeFileSync(path.join(migrationPath, migrationFileName), migrationText, options);

        // ObjectId Object
        let objectIdObjectText = objectIdGnrt.generateObjectIdObject(tblNameAsPaskal);
        fs.appendFileSync(path.join(gitDir, 'src', 'messages', 'ObjectIds.ts'), objectIdObjectText)

        // ObjectId Parsers and import
        let objectIdParsersText = objectIdGnrt.generateObjectIdParsers(tblNameAsPaskal);
        let dbObjectIdFileContent = fs.readFileSync(path.join(gitDir, 'src', 'db', 'ObjectIds.ts'), options.encoding);
        let editedDbObjectIdFileContent = addObjectIdToDbObjectIdFileImportSection(dbObjectIdFileContent, thePk);

        editedDbObjectIdFileContent += `\n` + objectIdParsersText;
        fs.writeFileSync(path.join(gitDir, 'src', 'db', 'ObjectIds.ts'), editedDbObjectIdFileContent, options);
        // Git
        // message file
        fs.writeFileSync(path.join(gitDir, 'src', 'messages', tblNameAsPaskal + ".ts"), messagesTemplateText, options);

        // Git Module
        var gitWsModulePath = path.join(gitDir, 'src', 'modules', tblNameAsSnake);
        if (!fs.existsSync(gitWsModulePath)) {
            fs.mkdirSync(gitWsModulePath);
        }
        var gitWsModuleCtrlPath = path.join(gitWsModulePath, "controllers");
        if (!fs.existsSync(gitWsModuleCtrlPath)) {
            fs.mkdirSync(gitWsModuleCtrlPath);
        }
        fs.writeFileSync(path.join(gitWsModuleCtrlPath, tblNameAsPaskal + "Ctrl.ts"), controllerTemplateText, options);

        var gitWsModuleMdlPath = path.join(gitWsModulePath, 'models');
        if (!fs.existsSync(gitWsModuleMdlPath)) {
            fs.mkdirSync(gitWsModuleMdlPath);
        }
        fs.writeFileSync(path.join(gitWsModuleMdlPath, tblNameAsPaskal + '.ts'), modelTemplateText, options);

        var gitWsModuleVwsPath = path.join(gitWsModulePath, 'views');
        if (!fs.existsSync(gitWsModuleVwsPath)) {
            fs.mkdirSync(gitWsModuleVwsPath);
        }
        fs.writeFileSync(path.join(gitWsModuleVwsPath, tblNameAsPaskal + "Params.ts"), paramsTemplateText, options);
        fs.writeFileSync(path.join(gitWsModuleVwsPath, tblNameAsPaskal + "View.ts"), viewTemplateText, options);

        let dbObjectsIdSettingText = fs.readFileSync(path.join(gitDir, 'src', '_db.ts'), options.encoding);
        let editedDbObjectsIdSettingText = addObjectIdToDbSettings(dbObjectsIdSettingText, thePk);
        fs.writeFileSync(path.join(gitDir, 'src', '_db.ts'), editedDbObjectsIdSettingText, options);

        let mfsFileCheckerText = fs.readFileSync(path.join(gitDir, 'src', 'mfsqlchecker.json'), options.encoding);
        let editedMfsFileCheckerText = addObjectIdToMfsFileCheckerJsonSetting(mfsFileCheckerText, thePk, tblNameAsSnake, editedDbObjectsIdSettingText);
        fs.writeFileSync(path.join(gitDir, 'src', 'mfsqlchecker.json'), editedMfsFileCheckerText, options);

        let exportsMessagesTsContent = fs.readFileSync(path.join(gitDir, 'src', 'messages.ts'), options.encoding);
        let editedExportsMessagesTsContent = addToExportsMessagesClassArray(exportsMessagesTsContent, tblNameAsPaskal);
        fs.writeFileSync(path.join(gitDir, 'src', 'messages.ts'), editedExportsMessagesTsContent, options);

        // message.json
        let exportedMessageJson = fs.readFileSync(path.join(gitDir, 'src', 'messages', 'messages.json'), options.encoding);
        let editedExportedMessageJson = addToMessagesJsonArray(exportedMessageJson, tblNameAsPaskal);
        fs.writeFileSync(path.join(gitDir, 'src', 'messages', 'messages.json'), editedExportedMessageJson, options);

        // routes.ts
        let routesTsFileContent = fs.readFileSync(path.join(gitDir, 'src', 'routes.ts'), options.encoding);
        let editedRoutesTsFileContent = addToRouteTsContent(routesTsFileContent, tblNameAsCamel, tblNameAsSnake, tblNameAsPaskal);
        fs.writeFileSync(path.join(gitDir, 'src', 'routes.ts'), editedRoutesTsFileContent, options);
        await gitPushStaff(gitDir, tblNameKabab);
    }

    console.log("Write file data complete for table: " + tblNameAsPaskal + ".");

    await zip(path.join(pathDir, ".."), path.join(base, tblNameAsSnake + ".zip"));
    console.log("zip files complete for table: " + tblNameAsPaskal + ".");
    res.download(path.join(base, tblNameAsSnake + ".zip"));

    setTimeout(() => {
        cleaningStaff(path.join(pathDir, ".."),
            path.join(base, tblNameAsSnake + ".zip"),
            path.join(gitDir, '..'), req.body.githubToken != undefined)
    }, 5000);


};

function cleaningStaff(zipDir, zipFile, gitDir, isWithGit) {
    rimraf.sync(zipDir);
    rimraf.sync(zipFile);
    if (isWithGit) {
        rimraf.sync(gitDir);
    }
}
function addToExportsMessagesClassArray(exportsMessagesTsContent, tblNameAsPaskal) {
    let devidedByExportsArray = exportsMessagesTsContent.split(`;\n`);
    devidedByExportsArray.splice(devidedByExportsArray.length - 1, 1);
    devidedByExportsArray.push(`export * from "./messages/${tblNameAsPaskal}"`);
    let editedExportsMessagesTsContent = [...new Set(devidedByExportsArray)].sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }).join(";\n");
    editedExportsMessagesTsContent += ";\n";
    return editedExportsMessagesTsContent;
}

function addToMessagesJsonArray(exportsMessagesjsContent, tblNameAsPaskal) {
    let devidedByExportsArray = JSON.parse(exportsMessagesjsContent);
    devidedByExportsArray.push(tblNameAsPaskal);
    let editedExportsMessagesTsContent = "[\n    \"" + [...new Set(devidedByExportsArray)].sort((a, b) => { return a.toLowerCase().localeCompare(b.toLowerCase()); }).join("\",\n    \"") + "\"\n]\n";
    return editedExportsMessagesTsContent;
}

function addToRouteTsContent(routesTsContent, tblNameAsCamel, tblNameAsSnake, tblNameAsPaskal) {
    let fileContent = "";
    let importsArray = routesTsContent.split(`import * as Router from "./Router";`)[0].split('\n');
    importsArray.pop();
    importsArray.pop();

    importsArray.push(`import * as ${tblNameAsCamel} from "./modules/${tblNameAsSnake}/views/${tblNameAsPaskal}View";`);
    importsArray = [...new Set(importsArray)].sort((a, b) => { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    importsArray.push("");
    importsArray.push("");
    let importArrayText = importsArray.join(`\n`);
    fileContent = importArrayText;
    fileContent += `\nimport * as Router from "./Router";\n`;
    fileContent += routesTsContent.split(`import * as Router from "./Router";`)[1];

    let addRoutingArray = routesTsContent.split(`export function addRoutes(router: Router.Router<AppContext, AuthData, express.Request>) {`)[1].split(`}`)[0].split(`\n`);
    addRoutingArray.shift();
    addRoutingArray.pop();
    addRoutingArray.push(`    ${tblNameAsCamel}.addRoutes(router);`)
    addRoutingArray = [...new Set(addRoutingArray)].sort((a, b) => { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    let addRoutingText = '\n' + addRoutingArray.join(`\n`) + '\n}';
    fileContent = fileContent.split(`export function addRoutes(router: Router.Router<AppContext, AuthData, express.Request>) {`)[0];
    fileContent += `\nexport function addRoutes(router: Router.Router<AppContext, AuthData, express.Request>) {\n`;
    fileContent += addRoutingText;
    fileContent += routesTsContent.split(`export function addRoutes(router: Router.Router<AppContext, AuthData, express.Request>) {`)[1].split(`}`)[1];
    fileContent += `}\n`;
    return fileContent;
}

function addObjectIdToDbObjectIdFileImportSection(dbObjectIdFileContent, thePk) {
    let devidedByImports = dbObjectIdFileContent.split(`} from "../messages";\nimport {\n    `);
    let devidedByFromMessages = devidedByImports[1].split('\n} from "../messages/ObjectIds";');
    let devidedByObjectsId = devidedByFromMessages[0].split(",\n    ");
    let importArray = devidedByObjectsId;
    importArray.push(thePk.objctAsPaskalCase);
    let importAsString = [...new Set(importArray)].sort((a, b) => { return a.toLowerCase().localeCompare(b.toLowerCase()); }).join(",\n    ");
    devidedByFromMessages[0] = importAsString;
    devidedByImports[1] = devidedByFromMessages.join('\n} from "../messages/ObjectIds";');
    let editedDbObjectIdFileContent = devidedByImports.join(`} from "../messages";\nimport {\n    `);
    return editedDbObjectIdFileContent;
}

function addObjectIdToMfsFileCheckerJsonSetting(mfsFileCheckerText, thePk, tblNameAsSnake, fileContent) {
    let deviderByObjects = mfsFileCheckerText.split('"uniqueTableColumnTypes": [\n        { ');
    let arrayObjects = deviderByObjects[1].split("}\n    ]");
    objArray = arrayObjects[0].split(" },\n        { ");
    let objectId = `"typeScriptTypeName": "${thePk.objctAsPaskalCase}", "tableName": "${tblNameAsSnake}", "columnName": "id"`;
    objArray.push(objectId);
    arrayObjects[0] = [...new Set(objArray)].sort((a, b) => { return a.toLowerCase().localeCompare(b.toLowerCase()); }).join(" },\n        { ");
    deviderByObjects[1] = arrayObjects.join("}\n    ]");
    fileContent = deviderByObjects.join('"uniqueTableColumnTypes": [\n        { ');
    return fileContent;
}

function addObjectIdToDbSettings(dbObjectsIdSettingContent, thePk) {
    // Types Section
    let dbTypesArray = dbObjectsIdSettingContent
        .split("type IdTypes\n    = ")[1]
        .split(";")[0]
        .split("[]\n    | ");
    dbTypesArray.push(`${thePk.objctAsPaskalCase} | ${thePk.objctAsPaskalCase}`);
    const dbTypesAsString = [...new Set(dbTypesArray)].sort((a, b) => { return a.toLowerCase().localeCompare(b.toLowerCase()); }).join("[]\n    | ");
    let fileArray = dbObjectsIdSettingContent.split("type IdTypes\n    = ");
    let idTypesArraySection = fileArray[1].split(";");
    idTypesArraySection[0] = dbTypesAsString;
    fileArray[1] = idTypesArraySection.join(";");
    newFile = fileArray.join("type IdTypes\n    = ");
    // Import Devider
    let fileContent = addPkTableToImportFromMessagesSection(thePk);
    return fileContent;
}

function addPkTableToImportFromMessagesSection(thePk) {
    let devidedByImports = newFile.split("import {\n    ");
    let devidedByFromMessages = devidedByImports[1].split('\n} from "./messages";');
    let devidedByObjectsId = devidedByFromMessages[0].split(",\n    ");
    let importArray = devidedByObjectsId;
    importArray.push(thePk.objctAsPaskalCase);
    let importAsString = [...new Set(importArray)].sort((a, b) => { return a.toLowerCase().localeCompare(b.toLowerCase()); }).join(",\n    ");
    devidedByFromMessages[0] = importAsString;
    devidedByImports[1] = devidedByFromMessages.join('\n} from "./messages";');
    let fileContent = devidedByImports.join("import {\n    ");
    return fileContent;
}

function prepareVariables(columns, msgTemplateCols, msgTemplateCreateCols, msgTemplateEditCols, thePk, tblPkObj, tblNameAsPaskal, tblPkObjAsVrbl, tblNameAsCamel, colsQuary, columnSelectString, columnsGetFromResultString, tsStandardTypes, objectIdImportArray, jsJodaTypes, jsJodaImportsArray, colsToTsTypes) {
    let colsHasNullableValue = false;
    let columnsGetFromResultArray = [];
    let tblPkColName = ``;
    for (let col of columns) {
        col.nameAsSnakeCase = col.name;
        col.nameAsCamelCase = gnrtUtils.fromSnakeCaseToCamelCase(col.name);
        col.nameAsPaskalCase = gnrtUtils.fromSnakeCaseToPascalCase(col.name);
        let colObj = "";
        // names
        msgTemplateCols += `\n    ${col.nameAsCamelCase}: `;
        if (!col.isPk) {
            if (!gnrtUtils.isGeneratedColumns(col.name)) {
                msgTemplateCreateCols += `\n    ${col.nameAsCamelCase}: `;
                msgTemplateEditCols += `\n    ${col.nameAsCamelCase}?: `;
            }
        }
        // types
        if (col.isPk) {
            thePk = col;
            tblPkObj = tblNameAsPaskal + gnrtUtils.postgressNameToObjectName(col.nameAsSnakeCase);
            tblPkObjAsVrbl = tblNameAsCamel + gnrtUtils.postgressNameToObjectName(col.nameAsSnakeCase);
            colObj += tblPkObj;
            msgTemplateCols += `${tblPkObj}`;
            tblPkColName = col.name;
        } else if (gnrtUtils.isConstraintValid(col.constraint)) {
            colObj = gnrtUtils.postgressNameToObjectName(col.constraint.tblParent) + gnrtUtils.postgressNameToObjectName(col.constraint.colParent);
            // message template
            msgTemplateCols += colObj;
            if (!gnrtUtils.isGeneratedColumns(col.name)) {
                msgTemplateCreateCols += `${colObj}`;
                msgTemplateEditCols += `${colObj}`;
            }
        } else {
            colObj = gnrtUtils.fromNumberTypeToTypeScriptString(col.type);
            // message template
            msgTemplateCols += `${colObj}`;
            if (!gnrtUtils.isGeneratedColumns(col.name)) {
                msgTemplateCreateCols += `${colObj}`;
                msgTemplateEditCols += `${colObj}`;
            }
        }
        col.obj = colObj;
        col.objctAsCamelCase = gnrtUtils.fromPaskalToCamelCase(colObj);
        col.objctAsPaskalCase = gnrtUtils.fromCamelToPaskalCase(colObj);
        if (col.nullable) {
            colsHasNullableValue = true;
            // message template
            msgTemplateCols += ` | null`;
            if (!col.isPk) {
                msgTemplateCreateCols += ` | null`;
                msgTemplateEditCols += ` | null`;
            }
        }
        // message template
        msgTemplateCols += `;`;
        if (!col.isPk) {
            if (!gnrtUtils.isGeneratedColumns(col.name)) {
                msgTemplateCreateCols += `;`;
                msgTemplateEditCols += `;`;
            }
        }
        // Controller request
        colsQuary += `\n      ${col.name}: ${col.nullable ? "Opt" : "Req"}<${col.obj}>;`;
        columnSelectString += `\n            "${col.name}",`;
        columnsGetFromResultArray.push(`\n            ${col.nameAsCamelCase}: row.${col.name}.${col.nullable ? "valOpt" : "val"}()`);

        if (!tsStandardTypes.includes(colObj)) {
            objectIdImportArray.push(colObj);
        }
        if (jsJodaTypes.includes(colObj)) {
            jsJodaImportsArray.push(colObj);
        }
        col.nameAsObj = gnrtUtils.objectToVariableName(gnrtUtils.postgressNameToObjectName(col.name));
        colsToTsTypes.push({ name: col.nameAsSnakeCase, obj: colObj, nullable: !col.isNotNull });
    }
    // message template
    msgTemplateCols += "\n";
    msgTemplateCreateCols += "\n";
    msgTemplateEditCols += "\n";
    columnsGetFromResultString = columnsGetFromResultArray.join(",");
    const jsJodaToImport = [...new Set(jsJodaImportsArray)].sort((a, b) => { return a.toLowerCase().localeCompare(b.toLowerCase()); }).join(", ");
    const objectsIdToImport = [...new Set(objectIdImportArray)].sort((a, b) => { return a.toLowerCase().localeCompare(b.toLowerCase()); }).join(", ");
    return { objectsIdToImport, jsJodaToImport, tblPkColName, msgTemplateCols, msgTemplateCreateCols, msgTemplateEditCols, thePk, tblPkObj, tblPkObjAsVrbl, colsQuary, columnSelectString, columnsGetFromResultString, colsHasNullableValue };
}


async function execAsync(execCommandInit, atLocation) {
    return new Promise(resolve => {
        const ex = exec(execCommandInit, {
            cwd: atLocation
        }, function (error, stdout, stderr) {
            if (error) {
                console.log(`action: "${execCommandInit}" at location: ${atLocation} \noutput: ↓\n${error}`);
                resolve(`action: "${execCommandInit}" at location: ${atLocation}\noutput: ↓\n${error}`);
            }
            if (stdout) {
                console.log(`action: "${execCommandInit}" at location: ${atLocation} \noutput: ↓\n${stdout}`);
                resolve(`action: "${execCommandInit}" at location: ${atLocation} \noutput: ↓\n${stdout}`);
            }
            if (stderr) {
                console.log(`action: "${execCommandInit}" at location: ${atLocation} \nresult stderr: ↓\n${stderr}`);
                resolve(`action: "${execCommandInit}" at location: ${atLocation} \noutput: ↓\n${stderr}`);
            }
        });
        ex.on('exit', function (code) {
            console.log(`Child finish code: ${code}`);
            resolve(`Child finish code: ${code}`)
        });

    });

}


process.stdin.resume(); //so the program will not close instantly

async function exitHandler(options, exitCode) {
    // await insertParentGit();
    if (options.cleanup) console.log("clean");

    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on("exit", exitHandler.bind(null, { cleanup: true }));

//catches ctrl+c event
process.on("SIGINT", exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));

//catches uncaught exceptions
process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
