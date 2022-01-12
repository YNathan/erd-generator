exports.generate = function(tblName,tblAsObject,tblAsVariable,pkColName,tblPkObj){
    let text = `# add below lines to files\n\n## File: 'src/_db.ts'\nat array 'IdTypes': '| ${tblPkObj} | ${tblPkObj}[]'`;
    text+= `\n\n## File: 'src/mfsqlchecker.json'\nat element 'uniqueTableColumnTypes': '{ "typeScriptTypeName": "${tblPkObj}", "tableName": "${tblName}", "columnName": "${pkColName}" },'`;
    text += `\n\n## File: 'src/messages.ts'\nin the exports's list: 'export * from "./messages/${tblAsObject}";'`;
    text += `\n\n## File: 'messages/messages.json'\nin the array: \n"${tblAsObject}",\n"${tblAsObject}s",\n"${tblAsObject}CreateParams",\n"${tblAsObject}EditParams",\n`;
    text += `\n\n## File: 'src/routes.ts'\nin the imports section: 'import * as ${tblAsVariable}View from "./modules/${tblName}/views/${tblAsObject}View";'   \nin the 'addRoutes' function: '${tblAsVariable}View.addRoutes(router);'`;
    text += '\n\n### you will get extra points if you keep an eyse on alphabetic style :wink:';
    return text;
}

