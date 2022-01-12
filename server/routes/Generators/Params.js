exports.generate = function (tblPkObj) {
    let text = `import {  ${tblPkObj} } from "../../../messages/ObjectIds";
import { StatusError } from "../../../Router";

export function parseParam${tblPkObj}(param: string): ${tblPkObj} {
    const num = parseInt(param, 10);
    if (isNaN(num)) {
        throw new StatusError(404);
    }
    return  ${tblPkObj}.wrap(num);
}
`;
    return text;
}