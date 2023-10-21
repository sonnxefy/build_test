(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-receipt-payment-receipt-module"],{

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

/***/ "./src/app/modules/payment-receipt/components/choose-hdck/choose-hdck.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/choose-hdck/choose-hdck.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">DANH SÁCH HÓA ĐƠN CHỜ KÝ</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid \r\n    id=\"gridContainer\"\r\n    [dataSource]=\"invoiceList\"\r\n    [showRowLines]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [(selectedRowKeys)]=\"selectedRows\"\r\n    [columnMinWidth]=\"50\"\r\n    [columnResizingMode]=\"true\"\r\n    [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\">\r\n\r\n    <dxo-selection selectAllMode=\"page\" mode=\"single\"></dxo-selection>\r\n\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxi-column dataField=\"invoice_number\" caption=\"Số hóa đơn\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"invoice_date\" caption=\"Ngày HĐ\" [width]=\"110\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"buyer_tax_code\" caption=\"Mã số thuế\" [width]=\"140\" alignment=\"left\"></dxi-column>\r\n    <dxi-column cellTemplate=\"customerName\" caption=\"Tên đơn vị\" alignment=\"left\"></dxi-column>\r\n\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p>{{ d.data.customer_name || d.data.buyer_name || 'Hóa đơn chờ ký' }}</p>\r\n    </div>\r\n    \r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <!-- <dxo-paging [enabled]=\"false\"></dxo-paging> -->\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button text=\"Chọn\" icon=\"assets\\img\\icons\\Ghi.png\" type=\"default\" (click)=\"choose()\" [disabled]=\"!(selectedRows.length == 1)\">\r\n  </dx-button>\r\n  <dx-button text=\"Quay lại\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n  </dx-button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/choose-hdck/choose-hdck.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/choose-hdck/choose-hdck.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/choose-hdck/choose-hdck.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/choose-hdck/choose-hdck.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ChooseHdckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseHdckComponent", function() { return ChooseHdckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChooseHdckComponent = /** @class */ (function () {
    function ChooseHdckComponent(bsModalRef, vatService) {
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.selectedRows = [];
    }
    ChooseHdckComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.invoiceNumberOrigin);
        // console.log(this.templateCode);
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        this.vatService.layCacHoaDonChoKy(this.invoiceNumberOrigin, this.invoiceReleaseId).subscribe(function (rs) {
            _this.invoiceList = rs.data.invoices;
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
        });
    };
    ChooseHdckComponent.prototype.choose = function () {
        this.onSave(this.selectedRows[0]);
        this.bsModalRef.hide();
    };
    ChooseHdckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choose-hdck',
            template: __webpack_require__(/*! ./choose-hdck.component.html */ "./src/app/modules/payment-receipt/components/choose-hdck/choose-hdck.component.html"),
            styles: [__webpack_require__(/*! ./choose-hdck.component.scss */ "./src/app/modules/payment-receipt/components/choose-hdck/choose-hdck.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"]])
    ], ChooseHdckComponent);
    return ChooseHdckComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/components/form-invoice/form-invoice.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/form-invoice/form-invoice.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row invoice-form\">\r\n  <div class=\"col-md-8\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <!-- mẫu biên lai -->\r\n        <dxi-item dataField=\"template_id\" editorType=\"dxSelectBox\" visibleIndex=\"1\"\r\n          [editorOptions]=\"{items: select.templatesTT78, onValueChanged: onChangeTem, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.receipt_template }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{ _translate.CONTROLL.LABEL.receipt_template }} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <!-- Mã số thuế, mã khách hàng -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" [visible]=\"isShowHideFields('tax_code_and_customer_code')\"\r\n          visibleIndex=\"2\">\r\n          <dxi-item [template]=\"'templateTaxCode'\" [cssClass]=\"'max_left'\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.tax_code}}\">\r\n            </dxo-label>\r\n          </dxi-item>\r\n          <dxi-item [template]=\"'templateCustomerCode'\" [cssClass]=\"'max_right'\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_code}}\">\r\n            </dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Tên đơn vị nộp tiền -->\r\n        <dxi-item visibleIndex=\"3\" [visible]=\"isShowHideFields('customer_name')\" dataField=\"customer_name\"\r\n          [editorOptions]=\"{  disabled: disableTemplateInput()}\" [colSpan]=\"2\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.name_of_payer }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item visibleIndex=\"4\" itemType=\"group\" [colCount]=\"2\"\r\n          [visible]=\"isShowHideFields('payer_name_and_payer_phone')\">\r\n          <!-- Họ tên người nộp tiền -->\r\n          <dxi-item dataField=\"payer_name\" [cssClass]=\"'max_left'\" [editorOptions]=\"{  disabled: disableTemplateInput()}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payers_name }}\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- số điện thoại -->\r\n          <dxi-item dataField=\"payer_phone\" [cssClass]=\"'max_right'\" [editorOptions]=\"{  disabled: disableTemplateInput()}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.phone }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Địa chỉ -->\r\n        <dxi-item visibleIndex=\"5\" dataField=\"payer_address\" [visible]=\"isShowHideFields('payer_address')\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.address }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- email -->\r\n        <dxi-item visibleIndex=\"6\" itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item [label]=\"{text: 'Email'}\">\r\n            <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n              <div\r\n                class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n                <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                  <app-tag-input-email [variableName]=\"this.emails\" (numberGenerated)=\"renderDataEmail($event)\">\r\n                  </app-tag-input-email>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Loại phí, lệ phí -->\r\n        <dxi-item visibleIndex=\"7\" [template]=\"'templateFeeName'\" [visible]=\"isShowHideFields('fee_name')\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.fee_type }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{ _translate.CONTROLL.LABEL.fee_type }} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <!-- Số tiền -->\r\n        <dxi-item [cssClass]=\"'so-tien'\" editorType=\"dxNumberBox\" dataField=\"total_payment\"\r\n          [editorOptions]=\"{readOnly: readOnlyFields(),disabled: disableTemplateInput(), format:'#,###', onValueChanged: changeTotalPayment}\"\r\n          [visible]=\"isShowHideFields('total_payment')\" visibleIndex=\"8\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.amount_of_money  }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{ _translate.CONTROLL.LABEL.amount_of_money }} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <!-- Số tiền bằng chữ -->\r\n        <dxi-item dataField=\"total_payment_in_word\" [editorOptions]=\"{ disabled: disableTemplateInput()}\"\r\n          [visible]=\"isShowHideFields('total_payment_in_word')\" visibleIndex=\"9\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.total_payment_in_word }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{ _translate.CONTROLL.LABEL.total_payment_in_word }} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <!-- Số lượng biên lai và tổng tiền -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" [visible]=\"isShowHideFields('quantity_and_total')\" visibleIndex=\"10\">\r\n          <dxi-item [template]=\"'templateSoLuongBienLai'\" [editorOptions]=\"{disabled: disableTemplateInput()}\">\r\n            <dxo-label text=\"Số lượng biên lai\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n              message=\"{{ 'Số lượng biên lai' }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item [template]=\"'templateTongTien'\" cssClass='tong-tien-S' style=\"padding-top: 5px;\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE_DETAILS.total_money }}\">\r\n            </dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <div *dxTemplate=\"let d of 'templateSoLuongBienLai'\" class=\"so-luong\">\r\n        <dx-number-box [value]=\"quantity\" (onValueChanged)=\"onChangeSoLuongBienLai($event)\" format='#,###'>\r\n        </dx-number-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'templateTongTien'\" class=\"tong-tien\">\r\n        <div style=\"font-weight: bold;color: red; padding-left: 6px;\">{{tong_tien_bien_lai | number }}</div>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'templateFeeName'\">\r\n        <dx-autocomplete valueExpr=\"name\" placeholder=\"Nhập tên loại phí, lệ phí...\" [dataSource]=\"feeArray\"\r\n          [(value)]=\"frmData.fee_name\" [readOnly]=\"readOnlyFields()\" (onItemClick)=\"feeChoose($event)\">\r\n          <div *dxTemplate=\"let item of 'item'\">\r\n            <span>{{ item.name }}</span>\r\n          </div>\r\n        </dx-autocomplete>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'templateTaxCode'\" style=\"display: grid;grid-template-columns: 1fr auto;width: 100%;\">\r\n        <dx-autocomplete valueExpr=\"tax_code\" placeholder=\"Tìm kiếm...\" [dataSource]=\"tax_codes\"\r\n          [(value)]=\"frmData.payer_tax_code\" [readOnly]=\"readOnlyCacTruongConLai\" (onItemClick)=\"taxCodeChoose($event)\"\r\n          (onFocusOut)=\"updateTaxcodeInfo($event)\" (onValueChanged)=\"changeTaxCode($event)\">\r\n          <div *dxTemplate=\"let item of 'item'\">\r\n            <span>{{item.tax_code}}: {{ item.name }}</span>\r\n          </div>\r\n        </dx-autocomplete>\r\n        <button (click)=\"searchTaxCode()\" type=\"button\" class=\"button-tax-code\">\r\n          <i class=\"{{_translate.ICONS.search}}\" style=\"font-size: 22px;\"></i>\r\n        </button>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'templateCustomerCode'\"\r\n        style=\"display: grid;grid-template-columns: 1fr auto;width: 100%;\">\r\n        <dx-autocomplete valueExpr=\"code\" placeholder=\"Tìm kiếm...\" [dataSource]=\"customer_codes\"\r\n          [(value)]=\"frmData.customer_code\" [readOnly]=\"readOnlyCacTruongConLai\"\r\n          (onItemClick)=\"customerCodeChoose($event)\" (onFocusOut)=\"updateCustomerInfo($event)\">\r\n          <div *dxTemplate=\"let item of 'item'\">\r\n            <span>{{item.code}}: {{ item.name }}</span>\r\n          </div>\r\n        </dx-autocomplete>\r\n        <button (click)=\"editTaxCode()\" type=\"button\" class=\"button-tax-code\">\r\n          <i class=\"dx-icon fa fa-plus-circle icon-size\"></i>\r\n        </button>\r\n      </div>\r\n    </dx-form>\r\n    <app-form-extend [disableForm]=\"ttDaXuatHoaDon\" [formData]=\"frmData\" [customerTempt]=\"customerTempt\"\r\n      [formItems]=\"formItems\" [typeOptions]=\"'receipt_options'\"></app-form-extend>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <!-- ngày biên lai -->\r\n        <dxi-item dataField=\"receipt_date\" editorType=\"dxDateBox\"\r\n          [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', disabled: disableInvoiceDate , onValueChanged: changeDateTime}\">\r\n          <dxo-label text=\"{{ _translate.GRID.INVOICE.receipt_date }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Số biên lai -->\r\n        <dxi-item cssClass=\"so-bien-lai\" dataField=\"receipt_number\" [editorOptions]=\"{ readOnly: true, format:'#,###'}\"\r\n          editorType=\"dxNumberBox\">\r\n          <dxo-label text=\"{{ _translate.GRID.INVOICE.receipt_number }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Hình thức thanh toán -->\r\n        <dxi-item dataField=\"payment_method_code\" editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.payment_method_names,onValueChanged: paymentMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payment_method }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Loại tiền -->\r\n        <dxi-item dataField=\"currency_code\" editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.currency_codes, onValueChanged: currencyCodeChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.currency_code }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Tỷ giá -->\r\n        <dxi-item dataField=\"currency_rate\" editorType=\"dxNumberBox\"\r\n          [editorOptions]=\"{disabled: frmData.currency_code == 'VND',onValueChanged: currencyRateChange, format: '#,###'}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.currency_rate }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <!-- <div class=\"col-md-12\" style=\"margin-top:7px;margin-bottom:7px\">\r\n    <dx-form *ngIf=\"!isTT78\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <ng-container *ngIf=\"configs.system_parameter.allow_keep_invoice_number && isShowButtonWaiteSign\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item name=\"btn-chossen-hdck\">\r\n              <dx-button id=\"btn-chossen-hdck\" (click)=\"showModalHdck()\" icon=\"assets\\img\\icons\\GiuSo.png\"\r\n                text=\"{{_translate.CONTROLL.BUTTON.select_inv_wait_sign}}\" type=\"default\"></dx-button>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </ng-container>\r\n\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div> -->\r\n</div>\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"Thông báo\" [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{_translate.CONFIRM.update_customer}}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"capNhatDmKhachHang()\" text=\"{{_translate.CONTROLL.LABEL.update}}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{_translate.CONTROLL.BUTTON.cancel}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/form-invoice/form-invoice.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/form-invoice/form-invoice.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .vat.invoice-number-create-invoice input{color:red;font-weight:bold}.request-card-hidden{display:none}.icon-size{font-size:21px;padding:2px 0}.button-tax-code{background:#337ab7;color:#fff;border-color:transparent;border:none}.button-tax-code:focus{outline:none}::ng-deep .vat.invoice-note input{color:#0070C0;font-weight:bold}::ng-deep .vat.layout_input span.dx-field-item-label-content{width:141px !important}::ng-deep .layout_input_left span.dx-field-item-label-content{width:144px !important}::ng-deep .custom-tempt .dx-texteditor-container .dx-texteditor-input-container .dx-texteditor-input{padding:0px 9px}::ng-deep .customer-tempt .dx-layout-manager .dx-label-h-align .dx-field-item-label .dx-field-item-label-content{min-width:171px !important}#advBtn{margin-top:0;width:5%}:host ::ng-deep .so-luong .dx-texteditor-input{padding:0px 9px 0px;text-align:right}:host ::ng-deep .so-tien .dx-texteditor-input{text-align:right}:host ::ng-deep .tong-tien .dx-box-item-content{padding-top:5px}:host ::ng-deep .so-bien-lai .dx-texteditor-input{font-weight:bold;color:red}.form-container{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[2];grid-template-columns:repeat(2, 1fr);grid-auto-rows:minmax(50px, auto);align-items:start;gap:20px}.tong-tien-S{padding-top:5px}\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/form-invoice/form-invoice.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/form-invoice/form-invoice.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FormInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInvoiceComponent", function() { return FormInvoiceComponent; });
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
/* harmony import */ var _choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../choose-hdck/choose-hdck.component */ "./src/app/modules/payment-receipt/components/choose-hdck/choose-hdck.component.ts");
/* harmony import */ var _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/components/form-extend/form-extend.component */ "./src/app/shared/components/form-extend/form-extend.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_18__);
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



















var FormInvoiceComponent = /** @class */ (function () {
    function FormInvoiceComponent(authService, route, modalService, vatService, translate, customersService, http, listService) {
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
        this.inSanMotPhi = false;
        this.inSanNhieuPhi = false;
        this.inSan = false;
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onInvoiceCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTT78TypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeGridProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeSLBienLai = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = {};
        this.pattern = _config_index__WEBPACK_IMPORTED_MODULE_8__["pattern"];
        this.tax_codes = [];
        this.customer_codes = [];
        this.showTraLai = false;
        this.disableInvoiceDate = this.authService.isAllowEditInvoiceDate();
        this.htXuatOptions = [];
        this.showPopup = false;
        this.itemTest = [
            { name: "Mẫu không in sẵn mệnh giá 1 loại phí", value: 1 },
            { name: "Mẫu không in sẵn mệnh giá nhiều loại phí", value: 2 },
            { name: "Mẫu in sẵn mệnh giá", value: 3 },
        ];
        this.mang_khong_in_san_mot_phi = [];
        this.mang_khong_in_san_nhieu_phi = [];
        this.mang_in_san_mot_phi = [];
        this.mang_in_san_nhieu_phi = [];
        this.customerCurent = {};
        this.emails = [];
        this.configs = {};
        this.arrEmail = [];
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
        this.feeArray = [];
        this.quantity = null;
        this.updateCustomerInfo = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.code) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.customer_code)) {
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
                            if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.tax_code) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.payer_tax_code)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        // sự kiện
        this.taxCodeKeyUp = function (e) {
            var str = _this.frmData.buyer_tax_code;
            var len = str.length;
            if (len >= 3) {
                _this.vatService.searchMST(str).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        var arr_1 = [];
                        rs.data.customers.forEach(function (item) {
                            arr_1.push(item);
                        });
                        _this.tax_codes = arr_1;
                    }
                });
            }
        };
        this.customerChanged = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.name) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.customer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.contact_person_name) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.payer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.contact_mobile) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.payer_phone)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.business_address) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.payer_address)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.email) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.payer_email)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this.customer_object_codeChange = function (e) {
            _this.setDisabledByCustomer_object_code(e.value);
        };
        this.onChangeTem = function (e) {
            _this.getTemplate(e.value, true, e.previousValue);
        };
        this.currencyCodeChange = function (e) {
            if (_this.frmData.currency_code === 'VND') {
                _this.frmData.currency_rate = null;
            }
            _this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].tienBangChu(_this.frmData.total_payment, _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien), _this.frmData.currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        this.currencyRateChange = function (e) {
        };
        this.exportPlaceChange = function (e) {
            var _obj = _this.select.export_places.filter(function (p) { return p.code === e.value; })[0];
            if (_obj) {
                _this.frmData.export_address = _obj.dia_chi;
                _this.frmData.export_place_name = _obj.name;
            }
        };
        this.bankAccountSellerChange = function (e) {
            var _obj = _this.select.list_bank_account_seller.filter(function (p) { return p.code === e.value; })[0];
            if (_obj) {
                _this.frmData.seller_bank_account_name = _obj.name;
                // this.frmData.export_place_name = _obj.name;
            }
            else {
                _this.frmData.seller_bank_account_name = '';
            }
        };
        this.paymentMethodChange = function (e) {
            var _obj = _this.select.payment_method_names.filter(function (p) { return p.code === e.value; })[0];
            if (_obj) {
                _this.frmData.payment_method_name = _obj.name;
            }
        };
        this.changeDateTime = function (e) {
            _this.changeTemplateInvoice(e.value);
        };
        this.changeTotalPayment = function (e) {
            var currency_code = _this.frmData.currency_code;
            if (_this.configs.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            _this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].tienBangChu(e.value, 0, currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    FormInvoiceComponent.prototype.ngAfterViewInit = function () {
    };
    FormInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadDataDefault();
        this.routeSub = this.route.data.subscribe(function (data) {
            _this.configs = _this.authService.getConfigs();
            // put data DM for select
            var danh_muc = _this.authService.getDMLocal();
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            _this.select.currency_codes = danh_muc.DM_LOAI_TIEN ? danh_muc.DM_LOAI_TIEN.data : null;
            if (_this.isTT78) {
                var temptTT78 = [];
                if (!_this.frmData.id) {
                    temptTT78 = data.init[1];
                }
                else {
                    temptTT78 = data.init[3];
                }
                _this.select.templatesTT78 = temptTT78;
                if (_this.frmData.id)
                    _this.changeTemplateInvoice(_this.frmData.receipt_date);
            }
        });
        this.select.customer_object_codes = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._customerObject(this._translate);
        this.select.adjustment_forms = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._adjustmentForms(this._translate);
        this.select.adjustment_objects = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._adjustmentObjects(this._translate);
        // tìm kiếm mã số thuế
        this.tax_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'tax_code');
            }
        });
        this.feeArray = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
            load: function (loadOptions) {
                return _this.vatService.getProductsForm(loadOptions.searchValue, 'code');
            }
        });
        // // tìm kiếm mã khách hàng
        this.customer_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'code');
            }
        });
        this.getTemplate(this.frmData.template_id, false, null);
        if (this.frmData.payer_email) {
            this.emails = [];
            var emailToString = this.frmData.payer_email;
            var a11 = emailToString.replace(/;/g, ',');
            this.emails = a11.split(',');
        }
    };
    FormInvoiceComponent.prototype.createForm = function () {
        this.form.instance.beginUpdate();
        this.form.instance.itemOption('business_addressa', { label: { text: 'Đia chỉaaa' }, editorOptions: { placeholder: 'Nhập địa chỉ' } });
        this.form.instance.endUpdate();
    };
    FormInvoiceComponent.prototype.editTaxCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var initialState, submodal;
            return __generator(this, function (_a) {
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
                        _this.frmData.payer_tax_code = customer.tax_code;
                        _this.frmData.payer_name = customer.contact_person_name;
                        _this.frmData.payer_address = customer.business_address;
                        _this.frmData.customer_code = customer.code;
                        _this.frmData.payer_phone = customer.contact_mobile;
                        if (customer.email) {
                            _this.frmData.payer_email = customer.email;
                            _this.emails = [];
                            var stringDataEmailGet = customer.email.split(';');
                            for (var i = 0; i < stringDataEmailGet.length; i++) {
                                _this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
                            }
                        }
                        else {
                            _this.frmData.payer_email = customer.email;
                            _this.emails = [];
                        }
                    }
                    submodal.unsubscribe();
                });
                return [2 /*return*/];
            });
        });
    };
    ////// Tạo form mở rộng
    FormInvoiceComponent.prototype.createCustomGroup = function () {
        return {
            itemType: 'group',
            colCount: '2',
            items: this.customForms
        };
    };
    /////// sự kiện thay đổi các trường mở rộng
    FormInvoiceComponent.prototype.changeItem = function (_dulieumorong) {
        var _this = this;
        _dulieumorong.forEach(function (item) {
            for (var key in _this.customerTempt) {
                if (item.code === key) {
                    item.value = _this.customerTempt[key];
                }
            }
            _this.frmData.receipt_options = _dulieumorong;
        });
    };
    FormInvoiceComponent.prototype.handleListRoleBranch = function (roleUser) {
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
    FormInvoiceComponent.prototype.disableTemplateInput = function () {
        if (this.frmData.invoice_number) {
            return true;
        }
        return false;
    };
    FormInvoiceComponent.prototype.readonlyAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = true;
        });
        this.readOnlyCacTruongConLai = true;
    };
    FormInvoiceComponent.prototype.removeReadonlyAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = false;
            // item.instance.resetValues();
        });
        this.readOnlyCacTruongConLai = false;
    };
    FormInvoiceComponent.prototype.setDisabledByCustomer_object_code = function (value) {
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
    FormInvoiceComponent.prototype.onFieldDataChanged = function () {
        this.formEvent.emit(this.frmData);
    };
    FormInvoiceComponent.prototype.getHtXuatValue = function () {
        return this.frmData.status;
    };
    FormInvoiceComponent.prototype.getFrmData = function () {
        return this.frmData;
    };
    FormInvoiceComponent.prototype.taxCodeChoose = function (e) {
        this.changeInfoUnit(e, true);
    };
    FormInvoiceComponent.prototype.changeInfoUnit = function (e, isMST) {
        var customer = e.itemData;
        this.frmData.customer_name = customer.name;
        this.frmData.payer_name = customer.contact_person_name;
        this.frmData.payer_address = customer.business_address;
        if (isMST)
            this.frmData.customer_code = customer.code;
        else
            this.frmData.payer_tax_code = customer.tax_code;
        this.frmData.payer_phone = customer.contact_mobile;
        if (customer.email) {
            this.frmData.payer_email = customer.email;
            this.emails = [];
            var stringDataEmailGet = customer.email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
        else {
            this.frmData.payer_email = customer.email;
            this.emails = [];
        }
        this.frmData.customer_id = customer.id;
        ////
        this.onFieldDataChanged();
    };
    FormInvoiceComponent.prototype.customerCodeChoose = function (e) {
        this.changeInfoUnit(e, false);
    };
    FormInvoiceComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    FormInvoiceComponent.prototype.capNhatDmKhachHang = function () {
        var _this = this;
        this.customerCurent.tax_code = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.payer_tax_code);
        this.customerCurent.name = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.customer_name);
        this.customerCurent.code = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.customer_code);
        this.customerCurent.contact_person_name = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.payer_name);
        this.customerCurent.contact_mobile = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.payer_phone);
        this.customerCurent.business_address = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.payer_address);
        this.customerCurent.email = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.payer_email);
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
    FormInvoiceComponent.prototype.huy = function () {
        this.showPopup = false;
    };
    FormInvoiceComponent.prototype.renderDataEmail = function ($event) {
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
            this.frmData.payer_email = emailToString.replace(/,/g, ';');
        }
        else {
            this.frmData.payer_email = null;
        }
        this.customerChanged(null);
        this.formEvent.emit(this.frmData);
    };
    /* Chọn hóa đơn chờ ký */
    FormInvoiceComponent.prototype.showModalHdck = function () {
        var _this = this;
        var release = this.select.invoice_releases.filter(function (p) { return p.template_id == _this.frmData.template_id; })[0];
        if (release) {
            var invoiceReleaseId = release.value;
            var initialState = {
                invoiceNumberOrigin: "0",
                invoiceReleaseId: invoiceReleaseId,
                onSave: function (data) {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.pkInvoiceSelectWaitSign) != "") {
                        _this.onInvoiceCurrent.emit(_this.pkInvoiceSelectWaitSign);
                        _this.frmData.status = _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].statusInv.ChoKy;
                    }
                    _this.frmData.id = data.id;
                    _this.frmData.invoice_date = data.invoice_date;
                    _this.frmData.invoice_number = data.invoice_number;
                }
            };
            this.bsModalHdckRef = this.modalService.show(_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_16__["ChooseHdckComponent"], {
                backdrop: 'static',
                keyboard: false,
                class: 'modal-lg full-modal',
                initialState: initialState
            });
        }
    };
    FormInvoiceComponent.prototype.changeTaxCode = function (e) {
        this.frmData.payer_tax_code = e.value;
    };
    FormInvoiceComponent.prototype.searchTaxCode = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        if (!this.frmData.payer_tax_code) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Vui lòng nhập mã số thuế!", "error");
        }
        else {
            this.vatService.getInfoCompany(this.frmData.payer_tax_code).subscribe(function (res) {
                if (res.status == "success") {
                    _this.dataTaxCode = res.data.customer;
                    _this.frmData.customer_name = _this.dataTaxCode.name;
                    _this.frmData.payer_address = _this.dataTaxCode.business_address;
                }
            });
        }
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
        }, 1000);
    };
    FormInvoiceComponent.prototype.rePaintForm = function (data) {
        var _this = this;
        // Nếu là mẫu html
        if (data.fields) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].resetObject(this.formItems);
            this.customForms = [];
            this.customerTempt = {};
            var _arrayGrid = data.fields.filter(function (x) { return x.type === '5'; });
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
            var _dulieumorong = lodash__WEBPACK_IMPORTED_MODULE_18__["cloneDeep"](data.fields).filter(function (x) { return x.type === '4'; });
            var receipt_options_1 = this.frmData.receipt_options;
            if (receipt_options_1.length > 0) {
                _dulieumorong = _dulieumorong.map(function (dl) {
                    var option = receipt_options_1.find(function (x) { return x.code == dl.code; });
                    if (option) {
                        dl.value = option.value;
                    }
                    return dl;
                });
            }
            this.frmData.receipt_options = _dulieumorong;
            if (_dulieumorong.length > 0) {
                this.formExtend.createForm(this.customForms, _dulieumorong);
            }
            _dulieumorong.forEach(function (value) {
                _this.customerTempt[value.code] = value.value;
            });
        }
        else {
            this.formItems = [];
            this.customerTempt = {};
            this.extentionGrid.ma_hang = false;
        }
    };
    FormInvoiceComponent.prototype.isShowHideFields = function (fieldName) {
        if (this._oTemplateTT78.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.BienLaiKhongInSanMenhGia) {
            if (!_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._attemptConvertBool(this._oTemplateTT78.is_multiple_fee))
                return this.mang_khong_in_san_mot_phi.includes(fieldName);
            else
                return this.mang_khong_in_san_nhieu_phi.includes(fieldName);
        }
        if (this._oTemplateTT78.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.BienLaiInSanMenhGia) {
            if (!_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._attemptConvertBool(this._oTemplateTT78.is_multiple_fee))
                return this.mang_in_san_mot_phi.includes(fieldName);
            else
                return this.mang_in_san_nhieu_phi.includes(fieldName);
        }
        return false;
    };
    FormInvoiceComponent.prototype.loadDataDefault = function () {
        this.mang_khong_in_san_mot_phi = ['tax_code_and_customer_code', 'customer_name', 'payer_name_and_payer_phone', 'payer_address', 'email', 'fee_name', 'total_payment', 'total_payment_in_word'];
        this.mang_khong_in_san_nhieu_phi = ['tax_code_and_customer_code', 'customer_name', 'payer_name_and_payer_phone', 'payer_address', 'email'];
        this.mang_in_san_mot_phi = ['email', 'fee_name', 'quantity_and_total', 'total_payment', 'total_payment_in_word'];
        this.mang_in_san_nhieu_phi = [];
        this.quantity = 1;
        this.changeSLBienLai.emit(1);
    };
    FormInvoiceComponent.prototype.getTemplate = function (value, ischangeTemplate, previousValue) {
        var _this = this;
        this.select.templatesTT78.forEach(function (item) {
            if (item.value === value) {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
                _this.frmData.template_id = item.value;
                _this.frmData.receipt_series = item.receipt_series;
                _this.frmData.template_code = item.template_code;
                _this.frmData.template_type = item.template_type;
                _this.frmData.receipt_type = parseInt(item.is_multiple_fee);
                _this.onTemplateTT78TypeChange.emit(item);
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        var value_1 = item[key];
                        _this._oTemplateTT78[key] = value_1;
                    }
                }
                _this.updateData(item, ischangeTemplate, previousValue);
                _this.rePaintForm(item);
                setTimeout(function () {
                    _this.form.instance.repaint();
                }, 0);
                setTimeout(function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
                }, 200);
            }
        });
    };
    /* Tính tiền */
    FormInvoiceComponent.prototype.onNumberChange = function () {
    };
    FormInvoiceComponent.prototype.readOnlyFields = function () {
        if (this.frmData.receipt_number)
            return true;
        else {
            if (this._oTemplateTT78.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.BienLaiInSanMenhGia)
                return true;
            return false;
        }
    };
    FormInvoiceComponent.prototype.updateData = function (data, ischangeTemplate, previousValue) {
        if (ischangeTemplate) {
            var oPreviousTemp = this.select.templatesTT78.filter(function (p) { return p.value == previousValue; })[0];
            if (oPreviousTemp) {
                if (oPreviousTemp.template_type == data.template_type) {
                    if (oPreviousTemp.is_multiple_fee == data.is_multiple_fee) {
                    }
                    else {
                        this.resetData(false);
                    }
                }
                else {
                    this.resetData(true);
                }
            }
            else {
                this.resetData(true);
            }
            if (this._oTemplateTT78.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.BienLaiInSanMenhGia) {
                this.frmData.fee_name = data.fee_name;
                this.frmData.total_payment = data.fee_money;
                this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].tienBangChu(this.frmData.total_payment, 0, this.frmData.currency_code, this.configs.system_parameter.display_read_money_english);
            }
        }
        this.tinhtongtien();
    };
    FormInvoiceComponent.prototype.resetData = function (isResetAll) {
        this.frmData.fee_name = null;
        this.frmData.total_payment = null;
        this.frmData.total_payment_in_word = null;
        this.changeGridProduct.emit();
        this.frmData.receipt_options = [];
        if (isResetAll) {
            this.frmData.payer_tax_code = null;
            this.frmData.payer_name = null;
            this.frmData.payer_address = null;
            this.frmData.payer_email = null;
            this.frmData.payer_phone = null;
            this.frmData.customer_code = null;
            this.frmData.customer_name = null;
            this.frmData.price = null;
            this.frmData.quantity = null;
            this.frmData.fee_code = null;
            this.frmData.payer_tax_code = null;
            this.frmData.customer_id = null;
        }
    };
    FormInvoiceComponent.prototype.feeChoose = function (e) {
        var oFee = e.itemData;
        this.frmData.fee_name = oFee.name;
        this.frmData.total_payment = oFee.price;
    };
    FormInvoiceComponent.prototype.tinhtongtien = function () {
        if (this.frmData.total_payment != null && this.quantity != null)
            this.tong_tien_bien_lai = this.frmData.total_payment * this.quantity;
        else
            this.tong_tien_bien_lai = null;
    };
    FormInvoiceComponent.prototype.onChangeSoLuongBienLai = function (e) {
        this.quantity = e.value;
        this.tinhtongtien();
        this.changeSLBienLai.emit(e.value);
    };
    FormInvoiceComponent.prototype.changeTemplateInvoice = function (strDate) {
        var _this = this;
        var year = "";
        if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(strDate) != "")
            year = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(strDate).substring(4, 2);
        else {
            var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
            year = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(invoiceDate).substring(4, 2);
        }
        var templates = this.select.templatesTT78;
        this.select.templatesTT78 = [];
        if (templates && templates.length > 0) {
            templates.forEach(function (item) {
                if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(item.name) != "")
                    item.name = item.name.replace(item.name.substring(16, 18), year);
                if (item.value === _this.frmData.template_id) {
                    _this.onTemplateTT78TypeChange.emit(item);
                }
                _this.select.templatesTT78.push(item);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"]),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "listDxForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"])
    ], FormInvoiceComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_17__["FormExtendComponent"]),
        __metadata("design:type", _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_17__["FormExtendComponent"])
    ], FormInvoiceComponent.prototype, "formExtend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormInvoiceComponent.prototype, "ttDaXuatHoaDon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "invoice_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "extentionGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormInvoiceComponent.prototype, "isShowButtonWaiteSign", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormInvoiceComponent.prototype, "isTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "pkInvoiceSelectWaitSign", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "infoDangKy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormInvoiceComponent.prototype, "inSanMotPhi", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormInvoiceComponent.prototype, "inSanNhieuPhi", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormInvoiceComponent.prototype, "inSan", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onFormChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "formEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onInvoiceCurrent'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "onInvoiceCurrent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTypeChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "onTemplateTypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTT78TypeChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "onTemplateTT78TypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('changeGridProduct'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "changeGridProduct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('changeSLBienLai'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "changeSLBienLai", void 0);
    FormInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vat-form-invoice',
            template: __webpack_require__(/*! ./form-invoice.component.html */ "./src/app/modules/payment-receipt/components/form-invoice/form-invoice.component.html"),
            styles: [__webpack_require__(/*! ./form-invoice.component.scss */ "./src/app/modules/payment-receipt/components/form-invoice/form-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_12__["CustomersService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_15__["ListsService"]])
    ], FormInvoiceComponent);
    return FormInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/components/import-invoices-dt/import-invoices-dt.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/import-invoices-dt/import-invoices-dt.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"import-invoices\">\r\n  <form class=\"form-import-invoices\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">{{ 'Import thông tin biên lai từ excel' }}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalImportRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"padding-bottom: 0px;\">\r\n      <div class=\"row inport-selector\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"select-file\">\r\n            <div class=\"field field-first\" style=\"width: 44%;\">\r\n              <div class=\"label\">{{ 'Mẫu biên lai' }}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [items]=\"templatesTT78\" displayExpr=\"name\" [(value)]=\"template_id\"\r\n                               valueExpr=\"value\" [disabled]=\"disabledInvoiceReleases\"\r\n                               (onValueChanged)=\"onInvoiceTemplate($event)\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"select-file\">\r\n            <div class=\"field\">\r\n              <div class=\"label\">{{ _translate.CONTROLL.LABEL.file_name }}</div>\r\n              <div class=\"value\">\r\n                <dx-text-box [readOnly]=\"true\" style=\"width: 92.5%!important; border-style: solid!important;\"\r\n                             [value]=\"fileName\"></dx-text-box>\r\n              </div>\r\n              <div class=\"btn-select-file\" style=\"margin-left: 30px;margin-top: 13px;\">\r\n                <a href=\"javascript:void(0)\" (click)=\"napDuLieuTuBangKe()\" class=\"support-link\">\r\n                  <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx, .xls\" (change)=\"onFileChanged($event)\"\r\n                         multiple=\"false\" style=\"display: none;\"/>\r\n                  <span>{{ _translate.CONTROLL.LABEL.select_file }}</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n      <div class=\"note-template-import\">\r\n        <p><span style=\"font-weight: 600; color: red; padding-right: 5px;\">{{ _translate.CONTROLL.LABEL.note1 }}</span> {{ 'Chức năng này Import danh sách biên lai từ file Excel. File này cần' }}</p>\r\n        <p style=\"margin-left: 48px;\">{{ _translate.CONTROLL.LABEL.correct_format_download_template }} <a\r\n          href=\"javascript:void(0)\" style=\"font-weight: 600\" (click)=\"getFileTemp()\">{{ _translate.CONTROLL.LABEL.click_here }}</a></p>\r\n      </div>\r\n      <div class=\"read-file\">\r\n        <dx-button (click)=\"chonDocFile()\" text=\"{{ _translate.CONTROLL.LABEL.read_file_excel }}\" type=\"default\" [disabled]=\"isDisReadFile\"></dx-button>\r\n      </div>\r\n      <!-- phần table hiển thị -->\r\n      <div class=\"row invoice-table\">\r\n        <div class=\"col-md-12\">\r\n          <dx-data-grid id=\"gridImportInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n                        [wordWrapEnabled]=\"true\" [columnAutoWidth]=\"false\" [allowColumnResizing]=\"true\"\r\n                        [columnMinWidth]=\"50\"\r\n                        [columnResizingMode]=\"true\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n                        (onEditorPreparing)=\"onEditorPreparing($event)\" (onContentReady)=\"onContentReady($event)\"\r\n                        (onCellPrepared)=\"onCellPrepared($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n                        (onRowUpdated)=\"onRowUpdated($event)\" (onRowRemoving)=\"onRowRemoving($event)\"\r\n                        (onKeyDown)=\"onGripKeyDown($event)\">\r\n            <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\" [allowDeleting]=\"true\" [useIcons]=\"true\">\r\n            </dxo-editing>\r\n            <dxo-sorting mode=\"false\"></dxo-sorting>\r\n            <dxo-column-fixing [enabled]=\"true\"></dxo-column-fixing>\r\n            <!-- Số chứng từ -->\r\n            <dxi-column dataField=\"number_of_vouchers\" [width]=\"130\"\r\n                        caption=\"{{'Số chứng từ'}}\" alignment=\"left\" [fixed]=\"true\"\r\n                        fixedPosition=\"left\">\r\n            </dxi-column>\r\n            <!-- Ngày biên lai -->\r\n            <dxi-column dataField=\"receipt_date\"\r\n                        caption=\"{{'Ngày biên lai'}}\" [width]=\"140\" dataType=\"date\"\r\n                        format=\"dd/MM/yyyy\"\r\n                        dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" [fixed]=\"true\"\r\n                        fixedPosition=\"left\">\r\n                      </dxi-column>\r\n            <!-- Mã số thuế -->\r\n            <dxi-column  dataField=\"payer_tax_code\" [width]=\"100\"\r\n                      caption=\"{{'Mã số thuế'}}\" alignment=\"left\" [fixed]=\"true\"\r\n                      fixedPosition=\"left\">\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"taxCodePattern\" message=\"{{ _translate.CONTROLL.LABEL.tax_code }} {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-column>\r\n            <!-- Tên đơn vị nộp tiền -->\r\n            <dxi-column  dataField=\"customer_name\" [width]=\"180\"\r\n                        caption=\"{{'Tên đơn vị nộp tiền'}}\" alignment=\"left\" [fixed]=\"true\"\r\n                        fixedPosition=\"left\">\r\n            </dxi-column>\r\n            <!-- Họ tên người nộp tiền -->\r\n            <dxi-column  dataField=\"payer_name\" [width]=\"120\"\r\n                        caption=\"{{'Họ tên người nộp tiền'}}\" alignment=\"left\" [fixed]=\"true\"\r\n                        fixedPosition=\"left\">\r\n            </dxi-column>\r\n            <!-- Địa chỉ -->\r\n            <dxi-column  dataField=\"payer_address\" [width]=\"200\"\r\n                        caption=\"{{'Địa chỉ'}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Email -->\r\n            <dxi-column dataField=\"payer_email\" [width]=\"150\"\r\n                        caption=\"{{'Email'}}\" alignment=\"left\">\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"emailPattern\" message=\"Email {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-column>\r\n            <!-- Điện thoại -->\r\n            <dxi-column  dataField=\"payer_phone\" [width]=\"100\"\r\n                        caption=\"{{'Điện thoại'}}\" alignment=\"left\">\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"phonePattern\" message=\"{{ _translate.CONTROLL.LABEL.phone_number }} {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-column>\r\n            <!-- Hình thức thanh toán -->\r\n            <dxi-column dataField=\"payment_method_code\"\r\n                        [width]=\"100\" caption=\"{{'Hình thức thanh toán'}}\" alignment=\"left\">\r\n              <dxo-lookup [dataSource]=\"select.payment_method_names\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n             <!-- Loại tiền -->\r\n             <dxi-column  dataField=\"currency_code\" [width]=\"77\"\r\n             caption=\"{{'Loại tiền'}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Tỷ giá trên hóa đơn -->\r\n            <dxi-column dataField=\"currency_rate\"\r\n               caption=\"{{'Tỷ giá'}}\" [width]=\"100\"\r\n               [editorOptions]=\"{ format: formatter.ty_gia }\" [format]=\"formatter.ty_gia\" dataType=\"number\"\r\n               alignment=\"right\">\r\n            </dxi-column>\r\n            <!-- Mã loại phí, lệ phí -->\r\n            <dxi-column  dataField=\"fee_code\"\r\n                        [editorOptions]=\"{showClearButton: true}\" caption=\"{{'Mã loại phí, lệ phí'}}\"\r\n                        alignment=\"center\" [width]=\"100\">\r\n              <dxo-lookup [dataSource]=\"select.products\" displayExpr=\"code\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Tên loại phí, lệ phí -->\r\n            <dxi-column  dataField=\"fee_name\" [width]=\"150\"\r\n                        caption=\"{{'Tên loại phí, lệ phí'}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Đơn vị tính -->\r\n            <dxi-column  dataField=\"unit_code\"\r\n                        [editorOptions]=\"lookupColumnOptions\" caption=\"{{'Đơn vị tính'}}\"\r\n                        [width]=\"100\"\r\n                        alignment=\"center\">\r\n                        <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Số lượng -->\r\n            <dxi-column dataField=\"quantity\"\r\n                        caption=\"{{'Số lượng'}}\" [width]=\"100\"\r\n                        [editorOptions]=\"{ format: formatter.so_luong }\" [format]=\"formatter.so_luong\" dataType=\"number\"\r\n                        alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Đơn giá -->\r\n            <dxi-column dataField=\"price\"\r\n                        caption=\"{{'Đơn giá'}}\" [width]=\"90\"\r\n                        [editorOptions]=\"{ format: formatter.don_gia }\"\r\n                        [format]=\"formatter.don_gia\" dataType=\"number\" alignment=\"right\">\r\n            </dxi-column>\r\n            <!-- Thành tiền -->\r\n            <dxi-column  dataField=\"amount\"\r\n                        caption=\"{{'Thành tiền'}}\" [width]=\"109\"\r\n                        [editorOptions]=\"{ format: formatter.thanh_tien }\" [format]=\"formatter.thanh_tien\"\r\n                        dataType=\"number\"\r\n                        alignment=\"right\">\r\n            </dxi-column>\r\n             <!-- Thành tiền -->\r\n            <dxi-column  dataField=\"amount_after_vat\"\r\n                        caption=\"{{'Tổng tiền'}}\" [width]=\"109\"\r\n                        [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\"\r\n                        dataType=\"number\"\r\n                        alignment=\"right\">\r\n            </dxi-column>\r\n            <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n              <a class=\"delete-row\" href=\"javascript:void(0)\" ><i\r\n                class=\"fa fa-times\"></i></a>\r\n            </div>\r\n            <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n            <dxo-paging [enabled]=\"true\"></dxo-paging>\r\n          </dx-data-grid>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7\">\r\n          <div class=\"note-footer\">\r\n            <p style=\"margin-left: 0;\"><span style=\"font-weight: 500; color: red;\">{{ _translate.GRID.GENERAL.note }}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.can_edit_delete_on_grid }}</p>\r\n            <p><span class=\"mau-vang\"> </span>{{ 'Số biên lai bị trùng với dữ liệu biên lai đã xuất' }}</p>\r\n            <p><span class=\"mau-do\"> </span>{{ _translate.CONTROLL.LABEL.red_incorrect_format }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <div class=\"note-footer\" style=\"text-align: right; margin-right: 50px;\">\r\n            <p style=\"padding: 8px;\"></p>\r\n            <p>{{ 'Số biên lai hợp lệ' }} <span style=\"color: seagreen; font-weight: 600\">{{totalInvoiceInvalid}}</span></p>\r\n            <p>{{'Số biên lai bị sai định dạng thông tin' }} <span\r\n              style=\"color: red; font-weight: 600\">{{totalErrorInvoice}}</span></p>\r\n            <p>{{ 'Số biên lai bị trùng' }} <span style=\"color: yellow; font-weight: 600\">{{totalDuplicateInvoice}}</span></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <div class=\"col-md-4\">\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\Xem.png\" text=\"{{ 'Xem trước biên lai' }}\"\r\n                   (click)=\"preview()\" type=\"default\"></dx-button>\r\n        <dx-button disableDoubleClick *ngIf=\"isXuatThanhCong\" icon=\"assets\\img\\icons\\Xem.png\" text=\"{{ 'Xem biên lai' }}\" (click)=\"xemHoaDon()\"\r\n                   type=\"default\"></dx-button>\r\n      </div>\r\n      <div class=\"col-md-8 btn-right\">\r\n        <dx-button text=\"{{ _translate.CONTROLL.BUTTON.come_back}}\" type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\" (click)=\"dong()\">\r\n        </dx-button>\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit\" text=\"Ghi tạm\" icon=\"assets\\img\\icons\\GhiTam.png\" (click)=\"submit('LUU')\"\r\n          type=\"default\"></dx-button>\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit && isAccessExportInv\" text=\"{{ 'Xuất biên lai'}}\"\r\n                   icon=\"assets\\img\\icons\\XuatHD.png\" (click)=\"submit('XUAT')\" type=\"default\"></dx-button>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.processing }}\"\r\n          [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n          [(visible)]=\"showPopupImport\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n\r\n  </div>\r\n</dx-popup>\r\n\r\n<dx-popup class=\"popup\" [width]=\"500\" [height]=\"160\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\" [dragEnabled]=\"false\"\r\n          [closeOnOutsideClick]=\"true\" [(visible)]=\"popupCachNapDuLieu\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p>{{ _translate.CONTROLL.LABEL.please_choose_load_data }} </p>\r\n    <div class=\"text-center\" style=\"margin-top: 25px\">\r\n      <dx-button (click)=\"thayThe($event)\" text=\"{{ _translate.CONTROLL.BUTTON.replace_all}}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"themTiep($event)\" text=\"{{ _translate.CONTROLL.BUTTON.add_more}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/import-invoices-dt/import-invoices-dt.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/import-invoices-dt/import-invoices-dt.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".import-invoices .dx-texteditor{border-radius:0;display:inline-block;margin-right:8px;height:28px;max-height:32px}.import-invoices .select-file .field>div{display:inline-block;vertical-align:middle}.import-invoices .select-file{width:100%;display:inline-block;margin:0}.import-invoices .select-file .field .label{width:90px;margin-right:10px;text-align:right;margin-top:7px}.import-invoices .select-file .field .value{width:35% !important;margin-top:10px}.import-invoices .select-file .field.field-first{display:inline-block}.import-invoices .select-file .field.field-first .value{width:calc(100% - 150px) !important}::ng-deep .import-invoices .select-file .field .dx-texteditor{width:100% !important}.support-link{top:-2px;position:relative;padding:5px 25px 7px 25px;background-color:#337ab7;border-color:#2d6da3;color:#fff;text-decoration:none}.support-link.mgr-15{margin-right:15px}.support-link img{margin-right:10px;margin-top:-2px}#auto-input{margin-right:75px}.note-template-import{margin-top:10px;margin-left:52px;display:inline-block;width:39%}.read-file{display:inline-block;margin-left:6px;position:relative;top:-10px}.note-footer{margin-top:10px}.note-footer p{margin-left:20px;margin-bottom:5px}.mau-vang{padding-right:15px;margin-right:10px;background-color:yellow}.mau-do{padding-right:15px;margin-right:10px;background-color:red}::ng-deep #gridImportInvoice{height:400px}::ng-deep .btn-right{padding-right:0}::ng-deep .btn-right .dx-button{float:right}::ng-deep .btn-right .dx-button:last-child{margin-right:8px !important}::ng-deep #gridImportInvoice .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit{width:40px;min-width:20px !important}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-validator.dx-datagrid-invalid .dx-highlight-outline::after{border:2px solid #d9534f}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-cell-modified .dx-highlight-outline::after{border-color:#fff}::ng-deep .form-import-invoices .inport-selector .dx-texteditor-input{padding-bottom:15px}::ng-deep .notify-modal{max-width:22%}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/import-invoices-dt/import-invoices-dt.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/import-invoices-dt/import-invoices-dt.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ImportInvoicesDtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportInvoicesDtComponent", function() { return ImportInvoicesDtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../view-invoice/view-invoice.component */ "./src/app/modules/payment-receipt/components/view-invoice/view-invoice.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/payment-receipt/shared/payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
/* harmony import */ var _modules_payment_receipt_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/payment-receipt/shared */ "./src/app/modules/payment-receipt/shared/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var ImportInvoicesDtComponent = /** @class */ (function () {
    function ImportInvoicesDtComponent(bsModalImportRef, modalService, vatService, socketService, authService, modalImportService, bsModalViewModel, _location, router, paymentRService) {
        this.bsModalImportRef = bsModalImportRef;
        this.modalService = modalService;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.modalImportService = modalImportService;
        this.bsModalViewModel = bsModalViewModel;
        this._location = _location;
        this.router = router;
        this.paymentRService = paymentRService;
        this.fileName = "";
        this.isDisReadFile = true;
        this.select = {};
        this.isAccessExportInv = false;
        this.formatter = {};
        this.frmData = new _modules_payment_receipt_shared__WEBPACK_IMPORTED_MODULE_15__["PaymentReceiptModel"](1);
        this.fieldDisable = ["number_of_vouchers", "receipt_date", "currency_code", "currency_rate", "payer_tax_code", "customer_name", "payer_name", "payer_address", "payer_email", "payer_phone", "payment_method_code"];
        this.receipt_date = "";
        this.invoice_number = "";
        this.isAllowEditInvoiceDate = this.authService.isAllowEditInvoiceDate();
        this.htXuat = "XuatVaKy";
        this.listColumn = [];
        this.htXuatOptions = [];
        this.tempKiFile = 0;
        this.ttDaXuatHoaDon = false; //Trạng thái đã xuất hóa đơn hay chưa
        this.totalInvoice = 0;
        this.totalErrorInvoice = 0;
        this.totalDuplicateInvoice = 0;
        this.countInvoice = 1;
        this.valueProgress = 0;
        this.showPopupImport = false;
        this.stopImport = false;
        this.errorImport = false;
        this.isBĐS = false; //Bất động sản
        this.isPepsi = false; //pepsi
        this.taxCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_8__["pattern"].tax_code;
        this.emailPattern = _config_index__WEBPACK_IMPORTED_MODULE_8__["pattern"].email;
        this.phonePattern = _config_index__WEBPACK_IMPORTED_MODULE_8__["pattern"].phone;
        this.datetimePattern = _config_index__WEBPACK_IMPORTED_MODULE_8__["pattern"].datetime;
        this.productCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_8__["pattern"].productCodePattern;
        this.isVisibleBtnSubmit = true;
        this.approveRequired = false;
        this.dataFormGird = [];
        this.disabledInvoiceReleases = false;
        this.invoicesId = [];
        this.columns = [];
        this.invoiceOptions = [];
        this.confirmCheckPreview = false;
        this.popupCachNapDuLieu = false;
        this.isThemTiep = true;
        this.isTT78 = false;
        this.isPassNQ43 = false;
        this.isXuatThanhCong = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return 'Hoàn thành: ' + percent + '%';
        };
        this.lookupColumnOptions = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                var _this = this;
                //
                //
                var newItem = {};
                newItem.code = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._convertToViKdau(args.text);
                var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === newItem.code; })[0];
                if (oDuplicate)
                    newItem.code = newItem.code + _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].addtionalUnitCode();
                newItem.name = args.text;
                this.select.unit_codes.unshift(newItem);
                setTimeout(function () {
                    _this.dataGrid.instance.columnOption("unit_code", "lookup", {
                        dataSource: _this.select.unit_codes,
                        displayExpr: "name",
                        valueExpr: "code"
                    });
                });
                return newItem;
            }.bind(this)
        };
        this._translate = this.authService.getTranslate();
    }
    ImportInvoicesDtComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get  cấu hình
        this.connectWebsocket();
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10___default.a({
            key: 'keyData',
            data: []
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default.a({
            store: this.invoice_products
        });
        this.configs = this.authService.getConfigs();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        if (this.templatesTT78 && this.templatesTT78.length > 0) {
            this.templatesTT78 = this.templatesTT78.filter(function (p) { return p.template_type != _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].templatetype.BienLaiInSanMenhGia; });
            this.receipt_series = this.templatesTT78[0].receipt_series;
            this.template_code = this.templatesTT78[0].template_code;
            this.template_type = this.templatesTT78[0].template_type;
            this.template_id = this.templatesTT78[0].value;
            this.oTemplate = this.templatesTT78[0];
        }
        if (this.hoaDonImportChoXuat) {
            this.receipt_date = this.hoaDonImportChoXuat[0].receipt_date ? moment__WEBPACK_IMPORTED_MODULE_9__(this.hoaDonImportChoXuat[0].receipt_date).format('YYYY-MM-DD HH:mm:ss') : "";
            this.template_id = this.hoaDonImportChoXuat[0].template_id;
            if (this.templatesTT78 && this.templatesTT78.length > 0) {
                this.layDuLieuTuHoaDonChoXuat();
            }
        }
        else
            this.loadRow(10);
        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(this.template_id) != "" && this.templatesTT78 && this.templatesTT78.length > 0) {
            var oFormRelease = this.templatesTT78.filter(function (p) { return p.value == _this.template_id; })[0];
            if (oFormRelease) {
                if (oFormRelease.fields && oFormRelease.fields.length > 0) {
                    var _dulieumorong = oFormRelease.fields.filter(function (x) { return x.type === '4'; });
                    if (_dulieumorong.length > 0) {
                        _dulieumorong.forEach(function (item) {
                            if (item.is_show) {
                                var oField = {
                                    column_code: item.code,
                                    column_name: item.name,
                                    is_visible: true
                                };
                                _this.listColumn.push(oField);
                                if (item.data_type === 'chu') {
                                    var column = {
                                        caption: item.name,
                                        dataField: item.code,
                                        width: 150,
                                    };
                                    _this.columns.push(column);
                                }
                                if (item.data_type === 'soluong') {
                                    var column = {
                                        caption: item.name,
                                        dataField: item.code,
                                        width: 150,
                                        dataType: "number",
                                        editorOptions: {
                                            format: '#,###'
                                        },
                                        format: '#,###'
                                    };
                                    _this.columns.push(column);
                                }
                                if (item.data_type === 'ngay') {
                                    var column = {
                                        caption: item.name,
                                        dataField: item.code,
                                        width: 150,
                                        dataType: 'date',
                                        format: "dd/MM/yyyy",
                                        dateSerializationFormat: "yyyy-MM-dd"
                                    };
                                    _this.columns.push(column);
                                }
                                var invoiceOption = {
                                    code: item.code,
                                    name: item.name,
                                    value: '',
                                    data_type: item.data_type
                                };
                                _this.invoiceOptions.push(invoiceOption);
                            }
                        });
                    }
                }
            }
        }
        this.currentUser = this.authService.getCurrentUser();
        var listpermissions = this.currentUser.user.permissions.split(',');
        var _obj = listpermissions.filter(function (p) { return p == "phe_duyet_bien_lai"; });
        if (_obj.length > 0) {
            this.isAccessExportInv = true;
        }
        else
            this.isAccessExportInv = false;
        this.invoice_products.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                if (item.product_name && item.unit_name) {
                    var obj1 = _this.select.unit_codes.filter(function (p) { return p.name === item.unit_name; })[0];
                    if (!obj1) {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(item.unit_code) == "")
                            item.unit_code = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._convertToViKdau(item.unit_name);
                        var oDuplicate = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                        if (oDuplicate)
                            item.unit_code = item.unit_code + _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].addtionalUnitCode();
                        _this.select.unit_codes.push({ code: item.unit_code, name: item.unit_name });
                    }
                    else {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(item.unit_code) != "") {
                            var oExistUnitCode = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                            if (!oExistUnitCode)
                                _this.select.unit_codes.push({ code: item.unit_code, name: item.unit_name });
                        }
                    }
                }
            });
        });
        this.createUpdateEvent();
    };
    ImportInvoicesDtComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.columns.length > 0) {
            this.columns.forEach(function (item) {
                _this.dataGrid.columns.push(item);
            });
        }
    };
    ImportInvoicesDtComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDonImport().subscribe(function (message) {
            var data = message;
            if (data.Status == 'success') {
                if (data.SvcName == "efy_Sign") {
                    if (data.Data.Name == 'hoadon.xml') {
                        _this.goiApiXuatHoaDon(data.Data.Content);
                    }
                    else if (data.Data.Name == 'ten_filek_the_trung-dc-nhi.xml') {
                        _this.invoice.issuer_name = data.Data.IssuerName;
                        _this.xuLiApiKhiXuat();
                    }
                    else {
                        _this.invoice.invoice_files.forEach(function (item) {
                            if (item.file_name == data.Data.Name) {
                                item.file_content = data.Data.Content;
                            }
                        });
                        _this.tempKiFile++;
                        if (_this.tempKiFile == _this.invoice.invoice_files.length) {
                            _this.xuLiApiKhiXuat();
                        }
                    }
                }
            }
            else {
                _this.errorImport = true;
                _this.showPopupImport = false;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(data.Description, 'error');
            }
        });
    };
    ImportInvoicesDtComponent.prototype.layDuLieuTuHoaDonChoXuat = function () {
        var _this = this;
        this.hoaDonImportChoXuat.forEach(function (invoice) {
            var _loop_1 = function (i) {
                var rowInvoice = new Object;
                invoice.receipt_fees = invoice.receipt_fees.sort(function (itemA, itemB) {
                    return itemA.order - itemB.order;
                });
                var product = invoice.receipt_fees[i];
                _this.template_id = invoice.template_id;
                _this.template_code = invoice.template_code;
                _this.template_type = invoice.template_type;
                _this.receipt_series = invoice.receipt_series;
                if (i == 0) {
                    _this.invoicesId.push(invoice.id);
                    rowInvoice["statusData"] = "INVALID";
                    rowInvoice["id"] = invoice.id;
                    rowInvoice["number_of_vouchers"] = invoice.number_of_vouchers;
                    rowInvoice["customer_code"] = invoice.customer_code;
                    rowInvoice["currency_code"] = invoice.currency_code;
                    rowInvoice["payer_tax_code"] = invoice.payer_tax_code;
                    rowInvoice["customer_name"] = invoice.customer_name;
                    rowInvoice["payer_name"] = invoice.payer_name;
                    rowInvoice["payer_address"] = invoice.payer_address;
                    rowInvoice["payer_phone"] = invoice.payer_phone;
                    rowInvoice["currency_rate"] = invoice.currency_rate;
                    rowInvoice["payer_email"] = invoice.payer_email;
                    rowInvoice["payment_method_code"] = invoice.payment_method_code;
                    rowInvoice["payment_method_name"] = invoice.payment_method_name;
                    rowInvoice["receipt_number"] = invoice.invoice_number;
                    rowInvoice["receipt_date"] = invoice.receipt_date;
                    /* Các trường mở rộng */
                    rowInvoice["receipt_options"] = invoice.receipt_options;
                    if (rowInvoice["receipt_options"] && rowInvoice["receipt_options"].length > 0) {
                        rowInvoice["receipt_options"].forEach(function (invOption) {
                            rowInvoice[invOption.code] = invOption.value;
                        });
                    }
                }
                else {
                    rowInvoice["number_of_vouchers"] = "";
                    rowInvoice["customer_code"] = "";
                    rowInvoice["currency_code"] = "";
                    rowInvoice["currency_rate"] = null;
                    rowInvoice["payer_tax_code"] = "";
                    rowInvoice["customer_name"] = "";
                    rowInvoice["payer_name"] = "";
                    rowInvoice["payer_address"] = "";
                    rowInvoice["payer_phone"] = "";
                    /////
                    rowInvoice["payer_email"] = "";
                    rowInvoice["payment_method_code"] = "";
                    rowInvoice["payment_method_name"] = "";
                    /* Các trường mở rộng */
                    rowInvoice["receipt_options"] = invoice.receipt_options;
                    if (rowInvoice["receipt_options"] && rowInvoice["receipt_options"].length > 0) {
                        rowInvoice["receipt_options"].forEach(function (invOption) {
                            rowInvoice[invOption.code] = "";
                        });
                    }
                    rowInvoice["dataType"] = "HANG_HOA";
                    rowInvoice["productNumberOfVouchers"] = invoice.number_of_vouchers;
                }
                rowInvoice["fee_code"] = product.fee_code;
                rowInvoice["fee_name"] = product.fee_name;
                rowInvoice["unit_code"] = product.unit_code;
                rowInvoice["unit_name"] = product.unit_name;
                rowInvoice["quantity"] = product.quantity;
                rowInvoice["price"] = product.price;
                rowInvoice["amount"] = product.amount;
                rowInvoice["vat"] = product.vat;
                rowInvoice["amount_after_vat"] = product.amount_after_vat;
                rowInvoice["order"] = product.order;
                rowInvoice["view_order"] = product.view_order;
                _this.invoice_products.insert(rowInvoice);
            };
            // console.log(element)
            for (var i = 0; i < invoice.receipt_fees.length; i++) {
                _loop_1(i);
            }
        });
        this.checkStatusData();
    };
    ImportInvoicesDtComponent.prototype.cktmChange = function () {
    };
    ImportInvoicesDtComponent.prototype.loadRow = function (countRow) {
        var _this = this;
        var tempRow = this.frmData.tempImportRow(countRow, this.isPepsi);
        tempRow.forEach(function (element) {
            _this.invoice_products.insert(element);
        });
    };
    ImportInvoicesDtComponent.prototype.napDuLieuTuBangKe = function () {
        document.getElementById("file-bang-ke").click();
        this.isThemTiep = false;
    };
    ImportInvoicesDtComponent.prototype.dinhKemFile = function (evt) {
        evt.srcElement.firstChild.click();
    };
    ImportInvoicesDtComponent.prototype.log = function (val) { console.log(val); };
    ImportInvoicesDtComponent.prototype.onDinhKemFile = function (e) {
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
                var base64result = fileReader.result.toString().split(',')[1];
                fileAttachData.unshift({
                    type: "BK",
                    file_name: file.name,
                    file_content: base64result,
                });
                if (document.getElementById('list-file')) {
                    document.getElementById('list-file').scrollTop = 0;
                }
                _this.invoice_products.load().then(function (dataSource) {
                    dataSource[rowIndex]["file_attach"] = fileAttachData;
                    dataSource[rowIndex]["file_attach_name"] = file.name;
                });
            };
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("File bạn chọn không đúng định dạng xls, xlsx, doc, docx, pdf, xml", "error");
        }
    };
    ImportInvoicesDtComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        var formatter = new Intl.NumberFormat('ja-JP');
        var totalMoney = formatter.format(parseFloat(e.value));
        return totalMoney;
    };
    ImportInvoicesDtComponent.prototype.onFileChanged = function (evt) {
        this.target = (evt.target);
        this.fileName = this.target.files[0].name;
        // this.fileSize = target.files[0].size/1024;
        if (this.target.files.length !== 1) {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Không thể chọn nhiều file', 'error');
            throw new Error('Không thể chọn nhiều file');
        }
        ;
        this.isDisReadFile = false;
    };
    ImportInvoicesDtComponent.prototype.addRow = function () {
        var len, order;
        this.invoice_products.load().then(function (dataSource) {
            if (dataSource.length >= 1) {
                len = dataSource.length;
                order = dataSource[len - 1].order + 1;
            }
            else {
                order = 1;
            }
        });
        if (this.isPepsi)
            order = null;
        var data = this.frmData.addImportRow(order, order);
        this.invoice_products.insert(data);
        this.dataGrid.instance.refresh();
    };
    ImportInvoicesDtComponent.prototype.getFileTemp = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var data = {
            template_id: this.template_id
        };
        this.paymentRService.getFileTemmpImportReceipts(data).subscribe(function (res) {
            if (res.status == 'success') {
                var file = res.data.product;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Xuất file Excel thành công", 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(res.message, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
        });
    };
    ImportInvoicesDtComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm("Cảnh báo: Quá trình nạp dữ liệu sẽ dừng lại nếu bạn đóng cửa sổ này");
        }
        if (r) {
            if (this.subXuatHoaDon) {
                this.subXuatHoaDon.unsubscribe();
            }
            if (this.subLuuChoXuat) {
                this.subLuuChoXuat.unsubscribe();
            }
            this.valueProgress = 0;
            this.totalInvoice = 0;
            this.isVisibleBtnSubmit = false;
        }
        else {
            e.cancel = true;
        }
    };
    ImportInvoicesDtComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ImportInvoicesDtComponent.prototype.getDataFromGird = function () {
        var _this = this;
        this.invoice_products.load().then(function (dataSource) {
            if (dataSource.length > 0) {
                dataSource.forEach(function (row) {
                    if (row.number_of_vouchers || row.productNumberOfVouchers) {
                        _this.dataFormGird.push(row);
                    }
                });
            }
        });
    };
    ImportInvoicesDtComponent.prototype.chonDocFile = function () {
        this.popupCachNapDuLieu = true;
    };
    ImportInvoicesDtComponent.prototype.thayThe = function (e) {
        this.isThemTiep = false;
        this.popupCachNapDuLieu = false;
        this.readFile();
    };
    ImportInvoicesDtComponent.prototype.themTiep = function (e) {
        this.isThemTiep = true;
        this.popupCachNapDuLieu = false;
        this.readFile();
    };
    ImportInvoicesDtComponent.prototype.readFile = function () {
        var _this = this;
        this.isDisReadFile = true;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_7__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].sheet_to_json(ws, { header: "A", range: 0 }));
            var fileBangKe = document.getElementById("file-bang-ke");
            fileBangKe.value = "";
            var _arrData = [];
            if (data && data[0]) {
                var columnsName = data.map(function (e) { return e.A; });
                var _index = columnsName.indexOf("number_of_vouchers");
                if (_index == -1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("File mẫu không đúng định dạng. Vui lòng nhấn vào Tại đây để lấy lại file mẫu", "error");
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
                _this.dataExcelFile = _arrData;
                _this.fillData(_this.dataExcelFile);
            }
        };
        reader.readAsBinaryString(this.target.files[0]);
    };
    ImportInvoicesDtComponent.prototype.fillData = function (fileData) {
        var _this = this;
        this.getDataFromGird();
        var numberOfVouchers = [];
        var isValid = true;
        var _index = 0;
        if (!this.isThemTiep) {
            this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    _this.invoice_products.remove(item.keyData);
                });
            });
        }
        fileData.forEach(function (element) {
            var invoice = new Object;
            if (element.number_of_vouchers) {
                invoice["statusData"] = "INVALID";
                var invoiceDate = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.receipt_date);
                if (invoiceDate == "ERROR") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Ngày biên lai không đúng định dạng", "error");
                    isValid = false;
                    return;
                }
                else if (invoiceDate != "")
                    invoice["receipt_date"] = invoiceDate;
                invoice["payer_tax_code"] = element.payer_tax_code ? element.payer_tax_code : "";
                invoice["currency_code"] = element.currency_code ? element.currency_code : "VND";
                invoice["currency_rate"] = element.currency_rate ? element.currency_rate : null;
                invoice["customer_name"] = element.customer_name ? element.customer_name : "";
                invoice["payer_name"] = element.payer_name ? element.payer_name : "";
                invoice["payer_address"] = element.payer_address ? element.payer_address : "";
                invoice["payer_email"] = element.payer_email ? element.payer_email : "";
                invoice["payer_phone"] = element.payer_phone ? element.payer_phone : "";
                invoice["payment_method_code"] = element.payment_method_name ? _this.getPaymentMethodCodeByName(element.payment_method_name) : "";
                invoice["payment_method_name"] = element.payment_method_name ? element.payment_method_name : "";
                invoice["fee_code"] = element.fee_code ? element.fee_code : "";
                invoice["fee_name"] = element.fee_name ? element.fee_name : "";
                if (invoice["fee_code"] != "") {
                    var _obj = _this.select.products.filter(function (p) { return p.code == invoice["fee_code"]; })[0];
                    if (!_obj) {
                        var _objPush = {
                            code: invoice["fee_code"],
                            name: invoice["fee_name"],
                            mhvth: invoice["fee_code"] + ": " + invoice["fee_name"],
                        };
                        _this.select.products.push(_objPush);
                    }
                }
                invoice["unit_code"] = element.unit_name ? _this.getUnitCodeByUnitName(element.unit_name) : "";
                invoice["unit_name"] = element.unit_name ? element.unit_name : "";
                invoice["quantity"] = element.quantity ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.quantity) : null;
                invoice["price"] = element.price ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.price) : null;
                invoice["amount"] = element.amount ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount) : null;
                invoice["amount_after_vat"] = element.amount_after_vat ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_after_vat) : null;
                /* Các trường mở rộng */
                var optionClone = lodash__WEBPACK_IMPORTED_MODULE_16__["cloneDeep"](_this.invoiceOptions);
                optionClone.forEach(function (invOption) {
                    for (var key in element) {
                        if (invOption.code === key) {
                            if (invOption.data_type === 'ngay') {
                                var date = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element[key]);
                                if (date == "ERROR") {
                                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(invOption.name + " không đúng định dạng", "error");
                                    isValid = false;
                                    return;
                                }
                                else if (date != "")
                                    invOption.value = date;
                            }
                            else
                                invOption.value = element[key];
                        }
                    }
                });
                invoice["receipt_options"] = optionClone;
                /* Các trường mở rộng */
                if (invoice["receipt_options"] && invoice["receipt_options"].length > 0) {
                    invoice["receipt_options"].forEach(function (invOption) {
                        invoice[invOption.code] = invOption.value;
                    });
                }
                /////////////////////////////////////////////////////////////// HĐ xe
                if (_index == 0) {
                    if (element.quantity) {
                        var arr = element.quantity.split('.');
                        if (arr.length == 2) {
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.price) {
                        var arr = element.price.split('.');
                        if (arr.length == 2) {
                            _this.formatter.don_gia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.don_gia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.currency_rate) {
                        var arr = [];
                        arr = element.currency_rate.split('.');
                        if (arr.length == 2) {
                            _this.formatter.ty_gia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.ty_gia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.amount) {
                        var arr = element.amount.split('.');
                        if (arr.length == 2) {
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.amount_after_vat) {
                        var arr = element.amount_after_vat.split('.');
                        if (arr.length == 2) {
                            _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                }
                _index++;
                if (_this.checkNumberOfVouchers(element.number_of_vouchers) != -1) {
                    var stt_1 = 0;
                    _this.invoice_products.load().then(function (dataSource) {
                        var hanghoa = dataSource.filter(function (p) { return p.number_of_vouchers == element.number_of_vouchers || p.productNumberOfVouchers == element.number_of_vouchers; })[0];
                        if (hanghoa)
                            stt_1 = Math.max.apply(Math, dataSource.filter(function (p) { return p.number_of_vouchers == element.number_of_vouchers || p.productNumberOfVouchers == element.number_of_vouchers; }).map(function (o) { return o.order; }));
                        ++stt_1;
                    });
                    invoice["dataType"] = "HANG_HOA";
                    invoice["number_of_vouchers"] = "";
                    invoice["receipt_date"] = "";
                    invoice["customer_code"] = "";
                    invoice["currency_code"] = "";
                    invoice["currency_rate"] = null;
                    invoice["payer_tax_code"] = "";
                    invoice["customer_name"] = "";
                    invoice["payer_name"] = "";
                    invoice["payer_address"] = "";
                    invoice["payer_phone"] = "";
                    invoice["payer_email"] = "";
                    invoice["payment_method_name"] = "";
                    invoice["payment_method_code"] = "";
                    invoice["productNumberOfVouchers"] = element.number_of_vouchers;
                    invoice["order"] = stt_1;
                    /* Các trường mở rộng */
                    if (invoice["receipt_options"] && invoice["receipt_options"].length > 0) {
                        invoice["receipt_options"].forEach(function (invOption) {
                            invoice[invOption.code] = "";
                        });
                    }
                    invoice["view_order"] = stt_1;
                }
                else {
                    invoice["number_of_vouchers"] = element.number_of_vouchers ? element.number_of_vouchers : "";
                    numberOfVouchers.push(invoice["number_of_vouchers"]);
                    invoice["order"] = 1;
                    invoice["view_order"] = 1;
                }
                _this.invoice_products.insert(invoice);
            }
        });
        if (!_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._attemptConvertBool(this.oTemplate.is_multiple_fee)) {
            this.invoice_products.load().then(function (dataSource) {
                var hanghoa = dataSource.filter(function (p) { return _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(p.productNumberOfVouchers) != ""; })[0];
                if (hanghoa) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Chỉ nhập 1 phí với mẫu biên lai 1 loại phí", "error");
                    isValid = false;
                    return;
                }
            });
        }
        if (isValid) {
            var dataTempt_1 = [];
            this.invoice_products.load().then(function (dataSource) {
                var datagroup = dataSource.filter(function (p) { return p.number_of_vouchers; });
                if (datagroup && datagroup.length > 0) {
                    datagroup.forEach(function (e) {
                        var listItem = dataSource.filter(function (w) { return w.productNumberOfVouchers == e.number_of_vouchers; });
                        dataTempt_1.push(e);
                        if (listItem && listItem.length > 0) {
                            listItem.forEach(function (inv) {
                                dataTempt_1.push(inv);
                            });
                        }
                    });
                }
            });
            this.invoicesHaveNumberOfVouchers = [];
            if (this.configs.system_parameter.the_same_number_of_voucher) {
                this.vatService.getInvoicesHaveNumberOfVouchers(numberOfVouchers).subscribe(function (res) {
                    if (res.status == "success") {
                        _this.invoicesHaveNumberOfVouchers = res.data.invoices;
                        _this.checkDuplicateNumberOfVouchers(dataTempt_1);
                        _this.checkStatusData();
                        _this.dataGrid.instance.refresh();
                    }
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                });
            }
            else {
                this.checkDuplicateNumberOfVouchers(dataTempt_1);
                this.checkStatusData();
                this.dataGrid.instance.refresh();
            }
        }
        this.createUpdateEvent();
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
    };
    ImportInvoicesDtComponent.prototype.checkDuplicateNumberOfVouchers = function (data) {
        if (this.isThemTiep) {
            var _loop_2 = function (i) {
                var row = data[i];
                var foundOnDatabase = this_1.invoicesHaveNumberOfVouchers.filter(function (item) {
                    return item.number_of_vouchers == row.number_of_vouchers;
                });
                var foundOnGird = this_1.dataFormGird.filter(function (item) {
                    return item.number_of_vouchers == row.number_of_vouchers;
                });
                if (foundOnDatabase.length > 0) {
                    data[i].statusData = "ERROR_DUPLICATE_DATABASE";
                }
                if (foundOnGird.length > 0 && data[i].number_of_vouchers && data[i].statusData != "ERROR_DUPLICATE_DATABASE") {
                    data[i].statusData = "ERROR_DUPLICATE_ONGIRD";
                }
            };
            var this_1 = this;
            for (var i = 0; i < data.length; i++) {
                _loop_2(i);
            }
            this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10___default.a({
                key: 'keyData',
                data: data
            });
            this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default.a({
                store: this.invoice_products
            });
        }
        else {
            var _loop_3 = function (i) {
                var row = data[i];
                var foundOnDatabase = this_2.invoicesHaveNumberOfVouchers.filter(function (item) {
                    return item.number_of_vouchers == row.number_of_vouchers;
                });
                if (foundOnDatabase.length > 0) {
                    data[i].statusData = "ERROR_DUPLICATE_DATABASE";
                }
            };
            var this_2 = this;
            for (var i = 0; i < data.length; i++) {
                _loop_3(i);
            }
            this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10___default.a({
                key: 'keyData',
                data: data
            });
            this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default.a({
                store: this.invoice_products
            });
        }
        this.dataFormGird = [];
    };
    ImportInvoicesDtComponent.prototype.checkNumberOfVouchers = function (numberOfVouchers) {
        var foundNumberOfVouchers;
        this.invoice_products.load().then(function (dataSource) {
            foundNumberOfVouchers = dataSource.findIndex(function (item) {
                return item.number_of_vouchers == numberOfVouchers;
            });
        });
        return foundNumberOfVouchers;
    };
    ImportInvoicesDtComponent.prototype.checkStatusData = function () {
        var _this = this;
        this.invoice_products.load().then(function (dataSource) {
            var invalid = dataSource.filter(function (item) {
                return item.number_of_vouchers && item.statusData == "INVALID";
            });
            var errorDuplicateDatabase = dataSource.filter(function (item) {
                return item.number_of_vouchers && item.statusData == "ERROR_DUPLICATE_DATABASE";
            });
            var errorDuplicateOngird = dataSource.filter(function (item) {
                return item.number_of_vouchers && item.statusData == "ERROR_DUPLICATE_ONGIRD";
            });
            var errorData = dataSource.filter(function (item) {
                return item.statusData == "DATA_ERROR";
            });
            _this.totalInvoiceInvalid = invalid.length;
            _this.totalDuplicateInvoice = errorDuplicateDatabase.length;
            _this.totalErrorInvoice = errorDuplicateOngird.length + errorData.length;
        });
    };
    ImportInvoicesDtComponent.prototype.formatDecimalColumn = function (number) {
        if (number == 0) {
            return '0,###';
        }
        else {
            return '0,###.' + '0'.repeat(number);
        }
    };
    ImportInvoicesDtComponent.prototype.onContextMenuPreparing = function (e) {
        var _this = this;
        if (e.row) {
            if (e.row.rowType === "data") {
                e.items = [{
                        text: "Thêm khách hàng",
                        onItemClick: function () {
                            _this.addRow();
                        }
                    },
                    {
                        text: "Thêm hàng hóa",
                        onItemClick: function () {
                            if (e.row.data.number_of_vouchers || e.row.data.productNumberOfVouchers) {
                                var temp_1 = e.row.data.number_of_vouchers ? e.row.data.number_of_vouchers : e.row.data.productNumberOfVouchers;
                                _this.invoice_products.load().then(function (dataSource) {
                                    var products = dataSource.filter(function (item) {
                                        return item.number_of_vouchers == temp_1 || item.productNumberOfVouchers == temp_1;
                                    });
                                    var data = _this.frmData.addImportRow(products.length + 1, products.length + 1);
                                    data.dataType = "HANG_HOA";
                                    if (e.row.data.number_of_vouchers) {
                                        data["productNumberOfVouchers"] = e.row.data.number_of_vouchers;
                                        dataSource.splice(e.rowIndex + products.length, 0, data);
                                    }
                                    else {
                                        data["productNumberOfVouchers"] = e.row.data.productNumberOfVouchers;
                                        var index = dataSource.map(function (e) { return e.number_of_vouchers; }).indexOf(e.row.data.number_of_vouchers);
                                        dataSource.splice(index + products.length - 1, 0, data);
                                    }
                                });
                                _this.dataGrid.instance.refresh();
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Bạn chưa nhập số phiếu / chứng từ", "error");
                            }
                        }
                    }];
            }
        }
    };
    ImportInvoicesDtComponent.prototype.onInvoiceTemplate = function (e) {
        var _this = this;
        var selectedItem = e.component.option("selectedItem");
        this.template_id = e.value;
        this.template_code = selectedItem.template_code;
        this.template_type = selectedItem.template_type;
        this.receipt_series = selectedItem.receipt_series;
        this.oTemplate = selectedItem;
        this.listColumn = [];
        if (this.columns.length > 0) {
            this.columns.forEach(function (item) {
                _this.dataGrid.columns.forEach(function (column, index) {
                    if (column["dataField"] == item.dataField)
                        _this.dataGrid.columns.splice(index, 1);
                });
            });
        }
        this.columns = [];
        this.invoiceOptions = [];
        if (selectedItem.fields && selectedItem.fields.length > 0) {
            var _dulieumorong = selectedItem.fields.filter(function (x) { return x.type === '4'; });
            if (_dulieumorong.length > 0) {
                _dulieumorong.forEach(function (item) {
                    if (item.is_show) {
                        var oField = {
                            column_code: item.code,
                            column_name: item.name,
                            is_visible: true
                        };
                        _this.listColumn.push(oField);
                        if (item.data_type === 'chu') {
                            var column = {
                                caption: item.name,
                                dataField: item.code,
                                width: 150,
                            };
                            _this.columns.push(column);
                        }
                        if (item.data_type === 'soluong') {
                            var column = {
                                caption: item.name,
                                dataField: item.code,
                                width: 150,
                                dataType: "number",
                                editorOptions: {
                                    format: '#,###'
                                },
                                format: '#,###'
                            };
                            _this.columns.push(column);
                        }
                        if (item.data_type === 'ngay') {
                            var column = {
                                caption: item.name,
                                dataField: item.code,
                                width: 150,
                                dataType: 'date',
                                format: "dd/MM/yyyy",
                                dateSerializationFormat: "yyyy-MM-dd"
                            };
                            _this.columns.push(column);
                        }
                        var invoiceOption = {
                            code: item.code,
                            name: item.name,
                            value: '',
                            data_type: item.data_type
                        };
                        _this.invoiceOptions.push(invoiceOption);
                    }
                });
                if (this.columns.length > 0) {
                    this.columns.forEach(function (item) {
                        _this.dataGrid.columns.push(item);
                    });
                }
            }
        }
    };
    ImportInvoicesDtComponent.prototype.onContentReady = function (e) {
        e.component.columnOption("command:edit", {
            visibleIndex: -1
        });
    };
    ImportInvoicesDtComponent.prototype.onEditorPreparing = function (e) {
        var _this = this;
        if (e.parentType === 'dataRow') {
            if (e.row.data) {
                if (e.row.data.dataType && e.row.data.dataType == "HANG_HOA" && this.fieldDisable.includes(e.dataField)) {
                    e.editorOptions.disabled = true;
                }
            }
            e.editorOptions.onValueChanged = function (args) {
                switch (e.dataField) {
                    case "number_of_vouchers":
                        _this.onNumberOfVouchers(e, args.value);
                        break;
                    // case "product_code":
                    //   this.productCodeChange(e, args.value);
                    //   this.dataGrid.instance.refresh();
                    //   break;
                    // case "quantity":
                    // case "discount":
                    // case "amount_discount":
                    // case "price":
                    // case "amount_vat":
                    // case "amount_after_vat":
                    //   this.priceChange(e, args.value);
                    //   this.dataGrid.instance.refresh();
                    //   break;
                    // case "vat":
                    //   this.vatChange(e, args.value);
                    //   this.dataGrid.instance.refresh();
                    //   break;
                    // case "unit_code":
                    //   this.unitChange(e, args.value);
                    //   this.dataGrid.instance.refresh();
                    //   break;
                    // case "amount":
                    //   this.amountChange(e, args.value);
                    //   this.dataGrid.instance.refresh();
                    //   break;
                    default:
                        break;
                }
                _this.checkStatusData();
                e.setValue(args.value);
            };
        }
    };
    ImportInvoicesDtComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            if (e.data.dataType && e.data.dataType == "HANG_HOA" && this.fieldDisable.includes(e.column.dataField)) {
                e.cellElement.style.background = "#F1F1F1";
            }
            if (e.data.statusData == "ERROR_DUPLICATE_ONGIRD" && e.column.dataField == "number_of_vouchers") {
                e.cellElement.style.background = "#FF0000";
            }
            if (e.data.number_of_vouchers) {
                switch (e.column.dataField) {
                    case "buyer_address":
                        if (e.data.customer_object_code == false)
                            this.setStatusDataOnCellPrepared(e, "Địa chỉ không được để trống");
                        break;
                    case "payment_method_name":
                        this.setStatusDataOnCellPrepared(e, "Hình thức thanh toán không được để trống");
                        break;
                    case "template_code":
                        this.setStatusDataOnCellPrepared(e, "Mẫu số hóa đơn không được để trống");
                        break;
                    case "invoice_series":
                        this.setStatusDataOnCellPrepared(e, "Ký hiệu hóa đơn không được để trống");
                        break;
                    case "product_name":
                        this.setStatusDataOnCellPrepared(e, "Tên hàng hóa không được để trống");
                        break;
                    case "amount":
                        this.setStatusDataOnCellPrepared(e, "Thành tiền không được để trống");
                        break;
                    case "amount_after_vat":
                        this.setStatusDataOnCellPrepared(e, "Tổng tiền không được để trống");
                        break;
                    case "customer_name":
                        if (e.data.customer_object_code == false)
                            this.setStatusDataOnCellPrepared(e, "Tên đơn vị tổ chức không được để trống");
                        break;
                    case "buyer_name":
                        if (e.data.customer_object_code == true)
                            this.setStatusDataOnCellPrepared(e, "Tên khách hàng không được để trống");
                        break;
                    case "product_code":
                        this.setStatusDataOnCellPrepared(e, this._translate.VALIDATION.required_productCode);
                        break;
                    default:
                        break;
                }
            }
            else if (e.data.number_of_vouchers == "" && e.data.dataType == "KHACH_HANG" && e.data.product_name && e.column.dataField == "number_of_vouchers") {
                this.setStatusDataOnCellPrepared(e, "Số phiếu, chứng từ không được để trống");
            }
        }
    };
    ImportInvoicesDtComponent.prototype.setStatusDataOnCellPrepared = function (e, message) {
        if (((e.column.dataField == "amount" || e.column.dataField == "amount_after_vat") && e.value == null && !e.data.is_promotion) || ((e.column.dataField != "amount" && e.column.dataField != "amount_after_vat" && e.column.dataField != "product_code") && (e.value == null || e.value == "")) || (e.column.dataField == "product_code" && _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(e.value) != "" && !this.productCodePattern.test(e.value))) {
            e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
            e.cellElement.title = message;
            if (e.data.statusData != "ERROR_DUPLICATE_DATABASE" && e.data.statusData != "ERROR_DUPLICATE_ONGIRD")
                e.data.statusData = "DATA_ERROR";
        }
        else {
            if (e.data.customer_object_code == false && (e.data.buyer_address == null || e.data.buyer_address == "" || e.data.customer_name == null || e.data.customer_name == ""))
                e.data.statusData == "DATA_ERROR";
            else if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(e.data.product_code) != "" && !this.productCodePattern.test(e.data.product_code))
                e.data.statusData == "DATA_ERROR";
            else if (e.data.customer_object_code == true && (e.data.buyer_name == null || e.data.buyer_name == ""))
                e.data.statusData == "DATA_ERROR";
            else if (e.data.payment_method_name == null || e.data.payment_method_name == "")
                e.data.statusData == "DATA_ERROR";
            else if (e.data.product_name == null || e.data.product_name == "")
                e.data.statusData == "DATA_ERROR";
            else if (e.data.amount == null)
                e.data.statusData == "DATA_ERROR";
            else if (e.key.statusData != "ERROR_DUPLICATE_DATABASE")
                e.data.statusData = "INVALID";
            else if (e.data.amount_after_vat == null)
                e.data.statusData == "DATA_ERROR";
            else if (e.data.number_of_vouchers == "" && e.data.dataType == "KHACH_HANG" && e.data.product_name && e.column.dataField == "number_of_vouchers")
                e.data.statusData == "DATA_ERROR";
            else
                e.data.statusData = "INVALID";
        }
    };
    ImportInvoicesDtComponent.prototype.onRowRemoving = function (e) {
        var _this = this;
        var number_of_vouchers = e.data.number_of_vouchers;
        if (number_of_vouchers) {
            this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (row) {
                    if (row.productNumberOfVouchers == number_of_vouchers || row.number_of_vouchers == number_of_vouchers) {
                        _this.invoice_products.remove(row.keyData);
                    }
                });
            });
        }
        else {
            this.invoice_products.remove(e.key);
        }
        this.checkStatusData();
        this.dataGrid.instance.refresh();
    };
    ImportInvoicesDtComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code == "Delete") {
            // console.log(e.event.srcElement);
            e.event.srcElement.value = null;
            // e.event.srcElement.parentNode.parentNode.querySelector('input').value = null;
        }
    };
    ImportInvoicesDtComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.statusData == "ERROR_DUPLICATE_DATABASE" && e.data.number_of_vouchers) {
                e.rowElement.style.background = "#FFFF00";
            }
            else {
                e.rowElement.style.background = "";
            }
        }
        this.checkStatusData();
    };
    ImportInvoicesDtComponent.prototype.onRowUpdated = function (e) {
        //  this.onNumberOfVouchers(e);
        // let column = Object.keys(e.data)[0];
        // switch (column) {
        //   case "number_of_vouchers":
        //     this.onNumberOfVouchers(e);
        //     break;
        //   case "product_code":
        //     this.productCodeChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "quantity":
        //     this.priceChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "discount":
        //     this.priceChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "amount_discount":
        //     this.priceChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "price":
        //     this.priceChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "vat":
        //     this.vatChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "unit_code":
        //     this.unitChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "amount":
        //     this.amountChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "amount_vat":
        //     this.priceChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   case "amount_after_vat":
        //     this.priceChange(e);
        //     this.dataGrid.instance.refresh();
        //     break;
        //   default:
        //     break;
        // }
        // this.checkStatusData();
    };
    ImportInvoicesDtComponent.prototype.onNumberOfVouchers = function (e, value) {
        var _this = this;
        var numberOfVouchers = value;
        if (e.row.key.number_of_vouchers_backup) {
            this.invoice_products.load().then(function (dataSource) {
                for (var i = 0; i < dataSource.length; i++) {
                    var row = dataSource[i];
                    if (row.productNumberOfVouchers && row.productNumberOfVouchers == e.row.key.number_of_vouchers_backup) {
                        dataSource[i].productNumberOfVouchers = numberOfVouchers;
                    }
                }
            });
            e.row.key.number_of_vouchers_backup = numberOfVouchers;
        }
        if (numberOfVouchers != "") {
            //// Tạm đóng 14/07/2020
            if (this.configs.system_parameter.the_same_number_of_voucher) {
                this.vatService.getInvoicesHaveNumberOfVouchers([numberOfVouchers]).subscribe(function (res) {
                    var dupInvoices = res.data.invoices;
                    if (dupInvoices.length > 0) {
                        e.row.key.statusData = "ERROR_DUPLICATE_DATABASE";
                        // this.totalDuplicateInvoice++;
                        // if (this.totalInvoice > 0) this.totalInvoice--
                    }
                    else {
                        if (e.row.key.statusData = "ERROR_DUPLICATE_DATABASE") {
                            e.row.key.statusData = "INVALID";
                            // if (this.totalDuplicateInvoice > 0) this.totalDuplicateInvoice--;
                        }
                        // this.totalInvoice++;
                    }
                    _this.invoice_products.load().then(function (dataSource) {
                        var foundOnGird = dataSource.filter(function (item) {
                            return item.number_of_vouchers == numberOfVouchers;
                        });
                        if (foundOnGird.length > 1 && e.row.key.statusData != "ERROR_DUPLICATE_DATABASE") {
                            e.row.key.statusData = "ERROR_DUPLICATE_ONGIRD";
                        }
                    });
                    _this.dataGrid.instance.refresh();
                    _this.checkStatusData();
                });
            }
        }
    };
    //Thay đổi cột mã hàng
    ImportInvoicesDtComponent.prototype.productCodeChange = function (e, value) {
        var _this = this;
        this.select.products.some(function (item) {
            if (item.code == value) {
                e.row.key.product_name = item.name;
                e.row.key.unit_code = _this.checkUnitCode(item.unit_code);
                e.row.key.quantity = null;
                e.row.key.engine_number = null;
                e.row.key.price_after_discount = null;
                e.row.key.chassis_number = null;
                e.row.key.contract_order = null;
                e.row.key.product_exchange_rate = null;
                e.row.key.price = item.price ? parseFloat(item.price) : item.price;
                e.row.key.amount = item.price ? parseFloat(item.price) : 0;
                e.row.key.discount = item.discount ? parseFloat(item.discount) : null;
                e.row.key.amount_discount = (e.row.key.discount > 0) ? _this.caculatorAmountDiscount(e.row.key.price, e.row.key.discount) : null;
                if (e.row.key.amount_discount > 0)
                    e.row.key.amount -= e.row.key.amount_discount;
                if (_this.isHdGTGT) {
                    e.row.key.vat = item.vat ? parseFloat(item.vat) : null;
                    e.row.key.amount_vat = (e.row.row.key.vat >= 0) ? _this.caculatorAmountVat(e.row.key.amount, e.row.key.vat) : null;
                }
                e.row.key.amount_after_vat = e.row.key.amount + (_this.isHdGTGT ? e.row.key.amount_vat : 0);
            }
        });
    };
    ImportInvoicesDtComponent.prototype.priceChange = function (e, value) {
        var quantity = e.row.key.quantity || 1;
        var price = value || 0;
        if (price != null) {
            e.row.key.amount = price * quantity;
            e.row.key.amount_discount = (e.row.key.discount > 0) ? this.caculatorAmountDiscount(e.row.key.price, e.row.key.discount) : e.row.key.amount_discount;
            if (e.row.key.amount_discount > 0)
                e.row.key.amount -= e.key.amount_discount;
            if (this.isHdGTGT)
                e.row.key.amount_vat = (e.row.key.vat >= 0) ? this.caculatorAmountVat(e.row.key.amount, e.row.key.vat) : null;
            e.row.key.amount_after_vat = e.row.key.amount + (this.isHdGTGT ? e.row.key.amount_vat : 0);
        }
    };
    ImportInvoicesDtComponent.prototype.vatChange = function (e, value) {
        if (this.isHdGTGT)
            e.row.key.amount_vat = (value >= 0) ? this.caculatorAmountVat(e.row.key.amount, value) : null;
        e.row.key.amount_after_vat = e.row.key.amount + (this.isHdGTGT ? e.row.key.amount_vat : 0);
    };
    ImportInvoicesDtComponent.prototype.unitChange = function (row) {
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
    ImportInvoicesDtComponent.prototype.amountChange = function (e, value) {
        if (!e.row.key.quantity && !e.row.key.price) {
            e.row.key.amount_after_vat = value;
        }
        else {
            var quantity = e.row.key.quantity || 1;
            var price = e.row.key.price || 0;
            if (price != null) {
                e.row.key.amount = e.row.key.price * quantity;
                e.row.key.amount_discount = (e.row.key.discount > 0) ? this.caculatorAmountDiscount(e.row.key.price, e.row.key.discount) : e.row.key.amount_discount;
                if (e.row.key.amount_discount > 0)
                    e.row.key.amount -= e.row.key.amount_discount;
                if (this.isHdGTGT)
                    e.row.key.amount_vat = (e.row.key.vat >= 0) ? this.caculatorAmountVat(e.row.key.amount, e.row.key.vat) : null;
                e.row.key.amount_after_vat = e.row.key.amount + (this.isHdGTGT ? e.row.key.amount_vat : 0);
            }
        }
    };
    ImportInvoicesDtComponent.prototype.checkValidNumberOfVouchers = function () {
        this.invoice_products.load().then(function (dataSource) {
            dataSource.forEach(function (row) {
                if (row.number_of_vouchers == "") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Số phiếu, chứng từ không được để trống", "error");
                }
                else {
                }
            });
        });
    };
    ImportInvoicesDtComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code == unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    ImportInvoicesDtComponent.prototype.checkProvisionsOnAccounts = function (name) {
        var found = this.select.select_provisions_on_accounts.find(function (element) {
            return element.name === name;
            ;
        });
        var code = "";
        if (found) {
            code = found.code;
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Định khoản chưa có trong danh mục", "error");
        }
        return code;
    };
    ImportInvoicesDtComponent.prototype.caculatorAmountVat = function (amount, vat) {
        var temp = amount / 100 * vat;
        return this.roundNumber(temp, 5);
    };
    ImportInvoicesDtComponent.prototype.caculatorAmountDiscount = function (price, discount) {
        var temp = price * discount / 100;
        return this.roundNumber(temp, 5);
    };
    ImportInvoicesDtComponent.prototype.roundNumber = function (number, n) {
        if (number == null) {
            return number;
        }
        else {
            var p = Math.pow(10, n);
            return Math.round(number * p) / p;
        }
    };
    ImportInvoicesDtComponent.prototype.getUnitCodeByUnitName = function (unitName) {
        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(unitName) != "") {
            if (!this.select.unit_codes)
                this.select.unit_codes = [];
            var _obj = this.select.unit_codes.filter(function (p) { return p.name == unitName; })[0];
            if (_obj) {
                return _obj.code;
            }
            else {
                var code_1 = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._convertToViKdau(unitName);
                var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === code_1; })[0];
                if (oDuplicate)
                    code_1 = code_1 + _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].addtionalUnitCode();
                this.select.unit_codes.push({ code: code_1, name: unitName });
                return code_1;
            }
        }
        return null;
    };
    ImportInvoicesDtComponent.prototype.getPaymentMethodCodeByName = function (payment_method_name) {
        var items = this.select.payment_method_names;
        for (var i = 0; i < items.length; i++) {
            if (items[i].name == payment_method_name) {
                return items[i].code;
            }
        }
        return null;
    };
    ImportInvoicesDtComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        var status;
        if (!this.invoice.id && !this.invoice.receipt_number)
            status = 'THEM_MOI';
        if (this.invoice.id && !this.invoice.receipt_number)
            status = 'GHI_TAM';
        if (this.invoice.id && this.invoice.receipt_number)
            status = 'GIU_SO';
        var xmlInvoice = "";
        var isNewXml = 0;
        this.receipt_sign_date = null;
        if (status == 'THEM_MOI') {
            var sub_1 = this.paymentRService.ghiTam(this.invoice, true).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.receipt_number = rs.data.receipt_number;
                    _this.invoice.receipt_date = moment__WEBPACK_IMPORTED_MODULE_9__(rs.data.receipt_date).format('YYYY-MM-DD HH:mm:ss');
                    var receipt_sign_date = moment__WEBPACK_IMPORTED_MODULE_9__(rs.data.receipt_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.receipt_sign_date = receipt_sign_date;
                    _this.invoice.id = rs.data.id;
                    _this.invoicesId.push(rs.data.id);
                    //demo kí số vào file
                    //  Lấy xml từ serer
                    isNewXml = rs.data.is_new_xml;
                    if (isNewXml)
                        _this.nodeSign = "//HDon/DSCKS/NBan";
                    else
                        _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (xmlInvoice != "") {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                            _this.goiApiXuatHoaDon(xmlInvoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, receipt_sign_date);
                        }
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                sub_1.unsubscribe();
            });
        }
        else if (status == 'GHI_TAM') {
            var sub_2 = this.paymentRService.edit(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.receipt_number = rs.data.receipt_number;
                    _this.frmData.receipt_date = moment__WEBPACK_IMPORTED_MODULE_9__(rs.data.receipt_date).format('YYYY-MM-DD HH:mm:ss');
                    var receipt_sign_date = moment__WEBPACK_IMPORTED_MODULE_9__(rs.data.receipt_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.receipt_sign_date = receipt_sign_date;
                    //demo kí số vào file
                    //  Lấy xml từ serer
                    isNewXml = rs.data.is_new_xml;
                    if (isNewXml)
                        _this.nodeSign = "//HDon/DSCKS/NBan";
                    else
                        _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (xmlInvoice != "") {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                            _this.goiApiXuatHoaDon(xmlInvoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, receipt_sign_date);
                        }
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                sub_2.unsubscribe();
            });
        }
        else if (status == 'GIU_SO') {
            var sub_3 = this.paymentRService.edit(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.frmData.receipt_date = moment__WEBPACK_IMPORTED_MODULE_9__(rs.data.receipt_date).format('YYYY-MM-DD HH:mm:ss');
                    var receipt_sign_date = moment__WEBPACK_IMPORTED_MODULE_9__(rs.data.receipt_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.receipt_sign_date = receipt_sign_date;
                    //demo kí số vào file
                    //  Lấy xml từ serer
                    isNewXml = rs.data.is_new_xml;
                    if (isNewXml)
                        _this.nodeSign = "//HDon/DSCKS/NBan";
                    else
                        _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (xmlInvoice != "") {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                            _this.goiApiXuatHoaDon(xmlInvoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, receipt_sign_date);
                        }
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                sub_3.unsubscribe();
            });
        }
    };
    ImportInvoicesDtComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        this.socketService.kyBienLai(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate);
    };
    ImportInvoicesDtComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.subXuatHoaDon = this.paymentRService.xuatBienLai({
            id: this.invoice.id,
            xml_string: xml_string,
            receipt_sign_date: this.receipt_sign_date
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                // this.formInvoice.readonlyAllForm();
                _this.ttDaXuatHoaDon = true;
                _this.valueProgress += percentComplete;
                if (_this.countInvoice < _this.totalInvoice) {
                    _this.countInvoice++;
                    _this.xuatHoaDon();
                }
                else if (_this.countInvoice == _this.totalInvoice) {
                    _this.isXuatThanhCong = true;
                    _this.valueProgress = 100;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Xuất biên lai thành công', 'success');
                    _this.isVisibleBtnSubmit = false;
                    _this.showPopupImport = false;
                    _this.bsModalImportRef.hide();
                    //this._location.back();
                    if (_this.search)
                        _this.router.navigate(["/system/payment-receipt"], { queryParams: _this.search });
                    else
                        _this.router.navigate(["/system/payment-receipt"]);
                }
            }
            else {
                _this.showPopupImport = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        });
    };
    ImportInvoicesDtComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        this.invoice = this.invoicesArr[this.countInvoice - 1];
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            this.connectWebsocket();
            this.socketService.kyBienLai(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
        }
        this.tempKiFile = 0;
    };
    ImportInvoicesDtComponent.prototype.xuatChoKy = function () {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.invoice = this.invoicesArr[this.countInvoice - 1];
        if (!this.isTT78) {
            this.subLuuChoXuat = this.vatService.xuatChoKy(this.invoice).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.id = rs.data.id;
                    _this.valueProgress += percentComplete;
                    if (_this.countInvoice < _this.totalInvoice) {
                        _this.countInvoice++;
                        _this.xuatChoKy();
                    }
                    else if (_this.countInvoice == _this.totalInvoice) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                        _this.showPopupImport = false;
                        _this.bsModalImportRef.hide();
                        //this._location.back();
                        if (_this.search)
                            _this.router.navigate(["/system/payment-receipt"], { queryParams: _this.search });
                        else
                            _this.router.navigate(["/system/payment-receipt"]);
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            });
        }
        else {
            this.subLuuChoXuat = this.vatService.xuatChoKyTT78(this.invoice).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.id = rs.data.id;
                    _this.valueProgress += percentComplete;
                    if (_this.countInvoice < _this.totalInvoice) {
                        _this.countInvoice++;
                        _this.xuatChoKy();
                    }
                    else if (_this.countInvoice == _this.totalInvoice) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                        _this.showPopupImport = false;
                        _this.bsModalImportRef.hide();
                        //this._location.back();
                        if (_this.search)
                            _this.router.navigate(["/system/payment-receipt"], { queryParams: _this.search });
                        else
                            _this.router.navigate(["/system/payment-receipt"]);
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            });
        }
    };
    ImportInvoicesDtComponent.prototype.luuChoXuat = function () {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.invoice = this.invoicesArr[this.countInvoice - 1];
        if (this.invoice.id) {
            this.subLuuChoXuat = this.paymentRService.edit(this.invoice.id, this.invoice).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.id = rs.data.id;
                    _this.valueProgress += percentComplete;
                    if (_this.countInvoice < _this.totalInvoice) {
                        _this.countInvoice++;
                        _this.luuChoXuat();
                    }
                    else if (_this.countInvoice == _this.totalInvoice) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                        _this.showPopupImport = false;
                        _this.bsModalImportRef.hide();
                        //this._location.back();
                        if (_this.search)
                            _this.router.navigate(["/system/payment-receipt"], { queryParams: _this.search });
                        else
                            _this.router.navigate(["/system/payment-receipt"]);
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            });
        }
        else {
            this.subLuuChoXuat = this.paymentRService.ghiTam(this.invoice).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.id = rs.data.id;
                    _this.valueProgress += percentComplete;
                    if (_this.countInvoice < _this.totalInvoice) {
                        _this.countInvoice++;
                        _this.luuChoXuat();
                    }
                    else if (_this.countInvoice == _this.totalInvoice) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                        _this.showPopupImport = false;
                        _this.bsModalImportRef.hide();
                        //this._location.back();
                        if (_this.search)
                            _this.router.navigate(["/system/payment-receipt"], { queryParams: _this.search });
                        else
                            _this.router.navigate(["/system/payment-receipt"]);
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            });
        }
    };
    ImportInvoicesDtComponent.prototype.xuatFile = function () {
        var invoices = [];
        this.invoice_products.load().then(function (dataSource) {
            dataSource.forEach(function (element) {
                if (element.number_of_vouchers) {
                    var invoice = {};
                    invoice["number_of_vouchers"] = element.number_of_vouchers; // số phiếu chứng từ
                    invoice["customer_code"] = element.customer_code; //mã đơn vị (mã khách hàng)
                    invoice["currency_code"] = element.currency_code;
                    invoice["customer_object_code"] = element.customer_object_code ? "CA_NHAN" : "DOANH_NGHIEP"; //Mã loại hóa đơn
                    invoice["buyer_tax_code"] = element.buyer_tax_code; //Mã số thuế
                    invoice["customer_name"] = element.customer_name; //Tên đơn vị (Tên khách hàng)
                    invoice["buyer_name"] = element.buyer_name; //Tên người mua
                    invoice["student_name"] = element.student_name;
                    invoice["class_name"] = element.class_name;
                    invoice["buyer_mobile"] = element.buyer_mobile; //Điện thoại liên hệ
                    ///// HĐ xe
                    invoice["contract_number"] = element.contract_number;
                    invoice["currency_rate"] = element.currency_rate;
                    invoice["vsb_number"] = element.vsb_number;
                    invoice["license_number"] = element.license_number;
                    invoice["sell_form"] = element.sell_form;
                    invoice["model"] = element.model;
                    invoice["color"] = element.color;
                    invoice["invoice_engine_number"] = element.invoice_engine_number;
                    invoice["invoice_chassis_number"] = element.invoice_chassis_number;
                    invoice["manufacture_year"] = element.manufacture_year;
                    invoice["place_of_delivery"] = element.place_of_delivery;
                    invoice["shiping_point"] = element.shiping_point;
                    invoice["payment_expire"] = element.payment_expire;
                    invoice["wip_number"] = element.wip_number;
                    invoice["in_out_date"] = element.in_out_date;
                    invoice["invoice_internal_number"] = element.invoice_internal_number;
                    invoice["license_plate"] = element.license_plate;
                    invoice["kilometer_number"] = element.kilometer_number;
                    /////
                    invoice["buyer_email"] = element.buyer_email; //Email
                    invoice["buyer_address"] = element.buyer_address; //Địa chỉ
                    invoice["the_order"] = element.the_order; //Địa chỉ
                    invoice["consult_number"] = element.consult_number; //Địa chỉ
                    invoice["ship_receiving_address"] = element.ship_receiving_address; //Địa chỉ
                    invoice["ship_receiving_name"] = element.ship_receiving_name; //Địa chỉ
                    invoice["payment_method_name"] = element.payment_method_view_name; //Hình thức thanh toán
                    invoice["bank_account_number"] = element.bank_account_number; //Số tài khoản
                    invoice["bank_name"] = element.bank_name; //thuộc ngân hàng
                    invoice["note"] = element.note; //ghi chú
                    /* Hóa đơn Pepsi */
                    invoice["total_large_unit"] = element.total_large_unit;
                    invoice["total_small_unit"] = element.total_small_unit;
                    invoice["billing_source"] = element.billing_source;
                    invoice["template_code"] = element.template_code;
                    invoice["invoice_series"] = element.invoice_series;
                    invoice["invoice_amount"] = element.invoice_amount;
                    invoice["environmental_fee"] = element.environmental_fee;
                    invoice["total_amount_vat"] = element.total_amount_vat;
                    invoice["total_payment"] = element.total_payment;
                    invoice["username"] = element.username;
                    var product = {
                        product_name: element.product_name,
                        provisions_on_accounts_name: element.provisions_on_accounts_name,
                        unit_name: element.unit_name,
                        quantity: element.quantity,
                        other_tax: element.other_tax,
                        other_charge: element.other_charge,
                        price: element.price,
                        product_exchange_rate: element.product_exchange_rate,
                        price_after_vat: element.price_after_vat,
                        amount: element.amount,
                        vat_name: element.vat_name,
                        amount_vat: element.amount_vat,
                        amount_after_vat: element.amount_after_vat,
                        discount: element.discount,
                        amount_discount: element.amount_discount,
                        amount_without_discount: element.amount_without_discount,
                        engine_number: element.engine_number,
                        price_after_discount: element.price_after_discount,
                        chassis_number: element.chassis_number,
                        color_material: element.color_material,
                        contract_order: element.contract_order,
                        view_order: element.view_order,
                        management_code: element.management_code,
                    };
                    invoice["invoice_products"] = [];
                    invoice["invoice_products"].push(product);
                    invoices.push(invoice);
                }
                if (element.productNumberOfVouchers) {
                    // console.log(element)
                    var invoiceProduct = {
                        product_name: element.product_name,
                        provisions_on_accounts_name: element.provisions_on_accounts_name,
                        unit_name: element.unit_name,
                        quantity: element.quantity,
                        other_tax: element.other_tax,
                        other_charge: element.other_charge,
                        price: element.price,
                        product_exchange_rate: element.product_exchange_rate,
                        price_after_vat: element.price_after_vat,
                        amount: element.amount,
                        vat_name: element.vat,
                        amount_vat: element.amount_vat,
                        amount_after_vat: element.amount_after_vat,
                        discount: element.discount,
                        amount_discount: element.amount_discount,
                        amount_without_discount: element.amount_without_discount,
                        engine_number: element.engine_number,
                        price_after_discount: element.price_after_discount,
                        chassis_number: element.chassis_number,
                        color_material: element.color_material,
                        contract_order: element.contract_order,
                        view_order: element.view_order,
                        management_code: element.management_code,
                    };
                    for (var i = 0; i < invoices.length; i++) {
                        if (invoices[i].number_of_vouchers == element.productNumberOfVouchers) {
                            invoices[i].invoice_products.push(invoiceProduct);
                        }
                    }
                }
            });
        });
        var data = {
            "invoices": invoices
        };
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        this.vatService.exportToExcel(data).subscribe(function (res) {
            if (res.status == 'success') {
                var file = res.data.product;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Xuất dữ liệu ra excel thành công", "success");
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(res.message, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
        });
    };
    ImportInvoicesDtComponent.prototype.convertGirdToInvoices = function (type) {
        var _this = this;
        var invoices = [];
        var invalid = true;
        var decimal_amount_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien);
        var decimal_amount = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.thanh_tien);
        var decimal_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tien_thue);
        var decimal_quantity = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.so_luong);
        var decimal_tygia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.ty_gia);
        var decimal_amount_discount = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tien_chiet_khau);
        var ts = this.oTemplate;
        this.invoice_products.load().then(function (dataSource) {
            if (!_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._attemptConvertBool(_this.oTemplate.is_multiple_fee)) {
                var hanghoa = dataSource.filter(function (p) { return _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(p.productNumberOfVouchers) != ""; })[0];
                if (hanghoa) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Chỉ nhập 1 phí với mẫu biên lai 1 loại phí", "error");
                    invalid = false;
                    return false;
                }
            }
            dataSource.forEach(function (element, index) {
                if (element.number_of_vouchers == "" && element.dataType == "KHACH_HANG" && element.product_name && type == "submit") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Số phiếu, chứng từ không được để trống", "error");
                    invalid = false;
                    return;
                }
                if (element.number_of_vouchers) {
                    if (type == "submit") {
                        if (element.fee_name == "") {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tên loại phí,lệ phí không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                        if (element.amount_after_vat == null && !element.is_promotion) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tổng tiền không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                        if (element.amount == null && !element.is_promotion) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Thành tiền không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(element.fee_code) != "" && !_this.productCodePattern.test(element.fee_code)) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.VALIDATION.required_productCode, "error");
                            invalid = false;
                            return false;
                        }
                    }
                    var invoice_1 = new _modules_payment_receipt_shared__WEBPACK_IMPORTED_MODULE_15__["PaymentReceiptModel"](1);
                    if (element.id) {
                        invoice_1.id = element.id;
                    }
                    /* Các trường mở rộng */
                    if (_this.invoiceOptions && _this.invoiceOptions.length > 0) {
                        var optionClone = lodash__WEBPACK_IMPORTED_MODULE_16__["cloneDeep"](_this.invoiceOptions);
                        // optionClone.forEach(invOption => {
                        //   for (var key in element) {
                        //     if (invOption.code === key) {
                        //       invOption.value = element[key];
                        //     }
                        //   }
                        // });
                        optionClone.forEach(function (invOption) {
                            for (var key in element) {
                                if (invOption.code === key) {
                                    if (invOption.data_type === 'ngay') {
                                        var date = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element[key]);
                                        if (date == "ERROR") {
                                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(invOption.name + " không đúng định dạng", "error");
                                            invalid = false;
                                            return;
                                        }
                                        else if (date != "")
                                            invOption.value = date;
                                    }
                                    else if (invOption.data_type === 'soluong') {
                                        invOption.value = element[key] ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element[key]) : null;
                                    }
                                    else
                                        invOption.value = element[key];
                                }
                            }
                        });
                        invoice_1.receipt_options = [];
                        optionClone.forEach(function (val) { return invoice_1.receipt_options.push(Object.assign({}, val)); });
                    }
                    invoice_1.receipt_number = element.receipt_number;
                    invoice_1.template_id = _this.template_id;
                    invoice_1["number_of_vouchers"] = element.number_of_vouchers; // số phiếu chứng từ
                    invoice_1.receipt_date = element.receipt_date ? moment__WEBPACK_IMPORTED_MODULE_9__(element.receipt_date).format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DD HH:mm:ss'); // Ngày hóa đơn
                    invoice_1.payer_tax_code = element.payer_tax_code; //Mã số thuế
                    invoice_1.payer_name = element.payer_name; //Tên người mua
                    invoice_1.customer_name = element.customer_name; //Tên đơn vị (Tên khách hàng)
                    invoice_1.customer_code = element.customer_code; //mã đơn vị (mã khách hàng)
                    invoice_1.currency_code = element.currency_code;
                    invoice_1.payer_phone = element.payer_phone;
                    invoice_1.currency_rate = _this.roundNumber(element.currency_rate, decimal_tygia);
                    invoice_1.payer_address = element.payer_address; //Địa chỉ
                    invoice_1.payer_email = element.payer_email; //Điện thoại liên hệ
                    invoice_1.template_code = _this.template_code;
                    invoice_1.template_type = _this.template_type;
                    invoice_1.receipt_series = _this.receipt_series;
                    invoice_1.payment_method_code = element.payment_method_code; //Hình thức thanh toán
                    invoice_1.payment_method_name = element.payment_method_name; //Hình thức thanh toán
                    if (!invoice_1.payment_method_name) {
                        var _obj = _this.select.payment_method_names.filter(function (p) { return p.code == element.payment_method_code; })[0];
                        if (_obj) {
                            invoice_1.payment_method_name = _obj.name;
                        }
                    }
                    invoice_1.receipt_fees[0].fee_code = element.fee_code;
                    invoice_1.receipt_fees[0].fee_name = element.fee_name;
                    invoice_1.receipt_fees[0].unit_code = element.unit_code;
                    invoice_1.receipt_fees[0].unit_name = element.unit_name;
                    invoice_1.receipt_fees[0].quantity = element.quantity;
                    invoice_1.receipt_fees[0].price = element.price;
                    invoice_1.receipt_fees[0].amount = element.amount;
                    invoice_1.receipt_fees[0].amount_after_vat = element.amount_after_vat;
                    invoice_1.receipt_fees[0].order = element.order;
                    invoice_1.receipt_fees[0].view_order = element.view_order;
                    invoice_1.display_currency = JSON.stringify(_this.configs.display_currency);
                    var decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
                    invoice_1.decimal_places_json = decimal_places_json;
                    invoices.push(invoice_1);
                }
                if (element.productNumberOfVouchers) {
                    // console.log(element)
                    var invoiceProduct = {
                        fee_code: element.fee_code,
                        fee_name: element.fee_name,
                        unit_code: element.unit_code,
                        unit_name: element.unit_name,
                        quantity: element.quantity,
                        price: element.price,
                        order: element.order,
                        amount: element.amount,
                        amount_after_vat: element.amount_after_vat,
                        view_order: element.view_order,
                    };
                    for (var i = 0; i < invoices.length; i++) {
                        if (invoices[i].number_of_vouchers == element.productNumberOfVouchers) {
                            invoices[i].receipt_fees.push(invoiceProduct);
                        }
                    }
                }
            });
        });
        var _loop_4 = function (i) {
            var amount_after_vat = null;
            invoices[i].receipt_fees.forEach(function (product, index) {
                if (product.amount_after_vat == null && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tổng tiền" + " " + _this._translate.VALIDATION.required, 'error');
                    invalid = false;
                    return false;
                }
                if (!_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._attemptConvertBool(_this.oTemplate.is_multiple_fee)) {
                    if (product.quantity != null && parseFloat(product.quantity) > 1 && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Mẫu 1 loại phí: Số lượng Loại phí không được lớn hơn 1", 'error');
                        invalid = false;
                        return false;
                    }
                }
                if (product.amount_after_vat !== null)
                    amount_after_vat += product.amount_after_vat;
            });
            if (!_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._attemptConvertBool(this_3.oTemplate.is_multiple_fee)) {
                invoices[i].fee_name = invoices[i].receipt_fees[0].fee_name;
            }
            invoices[i].total_payment = this_3.roundNumber(amount_after_vat, decimal_amount_after_vat);
            invoices[i].receipt_type = parseInt(this_3.oTemplate.is_multiple_fee);
            invoices[i].total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].tienBangChu(invoices[i].total_payment, decimal_amount_after_vat, invoices[i].currency_code, this_3.configs.system_parameter.display_read_money_english);
        };
        var this_3 = this;
        for (var i = 0; i < invoices.length; i++) {
            _loop_4(i);
        }
        this.totalInvoice = invoices.length;
        this.invoicesArr = invoices;
        this.invoicesArr = this.invoicesArr.sort(function (itemA, itemB) {
            return new Date(itemA.receipt_date).getTime() - new Date(itemB.receipt_date).getTime();
        });
        return invalid;
    };
    ImportInvoicesDtComponent.prototype.date_sort_desc = function (date1, date2) {
        // This is a comparison function that will result in dates being sorted in
        // DESCENDING order.
        if (date1 > date2)
            return -1;
        if (date1 < date2)
            return 1;
        return 0;
    };
    ;
    /* Xem trước hóa đơn */
    ImportInvoicesDtComponent.prototype.preview = function () {
        var convert = this.convertGirdToInvoices("preview");
        if (convert) {
            if (this.configs.system_parameter.display_template_from_server) {
                var initialState = {
                    items: this.invoicesArr,
                    isXuatHD: false,
                    typeAction: 'NAP_EXCEL'
                };
                this.bsModalViewModel = this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_12__["ViewInvoiceComponent"], {
                    backdrop: 'static',
                    keyboard: false,
                    class: 'modal-xl view-invoice',
                    initialState: initialState
                });
                var subModal_1 = this.modalImportService.onHide.subscribe(function () {
                    subModal_1.unsubscribe();
                });
            }
            else {
                this.checkCKS("XEM_TRUOC");
            }
        }
    };
    ImportInvoicesDtComponent.prototype.previewBeforeSubmit = function () {
        var _this = this;
        this.convertGirdToInvoices("preview");
        if (this.configs.system_parameter.display_template_from_server) {
            var hinhthucxuat = "";
            if (this.htXuat != _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].hinhThucXuat.XuatChoKy) {
                hinhthucxuat = "và ký";
            }
            else {
                hinhthucxuat = "chờ ký";
            }
            var initialState = {
                items: this.invoicesArr,
                isXuatHD: true,
                hinhthucxuat: hinhthucxuat,
                typeAction: 'NAP_EXCEL'
            };
            this.bsModalViewModel = this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_12__["ViewInvoiceComponent"], {
                backdrop: 'static',
                keyboard: false,
                class: 'modal-xl view-invoice',
                initialState: initialState
            });
            var subModal_2 = this.modalImportService.onHide.subscribe(function () {
                if (_this.bsModalViewModel.content.successSaveItem == "DONG_Y") {
                    _this.confirmCheckPreview = true;
                    _this.submit('XUAT');
                }
                subModal_2.unsubscribe();
            });
        }
        else {
            this.checkCKS("XUAT_HOA_DON");
        }
        // this.windowPreviewBeforeSubmit = window.open("", "", `width=${screen.availWidth}, height=${screen.availHeight}`);
        // this.windowPreviewBeforeSubmit.document.body.innerHTML = "Đang tải dữ liệu!";
        // this.windowPreviewBeforeSubmit.blur();
        // let timer = setInterval(() => {
        //   if (this.windowPreviewBeforeSubmit.closed) {
        //     clearInterval(timer);
        //     let isCheck = Helper.getCookie('CK_CFM_I');
        //     this.windowPreviewBeforeSubmit = undefined;
        //     if (isCheck == "CHECKED") {
        //       document.cookie = "CK_CFM_I=; path=/";
        //       this.confirmCheckPreview = true;
        //       this.submit('XUAT');
        //     }
        //   }
        // }, 500);
        // let htx = "";
        // if (this.htXuat != sEnum.hinhThucXuat.XuatChoKy) {
        //   htx = "và ký";
        // } else {
        //   htx = "chờ ký";
        // }
        // let sub = this.vatService.previewInvoiceImport(data).subscribe(rs => {
        //   if (rs.status == 'success') {
        //     let pdf_file = rs.data.invoice.pdf_file;
        //     let objectUrl = VPreviewInvService._getUrlInvoice(pdf_file);
        //     this.windowPreviewBeforeSubmit.document.write(`
        //     <style type="text/css" scoped>
        //         .nhap-nhay { 
        //           background: red;
        //           padding: 0.5px 9px;
        //           margin-right: 5px;
        //           border-radius: 57%;
        //           -webkit-animation: flicker 1s infinite;
        //         } 
        //         .ht-xuat{
        //           display: inline-block;
        //           margin-right: 50px;
        //           padding: 15px;
        //           float: right;
        //           background: #e48e08;
        //         }
        //         @-webkit-keyframes flicker
        //         {
        //         0% {opacity:0;}
        //         9% {opacity:0;}
        //         10% {opacity:.5;}
        //         13% {opacity:0;}
        //         20% {opacity:.5;}
        //         25% {opacity:1;}
        //         }
        //         .example {
        //           padding: 20px;
        //         }
        //         input[type=button] {
        //           padding: 5px 10px;
        //           margin: 10px 5px;
        //           border-radius: 5px;
        //           cursor: pointer;
        //           background: #ddd;
        //           border: 1px solid #ccc;
        //         }
        //         input[type=button]:hover {
        //           background: #ccc;
        //         }
        //         .confirm {
        //           display: none;
        //         }
        //         .confirm > div:first-of-type {
        //           position: fixed;
        //           width: 100%;
        //           height: 100%;
        //           background: rgba(0, 0, 0, 0.5);
        //           top: 0px;
        //           left: 0px;
        //         }
        //         .confirm > div:last-of-type {
        //           padding: 10px 20px;
        //           background: white;
        //           position: absolute;
        //           width: auto;
        //           height: auto;
        //           left: 50%;
        //           top: 50%;
        //           transform: translate(-50%, -50%);
        //           border-radius: 5px;
        //           border: 1px solid #333;
        //         }
        //         .confirm > div:last-of-type div:first-of-type {
        //           min-width: 150px;
        //           padding: 10px;
        //         }
        //         .confirm > div:last-of-type div:last-of-type {
        //           text-align: right;
        //         }
        //     </style>
        //     <div style="margin-left: 50px;">
        //       <h3 style="color: red; text-align: center;">BẢN DỰ THẢO HÓA ĐƠN ĐIỆN TỬ</h3>
        //       <p style="font-weight: 600;"><span class="nhap-nhay"></span><span style="font-size: 17px;">Lưu ý: 
        //       </span>Đề nghị đơn vị kiểm tra thật kỹ các nội dung hóa đơn đã nhập trước khi xuất như: Ngày hóa đơn, Bên mua hàng, Tên hàng hóa dịch vụ, Tổng tiền,…để tránh xuất sai.</>
        //     </div>
        //     <div>
        //       <iframe style="margin-left: 170px;" width="70%" height="95%" src="${objectUrl}"></iframe>
        //       <div class="ht-xuat">
        //         <p style="color: #fff;font-size: 17px;text-align: center;margin-bottom: 0;">Ngày hóa đơn</p>
        //         <p style="color: #fff;font-size: 17px;text-align: center;margin-bottom: 10px;margin-top: 5px;">${moment(rs.data.invoice.invoice_date).format('DD/MM/YYYY')}</p>
        //         <h3 style="color: #fff; text-align: center; text-transform: uppercase;margin-top: 5px;">Xuất ${htx}</h3>
        //       </div>
        //     </div>
        //     <div style="text-align: center; margin: 20px 0 50px; font-size: 22px; font-weight: 600;">
        //       <a href="javascript:void(0)" style="text-decoration: none;" onclick="setConfirmInvoice()">Đồng ý </a>|
        //       <a href="javascript:void(0)" style="text-decoration: none;" onclick="closeWin()">Đóng</a>
        //     </div>
        //     <div class="confirm">
        //         <div></div>
        //         <div>
        //           <div id="confirmMessage">Confirm text</div>
        //           <div>
        //             <input id="confirmYes" type="button" value="Đồng ý" />
        //             <input id="confirmNo" type="button" value="Quay lại" />
        //           </div>
        //         </div>
        //     </div>
        //     <script type="text/javascript">
        //     const ui = {
        //       confirm: async (message) => createConfirm(message)
        //     }
        //     const createConfirm = (message) => {
        //       return new Promise((complete, failed)=>{
        //         $('#confirmMessage').text(message)
        //         $('#confirmYes').off('click');
        //         $('#confirmNo').off('click');
        //         $('#confirmYes').on('click', ()=> { $('.confirm').hide(); complete(true); });
        //         $('#confirmNo').on('click', ()=> { $('.confirm').hide(); complete(false); });
        //         $('.confirm').show();
        //       });
        //     }
        //     const setConfirmInvoice = async () => {
        //       const confirm = await ui.confirm("Bạn có chắc chắn muốn xuất hóa đơn ${htx} không?");
        //       if(confirm){
        //         document.cookie = "CK_CFM_I=CHECKED; path=/";
        //         window.close();
        //       } else{
        //       }
        //     } 
        //       function closeWin(){
        //         window.close();
        //       }
        //     </script>
        //     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        //     `);
        //     this.windowPreviewBeforeSubmit.focus();
        //   } else {
        //     this.windowPreviewBeforeSubmit.close();
        //     Library.notify(rs.message, 'error');
        //   }
        // }, err => { }, () => {
        //   Library.hideloading();
        //   sub.unsubscribe();
        // });
    };
    ImportInvoicesDtComponent.prototype.getDataPreview = function () {
        var _this = this;
        var formatter;
        var invoicesPreview = [];
        this.convertGirdToInvoices("preview");
        var displayInt = this.configs.system_parameter.display_int ? this.configs.system_parameter.display_int : false;
        formatter = this.configs.system_parameter.decpoint_is_dot ? { decimal: ".", thousands: ",", display_int: displayInt } : { decimal: ",", thousands: ".", display_int: displayInt };
        this.invoicesArr.forEach(function (data) {
            var decimal_quatity = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.so_luong);
            var decimal_price = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.don_gia);
            var decimal_price_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.don_gia_sau_thue);
            var decimal_amount = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.thanh_tien);
            var decimal_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tien_thue);
            var decimal_amount_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien);
            var decimal_ty_gia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.ty_gia);
            var amount_without_discount = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.thanh_tien_chua_ck);
            var total_amount_product_with_vatx = null, total_amount_product_with_vat0 = null, total_amount_product_with_vat5 = null, total_amount_product_with_vat8 = null, total_amount_product_with_vat10 = null, amount_vat0 = null, total_amount_product_vat_kkknt = null, total_amount_product_vat_other = null;
            data.invoice_products.forEach(function (item) {
                if (!item.is_promotion && !item.is_promotion_new) {
                    if (item.commercial_discount) {
                        if (item.vat == -1)
                            total_amount_product_with_vatx -= item.amount_after_vat;
                        if (item.vat == 0)
                            total_amount_product_with_vat0 -= item.amount_after_vat;
                        if (item.vat == 0)
                            amount_vat0 -= item.amount_vat;
                        if (item.vat == 5)
                            total_amount_product_with_vat5 -= item.amount_after_vat;
                        if (item.vat == 8)
                            total_amount_product_with_vat8 -= item.amount_after_vat;
                        if (item.vat == 10)
                            total_amount_product_with_vat10 -= item.amount_after_vat;
                        if (item.vat == -2)
                            total_amount_product_vat_kkknt -= item.amount_after_vat;
                        if (item.vat == -3 || item.vat == 7 || item.vat == 3.5)
                            total_amount_product_vat_other -= item.amount_after_vat;
                    }
                    else {
                        if (item.vat == -1)
                            total_amount_product_with_vatx += item.amount_after_vat;
                        if (item.vat == 0)
                            total_amount_product_with_vat0 += item.amount_after_vat;
                        if (item.vat == 0)
                            amount_vat0 += item.amount_vat;
                        if (item.vat == 5)
                            total_amount_product_with_vat5 += item.amount_after_vat;
                        if (item.vat == 8)
                            total_amount_product_with_vat8 += item.amount_after_vat;
                        if (item.vat == 10)
                            total_amount_product_with_vat10 += item.amount_after_vat;
                        if (item.vat == -2)
                            total_amount_product_vat_kkknt += item.amount_after_vat;
                        if (item.vat == -3 || item.vat == 7 || item.vat == 3.5)
                            total_amount_product_vat_other += item.amount_after_vat;
                    }
                }
                item['unit_name'] = "";
                _this.select.unit_codes.forEach(function (unit) {
                    item.discount = "";
                    item.total_discount = "";
                    if (unit.code == item.unit_code) {
                        item['unit_name'] = unit.name;
                    }
                });
                item.amount = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.amount, decimal_amount, formatter);
                item.price = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.price, decimal_price, formatter);
                item.product_exchange_rate = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.product_exchange_rate, decimal_ty_gia, formatter);
                item.price_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.price_after_vat, decimal_price_after_vat, formatter);
                item.quantity = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.quantity, decimal_quatity, formatter);
                item.other_tax = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.other_tax, decimal_amount, formatter);
                item.other_charge = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.other_charge, decimal_amount, formatter);
                item.discount = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.discount, decimal_quatity, formatter);
                item.amount_discount = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.amount_discount, decimal_quatity, formatter);
                item.amount_without_discount = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.amount_without_discount, amount_without_discount, formatter);
            });
            var _obj = _this.select.payment_method_names.filter(function (p) { return p.code == data.payment_method_name; })[0];
            if (_obj) {
                data.payment_method_view_name = _obj.name;
            }
            data.total_amount_product_vat_kkknt = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_vat_kkknt, decimal_amount_after_vat, formatter);
            data.total_amount_product_vat_other = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_vat_other, decimal_amount_after_vat, formatter);
            data.total_amount_product_with_vatx = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vatx, decimal_amount_after_vat, formatter);
            data.total_amount_product_with_vat0 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat0, decimal_amount_after_vat, formatter);
            data.total_amount_product_with_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat5, decimal_amount_after_vat, formatter);
            data.total_amount_product_with_vat8 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat8, decimal_amount_after_vat, formatter);
            data.total_amount_product_with_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat10, decimal_amount_after_vat, formatter);
            data.amount_after_vat_kkknt = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_vat_kkknt, decimal_amount_after_vat, formatter);
            data.amount_after_vat_other = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_vat_other, decimal_amount_after_vat, formatter);
            data.amount_after_vatx = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vatx, decimal_amount_after_vat, formatter);
            data.amount_after_vat0 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat0, decimal_amount_after_vat, formatter);
            data.amount_after_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat5, decimal_amount_after_vat, formatter);
            data.amount_after_vat8 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat8, decimal_amount_after_vat, formatter);
            data.amount_after_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat10, decimal_amount_after_vat, formatter);
            data.amount_after_vat_kkknt = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.amount_after_vat_kkknt, decimal_amount, formatter);
            data.amount_after_vat_other = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.amount_after_vat_other, decimal_amount, formatter);
            data.total_amount_product_vatx = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_amount_product_vatx, decimal_amount, formatter);
            data.total_amount_product_vat0 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_amount_product_vat0, decimal_amount, formatter);
            data.total_amount_product_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_amount_product_vat5, decimal_amount, formatter);
            data.total_amount_product_vat8 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_amount_product_vat8, decimal_amount, formatter);
            data.total_amount_product_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_amount_product_vat10, decimal_amount, formatter);
            data.amount_vat0 = amount_vat0;
            data.amount_vat_other = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.amount_vat_other, decimal_amount_vat, formatter);
            data.amount_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.amount_vat5, decimal_amount_vat, formatter);
            data.amount_vat8 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.amount_vat8, decimal_amount_vat, formatter);
            data.amount_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.amount_vat10, decimal_amount_vat, formatter);
            data.amount = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.amount, decimal_amount, formatter);
            data.total_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_amount_vat, decimal_amount_vat, formatter);
            data.total_payment = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_payment, decimal_amount_after_vat, formatter);
            invoicesPreview.push(data);
        });
        return invoicesPreview;
    };
    ImportInvoicesDtComponent.prototype.inChuyenDoi = function () {
        var w = 1920, h = 900;
        w = window.screen.availWidth * 100 / 100;
        h = window.screen.availHeight * 93 / 100;
        var win = window.open("about:blank", "name", "width=200, height=100");
        win.document.body.innerHTML = this._translate.NOTIFY.loading;
        win.blur();
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var sub = this.vatService.inChuyenDoiInvoiceImport(this.invoicesId, false).subscribe(function (rs) {
            if (rs.status == "success") {
                var pdf_file = rs.data.invoice.pdf_file;
                var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_1__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                win.resizeTo(screen.availWidth, screen.availHeight);
                win.focus();
                win.open(objectUrl, "name", "width=" + w + ", height=" + h);
                //   win.document.write(`
                //   <a id="idA" title="Download File" style="font-family: \'Verdana\';color: #333;font-weight: 600;float:right; margin-bottom: 5px;
                //     margin-right: 20px;" download="hoadon.pdf" href="data:application/pdf;base64,${pdf_file}">Tải File</a>
                //   <iframe width="100%" height="97%" src="data:application/pdf;base64,${pdf_file}#download=1"></iframe>
                // `);
                //   win.resizeTo(screen.availWidth, screen.availHeight);
                //   win.focus();
            }
            else {
                win.close();
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ImportInvoicesDtComponent.prototype.xemHoaDon = function () {
        var w = 1920, h = 900;
        w = window.screen.availWidth * 100 / 100;
        h = window.screen.availHeight * 93 / 100;
        var win = window.open("about:blank", "name", "width=200, height=100");
        win.document.body.innerHTML = this._translate.NOTIFY.loading;
        win.blur();
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var sub = this.vatService.xemHoaDonInvoiceImport(this.invoicesId).subscribe(function (rs) {
            if (rs.status == "success") {
                var pdf_file = rs.data.invoice.pdf_file;
                var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_1__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                win.resizeTo(screen.availWidth, screen.availHeight);
                win.focus();
                win.open(objectUrl, "name", "width=" + w + ", height=" + h);
                // win.document.write(`<iframe width="100%" height="97%" src="data:application/pdf;base64,${pdf_file}"></iframe>`)
                // win.resizeTo(screen.availWidth, screen.availHeight);
                // win.focus();
            }
            else {
                win.close();
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ImportInvoicesDtComponent.prototype.submit = function (type) {
        var _this = this;
        this.isXuatThanhCong = false;
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        this.checkStatusData();
        if (this.totalDuplicateInvoice > 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Số phiếu, chứng từ bị trùng", "error");
            return;
        }
        setTimeout(function () {
            var convert = _this.convertGirdToInvoices("submit");
            if (convert) {
                if (type == "XUAT") {
                    if (_this.confirmCheckPreview) {
                        _this.showPopupImport = true;
                        if (_this.htXuat != _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].hinhThucXuat.XuatChoKy) {
                            _this.xuatHoaDon();
                        }
                        else {
                            _this.xuatChoKy();
                        }
                        _this.confirmCheckPreview = false;
                        // });
                    }
                    else {
                        _this.previewBeforeSubmit();
                    }
                }
                else if (type == "LUU") {
                    _this.showPopupImport = true;
                    _this.luuChoXuat();
                }
            }
        }, 300);
    };
    /* */
    ImportInvoicesDtComponent.prototype.configColumn = function () {
        var _this = this;
        var initialState = {
            listColumn: this.listColumn,
            listColumnClone: this.listColumn,
            configs: this.configs,
            exportType: _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].exportType.hoadon
        };
        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_6__["ConfigColumnImportExcelComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                _this.listColumn = data.listColumn;
            }
            subModal.unsubscribe();
        });
    };
    ImportInvoicesDtComponent.prototype.infoColumn = function (columnName) {
        if (this.listColumn && this.listColumn.length > 0) {
            var _obj = this.listColumn.filter(function (p) { return p.column_code == columnName; })[0];
            if (_obj) {
                if ((_obj.column_code == "vat" || _obj.column_code == "amount_vat") && !this.isHdGTGT) {
                    _obj.is_visible = false;
                }
                return _obj;
            }
            else
                return { column_code: "", column_name: "", is_visible: false };
        }
    };
    ImportInvoicesDtComponent.prototype.checkCKS = function (typeView) {
        var _this = this;
        this.connectWebsocket();
        if (this.socketService.checkNull()) {
            this.socketService.connect();
        }
        setTimeout(function () {
            var res = _this.socketService.getStatusCertificate();
            if (res && res.status === 'error' && res.code == 10) {
                var initialState = {
                    typeNotify: "XEM_MAU",
                };
                _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_6__["SignatureOffComponent"], {
                    class: 'modal-lg', backdrop: 'static',
                    keyboard: false,
                    initialState: initialState
                });
                _this.modalService.onHide.subscribe(function () {
                });
            }
            else {
                if (typeView == "XEM_TRUOC") {
                    var initialState = {
                        items: _this.invoicesArr,
                        isXuatHD: false,
                        typeAction: 'NAP_EXCEL'
                    };
                    _this.bsModalViewModel = _this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_12__["ViewInvoiceComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-xl view-invoice',
                        initialState: initialState
                    });
                    var subModal_3 = _this.modalImportService.onHide.subscribe(function () {
                        subModal_3.unsubscribe();
                    });
                }
                else if (typeView == "XUAT_HOA_DON") {
                    var hinhthucxuat = "";
                    if (_this.htXuat != _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].hinhThucXuat.XuatChoKy) {
                        hinhthucxuat = "và ký";
                    }
                    else {
                        hinhthucxuat = "chờ ký";
                    }
                    var initialState = {
                        items: _this.invoicesArr,
                        isXuatHD: true,
                        hinhthucxuat: hinhthucxuat,
                        typeAction: 'NAP_EXCEL'
                    };
                    _this.bsModalViewModel = _this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_12__["ViewInvoiceComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-xl view-invoice',
                        initialState: initialState
                    });
                    var subModal_4 = _this.modalImportService.onHide.subscribe(function () {
                        if (_this.bsModalViewModel.content.successSaveItem == "DONG_Y") {
                            _this.connectWebsocket();
                            _this.confirmCheckPreview = true;
                            _this.submit('XUAT');
                        }
                        subModal_4.unsubscribe();
                    });
                }
            }
        });
    };
    ImportInvoicesDtComponent.prototype.dong = function () {
        this.bsModalImportRef.hide();
        //this._location.back();
        if (this.search)
            this.router.navigate(["/system/payment-receipt"], { queryParams: this.search });
        else
            this.router.navigate(["/system/payment-receipt"]);
    };
    // khởi tạo sự kiện khi update
    ImportInvoicesDtComponent.prototype.createUpdateEvent = function () {
        var _this = this;
        setTimeout(function () {
            _this.invoice_products.on('updated', function (key, value) {
                var column = Object.keys(value)[0];
                _this.invoice_products.byKey(key).then(function (row) {
                    switch (column) {
                        case 'unit_code':
                            _this.unitChange(row);
                            break;
                        default:
                            break;
                    }
                }, function (error) {
                });
            });
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], ImportInvoicesDtComponent.prototype, "dataGrid", void 0);
    ImportInvoicesDtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-invoices-dt',
            template: __webpack_require__(/*! ./import-invoices-dt.component.html */ "./src/app/modules/payment-receipt/components/import-invoices-dt/import-invoices-dt.component.html"),
            styles: [__webpack_require__(/*! ./import-invoices-dt.component.scss */ "./src/app/modules/payment-receipt/components/import-invoices-dt/import-invoices-dt.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"],
            _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_14__["PaymentReceiptService"]])
    ], ImportInvoicesDtComponent);
    return ImportInvoicesDtComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/components/import-invoices/import-invoices.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/import-invoices/import-invoices.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"import-invoices\"> \r\n  <form class=\"form-import-invoices\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">IMPORT THÔNG TIN HÓA ĐƠN TỪ EXCEL</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalImportRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"padding-bottom: 0px;\">\r\n      <div class=\"row inport-selector\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"select-file\">\r\n            <div class=\"field field-first\" style=\"width: 44%;\">\r\n              <div class=\"label\">Mẫu hóa đơn</div>\r\n              <div class=\"value\">\r\n                <dx-select-box \r\n                  [items]=\"invoice_releases\" \r\n                  displayExpr=\"name\" \r\n                  [(value)]=\"invoice_release_id\"\r\n                  valueExpr=\"value\" \r\n                  [disabled]=\"disabledInvoiceReleases\"\r\n                  (onValueChanged)=\"onInvoiceReleases($event)\"\r\n                  >\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n            <div class=\"field field-first\" style=\"width: 27%;\">\r\n              <div class=\"label\" style=\"width: 135px;\">Hình thức xuất</div>\r\n              <div class=\"value\">\r\n                <dx-select-box \r\n                  [(value)]=\"htXuat\"\r\n                  displayExpr=\"name\"\r\n                  valueExpr=\"code\"\r\n                  [items]=\"htXuatOptions\"\r\n                  >\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n            <div class=\"field field-first\" *ngIf=\"!isAllowEditInvoiceDate\" style=\"width: 27%;\">\r\n              <div class=\"label\" style=\"width: 135px;\">Ngày xuất hóa đơn</div>\r\n              <div class=\"value\">\r\n                <dx-date-box \r\n                  [(value)]=\"invoice_date\"\r\n                  displayFormat=\"dd/MM/yyyy\"\r\n                  [useMaskBehavior]=\"true\"\r\n                  dateSerializationFormat=\"yyyy-MM-dd HH:mm:ss\"\r\n                  >\r\n                </dx-date-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"select-file\">\r\n            <div class=\"field\">\r\n              <div class=\"label\">Tên file</div>\r\n              <div class=\"value\">\r\n                <dx-text-box [readOnly]=\"true\" [value]=\"fileName\"></dx-text-box>\r\n              </div>\r\n              <div class=\"btn-select-file\" style=\"margin-left: 10px;\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"napDuLieuTuBangKe()\" class=\"support-link\">\r\n                      <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx, .xls\" (change)=\"onFileChanged($event)\" multiple=\"false\" style=\"display: none;\"/>\r\n                      <span>Chọn file</span>\r\n                    </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col-md-5\">\r\n          <div class=\"select-file\">\r\n            <div class=\"field\" *ngIf=\"!isAllowEditInvoiceDate\">\r\n              <div class=\"label\" style=\"width: 135px;\">Ngày xuất hóa đơn</div>\r\n              <div class=\"value\">\r\n                <dx-date-box \r\n                  [(value)]=\"invoice_date\"\r\n                  displayFormat=\"dd/MM/yyyy\"\r\n                  dateSerializationFormat=\"yyyy-MM-dd\"\r\n                  >\r\n                </dx-date-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"note-template-import\">\r\n        <p><span style=\"font-weight: 600; color: red; padding-right: 5px;\">Lưu ý</span> Chức năng này Import danh sách hóa đơn từ file Excel. File này cần</p>\r\n        <p style=\"margin-left: 48px;\">đúng định dạng (Template). Bạn có thể tải Template mẫu Excel <a href=\"javascript:void(0)\" style=\"font-weight: 600\" (click)=\"getFileTemp()\">Tại đây</a></p>\r\n      </div>\r\n      <div class=\"read-file\">\r\n      <dx-button (click)=\"chonDocFile()\" text=\"Đọc file Excel\" type=\"default\" [disabled]=\"isDisReadFile\"></dx-button>\r\n      </div>\r\n      <!-- phần table hiển thị -->\r\n      <div class=\"row invoice-table\">\r\n          <div class=\"col-md-12\">\r\n            <dx-data-grid \r\n              id=\"gridImportInvoice\"\r\n              [dataSource]=\"dataSource\"\r\n              [showBorders]=\"true\"\r\n              [showRowLines]=\"true\"\r\n              [wordWrapEnabled]=\"true\"\r\n              [columnAutoWidth]=\"false\"\r\n              [allowColumnResizing]=\"true\"\r\n              [columnMinWidth]=\"50\"\r\n              [columnResizingMode]=\"true\"\r\n              (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n              (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n              (onContentReady)=\"onContentReady($event)\"\r\n              (onCellPrepared)=\"onCellPrepared($event)\"\r\n              (onRowPrepared)=\"onRowPrepared($event)\"\r\n              (onRowUpdated)=\"onRowUpdated($event)\"\r\n              (onRowRemoving)=\"onRowRemoving($event)\"\r\n              (onKeyDown)=\"onGripKeyDown($event)\">\r\n              <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n              <dxo-editing \r\n                mode=\"cell\" \r\n                [allowUpdating]=\"true\"\r\n                [allowDeleting]=\"true\"\r\n                [useIcons]=\"true\">\r\n              </dxo-editing>\r\n              <dxo-sorting mode=\"false\"></dxo-sorting>\r\n              <dxo-column-fixing [enabled]=\"true\"></dxo-column-fixing>\r\n\r\n              <dxi-column dataField=\"number_of_vouchers\" [width]=\"130\" caption=\"Số phiếu/Chứng từ\" alignment=\"left\" \r\n                [fixed]=\"true\" fixedPosition=\"left\">\r\n                <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"customer_object_code\" [width]=\"70\" caption=\"Cá nhân\" alignment=\"center\" \r\n              [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"customer_code\" [width]=\"100\" caption=\"Mã khách hàng\" alignment=\"center\" \r\n              [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n              \r\n              <dxi-column dataField=\"buyer_tax_code\" [width]=\"100\" caption=\"MST/MNS\" alignment=\"left\" \r\n              [fixed]=\"true\" fixedPosition=\"left\">\r\n              <dxi-validation-rule \r\n                type=\"pattern\"\r\n                [pattern]=\"taxCodePattern\" message=\"Mã số thuế không đúng định dạng\"\r\n              ></dxi-validation-rule></dxi-column>\r\n\r\n              <dxi-column dataField=\"customer_name\" [width]=\"180\" caption=\"Tên đơn vị, tổ chức\" alignment=\"left\" \r\n                [fixed]=\"true\" fixedPosition=\"left\">\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"buyer_name\" [width]=\"120\" caption=\"Người mua hàng\" alignment=\"left\" \r\n              [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"buyer_address\" [width]=\"200\" caption=\"Địa chỉ\" alignment=\"left\">\r\n                  <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"buyer_mobile\" [width]=\"100\" caption=\"Điện thoại\" alignment=\"left\">\r\n                <dxi-validation-rule \r\n                type=\"pattern\"\r\n                [pattern]=\"phonePattern\" message=\"Mã số thuế không đúng định dạng\"\r\n              ></dxi-validation-rule>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"buyer_email\" [width]=\"150\" caption=\"Email nhận hóa đơn\" alignment=\"left\">\r\n              <dxi-validation-rule \r\n                type=\"pattern\"\r\n                [pattern]=\"emailPattern\" message=\"Mã số thuế không đúng định dạng\"></dxi-validation-rule>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"payment_method_name\" [width]=\"100\" caption=\"HTTT\" alignment=\"left\">\r\n                <dxo-lookup [dataSource]=\"select.payment_method_names\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n                <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n              </dxi-column>\r\n              \r\n              <dxi-column dataField=\"bank_account_number\" [width]=\"100\" caption=\"Số tài khoản\" alignment=\"left\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"bank_name\" [width]=\"150\" caption=\"Tên ngân hàng\" alignment=\"left\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"product_code\" caption=\"Mã hàng\" alignment=\"center\" [width]=\"100\">\r\n                <dxo-lookup [dataSource]=\"select.products\" displayExpr=\"code\" valueExpr=\"code\"></dxo-lookup>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"product_name\" [width]=\"150\" caption=\"Tên hàng hóa, dịch vụ\" alignment=\"left\">\r\n                  <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"provisions_on_accounts\" [width]=\"150\" caption=\"Định khoản\" alignment=\"left\">\r\n                <dxo-lookup [dataSource]=\"select.select_provisions_on_accounts\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"unit_code\" caption=\"Đơn vị tính\" [width]=\"100\" alignment=\"center\">\r\n                <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"quantity\" caption=\"Số lượng\" [width]=\"100\" [editorOptions]=\"{ format: formatter.so_luong }\" \r\n              [format]=\"formatter.so_luong\" dataType=\"number\" alignment=\"center\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"price\" caption=\"Đơn giá\" [width]=\"90\" [editorOptions]=\"{ format: formatter.don_gia }\" \r\n              [format]=\"formatter.don_gia\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"amount\" caption=\"Thành tiền\" [width]=\"109\" [editorOptions]=\"{ format: formatter.thanh_tien }\" \r\n              [format]=\"formatter.thanh_tien\" dataType=\"number\" alignment=\"right\">\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"vat\" caption=\"VAT\" [width]=\"90\" alignment=\"center\">\r\n                <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"amount_vat\" caption=\"Tiền VAT\" [width]=\"120\" [editorOptions]=\"{ format: formatter.tien_thue }\" \r\n              [format]=\"formatter.tien_thue\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"amount_after_vat\" caption=\"Tổng tiền\" [width]=\"130\" \r\n              [editorOptions]=\"{ format: formatter.tong_tien }\" \r\n              [format]=\"formatter.tong_tien\" dataType=\"number\" alignment=\"right\">\r\n              <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n              </dxi-column>\r\n              <dxi-column dataField=\"note\" [width]=\"100\" caption=\"Ghi chú\" alignment=\"left\">\r\n              </dxi-column>\r\n              <dxi-column cellTemplate=\"DinhKemFile\" caption=\"Đính kèm file\" [width]=\"250\" alignment=\"center\"></dxi-column>\r\n              \r\n              <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n                <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n              </div>\r\n\r\n              <div *dxTemplate=\"let data of 'DinhKemFile'\">\r\n                <a href=\"javascript:void(0)\" (click)=\"dinhKemFile($event)\" *ngIf=\"data.data.number_of_vouchers != ''\">\r\n                  <input type=\"file\" id=\"file-dinh-kem\" [attr.data-rowindex]=\"data.rowIndex\" accept=\".xlsx, .docx, .doc, .pdf, .xls, .xml\" (change)=\"onDinhKemFile($event)\" multiple=\"false\" style=\"display: none;\"/>\r\n                  <!-- <span><i class=\"fa fa-file\"></i></span> --> \r\n                  Chọn file\r\n                  <p>{{data.data.file_attach_name}}</p>\r\n                </a>\r\n              </div>\r\n              <!-- <dxo-summary >\r\n                <dxi-total-item\r\n                    summaryType=\"custom\" \r\n                    [customizeText]=\"customizeText\"\r\n                    showInColumn=\"amount\">\r\n                </dxi-total-item>\r\n              </dxo-summary> -->\r\n              <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n              <dxo-summary>\r\n                <dxi-total-item\r\n                    name=\"totalAmount\"\r\n                    column=\"amount\"\r\n                    summaryType=\"sum\"\r\n                    [customizeText]=\"customizeText\">\r\n                </dxi-total-item>\r\n                <dxi-total-item\r\n                    name=\"totalAmountVat\"\r\n                    column=\"amount_vat\"\r\n                    summaryType=\"sum\"\r\n                    [customizeText]=\"customizeText\">\r\n                </dxi-total-item>\r\n                <dxi-total-item\r\n                    name=\"totalAmountAfterVat\"\r\n                    column=\"amount_after_vat\"\r\n                    summaryType=\"sum\"\r\n                    [customizeText]=\"customizeText\">\r\n                </dxi-total-item>\r\n              </dxo-summary>\r\n            </dx-data-grid>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7\">\r\n              <div class=\"note-footer\">\r\n                  <p style=\"margin-left: 0;\"><span style=\"font-weight: 500; color: red;\">Ghi chú</span></p>\r\n                  <p>Có thể sửa xóa trực tiếp trên lưới. Click chuột phải để thêm dòng nhập liệu</p>\r\n                  <p><span class=\"mau-vang\"> </span>Màu vàng: Số chứng từ bị trùng với dữ liệu hóa đơn đã xuất</p>\r\n                  <p><span class=\"mau-do\"> </span>Màu đỏ: Thông tin sai định dạng</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n              <div class=\"note-footer\" style=\"text-align: right; margin-right: 50px;\">\r\n                  <p style=\"padding: 8px;\"></p>\r\n                  <p>Số chứng từ hợp lệ: <span style=\"color: seagreen; font-weight: 600\">{{totalInvoice}}</span></p>\r\n                  <p>Số chứng từ bị sai định dạng thông tin: <span style=\"color: red; font-weight: 600\">{{totalErrorInvoice}}</span></p>\r\n                  <p>Số chứng từ bị trùng: <span style=\"color: yellow; font-weight: 600\">{{totalDuplicateInvoice}}</span></p>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        \r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <div class=\"col-md-4\">\r\n        <dx-button *ngIf=\"isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\Xem.png\" text=\"Xem trước hóa đơn\" (click)=\"preview()\" type=\"default\"></dx-button>\r\n        <dx-button *ngIf=\"!isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\Xem.png\" text=\"Xem hóa đơn\" (click)=\"xemHoaDon()\" type=\"default\"></dx-button>\r\n        <dx-button *ngIf=\"!isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\In.png\" text=\"In chuyển đổi\" (click)=\"inChuyenDoi()\" type=\"default\"></dx-button>\r\n      </div>\r\n      <div class=\"col-md-8 btn-right\">\r\n        <dx-button text=\"Quay lại\" type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\" (click)=\"bsModalImportRef.hide()\"></dx-button>\r\n        <dx-button *ngIf=\"isVisibleBtnSubmit\" text=\"Xuất dữ liệu trên lưới ra Excel\" icon=\"assets\\img\\icons\\XuatFile.png\" (click)=\"xuatFile()\" type=\"default\"></dx-button>\r\n        <dx-button *ngIf=\"isVisibleBtnSubmit\" text=\"Ghi tạm\" icon=\"assets\\img\\icons\\GhiTam.png\" (click)=\"submit('LUU')\" type=\"default\"></dx-button>\r\n        <!-- <dx-button *ngIf=\"isVisibleBtnSubmit\"  text=\"Xuất chờ ký\" icon=\"assets\\img\\icons\\XuatHD.png\" (click)=\"submit('CHO_KY')\" type=\"default\" ></dx-button> -->\r\n        <dx-button *ngIf=\"isVisibleBtnSubmit && isAccessExportInv\"  text=\"Xuất hóa đơn\" icon=\"assets\\img\\icons\\XuatHD.png\" (click)=\"submit('XUAT')\" type=\"default\" ></dx-button>\r\n      </div>\r\n        \r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"Quá trình đang xử lý\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopupImport\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>\r\n\r\n<dx-popup \r\n  class=\"popup\" \r\n  [width]=\"500\" \r\n  [height]=\"160\" \r\n  [showTitle]=\"true\" \r\n  title=\"Thông báo\" \r\n  [dragEnabled]=\"false\" \r\n  [closeOnOutsideClick]=\"true\"\r\n  [(visible)]=\"popupCachNapDuLieu\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p>Bạn vui lòng chọn cách nạp dữ liệu: </p>\r\n    <div class=\"text-center\" style=\"margin-top: 25px\">\r\n      <dx-button (click)=\"thayThe($event)\" text=\"Thay thế toàn bộ\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"themTiep($event)\" text=\"Thêm tiếp\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n  \r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/import-invoices/import-invoices.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/import-invoices/import-invoices.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".import-invoices .dx-texteditor{border-radius:0;display:inline-block;margin-right:8px;height:28px;max-height:32px}.import-invoices .select-file .field>div{display:inline-block;vertical-align:middle}.import-invoices .select-file{width:100%;display:inline-block;margin:0}.import-invoices .select-file .field .label{width:90px;margin-right:10px;text-align:right}.import-invoices .select-file .field .value{width:35% !important}.import-invoices .select-file .field.field-first{display:inline-block}.import-invoices .select-file .field.field-first .value{width:calc(100% - 150px) !important}::ng-deep .import-invoices .select-file .field .dx-texteditor{width:100% !important}.support-link{top:-2px;position:relative;padding:5px 25px 7px 25px;background-color:#337ab7;border-color:#2d6da3;color:#fff;text-decoration:none}.support-link.mgr-15{margin-right:15px}.support-link img{margin-right:10px;margin-top:-2px}#auto-input{margin-right:75px}.note-template-import{margin-top:10px;margin-left:52px;display:inline-block;width:39%}.read-file{display:inline-block;margin-left:6px;position:relative;top:-10px}.note-footer{margin-top:10px}.note-footer p{margin-left:20px;margin-bottom:5px}.mau-vang{padding-right:15px;margin-right:10px;background-color:yellow}.mau-do{padding-right:15px;margin-right:10px;background-color:red}::ng-deep #gridImportInvoice{height:400px}::ng-deep .btn-right{padding-right:0}::ng-deep .btn-right .dx-button{float:right}::ng-deep .btn-right .dx-button:last-child{margin-right:8px !important}::ng-deep #gridImportInvoice .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit{width:40px;min-width:20px !important}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-validator.dx-datagrid-invalid .dx-highlight-outline::after{border:2px solid #d9534f}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-cell-modified .dx-highlight-outline::after{border-color:#fff}::ng-deep .form-import-invoices .inport-selector .dx-texteditor-input{padding-bottom:15px}\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/import-invoices/import-invoices.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/import-invoices/import-invoices.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ImportInvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportInvoicesComponent", function() { return ImportInvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ImportInvoicesComponent = /** @class */ (function () {
    function ImportInvoicesComponent(bsModalImportRef, modalImportService, vatService, socketService, authService) {
        this.bsModalImportRef = bsModalImportRef;
        this.modalImportService = modalImportService;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.dataSource = [];
        this.fileName = "";
        this.isDisReadFile = true;
        this.select = {};
        this.isAccessExportInv = false;
        this.formatter = {};
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceModel"](1);
        this.fieldDisable = ["number_of_vouchers", "customer_code", "customer_object_code", "buyer_tax_code", "customer_name", "buyer_name", "buyer_address", "buyer_mobile", "buyer_email", "payment_method_name", "bank_account_number", "bank_name"];
        this.invoice_date = "";
        this.isAllowEditInvoiceDate = this.authService.isAllowEditInvoiceDate();
        this.htXuat = "XuatVaKy";
        this.htXuatOptions = [
            {
                name: "Xuất và ký",
                code: "XuatVaKy"
            },
            {
                name: "Xuất chờ ký",
                code: "XuatChoKy"
            }
        ];
        this.tempKiFile = 0;
        this.coKiSoTapChung = false;
        this.ttDaXuatHoaDon = false; //Trạng thái đã xuất hóa đơn hay chưa
        this.totalInvoice = 0;
        this.totalErrorInvoice = 0;
        this.totalDuplicateInvoice = 0;
        this.countInvoice = 1;
        this.valueProgress = 0;
        this.showPopupImport = false;
        this.stopImport = false;
        this.errorImport = false;
        this.taxCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_7__["pattern"].tax_code;
        this.emailPattern = _config_index__WEBPACK_IMPORTED_MODULE_7__["pattern"].email;
        this.phonePattern = _config_index__WEBPACK_IMPORTED_MODULE_7__["pattern"].phone;
        this.isVisibleBtnSubmit = true;
        this.approveRequired = false;
        this.dataFormGird = [];
        this.disabledInvoiceReleases = false;
        this.invoicesId = [];
        this.confirmCheckPreview = false;
        this.popupCachNapDuLieu = false;
        this.cachNapDuLieu = true;
        this.listColumn = [];
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return 'Hoàn thành: ' + percent + '%';
        };
        this._translate = this.authService.getTranslate();
    }
    ImportInvoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get cấu hình
        this.connectWebsocket();
        this.loadRow(10);
        this.configs.forEach(function (item) {
            if (item.name == "decimal_places_json") {
                _this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(item.value));
            }
            if (item.name == "integrate_parameter") {
                var config = JSON.parse(item.value);
                _this.coKiSoTapChung = config.concentrate_signature.is_concentrate_signature;
            }
            if (item.name == "display_currency") {
                _this.configdisplayCurrency = item.value;
            }
        });
        var configColumnImport = this.configs.filter(function (p) { return p.name == "config_column_import_inv_excel"; })[0];
        if (configColumnImport && configColumnImport.value) {
            this.listColumn = JSON.parse(configColumnImport.value);
        }
        else {
            this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnImportExcel(this._translate);
        }
        if (this.invoice_releases.length) {
            // this.invoice_release_id = this.invoice_releases[0].value; 
            this.template_id = this.invoice_releases[0].template_id;
            this.is_multi_vat = this.invoice_releases[0].is_multi_vat;
        }
        if (this.hoaDonImportChoXuat) {
            this.invoice_date = this.hoaDonImportChoXuat[0].invoice_date ? moment__WEBPACK_IMPORTED_MODULE_8__(this.hoaDonImportChoXuat[0].invoice_date).format('YYYY-MM-DD HH:mm:ss') : "";
            this.invoice_release_id = this.hoaDonImportChoXuat[0].invoice_release_id;
            if (this.hoaDonImportChoXuat[0].status == "GIU_SO") {
                this.disabledInvoiceReleases = true;
            }
            this.layDuLieuTuHoaDonChoXuat();
        }
        var currentUser = this.authService.getCurrentUser();
        var listpermissions = currentUser.user.permissions.split(',');
        var _obj = listpermissions.filter(function (p) { return p == "phe_duyet"; });
        if (_obj.length > 0) {
            this.isAccessExportInv = true;
        }
        else
            this.isAccessExportInv = false;
    };
    ImportInvoicesComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDonImport().subscribe(function (message) {
            var data = message;
            if (data.Status == 'success') {
                if (data.SvcName == "efy_Sign") {
                    // Helper.dowloadFile('test.xml', 'xml', data.Data.Content);
                    if (data.Data.Name == 'hoadon.xml') {
                        _this.goiApiXuatHoaDon(data.Data.Content);
                    }
                    else if (data.Data.Name == 'ten_filek_the_trung-dc-nhi.xml') {
                        _this.xuLiApiKhiXuat();
                    }
                    else {
                        _this.invoice.invoice_files.forEach(function (item) {
                            if (item.file_name == data.Data.Name) {
                                item.file_content = data.Data.Content;
                            }
                        });
                        _this.tempKiFile++;
                        if (_this.tempKiFile == _this.invoice.invoice_files.length) {
                            _this.xuLiApiKhiXuat();
                        }
                    }
                }
            }
            else {
                _this.errorImport = true;
                _this.showPopupImport = false;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(data.Description, 'error');
            }
        });
    };
    ImportInvoicesComponent.prototype.layDuLieuTuHoaDonChoXuat = function () {
        var _this = this;
        var data = [];
        var ids = "";
        this.hoaDonImportChoXuat.forEach(function (invoice) {
            // console.log(element)
            for (var i = 0; i < invoice.invoice_products.length; i++) {
                var rowInvoice = new Object;
                invoice.invoice_products = invoice.invoice_products.sort(function (itemA, itemB) {
                    return itemA.order - itemB.order;
                });
                var product = invoice.invoice_products[i];
                _this.invoice_release_id = invoice.invoice_release_id;
                if (i == 0) {
                    _this.invoicesId.push(invoice.id);
                    rowInvoice["statusData"] = "INVALID";
                    rowInvoice["id"] = invoice.id;
                    rowInvoice["number_of_vouchers"] = invoice.number_of_vouchers;
                    rowInvoice["customer_code"] = invoice.customer_code;
                    rowInvoice["customer_object_code"] = invoice.customer_object_code == "CA_NHAN" ? true : false;
                    rowInvoice["buyer_tax_code"] = invoice.buyer_tax_code;
                    rowInvoice["customer_name"] = invoice.customer_name;
                    rowInvoice["buyer_name"] = invoice.buyer_name;
                    rowInvoice["buyer_address"] = invoice.buyer_address;
                    rowInvoice["buyer_mobile"] = invoice.buyer_mobile;
                    rowInvoice["buyer_email"] = invoice.buyer_email;
                    rowInvoice["payment_method_name"] = invoice.payment_method_name;
                    rowInvoice["payment_method_view_name"] = invoice.payment_method_view_name;
                    rowInvoice["bank_account_number"] = invoice.bank_account_number;
                    rowInvoice["bank_name"] = invoice.bank_name;
                }
                else {
                    rowInvoice["number_of_vouchers"] = "";
                    rowInvoice["customer_code"] = "";
                    rowInvoice["customer_object_code"] = false;
                    rowInvoice["buyer_tax_code"] = "";
                    rowInvoice["customer_name"] = "";
                    rowInvoice["buyer_name"] = "";
                    rowInvoice["buyer_address"] = "";
                    rowInvoice["buyer_mobile"] = "";
                    rowInvoice["buyer_email"] = "";
                    rowInvoice["payment_method_name"] = "";
                    rowInvoice["payment_method_view_name"] = "";
                    rowInvoice["bank_account_number"] = "";
                    rowInvoice["bank_name"] = "";
                    rowInvoice["dataType"] = "HANG_HOA";
                    rowInvoice["productNumberOfVouchers"] = invoice.number_of_vouchers;
                }
                rowInvoice["product_code"] = product.product_code;
                rowInvoice["product_name"] = product.product_name;
                // if (invoice["product_code"] != "") {
                //   let _obj = this.select.products.filter(p => p.code == invoice["product_code"])[0];
                //   if (!_obj) {
                //     let _objPush = {
                //       code: invoice["product_code"],
                //       name: invoice["product_name"],
                //       mhvth: invoice["product_code"] + ": " + invoice["product_name"],
                //     }
                //     this.select.products.push(_objPush);
                //   }
                // }
                rowInvoice["provisions_on_accounts"] = product.provisions_on_accounts;
                rowInvoice["unit_code"] = product.unit_code;
                rowInvoice["unit_name"] = product.unit_name;
                rowInvoice["quantity"] = product.quantity;
                rowInvoice["price"] = product.price;
                rowInvoice["amount"] = product.amount;
                rowInvoice["vat"] = product.vat;
                rowInvoice["amount_vat"] = product.amount_vat;
                rowInvoice["amount_after_vat"] = product.amount_after_vat;
                rowInvoice["order"] = product.order;
                rowInvoice["view_order"] = product.view_order;
                data.push(rowInvoice);
            }
        });
        this.dataSource = data;
        this.checkStatusData();
        // if(data.length < 10){
        //   this.loadRow(10-data.length);
        // }
    };
    ImportInvoicesComponent.prototype.loadRow = function (countRow) {
        var _this = this;
        var isPepsi = false;
        var tempRow = this.frmData.tempImportRow(countRow, isPepsi);
        tempRow.forEach(function (element) {
            _this.dataSource.push(element);
        });
    };
    ImportInvoicesComponent.prototype.napDuLieuTuBangKe = function () {
        document.getElementById("file-bang-ke").click();
        this.cachNapDuLieu = false;
    };
    ImportInvoicesComponent.prototype.dinhKemFile = function (evt) {
        evt.srcElement.firstChild.click();
        // document.getElementById("file-dinh-kem").click();
        // console.log(e)
    };
    ImportInvoicesComponent.prototype.log = function (val) { console.log(val); };
    ImportInvoicesComponent.prototype.onDinhKemFile = function (e) {
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
                var base64result = fileReader.result.toString().split(',')[1];
                fileAttachData.unshift({
                    type: "BK",
                    file_name: file.name,
                    file_content: base64result,
                });
                if (document.getElementById('list-file')) {
                    document.getElementById('list-file').scrollTop = 0;
                }
                _this.dataSource[rowIndex]["file_attach"] = fileAttachData;
                _this.dataSource[rowIndex]["file_attach_name"] = file.name;
            };
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("File bạn chọn không đúng định dạng xls, xlsx, doc, docx, pdf, xml", "error");
        }
    };
    ImportInvoicesComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        var formatter = new Intl.NumberFormat('ja-JP');
        var totalMoney = formatter.format(parseFloat(e.value));
        return totalMoney;
    };
    ImportInvoicesComponent.prototype.onFileChanged = function (evt) {
        this.target = (evt.target);
        this.fileName = this.target.files[0].name;
        // this.fileSize = target.files[0].size/1024;
        if (this.target.files.length !== 1) {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Không thể chọn nhiều file', 'error');
            throw new Error('Không thể chọn nhiều file');
        }
        ;
        this.isDisReadFile = false;
    };
    ImportInvoicesComponent.prototype.addRow = function () {
        var len, order;
        if (this.dataSource.length >= 1) {
            len = this.dataSource.length;
            order = this.dataSource[len - 1].order + 1;
        }
        else {
            order = 1;
        }
        var data = this.frmData.addImportRow(order, order);
        // console.log(data)
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ImportInvoicesComponent.prototype.getFileTemp = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var arrColumn = this.listColumn.filter(function (p) { return p.is_visible == true; });
        var columnsName = arrColumn.map(function (e) { return e.column_code; });
        var data = {
            invoice: {
                columns: columnsName
            }
        };
        this.vatService.getFileTemmpImportInvoices(data).subscribe(function (res) {
            if (res.status == 'success') {
                var file = res.data.product;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Xuất file Excel thành công", 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(res.message, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
        });
    };
    ImportInvoicesComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm("Cảnh báo: Quá trình nạp dữ liệu sẽ dừng lại nếu bạn đóng cửa xổ này");
        }
        if (r) {
            if (this.subXuatHoaDon) {
                this.subXuatHoaDon.unsubscribe();
            }
            if (this.subLuuChoXuat) {
                this.subLuuChoXuat.unsubscribe();
            }
            this.valueProgress = 0;
        }
        else {
            e.cancel = true;
        }
    };
    ImportInvoicesComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ImportInvoicesComponent.prototype.getDataFromGird = function () {
        var _this = this;
        if (this.dataSource.length > 0) {
            this.dataSource.forEach(function (row) {
                if (row.number_of_vouchers || row.productNumberOfVouchers) {
                    _this.dataFormGird.push(row);
                }
            });
        }
    };
    ImportInvoicesComponent.prototype.chonDocFile = function () {
        this.popupCachNapDuLieu = true;
    };
    ImportInvoicesComponent.prototype.thayThe = function (e) {
        this.cachNapDuLieu = false;
        this.popupCachNapDuLieu = false;
        this.readFile();
    };
    ImportInvoicesComponent.prototype.themTiep = function (e) {
        this.cachNapDuLieu = true;
        this.popupCachNapDuLieu = false;
        this.readFile();
    };
    ImportInvoicesComponent.prototype.readFile = function () {
        var _this = this;
        this.isDisReadFile = true;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_6__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].sheet_to_json(ws, { header: "A", range: 5 }));
            var _arrData = [];
            if (data && data[0]) {
                if (data[0].A != "number_of_vouchers") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("File mẫu không đúng định dạng", "error");
                    return false;
                }
                else {
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
            var fileBangKe = document.getElementById("file-bang-ke");
            fileBangKe.value = "";
            _this.dataExcelFile = _arrData;
            _this.fillData(_this.dataExcelFile);
            //  this.countAll = data.length;
            //  this.showPopupImport = true;
        };
        reader.readAsBinaryString(this.target.files[0]);
    };
    ImportInvoicesComponent.prototype.fillData = function (fileData) {
        var _this = this;
        this.getDataFromGird();
        var data = [];
        var count = 2;
        var numberOfVouchers = [];
        fileData.forEach(function (element) {
            var invoice = new Object;
            if (element.number_of_vouchers) {
                invoice["statusData"] = "INVALID";
                invoice["customer_code"] = element.customer_code ? element.customer_code : "";
                invoice["customer_object_code"] = element.customer_object_code && (element.customer_object_code == "amount_after_vat" || element.customer_object_code == "x") ? true : false;
                invoice["buyer_tax_code"] = element.buyer_tax_code ? element.buyer_tax_code : "";
                invoice["customer_name"] = element.customer_name ? element.customer_name : "";
                invoice["buyer_name"] = element.buyer_name ? element.buyer_name : "";
                invoice["buyer_address"] = element.buyer_address ? element.buyer_address : "";
                invoice["buyer_mobile"] = element.buyer_mobile ? element.buyer_mobile : "";
                invoice["buyer_email"] = element.buyer_email ? element.buyer_email : "";
                invoice["payment_method_name"] = element.payment_method_name ? _this.getPaymentMethodCodeByName(element.payment_method_name) : "";
                invoice["payment_method_view_name"] = element.payment_method_name ? element.payment_method_name : "";
                invoice["bank_account_number"] = element.bank_account_number ? element.bank_account_number : "";
                invoice["bank_name"] = element.bank_name ? element.bank_name : "";
                invoice["product_code"] = element.product_code ? element.product_code : "";
                invoice["product_name"] = element.product_name ? element.product_name : "";
                if (invoice["product_code"] != "") {
                    var _obj = _this.select.products.filter(function (p) { return p.code == invoice["product_code"]; })[0];
                    if (!_obj) {
                        var _objPush = {
                            code: invoice["product_code"],
                            name: invoice["product_name"],
                            mhvth: invoice["product_code"] + ": " + invoice["product_name"],
                        };
                        _this.select.products.push(_objPush);
                    }
                }
                invoice["provisions_on_accounts"] = element.provisions_on_accounts ? _this.checkProvisionsOnAccounts(element.provisions_on_accounts) : "";
                invoice["provisions_on_accounts_name"] = element.provisions_on_accounts ? element.provisions_on_accounts : "";
                invoice["unit_code"] = element.unit_code ? _this.getUnitCodeByUnitName(element.unit_code) : "";
                invoice["unit_name"] = element.unit_code ? element.unit_code : "";
                invoice["quantity"] = element.quantity ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.quantity) : null;
                invoice["price"] = element.price ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.price) : null;
                invoice["amount"] = element.amount && element.amount.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount) : null;
                invoice["vat"] = element.vat ? _this.checkVat(element.vat) : "";
                invoice["vat_name"] = element.vat ? element.vat : "";
                invoice["amount_vat"] = element.amount_vat && element.amount_vat.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_vat) : null;
                invoice["amount_after_vat"] = element.amount_after_vat && element.amount_after_vat.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_after_vat) : null;
                invoice["note"] = element.note ? element.note : "";
                if (_this.checkNumberOfVouchers(element.number_of_vouchers, data) != -1) {
                    invoice["dataType"] = "HANG_HOA";
                    invoice["number_of_vouchers"] = "";
                    invoice["productNumberOfVouchers"] = element.number_of_vouchers;
                    invoice["order"] = count;
                    invoice["view_order"] = count;
                    count++;
                }
                else {
                    invoice["number_of_vouchers_backup"] = element.number_of_vouchers ? element.number_of_vouchers : "";
                    invoice["number_of_vouchers"] = element.number_of_vouchers ? element.number_of_vouchers : "";
                    numberOfVouchers.push(invoice["number_of_vouchers"]);
                    invoice["order"] = 1;
                    invoice["view_order"] = 1;
                    count = 2;
                }
                data.push(invoice);
            }
        });
        this.vatService.getInvoicesHaveNumberOfVouchers(numberOfVouchers).subscribe(function (res) {
            if (res.status == "success") {
                _this.invoicesHaveNumberOfVouchers = res.data.invoices;
                _this.checkDuplicateNumberOfVouchers(data);
                _this.checkStatusData();
                // if(data.length < 10){
                //   this.loadRow(10-data.length);
                // }
                _this.dataGrid.instance.refresh();
            }
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
        });
    };
    ImportInvoicesComponent.prototype.checkVat = function (vat) {
        if (vat == "Không chịu thuế" || vat == "không chịu thuế") {
            return -1;
        }
        else {
            return parseInt(vat);
        }
    };
    ImportInvoicesComponent.prototype.checkDuplicateNumberOfVouchers = function (data) {
        if (this.cachNapDuLieu) {
            var _loop_1 = function (i) {
                var row = data[i];
                var foundOnDatabase = this_1.invoicesHaveNumberOfVouchers.filter(function (item) {
                    return item.number_of_vouchers == row.number_of_vouchers;
                });
                var foundOnGird = this_1.dataFormGird.filter(function (item) {
                    return item.number_of_vouchers == row.number_of_vouchers;
                });
                if (foundOnDatabase.length > 0) {
                    data[i].statusData = "ERROR_DUPLICATE_DATABASE";
                }
                if (foundOnGird.length > 0 && data[i].number_of_vouchers && data[i].statusData != "ERROR_DUPLICATE_DATABASE") {
                    data[i].statusData = "ERROR_DUPLICATE_ONGIRD";
                }
            };
            var this_1 = this;
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
            this.dataSource = this.dataFormGird.concat(data);
        }
        else {
            var _loop_2 = function (i) {
                var row = data[i];
                var foundOnDatabase = this_2.invoicesHaveNumberOfVouchers.filter(function (item) {
                    return item.number_of_vouchers == row.number_of_vouchers;
                });
                if (foundOnDatabase.length > 0) {
                    data[i].statusData = "ERROR_DUPLICATE_DATABASE";
                }
            };
            var this_2 = this;
            for (var i = 0; i < data.length; i++) {
                _loop_2(i);
            }
            this.dataSource = data;
        }
        this.dataFormGird = [];
    };
    ImportInvoicesComponent.prototype.checkNumberOfVouchers = function (numberOfVouchers, invoiceSArr) {
        var foundNumberOfVouchers = invoiceSArr.findIndex(function (item) {
            return item.number_of_vouchers == numberOfVouchers;
        });
        return foundNumberOfVouchers;
    };
    ImportInvoicesComponent.prototype.checkStatusData = function () {
        var invalid = this.dataSource.filter(function (item) {
            return item.number_of_vouchers && item.statusData == "INVALID";
        });
        var errorDuplicateDatabase = this.dataSource.filter(function (item) {
            return item.number_of_vouchers && item.statusData == "ERROR_DUPLICATE_DATABASE";
        });
        var errorDuplicateOngird = this.dataSource.filter(function (item) {
            return item.number_of_vouchers && item.statusData == "ERROR_DUPLICATE_ONGIRD";
        });
        var errorData = this.dataSource.filter(function (item) {
            return item.statusData == "DATA_ERROR";
        });
        this.totalInvoice = invalid.length;
        this.totalDuplicateInvoice = errorDuplicateDatabase.length;
        this.totalErrorInvoice = errorDuplicateOngird.length + errorData.length;
    };
    ImportInvoicesComponent.prototype.formatDecimalColumn = function (number) {
        if (number == 0) {
            return '0,###';
        }
        else {
            return '0,###.' + '0'.repeat(number);
        }
    };
    ImportInvoicesComponent.prototype.onContextMenuPreparing = function (e) {
        var _this = this;
        if (e.row.rowType === "data") {
            e.items = [{
                    text: "Thêm khách hàng",
                    onItemClick: function () {
                        _this.addRow();
                    }
                },
                {
                    text: "Thêm hàng hóa",
                    onItemClick: function () {
                        if (e.row.data.number_of_vouchers || e.row.data.productNumberOfVouchers) {
                            var temp_1 = e.row.data.number_of_vouchers ? e.row.data.number_of_vouchers : e.row.data.productNumberOfVouchers;
                            var products = _this.dataSource.filter(function (item) {
                                return item.number_of_vouchers == temp_1 || item.productNumberOfVouchers == temp_1;
                            });
                            var data = _this.frmData.addImportRow(products.length + 1, products.length + 1);
                            data.dataType = "HANG_HOA";
                            if (e.row.data.number_of_vouchers) {
                                data["productNumberOfVouchers"] = e.row.data.number_of_vouchers;
                                _this.dataSource.splice(e.rowIndex + products.length, 0, data);
                            }
                            else {
                                data["productNumberOfVouchers"] = e.row.data.productNumberOfVouchers;
                                var index = _this.dataSource.map(function (e) { return e.number_of_vouchers; }).indexOf(e.row.data.number_of_vouchers);
                                _this.dataSource.splice(index + products.length - 1, 0, data);
                            }
                            _this.dataGrid.instance.refresh();
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Bạn chưa nhập số phiếu / chứng từ", "error");
                        }
                    }
                }];
        }
    };
    ImportInvoicesComponent.prototype.onInvoiceReleases = function (e) {
        var selectedItem = e.component.option("selectedItem");
        this.template_id = selectedItem.template_id;
        this.invoice_release_id = e.value;
        this.is_multi_vat = selectedItem.is_multi_vat;
    };
    ImportInvoicesComponent.prototype.onContentReady = function (e) {
        e.component.columnOption("command:edit", {
            visibleIndex: -1
        });
    };
    ImportInvoicesComponent.prototype.onEditorPreparing = function (e) {
        if (e.row.data) {
            if (e.row.data.dataType && e.row.data.dataType == "HANG_HOA" && this.fieldDisable.includes(e.dataField)) {
                e.editorOptions.disabled = true;
            }
        }
    };
    ImportInvoicesComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            if (e.data.dataType && e.data.dataType == "HANG_HOA" && this.fieldDisable.includes(e.column.dataField)) {
                e.cellElement.style.background = "#F1F1F1";
            }
            if (e.data.statusData == "ERROR_DUPLICATE_ONGIRD" && e.column.dataField == "number_of_vouchers") {
                e.cellElement.style.background = "#FF0000";
            }
            if (e.data.number_of_vouchers) {
                switch (e.column.dataField) {
                    case "buyer_address":
                        this.setStatusDataOnCellPrepared(e, "Địa chỉ không được để trống");
                        break;
                    case "payment_method_name":
                        this.setStatusDataOnCellPrepared(e, "Hình thức thanh toán không được để trống");
                        break;
                    case "product_name":
                        this.setStatusDataOnCellPrepared(e, "Tên hàng hóa không được để trống");
                        break;
                    case "amount":
                        this.setStatusDataOnCellPrepared(e, "Thành tiền không được để trống");
                        break;
                    case "amount_after_vat":
                        this.setStatusDataOnCellPrepared(e, "Tổng tiền không được để trống");
                        break;
                    case "customer_name":
                        if (e.data.customer_object_code == false)
                            this.setStatusDataOnCellPrepared(e, "Tên đơn vị tổ chức không được để trống");
                        break;
                    case "buyer_name":
                        if (e.data.customer_object_code == true)
                            this.setStatusDataOnCellPrepared(e, "Tên khách hàng không được để trống");
                        break;
                    default:
                        break;
                }
            }
            else if (e.data.number_of_vouchers == "" && e.data.dataType == "KHACH_HANG" && e.data.product_name && e.column.dataField == "number_of_vouchers") {
                this.setStatusDataOnCellPrepared(e, "Số phiếu, chứng từ không được để trống");
            }
        }
    };
    ImportInvoicesComponent.prototype.setStatusDataOnCellPrepared = function (e, message) {
        if (!e.value) {
            e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
            e.cellElement.title = message;
            if (e.data.statusData != "ERROR_DUPLICATE_DATABASE" && e.data.statusData != "ERROR_DUPLICATE_ONGIRD")
                e.data.statusData = "DATA_ERROR";
        }
        else if (e.value && e.data.statusData == "DATA_ERROR") {
            e.data.statusData = "INVALID";
        }
    };
    ImportInvoicesComponent.prototype.onRowRemoving = function (e) {
        var _this = this;
        var number_of_vouchers = e.data.number_of_vouchers;
        var indexRemove = [];
        this.dataSource.forEach(function (row) {
            if (row.productNumberOfVouchers == number_of_vouchers) {
                indexRemove.push(_this.dataSource.indexOf(row));
                // if(row.statusData){
                //   if(row.statusData == "ERROR_DUPLICATE_DATABASE") this.totalDuplicateInvoice--;
                //   if(row.statusData == "ERROR_DUPLICATE_ONGIRD") this.totalErrorInvoice--;
                // }
            }
        });
        for (var i = indexRemove.length - 1; i >= 0; i--) {
            this.dataSource.splice(indexRemove[i], 1);
        }
        this.checkStatusData();
        this.dataGrid.instance.refresh();
    };
    ImportInvoicesComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code == "Delete") {
            // console.log(e.event.srcElement);
            e.event.srcElement.value = null;
            // e.event.srcElement.parentNode.parentNode.querySelector('input').value = null;
        }
    };
    ImportInvoicesComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.statusData == "ERROR_DUPLICATE_DATABASE" && e.data.number_of_vouchers) {
                e.rowElement.style.background = "#FFFF00";
            }
            else {
                e.rowElement.style.background = "";
            }
        }
        this.checkStatusData();
    };
    ImportInvoicesComponent.prototype.onRowUpdated = function (e) {
        var column = Object.keys(e.data)[0];
        switch (column) {
            case "number_of_vouchers":
                this.onNumberOfVouchers(e);
                break;
            case "product_code":
                this.productCodeChange(e);
                this.dataGrid.instance.refresh();
                break;
            case "quantity":
                this.priceChange(e);
                this.dataGrid.instance.refresh();
                break;
            case "price":
                this.priceChange(e);
                this.dataGrid.instance.refresh();
                break;
            case "vat":
                this.vatChange(e);
                this.dataGrid.instance.refresh();
                break;
            case "amount":
                this.amountChange(e);
                this.dataGrid.instance.refresh();
                break;
            case "amount_vat":
                this.priceChange(e);
                this.dataGrid.instance.refresh();
                break;
            case "amount_after_vat":
                this.priceChange(e);
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
        this.checkStatusData();
        // this.dataGrid.instance.saveEditData();
    };
    ImportInvoicesComponent.prototype.onNumberOfVouchers = function (e) {
        var _this = this;
        var numberOfVouchers = e.data.number_of_vouchers;
        if (e.key.number_of_vouchers_backup) {
            for (var i = 0; i < this.dataSource.length; i++) {
                var row = this.dataSource[i];
                if (row.productNumberOfVouchers && row.productNumberOfVouchers == e.key.number_of_vouchers_backup) {
                    this.dataSource[i].productNumberOfVouchers = numberOfVouchers;
                }
            }
            e.key.number_of_vouchers_backup = numberOfVouchers;
        }
        if (numberOfVouchers != "") {
            this.vatService.getInvoicesHaveNumberOfVouchers([numberOfVouchers]).subscribe(function (res) {
                var dupInvoices = res.data.invoices;
                if (dupInvoices.length > 0) {
                    e.key.statusData = "ERROR_DUPLICATE_DATABASE";
                    // this.totalDuplicateInvoice++;
                    // if (this.totalInvoice > 0) this.totalInvoice--
                }
                else {
                    if (e.key.statusData = "ERROR_DUPLICATE_DATABASE") {
                        e.key.statusData = "INVALID";
                        // if (this.totalDuplicateInvoice > 0) this.totalDuplicateInvoice--;
                    }
                    // this.totalInvoice++;
                }
                var foundOnGird = _this.dataSource.filter(function (item) {
                    return item.number_of_vouchers == numberOfVouchers;
                });
                if (foundOnGird.length > 1 && e.key.statusData != "ERROR_DUPLICATE_DATABASE") {
                    e.key.statusData = "ERROR_DUPLICATE_ONGIRD";
                }
                _this.dataGrid.instance.refresh();
            });
        }
    };
    //Thay đổi cột mã hàng
    ImportInvoicesComponent.prototype.productCodeChange = function (e) {
        var _this = this;
        this.select.products.some(function (item) {
            if (item.code == e.data.product_code) {
                e.key.product_name = item.name;
                e.key.unit_code = _this.checkUnitCode(item.unit_code);
                e.key.quantity = null;
                e.key.price = item.price ? parseFloat(item.price) : item.price;
                e.key.amount = item.price ? parseFloat(item.price) : 0;
                e.key.vat = item.vat ? parseFloat(item.vat) : null;
                e.key.amount_vat = (e.key.vat >= 0) ? _this.caculatorAmountVat(e.key.amount, e.key.vat) : null;
                e.key.amount_after_vat = e.key.amount + e.key.amount_vat;
            }
        });
    };
    ImportInvoicesComponent.prototype.priceChange = function (e) {
        var quantity = e.key.quantity || 1;
        var price = e.key.price || 0;
        if (price != null) {
            e.key.amount = e.key.price * quantity;
            e.key.amount_vat = (e.key.vat >= 0) ? this.caculatorAmountVat(e.key.amount, e.key.vat) : null;
            e.key.amount_after_vat = e.key.amount + e.key.amount_vat;
        }
    };
    ImportInvoicesComponent.prototype.vatChange = function (e) {
        e.key.amount_vat = (e.key.vat >= 0) ? this.caculatorAmountVat(e.key.amount, e.key.vat) : null;
        e.key.amount_after_vat = e.key.amount + e.key.amount_vat;
    };
    ImportInvoicesComponent.prototype.amountChange = function (e) {
        if (!e.key.quantity && !e.key.price) {
            e.key.amount_after_vat = e.key.amount;
        }
        else {
            var quantity = e.key.quantity || 1;
            var price = e.key.price || 0;
            if (price != null) {
                e.key.amount = e.key.price * quantity;
                e.key.amount_vat = (e.key.vat >= 0) ? this.caculatorAmountVat(e.key.amount, e.key.vat) : null;
                e.key.amount_after_vat = e.key.amount + e.key.amount_vat;
            }
        }
    };
    ImportInvoicesComponent.prototype.checkValidNumberOfVouchers = function () {
        this.dataSource.forEach(function (row) {
            if (row.number_of_vouchers == "") {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Số phiếu, chứng từ không được để trống", "error");
            }
            else {
            }
        });
    };
    ImportInvoicesComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code == unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    ImportInvoicesComponent.prototype.checkProvisionsOnAccounts = function (name) {
        var found = this.select.select_provisions_on_accounts.find(function (element) {
            return element.name === name;
            ;
        });
        var code = "";
        if (found) {
            code = found.code;
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Định khoản chưa có trong danh mục", "error");
        }
        return code;
    };
    ImportInvoicesComponent.prototype.getFormatterToNumber = function (formatter) {
        var s1 = formatter.replace("0,###", "");
        if (s1 == "") {
            return 0;
        }
        else {
            var s2 = s1.replace(".", "");
            return s2.split("").length;
        }
    };
    ImportInvoicesComponent.prototype.caculatorAmountVat = function (amount, vat) {
        var temp = amount / 100 * vat;
        return this.roundNumber(temp, 5);
    };
    ImportInvoicesComponent.prototype.roundNumber = function (number, n) {
        if (number == null) {
            return number;
        }
        else {
            var p = Math.pow(10, n);
            return Math.round(number * p) / p;
        }
    };
    ImportInvoicesComponent.prototype.getUnitCodeByUnitName = function (unitName) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].name == unitName) {
                return items[i].code;
            }
        }
        return null;
    };
    ImportInvoicesComponent.prototype.getPaymentMethodCodeByName = function (payment_method_name) {
        var items = this.select.payment_method_names;
        for (var i = 0; i < items.length; i++) {
            if (items[i].name == payment_method_name) {
                return items[i].code;
            }
        }
        return null;
    };
    ImportInvoicesComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        var status;
        if (!this.invoice.id && !this.invoice.invoice_number)
            status = 'THEM_MOI';
        if (this.invoice.id && !this.invoice.invoice_number)
            status = 'GHI_TAM';
        if (this.invoice.id && this.invoice.invoice_number)
            status = 'GIU_SO';
        if (status == 'THEM_MOI') {
            var sub_1 = this.vatService.ghiTam(this.invoice, true).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.invoice_number = rs.data.invoice_number;
                    _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.invoice.id = rs.data.id;
                    _this.invoicesId.push(rs.data.id);
                    //demo kí số vào file
                    if (_this.coKiSoTapChung) {
                        _this.goiApiXuatHoaDon(Base64.encode(_core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].createXMLInvoiceFile(_this.invoice, _this.invoice_releases, rs.data.invoice_date)));
                    }
                    else {
                        _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, Base64.encode(_core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].createXMLInvoiceFile(_this.invoice, _this.invoice_releases, rs.data.invoice_date)));
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                sub_1.unsubscribe();
            });
        }
        else if (status == 'GHI_TAM') {
            var sub_2 = this.vatService.edit(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.invoice_number = rs.data.invoice_number;
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    //demo kí số vào file
                    if (_this.coKiSoTapChung) {
                        _this.goiApiXuatHoaDon(Base64.encode(_core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].createXMLInvoiceFile(_this.invoice, _this.invoice_releases, rs.data.invoice_date)));
                    }
                    else {
                        _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, Base64.encode(_core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].createXMLInvoiceFile(_this.invoice, _this.invoice_releases, rs.data.invoice_date)));
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                sub_2.unsubscribe();
            });
        }
        else if (status == 'GIU_SO') {
            var sub_3 = this.vatService.edit(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    //demo kí số vào file
                    if (_this.coKiSoTapChung) {
                        _this.goiApiXuatHoaDon(Base64.encode(_core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].createXMLInvoiceFile(_this.invoice, _this.invoice_releases, rs.data.invoice_date)));
                    }
                    else {
                        _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, Base64.encode(_core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].createXMLInvoiceFile(_this.invoice, _this.invoice_releases, rs.data.invoice_date)));
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                sub_3.unsubscribe();
            });
        }
    };
    ImportInvoicesComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.subXuatHoaDon = this.vatService.xuatHoaDon({
            id: this.invoice.id,
            xml_string: xml_string
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                // this.formInvoice.readonlyAllForm();
                _this.ttDaXuatHoaDon = true;
                _this.valueProgress += percentComplete;
                if (_this.countInvoice < _this.totalInvoice) {
                    _this.countInvoice++;
                    _this.xuatHoaDon();
                }
                else if (_this.countInvoice == _this.totalInvoice) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Xuất hóa đơn thành công', 'success');
                    _this.isVisibleBtnSubmit = false;
                    _this.showPopupImport = false;
                }
            }
            else {
                _this.showPopupImport = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        });
    };
    ImportInvoicesComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        this.invoice = this.invoicesArr[this.countInvoice - 1];
        if (this.coKiSoTapChung) {
            this.xuLiApiKhiXuat();
        }
        else {
            if (this.invoice && this.invoice.invoice_files.length) {
                this.invoice.invoice_files.forEach(function (item) {
                    _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, item.file_content, item.file_name, item.file_name.split('.').pop(), true, _this.invoice_date);
                });
            }
            else {
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXA+PC90ZW1wPg==', 'ten_filek_the_trung-dc-nhi.xml', '//temp');
            }
        }
        this.tempKiFile = 0;
    };
    ImportInvoicesComponent.prototype.xuatChoKy = function () {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.invoice = this.invoicesArr[this.countInvoice - 1];
        this.subLuuChoXuat = this.vatService.xuatChoKy(this.invoice).subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.invoice.id = rs.data.id;
                _this.valueProgress += percentComplete;
                if (_this.countInvoice < _this.totalInvoice) {
                    _this.countInvoice++;
                    _this.xuatChoKy();
                }
                else if (_this.countInvoice == _this.totalInvoice) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Xuât chờ ký hóa đơn thành công', 'success');
                    _this.showPopupImport = false;
                    _this.bsModalImportRef.hide();
                }
            }
            else {
                _this.showPopupImport = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        });
    };
    ImportInvoicesComponent.prototype.luuChoXuat = function () {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.invoice = this.invoicesArr[this.countInvoice - 1];
        if (this.invoice.id) {
            this.subLuuChoXuat = this.vatService.edit(this.invoice.id, this.invoice).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.id = rs.data.id;
                    _this.valueProgress += percentComplete;
                    if (_this.countInvoice < _this.totalInvoice) {
                        _this.countInvoice++;
                        _this.luuChoXuat();
                    }
                    else if (_this.countInvoice == _this.totalInvoice) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Cập nhật hóa đơn lưu chờ xuất hóa đơn thành công', 'success');
                        _this.showPopupImport = false;
                        _this.bsModalImportRef.hide();
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            });
        }
        else {
            this.subLuuChoXuat = this.vatService.ghiTam(this.invoice).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.id = rs.data.id;
                    _this.valueProgress += percentComplete;
                    if (_this.countInvoice < _this.totalInvoice) {
                        _this.countInvoice++;
                        _this.luuChoXuat();
                    }
                    else if (_this.countInvoice == _this.totalInvoice) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Lưu chờ xuất hóa đơn thành công', 'success');
                        _this.showPopupImport = false;
                        _this.bsModalImportRef.hide();
                    }
                }
                else {
                    _this.showPopupImport = false;
                    _this.errorImport = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            });
        }
    };
    ImportInvoicesComponent.prototype.xuatFile = function () {
        var invoices = [];
        this.dataSource.forEach(function (element) {
            if (element.number_of_vouchers) {
                var invoice = {};
                invoice["number_of_vouchers"] = element.number_of_vouchers; // số phiếu chứng từ
                invoice["customer_code"] = element.customer_code; //mã đơn vị (mã khách hàng)
                invoice["customer_object_code"] = element.customer_object_code ? "CA_NHAN" : "DOANH_NGHIEP"; //Mã loại hóa đơn
                invoice["buyer_tax_code"] = element.buyer_tax_code; //Mã số thuế
                invoice["customer_name"] = element.customer_name; //Tên đơn vị (Tên khách hàng)
                invoice["buyer_name"] = element.buyer_name; //Tên người mua
                invoice["buyer_mobile"] = element.buyer_mobile; //Điện thoại liên hệ
                invoice["buyer_email"] = element.buyer_email; //Email
                invoice["buyer_address"] = element.buyer_address; //Địa chỉ
                invoice["payment_method_name"] = element.payment_method_view_name; //Hình thức thanh toán
                invoice["bank_account_number"] = element.bank_account_number; //Số tài khoản
                invoice["bank_name"] = element.bank_name; //thuộc ngân hàng
                var product = {
                    product_name: element.product_name,
                    provisions_on_accounts_name: element.provisions_on_accounts_name,
                    unit_name: element.unit_name,
                    quantity: element.quantity,
                    price: element.price,
                    amount: element.amount,
                    vat_name: element.vat_name,
                    amount_vat: element.amount_vat,
                    amount_after_vat: element.amount_after_vat,
                    discount: "",
                    amount_discount: null
                };
                invoice["invoice_products"] = [];
                invoice["invoice_products"].push(product);
                invoices.push(invoice);
            }
            if (element.productNumberOfVouchers) {
                // console.log(element)
                var invoiceProduct = {
                    product_name: element.product_name,
                    provisions_on_accounts_name: element.provisions_on_accounts_name,
                    unit_name: element.unit_name,
                    quantity: element.quantity,
                    price: element.price,
                    amount: element.amount,
                    vat_name: element.vat,
                    amount_vat: element.amount_vat,
                    amount_after_vat: element.amount_after_vat,
                    discount: "",
                    amount_discount: null
                };
                for (var i = 0; i < invoices.length; i++) {
                    if (invoices[i].number_of_vouchers == element.productNumberOfVouchers) {
                        invoices[i].invoice_products.push(invoiceProduct);
                    }
                }
            }
        });
        var data = {
            "invoices": invoices
        };
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        this.vatService.exportToExcel(data).subscribe(function (res) {
            if (res.status == 'success') {
                var file = res.data.product;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Xuất dữ liệu ra excel thành công", "success");
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(res.message, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
        });
    };
    ImportInvoicesComponent.prototype.convertGirdToInvoices = function (type) {
        var _this = this;
        var invoices = [];
        var invalid = true;
        this.dataSource.forEach(function (element, index) {
            if (element.number_of_vouchers == "" && element.dataType == "KHACH_HANG" && element.product_name && type == "submit") {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Số phiếu, chứng từ không được để trống", "error");
                invalid = false;
                return;
            }
            if (element.number_of_vouchers) {
                if (type == "submit") {
                    if (element.customer_name == "" && element.customer_object_code == false) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tên đơn vị, tổ chức không được để trống", "error");
                        invalid = false;
                        return false;
                    }
                    if (element.buyer_name == "" && element.customer_object_code == true) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tên khách hàng không được để trống", "error");
                        invalid = false;
                        return false;
                    }
                    if (element.buyer_address == "") {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Địa chỉ không được để trống", "error");
                        invalid = false;
                        return false;
                    }
                    if (element.payment_method_name == "") {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Hình thức thanh toán không được để trống", "error");
                        invalid = false;
                        return false;
                    }
                    if (element.product_name == "") {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tên hàng hóa không được để trống", "error");
                        invalid = false;
                        return false;
                    }
                    if (element.amount_after_vat == "") {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tổng tiền không được để trống", "error");
                        invalid = false;
                        return false;
                    }
                }
                var invoice = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceModel"](1);
                if (element.id) {
                    invoice.id = element.id;
                }
                invoice.invoice_release_id = _this.invoice_release_id;
                invoice.template_id = _this.template_id;
                invoice["number_of_vouchers"] = element.number_of_vouchers; // số phiếu chứng từ
                invoice.customer_object_code = element.customer_object_code ? "CA_NHAN" : "DOANH_NGHIEP"; //Mã loại hóa đơn
                invoice.buyer_tax_code = element.buyer_tax_code; //Mã số thuế
                invoice.buyer_name = element.buyer_name; //Tên người mua
                invoice.customer_name = element.customer_name; //Tên đơn vị (Tên khách hàng)
                invoice.customer_code = element.customer_code; //mã đơn vị (mã khách hàng)
                invoice.buyer_address = element.buyer_address; //Địa chỉ
                invoice.buyer_mobile = element.buyer_mobile; //Điện thoại liên hệ
                invoice.buyer_email = element.buyer_email; //Email
                invoice.payment_method_name = element.payment_method_name; //Hình thức thanh toán
                invoice.payment_method_view_name = element.payment_method_view_name; //Hình thức thanh toán
                invoice.bank_account_number = element.bank_account_number; //Số tài khoản
                invoice.bank_name = element.bank_name; //thuộc ngân hàng
                invoice.invoice_products[0].product_code = element.product_code;
                invoice.invoice_products[0].product_name = element.product_name;
                invoice.invoice_products[0].unit_code = element.unit_code;
                invoice.invoice_products[0].unit_name = element.unit_name;
                invoice.invoice_products[0].quantity = element.quantity;
                invoice.invoice_products[0].price = element.price;
                invoice.invoice_products[0].amount = element.amount;
                invoice.invoice_products[0].vat = element.vat;
                invoice.invoice_products[0].amount_vat = element.amount_vat;
                invoice.invoice_products[0].amount_after_vat = element.amount_after_vat;
                invoice.invoice_products[0].order = element.order;
                invoice.invoice_products[0].view_order = element.view_order;
                invoice.invoice_products[0].provisions_on_accounts = element.provisions_on_accounts;
                invoice.invoice_products[0]["row_content"] = element.product_name;
                invoice.currency_code = 'VND';
                invoice.display_currency = _this.configdisplayCurrency;
                var decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
                invoice.decimal_places_json = decimal_places_json;
                if (element.file_attach) {
                    invoice.invoice_files = element.file_attach;
                }
                else {
                    invoice.invoice_files = [];
                }
                invoices.push(invoice);
            }
            if (element.productNumberOfVouchers) {
                // console.log(element)
                var invoiceProduct = {
                    product_code: element.product_code,
                    product_name: element.product_name,
                    provisions_on_accounts: element.provisions_on_accounts,
                    unit_code: element.unit_code,
                    unit_name: element.unit_name,
                    quantity: element.quantity,
                    price: element.price,
                    vat: element.vat,
                    discount: element.discount,
                    order: element.order,
                    amount: element.amount,
                    amount_vat: element.amount_vat,
                    amount_after_vat: element.amount_after_vat,
                    view_order: element.view_order,
                    row_content: element.product_name
                };
                for (var i = 0; i < invoices.length; i++) {
                    if (invoices[i].number_of_vouchers == element.productNumberOfVouchers) {
                        invoices[i].invoice_products.push(invoiceProduct);
                    }
                }
            }
        });
        var decimal_amount_after_vat = this.getFormatterToNumber(this.formatter.tong_tien);
        var decimal_amount = this.getFormatterToNumber(this.formatter.thanh_tien);
        var decimal_amount_vat = this.getFormatterToNumber(this.formatter.tien_thue);
        var _loop_3 = function (i) {
            var amount = null, total_amount_vat = null, amount_after_vat = null, total_amount_product_vat0 = null, amount_vat5 = null, amount_vat10 = null, total_amount_product_vat5 = null, total_amount_product_vat10 = null, total_amount_product_vatx = null;
            invoices[i].invoice_products.forEach(function (product, index) {
                if (product.amount !== null)
                    amount += product.amount;
                if (product.amount_vat !== null)
                    total_amount_vat += product.amount_vat;
                if (product.amount_after_vat !== null)
                    amount_after_vat += product.amount_after_vat;
                if (product.vat == 5)
                    amount_vat5 += product.amount_vat;
                if (product.vat == 10)
                    amount_vat10 += product.amount_vat;
                if (product.vat == -1)
                    total_amount_product_vatx += product.amount;
                if (product.vat == 0)
                    total_amount_product_vat0 += product.amount;
                if (product.vat == 5)
                    total_amount_product_vat5 += product.amount;
                if (product.vat == 10)
                    total_amount_product_vat10 += product.amount;
                if (!_this.is_multi_vat && index > 0 && invoices[i].invoice_products[index].vat != invoices[i].invoice_products[index - 1].vat) {
                    // console.log(invoices[i].invoice_products[index].vat + "---" + invoices[i].invoice_products[index-1].vat)
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Mẫu hóa đơn đăng ký 1 loại thuế suất. Vui lòng kiểm tra lại thuế suất của hàng hóa', 'error');
                    invalid = false;
                    return;
                }
            });
            invoices[i].invoice_date = this_3.invoice_date;
            invoices[i].amount = this_3.roundNumber(amount, decimal_amount);
            invoices[i].total_amount_vat = this_3.roundNumber(total_amount_vat, decimal_amount_vat);
            invoices[i].amount_after_vat = this_3.roundNumber(amount_after_vat, decimal_amount_after_vat);
            invoices[i].amount_vat5 = this_3.roundNumber(amount_vat5, decimal_amount_vat);
            invoices[i].amount_vat10 = this_3.roundNumber(amount_vat10, decimal_amount_vat);
            invoices[i].total_amount_product_vatx = this_3.roundNumber(total_amount_product_vatx, decimal_amount);
            invoices[i].total_amount_product_vat0 = this_3.roundNumber(total_amount_product_vat0, decimal_amount);
            invoices[i].total_amount_product_vat5 = this_3.roundNumber(total_amount_product_vat5, decimal_amount);
            invoices[i].total_amount_product_vat10 = this_3.roundNumber(total_amount_product_vat10, decimal_amount);
            invoices[i].total_payment = this_3.roundNumber(invoices[i].amount_after_vat, decimal_amount_after_vat);
            invoices[i].total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].tienBangChu(invoices[i].total_payment, decimal_amount_after_vat, invoices[i].currency_code, this_3.configs.system_parameter.display_read_money_english);
            if (invoices[i].total_payment > 20000000 && (invoices[i].payment_method_name == 'TM') && type == "submit") {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Vui lòng chọn HTTT chuyển khoản cho hóa đơn có giá trị lớn hơn 20 triệu đồng', 'error');
                console.log(invoices);
                var countRowBefore = 0;
                for (var j = 0; j < i; j++) {
                    countRowBefore += invoices[j].invoice_products.length;
                }
                this_3.dataGrid.instance.focus(this_3.dataGrid.instance.getCellElement(countRowBefore, 'payment_method_name'));
                invalid = false;
                return { value: void 0 };
            }
        };
        var this_3 = this;
        for (var i = 0; i < invoices.length; i++) {
            var state_1 = _loop_3(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        this.totalInvoice = invoices.length;
        this.invoicesArr = invoices;
        return invalid;
    };
    ImportInvoicesComponent.prototype.preview = function () {
        var dataPreview = {
            "template": { "id": this.template_id },
            "invoices": this.getDataPreview()
        };
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var win = window.open("", "", "width=200, height=100");
        win.document.body.innerHTML = "Đang tải dữ liệu!";
        win.blur();
        var sub = this.vatService.previewInvoiceImport(dataPreview).subscribe(function (rs) {
            if (rs.status == 'success') {
                var pdf_file = rs.data.invoice.pdf_file;
                // const initialState = {
                //   pdf_file: pdf_file
                // };
                // this.modalService.show(PreviewInvoiceComponent, {class: 'modal-lg full-modal', initialState});
                win.document.write("\n        <a id=\"idA\" title=\"Download File\" style=\"font-family: 'Verdana';color: #333;font-weight: 600;float:right; margin-bottom: 5px;\n          margin-right: 20px;\" download=\"hoadon.pdf\" href=\"data:application/pdf;base64," + pdf_file + "\">T\u1EA3i File</a>\n        <iframe width=\"100%\" height=\"97%\" src=\"data:application/pdf;base64," + pdf_file + "#download=1\"></iframe>\n        \n      ");
                win.resizeTo(screen.availWidth, screen.availHeight);
                win.focus();
            }
            else {
                win.close();
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ImportInvoicesComponent.prototype.previewBeforeSubmit = function () {
        var _this = this;
        var dataPreview = {
            "template": { "id": this.template_id },
            "invoices": this.getDataPreview()
        };
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        this.windowPreviewBeforeSubmit = window.open("", "", "width=" + screen.availWidth + ", height=" + screen.availHeight);
        this.windowPreviewBeforeSubmit.document.body.innerHTML = "Đang tải dữ liệu!";
        this.windowPreviewBeforeSubmit.blur();
        var timer = setInterval(function () {
            if (_this.windowPreviewBeforeSubmit.closed) {
                clearInterval(timer);
                var isCheck = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].getCookie('CK_CFM_I');
                _this.windowPreviewBeforeSubmit = undefined;
                if (isCheck == "CHECKED") {
                    document.cookie = "CK_CFM_I=; path=/";
                    _this.confirmCheckPreview = true;
                    _this.submit('XUAT');
                }
            }
        }, 500);
        var data = this.getDataPreview();
        var htx = "";
        if (this.htXuat != _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].hinhThucXuat.XuatChoKy) {
            htx = "và ký";
        }
        else {
            htx = "chờ ký";
        }
        var sub = this.vatService.previewInvoiceImport(dataPreview).subscribe(function (rs) {
            if (rs.status == 'success') {
                var pdf_file = rs.data.invoice.pdf_file;
                _this.windowPreviewBeforeSubmit.document.write("\n        <style type=\"text/css\" scoped>\n            .nhap-nhay { \n              background: red;\n              padding: 0.5px 9px;\n              margin-right: 5px;\n              border-radius: 57%;\n              -webkit-animation: flicker 1s infinite;\n            } \n            .ht-xuat{\n              display: inline-block;\n              margin-right: 50px;\n              padding: 15px;\n              float: right;\n              background: #e48e08;\n            }\n            @-webkit-keyframes flicker\n            {\n            0% {opacity:0;}\n            9% {opacity:0;}\n            10% {opacity:.5;}\n            13% {opacity:0;}\n            20% {opacity:.5;}\n            25% {opacity:1;}\n            }\n            .example {\n              padding: 20px;\n            }\n            \n            input[type=button] {\n              padding: 5px 10px;\n              margin: 10px 5px;\n              border-radius: 5px;\n              cursor: pointer;\n              background: #ddd;\n              border: 1px solid #ccc;\n            }\n            input[type=button]:hover {\n              background: #ccc;\n            }\n\n            .confirm {\n              display: none;\n            }\n            .confirm > div:first-of-type {\n              position: fixed;\n              width: 100%;\n              height: 100%;\n              background: rgba(0, 0, 0, 0.5);\n              top: 0px;\n              left: 0px;\n            }\n            .confirm > div:last-of-type {\n              padding: 10px 20px;\n              background: white;\n              position: absolute;\n              width: auto;\n              height: auto;\n              left: 50%;\n              top: 50%;\n              transform: translate(-50%, -50%);\n              border-radius: 5px;\n              border: 1px solid #333;\n            }\n            .confirm > div:last-of-type div:first-of-type {\n              min-width: 150px;\n              padding: 10px;\n            }\n            .confirm > div:last-of-type div:last-of-type {\n              text-align: right;\n            }\n        </style>\n        <div style=\"margin-left: 50px;\">\n          <h3 style=\"color: red; text-align: center;\">B\u1EA2N D\u1EF0 TH\u1EA2O H\u00D3A \u0110\u01A0N \u0110I\u1EC6N T\u1EEC</h3>\n          <p style=\"font-weight: 600;\"><span class=\"nhap-nhay\"></span><span style=\"font-size: 17px;\">L\u01B0u \u00FD: \n          </span>\u0110\u1EC1 ngh\u1ECB \u0111\u01A1n v\u1ECB ki\u1EC3m tra th\u1EADt k\u1EF9 c\u00E1c n\u1ED9i dung h\u00F3a \u0111\u01A1n \u0111\u00E3 nh\u1EADp tr\u01B0\u1EDBc khi xu\u1EA5t nh\u01B0: Ng\u00E0y h\u00F3a \u0111\u01A1n, B\u00EAn mua h\u00E0ng, T\u00EAn h\u00E0ng h\u00F3a d\u1ECBch v\u1EE5, T\u1ED5ng ti\u1EC1n,\u2026\u0111\u1EC3 tr\u00E1nh xu\u1EA5t sai.</>\n        </div>\n\n        <div>\n          <iframe style=\"margin-left: 170px;\" width=\"70%\" height=\"95%\" src=\"data:application/pdf;base64," + pdf_file + "\"></iframe>\n          <div class=\"ht-xuat\">\n            <p style=\"color: #fff;font-size: 17px;text-align: center;margin-bottom: 0;\">Ng\u00E0y h\u00F3a \u0111\u01A1n</p>\n            <p style=\"color: #fff;font-size: 17px;text-align: center;margin-bottom: 10px;margin-top: 5px;\">" + moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.invoice.invoice_date).format('DD/MM/YYYY') + "</p>\n            <h3 style=\"color: #fff; text-align: center; text-transform: uppercase;margin-top: 5px;\">Xu\u1EA5t " + htx + "</h3>\n          </div>\n        </div>\n\n        <div style=\"text-align: center; margin: 20px 0 50px; font-size: 22px; font-weight: 600;\">\n          <a href=\"javascript:void(0)\" style=\"text-decoration: none;\" onclick=\"setConfirmInvoice()\">\u0110\u1ED3ng \u00FD </a>|\n          <a href=\"javascript:void(0)\" style=\"text-decoration: none;\" onclick=\"closeWin()\">\u0110\u00F3ng</a>\n        </div>\n\n        <div class=\"confirm\">\n            <div></div>\n            <div>\n              <div id=\"confirmMessage\">Confirm text</div>\n              <div>\n                <input id=\"confirmYes\" type=\"button\" value=\"\u0110\u1ED3ng \u00FD\" />\n                <input id=\"confirmNo\" type=\"button\" value=\"Quay l\u1EA1i\" />\n              </div>\n            </div>\n        </div>\n\n        <script type=\"text/javascript\">\n        const ui = {\n          confirm: async (message) => createConfirm(message)\n        }\n        \n        const createConfirm = (message) => {\n          return new Promise((complete, failed)=>{\n            $('#confirmMessage').text(message)\n        \n            $('#confirmYes').off('click');\n            $('#confirmNo').off('click');\n            \n            $('#confirmYes').on('click', ()=> { $('.confirm').hide(); complete(true); });\n            $('#confirmNo').on('click', ()=> { $('.confirm').hide(); complete(false); });\n            \n            $('.confirm').show();\n          });\n        }\n                             \n        const setConfirmInvoice = async () => {\n          const confirm = await ui.confirm(\"B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n xu\u1EA5t h\u00F3a \u0111\u01A1n " + htx + " kh\u00F4ng?\");\n          if(confirm){\n            document.cookie = \"CK_CFM_I=CHECKED; path=/\";\n            window.close();\n          } else{\n          }\n        } \n\n          function closeWin(){\n            window.close();\n          }\n        </script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n        ");
                _this.windowPreviewBeforeSubmit.focus();
            }
            else {
                _this.windowPreviewBeforeSubmit.close();
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ImportInvoicesComponent.prototype.getDataPreview = function () {
        var _this = this;
        var formatter;
        var invoicesPreview = [];
        this.convertGirdToInvoices("preview");
        this.configs.forEach(function (item) {
            if (item.name == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].configSys.system_parameter) {
                var _obj = JSON.parse(item.value);
                var displayInt = _obj.display_int ? _obj.display_int : false;
                formatter = _obj.decpoint_is_dot ? { decimal: ".", thousands: ",", display_int: displayInt } : { decimal: ",", thousands: ".", display_int: displayInt };
            }
        });
        this.invoicesArr.forEach(function (data) {
            var decimal_quatity = _this.getFormatterToNumber(_this.formatter.so_luong);
            var decimal_price = _this.getFormatterToNumber(_this.formatter.don_gia);
            var decimal_amount = _this.getFormatterToNumber(_this.formatter.thanh_tien);
            var decimal_amount_vat = _this.getFormatterToNumber(_this.formatter.tien_thue);
            var decimal_amount_after_vat = _this.getFormatterToNumber(_this.formatter.tong_tien);
            var total_amount_product_with_vatx = null, total_amount_product_with_vat0 = null, total_amount_product_with_vat5 = null, total_amount_product_with_vat10 = null, amount_vat0 = null;
            data.invoice_products.forEach(function (item) {
                if (item.commercial_discount) {
                    if (item.vat == -1)
                        total_amount_product_with_vatx -= item.amount_after_vat;
                    if (item.vat == 0)
                        total_amount_product_with_vat0 -= item.amount_after_vat;
                    if (item.vat == 0)
                        amount_vat0 -= item.amount_vat;
                    if (item.vat == 5)
                        total_amount_product_with_vat5 -= item.amount_after_vat;
                    if (item.vat == 10)
                        total_amount_product_with_vat10 -= item.amount_after_vat;
                }
                else {
                    if (item.vat == -1)
                        total_amount_product_with_vatx += item.amount_after_vat;
                    if (item.vat == 0)
                        total_amount_product_with_vat0 += item.amount_after_vat;
                    if (item.vat == 0)
                        amount_vat0 += item.amount_vat;
                    if (item.vat == 5)
                        total_amount_product_with_vat5 += item.amount_after_vat;
                    if (item.vat == 10)
                        total_amount_product_with_vat10 += item.amount_after_vat;
                }
                item['unit_name'] = "";
                _this.select.unit_codes.forEach(function (unit) {
                    item.discount = "";
                    item.total_discount = "";
                    if (unit.code == item.unit_code) {
                        item['unit_name'] = unit.name;
                    }
                });
                item.amount = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.amount, decimal_amount, formatter);
                item.price = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.price, decimal_price, formatter);
                item.quantity = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(item.quantity, decimal_quatity, formatter);
            });
            var _obj = _this.select.payment_method_names.filter(function (p) { return p.code == data.payment_method_name; })[0];
            if (_obj) {
                data.payment_method_view_name = _obj.name;
            }
            data.total_amount_product_with_vatx = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vatx, decimal_amount_after_vat, formatter);
            data.total_amount_product_with_vat0 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat0, decimal_amount_after_vat, formatter);
            data.total_amount_product_with_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat5, decimal_amount_after_vat, formatter);
            data.total_amount_product_with_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat10, decimal_amount_after_vat, formatter);
            data.amount_after_vatx = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vatx, decimal_amount_after_vat, formatter);
            data.amount_after_vat0 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat0, decimal_amount_after_vat, formatter);
            data.amount_after_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat5, decimal_amount_after_vat, formatter);
            data.amount_after_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(total_amount_product_with_vat10, decimal_amount_after_vat, formatter);
            data.amount_vat0 = amount_vat0;
            data.total_amount_product_vatx = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_amount_product_vatx, decimal_amount, formatter);
            data.total_amount_product_vat0 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_amount_product_vat0, decimal_amount, formatter);
            data.total_amount_product_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_amount_product_vat5, decimal_amount, formatter);
            data.total_amount_product_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_amount_product_vat10, decimal_amount, formatter);
            data.amount_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.amount_vat5, decimal_amount_vat, formatter);
            data.amount_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.amount_vat10, decimal_amount_vat, formatter);
            data.amount = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.amount, decimal_amount, formatter);
            data.total_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_amount_vat, decimal_amount_vat, formatter);
            data.total_payment = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatMoney(data.total_payment, decimal_amount_after_vat, formatter);
            invoicesPreview.push(data);
        });
        return invoicesPreview;
    };
    ImportInvoicesComponent.prototype.inChuyenDoi = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var win = window.open("", "", "width=200, height=100");
        win.document.body.innerHTML = "Đang tải dữ liệu!";
        win.blur();
        var sub = this.vatService.inChuyenDoiInvoiceImport(this.invoicesId, false).subscribe(function (rs) {
            if (rs.status == "success") {
                var pdf_file = rs.data.invoice.pdf_file;
                win.document.write("\n        <a id=\"idA\" title=\"Download File\" style=\"font-family: 'Verdana';color: #333;font-weight: 600;float:right; margin-bottom: 5px;\n          margin-right: 20px;\" download=\"hoadon.pdf\" href=\"data:application/pdf;base64," + pdf_file + "\">T\u1EA3i File</a>\n        <iframe width=\"100%\" height=\"97%\" src=\"data:application/pdf;base64," + pdf_file + "#download=1\"></iframe>\n        \n      ");
                win.resizeTo(screen.availWidth, screen.availHeight);
                win.focus();
            }
            else {
                win.close();
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ImportInvoicesComponent.prototype.xemHoaDon = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var win = window.open("", "", "width=200, height=100");
        win.document.body.innerHTML = "Đang tải dữ liệu!";
        win.blur();
        var sub = this.vatService.xemHoaDonInvoiceImport(this.invoicesId).subscribe(function (rs) {
            if (rs.status == "success") {
                var pdf_file = rs.data.invoice.pdf_file;
                win.document.write("<iframe width=\"100%\" height=\"97%\" src=\"data:application/pdf;base64," + pdf_file + "\"></iframe>");
                win.resizeTo(screen.availWidth, screen.availHeight);
                win.focus();
            }
            else {
                win.close();
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ImportInvoicesComponent.prototype.submit = function (type) {
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        this.checkStatusData();
        if (this.totalDuplicateInvoice > 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Số phiếu, chứng từ bị trùng", "error");
            return;
        }
        var convert = this.convertGirdToInvoices("submit");
        if (convert) {
            var dayExport = this.invoice_date ? moment__WEBPACK_IMPORTED_MODULE_8__(this.invoice_date).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('DD/MM/YYYY');
            if (type == "XUAT") {
                if (this.confirmCheckPreview) {
                    // Library.confirmVA(`Tất cả hóa đơn đã nhập sẽ được xuất hóa đơn vào ngày <strong>${dayExport}</strong>. Bạn có chắc chắn không?`, "Thông báo", () => {
                    this.showPopupImport = true;
                    if (this.htXuat != _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].hinhThucXuat.XuatChoKy) {
                        this.xuatHoaDon();
                    }
                    else if (this.htXuat != _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].hinhThucXuat.XuatChoKy) {
                        this.xuatChoKy();
                    }
                    this.confirmCheckPreview = false;
                    // });
                }
                else {
                    this.previewBeforeSubmit();
                }
            }
            else if (type == "LUU") {
                this.showPopupImport = true;
                this.luuChoXuat();
            }
            // else if (type == "CHO_KY") {
            //   Library.confirmVA(`Tất cả hóa đơn đã nhập sẽ được xuất hóa đơn vào ngày <strong>${dayExport}</strong>. Bạn có chắc chắn không?`, "Thông báo", () => {
            //     this.showPopupImport = true;
            //   });
            // }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], ImportInvoicesComponent.prototype, "dataGrid", void 0);
    ImportInvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-invoices',
            template: __webpack_require__(/*! ./import-invoices.component.html */ "./src/app/modules/payment-receipt/components/import-invoices/import-invoices.component.html"),
            styles: [__webpack_require__(/*! ./import-invoices.component.scss */ "./src/app/modules/payment-receipt/components/import-invoices/import-invoices.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ImportInvoicesComponent);
    return ImportInvoicesComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/components/index/index.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/index/index.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section1\" style=\"margin-bottom: 10px\">\r\n  <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n    <app-receipt-search (searchContentChange)=\"getSearch($event)\">\r\n    </app-receipt-search>\r\n  </div>\r\n  <div class=\"col-md-4\" style=\"max-height: 70px\">\r\n    <div class=\"list-header row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-right button-panel\">\r\n          <dx-button (click)=\"lapHoaDon()\" [(icon)]=\"_translate.ICONS.plus\"\r\n            text=\"{{ 'CONTROLL.BUTTON.create_repceipts' | translate }}\" type=\"default\"></dx-button>\r\n          <dx-menu [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\" submenuDirection=\"auto\"\r\n            (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerVat\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [showBorders]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\"\r\n  [columnAutoWidth]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n  (onContentReady)=\"onContentReady($event)\">\r\n  <!-- <dxo-scrolling mode=\"virtual\"></dxo-scrolling> -->\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\">\r\n  </dxo-selection>\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"vat\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <!-- Số biên lai -->\r\n  <dxi-column cellTemplate=\"receiptNumber\" dataField=\"receipt_number\"\r\n    caption=\"{{ 'GRID.INVOICE.receipt_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n    alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\" sortOrder=\"desc\" [sortIndex]=\"1\">\r\n  </dxi-column>\r\n  <!-- Mẫu số, ký hiệu -->\r\n  <dxi-column cellTemplate=\"templateCode\"\r\n    caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Ngày biên lai -->\r\n  <dxi-column dataField=\"receipt_date\" caption=\"{{ 'GRID.INVOICE.receipt_date' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n    format=\"dd/MM/yyyy\" sortOrder=\"desc\" [sortIndex]=\"0\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Mã số thuế -->\r\n  <dxi-column dataField=\"payer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <!-- Tên người nộp tiền -->\r\n  <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.payer_name' | translate }}\" alignment=\"left\"\r\n    minWidth=\"200\">\r\n  </dxi-column>\r\n  <!-- Tổng tiền -->\r\n  <dxi-column dataField=\"total_payment_string\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\"\r\n    alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\" minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\">\r\n  </dxi-column>\r\n  <!-- Email, trạng thái hóa đơn -->\r\n  <dxi-column cellTemplate=\"actionEmail\" caption=\"{{ 'GRID.INVOICE.send_email_status' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Chức năng -->\r\n  <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.template_code }}</p>\r\n    <p>{{ d.data.receipt_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'receiptNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.receipt_number }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p>{{ d.data.customer_name || d.data.payer_name }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionEmail'\">\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status !='GIU_SO'\" class=\"chua-gui-khach-hang gach-chan\"\r\n      (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.un_sent' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'GUI_LOI'\" style=\"color: red;\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.send_mail_error' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status =='GIU_SO'\" class=\"cho-ky\"\r\n      (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_sign' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_GUI'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_it' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_NHAN'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.received' | translate }}</a>\r\n    <p *ngIf=\"!d.data.send_email_status\" href=\"javascript:void(0)\">{{ trangthaihoadon(d.data) }} <a\r\n        *ngIf=\"trangthaihoadon(d.data) == 'Lỗi ký HD' || trangthaihoadon(d.data) == 'Signed error'\" class=\"gach-chan\"\r\n        (click)=\"editNotSelect(d.data)\" href=\"javascript:void(0)\">({{ 'GRID.INVOICE.re_sign' | translate }})</a></p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_GUI_CQT' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Đã gửi để cấp mã</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_CAP' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Đã cấp mã</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'KHONG_DU_DK_CAP_MA' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\" style=\"color: red;\" (click)=\"LydoKTiepNhan(d.data)\">Không đủ ĐK cấp mã</a>\r\n\r\n    <a *ngIf=\"d.data.send_department_status == 'CHUA_GUI_CQT' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Chưa gửi CQT</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_GUI_CQT' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Đã gửi CQT</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_TIEP_NHAN' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">CQT đã tiếp nhận</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'KHONG_HOP_LE' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\" style=\"color: red;\" (click)=\"LydoKTiepNhan(d.data)\">CQT kiểm tra không hợp lệ </a>\r\n  </div>\r\n  <!-- Trạng thái thanh toán -->\r\n  <div *dxTemplate=\"let d of 'viewPaymentStatus'\">\r\n    <a href=\"javascript:void(0)\">{{ trangthaithanhtoan(d.data) }}</a>\r\n  </div>\r\n  <!--  -->\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <div class=\"dropdown\">\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.extend}}\" class=\"morongIcon actionIcon\" (click)=\"myFunction(d.data.id)\"\r\n        href=\"javascript:void(0)\"></a>\r\n      <div [id]=\"d.data.id\" class=\"dropdown-content\"\r\n        [ngClass]=\"{'last-drodown':( pageSize - 1 == d.rowIndex || pageSize - 2 == d.rowIndex || pageSize - 3 == d.rowIndex) && pageSize > 4, 'small-grid': pageSize < 5}\">\r\n        <a (click)=\"copy(d.data)\" href=\"javascript:void(0)\">{{'CONTROLL.BUTTON.copy' | translate}}\r\n          <i [class]=\"_translate.ICONS.copy\"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" cssClass=\"dxi-total-payment-total_payment_string\" [customizeText]=\"customizeText\" showInColumn=\"total_payment_string\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 35, 50, 100]\" [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n\r\n<app-download-pdf></app-download-pdf>\r\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/index/index.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/index/index.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}.last-drodown{bottom:30px}.small-grid{position:fixed  !important;right:39px !important}::ng-deep #gridContainerVat .dx-cell-focus-disabled{overflow:visible !important}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/index/index.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/index/index.component.ts ***!
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
/* harmony import */ var _keep_number_keep_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../keep-number/keep-number.component */ "./src/app/modules/payment-receipt/components/keep-number/keep-number.component.ts");
/* harmony import */ var _send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../send-invoices/send-invoices.component */ "./src/app/modules/payment-receipt/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var _import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../import-invoices-dt/import-invoices-dt.component */ "./src/app/modules/payment-receipt/components/import-invoices-dt/import-invoices-dt.component.ts");
/* harmony import */ var _sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sign-many/sign-many.component */ "./src/app/modules/payment-receipt/components/sign-many/sign-many.component.ts");
/* harmony import */ var _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/modules/vat-shared/components/view-attach-file/view-attach-file.component */ "./src/app/shared/modules/vat-shared/components/view-attach-file/view-attach-file.component.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/payment-receipt/shared/payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
/* harmony import */ var _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/components/download-pdf/download-pdf.component */ "./src/app/shared/components/download-pdf/download-pdf.component.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
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
    function IndexComponent(authService, vatService, modalService, modalImportService, router, route, translate, socketService, spinner, paymentRService, vPreviewInvService, invoiceService) {
        var _this = this;
        this.authService = authService;
        this.vatService = vatService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.socketService = socketService;
        this.spinner = spinner;
        this.paymentRService = paymentRService;
        this.vPreviewInvService = vPreviewInvService;
        this.invoiceService = invoiceService;
        this.selectedRows = [];
        this.selectedItems = [];
        this.test = true;
        this.isAccessExportInv = true;
        this.invoice_releases = [];
        this.templatesTT78 = [];
        this.infoDangKy = {};
        this.extras = [];
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
        this.objPXK = {};
        this.clickCurent = '';
        this.dataAddInvoiceBuy = [];
        this.curentUser = {};
        this.taxCodeThueHCM = ["0102519041-555"];
        this.isTT78 = false;
        this.isExistFormRelease = false;
        this.isEFY = false;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.invoices = [];
        this.isExportFailed = false;
        this.objStatusBtn = {};
        this.customizeText = function (url) {
            _this.invoiceService.handleTotalGrid(url.value, _this.objStatusBtn, _this.dataGrid);
            return '';
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.curentUser = this.authService.getCurrentUser();
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
                    {
                        id: 'NAP_HD_TU_EXCEL_DT',
                        name: 'Nạp biên lai từ Excel',
                        icon: this._translate.ICONS.excel
                    },
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
                        name: 'Xem biên lai',
                        icon: this._translate.ICONS.view
                    },
                    {
                        id: 'GUI_BEN_MUA',
                        name: 'Gửi biên lai',
                        icon: this._translate.ICONS.send_email
                    },
                    {
                        id: 'TAI_HD_PDF',
                        name: "Tải biên lai PDF",
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
        if (!this.taxCodeThueHCM.includes(this.curentUser.account.tax_code)) {
            this.extras[0].items.push({ id: "TAI_HD_XML", name: 'Tải BL định dạng gốc', icon: this._translate.ICONS.xml });
        }
        if (this.configs.system_parameter.allow_to_print_delivery_each_invoice)
            this.extras[0].items.push({ id: "IN_BB_GIAO_NHAN", name: this._translate.CONTROLL.BUTTON.print_delivery_minutes, icon: this._translate.ICONS.xml });
        if (this.curentUser.account.tax_code == "0102519041")
            this.isEFY = true;
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser && this.currentUser.account && this.currentUser.account.van_account_info) {
            this.province_name = this.currentUser.account.van_account_info.city_name;
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
        else {
            this.isSearchUI = true;
            this.isListHeader = true;
        }
        this.loaiHoaDon = value;
    };
    /* Xử lý sự kiện click phần mở rộng của từng hóa đơn*/
    IndexComponent.prototype.myFunction = function (id) {
        if (this.clickCurent !== '' && this.clickCurent !== id) {
            var valueCurrent = document.getElementById(this.clickCurent);
            if (!valueCurrent)
                document.getElementById(id).classList.toggle('show');
            else {
                document.getElementById(this.clickCurent).classList.remove('show');
                document.getElementById(id).classList.toggle('show');
            }
        }
        else
            document.getElementById(id).classList.toggle('show');
        this.clickCurent = id;
    };
    IndexComponent.prototype.loadList = function (params) {
        this.dataSource = {};
        var ref = {};
        if (params) {
            var _lst = this.paymentRService.getAll(this.loaiHoaDon, params);
            this.dataSource.store = _lst;
            this.footerSum = {
                summary: _lst.summary,
                summary_deduction: _lst.summary_deduction,
            };
        }
        else {
            this.dataSource.store = this.paymentRService.getAll(this.loaiHoaDon);
        }
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            switch (e.data.status) {
                case 'DA_XUAT':
                    break;
                case 'GHI_TAM':
                    if (e.data.receipt_number) {
                        e.rowElement.style.color = 'black';
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
    IndexComponent.prototype.getSearch = function (e) {
        this.paramSearch = e;
        this.loadList(e);
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
        // if (this.selectedItems.length > 0) {
        //   const checks = this.selectedItems.filter((item) => {
        //     return item.number_of_vouchers;
        //   });
        //   const checkDaXuat = this.selectedItems.filter((item) => {
        //     return item.status === 'DA_XUAT';
        //   });
        //   if (checks.length === this.selectedItems.length && checkDaXuat.length === 0) {
        //     this.disEditMulti = false;
        //   }
        //}
    };
    IndexComponent.prototype.lapHoaDon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.bienlai)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        this.router.navigate(['system/payment-receipt/create']);
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
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.bienlai)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        row = data ? data : this.selectedItems[0];
                        sub = this.paymentRService.show(row.id).subscribe(function (rs) {
                            if (rs.status == 'success') {
                                if (rs.data.receipt) {
                                    rs.data.receipt.id = null;
                                    //rs.data.receipt.origin_id = null;
                                    rs.data.receipt.adjustment_type = '1';
                                    rs.data.receipt.destroy_reason = null;
                                    rs.data.receipt.destroy_date = null;
                                    rs.data.receipt.receipt_number = null;
                                    rs.data.receipt.receipt_date = null;
                                    rs.data.receipt.status = rs.data.receipt.status == 'DA_XUAT' ? 'GHI_TAM' : rs.data.receipt.status;
                                    rs.data.receipt.updated_at = null;
                                    rs.data.receipt.user_id = null;
                                    rs.data.receipt.van_id = null;
                                    rs.data.receipt.status_order = null;
                                    rs.data.receipt.extend_json_invoice = null;
                                    rs.data.receipt.other_id = null;
                                    rs.data.receipt.verify_code = null;
                                    if (rs.data.receipt.receipt_options && rs.data.receipt.receipt_options.length > 0) {
                                        rs.data.receipt.receipt_options.forEach(function (item) {
                                            delete item['id'];
                                            delete item['receipt_id'];
                                        });
                                    }
                                    _this.vatService.data = rs.data.receipt;
                                    _this.vatService.isCopy = true;
                                }
                                _this.router.navigate(['system/payment-receipt/create']);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.edit = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee, rowData, _hdDaXuat, _hdLapTrucTiep, invDefault_1, invCompare, arrStatusInv, arrStatusItem_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.bienlai)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        rowData = null;
                        if (data) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(data.status) == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusInv.DaXuat)
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.THONG_TIN.khong_sua_duoc_bien_lai_da_xuat, 'error');
                            else {
                                rowData = data;
                            }
                        }
                        else {
                            if (this.selectedItems.length > 0) {
                                if (this.selectedItems.length == 1)
                                    rowData = this.selectedItems[0];
                                else {
                                    _hdDaXuat = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusInv.DaXuat; })[0];
                                    if (_hdDaXuat)
                                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.THONG_TIN.khong_sua_duoc_bien_lai_da_xuat, 'error');
                                    else {
                                        _hdLapTrucTiep = this.selectedItems.filter(function (p) { return _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(p.number_of_vouchers) == ''; })[0];
                                        if (_hdLapTrucTiep)
                                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.same_receipt_invoice, 'error');
                                        else {
                                            invDefault_1 = this.selectedItems[0];
                                            invCompare = this.selectedItems.filter(function (p) { return p.template_id != invDefault_1.template_id; })[0];
                                            if (invCompare)
                                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.same_release_invoice, 'error');
                                            else {
                                                arrStatusInv = ["GIU_SO", "GHI_TAM"];
                                                arrStatusItem_1 = this.selectedItems.map(function (obj) { return obj.status; });
                                                result = arrStatusInv.every(function (val) { return arrStatusItem_1.includes(val); });
                                                /* Kiểm tra hóa đơn được sửa phải cùng trạng thái (ghi tạm hoặc giữ số) */
                                                if (result)
                                                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.same_status_invoice, 'error');
                                                else
                                                    this.openImportForm(rowData);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (rowData) {
                            this.router.navigate(["/system/payment-receipt/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.openImportForm = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var _lst = [];
        if (data) {
            _lst.push(data.id);
        }
        else {
            _lst = this.selectedRows;
        }
        var subRoute = this.paymentRService.getEditImportReceipt(_lst, '', this.loaiHoaDon).subscribe(function (res) {
            setTimeout(function () {
                _this.select.products = res[0].data.products;
                _this.hoaDonImportChoXuat = res[1].data.receipts.sort(function (itemA, itemB) {
                    return moment__WEBPACK_IMPORTED_MODULE_12__(itemA.created_at, 'YYYY-MM-DD HH:mm:ss').valueOf() - moment__WEBPACK_IMPORTED_MODULE_12__(itemB.created_at, 'YYYY-MM-DD HH:mm:ss').valueOf();
                });
                _this.select.unit_codes = res[2].data.DM_DON_VI_TINH;
                _this.select.payment_method_names = res[2].data.DM_HINH_THUC_THANH_TOAN;
                _this.select.vats = res[2].data.DM_TY_LE_VAT;
                _this.templatesTT78 = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertTemplatesToReceiptResolver(res[3]);
                _this.hoaDonImportChoXuat.forEach(function (invoice) {
                    invoice.receipt_fees.forEach(function (row) {
                        if (row.fee_code) {
                            var _obj = _this.select.products.filter(function (p) { return p.code === row.fee_code; })[0];
                            if (!_obj) {
                                var _objPush = {
                                    code: row.fee_code,
                                    name: row.fee_name,
                                    mhvth: row.fee_code + ': ' + row.fee_name,
                                };
                                _this.select.products.push(_objPush);
                            }
                        }
                    });
                });
                var search = new Object;
                _this.route.queryParams.subscribe(function (queryParams) {
                    for (var key in queryParams) {
                        if (queryParams.hasOwnProperty(key))
                            search[key] = queryParams[key];
                    }
                });
                search["idTempt"] = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].makeid();
                var initialState = {
                    select: _this.select,
                    hoaDonImportChoXuat: _this.hoaDonImportChoXuat,
                    templatesTT78: _this.templatesTT78,
                    infoDangKy: _this.infoDangKy,
                    search: search
                };
                _this.bsModalImportRef = _this.modalImportService.show(_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_8__["ImportInvoicesDtComponent"], {
                    backdrop: 'static',
                    keyboard: false,
                    class: 'modal-lg full-width',
                    initialState: initialState
                });
                var subModal = _this.modalImportService.onHide.subscribe(function () {
                    _this.loadList(_this.paramSearch);
                    subModal.unsubscribe();
                });
            }, 10);
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        }, function (err) {
        }, function () {
            subRoute.unsubscribe();
        });
    };
    IndexComponent.prototype.editNotSelect = function (row) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.bienlai)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (row.status === 'DA_XUAT') {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.THONG_TIN.khong_sua_duoc_bien_lai_da_xuat, 'error');
                        }
                        else {
                            this.router.navigate(["/system/payment-receipt/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(row.id)]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.viewDetailInvoice = function (row) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.bienlai)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        this.router.navigate(["/system/payment-receipt/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(row.id)]);
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, status_1, ids_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.bienlai)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.selectedItems.length || data) {
                            status_1 = '';
                            ids_1 = '';
                            if (data) {
                                ids_1 = data.id;
                            }
                            else {
                                ids_1 = this.selectedRows.join(',');
                            }
                            result = _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
                            result.then(function (dialogResult) {
                                if (dialogResult) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                                    _this.paymentRService.delete(ids_1).subscribe(function (rs) {
                                        if (rs.status === 'success') {
                                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                            _this.loadList(_this.paramSearch);
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
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var sub = this.vatService.getTemplate().subscribe(function (rs) {
            if (rs.status === 'success') {
                var initialState = {
                    invoice_releases: rs.data.invoice_releases
                };
                _this.bsModalRef = _this.modalService.show(_keep_number_keep_number_component__WEBPACK_IMPORTED_MODULE_6__["KeepNumberComponent"], {
                    class: 'modal-lg', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem) {
                        _this.loadList(_this.paramSearch);
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
            var _lst = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; });
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
                    var data_1 = this.paymentRService.taodulieuXemMau(ids);
                    data_1['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].cauhinhxemmau.hoadon;
                    this.vPreviewInvService.xemMau(data_1);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].typeCode.xem_bien_lai
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
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            else {
                ids = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; }).map(function (p) { return p.id; });
            }
            this.paymentRService.layDanhSachBienLai(ids, this.loaiHoaDon).subscribe(function (rs) {
                if (rs[0].status === 'success') {
                    var initialState = {
                        invoiceList: rs[0].data.receipts,
                        configs: rs[1].data.configs,
                        isBienLaiDienTu: true
                    };
                    _this.bsModalSignRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_11__["SendListEmailComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-lg full-modal',
                        initialState: initialState
                    });
                    var subModal_1 = _this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalSignRef.content.successSaveItem) {
                            _this.selectedItems = [];
                            _this.selectedRows = [];
                            _this.loadList(_this.paramSearch);
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
                        _this.bsModalSignRef = _this.modalService.show(_shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_10__["ViewAttachFileComponent"], {
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
        var sub = this.paymentRService.showToSendReceipt(id).subscribe(function (rs) {
            if (rs.status == 'success') {
                var initialState = {
                    receipt: rs.data.receipt,
                };
                _this.bsModalRef = _this.modalService.show(_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_7__["SendInvoicesComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem) {
                        _this.loadList(_this.paramSearch);
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
    IndexComponent.prototype.kyHangLoat = function (data) {
        var _this = this;
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (!_core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_14__["InvoicesService"].checkTimeExportInv(this.configs.system_parameter)) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_15__["String"].Format(this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_12__(this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_12__(this.configs.system_parameter.time_end).format('HH:mm')), 'error');
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
            // if (this.selectedItems.length > 50 && !data) {
            //   Library.notify(this._translate.NOTIFY.only_up_to_25_invoices_can_be_selected_for_sign, 'error');
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
            this.vatService.getInvoicesWaitSign(ids, this.loaiHoaDon).subscribe(function (rs) {
                if (rs[0].status === 'success') {
                    var initialState = {
                        invoiceList: rs[0].data.invoices,
                        configs: rs[1].data.configs,
                        isHdGTGT: _this.loaiHoaDon === '01GTKT' ? true : false,
                    };
                    _this.bsModalSignRef = _this.modalService.show(_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_9__["SignManyComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-lg full-modal',
                        initialState: initialState
                    });
                    var subModal_2 = _this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalSignRef.content.successSaveItem) {
                            _this.selectedItems = [];
                            _this.selectedRows = [];
                            _this.loadList(_this.paramSearch);
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.bienlai)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                        this.paymentRService.getImportReceipt(this.loaiHoaDon).subscribe(function (res) {
                            // Hàng hóa dịch vụ
                            _this.templatesTT78 = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertTemplatesToReceiptResolver(res[2]);
                            _this.select.products = res[0].data.products;
                            _this.select.unit_codes = res[1].data.DM_DON_VI_TINH;
                            _this.select.payment_method_names = res[1].data.DM_HINH_THUC_THANH_TOAN;
                            _this.select.vats = res[1].data.DM_TY_LE_VAT;
                            var search = new Object;
                            _this.route.queryParams.subscribe(function (queryParams) {
                                for (var key in queryParams) {
                                    if (queryParams.hasOwnProperty(key))
                                        search[key] = queryParams[key];
                                }
                            });
                            search["idTempt"] = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].makeid();
                            var initialState = {
                                select: _this.select,
                                isAccessExportInv: _this.isAccessExportInv,
                                templatesTT78: _this.templatesTT78,
                                infoDangKy: _this.infoDangKy,
                                search: search
                            };
                            _this.bsModalImportRef = _this.modalImportService.show(_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_8__["ImportInvoicesDtComponent"], {
                                backdrop: 'static',
                                keyboard: false,
                                class: 'modal-lg full-width',
                                initialState: initialState
                            });
                            var subModal = _this.modalImportService.onHide.subscribe(function () {
                                _this.loadList(_this.paramSearch);
                                subModal.unsubscribe();
                            });
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Tải file xml hóa đơn*/
    IndexComponent.prototype.taiHDXml = function () {
        var _this = this;
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                var ids = [];
                ids = _lst.map(function (e) { return e.id; });
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                var sub_1 = this.paymentRService.xuatHDXml(ids).subscribe(function (rs) {
                    if (rs.status == "success") {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].dowloadFile(rs.data.file_name, 'zip', rs.data.file_content);
                        _this.selectedItems = [];
                        _this.selectedRows = [];
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
    /* In biên bản trả hàng */
    IndexComponent.prototype.inBBTraHang = function (data) {
        if (data) {
            if (data.status != _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusInv.DaXuat) {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.not_print_delivery_record, 'error');
                return;
            }
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
            var sub_2 = this.vatService.xuatBBTraHang(data.id).subscribe(function (res) {
                if (res.status === 'success') {
                    var file = res.data.invoice;
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(res.message, 'error');
                }
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            }, function (err) { }, function () {
                sub_2.unsubscribe();
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.not_print_delivery_record, 'error');
            return;
        }
    };
    IndexComponent.prototype.taiHDPdf = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                var ids = _lst.map(function (e) { return e.id; });
                this.downloadPdf.downloadPdf(ids, 'receipts', 'receipt', false);
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
        else if (e.itemData.id == "TAI_HD_PDF") {
            this.taiHDPdf();
        }
    };
    IndexComponent.prototype.LydoKTiepNhan = function (data) {
        var lstErr = JSON.parse(data.error_content_invoice);
        var initialState = {
            lstErr: lstErr,
            notifyType: "THONG_BAO_LOI_CQT"
        };
        this.bsModalSignRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_11__["SendDataForTaxComponent"], {
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
    /* Trạng thái thanh toán */
    IndexComponent.prototype.trangthaithanhtoan = function (data) {
        if (Number.parseInt(data.invoice_number) > 0) {
            if (data.payment_status)
                return "Đã thanh toán";
            else
                return "Chưa thanh toán";
        }
        else
            return "";
    };
    IndexComponent.prototype.iterator = function (a, take, skip) {
        var current = skip * 10;
        var l = a.length;
        var end = current + take;
        var part = a.slice(current, end);
        current = end < l ? end : 0;
        return part;
    };
    IndexComponent.prototype.onContentReady = function (e) {
        if (e) {
            var dataSource = this.dataGrid.instance.getDataSource();
            this.pageSize = dataSource ? dataSource.items().length : 0;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxMenuComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxMenuComponent"])
    ], IndexComponent.prototype, "dxMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expandMenu'),
        __metadata("design:type", Object)
    ], IndexComponent.prototype, "expandMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_18__["DownloadPdfComponent"]),
        __metadata("design:type", _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_18__["DownloadPdfComponent"])
    ], IndexComponent.prototype, "downloadPdf", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/payment-receipt/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/payment-receipt/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_3__["VatService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerService"],
            _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_17__["PaymentReceiptService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_19__["ViewInvoiceService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_20__["InvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/components/invoice/invoice.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/invoice/invoice.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"font-weight: bold; font-size: 16px; text-align: center; padding: 20px 0px;\">\r\n  {{_translate.MENU.receipts_of_fees_and_charges | uppercase}}</h1>\r\n  \r\n<form>  \r\n  <div class=\"invoice-container\">\r\n    <!-- Thông tin trên hóa đơn -->\r\n    <vat-form-invoice [ttDaXuatHoaDon]=\"ttDaXuatHoaDon\" [dataSource]=\"dataSource\" [invoice_products]=\"invoice_products\" [formatter]=\"formatter\"\r\n      [frmData]=\"frmData\" [_objTemplateSelect]=\"_objTemplateSelect\" [_oTemplateTT78]=\"_oTemplateTT78\"\r\n      [extentionGrid]=\"extentionGrid\" (onInvoiceCurrent)=\"onInvoiceCurrent($event)\"\r\n      (onFormChange)=\"getDataInChildForm($event)\"\r\n      [isShowButtonWaiteSign]=\"isShowButtonWaiteSign\" [isTT78]=\"isTT78\" [infoDangKy]=\"infoDangKy\"\r\n      [pkInvoiceSelectWaitSign]=\"pkInvoiceSelectWaitSign\" (onTemplateTypeChange)=\"onTemplateTypeChange($event)\"\r\n      (onTemplateTT78TypeChange)=\"onTemplateTT78TypeChange($event)\" (changeGridProduct) = \"changeGridProduct()\" (changeSLBienLai) = \"changeSLBienLai($event)\"></vat-form-invoice>\r\n    <!-- Hàng hóa trên hóa đơn -->\r\n    <vat-product-grip #child [dataSource]=\"dataSource\" [invoice_products]=\"invoice_products\" *ngIf=\"isMauNhieuPhi\"\r\n      [formDataInInvoice]=\"frmData\" [isTT78]=\"isTT78\" [formatter]=\"formatter\" [isHdGTGT]=\"isHdGTGT\"\r\n      [_objTemplateSelect]=\"_objTemplateSelect\" [_oTemplateTT78]=\"_oTemplateTT78\" [extentionGrid]=\"extentionGrid\"\r\n      (importExcel)=\"fillDataToForm($event)\">\r\n    </vat-product-grip>\r\n\r\n    <dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n      [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n      <div *dxTemplate=\"let data of 'content'\">\r\n        <p style=\"margin-bottom: 35px;\">{{ _translate.CONFIRM.update_customer }}</p>\r\n        <div class=\"pull-right\">\r\n          <dx-button text=\"{{ _translate.CONTROLL.LABEL.update }}\" type=\"default\"></dx-button>\r\n          <dx-button text=\"{{ _translate.CONTROLL.BUTTON.cancel }}\" type=\"default\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </dx-popup>\r\n    <!-- vùng chọn file -->\r\n    <div class=\"row after-table\" *ngIf=\"isMauNhieuPhi\">\r\n      <div class=\"col-md-5\">\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n      </div>\r\n      <div class=\"col-md-4\" style=\"margin-top: 10px\">\r\n        <div class=\"vat money-pull-right\">\r\n          <!-- Tổng tiền sau thuế -->\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_after_vat}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.total_payment\" [format]=\"formatter.tong_tien\" tabIndex=\"-1\" step=\"0\" (onKeyDown)=\"keyDown($event)\"\r\n                (onValueChanged)=\"totalPaymentChange($event)\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"vat total-payment-in-word\">\r\n          <!-- Số tiền bằng chữ -->\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_payment_in_word}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-text-box [(value)]=\"frmData.total_payment_in_word\"></dx-text-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row button-action\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n          <!-- Xem trước biên lai -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" (click)=\"preview()\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"Xem trước biên lai\" type=\"default\"></dx-button>\r\n          <!-- Xem biên lai -->\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"view()\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"Xem biên lai\" type=\"default\"></dx-button>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n          <!-- Xuất biên lai -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !showTraLai && !showKyDuyet\" appScrollToInvalid\r\n            text=\"Xuất biên lai\" [(icon)]=\"this._translate.ICONS.export_inv\"\r\n            (click)=\"eSubmit('XUAT',true)\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n          </dx-button>\r\n          <!-- Ghi tạm -->\r\n          <dx-button disableDoubleClick *ngIf=\"showButtonGhiTam()\" appScrollToInvalid\r\n            text=\"{{ _translate.CONTROLL.BUTTON.save_temporary}}\" [(icon)]=\"this._translate.ICONS.save\"\r\n            (click)=\"eSubmit('GHI_TAM')\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\"\r\n            [disabled]=\"isDisable\">\r\n          </dx-button>\r\n          <!-- Tạo mới -->\r\n          <!-- <dx-button *ngIf=\"!showTraLai && !showKyDuyet\" text=\"{{ _translate.CONTROLL.BUTTON.create_new}}\"\r\n            [(icon)]=\"this._translate.ICONS.add_new\" (click)=\"handleAddNew()\" type=\"default\"></dx-button> -->\r\n          <!-- Đóng -->\r\n          <dx-button *ngIf=\"!showTraLai\" appBackButton type=\"default\" [(icon)]=\"this._translate.ICONS.come_back\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.processing }}\"\r\n          [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n          [(visible)]=\"showPopupImport\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/invoice/invoice.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/invoice/invoice.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container{padding-top:15px}.after-table{margin-top:10px}::ng-deep .vat.total-payment-in-word{margin-top:15px}::ng-deep .vat.total-payment-in-word input{color:#000000;font-weight:bold;text-align:right}.vat.total-payment-in-word .dx-field-label{width:12%}.vat.total-payment-in-word .dx-field-value{width:88% !important}::ng-deep .vat.money-pull-right input{text-align:right}::ng-deep .pr-0.money-pull-right input{text-align:right}::ng-deep .prt-1.money-pull-right input{text-align:right}.vat.money-pull-right .dx-field-label{width:45%}.vat.money-pull-right .dx-field-value{width:55% !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}.button-action{margin-top:18px}.table-footer{height:40px;background:#E3E3E3;padding-top:3px}.table-footer .table-footer-1{display:inline-block;width:109px;float:right}.table-footer .table-footer-2{display:inline-block;width:120px;margin-right:32px;float:right}.table-footer .table-footer-3{display:inline-block;width:150px;margin-right:90px;float:right}.table-footer .table-footer-4{display:inline-block;width:109px;margin-right:190px;float:right}.dx-field-value.dx-widget,.dx-field-value:not(.dx-widget)>.dx-widget{height:25px}.pr-0.dx-selectbox .dx-texteditor-input:-moz-read-only{padding-bottom:17px}.pr-0.dx-selectbox .dx-texteditor-input:read-only{padding-bottom:17px}::ng-deep .nd92Notify .modal-content{width:80%}::ng-deep .mauhoadon .modal-content{width:67%}::ng-deep .mauhoadon43 .modal-content{width:72%}::ng-deep .thue-suat-may-bay .dx-selectbox .dx-texteditor-input{padding-bottom:13px}::ng-deep .prv-s-invoice .modal-content{border:0px;border-radius:0px}::ng-deep .v-s-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/invoice/invoice.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/invoice/invoice.component.ts ***!
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
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-grip/product-grip.component */ "./src/app/modules/payment-receipt/components/product-grip/product-grip.component.ts");
/* harmony import */ var _form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-invoice/form-invoice.component */ "./src/app/modules/payment-receipt/components/form-invoice/form-invoice.component.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../send-invoices/send-invoices.component */ "./src/app/modules/payment-receipt/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_payment_receipt_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/payment-receipt/shared */ "./src/app/modules/payment-receipt/shared/index.ts");
/* harmony import */ var _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/payment-receipt/shared/payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
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
    function InvoiceComponent(route, router, modalService, vatService, socketService, authService, cdRef, translate, customersService, confirmService, configsService, spinner, paymentRService, modalImportService, vPreviewInvService, customeModalService) {
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
        this.configsService = configsService;
        this.spinner = spinner;
        this.paymentRService = paymentRService;
        this.modalImportService = modalImportService;
        this.vPreviewInvService = vPreviewInvService;
        this.customeModalService = customeModalService;
        this.frmData = new _modules_payment_receipt_shared__WEBPACK_IMPORTED_MODULE_18__["PaymentReceiptModel"](1);
        this.frmTraLai = {
            reason: ''
        };
        this.ttDaXuatHoaDon = false; // Trạng thái đã xuất hóa đơn hay chưa
        this.showTraLai = false;
        this.showKyDuyet = false;
        this.isHdGTGT = false;
        this.isAccessExportInv = false;
        this.showPopup = false;
        this.formatter = {};
        this.select = {};
        this.isDisable = false;
        this._objTemplateSelect = {};
        this._oTemplateTT78 = {};
        this.formatNumber = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].numberInvoiceFormatDev;
        this.extentionGrid = {};
        this.fileData = [];
        this.tempKiFile = 0;
        this.confirmCheckPreview = false;
        this._isValid = false;
        this.isTuChoi = false;
        this.productCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_16__["pattern"].productCodePattern;
        this.isShowButtonWaiteSign = true;
        this.isTT78 = false;
        this.isPassNQ43 = false;
        this.isDisplayGuideSale = false;
        this.isMauNhieuPhi = false;
        this.isMauInSan = false;
        this.so_luong_bien_lai = 1;
        this.taxCode = '';
        this.receiptArray = [];
        this.showPopupImport = false;
        this.valueProgress = 0;
        this.errorImport = false;
        this.totalInvoice = 0;
        this.countInvoice = 1;
        this.countReceiptGhiTam = 1;
        this.totalRecepitGhiTam = 0;
        this.isXuatHangLoat = false;
        this.isGhiTamHangLoat = false;
        this.percentComplete = 0;
        this.idArray = [];
        /* Tổng tiền thanh toán */
        this.totalPaymentChange = function (e) {
            var currency_code = _this.frmData.currency_code;
            if (_this.configs.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            _this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].tienBangChu(e.value, _this.getFormatterToNumber(_this.formatter.tong_tien), currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return 'Hoàn thành: ' + percent + '%';
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    InvoiceComponent.prototype.ngAfterViewInit = function () {
        if (this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat || (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam && _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.receipt_number) != "" && Number(this.frmData.receipt_number) > 0)) {
            this.disablleScreen();
            if (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam && _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.receipt_number) != "" && Number(this.frmData.receipt_number) > 0)
                this.ttDaXuatHoaDon = false;
            this.cdRef.detectChanges();
        }
        this.setDataSessionStorage(this.frmData);
    };
    /* Disbale Form và bảng hàng hóa */
    InvoiceComponent.prototype.disablleScreen = function () {
        this.formInvoice.readonlyAllForm();
        if (this.productGrip)
            this.productGrip.ttDaXuatHoaDon = true;
        this.ttDaXuatHoaDon = true;
    };
    InvoiceComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        if (!this.isXuatHangLoat)
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var status;
        if (!this.frmData.id && !this.frmData.receipt_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].processInv.ThemMoi;
        }
        if (this.frmData.id && !this.frmData.receipt_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam;
        }
        if (this.frmData.id && this.frmData.receipt_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.ChoKy;
        }
        var xmlInvoice = "";
        var isNewXml = 0;
        this.receipt_sign_date = null;
        if (status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].processInv.ThemMoi) {
            var sub_1 = this.paymentRService.ghiTam(this.frmData, true).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.receipt_number = rs.data.receipt_number;
                    _this.frmData.receipt_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.receipt_date).format('YYYY-MM-DD HH:mm:ss');
                    var receipt_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.receipt_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.receipt_sign_date = receipt_sign_date;
                    _this.frmData.id = rs.data.id;
                    _this.idArray.push(rs.data.id);
                    _this.setDataSessionStorage(_this.frmData);
                    // demo kí số vào file
                    isNewXml = rs.data.is_new_xml;
                    if (isNewXml)
                        _this.nodeSign = "//HDon/DSCKS/NBan";
                    else
                        _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                    //  Lấy xml từ serer
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (xmlInvoice != "") {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                            _this.goiApiXuatHoaDon(xmlInvoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, receipt_sign_date);
                        }
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                if (!_this.isXuatHangLoat)
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else if (status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam) {
            var sub_2 = this.paymentRService.edit(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.receipt_number = rs.data.receipt_number;
                    _this.frmData.receipt_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.receipt_date).format('YYYY-MM-DD HH:mm:ss');
                    var receipt_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.receipt_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.receipt_sign_date = receipt_sign_date;
                    _this.idArray.push(_this.frmData.id);
                    // demo kí số vào file
                    //  Lấy xml từ server
                    isNewXml = rs.data.is_new_xml;
                    if (isNewXml)
                        _this.nodeSign = "//HDon/DSCKS/NBan";
                    else
                        _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (xmlInvoice != "") {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                            _this.goiApiXuatHoaDon(xmlInvoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, receipt_sign_date);
                        }
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                sub_2.unsubscribe();
            });
        }
        else if (status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.ChoKy) {
            var sub_3 = this.paymentRService.edit(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.receipt_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.receipt_date).format('YYYY-MM-DD HH:mm:ss');
                    var receipt_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.receipt_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.receipt_sign_date = receipt_sign_date;
                    // demo kí số vào file
                    //  Lấy xml từ serer
                    isNewXml = rs.data.is_new_xml;
                    _this.idArray.push(_this.frmData.id);
                    if (isNewXml)
                        _this.nodeSign = "//HDon/DSCKS/NBan";
                    else
                        _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (xmlInvoice != "") {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                            _this.goiApiXuatHoaDon(xmlInvoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, receipt_sign_date);
                        }
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                if (!_this.isXuatHangLoat)
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_3.unsubscribe();
            });
        }
    };
    InvoiceComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        this.socketService.kyBienLai(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate);
    };
    InvoiceComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        if (this.isXuatHangLoat) {
            this.percentComplete = 100 / this.totalInvoice;
        }
        else {
            setTimeout(function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            }, 20);
        }
        var sub = this.paymentRService.xuatBienLai({
            id: this.frmData.id,
            xml_string: xml_string,
            receipt_sign_date: this.receipt_sign_date
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.disablleScreen();
                _this.isExportInvoice = true;
                if (_this.isXuatHangLoat) {
                    _this.valueProgress += _this.percentComplete;
                    if (_this.countInvoice < _this.totalInvoice) {
                        _this.countInvoice++;
                        _this.xuatHoaDon();
                    }
                    else if (_this.countInvoice == _this.totalInvoice) {
                        _this.isXuatHangLoat = false;
                        _this.showPopupImport = false;
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất biên lai thành công', 'success');
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất biên lai thành công', 'success');
                    _this.setDataSessionStorage(_this.frmData);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            if (!_this.isXuatHangLoat)
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // kết nối websocket
        this.connectWebsocket();
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser.account) {
            this.taxCode = this.currentUser.account.tax_code;
        }
        this.routeSub = this.route.data.subscribe(function (data) {
            // get cấu hình
            var danh_muc = _this.authService.getDMLocal();
            _this.configs = _this.authService.getConfigs();
            _this.infoDangKy = _this.authService.getInfoRegister();
            _this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(_this.configs.decimal_places_json);
            _this.frmData.display_currency = JSON.stringify(_this.configs.display_currency);
            _this.formatter.display_int = _this.configs.system_parameter.display_int;
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            _this.isTT78 = true;
            // if (this.infoDangKy) {
            //   if (this.infoDangKy.status == "CHAP_NHAN")
            //     this.isTT78 = true;
            // }
            var isEdit = false;
            var invoice;
            if (data.init[2] == true)
                isEdit = true;
            var temptTT78 = [];
            if (isEdit) {
                temptTT78 = data.init[3];
                invoice = data.init[1];
            }
            else {
                temptTT78 = data.init[1];
            }
            _this.select.templatesTT78 = temptTT78;
            if (isEdit || _this.vatService.isCopy) {
                if (_this.vatService.isCopy) {
                    _this.khoiTaoKhiSua(_this.vatService.data);
                }
                else {
                    _this.khoiTaoKhiSua(invoice);
                }
            }
            else {
                _this.khoiTaoKhiThemMoi();
            }
        });
        var currentUser = this.authService.getCurrentUser();
        if (currentUser && currentUser.account && (currentUser.account.tax_code == "0102519041-999" || currentUser.account.tax_code == "8888888803" || currentUser.account.tax_code == "9999999671"))
            this.isPassNQ43 = true;
        var listpermissions = currentUser.user.permissions.split(',');
        var _obj = listpermissions.filter(function (p) { return p === 'phe_duyet'; });
        if (_obj.length > 0) {
            this.isAccessExportInv = true;
        }
        else {
            this.isAccessExportInv = false;
        }
        this.setDataSessionStorage(this.frmData);
    };
    InvoiceComponent.prototype.setDataSessionStorage = function (data) {
        this.valueChange = JSON.stringify(data);
    };
    InvoiceComponent.prototype.checkDataFormChange = function (dataChange, dataForm) {
        var dataBefore = JSON.parse(dataChange);
        console.log("dataBefore", dataBefore);
        var dataAfter = JSON.parse(JSON.stringify(dataForm));
        console.log("dataAfter", dataAfter);
        return lodash__WEBPACK_IMPORTED_MODULE_13__["isEqual"](dataBefore, dataAfter);
    };
    /* Kết nối đến socket */
    InvoiceComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                if (data.Data.Name === 'hoadon.xml') {
                    _this.goiApiXuatHoaDon(data.Data.Content);
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    _this.frmData.issuer_name = data.Data.IssuerName;
                    _this.xuLiApiKhiXuat();
                }
            }
        });
    };
    InvoiceComponent.prototype.khoiTaoKhiThemMoi = function () {
        // Khởi tạo thông tin hàng hóa
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: 'id',
            data: this.frmData.invoice_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.invoice_products
        });
        if (this.select.templatesTT78.length) {
            this.frmData.template_id = this.select.templatesTT78[0].value;
            this.frmData.receipt_series = this.select.templatesTT78[0].receipt_series;
            this.frmData.template_code = this.select.templatesTT78[0].template_code;
            this.frmData.template_type = this.select.templatesTT78[0].template_type;
            for (var key in this.select.templatesTT78[0]) {
                if (this.select.templatesTT78[0].hasOwnProperty(key)) {
                    this._oTemplateTT78[key] = this.select.templatesTT78[0][key];
                }
            }
            this.invoiceTemplateTT78 = this.select.templatesTT78[0];
            if (this.invoiceTemplateTT78.template_type == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.BienLaiInSanMenhGia) {
                this.frmData.fee_name = this.select.templatesTT78[0].fee_name;
                this.frmData.total_payment = this.select.templatesTT78[0].fee_money;
                this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].tienBangChu(this.frmData.total_payment, 0, this.frmData.currency_code, this.configs.system_parameter.display_read_money_english);
                this.isMauInSan = true;
            }
            else
                this.isMauInSan = false;
            if (parseInt(this.invoiceTemplateTT78.numberRow) != 100)
                this.isMauNhieuPhi = true;
            else
                this.isMauNhieuPhi = false;
        }
        this.frmData.currency_code = 'VND';
    };
    InvoiceComponent.prototype.khoiTaoKhiSua = function (data) {
        var _this = this;
        // Khởi tạo thông tin hàng hóa
        var _lst = this.frmData.setInvoice_products_data(data.receipt_fees);
        if (_lst) {
            _lst.forEach(function (item) {
                if (item.fee_name && item.unit_name) {
                    var obj1 = _this.select.unit_codes.filter(function (p) { return p.name === item.unit_name; })[0];
                    if (!obj1) {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.unit_code) == "")
                            item.unit_code = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._convertToViKdau(item.unit_name);
                        var oDuplicate = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                        if (oDuplicate)
                            item.unit_code = item.unit_code + _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].addtionalUnitCode();
                    }
                    else if (!item.unit_code || (item.unit_code && item.unit_code != obj1.code))
                        item.unit_code = obj1.code;
                }
            });
        }
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: 'id',
            data: _lst
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.invoice_products
        });
        // khởi tạo dữ liệu form
        this.frmData.fillFormData(data);
        // lấy file
        if (this.vatService.isCopy) {
            var _oTempt = this.select.templatesTT78.filter(function (p) { return p.value === _this.frmData.template_id; })[0];
            if (_oTempt) {
                this.frmData.template_id = _oTempt.value;
                this.frmData.receipt_series = _oTempt.receipt_series;
                this.frmData.template_code = _oTempt.template_code;
                this.frmData.template_type = _oTempt.template_type;
            }
            else {
                this.frmData.template_id = null;
                this.frmData.receipt_series = null;
                this.frmData.template_code = null;
                this.frmData.template_type = null;
            }
        }
        else {
            this.fileData = data.invoice_files;
        }
        this.select.templatesTT78.forEach(function (item) {
            if (item.value === _this.frmData.template_id) {
                _this.invoiceTemplateTT78 = item;
            }
        });
        this.select.templatesTT78.some(function (item) {
            if (item.value === _this.frmData.template_id) {
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        _this._oTemplateTT78[key] = item[key];
                    }
                }
                return true;
            }
        });
        // cấu hình thập phân thêm mới
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
        this.pkInvoiceSelectWaitSign = this.frmData.id;
    };
    /*  */
    InvoiceComponent.prototype.onTemplateTypeChange = function (e) {
        this.invoicereleaseTempt = e;
    };
    InvoiceComponent.prototype.onTemplateTT78TypeChange = function (e) {
        this.invoiceTemplateTT78 = e;
        if (parseInt(this.invoiceTemplateTT78.numberRow) != 100)
            this.isMauNhieuPhi = true;
        else
            this.isMauNhieuPhi = false;
        if (this.invoiceTemplateTT78.template_type == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.BienLaiInSanMenhGia)
            this.isMauInSan = true;
        else
            this.isMauInSan = false;
    };
    InvoiceComponent.prototype.changeGridProduct = function () {
        //
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: 'id',
            data: this.frmData.invoice_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.invoice_products
        });
    };
    /*  */
    InvoiceComponent.prototype.onInvoiceCurrent = function (e) {
        this.pkInvoiceCurrent = e;
    };
    /*  */
    InvoiceComponent.prototype.fillDataToForm = function (e) {
        this.frmData.customer_name = e[0];
    };
    /*  */
    InvoiceComponent.prototype.getDataInChildForm = function (e) {
        this.frmData = e;
        this.frmTraLai.reason = e.lido;
    };
    /* Tính tiền */
    InvoiceComponent.prototype.onNumberChange = function () {
    };
    InvoiceComponent.prototype.changeEnvironmentalFee = function () {
    };
    /* Lấy data khi chọn file đính kèm bảng kê */
    InvoiceComponent.prototype.getFileData = function (fileData) {
        this.fileData = fileData;
    };
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
    /* Xem/In chuyển đổi */
    InvoiceComponent.prototype.inChuyenDoiText = function () {
    };
    InvoiceComponent.prototype.onNumberTicketChange = function () {
    };
    /* Xem trước hóa đơn */
    InvoiceComponent.prototype.preview = function () {
        var _this = this;
        setTimeout(function () {
            _this.handleFormData();
            if (!_this._validForm(true)) {
                return;
            }
            var data = _this.paymentRService.taodulieuXemTruocMau(_this.frmData);
            data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            _this.vPreviewInvService.xemMau(data);
        }, 300);
    };
    InvoiceComponent.prototype.view = function () {
        if (this.isMauInSan && this.so_luong_bien_lai > 1) {
            if (this.configs.system_parameter.view_multi_invoice) {
                var data = this.paymentRService.taodulieuXemMau(this.idArray);
                data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
                this.vPreviewInvService.xemMau(data);
            }
            else {
                var initialState = {
                    items: this.idArray,
                    isXuatHD: false,
                    hinhthucxuat: '',
                    typeAction: _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].typeCode.xem_bien_lai
                };
                this.vPreviewInvService.xemMauPhanTrang(initialState);
            }
        }
        else {
            var ids = [];
            ids.push(this.frmData.id);
            var data = this.paymentRService.taodulieuXemMau(ids);
            data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(data);
        }
    };
    /* Ghi tạm */
    InvoiceComponent.prototype.ghiTam = function () {
        var _this = this;
        if (this.isGhiTamHangLoat) {
            this.frmData = this.receiptArray[this.countReceiptGhiTam - 1];
            this.percentComplete = 100 / this.totalRecepitGhiTam;
        }
        this.isDisable = true;
        if (!this.isGhiTamHangLoat)
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        if (this.frmData.id) {
            var sub_4 = this.paymentRService.edit(this.frmData.id, this.frmData).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.id = rs.data.id;
                    if (_this.isGhiTamHangLoat) {
                        _this.valueProgress += _this.percentComplete;
                        if (_this.countReceiptGhiTam < _this.totalRecepitGhiTam) {
                            _this.countReceiptGhiTam++;
                            _this.ghiTam();
                        }
                        else if (_this.countReceiptGhiTam == _this.totalRecepitGhiTam) {
                            _this.isGhiTamHangLoat = false;
                            _this.showPopupImport = false;
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                        _this.setDataSessionStorage(_this.frmData);
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                if (!_this.isGhiTamHangLoat)
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                _this.isDisable = false;
                sub_4.unsubscribe();
            });
        }
        else {
            var sub_5 = this.paymentRService.ghiTam(this.frmData).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.id = rs.data.id;
                    if (_this.isGhiTamHangLoat) {
                        _this.valueProgress += _this.percentComplete;
                        if (_this.countReceiptGhiTam < _this.totalRecepitGhiTam) {
                            _this.countReceiptGhiTam++;
                            _this.ghiTam();
                        }
                        else if (_this.countReceiptGhiTam == _this.totalRecepitGhiTam) {
                            _this.isGhiTamHangLoat = false;
                            _this.showPopupImport = false;
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                        _this.setDataSessionStorage(_this.frmData);
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    _this.isDisable = false;
                }
            }, function (err) {
            }, function () {
                if (!_this.isGhiTamHangLoat)
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                _this.isDisable = false;
                sub_5.unsubscribe();
            });
        }
    };
    InvoiceComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        if (this.isXuatHangLoat)
            this.frmData = this.receiptArray[this.countInvoice - 1];
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            this.socketService.kyBienLai(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
        }
    };
    InvoiceComponent.prototype.taoDSBienLai = function (isXuatHoaDon) {
        this.receiptArray = [];
        this.idArray = [];
        this.receiptArray.push(this.frmData);
        for (var i = 1; i < this.so_luong_bien_lai; i++) {
            var frmDataClone = Object.assign({}, this.frmData);
            frmDataClone.id = null;
            if (frmDataClone.receipt_fees && frmDataClone.receipt_fees.length > 0) {
                frmDataClone.receipt_fees.forEach(function (item) {
                    item.id = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].makeid();
                });
            }
            this.receiptArray.push(frmDataClone);
        }
        this.showPopupImport = true;
        this.countInvoice = 1;
        this.countReceiptGhiTam = 1;
        if (isXuatHoaDon) {
            this.totalInvoice = this.receiptArray.length;
            this.xuatHoaDon();
        }
        else {
            this.totalRecepitGhiTam = this.receiptArray.length;
            this.ghiTam();
        }
    };
    /* Xuất chờ ký */
    InvoiceComponent.prototype.xuatChoKy = function (data) {
    };
    InvoiceComponent.prototype.dongtralai = function () {
        var link = document.createElement('a');
        link.setAttribute('target', '_self');
        link.setAttribute('href', '/system/invoice-sync/');
        document.body.appendChild(link);
        link.click();
    };
    /* Trả lại */
    InvoiceComponent.prototype.traLai = function () {
        var _this = this;
        if (this.frmTraLai.reason === undefined || this.frmTraLai.reason === '') {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.reason_return + ' ' + this._translate.VALIDATION.required, 'error');
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var sub_6 = this.vatService.traLaiHoaDon({
                id: this.frmData.id,
                reason: this.frmTraLai.reason
            }).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.return_success, 'success');
                    var link = document.createElement('a');
                    link.setAttribute('target', '_self');
                    link.setAttribute('href', '/system/invoice-sync/');
                    document.body.appendChild(link);
                    link.click();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_6.unsubscribe();
            });
        }
    };
    /* Validate */
    InvoiceComponent.prototype._validForm = function (isOnlyCheckAm) {
        var _this = this;
        var _isValid = true;
        if (isOnlyCheckAm) {
            if (this.checkProductCode())
                return true;
            else
                return false;
        }
        if (this.frmData.currency_code && this.frmData.currency_code != "VND" && this.frmData.currency_rate === null) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.currency_rate + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.total_payment && this.frmData.total_payment !== 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.amount_after_vat + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (this.isMauInSan && this.so_luong_bien_lai <= 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Số lượng biên lai phải lớn hơn 0', 'error');
            return false;
        }
        if (this.isMauNhieuPhi) {
            var _lst = this.frmData.receipt_fees.filter(function (p) { return p.fee_name; });
            if (_lst.length === 0) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Chưa nhập thông tin loại phí, lệ phí', 'error');
                if (this.productGrip && this.productGrip.dataGrid)
                    this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'fee_code'));
                return false;
            }
            else {
                if (!this.checkProductCode())
                    return false;
                var _lstValidThanhTien = this.frmData.receipt_fees.filter(function (p) { return !p.amount && p.amount !== 0; });
                if (_lstValidThanhTien.length == this.frmData.receipt_fees.length) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.GRID.INVOICE_DETAILS.amount + ' ' + this._translate.VALIDATION.required, 'error', 5000);
                    if (this.productGrip && this.productGrip.dataGrid)
                        this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'amount'));
                    return false;
                }
                // const _lstValidTongTien = this.frmData.receipt_fees.filter(p => !p.amount_after_vat && p.amount_after_vat !== 0);
                // if (_lstValidTongTien.length == this.frmData.receipt_fees.length) {
                //   Library.notify(this._translate.CONTROLL.LABEL.total_money_goods + ' ' + this._translate.VALIDATION.required, 'error', 5000);
                //   if (this.productGrip && this.productGrip.dataGrid)
                //   this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'amount_after_vat'));
                //   return false;
                // }
                this.invoice_products.load().then(function (dataSource) {
                    dataSource.forEach(function (item, index) {
                        // if (VStringService._getValueToString(item.fee_name) == "" && _isValid) {
                        //   Library.notify("Tên loại phí, lệ phí" + " " + this._translate.VALIDATION.required, 'error');
                        //   if (this.productGrip && this.productGrip.dataGrid)
                        //     this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(index, 'fee_name'));
                        //   _isValid = false;
                        //   return false;
                        // }
                        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.fee_name) != "") {
                            if (item.amount == null && _isValid) {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Thành tiền" + " " + _this._translate.VALIDATION.required, 'error');
                                if (_this.productGrip && _this.productGrip.dataGrid)
                                    _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'amount'));
                                _isValid = false;
                                return false;
                            }
                        }
                    });
                });
            }
        }
        return _isValid;
    };
    /* Kiểm tra Mã hàng phải nhập không dấu, không chứa ký tự đặc biệt và tối đa 50 ký tự */
    InvoiceComponent.prototype.checkProductCode = function () {
        var isValid = true;
        return isValid;
    };
    /* Xuất hóa đơn */
    InvoiceComponent.prototype.eSubmit = function (type) {
        var _this = this;
        var checkValid = this.formInvoice.form.instance.validate();
        if (!checkValid.isValid) {
            return;
        }
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        this.total_payment = "";
        setTimeout(function () {
            _this.handleFormData();
            if (type !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam) {
                _this._isValid = _this._validForm(false);
                if (!_this._isValid) {
                    return;
                }
            }
            if (_this.frmData.receipt_options) {
                _this.frmData.receipt_options.forEach(function (item) {
                    delete item['is_show'];
                    delete item['type'];
                    delete item['width'];
                    delete item['statusData'];
                });
            }
            if (type === 'XUAT') {
                _this.processXuatHoaDon(type);
            }
            else {
                _this.processGhiTam();
            }
        }, 300);
    };
    /* Xử lý xuất hóa đơn */
    InvoiceComponent.prototype.processXuatHoaDon = function (type) {
        var _index = 0;
        var _lstInv = [];
        this.invoice_products.load().then(function (dataSource) {
            _lstInv = dataSource.filter(function (p) { return p.product_name; });
        });
        if (this.confirmCheckPreview) {
            if (this.isMauInSan && this.so_luong_bien_lai > 1) {
                this.isXuatHangLoat = true;
                this.taoDSBienLai(true);
            }
            else {
                this.isXuatHangLoat = false;
                this.xuatHoaDon();
            }
            this.confirmCheckPreview = false;
        }
        else {
            this.previewBeforeExport(type);
        }
    };
    InvoiceComponent.prototype.previewBeforeExport = function (type) {
        var _this = this;
        this.handleFormData();
        var du_lieu = this.paymentRService.taodulieuXemTruocMau(this.frmData);
        du_lieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
        var content_invoice = {
            du_lieu: du_lieu,
            ngay_hoa_don: "",
            tong_tien: "",
            title_invoice_type: this._translate.THONG_TIN.ban_du_thao_bien_lai.toUpperCase(),
            note_warn: this._translate.THONG_TIN.luu_y_truoc_khi_xuat_bien_lai,
            is_display_img_note: true,
            text_ngay_hoa_don: this._translate.THONG_TIN.ngay_bien_lai,
            text_tong_tien: this._translate.THONG_TIN.so_tien,
            question_again: this._translate.THONG_TIN.ban_co_chac_chan_xuat_bien_lai_khong
        };
        if (this.isMauInSan) {
            content_invoice["so_luong_bien_lai"] = this.so_luong_bien_lai < 10 ? "0" + this.so_luong_bien_lai : this.so_luong_bien_lai;
        }
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
    /* Xử lý ghi tạm hóa đơn */
    InvoiceComponent.prototype.processGhiTam = function () {
        var isTamDongGhiTamHangLoat = true;
        if (!isTamDongGhiTamHangLoat) {
            this.isGhiTamHangLoat = true;
            this.taoDSBienLai(false);
        }
        else {
            this.isGhiTamHangLoat = false;
            this.ghiTam();
        }
    };
    InvoiceComponent.prototype.subData = function (type, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var checkValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        checkValid = this.formInvoice.form.instance.validate();
                        if (!checkValid.isValid) {
                            return [2 /*return*/, false];
                        }
                        if (this.windowPreviewBeforeSubmit) {
                            this.windowPreviewBeforeSubmit.focus();
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.handleFormDataSub()];
                    case 1:
                        _a.sent();
                        if (this.frmData.receipt_options) {
                            this.frmData.receipt_options.forEach(function (item) {
                                delete item['is_show'];
                                delete item['type'];
                                delete item['width'];
                                delete item['statusData'];
                            });
                        }
                        if (this.frmData.total_payment > 20000000 && (this.frmData.payment_method_name === 'TM')) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.payment_method_more_than_20_million, 'error');
                            return [2 /*return*/, false];
                        }
                        if (!data.id) return [3 /*break*/, 6];
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                        if (!!this.isTT78) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.vatService.edit(data.id, data).toPromise().then(function (res) {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                                if (res.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, this.vatService.editTT78(data.id, data).toPromise().then(function (res) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                            if (res.status === 'success') {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                return true;
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                return false;
                            }
                        })];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [3 /*break*/, 10];
                    case 6:
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                        if (!!this.isTT78) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.vatService.ghiTam(data).toPromise().then(function (res) {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                                if (res.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8: return [4 /*yield*/, this.vatService.ghiTamTT78(data).toPromise().then(function (res) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                            if (res.status === 'success') {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                return true;
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                return false;
                            }
                        })];
                    case 9: return [2 /*return*/, _a.sent()];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /* Tạo mới */
    InvoiceComponent.prototype.handleAddNew = function () {
        var _this = this;
        if (this.isExportInvoice) {
            this.addNew();
        }
        else {
            if (!this.checkDataFormChange(this.valueChange, this.frmData)) {
                this.confirmService.confirm()
                    .subscribe(function (value) {
                    switch (value) {
                        case 'yes':
                            _this.subData(_core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam, _this.frmData).then(function (res) {
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
    /* Tạo mới */
    InvoiceComponent.prototype.addNew = function () {
        var inv = Object.assign({}, this.frmData);
        this.frmData = new _modules_payment_receipt_shared__WEBPACK_IMPORTED_MODULE_18__["PaymentReceiptModel"](1);
        this.frmData.receipt_date = null;
        this.frmData.template_id = inv.template_id;
        this.frmData.payment_method_name = inv.payment_method_name;
        this.frmData.payment_method_code = inv.payment_method_code;
        this.frmData.currency_code = inv.currency_code;
        this.frmData.template_code = inv.template_code;
        this.frmData.template_type = inv.template_type;
        this.frmData.receipt_series = inv.receipt_series;
        this.frmData.receipt_type = inv.receipt_type;
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: 'id',
            data: this.frmData.invoice_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.invoice_products
        });
        this.productGrip.ttDaXuatHoaDon = false;
        this.productGrip.createUpdateEvent();
        this.formInvoice.removeReadonlyAllForm();
        this.formInvoice.emails = [];
        this.ttDaXuatHoaDon = false;
        this.setDataSessionStorage(this.frmData);
    };
    InvoiceComponent.prototype.handleFormData = function () {
        var _this = this;
        var invoice_products = [];
        this.invoice_products.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                delete item.error;
                if (item.fee_code || item.fee_name) {
                    invoice_products.push(item);
                }
            });
            _this.frmData.receipt_fees = invoice_products;
            _this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
        });
    };
    InvoiceComponent.prototype.handleFormDataSub = function () {
        var _this = this;
        var wait = function (delay) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return new Promise(function (resolve) { return setTimeout.apply(void 0, [resolve, delay].concat(args)); });
        };
        return wait(200).then(function () {
            _this.tempKiFile = 0;
            var invoice_products = [];
            _this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    delete item.error;
                    if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                        item.row_content = item.product_name;
                        invoice_products.push(item);
                        if (item.is_transport_number) {
                        }
                    }
                });
                _this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
            });
            return true;
        });
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
    };
    InvoiceComponent.prototype.xemlydotuchoi = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.vatService.showToSendInvoice(this.frmData.id).subscribe(function (rs) {
            if (rs.status === 'success') {
                var initialState = {
                    invoice: rs.data.invoice,
                    listDM: _this.listDM
                };
                _this.bsModalRef = _this.modalService.show(_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_12__["SendInvoicesComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem) {
                    }
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    InvoiceComponent.prototype.onVatChange = function () {
    };
    InvoiceComponent.prototype.canDeactivate = function () {
        return true;
    };
    InvoiceComponent.prototype.keyDown = function (e) {
        if (e.event.key === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    InvoiceComponent.prototype.kiemtraToolKy = function () {
        return true;
    };
    InvoiceComponent.prototype.guideSales = function () {
        this.isDisplayGuideSale = !this.isDisplayGuideSale;
    };
    InvoiceComponent.prototype.onChangeSalePercen = function (e) {
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
        this.onNumberTicketChange();
    };
    InvoiceComponent.prototype.changeSLBienLai = function (value) {
        this.so_luong_bien_lai = value;
    };
    InvoiceComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    InvoiceComponent.prototype.onImportHiding = function (e) {
        // let r = true;
        // if (this.valueProgress < 100 && this.errorImport == false) {
        //   r = confirm("Cảnh báo: Quá trình xuất biên lai sẽ dừng lại nếu bạn đóng cửa sổ này");
        // }
        // if (r) {
        //   if (this.subXuatHoaDon) {
        //     this.subXuatHoaDon.unsubscribe();
        //   }
        //   this.valueProgress = 0;
        //   this.totalInvoice = 0;
        // } else {
        //   e.cancel = true;
        // }
    };
    InvoiceComponent.prototype.showButtonGhiTam = function () {
        if (!this.ttDaXuatHoaDon && !this.isMauInSan)
            return true;
        return false;
    };
    InvoiceComponent.prototype.setUrlNavigate = function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_4__["ProductGripComponent"]),
        __metadata("design:type", _product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_4__["ProductGripComponent"])
    ], InvoiceComponent.prototype, "productGrip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_5__["FormInvoiceComponent"]),
        __metadata("design:type", _form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_5__["FormInvoiceComponent"])
    ], InvoiceComponent.prototype, "formInvoice", void 0);
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/modules/payment-receipt/components/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/modules/payment-receipt/components/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_11__["CustomersService"],
            _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_15__["ConfigsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerService"],
            _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_19__["PaymentReceiptService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_20__["ViewInvoiceService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_21__["MyBsModalService"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/components/keep-number/keep-number.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/keep-number/keep-number.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">HÓA ĐƠN CHỜ KÝ</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"cancelForm\" [formData]=\"frmData\" validationGroup=\"formData\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item [label]=\"{text: 'Mẫu hóa đơn'}\" dataField=\"invoice_release_id\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: invoice_releases, displayExpr: 'name', valueExpr: 'value', onValueChanged: invoiceReleaseChange}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Mẫu hóa đơn không được để trống\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"invoice_type_name\" [label]=\"{text: 'Loại hóa đơn'}\" [editorOptions]=\"{disabled: true}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"invoice_date\" [label]=\"{text: 'Ngày hóa đơn'}\" editorType=\"dxDateBox\" [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd'}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"number_of_invoice\" [label]=\"{text: 'Số lượng hóa đơn'}\" editorType=\"dxNumberBox\">\r\n          <dxi-validation-rule type=\"required\" message=\"Số lượng hóa đơn không được để trống\"></dxi-validation-rule>\r\n          <dxi-validation-rule type=\"range\" [max]=\"soTon\" message=\"Số hóa đơn vượt quá số hóa đơn đã đăng ký\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item name=\"text-support\">\r\n          <div *dxTemplate>\r\n            <p *ngIf=\"soTon\" style=\"margin-top: 3px;\">(Tổng số hóa đơn còn lại: {{ soTon }})</p>\r\n          </div>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"Ghi\" icon=\"fa fa-floppy-o\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button text=\"Quay lại\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/keep-number/keep-number.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/keep-number/keep-number.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/keep-number/keep-number.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/keep-number/keep-number.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: KeepNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepNumberComponent", function() { return KeepNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KeepNumberComponent = /** @class */ (function () {
    function KeepNumberComponent(bsModalRef, vatService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.frmData = {};
        this.soTon = 0;
        this.invoiceReleaseChange = function (e) {
            console.log(e.value);
            _this.invoice_releases.some(function (item) {
                if (item.value == e.value) {
                    _this.frmData.invoice_type_name = item.invoice_type_name;
                    _this.frmData.template_id = item.template_id;
                    _this.soTon = item.soTon;
                    return true;
                }
            });
        };
    }
    KeepNumberComponent.prototype.ngOnInit = function () {
        var invoice_releases = [];
        this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format("YYYY-MM-DD");
        ;
        this.invoice_releases.forEach(function (item) {
            var soTon = parseInt(item.amount) - parseInt(item.used_amount);
            invoice_releases.push({
                name: item.template.template_code + " - " + item.template.invoice_series + " (" + _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(item.begin_number) + " - " + _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(item.end_number) + ") - S\u1ED1 t\u1ED3n: " + soTon,
                value: item.id,
                template_id: item.template_id,
                invoice_type_name: item.invoice_type_name,
                soTon: soTon
            });
        });
        this.invoice_releases = invoice_releases;
    };
    KeepNumberComponent.prototype.onSubmit = function (e) {
        var _this = this;
        var data = __assign({}, this.frmData);
        delete data.invoice_type_name;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.vatService.giuSo(data).subscribe(function (rs) {
            if (rs.status == "success") {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Thành công', 'success');
                _this.bsModalRef.content.successSaveItem = "success";
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
    KeepNumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-keep-number',
            template: __webpack_require__(/*! ./keep-number.component.html */ "./src/app/modules/payment-receipt/components/keep-number/keep-number.component.html"),
            styles: [__webpack_require__(/*! ./keep-number.component.scss */ "./src/app/modules/payment-receipt/components/keep-number/keep-number.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"]])
    ], KeepNumberComponent);
    return KeepNumberComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/components/product-grip/product-grip.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/product-grip/product-grip.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Phần không tự tính giá trị, nhập mẫu bảng kê -->\r\n<div class=\"row support-invoice\">\r\n  <div class=\"col-md-12\">\r\n    <!-- Thêm dòng -->\r\n    <div class=\"pull-left\">\r\n      <div style=\"float: left;width:  30%; padding-top: 4px\">{{ _translate.CONTROLL.BUTTON.add_row }}</div>\r\n      <div style=\"float: left; width: 30%\">\r\n        <dx-number-box #numberBox [max]=\"100\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"rowData\"></dx-number-box>\r\n      </div>\r\n      <div>\r\n        <dx-button style=\"height: 27px\" icon=\"fa fa-plus-circle\" type=\"default\" text=\"\" (onClick)=\"addRow()\">\r\n        </dx-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n  [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{ _translate.CONFIRM.import_type }}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"thayTheToanBo()\" text=\"{{ _translate.CONTROLL.BUTTON.replace_all }}\" type=\"default\">\r\n      </dx-button>\r\n      <dx-button (click)=\"themTiep()\" text=\"{{ _translate.CONTROLL.BUTTON.add_more }}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{ _translate.CONTROLL.BUTTON.cancel }}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n\r\n<!-- phần table hiển thị -->\r\n<div class=\"row invoice-table\">\r\n  <div class=\"col-md-12\">\r\n    <dx-data-grid id=\"gridInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n      [allowColumnResizing]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n      (onKeyDown)=\"onGripKeyDown($event)\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n      (onEditorPrepared)=\"onEditorPrepared($event)\" (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n      (onRowPrepared)=\"onRowPrepared($event)\" (onCellPrepared)=\"onCellPrepared($event)\">\r\n      <!-- [wordWrapEnabled]=\"true\" (onEditorPrepared)=\"onEditorPrepared($event)\" -->\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"!ttDaXuatHoaDon\"></dxo-editing>\r\n      <dxo-sorting mode=\"false\"></dxo-sorting>\r\n      <dxo-scrolling mode=\"virtual\">\r\n        <!-- or \"virtual\" | \"infinite\" -->\r\n      </dxo-scrolling>\r\n      <!-- Xóa -->\r\n      <dxi-column cellTemplate=\"deleteColumn\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.delete }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.delete_column }}\" [allowEditing]=\"false\" alignment=\"center\" [fixed]=\"true\"\r\n        fixedPosition=\"left\">\r\n      </dxi-column>\r\n      <!-- STT -->\r\n      <dxi-column dataField=\"view_order\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.view_order }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.stt }}\" alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Mã loại phí lệ phí -->\r\n      <dxi-column cssClass=\"overlay-content123\" dataField=\"fee_code\"\r\n                  caption=\"{{ _translate.GRID.INVOICE_DETAILS.fee_type_code }}\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.ma_hang }}\"\r\n                  alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\" [editorOptions]=\"{showClearButton: true}\">\r\n        <dxo-lookup *ngIf=\"reloadSelectProduct\"\r\n                    [dataSource]=\"select.productsView\"\r\n                    displayExpr=\"mhvth\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <!-- Tên loại lệ phí -->\r\n      <dxi-column minWidth=\"{{ _translate.GRID_WIDTH.don_hang_hop_dong }}\" dataField=\"fee_name\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.fee_type_name }}\" alignment=\"left\"></dxi-column>\r\n      <!-- Đơn vị tính -->\r\n      <dxi-column dataField=\"unit_code\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.unit_code }}\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.unit_code }}\"\r\n                  alignment=\"center\" [editorOptions]=\"lookupColumnOptions\">\r\n        <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <!-- Số lượng -->\r\n      <dxi-column dataField=\"quantity\" headerCellTemplate=\"quantityHeader\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\"\r\n                  [editorOptions]=\"{ format: formatter.so_luong,step: '0' }\" [format]=\"formatter.so_luong\"\r\n                  dataType=\"number\"\r\n                  alignment=\"center\"></dxi-column>\r\n      <!-- Đơn giá -->\r\n      <dxi-column dataField=\"price\" headerCellTemplate=\"priceHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n                  [editorOptions]=\"{ format: formatter.don_gia,step: '0' }\" [format]=\"formatter.don_gia\"\r\n                  dataType=\"number\"\r\n                  alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Thành tiền -->\r\n      <dxi-column dataField=\"amount\" headerCellTemplate=\"amountHeader\" minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\"\r\n                  [editorOptions]=\"{ format: formatter.thanh_tien ,step: '0'}\" [format]=\"formatter.thanh_tien\"\r\n                  dataType=\"number\"\r\n                  alignment=\"right\">\r\n      </dxi-column>\r\n      <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n        <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'quantityHeader'\">\r\n        <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.quantity }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceHeader'\">\r\n        <p (click)=\"configDecimal('don_gia')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.price }}<img\r\n          src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountHeader'\">\r\n        <p (click)=\"configDecimal('thanh_tien')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.amount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <dxo-paging [enabled]=\"true\"></dxo-paging>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    </dx-data-grid>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/product-grip/product-grip.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/product-grip/product-grip.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-row i{color:#0E77BB;font-size:18px}.support-invoice{margin-top:20px;margin-bottom:10px}.support-invoice .support-link{padding:6px 15px;border:1px solid #007bff;text-decoration:none}.support-invoice .support-link.mgr-15{margin-right:8px}.support-invoice .support-link img,.support-invoice .support-link i{margin-right:15px;margin-top:-2px}.support-invoice .auto-input{margin-right:20px !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}::ng-deep .styleItemToList{color:dodgerblue}.button-dropdown-extend{display:inline-flex}::ng-deep .vat-invoices .dx-texteditor-buttons-container{display:-ms-inline-grid;display:inline-grid}::ng-deep #gridInvoice{height:208px}::ng-deep .popGuid .dx-widget{display:inline-block}\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/product-grip/product-grip.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/product-grip/product-grip.component.ts ***!
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
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _modules_payment_receipt_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/payment-receipt/shared */ "./src/app/modules/payment-receipt/shared/index.ts");
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
    function ProductGripComponent(route, router, modalService, vatService, productsService, authService, translate) {
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.vatService = vatService;
        this.productsService = productsService;
        this.authService = authService;
        this.translate = translate;
        this.select = {};
        this.frmData = new _modules_payment_receipt_shared__WEBPACK_IMPORTED_MODULE_13__["PaymentReceiptModel"](1);
        this.showPopup = false; // Popup 
        this.dataExcelFile = null;
        this.dataExcelFileInfo = null;
        this.ttDaXuatHoaDon = false;
        this._disDiengiai = false;
        this._disKhuyenMai = false;
        this.amount_after_vat = 0;
        this.reloadSelectProduct = true;
        this.extras = [];
        this.rowData = 1;
        this.productCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_12__["pattern"].productCodePattern;
        this.isDisplayReduceGuid = false;
        this.productViews = [];
        this.isShowND92 = false;
        this.ruleError = {
            '': 'này',
            '-1': 'Không chịu thuế',
            '0': '0%',
            '5': '5%',
            '10': '10%'
        };
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
        this.configs = this.authService.getConfigs();
        // let a = moment(new Date()).format('HH:mm:ss.SSS');
        this.routeSub = this.route.data.subscribe(function (data) {
            // put data DM for select
            var danh_muc = _this.authService.getDMLocal();
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.select_provisions_on_accounts = danh_muc.DM_DINH_KHOAN ? danh_muc.DM_DINH_KHOAN.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            _this.select.countrys = danh_muc.DM_QUOC_GIA ? danh_muc.DM_QUOC_GIA.data : null;
            ///
            if (_this.select.select_provisions_on_accounts && _this.select.select_provisions_on_accounts.length > 0) {
                _this.select.select_provisions_on_accounts.forEach(function (item) {
                    item.mdk = item.code + ': ' + item.name;
                });
            }
            ///
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
                            var _data = data.init[0].filter(function (p) { return p.code === key.toString(); });
                            return _data;
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
                    if (item.fee_name && item.unit_name) {
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
                if (value.fee_code !== 'add') {
                    _this.invoice_products.byKey(key).then(function (row) {
                        switch (column) {
                            case 'view_order':
                                _this.view_orderChange();
                                break;
                            case 'fee_code':
                                _this.fee_codeChange(row);
                                break;
                            case 'unit_code':
                                _this.unit_codeChange(row);
                                break;
                            case 'quantity':
                            case 'price':
                            case 'amount':
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
                    _this.addRow(null);
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
                if (eles) {
                    for (var i = 0; i < eles.length; i++) {
                        if (eles[i].className.includes('dinh-khoan'))
                            eles[i].innerHTML = e.data.provisions_on_accounts;
                    }
                    eles[2].innerHTML = e.data.fee_code;
                }
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
            if (e.dataField === 'fee_code') {
                e.editorOptions.onOpened = function (arg) {
                    var popupInstance = arg.component._popup;
                    popupInstance.option('width', 400);
                    popupInstance.option('minWidth', 400);
                };
            }
            if (e.dataField === 'fee_name') {
                e.editorName = 'dxTextArea';
                //  e.editorOptions.autoResizeEnabled = true;
            }
            //   e.editorOptions.onValueChanged = (args) => {
            //     if (e.dataField === 'unit_code') {
            //       const _obj = this.select.unit_codes.filter(p => p.code === e.row.data.unit_code)[0];
            //       if (_obj) {
            //         e.row.data.unit_name = _obj.name;
            //       } else {
            //         e.row.data.unit_name = '';
            //       }
            //     }
            //     if (e.dataField === 'country_code') {
            //       const _obj = this.select.countrys.filter(p => p.code === e.row.data.country_code)[0];
            //       if (_obj) {
            //         e.row.data.country_name = _obj.name;
            //       } else {
            //         e.row.data.country_name = '';
            //       }
            //     }
            //     e.setValue(args.value);
            //  //   this.invoice_products.update(e.row.data.id, e.row.data);
            //   };
            // this.invoice_products.update(e.row.data.id, e.row.data);
        }
    };
    ProductGripComponent.prototype.onEditorPrepared = function (e) {
        if ((e.dataField === 'quantity' || e.dataField === 'price' || e.dataField === 'amount') && e.parentType === 'dataRow') {
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
        if (e.row && e.row.rowType === 'data') {
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
                        _this.addRow(e.row.rowIndex);
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
    ProductGripComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            if (e.column.dataField == "fee_code") {
                if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(e.data.fee_code) != "" && !this.productCodePattern.test(e.data.fee_code)) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = this._translate.VALIDATION.required_productCode;
                }
            }
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
                    row.fee_code = data.code;
                    row.fee_name = data.name;
                    row.unit_code = _this.checkUnitCode(data.unit_code);
                    row.quantity = null;
                    row.price = data.price ? parseFloat(data.price) : data.price;
                    row.amount = data.price ? parseFloat(data.price) : 0;
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
    /* Thêm dòng hàng hóa */
    ProductGripComponent.prototype.addRow = function (rowIndexFocus) {
        if (rowIndexFocus >= 0) {
            var rowIndex = rowIndexFocus + 1;
            var data = this.frmData.add_receipt_fee_data(rowIndex, rowIndex);
            if (data) {
                this.invoice_products._array.splice(rowIndex, 0, data);
                var order_1 = 0;
                this.invoice_products._array.forEach(function (item) {
                    item.order = ++order_1;
                    item.view_order = item.order;
                });
            }
        }
        else {
            var len_1, order = void 0, orderLast_1;
            this.invoice_products.load().then(function (dataSource) {
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
                var data = this.frmData.add_receipt_fee_data(order, order);
                this.invoice_products.insert(data);
            }
        }
        this.dataGrid.instance.refresh();
    };
    ProductGripComponent.prototype.view_orderChange = function () {
        var _index = 0;
        this.invoice_products.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                item.view_order = ++_index;
            });
        });
    };
    // Thay đổi cột mã hàng
    ProductGripComponent.prototype.fee_codeChange = function (row) {
        var _this = this;
        this.select.products.some(function (item) {
            if (item.code === row.fee_code) {
                _this.productsService.getProduct(item.id).subscribe(function (rs) {
                    if (rs.status == "success") {
                        var product = rs.data.product;
                        if (product) {
                            row.fee_name = product.name;
                            row.unit_code = _this.checkUnitCode(product.unit_code);
                            row.quantity = null;
                            row.price = product.price ? parseFloat(product.price) : product.price;
                            row.amount = product.price ? parseFloat(product.price) : 0;
                            _this.invoice_products.update(row.id, row);
                            _this._tinhGiaTri();
                            return true;
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
    ProductGripComponent.prototype.country_codeChange = function (row) {
        var _obj = this.select.countrys.filter(function (p) { return p.code === row.country_code; })[0];
        if (_obj) {
            row.country_name = _obj.name;
            this.invoice_products.update(row.id, row);
        }
        else {
            row.country_name = '';
            this.invoice_products.update(row.id, row);
        }
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
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["VChanggeMoneyService"]._tinhtienBienLai(_this.invoice_products, _this.formDataInInvoice, _this.formatter, _this.select, _this._oTemplateTT78);
        }, 100);
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
                // this.formatter[data.column] = data.character;
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
                    _this.dataGrid.instance.refresh();
                    _this._tinhGiaTri();
                }, 100);
            }
        }, 200);
    };
    // Lấy mẫu bảng kê
    ProductGripComponent.prototype.layMauBangKe = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        var ts = this._objTemplateSelect;
        var fields = [];
        if (!this.isTT78) {
            if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayTongHop
                && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayChung
                && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayHoanVe) {
                fields.push("other_tax");
                fields.push("other_charge");
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonKinhDoanhXe) {
                fields.push("engine_number");
                fields.push("chassis_number");
            }
        }
        else {
            if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayTongHop
                && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayChung
                && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayHoanVe) {
                fields.push("other_tax");
                fields.push("other_charge");
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonKinhDoanhXe) {
                fields.push("engine_number");
                fields.push("chassis_number");
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonNhaHangKhachSan
                && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayChung) {
                fields.push("is_money_service");
            }
            if (!this.configs.system_parameter.incurred_refund_ticket)
                fields.push("is_refund_ticket");
            if (!this.configs.system_parameter.view_expiration_date)
                fields.push("expiration_date");
            if (!this.configs.system_parameter.view_lot)
                fields.push("lot");
            if (!this.configs.system_parameter.promotional_goods_on_the_invoice)
                fields.push("is_promotion_new");
            if (!this.configs.system_parameter.is_promotion)
                fields.push("is_promotion");
        }
        if (!this.configs.system_parameter.product_exchange_rate)
            fields.push("product_exchange_rate");
        if (!this.configs.system_parameter.product_date)
            fields.push("product_date");
        // if (this.configs && this.configs.system_parameter && this.configs.system_parameter.display_contract_order)
        //   fields.push("contract_order");
        if (!this.extentionGrid || (this.extentionGrid && !this.extentionGrid.ma_quan_ly)) {
            fields.push("management_code");
        }
        this.vatService.layFileMau({
            customer_name: this.formDataInInvoice.customer_name,
            buyer_tax_code: this.formDataInInvoice.buyer_tax_code,
            buyer_address: this.formDataInInvoice.buyer_address,
            buyer_name: this.formDataInInvoice.buyer_name,
            invoice_type_name: "",
            hiddens: fields
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
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(ws, { header: 'A', range: 9 }));
            var account = (xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(ws, { header: 'A', range: 0 }));
            var fileBangKe = document.getElementById('file-bang-ke');
            fileBangKe.value = '';
            var _arrData = [];
            if (data && data[0]) {
                var columnsName = data.map(function (e) { return e.A; });
                var _index = columnsName.indexOf("view_order");
                if (_index == -1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify("File mẫu không đúng định dạng. Vui lòng nhấn vào Tại đây để lấy lại file mẫu", "error");
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
    ProductGripComponent.prototype.thayTheToanBo = function () {
        this.fillData(this.dataExcelFile, this.dataExcelFileInfo, 'thaythe');
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ProductGripComponent.prototype.themTiep = function () {
        this.fillData(this.dataExcelFile, this.dataExcelFileInfo, 'themtiep');
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ProductGripComponent.prototype.huy = function () {
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ProductGripComponent.prototype.fillData = function (fileData, info, status) {
        var _this = this;
        if (info.length === 4) {
            var customer_name = info[0].A.split(':');
            if (customer_name.length > 1 && customer_name[1].trim() != '') {
                this.formDataInInvoice.customer_name = customer_name[1].trim();
            }
            ////
            var buyer_tax_code = info[1].A.split(':');
            if (buyer_tax_code.length > 1 && buyer_tax_code[1].trim() != '') {
                this.formDataInInvoice.payer_tax_code = buyer_tax_code[1].trim();
            }
            ////
            var buyer_name = info[2].A.split(':');
            if (buyer_name.length > 1 && buyer_name[1].trim() != '') {
                this.formDataInInvoice.payer_name = buyer_name[1].trim();
            }
            ////
            var buyer_address = info[3].A.split(':');
            if (buyer_address.length > 1 && buyer_address[1].trim() != '') {
                this.formDataInInvoice.payer_address = buyer_address[1].trim();
            }
        }
        if (status === 'thaythe') {
            this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    _this.invoice_products.remove(item.id);
                });
            });
        }
        else {
            this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    if (!item.fee_code && !item.fee_name && !item.quantity && !item.price && !item.amount) {
                        _this.invoice_products.remove(item.id);
                    }
                });
            });
        }
        fileData.forEach(function (element) {
            if (element.fee_name) {
                var invoice_1 = new Object;
                invoice_1["id"] = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].makeid();
                invoice_1["view_order"] = element.view_order ? parseInt(element.view_order) : null;
                invoice_1["fee_code"] = element.fee_code ? element.fee_code : "";
                invoice_1["fee_name"] = element.fee_name ? element.fee_name : "";
                invoice_1["unit_code"] = element.unit_name ? _this.getUnitCodeByUnitName(element.unit_name) : "";
                invoice_1["unit_name"] = element.unit_name ? element.unit_name : "";
                invoice_1["quantity"] = element.quantity ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(element.quantity) : null;
                invoice_1["price"] = element.price ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(element.price) : null;
                invoice_1["amount"] = element.amount ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(element.amount) : null;
                var _obj = _this.select.products.filter(function (p) { return p.code === invoice_1["fee_code"]; })[0];
                if (!_obj && invoice_1["fee_code"] !== '') {
                    var _objPush = {
                        code: invoice_1["fee_code"],
                        name: invoice_1["fee_name"],
                        mhvth: invoice_1["fee_code"] + ': ' + invoice_1["fee_name"],
                    };
                    _this.select.products.push(_objPush);
                }
                _this.invoice_products.insert(invoice_1);
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
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
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
    ProductGripComponent.prototype.calculateSummary = function (options) {
        var amount_after_vat;
        // Calculating "CustomSummary1"
        if (options.name === 'amount_after_vat' && options.summaryProcess) {
            if (options.summaryProcess === 'start') {
                // Initializing "totalValue" here
                if (this.formDataInInvoice !== undefined) {
                    options.totalValue = this.formDataInInvoice.amount_after_vat;
                    amount_after_vat = this.formDataInInvoice.amount_after_vat;
                }
            }
            if (options.summaryProcess === 'calculate') {
                if (this.formDataInInvoice !== undefined) {
                    options.totalValue = this.formDataInInvoice.amount_after_vat;
                    amount_after_vat = this.formDataInInvoice.amount_after_vat;
                }
                // Modifying "totalValue" here
            }
            if (options.summaryProcess === 'finalize') {
                options.totalValue = amount_after_vat;
                // Assigning the final value to "totalValue" here
            }
        }
        // Calculating "CustomSummary2"
        if (options.name === 'CustomSummary2') {
            // ...
            // Same "if" statements here
        }
    };
    ProductGripComponent.prototype.changePhiDV = function (row) {
        this.view_orderChange();
        if (row.is_money_service) {
            row.commercial_discount = false;
        }
        if (row.is_money_service && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(row.fee_name) == '') {
            row.fee_name = 'Phí dịch vụ';
            this.invoice_products.update(row.id, row);
        }
        else if (!row.is_money_service && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(row.fee_name) === 'Phí dịch vụ') {
            row.fee_name = '';
            this.invoice_products.update(row.id, row);
        }
    };
    ProductGripComponent.prototype.changeCKTM = function (row) {
        if (row.commercial_discount) {
            row.is_money_service = false;
        }
        this._tinhGiaTri();
    };
    ProductGripComponent.prototype.changePhiHoanVe = function (row) {
        if (row.is_refund_ticket) {
            row.is_money_service = false;
        }
        this._tinhGiaTri();
    };
    ProductGripComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'LAY_MAU_BANG_KE') {
            this.layMauBangKe();
        }
        else if (e.itemData.id === 'NAP_DU_LIEU_BANG_KE') {
            this.napDuLieuTuBangKe();
        }
    };
    ProductGripComponent.prototype.onClickGuidReduce = function () {
        this.router.navigate([]).then(function (result) { window.open('https://ihoadon.vn/hddt/danh-muc-hang-hoa-dich-vu-duoc-giam-thue-gtgt-theo-nghi-quyet-so-406-nq-ubtvqh15.html', '_blank'); });
    };
    ProductGripComponent.prototype.onClickGuidNQ43 = function () {
        this.router.navigate([]).then(function (result) { window.open('https://ihoadon.vn/hddt/danh-muc-hang-hoa-dich-vu-duoc-giam-thue-gtgt-theo-nghi-quyet-so-406-nq-ubtvqh15.html', '_blank'); });
    };
    ProductGripComponent.prototype._changeNQ43 = function (e) {
        if (e.value) {
            if (this.formDataInInvoice.sales_percentage == null && parseInt(this.configs.system_parameter.value_rate_percent) > 0) {
                this.formDataInInvoice.sales_percentage = parseInt(this.configs.system_parameter.value_rate_percent);
            }
        }
        else {
            this.formDataInInvoice.sales_percentage = null;
        }
        this._tinhGiaTri();
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
    ], ProductGripComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "extentionGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProductGripComponent.prototype, "isTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "formDataInInvoice", void 0);
    ProductGripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vat-product-grip',
            template: __webpack_require__(/*! ./product-grip.component.html */ "./src/app/modules/payment-receipt/components/product-grip/product-grip.component.html"),
            styles: [__webpack_require__(/*! ./product-grip.component.scss */ "./src/app/modules/payment-receipt/components/product-grip/product-grip.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_8__["VatService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_9__["ProductsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], ProductGripComponent);
    return ProductGripComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/components/send-invoices/send-invoices.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/send-invoices/send-invoices.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Theo dõi nhận - gửi biên lai điện tử</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-7\">\r\n            <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n              <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                <dxi-item [label]=\"{text: 'Mẫu biên lai' }\" dataField=\"template\"  [editorOptions]=\"{readOnly: true}\">\r\n                </dxi-item>\r\n              </dxi-item>\r\n              <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n                <dxi-item dataField=\"receipt_date\" [label]=\"{text: 'Ngày biên lai'}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item cssClass=\"invoice-number-create-invoice\" dataField=\"receipt_number\" [label]=\"{text: 'Số biên lai'}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <!-- <dxi-item dataField=\"customer_code\" [label]=\"{text: _translate.CONTROLL.LABEL.customer_code}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item dataField=\"payer_tax_code\" [label]=\"{text: _translate.GRID.INVOICE.buyer_tax_code }\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item dataField=\"payer_name\" [label]=\"{text: _translate.CONTROLL.LABEL.buyer_name }\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item dataField=\"payer_phone\" [label]=\"{text: _translate.CONTROLL.LABEL.phone }\" [editorOptions]=\"{disabled: true}\"></dxi-item> -->\r\n              </dxi-item>\r\n              <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                <dxi-item dataField=\"customer_name\" [label]=\"{text: 'Tên người nộp tiền'}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              </dxi-item>\r\n            </dx-form>\r\n          </div>\r\n          <div class=\"col-lg-5\">\r\n            <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n              <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                <dxi-item dataField=\"payment_method_name\" [label]=\"{text: _translate.CONTROLL.LABEL.payment_method}\"  [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item editorType=\"dxNumberBox\"  dataField=\"total_payment\" [editorOptions]=\"{format:'#,###', disabled: true}\"  [label]=\"{text: 'Tổng tiền'}\"></dxi-item>\r\n                <dxi-item dataField=\"payer_email\" [label]=\"{text: 'Email'}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              </dxi-item>\r\n              <!-- <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n                  <dxi-item dataField=\"currency_code\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_code}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item dataField=\"currency_rate\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_rate}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              </dxi-item>\r\n              <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                 \r\n               \r\n              </dxi-item> -->\r\n            </dx-form>\r\n          </div>\r\n          <div class=\"col-lg-12 link-send-invoice\">\r\n            <div class=\"pull-right\">\r\n              <a *ngIf=\"receipt.status == 'DA_XUAT'\" (click)=\"sendMail()\" href=\"javascript:void(0)\">{{'Gửi biên lai'}}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <dx-data-grid\r\n        id=\"invoiceHistoryGrid\"\r\n        [dataSource]=\"invoice_process\"\r\n        (onEditorPreparing) = \"onEditorPreparing($event)\"\r\n        [showBorders]=\"true\"\r\n        [wordWrapEnabled]=\"true\"\r\n        [showRowLines]=\"true\">\r\n        <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n        <dxi-column cellTemplate=\"stt\" caption=\"{{_translate.GRID.INVOICE_DETAILS.view_order}}\" width=\"80\" alignment=\"center\"></dxi-column>\r\n        <dxi-column dataField=\"process_time\" caption=\"{{_translate.CONTROLL.LABEL.date_made}}\" width=\"180\" dataType=\"datetime\" format=\"dd/MM/yyyy HH:mm:ss\" dateSerializationFormat=\"yyyy-MM-dd HH:mm:ss\" alignment=\"center\"></dxi-column>\r\n        <dxi-column dataField=\"content\" cellTemplate=\"content\" caption=\"{{_translate.CONTROLL.LABEL.task}}\" alignment=\"left\"></dxi-column>\r\n        <dxi-column dataField=\"user_name\" caption=\"{{_translate.CONTROLL.LABEL.person_made}}\" alignment=\"left\"></dxi-column>\r\n        <div *dxTemplate=\"let d of 'stt'\">\r\n          <p>{{ d.rowIndex + 1 }}</p>\r\n        </div>\r\n        <div *dxTemplate=\"let d of 'content'\">\r\n              {{ d.data.content}}\r\n          </div>\r\n      </dx-data-grid>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" icon=\"{{_translate.ICONS.come_back }}\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n      </dx-button>\r\n    </div>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/send-invoices/send-invoices.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/send-invoices/send-invoices.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .form-input-visibility{visibility:hidden}::ng-deep .invoice-number-create-invoice input{color:red;font-weight:bold}.link-send-invoice{margin-top:10px}.link-send-invoice a{text-decoration:underline}#invoiceHistoryGrid{margin-top:15px}\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/send-invoices/send-invoices.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/send-invoices/send-invoices.component.ts ***!
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
/* harmony import */ var _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../send-mail/send-mail.component */ "./src/app/modules/payment-receipt/components/send-mail/send-mail.component.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/payment-receipt/shared/payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
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
    function SendInvoicesComponent(authService, bsModalRef, vatService, modalService, bsModalSendMail, customersService, paymentRService) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.modalService = modalService;
        this.bsModalSendMail = bsModalSendMail;
        this.customersService = customersService;
        this.paymentRService = paymentRService;
        this.frmData = {};
        this._translate = this.authService.getTranslate();
    }
    SendInvoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadTableContent();
        var receipt = this.receipt;
        this.frmData.template = receipt.template_code + " / " + receipt.receipt_series;
        this.frmData.receipt_date = moment__WEBPACK_IMPORTED_MODULE_1__(receipt.receipt_date).format('DD/MM/YYYY');
        this.frmData.receipt_number = receipt.receipt_number;
        this.frmData.customer_code = receipt.customer_code;
        this.frmData.customer_name = receipt.customer_name;
        this.frmData.payer_tax_code = receipt.payer_tax_code;
        this.frmData.payer_name = receipt.payer_name;
        this.frmData.buyer_mobile = receipt.buyer_mobile;
        this.frmData.payer_phone = receipt.payer_phone;
        this.frmData.currency_code = receipt.currency_code;
        this.frmData.payment_method_name = receipt.payment_method_name;
        this.frmData.customer_id = receipt.customer_id;
        this.frmData.total_payment = receipt.total_payment;
        this.email = receipt.payer_email;
        this.customersService.getCustomer(this.frmData.customer_id).subscribe(function (response) {
            if (response.status == "success") {
                var emailInCategory = "";
                var customer = response.data.customer;
                if (customer)
                    emailInCategory = customer.email;
                if (_this.email) {
                    if (emailInCategory != "") {
                        var arrEmail = emailInCategory.split(';');
                        arrEmail.forEach(function (item) {
                            if (_this.email.indexOf(item) < 0)
                                _this.email = _this.email + ";" + item;
                        });
                    }
                }
                else {
                    _this.email = emailInCategory;
                }
            }
        });
    };
    SendInvoicesComponent.prototype.loadTableContent = function () {
        var _this = this;
        this.invoice_process = {};
        var sub = this.paymentRService.getReceiptProccess(this.receipt.id).subscribe(function (rs) {
            var mapObj = {
                T: "; ",
            };
            _this.invoice_process = rs.data.receipt_process;
            if (_this.invoice_process && _this.invoice_process.length > 0) {
                _this.invoice_process.forEach(function (item) {
                    item.content = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(item.content).replace(/;/g, "; ");
                });
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    SendInvoicesComponent.prototype.sendMail = function () {
        var _this = this;
        var initialState = {
            receipt_id: this.receipt.id,
            email: this.email,
            customer_id: this.frmData.customer_id
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
            template: __webpack_require__(/*! ./send-invoices.component.html */ "./src/app/modules/payment-receipt/components/send-invoices/send-invoices.component.html"),
            styles: [__webpack_require__(/*! ./send-invoices.component.scss */ "./src/app/modules/payment-receipt/components/send-invoices/send-invoices.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_7__["CustomersService"],
            _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_8__["PaymentReceiptService"]])
    ], SendInvoicesComponent);
    return SendInvoicesComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/components/send-mail/send-mail.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/send-mail/send-mail.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.BUTTON.send}} EMAIL</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n        <dxi-item dataField=\"email\" [label]=\"{text: 'Email'}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Email {{_translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n          <!-- <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.email\" message=\"Email {{_translate.VALIDATION.not_pattern}}\"></dxi-validation-rule> -->\r\n        </dxi-item>\r\n      </dx-form>\r\n      <div style=\"margin-top: 10px;\">\r\n          <a style=\"color: silver;text-decoration: underline;font-size: 90%;\">{{_translate.CONTROLL.LABEL.note1}}: </a><a style=\"color: silver;font-size: 90%;\"> {{_translate.CONTROLL.LABEL.note_email}}</a>\r\n        </div>\r\n        <div style=\"margin-top: 5px;\">\r\n            <a style=\"color: silver;font-size: 90%;\">{{_translate.CONTROLL.LABEL.example}}: admin@efy.com.vn;sale@efy.com.vn</a>\r\n          </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <dx-button text=\"{{_translate.CONTROLL.BUTTON.send}}\" icon=\"{{_translate.ICONS.send_email}}\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n      </dx-button>\r\n      <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n      </dx-button>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/send-mail/send-mail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/send-mail/send-mail.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/send-mail/send-mail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/send-mail/send-mail.component.ts ***!
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
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/payment-receipt/shared/payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
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
    function SendMailComponent(bsModalRef, vatService, authService, customersService, paymentRService) {
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.authService = authService;
        this.customersService = customersService;
        this.paymentRService = paymentRService;
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
                id: this.receipt_id,
                email: this.frmData.email
            }];
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.paymentRService.sendMail(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                var updateEmail = {
                    id: _this.customer_id,
                    email: _this.frmData.email
                };
                _this.customersService.uploadEmailtoCustomer(updateEmail).subscribe(function (rsl) {
                    if (rsl.status == 'success') {
                    }
                });
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
            template: __webpack_require__(/*! ./send-mail.component.html */ "./src/app/modules/payment-receipt/components/send-mail/send-mail.component.html"),
            styles: [__webpack_require__(/*! ./send-mail.component.scss */ "./src/app/modules/payment-receipt/components/send-mail/send-mail.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_5__["CustomersService"],
            _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_6__["PaymentReceiptService"]])
    ], SendMailComponent);
    return SendMailComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/components/sign-many/sign-many.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/sign-many/sign-many.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{ 'MENU.list_invoice_waiting_for_signing' | translate }}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid \r\n    id=\"gridContainer\"\r\n    [dataSource]=\"invoiceList\"\r\n    [showRowLines]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [columnMinWidth]=\"50\"\r\n    [columnResizingMode]=\"true\"\r\n    [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\">\r\n\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\" caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"template_code\" caption=\"{{ 'GRID.INVOICE.template_code' | translate }}\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"template.invoice_series\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" [width]=\"90\" alignment=\"center\" [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column>\r\n    <dxi-column dataField=\"invoice_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\" [width]=\"110\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"buyer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\" [width]=\"140\" alignment=\"left\"></dxi-column>\r\n    <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\" alignment=\"left\"></dxi-column>\r\n    <dxi-column dataField=\"total_payment\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" dataType=\"number\" format=\"0,###.##\"  alignment=\"right\" ></dxi-column>\r\n    <dxi-column cellTemplate=\"statusName\" caption=\"{{ 'GRID.GENERAL.status' | translate }}\" [width]=\"130\" alignment=\"center\"></dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n        *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n      <p>{{ d.data.template.template_code }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n      <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name || 'Hóa đơn chờ ký' }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'statusName'\">\r\n      <p style=\"color:green;\" *ngIf=\"d.data.status =='DA_XUAT'\">Đã ký</p>\r\n      <p style=\"color: red;\" *ngIf=\"d.data.status !='DA_XUAT' && d.data.status !='GIU_SO'\">{{ d.data.status }}</p>\r\n    </div>\r\n    \r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <div style=\"width: 89%\">\r\n    <label class=\"custom-control-label\"\r\n           for=\"customRadio212\">{{reportCountERR}}</label>\r\n  </div>\r\n\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.sign}}\" icon=\"{{_translate.ICONS.pencil}}\" *ngIf=\"!daXong\" type=\"default\" (click)=\"kyHangLoat()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/sign-many/sign-many.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/sign-many/sign-many.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-control-label{margin-top:4px;color:red;font-weight:800;font-family:Times New Roman}\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/sign-many/sign-many.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/sign-many/sign-many.component.ts ***!
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
    function SignManyComponent(bsModalRef, vatService, socketService, authService, router, spinner) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.router = router;
        this.spinner = spinner;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.isExportFailed = false;
        this.reportCountERR = "";
        this.isTT78 = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this._translate = this.authService.getTranslate();
    }
    SignManyComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
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
                else if (data.SvcName === 'efy_viewInvoice') {
                    _this.viewInvoice(data.Data.Content, data.Data.typeView, data.Data.hinhthucxuat, data.Data.invoice_date);
                }
            }
            else {
                var popUp = window.open('about:blank', 'name', 'width=200, height=100');
                if (popUp == null || typeof (popUp) == 'undefined') {
                }
                else
                    popUp.close();
                _this.spinner.hide();
                if (data.Description == "") {
                    _this.showPopup = false;
                    _this.errorImport = true;
                }
                else {
                    _this.invoiceList[_this.invoiceIndex].status = data.Description;
                    _this.isExportFailed = true;
                    _this.continuteExportInvoice(false);
                }
            }
        });
    };
    SignManyComponent.prototype.continuteExportInvoice = function (isSuccess) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.valueProgress += percentComplete;
        if (this.invoiceIndex == this.totalInvoice - 1) {
            if (!this.isExportFailed && isSuccess)
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.sign_success, 'success', 5000);
            else {
                var lstInvoiceERR = this.invoiceList.filter(function (p) { return p.status != "DA_XUAT" && p.status != "GIU_SO"; });
                this.reportCountERR = "Có " + lstInvoiceERR.length + " hóa đơn ký lỗi. Đề nghị kiểm tra lại!";
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Có " + lstInvoiceERR.length + " hóa đơn ký lỗi", 'success', 5000);
            }
            this.daXong = true;
            setTimeout(function () {
                _this.showPopup = false;
            }, 300);
        }
        else if (this.invoiceIndex < this.totalInvoice - 1) {
            this.invoiceIndex++;
            this.xuatHoaDon();
        }
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
                    _this.invoiceList[_this.invoiceIndex].status = rs.message;
                    _this.isExportFailed = true;
                    _this.continuteExportInvoice(false);
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
                    _this.invoiceList[_this.invoiceIndex].status = rs.message;
                    _this.isExportFailed = true;
                    _this.continuteExportInvoice(false);
                }
            }, function (err) { }, function () {
                sub_2.unsubscribe();
            });
        }
    };
    SignManyComponent.prototype.goiApiXuatHoaDon = function (xml_string, invoice) {
        var _this = this;
        // Helper.dowloadFile('hoadon.xml', 'xml', xml_string);
        this.subXuatHoaDon = this.vatService.xuatHoaDon({
            id: invoice.id,
            xml_string: xml_string,
            invoice_files: invoice.invoice_files
        }).subscribe(function (rs) {
            var isSuccess = false;
            _this.ganXong = true;
            _this.tempKiFile = 0;
            if (rs.status == 'success') {
                _this.invoiceList[_this.invoiceIndex].status = 'DA_XUAT';
                isSuccess = true;
            }
            else {
                _this.invoiceList[_this.invoiceIndex].status = rs.message;
                _this.isExportFailed = true;
            }
            _this.continuteExportInvoice(isSuccess);
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
            _this.invoices = JSON.parse(JSON.stringify(_this.invoiceList.filter(function (item) { return item.status != 'DA_XUAT'; })));
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
        if (this.isHdGTGT)
            this.router.navigate(['/system/vat-invoice/']);
        else
            this.router.navigate(['/system/sale-invoice']);
    };
    SignManyComponent.prototype.viewDetailInvoice = function (data) {
        var _this = this;
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            var w = 1920, h = 900;
            w = window.screen.availWidth * 100 / 100;
            h = window.screen.availHeight * 93 / 100;
            var win_1 = window.open('about:blank', 'name', 'width=200, height=100');
            win_1.document.body.innerHTML = this._translate.NOTIFY.loading;
            win_1.blur();
            this.spinner.show();
            var sub_3 = this.vatService.xemHoaDonInvoiceImport(ids).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.xemhoadonPDF(rs);
                }
                else {
                    win_1.close();
                    _this.spinner.hide();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
                _this.spinner.hide();
            }, function () {
                sub_3.unsubscribe();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    SignManyComponent.prototype.viewInvoice = function (content, typeView, hinhthucxuat, invoice_date) {
        var w = 1920, h = 900;
        w = window.screen.availWidth * 100 / 100;
        h = window.screen.availHeight * 93 / 100;
        var pdf_file = content;
        var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_3__["VPreviewInvService"]._getUrlInvoice(pdf_file);
        var win = window.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
        win.document.write("\n      <iframe width=\"100%\" height=\"97%\" src=\"data:application/pdf;base64," + pdf_file + "#download=1\"></iframe>\n    ");
        win.resizeTo(screen.availWidth, screen.availHeight);
        win.focus();
        this.spinner.hide();
    };
    SignManyComponent.prototype.xemhoadonPDF = function (rs) {
        var _this = this;
        //Xem hóa đơn từ server
        if (this.configs.system_parameter.display_template_from_server) {
            var w = 1920, h = 900;
            w = window.screen.availWidth * 100 / 100;
            h = window.screen.availHeight * 93 / 100;
            var pdf_file = rs.data.invoice.pdf_file;
            var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_3__["VPreviewInvService"]._getUrlInvoice(pdf_file);
            var win = window.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
            win.document.write("\n      <iframe width=\"100%\" height=\"97%\" src=\"data:application/pdf;base64," + pdf_file + "#download=1\"></iframe>\n    ");
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
    SignManyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-many',
            template: __webpack_require__(/*! ./sign-many.component.html */ "./src/app/modules/payment-receipt/components/sign-many/sign-many.component.html"),
            styles: [__webpack_require__(/*! ./sign-many.component.scss */ "./src/app/modules/payment-receipt/components/sign-many/sign-many.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], SignManyComponent);
    return SignManyComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/components/view-invoice/view-invoice.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/view-invoice/view-invoice.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{lblTitle}}</h4>\r\n  <div>\r\n    <div *ngFor=\"let item of items | paginate: { itemsPerPage: 1, currentPage: p }; let i = index\">\r\n    </div>\r\n    <pagination-controls style=\"width: 50%;\" (pageChange)=\"getPage($event)\"></pagination-controls>\r\n  </div>\r\n  <div style=\"display: flex; align-items: center;\">\r\n    <dx-button *ngIf=\"isXuatHD\" text=\"Đồng ý\" icon=\"{{_translate.ICONS.save}}\" type=\"default\" (click)=\"dongy()\">\r\n    </dx-button>\r\n    <i class=\"fa fa-times\" style=\"font-size:25px; cursor: pointer;\" (click)=\"dong()\"></i>\r\n  </div>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"body-content\">\r\n    <div *ngIf=\"isXuatHD\" class=\"canh-bao\">\r\n      <p style=\"font-weight: 600;\">\r\n        <span class=\"nhap-nhay\"></span>\r\n        <span style=\"font-size: 17px;\">Lưu ý: </span>\r\n        Đề nghị đơn vị kiểm tra thật kỹ các nội dung biên lai đã nhập trước khi xuất như: Ngày biên lai, Tên\r\n        loại phí, lệ phí, Tổng tiền,…để tránh xuất sai.\r\n      </p>\r\n    </div>\r\n    <div style=\"display: flex; width: 100%;\">\r\n      <iframe height=\"{{heightT}}\" id=\"preview-iframe\"></iframe>\r\n      <div *ngIf=\"isXuatHD\" class=\"thong-tin-hoa-don\">\r\n        <div class=\"e-invoice\">\r\n          <p style=\" font-weight: 600;\">Ngày biên lai : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">{{ngayHD}}</p>\r\n        </div>\r\n        <div class=\"e-invoice\">\r\n          <p style=\"font-weight: 600;\">Tổng tiền : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">{{total_payment}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/view-invoice/view-invoice.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/view-invoice/view-invoice.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-header{display:flex;justify-content:space-between;align-items:center}.pagination{display:flex}.pagination a{color:black;float:left;padding:8px 16px;text-decoration:none}::ng-deep .body-content{height:100%}.modal-body .body-content{display:flex;justify-content:center;align-items:center;flex-direction:column}.nhap-nhay{background:red;padding:0.5px 9px;margin-right:5px;border-radius:57%;-webkit-animation:flicker 1s infinite}.ht-xuat{width:25%;padding:15px;background:#ffffff;box-shadow:rgba(0,0,0,0.35) 0px 5px 15px}@-webkit-keyframes flicker{0%{opacity:0}9%{opacity:0}10%{opacity:.5}13%{opacity:0}20%{opacity:.5}25%{opacity:1}}.example{padding:20px}input[type=button]{padding:5px 10px;margin:10px 5px;border-radius:5px;cursor:pointer;background:#ddd;border:1px solid #ccc}input[type=button]:hover{background:#ccc}.confirm{display:none}.confirm>div:first-of-type{position:fixed;width:100%;height:100%;background:rgba(0,0,0,0.5);top:0px;left:0px}.confirm>div:last-of-type{padding:10px 20px;background:white;position:absolute;width:auto;height:auto;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border-radius:5px;border:1px solid #333}.confirm>div:last-of-type div:first-of-type{min-width:150px;padding:10px}.confirm>div:last-of-type div:last-of-type{text-align:right}.canh-bao{margin-bottom:10px}#preview-iframe{width:calc(100% - 20px)}\n"

/***/ }),

/***/ "./src/app/modules/payment-receipt/components/view-invoice/view-invoice.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/components/view-invoice/view-invoice.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ViewInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInvoiceComponent", function() { return ViewInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/payment-receipt/shared/payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ViewInvoiceComponent = /** @class */ (function () {
    function ViewInvoiceComponent(bsModal, vatService, router, translate, authService, socketService, spinner, paymentRService) {
        var _this = this;
        this.bsModal = bsModal;
        this.vatService = vatService;
        this.router = router;
        this.translate = translate;
        this.authService = authService;
        this.socketService = socketService;
        this.spinner = spinner;
        this.paymentRService = paymentRService;
        this.key = 'name';
        this.reverse = false;
        this.isTaiHD = false;
        this.invoices = [];
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.valueProgress = 0;
        this.errorImport = false;
        this.isExportFailed = false;
        this.p = 1;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ViewInvoiceComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ViewInvoiceComponent.prototype.ngOnInit = function () {
        this.connectWebsocket();
        this.configs = this.authService.getConfigs();
        this.heightT = screen.availHeight - 195;
        switch (this.typeAction) {
            case "NAP_EXCEL":
                this.lblTitle = "BẢN DỰ THẢO BIÊN LAI ĐIỆN TỬ";
                this.isTaiHD = false;
                break;
            case "XEM_HOA_DON":
                this.lblTitle = "XEM BIÊN LAI ĐIỆN TỬ";
                this.isTaiHD = true;
                break;
            case "IN_CHUYEN_DOI":
                this.lblTitle = "IN CHUYỂN ĐỔI BIÊN LAI ĐIỆN TỬ";
                this.isTaiHD = true;
                break;
        }
        this.getPage(1, 'desc', 'created');
    };
    ViewInvoiceComponent.prototype.viewTransport = function (item) {
        var id = item.id;
    };
    ViewInvoiceComponent.prototype.getPage = function (page, sort, order) {
        if (sort === void 0) { sort = 'desc'; }
        if (order === void 0) { order = 'created'; }
        switch (this.typeAction) {
            case "NAP_EXCEL":
                this.action_napexcel(page);
                break;
            case "XEM_HOA_DON":
                this.action_xemhoadon(page);
                break;
            case "IN_CHUYEN_DOI":
                this.action_inchuyendoi(page);
                break;
        }
    };
    ViewInvoiceComponent.prototype.action_napexcel = function (page) {
        var _this = this;
        this.p = page;
        var oTransport;
        var index = 1;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (index == page) {
                oTransport = item;
                break;
            }
            index = index + 1;
        }
        this.spinner.show();
        var invoicesArr = [];
        invoicesArr.push(oTransport);
        var sub = this.paymentRService.previewImport(invoicesArr).subscribe(function (rs) {
            if (rs.status == 'success') {
                //Xem hóa đơn từ server
                if (_this.configs.system_parameter.display_template_from_server) {
                    _this.toltal_payment = rs.data.invoice.toltal_payment;
                    _this.objectUrl = rs.data.invoice.pdf_file;
                    _this.total_payment = rs.data.invoice.total_payment;
                    _this.ngayHD = moment__WEBPACK_IMPORTED_MODULE_6__(rs.data.invoice.invoice_date).format('DD/MM/YYYY');
                    _this.mainTest = "data:application/pdf;base64," + _this.objectUrl;
                    var iframe = document.getElementById('preview-iframe');
                    iframe.setAttribute("src", _this.mainTest);
                    _this.spinner.hide();
                }
                else {
                    /* Xem hóa đơn từ Client */
                    _this.total_payment = rs.data.invoice.total_payment;
                    var invoice_date = rs.data.invoice.invoice_date;
                    var json_data = rs.data.invoice.json_data;
                    var appCode = "HTML";
                    _this.socketService.xemhoadon(function () { return _this.connectWebsocket(); }, json_data, appCode, "XEM_TRUOC_KHI_XUAT", _this.hinhthucxuat, invoice_date, _this.toltal_payment);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        }, function () {
            sub.unsubscribe();
        });
    };
    ViewInvoiceComponent.prototype.action_xemhoadon = function (page) {
        var _this = this;
        this.p = page;
        var id;
        var index = 1;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (index == page) {
                id = item;
                break;
            }
            index = index + 1;
        }
        this.spinner.show();
        var arrId = [];
        arrId.push(id);
        var sub = this.paymentRService.viewImport(arrId).subscribe(function (rs) {
            if (rs.status == 'success') {
                //Xem hóa đơn từ server
                if (_this.configs.system_parameter.display_template_from_server) {
                    _this.objectUrl = rs.data.invoice.pdf_file;
                    _this.ngayHD = moment__WEBPACK_IMPORTED_MODULE_6__(rs.data.invoice.invoice_date).format('DD/MM/YYYY');
                    _this.mainTest = "data:application/pdf;base64," + _this.objectUrl;
                    var iframe = document.getElementById('preview-iframe');
                    iframe.setAttribute("src", _this.mainTest);
                    _this.spinner.hide();
                }
                else {
                    /* Xem hóa đơn từ Client */
                    var invoice_date = rs.data.invoice.invoice_date;
                    var json_data = rs.data.invoice.json_data;
                    var appCode = "REPX";
                    if (rs.data.invoice.is_html_template)
                        appCode = "HTML";
                    _this.socketService.xemhoadon(function () { return _this.connectWebsocket(); }, json_data, appCode, "XEM_TRUOC_KHI_XUAT", _this.hinhthucxuat, invoice_date);
                }
            }
            else {
                _this.spinner.hide();
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
            _this.spinner.hide();
        }, function () {
            sub.unsubscribe();
        });
    };
    ViewInvoiceComponent.prototype.action_inchuyendoi = function (page) {
        var _this = this;
        this.p = page;
        var id;
        var index = 1;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (index == page) {
                id = item;
                break;
            }
            index = index + 1;
        }
        this.spinner.show();
        var arrId = [];
        arrId.push(id);
        var sub = this.vatService.inChuyenDoiInvoiceImport(arrId, true).subscribe(function (rs) {
            if (rs.status == 'success') {
                //Xem hóa đơn từ server
                if (_this.configs.system_parameter.display_template_from_server) {
                    _this.objectUrl = rs.data.invoice.pdf_file;
                    _this.ngayHD = moment__WEBPACK_IMPORTED_MODULE_6__(rs.data.invoice.invoice_date).format('DD/MM/YYYY');
                    _this.mainTest = "data:application/pdf;base64," + _this.objectUrl;
                    var iframe = document.getElementById('preview-iframe');
                    iframe.setAttribute("src", _this.mainTest);
                    _this.spinner.hide();
                }
                else {
                    /* Xem hóa đơn từ Client */
                    var invoice_date = rs.data.invoice.invoice_date;
                    var json_data = rs.data.invoice.json_data;
                    var appCode = "REPX";
                    if (rs.data.invoice.is_html_template)
                        appCode = "HTML";
                    _this.socketService.xemhoadon(function () { return _this.connectWebsocket(); }, json_data, appCode, "XEM_TRUOC_KHI_XUAT", _this.hinhthucxuat, invoice_date);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        }, function () {
            sub.unsubscribe();
        });
    };
    ViewInvoiceComponent.prototype.dong = function () {
        // this.router.navigate(['/system/transport-invoice']);
        this.bsModal.hide();
    };
    ViewInvoiceComponent.prototype.dongy = function () {
        this.bsModal.content.successSaveItem = 'DONG_Y';
        this.bsModal.hide();
    };
    /* Kết nối đến socket */
    ViewInvoiceComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_viewInvoice') {
                if (data.Status == "success")
                    _this.viewInvoice(data.Data.Content, data.Data.typeView, data.Data.hinhthucxuat, data.Data.invoice_date);
                else if (data.Status == "error") {
                    _this.spinner.hide();
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(data.Description, 'error');
                }
            }
        });
    };
    ViewInvoiceComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
    };
    ViewInvoiceComponent.prototype.viewInvoice = function (content, typeView, hinhthucxuat, invoice_date) {
        this.objectUrl = content;
        this.ngayHD = moment__WEBPACK_IMPORTED_MODULE_6__(invoice_date).format('DD/MM/YYYY');
        this.mainTest = "data:application/pdf;base64," + this.objectUrl;
        var iframe = document.getElementById('preview-iframe');
        iframe.setAttribute("src", this.mainTest);
        this.spinner.hide();
    };
    ViewInvoiceComponent.prototype.taihoadon = function () {
        this.invoices = this.items;
        this.showPopup = true;
        this.totalInvoice = Math.floor(this.invoices.length / 10) + 1;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.xulyTaiFilePdf();
    };
    ViewInvoiceComponent.prototype.xulyTaiFilePdf = function () {
        var _this = this;
        var ids = this.iterator(this.invoices, 10, this.invoiceIndex);
        var is_convert = true;
        if (this.typeAction == "XEM_HOA_DON")
            is_convert = false;
        var sub = this.vatService.xuatHDPdf(ids, is_convert).subscribe(function (rs) {
            var isSuccess = false;
            _this.ganXong = true;
            _this.tempKiFile = 0;
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].dowloadFile(rs.data.file_name, 'zip', rs.data.file_content);
                isSuccess = true;
            }
            else {
                _this.isExportFailed = true;
            }
            _this.continuteExportInvoice(isSuccess);
        }, function (err) { }, function () {
            sub.unsubscribe();
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        });
    };
    ViewInvoiceComponent.prototype.continuteExportInvoice = function (isSuccess) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.valueProgress += percentComplete;
        if (this.invoiceIndex == this.totalInvoice - 1) {
            if (!this.isExportFailed && isSuccess)
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Tải hóa đơn thành công", 'success', 5000);
            else {
                // Danh sách lỗi
            }
            this.daXong = true;
            setTimeout(function () {
                _this.showPopup = false;
            }, 300);
        }
        else if (this.invoiceIndex < this.totalInvoice - 1) {
            this.invoiceIndex++;
            this.xulyTaiFilePdf();
        }
    };
    ViewInvoiceComponent.prototype.iterator = function (a, take, skip) {
        var current = skip * 10;
        var l = a.length;
        var end = current + take;
        var part = a.slice(current, end);
        current = end < l ? end : 0;
        return part;
    };
    ViewInvoiceComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ViewInvoiceComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm("Cảnh báo: Quá trình tải hóa đơn sẽ dừng lại nếu bạn đóng cửa sổ này?");
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
    ViewInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-invoice',
            template: __webpack_require__(/*! ./view-invoice.component.html */ "./src/app/modules/payment-receipt/components/view-invoice/view-invoice.component.html"),
            styles: [__webpack_require__(/*! ./view-invoice.component.scss */ "./src/app/modules/payment-receipt/components/view-invoice/view-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_8__["PaymentReceiptService"]])
    ], ViewInvoiceComponent);
    return ViewInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/payment-receipt.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/payment-receipt/payment-receipt.module.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentReceiptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentReceiptModule", function() { return PaymentReceiptModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/payment-receipt/components/index/index.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/modules/payment-receipt/components/invoice/invoice.component.ts");
/* harmony import */ var _components_keep_number_keep_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/keep-number/keep-number.component */ "./src/app/modules/payment-receipt/components/keep-number/keep-number.component.ts");
/* harmony import */ var _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/send-invoices/send-invoices.component */ "./src/app/modules/payment-receipt/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/send-mail/send-mail.component */ "./src/app/modules/payment-receipt/components/send-mail/send-mail.component.ts");
/* harmony import */ var _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product-grip/product-grip.component */ "./src/app/modules/payment-receipt/components/product-grip/product-grip.component.ts");
/* harmony import */ var _components_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/form-invoice/form-invoice.component */ "./src/app/modules/payment-receipt/components/form-invoice/form-invoice.component.ts");
/* harmony import */ var _components_import_invoices_import_invoices_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/import-invoices/import-invoices.component */ "./src/app/modules/payment-receipt/components/import-invoices/import-invoices.component.ts");
/* harmony import */ var _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sign-many/sign-many.component */ "./src/app/modules/payment-receipt/components/sign-many/sign-many.component.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/modules/vat-shared/components/view-attach-file/view-attach-file.component */ "./src/app/shared/modules/vat-shared/components/view-attach-file/view-attach-file.component.ts");
/* harmony import */ var _components_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/import-invoices-dt/import-invoices-dt.component */ "./src/app/modules/payment-receipt/components/import-invoices-dt/import-invoices-dt.component.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/choose-hdck/choose-hdck.component */ "./src/app/modules/payment-receipt/components/choose-hdck/choose-hdck.component.ts");
/* harmony import */ var _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/view-invoice/view-invoice.component */ "./src/app/modules/payment-receipt/components/view-invoice/view-invoice.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _payment_receipt_routing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./payment-receipt.routing */ "./src/app/modules/payment-receipt/payment-receipt.routing.ts");
/* harmony import */ var _shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared */ "./src/app/modules/payment-receipt/shared/index.ts");
/* harmony import */ var _shared_components_receipt_search_advanced_search_advanced_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @shared/components/receipt-search-advanced/search-advanced.component */ "./src/app/shared/components/receipt-search-advanced/search-advanced.component.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// library

// general






























var PaymentReceiptModule = /** @class */ (function () {
    function PaymentReceiptModule() {
    }
    PaymentReceiptModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _payment_receipt_routing__WEBPACK_IMPORTED_MODULE_22__["routing"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["VatSharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SomeModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_2__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_13__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_17__["DxLookupModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_16__["TagInputModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_17__["DxTooltipModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_17__["DxPopoverModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerModule"]
            ],
            exports: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceComponent"],
                _components_keep_number_keep_number_component__WEBPACK_IMPORTED_MODULE_6__["KeepNumberComponent"],
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_7__["SendInvoicesComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_8__["SendMailComponent"],
                _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_9__["ProductGripComponent"],
                _components_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_10__["FormInvoiceComponent"],
                _components_import_invoices_import_invoices_component__WEBPACK_IMPORTED_MODULE_11__["ImportInvoicesComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_12__["SignManyComponent"],
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceComponent"],
                _components_keep_number_keep_number_component__WEBPACK_IMPORTED_MODULE_6__["KeepNumberComponent"],
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_7__["SendInvoicesComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_8__["SendMailComponent"],
                _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_9__["ProductGripComponent"],
                _components_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_10__["FormInvoiceComponent"],
                _components_import_invoices_import_invoices_component__WEBPACK_IMPORTED_MODULE_11__["ImportInvoicesComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_12__["SignManyComponent"],
                _components_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_15__["ImportInvoicesDtComponent"],
                _components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_18__["ChooseHdckComponent"],
                _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__["ViewInvoiceComponent"],
            ],
            entryComponents: [
                _components_keep_number_keep_number_component__WEBPACK_IMPORTED_MODULE_6__["KeepNumberComponent"],
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_7__["SendInvoicesComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_8__["SendMailComponent"],
                _components_import_invoices_import_invoices_component__WEBPACK_IMPORTED_MODULE_11__["ImportInvoicesComponent"],
                _components_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_15__["ImportInvoicesDtComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_12__["SignManyComponent"],
                _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_14__["ViewAttachFileComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["NotifySuccessComponent"],
                _components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_18__["ChooseHdckComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["NotifyReduceTaxComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SendDataForTaxComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SendListEmailComponent"],
                _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__["ViewInvoiceComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["ViewInvoiceMultipageComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["ViewInvoiceMultipageComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SignatureOffComponent"],
                _shared_components_receipt_search_advanced_search_advanced_component__WEBPACK_IMPORTED_MODULE_26__["ReceiptSearchComponent"],
                _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_27__["PreviewInvoiceComponent"]
            ],
            providers: [
                _shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_23__["PaymentReceiptService"],
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_24__["VatService"],
                _shared__WEBPACK_IMPORTED_MODULE_25__["PaymentReceiptResolver"],
                _shared__WEBPACK_IMPORTED_MODULE_25__["ShowPaymentReceiptResolver"],
                _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_28__["ViewInvoiceService"],
                _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_29__["MyBsModalService"]
            ]
        })
    ], PaymentReceiptModule);
    return PaymentReceiptModule;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/payment-receipt.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/payment-receipt/payment-receipt.routing.ts ***!
  \********************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/payment-receipt/components/index/index.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/modules/payment-receipt/components/invoice/invoice.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/modules/payment-receipt/shared/index.ts");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { CreateInvoiceGuard } from '@shared/index';


var routes = [
    {
        path: '',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]
    },
    {
        path: 'create',
        component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["VatDeactivateGuard"]],
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_4__["PaymentReceiptResolver"] },
        data: { brec: 'lap_bien_lai' }
    },
    {
        path: ':receiptId',
        component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["VatDeactivateGuard"]],
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_4__["ShowPaymentReceiptResolver"] },
        data: { brec: 'chi_tiet_bien_lai' }
    },
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

/***/ "./src/app/modules/payment-receipt/shared/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/payment-receipt/shared/index.ts ***!
  \*********************************************************/
/*! exports provided: PaymentReceiptModel, PaymentReceiptResolver, ShowPaymentReceiptResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_receipt_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-receipt.model */ "./src/app/modules/payment-receipt/shared/payment-receipt.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentReceiptModel", function() { return _payment_receipt_model__WEBPACK_IMPORTED_MODULE_0__["PaymentReceiptModel"]; });

/* harmony import */ var _payment_receipt_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-receipt.resolver */ "./src/app/modules/payment-receipt/shared/payment-receipt.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentReceiptResolver", function() { return _payment_receipt_resolver__WEBPACK_IMPORTED_MODULE_1__["PaymentReceiptResolver"]; });

/* harmony import */ var _show_payment_receipt_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-payment-receipt.resolver */ "./src/app/modules/payment-receipt/shared/show-payment-receipt.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowPaymentReceiptResolver", function() { return _show_payment_receipt_resolver__WEBPACK_IMPORTED_MODULE_2__["ShowPaymentReceiptResolver"]; });






/***/ }),

/***/ "./src/app/modules/payment-receipt/shared/payment-receipt.model.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/shared/payment-receipt.model.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentReceiptModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentReceiptModel", function() { return PaymentReceiptModel; });
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
// import { Guid } from "guid-typescript";

var PaymentReceiptModel = /** @class */ (function () {
    function PaymentReceiptModel(adjustment_type) {
        this.id = "";
        this.template_id = ""; //id mẫu biên lai
        this.template_code = ""; /* Mẫu số biên lai */
        this.template_type = "";
        this.status = "";
        this.receipt_date = "";
        this.receipt_type = null;
        this.receipt_series = ""; /* Ký hiệu hóa đơn */
        this.receipt_number = null;
        this.payment_method_name = "";
        this.payment_method_code = "";
        this.fee_name = "";
        this.total_payment = null;
        this.total_payment_in_word = "";
        this.payer_name = ""; //tên người thanh toán
        this.payer_address = ""; //địa chỉ người thanh toán
        this.payer_email = ""; // email người thanh toán
        this.payer_phone = ""; // số điện thoái người thanh toán
        this.customer_code = ""; // mã khách hàng
        this.customer_name = ""; // tên khách hàng
        this.currency_code = ""; // mã loại tiền
        this.currency_rate = null; // tỷ giá
        this.destroy_date = null; // ngày hủy biên lai
        this.destroy_reason = null; // lý do hủy biên lai
        this.display_currency = null;
        this.price = null;
        this.quantity = null;
        this.fee_code = null;
        this.decimal_places_json = null;
        this.issuer_name = null; // Tên nhà cung cấp chữ ký số
        this.payer_tax_code = null;
        this.verify_code = null;
        this.number_of_vouchers = null;
        this.customer_id = null;
        this.receipt_fees = [
            {
                id: _core_helper_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
                fee_name: "",
                fee_code: "",
                unit_code: "",
                unit_name: "",
                quantity: null,
                price: null,
                amount: null,
                order: null,
                view_order: null,
                amount_after_vat: null
            },
        ];
        this.receipt_options = [];
        this.adjustment_type = adjustment_type;
    }
    PaymentReceiptModel.prototype.fillFormData = function (data) {
        this.id = data.id;
        this.template_id = data.template_id;
        this.template_code = data.template_code;
        this.status = data.status;
        this.receipt_date = data.receipt_date;
        this.receipt_type = data.receipt_type;
        this.receipt_series = data.receipt_series;
        this.receipt_number = data.receipt_number;
        this.payment_method_name = data.payment_method_name;
        this.payment_method_code = data.payment_method_code;
        this.fee_name = data.fee_name;
        this.total_payment = data.total_payment;
        this.total_payment_in_word = data.total_payment_in_word;
        this.payer_name = data.payer_name;
        this.payer_address = data.payer_address;
        this.payer_email = data.payer_email;
        this.payer_phone = data.payer_phone;
        this.customer_code = data.customer_code;
        this.customer_name = data.customer_name;
        this.currency_code = data.currency_code;
        this.currency_rate = data.currency_rate;
        this.destroy_date = data.destroy_date;
        this.destroy_reason = data.destroy_reason;
        this.price = data.price;
        this.quantity = data.quantity;
        this.fee_code = data.fee_code;
        this.decimal_places_json = data.decimal_places_json;
        this.issuer_name = data.issuer_name;
        this.adjustment_type = data.adjustment_type;
        this.payer_tax_code = data.payer_tax_code;
        this.verify_code = data.verify_code;
        this.number_of_vouchers = data.number_of_vouchers;
        this.customer_id = data.customer_id;
        this.receipt_options = data.receipt_options;
    };
    PaymentReceiptModel.prototype.fillFormDieuChinh = function (data) {
        this.currency_code = data.currency_code || "VND";
        this.currency_rate = data.currency_rate || null;
        this.customer_name = data.customer_name;
    };
    PaymentReceiptModel.prototype.fillFormThayThe = function (data) {
        this.currency_code = data.currency_code || "VND";
        this.currency_rate = data.currency_rate || null;
        this.customer_name = data.customer_name;
    };
    PaymentReceiptModel.prototype.invoice_products_data = function () {
        var arr = [];
        for (var i = 0; i < 5; i++) {
            arr.push({
                id: _core_helper_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
                order: i + 1,
                view_order: i + 1,
                fee_code: "",
                fee_name: "",
                unit_code: "",
                unit_name: "",
                quantity: null,
                price: null,
                amount: null,
                amount_after_vat: null
            });
        }
        return arr;
    };
    PaymentReceiptModel.prototype.setInvoice_products_data = function (data) {
        var arr = [];
        data.forEach(function (item) {
            arr.push({
                id: _core_helper_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
                order: item.order,
                view_order: item.view_order,
                fee_code: item.fee_code,
                fee_name: item.fee_name,
                unit_code: item.unit_code !== null ? item.unit_code : null,
                unit_name: item.unit_name,
                quantity: item.quantity !== null ? parseFloat(item.quantity) : null,
                price: item.price !== null ? parseFloat(item.price) : null,
                amount: item.amount !== null ? parseFloat(item.amount) : null,
                amount_after_vat: item.amount_after_vat !== null ? parseFloat(item.amount_after_vat) : null,
            });
        });
        arr = arr.sort(function (itemA, itemB) {
            return itemA.order - itemB.order;
        });
        var index = arr.length ? parseInt(arr.slice(-1)[0]["order"]) : 0;
        for (var i = 0; i < 5; i++) {
            arr.push({
                id: _core_helper_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
                order: index + 1,
                view_order: index + 1,
                fee_code: "",
                fee_name: "",
                unit_code: "",
                unit_name: "",
                quantity: null,
                price: null,
                amount: null,
                amount_after_vat: null
            });
            index++;
        }
        return arr;
    };
    PaymentReceiptModel.prototype.add_receipt_fee_data = function (view_order, order) {
        return {
            id: _core_helper_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
            order: order,
            fee_code: "",
            fee_name: "",
            unit_code: "",
            unit_name: "",
            quantity: null,
            price: null,
            amount: null,
            view_order: view_order,
            amount_after_vat: null
        };
    };
    PaymentReceiptModel.prototype.tempImportRow = function (countRow, isPepsi) {
        if (isPepsi === void 0) { isPepsi = false; }
        var arr = [];
        for (var i = 0; i < countRow; i++) {
            arr.push({
                number_of_vouchers: "",
                adjustment_form: "" /* Phương thức điều chỉnh */,
                payer_tax_code: "",
                total_payment: null,
                template_code: "",
                receipt_series: "",
                payer_name: "",
                customer_name: "",
                payer_address: "",
                payer_phone: "",
                payer_email: "",
                payment_method_code: "",
                fee_code: "",
                fee_name: "",
                unit_code: "",
                number_code: "",
                unit_name: "",
                quantity: null,
                price: null,
                amount: null,
                amount_after_vat: null,
                id: null,
                order: i + 1,
                view_order: i + 1,
                dataType: "KHACH_HANG",
                statusData: "INVALID",
                creat_from: "model",
                receipt_options: null,
            });
        }
        return arr;
    };
    PaymentReceiptModel.prototype.addImportRow = function (order, view_order) {
        var arr = {
            number_of_vouchers: "",
            adjustment_form: "" /* Phương thức điều chỉnh */,
            payer_tax_code: "",
            total_payment: null,
            template_code: "",
            receipt_series: "",
            payer_name: "",
            customer_name: "",
            payer_address: "",
            payer_phone: "",
            payer_email: "",
            payment_method_code: "",
            fee_code: "",
            fee_name: "",
            unit_code: "",
            number_code: "",
            unit_name: "",
            quantity: null,
            price: null,
            amount: null,
            amount_after_vat: null,
            id: null,
            order: order,
            view_order: view_order,
            dataType: "KHACH_HANG",
            statusData: "INVALID",
            creat_from: "model",
            receipt_options: null,
        };
        return arr;
    };
    return PaymentReceiptModel;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/shared/payment-receipt.resolver.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/shared/payment-receipt.resolver.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentReceiptResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentReceiptResolver", function() { return PaymentReceiptResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _payment_receipt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaymentReceiptResolver = /** @class */ (function () {
    function PaymentReceiptResolver(router, listsService, authService, paymentRService) {
        this.router = router;
        this.listsService = listsService;
        this.authService = authService;
        this.paymentRService = paymentRService;
    }
    PaymentReceiptResolver.prototype.resolve = function (route, state) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var loaiHoaDon = route.data.type;
        var _countDm = 0;
        var dataJoin = [];
        var dataDM;
        /**
         * Thiếu bên học sinh sinh viên, rà soát lại các hàm liên quan
         */
        var arr = [
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
        ];
        dataDM = this.listsService.getDMBy(arr);
        if (dataDM.length > 0) {
            dataDM.forEach(function (element) {
                dataJoin.push(element);
            });
        }
        _countDm = dataDM.length;
        var dataRecord = this.paymentRService.getPaymentReceiptResolver(loaiHoaDon);
        if (dataRecord.length > 0) {
            dataRecord.forEach(function (element) {
                dataJoin.push(element);
            });
        }
        var dataForkJoin = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(dataJoin);
        return dataForkJoin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            var status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success;
            var isEdit = false;
            for (var index = 0; index < rs.length; index++) {
                if (rs[index].status != _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success) {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs[index].message, "error");
                    _this.router.navigate(['/system/payment-receipt']);
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
                var templates = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToReceiptResolver(rs[dataJoin.length - 1]);
                return [
                    rs[_countDm].data.products,
                    templates,
                    isEdit,
                ];
            }
            else
                return null;
        }));
    };
    PaymentReceiptResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["ListsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _payment_receipt_service__WEBPACK_IMPORTED_MODULE_6__["PaymentReceiptService"]])
    ], PaymentReceiptResolver);
    return PaymentReceiptResolver;
}());



/***/ }),

/***/ "./src/app/modules/payment-receipt/shared/show-payment-receipt.resolver.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/payment-receipt/shared/show-payment-receipt.resolver.ts ***!
  \*********************************************************************************/
/*! exports provided: ShowPaymentReceiptResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPaymentReceiptResolver", function() { return ShowPaymentReceiptResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _payment_receipt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShowPaymentReceiptResolver = /** @class */ (function () {
    function ShowPaymentReceiptResolver(vatService, router, listsService, authService, paymentRService) {
        this.vatService = vatService;
        this.router = router;
        this.listsService = listsService;
        this.authService = authService;
        this.paymentRService = paymentRService;
    }
    ShowPaymentReceiptResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var invoice_id = route.paramMap.get('receiptId');
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var loaiHoaDon = route.data.type;
        var _countDm = 0;
        var dataJoin = [];
        var dataDM;
        /**
         * Thiếu bên học sinh sinh viên, rà soát lại các hàm liên quan
         */
        var arr = [
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
        ];
        dataDM = this.listsService.getDMBy(arr);
        if (dataDM.length > 0) {
            dataDM.forEach(function (element) {
                dataJoin.push(element);
            });
        }
        _countDm = dataDM.length;
        var dataRecord;
        dataRecord = this.paymentRService.showPaymentReceiptResolver(invoice_id, loaiHoaDon);
        if (dataRecord.length > 0) {
            dataRecord.forEach(function (element) {
                dataJoin.push(element);
            });
        }
        var dataForkJoin = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(dataJoin);
        return dataForkJoin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            var isEdit = true;
            var status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success;
            for (var index = 0; index < rs.length; index++) {
                if (rs[index].status != _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success) {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs[index].message, "error");
                    _this.router.navigate(['/system/payment-receipt']);
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
                var templates = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToReceiptResolver(rs[dataJoin.length - 1]);
                return [
                    rs[_countDm].data.products,
                    rs[dataJoin.length - 2].data.receipt,
                    isEdit,
                    templates,
                ];
            }
            else
                return null;
        }));
    };
    ShowPaymentReceiptResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["ListsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _payment_receipt_service__WEBPACK_IMPORTED_MODULE_7__["PaymentReceiptService"]])
    ], ShowPaymentReceiptResolver);
    return ShowPaymentReceiptResolver;
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
//# sourceMappingURL=payment-receipt-payment-receipt-module.js.map