exports.postgressNameToObjectName = function (value) {
    const titleWords = value.split('_');
    let title = '';
    for (const word of titleWords) {
        const newWord = word.charAt(0).toUpperCase() + word.slice(1);
        title += newWord;
    }
    return title;
}
exports.isConstraintValid = function (constraint) {
    let isValid = false;
    if (constraint !== undefined) {
        if (constraint.name && constraint.tblParent && constraint.colParent) {
            isValid = true;
        }
    }
    return isValid;
}

exports.objectToVariableName = function (string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

exports.removeLastCharacter = function (val) {
    return val.substring(0, val.length - 1);
}

exports.fromNumberTypeToTypeScriptString = function (number) {
    let typeEnum;

    switch (number) {
        case 'INTEGER': {
            typeEnum = 'number';
            break;
        }
        case 'TEXT': {
            typeEnum = 'string';
            break;
        }
        case 'BOOLEAN': {
            typeEnum = 'boolean';
            break;
        }
        case 'LOCALDATE': {
            typeEnum = 'LocalDate';
            break;
        }
        case 'INSTANT': {
            typeEnum = 'Instant';
            break;
        }
        case 'JSONB': {
            typeEnum = 'DbJson';
            break;
        }
        default: {
            typeEnum = 'number';
            break;
        }
    }
    return typeEnum;
}
exports.fromNumberTypeToPostgressString = function (number) {

    let typeEnum;

    switch (number) {
        case 'INTEGER': {
            typeEnum = 'INT';
            break;
        }
        case 'TEXT': {
            typeEnum = 'TEXT';
            break;
        }
        case 'BOOLEAN': {
            typeEnum = 'BOOLEAN';
            break;
        }
        case 'LOCALDATE': {
            typeEnum = 'DATE';
            break;
        }
        case 'INSTANT': {
            typeEnum = 'TIMESTAMPTZ';
            break;
        }
        case 'JSONB': {
            typeEnum = 'JSONB';
            break;
        }
        default: {
            typeEnum = 'INTEGER';
            break;
        }
    }
    return typeEnum;
}

/**
 snake_case
 pascalCase
 */
exports.fromSnakeCaseToPascalCase = function (valAsSnake) {
    var snackArray = valAsSnake.split('_');
    let pascalCase = '';
    for (let word of snackArray) {
        pascalCase += word.charAt(0).toUpperCase() + word.slice(1);

    }
    return pascalCase;
}

exports.fromSnakeCaseToCamelCase = function (valAsSnake) {
    var snackArray = valAsSnake.split('_');
    let camelCase = '';
    for (let word of snackArray) {
        camelCase += word.charAt(0).toUpperCase() + word.slice(1);

    }
    camelCase = camelCase.charAt(0).toLowerCase() + camelCase.slice(1);
    return camelCase;
}

exports.fromSnakeCaseToKababCase = function (valAsSnake) {
    var snackArray = valAsSnake.split('_');
    let kababCase = '';
    for (let word of snackArray) {
        kababCase += word + "-";

    }
    kababCase = this.removeLastCharacter(kababCase);
    return kababCase;
}

exports.fromSnakeCaseToUpperCase = function (valAsSnake) {
    var snackArray = valAsSnake.split('_');
    let camelCase = '';
    for (let word of snackArray) {
        camelCase += word.charAt(0).toUpperCase() + word.slice(1);
    }
    return camelCase;
}


exports.fromPaskalToCamelCase = function (valAsPaskal) {
    return valAsPaskal.charAt(0).toLowerCase() + valAsPaskal.slice(1);
}
exports.fromCamelToPaskalCase = function (valAsCamel) {
    return valAsCamel.charAt(0).toUpperCase() + valAsCamel.slice(1);
}

exports.isGeneratedColumns = function (colName) {
    let generatedColumnsName = ['id', 'created_at', 'created_by', 'updated_at', 'updated_by'];
    return (generatedColumnsName.includes(colName));
}

exports.importStatment = function (impotedObjectArray, importFrom) {
    const importedObjects = [...new Set(impotedObjectArray)].sort((a, b) => {return a.toLowerCase().localeCompare(b.toLowerCase());}).join(', ');
    return `import { ${importedObjects} } from "${importFrom}"`;
}

exports.isFromDbJoda = function (obj) {
    return ['Instant', 'LocalDate', 'LocalDateTime'].includes(obj);
}
exports.isStrongType = function (obj) {
    return ['number','string','boolean','json'].includes(obj);
}


