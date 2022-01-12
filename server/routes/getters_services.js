const pgStructure = require('pg-structure').default;
const { Pool } = require('pg');



exports.testDbConnection = function (req, res) {

    let query = `SELECT * 
                     FROM public.hr_document_type;`;
    new Pool({
        connectionString: `postgres://${req.query.username}:${req.query.password}@${req.query.host}:${5432}/${req.query.dbName}`
    }).query(query).then((results) => {
        res.json(results.rows);
    }).catch((err) => {
        res.status = 403;
        res.json(err);
    });

}

exports.getTables = function (req, res) {
    pgStructure({ database: req.query.dbName, user: req.query.username, password: req.query.password, host: req.query.host }, ['public'])
        .then((db) => {
            // Basic
            var resTables = db.schemas.get('public').tables;  // Map of Table objects.

            let tables = [];
            // List of table names
            for (let table of resTables.values()) {
                tables.push(table.name)
            }
            res.send({ tablesName: tables });
        })
        .catch(err => console.log(err.stack));
}


exports.getTableStructure = function (req, res) {
    let tblName = req.query.tblName;
    pgStructure({ database: req.query.dbName, user: req.query.username, password: req.query.password, host: req.query.host }, { includeSchemas: ["public"] })
        .then((db) => {
            const table = db.get('public.' + tblName);
            let columnsArray = [...table.columns.values()];
            let tableCols = [];
            let pkArray = [];
            pkArray = pkArray.concat(columnsArray.filter(x => x.isPrimaryKey));

            for (let column of columnsArray) {

                let col = {
                    name: column.name,
                    type: column.type.name,
                    allowNull: !column.notNull,
                    isPk: column.isPrimaryKey,
                    relatedToTable: column.isForeignKey ? [...column.foreignKeys.values()][0].referencedTable.name : undefined,
                    atColumn: column.isForeignKey ? [...[...column.foreignKeys.values()][0].referencedColumns.values()][0].name : undefined,
                    fkName: column.isForeignKey ? [...column.foreignKeys.values()][0].name : undefined,
                    constraint: column.isForeignKey ? fillContraintFromColumn(column) : undefined
                }
                tableCols.push(col);
            }
            res.send({ tableCol: tableCols });
        }).catch((err) => {
            console.log(err.stack)
        });
}

function fillContraintFromColumn(column) {
    return {
        colName: column.name,
        fkName: [...column.foreignKeys.values()][0].name,
        toTbl: [...column.foreignKeys.values()][0].referencedTable.name,
        toCol: [...[...column.foreignKeys.values()][0].referencedColumns.values()][0].name
    }
}
function findElement(arr, propName, propValue) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i][propName] == propValue)
            return arr[i];
}


function assignElementAt(arr, propName, propValue, assignPropName, assignPropValue) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][propName] == propValue) {
            arr[i][assignPropName] = assignPropValue;
            break;
        }
    }
}

exports.getRelations = function (req, res) {
    let selectRelationsQuary = `
    SELECT
        tc.table_name,
        kcu.column_name,
        ccu.table_name AS foreign_table_name,
        ccu.column_name AS foreign_column_name
    FROM
        information_schema.table_constraints AS tc
        JOIN information_schema.key_column_usage AS kcu
          ON tc.constraint_name = kcu.constraint_name
          AND tc.table_schema = kcu.table_schema
        JOIN information_schema.constraint_column_usage AS ccu
          ON ccu.constraint_name = tc.constraint_name
          AND ccu.table_schema = tc.table_schema
    WHERE tc.constraint_type = 'FOREIGN KEY';`;
    new Pool({
        connectionString: `postgres://${req.query.username}:${req.query.password}@${req.query.host}:${5432}/${req.query.dbName}`
    }).query(selectRelationsQuary)
        .then((resDb) => {
            let parentToChildsDictionary = {};
            let childToParentsDictionary = {};
            for (row of resDb.rows) {
                if (parentToChildsDictionary.hasOwnProperty(row.foreign_table_name)) {
                    parentToChildsDictionary[row.foreign_table_name].push(row.table_name);
                } else {
                    parentToChildsDictionary[row.foreign_table_name] = [row.table_name];
                }
                if (childToParentsDictionary.hasOwnProperty(row.table_name)) {
                    childToParentsDictionary[row.table_name].push(row.foreign_table_name);
                } else {
                    childToParentsDictionary[row.table_name] = [row.foreign_table_name];
                }
                parentToChildsDictionary[row.foreign_table_name] = [...new Set(parentToChildsDictionary[row.foreign_table_name])];
                childToParentsDictionary[row.table_name] = [...new Set(childToParentsDictionary[row.table_name])];


            }


            let objectResponce = {
                parentToChildsDictionary: parentToChildsDictionary,
                childToParentsDictionary: childToParentsDictionary,

            }
            res.json(objectResponce);
        })
        .catch((err) => {
            console.log(err);
        });
}






exports.getTableRelations = function (req, res) {
    let tblName = req.query.table;
    let selectRelationsQuary = `
    SELECT
        tc.table_name,
        kcu.column_name,
        ccu.table_name AS foreign_table_name,
        ccu.column_name AS foreign_column_name
    FROM
        information_schema.table_constraints AS tc
        JOIN information_schema.key_column_usage AS kcu
          ON tc.constraint_name = kcu.constraint_name
          AND tc.table_schema = kcu.table_schema
        JOIN information_schema.constraint_column_usage AS ccu
          ON ccu.constraint_name = tc.constraint_name
          AND ccu.table_schema = tc.table_schema
    WHERE tc.constraint_type = 'FOREIGN KEY';`;
    let selectQuary = "select * from agency;";
    new Pool({
        connectionString: `postgres://${req.query.username}:${req.query.password}@${req.query.host}:${5432}/${req.query.dbName}`
    }).query(selectRelationsQuary)
        .then((resDb) => {
            let parentToChildsDictionary = {};
            let childToParentsDictionary = {};
            for (row of resDb.rows) {
                if (parentToChildsDictionary.hasOwnProperty(row.foreign_table_name)) {
                    parentToChildsDictionary[row.foreign_table_name].push(row.table_name);
                } else {
                    parentToChildsDictionary[row.foreign_table_name] = [row.table_name];
                }
                if (childToParentsDictionary.hasOwnProperty(row.table_name)) {
                    childToParentsDictionary[row.table_name].push(row.foreign_table_name);
                } else {
                    childToParentsDictionary[row.table_name] = [row.foreign_table_name];
                }
                parentToChildsDictionary[row.foreign_table_name] = [...new Set(parentToChildsDictionary[row.foreign_table_name])];
                childToParentsDictionary[row.table_name] = [...new Set(childToParentsDictionary[row.table_name])];


            }



            let tables = [];
            let returnedChildTable = tblName;
            for (let i = 0; i < Object.keys(parentToChildsDictionary); i++) {
                returnedChildTable = ""; recursiveFunction()
            }



            let objectResponce = {
                parentToChildsDictionary: parentToChildsDictionary,
                childToParentsDictionary: childToParentsDictionary,

            }
            res.json(objectResponce);
        })
        .catch((err) => {
            console.log(err);
        });
}

