const gnrtUtils = require('../gneratorTemplateUtils');

exports.generate = function(tblAsObject,columns){

    let importsArr = [];
    let importObjDbJoda = [];
    let importParserDbJoda = [];
    let importObjObjects = [];
    let importStrongTypes = [];
    let importParsersObjects = [];

    function getParsersFromCol(columns) {
        let parserFromColText = '';
        for (let col of columns) {
            parserFromColText += `\n        public static p_${col.nameAsCamelCase}(val: any): db.ParseResult<${col.obj}> {
                return p_`+ col.obj + `(val);
            }`;
            parserFromColText += `\n        public static f_${col.nameAsCamelCase}(val: ${col.obj}): db.Col {
                return f_${col.obj}(val);
            }`;
            if(gnrtUtils.isFromDbJoda(col.obj)){
                importObjDbJoda.push(`${col.obj}`);
                importParserDbJoda.push(`f_${col.obj}`);
                importParserDbJoda.push(`p_${col.obj}`);
            }else if(gnrtUtils.isStrongType(col.obj)){
                importStrongTypes.push(`f_${col.obj}`);
                importStrongTypes.push(`p_${col.obj}`);
            }else{
                importObjObjects.push(`${col.obj}`);
                importParsersObjects.push(`f_${col.obj}`);
                importParsersObjects.push(`p_${col.obj}`);
            }
        }

        if(importObjDbJoda.length > 0){
            importsArr.push(`import { ${[...new Set(importObjDbJoda)].sort((a, b) => {return a.toLowerCase().localeCompare(b.toLowerCase());}).join(', ')} } from "js-joda";`);
            importsArr.push(`import { ${[...new Set(importParserDbJoda)].sort((a, b) => {return a.toLowerCase().localeCompare(b.toLowerCase());}).join(', ')} } from "../../../db/DbJoda";`);
        }
        if(importStrongTypes.length > 0){
            importsArr.push(`import { ${[...new Set(importStrongTypes)].sort((a, b) => {return a.toLowerCase().localeCompare(b.toLowerCase());}).join(', ')} } from "../../../db";`); 
        }
        if(importObjObjects.length > 0){
            importsArr.push(`import { ${[...new Set(importObjObjects)].sort((a, b) => {return a.toLowerCase().localeCompare(b.toLowerCase());}).join(', ')} } from "../../../messages";`);
            importsArr.push(`import { ${[...new Set(importParsersObjects)].sort((a, b) => {return a.toLowerCase().localeCompare(b.toLowerCase());}).join(', ')} } from "../../../db/ObjectIds";`);
        }

        importsArr.push(`import * as db from "../../../db";`);
        return parserFromColText;
    }
   
    let columnsModelParsers = getParsersFromCol(columns);
    
let text = `${importsArr.sort().join('\n')}

export class `+ tblAsObject + ` {` + columnsModelParsers + `
}
`;

return text;
    
        
    
}

