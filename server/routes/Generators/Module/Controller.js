const gnrtUtils = require("../gneratorTemplateUtils");

exports.generate = function (req, tblAsObject, tblAsVariable, tblPkColName, tblPkObj, tblPkObjAsVrbl, columnsMConnSelectString, columnsGetFromResultString, colsToTsTypes, objectsIdToImport, jsJodaTypeToImport, colsHasNullableValue) {

    let columns = req.body.columns;
    let thePk;
    let importTemplate = ` `;
    let colsTemplate = ``;
    for (let col of columns) {
        colsTemplate += `\n         ${col.name}: `;
        // handle

        if (col.isPk) {
            thePk = { name: col.name, obj: tblAsObject + `Id` };
            colsTemplate += `${tblAsObject}Id`;
        } else if (gnrtUtils.isConstraintValid(col.constraint)) {
            let relatedObjectId = gnrtUtils.postgressNameToObjectName(col.constraint.tblParent) + gnrtUtils.postgressNameToObjectName(col.constraint.colParent);
            colsTemplate += relatedObjectId;
            importTemplate += `,` + relatedObjectId;

            if (relatedObjectId === "AgencyId") {
                relatedToAgency = true;
            }
        } else {
            colsTemplate += ` ` + gnrtUtils.fromNumberTypeToTypeScriptString(col.type);
            if (!col.isNotNull) {
                colsTemplate += ` | null`;
            }
        }
        colsTemplate += `;`;
    }

    let controllerTemplateText = ``;
    let controllerImportSectionArray = [];
    controllerImportSectionArray.push(`import * as messages from "../../../messages";`);
    controllerImportSectionArray.push(`import { ${jsJodaTypeToImport} } from "js-joda";`);
    controllerImportSectionArray.push(`import { MConnection } from "../../../_db";`);
    controllerImportSectionArray.push(`import { ` + tblAsObject + `CreateParams } from "../../../messages/` + tblAsObject + `";`);
    controllerImportSectionArray.push(`import { ${objectsIdToImport} } from "../../../messages/ObjectIds";`);
    controllerImportSectionArray.push(`import { ${colsHasNullableValue ? `Opt, Req` : 'Req'} } from "../../../mfsqltool";`);
    controllerImportSectionArray.push(`import { undefinedToNull } from "../../../Utils/GeneralUtils";`);

    let controllerImportSectionText = controllerImportSectionArray.sort().join('\n');
    controllerTemplateText += controllerImportSectionText;

    let controllerGetByOwnObjIdText = generateGetObjByIdTemplate(req.body.tblName, columns, thePk, tblAsObject, tblAsVariable);
    controllerTemplateText += "\n" + controllerGetByOwnObjIdText;


    for (let col of columns) {
        if (gnrtUtils.isConstraintValid(col.constraint)) {
            let controllerGetListByFoeignKeysText = generateGetListObjsByForeignKeyObjektIdsTemplate(req.body.tblName, columns, tblAsObject, tblAsVariable, tblPkColName, col.objctAsCamelCase, col.objctAsPaskalCase, col.nameAsSnakeCase, col.nameAsPaskalCase);
            controllerTemplateText += "\n" + controllerGetListByFoeignKeysText;
        }
    }


    let controllerUpdateObjText = generateEditObjTemplate(columns, req.body.tblName, colsToTsTypes, thePk, tblAsObject, tblPkObj, tblPkObjAsVrbl, columnsMConnSelectString, columnsGetFromResultString, columnsGetFromResultString);
    controllerTemplateText += "\n" + controllerUpdateObjText;

    let controllerInsertObjText = generateInsertObjTemplate(req.body.tblName, columns, thePk, tblAsObject);
    controllerTemplateText += "\n" + controllerInsertObjText;

    return controllerTemplateText;
};

function generateGetObjByIdTemplate(tblName, columns, thePk, tblAsObject, tblAsVariable) {
    let columnsNameToMConnectionObjsString = ``;
    let colsSelectString = ``;
    let colResultString = ``;
    for (col of columns) {
        colResultString += `\n            ${col.nameAsCamelCase}: row.${col.nameAsSnakeCase}.${col.nullable ? "valOpt" : "val"}(),`;
        columnsNameToMConnectionObjsString += `\n           ${col.nameAsSnakeCase}: ${col.nullable ? "Opt" : "Req"}<${col.obj}>;`;
        colsSelectString += `\n                "${col.nameAsSnakeCase}",`;
    }
    colsSelectString = gnrtUtils.removeLastCharacter(colsSelectString);
    colResultString = gnrtUtils.removeLastCharacter(colResultString);
    let text =
        `export async function get${tblAsObject}ById(conn: MConnection, ${tblAsVariable}Id: ${tblAsObject}Id): Promise<messages.${tblAsObject}> {
  const row = await conn.queryOne<{` +
        columnsNameToMConnectionObjsString +
        `
  }>(conn.sql
    \`
        SELECT${colsSelectString}
        FROM "${tblName}"
        WHERE "${thePk.name}" = \${${tblAsVariable}Id}
    \`);
  const ${tblAsVariable}: messages.${tblAsObject} = {` +
        colResultString +
        `
  };
  return ${tblAsVariable};
}`;
    return text;
}

function generateGetListObjsByForeignKeyObjektIdsTemplate(tblName, columns, tblAsObject, tblAsVariable, tblPkColName, foreignKeyObjctAsCamelCase, foreignKeyObjctAsPaskalCase, foreignKeyNameAsSnakCase, foreignKeyNameAsPaskalCase) {
    let columnsNameToMConnectionObjsString = ``;
    let columnSelectString = ``;
    let colResultString = ``;
    for (col of columns) {
        colResultString += `\n            ${col.nameAsCamelCase}: row.${col.nameAsSnakeCase}.${col.nullable ? "valOpt" : "val"}(),`;
        columnsNameToMConnectionObjsString += `\n           ${col.nameAsSnakeCase}: ${col.nullable ? "Opt" : "Req"}<${col.obj}>;`;
        columnSelectString += `\n            "${col.nameAsSnakeCase}",`;
    }
    columnSelectString = gnrtUtils.removeLastCharacter(columnSelectString);
    colResultString = gnrtUtils.removeLastCharacter(colResultString);

    let text =
        `export async function get${tblAsObject}sBy${foreignKeyNameAsPaskalCase}(conn: MConnection, ${foreignKeyObjctAsCamelCase}: ${foreignKeyObjctAsPaskalCase}): Promise<messages.${gnrtUtils.postgressNameToObjectName(tblName)}[]> {
    const ${tblAsVariable}s = await conn.query<{${columnsNameToMConnectionObjsString}
    }>(conn.sql
        \`
          SELECT${columnSelectString}
      FROM "${tblName}"
      WHERE "${foreignKeyNameAsSnakCase}" = \${${foreignKeyObjctAsCamelCase}}
      \`);
    const ${tblAsVariable}sArr: messages.${tblAsObject}[] = [];
    for (const row of ${tblAsVariable}s) {
      ${tblAsVariable}sArr.push({${colResultString}\n        });
    }
    return ` +
        tblAsVariable +
        `sArr;
  }
`;
    return text;
}

function generateInsertObjTemplate(tblName, columns, thePk, tblAsObject) {
    let includeGenerated = false;
    let insertColumnsArr = [];
    for (let row of columns) {
        if (!gnrtUtils.isGeneratedColumns(row.nameAsSnakeCase)) {
            insertColumnsArr.push(`\n            ${row.nameAsSnakeCase}: params.${row.nameAsCamelCase}`);
        } else {
            if ((row.nameAsSnakeCase == 'created_at') || (row.nameAsSnakeCase == 'updated_at')) {
                insertColumnsArr.push(`\n            ${row.nameAsSnakeCase}: now`);
                includeGenerated = true;
            } else if ((row.nameAsSnakeCase == 'created_by') || (row.nameAsSnakeCase == 'updated_by')) {
                insertColumnsArr.push(`\n            ${row.nameAsSnakeCase}: agencyMemberId`);
                includeGenerated = true;
            }
        }
    }
    insertColumnsText = insertColumnsArr.join(',');
    let text =
        `export async function insert${tblAsObject}(conn: MConnection, ${includeGenerated ? `now: Instant, agencyMemberId: AgencyMemberId, ` : ''}params: ` +
        gnrtUtils.postgressNameToObjectName(tblName) +
        `CreateParams): Promise < ${gnrtUtils.postgressNameToObjectName(tblName)}Id > {
    const row = await conn.insert < {
        ${thePk.name}: Req<${thePk.obj}>;
    }> (
    "${tblName}",
    {${insertColumnsText}
        },
    conn.sql
    \`
    RETURNING id;
    \`
    );
    return row.${thePk.name}.val();
}
`;
    return text;
}

function generateEditObjTemplate(columns, tblName, colDictionay, thePk, tblAsObject, tblPkObject, tblPkObjAsVariable, columnsMConnSelectString, columnsGetFromResultString) {
    let generateColumnsParams = generateUpdateColsText(columns, thePk);
    let text =
        `export async function edit${tblAsObject}(conn: MConnection, now: Instant, agencyMemberId: AgencyMemberId, ${tblPkObjAsVariable}: ${tblPkObject}, params: messages.${tblAsObject}EditParams): Promise<messages.${tblAsObject}> {
  const row = await conn.queryOne<{${columnsMConnSelectString}
}>(conn.sql
    \`
    UPDATE "${tblName}"
        SET${generateColumnsParams}
        WHERE "${thePk.name}" = \${${tblPkObjAsVariable}}
        RETURNING *
        \`);
  return {${columnsGetFromResultString}
  };
}
`;
    return text;
}

function generateUpdateColsText(columnsDictionary, thePk) {
    let text = ``;

    for (let col of columnsDictionary) {
        if (isGeneratedColumnIncluded(col.nameAsSnakeCase)) {
            text += `\n           "${col.nameAsSnakeCase}" =`;
            if (isGeneratedAtIncluded(col.nameAsSnakeCase)) {
                text += `\${now},`;
            } else if (isGeneratedByIncluded(col.nameAsSnakeCase)) {
                text += `\${agencyMemberId},`;
            }
        } else if (col.nameAsSnakeCase !== thePk.name) {
            text += `\n           "${col.nameAsSnakeCase}" =
                    CASE
                      WHEN \${params.${col.nameAsCamelCase} !== undefined}\n                      THEN \${undefinedToNull(params.${col.nameAsCamelCase})}
                      ELSE "${col.nameAsSnakeCase}"
                     END,`;
        }
    }
    text = gnrtUtils.removeLastCharacter(text);
    return text;
}

function isGeneratedColumnIncluded(colName) {
    return colName.includes("created") || colName.includes("updated");
}
function isGeneratedAtIncluded(colName) {
    return colName.includes("_at");
}
function isGeneratedByIncluded(colName) {
    return colName.includes("_by");
}
