(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n\n  <img  routerLink=\"/**\" height=\"40\" alt=\"Angular Logo\" src=\"../assets/compLogo.svg\">\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n    <a href=\"https://github.com//_server2\" title=\"github\"><img  routerLink=\"/**\" height=\"20\" alt=\"Angular Logo\" src=\"../assets/GitHubIcon.png\" style=\"margin-top: 1px;\">\n    </a>\n   \n  <a  routerLink=\"/new-table\" title=\"create a new table\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">library_add</mat-icon>\n  </a>\n  <a  routerLink=\"/hr-docs\" title=\"hr docs\">\n    <img height=\"24\" alt=\"Angular Logo\" src=\"../assets/description.svg\">\n  </a>\n \n</div>\n\n<div class=\"content\" role=\"main\">\n</div>\n\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/column/column.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/column/column.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!submited\" class=\"column-container\">\n\n  <mat-form-field>\n    <input matInput placeholder=\"Enter column name\" [(ngModel)]=\"name\" [formControl]=\"colName\" required />\n    <mat-error *ngIf=\"colName.invalid\">{{ getErrorMessage(\"colName\") }}</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select placeholder=\"Choose Type\"  [(ngModel)]=\"type\">\n      <mat-option *ngFor=\"let item of colTypes\" value=\"{{item}}\">{{ item }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-slide-toggle [(ngModel)]=\"nullable\">Nullable</mat-slide-toggle>\n  <mat-slide-toggle [(ngModel)]=\"isPk\">Primary Key</mat-slide-toggle>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Choose Parent Table\" [(ngModel)]=\"tblParent\" (selectionChange)=\"constraintParentTableChange(tblParent)\">\n      <mat-option *ngFor=\"let item of parentTablesList\" value=\"{{ item }}\">{{ item }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Choose Parent Column\" [(ngModel)]=\"colParent\">\n      <mat-option *ngFor=\"let item of parentTableColumnsNames\" value=\"{{ item }}\">{{ item }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <button mat-button (click)=\"submitColumn()\" color=\"primary\">add</button>\n\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/db-connect/db-connect.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/db-connect/db-connect.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3 mat-dialog-title>Enter your db connection</h3>\n    <form class=\"db-form\" (ngSubmit)=\"onDbSubmit()\">\n        <mat-form-field class=\"db-full-width\">\n            <mat-label>Db Host</mat-label>\n            <input matInput [formControl]=\"dbHost\" placeholder=\"Enter the db host\">\n        </mat-form-field>\n        <div></div>\n        <mat-form-field class=\"db-full-width\">\n            <mat-label>Db Name</mat-label>\n            <input matInput [formControl]=\"dbName\" placeholder=\"Enter the db name\">\n        </mat-form-field>\n        <div></div>\n        <mat-form-field class=\"db-full-width\">\n            <mat-label>Db User</mat-label>\n            <input matInput [formControl]=\"dbUser\" placeholder=\"Enter the db user\">\n        </mat-form-field>\n        <div></div>\n        <mat-form-field class=\"db-full-width\">\n            <mat-label>Db Password</mat-label>\n            <input matInput [formControl]=\"dbPassword\" placeholder=\"Enter the db password\">\n        </mat-form-field>\n        <div></div>\n        <div mat-dialog-actions>\n            <button mat-button> Save </button>\n            <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n          </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/add/add.dialog.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/add/add.dialog.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h3 mat-dialog-title>Add new Column</h3>\n\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"(submit)\" #formControl=\"ngForm\">\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\"  name=\"name\" required></textarea>\n        <!--mat-error-- *ngIf=\"formControl.invalid\">{{\n          getErrorMessage()\n        }}</!--mat-error-->\n      </mat-form-field>\n    </div>\n    <mat-form-field>\n      <mat-select placeholder=\"Choose Type\" [(ngModel)]=\"type\" name=\"type\">\n        <mat-option *ngFor=\"let item of colTypes\" value=\"{{ item }}\" name=type>{{\n          item\n        }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <!--Contains mat-hint for characters count and has maxLengt set-->\n    <div class=\"form\">\n      <mat-slide-toggle [(ngModel)]=\"nullable\" name=false>Nullable</mat-slide-toggle>\n      <mat-slide-toggle [(ngModel)]=\"isPk\" name=false>Primary Key</mat-slide-toggle>\n    </div>\n    <div class=\"form\">\n      <mat-form-field>\n        <mat-select\n          placeholder=\"Choose Parent Table\"\n          [(ngModel)]=\"tblParent\"\n          (selectionChange)=\"constraintParentTableChange(tblParent)\"\n          name= \"table parent name\"\n         [ngModelOptions]=\"{standalone: true}\">\n          <mat-option\n            *ngFor=\"let item of parentTablesList\"\n            value=\"{{ item }}\"\n            >{{ item }}</mat-option\n          >\n        </mat-select>\n      </mat-form-field>\n\n\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field>\n        <mat-select placeholder=\"Choose Parent Column\" [(ngModel)]=\"colParent\" name= \"column parent name\"  [ngModelOptions]=\"{standalone: true}\">\n          <mat-option\n            *ngFor=\"let item of parentTableColumnsNames\"\n            value=\"{{ item }}\"\n            >{{ item }}</mat-option\n          >\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions>\n      <button\n        mat-button\n        [type]=\"submit\"\n        [disabled]=\"!formControl.valid\"\n        [mat-dialog-close]=\"1\"\n        (click)=\"confirmAdd()\"\n      >\n        Save\n      </button>\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/delete/delete.dialog.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/delete/delete.dialog.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h3 mat-dialog-title>Are you sure?</h3>\n  <div mat-dialog-content>\n    Name: {{data.name}}\n    <p></p>\n    Type: {{data.type}}\n    <p></p>\n    Is Primary Key: {{data.isPk}}\n    <p></p>\n    Nullable : {{data.nullable}}\n    <p></p>\n  </div>\n\n  <div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">Delete</button>\n    <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/displayTable/displayTable.dialog.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/displayTable/displayTable.dialog.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h3 mat-dialog-title>Table: {{data.tblName | fromTableNameToTitle}}</h3>\n  <div mat-dialog-content>\n      <table>\n          <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Is Primary Key</th>\n            <th>Nullable</th>\n          </tr>\n          <tr *ngFor=\"let item of data.columns\">\n            <td>{{item.name}}</td>\n            <td>{{item.type}} </td>\n            <td>{{item.isPk}}</td>\n            <td>{{item.allowNull}}</td>\n          </tr>\n        </table>\n    \n  </div>\n\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Exit</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/edit/edit.dialog.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/edit/edit.dialog.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h3 mat-dialog-title>Edit Column: {{ name }}</h3>\n\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"(submit)\" #formControl=\"ngForm\">\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\" required></textarea>\n        <!--mat-error-- *ngIf=\"formControl.invalid\">{{\n          getErrorMessage()\n        }}</!--mat-error-->\n      </mat-form-field>\n    </div>\n    <mat-form-field>\n      <mat-select placeholder=\"{{ type }}\" [(ngModel)]=\"type\" name=\"type\" >\n        <mat-option *ngFor=\"let item of colTypes\" [value]=\"item\" >{{ item }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <!--Contains mat-hint for characters count and has maxLengt set-->\n    <div class=\"form\">\n      <mat-slide-toggle [(ngModel)]=\"nullable\" name=\"nullable\">Nullable</mat-slide-toggle>\n      <mat-slide-toggle [(ngModel)]=\"isPk\" name=\"isPk\">Primary Key</mat-slide-toggle>\n    </div>\n    <div class=\"form\">\n      <mat-form-field>\n        <mat-select placeholder=\"{{ tblParent }}\" [(ngModel)]=\"tblParent\" (selectionChange)=\"constraintParentTableChange(tblParent)\" name=\"tblParent\">\n          <mat-option *ngFor=\"let item of parentTablesList\" [value]=\"item\">{{ item }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field>\n        <mat-select placeholder=\"{{ colParent }}\" [(ngModel)]=\"colParent\" name=\"colParent\">\n          <mat-option *ngFor=\"let item of parentTableColumnsNames\" [value]=\"item\">{{ item }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions>\n      <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopEdit()\">Save</button>\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/git-token/git-token.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/git-token/git-token.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3 mat-dialog-title>Enter your github token</h3>\n    <div mat-dialog-actions>\n        <mat-form-field class=\"git-full-width\">\n            <mat-label>Github token</mat-label>\n            <input matInput [formControl]=\"gitToken\" placeholder=\"Enter git token\">\n        </mat-form-field>\n        <button\n          mat-button            \n          (click)=\"onDbSubmit()\"\n        >\n          Save\n        </button>\n        <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n      </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-document-generator/hr-document-generator.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-document-generator/hr-document-generator.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hr-doc-section\">\n  <div *ngIf=\"hrDocTypsArr\">\n    <h4>Welcome to Hr Docs</h4>\n    <mat-form-field>\n      <mat-label>Hr Document Type</mat-label>\n      <mat-select [(value)]=\"hrDocTypeSelected\" (selectionChange)=\"docTypeChange(hrDocTypeSelected)\">\n        <mat-option *ngFor=\"let hrDocType of hrDocTypsArr\" [value]=\"hrDocType\">\n          {{hrDocType.title}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div></div>\n\n    <mat-form-field *ngIf=\"hrSubSectionTemplateArr\">\n      <mat-label>Hr Subsection Template</mat-label>\n      <mat-select [(value)]=\"hrSubSectionTemplateSelected\" (selectionChange)=\"subsectionTamplateChange(hrSubSectionTemplateSelected)\">\n        <mat-option *ngFor=\"let hrSubSectionTemplate of hrSubSectionTemplateArr\" [value]=\"hrSubSectionTemplate\">\n          {{hrSubSectionTemplate.title}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div></div>\n\n\n    <mat-form-field *ngIf=\"hrSubsectionArr\">\n      <mat-label>Filter Subsection</mat-label>\n      <input matInput (keyup)=\"subsectionFilter($event)\" placeholder=\"Ex. ium\">\n    </mat-form-field>\n\n    <div *ngIf=\"hrSubsectionArr\">\n      <mat-table #table [dataSource]=\"hrSubsectionDataSource\" matSort class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef={{col}} *ngFor=\"let col of hrSubsectionColumns | removeActionCol \">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col}}. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element[col]}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"viewQuestions\">\n        <mat-header-cell  *matHeaderCellDef > Questions </mat-header-cell>\n        <mat-cell *matCellDef=\"let row; let i = index\">\n          <button mat-icon-button color=\"primary\">\n            <mat-icon aria-label=\"View Questions\">visibility</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n\n\n        <tr mat-header-row *matHeaderRowDef=\"hrSubsectionColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: hrSubsectionColumns;\"></tr>\n      </mat-table>\n\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-tables/list-tables.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-tables/list-tables.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tabel-view-body\">\n    <mat-form-field>\n      <input\n        matInput\n        (keyup)=\"applyFilter($event.target.value)\"\n        placeholder=\"Search A table\"\n      />\n    </mat-form-field>\n    <mat-accordion>\n      <mat-expansion-panel\n        *ngFor=\"let item of tablesList; let i = index\"\n        [attr.data-index]=\"i\"\n        (opened)=\"getTableStructure(item.name, i); item.openeds = true; loaded[i] = false;\"\n        (closed)=\"item.openeds = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{ item.name }}\n          </mat-panel-title>\n          <mat-panel-description>\n            {{ item.name | fromTableNameToTitle }}\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <mat-spinner *ngIf=\"item.openeds && item.colSource.length === 0\" ></mat-spinner>\n        <table *ngIf=\"item.colSource.length\" mat-table matSort [dataSource]=\"item.colSource\">\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n            <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n          </ng-container>\n          <ng-container matColumnDef=\"type\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Type</th>\n            <td mat-cell *matCellDef=\"let element\">{{ element.type }}</td>\n          </ng-container>\n          <ng-container matColumnDef=\"nullable\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Nullable</th>\n            <td mat-cell *matCellDef=\"let element\">\n              <section class=\"example-section\">\n                <mat-slide-toggle\n                  class=\"example-margin\"\n                  [color]=\"'accent'\"\n                  [checked]=\"element.nullable\"\n                >\n                </mat-slide-toggle>\n              </section>\n            </td>\n          </ng-container>\n          <ng-container matColumnDef=\"isPk\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n              Is Primary Key\n            </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <section class=\"example-section\">\n                <mat-slide-toggle\n                  class=\"example-margin\"\n                  [color]=\"'accent'\"\n                  [checked]=\"element.isPk\"\n                >\n                </mat-slide-toggle>\n              </section>\n            </td>\n          </ng-container>\n          <ng-container matColumnDef=\"relatedToTable\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>relatedToTable</th>\n            <td mat-cell *matCellDef=\"let element\">{{ element.relatedToTable }}</td>\n          </ng-container>\n          <ng-container matColumnDef=\"atColumn\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>atColumn</th>\n            <td mat-cell *matCellDef=\"let element\">{{ element.atColumn }}</td>\n          </ng-container>\n          <ng-container matColumnDef=\"fkName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Foreign key Name</th>\n            <td mat-cell *matCellDef=\"let element\">{{ element.fkName }}</td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n        </table>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-table/new-table.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-table/new-table.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"create-table-container\"></div>\n  <mat-form-field class=\"example-container\">\n    <input matInput placeholder=\"Enter Table Name\" [formControl]=\"tableName\" (input)=\"onTableNameChange($event.target.value)\" required />\n    <mat-error *ngIf=\"tableName.invalid\">{{ getErrorMessage(\"tableName\") }}</mat-error>\n  </mat-form-field>\n  <div *ngIf=\"!tableName.invalid\" class=\"generaters-buttons-container\">\n    <mat-icon *ngIf=\"!generatColPrimaryKey\" aria-hidden=\"false\" aria-label=\"Example home icon\">vpn_key</mat-icon>\n    <button mat-button *ngIf=\"!generatColPrimaryKey\" (click)=\"generateCol('primaryKey')\">\n      Generate Primary Key\n    </button>\n  </div>\n  <div *ngIf=\"!tableName.invalid\" class=\"generaters-buttons-container\">\n    <mat-icon *ngIf=\"!generatColCreatedAt || !generatColCreatedBy\" aria-hidden=\"false\" aria-label=\"Example home icon\">create</mat-icon>\n    <button mat-button *ngIf=\"!generatColCreatedAt\" (click)=\"generateCol('createdAt')\">Generate Created At<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">access_time</mat-icon></button>\n    <button mat-button *ngIf=\"!generatColCreatedBy\" (click)=\"generateCol('createdBy')\">Generate Created By<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\"> person</mat-icon></button>\n  </div>\n  <div *ngIf=\"!tableName.invalid\" class=\"generaters-buttons-container\">\n    <mat-icon *ngIf=\"!generatColUpdatedAt || !generatColUpdatedBy\" aria-hidden=\"false\" aria-label=\"Example home icon\">build</mat-icon>\n    <button mat-button *ngIf=\"!generatColUpdatedAt\" (click)=\"generateCol('updatedAt')\">Generate Updated At<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">access_time</mat-icon></button>\n    <button mat-button *ngIf=\"!generatColUpdatedBy\" (click)=\"generateCol('updatedBy')\">Generate Updated By<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">person</mat-icon></button>\n  </div>\n\n  <mat-table #table class=\"table-container\" matSort [dataSource]=\"dataSource\">\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Type</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.type }}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"nullable\">\n      <th mat-header-cell *matHeaderCellDef>Nullable</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <section class=\"example-section\">\n          <mat-slide-toggle class=\"example-margin\" [color]=\"'accent'\" (change)=\"element.nullable = $event.checked\" [checked]=\"element.nullable\"> </mat-slide-toggle>\n        </section>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"isPk\">\n      <th mat-header-cell *matHeaderCellDef>\n        Is Primary Key\n      </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <section class=\"example-section\">\n          <mat-slide-toggle class=\"example-margin\" [color]=\"'accent'\" (change)=\"element.isPk = $event.checked\" [checked]=\"element.isPk\"> </mat-slide-toggle>\n        </section>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"relatedToTable\">\n      <th mat-header-cell *matHeaderCellDef>\n        Related To Table\n      </th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element.constraint?.tblParent }}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"atColumn\">\n      <th mat-header-cell *matHeaderCellDef>At Column</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element.constraint?.colParent }}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"fkName\">\n      <th mat-header-cell *matHeaderCellDef>\n        Foreign key Name\n      </th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.constraint?.name }}</td>\n    </ng-container>\n    <!-- actions -->\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef>\n        <button mat-icon-button color=\"primary\" (click)=\"addNew(undefined)\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n        </button>\n      </mat-header-cell>\n\n      <mat-cell *matCellDef=\"let row; let i = index\">\n        <button mat-icon-button color=\"accent\" (click)=\"startEdit(i, row.name, row.type, row.nullable, row.isPk)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"accent\" (click)=\"deleteItem(i, row.name, row.type, row.nullable, row.isPk, row.relatedToTable, row.atColumn, row.fkName)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </mat-table>\n\n  <div [hidden]=\"!exampleDatabase.dataChange.value.length\">\n    <mat-paginator class=\"paginator-container\" #paginator [length]=\"exampleDatabase.dataChange.value.length\" [pageIndex]=\"0\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"> </mat-paginator>\n  </div>\n\n  <button *ngIf=\"exampleDatabase.dataChange.value.length && !pendingRequest\" class=\"generate-table-btn\" mat-button (click)=\"generateTable()\" color=\"red\">\n    generate table\n  </button>\n  <mat-spinner *ngIf=\"pendingRequest\" class=\"progress-spinner-btn\"></mat-spinner>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/relations/child-to-parents/child-to-parents.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/relations/child-to-parents/child-to-parents.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n        <button mat-icon-button disabled></button>\n        <p (click)=\"tableClicked(node.item)\">{{node.item | fromTableNameToTitle}}</p>\n    </mat-tree-node>\n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n        <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n                {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n            </mat-icon>\n        </button>\n        <p (click)=\"tableClicked(node.item)\">{{node.item | fromTableNameToTitle}}</p>\n        <mat-progress-bar *ngIf=\"node.isLoading\" mode=\"indeterminate\" class=\"example-tree-progress-bar\"></mat-progress-bar>\n    </mat-tree-node>\n</mat-tree>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/relations/parent-to-childs/parent-to-childs.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/relations/parent-to-childs/parent-to-childs.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n        <button mat-icon-button disabled></button>\n        <p (click)=\"tableClicked(node.item)\">{{node.item | fromTableNameToTitle}}</p>\n    </mat-tree-node>\n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n        <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n                {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n            </mat-icon>\n        </button>\n        <p (click)=\"tableClicked(node.item)\">{{node.item | fromTableNameToTitle}}</p>\n        <mat-progress-bar *ngIf=\"node.isLoading\" mode=\"indeterminate\" class=\"example-tree-progress-bar\"></mat-progress-bar>\n    </mat-tree-node>\n</mat-tree>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/relations/relations.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/relations/relations.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables-view/tables-view.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables-view/tables-view.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group  mat-stretch-tabs>\n  <mat-tab label=\"List view\"> \n    <app-list-tables></app-list-tables>\n </mat-tab>\n  <mat-tab label=\"Parent To Childrens\"> \n     <app-parent-to-childs></app-parent-to-childs>\n  </mat-tab>\n  <mat-tab label=\"Children To Parent\">\n      <app-child-to-parents></app-child-to-parents>\n  </mat-tab>\n</mat-tab-group>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const new_table_component_1 = __webpack_require__(/*! ./new-table/new-table.component */ "./src/app/new-table/new-table.component.ts");
const tables_view_component_1 = __webpack_require__(/*! ./tables-view/tables-view.component */ "./src/app/tables-view/tables-view.component.ts");
const relations_component_1 = __webpack_require__(/*! ./relations/relations.component */ "./src/app/relations/relations.component.ts");
const hr_document_generator_component_1 = __webpack_require__(/*! ./hr-document-generator/hr-document-generator.component */ "./src/app/hr-document-generator/hr-document-generator.component.ts");
const routes = [
    { path: 'new-table', component: new_table_component_1.NewTableComponent },
    { path: 'relations', component: relations_component_1.RelationsComponent },
    { path: 'hr-docs', component: hr_document_generator_component_1.HrDocumentGeneratorComponent },
    { path: '**', component: tables_view_component_1.TablesViewComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar {\n  background-color: #18516b !important;\n}\nmat-list-item:hover mat-icon {\n  display: block;\n}\n:host ::ng-deep a[_ngcontent-mva-c0],\na[_ngcontent-mva-c0]:visited,\na[_ngcontent-mva-c0]:hover {\n  color: black;\n  text-decoration: none;\n}\n.mat-icon {\n  fill: black;\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29iL3Byb2plY3RzL21lZGZseXRfZXJkX2dlbmVyYXRvcl9mcm9udC9NZWRmbHl0RXJkR2VuZXJhdG9yRnJvbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7QURFQTtFQUNJLGNBQUE7QUNBSjtBREdFOzs7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDgxLCAxMDcpICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1saXN0LWl0ZW06aG92ZXIgbWF0LWljb257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCBhW19uZ2NvbnRlbnQtbXZhLWMwXSwgYVtfbmdjb250ZW50LW12YS1jMF06dmlzaXRlZCwgYVtfbmdjb250ZW50LW12YS1jMF06aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5tYXQtaWNvbiB7XG4gICAgZmlsbDogYmxhY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9IiwiLnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg1MTZiICFpbXBvcnRhbnQ7XG59XG5tYXQtbGlzdC1pdGVtOmhvdmVyIG1hdC1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCA6Om5nLWRlZXAgYVtfbmdjb250ZW50LW12YS1jMF0sXG5hW19uZ2NvbnRlbnQtbXZhLWMwXTp2aXNpdGVkLFxuYVtfbmdjb250ZW50LW12YS1jMF06aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tYXQtaWNvbiB7XG4gIGZpbGw6IGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
const db_connect_component_1 = __webpack_require__(/*! ./db-connect/db-connect.component */ "./src/app/db-connect/db-connect.component.ts");
const data_service_1 = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
let AppComponent = class AppComponent {
    constructor(dialog, dataService) {
        this.dialog = dialog;
        this.dataService = dataService;
        this.title = ' Erd';
    }
    ngOnInit() {
        if (localStorage.getItem('pgConnOptHost') === null) {
            const dialogRef = this.dialog.open(db_connect_component_1.DbConnectComponent, {
                data: { 'this.pgConnOpt': '' }
            });
            dialogRef.afterClosed().subscribe(result => {
                this.fillPgConectOptionFromLocalStorage();
            });
        }
        else {
            this.fillPgConectOptionFromLocalStorage();
        }
    }
    fillPgConectOptionFromLocalStorage() {
        this.dataService.pgConnect = {
            user: localStorage.getItem('pgConnOptUser'),
            password: localStorage.getItem('pgConnOptPassword'),
            host: localStorage.getItem('pgConnOptHost'),
            database: localStorage.getItem('pgConnOptDatabase')
        };
    }
};
AppComponent.ctorParameters = () => [
    { type: dialog_1.MatDialog },
    { type: data_service_1.DataService }
];
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-root',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const tables_view_component_1 = __webpack_require__(/*! ./tables-view/tables-view.component */ "./src/app/tables-view/tables-view.component.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
// Angular Material Components
const tree_1 = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
const material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
const input_1 = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
const autocomplete_1 = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
const datepicker_1 = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
const form_field_1 = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
const radio_1 = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
const select_1 = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
const slider_1 = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
const slide_toggle_1 = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
const menu_1 = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
const sidenav_1 = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
const toolbar_1 = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
const list_1 = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
const grid_list_1 = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
const card_1 = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
const stepper_1 = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
const tabs_1 = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
const expansion_1 = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
const button_toggle_1 = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
const chips_1 = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
const icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
const progress_spinner_1 = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
const progress_bar_1 = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
const dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
const tooltip_1 = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
const snack_bar_1 = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
const table_1 = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
const sort_1 = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
const paginator_1 = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
const from_table_name_to_title_pipe_1 = __webpack_require__(/*! ./from-table-name-to-title.pipe */ "./src/app/from-table-name-to-title.pipe.ts");
const new_table_component_1 = __webpack_require__(/*! ./new-table/new-table.component */ "./src/app/new-table/new-table.component.ts");
const column_component_1 = __webpack_require__(/*! ./column/column.component */ "./src/app/column/column.component.ts");
const flex_layout_1 = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
const add_dialog_component_1 = __webpack_require__(/*! ./dialogs/add/add.dialog.component */ "./src/app/dialogs/add/add.dialog.component.ts");
const edit_dialog_component_1 = __webpack_require__(/*! ./dialogs/edit/edit.dialog.component */ "./src/app/dialogs/edit/edit.dialog.component.ts");
const delete_dialog_component_1 = __webpack_require__(/*! ./dialogs/delete/delete.dialog.component */ "./src/app/dialogs/delete/delete.dialog.component.ts");
const data_service_1 = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
const from_number_type_to_erd_structure_pipe_1 = __webpack_require__(/*! ./from-number-type-to-erd-structure.pipe */ "./src/app/from-number-type-to-erd-structure.pipe.ts");
const relations_component_1 = __webpack_require__(/*! ./relations/relations.component */ "./src/app/relations/relations.component.ts");
const parent_to_childs_component_1 = __webpack_require__(/*! ./relations/parent-to-childs/parent-to-childs.component */ "./src/app/relations/parent-to-childs/parent-to-childs.component.ts");
const child_to_parents_component_1 = __webpack_require__(/*! ./relations/child-to-parents/child-to-parents.component */ "./src/app/relations/child-to-parents/child-to-parents.component.ts");
const displayTable_dialog_component_1 = __webpack_require__(/*! ./dialogs/displayTable/displayTable.dialog.component */ "./src/app/dialogs/displayTable/displayTable.dialog.component.ts");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const list_tables_component_1 = __webpack_require__(/*! ./list-tables/list-tables.component */ "./src/app/list-tables/list-tables.component.ts");
const hr_document_generator_component_1 = __webpack_require__(/*! ./hr-document-generator/hr-document-generator.component */ "./src/app/hr-document-generator/hr-document-generator.component.ts");
const table_value_pipe_1 = __webpack_require__(/*! ./table-value.pipe */ "./src/app/table-value.pipe.ts");
const db_connect_component_1 = __webpack_require__(/*! ./db-connect/db-connect.component */ "./src/app/db-connect/db-connect.component.ts");
const remove_action_col_pipe_1 = __webpack_require__(/*! ./remove-action-col.pipe */ "./src/app/remove-action-col.pipe.ts");
const git_token_component_1 = __webpack_require__(/*! ./git-token/git-token.component */ "./src/app/git-token/git-token.component.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            tables_view_component_1.TablesViewComponent,
            from_table_name_to_title_pipe_1.FromTableNameToTitlePipe,
            new_table_component_1.NewTableComponent,
            column_component_1.ColumnComponent,
            add_dialog_component_1.AddDialogComponent,
            edit_dialog_component_1.EditDialogComponent,
            delete_dialog_component_1.DeleteDialogComponent,
            from_number_type_to_erd_structure_pipe_1.FromNumberTypeToErdStructurePipe,
            relations_component_1.RelationsComponent,
            parent_to_childs_component_1.ParentToChildsComponent,
            child_to_parents_component_1.ChildToParentsComponent,
            displayTable_dialog_component_1.DisplayTableDialogComponent,
            list_tables_component_1.ListTablesComponent,
            hr_document_generator_component_1.HrDocumentGeneratorComponent,
            table_value_pipe_1.TableValuePipe,
            db_connect_component_1.DbConnectComponent,
            remove_action_col_pipe_1.RemoveActionColPipe,
            git_token_component_1.GitTokenComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            flex_layout_1.FlexLayoutModule,
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpClientModule,
            expansion_1.MatExpansionModule,
            animations_1.BrowserAnimationsModule,
            material_1.MatCheckboxModule,
            material_1.MatCheckboxModule,
            material_2.MatButtonModule,
            input_1.MatInputModule,
            autocomplete_1.MatAutocompleteModule,
            datepicker_1.MatDatepickerModule,
            form_field_1.MatFormFieldModule,
            radio_1.MatRadioModule,
            select_1.MatSelectModule,
            slider_1.MatSliderModule,
            slide_toggle_1.MatSlideToggleModule,
            menu_1.MatMenuModule,
            sidenav_1.MatSidenavModule,
            toolbar_1.MatToolbarModule,
            list_1.MatListModule,
            grid_list_1.MatGridListModule,
            card_1.MatCardModule,
            stepper_1.MatStepperModule,
            tabs_1.MatTabsModule,
            expansion_1.MatExpansionModule,
            button_toggle_1.MatButtonToggleModule,
            chips_1.MatChipsModule,
            icon_1.MatIconModule,
            progress_spinner_1.MatProgressSpinnerModule,
            progress_bar_1.MatProgressBarModule,
            dialog_1.MatDialogModule,
            tooltip_1.MatTooltipModule,
            snack_bar_1.MatSnackBarModule,
            table_1.MatTableModule,
            tree_1.MatTreeModule,
            sort_1.MatSortModule,
            paginator_1.MatPaginatorModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        entryComponents: [
            add_dialog_component_1.AddDialogComponent,
            edit_dialog_component_1.EditDialogComponent,
            delete_dialog_component_1.DeleteDialogComponent,
            displayTable_dialog_component_1.DisplayTableDialogComponent,
            db_connect_component_1.DbConnectComponent,
            git_token_component_1.GitTokenComponent
        ],
        providers: [data_service_1.DataService, parent_to_childs_component_1.ParentToChildsDynamicDatabase, child_to_parents_component_1.ChildToParentsDynamicDatabase,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            { provide: dialog_1.MatDialogRef, useValue: {} }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/column/column.component.less":
/*!**********************************************!*\
  !*** ./src/app/column/column.component.less ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".column-container {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n}\nmat-form-field {\n  margin-left: 20px;\n  margin-right: 10px;\n}\n.index-column {\n  width: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29iL3Byb2plY3RzL21lZGZseXRfZXJkX2dlbmVyYXRvcl9mcm9udC9NZWRmbHl0RXJkR2VuZXJhdG9yRnJvbnQvc3JjL2FwcC9jb2x1bW4vY29sdW1uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb2x1bW4vY29sdW1uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUU7RUFDRSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb2x1bW4vY29sdW1uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHVtbi1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmluZGV4LWNvbHVtbntcbiAgICB3aWR0aDogMjBweDtcbiAgfSIsIi5jb2x1bW4tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaW5kZXgtY29sdW1uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/column/column.component.ts":
/*!********************************************!*\
  !*** ./src/app/column/column.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const types = tslib_1.__importStar(__webpack_require__(/*! src/entities/tableGeneratorStructure */ "./src/entities/tableGeneratorStructure.ts"));
const getter_service_1 = __webpack_require__(/*! ../services/getter.service */ "./src/app/services/getter.service.ts");
const data_service_1 = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
let ColumnComponent = class ColumnComponent {
    constructor(gtService, dataService) {
        this.gtService = gtService;
        this.dataService = dataService;
        this.submitedCol = new core_1.EventEmitter();
        this.colTypes = [];
        this.isPk = false;
        this.nullable = false;
        this.colName = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.constraint = undefined;
        this.parentTablesList = [];
        this.parentTableColumnsNames = [];
    }
    ngOnInit() {
        if (this.receivedCol !== undefined) {
            this.name = this.receivedCol.name;
            this.type = this.receivedCol.type;
            this.isPk = this.receivedCol.isPk;
            this.nullable = this.receivedCol.nullable;
            if (this.receivedCol.constraint !== undefined) {
                this.name = this.receivedCol.constraint.name;
                this.tblParent = this.receivedCol.constraint.tblParent;
                this.colParent = this.receivedCol.constraint.colParent;
            }
        }
        this.colTypes = types.TypeScriptTypesArray;
        this.getParentTablesName('');
    }
    getParentTablesName(filterKeyword) {
        this.gtService.getTablesName(this.dataService.pgConnect).subscribe(data => {
            this.parentTablesList = data.tablesName.filter(tblName => tblName.includes(filterKeyword));
        });
    }
    getTableStructure(tblName) {
        this.gtService.getTableStructure(tblName, this.dataService.pgConnect).subscribe(data => {
            this.parentTableColumnsNames = data.tableCol.map(x => x.name);
        });
    }
    getErrorMessage(fieldName) {
        // tslint:disable-next-line: max-line-length
        return this[fieldName].hasError('required') ? 'You must enter a ' + fieldName : this[fieldName].hasError(fieldName) ? 'Not a valid ' + fieldName : '';
    }
    constraintParentTableChange(tblName) {
        console.log(tblName);
        this.getTableStructure(tblName);
    }
    submitColumn() {
        if (!this.name) {
            console.log('column name is empty');
        }
        else if (!this.type) {
            console.log('column type is empty');
        }
        else if (this.constraintValid() === -1) {
            console.log('constraint is not valid');
        }
        else {
            const col = {
                name: this.name,
                type: this.type,
                isPk: this.isPk,
                nullable: this.nullable,
                constraint: undefined
            };
            if (this.constraintValid() === 1) {
                col.constraint = {
                    name: '',
                    tblParent: this.tblParent,
                    colParent: this.colParent
                };
            }
            this.submited = true;
            this.submitedCol.emit(col);
        }
    }
    constraintValid() {
        let isValid = -1;
        if (this.tblParent && this.colParent) {
            isValid = 1;
        }
        else if (!this.tblParent && !this.colParent) {
            isValid = 0;
        }
        return isValid;
    }
};
ColumnComponent.ctorParameters = () => [
    { type: getter_service_1.GetterService },
    { type: data_service_1.DataService }
];
tslib_1.__decorate([
    core_1.Output()
], ColumnComponent.prototype, "submitedCol", void 0);
tslib_1.__decorate([
    core_1.Input()
], ColumnComponent.prototype, "receivedCol", void 0);
tslib_1.__decorate([
    core_1.Input()
], ColumnComponent.prototype, "colIndex", void 0);
ColumnComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-column',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./column.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/column/column.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./column.component.less */ "./src/app/column/column.component.less")).default]
    })
], ColumnComponent);
exports.ColumnComponent = ColumnComponent;


/***/ }),

/***/ "./src/app/db-connect/db-connect.component.less":
/*!******************************************************!*\
  !*** ./src/app/db-connect/db-connect.component.less ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RiLWNvbm5lY3QvZGItY29ubmVjdC5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/db-connect/db-connect.component.ts":
/*!****************************************************!*\
  !*** ./src/app/db-connect/db-connect.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
let DbConnectComponent = class DbConnectComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dbHost = new forms_1.FormControl(localStorage.getItem('pgConnOptHost'), [forms_1.Validators.required]);
        this.dbName = new forms_1.FormControl(localStorage.getItem('pgConnOptDatabase'), [forms_1.Validators.required]);
        this.dbUser = new forms_1.FormControl(localStorage.getItem('pgConnOptUser'), [forms_1.Validators.required]);
        this.dbPassword = new forms_1.FormControl(localStorage.getItem('pgConnOptPassword'), [forms_1.Validators.required]);
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onDbSubmit() {
        localStorage.setItem('pgConnOptUser', this.dbUser.value);
        localStorage.setItem('pgConnOptPassword', this.dbPassword.value);
        localStorage.setItem('pgConnOptHost', this.dbHost.value);
        localStorage.setItem('pgConnOptDatabase', this.dbName.value);
        this.pgConnect = {
            database: this.dbName.value,
            host: this.dbHost.value,
            password: this.dbPassword.value,
            user: this.dbUser.value
        };
        this.dialogRef.close(this.pgConnect);
    }
};
DbConnectComponent.ctorParameters = () => [
    { type: dialog_1.MatDialogRef },
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] }
];
DbConnectComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-db-connect',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./db-connect.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/db-connect/db-connect.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./db-connect.component.less */ "./src/app/db-connect/db-connect.component.less")).default]
    }),
    tslib_1.__param(1, core_1.Optional()), tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
], DbConnectComponent);
exports.DbConnectComponent = DbConnectComponent;


/***/ }),

/***/ "./src/app/dialogs/add/add.dialog.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/dialogs/add/add.dialog.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const tableGeneratorStructure_1 = __webpack_require__(/*! ./../../../entities/tableGeneratorStructure */ "./src/entities/tableGeneratorStructure.ts");
const getter_service_1 = __webpack_require__(/*! ./../../services/getter.service */ "./src/app/services/getter.service.ts");
const dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const data_service_1 = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const tableGeneratorStructure_2 = __webpack_require__(/*! src/entities/tableGeneratorStructure */ "./src/entities/tableGeneratorStructure.ts");
let AddDialogComponent = class AddDialogComponent {
    constructor(dialogRef, data, dataService, gtService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.gtService = gtService;
        this.colTypes = tableGeneratorStructure_1.TypeScriptTypesArray;
        this.name = '';
        this.type = '';
        this.nullable = false;
        this.isPk = false;
        this.tblParent = '';
        this.colParent = '';
        this.parentTablesList = [];
        this.parentTableColumnsNames = [];
        this.formControl = new forms_1.FormControl('', [
            forms_1.Validators.required
        ]);
        console.log(data);
        this.getParentTablesName('');
        this.name = data['column'].name;
        this.type = data['column'].type;
        this.isPk = data['column'].isPk;
        this.nullable = data['column'].nullable;
        if (data['column'].constraint) {
            this.tblParent = data['column'].constraint.tblParent,
                this.colParent = data['column'].constraint.colParent;
        }
    }
    getErrorMessage() {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    }
    getTableStructure(tblName) {
        this.gtService.getTableStructure(tblName, this.dataService.pgConnect).subscribe(data => {
            this.parentTableColumnsNames = data.tableCol.map(x => x.name);
        });
    }
    getParentTablesName(filterKeyword) {
        this.gtService.getTablesName(this.dataService.pgConnect).subscribe(data => {
            this.parentTablesList = data.tablesName.filter(tblName => tblName.includes(filterKeyword));
        });
    }
    constraintParentTableChange(tblName) {
        console.log(tblName);
        this.getTableStructure(tblName);
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        if (!this.name) {
            console.log('column name is empty');
        }
        else if (!this.type) {
            console.log('column type is empty');
        }
        else if (this.constraintValid() === -1) {
            console.log('constraint is not valid');
        }
        else {
            const col = {
                name: this.name,
                type: this.type,
                isPk: this.isPk,
                nullable: this.nullable,
                constraint: undefined
            };
            if (this.constraintValid() === 1) {
                col.constraint = {
                    name: '',
                    tblParent: this.tblParent,
                    colParent: this.colParent
                };
            }
            this.dataService.addColumn(col);
        }
    }
    submitColumn() {
    }
    constraintValid() {
        let isValid = -1;
        if (this.tblParent && this.colParent) {
            isValid = 1;
        }
        else if (!this.tblParent && !this.colParent) {
            isValid = 0;
        }
        return isValid;
    }
};
AddDialogComponent.ctorParameters = () => [
    { type: dialog_1.MatDialogRef },
    { type: tableGeneratorStructure_2.Column, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] },
    { type: data_service_1.DataService },
    { type: getter_service_1.GetterService }
];
AddDialogComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-add.dialog',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!../../dialogs/add/add.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/add/add.dialog.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ../../dialogs/add/add.dialog.css */ "./src/app/dialogs/add/add.dialog.css")).default]
    }),
    tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
], AddDialogComponent);
exports.AddDialogComponent = AddDialogComponent;


/***/ }),

/***/ "./src/app/dialogs/add/add.dialog.css":
/*!********************************************!*\
  !*** ./src/app/dialogs/add/add.dialog.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  padding-top: 6px;\n}\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9hZGQvYWRkLmRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9ncy9hZGQvYWRkLmRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiA0NTBweDtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/dialogs/delete/delete.dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dialogs/delete/delete.dialog.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const data_service_1 = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
let DeleteDialogComponent = class DeleteDialogComponent {
    constructor(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.dataService.deleteColumn(this.data.id);
    }
};
DeleteDialogComponent.ctorParameters = () => [
    { type: dialog_1.MatDialogRef },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] },
    { type: data_service_1.DataService }
];
DeleteDialogComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-delete.dialog',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!../../dialogs/delete/delete.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/delete/delete.dialog.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ../../dialogs/delete/delete.dialog.css */ "./src/app/dialogs/delete/delete.dialog.css")).default]
    }),
    tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
], DeleteDialogComponent);
exports.DeleteDialogComponent = DeleteDialogComponent;


/***/ }),

/***/ "./src/app/dialogs/delete/delete.dialog.css":
/*!**************************************************!*\
  !*** ./src/app/dialogs/delete/delete.dialog.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container > * {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9kZWxldGUvZGVsZXRlLmRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9ncy9kZWxldGUvZGVsZXRlLmRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/dialogs/displayTable/displayTable.dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/displayTable/displayTable.dialog.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const data_service_1 = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
let DisplayTableDialogComponent = class DisplayTableDialogComponent {
    constructor(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.dataService.deleteColumn(this.data.id);
    }
};
DisplayTableDialogComponent.ctorParameters = () => [
    { type: dialog_1.MatDialogRef },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] },
    { type: data_service_1.DataService }
];
DisplayTableDialogComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-display-table.dialog',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!../../dialogs/displayTable/displayTable.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/displayTable/displayTable.dialog.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ../../dialogs/displayTable/displayTable.dialog.css */ "./src/app/dialogs/displayTable/displayTable.dialog.css")).default]
    }),
    tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
], DisplayTableDialogComponent);
exports.DisplayTableDialogComponent = DisplayTableDialogComponent;


/***/ }),

/***/ "./src/app/dialogs/displayTable/displayTable.dialog.css":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/displayTable/displayTable.dialog.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container > * {\n  width: 100%;\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9kaXNwbGF5VGFibGUvZGlzcGxheVRhYmxlLmRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvZGlzcGxheVRhYmxlL2Rpc3BsYXlUYWJsZS5kaWFsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dialogs/edit/edit.dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dialogs/edit/edit.dialog.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const tableGeneratorStructure_1 = __webpack_require__(/*! ./../../../entities/tableGeneratorStructure */ "./src/entities/tableGeneratorStructure.ts");
const getter_service_1 = __webpack_require__(/*! ./../../services/getter.service */ "./src/app/services/getter.service.ts");
const dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const data_service_1 = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
let EditDialogComponent = class EditDialogComponent {
    constructor(dialogRef, data, dataService, gtService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.gtService = gtService;
        this.colTypes = tableGeneratorStructure_1.TypeScriptTypesArray;
        this.name = '';
        this.type = '';
        this.nullable = false;
        this.isPk = false;
        this.tblParent = '';
        this.colParent = '';
        this.fkName = '';
        this.parentTablesList = [];
        this.parentTableColumnsNames = [];
        this.formControl = new forms_1.FormControl('', [
            forms_1.Validators.required
        ]);
        this.getParentTablesName('');
        this.name = data['column'].name;
        this.type = data['column'].type;
        this.isPk = data['column'].isPk;
        this.nullable = data['column'].nullable;
        if (data['column'].constraint) {
            this.fkName = data['column'].constraint.name,
                this.tblParent = data['column'].constraint.tblParent,
                this.colParent = data['column'].constraint.colParent;
        }
    }
    getErrorMessage() {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    }
    getTableStructure(tblName) {
        this.gtService.getTableStructure(tblName, this.dataService.pgConnect).subscribe(data => {
            this.parentTableColumnsNames = data.tableCol.map(x => x.name);
        });
    }
    getParentTablesName(filterKeyword) {
        this.gtService.getTablesName(this.dataService.pgConnect).subscribe(data => {
            this.parentTablesList = data.tablesName.filter(tblName => tblName.includes(filterKeyword));
        });
    }
    constraintParentTableChange(tblName) {
        this.getTableStructure(tblName);
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    stopEdit() {
        if (!this.name) {
            console.log('column name is empty');
        }
        else if (!this.type) {
            console.log('column type is empty');
        }
        else if (this.constraintValid() === -1) {
            console.log('constraint is not valid');
        }
        else {
            this.type = this.type;
            const col = {
                name: this.name,
                type: this.type,
                isPk: this.isPk,
                nullable: this.nullable,
                constraint: undefined
            };
            if (this.constraintValid() === 1) {
                col.constraint = {
                    name: this.fkName,
                    tblParent: this.tblParent,
                    colParent: this.colParent
                };
            }
            this.dataService.updateColumn(col);
        }
    }
    constraintValid() {
        let isValid = -1;
        if (this.tblParent && this.colParent) {
            isValid = 1;
        }
        else if (!this.tblParent && !this.colParent) {
            isValid = 0;
        }
        return isValid;
    }
};
EditDialogComponent.ctorParameters = () => [
    { type: dialog_1.MatDialogRef },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] },
    { type: data_service_1.DataService },
    { type: getter_service_1.GetterService }
];
EditDialogComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-baza.dialog',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!../../dialogs/edit/edit.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/edit/edit.dialog.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ../../dialogs/edit/edit.dialog.css */ "./src/app/dialogs/edit/edit.dialog.css")).default]
    }),
    tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
], EditDialogComponent);
exports.EditDialogComponent = EditDialogComponent;


/***/ }),

/***/ "./src/app/dialogs/edit/edit.dialog.css":
/*!**********************************************!*\
  !*** ./src/app/dialogs/edit/edit.dialog.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  padding-top: 6px;\n}\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9lZGl0L2VkaXQuZGlhbG9nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL2VkaXQvZWRpdC5kaWFsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogNDUwcHg7XG59XG5cbi5jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/from-number-type-to-erd-structure.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/from-number-type-to-erd-structure.pipe.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const tableGeneratorStructure_1 = __webpack_require__(/*! src/entities/tableGeneratorStructure */ "./src/entities/tableGeneratorStructure.ts");
let FromNumberTypeToErdStructurePipe = class FromNumberTypeToErdStructurePipe {
    transform(value, ...args) {
        const num = parseInt(value, 10);
        return tableGeneratorStructure_1.TypeScriptTypesArray[num];
    }
};
FromNumberTypeToErdStructurePipe = tslib_1.__decorate([
    core_1.Pipe({
        name: 'fromNumberTypeToErdStructure'
    })
], FromNumberTypeToErdStructurePipe);
exports.FromNumberTypeToErdStructurePipe = FromNumberTypeToErdStructurePipe;


/***/ }),

/***/ "./src/app/from-table-name-to-title.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/from-table-name-to-title.pipe.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let FromTableNameToTitlePipe = class FromTableNameToTitlePipe {
    transform(value, ...args) {
        const titleWords = value.split('_');
        let title = '';
        for (const word of titleWords) {
            const newWord = word.charAt(0).toUpperCase() + word.slice(1);
            title += newWord + ' ';
        }
        return title;
    }
};
FromTableNameToTitlePipe = tslib_1.__decorate([
    core_1.Pipe({
        name: 'fromTableNameToTitle'
    })
], FromTableNameToTitlePipe);
exports.FromTableNameToTitlePipe = FromTableNameToTitlePipe;


/***/ }),

/***/ "./src/app/git-token/git-token.component.less":
/*!****************************************************!*\
  !*** ./src/app/git-token/git-token.component.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdC10b2tlbi9naXQtdG9rZW4uY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/git-token/git-token.component.ts":
/*!**************************************************!*\
  !*** ./src/app/git-token/git-token.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
let GitTokenComponent = class GitTokenComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.gitToken = new forms_1.FormControl(localStorage.getItem('githubToken'), [forms_1.Validators.required]);
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onDbSubmit() {
        localStorage.setItem('githubToken', this.gitToken.value);
        this.dialogRef.close(this.gitToken.value);
    }
};
GitTokenComponent.ctorParameters = () => [
    { type: material_1.MatDialogRef },
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [material_1.MAT_DIALOG_DATA,] }] }
];
GitTokenComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-git-token',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./git-token.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/git-token/git-token.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./git-token.component.less */ "./src/app/git-token/git-token.component.less")).default]
    }),
    tslib_1.__param(1, core_1.Optional()), tslib_1.__param(1, core_1.Inject(material_1.MAT_DIALOG_DATA))
], GitTokenComponent);
exports.GitTokenComponent = GitTokenComponent;


/***/ }),

/***/ "./src/app/hr-document-generator/hr-document-generator.component.less":
/*!****************************************************************************!*\
  !*** ./src/app/hr-document-generator/hr-document-generator.component.less ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".db-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.db-full-width {\n  width: 100%;\n}\n:host ::ng-deep.mat-form-field-infix {\n  width: 500px;\n}\n:host ::ng-deep.mat-header-cell {\n  padding-left: 20px;\n}\n:host ::ng-deep.mat-cell {\n  padding-left: 20px;\n}\n.hr-doc-section {\n  background-color: #f3f1f1;\n  width: 50%;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29iL3Byb2plY3RzL21lZGZseXRfZXJkX2dlbmVyYXRvcl9mcm9udC9NZWRmbHl0RXJkR2VuZXJhdG9yRnJvbnQvc3JjL2FwcC9oci1kb2N1bWVudC1nZW5lcmF0b3IvaHItZG9jdW1lbnQtZ2VuZXJhdG9yLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9oci1kb2N1bWVudC1nZW5lcmF0b3IvaHItZG9jdW1lbnQtZ2VuZXJhdG9yLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0FDREY7QURHQTtFQUNFLGtCQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvaHItZG9jdW1lbnQtZ2VuZXJhdG9yL2hyLWRvY3VtZW50LWdlbmVyYXRvci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYi1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYi1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHdpZHRoOiA1MDBweDtcbn1cbjpob3N0IDo6bmctZGVlcC5tYXQtaGVhZGVyLWNlbGx7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwLm1hdC1jZWxse1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5oci1kb2Mtc2VjdGlvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjFmMTtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuIiwiLmRiLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5kYi1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICB3aWR0aDogNTAwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAubWF0LWhlYWRlci1jZWxsIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwLm1hdC1jZWxsIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmhyLWRvYy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjFmMTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/hr-document-generator/hr-document-generator.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/hr-document-generator/hr-document-generator.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var HrDocumentGeneratorComponent_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const hr_service_1 = __webpack_require__(/*! ../services/hr.service */ "./src/app/services/hr.service.ts");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
const dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
const sort_1 = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const data_service_1 = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
let HrDocumentGeneratorComponent = HrDocumentGeneratorComponent_1 = class HrDocumentGeneratorComponent {
    constructor(hrService, dialog, dataService) {
        this.hrService = hrService;
        this.dialog = dialog;
        this.dataService = dataService;
        this.hrSubsectionDataSource = new material_1.MatTableDataSource(this.hrSubsectionArr);
        this.hrSubsectionColumns = [];
        this.filterCols = ['template_id', 'created_at', 'is_name_editable', 'is_question_editable', 'settings', 'order_num', 'section', 'type'];
    }
    ngOnInit() {
        this.pgConnOpt = this.dataService.pgConnect;
        this.onDbSubmit();
    }
    onDbSubmit() {
        this.hrService.getHrDocumentType(this.pgConnOpt).subscribe(data => {
            this.hrDocTypsArr = data;
        });
    }
    docTypeChange(hrDocTypeSelected) {
        console.log(hrDocTypeSelected);
        this.hrService.getHrSubsectionTemplateByDocumentTypeId(this.pgConnOpt, hrDocTypeSelected.id).subscribe(data => {
            this.hrSubSectionTemplateArr = data;
        });
    }
    subsectionTamplateChange(hrSubsectionTemplate) {
        console.log(hrSubsectionTemplate);
        this.hrService.getHrSubsectionByHrSubsectionTemplateId(this.pgConnOpt, hrSubsectionTemplate.id).subscribe(data => {
            this.hrSubsectionArr = data;
            this.hrSubsectionDataSource = new material_1.MatTableDataSource(this.hrSubsectionArr);
            this.hrSubsectionColumns = Object.keys(this.hrSubsectionArr[0]).reduce((accumulator, currentValue) => {
                if (this.filterCols.filter(x => x === currentValue).length) {
                    return accumulator;
                }
                else {
                    accumulator.push(currentValue);
                    return accumulator;
                }
            }, []);
            this.hrSubsectionColumns.push('viewQuestions');
            this.hrSubsectionDataSource.sort = this.sort;
        });
    }
    subsectionChange(hrSubsection) {
        console.log(hrSubsection);
    }
    subsectionFilter(event) {
        const filterValue = event.target.value;
        this.hrSubsectionDataSource.filter = filterValue.trim().toLowerCase();
    }
};
HrDocumentGeneratorComponent.ctorParameters = () => [
    { type: hr_service_1.HrService },
    { type: dialog_1.MatDialog },
    { type: data_service_1.DataService }
];
tslib_1.__decorate([
    core_1.ViewChild(sort_1.MatSort, { static: true })
], HrDocumentGeneratorComponent.prototype, "sort", void 0);
HrDocumentGeneratorComponent = HrDocumentGeneratorComponent_1 = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-hr-document-generator',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./hr-document-generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-document-generator/hr-document-generator.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./hr-document-generator.component.less */ "./src/app/hr-document-generator/hr-document-generator.component.less")).default]
    }),
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [HrDocumentGeneratorComponent_1]
    })
], HrDocumentGeneratorComponent);
exports.HrDocumentGeneratorComponent = HrDocumentGeneratorComponent;


/***/ }),

/***/ "./src/app/list-tables/list-tables.component.less":
/*!********************************************************!*\
  !*** ./src/app/list-tables/list-tables.component.less ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("tr td {\n  padding-right: 10px !important;\n}\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n.tabel-view-body {\n  background-color: #f3f1f1;\n  width: 50%;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29iL3Byb2plY3RzL21lZGZseXRfZXJkX2dlbmVyYXRvcl9mcm9udC9NZWRmbHl0RXJkR2VuZXJhdG9yRnJvbnQvc3JjL2FwcC9saXN0LXRhYmxlcy9saXN0LXRhYmxlcy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGlzdC10YWJsZXMvbGlzdC10YWJsZXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSw4QkFBQTtBQ0FSO0FESUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNGSjtBRElFO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9saXN0LXRhYmxlcy9saXN0LXRhYmxlcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbInRye1xuICAgIHRke1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIFxuICAuZXhhbXBsZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICAudGFiZWwtdmlldy1ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YxZjE7XG4gICAgd2lkdGg6IDUwJTtcbiAgXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBcbiAgfVxuICAiLCJ0ciB0ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cbi50YWJlbC12aWV3LWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMWYxO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/list-tables/list-tables.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-tables/list-tables.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const getter_service_1 = __webpack_require__(/*! ../services/getter.service */ "./src/app/services/getter.service.ts");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
const data_service_1 = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
const ELEMENT_DATA = [];
let ListTablesComponent = class ListTablesComponent {
    constructor(gtService, dataService) {
        this.gtService = gtService;
        this.dataService = dataService;
        this.tablesList = [];
        this.displayedColumns = ['name', 'type', 'nullable', 'isPk', 'relatedToTable', 'atColumn', 'fkName'];
        this.colSource = new material_1.MatTableDataSource(ELEMENT_DATA);
        this.openeds = {};
        this.loaded = {};
    }
    ngOnInit() {
        this.getTablesName('');
    }
    getTablesName(filterKeyword) {
        this.gtService.getTablesName(this.dataService.pgConnect).subscribe(data => {
            data.tablesName.filter(tblName => tblName.includes(filterKeyword)).forEach(element => {
                const tbl = {
                    name: element,
                    colSource: new material_1.MatTableDataSource(ELEMENT_DATA),
                    openeds: false
                };
                this.tablesList.push(tbl);
            });
        });
    }
    getTableStructure(tblName, index) {
        this.loaded[index] = true;
        this.gtService.getTableStructure(tblName, this.dataService.pgConnect).subscribe(data => {
            this.tablesList.forEach(tbl => {
                if (tbl.name === tblName) {
                    tbl.colSource = data.tableCol;
                    console.log(tbl.colSource.length);
                }
            });
        });
    }
    applyFilter(evt) {
        this.getTablesName(evt);
    }
};
ListTablesComponent.ctorParameters = () => [
    { type: getter_service_1.GetterService },
    { type: data_service_1.DataService }
];
ListTablesComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-list-tables',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./list-tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-tables/list-tables.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./list-tables.component.less */ "./src/app/list-tables/list-tables.component.less")).default]
    })
], ListTablesComponent);
exports.ListTablesComponent = ListTablesComponent;


/***/ }),

/***/ "./src/app/new-table/new-table.component.less":
/*!****************************************************!*\
  !*** ./src/app/new-table/new-table.component.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td,\nth {\n  padding: 20px !important;\n  text-align: center !important;\n}\n.create-table-container {\n  display: flex;\n  flex-direction: row;\n  width: 30%;\n}\n.example-container {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin: 0 auto;\n}\n.example-container > * {\n  width: 30%;\n}\n.example-container form {\n  margin-bottom: 20px;\n}\n.example-container form > * {\n  margin: 5px 0;\n}\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n.table-container {\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 25%;\n}\n:host ::ng-deep.mat-paginator-container {\n  justify-content: center !important;\n}\n.paginator-container {\n  width: 100% !important;\n  margin: 0 auto !important;\n}\n.add-table-container {\n  width: 80%;\n  margin: 0 auto;\n}\n.generate-table-btn {\n  margin-top: 37px;\n  width: 14%;\n  /* margin: 0 auto; */\n  font-size: 24px;\n  background-color: #d01b58;\n  color: white;\n  margin-left: 43%;\n}\n.progress-spinner-btn {\n  margin-top: 37px;\n  width: 14%;\n  /* margin: 0 auto; */\n  font-size: 24px;\n  color: white;\n  margin-left: 43%;\n}\n.generaters-buttons-container {\n  display: flex;\n  flex-direction: row;\n  width: 50%;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29iL3Byb2plY3RzL21lZGZseXRfZXJkX2dlbmVyYXRvcl9mcm9udC9NZWRmbHl0RXJkR2VuZXJhdG9yRnJvbnQvc3JjL2FwcC9uZXctdGFibGUvbmV3LXRhYmxlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9uZXctdGFibGUvbmV3LXRhYmxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUNFLHdCQUFBO0VBQ0EsNkJBQUE7QUNFRjtBREFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0VGO0FEQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0VGO0FEQ0E7RUFDRSxVQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7QUNERjtBRElBO0VBQ0UsY0FBQTtBQ0ZGO0FESUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUNFLGtDQUFBO0FDSEY7QURLQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7QUNIRjtBRE1BO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNKRjtBRE1BO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VDSkEsb0JBQW9CO0VETXBCLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUNMQSxvQkFBb0I7RURPcEIsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0xGO0FET0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvbmV3LXRhYmxlL25ldy10YWJsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbInRkLCB0aHtcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5jcmVhdGUtdGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDMwJTtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIGZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgZm9ybSA+ICoge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDAgMTJweDtcbn1cbi50YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctbGVmdDogMjUlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAubWF0LXBhZ2luYXRvci1jb250YWluZXJ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4ucGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG5cbn1cbi5hZGQtdGFibGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZ2VuZXJhdGUtdGFibGUtYnRuIHtcbiAgbWFyZ2luLXRvcDogMzdweDtcbiAgd2lkdGg6IDE0JTtcbiAgLyogbWFyZ2luOiAwIGF1dG87ICovXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwMWI1ODtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNDMlO1xufVxuXG4ucHJvZ3Jlc3Mtc3Bpbm5lci1idG4ge1xuICBtYXJnaW4tdG9wOiAzN3B4O1xuICB3aWR0aDogMTQlO1xuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0MyU7XG59XG4uZ2VuZXJhdGVycy1idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIiwidGQsXG50aCB7XG4gIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uY3JlYXRlLXRhYmxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAzMCU7XG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMzAlO1xufVxuLmV4YW1wbGUtY29udGFpbmVyIGZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmV4YW1wbGUtY29udGFpbmVyIGZvcm0gPiAqIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMnB4O1xufVxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAyNSU7XG59XG46aG9zdCA6Om5nLWRlZXAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLnBhZ2luYXRvci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuLmFkZC10YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5nZW5lcmF0ZS10YWJsZS1idG4ge1xuICBtYXJnaW4tdG9wOiAzN3B4O1xuICB3aWR0aDogMTQlO1xuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgZm9udC1zaXplOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDAxYjU4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0MyU7XG59XG4ucHJvZ3Jlc3Mtc3Bpbm5lci1idG4ge1xuICBtYXJnaW4tdG9wOiAzN3B4O1xuICB3aWR0aDogMTQlO1xuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0MyU7XG59XG4uZ2VuZXJhdGVycy1idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/new-table/new-table.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-table/new-table.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const tableGeneratorStructure_1 = __webpack_require__(/*! src/entities/tableGeneratorStructure */ "./src/entities/tableGeneratorStructure.ts");
const generator_service_1 = __webpack_require__(/*! ../services/generator.service */ "./src/app/services/generator.service.ts");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const data_service_1 = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
const paginator_1 = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
const sort_1 = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
const collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
const add_dialog_component_1 = __webpack_require__(/*! ../dialogs/add/add.dialog.component */ "./src/app/dialogs/add/add.dialog.component.ts");
const edit_dialog_component_1 = __webpack_require__(/*! ../dialogs/edit/edit.dialog.component */ "./src/app/dialogs/edit/edit.dialog.component.ts");
const delete_dialog_component_1 = __webpack_require__(/*! ../dialogs/delete/delete.dialog.component */ "./src/app/dialogs/delete/delete.dialog.component.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
const git_token_component_1 = __webpack_require__(/*! ../git-token/git-token.component */ "./src/app/git-token/git-token.component.ts");
let NewTableComponent = class NewTableComponent {
    // tslint:disable-next-line: max-line-length
    constructor(generatorService, httpClient, dialog, dataService) {
        this.generatorService = generatorService;
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.dataService = dataService;
        this.tableName = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.columns = [];
        this.newColClicked = false;
        this.generatColUpdatedAt = false;
        this.generatColUpdatedBy = false;
        this.generatColCreatedAt = false;
        this.generatColCreatedBy = false;
        this.generatColPrimaryKey = false;
        this.displayedColumns = ['name', 'type', 'nullable', 'isPk', 'relatedToTable', 'atColumn', 'fkName', 'actions'];
        this.pendingRequest = false;
    }
    ngOnInit() {
        if (localStorage.getItem('githubToken') === null) {
            const dialogRef = this.dialog.open(git_token_component_1.GitTokenComponent, {
                data: { githubToken: '' }
            });
            dialogRef.afterClosed().subscribe(result => {
                this.fillPgConectOptionFromLocalStorage();
                this.loadData();
            });
        }
        else {
            this.fillPgConectOptionFromLocalStorage();
            this.loadData();
        }
        this.loadData();
    }
    fillPgConectOptionFromLocalStorage() {
        this.githubToken = localStorage.getItem('githubToken');
    }
    refresh() {
        this.loadData();
    }
    generateTemplate(erdStrct) {
        this.pendingRequest = true;
        this.generatorService.generateTemplate(erdStrct).subscribe(data => {
            const blob = new Blob([data], { type: 'application/zip' });
            const url = window.URL.createObjectURL(blob);
            window.open(url);
            this.pendingRequest = false;
        });
    }
    getErrorMessage(fieldName) {
        // tslint:disable-next-line: max-line-length
        return this[fieldName].hasError('required') ? 'You must enter a ' + fieldName : this[fieldName].hasError(fieldName) ? 'Not a valid ' + fieldName : '';
    }
    onTableNameChange(searchValue) {
    }
    constraintValid(col) {
        let valid = false;
        if (col.constraint && col.constraint.tblParent && col.constraint.colParent) {
            valid = true;
        }
        return valid;
    }
    generateCol(colGnrtd) {
        const generatedColElement = {
            name: '',
            type: '4',
            nullable: false,
            isPk: false,
            fkName: undefined,
            relatedToTable: undefined,
            atColumn: undefined
        };
        const colGenerated = {
            name: '',
            type: '',
            nullable: false,
            isPk: false,
            constraint: undefined
        };
        if (colGnrtd === 'createdAt') {
            this.generatColCreatedAt = true;
            generatedColElement.name = 'created_at';
            generatedColElement.type = 'INSTANT';
        }
        else if (colGnrtd === 'createdBy') {
            this.generatColCreatedBy = true;
            generatedColElement.name = 'created_by';
            generatedColElement.type = 'INTEGER';
            generatedColElement.fkName = this.tableName.value + '_to_agency_member_fk';
            generatedColElement.relatedToTable = 'agency_member';
            generatedColElement.atColumn = 'id';
            colGenerated.constraint = {
                name: generatedColElement.fkName,
                tblParent: generatedColElement.relatedToTable,
                colParent: generatedColElement.atColumn
            };
        }
        else if (colGnrtd === 'updatedAt') {
            this.generatColUpdatedAt = true;
            generatedColElement.name = 'updated_at';
            generatedColElement.type = 'INSTANT';
        }
        else if (colGnrtd === 'updatedBy') {
            this.generatColUpdatedBy = true;
            generatedColElement.name = 'updated_by';
            generatedColElement.type = 'INTEGER';
            generatedColElement.fkName = this.tableName.value + '_to_agency_member_fk';
            generatedColElement.relatedToTable = 'agency_member';
            generatedColElement.atColumn = 'id';
            colGenerated.constraint = {
                name: generatedColElement.fkName,
                tblParent: generatedColElement.relatedToTable,
                colParent: generatedColElement.atColumn
            };
        }
        else if (colGnrtd === 'primaryKey') {
            this.generatColPrimaryKey = true;
            generatedColElement.name = 'id';
            generatedColElement.type = 'INTEGER';
            generatedColElement.isPk = true;
        }
        colGenerated.name = generatedColElement.name;
        colGenerated.type = generatedColElement.type;
        colGenerated.nullable = generatedColElement.nullable;
        colGenerated.isPk = generatedColElement.isPk;
        this.exampleDatabase.dataChange.value.push(colGenerated);
        this.refreshTable();
    }
    generateTable() {
        const newTableErdStructure = new tableGeneratorStructure_1.ErdStructure();
        newTableErdStructure.tblName = this.tableName.value;
        newTableErdStructure.githubToken = this.githubToken;
        newTableErdStructure.columns = [];
        for (const row of this.exampleDatabase.dataChange.value) {
            const col = {
                name: row.name,
                type: row.type,
                isPk: row.isPk,
                nullable: row.nullable,
                constraint: undefined
            };
            col.constraint = row.constraint;
            newTableErdStructure.columns.push(col);
        }
        this.generateTemplate(newTableErdStructure);
    }
    stringToEnum(enumObj, str) {
        return enumObj[str];
    }
    addNew(column) {
        if (column === undefined) {
            column = {
                name: '',
                type: '',
                isPk: false,
                nullable: false,
                constraint: {
                    name: '',
                    tblParent: '',
                    colParent: ''
                },
            };
        }
        const dialogRef = this.dialog.open(add_dialog_component_1.AddDialogComponent, {
            data: { column }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result === 1) {
                column = this.dataService.getDialogData();
                if (this.constraintValid(column)) {
                    column.constraint.name = this.tableName.value + '_' +
                        column.name + '_to_' +
                        column.constraint.tblParent + '_' +
                        column.constraint.colParent + '_fk';
                }
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                this.exampleDatabase.dataChange.value.push(column);
                this.refreshTable();
            }
        });
    }
    startEdit(i, name, type, nullable, isPk) {
        // index row is used just for debugging proposes and can be removed
        this.index = i;
        const column = {
            name,
            type,
            isPk,
            nullable,
            constraint: {
                name: '',
                tblParent: '',
                colParent: ''
            },
        };
        if (this.constraintValid(this.exampleDatabase.dataChange.value[this.index])) {
            column.constraint = {
                name: this.exampleDatabase.dataChange.value[this.index].constraint.name,
                tblParent: this.exampleDatabase.dataChange.value[this.index].constraint.tblParent,
                colParent: this.exampleDatabase.dataChange.value[this.index].constraint.colParent
            };
        }
        console.log(this.index);
        const dialogRef = this.dialog.open(edit_dialog_component_1.EditDialogComponent, {
            data: { column }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                const columnInserted = this.dataService.getDialogData();
                if (this.constraintValid(columnInserted)) {
                    columnInserted.constraint.name = this.tableName.value + '_' +
                        columnInserted.name + '_to_' +
                        columnInserted.constraint.tblParent + '_' +
                        columnInserted.constraint.colParent + '_fk';
                }
                // When using an edit things are little different, firstly we find record inside DataService by id
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.name === this.name);
                // Then you update that record using data from dialogData (values you enetered)
                this.exampleDatabase.dataChange.value[this.index] = columnInserted;
                // And lastly refresh table
                this.refreshTable();
            }
        });
    }
    deleteItem(i, name, type, nullable, isPk, relatedToTable, atColumn, fkName) {
        this.index = i;
        const dialogRef = this.dialog.open(delete_dialog_component_1.DeleteDialogComponent, {
            data: { name, type, nullable, isPk, relatedToTable, atColumn, fkName }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.name === this.name);
                // for delete we use splice in order to remove single object from DataService
                this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                this.refreshTable();
            }
        });
    }
    refreshTable() {
        this.paginator._changePageSize(this.paginator.pageSize);
    }
    loadData() {
        this.exampleDatabase = new data_service_1.DataService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    }
};
NewTableComponent.ctorParameters = () => [
    { type: generator_service_1.GeneratorService },
    { type: http_1.HttpClient },
    { type: dialog_1.MatDialog },
    { type: data_service_1.DataService }
];
tslib_1.__decorate([
    core_1.ViewChild(paginator_1.MatPaginator, { static: true })
], NewTableComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    core_1.ViewChild(sort_1.MatSort, { static: true })
], NewTableComponent.prototype, "sort", void 0);
NewTableComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-new-table',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./new-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-table/new-table.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./new-table.component.less */ "./src/app/new-table/new-table.component.less")).default]
    })
], NewTableComponent);
exports.NewTableComponent = NewTableComponent;
class ExampleDataSource extends collections_1.DataSource {
    constructor(exampleDatabase, paginator, sort) {
        super();
        this.exampleDatabase = exampleDatabase;
        this.paginator = paginator;
        this.sort = sort;
        this.filterChange = new rxjs_1.BehaviorSubject('');
        this.filteredData = [];
        this.renderedData = [];
    }
    get filter() {
        return this.filterChange.value;
    }
    set filter(filter) {
        this.filterChange.next(filter);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        // Listen for any changes in the base data, sorting, filtering, or pagination
        const displayDataChanges = [
            this.exampleDatabase.dataChange,
            this.paginator.page,
            this.filterChange,
        ];
        this.exampleDatabase.getAllColumns();
        return rxjs_1.merge(...displayDataChanges).pipe(operators_1.map(() => {
            // Filter data
            this.filteredData = this.exampleDatabase.data.slice().filter((column) => {
                const searchStr = (column.name + column.type + column.isPk + column.nullable).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            const sortedData = this.sortData(this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            this.renderedData = sortedData.splice(startIndex, this.paginator.pageSize);
            return this.renderedData;
            return this.renderedData;
        }));
    }
    /** Returns a sorted copy of the database data. */
    sortData(data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            let propertyA = '';
            let propertyB = '';
            switch (this.sort.active) {
                case 'name':
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case 'type':
                    [propertyA, propertyB] = [a.type, b.type];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (this.sort.direction === 'asc' ? 1 : -1);
        });
    }
    disconnect() { }
}
exports.ExampleDataSource = ExampleDataSource;


/***/ }),

/***/ "./src/app/relations/child-to-parents/child-to-parents.component.less":
/*!****************************************************************************!*\
  !*** ./src/app/relations/child-to-parents/child-to-parents.component.less ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbGF0aW9ucy9jaGlsZC10by1wYXJlbnRzL2NoaWxkLXRvLXBhcmVudHMuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/relations/child-to-parents/child-to-parents.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/relations/child-to-parents/child-to-parents.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const getter_service_1 = __webpack_require__(/*! ../../services/getter.service */ "./src/app/services/getter.service.ts");
const tree_1 = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
const displayTable_dialog_component_1 = __webpack_require__(/*! src/app/dialogs/displayTable/displayTable.dialog.component */ "./src/app/dialogs/displayTable/displayTable.dialog.component.ts");
const data_service_1 = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
let ChildToParentsComponent = class ChildToParentsComponent {
    constructor(gtService, database, dialog, dataService) {
        this.gtService = gtService;
        this.database = database;
        this.dialog = dialog;
        this.dataService = dataService;
        this.relationsDictionary = {};
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.treeControl = new tree_1.FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.gtService.getRealtions(this.dataService.pgConnect).subscribe(rltDic => {
            this.dataSource.data = this.database.initialData(rltDic.childToParentsDictionary);
        });
    }
    ngOnInit() {
        this.gtService.getRealtions(this.dataService.pgConnect).subscribe(rltDic => {
            this.relationsDictionary = rltDic;
        });
    }
    tableClicked(tblName) {
        this.gtService.getTableStructure(tblName, this.dataService.pgConnect).subscribe(columns => {
            this.displayTable(tblName, columns.tableCol);
        });
    }
    displayTable(tblName, columns) {
        this.dialog.open(displayTable_dialog_component_1.DisplayTableDialogComponent, { data: { tblName, columns } });
    }
};
ChildToParentsComponent.ctorParameters = () => [
    { type: getter_service_1.GetterService },
    { type: ChildToParentsDynamicDatabase },
    { type: material_1.MatDialog },
    { type: data_service_1.DataService }
];
ChildToParentsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-child-to-parents',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./child-to-parents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/relations/child-to-parents/child-to-parents.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./child-to-parents.component.less */ "./src/app/relations/child-to-parents/child-to-parents.component.less")).default]
    })
], ChildToParentsComponent);
exports.ChildToParentsComponent = ChildToParentsComponent;
/** Flat node with expandable and level information */
class DynamicFlatNode {
    constructor(item, level = 1, expandable = false, isLoading = false) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
exports.DynamicFlatNode = DynamicFlatNode;
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
class ChildToParentsDynamicDatabase {
    constructor() {
        this.dataMap = new Map();
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    initialData(relationsTableDictionary) {
        for (const prntTbl of Object.keys(relationsTableDictionary)) {
            this.dataMap.set(prntTbl, relationsTableDictionary[prntTbl]);
        }
        this.rootLevelNodes = Object.keys(relationsTableDictionary);
        return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    }
    getChildren(node) {
        return this.dataMap.get(node);
    }
    isExpandable(node) {
        return this.dataMap.has(node);
    }
}
exports.ChildToParentsDynamicDatabase = ChildToParentsDynamicDatabase;
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
let DynamicDataSource = class DynamicDataSource {
    constructor(_treeControl, _database) {
        this._treeControl = _treeControl;
        this._database = _database;
        this.dataChange = new rxjs_1.BehaviorSubject([]);
    }
    get data() { return this.dataChange.value; }
    set data(value) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    connect(collectionViewer) {
        this._treeControl.expansionModel.onChange.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return rxjs_1.merge(collectionViewer.viewChange, this.dataChange).pipe(operators_1.map(() => this.data));
    }
    /** Handle expand/collapse behaviors */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
        }
    }
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node, expand) {
        const children = this._database.getChildren(node.item);
        const index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(() => {
            if (expand) {
                const nodes = children.map(name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)));
                this.data.splice(index + 1, 0, ...nodes);
            }
            else {
                let count = 0;
                for (let i = index + 1; i < this.data.length
                    && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }, 1000);
    }
};
DynamicDataSource.ctorParameters = () => [
    { type: tree_1.FlatTreeControl },
    { type: ChildToParentsDynamicDatabase }
];
DynamicDataSource = tslib_1.__decorate([
    core_1.Injectable()
], DynamicDataSource);
exports.DynamicDataSource = DynamicDataSource;


/***/ }),

/***/ "./src/app/relations/parent-to-childs/parent-to-childs.component.less":
/*!****************************************************************************!*\
  !*** ./src/app/relations/parent-to-childs/parent-to-childs.component.less ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbGF0aW9ucy9wYXJlbnQtdG8tY2hpbGRzL3BhcmVudC10by1jaGlsZHMuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/relations/parent-to-childs/parent-to-childs.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/relations/parent-to-childs/parent-to-childs.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const getter_service_1 = __webpack_require__(/*! ../../services/getter.service */ "./src/app/services/getter.service.ts");
const tree_1 = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
const displayTable_dialog_component_1 = __webpack_require__(/*! src/app/dialogs/displayTable/displayTable.dialog.component */ "./src/app/dialogs/displayTable/displayTable.dialog.component.ts");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
const data_service_1 = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
let ParentToChildsComponent = class ParentToChildsComponent {
    constructor(gtService, database, dialog, dataService) {
        this.gtService = gtService;
        this.database = database;
        this.dialog = dialog;
        this.dataService = dataService;
        this.relationsDictionary = {};
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.treeControl = new tree_1.FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.gtService.getRealtions(this.dataService.pgConnect).subscribe(rltDic => {
            this.dataSource.data = this.database.initialData(rltDic.parentToChildsDictionary);
        });
    }
    ngOnInit() {
        this.gtService.getRealtions(this.dataService.pgConnect).subscribe(rltDic => {
            this.relationsDictionary = rltDic;
        });
    }
    tableClicked(tblName) {
        this.gtService.getTableStructure(tblName, this.dataService.pgConnect).subscribe(columns => {
            this.displayTable(tblName, columns.tableCol);
        });
    }
    displayTable(tblName, columns) {
        this.dialog.open(displayTable_dialog_component_1.DisplayTableDialogComponent, { data: { tblName, columns } });
    }
};
ParentToChildsComponent.ctorParameters = () => [
    { type: getter_service_1.GetterService },
    { type: ParentToChildsDynamicDatabase },
    { type: material_1.MatDialog },
    { type: data_service_1.DataService }
];
ParentToChildsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-parent-to-childs',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./parent-to-childs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/relations/parent-to-childs/parent-to-childs.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./parent-to-childs.component.less */ "./src/app/relations/parent-to-childs/parent-to-childs.component.less")).default]
    })
], ParentToChildsComponent);
exports.ParentToChildsComponent = ParentToChildsComponent;
/** Flat node with expandable and level information */
class DynamicFlatNode {
    constructor(item, level = 1, expandable = false, isLoading = false) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
exports.DynamicFlatNode = DynamicFlatNode;
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
class ParentToChildsDynamicDatabase {
    constructor() {
        this.dataMap = new Map();
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    initialData(relationsTableDictionary) {
        for (const prntTbl of Object.keys(relationsTableDictionary)) {
            this.dataMap.set(prntTbl, relationsTableDictionary[prntTbl]);
        }
        this.rootLevelNodes = Object.keys(relationsTableDictionary);
        return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    }
    getChildren(node) {
        return this.dataMap.get(node);
    }
    isExpandable(node) {
        return this.dataMap.has(node);
    }
}
exports.ParentToChildsDynamicDatabase = ParentToChildsDynamicDatabase;
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
let DynamicDataSource = class DynamicDataSource {
    constructor(treeControl, database) {
        this.treeControl = treeControl;
        this.database = database;
        this.dataChange = new rxjs_1.BehaviorSubject([]);
    }
    get data() { return this.dataChange.value; }
    set data(value) {
        this.treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    connect(collectionViewer) {
        this.treeControl.expansionModel.onChange.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return rxjs_1.merge(collectionViewer.viewChange, this.dataChange).pipe(operators_1.map(() => this.data));
    }
    /** Handle expand/collapse behaviors */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
        }
    }
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node, expand) {
        const children = this.database.getChildren(node.item);
        const index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(() => {
            if (expand) {
                const nodes = children.map(name => new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));
                this.data.splice(index + 1, 0, ...nodes);
            }
            else {
                let count = 0;
                for (let i = index + 1; i < this.data.length
                    && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }, 1000);
    }
};
DynamicDataSource.ctorParameters = () => [
    { type: tree_1.FlatTreeControl },
    { type: ParentToChildsDynamicDatabase }
];
DynamicDataSource = tslib_1.__decorate([
    core_1.Injectable()
], DynamicDataSource);
exports.DynamicDataSource = DynamicDataSource;


/***/ }),

/***/ "./src/app/relations/relations.component.less":
/*!****************************************************!*\
  !*** ./src/app/relations/relations.component.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbGF0aW9ucy9yZWxhdGlvbnMuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/relations/relations.component.ts":
/*!**************************************************!*\
  !*** ./src/app/relations/relations.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let RelationsComponent = class RelationsComponent {
    constructor() { }
    ngOnInit() { }
};
RelationsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-relations',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./relations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/relations/relations.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./relations.component.less */ "./src/app/relations/relations.component.less")).default]
    })
], RelationsComponent);
exports.RelationsComponent = RelationsComponent;


/***/ }),

/***/ "./src/app/remove-action-col.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/remove-action-col.pipe.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let RemoveActionColPipe = class RemoveActionColPipe {
    transform(items, ...args) {
        items = items.reduce((acc, curr) => {
            if (curr !== 'viewQuestions') {
                acc.push(curr);
            }
            else { }
            return acc;
        }, []);
        return items;
    }
};
RemoveActionColPipe = tslib_1.__decorate([
    core_1.Pipe({
        name: 'removeActionCol'
    })
], RemoveActionColPipe);
exports.RemoveActionColPipe = RemoveActionColPipe;


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let DataService = class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'https://api.github.com/repos/angular/angular/issues';
        this.dataChange = new rxjs_1.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllColumns() {
        this.dataChange;
    }
    // DEMO ONLY, you can find working methods below
    addColumn(col) {
        this.dialogData = col;
    }
    updateColumn(col) {
        this.dialogData = col;
    }
    deleteColumn(id) {
        console.log(id);
    }
};
DataService.ctorParameters = () => [
    { type: http_1.HttpClient }
];
DataService = tslib_1.__decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/


/***/ }),

/***/ "./src/app/services/generator.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/generator.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let GeneratorService = class GeneratorService {
    constructor(http) {
        this.http = http;
        this.host = 'http://localhost';
        this.port = '5000';
        this.headUrl = this.host + ':' + this.port + '/api/';
        this.postGenerateTamplateUrl = this.headUrl + 'create_template';
    }
    generateTemplate(tblParams) {
        return this.http.post(this.postGenerateTamplateUrl, tblParams, {
            responseType: 'arraybuffer'
        });
    }
};
GeneratorService.ctorParameters = () => [
    { type: http_1.HttpClient }
];
GeneratorService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], GeneratorService);
exports.GeneratorService = GeneratorService;


/***/ }),

/***/ "./src/app/services/getter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/getter.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let GetterService = class GetterService {
    constructor(http) {
        this.http = http;
        this.host = 'http://localhost';
        this.port = '5000';
        this.headUrl = this.host + ':' + this.port + '/api/';
        this.getTablesUrl = this.headUrl + 'get_tables';
        this.getTableStructureUrl = this.headUrl + 'get_table_structure';
        this.getRelationsUrl = this.headUrl + 'get_relations';
    }
    /* development porpose
      mokeTblList: Observable<string[]> = new Observable<string[]>();
       mokeColList: Observable<string[]> = new Observable<string[]>();
       */
    getTablesName(pgConn) {
        /* development porpose
          const simpleObservable = new Observable((observer) => {
          observer.next({tablesName : ['tbl1','tbl2','tbl3']});
            observer.complete();
          });
          return simpleObservable;*/
        return this.http.get(this.getTablesUrl + `?username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);
    }
    getTableStructure(tblName, pgConn) {
        /* development porpose
         const simpleObservable = new Observable((observer) => {
           observer.next({tableCol : [{name: 'id'}, {name: 'a'}, {name: 'b'}]});
            observer.complete();
         });
    
         return simpleObservable;*/
        return this.http.get(this.getTableStructureUrl + `?tblName=${tblName}&username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);
    }
    getRealtions(pgConn) {
        return this.http.get(this.getRelationsUrl +
            `?username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);
    }
};
GetterService.ctorParameters = () => [
    { type: http_1.HttpClient }
];
GetterService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], GetterService);
exports.GetterService = GetterService;


/***/ }),

/***/ "./src/app/services/hr.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/hr.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let HrService = class HrService {
    constructor(http) {
        this.http = http;
        this.host = 'http://localhost';
        this.port = '5000';
        this.headUrl = this.host + ':' + this.port + '/api/';
        this.getHrDocsTypeUrl = this.headUrl + 'hr_doc_type';
        this.getHrSubsectionTemplateByDocumentTypeIdUrl = this.headUrl + 'hr_subsection_template_by_doc_type_id';
        this.getHrSubsectionByHrSubsectionTemplateIdUrl = this.headUrl + 'hr_subsection_by_subsection_template_id';
    }
    getHrDocumentType(pgConn) {
        return this.http.get(this.getHrDocsTypeUrl +
            `?username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);
    }
    getHrSubsectionTemplateByDocumentTypeId(pgConn, hrDocumentTypeId) {
        return this.http.get(this.getHrSubsectionTemplateByDocumentTypeIdUrl +
            `?docTypeId=${hrDocumentTypeId}&username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);
    }
    getHrSubsectionByHrSubsectionTemplateId(pgConn, hrSubsectionTemplateId) {
        return this.http.get(this.getHrSubsectionByHrSubsectionTemplateIdUrl +
            `?subsectionTemplateId=${hrSubsectionTemplateId}
      &username=${pgConn.user}&password=${pgConn.password}&host=${pgConn.host}&dbName=${pgConn.database}`);
    }
};
HrService.ctorParameters = () => [
    { type: http_1.HttpClient }
];
HrService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], HrService);
exports.HrService = HrService;


/***/ }),

/***/ "./src/app/table-value.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/table-value.pipe.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let TableValuePipe = class TableValuePipe {
    transform(value, ...args) {
        if (value instanceof Date) {
            console.log(`its a date`);
        }
        return value;
    }
};
TableValuePipe = tslib_1.__decorate([
    core_1.Pipe({
        name: 'tableValue'
    })
], TableValuePipe);
exports.TableValuePipe = TableValuePipe;


/***/ }),

/***/ "./src/app/tables-view/tables-view.component.less":
/*!********************************************************!*\
  !*** ./src/app/tables-view/tables-view.component.less ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy12aWV3L3RhYmxlcy12aWV3LmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/tables-view/tables-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tables-view/tables-view.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let TablesViewComponent = class TablesViewComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
TablesViewComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-tables-view',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./tables-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables-view/tables-view.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./tables-view.component.less */ "./src/app/tables-view/tables-view.component.less")).default]
    })
], TablesViewComponent);
exports.TablesViewComponent = TablesViewComponent;


/***/ }),

/***/ "./src/entities/tableGeneratorStructure.ts":
/*!*************************************************!*\
  !*** ./src/entities/tableGeneratorStructure.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
class ErdStructure {
    constructor() {
        this.githubToken = undefined;
        this.tblName = undefined;
    }
}
exports.ErdStructure = ErdStructure;
class Column {
}
exports.Column = Column;
class Constraint {
}
exports.Constraint = Constraint;
exports.TypeScriptTypesArray = ['INTEGER', 'TEXT', 'BOOLEAN', 'LOCALDATE', 'INSTANT', 'JSONB'];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
__webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jacob/projects/_erd_generator_front/ErdGeneratorFront/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map