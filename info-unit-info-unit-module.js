(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-unit-info-unit-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].forkJoin = rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"];
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./src/app/modules/info-unit/components/index/index.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/info-unit/components/index/index.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"form-title ttdv\">A.{{ _translate.MENU.unit_information}}</h3>\r\n<form (ngSubmit)=\"onSubmit($event)\" class=\"form-info-register\">\r\n  <dx-form [formData]=\"infoUnit\" validationGroup=\"formData\"\r\n           [showColonAfterLabel]=\"false\">\r\n    <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n      <dxi-item dataField=\"tax_province_code\" editorType=\"dxSelectBox\"\r\n                [editorOptions]=\"{items: cities,  displayExpr: 'name', valueExpr: 'code', searchEnabled: 'true',\r\n          onValueChanged: onCitiesSelected}\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.province_city}}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\"\r\n                             message=\"{{ _translate.CONTROLL.LABEL.province_city}}  {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"tax_department\" editorType=\"dxSelectBox\"\r\n                [editorOptions]=\"{items: taxDepartmentByCity,  displayExpr: 'name', valueExpr: 'code', searchEnabled: 'true', disabled: isDisTaxDepartments}\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.tax_authorities}}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\"\r\n                             message=\"{{ _translate.CONTROLL.LABEL.tax_authorities}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"tax_code\" [editorOptions]=\"{disabled: true}\">\r\n        <dxo-label text=\"{{ _translate.GRID.INVOICE.buyer_tax_code}}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\"\r\n                             message=\"{{ _translate.GRID.INVOICE.buyer_tax_code}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n        <dxi-validation-rule\r\n          type=\"pattern\"\r\n          [pattern]=\"taxCodePattern\"\r\n          message=\"{{ _translate.GRID.INVOICE.buyer_tax_code}} {{ _translate.VALIDATION.not_pattern}}\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"name\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_name}}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\"\r\n                             message=\"{{ _translate.CONTROLL.LABEL.customer_name}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n    </dxi-item>\r\n    <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n      <dxi-item dataField=\"business_address\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.business_address}}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\"\r\n                             message=\"{{ _translate.CONTROLL.LABEL.business_address}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n      <!--      <dxi-item dataField=\"transaction_address\"-->\r\n      <!--                [editorOptions]=\"{placeholder: _translate.CONTROLL.PLACE_HOLDER.address_transaction}\">-->\r\n      <!--        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.transaction_address_if_different}}\"></dxo-label>-->\r\n\r\n      <!--        &lt;!&ndash; <dxi-validation-rule type=\"required\" message=\"Địa chỉ giao dịch {{ _translate.VALIDATION.required}}\"></dxi-validation-rule> &ndash;&gt;-->\r\n      <!--      </dxi-item>-->\r\n    </dxi-item>\r\n    <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"company_type\" editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: declarationForms,  displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.tax_declaration_form}}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{ _translate.CONTROLL.LABEL.tax_declaration_form}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"report_period\" editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: reportPeriods,  displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.report_period}}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{ _translate.CONTROLL.LABEL.report_period}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <dxi-item dataField=\"account_type\" editorType=\"dxSelectBox\"\r\n                [editorOptions]=\"{items: groupUnits,  displayExpr: 'name', valueExpr: 'code'}\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.belongs_to_the_sector}}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\"\r\n                             message=\"{{ _translate.CONTROLL.LABEL.belongs_to_the_sector}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"phone\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.landline_phone}}\"></dxo-label>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item [label]=\"{text: 'Fax'}\" dataField=\"fax\" cssClass='fax-info'>\r\n\r\n        </dxi-item>\r\n        <dxi-item [label]=\"{text: 'Website'}\" dataField=\"website\" cssClass='website-info'>\r\n\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!--      <dxi-item  dataField=\"bank_account_number\">-->\r\n      <!--          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.bank_account_number}}\"></dxo-label>-->\r\n      <!--      </dxi-item>-->\r\n      <dxi-item dataField=\"surrogate_name\">\r\n        <dxo-label text=\"{{ _translate.GRID.CUSTOMER.surrogate_name}}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\"\r\n                             message=\"{{ _translate.GRID.CUSTOMER.surrogate_name}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"surrogate_position\">\r\n        <dxo-label text=\"{{ _translate.GRID.USER.position}}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\"\r\n                             message=\"{{ _translate.GRID.USER.position}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"contact_person_name\">\r\n        <dxo-label text=\"{{ _translate.GRID.CUSTOMER.contact_person}}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\"\r\n                             message=\"{{ _translate.GRID.CUSTOMER.contact_person}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"contact_mobile\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.phone}}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\"\r\n                             message=\"{{ _translate.CONTROLL.LABEL.phone}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n        <dxi-validation-rule\r\n          type=\"pattern\"\r\n          [pattern]=\"phonePattern\"\r\n          message=\"{{ _translate.CONTROLL.LABEL.phone}} {{ _translate.VALIDATION.incorrect}}\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item [label]=\"{text: 'Email'}\" dataField=\"email\">\r\n        <dxi-validation-rule type=\"required\" message=\"Email {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n        <dxi-validation-rule\r\n          type=\"pattern\"\r\n          [pattern]=\"emailPattern\"\r\n          message=\"Email {{ _translate.VALIDATION.incorrect}}\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item editorType=\"dxTextBox\" [editorOptions]=\"{ value: emailValue }\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.confirm_email}}\"></dxo-label>\r\n        <dxi-validation-rule\r\n          type=\"compare\"\r\n          [comparisonTarget]=\"emailComparison\"\r\n          message=\"{{ _translate.CONTROLL.LABEL.confirm_email}} {{ _translate.VALIDATION.incorrect}}\">\r\n        </dxi-validation-rule>\r\n        <dxi-validation-rule type=\"required\"\r\n                             message=\"{{ _translate.CONTROLL.LABEL.confirm_email}} {{ _translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n    </dxi-item>\r\n    <!-- Tài khoản ngân hàng -->\r\n    <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n      <dxi-item dataField=\"bank_name\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.bank_account}}\"></dxo-label>\r\n      </dxi-item>\r\n    </dxi-item>\r\n    <!-- Mã xác thực -->\r\n    <dxi-item [template] = \"'templateVerifyCode'\" [cssClass]=\"'ma-xac-thuc'\">\r\n      <dxo-label text=\"Mã xác thực\"></dxo-label>\r\n    </dxi-item>\r\n    <!-- Chỉ hiển thị đối với đơn vị thuộc Cục thuế HCM -->\r\n    <dxi-item *ngIf=\"isHCM\"  itemType=\"group\" [colCount]=\"1\" style=\"display: flex;\">\r\n        <div style=\"margin-right: 8px;\">{{ 'CONTROLL.LABEL.invoice_xml_format' | translate }}</div>\r\n      <dxi-item cssClass=\"radiogroup\">\r\n        <dx-radio-group [dataSource]=\"optionsXML\" displayExpr=\"name\" valueExpr=\"code\" [(value)]=\"valueOptionXml\"\r\n          layout=\"horizontal\">\r\n        </dx-radio-group>\r\n      </dxi-item>\r\n    </dxi-item>\r\n    <dxi-item *ngIf=\"this.infoUnit && this.infoUnit.account_type === 'HS-SV'\" itemType=\"group\" [colCount]=\"2\">\r\n      <dxi-item>\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.time_study}}\"></dxo-label>\r\n        <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n          <div class=\"dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-widget\">\r\n            <div class=\"dx-texteditor-container\">\r\n              <div class=\"dx-texteditor-input-container\">\r\n                <input autocomplete=\"off\"\r\n                       class=\"dx-texteditor-input\"\r\n                       type=\"number\"\r\n                       [ngModel]=\"infoUnit.time_study\"\r\n                       oninput=\"if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                       min=\"0\" max=\"12\"\r\n                       (change)=\"inputChange($event)\"\r\n                       maxlength=\"2\"\r\n                       name=\"time_study\"\r\n                       tabindex=\"0\"\r\n                       role=\"textbox\">\r\n                <div data-dx_placeholder=\"hihi\" class=\"dx-placeholder dx-state-invisible\"></div>\r\n              </div>\r\n              <div class=\"dx-texteditor-buttons-container\">\r\n                <div></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </dxi-item>\r\n\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"start_time_study\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.start_from_time_study}}\"></dxo-label>\r\n          <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n            <div class=\"dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-widget\">\r\n              <div class=\"dx-texteditor-container\">\r\n                <div class=\"dx-texteditor-input-container\">\r\n                  <input autocomplete=\"off\"\r\n                         class=\"dx-texteditor-input\"\r\n                         type=\"number\"\r\n                         [ngModel]=\"infoUnit.start_time_study\"\r\n                         min=\"1\" max=\"12\"\r\n                         (change)=\"inputChange($event)\"\r\n                         maxlength=\"2\"\r\n                         name=\"start_time_study\"\r\n                         tabindex=\"0\"\r\n                         role=\"textbox\">\r\n                  <div data-dx_placeholder=\"hihi\" class=\"dx-placeholder dx-state-invisible\"></div>\r\n                </div>\r\n                <div class=\"dx-texteditor-buttons-container\">\r\n                  <div></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </dxi-item>\r\n\r\n        <dxi-item dataField=\"end_time_study\" [editorOptions]=\"{ disabled: true }\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.end_time_study}}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dxi-item>\r\n    <div *dxTemplate = \"let d of 'templateVerifyCode'\" class=\"p-ma-xac-thuc\">\r\n      <dx-text-box [(value)]=\"infoUnit.verify_code\" style=\"width:293px;padding-top: 5px;\" [readOnly]=\"true\">\r\n\r\n      </dx-text-box>\r\n      <dx-button class=\"btn-ma-xac-thuc\" text=\"Tạo mã xác thực\" type=\"default\" (click)=\"taomaxacthuc()\" [disabled]=\"infoUnit.verify_code\"></dx-button>\r\n    </div>\r\n  </dx-form>\r\n  <div style=\"display: inline-flex\">\r\n    <h3 class=\"form-title\">B. {{ _translate.CONTROLL.LABEL.digital_signature_information}}</h3>\r\n    <dx-button style=\"margin-left: 8px;height: 31px;margin-top: 8px;\" text=\"{{ _translate.CONTROLL.LABEL.select_signature}}\" type=\"default\" (click)=\"send()\"></dx-button>\r\n  </div>\r\n  \r\n  <div class=\"container\" >\r\n    <div class=\"row\">\r\n      <!-- <div class=\"col-md-5\" style=\"padding-right: 0;\">\r\n        <div class=\"conect-signature\">\r\n          <p>{{ _translate.CONTROLL.LABEL.please_plug_the_usb}}</p>\r\n          <p>{{ _translate.CONTROLL.LABEL.get_info_token}}</p>\r\n          <dx-button text=\"{{ _translate.CONTROLL.LABEL.select_signature}}\" type=\"default\" (click)=\"send()\">\r\n          </dx-button>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-md-8\" style=\"padding-left: 0;\">\r\n        <dx-form [formData]=\"infoUnit\" [showColonAfterLabel]=\"false\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item dataField=\"cert_serial\" [editorOptions]=\"{disabled: true}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.serial_number}}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item dataField=\"cert_provider\" [editorOptions]=\"{disabled: true}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.certificate_authority}}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n            <dxi-item editorType=\"dxDateBox\"\r\n                      dataField=\"cert_valid_from\"\r\n                      [editorOptions]=\"{useMaskBehavior:true, disabled: true, displayFormat:'dd/MM/yyyy'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.valid_from}}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item editorType=\"dxDateBox\"\r\n                      dataField=\"cert_valid_to\"\r\n                      [editorOptions]=\"{useMaskBehavior:true, disabled: true, displayFormat:'dd/MM/yyyy'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.to_date}}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n      <div class=\"col-md-2\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-form\">\r\n    <dx-button text=\"{{ _translate.CONTROLL.LABEL.update}}\" type=\"default\" icon=\"assets\\img\\icons\\DongY.png\"\r\n               validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button appBackButton text=\"{{ _translate.CONTROLL.BUTTON.come_back}}\" type=\"default\"\r\n               icon=\"assets\\img\\icons\\QuayLai.png\"></dx-button>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/info-unit/components/index/index.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/info-unit/components/index/index.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-info-register{padding-bottom:50px}.form-title{margin:15px 0px;font-weight:bold}h2{text-align:center;color:#0e77bb;font-size:18px;font-weight:bold;margin:15px 0px}.footer-form{float:right;padding-top:20px}::ng-deep .form-info-register .fax-info{padding-right:0 !important}::ng-deep .form-info-register .fax-info .dx-field-item-label-content{width:145px !important}::ng-deep .form-info-register .website-info .dx-field-item-label-content{width:50px !important}::ng-deep .lblDisplayXML .dx-field-item-label-content{margin:15px 0px 5px 0px}::ng-deep .radiogroup .dx-radiobutton{margin-left:25px}.conect-signature{background-color:#fff;min-height:100px;border:1px solid #d5d5d5;padding:10px;text-align:center}.conect-signature p{margin-bottom:5px;font-style:italic !important}::ng-deep .conect-signature .dx-button{margin-top:5px !important}.p-ma-xac-thuc{display:inline-flex}.btn-ma-xac-thuc{height:27px}::ng-deep .p-ma-xac-thuc .dx-button .dx-button-content{padding-top:3px !important}::ng-deep .ma-xac-thuc .dx-field-item-label-content{width:149px}\n"

/***/ }),

/***/ "./src/app/modules/info-unit/components/index/index.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/info-unit/components/index/index.component.ts ***!
  \***********************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_info_unit_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/info-unit/shared */ "./src/app/modules/info-unit/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var IndexComponent = /** @class */ (function () {
    function IndexComponent(authService, infoUnitService, route, socketService, translate, modalService) {
        var _this = this;
        this.authService = authService;
        this.infoUnitService = infoUnitService;
        this.route = route;
        this.socketService = socketService;
        this.translate = translate;
        this.modalService = modalService;
        this.infoUnit = new _modules_info_unit_shared__WEBPACK_IMPORTED_MODULE_3__["InfoUnit"]();
        this.groupUnits = [];
        this.declarationForms = [];
        this.reportPeriods = [];
        this.emailPattern = _config_pattern__WEBPACK_IMPORTED_MODULE_5__["pattern"].email;
        this.phonePattern = _config_pattern__WEBPACK_IMPORTED_MODULE_5__["pattern"].phone;
        this.taxCodePattern = _config_pattern__WEBPACK_IMPORTED_MODULE_5__["pattern"].tax_code;
        this.email = '';
        this.emailValue = '';
        this.disableTaxHCM = false;
        this.isHCM = false;
        this.emailComparison = function () {
            return _this.form['_results'][1].instance.option('formData').email;
        };
        // Xuất hóa đơn mặc định hoặc theo thuế HCM
        this.TaxXMLHCM = false;
        this.onCitiesSelected = function (e) {
            _this.taxDepartmentByCity = [];
            if (e.event) {
                _this.infoUnit.tax_department = '';
            }
            _this.isDisTaxDepartments = false;
            _this.getTaxDepartments(e.value);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.optionsXML =
            [
                { name: this._translate.CONTROLL.LABEL.in_the_old_format, code: 1 },
                { name: this._translate.CONTROLL.LABEL.tax_department_of_HCM, code: 2 },
                { name: this._translate.CONTROLL.LABEL.notice_no_92_TB_TCT, code: 3 }
            ];
        this.groupUnits = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._groupUnits(this._translate);
        this.declarationForms = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._declarationForms(this._translate);
        this.reportPeriods = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._reportPeriod(this._translate);
        this.getAll();
        this.route.data.subscribe(function (data) {
            _this.cities = data.lists.DM_TINH_THANH;
            _this.taxDepartments = data.lists.DM_CO_QUAN_THUE;
            // let a = JSON.stringify(data.lists.DM_CO_QUAN_THUE);
        });
        this.ioSignature = this.socketService.getData().subscribe(function (rs) {
            var data = JSON.parse(rs.toString());
            if (data.Status === 'success') {
                var infor = data.Data;
                var currentUser = JSON.parse(localStorage['currentUser']);
                if (infor.MST === currentUser.account.tax_code || (currentUser.account.tax_code.length === 10 && +currentUser.account.tax_code >= 9999999900) || !_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].isCheckSignature) {
                    _this.infoUnit.cert_serial = infor.SerialNumber;
                    _this.infoUnit.cert_provider = _this.convertIssuer(infor.Issuer);
                    _this.infoUnit.cert_valid_from = _this.convertDate(infor.DateFrom);
                    _this.infoUnit.cert_valid_to = _this.convertDate(infor.DateTo);
                    _this.infoUnit.icc_token = '';
                    _this.infoUnit.cert_content = infor.CertContent;
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Thông tin chữ kỹ số không đúng, xin mời chọn lại', 'error');
                }
            }
            else {
                alert(data.Description);
            }
        });
    };
    IndexComponent.prototype.getAll = function () {
        var _this = this;
        this.accountId = this.authService.getCurrentUser().account.id;
        if (this.accountId) {
            this.infoUnitService.getInfo(this.accountId).subscribe(function (res) {
                delete res.data.account.van_account_info;
                _this.infoUnit = res.data.account;
                _this.emailValue = _this.infoUnit.email;
                _this.valueOptionXml = _this.infoUnit.xml_type;
                // // Kiểm tra nếu là cục thuế HCM thì mở lựa chọn XMl HCM 
                if (_this.infoUnit.tax_province_code != "701") {
                    _this.optionsXML = _this.optionsXML.filter(function (p) { return p.code != 2; });
                    // this.isHCM = true;
                    // if (this.infoUnit.time_used_xml_new)
                    //   this.TaxXMLHCM = true;
                    // else
                    //   this.TaxXMLHCM = false;
                    // if (this.TaxXMLHCM)
                    //   this.disableTaxHCM = this.TaxXMLHCM;
                }
            });
        }
    };
    IndexComponent.prototype.getTaxDepartments = function (cityCode) {
        var _this = this;
        this.taxDepartments.forEach(function (element) {
            if (element.province_code === cityCode) {
                _this.taxDepartmentByCity.push(element);
            }
        });
    };
    IndexComponent.prototype.send = function () {
        // if (this.socketService.checkNull()) {
        //   this.socketService.connect();
        // }
        // setTimeout(() => {
        //   const res = this.socketService.sendSignatureInfor();
        //   if (res.status === 'error') {
        //     Library.notify(res.message, 'error');
        //     this.socketService.setNull();
        var _this = this;
        //   }
        // }, 100);
        var initialState = {
            taxcode: this.infoUnit.tax_code
        };
        this.bsModalSignRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_11__["PopupInfoUnitServiceComponent"], {
            backdrop: 'static',
            keyboard: true,
            class: 'signature modal-lg modal-margin-width',
            initialState: initialState
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            if (_this.bsModalSignRef.content.successSaveData) {
                var certificate = _this.bsModalSignRef.content.successSaveData;
                var currentUser = JSON.parse(localStorage['currentUser']);
                if (certificate.MST === currentUser.account.tax_code || (currentUser.account.tax_code.length === 10 && +currentUser.account.tax_code >= 9999999900) || !_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].isCheckSignature) {
                    _this.infoUnit.cert_serial = certificate.SerialNumber;
                    _this.infoUnit.cert_provider = _this.convertIssuer(certificate.Issuer);
                    _this.infoUnit.cert_valid_from = _this.convertDate(certificate.DateFrom);
                    _this.infoUnit.cert_valid_to = _this.convertDate(certificate.DateTo);
                    _this.infoUnit.icc_token = '';
                    _this.infoUnit.cert_content = certificate.CertContent;
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Thông tin chữ kỹ số không đúng, xin mời chọn lại', 'error');
                }
            }
            subModal.unsubscribe();
        });
    };
    IndexComponent.prototype.convertIssuer = function (str) {
        return str;
    };
    IndexComponent.prototype.convertDate = function (str) {
        return moment__WEBPACK_IMPORTED_MODULE_7__(str).format('YYYY-MM-DD HH:mm:ss');
    };
    // xử lý submit
    IndexComponent.prototype.onSubmit = function (e) {
        var currentUser = this.authService.getCurrentUser();
        this.infoUnit.submitted_person_name = this.infoUnit.name;
        this.infoUnit.xml_type = this.valueOptionXml;
        var account_type = currentUser.account.account_type;
        if (account_type == "HS-SV") {
            if (!this.infoUnit.time_study || this.infoUnit.time_study <= 0) {
                if (this.infoUnit.time_study <= 0)
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Số tháng/năm học phải lớn hơn 0", 'error');
                else
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Chưa nhập thông tin Số tháng/năm học", 'error');
                return;
            }
            if (!this.infoUnit.start_time_study || this.infoUnit.start_time_study <= 0) {
                if (this.infoUnit.start_time_study <= 0)
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Bắt đầu từ tháng phải lớn hơn 0", 'error');
                else
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Chưa nhập thông tin Bắt đầu từ tháng", 'error');
                return;
            }
            if (!this.infoUnit.end_time_study || this.infoUnit.end_time_study <= 0) {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Đến tháng phải lớn hơn 0", 'error');
                return;
            }
        }
        console.log(this.infoUnit);
        var data = {
            'account': this.infoUnit
        };
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        this.infoUnitService.updateInfo(data, this.accountId).subscribe(function (response) {
            if (response.status === 'success') {
                currentUser.account = response.data.account;
                localStorage['currentUser'] = JSON.stringify(currentUser);
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Câp nhật thông tin đơn vị thành công', 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(response.message, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.inputChange = function ($event) {
        if ($event.srcElement.name === 'time_study') {
            if ($event.srcElement.valueAsNumber && $event.srcElement.valueAsNumber > 0) {
                if ($event.srcElement.valueAsNumber > parseInt($event.srcElement.max, 10)) {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify($event.srcElement.validationMessage, 'error');
                    this.infoUnit.time_study = 0;
                }
                else {
                    this.infoUnit.time_study = $event.srcElement.valueAsNumber;
                    this.sumEndStudy();
                }
            }
            else {
                this.infoUnit.time_study = 0;
                this.infoUnit.start_time_study = 0;
                this.infoUnit.end_time_study = 0;
            }
        }
        if ($event.srcElement.name === 'start_time_study') {
            if ($event.srcElement.valueAsNumber && $event.srcElement.valueAsNumber > 0) {
                if ($event.srcElement.valueAsNumber > parseInt($event.srcElement.max, 10)) {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify($event.srcElement.validationMessage, 'error');
                    this.infoUnit.start_time_study = 0;
                }
                else {
                    this.infoUnit.start_time_study = $event.srcElement.valueAsNumber;
                    this.sumEndStudy();
                }
            }
            else {
                this.infoUnit.start_time_study = 0;
                this.infoUnit.end_time_study = 0;
            }
        }
    };
    IndexComponent.prototype.sumEndStudy = function () {
        if (this.infoUnit.time_study && this.infoUnit.start_time_study) {
            var _dteCurrent = moment__WEBPACK_IMPORTED_MODULE_7__();
            var _dte = new Date(_dteCurrent.year(), this.infoUnit.start_time_study - 1, 1);
            var tp = this.infoUnit.time_study - 1;
            var mont = _dte.getMonth();
            _dte.setMonth(mont + tp);
            this.infoUnit.end_time_study = _dte.getMonth() < 12 ? _dte.getMonth() + 1 : 1;
            //  this.infoUnit.end_time_study = this.infoUnit.time_study - (13 - this.infoUnit.start_time_study);
        }
    };
    IndexComponent.prototype.taomaxacthuc = function () {
        var verify_code = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].makeid().toUpperCase().replace(/-/g, "");
        this.infoUnit.verify_code = verify_code;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"])
    ], IndexComponent.prototype, "form", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/info-unit/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/info-unit/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _modules_info_unit_shared__WEBPACK_IMPORTED_MODULE_3__["InfoUnitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/info-unit/info-unit.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/info-unit/info-unit.module.ts ***!
  \*******************************************************/
/*! exports provided: InfoUnitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUnitModule", function() { return InfoUnitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/info-unit/components/index/index.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _info_unit_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-unit.routing */ "./src/app/modules/info-unit/info-unit.routing.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/modules/info-unit/shared/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//library

//general





var InfoUnitModule = /** @class */ (function () {
    function InfoUnitModule() {
    }
    InfoUnitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _info_unit_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _core_index__WEBPACK_IMPORTED_MODULE_4__["devextremeModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxTreeListModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_8__["vTranslateModule"]
            ],
            declarations: [_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]],
            entryComponents: [
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["PopupInfoUnitServiceComponent"]
            ],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_7__["InfoUnitService"], _shared__WEBPACK_IMPORTED_MODULE_7__["InfoUnitResolver"]]
        })
    ], InfoUnitModule);
    return InfoUnitModule;
}());



/***/ }),

/***/ "./src/app/modules/info-unit/info-unit.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/info-unit/info-unit.routing.ts ***!
  \********************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/info-unit/components/index/index.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/app/modules/info-unit/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], resolve: { lists: _shared__WEBPACK_IMPORTED_MODULE_3__["InfoUnitResolver"] } },
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



/***/ }),

/***/ "./src/app/modules/info-unit/shared/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/info-unit/shared/index.ts ***!
  \***************************************************/
/*! exports provided: InfoUnitService, InfoUnitResolver, InfoUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_unit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-unit.service */ "./src/app/modules/info-unit/shared/info-unit.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoUnitService", function() { return _info_unit_service__WEBPACK_IMPORTED_MODULE_0__["InfoUnitService"]; });

/* harmony import */ var _info_unit_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-unit.resolver */ "./src/app/modules/info-unit/shared/info-unit.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoUnitResolver", function() { return _info_unit_resolver__WEBPACK_IMPORTED_MODULE_1__["InfoUnitResolver"]; });

/* harmony import */ var _info_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-unit */ "./src/app/modules/info-unit/shared/info-unit.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoUnit", function() { return _info_unit__WEBPACK_IMPORTED_MODULE_2__["InfoUnit"]; });






/***/ }),

/***/ "./src/app/modules/info-unit/shared/info-unit.resolver.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/info-unit/shared/info-unit.resolver.ts ***!
  \****************************************************************/
/*! exports provided: InfoUnitResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUnitResolver", function() { return InfoUnitResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _info_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-unit.service */ "./src/app/modules/info-unit/shared/info-unit.service.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InfoUnitResolver = /** @class */ (function () {
    function InfoUnitResolver(infoUnitService, router) {
        this.infoUnitService = infoUnitService;
        this.router = router;
    }
    InfoUnitResolver.prototype.resolve = function (route, state) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        return this.infoUnitService.getDataSelect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            if (rs.status == "success") {
                return rs.data;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, "error");
                _this.router.navigate(['/']);
                return null;
            }
        }));
    };
    InfoUnitResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_info_unit_service__WEBPACK_IMPORTED_MODULE_3__["InfoUnitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InfoUnitResolver);
    return InfoUnitResolver;
}());



/***/ }),

/***/ "./src/app/modules/info-unit/shared/info-unit.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/info-unit/shared/info-unit.service.ts ***!
  \***************************************************************/
/*! exports provided: InfoUnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUnitService", function() { return InfoUnitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoUnitService = /** @class */ (function () {
    function InfoUnitService(apiService, coreService) {
        this.apiService = apiService;
        this.coreService = coreService;
    }
    InfoUnitService.prototype.getInfo = function (id) {
        return this.apiService.get('/accounts/' + id);
    };
    InfoUnitService.prototype.getDataSelect = function () {
        return this.apiService.get('/get-lists-by-listtype-code/DM_TINH_THANH,DM_CO_QUAN_THUE');
    };
    InfoUnitService.prototype.updateInfo = function (data, id) {
        return this.apiService.put('/accounts/' + id, data);
    };
    InfoUnitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["CoreService"]])
    ], InfoUnitService);
    return InfoUnitService;
}());



/***/ }),

/***/ "./src/app/modules/info-unit/shared/info-unit.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/info-unit/shared/info-unit.ts ***!
  \*******************************************************/
/*! exports provided: InfoUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUnit", function() { return InfoUnit; });
var InfoUnit = /** @class */ (function () {
    function InfoUnit() {
        this['name'] = '';
        this['account_type'] = '';
        this['tax_province_code'] = '';
        this['tax_district_code'] = '';
        this['business_address'] = '';
        this['transaction_address'] = '';
        this['phone'] = '';
        this['email'] = '';
        this['fax'] = '';
        this['website'] = '';
        this['surrogate_name'] = '';
        this['surrogate_position'] = '';
        this['submitted_person_name'] = '';
        this['contact_person_name'] = '';
        this['contact_mobile'] = '';
        this['tax_department'] = '';
        this['company_type'] = '';
        this['bank_name'] = '';
        this['bank_account_number'] = '';
        this['company_email'] = '';
        this['cert_serial'] = '';
        this['cert_valid_from'] = '';
        this['cert_valid_to'] = '';
        this['cert_provider'] = '';
        this['cert_content'] = '';
        this['icc_token'] = '';
        this['report_period'] = '';
        this['time_study'] = 0;
        this['start_time_study'] = 0;
        this['end_time_study'] = 0;
        this['time_used_xml_new'] = '';
        this['xml_type'] = 1;
        this['tax_code'] = '';
        this['verify_code'] = '';
    }
    return InfoUnit;
}());



/***/ })

}]);
//# sourceMappingURL=info-unit-info-unit-module.js.map