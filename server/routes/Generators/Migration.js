const gnrtUtils = require('./gneratorTemplateUtils');
exports.generate = function(req) {
    let tblName = req.body.tblName;
    let columns = req.body.columns;
    let constraints = [];
    let migrationTemplateText = `CREATE TABLE "${tblName}"\n(`;
    for (let col of columns) {
        let colName = col.name;
        migrationTemplateText += `\n    "${colName}" `;
        // handle primary key
        if (col.isPk) {
            migrationTemplateText += `SERIAL PRIMARY KEY`;
        }
        // handle not null
        else {
            migrationTemplateText += gnrtUtils.fromNumberTypeToPostgressString(col.type);
            if (!col.nullable) {
                migrationTemplateText += ` NOT NULL`;
            }
        }
        migrationTemplateText += `,`;
        if (gnrtUtils.isConstraintValid(col.constraint)) {
            let tblParent = col.constraint.tblParent;
            let colParent = col.constraint.colParent;
            let constraintName = col.constraint.name;
            let colConstraintText = `ALTER TABLE "${tblName}" ADD FOREIGN KEY ("${colName}") REFERENCES "${tblParent}" ("${colParent}");`;
            constraints.push(colConstraintText);
        }
    }
    // remove the coma of the last col
    migrationTemplateText = gnrtUtils.removeLastCharacter(migrationTemplateText);
    // closing the breakerts
    migrationTemplateText += '\n);';
    for (let currCnstrText of constraints) {
        migrationTemplateText += "\n";
        migrationTemplateText += currCnstrText;
    }
    return migrationTemplateText;
}