(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/core/library/public/number-utils.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/library/public/number-utils.service.ts ***!
  \*************************************************************/
/*! exports provided: NumberUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberUtilsService", function() { return NumberUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberUtilsService = /** @class */ (function () {
    function NumberUtilsService() {
    }
    NumberUtilsService._attemptConvertBool = function (value) {
        if (value) {
            switch (value.toLowerCase()) {
                case true:
                case 'true':
                case 1:
                case '1':
                case 'x':
                case 'hoat_dong':
                    return true;
                default:
                    return false;
            }
        }
        else {
            return false;
        }
    };
    NumberUtilsService._attemptConvertFloat = function (str) {
        // let tem = str.replace(",", "");
        if (str) {
            var tem = str.replace(new RegExp(',', 'g'), '');
            return parseFloat(tem);
        }
        else {
            return null;
        }
    };
    NumberUtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NumberUtilsService);
    return NumberUtilsService;
}());



/***/ }),

/***/ "./src/app/modules/users/components/add/add.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/users/components/add/add.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.update }} {{_translate.MENU.user }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"form\" [formData]=\"user\" validationGroup=\"userData\" [showColonAfterLabel]=\"false\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item *ngIf=\"!isConnectEfyId\" dataField=\"username\" [editorOptions]=\"{ disabled: disUserName }\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.username }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{_translate.CONTROLL.LABEL.username }} {{_translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n          <dxi-validation-rule type=\"pattern\" [pattern]=\"userNamePattern\"\r\n            message=\"{{_translate.CONTROLL.LABEL.username }} {{_translate.VALIDATION.username }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"name\" *ngIf=\"!isConnectEfyId\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.user_name }}\"></dxo-label>\r\n\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{_translate.CONTROLL.LABEL.user_name }} {{_translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n          <!-- <dxi-validation-rule\r\n            type=\"pattern\"\r\n            [pattern]=\"namePattern\"\r\n            message=\"{{_translate.CONTROLL.LABEL.user_name }} {{_translate.VALIDATION.not_number }}\">\r\n          </dxi-validation-rule> -->\r\n        </dxi-item>\r\n        <dxi-item dataField=\"password\" [editorOptions]=\"{mode: 'password'}\" *ngIf=\"!isConnectEfyId\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.password }}\"></dxo-label>\r\n\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{_translate.CONTROLL.LABEL.password }} {{_translate.VALIDATION.required }}\" *ngIf=\"isValidate\">\r\n          </dxi-validation-rule>\r\n          <dxi-validation-rule type=\"pattern\" [pattern]=\"passwordPattern\"\r\n            message=\"{{_translate.CONTROLL.LABEL.password }} {{showTextValidPass}}\" *ngIf=\"isValidate\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item editorType=\"dxTextBox\" [editorOptions]=\"{mode: 'password'}\" *ngIf=\"!isConnectEfyId\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.re_password }}\"></dxo-label>\r\n\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{_translate.CONTROLL.LABEL.re_password }} {{_translate.VALIDATION.required }}\" *ngIf=\"isValidate\">\r\n          </dxi-validation-rule>\r\n          <dxi-validation-rule type=\"compare\" [comparisonTarget]=\"passwordComparison\"\r\n            message=\"{{_translate.CONTROLL.LABEL.re_password }} {{_translate.VALIDATION.incorrect }}\"\r\n            *ngIf=\"isValidate\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"email\" [label]=\"{text: 'Email'}\"\r\n          [editorOptions]=\"{onValueChanged: onValueESChanged,disabled: disableEmail}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Email {{_translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n          <dxi-validation-rule type=\"pattern\" [pattern]=\"emailPattern\"\r\n            message=\"Email {{_translate.VALIDATION.not_pattern }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n\r\n        <dxi-item dataField=\"mobile\" [editorOptions]=\"{ disabled: isConnectEfyId }\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.phone_number }}\"></dxo-label>\r\n\r\n          <dxi-validation-rule *ngIf=\"!isConnectEfyId\" type=\"pattern\" [pattern]=\"phonePattern\"\r\n            message=\"{{_translate.CONTROLL.LABEL.phone_number }} {{_translate.VALIDATION.not_pattern }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item *ngIf=\"isConnectEfyId\" dataField=\"name\" [editorOptions]=\"{ disabled: true }\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.fullname }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"position\">\r\n          <dxo-label text=\"{{_translate.GRID.USER.position }}\"></dxo-label>\r\n        </dxi-item>\r\n\r\n        <dxi-item dataField=\"department_name\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.department }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"order\" [editorOptions]=\"{ disabled: true }\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.order }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"note\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.note' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item *ngIf=\"role_branch\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.COMBO.branch_manage }}\"></dxo-label>\r\n          <div>\r\n            <app-dropdown-checkbox #dropdownCheckboxComponent (shareCheckedList)=\"getChecklistBranch($event)\"\r\n              [list]=\"roleBranchStatus\">\r\n            </app-dropdown-checkbox>\r\n          </div>\r\n        </dxi-item>\r\n        <dxi-item [label]=\"{text: ' '}\" dataField=\"status\" editorType=\"dxCheckBox\" [editorOptions]=\"{\r\n          text: _translate.GRID.GENERAL.active}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item *ngIf=\"isConnectEfyId\">\r\n        <div class=\"slabel\">\r\n          <div class=\"label1\">\r\n            <span>{{lbl.label1}}</span>\r\n            <a class=\"m-bold\" href=\"http://help.ihoadon.vn/huongdanv3/efyid/gioithieu/1/\" target=\"_blank\"\r\n              (click)=\"clickHere()\"> {{ 'CONTROLL.LABEL.click_here' | translate }}</a>\r\n          </div>\r\n          <div class=\"label2\">\r\n            {{lbl.label2}}\r\n          </div>\r\n        </div>\r\n      </dxi-item>\r\n      <dxi-item *ngIf=\"!configs.system_parameter.display_delivery_information\" itemType=\"group\" [colCount]=\"4\">\r\n        <dxo-label text=\"{{_translate.GRID.USER.roles }}\"></dxo-label>\r\n        <!-- [disabled]=\"disablePermissions({code: 'KE_TOAN_VIEN'}, 'roles')\" -->\r\n        <dx-check-box text=\"{{_translate.GRID.USER.accountant }}\" (onValueChanged)=\"ketoanvien($event)\"\r\n          [disabled]=\"disableGroupRoles()\" [(value)]=\"checkKTV\">\r\n        </dx-check-box>\r\n        <!-- [disabled]=\"disablePermissions({code: 'KE_TOAN_TRUONG'}, 'roles')\" -->\r\n        <dx-check-box text=\"{{_translate.GRID.USER.chief_accountant }}\" (onValueChanged)=\"ketoantruong($event)\"\r\n          [disabled]=\"disableGroupRoles()\" [(value)]=\"checkKTT\">\r\n        </dx-check-box>\r\n        <!-- [disabled]=\"disablePermissions({code: 'PHE_DUYET'}, 'roles')\" -->\r\n        <dx-check-box text=\"{{_translate.GRID.USER.approved }}\" (onValueChanged)=\"pheduyet($event)\"\r\n          [disabled]=\"disableGroupRoles()\" [(value)]=\"checkPD\">\r\n        </dx-check-box>\r\n        <!-- [disabled]=\"disablePermissions({code: 'QUAN_TRI_HE_THONG'}, 'roles')\" -->\r\n        <dx-check-box text=\"{{_translate.MENU.system_management }}\" (onValueChanged)=\"quantrihethong($event)\"\r\n          [disabled]=\"disableGroupRoles()\" [(value)]=\"checkQTHT\">\r\n        </dx-check-box>\r\n      </dxi-item>\r\n      <dxi-item *ngIf=\"configs.system_parameter.display_delivery_information\" cssClass=\"permission\">\r\n        <dxo-label text=\"{{_translate.GRID.USER.roles }}\"></dxo-label>\r\n        <dx-drop-down-box [(value)]=\"valuePermission\" valueExpr=\"code\" displayExpr=\"name\" placeholder=\"Select...\"\r\n          [dataSource]=\"listPermissionType\">\r\n          <div *dxTemplate=\"let data of 'content'\">\r\n            <dx-tree-view #permissionbylist [dataSource]=\"listPermissionType\" dataStructure=\"plain\" keyExpr=\"code\"\r\n              selectionMode=\"multiple\" showCheckBoxesMode=\"normal\" [selectNodesRecursive]=\"false\" displayExpr=\"name\"\r\n              [selectByClick]=\"true\" (onSelectionChanged)=\"onPermissionSelectChanged($event)\">\r\n            </dx-tree-view>\r\n          </div>\r\n        </dx-drop-down-box>\r\n      </dxi-item>\r\n    </dx-form>\r\n    <div id=\"config-tabs\">\r\n      <dx-tabs [dataSource]=\"tabs\" [selectedIndex]=\"0\" (onItemClick)=\"selectTab($event)\">\r\n\r\n      </dx-tabs>\r\n    </div>\r\n    <div class=\"content-configs\">\r\n      <!-- Phân quyền hoạt động -->\r\n      <div style=\"width: 100%; height: 300px; overflow-y: scroll;\" class=\"role-box\" *ngIf=\"isConfigAction\">\r\n        <dx-tree-list #listpermis id=\"listpermissions\" [dataSource]=\"listpermissions\" keyExpr=\"id\"\r\n          parentIdExpr=\"parent_id\" [autoExpandAll]=\"true\" [showRowLines]=\"false\" [columnAutoWidth]=\"true\"\r\n          [wordWrapEnabled]=\"true\" [showColumnHeaders]=\"false\" (onSelectionChanged)=\"onItemSelectionChanged($event)\"\r\n          (onCellPrepared)=\"onCellPrepared($event)\" (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n          [(selectedRowKeys)]=\"selectedRowKeys\">\r\n          <dxo-scrolling mode=\"standard\"></dxo-scrolling>\r\n          <dxo-paging [enabled]=\"true\" [pageSize]=\"150\"> </dxo-paging>\r\n          <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[50, 100, 200]\" [showInfo]=\"true\">\r\n          </dxo-pager>\r\n          <dxo-selection mode=\"multiple\" [recursive]=\"recursiveSelectionEnabled\">\r\n          </dxo-selection>\r\n          <dxi-column dataField=\"name\"></dxi-column>\r\n        </dx-tree-list>\r\n      </div>\r\n      <!-- Phân quyền mẫu hóa đơn -->\r\n      <div style=\"width: 100%; height: 300px; overflow-y: scroll;\" class=\"role-box\" *ngIf=\"isConfigTemplate\">\r\n        <dx-radio-group [dataSource]=\"optionsPermissions\" displayExpr=\"name\" valueExpr=\"code\" [(value)]=\"priority\"\r\n          layout=\"vertical\" (onValueChanged)=\"onValueChanged($event)\" style=\"margin-left: 10px;margin-top: 10px;\">\r\n        </dx-radio-group>\r\n        <dx-tree-list #listTempt id=\"listTemplateTBThue\" [dataSource]=\"listTemplateTBThue\" keyExpr=\"id\"\r\n          parentIdExpr=\"parent_id\" [autoExpandAll]=\"true\" [showRowLines]=\"false\" [columnAutoWidth]=\"true\"\r\n          [wordWrapEnabled]=\"true\" [showColumnHeaders]=\"false\" [disabled]=\"disableTemptlate\"\r\n          (onSelectionChanged)=\"onItemSelectionChangedTempt($event)\" [(selectedRowKeys)]=\"selectedRowKeysTempt\"\r\n          (onCellPrepared)=\"onCellPreparedTemplates($event)\" (onEditorPreparing)=\"onEditorPreparingTemplates($event)\">\r\n          <dxo-scrolling mode=\"standard\"></dxo-scrolling>\r\n          <dxo-paging [enabled]=\"true\" [pageSize]=\"150\"> </dxo-paging>\r\n          <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[50, 100, 200]\" [showInfo]=\"true\">\r\n          </dxo-pager>\r\n          <dxo-selection mode=\"multiple\" [recursive]=\"recursiveSelectionEnabledTempt\">\r\n          </dxo-selection>\r\n          <dxi-column dataField=\"name_display\"></dxi-column>\r\n        </dx-tree-list>\r\n      </div>\r\n      <!-- Cấu hình CKS -->\r\n      <div style=\"width: 100%; height: 300px; overflow-y: scroll;padding-left: 25px;padding-top: 15px;\" class=\"role-box\"\r\n        *ngIf=\"isConfigSignatues\">\r\n        <dx-form id=\"configCRM\" [formData]=\"remoteSigns\" validationGroup=\"userData\" [showColonAfterLabel]=\"false\">\r\n          <dxi-item itemType=\"group\">\r\n            <dxi-item dataField=\"is_use_remotesigning\" editorType=\"dxCheckBox\" cssClass=\"is-integrate\"\r\n              [editorOptions]=\"{ text: _translate.CONFIGS.integrated_remote_signing, onValueChanged: onIsRemoteSigning}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item dataField=\"agreement_uuid\" [label]=\"{ text: _translate.CONFIGS.agreement_uuid}\"\r\n              cssClass=\"input-long\" [editorOptions]=\"{disabled: isDisRemoteSigning}\">\r\n              <dxi-validation-rule *ngIf=\"!isDisRemoteSigning\" type=\"required\"\r\n                message=\"{{_translate.CONFIGS.agreement_uuid}} {{_translate.VALIDATION.required}}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass=\"user-password\">\r\n              <dxi-item dataField=\"auth_mode\" editorType=\"dxSelectBox\" [label]=\"{ text: _translate.CONFIGS.auth_mode}\"\r\n                [editorOptions]=\"{items: authMode,displayExpr: 'name', valueExpr: 'code', disabled: isDisRemoteSigning}\">\r\n                <dxi-validation-rule *ngIf=\"!isDisRemoteSigning\" type=\"required\"\r\n                  message=\"{{_translate.CONFIGS.auth_mode}} {{_translate.VALIDATION.required}}\">\r\n                </dxi-validation-rule>\r\n              </dxi-item>\r\n              <dxi-item dataField=\"authorize_code\" [label]=\"{ text: _translate.CONFIGS.authorize_code}\"\r\n                [editorOptions]=\"{mode: 'password', disabled: isDisRemoteSigning}\">\r\n                <dxi-validation-rule *ngIf=\"!isDisRemoteSigning\" type=\"required\"\r\n                  message=\"{{_translate.CONFIGS.authorize_code}} {{_translate.VALIDATION.required}}\">\r\n                </dxi-validation-rule>\r\n              </dxi-item>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n      <!-- Phân quyền Email -->\r\n      <div style=\"width: 100%; height: 300px; overflow-y: scroll;\" class=\"role-box\" *ngIf=\"isConfigEmail\">\r\n        <dx-radio-group [dataSource]=\"optionsEmails\" displayExpr=\"name\" valueExpr=\"code\" [(value)]=\"isReceiveAllEmail\"\r\n          layout=\"vertical\" (onValueChanged)=\"onEmailValueChanged($event)\" style=\"margin-left: 10px;margin-top: 10px;\">\r\n        </dx-radio-group>\r\n        <dx-tree-list #listEmail id=\"listConfigEmail\" [dataSource]=\"listEmailConfigs\" keyExpr=\"id\"\r\n          parentIdExpr=\"parent_id\" [autoExpandAll]=\"true\" [showRowLines]=\"false\" [columnAutoWidth]=\"true\"\r\n          [wordWrapEnabled]=\"true\" [showColumnHeaders]=\"false\" [disabled]=\"disableConfigEmail\"\r\n          (onSelectionChanged)=\"onItemSelectionChangedEmail($event)\" [(selectedRowKeys)]=\"selectedRowKeysEmail\"\r\n          (onCellPrepared)=\"onCellPreparedEmail($event)\" (onEditorPreparing)=\"onEditorPreparingEmail($event)\">\r\n          <dxo-scrolling mode=\"standard\"></dxo-scrolling>\r\n          <dxo-paging [enabled]=\"true\" [pageSize]=\"150\"> </dxo-paging>\r\n          <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[50, 100, 200]\" [showInfo]=\"true\">\r\n          </dxo-pager>\r\n          <dxo-selection mode=\"multiple\" [recursive]=\"recursiveSelectionEnabledEmail\">\r\n          </dxo-selection>\r\n          <dxi-column dataField=\"email\"></dxi-column>\r\n        </dx-tree-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.save }}\" type=\"default\" validationGroup=\"userData\"\r\n      [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" type=\"default\" icon=\"{{_translate.ICONS.come_back }}\"\r\n      (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/users/components/add/add.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/users/components/add/add.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-title{font-size:18px;font-weight:600;text-transform:uppercase}.role-box{margin-top:10px;border:1px solid #d7d7d7}.content-configs{padding:20px 15px 60px 15px;width:100%}::ng-deep .content-configs .dx-item .dx-field-item-label-content{text-align:left}::ng-deep .content-configs .dx-item .dx-texteditor{width:400px}::ng-deep .content-configs #emailConfig .dx-texteditor{width:100%}::ng-deep .content-configs #emailConfig .width-50{width:50%}::ng-deep .content-configs .dx-item .dx-checkbox-text{padding-left:30px}::ng-deep .content-configs .ky-ke-khai .dx-field-item-label-content{width:100px !important}.content-configs .form-footer{float:right;margin-right:50px;padding-top:40px}::ng-deep .content-configs #configCRM .is-integrate{margin-bottom:15px}::ng-deep .content-configs #configCRM .user-password .dx-form-group-content{padding:0;margin:0}::ng-deep .content-configs #configCRM .input-long .dx-texteditor{width:82.2%}::ng-deep .content-configs #configCRM .user-password .dx-texteditor{width:60.3%}.icon-size{font-size:23px !important}#config-tabs{width:75%;border-bottom:1px solid #ddd}#config-tabs .dx-tabs{width:70%;border-bottom:0}.slabel{font-style:italic;margin-left:111px;margin-top:5px}.slabel .label1{margin-bottom:3px}::ng-deep .permission .dx-texteditor{width:28% !important;margin-bottom:10px}:host ::ng-deep #listpermissions .dx-treelist-rowsview .dx-selection.dx-row>td,.dx-treelist-rowsview .dx-selection.dx-row:hover>td,.dx-treelist-rowsview .dx-selection.dx-row>tr>td,.dx-treelist-rowsview .dx-selection.dx-row:hover>tr>td{background-color:transparent;border:none}:host ::ng-deep #listTemplateTBThue .dx-treelist-rowsview .dx-selection.dx-row>td,.dx-treelist-rowsview .dx-selection.dx-row:hover>td,.dx-treelist-rowsview .dx-selection.dx-row>tr>td,.dx-treelist-rowsview .dx-selection.dx-row:hover>tr>td{background-color:transparent;border:none}\n"

/***/ }),

/***/ "./src/app/modules/users/components/add/add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/users/components/add/add.component.ts ***!
  \***************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_users_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/users/shared */ "./src/app/modules/users/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var _shared_components_dropdown_checkbox_dropdown_checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/dropdown-checkbox/dropdown-checkbox.component */ "./src/app/shared/components/dropdown-checkbox/dropdown-checkbox.component.ts");
/* harmony import */ var _modules_auth_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/auth/shared */ "./src/app/modules/auth/shared/index.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _core_library_public_number_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/library/public/number-utils.service */ "./src/app/core/library/public/number-utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AddComponent = /** @class */ (function () {
    function AddComponent(authService, bsModalRef, usersService, modalService, ref, translate, templateService, notifyService, registerService, configsService) {
        var _this = this;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.usersService = usersService;
        this.modalService = modalService;
        this.ref = ref;
        this.translate = translate;
        this.templateService = templateService;
        this.notifyService = notifyService;
        this.registerService = registerService;
        this.configsService = configsService;
        // form validate
        this.user = new _modules_users_shared__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.password = '';
        this.passwordOptions = {
            mode: 'password',
            value: this.password
        };
        this.namePattern = /^[^0-9]+$/;
        this.passwordPattern = /^.{6,}$/;
        this.emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        this.userNamePattern = /^[a-zA-Z0-9_]{6,50}$/;
        this.phonePattern = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
        this.isValidate = true;
        this.disUserName = false;
        // treelist
        this.selectedRowKeys = [];
        this.selectedRowKeysTempt = [];
        this.selectedRowKeysEmail = [];
        this.recursiveSelectionEnabled = true;
        this.recursiveSelectionEnabledTempt = true;
        this.recursiveSelectionEnabledEmail = true;
        this.disableTemptlate = true;
        this.disableConfigEmail = true;
        this.remote_signing_info_default = "{\"is_use_remotesigning\":false ,\"agreement_uuid\":\"\",\"auth_mode\":\"\",\"authorize_code\":\"\"}";
        this.roleGroups = {
            KE_TOAN_VIEN: false,
            KE_TOAN_TRUONG: false,
            PHE_DUYET: false,
            QUAN_TRI_HE_THONG: false
        };
        this.checkKTV = false;
        this.checkKTT = false;
        this.checkPD = false;
        this.checkQTHT = false;
        this.isConfigAction = true;
        this.isConfigSignatues = false;
        this.isConfigTemplate = false;
        this.isConfigEmail = false;
        this.listTemplateTBThue = [];
        this.tabs = [];
        this.role_branch = false;
        this.lbl = {};
        this.isConnectEfyId = false;
        this.isUserConverted = false;
        this.disableEmail = false;
        this.dataListPermission = [];
        this.listPermissionType = [];
        this.isDisRemoteSigning = true;
        this.authMode = [];
        this.passwordComparison = function () {
            return _this.form.instance.option('formData').password;
        };
        this.listEmailConfigs = [];
        this.onValueESChanged = function (e) {
            if (_this.isConnectEfyId)
                _this.checkUserEfyId(e.value);
        };
        /* Check remoteSigning */
        this.onIsRemoteSigning = function (e) {
            if (e.value) {
                _this.isDisRemoteSigning = false;
            }
            else {
                _this.isDisRemoteSigning = true;
            }
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.tabs = _core_index__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"]._tabPermissionUser(this._translate);
        this.textTabs = this.tabs[0].code;
        this.optionsPermissions = [];
        this.optionsEmails = [
            { name: 'Nhận thư từ tất cả các email', code: '1' },
            { name: 'Nhận thư từ email', code: '0' }
        ];
        this.authMode = [
            {
                'code': 'EXPLICIT/PIN',
                'name': 'EXPLICIT/PIN',
            },
            {
                'code': 'EXPLICIT/OTP-SMS',
                'name': 'EXPLICIT/OTP-SMS',
            },
            {
                'code': 'EXPLICIT/OTP-EMAIL',
                'name': 'EXPLICIT/OTP-EMAIL',
            },
        ];
    }
    AddComponent.prototype.ngOnInit = function () {
        // this.getPermissions();
        this.currentUser = this.authService.getCurrentUser();
        this.configs = this.authService.getConfigs();
        if (this.currentUser && this.currentUser.account) {
            if (this.currentUser.account.connect_efy_id == "1")
                this.isConnectEfyId = true;
        }
        this.getUser();
        if (this.id) {
            this.isValidate = false;
            this.disUserName = true;
            if (this.configs.system_parameter.enable_modify_username)
                this.disUserName = false;
        }
        this.showTextValidPass = this._translate.VALIDATION.than6;
        if (this.configs.system_parameter.is_regex_pass) {
            this.passwordPattern = /^(?=.*[!@#$%^&*-])(?=(.*[0-9]){2,})(?=.*[A-Z])(?=.*[a-z]).{8,20}$/;
            this.showTextValidPass = this._translate.CONTROLL.LABEL.regex_password;
        }
        this.lbl = {
            label1: this._translate.CONTROLL.LABEL.user_will_use_efy_id_login + ' ' + this._translate.CONTROLL.LABEL.learn_more_about_efy_id,
            label2: this._translate.CONTROLL.LABEL.system_auto_email,
        };
    };
    AddComponent.prototype.getUser = function () {
        var _this = this;
        if (this.id) {
            this.usersService.getPermissions().subscribe(function (response) {
                _this.listpermissions = response.data.permissions;
                if (_this.configs.system_parameter.display_delivery_information) {
                    _this.permissionByListType.forEach(function (item) {
                        if (item.note) {
                            var lstRole_1 = item.note.split(',');
                            _this.listpermissions.forEach(function (permission) {
                                if (lstRole_1.includes(permission.code) && !permission.roles.includes(item.code))
                                    permission.roles.push(item.code);
                            });
                        }
                        var obj = {
                            id: item.id,
                            code: item.code,
                            name: item.name,
                            selected: false
                        };
                        _this.listPermissionType.push(obj);
                    });
                }
                // this.getUser();
                _this.usersService.getUser(_this.id).subscribe(function (response1) {
                    _this.user = response1.data.user;
                    _this.priority = _this.user.is_use_all_template ? '1' : '0';
                    _this.disableTemptlate = _this.user.is_use_all_template;
                    _this.disableRadioTemplates();
                    _this.disableRadioEmail();
                    _this.user.status = _core_library_public_number_utils_service__WEBPACK_IMPORTED_MODULE_12__["NumberUtilsService"]._attemptConvertBool(_this.user.status);
                    if (_this.user.roles) {
                        if (_this.configs.system_parameter.display_delivery_information) {
                            var roles_1 = _this.user.roles.split(',');
                            _this.valuePermission = roles_1;
                            _this.listPermissionType.forEach(function (item) {
                                if (roles_1.includes(item.code))
                                    item.selected = true;
                            });
                        }
                        else {
                            var roles = _this.user.roles.split(',');
                            _this.checkKTV = roles.includes('KE_TOAN_VIEN');
                            _this.checkKTT = roles.includes('KE_TOAN_TRUONG');
                            _this.checkPD = roles.includes('PHE_DUYET');
                            _this.checkQTHT = roles.includes('QUAN_TRI_HE_THONG');
                        }
                    }
                    if (_this.isConnectEfyId)
                        _this.disableEmail = true;
                    if (_this.user.permissions) {
                        var permissions_1 = _this.user.permissions.split(',');
                        _this.listpermissions.forEach(function (item) {
                            if (permissions_1.includes(item.code) && !_this.treeList.instance.isRowSelected(item.id)) {
                                _this.selectedRowKeys.push(item.id);
                            }
                        });
                    }
                    if (_this.user.remote_signing_info) {
                        _this.remoteSigns = JSON.parse(_this.user.remote_signing_info);
                        _this.isDisRemoteSigning = !_this.remoteSigns.is_use_remotesigning;
                    }
                    else
                        _this.remoteSigns = JSON.parse(_this.remote_signing_info_default);
                    _this.templateService.getAll1().subscribe(function (rs) {
                        _this.listTemplate = rs.data.templates;
                        if (_this.listTemplate && _this.listTemplate.length > 0) {
                            _this.listTemplateTBThue = [];
                            var listTemptTT78 = _this.listTemplate.filter(function (p) { return p.is_decree_new || p.template_code == "CTT56"; });
                            if (listTemptTT78 && listTemptTT78.length > 0)
                                _this.listTemplateTBThue = listTemptTT78;
                            _this.notifyService.getAll1().subscribe(function (result) {
                                var data = result.data;
                                var listRelease = result.data.invoice_releases;
                                if (listRelease && listRelease.length > 0) {
                                    var listReleaseTBThue = listRelease.filter(function (p) { return p.release_status === 'DA_TB_THUE' || p.release_status === 'CHUA_TB_THUE' || p.release_status === 'DA_HUY_SO'; });
                                    if (listReleaseTBThue && listReleaseTBThue.length > 0) {
                                        listReleaseTBThue.forEach(function (release) {
                                            _this.listTemplate.forEach(function (template) {
                                                if (template.id === release.template_id) {
                                                    var _obj = _this.listTemplateTBThue.filter(function (p) { return p.id === template.id; })[0];
                                                    if (!_obj) {
                                                        _this.listTemplateTBThue.push(template);
                                                    }
                                                }
                                            });
                                        });
                                    }
                                }
                                _this.listTemplateTBThue.forEach(function (item) {
                                    item.name_display = item.template_code + ' - ' + item.invoice_series;
                                });
                                if (_this.user.template_ids) {
                                    var templates_1 = _this.user.template_ids.split(',');
                                    if (_this.listTemplateTBThue && _this.listTemplateTBThue.length > 0) {
                                        _this.listTemplateTBThue.forEach(function (item) {
                                            if (templates_1.includes(item.id)) {
                                                _this.selectedRowKeysTempt.push(item.id);
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    }, function (err) {
                    }, function () {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                    });
                    /* Lấy danh sách email hóa đơn đầu vào */
                    _this.configsService.getAllEmails().subscribe(function (rs) {
                        if (rs.status == "success") {
                            _this.listEmailConfigs = rs.data.config_mails;
                            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.user.permission_mails) != "") {
                                _this.disableConfigEmail = false;
                                _this.isReceiveAllEmail = '0';
                                var emails_1 = _this.user.permission_mails.split(',');
                                if (_this.listEmailConfigs && _this.listEmailConfigs.length > 0) {
                                    _this.listEmailConfigs.forEach(function (item) {
                                        if (emails_1.includes(item.email)) {
                                            _this.selectedRowKeysEmail.push(item.id);
                                        }
                                    });
                                }
                            }
                            else {
                                _this.isReceiveAllEmail = '1';
                                _this.disableConfigEmail = true;
                            }
                        }
                    }, function (err) {
                    }, function () {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                    });
                    if (_this.role_branch) {
                        if (_this.user.role_branch) {
                            var role_branch_1 = _this.user.role_branch.split(';');
                            if (role_branch_1.indexOf('TAT_CA') !== -1) {
                                _this.roleBranchStatus.forEach(function (item) {
                                    item.checked = true;
                                });
                            }
                            else {
                                _this.roleBranchStatus.forEach(function (item) {
                                    if (role_branch_1.indexOf(item.code) !== -1) {
                                        item.checked = true;
                                    }
                                });
                            }
                            _this.dropdownCheckboxComponent.ngOnInit();
                        }
                    }
                });
            });
        }
        else {
            this.remoteSigns = JSON.parse(this.remote_signing_info_default);
            this.usersService.getPermissions().subscribe(function (response) {
                _this.listpermissions = response.data.permissions;
                if (_this.configs.system_parameter.display_delivery_information) {
                    _this.permissionByListType.forEach(function (item) {
                        var lstRole = item.note.split(',');
                        _this.listpermissions.forEach(function (permission) {
                            if (lstRole.includes(permission.code) && !permission.roles.includes(item.code))
                                permission.roles.push(item.code);
                        });
                        var obj = {
                            id: item.id,
                            code: item.code,
                            name: item.name,
                            selected: false
                        };
                        _this.listPermissionType.push(obj);
                    });
                }
            });
            this.templateService.getAll1().subscribe(function (rs) {
                _this.listTemplate = rs.data.templates;
                if (_this.listTemplate && _this.listTemplate.length > 0) {
                    _this.listTemplateTBThue = [];
                    var listTemptTT78 = _this.listTemplate.filter(function (p) { return p.is_decree_new || p.template_code == "CTT56"; });
                    if (listTemptTT78 && listTemptTT78.length > 0)
                        _this.listTemplateTBThue = listTemptTT78;
                    _this.notifyService.getAll1().subscribe(function (result) {
                        var data = result.data;
                        var listRelease = result.data.invoice_releases;
                        if (listRelease && listRelease.length > 0) {
                            var listReleaseTBThue = listRelease.filter(function (p) { return p.release_status === 'DA_TB_THUE' || p.release_status === 'CHUA_TB_THUE' || p.release_status === 'DA_HUY_SO'; });
                            if (listReleaseTBThue && listReleaseTBThue.length > 0) {
                                listReleaseTBThue.forEach(function (release) {
                                    _this.listTemplate.forEach(function (template) {
                                        if (template.id === release.template_id) {
                                            var _obj = _this.listTemplateTBThue.filter(function (p) { return p.id === template.id; })[0];
                                            if (!_obj) {
                                                _this.listTemplateTBThue.push(template);
                                            }
                                        }
                                    });
                                });
                            }
                        }
                        if (_this.listTemplateTBThue && _this.listTemplateTBThue.length > 0) {
                            _this.listTemplateTBThue.forEach(function (item) {
                                item.name_display = item.template_code + ' - ' + item.invoice_series;
                            });
                        }
                    });
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
            /* Lấy danh sách email hóa đơn đầu vào */
            this.configsService.getAllEmails().subscribe(function (rs) {
                if (rs.status == "success") {
                    _this.listEmailConfigs = rs.data.config_mails;
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
            this.user = new _modules_users_shared__WEBPACK_IMPORTED_MODULE_3__["User"]();
            this.user.is_use_all_template = this.currentUser.user.is_use_all_template;
            this.priority = this.user.is_use_all_template ? '1' : '0';
            this.disableTemptlate = this.user.is_use_all_template;
            this.user.permission_mails = this.currentUser.user.permission_mails;
            this.isReceiveAllEmail = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.user.permission_mails) != "" ? '0' : '1';
            this.disableConfigEmail = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.user.permission_mails) != "" ? false : true;
            this.user.order = this.totalCount + 1;
            this.disableRadioTemplates();
            this.disableRadioEmail();
        }
    };
    // xử lý chọn quyền
    AddComponent.prototype.ketoanvien = function (e) {
        if (e.value === true) {
            this.roleGroups.KE_TOAN_VIEN = true;
            if (e.event && e.event.type === 'dxclick') {
                this.selectRoleGroup('KE_TOAN_VIEN');
            }
        }
        else {
            this.roleGroups.KE_TOAN_VIEN = false;
            this.unselectRoleGroup('KE_TOAN_VIEN');
        }
    };
    AddComponent.prototype.ketoantruong = function (e) {
        if (e.value === true) {
            this.roleGroups.KE_TOAN_TRUONG = true;
            if (e.event && e.event.type === 'dxclick') {
                this.selectRoleGroup('KE_TOAN_TRUONG');
            }
        }
        else {
            this.roleGroups.KE_TOAN_TRUONG = false;
            this.unselectRoleGroup('KE_TOAN_TRUONG');
        }
    };
    AddComponent.prototype.getSelectedItemsKeys = function (items) {
        var result = [];
        var that = this;
        items.forEach(function (item) {
            if (item.selected) {
                result.push(item.key);
            }
            if (item.items.length) {
                result = result.concat(that.getSelectedItemsKeys(item.items));
            }
        });
        return result;
    };
    AddComponent.prototype.pheduyet = function (e) {
        if (e.value === true) {
            this.roleGroups.PHE_DUYET = true;
            if (e.event && e.event.type === 'dxclick') {
                this.selectRoleGroup('PHE_DUYET');
            }
        }
        else {
            this.roleGroups.PHE_DUYET = false;
            this.unselectRoleGroup('PHE_DUYET');
        }
    };
    AddComponent.prototype.quantrihethong = function (e) {
        if (e.value === true) {
            this.roleGroups.QUAN_TRI_HE_THONG = true;
            if (e.event && e.event.type === 'dxclick') {
                this.selectRoleGroup('QUAN_TRI_HE_THONG');
            }
        }
        else {
            this.roleGroups.QUAN_TRI_HE_THONG = false;
            this.unselectRoleGroup('QUAN_TRI_HE_THONG');
        }
    };
    AddComponent.prototype.selectRoleGroup = function (roleName) {
        var _this = this;
        this.listpermissions.forEach(function (item) {
            if (item.roles.includes(roleName) && !_this.treeList.instance.isRowSelected(item.id)) {
                if (!_this.disablePermissions(item, "permissions"))
                    _this.treeList.instance.selectRows(item.id, false);
            }
        });
    };
    AddComponent.prototype.unselectRoleGroup = function (roleName) {
        var _this = this;
        var permissions = [];
        this.listpermissions.forEach(function (item) {
            if (!_this.disablePermissions(item, "permissions") && item.roles.includes(roleName)) {
                permissions.push(item.id);
            }
        });
        this.treeList.instance.deselectRows(permissions);
    };
    AddComponent.prototype.getAllSelectedRowKeys = function () {
        var _this = this;
        if (this.treeList) {
            var _permissions_1 = [];
            this.treeList.instance.getSelectedRowKeys('all').forEach(function (element) {
                var _obj = _this.listpermissions.filter(function (p) { return p.id == element; })[0];
                if (_obj) {
                    _permissions_1.push(_obj);
                }
            });
            this.user.permissions = _permissions_1.map(function (p) { return p.code; }).join(',');
        }
        if (this.treeListTempt) {
            var _templates_1 = [];
            this.treeListTempt.instance.getSelectedRowKeys('all').forEach(function (element) {
                var _obj = _this.listTemplateTBThue.filter(function (p) { return p.id == element; })[0];
                if (_obj) {
                    _templates_1.push(_obj);
                }
            });
            this.user.template_ids = _templates_1.map(function (p) { return p.id; }).join(',');
        }
    };
    // xử lý submit
    AddComponent.prototype.onSubmit = function (e) {
        var _this = this;
        this.getAllSelectedRowKeys();
        if (!this.configs.system_parameter.display_delivery_information && !this.checkKTV && !this.checkKTT && !this.checkPD && !this.checkQTHT) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.TEXT.nhom_quyen_k_de_trong, 'error');
            return;
        }
        if (!this.user.is_use_all_template && _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.user.template_ids) === '') {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.you_must_delegate_at_least_one_invoice_template, 'error');
            return;
        }
        if (this.isReceiveAllEmail == "0" && _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.user.permission_mails) === '') {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.you_must_delegate_at_least_one_email_invoice_buy, 'error');
            return;
        }
        if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.user.permissions) === '') {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.you_must_delegate_at_least_one_permission, 'error');
            return;
        }
        if (this.remoteSigns && this.remoteSigns.is_use_remotesigning) {
            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.remoteSigns.agreement_uuid) == '') {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.CONFIGS.agreement_uuid + " " + this._translate.VALIDATION.required, 'error');
                return;
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.remoteSigns.auth_mode) == '') {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.CONFIGS.auth_mode + " " + this._translate.VALIDATION.required, 'error');
                return;
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.remoteSigns.authorize_code) == '') {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.CONFIGS.authorize_code + " " + this._translate.VALIDATION.required, 'error');
                return;
            }
        }
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        this.user.roles = '';
        if (this.configs.system_parameter.display_delivery_information) {
            if (this.valuePermission && this.valuePermission.length > 0) {
                this.valuePermission.forEach(function (item) {
                    _this.user.roles += item + ',';
                });
            }
            else
                this.user.roles = "";
        }
        else {
            for (var roleName in this.roleGroups) {
                if (this.roleGroups[roleName] === true) {
                    this.user.roles += roleName + ',';
                }
            }
        }
        this.user.roles = this.user.roles.slice(0, -1);
        //console.log(this.selectedRowKeys);
        //console.log(this.user.roles);
        this.user.remote_signing_info = JSON.stringify(this.remoteSigns);
        if (!this.user.id) {
            if (this.isConnectEfyId) {
                this.user.username = this.user.email;
                var userClone = JSON.parse(JSON.stringify(this.user));
                userClone.status = this.user.status ? "HOAT_DONG" : "KHONG_HOAT_DONG";
                var data = { user: userClone };
                this.usersService.addEfyId(data).subscribe(function (response) {
                    if (response.status === 'success') {
                        _this.bsModalRef.content.successSaveItem = 'Success';
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.add_success, 'success');
                        _this.bsModalRef.hide();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(response.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                });
            }
            else {
                var userClone = JSON.parse(JSON.stringify(this.user));
                userClone.status = this.user.status ? "HOAT_DONG" : "KHONG_HOAT_DONG";
                var data = {
                    user: userClone
                };
                this.usersService.add(data).subscribe(function (response) {
                    if (response.status === 'success') {
                        _this.bsModalRef.content.successSaveItem = 'Success';
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.add_success, 'success');
                        _this.bsModalRef.hide();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(response.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                });
            }
        }
        else {
            var dataEdit_1 = null;
            var userClone = JSON.parse(JSON.stringify(this.user));
            userClone.status = this.user.status ? "HOAT_DONG" : "KHONG_HOAT_DONG";
            var id_1 = this.user.id;
            if (this.user.hasOwnProperty('password')) {
                dataEdit_1 = { user: userClone };
            }
            else {
                this.user.password = null;
                userClone.password = null;
                dataEdit_1 = { user: userClone };
            }
            if (this.isConnectEfyId) {
                this.usersService.editEfyId(dataEdit_1, id_1).subscribe(function (response) {
                    if (response.status === 'success') {
                        _this.bsModalRef.content.successSaveItem = 'Success';
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                        var currentUser = _this.authService.getCurrentUser();
                        if (currentUser.user.id === id_1) {
                            currentUser.user = dataEdit_1.user;
                            _this.authService.setCurentAuth(currentUser);
                        }
                        _this.bsModalRef.hide();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(response.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                });
            }
            else {
                this.usersService.edit(dataEdit_1, id_1).subscribe(function (response) {
                    if (response.status === 'success') {
                        _this.bsModalRef.content.successSaveItem = 'Success';
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                        var currentUser = _this.authService.getCurrentUser();
                        if (currentUser.user.id === id_1) {
                            currentUser.user = dataEdit_1.user;
                            _this.authService.setCurentAuth(currentUser);
                        }
                        _this.bsModalRef.hide();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(response.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                });
            }
        }
        e.preventDefault();
    };
    ;
    AddComponent.prototype.selectTab = function (e) {
        var _this = this;
        var tab = e.itemData.code;
        this.getAllSelectedRowKeys();
        switch (tab) {
            case 'PHAN_QUYEN_HOAT_DONG':
                this.selectedRowKeys = [];
                this.textTabs = tab;
                this.isConfigAction = true;
                this.isConfigTemplate = false;
                this.isConfigSignatues = false;
                this.isConfigEmail = false;
                if (this.user.permissions) {
                    var permissions_2 = this.user.permissions.split(',');
                    this.listpermissions.forEach(function (item) {
                        if (permissions_2.includes(item.code)) {
                            _this.selectedRowKeys.push(item.id);
                        }
                    });
                }
                break;
            case 'PHAN_QUYEN_MAU_HOA_DON':
                this.textTabs = tab;
                this.isConfigTemplate = true;
                this.isConfigAction = false;
                this.isConfigSignatues = false;
                this.isConfigEmail = false;
                // if (this.user.template_ids && this.priority === '0') {
                //   const templates = this.user.template_ids.split(',');
                //   if (Array.isArray(this.listTemplateTBThue) && this.listTemplateTBThue.length > 0) {
                //     this.listTemplateTBThue.forEach(item => {
                //       if (templates.includes(item.id)) {
                //         this.selectedRowKeysTempt.push(item.id);
                //       }
                //     });
                //   }
                // }
                break;
            case 'CAU_HINH_CHU_KY_SO':
                this.textTabs = tab;
                this.isConfigSignatues = true;
                this.isConfigTemplate = false;
                this.isConfigAction = false;
                this.isConfigEmail = false;
                break;
            case 'EMAIL_NHAN_HOA_DON':
                this.textTabs = tab;
                this.isConfigEmail = true;
                this.isConfigTemplate = false;
                this.isConfigAction = false;
                this.isConfigSignatues = false;
                // if (VStringService._getValueToString(this.user.permission_mails)!=""  && this.isReceiveAllEmail === '0') {
                //   const emails = this.user.permission_mails.split(',');
                //   if (Array.isArray(this.listEmailConfigs) && this.listEmailConfigs.length > 0) {
                //     this.listEmailConfigs.forEach(item => {
                //       if (emails.includes(item.email)) {
                //         this.selectedRowKeysEmail.push(item.id);
                //       }
                //     });
                //   }
                // }
                break;
            default:
                break;
        }
    };
    AddComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            if (this.disablePermissions(e.row.data, "permissions")) {
                //e.cellElement.style.background = "#FF0000";
                // e.cellElement.style.background = "#F1F1F1";
                // e.cellElement.style.color = "#C2C2C2";
                e.cellElement.style.opacity = "0.7";
            }
        }
    };
    AddComponent.prototype.onEditorPreparing = function (e) {
        if (e.parentType == 'dataRow') {
            e.editorOptions.disabled = this.disablePermissions(e.row.data, "permissions");
        }
    };
    AddComponent.prototype.onCellPreparedTemplates = function (e) {
        if (e.rowType == "data") {
            if (this.disableTemplates(e.row.data)) {
                e.cellElement.style.opacity = "0.7";
            }
        }
    };
    AddComponent.prototype.onEditorPreparingTemplates = function (e) {
        //console.log(e.row.data);
        if (e.parentType == 'dataRow') {
            e.editorOptions.disabled = this.disableTemplates(e.row.data);
        }
    };
    AddComponent.prototype.disableGroupRoles = function () {
        if (this.isConfigAction) {
            var user = this.currentUser.user;
            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(user.username).toLowerCase() == "superadmin"
                || user.is_super_admin == true) {
                return false;
            }
            else {
                if (this.id == user.id) {
                    return true;
                }
                else
                    return false;
            }
        }
        else {
            return true;
        }
    };
    AddComponent.prototype.disablePermissions = function (data, type) {
        var user = this.currentUser.user;
        var field = "code";
        if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(user.username).toLowerCase() == "superadmin"
            || user.is_super_admin == true) {
            return false;
        }
        else {
            if (this.id) {
                if (this.id == user.id) {
                    return true;
                }
                else {
                    if (user[type]) {
                        var listPermissionsUserCurent = user[type].split(',');
                        if (data && listPermissionsUserCurent.includes(data[field])) {
                            return false;
                        }
                        else
                            return true;
                    }
                    else
                        return true;
                }
            }
            else {
                if (user[type]) {
                    var listPermissionsUserCurent = user[type].split(',');
                    if (data && listPermissionsUserCurent.includes(data[field])) {
                        return false;
                    }
                    else
                        return true;
                }
                else
                    return true;
            }
        }
    };
    AddComponent.prototype.disableRadioTemplates = function () {
        if (this.currentUser) {
            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.currentUser.user.username).toLowerCase() == "superadmin"
                || this.currentUser.user.is_super_admin == true) {
                this.optionsPermissions = [
                    { name: this._translate.TEXT.su_dung_tat_ca_mau_hd, code: '1', disabled: false },
                    { name: this._translate.TEXT.theo_tung_mau_hd, code: '0', disabled: false }
                ];
            }
            else {
                if (this.currentUser.user.id == this.id) {
                    this.optionsPermissions = [
                        { name: this._translate.TEXT.su_dung_tat_ca_mau_hd, code: '1', disabled: true },
                        { name: this._translate.TEXT.theo_tung_mau_hd, code: '0', disabled: true }
                    ];
                }
                else {
                    //Trường hợp User A được phân quyền "Được sử dụng tất cả mẫu hóa đơn" thì khi sửa quyền user khác sẽ enable cả 2 quyền "Được sử dụng tất cả mẫu hóa đơn" và "Theo từng mẫu hóa đơn"
                    if (this.currentUser.user.is_use_all_template == true) {
                        this.optionsPermissions = [
                            { name: this._translate.TEXT.su_dung_tat_ca_mau_hd, code: '1', disabled: false },
                            { name: this._translate.TEXT.theo_tung_mau_hd, code: '0', disabled: false }
                        ];
                    }
                    else {
                        //+ Nếu User B đang được phân quyền "Được sử dụng tất cả mẫu hóa đơn" thì disable cả 2 quyền này
                        if (this.user.is_use_all_template) {
                            this.optionsPermissions = [
                                { name: this._translate.TEXT.su_dung_tat_ca_mau_hd, code: '1', disabled: true },
                                { name: this._translate.TEXT.theo_tung_mau_hd, code: '0', disabled: true }
                            ];
                        }
                        else
                            this.optionsPermissions = [
                                { name: this._translate.TEXT.su_dung_tat_ca_mau_hd, code: '1', disabled: true },
                                { name: this._translate.TEXT.theo_tung_mau_hd, code: '0', disabled: false }
                            ];
                    }
                }
            }
        }
    };
    AddComponent.prototype.disableTemplates = function (data) {
        var user = this.currentUser.user;
        if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(user.username).toLowerCase() == "superadmin"
            || user.is_super_admin == true || user.is_use_all_template == true) {
            return false;
        }
        else {
            if (this.id) {
                if (this.id == user.id) {
                    return true;
                }
                else {
                    if (user.template_ids) {
                        var listTemplatesUserCurent = user.template_ids.split(',');
                        if (data && listTemplatesUserCurent.includes(data.id)) {
                            return false;
                        }
                        else
                            return true;
                    }
                    else
                        return true;
                }
            }
            else {
                if (user.template_ids) {
                    var listTemplatesUserCurent = user.template_ids.split(',');
                    if (data && listTemplatesUserCurent.includes(data.id)) {
                        return false;
                    }
                    else
                        return true;
                }
                else
                    return true;
            }
        }
    };
    AddComponent.prototype.disableRadioEmail = function () {
        if (this.currentUser) {
            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.currentUser.user.username).toLowerCase() == "superadmin"
                || this.currentUser.user.is_super_admin == true) {
                this.optionsEmails = [
                    { name: this._translate.TEXT.nhan_thu_tu_tat_ca_email, code: '1', disabled: false },
                    { name: this._translate.TEXT.nhan_thu_tu_email, code: '0', disabled: false }
                ];
            }
            else {
                if (this.currentUser.user.id == this.id) {
                    this.optionsEmails = [
                        { name: this._translate.TEXT.nhan_thu_tu_tat_ca_email, code: '1', disabled: true },
                        { name: this._translate.TEXT.nhan_thu_tu_email, code: '0', disabled: true }
                    ];
                }
                else {
                    //Trường hợp User A được phân quyền "Nhận thư từ tất cả các email" thì khi sửa quyền user khác sẽ enable cả 2 quyền "Nhận thư từ tất cả các email" và "Nhận thư từ email"
                    if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.currentUser.user.permission_mails) == "") {
                        this.optionsEmails = [
                            { name: this._translate.TEXT.nhan_thu_tu_tat_ca_email, code: '1', disabled: false },
                            { name: this._translate.TEXT.nhan_thu_tu_email, code: '0', disabled: false }
                        ];
                    }
                    else {
                        //+ Nếu User B đang được phân quyền "Nhận thư từ tất cả các email" thì disable cả 2 quyền này
                        if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.user.permission_mails) == "") {
                            this.optionsEmails = [
                                { name: this._translate.TEXT.nhan_thu_tu_tat_ca_email, code: '1', disabled: true },
                                { name: this._translate.TEXT.nhan_thu_tu_email, code: '0', disabled: true }
                            ];
                        }
                        else
                            this.optionsEmails = [
                                { name: this._translate.TEXT.nhan_thu_tu_tat_ca_email, code: '1', disabled: true },
                                { name: this._translate.TEXT.nhan_thu_tu_email, code: '0', disabled: false }
                            ];
                    }
                }
            }
        }
    };
    AddComponent.prototype.disableEmailItem = function (data) {
        var user = this.currentUser.user;
        if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(user.username).toLowerCase() == "superadmin"
            || user.is_super_admin == true || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(user.permission_mails) == "") {
            return false;
        }
        else {
            if (this.id) {
                if (this.id == user.id) {
                    return true;
                }
                else {
                    if (user.permission_mails) {
                        var listTemplatesUserCurent = user.permission_mails.split(',');
                        if (data && listTemplatesUserCurent.includes(data.email)) {
                            return false;
                        }
                        else
                            return true;
                    }
                    else
                        return true;
                }
            }
            else {
                if (user.permission_mails) {
                    var listTemplatesUserCurent = user.permission_mails.split(',');
                    if (data && listTemplatesUserCurent.includes(data.email)) {
                        return false;
                    }
                    else
                        return true;
                }
                else
                    return true;
            }
        }
    };
    AddComponent.prototype.onCellPreparedEmail = function (e) {
        if (e.rowType == "data") {
            if (this.disableEmailItem(e.row.data)) {
                //e.cellElement.style.background = "#FF0000";
                // e.cellElement.style.background = "#F1F1F1";
                // e.cellElement.style.color = "#C2C2C2";
                e.cellElement.style.opacity = "0.7";
            }
        }
    };
    AddComponent.prototype.onEditorPreparingEmail = function (e) {
        if (e.parentType == 'dataRow') {
            e.editorOptions.disabled = this.disableEmailItem(e.row.data);
        }
    };
    AddComponent.prototype.onItemSelectionChanged = function (e) {
        if (this.textTabs === 'PHAN_QUYEN_HOAT_DONG') {
        }
    };
    AddComponent.prototype.onItemSelectionChangedTempt = function (e) {
        var _this = this;
        if (this.textTabs === 'PHAN_QUYEN_MAU_HOA_DON') {
            this.user.template_ids = '';
            var selectedKeyTemplate = this.treeListTempt.instance.getSelectedRowKeys('all');
            var _loop_1 = function (idtempt) {
                this_1.listTemplateTBThue.forEach(function (item) {
                    if (item.id === idtempt) {
                        _this.user.template_ids += item.id + ',';
                    }
                });
            };
            var this_1 = this;
            for (var _i = 0, selectedKeyTemplate_1 = selectedKeyTemplate; _i < selectedKeyTemplate_1.length; _i++) {
                var idtempt = selectedKeyTemplate_1[_i];
                _loop_1(idtempt);
            }
            this.user.template_ids = this.user.template_ids.slice(0, -1);
        }
    };
    AddComponent.prototype.onValueChanged = function (e) {
        if (e.value === '1') {
            this.disableTemptlate = true;
            this.user.is_use_all_template = true;
        }
        else {
            this.disableTemptlate = false;
            this.user.is_use_all_template = false;
        }
    };
    AddComponent.prototype.getChecklistBranch = function ($event) {
        if ($event.length > 0) {
            if ($event.indexOf('TAT_CA') !== -1) {
                var value = $event.filter(function (item) {
                    return item === 'TAT_CA';
                });
                this.user.role_branch = value.toString();
            }
            else {
                this.user.role_branch = $event.toString().replace(/,/g, ';');
            }
        }
        else {
            this.user.role_branch = null;
        }
    };
    AddComponent.prototype.checkUserEfyId = function (username) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        this.registerService.checkUserUseEfyId(username).subscribe(function (res) {
            if (res.status === 'success') {
                if (res.data.user) {
                    _this.user.name = res.data.user.name;
                    _this.user.mobile = res.data.user.mobile;
                    _this.user.email = res.data.user.email;
                }
            }
            else {
                _this.user.name = "";
                _this.user.mobile = "";
                // Library.notify(res.message, 'error');
            }
        }, function (error) { return _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(error, 'error'); }, function () { return _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading(); });
    };
    AddComponent.prototype.onPermissionSelectChanged = function (e) {
        var _this = this;
        var nodes = e.component.getNodes();
        var uncheckPermission = nodes.filter(function (p) { return !p.selected; });
        var checkPermission = nodes.filter(function (p) { return p.selected; });
        uncheckPermission.forEach(function (item) {
            _this.unselectRoleGroup(item.key);
        });
        checkPermission.forEach(function (item) {
            _this.selectRoleGroup(item.key);
        });
        this.valuePermission = this.getSelectedItemsKeys(nodes);
    };
    AddComponent.prototype.onEmailValueChanged = function (e) {
        if (e.value === '1') {
            this.disableConfigEmail = true;
            this.selectedRowKeysEmail = [];
            this.user.permission_mails = '';
        }
        else {
            this.disableConfigEmail = false;
        }
    };
    AddComponent.prototype.onItemSelectionChangedEmail = function (e) {
        var _this = this;
        if (this.textTabs === 'EMAIL_NHAN_HOA_DON') {
            this.user.permission_mails = '';
            var selectedKeyEmail = this.treeListEmail.instance.getSelectedRowKeys('all');
            var _loop_2 = function (idtempt) {
                this_2.listEmailConfigs.forEach(function (item) {
                    if (item.id === idtempt) {
                        _this.user.permission_mails += item.email + ',';
                    }
                });
            };
            var this_2 = this;
            for (var _i = 0, selectedKeyEmail_1 = selectedKeyEmail; _i < selectedKeyEmail_1.length; _i++) {
                var idtempt = selectedKeyEmail_1[_i];
                _loop_2(idtempt);
            }
            this.user.permission_mails = this.user.permission_mails.slice(0, -1);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"])
    ], AddComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('listpermis'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTreeListComponent"])
    ], AddComponent.prototype, "treeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('listTempt'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTreeListComponent"])
    ], AddComponent.prototype, "treeListTempt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropdownCheckboxComponent'),
        __metadata("design:type", _shared_components_dropdown_checkbox_dropdown_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["DropdownCheckboxComponent"])
    ], AddComponent.prototype, "dropdownCheckboxComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('permissionbylist'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTreeViewComponent"])
    ], AddComponent.prototype, "treeView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('listEmail'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTreeListComponent"])
    ], AddComponent.prototype, "treeListEmail", void 0);
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/modules/users/components/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/modules/users/components/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_users_shared__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_7__["TemplateService"],
            _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_8__["NotifyService"],
            _modules_auth_shared__WEBPACK_IMPORTED_MODULE_10__["RegisterService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_11__["ConfigsService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/components/index/index.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/users/components/index/index.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n  <div class=\"col-md-6\">\r\n    <div *ngIf=\"configs.system_parameter.display_delivery_information\" id=\"config-tabs\">\r\n      <dx-tabs [dataSource]=\"tabs\" [selectedIndex]=\"0\" (onItemClick)=\"selectTab($event)\">\r\n\r\n      </dx-tabs>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"pull-right button-panel\">\r\n      <!-- <dx-button *ngIf=\"isOpenConvertEfyId\" id=\"convert\" (click)=\"convertEfyId()\" icon=\"assets\\img\\icons\\Sua.png\" text=\"{{ 'CONTROLL.BUTTON.convert_login_by_efy_id' | translate }}\" type=\"default\" ></dx-button> -->\r\n      <dx-button *ngIf=\"isOpenConvertEfyId\" id=\"convert\" (click)=\"convertEfyId()\" icon=\"assets\\img\\icons\\Sua.png\"\r\n        text=\"{{ 'CONTROLL.BUTTON.convert_login_by_efy_id' | translate }}\" type=\"default\"></dx-button>\r\n      <dx-button id=\"add\" (click)=\"add()\" icon=\"{{_translate.ICONS.add}}\" text=\"{{ 'CONTROLL.BUTTON.add' | translate }}\"\r\n        type=\"default\"></dx-button>\r\n      <!-- <dx-button id=\"edit\" (click)=\"edit(null)\" icon=\"assets\\img\\icons\\Sua.png\" text=\"{{ 'CONTROLL.BUTTON.edit' | translate }}\" type=\"default\" \r\n                          [disabled]=\"!(selectedRows.length == 1)\"></dx-button>\r\n                        <dx-button id=\"delete\" (click)=\"delete(null)\" icon=\"assets\\img\\icons\\Xoa.png\" text=\"{{ 'CONTROLL.BUTTON.delete' | translate }}\" type=\"default\" \r\n                          [disabled]=\"!(selectedRows.length == 1)\"></dx-button> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Người sử dụng -->\r\n<div *ngIf=\"isUser\">\r\n  <dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSource\" [(selectedRowKeys)]=\"selectedRows\" [showRowLines]=\"true\"\r\n    [noDataText]=\"noDataText\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\" [wordWrapEnabled]=\"true\"\r\n    (onEditorPreparing)=\"onEditorPreparing($event)\">\r\n    <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n    <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n    </dxo-selection>\r\n    <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n\r\n    <dxi-column *ngIf=\"!isConvertEfyId\" dataField=\"username\" caption=\"{{ 'CONTROLL.LABEL.username' | translate }}\"\r\n      alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\" [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n\r\n    <dxi-column cellTemplate=\"name\" dataField=\"name\" caption=\"{{ textFullName }}\" alignment=\"left\"\r\n      headerCellTemplate=\"titleHeaderTemplate\" [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n\r\n    <dxi-column *ngIf=\"isConvertEfyId\" dataField=\"mobile\" caption=\"{{ 'CONTROLL.LABEL.phone_number' | translate }}\"\r\n      alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\" [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n\r\n    <dxi-column *ngIf=\"isConvertEfyId\" dataField=\"email\" caption=\"Email\" alignment=\"left\"\r\n      headerCellTemplate=\"titleHeaderTemplate\" [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n\r\n    <dxi-column dataField=\"position\" caption=\"{{ 'GRID.USER.position' | translate }}\" alignment=\"left\"\r\n      headerCellTemplate=\"titleHeaderTemplate\" [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n\r\n    <dxi-column dataField=\"department_name\" caption=\"{{ 'CONTROLL.LABEL.department' | translate }}\" alignment=\"left\"\r\n      headerCellTemplate=\"titleHeaderTemplate\" [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n    <!-- [calculateCellValue]=\"setRole\" -->\r\n    <dxi-column dataField=\"roles_name\" caption=\"{{ 'GRID.USER.roles' | translate }}\" alignment=\"left\"\r\n      headerCellTemplate=\"titleHeaderTemplate\" [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n\r\n    <dxi-column dataField=\"status\" caption=\"{{ 'GRID.GENERAL.status' | translate }}\" alignment=\"center\" [width]=\"180\"\r\n      headerCellTemplate=\"titleHeaderTemplate\">\r\n      <dxo-lookup [dataSource]=\"statusFilter\" valueExpr=\"value\" displayExpr=\"text\"></dxo-lookup>\r\n    </dxi-column>\r\n    <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\"\r\n      width=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" alignment=\"center\"></dxi-column>\r\n\r\n    <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n      <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'actionIcon'\">\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n        href=\"javascript:void(0)\">\r\n      </a>\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n        href=\"javascript:void(0)\">\r\n      </a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'name'\">\r\n      <p>{{ d.data.name }}</p>\r\n      <p *ngIf=\"!d.data.efy_id_user && isConvertEfyId\" style=\"color: red\">({{_translate.TEXT.chua_ket_noi_efyid}})</p>\r\n    </div>\r\n    <dxo-remote-operations [sorting]=\"true\" [filtering]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n<!-- Nhóm quyền -->\r\n<div *ngIf=\"isPermissions\">\r\n  <dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSourcePermission\" [(selectedRowKeys)]=\"selectedRowsPermission\"\r\n    [showRowLines]=\"true\" [noDataText]=\"noDataText\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\"\r\n    [columnAutoWidth]=\"true\" [wordWrapEnabled]=\"true\">\r\n    <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n    <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n    </dxo-selection>\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n    <dxi-column dataField=\"order\" alignment=\"center\" sortOrder=\"asc\" [visible]=\"false\"></dxi-column>\r\n    <dxi-column dataField=\"code\" caption=\"{{_translate.GRID.GENERAL.code_group_permission}}\" alignment=\"left\"\r\n      headerCellTemplate=\"titleHeaderTemplate\" [filterOperations]=\"['contains', '=']\" [width]=\"250\"></dxi-column>\r\n    <dxi-column dataField=\"name\" caption=\"{{_translate.GRID.GENERAL.name_group_permission}}\" alignment=\"left\"\r\n      headerCellTemplate=\"titleHeaderTemplate\" [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n    <dxi-column dataField=\"status\" caption=\"{{_translate.GRID.GENERAL.status}}\" alignment=\"center\" [width]=\"180\"\r\n      headerCellTemplate=\"titleHeaderTemplate\">\r\n      <dxo-lookup [dataSource]=\"statusFilter\" valueExpr=\"value\" displayExpr=\"text\"></dxo-lookup>\r\n    </dxi-column>\r\n    <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\"\r\n      width=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" alignment=\"center\"></dxi-column>\r\n    <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n      <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'actionIcon'\">\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n        href=\"javascript:void(0)\">\r\n      </a>\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n        href=\"javascript:void(0)\">\r\n      </a>\r\n    </div>\r\n    <dxo-remote-operations [sorting]=\"true\" [filtering]=\"true\" [paging]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/users/components/index/index.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/users/components/index/index.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .notify-modal{max-width:55%}#config-tabs{width:100%;border-bottom:1px solid #ddd}#config-tabs .dx-tabs{width:50%;border-bottom:0}::ng-deep #config-tabs .dx-tab{padding:3px}\n"

/***/ }),

/***/ "./src/app/modules/users/components/index/index.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/users/components/index/index.component.ts ***!
  \*******************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_users_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/users/shared */ "./src/app/modules/users/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add/add.component */ "./src/app/modules/users/components/add/add.component.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var _permission_permission_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../permission/permission.component */ "./src/app/modules/users/components/permission/permission.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};











var IndexComponent = /** @class */ (function () {
    function IndexComponent(authService, usersService, modalService, translate, listService) {
        this.authService = authService;
        this.usersService = usersService;
        this.modalService = modalService;
        this.translate = translate;
        this.listService = listService;
        this.dataSource = {};
        this.dataSourcePermission = {};
        this.selectedRows = [];
        this.selectedRowsPermission = [];
        this.noDataText = 'Chưa có người dùng nào';
        this.isConvertEfyId = false;
        //// Biến để ẩn hiện nút chuyển đổi efy-id
        this.isUserConverted = false;
        this.idLists = 'AEFB016C-23BF-4A5D-AEF9-28C72427551B';
        this.tabs = [];
        this.isUser = true;
        this.isPermissions = false;
        this.isOpenConvertEfyId = false;
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.statusFilter = [{
                text: this._translate.GRID.GENERAL.active,
                value: 'HOAT_DONG'
            }, {
                text: this._translate.GRID.GENERAL.inactive,
                value: 'KHONG_HOAT_DONG'
            }];
        this.tabs = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_9__["VSelectBoxService"].tabUser(this._translate);
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        this.loadList();
        this.getListtypes();
        this.role_branch = this.listService.getDataConfigLocalStorage();
        this.currentUser = this.authService.getCurrentUser();
        this.textFullName = this._translate.MENU.user;
        if (this.currentUser && this.currentUser.account) {
            if (this.currentUser.account.connect_efy_id) {
                this.isConvertEfyId = true;
                this.textFullName = this._translate.CONTROLL.LABEL.fullname;
            }
            else
                this.isOpenConvertEfyId = true;
        }
        // this.listService.getDM().subscribe(value => console.log(value)) ;
    };
    IndexComponent.prototype.loadList = function () {
        this.dataSource.store = this.usersService.getAll();
    };
    IndexComponent.prototype.loadListPermission = function () {
        var params = "filter_groups[0][filters][0][key]=listtype_id&filter_groups[0][filters][0][value]=" + this.listtypeId + "&filter_groups[0][filters][0][operator]=eq";
        this.dataSourcePermission.store = this.listService.getAll(params);
    };
    IndexComponent.prototype.getListRole = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arrList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.getRoles().then(function (value) {
                            if (value.status === 'success') {
                                return value.data.DM_NHOM_QUYEN;
                            }
                            else
                                return [];
                        })];
                    case 1:
                        arrList = _a.sent();
                        return [2 /*return*/, arrList];
                }
            });
        });
    };
    IndexComponent.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, initialState, initialState;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.isUser) return [3 /*break*/, 4];
                        this.listRoleBranchOrigin = [];
                        if (!this.role_branch) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.listService.handleListRoleBranchUser()];
                    case 1:
                        _a.listRoleBranchOrigin = _c.sent();
                        _c.label = 2;
                    case 2:
                        _b = this;
                        return [4 /*yield*/, this.getListRole()];
                    case 3:
                        _b.permissionByListType = _c.sent();
                        initialState = {
                            totalCount: this.dataGrid.instance.totalCount(),
                            role_branch: this.role_branch,
                            roleBranchStatus: this.listRoleBranchOrigin,
                            permissionByListType: this.permissionByListType
                        };
                        this.bsModalRef = this.modalService.show(_add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"], {
                            class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                            keyboard: false
                        });
                        this.modalService.onHide.subscribe(function () {
                            if (_this.bsModalRef.content.successSaveItem) {
                                // this.dataGrid.instance.refresh();
                                _this.dataSource = {};
                                _this.loadList();
                            }
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        initialState = {
                            totalCount: this.dataGrid.instance.totalCount(),
                            listtypeId: this.listtypeId,
                            listtypes: this.listtypes
                        };
                        this.bsModalRef = this.modalService.show(_permission_permission_component__WEBPACK_IMPORTED_MODULE_10__["PermissionComponent"], {
                            class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                            keyboard: false
                        });
                        this.modalService.onHide.subscribe(function () {
                            if (_this.bsModalRef.content.successSaveItem) {
                                //this.dataGrid.instance.refresh();
                                _this.dataSourcePermission = {};
                                _this.loadListPermission();
                            }
                        });
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.getListtypes = function () {
        var _this = this;
        this.listService.getAllListtype().subscribe(function (res) {
            _this.listtypes = res.data.listtypes;
            if (_this.listtypes) {
                var types = _this.listtypes.filter(function (p) { return p.code == "DM_NHOM_QUYEN"; })[0];
                if (types) {
                    _this.listtypeId = types.id;
                    _this.loadListPermission();
                }
            }
        });
    };
    IndexComponent.prototype.edit = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id, _a, _b, initialState, id, initialState;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.isUser) return [3 /*break*/, 6];
                        id = data ? data.id : (this.selectedRows[0].length === 0 ? '' : this.selectedRows[0]);
                        if (!!id) return [3 /*break*/, 1];
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
                        return [2 /*return*/];
                    case 1:
                        if (!this.role_branch) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.listService.handleListRoleBranchUser()];
                    case 2:
                        _a.listRoleBranchOrigin = _c.sent();
                        _c.label = 3;
                    case 3:
                        _b = this;
                        return [4 /*yield*/, this.getListRole()];
                    case 4:
                        _b.permissionByListType = _c.sent();
                        initialState = {
                            id: id,
                            role_branch: this.role_branch,
                            roleBranchStatus: this.listRoleBranchOrigin,
                            permissionByListType: this.permissionByListType
                        };
                        this.bsModalRef = this.modalService.show(_add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"], {
                            class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                            keyboard: false
                        });
                        this.modalService.onHide.subscribe(function () {
                            if (_this.bsModalRef.content.successSaveItem) {
                                _this.dataSource = {};
                                _this.loadList();
                            }
                        });
                        _c.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        id = data ? data.id : (this.selectedRowsPermission[0].length === 0 ? '' : this.selectedRowsPermission[0]);
                        if (!id) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
                            return [2 /*return*/];
                        }
                        else {
                            initialState = {
                                id: id,
                                listtypeId: this.listtypeId,
                                listtypes: this.listtypes
                            };
                            this.bsModalRef = this.modalService.show(_permission_permission_component__WEBPACK_IMPORTED_MODULE_10__["PermissionComponent"], {
                                class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                                keyboard: false
                            });
                            this.modalService.onHide.subscribe(function () {
                                if (_this.bsModalRef.content.successSaveItem) {
                                    _this.dataSourcePermission = {};
                                    _this.loadListPermission();
                                }
                            });
                        }
                        _c.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.delete = function (data) {
        var _this = this;
        /* Người sử dụng */
        if (this.isUser) {
            var id_1 = data ? data.id : (this.selectedRows[0].length == 0 ? '' : this.selectedRows[0]);
            if (!id_1) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
                return;
            }
            else if (!data && this.selectedRows.length > 1) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.select_only_one, 'error');
            }
            else {
                var result = _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
                if (result) {
                    result.then(function (dialogResult) {
                        if (dialogResult) {
                            _this.usersService.delete(id_1).subscribe(function (response) {
                                if (response.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                    _this.dataSource = {};
                                    _this.loadList();
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(response.message, 'error');
                                }
                            });
                        }
                    });
                }
            }
        }
        else {
            var id_2 = data ? data.id : (this.selectedRowsPermission[0].length == 0 ? '' : this.selectedRowsPermission[0]);
            if (!id_2) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
                return;
            }
            else if (!data && this.selectedRows.length > 1) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.select_only_one, 'error');
                return;
            }
            else {
                if (data.code == "KE_TOAN_VIEN" || data.code == "KE_TOAN_TRUONG" || data.code == "PHE_DUYET" || data.code == "QUAN_TRI_HE_THONG") {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_may_not_remove_this_permission, 'error');
                    return;
                }
                var result = _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
                if (result) {
                    result.then(function (dialogResult) {
                        if (dialogResult) {
                            _this.listService.delete(id_2).subscribe(function (response) {
                                if (response.status === "success") {
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                    _this.dataSourcePermission = {};
                                    _this.loadListPermission();
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(response.message, 'error');
                                }
                            });
                        }
                    });
                }
            }
        }
    };
    IndexComponent.prototype.setRole = function (data) {
        var rolesDisplay = '';
        var roles;
        if (data.roles) {
            roles = data.roles.split(',');
            rolesDisplay += roles.includes('KE_TOAN_VIEN') ? 'Kế toán viên, ' : '';
            rolesDisplay += roles.includes('KE_TOAN_TRUONG') ? 'Kế toán trưởng, ' : '';
            rolesDisplay += roles.includes('PHE_DUYET') ? 'Phê duyệt, ' : '';
            rolesDisplay += roles.includes('QUAN_TRI_HE_THONG') ? 'Quản trị hệ thống, ' : '';
        }
        rolesDisplay = rolesDisplay.slice(0, -2);
        return rolesDisplay;
    };
    IndexComponent.prototype.convertEfyId = function () {
        var _this = this;
        this.bsModalSignRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_8__["NotifyEfyComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'notify-modal',
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            if (_this.bsModalSignRef.content.successSaveItem) {
                subModal.unsubscribe();
            }
        });
    };
    IndexComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField === 'name' && e.parentType == "dataRow") {
            e.editorName = 'dxTextArea';
        }
    };
    IndexComponent.prototype.selectTab = function (e) {
        var tab = e.itemData.code;
        switch (tab) {
            case 'NGUOISUDUNG':
                this.isUser = true;
                this.isPermissions = false;
                break;
            case 'NHOMQUYEN':
                this.isPermissions = true;
                this.isUser = false;
                break;
            default:
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/users/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/users/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _modules_users_shared__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_7__["ListsService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/components/permission/permission.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/users/components/permission/permission.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit($event)\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.update }} {{_translate.MENU.permission }}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <dx-form id=\"form\"\r\n               [formData]=\"list\"\r\n               validationGroup=\"listData\"\r\n               [showColonAfterLabel]=\"false\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"code\" [editorOptions]=\"{ disabled: disUserName }\">\r\n            <dxo-label text=\"{{_translate.GRID.GENERAL.code_group_permission}}\"></dxo-label>\r\n            <dxi-validation-rule\r\n              type=\"required\"\r\n              message=\"{{_translate.GRID.GENERAL.code_group_permission}} {{_translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item dataField=\"name\">\r\n            <dxo-label text=\"{{_translate.GRID.GENERAL.name_group_permission}}\"></dxo-label>\r\n            <dxi-validation-rule\r\n              type=\"required\"\r\n              message=\"{{_translate.GRID.GENERAL.name_group_permission}} {{_translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: ' '}\" dataField=\"status\" editorType=\"dxCheckBox\" [editorOptions]=\"{\r\n            text: _translate.GRID.GENERAL.active}\">\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dx-form>\r\n      <div class=\"content-configs\">\r\n        <div style=\"width: 100%; height: 300px; overflow-y: scroll;\" class=\"role-box\">\r\n          <dx-tree-list\r\n              #listpermis\r\n              id=\"listpermissions\"\r\n              [dataSource]=\"listpermissions\"\r\n              keyExpr=\"id\"\r\n              parentIdExpr=\"parent_id\"\r\n              [autoExpandAll]=\"true\"\r\n              [showRowLines]=\"false\"\r\n              [columnAutoWidth]=\"true\"\r\n              [wordWrapEnabled]=\"true\"\r\n              [showColumnHeaders]=\"false\"\r\n              (onSelectionChanged)=\"onItemSelectionChanged($event)\"\r\n              [(selectedRowKeys)]=\"selectedRowKeys\"\r\n              (onCellPrepared)=\"onCellPrepared($event)\">\r\n            <dxo-selection mode=\"multiple\" [recursive]=\"recursiveSelectionEnabled\">\r\n            </dxo-selection>\r\n            <dxi-column dataField=\"name\"></dxi-column>\r\n          </dx-tree-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <div class=\"custom-control custom-checkbox custom-control-inline\" style=\"width: 82%\">\r\n        <input type=\"checkbox\" [checked]=\"changePermission\"\r\n              (change)=\"checkboxChangePermission($event)\"\r\n               class=\"custom-control-input\" id=\"customRadio212\" name=\"changePermission\"\r\n               value=\"changePermission\">\r\n        <label class=\"custom-control-label\"\r\n               for=\"customRadio212\">{{_translate.CONTROLL.LABEL.change_permisstion}}</label>\r\n      </div>\r\n      <dx-button\r\n        text=\"{{_translate.CONTROLL.BUTTON.save }}\"\r\n        type=\"default\"\r\n        validationGroup=\"userData\"\r\n        [useSubmitBehavior]=\"true\">\r\n      </dx-button>\r\n      <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" type=\"default\" icon=\"{{_translate.ICONS.come_back }}\"\r\n                 (click)=\"bsModalRef.hide()\">\r\n      </dx-button>\r\n    </div>\r\n  </form>\r\n  "

/***/ }),

/***/ "./src/app/modules/users/components/permission/permission.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/users/components/permission/permission.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-title{font-size:18px;font-weight:600;text-transform:uppercase}.role-box{margin-top:10px;border:1px solid #d7d7d7}.content-configs{padding:20px 15px 60px 15px;width:100%}.custom-control-label{margin-top:4px}::ng-deep .content-configs .dx-item .dx-field-item-label-content{text-align:left}::ng-deep .content-configs .dx-item .dx-texteditor{width:400px}::ng-deep .content-configs #emailConfig .dx-texteditor{width:100%}::ng-deep .content-configs #emailConfig .width-50{width:50%}::ng-deep .content-configs .dx-item .dx-checkbox-text{padding-left:30px}::ng-deep .content-configs .ky-ke-khai .dx-field-item-label-content{width:100px !important}.content-configs .form-footer{float:right;margin-right:50px;padding-top:40px}::ng-deep .content-configs #configCRM .is-integrate{margin-bottom:15px}::ng-deep .content-configs #configCRM .user-password .dx-form-group-content{padding:0;margin:0}::ng-deep .content-configs #configCRM .input-long .dx-texteditor{width:82.2%}::ng-deep .content-configs #configCRM .user-password .dx-texteditor{width:60%}.icon-size{font-size:23px !important}#config-tabs{width:69%;border-bottom:1px solid #ddd}#config-tabs .dx-tabs{width:50%;border-bottom:0}.slabel{font-style:italic;margin-left:111px;margin-top:5px}.slabel .label1{margin-bottom:3px}\n"

/***/ }),

/***/ "./src/app/modules/users/components/permission/permission.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/users/components/permission/permission.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_users_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/users/shared */ "./src/app/modules/users/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var _shared_components_dropdown_checkbox_dropdown_checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/dropdown-checkbox/dropdown-checkbox.component */ "./src/app/shared/components/dropdown-checkbox/dropdown-checkbox.component.ts");
/* harmony import */ var _modules_auth_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/auth/shared */ "./src/app/modules/auth/shared/index.ts");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PermissionComponent = /** @class */ (function () {
    function PermissionComponent(authService, bsModalRef, usersService, modalService, ref, translate, templateService, notifyService, registerService, listsService) {
        var _this = this;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.usersService = usersService;
        this.modalService = modalService;
        this.ref = ref;
        this.translate = translate;
        this.templateService = templateService;
        this.notifyService = notifyService;
        this.registerService = registerService;
        this.listsService = listsService;
        this.password = '';
        this.passwordOptions = {
            mode: 'password',
            value: this.password
        };
        this.namePattern = /^[^0-9]+$/;
        this.passwordPattern = /^.{6,}$/;
        this.emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        this.userNamePattern = /^[a-zA-Z0-9_]{6,50}$/;
        this.phonePattern = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
        this.isValidate = true;
        this.disUserName = false;
        // treelist
        this.selectedRowKeys = [];
        this.selectedRowKeysTempt = [];
        this.recursiveSelectionEnabled = true;
        this.recursiveSelectionEnabledTempt = true;
        this.disableTemptlate = true;
        this.roleGroups = {
            KE_TOAN_VIEN: false,
            KE_TOAN_TRUONG: false,
            PHE_DUYET: false,
            QUAN_TRI_HE_THONG: false
        };
        this.checkKTV = false;
        this.checkKTT = false;
        this.checkPD = false;
        this.checkQTHT = false;
        this.isConfigAction = true;
        this.isConfigTemplate = false;
        this.listTemplateTBThue = [];
        this.tabs = [];
        this.role_branch = false;
        this.lbl = {};
        this.isConnectEfyId = false;
        this.isUserConverted = false;
        this.disableEmail = false;
        this.json_data = {};
        this.passwordComparison = function () {
            return _this.form.instance.option('formData').password;
        };
        this.onValueESChanged = function (e) {
            if (_this.isConnectEfyId)
                _this.checkUserEfyId(e.value);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.tabs = _core_index__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"]._tabPermissionUser(this._translate);
        this.textTabs = this.tabs[0].code;
        this.optionsPermissions = [
            { name: 'Được sử dụng tất cả mẫu hóa đơn', code: '1' },
            { name: 'Theo từng mẫu hóa đơn', code: '0' }
        ];
    }
    PermissionComponent.prototype.ngOnInit = function () {
        // this.getPermissions();
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser && this.currentUser.account) {
            if (this.currentUser.account.connect_efy_id == "1")
                this.isConnectEfyId = true;
        }
        this.getList();
        if (this.id) {
            this.isValidate = false;
            this.disUserName = true;
        }
        this.lbl = {
            label1: this._translate.CONTROLL.LABEL.user_will_use_efy_id_login + ' ' + this._translate.CONTROLL.LABEL.learn_more_about_efy_id,
            label2: this._translate.CONTROLL.LABEL.system_auto_email,
        };
    };
    PermissionComponent.prototype.getList = function () {
        var _this = this;
        if (this.id) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
            // this.changePermission = true;
            this.usersService.getPermissions().subscribe(function (response) {
                _this.listpermissions = response.data.permissions;
                _this.listsService.getList(_this.id, "1").subscribe(function (response) {
                    _this.list = response.data.list;
                    if (_this.list.status && _this.list.status === "HOAT_DONG") {
                        _this.list.status = true;
                    }
                    else if (_this.list.status && _this.list.status === "KHONG_HOAT_DONG") {
                        _this.list.status = false;
                    }
                    if (_this.list.json_data) {
                        _this.changePermission = _this.list.json_data.change_permission;
                        // for (const key in this.list.json_data) {
                        //   if (this.list.json_data.hasOwnProperty(key)) {
                        //     const value = this.list.json_data[key];
                        //     this.list[key] = value;
                        //   }
                        // }
                    }
                    if (_this.list.note) {
                        var permissions_1 = _this.list.note.split(',');
                        _this.listpermissions.forEach(function (item) {
                            if (permissions_1.includes(item.code) && !_this.treeList.instance.isRowSelected(item.id)) {
                                _this.selectedRowKeys.push(item.id);
                            }
                        });
                    }
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                });
            });
        }
        else {
            this.usersService.getPermissions().subscribe(function (response) {
                _this.listpermissions = response.data.permissions;
                _this.list = new _modules_lists_shared__WEBPACK_IMPORTED_MODULE_11__["List"]();
                _this.list.order = _this.totalCount + 1;
            });
        }
    };
    PermissionComponent.prototype.onCellPrepared = function (e) {
        console.log(e);
        if (e.rowType == "data") {
        }
    };
    // xử lý chọn quyền
    PermissionComponent.prototype.ketoanvien = function (e) {
        if (e.value === true) {
            this.roleGroups.KE_TOAN_VIEN = true;
            if (e.event && e.event.type === 'dxclick') {
                this.selectRoleGroup('KE_TOAN_VIEN');
            }
        }
        else {
            this.roleGroups.KE_TOAN_VIEN = false;
            this.unselectRoleGroup('KE_TOAN_VIEN');
        }
    };
    PermissionComponent.prototype.ketoantruong = function (e) {
        if (e.value === true) {
            this.roleGroups.KE_TOAN_TRUONG = true;
            if (e.event && e.event.type === 'dxclick') {
                this.selectRoleGroup('KE_TOAN_TRUONG');
            }
        }
        else {
            this.roleGroups.KE_TOAN_TRUONG = false;
            this.unselectRoleGroup('KE_TOAN_TRUONG');
        }
    };
    PermissionComponent.prototype.getSelectedItemsKeys = function (items) {
        var result = [];
        var that = this;
        items.forEach(function (item) {
            if (item.selected) {
                result.push(item.key);
            }
            if (item.items.length) {
                result = result.concat(that.getSelectedItemsKeys(item.items));
            }
        });
        return result;
    };
    PermissionComponent.prototype.pheduyet = function (e) {
        if (e.value === true) {
            this.roleGroups.PHE_DUYET = true;
            if (e.event && e.event.type === 'dxclick') {
                this.selectRoleGroup('PHE_DUYET');
            }
        }
        else {
            this.roleGroups.PHE_DUYET = false;
            this.unselectRoleGroup('PHE_DUYET');
        }
    };
    PermissionComponent.prototype.quantrihethong = function (e) {
        if (e.value === true) {
            this.roleGroups.QUAN_TRI_HE_THONG = true;
            if (e.event && e.event.type === 'dxclick') {
                this.selectRoleGroup('QUAN_TRI_HE_THONG');
            }
        }
        else {
            this.roleGroups.QUAN_TRI_HE_THONG = false;
            this.unselectRoleGroup('QUAN_TRI_HE_THONG');
        }
    };
    PermissionComponent.prototype.selectRoleGroup = function (roleName) {
        var _this = this;
        this.listpermissions.forEach(function (item) {
            if (item.roles.includes(roleName) && !_this.treeList.instance.isRowSelected(item.id)) {
                _this.treeList.instance.selectRows(item.id, false);
            }
        });
    };
    PermissionComponent.prototype.unselectRoleGroup = function (roleName) {
        var permissions = [];
        this.listpermissions.forEach(function (item) {
            if (item.roles.includes(roleName)) {
                permissions.push(item.id);
            }
        });
        this.treeList.instance.deselectRows(permissions);
    };
    // xử lý submit
    PermissionComponent.prototype.onSubmit = function (e) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        if (this.list.status) {
            this.list.status = "HOAT_DONG";
        }
        else {
            this.list.status = "KHONG_HOAT_DONG";
        }
        this.list.listtype_id = this.listtypeId;
        this.list.note = this.permissions;
        if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.list.note) == "") {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.you_choose_at_least_one, 'error');
            return;
        }
        this.listtypes.forEach(function (listtype) {
            if (_this.listtypeId == listtype.id && listtype.json_data) {
                listtype.json_data.forEach(function (item) {
                    for (var key in _this.list) {
                        if (item.code == key) {
                            _this.json_data[key] = _this.list[key];
                        }
                    }
                });
            }
        });
        this.list.json_data = this.json_data;
        this.list.json_data.change_permission = this.changePermission;
        //let data = {list: this.list};
        var data = JSON.parse(JSON.stringify({ list: this.list }));
        for (var key in data.list.json_data) {
            if (data.list.json_data[key] == data.list[key]) {
                delete data.list[key];
            }
        }
        if (!this.list.id) {
            this.listsService.add(data).subscribe(function (response) {
                if (response.status == "success") {
                    _this.bsModalRef.content.successSaveItem = "success";
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.add_success, "success");
                    _this.bsModalRef.content.successSaveData = _this.list;
                    _this.bsModalRef.hide();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(response.message, "error");
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
        else {
            var id = this.list.id;
            this.listsService.edit(data, id).subscribe(function (response) {
                if (response.status == "success") {
                    _this.bsModalRef.content.successSaveItem = "success";
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.update_success, "success");
                    _this.bsModalRef.hide();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(response.message, "error");
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
    };
    PermissionComponent.prototype.onItemSelectionChanged = function (e) {
        var _this = this;
        this.permissions = '';
        var selectedKey = this.treeList.instance.getSelectedRowKeys('all');
        var _loop_1 = function (role) {
            this_1.listpermissions.forEach(function (item) {
                if (item.id === role && item.permission === true) {
                    _this.permissions += item.code + ',';
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, selectedKey_1 = selectedKey; _i < selectedKey_1.length; _i++) {
            var role = selectedKey_1[_i];
            _loop_1(role);
        }
        this.permissions = this.permissions.slice(0, -1);
    };
    PermissionComponent.prototype.onValueChanged = function (e) {
        if (e.value === '1') {
            this.disableTemptlate = true;
            this.user.is_use_all_template = true;
        }
        else {
            this.disableTemptlate = false;
            this.user.is_use_all_template = false;
        }
    };
    PermissionComponent.prototype.getChecklistBranch = function ($event) {
        if ($event.length > 0) {
            if ($event.indexOf('TAT_CA') !== -1) {
                var value = $event.filter(function (item) {
                    return item === 'TAT_CA';
                });
                this.user.role_branch = value.toString();
            }
            else {
                this.user.role_branch = $event.toString().replace(/,/g, ';');
            }
        }
        else {
            this.user.role_branch = null;
        }
    };
    PermissionComponent.prototype.checkUserEfyId = function (username) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        this.registerService.checkUserUseEfyId(username).subscribe(function (res) {
            if (res.status === 'success') {
                if (res.data.user) {
                    _this.user.name = res.data.user.name;
                    _this.user.mobile = res.data.user.mobile;
                    _this.user.email = res.data.user.email;
                }
            }
            else {
                _this.user.name = "";
                _this.user.mobile = "";
                // Library.notify(res.message, 'error');
            }
        }, function (error) { return _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(error, 'error'); }, function () { return _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading(); });
    };
    PermissionComponent.prototype.checkboxChangePermission = function ($event) {
        if ($event.target.value === 'changePermission' && $event.target.checked === true) {
            this.changePermission = $event.target.checked;
        }
        else {
            this.changePermission = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"])
    ], PermissionComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('listpermis'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTreeListComponent"])
    ], PermissionComponent.prototype, "treeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('listTempt'),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTreeListComponent"])
    ], PermissionComponent.prototype, "treeListTempt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropdownCheckboxComponent'),
        __metadata("design:type", _shared_components_dropdown_checkbox_dropdown_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["DropdownCheckboxComponent"])
    ], PermissionComponent.prototype, "dropdownCheckboxComponent", void 0);
    PermissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permission',
            template: __webpack_require__(/*! ./permission.component.html */ "./src/app/modules/users/components/permission/permission.component.html"),
            styles: [__webpack_require__(/*! ./permission.component.scss */ "./src/app/modules/users/components/permission/permission.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_users_shared__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_7__["TemplateService"],
            _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_8__["NotifyService"],
            _modules_auth_shared__WEBPACK_IMPORTED_MODULE_10__["RegisterService"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_11__["ListsService"]])
    ], PermissionComponent);
    return PermissionComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/users.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/users/users.module.ts ***!
  \***********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/users/components/index/index.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _users_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.routing */ "./src/app/modules/users/users.routing.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared */ "./src/app/modules/users/shared/index.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/modules/users/components/add/add.component.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _modules_auth_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/auth/shared */ "./src/app/modules/auth/shared/index.ts");
/* harmony import */ var _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/permission/permission.component */ "./src/app/modules/users/components/permission/permission.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//library

//general










var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _users_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _core_index__WEBPACK_IMPORTED_MODULE_5__["devextremeModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxTreeListModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_10__["vTranslateModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"],
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"],
                _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_14__["PermissionComponent"]
            ],
            entryComponents: [
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_7__["NotifyEfyComponent"],
                _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_14__["PermissionComponent"]
            ],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_8__["UsersService"],
                _modules_template_shared__WEBPACK_IMPORTED_MODULE_4__["TemplateService"],
                _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_11__["NotifyService"],
                _modules_lists_shared__WEBPACK_IMPORTED_MODULE_12__["ListsService"],
                _modules_auth_shared__WEBPACK_IMPORTED_MODULE_13__["RegisterService"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/modules/users/users.routing.ts":
/*!************************************************!*\
  !*** ./src/app/modules/users/users.routing.ts ***!
  \************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/users/components/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
];
var routing = /** @class */ (function () {
    function routing() {
    }
    routing = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], routing);
    return routing;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map