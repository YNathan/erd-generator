var pgStructure = require('pg-structure');
var config = require('config');
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: `postgres://${config.get("dbConfig.username")}:${config.get("dbConfig.password")}@${config.get("dbConfig.host")}:${config.get("dbConfig.port")}/${config.get("dbConfig.dbName")}`
});

exports.getHrDocumentsType = function (req, res) {
    let query = `SELECT * 
                 FROM public.hr_document_type;`;
    new Pool({
        connectionString: `postgres://${req.query.username}:${req.query.password}@${req.query.host}:${5432}/${req.query.dbName}`
    }).query(query).then((results) => {
        res.json(results.rows);
    });
}

exports.getHrSubsectionTemplateByDocumentTypeId = function (req, res) {
    let query = `SELECT * 
                 FROM public.hr_subsection_template
                 WHERE document_type = ${req.query.docTypeId};`;
    new Pool({
        connectionString: `postgres://${req.query.username}:${req.query.password}@${req.query.host}:${5432}/${req.query.dbName}`
    }).query(query).then((results) => {
        res.json(results.rows);
    });
}

exports.getHrSubsectionByHrSubsectionTemplateId = function (req, res) {
    let query = `SELECT * 
                 FROM public.hr_subsection
                 WHERE template_id = ${req.query.subsectionTemplateId};`;
    new Pool({
        connectionString: `postgres://${req.query.username}:${req.query.password}@${req.query.host}:${5432}/${req.query.dbName}`
    }).query(query).then((results) => {
        res.json(results.rows);
    });
}


exports.getTableStructure = function (req, res) {
    let tblName = req.query.tblName;
    pgStructure({ database: config.get("dbConfig.dbName"), user: config.get("dbConfig.username"), password: config.get("dbConfig.password") }, ['public'])
        .then((db) => {

            let columnsArray = [...db.get('public.' + tblName).columns.values()];
            let tableCols = [];
            let pkArray = [...db.get('public.' + tblName).primaryKeyColumns.values()];
            let fkMap = [...db.get('public.' + tblName).foreignKeyColumns.values()];

            for (let column of columnsArray) {
                let col = {
                    name: column.name,
                    type: column.type,
                    allowNull: column.allowNull,
                    isPk: false,
                    relatedToTable: undefined,
                    atColumn: undefined,
                    fkName: undefined
                }
                tableCols.push(col);
            }
            // PK Col
            for (let pk of pkArray) {
                assignElementAt(tableCols, "name", pk.name, "isPk", true);
            }
            // FG Cols
            let ralations = [...db.get('public.' + tblName).m2oRelations.values()];
            for (let relation of ralations) {
                assignElementAt(tableCols, "name", [...relation.constraint.columns.values()][0].name, "relatedToTable", relation.targetTable.name);
                assignElementAt(tableCols, "name", [...relation.constraint.columns.values()][0].name, "atColumn", [...relation.constraint.referencedColumnsBy.values()][0].name);
                assignElementAt(tableCols, "name", [...relation.constraint.columns.values()][0].name, "fkName", relation.constraint.name);
                let fk = {
                    colName: [...relation.constraint.columns.values()][0].name,
                    fkName: relation.constraint.name,
                    toTbl: relation.targetTable.name,
                    toCol: [...relation.constraint.referencedColumnsBy.values()][0].name
                }
                assignElementAt(tableCols, "name", fk.colName, "constraint", fk);
            }




            res.send({ tableCol: tableCols });

        })
        .catch(err => console.log(err.stack));
}


function findElement(arr, propName, propValue) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i][propName] == propValue)
            return arr[i];

    // will return undefined if not found; you could return a default instead
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
    let selectQuary = "select * from agency;";
    pool.query(selectRelationsQuary)
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
            pool.end();
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
    pool.query(selectRelationsQuary)
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
            pool.end();
        });
}



function getObj(child, table) {
    if (child[table] === undefined) {
        child[table] = {};
    }
    let resultFromChildren = getChildrenTable(table);
    if (resultFromChildren === undefined) {
        return child;
    } else {
        for (let i in resultFromChildren) {
            let res = getObj(child[table], resultFromChildren[i]);
            if (res.constructor === ({}).constructor) {
                child[table] = res;
            } else {
                child[table] = { res: undefined };
            }
        }
        return child;
    }
}

exports.testRelation = function () {
    let tableName = "contract";
    let children = {};
    let root = getObj(children, tableName);


    let parentToChildsDictionary = {
        "user": [
            "active_auth_token",
            "caregiver",
            "agency_member",
            "user_fcm_registration_token",
            "chat_message",
            "chat_message_viewed",
            "active_access_key",
            "hr_document",
            "insurer_member",
            "unread_chat_agency_member_email_reminder",
            "user_two_factor_auth_code",
            "hr_link_code",
            "visit_instance"
        ],
        "agency": [
            "agency_member",
            "caregiver_agency_assoc",
            "agency_caregiver_chat_room",
            "hr_document",
            "internal_agency_chat_room",
            "upload_job",
            "imported_visit",
            "hr_application_agency_question_settings",
            "hr_application_caregiver_answer",
            "hr_application_agency_document_settings",
            "cluster",
            "report_weekly_agency",
            "patient",
            "contract_type",
            "service_code",
            "physician",
            "hr_section",
            "report_visit_stats",
            "compliance_item",
            "hr_subsection",
            "hr_question_group",
            "hr_question",
            "hr_document_type",
            "hr_caregiver_answer",
            "hr_required_documents_settings",
            "add_caregiver_queue",
            "vbp_item",
            "vbp_agency_settings",
            "boosts",
            "send_sms_job",
            "request_history",
            "visit",
            "orientation_test",
            "orientation_type",
            "orientation_due_date",
            "patient_documents_types",
            "plan_of_care_type",
            "orientation_bundle",
            "recruitment_caregiver_selected",
            "traceable_questions_report",
            "agency_sms_subscriptions",
            "payer",
            "location_group",
            "office",
            "discharge_to_ref",
            "discharge_reason_ref",
            "invoice_batch",
            "invoice",
            "export_batch",
            "payroll_code",
            "payroll_batch",
            "check"
        ],
        "caregiver": [
            "caregiver_agency_assoc",
            "caregiver_notification",
            "caregiver_visit_engagement",
            "agency_caregiver_chat_room",
            "visit_chat_room",
            "send_sms_job",
            "sent_sms",
            "imported_visit",
            "caregiver_last_seen",
            "caregiver_phonenumber",
            "visit",
            "agency_member_caregiver_chat_room",
            "hr_application_caregiver_answer",
            "hr_document",
            "cluster",
            "caregiver_cluster_engagement",
            "caregiver_available_visit",
            "plan_of_care",
            "caregiver_exclusions",
            "caregiver_compliance",
            "hr_caregiver_answer",
            "boosts",
            "rn_algorithm_suggestions",
            "vbp_instance",
            "chat_message",
            "patient",
            "request_history",
            "orientation_due_date",
            "orientation_test_caregiver_answer",
            "orientation_caregiver_watch_data",
            "orientation_caregiver_total_watch_data",
            "patient_documents_scheduled_visit",
            "patient_documents_answers",
            "compliance_notification",
            "orientation_bundle_certification",
            "rn_patient_calls",
            "rn_contact_patient_reminder",
            "recruitment_caregiver_application",
            "recruitment_caregiver_application_answer",
            "recruitment_caregiver_selected",
            "recruitment_chat_bot",
            "caregiver_hr_document_uploads",
            "caregiver_patient_document_uploads",
            "visit_instance",
            "clockin_clockout_record"
        ],
        "agency_member": [
            "visit",
            "scheduled_visit",
            "scheduled_visit_edit_response",
            "agency_member",
            "upload_job",
            "agency_member_caregiver_chat_room",
            "agency",
            "referral_source",
            "social_worker",
            "patient",
            "boosts",
            "visit_assigned_coordinator",
            "rn_algorithm_suggestions",
            "vbp_instance",
            "send_sms_job",
            "chat_message",
            "request_history",
            "orientation_test",
            "orientation_type",
            "orientation_due_date",
            "patient_documents_sending_history",
            "orientation_type_language",
            "orientation_test_language",
            "agency_member_settings",
            "recruitment_caregiver_selected",
            "orientation_bundle",
            "payer",
            "service_code",
            "office",
            "contract_type",
            "billing_rate",
            "discharge_to_ref",
            "discharge_reason_ref",
            "authorization",
            "location_group",
            "location_group_county",
            "contract",
            "visit_instance",
            "invoice_batch",
            "invoice",
            "clockin_clockout_record",
            "invoice_visit",
            "export_batch",
            "export_visit",
            "payroll_code",
            "pay_rate",
            "payroll_batch",
            "payroll_visit",
            "check",
            "check_line"
        ],
        "visit": [
            "caregiver_visit_engagement",
            "scheduled_visit",
            "visit_chat_room",
            "visit_machine_learning_stats",
            "cluster",
            "caregiver_available_visit",
            "visit_assigned_coordinator",
            "rn_algorithm_suggestions",
            "send_sms_job",
            "request_history",
            "patient_documents_scheduled_visit",
            "reminder_visit_awaiting_assignment",
            "automatic_visit_boost_timer",
            "rn_patient_calls",
            "contact_patient_visits_re_enabler",
            "rn_contact_patient_reminder",
            "caregiver_patient_document_uploads"
        ],
        "chat_room": [
            "chat_message",
            "chat_message_viewed",
            "agency_caregiver_chat_room",
            "visit_chat_room",
            "internal_agency_chat_room",
            "agency_member_caregiver_chat_room",
            "unread_chat_agency_member_email_reminder"
        ],
        "sms_link_code": [
            "send_sms_job",
            "sent_sms"
        ],
        "sent_sms": [
            "sms_click_event",
            "boosts"
        ],
        "scheduled_visit": [
            "scheduled_visit_edit_request",
            "patient_at_risk",
            "patient_documents_scheduled_visit",
            "plan_of_care"
        ],
        "scheduled_visit_edit_request": [
            "scheduled_visit_edit_response"
        ],
        "hr_document_type": [
            "hr_application_agency_document_settings",
            "hr_question_template",
            "hr_document",
            "hr_subsection_template"
        ],
        "hr_section_template": [
            "hr_subsection_template",
            "hr_section"
        ],
        "hr_question_group_template": [
            "hr_question_template",
            "hr_question_group"
        ],
        "hr_question_template": [
            "hr_application_agency_question_settings",
            "hr_application_caregiver_answer",
            "hr_question"
        ],
        "cluster": [
            "caregiver_cluster_engagement"
        ],
        "referral_source": [
            "patient"
        ],
        "social_worker": [
            "patient"
        ],
        "insurer": [
            "insurer_member",
            "patient"
        ],
        "insurer_member": [
            "insurer"
        ],
        "patient": [
            "contract",
            "patient_clinical_info",
            "patient_at_risk",
            "rn_algorithm_suggestions",
            "vbp_instance",
            "physician_patient_assoc",
            "request_history",
            "patient_upload_job_info",
            "hhaexchange_patient_assoc",
            "visit",
            "caregiver_patient_document_uploads",
            "visit_instance",
            "invoice",
            "clockin_clockout_record"
        ],
        "contract_type": [
            "contract",
            "billing_rate",
            "invoice_batch",
            "check"
        ],
        "contract": [
            "treatment",
            "authorization",
            "visit_instance"
        ],
        "physician": [
            "physician_patient_assoc",
            "treatment_medical_order",
            "treatment_advance_directive"
        ],
        "treatment": [
            "treatment_medical_order",
            "treatment_advance_directive",
            "treatment_diagnosis",
            "visit",
            "plan_of_care"
        ],
        "compliance_item": [
            "caregiver_compliance",
            "compliance_notification"
        ],
        "hr_subsection_template": [
            "hr_question_template",
            "hr_subsection"
        ],
        "hr_section": [
            "hr_subsection"
        ],
        "hr_question_group": [
            "hr_question"
        ],
        "hr_subsection": [
            "hr_question",
            "hr_document"
        ],
        "hr_question": [
            "hr_caregiver_answer"
        ],
        "upload_job": [
            "add_caregiver_queue",
            "patient_upload_job_info"
        ],
        "vbp_item": [
            "vbp_agency_settings",
            "vbp_instance"
        ],
        "icd9_code": [
            "treatment_diagnosis"
        ],
        "icd10_code": [
            "treatment_diagnosis"
        ],
        "orientation_test": [
            "orientation_test_question",
            "orientation_type",
            "orientation_due_date",
            "orientation_test_language"
        ],
        "orientation_type": [
            "orientation_due_date",
            "orientation_caregiver_watch_data",
            "orientation_caregiver_total_watch_data",
            "orientation_type_language",
            "orientation_type"
        ],
        "orientation_test_question": [
            "orientation_test_caregiver_answer",
            "orientation_test_question_language"
        ],
        "orientation_due_date": [
            "orientation_test_caregiver_answer",
            "orientation_caregiver_watch_data",
            "orientation_caregiver_total_watch_data",
            "compliance_notification"
        ],
        "patient_documents_types": [
            "patient_documents_types_versions",
            "patient_documents_scheduled_visit",
            "patient_document_question_link",
            "traceable_questions_report_item"
        ],
        "patient_documents_types_versions": [
            "patient_documents_scheduled_visit"
        ],
        "patient_documents_scheduled_visit": [
            "patient_documents_answers",
            "patient_documents_sending_history",
            "vbp_instance"
        ],
        "future_work_item": [
            "unread_chat_agency_member_email_reminder",
            "reminder_visit_awaiting_assignment",
            "automatic_visit_boost_timer",
            "contact_patient_visits_re_enabler",
            "rn_contact_patient_reminder"
        ],
        "caregiver_compliance": [
            "compliance_notification"
        ],
        "plan_of_care_type": [
            "plan_of_care_item",
            "visit",
            "plan_of_care"
        ],
        "plan_of_care": [
            "patient_documents_types"
        ],
        "orientation_bundle": [
            "orientation_type",
            "orientation_bundle_certification",
            "orientation_bundle"
        ],
        "recruitment_application_question": [
            "recruitment_application_question",
            "recruitment_caregiver_application_answer"
        ],
        "traceable_questions_report": [
            "traceable_questions_report_item"
        ],
        "payer": [
            "contract_type"
        ],
        "office": [
            "contract_type"
        ],
        "service_code": [
            "billing_rate",
            "authorization",
            "visit_instance",
            "invoice_visit"
        ],
        "location_group": [
            "location_group_county"
        ],
        "billing_rate": [
            "billing_rate_county"
        ],
        "discharge_to_ref": [
            "contract"
        ],
        "discharge_reason_ref": [
            "contract"
        ],
        "invoice_batch": [
            "invoice"
        ],
        "visit_instance": [
            "clockin_clockout_record",
            "invoice_visit",
            "payroll_visit"
        ],
        "invoice": [
            "invoice_visit",
            "check_line"
        ],
        "export_batch": [
            "export_visit"
        ],
        "invoice_visit": [
            "export_visit",
            "check_line"
        ],
        "payroll_code": [
            "pay_rate",
            "visit_instance"
        ],
        "payroll_batch": [
            "payroll_visit"
        ],
        "pay_rate": [
            "payroll_visit"
        ],
        "check": [
            "check_line"
        ],
        "billing_rate_county": [
            "invoice_visit"
        ]
    }
    let childToParentsDictionary = {
        "active_auth_token": [
            "user"
        ],
        "caregiver": [
            "user"
        ],
        "agency_member": [
            "user",
            "agency",
            "agency_member"
        ],
        "caregiver_agency_assoc": [
            "caregiver",
            "agency"
        ],
        "user_fcm_registration_token": [
            "user"
        ],
        "caregiver_notification": [
            "caregiver"
        ],
        "visit": [
            "agency_member",
            "caregiver",
            "treatment",
            "agency",
            "patient",
            "plan_of_care_type"
        ],
        "caregiver_visit_engagement": [
            "caregiver",
            "visit"
        ],
        "scheduled_visit": [
            "visit",
            "agency_member"
        ],
        "chat_message": [
            "chat_room",
            "user",
            "agency_member",
            "caregiver"
        ],
        "chat_message_viewed": [
            "chat_room",
            "user"
        ],
        "agency_caregiver_chat_room": [
            "chat_room",
            "agency",
            "caregiver"
        ],
        "visit_chat_room": [
            "chat_room",
            "visit",
            "caregiver"
        ],
        "send_sms_job": [
            "sms_link_code",
            "caregiver",
            "visit",
            "agency_member",
            "agency"
        ],
        "sent_sms": [
            "sms_link_code",
            "caregiver"
        ],
        "sms_click_event": [
            "sent_sms"
        ],
        "imported_visit": [
            "caregiver",
            "agency"
        ],
        "hr_document": [
            "agency",
            "caregiver",
            "hr_document_type",
            "user",
            "hr_subsection"
        ],
        "scheduled_visit_edit_request": [
            "scheduled_visit"
        ],
        "scheduled_visit_edit_response": [
            "scheduled_visit_edit_request",
            "agency_member"
        ],
        "internal_agency_chat_room": [
            "chat_room",
            "agency"
        ],
        "caregiver_last_seen": [
            "caregiver"
        ],
        "caregiver_phonenumber": [
            "caregiver"
        ],
        "hr_application_agency_document_settings": [
            "hr_document_type",
            "agency"
        ],
        "upload_job": [
            "agency",
            "agency_member"
        ],
        "agency_member_caregiver_chat_room": [
            "chat_room",
            "agency_member",
            "caregiver"
        ],
        "agency": [
            "agency_member"
        ],
        "hr_subsection_template": [
            "hr_section_template",
            "hr_document_type"
        ],
        "hr_question_template": [
            "hr_question_group_template",
            "hr_document_type",
            "hr_subsection_template"
        ],
        "hr_application_agency_question_settings": [
            "agency",
            "hr_question_template"
        ],
        "hr_application_caregiver_answer": [
            "agency",
            "caregiver",
            "hr_question_template"
        ],
        "active_access_key": [
            "user"
        ],
        "visit_machine_learning_stats": [
            "visit"
        ],
        "cluster": [
            "visit",
            "agency",
            "caregiver"
        ],
        "caregiver_cluster_engagement": [
            "caregiver",
            "cluster"
        ],
        "caregiver_available_visit": [
            "caregiver",
            "visit"
        ],
        "report_weekly_agency": [
            "agency"
        ],
        "referral_source": [
            "agency_member"
        ],
        "social_worker": [
            "agency_member"
        ],
        "patient": [
            "agency_member",
            "agency",
            "referral_source",
            "social_worker",
            "insurer",
            "caregiver"
        ],
        "insurer_member": [
            "insurer",
            "user"
        ],
        "insurer": [
            "insurer_member"
        ],
        "contract_type": [
            "agency",
            "payer",
            "agency_member",
            "office"
        ],
        "service_code": [
            "agency",
            "agency_member"
        ],
        "contract": [
            "patient",
            "contract_type",
            "discharge_to_ref",
            "discharge_reason_ref",
            "agency_member"
        ],
        "treatment": [
            "contract"
        ],
        "physician": [
            "agency"
        ],
        "physician_patient_assoc": [
            "physician",
            "patient"
        ],
        "patient_clinical_info": [
            "patient"
        ],
        "treatment_medical_order": [
            "treatment",
            "physician"
        ],
        "treatment_advance_directive": [
            "treatment",
            "physician"
        ],
        "treatment_diagnosis": [
            "treatment",
            "icd9_code",
            "icd10_code"
        ],
        "plan_of_care": [
            "caregiver",
            "treatment",
            "plan_of_care_type",
            "scheduled_visit"
        ],
        "hr_section": [
            "agency",
            "hr_section_template"
        ],
        "patient_at_risk": [
            "scheduled_visit",
            "patient"
        ],
        "report_visit_stats": [
            "agency"
        ],
        "caregiver_exclusions": [
            "caregiver"
        ],
        "compliance_item": [
            "agency"
        ],
        "caregiver_compliance": [
            "caregiver",
            "compliance_item"
        ],
        "hr_subsection": [
            "agency",
            "hr_section",
            "hr_subsection_template"
        ],
        "hr_question_group": [
            "agency",
            "hr_question_group_template"
        ],
        "hr_question": [
            "agency",
            "hr_question_template",
            "hr_question_group",
            "hr_subsection"
        ],
        "hr_document_type": [
            "agency"
        ],
        "hr_caregiver_answer": [
            "agency",
            "caregiver",
            "hr_question"
        ],
        "hr_required_documents_settings": [
            "agency"
        ],
        "boosts": [
            "caregiver",
            "agency_member",
            "agency",
            "sent_sms"
        ],
        "add_caregiver_queue": [
            "upload_job",
            "agency"
        ],
        "visit_assigned_coordinator": [
            "visit",
            "agency_member"
        ],
        "rn_algorithm_suggestions": [
            "agency_member",
            "patient",
            "caregiver",
            "visit"
        ],
        "vbp_item": [
            "agency"
        ],
        "vbp_agency_settings": [
            "agency",
            "vbp_item"
        ],
        "vbp_instance": [
            "patient",
            "vbp_item",
            "caregiver",
            "agency_member",
            "patient_documents_scheduled_visit"
        ],
        "request_history": [
            "agency_member",
            "caregiver",
            "agency",
            "visit",
            "patient"
        ],
        "patient_upload_job_info": [
            "upload_job",
            "patient"
        ],
        "orientation_test": [
            "agency_member",
            "agency"
        ],
        "orientation_test_question": [
            "orientation_test"
        ],
        "orientation_type": [
            "agency",
            "agency_member",
            "orientation_test",
            "orientation_bundle",
            "orientation_type"
        ],
        "orientation_due_date": [
            "caregiver",
            "agency",
            "orientation_type",
            "orientation_test",
            "agency_member"
        ],
        "orientation_test_caregiver_answer": [
            "orientation_test_question",
            "caregiver",
            "orientation_due_date"
        ],
        "orientation_caregiver_watch_data": [
            "caregiver",
            "orientation_type",
            "orientation_due_date"
        ],
        "orientation_caregiver_total_watch_data": [
            "caregiver",
            "orientation_type",
            "orientation_due_date"
        ],
        "hhaexchange_patient_assoc": [
            "patient"
        ],
        "patient_documents_types": [
            "agency",
            "plan_of_care"
        ],
        "patient_documents_types_versions": [
            "patient_documents_types"
        ],
        "patient_documents_scheduled_visit": [
            "caregiver",
            "patient_documents_types",
            "visit",
            "scheduled_visit",
            "patient_documents_types_versions"
        ],
        "patient_documents_answers": [
            "caregiver",
            "patient_documents_scheduled_visit"
        ],
        "patient_documents_sending_history": [
            "agency_member",
            "patient_documents_scheduled_visit"
        ],
        "unread_chat_agency_member_email_reminder": [
            "future_work_item",
            "chat_room",
            "user"
        ],
        "reminder_visit_awaiting_assignment": [
            "future_work_item",
            "visit"
        ],
        "compliance_notification": [
            "compliance_item",
            "caregiver_compliance",
            "caregiver",
            "orientation_due_date"
        ],
        "automatic_visit_boost_timer": [
            "future_work_item",
            "visit"
        ],
        "plan_of_care_type": [
            "agency"
        ],
        "plan_of_care_item": [
            "plan_of_care_type"
        ],
        "user_two_factor_auth_code": [
            "user"
        ],
        "orientation_type_language": [
            "orientation_type",
            "agency_member"
        ],
        "orientation_test_language": [
            "orientation_test",
            "agency_member"
        ],
        "orientation_test_question_language": [
            "orientation_test_question"
        ],
        "orientation_bundle": [
            "agency",
            "agency_member",
            "orientation_bundle"
        ],
        "orientation_bundle_certification": [
            "caregiver",
            "orientation_bundle"
        ],
        "hr_link_code": [
            "user"
        ],
        "agency_member_settings": [
            "agency_member"
        ],
        "rn_patient_calls": [
            "caregiver",
            "visit"
        ],
        "contact_patient_visits_re_enabler": [
            "future_work_item",
            "visit"
        ],
        "rn_contact_patient_reminder": [
            "future_work_item",
            "visit",
            "caregiver"
        ],
        "recruitment_caregiver_application": [
            "caregiver"
        ],
        "recruitment_caregiver_application_answer": [
            "caregiver",
            "recruitment_application_question"
        ],
        "recruitment_application_question": [
            "recruitment_application_question"
        ],
        "recruitment_caregiver_selected": [
            "caregiver",
            "agency",
            "agency_member"
        ],
        "recruitment_chat_bot": [
            "caregiver"
        ],
        "patient_document_question_link": [
            "patient_documents_types"
        ],
        "traceable_questions_report": [
            "agency"
        ],
        "traceable_questions_report_item": [
            "traceable_questions_report",
            "patient_documents_types"
        ],
        "agency_sms_subscriptions": [
            "agency"
        ],
        "caregiver_hr_document_uploads": [
            "caregiver"
        ],
        "caregiver_patient_document_uploads": [
            "caregiver",
            "visit",
            "patient"
        ],
        "payer": [
            "agency",
            "agency_member"
        ],
        "location_group": [
            "agency",
            "agency_member"
        ],
        "office": [
            "agency",
            "agency_member"
        ],
        "billing_rate": [
            "contract_type",
            "service_code",
            "agency_member"
        ],
        "discharge_to_ref": [
            "agency",
            "agency_member"
        ],
        "discharge_reason_ref": [
            "agency",
            "agency_member"
        ],
        "authorization": [
            "contract",
            "service_code",
            "agency_member"
        ],
        "location_group_county": [
            "location_group",
            "agency_member"
        ],
        "billing_rate_county": [
            "billing_rate"
        ],
        "visit_instance": [
            "patient",
            "caregiver",
            "contract",
            "service_code",
            "user",
            "agency_member",
            "payroll_code"
        ],
        "invoice_batch": [
            "contract_type",
            "agency",
            "agency_member"
        ],
        "invoice": [
            "invoice_batch",
            "patient",
            "agency",
            "agency_member"
        ],
        "clockin_clockout_record": [
            "caregiver",
            "patient",
            "visit_instance",
            "agency_member"
        ],
        "invoice_visit": [
            "visit_instance",
            "invoice",
            "agency_member",
            "service_code",
            "billing_rate_county"
        ],
        "export_batch": [
            "agency",
            "agency_member"
        ],
        "export_visit": [
            "export_batch",
            "invoice_visit",
            "agency_member"
        ],
        "payroll_code": [
            "agency",
            "agency_member"
        ],
        "pay_rate": [
            "payroll_code",
            "agency_member"
        ],
        "payroll_batch": [
            "agency",
            "agency_member"
        ],
        "payroll_visit": [
            "payroll_batch",
            "visit_instance",
            "pay_rate",
            "agency_member"
        ],
        "check": [
            "agency",
            "contract_type",
            "agency_member"
        ],
        "check_line": [
            "check",
            "invoice_visit",
            "invoice",
            "agency_member"
        ]
    }

}

function getChildrenTable(tableName) {
    let parentToChildsDictionary = {
        "user": [
            "active_auth_token",
            "caregiver",
            "agency_member",
            "user_fcm_registration_token",
            "chat_message",
            "chat_message_viewed",
            "active_access_key",
            "hr_document",
            "insurer_member",
            "unread_chat_agency_member_email_reminder",
            "user_two_factor_auth_code",
            "hr_link_code",
            "visit_instance"
        ],
        "agency": [
            "agency_member",
            "caregiver_agency_assoc",
            "agency_caregiver_chat_room",
            "hr_document",
            "internal_agency_chat_room",
            "upload_job",
            "imported_visit",
            "hr_application_agency_question_settings",
            "hr_application_caregiver_answer",
            "hr_application_agency_document_settings",
            "cluster",
            "report_weekly_agency",
            "patient",
            "contract_type",
            "service_code",
            "physician",
            "hr_section",
            "report_visit_stats",
            "compliance_item",
            "hr_subsection",
            "hr_question_group",
            "hr_question",
            "hr_document_type",
            "hr_caregiver_answer",
            "hr_required_documents_settings",
            "add_caregiver_queue",
            "vbp_item",
            "vbp_agency_settings",
            "boosts",
            "send_sms_job",
            "request_history",
            "visit",
            "orientation_test",
            "orientation_type",
            "orientation_due_date",
            "patient_documents_types",
            "plan_of_care_type",
            "orientation_bundle",
            "recruitment_caregiver_selected",
            "traceable_questions_report",
            "agency_sms_subscriptions",
            "payer",
            "location_group",
            "office",
            "discharge_to_ref",
            "discharge_reason_ref",
            "invoice_batch",
            "invoice",
            "export_batch",
            "payroll_code",
            "payroll_batch",
            "check"
        ],
        "caregiver": [
            "caregiver_agency_assoc",
            "caregiver_notification",
            "caregiver_visit_engagement",
            "agency_caregiver_chat_room",
            "visit_chat_room",
            "send_sms_job",
            "sent_sms",
            "imported_visit",
            "caregiver_last_seen",
            "caregiver_phonenumber",
            "visit",
            "agency_member_caregiver_chat_room",
            "hr_application_caregiver_answer",
            "hr_document",
            "cluster",
            "caregiver_cluster_engagement",
            "caregiver_available_visit",
            "plan_of_care",
            "caregiver_exclusions",
            "caregiver_compliance",
            "hr_caregiver_answer",
            "boosts",
            "rn_algorithm_suggestions",
            "vbp_instance",
            "chat_message",
            "patient",
            "request_history",
            "orientation_due_date",
            "orientation_test_caregiver_answer",
            "orientation_caregiver_watch_data",
            "orientation_caregiver_total_watch_data",
            "patient_documents_scheduled_visit",
            "patient_documents_answers",
            "compliance_notification",
            "orientation_bundle_certification",
            "rn_patient_calls",
            "rn_contact_patient_reminder",
            "recruitment_caregiver_application",
            "recruitment_caregiver_application_answer",
            "recruitment_caregiver_selected",
            "recruitment_chat_bot",
            "caregiver_hr_document_uploads",
            "caregiver_patient_document_uploads",
            "visit_instance",
            "clockin_clockout_record"
        ],
        "agency_member": [
            "visit",
            "scheduled_visit",
            "scheduled_visit_edit_response",
            "agency_member",
            "upload_job",
            "agency_member_caregiver_chat_room",
            "agency",
            "referral_source",
            "social_worker",
            "patient",
            "boosts",
            "visit_assigned_coordinator",
            "rn_algorithm_suggestions",
            "vbp_instance",
            "send_sms_job",
            "chat_message",
            "request_history",
            "orientation_test",
            "orientation_type",
            "orientation_due_date",
            "patient_documents_sending_history",
            "orientation_type_language",
            "orientation_test_language",
            "agency_member_settings",
            "recruitment_caregiver_selected",
            "orientation_bundle",
            "payer",
            "service_code",
            "office",
            "contract_type",
            "billing_rate",
            "discharge_to_ref",
            "discharge_reason_ref",
            "authorization",
            "location_group",
            "location_group_county",
            "contract",
            "visit_instance",
            "invoice_batch",
            "invoice",
            "clockin_clockout_record",
            "invoice_visit",
            "export_batch",
            "export_visit",
            "payroll_code",
            "pay_rate",
            "payroll_batch",
            "payroll_visit",
            "check",
            "check_line"
        ],
        "visit": [
            "caregiver_visit_engagement",
            "scheduled_visit",
            "visit_chat_room",
            "visit_machine_learning_stats",
            "cluster",
            "caregiver_available_visit",
            "visit_assigned_coordinator",
            "rn_algorithm_suggestions",
            "send_sms_job",
            "request_history",
            "patient_documents_scheduled_visit",
            "reminder_visit_awaiting_assignment",
            "automatic_visit_boost_timer",
            "rn_patient_calls",
            "contact_patient_visits_re_enabler",
            "rn_contact_patient_reminder",
            "caregiver_patient_document_uploads"
        ],
        "chat_room": [
            "chat_message",
            "chat_message_viewed",
            "agency_caregiver_chat_room",
            "visit_chat_room",
            "internal_agency_chat_room",
            "agency_member_caregiver_chat_room",
            "unread_chat_agency_member_email_reminder"
        ],
        "sms_link_code": [
            "send_sms_job",
            "sent_sms"
        ],
        "sent_sms": [
            "sms_click_event",
            "boosts"
        ],
        "scheduled_visit": [
            "scheduled_visit_edit_request",
            "patient_at_risk",
            "patient_documents_scheduled_visit",
            "plan_of_care"
        ],
        "scheduled_visit_edit_request": [
            "scheduled_visit_edit_response"
        ],
        "hr_document_type": [
            "hr_application_agency_document_settings",
            "hr_question_template",
            "hr_document",
            "hr_subsection_template"
        ],
        "hr_section_template": [
            "hr_subsection_template",
            "hr_section"
        ],
        "hr_question_group_template": [
            "hr_question_template",
            "hr_question_group"
        ],
        "hr_question_template": [
            "hr_application_agency_question_settings",
            "hr_application_caregiver_answer",
            "hr_question"
        ],
        "cluster": [
            "caregiver_cluster_engagement"
        ],
        "referral_source": [
            "patient"
        ],
        "social_worker": [
            "patient"
        ],
        "insurer": [
            "insurer_member",
            "patient"
        ],
        "insurer_member": [
            "insurer"
        ],
        "patient": [
            "contract",
            "patient_clinical_info",
            "patient_at_risk",
            "rn_algorithm_suggestions",
            "vbp_instance",
            "physician_patient_assoc",
            "request_history",
            "patient_upload_job_info",
            "hhaexchange_patient_assoc",
            "visit",
            "caregiver_patient_document_uploads",
            "visit_instance",
            "invoice",
            "clockin_clockout_record"
        ],
        "contract_type": [
            "contract",
            "billing_rate",
            "invoice_batch",
            "check"
        ],
        "contract": [
            "treatment",
            "authorization",
            "visit_instance"
        ],
        "physician": [
            "physician_patient_assoc",
            "treatment_medical_order",
            "treatment_advance_directive"
        ],
        "treatment": [
            "treatment_medical_order",
            "treatment_advance_directive",
            "treatment_diagnosis",
            "visit",
            "plan_of_care"
        ],
        "compliance_item": [
            "caregiver_compliance",
            "compliance_notification"
        ],
        "hr_subsection_template": [
            "hr_question_template",
            "hr_subsection"
        ],
        "hr_section": [
            "hr_subsection"
        ],
        "hr_question_group": [
            "hr_question"
        ],
        "hr_subsection": [
            "hr_question",
            "hr_document"
        ],
        "hr_question": [
            "hr_caregiver_answer"
        ],
        "upload_job": [
            "add_caregiver_queue",
            "patient_upload_job_info"
        ],
        "vbp_item": [
            "vbp_agency_settings",
            "vbp_instance"
        ],
        "icd9_code": [
            "treatment_diagnosis"
        ],
        "icd10_code": [
            "treatment_diagnosis"
        ],
        "orientation_test": [
            "orientation_test_question",
            "orientation_type",
            "orientation_due_date",
            "orientation_test_language"
        ],
        "orientation_type": [
            "orientation_due_date",
            "orientation_caregiver_watch_data",
            "orientation_caregiver_total_watch_data",
            "orientation_type_language",
            "orientation_type"
        ],
        "orientation_test_question": [
            "orientation_test_caregiver_answer",
            "orientation_test_question_language"
        ],
        "orientation_due_date": [
            "orientation_test_caregiver_answer",
            "orientation_caregiver_watch_data",
            "orientation_caregiver_total_watch_data",
            "compliance_notification"
        ],
        "patient_documents_types": [
            "patient_documents_types_versions",
            "patient_documents_scheduled_visit",
            "patient_document_question_link",
            "traceable_questions_report_item"
        ],
        "patient_documents_types_versions": [
            "patient_documents_scheduled_visit"
        ],
        "patient_documents_scheduled_visit": [
            "patient_documents_answers",
            "patient_documents_sending_history",
            "vbp_instance"
        ],
        "future_work_item": [
            "unread_chat_agency_member_email_reminder",
            "reminder_visit_awaiting_assignment",
            "automatic_visit_boost_timer",
            "contact_patient_visits_re_enabler",
            "rn_contact_patient_reminder"
        ],
        "caregiver_compliance": [
            "compliance_notification"
        ],
        "plan_of_care_type": [
            "plan_of_care_item",
            "visit",
            "plan_of_care"
        ],
        "plan_of_care": [
            "patient_documents_types"
        ],
        "orientation_bundle": [
            "orientation_type",
            "orientation_bundle_certification",
            "orientation_bundle"
        ],
        "recruitment_application_question": [
            "recruitment_application_question",
            "recruitment_caregiver_application_answer"
        ],
        "traceable_questions_report": [
            "traceable_questions_report_item"
        ],
        "payer": [
            "contract_type"
        ],
        "office": [
            "contract_type"
        ],
        "service_code": [
            "billing_rate",
            "authorization",
            "visit_instance",
            "invoice_visit"
        ],
        "location_group": [
            "location_group_county"
        ],
        "billing_rate": [
            "billing_rate_county"
        ],
        "discharge_to_ref": [
            "contract"
        ],
        "discharge_reason_ref": [
            "contract"
        ],
        "invoice_batch": [
            "invoice"
        ],
        "visit_instance": [
            "clockin_clockout_record",
            "invoice_visit",
            "payroll_visit"
        ],
        "invoice": [
            "invoice_visit",
            "check_line"
        ],
        "export_batch": [
            "export_visit"
        ],
        "invoice_visit": [
            "export_visit",
            "check_line"
        ],
        "payroll_code": [
            "pay_rate",
            "visit_instance"
        ],
        "payroll_batch": [
            "payroll_visit"
        ],
        "pay_rate": [
            "payroll_visit"
        ],
        "check": [
            "check_line"
        ],
        "billing_rate_county": [
            "invoice_visit"
        ]
    }

    return parentToChildsDictionary[tableName];

}