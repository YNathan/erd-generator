const gnrtUtils = require('../gneratorTemplateUtils');

exports.generate = function (req, tblAsObject, tblAsCamelCase, tblPkObjAsVrbl) {
    let tblName = req.body.tblName;
    let generetedGetRouter = generateGetView(tblName, tblAsObject, tblAsCamelCase,req.body.columns);
    let generetedPutRouter = generatePutView(tblName, tblAsObject, tblAsCamelCase, tblPkObjAsVrbl);
    let generetedPostRouter = generatePostView(tblName, tblAsObject);
    let importText = `import { Instant } from "js-joda";
import { AppContext } from "../../../AppContext";
import { AuthData } from "../../../AuthManager";
import * as db from "../../../db";
import { MConnection } from "../../../_db";
import * as messages from "../../../messages";
import * as Router from "../../../Router";
import { authenticateAgencyAndAgencyMemberPermission } from "../../../Utils/PermissionUtils";
import { edit${tblAsObject} , get${tblAsObject}ById, insert${tblAsObject} } from "../controllers/${tblAsObject}Ctrl";
import { parseParam${tblAsObject}Id } from "./${tblAsObject}Params";\n
export function addRoutes(router: Router.Router<AppContext, AuthData, {}>) {
${generetedGetRouter}
\n${generetedPutRouter}
\n${generetedPostRouter}
}
`
    let text = importText;
    return text;
}

function getByForeginTable(tblName , tblAsObject, tblAsCamelCase, col){
    let importArray = [];
    let text = `router.GET(
        "/agencies/:agencyId/agency_members/:agencyMemberId/${col.constraint.tblParent}s/:${col.nameAsCamelCase}/${tblName}s",
        \`
            Agency member request a list of ${tblName}s related to a ${col.nameAsCamelCase}
        \`,
        "${tblAsObject}s",
        async (context: AppContext, params: any, user: AuthData | null): Promise<messages.${tblAsObject}s> => {
            await authenticateAgencyAndAgencyMemberPermission(context, params, user);
            const ${col.nameAsCamelCase} = parseParam${col.nameAsPaskalCase === "CreatedBy" || col.nameAsPaskalCase === "UpdatedBy"?  "AgencyMemberId" : col.nameAsPaskalCase}(params["${col.nameAsCamelCase}"]);
            const ${tblAsCamelCase}s = await context.readonlyConnProvider.withConnection((conn) => {
                return db.withTransaction(conn, () => {
                    return get${tblAsObject}sBy${col.nameAsPaskalCase}(new MConnection(conn), ${col.nameAsCamelCase});
                });
            });
            return { ${tblAsCamelCase}s: ${tblAsCamelCase}s };
        });`
        importArray.push(`get${tblAsObject}sBy${col.nameAsPaskalCase}`)
    return text;
}
function generateGetView(tblName, tblAsObject, tblAsCamelCase, columns) {
    let getByForeignTablesTamplates = ``;
    for(let col of columns){
            if (gnrtUtils.isConstraintValid(col.constraint)) {
                let getByForeignTableTamplates = getByForeginTable(tblName,  tblAsObject,tblAsCamelCase, col);
                getByForeignTablesTamplates += "\n" + getByForeignTableTamplates;   
        }
    }
    return getByForeignTablesTamplates;
}
function generatePutView(tblAsSnakeCase, tblAsPascalCase, tblAsCamelCase, tblPkObjAsCamelCase) {
    let text = `router.PUT(
        "/agencies/:agencyId/agency_members/:agencyMemberId/${tblAsSnakeCase}s/:${tblPkObjAsCamelCase}",
        \`
            Update ${tblAsSnakeCase} details
        \`,
        "${tblAsPascalCase}EditParams",
        "${tblAsPascalCase}",
        async (context: AppContext, params: any, user: AuthData | null, req: messages.${tblAsPascalCase}EditParams): Promise<messages.${tblAsPascalCase}> => {
            const {agencyMemberId} = await authenticateAgencyAndAgencyMemberPermission(context, params, user);
            const now = Instant.now();
            const ${tblPkObjAsCamelCase} = parseParam${tblAsPascalCase}Id(params["${tblPkObjAsCamelCase}"]);

            const ${tblAsCamelCase} = await context.connPool.withConnection(conn => {
                return db.withTransaction(
                    conn,
                    async (): Promise<messages.${tblAsPascalCase}> => {
                        return await edit${tblAsPascalCase}(new MConnection(conn), now, agencyMemberId, ${tblPkObjAsCamelCase}, req);
                    }
                );
            });
            return ${tblAsCamelCase};
        }
    );`;
    return text;
}
function generatePostView(tblName, tblAsPascalCase) {
    let text = `router.POST(
        "/agencies/:agencyId/agency_members/:agencyMemberId/${tblName}s",
        \`
            Insert new ${tblName}
        \`,
        "${tblAsPascalCase}CreateParams",
        "${tblAsPascalCase}",
        async (context: AppContext, params: any, user: AuthData | null, req: messages.${tblAsPascalCase}CreateParams): Promise<messages.${tblAsPascalCase}> => {
            const {agencyMemberId} = await authenticateAgencyAndAgencyMemberPermission(context, params, user);
            const now = Instant.now();

            const resultInsert = await context.connPool.withConnection(conn => {
                return db.withTransaction(
                    conn,
                    async (): Promise<messages.${tblAsPascalCase}> => {
                        const returning${tblAsPascalCase}Id = await insert${tblAsPascalCase}(new MConnection(conn), now, agencyMemberId, req);
                        return await get${tblAsPascalCase}ById(new MConnection(conn), returning${tblAsPascalCase}Id);
                    }
                );
            });
            return resultInsert;
        }
    );`;
    return text;
}