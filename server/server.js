'use strict'

var express = require("express");
var bodyParser = require("body-parser");
var device = require("express-device");
const cors = require('cors');
var async = require("async");
var getterServices = require("./routes/getters_services");
var createTemplate = require("./routes/createTemplate");
var hrDocService = require("./routes/hr_doc_service");
var server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(device.capture());

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
server.use(express.static("public"));

server.get("/api/test_db_connection", getterServices.testDbConnection);

server.get("/api/get_tables", getterServices.getTables);
server.get("/api/get_table_structure", getterServices.getTableStructure);
server.get("/api/get_relations", getterServices.getRelations);

server.get("/api/hr_doc_type", hrDocService.getHrDocumentsType);
server.get("/api/hr_subsection_template_by_doc_type_id", hrDocService.getHrSubsectionTemplateByDocumentTypeId);
server.get("/api/hr_subsection_by_subsection_template_id", hrDocService.getHrSubsectionByHrSubsectionTemplateId);

server.get("/api/get_table_relations", getterServices.getTableRelations);
server.post("/api/create_template", createTemplate.createTemplate);


module.exports = server;

server.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
server.use(express.static("public"));

// server.use("/api", server.router());
server.listen(5000);
console.log("Server running on port: 5000");

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

var router = express.Router();
router.get("/get_tables", getterServices.getTables);
router.get("/get_table_structure", getterServices.getTableStructure);
router.get("/get_relations", getterServices.getRelations);

router.get("/hr_doc_type", hrDocService.getHrDocumentsType);
router.get("/hr_subsection_template_by_doc_type_id", hrDocService.getHrSubsectionTemplateByDocumentTypeId);
router.get("/hr_subsection_by_subsection_template_id", hrDocService.getHrSubsectionByHrSubsectionTemplateId);

router.get("/get_table_relations", getterServices.getTableRelations);
router.post("/create_template", createTemplate.createTemplate);

 


// test route

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });
// app.use(express.static("public"));

// app.use("/api", router);
// app.listen(5000);
// console.log("Server running on port: 5000");

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });


