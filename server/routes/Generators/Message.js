exports.generate = function(tblAsObject,tblAsVariable,objsToImportText,jsJodaToImport, msgTemplateCols, msgTemplateCreateCols,msgTemplateEditCols){
    let messagesTemplateText = `import { ${jsJodaToImport} } from "./JSJodaJSON";
import { ${objsToImportText} } from "./ObjectIds";

export interface ${tblAsObject}s {\n    ${tblAsVariable}s: ${tblAsObject}[];\n}

export interface ${tblAsObject} {${msgTemplateCols}}

export interface ${tblAsObject}CreateParams {${msgTemplateCreateCols}}

export interface ${tblAsObject}EditParams {${msgTemplateEditCols }}
`;
    return messagesTemplateText;

}