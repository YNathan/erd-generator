exports.generate = function (tblAsObject) {
    let objectIdTemplateText = `\n// File: 'messages/ObjectIds.ts'\n/** @TJS-type number */
export class ${tblAsObject}Id {
    private constructor() {}

    "${tblAsObject}Id": ${tblAsObject}Id;

    public static wrap(id: number): ${tblAsObject}Id {
        return <any>id;
    }

    public static unwrap(val: ${tblAsObject}Id): number {
        return <any>val;
    }
}`;

    let pIdText = `\n// File: 'db/ObjectIds.ts'\nexport function p_${tblAsObject}Id(val: any): ParseResult<${tblAsObject}Id> {
    if (typeof val !== "number") {
        return ParseResult.Fail<${tblAsObject}Id>("not a number");
    }
    return ParseResult.Value(${tblAsObject}Id.wrap(val));
}`;
    let fIdText = `export function f_${tblAsObject}Id(val: ${tblAsObject}Id): Col {
    return db.f_number(${tblAsObject}Id.unwrap(val));
}`;
    objectIdTemplateText += `\n\n` + pIdText;
    objectIdTemplateText += `\n\n` + fIdText;
    return objectIdTemplateText;
}

/*
// File: 'messages/ObjectIds.ts'
*/
exports.generateObjectIdObject = function (tblAsObject) {
    let objectIdTemplateText = `\n/** @TJS-type number */
export class ${tblAsObject}Id {
    private constructor() {}

    "${tblAsObject}Id": ${tblAsObject}Id;

    public static wrap(id: number): ${tblAsObject}Id {
        return <any>id;
    }

    public static unwrap(val: ${tblAsObject}Id): number {
        return <any>val;
    }
}\n`;

    return objectIdTemplateText;
}

/*
// For File: 'db/ObjectIds.ts'
*/
exports.generateObjectIdParsers = function (tblAsObject) {
    let objectIdTemplateText = ``;
    let pIdText = `\nexport function p_${tblAsObject}Id(val: any): ParseResult<${tblAsObject}Id> {
    if (typeof val !== "number") {
        return ParseResult.Fail<${tblAsObject}Id>("not a number");
    }
    return ParseResult.Value(${tblAsObject}Id.wrap(val));
}`;
    let fIdText = `export function f_${tblAsObject}Id(val: ${tblAsObject}Id): Col {
    return db.f_number(${tblAsObject}Id.unwrap(val));
}`;
    objectIdTemplateText += `\n` + pIdText;
    objectIdTemplateText += `\n` + fIdText;
    objectIdTemplateText += `\n`;
    return objectIdTemplateText;
}