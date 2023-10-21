(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["handle-bills-handle-bills-module"],{

/***/ "./src/app/modules/handle-bills/components/adjust/adjust-bill/adjust-bill.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/adjust/adjust-bill/adjust-bill.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"invoice-container\">\r\n    <!-- phần form thông tin -->\r\n    <app-adjust-form-bill (adjustmentObjectChange)=\"adjustmentObjectChange($event)\" [frmData]=\"frmData\" [oldForm]=\"oldForm\" \r\n      [bill_products]=\"bill_products\" [formatter]=\"formatter\"\r\n      [listTemplate]=\"select.templatesTT78\" [isHdGTGT]=\"isHdGTGT\"\r\n      [_oTemplateTT78]=\"_oTemplateTT78\" [infoDangKy]=\"infoDangKy\" [ttDaXuatHoaDon]=\"ttDaXuatHoaDon\"\r\n      (onTemplateTypeChange)=\"onTemplateTypeChange($event)\" (onRefreshForm) = \"onRefreshForm()\">\r\n    </app-adjust-form-bill>\r\n\r\n    <!-- table product -->\r\n    <app-adjust-product-grip [dataSource]=\"dataSource\" \r\n     [bill_products]=\"bill_products\"\r\n     [listTemplate]=\"select.templatesTT78\" [isHdGTGT]=\"isHdGTGT\"\r\n      [formatter]=\"formatter\" [oldForm]=\"oldForm\" [frmData]=\"frmData\"\r\n      [invoiceTemplateSelect] = \"invoiceTemplateSelect\"\r\n      [_oTemplateTT78]=\"_oTemplateTT78\">\r\n    </app-adjust-product-grip>\r\n\r\n    <div class=\"table-footer\">\r\n      <!-- Tổng tiền -->\r\n      <div class=\"table-footer-1\">\r\n        <div class=\"vat amount-table-footer\">\r\n          <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [value]=\"frmData.amount_after_vat\" step=\"0\"\r\n            [format]=\"formatter.tong_tien\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <!-- Tiền thuế -->\r\n      <div class=\"table-footer-2\" *ngIf=\"isHdGTGT\">\r\n        <div class=\"vat amount-vat-table-footer\">\r\n          <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [value]=\"frmData.amount_vat\" step=\"0\"\r\n            [format]=\"formatter.tien_thue\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <!-- Thành tiền -->\r\n      <div class=\"table-footer-3\">\r\n        <div class=\"vat amount-after-vat-table-footer\">\r\n          <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [value]=\"frmData.amount\" step=\"0\" [format]=\"formatter.thanh_tien\"\r\n            [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top : 20px\">\r\n      <div class=\"col-md-5\">\r\n      <!-- Giảm trừ nghị quyết 43 -->\r\n      <!-- Tỷ lệ % doanh thu -->\r\n      <div class=\"col-md-12\" style=\"margin-top:5px\">\r\n        <div *ngIf=\"frmData.is_resolution_43\" style=\"display: inline-flex;margin-top:5px\">\r\n          <p style=\"margin-right: 5px;margin-top: 5px\">Tỷ lệ % trên doanh thu </p>\r\n\r\n          <div class=\"toggle normal\" style=\"display: flex; align-items: center; margin-top: -6px;\">\r\n            <img id=\"link14\" style=\"cursor: pointer;padding-left: 2px;padding-right: 7px\"\r\n              src=\"assets\\img\\icons\\Icon_Information.png\" (click)=\"guideSales()\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n          </div>\r\n          <dx-popover target=\"#link14\" position=\"top\" [width]=\"350\" [(visible)]=\"isDisplayGuideSale\">\r\n            <div *dxTemplate=\"let data of 'content'\">\r\n              <p>- 1% : Phân phối, cung cấp hàng hóa dịch vụ</p>\r\n              <p>- 5% : Dịch vụ xây dựng không bao thầu nguyên vật liệu</p>\r\n              <p>- 3% : Sản xuất, vận tải, dịch vụ có gắn với hàng hóa, xây dựng có bao thầu nguyên vật liệu</p>\r\n              <p>- 2% : Hoạt động kinh doanh khác</p>\r\n            </div>\r\n          </dx-popover>\r\n\r\n          <dx-number-box [width]=\"50\" [(value)]=\"frmData.sales_percentage\"\r\n            (onValueChanged)=\"onChangeSalePercen($event)\"></dx-number-box>\r\n          <p style=\"margin-left: 5px;margin-top: 5px\"> %</p>\r\n        </div>\r\n      </div>\r\n      <!-- Đã giảm 20% -->\r\n      <div class=\"col-md-12\" style=\"margin-top:5px\">\r\n        <div *ngIf=\"frmData.is_resolution_43\" style=\"display: inline-flex;margin-top:5px\">\r\n          <p style=\"margin-right: 5px;margin-top: 5px;width: 100px\">Đã giảm </p>\r\n          <dx-number-box [format]=\"formatter.tong_tien\" [(value)]=\"frmData.money_resolution_43\"\r\n            [readOnly]=\"!frmData.auto_value\"></dx-number-box>\r\n          <p style=\"margin-left: 5px\"> {{ _translate.THONG_TIN.tinh_thue_nq101}}</p>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <!-- Cộng tiền hàng -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount\" tabIndex=\"-1\"\r\n              [format]=\"formatter.thanh_tien\" [disabled]=\"!frmData.auto_value\" step=\"0\"\r\n              (onValueChanged)=\"onNumberChange()\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Tiền thuế -->\r\n        <div class=\"dx-field\" *ngIf=\"isHdGTGT\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount_vat\" [format]=\"formatter.tien_thue\"\r\n              [disabled]=\"!frmData.auto_value\" tabIndex=\"-1\" step=\"0\" (onKeyDown)=\"keyDown($event)\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Cộng chiết khấu -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_amount_discount}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount_discount\" tabIndex=\"-1\" step=\"0\"\r\n              [format]=\"formatter.tien_chiet_khau\" (onValueChanged)=\"onNumberChange()\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <!-- Tổng tiền thanh toán -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_after_vat}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount_after_vat\"\r\n              [format]=\"formatter.tong_tien\" [disabled]=\"!frmData.auto_value\" tabIndex=\"-1\" step=\"0\"\r\n              (onValueChanged)=\"totalPaymentChange($event)\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Tiền mặt -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">Tiền mặt</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.cash\" [format]=\"formatter.tong_tien\"\r\n              tabIndex=\"-1\" step=\"0\" (onValueChanged)=\"cashChange($event)\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Trả lại khách -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">Trả lại khách</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.returns\" [format]=\"formatter.tong_tien\"\r\n              tabIndex=\"-1\" step=\"0\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top : 15px\">\r\n      <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-8\">\r\n        <!-- Số tiền bằng chữ -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\" style=\"width: 27%;\">{{ _translate.CONTROLL.LABEL.total_payment_in_word}}</div>\r\n          <div class=\"dx-field-value\" style=\"width: 73%;\">\r\n            <dx-text-box [(value)]=\"frmData.total_payment_word\" [disabled]=\"!frmData.auto_value\"\r\n              [readOnly]=\"ttDaXuatHoaDon\"></dx-text-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row button-action\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n          <!-- Xem trước hóa đơn -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.preview_invoice}}\" type=\"default\" (click)=\"preview()\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"view()\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.view_invoice}}\" type=\"default\"></dx-button>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n          <!-- Xuất hóa đơn -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" appScrollToInvalid text=\"{{ _translate.CONTROLL.BUTTON.export_invoice}}\"\r\n            [(icon)]=\"this._translate.ICONS.export_inv\" type=\"default\" validationGroup=\"formData\"\r\n            [useSubmitBehavior]=\"true\" (click)=\"eSubmit('XUAT')\">\r\n          </dx-button>\r\n         \r\n          <!-- Ghi tạm -->\r\n          <dx-button disableDoubleClick appScrollToInvalid text=\"{{ _translate.CONTROLL.BUTTON.save_temporary}}\" *ngIf=\"!ttDaXuatHoaDon\"\r\n            [(icon)]=\"this._translate.ICONS.save\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\"\r\n            (click)=\"eSubmit('GHI_TAM')\">\r\n          </dx-button>\r\n          \r\n          <!-- Đóng -->\r\n          <dx-button type=\"default\" appBackButton [(icon)]=\"this._translate.ICONS.come_back\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</form>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/adjust/adjust-bill/adjust-bill.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/adjust/adjust-bill/adjust-bill.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container{padding-top:15px}.after-table{margin-top:10px}::ng-deep .vat.total-payment-in-word{margin-top:15px}::ng-deep .vat.total-payment-in-word input{color:#000000;font-weight:bold;text-align:right}.vat.total-payment-in-word .dx-field-label{width:12%}.vat.total-payment-in-word .dx-field-value{width:88% !important}::ng-deep .vat.money-pull-right input{text-align:right}::ng-deep .pr-0.money-pull-right input{text-align:right}::ng-deep .prt-1.money-pull-right input{text-align:right}.vat.money-pull-right .dx-field-label{width:45%}.vat.money-pull-right .dx-field-value{width:55% !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}.button-action{margin-top:18px}.table-footer{height:40px;background:#E3E3E3;padding-top:3px}.table-footer .table-footer-1{display:inline-block;width:109px;float:right}.table-footer .table-footer-2{display:inline-block;width:120px;margin-right:32px;float:right}.table-footer .table-footer-3{display:inline-block;width:150px;margin-right:90px;float:right}.table-footer .table-footer-4{display:inline-block;width:109px;margin-right:190px;float:right}.dx-field-value.dx-widget,.dx-field-value:not(.dx-widget)>.dx-widget{height:30px}::ng-deep .nd92Notify .modal-content{width:80%}::ng-deep .mauhoadon .modal-content{width:67%}::ng-deep .mauhoadon43 .modal-content{width:72%}::ng-deep .prv-s-invoice .modal-content{border:0px;border-radius:0px}::ng-deep .v-s-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/adjust/adjust-bill/adjust-bill.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/adjust/adjust-bill/adjust-bill.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdjustBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustBillComponent", function() { return AdjustBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.model */ "./src/app/modules/bill-invoice/shared/bill.model.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _modules_handle_bills_shared_handlebill_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/handle-bills/shared/handlebill.service */ "./src/app/modules/handle-bills/shared/handlebill.service.ts");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _adjust_product_grip_adjust_product_grip_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../adjust-product-grip/adjust-product-grip.component */ "./src/app/modules/handle-bills/components/adjust/adjust-product-grip/adjust-product-grip.component.ts");
/* harmony import */ var _adjust_form_bill_adjust_form_bill_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../adjust-form-bill/adjust-form-bill.component */ "./src/app/modules/handle-bills/components/adjust/adjust-form-bill/adjust-form-bill.component.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
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

























var AdjustBillComponent = /** @class */ (function () {
    function AdjustBillComponent(route, billService, authService, cdRef, translate, confirmService, socketService, spinner, modalService, handleBillService, configsService, vPreviewInvService, customeModalService) {
        var _this = this;
        this.route = route;
        this.billService = billService;
        this.authService = authService;
        this.cdRef = cdRef;
        this.translate = translate;
        this.confirmService = confirmService;
        this.socketService = socketService;
        this.spinner = spinner;
        this.modalService = modalService;
        this.handleBillService = handleBillService;
        this.configsService = configsService;
        this.vPreviewInvService = vPreviewInvService;
        this.customeModalService = customeModalService;
        this.isShowHuyLenhDD = false;
        this.isCheckLenhDieuDong = false;
        this.frmData = new _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_14__["BillModel"](5);
        this.ttDaXuatHoaDon = false; // Trạng thái đã xuất hóa đơn hay chưa
        this.formatter = {};
        this.select = {};
        this.bill_products_old = [];
        this.formatNumber = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].numberInvoiceFormatDev;
        this.confirmCheckPreview = false;
        this.isHdGTGT = true;
        this.isAccessExportInv = false; //có quyền phê duyệt?
        this.productCodePattern = _config_pattern__WEBPACK_IMPORTED_MODULE_2__["pattern"].productCodePattern;
        this._oTemplateTT78 = {};
        this.isDisplayGuideSale = false;
        this.bills = []; //có thể dùng khi gửi mail sai sót(test lại sau)
        this.invoiceTemplateSelect = {};
        // sự kiện form
        this.totalPaymentChange = function (e) {
            _this.onNumberChange();
            _this.frmData.cash = _this.frmData.amount_after_vat;
            if (_this.frmData.auto_value) {
                _this.frmData.amount_after_vat = _this.frmData.total_payment;
                _this.frmData.returns = _this.frmData.cash - _this.frmData.amount_after_vat;
            }
            var currency_code = _this.frmData.currency_code;
            if (_this.configs.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            _this.doctienbangchu(e.value, currency_code);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    AdjustBillComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
        this.routeSub.unsubscribe();
    };
    //đc gọi khi thoát khỏi màn này và chuyển tới màn khác
    AdjustBillComponent.prototype.canDeactivate = function () {
        var _this = this;
        if (!this.checkDataFormChange(this.valueChange, this.frmData)) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_13__["Observable"](function (observer) {
                _this.confirmService.confirm().subscribe(function (value) {
                    switch (value) {
                        case 'yes':
                            _this.ghiTam().then(function (value1) {
                                observer.next(value1);
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
        return true;
    };
    AdjustBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        // kết nối websocket
        this.connectWebsocket();
        var currentUser = this.authService.getCurrentUser();
        var listpermissions = currentUser.user.permissions.split(',');
        this.configs = this.authService.getConfigs();
        this.infoDangKy = this.authService.getInfoRegister();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        this.formatter.display_int = this.configs.system_parameter.display_int;
        this.routeSub = this.route.data.subscribe(function (data) {
            // put data danh mục for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.select_provisions_on_accounts = data.init[1].DM_DINH_KHOAN;
            _this.select.payment_method_names = data.init[1].DM_HINH_THUC_THANH_TOAN;
            _this.select.vats = data.init[1].DM_TY_LE_VAT;
            _this.select.templatesTT78 = data.init[0];
            // if (temptTT78 && temptTT78.length > 0) {
            //   this.select.templatesTT78 = temptTT78.filter(p => p.is_invoice_with_code == this.infoDangKy.is_invoice_with_code);
            //   if (data.init[2] && Number.parseInt(data.init[2].invoice_number) > 0) {
            //     if (data.init[2].is_invoice_with_code != this.infoDangKy.is_invoice_with_code && data.init[2].xml_type != '1') {
            //       this.select.templatesTT78 = temptTT78.filter(p => p.is_invoice_with_code == data.init[2].is_invoice_with_code);
            //     }
            //   }
            // }
            _this.select.templatesTT78 = _this.select.templatesTT78.filter(function (p) { return (p.status == "HOAT_DONG" && p.template_code == data.init[2].template_code); });
            if (data.status === 'thaythemoi') {
                _this.khoiTaoKhiThemMoi(data.init[2]);
                _this.oldForm = data.init[2];
                _this.frmData.destroy_reason = "";
            }
            else {
                _this.khoiTaoKhiSua(data.init[2]);
                _this.oldForm = data.init[2].origin;
            }
            // sx sp
            _this.oldForm.bill_products = lodash__WEBPACK_IMPORTED_MODULE_11__["sortBy"](_this.oldForm.bill_products, function (item) { return parseInt(item.order); });
            if (_this.oldForm.origin) {
                _this.oldForm.origin.bill_products = lodash__WEBPACK_IMPORTED_MODULE_11__["sortBy"](_this.oldForm.origin.bill_products, function (item) { return parseInt(item.order); });
            }
            if (_this.oldForm.template_code == '1') {
                _this.isHdGTGT = true;
            }
            else {
                _this.isHdGTGT = false;
            }
            // sx giảm dần 
            _this.select.templatesTT78.sort(function (a, b) {
                var dateA = new Date(a.created_at);
                var dateB = new Date(b.created_at);
                return dateB - dateA;
            });
            if (_this.select.templatesTT78.length > 0) {
                _this._oTemplateTT78 = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](_this.select.templatesTT78[0]);
            }
            _this.select.templatesTT78.some(function (item) {
                if (item.value === _this.frmData.template_id) {
                    _this.is_multi_vat = item.is_multi_vat;
                    _this.invoiceTemplateSelect = item;
                    _this._oTemplateTT78 = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](item);
                    return true;
                }
            });
            // this.frmData.template_id = this._oTemplateTT78.value;
            _this.frmData.is_resolution_43 = false;
        });
        var obj2 = listpermissions.filter(function (p) { return p === 'phe_duyet'; });
        if (obj2.length > 0) {
            this.isAccessExportInv = true;
        }
        else {
            this.isAccessExportInv = false;
        }
    };
    AdjustBillComponent.prototype.khoiTaoKhiSua = function (data) {
        var inv_products = this.frmData.setInvoice_products_data(data.bill_products);
        // khởi tạo lưới từ dữ liệu sửa
        this.bill_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: 'id',
            data: inv_products
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.bill_products
        });
        // khởi tạo dữ liệu form
        this.frmData.fillFormData(data);
        this.frmData.adjustment_type = 5;
        // cấu hình thập phân thêm mới
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
        // co cho sua luoi hang hoa ko
        var temp = this.frmData.adjustment_form + '_' + this.frmData.adjustment_object;
        this.productGrip.gripAllowEdit = true;
        if (temp === 'TANG_HH_DV' || temp === 'GIAM_HH_DV') {
            this.setContentProductNameV2('', 'select');
        }
    };
    AdjustBillComponent.prototype.khoiTaoKhiThemMoi = function (data) {
        // khởi tạo mới lưới
        var inv_products = this.frmData.bill_products_data();
        // inv_products.forEach(item => {
        //   item.vat = item.vat != null ? item.vat.toString() : null;
        // });
        this.bill_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: 'id',
            data: inv_products
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.bill_products
        });
        this.bill_products_old = data.bill_products;
        // khởi tạo dữ liệu form
        this.frmData.fillFormDieuChinh(data);
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
    };
    AdjustBillComponent.prototype.ngAfterViewInit = function () {
        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.status) != "" && this.frmData.status != _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam) {
            this.disablleScreen();
            this.cdRef.detectChanges();
        }
        this.setDataSessionStorage(this.frmData);
    };
    AdjustBillComponent.prototype.setDataSessionStorage = function (value) {
        this.valueChange = JSON.stringify(value);
    };
    AdjustBillComponent.prototype.disablleScreen = function () {
        this.formInvoice.readonlyAllForm();
        this.productGrip.ttDaXuatHoaDon = true;
        this.ttDaXuatHoaDon = true;
    };
    AdjustBillComponent.prototype.sendInvoice = function (xml_string) {
        var _this = this;
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        }, 20);
        var xmlInvoice = "";
        var sub = this.billService.sendInvoice({
            id: this.frmData.id,
            xml_string: xml_string,
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.info_message = rs.data.info_message;
                var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_10__(rs.data.bill_sign_date).format('YYYY-MM-DD HH:mm:ss');
                if (_this.info_message && _this.info_message.message) {
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.info_message.message.message);
                    if (xmlInvoice != "") {
                        _this.kyThongDiep(xmlInvoice, bill_sign_date);
                    }
                }
            }
            else
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    AdjustBillComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                if (data.Data.Name === 'hoadon.xml') {
                    if (_this.ttDaXuatHoaDon)
                        _this.sendData_TBSaiSot(data.Data.Content);
                    else
                        _this.sendInvoice(data.Data.Content);
                }
                else if (data.Data.Name === 'thongdiep.xml') {
                    _this.goiApiXuatHoaDon(data.Data.Content);
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    if (_this.ttDaXuatHoaDon)
                        _this.getXml_TBSaiSot();
                    else {
                        _this.xuLiApiKhiXuat();
                    }
                }
            }
        });
    };
    AdjustBillComponent.prototype.eSubmit = function (type) {
        var _this = this;
        var checkValid = this.formInvoice.form.instance.validate();
        if (!checkValid.isValid) {
            return;
        }
        this.total_payment = "";
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        setTimeout(function () {
            _this.handleFormData();
            delete _this.frmData["note_view_on_bill"];
            if (type !== 'GHI_TAM') {
                if (!_this._validForm()) {
                    return;
                }
                if (!_core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_18__["InvoicesService"].checkTimeExportInv(_this.configs.system_parameter)) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_19__["String"].Format(_this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_10__(_this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_10__(_this.configs.system_parameter.time_end).format('HH:mm')), 'error');
                    return;
                }
            }
            else {
                if (!_this.checkProductCode()) {
                    return;
                }
            }
            if (_this.frmData.bill_options) {
                _this.frmData.bill_options.forEach(function (item) {
                    delete item['is_show'];
                    delete item['type'];
                    delete item['width'];
                    delete item['statusData'];
                    delete item['id'];
                    delete item['invoice_id'];
                });
            }
            if (_this.frmData.total_payment > 20000000 && (_this.frmData.payment_method_name === 'TM')) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng chọn HTTT chuyển khoản cho hóa đơn có giá trị lớn hơn 20 triệu đồng', 'error');
                return false;
            }
            if (!_this.isAccessExportInv && type === 'XUAT') {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.you_not_permissions, 'error');
                return false;
            }
            if (type === 'XUAT') {
                _this.processXuatHoaDon(type);
            }
            else {
                _this.processGhiTam();
            }
        }, 300);
    };
    AdjustBillComponent.prototype.processXuatHoaDon = function (type) {
        var _index = 0;
        var _isValid = true;
        var _lstInv = [];
        this.bill_products.load().then(function (dataSource) {
            _lstInv = dataSource.filter(function (p) { return p.product_name; });
        });
        for (var i = 0; i < _lstInv.length; i++) {
            if (_lstInv[i].amount > 0 && !_lstInv[i].vat && !_lstInv[i].is_refund_ticket) {
                _index = i;
                _isValid = false;
                break;
            }
        }
        if (!this.isHdGTGT)
            _isValid = true;
        if (!this.billService.checkVatMauHoaDon(_lstInv, this.is_multi_vat)) {
            return false;
        }
        if (!_isValid) {
            var result = _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('VAT không hợp lệ', 'error');
        }
        else {
            if (this.confirmCheckPreview) {
                this.xuatHoaDon();
                this.confirmCheckPreview = false;
            }
            else {
                this.previewBeforeExport(type);
                // if (this.configs.system_parameter.display_template_from_server)
                //   this.previewBeforeSubmit(type);
                // else
                //   this.previewBeforeSubmitFromClient(type);
            }
        }
    };
    AdjustBillComponent.prototype.previewBeforeExport = function (type) {
        var _this = this;
        this.handleFormData();
        var trang_thai = this._translate.THONG_TIN.xuat_hoa_don;
        var du_lieu = this.billService.taodulieuXemTruocMau(this.frmData);
        du_lieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
        var content_invoice = {
            du_lieu: du_lieu,
            ngay_hoa_don: "",
            trang_thai: trang_thai,
            tong_tien: "",
            title_invoice_type: this._translate.THONG_TIN.ban_du_thao_hoa_don.toUpperCase(),
            note_warn: this._translate.THONG_TIN.luu_y_truoc_khi_xuat,
            is_display_img_note: true,
            text_ngay_hoa_don: this._translate.THONG_TIN.ngay_hoa_don,
            text_tong_tien: this._translate.THONG_TIN.tong_tien,
            question_again: this._translate.THONG_TIN.ban_co_chac_chan_xuat_hoa_don_khong
        };
        var initialState = {
            content_invoice: content_invoice,
        };
        this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_22__["PreviewInvoiceComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-xl prv-s-invoice v-s-invoice',
            initialState: initialState
        });
        var subModal = this.customeModalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].actionHander.DongY) {
                _this.confirmCheckPreview = true;
                _this.eSubmit(type);
            }
            subModal.unsubscribe();
        });
    };
    AdjustBillComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            var ListSerialNumber = "DSCKS";
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
            }
            var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD HH:mm:ss');
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
        }
    };
    /* Xử lý ghi tạm hóa đơn */
    AdjustBillComponent.prototype.processGhiTam = function () {
        this.ghiTam();
    };
    AdjustBillComponent.prototype.ghiTam = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.productGrip._tinhGiaTri();
                        if (!!this.frmData.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.billService.addNew(this.frmData, false).subscribe(function (res) {
                                if (res.status === 'success') {
                                    _this.frmData.id = res.data.id;
                                    // this.isDisable = true;
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Ghi tạm hóa đơn thành công', 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.billService.edit(this.frmData.id, this.frmData, false).subscribe(function (res) {
                            if (res.status === 'success') {
                                _this.frmData.id = res.data.id;
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Ghi tạm hóa đơn thành công', 'success');
                                return true;
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                return false;
                            }
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    /* Kiểm tra Mã hàng phải nhập không dấu, không chứa ký tự đặc biệt và tối đa 50 ký tự */
    AdjustBillComponent.prototype.checkProductCode = function () {
        var isValid = true;
        var _lst = this.frmData.bill_products.filter(function (p) { return p.product_name; });
        if (_lst.length > 0) {
            for (var i = 0; i < _lst.length; i++) {
                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_lst[i].product_code) != "" && !this.productCodePattern.test(_lst[i].product_code)) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.VALIDATION.required_productCode, 'error', 5000);
                    this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(i, 'product_code'));
                    return false;
                }
            }
        }
        return isValid;
    };
    AdjustBillComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        this.productGrip._tinhGiaTri();
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var xmlInvoice = "";
        if (!this.frmData.id) {
            var sub_1 = this.billService.addNew(this.frmData, true).subscribe(function (res) {
                if (res.status === 'success') {
                    _this.frmData.bill_number = res.data.bill_number;
                    _this.frmData.bill_date = moment__WEBPACK_IMPORTED_MODULE_10__(res.data.bill_date).format('YYYY-MM-DD HH:mm:ss'); // moment(rs.data.invoice_date).format('DD/MM/YYYY');
                    var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_10__(res.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.verify_code = res.data.verify_code;
                    _this.frmData.id = res.data.id;
                    xmlInvoice = res.data.xml_string;
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                        _this.disablleScreen();
                    }
                    else {
                        // Người bán ký
                        if (_this.configs.system_parameter.is_seller_sign_bill)
                            _this.xuLyKiFile(xmlInvoice, bill_sign_date);
                        else {
                            _this.info_message = res.data.info_message;
                            if (_this.info_message && _this.info_message.message) {
                                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.info_message.message.message);
                                if (xmlInvoice != "") {
                                    _this.kyThongDiep(xmlInvoice, bill_sign_date);
                                }
                            }
                        }
                    }
                }
                else {
                    _this.confirmCheckPreview = false;
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else {
            var sub_2 = this.billService.edit(this.frmData.id, this.frmData, true).subscribe(function (res) {
                if (res.status === 'success') {
                    _this.frmData.bill_number = res.data.bill_number;
                    _this.frmData.bill_date = moment__WEBPACK_IMPORTED_MODULE_10__(res.data.bill_date).format('YYYY-MM-DD HH:mm:ss'); // moment(rs.data.invoice_date).format('DD/MM/YYYY');
                    _this.verify_code = res.data.verify_code;
                    var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_10__(res.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.frmData.id = res.data.id;
                    xmlInvoice = res.data.xml_string;
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                        _this.disablleScreen();
                    }
                    else {
                        if (_this.configs.system_parameter.is_seller_sign_bill)
                            _this.xuLyKiFile(xmlInvoice, bill_sign_date);
                        else {
                            _this.info_message = res.data.info_message;
                            if (_this.info_message && _this.info_message.message) {
                                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.info_message.message.message);
                                if (xmlInvoice != "") {
                                    _this.kyThongDiep(xmlInvoice, bill_sign_date);
                                }
                            }
                        }
                    }
                }
                else {
                    _this.confirmCheckPreview = false;
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_2.unsubscribe();
            });
        }
    };
    AdjustBillComponent.prototype.kyThongDiep = function (xmlInvoice, signDate) {
        var _this = this;
        var ListSerialNumber = "DSCKS";
        var nodeSign = "//TDiep/CKSNNT";
        if (this.infoDangKy && this.infoDangKy.registration_signature) {
            var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
            if (signatures && signatures.length > 0)
                ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
        }
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'thongdiep.xml', nodeSign, signDate, 'MessageData', ListSerialNumber, true);
    };
    AdjustBillComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        var nodeSign = "//HDon/DSCKS/NBan";
        var ListSerialNumber = "DSCKS";
        if (this.infoDangKy && this.infoDangKy.registration_signature) {
            var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
            if (signatures && signatures.length > 0)
                ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
        }
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', nodeSign, signDate, 'InvoiceData', ListSerialNumber, true);
    };
    AdjustBillComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        if (this.info_message && this.info_message.message) {
            setTimeout(function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            }, 20);
            var sub_3 = this.billService.sendMessage({
                id: this.frmData.id,
                info_message: {
                    message: {
                        message: xml_string,
                        message_code: this.info_message.message.message_code
                    },
                    tcntCode: this.info_message.tcntCode,
                    messageCodeType: this.info_message.messageCodeType
                }
            }).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.disablleScreen();
                    // cấu hình tự động gửi thông báo sai sót
                    if (_this.configs.system_parameter.enable_send_wrong_process) {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing))
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                        else
                            _this.startProcess_TBSaiSot();
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_3.unsubscribe();
            });
        }
    };
    AdjustBillComponent.prototype.startProcess_TBSaiSot = function () {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.getXml_TBSaiSot();
        }
        else {
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var ListSerialNumber = "DSCKS";
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
            }
            else
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
        }
    };
    AdjustBillComponent.prototype.getXml_TBSaiSot = function () {
        var _this = this;
        var bills = [];
        var object = new Object;
        object["tax_authority_code"] = this.oldForm.tax_authority_code; //Mã CQT cấp
        object["template_code"] = this.oldForm.template_code;
        object["bill_series"] = this.oldForm.bill_series;
        object["bill_date"] = this.oldForm.bill_date;
        object["bill_number"] = this.oldForm.bill_number;
        object["reason"] = this.frmData.destroy_reason;
        object["notification_nature"] = "2"; //Tính chất thông báo là thay thế
        object["type_apply_bill"] = 1; // Loại áp dụng HĐ (1: tt78)
        object["bill_id"] = this.oldForm.id;
        bills.push(object);
        var data = {
            notification_type: 1,
            bills: bills
        };
        var xmlInvoice = "";
        var sub = this.handleBillService.getXmlInvoiceWrong(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                xmlInvoice = rs.data.xml_file;
                _this.bills = rs.data.bills;
                var sign_date = moment__WEBPACK_IMPORTED_MODULE_10__(rs.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                if (xmlInvoice != "") {
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing))
                        _this.sendData_TBSaiSot(xmlInvoice);
                    else
                        _this.signXml_TBSaiSot(xmlInvoice, sign_date);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    AdjustBillComponent.prototype.signXml_TBSaiSot = function (xmlInvoice, signDate) {
        var _this = this;
        var nodeSign = "//TBao/DSCKS/NNT";
        var ListSerialNumber = "DSCKS";
        if (this.infoDangKy && this.infoDangKy.registration_signature) {
            var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
            if (signatures && signatures.length > 0)
                ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
        }
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', nodeSign, signDate, 'NotificationData', ListSerialNumber, true);
    };
    AdjustBillComponent.prototype.sendData_TBSaiSot = function (xml_string) {
        var _this = this;
        var subXuatHoaDon = this.handleBillService.sendXmlInvoiceWrong({
            xml_file: xml_string,
            bills: this.bills
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            subXuatHoaDon.unsubscribe();
        });
    };
    AdjustBillComponent.prototype.checkDataFormChange = function (dataChange, dataForm) {
        var dataBefore = JSON.parse(dataChange);
        var dataAfter = JSON.parse(JSON.stringify(dataForm));
        return lodash__WEBPACK_IMPORTED_MODULE_11__["isEqual"](dataBefore, dataAfter);
    };
    AdjustBillComponent.prototype.onNumberChange = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._calTotalMoney(this.frmData, this.formatter, !this.frmData.auto_value);
    };
    AdjustBillComponent.prototype.cashChange = function (e) {
        if (e.value) {
            this.frmData.returns = this.frmData.cash - this.frmData.amount_after_vat;
        }
    };
    AdjustBillComponent.prototype.onChangeSalePercen = function (e) {
        var _this = this;
        this.configs.system_parameter.value_rate_percent = e.value;
        var data = {
            config: {
                value: JSON.stringify(this.configs.system_parameter)
            }
        };
        this.configsService.update(this.configs.id.system_parameter, data).subscribe(function (response) {
            if (response.status == "success") {
                _this.configsService.getAll().subscribe(function (res) {
                    if (res.data && res.data.configs)
                        _this.authService.setConfigs(res.data.configs);
                    _this.configs = _this.authService.getConfigs();
                });
            }
            else {
            }
        }, function (err) { }, function () {
        });
        if (this.productGrip)
            this.productGrip._tinhGiaTri();
    };
    AdjustBillComponent.prototype.preview = function () {
        var _this = this;
        setTimeout(function () {
            _this.handleFormData();
            if (!_this._validForm()) {
                return;
            }
            var data = _this.billService.taodulieuXemTruocMau(_this.frmData);
            data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            _this.vPreviewInvService.xemMau(data);
        }, 300);
    };
    AdjustBillComponent.prototype.handleFormData = function () {
        var _this = this;
        if (this.frmData.bill_options) {
            this.frmData.bill_options.forEach(function (item) {
                delete item['is_show'];
                delete item['type'];
                delete item['width'];
                delete item['statusData'];
            });
        }
        this.frmData.adjustment_type = 5;
        this.frmData.origin_id = this.oldForm.id;
        this.frmData.total_payment = this.frmData.amount_after_vat;
        this.frmData.currency_code = 'VND';
        this.frmData.currency_rate = 1;
        // this.frmData.buyer_address = null;
        if (!this.frmData.auto_value) {
            delete this.frmData.tax_information;
        }
        if (!this.isHdGTGT) {
            delete this.frmData.tax_information;
        }
        if (!this.frmData.tax_information)
            delete this.frmData.tax_information;
        if (this.frmData.tax_information) {
            this.frmData.tax_information.forEach(function (item) {
                delete item.bill_id;
                delete item.id;
            });
        }
        this.deleteProperties();
        var bill_products = [];
        this.bill_products.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                delete item.error;
                delete item.price_after_vat;
                delete item.number_real_import;
                delete item.number_real_export;
                delete item.amount_without_discount;
                delete item.price_after_discount;
                if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                    // if (VStringService._getValueToString(this.pkInvoiceCurrent) != "")
                    if ((_this.frmData.adjustment_form === 'TANG' && _this.frmData.adjustment_object === 'HH_DV') || (_this.frmData.adjustment_form == 'GIAM' && _this.frmData.adjustment_object === 'HH_DV'))
                        item.row_content = _this.rowContentInInvoiceProduct(item, _this.frmData.adjustment_form);
                    else
                        item.row_content = item.product_name;
                    item.id = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].makeid();
                    bill_products.push(item);
                }
            });
            _this.frmData.bill_products = bill_products;
            _this.frmData["note_view_on_bill"] = "Ho\u00E1 \u0111\u01A1n n\u00E0y \u0111i\u1EC1u ch\u1EC9nh cho ho\u00E1 \u0111\u01A1n" + " " + ("s\u1ED1 " + _this.oldForm.bill_number + ", m\u1EABu s\u1ED1 " + _this.oldForm.template_code + ", k\u00FD hi\u1EC7u " + _this.oldForm.bill_series + " ng\u00E0y " + moment__WEBPACK_IMPORTED_MODULE_10__(_this.oldForm.bill_date).format('DD/MM/YYYY'));
            _this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
        });
        this.frmData.amount = this.frmData.amount ? this.frmData.amount : 0;
        this.frmData.amount_discount = this.frmData.amount_discount ? this.frmData.amount_discount : 0;
        this.frmData.cash = this.frmData.cash ? this.frmData.cash : 0;
        this.frmData.returns = this.frmData.returns ? this.frmData.returns : 0;
        this.frmData.total_payment = this.frmData.total_payment ? this.frmData.total_payment : 0;
        this.frmData.amount_after_vat = this.frmData.amount_after_vat ? this.frmData.amount_after_vat : 0;
    };
    AdjustBillComponent.prototype.rowContentInInvoiceProduct = function (row, status) {
        // hđ bán hàng
        var status_view = (status === 'TANG') ? 'tăng' : 'giảm';
        var str, temp, quantity, price;
        var bill_products = [];
        if (this.oldForm.origin) {
            bill_products = this.oldForm.origin.bill_products;
        }
        else {
            bill_products = this.oldForm.bill_products;
        }
        if (this.oldForm.template_code == '2') {
            bill_products.some(function (item) {
                if (item.product_name === row.product_name) {
                    temp = item;
                    return true;
                }
            });
            if (temp.quantity !== row.quantity) {
                quantity = true;
            }
            if (temp.price !== row.price) {
                price = true;
            }
            if (quantity === true || price === true) {
                str = "\u0110i\u1EC1u ch\u1EC9nh " + status_view + " " + (quantity ? 'Số lượng, ' : '') + (price ? 'Đơn giá, ' : '') + "th\u00E0nh ti\u1EC1n c\u1EE7a m\u1EB7t h\u00E0ng";
            }
            else {
                str = "\u0110i\u1EC1u ch\u1EC9nh " + status_view + " S\u1ED1 l\u01B0\u1EE3ng, \u0110\u01A1n gi\u00E1, th\u00E0nh ti\u1EC1n c\u1EE7a m\u1EB7t h\u00E0ng";
            }
            return str + (" " + row.product_name);
        }
        else if (this.oldForm.template_code == '1') {
            var vat = void 0;
            bill_products.some(function (item) {
                if (item.product_name === row.product_name) {
                    temp = item;
                    return true;
                }
            });
            if (temp.quantity !== row.quantity) {
                quantity = true;
            }
            if (temp.price !== row.price) {
                price = true;
            }
            if (temp.vat !== row.vat) {
                vat = true;
            }
            var vat_view = ((temp.vat === -1 || temp.vat === 0 || !temp.vat) && vat !== true) ? '' : ', tiền thuế';
            if (vat) {
                str = "\u0110i\u1EC1u ch\u1EC9nh " + status_view + " thu\u1EBF su\u1EA5t v\u00E0 ti\u1EC1n thu\u1EBF GTGT c\u1EE7a m\u1EB7t h\u00E0ng";
            }
            else if (quantity === true || price === true) {
                str = "\u0110i\u1EC1u ch\u1EC9nh " + status_view + " " + (quantity ? 'Số lượng, ' : '') + (price ? 'Đơn giá, ' : '') + "th\u00E0nh ti\u1EC1n" + vat_view + " c\u1EE7a m\u1EB7t h\u00E0ng";
            }
            else {
                str = "\u0110i\u1EC1u ch\u1EC9nh " + status_view + " S\u1ED1 l\u01B0\u1EE3ng, \u0110\u01A1n gi\u00E1, th\u00E0nh ti\u1EC1n, thu\u1EBF su\u1EA5t" + vat_view + " c\u1EE7a m\u1EB7t h\u00E0ng";
            }
            return str + (" " + row.product_name);
        }
    };
    AdjustBillComponent.prototype.guideSales = function () {
        this.isDisplayGuideSale = !this.isDisplayGuideSale;
    };
    AdjustBillComponent.prototype.onTemplateTypeChange = function (e) {
        this.invoiceTemplateSelect = e;
        if (!this.invoiceTemplateSelect["is_discount"]) {
            this.bill_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    item.discount = null;
                    item.amount_discount = null;
                });
            });
            this.productGrip._tinhGiaTri();
        }
        this.is_multi_vat = e.is_multi_vat;
    };
    AdjustBillComponent.prototype._validForm = function () {
        var _isValid = true;
        var _lst = this.frmData.bill_products;
        if (!this.frmData.destroy_reason) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Lý do không được để trống", 'error');
            return false;
        }
        if (!this.billService.checkVatMauHoaDon(_lst, this.is_multi_vat)) {
            return false;
        }
        return _isValid;
    };
    AdjustBillComponent.prototype.view = function () {
        var ids = [];
        ids.push(this.frmData.id);
        if (this.configs.system_parameter.view_multi_invoice) {
            var data = this.billService.taodulieuXemMau(ids);
            data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(data);
        }
        else {
            var initialState = {
                items: ids,
                isXuatHD: false,
                hinhthucxuat: '',
                typeAction: _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].typeCode.xem_hoa_don_mtt,
                cssClass: 'modal-xl view-bill'
            };
            this.vPreviewInvService.xemMauPhanTrang(initialState);
        }
    };
    AdjustBillComponent.prototype.deleteProperties = function () {
        var frmDataBill = new _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_14__["BillModel"](5);
        var keyOfBill = Object.keys(frmDataBill);
        var keyOfFrm = Object.keys(this.frmData);
        // const formData = this.frmData;
        for (var i = 0; i <= keyOfFrm.length; i++) {
            var error = keyOfBill.includes(keyOfFrm[i]);
            if (!error) {
                delete this.frmData[keyOfFrm[i]];
            }
        }
        delete this.frmData.total_amount_vat;
    };
    AdjustBillComponent.prototype.onRefreshForm = function () {
        this.bill_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: 'id',
            data: this.frmData.bill_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.bill_products
        });
        this.productGrip.createUpdateEvent();
        this.frmData.total_payment = null;
        this.frmData.amount_after_vat = null;
        this.refreshTien();
    };
    AdjustBillComponent.prototype.refreshTien = function () {
        this.frmData.amount = null;
        this.frmData.amount_vat = null;
        this.frmData.amount_after_vat = null;
        this.frmData.amount_discount = null;
        this.frmData.cash = null;
        this.frmData.returns = null;
        this.frmData.total_payment = null;
        this.frmData.total_payment_word = "";
        this.frmData.total_amount_vat = null;
    };
    AdjustBillComponent.prototype.setContentProductNameV2 = function (value, type) {
        var _this = this;
        setTimeout(function () {
            if (type === 'text') {
                _this.productGrip.changeColumnProductNameToText();
            }
            else if (type === 'select') {
                _this.productGrip.changeColumnProductNameToSelect();
            }
        }, 0);
    };
    AdjustBillComponent.prototype.setContentProductName = function (value, type) {
        var _this = this;
        setTimeout(function () {
            if (_this.productGrip.dataSource.items()[0]) {
                if (!_this.configs.system_parameter.is_add_product_code) {
                    _this.productGrip.dataSource.items()[0].product_name = value;
                }
            }
            if (type === 'text') {
                _this.productGrip.changeColumnProductNameToText();
            }
            else if (type === 'select') {
                _this.productGrip.changeColumnProductNameToSelect();
            }
        }, 0);
    };
    AdjustBillComponent.prototype.adjustmentObjectChange = function (v) {
        var _this = this;
        this.doctienbangchu(this.frmData.total_payment, this.frmData.currency_code);
        var _noiDungDC = '';
        var isDC = false;
        switch (v) {
            case 'TANG_HH_DV':
                this.setContentProductNameV2('', 'select');
                this.productGrip.gripAllowEdit = true;
                this.productGrip.ShowAndHidePhuongThucDC(false, 'TANG_HH_DV');
                break;
            case 'TANG_KHAC_TANG':
                this.setContentProductName('', 'text');
                this.productGrip.gripAllowEdit = true;
                this.productGrip.ShowAndHidePhuongThucDC(false);
                break;
            case 'GIAM_HH_DV':
                this.setContentProductNameV2('', 'select');
                this.productGrip.gripAllowEdit = true;
                this.productGrip.ShowAndHidePhuongThucDC(false, 'GIAM_HH_DV');
                break;
            case 'GIAM_KHAC_GIAM':
                this.setContentProductName('', 'text');
                this.productGrip.gripAllowEdit = true;
                this.productGrip.ShowAndHidePhuongThucDC(false);
                break;
            case 'THONG_TIN_MST':
                isDC = true;
                if (this.frmData.buyer_tax_code && this.oldForm.buyer_tax_code !== this.frmData.buyer_tax_code) {
                    _noiDungDC = "\u0110i\u1EC1u ch\u1EC9nh m\u00E3 s\u1ED1 thu\u1EBF C\u00F4ng ty/\u0111\u01A1n v\u1ECB mua h\u00E0ng t\u1EEB " + this.oldForm.buyer_tax_code + " th\u00E0nh " + this.frmData.buyer_tax_code;
                }
                break;
            case 'THONG_TIN_KH_DC':
                isDC = true;
                if (this.frmData.customer_name && this.oldForm.customer_name !== this.frmData.customer_name) {
                    _noiDungDC = "\u0110i\u1EC1u ch\u1EC9nh t\u00EAn \u0111\u01A1n v\u1ECB mua h\u00E0ng t\u1EEB " + this.oldForm.customer_name + " th\u00E0nh " + this.frmData.customer_name;
                }
                if (this.frmData.buyer_name && this.oldForm.buyer_name !== this.frmData.buyer_name) {
                    if (_noiDungDC) {
                        _noiDungDC += '\n';
                    }
                    _noiDungDC += "\u0110i\u1EC1u ch\u1EC9nh t\u00EAn ng\u01B0\u1EDDi mua t\u1EEB " + this.oldForm.buyer_name + " th\u00E0nh " + this.frmData.buyer_name;
                }
                if (this.frmData.buyer_address && this.oldForm.buyer_address !== this.frmData.buyer_address) {
                    if (_noiDungDC) {
                        _noiDungDC += '\n';
                    }
                    _noiDungDC += "\u0110i\u1EC1u ch\u1EC9nh \u0111\u1ECBa ch\u1EC9 c\u1EE7a \u0111\u01A1n v\u1ECB mua h\u00E0ng t\u1EEB " + this.oldForm.buyer_address + " th\u00E0nh " + this.frmData.buyer_address;
                }
                break;
            case 'THONG_TIN_TIEN_CHU':
                isDC = true;
                if (this.frmData.total_payment_word && this.oldForm.total_payment_word !== this.frmData.total_payment_word) {
                    var invoice_date = moment__WEBPACK_IMPORTED_MODULE_10__(this.oldForm.invoice_date).format('DD/MM/YYYY');
                    _noiDungDC = "\u0110i\u1EC1u ch\u1EC9nh d\u00F2ng s\u1ED1 ti\u1EC1n b\u1EB1ng ch\u1EEF c\u1EE7a h\u00F3a \u0111\u01A1n s\u1ED1 " + this.oldForm.invoice_number + ", k\u00FD hi\u1EC7u " + this.oldForm.invoice_series + " ng\u00E0y " + invoice_date + " t\u1EEB: " + this.oldForm.total_payment_word + " th\u00E0nh " + this.frmData.total_payment_word;
                }
                break;
            case 'KHAC_KHAC':
                setTimeout(function () {
                    _this.productGrip.changeColumnProductNameToText();
                }, 0);
                this.productGrip.ShowAndHidePhuongThucDC(false);
                this.productGrip.gripAllowEdit = true;
                break;
            case 'TANG_GIAM':
                this.setContentProductName('', 'text');
                this.productGrip.ShowAndHidePhuongThucDC(false);
                this.productGrip.gripAllowEdit = true;
                break;
            default:
                break;
        }
        if (isDC) {
            this.setContentProductName(_noiDungDC, 'text');
            this.productGrip.gripAllowEdit = false;
            this.productGrip.ShowAndHidePhuongThucDC(false);
        }
    };
    AdjustBillComponent.prototype.doctienbangchu = function (total_payment, currency_code) {
        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData["adjustment_object"]) == "TANG_GIAM") {
            var number_money = Math.abs(total_payment);
            var c_money = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].tienBangChu(number_money, _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien), currency_code, this.configs.system_parameter.display_read_money_english);
            this.frmData.total_payment_word = c_money;
            if (total_payment < 0) {
                this.frmData.total_payment_word = "Giảm " + c_money;
                if (this.configs.system_parameter.display_read_money_english && (currency_code == 'USD' || currency_code == 'EURO' || currency_code == 'EUR' || currency_code == 'MYR' || currency_code == 'CNY' || currency_code == 'SGD' || currency_code == 'JPY')) {
                    this.frmData.total_payment_word = this.frmData.total_payment_word.replace("(", "(Adjusted to reduce by ");
                }
            }
            else if (total_payment > 0) {
                this.frmData.total_payment_word = "Tăng " + c_money;
                if (this.configs.system_parameter.display_read_money_english && (currency_code == 'USD' || currency_code == 'EURO' || currency_code == 'EUR' || currency_code == 'MYR' || currency_code == 'CNY' || currency_code == 'SGD' || currency_code == 'JPY')) {
                    this.frmData.total_payment_word = this.frmData.total_payment_word.replace("(", "(Adjusted to increase by ");
                }
            }
        }
        else {
            this.frmData.total_payment_word = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].tienBangChu(total_payment, _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien), currency_code, this.configs.system_parameter.display_read_money_english);
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.total_payment_word) != "" && this.frmData.total_payment_word != "Không đồng chẵn.") {
                if (this.frmData["adjustment_form"] === 'TANG') {
                    this.frmData.total_payment_word = "Tăng " + this.frmData.total_payment_word;
                    if (this.configs.system_parameter.display_read_money_english && (currency_code == 'USD' || currency_code == 'EURO' || currency_code == 'EUR' || currency_code == 'MYR' || currency_code == 'CNY' || currency_code == 'SGD' || currency_code == 'JPY')) {
                        this.frmData.total_payment_word = this.frmData.total_payment_word.replace("(", "(Adjusted to increase by ");
                    }
                }
                if (this.frmData["adjustment_form"] == 'GIAM') {
                    this.frmData.total_payment_word = "Giảm " + this.frmData.total_payment_word;
                    if (this.configs.system_parameter.display_read_money_english && (currency_code == 'USD' || currency_code == 'EURO' || currency_code == 'EUR' || currency_code == 'MYR' || currency_code == 'CNY' || currency_code == 'SGD' || currency_code == 'JPY')) {
                        this.frmData.total_payment_word = this.frmData.total_payment_word.replace("(", "(Adjusted to reduce by ");
                    }
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_adjust_product_grip_adjust_product_grip_component__WEBPACK_IMPORTED_MODULE_20__["AdjustProductGripComponent"]),
        __metadata("design:type", _adjust_product_grip_adjust_product_grip_component__WEBPACK_IMPORTED_MODULE_20__["AdjustProductGripComponent"])
    ], AdjustBillComponent.prototype, "productGrip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_adjust_form_bill_adjust_form_bill_component__WEBPACK_IMPORTED_MODULE_21__["AdjustFormBillComponent"]),
        __metadata("design:type", _adjust_form_bill_adjust_form_bill_component__WEBPACK_IMPORTED_MODULE_21__["AdjustFormBillComponent"])
    ], AdjustBillComponent.prototype, "formInvoice", void 0);
    AdjustBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adjust-bill',
            template: __webpack_require__(/*! ./adjust-bill.component.html */ "./src/app/modules/handle-bills/components/adjust/adjust-bill/adjust-bill.component.html"),
            styles: [__webpack_require__(/*! ./adjust-bill.component.scss */ "./src/app/modules/handle-bills/components/adjust/adjust-bill/adjust-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_16__["BillService"],
            _core_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmService"],
            _core_services__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsModalService"],
            _modules_handle_bills_shared_handlebill_service__WEBPACK_IMPORTED_MODULE_17__["HandlebillService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_5__["ConfigsService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_23__["ViewInvoiceService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_24__["MyBsModalService"]])
    ], AdjustBillComponent);
    return AdjustBillComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/components/adjust/adjust-form-bill/adjust-form-bill.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/adjust/adjust-form-bill/adjust-form-bill.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row invoice-form\">\r\n\r\n  <div class=\"col-md-6\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <!-- mẫu hóa đơn -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"template_id\" editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.templatesTT78, onValueChanged: onChangeTem, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_form }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{ _translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <!-- Hình thức điều chỉnh/loại điều chỉnh -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"adjustment_form\" [label]=\"{text: _translate.CONTROLL.LABEL.adjustment_form}\"\r\n          editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.adjustment_forms, onItemClick: adjustmentFormChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{_translate.CONTROLL.LABEL.adjustment_form}} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"adjustment_object\" [label]=\"{text: _translate.CONTROLL.LABEL.adjustment_object}\"\r\n          editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.adjustment_objects, onItemClick: adjustmentObjectChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{_translate.CONTROLL.LABEL.adjustment_object}} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <!-- mã số thuế -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='vat layout_input group-input-button'>\r\n          <dxi-item name=\"search-mst\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.tax_code }}\"></dxo-label>\r\n            <div *dxTemplate>\r\n              <dx-autocomplete valueExpr=\"tax_code\"\r\n                placeholder=\"{{ _translate.CONTROLL.PLACE_HOLDER.input_content_search }}\" [dataSource]=\"tax_codes\"\r\n                [readOnly]=\"readOnlyCacTruongConLai\" (onItemClick)=\"taxCodeChoose($event)\"\r\n                [(value)]=\"frmData.buyer_tax_code\" (onFocusOut)=\"updateTaxcodeInfo($event)\"\r\n                (onValueChanged)=\"changeTaxCode($event)\" [disabled]=\"disableForm.tax_code\">\r\n                <div *dxTemplate=\"let item of 'item'\">\r\n                  <span>{{item.tax_code}}: {{ item.name }}</span>\r\n                </div>\r\n              </dx-autocomplete>\r\n            </div>\r\n          </dxi-item>\r\n          <dxi-item cssClass='btn-small' [disabled]=\"disableForm.tax_code\">\r\n            <button (click)=\"searchTaxCode()\" type=\"button\" class=\"button-tax-code\">\r\n              <i class=\"{{_translate.ICONS.search}}\" style=\"font-size: 22px;\"></i>\r\n            </button>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Mã kh -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='vat layout_input group-input-button dcWidth'>\r\n          <dxi-item name=\"search-mkh\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_code }}\"></dxo-label>\r\n            <div *dxTemplate>\r\n              <dx-autocomplete valueExpr=\"code\" [(value)]=\"frmData.customer_code\"\r\n                placeholder=\"{{ _translate.CONTROLL.PLACE_HOLDER.input_content_search }}\" [dataSource]=\"customer_codes\"\r\n                [readOnly]=\"readOnlyCacTruongConLai\" (onItemClick)=\"customerCodeChoose($event)\"\r\n                (onFocusOut)=\"updateCustomerInfo($event)\">\r\n                <div *dxTemplate=\"let item of 'item'\">\r\n                  <span>{{item.code}}: {{ item.name }}</span>\r\n                </div>\r\n              </dx-autocomplete>\r\n            </div>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"mst_btn_options\" cssClass='btn-small'>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <!-- Hình thức thanh toán và số hóa đơn gốc -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"payment_method_code\" editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{disabled:  disableForm.rest,items: select.payment_method_names,onValueChanged: paymentMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payment_method }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='group-input-button hdGoc dcWidth'>\r\n          <dxi-item name=\"origin-invoice-number\">\r\n            <dxo-label text=\"{{_translate.GRID.INVOICE.invoice_number_original}}\"></dxo-label>\r\n            <div *dxTemplate>\r\n              <dx-text-box [(value)]=\"oldForm.bill_number\" disabled=\"true\"></dx-text-box>\r\n            </div>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"origin_btn_options\" cssClass='btn-small'>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <!-- Tên ngân hàng -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item cssClass=\"vat layout_input\" dataField=\"bank_account\" [editorOptions]=\"{disabled: disableForm.rest}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.bank_name }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <!-- lý do điều chỉnh -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\" cssClass='group-input-button'>\r\n        <dxi-item dataField=\"destroy_reason\">\r\n          <dxo-label text=\"Lý do điều chỉnh\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\" message=\"Lý do điều chỉnh {{_translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n    </dx-form>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <!-- ngày hóa đơn số hóa đơn -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"bill_date\" editorType=\"dxDateBox\"\r\n          [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss'}\" [cssClass]=\"'max_left'\">\r\n          <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_date }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"bill_number\" [template]=\"'notifydate'\" [cssClass]=\"'max_right'\">\r\n          <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_number }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <!-- Họ tên người mua -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"buyer_name\"\r\n          [editorOptions]=\"{disabled:  disableForm.rest,onValueChanged: customerChanged}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.buyer_name }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <!-- Địa chỉ người mua -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"buyer_address\" [editorOptions]=\"{disabled:  disableForm.rest,onValueChanged: customerChanged}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.buyer_address }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <!-- Email -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item [label]=\"{text: 'Email'}\">\r\n          <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n            <div\r\n              class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n              <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                <app-tag-input-email [variableName]=\"this.emails\" (numberGenerated)=\"renderDataEmail($event)\">\r\n                </app-tag-input-email>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <!-- Tên đơn vị -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"customer_name\"\r\n          [editorOptions]=\"{ disabled: disableForm.rest,isRequired: false,onValueChanged: customerChanged}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_name }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <!-- Số đtdd và số CCCD -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"buyer_mobile\"\r\n          [editorOptions]=\"{disabled: disableForm.rest,onValueChanged: customerChanged}\" [cssClass]=\"'max_left'\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.phone }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.phone\"\r\n            message=\"{{ _translate.CONTROLL.LABEL.phone }} {{ _translate.VALIDATION.not_pattern }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item [editorOptions]=\"{disabled: disableForm.rest}\" cssClass=\"vat layout_input max_right\" dataField=\"id_card\">\r\n          <dxo-label text=\"Số CCCD\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <!-- các trường mở rộng -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <app-form-extend [disableForm]=\"ttDaXuatHoaDon\"  [formData]=\"frmData\"  [customerTempt]=\"customerTempt\" [formItems]=\"formItems\" [typeOptions]=\"'bill_options'\"></app-form-extend>\r\n      </dxi-item>\r\n\r\n      <div *dxTemplate=\"let d of 'notifydate'\">\r\n        <div>\r\n          <dx-text-box [disabled]=\"true\" [(value)]=\"frmData.bill_number\"\r\n            class=\"invoice-number-create-invoice\"></dx-text-box>\r\n        </div>\r\n      </div>\r\n    </dx-form>\r\n  </div>\r\n\r\n</div>\r\n\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"Thông báo\" [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{_translate.CONFIRM.update_customer}}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"capNhatDmKhachHang()\" text=\"{{_translate.CONTROLL.LABEL.update}}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{_translate.CONTROLL.BUTTON.cancel}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/adjust/adjust-form-bill/adjust-form-bill.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/adjust/adjust-form-bill/adjust-form-bill.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .vat.invoice-number-create-invoice input{color:red;font-weight:bold}.icon-size{font-size:21px;padding:2px 0}.button-tax-code{background:#337ab7;color:#fff;border-color:transparent;border:none}.button-tax-code:focus{outline:none}::ng-deep .vat.invoice-note input{color:#0070C0;font-weight:bold}::ng-deep .layout_input_left span.dx-field-item-label-content{width:144px !important}#advBtn{width:26px;height:26px;margin-left:5px}:host ::ng-deep .invoice-number-create-invoice{color:red;font-weight:bold;padding-top:3px}::ng-deep .customer-tempt .dx-layout-manager .dx-label-h-align.event_layout_input .dx-field-item-label .dx-field-item-label-content{width:119px !important;min-width:unset !important}::ng-deep .customer-tempt .dx-layout-manager .dx-label-h-align.event_layout_input .dx-field-item-label .dx-field-item-label-content span{text-wrap:wrap}::ng-deep .customer-tempt .dx-layout-manager .dx-label-h-align.odd_layout_input .dx-field-item-label .dx-field-item-label-content{width:74px !important;min-width:unset !important}::ng-deep .customer-tempt .dx-layout-manager .dx-label-h-align.odd_layout_input .dx-field-item-label .dx-field-item-label-content span{text-wrap:wrap}::ng-deep .dcWidth span.dx-field-item-label-content{width:106px !important}::ng-deep .hdGoc .dx-texteditor-input{color:red !important;font-weight:bold}\n"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/adjust/adjust-form-bill/adjust-form-bill.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/adjust/adjust-form-bill/adjust-form-bill.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AdjustFormBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustFormBillComponent", function() { return AdjustFormBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/form-extend/form-extend.component */ "./src/app/shared/components/form-extend/form-extend.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AdjustFormBillComponent = /** @class */ (function () {
    function AdjustFormBillComponent(route, modalService, billService, authService, customersService) {
        var _this = this;
        this.route = route;
        this.modalService = modalService;
        this.billService = billService;
        this.authService = authService;
        this.customersService = customersService;
        this.ttDaXuatHoaDon = false;
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.adjustmentObject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRefreshForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isShow = false;
        this.select = {};
        this.disableForm = {
            tax_code: true,
            rest: true
        };
        this.pattern = _config_pattern__WEBPACK_IMPORTED_MODULE_2__["pattern"];
        this.tax_codes = []; //mã số thuế
        this.customer_codes = [];
        this.configs = {};
        this.emails = [];
        this.arrEmail = [];
        this.formItems = [];
        this.customForms = [];
        this.customerTempt = {};
        this.showPopup = false;
        this.customerCurent = {};
        this.origin_btn_options = {
            text: '', icon: 'assets/img/icons/Xem.png', type: 'default',
            onClick: function () {
                if (_this.oldForm.id) {
                    // gtgt mtt
                    if (_this.oldForm.template_code == '1') {
                        window.open("/system/bills-invoice-vat/" + _this.oldForm.id, '_blank');
                    }
                    else if (_this.oldForm.template_code == '2') {
                        window.open("/system/bills-invoice-sale/" + _this.oldForm.id, '_blank');
                    }
                }
            }
        };
        this.mst_btn_options = {
            text: '', icon: 'assets/img/icons/Them.png', type: 'default',
            onClick: function () {
                var initialState = {
                    isVisibleGhiVaThemMoi: false
                };
                _this.bsModalRef = _this.modalService.show(_shared_components__WEBPACK_IMPORTED_MODULE_8__["AddCustomerComponent"], {
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
                    }
                    submodal.unsubscribe();
                });
            }
        };
        this.adjustmentFormChange = function (e) {
            _this.disableForm = { tax_code: true, rest: true };
            var value = e.value;
            if (!e.isInit) {
                _this.onRefreshForm.emit();
                value = e.itemData.code;
            }
            switch (value) {
                case 'TANG':
                    if (!e.isInit)
                        _this.frmData.adjustment_object = '';
                    _this.select.adjustment_objects = [
                        {
                            name: 'Hàng hóa dịch vụ',
                            code: 'HH_DV'
                        },
                        {
                            name: 'Khác',
                            code: 'KHAC_TANG'
                        },
                    ];
                    if (_this.frmData.total_payment_word) {
                        _this.frmData.total_payment_word = _this.frmData.total_payment_word.replace("Giảm ", "Tăng ");
                        if (_this.frmData.total_payment_word.includes('Tăng') == false)
                            _this.frmData.total_payment_word = "Tăng " + _this.frmData.total_payment_word;
                    }
                    break;
                case 'GIAM':
                    if (!e.isInit)
                        _this.frmData.adjustment_object = '';
                    _this.select.adjustment_objects = [
                        {
                            name: 'Hàng hóa dịch vụ',
                            code: 'HH_DV'
                        },
                        {
                            name: 'Khác',
                            code: 'KHAC_GIAM'
                        },
                    ];
                    if (_this.frmData.total_payment_word)
                        _this.frmData.total_payment_word = _this.frmData.total_payment_word.replace("Tăng ", "Giảm ");
                    if (_this.frmData.total_payment_word && _this.frmData.total_payment_word.includes('Giảm') == false)
                        _this.frmData.total_payment_word = "Giảm " + _this.frmData.total_payment_word;
                    break;
                case 'TANG_GIAM':
                    _this.select.adjustment_objects = [
                        {
                            name: 'Điều chỉnh tăng giảm đồng thời và Khác',
                            code: 'TANG_GIAM'
                        },
                    ];
                    _this.frmData.adjustment_object = 'TANG_GIAM';
                    if (_this.frmData.total_payment_word) {
                        _this.frmData.total_payment_word = _this.frmData.total_payment_word.replace("Tăng ", "");
                        _this.frmData.total_payment_word = _this.frmData.total_payment_word.replace("Giảm ", "");
                    }
                    _this.disableForm = { tax_code: false, rest: false };
                    _this.setPropertyOfForm(_this.frmData.adjustment_form, _this.frmData.adjustment_object, e.isInit);
                    break;
                default:
                    break;
            }
        };
        this.adjustmentObjectChange = function (e) {
            _this.onRefreshForm.emit();
            _this.setPropertyOfForm(_this.frmData.adjustment_form, e.itemData.code, false);
        };
        this.customerChanged = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.name) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.customer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.contact_person_name) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.buyer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.contact_mobile) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.buyer_mobile)
                                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.business_address) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.buyer_address)
                                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.email) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.buyer_email)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this.onChangeTem = function (e) {
            _this.select.templatesTT78.forEach(function (item) {
                if (e.value === item.value) {
                    _this.formDuLieuMoRong(item);
                    _this.frmData.template_id = item.value;
                    _this.frmData.bill_series = item.invoice_series;
                    _this.frmData.template_code = item.template_code;
                    _this.onTemplateTypeChange.emit(item);
                }
            });
        };
        this.paymentMethodChange = function (e) {
            var _obj = _this.select.payment_method_names.filter(function (p) { return p.code === e.value; })[0];
            if (_obj) {
                _this.frmData.payment_method_view_name = _obj.name;
            }
        };
        this.updateCustomerInfo = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.code) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.customer_code)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this.updateTaxcodeInfo = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.tax_code) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.buyer_tax_code)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this._translate = this.authService.getTranslate();
    }
    AdjustFormBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configs = this.authService.getConfigs();
        this.routeSub = this.route.data.subscribe(function (data) {
            // put data DM for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.payment_method_names = data.init[1].DM_HINH_THUC_THANH_TOAN;
            _this.select.currency_codes = data.init[1].DM_LOAI_TIEN;
            _this.select.customer_types = data.init[1].DM_NHOM_KHACH_HANG;
            _this.select.export_places = data.init[1].DM_NOI_XUAT_HOA_DON;
            _this.select.list_bank_account_seller = data.init[1].DM_TAI_KHOAN_NGAN_HANG;
            _this.select.adjustment_forms = _core_index__WEBPACK_IMPORTED_MODULE_3__["VSelectBoxService"]._adjustmentFormsMtt(_this._translate);
            _this.select.list_bank_account_seller.forEach(function (item) {
                item.name_display = item.code + ': ' + item.name;
            });
            _this.select.templatesTT78 = _this.listTemplate;
        });
        // tìm kiếm mã số thuế
        this.tax_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default.a({
            load: function (loadOptions) {
                return _this.billService.getDataSourceForm(loadOptions.searchValue, 'tax_code');
            }
        });
        // // tìm kiếm mã khách hàng
        this.customer_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default.a({
            load: function (loadOptions) {
                return _this.billService.getDataSourceForm(loadOptions.searchValue, 'code');
            }
        });
        this.select.adjustment_objects = [];
        if (this.frmData.adjustment_form) {
            this.adjustmentFormChange({ value: this.frmData.adjustment_form, isInit: true });
        }
        if (this.frmData.adjustment_object && this.frmData.adjustment_form) {
            this.setPropertyOfForm(this.frmData.adjustment_form, this.frmData.adjustment_object, true);
        }
        if (this.frmData.buyer_email) {
            this.emails = [];
            var emailToString = this.frmData.buyer_email;
            var a11 = emailToString.replace(/;/g, ',');
            this.emails = a11.split(',');
        }
    };
    AdjustFormBillComponent.prototype.setPropertyOfForm = function (adjustment_form, adjustment_object, isInit) {
        if (adjustment_form === 'TANG' && adjustment_object === 'HH_DV') {
            this.disableForm = { tax_code: true, rest: true };
            this.adjustmentObject.emit('TANG_HH_DV');
        }
        else if (adjustment_form === 'TANG' && adjustment_object === 'KHAC_TANG') {
            this.disableForm = { tax_code: true, rest: true };
            this.adjustmentObject.emit('TANG_KHAC_TANG');
        }
        else if (adjustment_form === 'GIAM' && adjustment_object === 'HH_DV') {
            this.disableForm = { tax_code: true, rest: true };
            this.adjustmentObject.emit('GIAM_HH_DV');
        }
        else if (adjustment_form === 'GIAM' && adjustment_object === 'KHAC_GIAM') {
            this.disableForm = { tax_code: true, rest: true };
            this.adjustmentObject.emit('GIAM_KHAC_GIAM');
        }
        else if (adjustment_form === 'TANG_GIAM' && adjustment_object === 'TANG_GIAM') {
            this.disableForm = { tax_code: false, rest: false };
            this.adjustmentObject.emit('TANG_GIAM');
        }
        if (adjustment_object !== 'TANG_GIAM' && !isInit) {
            this.frmData.buyer_tax_code = this.oldForm.buyer_tax_code;
            this.frmData.customer_name = this.oldForm.customer_name;
            this.frmData.buyer_address = this.oldForm.buyer_address;
            this.frmData.buyer_name = this.oldForm.buyer_name;
            this.frmData.buyer_mobile = this.oldForm.buyer_mobile;
        }
    };
    AdjustFormBillComponent.prototype.onAdvancedClick = function () {
        this.isShow = !this.isShow;
    };
    AdjustFormBillComponent.prototype.createCustomGroup = function () {
        return {
            itemType: 'group',
            colCount: '2',
            items: this.customForms
        };
    };
    /////// sự kiện thay đổi các trường mở rộng
    AdjustFormBillComponent.prototype.changeItem = function (_dulieumorong) {
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
    AdjustFormBillComponent.prototype.readonlyAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = true;
        });
        this.readOnlyCacTruongConLai = true;
    };
    // gửi data lên parent component
    AdjustFormBillComponent.prototype.onFieldDataChanged = function () {
        this.formEvent.emit(this.frmData);
    };
    AdjustFormBillComponent.prototype.taxCodeChoose = function (e) {
        var customer = e.itemData;
        if (this.frmData.customer_object_code !== 'CA_NHAN' && this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.customer_name = customer.name;
        }
        this.frmData.buyer_name = customer.contact_person_name;
        if (this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.buyer_address = customer.business_address;
        }
        this.frmData.customer_code = customer.code;
        this.frmData.buyer_mobile = customer.contact_mobile;
        if (customer.email) {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
            var stringDataEmailGet = customer.email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
        else {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
        }
        this.frmData.customer_id = customer.id;
        this.onFieldDataChanged();
    };
    AdjustFormBillComponent.prototype.customerCodeChoose = function (e) {
        var customer = e.itemData;
        if (this.frmData.customer_object_code !== 'CA_NHAN' && this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.customer_name = customer.name;
        }
        this.frmData.buyer_name = customer.contact_person_name;
        if (this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.buyer_address = customer.business_address;
        }
        this.frmData.buyer_tax_code = customer.tax_code;
        this.frmData.customer_id = customer.id;
        this.frmData.buyer_mobile = customer.contact_mobile;
        if (customer.email) {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
            var stringDataEmailGet = customer.email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
        else {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
        }
        this.onFieldDataChanged();
    };
    ///////////////
    AdjustFormBillComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    AdjustFormBillComponent.prototype.capNhatDmKhachHang = function () {
        var _this = this;
        this.customerCurent.tax_code = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.buyer_tax_code);
        this.customerCurent.name = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.customer_name);
        this.customerCurent.code = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.customer_code);
        this.customerCurent.contact_person_name = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.buyer_name);
        this.customerCurent.contact_mobile = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.buyer_mobile);
        this.customerCurent.business_address = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.buyer_address);
        this.customerCurent.email = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.buyer_email);
        var data = { customer: this.customerCurent };
        this.customersService.edit(data, this.customerCurent.id).subscribe(function (response) {
            if (response.status === 'success') {
                _this.showPopup = false;
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(response.message, 'error');
            }
        }, function (err) {
        }, function () {
        });
    };
    AdjustFormBillComponent.prototype.huy = function () {
        this.showPopup = false;
    };
    AdjustFormBillComponent.prototype.renderDataEmail = function ($event) {
        this.arrEmail = [];
        this.emails = $event;
        if (this.emails.length > 0) {
            for (var i = 0; i < this.emails.length; i++) {
                if (typeof this.emails[i] === 'object')
                    this.arrEmail.push(this.emails[i].value);
                else if (typeof this.emails[i] === 'string')
                    this.arrEmail.push(this.emails[i]);
            }
            var emailToString = this.arrEmail.toString();
            this.frmData.buyer_email = emailToString.replace(/,/g, ';');
        }
        else {
            this.frmData.buyer_email = null;
        }
        this.formEvent.emit(this.frmData);
    };
    AdjustFormBillComponent.prototype.changeTaxCode = function (e) {
        this.tax_code_search = e.value;
    };
    AdjustFormBillComponent.prototype.searchTaxCode = function () {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.tax_code_search = this.frmData.buyer_tax_code;
        if (!this.tax_code_search) {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng nhập mã số thuế!", "error");
        }
        else {
            this.billService.getInfoCompany(this.tax_code_search).subscribe(function (res) {
                if (res.status == "success") {
                    // this.dataTaxCode = res.data.customer;
                    _this.frmData.customer_name = res.data.customer.name;
                    _this.frmData.buyer_address = res.data.customer.business_address;
                }
            });
        }
        this.onFieldDataChanged();
        setTimeout(function () {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        }, 1000);
    };
    AdjustFormBillComponent.prototype.disableTemplateInput = function () {
        if (this.frmData.bill_number) {
            return true;
        }
        return false;
    };
    AdjustFormBillComponent.prototype.formDuLieuMoRong = function (item) {
        var _this = this;
        var _dulieumorong = lodash__WEBPACK_IMPORTED_MODULE_13__["cloneDeep"](item.fields).filter(function (x) { return x.type === '4'; });
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].resetObject(this.formItems);
        this.customForms = [];
        this.customerTempt = {};
        var bill_options = this.frmData.bill_options;
        if (bill_options.length > 0) {
            _dulieumorong = _dulieumorong.map(function (dl) {
                var option = bill_options.find(function (x) { return x.code == dl.code; });
                if (option) {
                    dl.value = option.value;
                }
                return dl;
            });
        }
        this.frmData.bill_options = _dulieumorong;
        if (_dulieumorong.length > 0) {
            this.formExtend.createForm(this.customForms, _dulieumorong);
        }
        _dulieumorong.forEach(function (value) {
            _this.customerTempt[value.code] = value.value;
        });
    };
    AdjustFormBillComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var template = null;
        template = this.select.templatesTT78.find(function (item) { return item.value == _this.frmData.template_id; });
        this.onChangeTem(template);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_9__["FormExtendComponent"]),
        __metadata("design:type", _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_9__["FormExtendComponent"])
    ], AdjustFormBillComponent.prototype, "formExtend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormComponent"]),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "listDxForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormComponent"])
    ], AdjustFormBillComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "oldForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "bill_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "infoDangKy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "listTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AdjustFormBillComponent.prototype, "isHdGTGT", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AdjustFormBillComponent.prototype, "ttDaXuatHoaDon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onFormChange'),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "formEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('adjustmentObjectChange'),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "adjustmentObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTypeChange'),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "onTemplateTypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onRefreshForm'),
        __metadata("design:type", Object)
    ], AdjustFormBillComponent.prototype, "onRefreshForm", void 0);
    AdjustFormBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adjust-form-bill',
            template: __webpack_require__(/*! ./adjust-form-bill.component.html */ "./src/app/modules/handle-bills/components/adjust/adjust-form-bill/adjust-form-bill.component.html"),
            styles: [__webpack_require__(/*! ./adjust-form-bill.component.scss */ "./src/app/modules/handle-bills/components/adjust/adjust-form-bill/adjust-form-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsModalService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_6__["BillService"],
            _core_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_7__["CustomersService"]])
    ], AdjustFormBillComponent);
    return AdjustFormBillComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/components/adjust/adjust-product-grip/adjust-product-grip.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/adjust/adjust-product-grip/adjust-product-grip.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--phần table hiển thị-->\r\n<div class=\"row invoice-table\">\r\n  <div class=\"col-md-12\" style=\"padding: 15px 20px;\">\r\n    <!-- Thêm dòng -->\r\n    <div class=\"pull-left\">\r\n      <div style=\"float: left;width:  30%; padding-top: 4px\">{{ _translate.CONTROLL.BUTTON.add_row }}</div>\r\n      <div style=\"float: left; width: 30%\">\r\n        <dx-number-box #numberBox [max]=\"100\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"rowData\"></dx-number-box>\r\n      </div>\r\n      <div>\r\n        <dx-button style=\"height: 27px\" icon=\"fa fa-plus-circle\" type=\"default\" text=\"\" (onClick)=\"addRow()\">\r\n        </dx-button>\r\n      </div>\r\n    </div>\r\n    <div class=\"pull-right\">\r\n      <!-- Hóa đơn bán hàng NQ 43 -->\r\n      <dx-check-box *ngIf=\"!isHdGTGT\" style=\"margin-right: 20px\" [(value)]=\"frmData.is_resolution_43\"\r\n        text=\"{{ _translate.THONG_TIN.giam_thue_theo_nq43 }}\" (onValueChanged)=\"_changeNQ43($event)\"></dx-check-box>\r\n      <dx-check-box class=\"auto-input\" text=\"{{ _translate.CONTROLL.LABEL.no_calculation }}\"\r\n        [(value)]=\"frmData.auto_value\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n        <dx-button text=\"Lấy hàng hóa HĐ gốc\" type=\"default\" (click)=\"thayTheToanBo()\" [disabled]=\"!isHangHoaDichVu\">\r\n        </dx-button>\r\n      <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx\" (change)=\"onFileBangKeChange($event)\" multiple=\"false\"\r\n      style=\"display: none;\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <dx-data-grid id=\"gridInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n      [allowColumnResizing]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n      (onKeyDown)=\"onGripKeyDown($event)\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n      (onEditorPrepared)=\"onEditorPrepared($event)\" (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n      (onRowPrepared)=\"onRowPrepared($event)\" (onContentReady)=\"onContentReady($event)\">\r\n      <!-- [wordWrapEnabled]=\"true\" (onEditorPrepared)=\"onEditorPrepared($event)\" -->\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"gripAllowEdit\"></dxo-editing>\r\n      <dxo-sorting mode=\"false\"></dxo-sorting>\r\n      <dxo-scrolling mode=\"virtual\">\r\n      </dxo-scrolling>\r\n      <dxi-column cellTemplate=\"deleteColumn\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.delete }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.delete_column }}\" [allowEditing]=\"false\" alignment=\"center\" [fixed]=\"true\"\r\n        fixedPosition=\"left\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"order\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.view_order }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.stt }}\" alignment=\"center\" [fixed]=\"true\"\r\n        fixedPosition=\"left\"></dxi-column>\r\n      <!-- mã hàng hóa -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_add_product_code\" dataField=\"product_code\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_code }}\" minWidth=\"{{ _translate.GRID_WIDTH.ma_hang }}\"\r\n        alignment=\"center\" [editorOptions]=\"{showClearButton: true}\">\r\n        <dxo-lookup [dataSource]=\"select.productsView\" displayExpr=\"mhvth\" valueExpr=\"product_code\" *ngIf=\"!isAll\">\r\n        </dxo-lookup>\r\n        <dxo-lookup [dataSource]=\"select.productsViewFull\" displayExpr=\"mhvth\" valueExpr=\"code\" *ngIf=\"isAll\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <!-- Tên hàng hoá -->\r\n      <dxi-column *ngIf=\"( !configs.system_parameter.is_add_product_code && isTextProductName )\"\r\n        [editorOptions]=\"{showClearButton: true}\" dataField=\"product_name\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_name }}\" alignment=\"left\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.ten_hang }}\">\r\n        <dxo-lookup [dataSource]=\"select.productsView\" displayExpr=\"product_name\" valueExpr=\"product_name\"></dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column *ngIf=\"(!isTextProductName) || (configs.system_parameter.is_add_product_code  && isTextProductName)\"\r\n        dataField=\"product_name\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_name }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.ten_hang }}\" alignment=\"left\">\r\n      </dxi-column>\r\n      <!-- Diễn giải -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_promotion\" cellTemplate=\"dien_giai\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.explain }}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Khuyến mại -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.promotional_goods_on_the_invoice\" cellTemplate=\"khuyen_mai\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.promotion }}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Chiết khấu thương mại -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.commercial_discount\" cellTemplate=\"cktm\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.commercial_discount }}\" minWidth=\"{{ _translate.GRID_WIDTH.cktm }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Đơn vị tính -->\r\n      <dxi-column dataField=\"unit_code\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.unit_code }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.unit_code }}\" alignment=\"center\" [editorOptions]=\"lookupColumnOptions\">\r\n        <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column dataField=\"quantity\" headerCellTemplate=\"quantityHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\" dataType=\"number\" alignment=\"center\" \r\n         [editorOptions]=\"{ format: formatter.so_luong,step: '0' }\"\r\n         [format]=\"formatter.so_luong\"\r\n         ></dxi-column>\r\n\r\n      <dxi-column dataField=\"price\" headerCellTemplate=\"priceHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        dataType=\"number\" alignment=\"right\" [editorOptions]=\"{ format: formatter.don_gia,step: '0' }\"\r\n        [format]=\"formatter.don_gia\">\r\n      </dxi-column>\r\n      <dxi-column\r\n        *ngIf=\"invoiceTemplateSelect && invoiceTemplateSelect.is_discount\"\r\n        dataField=\"discount\" headerCellTemplate=\"discountHeader\" width=\"{{ _translate.GRID_WIDTH.chiet_khau }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.chiet_khau }}\" [editorOptions]=\"{ format: formatter.ty_le_chiet_khau }\"\r\n        [format]=\"formatter.ty_le_chiet_khau\" dataType=\"number\" alignment=\"right\">\r\n      </dxi-column>\r\n      <dxi-column\r\n        *ngIf=\"invoiceTemplateSelect && invoiceTemplateSelect.is_discount\"\r\n        dataField=\"amount_discount\" headerCellTemplate=\"amount_discountHeader\"\r\n        width=\"{{ _translate.GRID_WIDTH.tien_chiet_khau }}\" minWidth=\"{{ _translate.GRID_WIDTH.tien_chiet_khau }}\"\r\n        [editorOptions]=\"{ format: formatter.tien_chiet_khau }\" [format]=\"formatter.tien_chiet_khau\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"amount\" headerCellTemplate=\"amountHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        dataType=\"number\" alignment=\"right\" [editorOptions]=\"{ format: formatter.thanh_tien, step: '0' }\"\r\n        [format]=\"formatter.thanh_tien\"></dxi-column>\r\n\r\n      <dxi-column dataField=\"vat\" headerCellTemplate=\"vatHeader\" minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\"\r\n        alignment=\"center\" *ngIf=\"isHdGTGT\" [editorOptions]=\"{showClearButton: true ,step: '0'}\">\r\n        <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"amount_vat\" headerCellTemplate=\"amountVatHeader\" *ngIf=\"isHdGTGT\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\" dataType=\"number\" alignment=\"right\"\r\n        [editorOptions]=\"{ format: formatter.tien_thue, step: '0' }\" [format]=\"formatter.tien_thue\">\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"amount_after_vat\" headerCellTemplate=\"amountAfterVatHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tien_thue }}\" dataType=\"number\" alignment=\"right\"\r\n        [editorOptions]=\"{ format: formatter.tong_tien, step: '0' }\" [format]=\"formatter.tong_tien\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'quantityHeader'\">\r\n        <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.quantity }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceHeader'\">\r\n        <p (click)=\"configDecimal('don_gia')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.price }}<img\r\n            src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount_vat }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'vatHeader'\">\r\n        <p>VAT</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountHeader'\">\r\n        <p (click)=\"configDecimal('thanh_tien')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.amount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount_vat }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountAfterVatHeader'\">\r\n        <p (click)=\"configDecimal('tong_tien')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.total_money }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <!-- config column -->\r\n      <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n        <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'dien_giai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_explain\" [disabled]=\"d.data.is_promotion\"\r\n          (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'khuyen_mai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_promotion\" [disabled]=\"d.data.is_explain\"\r\n          (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n    \r\n      <div *dxTemplate=\"let d of 'is_transport_number'\">\r\n        <dx-check-box [(value)]=\"d.data.is_transport_number\"></dx-check-box>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let d of 'cktm'\">\r\n        <dx-check-box [(value)]=\"d.data.commercial_discount\" (onValueChanged)=\"changeCKTM(d.data)\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'discountHeader'\">\r\n        <p (click)=\"configDecimal('ty_le_chiet_khau')\" style=\"cursor: pointer;\">\r\n          {{_translate.GRID.INVOICE_DETAILS.discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amount_discountHeader'\">\r\n        <p (click)=\"configDecimal('tien_chiet_khau')\" style=\"cursor: pointer;\">\r\n          {{_translate.GRID.INVOICE_DETAILS.amount_discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      \r\n      <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    </dx-data-grid>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/adjust/adjust-product-grip/adjust-product-grip.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/adjust/adjust-product-grip/adjust-product-grip.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-row i{color:#0E77BB;font-size:18px}.support-invoice{margin-top:20px;margin-bottom:10px}.support-invoice .support-link{padding:6px 15px;border:1px solid #007bff;text-decoration:none}.support-invoice .support-link.mgr-15{margin-right:8px}.support-invoice .support-link img,.support-invoice .support-link i{margin-right:15px;margin-top:-2px}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}::ng-deep .styleItemToList{color:dodgerblue}.button-dropdown-extend{display:inline-flex}.pull-right .auto-input{margin-right:75px !important}\n"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/adjust/adjust-product-grip/adjust-product-grip.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/adjust/adjust-product-grip/adjust-product-grip.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AdjustProductGripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustProductGripComponent", function() { return AdjustProductGripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme/data/custom_store */ "./node_modules/devextreme/data/custom_store.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AdjustProductGripComponent = /** @class */ (function () {
    function AdjustProductGripComponent(authService, route, router, modalService, billService, productsService, invoiceService) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.billService = billService;
        this.productsService = productsService;
        this.invoiceService = invoiceService;
        this.contextMenu = [{ text: 'Thêm' }, { text: 'Xóa' }];
        this.select = {};
        this.amount_after_vat = 0;
        // showPopup = false; // Popup
        this.dataExcelFile = null;
        this.ttDaXuatHoaDon = false;
        this.gripAllowEdit = false;
        this.isAll = false;
        this.isTextProductName = false;
        this.isHangHoaDichVu = false;
        this.dataExcelFileInfo = null;
        this.isPhuongThucDC = false;
        this.extras = [];
        this.rowData = 1;
        this.isPXKDaiLy = false;
        this.isPXKNB = false;
        this.productsFull = [];
        this.productCodePattern = _config_pattern__WEBPACK_IMPORTED_MODULE_2__["pattern"].productCodePattern;
        this.gripChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.autoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lookupColumnOptions = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                var _this = this;
                //
                //
                var newItem = {};
                newItem.code = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._convertToViKdau(args.text);
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
            _this.invoiceService.formatSumColumnGrid(arrFooter);
        };
        this._translate = this.authService.getTranslate();
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
    AdjustProductGripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configs = this.authService.getConfigs();
        this.routeSub = this.route.data.subscribe(function (data) {
            // put data DM for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.vats = data.init[1].DM_TY_LE_VAT;
            _this.select.select_provisions_on_accounts = data.init[1].DM_DINH_KHOAN;
            _this.select.countrys = data.init[1].DM_QUOC_GIA;
            _this.oldForm = data.init[2];
            // Hàng hóa dịch vụ
            _this.select.products = [];
            _this.productsFull = data.init[3];
            _this.productsFull.forEach(function (item) {
                if (item.code) {
                    item.mhvth = item.code + ': ' + item.name;
                }
                else {
                    item.mhvth = "(Chưa có mã hàng) " + ': ' + item.name;
                }
            });
            if (_this.oldForm.origin) {
                _this.oldForm.origin.bill_products.forEach(function (item) {
                    _this.select.products.push(item);
                });
            }
            else {
                _this.oldForm.bill_products.forEach(function (item) {
                    _this.select.products.push(item);
                });
            }
            _this.select.products.forEach(function (item) {
                if (item.product_code) {
                    item.mhvth = item.product_code + ': ' + item.product_name;
                }
                else {
                    item.mhvth = "(Chưa có mã hàng) " + ': ' + item.product_name;
                }
            });
            _this.select.productsViewFull = {
                store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_12___default.a({
                    key: 'code',
                    loadMode: 'raw',
                    load: function (loadOptions) {
                        return _this.productsFull;
                    },
                    byKey: function (key) {
                        var _data = data.init[0].filter(function (p) { return p.code === key.toString(); });
                        return _data;
                    }
                }),
                paginate: true,
                sort: 'name'
            };
            if (_this.configs.system_parameter.is_add_product_code) {
                _this.isTextProductName = false;
                _this.select.productsView = {
                    store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_12___default.a({
                        key: 'product_code',
                        loadMode: 'raw',
                        load: function (loadOptions) {
                            return _this.select.products;
                        },
                        byKey: function (key) {
                            var _data = data.init[0].filter(function (p) { return p.code === key.toString(); });
                            return _data;
                        }
                    }),
                    paginate: true,
                    sort: 'product_name'
                };
            }
            else {
                _this.select.productsView = {
                    store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_12___default.a({
                        key: 'product_name',
                        loadMode: 'raw',
                        load: function (loadOptions) {
                            return _this.select.products;
                        },
                        byKey: function (key) {
                            // console.log(encodeURIComponent(key) + " abc");
                            return [];
                            // let _data = data.init[2].filter(p => p.code == key.toString());
                            // return _data;
                        }
                    }),
                    paginate: true,
                    sort: 'product_name'
                };
            }
            if (data.init[2]) {
                if (data.init[2].bill_products) {
                    data.init[2].bill_products.forEach(function (item) {
                        if (item.product_name && item.unit_code) {
                            var obj1 = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                            if (!obj1) {
                                _this.select.unit_codes.push({
                                    id: _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].makeid(),
                                    code: item.unit_code,
                                    name: item.unit_name ? item.unit_name : item.unit_code
                                });
                            }
                        }
                    });
                }
            }
        });
        this.createUpdateEvent();
    };
    // khởi tạo sự kiện khi update
    AdjustProductGripComponent.prototype.createUpdateEvent = function () {
        var _this = this;
        var product = this.bill_products;
        setTimeout(function () {
            _this.bill_products.on('updated', function (key, value) {
                var column = Object.keys(value)[0];
                _this.bill_products.byKey(key).then(function (row) {
                    switch (column) {
                        case 'view_order':
                            _this.view_orderChange();
                            break;
                        case 'product_name':
                            _this.product_nameChange(row);
                            break;
                        case 'product_code':
                            if (_this.isAll) {
                                _this.product_codeChangeFull(row);
                            }
                            else {
                                _this.product_codeChange(row);
                            }
                            break;
                        case 'unit_code':
                            _this.unit_codeChange(row);
                            break;
                        case 'country_code':
                            _this.country_codeChange(row);
                            break;
                        case 'quantity':
                        case 'number_real_export':
                        case 'price':
                        case 'price_nte':
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
                        case 'price_after_vat':
                            if ((row.vat == 5 || row.vat == 10) && row.price_after_vat)
                                row.price = (row.price_after_vat / (1 + row.vat / 100));
                            else
                                row.price = row.price_after_vat;
                            _this._tinhGiaTri();
                            break;
                        case 'vat':
                            if (_this.configs.system_parameter.price_after_vat) {
                                if ((row.vat == 5 || row.vat == 10) && row.price_after_vat)
                                    row.price = (row.price_after_vat / (1 + row.vat / 100));
                                else
                                    row.price = row.price_after_vat;
                            }
                            _this._tinhGiaTri();
                            break;
                        default:
                            break;
                    }
                }, function (error) {
                    alert(error);
                });
            });
        });
    };
    AdjustProductGripComponent.prototype.product_nameChange = function (row) {
        var _this = this;
        setTimeout(function () {
            _this.select.products.some(function (item) {
                if (item.product_name == row.product_name) {
                    // row.product_name = item.name;
                    row.unit_code = item.unit_code ? _this.checkUnitCode(item.unit_code) : _this.getUnitCodeByUnitName(item.unit_name);
                    row.unit_name = item.unit_name;
                    row.quantity = item.quantity ? parseFloat(item.quantity) : item.quantity;
                    // row.price_after_vat = item.price_after_vat ? parseFloat(item.price_after_vat) : item.price_after_vat;
                    row.price = item.price ? parseFloat(item.price) : item.price;
                    // row.price_nte = item.price_nte ? parseFloat(item.price_nte) : item.price_nte;
                    row.amount = item.price ? parseFloat(item.price) : null;
                    // row.discount_on_price = item.discount_on_price;
                    // row.price_after_discount = item.price_after_discount;
                    row.amount_discount = item.amount_discount;
                    // row.chassis_number = item.chassis_number;
                    // row.color_material = item.color_material;
                    // row.product_date = item.product_date;
                    // row.product_exchange_rate = item.product_exchange_rate;
                    // row.other_tax = item.other_tax;
                    // row.other_charge = item.other_charge;
                    // row.items_number = item.items_number;
                    // row.number_real_export = item.number_real_export ? parseFloat(item.number_real_export) : null;
                    // row.number_real_import = item.number_real_import ? parseFloat(item.number_real_import) : null;
                    // row.mpq = item.mpq;
                    // row.complete_order_date = item.complete_order_date;
                    // row.contract_order = item.contract_order;
                    // row.management_code = item.management_code;
                    row.is_promotion = item.is_promotion;
                    row.commercial_discount = item.commercial_discount;
                    row.is_explain = item.is_explain;
                    // row.lot = item.lot;
                    // row.expiration_date = item.expiration_date;
                    // row.country_code = item.country_code;
                    if (_this.isHdGTGT) {
                        row.vat = item.vat != null ? item.vat.toString() : null;
                        row.amount_vat = null;
                        row.amount_after_vat = null;
                        if (row.amount != null && row.vat != null) {
                            row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                            row.amount_after_vat = row.amount + row.amount_vat;
                        }
                    }
                    else {
                        row.amount_after_vat = row.amount;
                    }
                    _this.bill_products.update(row.order, row);
                    return true;
                }
            });
            _this._tinhGiaTri();
        }, 200);
    };
    AdjustProductGripComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    AdjustProductGripComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType == 'data') {
            e.rowElement.style.whiteSpace = 'pre-wrap';
        }
    };
    AdjustProductGripComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField === 'product_name' && e.parentType === 'dataRow' && e.editorName !== 'dxSelectBox') {
            e.editorName = 'dxTextArea';
        }
        if (e.dataField !== 'product_name' && e.dataField !== 'adjustment_form' && e.dataField !== 'unit_code') {
            if (e.row.data.adjustment_form == 'THONG_TIN')
                e.editorOptions.disabled = true;
        }
    };
    AdjustProductGripComponent.prototype.onEditorPrepared = function (e) {
        if ((e.dataField === 'amount_without_discount' || e.dataField === 'discount' || e.dataField === 'amount_discount' || e.dataField === 'quantity' || e.dataField === 'price' || e.dataField === 'amount' || e.dataField === 'amount_vat' || e.dataField === 'amount_after_vat') && e.parentType === 'dataRow') {
            e.editorElement.childNodes[1].firstChild.onwheel = function (evt) {
                e.component.cancelEditData();
            };
            e.editorElement.childNodes[1].firstChild.addEventListener('select', function () {
                this.selectionStart = this.selectionEnd;
            }, false);
        }
    };
    AdjustProductGripComponent.prototype.onContextMenuPreparing = function (e) {
        var _this = this;
        if (e.row && e.row.rowType === 'data') {
            e.items = [{
                    text: 'Thêm hàng',
                    onItemClick: function () {
                        _this.addRow(e.row.rowIndex);
                    }
                },
                {
                    text: 'Xóa hàng',
                    onItemClick: function () {
                        _this.deleteRow(e.row.data);
                    }
                }];
        }
    };
    /* Thêm dòng hàng hóa */
    AdjustProductGripComponent.prototype.addRow = function (rowIndexFocus) {
        if (rowIndexFocus >= 0) {
            var rowIndex = rowIndexFocus + 1;
            var data = this.frmData.add_bill_products_data(rowIndex, rowIndex);
            if (data) {
                this.bill_products._array.splice(rowIndex, 0, data);
                var order_1 = 0;
                this.bill_products._array.forEach(function (item) {
                    item.order = ++order_1;
                    item.view_order = item.order;
                });
            }
        }
        else {
            var len_1, order = void 0, orderLast_1;
            this.bill_products.load().then(function (dataSource) {
                len_1 = dataSource.length;
                orderLast_1 = dataSource[len_1 - 1].order;
            });
            for (var i = 0; i < this.rowData; i++) {
                if (len_1 >= 1) {
                    order = ++orderLast_1;
                }
                else {
                    order = 1;
                }
                var data = this.frmData.add_invoice_products_data(order, order);
                this.bill_products.insert(data);
            }
        }
        this.dataSource.reload();
    };
    AdjustProductGripComponent.prototype.view_orderChange = function () {
        var _this = this;
        var _index = 0;
        this.dataSource.items().forEach(function (item) {
            if (item.view_order && _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) != _config_sEnum__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                item.view_order = ++_index;
            }
        });
    };
    // Thay đổi cột mã hàng
    AdjustProductGripComponent.prototype.product_codeChangeFull = function (row) {
        var _this = this;
        this.productsFull.some(function (item) {
            if (item.code === row.product_code) {
                _this.productsService.getProduct(item.id).subscribe(function (rs) {
                    if (rs.status == "success") {
                        var product = rs.data.product;
                        if (product) {
                            row.product_name = product.name;
                            row.unit_code = product.unit_code ? _this.checkUnitCode(product.unit_code) : _this.getUnitCodeByUnitName(product.unit_name);
                            row.quantity = null;
                            if (_this.isHdGTGT)
                                row.vat = product.vat != null ? product.vat.toString() : null;
                            if (_this.configs.system_parameter.price_after_vat) {
                                row.price_after_vat = product.price ? parseFloat(product.price) : product.price;
                                if ((row.vat == 5 || row.vat == 10) && row.price_after_vat)
                                    row.price = (row.price_after_vat / (1 + row.vat / 100));
                                else
                                    row.price = row.price_after_vat;
                            }
                            else
                                row.price = product.price ? parseFloat(product.price) : product.price;
                            row.amount = product.price ? parseFloat(product.price) : 0;
                            if (_this.isHdGTGT) {
                                row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                                row.amount_after_vat = row.amount + row.amount_vat;
                            }
                            else {
                                row.amount_after_vat = row.amount;
                            }
                            row.is_promotion = item.is_promotion;
                            row.commercial_discount = item.commercial_discount;
                            row.is_explain = item.is_explain;
                            _this.bill_products.update(row.order, row);
                            _this._tinhGiaTri();
                            return true;
                        }
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
                    }
                });
            }
        });
    };
    AdjustProductGripComponent.prototype.product_codeChange = function (row) {
        var _this = this;
        setTimeout(function () {
            _this.select.products.some(function (item) {
                if (item.product_code == row.product_code) {
                    row.product_name = item.product_name;
                    row.unit_code = item.unit_code ? _this.checkUnitCode(item.unit_code) : _this.getUnitCodeByUnitName(item.unit_name);
                    row.unit_name = item.unit_name;
                    row.quantity = item.quantity ? parseFloat(item.quantity) : item.quantity;
                    // row.price_after_vat = item.price_after_vat ? parseFloat(item.price_after_vat) : item.price_after_vat;
                    row.price = item.price ? parseFloat(item.price) : item.price;
                    // row.number_real_export = item.number_real_export ? parseFloat(item.number_real_export) : null;
                    // row.number_real_import = item.number_real_import ? parseFloat(item.number_real_import) : null;
                    // row.price_nte = item.price_nte ? parseFloat(item.price_nte) : item.price_nte;
                    if (item.quantity == null || item.quantity == 0 || item.price === 0) {
                        row.amount = item.amount ? parseFloat(item.amount) : 0;
                    }
                    else {
                        row.amount = item.price ? parseFloat(item.price) : 0;
                    }
                    // row.engine_number = item.engine_number;
                    // row.discount_on_price = item.discount_on_price;
                    // row.price_after_discount = item.price_after_discount;
                    row.amount_discount = item.amount_discount;
                    // row.chassis_number = item.chassis_number;
                    // row.color_material = item.color_material;
                    // row.product_date = item.product_date;
                    // row.product_exchange_rate = item.product_exchange_rate;
                    // row.other_tax = item.other_tax;
                    // row.other_charge = item.other_charge;
                    // row.items_number = item.items_number;
                    // row.mpq = item.mpq;
                    // row.complete_order_date = item.complete_order_date;
                    // row.contract_order = item.contract_order;
                    // row.management_code = item.management_code;
                    row.is_promotion = item.is_promotion;
                    row.commercial_discount = item.commercial_discount;
                    row.is_explain = item.is_explain;
                    // row.lot = item.lot;
                    // row.expiration_date = item.expiration_date;
                    // row.country_code = item.country_code;
                    if (_this.isHdGTGT) {
                        row.vat = item.vat != null ? item.vat.toString() : null;
                        row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                        row.amount_after_vat = row.amount + row.amount_vat;
                    }
                    else {
                        row.amount_after_vat = row.amount;
                    }
                    _this.bill_products.update(row.order, row);
                    return true;
                }
            });
            _this._tinhGiaTri();
        });
    };
    AdjustProductGripComponent.prototype.unit_codeChange = function (row) {
        var _obj = this.select.unit_codes.filter(function (p) { return p.code === row.unit_code; })[0];
        if (_obj) {
            row.unit_name = _obj.name;
            this.bill_products.update(row.id, row);
        }
        else {
            row.unit_name = '';
            this.bill_products.update(row.id, row);
        }
    };
    AdjustProductGripComponent.prototype.country_codeChange = function (row) {
        var _obj = this.select.countrys.filter(function (p) { return p.code === row.country_code; })[0];
        if (_obj) {
            row.country_name = _obj.name;
            this.bill_products.update(row.id, row);
        }
        else {
            row.country_name = '';
            this.bill_products.update(row.id, row);
        }
    };
    AdjustProductGripComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code === unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    AdjustProductGripComponent.prototype._tinhGiaTri = function () {
        var _this = this;
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.bill_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, _this.select, _this._oTemplateTT78, _this.configs.system_parameter);
            _this.amount_after_vat = _this.frmData.amount_after_vat;
            _this.frmData.amount_vat = _this.frmData.total_amount_vat;
            _this.handleVat(_this.frmData);
            _this.dataGrid.instance.refresh();
        });
    };
    AdjustProductGripComponent.prototype.handleVat = function (data) {
        var tax_information = [];
        if (data.amount_vat0 === 0) {
            tax_information.push({
                "vat": "0",
                "amount": data.total_amount_product_vat0,
                "amount_vat": data.amount_vat0,
                "amount_after_vat": data.amount_after_vat0
            });
        }
        if (data.amount_vat5) {
            tax_information.push({
                "vat": "5",
                "amount": data.total_amount_product_vat5,
                "amount_vat": data.amount_vat5,
                "amount_after_vat": data.amount_after_vat5
            });
        }
        if (data.amount_vat10) {
            tax_information.push({
                "vat": "10",
                "amount": data.total_amount_product_vat10,
                "amount_vat": data.amount_vat10,
                "amount_after_vat": data.amount_after_vat10
            });
        }
        if (data.amount_vat8) {
            tax_information.push({
                "vat": "8",
                "amount": data.total_amount_product_vat8,
                "amount_vat": data.amount_vat8,
                "amount_after_vat": data.amount_after_vat8
            });
        }
        if (data.amount_vatx) {
            tax_information.push({
                "vat": "x",
                "amount": data.total_amount_product_vatx,
                "amount_vat": data.amount_vatx,
                "amount_after_vat": data.amount_after_vatx
            });
        }
        if (data.amount_vat_other) {
            tax_information.push({
                "vat": "KHAC",
                "amount": data.total_amount_product_vat_other,
                "amount_vat": data.amount_vat_other,
                "amount_after_vat": data.amount_after_vat0
            });
        }
        this.frmData.tax_information = tax_information;
    };
    AdjustProductGripComponent.prototype.caculatorAmountVat = function (amount, vat) {
        var temp = amount / 100 * vat;
        return this.roundNumber(temp, 5);
    };
    AdjustProductGripComponent.prototype.roundNumber = function (number, n) {
        var p = Math.pow(10, n);
        return Math.round(number * p) / p;
    };
    // Bật modal thay đổi số thập phân
    AdjustProductGripComponent.prototype.configDecimal = function (n) {
        var _this = this;
        var initialState = {
            column: n,
            formatter: this.formatter,
            showDonGiaNte: this.configs.system_parameter.view_price_nte
        };
        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_9__["ConfigDecimalComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                _this.formatter[data.column] = data.character;
                _this._tinhGiaTri();
            }
        });
    };
    // Xóa hàng
    AdjustProductGripComponent.prototype.deleteRow = function (item) {
        var _this = this;
        // setTimeout(() => {
        var check = confirm('Bạn có đồng ý xóa không?');
        if (check && !this.ttDaXuatHoaDon) {
            setTimeout(function () {
                _this.bill_products.remove(item.id);
                // this.dataSource.store().remove(item.id);
                _this.dataSource.reload();
                _this._tinhGiaTri();
            });
        }
        // }, 200);
    };
    AdjustProductGripComponent.prototype.updateSomeTotalInputNotCheckCktm = function () {
        var _this = this;
        setTimeout(function () {
            _this.gripChange.emit([_this.dataSource, _this.bill_products, _this.formatter]);
        }, 200);
    };
    // Lấy mẫu bảng kê
    AdjustProductGripComponent.prototype.layMauBangKe = function () {
        _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var fields = [];
        if (this.configs.system_parameter) {
            // diễn giải
            if (!this.configs.system_parameter.is_promotion) {
                fields.push('is_explain');
            }
            // Khuyễn mại
            if (!this.configs.system_parameter.promotional_goods_on_the_invoice) {
                fields.push('is_promotion');
            }
            // ct khuyến mại
            if (!this.configs.system_parameter.commercial_discount) {
                fields.push('commercial_discount');
            }
        }
        if (!this.isHdGTGT) {
            fields.push('vat');
            fields.push('amount_vat');
        }
        this.billService.layFileMauMayTinhTien({
            customer_name: this.frmData.customer_name,
            buyer_tax_code: this.frmData.buyer_tax_code,
            buyer_address: this.frmData.buyer_address,
            buyer_name: this.frmData.buyer_name,
            invoice_type_name: '',
            hiddens: fields
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                var file = rs.data.invoice;
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        });
    };
    AdjustProductGripComponent.prototype.onFileBangKeChange = function (evt) {
        var _this = this;
        var target = (evt.target);
        if (target.files.length !== 1) {
            throw new Error('Không thể chọn nhiều file');
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_14__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].sheet_to_json(ws, { header: 'A', range: 9 }));
            var account = (xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].sheet_to_json(ws, { header: 'A', range: 0 }));
            var fileBangKe = document.getElementById('file-bang-ke');
            fileBangKe.value = '';
            var _arrData = [];
            if (data && data[0]) {
                var columnsName = data.map(function (e) { return e.A; });
                var _index = columnsName.indexOf("view_order");
                if (_index == -1) {
                    _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("File mẫu không đúng định dạng. Vui lòng nhấn vào Tại đây để lấy lại file mẫu", "error");
                    return false;
                }
                else {
                    if (_index > 0) {
                        data.splice(0, _index);
                    }
                    for (var i = 1; i < data.length; i++) {
                        var _row = {};
                        for (var key in data[i]) {
                            if (data[i].hasOwnProperty(key)) {
                                var column = data[0][key];
                                var value = data[i][key];
                                _row[column] = value;
                            }
                        }
                        _arrData.push(_row);
                    }
                }
            }
            _this.dataExcelFile = _arrData;
            _this.dataExcelFileInfo = account.slice(0, 4);
        };
        reader.readAsBinaryString(target.files[0]);
    };
    AdjustProductGripComponent.prototype.thayTheToanBo = function () {
        if (this.oldForm.origin) {
            this.fillData(this.oldForm.origin.bill_products);
        }
        else {
            this.fillData(this.oldForm.bill_products);
        }
    };
    AdjustProductGripComponent.prototype.fillData = function (fileData) {
        var _this = this;
        setTimeout(function () {
            _this.bill_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    _this.bill_products.remove(item.id);
                });
            });
            fileData.forEach(function (element) {
                if (element.product_name) {
                    var bill = new Object();
                    bill['id'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].makeid();
                    bill['order'] = element.view_order ? parseInt(element.view_order) : null;
                    bill['product_code'] = element.product_code ? element.product_code : "";
                    bill['product_name'] = element.product_name ? element.product_name : "";
                    bill['quantity'] = element.quantity;
                    bill['vat'] = element.vat;
                    bill["amount_vat"] = element.amount_vat;
                    bill['amount'] = element.amount;
                    bill["unit_code"] = element.unit_name ? _this.getUnitCodeByUnitName(element.unit_name) : "";
                    bill["unit_name"] = element.unit_name ? element.unit_name : "";
                    bill["price"] = element.price;
                    bill["discount"] = element.discount ? element.discount : null;
                    bill["amount_discount"] = element.amount_discount ? element.amount_discount : null;
                    if (bill["amount_vat"] !== null && bill["amount"] !== null)
                        bill["amount_after_vat"] = bill["amount_vat"] + bill["amount"];
                    else if (bill["amount"] !== null)
                        bill["amount_after_vat"] = bill["amount"];
                    else if (bill["amount_vat"] !== null)
                        bill["amount_after_vat"] = bill["amount_vat"];
                    else
                        bill["amount_after_vat"] = null;
                    bill["is_explain"] = element.is_explain;
                    bill["is_promotion"] = element.is_promotion;
                    bill["commercial_discount"] = element.commercial_discount;
                    _this.bill_products.insert(bill);
                }
            });
            setTimeout(function () {
                _this.dataGrid.instance.columnOption('unit_code', 'lookup', {
                    dataSource: _this.select.unit_codes,
                    displayExpr: 'name',
                    valueExpr: 'code'
                });
            });
            _this.dataGrid.instance.refresh();
            _this._tinhGiaTri();
            _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        }, 1);
    };
    AdjustProductGripComponent.prototype.getUnitCodeByUnitName = function (unitName) {
        if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(unitName) !== '') {
            if (this.select.unit_codes && this.select.unit_codes.length > 0) {
                var _obj = this.select.unit_codes.filter(function (p) { return p.name === unitName; })[0];
                if (_obj) {
                    return _obj.code;
                }
                else {
                    var code_1 = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._convertToViKdau(unitName);
                    var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === code_1; })[0];
                    if (oDuplicate)
                        code_1 = code_1 + _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].addtionalUnitCode();
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
    AdjustProductGripComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    AdjustProductGripComponent.prototype.changeCKTM = function (row) {
        this._tinhGiaTri();
    };
    AdjustProductGripComponent.prototype.onClickGuidReduce = function () {
        this.router.navigate([]).then(function (result) { window.open('https://ihoadon.vn/hddt/danh-muc-hang-hoa-dich-vu-duoc-giam-thue-gtgt-theo-nghi-quyet-so-406-nq-ubtvqh15.html', '_blank'); });
    };
    AdjustProductGripComponent.prototype._changeND92 = function (e) {
        if (e.value)
            this.frmData.is_resolution_43 = !e.value;
        this._tinhGiaTri();
    };
    AdjustProductGripComponent.prototype._changeNQ43 = function (e) {
        if (e.value) {
            this.frmData.is_exemption_decree = !e.value;
            if (this.frmData.sales_percentage == null && parseInt(this.configs.system_parameter.value_rate_percent) > 0) {
                this.frmData.sales_percentage = parseInt(this.configs.system_parameter.value_rate_percent);
            }
        }
        else {
            this.frmData.sales_percentage = null;
        }
        this._tinhGiaTri();
    };
    AdjustProductGripComponent.prototype.cktmChange = function (row) {
        this._tinhGiaTri();
    };
    AdjustProductGripComponent.prototype.onFieldDataChanged = function () {
        // this.formEvent.emit(this.frmData);
    };
    AdjustProductGripComponent.prototype.ShowAndHidePhuongThucDC = function (value, phuongThucDieuChinh) {
        var _this = this;
        if (phuongThucDieuChinh == 'GIAM_HH_DV' || phuongThucDieuChinh == 'TANG_HH_DV') {
            this.isHangHoaDichVu = true;
        }
        else {
            this.isHangHoaDichVu = false;
        }
        this.isPhuongThucDC = value;
        this.isAll = value;
        setTimeout(function () {
            _this.dataGrid.instance.refresh();
        }, 100);
    };
    AdjustProductGripComponent.prototype.changeColumnProductNameToText = function () {
        var _this = this;
        if (this.isPXKDaiLy || this.isPXKNB) {
            this.isAll = true;
        }
        else {
            if (this.configs.system_parameter.is_add_product_code) {
                this.isAll = true;
            }
            else {
                this.isTextProductName = false;
            }
            setTimeout(function () {
                _this.dataGrid.instance.refresh();
            }, 100);
        }
    };
    AdjustProductGripComponent.prototype.changeColumnProductNameToSelect = function () {
        var _this = this;
        this.isAll = false;
        this.isTextProductName = true;
        setTimeout(function () {
            _this.dataGrid.instance.refresh();
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxDataGridComponent"])
    ], AdjustProductGripComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustProductGripComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustProductGripComponent.prototype, "bill_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustProductGripComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustProductGripComponent.prototype, "oldForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustProductGripComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustProductGripComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustProductGripComponent.prototype, "listTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AdjustProductGripComponent.prototype, "isHdGTGT", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustProductGripComponent.prototype, "invoiceTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('gripChange'),
        __metadata("design:type", Object)
    ], AdjustProductGripComponent.prototype, "gripChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('autoChange'),
        __metadata("design:type", Object)
    ], AdjustProductGripComponent.prototype, "autoChange", void 0);
    AdjustProductGripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adjust-product-grip',
            template: __webpack_require__(/*! ./adjust-product-grip.component.html */ "./src/app/modules/handle-bills/components/adjust/adjust-product-grip/adjust-product-grip.component.html"),
            styles: [__webpack_require__(/*! ./adjust-product-grip.component.scss */ "./src/app/modules/handle-bills/components/adjust/adjust-product-grip/adjust-product-grip.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_7__["BillService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_8__["ProductsService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"]])
    ], AdjustProductGripComponent);
    return AdjustProductGripComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/components/bills-cancel/bills-cancel.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/bills-cancel/bills-cancel.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.cancel_invoice}}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid\r\n    id=\"invoiceHistoryGrid\"\r\n    [dataSource]=\"dataSource\"\r\n    [showBorders]=\"true\"\r\n    [wordWrapEnabled]=\"true\"\r\n    (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\"\r\n    [showRowLines]=\"true\">\r\n    <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n    <!-- Số hóa đơn -->\r\n    <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"bill_number\"\r\n              caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n              alignment=\"center\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Mẫu số, ký hiệu -->\r\n    <dxi-column cellTemplate=\"templateCode\"\r\n              caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Ngày hóa đơn -->\r\n    <dxi-column dataField=\"bill_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n              format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Mã số thuế -->\r\n     <dxi-column dataField=\"buyer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"left\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Tên khách hàng -->\r\n    <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\"\r\n              alignment=\"left\" minWidth=\"200\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Địa chỉ bên mua -->\r\n    <!-- <dxi-column dataField=\"buyer_address\" caption=\"{{_translate.CONTROLL.LABEL.address}}\" minWidth=\"200\" \r\n                [allowEditing]=\"false\" alignment=\"left\" [allowEditing]=\"false\">\r\n    </dxi-column> -->\r\n    <!-- Tổng tiền -->\r\n    <dxi-column dataField=\"total_payment\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" alignment=\"right\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\" [allowEditing]=\"false\" dataType=\"number\" format=\"0,###.##\">\r\n    </dxi-column>\r\n    <!-- Số văn bản -->\r\n    <!-- <dxi-column dataField=\"doc_relate_symbol\" [allowEditing]=\"!isView\"\r\n                caption=\"{{_translate.CONTROLL.LABEL.doc_relate_symbol}}\" minWidth=\"150\" alignment=\"left\">\r\n    </dxi-column> -->\r\n    <!-- Ngày văn bản -->\r\n    <!-- <dxi-column dataField=\"doc_relate_date\" [allowEditing]=\"!isView\" \r\n                caption=\"{{_translate.CONTROLL.LABEL.doc_relate_date}}\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"left\" minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\">\r\n    </dxi-column> -->\r\n    <!-- Ngày hủy -->\r\n    <dxi-column dataField=\"destroy_date\"\r\n                caption=\"{{ 'GRID.INVOICE.date_cancel' | translate }}\" [editorOptions]=\"{ placeholder: 'dd/MM/yyyy',useMaskBehavior:true }\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\">\r\n    </dxi-column>\r\n    <!-- Lý do hủy -->\r\n    <dxi-column dataField=\"destroy_reason\"\r\n                caption=\"{{_translate.CONTROLL.LABEL.destroy_reason}}\" alignment=\"left\" minWidth=\"150\">\r\n    </dxi-column>\r\n    <!-- Email -->\r\n    <!-- <dxi-column dataField=\"buyer_email\" [allowEditing]=\"!isView\" \r\n                caption=\"Email\" alignment=\"left\" minWidth=\"150\">\r\n    </dxi-column> -->\r\n    <!-- <dxi-column cellTemplate=\"DinhKemFile\" caption=\"{{_translate.CONTROLL.LABEL.attach_file}}\" [width]=\"150\" alignment=\"left\"></dxi-column> -->\r\n    <!-- <dxi-column *ngIf=\"!isView\" cellTemplate=\"downloadBB\" caption=\"{{_translate.CONTROLL.LABEL.doc_relate}}\" [width]=\"90\" alignment=\"center\"></dxi-column> -->\r\n\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n      <p>{{ d.data.template_code }}</p>\r\n      <p>{{ d.data.bill_series }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\"  href=\"javascript:void(0)\">{{ d.data.bill_number }}<span\r\n        *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.buyer_name }}</p>\r\n      <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.buyer_name || _translate.GRID.INVOICE.invoice_wait_for_sign }}</p>\r\n    </div>\r\n      <div *dxTemplate=\"let data of 'DinhKemFile'\">\r\n          <a href=\"javascript:void(0)\" (click)=\"dinhKemFile($event)\">\r\n            <input type=\"file\" id=\"file-dinh-kem\" [attr.data-rowindex]=\"data.rowIndex\" accept=\".xlsx, .docx, .doc, .pdf, .xls, .xml\" (change)=\"onDinhKemFile($event)\" multiple=\"false\" style=\"display: none;\"/>\r\n             <p *ngIf=\"!isView || data.data.adjustment_type == '7'\">Chọn file</p>\r\n            <p *ngIf=\"data.data.invoice_files&&data.data.invoice_files.length\" (click)=\"downloadFile(data.data.invoice_files[0])\">{{data.data.invoice_files[0].file_name}}</p>\r\n          </a>\r\n        </div>\r\n      <!-- <div *dxTemplate=\"let d of 'downloadBB'\">\r\n          <a href=\"javascript:void(0)\" (click)=\"xuatMauBienBan(d.data)\"><img src=\"assets\\img\\icons\\TaiMauBangKe.png\"></a>\r\n        </div> -->\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button disableDoubleClick *ngIf=\"!isView\" text=\"{{_translate.CONTROLL.BUTTON.save }}\" (click)=\"xoaBo()\" icon=\"{{_translate.ICONS.save }}\" type=\"default\" validationGroup=\"formData\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" icon=\"{{_translate.ICONS.come_back }}\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/bills-cancel/bills-cancel.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/bills-cancel/bills-cancel.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/handle-bills/components/bills-cancel/bills-cancel.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/bills-cancel/bills-cancel.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BillsCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsCancelComponent", function() { return BillsCancelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_handle_bills_shared_handlebill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/handle-bills/shared/handlebill.service */ "./src/app/modules/handle-bills/shared/handlebill.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var BillsCancelComponent = /** @class */ (function () {
    function BillsCancelComponent(bsModalRef, socketService, handlebillService, authService, translate, router) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.socketService = socketService;
        this.handlebillService = handlebillService;
        this.authService = authService;
        this.translate = translate;
        this.router = router;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.emailPattern = _config_pattern__WEBPACK_IMPORTED_MODULE_2__["pattern"].email;
        this.isTT78 = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    BillsCancelComponent.prototype.ngOnInit = function () {
        this.invoicesStore = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7___default.a({
            key: 'id',
            data: this.data
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8___default.a({
            store: this.invoicesStore
        });
        if (this.infoDangKy && this.infoDangKy.id) {
            if (this.infoDangKy.status == "CHAP_NHAN")
                this.isTT78 = true;
        }
        // this.invoicesStore.load().then((dataSource) => {
        //   dataSource.forEach((item, index) => {
        //     item.doc_relate_symbol = this.createDocRelateNumber();
        //   });
        // });
        this.connectWebsocket();
    };
    BillsCancelComponent.prototype.createDocRelateNumber = function () {
        var number_report = "";
        if (this.countReport < 10)
            number_report = '0' + this.countReport + '/' + new Date().getFullYear() + '/BB-HBHĐ';
        else
            number_report = this.countReport + '/' + new Date().getFullYear() + '/BB-HBHĐ';
        this.countReport++;
        return number_report;
    };
    BillsCancelComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDonImport().subscribe(function (message) {
            var data = message;
            if (data.Status == 'success') {
                if (data.SvcName == "efy_Sign") {
                    var i = _this.invoiceIndex;
                    if (data.Data.Name == 'hoadon.xml') {
                        _this.goiApiXuatHoaDon(_this.bills[i]);
                    }
                    else if (data.Data.Name == 'ten_filek_the_trung-dc-nhi.xml') {
                        _this.bills[i].issuer_name = data.Data.IssuerName;
                        _this.xuLiApiKhiXuat(_this.bills[i]);
                    }
                    else {
                        _this.bills[i].invoice_files.forEach(function (item) {
                            if (item.file_name == data.Data.Name) {
                                item.file_content = data.Data.Content;
                            }
                        });
                        _this.tempKiFile++;
                        if (_this.tempKiFile == _this.bills[i].invoice_files.length) {
                            _this.xuLiApiKhiXuat(_this.bills[i]);
                        }
                    }
                }
            }
            else {
                _this.showPopup = false;
                _this.errorImport = true;
                _core_library__WEBPACK_IMPORTED_MODULE_11__["Library"].notify(data.Description, 'error');
            }
        });
    };
    BillsCancelComponent.prototype._validGrid = function () {
        var _this = this;
        var invalid = true;
        this.invoicesStore.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                item.doc_relate_date = item.doc_relate_date ? moment__WEBPACK_IMPORTED_MODULE_10__(item.doc_relate_date).format('YYYY-MM-DD') : item.doc_relate_date;
                item.destroy_date = item.destroy_date ? moment__WEBPACK_IMPORTED_MODULE_10__(item.destroy_date).format('YYYY-MM-DD') : item.destroy_date;
                if (!item.destroy_date && invalid) {
                    _core_library__WEBPACK_IMPORTED_MODULE_11__["Library"].notify(_this._translate.CONTROLL.LABEL.cancel_date + " " + _this._translate.VALIDATION.required, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_date'));
                    invalid = false;
                    return false;
                }
                else {
                    var currentDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_10__(item.destroy_date) > moment__WEBPACK_IMPORTED_MODULE_10__(currentDate) && invalid) {
                        _core_library__WEBPACK_IMPORTED_MODULE_11__["Library"].notify(_this._translate.NOTIFY.date_cancel_invoice_not_greater_date_current, 'error');
                        _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_date'));
                        invalid = false;
                        return false;
                    }
                    var bill_date = moment__WEBPACK_IMPORTED_MODULE_10__(item.bill_date).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_10__(item.destroy_date) < moment__WEBPACK_IMPORTED_MODULE_10__(bill_date) && invalid) {
                        _core_library__WEBPACK_IMPORTED_MODULE_11__["Library"].notify(_this._translate.NOTIFY.date_cancel_invoice_greater_or_equal_date_invoice, 'error');
                        _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_date'));
                        invalid = false;
                        return false;
                    }
                }
                if (!item.destroy_reason && invalid) {
                    _core_library__WEBPACK_IMPORTED_MODULE_11__["Library"].notify(_this._translate.CONTROLL.LABEL.reason_cancels + " " + _this._translate.VALIDATION.required, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_reason'));
                    invalid = false;
                    return false;
                }
                if (item.buyer_email && !_this.emailPattern.test(item.buyer_email) && invalid) {
                    _core_library__WEBPACK_IMPORTED_MODULE_11__["Library"].notify('Email ' + _this._translate.VALIDATION.not_pattern, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'buyer_email'));
                    invalid = false;
                    return false;
                }
            });
        });
        return invalid;
    };
    BillsCancelComponent.prototype.xoaBo = function () {
        var _this = this;
        // if (!InvoicesService.checkTimeExportInv(this.configs.system_parameter)) {
        //   Library.notify(String.Format(this._translate.NOTIFY.time_export_inv, moment(this.configs.system_parameter.time_start).format('HH:mm'), moment(this.configs.system_parameter.time_end).format('HH:mm')), 'error');
        //   return;
        // }
        setTimeout(function () {
            if (_this._validGrid()) {
                _core_library__WEBPACK_IMPORTED_MODULE_11__["Library"].confirmVA(_this._translate.CONFIRM.acction_function, _this._translate.NOTIFY.notify, function () {
                    _this.showPopup = true;
                    _this.invoicesStore.load().then(function (dataSource) {
                        if (dataSource.length > 0) {
                            _this.bills = dataSource.filter(function (p) { return p.adjustment_type != '7'; });
                            _this.totalInvoice = _this.bills.length;
                            _this.invoiceIndex = 0;
                            _this.tempKiFile = 0;
                            _this.xuatHoaDon();
                        }
                    });
                });
            }
        }, 300);
    };
    BillsCancelComponent.prototype.xuatHoaDon = function () {
        var i = this.invoiceIndex;
        this.xuLiApiKhiXuat(this.bills[i]);
    };
    BillsCancelComponent.prototype.xuLiApiKhiXuat = function (bill) {
        this.goiApiXuatHoaDon(bill);
    };
    BillsCancelComponent.prototype.goiApiXuatHoaDon = function (bill) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        var subXuatHoaDon = this.handlebillService.cancelInvoice({
            bill: {
                id: bill.id,
                destroy_reason: bill.destroy_reason,
                destroy_date: bill.destroy_date,
            }
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.valueProgress += percentComplete;
                _this.tempKiFile = 0;
                bill.adjustment_type = '7';
                if (_this.invoiceIndex < _this.totalInvoice - 1) {
                    _this.invoiceIndex++;
                    _this.xuatHoaDon();
                }
                else if (_this.invoiceIndex == _this.totalInvoice - 1) {
                    _core_library__WEBPACK_IMPORTED_MODULE_11__["Library"].notify(_this._translate.NOTIFY.cancel_invoice_done, 'success');
                    _this.isView = true;
                    setTimeout(function () {
                        _this.showPopup = false;
                    }, 300);
                }
            }
            else {
                _this.showPopup = false;
                _this.errorImport = true;
                _core_library__WEBPACK_IMPORTED_MODULE_11__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            // Library.hideloading();
            subXuatHoaDon.unsubscribe();
        });
    };
    BillsCancelComponent.prototype.dinhKemFile = function (evt) {
        evt.srcElement.firstChild.click();
    };
    BillsCancelComponent.prototype.choseFile = function (evt) {
        //evt.srcElement.firstChild.click();
        document.getElementById("file-input").click();
    };
    BillsCancelComponent.prototype.fileChanged = function (e) {
        var _this = this;
        setTimeout(function () {
            //let rowIndex = e.target.dataset.rowindex;
            var fileAttachData = [];
            var fileReader = new FileReader();
            var file = e.target.files[0];
            var pattFile = /(\.xlsx|\.docx|\.doc|\.pdf|\.xls|\.xml)$/i;
            // console.log(file)
            if (pattFile.test(file.name)) {
                fileReader.readAsDataURL(file);
                fileReader.onload = function (e) {
                    var base64result = fileReader.result.toString().split(',')[1];
                    fileAttachData.unshift({
                        type: "DK",
                        file_name: file.name,
                        file_content: base64result,
                    });
                    // if (document.getElementById('list-file')) {
                    //   document.getElementById('list-file').scrollTop = 0;
                    // }
                    var _lstAttach = [];
                    _lstAttach = _this.dataSource[0]["invoice_files"];
                    if (_lstAttach == null) {
                        _lstAttach = [];
                    }
                    else {
                        _lstAttach.push(fileAttachData[0]);
                    }
                    _this.dataSource[0]["invoice_files"] = _lstAttach;
                    // this.dataSource[rowIndex]["report_cancel_invoice_file_name"] = file.name;
                    //this.dataSource.reload();
                };
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_11__["Library"].notify("File bạn chọn không đúng định dạng xls, xlsx, doc, docx, pdf, xml", "error");
            }
        }, 200);
    };
    BillsCancelComponent.prototype.onDinhKemFile = function (e) {
        var _this = this;
        var rowIndex = e.target.dataset.rowindex;
        var fileAttachData = [];
        var fileReader = new FileReader();
        var file = e.target.files[0];
        var pattFile = /(\.xlsx|\.docx|\.doc|\.pdf|\.xls|\.xml)$/i;
        // console.log(file)
        if (pattFile.test(file.name)) {
            fileReader.readAsDataURL(file);
            fileReader.onload = function (e) {
                var test = fileReader.result;
                var base64result = fileReader.result.toString().split(',')[1];
                fileAttachData.unshift({
                    type: "DK",
                    file_name: file.name,
                    file_content: base64result,
                });
                if (document.getElementById('list-file')) {
                    document.getElementById('list-file').scrollTop = 0;
                }
                _this.invoicesStore.load().then(function (dataSource) {
                    dataSource.forEach(function (item, index) {
                        if (index == rowIndex)
                            item.invoice_files = fileAttachData;
                    });
                });
                // this.dataSource[rowIndex]["invoice_files"] = fileAttachData;
                // this.dataSource[rowIndex]["report_cancel_invoice_file_content"] = base64result;
                // this.dataSource[rowIndex]["report_cancel_invoice_file_name"] = file.name;
            };
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_11__["Library"].notify("File bạn chọn không đúng định dạng xls, xlsx, doc, docx, pdf, xml", "error");
        }
    };
    BillsCancelComponent.prototype.removeFile = function (i) {
        var _lstAttach = [];
        _lstAttach = this.dataSource[0]["invoice_files"];
        _lstAttach.splice(i, 1);
    };
    BillsCancelComponent.prototype.downloadFile = function (data) {
        var re = /(?:\.([^.]+))?$/;
        var fileType = re.exec(data.file_name)[1];
        _core_index__WEBPACK_IMPORTED_MODULE_12__["Helper"].dowloadFile(data.file_name, fileType, data.file_content);
    };
    BillsCancelComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    BillsCancelComponent.prototype.onImportHiding = function (e) {
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
    BillsCancelComponent.prototype.dong = function () {
        this.bsModalRef.hide();
        this.router.navigate(['/system/handle-bills/']);
    };
    BillsCancelComponent.prototype.onEditorPreparing = function (e) {
        if (e.parentType === 'dataRow') {
            if (e.dataField === 'destroy_date' || e.dataField === 'destroy_reason') {
                if (this.isView || e.row.data.adjustment_type == "7")
                    e.editorOptions.disabled = true;
            }
        }
    };
    BillsCancelComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            /* Bôi đỏ các trường bắt buộc */
            if (e.column.dataField == "destroy_date") {
                if (!e.data.destroy_date) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = this._translate.CONTROLL.LABEL.cancel_date + " " + this._translate.VALIDATION.required;
                }
                else {
                    var currentDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD');
                    var bill_date = moment__WEBPACK_IMPORTED_MODULE_10__(e.data.bill_date).format('YYYY-MM-DD');
                    var destroy_date = moment__WEBPACK_IMPORTED_MODULE_10__(e.data.destroy_date).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_10__(destroy_date) > moment__WEBPACK_IMPORTED_MODULE_10__(currentDate)) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = this._translate.NOTIFY.date_cancel_invoice_not_greater_date_current;
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_10__(destroy_date) < moment__WEBPACK_IMPORTED_MODULE_10__(bill_date)) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = this._translate.NOTIFY.date_cancel_invoice_greater_or_equal_date_invoice;
                    }
                }
            }
            if (e.column.dataField == "destroy_reason") {
                if (!e.data.destroy_reason) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = this._translate.CONTROLL.LABEL.reason_cancels + " " + this._translate.VALIDATION.required;
                }
            }
            if (e.column.dataField == "buyer_email") {
                if (e.data.buyer_email && !this.emailPattern.test(e.data.buyer_email)) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = 'Email ' + this._translate.VALIDATION.not_pattern;
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"])
    ], BillsCancelComponent.prototype, "dataGrid", void 0);
    BillsCancelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bills-cancel',
            template: __webpack_require__(/*! ./bills-cancel.component.html */ "./src/app/modules/handle-bills/components/bills-cancel/bills-cancel.component.html"),
            styles: [__webpack_require__(/*! ./bills-cancel.component.scss */ "./src/app/modules/handle-bills/components/bills-cancel/bills-cancel.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalRef"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _modules_handle_bills_shared_handlebill_service__WEBPACK_IMPORTED_MODULE_4__["HandlebillService"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BillsCancelComponent);
    return BillsCancelComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/components/index/index.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/index/index.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-7\">\r\n    <app-search-bill-advanced (searchContentChange)=\"getSearch($event)\" [isFormHandInvoice]=\"isFormHandInvoice\">\r\n    </app-search-bill-advanced>\r\n  </div>\r\n  <div class=\"col-md-5 list-header\" style=\"max-height: 70px;\">\r\n    <div class=\"pull-right button-panel\">\r\n      <dx-button (click)=\"BaoCaoCQT()\" icon=\"assets\\img\\icons\\DieuChinh.png\" text=\"Báo CQT HĐ sai\" type=\"default\">\r\n      </dx-button>\r\n      <dx-button (click)=\"dieuChinh()\" icon=\"assets\\img\\icons\\DieuChinh.png\"\r\n        text=\"{{ 'CONTROLL.BUTTON.adjusted' | translate }}\" [disabled]=\"selectedRows.length == 0\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"thayThe()\" icon=\"assets\\img\\icons\\ThayThe.png\"\r\n        text=\"{{ 'CONTROLL.BUTTON.replaced' | translate }}\" type=\"default\" [disabled]=\"selectedRows.length == 0\">\r\n      </dx-button>\r\n      <dx-button (click)=\"delete()\" [(icon)]=\"_translate.ICONS.delete\" text=\"Hủy HĐ\" type=\"default\"\r\n        [disabled]=\"selectedRows.length == 0\"></dx-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerInvoice\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\"\r\n  [showBorders]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\">\r\n  <!-- <dxo-selection selectAllMode=\"page\" mode=\"multiple\"> -->\r\n  <!-- </dxo-selection> -->\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\"></dxo-selection>\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"handleinvoice\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"single\"></dxo-sorting>\r\n  <!-- <dxo-selection mode=\"multiple\"></dxo-selection> -->\r\n  <dxo-filter-row [visible]=\"true\" showAllText='{{_translate.CONTROLL.COMBO.all}}'></dxo-filter-row>\r\n  <!-- Số hoá đơn -->\r\n  <dxi-column dataField=\"bill_number\" caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\"\r\n    [width]=\"_translate.GRID_WIDTH.so_hoa_don\" alignment=\"center\" sortOrder=\"desc\" [sortIndex]=\"1\"\r\n    headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n\r\n  <!-- Mẫu số/ký hiệu -->\r\n  <dxi-column cellTemplate=\"templateCode\"\r\n    caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n    [width]=\"_translate.GRID_WIDTH.mau_so_ky_hieu\" alignment=\"center\" [calculateFilterExpression]=\"calculateFilterExpressionMS\">\r\n    <dxo-lookup [dataSource]=\"dsMauSoKyHieu\" valueExpr=\"code\" [displayExpr]=\"displayFunction\"></dxo-lookup>\r\n  </dxi-column>\r\n  <!-- Ngày hoá đơn -->\r\n  <dxi-column dataField=\"bill_date\" [editorOptions]=\"{useMaskBehavior:true}\"\r\n    caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\" [width]=\"_translate.GRID_WIDTH.ngay_hoa_don\" dataType=\"date\"\r\n    format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    sortOrder=\"desc\" [sortIndex]=\"0\"></dxi-column>\r\n\r\n  <!-- Mã số thuế -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"receipts_no\"\r\n    caption=\"{{ 'GRID.INVOICE.receipts_no' | translate }}\" [filterOperations]=\"['=']\" width=\"{{_translate.GRID_WIDTH.so_phieu}}\" alignment=\"left\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"buyer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n    [width]=\"_translate.GRID_WIDTH.ma_so_thue\" alignment=\"left\">\r\n  </dxi-column>\r\n\r\n  <!-- Tên khách hàng -->\r\n  <dxi-column [filterOperations]=\"['contains']\" [calculateFilterExpression]=\"calculateFilterExpression\" cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\" alignment=\"left\">\r\n  </dxi-column>\r\n\r\n  <!-- Tổng tiền -->\r\n  <dxi-column dataField=\"total_payment_string\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" alignment=\"right\"\r\n    [width]=\"_translate.GRID_WIDTH.tong_tien\" [format]=\"formatter.tong_tien\"></dxi-column>\r\n\r\n  <!-- Tình trạng xử lý -->\r\n  <dxi-column dataField=\"adjustment_type\" cellTemplate=\"statusInvoice\" caption=\"{{ 'CONTROLL.LABEL.processing_status' | translate }}\"\r\n    [width]=\"_translate.GRID_WIDTH.trang_thai_gui_mail\" alignment=\"center\">\r\n    <dxo-lookup [dataSource]=\"dsTinhTrangXuLy\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup>\r\n  </dxi-column>\r\n\r\n  <!-- TT gửi HĐ sai sót -->\r\n  <dxi-column dataField=\"bill_wrongs\" cellTemplate=\"statusSendTax\" caption=\"TT gửi HĐ sai sót\" [width]=\"106\" alignment=\"center\">\r\n    <!-- <dxo-lookup [dataSource]=\"listWrongStatus\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup> -->\r\n  </dxi-column>\r\n\r\n  <dxi-column caption=\"Tác vụ\" cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_5}}\"\r\n    width=\"{{_translate.GRID_WIDTH.hanh_dong_5}}\" alignment=\"center\"></dxi-column>\r\n\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    <div *ngIf=\"d.data.bill_wrongs.length > 0\">\r\n      <a *ngIf=\"d.data.bill_wrongs[0].status == 'DA_GUI_CQT' || d.data.bill_wrongs[0].status == 'DA_GUI'\" href=\"javascript:void(0)\"\r\n        (click)=\"ThongDiepGuiNhan(d.data)\">Đã gửi\r\n        CQT</a>\r\n      <a *ngIf=\"d.data.bill_wrongs[0].status == 'KHONG_TIEP_NHAN'\" href=\"javascript:void(0)\"\r\n        (click)=\"ThongDiepGuiNhan(d.data)\">CQT không\r\n        tiếp nhận</a>\r\n        <a *ngIf=\"d.data.bill_wrongs[0].status == 'TIEP_NHAN'\" href=\"javascript:void(0)\" (click)=\"ThongDiepGuiNhan(d.data)\">CQT\r\n          tiếp nhận</a>\r\n      <a *ngIf=\"d.data.bill_wrongs[0].status == 'KHONG_CHAP_NHAN'\" href=\"javascript:void(0)\"\r\n        (click)=\"ThongDiepGuiNhan(d.data)\">CQT không chấp nhận</a>\r\n      <a *ngIf=\"d.data.bill_wrongs[0].status == 'CHAP_NHAN'\" href=\"javascript:void(0)\"\r\n        (click)=\"ThongDiepGuiNhan(d.data)\">CQT\r\n        chấp nhận</a>\r\n    </div>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let d of 'statusInvoice'\">\r\n    <ng-container [ngSwitch]=\"d.data.adjustment_type\">\r\n      <p *ngSwitchCase=\"1\">{{ 'GRID.GENERAL.original_invoice' | translate }}</p>\r\n      <p *ngSwitchCase=\"2\">{{ 'GRID.GENERAL.invoice_replaced' | translate }}</p>\r\n      <p *ngSwitchCase=\"3\">{{ 'GRID.GENERAL.invoice_replacement' | translate }}</p>\r\n      <p *ngSwitchCase=\"4\">{{ 'GRID.GENERAL.invoice_adjusted' | translate }}</p>\r\n      <p *ngSwitchCase=\"5\">{{ 'GRID.GENERAL.adjustment_invoice' | translate }}</p>\r\n      <p *ngSwitchCase=\"7\">{{ 'GRID.GENERAL.invoice_removed' | translate }}</p>\r\n    </ng-container>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p>{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.template_code }}</p>\r\n    <p>{{ d.data.bill_series }}</p>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a *ngIf=\"d.data.status =='GHI_TAM'\" style=\"float: right;\" title=\"{{_translate.CONTROLL.BUTTON.delete}}\"\r\n      class=\"xoaIcon actionIcon\" (click)=\"deleteItem(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n    <a *ngIf=\"d.data.status =='GHI_TAM'\" style=\"float: right;\" title=\"{{_translate.CONTROLL.BUTTON.edit}}\"\r\n      class=\"suaIcon actionIcon\" (click)=\"editNotSelect(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n    href=\"javascript:void(0)\">\r\n  </a>\r\n  </div>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" cssClass=\"dxi-total-payment-total_payment_string\" [customizeText]=\"customizeText\" showInColumn=\"total_payment_string\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 35, 50, 100]\" [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\">\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/index/index.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/index/index.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .view-bill{max-width:100%;margin:0px;height:100%}::ng-deep .truyen-nhan{max-width:80% !important;margin:auto}.pull-right{float:right;display:flex;flex-wrap:wrap;row-gap:5px}\n"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/index/index.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/index/index.component.ts ***!
  \**************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_handle_bills_shared_handlebill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/handle-bills/shared/handlebill.service */ "./src/app/modules/handle-bills/shared/handlebill.service.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _bills_cancel_bills_cancel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../bills-cancel/bills-cancel.component */ "./src/app/modules/handle-bills/components/bills-cancel/bills-cancel.component.ts");
/* harmony import */ var _report_tax_bill_error_report_tax_bill_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../report-tax-bill-error/report-tax-bill-error.component */ "./src/app/modules/handle-bills/components/report-tax-bill-error/report-tax-bill-error.component.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
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
    function IndexComponent(authService, modalService, router, templateService, translate, handlebillService, billService, vPreviewInvService, invoiceService) {
        var _this = this;
        this.authService = authService;
        this.modalService = modalService;
        this.router = router;
        this.templateService = templateService;
        this.translate = translate;
        this.handlebillService = handlebillService;
        this.billService = billService;
        this.vPreviewInvService = vPreviewInvService;
        this.invoiceService = invoiceService;
        this.selectedRows = [];
        this.showPopup = false;
        this.selectedItems = [];
        this.objStatusBtn = {};
        this.dsTinhTrangXuLy = [];
        this.dsMauSoKyHieu = [];
        this.listWrongStatus = [];
        this.displayFunction = function (item) {
            if (!item) {
                return 'Tất cả';
            }
            return item.name;
        };
        this.customizeText = function (url) {
            _this.invoiceService.handleTotalGrid(url.value, _this.objStatusBtn, _this.dataGrid);
            return '';
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        this.layDsMauSoKyHieu();
        this.dsTinhTrangXuLy = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_13__["VSelectBoxService"]._adjustmentTypes(this._translate);
        this.listWrongStatus = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_13__["VSelectBoxService"]._listWrongStatus(this._translate);
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        this.currentUser = this.authService.getCurrentUser();
        this.configs = this.authService.getConfigs();
        if (this.currentUser.is_convert_TT78) {
            this.infoDangKy = this.authService.getInfoRegister();
        }
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_2__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
    };
    IndexComponent.prototype.deleteItem = function (data) {
        var _this = this;
        var ids = data.id;
        var result = _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
        result.then(function (dialogResult) {
            if (dialogResult) {
                _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                _this.billService.delete(ids).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                        _this.loadList(_this.paramSearch);
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                });
            }
        });
    };
    IndexComponent.prototype.editNotSelect = function (row) {
        if (row.status != 'GHI_TAM') {
            _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Bạn không thể sửa hóa đơn đã xuất', 'error');
        }
        else {
            if (row.adjustment_type === '5') {
                this.router.navigate(["/system/handle-bills/edit-adjust/" + row.id]);
            }
            else if (row.adjustment_type === '3') {
                this.router.navigate(["/system/handle-bills/edit-replace/" + row.id]);
            }
        }
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType == 'data') {
            switch (e.data.status) {
                case 'DA_XUAT':
                    break;
                case 'GHI_TAM':
                    if (e.data.bill_number) {
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
    IndexComponent.prototype.loadList = function (params) {
        this.dataSource = {};
        this.dataSource.store = this.handlebillService.getAll(params);
    };
    IndexComponent.prototype.getSearch = function (e) {
        this.paramSearch = e;
        this.loadList(e);
    };
    IndexComponent.prototype.layDsMauSoKyHieu = function () {
        var _this = this;
        var template = this.templateService.getAll1().subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.dsMauSoKyHieu = rs.data.templates.filter(function (item) { return (item.template_type == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].templatetype.HoaDonKhoiTaoTumayTinhTien || item.template_type == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].templatetype.HoaDonMayTinhTien); });
                _this.dsMauSoKyHieu = _this.dsMauSoKyHieu.map(function (item) {
                    var template_code = item.template_code, invoice_series = item.invoice_series;
                    return {
                        code: template_code + "-" + invoice_series,
                        name: "" + template_code + invoice_series
                    };
                });
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            template.unsubscribe();
        });
    };
    // Huỷ hoá đơn
    IndexComponent.prototype.delete = function () {
        var _this = this;
        var ids = [];
        var lstInvoice = this.selectedItems.filter(function (p) { return p.adjustment_type == '1'; });
        lstInvoice = lstInvoice.sort(function (invA, invB) {
            return new Date(invB.bill_date) - new Date(invA.bill_date) || invB.bill_number.localeCompare(invA.bill_number);
        });
        ids = lstInvoice.map(function (e) { return e.id; });
        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var isView = false;
        if (ids.length > 0) {
            var sub_1 = this.handlebillService.showHDXoaBo(ids, isView).subscribe(function (rs) {
                var lstInvoice = rs[0].data.bills.filter(function (p) { return p.adjustment_type == '7'; });
                if (lstInvoice && lstInvoice.length > 0)
                    isView = true;
                var lstInv = [];
                ids.forEach(function (id) {
                    var inv = rs[0].data.bills.filter(function (p) { return p.id == id; })[0];
                    lstInv.push(inv);
                });
                var initialState = {
                    isView: isView,
                    data: lstInv,
                    configs: _this.configs,
                    infoDangKy: _this.infoDangKy
                };
                _this.bsModalRef = _this.modalService.show(_bills_cancel_bills_cancel_component__WEBPACK_IMPORTED_MODULE_10__["BillsCancelComponent"], {
                    class: 'modal-lg full-width', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    _this.selectedRows = [];
                    if (_this.bsModalRef.content.successSaveItem) {
                        _this.loadList(_this.paramSearch);
                    }
                });
            }, function (err) {
            }, function () {
                _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Không thể hủy hóa đơn này', 'error');
        }
    };
    IndexComponent.prototype.view = function (data) {
        if (this.selectedItems.length > 0 || data) {
            var _lst = this.selectedItems;
            var is_default_tempplate = true;
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
                    if (!_core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._attemptConvertBool(data.is_default_template))
                        is_default_tempplate = false;
                }
                else {
                    ids = _lst.map(function (e) { return e.id; });
                }
                if (is_default_tempplate) {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].typeCode.xem_hoa_don_mtt_html
                    };
                    this.vPreviewInvService.xemMauPhanTrang(initialState);
                }
                else {
                    if (this.configs.system_parameter.view_multi_invoice) {
                        var data_1 = this.billService.taodulieuXemMau(ids);
                        data_1['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].cauhinhxemmau.hoadon;
                        this.vPreviewInvService.xemMau(data_1);
                    }
                    else {
                        var initialState = {
                            items: ids,
                            isXuatHD: false,
                            hinhthucxuat: '',
                            typeAction: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].typeCode.xem_hoa_don_mtt,
                            cssClass: 'modal-xl view-bill'
                        };
                        this.vPreviewInvService.xemMauPhanTrang(initialState);
                    }
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    IndexComponent.prototype.selectionChanged = function (data) {
        this.selectedItems = data.selectedRowsData;
    };
    IndexComponent.prototype.onImportShowing = function (e) {
    };
    IndexComponent.prototype.onImportHiding = function () {
    };
    IndexComponent.prototype.BaoCaoCQT = function () {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.templateService.getAll1().subscribe(function (rs) {
            if (rs.status == 'success') {
                var listTemplate = rs.data.templates;
                var lstInvoice = _this.selectedItems;
                lstInvoice = lstInvoice.sort(function (invA, invB) {
                    return new Date(invB.bill_date) - new Date(invA.bill_date) || invB.bill_number.localeCompare(invA.bill_number);
                });
                var initialState = {
                    data: lstInvoice,
                    configs: _this.configs,
                    listTemplate: listTemplate,
                    infoDangKy: _this.infoDangKy
                };
                _this.bsModalRef = _this.modalService.show(_report_tax_bill_error_report_tax_bill_error_component__WEBPACK_IMPORTED_MODULE_11__["ReportTaxBillErrorComponent"], {
                    class: 'modal-lg full-width', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    _this.selectedRows = [];
                    if (_this.bsModalRef.content.successSaveItem) {
                        _this.loadList(_this.paramSearch);
                    }
                });
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.ThongDiepGuiNhan = function (data) {
        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var lstErr = data.bill_wrongs;
        var initialState = {
            lstErr: lstErr,
            notifyType: "THONG_DIEP_TRUYEN_NHAN_MTT",
            send_wrong_status: data.send_wrong_status,
        };
        this.bsModalSignRef = this.modalService.show(_shared_components__WEBPACK_IMPORTED_MODULE_8__["SendDataForTaxComponent"], {
            backdrop: 'static',
            keyboard: true,
            class: 'modal-lg truyen-nhan',
            initialState: initialState
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            subModal.unsubscribe();
        });
        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
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
    IndexComponent.prototype.ngOnDestroy = function () {
    };
    IndexComponent.prototype.thayThe = function () {
        if (this.selectedItems) {
            if (this.selectedItems.length == 1) {
                var row = this.selectedItems[0];
                //hd từ phần mềm
                if (row.status == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].trangthaiCQT.DA_TIEP_NHAN && row.adjustment_type && (row.adjustment_type == 1 || row.adjustment_type == 3)) {
                    this.router.navigate(['/system/handle-bills/replace/' + row.id]);
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Không thể lập hóa đơn thay thế cho hóa đơn này', 'error');
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng chỉ chọn 1 hoá đơn.', 'error');
            }
        }
    };
    IndexComponent.prototype.dieuChinh = function () {
        if (this.selectedItems) {
            if (this.selectedItems.length == 1) {
                var row = this.selectedItems[0];
                //hd từ phần mềm
                if (row.adjustment_type && (row.adjustment_type == 1 || row.adjustment_type == 4)) {
                    this.router.navigate(['/system/handle-bills/adjust/' + row.id]);
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Không thể lập hóa đơn điều chỉnh cho hóa đơn này', 'error');
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng chỉ chọn 1 hoá đơn.', 'error');
            }
        }
    };
    IndexComponent.prototype.calculateFilterExpression = function (filterValue, selectedFilterOperation) {
        selectedFilterOperation = "contains";
        return [["customer_name_temp", selectedFilterOperation || '=', filterValue], 'or', ["buyer_name_temp", selectedFilterOperation || '=', filterValue]];
    };
    IndexComponent.prototype.calculateFilterExpressionMS = function (filterValue, selectedFilterOperation) {
        selectedFilterOperation = "contains";
        var bill_series = filterValue;
        var template_code = filterValue;
        if (filterValue) {
            var arrStr = filterValue.split('-');
            template_code = arrStr[0].trim();
            bill_series = filterValue.substring(filterValue.indexOf(template_code) + 2).trim();
        }
        return [["bill_series", selectedFilterOperation || '=', bill_series], 'and', ["template_code", selectedFilterOperation || '=', template_code]];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_16__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_16__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/handle-bills/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/handle-bills/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__["TemplateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _modules_handle_bills_shared_handlebill_service__WEBPACK_IMPORTED_MODULE_5__["HandlebillService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_12__["BillService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_14__["ViewInvoiceService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_15__["InvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/components/replace/replace-bill/replace-bill.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/replace/replace-bill/replace-bill.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"invoice-container\">\r\n    <!-- phần form thông tin -->\r\n    <app-replace-form-bill [frmData]=\"frmData\" [oldForm]=\"oldForm\" \r\n      [bill_products]=\"bill_products\" [formatter]=\"formatter\"\r\n      [listTemplate]=\"select.templatesTT78\" [isHdGTGT]=\"isHdGTGT\"\r\n      [_oTemplateTT78]=\"_oTemplateTT78\" [infoDangKy]=\"infoDangKy\"\r\n      [ttDaXuatHoaDon]=\"ttDaXuatHoaDon\"\r\n      (onTemplateTypeChange)=\"onTemplateTypeChange($event)\" >\r\n    </app-replace-form-bill>\r\n\r\n    <!-- table product -->\r\n    <app-replace-product-grip [dataSource]=\"dataSource\" \r\n     [bill_products]=\"bill_products\"\r\n     [listTemplate]=\"select.templatesTT78\" [isHdGTGT]=\"isHdGTGT\"\r\n      [formatter]=\"formatter\" [oldForm]=\"oldForm\" [frmData]=\"frmData\"\r\n      [_objTemplateSelect] = \"_objTemplateSelect\"\r\n      [_oTemplateTT78]=\"_oTemplateTT78\">\r\n    </app-replace-product-grip>\r\n\r\n    <div class=\"table-footer\">\r\n      <!-- Tổng tiền -->\r\n      <div class=\"table-footer-1\">\r\n        <div class=\"vat amount-table-footer\">\r\n          <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [value]=\"frmData.amount_after_vat\" step=\"0\"\r\n            [format]=\"formatter.tong_tien\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <!-- Tiền thuế -->\r\n      <div class=\"table-footer-2\" *ngIf=\"isHdGTGT\">\r\n        <div class=\"vat amount-vat-table-footer\">\r\n          <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [value]=\"frmData.amount_vat\" step=\"0\"\r\n            [format]=\"formatter.tien_thue\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <!-- Thành tiền -->\r\n      <div class=\"table-footer-3\">\r\n        <div class=\"vat amount-after-vat-table-footer\">\r\n          <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [value]=\"frmData.amount\" step=\"0\" [format]=\"formatter.thanh_tien\"\r\n            [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top : 20px\">\r\n      <div class=\"col-md-5\">\r\n      <!-- Giảm trừ nghị quyết 43 -->\r\n      <!-- Tỷ lệ % doanh thu -->\r\n      <div class=\"col-md-12\" style=\"margin-top:5px\">\r\n        <div *ngIf=\"frmData.is_resolution_43\" style=\"display: inline-flex;margin-top:5px\">\r\n          <p style=\"margin-right: 5px;margin-top: 5px\">Tỷ lệ % trên doanh thu </p>\r\n\r\n          <div class=\"toggle normal\" style=\"display: flex; align-items: center; margin-top: -6px;\">\r\n            <img id=\"link14\" style=\"cursor: pointer;padding-left: 2px;padding-right: 7px\"\r\n              src=\"assets\\img\\icons\\Icon_Information.png\" (click)=\"guideSales()\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n          </div>\r\n          <dx-popover target=\"#link14\" position=\"top\" [width]=\"350\" [(visible)]=\"isDisplayGuideSale\">\r\n            <div *dxTemplate=\"let data of 'content'\">\r\n              <p>- 1% : Phân phối, cung cấp hàng hóa dịch vụ</p>\r\n              <p>- 5% : Dịch vụ xây dựng không bao thầu nguyên vật liệu</p>\r\n              <p>- 3% : Sản xuất, vận tải, dịch vụ có gắn với hàng hóa, xây dựng có bao thầu nguyên vật liệu</p>\r\n              <p>- 2% : Hoạt động kinh doanh khác</p>\r\n            </div>\r\n          </dx-popover>\r\n\r\n          <dx-number-box [width]=\"50\" [(value)]=\"frmData.sales_percentage\"\r\n            (onValueChanged)=\"onChangeSalePercen($event)\"></dx-number-box>\r\n          <p style=\"margin-left: 5px;margin-top: 5px\"> %</p>\r\n        </div>\r\n      </div>\r\n      <!-- Đã giảm 20% -->\r\n      <div class=\"col-md-12\" style=\"margin-top:5px\">\r\n        <div *ngIf=\"frmData.is_resolution_43\" style=\"display: inline-flex;margin-top:5px\">\r\n          <p style=\"margin-right: 5px;margin-top: 5px;width: 100px\">Đã giảm </p>\r\n          <dx-number-box [format]=\"formatter.tong_tien\" [(value)]=\"frmData.money_resolution_43\"\r\n            [readOnly]=\"!frmData.auto_value\"></dx-number-box>\r\n          <p style=\"margin-left: 5px\"> {{ _translate.THONG_TIN.tinh_thue_nq101}}</p>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <!-- Thành tiền -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount\" tabIndex=\"-1\"\r\n              [format]=\"formatter.thanh_tien\" [disabled]=\"!frmData.auto_value\" step=\"0\"\r\n              (onValueChanged)=\"onNumberChange()\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Tổng tiền thuế -->\r\n        <div class=\"dx-field\" *ngIf=\"isHdGTGT\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount_vat\" [format]=\"formatter.tien_thue\"\r\n              [disabled]=\"!frmData.auto_value\" tabIndex=\"-1\" step=\"0\" (onKeyDown)=\"keyDown($event)\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Cộng chiết khấu -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_amount_discount}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount_discount\" tabIndex=\"-1\" step=\"0\"\r\n              [format]=\"formatter.tien_chiet_khau\" (onValueChanged)=\"onNumberChange()\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <!-- Tổng tiền sau thuế -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_after_vat}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount_after_vat\"\r\n              [format]=\"formatter.tong_tien\" [disabled]=\"!frmData.auto_value\" tabIndex=\"-1\" step=\"0\"\r\n              (onKeyDown)=\"keyDown($event)\" (onValueChanged)=\"totalPaymentChange($event)\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Tiền mặt -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">Tiền mặt</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.cash\" [format]=\"formatter.tong_tien\"\r\n              tabIndex=\"-1\" step=\"0\" (onValueChanged)=\"cashChange($event)\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Trả lại khách -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">Trả lại khách</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.returns\" [format]=\"formatter.tong_tien\"\r\n              tabIndex=\"-1\" step=\"0\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top : 15px\">\r\n      <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-8\">\r\n        <!-- Số tiền bằng chữ -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\" style=\"width: 27%;\">{{ _translate.CONTROLL.LABEL.total_payment_in_word}}</div>\r\n          <div class=\"dx-field-value\" style=\"width: 73%;\">\r\n            <dx-text-box [(value)]=\"frmData.total_payment_word\" [disabled]=\"!frmData.auto_value\"\r\n              [readOnly]=\"ttDaXuatHoaDon\"></dx-text-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row button-action\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n          <!-- Xem trước hóa đơn -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.preview_invoice}}\" type=\"default\" (click)=\"preview()\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"view()\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.view_invoice}}\" type=\"default\"></dx-button>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n          <!-- Xuất hóa đơn -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" appScrollToInvalid text=\"{{ _translate.CONTROLL.BUTTON.export_invoice}}\"\r\n            [(icon)]=\"this._translate.ICONS.export_inv\" type=\"default\" validationGroup=\"formData\"\r\n            [useSubmitBehavior]=\"true\" (click)=\"eSubmit('XUAT')\">\r\n          </dx-button>\r\n         \r\n          <!-- Ghi tạm -->\r\n          <dx-button disableDoubleClick appScrollToInvalid text=\"{{ _translate.CONTROLL.BUTTON.save_temporary}}\" *ngIf=\"!ttDaXuatHoaDon\"\r\n            [(icon)]=\"this._translate.ICONS.save\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\"\r\n            (click)=\"eSubmit('GHI_TAM')\">\r\n          </dx-button>\r\n          \r\n          <!-- Đóng -->\r\n          <dx-button type=\"default\" appBackButton [(icon)]=\"this._translate.ICONS.come_back\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</form>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/replace/replace-bill/replace-bill.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/replace/replace-bill/replace-bill.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container{padding-top:15px}.after-table{margin-top:10px}::ng-deep .vat.total-payment-in-word{margin-top:15px}::ng-deep .vat.total-payment-in-word input{color:#000000;font-weight:bold;text-align:right}.vat.total-payment-in-word .dx-field-label{width:12%}.vat.total-payment-in-word .dx-field-value{width:88% !important}::ng-deep .vat.money-pull-right input{text-align:right}::ng-deep .pr-0.money-pull-right input{text-align:right}::ng-deep .prt-1.money-pull-right input{text-align:right}.vat.money-pull-right .dx-field-label{width:45%}.vat.money-pull-right .dx-field-value{width:55% !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}.button-action{margin-top:18px}.table-footer{height:40px;background:#E3E3E3;padding-top:3px}.table-footer .table-footer-1{display:inline-block;width:109px;float:right}.table-footer .table-footer-2{display:inline-block;width:120px;margin-right:32px;float:right}.table-footer .table-footer-3{display:inline-block;width:150px;margin-right:90px;float:right}.table-footer .table-footer-4{display:inline-block;width:109px;margin-right:190px;float:right}.dx-field-value.dx-widget,.dx-field-value:not(.dx-widget)>.dx-widget{height:30px}::ng-deep .nd92Notify .modal-content{width:80%}::ng-deep .mauhoadon .modal-content{width:67%}::ng-deep .mauhoadon43 .modal-content{width:72%}::ng-deep .prv-s-invoice .modal-content{border:0px;border-radius:0px}::ng-deep .v-s-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/replace/replace-bill/replace-bill.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/replace/replace-bill/replace-bill.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ReplaceBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceBillComponent", function() { return ReplaceBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _replace_product_grip_replace_product_grip_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../replace-product-grip/replace-product-grip.component */ "./src/app/modules/handle-bills/components/replace/replace-product-grip/replace-product-grip.component.ts");
/* harmony import */ var _replace_form_bill_replace_form_bill_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../replace-form-bill/replace-form-bill.component */ "./src/app/modules/handle-bills/components/replace/replace-form-bill/replace-form-bill.component.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.model */ "./src/app/modules/bill-invoice/shared/bill.model.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _modules_handle_bills_shared_handlebill_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/handle-bills/shared/handlebill.service */ "./src/app/modules/handle-bills/shared/handlebill.service.ts");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
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


























var ReplaceBillComponent = /** @class */ (function () {
    function ReplaceBillComponent(route, billService, authService, cdRef, translate, confirmService, socketService, spinner, modalService, handleBillService, configsService, vPreviewInvService, customeModalService, invoiceService) {
        var _this = this;
        this.route = route;
        this.billService = billService;
        this.authService = authService;
        this.cdRef = cdRef;
        this.translate = translate;
        this.confirmService = confirmService;
        this.socketService = socketService;
        this.spinner = spinner;
        this.modalService = modalService;
        this.handleBillService = handleBillService;
        this.configsService = configsService;
        this.vPreviewInvService = vPreviewInvService;
        this.customeModalService = customeModalService;
        this.invoiceService = invoiceService;
        this.isShowHuyLenhDD = false;
        this.isCheckLenhDieuDong = false;
        this.frmData = new _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_16__["BillModel"](3);
        this.ttDaXuatHoaDon = false; // Trạng thái đã xuất hóa đơn hay chưa
        this.formatter = {};
        this.select = {};
        this.formatNumber = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].numberInvoiceFormatDev;
        this.confirmCheckPreview = false;
        this.isHdGTGT = true;
        this.isAccessExportInv = false; //có quyền phê duyệt?
        this.productCodePattern = _config_pattern__WEBPACK_IMPORTED_MODULE_2__["pattern"].productCodePattern;
        this._oTemplateTT78 = {};
        this.isDisplayGuideSale = false;
        this.bills = []; //có thể dùng khi gửi mail sai sót(test lại sau)
        // sự kiện form
        this.totalPaymentChange = function (e) {
            _this.onNumberChange();
            _this.frmData.cash = _this.frmData.amount_after_vat;
            if (_this.frmData.auto_value) {
                _this.frmData.amount_after_vat = _this.frmData.total_payment;
                _this.frmData.returns = _this.frmData.cash - _this.frmData.amount_after_vat;
            }
            var currency_code = _this.frmData.currency_code;
            if (_this.configs.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            var tien_chu = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].tienBangChu(Math.abs(e.value), _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien), currency_code, _this.configs.system_parameter.display_read_money_english);
            _this.frmData.total_payment_word = _this.invoiceService.docTienAm(e.value, tien_chu, _this.configs, _this.frmData.currency_code);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    ReplaceBillComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
        this.routeSub.unsubscribe();
    };
    //đc gọi khi thoát khỏi màn này và chuyển tới màn khác
    ReplaceBillComponent.prototype.canDeactivate = function () {
        var _this = this;
        if (!this.checkDataFormChange(this.valueChange, this.frmData)) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_13__["Observable"](function (observer) {
                _this.confirmService.confirm().subscribe(function (value) {
                    switch (value) {
                        case 'yes':
                            _this.ghiTam().then(function (value1) {
                                observer.next(value1);
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
        return true;
    };
    ReplaceBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        // kết nối websocket
        this.connectWebsocket();
        var currentUser = this.authService.getCurrentUser();
        var listpermissions = currentUser.user.permissions.split(',');
        this.configs = this.authService.getConfigs();
        this.infoDangKy = this.authService.getInfoRegister();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        this.formatter.display_int = this.configs.system_parameter.display_int;
        this.routeSub = this.route.data.subscribe(function (data) {
            // put data danh mục for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.select_provisions_on_accounts = data.init[1].DM_DINH_KHOAN;
            _this.select.payment_method_names = data.init[1].DM_HINH_THUC_THANH_TOAN;
            _this.select.vats = data.init[1].DM_TY_LE_VAT;
            _this.select.templatesTT78 = data.init[0];
            _this.select.templatesTT78 = _this.select.templatesTT78.filter(function (p) { return (p.status == "HOAT_DONG" && p.template_code == data.init[4].template_code); });
            if (data.status === 'thaythemoi') {
                _this.khoiTaoKhiThemMoi(data.init[4]);
                _this.oldForm = data.init[4];
                _this.frmData.destroy_reason = "";
            }
            else {
                _this.khoiTaoKhiSua(data.init[4]);
                _this.oldForm = data.init[4].origin;
            }
            // this.oldForm = data.init[4];
            if (_this.oldForm.template_code == 1) {
                _this.isHdGTGT = true;
            }
            else {
                _this.isHdGTGT = false;
            }
            // sx giảm dần 
            _this.select.templatesTT78.sort(function (a, b) {
                var dateA = new Date(a.created_at);
                var dateB = new Date(b.created_at);
                return dateB - dateA;
            });
            _this._oTemplateTT78 = _this.select.templatesTT78[0];
            _this.select.templatesTT78.some(function (item) {
                if (item.value === _this.frmData.template_id) {
                    _this._objTemplateSelect = item;
                    _this.is_multi_vat = item.is_multi_vat;
                    _this._oTemplateTT78 = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](item);
                    return true;
                }
            });
            _this.frmData.template_id = _this._oTemplateTT78.value;
        });
        var obj2 = listpermissions.filter(function (p) { return p === 'phe_duyet'; });
        if (obj2.length > 0) {
            this.isAccessExportInv = true;
        }
        else {
            this.isAccessExportInv = false;
        }
    };
    ReplaceBillComponent.prototype.khoiTaoKhiSua = function (data) {
        var inv_products = this.frmData.setInvoice_products_data(data.bill_products);
        inv_products.forEach(function (item) {
            item.vat = item.vat != null ? item.vat.toString() : null;
        });
        // khởi tạo lưới từ dữ liệu sửa
        this.bill_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: 'id',
            data: inv_products
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.bill_products
        });
        // khởi tạo dữ liệu form
        this.frmData.fillFormData(data);
        this.frmData.adjustment_type = 3;
        // cấu hình thập phân thêm mới
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
    };
    ReplaceBillComponent.prototype.khoiTaoKhiThemMoi = function (data) {
        // khởi tạo mới lưới
        var inv_products = this.frmData.setInvoice_products_data(data.bill_products);
        inv_products.forEach(function (item) {
            item.vat = item.vat != null ? item.vat.toString() : null;
        });
        this.bill_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: 'id',
            data: inv_products
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.bill_products
        });
        // khởi tạo dữ liệu form
        this.frmData.fillFormThayThe(data);
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
    };
    ReplaceBillComponent.prototype.ngAfterViewInit = function () {
        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.status) != "" && this.frmData.status != _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam) {
            this.disablleScreen();
            this.cdRef.detectChanges();
        }
        this.setDataSessionStorage(this.frmData);
    };
    ReplaceBillComponent.prototype.setDataSessionStorage = function (value) {
        this.valueChange = JSON.stringify(value);
    };
    ReplaceBillComponent.prototype.disablleScreen = function () {
        this.formInvoice.readonlyAllForm();
        this.productGrip.ttDaXuatHoaDon = true;
        this.ttDaXuatHoaDon = true;
    };
    ReplaceBillComponent.prototype.sendInvoice = function (xml_string) {
        var _this = this;
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        }, 20);
        var xmlInvoice = "";
        var sub = this.billService.sendInvoice({
            id: this.frmData.id,
            xml_string: xml_string,
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.info_message = rs.data.info_message;
                var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_10__(rs.data.bill_sign_date).format('YYYY-MM-DD HH:mm:ss');
                if (_this.info_message && _this.info_message.message) {
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.info_message.message.message);
                    if (xmlInvoice != "") {
                        _this.kyThongDiep(xmlInvoice, bill_sign_date);
                    }
                }
            }
            else
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ReplaceBillComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                if (data.Data.Name === 'hoadon.xml') {
                    if (_this.ttDaXuatHoaDon)
                        _this.sendData_TBSaiSot(data.Data.Content);
                    else
                        _this.sendInvoice(data.Data.Content);
                }
                else if (data.Data.Name === 'thongdiep.xml') {
                    _this.goiApiXuatHoaDon(data.Data.Content);
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    if (_this.ttDaXuatHoaDon)
                        _this.getXml_TBSaiSot();
                    else {
                        _this.xuLiApiKhiXuat();
                    }
                }
            }
        });
    };
    ReplaceBillComponent.prototype.eSubmit = function (type) {
        var _this = this;
        var checkValid = this.formInvoice.form.instance.validate();
        if (!checkValid.isValid) {
            return;
        }
        this.total_payment = "";
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        setTimeout(function () {
            _this.handleFormData();
            delete _this.frmData["note_view_on_bill"];
            if (type !== 'GHI_TAM') {
                if (!_this._validForm()) {
                    return;
                }
                if (!_core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_20__["InvoicesService"].checkTimeExportInv(_this.configs.system_parameter)) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_21__["String"].Format(_this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_10__(_this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_10__(_this.configs.system_parameter.time_end).format('HH:mm')), 'error');
                    return;
                }
            }
            else {
                if (!_this.checkProductCode()) {
                    return;
                }
            }
            if (_this.frmData.bill_options) {
                _this.frmData.bill_options.forEach(function (item) {
                    delete item['is_show'];
                    delete item['type'];
                    delete item['width'];
                    delete item['statusData'];
                    delete item['id'];
                    delete item['invoice_id'];
                });
            }
            if (_this.frmData.total_payment > 20000000 && (_this.frmData.payment_method_name === 'TM')) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng chọn HTTT chuyển khoản cho hóa đơn có giá trị lớn hơn 20 triệu đồng', 'error');
                return false;
            }
            if (!_this.isAccessExportInv && type === 'XUAT') {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.you_not_permissions, 'error');
                return false;
            }
            if (type === 'XUAT') {
                _this.processXuatHoaDon(type);
            }
            else {
                _this.processGhiTam();
            }
        }, 300);
    };
    ReplaceBillComponent.prototype.processXuatHoaDon = function (type) {
        var _index = 0;
        var _isValid = true;
        var _lstInv = [];
        this.bill_products.load().then(function (dataSource) {
            _lstInv = dataSource.filter(function (p) { return p.product_name; });
        });
        for (var i = 0; i < _lstInv.length; i++) {
            if (_lstInv[i].amount > 0 && !_lstInv[i].vat && !_lstInv[i].is_refund_ticket) {
                _index = i;
                _isValid = false;
                break;
            }
        }
        if (!this.isHdGTGT)
            _isValid = true;
        if (!this.billService.checkVatMauHoaDon(_lstInv, this.is_multi_vat)) {
            return false;
        }
        if (!_isValid) {
            var result = _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('VAT không hợp lệ', 'error');
        }
        else {
            if (this.confirmCheckPreview) {
                this.xuatHoaDon();
                this.confirmCheckPreview = false;
            }
            else {
                this.previewBeforeExport(type);
            }
        }
    };
    ReplaceBillComponent.prototype.previewBeforeExport = function (type) {
        var _this = this;
        this.handleFormData();
        var trang_thai = this._translate.THONG_TIN.xuat_hoa_don;
        var du_lieu = this.billService.taodulieuXemTruocMau(this.frmData);
        du_lieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
        var content_invoice = {
            du_lieu: du_lieu,
            ngay_hoa_don: "",
            trang_thai: trang_thai,
            tong_tien: "",
            title_invoice_type: this._translate.THONG_TIN.ban_du_thao_hoa_don.toUpperCase(),
            note_warn: this._translate.THONG_TIN.luu_y_truoc_khi_xuat,
            is_display_img_note: true,
            text_ngay_hoa_don: this._translate.THONG_TIN.ngay_hoa_don,
            text_tong_tien: this._translate.THONG_TIN.tong_tien,
            question_again: this._translate.THONG_TIN.ban_co_chac_chan_xuat_hoa_don_khong
        };
        var initialState = {
            content_invoice: content_invoice,
        };
        this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_24__["PreviewInvoiceComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-xl prv-s-invoice v-s-invoice',
            initialState: initialState
        });
        var subModal = this.customeModalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].actionHander.DongY) {
                _this.confirmCheckPreview = true;
                _this.eSubmit(type);
            }
            subModal.unsubscribe();
        });
    };
    ReplaceBillComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            var ListSerialNumber = "DSCKS";
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
            }
            var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD HH:mm:ss');
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
        }
    };
    /* Xử lý ghi tạm hóa đơn */
    ReplaceBillComponent.prototype.processGhiTam = function () {
        this.ghiTam();
    };
    ReplaceBillComponent.prototype.ghiTam = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.frmData.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.billService.addNew(this.frmData, false).subscribe(function (res) {
                                if (res.status === 'success') {
                                    _this.frmData.id = res.data.id;
                                    // this.isDisable = true;
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Ghi tạm hóa đơn thành công', 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.billService.edit(this.frmData.id, this.frmData, false).subscribe(function (res) {
                            if (res.status === 'success') {
                                _this.frmData.id = res.data.id;
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Ghi tạm hóa đơn thành công', 'success');
                                return true;
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                return false;
                            }
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    /* Kiểm tra Mã hàng phải nhập không dấu, không chứa ký tự đặc biệt và tối đa 50 ký tự */
    ReplaceBillComponent.prototype.checkProductCode = function () {
        var isValid = true;
        var _lst = this.frmData.bill_products.filter(function (p) { return p.product_name; });
        if (_lst.length > 0) {
            for (var i = 0; i < _lst.length; i++) {
                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_lst[i].product_code) != "" && !this.productCodePattern.test(_lst[i].product_code)) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.VALIDATION.required_productCode, 'error', 5000);
                    this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(i, 'product_code'));
                    return false;
                }
            }
        }
        return isValid;
    };
    ReplaceBillComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var xmlInvoice = "";
        if (!this.frmData.id) {
            var sub_1 = this.billService.addNew(this.frmData, true).subscribe(function (res) {
                if (res.status === 'success') {
                    _this.frmData.bill_number = res.data.bill_number;
                    _this.frmData.bill_date = moment__WEBPACK_IMPORTED_MODULE_10__(res.data.bill_date).format('YYYY-MM-DD HH:mm:ss'); // moment(rs.data.invoice_date).format('DD/MM/YYYY');
                    var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_10__(res.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.verify_code = res.data.verify_code;
                    _this.frmData.id = res.data.id;
                    xmlInvoice = res.data.xml_string;
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                        _this.disablleScreen();
                    }
                    else {
                        // Người bán ký
                        if (_this.configs.system_parameter.is_seller_sign_bill)
                            _this.xuLyKiFile(xmlInvoice, bill_sign_date);
                        else {
                            _this.info_message = res.data.info_message;
                            if (_this.info_message && _this.info_message.message) {
                                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.info_message.message.message);
                                if (xmlInvoice != "") {
                                    _this.kyThongDiep(xmlInvoice, bill_sign_date);
                                }
                            }
                        }
                    }
                }
                else {
                    _this.confirmCheckPreview = false;
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else {
            var sub_2 = this.billService.edit(this.frmData.id, this.frmData, true).subscribe(function (res) {
                if (res.status === 'success') {
                    _this.frmData.bill_number = res.data.bill_number;
                    _this.frmData.bill_date = moment__WEBPACK_IMPORTED_MODULE_10__(res.data.bill_date).format('YYYY-MM-DD HH:mm:ss'); // moment(rs.data.invoice_date).format('DD/MM/YYYY');
                    _this.verify_code = res.data.verify_code;
                    var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_10__(res.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.frmData.id = res.data.id;
                    xmlInvoice = res.data.xml_string;
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                        _this.disablleScreen();
                    }
                    else {
                        if (_this.configs.system_parameter.is_seller_sign_bill)
                            _this.xuLyKiFile(xmlInvoice, bill_sign_date);
                        else {
                            _this.info_message = res.data.info_message;
                            if (_this.info_message && _this.info_message.message) {
                                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.info_message.message.message);
                                if (xmlInvoice != "") {
                                    _this.kyThongDiep(xmlInvoice, bill_sign_date);
                                }
                            }
                        }
                    }
                }
                else {
                    _this.confirmCheckPreview = false;
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_2.unsubscribe();
            });
        }
    };
    ReplaceBillComponent.prototype.kyThongDiep = function (xmlInvoice, signDate) {
        var _this = this;
        var ListSerialNumber = "DSCKS";
        var nodeSign = "//TDiep/CKSNNT";
        if (this.infoDangKy && this.infoDangKy.registration_signature) {
            var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
            if (signatures && signatures.length > 0)
                ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
        }
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'thongdiep.xml', nodeSign, signDate, 'MessageData', ListSerialNumber, true);
    };
    ReplaceBillComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        var nodeSign = "//HDon/DSCKS/NBan";
        var ListSerialNumber = "DSCKS";
        if (this.infoDangKy && this.infoDangKy.registration_signature) {
            var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
            if (signatures && signatures.length > 0)
                ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
        }
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', nodeSign, signDate, 'InvoiceData', ListSerialNumber, true);
    };
    ReplaceBillComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        if (this.info_message && this.info_message.message) {
            setTimeout(function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            }, 20);
            var sub_3 = this.billService.sendMessage({
                id: this.frmData.id,
                info_message: {
                    message: {
                        message: xml_string,
                        message_code: this.info_message.message.message_code
                    },
                    tcntCode: this.info_message.tcntCode,
                    messageCodeType: this.info_message.messageCodeType
                }
            }).subscribe(function (rs) {
                if (rs.status === 'success') {
                    // cấu hình tự động gửi thông báo sai sót
                    _this.disablleScreen();
                    if (_this.configs.system_parameter.enable_send_wrong_process) {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing))
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                        else
                            _this.startProcess_TBSaiSot();
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_3.unsubscribe();
            });
        }
    };
    ReplaceBillComponent.prototype.startProcess_TBSaiSot = function () {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.getXml_TBSaiSot();
        }
        else {
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var ListSerialNumber = "DSCKS";
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
            }
            else
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
        }
    };
    ReplaceBillComponent.prototype.getXml_TBSaiSot = function () {
        var _this = this;
        var bills = [];
        var object = new Object;
        object["tax_authority_code"] = this.oldForm.tax_authority_code; //Mã CQT cấp
        object["template_code"] = this.oldForm.template_code;
        object["bill_series"] = this.oldForm.bill_series;
        object["bill_date"] = this.oldForm.bill_date;
        object["bill_number"] = this.oldForm.bill_number;
        object["reason"] = this.frmData.destroy_reason;
        object["notification_nature"] = "3"; //Tính chất thông báo là thay thế
        object["type_apply_bill"] = 1; // Loại áp dụng HĐ (1: tt78)
        object["bill_id"] = this.oldForm.id;
        bills.push(object);
        var data = {
            notification_type: 1,
            bills: bills
        };
        var xmlInvoice = "";
        var sub = this.handleBillService.getXmlInvoiceWrong(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                xmlInvoice = rs.data.xml_file;
                _this.bills = rs.data.bills;
                var sign_date = moment__WEBPACK_IMPORTED_MODULE_10__(rs.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                if (xmlInvoice != "") {
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing))
                        _this.sendData_TBSaiSot(xmlInvoice);
                    else
                        _this.signXml_TBSaiSot(xmlInvoice, sign_date);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    ReplaceBillComponent.prototype.signXml_TBSaiSot = function (xmlInvoice, signDate) {
        var _this = this;
        var nodeSign = "//TBao/DSCKS/NNT";
        var ListSerialNumber = "DSCKS";
        if (this.infoDangKy && this.infoDangKy.registration_signature) {
            var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
            if (signatures && signatures.length > 0)
                ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
        }
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', nodeSign, signDate, 'NotificationData', ListSerialNumber, true);
    };
    ReplaceBillComponent.prototype.sendData_TBSaiSot = function (xml_string) {
        var _this = this;
        var subXuatHoaDon = this.handleBillService.sendXmlInvoiceWrong({
            xml_file: xml_string,
            bills: this.bills
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            subXuatHoaDon.unsubscribe();
        });
    };
    ReplaceBillComponent.prototype.checkDataFormChange = function (dataChange, dataForm) {
        var dataBefore = JSON.parse(dataChange);
        var dataAfter = JSON.parse(JSON.stringify(dataForm));
        return lodash__WEBPACK_IMPORTED_MODULE_11__["isEqual"](dataBefore, dataAfter);
    };
    ReplaceBillComponent.prototype.onNumberChange = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._calTotalMoney(this.frmData, this.formatter, !this.frmData.auto_value);
    };
    ReplaceBillComponent.prototype.cashChange = function (e) {
        if (e.value) {
            this.frmData.returns = this.frmData.cash - this.frmData.amount_after_vat;
        }
    };
    ReplaceBillComponent.prototype.onChangeSalePercen = function (e) {
        var _this = this;
        this.configs.system_parameter.value_rate_percent = e.value;
        var data = {
            config: {
                value: JSON.stringify(this.configs.system_parameter)
            }
        };
        this.configsService.update(this.configs.id.system_parameter, data).subscribe(function (response) {
            if (response.status == "success") {
                _this.configsService.getAll().subscribe(function (res) {
                    if (res.data && res.data.configs)
                        _this.authService.setConfigs(res.data.configs);
                    _this.configs = _this.authService.getConfigs();
                });
            }
            else {
            }
        }, function (err) { }, function () {
        });
        if (this.productGrip)
            this.productGrip._tinhGiaTri();
    };
    ReplaceBillComponent.prototype.preview = function () {
        var _this = this;
        setTimeout(function () {
            _this.handleFormData();
            if (!_this._validForm()) {
                return;
            }
            var data = _this.billService.taodulieuXemTruocMau(_this.frmData);
            data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            _this.vPreviewInvService.xemMau(data);
        }, 300);
    };
    ReplaceBillComponent.prototype.handleFormData = function () {
        var _this = this;
        if (this.frmData.bill_options) {
            this.frmData.bill_options.forEach(function (item) {
                delete item['is_show'];
                delete item['type'];
                delete item['width'];
                delete item['statusData'];
            });
        }
        this.frmData.adjustment_type = 3;
        this.frmData.origin_id = this.oldForm.id;
        this.frmData.total_payment = this.frmData.amount_after_vat;
        this.frmData.currency_code = 'VND';
        this.frmData.currency_rate = 1;
        // this.frmData.buyer_address = null;
        if (!this.frmData.auto_value) {
            delete this.frmData.tax_information;
        }
        if (!this.isHdGTGT) {
            delete this.frmData.tax_information;
        }
        if (!this.frmData.tax_information)
            delete this.frmData.tax_information;
        if (this.frmData.tax_information) {
            this.frmData.tax_information.forEach(function (item) {
                delete item.bill_id;
                delete item.id;
            });
        }
        this.deleteProperties();
        var bill_products = [];
        this.bill_products.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                delete item.error;
                delete item.price_after_vat;
                delete item.number_real_import;
                delete item.number_real_export;
                delete item.amount_without_discount;
                delete item.price_after_discount;
                if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                    // if (VStringService._getValueToString(this.pkInvoiceCurrent) != "")
                    item.id = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].makeid();
                    bill_products.push(item);
                }
            });
            _this.frmData.bill_products = bill_products;
            _this.frmData["note_view_on_bill"] = "Ho\u00E1 \u0111\u01A1n n\u00E0y thay th\u1EBF cho ho\u00E1 \u0111\u01A1n" + " " + ("s\u1ED1 " + _this.oldForm.bill_number + ", m\u1EABu s\u1ED1 " + _this.oldForm.template_code + ", k\u00FD hi\u1EC7u " + _this.oldForm.bill_series + " ng\u00E0y " + moment__WEBPACK_IMPORTED_MODULE_10__(_this.oldForm.bill_date).format('DD/MM/YYYY'));
            _this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
        });
    };
    ReplaceBillComponent.prototype.guideSales = function () {
        this.isDisplayGuideSale = !this.isDisplayGuideSale;
    };
    ReplaceBillComponent.prototype.onTemplateTypeChange = function (e) {
        this._objTemplateSelect = e;
        if (!this._objTemplateSelect["is_discount"]) {
            this.bill_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    item.discount = null;
                    item.amount_discount = null;
                });
            });
            this.productGrip._tinhGiaTri();
        }
        this.is_multi_vat = e.is_multi_vat;
    };
    ReplaceBillComponent.prototype._validForm = function () {
        var _this = this;
        var _isValid = true;
        var _lst = this.frmData.bill_products;
        if (!this.frmData.amount_after_vat && this.frmData.amount_after_vat !== 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tổng tiền hóa đơn không được để trống", 'error');
            return false;
        }
        if (!this.frmData.destroy_reason) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Lý do không được để trống", 'error');
            return false;
        }
        if (!this.billService.checkVatMauHoaDon(_lst, this.is_multi_vat)) {
            return false;
        }
        /* Hóa đơn bán hàng NQ43 */
        if (this.frmData.is_resolution_43) {
            if (!this.frmData.sales_percentage) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tỷ lệ % trên doanh thu không được để trống", 'error');
                return false;
            }
            else if (this.frmData.sales_percentage != 1 && this.frmData.sales_percentage != 2
                && this.frmData.sales_percentage != 3 && this.frmData.sales_percentage != 5) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tỷ lệ % trên doanh thu chỉ bao gồm các giá trị: 1, 2, 3, 5", 'error');
                return false;
            }
        }
        this.bill_products.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.product_name) != "" && !item.is_promotion && !item.is_promotion_new && !item.commercial_discount && _isValid) {
                }
                else if (item.is_promotion || item.is_promotion_new || item.commercial_discount) {
                    if ((item.product_name == null || item.product_name == '') && _isValid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tên hàng hóa" + " " + _this._translate.VALIDATION.required, 'error');
                        _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'product_name'));
                        _isValid = false;
                        return false;
                    }
                }
                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.product_name) != "" && !item.is_explain) {
                    if (_this.isHdGTGT) {
                        if (item.vat == null && _isValid) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Thuế suất" + " " + _this._translate.VALIDATION.required, 'error');
                            _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'vat'));
                            _isValid = false;
                            return false;
                        }
                        if (item.vat != "-1" && item.vat != "-2" && item.amount_vat == null && _isValid) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tiền thuế" + " " + _this._translate.VALIDATION.required, 'error');
                            _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'amount_vat'));
                            _isValid = false;
                            return false;
                        }
                    }
                    if (item.amount == null && _isValid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Thành tiền" + " " + _this._translate.VALIDATION.required, 'error');
                        _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'amount'));
                        _isValid = false;
                        return false;
                    }
                }
            });
        });
        if (_lst.length === 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_product, 'error', 5000);
            this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
            return false;
        }
        return _isValid;
    };
    ReplaceBillComponent.prototype.view = function () {
        var ids = [];
        ids.push(this.frmData.id);
        if (this.configs.system_parameter.view_multi_invoice) {
            var data = this.billService.taodulieuXemMau(ids);
            data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(data);
        }
        else {
            var initialState = {
                items: ids,
                isXuatHD: false,
                hinhthucxuat: '',
                typeAction: _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].typeCode.xem_hoa_don_mtt,
                cssClass: 'modal-xl view-bill'
            };
            this.vPreviewInvService.xemMauPhanTrang(initialState);
        }
    };
    ReplaceBillComponent.prototype.deleteProperties = function () {
        var frmDataBill = new _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_16__["BillModel"](3);
        var keyOfBill = Object.keys(frmDataBill);
        var keyOfFrm = Object.keys(this.frmData);
        // const formData = this.frmData;
        for (var i = 0; i <= keyOfFrm.length; i++) {
            var error = keyOfBill.includes(keyOfFrm[i]);
            if (!error) {
                delete this.frmData[keyOfFrm[i]];
            }
        }
        delete this.frmData.total_amount_vat;
    };
    ReplaceBillComponent.prototype.keyDown = function (e) {
        // setTimeout(() => {
        if (e.event.key === 'Delete') {
            e.event.srcElement.value = null;
        }
        // }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_replace_product_grip_replace_product_grip_component__WEBPACK_IMPORTED_MODULE_14__["ReplaceProductGripComponent"]),
        __metadata("design:type", _replace_product_grip_replace_product_grip_component__WEBPACK_IMPORTED_MODULE_14__["ReplaceProductGripComponent"])
    ], ReplaceBillComponent.prototype, "productGrip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_replace_form_bill_replace_form_bill_component__WEBPACK_IMPORTED_MODULE_15__["ReplaceFormBillComponent"]),
        __metadata("design:type", _replace_form_bill_replace_form_bill_component__WEBPACK_IMPORTED_MODULE_15__["ReplaceFormBillComponent"])
    ], ReplaceBillComponent.prototype, "formInvoice", void 0);
    ReplaceBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-replace-bill',
            template: __webpack_require__(/*! ./replace-bill.component.html */ "./src/app/modules/handle-bills/components/replace/replace-bill/replace-bill.component.html"),
            styles: [__webpack_require__(/*! ./replace-bill.component.scss */ "./src/app/modules/handle-bills/components/replace/replace-bill/replace-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_18__["BillService"],
            _core_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmService"],
            _core_services__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsModalService"],
            _modules_handle_bills_shared_handlebill_service__WEBPACK_IMPORTED_MODULE_19__["HandlebillService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_5__["ConfigsService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_22__["ViewInvoiceService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_23__["MyBsModalService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_25__["InvoiceService"]])
    ], ReplaceBillComponent);
    return ReplaceBillComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/components/replace/replace-form-bill/replace-form-bill.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/replace/replace-form-bill/replace-form-bill.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row invoice-form\">\r\n  <div class=\"col-md-6\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <!-- mẫu hóa đơn -->\r\n        <dxi-item dataField=\"template_id\" editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.templatesTT78, onValueChanged: onChangeTem, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_form }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{ _translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!-- ngày hóa đơn số hóa đơn -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"bill_date\" editorType=\"dxDateBox\"\r\n          [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss'}\" [cssClass]=\"'max_left'\">\r\n          <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_date }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\" cssClass='vat layout_input group-input-button' >\r\n          <dxi-item dataField=\"bill_number\" [template]=\"'notifydate'\" [cssClass]=\"'max_right'\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_number }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!-- Hình thức thanh toán và số hóa đơn gốc -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\" cssClass='group-input-button'>\r\n          <dxi-item dataField=\"payment_method_code\" editorType=\"dxSelectBox\"\r\n            [editorOptions]=\"{items: select.payment_method_names,onValueChanged: paymentMethodChange, displayExpr: 'name', valueExpr: 'code'}\" [cssClass]=\"'max_left'\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payment_method }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='vat layout_input group-input-button'>\r\n          <dxi-item name=\"origin-invoice-number\" [cssClass]=\"'max_right'\">\r\n            <dxo-label text=\"{{_translate.GRID.INVOICE.invoice_number_original}}\"></dxo-label>\r\n            <div *dxTemplate>\r\n              <dx-text-box [(value)]=\"oldForm.bill_number\" disabled=\"true\"></dx-text-box>\r\n            </div>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"origin_btn_options\" cssClass='btn-small'>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!-- lý do thay thế -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\" cssClass='group-input-button'>\r\n        <dxi-item dataField=\"destroy_reason\">\r\n          <dxo-label text=\"Lý do thay thế\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\" message=\"Lý do thay thế {{_translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <!-- Tên ngân hàng -->\r\n        <dxi-item dataField=\"bank_account\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.bank_name }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!-- Email -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item [label]=\"{text: 'Email'}\">\r\n          <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n            <div\r\n              class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n              <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                <app-tag-input-email [variableName]=\"this.emails\" (numberGenerated)=\"renderDataEmail($event)\">\r\n                </app-tag-input-email>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <div *dxTemplate=\"let d of 'notifydate'\">\r\n        <dx-text-box [disabled]=\"true\" [(value)]=\"frmData.bill_number\"\r\n          class=\"invoice-number-create-invoice\"></dx-text-box>\r\n      </div>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <!-- mã số thuế -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='group-input-button'>\r\n          <dxi-item name=\"search-mst\" [cssClass]=\"'max_left'\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.tax_code }}\"></dxo-label>\r\n            <div *dxTemplate>\r\n              <dx-autocomplete valueExpr=\"tax_code\"\r\n                placeholder=\"{{ _translate.CONTROLL.PLACE_HOLDER.input_content_search }}\" [dataSource]=\"tax_codes\"\r\n                [readOnly]=\"readOnlyCacTruongConLai\" (onItemClick)=\"taxCodeChoose($event)\"\r\n                [(value)]=\"frmData.buyer_tax_code\" (onFocusOut)=\"updateTaxcodeInfo($event)\"\r\n                (onValueChanged)=\"changeTaxCode($event)\">\r\n                <div *dxTemplate=\"let item of 'item'\">\r\n                  <span>{{item.tax_code}}: {{ item.name }}</span>\r\n                </div>\r\n              </dx-autocomplete>\r\n            </div>\r\n          </dxi-item>\r\n          <dxi-item cssClass='btn-small'>\r\n            <button (click)=\"searchTaxCode()\" type=\"button\" class=\"button-tax-code\">\r\n              <i class=\"{{_translate.ICONS.search}}\" style=\"font-size: 22px;\"></i>\r\n            </button>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Mã kh -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='group-input-button'>\r\n          <dxi-item name=\"search-mkh\" [cssClass]=\"'max_right'\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_code }}\"></dxo-label>\r\n            <div *dxTemplate>\r\n              <dx-autocomplete valueExpr=\"code\" [(value)]=\"frmData.customer_code\"\r\n                placeholder=\"{{ _translate.CONTROLL.PLACE_HOLDER.input_content_search }}\" [dataSource]=\"customer_codes\"\r\n                [readOnly]=\"readOnlyCacTruongConLai\" (onItemClick)=\"customerCodeChoose($event)\"\r\n                (onFocusOut)=\"updateCustomerInfo($event)\">\r\n                <div *dxTemplate=\"let item of 'item'\">\r\n                  <span>{{item.code}}: {{ item.name }}</span>\r\n                </div>\r\n              </dx-autocomplete>\r\n            </div>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"mst_btn_options\" cssClass='btn-small'>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!-- Tên đơn vị -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"customer_name\" [editorOptions]=\"{ isRequired: false,onValueChanged: customerChanged}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_name }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!-- Địa chỉ người mua -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"buyer_address\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.buyer_address }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!-- Họ tên người mua -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"buyer_name\" [editorOptions]=\"{onValueChanged: customerChanged}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.buyer_name }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!-- Số đtdd và số CCCD -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"buyer_mobile\" [editorOptions]=\"{onValueChanged: customerChanged}\" [cssClass]=\"'max_left'\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.phone }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.phone\"\r\n            message=\"{{ _translate.CONTROLL.LABEL.phone }} {{ _translate.VALIDATION.not_pattern }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item  dataField=\"id_card\" [cssClass]=\"'max_right'\">\r\n          <dxo-label text=\"Số CCCD\"></dxo-label>\r\n          <!-- <dxi-validation-rule *ngIf=\"frmData.customer_object_code != 'DOANH_NGHIEP'\" type=\"required\" message=\"{{ _translate.CONTROLL.LABEL.buyer_name }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule> -->\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!-- các trường mở rộng -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <app-form-extend [disableForm]=\"ttDaXuatHoaDon\"  [formData]=\"frmData\"  [customerTempt]=\"customerTempt\" [formItems]=\"formItems\" [typeOptions]=\"'bill_options'\"></app-form-extend>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n</div>\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"Thông báo\" [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{_translate.CONFIRM.update_customer}}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"capNhatDmKhachHang()\" text=\"{{_translate.CONTROLL.LABEL.update}}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{_translate.CONTROLL.BUTTON.cancel}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/replace/replace-form-bill/replace-form-bill.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/replace/replace-form-bill/replace-form-bill.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .vat.invoice-number-create-invoice input{color:red;font-weight:bold}.icon-size{font-size:21px;padding:2px 0}.button-tax-code{background:#337ab7;color:#fff;border-color:transparent;border:none}.button-tax-code:focus{outline:none}::ng-deep .vat.invoice-note input{color:#0070C0;font-weight:bold}::ng-deep .vat.layout_input span.dx-field-item-label-content{width:144px !important}::ng-deep .layout_input_left span.dx-field-item-label-content{width:144px !important}#advBtn{width:26px;height:26px;margin-left:5px}:host ::ng-deep .invoice-number-create-invoice{color:red;font-weight:bold;padding-top:3px}::ng-deep .customer-tempt .dx-layout-manager .dx-label-h-align.event_layout_input .dx-field-item-label .dx-field-item-label-content{width:135px !important;min-width:unset !important}::ng-deep .customer-tempt .dx-layout-manager .dx-label-h-align.event_layout_input .dx-field-item-label .dx-field-item-label-content span{text-wrap:wrap}::ng-deep .customer-tempt .dx-layout-manager .dx-label-h-align.odd_layout_input .dx-field-item-label .dx-field-item-label-content{width:74px !important;min-width:unset !important}::ng-deep .customer-tempt .dx-layout-manager .dx-label-h-align.odd_layout_input .dx-field-item-label .dx-field-item-label-content span{text-wrap:wrap}::ng-deep .hdGoc .dx-texteditor-input{color:red !important;font-weight:bold}\n"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/replace/replace-form-bill/replace-form-bill.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/replace/replace-form-bill/replace-form-bill.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ReplaceFormBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceFormBillComponent", function() { return ReplaceFormBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/form-extend/form-extend.component */ "./src/app/shared/components/form-extend/form-extend.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ReplaceFormBillComponent = /** @class */ (function () {
    function ReplaceFormBillComponent(route, modalService, billService, authService, customersService) {
        var _this = this;
        this.route = route;
        this.modalService = modalService;
        this.billService = billService;
        this.authService = authService;
        this.customersService = customersService;
        this.ttDaXuatHoaDon = false;
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.adjustmentObject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isShow = false;
        this.select = {};
        this.pattern = _config_pattern__WEBPACK_IMPORTED_MODULE_2__["pattern"];
        this.tax_codes = []; //mã số thuế
        this.customer_codes = [];
        this.configs = {};
        this.emails = [];
        this.arrEmail = [];
        this.formItems = [];
        this.customForms = [];
        this.customerTempt = {};
        this.showPopup = false;
        this.customerCurent = {};
        this.origin_btn_options = {
            text: '', icon: 'assets/img/icons/Xem.png', type: 'default',
            onClick: function () {
                var ts = _this.oldForm;
                if (_this.oldForm.id) {
                    if (_this.oldForm.adjustment_type == 2 || _this.oldForm.adjustment_type == 4) {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.oldForm.origin_id) != "") {
                            if (_this.oldForm.adjustment_type == 4) {
                                window.open("/system/handle-bills/edit-adjust/" + _this.oldForm.id, '_blank');
                            }
                            else if (_this.oldForm.adjustment_type == 2) {
                                window.open("/system/handle-bills/edit-replace/" + _this.oldForm.id, '_blank');
                            }
                        }
                        else {
                            if (_this.oldForm.template_code == '1') {
                                window.open("/system/bills-invoice-vat/" + _this.oldForm.id, '_blank');
                            }
                            else if (_this.oldForm.template_code == '2') {
                                window.open("/system/bills-invoice-sale/" + _this.oldForm.id, '_blank');
                            }
                        }
                    }
                    else {
                        if (_this.oldForm.template_code == '1') {
                            window.open("/system/bills-invoice-vat/" + _this.oldForm.id, '_blank');
                        }
                        else if (_this.oldForm.template_code == '2') {
                            window.open("/system/bills-invoice-sale/" + _this.oldForm.id, '_blank');
                        }
                    }
                    // gtgt mtt
                    // if (this.oldForm.adjustment_type === '5') {
                    //   window.open(`/system/handle-bills/edit-adjust/${this.oldForm.id}`, '_blank');
                    // } else if (this.oldForm.adjustment_type === '3') {
                    //   window.open(`/system/handle-bills/edit-replace/${this.oldForm.id}`, '_blank');
                    // } else {
                    //   if (this.oldForm.template_code == '1') {
                    //     window.open(`/system/bills-invoice-vat/${this.oldForm.id}`, '_blank');
                    //   } else if (this.oldForm.template_code == '2') {
                    //     window.open(`/system/bills-invoice-sale/${this.oldForm.id}`, '_blank');
                    //   }
                    // }
                }
            }
        };
        this.mst_btn_options = {
            text: '', icon: 'assets/img/icons/Them.png', type: 'default',
            onClick: function () {
                var initialState = {
                    isVisibleGhiVaThemMoi: false
                };
                _this.bsModalRef = _this.modalService.show(_shared_components__WEBPACK_IMPORTED_MODULE_8__["AddCustomerComponent"], {
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
                    }
                    submodal.unsubscribe();
                });
            }
        };
        this.customerChanged = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.name) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.customer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.contact_person_name) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.buyer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.contact_mobile) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.buyer_mobile)
                                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.business_address) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.buyer_address)
                                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.email) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.buyer_email)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this.onChangeTem = function (e) {
            _this.select.templatesTT78.forEach(function (item) {
                if (e.value === item.value) {
                    _this.formDuLieuMoRong(item);
                    _this.frmData.template_id = item.value;
                    _this.frmData.bill_series = item.invoice_series;
                    _this.frmData.template_code = item.template_code;
                    _this.onTemplateTypeChange.emit(item);
                }
            });
        };
        this.paymentMethodChange = function (e) {
            var _obj = _this.select.payment_method_names.filter(function (p) { return p.code === e.value; })[0];
            if (_obj) {
                _this.frmData.payment_method_view_name = _obj.name;
            }
        };
        this.updateCustomerInfo = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.code) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.customer_code)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this.updateTaxcodeInfo = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.customerCurent.tax_code) !== _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.buyer_tax_code)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this._translate = this.authService.getTranslate();
    }
    ReplaceFormBillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configs = this.authService.getConfigs();
        this.routeSub = this.route.data.subscribe(function (data) {
            // put data DM for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.payment_method_names = data.init[1].DM_HINH_THUC_THANH_TOAN;
            _this.select.currency_codes = data.init[1].DM_LOAI_TIEN;
            _this.select.customer_types = data.init[1].DM_NHOM_KHACH_HANG;
            _this.select.export_places = data.init[1].DM_NOI_XUAT_HOA_DON;
            _this.select.list_bank_account_seller = data.init[1].DM_TAI_KHOAN_NGAN_HANG;
            _this.select.list_bank_account_seller.forEach(function (item) {
                item.name_display = item.code + ': ' + item.name;
            });
            _this.select.templatesTT78 = _this.listTemplate;
        });
        // tìm kiếm mã số thuế
        this.tax_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default.a({
            load: function (loadOptions) {
                return _this.billService.getDataSourceForm(loadOptions.searchValue, 'tax_code');
            }
        });
        // // tìm kiếm mã khách hàng
        this.customer_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default.a({
            load: function (loadOptions) {
                return _this.billService.getDataSourceForm(loadOptions.searchValue, 'code');
            }
        });
        if (this.frmData.buyer_email) {
            this.emails = [];
            var emailToString = this.frmData.buyer_email;
            var a11 = emailToString.replace(/;/g, ',');
            this.emails = a11.split(',');
        }
    };
    ReplaceFormBillComponent.prototype.onAdvancedClick = function () {
        this.isShow = !this.isShow;
    };
    ReplaceFormBillComponent.prototype.createCustomGroup = function () {
        return {
            itemType: 'group',
            colCount: '2',
            items: this.customForms
        };
    };
    /////// sự kiện thay đổi các trường mở rộng
    ReplaceFormBillComponent.prototype.changeItem = function (_dulieumorong) {
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
    ReplaceFormBillComponent.prototype.readonlyAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = true;
        });
        this.readOnlyCacTruongConLai = true;
    };
    // gửi data lên parent component
    ReplaceFormBillComponent.prototype.onFieldDataChanged = function () {
        this.formEvent.emit(this.frmData);
    };
    ReplaceFormBillComponent.prototype.taxCodeChoose = function (e) {
        var customer = e.itemData;
        if (this.frmData.customer_object_code !== 'CA_NHAN' && this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.customer_name = customer.name;
        }
        this.frmData.buyer_name = customer.contact_person_name;
        if (this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.buyer_address = customer.business_address;
        }
        this.frmData.customer_code = customer.code;
        this.frmData.buyer_mobile = customer.contact_mobile;
        if (customer.email) {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
            var stringDataEmailGet = customer.email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
        else {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
        }
        this.frmData.customer_id = customer.id;
        this.onFieldDataChanged();
    };
    ReplaceFormBillComponent.prototype.customerCodeChoose = function (e) {
        var customer = e.itemData;
        if (this.frmData.customer_object_code !== 'CA_NHAN' && this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.customer_name = customer.name;
        }
        this.frmData.buyer_name = customer.contact_person_name;
        if (this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.buyer_address = customer.business_address;
        }
        this.frmData.buyer_tax_code = customer.tax_code;
        this.frmData.customer_id = customer.id;
        this.frmData.buyer_mobile = customer.contact_mobile;
        if (customer.email) {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
            var stringDataEmailGet = customer.email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
        else {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
        }
        this.onFieldDataChanged();
    };
    ///////////////
    ReplaceFormBillComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    ReplaceFormBillComponent.prototype.capNhatDmKhachHang = function () {
        var _this = this;
        this.customerCurent.tax_code = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.buyer_tax_code);
        this.customerCurent.name = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.customer_name);
        this.customerCurent.code = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.customer_code);
        this.customerCurent.contact_person_name = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.buyer_name);
        this.customerCurent.contact_mobile = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.buyer_mobile);
        this.customerCurent.business_address = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.buyer_address);
        this.customerCurent.email = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.buyer_email);
        var data = { customer: this.customerCurent };
        this.customersService.edit(data, this.customerCurent.id).subscribe(function (response) {
            if (response.status === 'success') {
                _this.showPopup = false;
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(response.message, 'error');
            }
        }, function (err) {
        }, function () {
        });
    };
    ReplaceFormBillComponent.prototype.huy = function () {
        this.showPopup = false;
    };
    ReplaceFormBillComponent.prototype.renderDataEmail = function ($event) {
        this.arrEmail = [];
        this.emails = $event;
        if (this.emails.length > 0) {
            for (var i = 0; i < this.emails.length; i++) {
                if (typeof this.emails[i] === 'object')
                    this.arrEmail.push(this.emails[i].value);
                else if (typeof this.emails[i] === 'string')
                    this.arrEmail.push(this.emails[i]);
            }
            var emailToString = this.arrEmail.toString();
            this.frmData.buyer_email = emailToString.replace(/,/g, ';');
        }
        else {
            this.frmData.buyer_email = null;
        }
        this.formEvent.emit(this.frmData);
    };
    ReplaceFormBillComponent.prototype.changeTaxCode = function (e) {
        this.tax_code_search = e.value;
    };
    ReplaceFormBillComponent.prototype.searchTaxCode = function () {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.tax_code_search = this.frmData.buyer_tax_code;
        if (!this.tax_code_search) {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng nhập mã số thuế!", "error");
        }
        else {
            this.billService.getInfoCompany(this.tax_code_search).subscribe(function (res) {
                if (res.status == "success") {
                    // this.dataTaxCode = res.data.customer;
                    _this.frmData.customer_name = res.data.customer.name;
                    _this.frmData.buyer_address = res.data.customer.business_address;
                }
            });
        }
        this.onFieldDataChanged();
        setTimeout(function () {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        }, 1000);
    };
    ReplaceFormBillComponent.prototype.formDuLieuMoRong = function (item) {
        var _this = this;
        var _dulieumorong = lodash__WEBPACK_IMPORTED_MODULE_13__["cloneDeep"](item.fields).filter(function (x) { return x.type === '4'; });
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].resetObject(this.formItems);
        this.customForms = [];
        this.customerTempt = {};
        var bill_options = this.frmData.bill_options;
        if (bill_options.length > 0) {
            _dulieumorong = _dulieumorong.map(function (dl) {
                var option = bill_options.find(function (x) { return x.code == dl.code; });
                if (option) {
                    dl.value = option.value;
                }
                return dl;
            });
        }
        this.frmData.bill_options = _dulieumorong;
        if (_dulieumorong.length > 0) {
            this.formExtend.createForm(this.customForms, _dulieumorong);
        }
        _dulieumorong.forEach(function (value) {
            _this.customerTempt[value.code] = value.value;
        });
    };
    ReplaceFormBillComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var template = null;
        template = this.select.templatesTT78.find(function (item) { return item.value == _this.frmData.template_id; });
        this.onChangeTem(template);
    };
    ReplaceFormBillComponent.prototype.disableTemplateInput = function () {
        if (this.frmData.bill_number) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormComponent"]),
        __metadata("design:type", Object)
    ], ReplaceFormBillComponent.prototype, "listDxForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormComponent"])
    ], ReplaceFormBillComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_9__["FormExtendComponent"]),
        __metadata("design:type", _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_9__["FormExtendComponent"])
    ], ReplaceFormBillComponent.prototype, "formExtend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReplaceFormBillComponent.prototype, "ttDaXuatHoaDon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormBillComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormBillComponent.prototype, "oldForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormBillComponent.prototype, "bill_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormBillComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormBillComponent.prototype, "infoDangKy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormBillComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormBillComponent.prototype, "listTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReplaceFormBillComponent.prototype, "isHdGTGT", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onFormChange'),
        __metadata("design:type", Object)
    ], ReplaceFormBillComponent.prototype, "formEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('adjustmentObjectChange'),
        __metadata("design:type", Object)
    ], ReplaceFormBillComponent.prototype, "adjustmentObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTypeChange'),
        __metadata("design:type", Object)
    ], ReplaceFormBillComponent.prototype, "onTemplateTypeChange", void 0);
    ReplaceFormBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-replace-form-bill',
            template: __webpack_require__(/*! ./replace-form-bill.component.html */ "./src/app/modules/handle-bills/components/replace/replace-form-bill/replace-form-bill.component.html"),
            styles: [__webpack_require__(/*! ./replace-form-bill.component.scss */ "./src/app/modules/handle-bills/components/replace/replace-form-bill/replace-form-bill.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsModalService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_6__["BillService"],
            _core_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_7__["CustomersService"]])
    ], ReplaceFormBillComponent);
    return ReplaceFormBillComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/components/replace/replace-product-grip/replace-product-grip.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/replace/replace-product-grip/replace-product-grip.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--phần table hiển thị-->\r\n<div class=\"row invoice-table\">\r\n  <div class=\"col-md-12\" style=\"padding: 15px 20px;\">\r\n    <!-- Thêm dòng -->\r\n    <div class=\"pull-left\">\r\n      <div style=\"float: left;width:  30%; padding-top: 4px\">{{ _translate.CONTROLL.BUTTON.add_row }}</div>\r\n      <div style=\"float: left; width: 30%\">\r\n        <dx-number-box #numberBox [max]=\"100\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"rowData\"></dx-number-box>\r\n      </div>\r\n      <div>\r\n        <dx-button style=\"height: 27px\" icon=\"fa fa-plus-circle\" type=\"default\" text=\"\" (onClick)=\"addRow()\">\r\n        </dx-button>\r\n      </div>\r\n    </div>\r\n    <div class=\"pull-right\">\r\n      <!-- Hóa đơn bán hàng NQ 43 -->\r\n      <dx-check-box *ngIf=\"!isHdGTGT\" style=\"margin-right: 20px\" [(value)]=\"frmData.is_resolution_43\"\r\n        text=\"{{ _translate.THONG_TIN.giam_thue_theo_nq43 }}\" (onValueChanged)=\"_changeNQ43($event)\"></dx-check-box>\r\n      <dx-check-box class=\"auto-input\" text=\"{{ _translate.CONTROLL.LABEL.no_calculation }}\"\r\n        [(value)]=\"frmData.auto_value\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      <dx-menu [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\" submenuDirection=\"auto\"\r\n        (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n      </dx-menu>\r\n      <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx\" (change)=\"onFileBangKeChange($event)\" multiple=\"false\"\r\n      style=\"display: none;\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <dx-data-grid id=\"gridInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n      [allowColumnResizing]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n      (onKeyDown)=\"onGripKeyDown($event)\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n      (onEditorPrepared)=\"onEditorPrepared($event)\" (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n      (onRowPrepared)=\"onRowPrepared($event)\" (onCellPrepared)=\"onCellPrepared($event)\" (onContentReady)=\"onContentReady($event)\">\r\n      <!-- [wordWrapEnabled]=\"true\" (onEditorPrepared)=\"onEditorPrepared($event)\" -->\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"!ttDaXuatHoaDon\"></dxo-editing>\r\n      <dxo-sorting mode=\"false\"></dxo-sorting>\r\n      <dxo-scrolling mode=\"virtual\">\r\n      </dxo-scrolling>\r\n      <dxi-column cellTemplate=\"deleteColumn\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.delete }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.delete_column }}\" [allowEditing]=\"false\" alignment=\"center\" [fixed]=\"true\"\r\n        fixedPosition=\"left\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"order\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.view_order }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.stt }}\" alignment=\"center\" [fixed]=\"true\"\r\n        fixedPosition=\"left\"></dxi-column>\r\n      <dxi-column cssClass=\"overlay-content123\" dataField=\"product_code\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_code }}\" minWidth=\"{{ _translate.GRID_WIDTH.ma_hang }}\"\r\n        alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\" [editorOptions]=\"{showClearButton: true}\">\r\n        <dxo-lookup [dataSource]=\"select.products\" displayExpr=\"mhvth\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column dataField=\"product_name\" minWidth=\"{{ _translate.GRID_WIDTH.ten_hang }}\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_name }}\" alignment=\"left\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Diễn giải -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_promotion\" cellTemplate=\"dien_giai\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.explain }}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Khuyến mại -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.promotional_goods_on_the_invoice\" cellTemplate=\"khuyen_mai\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.promotion }}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Chiết khấu thương mại -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.commercial_discount\" cellTemplate=\"cktm\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.commercial_discount }}\" minWidth=\"{{ _translate.GRID_WIDTH.cktm }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Đơn vị tính -->\r\n      <dxi-column dataField=\"unit_code\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.unit_code }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.unit_code }}\" alignment=\"center\" [editorOptions]=\"lookupColumnOptions\">\r\n        <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column dataField=\"quantity\" headerCellTemplate=\"quantityHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\" dataType=\"number\" alignment=\"center\"\r\n        [editorOptions]=\"{ format: formatter.so_luong,step: '0' }\"\r\n        [format]=\"formatter.so_luong\"\r\n        ></dxi-column>\r\n\r\n      <dxi-column dataField=\"price\" headerCellTemplate=\"priceHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        dataType=\"number\" alignment=\"right\" [editorOptions]=\"{ format: formatter.don_gia,step: '0' }\"\r\n        [format]=\"formatter.don_gia\">\r\n      </dxi-column>\r\n      <dxi-column\r\n        *ngIf=\"_objTemplateSelect && _objTemplateSelect.is_discount\"\r\n        dataField=\"discount\" headerCellTemplate=\"discountHeader\" minWidth=\"{{ _translate.GRID_WIDTH.chiet_khau }}\"\r\n        [editorOptions]=\"{ format: formatter.ty_le_chiet_khau  }\" [format]=\"formatter.ty_le_chiet_khau \"\r\n        dataType=\"number\" alignment=\"right\">\r\n      </dxi-column>\r\n      <dxi-column\r\n        *ngIf=\"_objTemplateSelect && _objTemplateSelect.is_discount\"\r\n        dataField=\"amount_discount\" headerCellTemplate=\"amount_discountHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tien_chiet_khau }}\" [editorOptions]=\"{ format: formatter.tien_chiet_khau }\"\r\n        [format]=\"formatter.tien_chiet_khau\" dataType=\"number\" alignment=\"right\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"amount\" headerCellTemplate=\"amountHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        dataType=\"number\" alignment=\"right\" [editorOptions]=\"{ format: formatter.thanh_tien, step: '0' }\"\r\n        [format]=\"formatter.thanh_tien\"></dxi-column>\r\n\r\n      <dxi-column dataField=\"vat\" headerCellTemplate=\"vatHeader\" minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\"\r\n        alignment=\"center\" *ngIf=\"isHdGTGT\" [editorOptions]=\"{showClearButton: true ,step: '0'}\">\r\n        <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"amount_vat\" headerCellTemplate=\"amountVatHeader\" *ngIf=\"isHdGTGT\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\" dataType=\"number\" alignment=\"right\"\r\n        [editorOptions]=\"{ format: formatter.tien_thue, step: '0' }\" [format]=\"formatter.tien_thue\">\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"amount_after_vat\" headerCellTemplate=\"amountAfterVatHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tien_thue }}\" dataType=\"number\" alignment=\"right\"\r\n        [editorOptions]=\"{ format: formatter.tong_tien, step: '0' }\" [format]=\"formatter.tong_tien\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'quantityHeader'\">\r\n        <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.quantity }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceHeader'\">\r\n        <p (click)=\"configDecimal('don_gia')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.price }}<img\r\n            src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount_vat }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'vatHeader'\">\r\n        <p>VAT</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountHeader'\">\r\n        <p (click)=\"configDecimal('thanh_tien')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.amount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount_vat }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountAfterVatHeader'\">\r\n        <p (click)=\"configDecimal('tong_tien')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.total_money }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <!-- config column -->\r\n      <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n        <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'dien_giai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_explain\" [disabled]=\"d.data.is_promotion\"\r\n          (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'khuyen_mai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_promotion\" [disabled]=\"d.data.is_explain\"\r\n          (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n    \r\n      <div *dxTemplate=\"let d of 'is_transport_number'\">\r\n        <dx-check-box [(value)]=\"d.data.is_transport_number\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'discountHeader'\">\r\n        <p (click)=\"configDecimal('ty_le_chiet_khau')\" style=\"cursor: pointer;\">{{\r\n          _translate.GRID.INVOICE_DETAILS.discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amount_discountHeader'\">\r\n        <p (click)=\"configDecimal('tien_chiet_khau')\" style=\"cursor: pointer;\">{{\r\n          _translate.GRID.INVOICE_DETAILS.amount_discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'cktm'\">\r\n        <dx-check-box [(value)]=\"d.data.commercial_discount\" (onValueChanged)=\"changeCKTM(d.data)\"></dx-check-box>\r\n      </div>\r\n      \r\n      \r\n      <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    </dx-data-grid>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n  [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div>\r\n    <p style=\"margin-bottom: 35px;\">{{ _translate.CONFIRM.import_type }}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"thayTheToanBo()\" text=\"{{ _translate.CONTROLL.BUTTON.replace_all }}\" type=\"default\">\r\n      </dx-button>\r\n      <dx-button (click)=\"themTiep()\" text=\"{{ _translate.CONTROLL.BUTTON.add_more }}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{ _translate.CONTROLL.BUTTON.cancel }}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/replace/replace-product-grip/replace-product-grip.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/replace/replace-product-grip/replace-product-grip.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-row i{color:#0E77BB;font-size:18px}.support-invoice{margin-top:20px;margin-bottom:10px}.support-invoice .support-link{padding:6px 15px;border:1px solid #007bff;text-decoration:none}.support-invoice .support-link.mgr-15{margin-right:8px}.support-invoice .support-link img,.support-invoice .support-link i{margin-right:15px;margin-top:-2px}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}::ng-deep .styleItemToList{color:dodgerblue}.button-dropdown-extend{display:inline-flex}.pull-right .auto-input{margin-right:75px !important}\n"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/replace/replace-product-grip/replace-product-grip.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/replace/replace-product-grip/replace-product-grip.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ReplaceProductGripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceProductGripComponent", function() { return ReplaceProductGripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme/data/custom_store */ "./node_modules/devextreme/data/custom_store.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ReplaceProductGripComponent = /** @class */ (function () {
    function ReplaceProductGripComponent(authService, route, router, modalService, billService, productsService, invoiceService) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.billService = billService;
        this.productsService = productsService;
        this.invoiceService = invoiceService;
        this.contextMenu = [{ text: 'Thêm' }, { text: 'Xóa' }];
        this.select = {};
        this.amount_after_vat = 0;
        this.showPopup = false; // Popup
        this.dataExcelFile = null;
        this.ttDaXuatHoaDon = false;
        this.gripAllowEdit = false;
        this.dataExcelFileInfo = null;
        this.extras = [];
        this.rowData = 1;
        this.isPXKDaiLy = false;
        this.isPXKNB = false;
        this.productCodePattern = _config_pattern__WEBPACK_IMPORTED_MODULE_2__["pattern"].productCodePattern;
        this.gripChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.autoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lookupColumnOptions = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                var _this = this;
                //
                //
                var newItem = {};
                newItem.code = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._convertToViKdau(args.text);
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
            _this.invoiceService.formatSumColumnGrid(arrFooter);
        };
        this._translate = this.authService.getTranslate();
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
    ReplaceProductGripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configs = this.authService.getConfigs();
        this.routeSub = this.route.data.subscribe(function (data) {
            // put data DM for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.vats = data.init[1].DM_TY_LE_VAT;
            _this.select.select_provisions_on_accounts = data.init[1].DM_DINH_KHOAN;
            _this.select.countrys = data.init[1].DM_QUOC_GIA;
            // Hàng hóa dịch vụ
            _this.select.products = data.init[2];
            _this.select.products.forEach(function (item) {
                item.mhvth = item.code + ': ' + item.name;
                item.vat = item.vat != null ? item.vat.toString() : null;
            });
            _this.select.productsView = {
                store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_12___default.a({
                    key: 'code',
                    loadMode: 'raw',
                    load: function (loadOptions) {
                        return _this.select.products;
                    },
                    byKey: function (key) {
                        var _data = data.init[2].filter(function (p) { return p.code === key.toString(); });
                        return _data;
                    }
                }),
                paginate: true,
                sort: 'name'
            };
            if (data.init[4]) {
                if (data.init[4].bill_products) {
                    data.init[4].bill_products.forEach(function (item) {
                        if (item.product_name && item.unit_code) {
                            var obj1 = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                            if (!obj1) {
                                _this.select.unit_codes.push({
                                    id: _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].makeid(),
                                    code: item.unit_code,
                                    name: item.unit_name ? item.unit_name : item.unit_code
                                });
                            }
                        }
                    });
                }
            }
        });
        // Event
        this.createUpdateEvent();
    };
    // khởi tạo sự kiện khi update
    ReplaceProductGripComponent.prototype.createUpdateEvent = function () {
        var _this = this;
        var product = this.bill_products;
        setTimeout(function () {
            _this.bill_products.on('updated', function (key, value) {
                var column = Object.keys(value)[0];
                _this.bill_products.byKey(key).then(function (row) {
                    switch (column) {
                        case 'view_order':
                            _this.view_orderChange();
                            break;
                        case 'product_code':
                            _this.product_codeChange(row);
                            break;
                        case 'unit_code':
                            _this.unit_codeChange(row);
                            break;
                        case 'country_code':
                            _this.country_codeChange(row);
                            break;
                        case 'quantity':
                        case 'number_real_export':
                        case 'price':
                        case 'price_nte':
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
                        case 'price_after_vat':
                            if ((row.vat == 5 || row.vat == 10) && row.price_after_vat)
                                row.price = (row.price_after_vat / (1 + row.vat / 100));
                            else
                                row.price = row.price_after_vat;
                            _this._tinhGiaTri();
                            break;
                        case 'vat':
                            if (_this.configs.system_parameter.price_after_vat) {
                                if ((row.vat == 5 || row.vat == 10) && row.price_after_vat)
                                    row.price = (row.price_after_vat / (1 + row.vat / 100));
                                else
                                    row.price = row.price_after_vat;
                            }
                            _this._tinhGiaTri();
                            break;
                        default:
                            break;
                    }
                }, function (error) {
                    alert(error);
                });
            });
        }, 100);
    };
    ReplaceProductGripComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    ReplaceProductGripComponent.prototype.onRowPrepared = function (e) {
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
    ReplaceProductGripComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            if (e.column.dataField == "product_code") {
                if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(e.data.product_code) != "" && !this.productCodePattern.test(e.data.product_code)) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = this._translate.VALIDATION.required_productCode;
                }
            }
        }
    };
    ReplaceProductGripComponent.prototype.onEditorPreparing = function (e) {
        if (e.parentType === 'dataRow') {
            if (e.dataField === 'product_code') {
                e.editorOptions.onOpened = function (arg) {
                    var popupInstance = arg.component._popup;
                    popupInstance.option('width', 400);
                    popupInstance.option('minWidth', 400);
                    // popupInstance.off("optionChanged", this.optionChangedHandler);
                    // popupInstance.on("optionChanged", this.optionChangedHandler);
                };
            }
            if (e.dataField === 'product_name') {
                e.editorName = 'dxTextArea';
            }
            // e.editorOptions.onFocusOut = (args) => {
            //   if (e.dataField === 'unit_code') {
            //     if (this.select.unit_codes) {
            //       const _obj = this.select.unit_codes.filter(p => p.code === e.row.data.unit_code)[0];
            //       if (_obj) {
            //         e.row.data.unit_name = _obj.name;
            //       } else {
            //         e.row.data.unit_name = 'fdsfsd';
            //       }
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
            //   this.bill_products.update(e.row.data.id, e.row.data);
            // };
        }
    };
    ReplaceProductGripComponent.prototype.onEditorPrepared = function (e) {
        if ((e.dataField === 'amount_without_discount' || e.dataField === 'discount' || e.dataField === 'amount_discount' || e.dataField === 'quantity' || e.dataField === 'price' || e.dataField === 'amount' || e.dataField === 'amount_vat' || e.dataField === 'amount_after_vat') && e.parentType === 'dataRow') {
            e.editorElement.childNodes[1].firstChild.onwheel = function (evt) {
                e.component.cancelEditData();
            };
            e.editorElement.childNodes[1].firstChild.addEventListener('select', function () {
                this.selectionStart = this.selectionEnd;
            }, false);
        }
    };
    ReplaceProductGripComponent.prototype.onContextMenuPreparing = function (e) {
        var _this = this;
        if (e.row && e.row.rowType === 'data') {
            e.items = [{
                    text: 'Thêm hàng',
                    onItemClick: function () {
                        _this.addRow(e.row.rowIndex);
                    }
                },
                {
                    text: 'Xóa hàng',
                    onItemClick: function () {
                        _this.deleteRow(e.row.data);
                    }
                }];
        }
    };
    /* Thêm dòng hàng hóa */
    ReplaceProductGripComponent.prototype.addRow = function (rowIndexFocus) {
        if (rowIndexFocus >= 0) {
            var rowIndex = rowIndexFocus + 1;
            var data = this.frmData.add_bill_products_data(rowIndex, rowIndex);
            if (data) {
                this.bill_products._array.splice(rowIndex, 0, data);
                var order_1 = 0;
                this.bill_products._array.forEach(function (item) {
                    item.order = ++order_1;
                    item.view_order = item.order;
                });
            }
        }
        else {
            var len_1, order = void 0, orderLast_1;
            this.bill_products.load().then(function (dataSource) {
                len_1 = dataSource.length;
                orderLast_1 = dataSource[len_1 - 1].order;
            });
            for (var i = 0; i < this.rowData; i++) {
                if (len_1 >= 1) {
                    order = ++orderLast_1;
                }
                else {
                    order = 1;
                }
                var data = this.frmData.add_invoice_products_data(order, order);
                this.bill_products.insert(data);
            }
        }
        this.dataSource.reload();
    };
    ReplaceProductGripComponent.prototype.view_orderChange = function () {
        var _this = this;
        var _index = 0;
        this.dataSource.items().forEach(function (item) {
            if (item.view_order && _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) != _config_sEnum__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                item.view_order = ++_index;
            }
        });
    };
    // Thay đổi cột mã hàng
    ReplaceProductGripComponent.prototype.product_codeChange = function (row) {
        var _this = this;
        this.select.products.some(function (item) {
            if (item.code === row.product_code) {
                _this.productsService.getProduct(item.id).subscribe(function (rs) {
                    if (rs.status == "success") {
                        var product = rs.data.product;
                        if (product) {
                            row.product_name = product.name;
                            row.unit_code = _this.checkUnitCode(product.unit_code);
                            row.quantity = null;
                            if (_this.isHdGTGT)
                                row.vat = product.vat != null ? product.vat.toString() : null;
                            if (_this.configs.system_parameter.price_after_vat) {
                                row.price_after_vat = product.price ? parseFloat(product.price) : product.price;
                                if ((row.vat == 5 || row.vat == 10) && row.price_after_vat)
                                    row.price = (row.price_after_vat / (1 + row.vat / 100));
                                else
                                    row.price = row.price_after_vat;
                            }
                            else
                                row.price = product.price ? parseFloat(product.price) : product.price;
                            row.amount = product.price ? parseFloat(product.price) : 0;
                            if (_this.isHdGTGT) {
                                row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                                row.amount_after_vat = row.amount + row.amount_vat;
                            }
                            else {
                                row.amount_after_vat = row.amount;
                            }
                            _this.bill_products.update(row.order, row);
                            _this._tinhGiaTri();
                            return true;
                        }
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
                    }
                });
            }
        });
    };
    ReplaceProductGripComponent.prototype.unit_codeChange = function (row) {
        var _obj = this.select.unit_codes.filter(function (p) { return p.code === row.unit_code; })[0];
        if (_obj) {
            row.unit_name = _obj.name;
            this.bill_products.update(row.id, row);
        }
        else {
            row.unit_name = '';
            this.bill_products.update(row.id, row);
        }
    };
    ReplaceProductGripComponent.prototype.country_codeChange = function (row) {
        var _obj = this.select.countrys.filter(function (p) { return p.code === row.country_code; })[0];
        if (_obj) {
            row.country_name = _obj.name;
            this.bill_products.update(row.id, row);
        }
        else {
            row.country_name = '';
            this.bill_products.update(row.id, row);
        }
    };
    ReplaceProductGripComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code === unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    ReplaceProductGripComponent.prototype._tinhGiaTri = function () {
        var _this = this;
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.bill_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, _this.select, _this._oTemplateTT78, _this.configs.system_parameter);
            _this.amount_after_vat = _this.frmData.amount_after_vat;
            _this.frmData.amount_vat = _this.frmData.total_amount_vat;
            _this.handleVat(_this.frmData);
            _this.dataGrid.instance.refresh();
        }, 0);
    };
    ReplaceProductGripComponent.prototype.handleVat = function (data) {
        var tax_information = [];
        if (data.amount_vat0 === 0) {
            tax_information.push({
                "vat": "0",
                "amount": data.total_amount_product_vat0,
                "amount_vat": data.amount_vat0,
                "amount_after_vat": data.amount_after_vat0
            });
        }
        if (data.amount_vat5) {
            tax_information.push({
                "vat": "5",
                "amount": data.total_amount_product_vat5,
                "amount_vat": data.amount_vat5,
                "amount_after_vat": data.amount_after_vat5
            });
        }
        if (data.amount_vat10) {
            tax_information.push({
                "vat": "10",
                "amount": data.total_amount_product_vat10,
                "amount_vat": data.amount_vat10,
                "amount_after_vat": data.amount_after_vat10
            });
        }
        if (data.amount_vat8) {
            tax_information.push({
                "vat": "8",
                "amount": data.total_amount_product_vat8,
                "amount_vat": data.amount_vat8,
                "amount_after_vat": data.amount_after_vat8
            });
        }
        if (data.amount_vatx) {
            tax_information.push({
                "vat": "x",
                "amount": data.total_amount_product_vatx,
                "amount_vat": data.amount_vatx,
                "amount_after_vat": data.amount_after_vatx
            });
        }
        if (data.amount_vat_other) {
            tax_information.push({
                "vat": "KHAC",
                "amount": data.total_amount_product_vat_other,
                "amount_vat": data.amount_vat_other,
                "amount_after_vat": data.amount_after_vat0
            });
        }
        this.frmData.tax_information = tax_information;
    };
    ReplaceProductGripComponent.prototype.caculatorAmountVat = function (amount, vat) {
        var temp = amount / 100 * vat;
        return this.roundNumber(temp, 5);
    };
    ReplaceProductGripComponent.prototype.roundNumber = function (number, n) {
        var p = Math.pow(10, n);
        return Math.round(number * p) / p;
    };
    // Bật modal thay đổi số thập phân
    ReplaceProductGripComponent.prototype.configDecimal = function (n) {
        var _this = this;
        var initialState = {
            column: n,
            formatter: this.formatter,
            showDonGiaNte: this.configs.system_parameter.view_price_nte
        };
        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_9__["ConfigDecimalComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                _this.formatter[data.column] = data.character;
                _this._tinhGiaTri();
            }
        });
    };
    // Xóa hàng
    ReplaceProductGripComponent.prototype.deleteRow = function (item) {
        var _this = this;
        // setTimeout(() => {
        var check = confirm('Bạn có đồng ý xóa không?');
        if (check && !this.ttDaXuatHoaDon) {
            setTimeout(function () {
                _this.bill_products.remove(item.id);
                // this.dataSource.store().remove(item.id);
                _this.dataSource.reload();
                _this._tinhGiaTri();
            }, 100);
        }
        // }, 200);
    };
    ReplaceProductGripComponent.prototype.updateSomeTotalInputNotCheckCktm = function () {
        var _this = this;
        setTimeout(function () {
            _this.gripChange.emit([_this.dataSource, _this.bill_products, _this.formatter]);
        }, 200);
    };
    // Lấy mẫu bảng kê
    ReplaceProductGripComponent.prototype.layMauBangKe = function () {
        _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var fields = [];
        if (this.configs.system_parameter) {
            // diễn giải
            if (!this.configs.system_parameter.is_promotion) {
                fields.push('is_explain');
            }
            // Khuyễn mại
            if (!this.configs.system_parameter.promotional_goods_on_the_invoice) {
                fields.push('is_promotion');
            }
            // ct khuyến mại
            if (!this.configs.system_parameter.commercial_discount) {
                fields.push('commercial_discount');
            }
        }
        if (!this.isHdGTGT) {
            fields.push('vat');
            fields.push('amount_vat');
        }
        this.billService.layFileMauMayTinhTien({
            customer_name: this.frmData.customer_name,
            buyer_tax_code: this.frmData.buyer_tax_code,
            buyer_address: this.frmData.buyer_address,
            buyer_name: this.frmData.buyer_name,
            invoice_type_name: '',
            hiddens: fields
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                var file = rs.data.invoice;
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        });
    };
    // Nạp dữ liệu bảng kê
    ReplaceProductGripComponent.prototype.napDuLieuTuBangKe = function () {
        document.getElementById('file-bang-ke').click();
    };
    ReplaceProductGripComponent.prototype.onFileBangKeChange = function (evt) {
        var _this = this;
        var target = (evt.target);
        if (target.files.length !== 1) {
            throw new Error('Không thể chọn nhiều file');
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_14__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].sheet_to_json(ws, { header: 'A', range: 9 }));
            var account = (xlsx__WEBPACK_IMPORTED_MODULE_14__["utils"].sheet_to_json(ws, { header: 'A', range: 0 }));
            var fileBangKe = document.getElementById('file-bang-ke');
            fileBangKe.value = '';
            var _arrData = [];
            if (data && data[0]) {
                var columnsName = data.map(function (e) { return e.A; });
                var _index = columnsName.indexOf("view_order");
                if (_index == -1) {
                    _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("File mẫu không đúng định dạng. Vui lòng nhấn vào Tại đây để lấy lại file mẫu", "error");
                    return false;
                }
                else {
                    if (_index > 0) {
                        data.splice(0, _index);
                    }
                    for (var i = 1; i < data.length; i++) {
                        var _row = {};
                        for (var key in data[i]) {
                            if (data[i].hasOwnProperty(key)) {
                                var column = data[0][key];
                                var value = data[i][key];
                                _row[column] = value;
                            }
                        }
                        _arrData.push(_row);
                    }
                }
            }
            _this.dataExcelFile = _arrData;
            _this.dataExcelFileInfo = account.slice(0, 4);
            _this.showPopup = true;
        };
        reader.readAsBinaryString(target.files[0]);
    };
    ReplaceProductGripComponent.prototype.thayTheToanBo = function () {
        this.fillData(this.dataExcelFile, this.dataExcelFileInfo, 'thaythe');
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ReplaceProductGripComponent.prototype.themTiep = function () {
        this.fillData(this.dataExcelFile, this.dataExcelFileInfo, 'themtiep');
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ReplaceProductGripComponent.prototype.huy = function () {
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ReplaceProductGripComponent.prototype.fillData = function (fileData, info, status) {
        var _this = this;
        if (info.length === 5) {
            var customer_name = info[0].A.split(':');
            if (customer_name.length > 1 && customer_name[1].trim() != '') {
                this.frmData.customer_name = customer_name[1].trim();
            }
            ////
            var buyer_tax_code = info[1].A.split(':');
            if (buyer_tax_code.length > 1 && buyer_tax_code[1].trim() != '') {
                this.frmData.buyer_tax_code = buyer_tax_code[1].trim();
            }
            ////
            var buyer_name = info[2].A.split(':');
            if (buyer_name.length > 1 && buyer_name[1].trim() != '') {
                this.frmData.buyer_name = buyer_name[1].trim();
            }
            ////
            var buyer_address = info[3].A.split(':');
            if (buyer_address.length > 1 && buyer_address[1].trim() != '') {
                this.frmData.buyer_address = buyer_address[1].trim();
            }
            ////
            var id_card = info[4].A.split(':');
            if (id_card.length > 1 && id_card[1].trim() != '') {
                this.frmData.id_card = id_card[1].trim();
            }
        }
        if (status === 'thaythe') {
            this.bill_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    _this.bill_products.remove(item.id);
                });
            });
        }
        else {
            this.bill_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    if (!item.product_code && !item.product_name && !item.quantity && !item.price && !item.amount) {
                        _this.bill_products.remove(item.id);
                    }
                });
            });
        }
        fileData.forEach(function (element) {
            if (element.product_name) {
                var bill_1 = new Object();
                bill_1['id'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].makeid();
                bill_1['order'] = element.view_order ? parseInt(element.view_order) : null;
                bill_1['product_code'] = element.product_code ? element.product_code : "";
                bill_1['product_name'] = element.product_name ? element.product_name : "";
                bill_1['quantity'] = element.quantity ? _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].toNumber(element.quantity) : null;
                bill_1['vat'] = element.vat ? element.vat : null;
                bill_1["amount_vat"] = element.amount_vat ? _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].toNumber(element.amount_vat) : null;
                bill_1['amount'] = element.amount ? _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].toNumber(element.amount) : null;
                bill_1["unit_code"] = element.unit_name ? _this.getUnitCodeByUnitName(element.unit_name) : "";
                bill_1["unit_name"] = element.unit_name ? element.unit_name : "";
                bill_1["price"] = element.price ? _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].toNumber(element.price) : null;
                if (bill_1["amount_vat"] !== null && bill_1["amount"] !== null)
                    bill_1["amount_after_vat"] = bill_1["amount_vat"] + bill_1["amount"];
                else if (bill_1["amount"] !== null)
                    bill_1["amount_after_vat"] = bill_1["amount"];
                else if (bill_1["amount_vat"] !== null)
                    bill_1["amount_after_vat"] = bill_1["amount_vat"];
                else
                    bill_1["amount_after_vat"] = null;
                bill_1["is_explain"] = element.is_explain && (element.is_explain == "X" || element.is_explain == "x") ? true : false;
                bill_1["is_promotion"] = element.is_promotion && (element.is_promotion == "X" || element.is_promotion == "x") ? true : false;
                bill_1["commercial_discount"] = element.commercial_discount && (element.commercial_discount == "X" || element.commercial_discount == "x") ? true : false;
                var _obj = _this.select.products.filter(function (p) { return p.code === bill_1["product_code"]; })[0];
                if (!_obj && bill_1["product_code"] !== '') {
                    var _objPush = {
                        code: bill_1["product_code"],
                        name: bill_1["product_name"],
                        mhvth: bill_1["product_code"] + ': ' + bill_1["product_name"],
                    };
                    _this.select.products.push(_objPush);
                }
                _this.bill_products.insert(bill_1);
            }
        });
        setTimeout(function () {
            _this.dataGrid.instance.columnOption('unit_code', 'lookup', {
                dataSource: _this.select.unit_codes,
                displayExpr: 'name',
                valueExpr: 'code'
            });
        });
        this.dataGrid.instance.refresh();
        this._tinhGiaTri();
        _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
    };
    ReplaceProductGripComponent.prototype.getUnitCodeByUnitName = function (unitName) {
        if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(unitName) !== '') {
            if (this.select.unit_codes && this.select.unit_codes.length > 0) {
                var _obj = this.select.unit_codes.filter(function (p) { return p.name === unitName; })[0];
                if (_obj) {
                    return _obj.code;
                }
                else {
                    var code_1 = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._convertToViKdau(unitName);
                    var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === code_1; })[0];
                    if (oDuplicate)
                        code_1 = code_1 + _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].addtionalUnitCode();
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
    ReplaceProductGripComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    ReplaceProductGripComponent.prototype.changeCKTM = function (row) {
        this._tinhGiaTri();
    };
    ReplaceProductGripComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'LAY_MAU_BANG_KE') {
            this.layMauBangKe();
        }
        else if (e.itemData.id === 'NAP_DU_LIEU_BANG_KE') {
            this.napDuLieuTuBangKe();
        }
    };
    ReplaceProductGripComponent.prototype.onClickGuidReduce = function () {
        this.router.navigate([]).then(function (result) { window.open('https://ihoadon.vn/hddt/danh-muc-hang-hoa-dich-vu-duoc-giam-thue-gtgt-theo-nghi-quyet-so-406-nq-ubtvqh15.html', '_blank'); });
    };
    ReplaceProductGripComponent.prototype._changeND92 = function (e) {
        if (e.value)
            this.frmData.is_resolution_43 = !e.value;
        this._tinhGiaTri();
    };
    ReplaceProductGripComponent.prototype._changeNQ43 = function (e) {
        if (e.value) {
            this.frmData.is_exemption_decree = !e.value;
            if (this.frmData.sales_percentage == null && parseInt(this.configs.system_parameter.value_rate_percent) > 0) {
                this.frmData.sales_percentage = parseInt(this.configs.system_parameter.value_rate_percent);
            }
        }
        else {
            this.frmData.sales_percentage = null;
        }
        this._tinhGiaTri();
    };
    ReplaceProductGripComponent.prototype.onFieldDataChanged = function () {
        // this.formEvent.emit(this.frmData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxDataGridComponent"])
    ], ReplaceProductGripComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceProductGripComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceProductGripComponent.prototype, "bill_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceProductGripComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceProductGripComponent.prototype, "oldForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceProductGripComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceProductGripComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceProductGripComponent.prototype, "listTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReplaceProductGripComponent.prototype, "isHdGTGT", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceProductGripComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('gripChange'),
        __metadata("design:type", Object)
    ], ReplaceProductGripComponent.prototype, "gripChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('autoChange'),
        __metadata("design:type", Object)
    ], ReplaceProductGripComponent.prototype, "autoChange", void 0);
    ReplaceProductGripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-replace-product-grip',
            template: __webpack_require__(/*! ./replace-product-grip.component.html */ "./src/app/modules/handle-bills/components/replace/replace-product-grip/replace-product-grip.component.html"),
            styles: [__webpack_require__(/*! ./replace-product-grip.component.scss */ "./src/app/modules/handle-bills/components/replace/replace-product-grip/replace-product-grip.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_7__["BillService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_8__["ProductsService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"]])
    ], ReplaceProductGripComponent);
    return ReplaceProductGripComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/components/report-tax-bill-error/report-tax-bill-error.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/report-tax-bill-error/report-tax-bill-error.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-body\">\r\n  <div class=\"row search-section\">\r\n    <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n      <h4 class=\"modal-title pull-left\">THÔNG BÁO HÓA ĐƠN SAI SÓT VỚI CƠ QUAN THUẾ</h4>\r\n    </div>\r\n    <div class=\"col-md-4\" style=\"max-height: 70px\">\r\n      <div class=\"list-header row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"pull-right button-panel\">\r\n            <dx-button (click)=\"addRow()\" icon=\"fa fa-plus-circle\"\r\n                       text=\"Thêm dòng\" type=\"default\"></dx-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <dx-data-grid\r\n    id=\"invoiceHistoryGrid\"\r\n    [dataSource]=\"dataSource\"\r\n    [showBorders]=\"true\"\r\n    [wordWrapEnabled]=\"true\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\"\r\n    [showRowLines]=\"true\">\r\n    <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n    <!-- Xóa -->\r\n    <dxi-column cellTemplate=\"deleteColumn\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.delete }}\"\r\n    [width]=\"45\" [allowEditing]=\"false\" alignment=\"center\">\r\n    </dxi-column>\r\n    <!-- STT -->\r\n    <dxi-column [allowEditing]=\"false\" dataField=\"order\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.view_order }}\"\r\n    [width]=\"53\" alignment=\"center\"></dxi-column>\r\n    <!-- Loại áp dụng HĐ ĐT -->\r\n    <dxi-column [allowEditing]=\"false\" caption=\"Loại áp dụng HĐ ĐT\" dataField=\"type_apply_invoice\"\r\n              alignment=\"left\" minWidth=\"200\">\r\n      <dxo-lookup [dataSource]=\"typeInvoices\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n    </dxi-column>\r\n    <!-- Mẫu số-->\r\n    <dxi-column [allowEditing]=\"false\" dataField=\"template_code\"\r\n              caption=\"{{ 'GRID.INVOICE.template_code' | translate }}\"\r\n              [width]=\"113\" alignment=\"center\" >\r\n    </dxi-column>\r\n    <!-- Ký hiệu -->\r\n    <dxi-column [allowEditing]=\"false\" dataField=\"bill_series\"\r\n              caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n              [width]=\"113\" alignment=\"center\" >\r\n    </dxi-column>\r\n    <!-- Số hóa đơn -->\r\n    <dxi-column [allowEditing]=\"false\" cellTemplate=\"invoiceNumber\" dataField=\"bill_number\"\r\n              caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n              alignment=\"center\" >\r\n    </dxi-column>\r\n    <!-- Ngày hóa đơn -->\r\n    <dxi-column [allowEditing]=\"false\" dataField=\"bill_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n              format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" >\r\n    </dxi-column>\r\n    <!-- Mã CQT cấp -->\r\n     <dxi-column [allowEditing]=\"false\" dataField=\"tax_authority_code\" caption=\"Mã CQT cấp\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"left\" >\r\n    </dxi-column>\r\n    <!-- Tính chất thông báo -->\r\n    <dxi-column [allowEditing]=\"true\" dataField=\"notification_nature\" caption=\"Tính chất thông báo\"\r\n                 alignment=\"center\"\r\n                [editorOptions]=\"{showClearButton: true ,step: '0'}\">\r\n    <dxo-lookup [dataSource]=\"tinhchatTB\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n    </dxi-column>\r\n    <!-- Lý do -->\r\n    <dxi-column [allowEditing]=\"true\" dataField=\"reason\"\r\n                caption=\"Lý do\" alignment=\"left\" minWidth=\"150\">\r\n    </dxi-column>\r\n    <dxi-column [visible]=\"false\" dataField=\"is_invoice_with_code\" caption=\"Mã CQT cấp\"\r\n                minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"left\" >\r\n   </dxi-column>\r\n    <div *dxTemplate=\"let d of 'cktm'\">\r\n      <dx-check-box [(value)]=\"d.data.commercial_discount\"></dx-check-box>\r\n    </div>\r\n    <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n      <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n      <p>{{ d.data.template_code }}</p>\r\n      <p>{{ d.data.bill_series }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.bill_number }}<span\r\n        *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n      <div *dxTemplate=\"let data of 'DinhKemFile'\">\r\n          <a href=\"javascript:void(0)\" (click)=\"dinhKemFile($event)\">\r\n            <input type=\"file\" id=\"file-dinh-kem\" [attr.data-rowindex]=\"data.rowIndex\" accept=\".xlsx, .docx, .doc, .pdf, .xls, .xml\" (change)=\"onDinhKemFile($event)\" multiple=\"false\" style=\"display: none;\"/>\r\n             <p *ngIf=\"!isView || data.data.adjustment_type == '7'\">Chọn file</p>\r\n            <p *ngIf=\"data.data.invoice_files&&data.data.invoice_files.length\" (click)=\"downloadFile(data.data.invoice_files[0])\">{{data.data.invoice_files[0].file_name}}</p>\r\n          </a>\r\n        </div>\r\n      <!-- <div *dxTemplate=\"let d of 'downloadBB'\">\r\n          <a href=\"javascript:void(0)\" (click)=\"xuatMauBienBan(d.data)\"><img src=\"assets\\img\\icons\\TaiMauBangKe.png\"></a>\r\n        </div> -->\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-form [formData]=\"frmData\" validationGroup=\"formData\" style=\"margin-right: 162px;\">\r\n    <dxi-item itemType=\"group\" [colCount]=\"3\">\r\n      <dxi-item dataField=\"notification_type\" editorType=\"dxCheckBox\" [template]=\"'unitRisk'\">\r\n        <dxo-label [visible]=\"false\"></dxo-label>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"notification_number\" [editorOptions]=\"{readOnly: isReadOnly }\">\r\n        <dxo-label text=\"Số TB của CQT\"></dxo-label>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"notification_date\" [template]=\"'notifydate'\">\r\n        <dxo-label text=\"Ngày TB của CQT\"></dxo-label>\r\n      </dxi-item>\r\n    </dxi-item>\r\n    <div *dxTemplate = \"let d of 'notifydate'\">\r\n      <dx-date-box [(value)]=\"frmData.notification_date\" type=\"date\" [useMaskBehavior]=\"true\" [displayFormat]=\"'dd/MM/yyyy'\" [(readOnly)] = \"isReadOnly\">\r\n      </dx-date-box>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'unitRisk'\">\r\n      <dx-check-box [(value)]=\"frmData.notification_type\" text=\"HĐ CQT yêu cầu rà soát\" (onValueChanged)=\"changedUnitRisk($event)\"></dx-check-box>\r\n      <div class=\"toggle normal\" style=\"display: flex; align-items: center;margin-top: -17px;margin-left: 180px;\">\r\n        <img id=\"link3\" style=\"padding-bottom: 6px;cursor: pointer\" src=\"assets\\img\\icons\\Icon_Information.png\" (click)=\"onClickUnitType()\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n      </div>\r\n      <dx-popover\r\n      target=\"#link3\"\r\n              position=\"top\"\r\n              [width]=\"327\"\r\n              [(visible)]=\"isDisplayUnitRisk\">\r\n              <div *dxTemplate=\"let data of 'content'\">\r\n                  <p>Chọn vào đây với các hóa đơn mà Cơ quan Thuế gửi thông báo yêu cầu đơn vị rà soát và giải trình</p>\r\n                  <p>Yêu cầu nhập số thông báo và ngày thông báo của CQT</p>\r\n              </div>\r\n          </dx-popover>\r\n    </div>\r\n  </dx-form>\r\n  <dx-button text=\"Gửi thông báo cho CQT \" (click)=\"GuiThongBao()\" icon=\"{{_translate.ICONS.save }}\" type=\"default\" validationGroup=\"formData\">\r\n  </dx-button>\r\n  <dx-button text=\"Đóng\" icon=\"{{_translate.ICONS.come_back }}\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/report-tax-bill-error/report-tax-bill-error.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/report-tax-bill-error/report-tax-bill-error.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}::ng-deep .view-bill{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/handle-bills/components/report-tax-bill-error/report-tax-bill-error.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/handle-bills/components/report-tax-bill-error/report-tax-bill-error.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ReportTaxBillErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportTaxBillErrorComponent", function() { return ReportTaxBillErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _modules_handle_bills_shared_handlebill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/handle-bills/shared/handlebill.service */ "./src/app/modules/handle-bills/shared/handlebill.service.ts");
/* harmony import */ var _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/handle-invoice/shared */ "./src/app/modules/handle-invoice/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ReportTaxBillErrorComponent = /** @class */ (function () {
    function ReportTaxBillErrorComponent(bsModalRef, socketService, handleInvoiceService, authService, handlebillService, translate, router, vPreviewInvService, billService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.socketService = socketService;
        this.handleInvoiceService = handleInvoiceService;
        this.authService = authService;
        this.handlebillService = handlebillService;
        this.translate = translate;
        this.router = router;
        this.vPreviewInvService = vPreviewInvService;
        this.billService = billService;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.emailPattern = _config_pattern__WEBPACK_IMPORTED_MODULE_2__["pattern"].email;
        this.isDisplayUnitRisk = false;
        this.maskTemplateCode = "XX/XX/XXXX";
        this.rulesTemplateCode = { 'X': /[0-9]/ };
        this.isReadOnly = true;
        //{ 'h': /^([0]?[0-9]|[12][0-9]|[3][01])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})/ };
        this.tinhchatTB = [
            {
                name: "Hủy",
                code: "1"
            },
            {
                name: "Điều chỉnh",
                code: "2"
            },
            {
                name: "Thay thế",
                code: "3"
            },
            {
                name: "Giải trình",
                code: "4"
            }
        ];
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this.frmData = {
            notification_number: "",
            notification_type: false,
            notification_date: "",
            bills: []
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ReportTaxBillErrorComponent.prototype.ngOnInit = function () {
        this.typeInvoices = _core_index__WEBPACK_IMPORTED_MODULE_3__["VSelectBoxService"].typeEInvoice(this._translate);
        this.invoicesStore = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10___default.a({
            key: 'id',
            data: []
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default.a({
            store: this.invoicesStore
        });
        this.convertData();
        this.connectWebsocket();
    };
    ReportTaxBillErrorComponent.prototype.convertData = function () {
        var _this = this;
        if (this.data && this.data.length > 0) {
            var order_1 = 0;
            this.data.forEach(function (invoice) {
                var rowInvoice = new Object;
                rowInvoice["id"] = invoice.id;
                /* Loại áp dụng hóa đơn điện tử
                    - HĐ theo TT78 (Vào XML thẻ LADHDDT giá trị là 1)
                    - HĐ có mã xác thực theo NĐ 51/2010/NĐ-CP (Vào XML thẻ LADHDDT giá trị là 2)
                    - HĐĐT theo TT32 hoặc HĐ giấy theo TT39 (Vào XML thẻ LADHDDT giá trị là 3)
                    - HĐ đặt in theo NĐ 123/2020/NĐ-CP (Vào XML thẻ LADHDDT giá trị là 4)
               */
                rowInvoice["type_apply_invoice"] = 1;
                rowInvoice["template_code"] = invoice.template_code;
                rowInvoice["bill_series"] = invoice.bill_series;
                rowInvoice["bill_number"] = invoice.bill_number;
                rowInvoice["bill_date"] = invoice.bill_date;
                rowInvoice["tax_authority_code"] = invoice.tax_authority_code;
                rowInvoice["adjustment_type"] = invoice.adjustment_type;
                rowInvoice["is_invoice_with_code"] = invoice.is_invoice_with_code;
                rowInvoice["notification_nature"] = "";
                rowInvoice["reason"] = "";
                rowInvoice["bill_id"] = invoice.id;
                rowInvoice["order"] = ++order_1;
                rowInvoice["row_edit"] = false;
                rowInvoice["is_default_template"] = invoice.is_default_template;
                _this.invoicesStore.insert(rowInvoice);
            });
        }
        else {
            this.addRow();
        }
    };
    /* Thêm dòng hàng hóa */
    ReportTaxBillErrorComponent.prototype.addRow = function () {
        var len, order;
        this.invoicesStore.load().then(function (dataSource) {
            if (dataSource.length >= 1) {
                len = dataSource.length;
                order = dataSource[len - 1].order + 1;
            }
            else {
                order = 1;
            }
        });
        var data = this.add_invoice(order);
        this.invoicesStore.insert(data);
        if (this.dataGrid && this.dataGrid.instance)
            this.dataGrid.instance.refresh();
    };
    ReportTaxBillErrorComponent.prototype.add_invoice = function (order) {
        return {
            id: _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].makeid(),
            order: order,
            template_code: "",
            bill_series: "",
            bill_number: "",
            type_apply_bill: null,
            bill_date: "",
            tax_authority_code: "",
            notification_nature: "",
            adjustment_type: "",
            reason: "",
            is_invoice_with_code: null,
            row_edit: true,
            bill_id: null,
            is_default_template: false
        };
    };
    // Xóa hàng
    ReportTaxBillErrorComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm(_this._translate.CONFIRM.delete);
            if (check) {
                setTimeout(function () {
                    _this.invoicesStore.remove(item.id);
                    if (_this.dataGrid && _this.dataGrid.instance)
                        _this.dataGrid.instance.refresh();
                }, 100);
            }
        }, 200);
    };
    ReportTaxBillErrorComponent.prototype.createDocRelateNumber = function () {
        var number_report = "";
        if (this.countReport < 10)
            number_report = '0' + this.countReport + '/' + new Date().getFullYear() + '/BB-HBHĐ';
        else
            number_report = this.countReport + '/' + new Date().getFullYear() + '/BB-HBHĐ';
        this.countReport++;
        return number_report;
    };
    ReportTaxBillErrorComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                if (data.Data.Name === 'hoadon.xml') {
                    _this.goiApiXuatHoaDon(data.Data.Content);
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    _this.xuLiApiKhiXuat();
                }
            }
        });
    };
    ReportTaxBillErrorComponent.prototype._validGrid = function () {
        var _this = this;
        var invalid = true;
        this.invoicesStore.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                if (!item.notification_nature && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tính chất thông báo" + " " + _this._translate.VALIDATION.required, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'notification_nature'));
                    invalid = false;
                    return false;
                }
                else {
                    if (!item.row_edit) {
                        // Gốc và bị điều chỉnh
                        if (item.adjustment_type == "1" || item.adjustment_type == "4") {
                            if (item.notification_nature != "2" && item.notification_nature != "4") {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Chỉ được chọn tính chất thông báo là Giải trình và Điều chỉnh", 'error');
                                _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'notification_nature'));
                                invalid = false;
                                return false;
                            }
                        }
                        // Bị thay thế
                        if (item.adjustment_type == "2") {
                            if (item.notification_nature != "3" && item.notification_nature != "4") {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Chỉ được chọn tính chất thông báo là Giải trình và Thay thế", 'error');
                                _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'notification_nature'));
                                invalid = false;
                                return false;
                            }
                        }
                        // thay thế/điều chỉnh
                        if (item.adjustment_type == "3" || item.adjustment_type == "5") {
                            if (item.notification_nature != "4") {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Chỉ được chọn tính chất thông báo là Giải trình", 'error');
                                _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'notification_nature'));
                                invalid = false;
                                return false;
                            }
                        }
                        // xoá bỏ
                        if (item.adjustment_type == "7") {
                            if (item.notification_nature != "4" && item.notification_nature != "1") {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Chỉ được chọn tính chất thông báo là Giải trình và Huỷ", 'error');
                                _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'notification_nature'));
                                invalid = false;
                                return false;
                            }
                        }
                    }
                }
                if (!item.reason && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Lý do ' + _this._translate.VALIDATION.required, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'reason'));
                    invalid = false;
                    return false;
                }
                if (item.row_edit && invalid) {
                    if (!item.type_apply_invoice && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Loại áp dụng HĐ ĐT" + " " + _this._translate.VALIDATION.required, 'error');
                        _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'type_apply_invoice'));
                        invalid = false;
                        return false;
                    }
                    if (!item.template_code && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Mẫu số" + " " + _this._translate.VALIDATION.required, 'error');
                        _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'template_code'));
                        invalid = false;
                        return false;
                    }
                    else {
                        if (invalid) {
                            var validTemplateCode = false;
                            /* Thông tư 78 */
                            if (item.type_apply_invoice == 1) {
                                if (item.template_code != "1" && item.template_code != "2" && item.template_code != "3" && item.template_code != "4"
                                    && item.template_code != "5" && item.template_code != "6") {
                                    validTemplateCode = true;
                                }
                            }
                            else if (item.type_apply_invoice == 4) {
                                if (item.template_code.length == 11) {
                                    var char1 = item.template_code.substring(0, 6);
                                    var char2 = item.template_code.substring(7, 6);
                                    var char3 = item.template_code.substring(8, 7);
                                    var char4 = item.template_code.substring(8);
                                    if (char1 != "01GTKT" && char1 != "02GTTT" && char1 != "03XKNB" && char1 != "04HGDL" && char1 != "07KPTQ") {
                                        validTemplateCode = true;
                                    }
                                    else {
                                        if (isNaN(+Number(char2)))
                                            validTemplateCode = true;
                                        else {
                                            if (item.type_apply_invoice == 4 && Number(char2) == 0)
                                                validTemplateCode = true;
                                        }
                                    }
                                    if (char3.length != 1 || char3 != "/")
                                        validTemplateCode = true;
                                    if (char4.length != 3 || isNaN(+Number(char4)))
                                        validTemplateCode = true;
                                }
                                else
                                    validTemplateCode = true;
                            }
                            if (validTemplateCode) {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Mẫu số" + " " + "không đúng định dạng", 'error');
                                _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'template_code'));
                                invalid = false;
                                return false;
                            }
                        }
                    }
                    if (!item.bill_series && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Ký hiệu" + " " + _this._translate.VALIDATION.required, 'error');
                        _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'bill_series'));
                        invalid = false;
                        return false;
                    }
                    else {
                        if (invalid) {
                            var validInvoiceSeries = false;
                            /* Thông tư 78 */
                            if (item.type_apply_invoice == 1) {
                                if (item.bill_series.length == 6) {
                                    var char1 = item.bill_series.substring(1, 0);
                                    var char2 = item.bill_series.substring(3, 1);
                                    var char3 = item.bill_series.substring(4, 3);
                                    var char4 = item.bill_series.substring(5, 4);
                                    var char5 = item.bill_series.substring(6, 5);
                                    if (char1 != "C" && char1 != "K")
                                        validInvoiceSeries = true;
                                    if (char2.length != 2 || isNaN(+Number(char2)))
                                        validInvoiceSeries = true;
                                    if (char3 != "T" && char3 != "D" && char3 != "L" && char3 != "M"
                                        && char3 != "N" && char3 != "B" && char3 != "G" && char3 != "H")
                                        validInvoiceSeries = true;
                                    if (!isNaN(+Number(char4)) || !isNaN(+Number(char5)))
                                        validInvoiceSeries = true;
                                }
                                else {
                                    validInvoiceSeries = true;
                                }
                            }
                            else if (item.type_apply_invoice == 4) {
                                if (item.bill_series.length == 8) {
                                    var char1 = item.bill_series.substring(3, 2);
                                    var char2 = item.bill_series.substring(4, 3);
                                    var char3 = item.bill_series.substring(5, 4);
                                    var char4 = item.bill_series.substring(7, 5);
                                    var char5 = item.bill_series.substring(8, 7);
                                    var char6 = item.bill_series.substring(2, 0);
                                    if (!isNaN(+Number(char1)) || !isNaN(+Number(char2)))
                                        validInvoiceSeries = true;
                                    if (char3.length != 1 || char3 != "/")
                                        validInvoiceSeries = true;
                                    if (char4.length != 2 || isNaN(+Number(char4)))
                                        validInvoiceSeries = true;
                                    if (char5 != "P")
                                        validInvoiceSeries = true;
                                    if (isNaN(+Number(char6))) {
                                        validInvoiceSeries = true;
                                    }
                                    else {
                                        if (Number(char6) == 0 || Number(char6) > 65)
                                            validInvoiceSeries = true;
                                    }
                                }
                                else
                                    validInvoiceSeries = true;
                            }
                            if (validInvoiceSeries) {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Ký hiệu" + " " + "không đúng định dạng", 'error');
                                _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'bill_series'));
                                invalid = false;
                                return false;
                            }
                        }
                    }
                    if (!item.bill_number && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Số hóa đơn" + " " + _this._translate.VALIDATION.required, 'error');
                        _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'bill_number'));
                        invalid = false;
                        return false;
                    }
                    if (!item.bill_date && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Ngày hóa đơn" + " " + _this._translate.VALIDATION.required, 'error');
                        _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'bill_date'));
                        invalid = false;
                        return false;
                    }
                    /* Bắt mẫu số ký hiệu vs p/m */
                    if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.template_code) != "" && _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.bill_series) != "") {
                        var obj = _this.listTemplate.filter(function (p) { return p.template_code == item.template_code && p.bill_series == item.bill_series; })[0];
                        if (obj) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Mẫu số - ký hiệu đang có hóa đơn xuất ở hệ thống iHOADON. Vui lòng chọn hóa đơn ở phần mềm để gửi thông báo.", 'error');
                            _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'bill_date'));
                            invalid = false;
                            return false;
                        }
                    }
                }
            });
        });
        if (this.frmData.notification_type) {
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.notification_number) == "") {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Số TB của CQT không được để trống", 'error');
                invalid = false;
                return false;
            }
            if (!this.frmData.notification_date) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Ngày TB của CQT không được để trống", 'error');
                invalid = false;
                return false;
            }
        }
        return invalid;
    };
    ReportTaxBillErrorComponent.prototype.xoaBo = function () {
        var _this = this;
        // if (!InvoicesService.checkTimeExportInv(this.configs.system_parameter)) {
        //   Library.notify(String.Format(this._translate.NOTIFY.time_export_inv, moment(this.configs.system_parameter.time_start).format('HH:mm'), moment(this.configs.system_parameter.time_end).format('HH:mm')), 'error');
        //   return;
        // }
        setTimeout(function () {
            if (_this._validGrid()) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirmVA(_this._translate.CONFIRM.acction_function, _this._translate.NOTIFY.notify, function () {
                    _this.showPopup = true;
                    _this.invoicesStore.load().then(function (dataSource) {
                        if (dataSource.length > 0) {
                            _this.bills = dataSource.filter(function (p) { return p.adjustment_type != '7'; });
                            _this.totalInvoice = _this.bills.length;
                            _this.invoiceIndex = 0;
                            _this.tempKiFile = 0;
                            _this.xuatHoaDon();
                        }
                    });
                });
            }
        }, 300);
    };
    ReportTaxBillErrorComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            this.connectWebsocket();
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var ListSerialNumber = "DSCKS";
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_12__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
            }
            else
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
        }
    };
    ReportTaxBillErrorComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        var notification_type;
        if (this.frmData.notification_type)
            notification_type = 2;
        else
            notification_type = 1;
        var data = {
            notification_number: this.frmData.notification_number,
            notification_type: notification_type,
            notification_date: this.frmData.notification_date,
            bills: this.bills
        };
        var xmlInvoice = "";
        var sub = this.handlebillService.getXmlInvoiceWrong(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                xmlInvoice = rs.data.xml_file;
                _this.frmData.bills = rs.data.bills;
                var sign_date = moment__WEBPACK_IMPORTED_MODULE_12__(rs.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                if (xmlInvoice != "") {
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing))
                        _this.goiApiXuatHoaDon(xmlInvoice);
                    else
                        _this.xuLyKiFile(xmlInvoice, sign_date);
                }
            }
            else {
                _this.showPopup = false;
                _this.errorImport = true;
                //this.onImportHiding();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    ReportTaxBillErrorComponent.prototype.xuLyKiFile = function (xmlInvoice, invoiceDate) {
        var _this = this;
        var nodeSign = "//TBao/DSCKS/NNT";
        var ListSerialNumber = "DSCKS";
        if (this.infoDangKy && this.infoDangKy.registration_signature) {
            var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
            if (signatures && signatures.length > 0)
                ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
        }
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', nodeSign, invoiceDate, 'NotificationData', ListSerialNumber, true);
    };
    ReportTaxBillErrorComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        this.subXuatHoaDon = this.handlebillService.sendXmlInvoiceWrong({
            xml_file: xml_string,
            bills: this.frmData.bills
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Gửi thông báo hóa đơn sai sót thành công", 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _this.subXuatHoaDon.unsubscribe();
        });
    };
    ReportTaxBillErrorComponent.prototype.dinhKemFile = function (evt) {
        evt.srcElement.firstChild.click();
        // document.getElementById("file-dinh-kem").click();
        // console.log(e)
    };
    ReportTaxBillErrorComponent.prototype.choseFile = function (evt) {
        //evt.srcElement.firstChild.click();
        document.getElementById("file-input").click();
    };
    ReportTaxBillErrorComponent.prototype.fileChanged = function (e) {
        var _this = this;
        setTimeout(function () {
            //let rowIndex = e.target.dataset.rowindex;
            var fileAttachData = [];
            var fileReader = new FileReader();
            var file = e.target.files[0];
            var pattFile = /(\.xlsx|\.docx|\.doc|\.pdf|\.xls|\.xml)$/i;
            // console.log(file)
            if (pattFile.test(file.name)) {
                fileReader.readAsDataURL(file);
                fileReader.onload = function (e) {
                    var base64result = fileReader.result.toString().split(',')[1];
                    fileAttachData.unshift({
                        type: "DK",
                        file_name: file.name,
                        file_content: base64result,
                    });
                    // if (document.getElementById('list-file')) {
                    //   document.getElementById('list-file').scrollTop = 0;
                    // }
                    var _lstAttach = [];
                    _lstAttach = _this.dataSource[0]["invoice_files"];
                    if (_lstAttach == null) {
                        _lstAttach = [];
                    }
                    else {
                        _lstAttach.push(fileAttachData[0]);
                    }
                    _this.dataSource[0]["invoice_files"] = _lstAttach;
                    // this.dataSource[rowIndex]["report_cancel_invoice_file_name"] = file.name;
                    //this.dataSource.reload();
                };
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("File bạn chọn không đúng định dạng xls, xlsx, doc, docx, pdf, xml", "error");
            }
        }, 200);
    };
    ReportTaxBillErrorComponent.prototype.onDinhKemFile = function (e) {
        var _this = this;
        var rowIndex = e.target.dataset.rowindex;
        var fileAttachData = [];
        var fileReader = new FileReader();
        var file = e.target.files[0];
        var pattFile = /(\.xlsx|\.docx|\.doc|\.pdf|\.xls|\.xml)$/i;
        // console.log(file)
        if (pattFile.test(file.name)) {
            fileReader.readAsDataURL(file);
            fileReader.onload = function (e) {
                var test = fileReader.result;
                var base64result = fileReader.result.toString().split(',')[1];
                fileAttachData.unshift({
                    type: "DK",
                    file_name: file.name,
                    file_content: base64result,
                });
                if (document.getElementById('list-file')) {
                    document.getElementById('list-file').scrollTop = 0;
                }
                _this.invoicesStore.load().then(function (dataSource) {
                    dataSource.forEach(function (item, index) {
                        if (index == rowIndex)
                            item.invoice_files = fileAttachData;
                    });
                });
                // this.dataSource[rowIndex]["invoice_files"] = fileAttachData;
                // this.dataSource[rowIndex]["report_cancel_invoice_file_content"] = base64result;
                // this.dataSource[rowIndex]["report_cancel_invoice_file_name"] = file.name;
            };
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("File bạn chọn không đúng định dạng xls, xlsx, doc, docx, pdf, xml", "error");
        }
    };
    ReportTaxBillErrorComponent.prototype.removeFile = function (i) {
        var _lstAttach = [];
        _lstAttach = this.dataSource[0]["invoice_files"];
        _lstAttach.splice(i, 1);
    };
    ReportTaxBillErrorComponent.prototype.downloadFile = function (data) {
        var re = /(?:\.([^.]+))?$/;
        var fileType = re.exec(data.file_name)[1];
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(data.file_name, fileType, data.file_content);
    };
    ReportTaxBillErrorComponent.prototype.xuatMauBienBan = function (data) {
        if (this._validGrid()) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var inv = Object.assign({}, data);
            inv.adjustment_type = "1";
            inv.auto_value_price = inv.auto_value_price == null ? false : inv.auto_value_price;
            inv.invoice_files = [];
            inv.doc_relate_date = moment__WEBPACK_IMPORTED_MODULE_12__(data.doc_relate_date).format('YYYY-MM-DD');
            this.handlebillService.xuatMauBienBan(inv).subscribe(function (rs) {
                if (rs.status == 'success') {
                    var file = rs.data.invoice;
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            });
        }
    };
    ReportTaxBillErrorComponent.prototype.viewDetailInvoice = function (data) {
        if (data) {
            var ids = [];
            var is_default_tempplate = true;
            if (data) {
                ids.push(data.bill_id);
                if (!_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._attemptConvertBool(data.is_default_template))
                    is_default_tempplate = false;
            }
            if (is_default_tempplate) {
                var initialState = {
                    items: ids,
                    isXuatHD: false,
                    hinhthucxuat: '',
                    typeAction: _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].typeCode.xem_hoa_don_mtt_html
                };
                this.vPreviewInvService.xemMauPhanTrang(initialState);
            }
            else {
                if (this.configs.system_parameter.view_multi_invoice) {
                    var data_1 = this.billService.taodulieuXemMau(ids);
                    data_1['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
                    this.vPreviewInvService.xemMau(data_1);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].typeCode.xem_hoa_don_mtt,
                        cssClass: 'modal-xl view-bill'
                    };
                    this.vPreviewInvService.xemMauPhanTrang(initialState);
                }
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    ReportTaxBillErrorComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ReportTaxBillErrorComponent.prototype.onImportHiding = function (e) {
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
    ReportTaxBillErrorComponent.prototype.dong = function () {
        this.bsModalRef.hide();
        this.router.navigate(['/system/handle-bills/']);
    };
    // onEditorPreparing(e) {
    //   if (e.parentType === 'dataRow') {
    //     if (e.dataField != 'notification_nature' && e.dataField != 'reason') {
    //       if (!e.row.data.row_edit)
    //         e.editorOptions.disabled = true;
    //       else
    //         e.editorOptions.disabled = false;
    //     }
    //   }
    // }
    ReportTaxBillErrorComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            /* Bôi đỏ các trường bắt buộc */
            if (e.column.dataField == "notification_nature") {
                if (!e.data.notification_nature) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = "Tính chất thông báo" + " " + this._translate.VALIDATION.required;
                }
                else {
                    if (!e.data.row_edit) {
                        // Gốc và bị điều chỉnh
                        if (e.data.adjustment_type == "1" || e.data.adjustment_type == "4") {
                            if (e.data.notification_nature != "2" && e.data.notification_nature != "4") {
                                e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                                e.cellElement.title = "Chỉ được chọn tính chất thông báo là Giải trình và Điều chỉnh";
                            }
                        }
                        // Bị thay thế
                        if (e.data.adjustment_type == "2") {
                            if (e.data.notification_nature != "3" && e.data.notification_nature != "4") {
                                e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                                e.cellElement.title = "Chỉ được chọn tính chất thông báo là Giải trình và Thay thế";
                            }
                        }
                        // thay thế/điều chỉnh
                        if (e.data.adjustment_type == "3" || e.data.adjustment_type == "5") {
                            if (e.data.notification_nature != "4") {
                                e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                                e.cellElement.title = "Chỉ được chọn tính chất thông báo là Giải trình";
                            }
                        }
                        // xoá bỏ
                        if (e.data.adjustment_type == "7") {
                            if (e.data.notification_nature != "1" && e.data.notification_nature != "4") {
                                e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                                e.cellElement.title = "Chỉ được chọn tính chất thông báo là Giải trình và Huỷ";
                            }
                        }
                    }
                }
            }
            if (e.column.dataField == "reason") {
                if (!e.data.reason) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = "Lý do" + " " + this._translate.VALIDATION.required;
                }
            }
            /* Valid nhập tay */
            if (e.data.row_edit) {
                if (e.column.dataField == "type_apply_invoice") {
                    if (!e.data.type_apply_invoice) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = "Loại áp dụng HĐ ĐT" + " " + this._translate.VALIDATION.required;
                    }
                }
                if (e.column.dataField == "template_code") {
                    if (!e.data.template_code) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = "Mẫu số" + " " + this._translate.VALIDATION.required;
                    }
                    else {
                        var validTemplateCode = false;
                        if (e.data.type_apply_invoice == 1) {
                            if (e.data.template_code != "1" && e.data.template_code != "2" && e.data.template_code != "3" && e.data.template_code != "4"
                                && e.data.template_code != "5" && e.data.template_code != "6") {
                                validTemplateCode = true;
                            }
                        }
                        else if (e.data.type_apply_invoice == 4) {
                            if (e.data.template_code.length == 11) {
                                var char1 = e.data.template_code.substring(0, 6);
                                var char2 = e.data.template_code.substring(7, 6);
                                var char3 = e.data.template_code.substring(8, 7);
                                var char4 = e.data.template_code.substring(8);
                                if (char1 != "01GTKT" && char1 != "02GTTT" && char1 != "03XKNB" && char1 != "04HGDL" && char1 != "07KPTQ") {
                                    validTemplateCode = true;
                                }
                                else {
                                    if (isNaN(+Number(char2)))
                                        validTemplateCode = true;
                                    else {
                                        if (e.data.type_apply_invoice == 4 && Number(char2) == 0)
                                            validTemplateCode = true;
                                    }
                                }
                                if (char3.length != 1 || char3 != "/")
                                    validTemplateCode = true;
                                if (char4.length != 3 || isNaN(+Number(char4)))
                                    validTemplateCode = true;
                            }
                            else
                                validTemplateCode = true;
                        }
                        if (validTemplateCode) {
                            e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                            e.cellElement.title = "Mẫu số" + " " + "không đúng định dạng";
                        }
                    }
                }
                if (e.column.dataField == "bill_series") {
                    if (!e.data.bill_series) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = "Ký hiệu" + " " + this._translate.VALIDATION.required;
                    }
                    else {
                        var validInvoiceSeries = false;
                        /* Thông tư 78 */
                        if (e.data.type_apply_invoice == 1) {
                            if (e.data.bill_series.length == 6) {
                                var char1 = e.data.bill_series.substring(1, 0);
                                var char2 = e.data.bill_series.substring(3, 1);
                                var char3 = e.data.bill_series.substring(4, 3);
                                var char4 = e.data.bill_series.substring(5, 4);
                                var char5 = e.data.bill_series.substring(6, 5);
                                if (char1 != "C" && char1 != "K")
                                    validInvoiceSeries = true;
                                if (char2.length != 2 || isNaN(+Number(char2)))
                                    validInvoiceSeries = true;
                                if (char3 != "T" && char3 != "D" && char3 != "L" && char3 != "M"
                                    && char3 != "N" && char3 != "B" && char3 != "G" && char3 != "H")
                                    validInvoiceSeries = true;
                                if (!isNaN(+Number(char4)) || !isNaN(+Number(char5)))
                                    validInvoiceSeries = true;
                            }
                            else {
                                validInvoiceSeries = true;
                            }
                        }
                        else if (e.data.type_apply_invoice == 4) {
                            if (e.data.bill_series.length == 8) {
                                var char1 = e.data.bill_series.substring(3, 2);
                                var char2 = e.data.bill_series.substring(4, 3);
                                var char3 = e.data.bill_series.substring(5, 4);
                                var char4 = e.data.bill_series.substring(7, 5);
                                var char5 = e.data.bill_series.substring(8, 7);
                                var char6 = e.data.bill_series.substring(2, 0);
                                if (!isNaN(+Number(char1)) || !isNaN(+Number(char2)))
                                    validInvoiceSeries = true;
                                if (char3.length != 1 || char3 != "/")
                                    validInvoiceSeries = true;
                                if (char4.length != 2 || isNaN(+Number(char4)))
                                    validInvoiceSeries = true;
                                if (char5 != "P")
                                    validInvoiceSeries = true;
                                if (isNaN(+Number(char6))) {
                                    validInvoiceSeries = true;
                                }
                                else {
                                    if (Number(char6) == 0 || Number(char6) > 65)
                                        validInvoiceSeries = true;
                                }
                            }
                            else
                                validInvoiceSeries = true;
                        }
                        if (validInvoiceSeries) {
                            e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                            e.cellElement.title = "Ký hiệu" + " " + "không đúng định dạng";
                        }
                    }
                }
                if (e.column.dataField == "bill_number") {
                    if (!e.data.bill_number) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = "Số hóa đơn" + " " + this._translate.VALIDATION.required;
                    }
                }
                if (e.column.dataField == "bill_date") {
                    if (!e.data.bill_date) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = "Ngày hóa đơn" + " " + this._translate.VALIDATION.required;
                    }
                }
            }
        }
    };
    ReportTaxBillErrorComponent.prototype.GuiThongBao = function () {
        var _this = this;
        setTimeout(function () {
            if (_this._validGrid()) {
                _this.invoicesStore.load().then(function (dataSource) {
                    if (dataSource.length > 0) {
                        _this.bills = [];
                        dataSource.forEach(function (item) {
                            var object = new Object;
                            object["tax_authority_code"] = item.tax_authority_code;
                            object["template_code"] = item.template_code;
                            object["bill_series"] = item.bill_series;
                            object["bill_date"] = item.bill_date;
                            object["bill_number"] = item.bill_number;
                            object["reason"] = item.reason;
                            object["notification_nature"] = item.notification_nature;
                            object["type_apply_bill"] = item.type_apply_invoice;
                            object["bill_id"] = item.id;
                            _this.bills.push(object);
                        });
                        _this.xuatHoaDon();
                    }
                });
            }
        }, 300);
    };
    ReportTaxBillErrorComponent.prototype.onClickUnitType = function () {
        this.isDisplayUnitRisk = !this.isDisplayUnitRisk;
    };
    ReportTaxBillErrorComponent.prototype.changedUnitRisk = function (data) {
        this.isReadOnly = !data.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxDataGridComponent"])
    ], ReportTaxBillErrorComponent.prototype, "dataGrid", void 0);
    ReportTaxBillErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-tax-bill-error',
            template: __webpack_require__(/*! ./report-tax-bill-error.component.html */ "./src/app/modules/handle-bills/components/report-tax-bill-error/report-tax-bill-error.component.html"),
            styles: [__webpack_require__(/*! ./report-tax-bill-error.component.scss */ "./src/app/modules/handle-bills/components/report-tax-bill-error/report-tax-bill-error.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalRef"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_6__["HandleInvoiceService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _modules_handle_bills_shared_handlebill_service__WEBPACK_IMPORTED_MODULE_5__["HandlebillService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_8__["ViewInvoiceService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_4__["BillService"]])
    ], ReportTaxBillErrorComponent);
    return ReportTaxBillErrorComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/handle-bills-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/handle-bills/handle-bills-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: HandleBillsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleBillsRoutingModule", function() { return HandleBillsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/handle-bills/components/index/index.component.ts");
/* harmony import */ var _shared_replace_bill_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/replace-bill.resolver */ "./src/app/modules/handle-bills/shared/replace-bill.resolver.ts");
/* harmony import */ var _components_replace_replace_bill_replace_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/replace/replace-bill/replace-bill.component */ "./src/app/modules/handle-bills/components/replace/replace-bill/replace-bill.component.ts");
/* harmony import */ var _components_adjust_adjust_bill_adjust_bill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/adjust/adjust-bill/adjust-bill.component */ "./src/app/modules/handle-bills/components/adjust/adjust-bill/adjust-bill.component.ts");
/* harmony import */ var _shared_adjust_bill_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/adjust-bill.resolver */ "./src/app/modules/handle-bills/shared/adjust-bill.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]
    },
    {
        path: 'replace/:billId',
        component: _components_replace_replace_bill_replace_bill_component__WEBPACK_IMPORTED_MODULE_4__["ReplaceBillComponent"],
        resolve: { init: _shared_replace_bill_resolver__WEBPACK_IMPORTED_MODULE_3__["ReplaceBillResolver"] },
        data: {
            // type: '01GTKT',
            brec: 'create_invoice_instead',
            status: 'thaythemoi'
        }
    },
    {
        path: 'edit-replace/:billId',
        component: _components_replace_replace_bill_replace_bill_component__WEBPACK_IMPORTED_MODULE_4__["ReplaceBillComponent"],
        resolve: { init: _shared_replace_bill_resolver__WEBPACK_IMPORTED_MODULE_3__["ReplaceBillResolver"] },
        data: {
            status: 'chinhsua',
            brec: 'create_invoice_instead',
        }
    },
    {
        path: 'adjust/:billId',
        component: _components_adjust_adjust_bill_adjust_bill_component__WEBPACK_IMPORTED_MODULE_5__["AdjustBillComponent"],
        resolve: { init: _shared_adjust_bill_resolver__WEBPACK_IMPORTED_MODULE_6__["AdjustBillResolver"] },
        data: {
            brec: 'create_invoice_adjustment',
            status: 'thaythemoi'
        }
    },
    {
        path: 'edit-adjust/:billId',
        component: _components_adjust_adjust_bill_adjust_bill_component__WEBPACK_IMPORTED_MODULE_5__["AdjustBillComponent"],
        resolve: { init: _shared_adjust_bill_resolver__WEBPACK_IMPORTED_MODULE_6__["AdjustBillResolver"] },
        data: {
            brec: 'create_invoice_adjustment',
            status: 'chinhsua'
        }
    },
];
var HandleBillsRoutingModule = /** @class */ (function () {
    function HandleBillsRoutingModule() {
    }
    HandleBillsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HandleBillsRoutingModule);
    return HandleBillsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/handle-bills.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/handle-bills/handle-bills.module.ts ***!
  \*************************************************************/
/*! exports provided: HandleBillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleBillsModule", function() { return HandleBillsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _handle_bills_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-bills-routing.module */ "./src/app/modules/handle-bills/handle-bills-routing.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/handle-bills/components/index/index.component.ts");
/* harmony import */ var _components_bills_cancel_bills_cancel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bills-cancel/bills-cancel.component */ "./src/app/modules/handle-bills/components/bills-cancel/bills-cancel.component.ts");
/* harmony import */ var _components_report_tax_bill_error_report_tax_bill_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/report-tax-bill-error/report-tax-bill-error.component */ "./src/app/modules/handle-bills/components/report-tax-bill-error/report-tax-bill-error.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _components_replace_replace_bill_replace_bill_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/replace/replace-bill/replace-bill.component */ "./src/app/modules/handle-bills/components/replace/replace-bill/replace-bill.component.ts");
/* harmony import */ var _shared_replace_bill_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/replace-bill.resolver */ "./src/app/modules/handle-bills/shared/replace-bill.resolver.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _components_replace_replace_form_bill_replace_form_bill_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/replace/replace-form-bill/replace-form-bill.component */ "./src/app/modules/handle-bills/components/replace/replace-form-bill/replace-form-bill.component.ts");
/* harmony import */ var _components_replace_replace_product_grip_replace_product_grip_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/replace/replace-product-grip/replace-product-grip.component */ "./src/app/modules/handle-bills/components/replace/replace-product-grip/replace-product-grip.component.ts");
/* harmony import */ var _components_adjust_adjust_bill_adjust_bill_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/adjust/adjust-bill/adjust-bill.component */ "./src/app/modules/handle-bills/components/adjust/adjust-bill/adjust-bill.component.ts");
/* harmony import */ var _components_adjust_adjust_form_bill_adjust_form_bill_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/adjust/adjust-form-bill/adjust-form-bill.component */ "./src/app/modules/handle-bills/components/adjust/adjust-form-bill/adjust-form-bill.component.ts");
/* harmony import */ var _components_adjust_adjust_product_grip_adjust_product_grip_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/adjust/adjust-product-grip/adjust-product-grip.component */ "./src/app/modules/handle-bills/components/adjust/adjust-product-grip/adjust-product-grip.component.ts");
/* harmony import */ var _shared_adjust_bill_resolver__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/adjust-bill.resolver */ "./src/app/modules/handle-bills/shared/adjust-bill.resolver.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var HandleBillsModule = /** @class */ (function () {
    function HandleBillsModule() {
    }
    HandleBillsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _handle_bills_routing_module__WEBPACK_IMPORTED_MODULE_2__["HandleBillsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_library__WEBPACK_IMPORTED_MODULE_7__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_8__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxLookupModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxTooltipModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxPopoverModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_24__["VatSharedModule"]
            ],
            entryComponents: [
                _components_report_tax_bill_error_report_tax_bill_error_component__WEBPACK_IMPORTED_MODULE_5__["ReportTaxBillErrorComponent"],
                _components_bills_cancel_bills_cancel_component__WEBPACK_IMPORTED_MODULE_4__["BillsCancelComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_13__["ViewInvoiceMultipageComponent"],
                _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_27__["PreviewInvoiceComponent"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
                _components_bills_cancel_bills_cancel_component__WEBPACK_IMPORTED_MODULE_4__["BillsCancelComponent"],
                _components_report_tax_bill_error_report_tax_bill_error_component__WEBPACK_IMPORTED_MODULE_5__["ReportTaxBillErrorComponent"],
                _components_replace_replace_bill_replace_bill_component__WEBPACK_IMPORTED_MODULE_15__["ReplaceBillComponent"],
                _components_replace_replace_form_bill_replace_form_bill_component__WEBPACK_IMPORTED_MODULE_18__["ReplaceFormBillComponent"],
                _components_replace_replace_product_grip_replace_product_grip_component__WEBPACK_IMPORTED_MODULE_19__["ReplaceProductGripComponent"],
                _components_adjust_adjust_bill_adjust_bill_component__WEBPACK_IMPORTED_MODULE_20__["AdjustBillComponent"],
                _components_adjust_adjust_form_bill_adjust_form_bill_component__WEBPACK_IMPORTED_MODULE_21__["AdjustFormBillComponent"],
                _components_adjust_adjust_product_grip_adjust_product_grip_component__WEBPACK_IMPORTED_MODULE_22__["AdjustProductGripComponent"]
            ],
            providers: [
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_14__["VatService"],
                _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_17__["BillService"],
                _shared_replace_bill_resolver__WEBPACK_IMPORTED_MODULE_16__["ReplaceBillResolver"],
                _shared_adjust_bill_resolver__WEBPACK_IMPORTED_MODULE_23__["AdjustBillResolver"],
                _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_25__["ViewInvoiceService"],
                _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_26__["MyBsModalService"]
            ]
        })
    ], HandleBillsModule);
    return HandleBillsModule;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/shared/adjust-bill.resolver.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/handle-bills/shared/adjust-bill.resolver.ts ***!
  \*********************************************************************/
/*! exports provided: AdjustBillResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustBillResolver", function() { return AdjustBillResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdjustBillResolver = /** @class */ (function () {
    function AdjustBillResolver(billService, router) {
        this.billService = billService;
        this.router = router;
    }
    AdjustBillResolver.prototype.resolve = function (route, state) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var billId = route.paramMap.get('billId');
        var loaiHoaDon = route.data.type;
        return this.billService.showBillAdjustResolver(billId, loaiHoaDon, '').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            /**
             * rs[0]: danh mục
             * rs[1]: bill
             * rs[2]: template
             * rs[3]: products
             */
            if (rs[0].status == "success" && rs[1].status == "success" && rs[2].status == "success" && rs[3].status == "success") {
                var templates = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].convertTemplatesToInvoiceResolver(rs[2]);
                return [
                    templates,
                    rs[0].data,
                    rs[1].data.bill,
                    rs[3].data.products,
                ];
            }
            else {
                if (loaiHoaDon == "01GTKT")
                    _this.router.navigate(['/system/bill-invoice']);
                else
                    _this.router.navigate(['/system/bill-sale-invoice']);
                return null;
            }
        }));
    };
    AdjustBillResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_4__["BillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdjustBillResolver);
    return AdjustBillResolver;
}());



/***/ }),

/***/ "./src/app/modules/handle-bills/shared/replace-bill.resolver.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/handle-bills/shared/replace-bill.resolver.ts ***!
  \**********************************************************************/
/*! exports provided: ReplaceBillResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceBillResolver", function() { return ReplaceBillResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReplaceBillResolver = /** @class */ (function () {
    function ReplaceBillResolver(billService) {
        this.billService = billService;
    }
    ReplaceBillResolver.prototype.resolve = function (route, state) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var billId = route.paramMap.get('billId');
        return this.billService.showBillReplaceResolverTT78(billId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (rs) {
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
            if (rs[0].status == "success" && rs[1].status == "success" && rs[2].status == "success" && rs[3].status == "success") {
                var templates = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].convertTemplatesToInvoiceResolver(rs[0]);
                return [
                    templates,
                    rs[1].data,
                    rs[2].data.products,
                    rs[3].data.configs,
                    rs[4].data.bill,
                ];
            }
            else {
                // chưa xử lý
                // if (loaiHoaDon == "01GTKT")
                //   this.router.navigate(['/system/vat-invoice']);
                // else
                //   this.router.navigate(['/system/sale-invoice']);
                return null;
            }
        }));
    };
    ReplaceBillResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_3__["BillService"]])
    ], ReplaceBillResolver);
    return ReplaceBillResolver;
}());



/***/ })

}]);
//# sourceMappingURL=handle-bills-handle-bills-module.js.map