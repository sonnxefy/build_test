(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-invoice-student-invoice-module"],{

/***/ "./src/app/core/library/invoice/my-bsmodel.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/library/invoice/my-bsmodel.service.ts ***!
  \************************************************************/
/*! exports provided: MyBsModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBsModalService", function() { return MyBsModalService; });
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MyBsModalService = /** @class */ (function (_super) {
    __extends(MyBsModalService, _super);
    function MyBsModalService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MyBsModalService;
}(ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__["BsModalService"]));



/***/ }),

/***/ "./src/app/modules/student-invoice/components/form-student-invoive/form-student-invoive.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/form-student-invoive/form-student-invoive.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row invoice-form\">\r\n  <div class=\"col-md-12\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n          <!-- Mẫu hoá đơn -->\r\n          <dxi-item *ngIf=\"!isTT78\" dataField=\"invoice_release_id\" editorType=\"dxSelectBox\"\r\n            [editorOptions]=\"{items: select.invoice_releases, onValueChanged: templateChange, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_form }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item dataField=\"template_id\" editorType=\"dxSelectBox\"\r\n            [editorOptions]=\"{items: select.templatesTT78, onValueChanged: onChangeTem, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_form }}\" *ngIf=\"isTT78 && !isReceipts\"></dxo-label>\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.receipt_form }}\" *ngIf=\"isTT78 && isReceipts\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\" *ngIf=\"isTT78 && isReceipts\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.receipt_form }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n            <dxi-validation-rule type=\"required\" *ngIf=\"isTT78 && !isReceipts\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n          <!-- Ngày hoá đơn -->\r\n          <dxi-item dataField=\"invoice_date\" editorType=\"dxDateBox\" *ngIf=\"!isReceipts\"\r\n            [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', disabled: disableInvoiceDate, onValueChanged: changeDateTime}\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_date }}\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- ngày phiếu thu -->\r\n          <dxi-item dataField=\"invoice_date\" editorType=\"dxDateBox\" *ngIf=\"isReceipts \"\r\n            [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', disabled: disableInvoiceDate, onValueChanged: changeDateTime}\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE.receipts_date}}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.receipts_date }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n          <!-- Ghi chú -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\" *ngIf=\"!isReceipts\">\r\n            <dxi-item cssClass=\"vat invoice-note\" dataField=\"note\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.note }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\" *ngIf=\"isReceipts\">\r\n            <!-- Ghi chú -->\r\n            <dxi-item cssClass=\"vat invoice-note\" dataField=\"note\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.note }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n\r\n\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n          <!-- Loại tiền/tỉ giá -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n            <dxi-item cssClass=\"max_left\" dataField=\"currency_code\" editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: select.currency_codes, onValueChanged: currencyCodeChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.currency_code }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item cssClass=\"max_right\" dataField=\"currency_rate\" editorType=\"dxNumberBox\"\r\n              [editorOptions]=\"{disabled: frmData.currency_code == 'VND',onValueChanged: currencyRateChange, format: '0,###.##'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.currency_rate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\" *ngIf=\"isReceipts && frmData.currency_code != 'VND'\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.currency_rate }} {{ _translate.VALIDATION.required }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n          </dxi-item>\r\n\r\n          <!-- hóa đơn kiêm phiếu thu tiền -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" *ngIf=\"!isReceipts\">\r\n            <!-- Hình thức thanh toán-->\r\n            <dxi-item cssClass=\"max_left\" dataField=\"payment_method_name\" editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: select.payment_method_names,onValueChanged: paymentMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payment_method }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.payment_method }} {{ _translate.VALIDATION.required }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n            <!-- Hình thức xuất -->\r\n            <dxi-item name=\"ht-xuat\" cssClass=\"max_right\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.export_form }}\"></dxo-label>\r\n              <div *dxTemplate>\r\n                <dx-select-box [(value)]=\"frmData.status\" displayExpr=\"name\" valueExpr=\"code\" [items]=\"htXuatOptions\">\r\n                </dx-select-box>\r\n              </div>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <!-- Tỉ lệ miễn giảm HP/Năm học -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" *ngIf=\"!isReceipts\">\r\n            <!-- Tỷ lệ miễn giảm HP -->\r\n            <dxi-item dataField=\"student_reduce_rate_code\" editorType=\"dxSelectBox\" cssClass=\"max_left\"\r\n              [editorOptions]=\"{items: select.student_reduce_rate_codes,onValueChanged: reduceMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.exemption_and_reduction_rates }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.exemption_and_reduction_rates }} {{ _translate.VALIDATION.required }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n            <!-- Năm học -->\r\n            <dxi-item dataField=\"study_year\" editorType=\"dxSelectBox\" cssClass=\"max_right\"\r\n              [editorOptions]=\"{items: select.arrayYears,onValueChanged: yearMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.study_year }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.study_year }} {{ _translate.VALIDATION.required }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n          </dxi-item>\r\n\r\n          <!-- Phiếu thu -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" *ngIf=\"isReceipts\">\r\n            <!-- Hình thức thanh toán-->\r\n            <dxi-item dataField=\"payment_method_name\" editorType=\"dxSelectBox\" cssClass=\"max_left\"\r\n              [editorOptions]=\"{items: select.payment_method_names,onValueChanged: paymentMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payment_method }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.payment_method }} {{ _translate.VALIDATION.required }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n            <!-- Tỷ lệ miễn giảm HP -->\r\n            <dxi-item dataField=\"student_reduce_rate_code\" editorType=\"dxSelectBox\" cssClass=\"max_right\"\r\n              [editorOptions]=\"{items: select.student_reduce_rate_codes,onValueChanged: reduceMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.exemption_and_reduction_rates }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.exemption_and_reduction_rates }} {{ _translate.VALIDATION.required }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <!-- Năm học -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" *ngIf=\"isReceipts\">\r\n            <dxi-item dataField=\"study_year\" cssClass=\"max_left\" editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: select.arrayYears,onValueChanged: yearMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.study_year }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.study_year }} {{ _translate.VALIDATION.required }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <app-form-extend [disableForm]=\"ttDaXuatHoaDon\" [formData]=\"frmData\" [customerTempt]=\"customerTempt\"\r\n              [formItems]=\"formItems\" [typeOptions]=\"'invoice_options'\"></app-form-extend>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n    <!-- <dx-form style=\"margin-top:7px\" [formData]=\"customerTempt\" [items]=\"formItems\" class=\"customer-tempt\">\r\n    </dx-form> -->\r\n  </div>\r\n</div>\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"Thông báo\" [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{_translate.CONFIRM.update_customer}}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"capNhatDmKhachHang()\" text=\"{{_translate.CONTROLL.LABEL.update}}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{_translate.CONTROLL.BUTTON.cancel}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/form-student-invoive/form-student-invoive.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/form-student-invoive/form-student-invoive.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-size{font-size:21px;padding:2px 0}.button-tax-code{background:#337ab7;color:#fff;border-color:transparent;border:none}.button-tax-code:focus{outline:none}::ng-deep .layout_input_left span.dx-field-item-label-content{width:144px !important}::ng-deep .customer-tempt .dx-layout-manager .dx-label-h-align .dx-field-item-label .dx-field-item-label-content{min-width:171px !important}\n"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/form-student-invoive/form-student-invoive.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/form-student-invoive/form-student-invoive.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: FormStudentInvoiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStudentInvoiveComponent", function() { return FormStudentInvoiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/components/form-extend/form-extend.component */ "./src/app/shared/components/form-extend/form-extend.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
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
















// import { injectTemplateRef } from '@angular/core/src/render3';


var FormStudentInvoiveComponent = /** @class */ (function () {
    function FormStudentInvoiveComponent(authService, route, modalService, vatService, translate, customersService, http, listService) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.modalService = modalService;
        this.vatService = vatService;
        this.translate = translate;
        this.customersService = customersService;
        this.http = http;
        this.listService = listService;
        this.ttDaXuatHoaDon = false;
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onStudyYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRedueFeeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTT78TypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = {};
        this.pattern = _config_index__WEBPACK_IMPORTED_MODULE_8__["pattern"];
        this.tax_codes = [];
        this.customer_codes = [];
        this.showTraLai = false;
        this.disableInvoiceDate = this.authService.isAllowEditInvoiceDate();
        this.htXuatOptions = [];
        this.showPopup = false;
        this.customerCurent = {};
        this.emails = [];
        this.configs = {};
        this.arrEmail = [];
        this.isReceipts = false;
        // thay đổi disable của 3 input customer_name, buyer_name, buyer_address
        this.tod = {};
        this.formItems = [];
        this.customForms = [];
        this.customerTempt = {};
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"]({
                'Authorization': "Bearer " + JSON.parse(localStorage.getItem('access_token')).value,
                'TaxCode': JSON.parse(localStorage['currentUser']).account.tax_code,
                'Content-Type': 'application/json',
            })
        };
        this.mst_btn_options = {
            text: '', icon: 'fa fa-plus-circle', type: 'default',
            onClick: function () {
                var initialState = {
                    isVisibleGhiVaThemMoi: false
                };
                _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_10__["AddCustomerComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                var submodal = _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveData) {
                        var customer = _this.bsModalRef.content.successSaveData;
                        _this.frmData.customer_name = customer.name;
                        _this.frmData.buyer_tax_code = customer.tax_code;
                        _this.frmData.buyer_name = customer.contact_person_name;
                        _this.frmData.buyer_address = customer.business_address;
                        _this.frmData.customer_code = customer.code;
                        _this.frmData.buyer_mobile = customer.contact_mobile;
                        if (customer.email) {
                            _this.frmData.buyer_email = customer.email;
                            _this.emails = [];
                            var stringDataEmailGet = customer.email.split(';');
                            for (var i = 0; i < stringDataEmailGet.length; i++) {
                                _this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
                            }
                        }
                        else {
                            _this.frmData.buyer_email = customer.email;
                            _this.emails = [];
                        }
                        if (customer.bank_account_number) {
                            _this.frmData.bank_account_number = customer.bank_account_number;
                        }
                        if (customer.bank_name) {
                            _this.frmData.bank_name = customer.bank_name;
                        }
                    }
                    submodal.unsubscribe();
                });
            }
        };
        this.yearMethodChange = function (e) {
            _this.select.arrayYears.forEach(function (item) {
                if (e.value === item.code) {
                    _this.onStudyYearChange.emit(item);
                }
            });
        };
        // sự kiện
        this.templateChange = function (e) {
            _this.select.invoice_releases.forEach(function (item) {
                if (e.value === item.value) {
                    _this.frmData.template_id = item.template_id;
                    _this.onTemplateChange.emit(item.is_multi_vat);
                    _this.onTemplateTypeChange.emit(item);
                    for (var key in item) {
                        if (item.hasOwnProperty(key)) {
                            var value = item[key];
                            _this._objTemplateSelect[key] = value;
                        }
                    }
                    if (!_this._objTemplateSelect.is_discount) {
                        _this.dataSource.items().forEach(function (item3) {
                            item3.discount = null;
                            item3.amount_discount = null;
                        });
                        _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._objTemplateSelect, _this.configs.system_parameter);
                        if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBay
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonXangDau) {
                            _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyTicket(_this.frmData, _this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type));
                        }
                    }
                    // Nếu là mẫu html
                    if (item.fields) {
                        _this.formItems = [];
                        _this.customForms = [];
                        var _arrayGrid = item.fields.filter(function (x) { return x.type === '5'; });
                        if (_arrayGrid && _arrayGrid.length > 0) {
                            _this.extentionGrid.ma_hang = false;
                            _this.extentionGrid.so_lo = false;
                            _this.extentionGrid.han_dung = false;
                            _this.extentionGrid.nuoc_san_xuat = false;
                            for (var i = 0; i < _arrayGrid.length; i++) {
                                var column = _arrayGrid[i]['name'];
                                var value = _arrayGrid[i]['is_show'];
                                var _ma = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._convertToViKdau(column);
                                _this.extentionGrid[_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._convertToViKdau(column)] = value;
                            }
                        }
                    }
                    else {
                        _this.formItems = [];
                        _this.customerTempt = {};
                        _this.extentionGrid.ma_hang = false;
                        _this.extentionGrid.so_lo = false;
                        _this.extentionGrid.han_dung = false;
                        _this.extentionGrid.nuoc_san_xuat = false;
                    }
                }
            });
        };
        this.onChangeTem = function (e) {
            _this.select.templatesTT78.forEach(function (item) {
                if (e.value === item.value) {
                    _this.frmData.invoice_release_id = "";
                    _this.frmData.template_id = item.value;
                    _this.frmData.invoice_series = item.invoice_series;
                    _this.frmData.template_code = item.template_code;
                    _this.onTemplateChange.emit(item.is_multi_vat);
                    _this.onTemplateTT78TypeChange.emit(item);
                    for (var key in item) {
                        if (item.hasOwnProperty(key)) {
                            var value = item[key];
                            _this._oTemplateTT78[key] = value;
                        }
                    }
                    if (!_this._oTemplateTT78.is_discount) {
                        _this.invoice_products.load().then(function (dataSource) {
                            dataSource.forEach(function (item, index) {
                                item.discount = null;
                                item.amount_discount = null;
                            });
                        });
                        _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._oTemplateTT78, _this.configs.system_parameter);
                        if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBay
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonXangDau) {
                            _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyTicket(_this.frmData, _this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type));
                        }
                    }
                    // Nếu là mẫu html
                    _this.formDuLieuMoRong(item);
                }
            });
        };
        this.currencyCodeChange = function (e) {
            if (_this.frmData.currency_code === 'VND') {
                _this.frmData.currency_rate = null;
            }
            _this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].tienBangChu(_this.frmData.total_payment, _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien), _this.frmData.currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        this.currencyRateChange = function (e) {
            if (!_this.isTT78)
                _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._objTemplateSelect, _this.configs.system_parameter);
            else
                _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._oTemplateTT78, _this.configs.system_parameter);
        };
        this.paymentMethodChange = function (e) {
            var _obj = _this.select.payment_method_names.filter(function (p) { return p.code === e.value; })[0];
            if (_obj) {
                _this.frmData.payment_method_view_name = _obj.name;
            }
        };
        this.reduceMethodChange = function (e) {
            _this.select.student_reduce_rate_codes.forEach(function (item) {
                if (e.value === item.code) {
                    _this.onRedueFeeChange.emit(item);
                }
            });
        };
        this.changeDateTime = function (e) {
            _this.changeTemplateInvoice(e.value);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    FormStudentInvoiveComponent.prototype.ngAfterViewInit = function () {
        this.formDuLieuMoRong(this.template_temp);
    };
    FormStudentInvoiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.htXuatOptions = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._htXuatOptions(this._translate, this.frmData.status);
        this.role_branch = this.listService.getDataConfigLocalStorage();
        var loaiHoaDon = this.route.snapshot.data.type;
        if (loaiHoaDon === '08HSPT') {
            this.isReceipts = true;
        }
        if (this.route.snapshot.queryParams['status'] === 'return') {
            this.showTraLai = true;
            this.frmData.nguoitralai = this.authService.getCurrentUser().user.name;
            this.frmData.ngaytralai = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
        }
        this.routeSub = this.route.data.subscribe(function (data) {
            _this.configs = _this.authService.getConfigs();
            // put data DM for select
            var danh_muc = _this.authService.getDMLocal();
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            _this.select.student_reduce_rate_codes = danh_muc.DM_TY_LE_MIEN_GIAM_HOC_PHI ? danh_muc.DM_TY_LE_MIEN_GIAM_HOC_PHI.data : null;
            _this.select.currency_codes = danh_muc.DM_LOAI_TIEN ? danh_muc.DM_LOAI_TIEN.data : null;
            _this.select.export_places = danh_muc.DM_NOI_XUAT_HOA_DON ? danh_muc.DM_NOI_XUAT_HOA_DON.data : null;
            _this.select.list_bank_account_seller = danh_muc.DM_TAI_KHOAN_NGAN_HANG ? danh_muc.DM_TAI_KHOAN_NGAN_HANG.data : null;
            _this.select.list_bank_account_seller.forEach(function (item) {
                item.name_display = item.code + ': ' + item.name;
            });
            if (_this.isTT78 || loaiHoaDon === '08HSPT') {
                var temptTT78 = [];
                if (!_this.frmData.id) {
                    temptTT78 = data.init[1];
                }
                else {
                    temptTT78 = data.init[3];
                }
                if (temptTT78 && temptTT78.length > 0) {
                    if (!_this.isReceipts)
                        _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
                    else
                        _this.select.templatesTT78 = temptTT78;
                    if (Number.parseInt(_this.frmData.invoice_number) > 0) {
                        if (_this.frmData.is_invoice_with_code != _this.infoDangKy.is_invoice_with_code) {
                            _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.frmData.is_invoice_with_code; });
                        }
                    }
                }
                if (_this.frmData.id)
                    _this.changeTemplateInvoice(_this.frmData.invoice_date);
            }
            else {
                _this.select.invoice_releases = data.init[0];
                if (!_this.frmData.id) {
                    _this.select.invoice_releases = _this.select.invoice_releases.filter(function (p) { return p.number_survival > 0 && p.release_status != 'DA_HUY_SO'; });
                }
            }
            var a = moment__WEBPACK_IMPORTED_MODULE_2__();
            var currentUser = _this.authService.getCurrentUser();
            _this.select.arrayYears = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].listYears(currentUser.account.start_time_study, a);
        });
        this.select.adjustment_forms = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._adjustmentForms(this._translate);
        this.select.adjustment_objects = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._adjustmentObjects(this._translate);
        // Set disabled cho đơn vị tổ chức
        this.setDisabledByCustomer_object_code(this.frmData.customer_object_code);
        // tìm kiếm mã số thuế
        this.tax_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'tax_code');
            }
        });
        // // tìm kiếm mã khách hàng
        this.customer_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'code');
            }
        });
        if (!this.isTT78 && !this.isReceipts) {
            this.select.invoice_releases.forEach(function (item) {
                if (item.template_id === _this.frmData.template_id) {
                    // Nếu là mẫu html
                    _this.template_temp = item;
                }
            });
        }
        else {
            this.select.templatesTT78.forEach(function (item) {
                if (item.value === _this.frmData.template_id) {
                    // Nếu là mẫu html
                    _this.frmData.invoice_release_id = "";
                    _this.template_temp = item;
                }
            });
        }
        if (this.frmData.buyer_email) {
            this.emails = [];
            var emailToString = this.frmData.buyer_email;
            var a11 = emailToString.replace(/;/g, ',');
            this.emails = a11.split(',');
        }
    };
    // createForm() {
    //   this.form.instance.beginUpdate();
    //   this.form.instance.itemOption('business_addressa', { label: { text: 'Đia chỉaaa' }, editorOptions: { placeholder: 'Nhập địa chỉ' } });
    //   this.form.instance.endUpdate();
    // }
    FormStudentInvoiveComponent.prototype.editTaxCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var roleUser, _a, _b, initialState, submodal;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.listRoleBranchOrigin = [];
                        if (!this.role_branch) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.listService.getDataUserLocalStorege()];
                    case 1:
                        roleUser = _c.sent();
                        if (!roleUser) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.handleListRoleBranch(roleUser)];
                    case 2:
                        _a.listRoleBranchOrigin = _c.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        _b = this;
                        return [4 /*yield*/, this.listService.handleListRoleBranchUser()];
                    case 4:
                        _b.listRoleBranchOrigin = _c.sent();
                        _c.label = 5;
                    case 5:
                        if (Array.isArray(this.listRoleBranchOrigin) && this.listRoleBranchOrigin.length) {
                            if (this.listRoleBranchOrigin.length === 2) {
                                this.listRoleBranchOrigin = this.listRoleBranchOrigin.filter(function (value) {
                                    if (value.code !== 'TAT_CA') {
                                        value.checked = true;
                                        return value;
                                    }
                                });
                            }
                        }
                        _c.label = 6;
                    case 6:
                        initialState = {
                            isVisibleGhiVaThemMoi: false,
                            role_branch: this.role_branch,
                            roleBranchStatus: this.listRoleBranchOrigin
                        };
                        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_10__["AddCustomerComponent"], {
                            class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                            keyboard: false
                        });
                        submodal = this.modalService.onHide.subscribe(function () {
                            if (_this.bsModalRef.content.successSaveData) {
                                var customer = _this.bsModalRef.content.successSaveData;
                                _this.frmData.customer_name = customer.name;
                                _this.frmData.buyer_tax_code = customer.tax_code;
                                _this.frmData.buyer_name = customer.contact_person_name;
                                _this.frmData.buyer_address = customer.business_address;
                                _this.frmData.customer_code = customer.code;
                                _this.frmData.buyer_mobile = customer.contact_mobile;
                                if (customer.email) {
                                    _this.frmData.buyer_email = customer.email;
                                    _this.emails = [];
                                    var stringDataEmailGet = customer.email.split(';');
                                    for (var i = 0; i < stringDataEmailGet.length; i++) {
                                        _this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
                                    }
                                }
                                else {
                                    _this.frmData.buyer_email = customer.email;
                                    _this.emails = [];
                                }
                                if (customer.bank_account_number) {
                                    _this.frmData.bank_account_number = customer.bank_account_number;
                                }
                                if (customer.bank_name) {
                                    _this.frmData.bank_name = customer.bank_name;
                                }
                            }
                            submodal.unsubscribe();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ////// Tạo form mở rộng
    FormStudentInvoiveComponent.prototype.createCustomGroup = function () {
        return {
            itemType: 'group',
            colCount: '2',
            items: this.customForms
        };
    };
    /////// sự kiện thay đổi các trường mở rộng
    FormStudentInvoiveComponent.prototype.changeItem = function (_dulieumorong) {
        var _this = this;
        _dulieumorong.forEach(function (item) {
            for (var key in _this.customerTempt) {
                if (item.code === key) {
                    item.value = _this.customerTempt[key];
                }
            }
            _this.frmData.invoice_options = _dulieumorong;
        });
    };
    FormStudentInvoiveComponent.prototype.handleListRoleBranch = function (roleUser) {
        return __awaiter(this, void 0, void 0, function () {
            var arrList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listService.handleGetDMtoCustomer(roleUser)];
                    case 1:
                        arrList = _a.sent();
                        if (Array.isArray(arrList) && arrList.length) {
                            return [2 /*return*/, this.listService.handleCheckAll(arrList)];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    FormStudentInvoiveComponent.prototype.disableTemplateInput = function () {
        if (this.frmData.invoice_number) {
            return true;
        }
        return false;
    };
    FormStudentInvoiveComponent.prototype.formDuLieuMoRong = function (item) {
        var _this = this;
        this.customForms = [];
        this.customerTempt = {};
        _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].resetObject(this.formItems);
        if (item.fields && item.fields.length > 0) {
            var _arrayGrid = item.fields.filter(function (x) { return x.type === '5'; });
            if (_arrayGrid && _arrayGrid.length > 0) {
                this.extentionGrid.ma_hang = false;
                this.extentionGrid.so_lo = false;
                this.extentionGrid.han_dung = false;
                this.extentionGrid.nuoc_san_xuat = false;
                this.extentionGrid.don_hang_hop_dong = false;
                this.extentionGrid.ma_quan_ly = false;
                for (var i = 0; i < _arrayGrid.length; i++) {
                    var column = _arrayGrid[i]['name'];
                    var value = _arrayGrid[i]['is_show'];
                    var _ma = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._convertToViKdau(column);
                    this.extentionGrid[_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._convertToViKdau(column)] = value;
                }
            }
            var _dulieumorong = lodash__WEBPACK_IMPORTED_MODULE_17__["cloneDeep"](item.fields).filter(function (x) { return x.type === '4'; });
            var invoice_options_1 = this.frmData.invoice_options;
            if (invoice_options_1.length > 0) {
                _dulieumorong = _dulieumorong.map(function (dl) {
                    var option = invoice_options_1.find(function (x) { return x.code == dl.code; });
                    if (option) {
                        dl.value = option.value;
                    }
                    return dl;
                });
            }
            this.frmData.invoice_options = _dulieumorong;
            if (_dulieumorong.length > 0) {
                this.formExtend.createForm(this.customForms, _dulieumorong);
            }
            _dulieumorong.forEach(function (value) {
                _this.customerTempt[value.code] = value.value;
            });
        }
        else {
            this.frmData.invoice_options = [];
            this.extentionGrid.ma_hang = false;
            this.extentionGrid.so_lo = false;
            this.extentionGrid.han_dung = false;
            this.extentionGrid.nuoc_san_xuat = false;
            this.extentionGrid.don_hang_hop_dong = false;
            this.extentionGrid.ma_quan_ly = false;
        }
    };
    FormStudentInvoiveComponent.prototype.readonlyAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = true;
        });
        this.readOnlyCacTruongConLai = true;
    };
    FormStudentInvoiveComponent.prototype.removeReadonlyAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = false;
            // item.instance.resetValues();
        });
        this.readOnlyCacTruongConLai = false;
    };
    FormStudentInvoiveComponent.prototype.setDisabledByCustomer_object_code = function (value) {
        this.tod.customer_name = false;
        this.tod.buyer_name = false;
        this.tod.buyer_address = false;
        switch (value) {
            case 'DOANH_NGHIEP':
                break;
            case 'CA_NHAN':
                this.frmData.customer_name = '';
                this.tod.customer_name = true;
                break;
            case 'KHACH_LE':
                this.frmData.customer_name = '';
                this.frmData.buyer_address = '';
                this.tod.customer_name = true;
                this.tod.buyer_address = true;
                break;
            default:
                break;
        }
    };
    // gửi data lên parent component
    FormStudentInvoiveComponent.prototype.onFieldDataChanged = function () {
        this.formEvent.emit(this.frmData);
    };
    FormStudentInvoiveComponent.prototype.getHtXuatValue = function () {
        return this.frmData.status;
    };
    FormStudentInvoiveComponent.prototype.getFrmData = function () {
        return this.frmData;
    };
    FormStudentInvoiveComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    FormStudentInvoiveComponent.prototype.capNhatDmKhachHang = function () {
        var _this = this;
        this.customerCurent.tax_code = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.buyer_tax_code);
        this.customerCurent.name = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.customer_name);
        this.customerCurent.code = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.customer_code);
        this.customerCurent.contact_person_name = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.buyer_name);
        this.customerCurent.contact_mobile = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.buyer_mobile);
        this.customerCurent.business_address = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.buyer_address);
        this.customerCurent.email = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.buyer_email);
        this.customerCurent.bank_name = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.bank_name);
        this.customerCurent.bank_account_number = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.bank_account_number);
        var data = { customer: this.customerCurent };
        this.customersService.edit(data, this.customerCurent.id).subscribe(function (response) {
            if (response.status === 'success') {
                _this.showPopup = false;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(response.message, 'error');
            }
        }, function (err) {
        }, function () {
        });
    };
    FormStudentInvoiveComponent.prototype.huy = function () {
        this.showPopup = false;
    };
    // reset trường mở rộng
    FormStudentInvoiveComponent.prototype.resetTMR = function () {
        this.formExtend.resetForm();
        this.formExtend.resetOptions();
    };
    FormStudentInvoiveComponent.prototype.changeTemplateInvoice = function (strDate) {
        var _this = this;
        if (this.isTT78) {
            var year_1 = "";
            if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(strDate) != "")
                year_1 = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(strDate).substring(4, 2);
            else {
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                year_1 = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(invoiceDate).substring(4, 2);
            }
            var templates = this.select.templatesTT78;
            this.select.templatesTT78 = [];
            if (templates && templates.length > 0) {
                templates.forEach(function (item) {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(item.name) != "")
                        item.name = item.name.replace(item.name.substring(4, 2), year_1);
                    // for (const key in item) {
                    //   if (item.hasOwnProperty(key)) {
                    //     const value = item[key];
                    //     this._oTemplateTT78[key] = value;
                    //   }
                    // }
                    if (item.value === _this.frmData.template_id) {
                        _this.onTemplateTT78TypeChange.emit(item);
                        //  item.invoice_series = item.invoice_series.replace(item.invoice_series.substring(3, 1), year);
                        // this.frmData.invoice_series = item.invoice_series;
                        // this.frmData.template_code = item.template_code;
                    }
                    _this.select.templatesTT78.push(item);
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"]),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "listDxForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"])
    ], FormStudentInvoiveComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_16__["FormExtendComponent"]),
        __metadata("design:type", _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_16__["FormExtendComponent"])
    ], FormStudentInvoiveComponent.prototype, "formExtend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormStudentInvoiveComponent.prototype, "ttDaXuatHoaDon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "invoice_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "extentionGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onFormChange'),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "formEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateChange'),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "onTemplateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTypeChange'),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "onTemplateTypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onStudyYearChange'),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "onStudyYearChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onRedueFeeChange'),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "onRedueFeeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTT78TypeChange'),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "onTemplateTT78TypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormStudentInvoiveComponent.prototype, "isTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormStudentInvoiveComponent.prototype, "infoDangKy", void 0);
    FormStudentInvoiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-student-invoive',
            template: __webpack_require__(/*! ./form-student-invoive.component.html */ "./src/app/modules/student-invoice/components/form-student-invoive/form-student-invoive.component.html"),
            styles: [__webpack_require__(/*! ./form-student-invoive.component.scss */ "./src/app/modules/student-invoice/components/form-student-invoive/form-student-invoive.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_12__["CustomersService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_15__["ListsService"]])
    ], FormStudentInvoiveComponent);
    return FormStudentInvoiveComponent;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/components/index/index.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/index/index.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n    <app-search-advanced (searchContentChange)=\"getSearch($event)\" [isSearchStudent]=\"isSearchStudent\"\r\n      (objParamsExport)=\"getObjParams($event)\" [isReceipts]=\"isReceipts\">\r\n    </app-search-advanced>\r\n  </div>\r\n  <div class=\"col-md-4\" style=\"max-height: 70px\">\r\n    <div class=\"list-header row\">\r\n      <div class=\"col-md-12\">\r\n        <div *ngIf=\"isListHeader\" class=\"pull-right button-panel\">\r\n          <dx-button (click)=\"lapHoaDon()\" [(icon)]=\"_translate.ICONS.plus\"\r\n            text=\"{{ 'CONTROLL.BUTTON.create_invoice' | translate }}\" type=\"default\" *ngIf=\"!isReceipts\"></dx-button>\r\n          <dx-button (click)=\"lapHoaDon()\" [(icon)]=\"_translate.ICONS.plus\"\r\n            text=\"{{ 'CONTROLL.BUTTON.create_repceipt' | translate }}\" type=\"default\" *ngIf=\"isReceipts\"></dx-button>\r\n          <!-- <dx-button (click)=\"lapHoaDon()\" [(icon)]=\"_translate.ICONS.plus\"\r\n            text=\"{{ 'CONTROLL.LABEL.export_data' | translate }}\" type=\"default\" *ngIf=\"isReceipts\"></dx-button> -->\r\n          <dx-button *ngIf=\"taxCodeThueHCM.includes(currentUser.account.tax_code) && !isReceipts\" (click)=\"taiHDXml()\"\r\n            [(icon)]=\"_translate.ICONS.xml\" text=\"{{ 'CONTROLL.BUTTON.tai_hd_xml' | translate }}\" type=\"default\">\r\n          </dx-button>\r\n          <!-- <dx-button (click)=\"edit()\" icon=\"assets\\img\\icons\\Sua.png\" text=\"{{ 'CONTROLL.BUTTON.edit' | translate }}\" type=\"default\" [disabled]=\"!(selectedRows.length == 1) && disEditMulti\"></dx-button> -->\r\n          <!-- <dx-button (click)=\"delete()\" icon=\"assets\\img\\icons\\Xoa.png\" text=\"Xóa\" type=\"default\" [disabled]=\"!selectedRows.length\"></dx-button> -->\r\n          <dx-button *ngIf=\"isAccessExportInv && configs.system_parameter.allow_keep_invoice_number && !isReceipts\"\r\n            [(icon)]=\"_translate.ICONS.pencil\" (click)=\"kyHangLoat()\" text=\"{{ 'CONTROLL.BUTTON.sign' | translate }}\"\r\n            type=\"default\" [disabled]=\"!selectedRows.length\"></dx-button>\r\n          <!-- <dx-button (click)=\"giuSo()\" icon=\"assets\\img\\icons\\Xoa.png\" text=\"Giữ số\" type=\"default\"></dx-button> -->\r\n          <dx-menu *ngIf=\"test && !isReceipts\" [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\"\r\n            submenuDirection=\"auto\" (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n          <dx-menu *ngIf=\"test && isReceipts\" [dataSource]=\"extrasextrasReceipts\" displayExpr=\"name\"\r\n            orientation=\"horizontal\" submenuDirection=\"auto\" (onItemClick)=\"itemExtrasClick($event)\"\r\n            cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n        </div>\r\n\r\n        <div *ngIf=\"!isListHeader\" class=\"pull-right button-panel\">\r\n\r\n          <dx-menu style=\"margin-right: 8px!important;\" *ngIf=\"test\" [dataSource]=\"dataAddInvoiceBuy\" displayExpr=\"name\"\r\n            orientation=\"horizontal\" submenuDirection=\"auto\" (onItemClick)=\"itemExtrasClick($event)\"\r\n            cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n\r\n          <dx-button *ngIf=\"isAccessExportInv\" [(icon)]=\"_translate.ICONS.pencil\" (click)=\"kyHangLoat()\"\r\n            text=\"{{ 'CONTROLL.BUTTON.delete' | translate }}\" type=\"default\" [disabled]=\"!selectedRows.length\">\r\n          </dx-button>\r\n          <dx-menu *ngIf=\"test\" [dataSource]=\"data_extras_invoice_buy\" displayExpr=\"name\" orientation=\"horizontal\"\r\n            submenuDirection=\"auto\" (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerStudent\" [dataSource]=\"dataSourceBatch\" [showRowLines]=\"true\"\r\n  (onCellClick)=\"onCellClickBatch($event)\" [showColumnHeaders]=\"false\" [showBorders]=\"true\"\r\n  (onRowPrepared)=\"onRowPreparedBatch($event)\">\r\n  <dxo-master-detail [enabled]=\"true\" template=\"masterDetail\"></dxo-master-detail>\r\n  <dxo-sorting mode=\"single\"></dxo-sorting>\r\n  <!-- <dxo-filter-row [visible]=\"true\"></dxo-filter-row> -->\r\n  <!-- <dxo-selection mode=\"multiple\"></dxo-selection> -->\r\n  <dxi-column [visible]=\"false\" dataField=\"date_batch\" sortOrder=\"desc\"></dxi-column>\r\n  <dxi-column cellTemplate=\"displaybatch\" sortOrder=\"desc\" dataField=\"code\" caption=\"Mã đợt xuất\"></dxi-column>\r\n\r\n  <div *dxTemplate=\"let d of 'displaybatch'\">\r\n    <div *ngIf=\"!isReceipts\">\r\n      <span (click)=\"LoadInvoiceByBatchId(d.data)\">Đợt xuất: {{ d.data.code }} - Ngày HĐ {{d.data.date_batch }} </span>\r\n      <span *ngIf=\"d.data.count_da_xuat > 0 \">({{d.data.count_da_xuat}} hóa đơn đã xuất)</span>\r\n      <a class=\"cho-ky-hd\" (click)=\"suaHDGIUSO(d.data)\" *ngIf=\"d.data.count_giu_so >0 \"\r\n        href=\"javascript:void(0)\">({{d.data.count_giu_so}} hóa đơn chờ ký)</a>\r\n      <a class=\"ky-loi-hd\" (click)=\"suaHDXUATLOI(d.data)\" *ngIf=\"d.data.count_xuat_loi >0 \"\r\n        href=\"javascript:void(0)\">({{d.data.count_xuat_loi}} hóa đơn ký lỗi)</a>\r\n      <a class=\"ghi-tam-hd\" (click)=\"suaHDGHITAM(d.data)\" *ngIf=\"d.data.count_ghi_tam >0 \"\r\n        href=\"javascript:void(0)\">({{d.data.count_ghi_tam}} hóa đơn ghi tạm)</a>\r\n      <a class=\"ky-loi-hd\" (click)=\"suaHDGHITAM(d.data)\" *ngIf=\"d.data.count_khong_cap_ma >0 \"\r\n        href=\"javascript:void(0)\">({{d.data.count_khong_cap_ma}} hóa đơn không đủ ĐK cấp mã)</a>\r\n      <a class=\"da-gui-cap-ma\" (click)=\"suaHDGHITAM(d.data)\" *ngIf=\"d.data.count_cho_cap_ma >0 \"\r\n        href=\"javascript:void(0)\">({{d.data.count_cho_cap_ma}} hóa đơn đã gửi để cấp mã)</a>\r\n    </div>\r\n    <div *ngIf=\"isReceipts\">\r\n      <span (click)=\"LoadInvoiceByBatchId(d.data)\">Đợt xuất: {{ d.data.code }} - Ngày PT {{d.data.date_batch }} </span>\r\n      <span *ngIf=\"d.data.count_da_xuat > 0 \">({{d.data.count_da_xuat}} phiếu thu đã xuất)</span>\r\n      <a class=\"cho-ky-hd\" (click)=\"suaHDGIUSO(d.data)\" *ngIf=\"d.data.count_giu_so >0 \"\r\n        href=\"javascript:void(0)\">({{d.data.count_giu_so}} phiếu thu chờ ký)</a>\r\n      <a class=\"ky-loi-hd\" (click)=\"suaHDXUATLOI(d.data)\" *ngIf=\"d.data.count_xuat_loi >0 \"\r\n        href=\"javascript:void(0)\">({{d.data.count_xuat_loi}} phiếu thu ký lỗi)</a>\r\n      <a class=\"ghi-tam-hd\" (click)=\"suaHDGHITAM(d.data)\" *ngIf=\"d.data.count_ghi_tam >0 \"\r\n        href=\"javascript:void(0)\">({{d.data.count_ghi_tam}} phiếu thu ghi tạm)</a>\r\n      <a class=\"ky-loi-hd\" (click)=\"suaHDGHITAM(d.data)\" *ngIf=\"d.data.count_khong_cap_ma >0 \"\r\n        href=\"javascript:void(0)\">({{d.data.count_khong_cap_ma}} phiếu thu không đủ ĐK cấp mã)</a>\r\n      <a class=\"da-gui-cap-ma\" (click)=\"suaHDGHITAM(d.data)\" *ngIf=\"d.data.count_cho_cap_ma >0 \"\r\n        href=\"javascript:void(0)\">({{d.data.count_cho_cap_ma}} phiếu thu đã gửi để cấp mã)</a>\r\n    </div>\r\n  </div>\r\n  <div *dxTemplate=\"let masterDetailItem of 'masterDetail'\">\r\n\r\n    <dx-data-grid id=\"gridContainerVat\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n      [showBorders]=\"true\" [showRowLines]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\"\r\n      [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n      (onContentReady)=\"onContentReady($event)\">\r\n      <!-- <dxo-scrolling mode=\"virtual\"></dxo-scrolling> -->\r\n      <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n      </dxo-selection>\r\n      <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"vat\"></dxo-state-storing> -->\r\n      <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n      <dxo-sorting mode=\"single\"></dxo-sorting>\r\n      <dxo-selection mode=\"multiple\" selectAllMode=\"{{pageSelect}}\"></dxo-selection>\r\n      <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n      <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\" *ngIf=\"!isReceipts\"\r\n        caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" width=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n        alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n      <!-- số phiếu thu -->\r\n      <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\" *ngIf=\"isReceipts\"\r\n        caption=\"{{ 'GRID.INVOICE.receipts_number' | translate }}\" width=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n        alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n      <dxi-column cellTemplate=\"templateCode\"\r\n        caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n        width=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\"></dxi-column>\r\n      <!-- <dxi-column dataField=\"template.invoice_series\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" [width]=\"79\" alignment=\"center\" [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column> -->\r\n      <dxi-column dataField=\"invoice_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\" *ngIf=\"!isReceipts\"\r\n        width=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n        format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n      <!-- Ngày lập -->\r\n      <dxi-column dataField=\"invoice_date\" caption=\"Ngày lập\" width=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\"\r\n        [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\" format=\"dd/MM/yyyy\" *ngIf=\"isReceipts\"\r\n        dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n\r\n      <dxi-column dataField=\"class_name\" caption=\"{{ 'CONTROLL.LABEL.class' | translate }}\"\r\n        width=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n      </dxi-column>\r\n\r\n      <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'CONTROLL.LABEL.name_student' | translate }}\"\r\n        alignment=\"left\"></dxi-column>\r\n      <dxi-column dataField=\"total_payment\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" dataType=\"number\"\r\n        format=\"0,###.##\" alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\"\r\n        width=\"{{_translate.GRID_WIDTH.tong_tien}}\"></dxi-column>\r\n      <!-- Trạng thái gửi CQT -->\r\n      <dxi-column *ngIf=\"isTT78 && !isReceipts\" cellTemplate=\"statusSendTax\" caption=\"Trạng thái gửi CQT\"\r\n        minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column cellTemplate=\"actionEmail\" caption=\"{{ 'GRID.INVOICE.send_email_status' | translate }}\"\r\n        width=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\"></dxi-column>\r\n      <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\"\r\n        width=\"{{_translate.GRID_WIDTH.hanh_dong}}\" alignment=\"center\"></dxi-column>\r\n      <div *dxTemplate=\"let d of 'templateCode'\">\r\n        <p>{{ d.data.template_code }}</p>\r\n        <p>{{ d.data.invoice_series }}</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n        <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}\r\n          <span *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'customerName'\">\r\n        <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.student_name }}</p>\r\n        <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.student_name || _translate.GRID.INVOICE.invoice_wait_for_sign }}\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'actionEmail'\">\r\n        <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status !='GIU_SO'\"\r\n          class=\"chua-gui-khach-hang gach-chan\" (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{\r\n          'GRID.INVOICE.un_sent' | translate }}</a>\r\n        <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status =='GIU_SO'\" class=\"cho-ky\"\r\n          (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_sign' | translate }}</a>\r\n        <a *ngIf=\"d.data.send_email_status == 'DA_GUI'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n          href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_it' | translate }}</a>\r\n        <a *ngIf=\"d.data.send_email_status == 'DA_NHAN'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n          href=\"javascript:void(0)\">{{ 'GRID.INVOICE.received' | translate }}</a>\r\n        <p *ngIf=\"!d.data.send_email_status\" href=\"javascript:void(0)\">{{ trangthaihoadon(d.data) }} <a\r\n            *ngIf=\"trangthaihoadon(d.data) == 'Lỗi ký HD' || trangthaihoadon(d.data) == 'Signed error'\"\r\n            class=\"gach-chan\" (click)=\"editNotSelect(d.data)\" href=\"javascript:void(0)\">({{ 'GRID.INVOICE.re_sign' |\r\n            translate }})</a></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n        <a *ngIf=\"d.data.send_department_status == 'DA_GUI_CQT' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n          href=\"javascript:void(0)\">Đã gửi để cấp mã</a>\r\n        <a *ngIf=\"d.data.send_department_status == 'DA_CAP' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n          href=\"javascript:void(0)\">Đã cấp mã</a>\r\n        <a *ngIf=\"d.data.send_department_status == 'KHONG_DU_DK_CAP_MA' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n          href=\"javascript:void(0)\" style=\"color: red;\" (click)=\"LydoKTiepNhan(d.data)\">Không đủ ĐK cấp mã</a>\r\n\r\n        <a *ngIf=\"d.data.send_department_status == 'CHUA_GUI_CQT' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n          href=\"javascript:void(0)\">Chưa gửi CQT</a>\r\n        <a *ngIf=\"d.data.send_department_status == 'DA_GUI_CQT' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n          href=\"javascript:void(0)\">Đã gửi CQT</a>\r\n        <a *ngIf=\"d.data.send_department_status == 'DA_TIEP_NHAN' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n          href=\"javascript:void(0)\">CQT đã tiếp nhận</a>\r\n        <a *ngIf=\"d.data.send_department_status == 'KHONG_HOP_LE' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n          href=\"javascript:void(0)\">CQT kiểm tra không hợp lệ </a>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'actionIcon'\">\r\n        <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n          href=\"javascript:void(0)\">\r\n        </a>\r\n        <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n          href=\"javascript:void(0)\">\r\n        </a>\r\n        <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n          href=\"javascript:void(0)\">\r\n        </a>\r\n        <!--        <a *ngIf=\"d.data.invoice_files.length>0\" title=\"{{_translate.CONTROLL.BUTTON.view_attach_file}}\"-->\r\n        <!--           class=\"attachIcon actionIcon\" (click)=\"viewAttachFile(d.data)\" href=\"javascript:void(0)\">-->\r\n        <!--        </a>-->\r\n        <div class=\"dropdown\" *ngIf=\"!isReceipts\">\r\n          <a title=\"{{_translate.CONTROLL.BUTTON.extend}}\" class=\"morongIcon actionIcon\" (click)=\"myFunction(d.data.id)\"\r\n            href=\"javascript:void(0)\"></a>\r\n          <div [id]=\"d.data.id\" class=\"dropdown-content\"\r\n            [ngClass]=\"{'last-drodown':( pageSize - 1 == d.rowIndex || pageSize - 2 == d.rowIndex || pageSize - 3 == d.rowIndex) && pageSize > 4, 'small-grid': pageSize < 5}\">\r\n            <a *ngIf=\"isAccessExportInv && configs.system_parameter.allow_keep_invoice_number\"\r\n              (click)=\"kyHangLoat(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.sign' | translate }} <i\r\n                [class]=\"_translate.ICONS.pencil\"></i></a>\r\n            <a (click)=\"inChuyenDoi(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.print_conversion' | translate\r\n              }}\r\n              <i [class]=\"_translate.ICONS.print\"></i></a>\r\n            <!-- <a (click)=\"copy(d.data)\" href=\"javascript:void(0)\">{{'CONTROLL.BUTTON.copy' | translate}}\r\n              <i [class]=\"_translate.ICONS.copy\"></i>\r\n            </a> -->\r\n            <!-- <a  (click)=\"viewAttachFile(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.view_attach_file' | translate }} <i [(class)]=\"_translate.ICONS.view_attach_file\"></i></a> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n        <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n      </div>\r\n\r\n      <dxo-summary>\r\n        <dxi-total-item summaryType=\"custom\" [customizeText]=\"customizeText\" showInColumn=\"total_payment\">\r\n        </dxi-total-item>\r\n      </dxo-summary>\r\n\r\n      <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n      </dxo-remote-operations>\r\n      <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n      <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100, 150]\" [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n      </dxo-pager>\r\n    </dx-data-grid>\r\n  </div>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n\r\n<app-download-pdf></app-download-pdf>\r\n"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/index/index.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/index/index.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.ghi-tam-hd{color:#DEA960}.cho-ky-hd{color:#008B8B}.ky-loi-hd{color:red}.da-gui-cap-ma{color:blue}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}.last-drodown{bottom:30px}.small-grid{position:fixed  !important;right:39px !important}::ng-deep #gridContainerVat .dx-cell-focus-disabled{overflow:visible !important}::ng-deep #gridContainerVat .dx-datagrid-rowsview{overflow:visible}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/index/index.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/index/index.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../send-invoices/send-invoices.component */ "./src/app/modules/student-invoice/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/modules/vat-shared/components/view-attach-file/view-attach-file.component */ "./src/app/shared/modules/vat-shared/components/view-attach-file/view-attach-file.component.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sign-many/sign-many.component */ "./src/app/modules/student-invoice/components/sign-many/sign-many.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/components/download-pdf/download-pdf.component */ "./src/app/shared/components/download-pdf/download-pdf.component.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
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
    function IndexComponent(authService, vatService, modalService, modalImportService, router, route, translate, socketService, spinner, vPreviewInvService) {
        this.authService = authService;
        this.vatService = vatService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.socketService = socketService;
        this.spinner = spinner;
        this.vPreviewInvService = vPreviewInvService;
        this.selectedRows = [];
        this.selectedItems = [];
        this.test = true;
        this.isAccessExportInv = true;
        this.invoice_releases = [];
        this.extras = [];
        this.extrasextrasReceipts = [];
        this.data_extras_invoice_buy = [];
        this.extend = [];
        this.wasInside = false;
        this.select = {};
        this.configs = {};
        this.disEditMulti = true;
        this.footerSum = {
            summary: '',
            summary_deduction: '',
        };
        this.clickCurent = '';
        this.dataAddInvoiceBuy = [];
        this.isShowInvoice = true;
        this.selectBatch = {};
        this.isSearchStudent = true;
        this.isReceipts = false;
        this.taxCodeThueHCM = ["0102519041-555"];
        this.isTT78 = false;
        this.isExistFormRelease = false;
        this.infoDangKy = {};
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.extras = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.extend,
                items: [
                    // {
                    //   id: "NAP_HD_TU_EXCEL",
                    //   name: this._translate.CONTROLL.BUTTON.import_invoice_from_excel,
                    //   icon: this._translate.ICONS.excel
                    // },
                    // {
                    //   id: 'NAP_HD_TU_EXCEL_DT',
                    //   name: this._translate.CONTROLL.BUTTON.import_invoice_from_excel,
                    //   icon: this._translate.ICONS.excel
                    // },
                    {
                        id: 'SUA',
                        name: this._translate.CONTROLL.BUTTON.edit,
                        icon: this._translate.ICONS.edit
                    },
                    {
                        id: 'XOA',
                        name: this._translate.CONTROLL.BUTTON.delete,
                        icon: this._translate.ICONS.delete
                    },
                    {
                        id: 'XEM',
                        name: this._translate.CONTROLL.BUTTON.view_invoice,
                        icon: this._translate.ICONS.view
                    }, {
                        id: 'INCHUYENDOI',
                        name: this._translate.CONTROLL.BUTTON.print_conversion,
                        icon: this._translate.ICONS.print
                    },
                    {
                        id: 'GUI_BEN_MUA',
                        name: this._translate.CONTROLL.LABEL.send_invoice,
                        icon: this._translate.ICONS.send_email
                    },
                    {
                        id: 'TAI_HD_PDF',
                        name: this._translate.CONTROLL.BUTTON.tai_hd_pdf,
                        icon: this._translate.ICONS.download
                    },
                ]
            }];
        this.extrasextrasReceipts = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.extend,
                items: [
                    {
                        id: 'SUA',
                        name: this._translate.CONTROLL.BUTTON.edit,
                        icon: this._translate.ICONS.edit
                    },
                    {
                        id: 'XOA',
                        name: this._translate.CONTROLL.BUTTON.delete,
                        icon: this._translate.ICONS.delete
                    },
                    {
                        id: 'XEM',
                        name: this._translate.CONTROLL.BUTTON.view_receipts,
                        icon: this._translate.ICONS.view
                    },
                    {
                        id: 'GUI_PHIEU_THU',
                        name: this._translate.CONTROLL.LABEL.send_receipts,
                        icon: this._translate.ICONS.send_email
                    },
                    {
                        id: 'TAI_HD_PDF',
                        name: this._translate.CONTROLL.BUTTON.tai_hd_pdf,
                        icon: this._translate.ICONS.download
                    },
                ]
            }];
        this.data_extras_invoice_buy = [{
                id: '1',
                name: this._translate.CONTROLL.LABEL.export_data,
                items: [
                    {
                        id: 'LIST_INVOICE_BUY',
                        name: this._translate.CONTROLL.LABEL.list_invoice_buy,
                        icon: this._translate.ICONS.excel
                    },
                    {
                        id: 'DETAILS_OF_EACH_GOODS_AND_SERVICE',
                        name: this._translate.CONTROLL.LABEL.details_of_each_goods_and_service,
                        icon: this._translate.ICONS.edit
                    },
                ]
            }];
        this.dataAddInvoiceBuy = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.add,
                items: [
                    {
                        id: 'ADD_ONE_INVOICE',
                        name: this._translate.CONTROLL.LABEL.add_one_invoice,
                        icon: this._translate.ICONS.add_new
                    },
                    {
                        id: 'ADD_MULTIPLE_INVOICE',
                        name: this._translate.CONTROLL.LABEL.add_multiple_invoice,
                        icon: this._translate.ICONS.add_new
                    },
                ]
            }];
        this.extend = [{
                id: '1',
                name: '',
                items: [
                    {
                        id: 'INCHUYENDOI',
                        name: this._translate.CONTROLL.BUTTON.print_conversion,
                        icon: 'assets/img/icons/In.png'
                    },
                ]
            }];
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.handleUI(this.route.snapshot.data.type);
        this.configs = this.authService.getConfigs();
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        this.currentUser = this.authService.getCurrentUser();
        if (!this.taxCodeThueHCM.includes(this.currentUser.account.tax_code)) {
            this.extras[0].items.push({ id: "TAI_HD_XML", name: this._translate.CONTROLL.BUTTON.tai_hd_xml, icon: this._translate.ICONS.xml });
        }
        this.vatService.isCopy = false;
        this.vatService.data = null;
        var listpermissions = this.currentUser.user.permissions.split(',');
        var _obj = listpermissions.filter(function (p) { return p === 'phe_duyet'; });
        if (_obj.length > 0) {
            this.isAccessExportInv = true;
        }
        else {
            this.isAccessExportInv = false;
        }
        if (this.currentUser.is_convert_TT78) {
            this.infoDangKy = this.authService.getInfoRegister();
            if (this.infoDangKy && this.infoDangKy.id) {
                if (this.infoDangKy.status == "CHAP_NHAN") {
                    this.isTT78 = true;
                    var infoFormRelease = this.authService.getInfoFormRelease();
                    if (infoFormRelease && infoFormRelease.invoice_releases && infoFormRelease.invoice_releases.length > 0) {
                        var invoicesReleases = infoFormRelease.invoice_releases.filter(function (p) { return (parseInt(p.amount) - parseInt(p.used_amount)) > 0; });
                        if (invoicesReleases && invoicesReleases.length > 0)
                            this.isExistFormRelease = true;
                    }
                }
            }
        }
        else {
            // if (localStorage.getItem('new_member')) {
            //   Library.notify(this._translate.NOTIFY.you_must_create_a_release_notice_before_invoicing, 'warning');
            // }
        }
    };
    IndexComponent.prototype.handleUI = function (value) {
        if (value === '03GTKT') {
            this.isSearchUI = false;
            this.isListHeader = false;
        }
        else if (value === '08HSPT') {
            this.isReceipts = true;
            this.isSearchUI = true;
            this.isListHeader = true;
            this.isSearchStudent = false;
        }
        else {
            this.isSearchUI = true;
            this.isListHeader = true;
        }
        this.loaiHoaDon = value;
    };
    IndexComponent.prototype.myFunction = function (e) {
        document.getElementById(e).classList.toggle('show');
        this.clickCurent = e;
    };
    IndexComponent.prototype.loadListBatch = function () {
        var _this = this;
        if (this.paramSearch != '&' && this.paramSearch != "") {
            var sub = this.vatService.getListBatchId(this.loaiHoaDon, this.paramSearch).subscribe(function (rs) {
                if (rs.status == "success") {
                    var arrBatch = rs.data.batch_ids;
                    var _indexfilter_groups = 8888;
                    var paramsDateSearchs = "&";
                    if (arrBatch && arrBatch.length > 0) {
                        paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][filters][3][key]=id");
                        for (var i = 0; i < arrBatch.length; i++) {
                            paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][value][" + i + "]=" + arrBatch[i].batch_id);
                        }
                        paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][operator]=in&");
                        paramsDateSearchs += _this.objParams;
                        _this.dataSourceBatch = {};
                        _this.dataSourceBatch.store = _this.vatService.getAllBatch(_this.loaiHoaDon, paramsDateSearchs);
                        _this.loadListDataItem(arrBatch[0].batch_id);
                        if (_this.productGrip) {
                            _this.productGrip.instance.collapseAll(-1);
                            _this.productGrip.instance.expandRow(arrBatch[0].batch_id);
                        }
                    }
                    else {
                        paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][filters][3][key]=id");
                        paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][value][0]=88888888-7777-6666-5555-444444444444");
                        paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][operator]=in&");
                        paramsDateSearchs += _this.objParams;
                        _this.dataSourceBatch = {};
                        _this.dataSourceBatch.store = _this.vatService.getAllBatch(_this.loaiHoaDon, paramsDateSearchs);
                    }
                }
                else {
                    var paramsDateSearchs = "&";
                    var _indexfilter_groups = 8888;
                    paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][filters][3][key]=id");
                    paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][value][0]=88888888-7777-6666-5555-444444444444");
                    paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][operator]=in&");
                    paramsDateSearchs += _this.objParams;
                    _this.dataSourceBatch = {};
                    _this.dataSourceBatch.store = _this.vatService.getAllBatch(_this.loaiHoaDon, paramsDateSearchs);
                }
            });
        }
        else {
            this.dataSourceBatch = {};
            this.dataSourceBatch.store = this.vatService.getAllBatch(this.loaiHoaDon);
            if (this.productGrip)
                this.productGrip.instance.collapseAll(-1);
        }
    };
    IndexComponent.prototype.loadListDataItem = function (idBatch) {
        this.dataSource = {};
        this.dataSource.store = this.loadList(idBatch);
    };
    IndexComponent.prototype.onCellClickBatch = function (e) {
        if (e.rowType == "data") {
            if (e.text == '' || this.isShowInvoice) {
                e.component.collapseAll(-1);
                e.component.expandRow(e.key);
                this.loadListDataItem(e.key);
            }
            this.selectBatch = e.row.data;
        }
    };
    IndexComponent.prototype.loadList = function (idBatch) {
        this.dataSource = {};
        var ref = {};
        if (this.isReceipts) {
            if (this.paramSearch != '&' && this.paramSearch != "") {
                var _lst = this.vatService.getAllStudentReceipts(this.loaiHoaDon, idBatch, this.paramSearch);
                this.dataSource.store = _lst;
                this.footerSum = {
                    summary: _lst.summary,
                    summary_deduction: _lst.summary_deduction,
                };
            }
            else {
                this.dataSource.store = this.vatService.getAllStudentReceipts(this.loaiHoaDon, idBatch);
            }
        }
        else {
            if (this.paramSearch != '&' && this.paramSearch != "") {
                var _lst = this.vatService.getAllStudent(this.loaiHoaDon, idBatch, this.paramSearch);
                this.dataSource.store = _lst;
                this.footerSum = {
                    summary: _lst.summary,
                    summary_deduction: _lst.summary_deduction,
                };
            }
            else {
                this.dataSource.store = this.vatService.getAllStudent(this.loaiHoaDon, idBatch);
            }
        }
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            switch (e.data.status) {
                case 'DA_XUAT':
                    break;
                case 'GHI_TAM':
                    if (e.data.invoice_number) {
                        if (e.data.send_department_status == "DA_GUI_CQT")
                            e.rowElement.style.color = '#008B8B';
                        else if (e.data.send_department_status == "DA_CAP")
                            e.rowElement.style.color = 'black';
                        else if (e.data.send_department_status == "DA_TIEP_NHAN")
                            e.rowElement.style.color = 'black';
                        else
                            e.rowElement.style.color = 'red';
                    }
                    else {
                        e.rowElement.style.color = '#DEA960';
                    }
                    break;
                case 'GIU_SO':
                    e.rowElement.style.color = '#008B8B';
                    break;
                default:
                    break;
            }
            if (e.data.adjustment_type === '2' || e.data.adjustment_type === '7' || e.data.adjustment_type === '6') {
                var eles = e.rowElement.getElementsByTagName('td');
                for (var i = 0; i < eles.length; i++) {
                    if (i !== 9 && i !== 1) {
                        eles[i].style.textDecoration = 'line-through';
                    }
                }
            }
        }
    };
    IndexComponent.prototype.onRowPreparedBatch = function (e) {
        if (e.rowType === 'data') {
            switch (e.data.status) {
                case 'DA_XUAT':
                    break;
                case 'GHI_TAM':
                    if (e.data.invoice_number) {
                        if (e.data.send_department_status == "DA_GUI_CQT")
                            e.rowElement.style.color = '#008B8B';
                        else if (e.data.send_department_status == "DA_CAP")
                            e.rowElement.style.color = 'black';
                        else if (e.data.send_department_status == "DA_TIEP_NHAN")
                            e.rowElement.style.color = 'black';
                        else
                            e.rowElement.style.color = 'red';
                    }
                    else {
                        e.rowElement.style.color = '#DEA960';
                    }
                    break;
                case 'GIU_SO':
                    e.rowElement.style.color = '#008B8B';
                    break;
                default:
                    break;
            }
        }
    };
    IndexComponent.prototype.getSearch = function (e) {
        this.paramSearch = e;
        this.loadListBatch();
    };
    IndexComponent.prototype.checkDisableButton = function () {
        if (this.selectedItems.length) {
            if (this.selectedItems[0].status === 'DA_XUAT') {
                return true;
            }
            return false;
        }
        return false;
    };
    IndexComponent.prototype.trangthaihoadon = function (data) {
        switch (data.status) {
            case 'DA_XUAT':
                break;
            case 'GHI_TAM':
                if (data.invoice_number) {
                    return this._translate.GRID.INVOICE.signed_error;
                }
                else {
                    return this._translate.CONTROLL.BUTTON.save_temporary;
                }
            case 'GIU_SO':
                return this._translate.GRID.INVOICE.wait_for_sign;
            default:
                break;
        }
    };
    // Chọn đối tượng trong màn hình danh sách
    IndexComponent.prototype.selectionChanged = function (data) {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        this.disEditMulti = true;
        this.selectedItems = data.selectedRowsData;
        if (this.selectedItems.length > 0) {
            var checks = this.selectedItems.filter(function (item) {
                return item.number_of_vouchers;
            });
            var checkDaXuat = this.selectedItems.filter(function (item) {
                return item.status === 'DA_XUAT';
            });
            if (checks.length === this.selectedItems.length && checkDaXuat.length === 0) {
                this.disEditMulti = false;
            }
        }
    };
    IndexComponent.prototype.lapHoaDon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.isExistFormRelease) {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
                            return [2 /*return*/];
                        }
                        if (this.loaiHoaDon === '01GTKT')
                            this.router.navigate(['system/student-vat-invoice/create']);
                        else if (this.loaiHoaDon === '08HSPT')
                            this.router.navigate(['system/receipts/create-receipts']);
                        else if (this.loaiHoaDon === '02GTTT')
                            this.router.navigate(['system/student-sale-invoice/create']);
                        else
                            this.router.navigate(['system/student-sale-invoice']);
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.copy = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, row, sub;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        row = data ? data : this.selectedItems[0];
                        sub = this.vatService.show(row.id).subscribe(function (rs) {
                            if (rs.status == "success") {
                                if (rs.data.invoice) {
                                    rs.data.invoice.id = null;
                                    rs.data.invoice.origin_id = null;
                                    rs.data.invoice.adjustment_type = "1";
                                    rs.data.invoice.adjustment_object = null;
                                    rs.data.invoice.adjustment_form = null;
                                    rs.data.invoice.refuse_reason = null;
                                    rs.data.invoice.destroy_reason = null;
                                    rs.data.invoice.invoice_number = null;
                                    rs.data.invoice.invoice_date = null;
                                    rs.data.invoice.approve_status = null;
                                    rs.data.invoice.status = rs.data.invoice.status == "DA_XUAT" ? "GHI_TAM" : rs.data.invoice.status;
                                    rs.data.invoice.updated_at = null;
                                    rs.data.invoice.user_id = null;
                                    rs.data.invoice.van_id = null;
                                    rs.data.invoice.invoice_order = null;
                                    rs.data.invoice.status_order = null;
                                    rs.data.invoice.doc_relate_date = null;
                                    rs.data.invoice.doc_relate_symbol = null;
                                    rs.data.invoice.note_view_on_invoice = null;
                                    _this.vatService.data = rs.data.invoice;
                                    _this.vatService.isCopy = true;
                                }
                                if (_this.loaiHoaDon === '01GTKT')
                                    _this.router.navigate(['system/student-vat-invoice/create']);
                                else if (_this.loaiHoaDon === '02GTTT')
                                    _this.router.navigate(['system/student-sale-invoice/create']);
                                else
                                    _this.router.navigate(['system/student-sale-invoice']);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.edit = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee, row, isChildInvoices, ids, counttotalInv, lstBatch, words, navigationExtras;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.isExistFormRelease) {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
                            return [2 /*return*/];
                        }
                        row = data ? data : this.selectedItems[0];
                        isChildInvoices = false;
                        ids = this.selectedItems.map(function (obj) { return obj.id; });
                        counttotalInv = parseFloat(this.selectBatch.count_da_xuat ? this.selectBatch.count_da_xuat : 0) + parseFloat(this.selectBatch.count_giu_so ? this.selectBatch.count_giu_so : 0) + parseFloat(this.selectBatch.count_xuat_loi ? this.selectBatch.count_xuat_loi : 0) + parseFloat(this.selectBatch.count_ghi_tam ? this.selectBatch.count_ghi_tam : 0);
                        lstBatch = this.selectedRows;
                        if (data)
                            ids.push(data.id);
                        if (ids.length < counttotalInv)
                            isChildInvoices = true;
                        if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(row.status) == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusInv.GhiTam && _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(row.send_department_status) == 'KHONG_DU_DK_CAP_MA') {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Không sửa được hóa đơn không đủ điều kiện cấp mã", 'error');
                            return [2 /*return*/];
                        }
                        if (this.disEditMulti === false) {
                            if (this.selectedItems.length === 1 && row.status === 'DA_XUAT') {
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                            }
                            else {
                            }
                        }
                        else {
                            if (row.status === 'DA_XUAT') {
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                            }
                            else {
                                if (row.adjustment_type === 5) {
                                    this.router.navigate(["/system/handle-invoice-student/edit-adjust/" + row.id]);
                                }
                                else if (row.adjustment_type === 3) {
                                    this.router.navigate(["/system/handle-invoice-student/edit-replace/" + row.id]);
                                }
                                else {
                                    navigationExtras = {
                                        queryParams: {
                                            "ids": ids,
                                            "isChildInvoices": isChildInvoices
                                        }
                                    };
                                    if (this.loaiHoaDon === '01GTKT')
                                        this.router.navigate(["/system/student-vat-invoice/edit"], navigationExtras);
                                    else if (this.loaiHoaDon === '02GTTT')
                                        this.router.navigate(["/system/student-sale-invoice/edit"], navigationExtras);
                                    else if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HSPT)
                                        this.router.navigate(["/system/receipts/edit-receipts"], navigationExtras);
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.openImportForm = function (data) {
    };
    IndexComponent.prototype.editNotSelect = function (row) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee, ids, navigationExtras;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.isExistFormRelease) {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
                            return [2 /*return*/];
                        }
                        if (row.status === 'DA_XUAT') {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                        }
                        else {
                            ids = [];
                            ids.push(row.id);
                            if (row.adjustment_type === 5) {
                                this.router.navigate(["/system/handle-invoice/edit-adjust/" + row.id]);
                            }
                            else if (row.adjustment_type === 3) {
                                this.router.navigate(["/system/handle-invoice/edit-replace/" + row.id]);
                            }
                            else {
                                navigationExtras = {
                                    queryParams: {
                                        "ids": ids,
                                        "isChildInvoices": true
                                    }
                                };
                                if (this.loaiHoaDon === '01GTKT')
                                    this.router.navigate(["/system/student-vat-invoice/edit"], navigationExtras);
                                else if (this.loaiHoaDon === '02GTTT')
                                    this.router.navigate(["/system/student-sale-invoice/edit"], navigationExtras);
                                else if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HSPT)
                                    this.router.navigate(["/system/student-sale-invoice/edit-receipts"], navigationExtras);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.viewDetailInvoice = function (row) {
        var ids = [];
        ids.push(row.id);
        if (this.isTT78 && row.xml_type != '3' && row.status == 'DA_XUAT' && Number.parseInt(row.invoice_number) > 0) {
            if (row.adjustment_type === '5') {
                switch (row.invoice_type) {
                    case '01GTKT':
                        if (row.batch_id)
                            this.router.navigate(["/system/handle-invoice-student/edit-adjust-vat/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                        else
                            this.router.navigate(["/system/handle-invoice/edit-adjust/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                        break;
                    case '02GTTT':
                        if (row.batch_id)
                            this.router.navigate(["/system/handle-invoice-student/edit-adjust-sale/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                        else
                            this.router.navigate(["/system/handle-invoice/edit-sale-adjust/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                        break;
                    default:
                        break;
                }
            }
            else if (row.adjustment_type == '3') {
                switch (row.invoice_type) {
                    case '01GTKT':
                        if (row.batch_id)
                            this.router.navigate(["/system/handle-invoice-student/edit-replace-vat/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                        else
                            this.router.navigate(["/system/handle-invoice/edit-replace/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                        break;
                    case '02GTTT':
                        if (row.batch_id)
                            this.router.navigate(["/system/handle-invoice-student/edit-replace-sale/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                        else
                            this.router.navigate(["/system/handle-invoice/edit-sale-replace/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                        break;
                    default:
                        break;
                }
            }
            else {
                var navigationExtras = {
                    queryParams: {
                        "ids": ids,
                        "isChildInvoices": false,
                        "status": 'viewInvTT32'
                    }
                };
                if (this.loaiHoaDon === '01GTKT')
                    this.router.navigate(["/system/student-vat-invoice/edit"], navigationExtras);
                else if (this.loaiHoaDon === '02GTTT')
                    this.router.navigate(["/system/student-sale-invoice/edit"], navigationExtras);
                else if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HSPT)
                    this.router.navigate(["/system/receipts/edit-receipts"], navigationExtras);
            }
        }
        else {
            if (row.adjustment_type === '5') {
                switch (row.invoice_type) {
                    case '01GTKT':
                        if (row.batch_id)
                            this.router.navigate(["/system/handle-invoice-student/edit-adjust-vat/" + row.id]);
                        else
                            this.router.navigate(["/system/handle-invoice/edit-adjust/" + row.id]);
                        break;
                    case '02GTTT':
                        if (row.batch_id)
                            this.router.navigate(["/system/handle-invoice-student/edit-adjust-sale/" + row.id]);
                        else
                            this.router.navigate(["/system/handle-invoice/edit-sale-adjust/" + row.id]);
                        break;
                    default:
                        break;
                }
            }
            else if (row.adjustment_type == '3') {
                switch (row.invoice_type) {
                    case '01GTKT':
                        if (row.batch_id)
                            this.router.navigate(["/system/handle-invoice-student/edit-replace-vat/" + row.id]);
                        else
                            this.router.navigate(["/system/handle-invoice/edit-replace/" + row.id]);
                        break;
                    case '02GTTT':
                        if (row.batch_id)
                            this.router.navigate(["/system/handle-invoice-student/edit-replace-sale/" + row.id]);
                        else
                            this.router.navigate(["/system/handle-invoice/edit-sale-replace/" + row.id]);
                        break;
                    default:
                        break;
                }
            }
            else {
                var navigationExtras = {
                    queryParams: {
                        "ids": ids,
                        "isChildInvoices": false
                    }
                };
                if (this.loaiHoaDon === '01GTKT')
                    this.router.navigate(["/system/student-vat-invoice/edit"], navigationExtras);
                else if (this.loaiHoaDon === '02GTTT')
                    this.router.navigate(["/system/student-sale-invoice/edit"], navigationExtras);
                else if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HSPT)
                    this.router.navigate(["/system/receipts/edit-receipts"], navigationExtras);
            }
        }
    };
    IndexComponent.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, status_1, ids, batch_id_1, object_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.selectedItems.length || data) {
                            status_1 = '';
                            ids = '';
                            batch_id_1 = '';
                            if (data) {
                                ids = data.id;
                                batch_id_1 = data.batch_id;
                            }
                            else {
                                ids = this.selectedRows.join(',');
                                batch_id_1 = this.selectedItems[0].batch_id;
                            }
                            object_1 = {
                                'invoiceIds': ids,
                                'batchId': batch_id_1,
                            };
                            result = _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
                            result.then(function (dialogResult) {
                                if (dialogResult) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                                    _this.vatService.deleteInvoiceWithBatch(object_1).subscribe(function (rs) {
                                        if (rs.status === 'success') {
                                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                            if (rs.data == "delete_batch")
                                                _this.loadListBatch();
                                            else {
                                                _this.loadListBatch();
                                                if (_this.productGrip) {
                                                    _this.productGrip.instance.collapseAll(-1);
                                                    _this.productGrip.instance.expandRow(batch_id_1);
                                                }
                                                _this.loadList(batch_id_1);
                                            }
                                        }
                                        else {
                                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
                                        }
                                    }, function (err) {
                                    }, function () {
                                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                                    });
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.giuSo = function () {
    };
    IndexComponent.prototype.setUrlNavigate = function () {
        var url = window.location.pathname;
        if (sessionStorage.hasOwnProperty('urlIndex')) {
            if (sessionStorage.getItem('urlIndex') !== null) {
                sessionStorage.setItem('urlIndex', url);
            }
            else {
                sessionStorage.setItem('urlIndex', url);
            }
        }
        else {
            sessionStorage.setItem('urlIndex', url);
        }
    };
    IndexComponent.prototype.view = function (data) {
        if (this.selectedItems.length > 0 || data) {
            var _lst = [];
            if (this.isReceipts) {
                _lst = this.selectedItems;
            }
            else {
                _lst = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; });
            }
            if (_lst.length > 0 || data) {
                if (this.selectedItems.length === 1) {
                    this.dataInfor = this.selectedItems[0];
                }
                else {
                    this.dataInfor = data;
                }
                var ids = [];
                if (data) {
                    ids.push(data.id);
                }
                else {
                    ids = _lst.map(function (e) { return e.id; });
                }
                if (this.configs.system_parameter.view_multi_invoice) {
                    var data_1 = this.vatService.taodulieuXemMau(ids);
                    data_1['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].cauhinhxemmau.hoadon;
                    this.vPreviewInvService.xemMau(data_1);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].typeCode.xem_hoa_don
                    };
                    this.vPreviewInvService.xemMauPhanTrang(initialState);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    IndexComponent.prototype.inChuyenDoi = function (data) {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (this.selectedItems.length || data) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == 'DA_XUAT'; });
            if (_lst.length > 0 || data) {
                var ids = [];
                if (data) {
                    if (data.status === 'DA_XUAT') {
                        ids.push(data.id);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.not_print_convert, 'error');
                        return;
                    }
                }
                else {
                    ids = _lst.map(function (e) { return e.id; });
                }
                if (this.configs.system_parameter.view_multi_invoice) {
                    var data_2 = this.vatService.taodulieuInchuyendoiHS(ids);
                    data_2['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].cauhinhxemmau.hoadon;
                    this.vPreviewInvService.xemMau(data_2);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].typeCode.in_chuyen_doi_hs
                    };
                    this.vPreviewInvService.xemMauPhanTrang(initialState);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    IndexComponent.prototype.guibenmua = function (data) {
        var _this = this;
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        var check = true;
        if (data) {
            if (data.status !== 'DA_XUAT') {
                check = false;
            }
        }
        else {
            if (this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; }).length === 0) {
                check = false;
            }
        }
        if (check && (this.selectedItems.length || data)) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
            var batch_id_2 = this.selectedItems[0].batch_id;
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            else {
                ids = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; }).map(function (p) { return p.id; });
            }
            this.vatService.layCacHoaDonKySoHangLoat(ids, this.loaiHoaDon).subscribe(function (rs) {
                if (rs[0].status === 'success') {
                    var initialState = {
                        invoiceList: rs[0].data.invoices,
                        configs: rs[1].data.configs,
                        isReceipts: _this.isReceipts
                    };
                    _this.bsModalSignRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_8__["SendListEmailComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-lg full-modal',
                        initialState: initialState
                    });
                    var subModal_1 = _this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalSignRef.content.successSaveItem) {
                            _this.selectedItems = [];
                            _this.selectedRows = [];
                            _this.loadList(batch_id_2);
                            subModal_1.unsubscribe();
                        }
                    });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.no_invoice_selected, 'error');
        }
    };
    IndexComponent.prototype.viewAttachFile = function (data) {
        var _this = this;
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (data) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
            this.vatService.showAttachFile(data.id).subscribe(function (rs) {
                if (rs.status === 'success') {
                    if (rs.data && rs.data.invoice && rs.data.invoice.invoice_files.length > 0) {
                        var initialState = {
                            fileData: rs.data.invoice.invoice_files,
                            view_attach_file: true,
                        };
                        _this.bsModalSignRef = _this.modalService.show(_shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_7__["ViewAttachFileComponent"], {
                            backdrop: 'static',
                            keyboard: false,
                            class: 'modal-lg',
                            initialState: initialState
                        });
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.not_file_attach, 'error');
                    }
                    // let subModal = this.modalService.onHide.subscribe(() => {
                    //   if (this.bsModalSignRef.content.successSaveItem) {
                    //     this.selectedItems = [];
                    //     this.selectedRows = [];
                    //     //this.loadList(this.paramSearch);
                    //     subModal.unsubscribe();
                    //   }
                    // });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
    };
    IndexComponent.prototype.sendInvoice = function (id) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var batch_id;
        if (!id)
            batch_id = this.selectedItems[0].batch_id;
        var sub = this.vatService.showToSendInvoice(id).subscribe(function (rs) {
            if (rs.status == 'success') {
                var initialState = {
                    invoice: rs.data.invoice,
                    isReceipts: _this.isReceipts
                };
                _this.bsModalRef = _this.modalService.show(_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_6__["SendInvoicesComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem) {
                        if (batch_id)
                            _this.loadList(batch_id);
                        else
                            _this.loadList(rs.data.invoice.batch_id);
                    }
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.customizeText = function (e) {
        var formatter = new Intl.NumberFormat('ja-JP');
        var totalMoney = '0';
        if (e && e.value) {
            var _arr = e.value.split('&');
            if (_arr.length > 1) {
                // totalMoney = "TTHĐ bán ra:" + '\n' + formatter.format(parseFloat(_arr[0] || "0"));
                totalMoney = formatter.format(parseFloat(_arr[0] || '0'));
                // if (_arr[1] != "")
                //   totalMoney += '\n' + "TTHĐ giảm trừ:" + '\n' + formatter.format(parseFloat(_arr[1] || "0"));
            }
        }
        return totalMoney;
    };
    IndexComponent.prototype.kyHangLoat = function (data) {
        var _this = this;
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (!_core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_11__["InvoicesService"].checkTimeExportInv(this.configs.system_parameter)) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_12__["String"].Format(this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_9__(this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_9__(this.configs.system_parameter.time_end).format('HH:mm')), 'error');
            return;
        }
        var check = true;
        if (data) {
            if (data.status !== 'GIU_SO') {
                check = false;
            }
        }
        else {
            this.selectedItems.forEach(function (item) {
                if (item.status !== 'GIU_SO') {
                    check = false;
                }
            });
        }
        if (check && (this.selectedItems.length || data)) {
            // if (this.selectedItems.length > 25 && !data) {
            //   Library.notify('Chỉ được chọn tối đa 25 hóa đơn để ký hàng loạt', 'error');
            //   return false;
            // }
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            else {
                ids = this.selectedRows;
            }
            var batch_id_3 = this.selectedItems[0].batch_id;
            this.vatService.layCacHoaDonKySoHangLoat(ids, this.loaiHoaDon).subscribe(function (rs) {
                if (rs[0].status === 'success') {
                    var initialState = {
                        invoiceList: rs[0].data.invoices,
                        configs: rs[1].data.configs
                    };
                    _this.bsModalSignRef = _this.modalService.show(_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_13__["SignManyComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-lg full-modal',
                        initialState: initialState
                    });
                    var subModal_2 = _this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalSignRef.content.successSaveItem) {
                            _this.selectedItems = [];
                            _this.selectedRows = [];
                            _this.loadListBatch();
                            _this.loadList(batch_id_3);
                            subModal_2.unsubscribe();
                        }
                    });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.no_invoice_waite_sign_selected, 'error');
        }
    };
    IndexComponent.prototype.napHDTuExcelDt = function () {
    };
    IndexComponent.prototype.taiHDXml = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                var ids = [];
                ids = _lst.map(function (e) { return e.id; });
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                var sub_1 = this.vatService.xuatHDXml(ids).subscribe(function (rs) {
                    if (rs.status == "success") {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].dowloadFile(rs.data.file_name, 'zip', rs.data.file_content);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, "error");
                    }
                }, function (err) { }, function () {
                    sub_1.unsubscribe();
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
                return;
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
            return;
        }
    };
    IndexComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'NAP_HD_TU_EXCEL_DT') {
            this.napHDTuExcelDt();
        }
        else if (e.itemData.id === 'GIU_SO') {
            this.giuSo();
        }
        else if (e.itemData.id === 'KY_SO') {
            this.kyHangLoat(null);
        }
        else if (e.itemData.id === 'SUA') {
            this.edit(null);
        }
        else if (e.itemData.id === 'XOA') {
            this.delete(null);
        }
        else if (e.itemData.id === 'XEM') {
            this.view(null);
        }
        else if (e.itemData.id === 'INCHUYENDOI') {
            this.inChuyenDoi(null);
        }
        else if (e.itemData.id === 'GUI_BEN_MUA') {
            this.guibenmua(null);
        }
        else if (e.itemData.id === 'LIST_INVOICE_BUY') {
            this.guibenmua(null);
        }
        else if (e.itemData.id === 'DETAILS_OF_EACH_GOODS_AND_SERVICE') {
            this.guibenmua(null);
        }
        else if (e.itemData.id === 'ADD_ONE_INVOICE') {
            this.router.navigate(['/system/invoice-buy/create']);
        }
        else if (e.itemData.id === 'ADD_MULTIPLE_INVOICE') {
            this.guibenmua(null);
        }
        else if (e.itemData.id == "TAI_HD_XML") {
            this.taiHDXml();
        }
        else if (e.itemData.id == "GUI_PHIEU_THU") {
            this.guibenmua(null);
        }
        else if (e.itemData.id == "TAI_HD_PDF") {
            this.taiHDPdf();
        }
    };
    IndexComponent.prototype.taiHDPdf = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                var ids = _lst.map(function (e) { return e.id; });
                this.downloadPdf.downloadPdf(ids, 'invoices', 'invoice', false);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
                return;
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
            return;
        }
    };
    IndexComponent.prototype.suaHDGIUSO = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, isChildInvoices, et;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        isChildInvoices = false;
                        this.isShowInvoice = false;
                        et = this.vatService.getListIdByBatchId(this.loaiHoaDon, e.id, "GIU_SO", false).subscribe(function (rs) {
                            if (rs.status == 'success') {
                                if (rs.data.invoices.length > 0) {
                                    var counttotalInv = parseFloat(_this.selectBatch.count_da_xuat) + parseFloat(_this.selectBatch.count_giu_so) + parseFloat(_this.selectBatch.count_xuat_loi) + parseFloat(_this.selectBatch.count_ghi_tam);
                                    if (rs.data.invoices.length < counttotalInv)
                                        isChildInvoices = true;
                                    var ids = rs.data.invoices.map(function (obj) { return obj.id; });
                                    var navigationExtras = {
                                        queryParams: {
                                            "ids": ids,
                                            "isChildInvoices": isChildInvoices
                                        }
                                    };
                                    if (_this.loaiHoaDon === '01GTKT')
                                        _this.router.navigate(["/system/student-vat-invoice/edit"], navigationExtras);
                                    else if (_this.loaiHoaDon === '02GTTT')
                                        _this.router.navigate(["/system/student-sale-invoice/edit"], navigationExtras);
                                    else if (_this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HSPT)
                                        _this.router.navigate(["/system/student-sale-invoice/edit-receipts"], navigationExtras);
                                }
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.suaHDXUATLOI = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, isChildInvoices, et;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        this.isShowInvoice = false;
                        isChildInvoices = false;
                        et = this.vatService.getListIdByBatchId(this.loaiHoaDon, e.id, "GHI_TAM", true).subscribe(function (rs) {
                            if (rs.status == 'success') {
                                if (rs.data.invoices.length > 0) {
                                    var counttotalInv = parseFloat(_this.selectBatch.count_da_xuat) + parseFloat(_this.selectBatch.count_giu_so) + parseFloat(_this.selectBatch.count_xuat_loi) + parseFloat(_this.selectBatch.count_ghi_tam);
                                    if (rs.data.invoices.length < counttotalInv)
                                        isChildInvoices = true;
                                    var ids = rs.data.invoices.map(function (obj) { return obj.id; });
                                    var navigationExtras = {
                                        queryParams: {
                                            "ids": ids,
                                            "isChildInvoices": isChildInvoices
                                        }
                                    };
                                    if (_this.loaiHoaDon === '01GTKT')
                                        _this.router.navigate(["/system/student-vat-invoice/edit"], navigationExtras);
                                    else if (_this.loaiHoaDon === '02GTTT')
                                        _this.router.navigate(["/system/student-sale-invoice/edit"], navigationExtras);
                                    else if (_this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HSPT)
                                        _this.router.navigate(["/system/student-sale-invoice/edit-receipts"], navigationExtras);
                                }
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.suaHDGHITAM = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, isChildInvoices, et;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        this.isShowInvoice = false;
                        isChildInvoices = false;
                        et = this.vatService.getListIdByBatchId(this.loaiHoaDon, e.id, "GHI_TAM", false).subscribe(function (rs) {
                            if (rs.status == 'success') {
                                if (rs.data.invoices.length > 0) {
                                    var counttotalInv = parseFloat(_this.selectBatch.count_da_xuat) + parseFloat(_this.selectBatch.count_giu_so) + parseFloat(_this.selectBatch.count_xuat_loi) + parseFloat(_this.selectBatch.count_ghi_tam);
                                    if (rs.data.invoices.length < counttotalInv)
                                        isChildInvoices = true;
                                    var ids = rs.data.invoices.map(function (obj) { return obj.id; });
                                    var navigationExtras = {
                                        queryParams: {
                                            "ids": ids,
                                            "isChildInvoices": isChildInvoices
                                        }
                                    };
                                    if (_this.loaiHoaDon === '01GTKT')
                                        _this.router.navigate(["/system/student-vat-invoice/edit"], navigationExtras);
                                    else if (_this.loaiHoaDon === '02GTTT')
                                        _this.router.navigate(["/system/student-sale-invoice/edit"], navigationExtras);
                                    else if (_this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HSPT)
                                        _this.router.navigate(["/system/receipts/edit-receipts"], navigationExtras);
                                }
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.LoadInvoiceByBatchId = function (e) {
        this.isShowInvoice = true;
    };
    IndexComponent.prototype.LydoKTiepNhan = function (data) {
        var lstErr = JSON.parse(data.error_content_invoice);
        var initialState = {
            lstErr: lstErr,
            notifyType: "THONG_BAO_LOI_CQT"
        };
        this.bsModalSignRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_8__["SendDataForTaxComponent"], {
            backdrop: 'static',
            keyboard: true,
            class: 'modal-lg modal-margin-width',
            initialState: initialState
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            subModal.unsubscribe();
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
    };
    IndexComponent.prototype.onContentReady = function (e) {
        if (e) {
            var dataSource = this.dataGrid.instance.getDataSource();
            this.pageSize = dataSource.items().length;
        }
    };
    IndexComponent.prototype.getObjParams = function (e) {
        if (e.code) {
            this.objParams = "filter_groups[4][filters][4][key]=code&filter_groups[4][filters][4][value]=" + e.code + "&filter_groups[4][filters][4][operator]=ct&";
        }
        else {
            this.objParams = '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxMenuComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxMenuComponent"])
    ], IndexComponent.prototype, "dxMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"])
    ], IndexComponent.prototype, "productGrip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expandMenu'),
        __metadata("design:type", Object)
    ], IndexComponent.prototype, "expandMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_15__["DownloadPdfComponent"]),
        __metadata("design:type", _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_15__["DownloadPdfComponent"])
    ], IndexComponent.prototype, "downloadPdf", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/student-invoice/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/student-invoice/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_3__["VatService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_16__["ViewInvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/components/invoice/invoice.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/invoice/invoice.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"invoice-container\">\r\n    <iframe id=\"preview-iframe-student\" width=\"0%\" height=\"0%\" style=\"margin-left: 9px;height:0px\"></iframe>\r\n    <!-- phần form thông tin -->\r\n    <app-form-student-invoive [dataSource]=\"dataSource\" [invoice_products]=\"invoice_products\" [formatter]=\"formatter\"\r\n      [frmData]=\"frmData\" [_objTemplateSelect]=\"_objTemplateSelect\" [extentionGrid]=\"extentionGrid\"\r\n      (onFormChange)=\"getDataInChildForm($event)\" (onTemplateChange)=\"onTemplateChange($event)\"\r\n      (onStudyYearChange)=\"onStudyYearChange($event)\" [ttDaXuatHoaDon]=\"ttDaXuatHoaDon\" (onRedueFeeChange)=\"onRedueFeeChange($event)\"\r\n      [_oTemplateTT78]=\"_oTemplateTT78\" [isTT78]=\"isTT78\" [infoDangKy]=\"infoDangKy\"\r\n      (onTemplateTT78TypeChange)=\"onTemplateTT78TypeChange($event)\"\r\n      (onTemplateTypeChange)=\"onTemplateTypeChange($event)\"></app-form-student-invoive>\r\n    <!-- table product -->\r\n    <app-product-grip #child [dataSource]=\"dataSource\" [invoice_products]=\"invoice_products\"\r\n      [formDataInInvoice]=\"frmData\" [formatter]=\"formatter\" [isHdGTGT]=\"isHdGTGT\"\r\n      [_objTemplateSelect]=\"_objTemplateSelect\" [extentionGrid]=\"extentionGrid\" [fee_months]=\"fee_months\"\r\n      [arrProducts]=\"arrProducts\" (onCheckDuplicate)=\"onCheckDuplicate($event)\"\r\n      [student_reduce_rate_code]=\"student_reduce_rate_code\" [_oTemplateTT78]=\"_oTemplateTT78\" [isTT78]=\"isTT78\"\r\n      (importExcel)=\"fillDataToForm($event)\">\r\n    </app-product-grip>\r\n\r\n    <div *ngIf=\"isHdGTGT\" class=\"table-footer\">\r\n      <div class=\"table-footer-1\">\r\n        <div class=\"vat amount-table-footer\">\r\n          <dx-number-box [value]=\"frmData.amount_after_vat\" step=\"0\" [format]=\"formatter.tong_tien\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-footer-2\">\r\n        <div class=\"vat amount-vat-table-footer\">\r\n          <dx-number-box [value]=\"frmData.total_amount_vat\" step=\"0\" [format]=\"formatter.tien_thue\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-footer-3\">\r\n        <div class=\"vat amount-after-vat-table-footer\">\r\n          <dx-number-box [value]=\"frmData.amount\" step=\"0\" [format]=\"formatter.thanh_tien\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-footer-4\">\r\n        <div class=\"vat amount-table-footer\">\r\n          <dx-number-box [value]=\"frmData.amount_without_discount\" step=\"0\" [format]=\"formatter.thanh_tien_chua_ck\"\r\n            [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!isHdGTGT\" class=\"table-footer\">\r\n      <div class=\"table-footer-1\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-table-footer\" dataField=\"amount_after_vat\" editorType=\"dxNumberBox\"\r\n              [editorOptions]=\"{format: formatter.thanh_tien, disabled: true, step:'0'}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n      <div class=\"table-footer-3\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-after-vat-table-footer\" dataField=\"amount\" editorType=\"dxNumberBox\"\r\n              [editorOptions]=\"{format: formatter.tong_tien, disabled: true, step:'0'}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n    </div>\r\n\r\n    <dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"Thông báo\" [dragEnabled]=\"false\"\r\n      [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n      <div *dxTemplate=\"let data of 'content'\">\r\n        <p style=\"margin-bottom: 35px;\">Bạn có muốn cập nhật lại dữ liệu vào danh mục khách hàng không?</p>\r\n        <div class=\"pull-right\">\r\n          <dx-button text=\"Cập nhật\" type=\"default\"></dx-button>\r\n          <dx-button text=\"Hủy\" type=\"default\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </dx-popup>\r\n    <!-- vùng chọn file -->\r\n    <div class=\"container-fluid pl-0 pr-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <app-list-student [variableStudent]=\"select.class_codes\" [variableTLMG]=\"select.student_reduce_rate_codes\"\r\n            [ttDaXuatHoaDon]=\"ttDaXuatHoaDon\" (studentGenerated)=\"renderDataStudent($event)\">\r\n          </app-list-student>\r\n        </div>\r\n        <div class=\"col-md-9 pl-0\">\r\n          <!-- danh sách học sinh -->\r\n          <app-student-invoice-grip [dataSource]=\"studentSelect\" [valueFormInvoice]=\"frmData\" [isReceipts]=\"isReceipts\"\r\n            (onStudentChange)=\"onStudentChange($event)\"></app-student-invoice-grip>\r\n          <div class=\"row after-table\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"selected\">Đã chọn <span style=\"color: darkgreen\">{{totalInvoice}}</span> HS-SV</div>\r\n              <div *ngIf=\"totalDuplicate>0 && !isReceipts\" class=\"invoiced\">Có <span\r\n                  style=\"color: darkred;font-weight: 600;\">{{totalDuplicate}}</span> HS-SV <span\r\n                  class=\"export-invoice\">đã được lập hóa đơn</span> thu học phí cho tháng đang chọn\r\n              </div>\r\n              <div *ngIf=\"totalDuplicate>0 && isReceipts\" class=\"invoiced\">Có <span\r\n                style=\"color: darkred;font-weight: 600;\">{{totalDuplicate}}</span> HS-SV <span\r\n                class=\"export-invoice\">đã được lập phiếu thu</span> thu học phí cho tháng đang chọn\r\n            </div>\r\n              <div *ngIf=\"totalDuplicate>0\" class=\"detail\">Xem chi tiết <a class=\"m-bold\"\r\n                  style=\"font-weight: 600;padding-right: 15px\" href=\"javascript:void(0)\"\r\n                  (click)=\"showInvoiceDuplicate()\">Tại đây</a>\r\n                <dx-button (click)=\"filterStudentDuplicate()\"\r\n                  text=\"{{ _translate.CONTROLL.BUTTON.unchecked_student_duplicate}}\" type=\"default\"></dx-button>\r\n              </div>\r\n              <file-upload-multiple *ngIf=\"hideD\" [fileData]=\"fileData\" (fileChange)=\"getFileData($event)\">\r\n              </file-upload-multiple>\r\n            </div>\r\n            <!-- <div class=\"col-md-1\">\r\n            </div> -->\r\n            <div class=\"col-md-6\">\r\n              <div\r\n                *ngIf=\"((invoicereleaseTempt && invoicereleaseTempt.template_type!='HOA_DON_VE_MAY_BAY' && invoicereleaseTempt.template_type!='HOA_DON_VE_MAY_BAY_THU_TIEN' && invoicereleaseTempt.template_type!='HOA_DON_VE_MAY_BAY_HOAN_TIEN')\r\n                || (invoiceTemplateTT78 && invoiceTemplateTT78.template_type!='HOA_DON_VE_MAY_BAY' && invoiceTemplateTT78.template_type!='HOA_DON_VE_MAY_BAY_THU_TIEN' && invoiceTemplateTT78.template_type!='HOA_DON_VE_MAY_BAY_HOAN_TIEN'))\"\r\n                class=\"vat money-pull-right\">\r\n                <div class=\"dx-field\">\r\n                  <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.on_currency_amount}}</div>\r\n                  <div class=\"dx-field-value\">\r\n                    <dx-number-box [(value)]=\"frmData.on_currency_amount\" tabIndex=\"-1\" format=\"0,###\"\r\n                      [disabled]=\"!frmData.auto_value\" step=\"0\" (onValueChanged)=\"onNumberChange()\"></dx-number-box>\r\n                  </div>\r\n                </div>\r\n                <div class=\"dx-field\">\r\n                  <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount}}</div>\r\n                  <div class=\"dx-field-value\">\r\n                    <dx-number-box [(value)]=\"frmData.amount\" tabIndex=\"-1\" [format]=\"formatter.thanh_tien\"\r\n                      [disabled]=\"!frmData.auto_value\" step=\"0\" (onValueChanged)=\"onNumberChange()\"></dx-number-box>\r\n                  </div>\r\n                </div>\r\n                <div class=\"dx-field\">\r\n                  <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_amount_discount}}</div>\r\n                  <div class=\"dx-field-value\">\r\n                    <dx-number-box [(value)]=\"frmData.amount_discount\" tabIndex=\"-1\" step=\"0\"\r\n                      [format]=\"formatter.tien_chiet_khau\" (onValueChanged)=\"onNumberChange()\"></dx-number-box>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n                  <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat5}}</div>\r\n                  <div class=\"dx-field-value\">\r\n                    <dx-number-box [(value)]=\"frmData.amount_vat5\" tabIndex=\"-1\" step=\"0\" [format]=\"formatter.tien_thue\"\r\n                      [disabled]=\"!frmData.auto_value\" (onValueChanged)=\"onNumberChange()\"></dx-number-box>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n                  <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat8}}</div>\r\n                  <div class=\"dx-field-value\">\r\n                    <dx-number-box [(value)]=\"frmData.amount_vat8\" tabIndex=\"-1\" step=\"0\" [format]=\"formatter.tien_thue\"\r\n                      [disabled]=\"!frmData.auto_value\" (onValueChanged)=\"onNumberChange()\"></dx-number-box>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n                  <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat10}}</div>\r\n                  <div class=\"dx-field-value\">\r\n                    <dx-number-box [(value)]=\"frmData.amount_vat10\" tabIndex=\"-1\" step=\"0\"\r\n                      [format]=\"formatter.tien_thue\" [disabled]=\"!frmData.auto_value\"\r\n                      (onValueChanged)=\"onNumberChange()\"></dx-number-box>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n            </div>\r\n\r\n            <div class=\"col-md-6\" style=\"margin-top: 10px\">\r\n              <div class=\"vat money-pull-right\">\r\n                <div class=\"dx-field\">\r\n                  <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_after_vat}}</div>\r\n                  <div class=\"dx-field-value\">\r\n                    <dx-number-box [(value)]=\"frmData.total_payment\" [format]=\"formatter.tong_tien\"\r\n                      [disabled]=\"!frmData.auto_value\" tabIndex=\"-1\" step=\"0\" (onKeyDown)=\"keyDown($event)\"\r\n                      (onValueChanged)=\"totalPaymentChange($event)\"></dx-number-box>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"vat total-payment-in-word\">\r\n                <div class=\"dx-field\">\r\n                  <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_payment_in_word}}</div>\r\n                  <div class=\"dx-field-value\">\r\n                    <dx-text-box [(value)]=\"frmData.total_payment_in_word\" [disabled]=\"!frmData.auto_value\">\r\n                    </dx-text-box>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row button-action\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"pull-left\">\r\n                <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !isReceipts\" (click)=\"preview()\"\r\n                  [(icon)]=\"this._translate.ICONS.view\" text=\"{{ _translate.CONTROLL.BUTTON.preview_invoice}}\"\r\n                  type=\"default\"></dx-button>\r\n                <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon && !isReceipts\" (click)=\"view()\" [(icon)]=\"this._translate.ICONS.view\"\r\n                  text=\"{{ _translate.CONTROLL.BUTTON.view_invoice}}\" type=\"default\"></dx-button>\r\n                <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && isReceipts\" (click)=\"preview()\"\r\n                  [(icon)]=\"this._translate.ICONS.view\" text=\"{{ _translate.CONTROLL.BUTTON.preview_receipts}}\"\r\n                  type=\"default\"></dx-button>\r\n                <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon && isReceipts\" (click)=\"view()\" [(icon)]=\"this._translate.ICONS.view\"\r\n                  text=\"{{ _translate.CONTROLL.BUTTON.view_receipts}}\" type=\"default\"></dx-button>\r\n                <dx-button disableDoubleClick *ngIf=\"hideD && !isReceipts\" (click)=\"inChuyenDoi()\" [(icon)]=\"this._translate.ICONS.print\"\r\n                  [text]=\"inChuyenDoiText()\" type=\"default\"></dx-button>\r\n                <dx-button disableDoubleClick *ngIf=\"isTuChoi && !isReceipts\" (click)=\"xemlydotuchoi()\"\r\n                  [(icon)]=\"this._translate.ICONS.view\" text=\"{{_translate.CONTROLL.BUTTON.reason_reject}}\"\r\n                  type=\"default\"></dx-button>\r\n              </div>\r\n              <div class=\"pull-right\">\r\n                <!-- <button type=\"button\" (click)=\"test()\">Test</button> -->\r\n                <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !isAccessExportInv\"\r\n                  text=\"{{ _translate.CONTROLL.BUTTON.sign_approval}}\" icon=\"assets\\img\\icons\\XuatFile.png\"\r\n                  (click)=\"eSubmit('TRINH_KY')\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n                </dx-button>\r\n                <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !showTraLai && !showKyDuyet && !isReceipts\" appScrollToInvalid\r\n                  text=\"{{ _translate.CONTROLL.BUTTON.export_invoice}}\" [(icon)]=\"this._translate.ICONS.export_inv\"\r\n                  (click)=\"eSubmit('XUAT',false)\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n                </dx-button>\r\n                <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !showTraLai && !showKyDuyet && isReceipts\" appScrollToInvalid\r\n                  text=\"{{ _translate.CONTROLL.BUTTON.export_receipts}}\" [(icon)]=\"this._translate.ICONS.export_inv\"\r\n                  (click)=\"eSubmit('XUAT',false)\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n                </dx-button>\r\n                <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !showTraLai && !showKyDuyet\" appScrollToInvalid\r\n                  text=\"{{ _translate.CONTROLL.BUTTON.save_temporary}}\" [(icon)]=\"this._translate.ICONS.save\"\r\n                  (click)=\"eSubmit('GHI_TAM')\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n                </dx-button>\r\n                <dx-button disableDoubleClick *ngIf=\"!showTraLai && !showKyDuyet\" text=\"{{ _translate.CONTROLL.BUTTON.create_new}}\"\r\n                  [(icon)]=\"this._translate.ICONS.add_new\" (click)=\"handleAddNew()\" type=\"default\"></dx-button>\r\n                <dx-button disableDoubleClick *ngIf=\"showTraLai\" text=\"{{ _translate.CONTROLL.BUTTON.return}}\"\r\n                  icon=\"assets\\img\\icons\\XuatFile.png\" (click)=\"traLai()\" type=\"default\"></dx-button>\r\n                <dx-button appBackButton type=\"default\" [(icon)]=\"this._translate.ICONS.come_back\"\r\n                  text=\"{{ _translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"Quá trình đang xử lý\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopupImport\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n          <span>{{thongbao}}</span>\r\n      </p> -->\r\n  </div>\r\n</dx-popup>\r\n\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/invoice/invoice.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/invoice/invoice.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container{padding-top:15px}.after-table{margin-top:10px}::ng-deep .vat.total-payment-in-word{margin-top:15px}::ng-deep .vat.total-payment-in-word input{color:#000000;font-weight:bold;text-align:right}.vat.total-payment-in-word .dx-field-label{width:13%}.vat.total-payment-in-word .dx-field-value{width:87% !important}::ng-deep .vat.money-pull-right input{text-align:right}::ng-deep .pr-0.money-pull-right input{text-align:right}::ng-deep .prt-1.money-pull-right input{text-align:right}.vat.money-pull-right .dx-field-label{width:45%}.vat.money-pull-right .dx-field-value{width:55% !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}.button-action{margin-top:18px}.table-footer{height:40px;background:#E3E3E3;padding-top:3px}.table-footer .table-footer-1{display:inline-block;width:109px;float:right}.table-footer .table-footer-2{display:inline-block;width:120px;margin-right:32px;float:right}.table-footer .table-footer-3{display:inline-block;width:150px;margin-right:90px;float:right}.table-footer .table-footer-4{display:inline-block;width:109px;margin-right:190px;float:right}.dx-field-value.dx-widget,.dx-field-value:not(.dx-widget)>.dx-widget{height:25px}.pr-0.dx-selectbox .dx-texteditor-input:-moz-read-only{padding-bottom:17px}.pr-0.dx-selectbox .dx-texteditor-input:read-only{padding-bottom:17px}.selected{font-weight:600;padding-bottom:5px}.invoiced{padding-bottom:5px}.export-invoice{font-weight:600;padding-bottom:5px}.detail{padding-bottom:5px}::ng-deep .prv-s-invoice .modal-content{border:0px;border-radius:0px}::ng-deep .v-s-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/invoice/invoice.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/invoice/invoice.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-grip/product-grip.component */ "./src/app/modules/student-invoice/components/product-grip/product-grip.component.ts");
/* harmony import */ var _form_student_invoive_form_student_invoive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-student-invoive/form-student-invoive.component */ "./src/app/modules/student-invoice/components/form-student-invoive/form-student-invoive.component.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../send-invoices/send-invoices.component */ "./src/app/modules/student-invoice/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var _invoices_duplicates_invoices_duplicates_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../invoices-duplicates/invoices-duplicates.component */ "./src/app/modules/student-invoice/components/invoices-duplicates/invoices-duplicates.component.ts");
/* harmony import */ var _modules_student_invoice_components_student_invoice_grip_student_invoice_grip_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @modules/student-invoice/components/student-invoice-grip/student-invoice-grip.component */ "./src/app/modules/student-invoice/components/student-invoice-grip/student-invoice-grip.component.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_student_invoice_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @modules/student-invoice/shared */ "./src/app/modules/student-invoice/shared/index.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
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



























var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(route, router, modalService, vatService, socketService, authService, cdRef, translate, customersService, confirmService, templateService, notifyService, spinner, studentInvoiceService, customeModalService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.cdRef = cdRef;
        this.translate = translate;
        this.customersService = customersService;
        this.confirmService = confirmService;
        this.templateService = templateService;
        this.notifyService = notifyService;
        this.spinner = spinner;
        this.studentInvoiceService = studentInvoiceService;
        this.customeModalService = customeModalService;
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_7__["InvoiceModel"](1);
        this.frmTraLai = {
            reason: ''
        };
        this.isReceipts = false;
        this.ttDaXuatHoaDon = false; // Trạng thái đã xuất hóa đơn hay chưa
        this.showTraLai = false;
        this.showKyDuyet = false;
        this.isHdGTGT = false;
        this.isAccessExportInv = false;
        this.showPopup = false;
        this.formatter = {};
        this.arrayIdEdit = [];
        this.select = {};
        this.formatNumber = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].numberInvoiceFormatDev;
        this.extentionGrid = {};
        // danh sách data trong file
        this.fileData = [];
        this.tempKiFile = 0;
        this.confirmCheckPreview = false;
        this._isValid = false;
        this.isTuChoi = false;
        this.studentSelect = [];
        this.arrProducts = [];
        this.dataFormGird = [];
        this.totalInvoice = 0;
        this.invoice = {};
        this.countInvoice = 1;
        this.valueProgress = 0;
        this.showPopupImport = false;
        this.errorImport = false;
        this.invoicesId = [];
        this.totalDuplicate = 0;
        this.reportHeight = "1026px";
        this.hideD = false;
        this.countRelease = 0;
        this.totalCountWaitSign = 0;
        this.isXuat = true;
        this.isChildInvoices = false;
        this.arrColumns = [
            {
                name: 'columnSTT',
                value: 'valueSTT',
                class: 'center',
                height: "25px",
                title: "Số thứ tự",
                content: "1"
            },
            {
                name: 'name-1a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueMaHangHoa',
                class: 'name-1a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Mã hàng",
                content: "MH001"
            },
            {
                name: 'columnTenHangHoa',
                value: 'valueTenHangHoa',
                class: 'columnTenHangHoa',
                height: "25px",
                title: "Tên hàng hóa",
                content: "Hóa đơn điện tử"
            },
            {
                name: 'columnSoMay',
                value: 'valueSoMay',
                class: 'columnSoMay',
                height: "25px",
                title: "Số máy",
                content: "Q12P"
            },
            {
                name: 'columnSoKhung',
                value: 'valueSoKhung',
                class: 'columnSoKhung',
                height: "25px",
                title: "Số khung",
                content: "K123K"
            },
            {
                name: 'name-2a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueSolo',
                class: 'name-2a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Số lô",
                content: "SL001"
            },
            {
                name: 'name-3a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueHanDung',
                class: 'name-3a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Hạn dùng",
                content: "60 ngày"
            },
            {
                name: 'name-4a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueNuocSx',
                class: 'name-4a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Nước sản xuất",
                content: "Việt Nam"
            },
            {
                name: 'columnDonViTinh',
                value: 'valueDonViTinh',
                class: 'center',
                height: "25px",
                title: "Đơn vị tính",
                content: "Chiếc"
            },
            {
                name: 'columnSoLuong',
                value: 'valueSoLuong',
                class: 'number-center',
                height: "25px",
                title: "Số lượng",
                content: "1"
            },
            {
                name: 'columnDonGia',
                value: 'valueDonGia',
                class: 'number',
                height: "25px",
                title: "Đơn giá",
                content: "1.000.000"
            },
            {
                name: 'columnTienCK',
                value: 'valueTienCK',
                class: 'number',
                height: "25px",
                title: "Tiền chiết khấu",
                content: ""
            },
            {
                name: 'columnThanhTienChuaCK',
                value: 'valueThanhTienChuaCK',
                class: 'number',
                height: "25px",
                title: "Thành tiền chưa chiết khấu",
                content: "1.000.000"
            },
            {
                name: 'columnThanhTien',
                value: 'valueThanhTien',
                class: 'number',
                height: "25px",
                title: "Thành tiền",
                content: "1.000.000"
            },
            {
                name: 'columnThueSuatGTGT',
                value: 'valueThueSuatGTGT',
                class: 'number-center',
                height: "25px",
                title: "Thuế suất GTGT",
                content: "0"
            },
            {
                name: 'columnTienThueGTGT',
                value: 'valueTienThueGTGT',
                class: 'number',
                height: "25px",
                title: "Tiền thuế GTGT",
                content: "0"
            },
            {
                name: 'columnThanhTienSauThue',
                value: 'valueThanhTienSauThue',
                class: 'number',
                height: "25px",
                title: "Thành tiền sau thuế",
                content: "1.000.000"
            },
            {
                name: 'columnMaSo',
                value: 'valueMaSo',
                class: 'columnMaSo',
                height: "25px",
                title: "Mã số",
                content: "MS001"
            },
            {
                name: 'columnThucXuat',
                value: 'valueThucXuat',
                class: 'number-center',
                height: "25px",
                title: "Thực xuất",
                content: "10"
            },
            {
                name: 'columnThucNhap',
                value: 'valueThucNhap',
                class: 'number-center',
                height: "25px",
                title: "Thực nhập",
                content: "10"
            },
            {
                name: 'columnThueKhac',
                value: 'valueThueKhac',
                class: 'number-center',
                height: "25px",
                title: "Thuế khác",
                content: "1.000.000"
            },
            {
                name: 'columnPhiKhac',
                value: 'valuePhiKhac',
                class: 'number-center',
                height: "25px",
                title: "Phí khác",
                content: "1.000.000"
            },
        ];
        this._objTemplateSelect = {};
        this.isTT78 = false;
        this._oTemplateTT78 = {};
        // sự kiện form
        this.totalPaymentChange = function (e) {
            _this.onNumberChange();
            var currency_code = _this.frmData.currency_code;
            if (_this.configs.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            _this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].tienBangChu(e.value, _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien), currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return 'Hoàn thành: ' + percent + '%';
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    InvoiceComponent.prototype.ngAfterViewInit = function () {
        if (this.frmData.status === 'DA_XUAT' || (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.GhiTam && this.frmData.send_department_status === 'KHONG_DU_DK_CAP_MA')
            || (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.GhiTam && this.frmData.send_department_status === 'DA_GUI_CQT' && this.frmData.is_invoice_with_code)) {
            this.disablleScreen();
            this.cdRef.detectChanges();
        }
        var a = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(), 's').toDate();
        this.setDataSessionStorage(this.frmData);
        this.setStudentChange(this.studentSelect);
    };
    InvoiceComponent.prototype.disablleScreen = function () {
        this.formInvoice.readonlyAllForm();
        this.productGrip.ttDaXuatHoaDon = true;
        this.studentGrid.ttDaXuatHoaDon = true;
        this.ttDaXuatHoaDon = true;
    };
    InvoiceComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        if (this.isXuat) {
            var status_1;
            if (!this.invoice.id && !this.invoice.invoice_number) {
                status_1 = 'THEM_MOI';
            }
            if (this.invoice.id && !this.invoice.invoice_number) {
                status_1 = 'GHI_TAM';
            }
            if (this.invoice.id && this.invoice.invoice_number) {
                status_1 = 'GIU_SO';
            }
            var xmlInvoice_1 = "";
            var isNewXml_1 = 0;
            if (status_1 === 'THEM_MOI') {
                if (this.isReceipts) {
                    var sub_1 = this.vatService.ghiTamForSeriesRecept(this.invoice, true).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            if (rs.data.batch_id) {
                                _this.invoicesArr.forEach(function (element) {
                                    element.batch_id = rs.data.batch_id;
                                });
                            }
                            _this.invoice.verify_code = rs.data.verify_code;
                            _this.invoice.invoice_number = rs.data.invoice_number;
                            _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                            var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                            _this.invoice.id = rs.data.id;
                            _this.invoicesId.push(rs.data.id);
                            // demo kí số vào file
                            // Lấy xml từ server
                            isNewXml_1 = rs.data.is_new_xml;
                            if (isNewXml_1)
                                _this.nodeSign = "//HDon/DSCKS/NBan";
                            else
                                _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                            xmlInvoice_1 = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
                            if (xmlInvoice_1 != "") {
                                _this.goiApiXuatHoaDon(xmlInvoice_1);
                            }
                        }
                        else {
                            _this.refreshStudent();
                            _this.ghiTam(rs.message);
                            // this.showPopupImport = false;
                            // this.errorImport = true;
                            //   Library.notify(, 'error');
                        }
                    }, function (err) {
                    }, function () {
                        sub_1.unsubscribe();
                    });
                }
                else {
                    if (!this.isTT78) {
                        var sub_2 = this.vatService.ghiTamForSeries(this.invoice, true).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                if (rs.data.batch_id) {
                                    _this.invoicesArr.forEach(function (element) {
                                        element.batch_id = rs.data.batch_id;
                                    });
                                }
                                _this.invoice.verify_code = rs.data.verify_code;
                                _this.invoice.invoice_number = rs.data.invoice_number;
                                _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                                _this.invoice.id = rs.data.id;
                                _this.invoicesId.push(rs.data.id);
                                // demo kí số vào file
                                // Lấy xml từ server
                                isNewXml_1 = rs.data.is_new_xml;
                                if (isNewXml_1)
                                    _this.nodeSign = "//HDon/DSCKS/NBan";
                                else
                                    _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                                xmlInvoice_1 = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
                                if (xmlInvoice_1 != "") {
                                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                        _this.goiApiXuatHoaDon(xmlInvoice_1);
                                    }
                                    else {
                                        _this.xuLyKiFile(xmlInvoice_1, _this.invoice.invoice_date);
                                    }
                                }
                            }
                            else {
                                _this.refreshStudent();
                                _this.ghiTam(rs.message);
                                // this.showPopupImport = false;
                                // this.errorImport = true;
                                //   Library.notify(, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            sub_2.unsubscribe();
                        });
                    }
                    else {
                        var sub_3 = this.vatService.ghiTamForSeriesTT78(this.invoice, true).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                if (rs.data.batch_id) {
                                    _this.invoicesArr.forEach(function (element) {
                                        element.batch_id = rs.data.batch_id;
                                    });
                                }
                                _this.invoice.verify_code = rs.data.verify_code;
                                _this.invoice.invoice_number = rs.data.invoice_number;
                                _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                                var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                                _this.invoice.id = rs.data.id;
                                _this.invoicesId.push(rs.data.id);
                                // demo kí số vào file
                                // Lấy xml từ server
                                isNewXml_1 = rs.data.is_new_xml;
                                if (isNewXml_1)
                                    _this.nodeSign = "//HDon/DSCKS/NBan";
                                else
                                    _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                                xmlInvoice_1 = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
                                if (xmlInvoice_1 != "") {
                                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                        _this.goiApiXuatHoaDon(xmlInvoice_1);
                                    }
                                    else {
                                        _this.xuLyKiFile(xmlInvoice_1, invoice_sign_date);
                                    }
                                }
                            }
                            else {
                                _this.refreshStudent();
                                _this.ghiTam(rs.message);
                                // this.showPopupImport = false;
                                // this.errorImport = true;
                                //   Library.notify(, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            sub_3.unsubscribe();
                        });
                    }
                }
            }
            else if (status_1 === 'GHI_TAM') {
                if (this.isReceipts) {
                    var sub_4 = this.vatService.editBatchRecept(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            if (rs.data.batch_id) {
                                _this.invoicesArr.forEach(function (element) {
                                    element.batch_id = rs.data.batch_id;
                                });
                            }
                            _this.invoice.verify_code = rs.data.verify_code;
                            _this.invoice.invoice_number = rs.data.invoice_number;
                            _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                            var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                            _this.invoicesId.push(_this.invoice.id);
                            // demo kí số vào file
                            // Lấy xml từ server
                            isNewXml_1 = rs.data.is_new_xml;
                            if (isNewXml_1)
                                _this.nodeSign = "//HDon/DSCKS/NBan";
                            else
                                _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                            xmlInvoice_1 = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
                            if (xmlInvoice_1 != "") {
                                _this.goiApiXuatHoaDon(xmlInvoice_1);
                            }
                        }
                        else {
                            _this.refreshStudent();
                            _this.ghiTam(rs.message);
                            // this.showPopupImport = false;
                            // this.errorImport = true;
                            // Library.notify(rs.message, 'error');
                        }
                    }, function (err) {
                    }, function () {
                        sub_4.unsubscribe();
                    });
                }
                else {
                    if (!this.isTT78) {
                        var sub_5 = this.vatService.editBatch(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                if (rs.data.batch_id) {
                                    _this.invoicesArr.forEach(function (element) {
                                        element.batch_id = rs.data.batch_id;
                                    });
                                }
                                _this.invoice.verify_code = rs.data.verify_code;
                                _this.invoice.invoice_number = rs.data.invoice_number;
                                _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                                _this.invoicesId.push(_this.invoice.id);
                                // demo kí số vào file
                                // Lấy xml từ server
                                isNewXml_1 = rs.data.is_new_xml;
                                if (isNewXml_1)
                                    _this.nodeSign = "//HDon/DSCKS/NBan";
                                else
                                    _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                                xmlInvoice_1 = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
                                if (xmlInvoice_1 != "") {
                                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                        _this.goiApiXuatHoaDon(xmlInvoice_1);
                                    }
                                    else {
                                        _this.xuLyKiFile(xmlInvoice_1, _this.invoice.invoice_date);
                                    }
                                }
                            }
                            else {
                                _this.refreshStudent();
                                _this.ghiTam(rs.message);
                                // this.showPopupImport = false;
                                // this.errorImport = true;
                                // Library.notify(rs.message, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            sub_5.unsubscribe();
                        });
                    }
                    else {
                        var sub_6 = this.vatService.editBatchTT78(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                if (rs.data.batch_id) {
                                    _this.invoicesArr.forEach(function (element) {
                                        element.batch_id = rs.data.batch_id;
                                    });
                                }
                                _this.invoice.verify_code = rs.data.verify_code;
                                _this.invoice.invoice_number = rs.data.invoice_number;
                                _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                                var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                                _this.invoicesId.push(_this.invoice.id);
                                // demo kí số vào file
                                // Lấy xml từ server
                                isNewXml_1 = rs.data.is_new_xml;
                                if (isNewXml_1)
                                    _this.nodeSign = "//HDon/DSCKS/NBan";
                                else
                                    _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                                xmlInvoice_1 = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
                                if (xmlInvoice_1 != "") {
                                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                        _this.goiApiXuatHoaDon(xmlInvoice_1);
                                    }
                                    else {
                                        _this.xuLyKiFile(xmlInvoice_1, invoice_sign_date);
                                    }
                                }
                            }
                            else {
                                _this.refreshStudent();
                                _this.ghiTam(rs.message);
                                // this.showPopupImport = false;
                                // this.errorImport = true;
                                // Library.notify(rs.message, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            sub_6.unsubscribe();
                        });
                    }
                }
            }
            else if (status_1 === 'GIU_SO') {
                if (this.isReceipts) {
                    var sub_7 = this.vatService.editBatchRecept(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            if (rs.data.batch_id) {
                                _this.invoicesArr.forEach(function (element) {
                                    element.batch_id = rs.data.batch_id;
                                });
                            }
                            _this.invoice.verify_code = rs.data.verify_code;
                            _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                            var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                            _this.invoicesId.push(_this.invoice.id);
                            // demo kí số vào file
                            // Lấy xml từ server
                            isNewXml_1 = rs.data.is_new_xml;
                            if (isNewXml_1)
                                _this.nodeSign = "//HDon/DSCKS/NBan";
                            else
                                _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                            xmlInvoice_1 = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
                            if (xmlInvoice_1 != "") {
                                _this.goiApiXuatHoaDon(xmlInvoice_1);
                            }
                        }
                        else {
                            _this.refreshStudent();
                            _this.ghiTam(rs.message);
                            // this.showPopupImport = false;
                            // this.errorImport = true;
                            // Library.notify(, 'error');
                        }
                    }, function (err) {
                    }, function () {
                        sub_7.unsubscribe();
                    });
                }
                else {
                    if (!this.isTT78) {
                        var sub_8 = this.vatService.editBatch(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                if (rs.data.batch_id) {
                                    _this.invoicesArr.forEach(function (element) {
                                        element.batch_id = rs.data.batch_id;
                                    });
                                }
                                _this.invoice.verify_code = rs.data.verify_code;
                                _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                                _this.invoicesId.push(_this.invoice.id);
                                // demo kí số vào file
                                // Lấy xml từ server
                                isNewXml_1 = rs.data.is_new_xml;
                                if (isNewXml_1)
                                    _this.nodeSign = "//HDon/DSCKS/NBan";
                                else
                                    _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                                xmlInvoice_1 = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
                                if (xmlInvoice_1 != "") {
                                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                        _this.goiApiXuatHoaDon(xmlInvoice_1);
                                    }
                                    else {
                                        _this.xuLyKiFile(xmlInvoice_1, _this.invoice.invoice_date);
                                    }
                                }
                            }
                            else {
                                _this.refreshStudent();
                                _this.ghiTam(rs.message);
                                // this.showPopupImport = false;
                                // this.errorImport = true;
                                // Library.notify(, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            sub_8.unsubscribe();
                        });
                    }
                    else {
                        var sub_9 = this.vatService.editBatchTT78(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                if (rs.data.batch_id) {
                                    _this.invoicesArr.forEach(function (element) {
                                        element.batch_id = rs.data.batch_id;
                                    });
                                }
                                _this.invoice.verify_code = rs.data.verify_code;
                                _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                                var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                                _this.invoicesId.push(_this.invoice.id);
                                // demo kí số vào file
                                // Lấy xml từ server
                                isNewXml_1 = rs.data.is_new_xml;
                                if (isNewXml_1)
                                    _this.nodeSign = "//HDon/DSCKS/NBan";
                                else
                                    _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                                xmlInvoice_1 = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
                                if (xmlInvoice_1 != "") {
                                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                        _this.goiApiXuatHoaDon(xmlInvoice_1);
                                    }
                                    else {
                                        _this.xuLyKiFile(xmlInvoice_1, invoice_sign_date);
                                    }
                                }
                            }
                            else {
                                _this.refreshStudent();
                                _this.ghiTam(rs.message);
                                // this.showPopupImport = false;
                                // this.errorImport = true;
                                // Library.notify(, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            sub_9.unsubscribe();
                        });
                    }
                }
            }
        }
    };
    InvoiceComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        if (this.isXuat) {
            var percentComplete_1 = 100 / this.totalInvoice;
            if (this.isReceipts) {
                this.valueProgress += percentComplete_1;
                if (this.countInvoice < this.totalInvoice) {
                    this.countInvoice++;
                    this.xuatHoaDon();
                }
                else if (this.countInvoice === this.totalInvoice) {
                    this.setDataSessionStorage(this.frmData);
                    this.isChildInvoices = false;
                    this.disablleScreen();
                    this.refreshStudent();
                    this.setStudentChange(this.studentSelect);
                    this.isExportInvoice = true;
                    if (this.isReceipts) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.export_success_re, 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.export_success, 'success');
                    }
                    // this.isVisibleBtnSubmit = false;
                    this.showPopupImport = false;
                    this.errorImport = true;
                }
            }
            else {
                this.subXuatHoaDon = this.vatService.xuatHoaDon({
                    id: this.invoice.id,
                    xml_string: xml_string
                }).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        // this.formInvoice.readonlyAllForm();
                        //    this.ttDaXuatHoaDon = true;
                        _this.invoice.status = rs.data.status;
                        _this.valueProgress += percentComplete_1;
                        if (_this.countInvoice < _this.totalInvoice) {
                            _this.countInvoice++;
                            _this.xuatHoaDon();
                        }
                        else if (_this.countInvoice === _this.totalInvoice) {
                            _this.setDataSessionStorage(_this.frmData);
                            _this.isChildInvoices = false;
                            _this.disablleScreen();
                            _this.refreshStudent();
                            _this.setStudentChange(_this.studentSelect);
                            _this.isExportInvoice = true;
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                            // this.isVisibleBtnSubmit = false;
                            _this.showPopupImport = false;
                            _this.errorImport = true;
                        }
                    }
                    else {
                        _this.refreshStudent();
                        _this.setStudentChange(_this.studentSelect);
                        _this.ghiTam(rs.message);
                        // this.showPopupImport = false;
                        // this.errorImport = true;
                        // Library.notify(, 'error');
                    }
                });
            }
        }
    };
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.data.type === '08HSPT') {
            this.isReceipts = true;
        }
        if (this.route.snapshot.queryParams['status'] === 'return') {
            this.showTraLai = true;
        }
        if (this.route.snapshot.queryParams['status'] === 'sign') {
            this.showKyDuyet = true;
        }
        var isViewTT32 = false;
        if (this.route.snapshot.queryParams['status'] === 'viewInvTT32') {
            isViewTT32 = true;
        }
        // kết nối websocket
        this.connectWebsocket();
        var a = moment__WEBPACK_IMPORTED_MODULE_2__();
        this.currentUser = this.authService.getCurrentUser();
        this.select.arrayYears = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].listYears(this.currentUser.account.start_time_study, a);
        this.routeSub = this.route.data.subscribe(function (data) {
            // get cấu hình
            _this.configs = _this.authService.getConfigs();
            _this.infoDangKy = _this.authService.getInfoRegister();
            _this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterColumnInv(_this.configs.decimal_places_json);
            _this.frmData.display_currency = JSON.stringify(_this.configs.display_currency);
            _this.formatter.display_int = _this.configs.system_parameter.display_int;
            // put data DM for select
            _this.select.invoice_releases = data.init[0];
            var danh_muc = _this.authService.getDMLocal();
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.select_provisions_on_accounts = danh_muc.DM_DINH_KHOAN ? danh_muc.DM_DINH_KHOAN.data : null;
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            _this.select.class_codes = danh_muc.DM_LOP_HOC ? danh_muc.DM_LOP_HOC.data : null;
            _this.select.student_reduce_rate_codes = danh_muc.DM_TY_LE_MIEN_GIAM_HOC_PHI ? danh_muc.DM_TY_LE_MIEN_GIAM_HOC_PHI.data : null;
            var loaiHoaDon = data.type;
            _this.isChildInvoices = data.init[4] == "true" ? true : false;
            _this.isHdGTGT = loaiHoaDon === '01GTKT';
            if (_this.infoDangKy) {
                if (_this.infoDangKy.status == "CHAP_NHAN")
                    _this.isTT78 = true;
            }
            if (_this.isTT78 == true && isViewTT32)
                _this.isTT78 = false;
            if (_this.isReceipts)
                _this.isTT78 = true;
            var isEdit = false;
            var invoice;
            if (data.init[2] == true)
                isEdit = true;
            if (_this.isTT78) {
                var temptTT78 = [];
                if (isEdit) {
                    temptTT78 = data.init[3];
                    invoice = data.init[1];
                }
                else {
                    temptTT78 = data.init[1];
                }
                if (temptTT78 && temptTT78.length > 0) {
                    if (!_this.isReceipts)
                        _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
                    else
                        _this.select.templatesTT78 = temptTT78;
                    if (invoice && Number.parseInt(invoice.invoice_number) > 0) {
                        if (invoice.is_invoice_with_code != _this.infoDangKy.is_invoice_with_code) {
                            _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == invoice.is_invoice_with_code; });
                        }
                    }
                }
            }
            else {
                _this.select.invoice_releases = data.init[0];
                if (isEdit)
                    invoice = data.init[3];
            }
            if (isEdit) {
                _this.khoiTaoKhiSua(invoice);
            }
            else {
                _this.khoiTaoKhiThemMoi();
            }
        });
        var listpermissions = this.currentUser.user.permissions.split(',');
        var _obj = listpermissions.filter(function (p) { return p === 'phe_duyet'; });
        if (_obj.length > 0) {
            this.isAccessExportInv = true;
        }
        else {
            this.isAccessExportInv = false;
        }
    };
    InvoiceComponent.prototype.setDataSessionStorage = function (data) {
        this.valueChange = JSON.stringify(data);
    };
    InvoiceComponent.prototype.checkDataFormChange = function (dataChange, dataForm) {
        var dataBefore = JSON.parse(dataChange);
        var dataAfter = JSON.parse(JSON.stringify(dataForm));
        return lodash__WEBPACK_IMPORTED_MODULE_14__["isEqual"](dataBefore, dataAfter);
    };
    InvoiceComponent.prototype.checkStudentChange = function (jsonStudentBefore, arrStudentAfter) {
        var dataBefore = JSON.parse(jsonStudentBefore);
        var dataAfter = JSON.parse(JSON.stringify(arrStudentAfter));
        return lodash__WEBPACK_IMPORTED_MODULE_14__["isEqual"](dataBefore, dataAfter);
    };
    InvoiceComponent.prototype.setStudentChange = function (data) {
        this.jsonStudents = JSON.stringify(data);
    };
    InvoiceComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                // Helper.dowloadFile('test.xml', 'xml', data.Data.Content);
                if (data.Data.Name === 'hoadon.xml') {
                    _this.goiApiXuatHoaDon(data.Data.Content);
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    _this.invoice.issuer_name = data.Data.IssuerName;
                    _this.xuLiApiKhiXuat();
                }
                else {
                    _this.frmData.invoice_files.forEach(function (item) {
                        if (item.file_name === data.Data.Name) {
                            item.file_content = data.Data.Content;
                        }
                    });
                    _this.tempKiFile++;
                    if (_this.tempKiFile === _this.frmData.invoice_files.length) {
                        _this.xuLiApiKhiXuat();
                    }
                }
            }
            else if (data.SvcName === 'efy_viewInvoice') {
                if (data.Status == "success")
                    _this.viewInvoice(data.Data.Content, data.Data.typeView, data.Data.hinhthucxuat, data.Data.invoice_date);
                else if (data.Status == "error") {
                    var popUp = window.open('about:blank', 'name', 'width=200, height=100');
                    if (popUp == null || typeof (popUp) == 'undefined') {
                    }
                    else
                        popUp.close();
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(data.Description, 'error');
                    _this.spinner.hide();
                }
            }
        }, function (err) {
        });
    };
    InvoiceComponent.prototype.khoiTaoKhiThemMoi = function () {
        var _this = this;
        // khởi tạo mới lưới
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9___default.a({
            key: 'id',
            data: this.frmData.invoice_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10___default.a({
            store: this.invoice_products
        });
        if (this.isReceipts) {
            this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
        }
        this.select.payment_method_names.some(function (item) {
            if (item.is_default) {
                _this.frmData.payment_method_name = item.code;
                var _obj = _this.select.payment_method_names.filter(function (p) { return p.code === item.code; })[0];
                if (_obj) {
                    _this.frmData.payment_method_view_name = _obj.name;
                }
            }
        });
        if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this.frmData.payment_method_name) === '') {
            this.frmData.payment_method_name = 'TMCK';
            this.frmData.payment_method_view_name = 'TM/CK';
        }
        this.fee_months = this.select.arrayYears[1];
        // tạo mới đối tượng file
        this.fileData = [];
        // cấu hình thập phân thêm mới
        // set value default
        if (!this.isTT78) {
            if (this.select.invoice_releases.length) {
                this.select.invoice_releases = this.select.invoice_releases.filter(function (p) { return p.number_survival > 0 && p.release_status != 'DA_HUY_SO'; });
                this.frmData.invoice_release_id = this.select.invoice_releases[0].value;
                this.frmData.template_id = this.select.invoice_releases[0].template_id;
                for (var key in this.select.invoice_releases[0]) {
                    if (this.select.invoice_releases[0].hasOwnProperty(key)) {
                        this._objTemplateSelect[key] = this.select.invoice_releases[0][key];
                    }
                }
                this.is_multi_vat = this.select.invoice_releases[0].is_multi_vat;
                this.invoicereleaseTempt = this.select.invoice_releases[0];
                this.getTemplate();
            }
        }
        else {
            if (this.select.templatesTT78.length) {
                this.frmData.template_id = this.select.templatesTT78[0].value;
                this.frmData.invoice_series = this.select.templatesTT78[0].invoice_series;
                this.frmData.template_code = this.select.templatesTT78[0].template_code;
                for (var key in this.select.templatesTT78[0]) {
                    if (this.select.templatesTT78[0].hasOwnProperty(key)) {
                        this._oTemplateTT78[key] = this.select.templatesTT78[0][key];
                    }
                }
                this.is_multi_vat = this.select.templatesTT78[0].is_multi_vat;
                this.invoiceTemplateTT78 = this.select.templatesTT78[0];
                this.getTemplateTT78();
            }
        }
        this.frmData.currency_code = 'VND';
        this.frmData.student_reduce_rate_code = 'KHONG_MIEN_GIAM';
        this.select.student_reduce_rate_codes.forEach(function (item) {
            if (_this.frmData.student_reduce_rate_code === item.code) {
                _this.student_reduce_rate_code = item.note;
            }
        });
        this.frmData.study_year = this.select.arrayYears[1].code;
        this.setDataSessionStorage(this.frmData);
        this.setStudentChange(this.studentSelect);
    };
    InvoiceComponent.prototype.khoiTaoKhiSua = function (data) {
        var _this = this;
        // khởi tạo lưới từ dữ liệu sửa
        var _lst = this.frmData.setInvoice_products_data(data.invoice_products);
        if (_lst) {
            _lst.forEach(function (item) {
                if (item.product_name && item.unit_name) {
                    var obj1 = _this.select.unit_codes.filter(function (p) { return p.name === item.unit_name; })[0];
                    if (!obj1) {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(item.unit_code) == "")
                            item.unit_code = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._convertToViKdau(item.unit_name);
                        var oDuplicate = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                        if (oDuplicate)
                            item.unit_code = item.unit_code + _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].addtionalUnitCode();
                    }
                    else if (!item.unit_code || (item.unit_code && item.unit_code != obj1.code))
                        item.unit_code = obj1.code;
                }
            });
        }
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9___default.a({
            key: 'id',
            data: _lst
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10___default.a({
            store: this.invoice_products
        });
        this.frmData.fillFormData(data.invoices);
        this.arrayIdEdit = data.students.map(function (obj) { return obj.id; });
        this.fee_months = this.select.arrayYears.filter(function (p) { return p.code == _this.frmData.study_year; })[0];
        var lstGiuSo = data.students.filter(function (p) { return p.status == "GIU_SO"; });
        if (lstGiuSo)
            this.totalCountWaitSign = lstGiuSo.length;
        // mẫu nhiều loại thuế suất ko
        this.renderDataStudent(data.students, true);
        // khởi tạo dữ liệu form
        if (this.frmData.vat_service_ticket != null) {
            this.frmData.vat_service_ticket = this.frmData.vat_service_ticket.toString();
        }
        // lấy file
        this.fileData = data.invoice_files;
        this.frmData.invoice_files = data.invoice_files;
        if (!this.isTT78) {
            this.select.invoice_releases.forEach(function (item) {
                if (item.value === _this.frmData.invoice_release_id) {
                    _this.invoicereleaseTempt = item;
                    _this.getTemplate();
                }
            });
            this.select.invoice_releases.some(function (item) {
                if (item.value === _this.frmData.invoice_release_id) {
                    _this.is_multi_vat = item.is_multi_vat;
                    for (var key in item) {
                        if (item.hasOwnProperty(key)) {
                            _this._objTemplateSelect[key] = item[key];
                        }
                    }
                    return true;
                }
            });
        }
        else {
            this.select.templatesTT78.forEach(function (item) {
                if (item.value === _this.frmData.template_id) {
                    _this.invoiceTemplateTT78 = item;
                    _this.getTemplateTT78();
                }
            });
            this.select.templatesTT78.some(function (item) {
                if (item.value === _this.frmData.template_id) {
                    _this.is_multi_vat = item.is_multi_vat;
                    for (var key in item) {
                        if (item.hasOwnProperty(key)) {
                            _this._oTemplateTT78[key] = item[key];
                        }
                    }
                    return true;
                }
            });
        }
        this.select.student_reduce_rate_codes.forEach(function (item) {
            if (_this.frmData.student_reduce_rate_code === item.code) {
                _this.student_reduce_rate_code = item.note;
            }
        });
        if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this.frmData.approve_status) == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.TuChoi) {
            this.isTuChoi = true;
        }
        if (data.invoice_options) {
            this.frmData.invoice_options = data.invoice_options;
        }
        //  if (this.frmData.status != "DA_XUAT")
        this.onCheckDuplicate(_lst);
        // cấu hình thập phân thêm mới
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.invoices.decimal_places_json));
        this.loadInvoiceProduct(_lst);
        this.setDataSessionStorage(this.frmData);
        this.setStudentChange(this.studentSelect);
    };
    /** Tương tác giữa các component  */
    InvoiceComponent.prototype.onTemplateChange = function (e) {
        this.is_multi_vat = e;
    };
    InvoiceComponent.prototype.onStudyYearChange = function (e) {
        this.fee_months = e;
    };
    InvoiceComponent.prototype.onRedueFeeChange = function (e) {
        var _this = this;
        this.dataSource.items().forEach(function (item) {
            var product = _this.arrProducts.filter(function (p) { return p.code = item.product_code; })[0];
            if (product) {
                item.price = parseFloat(product.price) - (product.price * parseFloat(e.note)) / 100;
            }
        });
        if (!this.isTT78)
            _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._objTemplateSelect, this.configs.system_parameter);
        else
            _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._oTemplateTT78, this.configs.system_parameter);
        this.student_reduce_rate_code = e.note;
        this.onCheckDuplicate(null);
    };
    InvoiceComponent.prototype.onTemplateTypeChange = function (e) {
        this.invoicereleaseTempt = e;
        this.getTemplate();
        this.onCheckDuplicate(null);
    };
    InvoiceComponent.prototype.onTemplateTT78TypeChange = function (e) {
        this.invoiceTemplateTT78 = e;
        this.getTemplateTT78();
        this.onCheckDuplicate(null);
    };
    InvoiceComponent.prototype.fillDataToForm = function (e) {
        this.frmData.customer_name = e[0];
        this.frmData.buyer_tax_code = e[1];
        this.frmData.buyer_address = e[2];
    };
    InvoiceComponent.prototype.getDataInChildForm = function (e) {
        this.frmData = e;
        this.frmTraLai.reason = e.lido;
    };
    InvoiceComponent.prototype.onNumberChange = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"]._changeMoney(this.frmData);
    };
    InvoiceComponent.prototype.updateSomeTotalInput = function (e) {
    };
    InvoiceComponent.prototype.fillAutoInput = function (e) {
        // this.frmData.auto_value = e;
    };
    // Lấy data khi chọn file đính kèm bảng kê
    InvoiceComponent.prototype.getFileData = function (fileData) {
        this.fileData = fileData;
    };
    /** Kết thúc */
    InvoiceComponent.prototype.roundNumber = function (number, n) {
        if (number == null) {
            return number;
        }
        else {
            var p = Math.pow(10, n);
            return Math.round(number * p) / p;
        }
    };
    InvoiceComponent.prototype.getFormatterToNumber = function (formatter) {
        var s1 = formatter.replace('0,###', '');
        if (s1 === '') {
            return 0;
        }
        else {
            var s2 = s1.replace('.', '');
            return s2.split('').length;
        }
    };
    InvoiceComponent.prototype.formatDecimalColumn = function (number) {
        if (number === 0) {
            return '0,###';
        }
        else {
            return '0,###.' + '0'.repeat(number);
        }
    };
    InvoiceComponent.prototype.inChuyenDoiText = function () {
        if (this.frmData.time_print_conversion > 0) {
            return this._translate.CONTROLL.BUTTON.view_conversion;
        }
        else {
            return this._translate.CONTROLL.BUTTON.print_conversion;
        }
    };
    InvoiceComponent.prototype.onNumberTicketChange = function () {
        if (!this.isTT78) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._objTemplateSelect, this.configs.system_parameter);
            if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].templatetype.HoaDonVeMayBay
                || _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                || _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                || _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].templatetype.HoaDonXangDau) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"]._changeMoneyTicket(this.frmData, this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this._objTemplateSelect.template_type));
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._oTemplateTT78, this.configs.system_parameter);
            if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].templatetype.HoaDonVeMayBay
                || _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                || _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                || _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].templatetype.HoaDonXangDau) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"]._changeMoneyTicket(this.frmData, this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this._oTemplateTT78.template_type));
            }
        }
    };
    // xem trước
    InvoiceComponent.prototype.preview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var win_1, data, w, h, win_2, sub_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.template && this.template.number_of_row > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handleFormData()];
                    case 1:
                        _a.sent();
                        if (!this._validForm(true)) {
                            return [2 /*return*/];
                        }
                        this.convertGridToInvoices(true);
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        win_1 = window.open("", "", "width=200, height=100");
                        win_1.document.body.innerHTML = this._translate.NOTIFY.loading;
                        win_1.blur();
                        this.createFormTypeBase64(true);
                        win_1.document.write("\n      <div width=\"70%\" height=\"95%\">\n      " + this.arrHtml + "\n      </div>\n      ");
                        setTimeout(function () {
                            win_1.resizeTo(screen.availWidth, screen.availHeight);
                            win_1.focus();
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                        }, 100);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.handleFormData()];
                    case 3:
                        _a.sent();
                        if (!this._validForm(true)) {
                            return [2 /*return*/];
                        }
                        this.convertGridToInvoices(true);
                        data = {
                            invoices: [this.invoicesArr[0]]
                        };
                        w = 1920, h = 900;
                        w = window.screen.availWidth * 100 / 100;
                        h = window.screen.availHeight * 93 / 100;
                        win_2 = window.open('about:blank', 'name', 'width=200, height=100');
                        win_2.document.body.innerHTML = this._translate.NOTIFY.loading;
                        win_2.blur();
                        this.spinner.show();
                        sub_10 = this.vatService.previewInvoiceImport(data).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                _this.xemhoadonPDF(rs);
                            }
                            else {
                                win_2.close();
                                _this.spinner.hide();
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                            }
                        }, function (err) {
                            _this.spinner.hide();
                        }, function () {
                            sub_10.unsubscribe();
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InvoiceComponent.prototype.previewBeforeSubmit = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, date, note, data, invoiceDate, htx, du_lieu, content_invoice, initialState, subModal_1, trang_thai, du_lieu, content_invoice, initialState, subModal_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        header = 'BẢN DỰ THẢO HÓA ĐƠN ĐIỆN TỬ';
                        date = 'Ngày hóa đơn';
                        note = 'Đề nghị đơn vị kiểm tra thật kỹ các nội dung hóa đơn đã nhập trước khi xuất như: Ngày hóa đơn, Bên mua hàng, Tên hàng hóa dịch vụ, Tổng tiền,…để tránh xuất sai.';
                        if (this.isReceipts) {
                            header = 'BẢN DỰ THẢO PHIẾU THU';
                            date = 'Ngày phiếu thu';
                            note = 'Đề nghị đơn vị kiểm tra thật kỹ các nội dung phiếu thu đã nhập trước khi xuất như: Ngày phiếu thu, Tên HS-SV, Tên khoản thu, Tổng tiền,…để tránh xuất sai.';
                        }
                        if (!(this.template && this.template.number_of_row > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handleFormData()];
                    case 1:
                        _a.sent();
                        data = {
                            invoices: this.invoicesArr
                        };
                        this.createFormTypeBase64(true);
                        invoiceDate = void 0;
                        if (this.frmData.invoice_date)
                            invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.frmData.invoice_date).format('DD/MM/YYYY');
                        else
                            invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__().format('DD/MM/YYYY');
                        htx = '';
                        if (this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].hinhThucXuat.XuatChoKy && !this.isReceipts) {
                            htx = 'Xuất và ký';
                        }
                        else if (this.isReceipts) {
                            htx = '';
                        }
                        else {
                            htx = 'Xuất chờ ký';
                        }
                        du_lieu = {};
                        du_lieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.htmlHS;
                        du_lieu['file_content'] = this.arrHtml;
                        content_invoice = {
                            du_lieu: du_lieu,
                            ngay_hoa_don: invoiceDate,
                            trang_thai: htx,
                            tong_tien: "",
                            title_invoice_type: header,
                            note_warn: note,
                            is_display_img_note: true,
                            text_ngay_hoa_don: date,
                            text_tong_tien: this._translate.THONG_TIN.tong_tien,
                            question_again: this._translate.THONG_TIN.ban_co_chac_chan_xuat_hoa_don_khong
                        };
                        initialState = {
                            content_invoice: content_invoice,
                        };
                        this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_25__["PreviewInvoiceComponent"], {
                            backdrop: 'static',
                            keyboard: false,
                            class: 'modal-xl prv-s-invoice v-s-invoice',
                            initialState: initialState
                        });
                        subModal_1 = this.customeModalService.onHide.subscribe(function () {
                            if (_this.bsModalRef.content.successSaveItem == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].actionHander.DongY) {
                                _this.confirmCheckPreview = true;
                                if (type === 'TRINH_KY') {
                                    _this.eSubmit('TRINH_KY');
                                }
                                else {
                                    _this.eSubmit('XUAT');
                                }
                            }
                            subModal_1.unsubscribe();
                        });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.handleFormData()];
                    case 3:
                        _a.sent();
                        trang_thai = '';
                        if (this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].hinhThucXuat.XuatChoKy) {
                            trang_thai = this._translate.THONG_TIN.xuat_va_ky;
                        }
                        else {
                            trang_thai = this._translate.THONG_TIN.xuat_cho_ky;
                        }
                        du_lieu = this.vatService.taodulieuXemTruocMauHS([this.invoicesArr[0]]);
                        du_lieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadon;
                        content_invoice = {
                            du_lieu: du_lieu,
                            ngay_hoa_don: "",
                            trang_thai: trang_thai,
                            tong_tien: "",
                            so_hoa_don: this.invoicesArr.length,
                            title_invoice_type: this._translate.THONG_TIN.ban_du_thao_hoa_don.toUpperCase(),
                            note_warn: this._translate.THONG_TIN.luu_y_truoc_khi_xuat,
                            is_display_img_note: true,
                            text_ngay_hoa_don: this._translate.THONG_TIN.ngay_hoa_don,
                            text_tong_tien: this._translate.THONG_TIN.tong_tien,
                            question_again: this._translate.THONG_TIN.ban_co_chac_chan_xuat_hoa_don_khong
                        };
                        initialState = {
                            content_invoice: content_invoice,
                        };
                        this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_25__["PreviewInvoiceComponent"], {
                            backdrop: 'static',
                            keyboard: false,
                            class: 'modal-xl prv-s-invoice v-s-invoice',
                            initialState: initialState
                        });
                        subModal_2 = this.customeModalService.onHide.subscribe(function () {
                            if (_this.bsModalRef.content.successSaveItem == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].actionHander.DongY) {
                                _this.confirmCheckPreview = true;
                                if (type === 'TRINH_KY') {
                                    _this.eSubmit('TRINH_KY');
                                }
                                else {
                                    _this.eSubmit('XUAT');
                                }
                            }
                            subModal_2.unsubscribe();
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Xem lại hoá đơn
    InvoiceComponent.prototype.view = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var win_3, w, h, win_4, sub_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.template.number_of_row > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handleFormData()];
                    case 1:
                        _a.sent();
                        if (!this._validForm(true)) {
                            return [2 /*return*/];
                        }
                        this.convertGridToInvoices(true, true);
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        win_3 = window.open('about:blank', 'name', "width=200, height=100");
                        win_3.document.body.innerHTML = this._translate.NOTIFY.loading;
                        win_3.blur();
                        this.createFormTypeBase64(false);
                        win_3.document.write("\n      <div width=\"70%\" height=\"95%\">\n      " + this.arrHtml + "\n      </div>\n      ");
                        setTimeout(function () {
                            win_3.resizeTo(screen.availWidth, screen.availHeight);
                            win_3.focus();
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                        }, 100);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.handleFormData()];
                    case 3:
                        _a.sent();
                        if (!this._validForm(true)) {
                            return [2 /*return*/];
                        }
                        this.convertGridToInvoices(true, true);
                        w = 1920, h = 900;
                        w = window.screen.availWidth * 100 / 100;
                        h = window.screen.availHeight * 93 / 100;
                        win_4 = window.open('about:blank', 'name', 'width=200, height=100');
                        win_4.document.body.innerHTML = this._translate.NOTIFY.loading;
                        win_4.blur();
                        this.spinner.show();
                        sub_11 = this.vatService.xemHoaDonInvoiceImport([this.invoicesArr[0].id]).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                _this.xemhoadonPDF(rs);
                            }
                            else {
                                win_4.close();
                                _this.spinner.hide();
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                            }
                        }, function (err) {
                            _this.spinner.hide();
                        }, function () {
                            sub_11.unsubscribe();
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InvoiceComponent.prototype.inChuyenDoi = function () {
        var _this = this;
        var w = 1920, h = 900;
        w = window.screen.availWidth * 100 / 100;
        h = window.screen.availHeight * 93 / 100;
        var win = window.open("about:blank", "name", "width=200, height=100");
        win.document.body.innerHTML = this._translate.NOTIFY.loading;
        win.blur();
        this.spinner.show();
        var ids = [];
        ids.push(this.invoicesId[0]);
        var sub = this.vatService.inChuyenDoiInvoiceImport(ids, false).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.xemhoadonPDF(rs);
            }
            else {
                win.close();
                _this.spinner.hide();
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    InvoiceComponent.prototype.xuatChoKy = function () {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.invoice = this.invoicesArr[this.countInvoice - 1];
        if (this.isReceipts) {
            this.subLuuChoXuat = this.vatService.xuatChoKyForSeriesRecept(this.invoice).subscribe(function (rs) {
                if (rs.status === 'success') {
                    if (rs.data.batch_id) {
                        _this.invoicesArr.forEach(function (element) {
                            element.batch_id = rs.data.batch_id;
                        });
                    }
                    _this.invoice.verify_code = rs.data.verify_code;
                    _this.invoice.invoice_number = rs.data.invoice_number;
                    _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.invoice.id = rs.data.id;
                    _this.invoicesId.push(rs.data.id);
                    _this.valueProgress += percentComplete;
                    if (_this.countInvoice < _this.totalInvoice) {
                        _this.countInvoice++;
                        _this.xuatChoKy();
                    }
                    else if (_this.countInvoice === _this.totalInvoice) {
                        _this.refreshStudent();
                        _this.setDataSessionStorage(_this.frmData);
                        _this.setStudentChange(_this.studentSelect);
                        _this.isChildInvoices = false;
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        //   this.bsModalImportRef.hide();
                    }
                }
                else {
                    _this.refreshStudent();
                    _this.setStudentChange(_this.studentSelect);
                    _this.ghiTam(rs.message);
                    // this.showPopupImport = false;
                    // this.errorImport = true;
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
        else {
            if (!this.isTT78) {
                this.subLuuChoXuat = this.vatService.xuatChoKyForSeries(this.invoice).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        if (rs.data.batch_id) {
                            _this.invoicesArr.forEach(function (element) {
                                element.batch_id = rs.data.batch_id;
                            });
                        }
                        _this.invoice.verify_code = rs.data.verify_code;
                        _this.invoice.invoice_number = rs.data.invoice_number;
                        _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        _this.invoice.id = rs.data.id;
                        _this.invoicesId.push(rs.data.id);
                        _this.valueProgress += percentComplete;
                        if (_this.countInvoice < _this.totalInvoice) {
                            _this.countInvoice++;
                            _this.xuatChoKy();
                        }
                        else if (_this.countInvoice === _this.totalInvoice) {
                            _this.refreshStudent();
                            _this.setDataSessionStorage(_this.frmData);
                            _this.setStudentChange(_this.studentSelect);
                            _this.isChildInvoices = false;
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                            _this.showPopupImport = false;
                            _this.errorImport = true;
                            //   this.bsModalImportRef.hide();
                        }
                    }
                    else {
                        _this.refreshStudent();
                        _this.setStudentChange(_this.studentSelect);
                        _this.ghiTam(rs.message);
                        // this.showPopupImport = false;
                        // this.errorImport = true;
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                });
            }
            else {
                this.subLuuChoXuat = this.vatService.xuatChoKyForSeriesTT78(this.invoice).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        if (rs.data.batch_id) {
                            _this.invoicesArr.forEach(function (element) {
                                element.batch_id = rs.data.batch_id;
                            });
                        }
                        _this.invoice.verify_code = rs.data.verify_code;
                        _this.invoice.invoice_number = rs.data.invoice_number;
                        _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        _this.invoice.id = rs.data.id;
                        _this.invoicesId.push(rs.data.id);
                        _this.valueProgress += percentComplete;
                        if (_this.countInvoice < _this.totalInvoice) {
                            _this.countInvoice++;
                            _this.xuatChoKy();
                        }
                        else if (_this.countInvoice === _this.totalInvoice) {
                            _this.refreshStudent();
                            _this.setDataSessionStorage(_this.frmData);
                            _this.setStudentChange(_this.studentSelect);
                            _this.isChildInvoices = false;
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                            _this.showPopupImport = false;
                            _this.errorImport = true;
                            //   this.bsModalImportRef.hide();
                        }
                    }
                    else {
                        _this.refreshStudent();
                        _this.setStudentChange(_this.studentSelect);
                        _this.ghiTam(rs.message);
                        // this.showPopupImport = false;
                        // this.errorImport = true;
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                });
            }
        }
    };
    InvoiceComponent.prototype.ghiTam = function (message) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.invoice = this.invoicesArr[this.countInvoice - 1];
        if (this.invoice.id) {
            if (this.isReceipts) {
                this.subLuuChoXuat = this.vatService.editBatchRecept(this.invoice.id, this.invoice).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        if (rs.data.batch_id) {
                            _this.invoicesArr.forEach(function (element) {
                                element.batch_id = rs.data.batch_id;
                            });
                        }
                        _this.invoice.id = rs.data.id;
                        _this.valueProgress += percentComplete;
                        if (_this.countInvoice < _this.totalInvoice) {
                            _this.countInvoice++;
                            _this.ghiTam(message);
                        }
                        else if (_this.countInvoice == _this.totalInvoice) {
                            _this.refreshStudent();
                            _this.setDataSessionStorage(_this.frmData);
                            _this.setStudentChange(_this.studentSelect);
                            _this.isChildInvoices = false;
                            _this.arrayIdEdit = _this.invoicesArr.map(function (obj) { return obj.id; });
                            if (message == "")
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                            else
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(message, 'error', 5000);
                            _this.showPopupImport = false;
                            _this.errorImport = true;
                            return true;
                            // this.bsModalImportRef.hide();
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error', 5000);
                        return false;
                    }
                });
            }
            else {
                if (!this.isTT78) {
                    this.subLuuChoXuat = this.vatService.editBatch(this.invoice.id, this.invoice).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            if (rs.data.batch_id) {
                                _this.invoicesArr.forEach(function (element) {
                                    element.batch_id = rs.data.batch_id;
                                });
                            }
                            _this.invoice.id = rs.data.id;
                            _this.valueProgress += percentComplete;
                            if (_this.countInvoice < _this.totalInvoice) {
                                _this.countInvoice++;
                                _this.ghiTam(message);
                            }
                            else if (_this.countInvoice == _this.totalInvoice) {
                                _this.refreshStudent();
                                _this.setDataSessionStorage(_this.frmData);
                                _this.setStudentChange(_this.studentSelect);
                                _this.isChildInvoices = false;
                                _this.arrayIdEdit = _this.invoicesArr.map(function (obj) { return obj.id; });
                                if (message == "")
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                else
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(message, 'error', 5000);
                                _this.showPopupImport = false;
                                _this.errorImport = true;
                                return true;
                                // this.bsModalImportRef.hide();
                            }
                        }
                        else {
                            _this.showPopupImport = false;
                            _this.errorImport = true;
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error', 5000);
                            return false;
                        }
                    });
                }
                else {
                    this.subLuuChoXuat = this.vatService.editBatchTT78(this.invoice.id, this.invoice).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            if (rs.data.batch_id) {
                                _this.invoicesArr.forEach(function (element) {
                                    element.batch_id = rs.data.batch_id;
                                });
                            }
                            _this.invoice.id = rs.data.id;
                            _this.valueProgress += percentComplete;
                            if (_this.countInvoice < _this.totalInvoice) {
                                _this.countInvoice++;
                                _this.ghiTam(message);
                            }
                            else if (_this.countInvoice == _this.totalInvoice) {
                                _this.refreshStudent();
                                _this.setDataSessionStorage(_this.frmData);
                                _this.setStudentChange(_this.studentSelect);
                                _this.isChildInvoices = false;
                                _this.arrayIdEdit = _this.invoicesArr.map(function (obj) { return obj.id; });
                                if (message == "")
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                else
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(message, 'error', 5000);
                                _this.showPopupImport = false;
                                _this.errorImport = true;
                                return true;
                                // this.bsModalImportRef.hide();
                            }
                        }
                        else {
                            _this.showPopupImport = false;
                            _this.errorImport = true;
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error', 5000);
                            return false;
                        }
                    });
                }
            }
        }
        else {
            if (this.isReceipts) {
                this.subLuuChoXuat = this.vatService.ghiTamForSeriesRecept(this.invoice).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        if (rs.data.batch_id) {
                            _this.invoicesArr.forEach(function (element) {
                                element.batch_id = rs.data.batch_id;
                            });
                        }
                        _this.invoice.id = rs.data.id;
                        _this.valueProgress += percentComplete;
                        if (_this.countInvoice < _this.totalInvoice) {
                            _this.countInvoice++;
                            _this.ghiTam(message);
                        }
                        else if (_this.countInvoice === _this.totalInvoice) {
                            _this.refreshStudent();
                            _this.setDataSessionStorage(_this.frmData);
                            _this.setStudentChange(_this.studentSelect);
                            _this.isChildInvoices = false;
                            if (message == "")
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                            else
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(message, 'error', 5000);
                            _this.showPopupImport = false;
                            _this.errorImport = true;
                            return true;
                            //  this.bsModalImportRef.hide();
                        }
                    }
                    else {
                        _this.refreshStudent();
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error', 5000);
                        return false;
                    }
                }, function (err) {
                }, function () {
                });
            }
            else {
                if (!this.isTT78) {
                    this.subLuuChoXuat = this.vatService.ghiTamForSeries(this.invoice).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            if (rs.data.batch_id) {
                                _this.invoicesArr.forEach(function (element) {
                                    element.batch_id = rs.data.batch_id;
                                });
                            }
                            _this.invoice.id = rs.data.id;
                            _this.valueProgress += percentComplete;
                            if (_this.countInvoice < _this.totalInvoice) {
                                _this.countInvoice++;
                                _this.ghiTam(message);
                            }
                            else if (_this.countInvoice === _this.totalInvoice) {
                                _this.refreshStudent();
                                _this.setDataSessionStorage(_this.frmData);
                                _this.setStudentChange(_this.studentSelect);
                                _this.isChildInvoices = false;
                                if (message == "")
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                else
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(message, 'error', 5000);
                                _this.showPopupImport = false;
                                _this.errorImport = true;
                                return true;
                                //  this.bsModalImportRef.hide();
                            }
                        }
                        else {
                            _this.refreshStudent();
                            _this.showPopupImport = false;
                            _this.errorImport = true;
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error', 5000);
                            return false;
                        }
                    }, function (err) {
                    }, function () {
                    });
                }
                else {
                    this.subLuuChoXuat = this.vatService.ghiTamForSeriesTT78(this.invoice).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            if (rs.data.batch_id) {
                                _this.invoicesArr.forEach(function (element) {
                                    element.batch_id = rs.data.batch_id;
                                });
                            }
                            _this.invoice.id = rs.data.id;
                            _this.valueProgress += percentComplete;
                            if (_this.countInvoice < _this.totalInvoice) {
                                _this.countInvoice++;
                                _this.ghiTam(message);
                            }
                            else if (_this.countInvoice === _this.totalInvoice) {
                                _this.refreshStudent();
                                _this.setDataSessionStorage(_this.frmData);
                                _this.setStudentChange(_this.studentSelect);
                                _this.isChildInvoices = false;
                                if (message == "")
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                else
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(message, 'error', 5000);
                                _this.showPopupImport = false;
                                _this.errorImport = true;
                                return true;
                                //  this.bsModalImportRef.hide();
                            }
                        }
                        else {
                            _this.refreshStudent();
                            _this.showPopupImport = false;
                            _this.errorImport = true;
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error', 5000);
                            return false;
                        }
                    }, function (err) {
                    }, function () {
                    });
                }
            }
        }
    };
    InvoiceComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        if (this.isXuat) {
            this.invoice = this.invoicesArr[this.countInvoice - 1];
            if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing) || this.isReceipts) {
                this.xuLiApiKhiXuat();
            }
            else {
                if (this.invoice && this.invoice.invoice_files.length) {
                    this.invoice.invoice_files.forEach(function (item) {
                        _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, item.file_content, item.file_name, item.file_name.split('.').pop(), true, _this.frmData.invoice_date);
                    });
                }
                else {
                    if (this.isTT78) {
                        var ListSerialNumber = "DSCKS";
                        if (this.infoDangKy && this.infoDangKy.registration_signature) {
                            var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                            if (signatures && signatures.length > 0)
                                ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                        }
                        var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
                    }
                    else
                        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
                }
            }
            this.tempKiFile = 0;
        }
    };
    InvoiceComponent.prototype.traLai = function () {
        var _this = this;
        if (this.frmTraLai.reason === undefined || this.frmTraLai.reason === '') {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.CONTROLL.LABEL.reason_return + ' ' + this._translate.VALIDATION.required, 'error', 5000);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var sub_12 = this.vatService.traLaiHoaDon({
                id: this.frmData.id,
                reason: this.frmTraLai.reason
            }).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.router.navigate(['/system/invoice-sync']);
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.return_success, 'success');
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error', 5000);
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                sub_12.unsubscribe();
            });
        }
    };
    InvoiceComponent.prototype._validForm = function (isOnlyCheckAm) {
        var _this = this;
        var _isValid = true;
        var _lst = this.frmData.invoice_products;
        if (!this.frmData.total_payment && this.frmData.total_payment !== 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Tổng tiền hóa đơn không được để trống", 'error');
            return false;
        }
        if (_lst.length === 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_revenue, 'error', 5000);
            this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
            return false;
        }
        else {
            var _lstValidThanhTien = this.frmData.invoice_products.filter(function (p) { return !p.amount && p.amount !== 0; });
            if (_lstValidThanhTien.length == this.frmData.invoice_products.length) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Thành tiền không được để trống", 'error', 5000);
                this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'amount'));
                return false;
            }
            var _lstValidTongTien = this.frmData.invoice_products.filter(function (p) { return !p.amount_after_vat && p.amount_after_vat !== 0; });
            if (_lstValidTongTien.length == this.frmData.invoice_products.length) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Tổng tiền hàng hóa không được để trống", 'error', 5000);
                this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'amount_after_vat'));
                return false;
            }
            var _loop_1 = function (i) {
                if ((_lst[i].group_code == "HOCPHI" || _lst[i].group_code == "HOCTHEM") && (_lst[i].school_fee_month == '' || !_lst[i].school_fee_month)) {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this_1._translate.GRID.INVOICE_DETAILS.school_fee_month + " " + this_1._translate.VALIDATION.required, 'error', 5000);
                    this_1.productGrip.dataGrid.instance.focus(this_1.productGrip.dataGrid.instance.getCellElement(i, 'product_code'));
                    return { value: false };
                }
                var _lstProduct = _lst.filter(function (p) { return p.product_code == _lst[i].product_code; });
                if (_lstProduct && _lstProduct.length > 1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Mã '" + _lst[i].product_code + "' bị trùng", 'error', 5000);
                    this_1.productGrip.dataGrid.instance.focus(this_1.productGrip.dataGrid.instance.getCellElement(i, 'product_code'));
                    return { value: false };
                }
            };
            var this_1 = this;
            for (var i = 0; i < _lst.length; i++) {
                var state_1 = _loop_1(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            if (!this.isTT78) {
                var numberRow = this.invoicereleaseTempt.numberRow;
                if (numberRow == 100) {
                    if (_lst.length > 1) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.only_seclected_1_revenue_to_export_invoice, 'error', 5000);
                        this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
                        return false;
                    }
                }
            }
            else {
                var numberRow = this.invoiceTemplateTT78.numberRow;
                if (numberRow == 100) {
                    if (_lst.length > 1) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.only_seclected_1_product_to_export_invoice, 'error', 5000);
                        this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
                        return false;
                    }
                }
                this.invoice_products.load().then(function (dataSource) {
                    dataSource.forEach(function (item, index) {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(item.product_name) != "" && !item.is_promotion && !item.is_promotion_new && !item.commercial_discount && _isValid) {
                            // if (item.quantity == null && _isValid) {
                            //   Library.notify("Số lượng" + " " + this._translate.VALIDATION.required, 'error');
                            //   this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(index, 'quantity'));
                            //   _isValid = false;
                            //   return false;
                            // }
                            // if (item.price == null && _isValid) {
                            //   Library.notify("Đơn giá" + " " + this._translate.VALIDATION.required, 'error');
                            //   this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(index, 'price'));
                            //   _isValid = false;
                            //   return false;
                            // }
                        }
                        else if (item.is_promotion || item.is_promotion_new || item.commercial_discount) {
                            if ((item.product_name == null || item.product_name == '') && _isValid) {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Tên hàng hóa" + " " + _this._translate.VALIDATION.required, 'error');
                                _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'product_name'));
                                _isValid = false;
                                return false;
                            }
                        }
                        if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(item.product_name) != "" && !item.is_promotion) {
                            if (_this.isHdGTGT) {
                                if (item.vat == null && _isValid) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Thuế suất" + " " + _this._translate.VALIDATION.required, 'error');
                                    _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'vat'));
                                    _isValid = false;
                                    return false;
                                }
                                if (item.vat != "-1" && item.amount_vat == null && _isValid) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Tiền thuế" + " " + _this._translate.VALIDATION.required, 'error');
                                    _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'amount_vat'));
                                    _isValid = false;
                                    return false;
                                }
                            }
                            if (item.amount == null && _isValid) {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Thành tiền" + " " + _this._translate.VALIDATION.required, 'error');
                                _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'amount'));
                                _isValid = false;
                                return false;
                            }
                        }
                    });
                });
            }
        }
        var _lstStudents = this.studentSelect.filter(function (p) { return p.student_name; });
        if (_lstStudents.length === 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_student, 'error', 5000);
            if (this.studentGrid.dataGrid.instance)
                this.studentGrid.dataGrid.instance.focus(this.studentGrid.dataGrid.instance.getCellElement(0, 'student_code'));
            return false;
        }
        else {
            ///Tỷ lệ miễn giảm không trùng với thông tin đã chọn
            for (var i = 0; i < _lstStudents.length; i++) {
                if (_lstStudents[i].statusData == 'OTHER_REDUCE') {
                    if (this.isReceipts) {
                        return true;
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.different_reduce, 'error', 5000);
                        this.studentGrid.dataGrid.instance.focus(this.studentGrid.dataGrid.instance.getCellElement(i, 'student_code'));
                        return false;
                    }
                }
                if (_lstStudents[i].statusData == 'ERROR_DUPLICATE') {
                    if (this.isReceipts) {
                        return true;
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.invoice_duplicate, 'error', 5000);
                        this.studentGrid.dataGrid.instance.focus(this.studentGrid.dataGrid.instance.getCellElement(i, 'student_code'));
                        return false;
                    }
                }
            }
        }
        return _isValid;
    };
    InvoiceComponent.prototype.eSubmit = function (type, isCheckNoVat) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var checkValid, _a, _index_1, totalExport, _lstInv_1, i, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isXuat = true;
                        this.invoicesId = [];
                        this.total_payment = "";
                        checkValid = this.formInvoice.form.instance.validate();
                        if (!checkValid.isValid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.handleFormData()];
                    case 1:
                        _b.sent();
                        this._isValid = this._validForm(false);
                        if (!this._isValid) {
                            return [2 /*return*/];
                        }
                        if (!(type !== 'GHI_TAM')) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.checkNumberRelease()];
                    case 2:
                        _a._isValid = _b.sent();
                        if (!this._isValid) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.cannot_export_invoice, 'error', 5000);
                            return [2 /*return*/];
                        }
                        this._isValid = _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_16__["InvoicesService"].checkTimeExportInv(this.configs.system_parameter);
                        if (!this._isValid) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_17__["String"].Format(this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_2__(this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_2__(this.configs.system_parameter.time_end).format('HH:mm')), 'error', 5000);
                            return [2 /*return*/];
                        }
                        if (!this.frmData.invoice_date) {
                            this.formInvoice.form.instance.getEditor("invoice_date").focus();
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.CONTROLL.LABEL.invoice_date + " " + this._translate.VALIDATION.required, 'error', 5000);
                            return [2 /*return*/];
                        }
                        _b.label = 3;
                    case 3:
                        if (this.windowPreviewBeforeSubmit) {
                            this.windowPreviewBeforeSubmit.focus();
                            return [2 /*return*/];
                        }
                        if (this.frmData.invoice_options) {
                            this.frmData.invoice_options.forEach(function (item) {
                                delete item['is_show'];
                                delete item['type'];
                                delete item['width'];
                                delete item['statusData'];
                            });
                        }
                        if (this.frmData.total_payment > 20000000 && (this.frmData.payment_method_name === 'TM')) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.payment_method_more_than_20_million, 'error', 5000);
                            return [2 /*return*/, false];
                        }
                        if (!this.isAccessExportInv && type === 'XUAT' && this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].hinhThucXuat.XuatChoKy && !this.isReceipts) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_not_permissions, 'error', 5000);
                            return [2 /*return*/, false];
                        }
                        this.convertGridToInvoices(false);
                        if (!(type === 'XUAT' || (type === 'TRINH_KY' && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].hinhThucXuat.XuatChoKy))) return [3 /*break*/, 11];
                        _index_1 = 0;
                        if (!this.isTT78) {
                            totalExport = this.totalInvoice - this.totalCountWaitSign;
                            if (totalExport > this.countRelease) {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Số lượng hóa đơn được phép xuất trong TBPH còn " + this.countRelease + " số nhỏ hơn Số lượng hóa đơn đang thực hiện xuất " + totalExport + " số.", 'error', 5000);
                                return [2 /*return*/, false];
                            }
                        }
                        _lstInv_1 = [];
                        this.invoice_products.load().then(function (dataSource) {
                            _lstInv_1 = dataSource.filter(function (p) { return p.product_name; });
                        });
                        if (this.isHdGTGT) {
                            for (i = 0; i < _lstInv_1.length; i++) {
                                if (_lstInv_1[i].amount > 0 && !_lstInv_1[i].vat) {
                                    _index_1 = i;
                                    this._isValid = false;
                                    break;
                                }
                            }
                        }
                        if (!this.vatService.checkVatMauHoaDon(_lstInv_1, this.is_multi_vat)) {
                            return [2 /*return*/, false];
                        }
                        if (!(!this._isValid && isCheckNoVat)) return [3 /*break*/, 4];
                        result = _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm(this._translate.CONFIRM.no_vat, this._translate.NOTIFY.notify);
                        result.then(function (dialogResult) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!dialogResult) return [3 /*break*/, 1];
                                        this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(_index_1, 'vat'));
                                        return [2 /*return*/, false];
                                    case 1:
                                        if (type === 'TRINH_KY' && this.invoice.status === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].hinhThucXuat.XuatChoKy) {
                                            this.confirmCheckPreview = true;
                                        }
                                        if (!this.confirmCheckPreview) return [3 /*break*/, 5];
                                        if (!(this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].hinhThucXuat.XuatChoKy)) return [3 /*break*/, 3];
                                        this.showPopupImport = true;
                                        return [4 /*yield*/, this.checkInvoiceDeleted()];
                                    case 2:
                                        if ((_a.sent()) === true) {
                                            this.refreshBatchIds();
                                            this.xuatHoaDon();
                                        }
                                        return [3 /*break*/, 4];
                                    case 3:
                                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].confirmXuatChoKy(function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        this.showPopupImport = true;
                                                        if (!this.isAccessExportInv) {
                                                            if (type === 'TRINH_KY') {
                                                                this.invoice.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.ChoDuyet;
                                                                this.invoice.refuse_reason = '';
                                                            }
                                                            else {
                                                                if (this.invoice.approve_status !== _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.TuChoi) {
                                                                    this.invoice.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.ChuaTrinhKy;
                                                                }
                                                            }
                                                        }
                                                        return [4 /*yield*/, this.checkInvoiceDeleted()];
                                                    case 1:
                                                        if ((_a.sent()) === true) {
                                                            this.refreshBatchIds();
                                                            this.xuatChoKy();
                                                        }
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        _a.label = 4;
                                    case 4:
                                        this.confirmCheckPreview = false;
                                        return [3 /*break*/, 6];
                                    case 5:
                                        this.previewBeforeSubmit(type);
                                        _a.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 10];
                    case 4:
                        if (type === 'TRINH_KY' && this.invoice.status === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].hinhThucXuat.XuatChoKy) {
                            this.confirmCheckPreview = true;
                        }
                        if (!this.confirmCheckPreview) return [3 /*break*/, 8];
                        if (!(this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].hinhThucXuat.XuatChoKy)) return [3 /*break*/, 6];
                        this.showPopupImport = true;
                        return [4 /*yield*/, this.checkInvoiceDeleted()];
                    case 5:
                        if ((_b.sent()) === true) {
                            this.refreshBatchIds();
                            this.xuatHoaDon();
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].confirmXuatChoKy(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.showPopupImport = true;
                                        if (!this.isAccessExportInv) {
                                            if (type === 'TRINH_KY') {
                                                this.invoice.refuse_reason = '';
                                                this.invoice.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.ChoDuyet;
                                            }
                                            else {
                                                if (this.invoice.approve_status !== _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.TuChoi) {
                                                    this.invoice.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.ChuaTrinhKy;
                                                }
                                            }
                                        }
                                        return [4 /*yield*/, this.checkInvoiceDeleted()];
                                    case 1:
                                        if ((_a.sent()) === true) {
                                            this.refreshBatchIds();
                                            this.xuatChoKy();
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _b.label = 7;
                    case 7:
                        this.confirmCheckPreview = false;
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this.previewBeforeSubmit(type)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        this.showPopupImport = true;
                        if (!this.isAccessExportInv) {
                            if (type === 'TRINH_KY') {
                                this.invoice.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.ChoDuyet;
                                this.invoice.refuse_reason = '';
                            }
                            else {
                                if (this.invoice.approve_status !== _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.TuChoi) {
                                    this.invoice.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.ChuaTrinhKy;
                                }
                            }
                        }
                        return [4 /*yield*/, this.checkInvoiceDeleted()];
                    case 12:
                        if ((_b.sent()) === true) {
                            this.refreshBatchIds();
                            this.ghiTam("");
                        }
                        _b.label = 13;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    InvoiceComponent.prototype.subData = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var checkValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isXuat = true;
                        this.invoicesId = [];
                        checkValid = this.formInvoice.form.instance.validate();
                        if (!checkValid.isValid) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.handleFormData()];
                    case 1:
                        _a.sent();
                        this._isValid = this._validForm(false);
                        if (!this._isValid) {
                            return [2 /*return*/, false];
                        }
                        if (this.windowPreviewBeforeSubmit) {
                            this.windowPreviewBeforeSubmit.focus();
                            return [2 /*return*/, false];
                        }
                        if (this.frmData.invoice_options) {
                            this.frmData.invoice_options.forEach(function (item) {
                                delete item['is_show'];
                                delete item['type'];
                                delete item['width'];
                                delete item['statusData'];
                            });
                        }
                        if (this.frmData.total_payment > 20000000 && (this.frmData.payment_method_name === 'TM')) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.payment_method_more_than_20_million, 'error', 5000);
                            return [2 /*return*/, false];
                        }
                        if (!this.isAccessExportInv && type === 'XUAT' && this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].hinhThucXuat.XuatChoKy && !this.isReceipts) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_not_permissions, 'error', 5000);
                            return [2 /*return*/, false];
                        }
                        this.convertGridToInvoices(false);
                        this.showPopupImport = true;
                        if (!this.isAccessExportInv) {
                            if (type === 'TRINH_KY') {
                                this.invoice.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.ChoDuyet;
                                this.invoice.refuse_reason = '';
                            }
                            else {
                                if (this.invoice.approve_status !== _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.TuChoi) {
                                    this.invoice.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApprove.ChuaTrinhKy;
                                }
                            }
                        }
                        return [4 /*yield*/, this.checkInvoiceDeleted()];
                    case 2:
                        if ((_a.sent()) === true) {
                            this.refreshBatchIds();
                            return [2 /*return*/, this.ghiTam("")];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InvoiceComponent.prototype.handleAddNew = function () {
        var _this = this;
        if (this.isExportInvoice) {
            this.addNew();
        }
        else {
            if (!this.checkDataFormChange(this.valueChange, this.frmData) || !this.checkStudentChange(this.jsonStudents, this.studentSelect)) {
                this.confirmService.confirm()
                    .subscribe(function (value) {
                    switch (value) {
                        case 'yes':
                            _this.subData('GHI_TAM').then(function (res) {
                                if (res) {
                                    _this.addNew();
                                }
                                else {
                                    return;
                                }
                            });
                            break;
                        case 'no':
                            _this.addNew();
                            break;
                        case 'cancel':
                            _this.addNew();
                            break;
                        default:
                            break;
                    }
                });
            }
            else {
                this.addNew();
            }
        }
    };
    InvoiceComponent.prototype.addNew = function () {
        var inv = Object.assign({}, this.frmData);
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_7__["InvoiceModel"](1);
        this.frmData.invoice_date = null;
        this.frmData.template_id = inv.template_id;
        this.frmData.invoice_release_id = inv.invoice_release_id;
        this.frmData.payment_method_name = inv.payment_method_name;
        this.frmData.payment_method_view_name = inv.payment_method_view_name;
        this.frmData.currency_code = inv.currency_code;
        this.frmData.student_reduce_rate_code = inv.student_reduce_rate_code;
        this.frmData.study_year = inv.study_year;
        this.frmData.invoice_options = inv.invoice_options;
        this.formInvoice.resetTMR();
        this.frmData.template_code = inv.template_code;
        this.frmData.invoice_series = inv.invoice_series;
        this.arrayIdEdit = [];
        this.totalDuplicate = 0;
        this.totalInvoice = 0;
        this.isXuat = true;
        this.isChildInvoices = false;
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9___default.a({
            key: 'id',
            data: this.frmData.invoice_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10___default.a({
            store: this.invoice_products
        });
        this.studentSelect = [];
        this.productGrip.ttDaXuatHoaDon = false;
        this.productGrip.createUpdateEvent();
        this.formInvoice.removeReadonlyAllForm();
        this.ttDaXuatHoaDon = false;
        this.setDataSessionStorage(this.frmData);
        this.setStudentChange(this.studentSelect);
    };
    InvoiceComponent.prototype.students_data = function () {
        var arr = [];
        for (var i = 0; i < 5; i++) {
            arr.push({
                order: i + 1,
                student_id: "",
                invoice_number: null,
                invoice_date: null,
                id: null,
                student_code: '',
                student_name: '',
                buyer_name: '',
                buyer_mobile: '',
                buyer_address: '',
                buyer_email: '',
                student_reduce_rate_code: '',
                class_code: '',
                class_name: '',
                customer_name: '',
                customer_code: '',
                buyer_tax_code: '',
                bank_account_number: '',
                tax_authority_code: '',
                send_department_status: '',
                invoice_sign_date: null,
                statusData: 'INVALID'
            });
        }
        return arr;
    };
    InvoiceComponent.prototype.handleFormData = function () {
        var _this = this;
        var wait = function (delay) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return new Promise(function (resolve) { return setTimeout.apply(void 0, [resolve, delay].concat(args)); });
        };
        return wait(300).then(function () {
            _this.tempKiFile = 0;
            var invoice_products = [];
            _this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    delete item.error;
                    if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                        item.row_content = item.product_name;
                        invoice_products.push(item);
                        if (item.is_transport_number) {
                            _this.frmData.transport_number = item.product_name;
                        }
                    }
                });
                _this.frmData.invoice_files = JSON.parse(JSON.stringify(_this.fileData));
                _this.frmData.invoice_products = invoice_products;
                _this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
            });
            return true;
        });
    };
    InvoiceComponent.prototype.convertGridToInvoices = function (isview, isViewDaXuat) {
        var _this = this;
        var invoices = [];
        var lstStudents = [];
        if (!isview)
            lstStudents = this.studentSelect.filter(function (p) { return p.status != "DA_XUAT"; });
        else
            lstStudents = this.studentSelect;
        lstStudents.forEach(function (element, index) {
            var invoice = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_7__["InvoiceModel"](1);
            if (element.id) {
                invoice.id = element.id;
                invoice.status = element.status;
            }
            else
                invoice.status = _this.frmData.status;
            invoice.invoice_series_order = index;
            /// Thông tin hóa đơn
            invoice.invoice_number = element.invoice_number;
            if (isViewDaXuat) {
                if (element.invoice_date)
                    invoice.invoice_date = element.invoice_date;
                else
                    invoice.invoice_date = _this.frmData.invoice_date;
            }
            else
                invoice.invoice_date = _this.frmData.invoice_date;
            invoice.invoice_release_id = _this.frmData.invoice_release_id;
            if (_this.frmData.batch_id)
                invoice.batch_id = _this.frmData.batch_id;
            else {
                if (element.batch_id)
                    invoice.batch_id = element.batch_id;
                else
                    invoice.batch_id = null;
            }
            invoice.verify_code = element.verify_code;
            invoice.template_id = _this.frmData.template_id;
            invoice.template_code = _this.frmData.template_code;
            invoice.invoice_series = _this.frmData.invoice_series;
            invoice.currency_code = _this.frmData.currency_code;
            invoice.currency_rate = _this.frmData.currency_rate;
            invoice.payment_method_name = _this.frmData.payment_method_name;
            invoice.payment_method_view_name = _this.frmData.payment_method_view_name;
            invoice.note_view_on_invoice = _this.frmData.note_view_on_invoice;
            // invoice.student_reduce_rate_code = this.frmData.student_reduce_rate_code;
            invoice.study_year = _this.frmData.study_year;
            invoice.invoice_files = _this.frmData.invoice_files;
            invoice.decimal_places_json = _this.frmData.decimal_places_json;
            invoice.invoice_options = _this.frmData.invoice_options;
            invoice.amount = _this.frmData.amount;
            invoice.total_amount_vat = _this.frmData.total_amount_vat;
            invoice.amount_after_vat = _this.frmData.amount_after_vat;
            invoice.amount_after_vatx = _this.frmData.amount_after_vatx;
            invoice.amount_after_vat0 = _this.frmData.amount_after_vat0;
            invoice.amount_after_vat5 = _this.frmData.amount_after_vat5;
            invoice.amount_after_vat10 = _this.frmData.amount_after_vat10;
            invoice.amount_vat5 = _this.frmData.amount_vat5;
            invoice.amount_vat10 = _this.frmData.amount_vat10;
            invoice.amount_vat0 = _this.frmData.amount_vat0;
            invoice.total_amount_product_vatx = _this.frmData.total_amount_product_vatx;
            invoice.total_amount_product_vat0 = _this.frmData.total_amount_product_vat0;
            invoice.total_amount_product_vat5 = _this.frmData.total_amount_product_vat5;
            invoice.total_amount_product_vat10 = _this.frmData.total_amount_product_vat10;
            invoice.total_payment = _this.frmData.total_payment;
            invoice.total_payment_in_word = _this.frmData.total_payment_in_word;
            invoice.note = _this.frmData.note;
            //// Thông tin học sinh
            invoice.student_id = element.student_id;
            invoice.student_code = element.student_code;
            invoice.student_name = element.student_name;
            invoice.buyer_name = element.buyer_name;
            invoice.buyer_mobile = element.buyer_mobile;
            invoice.buyer_address = element.buyer_address;
            invoice.buyer_email = element.buyer_email;
            invoice.class_code = element.class_code;
            invoice.class_name = element.class_name;
            invoice.customer_name = element.customer_name;
            invoice.customer_code = element.customer_code;
            invoice.buyer_tax_code = element.buyer_tax_code;
            invoice.bank_account_number = element.bank_account_number;
            invoice.tax_authority_code = element.tax_authority_code;
            invoice.send_department_status = element.send_department_status;
            invoice.invoice_sign_date = element.invoice_sign_date;
            invoice.student_reduce_rate_code = element.student_reduce_rate_code;
            ///// Thông tin hàng hóa  id: Helper.makeid(),
            // this.frmData.invoice_products.forEach(element => {
            //   element.id = Helper.makeid();
            // });
            invoice.invoice_products = [];
            _this.frmData.invoice_products.forEach(function (val) { return invoice.invoice_products.push(Object.assign({}, val)); });
            invoice.invoice_products.forEach(function (element) {
                element.id = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].makeid();
            });
            invoices.push(invoice);
        });
        this.invoicesArr = [];
        this.invoicesArr = invoices;
        this.invoicesArr = this.invoicesArr.sort(function (itemA, itemB) {
            return new Date(itemA.invoice_date).getTime() - new Date(itemB.invoice_date).getTime();
        });
        this.totalInvoice = this.invoicesArr.length;
        this.countInvoice = 1;
        return invoices;
    };
    InvoiceComponent.prototype.dong = function () {
        if (this.isHdGTGT) {
            this.router.navigate(['/system/vat-invoice']);
        }
        else {
            this.router.navigate(['/system/sale-invoice']);
        }
    };
    InvoiceComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
        this.routeSub.unsubscribe();
        // this.socketService.close();
    };
    InvoiceComponent.prototype.xemlydotuchoi = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var sub = this.vatService.showToSendInvoice(this.frmData.id).subscribe(function (rs) {
            if (rs.status === 'success') {
                var initialState = {
                    invoice: rs.data.invoice,
                    listDM: _this.listDM
                };
                _this.bsModalRef = _this.modalService.show(_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_13__["SendInvoicesComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem) {
                    }
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error', 5000);
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    InvoiceComponent.prototype.onVatChange = function () {
        var decimal_amount = this.getFormatterToNumber(this.formatter.thanh_tien);
        var decimal_amount_vat = this.getFormatterToNumber(this.formatter.tien_thue);
        if (this.frmData.vat_service_ticket === '5' || this.frmData.vat_service_ticket === '10') {
            this.frmData.total_vat_service_ticket = this.roundNumber((Number.parseInt(this.frmData.vat_service_ticket) * this.frmData.money_service_ticket) / 100, decimal_amount_vat);
        }
        else {
            this.frmData.total_vat_service_ticket = 0;
        }
        this.frmData.total_service_ticket_with_vat = this.roundNumber(this.frmData.money_service_ticket + this.frmData.total_vat_service_ticket, decimal_amount);
    };
    InvoiceComponent.prototype.canDeactivate = function () {
        var _this = this;
        if (!this.checkDataFormChange(this.valueChange, this.frmData) || !this.checkStudentChange(this.jsonStudents, this.studentSelect)) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_15__["Observable"](function (observer) {
                _this.confirmService.confirm().subscribe(function (value) {
                    switch (value) {
                        case 'yes':
                            _this.subData('GHI_TAM').then(function (value1) {
                                observer.next(true);
                                observer.complete();
                            });
                            break;
                        case 'no':
                            observer.next(true);
                            observer.complete();
                            break;
                        case 'cancel':
                            observer.next(false);
                            observer.complete();
                            break;
                        default:
                            observer.next(true);
                            observer.complete();
                            break;
                    }
                });
            });
        }
        else {
            return true;
        }
    };
    InvoiceComponent.prototype.onSubmit = function () {
    };
    InvoiceComponent.prototype.keyDown = function (e) {
        // setTimeout(() => {
        if (e.event.key === 'Delete') {
            e.event.srcElement.value = null;
        }
        // }, 100);
    };
    InvoiceComponent.prototype.renderDataStudent = function (students, isInv) {
        var _this = this;
        if (isInv === void 0) { isInv = false; }
        var data = [];
        if (isInv) {
            students.forEach(function (element) {
                var invoice = {};
                invoice['student_id'] = element.student_id ? element.student_id : '';
                invoice['invoice_number'] = element.invoice_number ? element.invoice_number : null;
                invoice['invoice_date'] = element.invoice_date ? element.invoice_date : null;
                invoice['id'] = element.id ? element.id : null;
                invoice['invoice_series_order'] = element.invoice_series_order ? element.invoice_series_order : null;
                invoice['student_code'] = element.student_code ? element.student_code : '';
                invoice['status'] = element.status ? element.status : '';
                invoice['student_name'] = element.student_name ? element.student_name : '';
                invoice['buyer_name'] = element.buyer_name ? element.buyer_name : '';
                invoice['buyer_mobile'] = element.buyer_mobile ? element.buyer_mobile : '';
                invoice['buyer_address'] = element.buyer_address ? element.buyer_address : '';
                invoice['buyer_email'] = element.buyer_email ? element.buyer_email : '';
                invoice['student_reduce_rate_code'] = element.student_reduce_rate_code ? element.student_reduce_rate_code : '';
                invoice['class_code'] = element.class_code ? element.class_code : '';
                invoice['class_name'] = element.class_name ? element.class_name : '';
                invoice['customer_name'] = element.customer_name ? element.customer_name : '';
                invoice['customer_code'] = element.customer_code ? element.customer_code : '';
                invoice['verify_code'] = element.verify_code ? element.verify_code : '';
                invoice['buyer_tax_code'] = element.buyer_tax_code ? element.buyer_tax_code : '';
                invoice['bank_account_number'] = element.bank_account_number ? element.bank_account_number : '';
                invoice['tax_authority_code'] = element.tax_authority_code ? element.tax_authority_code : null;
                invoice['send_department_status'] = element.send_department_status ? element.send_department_status : null;
                invoice['invoice_sign_date'] = element.invoice_sign_date ? element.invoice_sign_date : null;
                invoice['statusData'] = 'INVALID';
                data.push(invoice);
            });
        }
        else {
            students.forEach(function (element) {
                var invoice = {};
                var objClass = _this.select.class_codes.filter(function (p) { return p.code == element.class_code; })[0];
                if (objClass)
                    element.class_name = objClass.name;
                else
                    element.class_name = '';
                invoice['student_id'] = element.id ? element.id : '';
                invoice['invoice_number'] = null;
                invoice['invoice_date'] = null;
                invoice['id'] = null;
                invoice['student_code'] = element.code ? element.code : '';
                invoice['student_name'] = element.name ? element.name : '';
                invoice['buyer_name'] = element.buyer_name ? element.buyer_name : '';
                invoice['buyer_mobile'] = element.mobile ? element.mobile : '';
                invoice['buyer_address'] = element.address ? element.address : '';
                invoice['buyer_email'] = element.email ? element.email : '';
                invoice['student_reduce_rate_code'] = element.student_reduce_rate_code ? element.student_reduce_rate_code : '';
                invoice['class_code'] = element.class_code ? element.class_code : '';
                invoice['class_name'] = element.class_name ? element.class_name : '';
                invoice['customer_name'] = element.customer_name ? element.customer_name : '';
                invoice['customer_code'] = element.customer_code ? element.customer_code : '';
                invoice['buyer_tax_code'] = element.buyer_tax_code ? element.buyer_tax_code : '';
                invoice['bank_account_number'] = element.bank_account_number ? element.bank_account_number : '';
                invoice['tax_authority_code'] = null;
                invoice['send_department_status'] = null;
                invoice['invoice_sign_date'] = null;
                invoice['statusData'] = 'INVALID';
                data.push(invoice);
            });
        }
        this.getDataFromGird();
        this.checkDuplicateCodeStudent(data);
        this.onCheckDuplicate(null);
    };
    InvoiceComponent.prototype.getDataFromGird = function () {
        var _this = this;
        if (this.studentSelect.length > 0) {
            this.studentSelect.forEach(function (row) {
                _this.dataFormGird.push(row);
            });
        }
    };
    InvoiceComponent.prototype.checkDuplicateCodeStudent = function (data) {
        var _this = this;
        if (data.length > 0) {
            if (this.studentSelect.length > 0) {
                data.forEach(function (item) {
                    if (!_this.checkDuplicateArr(item)) {
                        _this.studentSelect.push(item);
                    }
                });
            }
            else {
                this.studentSelect = this.checkItemArrDuplicate(data);
            }
            var _index_2 = 0;
            var _index_view_order_1 = 0;
            this.studentSelect.forEach(function (item) {
                item.order = ++_index_2;
                item.view_order = ++_index_view_order_1;
                if (item.invoice_date != null)
                    item.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(item.invoice_date).format('YYYY-MM-DD HH:mm:ss');
            });
            this.totalInvoice = this.studentSelect.length;
        }
    };
    InvoiceComponent.prototype.checkDuplicateArr = function (item) {
        return this.studentSelect.some(function (itemStudent) { return item.student_code === itemStudent.student_code; });
    };
    InvoiceComponent.prototype.checkItemArrDuplicate = function (arr) {
        return arr.reduce(function (previousValue, currentValue) {
            if (checkValue(currentValue)) {
                return previousValue;
            }
            else {
                return previousValue.concat(currentValue);
            }
            function checkValue(value) {
                return previousValue.some(function (item) {
                    return item.student_code === value.student_code;
                });
            }
        }, []);
    };
    InvoiceComponent.prototype.onStudentChange = function (item) {
        var _this = this;
        if (item) {
            var revenues_1 = [];
            var student_codes = item.student_code;
            this.dataSource.items().filter(function (p) { return p.product_name; }).forEach(function (item) {
                var revenue = {};
                revenue['product_code'] = item.product_code;
                revenue['school_fee_month'] = item.school_fee_month;
                revenue['group_code'] = item.group_code;
                revenues_1.push(revenue);
            });
            var data = void 0;
            if (!this.isTT78) {
                data = {
                    'student_codes': student_codes,
                    'revenues': revenues_1,
                    'study_year': this.frmData.study_year,
                    'with_products': true,
                    'invoice_release_id': this.invoicereleaseTempt.value
                };
            }
            else {
                data = {
                    'student_codes': student_codes,
                    'revenues': revenues_1,
                    'study_year': this.frmData.study_year,
                    'with_products': true,
                    'template_id': this.invoiceTemplateTT78.value
                };
            }
            var sub_13 = this.vatService.checkDuplicate(data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    if (rs.data.invoices.length > 0) {
                        var initialState = {
                            invoiceList: rs.data.invoices,
                            isReceipts: _this.isReceipts
                        };
                        _this.bsModalRef = _this.modalService.show(_invoices_duplicates_invoices_duplicates_component__WEBPACK_IMPORTED_MODULE_19__["InvoicesDuplicatesComponent"], {
                            backdrop: 'static',
                            keyboard: false,
                            class: 'modal-lg full-modal',
                            initialState: initialState
                        });
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error', 5000);
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                sub_13.unsubscribe();
            });
        }
        else {
            var _lst = this.studentSelect.filter(function (p) { return p.statusData == 'ERROR_DUPLICATE'; });
            this.totalInvoice = this.studentSelect.length;
            this.totalDuplicate = _lst.length;
        }
    };
    InvoiceComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm(this._translate.CONFIRM.import_data);
            this.refreshStudent();
        }
        if (r) {
            this.showPopupImport = false;
            this.errorImport = true;
            this.isXuat = false;
            if (this.subXuatHoaDon) {
                this.subXuatHoaDon.unsubscribe();
            }
            if (this.subLuuChoXuat) {
                this.subLuuChoXuat.unsubscribe();
            }
            this.valueProgress = 0;
        }
        else {
            this.isXuat = true;
            e.cancel = true;
        }
    };
    InvoiceComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    InvoiceComponent.prototype.onCheckDuplicate = function (data) {
        var _this = this;
        if (this.frmData.status === 'DA_XUAT' || (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.GhiTam && this.frmData.send_department_status === 'KHONG_DU_DK_CAP_MA')
            || (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.GhiTam && this.frmData.send_department_status === 'DA_GUI_CQT' && this.frmData.is_invoice_with_code)) {
        }
        else {
            var revenues_2 = [];
            var student_codes = this.studentSelect.length === 0 ? '' : this.studentSelect.map(function (obj) { return obj.student_code; }).join(';');
            var arrayProduct = [];
            if (data)
                arrayProduct = data;
            else
                arrayProduct = this.dataSource.items();
            arrayProduct.filter(function (p) { return p.product_name; }).forEach(function (item) {
                var revenue = {};
                revenue['product_code'] = item.product_code;
                revenue['school_fee_month'] = item.school_fee_month;
                revenue['group_code'] = item.group_code;
                revenues_2.push(revenue);
            });
            if (revenues_2.length > 0 && student_codes) {
                var data_1;
                if (!this.isTT78) {
                    data_1 = {
                        'student_codes': student_codes,
                        'revenues': revenues_2,
                        'study_year': this.frmData.study_year,
                        'with_products': false,
                        'invoice_release_id': this.invoicereleaseTempt.value
                    };
                }
                else {
                    data_1 = {
                        'student_codes': student_codes,
                        'revenues': revenues_2,
                        'study_year': this.frmData.study_year,
                        'with_products': false,
                        'template_id': this.invoiceTemplateTT78.value
                    };
                }
                var sub_14 = this.vatService.checkDuplicate(data_1).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        if (rs.data.invoices.length > 0) {
                            _this.studentSelect.forEach(function (student) {
                                var _obj = rs.data.invoices.filter(function (p) { return p.student_code == student.student_code; })[0];
                                if (_obj) {
                                    student.statusData = 'ERROR_DUPLICATE';
                                }
                                else {
                                    if (student.student_reduce_rate_code != _this.frmData.student_reduce_rate_code)
                                        student.statusData = 'OTHER_REDUCE';
                                    else
                                        student.statusData = 'INVALID';
                                }
                            });
                        }
                        else {
                            _this.studentSelect.forEach(function (student) {
                                if (student.student_reduce_rate_code != _this.frmData.student_reduce_rate_code)
                                    student.statusData = 'OTHER_REDUCE';
                                else
                                    student.statusData = 'INVALID';
                            });
                        }
                        if (_this.studentGrid.dataGrid.instance)
                            _this.studentGrid.dataGrid.instance.refresh();
                        _this.totalDuplicate = rs.data.total;
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error', 5000);
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                    sub_14.unsubscribe();
                });
            }
            else if (revenues_2.length === 0 && student_codes) {
                this.studentSelect.forEach(function (student) {
                    if (student.student_reduce_rate_code != _this.frmData.student_reduce_rate_code)
                        student.statusData = 'OTHER_REDUCE';
                    else
                        student.statusData = 'INVALID';
                });
                if (this.studentGrid.dataGrid.instance)
                    this.studentGrid.dataGrid.instance.refresh();
                this.totalDuplicate = 0;
            }
        }
    };
    InvoiceComponent.prototype.showInvoiceDuplicate = function () {
        var _this = this;
        var revenues = [];
        var student_codes = this.studentSelect.length === 0 ? '' : this.studentSelect.map(function (obj) { return obj.student_code; }).join(';');
        this.dataSource.items().filter(function (p) { return p.product_name; }).forEach(function (item) {
            var revenue = {};
            revenue['product_code'] = item.product_code;
            revenue['school_fee_month'] = item.school_fee_month;
            revenue['group_code'] = item.group_code;
            revenues.push(revenue);
        });
        var data;
        if (!this.isTT78) {
            data = {
                'student_codes': student_codes,
                'revenues': revenues,
                'study_year': this.frmData.study_year,
                'with_products': true,
                'invoice_release_id': this.invoicereleaseTempt.value
            };
        }
        else {
            data = {
                'student_codes': student_codes,
                'revenues': revenues,
                'study_year': this.frmData.study_year,
                'with_products': true,
                'template_id': this.invoiceTemplateTT78.value
            };
        }
        var sub = this.vatService.checkDuplicate(data).subscribe(function (rs) {
            if (rs.status === 'success') {
                if (rs.data.invoices.length > 0) {
                    var initialState = {
                        invoiceList: rs.data.invoices,
                        isReceipts: _this.isReceipts
                    };
                    _this.bsModalRef = _this.modalService.show(_invoices_duplicates_invoices_duplicates_component__WEBPACK_IMPORTED_MODULE_19__["InvoicesDuplicatesComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-lg full-modal',
                        initialState: initialState
                    });
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error', 5000);
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    InvoiceComponent.prototype.filterStudentDuplicate = function () {
        this.studentSelect = this.studentSelect.filter(function (item) { return item.statusData !== 'ERROR_DUPLICATE'; });
        var _index = 0;
        var _index_view_order = 0;
        this.studentSelect.forEach(function (item) {
            item.order = ++_index;
            item.view_order = ++_index_view_order;
            if (item.invoice_date != null)
                item.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(item.invoice_date).format('YYYY-MM-DD HH:mm:ss');
        });
        this.totalInvoice = this.studentSelect.length;
        this.totalDuplicate = 0;
    };
    InvoiceComponent.prototype.checkInvoiceDeleted = function () {
        var _this = this;
        var arrIds = [];
        if (this.arrayIdEdit.length > 0) {
            this.arrayIdEdit.forEach(function (element) {
                var arrInvExists = _this.invoicesArr.filter(function (p) { return p.id; });
                if (arrInvExists && arrInvExists.length > 0) {
                    var obj = arrInvExists.filter(function (p) { return p.id == element; })[0];
                    if (!obj) {
                        arrIds.push(element);
                    }
                }
                else
                    arrIds.push(element);
            });
            if (arrIds.length > 0) {
                var strIds = arrIds.join(',');
                var object = {
                    'invoiceIds': strIds,
                    'batchId': this.frmData.batch_id,
                };
                return this.vatService.deleteInvoiceWithBatch(object).toPromise().then(function (result) {
                    if (result.status == "success") {
                        if (result.data == "delete_batch") {
                            _this.invoicesArr.forEach(function (inv) {
                                inv.batch_id = null;
                            });
                        }
                        return true;
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(result.message, 'error', 5000);
                        return false;
                    }
                });
            }
            else
                return true;
        }
        else {
            return true;
        }
    };
    InvoiceComponent.prototype.createFormTypeBase64 = function (isPreview) {
        var _this = this;
        var raw_file_Decode = js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].decode(this.template.raw_file);
        var raw_file_Parse = JSON.parse(raw_file_Decode);
        var htmlBefore = raw_file_Parse.html + "</html>";
        var watermark_image_default = raw_file_Parse.watermark_image_default;
        var watermark_image = raw_file_Parse.watermark_image;
        var countRow = this.template.number_of_row;
        var arrayHtml = "";
        var heightRow = "";
        switch (this.template.paper_size) {
            case _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].paperSizes.A4Doc:
                heightRow = "25px;";
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].paperSizes.A4Ngang:
                heightRow = "25px;";
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].paperSizes.A5Ngang:
                heightRow = "18px;";
                this.reportHeight = "500px";
                break;
            default:
                heightRow = "25px;";
                break;
        }
        var _index = 0;
        this.invoicesArr.forEach(function (item) {
            console.log('item: ', item);
            _this.iframe = document.getElementById('preview-iframe-student');
            _this.iframe.contentDocument.open("text/html", "replace");
            _this.iframe.contentDocument.write(htmlBefore);
            _this.iframe.contentDocument.close();
            _index++;
            $("#preview-iframe-student").contents().find(".container").css({
                'padding-top': '10px',
                'padding-bottom': '30px'
            });
            //////// Thêm ảnh  nền
            $("#preview-iframe-student").contents().find(".bg-template-parent").css('display', 'block');
            $("#preview-iframe-student").contents().find(".bg-template-parent").find(".bg-template").css('background-image', 'url(data:image/' + "jpg" + ';base64,' + watermark_image + ')').css('display', 'block');
            //////// Footer
            $("#preview-iframe-student").contents().find(".report-footer").css({ display: 'block' });
            /////Fill dữ liệu vào hóa đơn
            // Ngày hóa đơn
            var a = moment__WEBPACK_IMPORTED_MODULE_2__();
            var invDate;
            if (item.invoice_date)
                invDate = moment__WEBPACK_IMPORTED_MODULE_2__(item.invoice_date);
            else
                invDate = moment__WEBPACK_IMPORTED_MODULE_2__();
            var yearInv = invDate.year();
            var monthInv = invDate.month() < 12 ? invDate.month() + 1 : 1;
            var dayInv = invDate.date();
            if ($("#preview-iframe-student").contents().find(".NgayHD")[0])
                $('#preview-iframe-student').contents().find(".NgayHD").html(dayInv);
            if ($("#preview-iframe-student").contents().find(".ThangHD")[0])
                $('#preview-iframe-student').contents().find(".ThangHD").html(monthInv);
            if ($("#preview-iframe-student").contents().find(".NamHD")[0])
                $('#preview-iframe-student').contents().find(".NamHD").html(yearInv);
            /// Ẩn thông tin chữ ký số
            if (isPreview) {
                if ($("#preview-iframe-student").contents().find(".efy-esign-none")[0])
                    $('#preview-iframe-student').contents().find(".efy-esign-none").css('display', 'none');
                if ($("#preview-iframe-student").contents().find(".lblSignValid")[0])
                    $('#preview-iframe-student').contents().find(".lblSignValid").css('display', 'none');
                if ($("#preview-iframe-student").contents().find(".lblKyBoi")[0])
                    $('#preview-iframe-student').contents().find(".lblKyBoi").css('display', 'none');
                if ($("#preview-iframe-student").contents().find(".lblKyNgay")[0])
                    $('#preview-iframe-student').contents().find(".lblKyNgay").css('display', 'none');
                if ($("#preview-iframe-student").contents().find(".seler-sign-date")[0])
                    $('#preview-iframe-student').contents().find(".seler-sign-date").css('display', 'none');
                if ($("#preview-iframe-student").contents().find(".seler-sign-name")[0])
                    $('#preview-iframe-student').contents().find(".seler-sign-name").css('display', 'none');
            }
            else {
                if (_this.configs.system_parameter.display_time_sign_invoice) {
                    var singDate = invDate.format('DD/MM/YYYY HH:mm:ss');
                    if (item.invoice_sign_date)
                        singDate = moment__WEBPACK_IMPORTED_MODULE_2__(item.invoice_sign_date).format('DD/MM/YYYY HH:mm:ss');
                    if ($("#preview-iframe-student").contents().find(".seler-sign-date")[0])
                        $('#preview-iframe-student').contents().find(".seler-sign-date").html(singDate);
                    if ($("#preview-iframe-student").contents().find(".seler-sign-name")[0])
                        $('#preview-iframe-student').contents().find(".seler-sign-name").html(_this.currentUser.account.name);
                }
                else {
                    var singDate = invDate.format('DD/MM/YYYY');
                    if (item.invoice_sign_date)
                        singDate = moment__WEBPACK_IMPORTED_MODULE_2__(item.invoice_sign_date).format('DD/MM/YYYY');
                    if ($("#preview-iframe-student").contents().find(".seler-sign-date")[0])
                        $('#preview-iframe-student').contents().find(".seler-sign-date").html(singDate);
                    if ($("#preview-iframe-student").contents().find(".seler-sign-name")[0])
                        $('#preview-iframe-student').contents().find(".seler-sign-name").html(_this.currentUser.account.name);
                }
            }
            ////////Thông tin mẫu số, ký hiệu ,số hóa đơn
            if ($("#preview-iframe-student").contents().find(".number-form")[0])
                $('#preview-iframe-student').contents().find(".number-form").html(_this.template.template_code);
            if ($("#preview-iframe-student").contents().find(".symbol")[0])
                $('#preview-iframe-student').contents().find(".symbol").html(_this.template.invoice_series);
            if ($('#preview-iframe-student').contents().find(".symbol-number-form")[0])
                $('#preview-iframe-student').contents().find(".symbol-number-form").html(_this.template.template_code + _this.template.invoice_series.toUpperCase());
            if ($("#preview-iframe-student").contents().find(".invoice-number")[0])
                $('#preview-iframe-student').contents().find(".invoice-number").html(item.invoice_number);
            /* Mã cơ quan thuế */
            if (_this.template.is_decree_new) {
                if (_this.template.is_invoice_with_code) {
                    $('#preview-iframe-student').contents().find(".tax_authority_code").css('display', 'block');
                    if ($("#preview-iframe-student").contents().find(".ma-co-quan-thue")[0]) {
                        $('#preview-iframe-student').contents().find(".ma-co-quan-thue").html(item.tax_authority_code);
                        if (item.send_department_status == "KHONG_DU_DK_CAP_MA")
                            $('#preview-iframe-student').contents().find(".ma-co-quan-thue").html('Không đủ điều kiện cấp mã');
                    }
                }
                else
                    $('#preview-iframe-student').contents().find(".tax_authority_code").css('display', 'none');
            }
            /////////Tên học sinh
            if ($("#preview-iframe-student").contents().find(".value-9c103984-576d-c322-7843-bdacf97bd888")[0])
                $('#preview-iframe-student').contents().find(".value-9c103984-576d-c322-7843-bdacf97bd888").html(item.student_name);
            if ($("#preview-iframe-student").contents().find(".value-9c103984-576d-c322-7843-bdacf97ac189")[0])
                $('#preview-iframe-student').contents().find(".value-9c103984-576d-c322-7843-bdacf97ac189").html(item.student_name);
            ///// mã số thuế bên mua
            if ($("#preview-iframe-student").contents().find(".value-8d903984-576d-c322-7843-bdacf97ac100")[0])
                $('#preview-iframe-student').contents().find(".value-8d903984-576d-c322-7843-bdacf97ac100").html(item.buyer_tax_code);
            //////// Địa chỉ bên mua
            if ($("#preview-iframe-student").contents().find(".value-7c103984-576d-c322-7843-bdacf97ac189")[0])
                $('#preview-iframe-student').contents().find(".value-7c103984-576d-c322-7843-bdacf97ac189").html(item.buyer_address);
            /////// Hình thức thanh toán
            if ($("#preview-iframe-student").contents().find(".value-3a9f145a-549a-01ea-e507-cc7b0ab28a69")[0])
                $('#preview-iframe-student').contents().find(".value-3a9f145a-549a-01ea-e507-cc7b0ab28a69").html(item.payment_method_view_name);
            ////// Tài khoản bên mua
            if ($("#preview-iframe-student").contents().find(".value-d0f2a367-8ca8-006a-eb0c-cf3261f00a1c")[0])
                $('#preview-iframe-student').contents().find(".value-d0f2a367-8ca8-006a-eb0c-cf3261f00a1c").html(item.bank_account_number);
            /////// Ghi chú trên hóa đơn
            if ($("#preview-iframe-student").contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00a1c")[0])
                $('#preview-iframe-student').contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00a1c").html(item.note);
            /////// Tên đơn vị 
            if ($("#preview-iframe-student").contents().find(".value-8c103984-576d-c322-7843-bdacf97ac189")[0])
                $('#preview-iframe-student').contents().find(".value-8c103984-576d-c322-7843-bdacf97ac189").html(item.customer_name);
            ////// Lớp
            if ($("#preview-iframe-student").contents().find(".value-7d873098-576d-c322-7843-bdacf97ac100")[0])
                $('#preview-iframe-student').contents().find(".value-7d873098-576d-c322-7843-bdacf97ac100").html(item.class_name);
            /// Mã tra cứu
            if ($("#preview-iframe-student").contents().find(".matracuu")[0])
                $('#preview-iframe-student').contents().find(".matracuu").html(item.verify_code);
            /* Loại tiền */
            if ($("#preview-iframe-student").contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00999")[0])
                $('#preview-iframe-student').contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00999").html(item.currency_code);
            // Các trường mở rộng
            if (item.invoice_options && item.invoice_options.length > 0) {
                item.invoice_options.forEach(function (option) {
                    if ($("#preview-iframe-student").contents().find(".value-" + option.code)[0]) {
                        var value = option.value;
                        if (option.data_type == 'soluong' && option.value)
                            value = option.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        if (option.data_type == 'ngay' && option.value)
                            value = moment__WEBPACK_IMPORTED_MODULE_2__(option.value).format('DD/MM/YYYY');
                        $('#preview-iframe-student').contents().find(".value-" + option.code).html(value);
                    }
                });
            }
            $('#preview-iframe-student').contents().find('.report-container').css({ height: _this.reportHeight });
            $('#preview-iframe-student').contents().find('.detail').css({ display: 'block' });
            ////////Fill thông tin hàng hóa
            if ($("#preview-iframe-student").contents().find(".value-8l873098-576d-c322-7843-bdacf97ac100")[0])
                $('#preview-iframe-student').contents().find(".value-8l873098-576d-c322-7843-bdacf97ac100").html(item.invoice_products[0].product_name);
            var format;
            var displayInt = _this.formatter.display_int ? _this.formatter.display_int : (_this.configs.display_int ? _this.configs.display_int : false);
            format = _this.configs.decpoint_is_dot ? { decimal: ".", thousands: ",", display_int: displayInt } : { decimal: ",", thousands: ".", display_int: displayInt };
            var decimal_quatity = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.so_luong);
            // let decimal_number_real_export = VChanggeMoneyService.getFormatterToNumber(formatter.so_luong);
            // let decimal_number_real_import = VChanggeMoneyService.getFormatterToNumber(formatter.so_luong);
            var decimal_price = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.don_gia);
            var decimal_price_nte = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.don_gia_nte);
            var decimal_amount = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.thanh_tien);
            var decimal_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tien_thue);
            var decimal_vat = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.vat);
            var decimal_amount_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien);
            if (_index == 1) {
                _this.trRow = "";
                item.invoice_products.forEach(function (product) {
                    _this.trRow += '<tr class="detail-data font-color-data text-left">';
                    var ths = $("#preview-iframe-student").contents().find("#tbDetail").find("th");
                    for (var j = 0; j < ths.length; j++) {
                        var className = ths[j].className;
                        switch (className) {
                            case "columnSTT":
                                if ($("#preview-iframe-student").contents().find(".columnSTT")[0])
                                    _this.trRow += '<td style="height: "' + heightRow + '" class="center"><span class="valueSTT">' + product.view_order + '</span></td>';
                                break;
                            case "name-1a783984-576d-c322-7843-bdacf97ac189":
                                _this.trRow += '<td style="height: "' + heightRow + '" class="center name-1a783984-576d-c322-7843-bdacf97ac189 columnMaHangHoa"><span class="valueMaHangHoa">' + product.product_code + '</span></td>';
                                break;
                            case "columnTenHangHoa":
                                _this.trRow += '<td style="height: "' + heightRow + '"><span class="valueTenHangHoa">' + product.product_name + '</span></td>';
                                break;
                            case "name-2a783984-576d-c322-7843-bdacf97ac189":
                                var lot = product.lot ? product.lot : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="name-2a783984-576d-c322-7843-bdacf97ac189 columnSoLo"><span class="valueSolo">' + lot + '</span> </td>';
                                break;
                            case "name-3a783984-576d-c322-7843-bdacf97ac189":
                                var expiration_date = product.expiration_date ? product.expiration_date : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="name-3a783984-576d-c322-7843-bdacf97ac189 columnHanDung"><span class="valueHanDung">' + expiration_date + '</span> </td>';
                                break;
                            case "name-4a783984-576d-c322-7843-bdacf97ac189":
                                var country_name = product.country_name ? product.country_name : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="name-4a783984-576d-c322-7843-bdacf97ac189 columnNuocSanXuat"><span class="valueNuocSx">' + country_name + '</span> </td>';
                                break;
                            case "columnDonViTinh":
                                var unit_name = product.unit_name ? product.unit_name : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="center"><span class="valueDonViTinh">' + unit_name + '</span></td>';
                                break;
                            case "columnSoLuong":
                                var quantity = product.quantity ? _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(product.quantity, decimal_quatity, format) : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number-center"><span class="valueSoLuong">' + quantity + '</span></td>';
                                break;
                            case "columnDonGia":
                                var price = product.price ? _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(product.price, decimal_price, format) : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number"><span class="valueDonGia">' + price + '</span></td>';
                                break;
                            case "columnThueSuatGTGT":
                                var vat = product.vat ? product.vat : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number-center"><span class="valueThueSuatGTGT">' + vat + '</span></td>';
                                break;
                            case "columnTienThueGTGT":
                                var amount_vat = product.amount_vat ? product.amount_vat : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number"><span class="valueTienThueGTGT">' + amount_vat + '</span></td>';
                                break;
                            case "columnTienCK":
                                var amount_discount = product.amount_discount ? product.amount_discount : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number"><span class="valueTienCK">' + amount_discount + '</span></td>';
                                break;
                            case "columnThanhTien":
                                var amount = product.amount ? _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(product.amount, decimal_amount, format) : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number"><span class="valueThanhTien">' + amount + '</span></td>';
                                break;
                            case "columnThanhTienSauThue":
                                var amount_after_vat = product.amount_after_vat ? product.amount_after_vat : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number"><span class="valueThanhTienSauThue">' + amount_after_vat + '</span></td>';
                                break;
                            case "columnThucXuat":
                                var number_real_export = product.number_real_export ? product.number_real_export : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number-center"><span class="valueThucXuat">' + number_real_export + '</span></td>';
                                break;
                            case "columnThucNhap":
                                var number_real_import = product.number_real_import ? product.number_real_import : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number-center"><span class="valueThucNhap">' + number_real_import + '</span></td>';
                                break;
                            case "columnThanhTienChuaCK":
                                var amount_without_discount = product.amount_without_discount ? product.amount_without_discount : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number"><span class="valueThanhTienChuaCK">' + amount_without_discount + '</span></td>';
                                break;
                            case "columnSoMay":
                                var engine_number = product.engine_number ? product.engine_number : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="center"><span class="valueSoMay">' + engine_number + '</span></td>';
                                break;
                            case "columnSoKhung":
                                var chassis_number = product.chassis_number ? product.chassis_number : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="center"><span class="valueSoKhung">' + chassis_number + '</span></td>';
                                break;
                            case "columnThueKhac":
                                var other_tax = product.other_tax ? product.other_tax : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number"><span class="valueThueKhac">' + other_tax + '</span></td>';
                                break;
                            case "columnPhiKhac":
                                var other_charge = product.other_charge ? product.other_charge : "";
                                _this.trRow += '<td style="height: "' + heightRow + '" class="number"><span class="valuePhiKhac">' + other_charge + '</span></td>';
                                break;
                        }
                    }
                    _this.trRow += '</tr>';
                });
                if (item.invoice_products.length < countRow) {
                    var count = countRow - item.invoice_products.length;
                    _this.createRowData(count);
                }
            }
            $("#preview-iframe-student").contents().find(".tbody-content-detail").append($(_this.trRow));
            if ($("#preview-iframe-student").contents().find(".TIEN_HH_DV_GTGT_KHONG_THUE")[0])
                $('#preview-iframe-student').contents().find(".TIEN_HH_DV_GTGT_KHONG_THUE").html(item.total_amount_product_vatx);
            if ($("#preview-iframe-student").contents().find(".TIEN_HH_DV_GTGT0")[0])
                $('#preview-iframe-student').contents().find(".TIEN_HH_DV_GTGT0").html(item.total_amount_product_vat0);
            if ($("#preview-iframe-student").contents().find(".TIEN_HH_DV_GTGT5")[0])
                $('#preview-iframe-student').contents().find(".TIEN_HH_DV_GTGT5").html(item.total_amount_product_vat5);
            if ($("#preview-iframe-student").contents().find(".TIEN_HH_DV_GTGT10")[0])
                $('#preview-iframe-student').contents().find(".TIEN_HH_DV_GTGT10").html(item.total_amount_product_vat10);
            if ($("#preview-iframe-student").contents().find(".TONG_TIEN_HH_DV_GTGT")[0])
                $('#preview-iframe-student').contents().find(".TONG_TIEN_HH_DV_GTGT").html(item.amount);
            if ($("#preview-iframe-student").contents().find(".TIEN_THUE_GTGT")[0])
                $('#preview-iframe-student').contents().find(".TIEN_THUE_GTGT").html(_this.template.symbol_no_vat);
            if ($("#preview-iframe-student").contents().find(".TIEN_THUE_GTGT0")[0])
                $('#preview-iframe-student').contents().find(".TIEN_THUE_GTGT0").html(item.amount_vat0);
            if ($("#preview-iframe-student").contents().find(".TIEN_THUE_GTGT5")[0])
                $('#preview-iframe-student').contents().find(".TIEN_THUE_GTGT5").html(item.amount_vat5);
            if ($("#preview-iframe-student").contents().find(".TIEN_THUE_GTGT10")[0])
                $('#preview-iframe-student').contents().find(".TIEN_THUE_GTGT10").html(item.amount_vat10);
            if ($("#preview-iframe-student").contents().find(".TONG_TIEN_THUE_GTGT")[0])
                $('#preview-iframe-student').contents().find(".TONG_TIEN_THUE_GTGT").html(item.total_amount_vat);
            if ($("#preview-iframe-student").contents().find(".TIEN_THANH_TOAN_KHONG_THUE")[0])
                $('#preview-iframe-student').contents().find(".TIEN_THANH_TOAN_KHONG_THUE").html(item.amount_after_vatx);
            if ($("#preview-iframe-student").contents().find(".TIEN_THANH_TOAN_GTGT0")[0])
                $('#preview-iframe-student').contents().find(".TIEN_THANH_TOAN_GTGT0").html(item.amount_after_vat0);
            if ($("#preview-iframe-student").contents().find(".TIEN_THANH_TOAN_GTGT5")[0])
                $('#preview-iframe-student').contents().find(".TIEN_THANH_TOAN_GTGT5").html(item.amount_after_vat5);
            if ($("#preview-iframe-student").contents().find(".TIEN_THANH_TOAN_GTGT10")[0])
                $('#preview-iframe-student').contents().find(".TIEN_THANH_TOAN_GTGT10").html(item.amount_after_vat10);
            if ($("#preview-iframe-student").contents().find(".TONG_TIEN_THANH_TOAN")[0])
                $('#preview-iframe-student').contents().find(".TONG_TIEN_THANH_TOAN").html(item.amount_after_vat);
            if ($("#preview-iframe-student").contents().find(".total-amount-product-without-vat")[0])
                $('#preview-iframe-student').contents().find(".total-amount-product-without-vat").html(_core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(item.amount, decimal_amount, format));
            if (item.invoice_products[0].vat && item.invoice_products[0].vat != -1) {
                if ($("#preview-iframe-student").contents().find(".vat-percentage")[0])
                    $('#preview-iframe-student').contents().find(".vat-percentage").html(item.invoice_products[0].vat + " %");
            }
            else if ($("#preview-iframe-student").contents().find(".vat-percentage")[0])
                $('#preview-iframe-student').contents().find(".vat-percentage").html(_this.template.symbol_no_vat);
            if ($("#preview-iframe-student").contents().find(".total-amount-vat")[0])
                $('#preview-iframe-student').contents().find(".total-amount-vat").html(_core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(item.total_amount_vat, decimal_amount_vat, format));
            if ($("#preview-iframe-student").contents().find(".total-payment")[0])
                $('#preview-iframe-student').contents().find(".total-payment").html(_core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(item.total_payment, decimal_amount_after_vat, format));
            if ($("#preview-iframe-student").contents().find(".value-1h883984-576d-c322-7843-bdacf97ac189")[0])
                $('#preview-iframe-student').contents().find(".value-1h883984-576d-c322-7843-bdacf97ac189").html(item.total_payment_in_word);
            if ($("#preview-iframe-student").contents().find(".total-payment-word")[0])
                $('#preview-iframe-student').contents().find(".total-payment-word").html(item.total_payment_in_word);
            var width = $("#preview-iframe-student").contents().find(".container").width();
            var height = parseInt($("#preview-iframe-student").contents().find(".container").height()) + 41;
            ////// Thêm ảnh khung
            $("#preview-iframe-student").contents().find(".container").css({
                'background-image': 'url(data:image/' + "jpg" + ';base64,' + watermark_image_default + ')',
                'display': 'block',
                'background-size': width + 'px ' + height + 'px'
            });
            ///The End
            var htmlAfter = "<html style=\"margin: auto;\" xmlns:inv=\"http://laphoadon.gdt.gov.vn/2014/09/invoicexml/v1\" xmlns:user=\"http://mycompany.com/mynamespace\"\n          xmlns:sign=\"http://www.w3.org/2000/09/xmldsig#\">" + _this.iframe.contentDocument.documentElement.innerHTML + "</html></br></br></br>";
            arrayHtml += htmlAfter;
        });
        this.arrHtml = arrayHtml;
    };
    InvoiceComponent.prototype.getTemplate = function () {
        var _this = this;
        this.templateService.show(this.invoicereleaseTempt.template_id).toPromise().then(function (rs) {
            if (rs.status == "success") {
                _this.template = rs.data.template;
                _this.onCheckDuplicate(null);
            }
            else {
                return null;
            }
        });
    };
    InvoiceComponent.prototype.getTemplateTT78 = function () {
        var _this = this;
        this.templateService.show(this.invoiceTemplateTT78.value).toPromise().then(function (rs) {
            if (rs.status == "success") {
                _this.template = rs.data.template;
            }
            else {
                return null;
            }
        });
    };
    InvoiceComponent.prototype.createRowData = function (countRow) {
        for (var i = 0; i < countRow; i++) {
            this.trRow += '<tr class="detail-data font-color-data text-left">';
            var ths = $("#preview-iframe-student").contents().find("#tbDetail").find("th");
            var _loop_2 = function () {
                var className = ths[j].className;
                var column = this_2.arrColumns.filter(function (p) { return p.name == className; })[0];
                if (column) {
                    var valueColumn = column.value;
                    var height = column.height;
                    if (this_2.template.paper_size == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].paperSizes.A5Ngang)
                        height = "18px";
                    if (i > 0)
                        valueColumn = '';
                    if ($("#preview-iframe-student").contents().find("." + column.name)[0])
                        this_2.trRow += '<td style="height: ' + height + ';"' + ' class="' + column.class + '"><span class="' + valueColumn + '"></span></td>';
                }
            };
            var this_2 = this;
            for (var j = 0; j < ths.length; j++) {
                _loop_2();
            }
            this.trRow += '</tr>';
        }
    };
    InvoiceComponent.prototype.refreshStudent = function () {
        var _this = this;
        this.invoicesArr.forEach(function (invoice) {
            _this.studentSelect.forEach(function (element) {
                if (element.student_id === invoice.student_id) {
                    element.id = invoice.id;
                    element.invoice_number = invoice.invoice_number;
                    element.invoice_date = invoice.invoice_date;
                    element.batch_id = invoice.batch_id;
                    element.status = invoice.status;
                    element.verify_code = invoice.verify_code;
                }
            });
        });
    };
    InvoiceComponent.prototype.checkNumberRelease = function () {
        var _this = this;
        if (!this.isTT78) {
            return this.notifyService.show(this.invoicereleaseTempt.value).toPromise().then(function (rs) {
                if (rs.status == "success") {
                    var soton = parseInt(rs.data.invoice_release.amount) - parseInt(rs.data.invoice_release.used_amount);
                    if (soton > 0) {
                        _this.countRelease = soton;
                        return true;
                    }
                    else {
                        if (_this.totalCountWaitSign > 0)
                            return true;
                        else
                            return false;
                    }
                }
                else {
                    return false;
                }
            });
        }
        else
            return true;
    };
    InvoiceComponent.prototype.refreshBatchIds = function () {
        var frmDataCompare = JSON.parse(this.valueChange);
        frmDataCompare.status = this.frmData.status;
        // frmDataCompare.invoice_date = this.frmData.invoice_date;
        var jsonTempt = JSON.stringify(frmDataCompare);
        if (this.isChildInvoices && !this.checkDataFormChange(jsonTempt, this.frmData)) {
            this.invoicesArr.forEach(function (item) {
                item.batch_old_id = item.batch_id;
                item.batch_id = null;
            });
        }
    };
    InvoiceComponent.prototype.loadInvoiceProduct = function (lstInvoiceProduct) {
        var _this = this;
        var invoice_products = [];
        lstInvoiceProduct.forEach(function (item, index) {
            if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                item.row_content = item.product_name;
                invoice_products.push(item);
                if (item.is_transport_number) {
                    _this.frmData.transport_number = item.product_name;
                }
            }
        });
        this.frmData.invoice_products = invoice_products;
    };
    InvoiceComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        if (this.isTT78) {
            var ListSerialNumber = "DSCKS";
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
            }
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate, 'InvoiceData', ListSerialNumber, true);
        }
        else
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate);
    };
    InvoiceComponent.prototype.xemhoadonPDF = function (rs) {
        var _this = this;
        //Xem hóa đơn từ server
        if (this.configs.system_parameter.display_template_from_server) {
            var w = 1920, h = 900;
            w = window.screen.availWidth * 100 / 100;
            h = window.screen.availHeight * 93 / 100;
            var pdf_file = rs.data.invoice.pdf_file;
            var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_4__["VPreviewInvService"]._getUrlInvoice(pdf_file);
            var win = window.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
            win.resizeTo(screen.availWidth, screen.availHeight);
            win.focus();
            this.spinner.hide();
        }
        else {
            /* Xem hóa đơn từ Client */
            var json_data = rs.data.invoice.json_data;
            var appCode = "REPX";
            if (rs.data.invoice.is_html_template)
                appCode = "HTML";
            this.socketService.xemhoadon(function () { return _this.connectWebsocket(); }, json_data, appCode, "XEM_TRUOC");
        }
    };
    InvoiceComponent.prototype.viewInvoice = function (content, typeView, hinhthucxuat, invoice_date) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var w, h, pdf_file, objectUrl, win, trang_thai, du_lieu, content_invoice, initialState, subModal_3;
            return __generator(this, function (_a) {
                if (typeView == "XEM_TRUOC") {
                    w = 1920, h = 900;
                    w = window.screen.availWidth * 100 / 100;
                    h = window.screen.availHeight * 93 / 100;
                    pdf_file = content;
                    objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_4__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                    win = window.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
                    win.resizeTo(screen.availWidth, screen.availHeight);
                    win.focus();
                    this.spinner.hide();
                }
                else if (typeView == "XEM_TRUOC_KHI_XUAT") {
                    trang_thai = '';
                    if (this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].hinhThucXuat.XuatChoKy) {
                        trang_thai = this._translate.THONG_TIN.xuat_va_ky;
                    }
                    else {
                        trang_thai = this._translate.THONG_TIN.xuat_cho_ky;
                    }
                    du_lieu = {};
                    du_lieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadonHSClient;
                    du_lieu['file_content'] = content;
                    content_invoice = {
                        du_lieu: du_lieu,
                        ngay_hoa_don: invoice_date,
                        trang_thai: trang_thai,
                        tong_tien: "",
                        title_invoice_type: this._translate.THONG_TIN.ban_du_thao_hoa_don.toUpperCase(),
                        note_warn: this._translate.THONG_TIN.luu_y_truoc_khi_xuat,
                        is_display_img_note: true,
                        text_ngay_hoa_don: this._translate.THONG_TIN.ngay_hoa_don,
                        text_tong_tien: this._translate.THONG_TIN.tong_tien,
                        question_again: this._translate.THONG_TIN.ban_co_chac_chan_xuat_hoa_don_khong
                    };
                    initialState = {
                        content_invoice: content_invoice,
                    };
                    this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_25__["PreviewInvoiceComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-xl prv-s-invoice v-s-invoice',
                        initialState: initialState
                    });
                    subModal_3 = this.customeModalService.onHide.subscribe(function () {
                        if (_this.bsModalRef.content.successSaveItem == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].actionHander.DongY) {
                            _this.confirmCheckPreview = true;
                            if (hinhthucxuat === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.TrinhKy) {
                                _this.eSubmit(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.TrinhKy);
                            }
                            else {
                                _this.eSubmit('XUAT');
                            }
                        }
                        subModal_3.unsubscribe();
                    });
                    // const pdf_file = content;
                    // const objectUrl = VPreviewInvService._getUrlInvoice(pdf_file);
                    // this.windowPreviewBeforeSubmit = window.open(objectUrl, 'name', `width=${screen.availWidth}, height=${screen.availHeight}`);
                    // this.windowPreviewBeforeSubmit.document.body.innerHTML = this._translate.NOTIFY.loading;
                    // this.windowPreviewBeforeSubmit.blur();
                    // const timer = setInterval(() => {
                    //   if (this.windowPreviewBeforeSubmit.closed) {
                    //     clearInterval(timer);
                    //     const isCheck = Helper.getCookie('CK_CFM_I');
                    //     this.windowPreviewBeforeSubmit = undefined;
                    //     if (isCheck === 'CHECKED') {
                    //       document.cookie = 'CK_CFM_I=; path=/';
                    //       this.confirmCheckPreview = true;
                    //       if (hinhthucxuat === sEnum.statusInv.TrinhKy) {
                    //         this.eSubmit(sEnum.statusInv.TrinhKy);
                    //       } else {
                    //         this.eSubmit('XUAT');
                    //       }
                    //     }
                    //   }
                    // }, 500);
                    // let htx = '';
                    // if (this.formInvoice.getHtXuatValue() !== sEnum.hinhThucXuat.XuatChoKy) {
                    //   htx = 'và ký';
                    // } else {
                    //   htx = 'chờ ký';
                    // }
                    // this.windowPreviewBeforeSubmit.document.write(`
                    // <!DOCTYPE html>
                    //     <html lang="en">
                    //     <head>
                    //       <meta charset="UTF-8">
                    //       <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    //       <title>Document</title>
                    //       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                    //       <style type="text/css" scoped>
                    //       .nhap-nhay {
                    //         background: red;
                    //         padding: 0.5px 9px;
                    //         margin-right: 5px;
                    //         border-radius: 57%;
                    //         -webkit-animation: flicker 1s infinite;
                    //       }
                    //       .ht-xuat{
                    //         width: 20%;
                    //         height: 100%;
                    //         background: #ffffff;
                    //         box-shadow: 0px 0px 8px 0px #888888;
                    //       }
                    //       .ht-xuat > .right-nav{
                    //         display:flex;
                    //         justify-content: space-between;
                    //         align-items: center;
                    //         border-bottom: 1px solid #d5d5d5;
                    //         padding:20px;
                    //       }
                    //       @-webkit-keyframes flicker
                    //       {
                    //       0% {opacity:0;}
                    //       9% {opacity:0;}
                    //       10% {opacity:.5;}
                    //       13% {opacity:0;}
                    //       20% {opacity:.5;}
                    //       25% {opacity:1;}
                    //       }
                    //       .example {
                    //         padding: 20px;
                    //       }
                    //       input[type=button] {
                    //         padding: 5px 10px;
                    //         margin: 10px 5px;
                    //         border-radius: 5px;
                    //         cursor: pointer;
                    //         background: #ddd;
                    //         border: 1px solid #ccc;
                    //       }
                    //       input[type=button]:hover {
                    //         background: #ccc;
                    //       }
                    //       .confirm {
                    //         display: none;
                    //       }
                    //       .confirm > div:first-of-type {
                    //         position: fixed;
                    //         width: 100%;
                    //         height: 100%;
                    //         background: rgba(0, 0, 0, 0.5);
                    //         top: 0px;
                    //         left: 0px;
                    //       }
                    //       .confirm > div:last-of-type {
                    //         padding: 10px 20px;
                    //         background: white;
                    //         position: absolute;
                    //         width: auto;
                    //         height: auto;
                    //         left: 50%;
                    //         top: 50%;
                    //         transform: translate(-50%, -50%);
                    //         border-radius: 5px;
                    //         border: 1px solid #333;
                    //       }
                    //       .confirm > div:last-of-type div:first-of-type {
                    //         min-width: 150px;
                    //         padding: 10px;
                    //       }
                    //       .confirm > div:last-of-type div:last-of-type {
                    //         text-align: right;
                    //       }
                    //     </style>
                    //     </head>
                    //     <body>
                    //     <div style="margin-left: 50px;">
                    //     <h3 style="color: red; text-align: center;">BẢN DỰ THẢO HÓA ĐƠN ĐIỆN TỬ</h3>
                    //     <p style="font-weight: 600;"><span class="nhap-nhay"></span><span style="font-size: 17px;">Lưu ý: 
                    //     </span>Đề nghị đơn vị kiểm tra thật kỹ các nội dung hóa đơn đã nhập trước khi xuất như: Ngày hóa đơn, Bên mua hàng, Tên hàng hóa dịch vụ, Tổng tiền,…để tránh xuất sai.</>
                    //   </div>
                    //   <div style="display: flex; height:84vh; justify-content: center;">
                    //     <iframe style="" width="70%" height="100%" src="${objectUrl}"></iframe>
                    //     <div class="ht-xuat">
                    //       <div class="right-nav">
                    //        <button style =" background:#007BFF;color:#ffffff; padding: 10px 50px; border: none ; outline:none; border-radius: 30px"> <a href="javascript:void(0)" style="text-decoration: none; color:#ffffff; font-weight: bold; padding-right:10px" onclick="setConfirmInvoice()">Đồng ý </a> <i class="fa fa-angle-right"></i></button>
                    //         <a href="javascript:void(0)" style="text-decoration: none; color: gray" onclick="closeWin()"><i class="fa fa-times" style="font-size:25px"></i></a>
                    //       </div>
                    //       <div style="display: flex; flex-direction: column; padding:10px;">
                    //         <div style="display: flex; justify-content: space-between; align-items: center;padding:10px; border-bottom: 1px solid #d5d5d5">
                    //           <p style=" font-weight: 600;">Ngày hóa đơn : </p>
                    //           <p style="color: orange;font-weight: 600;">${moment(invoice_date).format('DD/MM/YYYY')}</p>
                    //         </div>
                    //         <div style="display: flex; justify-content: space-between; align-items: center;padding: 10px; border-bottom: 1px solid #d5d5d5">
                    //           <p style="font-weight: 600;">Trạng thái : </p>
                    //           <p style="color: orange;font-weight: 600;">Xuất ${htx}</p>
                    //         </div>
                    //       </div>
                    //     </div>
                    //   </div>
                    //   <div class="confirm">
                    //       <div></div>
                    //       <div>
                    //         <div id="confirmMessage">Confirm text</div>
                    //         <div>
                    //           <input id="confirmYes" type="button" value="Đồng ý" />
                    //           <input id="confirmNo" type="button" value="Quay lại" />
                    //         </div>
                    //       </div>
                    //   </div>
                    //   <script type="text/javascript">
                    //   const ui = {
                    //     confirm: async (message) => createConfirm(message)
                    //   }
                    //   const createConfirm = (message) => {
                    //     return new Promise((complete, failed)=>{
                    //       $('#confirmMessage').text(message)
                    //       $('#confirmYes').off('click');
                    //       $('#confirmNo').off('click');
                    //       $('#confirmYes').on('click', ()=> { $('.confirm').hide(); complete(true); });
                    //       $('#confirmNo').on('click', ()=> { $('.confirm').hide(); complete(false); });
                    //       $('.confirm').show();
                    //     });
                    //   }
                    //   const setConfirmInvoice = async () => {
                    //     const confirm = await ui.confirm("Bạn có chắc chắn muốn xuất hóa đơn ${htx} không?");
                    //     if(confirm){
                    //       document.cookie = "CK_CFM_I=CHECKED; path=/";
                    //       window.close();
                    //     } else{
                    //     }
                    //   } 
                    //     function closeWin(){
                    //       window.close();
                    //     }
                    //   </script>
                    //   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    //     </body>
                    //     </html>
                    // `);
                    // this.windowPreviewBeforeSubmit.focus();
                    // this.spinner.hide();
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_5__["ProductGripComponent"]),
        __metadata("design:type", _product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_5__["ProductGripComponent"])
    ], InvoiceComponent.prototype, "productGrip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_form_student_invoive_form_student_invoive_component__WEBPACK_IMPORTED_MODULE_6__["FormStudentInvoiveComponent"]),
        __metadata("design:type", _form_student_invoive_form_student_invoive_component__WEBPACK_IMPORTED_MODULE_6__["FormStudentInvoiveComponent"])
    ], InvoiceComponent.prototype, "formInvoice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_student_invoice_components_student_invoice_grip_student_invoice_grip_component__WEBPACK_IMPORTED_MODULE_20__["StudentInvoiceGripComponent"]),
        __metadata("design:type", _modules_student_invoice_components_student_invoice_grip_student_invoice_grip_component__WEBPACK_IMPORTED_MODULE_20__["StudentInvoiceGripComponent"])
    ], InvoiceComponent.prototype, "studentGrid", void 0);
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/modules/student-invoice/components/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/modules/student-invoice/components/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_7__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_12__["CustomersService"],
            _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_18__["ConfirmService"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_21__["TemplateService"],
            _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_22__["NotifyService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_23__["NgxSpinnerService"],
            _modules_student_invoice_shared__WEBPACK_IMPORTED_MODULE_24__["StudentInvoiceService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_26__["MyBsModalService"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/components/invoices-duplicates/invoices-duplicates.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/invoices-duplicates/invoices-duplicates.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\" *ngIf=\"!isReceipts\">{{ 'MENU.info_invoice_duplicate' | translate }}</h4>\r\n  <h4 class=\"modal-title pull-left\" *ngIf=\"isReceipts\">{{ 'MENU.info_receipts_duplicate' | translate }}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid id=\"gridContainer\" (onEditingStart)=\"onEditingStart($event)\"\r\n    (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"invoice_list\" [showRowLines]=\"true\"\r\n    [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\" [columnResizingMode]=\"true\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPrepared)=\"onEditorPrepared($event)\"\r\n    (onEditorPreparing)=\"onEditorPreparing($event)\">\r\n    <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <!-- Số hóa đơn -->\r\n    <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\" *ngIf=\"!isReceipts\"\r\n      minWidth=\"{{ _translate.GRID_WIDTH.so_hoa_don }}\" caption=\"{{  _translate.GRID.INVOICE.invoice_number }}\"\r\n      alignment=\"left\" [fixed]=\"true\" sortOrder=\"desc\" fixedPosition=\"left\" [allowEditing]=\"false\" alignment=\"center\">\r\n    </dxi-column>\r\n    <!-- Số phiếu thu -->\r\n    <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\" *ngIf=\"isReceipts\"\r\n      minWidth=\"{{ _translate.GRID_WIDTH.so_hoa_don }}\" caption=\"{{  _translate.GRID.INVOICE.receipts_number }}\"\r\n      alignment=\"left\" [fixed]=\"true\" sortOrder=\"desc\" fixedPosition=\"left\" [allowEditing]=\"false\" alignment=\"center\">\r\n    </dxi-column>\r\n    <!-- Ngày hóa đơn -->\r\n    <dxi-column dataField=\"invoice_date\" minWidth=\"{{ _translate.GRID_WIDTH.ngay_hoa_don }}\" *ngIf=\"!isReceipts\"\r\n      caption=\"{{   _translate.GRID.INVOICE.invoice_date }}\" dataType=\"date\" format=\"dd/MM/yyyy\" alignment=\"left\"\r\n      [fixed]=\"true\" fixedPosition=\"left\" [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n    <!-- Ngày phiếu thu -->\r\n    <dxi-column dataField=\"invoice_date\" minWidth=\"{{ _translate.GRID_WIDTH.ngay_hoa_don }}\" *ngIf=\"isReceipts\"\r\n      caption=\"{{   _translate.GRID.INVOICE.receipts_date }}\" dataType=\"date\" format=\"dd/MM/yyyy\" alignment=\"left\"\r\n      [fixed]=\"true\" fixedPosition=\"left\" [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n    <!-- Mã HS-SV -->\r\n    <dxi-column dataField=\"student_code\" minWidth=\"{{ _translate.GRID_WIDTH.ma_hoc_sinh }}\"\r\n      caption=\"{{  _translate.CONTROLL.LABEL.code_student }}\" alignment=\"left\" [fixed]=\"true\" fixedPosition=\"left\"\r\n      [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n    <!-- Tên HS-SV -->\r\n    <dxi-column dataField=\"student_name\" minWidth=\"{{ _translate.GRID_WIDTH.ten_hoc_sinh }}\"\r\n      caption=\"{{  _translate.CONTROLL.LABEL.name_student }}\" alignment=\"left\" [fixed]=\"true\" fixedPosition=\"left\"\r\n      [allowEditing]=\"false\"></dxi-column>\r\n    <!-- Lớp -->\r\n    <dxi-column dataField=\"class_name\" minWidth=\"{{ _translate.GRID_WIDTH.lop }}\"\r\n      caption=\"{{  _translate.CONTROLL.LABEL.class }}\" alignment=\"left\" [fixed]=\"true\" fixedPosition=\"left\"\r\n      [allowEditing]=\"false\"></dxi-column>\r\n    <!-- Mã khoản thu -->\r\n    <dxi-column dataField=\"product_code\" caption=\"{{ _translate.GRID.REVENUE.revenue_code }}\"\r\n      minWidth=\"{{ _translate.GRID_WIDTH.ma_hang }}\" alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\"\r\n      [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Tháng thu HP -->\r\n    <dxi-column dataField=\"school_fee_month\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.school_fee_month }}\"\r\n      minWidth=\"{{ _translate.GRID_WIDTH.thang_thu_hp }}\" [editorOptions]=\"{disabled: true}\" alignment=\"center\"\r\n      [fixed]=\"true\" fixedPosition=\"left\" [allowEditing]=\"false\"></dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n          *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\"\r\n    (click)=\"dong()\">\r\n  </dx-button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/invoices-duplicates/invoices-duplicates.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/invoices-duplicates/invoices-duplicates.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .form-input-visibility{visibility:hidden}::ng-deep .invoice-number-create-invoice input{color:red;font-weight:bold}.link-send-invoice{margin-top:10px}.link-send-invoice a{text-decoration:underline}#invoiceHistoryGrid{margin-top:15px}.gach-chan{text-decoration:underline;text-align:center}\n"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/invoices-duplicates/invoices-duplicates.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/invoices-duplicates/invoices-duplicates.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: InvoicesDuplicatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesDuplicatesComponent", function() { return InvoicesDuplicatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InvoicesDuplicatesComponent = /** @class */ (function () {
    function InvoicesDuplicatesComponent(router, route, vatService, translate, authService, bsModalRef, socketService, spinner, customersService) {
        this.router = router;
        this.route = route;
        this.vatService = vatService;
        this.translate = translate;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.socketService = socketService;
        this.spinner = spinner;
        this.customersService = customersService;
        this.selectedItems = [];
        this.ganXong = false;
        this.clickCurent = '';
        this.disEditMulti = true;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.showPopup = false;
        this.invoice_list = [];
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    InvoicesDuplicatesComponent.prototype.ngOnInit = function () {
        this.convertData();
        this.configs = this.authService.getConfigs();
    };
    InvoicesDuplicatesComponent.prototype.convertData = function () {
        var _this = this;
        this.invoiceList.forEach(function (item) {
            item.invoice_products.forEach(function (element) {
                var invoice = new Object;
                invoice["id"] = item.id;
                invoice["student_id"] = item.student_id;
                invoice["invoice_number"] = item.invoice_number;
                invoice["invoice_date"] = item.invoice_date;
                invoice["class_name"] = item.class_name;
                invoice["student_code"] = item.student_code;
                invoice["student_name"] = item.student_name;
                invoice["product_code"] = element.product_code;
                invoice["school_fee_month"] = element.school_fee_month;
                _this.invoice_list.push(invoice);
            });
        });
    };
    InvoicesDuplicatesComponent.prototype.onEditorPreparing = function (e) {
    };
    InvoicesDuplicatesComponent.prototype.onEditorPrepared = function (e) {
        if (e.dataField == 'buyer_email' && e.parentType == 'dataRow') {
            //   e.row.cells[6].text = "htkt";
            //  e.editorOptions.onValueChanged = function(args){
            //    e.row.cells[6].value = args.value;
            //       e.setValue(args.value);
            //  }
        }
    };
    InvoicesDuplicatesComponent.prototype.onEditingStart = function (e) {
        e.component.saveEditData();
    };
    InvoicesDuplicatesComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_viewInvoice') {
                if (data.Status == "success")
                    _this.viewInvoice(data.Data.Content, data.Data.typeView, data.Data.hinhthucxuat, data.Data.invoice_date);
                else if (data.Status == "error") {
                    var popUp = window.open('about:blank', 'name', 'width=200, height=100');
                    if (popUp == null || typeof (popUp) == 'undefined') {
                    }
                    else
                        popUp.close();
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(data.Description, 'error');
                    _this.spinner.hide();
                }
            }
        });
    };
    InvoicesDuplicatesComponent.prototype.setUrlNavigate = function () {
        var url = window.location.pathname;
        if (sessionStorage.hasOwnProperty('urlIndex')) {
            if (sessionStorage.getItem('urlIndex') !== null) {
                sessionStorage.setItem('urlIndex', url);
            }
            else {
                sessionStorage.setItem('urlIndex', url);
            }
        }
        else {
            sessionStorage.setItem('urlIndex', url);
        }
    };
    InvoicesDuplicatesComponent.prototype.viewInvoice = function (content, typeView, hinhthucxuat, invoice_date) {
        if (typeView == "XEM_TRUOC") {
            var w = 1920, h = 900;
            w = window.screen.availWidth * 100 / 100;
            h = window.screen.availHeight * 93 / 100;
            var pdf_file = content;
            var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_4__["VPreviewInvService"]._getUrlInvoice(pdf_file);
            var win = window.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
            win.resizeTo(screen.availWidth, screen.availHeight);
            win.focus();
            this.spinner.hide();
        }
    };
    InvoicesDuplicatesComponent.prototype.view = function (data) {
        var _this = this;
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            var w_1 = 1920, h_1 = 900;
            w_1 = window.screen.availWidth * 100 / 100;
            h_1 = window.screen.availHeight * 93 / 100;
            var win_1 = window.open('about:blank', 'name', 'width=200, height=100');
            win_1.document.body.innerHTML = this._translate.NOTIFY.loading;
            win_1.blur();
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            if (this.configs.system_parameter.display_template_from_server) {
                var sub_1 = this.vatService.xemHoaDonInvoiceImport(ids).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        var pdf_file = rs.data.invoice.pdf_file;
                        var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_4__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                        win_1.resizeTo(screen.availWidth, screen.availHeight);
                        win_1.focus();
                        win_1.open(objectUrl, 'name', 'width=' + w_1 + ', height=' + h_1);
                    }
                    else {
                        win_1.close();
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                    sub_1.unsubscribe();
                });
            }
            else {
                var popup_1 = window.open('about:blank', 'name', "width=200, height=100");
                popup_1.document.body.innerHTML = this._translate.NOTIFY.loading;
                popup_1.blur();
                this.spinner.show();
                var sub_2 = this.vatService.xemHoaDonInvoiceImport(ids).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        /* Xem hóa đơn từ Client */
                        var json_data = rs.data.invoice.json_data;
                        var appCode = "REPX";
                        if (rs.data.invoice.is_html_template)
                            appCode = "HTML";
                        _this.socketService.xemhoadon(function () { return _this.connectWebsocket(); }, json_data, appCode, "XEM_TRUOC");
                    }
                    else {
                        popup_1.close();
                        _this.spinner.hide();
                        // this.checkSubmit.close();
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                    _this.spinner.hide();
                }, function () {
                    //  Library.hideloading();
                    sub_2.unsubscribe();
                });
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    InvoicesDuplicatesComponent.prototype.dong = function () {
        this.bsModalRef.content.successSaveItem = 'success';
        this.bsModalRef.hide();
    };
    InvoicesDuplicatesComponent.prototype.selectionChanged = function (data) {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        this.disEditMulti = true;
        this.selectedItems = data.selectedRowsData;
        if (this.selectedItems.length > 0) {
            var checks = this.selectedItems.filter(function (item) {
                return item.number_of_vouchers;
            });
            var checkDaXuat = this.selectedItems.filter(function (item) {
                return item.status == 'DA_XUAT';
            });
            if (checks.length == this.selectedItems.length && checkDaXuat.length == 0) {
                this.disEditMulti = false;
            }
        }
    };
    InvoicesDuplicatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoices-duplicates',
            template: __webpack_require__(/*! ./invoices-duplicates.component.html */ "./src/app/modules/student-invoice/components/invoices-duplicates/invoices-duplicates.component.html"),
            styles: [__webpack_require__(/*! ./invoices-duplicates.component.scss */ "./src/app/modules/student-invoice/components/invoices-duplicates/invoices-duplicates.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_6__["CustomersService"]])
    ], InvoicesDuplicatesComponent);
    return InvoicesDuplicatesComponent;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/components/list-student/list-student.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/list-student/list-student.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pl-0 pr-0 mb-0\">\r\n  <div class=\"row support-invoice\">\r\n    <div class=\"col-md-12\">\r\n      <h4 class=\"label-student\">Chọn HS - SV ở danh sách dưới đây:</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 bg-white\" style=\"padding-top: 5px\">\r\n      <!-- <button (click)=\"reloadStudent()\" class=\"btn-menu\">\r\n        <i class=\"fa fa-refresh\"></i>\r\n      </button> -->\r\n      <button class=\"btn-menu\" (click)=\"addStudent()\">\r\n        <i class=\"fa fa-plus-square-o\"></i>\r\n      </button>\r\n      <button class=\"btn-menu\" (click)=\"editStudent()\">\r\n        <i class=\"fa fa-pencil-square-o\"></i>\r\n      </button>\r\n      <button class=\"btn-menu text-danger\" (click)=\"deleteStudent()\">\r\n        <i class=\"fa fa-trash\"></i>\r\n      </button>\r\n    </div>\r\n    <div *ngIf=\"!isSelected\" class=\"col-md-6 bg-white text-right\"\r\n      style=\"display: flex;align-items: center;justify-content: flex-end;\">\r\n      <img [class]=\"classClick\" (click)=\"renderDataStudent()\"\r\n        src=\"assets/img/icons/MovetoRight.png\" alt=\"Chọn\" style=\"height: 31px;cursor: pointer;margin-top: -1px;\">\r\n      <!-- <dx-button (click)=\"renderDataStudent()\" [disabled]=\"!isRender\" type=\"default\" text=\"Chọn\">\r\n          <i [class]=\"_translate.ICONS.moviewHand\"></i>\r\n      </dx-button> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"row pt-1 pb-1\">\r\n    <div class=\"row gr-g-dropdown\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"label\">Lớp</div>\r\n      </div>\r\n      <div class=\"col-md-8 gr-dropdown\">\r\n        <dx-drop-down-box [(value)]=\"valueFilterClass\" valueExpr=\"code\" displayExpr=\"name\" placeholder=\"Select...\" [dataSource]=\"dataClass\">\r\n          <div *dxTemplate=\"let data of 'content'\">\r\n            <dx-tree-view [dataSource]=\"dataClass\" keyExpr=\"code\" selectionMode=\"multiple\"\r\n              showCheckBoxesMode=\"selectAll\" displayExpr=\"name\" (onSelectionChanged)=\"getListClass($event)\">\r\n            </dx-tree-view>\r\n          </div>\r\n        </dx-drop-down-box>\r\n      </div>\r\n    </div>\r\n    <!-- <app-input-dropdown-checkbox [listItem]=\"dataClass\" (shareCheckedList)=\"getListClass($event)\">\r\n      </app-input-dropdown-checkbox> -->\r\n  </div>\r\n  <div class=\"row pt-1 pb-1\">\r\n    <div class=\"row gr-g-dropdown\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"label\">TLMG</div>\r\n      </div>\r\n      <div class=\"col-md-8 gr-dropdown\">\r\n        <dx-drop-down-box [(value)]=\"valueFilterTLMG\" valueExpr=\"code\" displayExpr=\"name\" placeholder=\"Select...\" [dataSource]=\"dataTLMG\">\r\n          <div *dxTemplate=\"let data of 'content'\">\r\n            <dx-tree-view [dataSource]=\"dataTLMG\" keyExpr=\"code\" selectionMode=\"multiple\"\r\n              showCheckBoxesMode=\"selectAll\" displayExpr=\"name\" (onSelectionChanged)=\"getListTLMG($event)\">\r\n            </dx-tree-view>\r\n          </div>\r\n        </dx-drop-down-box>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"label col-md-3 style-text-droplist\">TLMG</div>\r\n    <div class=\"valueProcess col-md-9 pl-lg-0\">\r\n      <app-input-dropdown-checkbox [listItem]=\"dataTLMG\" (shareCheckedList)=\"getListTLMG($event)\">\r\n      </app-input-dropdown-checkbox>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"row pt-1 pb-1\">\r\n    <div class=\"label col-md-3 style-text-droplist\">\r\n      <!-- <input *ngIf=\"hideD\" type=\"checkbox\" [(ngModel)]=\"isCheckedAll\" (change)=\"getSelectedAll($event)\"\r\n        class=\"regular-checkbox mt-1\" /> -->\r\n    </div>\r\n    <div class=\"valueProcess col-md-9 pl-lg-0\">\r\n      <div style=\"display: inline-flex\" class=\"w-100\">\r\n        <input type=\"text\" [(ngModel)]=\"keySearch\" (ngModelChange)=\"keyWordChange($event)\" name=\"keySearch\"\r\n          class=\"w-100 selectAllSearch\" placeholder=\"Nhập mã HS - SV, tên HS - SV\"\r\n          (keydown.enter)=\"$event.preventDefault()\" (keydown.enter)=\"searchKeyWord()\">\r\n        <div class=\"\">\r\n          <button class=\"btn-search\" (click)=\"searchKeyWord()\">\r\n            <i class=\"fa fa-search\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <dx-data-grid id=\"gridContainerStudent\" [dataSource]=\"arrClass\" [showRowLines]=\"true\"\r\n        (onCellClick)=\"onCellClickClass($event)\" [showColumnHeaders]=\"false\" [showBorders]=\"true\">\r\n        <dxo-master-detail [enabled]=\"true\" template=\"masterDetail\"></dxo-master-detail>\r\n        <dxo-sorting mode=\"single\"></dxo-sorting>\r\n        <!-- <dxo-filter-row [visible]=\"true\"></dxo-filter-row> -->\r\n        <!-- <dxo-selection mode=\"multiple\"></dxo-selection> -->\r\n        <dxi-column cellTemplate=\"displaybatch\" sortOrder=\"asc\" dataField=\"code\" caption=\"Mã đợt xuất\"></dxi-column>\r\n        <div *dxTemplate=\"let d of 'displaybatch'\">\r\n          <div>\r\n            <span>{{ d.data.code }}</span>\r\n          </div>\r\n        </div>\r\n        <div *dxTemplate=\"let masterDetailItem of 'masterDetail'\">\r\n\r\n          <dx-data-grid id=\"gridContainerVat\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n            [showBorders]=\"true\" [showRowLines]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\"\r\n            [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" [showColumnHeaders]=\"true\">\r\n            <!-- <dxo-scrolling mode=\"virtual\"></dxo-scrolling> -->\r\n            <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n            </dxo-selection>\r\n            <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n            <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"vat\"></dxo-state-storing> -->\r\n            <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n            <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n            <dxo-selection mode=\"multiple\"></dxo-selection>\r\n            <dxi-column cellTemplate=\"displayStudent\" dataField=\"name\" caption=\"Họ và tên\"></dxi-column>\r\n            <div *dxTemplate=\"let d of 'displayStudent'\">\r\n              <div>\r\n                <span>{{ d.data.name }}({{ d.data.code }})</span>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n            </dxo-remote-operations>  -->\r\n            <dxo-paging [pageSize]=\"100\"></dxo-paging>\r\n            <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[100, 150, 200]\" [showNavigationButtons]=\"true\"\r\n              [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n            </dxo-pager>\r\n          </dx-data-grid>\r\n        </div>\r\n        <dxo-paging [pageSize]=\"50\"></dxo-paging>\r\n        <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[50, 100, 150]\" [showNavigationButtons]=\"true\"\r\n          [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n        </dxo-pager>\r\n      </dx-data-grid>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/list-student/list-student.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/list-student/list-student.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".style-text-droplist{line-height:24px;text-align:right}.style-input-checkbox{line-height:42px}.btn-menu{background:transparent;border:none;outline:none;line-height:33px;font-size:21px}.btn-search{font-size:17px;outline:none;background-color:#337ab7;color:#fff;border:none;padding:3px 7px}.regular-checkbox{outline:none;-webkit-appearance:none;background-color:#fafafa;border:1px solid #cacece;padding:8px;border-radius:3px;display:inline-block;position:relative}.regular-checkbox-item{outline:none;-webkit-appearance:none;background-color:#fafafa;border:1px solid #cacece;padding:6px;border-radius:3px;display:inline-block;position:relative}.regular-checkbox:checked{background-color:#f8fcff;border:1px solid #adb8c0;color:#99a1a7}.regular-checkbox-item:checked{background-color:#f8fcff;border:1px solid #adb8c0;color:#99a1a7}.regular-checkbox:checked:after{content:'\\2714';font-size:18px;position:absolute;left:2px;bottom:0;color:#0b8ae8}.regular-checkbox-item:checked:after{content:'\\2714';font-size:13px;position:absolute;left:2px;bottom:0;color:#0b8ae8}ul,#myUL{list-style-type:none}.animaltion{position:relative;-webkit-animation-name:mymove;animation-name:mymove;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:6;animation-iteration-count:6}@-webkit-keyframes mymove{from{opacity:0}to{top:1}}@keyframes mymove{from{opacity:0}to{top:1}}#myUL{margin:0;padding:0}.caret{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.caret::before{content:\"\\25B6\";color:black;display:inline-block;margin-right:6px}.caret-down::before{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.text-class{font-weight:600;color:#676161;font-size:15px}.selectAllSearch{height:26px;padding:0 3px;outline:none}.label-student{font-size:14px;font-weight:600;text-transform:uppercase;color:#0e76bc}.list-student{padding:10px;border:1px solid #ddd;max-height:390px;overflow:auto}.checkbox-item{padding:6px !important}#gridContainerStudent{height:397px}.gr-g-dropdown{display:flex !important;flex-direction:row;flex-wrap:nowrap;align-items:center;margin:0;width:100%}.gr-g-dropdown .label{float:right}.gr-g-dropdown .gr-dropdown{padding-right:0px !important;padding-left:0px !important;margin-right:0px !important}\n"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/list-student/list-student.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/list-student/list-student.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ListStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStudentComponent", function() { return ListStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_student_invoice_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/student-invoice/shared */ "./src/app/modules/student-invoice/shared/index.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _shared_components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/add-student/add-student.component */ "./src/app/shared/components/add-student/add-student.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
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









var ListStudentComponent = /** @class */ (function () {
    function ListStudentComponent(authService, translate, studentService, modalService) {
        this.authService = authService;
        this.translate = translate;
        this.studentService = studentService;
        this.modalService = modalService;
        this.studentGenerated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.classList = [];
        this.arrClass = [];
        this.dataSource = [];
        this.isSelected = false;
        this.classStudentList = [];
        this.studentListAll = [];
        this.dataClass = [];
        this.dataTLMG = [];
        this.isFillter = false;
        this.valueFilterClass = [];
        this.listStudentClass = {};
        this.valueFilterTLMG = [];
        this.isRender = false; //có thể bỏ
        this.hideD = false;
        this.clickCurent = '';
        this.isCheckedAll = false; //có thể bỏ
        this.selectedItems = [];
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    Object.defineProperty(ListStudentComponent.prototype, "variableStudent", {
        set: function (value) {
            if (Array.isArray(value) && value.length) {
                this.arrClass = value.sort(this.sortArr);
                this.setDataListStudentandClass(this.arrClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListStudentComponent.prototype, "ttDaXuatHoaDon", {
        set: function (value) {
            this.isSelected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListStudentComponent.prototype, "variableTLMG", {
        set: function (value) {
            if (Array.isArray(value) && value.length) {
                this.dataTLMG = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ListStudentComponent.prototype.ngOnInit = function () {
        this.dm = this.authService.getDMLocal();
    };
    ListStudentComponent.prototype.setDataListStudentandClass = function (dataStudent) {
        // list class student
        this.classStudentList = this.returnAllStudentinStudentFillter(dataStudent);
        // list class
        this.dataClass = dataStudent.reduce(function (previousValue, currentValue) {
            if (checkItemDuplicate(currentValue.code)) {
                return previousValue;
            }
            else {
                return previousValue.concat({
                    name: currentValue.name,
                    code: currentValue.code,
                    checked: false
                });
            }
            function checkItemDuplicate(item) {
                return previousValue.some(function (result) {
                    return result.code === item;
                });
            }
        }, []);
        // this.countCheckedStudent(this.studentList);
    };
    ListStudentComponent.prototype.returnAllStudentinStudentFillter = function (dataArrOrigin) {
        return dataArrOrigin.reduce(function (previousValue, currentValue) {
            if (checkItemDuplicate(currentValue.code)) {
                return previousValue;
            }
            else {
                return previousValue.concat({
                    id: currentValue.id,
                    name: currentValue.name,
                    code: currentValue.code,
                    checked: false,
                    isShow: false,
                    childrenList: []
                });
            }
            function checkItemDuplicate(item) {
                return previousValue.some(function (result) {
                    return result.code === item;
                });
            }
        }, []);
    };
    ListStudentComponent.prototype.returnStudentSearch = function (dataStudent) {
        var dataArr = dataStudent.reduce(function (previousValue, currentValue) {
            if (checkItemDuplicate(currentValue.class_code)) {
                return previousValue;
            }
            else {
                return previousValue.concat({
                    name: currentValue.class_name,
                    code: currentValue.class_code,
                    checked: false,
                    isShow: true,
                    childrenList: []
                });
            }
            function checkItemDuplicate(item) {
                return previousValue.some(function (result) {
                    return result.code === item;
                });
            }
        }, []);
        dataStudent.forEach(function (item) {
            dataArr.forEach(function (itemClassList) {
                if (item.class_code === itemClassList.code) {
                    itemClassList['checked'] = false;
                    itemClassList.childrenList.push(item);
                }
            });
        });
        return dataArr;
    };
    // event emit ra khi chọn lớp
    // filter student to Class
    ListStudentComponent.prototype.getListClass = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var nodes, nodes_temp;
            return __generator(this, function (_a) {
                nodes = $event.component.getNodes();
                nodes_temp = nodes.filter(function (node) { return node.selected == true; });
                this.valueFilterClass = lodash__WEBPACK_IMPORTED_MODULE_8__["map"](nodes_temp, 'key');
                this.getClassCode();
                return [2 /*return*/];
            });
        });
    };
    // // filter student to TLMG
    ListStudentComponent.prototype.getListTLMG = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var nodes, nodes_temp;
            return __generator(this, function (_a) {
                nodes = $event.component.getNodes();
                nodes_temp = nodes.filter(function (node) { return node.selected == true; });
                this.valueFilterTLMG = lodash__WEBPACK_IMPORTED_MODULE_8__["map"](nodes_temp, 'key');
                return [2 /*return*/];
            });
        });
    };
    ListStudentComponent.prototype.isShowList = function ($event, code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isShow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isFillter) return [3 /*break*/, 4];
                        if (!(this.checkChildrenClass(code) > 0)) return [3 /*break*/, 1];
                        this.classStudentList.map(function (item) {
                            if (code === item.code) {
                                return item.isShow = !item.isShow;
                            }
                        });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.getStudentToClass(code).then(function (value) {
                            if (value.status === 'success' && value.data.meta.total > 0) {
                                _this.classStudentList.map(function (item) {
                                    if (code === item.code) {
                                        return item.childrenList = value.data.students;
                                    }
                                });
                                return true;
                            }
                            else {
                                return false;
                            }
                        })];
                    case 2:
                        isShow = _a.sent();
                        if (isShow) {
                            this.classStudentList.map(function (item) {
                                if (code === item.code) {
                                    return item.isShow = true;
                                }
                            });
                        }
                        else {
                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.not_find_students, 'error');
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        if (Array.isArray(this.studentListAll) && this.studentListAll.length) {
                            this.studentListAll.map(function (item) {
                                if (code === item.code) {
                                    return item.isShow = !item.isShow;
                                }
                            });
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ListStudentComponent.prototype.checkChildrenClass = function (code) {
        var count = this.classStudentList.filter(function (item) {
            if (code === item.code) {
                return item.childrenList;
            }
        });
        return count[0].childrenList.length;
    };
    ListStudentComponent.prototype.getStudentToClass = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.valueFilterClass = [];
                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        return [4 /*yield*/, this.studentService.getStudentToClass(code, [], this.valueFilterTLMG, this.keySearch)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListStudentComponent.prototype.getSelectedAllValue = function (value, code) {
        if (!this.isFillter) {
            this.classStudentList.forEach(function (item) {
                if (item.code === code) {
                    item['checked'] = true;
                    if (item.childrenList.length && Array.isArray(item.childrenList)) {
                        item.childrenList.map(function (itemChecked) { return itemChecked.checked = value; });
                    }
                }
            });
            this.setDataStudentListToString();
            // this.countCheckedStudent(this.classStudentList);
        }
        else {
            this.studentListAll.forEach(function (item) {
                if (item.code === code) {
                    item['checked'] = true;
                    if (item.childrenList.length && Array.isArray(item.childrenList)) {
                        item.childrenList.map(function (itemChecked) { return itemChecked.checked = value; });
                    }
                }
            });
            // this.countCheckedStudent(this.studentListAll);
        }
    };
    ListStudentComponent.prototype.getSelectedItem = function (isChecked, name, idClass) {
        if (isChecked) {
            if (!this.isFillter) {
                this.classStudentList = this.handleSelectedItem(this.classStudentList, isChecked, name, idClass);
                this.setDataStudentListToString();
                // this.countCheckedStudent(this.classStudentList);
            }
            else {
                this.studentListAll = this.handleSelectedItem(this.studentListAll, isChecked, name, idClass);
                // this.countCheckedStudent(this.studentListAll);
            }
        }
        else {
            if (!this.isFillter) {
                this.classStudentList = this.handleSelectedItem(this.classStudentList, isChecked, name, idClass);
                this.setDataStudentListToString();
                // this.countCheckedStudent(this.classStudentList);
            }
            else {
                this.studentListAll = this.handleSelectedItem(this.studentListAll, isChecked, name, idClass);
                // this.countCheckedStudent(this.studentListAll);
            }
        }
    };
    ListStudentComponent.prototype.handleSelectedItem = function (dataClass, isChecked, codeStudent, idClass) {
        var i = 0;
        if (isChecked) {
            dataClass.map(function (classList) {
                if (classList.code === idClass && classList.childrenList.length && Array.isArray(classList.childrenList)) {
                    classList.childrenList.map(function (item) {
                        if (item.code === codeStudent) {
                            return item.checked = true;
                        }
                    });
                    classList.childrenList.forEach(function (item) {
                        if (item.checked) {
                            i++;
                        }
                    });
                }
            });
            dataClass.map(function (classList) {
                if (classList.code === idClass && Array.isArray(classList.childrenList) && classList.childrenList.length === i) {
                    return classList.checked = true;
                }
            });
            return dataClass;
        }
        else {
            dataClass.map(function (classList) {
                if (classList.code === idClass && classList.childrenList.length && Array.isArray(classList.childrenList)) {
                    classList.childrenList.map(function (item) {
                        if (item.code === codeStudent) {
                            return item.checked = false;
                        }
                    });
                    classList.childrenList.forEach(function (item) {
                        if (item.checked) {
                            i++;
                        }
                    });
                }
            });
            dataClass.map(function (classList) {
                if (classList.code === idClass && Array.isArray(classList.childrenList) && classList.childrenList.length > i) {
                    return classList.checked = false;
                }
            });
            return dataClass;
        }
    };
    // getSelectedAll($event) {
    //   if (this.isFillter) {
    //     this.studentListAll.forEach(item => {
    //       item.checked = $event.target.checked;
    //       if (item.childrenList.length && Array.isArray(item.childrenList)) {
    //         item.childrenList.map(itemChecked => itemChecked.checked = $event.target.checked);
    //       }
    //     });
    //     // this.countCheckedStudent(this.studentListAll);
    //   } else {
    //     this.classStudentList.forEach(item => {
    //       item.checked = $event.target.checked;
    //       if (item.childrenList.length && Array.isArray(item.childrenList)) {
    //         item.childrenList.map(itemChecked => itemChecked.checked = $event.target.checked);
    //       }
    //     });
    //     // this.countCheckedStudent(this.classStudentList);
    //     this.setDataStudentListToString();
    //   }
    // }
    ListStudentComponent.prototype.setDataStudentListToString = function () {
        this.dataStudentToString = JSON.stringify(this.classStudentList);
    };
    ListStudentComponent.prototype.parseDataStudentListToArray = function () {
        this.classStudentList = JSON.parse(this.dataStudentToString);
        // this.countCheckedStudent(this.classStudentList);
        // this.returnisCheckedAll();
    };
    ListStudentComponent.prototype.sortArr = function (previousValue, currentValue) {
        var bandA = previousValue.code.toUpperCase();
        var bandB = currentValue.code.toUpperCase();
        var comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        }
        else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    };
    ListStudentComponent.prototype.renderDataStudent = function () {
        this.studentGenerated.emit(this.selectedItems);
    };
    // returnDataStudentChecked() {
    //   const dataStudent = [];
    //   if (!this.isFillter) {
    //     this.classStudentList.forEach(itemClass => {
    //       if (Array.isArray(itemClass.childrenList) && itemClass.childrenList.length) {
    //         itemClass.childrenList.forEach(item => {
    //           if (item.checked) {
    //             dataStudent.push(item);
    //           }
    //         });
    //       }
    //     });
    //   } else {
    //     this.studentListAll.forEach(itemClass => {
    //       if (Array.isArray(itemClass.childrenList) && itemClass.childrenList.length) {
    //         itemClass.childrenList.forEach(item => {
    //           if (item.checked) {
    //             dataStudent.push(item);
    //           }
    //         });
    //       }
    //     });
    //   }
    //   return dataStudent;
    // }
    // countCheckedStudent(dataChecked) {
    //   let i = 0;
    //   dataChecked.forEach(itemClass => {
    //     if (Array.isArray(itemClass.childrenList) && itemClass.childrenList.length) {
    //       itemClass.childrenList.forEach(item => {
    //         if (item.checked) {
    //           i++;
    //         }
    //       });
    //     }
    //   });
    //   this.isRender = i > 0;
    // }
    // returnisCheckedAll() {
    //   if (Array.isArray(this.classStudentList) && this.classStudentList.length) {
    //     let i = 0;
    //     this.classStudentList.forEach(itemClass => {
    //       if (!itemClass.checked) {
    //         i++;
    //       }
    //     });
    //     this.isCheckedAll = i === 0;
    //   }
    // }
    ListStudentComponent.prototype.addStudent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var dataCount, initialState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataCount = 1;
                        return [4 /*yield*/, this.studentService.getCountStudent().then(function (result) {
                                if (result.status === 'success') {
                                    dataCount = result.data.meta.total + 1;
                                }
                            })];
                    case 1:
                        _a.sent();
                        if (this.productGrip) {
                            this.productGrip.instance.collapseAll(-1);
                        }
                        initialState = {
                            // totalCount: this.dataGrid.instance.totalCount(),
                            classCodes: this.arrClass,
                            student_reduce_rate_codes: this.dataTLMG,
                            totalCount: dataCount,
                            classCodeListTypeId: this.getIdDmLop(),
                        };
                        this.bsModalRef = this.modalService.show(_shared_components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_5__["AddStudentComponent"], {
                            class: 'modal-lg full-modal',
                            initialState: initialState,
                            backdrop: 'static',
                            keyboard: false,
                        });
                        this.modalService.onHide.subscribe(function () {
                            _this.studentService.getAllClass()
                                .then(function (result) {
                                _this.dm.DM_LOP_HOC.data = result.data.DM_LOP_HOC;
                                localStorage.setItem('DANH_MUC', JSON.stringify(_this.dm));
                                _this.dataClass = lodash__WEBPACK_IMPORTED_MODULE_8__["map"](result.data.DM_LOP_HOC, function (item) { return ({
                                    code: item.code,
                                    name: item.name,
                                    checked: false
                                }); });
                                _this.dataClass = _this.dataClass.sort(_this.sortArr);
                                _this.arrClass = _this.arrClass.sort(_this.sortArr);
                            });
                            if (_this.bsModalRef.content.successSaveItem) {
                                if (_this.productGrip) {
                                    _this.productGrip.instance.collapseAll(-1);
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ListStudentComponent.prototype.editStudent = function () {
        var _this = this;
        if (this.selectedItems.length === 1) {
            var initialState = {
                student: this.selectedItems[0],
                classCodes: this.arrClass,
                student_reduce_rate_codes: this.dataTLMG,
                classCodeListTypeId: this.getIdDmLop(),
            };
            this.bsModalRef = this.modalService.show(_shared_components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_5__["AddStudentComponent"], {
                class: 'modal-lg full-modal',
                initialState: initialState,
                backdrop: 'static',
                keyboard: false,
            });
            this.modalService.onHide.subscribe(function () {
                _this.studentService.getAllClass()
                    .then(function (result) {
                    _this.dm.DM_LOP_HOC.data = result.data.DM_LOP_HOC;
                    localStorage.setItem('DANH_MUC', JSON.stringify(_this.dm));
                    _this.dataClass = lodash__WEBPACK_IMPORTED_MODULE_8__["map"](result.data.DM_LOP_HOC, function (item) { return ({
                        code: item.code,
                        name: item.name,
                        checked: false
                    }); });
                });
                if (_this.bsModalRef.content.successSaveItem) {
                    if (_this.productGrip) {
                        _this.productGrip.instance.collapseAll(-1);
                    }
                }
            });
        }
        else if (this.selectedItems.length > 1) {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.only_seclected_student_to_edit, 'error');
            return;
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_selected_student, 'error');
            return;
        }
    };
    ListStudentComponent.prototype.deleteStudent = function () {
        var _this = this;
        if (this.selectedItems.length > 0) {
            var ids_1 = this.selectedItems.map(function (obj) { return obj.id; }).join(',');
            var result = _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
            if (result) {
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        _this.studentService.deleteStudent(ids_1).subscribe(function (response) {
                            if (response.status === 'success') {
                                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                if (_this.productGrip) {
                                    _this.productGrip.instance.collapseAll(-1);
                                }
                                // if (this.isFillter) {
                                //   this.isFillter = false;
                                //   this.setDataListStudentandClass(this.arrClass);
                                // } else {
                                //   this.setDataListStudentandClass(this.arrClass);
                                // }
                            }
                            else {
                                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                            }
                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                        });
                    }
                });
            }
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_selected_student, 'error');
            return;
        }
    };
    // reloadStudent() {
    //   if (Array.isArray(this.arrClass) && this.arrClass.length) {
    //     this.isFillter = false;
    //     this.setDataListStudentandClass(this.arrClass);
    //   }
    // }
    ListStudentComponent.prototype.searchKeyWord = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.studentService.getClassBySearch(null, this.valueFilterClass, this.valueFilterTLMG, this.keySearch).then(function (result) {
                            _this.arrClass = [];
                            if (result.status === 'success' && result.data.meta.total > 0) {
                                if (result.data.students.length > 0) {
                                    var temp_filterClass_1 = lodash__WEBPACK_IMPORTED_MODULE_8__["uniq"](lodash__WEBPACK_IMPORTED_MODULE_8__["map"](result.data.students, 'class_code'));
                                    _this.arrClass = lodash__WEBPACK_IMPORTED_MODULE_8__["map"](lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](_this.dataClass, function (item) { return temp_filterClass_1.includes(item.code); }), function (_a) {
                                        var code = _a.code, name = _a.name;
                                        return ({ code: code, name: name });
                                    });
                                    if (_this.productGrip) {
                                        _this.productGrip.instance.collapseAll(-1);
                                        _this.productGrip.instance.expandRow(_this.arrClass[0]);
                                        _this.loadListDataItem(_this.arrClass[0].code);
                                    }
                                }
                                return true;
                            }
                            else {
                                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.not_find_students, 'error');
                                return false;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListStudentComponent.prototype.keyWordChange = function ($event) {
        // if ($event === '') {
        //   this.isFillter = false;
        //   this.parseDataStudentListToArray();
        // } else {
        //   this.setDataStudentListToString();
        // }
    };
    ListStudentComponent.prototype.onCellClickClass = function (e) {
        if (e.rowType == "data") {
            e.component.collapseAll(-1);
            if (!e.row.isExpanded) {
                e.component.expandRow(e.key);
                this.loadListDataItem(e.row.data.code);
            }
        }
    };
    ListStudentComponent.prototype.loadListDataItem = function (classCode) {
        var _this = this;
        this.dataSource = [];
        this.getStudentToClass(classCode).then(function (value) {
            if (value.status === 'success' && value.data.meta.total > 0) {
                _this.dataSource = value.data.students;
                return true;
            }
            else {
                return false;
            }
        });
    };
    ListStudentComponent.prototype.selectionChanged = function (data) {
        if (this.selectedItems.length == 0)
            this.classClick = 'animaltion';
        this.selectedItems = data.selectedRowsData;
        // if (this.selectedItems.length > 0) {
        //   this.isRender = true;
        // }
        // else
        //   this.isRender = false;
    };
    ListStudentComponent.prototype.getClassCode = function () {
        var _this = this;
        if (this.valueFilterClass.length > 0) {
            this.arrClass = lodash__WEBPACK_IMPORTED_MODULE_8__["map"](lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](this.dataClass, function (item) { return _this.valueFilterClass.includes(item.code); }), function (_a) {
                var code = _a.code, name = _a.name;
                return ({ code: code, name: name });
            });
        }
        else {
            this.arrClass = lodash__WEBPACK_IMPORTED_MODULE_8__["map"](this.dataClass, function (_a) {
                var code = _a.code, name = _a.name;
                return ({ code: code, name: name });
            });
        }
    };
    ListStudentComponent.prototype.groupBy = function (list, keyGetter) {
        var map = new Map();
        list.forEach(function (item) {
            var key = keyGetter(item);
            var collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            }
            else {
                collection.push(item);
            }
        });
        return map;
    };
    ListStudentComponent.prototype.getIdDmLop = function () {
        var classCodeListTypeId = '';
        var lstType = this.authService.getListtypes();
        var dm_lop = lstType.find(function (item) { return item.code == "DM_LOP_HOC"; });
        if (dm_lop)
            classCodeListTypeId = dm_lop.id;
        return classCodeListTypeId;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ListStudentComponent.prototype, "variableStudent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ListStudentComponent.prototype, "ttDaXuatHoaDon", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ListStudentComponent.prototype, "variableTLMG", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('studentGenerated'),
        __metadata("design:type", Object)
    ], ListStudentComponent.prototype, "studentGenerated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListStudentComponent.prototype, "keySearch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxDataGridComponent"])
    ], ListStudentComponent.prototype, "productGrip", void 0);
    ListStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-student',
            template: __webpack_require__(/*! ./list-student.component.html */ "./src/app/modules/student-invoice/components/list-student/list-student.component.html"),
            styles: [__webpack_require__(/*! ./list-student.component.scss */ "./src/app/modules/student-invoice/components/list-student/list-student.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _modules_student_invoice_shared__WEBPACK_IMPORTED_MODULE_3__["StudentInvoiceService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]])
    ], ListStudentComponent);
    return ListStudentComponent;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/components/product-grip/product-grip.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/product-grip/product-grip.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Phần không tự tính giá trị, nhập mẫu bảng kê -->\r\n<div class=\"row support-invoice\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"pull-left\">\r\n      <div style=\"float: left;width:  30%; padding-top: 4px\">{{ _translate.CONTROLL.BUTTON.add_row }}</div>\r\n      <div style=\"float: left; width: 30%\">\r\n        <dx-number-box #numberBox [max]=\"100\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"rowData\"></dx-number-box>\r\n      </div>\r\n      <div>\r\n        <dx-button style=\"height: 27px\" icon=\"fa fa-plus-circle\" type=\"default\" text=\"\" (onClick)=\"addRow()\">\r\n        </dx-button>\r\n      </div>\r\n    </div>\r\n    <div class=\"pull-right\">\r\n      <dx-check-box *ngIf=\"configs.system_parameter.view_sale_by_phone\" id=\"auto-input\"\r\n        text=\"{{ _translate.CONTROLL.LABEL.sale_by_phone }}\" [(value)]=\"formDataInInvoice.sale_by_phone\"></dx-check-box>\r\n      <dx-check-box class=\"auto-input\" text=\"{{ _translate.CONTROLL.LABEL.no_calculation }}\"\r\n        [(value)]=\"formDataInInvoice.auto_value\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      <dx-check-box *ngIf=\"isHdGTGT\" class=\"auto-input\" text=\"{{ _translate.CONTROLL.LABEL.auto_value_price }}\"\r\n        [(value)]=\"formDataInInvoice.auto_value_price\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      <dx-menu [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\" submenuDirection=\"auto\"\r\n        *ngIf=\"showmenu\" (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n      </dx-menu>\r\n      <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx\" (change)=\"onFileBangKeChange($event)\" multiple=\"false\"\r\n        style=\"display: none;\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n  [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{ _translate.CONFIRM.import_type }}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"thayTheToanBo()\" text=\"{{ _translate.CONTROLL.BUTTON.replace_all }}\" type=\"default\">\r\n      </dx-button>\r\n      <dx-button (click)=\"themTiep()\" text=\"{{ _translate.CONTROLL.BUTTON.add_more }}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{ _translate.CONTROLL.BUTTON.cancel }}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n\r\n<!-- phần table hiển thị -->\r\n<div class=\"row invoice-table\">\r\n  <div class=\"col-md-12\">\r\n    <dx-data-grid id=\"gridInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n      [allowColumnResizing]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n      (onKeyDown)=\"onGripKeyDown($event)\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n      (onEditorPrepared)=\"onEditorPrepared($event)\" (onCellClick)=\"onCellClick($event)\"\r\n      (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\" (onContentReady)=\"onContentReady($event)\">\r\n      <!-- [wordWrapEnabled]=\"true\" (onEditorPrepared)=\"onEditorPrepared($event)\" -->\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"!ttDaXuatHoaDon\"></dxo-editing>\r\n      <dxo-sorting mode=\"false\"></dxo-sorting>\r\n      <dxi-column cellTemplate=\"deleteColumn\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.delete }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.delete_column }}\" [allowEditing]=\"false\" alignment=\"center\" [fixed]=\"true\"\r\n        fixedPosition=\"left\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"view_order\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.view_order }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.stt }}\" alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Mã khoản thu -->\r\n      <dxi-column cssClass=\"overlay-content123\" dataField=\"product_code\"\r\n        caption=\"{{ _translate.GRID.REVENUE.revenue_code }}\" minWidth=\"{{ _translate.GRID_WIDTH.ma_hang }}\"\r\n        alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\" [editorOptions]=\"{showClearButton: true}\">\r\n        <dxo-lookup *ngIf=\"reloadSelectProduct\" [dataSource]=\"select.productsView\" displayExpr=\"mhvth\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <!-- Tên khoản thu -->\r\n      <dxi-column dataField=\"product_name\" minWidth=\"{{ _translate.GRID_WIDTH.ten_hang }}\"\r\n        caption=\"{{ _translate.GRID.REVENUE.revenue_name }}\" alignment=\"left\" [fixed]=\"true\" fixedPosition=\"left\">\r\n      </dxi-column>\r\n      <!-- Diễn giải -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_promotion\" cellTemplate=\"dien_giai\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.explain }}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Tháng thu HP -->\r\n      <dxi-column dataField=\"school_fee_month\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.school_fee_month }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.thang_thu_hp }}\" [editorOptions]=\"{disabled: true}\" alignment=\"center\"\r\n        [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Học kỳ -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_semester\" dataField=\"semester\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.hoc_ky }}\" caption=\"{{  _translate.GRID.INVOICE_DETAILS.semester }}\"\r\n        alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Đơn vị tính -->\r\n      <dxi-column dataField=\"unit_code\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.unit_code }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.unit_code }}\" alignment=\"center\" [editorOptions]=\"lookupColumnOptions\">\r\n        <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\" onValueChanged=\"b($event)\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <!-- Số lượng -->\r\n      <dxi-column dataField=\"quantity\" headerCellTemplate=\"quantityHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\" [editorOptions]=\"{ format: formatter.so_luong,step: '0' }\"\r\n        [format]=\"formatter.so_luong\" dataType=\"number\" alignment=\"center\"></dxi-column>\r\n      <!-- Đơn giá -->\r\n      <dxi-column dataField=\"price\" headerCellTemplate=\"priceHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        [editorOptions]=\"{ format: formatter.don_gia,step: '0' }\" [format]=\"formatter.don_gia\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Thành tiền -->\r\n      <dxi-column dataField=\"amount\" headerCellTemplate=\"amountHeader\" minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\"\r\n        [editorOptions]=\"{ format: formatter.thanh_tien ,step: '0'}\" [format]=\"formatter.thanh_tien\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Vat -->\r\n      <dxi-column cssClass=\"vat-invoices\" *ngIf=\"isHdGTGT\" dataField=\"vat\" headerCellTemplate=\"vatHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.vat }}\" alignment=\"center\"\r\n        [editorOptions]=\"{showClearButton: true ,step: '0'}\">\r\n        <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n      </dxi-column>\r\n      <!-- Tiền thuế -->\r\n      <dxi-column *ngIf=\"isHdGTGT\" dataField=\"amount_vat\" headerCellTemplate=\"amountVatHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tien_thue }}\" [editorOptions]=\"{ format: formatter.tien_thue, step: '0' }\"\r\n        [format]=\"formatter.tien_thue\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n      <!-- Tổng tiền -->\r\n      <dxi-column dataField=\"amount_after_vat\" headerCellTemplate=\"amountAfterVatHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tong_tien_sau_thue }}\"\r\n        [editorOptions]=\"{ format: formatter.tong_tien, step:'0'}\" [format]=\"formatter.tong_tien\" dataType=\"number\"\r\n        alignment=\"right\"></dxi-column>\r\n      <!-- config column header -->\r\n      <div *dxTemplate=\"let d of 'quantityHeader'\">\r\n        <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.quantity }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceHeader'\">\r\n        <p (click)=\"configDecimal('don_gia')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.price }}<img\r\n            src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'dien_giai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_promotion\" [disabled]=\"d.data.is_promotion_new\"\r\n          (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountHeader'\">\r\n        <p (click)=\"configDecimal('thanh_tien')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.amount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'vatHeader'\">\r\n        <p>VAT</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount_vat }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountAfterVatHeader'\">\r\n        <p (click)=\"configDecimal('tong_tien')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.total_money }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <!-- config column -->\r\n      <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n        <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'product_code'\">\r\n        <dxi-item editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.productsView, displayExpr: 'name', valueExpr: 'code'}\">\r\n        </dxi-item>\r\n      </div>\r\n      <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    </dx-data-grid>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/product-grip/product-grip.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/product-grip/product-grip.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-row i{color:#0E77BB;font-size:18px}.support-invoice{margin-top:20px;margin-bottom:10px}.support-invoice .support-link{padding:6px 15px;border:1px solid #007bff;text-decoration:none}.support-invoice .support-link.mgr-15{margin-right:8px}.support-invoice .support-link img,.support-invoice .support-link i{margin-right:15px;margin-top:-2px}.support-invoice .auto-input{margin-right:75px !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}::ng-deep .styleItemToList{color:dodgerblue}.button-dropdown-extend{display:inline-flex}::ng-deep .vat-invoices .dx-texteditor-buttons-container{display:-ms-inline-grid;display:inline-grid}\n"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/product-grip/product-grip.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/product-grip/product-grip.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductGripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGripComponent", function() { return ProductGripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/data/custom_store */ "./node_modules/devextreme/data/custom_store.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
/* harmony import */ var _shared_components_select_month_select_month_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components/select-month/select-month.component */ "./src/app/shared/components/select-month/select-month.component.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ProductGripComponent = /** @class */ (function () {
    function ProductGripComponent(route, router, modalService, vatService, productsService, authService, translate, invoiceService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.vatService = vatService;
        this.productsService = productsService;
        this.authService = authService;
        this.translate = translate;
        this.invoiceService = invoiceService;
        this.arrProducts = [];
        this.onCheckDuplicate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = {};
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_8__["InvoiceModel"](1);
        this.showPopup = false; // Popup
        this.dataExcelFile = null;
        this.dataExcelFileInfo = null;
        this.ttDaXuatHoaDon = false;
        this.amount_after_vat = 0;
        this.reloadSelectProduct = true;
        this.extras = [];
        this.rowData = 1;
        this.showmenu = false;
        this.selectMonth = false;
        // Thêm giá trị mới vào đơn vị tính
        this.lookupColumnOptions = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                var _this = this;
                //
                //
                var newItem = {};
                newItem.code = _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._convertToViKdau(args.text);
                var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === newItem.code; })[0];
                if (oDuplicate)
                    newItem.code = newItem.code + _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].addtionalUnitCode();
                newItem.name = args.text;
                this.select.unit_codes.unshift(newItem);
                setTimeout(function () {
                    _this.dataGrid.instance.columnOption('unit_code', 'lookup', {
                        dataSource: _this.select.unit_codes,
                        displayExpr: 'name',
                        valueExpr: 'code'
                    });
                });
                return newItem;
            }.bind(this)
        };
        this.onContentReady = function (e) {
            var arrFooter = [
                { name: _this._translate.GRID.INVOICE_DETAILS.total_money, class: 'table-footer-1' },
                { name: _this._translate.GRID.INVOICE_DETAILS.amount_vat, class: 'table-footer-2' },
                { name: _this._translate.GRID.INVOICE_DETAILS.amount, class: 'table-footer-3' },
                { name: _this._translate.GRID.INVOICE_DETAILS.amount_without_discount, class: 'table-footer-4' },
            ];
            var domGrid = document.querySelector('#gridInvoice');
            _this.invoiceService.formatSumColumnGrid(arrFooter, domGrid);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.extras = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.import_from_excel,
                items: [
                    {
                        id: 'LAY_MAU_BANG_KE',
                        name: this._translate.CONTROLL.BUTTON.get_the_sample_file,
                        icon: this._translate.ICONS.download
                    },
                    {
                        id: 'NAP_DU_LIEU_BANG_KE',
                        name: this._translate.CONTROLL.BUTTON.import_data,
                        icon: this._translate.ICONS.excel
                    }
                ]
            }];
    }
    ProductGripComponent.prototype.ngAfterViewInit = function () {
        // let a = moment(new Date()).format('HH:mm:ss.SSS');
    };
    ProductGripComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isHdGTGT) {
            this.formDataInInvoice.amount_vatx = null;
            this.formDataInInvoice.amount_vat5 = null;
            this.formDataInInvoice.amount_vat10 = null;
        }
        this.configs = this.authService.getConfigs();
        var test = this._objTemplateSelect;
        // let a = moment(new Date()).format('HH:mm:ss.SSS');
        this.routeSub = this.route.data.subscribe(function (data) {
            // put data DM for select
            var danh_muc = _this.authService.getDMLocal();
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.select_provisions_on_accounts = danh_muc.DM_DINH_KHOAN ? danh_muc.DM_DINH_KHOAN.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            _this.select.revenue_forms = danh_muc.DM_HINH_THUC_THU ? danh_muc.DM_HINH_THUC_THU.data : null;
            _this.select.countrys = danh_muc.DM_QUOC_GIA ? danh_muc.DM_QUOC_GIA.data : null;
            // Hàng hóa dịch vụ
            var isEdit = false;
            var invoice;
            if (data.init[2] == true)
                isEdit = true;
            if (_this.isTT78) {
                _this.select.products = data.init[0];
                if (isEdit)
                    invoice = data.init[1];
                _this.select.productsView = {
                    store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4___default.a({
                        key: 'code',
                        loadMode: 'raw',
                        load: function (loadOptions) {
                            return _this.select.products;
                        },
                        byKey: function (key) {
                            return data.init[0].filter(function (p) { return p.code === key.toString(); });
                        }
                    }),
                    paginate: true,
                    sort: 'name'
                };
            }
            else {
                _this.select.products = data.init[1];
                if (isEdit)
                    invoice = data.init[3];
                _this.select.productsView = {
                    store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4___default.a({
                        key: 'code',
                        loadMode: 'raw',
                        load: function (loadOptions) {
                            return _this.select.products;
                        },
                        byKey: function (key) {
                            var _data = data.init[1].filter(function (p) { return p.code === key.toString(); });
                            return _data;
                        }
                    }),
                    paginate: true,
                    sort: 'name'
                };
            }
            _this.select.products.forEach(function (item) {
                item.mhvth = item.code + ': ' + item.name;
            });
            _this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    if (item.product_name && item.unit_name) {
                        var obj1 = _this.select.unit_codes.filter(function (p) { return p.name === item.unit_name; })[0];
                        if (!obj1) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(item.unit_code) == "")
                                item.unit_code = _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._convertToViKdau(item.unit_name);
                            var oDuplicate = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                            if (oDuplicate)
                                item.unit_code = item.unit_code + _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].addtionalUnitCode();
                            _this.select.unit_codes.push({ code: item.unit_code, name: item.unit_name });
                        }
                        else {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(item.unit_code) != "") {
                                var oExistUnitCode = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                                if (!oExistUnitCode)
                                    _this.select.unit_codes.push({ code: item.unit_code, name: item.unit_name });
                            }
                        }
                    }
                });
            });
        });
        // Event
        this.createUpdateEvent();
    };
    // khởi tạo sự kiện khi update
    ProductGripComponent.prototype.createUpdateEvent = function () {
        var _this = this;
        setTimeout(function () {
            _this.invoice_products.on('updated', function (key, value) {
                var column = Object.keys(value)[0];
                if (value.product_code !== 'add') {
                    _this.invoice_products.byKey(key).then(function (row) {
                        switch (column) {
                            case 'view_order':
                                _this.view_orderChange();
                                break;
                            case 'product_code':
                                _this.product_codeChange(row);
                                break;
                            case 'product_name':
                                _this.product_nameChange(row);
                                break;
                            case 'unit_code':
                                _this.unit_codeChange(row);
                                break;
                            case 'quantity':
                            case 'price':
                            case 'price_nte':
                            case 'vat':
                            case 'amount':
                            case 'amount_vat':
                            case 'amount_after_vat':
                            case 'amount_discount':
                            case 'discount':
                            case 'amount_without_discount':
                            case 'other_tax':
                            case 'other_charge':
                                _this._tinhGiaTri();
                                break;
                            default:
                                break;
                        }
                    }, function (error) {
                        alert(error);
                    });
                }
                else {
                    _this.invoice_products.remove(key);
                    _this.addRow();
                }
            });
        }, 100);
    };
    ProductGripComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    ProductGripComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            e.rowElement.style.whiteSpace = 'pre-wrap';
            var eles = e.rowElement.getElementsByTagName('td');
            if (!e.isEditing) {
                eles[2].innerHTML = e.data.product_code;
            }
            if (e.data.error) {
                var ele = eles[eles.length - 1];
                ele.style.background = 'red url(\'assets/img/icons/fa-remove.png\') no-repeat 2% center';
                ele.title = e.data.error;
            }
        }
    };
    ProductGripComponent.prototype.onEditorPreparing = function (e) {
        if (e.parentType === 'dataRow') {
            if (e.dataField === 'product_code') {
                e.editorOptions.onOpened = function (arg) {
                    var popupInstance = arg.component._popup;
                    popupInstance.option('width', 400);
                    popupInstance.option('minWidth', 400);
                };
            }
            if (e.dataField === 'product_name' || e.dataField === 'school_fee_month') {
                e.editorName = 'dxTextArea';
            }
            // e.editorOptions.onFocusOut = (args) => {
            //   if (e.dataField === 'unit_code') {
            //     const _obj = this.select.unit_codes.filter(p => p.code === e.row.data.unit_code)[0];
            //     if (_obj) {
            //       e.row.data.unit_name = _obj.name;
            //     } else {
            //       e.row.data.unit_name = '';
            //     }
            //   }
            //   if (e.dataField === 'country_code') {
            //     const _obj = this.select.countrys.filter(p => p.code === e.row.data.country_code)[0];
            //     if (_obj) {
            //       e.row.data.country_name = _obj.name;
            //     } else {
            //       e.row.data.country_name = '';
            //     }
            //   }
            //   this.invoice_products.update(e.row.data.id, e.row.data);
            // };
        }
    };
    ProductGripComponent.prototype.onEditorPrepared = function (e) {
        if ((e.dataField === 'amount_without_discount' || e.dataField === 'discount' || e.dataField === 'amount_discount' || e.dataField === 'quantity' || e.dataField === 'price' || e.dataField === 'amount' || e.dataField === 'amount_vat' || e.dataField === 'amount_after_vat') && e.parentType === 'dataRow') {
            e.editorElement.childNodes[1].firstChild.onwheel = function (evt) {
                e.component.cancelEditData();
            };
            e.editorElement.childNodes[1].firstChild.addEventListener('select', function () {
                this.selectionStart = this.selectionEnd;
            }, false);
        }
    };
    ProductGripComponent.prototype.onContextMenuPreparing = function (e) {
        var _this = this;
        if (e.row.rowType === 'data') {
            e.items = [
                {
                    text: this._translate.CONTROLL.BUTTON.add_goods,
                    onItemClick: function () {
                        _this.addProduct(e.row.data);
                    }
                },
                {
                    text: this._translate.CONTROLL.BUTTON.add_row,
                    onItemClick: function () {
                        _this.addRow();
                    }
                },
                {
                    text: this._translate.CONTROLL.BUTTON.delete_row,
                    onItemClick: function () {
                        _this.deleteRow(e.row.data);
                    }
                },
            ];
        }
    };
    ProductGripComponent.prototype.addProduct = function (row) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        this.productsService.getAllListbyListtypeByCode('DM_NHOM_HANG_HOA,DM_DON_VI_TINH,DM_TY_LE_VAT').subscribe(function (response) {
            var initialState = {
                totalCount: 0,
                groupProducts: response.data['DM_NHOM_HANG_HOA'],
                unitCalculations: _this.select.unit_codes,
                vats: response.data['DM_TY_LE_VAT'],
                groupProductListTypeId: response.data['ids']['DM_NHOM_HANG_HOA'],
                unitCalculationListTypeId: response.data['ids']['DM_DON_VI_TINH'],
                vatListTypeId: response.data['ids']['DM_TY_LE_VAT'],
                wavehourses: [],
                formatter: _this.formatter,
                onSaveProduct: function (data, unitCodes) {
                    _this.select.unit_codes = unitCodes;
                    data.mhvth = data.code + ': ' + data.name;
                    _this.select.products.push(data);
                    _this.reloadSelectProduct = false;
                    setTimeout(function () {
                        _this.reloadSelectProduct = true;
                    }, 50);
                    row.product_code = data.code;
                    row.product_name = data.name;
                    row.group_code = data.group_code;
                    row.unit_code = _this.checkUnitCode(data.unit_code);
                    row.quantity = null;
                    row.price = data.price ? parseFloat(data.price) : data.price;
                    row.amount = data.price ? parseFloat(data.price) : 0;
                    row.vat = data.vat ? data.vat.toString() : null;
                    row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                    row.amount_after_vat = row.amount + row.amount_vat;
                    _this.unit_codeChange(row);
                    _this.invoice_products.update(row.id, row);
                }
            };
            _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_7__["AddComponent"], {
                class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                keyboard: false
            });
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
        });
    };
    ProductGripComponent.prototype.addRow = function () {
        var len, order, orderLast;
        len = this.dataSource.items().length;
        orderLast = this.dataSource.items()[len - 1].order;
        for (var i = 0; i < this.rowData; i++) {
            if (this.dataSource.items().length >= 1) {
                order = ++orderLast;
            }
            else {
                order = 1;
            }
            var data = this.frmData.add_invoice_products_data(order, order);
            this.invoice_products.insert(data);
        }
        this.dataSource.reload();
    };
    ProductGripComponent.prototype.view_orderChange = function () {
        var _this = this;
        var _index = 0;
        if (!this.isTT78) {
            this.dataSource.items().forEach(function (item) {
                if (item.view_order && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    item.view_order = ++_index;
                }
                if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    if (!item.is_money_service) {
                        item.view_order = ++_index;
                    }
                    else {
                        item.view_order = null;
                    }
                }
            });
        }
        else {
            this.dataSource.items().forEach(function (item) {
                if (item.view_order && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    item.view_order = ++_index;
                }
                if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    if (!item.is_money_service) {
                        item.view_order = ++_index;
                    }
                    else {
                        item.view_order = null;
                    }
                }
            });
        }
    };
    // Thay đổi cột mã hàng 
    ProductGripComponent.prototype.product_codeChange = function (row) {
        var _this = this;
        this.select.products.some(function (item) {
            if (item.code === row.product_code) {
                _this.productsService.getProduct(item.id).subscribe(function (rs) {
                    if (rs.status == "success") {
                        var productServ_1 = rs.data.product;
                        if (productServ_1) {
                            var isUpdate = true;
                            var _indexNumber = 0;
                            if (isUpdate) {
                                if (productServ_1.form_revenue == _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].hinhthucthu.Thang) {
                                    _this.selectMonth = true;
                                    var initialState = {
                                        fee_months: _this.fee_months,
                                        product_code: row.product_code
                                    };
                                    _this.bsModalRef = _this.modalService.show(_shared_components_select_month_select_month_component__WEBPACK_IMPORTED_MODULE_12__["SelectMonthComponent"], {
                                        class: 'second child-modal',
                                        initialState: initialState,
                                        backdrop: 'static',
                                        keyboard: false,
                                    });
                                    var index_1 = 0;
                                    _this.modalService.onHide.subscribe(function () {
                                        if (_this.selectMonth) {
                                            index_1++;
                                            if (index_1 == 1) {
                                                if (_this.bsModalRef.content.successSaveItem) {
                                                    if (row.product_code == _this.bsModalRef.content.product_code) {
                                                        var _lstMonth = _this.bsModalRef.content.successSaveData;
                                                        _lstMonth = _lstMonth.split(';').filter(function (p) { return p != ""; });
                                                        row.school_fee_month = _this.bsModalRef.content.successSaveData;
                                                        row.product_name = productServ_1.name;
                                                        if (_this.select.revenue_forms && _this.select.revenue_forms.length > 0) {
                                                            var _obj = _this.select.revenue_forms.filter(function (p) { return p.code === productServ_1.form_revenue; })[0];
                                                            if (_obj) {
                                                                row.semester = _obj.name;
                                                            }
                                                        }
                                                        row.unit_code = _this.checkUnitCode(productServ_1.unit_code);
                                                        if (row.unit_code == "NAM" || row.unit_code == "NAMHOC" || row.unit_code == "KY")
                                                            row.quantity = 1;
                                                        else if (row.unit_code == "THANG")
                                                            row.quantity = _lstMonth.length;
                                                        else
                                                            row.quantity = null;
                                                        row.price = productServ_1.price ? parseFloat(productServ_1.price) : productServ_1.price;
                                                        row.price = row.price ? parseFloat(row.price) - (row.price * parseFloat(_this.student_reduce_rate_code)) / 100 : row.price;
                                                        row.amount = row.price ? parseFloat(row.price) * parseFloat(row.quantity) : row.price;
                                                        if (_this.isHdGTGT) {
                                                            row.vat = productServ_1.vat != null ? productServ_1.vat.toString() : null;
                                                        }
                                                        else {
                                                            row.vat = null;
                                                        }
                                                        if (_this.isHdGTGT) {
                                                            row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                                                        }
                                                        else {
                                                            row.amount_vat = null;
                                                        }
                                                        row.group_code = productServ_1.group_code;
                                                        row.amount_after_vat = row.amount + (row.amount_vat != null ? row.amount_vat : 0);
                                                        _this.invoice_products.update(row.id, row);
                                                        _this._tinhGiaTri();
                                                        var prot = _this.arrProducts;
                                                        if (!_this.arrProducts || (_this.arrProducts && _this.arrProducts.length == 0)) {
                                                            var IProduct = {
                                                                code: productServ_1.code,
                                                                price: productServ_1.price
                                                            };
                                                            _this.arrProducts.push(IProduct);
                                                        }
                                                        else {
                                                            var product = _this.arrProducts.filter(function (p) { return p.code === productServ_1.code; })[0];
                                                            if (!product) {
                                                                var IProduct = {
                                                                    code: productServ_1.code,
                                                                    price: productServ_1.price
                                                                };
                                                                _this.arrProducts.push(IProduct);
                                                            }
                                                        }
                                                        if (row.school_fee_month !== '') {
                                                            _this.onCheckDuplicate.emit(null);
                                                        }
                                                        return true;
                                                    }
                                                }
                                                else {
                                                    if (row.product_code == _this.bsModalRef.content.product_code) {
                                                        row.school_fee_month = "";
                                                        row.product_name = productServ_1.name;
                                                        row.group_code = productServ_1.group_code;
                                                        row.unit_code = _this.checkUnitCode(productServ_1.unit_code);
                                                        row.quantity = null;
                                                        if (_this.select.revenue_forms && _this.select.revenue_forms.length > 0) {
                                                            var _obj = _this.select.revenue_forms.filter(function (p) { return p.code === productServ_1.form_revenue; })[0];
                                                            if (_obj) {
                                                                row.semester = _obj.name;
                                                            }
                                                        }
                                                        row.price = productServ_1.price ? parseFloat(productServ_1.price) : productServ_1.price;
                                                        row.price = row.price ? parseFloat(row.price) - (row.price * parseFloat(_this.student_reduce_rate_code)) / 100 : row.price;
                                                        row.amount = row.price ? parseFloat(productServ_1.price) : row.price;
                                                        if (_this.isHdGTGT) {
                                                            row.vat = productServ_1.vat != null ? productServ_1.vat.toString() : null;
                                                        }
                                                        else {
                                                            row.vat = null;
                                                        }
                                                        if (_this.isHdGTGT) {
                                                            row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                                                        }
                                                        else {
                                                            row.amount_vat = null;
                                                        }
                                                        row.amount_after_vat = row.amount + (row.amount_vat != null ? row.amount_vat : 0);
                                                        var test = _this.invoice_products;
                                                        _this.invoice_products.update(row.id, row);
                                                        _this._tinhGiaTri();
                                                        if (!_this.arrProducts || (_this.arrProducts && _this.arrProducts.length == 0)) {
                                                            var IProduct = {
                                                                code: productServ_1.code,
                                                                price: productServ_1.price
                                                            };
                                                            _this.arrProducts.push(IProduct);
                                                        }
                                                        else {
                                                            var product = _this.arrProducts.filter(function (p) { return p.code === productServ_1.code; })[0];
                                                            if (!product) {
                                                                var IProduct = {
                                                                    code: productServ_1.code,
                                                                    price: productServ_1.price
                                                                };
                                                                _this.arrProducts.push(IProduct);
                                                            }
                                                        }
                                                        if (row.school_fee_month !== '') {
                                                            _this.onCheckDuplicate.emit(null);
                                                        }
                                                        return true;
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                                else {
                                    row.school_fee_month = '';
                                    var _oHinhThucThu = _this.select.revenue_forms.filter(function (p) { return p.code == productServ_1.form_revenue; })[0];
                                    if (_oHinhThucThu) {
                                        if (_oHinhThucThu.note) {
                                            var mapObj_1 = {
                                                T: _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this.fee_months.code).split('-')[0],
                                                S: _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this.fee_months.code).split('-')[1],
                                            };
                                            row.school_fee_month = _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_oHinhThucThu.note).replace(/T|S/gi, function (matched) {
                                                return mapObj_1[matched];
                                            });
                                        }
                                    }
                                    var _lstMonth = null;
                                    if (row.school_fee_month !== '') {
                                        _lstMonth = row.school_fee_month.split(';').filter(function (p) { return p !== ''; });
                                    }
                                    if (_lstMonth) {
                                        row.quantity = _lstMonth.length;
                                    }
                                    else {
                                        row.quantity = null;
                                    }
                                    if (_this.select.revenue_forms && _this.select.revenue_forms.length > 0) {
                                        var _obj = _this.select.revenue_forms.filter(function (p) { return p.code === productServ_1.form_revenue; })[0];
                                        if (_obj) {
                                            row.semester = _obj.name;
                                        }
                                    }
                                    row.product_name = productServ_1.name;
                                    row.group_code = productServ_1.group_code;
                                    row.unit_code = _this.checkUnitCode(productServ_1.unit_code);
                                    if (row.unit_code == "NAM" || row.unit_code == "NAMHOC" || row.unit_code == "KY")
                                        row.quantity = 1;
                                    else if (row.unit_code == "THANG")
                                        row.quantity = _lstMonth.length;
                                    else
                                        row.quantity = null;
                                    row.price = productServ_1.price ? parseFloat(productServ_1.price) : productServ_1.price;
                                    row.price = row.price ? parseFloat(row.price) - (row.price * parseFloat(_this.student_reduce_rate_code)) / 100 : row.price;
                                    if (row.quantity) {
                                        row.amount = row.price ? parseFloat(row.price) * parseFloat(row.quantity) : row.price;
                                    }
                                    else {
                                        row.amount = row.price ? parseFloat(row.price) : row.price;
                                    }
                                    if (_this.isHdGTGT) {
                                        row.vat = productServ_1.vat != null ? productServ_1.vat.toString() : null;
                                    }
                                    else {
                                        row.vat = null;
                                    }
                                    if (_this.isHdGTGT) {
                                        row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                                    }
                                    else {
                                        row.amount_vat = null;
                                    }
                                    row.amount_after_vat = row.amount + (row.amount_vat != null ? row.amount_vat : 0);
                                    _this.invoice_products.update(row.id, row);
                                    _this._tinhGiaTri();
                                    if (!_this.arrProducts || (_this.arrProducts && _this.arrProducts.length == 0)) {
                                        var IProduct = {
                                            code: productServ_1.code,
                                            price: productServ_1.price
                                        };
                                        _this.arrProducts.push(IProduct);
                                    }
                                    else {
                                        var product = _this.arrProducts.filter(function (p) { return p.code === productServ_1.code; })[0];
                                        if (!product) {
                                            var IProduct = {
                                                code: productServ_1.code,
                                                price: productServ_1.price
                                            };
                                            _this.arrProducts.push(IProduct);
                                        }
                                    }
                                    if (row.school_fee_month !== '') {
                                        _this.onCheckDuplicate.emit(null);
                                    }
                                    return true;
                                }
                            }
                            else {
                                return false;
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, 'error');
                    }
                });
            }
        });
    };
    ProductGripComponent.prototype.unit_codeChange = function (row) {
        var _obj = this.select.unit_codes.filter(function (p) { return p.code === row.unit_code; })[0];
        if (_obj) {
            row.unit_name = _obj.name;
            this.invoice_products.update(row.id, row);
        }
        else {
            row.unit_name = '';
            this.invoice_products.update(row.id, row);
        }
    };
    ProductGripComponent.prototype.product_nameChange = function (row) {
        this.invoice_products.update(row.id, row);
        this.refreshInvoiceProduct();
    };
    ProductGripComponent.prototype.refreshInvoiceProduct = function () {
        var _this = this;
        var invoice_products = [];
        this.dataSource.items().forEach(function (item, index) {
            if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                item.row_content = item.product_name;
                invoice_products.push(item);
                if (item.is_transport_number) {
                    _this.formDataInInvoice.transport_number = item.product_name;
                }
            }
        });
        this.formDataInInvoice.invoice_products = invoice_products;
    };
    ProductGripComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code === unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    ProductGripComponent.prototype._tinhGiaTri = function () {
        var _this = this;
        if (!this.isTT78) {
            setTimeout(function () {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.formDataInInvoice, _this.formatter, !_this.formDataInInvoice.auto_value, _this.formDataInInvoice.auto_value_price, _this.select, _this._objTemplateSelect, _this.configs.system_parameter);
                _this.amount_after_vat = _this.formDataInInvoice.amount_after_vat;
            }, 100);
        }
        else {
            setTimeout(function () {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.formDataInInvoice, _this.formatter, !_this.formDataInInvoice.auto_value, _this.formDataInInvoice.auto_value_price, _this.select, _this._oTemplateTT78, _this.configs.system_parameter);
                _this.amount_after_vat = _this.formDataInInvoice.amount_after_vat;
            }, 100);
        }
    };
    ProductGripComponent.prototype.caculatorAmountVat = function (amount, vat) {
        var temp = amount / 100 * vat;
        return this.roundNumber(temp, 5);
    };
    ProductGripComponent.prototype.roundNumber = function (number, n) {
        var p = Math.pow(10, n);
        return Math.round(number * p) / p;
    };
    // Bật modal thay đổi số thập phân
    ProductGripComponent.prototype.configDecimal = function (n) {
        var _this = this;
        var initialState = {
            column: n,
            formatter: this.formatter,
            showDonGiaNte: this.configs.system_parameter.view_price_nte,
        };
        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_7__["ConfigDecimalComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                _this._tinhGiaTri();
            }
            subModal.unsubscribe();
        });
    };
    // Xóa hàng
    ProductGripComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm(_this._translate.CONFIRM.delete);
            if (check && !_this.ttDaXuatHoaDon) {
                setTimeout(function () {
                    _this.invoice_products.remove(item.id);
                    // this.dataSource.store().remove(item.id);
                    _this.dataSource.reload();
                    _this._tinhGiaTri();
                    var product = _this.arrProducts.filter(function (p) { return p.code === item.product_code; })[0];
                    var index = _this.arrProducts.indexOf(product);
                    _this.arrProducts.splice(index, 1);
                    _this.onCheckDuplicate.emit(null);
                }, 100);
            }
        }, 200);
    };
    ProductGripComponent.prototype.updateSomeTotalInput = function () {
        this._tinhGiaTri();
    };
    // Lấy mẫu bảng kê
    ProductGripComponent.prototype.layMauBangKe = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        this.vatService.layFileMau({
            customer_name: this.formDataInInvoice.customer_name,
            buyer_tax_code: this.formDataInInvoice.buyer_tax_code,
            buyer_address: this.formDataInInvoice.buyer_address,
            buyer_name: this.formDataInInvoice.buyer_name,
            invoice_type_name: ""
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                var file = rs.data.invoice;
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
        });
    };
    // Nạp dữ liệu bảng kê
    ProductGripComponent.prototype.napDuLieuTuBangKe = function () {
        document.getElementById('file-bang-ke').click();
    };
    ProductGripComponent.prototype.onFileBangKeChange = function (evt) {
        var _this = this;
        var target = (evt.target);
        if (target.files.length !== 1) {
            throw new Error('Không thể chọn nhiều file');
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_5__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(ws, { header: 'A', range: 10 }));
            var account = (xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(ws, { header: 'A', range: 0 }));
            var fileBangKe = document.getElementById('file-bang-ke');
            fileBangKe.value = '';
            _this.dataExcelFile = data;
            _this.dataExcelFileInfo = account.slice(0, 4);
            _this.showPopup = true;
        };
        reader.readAsBinaryString(target.files[0]);
    };
    ProductGripComponent.prototype.thayTheToanBo = function () {
        this.fillDataFromFile(this.dataExcelFile, this.dataExcelFileInfo, 'thaythe');
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ProductGripComponent.prototype.themTiep = function () {
        this.fillDataFromFile(this.dataExcelFile, this.dataExcelFileInfo, 'themtiep');
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ProductGripComponent.prototype.huy = function () {
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ProductGripComponent.prototype.fillDataFromFile = function (data, info, status) {
        var _this = this;
        if (info.length === 4) {
            var customer_name = info[0].A.split(':');
            if (customer_name.length > 1) {
                this.formDataInInvoice.customer_name = customer_name[1].trim();
            }
            ////
            var buyer_tax_code = info[1].A.split(':');
            if (buyer_tax_code.length > 1) {
                this.formDataInInvoice.buyer_tax_code = buyer_tax_code[1].trim();
            }
            ////
            var buyer_name = info[2].A.split(':');
            if (buyer_name.length > 1) {
                this.formDataInInvoice.buyer_name = buyer_name[1].trim();
            }
            ////
            var buyer_address = info[3].A.split(':');
            if (buyer_address.length > 1) {
                this.formDataInInvoice.buyer_address = buyer_address[1].trim();
            }
        }
        if (status === 'thaythe') {
            this.dataSource.items().forEach(function (item) {
                // this.dataSource.store().remove(item.id);
                _this.invoice_products.remove(item.id);
            });
        }
        else {
            this.dataSource.items().forEach(function (item) {
                if (!item.product_code && !item.product_name && !item.quantity && !item.price && !item.amount && !item.amount_vat && !item.amount_after_vat) {
                    _this.invoice_products.remove(item.id);
                }
            });
        }
        // let arr = [];
        var j = 10000;
        data.forEach(function (item) {
            // item.A = item.A || "0";
            item.B = item.B || '';
            item.C = item.C || '';
            item.D = item.D || '';
            // item.E = item.E || '0';
            // item.F = item.F || '0';
            // item.G = item.G || '0';
            // item.H = item.H || "0";
            // item.I = item.I || "0";
            var temp = {};
            if (_this.formDataInInvoice.auto_value) {
                temp.id = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].makeid();
                if (item.A) {
                    temp.view_order = parseInt(item.A, 10);
                }
                else {
                    temp.view_order = null;
                }
                temp.product_code = item.B;
                temp.product_name = item.C;
                temp.unit_code = _this.getUnitCodeByUnitName(item.D);
                if (item.E) {
                    temp.quantity = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.E);
                }
                if (item.F) {
                    temp.price = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.F);
                }
                if (item.G) {
                    temp.amount = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.G);
                }
                if (item.H && _this.isHdGTGT) {
                    temp.vat = item.H;
                }
                else {
                    temp.vat = null;
                }
                if (_this.isHdGTGT) {
                    temp.amount_vat = item.I != null ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.I) : null;
                }
                else {
                    temp.amount_vat = null;
                }
                temp.amount_after_vat = temp.amount_vat + temp.amount;
            }
            else {
                temp.id = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].makeid();
                // temp.order = (status == 'thaythe') ? parseInt(item.A) : j;
                if (item.A) {
                    temp.view_order = parseInt(item.A, 10);
                }
                else {
                    temp.view_order = null;
                }
                temp.product_code = item.B;
                temp.product_name = item.C;
                temp.unit_code = _this.getUnitCodeByUnitName(item.D);
                if (item.E) {
                    temp.quantity = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.E);
                }
                if (item.F) {
                    temp.price = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.F);
                }
                if (item.G) {
                    temp.amount = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(item.G);
                }
                // temp.amount = temp.price * temp.quantity;
                if (item.H && _this.isHdGTGT) {
                    temp.vat = item.H; // parseInt(item.H);
                }
                else {
                    temp.vat = null;
                }
            }
            var _obj = _this.select.products.filter(function (p) { return p.code === temp.product_code; })[0];
            if (!_obj && temp.product_code !== '') {
                var _objPush = {
                    code: temp.product_code,
                    name: temp.product_name,
                    mhvth: temp.product_code + ': ' + temp.product_name,
                };
                _this.select.products.push(_objPush);
            }
            temp.commercial_discount = false;
            // arr.push(temp);
            // this.dataSource.store().insert(temp);
            _this.invoice_products.insert(temp);
            j++;
        });
        setTimeout(function () {
            _this.dataGrid.instance.columnOption('unit_code', 'lookup', {
                dataSource: _this.select.unit_codes,
                displayExpr: 'name',
                valueExpr: 'code'
            });
        });
        this.dataSource.reload();
        this._tinhGiaTri();
    };
    ProductGripComponent.prototype.getUnitCodeByUnitName = function (unitName) {
        if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(unitName) !== '') {
            if (this.select.unit_codes && this.select.unit_codes.length > 0) {
                var _obj = this.select.unit_codes.filter(function (p) { return p.name === unitName; })[0];
                if (_obj) {
                    return _obj.code;
                }
                else {
                    var code_1 = _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._convertToViKdau(unitName);
                    var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === code_1; })[0];
                    if (oDuplicate)
                        code_1 = code_1 + _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].addtionalUnitCode();
                    this.select.unit_codes.push({ code: code_1, name: unitName });
                    return code_1;
                }
            }
            else {
                this.select.unit_codes = [];
            }
        }
        return null;
    };
    ProductGripComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    ProductGripComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'LAY_MAU_BANG_KE') {
            this.layMauBangKe();
        }
        else if (e.itemData.id === 'NAP_DU_LIEU_BANG_KE') {
            this.napDuLieuTuBangKe();
        }
    };
    ProductGripComponent.prototype.onCellClick = function (e) {
        var _this = this;
        if (e.column.dataField === 'school_fee_month') {
            this.selectMonth = false;
            var product = this.select.products.filter(function (p) { return p.code === e.row.data.product_code; })[0];
            if (product) {
                this.productsService.getProduct(product.id).subscribe(function (rs) {
                    if (rs.status == "success") {
                        var productServ = rs.data.product;
                        if (productServ) {
                            if (productServ.form_revenue === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].hinhthucthu.Thang) {
                                var initialState = {
                                    fee_months: _this.fee_months,
                                    month_year: e.row.data.school_fee_month,
                                    product_code: e.row.data.product_code
                                };
                                _this.bsModalRef = _this.modalService.show(_shared_components_select_month_select_month_component__WEBPACK_IMPORTED_MODULE_12__["SelectMonthComponent"], {
                                    class: 'second child-modal',
                                    initialState: initialState,
                                    backdrop: 'static',
                                    keyboard: false,
                                });
                                var index_2 = 0;
                                _this.modalService.onHide.subscribe(function () {
                                    if (!_this.selectMonth) {
                                        index_2++;
                                        var tr = index_2;
                                        if (index_2 == 1) {
                                            if (e.row.data.product_code == _this.bsModalRef.content.product_code) {
                                                if (_this.bsModalRef.content.successSaveItem) {
                                                    e.row.data.school_fee_month = _this.bsModalRef.content.successSaveData;
                                                }
                                                else {
                                                }
                                                var _lstMonth = [];
                                                if (e.row.data.school_fee_month)
                                                    _lstMonth = e.row.data.school_fee_month.split(';').filter(function (p) { return p !== ''; });
                                                if (_lstMonth && _lstMonth.length > 0) {
                                                    e.row.data.quantity = _lstMonth.length;
                                                }
                                                else {
                                                    e.row.data.quantity = null;
                                                }
                                                if (e.row.data.quantity) {
                                                    e.row.data.amount = e.row.data.price ? parseFloat(e.row.data.price) * parseFloat(e.row.data.quantity) : 0;
                                                }
                                                else {
                                                    e.row.data.amount = e.row.data.price ? parseFloat(e.row.data.price) : 0;
                                                }
                                                if (_this.isHdGTGT) {
                                                    e.row.data.amount_vat = (e.row.data.vat >= 0) ? _this.caculatorAmountVat(e.row.data.amount, e.row.data.vat) : null;
                                                }
                                                else {
                                                    e.row.data.amount_vat = null;
                                                }
                                                e.row.data.amount_after_vat = e.row.data.amount + (e.row.data.amount_vat != null ? e.row.data.amount_vat : 0);
                                                _this.invoice_products.update(e.row.data.id, e.row.data);
                                                _this._tinhGiaTri();
                                                if (e.row.data.school_fee_month && e.row.data.school_fee_month !== '') {
                                                    _this.onCheckDuplicate.emit(null);
                                                }
                                                return true;
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, 'error');
                    }
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"])
    ], ProductGripComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "invoice_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "isHdGTGT", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "fee_months", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "student_reduce_rate_code", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "extentionGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "formDataInInvoice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "arrProducts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "studentSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProductGripComponent.prototype, "isTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onCheckDuplicate'),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "onCheckDuplicate", void 0);
    ProductGripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-grip',
            template: __webpack_require__(/*! ./product-grip.component.html */ "./src/app/modules/student-invoice/components/product-grip/product-grip.component.html"),
            styles: [__webpack_require__(/*! ./product-grip.component.scss */ "./src/app/modules/student-invoice/components/product-grip/product-grip.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_8__["VatService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_9__["ProductsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_13__["InvoiceService"]])
    ], ProductGripComponent);
    return ProductGripComponent;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/components/send-invoices/send-invoices.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/send-invoices/send-invoices.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\" *ngIf=\"!isReceipts\">{{_translate.CONTROLL.LABEL.process_invoice}}</h4>\r\n    <h4 class=\"modal-title pull-left\" *ngIf=\"isReceipts\">{{_translate.CONTROLL.LABEL.process_receipts}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <!-- hóa đơn kiêm phiếu thu tiền -->\r\n    <div class=\"container-fluid\" *ngIf=\"!isReceipts\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-7\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item [label]=\"{text: _translate.GRID.INVOICE.template_code }\" dataField=\"template\"\r\n                [editorOptions]=\"{readOnly: true}\">\r\n              </dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n              <dxi-item dataField=\"invoice_date\" [label]=\"{text: _translate.GRID.INVOICE.invoice_date}\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item cssClass=\"invoice-number-create-invoice\" dataField=\"invoice_number\"\r\n                [label]=\"{text: _translate.GRID.INVOICE.invoice_number}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"customer_code\" [label]=\"{text: _translate.CONTROLL.LABEL.customer_code}\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_tax_code\" [label]=\"{text: _translate.GRID.INVOICE.buyer_tax_code }\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_name\" [label]=\"{text: _translate.CONTROLL.LABEL.buyer_name }\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_mobile\" [label]=\"{text: _translate.CONTROLL.LABEL.phone }\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item dataField=\"buyer_name\" [label]=\"{text: _translate.CONTROLL.LABEL.customer_name}\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <div class=\"col-lg-5\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item cssClass=\"form-input-visibility\" dataField=\"invoice_date\" [label]=\"{text: 'temp'}\"></dxi-item>\r\n              <!-- <dxi-item dataField=\"a\" [label]=\"{text: 'Số xác thực'}\" [editorOptions]=\"{disabled: true}\"></dxi-item> -->\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n              <dxi-item dataField=\"currency_code\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_code}\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"currency_rate\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_rate}\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item dataField=\"payment_method_name\" [label]=\"{text: _translate.CONTROLL.LABEL.payment_method}\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_email\" [label]=\"{text: 'Email'}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <div class=\"col-lg-12 link-send-invoice\">\r\n          <div class=\"pull-right\">\r\n            <a *ngIf=\"invoice.status == 'DA_XUAT'\" (click)=\"sendMail()\"\r\n              href=\"javascript:void(0)\">{{_translate.CONTROLL.LABEL.send_invoice}}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Phiếu thu -->\r\n    <div class=\"container-fluid\" *ngIf=\"isReceipts\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-7\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item [label]=\"{text: _translate.GRID.INVOICE.template_receipts }\" dataField=\"template\"\r\n                [editorOptions]=\"{readOnly: true}\">\r\n              </dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n              <dxi-item cssClass=\"invoice-number-create-invoice\" dataField=\"invoice_number\"\r\n                [label]=\"{text: _translate.GRID.INVOICE.receipts_number}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"invoice_date\" [label]=\"{text: _translate.GRID.INVOICE.receipts_date}\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"class_name\" [label]=\"{text: _translate.CONTROLL.LABEL.class}\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"student_name\" [label]=\"{text: _translate.CONTROLL.LABEL.name_student }\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <div class=\"col-lg-5\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item dataField=\"payment_method_name\" [label]=\"{text: _translate.CONTROLL.LABEL.payment_method}\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"amount\" [label]=\"{text: 'Tổng tiền'}\" [editorOptions]=\"{disabled: true}\">\r\n              </dxi-item>\r\n              <dxi-item dataField=\"buyer_email\" [label]=\"{text: 'Email'}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <div class=\"col-lg-12 link-send-invoice\">\r\n          <div class=\"pull-right\">\r\n            <a *ngIf=\"invoice.status == 'DA_XUAT' && !isReceipts\" (click)=\"sendMail()\"\r\n              href=\"javascript:void(0)\">{{_translate.CONTROLL.LABEL.send_invoice}}</a>\r\n            <a *ngIf=\"invoice.status == 'DA_XUAT' && isReceipts\" (click)=\"sendMail()\"\r\n              href=\"javascript:void(0)\">{{_translate.CONTROLL.LABEL.send_receipts}}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <dx-data-grid id=\"invoiceHistoryGrid\" [dataSource]=\"invoice_process\" (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n      [showBorders]=\"true\" [wordWrapEnabled]=\"true\" [showRowLines]=\"true\">\r\n      <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n      <dxi-column cellTemplate=\"stt\" caption=\"{{_translate.GRID.INVOICE_DETAILS.view_order}}\" width=\"80\"\r\n        alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"process_time\" caption=\"{{_translate.CONTROLL.LABEL.date_made}}\" width=\"180\"\r\n        dataType=\"datetime\" format=\"dd/MM/yyyy HH:mm:ss\" dateSerializationFormat=\"yyyy-MM-dd HH:mm:ss\"\r\n        alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"content\" cellTemplate=\"content\" caption=\"{{_translate.CONTROLL.LABEL.task}}\"\r\n        alignment=\"left\"></dxi-column>\r\n      <dxi-column dataField=\"user_name\" caption=\"{{_translate.CONTROLL.LABEL.person_made}}\" alignment=\"left\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'stt'\">\r\n        <p>{{ d.rowIndex + 1 }}</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'content'\">\r\n        {{ d.data.content}}\r\n      </div>\r\n    </dx-data-grid>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" icon=\"{{_translate.ICONS.come_back }}\" type=\"default\"\r\n      (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/send-invoices/send-invoices.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/send-invoices/send-invoices.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .form-input-visibility{visibility:hidden}::ng-deep .invoice-number-create-invoice input{color:red;font-weight:bold}.link-send-invoice{margin-top:10px}.link-send-invoice a{text-decoration:underline}#invoiceHistoryGrid{margin-top:15px}\n"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/send-invoices/send-invoices.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/send-invoices/send-invoices.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SendInvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendInvoicesComponent", function() { return SendInvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../send-mail/send-mail.component */ "./src/app/modules/student-invoice/components/send-mail/send-mail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SendInvoicesComponent = /** @class */ (function () {
    function SendInvoicesComponent(authService, bsModalRef, vatService, modalService, bsModalSendMail) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.modalService = modalService;
        this.bsModalSendMail = bsModalSendMail;
        this.frmData = {};
        this._translate = this.authService.getTranslate();
    }
    SendInvoicesComponent.prototype.ngOnInit = function () {
        this.loadTableContent();
        var invoice = this.invoice;
        this.frmData.template = invoice.template_code + " - " + invoice.invoice_series;
        this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_1__(invoice.invoice_date).format('DD/MM/YYYY');
        this.frmData.invoice_number = invoice.invoice_number;
        this.frmData.customer_code = invoice.customer_code;
        this.frmData.buyer_tax_code = invoice.buyer_tax_code;
        this.frmData.buyer_name = invoice.buyer_name;
        this.frmData.buyer_mobile = invoice.buyer_mobile;
        this.frmData.buyer_email = invoice.buyer_email;
        this.frmData.currency_code = invoice.currency_code;
        this.frmData.payment_method_name = invoice.payment_method_view_name;
        this.frmData.class_name = invoice.class_name;
        this.frmData.amount = invoice.amount;
        this.frmData.student_name = invoice.student_name;
    };
    SendInvoicesComponent.prototype.loadTableContent = function () {
        var _this = this;
        this.invoice_process = {};
        var sub = this.vatService.getInvoiceProccess(this.invoice.id).subscribe(function (rs) {
            _this.invoice_process = rs.data.invoice_process;
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    SendInvoicesComponent.prototype.sendMail = function () {
        var _this = this;
        var initialState = {
            invoice_id: this.invoice.id,
            email: this.frmData.buyer_email
        };
        this.bsModalSendMail = this.modalService.show(_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_6__["SendMailComponent"], { class: 'modal-md', initialState: initialState, backdrop: 'static', keyboard: false });
        this.modalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem == 'success_mail') {
                _this.loadTableContent();
            }
        });
    };
    SendInvoicesComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField === 'content' && e.parentType == "dataRow") {
            e.editorName = 'dxTextArea';
        }
    };
    SendInvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-invoices',
            template: __webpack_require__(/*! ./send-invoices.component.html */ "./src/app/modules/student-invoice/components/send-invoices/send-invoices.component.html"),
            styles: [__webpack_require__(/*! ./send-invoices.component.scss */ "./src/app/modules/student-invoice/components/send-invoices/send-invoices.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], SendInvoicesComponent);
    return SendInvoicesComponent;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/components/send-mail/send-mail.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/send-mail/send-mail.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.BUTTON.send}} EMAIL</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n      <dxi-item dataField=\"email\" [label]=\"{text: 'Email'}\">\r\n        <dxi-validation-rule type=\"required\" message=\"Email {{_translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n        <!-- <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.email\" message=\"Email {{_translate.VALIDATION.not_pattern}}\"></dxi-validation-rule> -->\r\n      </dxi-item>\r\n    </dx-form>\r\n    <div style=\"margin-top: 10px;\">\r\n        <a style=\"color: silver;text-decoration: underline;font-size: 90%;\">{{_translate.CONTROLL.LABEL.note1}}: </a><a style=\"color: silver;font-size: 90%;\"> {{_translate.CONTROLL.LABEL.note_email}}</a>\r\n      </div>\r\n      <div style=\"margin-top: 5px;\">\r\n          <a style=\"color: silver;font-size: 90%;\">{{_translate.CONTROLL.LABEL.example}}: admin@efy.com.vn;sale@efy.com.vn</a>\r\n        </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.send}}\" icon=\"{{_translate.ICONS.send_email}}\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/send-mail/send-mail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/send-mail/send-mail.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/student-invoice/components/send-mail/send-mail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/send-mail/send-mail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SendMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailComponent", function() { return SendMailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendMailComponent = /** @class */ (function () {
    function SendMailComponent(bsModalRef, vatService, authService) {
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.authService = authService;
        this.frmData = {};
        this.pattern = _config_index__WEBPACK_IMPORTED_MODULE_2__["pattern"];
        this._translate = this.authService.getTranslate();
    }
    SendMailComponent.prototype.ngOnInit = function () {
        this.frmData.email = this.email;
    };
    SendMailComponent.prototype.onSubmit = function (e) {
        var _this = this;
        var data = [{
                id: this.invoice_id,
                email: this.frmData.email
            }];
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.vatService.sendMail(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.send_mail_success, 'success');
                _this.bsModalRef.content.successSaveItem = "success_mail";
                _this.bsModalRef.hide();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    SendMailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-mail',
            template: __webpack_require__(/*! ./send-mail.component.html */ "./src/app/modules/student-invoice/components/send-mail/send-mail.component.html"),
            styles: [__webpack_require__(/*! ./send-mail.component.scss */ "./src/app/modules/student-invoice/components/send-mail/send-mail.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SendMailComponent);
    return SendMailComponent;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/components/sign-many/sign-many.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/sign-many/sign-many.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{ 'MENU.list_invoice_waiting_for_signing' | translate }}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid \r\n    id=\"gridContainer\"\r\n    [dataSource]=\"invoiceList\"\r\n    [showRowLines]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [columnMinWidth]=\"50\"\r\n    [columnResizingMode]=\"true\"\r\n    [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\">\r\n\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxi-column dataField=\"invoice_number\" caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"template_code\" caption=\"{{ 'GRID.INVOICE.template_code' | translate }}\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"template.invoice_series\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" [width]=\"90\" alignment=\"center\" [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column>\r\n    <dxi-column dataField=\"invoice_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\" [width]=\"110\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"class_name\" caption=\"{{ 'CONTROLL.LABEL.class' | translate }}\" width=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"center\"></dxi-column>\r\n    <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'CONTROLL.LABEL.name_student' | translate }}\" alignment=\"left\"></dxi-column>\r\n    <dxi-column dataField=\"total_payment\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" dataType=\"number\" format=\"0,###.##\"  alignment=\"right\" ></dxi-column>\r\n    <dxi-column cellTemplate=\"statusName\" caption=\"{{ 'GRID.GENERAL.status' | translate }}\" [width]=\"130\" alignment=\"center\"></dxi-column>\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n      <p>{{ d.data.template.template_code }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.student_name }}</p>\r\n      <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.student_name || _translate.GRID.INVOICE.invoice_wait_for_sign }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'statusName'\">\r\n      <p *ngIf=\"d.data.statusByMe =='DA_KY'\">Đã ký</p>\r\n      <p *ngIf=\"d.data.statusByMe !='DA_KY'\">{{ d.data.statusByMe }}</p>\r\n    </div>\r\n    \r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.sign}}\" icon=\"{{_translate.ICONS.pencil}}\" *ngIf=\"!daXong\" type=\"default\" (click)=\"kyHangLoat()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/sign-many/sign-many.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/sign-many/sign-many.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/student-invoice/components/sign-many/sign-many.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/sign-many/sign-many.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SignManyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignManyComponent", function() { return SignManyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignManyComponent = /** @class */ (function () {
    function SignManyComponent(bsModalRef, vatService, socketService, authService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.isTT78 = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this._translate = this.authService.getTranslate();
    }
    SignManyComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        this.infoDangKy = this.authService.getInfoRegister();
        if (this.infoDangKy) {
            if (this.infoDangKy.status == "CHAP_NHAN")
                this.isTT78 = true;
        }
        this.convertData();
        this.connectWebsocket();
    };
    SignManyComponent.prototype.convertData = function () {
        this.invoiceList.forEach(function (item) {
            item.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(item.invoice_date).format('YYYY-MM-DD HH:mm:ss');
            delete item.updated_at;
            delete item.decpoint_is_dot;
            delete item.money_decimal_format;
            item.invoice_products = item.invoice_products.sort(function (itemA, itemB) {
                return itemA.order - itemB.order;
            });
        });
    };
    SignManyComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    SignManyComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm(this._translate.CONFIRM.sign_stop);
        }
        if (r) {
            if (this.subXuatHoaDon) {
                this.subXuatHoaDon.unsubscribe();
            }
            this.valueProgress = 0;
        }
        else {
            e.cancel = true;
        }
    };
    SignManyComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDonImport().subscribe(function (message) {
            var data = message;
            if (data.Status == 'success') {
                if (data.SvcName == "efy_Sign") {
                    var i = _this.invoiceIndex;
                    if (data.Data.Name == 'hoadon.xml') {
                        _this.goiApiXuatHoaDon(data.Data.Content, _this.invoices[i]);
                    }
                    else if (data.Data.Name == 'ten_filek_the_trung-dc-nhi.xml') {
                        _this.invoices[i].issuer_name = data.Data.IssuerName;
                        _this.xuLiApiKhiXuat(_this.invoices[i]);
                    }
                    else {
                        _this.invoices[i].invoice_files.forEach(function (item) {
                            if (item.file_name == data.Data.Name) {
                                item.file_content = data.Data.Content;
                            }
                        });
                        _this.tempKiFile++;
                        if (_this.tempKiFile == _this.invoices[i].invoice_files.length) {
                            _this.xuLiApiKhiXuat(_this.invoices[i]);
                        }
                    }
                }
            }
            else {
                _this.showPopup = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(data.Description, 'error');
            }
        });
    };
    SignManyComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        if (this.isTT78) {
            var ListSerialNumber = "DSCKS";
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
            }
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate, 'InvoiceData', ListSerialNumber, true);
        }
        else
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate);
    };
    SignManyComponent.prototype.xuLiApiKhiXuat = function (invoice) {
        var _this = this;
        var tempTemplate = invoice.template;
        delete invoice.template;
        var xmlInvoice = "";
        var isNewXml = 0;
        if (!this.isTT78) {
            var sub_1 = this.vatService.edit(invoice.id, invoice, true).subscribe(function (rs) {
                invoice.template = tempTemplate;
                if (rs.status == 'success') {
                    invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    //demo kí số vào file
                    //  Lấy xml từ serer
                    isNewXml = rs.data.is_new_xml;
                    if (isNewXml)
                        _this.nodeSign = "//HDon/DSCKS/NBan";
                    else
                        _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (xmlInvoice != "") {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                            _this.goiApiXuatHoaDon(xmlInvoice, invoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, invoice.invoice_date);
                        }
                    }
                }
                else {
                    _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                    _this.showPopup = false;
                    _this.errorImport = true;
                    //this.onImportHiding();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                sub_1.unsubscribe();
            });
        }
        else {
            var sub_2 = this.vatService.editTT78(invoice.id, invoice, true).subscribe(function (rs) {
                invoice.template = tempTemplate;
                if (rs.status == 'success') {
                    invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    //demo kí số vào file
                    //  Lấy xml từ serer
                    isNewXml = rs.data.is_new_xml;
                    if (isNewXml)
                        _this.nodeSign = "//HDon/DSCKS/NBan";
                    else
                        _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (xmlInvoice != "") {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                            _this.goiApiXuatHoaDon(xmlInvoice, invoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                        }
                    }
                }
                else {
                    _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                    _this.showPopup = false;
                    _this.errorImport = true;
                    //this.onImportHiding();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                sub_2.unsubscribe();
            });
        }
    };
    SignManyComponent.prototype.goiApiXuatHoaDon = function (xml_string, invoice) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        // Helper.dowloadFile('hoadon.xml', 'xml', xml_string);
        this.subXuatHoaDon = this.vatService.xuatHoaDon({
            id: invoice.id,
            xml_string: xml_string,
            invoice_files: invoice.invoice_files
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.valueProgress += percentComplete;
                _this.invoiceList[_this.invoiceIndex].statusByMe = 'DA_KY';
                _this.ganXong = true;
                _this.tempKiFile = 0;
                if (_this.invoiceIndex < _this.totalInvoice - 1) {
                    _this.invoiceIndex++;
                    _this.xuatHoaDon();
                }
                else if (_this.invoiceIndex == _this.totalInvoice - 1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.sign_success, 'success');
                    _this.daXong = true;
                    setTimeout(function () {
                        _this.showPopup = false;
                    }, 300);
                }
            }
            else {
                _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                _this.showPopup = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            // Library.hideloading();
            _this.subXuatHoaDon.unsubscribe();
        });
    };
    SignManyComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        var i = this.invoiceIndex;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat(this.invoices[i]);
        }
        else {
            if (this.invoices[i].invoice_files.length) {
                this.invoices[i].invoice_files.forEach(function (item) {
                    _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, item.file_content, item.file_name, item.file_name.split('.').pop(), true, _this.invoices[i].invoice_date);
                });
            }
            else {
                if (this.isTT78) {
                    var ListSerialNumber = "DSCKS";
                    if (this.infoDangKy && this.infoDangKy.registration_signature) {
                        var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                        if (signatures && signatures.length > 0)
                            ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                    }
                    var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
                }
                else
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
            }
        }
    };
    SignManyComponent.prototype.kyHangLoat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirmVA(this._translate.CONFIRM.sign_inv, this._translate.NOTIFY.notify, function () {
            _this.showPopup = true;
            _this.invoices = JSON.parse(JSON.stringify(_this.invoiceList.filter(function (item) { return item.statusByMe != 'DA_KY'; })));
            console.log(_this.invoices);
            _this.totalInvoice = _this.invoices.length;
            _this.invoiceIndex = 0;
            _this.tempKiFile = 0;
            _this.xuatHoaDon();
        });
    };
    SignManyComponent.prototype.dong = function () {
        if (this.ganXong) {
            this.bsModalRef.content.successSaveItem = "success";
        }
        this.bsModalRef.hide();
    };
    SignManyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-many',
            template: __webpack_require__(/*! ./sign-many.component.html */ "./src/app/modules/student-invoice/components/sign-many/sign-many.component.html"),
            styles: [__webpack_require__(/*! ./sign-many.component.scss */ "./src/app/modules/student-invoice/components/sign-many/sign-many.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SignManyComponent);
    return SignManyComponent;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/components/student-invoice-grip/student-invoice-grip.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/student-invoice-grip/student-invoice-grip.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Phần không tự tính giá trị, nhập mẫu bảng kê -->\r\n<div class=\"row support-invoice\">\r\n  <div class=\"col-md-12\">\r\n    <h4 class=\"label-student pull-left\">{{_translate.CONTROLL.LABEL.list_student_selected}}</h4>\r\n    <!-- <h1>DANH SÁCH HS - SV ĐÃ ĐƯỢC CHỌN </h1> -->\r\n  </div>\r\n</div>\r\n\r\n<!-- phần table hiển thị -->\r\n<div class=\"row invoice-table\">\r\n  <div class=\"col-md-12\">\r\n    <dx-data-grid id=\"gridInvoiceStudent\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n      [allowColumnResizing]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n      (onKeyDown)=\"onGripKeyDown($event)\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n      (onEditorPrepared)=\"onEditorPrepared($event)\" (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n      (onRowPrepared)=\"onRowPrepared($event)\" (onCellPrepared)=\"onCellPrepared($event)\"\r\n      (onContentReady)=\"onContentReady($event)\" noDataText=\"Chưa có dữ liệu\" (onRowRemoving)=\"onRowRemoving($event)\">\r\n      <!-- [wordWrapEnabled]=\"true\" (onEditorPrepared)=\"onEditorPrepared($event)\" -->\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"!ttDaXuatHoaDon\" [allowDeleting]=\"true\" [useIcons]=\"true\">\r\n        <dxo-texts confirmDeleteMessage=\"Bạn có chắc chắn xóa bản ghi đã chọn?\">\r\n        </dxo-texts>\r\n      </dxo-editing>\r\n      <dxo-scrolling mode=\"virtual\">\r\n        <!-- or \"virtual\" | \"infinite\" -->\r\n      </dxo-scrolling>\r\n      <dxo-sorting mode=\"false\"></dxo-sorting>\r\n      <dxo-column-fixing [enabled]=\"true\"></dxo-column-fixing>\r\n      <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n      <dxi-column dataField=\"invoice_series_order\" alignment=\"center\" [visible]=\"false\" sortOrder=\"asc\"></dxi-column>\r\n      <!-- Số thứ tự -->\r\n      <!-- <dxi-column dataField=\"view_order\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.view_order }}\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.stt }}\" allowFiltering=\"false\" allowHeaderFiltering = \"false\"\r\n                  alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\"></dxi-column> -->\r\n      <!-- Hóa đơn trùng -->\r\n      <dxi-column cellTemplate=\"duplicateColumn\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.duplicate_invoice }}\"\r\n        *ngIf=\"!isReceipts\" [allowEditing]=\"false\" alignment=\"center\">\r\n      </dxi-column>\r\n      <!-- Phiếu thu trùng -->\r\n      <dxi-column cellTemplate=\"duplicateColumn\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.receipts_invoice }}\"\r\n        *ngIf=\"isReceipts\" [allowEditing]=\"false\" width=\"100\" alignment=\"center\">\r\n      </dxi-column>\r\n      <!-- Mã HS-SV -->\r\n      <dxi-column dataField=\"student_code\" *ngIf=\"!isReceipts\" caption=\"{{  _translate.CONTROLL.LABEL.code_student }}\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <!-- Tên HS-SV -->\r\n      <dxi-column dataField=\"student_name\" *ngIf=\"!isReceipts\" caption=\"{{  _translate.CONTROLL.LABEL.name_student }}\"\r\n        alignment=\"left\" allowFiltering=\"true\"></dxi-column>\r\n      <!-- Số hóa đơn -->\r\n      <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\" *ngIf=\"!isReceipts\"\r\n        caption=\"{{  _translate.GRID.INVOICE.invoice_number }}\" [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Số phiếu thu -->\r\n      <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\" *ngIf=\"isReceipts\" width=\"100\"\r\n        caption=\"{{  _translate.GRID.INVOICE.receipts_number }}\" [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Ngày phiếu thu -->\r\n      <dxi-column dataField=\"invoice_date\" *ngIf=\"isReceipts\" caption=\"{{   _translate.GRID.INVOICE.receipts_date }}\"\r\n        dataType=\"date\" format=\"dd/MM/yyyy\" [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Mã HS-SV -->\r\n      <dxi-column dataField=\"student_code\" *ngIf=\"isReceipts\" caption=\"{{  _translate.CONTROLL.LABEL.code_student }}\"\r\n        alignment=\"center\" width=\"100\">\r\n      </dxi-column>\r\n      <!-- Tên HS-SV -->\r\n      <dxi-column dataField=\"student_name\" *ngIf=\"isReceipts\" caption=\"{{  _translate.CONTROLL.LABEL.name_student }}\"\r\n        alignment=\"left\" allowFiltering=\"true\"></dxi-column>\r\n      <!-- Ngày hóa đơn -->\r\n      <dxi-column dataField=\"invoice_date\" *ngIf=\"!isReceipts\" caption=\"{{   _translate.GRID.INVOICE.invoice_date }}\"\r\n        dataType=\"date\" format=\"dd/MM/yyyy\" [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Lớp -->\r\n      <dxi-column dataField=\"class_name\" width=\"70\" caption=\"{{  _translate.CONTROLL.LABEL.class }}\" alignment=\"center\">\r\n      </dxi-column>\r\n      <!-- Tỉ lệ miễn giảm -->\r\n      <dxi-column cellTemplate=\"student_reduce_rate_code\" *ngIf=\"isReceipts\" width=\"120\"\r\n        caption=\"{{ _translate.CONTROLL.LABEL.exemption_and_reduction_rates}}\" alignment=\"left\">\r\n      </dxi-column>\r\n      <!-- Địa chỉ -->\r\n      <dxi-column dataField=\"buyer_address\" caption=\"{{  _translate.CONTROLL.LABEL.address }}\"\r\n        alignment=\"left\">\r\n      </dxi-column>\r\n      <!-- config column -->\r\n      <div *dxTemplate=\"let d of 'duplicateColumn'\">\r\n        <a *ngIf=\"d.data.statusData == 'ERROR_DUPLICATE'\" class=\"copyIcon actionIcon\" href=\"javascript:void(0)\"\r\n          (click)=\"duplicateColumn(d.data)\"><i></i></a>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n        <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n            *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'student_reduce_rate_code'\">\r\n        <p *ngIf=\"d.data.student_reduce_rate_code == 'MIEN_GIAM_70'\">Miễn giảm 70%</p>\r\n        <p *ngIf=\"d.data.student_reduce_rate_code == 'MIEN_GIAM_100'\">Miễn giảm 100%</p>\r\n        <p *ngIf=\"d.data.student_reduce_rate_code == 'MIEN_GIAM_50'\">Miễn giảm 50%</p>\r\n        <p *ngIf=\"d.data.student_reduce_rate_code == 'KHONG_MIEN_GIAM'\">Không miễn giảm</p>\r\n      </div>\r\n      <!-- <div *dxTemplate=\"let d of 'invoiceDate'\">\r\n        <div class=\"gach-chan\">{{ d.data.invoice_date }}</div>\r\n      </div> -->\r\n      <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    </dx-data-grid>\r\n  </div>\r\n</div>\r\n\r\n<!-- <dx-popup\r\n  class=\"popup\"\r\n  [width]=\"350\"\r\n  [height]=\"175\"\r\n  [showTitle]=\"true\"\r\n  title=\"Thông báo\"\r\n  [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{_translate.CONFIRM.update_customer}}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"capNhatDmKhachHang()\" text=\"{{_translate.CONTROLL.LABEL.update}}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{_translate.CONTROLL.BUTTON.cancel}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup> -->"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/student-invoice-grip/student-invoice-grip.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/student-invoice-grip/student-invoice-grip.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-row i{color:#0E77BB;font-size:18px}.support-invoice{margin-top:5px;margin-bottom:5px}.support-invoice .support-link{padding:6px 15px;border:1px solid #007bff;text-decoration:none}.support-invoice .support-link.mgr-15{margin-right:8px}.support-invoice .support-link img,.support-invoice .support-link i{margin-right:15px;margin-top:-2px}.support-invoice .auto-input{margin-right:75px !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}::ng-deep .styleItemToList{color:dodgerblue}.button-dropdown-extend{display:inline-flex}.label-student{font-size:14px;font-weight:600;text-transform:uppercase;color:#0e76bc}.ColumnsAutomatic{background-color:maroon;text-align:center}.cho-ky{color:#008b8b}.gach-chan{color:#008b8b;text-align:center}::ng-deep #gridInvoiceStudent .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit{width:40px;min-width:20px !important}::ng-deep #gridInvoiceStudent{height:290px}\n"

/***/ }),

/***/ "./src/app/modules/student-invoice/components/student-invoice-grip/student-invoice-grip.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/student-invoice/components/student-invoice-grip/student-invoice-grip.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StudentInvoiceGripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInvoiceGripComponent", function() { return StudentInvoiceGripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
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









var StudentInvoiceGripComponent = /** @class */ (function () {
    function StudentInvoiceGripComponent(route, router, modalService, vatService, productsService, authService, translate) {
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.vatService = vatService;
        this.productsService = productsService;
        this.authService = authService;
        this.translate = translate;
        this.onStudentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = {};
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["InvoiceModel"](1);
        this.showPopup = false; // Popup
        this.dataExcelFile = null;
        this.ttDaXuatHoaDon = false;
        this.amount_after_vat = 0;
        this.extras = [];
        this.rowData = 1;
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.extras = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.import_from_excel,
                items: [
                    {
                        id: 'LAY_MAU_BANG_KE',
                        name: this._translate.CONTROLL.BUTTON.get_the_sample_file,
                        icon: this._translate.ICONS.download
                    },
                    {
                        id: 'NAP_DU_LIEU_BANG_KE',
                        name: this._translate.CONTROLL.BUTTON.import_data,
                        icon: this._translate.ICONS.excel
                    }
                ]
            }];
    }
    StudentInvoiceGripComponent.prototype.ngAfterViewInit = function () {
        // let a = moment(new Date()).format('HH:mm:ss.SSS');
    };
    StudentInvoiceGripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configs = this.authService.getConfigs();
        // let a = moment(new Date()).format('HH:mm:ss.SSS');
        this.routeSub = this.route.data.subscribe(function (data) {
            // put data DM for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.select_provisions_on_accounts = data.init[1].DM_DINH_KHOAN;
            _this.select.vats = data.init[1].DM_TY_LE_VAT;
            _this.select.countrys = data.init[1].DM_QUOC_GIA;
            // Hàng hóa dịch vụ
            //   if(data.init[2])
            //   {
            //     this.select.products = data.init[2];
            //     this.select.products.forEach(item => {
            //       item.mhvth = item.code + ': ' + item.name;
            //     });
            //   }
            //   if (data.init[4]) {
            //     if (data.init[4].invoice_products) {
            //       data.init[4].invoice_products.forEach(item => {
            //         if (item.product_name && item.unit_name) {
            //           const obj1 = this.select.unit_codes.filter(p => p.name === item.unit_name)[0];
            //           if (!obj1) {
            //             this.select.unit_codes.push({ code: VStringService._convertToViKdau(item.unit_name), name: item.unit_name });
            //           }
            //         }
            //       });
            //     }
            //   }
            //   this.select.productsView = {
            //     store: new CustomStore({
            //       key: 'code',
            //       loadMode: 'raw',
            //       load: (loadOptions) => {
            //         return this.select.products;
            //       },
            //       byKey: function (key) {
            //         return data.init[2].filter(p => p.code === key.toString());
            //       }
            //     }),
            //     paginate: true,
            //     sort: 'name'
            //   };
        });
    };
    StudentInvoiceGripComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    StudentInvoiceGripComponent.prototype.onRowPrepared = function (e) {
        // if (e.rowType === 'data') {
        //   e.rowElement.style.whiteSpace = 'pre-wrap';
        //   const eles = e.rowElement.getElementsByTagName('td');
        //   if (!e.isEditing) {
        //     eles[2].innerHTML = e.data.product_code;
        //   }
        //   if (e.data.error) {
        //     const ele = eles[eles.length - 1];
        //     ele.style.background = 'red url(\'assets/img/icons/fa-remove.png\') no-repeat 2% center';
        //     ele.title = e.data.error;
        //   }
        // }
    };
    StudentInvoiceGripComponent.prototype.onEditorPreparing = function (e) {
        if (e.parentType == "filterRow") {
            // if (e.dataField != "student_name") {
            //   e.cancel = true;
            // }
        }
    };
    StudentInvoiceGripComponent.prototype.onEditorPrepared = function (e) {
        // if ((e.dataField === 'amount_without_discount' || e.dataField === 'discount' || e.dataField === 'amount_discount' || e.dataField === 'quantity' || e.dataField === 'price' || e.dataField === 'amount' || e.dataField === 'amount_vat' || e.dataField === 'amount_after_vat') && e.parentType === 'dataRow') {
        //   e.editorElement.childNodes[1].firstChild.onwheel = (evt) => {
        //     e.component.cancelEditData();
        //   };
        //   e.editorElement.childNodes[1].firstChild.addEventListener('select', function () {
        //     this.selectionStart = this.selectionEnd;
        //   }, false);
        // }
    };
    StudentInvoiceGripComponent.prototype.view_orderChange = function () {
        var _this = this;
        var _index = 0;
        this.dataSource.items().forEach(function (item) {
            if (item.view_order && _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) != _config_sEnum__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                item.view_order = ++_index;
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                if (!item.is_money_service) {
                    item.view_order = ++_index;
                }
                else {
                    item.view_order = null;
                }
            }
        });
    };
    StudentInvoiceGripComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code === unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    StudentInvoiceGripComponent.prototype.caculatorAmountVat = function (amount, vat) {
        var temp = amount / 100 * vat;
        return this.roundNumber(temp, 5);
    };
    StudentInvoiceGripComponent.prototype.roundNumber = function (number, n) {
        var p = Math.pow(10, n);
        return Math.round(number * p) / p;
    };
    StudentInvoiceGripComponent.prototype.duplicateColumn = function (item) {
        this.onStudentChange.emit(item);
    };
    StudentInvoiceGripComponent.prototype.updateSomeTotalInput = function () {
        // let arr = [], amountk = 0, amountx = 0, amount0 = 0, amount5 = 0, amount10 = 0;
        // this.dataSource.items().forEach(item => {
        //   if (item.commercial_discount) {
        //     if (item.vat == 5) amount5 -= item.amount_after_vat;
        //     if (item.vat == 10) amount10 -= item.amount_after_vat;
        //     if (item.vat == -1) amountx -= item.amount_after_vat;
        //     if (item.vat == 0 && item.vat != "") amount0 -= item.amount_after_vat;
        //     if (item.vat === "") amountk -= item.amount_after_vat;
        //   } else {
        //     if (item.vat == 5) amount5 += item.amount_after_vat;
        //     if (item.vat == 10) amount10 += item.amount_after_vat;
        //     if (item.vat == -1) amountx += item.amount_after_vat;
        //     if (item.vat == 0 && item.vat != "") amount0 += item.amount_after_vat;
        //     if (item.vat === "") amountk += item.amount_after_vat;
        //   }
        // });
        // if (amountk < 0) {
        //   arr.push('');
        // }
        // if (amountx < 0) {
        //   arr.push('-1');
        // }
        // if (amount0 < 0) {
        //   arr.push('0');
        // }
        // if (amount5 < 0) {
        //   arr.push('5');
        // }
        // if (amount10 < 0) {
        //   arr.push('10');
        // }
        // this.dataSource.items().forEach(item => {
        //   item.vat = item.vat;
        //   if (item.product_code || item.product_name || item.quantity || item.price || item.amount || item.amount_vat || item.amount_after_vat) {
        //     if (item.vat != null) {
        //       if (arr.includes(item.vat.toString())) {
        //         item.error = `Tiền hàng sau khi trừ chiết khấu của cùng loại thuế suất ${this.ruleError[item.vat.toString()]} < 0.\nVui lòng kiểm tra lại thông tin hóa đơn.`;
        //       } else {
        //         item.error = 0;
        //       }
        //     }
        //     this.invoice_products.update(item.order, item);
        //   }
        // });
        // setTimeout(() => {
        //   this.gripChange.emit([this.dataSource, this.invoice_products, this.formatter]);
        //   this.dataGrid.instance.refresh();
        // }, 200);
    };
    StudentInvoiceGripComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    StudentInvoiceGripComponent.prototype.onRowRemoving = function (e) {
        var _this = this;
        var student_id = e.data.student_id;
        var indexRemove = [];
        this.dataSource.forEach(function (row) {
            if (row.student_id === student_id) {
                indexRemove.push(_this.dataSource.indexOf(row));
            }
        });
        for (var i = indexRemove.length - 1; i >= 0; i--) {
            this.dataSource.splice(indexRemove[i], 1);
        }
        this.checkStatusData();
        var _index = 0;
        var _index_view_order = 0;
        this.dataSource.forEach(function (item) {
            item.order = ++_index;
            item.view_order = ++_index_view_order;
        });
        this.dataGrid.instance.refresh();
        this.onStudentChange.emit(null);
    };
    StudentInvoiceGripComponent.prototype.checkStatusData = function () {
        // let errorDuplicateDatabase = this.dataSource.filter((item) => {
        //   return item.number_of_vouchers && item.statusData == "ERROR_DUPLICATE_DATABASE";
        // });
        // let errorDuplicateOngird = this.dataSource.filter((item) => {
        //   return item.number_of_vouchers && item.statusData == "ERROR_DUPLICATE_ONGIRD";
        // });
        // let errorData = this.dataSource.filter((item) => {
        //   return item.statusData == "DATA_ERROR";
        // });
        // this.totalDuplicateInvoice = errorDuplicateDatabase.length;
        // this.totalErrorInvoice = errorDuplicateOngird.length + errorData.length;
    };
    StudentInvoiceGripComponent.prototype.onContextMenuPreparing = function (e) {
    };
    StudentInvoiceGripComponent.prototype.onContentReady = function (e) {
        e.component.columnOption("command:edit", {
            visibleIndex: -1
        });
    };
    StudentInvoiceGripComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType === 'data') {
            if (e.data.statusData === 'OTHER_REDUCE') {
                this.setStatusDataOnCellPrepared(e, this._translate.NOTIFY.different_reduce, false);
            }
            if (e.data.statusData === 'ERROR_DUPLICATE') {
                this.setStatusDataOnCellPrepared(e, this._translate.NOTIFY.invoice_duplicate, true);
            }
            if (e.data.number_of_vouchers) {
                switch (e.column.dataField) {
                    case 'buyer_address':
                        if (e.data.customer_object_code === false) {
                            this.setStatusDataOnCellPrepared(e, 'Địa chỉ không được để trống', false);
                        }
                        break;
                    default:
                        break;
                }
            }
            else if (e.data.number_of_vouchers === '' && e.data.dataType === 'KHACH_HANG' && e.data.product_name && e.column.dataField === 'number_of_vouchers') {
                this.setStatusDataOnCellPrepared(e, 'Số phiếu, chứng từ không được để trống', false);
            }
            if (e.column.command === "edit") {
                if (e.row.data.invoice_number) {
                    var tempt = e.cellElement.children;
                    tempt[0].outerHTML = "";
                }
            }
        }
    };
    StudentInvoiceGripComponent.prototype.setStatusDataOnCellPrepared = function (e, message, isDuplicate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!e.value) return [3 /*break*/, 5];
                        if (!!isDuplicate) return [3 /*break*/, 2];
                        return [4 /*yield*/, e.row.cells.forEach(function (item) {
                                if (item.cellElement) {
                                    // item.cellElement.style.background = 'red url(\'assets/img/icons/fa-remove.png\') no-repeat 2% center';
                                    item.cellElement.style.background = 'red';
                                    item.cellElement.title = message;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, e.row.cells.forEach(function (item) {
                            if (item.cellElement) {
                                item.cellElement.style.background = 'yellow';
                                item.cellElement.title = message;
                            }
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        if (e.value && e.data.statusData === 'DATA_ERROR') {
                            e.data.statusData = 'INVALID';
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StudentInvoiceGripComponent.prototype.view = function (data) {
        if (data && data.invoice_number) {
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            var w_1 = 1920, h_1 = 900;
            w_1 = window.screen.availWidth * 100 / 100;
            h_1 = window.screen.availHeight * 93 / 100;
            var win_1 = window.open('about:blank', 'name', 'width=200, height=100');
            win_1.document.body.innerHTML = this._translate.NOTIFY.loading;
            win_1.blur();
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var sub_1 = this.vatService.xemHoaDonInvoiceForSeries(ids).subscribe(function (rs) {
                if (rs.status == 'success') {
                    var pdf_file = rs.data.invoice.pdf_file;
                    var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_4__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                    win_1.resizeTo(screen.availWidth, screen.availHeight);
                    win_1.focus();
                    win_1.open(objectUrl, 'name', 'width=' + w_1 + ', height=' + h_1);
                }
                else {
                    win_1.close();
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"])
    ], StudentInvoiceGripComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StudentInvoiceGripComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StudentInvoiceGripComponent.prototype, "invoice_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StudentInvoiceGripComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StudentInvoiceGripComponent.prototype, "isHdGTGT", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StudentInvoiceGripComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StudentInvoiceGripComponent.prototype, "valueFormInvoice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StudentInvoiceGripComponent.prototype, "formDataInInvoice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StudentInvoiceGripComponent.prototype, "isReceipts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onStudentChange'),
        __metadata("design:type", Object)
    ], StudentInvoiceGripComponent.prototype, "onStudentChange", void 0);
    StudentInvoiceGripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-invoice-grip',
            template: __webpack_require__(/*! ./student-invoice-grip.component.html */ "./src/app/modules/student-invoice/components/student-invoice-grip/student-invoice-grip.component.html"),
            styles: [__webpack_require__(/*! ./student-invoice-grip.component.scss */ "./src/app/modules/student-invoice/components/student-invoice-grip/student-invoice-grip.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], StudentInvoiceGripComponent);
    return StudentInvoiceGripComponent;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/shared/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/student-invoice/shared/index.ts ***!
  \*********************************************************/
/*! exports provided: StudentInvoiceService, InvoiceResolver, ShowInvoiceResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _student_invoice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-invoice.service */ "./src/app/modules/student-invoice/shared/student-invoice.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudentInvoiceService", function() { return _student_invoice_service__WEBPACK_IMPORTED_MODULE_0__["StudentInvoiceService"]; });

/* harmony import */ var _student_invoice_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-invoice.resolver */ "./src/app/modules/student-invoice/shared/student-invoice.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvoiceResolver", function() { return _student_invoice_resolver__WEBPACK_IMPORTED_MODULE_1__["InvoiceResolver"]; });

/* harmony import */ var _show_student_invoice_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-student-invoice.resolver */ "./src/app/modules/student-invoice/shared/show-student-invoice.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowInvoiceResolver", function() { return _show_student_invoice_resolver__WEBPACK_IMPORTED_MODULE_2__["ShowInvoiceResolver"]; });






/***/ }),

/***/ "./src/app/modules/student-invoice/shared/show-student-invoice.resolver.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/student-invoice/shared/show-student-invoice.resolver.ts ***!
  \*********************************************************************************/
/*! exports provided: ShowInvoiceResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInvoiceResolver", function() { return ShowInvoiceResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShowInvoiceResolver = /** @class */ (function () {
    function ShowInvoiceResolver(vatService, router, listsService, authService) {
        this.vatService = vatService;
        this.router = router;
        this.listsService = listsService;
        this.authService = authService;
    }
    ShowInvoiceResolver.prototype.resolve = function (route, state) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var isTT78 = false;
        var isViewTT32 = false;
        if (route.queryParams['status'] === 'viewInvTT32') {
            isViewTT32 = true;
        }
        var infoDangKy = this.authService.getInfoRegister();
        if (infoDangKy && infoDangKy.id) {
            if (infoDangKy.status == "CHAP_NHAN")
                isTT78 = true;
        }
        if (isTT78 == true && isViewTT32)
            isTT78 = false;
        var loaiHoaDon = route.data.type;
        if (loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HSPT)
            isTT78 = true;
        var ids = [];
        var invoice_id = route.paramMap.get('invoiceId');
        var isChildInvoices = false;
        if (invoice_id) {
            ids.push(invoice_id);
        }
        else {
            var objQuery = [];
            if (Array.isArray(route.queryParams.ids)) {
                objQuery = route.queryParams.ids;
            }
            else {
                objQuery.push(route.queryParams.ids);
            }
            isChildInvoices = route.queryParams.isChildInvoices;
            for (var key in objQuery) {
                if (objQuery.hasOwnProperty(key)) {
                    ids.push(objQuery[key]);
                }
            }
        }
        var _countDm = 0;
        var dataJoin = [];
        var dataDM;
        var arr = [
            {
                "code": "DM_NHOM_KHACH_HANG",
                "order": 0
            },
            {
                "code": "DM_LOAI_TIEN",
                "order": 0
            },
            {
                "code": "DM_HINH_THUC_THANH_TOAN",
                "order": 0
            },
            {
                "code": "DM_DON_VI_TINH",
                "order": 0
            },
            {
                "code": "DM_TY_LE_VAT",
                "order": 0
            },
            {
                "code": "DM_DINH_KHOAN",
                "order": 0
            },
            {
                "code": "DM_NOI_XUAT_HOA_DON",
                "order": 0
            },
            {
                "code": "DM_QUOC_GIA",
                "order": 0
            },
            {
                "code": "DM_TAI_KHOAN_NGAN_HANG",
                "order": 0
            },
            {
                "code": "DM_TY_LE_MIEN_GIAM_HOC_PHI",
                "order": 0
            },
            {
                "code": "DM_HINH_THUC_THU",
                "order": 0
            },
            {
                "code": "DM_LOP_HOC",
                "order": 0
            },
        ];
        dataDM = this.listsService.getDMBy(arr);
        if (dataDM.length > 0) {
            dataDM.forEach(function (element) {
                dataJoin.push(element);
            });
        }
        _countDm = dataDM.length;
        var dataRecord;
        if (isTT78) {
            dataRecord = this.vatService.showInvoiceResolverSeriesTT78(ids, loaiHoaDon);
            if (dataRecord.length > 0) {
                dataRecord.forEach(function (element) {
                    dataJoin.push(element);
                });
            }
            var dataForkJoin = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(dataJoin);
            return dataForkJoin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                var status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success;
                var isEdit = true;
                for (var index = 0; index < rs.length; index++) {
                    if (rs[index].status != _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs[index].message, "error");
                        if (loaiHoaDon == "01GTKT")
                            _this.router.navigate(['/system/student-vat-invoice']);
                        else if (loaiHoaDon == "02GTTT")
                            _this.router.navigate(['/system/student-sale-invoice']);
                        else if (loaiHoaDon == "03XKNB")
                            _this.router.navigate(['/system/transport-invoice']);
                        status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.error;
                        break;
                    }
                }
                if (status == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success) {
                    var templates = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToInvoiceResolver(rs[_countDm]).filter(function (item) { return item.template_type !== 'HOA_DON_KHOI_TAO_TU_MAY_TINH_TIEN' && item.template_type !== 'PHIEU_THU_MAY_TINH_TIEN'; });
                    if (dataDM.length > 0) {
                        var _data_1 = [];
                        rs.forEach(function (element, i) {
                            if (i < dataDM.length) {
                                _data_1.push(element);
                            }
                        });
                        _this.authService.setDMLocal(_data_1);
                    }
                    return [
                        rs[_countDm + 1].data.products,
                        rs[dataJoin.length - 1].data,
                        isEdit,
                        templates,
                        isChildInvoices
                    ];
                }
                else
                    return null;
            }));
        }
        else {
            dataRecord = this.vatService.showInvoiceResolverSeries(ids, loaiHoaDon);
            if (dataRecord.length > 0) {
                dataRecord.forEach(function (element) {
                    dataJoin.push(element);
                });
            }
            var dataForkJoin = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(dataJoin);
            return dataForkJoin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                var status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success;
                var isEdit = true;
                for (var index = 0; index < rs.length; index++) {
                    if (rs[index].status != _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs[index].message, "error");
                        if (loaiHoaDon == "01GTKT")
                            _this.router.navigate(['/system/student-vat-invoice']);
                        else if (loaiHoaDon == "02GTTT")
                            _this.router.navigate(['/system/student-sale-invoice']);
                        else if (loaiHoaDon == "03XKNB")
                            _this.router.navigate(['/system/transport-invoice']);
                        status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.error;
                        break;
                    }
                }
                if (status == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success) {
                    var invoice_releases = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertDataToInvoiceResolver(rs[_countDm]);
                    if (dataDM.length > 0) {
                        var _data_2 = [];
                        rs.forEach(function (element, i) {
                            if (i < dataDM.length) {
                                _data_2.push(element);
                            }
                        });
                        _this.authService.setDMLocal(_data_2);
                    }
                    return [
                        invoice_releases,
                        rs[_countDm + 1].data.products,
                        isEdit,
                        rs[dataJoin.length - 1].data,
                        isChildInvoices
                    ];
                }
                else
                    return null;
            }));
        }
    };
    ShowInvoiceResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["ListsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ShowInvoiceResolver);
    return ShowInvoiceResolver;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/shared/student-invoice.resolver.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/student-invoice/shared/student-invoice.resolver.ts ***!
  \****************************************************************************/
/*! exports provided: InvoiceResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceResolver", function() { return InvoiceResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvoiceResolver = /** @class */ (function () {
    function InvoiceResolver(vatService, router, listsService, authService) {
        this.vatService = vatService;
        this.router = router;
        this.listsService = listsService;
        this.authService = authService;
    }
    InvoiceResolver.prototype.resolve = function (route, state) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var isTT78 = false;
        var infoDangKy = this.authService.getInfoRegister();
        if (infoDangKy && infoDangKy.id) {
            if (infoDangKy.status == "CHAP_NHAN")
                isTT78 = true;
        }
        var loaiHoaDon = route.data.type;
        if (loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HSPT)
            isTT78 = true;
        var _countDm = 0;
        var dataJoin = [];
        var dataDM;
        var arr = [
            {
                "code": "DM_NHOM_KHACH_HANG",
                "order": 0
            },
            {
                "code": "DM_LOAI_TIEN",
                "order": 0
            },
            {
                "code": "DM_HINH_THUC_THANH_TOAN",
                "order": 0
            },
            {
                "code": "DM_DON_VI_TINH",
                "order": 0
            },
            {
                "code": "DM_TY_LE_VAT",
                "order": 0
            },
            {
                "code": "DM_DINH_KHOAN",
                "order": 0
            },
            {
                "code": "DM_NOI_XUAT_HOA_DON",
                "order": 0
            },
            {
                "code": "DM_QUOC_GIA",
                "order": 0
            },
            {
                "code": "DM_TAI_KHOAN_NGAN_HANG",
                "order": 0
            },
            {
                "code": "DM_TY_LE_MIEN_GIAM_HOC_PHI",
                "order": 0
            },
            {
                "code": "DM_HINH_THUC_THU",
                "order": 0
            },
            {
                "code": "DM_LOP_HOC",
                "order": 0
            },
        ];
        dataDM = this.listsService.getDMBy(arr);
        if (dataDM.length > 0) {
            dataDM.forEach(function (element) {
                dataJoin.push(element);
            });
        }
        _countDm = dataDM.length;
        if (isTT78) {
            var dataRecord = this.vatService.getInvoiceResolverTT78(loaiHoaDon);
            if (dataRecord.length > 0) {
                dataRecord.forEach(function (element) {
                    dataJoin.push(element);
                });
            }
            var dataForkJoin = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(dataJoin);
            return dataForkJoin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                var status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success;
                var isEdit = false;
                for (var index = 0; index < rs.length; index++) {
                    if (rs[index].status != _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs[index].message, "error");
                        if (loaiHoaDon == "01GTKT")
                            _this.router.navigate(['/system/student-vat-invoice']);
                        else if (loaiHoaDon == "02GTTT")
                            _this.router.navigate(['/system/student-sale-invoice']);
                        else if (loaiHoaDon == "03XKNB")
                            _this.router.navigate(['/system/transport-invoice']);
                        status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.error;
                        break;
                    }
                }
                if (status == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success) {
                    if (dataDM.length > 0) {
                        var _data_1 = [];
                        rs.forEach(function (element, i) {
                            if (i < dataDM.length) {
                                _data_1.push(element);
                            }
                        });
                        _this.authService.setDMLocal(_data_1);
                    }
                    /* Thông tư 78 */
                    var templates = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToInvoiceResolver(rs[dataJoin.length - 1]).filter(function (item) { return item.template_type !== 'HOA_DON_KHOI_TAO_TU_MAY_TINH_TIEN' && item.template_type !== 'PHIEU_THU_MAY_TINH_TIEN'; });
                    return [
                        rs[_countDm].data.products,
                        templates,
                        isEdit,
                    ];
                }
                else
                    return null;
            }));
        }
        else {
            var dataRecord = this.vatService.getInvoiceResolver(loaiHoaDon);
            if (dataRecord.length > 0) {
                dataRecord.forEach(function (element) {
                    dataJoin.push(element);
                });
            }
            var dataForkJoin = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(dataJoin);
            return dataForkJoin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                var status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success;
                var isEdit = false;
                for (var index = 0; index < rs.length; index++) {
                    if (rs[index].status != _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs[index].message, "error");
                        if (loaiHoaDon == "01GTKT")
                            _this.router.navigate(['/system/student-vat-invoice']);
                        else if (loaiHoaDon == "02GTTT")
                            _this.router.navigate(['/system/student-sale-invoice']);
                        else if (loaiHoaDon == "03XKNB")
                            _this.router.navigate(['/system/transport-invoice']);
                        status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.error;
                        break;
                    }
                }
                if (status == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success) {
                    var invoice_releases = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertDataToInvoiceResolver(rs[_countDm]);
                    if (dataDM.length > 0) {
                        var _data_2 = [];
                        rs.forEach(function (element, i) {
                            if (i < dataDM.length) {
                                _data_2.push(element);
                            }
                        });
                        _this.authService.setDMLocal(_data_2);
                    }
                    return [
                        invoice_releases,
                        rs[dataJoin.length - 1].data.products,
                        isEdit
                    ];
                }
                else
                    return null;
            }));
        }
    };
    InvoiceResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["ListsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], InvoiceResolver);
    return InvoiceResolver;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/shared/student-invoice.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/student-invoice/shared/student-invoice.service.ts ***!
  \***************************************************************************/
/*! exports provided: StudentInvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInvoiceService", function() { return StudentInvoiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentInvoiceService = /** @class */ (function () {
    function StudentInvoiceService(apiService, coreService) {
        this.apiService = apiService;
        this.coreService = coreService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
        this.isCopy = false;
    }
    StudentInvoiceService.prototype.getAllBatch = function (params) {
        // const includes = 'includes[]=input_invoice_products';
        // const sort = '&sort[0][key]=invoice_date&sort[0][direction]=DESC';
        if (params) {
            return this.apiService.getDataTable('/batchs');
        }
        else {
            return this.apiService.getDataTable('/batchs');
        }
    };
    StudentInvoiceService.prototype.getAllStudentToBatch = function (idBatch, params) {
        var includes = 'includes[]=template&options[sum_payment_process]=1&includes[]=invoice_files&options[is_view_index]=1';
        var filter = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._removeNewline("\n&filter_groups[0][filters][0][key]=batch_id\n&filter_groups[0][filters][0][value]=" + idBatch + "\n&filter_groups[0][filters][0][operator]=eq");
        if (params) {
            filter += '&' + params;
        }
        var sort = '&sort[0][key]=status_order&sort[0][direction]=ASC';
        return this.apiService.getDataTable('/invoices', includes + filter, sort);
        // &filter_groups[0][filters][-1][key]=adjustment_type
        //   &filter_groups[0][filters][-1][value][0]=1
        //   &filter_groups[0][filters][-1][value][1]=2
        //   &filter_groups[0][filters][-1][value][2]=3
        //   &filter_groups[0][filters][-1][value][3]=4
        //   &filter_groups[0][filters][-1][value][4]=5
        //   &filter_groups[0][filters][-1][value][5]=7
        //   &filter_groups[0][filters][-1][operator]=in
        // &filter_groups[1][or]=true
        //   &filter_groups[1][filters][0][key]=crm_id
        //   &filter_groups[1][filters][0][value]=null
        //   &filter_groups[1][filters][0][operator]=eq
        //   &filter_groups[1][filters][1][key]=status
        //   &filter_groups[1][filters][1][value]=DA_XUAT
        //   &filter_groups[1][filters][1][operator]=eq
        //   &filter_groups[2][filters][0][key]=template.invoice_type
        //   &filter_groups[2][filters][0][value]=01GTKT
        //   &filter_groups[2][filters][0][operator]=eq
    };
    StudentInvoiceService.prototype.getStudentToClass = function (code_class, paramsClass, paramsTLMG, contentSearch) {
        var parUrl = '/students?';
        var arrClass = paramsClass;
        if (arrClass && arrClass.length > 0) {
            parUrl += "&filter_groups[0][filters][0][key]=class_code";
            for (var i = 0; i < arrClass.length; i++) {
                parUrl += "&filter_groups[0][filters][0][value][" + i + "]=" + arrClass[i];
            }
            parUrl += "&filter_groups[0][filters][0][operator]=in";
        }
        else {
            parUrl += "&filter_groups[0][filters][0][key]=class_code";
            parUrl += "&filter_groups[0][filters][0][value]=" + code_class;
            parUrl += "&filter_groups[0][filters][0][operator]=eq";
        }
        if (paramsTLMG && paramsTLMG.length > 0) {
            parUrl += "&filter_groups[1][filters][0][key]=student_reduce_rate_code";
            for (var j = 0; j < paramsTLMG.length; j++) {
                parUrl += "&filter_groups[1][filters][0][value][" + j + "]=" + paramsTLMG[j];
            }
            parUrl += "&filter_groups[1][filters][0][operator]=in";
        }
        if (contentSearch) {
            var _indexfilter_groups = 8888;
            parUrl += "&filter_groups[" + _indexfilter_groups + "][or]=true\n            &filter_groups[" + _indexfilter_groups + "][filters][0][key]=code\n            &filter_groups[" + _indexfilter_groups + "][filters][0][value]=" + contentSearch + "\n            &filter_groups[" + _indexfilter_groups + "][filters][0][operator]=ct\n            &filter_groups[" + _indexfilter_groups + "][filters][1][key]=name\n            &filter_groups[" + _indexfilter_groups + "][filters][1][value]=" + contentSearch + "\n            &filter_groups[" + _indexfilter_groups + "][filters][1][operator]=ct&";
        }
        parUrl += "&sort[0][key]=order&sort[0][direction]=ASC";
        return this.apiService.get(parUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); })).toPromise();
    };
    StudentInvoiceService.prototype.getClassBySearch = function (code_class, paramsClass, paramsTLMG, contentSearch) {
        var parUrl = '/students?';
        var arrClass = paramsClass;
        if (arrClass && arrClass.length > 0) {
            parUrl += "&filter_groups[0][filters][0][key]=class_code";
            for (var i = 0; i < arrClass.length; i++) {
                parUrl += "&filter_groups[0][filters][0][value][" + i + "]=" + arrClass[i];
            }
            parUrl += "&filter_groups[0][filters][0][operator]=in";
        }
        else {
            if (code_class) {
                parUrl += "&filter_groups[0][filters][0][key]=class_code";
                parUrl += "&filter_groups[0][filters][0][value]=" + code_class;
                parUrl += "&filter_groups[0][filters][0][operator]=eq";
            }
        }
        if (paramsTLMG && paramsTLMG.length > 0) {
            parUrl += "&filter_groups[1][filters][0][key]=student_reduce_rate_code";
            for (var j = 0; j < paramsTLMG.length; j++) {
                parUrl += "&filter_groups[1][filters][0][value][" + j + "]=" + paramsTLMG[j];
            }
            parUrl += "&filter_groups[1][filters][0][operator]=in";
        }
        if (contentSearch) {
            var _indexfilter_groups = 8888;
            parUrl += "&filter_groups[" + _indexfilter_groups + "][or]=true\n            &filter_groups[" + _indexfilter_groups + "][filters][0][key]=code\n            &filter_groups[" + _indexfilter_groups + "][filters][0][value]=" + contentSearch + "\n            &filter_groups[" + _indexfilter_groups + "][filters][0][operator]=ct\n            &filter_groups[" + _indexfilter_groups + "][filters][1][key]=name\n            &filter_groups[" + _indexfilter_groups + "][filters][1][value]=" + contentSearch + "\n            &filter_groups[" + _indexfilter_groups + "][filters][1][operator]=ct&";
        }
        return this.apiService.get(parUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); })).toPromise();
    };
    StudentInvoiceService.prototype.fillterStudentToClassOrTLMG = function (key, params) {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var parUrl = '/students';
        if (Array.isArray(params) && params.length) {
            parUrl += "?&filter_groups[0][filters][0][key]=" + key;
            for (var i = 0; i < params.length; i++) {
                parUrl += "&filter_groups[0][filters][0][value][" + i + "]=" + params[i];
            }
            parUrl += "&filter_groups[0][filters][0][operator]=in";
        }
        return this.apiService.get(parUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); })).toPromise();
    };
    StudentInvoiceService.prototype.getClassByCode = function (params) {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var parUrl = '/lists';
        if (Array.isArray(params) && params.length) {
            parUrl += "?filter_groups[0][filters][0][key]=code";
            for (var i = 0; i < params.length; i++) {
                parUrl += "&filter_groups[0][filters][0][value][" + i + "]=" + params[i];
            }
            parUrl += "&filter_groups[0][filters][0][operator]=in";
        }
        return this.apiService.get(parUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); })).toPromise();
    };
    StudentInvoiceService.prototype.getAllClass = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        return this.apiService.get('/get-lists-by-listtype-code/DM_LOP_HOC').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); })).toPromise();
    };
    StudentInvoiceService.prototype.fillterStudentToClassAndTLMG = function (keyClass, paramsClass, keyTLMG, paramsTLMG) {
        var parUrl = '/students';
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        if (Array.isArray(paramsClass) && paramsClass.length > 0) {
            parUrl += "?&filter_groups[0][filters][0][key]=" + keyClass;
            for (var i = 0; i < paramsClass.length; i++) {
                parUrl += "&filter_groups[0][filters][0][value][" + i + "]=" + paramsClass[i];
            }
            parUrl += "&filter_groups[0][filters][0][operator]=in";
        }
        if (Array.isArray(paramsTLMG) && paramsTLMG.length > 0) {
            parUrl += "&filter_groups[1][filters][0][key]=" + keyTLMG;
            for (var j = 0; j < paramsTLMG.length; j++) {
                parUrl += "&filter_groups[1][filters][0][value][" + j + "]=" + paramsTLMG[j];
            }
            parUrl += "&filter_groups[1][filters][0][operator]=in";
        }
        return this.apiService.get(parUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); })).toPromise();
    };
    StudentInvoiceService.prototype.fillterStudentToNameAndCode = function (params) {
        var parUrlSearchName = "/students?filter_groups[1][filters][0][key]=code&filter_groups[1][filters][0][value]=" + params + "&filter_groups[1][filters][0][operator]=ct";
        var parUrl = "/students?filter_groups[2][filters][0][key]=name&filter_groups[2][filters][0][value]=" + params + "&filter_groups[2][filters][0][operator]=ct";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            this.apiService.get(parUrlSearchName).toPromise(),
            this.apiService.get(parUrl).toPromise()
        ]);
    };
    StudentInvoiceService.prototype.deleteStudent = function (id) {
        return this.apiService.delete('/students/' + id);
    };
    StudentInvoiceService.prototype.getCountStudent = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        return this.apiService.get('/students').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); })).toPromise();
    };
    StudentInvoiceService.prototype.show = function (id) {
        return this.apiService.get('/invoices/' + id + '?includes[]=invoice_products&includes[]=invoice_options');
    };
    StudentInvoiceService.prototype.showToSendInvoice = function (id) {
        return this.apiService.get('/invoices/' + id + '?includes[]=template');
    };
    StudentInvoiceService.prototype.sendMail = function (data) {
        return this.apiService.post('/invoices-send-mail', { invoices: data });
    };
    StudentInvoiceService.prototype.delete = function (id) {
        return this.apiService.delete('/invoices/' + id);
    };
    StudentInvoiceService.prototype.layFileMau = function (data) {
        return this.apiService.post('/invoices-export-template-product', { invoice: data });
    };
    StudentInvoiceService.prototype.ghiTam = function (data, invoice_number) {
        if (invoice_number === void 0) { invoice_number = false; }
        var url = invoice_number ? '/invoices?options[invoice_number]=1' : '/invoices';
        return this.apiService.post(url, { invoice: data });
    };
    StudentInvoiceService.prototype.xuatChoKy = function (data) {
        if (data.id) {
            return this.apiService.put("/invoices/" + data.id + "?options[invoice_number]=1&options[sign_later]=1", { invoice: data });
        }
        return this.apiService.post('/invoices?options[invoice_number]=1&options[sign_later]=1', { invoice: data });
    };
    StudentInvoiceService.prototype.edit = function (id, data, invoice_number) {
        if (invoice_number === void 0) { invoice_number = false; }
        var url = invoice_number ? "/invoices/" + id + "?options[invoice_number]=1" : "/invoices/" + id;
        return this.apiService.put(url, { invoice: data });
    };
    StudentInvoiceService.prototype.xuatHoaDon = function (data) {
        return this.apiService.post('/invoices-export', { invoice: data });
    };
    StudentInvoiceService.prototype.xuatPhieuThu = function (data) {
        return this.apiService.post('/invoices/batch/receipt?options[invoice_number]=1', { invoice: data });
    };
    StudentInvoiceService.prototype.view = function (id) {
        return this.apiService.post('/invoices-view', { invoice: { ids: [id] } });
    };
    StudentInvoiceService.prototype.inChuyenDoi = function (id) {
        return this.apiService.post('/invoices-conversion', { invoice: { ids: [id] } });
    };
    StudentInvoiceService.prototype.giuSo = function (data) {
        return this.apiService.post('/invoices-keep-number', { invoice: data });
    };
    StudentInvoiceService.prototype.getTemplate = function () {
        return this.apiService.get("/invoice-releases?includes[]=template&filter_groups[0][filters][0][key]=release_status&filter_groups[0][filters][0][value]=DA_TB_THUE&filter_groups[0][filters][0][operator]=eq&filter_groups[0][filters][1][key]=start_using_date&filter_groups[0][filters][1][value]=" + this.currentDate + "&filter_groups[0][filters][1][operator]=lte"); //&filter_groups[0][filters][2][key]=number_exists&filter_groups[0][filters][2][value]=1&filter_groups[0][filters][2][operator]=eq
    };
    StudentInvoiceService.prototype.preview = function (data) {
        return this.apiService.post('/invoices-preview', {
            invoices: [
                data
            ]
        });
    };
    StudentInvoiceService.prototype.xemHoaDonInvoiceImport = function (ids) {
        return this.apiService.post('/invoices-view', { invoice: { ids: ids } });
    };
    StudentInvoiceService.prototype.tuchoi = function (data) {
        return this.apiService.post('/invoices/refuse', { invoice: data });
    };
    StudentInvoiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["CoreService"]])
    ], StudentInvoiceService);
    return StudentInvoiceService;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/student-invoice.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/student-invoice/student-invoice.module.ts ***!
  \*******************************************************************/
/*! exports provided: StudentInvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInvoiceModule", function() { return StudentInvoiceModule; });
/* harmony import */ var _components_form_student_invoive_form_student_invoive_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form-student-invoive/form-student-invoive.component */ "./src/app/modules/student-invoice/components/form-student-invoive/form-student-invoive.component.ts");
/* harmony import */ var _modules_student_invoice_student_invoice_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/student-invoice/student-invoice.routing */ "./src/app/modules/student-invoice/student-invoice.routing.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/app/modules/student-invoice/shared/index.ts");
/* harmony import */ var _components_list_student_list_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list-student/list-student.component */ "./src/app/modules/student-invoice/components/list-student/list-student.component.ts");
/* harmony import */ var _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-grip/product-grip.component */ "./src/app/modules/student-invoice/components/product-grip/product-grip.component.ts");
/* harmony import */ var _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/send-invoices/send-invoices.component */ "./src/app/modules/student-invoice/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/send-mail/send-mail.component */ "./src/app/modules/student-invoice/components/send-mail/send-mail.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/student-invoice/components/index/index.component.ts");
/* harmony import */ var _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/modules/vat-shared/components/view-attach-file/view-attach-file.component */ "./src/app/shared/modules/vat-shared/components/view-attach-file/view-attach-file.component.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _components_student_invoice_grip_student_invoice_grip_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/student-invoice-grip/student-invoice-grip.component */ "./src/app/modules/student-invoice/components/student-invoice-grip/student-invoice-grip.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _modules_student_invoice_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @modules/student-invoice/components/invoice/invoice.component */ "./src/app/modules/student-invoice/components/invoice/invoice.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_invoices_duplicates_invoices_duplicates_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/invoices-duplicates/invoices-duplicates.component */ "./src/app/modules/student-invoice/components/invoices-duplicates/invoices-duplicates.component.ts");
/* harmony import */ var _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/sign-many/sign-many.component */ "./src/app/modules/student-invoice/components/sign-many/sign-many.component.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// library


// general























var StudentInvoiceModule = /** @class */ (function () {
    function StudentInvoiceModule() {
    }
    StudentInvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _modules_student_invoice_student_invoice_routing__WEBPACK_IMPORTED_MODULE_1__["StudentInvoiceRouting"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_21__["vTranslateModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_11__["SomeModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_9__["devextremeModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_15__["DxLookupModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_14__["TagInputModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_11__["VatSharedModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_15__["DxDateBoxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_15__["DxDataGridModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_28__["NgxSpinnerModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"],
                _components_form_student_invoive_form_student_invoive_component__WEBPACK_IMPORTED_MODULE_0__["FormStudentInvoiveComponent"],
                _modules_student_invoice_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_22__["InvoiceComponent"],
                _components_list_student_list_student_component__WEBPACK_IMPORTED_MODULE_3__["ListStudentComponent"],
                _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_4__["ProductGripComponent"],
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_5__["SendInvoicesComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_6__["SendMailComponent"],
                _components_student_invoice_grip_student_invoice_grip_component__WEBPACK_IMPORTED_MODULE_19__["StudentInvoiceGripComponent"],
                _components_invoices_duplicates_invoices_duplicates_component__WEBPACK_IMPORTED_MODULE_24__["InvoicesDuplicatesComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_25__["SignManyComponent"],
            ],
            entryComponents: [
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_5__["SendInvoicesComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_6__["SendMailComponent"],
                _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_13__["ViewAttachFileComponent"],
                _components_invoices_duplicates_invoices_duplicates_component__WEBPACK_IMPORTED_MODULE_24__["InvoicesDuplicatesComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_25__["SignManyComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_11__["SendDataForTaxComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_11__["ViewInvoiceMultipageComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_11__["SignatureOffComponent"],
                _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_30__["PreviewInvoiceComponent"]
            ],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_2__["StudentInvoiceService"],
                _shared__WEBPACK_IMPORTED_MODULE_2__["InvoiceResolver"],
                _shared__WEBPACK_IMPORTED_MODULE_2__["ShowInvoiceResolver"],
                _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_16__["VatDeactivateGuard"],
                _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_17__["ConfirmService"],
                _modules_lists_shared__WEBPACK_IMPORTED_MODULE_18__["ListsService"],
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_10__["VatService"],
                _modules_template_shared__WEBPACK_IMPORTED_MODULE_26__["TemplateService"],
                _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_27__["NotifyService"],
                _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_29__["MyBsModalService"]
            ]
        })
    ], StudentInvoiceModule);
    return StudentInvoiceModule;
}());



/***/ }),

/***/ "./src/app/modules/student-invoice/student-invoice.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/student-invoice/student-invoice.routing.ts ***!
  \********************************************************************/
/*! exports provided: StudentInvoiceRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInvoiceRouting", function() { return StudentInvoiceRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_student_invoice_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/student-invoice/components/index/index.component */ "./src/app/modules/student-invoice/components/index/index.component.ts");
/* harmony import */ var _modules_student_invoice_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/student-invoice/components/invoice/invoice.component */ "./src/app/modules/student-invoice/components/invoice/invoice.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/modules/student-invoice/shared/index.ts");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _modules_student_invoice_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    {
        path: 'create',
        component: _modules_student_invoice_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["VatDeactivateGuard"]],
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceResolver"] },
        data: { brec: 'create_invoice' }
    },
    {
        path: 'create-receipts',
        component: _modules_student_invoice_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["VatDeactivateGuard"]],
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceResolver"] },
        data: { brec: 'create_receipts', type: "08HSPT" }
    },
    {
        path: 'edit',
        component: _modules_student_invoice_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["VatDeactivateGuard"]],
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_4__["ShowInvoiceResolver"] },
        data: { brec: 'invoice_details' }
    },
    {
        path: 'edit-receipts',
        component: _modules_student_invoice_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["VatDeactivateGuard"]],
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_4__["ShowInvoiceResolver"] },
        data: { brec: 'receipts_details', type: "08HSPT" }
    },
    {
        path: ':invoiceId',
        component: _modules_student_invoice_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["VatDeactivateGuard"]],
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_4__["ShowInvoiceResolver"] },
        data: { brec: 'invoice_details' }
    },
];
var StudentInvoiceRouting = /** @class */ (function () {
    function StudentInvoiceRouting() {
    }
    StudentInvoiceRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StudentInvoiceRouting);
    return StudentInvoiceRouting;
}());



/***/ }),

/***/ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/vat/deactivate/vat-deactivate.guard.ts ***!
  \****************************************************************/
/*! exports provided: VatDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatDeactivateGuard", function() { return VatDeactivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VatDeactivateGuard = /** @class */ (function () {
    function VatDeactivateGuard() {
    }
    VatDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate && component.canDeactivate();
    };
    VatDeactivateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], VatDeactivateGuard);
    return VatDeactivateGuard;
}());



/***/ })

}]);
//# sourceMappingURL=student-invoice-student-invoice-module.js.map