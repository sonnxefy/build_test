(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-buy-invoice-buy-module~vat-vat-module"],{

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

/***/ "./src/app/modules/vat/components/choose-hdck/choose-hdck.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/vat/components/choose-hdck/choose-hdck.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">DANH SÁCH HÓA ĐƠN CHỜ KÝ</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid \r\n    id=\"gridContainer\"\r\n    [dataSource]=\"invoiceList\"\r\n    [showRowLines]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [(selectedRowKeys)]=\"selectedRows\"\r\n    [columnMinWidth]=\"50\"\r\n    [columnResizingMode]=\"true\"\r\n    [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\">\r\n\r\n    <dxo-selection selectAllMode=\"page\" mode=\"single\"></dxo-selection>\r\n\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxi-column dataField=\"invoice_number\" caption=\"Số hóa đơn\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"invoice_date\" caption=\"Ngày HĐ\" [width]=\"110\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"buyer_tax_code\" caption=\"Mã số thuế\" [width]=\"140\" alignment=\"left\"></dxi-column>\r\n    <dxi-column cellTemplate=\"customerName\" caption=\"Tên đơn vị\" alignment=\"left\"></dxi-column>\r\n\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p>{{ d.data.customer_name || d.data.buyer_name || 'Hóa đơn chờ ký' }}</p>\r\n    </div>\r\n    \r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <!-- <dxo-paging [enabled]=\"false\"></dxo-paging> -->\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button text=\"Chọn\" icon=\"assets\\img\\icons\\Ghi.png\" type=\"default\" (click)=\"choose()\" [disabled]=\"!(selectedRows.length == 1)\">\r\n  </dx-button>\r\n  <dx-button text=\"Quay lại\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n  </dx-button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/vat/components/choose-hdck/choose-hdck.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/vat/components/choose-hdck/choose-hdck.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/vat/components/choose-hdck/choose-hdck.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/vat/components/choose-hdck/choose-hdck.component.ts ***!
  \*****************************************************************************/
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
            template: __webpack_require__(/*! ./choose-hdck.component.html */ "./src/app/modules/vat/components/choose-hdck/choose-hdck.component.html"),
            styles: [__webpack_require__(/*! ./choose-hdck.component.scss */ "./src/app/modules/vat/components/choose-hdck/choose-hdck.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"]])
    ], ChooseHdckComponent);
    return ChooseHdckComponent;
}());



/***/ }),

/***/ "./src/app/modules/vat/components/form-invoice/form-invoice.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/vat/components/form-invoice/form-invoice.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row invoice-form\">\r\n  <div class=\"col-md-6\">\r\n    <dx-form tabIndex=\"thongTinHoaDon\" [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <!-- Mẫu hóa đơn TT32-->\r\n        <dxi-item *ngIf=\"!isTT78\" dataField=\"invoice_release_id\" editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.invoice_releases, onValueChanged: templateChange, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_form }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{ _translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <!-- Mẫu hóa đơn TT78-->\r\n        <dxi-item *ngIf=\"isTT78\" dataField=\"template_id\" editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.templatesTT78, onValueChanged: onChangeTem, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_form }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{ _translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <!-- Ngày hóa đơn, số hóa đơn -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"invoice_date\" editorType=\"dxDateBox\"\r\n            [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', disabled: disableInvoiceDate , onValueChanged: changeDateTime}\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_date }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item cssClass=\"vat_hdt invoice-number-create-invoice\" dataField=\"invoice_number\" editorType=\"dxNumberBox\"\r\n            [editorOptions]=\"{ disabled: true}\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_number }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Loại tiền, tỷ giá -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"currency_code\" editorType=\"dxSelectBox\"\r\n            [editorOptions]=\"{items: select.currency_codes, onValueChanged: currencyCodeChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.currency_code }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item dataField=\"currency_rate\" editorType=\"dxNumberBox\"\r\n            [editorOptions]=\"{disabled: frmData.currency_code == 'VND',onValueChanged: currencyRateChange, format: formatter.ty_gia}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.currency_rate }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Hình thức thanh toán, hình thức xuất -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"payment_method_name\" editorType=\"dxSelectBox\"\r\n            [editorOptions]=\"{items: select.payment_method_names,onValueChanged: paymentMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payment_method }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.payment_method }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item name=\"ht-xuat\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.export_form }}\"></dxo-label>\r\n            <div *dxTemplate>\r\n              <dx-select-box [(value)]=\"frmData.status\" displayExpr=\"name\" valueExpr=\"code\" [items]=\"htXuatOptions\"\r\n                [disabled]=\"!configs.system_parameter.allow_keep_invoice_number\"></dx-select-box>\r\n            </div>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Tên ngân hàng -->\r\n        <dxi-item [label]=\"{text: _translate.CONTROLL.LABEL.bank_name}\" dataField=\"bank_name\"\r\n            [editorOptions]=\"{onValueChanged: customerChanged}\">\r\n        </dxi-item>\r\n        <!-- Danh sách ngân hàng -->\r\n        <dxi-item *ngIf=\"configs.system_parameter.view_bank_account_seller\" dataField=\"seller_bank_account_number\"\r\n          editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.list_bank_account_seller, onValueChanged: bankAccountSellerChange, displayExpr: 'name_display', valueExpr: 'code', showClearButton: true}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.seller_bank_account_name }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Số bảng kê, ngày bảng kê -->\r\n        <dxi-item *ngIf=\"isTT78\" itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"list_number\" [editorOptions]=\"{disabled: tod.buyer_address}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.list_number }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item dataField=\"list_date\" [template]=\"'notifydate'\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.list_date }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Chứng từ tham chiếu -->\r\n        <dxi-item *ngIf=\"configs.system_parameter.vouchers_reference\" dataField=\"license_number\">\r\n          <dxo-label text=\"{{ _translate.CONFIGS.vouchers_reference }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Số S/O -->\r\n        <dxi-item *ngIf=\"configs.system_parameter.invoice_the_order\" dataField=\"the_order\">\r\n          <dxo-label text=\"{{ _translate.CONFIGS.so_so }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Thời hạn thanh toán -->\r\n        <dxi-item *ngIf=\"configs.system_parameter.payment_expire\" dataField=\"payment_expire\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payment_time }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Xuất cho khách hàng -->\r\n        <dxi-item *ngIf=\"configs.system_parameter.ship_receiving_name\" dataField=\"ship_receiving_name\">\r\n          <dxo-label text=\"{{ _translate.CONFIGS.ship_receiving_name }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Số phiếu xuất kho -->\r\n        <dxi-item cssClass=\"vat_hdt layout_input\" *ngIf=\"configs.system_parameter.receipts_no\" dataField=\"receipts_no\">\r\n          <dxo-label text=\"{{ _translate.GRID.INVOICE.receipts_no }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Điều khoản giao hàng -->\r\n        <dxi-item *ngIf=\"configs.system_parameter.delivery_terms\" dataField=\"delivery_terms\">\r\n          <dxo-label text=\"{{ _translate.CONFIGS.delivery_terms }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Ngày giao hàng -->\r\n        <dxi-item cssClass=\"vat_hdt layout_input\" *ngIf=\"configs.system_parameter.from_warehouse_date\"\r\n          dataField=\"from_warehouse_date\" [template]=\"'deliverydata'\">\r\n          <dxo-label text=\"{{ _translate.CONFIGS.delivery_date }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Địa chỉ nhận hàng -->\r\n        <dxi-item *ngIf=\"configs.system_parameter.ship_receiving_address\" dataField=\"ship_receiving_address\">\r\n          <dxo-label text=\"{{ _translate.CONFIGS.ship_receiving_address }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Hình thức bán hàng -->\r\n        <dxi-item *ngIf=\"configs.system_parameter.form_sales\" dataField=\"sell_form\">\r\n          <dxo-label text=\"{{ _translate.CONFIGS.form_sales }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Ngày trả lại, người trả lại -->\r\n        <dxi-item [visible]=\"showTraLai\" itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"ngaytralai\" editorType=\"dxDateBox\"\r\n            [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd'}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.date_return }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Người trả lại'}\" dataField=\"nguoitralai\" [editorOptions]=\"{disabled: true}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.person_return }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.person_return }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Lý do trả lại -->\r\n        <dxi-item [visible]=\"showTraLai\" itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item dataField=\"lido\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.reason_return }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.reason_return }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Hóa đơn bàn giao xe -->\r\n        <dxi-item *ngIf=\"isShowBanGiaoXe\" itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n            <!-- Số hợp đồng -->\r\n            <dxi-item dataField=\"contract_number\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.vehicle_contract_number }}\"></dxo-label>\r\n            </dxi-item>\r\n            <!-- Số VSB -->\r\n            <dxi-item dataField=\"vsb_number\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.vehicle_vsb }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n            <!-- Số chứng từ -->\r\n            <dxi-item cssClass=\"vat_hdt layout_input\" dataField=\"license_number\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.vehicle_license_number }}\"></dxo-label>\r\n            </dxi-item>\r\n            <!-- Kiểu xe -->\r\n            <dxi-item dataField=\"model\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.vehicle_model }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Hóa đơn bảo dưỡng xe -->\r\n        <dxi-item *ngIf=\"isShowBaoDuongXe\" itemType=\"group\" [colCount]=\"1\">\r\n          <!-- Địa chỉ giao hàng -->\r\n        <dxi-item dataField=\"place_of_delivery\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.address_delivery }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Địa chỉ xuất hàng -->\r\n        <dxi-item cssClass=\"vat_hdt layout_input\" dataField=\"shiping_point\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.address_shipping }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Thời hạn thanh toán -->\r\n          <dxi-item dataField=\"payment_expire\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payment_time }}\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- Số wip -->\r\n          <dxi-item dataField=\"wip_number\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.wip_number }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        </dxi-item>\r\n        <!-- Hóa đơn nhà thuốc -->\r\n        <dxi-item *ngIf=\"configs.system_parameter.display_infor_put_product\" itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n            <!-- Số tham chiếu -->\r\n            <dxi-item dataField=\"license_number\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.reference_number }}\"></dxo-label>\r\n            </dxi-item>\r\n            <!-- Tuyến -->\r\n            <dxi-item dataField=\"route\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.route }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <!-- Địa chỉ giao hàng -->\r\n            <dxi-item dataField=\"place_of_delivery\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.address_delivery }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <!-- Nhân viên thu tiền -->\r\n            <dxi-item dataField=\"cash_staff\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.cash_staff }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Ghi chú -->\r\n        <dxi-item cssClass=\"vat_hdt invoice-note\" dataField=\"note\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.note }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <div *dxTemplate=\"let d of 'notifydate'\">\r\n        <dx-date-box [(value)]=\"frmData.list_date\" type=\"date\" [useMaskBehavior]=\"true\" [displayFormat]=\"'dd/MM/yyyy'\"\r\n          [dateSerializationFormat]=\"'yyyy-MM-dd HH:mm:ss'\">\r\n        </dx-date-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'deliverydata'\">\r\n        <dx-date-box [(value)]=\"frmData.from_warehouse_date\" type=\"date\" [useMaskBehavior]=\"true\"\r\n          [displayFormat]=\"'dd/MM/yyyy'\" [dateSerializationFormat]=\"'yyyy-MM-dd HH:mm:ss'\">\r\n        </dx-date-box>\r\n      </div>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <dx-form tabIndex=\"thongTinKhachHang\" [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <!-- Xuất hóa đơn cho, nhóm khách hàng -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item cssClass=\"vat_hdt layout_input\" dataField=\"customer_object_code\" editorType=\"dxSelectBox\"\r\n            [editorOptions]=\"{items: select.customer_object_codes, displayExpr: 'name', valueExpr: 'code', onValueChanged: customer_object_codeChange}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.export_invoice_for }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item cssClass=\"vat_hdt layout_input\" dataField=\"customer_type\" editorType=\"dxSelectBox\"\r\n            [editorOptions]=\"{items: select.customer_types, displayExpr: 'name', valueExpr: 'code'}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_group }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Mã số thuế, mã khách hàng -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='vat_hdt layout_input group-input-button'>\r\n            <dxi-item name=\"search-mst\" cssClass='max_left'>\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.tax_code }}\"></dxo-label>\r\n              <div *dxTemplate>\r\n                <dx-autocomplete valueExpr=\"tax_code\"\r\n                  placeholder=\"{{ _translate.CONTROLL.PLACE_HOLDER.input_content_search }}\" [dataSource]=\"tax_codes\"\r\n                  [(value)]=\"frmData.buyer_tax_code\" [readOnly]=\"readOnlyCacTruongConLai\"\r\n                  (onItemClick)=\"taxCodeChoose($event)\" (onFocusOut)=\"updateTaxcodeInfo($event)\"\r\n                  (onValueChanged)=\"changeTaxCode($event)\">\r\n                  <div *dxTemplate=\"let item of 'item'\">\r\n                    <span>{{item.tax_code}}: {{ item.name }}</span>\r\n                  </div>\r\n                </dx-autocomplete>\r\n              </div>\r\n            </dxi-item>\r\n            <dxi-item cssClass='btn-small'>\r\n              <button (click)=\"searchTaxCode()\" type=\"button\" class=\"button-tax-code\">\r\n                <i class=\"{{_translate.ICONS.search}}\" style=\"font-size: 22px;\"></i>\r\n              </button>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='vat_hdt layout_input group-input-button'>\r\n            <dxi-item name=\"search-mkh\" cssClass='max_right'>\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_code }}\"></dxo-label>\r\n              <div *dxTemplate>\r\n                <dx-autocomplete valueExpr=\"code\"\r\n                  placeholder=\"{{ _translate.CONTROLL.PLACE_HOLDER.input_content_search }}\"\r\n                  [dataSource]=\"customer_codes\" [(value)]=\"frmData.customer_code\" [readOnly]=\"readOnlyCacTruongConLai\"\r\n                  (onItemClick)=\"customerCodeChoose($event)\" (onFocusOut)=\"updateCustomerInfo($event)\">\r\n                  <div *dxTemplate=\"let item of 'item'\">\r\n                    <span>{{item.code}}: {{ item.name }}</span>\r\n                  </div>\r\n                </dx-autocomplete>\r\n              </div>\r\n            </dxi-item>\r\n            <dxi-item cssClass='btn-small'>\r\n              <button (click)=\"editTaxCode()\" type=\"button\" class=\"button-tax-code\">\r\n                <i class=\"dx-icon fa fa-plus-circle icon-size\"></i>\r\n              </button>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Tên đơn vị -->\r\n        <dxi-item cssClass=\"vat_hdt layout_input\" dataField=\"customer_name\"\r\n          [editorOptions]=\"{disabled: tod.customer_name, isRequired: false,onValueChanged: customerChanged}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_name }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Họ tên người mua, điện thoại di động -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item cssClass=\"vat_hdt layout_input max_left\" dataField=\"buyer_name\"\r\n            [editorOptions]=\"{disabled: tod.buyer_name,onValueChanged: customerChanged}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.buyer_name }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item dataField=\"buyer_mobile\" [editorOptions]=\"{onValueChanged: customerChanged}\"\r\n            cssClass=\"vat4 invoice-note max_right\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.phone }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.phone\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.phone }} {{ _translate.VALIDATION.not_pattern }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Địa chỉ -->\r\n        <dxi-item *ngIf=\"configs.system_parameter.view_bank_account_seller\" itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item cssClass=\"vat_hdt layout_input\" dataField=\"buyer_address\"\r\n            [editorOptions]=\"{disabled: tod.buyer_address,onValueChanged: customerChanged}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.address }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item cssClass=\"vat_hdt layout_input\" *ngIf=\"!configs.system_parameter.view_bank_account_seller\"\r\n          dataField=\"buyer_address\" [editorOptions]=\"{disabled: tod.buyer_address,onValueChanged: customerChanged}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.address }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Email -->\r\n        <dxi-item [label]=\"{text: 'Email'}\" cssClass=\"vat_hdt layout_input\">\r\n          <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n            <div\r\n              class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n              <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                <app-tag-input-email [variableName]=\"this.emails\" (numberGenerated)=\"renderDataEmail($event)\">\r\n                </app-tag-input-email>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </dxi-item>\r\n        <!-- Hóa đơn kiêm tờ khai hoàn vé -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" *ngIf=\"isShowToKhai\">\r\n           <!-- Số hộ chiều -->\r\n           <dxi-item cssClass=\"in-hoa vat2 layout_input\" dataField=\"passport\" [template]=\"'passportTem'\"\r\n           [editorOptions]=\"{disabled: disableTemplateInput() }\">\r\n           <dxo-label text=\"{{_translate.CONTROLL.LABEL.passport}}\"></dxo-label>\r\n           <dxi-validation-rule type=\"required\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.passport }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n         </dxi-item>\r\n         <!-- Quốc tịch -->\r\n         <dxi-item cssClass=\"in-hoa vat2 layout_input\" dataField=\"nationality\" [template]=\"'nationality'\"\r\n           [editorOptions]=\"{disabled: disableTemplateInput()}\">\r\n           <dxo-label text=\"{{_translate.CONTROLL.LABEL.nationality}}\"></dxo-label>\r\n           <dxi-validation-rule type=\"required\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.nationality }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n         </dxi-item>\r\n        </dxi-item>\r\n        \r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" *ngIf=\"isShowToKhai\">\r\n          <!-- Ngày cấp hộ chiếu -->\r\n          <dxi-item cssClass=\"in-hoa vat2 layout_input\" dataField=\"passport_date\"\r\n            [template]=\"'passportDate'\">\r\n            <dxo-label text=\"{{_translate.CONTROLL.LABEL.passport_date}}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.passport_date }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n          <!-- Ngày hết hạn hộ chiếu -->\r\n          <dxi-item dataField=\"passport_expiration_date\" [template]=\"'expiration'\"\r\n          cssClass=\"in-hoa vat2 layout_input\">\r\n            <dxo-label text=\"{{_translate.CONTROLL.LABEL.passport_expiration_date}}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.passport_expiration_date }} {{ _translate.VALIDATION.required }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!--  -->\r\n        <dxi-item cssClass=\"vat_hdt layout_input\" *ngIf=\"configs.system_parameter.display_export_place\" dataField=\"export_place\"\r\n          editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.export_places, onValueChanged: exportPlaceChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.export_place }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item cssClass=\"vat_hdt layout_input\" *ngIf=\"configs.system_parameter.display_export_place\" dataField=\"export_address\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.export_address }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item cssClass=\"vat_hdt layout_input\" *ngIf=\"configs.system_parameter.display_transport_number\" dataField=\"transport_number\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.transport_number }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item cssClass=\"vat_hdt layout_input\" *ngIf=\"configs.system_parameter.display_transport_number\" dataField=\"train_name\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.train_name }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Đơn vị tính chung -->\r\n        <dxi-item cssClass=\"vat_hdt layout_input\" *ngIf=\"configs.system_parameter.unit_general\" dataField=\"unit_general\">\r\n          <dxo-label text=\"{{ _translate.CONFIGS.unit_general }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!--Thông tin other_id -->\r\n        <dxi-item cssClass=\"vat_hdt layout_input\" *ngIf=\"configs.system_parameter.other_id\" dataField=\"other_id\">\r\n          <dxo-label text=\"{{ _translate.CONFIGS.other_id }}\"></dxo-label>\r\n        </dxi-item>\r\n        <!-- Hóa đơn bàn giao xe -->\r\n        <dxi-item *ngIf=\"isShowBanGiaoXe\" itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Màu xe -->\r\n          <dxi-item cssClass=\"vat_hdt layout_input\" dataField=\"color\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.vehicle_color }}\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- Số máy -->\r\n          <dxi-item dataField=\"invoice_engine_number\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE_DETAILS.engine_number }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Số khung -->\r\n          <dxi-item cssClass=\"vat_hdt layout_input\" dataField=\"invoice_chassis_number\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE_DETAILS.chassis_number }}\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- Năm sản xuất -->\r\n          <dxi-item dataField=\"manufacture_year\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.year_manufacture }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!-- Hóa đơn bảo dưỡng xe -->\r\n      <dxi-item *ngIf=\"isShowBaoDuongXe\" itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Ngày ra, vào xe -->\r\n          <dxi-item cssClass=\"vat_hdt layout_input\" dataField=\"in_out_date\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.in_out_date }}\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- Số hóa đơn nội bộ -->\r\n          <dxi-item dataField=\"invoice_internal_number\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_internal_number }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Biển số xe -->\r\n          <dxi-item cssClass=\"vat_hdt layout_input\" dataField=\"license_plate\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.license_plate }}\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- Số khung -->\r\n          <dxi-item dataField=\"invoice_chassis_number\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE_DETAILS.chassis_number }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n          <!-- Số km -->\r\n          <dxi-item cssClass=\"vat_hdt layout_input\" dataField=\"kilometer_number\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.kilometer_number }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n       <!-- Hóa đơn nhà thuốc -->\r\n       <dxi-item *ngIf=\"configs.system_parameter.display_infor_put_product\" itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Đơn đặt hàng -->\r\n          <dxi-item cssClass=\"vat_hdt layout_input max_left\" dataField=\"the_order\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.the_order }}\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- Số tham khảo -->\r\n          <dxi-item dataField=\"consult_number\" cssClass=\"max_right\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.consult_number }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Kho -->\r\n          <dxi-item cssClass=\"vat_hdt layout_input max_left\" dataField=\"from_warehouse_name\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.warehouse }}\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- Phiếu nhận hàng -->\r\n          <dxi-item dataField=\"receive_bill\" cssClass=\"max_right\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.receive_bill }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      </dxi-item>\r\n      <div *dxTemplate=\"let d of 'passportTem'\">\r\n        <div style=\"display: flex;\" class=\"customize-textbox\">\r\n          <!-- <div style=\"color: red;padding-right: 5px;\">*</div> -->\r\n          <dx-text-box [(value)]=\"frmData.passport\"  style=\"width: 100%\"></dx-text-box>\r\n        </div>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'nationality'\">\r\n        <div style=\"display: flex;\" class=\"customize-textbox\">\r\n          <!-- <div style=\"color: red;padding-right: 5px;\">*</div> -->\r\n          <dx-text-box [(value)]=\"frmData.nationality\" style=\"width: 100%\"></dx-text-box>\r\n        </div>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'expiration'\">\r\n        <div style=\"display: flex;\">\r\n          <!-- <div style=\"color: red;padding-right: 5px;\">*</div> -->\r\n          <dx-date-box [(value)]=\"frmData.passport_expiration_date\" type=\"date\" [useMaskBehavior]=\"true\"\r\n            [displayFormat]=\"'dd/MM/yyyy'\" [dateSerializationFormat]=\"'yyyy-MM-dd HH:mm:ss'\">\r\n          </dx-date-box>\r\n        </div>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'passportDate'\">\r\n        <div style=\"display: flex;\">\r\n          <!-- <div style=\"color: red;padding-right: 5px;\">*</div> -->\r\n          <dx-date-box [(value)]=\"frmData.passport_date\" type=\"date\" [useMaskBehavior]=\"true\"\r\n            [displayFormat]=\"'dd/MM/yyyy'\" [dateSerializationFormat]=\"'yyyy-MM-dd HH:mm:ss'\">\r\n          </dx-date-box>\r\n        </div>\r\n      </div>\r\n    </dx-form>\r\n    <!-- trường mở rộng -->\r\n    <!-- <dx-form #form3 style=\"margin-top:7px\" [formData]=\"customerTempt\" [items]=\"formItems\" class=\"customer-tempt\">\r\n    </dx-form> -->\r\n    <app-form-extend [disableForm]=\"ttDaXuatHoaDon\"  [formData]=\"frmData\"  [customerTempt]=\"customerTempt\" [formItems]=\"formItems\" [typeOptions]=\"'invoice_options'\"></app-form-extend>\r\n  </div>\r\n  <div class=\"col-md-12\" style=\"margin-top:7px;margin-bottom:7px\">\r\n    <dx-form #form4 *ngIf=\"!isTT78\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <ng-container *ngIf=\"configs.system_parameter.allow_keep_invoice_number && isShowButtonWaiteSign\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item name=\"btn-chossen-hdck\">\r\n              <dx-button id=\"btn-chossen-hdck\" (click)=\"showModalHdck()\" icon=\"assets\\img\\icons\\GiuSo.png\"\r\n                text=\"{{_translate.CONTROLL.BUTTON.select_inv_wait_sign}}\" type=\"default\"></dx-button>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </ng-container>\r\n\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n</div>\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"Thông báo\" [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{_translate.CONFIRM.update_customer}}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"capNhatDmKhachHang()\" text=\"{{_translate.CONTROLL.LABEL.update}}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{_translate.CONTROLL.BUTTON.cancel}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/vat/components/form-invoice/form-invoice.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/vat/components/form-invoice/form-invoice.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .vat_hdt.invoice-number-create-invoice input{color:red;font-weight:bold}.icon-size{font-size:21px;padding:2px 0}.button-tax-code{background:#337ab7;color:#fff;border-color:transparent;border:none}.button-tax-code:focus{outline:none}::ng-deep .vat_hdt.invoice-note input{color:#0070C0;font-weight:bold}::ng-deep .vat_hdt.layout_input span.dx-field-item-label-content{width:144px}::ng-deep .custom-tempt .dx-texteditor-container .dx-texteditor-input-container .dx-texteditor-input{padding:0px 9px}#advBtn{margin-top:0;width:5%}:host ::ng-deep .customize-textbox dx-text-box .dx-texteditor-input,dx-number-box .dx-texteditor-input{padding:0px 9px 0px}\n"

/***/ }),

/***/ "./src/app/modules/vat/components/form-invoice/form-invoice.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/vat/components/form-invoice/form-invoice.component.ts ***!
  \*******************************************************************************/
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
/* harmony import */ var _choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../choose-hdck/choose-hdck.component */ "./src/app/modules/vat/components/choose-hdck/choose-hdck.component.ts");
/* harmony import */ var _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/components/form-extend/form-extend.component */ "./src/app/shared/components/form-extend/form-extend.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
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
    function FormInvoiceComponent(authService, route, modalService, vatService, translate, customersService, http, listService, invoiceService) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.modalService = modalService;
        this.vatService = vatService;
        this.translate = translate;
        this.customersService = customersService;
        this.http = http;
        this.listService = listService;
        this.invoiceService = invoiceService;
        this.ttDaXuatHoaDon = false;
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onInvoiceCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTT78TypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = {};
        this.isShowToKhai = false;
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
                            if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.tax_code) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.buyer_tax_code)) {
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
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.contact_person_name) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.buyer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.contact_mobile) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.buyer_mobile)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.business_address) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.buyer_address)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.email) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.buyer_email)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.bank_name) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.bank_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.bank_account_number) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.bank_account_number)) {
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
        this.templateChange = function (e) {
            _this.select.invoice_releases.forEach(function (item) {
                if (e.value === item.value) {
                    _this.frmData.template_id = item.template_id;
                    _this.onTemplateChange.emit(item.is_multi_vat);
                    _this.onTemplateTypeChange.emit(item);
                    if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonBanGiaoXe)
                        _this.isShowBanGiaoXe = true;
                    else
                        _this.isShowBanGiaoXe = false;
                    if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonBaoDuongXe)
                        _this.isShowBaoDuongXe = true;
                    else if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe)
                        _this.isShowToKhai = true;
                    else
                        _this.isShowToKhai = false;
                    _this.isShowBaoDuongXe = false;
                    for (var key in item) {
                        if (item.hasOwnProperty(key)) {
                            var value = item[key];
                            _this._objTemplateSelect[key] = value;
                        }
                    }
                    if (!_this._objTemplateSelect.is_discount) {
                        _this.invoice_products.load().then(function (dataSource) {
                            dataSource.forEach(function (item, index) {
                                item.discount = null;
                                item.amount_discount = null;
                            });
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
                    _this.formDuLieuMoRong(item);
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
                    if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonBanGiaoXe)
                        _this.isShowBanGiaoXe = true;
                    else
                        _this.isShowBanGiaoXe = false;
                    if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonBaoDuongXe)
                        _this.isShowBaoDuongXe = true;
                    else
                        _this.isShowBaoDuongXe = false;
                    if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe)
                        _this.isShowToKhai = true;
                    else
                        _this.isShowToKhai = false;
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
            var tien_chu = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].tienBangChu(Math.abs(_this.frmData.total_payment), _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien), _this.frmData.currency_code, _this.configs.system_parameter.display_read_money_english);
            _this.frmData.total_payment_in_word = _this.invoiceService.docTienAm(_this.frmData.total_payment, tien_chu, _this.configs, _this.frmData.currency_code);
        };
        this.currencyRateChange = function (e) {
            if (!_this.isTT78)
                _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._objTemplateSelect, _this.configs.system_parameter);
            else
                _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._oTemplateTT78, _this.configs.system_parameter);
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
                _this.frmData.payment_method_view_name = _obj.name;
            }
        };
        this.changeDateTime = function (e) {
            _this.changeTemplateInvoice(e.value);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    FormInvoiceComponent.prototype.ngAfterViewInit = function () {
        this.formDuLieuMoRong(this.template_temp);
        if (this.frmData.total_payment) {
            var tien_chu = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].tienBangChu(Math.abs(this.frmData.total_payment), _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien), this.frmData.currency_code, this.configs.system_parameter.display_read_money_english);
            this.frmData.total_payment_in_word = this.invoiceService.docTienAm(this.frmData.total_payment, tien_chu, this.configs, this.frmData.currency_code);
        }
    };
    FormInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.htXuatOptions = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._htXuatOptions(this._translate, this.frmData.status);
        this.role_branch = this.listService.getDataConfigLocalStorage();
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
            _this.select.currency_codes = danh_muc.DM_LOAI_TIEN ? danh_muc.DM_LOAI_TIEN.data : null;
            _this.select.customer_types = danh_muc.DM_NHOM_KHACH_HANG ? danh_muc.DM_NHOM_KHACH_HANG.data : null;
            _this.select.export_places = danh_muc.DM_NOI_XUAT_HOA_DON ? danh_muc.DM_NOI_XUAT_HOA_DON.data : null;
            _this.select.list_bank_account_seller = danh_muc.DM_TAI_KHOAN_NGAN_HANG ? danh_muc.DM_TAI_KHOAN_NGAN_HANG.data : null;
            _this.select.list_bank_account_seller.forEach(function (item) {
                item.name_display = item.code + ': ' + item.name;
            });
            if (_this.isTT78) {
                var temptTT78 = [];
                if (!_this.frmData.id) {
                    temptTT78 = data.init[1];
                }
                else {
                    temptTT78 = data.init[3];
                }
                if (temptTT78 && temptTT78.length > 0) {
                    _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
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
        });
        this.select.customer_object_codes = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._customerObject(this._translate);
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
        if (!this.isTT78) {
            this.select.invoice_releases.forEach(function (item) {
                if (item.template_id === _this.frmData.template_id) {
                    if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonBanGiaoXe)
                        _this.isShowBanGiaoXe = true;
                    else
                        _this.isShowBanGiaoXe = false;
                    if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonBaoDuongXe)
                        _this.isShowBaoDuongXe = true;
                    else
                        _this.isShowBaoDuongXe = false;
                    // Nếu là mẫu html
                    if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe)
                        _this.isShowToKhai = true;
                    else
                        _this.isShowToKhai = false;
                    _this.template_temp = item;
                }
            });
        }
        else {
            this.select.templatesTT78.forEach(function (item) {
                if (item.value === _this.frmData.template_id) {
                    _this.frmData.invoice_release_id = "";
                    if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonBanGiaoXe)
                        _this.isShowBanGiaoXe = true;
                    else
                        _this.isShowBanGiaoXe = false;
                    if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonBaoDuongXe)
                        _this.isShowBaoDuongXe = true;
                    else
                        _this.isShowBaoDuongXe = false;
                    // Nếu là mẫu html
                    if (item.template_type == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe)
                        _this.isShowToKhai = true;
                    else
                        _this.isShowToKhai = false;
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
    FormInvoiceComponent.prototype.formDuLieuMoRong = function (item) {
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
            var _dulieumorong = lodash__WEBPACK_IMPORTED_MODULE_18__["cloneDeep"](item.fields).filter(function (x) { return x.type === '4'; });
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
    // createForm() {
    //   this.form.instance.beginUpdate();
    //   this.form.instance.itemOption('business_addressa', { label: { text: 'Đia chỉaaa' }, editorOptions: { placeholder: 'Nhập địa chỉ' } });
    //   this.form.instance.endUpdate();
    // }
    FormInvoiceComponent.prototype.editTaxCode = function () {
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
            _this.frmData.invoice_options = _dulieumorong;
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
        });
        this.readOnlyCacTruongConLai = false;
    };
    // reset trường mở rộng
    FormInvoiceComponent.prototype.resetTMR = function () {
        this.formExtend.resetForm();
        this.formExtend.resetOptions();
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
        this.frmData.bank_account_number = customer.bank_account_number ? customer.bank_account_number : '';
        this.frmData.bank_name = customer.bank_name ? customer.bank_name : '';
        ////
        this.onFieldDataChanged();
    };
    FormInvoiceComponent.prototype.customerCodeChoose = function (e) {
        var customer = e.itemData;
        if (this.frmData.customer_object_code !== 'CA_NHAN' && this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.customer_name = customer.name;
        }
        this.frmData.buyer_name = customer.contact_person_name;
        if (this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.buyer_address = customer.business_address;
        }
        this.frmData.buyer_tax_code = customer.tax_code;
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
        this.frmData.bank_account_number = customer.bank_account_number ? customer.bank_account_number : '';
        this.frmData.bank_name = customer.bank_name ? customer.bank_name : '';
        this.onFieldDataChanged();
    };
    FormInvoiceComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    FormInvoiceComponent.prototype.capNhatDmKhachHang = function () {
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
            this.frmData.buyer_email = emailToString.replace(/,/g, ';');
        }
        else {
            this.frmData.buyer_email = null;
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
    FormInvoiceComponent.prototype.changeTemplateInvoice = function (strDate) {
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
    FormInvoiceComponent.prototype.changeTaxCode = function (e) {
        this.frmData.buyer_tax_code = e.value;
    };
    FormInvoiceComponent.prototype.searchTaxCode = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        if (!this.frmData.buyer_tax_code) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Vui lòng nhập mã số thuế!", "error");
        }
        else {
            this.vatService.getInfoCompany(this.frmData.buyer_tax_code).subscribe(function (res) {
                if (res.status == "success") {
                    _this.dataTaxCode = res.data.customer;
                    _this.frmData.customer_name = _this.dataTaxCode.name;
                    _this.frmData.buyer_address = _this.dataTaxCode.business_address;
                }
            });
        }
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
        }, 1000);
    };
    FormInvoiceComponent.prototype.focusField = function (tagForm, field) {
        if (tagForm && field) {
            var form_current = this.listDxForm.find(function (form) { return form.tabIndex === tagForm; });
            if (form_current) {
                form_current.instance.getEditor(field).focus();
            }
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
    ], FormInvoiceComponent.prototype, "isRequired", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormInvoiceComponent.prototype, "ttDaXuatHoaDon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onFormChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "formEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onInvoiceCurrent'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "onInvoiceCurrent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "onTemplateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTypeChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "onTemplateTypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTT78TypeChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "onTemplateTT78TypeChange", void 0);
    FormInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vat-form-invoice',
            template: __webpack_require__(/*! ./form-invoice.component.html */ "./src/app/modules/vat/components/form-invoice/form-invoice.component.html"),
            styles: [__webpack_require__(/*! ./form-invoice.component.scss */ "./src/app/modules/vat/components/form-invoice/form-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_12__["CustomersService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_15__["ListsService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_19__["InvoiceService"]])
    ], FormInvoiceComponent);
    return FormInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/vat/components/import-invoices-dt/import-invoices-dt.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/vat/components/import-invoices-dt/import-invoices-dt.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"import-invoices\">\r\n  <form class=\"form-import-invoices\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">{{ _translate.MENU.import_invoice_from_excel}}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"dong()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"padding-bottom: 0px;\">\r\n      <div class=\"row inport-selector\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"select-file\">\r\n            <div *ngIf=\"!isTT78\" class=\"field field-first\" style=\"width: 44%;\">\r\n              <div class=\"label\">{{ _translate.CONTROLL.LABEL.invoice_form}}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [items]=\"invoice_releases\" displayExpr=\"name\" [(value)]=\"invoice_release_id\"\r\n                  valueExpr=\"value\" [disabled]=\"disabledInvoiceReleases\" (onValueChanged)=\"onInvoiceReleases($event)\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"isTT78\" class=\"field field-first\" style=\"width: 44%;\">\r\n              <div class=\"label\">{{ _translate.CONTROLL.LABEL.invoice_form}}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [items]=\"templatesTT78\" displayExpr=\"name\" [(value)]=\"template_id\" valueExpr=\"value\"\r\n                  [disabled]=\"disabledInvoiceReleases\" (onValueChanged)=\"onInvoiceTemplate($event)\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n            <div class=\"field field-first\" style=\"width: 27%;\">\r\n              <div class=\"label\" style=\"width: 135px;\">{{ _translate.CONTROLL.LABEL.export_form }}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [(value)]=\"htXuat\" displayExpr=\"name\" valueExpr=\"code\" [items]=\"htXuatOptions\"\r\n                  [disabled]=\"!configs.system_parameter.allow_keep_invoice_number\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"select-file\">\r\n            <div class=\"field\">\r\n              <div class=\"label\">{{ _translate.CONTROLL.LABEL.file_name }}</div>\r\n              <div class=\"value\">\r\n                <dx-text-box [readOnly]=\"true\" style=\"width: 92.5%!important; border-style: solid!important;\"\r\n                  [value]=\"fileName\"></dx-text-box>\r\n              </div>\r\n              <div class=\"btn-select-file\" style=\"margin-left: 30px;margin-top: 13px;\">\r\n                <a href=\"javascript:void(0)\" (click)=\"napDuLieuTuBangKe()\" class=\"support-link\">\r\n                  <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx, .xls\" (change)=\"onFileChanged($event)\"\r\n                    multiple=\"false\" style=\"display: none;\" />\r\n                  <span>{{ _translate.CONTROLL.LABEL.select_file }}</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col-md-5\">\r\n            <div class=\"select-file\">\r\n              <div class=\"field\" *ngIf=\"!isAllowEditInvoiceDate\">\r\n                <div class=\"label\" style=\"width: 135px;\">Ngày xuất hóa đơn</div>\r\n                <div class=\"value\">\r\n                  <dx-date-box\r\n                    [(value)]=\"invoice_date\"\r\n                    displayFormat=\"dd/MM/yyyy\"\r\n                    dateSerializationFormat=\"yyyy-MM-dd\"\r\n                    >\r\n                  </dx-date-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n      </div>\r\n      <div class=\"note-template-import\">\r\n        <p><span style=\"font-weight: 600; color: red; padding-right: 5px;\">{{ _translate.CONTROLL.LABEL.note1 }}</span>\r\n          {{ _translate.CONTROLL.LABEL.import_list_invoice_from_file_excel }}</p>\r\n        <p style=\"margin-left: 48px;\">{{ _translate.CONTROLL.LABEL.correct_format_download_template }} <a\r\n            href=\"javascript:void(0)\" style=\"font-weight: 600\" (click)=\"getFileTemp()\">{{\r\n            _translate.CONTROLL.LABEL.click_here }}</a></p>\r\n      </div>\r\n      <div class=\"read-file\">\r\n        <dx-button (click)=\"chonDocFile()\" text=\"{{ _translate.CONTROLL.LABEL.read_file_excel }}\" type=\"default\"\r\n          [disabled]=\"isDisReadFile\"></dx-button>\r\n        <dx-button (click)=\"configColumn()\" text=\"{{ _translate.CONTROLL.LABEL.config }}\" type=\"default\"></dx-button>\r\n      </div>\r\n      <!-- phần table hiển thị -->\r\n      <div class=\"row invoice-table\">\r\n        <div class=\"col-md-12\">\r\n          <dx-data-grid id=\"gridImportInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n            [wordWrapEnabled]=\"true\" [columnAutoWidth]=\"false\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\"\r\n            [columnResizingMode]=\"true\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n            (onEditorPreparing)=\"onEditorPreparing($event)\" (onContentReady)=\"onContentReady($event)\"\r\n            (onCellPrepared)=\"onCellPrepared($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n            (onRowUpdated)=\"onRowUpdated($event)\" (onRowRemoving)=\"onRowRemoving($event)\"\r\n            (onKeyDown)=\"onGripKeyDown($event)\">\r\n            <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\" [allowDeleting]=\"true\" [useIcons]=\"true\">\r\n            </dxo-editing>\r\n            <dxo-sorting mode=\"false\"></dxo-sorting>\r\n            <dxo-column-fixing [enabled]=\"true\"></dxo-column-fixing>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('number_of_vouchers').is_visible\" dataField=\"number_of_vouchers\" [width]=\"130\"\r\n              caption=\"{{infoColumn('number_of_vouchers').column_name}}\" alignment=\"left\" [fixed]=\"true\"\r\n              fixedPosition=\"left\">\r\n              <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('invoice_date').is_visible\" dataField=\"invoice_date\"\r\n              caption=\"{{infoColumn('invoice_date').column_name}}\" [width]=\"140\" dataType=\"date\" format=\"dd/MM/yyyy\"\r\n              dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('customer_object_code').is_visible\" dataField=\"customer_object_code\"\r\n              [width]=\"70\" caption=\"{{infoColumn('customer_object_code').column_name}}\" alignment=\"center\"\r\n              [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('customer_code').is_visible\" dataField=\"customer_code\" [width]=\"100\"\r\n              caption=\"{{infoColumn('customer_code').column_name}}\" alignment=\"center\" [fixed]=\"true\"\r\n              fixedPosition=\"left\"></dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('buyer_tax_code').is_visible\" dataField=\"buyer_tax_code\" [width]=\"100\"\r\n              caption=\"{{infoColumn('buyer_tax_code').column_name}}\" alignment=\"left\" [fixed]=\"true\"\r\n              fixedPosition=\"left\">\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"taxCodePattern\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.tax_code }} {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('customer_name').is_visible\" dataField=\"customer_name\" [width]=\"180\"\r\n              caption=\"{{infoColumn('customer_name').column_name}}\" alignment=\"left\" [fixed]=\"true\"\r\n              fixedPosition=\"left\">\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('buyer_name').is_visible\" dataField=\"buyer_name\" [width]=\"120\"\r\n              caption=\"{{infoColumn('buyer_name').column_name}}\" alignment=\"left\" [fixed]=\"true\" fixedPosition=\"left\">\r\n            </dxi-column>\r\n            <!-- Tên HS-SV -->\r\n            <dxi-column *ngIf=\"infoColumn('student_name').is_visible\" dataField=\"student_name\" [width]=\"100\"\r\n              caption=\"{{infoColumn('student_name').column_name}}\" alignment=\"left\" [fixed]=\"true\" fixedPosition=\"left\">\r\n            </dxi-column>\r\n            <!-- Lớp -->\r\n            <dxi-column *ngIf=\"infoColumn('class_name').is_visible\" dataField=\"class_name\" [width]=\"120\"\r\n              caption=\"{{infoColumn('class_name').column_name}}\" alignment=\"left\" [fixed]=\"true\" fixedPosition=\"left\">\r\n            </dxi-column>\r\n            <!-- Quốc tịch -->\r\n            <dxi-column *ngIf=\"infoColumn('nationality').is_visible\" dataField=\"nationality\" [width]=\"100\"\r\n              caption=\"{{infoColumn('nationality').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Hộ chiếu -->\r\n            <dxi-column *ngIf=\"infoColumn('passport').is_visible\" dataField=\"passport\" [width]=\"100\"\r\n              caption=\"{{infoColumn('passport').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Ngày hộ chiếu -->\r\n            <dxi-column *ngIf=\"infoColumn('passport_date').is_visible\" dataField=\"passport_date\" [width]=\"100\"\r\n              dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\"\r\n              caption=\"{{infoColumn('passport_date').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Ngày hết hạn hộ chiếu -->\r\n            <dxi-column *ngIf=\"infoColumn('passport_expiration_date').is_visible\" dataField=\"passport_expiration_date\"\r\n              dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" [width]=\"120\"\r\n              caption=\"{{infoColumn('passport_expiration_date').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('buyer_address').is_visible\" dataField=\"buyer_address\" [width]=\"200\"\r\n              caption=\"{{infoColumn('buyer_address').column_name}}\" alignment=\"left\">\r\n              <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('buyer_mobile').is_visible\" dataField=\"buyer_mobile\" [width]=\"100\"\r\n              caption=\"{{infoColumn('buyer_mobile').column_name}}\" alignment=\"left\">\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"phonePattern\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.phone_number }} {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-column>\r\n            <!-- Hình thức bán hàng -->\r\n            <dxi-column *ngIf=\"infoColumn('sell_form').is_visible\" dataField=\"sell_form\" [width]=\"200\"\r\n              caption=\"{{infoColumn('sell_form').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Hóa đơn xe -->\r\n            <!-- Số hợp đồng -->\r\n            <dxi-column *ngIf=\"infoColumn('contract_number').is_visible\" dataField=\"contract_number\" [width]=\"100\"\r\n              caption=\"{{infoColumn('contract_number').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Số VSB -->\r\n            <dxi-column *ngIf=\"infoColumn('vsb_number').is_visible\" dataField=\"vsb_number\" [width]=\"100\"\r\n              caption=\"{{infoColumn('vsb_number').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Số chứng từ -->\r\n            <dxi-column *ngIf=\"infoColumn('license_number').is_visible\" dataField=\"license_number\" [width]=\"100\"\r\n              caption=\"{{infoColumn('license_number').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Kiểu xe -->\r\n            <dxi-column *ngIf=\"infoColumn('model').is_visible\" dataField=\"model\" [width]=\"100\"\r\n              caption=\"{{infoColumn('model').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Màu xe -->\r\n            <dxi-column *ngIf=\"infoColumn('color').is_visible\" dataField=\"color\" [width]=\"100\"\r\n              caption=\"{{infoColumn('color').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Năm sản xuất -->\r\n            <dxi-column *ngIf=\"infoColumn('manufacture_year').is_visible\" dataField=\"manufacture_year\" [width]=\"100\"\r\n              caption=\"{{infoColumn('manufacture_year').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Địa chỉ giao hàng -->\r\n            <dxi-column *ngIf=\"infoColumn('place_of_delivery').is_visible\" dataField=\"place_of_delivery\" [width]=\"100\"\r\n              caption=\"{{infoColumn('place_of_delivery').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Địa chỉ xuất hàng -->\r\n            <dxi-column *ngIf=\"infoColumn('shiping_point').is_visible\" dataField=\"shiping_point\" [width]=\"100\"\r\n              caption=\"{{infoColumn('shiping_point').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Thời hạn thanh toán -->\r\n            <dxi-column *ngIf=\"infoColumn('payment_expire').is_visible\" dataField=\"payment_expire\" [width]=\"100\"\r\n              caption=\"{{infoColumn('payment_expire').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Số wip -->\r\n            <dxi-column *ngIf=\"infoColumn('wip_number').is_visible\" dataField=\"wip_number\" [width]=\"100\"\r\n              caption=\"{{infoColumn('wip_number').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Ngày ra, vào xe -->\r\n            <dxi-column *ngIf=\"infoColumn('in_out_date').is_visible\" dataField=\"in_out_date\" [width]=\"100\"\r\n              caption=\"{{infoColumn('in_out_date').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Số hóa đơn nội bộ -->\r\n            <dxi-column *ngIf=\"infoColumn('invoice_internal_number').is_visible\" dataField=\"invoice_internal_number\"\r\n              [width]=\"100\" caption=\"{{infoColumn('invoice_internal_number').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Biển số xe -->\r\n            <dxi-column *ngIf=\"infoColumn('license_plate').is_visible\" dataField=\"license_plate\" [width]=\"100\"\r\n              caption=\"{{infoColumn('license_plate').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Số km -->\r\n            <dxi-column *ngIf=\"infoColumn('kilometer_number').is_visible\" dataField=\"kilometer_number\" [width]=\"100\"\r\n              caption=\"{{infoColumn('kilometer_number').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Số máy -->\r\n            <dxi-column *ngIf=\"infoColumn('invoice_engine_number').is_visible\" dataField=\"invoice_engine_number\"\r\n              [width]=\"100\" caption=\"{{infoColumn('invoice_engine_number').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Số khung -->\r\n            <dxi-column *ngIf=\"infoColumn('invoice_chassis_number').is_visible\" dataField=\"invoice_chassis_number\"\r\n              [width]=\"100\" caption=\"{{infoColumn('invoice_chassis_number').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- End -->\r\n            <!-- Email nhận hóa đơn -->\r\n            <dxi-column *ngIf=\"infoColumn('buyer_email').is_visible\" dataField=\"buyer_email\" [width]=\"150\"\r\n              caption=\"{{infoColumn('buyer_email').column_name}}\" alignment=\"left\">\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"emailPattern\"\r\n                message=\"Email {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('payment_method_name').is_visible\" dataField=\"payment_method_name\"\r\n              [width]=\"100\" caption=\"{{infoColumn('payment_method_name').column_name}}\" alignment=\"left\">\r\n              <dxo-lookup [dataSource]=\"select.payment_method_names\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n              <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n            </dxi-column>\r\n            <!-- Loại tiền -->\r\n            <dxi-column *ngIf=\"infoColumn('currency_code').is_visible\" dataField=\"currency_code\" [width]=\"77\"\r\n              caption=\"{{infoColumn('currency_code').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Tỷ giá trên hóa đơn -->\r\n            <dxi-column *ngIf=\"infoColumn('currency_rate').is_visible\" dataField=\"currency_rate\"\r\n              caption=\"{{infoColumn('currency_rate').column_name}}\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.ty_gia }\" [format]=\"formatter.ty_gia\" dataType=\"number\"\r\n              alignment=\"right\"></dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('bank_account_number').is_visible\" dataField=\"bank_account_number\"\r\n              [width]=\"100\" caption=\"{{infoColumn('bank_account_number').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('bank_name').is_visible\" dataField=\"bank_name\" [width]=\"150\"\r\n              caption=\"{{infoColumn('bank_name').column_name}}\" alignment=\"left\"></dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('ship_receiving_name').is_visible\" dataField=\"ship_receiving_name\"\r\n              [width]=\"150\" caption=\"{{infoColumn('ship_receiving_name').column_name}}\" alignment=\"left\"></dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('ship_receiving_address').is_visible\" dataField=\"ship_receiving_address\"\r\n              [width]=\"150\" caption=\"{{infoColumn('ship_receiving_address').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('consult_number').is_visible\" dataField=\"consult_number\" [width]=\"150\"\r\n              caption=\"{{infoColumn('consult_number').column_name}}\" alignment=\"left\"></dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('the_order').is_visible\" dataField=\"the_order\" [width]=\"150\"\r\n              caption=\"{{infoColumn('the_order').column_name}}\" alignment=\"left\"></dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('transport_number').is_visible\" dataField=\"transport_number\" [width]=\"150\"\r\n              caption=\"{{infoColumn('transport_number').column_name}}\" alignment=\"left\"></dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('train_name').is_visible\" dataField=\"train_name\" [width]=\"150\"\r\n              caption=\"{{infoColumn('train_name').column_name}}\" alignment=\"left\"></dxi-column>\r\n            <!-- Mẫu số hóa đơn -->\r\n            <dxi-column *ngIf=\"infoColumn('template_code').is_visible\" dataField=\"template_code\" [width]=\"130\"\r\n              caption=\"{{infoColumn('template_code').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Ký hiệu hóa đơn -->\r\n            <dxi-column *ngIf=\"infoColumn('invoice_series').is_visible\" dataField=\"invoice_series\" [width]=\"130\"\r\n              caption=\"{{infoColumn('invoice_series').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Số thứ tự hàng hóa -->\r\n            <dxi-column *ngIf=\"infoColumn('view_order').is_visible\" dataField=\"view_order\" [width]=\"50\"\r\n              caption=\"{{infoColumn('view_order').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('contract_order').is_visible\" dataField=\"contract_order\" [width]=\"130\"\r\n              caption=\"{{infoColumn('contract_order').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Mã hàng hóa -->\r\n            <dxi-column *ngIf=\"infoColumn('product_code').is_visible\" dataField=\"product_code\"\r\n              [editorOptions]=\"{showClearButton: true}\" caption=\"{{infoColumn('product_code').column_name}}\"\r\n              alignment=\"center\" [width]=\"100\">\r\n              <dxo-lookup [dataSource]=\"select.products\" displayExpr=\"code\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Mã quản lý -->\r\n            <dxi-column *ngIf=\"infoColumn('management_code').is_visible\" dataField=\"management_code\" [width]=\"130\"\r\n              caption=\"{{infoColumn('management_code').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('product_name').is_visible\" dataField=\"product_name\" [width]=\"150\"\r\n              caption=\"{{infoColumn('product_name').column_name}}\" alignment=\"left\">\r\n              <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('engine_number').is_visible\" dataField=\"engine_number\" [width]=\"130\"\r\n              caption=\"{{infoColumn('engine_number').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('chassis_number').is_visible\" dataField=\"chassis_number\" [width]=\"130\"\r\n              caption=\"{{infoColumn('chassis_number').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('lot').is_visible\" dataField=\"lot\" [width]=\"100\"\r\n              caption=\"{{infoColumn('lot').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('expiration_date').is_visible\" dataField=\"expiration_date\" [width]=\"100\"\r\n              caption=\"{{infoColumn('expiration_date').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Phí hoàn vé -->\r\n            <dxi-column *ngIf=\"infoColumn('is_refund_ticket').is_visible\"\r\n              caption=\"{{infoColumn('is_refund_ticket').column_name}}\" minWidth=\"{{ _translate.GRID_WIDTH.cktm }}\"\r\n              alignment=\"center\" dataField=\"is_refund_ticket\"></dxi-column>\r\n            <!-- Phí dịch vụ -->\r\n            <dxi-column *ngIf=\"infoColumn('is_money_service').is_visible\"\r\n              caption=\"{{infoColumn('is_money_service').column_name}}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n              alignment=\"center\" dataField=\"is_money_service\"></dxi-column>\r\n            <!-- Diễn giải -->\r\n            <dxi-column *ngIf=\"infoColumn('is_promotion').is_visible\" dataField=\"is_promotion\" [width]=\"100\"\r\n              caption=\"{{infoColumn('is_promotion').column_name}}\" alignment=\"center\">\r\n              <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n            </dxi-column>\r\n            <!-- Khuyến mại -->\r\n            <dxi-column *ngIf=\"infoColumn('is_promotion_new').is_visible\" dataField=\"is_promotion_new\" [width]=\"100\"\r\n              caption=\"{{infoColumn('is_promotion_new').column_name}}\" alignment=\"center\">\r\n              <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('commercial_discount').is_visible\" dataField=\"commercial_discount\"\r\n              [width]=\"100\" caption=\"{{infoColumn('commercial_discount').column_name}}\" alignment=\"center\">\r\n              <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('provisions_on_accounts').is_visible\" dataField=\"provisions_on_accounts\"\r\n              [width]=\"150\" caption=\"{{infoColumn('provisions_on_accounts').column_name}}\" alignment=\"left\">\r\n              <dxo-lookup [dataSource]=\"select.select_provisions_on_accounts\" displayExpr=\"name\" valueExpr=\"code\">\r\n              </dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Màu sắc, chất liệu -->\r\n            <dxi-column *ngIf=\"infoColumn('color_material').is_visible\" dataField=\"color_material\" [width]=\"100\"\r\n              caption=\"{{infoColumn('color_material').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('unit_name').is_visible\" dataField=\"unit_code\"\r\n              [editorOptions]=\"lookupColumnOptions\" caption=\"{{infoColumn('unit_name').column_name}}\" [width]=\"100\"\r\n              alignment=\"center\">\r\n              <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Ngày -->\r\n            <dxi-column *ngIf=\"infoColumn('product_date').is_visible\" dataField=\"product_date\" [width]=\"100\"\r\n              caption=\"{{infoColumn('product_date').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Tỷ giá trên hàng hóa -->\r\n            <dxi-column *ngIf=\"infoColumn('product_exchange_rate').is_visible\" dataField=\"product_exchange_rate\"\r\n              caption=\"{{infoColumn('product_exchange_rate').column_name}}\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.ty_gia }\" [format]=\"formatter.ty_gia\" dataType=\"number\"\r\n              alignment=\"right\"></dxi-column>\r\n            <!-- Số lượng -->\r\n            <dxi-column *ngIf=\"infoColumn('quantity').is_visible\" dataField=\"quantity\"\r\n              caption=\"{{infoColumn('quantity').column_name}}\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.so_luong }\" [format]=\"formatter.so_luong\" dataType=\"number\"\r\n              alignment=\"center\"></dxi-column>\r\n            <!-- Đơn giá sau thuế -->\r\n            <dxi-column *ngIf=\"infoColumn('price_after_vat').is_visible\" dataField=\"price_after_vat\"\r\n              caption=\"{{infoColumn('price_after_vat').column_name}}\" [width]=\"90\"\r\n              [editorOptions]=\"{ format: formatter.don_gia_sau_thue }\" [format]=\"formatter.don_gia_sau_thue\"\r\n              dataType=\"number\" alignment=\"right\"></dxi-column>\r\n            <!-- Đơn giá -->\r\n            <dxi-column *ngIf=\"infoColumn('price').is_visible\" dataField=\"price\"\r\n              caption=\"{{infoColumn('price').column_name}}\" [width]=\"90\" [editorOptions]=\"{ format: formatter.don_gia }\"\r\n              [format]=\"formatter.don_gia\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n            <!-- Thành tiền chưa trừ chiết khấu -->\r\n            <dxi-column *ngIf=\"infoColumn('amount_without_discount').is_visible\" dataField=\"amount_without_discount\"\r\n              caption=\"{{infoColumn('amount_without_discount').column_name}}\" [width]=\"109\"\r\n              [editorOptions]=\"{ format: formatter.thanh_tien_chua_ck }\" [format]=\"formatter.thanh_tien_chua_ck\"\r\n              dataType=\"number\" alignment=\"right\">\r\n            </dxi-column>\r\n            <!-- Thành tiền -->\r\n            <dxi-column *ngIf=\"infoColumn('amount').is_visible\" dataField=\"amount\"\r\n              caption=\"{{infoColumn('amount').column_name}}\" [width]=\"109\"\r\n              [editorOptions]=\"{ format: formatter.thanh_tien }\" [format]=\"formatter.thanh_tien\" dataType=\"number\"\r\n              alignment=\"right\">\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('discount').is_visible\" dataField=\"discount\"\r\n              caption=\"{{infoColumn('discount').column_name}}\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.ty_le_chiet_khau }\" [format]=\"formatter.ty_le_chiet_khau\"\r\n              dataType=\"number\" alignment=\"center\"></dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('amount_discount').is_visible\" dataField=\"amount_discount\"\r\n              caption=\"{{infoColumn('amount_discount').column_name}}\" [width]=\"109\"\r\n              [editorOptions]=\"{ format: formatter.tien_chiet_khau }\" [format]=\"formatter.tien_chiet_khau\"\r\n              dataType=\"number\" alignment=\"right\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('price_after_discount').is_visible\" dataField=\"price_after_discount\"\r\n              caption=\"{{infoColumn('price_after_discount').column_name}}\" [width]=\"109\"\r\n              [editorOptions]=\"{ format: formatter.don_gia }\" [format]=\"formatter.don_gia\" dataType=\"number\"\r\n              alignment=\"right\">\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('vat').is_visible\" dataField=\"vat\" [editorOptions]=\"{showClearButton: true}\"\r\n              caption=\"{{infoColumn('vat').column_name}}\" [width]=\"90\" alignment=\"center\">\r\n              <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Tiền thuế -->\r\n            <dxi-column *ngIf=\"infoColumn('amount_vat').is_visible\" dataField=\"amount_vat\"\r\n              caption=\"{{infoColumn('amount_vat').column_name}}\" [width]=\"120\"\r\n              [editorOptions]=\"{ format: formatter.tien_thue }\" [format]=\"formatter.tien_thue\" dataType=\"number\"\r\n              alignment=\"right\"></dxi-column>\r\n            <!-- Thuế khác -->\r\n            <dxi-column *ngIf=\"infoColumn('other_tax').is_visible\" dataField=\"other_tax\"\r\n              caption=\"{{infoColumn('other_tax').column_name}}\" [width]=\"120\"\r\n              [editorOptions]=\"{ format: formatter.thanh_tien }\" [format]=\"formatter.thanh_tien\" dataType=\"number\"\r\n              alignment=\"right\"></dxi-column>\r\n            <!-- Phí khác -->\r\n            <dxi-column *ngIf=\"infoColumn('other_charge').is_visible\" dataField=\"other_charge\"\r\n              caption=\"{{infoColumn('other_charge').column_name}}\" [width]=\"120\"\r\n              [editorOptions]=\"{ format: formatter.thanh_tien }\" [format]=\"formatter.thanh_tien\" dataType=\"number\"\r\n              alignment=\"right\"></dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('invoice_amount').is_visible\" dataField=\"invoice_amount\"\r\n              caption=\"{{infoColumn('invoice_amount').column_name}}\" [width]=\"130\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\" dataType=\"number\"\r\n              alignment=\"right\"></dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('amount_after_vat').is_visible\" dataField=\"amount_after_vat\"\r\n              caption=\"{{infoColumn('amount_after_vat').column_name}}\" [width]=\"130\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\" dataType=\"number\"\r\n              alignment=\"right\">\r\n            </dxi-column>\r\n            <!-- Tổng số lượng lớn -->\r\n            <dxi-column *ngIf=\"infoColumn('total_large_unit').is_visible\" dataField=\"total_large_unit\"\r\n              caption=\"{{infoColumn('total_large_unit').column_name}}\" [width]=\"130\"\r\n              [editorOptions]=\"{ format: formatter.so_luong }\" [format]=\"formatter.so_luong\" dataType=\"number\"\r\n              alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Tổng số lượng nhỏ -->\r\n            <dxi-column *ngIf=\"infoColumn('total_small_unit').is_visible\" dataField=\"total_small_unit\"\r\n              caption=\"{{infoColumn('total_small_unit').column_name}}\" [width]=\"130\"\r\n              [editorOptions]=\"{ format: formatter.so_luong }\" [format]=\"formatter.so_luong\" dataType=\"number\"\r\n              alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Cộng tiền hàng trên hóa đơn-->\r\n            <dxi-column *ngIf=\"infoColumn('invoice_amount').is_visible\" dataField=\"invoice_amount\"\r\n              caption=\"{{infoColumn('invoice_amount').column_name}}\" [width]=\"130\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\" dataType=\"number\"\r\n              alignment=\"right\"></dxi-column>\r\n            <!-- Tổng tiền thuế trên hóa đơn -->\r\n            <dxi-column *ngIf=\"infoColumn('total_amount_vat').is_visible\" dataField=\"total_amount_vat\"\r\n              caption=\"{{infoColumn('total_amount_vat').column_name}}\" [width]=\"130\"\r\n              [editorOptions]=\"{ format: formatter.tien_thue }\" [format]=\"formatter.tien_thue\" dataType=\"number\"\r\n              alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Phí bảo vệ môi trường -->\r\n            <dxi-column *ngIf=\"infoColumn('environmental_fee').is_visible\" dataField=\"environmental_fee\"\r\n              caption=\"{{infoColumn('environmental_fee').column_name}}\" [width]=\"130\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\" dataType=\"number\"\r\n              alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Tổng tiền thanh toán trên hóa đơn -->\r\n            <dxi-column *ngIf=\"infoColumn('total_payment').is_visible\" dataField=\"total_payment\"\r\n              caption=\"{{infoColumn('total_payment').column_name}}\" [width]=\"130\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\" dataType=\"number\"\r\n              alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Tên username -->\r\n            <dxi-column *ngIf=\"infoColumn('username').is_visible\" dataField=\"username\" [width]=\"100\"\r\n              caption=\"{{infoColumn('username').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('billing_source').is_visible\" dataField=\"billing_source\" [width]=\"150\"\r\n              caption=\"{{infoColumn('billing_source').column_name}}\" alignment=\"left\">\r\n              <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('note').is_visible\" dataField=\"note\" [width]=\"100\"\r\n              caption=\"{{infoColumn('note').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <dxi-column cellTemplate=\"DinhKemFile\" caption=\"{{ _translate.CONTROLL.LABEL.attach_file }}\" [width]=\"250\"\r\n              alignment=\"center\">\r\n            </dxi-column>\r\n\r\n            <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n              <a class=\"delete-row\" href=\"javascript:void(0)\"><i class=\"fa fa-times\"></i></a>\r\n            </div>\r\n\r\n            <div *dxTemplate=\"let data of 'DinhKemFile'\">\r\n              <a href=\"javascript:void(0)\" (click)=\"dinhKemFile($event)\" *ngIf=\"data.data.number_of_vouchers != ''\">\r\n                <input type=\"file\" id=\"file-dinh-kem\" [attr.data-rowindex]=\"data.rowIndex\"\r\n                  accept=\".xlsx, .docx, .doc, .pdf, .xls, .xml\" (change)=\"onDinhKemFile($event)\" multiple=\"false\"\r\n                  style=\"display: none;\" />\r\n                <!-- <span><i class=\"fa fa-file\"></i></span> -->\r\n                {{ _translate.CONTROLL.LABEL.select_file }}\r\n                <p>{{data.data.file_attach_name}}</p>\r\n              </a>\r\n            </div>\r\n            <!-- <dxo-summary >\r\n                  <dxi-total-item\r\n                      summaryType=\"custom\"\r\n                      [customizeText]=\"customizeText\"\r\n                      showInColumn=\"amount\">\r\n                  </dxi-total-item>\r\n                </dxo-summary> -->\r\n            <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n            <dxo-paging [enabled]=\"true\"></dxo-paging>\r\n            <!-- <dxo-summary>\r\n              <dxi-total-item name=\"totalAmount\" column=\"amount\" summaryType=\"sum\" [customizeText]=\"customizeText\">\r\n              </dxi-total-item>\r\n              <dxi-total-item name=\"totalAmountVat\" column=\"amount_vat\" summaryType=\"sum\"\r\n                [customizeText]=\"customizeText\">\r\n              </dxi-total-item>\r\n              <dxi-total-item name=\"totalAmountAfterVat\" column=\"amount_after_vat\" summaryType=\"sum\"\r\n                [customizeText]=\"customizeText\">\r\n              </dxi-total-item>\r\n            </dxo-summary> -->\r\n          </dx-data-grid>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7\">\r\n          <div class=\"note-footer\">\r\n            <p style=\"margin-left: 0;\"><span style=\"font-weight: 500; color: red;\">{{ _translate.GRID.GENERAL.note\r\n                }}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.can_edit_delete_on_grid }}</p>\r\n            <p><span class=\"mau-vang\"> </span>{{ _translate.CONTROLL.LABEL.yellow_number_of_voucher }}</p>\r\n            <p><span class=\"mau-do\"> </span>{{ _translate.CONTROLL.LABEL.red_incorrect_format }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <div class=\"note-footer\" style=\"text-align: right; margin-right: 50px;\">\r\n            <p style=\"padding: 8px;\"></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.number_of_valid_documents }} <span\r\n                style=\"color: seagreen; font-weight: 600\">{{totalInvoiceInvalid}}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.number_of_voucher_wrong_format }} <span\r\n                style=\"color: red; font-weight: 600\">{{totalErrorInvoice}}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.number_of_voucher_duplicate }} <span\r\n                style=\"color: yellow; font-weight: 600\">{{totalDuplicateInvoice}}</span></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <div class=\"col-md-4\">\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit && !isPepsi\" icon=\"assets\\img\\icons\\Xem.png\"\r\n          text=\"{{ _translate.CONTROLL.BUTTON.preview_invoice }}\" (click)=\"preview()\" type=\"default\"></dx-button>\r\n        <dx-button disableDoubleClick *ngIf=\"!isVisibleBtnSubmit && !isPepsi\" icon=\"assets\\img\\icons\\Xem.png\"\r\n          text=\"{{ _translate.CONTROLL.BUTTON.view_invoice }}\" (click)=\"xemHoaDon()\" type=\"default\"></dx-button>\r\n        <dx-button disableDoubleClick *ngIf=\"!isVisibleBtnSubmit && !isPepsi\" icon=\"assets\\img\\icons\\In.png\"\r\n          text=\"{{ _translate.CONTROLL.BUTTON.print_conversion }}\" (click)=\"inChuyenDoi()\" type=\"default\"></dx-button>\r\n      </div>\r\n      <div class=\"col-md-8 btn-right\">\r\n        <dx-button disableDoubleClick text=\"{{ _translate.CONTROLL.BUTTON.come_back}}\" type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\"\r\n          (click)=\"dong()\">\r\n        </dx-button>\r\n        <!-- <dx-button *ngIf=\"isVisibleBtnSubmit\" text=\"Xuất dữ liệu trên lưới ra Excel\"\r\n          icon=\"assets\\img\\icons\\XuatFile.png\" (click)=\"xuatFile()\" type=\"default\"></dx-button> -->\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit\" text=\"Ghi tạm\" icon=\"assets\\img\\icons\\GhiTam.png\" (click)=\"submit('LUU')\"\r\n          type=\"default\"></dx-button>\r\n        <!-- <dx-button *ngIf=\"isVisibleBtnSubmit\"  text=\"Xuất chờ ký\" icon=\"assets\\img\\icons\\XuatHD.png\" (click)=\"submit('CHO_KY')\" type=\"default\" ></dx-button> -->\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit && isAccessExportInv\" text=\"{{ _translate.CONTROLL.BUTTON.export_invoice}}\"\r\n          icon=\"assets\\img\\icons\\XuatHD.png\" (click)=\"submit('XUAT')\" type=\"default\"></dx-button>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.processing }}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopupImport\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n\r\n  </div>\r\n</dx-popup>\r\n\r\n<dx-popup class=\"popup\" [width]=\"500\" [height]=\"160\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n  [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"popupCachNapDuLieu\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p>{{ _translate.CONTROLL.LABEL.please_choose_load_data }} </p>\r\n    <div class=\"text-center\" style=\"margin-top: 25px\">\r\n      <dx-button (click)=\"thayThe($event)\" text=\"{{ _translate.CONTROLL.BUTTON.replace_all}}\" type=\"default\">\r\n      </dx-button>\r\n      <dx-button (click)=\"themTiep($event)\" text=\"{{ _translate.CONTROLL.BUTTON.add_more}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/vat/components/import-invoices-dt/import-invoices-dt.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/vat/components/import-invoices-dt/import-invoices-dt.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".import-invoices .dx-texteditor{border-radius:0;display:inline-block;margin-right:8px;height:28px;max-height:32px}.import-invoices .select-file .field>div{display:inline-block;vertical-align:middle}.import-invoices .select-file{width:100%;display:inline-block;margin:0}.import-invoices .select-file .field .label{width:90px;margin-right:10px;text-align:right;margin-top:7px}.import-invoices .select-file .field .value{width:35% !important;margin-top:10px}.import-invoices .select-file .field.field-first{display:inline-block}.import-invoices .select-file .field.field-first .value{width:calc(100% - 150px) !important}::ng-deep .import-invoices .select-file .field .dx-texteditor{width:100% !important}.support-link{top:-2px;position:relative;padding:5px 25px 7px 25px;background-color:#337ab7;border-color:#2d6da3;color:#fff;text-decoration:none}.support-link.mgr-15{margin-right:15px}.support-link img{margin-right:10px;margin-top:-2px}#auto-input{margin-right:75px}.note-template-import{margin-top:10px;margin-left:52px;display:inline-block;width:39%}.read-file{display:inline-block;margin-left:6px;position:relative;top:-10px}.note-footer{margin-top:10px}.note-footer p{margin-left:20px;margin-bottom:5px}.mau-vang{padding-right:15px;margin-right:10px;background-color:yellow}.mau-do{padding-right:15px;margin-right:10px;background-color:red}::ng-deep #gridImportInvoice{height:400px}::ng-deep .btn-right{padding-right:0}::ng-deep .btn-right .dx-button{float:right}::ng-deep .btn-right .dx-button:last-child{margin-right:8px !important}::ng-deep #gridImportInvoice .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit{width:40px;min-width:20px !important}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-validator.dx-datagrid-invalid .dx-highlight-outline::after{border:2px solid #d9534f}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-cell-modified .dx-highlight-outline::after{border-color:#fff}::ng-deep .form-import-invoices .inport-selector .dx-texteditor-input{padding-bottom:15px}::ng-deep .notify-modal{max-width:22%}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/vat/components/import-invoices-dt/import-invoices-dt.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/vat/components/import-invoices-dt/import-invoices-dt.component.ts ***!
  \*******************************************************************************************/
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
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../view-invoice/view-invoice.component */ "./src/app/modules/vat/components/view-invoice/view-invoice.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
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
    function ImportInvoicesDtComponent(bsModalImportRef, modalService, vatService, socketService, authService, modalImportService, bsModalViewModel, _location, router, productsService, invoiceService) {
        this.bsModalImportRef = bsModalImportRef;
        this.modalService = modalService;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.modalImportService = modalImportService;
        this.bsModalViewModel = bsModalViewModel;
        this._location = _location;
        this.router = router;
        this.productsService = productsService;
        this.invoiceService = invoiceService;
        this.fileName = "";
        this.isDisReadFile = true;
        this.select = {};
        this.isAccessExportInv = false;
        this.formatter = {};
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceModel"](1);
        this.fieldDisable = ["number_of_vouchers", "invoice_date", "customer_code", "currency_code", "currency_rate", "customer_object_code", "buyer_tax_code", "customer_name", "buyer_name", "class_name", "student_name", "buyer_address", "buyer_mobile", "buyer_email", "payment_method_name", "bank_account_number", "bank_name"];
        this.invoice_date = "";
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
        this.taxCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].tax_code;
        this.emailPattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].email;
        this.loaiHoaDon = '';
        this.phonePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].phone;
        this.datetimePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].datetime;
        this.productCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].productCodePattern;
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
        this.isToKhaiThue = false;
        this.isPassNQ43 = false;
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
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_13___default.a({
            key: 'keyData',
            data: []
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_14___default.a({
            store: this.invoice_products
        });
        //this.htXuatOptions.splice(1, 1);
        this.configs = this.authService.getConfigs();
        /* Hóa đơn Pepsico */
        if (this.configs.system_parameter.display_delivery_information)
            this.isPepsi = true;
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        if (this.configs.config_column_import_inv_excel && this.configs.config_column_import_inv_excel.length > 0) {
            this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnImportExcel(this._translate);
            this.listColumn.forEach(function (item) {
                var _obj = _this.configs.config_column_import_inv_excel.filter(function (p) { return p.column_code == item.column_code; })[0];
                if (_obj) {
                    item.is_visible = _obj.is_visible;
                }
            });
        }
        else {
            this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnImportExcel(this._translate);
        }
        if (this.infoDangKy) {
            if (this.infoDangKy.status == "CHAP_NHAN") {
                this.isTT78 = true;
                if (this.templatesTT78 && this.templatesTT78.length > 0)
                    this.templatesTT78 = this.templatesTT78.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
            }
        }
        this.htXuatOptions = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_12__["VSelectBoxService"]._htXuatOptions(this._translate);
        if (!this.isTT78) {
            if (this.invoice_releases && this.invoice_releases.length > 0) {
                if (!this.hoaDonImportChoXuat)
                    this.invoice_release_id = this.invoice_releases[0].value;
                this.template_id = this.invoice_releases[0].template_id;
                this.is_multi_vat = this.invoice_releases[0].is_multi_vat;
                if (this.invoice_releases[0].template_type == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe) {
                    this.isToKhaiThue = true;
                }
                else {
                    this.isToKhaiThue = false;
                }
            }
        }
        else {
            if (this.templatesTT78 && this.templatesTT78.length > 0) {
                this.invoice_series = this.templatesTT78[0].invoice_series;
                this.template_code = this.templatesTT78[0].template_code;
                this.template_id = this.templatesTT78[0].value;
                this.is_multi_vat = this.templatesTT78[0].is_multi_vat;
                if (this.templatesTT78[0].template_type == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe) {
                    this.isToKhaiThue = true;
                }
                else {
                    this.isToKhaiThue = false;
                }
            }
        }
        if (this.hoaDonImportChoXuat) {
            this.invoice_date = this.hoaDonImportChoXuat[0].invoice_date ? moment__WEBPACK_IMPORTED_MODULE_11__(this.hoaDonImportChoXuat[0].invoice_date).format('YYYY-MM-DD HH:mm:ss') : "";
            if (!this.isTT78)
                this.invoice_release_id = this.hoaDonImportChoXuat[0].invoice_release_id;
            else
                this.template_id = this.hoaDonImportChoXuat[0].template_id;
            this.htXuat = this.hoaDonImportChoXuat[0].status;
            if (this.htXuat == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.GhiTam)
                this.htXuat = 'XuatVaKy';
            if (!this.isTT78) {
                if (this.invoice_releases && this.invoice_releases.length > 0) {
                    var template = this.invoice_releases.filter(function (p) { return p.value == _this.invoice_release_id; });
                    if (template.length > 0) {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(template[0].template_type) == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].templatetype.HoaDonBatDongSan)
                            this.isBĐS = true;
                        else
                            this.isBĐS = false;
                        this.is_multi_vat = template[0].is_multi_vat;
                    }
                    if (this.hoaDonImportChoXuat[0].status == "GIU_SO") {
                        this.disabledInvoiceReleases = true;
                    }
                    this.layDuLieuTuHoaDonChoXuat();
                }
            }
            else {
                if (this.templatesTT78 && this.templatesTT78.length > 0) {
                    var template = this.templatesTT78.filter(function (p) { return p.value == _this.template_id; });
                    if (template.length > 0) {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(template[0].template_type) == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].templatetype.HoaDonBatDongSan)
                            this.isBĐS = true;
                        else
                            this.isBĐS = false;
                        this.is_multi_vat = template[0].is_multi_vat;
                    }
                    if (this.hoaDonImportChoXuat[0].status == "GIU_SO") {
                        this.disabledInvoiceReleases = true;
                    }
                    if (this.hoaDonImportChoXuat[0].status == "GHI_TAM") {
                        var isExistKyLoi = this.hoaDonImportChoXuat.some(function (item) { return parseInt(item.invoice_number) > 0; });
                        if (isExistKyLoi)
                            this.disabledInvoiceReleases = true;
                    }
                    this.layDuLieuTuHoaDonChoXuat();
                }
            }
        }
        else
            this.loadRow(10);
        if (!this.isTT78) {
            if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(this.invoice_release_id) != "" && this.invoice_releases && this.invoice_releases.length > 0) {
                var oFormRelease = this.invoice_releases.filter(function (p) { return p.value == _this.invoice_release_id; })[0];
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
        }
        else {
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
        }
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser && this.currentUser.account && (this.currentUser.account.tax_code == "0102519041-999" || this.currentUser.account.tax_code == "8888888803" || this.currentUser.account.tax_code == "9999999671"))
            this.isPassNQ43 = true;
        var listpermissions = this.currentUser.user.permissions.split(',');
        var _obj = listpermissions.filter(function (p) { return p == "phe_duyet"; });
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
                            var oDuplicate = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                            if (!oDuplicate)
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
            _this.invoice_release_id = invoice.invoice_release_id;
            _this.template_id = invoice.template_id;
            _this.template_code = invoice.template_code;
            _this.invoice_series = invoice.invoice_series;
            var number_of_vouchers = invoice.number_of_vouchers ? invoice.number_of_vouchers : _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].genNumberOfVoucher(_this.hoaDonImportChoXuat);
            if (invoice.invoice_products && invoice.invoice_products.length > 0) {
                for (var i = 0; i < invoice.invoice_products.length; i++) {
                    invoice.invoice_products = invoice.invoice_products.sort(function (itemA, itemB) {
                        return itemA.order - itemB.order;
                    });
                    var product = invoice.invoice_products[i];
                    _this.layDuLieuDong(product, invoice, i, number_of_vouchers);
                }
            }
            else {
                _this.layDuLieuDong({}, invoice, 0, number_of_vouchers);
            }
        });
        this.checkStatusData();
    };
    ImportInvoicesDtComponent.prototype.layDuLieuDong = function (product, invoice, i, number_of_vouchers) {
        var rowInvoice = new Object;
        if (i == 0) {
            this.invoicesId.push(invoice.id);
            rowInvoice["statusData"] = "INVALID";
            rowInvoice["id"] = invoice.id;
            rowInvoice["status"] = invoice.status;
            rowInvoice["number_of_vouchers"] = number_of_vouchers;
            rowInvoice["customer_code"] = invoice.customer_code;
            rowInvoice["currency_code"] = invoice.currency_code;
            rowInvoice["customer_object_code"] = invoice.customer_object_code == "CA_NHAN" ? true : false;
            rowInvoice["lot"] = invoice.lot;
            rowInvoice["expiration_date"] = invoice.expiration_date;
            rowInvoice["buyer_tax_code"] = invoice.buyer_tax_code;
            rowInvoice["customer_name"] = invoice.customer_name;
            rowInvoice["buyer_name"] = invoice.buyer_name;
            rowInvoice["student_name"] = invoice.student_name;
            rowInvoice["class_name"] = invoice.class_name;
            rowInvoice["buyer_address"] = invoice.buyer_address;
            rowInvoice["the_order"] = invoice.the_order;
            rowInvoice["consult_number"] = invoice.consult_number;
            rowInvoice["ship_receiving_address"] = invoice.ship_receiving_address;
            rowInvoice["ship_receiving_name"] = invoice.ship_receiving_name;
            rowInvoice["buyer_mobile"] = invoice.buyer_mobile;
            rowInvoice["currency_rate"] = invoice.currency_rate;
            ///// HĐ xe
            rowInvoice["contract_number"] = invoice.contract_number;
            rowInvoice["total_large_unit"] = invoice.total_large_unit;
            rowInvoice["total_small_unit"] = invoice.total_small_unit;
            rowInvoice["billing_source"] = invoice.billing_source;
            rowInvoice["vsb_number"] = invoice.vsb_number;
            rowInvoice["license_number"] = invoice.license_number;
            rowInvoice["sell_form"] = invoice.sell_form;
            rowInvoice["model"] = invoice.model;
            rowInvoice["color"] = invoice.color;
            rowInvoice["invoice_engine_number"] = invoice.invoice_engine_number;
            rowInvoice["invoice_chassis_number"] = invoice.invoice_chassis_number;
            rowInvoice["manufacture_year"] = invoice.manufacture_year;
            rowInvoice["place_of_delivery"] = invoice.place_of_delivery;
            rowInvoice["shiping_point"] = invoice.shiping_point;
            rowInvoice["payment_expire"] = invoice.payment_expire;
            rowInvoice["wip_number"] = invoice.wip_number;
            rowInvoice["in_out_date"] = invoice.in_out_date;
            rowInvoice["invoice_internal_number"] = invoice.invoice_internal_number;
            rowInvoice["license_plate"] = invoice.license_plate;
            rowInvoice["kilometer_number"] = invoice.kilometer_number;
            /////
            rowInvoice["buyer_email"] = invoice.buyer_email;
            rowInvoice["payment_method_name"] = invoice.payment_method_name;
            rowInvoice["payment_method_view_name"] = invoice.payment_method_view_name;
            rowInvoice["bank_account_number"] = invoice.bank_account_number;
            rowInvoice["bank_name"] = invoice.bank_name;
            rowInvoice["note"] = invoice.note;
            rowInvoice["transport_number"] = invoice.transport_number;
            rowInvoice["train_name"] = invoice.train_name;
            rowInvoice["invoice_number"] = invoice.invoice_number;
            rowInvoice["invoice_date"] = invoice.invoice_date;
            rowInvoice["nationality"] = invoice.nationality;
            rowInvoice["passport"] = invoice.passport;
            rowInvoice["passport_date"] = invoice.passport_date;
            rowInvoice["passport_expiration_date"] = invoice.passport_expiration_date;
            /* Hóa đơn Pepsi */
            rowInvoice["template_code"] = invoice.template_code;
            rowInvoice["invoice_series"] = invoice.invoice_series;
            rowInvoice["total_amount_vat"] = invoice.total_amount_vat;
            rowInvoice["total_payment"] = invoice.total_payment;
            rowInvoice["username"] = invoice.username;
            rowInvoice["total_large_unit"] = invoice.total_large_unit;
            rowInvoice["total_small_unit"] = invoice.total_small_unit;
            /* Các trường mở rộng */
            rowInvoice["invoice_options"] = invoice.invoice_options;
            if (rowInvoice["invoice_options"] && rowInvoice["invoice_options"].length > 0) {
                rowInvoice["invoice_options"].forEach(function (invOption) {
                    rowInvoice[invOption.code] = invOption.value;
                });
            }
            if (this.isBĐS || this.isPepsi)
                rowInvoice["invoice_amount"] = invoice.amount;
            rowInvoice["environmental_fee"] = invoice.environmental_fee;
        }
        else {
            rowInvoice["number_of_vouchers"] = "";
            rowInvoice["customer_code"] = "";
            rowInvoice["currency_code"] = "";
            rowInvoice["currency_rate"] = null;
            rowInvoice["customer_object_code"] = false;
            rowInvoice["lot"] = "";
            rowInvoice["expiration_date"] = "";
            rowInvoice["buyer_tax_code"] = "";
            rowInvoice["customer_name"] = "";
            rowInvoice["buyer_name"] = "";
            rowInvoice["class_name"] = "";
            rowInvoice["student_name"] = "";
            rowInvoice["buyer_address"] = "";
            rowInvoice["the_order"] = "";
            rowInvoice["consult_number"] = "";
            rowInvoice["ship_receiving_address"] = "";
            rowInvoice["ship_receiving_name"] = "";
            rowInvoice["buyer_mobile"] = "";
            /* Hóa đơn Pepsi */
            rowInvoice["total_large_unit"] = null;
            rowInvoice["total_small_unit"] = null;
            rowInvoice["total_amount_vat"] = null;
            rowInvoice["total_payment"] = null;
            rowInvoice["invoice_amount"] = null;
            rowInvoice["environmental_fee"] = null;
            rowInvoice["template_code"] = "";
            rowInvoice["invoice_series"] = "";
            rowInvoice["username"] = "";
            /* HĐ xe */
            rowInvoice["contract_number"] = "";
            rowInvoice["billing_source"] = "";
            rowInvoice["vsb_number"] = "";
            rowInvoice["license_number"] = "";
            rowInvoice["sell_form"] = "";
            rowInvoice["model"] = "";
            rowInvoice["color"] = "";
            rowInvoice["invoice_engine_number"] = "";
            rowInvoice["invoice_chassis_number"] = "";
            rowInvoice["manufacture_year"] = "";
            rowInvoice["place_of_delivery"] = "";
            rowInvoice["shiping_point"] = "";
            rowInvoice["payment_expire"] = "";
            rowInvoice["wip_number"] = "";
            rowInvoice["in_out_date"] = "";
            rowInvoice["invoice_internal_number"] = "";
            rowInvoice["license_plate"] = "";
            rowInvoice["kilometer_number"] = "";
            /////
            rowInvoice["buyer_email"] = "";
            rowInvoice["payment_method_name"] = "";
            rowInvoice["payment_method_view_name"] = "";
            /* Các trường mở rộng */
            rowInvoice["invoice_options"] = invoice.invoice_options;
            if (rowInvoice["invoice_options"] && rowInvoice["invoice_options"].length > 0) {
                rowInvoice["invoice_options"].forEach(function (invOption) {
                    rowInvoice[invOption.code] = "";
                });
            }
            rowInvoice["bank_account_number"] = "";
            rowInvoice["bank_name"] = "";
            rowInvoice["note"] = "";
            rowInvoice["dataType"] = "HANG_HOA";
            rowInvoice["productNumberOfVouchers"] = number_of_vouchers; //invoice.number_of_vouchers
        }
        rowInvoice["product_code"] = product.product_code;
        rowInvoice["product_name"] = product.product_name;
        rowInvoice["commercial_discount"] = product.commercial_discount ? product.commercial_discount : false;
        rowInvoice["is_promotion"] = product.is_promotion ? product.is_promotion : false; /* Diễn giải */
        rowInvoice["is_promotion_new"] = product.is_promotion_new ? product.is_promotion_new : false; /* Khuyến mại */
        rowInvoice["engine_number"] = product.engine_number;
        rowInvoice["price_after_discount"] = product.price_after_discount;
        rowInvoice["chassis_number"] = product.chassis_number;
        rowInvoice["color_material"] = product.color_material;
        rowInvoice["contract_order"] = product.contract_order;
        rowInvoice["management_code"] = product.management_code;
        rowInvoice["provisions_on_accounts"] = product.provisions_on_accounts;
        rowInvoice["unit_code"] = product.unit_code;
        rowInvoice["unit_name"] = product.unit_name;
        rowInvoice["quantity"] = product.quantity;
        rowInvoice["other_tax"] = product.other_tax;
        rowInvoice["other_charge"] = product.other_charge;
        rowInvoice["discount"] = product.discount;
        rowInvoice["amount_discount"] = product.amount_discount;
        rowInvoice["amount_without_discount"] = product.amount_without_discount;
        rowInvoice["price"] = product.price;
        rowInvoice["product_exchange_rate"] = product.product_exchange_rate;
        rowInvoice["product_date"] = product.product_date;
        rowInvoice["price_after_vat"] = product.price_after_vat;
        rowInvoice["amount"] = product.amount;
        rowInvoice["vat"] = product.vat;
        rowInvoice["amount_vat"] = product.amount_vat;
        rowInvoice["amount_after_vat"] = product.amount_after_vat;
        rowInvoice["order"] = product.order;
        rowInvoice["view_order"] = product.view_order;
        // máy bay
        rowInvoice["is_refund_ticket"] = product.is_refund_ticket ? product.is_refund_ticket : false;
        rowInvoice["is_money_service"] = product.is_money_service ? product.is_money_service : false;
        console.log('rowInvoice: ', rowInvoice);
        this.invoice_products.insert(rowInvoice);
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
        var arrColumn = this.listColumn.filter(function (p) { return p.is_visible == true; });
        var columnsName = arrColumn.map(function (e) { return e.column_code; });
        var data = {
            invoice: {
                invoice_type: _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].exportType.hoadon,
                columns: columnsName,
                template_id: this.template_id
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
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_9__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].sheet_to_json(ws, { header: "A", range: 0 }));
            var fileBangKe = document.getElementById("file-bang-ke");
            fileBangKe.value = "";
            if (_this.currentUser.account.tax_code != "0500233676") {
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
            }
            else {
                _this.dataExcelFile = data;
                _this.fillDataBravo(_this.dataExcelFile);
            }
            //  this.countAll = data.length;
            //  this.showPopupImport = true;
        };
        reader.readAsBinaryString(this.target.files[0]);
    };
    ImportInvoicesDtComponent.prototype.fillData = function (fileData) {
        var _this = this;
        this.getDataFromGird();
        var count = 2;
        var view_order = 0;
        var data = [];
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
                var invoiceDate = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.invoice_date);
                var passport_date = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.passport_date);
                _this.passport_date = new Date(_core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.passport_date));
                var passport_expiration_date = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.passport_expiration_date);
                _this.passport_expiration_date = new Date(_core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.passport_expiration_date));
                if (invoiceDate == "ERROR") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Ngày hóa đơn không đúng định dạng", "error");
                    isValid = false;
                    return;
                }
                else if (invoiceDate != "")
                    invoice["invoice_date"] = invoiceDate;
                invoice["customer_code"] = element.customer_code ? element.customer_code : "";
                invoice["currency_code"] = element.currency_code ? element.currency_code : "VND";
                invoice["currency_rate"] = element.currency_rate ? element.currency_rate : null;
                invoice["customer_object_code"] = element.customer_object_code && (element.customer_object_code == "X" || element.customer_object_code == "x") ? true : false;
                invoice["buyer_tax_code"] = element.buyer_tax_code ? element.buyer_tax_code : "";
                invoice["customer_name"] = element.customer_name ? element.customer_name : "";
                invoice["buyer_name"] = element.buyer_name ? element.buyer_name : "";
                invoice["student_name"] = element.student_name ? element.student_name : "";
                invoice["class_name"] = element.class_name ? element.class_name : "";
                invoice["buyer_address"] = element.buyer_address ? element.buyer_address : "";
                invoice["the_order"] = element.the_order ? element.the_order : "";
                invoice["consult_number"] = element.consult_number ? element.consult_number : "";
                invoice["ship_receiving_address"] = element.ship_receiving_address ? element.ship_receiving_address : "";
                invoice["ship_receiving_name"] = element.ship_receiving_name ? element.ship_receiving_name : "";
                invoice["buyer_mobile"] = element.buyer_mobile ? element.buyer_mobile : "";
                invoice["nationality"] = element.nationality ? element.nationality : "";
                invoice["passport"] = element.passport ? element.passport : "";
                invoice["passport_date"] = passport_date;
                invoice["passport_expiration_date"] = passport_expiration_date;
                ///// HĐ xe
                invoice["contract_number"] = element.contract_number ? element.contract_number : "";
                invoice["vsb_number"] = element.vsb_number ? element.vsb_number : "";
                invoice["license_number"] = element.license_number ? element.license_number : "";
                invoice["sell_form"] = element.sell_form ? element.sell_form : "";
                invoice["model"] = element.model ? element.model : "";
                invoice["color"] = element.color ? element.color : "";
                invoice["invoice_engine_number"] = element.invoice_engine_number ? element.invoice_engine_number : "";
                invoice["invoice_chassis_number"] = element.invoice_chassis_number ? element.invoice_chassis_number : "";
                invoice["manufacture_year"] = element.manufacture_year ? element.manufacture_year : "";
                invoice["place_of_delivery"] = element.place_of_delivery ? element.place_of_delivery : "";
                invoice["shiping_point"] = element.shiping_point ? element.shiping_point : "";
                invoice["payment_expire"] = element.payment_expire ? element.payment_expire : "";
                invoice["wip_number"] = element.wip_number ? element.wip_number : "";
                invoice["in_out_date"] = element.in_out_date ? element.in_out_date : "";
                invoice["invoice_internal_number"] = element.invoice_internal_number ? element.invoice_internal_number : "";
                invoice["license_plate"] = element.license_plate ? element.license_plate : "";
                invoice["kilometer_number"] = element.kilometer_number ? element.kilometer_number : "";
                /////máy bay
                invoice["is_money_service"] = element.is_money_service && (element.is_money_service == "X" || element.is_money_service == "x") ? true : false;
                invoice["is_refund_ticket"] = element.is_refund_ticket && (element.is_refund_ticket == "X" || element.is_refund_ticket == "x") ? true : false;
                /////
                invoice["buyer_email"] = element.buyer_email ? element.buyer_email : "";
                // Đơn vị Pepsi mặc định là  chuyển khoản
                if (_this.isPepsi) {
                    invoice["payment_method_name"] = element.payment_method_name ? _this.getPaymentMethodCodeByName(element.payment_method_name) : "CK";
                    invoice["payment_method_view_name"] = element.payment_method_name ? element.payment_method_name : "Chuyển khoản";
                }
                else {
                    invoice["payment_method_name"] = element.payment_method_name ? _this.getPaymentMethodCodeByName(element.payment_method_name) : "";
                    invoice["payment_method_view_name"] = element.payment_method_name ? element.payment_method_name : "";
                }
                invoice["bank_account_number"] = element.bank_account_number ? element.bank_account_number : "";
                invoice["bank_name"] = element.bank_name ? element.bank_name : "";
                invoice["note"] = element.note ? element.note : "";
                invoice["product_code"] = element.product_code ? element.product_code : "";
                invoice["product_name"] = element.product_name ? element.product_name : "";
                invoice["engine_number"] = element.engine_number ? element.engine_number : "";
                invoice["price_after_discount"] = element.price_after_discount ? element.price_after_discount : "";
                invoice["chassis_number"] = element.chassis_number ? element.chassis_number : "";
                invoice["color_material"] = element.color_material ? element.color_material : "";
                invoice["contract_order"] = element.contract_order ? element.contract_order : "";
                invoice["management_code"] = element.management_code ? element.management_code : "";
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
                invoice["lot"] = element.lot ? element.lot : "";
                invoice["expiration_date"] = element.expiration_date ? element.expiration_date : "";
                invoice["product_date"] = element.product_date ? element.product_date : "";
                invoice["transport_number"] = element.transport_number ? element.transport_number : "";
                invoice["train_name"] = element.train_name ? element.train_name : "";
                invoice["is_promotion"] = element.is_promotion && (element.is_promotion == "X" || element.is_promotion == "x") ? true : false; /* Diễn giải */
                invoice["is_promotion_new"] = element.is_promotion_new && (element.is_promotion_new == "X" || element.is_promotion_new == "x") ? true : false; /* Khuyến mại */
                invoice["commercial_discount"] = element.commercial_discount && (element.commercial_discount == "X" || element.commercial_discount == "x") ? true : false;
                invoice["provisions_on_accounts"] = element.provisions_on_accounts ? _this.checkProvisionsOnAccounts(element.provisions_on_accounts) : "";
                invoice["provisions_on_accounts_name"] = element.provisions_on_accounts ? element.provisions_on_accounts : "";
                invoice["unit_code"] = element.unit_name ? _this.getUnitCodeByUnitName(element.unit_name) : "";
                invoice["unit_name"] = element.unit_name ? element.unit_name : "";
                invoice["quantity"] = element.quantity ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.quantity) : null;
                invoice["other_tax"] = element.other_tax ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.other_tax) : null;
                invoice["other_charge"] = element.other_charge ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.other_charge) : null;
                invoice["price"] = element.price ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.price) : null;
                invoice["product_exchange_rate"] = element.product_exchange_rate ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.product_exchange_rate) : null;
                invoice["price_after_vat"] = element.price_after_vat ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.price_after_vat) : null;
                // if (this.configs.system_parameter.price_after_vat) {
                //   if (this.isHdGTGT)
                //     invoice["vat"] = element.vat ? this.checkVat(element.vat) : "";
                //   if ((invoice["vat"] == 5 || invoice["vat"] == 10) && invoice["price_after_vat"])
                //     invoice["price"] = (invoice["price_after_vat"] / (1 + invoice["vat"] / 100));
                //   else
                //     invoice["price"] = invoice["price_after_vat"];
                // }
                /* Các trường mở rộng */
                var optionClone = lodash__WEBPACK_IMPORTED_MODULE_17__["cloneDeep"](_this.invoiceOptions);
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
                            else if (invOption.data_type === 'soluong') {
                                invOption.value = element[key] ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element[key]) : null;
                            }
                            else
                                invOption.value = element[key];
                        }
                    }
                });
                invoice["invoice_options"] = optionClone;
                /* Các trường mở rộng */
                if (invoice["invoice_options"] && invoice["invoice_options"].length > 0) {
                    invoice["invoice_options"].forEach(function (invOption) {
                        invoice[invOption.code] = invOption.value;
                    });
                }
                invoice["discount"] = element.discount ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.discount) : null;
                invoice["amount_discount"] = element.amount_discount ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_discount) : null;
                invoice["amount_without_discount"] = element.amount_without_discount ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_without_discount) : null;
                invoice["amount"] = element.amount && element.amount.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount) : null;
                if (_this.isHdGTGT) {
                    invoice["vat"] = element.vat ? _this.checkVat(element.vat) : "";
                    invoice["vat_name"] = element.vat_name ? element.vat_name : "";
                    invoice["amount_vat"] = element.amount_vat && element.amount_vat.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_vat) : null;
                }
                invoice["amount_after_vat"] = element.amount_after_vat && element.amount_after_vat.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_after_vat) : null;
                invoice["note"] = element.note ? element.note : "";
                if (_index == 0 && !_this.isPepsi) {
                    if (element.quantity) {
                        var arr = element.quantity.split('.');
                        if (arr.length == 2) {
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.discount) {
                        var arr = element.discount.split('.');
                        if (arr.length == 2) {
                            _this.formatter.ty_le_chiet_khau = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.ty_le_chiet_khau = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.price) {
                        var arr = element.price.split('.');
                        if (arr.length == 2) {
                            _this.formatter.don_gia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.don_gia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.product_exchange_rate || element.currency_rate) {
                        var arr = [];
                        if (element.product_exchange_rate)
                            arr = element.product_exchange_rate.split('.');
                        else
                            arr = element.currency_rate.split('.');
                        if (arr.length == 2) {
                            _this.formatter.ty_gia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.ty_gia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.price_after_vat) {
                        var arr = element.price_after_vat.split('.');
                        if (arr.length == 2) {
                            _this.formatter.don_gia_sau_thue = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.don_gia_sau_thue = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.amount_discount) {
                        var arr = element.amount_discount.split('.');
                        if (arr.length == 2) {
                            _this.formatter.tien_chiet_khau = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.tien_chiet_khau = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.amount_without_discount) {
                        var arr = element.amount_without_discount.split('.');
                        if (arr.length == 2) {
                            _this.formatter.thanh_tien_chua_ck = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.thanh_tien_chua_ck = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.amount) {
                        var arr = element.amount.split('.');
                        if (arr.length == 2) {
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.amount_vat) {
                        var arr = element.amount_vat.split('.');
                        if (arr.length == 2) {
                            _this.formatter.tien_thue = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.tien_thue = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
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
                        var hanghoa = dataSource.filter(function (p) { return (p.number_of_vouchers == element.number_of_vouchers || p.productNumberOfVouchers == element.number_of_vouchers) && !p.is_promotion && !p.is_promotion_new; })[0];
                        if (hanghoa)
                            stt_1 = Math.max.apply(Math, dataSource.filter(function (p) { return (p.number_of_vouchers == element.number_of_vouchers || p.productNumberOfVouchers == element.number_of_vouchers) && !p.is_promotion && !p.is_promotion_new; }).map(function (o) { return o.order; }));
                        ++stt_1;
                    });
                    invoice["dataType"] = "HANG_HOA";
                    invoice["number_of_vouchers"] = "";
                    invoice["invoice_date"] = "";
                    invoice["customer_code"] = "";
                    invoice["currency_code"] = "";
                    invoice["currency_rate"] = null;
                    invoice["customer_object_code"] = false;
                    invoice["buyer_tax_code"] = "";
                    invoice["customer_name"] = "";
                    invoice["buyer_name"] = "";
                    invoice["student_name"] = "";
                    invoice["class_name"] = "";
                    invoice["buyer_address"] = "";
                    invoice["the_order"] = "";
                    invoice["consult_number"] = "";
                    invoice["ship_receiving_address"] = "";
                    invoice["ship_receiving_name"] = "";
                    invoice["buyer_mobile"] = "";
                    ///// HĐ xe
                    invoice["contract_number"] = "";
                    invoice["vsb_number"] = "";
                    invoice["license_number"] = "";
                    invoice["sell_form"] = "";
                    invoice["model"] = "";
                    invoice["color"] = "";
                    invoice["invoice_engine_number"] = "";
                    invoice["invoice_chassis_number"] = "";
                    invoice["manufacture_year"] = "";
                    invoice["place_of_delivery"] = "";
                    invoice["shiping_point"] = "";
                    invoice["payment_expire"] = "";
                    invoice["wip_number"] = "";
                    invoice["in_out_date"] = "";
                    invoice["invoice_internal_number"] = "";
                    invoice["license_plate"] = "";
                    invoice["kilometer_number"] = "";
                    /////
                    invoice["buyer_email"] = "";
                    invoice["payment_method_name"] = "";
                    invoice["payment_method_view_name"] = "";
                    invoice["bank_account_number"] = "";
                    invoice["bank_name"] = "";
                    invoice["note"] = "";
                    invoice["productNumberOfVouchers"] = element.number_of_vouchers;
                    invoice["order"] = stt_1;
                    /* Hóa đơn Pepsi */
                    invoice["total_large_unit"] = null;
                    invoice["total_small_unit"] = null;
                    invoice["total_amount_vat"] = null;
                    invoice["total_payment"] = null;
                    invoice["invoice_amount"] = null;
                    invoice["environmental_fee"] = null;
                    invoice["template_code"] = "";
                    invoice["invoice_series"] = "";
                    invoice["username"] = "";
                    invoice["billing_source"] = "";
                    /* Các trường mở rộng */
                    if (invoice["invoice_options"] && invoice["invoice_options"].length > 0) {
                        invoice["invoice_options"].forEach(function (invOption) {
                            invoice[invOption.code] = "";
                        });
                    }
                    if (_this.isPepsi)
                        invoice["view_order"] = element.view_order ? element.view_order : "";
                    else {
                        if (invoice["is_promotion"] || invoice["is_promotion_new"] || _this.isBĐS) {
                            invoice["view_order"] = "";
                        }
                        else
                            invoice["view_order"] = stt_1;
                    }
                }
                else {
                    invoice["number_of_vouchers_backup"] = element.number_of_vouchers ? element.number_of_vouchers : "";
                    invoice["number_of_vouchers"] = element.number_of_vouchers ? element.number_of_vouchers : "";
                    numberOfVouchers.push(invoice["number_of_vouchers"]);
                    invoice["order"] = 1;
                    if (_this.isPepsi)
                        invoice["view_order"] = element.view_order ? element.view_order : "";
                    else
                        invoice["view_order"] = 1;
                    invoice["environmental_fee"] = element.environmental_fee && element.environmental_fee.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.environmental_fee) : null;
                    if (_this.isBĐS)
                        invoice["invoice_amount"] = element.invoice_amount && element.invoice_amount.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.invoice_amount) : null;
                    if (_this.isPepsi) {
                        invoice["total_large_unit"] = element.total_large_unit && element.total_large_unit.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.total_large_unit) : null;
                        invoice["total_small_unit"] = element.total_small_unit && element.total_small_unit.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.total_small_unit) : null;
                        invoice["template_code"] = element.template_code ? element.template_code : "";
                        invoice["invoice_series"] = element.invoice_series ? element.invoice_series : "";
                        invoice["invoice_amount"] = element.invoice_amount && element.invoice_amount.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.invoice_amount) : null;
                        invoice["total_amount_vat"] = element.total_amount_vat && element.total_amount_vat.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.total_amount_vat) : null;
                        invoice["total_payment"] = element.total_payment && element.total_payment.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.total_payment) : null;
                        invoice["username"] = element.username ? element.username : "";
                        invoice["billing_source"] = element.billing_source ? element.billing_source : "";
                    }
                    else if (invoice["is_promotion"] || invoice["is_promotion_new"] || _this.isBĐS)
                        invoice["view_order"] = "";
                }
                _this.invoice_products.insert(invoice);
            }
        });
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
    ImportInvoicesDtComponent.prototype.fillDataBravo = function (fileData) {
        var _this = this;
        this.getDataFromGird();
        var data = [];
        var count = 2;
        var view_order = 0;
        var numberOfVouchers = [];
        var isValid = true;
        var _index = 0;
        fileData.forEach(function (element) {
            var invoice = new Object;
            if (element.A) {
                invoice["statusData"] = "INVALID";
                var _arrDate = element.B.split('/');
                if (_arrDate.length == 3) {
                    if (_arrDate[1] <= 12) {
                        invoice["invoice_date"] = _arrDate[2] + "-" + _arrDate[1] + "-" + _arrDate[0] + " " + moment__WEBPACK_IMPORTED_MODULE_11__().format('HH:mm:ss');
                    }
                    else {
                        isValid = false;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Ngày hóa đơn không đúng định dạng", "error");
                        return;
                    }
                }
                else {
                    //invoice["invoice_date"] = "";
                }
                invoice["customer_code"] = element.C ? element.C : "";
                invoice["customer_object_code"] = element.D && (element.D == "X" || element.D == "x") ? true : false;
                invoice["buyer_tax_code"] = element.E ? element.E : "";
                invoice["customer_name"] = element.F ? element.F : "";
                invoice["buyer_name"] = element.G ? element.G : "";
                invoice["student_name"] = element.G ? element.G : "";
                invoice["class_name"] = element.G ? element.G : "";
                invoice["buyer_address"] = element.H ? element.H : "";
                invoice["buyer_mobile"] = element.I ? element.I : "";
                invoice["buyer_email"] = element.J ? element.J : "";
                invoice["payment_method_name"] = element.K ? _this.getPaymentMethodCodeByName(element.K) : "";
                invoice["payment_method_view_name"] = element.K ? element.K : "";
                invoice["bank_account_number"] = element.L ? element.L : "";
                invoice["bank_name"] = element.M ? element.M : "";
                invoice["product_code"] = element.N ? element.N : "";
                invoice["product_name"] = element.O ? element.O : "";
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
                invoice["is_promotion"] = element.P && (element.P == "X" || element.P == "x") ? true : false;
                invoice["is_promotion_new"] = element.P && (element.P == "X" || element.P == "x") ? true : false;
                invoice["commercial_discount"] = element.Q && (element.Q == "X" || element.Q == "x") ? true : false;
                invoice["provisions_on_accounts"] = element.R ? _this.checkProvisionsOnAccounts(element.R) : "";
                invoice["provisions_on_accounts_name"] = element.R ? element.R : "";
                invoice["unit_code"] = element.S ? _this.getUnitCodeByUnitName(element.S) : "";
                invoice["unit_name"] = element.S ? element.S : "";
                invoice["quantity"] = element.T ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.T) : null;
                invoice["price"] = element.U ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.U) : null;
                invoice["amount"] = element.V && element.V.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.V) : null;
                if (_this.isHdGTGT) {
                    invoice["vat"] = element.W ? _this.checkVat(element.W) : "";
                    invoice["vat_name"] = element.W ? element.W : "";
                    invoice["amount_vat"] = element.X && element.X.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.X) : null;
                }
                invoice["amount_after_vat"] = element.Y && element.Y.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.Y) : null;
                invoice["note"] = element.Z ? element.Z : "";
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
                    if (element.amount) {
                        var arr = element.amount.split('.');
                        if (arr.length == 2) {
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.thanh_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    if (element.amount_vat) {
                        var arr = element.amount_vat.split('.');
                        if (arr.length == 2) {
                            _this.formatter.tien_thue = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.tien_thue = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
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
                if (_this.checkNumberOfVouchers(element.A) != -1) {
                    invoice["dataType"] = "HANG_HOA";
                    invoice["number_of_vouchers"] = "";
                    invoice["invoice_date"] = "";
                    invoice["customer_code"] = "";
                    invoice["customer_object_code"] = false;
                    invoice["buyer_tax_code"] = "";
                    invoice["customer_name"] = "";
                    invoice["buyer_name"] = "";
                    invoice["class_name"] = "";
                    invoice["student_name"] = "";
                    invoice["buyer_address"] = "";
                    invoice["buyer_mobile"] = "";
                    invoice["buyer_email"] = "";
                    invoice["payment_method_name"] = "";
                    invoice["payment_method_view_name"] = "";
                    invoice["bank_account_number"] = "";
                    invoice["bank_name"] = "";
                    invoice["note"] = "";
                    invoice["productNumberOfVouchers"] = element.A;
                    invoice["order"] = count;
                    if (invoice["is_promotion"] || invoice["is_promotion_new"]) {
                        invoice["view_order"] = "";
                    }
                    else
                        invoice["view_order"] = (++view_order);
                    count++;
                }
                else {
                    invoice["number_of_vouchers_backup"] = element.A ? element.A : "";
                    invoice["number_of_vouchers"] = element.A ? element.A : "";
                    numberOfVouchers.push(invoice["number_of_vouchers"]);
                    invoice["order"] = 1;
                    invoice["view_order"] = 1;
                    count = 2;
                    view_order = 1;
                }
                data.push(invoice);
            }
        });
        if (isValid) {
            this.invoicesHaveNumberOfVouchers = [];
            this.checkDuplicateNumberOfVouchers(data);
            this.checkStatusData();
            // if(data.length < 10){
            //   this.loadRow(10-data.length);
            // }
            this.dataGrid.instance.refresh();
        }
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
    };
    ImportInvoicesDtComponent.prototype.checkVat = function (vat) {
        if (vat == "Không chịu thuế" || vat == "không chịu thuế") {
            return -1;
        }
        else if (vat == "Không kê khai, tính nộp thuế GTGT" || vat == "không kê khai, tính nộp thuế GTGT")
            return -2;
        else if (vat == "Trường hợp khác" || vat == "trường hợp khác")
            return -3;
        else if (vat == "10% x 70%")
            return 7;
        else if (vat == "5% x 70%")
            return 3.5;
        else {
            return parseInt(vat);
        }
    };
    ImportInvoicesDtComponent.prototype.checkDuplicateNumberOfVouchers = function (data) {
        if (this.isThemTiep) {
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
            this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_13___default.a({
                key: 'keyData',
                data: data
            });
            this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_14___default.a({
                store: this.invoice_products
            });
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
            this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_13___default.a({
                key: 'keyData',
                data: data
            });
            this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_14___default.a({
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
                                    _this.invoice_products.clear();
                                    dataSource.forEach(function (row) {
                                        _this.invoice_products.insert(row);
                                    });
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
    ImportInvoicesDtComponent.prototype.onInvoiceReleases = function (e) {
        var _this = this;
        var selectedItem = e.component.option("selectedItem");
        this.template_id = selectedItem.template_id;
        this.invoice_release_id = e.value;
        this.is_multi_vat = selectedItem.is_multi_vat;
        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(selectedItem.template_type) == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].templatetype.HoaDonBatDongSan)
            this.isBĐS = true;
        else
            this.isBĐS = false;
        //Load lại danh sách cấu hình các trường
        if (this.configs.config_column_import_inv_excel && this.configs.config_column_import_inv_excel.length > 0) {
            this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnImportExcel(this._translate);
            this.listColumn.forEach(function (item) {
                var _obj = _this.configs.config_column_import_inv_excel.filter(function (p) { return p.column_code == item.column_code; })[0];
                if (_obj) {
                    item.is_visible = _obj.is_visible;
                }
            });
        }
        else {
            this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnImportExcel(this._translate);
        }
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
                        var column = {
                            caption: item.name,
                            dataField: item.code,
                            width: 150
                        };
                        _this.columns.push(column);
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
    ImportInvoicesDtComponent.prototype.onInvoiceTemplate = function (e) {
        var _this = this;
        var selectedItem = e.component.option("selectedItem");
        this.template_id = e.value;
        this.template_code = selectedItem.template_code;
        this.invoice_series = selectedItem.invoice_series;
        this.is_multi_vat = selectedItem.is_multi_vat;
        if (selectedItem.template_type == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe) {
            this.isToKhaiThue = true;
        }
        else {
            this.isToKhaiThue = false;
        }
        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(selectedItem.template_type) == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].templatetype.HoaDonBatDongSan)
            this.isBĐS = true;
        else
            this.isBĐS = false;
        //Load lại danh sách cấu hình các trường
        if (this.configs.config_column_import_inv_excel && this.configs.config_column_import_inv_excel.length > 0) {
            this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnImportExcel(this._translate);
            this.listColumn.forEach(function (item) {
                var _obj = _this.configs.config_column_import_inv_excel.filter(function (p) { return p.column_code == item.column_code; })[0];
                if (_obj) {
                    item.is_visible = _obj.is_visible;
                }
            });
        }
        else {
            this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnImportExcel(this._translate);
        }
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
                    case "passport_expiration_date":
                        if (this.isToKhaiThue) {
                            var passport_date = new Date(e.data.passport_date);
                            if (!e.value) {
                                this.setStatusDataOnCellPrepared(e, "Ngày hết hạn hộ chiếu không được để trống");
                            }
                            if (e.value && passport_date >= e.value) {
                                this.setStatusDataOnCellPrepared(e, "Ngày cấp hộ chiếu không được lớn hơn ngày hết hạn hộ chiếu");
                            }
                        }
                        break;
                    case "passport_date":
                        if (this.isToKhaiThue) {
                            var passport_expiration_date = new Date(e.data.passport_expiration_date);
                            if (!e.value) {
                                this.setStatusDataOnCellPrepared(e, "Ngày cấp hộ chiếu không được để trống");
                            }
                            if (e.value && e.value >= passport_expiration_date) {
                                this.setStatusDataOnCellPrepared(e, "Ngày cấp hộ chiếu không được lớn hơn ngày hết hạn hộ chiếu");
                            }
                        }
                        break;
                    case "passport":
                        if (this.isToKhaiThue) {
                            if (!e.value) {
                                this.setStatusDataOnCellPrepared(e, "Hộ chiếu không được để trống");
                            }
                        }
                        break;
                    case "nationality":
                        if (this.isToKhaiThue) {
                            if (!e.value) {
                                this.setStatusDataOnCellPrepared(e, "Quốc tịch không được để trống");
                            }
                        }
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
        if (((e.column.dataField == "amount" || e.column.dataField == "amount_after_vat") && e.value == null && !e.data.is_promotion) || ((e.column.dataField != "amount" && e.column.dataField != "amount_after_vat" && e.column.dataField != "product_code") && (e.value == null || e.value == "")) || (e.column.dataField == "product_code" && _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(e.value) != "" && !this.productCodePattern.test(e.value)) || (this.isToKhaiThue && (e.column.dataField == "passport_date" || e.column.dataField == "passport_expiration_date"))) {
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
            else if (e.key.statusData != "ERROR_DUPLICATE_DATABASE") {
                var passport_expiration_date = new Date(e.data.passport_expiration_date);
                var passport_date = new Date(e.data.passport_date);
                if (this.isToKhaiThue && (e.data.passport_expiration_date == "" || e.data.passport_date == "" || e.data.nationality == "" || e.data.passport == "" || passport_date >= passport_expiration_date)) {
                    e.data.statusData == "DATA_ERROR";
                }
                else {
                    e.data.statusData = "INVALID";
                }
            }
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
    // productCodeChange(e, value) {
    //   this.select.products.some(item => {
    //     if (item.code == value) {
    //       e.row.key.product_name = item.name;
    //       e.row.key.unit_code = this.checkUnitCode(item.unit_code);
    //       e.row.key.quantity = null;
    //       e.row.key.engine_number = null;
    //       e.row.key.price_after_discount = null;
    //       e.row.key.chassis_number = null;
    //       e.row.key.contract_order = null;
    //       e.row.key.product_exchange_rate = null;
    //       e.row.key.price = item.price ? parseFloat(item.price) : item.price;
    //       e.row.key.amount = item.price ? parseFloat(item.price) : 0;
    //       e.row.key.discount = item.discount ? parseFloat(item.discount) : null;
    //       e.row.key.amount_discount = (e.row.key.discount > 0) ? this.caculatorAmountDiscount(e.row.key.price, e.row.key.discount) : null;
    //       if (e.row.key.amount_discount > 0)
    //         e.row.key.amount -= e.row.key.amount_discount;
    //       if (this.isHdGTGT) {
    //         e.row.key.vat = item.vat ? parseFloat(item.vat) : null;
    //         e.row.key.amount_vat = (e.row.row.key.vat >= 0) ? this.caculatorAmountVat(e.row.key.amount, e.row.key.vat) : null;
    //       }
    //       e.row.key.amount_after_vat = e.row.key.amount + (this.isHdGTGT ? e.row.key.amount_vat : 0);
    //     }
    //   });
    // }
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
        if (!this.invoice.id) {
            status = 'THEM_MOI';
        }
        else {
            if (!this.invoice.bill_number)
                status = 'GHI_TAM';
            else {
                if (this.invoice.status == "GIU_SO")
                    status = 'GIU_SO';
                else if (this.invoice.status == "GHI_TAM")
                    status = 'GHI_TAM';
            }
        }
        // if (!this.invoice.id && !this.invoice.invoice_number) status = 'THEM_MOI';
        // if (this.invoice.id && !this.invoice.invoice_number) status = 'GHI_TAM';
        // if (this.invoice.id && this.invoice.invoice_number) status = 'GIU_SO';
        var xmlInvoice = "";
        var isNewXml = 0;
        if (status == 'THEM_MOI') {
            if (!this.isTT78) {
                var sub_1 = this.vatService.ghiTam(this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.invoice_number = rs.data.invoice_number;
                        _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
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
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, _this.invoice.invoice_date);
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
            else {
                var sub_2 = this.vatService.ghiTamTT78(this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.invoice_number = rs.data.invoice_number;
                        _this.invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
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
                                var ListSerialNumber = "DSCKS";
                                if (_this.infoDangKy && _this.infoDangKy.registration_signature) {
                                    var signatures = _this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                                    if (signatures && signatures.length > 0)
                                        ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                                }
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, invoice_sign_date, 'InvoiceData', ListSerialNumber, true);
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
        }
        else if (status == 'GHI_TAM') {
            if (!this.isTT78) {
                var sub_3 = this.vatService.edit(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
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
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, _this.frmData.invoice_date);
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
            else {
                var sub_4 = this.vatService.editTT78(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.invoice.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
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
                                var ListSerialNumber = "DSCKS";
                                if (_this.infoDangKy && _this.infoDangKy.registration_signature) {
                                    var signatures = _this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                                    if (signatures && signatures.length > 0)
                                        ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                                }
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, invoice_sign_date, 'InvoiceData', ListSerialNumber, true);
                            }
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    sub_4.unsubscribe();
                });
            }
        }
        else if (status == 'GIU_SO') {
            if (!this.isTT78) {
                var sub_5 = this.vatService.edit(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
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
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    sub_5.unsubscribe();
                });
            }
            else {
                var sub_6 = this.vatService.editTT78(this.invoice.id, this.invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
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
                                var ListSerialNumber = "DSCKS";
                                if (_this.infoDangKy && _this.infoDangKy.registration_signature) {
                                    var signatures = _this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                                    if (signatures && signatures.length > 0)
                                        ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                                }
                                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', _this.nodeSign, invoice_sign_date, 'InvoiceData', ListSerialNumber, true);
                            }
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    sub_6.unsubscribe();
                });
            }
        }
    };
    ImportInvoicesDtComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
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
                    _this.valueProgress = 100;
                    _this.bsModalImportRef.content.successSaveItem = "success";
                    if (_this.isPepsi) {
                        _this.isVisibleBtnSubmit = false;
                        _this.showPopupImport = false;
                        var initialState = {
                            status: _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].notify.XuatHoaDon
                        };
                        _this.bsModalSignRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_6__["NotifySuccessComponent"], {
                            backdrop: 'static',
                            keyboard: false,
                            class: 'notify-modal',
                            initialState: initialState
                        });
                        var subModal_1 = _this.modalService.onHide.subscribe(function () {
                            subModal_1.unsubscribe();
                        });
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                        _this.isVisibleBtnSubmit = false;
                        _this.showPopupImport = false;
                        _this.bsModalImportRef.hide();
                        _this.funcNavigate();
                    }
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
            if (this.invoice && this.invoice.invoice_files.length) {
                this.invoice.invoice_files.forEach(function (item) {
                    _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, item.file_content, item.file_name, item.file_name.split('.').pop(), true, _this.invoice_date);
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
                    var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
                }
                else
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
            }
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
                        _this.bsModalImportRef.content.successSaveItem = "success";
                        _this.funcNavigate();
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
                        _this.bsModalImportRef.content.successSaveItem = "success";
                        _this.funcNavigate();
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
            if (!this.isTT78) {
                this.subLuuChoXuat = this.vatService.edit(this.invoice.id, this.invoice).subscribe(function (rs) {
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
                            _this.bsModalImportRef.content.successSaveItem = "success";
                            _this.bsModalImportRef.hide();
                            _this.funcNavigate();
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
                this.subLuuChoXuat = this.vatService.editTT78(this.invoice.id, this.invoice).subscribe(function (rs) {
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
                            _this.bsModalImportRef.content.successSaveItem = "success";
                            _this.bsModalImportRef.hide();
                            _this.funcNavigate();
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                });
            }
        }
        else {
            if (!this.isTT78) {
                this.subLuuChoXuat = this.vatService.ghiTam(this.invoice).subscribe(function (rs) {
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
                            _this.bsModalImportRef.content.successSaveItem = "success";
                            _this.funcNavigate();
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
                this.subLuuChoXuat = this.vatService.ghiTamTT78(this.invoice).subscribe(function (rs) {
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
                            _this.bsModalImportRef.content.successSaveItem = "success";
                            _this.funcNavigate();
                        }
                    }
                    else {
                        _this.showPopupImport = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                });
            }
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
    ImportInvoicesDtComponent.prototype.convertGirdToInvoices = function (type, typeSubmit) {
        var _this = this;
        var invoices = [];
        var invalid = true;
        var decimal_amount_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien);
        var decimal_amount = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.thanh_tien);
        var decimal_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tien_thue);
        var decimal_quantity = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.so_luong);
        var decimal_tygia = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.ty_gia);
        var decimal_amount_discount = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tien_chiet_khau);
        this.invoice_products.load().then(function (dataSource) {
            dataSource.forEach(function (element, index) {
                if (element.number_of_vouchers == "" && element.dataType == "KHACH_HANG" && element.product_name && type == "submit") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Số phiếu, chứng từ không được để trống", "error");
                    invalid = false;
                    return;
                }
                if (element.number_of_vouchers) {
                    if (type == "submit") {
                        if ((element.customer_name == null || element.customer_name == "") && element.customer_object_code == false) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tên đơn vị, tổ chức không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                        if ((element.buyer_name == null || element.buyer_name == "") && element.customer_object_code == true) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tên khách hàng không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                        if ((element.buyer_address == null || element.buyer_address == "") && element.customer_object_code == false) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Địa chỉ không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                        if (element.payment_method_name == "" || element.payment_method_name == null) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Hình thức thanh toán không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                        if (element.product_name == null || element.product_name == "") {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tên hàng hóa không được để trống", "error");
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
                        if (_this.infoColumn('template_code').is_visible && element.template_code == "") {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Mẫu số hóa đơn không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                        if (_this.infoColumn('invoice_series').is_visible && element.invoice_series == "") {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Ký hiệu hóa đơn không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                        if (element.is_money_service == true && element.is_refund_ticket == true) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Không được chọn hàng hóa đồng thời là Phí dịch vụ và Phí hoàn vé", "error");
                            invalid = false;
                            return false;
                        }
                        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(element.product_code) != "" && !_this.productCodePattern.test(element.product_code)) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.VALIDATION.required_productCode, "error");
                            invalid = false;
                            return false;
                        }
                        if (typeSubmit == 'XUAT') {
                            if (_this.isToKhaiThue) {
                                var passport_date = new Date(element.passport_date);
                                var passport_expiration_date = new Date(element.passport_expiration_date);
                                if (element.nationality == "") {
                                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Quốc tịch không được để trống", "error");
                                    invalid = false;
                                    return false;
                                }
                                if (element.passport == "") {
                                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Hộ chiếu không được để trống", "error");
                                    invalid = false;
                                    return false;
                                }
                                if (element.passport_date === null) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Ngày hộ chiếu không được để trống", "error");
                                    invalid = false;
                                    return false;
                                }
                                if (element.passport_expiration_date === null) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Ngày hết hạn hộ chiếu không được để trống", "error");
                                    invalid = false;
                                    return false;
                                }
                                if (passport_date >= passport_expiration_date) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Ngày hết hạn hộ chiếu không được nhỏ hơn ngày cấp hộ chiếu", "error");
                                    invalid = false;
                                    return false;
                                }
                            }
                        }
                    }
                    var invoice_1 = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceModel"](1);
                    if (element.id) {
                        invoice_1.id = element.id;
                        invoice_1.status = element.status;
                    }
                    /* Các trường mở rộng */
                    if (_this.invoiceOptions && _this.invoiceOptions.length > 0) {
                        var optionClone = lodash__WEBPACK_IMPORTED_MODULE_17__["cloneDeep"](_this.invoiceOptions);
                        optionClone.forEach(function (invOption) {
                            for (var key in element) {
                                if (invOption.code === key) {
                                    if (invOption.data_type == 'ngay' && element[key])
                                        invOption.value = moment__WEBPACK_IMPORTED_MODULE_11__(element[key]).format('YYYY-MM-DD HH:mm:ss');
                                    else
                                        invOption.value = element[key];
                                }
                            }
                        });
                        invoice_1.invoice_options = [];
                        optionClone.forEach(function (val) { return invoice_1.invoice_options.push(Object.assign({}, val)); });
                    }
                    invoice_1.invoice_number = element.invoice_number;
                    invoice_1.invoice_release_id = _this.invoice_release_id;
                    invoice_1.template_id = _this.template_id;
                    invoice_1["number_of_vouchers"] = element.number_of_vouchers; // số phiếu chứng từ
                    invoice_1.invoice_date = element.invoice_date ? moment__WEBPACK_IMPORTED_MODULE_11__(element.invoice_date).format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_11__().format('YYYY-MM-DD HH:mm:ss'); // Ngày hóa đơn
                    invoice_1.customer_object_code = element.customer_object_code ? "CA_NHAN" : "DOANH_NGHIEP"; //Mã loại hóa đơn
                    invoice_1.buyer_tax_code = element.buyer_tax_code; //Mã số thuế
                    invoice_1.buyer_name = element.buyer_name; //Tên người mua
                    invoice_1.class_name = element.class_name;
                    invoice_1.student_name = element.student_name;
                    invoice_1.customer_name = element.customer_name; //Tên đơn vị (Tên khách hàng)
                    invoice_1.customer_code = element.customer_code; //mã đơn vị (mã khách hàng)
                    invoice_1.currency_code = element.currency_code;
                    invoice_1.currency_rate = _this.roundNumber(element.currency_rate, decimal_tygia);
                    invoice_1.buyer_address = element.buyer_address; //Địa chỉ
                    invoice_1.the_order = element.the_order; //Điện thoại liên hệ
                    invoice_1.consult_number = element.consult_number; //Điện thoại liên hệ
                    invoice_1.ship_receiving_address = element.ship_receiving_address; //Điện thoại liên hệ
                    invoice_1.ship_receiving_name = element.ship_receiving_name; //Điện thoại liên hệ
                    invoice_1.buyer_mobile = element.buyer_mobile; //Điện thoại liên hệ
                    invoice_1.nationality = element.nationality;
                    invoice_1.passport = element.passport;
                    invoice_1.passport_date = element.passport_date ? moment__WEBPACK_IMPORTED_MODULE_11__(element.passport_date).format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_11__().format('YYYY-MM-DD HH:mm:ss');
                    invoice_1.passport_expiration_date = element.passport_expiration_date ? moment__WEBPACK_IMPORTED_MODULE_11__(element.passport_expiration_date).format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_11__().format('YYYY-MM-DD HH:mm:ss');
                    ///// HĐ xe
                    invoice_1.contract_number = element.contract_number;
                    invoice_1.total_large_unit = _this.roundNumber(element.total_large_unit, decimal_quantity);
                    invoice_1.total_small_unit = _this.roundNumber(element.total_small_unit, decimal_quantity);
                    invoice_1.billing_source = element.billing_source;
                    invoice_1.vsb_number = element.vsb_number;
                    invoice_1.license_number = element.license_number;
                    invoice_1.sell_form = element.sell_form;
                    invoice_1.model = element.model;
                    invoice_1.color = element.color;
                    invoice_1.invoice_engine_number = element.invoice_engine_number;
                    invoice_1.invoice_chassis_number = element.invoice_chassis_number;
                    invoice_1.manufacture_year = element.manufacture_year;
                    invoice_1.place_of_delivery = element.place_of_delivery;
                    invoice_1.shiping_point = element.shiping_point;
                    invoice_1.payment_expire = element.payment_expire;
                    invoice_1.wip_number = element.wip_number;
                    invoice_1.in_out_date = element.in_out_date;
                    invoice_1.invoice_internal_number = element.invoice_internal_number;
                    invoice_1.license_plate = element.license_plate;
                    invoice_1.kilometer_number = element.kilometer_number;
                    /////
                    /* Hóa đơn Pepsi */
                    if (_this.isPepsi) {
                        invoice_1.template_code = element.template_code;
                        invoice_1.invoice_series = element.invoice_series;
                    }
                    else {
                        invoice_1.template_code = _this.template_code;
                        invoice_1.invoice_series = _this.invoice_series;
                    }
                    invoice_1.username = element.username;
                    /////
                    invoice_1.buyer_email = element.buyer_email; //Email
                    invoice_1.payment_method_name = element.payment_method_name; //Hình thức thanh toán
                    invoice_1.payment_method_view_name = element.payment_method_view_name; //Hình thức thanh toán
                    if (!invoice_1.payment_method_view_name) {
                        var _obj = _this.select.payment_method_names.filter(function (p) { return p.code == element.payment_method_name; })[0];
                        if (_obj) {
                            invoice_1.payment_method_view_name = _obj.name;
                        }
                    }
                    invoice_1.bank_account_number = element.bank_account_number; //Số tài khoản
                    invoice_1.bank_name = element.bank_name; //thuộc ngân hàng
                    invoice_1.note = element.note; //ghi chú
                    invoice_1.transport_number = element.transport_number;
                    invoice_1.train_name = element.train_name;
                    if (_this.isToKhaiThue) {
                        invoice_1.nationality = element.nationality;
                        invoice_1.passport = element.passport;
                        invoice_1.passport_date = element.passport_date;
                        invoice_1.passport_expiration_date = element.passport_expiration_date;
                    }
                    //máy bay
                    invoice_1.invoice_products[0].is_refund_ticket = element.is_refund_ticket;
                    invoice_1.invoice_products[0].is_money_service = element.is_money_service;
                    invoice_1.invoice_products[0].product_code = element.product_code;
                    invoice_1.invoice_products[0].product_name = element.product_name;
                    invoice_1.invoice_products[0].engine_number = element.engine_number;
                    invoice_1.invoice_products[0].price_after_discount = element.price_after_discount;
                    invoice_1.invoice_products[0].chassis_number = element.chassis_number;
                    invoice_1.invoice_products[0].color_material = element.color_material;
                    invoice_1.invoice_products[0].contract_order = element.contract_order;
                    invoice_1.invoice_products[0].management_code = element.management_code;
                    invoice_1.invoice_products[0].unit_code = element.unit_code;
                    invoice_1.invoice_products[0].unit_name = element.unit_name;
                    invoice_1.invoice_products[0].quantity = element.quantity;
                    invoice_1.invoice_products[0].other_tax = element.other_tax;
                    invoice_1.invoice_products[0].other_charge = element.other_charge;
                    invoice_1.invoice_products[0].discount = element.discount;
                    invoice_1.invoice_products[0].amount_discount = element.amount_discount;
                    invoice_1.invoice_products[0].amount_without_discount = element.amount_without_discount;
                    invoice_1.invoice_products[0].price = element.price;
                    invoice_1.invoice_products[0].product_exchange_rate = element.product_exchange_rate;
                    invoice_1.invoice_products[0].price_after_vat = element.price_after_vat;
                    invoice_1.invoice_products[0].amount = element.amount;
                    invoice_1.invoice_products[0].vat = element.vat;
                    invoice_1.invoice_products[0].amount_vat = element.amount_vat;
                    invoice_1.invoice_products[0].amount_after_vat = element.amount_after_vat;
                    invoice_1.invoice_products[0].order = element.order;
                    invoice_1.invoice_products[0].view_order = element.view_order;
                    invoice_1.invoice_products[0].provisions_on_accounts = element.provisions_on_accounts;
                    invoice_1.invoice_products[0].commercial_discount = element.commercial_discount;
                    invoice_1.invoice_products[0].is_promotion = element.is_promotion;
                    invoice_1.invoice_products[0].is_promotion_new = element.is_promotion_new;
                    invoice_1.invoice_products[0].lot = element.lot;
                    invoice_1.invoice_products[0].expiration_date = element.expiration_date;
                    invoice_1.invoice_products[0].product_date = element.product_date;
                    invoice_1.invoice_products[0]["row_content"] = element.product_name;
                    invoice_1.display_currency = JSON.stringify(_this.configs.display_currency);
                    var decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
                    invoice_1.decimal_places_json = decimal_places_json;
                    if (element.file_attach) {
                        invoice_1.invoice_files = element.file_attach;
                    }
                    else {
                        invoice_1.invoice_files = [];
                    }
                    invoice_1.environmental_fee = element.environmental_fee ? _this.roundNumber(element.environmental_fee, decimal_amount) : null;
                    ;
                    if (_this.isBĐS) {
                        invoice_1.amount = element.invoice_amount ? _this.roundNumber(element.invoice_amount, decimal_amount) : null;
                        ;
                        invoice_1.total_amount_vat = element.amount_vat ? _this.roundNumber(element.amount_vat, decimal_amount_vat) : null;
                        invoice_1.amount_after_vat = element.amount_after_vat ? _this.roundNumber(element.amount_after_vat, decimal_amount_after_vat) : null;
                        if (element.vat == -1 && element.amount_after_vat !== null)
                            invoice_1.amount_after_vatx = _this.roundNumber(element.amount_after_vat, decimal_amount_after_vat);
                        if (element.vat == 0 && element.amount_after_vat !== null)
                            invoice_1.amount_after_vat0 = _this.roundNumber(element.amount_after_vat, decimal_amount_after_vat);
                        if (element.vat == 5 && element.amount_after_vat !== null)
                            invoice_1.amount_after_vat5 = _this.roundNumber(element.amount_after_vat, decimal_amount_after_vat);
                        if (element.vat == 8 && element.amount_after_vat !== null)
                            invoice_1.amount_after_vat8 = _this.roundNumber(element.amount_after_vat, decimal_amount_after_vat);
                        if (element.vat == 10 && element.amount_after_vat !== null)
                            invoice_1.amount_after_vat10 = _this.roundNumber(element.amount_after_vat, decimal_amount_after_vat);
                        /////
                        if (element.vat == -1)
                            invoice_1.total_amount_product_vatx = element.amount ? _this.roundNumber(element.amount, decimal_amount) : null;
                        if (element.vat == 0)
                            invoice_1.total_amount_product_vat0 = element.amount ? _this.roundNumber(element.amount, decimal_amount) : null;
                        if (element.vat == 5)
                            invoice_1.total_amount_product_vat5 = element.amount ? _this.roundNumber(element.amount, decimal_amount) : null;
                        if (element.vat == 8)
                            invoice_1.total_amount_product_vat8 = element.amount ? _this.roundNumber(element.amount, decimal_amount) : null;
                        if (element.vat == 10)
                            invoice_1.total_amount_product_vat10 = element.amount ? _this.roundNumber(element.amount, decimal_amount) : null;
                        if (element.vat == 5)
                            invoice_1.amount_vat5 = element.amount_vat ? _this.roundNumber(element.amount_vat, decimal_amount_vat) : null;
                        if (element.vat == 8)
                            invoice_1.amount_vat8 = element.amount_vat ? _this.roundNumber(element.amount_vat, decimal_amount_vat) : null;
                        if (element.vat == 10)
                            invoice_1.amount_vat10 = element.amount_vat ? _this.roundNumber(element.amount_vat, decimal_amount_vat) : null;
                        if (element.vat == 0)
                            invoice_1.amount_vat0 = element.amount_vat ? _this.roundNumber(element.amount_vat, decimal_amount_vat) : null;
                        invoice_1.total_payment = _this.roundNumber(invoice_1.amount_after_vat, decimal_amount_after_vat);
                        invoice_1.auto_value = true;
                    }
                    if (_this.isPepsi) {
                        invoice_1.total_large_unit = _this.roundNumber(element.total_large_unit, decimal_quantity);
                        invoice_1.total_small_unit = _this.roundNumber(element.total_small_unit, decimal_quantity);
                        invoice_1.amount = element.invoice_amount ? _this.roundNumber(element.invoice_amount, decimal_amount) : null;
                        ;
                        invoice_1.total_amount_vat = element.total_amount_vat ? _this.roundNumber(element.total_amount_vat, decimal_amount_vat) : null;
                        invoice_1.total_payment = element.total_payment ? _this.roundNumber(element.total_payment, decimal_amount_after_vat) : null;
                        invoice_1.auto_value = true;
                    }
                    invoices.push(invoice_1);
                }
                if (element.productNumberOfVouchers) {
                    // console.log(element)
                    var invoiceProduct = {
                        product_code: element.product_code,
                        product_name: element.product_name,
                        engine_number: element.engine_number,
                        price_after_discount: element.price_after_discount,
                        chassis_number: element.chassis_number,
                        color_material: element.color_material,
                        contract_order: element.contract_order,
                        management_code: element.management_code,
                        provisions_on_accounts: element.provisions_on_accounts,
                        unit_code: element.unit_code,
                        unit_name: element.unit_name,
                        quantity: element.quantity,
                        other_tax: element.other_tax,
                        other_charge: element.other_charge,
                        price: element.price,
                        product_exchange_rate: element.product_exchange_rate,
                        price_after_vat: element.price_after_vat,
                        vat: element.vat,
                        commercial_discount: element.commercial_discount,
                        is_promotion: element.is_promotion,
                        is_promotion_new: element.is_promotion_new,
                        lot: element.lot,
                        expiration_date: element.expiration_date,
                        product_date: element.product_date,
                        amount_discount: element.amount_discount,
                        amount_without_discount: element.amount_without_discount,
                        discount: element.discount,
                        order: element.order,
                        amount: element.amount,
                        amount_vat: element.amount_vat,
                        amount_after_vat: element.amount_after_vat,
                        view_order: element.view_order,
                        row_content: element.product_name,
                        // máy bay
                        is_money_service: element.is_money_service,
                        is_refund_ticket: element.is_refund_ticket,
                    };
                    for (var i = 0; i < invoices.length; i++) {
                        if (invoices[i].number_of_vouchers == element.productNumberOfVouchers) {
                            //if (invoiceProduct.product_name != "Tổng")
                            invoices[i].invoice_products.push(invoiceProduct);
                        }
                    }
                }
            });
        });
        var _loop_3 = function (i) {
            var amount = null, total_amount_vat = null, amount_after_vat = null, amount_after_vatx = null, amount_after_vat0 = null, amount_after_vat5 = null, amount_after_vat8 = null, amount_after_vat10 = null, total_amount_product_vat0 = null, amount_vat5 = null, amount_vat8 = null, amount_vat10 = null, amount_vat0 = null, total_amount_product_vat5 = null, total_amount_product_vat8 = null, total_amount_product_vat10 = null, total_amount_product_vatx = null, amount_after_vat_other = null, amount_after_vat_kkknt = null, total_amount_product_vat_kkknt, total_amount_product_vat_other, amount_vat_other, other_charge = null, other_tax = null, amount_discount = null;
            var _objTong = invoices[i].invoice_products.filter(function (p) { return p.product_name == "Tổng"; })[0];
            invoices[i].invoice_products = invoices[i].invoice_products.filter(function (p) { return p.product_name != "Tổng"; });
            invoices[i].invoice_products.forEach(function (product, index) {
                //
                if (_this.isTT78) {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(product.product_name) != "" && !product.is_promotion && !product.is_promotion_new && !product.commercial_discount && invalid) {
                        // if (product.quantity == null && invalid) {
                        //   Library.notify("Số lượng" + " " + this._translate.VALIDATION.required, 'error');
                        //   invalid = false;
                        //   return false;
                        // }
                        // if (product.price == null && invalid) {
                        //   Library.notify("Đơn giá" + " " + this._translate.VALIDATION.required, 'error');
                        //   invalid = false;
                        //   return false;
                        // }
                    }
                    else if (product.is_promotion || product.is_promotion_new || product.commercial_discount) {
                        if ((product.product_name == null || product.product_name == '') && invalid) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tên hàng hóa" + " " + _this._translate.VALIDATION.required, 'error');
                            invalid = false;
                            return false;
                        }
                    }
                    if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(product.product_name) != "" && !product.is_promotion) {
                        if (_this.isHdGTGT) {
                            if (product.vat == null && invalid) {
                                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Thuế suất" + " " + _this._translate.VALIDATION.required, 'error');
                                invalid = false;
                                return false;
                            }
                            if (product.vat != "-1" && product.vat != "-2" && product.amount_vat == null && invalid) {
                                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tiền thuế" + " " + _this._translate.VALIDATION.required, 'error');
                                invalid = false;
                                return false;
                            }
                        }
                        if (product.amount == null && invalid) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Thành tiền" + " " + _this._translate.VALIDATION.required, 'error');
                            invalid = false;
                            return false;
                        }
                    }
                }
                //
                // product.order = index + 1;
                // product.view_order = index + 1;
                if (!product.is_promotion && !product.is_promotion_new) {
                    if (!_this.isBĐS) {
                        if (product.commercial_discount || product.is_refund_ticket) {
                            if (product.amount !== null)
                                amount -= product.amount;
                            if (product.amount_vat !== null)
                                total_amount_vat -= product.amount_vat;
                            if (product.amount_after_vat !== null)
                                amount_after_vat -= product.amount_after_vat;
                            if (product.other_tax !== null)
                                other_tax -= product.other_tax;
                            if (product.other_charge !== null)
                                other_charge -= product.other_charge;
                            if (product.vat == -1 && product.amount_after_vat !== null)
                                amount_after_vatx -= product.amount_after_vat;
                            if (product.vat == 0 && product.amount_after_vat !== null)
                                amount_after_vat0 -= product.amount_after_vat;
                            if (product.vat == 5 && product.amount_after_vat !== null)
                                amount_after_vat5 -= product.amount_after_vat;
                            if (product.vat == 8 && product.amount_after_vat !== null)
                                amount_after_vat8 -= product.amount_after_vat;
                            if (product.vat == 10 && product.amount_after_vat !== null)
                                amount_after_vat10 -= product.amount_after_vat;
                            if (product.vat == -2 && product.amount_after_vat !== null)
                                amount_after_vat_kkknt -= product.amount_after_vat;
                            if ((product.vat == -3 || product.vat == 7 || product.vat == 3.5) && product.amount_after_vat !== null)
                                amount_after_vat_other -= product.amount_after_vat;
                            if (product.vat == 0 && product.amount_vat !== null)
                                amount_vat0 -= product.amount_vat;
                            if (product.vat == 5 && product.amount_vat !== null)
                                amount_vat5 -= product.amount_vat;
                            if (product.vat == 8 && product.amount_vat !== null)
                                amount_vat8 -= product.amount_vat;
                            if (product.vat == 10 && product.amount_vat !== null)
                                amount_vat10 -= product.amount_vat;
                            if ((product.vat == -3 || product.vat == 7 || product.vat == 3.5) && product.amount_vat !== null)
                                amount_vat_other -= product.amount_vat;
                            if (product.vat == -1)
                                total_amount_product_vatx -= product.amount;
                            if (product.vat == 0)
                                total_amount_product_vat0 -= product.amount;
                            if (product.vat == 5)
                                total_amount_product_vat5 -= product.amount;
                            if (product.vat == 8)
                                total_amount_product_vat8 -= product.amount;
                            if (product.vat == 10)
                                total_amount_product_vat10 -= product.amount;
                            if (product.vat == -2)
                                total_amount_product_vat_kkknt -= product.amount;
                            if (product.vat == -3 || product.vat == 7 || product.vat == 3.5)
                                total_amount_product_vat_other -= product.amount;
                        }
                        else {
                            if (product.amount !== null)
                                amount += product.amount;
                            if (product.amount_vat !== null)
                                total_amount_vat += product.amount_vat;
                            if (product.amount_after_vat !== null)
                                amount_after_vat += product.amount_after_vat;
                            if (product.other_tax !== null)
                                other_tax += product.other_tax;
                            if (product.other_charge !== null)
                                other_charge += product.other_charge;
                            if (product.vat == -1 && product.amount_after_vat !== null)
                                amount_after_vatx += product.amount_after_vat;
                            if (product.vat == 0 && product.amount_after_vat !== null)
                                amount_after_vat0 += product.amount_after_vat;
                            if (product.vat == 5 && product.amount_after_vat !== null)
                                amount_after_vat5 += product.amount_after_vat;
                            if (product.vat == 8 && product.amount_after_vat !== null)
                                amount_after_vat8 += product.amount_after_vat;
                            if (product.vat == 10 && product.amount_after_vat !== null)
                                amount_after_vat10 += product.amount_after_vat;
                            if (product.vat == -2 && product.amount_after_vat !== null)
                                amount_after_vat_kkknt += product.amount_after_vat;
                            if ((product.vat == -3 || product.vat == 7 || product.vat == 3.5) && product.amount_after_vat !== null)
                                amount_after_vat_other += product.amount_after_vat;
                            if (product.vat == 0 && product.amount_vat !== null)
                                amount_vat0 += product.amount_vat;
                            if (product.vat == 5 && product.amount_vat !== null)
                                amount_vat5 += product.amount_vat;
                            if (product.vat == 8 && product.amount_vat !== null)
                                amount_vat8 += product.amount_vat;
                            if (product.vat == 10 && product.amount_vat !== null)
                                amount_vat10 += product.amount_vat;
                            if ((product.vat == -3 || product.vat == 7 || product.vat == 3.5) && product.amount_vat !== null)
                                amount_vat_other += product.amount_vat;
                            if (product.vat == -1)
                                total_amount_product_vatx += product.amount;
                            if (product.vat == 0)
                                total_amount_product_vat0 += product.amount;
                            if (product.vat == 5)
                                total_amount_product_vat5 += product.amount;
                            if (product.vat == 8)
                                total_amount_product_vat8 += product.amount;
                            if (product.vat == 10)
                                total_amount_product_vat10 += product.amount;
                            if (product.vat == -2)
                                total_amount_product_vat_kkknt += product.amount;
                            if (product.vat == -3 || product.vat == 7 || product.vat == 3.5)
                                total_amount_product_vat_other += product.amount;
                        }
                        //Tính tổng tiền chiết khấu
                        if (product.commercial_discount)
                            amount_discount += product.amount;
                        else if (product.amount_discount != null)
                            amount_discount += product.amount_discount;
                        if (!_this.is_multi_vat && index > 0 && invoices[i].invoice_products[index].vat != invoices[i].invoice_products[index - 1].vat && invalid) {
                            var _obj = invoices[i].invoice_products.filter(function (p) { return !p.is_promotion && !p.is_promotion_new && p.vat != null; })[0];
                            var temp_2 = _obj ? _obj.vat : null;
                            if (!_this.is_multi_vat) {
                                var check_same_vat_1 = true;
                                invoices[i].invoice_products.forEach(function (item) {
                                    if (item.vat != null) {
                                        if (item.vat !== temp_2 && item.product_name && !item.is_promotion && !item.is_promotion_new) {
                                            check_same_vat_1 = false;
                                        }
                                    }
                                });
                                if (!check_same_vat_1) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Mẫu hóa đơn đăng ký 1 loại thuế suất. Vui lòng kiểm tra lại thuế suất của hàng hóa', 'error');
                                    invalid = false;
                                    return;
                                }
                            }
                            // let _lstVat = invoices[i].invoice_products.filter(p => p.vat == -1 || p.vat == 0 || p.vat == 5 || p.vat == 10 || p.vat == -2 || p.vat == -3);
                            // if (_lstVat.length > 0) {
                            //   Library.notify('Mẫu hóa đơn đăng ký 1 loại thuế suất. Vui lòng kiểm tra lại thuế suất của hàng hóa', 'error');
                            //   invalid = false;
                            //   return;
                            // }
                        }
                    }
                }
            });
            if (!this_3.isBĐS) {
                if (this_3.isPepsi)
                    invoices[i].amount = invoices[i].amount ? this_3.roundNumber(invoices[i].amount, decimal_amount) : null;
                else
                    invoices[i].amount = _objTong ? this_3.roundNumber(_objTong.amount, decimal_amount) : this_3.roundNumber(amount, decimal_amount);
                if (this_3.isPepsi)
                    invoices[i].total_amount_vat = invoices[i].total_amount_vat ? this_3.roundNumber(invoices[i].total_amount_vat, decimal_amount_vat) : null;
                else
                    invoices[i].total_amount_vat = _objTong ? this_3.roundNumber(_objTong.amount_vat, decimal_amount_vat) : this_3.roundNumber(total_amount_vat, decimal_amount_vat);
                invoices[i].amount_after_vat = _objTong ? this_3.roundNumber(_objTong.amount_after_vat, decimal_amount_after_vat) : this_3.roundNumber(amount_after_vat, decimal_amount_after_vat);
                invoices[i].amount_after_vatx = amount_after_vatx != null ? this_3.roundNumber(amount_after_vatx, decimal_amount_after_vat) : null;
                invoices[i].amount_after_vat0 = amount_after_vat0 != null ? this_3.roundNumber(amount_after_vat0, decimal_amount_after_vat) : null;
                invoices[i].amount_after_vat5 = amount_after_vat5 != null ? this_3.roundNumber(amount_after_vat5, decimal_amount_after_vat) : null;
                invoices[i].amount_after_vat8 = amount_after_vat8 != null ? this_3.roundNumber(amount_after_vat8, decimal_amount_after_vat) : null;
                invoices[i].amount_after_vat10 = amount_after_vat10 != null ? this_3.roundNumber(amount_after_vat10, decimal_amount_after_vat) : null;
                invoices[i].amount_after_vat_kkknt = amount_after_vat_kkknt != null ? this_3.roundNumber(amount_after_vat_kkknt, decimal_amount_after_vat) : null;
                invoices[i].amount_after_vat_other = amount_after_vat_other != null ? this_3.roundNumber(amount_after_vat_other, decimal_amount_after_vat) : null;
                invoices[i].other_tax = other_tax != null ? this_3.roundNumber(other_tax, decimal_amount_after_vat) : null;
                invoices[i].other_charge = other_charge != null ? this_3.roundNumber(other_charge, decimal_amount_after_vat) : null;
                invoices[i].amount_discount = amount_discount != null ? this_3.roundNumber(amount_discount, decimal_amount_discount) : null;
                if (this_3.isHdGTGT) {
                    if (!this_3.is_multi_vat && _objTong) {
                        var _objVat5 = invoices[i].invoice_products.filter(function (p) { return p.vat == 5; })[0];
                        if (_objVat5)
                            invoices[i].amount_vat5 = this_3.roundNumber(_objTong.amount_vat, decimal_amount_vat);
                        var _objVat8 = invoices[i].invoice_products.filter(function (p) { return p.vat == 8; })[0];
                        if (_objVat8)
                            invoices[i].amount_vat8 = this_3.roundNumber(_objTong.amount_vat, decimal_amount_vat);
                        var _objVat10 = invoices[i].invoice_products.filter(function (p) { return p.vat == 10; })[0];
                        if (_objVat10)
                            invoices[i].amount_vat10 = this_3.roundNumber(_objTong.amount_vat, decimal_amount_vat);
                        var _objVatOther = invoices[i].invoice_products.filter(function (p) { return (p.vat == -3 || p.vat == 7 || p.vat == 3.5); })[0];
                        if (_objVatOther)
                            invoices[i].amount_vat_other = this_3.roundNumber(_objTong.amount_vat, decimal_amount_vat);
                    }
                    else {
                        invoices[i].amount_vat0 = amount_vat0 != null ? this_3.roundNumber(amount_vat0, decimal_amount_vat) : null;
                        invoices[i].amount_vat5 = amount_vat5 != null ? this_3.roundNumber(amount_vat5, decimal_amount_vat) : null;
                        invoices[i].amount_vat8 = amount_vat8 != null ? this_3.roundNumber(amount_vat8, decimal_amount_vat) : null;
                        invoices[i].amount_vat10 = amount_vat10 != null ? this_3.roundNumber(amount_vat10, decimal_amount_vat) : null;
                        invoices[i].amount_vat_other = amount_vat_other != null ? this_3.roundNumber(amount_vat_other, decimal_amount_vat) : null;
                    }
                }
                invoices[i].total_amount_product_vatx = total_amount_product_vatx != null ? this_3.roundNumber(total_amount_product_vatx, decimal_amount) : null;
                invoices[i].total_amount_product_vat0 = total_amount_product_vat0 != null ? this_3.roundNumber(total_amount_product_vat0, decimal_amount) : null;
                invoices[i].total_amount_product_vat5 = total_amount_product_vat5 != null ? this_3.roundNumber(total_amount_product_vat5, decimal_amount) : null;
                invoices[i].total_amount_product_vat8 = total_amount_product_vat8 != null ? this_3.roundNumber(total_amount_product_vat8, decimal_amount) : null;
                invoices[i].total_amount_product_vat10 = total_amount_product_vat10 != null ? this_3.roundNumber(total_amount_product_vat10, decimal_amount) : null;
                invoices[i].total_amount_product_vat_kkknt = total_amount_product_vat_kkknt != null ? this_3.roundNumber(total_amount_product_vat_kkknt, decimal_amount) : null;
                invoices[i].total_amount_product_vat_other = total_amount_product_vat_other != null ? this_3.roundNumber(total_amount_product_vat_other, decimal_amount) : null;
                if (this_3.isPepsi)
                    invoices[i].total_payment = invoices[i].total_payment ? this_3.roundNumber(invoices[i].total_payment, decimal_amount_after_vat) : null;
                else
                    invoices[i].total_payment = this_3.roundNumber(invoices[i].amount_after_vat, decimal_amount_after_vat);
            }
            var tien_chu = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].tienBangChu(Math.abs(invoices[i].total_payment), decimal_amount_after_vat, invoices[i].currency_code, this_3.configs.system_parameter.display_read_money_english);
            invoices[i].total_payment_in_word = this_3.invoiceService.docTienAm(invoices[i].total_payment, tien_chu, this_3.configs, invoices[i].currency_code);
            if (invoices[i].total_payment > 20000000 && (invoices[i].payment_method_name == 'TM') && type == "submit" && invalid) {
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
            /* Hóa đơn giảm trừ theo Nghị định số 92/2021  */
            var _objND92 = invoices[i].invoice_products.filter(function (p) { return (p.vat == "7" || p.vat == "3.5"); })[0];
            if (_objND92) {
                var _objCommon = invoices[i].invoice_products.filter(function (p) { return (p.vat != "7" && p.vat != "3.5"); })[0];
                var isCheckNoVat_1 = false;
                var _lstNoVat = invoices[i].invoice_products.filter(function (p) { return p.vat == null; });
                _lstNoVat.forEach(function (itemS) {
                    if (!itemS.commercial_discount) {
                        if (itemS.amount != null)
                            isCheckNoVat_1 = true;
                    }
                });
                if ((_objCommon || isCheckNoVat_1) && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Vui lòng lập hóa đơn riêng cho hàng hóa, dịch vụ được giảm thuế GTGT theo Nghị định số 92/2021", 'error', 5000);
                    this_3.dataGrid.instance.focus(this_3.dataGrid.instance.getCellElement(0, 'vat'));
                    return { value: false };
                }
                var dateFrom = moment__WEBPACK_IMPORTED_MODULE_11__("01/11/2021", 'DD/MM/YYYY').format('YYYY-MM-DD');
                var dateTo = moment__WEBPACK_IMPORTED_MODULE_11__("31/12/2021", 'DD/MM/YYYY').format('YYYY-MM-DD');
                var invoiceDate = void 0;
                if (!invoices[i].invoice_date)
                    invoiceDate = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('YYYY-MM-DD');
                else
                    invoiceDate = moment__WEBPACK_IMPORTED_MODULE_11__(invoices[i].invoice_date).format('YYYY-MM-DD');
                if ((invoiceDate < dateFrom || invoiceDate > dateTo) && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Chỉ áp dụng giảm thuế GTGT theo Nghị định số 92/2021 cho các hóa đơn từ ngày 01/11/2021 đến 31/12/2021", 'error');
                    return { value: false };
                }
            }
            /* Hóa đơn giảm Nghị Quyết 43 */
            var _objNQ43 = invoices[i].invoice_products.filter(function (p) { return (p.vat == "8"); })[0];
            // if (_objNQ43) {
            //   let dateFromNQ43 = moment("01/02/2022", 'DD/MM/YYYY').format('YYYY-MM-DD');
            //   let dateToNQ43 = moment("31/12/2022", 'DD/MM/YYYY').format('YYYY-MM-DD');
            //   let invoiceDateNQ43: any;
            //   if (!invoices[i].invoice_date)
            //     invoiceDateNQ43 = moment(new Date()).format('YYYY-MM-DD');
            //   else
            //     invoiceDateNQ43 = moment(invoices[i].invoice_date).format('YYYY-MM-DD')
            //   if ((invoiceDateNQ43 < dateFromNQ43 || invoiceDateNQ43 > dateToNQ43) && invalid && !this.isPassNQ43) {
            //     Library.notify("Chỉ áp dụng giảm thuế GTGT theo Nghị quyết số 43/2022/QH15 cho các hóa đơn từ ngày 01/02/2022 đến 31/12/2022", 'error');
            //     return false;
            //   }
            // }
            /* Check phí dịch vụ, phí hoàn vé */
            var _lstPhiDichVu = invoices[i].invoice_products.filter(function (p) { return p.is_money_service; });
            if (_lstPhiDichVu && _lstPhiDichVu.length > 1) {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Chỉ được chọn 1 hàng hóa là Phí dịch vụ", 'error');
                return { value: false };
            }
            var _lstPhiHoanVe = invoices[i].invoice_products.filter(function (p) { return p.is_refund_ticket; });
            if (_lstPhiHoanVe && _lstPhiHoanVe.length > 1) {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Chỉ được chọn 1 hàng hóa là Phí hoàn vé", 'error');
                return { value: false };
            }
            // Valid tỷ giá
            var invoice_products = invoices[i].invoice_products.filter(function (item) { return item.product_exchange_rate; });
            if (invoices[i].currency_code && invoices[i].currency_code != "VND") {
                if (invoice_products && invoice_products.length > 0) {
                    if (invoice_products.length !== invoices[i].invoice_products.length) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this_3._translate.CONTROLL.LABEL.currency_rate + ' ' + this_3._translate.VALIDATION.required, 'error');
                        return { value: false };
                    }
                }
                else {
                    if (!invoices[i].currency_rate) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this_3._translate.CONTROLL.LABEL.currency_rate + ' ' + this_3._translate.VALIDATION.required, 'error');
                        return { value: false };
                    }
                }
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
        this.invoicesArr = this.invoicesArr.sort(function (itemA, itemB) {
            return new Date(itemA.invoice_date).getTime() - new Date(itemB.invoice_date).getTime();
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
                    typeAction: 'NAP_EXCEL_HD'
                };
                this.bsModalViewModel = this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_15__["ViewInvoiceComponent"], {
                    backdrop: 'static',
                    keyboard: false,
                    class: 'modal-xl view-invoice',
                    initialState: initialState
                });
                var subModal_2 = this.modalImportService.onHide.subscribe(function () {
                    subModal_2.unsubscribe();
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
                typeAction: 'NAP_EXCEL_HD'
            };
            this.bsModalViewModel = this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_15__["ViewInvoiceComponent"], {
                backdrop: 'static',
                keyboard: false,
                class: 'modal-xl view-invoice',
                initialState: initialState
            });
            var subModal_3 = this.modalImportService.onHide.subscribe(function () {
                if (_this.bsModalViewModel.content.successSaveItem == "DONG_Y") {
                    _this.confirmCheckPreview = true;
                    _this.submit('XUAT');
                }
                subModal_3.unsubscribe();
            });
        }
        else {
            this.checkCKS("XUAT_HOA_DON");
        }
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
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        this.checkStatusData();
        if (!_core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_7__["InvoicesService"].checkTimeExportInv(this.configs.system_parameter)) {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__["String"].Format(this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_11__(this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_11__(this.configs.system_parameter.time_end).format('HH:mm')), 'error');
            return;
        }
        if (this.totalDuplicateInvoice > 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Số phiếu, chứng từ bị trùng", "error");
            return;
        }
        setTimeout(function () {
            var convert = _this.convertGirdToInvoices("submit", type);
            if (convert) {
                if (_this.isPepsi)
                    _this.confirmCheckPreview = true;
                var dayExport = _this.invoice_date ? moment__WEBPACK_IMPORTED_MODULE_11__(_this.invoice_date).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('DD/MM/YYYY');
                if (type == "XUAT") {
                    if (_this.confirmCheckPreview) {
                        // Library.confirmVA(`Tất cả hóa đơn đã nhập sẽ được xuất hóa đơn vào ngày <strong>${dayExport}</strong>. Bạn có chắc chắn không?`, "Thông báo", () => {
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
                        typeAction: 'NAP_EXCEL_HD'
                    };
                    _this.bsModalViewModel = _this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_15__["ViewInvoiceComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-xl view-invoice',
                        initialState: initialState
                    });
                    var subModal_4 = _this.modalImportService.onHide.subscribe(function () {
                        subModal_4.unsubscribe();
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
                        typeAction: 'NAP_EXCEL_HD'
                    };
                    _this.bsModalViewModel = _this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_15__["ViewInvoiceComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-xl view-invoice',
                        initialState: initialState
                    });
                    var subModal_5 = _this.modalImportService.onHide.subscribe(function () {
                        if (_this.bsModalViewModel.content.successSaveItem == "DONG_Y") {
                            _this.connectWebsocket();
                            _this.confirmCheckPreview = true;
                            _this.submit('XUAT');
                        }
                        subModal_5.unsubscribe();
                    });
                }
            }
        });
    };
    ImportInvoicesDtComponent.prototype.dong = function () {
        this.bsModalImportRef.hide();
        this.funcNavigate();
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
                        case 'payment_method_code':
                            _this.paymentMethodChange(row);
                            break;
                        case 'product_code':
                            _this.productCodeChange(row);
                            break;
                        default:
                            break;
                    }
                }, function (error) {
                });
            });
        }, 100);
    };
    //Thay đổi cột mã hàng
    ImportInvoicesDtComponent.prototype.productCodeChange = function (row) {
        var _this = this;
        this.select.products.some(function (item) {
            if (item.code === row.product_code) {
                var sub_7 = _this.productsService.getProduct(item.id).subscribe(function (rs) {
                    if (rs.status == "success") {
                        var product = rs.data.product;
                        if (product) {
                            row.product_name = product.name;
                            row.unit_code = _this.checkUnitCode(product.unit_code);
                            _this.invoice_products.update(row.id, row);
                            _this.unitChange(row);
                            return true;
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    sub_7.unsubscribe();
                });
            }
        });
    };
    ImportInvoicesDtComponent.prototype.paymentMethodChange = function (row) {
        var _obj = this.select.payment_method_names.filter(function (p) { return p.code === row.payment_method_code; })[0];
        if (_obj) {
            row.payment_method_name = _obj.name;
            this.invoice_products.update(row.id, row);
        }
        else {
            row.payment_method_name = '';
            this.invoice_products.update(row.id, row);
        }
    };
    ImportInvoicesDtComponent.prototype.funcNavigate = function () {
        if (this.loaiHoaDon && this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].loaihoadon.KPTQ07) {
            if (this.search)
                this.router.navigate(["/system/non-tariff-invoice"], { queryParams: this.search });
            else
                this.router.navigate(["/system/non-tariff-invoice"]);
        }
        else if (this.isHdGTGT) {
            if (this.search)
                this.router.navigate(["/system/vat-invoice"], { queryParams: this.search });
            else
                this.router.navigate(["/system/vat-invoice"]);
        }
        else {
            if (this.search)
                this.router.navigate(["/system/sale-invoice"], { queryParams: this.search });
            else
                this.router.navigate(["/system/sale-invoice"]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], ImportInvoicesDtComponent.prototype, "dataGrid", void 0);
    ImportInvoicesDtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-invoices-dt',
            template: __webpack_require__(/*! ./import-invoices-dt.component.html */ "./src/app/modules/vat/components/import-invoices-dt/import-invoices-dt.component.html"),
            styles: [__webpack_require__(/*! ./import-invoices-dt.component.scss */ "./src/app/modules/vat/components/import-invoices-dt/import-invoices-dt.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_19__["MyBsModalService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_20__["ProductsService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_21__["InvoiceService"]])
    ], ImportInvoicesDtComponent);
    return ImportInvoicesDtComponent;
}());



/***/ }),

/***/ "./src/app/modules/vat/components/import-invoices/import-invoices.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/vat/components/import-invoices/import-invoices.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"import-invoices\"> \r\n  <form class=\"form-import-invoices\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">IMPORT THÔNG TIN HÓA ĐƠN TỪ EXCEL</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalImportRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"padding-bottom: 0px;\">\r\n      <div class=\"row inport-selector\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"select-file\">\r\n            <div class=\"field field-first\" style=\"width: 44%;\">\r\n              <div class=\"label\">Mẫu hóa đơn</div>\r\n              <div class=\"value\">\r\n                <dx-select-box \r\n                  [items]=\"invoice_releases\" \r\n                  displayExpr=\"name\" \r\n                  [(value)]=\"invoice_release_id\"\r\n                  valueExpr=\"value\" \r\n                  [disabled]=\"disabledInvoiceReleases\"\r\n                  (onValueChanged)=\"onInvoiceReleases($event)\"\r\n                  >\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n            <div class=\"field field-first\" style=\"width: 27%;\">\r\n              <div class=\"label\" style=\"width: 135px;\">Hình thức xuất</div>\r\n              <div class=\"value\">\r\n                <dx-select-box \r\n                  [(value)]=\"htXuat\"\r\n                  displayExpr=\"name\"\r\n                  valueExpr=\"code\"\r\n                  [items]=\"htXuatOptions\"\r\n                  >\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n            <div class=\"field field-first\" *ngIf=\"!isAllowEditInvoiceDate\" style=\"width: 27%;\">\r\n              <div class=\"label\" style=\"width: 135px;\">Ngày xuất hóa đơn</div>\r\n              <div class=\"value\">\r\n                <dx-date-box \r\n                  [(value)]=\"invoice_date\"\r\n                  displayFormat=\"dd/MM/yyyy\"\r\n                  [useMaskBehavior]=\"true\"\r\n                  dateSerializationFormat=\"yyyy-MM-dd HH:mm:ss\"\r\n                  >\r\n                </dx-date-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"select-file\">\r\n            <div class=\"field\">\r\n              <div class=\"label\">Tên file</div>\r\n              <div class=\"value\">\r\n                <dx-text-box [readOnly]=\"true\" [value]=\"fileName\"></dx-text-box>\r\n              </div>\r\n              <div class=\"btn-select-file\" style=\"margin-left: 10px;\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"napDuLieuTuBangKe()\" class=\"support-link\">\r\n                      <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx, .xls\" (change)=\"onFileChanged($event)\" multiple=\"false\" style=\"display: none;\"/>\r\n                      <span>Chọn file</span>\r\n                    </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col-md-5\">\r\n          <div class=\"select-file\">\r\n            <div class=\"field\" *ngIf=\"!isAllowEditInvoiceDate\">\r\n              <div class=\"label\" style=\"width: 135px;\">Ngày xuất hóa đơn</div>\r\n              <div class=\"value\">\r\n                <dx-date-box \r\n                  [(value)]=\"invoice_date\"\r\n                  displayFormat=\"dd/MM/yyyy\"\r\n                  dateSerializationFormat=\"yyyy-MM-dd\"\r\n                  >\r\n                </dx-date-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"note-template-import\">\r\n        <p><span style=\"font-weight: 600; color: red; padding-right: 5px;\">Lưu ý</span> Chức năng này Import danh sách hóa đơn từ file Excel. File này cần</p>\r\n        <p style=\"margin-left: 48px;\">đúng định dạng (Template). Bạn có thể tải Template mẫu Excel <a href=\"javascript:void(0)\" style=\"font-weight: 600\" (click)=\"getFileTemp()\">Tại đây</a></p>\r\n      </div>\r\n      <div class=\"read-file\">\r\n      <dx-button (click)=\"chonDocFile()\" text=\"Đọc file Excel\" type=\"default\" [disabled]=\"isDisReadFile\"></dx-button>\r\n      </div>\r\n      <!-- phần table hiển thị -->\r\n      <div class=\"row invoice-table\">\r\n          <div class=\"col-md-12\">\r\n            <dx-data-grid \r\n              id=\"gridImportInvoice\"\r\n              [dataSource]=\"dataSource\"\r\n              [showBorders]=\"true\"\r\n              [showRowLines]=\"true\"\r\n              [wordWrapEnabled]=\"true\"\r\n              [columnAutoWidth]=\"false\"\r\n              [allowColumnResizing]=\"true\"\r\n              [columnMinWidth]=\"50\"\r\n              [columnResizingMode]=\"true\"\r\n              (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n              (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n              (onContentReady)=\"onContentReady($event)\"\r\n              (onCellPrepared)=\"onCellPrepared($event)\"\r\n              (onRowPrepared)=\"onRowPrepared($event)\"\r\n              (onRowUpdated)=\"onRowUpdated($event)\"\r\n              (onRowRemoving)=\"onRowRemoving($event)\"\r\n              (onKeyDown)=\"onGripKeyDown($event)\">\r\n              <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n              <dxo-editing \r\n                mode=\"cell\" \r\n                [allowUpdating]=\"true\"\r\n                [allowDeleting]=\"true\"\r\n                [useIcons]=\"true\">\r\n              </dxo-editing>\r\n              <dxo-sorting mode=\"false\"></dxo-sorting>\r\n              <dxo-column-fixing [enabled]=\"true\"></dxo-column-fixing>\r\n\r\n              <dxi-column dataField=\"number_of_vouchers\" [width]=\"130\" caption=\"Số phiếu/Chứng từ\" alignment=\"left\" \r\n                [fixed]=\"true\" fixedPosition=\"left\">\r\n                <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"customer_object_code\" [width]=\"70\" caption=\"Cá nhân\" alignment=\"center\" \r\n              [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"customer_code\" [width]=\"100\" caption=\"Mã khách hàng\" alignment=\"center\" \r\n              [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n              \r\n              <dxi-column dataField=\"buyer_tax_code\" [width]=\"100\" caption=\"MST/MNS\" alignment=\"left\" \r\n              [fixed]=\"true\" fixedPosition=\"left\">\r\n              <dxi-validation-rule \r\n                type=\"pattern\"\r\n                [pattern]=\"taxCodePattern\" message=\"Mã số thuế không đúng định dạng\"\r\n              ></dxi-validation-rule></dxi-column>\r\n\r\n              <dxi-column dataField=\"customer_name\" [width]=\"180\" caption=\"Tên đơn vị, tổ chức\" alignment=\"left\" \r\n                [fixed]=\"true\" fixedPosition=\"left\">\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"buyer_name\" [width]=\"120\" caption=\"Người mua hàng\" alignment=\"left\" \r\n              [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"buyer_address\" [width]=\"200\" caption=\"Địa chỉ\" alignment=\"left\">\r\n                  <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"buyer_mobile\" [width]=\"100\" caption=\"Điện thoại\" alignment=\"left\">\r\n                <dxi-validation-rule \r\n                type=\"pattern\"\r\n                [pattern]=\"phonePattern\" message=\"Mã số thuế không đúng định dạng\"\r\n              ></dxi-validation-rule>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"buyer_email\" [width]=\"150\" caption=\"Email nhận hóa đơn\" alignment=\"left\">\r\n              <dxi-validation-rule \r\n                type=\"pattern\"\r\n                [pattern]=\"emailPattern\" message=\"Mã số thuế không đúng định dạng\"></dxi-validation-rule>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"payment_method_name\" [width]=\"100\" caption=\"HTTT\" alignment=\"left\">\r\n                <dxo-lookup [dataSource]=\"select.payment_method_names\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n                <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n              </dxi-column>\r\n              \r\n              <dxi-column dataField=\"bank_account_number\" [width]=\"100\" caption=\"Số tài khoản\" alignment=\"left\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"bank_name\" [width]=\"150\" caption=\"Tên ngân hàng\" alignment=\"left\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"product_code\" caption=\"Mã hàng\" alignment=\"center\" [width]=\"100\">\r\n                <dxo-lookup [dataSource]=\"select.products\" displayExpr=\"code\" valueExpr=\"code\"></dxo-lookup>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"product_name\" [width]=\"150\" caption=\"Tên hàng hóa, dịch vụ\" alignment=\"left\">\r\n                  <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"provisions_on_accounts\" [width]=\"150\" caption=\"Định khoản\" alignment=\"left\">\r\n                <dxo-lookup [dataSource]=\"select.select_provisions_on_accounts\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"unit_code\" caption=\"Đơn vị tính\" [width]=\"100\" alignment=\"center\">\r\n                <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"quantity\" caption=\"Số lượng\" [width]=\"100\" [editorOptions]=\"{ format: formatter.so_luong }\" \r\n              [format]=\"formatter.so_luong\" dataType=\"number\" alignment=\"center\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"price\" caption=\"Đơn giá\" [width]=\"90\" [editorOptions]=\"{ format: formatter.don_gia }\" \r\n              [format]=\"formatter.don_gia\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"amount\" caption=\"Thành tiền\" [width]=\"109\" [editorOptions]=\"{ format: formatter.thanh_tien }\" \r\n              [format]=\"formatter.thanh_tien\" dataType=\"number\" alignment=\"right\">\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"vat\" caption=\"VAT\" [width]=\"90\" alignment=\"center\">\r\n                <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n              </dxi-column>\r\n\r\n              <dxi-column dataField=\"amount_vat\" caption=\"Tiền VAT\" [width]=\"120\" [editorOptions]=\"{ format: formatter.tien_thue }\" \r\n              [format]=\"formatter.tien_thue\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n\r\n              <dxi-column dataField=\"amount_after_vat\" caption=\"Tổng tiền\" [width]=\"130\" \r\n              [editorOptions]=\"{ format: formatter.tong_tien }\" \r\n              [format]=\"formatter.tong_tien\" dataType=\"number\" alignment=\"right\">\r\n              <!-- <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule> -->\r\n              </dxi-column>\r\n              <dxi-column dataField=\"note\" [width]=\"100\" caption=\"Ghi chú\" alignment=\"left\">\r\n              </dxi-column>\r\n              <dxi-column cellTemplate=\"DinhKemFile\" caption=\"Đính kèm file\" [width]=\"250\" alignment=\"center\"></dxi-column>\r\n\r\n              <div *dxTemplate=\"let data of 'DinhKemFile'\">\r\n                <a href=\"javascript:void(0)\" (click)=\"dinhKemFile($event)\" *ngIf=\"data.data.number_of_vouchers != ''\">\r\n                  <input type=\"file\" id=\"file-dinh-kem\" [attr.data-rowindex]=\"data.rowIndex\" accept=\".xlsx, .docx, .doc, .pdf, .xls, .xml\" (change)=\"onDinhKemFile($event)\" multiple=\"false\" style=\"display: none;\"/>\r\n                  <!-- <span><i class=\"fa fa-file\"></i></span> --> \r\n                  Chọn file\r\n                  <p>{{data.data.file_attach_name}}</p>\r\n                </a>\r\n              </div>\r\n              <!-- <dxo-summary >\r\n                <dxi-total-item\r\n                    summaryType=\"custom\" \r\n                    [customizeText]=\"customizeText\"\r\n                    showInColumn=\"amount\">\r\n                </dxi-total-item>\r\n              </dxo-summary> -->\r\n              <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n              <dxo-summary>\r\n                <dxi-total-item\r\n                    name=\"totalAmount\"\r\n                    column=\"amount\"\r\n                    summaryType=\"sum\"\r\n                    [customizeText]=\"customizeText\">\r\n                </dxi-total-item>\r\n                <dxi-total-item\r\n                    name=\"totalAmountVat\"\r\n                    column=\"amount_vat\"\r\n                    summaryType=\"sum\"\r\n                    [customizeText]=\"customizeText\">\r\n                </dxi-total-item>\r\n                <dxi-total-item\r\n                    name=\"totalAmountAfterVat\"\r\n                    column=\"amount_after_vat\"\r\n                    summaryType=\"sum\"\r\n                    [customizeText]=\"customizeText\">\r\n                </dxi-total-item>\r\n              </dxo-summary>\r\n            </dx-data-grid>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7\">\r\n              <div class=\"note-footer\">\r\n                  <p style=\"margin-left: 0;\"><span style=\"font-weight: 500; color: red;\">Ghi chú</span></p>\r\n                  <p>Có thể sửa xóa trực tiếp trên lưới. Click chuột phải để thêm dòng nhập liệu</p>\r\n                  <p><span class=\"mau-vang\"> </span>Màu vàng: Số chứng từ bị trùng với dữ liệu hóa đơn đã xuất</p>\r\n                  <p><span class=\"mau-do\"> </span>Màu đỏ: Thông tin sai định dạng</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n              <div class=\"note-footer\" style=\"text-align: right; margin-right: 50px;\">\r\n                  <p style=\"padding: 8px;\"></p>\r\n                  <p>Số chứng từ hợp lệ: <span style=\"color: seagreen; font-weight: 600\">{{totalInvoice}}</span></p>\r\n                  <p>Số chứng từ bị sai định dạng thông tin: <span style=\"color: red; font-weight: 600\">{{totalErrorInvoice}}</span></p>\r\n                  <p>Số chứng từ bị trùng: <span style=\"color: yellow; font-weight: 600\">{{totalDuplicateInvoice}}</span></p>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        \r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <div class=\"col-md-4\">\r\n        <dx-button *ngIf=\"isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\Xem.png\" text=\"Xem trước hóa đơn\" (click)=\"preview()\" type=\"default\"></dx-button>\r\n        <dx-button *ngIf=\"!isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\Xem.png\" text=\"Xem hóa đơn\" (click)=\"xemHoaDon()\" type=\"default\"></dx-button>\r\n        <dx-button *ngIf=\"!isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\In.png\" text=\"In chuyển đổi\" (click)=\"inChuyenDoi()\" type=\"default\"></dx-button>\r\n      </div>\r\n      <div class=\"col-md-8 btn-right\">\r\n        <dx-button text=\"Quay lại\" type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\" (click)=\"bsModalImportRef.hide()\"></dx-button>\r\n        <dx-button *ngIf=\"isVisibleBtnSubmit\" text=\"Xuất dữ liệu trên lưới ra Excel\" icon=\"assets\\img\\icons\\XuatFile.png\" (click)=\"xuatFile()\" type=\"default\"></dx-button>\r\n        <dx-button *ngIf=\"isVisibleBtnSubmit\" text=\"Ghi tạm\" icon=\"assets\\img\\icons\\GhiTam.png\" (click)=\"submit('LUU')\" type=\"default\"></dx-button>\r\n        <!-- <dx-button *ngIf=\"isVisibleBtnSubmit\"  text=\"Xuất chờ ký\" icon=\"assets\\img\\icons\\XuatHD.png\" (click)=\"submit('CHO_KY')\" type=\"default\" ></dx-button> -->\r\n        <dx-button *ngIf=\"isVisibleBtnSubmit && isAccessExportInv\"  text=\"Xuất hóa đơn\" icon=\"assets\\img\\icons\\XuatHD.png\" (click)=\"submit('XUAT')\" type=\"default\" ></dx-button>\r\n      </div>\r\n        \r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"Quá trình đang xử lý\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopupImport\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>\r\n\r\n<dx-popup \r\n  class=\"popup\" \r\n  [width]=\"500\" \r\n  [height]=\"160\" \r\n  [showTitle]=\"true\" \r\n  title=\"Thông báo\" \r\n  [dragEnabled]=\"false\" \r\n  [closeOnOutsideClick]=\"true\"\r\n  [(visible)]=\"popupCachNapDuLieu\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p>Bạn vui lòng chọn cách nạp dữ liệu: </p>\r\n    <div class=\"text-center\" style=\"margin-top: 25px\">\r\n      <dx-button (click)=\"thayThe($event)\" text=\"Thay thế toàn bộ\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"themTiep($event)\" text=\"Thêm tiếp\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n  \r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/vat/components/import-invoices/import-invoices.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/vat/components/import-invoices/import-invoices.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".import-invoices .dx-texteditor{border-radius:0;display:inline-block;margin-right:8px;height:28px;max-height:32px}.import-invoices .select-file .field>div{display:inline-block;vertical-align:middle}.import-invoices .select-file{width:100%;display:inline-block;margin:0}.import-invoices .select-file .field .label{width:90px;margin-right:10px;text-align:right}.import-invoices .select-file .field .value{width:35% !important}.import-invoices .select-file .field.field-first{display:inline-block}.import-invoices .select-file .field.field-first .value{width:calc(100% - 150px) !important}::ng-deep .import-invoices .select-file .field .dx-texteditor{width:100% !important}.support-link{top:-2px;position:relative;padding:5px 25px 7px 25px;background-color:#337ab7;border-color:#2d6da3;color:#fff;text-decoration:none}.support-link.mgr-15{margin-right:15px}.support-link img{margin-right:10px;margin-top:-2px}#auto-input{margin-right:75px}.note-template-import{margin-top:10px;margin-left:52px;display:inline-block;width:39%}.read-file{display:inline-block;margin-left:6px;position:relative;top:-10px}.note-footer{margin-top:10px}.note-footer p{margin-left:20px;margin-bottom:5px}.mau-vang{padding-right:15px;margin-right:10px;background-color:yellow}.mau-do{padding-right:15px;margin-right:10px;background-color:red}::ng-deep #gridImportInvoice{height:400px}::ng-deep .btn-right{padding-right:0}::ng-deep .btn-right .dx-button{float:right}::ng-deep .btn-right .dx-button:last-child{margin-right:8px !important}::ng-deep #gridImportInvoice .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit{width:40px;min-width:20px !important}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-validator.dx-datagrid-invalid .dx-highlight-outline::after{border:2px solid #d9534f}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-cell-modified .dx-highlight-outline::after{border-color:#fff}::ng-deep .form-import-invoices .inport-selector .dx-texteditor-input{padding-bottom:15px}\n"

/***/ }),

/***/ "./src/app/modules/vat/components/import-invoices/import-invoices.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/vat/components/import-invoices/import-invoices.component.ts ***!
  \*************************************************************************************/
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
            template: __webpack_require__(/*! ./import-invoices.component.html */ "./src/app/modules/vat/components/import-invoices/import-invoices.component.html"),
            styles: [__webpack_require__(/*! ./import-invoices.component.scss */ "./src/app/modules/vat/components/import-invoices/import-invoices.component.scss")]
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

/***/ "./src/app/modules/vat/components/index/index.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/vat/components/index/index.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n    <app-search-advanced (searchContentChange)=\"getSearch($event)\">\r\n    </app-search-advanced>\r\n  </div>\r\n  <div class=\"col-md-4\" style=\"max-height: 70px\">\r\n    <div class=\"list-header row\">\r\n      <div class=\"col-md-12\">\r\n        <div *ngIf=\"isListHeader\" class=\"pull-right button-panel\">\r\n          <dx-button (click)=\"lapHoaDon()\" [(icon)]=\"_translate.ICONS.plus\"\r\n            text=\"{{ 'CONTROLL.BUTTON.create_invoice' | translate }}\" type=\"default\"></dx-button>\r\n          <dx-button *ngIf=\"taxCodeThueHCM.includes(curentUser.account.tax_code)\" id=\"product3\" (click)=\"taiHDXml()\"\r\n            [(icon)]=\"_translate.ICONS.xml\" text=\"{{ 'CONTROLL.BUTTON.tai_hd_xml' | translate }}\" type=\"default\">\r\n          </dx-button>\r\n          <dx-button *ngIf=\"isAccessExportInv && configs.system_parameter.allow_keep_invoice_number\"\r\n            [(icon)]=\"_translate.ICONS.pencil\" (click)=\"kyHangLoat()\" text=\"{{ 'CONTROLL.BUTTON.sign' | translate }}\"\r\n            type=\"default\" [disabled]=\"!selectedRows.length\"></dx-button>\r\n            <!--  -->\r\n          <dx-menu [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\"\r\n            submenuDirection=\"auto\" (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n        </div>\r\n        <div *ngIf=\"!isListHeader\" class=\"pull-right button-panel\">\r\n          <dx-menu style=\"margin-right: 8px!important;\" [dataSource]=\"dataAddInvoiceBuy\" displayExpr=\"name\"\r\n            orientation=\"horizontal\" submenuDirection=\"auto\" (onItemClick)=\"itemExtrasClick($event)\"\r\n            cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n          <dx-button *ngIf=\"isAccessExportInv\" [(icon)]=\"_translate.ICONS.pencil\" (click)=\"kyHangLoat()\"\r\n            text=\"{{ 'CONTROLL.BUTTON.delete' | translate }}\" type=\"default\" [disabled]=\"!selectedRows.length\">\r\n          </dx-button>\r\n          <dx-menu [dataSource]=\"data_extras_invoice_buy\" displayExpr=\"name\" orientation=\"horizontal\"\r\n            submenuDirection=\"auto\" (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerVat\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [showBorders]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\"\r\n  [columnAutoWidth]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n  (onContentReady)=\"onContentReady($event)\">\r\n  <!-- <dxo-scrolling mode=\"virtual\"></dxo-scrolling> -->\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\">\r\n  </dxo-selection>\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"vat\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <!-- Số hóa đơn -->\r\n  <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\"\r\n    caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n    alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\" sortOrder=\"desc\" [sortIndex]=\"1\">\r\n  </dxi-column>\r\n  <!-- Mã số đơn hàng -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_the_order\" dataField=\"the_order\"\r\n    caption=\"{{ 'CONTROLL.LABEL.the_order_no_code' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_phieu}}\"\r\n    alignment=\"left\">\r\n  </dxi-column>\r\n  <!-- Số phiếu -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"receipts_no\"\r\n    caption=\"{{ 'GRID.INVOICE.receipts_no' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_phieu}}\"\r\n    alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <!-- Mẫu số, ký hiệu -->\r\n  <dxi-column cellTemplate=\"templateCode\"\r\n    caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Ngày hóa đơn -->\r\n  <dxi-column dataField=\"invoice_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n    format=\"dd/MM/yyyy\" sortOrder=\"desc\" [sortIndex]=\"0\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Người chuyển -->\r\n  <dxi-column *ngIf=\"isEFY\" dataField=\"export_user\" caption=\"{{ 'CONTROLL.LABEL.transferer' | translate }}\"\r\n    alignment=\"left\" minWidth=\"150\">\r\n  </dxi-column>\r\n  <!-- Mã số thuế -->\r\n  <dxi-column dataField=\"buyer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <!-- Tên khách hàng -->\r\n  <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\" alignment=\"left\"\r\n    minWidth=\"200\">\r\n  </dxi-column>\r\n  <!-- Số đơn vận -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_transport_number_from_product\" dataField=\"transport_number\"\r\n    caption=\"{{ 'GRID.INVOICE_DETAILS.transport_number' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.transport_number}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <!-- Thành tiền -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"amount_string\"\r\n    caption=\"{{ 'GRID.INVOICE_DETAILS.amount' | translate }}\" alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.thanh_tien}}\">\r\n  </dxi-column>\r\n  <!-- Tiền thuế -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"total_amount_vat_string\"\r\n    caption=\"{{ 'GRID.INVOICE_DETAILS.amount_vat' | translate }}\" alignment=\"right\"\r\n    headerCellTemplate=\"titleHeaderTemplate\" minWidth=\"{{_translate.GRID_WIDTH.thanh_tien}}\">\r\n  </dxi-column>\r\n  <!-- Tổng tiền -->\r\n  <dxi-column dataField=\"total_payment_string\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\"\r\n    alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\" minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\">\r\n  </dxi-column>\r\n  <!-- Trạng thái thanh toán -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.check_payment_status\" cellTemplate=\"viewPaymentStatus\"\r\n    caption=\"{{ 'GRID.INVOICE.payment_status' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\"\r\n    alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Trạng thái gửi CQT -->\r\n  <dxi-column *ngIf=\"isTT78\" cellTemplate=\"statusSendTax\" caption=\"Trạng thái gửi CQT\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Email, trạng thái hóa đơn -->\r\n  <dxi-column cellTemplate=\"actionEmail\" caption=\"{{ 'GRID.INVOICE.send_email_status' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Chức năng -->\r\n  <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.template_code }}</p>\r\n    <p>{{ d.data.invoice_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n        *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n    <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name ||\r\n      _translate.GRID.INVOICE.invoice_wait_for_sign }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionEmail'\">\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status !='GIU_SO'\" class=\"chua-gui-khach-hang gach-chan\"\r\n      (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.un_sent' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'GUI_LOI'\" style=\"color: red;\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.send_mail_error' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status =='GIU_SO'\" class=\"cho-ky\"\r\n      (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_sign' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_GUI'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_it' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_NHAN'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.received' | translate }}</a>\r\n    <p *ngIf=\"!d.data.send_email_status\" href=\"javascript:void(0)\">{{ trangthaihoadon(d.data) }} <a\r\n        *ngIf=\"trangthaihoadon(d.data) == 'Lỗi ký HD' || trangthaihoadon(d.data) == 'Signed error'\" class=\"gach-chan\"\r\n        (click)=\"editNotSelect(d.data)\" href=\"javascript:void(0)\">({{ 'GRID.INVOICE.re_sign' | translate }})</a></p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_GUI_CQT' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Đã gửi để cấp mã</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_CAP' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Đã cấp mã</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'KHONG_DU_DK_CAP_MA' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\" style=\"color: red;\" (click)=\"LydoKTiepNhan(d.data)\">Không đủ ĐK cấp mã</a>\r\n\r\n    <a *ngIf=\"d.data.send_department_status == 'CHUA_GUI_CQT' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Chưa gửi CQT</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_GUI_CQT' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">Đã gửi CQT</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_TIEP_NHAN' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\">CQT đã tiếp nhận</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'KHONG_HOP_LE' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n      href=\"javascript:void(0)\" style=\"color: red;\" (click)=\"LydoKTiepNhan(d.data)\">CQT kiểm tra không hợp lệ </a>\r\n  </div>\r\n  <!-- Trạng thái thanh toán -->\r\n  <div *dxTemplate=\"let d of 'viewPaymentStatus'\">\r\n    <a href=\"javascript:void(0)\">{{ trangthaithanhtoan(d.data) }}</a>\r\n  </div>\r\n  <!--  -->\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <a *ngIf=\"d.data.invoice_files.length>0\" title=\"{{_translate.CONTROLL.BUTTON.view_attach_file}}\"\r\n      class=\"attachIcon actionIcon\" (click)=\"viewAttachFile(d.data)\" href=\"javascript:void(0)\"></a>\r\n    <div class=\"dropdown\">\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.extend}}\" class=\"morongIcon actionIcon\" (click)=\"myFunction(d.data.id)\"\r\n        href=\"javascript:void(0)\"></a>\r\n      <div [id]=\"d.data.id\" class=\"dropdown-content\"\r\n        [ngClass]=\"{'last-drodown':( pageSize - 1 == d.rowIndex || pageSize - 2 == d.rowIndex || pageSize - 3 == d.rowIndex) && pageSize > 4, 'small-grid': pageSize < 5}\">\r\n        <a *ngIf=\"isAccessExportInv && configs.system_parameter.allow_keep_invoice_number\" (click)=\"kyHangLoat(d.data)\"\r\n          href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.sign' | translate }} <i\r\n            [class]=\"_translate.ICONS.pencil\"></i></a>\r\n        <a (click)=\"inChuyenDoi(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.print_conversion' | translate }}\r\n          <i [class]=\"_translate.ICONS.print\"></i></a>\r\n        <a (click)=\"copy(d.data)\" href=\"javascript:void(0)\">{{'CONTROLL.BUTTON.copy' | translate}}\r\n          <i [class]=\"_translate.ICONS.copy\"></i></a>\r\n        <a *ngIf=\"configs.system_parameter.delivery_bill_print\" (click)=\"inPXK(d.data)\" href=\"javascript:void(0)\">{{\r\n          'CONTROLL.BUTTON.delivery_bill_print' | translate }}\r\n          <i [class]=\"_translate.ICONS.print\"></i></a>\r\n        <a *ngIf=\"configs.system_parameter.display_delivery_information\" (click)=\"inBBTraHang(d.data)\"\r\n          href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.delivery_record' | translate }}\r\n          <i [class]=\"_translate.ICONS.print\"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" cssClass=\"dxi-total-payment-total_payment_string\" [customizeText]=\"customizeText\" showInColumn=\"total_payment_string\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 35, 50, 100]\" [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n\r\n<app-download-pdf></app-download-pdf>"

/***/ }),

/***/ "./src/app/modules/vat/components/index/index.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/vat/components/index/index.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}.last-drodown{bottom:30px}.small-grid{position:fixed  !important;right:39px !important}::ng-deep #gridContainerVat .dx-cell-focus-disabled{overflow:visible !important}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/vat/components/index/index.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/vat/components/index/index.component.ts ***!
  \*****************************************************************/
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
/* harmony import */ var _keep_number_keep_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../keep-number/keep-number.component */ "./src/app/modules/vat/components/keep-number/keep-number.component.ts");
/* harmony import */ var _send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../send-invoices/send-invoices.component */ "./src/app/modules/vat/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var _import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../import-invoices-dt/import-invoices-dt.component */ "./src/app/modules/vat/components/import-invoices-dt/import-invoices-dt.component.ts");
/* harmony import */ var _sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sign-many/sign-many.component */ "./src/app/modules/vat/components/sign-many/sign-many.component.ts");
/* harmony import */ var _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/modules/vat-shared/components/view-attach-file/view-attach-file.component */ "./src/app/shared/modules/vat-shared/components/view-attach-file/view-attach-file.component.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/components/download-pdf/download-pdf.component */ "./src/app/shared/components/download-pdf/download-pdf.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
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
    function IndexComponent(authService, vatService, modalService, modalImportService, router, route, translate, socketService, spinner, sanitizer, invoiceService, vPreviewInvService) {
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
        this.sanitizer = sanitizer;
        this.invoiceService = invoiceService;
        this.vPreviewInvService = vPreviewInvService;
        this.selectedRows = [];
        this.selectedItems = [];
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
        this.objStatusBtn = {};
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.invoices = [];
        this.isExportFailed = false;
        this.showCustomButton = true;
        this.fileArray = [];
        this.dataJoin = [];
        this.customizeText = function (url) {
            _this.invoiceService.handleTotalGrid(url.value, _this.objStatusBtn, _this.dataGrid);
            return '';
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.curentUser = this.authService.getCurrentUser();
        translate.use(this._language);
        this.objPXK = {
            id: 'IN_PXK',
            name: this._translate.CONTROLL.BUTTON.delivery_bill_print,
            icon: this._translate.ICONS.print
        };
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
                        name: this._translate.CONTROLL.BUTTON.import_invoice_from_excel,
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
        if (this.configs.system_parameter.delivery_bill_print)
            this.extras[0].items.push(this.objPXK);
        if (!this.taxCodeThueHCM.includes(this.curentUser.account.tax_code)) {
            this.extras[0].items.push({ id: "TAI_HD_XML", name: this._translate.CONTROLL.BUTTON.tai_hd_xml, icon: this._translate.ICONS.xml });
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
            var _lst = this.vatService.getAll(this.loaiHoaDon, params);
            this.dataSource.store = _lst;
        }
        else {
            this.dataSource.store = this.vatService.getAll(this.loaiHoaDon);
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
                        // this.router.navigate(['system/vat-invoice/create'], { queryParams: { code: this.loaiHoaDon } });
                        {
                            this.router.navigate(['system/vat-invoice/create']);
                        }
                        else {
                            if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.KPTQ07)
                                this.router.navigate(['system/non-tariff-invoice/create']);
                            else if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.GTTT02)
                                this.router.navigate(['system/sale-invoice/create']);
                        }
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
                            if (rs.status == 'success') {
                                if (rs.data.invoice) {
                                    rs.data.invoice.id = null;
                                    rs.data.invoice.origin_id = null;
                                    rs.data.invoice.adjustment_type = '1';
                                    rs.data.invoice.adjustment_object = null;
                                    rs.data.invoice.adjustment_form = null;
                                    rs.data.invoice.refuse_reason = null;
                                    rs.data.invoice.destroy_reason = null;
                                    rs.data.invoice.destroy_date = null;
                                    rs.data.invoice.invoice_number = null;
                                    rs.data.invoice.invoice_date = null;
                                    rs.data.invoice.approve_status = null;
                                    rs.data.invoice.status = rs.data.invoice.status == 'DA_XUAT' ? 'GHI_TAM' : rs.data.invoice.status;
                                    rs.data.invoice.updated_at = null;
                                    rs.data.invoice.user_id = null;
                                    rs.data.invoice.van_id = null;
                                    rs.data.invoice.invoice_order = null;
                                    rs.data.invoice.status_order = null;
                                    rs.data.invoice.doc_relate_date = null;
                                    rs.data.invoice.doc_relate_symbol = null;
                                    rs.data.invoice.note_view_on_invoice = null;
                                    rs.data.invoice.send_department_status = null;
                                    rs.data.invoice.extend_json_invoice = null;
                                    rs.data.invoice.is_outside_process = false;
                                    rs.data.invoice.other_id = null;
                                    rs.data.invoice.verify_code = null;
                                    if (rs.data.invoice.invoice_options && rs.data.invoice.invoice_options.length > 0) {
                                        rs.data.invoice.invoice_options.forEach(function (item) {
                                            delete item['id'];
                                            delete item['invoice_id'];
                                        });
                                    }
                                    _this.vatService.data = rs.data.invoice;
                                    _this.vatService.isCopy = true;
                                }
                                if (_this.loaiHoaDon === '01GTKT') {
                                    _this.router.navigate(['system/vat-invoice/create']);
                                }
                                else {
                                    if (_this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.KPTQ07)
                                        _this.router.navigate(['system/non-tariff-invoice/create']);
                                    else if (_this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.GTTT02)
                                        _this.router.navigate(['system/sale-invoice/create']);
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.edit = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, rowData, _hdDaXuat, oInvoice, invDefault_1, invCompare, isCheckAllEquals, isExistOther, arrStatusInv, arrStatusItem_1, result;
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
                        rowData = null;
                        if (data) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(data.status) == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusInv.DaXuat)
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                            else {
                                if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(data.status) == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusInv.GhiTam && _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(data.send_department_status) == 'KHONG_DU_DK_CAP_MA')
                                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Không sửa được hóa đơn không đủ điều kiện cấp mã", 'error');
                                else
                                    rowData = data;
                            }
                        }
                        else {
                            if (this.selectedItems.length > 0) {
                                if (this.selectedItems.length == 1)
                                    rowData = this.selectedItems[0];
                                else {
                                    _hdDaXuat = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusInv.DaXuat; })[0];
                                    oInvoice = this.selectedItems.filter(function (p) { return p.send_department_status; })[0];
                                    if (_hdDaXuat || oInvoice) {
                                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                                        return [2 /*return*/];
                                    }
                                    invDefault_1 = this.selectedItems[0];
                                    invCompare = this.selectedItems.filter(function (p) { return p.invoice_release_id != invDefault_1.invoice_release_id; })[0];
                                    if (invCompare) {
                                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.same_release_invoice, 'error');
                                        return [2 /*return*/];
                                    }
                                    isCheckAllEquals = this.selectedItems.every(function (item) { return item.template_id == _this.selectedItems[0].template_id; });
                                    if (!isCheckAllEquals) {
                                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.THONG_TIN.chon_hoa_don_cung_mau, 'error');
                                        return [2 /*return*/];
                                    }
                                    isExistOther = this.selectedItems.find(function (item) { return item.adjustment_type != 1; });
                                    if (isExistOther) {
                                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.THONG_TIN.cho_phep_sua_hoa_don_goc, 'error');
                                        return [2 /*return*/];
                                    }
                                    arrStatusInv = ["GIU_SO", "GHI_TAM"];
                                    arrStatusItem_1 = this.selectedItems.map(function (obj) { return obj.status; });
                                    result = arrStatusInv.every(function (val) { return arrStatusItem_1.includes(val); });
                                    if (result) {
                                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.same_status_invoice, 'error');
                                        return [2 /*return*/];
                                    }
                                    this.openImportForm(rowData);
                                }
                            }
                        }
                        if (rowData) {
                            // if (VStringService._getValueToString(rowData.number_of_vouchers) != '')
                            //   this.openImportForm(rowData);
                            // else {
                            if (this.isTT78 && rowData.xml_type != '3' && rowData.status == 'DA_XUAT' && Number.parseInt(rowData.invoice_number) > 0) {
                                if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.adjustment_type) == 5) {
                                    this.router.navigate(["/system/handle-invoice/edit-adjust/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)], { queryParams: { status: 'viewInvTT32' } });
                                }
                                else if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.adjustment_type) == 3) {
                                    this.router.navigate(["/system/handle-invoice/edit-replace/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)], { queryParams: { status: 'viewInvTT32' } });
                                }
                                else {
                                    if (this.loaiHoaDon === '01GTKT') {
                                        this.router.navigate(["/system/vat-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)], { queryParams: { status: 'viewInvTT32' } });
                                    }
                                    else {
                                        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.KPTQ07)
                                            this.router.navigate(["/system/non-tariff-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)], { queryParams: { status: 'viewInvTT32' } });
                                        else if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.GTTT02)
                                            this.router.navigate(["/system/sale-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)], { queryParams: { status: 'viewInvTT32' } });
                                    }
                                }
                            }
                            else {
                                if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.adjustment_type) == 5) {
                                    if (this.loaiHoaDon === '01GTKT')
                                        this.router.navigate(["/system/handle-invoice/edit-adjust/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)]);
                                    else
                                        this.router.navigate(["/system/handle-invoice/edit-sale-adjust/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)]);
                                }
                                else if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.adjustment_type) == 3) {
                                    if (this.loaiHoaDon === '01GTKT')
                                        this.router.navigate(["/system/handle-invoice/edit-replace/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)]);
                                    else
                                        this.router.navigate(["/system/handle-invoice/edit-sale-replace/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)]);
                                }
                                else {
                                    if (this.loaiHoaDon === '01GTKT') {
                                        this.router.navigate(["/system/vat-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)]);
                                    }
                                    else {
                                        if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.KPTQ07)
                                            this.router.navigate(["/system/non-tariff-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)]);
                                        else if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.GTTT02)
                                            this.router.navigate(["/system/sale-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(rowData.id)]);
                                    }
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.openImportForm = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, _lst, subRoute;
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
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                        _lst = [];
                        if (data) {
                            _lst.push(data.id);
                        }
                        else {
                            _lst = this.selectedRows;
                        }
                        subRoute = this.vatService.getEditImportInvoice(_lst, '', this.loaiHoaDon).subscribe(function (res) {
                            _this.invoice_releases = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertDataToImportInvoice(res[0]);
                            // Hàng hóa dịch vụ
                            setTimeout(function () {
                                _this.select.products = res[1].data.products;
                                _this.hoaDonImportChoXuat = res[2].data.invoices.sort(function (itemA, itemB) {
                                    return moment__WEBPACK_IMPORTED_MODULE_12__(itemA.created_at, 'YYYY-MM-DD HH:mm:ss').valueOf() - moment__WEBPACK_IMPORTED_MODULE_12__(itemB.created_at, 'YYYY-MM-DD HH:mm:ss').valueOf();
                                });
                                _this.select.unit_codes = res[3].data.DM_DON_VI_TINH;
                                _this.select.select_provisions_on_accounts = res[3].data.DM_DINH_KHOAN;
                                _this.select.payment_method_names = res[3].data.DM_HINH_THUC_THANH_TOAN;
                                _this.select.vats = res[3].data.DM_TY_LE_VAT;
                                _this.templatesTT78 = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertTemplatesToInvoiceResolver(res[5]).filter(function (item) { return item.template_type !== 'HOA_DON_KHOI_TAO_TU_MAY_TINH_TIEN' && item.template_type !== 'PHIEU_THU_MAY_TINH_TIEN'; });
                                _this.hoaDonImportChoXuat.forEach(function (invoice) {
                                    invoice.invoice_products.forEach(function (row) {
                                        if (row.product_code) {
                                            var _obj = _this.select.products.filter(function (p) { return p.code === row.product_code; })[0];
                                            if (!_obj) {
                                                var _objPush = {
                                                    code: row.product_code,
                                                    name: row.product_name,
                                                    mhvth: row.product_code + ': ' + row.product_name,
                                                };
                                                _this.select.products.push(_objPush);
                                            }
                                        }
                                    });
                                });
                                var search = _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_14__["InvoicesService"].getSearchParams(_this.route);
                                var initialState = {
                                    isHdGTGT: _this.loaiHoaDon === '01GTKT' ? true : false,
                                    invoice_releases: _this.invoice_releases,
                                    select: _this.select,
                                    hoaDonImportChoXuat: _this.hoaDonImportChoXuat,
                                    templatesTT78: _this.templatesTT78,
                                    infoDangKy: _this.infoDangKy,
                                    search: search,
                                    loaiHoaDon: _this.loaiHoaDon
                                };
                                _this.bsModalImportRef = _this.modalImportService.show(_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_8__["ImportInvoicesDtComponent"], {
                                    backdrop: 'static',
                                    keyboard: false,
                                    class: 'modal-lg full-width',
                                    initialState: initialState
                                });
                                var subModal = _this.modalImportService.onHide.subscribe(function () {
                                    if (_this.bsModalImportRef.content.successSaveItem) {
                                        _this.selectedItems = [];
                                        _this.selectedRows = [];
                                    }
                                    _this.loadList(_this.paramSearch);
                                    subModal.unsubscribe();
                                });
                            }, 10);
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                        }, function (err) {
                        }, function () {
                            subRoute.unsubscribe();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.editNotSelect = function (row) {
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
                        if (row.status === 'DA_XUAT') {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                        }
                        else {
                            if (row.adjustment_type == '5') {
                                if (this.loaiHoaDon === '01GTKT')
                                    this.router.navigate(["/system/handle-invoice/edit-adjust/" + row.id]);
                                else
                                    this.router.navigate(["/system/handle-invoice/edit-sale-adjust/" + row.id]);
                            }
                            else if (row.adjustment_type == '3') {
                                if (this.loaiHoaDon === '01GTKT')
                                    this.router.navigate(["/system/handle-invoice/edit-replace/" + row.id]);
                                else
                                    this.router.navigate(["/system/handle-invoice/edit-sale-replace/" + row.id]);
                            }
                            else {
                                if (this.loaiHoaDon == '01GTKT') {
                                    this.router.navigate(["/system/vat-invoice/" + row.id]);
                                }
                                else {
                                    if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.KPTQ07)
                                        this.router.navigate(["/system/non-tariff-invoice/" + row.id]);
                                    else
                                        this.router.navigate(["/system/sale-invoice/" + row.id]);
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.viewDetailInvoice = function (row) {
        if (this.isTT78 && row.xml_type != '3' && row.status == 'DA_XUAT' && Number.parseInt(row.invoice_number) > 0) {
            if (Number.parseInt(row.adjustment_type) == 5) {
                if (this.loaiHoaDon == '01GTKT')
                    this.router.navigate(["/system/handle-invoice/edit-adjust/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                else
                    this.router.navigate(["/system/handle-invoice/edit-sale-adjust/" + row.id], { queryParams: { status: 'viewInvTT32' } });
            }
            else if (Number.parseInt(row.adjustment_type) == 3) {
                if (this.loaiHoaDon == '01GTKT')
                    this.router.navigate(["/system/handle-invoice/edit-replace/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                else
                    this.router.navigate(["/system/handle-invoice/edit-sale-replace/" + row.id], { queryParams: { status: 'viewInvTT32' } });
            }
            else {
                if (this.loaiHoaDon === '01GTKT') {
                    this.router.navigate(["/system/vat-invoice/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                }
                else {
                    if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.KPTQ07)
                        this.router.navigate(["/system/non-tariff-invoice/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                    else
                        this.router.navigate(["/system/sale-invoice/" + row.id], { queryParams: { status: 'viewInvTT32' } });
                }
            }
        }
        else {
            if (Number.parseInt(row.adjustment_type) == 5) {
                if (row.is_adjustment_invoices || row.is_outside_process) {
                    if (row.is_adjustment_invoices)
                        this.router.navigate(["/system/handle-invoice/multiple-adjust/" + row.id]);
                    else
                        this.router.navigate(["/system/handle-invoice/adjust-without-software/" + row.id]);
                }
                else {
                    if (this.loaiHoaDon === '01GTKT')
                        this.router.navigate(["/system/handle-invoice/edit-adjust/" + row.id]);
                    else if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.KPTQ07)
                        this.router.navigate(["/system/handle-invoice/edit-non-tariff-adjust/" + row.id]);
                    else
                        this.router.navigate(["/system/handle-invoice/edit-sale-adjust/" + row.id]);
                }
            }
            else if (Number.parseInt(row.adjustment_type) == 3) {
                if (row.is_outside_process)
                    this.router.navigate(["/system/handle-invoice/replace-without-software/" + row.id]);
                else {
                    if (this.loaiHoaDon === '01GTKT')
                        this.router.navigate(["/system/handle-invoice/edit-replace/" + row.id]);
                    else if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.KPTQ07)
                        this.router.navigate(["/system/handle-invoice/edit-non-tariff-replace/" + row.id]);
                    else
                        this.router.navigate(["/system/handle-invoice/edit-sale-replace/" + row.id]);
                }
            }
            else {
                if (this.loaiHoaDon === '01GTKT') {
                    this.router.navigate(["/system/vat-invoice/" + row.id]);
                }
                else {
                    if (this.loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.KPTQ07)
                        this.router.navigate(["/system/non-tariff-invoice/" + row.id]);
                    else
                        this.router.navigate(["/system/sale-invoice/" + row.id]);
                }
            }
        }
    };
    IndexComponent.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, status_1, ids_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.hoadonbanra)];
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
                                    _this.vatService.delete(ids_1).subscribe(function (rs) {
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
                // if (_lst.length > 10) {
                //   Library.notify(this._translate.NOTIFY.only_up_to_100_invoices_can_be_selected_for_viewing, 'error');
                //   return false;
                // }
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
                    var data_2 = this.vatService.taodulieuInMau(ids, false);
                    data_2['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].cauhinhxemmau.hoadon;
                    this.vPreviewInvService.xemMau(data_2);
                }
                else {
                    // Xem nhiều trang 
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].typeCode.in_chuyen_doi_hd
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
            this.vatService.layCacHoaDonKySoHangLoat(ids, this.loaiHoaDon).subscribe(function (rs) {
                if (rs[0].status === 'success') {
                    var initialState = {
                        invoiceList: rs[0].data.invoices,
                        configs: rs[1].data.configs
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
        var sub = this.vatService.showToSendInvoice(id).subscribe(function (rs) {
            if (rs.status == 'success') {
                var initialState = {
                    invoice: rs.data.invoice,
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
                    var search = _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_14__["InvoicesService"].getSearchParams(_this.route);
                    var initialState = {
                        invoiceList: rs[0].data.invoices,
                        configs: rs[1].data.configs,
                        isHdGTGT: _this.loaiHoaDon === '01GTKT' ? true : false,
                        search: search
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
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.isExistFormRelease) {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
                            return [2 /*return*/];
                        }
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                        this.vatService.getImportInvoice(this.loaiHoaDon).subscribe(function (res) {
                            _this.invoice_releases = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertDataToImportInvoice(res[0]);
                            // Hàng hóa dịch vụ
                            _this.templatesTT78 = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertTemplatesToInvoiceResolver(res[4]).filter(function (item) { return item.template_type !== 'HOA_DON_KHOI_TAO_TU_MAY_TINH_TIEN' && item.template_type !== 'PHIEU_THU_MAY_TINH_TIEN'; });
                            _this.select.products = res[1].data.products;
                            ////
                            if (_this.configs.system_parameter.display_delivery_information) {
                                _this.invoice_releases = null;
                                _this.templatesTT78 = null;
                            }
                            ////
                            _this.select.unit_codes = res[2].data.DM_DON_VI_TINH;
                            _this.select.select_provisions_on_accounts = res[2].data.DM_DINH_KHOAN;
                            _this.select.payment_method_names = res[2].data.DM_HINH_THUC_THANH_TOAN;
                            _this.select.vats = res[2].data.DM_TY_LE_VAT;
                            var search = _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_14__["InvoicesService"].getSearchParams(_this.route);
                            var initialState = {
                                isHdGTGT: _this.loaiHoaDon === '01GTKT' ? true : false,
                                invoice_releases: _this.invoice_releases,
                                select: _this.select,
                                isAccessExportInv: _this.isAccessExportInv,
                                templatesTT78: _this.templatesTT78,
                                infoDangKy: _this.infoDangKy,
                                search: search,
                                loaiHoaDon: _this.loaiHoaDon
                            };
                            _this.bsModalImportRef = _this.modalImportService.show(_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_8__["ImportInvoicesDtComponent"], {
                                backdrop: 'static',
                                keyboard: false,
                                class: 'modal-lg full-width',
                                initialState: initialState
                            });
                            var subModal = _this.modalImportService.onHide.subscribe(function () {
                                if (_this.bsModalImportRef.content.successSaveItem) {
                                    _this.selectedItems = [];
                                    _this.selectedRows = [];
                                }
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
    IndexComponent.prototype.inPXK = function (data) {
        if (this.selectedItems.length > 0 || data) {
            var _lst = this.selectedItems.filter(function (p) { return p.adjustment_type != "7" && p.adjustment_type != "2"; });
            if (_lst.length > 0 || data) {
                if (this.selectedItems.length === 1) {
                    this.dataInfor = this.selectedItems[0];
                }
                else {
                    this.dataInfor = data;
                }
                var ids = [];
                if (data) {
                    if (data.adjustment_type == "7" || data.adjustment_type == "2") {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.not_print_transport, 'error');
                        return;
                    }
                    ids.push(data.id);
                }
                else {
                    ids = _lst.map(function (e) { return e.id; });
                }
                var dulieu = this.vatService.taodulieuInPXK(ids);
                dulieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].cauhinhxemmau.hoadon;
                this.vPreviewInvService.xemMau(dulieu);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.not_print_transport, 'error');
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    /* Tải file xml hóa đơn*/
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
    IndexComponent.prototype.inBBGiaoNhan = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems;
            var ids = [];
            ids = _lst.map(function (e) { return e.id; });
            var initialState = {
                items: ids,
                isXuatHD: false,
                hinhthucxuat: '',
                typeAction: 'BIEN_BAN_GIAO_NHAN',
                province_name: this.province_name
            };
            this.vPreviewInvService.hienthiFormViewMau(initialState);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
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
        else if (e.itemData.id === 'IN_PXK') {
            this.inPXK(null);
        }
        else if (e.itemData.id == "TAI_HD_XML") {
            this.taiHDXml();
        }
        else if (e.itemData.id == "TAI_HD_PDF") {
            this.taiHDPdf();
        }
        else if (e.itemData.id == "IN_BB_GIAO_NHAN") {
            this.inBBGiaoNhan();
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
        // this.ioSignature.unsubscribe();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_17__["DownloadPdfComponent"]),
        __metadata("design:type", _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_17__["DownloadPdfComponent"])
    ], IndexComponent.prototype, "downloadPdf", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/vat/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/vat/components/index/index.component.scss")]
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
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_19__["InvoiceService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_20__["ViewInvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/vat/components/invoice/invoice.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/vat/components/invoice/invoice.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"invoice-container\">\r\n    <!-- Thông tin trên hóa đơn -->\r\n    <vat-form-invoice [dataSource]=\"dataSource\" [invoice_products]=\"invoice_products\" [formatter]=\"formatter\"\r\n      [frmData]=\"frmData\" [_objTemplateSelect]=\"_objTemplateSelect\" [_oTemplateTT78]=\"_oTemplateTT78\"\r\n      [extentionGrid]=\"extentionGrid\" (onInvoiceCurrent)=\"onInvoiceCurrent($event)\"\r\n      (onFormChange)=\"getDataInChildForm($event)\" (onTemplateChange)=\"onTemplateChange($event)\"\r\n      [isShowButtonWaiteSign]=\"isShowButtonWaiteSign\" [isTT78]=\"isTT78\" [infoDangKy]=\"infoDangKy\"\r\n      [pkInvoiceSelectWaitSign]=\"pkInvoiceSelectWaitSign\" (onTemplateTypeChange)=\"onTemplateTypeChange($event)\"\r\n      (onTemplateTT78TypeChange)=\"onTemplateTT78TypeChange($event)\" [isRequired]=\"isRequired\" [ttDaXuatHoaDon]=\"ttDaXuatHoaDon\"></vat-form-invoice>\r\n    <!-- Hàng hóa trên hóa đơn -->\r\n    <vat-product-grip #child [dataSource]=\"dataSource\" [invoice_products]=\"invoice_products\"\r\n      [formDataInInvoice]=\"frmData\" [isTT78]=\"isTT78\" [formatter]=\"formatter\" [isHdGTGT]=\"isHdGTGT\"\r\n      [_objTemplateSelect]=\"_objTemplateSelect\" [_oTemplateTT78]=\"_oTemplateTT78\" [extentionGrid]=\"extentionGrid\"\r\n      (importExcel)=\"fillDataToForm($event)\">\r\n    </vat-product-grip>\r\n\r\n    <!-- Hiển thị tiền trên footer bảng hàng hóa hóa đơn GTGT -->\r\n    <div *ngIf=\"isHdGTGT\" class=\"table-footer\">\r\n      <!-- Tổng tiền -->\r\n      <div class=\"table-footer-1\">\r\n        <div class=\"vat amount-table-footer\">\r\n          <dx-number-box [value]=\"frmData.amount_after_vat\" step=\"0\" [format]=\"formatter.tong_tien\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <!-- Tiền thuế -->\r\n      <div class=\"table-footer-2\">\r\n        <div class=\"vat amount-vat-table-footer\">\r\n          <dx-number-box [value]=\"frmData.total_amount_vat\" step=\"0\" [format]=\"formatter.tien_thue\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <!-- Thành tiền -->\r\n      <div class=\"table-footer-3\">\r\n        <div class=\"vat amount-after-vat-table-footer\">\r\n          <dx-number-box [value]=\"frmData.amount\" step=\"0\" [format]=\"formatter.thanh_tien\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <!-- Thành tiền chưa chiết khấu -->\r\n      <div class=\"table-footer-4\">\r\n        <div class=\"vat amount-table-footer\">\r\n          <dx-number-box [value]=\"frmData.amount_without_discount\" step=\"0\" [format]=\"formatter.thanh_tien_chua_ck\"\r\n            [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Hiển thị tiền trên footer bảng hàng hóa hóa đơn bán hàng -->\r\n    <div *ngIf=\"!isHdGTGT\" class=\"table-footer\">\r\n      <!-- Tổng tiền -->\r\n      <div class=\"table-footer-1\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-table-footer\" dataField=\"amount_after_vat\" editorType=\"dxNumberBox\"\r\n              [editorOptions]=\"{format: formatter.thanh_tien, disabled: true, step:'0'}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n      <!-- Thành tiền -->\r\n      <div class=\"table-footer-3\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-after-vat-table-footer\" dataField=\"amount\" editorType=\"dxNumberBox\"\r\n              [editorOptions]=\"{format: formatter.tong_tien, disabled: true, step:'0'}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n    </div>\r\n    <dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n      [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n      <div *dxTemplate=\"let data of 'content'\">\r\n        <p style=\"margin-bottom: 35px;\">{{ _translate.CONFIRM.update_customer }}</p>\r\n        <div class=\"pull-right\">\r\n          <dx-button text=\"{{ _translate.CONTROLL.LABEL.update }}\" type=\"default\"></dx-button>\r\n          <dx-button text=\"{{ _translate.CONTROLL.BUTTON.cancel }}\" type=\"default\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </dx-popup>\r\n    <!-- vùng chọn file -->\r\n    <div class=\"row after-table\">\r\n      <div class=\"col-md-5\">\r\n        <file-upload-multiple [fileData]=\"fileData\" (fileChange)=\"getFileData($event)\"></file-upload-multiple>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <div\r\n          *ngIf=\"((invoicereleaseTempt && invoicereleaseTempt.template_type!='HOA_DON_VE_MAY_BAY' && invoicereleaseTempt.template_type!='HOA_DON_VE_MAY_BAY_THU_TIEN' && invoicereleaseTempt.template_type!='HOA_DON_VE_MAY_BAY_HOAN_TIEN') \r\n        ||(invoiceTemplateTT78 && invoiceTemplateTT78.template_type!='HOA_DON_VE_MAY_BAY' && invoiceTemplateTT78.template_type!='HOA_DON_VE_MAY_BAY_THU_TIEN' && invoiceTemplateTT78.template_type!='HOA_DON_VE_MAY_BAY_HOAN_TIEN') )\"\r\n          class=\"vat money-pull-right\">\r\n          <!-- Cộng tiền hàng nguyên tệ -->\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.on_currency_amount}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.on_currency_amount\" tabIndex=\"-1\" format=\"0,###\"\r\n                [disabled]=\"!frmData.auto_value\" step=\"0\" (onValueChanged)=\"onNumberChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Thành tiền -->\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount\" tabIndex=\"-1\" [format]=\"formatter.thanh_tien\"\r\n                [disabled]=\"!frmData.auto_value\" step=\"0\" (onValueChanged)=\"onNumberChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Cộng chiết khấu -->\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_amount_discount}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_discount\" tabIndex=\"-1\" step=\"0\"\r\n                [format]=\"formatter.tien_chiet_khau\" (onValueChanged)=\"onNumberChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tiền thuế GTGT (5%) -->\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat5}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat5\" tabIndex=\"-1\" step=\"0\" [format]=\"formatter.tien_thue\"\r\n                [disabled]=\"!frmData.auto_value\" (onValueChanged)=\"onNumberChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tiền thuế GTGT (8%) -->\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat8}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat8\" tabIndex=\"-1\" step=\"0\" [format]=\"formatter.tien_thue\"\r\n                [disabled]=\"!frmData.auto_value\" (onValueChanged)=\"onNumberChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tiền thuế GTGT (10%) -->\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat10}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat10\" tabIndex=\"-1\" step=\"0\" [format]=\"formatter.tien_thue\"\r\n                [disabled]=\"!frmData.auto_value\" (onValueChanged)=\"onNumberChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tiền thuế GTGT (Khác) -->\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat_other}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat_other\" tabIndex=\"-1\" step=\"0\" [format]=\"formatter.tien_thue\"\r\n                [disabled]=\"!frmData.auto_value\" (onValueChanged)=\"onNumberChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Phí bảo vệ môi trường -->\r\n          <div *ngIf=\"configs.system_parameter.environmental_fee\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">Phí bảo vệ môi trường</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.environmental_fee\" tabIndex=\"-1\" step=\"0\" [format]=\"formatter.tong_tien\"\r\n                (onKeyDown)=\"keyDown($event)\" (onValueChanged)=\"changeEnvironmentalFee()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Lệ phí cấp GCN đăng kiểm -->\r\n          <div *ngIf=\"((invoicereleaseTempt && invoicereleaseTempt.template_type==='HOA_DON_DANG_KIEM')\r\n          || (invoiceTemplateTT78 && invoiceTemplateTT78.template_type==='HOA_DON_DANG_KIEM'))\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.fees}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.registry_fee\" tabIndex=\"-1\" step=\"0\" [format]=\"formatter.tong_tien\"\r\n                (onKeyDown)=\"keyDown($event)\" (onValueChanged)=\"onNumberTicketChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tiền phí khác -> other_fee -->\r\n          <div *ngIf=\"((invoicereleaseTempt && invoicereleaseTempt.template_type==='HOA_DON_XANG_DAU') \r\n          || (invoiceTemplateTT78 && invoiceTemplateTT78.template_type==='HOA_DON_XANG_DAU'))\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.money_other}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.other_fee\" tabIndex=\"-1\" step=\"0\" [format]=\"formatter.tong_tien\"\r\n                (onKeyDown)=\"keyDown($event)\" (onValueChanged)=\"onNumberTicketChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Thuế khác -->\r\n          <div\r\n            *ngIf=\"((invoicereleaseTempt && (invoicereleaseTempt.template_type=='HOA_DON_VE_MAY_TONG_HOP' || invoicereleaseTempt.template_type=='HOA_DON_VE_MAY_BAY_CHUNG' || invoicereleaseTempt.template_type=='HOA_DON_VE_MAY_BAY_HOAN_VE')) || (invoiceTemplateTT78 && (invoiceTemplateTT78.template_type=='HOA_DON_VE_MAY_TONG_HOP' || invoiceTemplateTT78.template_type=='HOA_DON_VE_MAY_BAY_CHUNG' || invoiceTemplateTT78.template_type=='HOA_DON_VE_MAY_BAY_HOAN_VE')))\"\r\n            class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.othertax}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.other_tax\" [format]=\"formatter.tong_tien\" tabIndex=\"-1\" step=\"0\"\r\n                [disabled]=\"!frmData.auto_value\" (onKeyDown)=\"keyDown($event)\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tiền phí khác ->other_charge -->\r\n          <div\r\n            *ngIf=\"((invoicereleaseTempt && (invoicereleaseTempt.template_type=='HOA_DON_VE_MAY_TONG_HOP' || invoicereleaseTempt.template_type=='HOA_DON_VE_MAY_BAY_CHUNG' || invoicereleaseTempt.template_type=='HOA_DON_VE_MAY_BAY_HOAN_VE')) || (invoiceTemplateTT78 && (invoiceTemplateTT78.template_type=='HOA_DON_VE_MAY_TONG_HOP' || invoiceTemplateTT78.template_type=='HOA_DON_VE_MAY_BAY_CHUNG' || invoiceTemplateTT78.template_type=='HOA_DON_VE_MAY_BAY_HOAN_VE')))\"\r\n            class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.money_other}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.other_charge\" [format]=\"formatter.tong_tien\" tabIndex=\"-1\" step=\"0\"\r\n                (onKeyDown)=\"keyDown($event)\" [disabled]=\"!frmData.auto_value\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div\r\n          *ngIf=\"((invoicereleaseTempt && (invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY' || invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN' || invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN'))\r\n        || (invoiceTemplateTT78 && (invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY' || invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN' || invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN')))\"\r\n          class=\"vat money-pull-right\">\r\n          <!-- Phụ thu -->\r\n          <div\r\n            *ngIf=\"((invoicereleaseTempt && (invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN' || invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN'))\r\n          || (invoiceTemplateTT78 && (invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN' || invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN')))\"\r\n            class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.surcharge}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.other_charge\" [format]=\"formatter.tong_tien\" tabIndex=\"-1\" step=\"0\"\r\n                (onKeyDown)=\"keyDown($event)\" (onValueChanged)=\"onNumberTicketChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tiền phí khác ->total_other -->\r\n          <div *ngIf=\"((invoicereleaseTempt && invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY')\r\n          || (invoiceTemplateTT78 && invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY'))\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.money_other}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [format]=\"formatter.tong_tien\" tabIndex=\"-1\" step=\"0\" (onKeyDown)=\"keyDown($event)\"\r\n                [(value)]=\"frmData.total_other\" (onValueChanged)=\"onNumberTicketChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tiền phí khác->other_fee -->\r\n          <div *ngIf=\"((invoicereleaseTempt && invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN')\r\n          || (invoiceTemplateTT78 && invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN'))\"\r\n            class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.money_other}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [format]=\"formatter.tong_tien\" tabIndex=\"-1\" step=\"0\" (onKeyDown)=\"keyDown($event)\"\r\n                [(value)]=\"frmData.other_fee\" (onValueChanged)=\"onNumberTicketChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Phí hoàn vé -->\r\n          <div\r\n            *ngIf=\"((invoicereleaseTempt && (invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN' || invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY'))\r\n          || (invoiceTemplateTT78 && (invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN' || invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY')))\"\r\n            class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.refund_fee}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.money_ticket_return\" [format]=\"formatter.tong_tien\" tabIndex=\"-1\"\r\n                step=\"0\" (onKeyDown)=\"keyDown($event)\" (onValueChanged)=\"onNumberTicketChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tổng tiền vé sau thuế -->\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_fare_after_tax}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.total_ticket_with_vat\" [format]=\"formatter.tong_tien\" tabIndex=\"-1\"\r\n                step=\"0\" (onKeyDown)=\"keyDown($event)\" [disabled]=\"!frmData.auto_value\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            *ngIf=\"((invoicereleaseTempt && (invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN' || invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN'))\r\n          || (invoiceTemplateTT78 && (invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN' || invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN')))\"\r\n            class=\"dx-field\">\r\n            <div *ngIf=\"((invoicereleaseTempt && (invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN'))\r\n            || (invoiceTemplateTT78 && (invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN')))\"\r\n              class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.othertax}}</div>\r\n            <div *ngIf=\"((invoicereleaseTempt && invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN')\r\n            || (invoiceTemplateTT78 && invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN'))\"\r\n              class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.othertaxair}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.other_tax\" [format]=\"formatter.tong_tien\" tabIndex=\"-1\" step=\"0\"\r\n                (onKeyDown)=\"keyDown($event)\" (onValueChanged)=\"onNumberTicketChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tiền phí khác -->\r\n          <div *ngIf=\"((invoicereleaseTempt && (invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN'))\r\n          || (invoiceTemplateTT78 && (invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN')))\"\r\n            class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.money_other}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [format]=\"formatter.tong_tien\" tabIndex=\"-1\" step=\"0\" (onKeyDown)=\"keyDown($event)\"\r\n                [(value)]=\"frmData.other_fee\" (onValueChanged)=\"onNumberTicketChange()\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tổng tiền vé -->\r\n          <div *ngIf=\"((invoicereleaseTempt && invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN')\r\n          || (invoiceTemplateTT78 && invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN'))\"\r\n            class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_fare}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.total_ticket\" [format]=\"formatter.tong_tien\" tabIndex=\"-1\" step=\"0\"\r\n                (onKeyDown)=\"keyDown($event)\" [disabled]=\"!frmData.auto_value\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tổng các khoản khác -->\r\n          <div *ngIf=\"((invoicereleaseTempt && invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN')\r\n          || (invoiceTemplateTT78 && invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_HOAN_TIEN'))\"\r\n            class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.total_other\" [format]=\"formatter.tong_tien\" tabIndex=\"-1\" step=\"0\"\r\n                (onKeyDown)=\"keyDown($event)\" [disabled]=\"!frmData.auto_value\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"((invoicereleaseTempt && (invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY' || invoicereleaseTempt.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN'))\r\n      || (invoiceTemplateTT78 && (invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY' || invoiceTemplateTT78.template_type==='HOA_DON_VE_MAY_BAY_THU_TIEN')))\"\r\n        class=\"col-md-12\" style=\"margin:10px 0 !important;\">\r\n        <!-- Phí dịch vụ bán vé -->\r\n        <h3 class=\"font-weight-bold\">{{ _translate.CONTROLL.LABEL.ticketing_service_fee}}</h3>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 pr-0 money-pull-right\">\r\n            <!-- Tiền phí dịch vụ bán vé -->\r\n            <div class=\"dx-field\">\r\n              <div style=\"width: 52%\" class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.ticketing_service_charge}}\r\n              </div>\r\n              <div style=\"width: 48%\" class=\"dx-field-value\">\r\n                <dx-number-box [(value)]=\"frmData.money_service_ticket\" format=\"#,###\" tabIndex=\"-1\" step=\"0\"\r\n                  (onValueChanged)=\"onVatChange()\">\r\n                </dx-number-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 pr-0 money-pull-right thue-suat-may-bay\" style=\"max-width: 23%\">\r\n            <!-- Thuế suất GTGT (%) -->\r\n            <div class=\"dx-field\">\r\n              <div style=\"width: 50%\" class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.tax_GTGT}}</div>\r\n              <div style=\"width: 50%\" class=\"dx-field-value\">\r\n                <dx-select-box [(value)]=\"frmData.vat_service_ticket\" displayExpr=\"name\" valueExpr=\"code\" tabIndex=\"-1\"\r\n                  [items]=\"select.vats\" (onValueChanged)=\"onVatChange()\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 pr-0 money-pull-right\" style=\"max-width: 19%\">\r\n            <!-- Tiền thuế -->\r\n            <div class=\"dx-field\">\r\n              <div style=\"width: 50%\" class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat}}</div>\r\n              <div style=\"width: 50%\" class=\"dx-field-value\">\r\n                <dx-number-box [(value)]=\"frmData.total_vat_service_ticket\" format=\"#,###\" tabIndex=\"-1\" step=\"0\"\r\n                  [disabled]=\"!frmData.auto_value\" (onValueChanged)=\"onNumberChange()\">\r\n                </dx-number-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 \" style=\"max-width: 33%\">\r\n            <div class=\"prt-1 money-pull-right\">\r\n              <!-- Tổng phí dịch vụ sau thuế -->\r\n              <div class=\"dx-field\" style=\"width: 395px\">\r\n                <div style=\"width: 44.3%\" class=\"dx-field-label\">{{\r\n                  _translate.CONTROLL.LABEL.total_after_tax_service_charge}}</div>\r\n                <div style=\"width: 55.7%\" class=\"dx-field-value\">\r\n                  <dx-number-box [(value)]=\"frmData.total_service_ticket_with_vat\" format=\"#,###\" tabIndex=\"-1\" step=\"0\"\r\n                    [disabled]=\"!frmData.auto_value\" (onValueChanged)=\"onNumberTicketChange()\">\r\n                  </dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Giảm trừ nghị định 92 -->\r\n      <div class=\"col-md-8\" style=\"margin-top:5px\">\r\n        <div *ngIf=\"frmData.is_exemption_decree\" style=\"display: inline-flex;margin-top:5px\">\r\n          <p style=\"margin-right: 5px;margin-top: 5px\">Đã giảm </p>\r\n          <dx-number-box [format]=\"formatter.tong_tien\" [(value)]=\"frmData.text_exemption_decree\"\r\n            [readOnly]=\"!frmData.auto_value\"></dx-number-box>\r\n          <p style=\"margin-left: 5px;margin-top: 5px\"> tương ứng 30% mức tỷ lệ để tính thuế giá trị gia tăng theo Nghị\r\n            quyết số 406/NQ-UBTVQH15</p>\r\n        </div>\r\n      </div>\r\n      <!-- Giảm trừ nghị quyết 43 -->\r\n      <!-- Tỷ lệ % doanh thu -->\r\n      <div class=\"col-md-8\" style=\"margin-top:5px\">\r\n        <div *ngIf=\"frmData.is_resolution_43\" style=\"display: inline-flex;margin-top:5px\">\r\n          <p style=\"margin-right: 5px;margin-top: 5px\">Tỷ lệ % trên doanh thu </p>\r\n\r\n          <div class=\"toggle normal\" style=\"display: flex; align-items: center; margin-top: -6px;\">\r\n            <img id=\"link14\" style=\"cursor: pointer;padding-left: 2px;padding-right: 7px\"\r\n              src=\"assets\\img\\icons\\Icon_Information.png\" (click)=\"guideSales()\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n          </div>\r\n          <dx-popover target=\"#link14\" position=\"top\" [width]=\"350\" [(visible)]=\"isDisplayGuideSale\">\r\n            <div *dxTemplate=\"let data of 'content'\">\r\n              <p>- 1% : Phân phối, cung cấp hàng hóa dịch vụ</p>\r\n              <p>- 5% : Dịch vụ xây dựng không bao thầu nguyên vật liệu</p>\r\n              <p>- 3% : Sản xuất, vận tải, dịch vụ có gắn với hàng hóa, xây dựng có bao thầu nguyên vật liệu</p>\r\n              <p>- 2% : Hoạt động kinh doanh khác</p>\r\n            </div>\r\n          </dx-popover>\r\n\r\n          <dx-number-box [width]=\"50\" [(value)]=\"frmData.sales_percentage\"\r\n            (onValueChanged)=\"onChangeSalePercen($event)\"></dx-number-box>\r\n          <p style=\"margin-left: 5px;margin-top: 5px\"> %</p>\r\n        </div>\r\n      </div>\r\n      <!-- Đã giảm 20% -->\r\n      <div class=\"col-md-7\" style=\"margin-top:5px\">\r\n        <div *ngIf=\"frmData.is_resolution_43\" style=\"display: inline-flex;margin-top:5px\">\r\n          <p style=\"margin-right: 5px;margin-top: 5px\">Đã giảm </p>\r\n          <dx-number-box [format]=\"formatter.tong_tien\" [(value)]=\"frmData.money_resolution_43\"\r\n            [readOnly]=\"!frmData.auto_value\"></dx-number-box>\r\n          <p style=\"margin-left: 5px;margin-top: 5px\"> {{ _translate.THONG_TIN.tinh_thue_nq101}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-5\" style=\"margin-top: 10px\">\r\n        <div class=\"vat money-pull-right\">\r\n          <!-- Tổng tiền giảm trừ không chịu thuế -->\r\n          <div class=\"dx-field\" *ngIf=\"isHdGTGT\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_deduction_not_taxable}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.total_deduction_not_taxable\" [format]=\"formatter.tong_tien\" >\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tổng tiền giảm trừ khác -->\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.other_total_deduction}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.other_total_deduction\" [format]=\"formatter.tong_tien\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n          <!-- Tổng tiền sau thuế -->\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_after_vat}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.total_payment\" [format]=\"formatter.tong_tien\"\r\n                [disabled]=\"!frmData.auto_value\" tabIndex=\"-1\" step=\"0\" (onKeyDown)=\"keyDown($event)\"\r\n                (onValueChanged)=\"totalPaymentChange($event)\">\r\n              </dx-number-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <div class=\"vat total-payment-in-word\">\r\n          <!-- Số tiền bằng chữ -->\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_payment_in_word}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-text-box [(value)]=\"frmData.total_payment_in_word\" [disabled]=\"!frmData.auto_value\"></dx-text-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row button-action\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n          <!-- Xem trước hóa đơn -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" (click)=\"preview()\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.preview_invoice}}\" type=\"default\"></dx-button>\r\n          <!-- Xem hóa đơn -->\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"view()\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.view_invoice}}\" type=\"default\"></dx-button>\r\n          <!-- In chuyển đổi -->\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"inChuyenDoi()\" [(icon)]=\"this._translate.ICONS.print\"\r\n            [text]=\"inChuyenDoiText()\" type=\"default\"></dx-button>\r\n          <!-- Lý do từ chối -->\r\n          <dx-button disableDoubleClick *ngIf=\"isTuChoi\" (click)=\"xemlydotuchoi()\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"{{_translate.CONTROLL.BUTTON.reason_reject}}\" type=\"default\"></dx-button>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n          <!-- Trình ký -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !isAccessExportInv\" text=\"{{ _translate.CONTROLL.BUTTON.sign_approval}}\"\r\n            icon=\"assets\\img\\icons\\XuatFile.png\" (click)=\"eSubmit('TRINH_KY')\" type=\"default\" validationGroup=\"formData\"\r\n            [useSubmitBehavior]=\"true\"></dx-button>\r\n          <!-- Xuất hóa đơn -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !showTraLai && !showKyDuyet\" appScrollToInvalid\r\n            text=\"{{ _translate.CONTROLL.BUTTON.export_invoice}}\" [(icon)]=\"this._translate.ICONS.export_inv\"\r\n            (click)=\"eSubmit('XUAT',true)\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n          </dx-button>\r\n          <!-- Ghi tạm -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !showTraLai && !showKyDuyet\" appScrollToInvalid\r\n            text=\"{{ _translate.CONTROLL.BUTTON.save_temporary}}\" [(icon)]=\"this._translate.ICONS.save\"\r\n            (click)=\"eSubmit('GHI_TAM')\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\"\r\n            [disabled]=\"isDisable\">\r\n          </dx-button>\r\n          <!-- Tạo mới -->\r\n          <dx-button disableDoubleClick *ngIf=\"!showTraLai && !showKyDuyet\" text=\"{{ _translate.CONTROLL.BUTTON.create_new}}\"\r\n            [(icon)]=\"this._translate.ICONS.add_new\" (click)=\"handleAddNew()\" type=\"default\"></dx-button>\r\n          <!-- Trả lại -->\r\n          <dx-button *ngIf=\"showTraLai\" text=\"{{ _translate.CONTROLL.BUTTON.return}}\"\r\n            icon=\"assets\\img\\icons\\XuatFile.png\" (click)=\"traLai()\" type=\"default\"></dx-button>\r\n          <!-- Đóng -->\r\n          <dx-button *ngIf=\"!showTraLai\" appBackButton type=\"default\" [(icon)]=\"this._translate.ICONS.come_back\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n          <!-- Đóng -->\r\n          <dx-button *ngIf=\"showTraLai\" type=\"default\" [(icon)]=\"this._translate.ICONS.come_back\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.close}}\" (click)=\"dongtralai()\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/vat/components/invoice/invoice.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/vat/components/invoice/invoice.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container{padding-top:15px}.after-table{margin-top:10px}::ng-deep .vat.total-payment-in-word{margin-top:15px}::ng-deep .vat.total-payment-in-word input{color:#000000;font-weight:bold;text-align:right}.vat.total-payment-in-word .dx-field-label{width:12%}.vat.total-payment-in-word .dx-field-value{width:88% !important}::ng-deep .vat.money-pull-right input{text-align:right}::ng-deep .pr-0.money-pull-right input{text-align:right}::ng-deep .prt-1.money-pull-right input{text-align:right}.vat.money-pull-right .dx-field-label{width:45%}.vat.money-pull-right .dx-field-value{width:55% !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}.button-action{margin-top:18px}.table-footer{height:40px;background:#E3E3E3;padding-top:3px}.table-footer .table-footer-1{display:inline-block;width:109px;float:right}.table-footer .table-footer-2{display:inline-block;width:120px;margin-right:32px;float:right}.table-footer .table-footer-3{display:inline-block;width:150px;margin-right:90px;float:right}.table-footer .table-footer-4{display:inline-block;width:109px;margin-right:190px;float:right}.dx-field-value.dx-widget,.dx-field-value:not(.dx-widget)>.dx-widget{height:25px}.pr-0.dx-selectbox .dx-texteditor-input:-moz-read-only{padding-bottom:17px}.pr-0.dx-selectbox .dx-texteditor-input:read-only{padding-bottom:17px}::ng-deep .nd92Notify .modal-content{width:80%}::ng-deep .mauhoadon .modal-content{width:67%}::ng-deep .mauhoadon43 .modal-content{width:72%}::ng-deep .thue-suat-may-bay .dx-selectbox .dx-texteditor-input{padding-bottom:13px}::ng-deep .prv-s-invoice .modal-content{border:0px;border-radius:0px}::ng-deep .v-s-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/vat/components/invoice/invoice.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/vat/components/invoice/invoice.component.ts ***!
  \*********************************************************************/
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
/* harmony import */ var _product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-grip/product-grip.component */ "./src/app/modules/vat/components/product-grip/product-grip.component.ts");
/* harmony import */ var _form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-invoice/form-invoice.component */ "./src/app/modules/vat/components/form-invoice/form-invoice.component.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../send-invoices/send-invoices.component */ "./src/app/modules/vat/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
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


























var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(route, router, modalService, vatService, socketService, authService, cdRef, translate, customersService, confirmService, configsService, spinner, vPreviewInvService, customeModalService, invoiceService) {
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
        this.vPreviewInvService = vPreviewInvService;
        this.customeModalService = customeModalService;
        this.invoiceService = invoiceService;
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["InvoiceModel"](1);
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
        this.productCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_19__["pattern"].productCodePattern;
        this.isShowButtonWaiteSign = true;
        this.isTT78 = false;
        this.isPassNQ43 = false;
        this.isDisplayGuideSale = false;
        this.isRequired = false;
        /* Tổng tiền thanh toán */
        this.totalPaymentChange = function (e) {
            _this.onNumberChange();
            if (_this.frmData.auto_value)
                _this.frmData.amount_after_vat = _this.frmData.total_payment;
            var currency_code = _this.frmData.currency_code;
            if (_this.configs.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            var tien_chu = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].tienBangChu(Math.abs(e.value), _this.getFormatterToNumber(_this.formatter.tong_tien), currency_code, _this.configs.system_parameter.display_read_money_english); //Helper.money(e.value, currency_code);
            _this.frmData.total_payment_in_word = _this.invoiceService.docTienAm(e.value, tien_chu, _this.configs, _this.frmData.currency_code);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    InvoiceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat || (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam && this.frmData.send_department_status === 'KHONG_DU_DK_CAP_MA')
            || (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam && this.frmData.send_department_status === 'DA_GUI_CQT' && this.frmData.is_invoice_with_code)) {
            this.disablleScreen();
            this.cdRef.detectChanges();
        }
        this.setDataSessionStorage(this.frmData);
        /* Ẩn nghị định 92 */
        // if (!this.isHdGTGT) {
        //   if (this.configs.system_parameter.is_tb_nd92 === undefined) {
        //     const initialState = {
        //       typeNotify: "DOI_TUONG_GIAM_THUE",
        //     };
        //     this.bsModalRef = this.modalService.show(NotifyReduceTaxComponent, {
        //       backdrop: 'static',
        //       keyboard: false,
        //       class: 'nd92Notify modal-lg',
        //       initialState
        //     });
        //     const subModal = this.modalService.onHide.subscribe(() => {
        //       if (this.bsModalRef.content.successSaveItem == "DONG_Y") {
        //         this.configs.system_parameter.is_tb_nd92 = true;
        //       }
        //       else {
        //         this.configs.system_parameter.is_tb_nd92 = false;
        //       }
        //       let data = {
        //         config: {
        //           value: JSON.stringify(this.configs.system_parameter)
        //         }
        //       };
        //       this.configsService.update(this.configs.id.system_parameter, data).subscribe((response: any) => {
        //         if (response.status == "success") {
        //           this.configsService.getAll().subscribe((res) => {
        //             if (res.data && res.data.configs)
        //               this.authService.setConfigs(res.data.configs);
        //           });
        //           if (this.configs.system_parameter.is_tb_nd92) {
        //             const initialState = {
        //               typeNotify: "HANG_HOA_GIAM_THUE",
        //             };
        //             this.bsModalRef = this.modalService.show(NotifyReduceTaxComponent, {
        //               backdrop: 'static',
        //               keyboard: false,
        //               class: 'nd92Notify modal-lg',
        //               initialState
        //             });
        //             const subModal = this.modalService.onHide.subscribe(() => {
        //               if (this.bsModalRef.content.successSaveItem == "DONG_Y")
        //                 this.frmData.is_exemption_decree = true;
        //               else
        //                 this.frmData.is_exemption_decree = false;
        //               subModal.unsubscribe();
        //             });
        //           }
        //         } else {
        //         }
        //       }, err => { }, () => {
        //       });
        //       subModal.unsubscribe();
        //     });
        //   }
        //   else {
        //     if (this.configs.system_parameter.is_tb_nd92 && !this.frmData.id) {
        //       const initialState = {
        //         typeNotify: "HANG_HOA_GIAM_THUE",
        //       };
        //       this.bsModalRef = this.modalService.show(NotifyReduceTaxComponent, {
        //         backdrop: 'static',
        //         keyboard: false,
        //         class: 'nd92Notify modal-lg',
        //         initialState
        //       });
        //       const subModal = this.modalService.onHide.subscribe(() => {
        //         if (this.bsModalRef.content.successSaveItem == "DONG_Y")
        //           this.frmData.is_exemption_decree = true;
        //         else
        //           this.frmData.is_exemption_decree = false;
        //         subModal.unsubscribe();
        //       });
        //     }
        //   }
        // }
        var dateFromNQ43 = moment__WEBPACK_IMPORTED_MODULE_2__("01/07/2023", 'DD/MM/YYYY').format('YYYY-MM-DD');
        var invoiceDateNQ43 = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
        if (this.isPassNQ43)
            invoiceDateNQ43 = moment__WEBPACK_IMPORTED_MODULE_2__("01/07/2023", 'DD/MM/YYYY').format('YYYY-MM-DD');
        /* Nghị quyết số 43/2022/QH15 */
        if (!this.isHdGTGT && invoiceDateNQ43 >= dateFromNQ43) {
            if (this.configs.system_parameter.is_tb_nq43 === undefined) {
                var initialState = {
                    typeNotify: "DOI_TUONG_GIAM_THUE_NQ43",
                };
                this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_20__["NotifyReduceTaxComponent"], {
                    backdrop: 'static',
                    keyboard: false,
                    class: 'nd92Notify modal-lg',
                    initialState: initialState
                });
                var subModal_1 = this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem == "DONG_Y") {
                        _this.configs.system_parameter.is_tb_nq43 = true;
                    }
                    else {
                        _this.configs.system_parameter.is_tb_nq43 = false;
                    }
                    var data = {
                        config: {
                            value: JSON.stringify(_this.configs.system_parameter)
                        }
                    };
                    _this.configsService.update(_this.configs.id.system_parameter, data).subscribe(function (response) {
                        if (response.status == "success") {
                            _this.configsService.getAll().subscribe(function (res) {
                                if (res.data && res.data.configs)
                                    _this.authService.setConfigs(res.data.configs);
                            });
                            if (_this.configs.system_parameter.is_tb_nq43) {
                                var initialState_1 = {
                                    typeNotify: "DOI_TUONG_GIAM_THUE_NQ43",
                                };
                                _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_20__["NotifyReduceTaxComponent"], {
                                    backdrop: 'static',
                                    keyboard: false,
                                    class: 'nd92Notify modal-lg',
                                    initialState: initialState_1
                                });
                                var subModal_2 = _this.modalService.onHide.subscribe(function () {
                                    if (_this.bsModalRef.content.successSaveItem == "DONG_Y")
                                        _this.frmData.is_resolution_43 = true;
                                    else
                                        _this.frmData.is_resolution_43 = false;
                                    subModal_2.unsubscribe();
                                });
                            }
                        }
                        else {
                        }
                    }, function (err) { }, function () {
                    });
                    subModal_1.unsubscribe();
                });
            }
            else {
                if (this.configs.system_parameter.is_tb_nq43 && !this.frmData.id) {
                    var initialState = {
                        typeNotify: "DOI_TUONG_GIAM_THUE_NQ43",
                    };
                    this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_20__["NotifyReduceTaxComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'nd92Notify modal-lg',
                        initialState: initialState
                    });
                    var subModal_3 = this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalRef.content.successSaveItem == "DONG_Y")
                            _this.frmData.is_resolution_43 = true;
                        else
                            _this.frmData.is_resolution_43 = false;
                        subModal_3.unsubscribe();
                    });
                }
            }
        }
    };
    /* Disbale Form và bảng hàng hóa */
    InvoiceComponent.prototype.disablleScreen = function () {
        this.formInvoice.readonlyAllForm();
        this.productGrip.ttDaXuatHoaDon = true;
        this.ttDaXuatHoaDon = true;
    };
    InvoiceComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var status;
        if (!this.frmData.id && !this.frmData.invoice_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].processInv.ThemMoi;
        }
        if (this.frmData.id && !this.frmData.invoice_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam;
        }
        if (this.frmData.id && this.frmData.invoice_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.ChoKy;
        }
        var xmlInvoice = "";
        var isNewXml = 0;
        if (status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].processInv.ThemMoi) {
            if (!this.isTT78) {
                var sub_1 = this.vatService.ghiTam(this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss'); // moment(rs.data.invoice_date).format('DD/MM/YYYY');
                        _this.frmData.id = rs.data.id;
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
                                _this.xuLyKiFile(xmlInvoice, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_1.unsubscribe();
                });
            }
            else {
                var sub_2 = this.vatService.ghiTamTT78(this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss'); // moment(rs.data.invoice_date).format('DD/MM/YYYY');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        _this.frmData.id = rs.data.id;
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
                                _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_2.unsubscribe();
                });
            }
        }
        else if (status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam) {
            if (!this.isTT78) {
                var sub_3 = this.vatService.edit(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
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
                                _this.xuLyKiFile(xmlInvoice, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    sub_3.unsubscribe();
                });
            }
            else {
                var sub_4 = this.vatService.editTT78(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
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
                                _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    sub_4.unsubscribe();
                });
            }
        }
        else if (status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.ChoKy) {
            if (!this.isTT78) {
                var sub_5 = this.vatService.edit(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
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
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_5.unsubscribe();
                });
            }
            else {
                var sub_6 = this.vatService.editTT78(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
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
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                            }
                        }
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
        }
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
    InvoiceComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        }, 20);
        var sub = this.vatService.xuatHoaDon({
            id: this.frmData.id,
            xml_string: xml_string,
            invoice_files: this.frmData.invoice_files
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.disablleScreen();
                _this.fileData = _this.frmData.invoice_files;
                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.pkInvoiceCurrent) != "") {
                    _this.vatService.delete(_this.pkInvoiceCurrent).subscribe(function (rs) {
                    }, function (err) {
                    });
                }
                _this.isShowButtonWaiteSign = false;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                _this.isExportInvoice = true;
                _this.setDataSessionStorage(_this.frmData);
                /* Cập nhật lại thông tin theo NĐ 92 */
                if (!_this.isHdGTGT) {
                    if (_this.frmData.is_exemption_decree && !_this.configs.system_parameter.is_tb_nd92) {
                        _this.configs.system_parameter.is_tb_nd92 = true;
                        var data = {
                            config: {
                                value: JSON.stringify(_this.configs.system_parameter)
                            }
                        };
                        _this.configsService.update(_this.configs.id.system_parameter, data).subscribe(function (response) {
                            if (response.status == "success") {
                                _this.configsService.getAll().subscribe(function (res) {
                                    if (res.data && res.data.configs)
                                        _this.authService.setConfigs(res.data.configs);
                                });
                            }
                            else {
                            }
                        }, function (err) { }, function () {
                        });
                    }
                }
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
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.routeSub = this.route.data.subscribe(function (data) {
            // get cấu hình
            var danh_muc = _this.authService.getDMLocal();
            _this.configs = _this.authService.getConfigs();
            _this.infoDangKy = _this.authService.getInfoRegister();
            _this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(_this.configs.decimal_places_json);
            _this.frmData.display_currency = JSON.stringify(_this.configs.display_currency);
            _this.formatter.display_int = _this.configs.system_parameter.display_int;
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.select_provisions_on_accounts = danh_muc.DM_DINH_KHOAN ? danh_muc.DM_DINH_KHOAN.data : null;
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            var loaiHoaDon = data.type;
            if (loaiHoaDon === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].loaihoadon.GTKT01) {
                _this.isHdGTGT = true;
            }
            else {
                _this.isHdGTGT = false;
            }
            if (_this.infoDangKy) {
                if (_this.infoDangKy.status == "CHAP_NHAN")
                    _this.isTT78 = true;
            }
            if (_this.isTT78 == true && isViewTT32)
                _this.isTT78 = false;
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
                    _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
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
        var dataAfter = JSON.parse(JSON.stringify(dataForm));
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
        });
    };
    InvoiceComponent.prototype.khoiTaoKhiThemMoi = function () {
        var _this = this;
        // Khởi tạo thông tin hàng hóa
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: 'id',
            data: this.frmData.invoice_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_9___default.a({
            store: this.invoice_products
        });
        this.select.payment_method_names.some(function (item) {
            if (item.is_default) {
                _this.frmData.payment_method_name = item.code;
                var _obj = _this.select.payment_method_names.filter(function (p) { return p.code === item.code; })[0];
                if (_obj) {
                    _this.frmData.payment_method_view_name = _obj.name;
                }
            }
        });
        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.payment_method_name) === '') {
            this.frmData.payment_method_name = 'TMCK';
            this.frmData.payment_method_view_name = 'TM/CK';
        }
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
            }
        }
        this.frmData.currency_code = 'VND';
    };
    InvoiceComponent.prototype.khoiTaoKhiSua = function (data) {
        var _this = this;
        // Khởi tạo thông tin hàng hóa
        var _lst = this.frmData.setInvoice_products_data(data.invoice_products);
        if (_lst) {
            _lst.forEach(function (item) {
                if (item.product_name && item.unit_name) {
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
        if (this.frmData.vat_service_ticket != null) {
            this.frmData.vat_service_ticket = this.frmData.vat_service_ticket.toString();
        }
        // lấy file
        if (this.vatService.isCopy) {
            this.frmData.time_print_conversion = null;
            this.fileData = [];
            if (!this.isTT78) {
                var _objRelease_1 = this.select.invoice_releases.filter(function (p) { return p.value === _this.frmData.invoice_release_id; })[0];
                if (_objRelease_1) {
                    if (_objRelease_1.number_survival === 0) {
                        var _lstReleaseOther = this.select.invoice_releases.filter(function (p) { return p.number_survival > 0 && p.invoice_series == _objRelease_1.invoice_series && p.template_code == _objRelease_1.template_code && p.release_status != 'DA_HUY_SO'; });
                        if (_lstReleaseOther && _lstReleaseOther.length > 0) {
                            this.frmData.invoice_release_id = _lstReleaseOther[0].value;
                            this.frmData.template_id = _lstReleaseOther[0].template_id;
                        }
                        else {
                            this.frmData.invoice_release_id = null;
                            this.frmData.template_id = null;
                        }
                    }
                }
                this.select.invoice_releases = this.select.invoice_releases.filter(function (p) { return p.number_survival > 0 && p.release_status !== 'DA_HUY_SO'; });
            }
            else {
                var _oTempt = this.select.templatesTT78.filter(function (p) { return p.value === _this.frmData.template_id; })[0];
                if (_oTempt) {
                    this.frmData.template_id = _oTempt.value;
                    this.frmData.invoice_series = _oTempt.invoice_series;
                    this.frmData.template_code = _oTempt.template_code;
                }
                else {
                    this.frmData.template_id = null;
                    this.frmData.invoice_series = null;
                    this.frmData.template_code = null;
                }
            }
        }
        else {
            this.fileData = data.invoice_files;
        }
        if (!this.isTT78) {
            this.select.invoice_releases.forEach(function (item) {
                if (item.template_id === _this.frmData.template_id) {
                    _this.invoicereleaseTempt = item;
                }
            });
            this.select.invoice_releases.some(function (item) {
                if (item.value === _this.frmData.invoice_release_id) {
                    _this.is_multi_vat = item.is_multi_vat;
                    //  this._objTemplateSelect = item; // không mở(đối tượng _objTemplateSelect bị chuyển thành đối tượng item)
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
        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.approve_status) == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.TuChoi) {
            this.isTuChoi = true;
        }
        if (this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat || this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.ChoKy)
            this.isShowButtonWaiteSign = false;
        // cấu hình thập phân thêm mới
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
        this.pkInvoiceSelectWaitSign = this.frmData.id;
    };
    /*  */
    InvoiceComponent.prototype.onTemplateChange = function (e) {
        this.is_multi_vat = e;
    };
    /*  */
    InvoiceComponent.prototype.onTemplateTypeChange = function (e) {
        this.invoicereleaseTempt = e;
    };
    InvoiceComponent.prototype.onTemplateTT78TypeChange = function (e) {
        this.invoiceTemplateTT78 = e;
    };
    /*  */
    InvoiceComponent.prototype.onInvoiceCurrent = function (e) {
        this.pkInvoiceCurrent = e;
    };
    /*  */
    InvoiceComponent.prototype.fillDataToForm = function (e) {
        this.frmData.customer_name = e[0];
        this.frmData.buyer_tax_code = e[1];
        this.frmData.buyer_address = e[2];
    };
    /*  */
    InvoiceComponent.prototype.getDataInChildForm = function (e) {
        this.frmData = e;
        this.frmTraLai.reason = e.lido;
    };
    /* Tính tiền */
    InvoiceComponent.prototype.onNumberChange = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._calTotalMoney(this.frmData, this.formatter, !this.frmData.auto_value);
    };
    InvoiceComponent.prototype.changeEnvironmentalFee = function () {
        if (!this.isTT78) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._objTemplateSelect, this.configs.system_parameter);
            var decimal_amount_after_vat = this.getFormatterToNumber(this.formatter.tong_tien);
            this.frmData.total_payment = this.roundNumber(this.frmData.total_payment + this.frmData.environmental_fee, decimal_amount_after_vat);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._oTemplateTT78, this.configs.system_parameter);
            var decimal_amount_after_vat = this.getFormatterToNumber(this.formatter.tong_tien);
            this.frmData.total_payment = this.roundNumber(this.frmData.total_payment + this.frmData.environmental_fee, decimal_amount_after_vat);
        }
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
        if (this.frmData.time_print_conversion > 0) {
            return this._translate.CONTROLL.BUTTON.view_conversion;
        }
        else {
            return this._translate.CONTROLL.BUTTON.print_conversion;
        }
    };
    InvoiceComponent.prototype.onNumberTicketChange = function () {
        if (!this.isTT78) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._objTemplateSelect, this.configs.system_parameter);
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonVeMayBay
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonXangDau) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyTicket(this.frmData, this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type));
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._oTemplateTT78, this.configs.system_parameter);
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonVeMayBay
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonXangDau) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyTicket(this.frmData, this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type));
            }
        }
    };
    /* Xem trước hóa đơn */
    InvoiceComponent.prototype.preview = function () {
        var _this = this;
        setTimeout(function () {
            _this.handleFormData();
            if (!_this._validForm(true)) {
                return;
            }
            var data = _this.vatService.taodulieuXemTruocMau(_this.frmData);
            data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            _this.vPreviewInvService.xemMau(data);
        }, 300);
    };
    InvoiceComponent.prototype.view = function () {
        var ids = [];
        ids.push(this.frmData.id);
        var data = this.vatService.taodulieuXemMau(ids);
        data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
        this.vPreviewInvService.xemMau(data);
    };
    /* In chuyển đổi */
    InvoiceComponent.prototype.inChuyenDoi = function () {
        var ids = [];
        ids.push(this.frmData.id);
        var data = this.vatService.taodulieuInChuyenDoi(ids);
        data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
        this.vPreviewInvService.xemMau(data);
    };
    /* Ghi tạm */
    InvoiceComponent.prototype.ghiTam = function (data) {
        var _this = this;
        this.isDisable = true;
        if (this.frmData.id) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            if (!this.isTT78) {
                var sub_7 = this.vatService.edit(this.frmData.id, data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.pkInvoiceCurrent) != "") {
                            _this.vatService.delete(_this.pkInvoiceCurrent).subscribe(function (rs) {
                            }, function (err) {
                            });
                        }
                        if (rs.data.status == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.ChoKy)
                            _this.isShowButtonWaiteSign = false;
                        _this.frmData.id = rs.data.id;
                        if (_this.frmData.approve_status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChoDuyet) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.sign_board_success, 'success');
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                        }
                        _this.setDataSessionStorage(_this.frmData);
                    }
                    else {
                        if (rs.message.includes('CHUA_CO_BIEN_GIAM_TRU')) {
                            var initialState = {
                                typeNotify: "MAU_HOA_DON",
                            };
                            _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_20__["NotifyReduceTaxComponent"], {
                                backdrop: 'static',
                                keyboard: false,
                                class: 'mauhoadon modal-lg',
                                initialState: initialState
                            });
                        }
                        else if (rs.message.includes('MAU_HOA_DON_NQ43')) {
                            var initialState = {
                                typeNotify: "MAU_HOA_DON_NQ43",
                            };
                            _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_20__["NotifyReduceTaxComponent"], {
                                backdrop: 'static',
                                keyboard: false,
                                class: 'mauhoadon43 modal-lg',
                                initialState: initialState
                            });
                        }
                        else
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    _this.isDisable = false;
                    sub_7.unsubscribe();
                });
            }
            else {
                var sub_8 = this.vatService.editTT78(this.frmData.id, data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.pkInvoiceCurrent) != "") {
                            _this.vatService.delete(_this.pkInvoiceCurrent).subscribe(function (rs) {
                            }, function (err) {
                            });
                        }
                        if (rs.data.status == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.ChoKy)
                            _this.isShowButtonWaiteSign = false;
                        _this.frmData.id = rs.data.id;
                        if (_this.frmData.approve_status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChoDuyet) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.sign_board_success, 'success');
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                        }
                        _this.setDataSessionStorage(_this.frmData);
                    }
                    else {
                        if (rs.message.includes('CHUA_CO_BIEN_GIAM_TRU')) {
                            var initialState = {
                                typeNotify: "MAU_HOA_DON",
                            };
                            _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_20__["NotifyReduceTaxComponent"], {
                                backdrop: 'static',
                                keyboard: false,
                                class: 'mauhoadon modal-lg',
                                initialState: initialState
                            });
                        }
                        else if (rs.message.includes('MAU_HOA_DON_NQ43')) {
                            var initialState = {
                                typeNotify: "MAU_HOA_DON_NQ43",
                            };
                            _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_20__["NotifyReduceTaxComponent"], {
                                backdrop: 'static',
                                keyboard: false,
                                class: 'mauhoadon43 modal-lg',
                                initialState: initialState
                            });
                        }
                        else
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    _this.isDisable = false;
                    sub_8.unsubscribe();
                });
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            if (!this.isTT78) {
                var sub_9 = this.vatService.ghiTam(data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        if (rs.data.status == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.ChoKy)
                            _this.isShowButtonWaiteSign = false;
                        _this.frmData.id = rs.data.id;
                        _this.pkInvoiceSelectWaitSign = _this.frmData.id;
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                        _this.setDataSessionStorage(_this.frmData);
                    }
                    else {
                        if (rs.message.includes('CHUA_CO_BIEN_GIAM_TRU')) {
                            var initialState = {
                                typeNotify: "MAU_HOA_DON",
                            };
                            _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_20__["NotifyReduceTaxComponent"], {
                                backdrop: 'static',
                                keyboard: false,
                                class: 'mauhoadon modal-lg',
                                initialState: initialState
                            });
                        }
                        else if (rs.message.includes('MAU_HOA_DON_NQ43')) {
                            var initialState = {
                                typeNotify: "MAU_HOA_DON_NQ43",
                            };
                            _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_20__["NotifyReduceTaxComponent"], {
                                backdrop: 'static',
                                keyboard: false,
                                class: 'mauhoadon43 modal-lg',
                                initialState: initialState
                            });
                        }
                        else
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    _this.isDisable = false;
                    sub_9.unsubscribe();
                });
            }
            else {
                var sub_10 = this.vatService.ghiTamTT78(data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        if (rs.data.status == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.ChoKy)
                            _this.isShowButtonWaiteSign = false;
                        _this.frmData.id = rs.data.id;
                        _this.pkInvoiceSelectWaitSign = _this.frmData.id;
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                        _this.setDataSessionStorage(_this.frmData);
                    }
                    else {
                        if (rs.message.includes('CHUA_CO_BIEN_GIAM_TRU')) {
                            var initialState = {
                                typeNotify: "MAU_HOA_DON",
                            };
                            _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_20__["NotifyReduceTaxComponent"], {
                                backdrop: 'static',
                                keyboard: false,
                                class: 'mauhoadon modal-lg',
                                initialState: initialState
                            });
                        }
                        else if (rs.message.includes('MAU_HOA_DON_NQ43')) {
                            var initialState = {
                                typeNotify: "MAU_HOA_DON_NQ43",
                            };
                            _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_20__["NotifyReduceTaxComponent"], {
                                backdrop: 'static',
                                keyboard: false,
                                class: 'mauhoadon43 modal-lg',
                                initialState: initialState
                            });
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                            _this.isDisable = false;
                        }
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    _this.isDisable = false;
                    sub_10.unsubscribe();
                });
            }
        }
    };
    InvoiceComponent.prototype.xuatHoaDon = function (data) {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            if (this.frmData.invoice_files.length) {
                this.frmData.invoice_files.forEach(function (item) {
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
    };
    /* Xuất chờ ký */
    InvoiceComponent.prototype.xuatChoKy = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        if (!this.isTT78) {
            var sub_11 = this.vatService.xuatChoKy(data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.isShowButtonWaiteSign = false;
                    _this.frmData.id = rs.data.id;
                    _this.frmData.invoice_number = rs.data.invoice_number;
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.pkInvoiceCurrent) != "") {
                        _this.vatService.delete(_this.pkInvoiceCurrent).subscribe(function (rs) {
                        }, function (err) {
                        });
                    }
                    if (_this.frmData.approve_status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChoDuyet) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.sign_board_success, 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                    }
                    _this.setDataSessionStorage(_this.frmData);
                    /* Cập nhật lại thông tin theo NĐ 92 */
                    if (!_this.isHdGTGT) {
                        if (_this.frmData.is_exemption_decree && !_this.configs.system_parameter.is_tb_nd92) {
                            _this.configs.system_parameter.is_tb_nd92 = true;
                            var data_1 = {
                                config: {
                                    value: JSON.stringify(_this.configs.system_parameter)
                                }
                            };
                            _this.configsService.update(_this.configs.id.system_parameter, data_1).subscribe(function (response) {
                                if (response.status == "success") {
                                    _this.configsService.getAll().subscribe(function (res) {
                                        if (res.data && res.data.configs)
                                            _this.authService.setConfigs(res.data.configs);
                                    });
                                }
                                else {
                                }
                            }, function (err) { }, function () {
                            });
                        }
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_11.unsubscribe();
            });
        }
        else {
            var sub_12 = this.vatService.xuatChoKyTT78(data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.isShowButtonWaiteSign = false;
                    _this.frmData.id = rs.data.id;
                    _this.frmData.invoice_number = rs.data.invoice_number;
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.pkInvoiceCurrent) != "") {
                        _this.vatService.delete(_this.pkInvoiceCurrent).subscribe(function (rs) {
                        }, function (err) {
                        });
                    }
                    if (_this.frmData.approve_status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChoDuyet) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.sign_board_success, 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                    }
                    _this.setDataSessionStorage(_this.frmData);
                    /* Cập nhật lại thông tin theo NĐ 92 */
                    if (!_this.isHdGTGT) {
                        if (_this.frmData.is_exemption_decree && !_this.configs.system_parameter.is_tb_nd92) {
                            _this.configs.system_parameter.is_tb_nd92 = true;
                            var data_2 = {
                                config: {
                                    value: JSON.stringify(_this.configs.system_parameter)
                                }
                            };
                            _this.configsService.update(_this.configs.id.system_parameter, data_2).subscribe(function (response) {
                                if (response.status == "success") {
                                    _this.configsService.getAll().subscribe(function (res) {
                                        if (res.data && res.data.configs)
                                            _this.authService.setConfigs(res.data.configs);
                                    });
                                }
                                else {
                                }
                            }, function (err) { }, function () {
                            });
                        }
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_12.unsubscribe();
            });
        }
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
            var sub_13 = this.vatService.traLaiHoaDon({
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
                sub_13.unsubscribe();
            });
        }
    };
    /* Validate */
    InvoiceComponent.prototype._validForm = function (isOnlyCheckAm) {
        var _this = this;
        var _isValid = true;
        var invoice_products = this.frmData.invoice_products.filter(function (item) { return item.product_exchange_rate; });
        var indexErr = this.frmData.invoice_products.findIndex(function (item) { return !item.product_exchange_rate; });
        if ((this.frmData.amount_vat5 < 0 || this.frmData.amount_vat10 < 0 || this.frmData.total_payment < 0)
            && !this.configs.system_parameter.allow_export_with_negative) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.discount_same_vat, 'error');
            return false;
        }
        if (isOnlyCheckAm) {
            if (this.checkProductCode())
                return true;
            else
                return false;
        }
        if (this.frmData.currency_code && this.frmData.currency_code != "VND") {
            if (invoice_products && invoice_products.length > 0) {
                if (invoice_products.length !== this.frmData.invoice_products.length) {
                    this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(indexErr, 'product_exchange_rate'));
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.currency_rate + ' ' + this._translate.VALIDATION.required, 'error');
                    return false;
                }
            }
            else {
                if (!this.frmData.currency_rate) {
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinHoaDon', 'currency_rate');
                    // this.formInvoice.form.instance.getEditor('currency_rate').focus();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.currency_rate + ' ' + this._translate.VALIDATION.required, 'error');
                    return false;
                }
            }
            // if (!this.frmData.currency_rate || (invoice_products.length > 0 && invoice_products.length !== this.frmData.invoice_products.length)) {
            //   if (invoice_products.length > 0 && invoice_products.length !== this.frmData.invoice_products.length) {
            //     this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(indexErr, 'product_exchange_rate'));
            //     Library.notify(this._translate.CONTROLL.LABEL.currency_rate + ' ' + this._translate.VALIDATION.required, 'error');
            //     return false;
            //   } else {
            //     this.formInvoice.form.instance.getEditor('currency_rate').focus();
            //     Library.notify(this._translate.CONTROLL.LABEL.currency_rate + ' ' + this._translate.VALIDATION.required, 'error');
            //     return false;
            //   }
            // }
        }
        if (this.frmData.customer_object_code === 'DOANH_NGHIEP') {
            if (!this.frmData.customer_name) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.customer_name + ' ' + this._translate.VALIDATION.required, 'error');
                _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'customer_name');
                return false;
            }
            if (!this.frmData.buyer_address) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.address + ' ' + this._translate.VALIDATION.required, 'error');
                _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'buyer_address');
                return false;
            }
            if (this.invoiceTemplateTT78.template_type == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe) {
                if (!this.frmData.nationality) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.nationality + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'nationality');
                    return false;
                }
                if (!this.frmData.passport) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport');
                    return false;
                }
                if (!this.frmData.passport_date) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport_date + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport_date');
                    return false;
                }
                if (!this.frmData.passport_expiration_date) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport_expiration_date + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport_expiration_date');
                    return false;
                }
                var passport_expiration_date = new Date(this.frmData.passport_expiration_date);
                var passport_date = new Date(this.frmData.passport_date);
                if (passport_expiration_date <= passport_date) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport_expiration_date + ' ' + 'nhỏ hơn ' + this._translate.CONTROLL.LABEL.passport_date, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport_expiration_date');
                    return false;
                }
            }
        }
        if (this.frmData.customer_object_code === 'CA_NHAN') {
            if (!this.frmData.buyer_name) {
                _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'buyer_name');
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.buyer_name + ' ' + this._translate.VALIDATION.required, 'error');
                return false;
            }
            if (!this.frmData.buyer_address) {
                _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'buyer_address');
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.address + ' ' + this._translate.VALIDATION.required, 'error');
                return false;
            }
            if (this.invoiceTemplateTT78.template_type == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe) {
                if (!this.frmData.nationality) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.nationality + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'nationality');
                    return false;
                }
                if (!this.frmData.passport) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport');
                    return false;
                }
                if (!this.frmData.passport_date) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport_date + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport_date');
                    return false;
                }
                if (!this.frmData.passport_expiration_date) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport_expiration_date + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport_expiration_date');
                    return false;
                }
                var passport_expiration_date = new Date(this.frmData.passport_expiration_date);
                var passport_date = new Date(this.frmData.passport_date);
                if (passport_expiration_date <= passport_date) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport_expiration_date + ' ' + 'nhỏ hơn ' + this._translate.CONTROLL.LABEL.passport_date, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport_expiration_date');
                    return false;
                }
            }
        }
        if (this.frmData.customer_object_code === 'KHACH_LE') {
            if (!this.frmData.buyer_name) {
                _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'buyer_name');
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.buyer_name + ' ' + this._translate.VALIDATION.required, 'error');
                return false;
            }
            if (this.invoiceTemplateTT78.template_type == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe) {
                if (!this.frmData.nationality) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.nationality + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'nationality');
                    return false;
                }
                if (!this.frmData.passport) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport');
                    return false;
                }
                if (!this.frmData.passport_date) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport_date + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport_date');
                    return false;
                }
                if (!this.frmData.passport_expiration_date) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport_expiration_date + ' ' + this._translate.VALIDATION.required, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport_expiration_date');
                    return false;
                }
                var passport_expiration_date = new Date(this.frmData.passport_expiration_date);
                var passport_date = new Date(this.frmData.passport_date);
                if (passport_expiration_date <= passport_date) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.passport_expiration_date + ' ' + 'nhỏ hơn ' + this._translate.CONTROLL.LABEL.passport_date, 'error');
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinKhachHang', 'passport_expiration_date');
                    return false;
                }
            }
        }
        if (!this.frmData.total_payment && this.frmData.total_payment !== 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.amount_after_vat + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        var _lst = this.frmData.invoice_products.filter(function (p) { return p.product_name; });
        if (_lst.length === 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_product, 'error');
            this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
            return false;
        }
        else {
            if (!this.checkProductCode())
                return false;
            var _lstValidThanhTien = this.frmData.invoice_products.filter(function (p) { return !p.amount && p.amount !== 0; });
            if (_lstValidThanhTien.length == this.frmData.invoice_products.length) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.GRID.INVOICE_DETAILS.amount + ' ' + this._translate.VALIDATION.required, 'error', 5000);
                this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'amount'));
                return false;
            }
            var _lstValidTongTien = this.frmData.invoice_products.filter(function (p) { return !p.amount_after_vat && p.amount_after_vat !== 0; });
            if (_lstValidTongTien.length == this.frmData.invoice_products.length) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.total_money_goods + ' ' + this._translate.VALIDATION.required, 'error', 5000);
                this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'amount_after_vat'));
                return false;
            }
            if (!this.isTT78) {
                var numberRow = this.invoicereleaseTempt.numberRow;
                if (numberRow == 100) {
                    if (_lst.length > 1) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.only_seclected_1_product_to_export_invoice, 'error', 5000);
                        this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
                        return false;
                    }
                }
            }
            else {
                var numberRow = this.invoiceTemplateTT78.numberRow;
                if (numberRow == 100) {
                    if (_lst.length > 1) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.only_seclected_1_product_to_export_invoice, 'error', 5000);
                        this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
                        return false;
                    }
                }
                if (this.frmData.list_date && _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.list_number) == "") {
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(this.formInvoice.listDxForm, 'thongTinHoaDon', 'list_number');
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Số bảng kê" + ' ' + this._translate.VALIDATION.required, 'error');
                    return false;
                }
                if (!this.frmData.list_date && _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.list_number) != "") {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Ngày bảng kê" + ' ' + this._translate.VALIDATION.required, 'error');
                    return false;
                }
                this.invoice_products.load().then(function (dataSource) {
                    dataSource.forEach(function (item, index) {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.product_name) != "" && !item.is_promotion && !item.is_promotion_new && !item.commercial_discount && _isValid) {
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
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tên hàng hóa" + " " + _this._translate.VALIDATION.required, 'error');
                                _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'product_name'));
                                _isValid = false;
                                return false;
                            }
                        }
                        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.product_name) != "" && !item.is_promotion) {
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
            }
            /* Hóa đơn giảm trừ theo Nghị định số 92/2021  */
            var _objND92 = this.frmData.invoice_products.filter(function (p) { return (p.vat == "7" || p.vat == "3.5"); })[0];
            if (_objND92) {
                var _objCommon = this.frmData.invoice_products.filter(function (p) { return (p.vat != null && p.vat != "7" && p.vat != "3.5"); })[0];
                var isCheckNoVat_1 = false;
                var _lstNoVat = this.frmData.invoice_products.filter(function (p) { return p.vat == null; });
                _lstNoVat.forEach(function (item) {
                    if (!item.commercial_discount) {
                        if (item.amount != null)
                            isCheckNoVat_1 = true;
                    }
                });
                if (_objCommon || isCheckNoVat_1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Vui lòng lập hóa đơn riêng cho hàng hóa, dịch vụ được giảm thuế GTGT theo Nghị định số 92/2021", 'error', 5000);
                    this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'vat'));
                    return false;
                }
            }
            // /* Hóa đơn giảm trừ theo Nghị quyết 43 (Giảm 20%) */
            // let _objNQ43 = this.frmData.invoice_products.filter(p => (p.vat == "8"))[0];
            // if (_objNQ43) {
            //   let _objCommonNQ43 = this.frmData.invoice_products.filter(p => (p.vat != null && p.vat != "8"))[0];
            //   let isCheckNQ43 = false;
            //   let _lstNQ43 = this.frmData.invoice_products.filter(p => p.vat == null);
            //   _lstNQ43.forEach(item => {
            //     if (!item.commercial_discount) {
            //       if (item.amount != null)
            //         isCheckNQ43 = true;
            //     }
            //   });
            //   if (_objCommonNQ43 || isCheckNQ43) {
            //     Library.notify("Vui lòng lập hóa đơn riêng cho hàng hóa, dịch vụ được giảm thuế GTGT theo Nghị quyết số 43/2022/QH15", 'error', 5000);
            //     this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'vat'));
            //     return false;
            //   }
            // }
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
        }
        return _isValid;
    };
    /* Kiểm tra Mã hàng phải nhập không dấu, không chứa ký tự đặc biệt và tối đa 50 ký tự */
    InvoiceComponent.prototype.checkProductCode = function () {
        var isValid = true;
        var _lst = this.frmData.invoice_products.filter(function (p) { return p.product_name; });
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
    /* Xuất hóa đơn */
    InvoiceComponent.prototype.eSubmit = function (type, isCheckNoVat) {
        var _this = this;
        // const checkValid = this.formInvoice.form.instance.validate();
        // if (!checkValid.isValid) {
        //   return;
        // }
        var ts = this.pkInvoiceCurrent;
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        if (type == 'GHI_TAM') {
            this.isRequired = false;
        }
        else {
            this.isRequired = true;
        }
        this.total_payment = "";
        setTimeout(function () {
            _this.handleFormData();
            if (type !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam) {
                _this._isValid = _this._validForm(false);
                if (!_this._isValid) {
                    return;
                }
                _this._isValid = _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].checkTimeExportInv(_this.configs.system_parameter);
                if (!_this._isValid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_16__["String"].Format(_this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_2__(_this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_2__(_this.configs.system_parameter.time_end).format('HH:mm')), 'error');
                    return;
                }
            }
            else {
                _this._isValid = _this.checkProductCode();
                if (!_this._isValid) {
                    return;
                }
            }
            if (_this.frmData.invoice_options) {
                _this.frmData.invoice_options.forEach(function (item) {
                    delete item['is_show'];
                    delete item['type'];
                    delete item['width'];
                    delete item['statusData'];
                });
            }
            if ((_this._objTemplateSelect && _this._objTemplateSelect.template_type == 'HOA_DON_VE_MAY_BAY_CHUNG') || (_this._oTemplateTT78 && _this._oTemplateTT78.template_type == 'HOA_DON_VE_MAY_BAY_CHUNG')) {
                var products = _this.frmData.invoice_products.filter(function (p) { return p.is_money_service; });
                if (products && products.length > 1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Chỉ được phép chọn 1 dòng dữ liệu là Phí dịch vụ", 'error');
                    return false;
                }
            }
            if (_this.configs.system_parameter.incurred_refund_ticket) {
                var pPhiHoanVe = _this.frmData.invoice_products.filter(function (p) { return p.is_refund_ticket; });
                if (pPhiHoanVe && pPhiHoanVe.length > 1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Chỉ được chọn 1 hàng hóa là Phí hoàn vé", 'error');
                    return false;
                }
                var products = _this.frmData.invoice_products.filter(function (p) { return p.is_refund_ticket && p.is_money_service; });
                if (products && products.length > 0) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Không được chọn hàng hóa đồng thời là Phí dịch vụ và Phí hoàn vé", 'error');
                    return false;
                }
            }
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.bank_name) != "" && _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.frmData.bank_name).length > 400) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.bank_name_less_than_400_character, 'error');
                return false;
            }
            if (_this.frmData.total_payment > 20000000 && (_this.frmData.payment_method_name === 'TM')) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.payment_method_more_than_20_million, 'error');
                return false;
            }
            if (!_this.isAccessExportInv && type === 'XUAT' && _this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].hinhThucXuat.XuatChoKy) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.you_not_permissions, 'error');
                return false;
            }
            if (type === 'XUAT' || (type === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.TrinhKy && _this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].hinhThucXuat.XuatChoKy)) {
                if (!_this.frmData.invoice_date && !_this.confirmCheckPreview && !_this.isTT78) {
                    var setInvoiceDate = _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(_this._translate.NOTIFY.warning_invoice_date, _this._translate.NOTIFY.notify);
                    setInvoiceDate.then(function (dialog) {
                        if (!dialog) {
                            _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_15__["InvoicesService"].focusField(_this.formInvoice.listDxForm, 'thongTinHoaDon', 'invoice_date');
                        }
                        else {
                            _this.processXuatHoaDon(type, isCheckNoVat);
                        }
                    });
                }
                else
                    _this.processXuatHoaDon(type, isCheckNoVat);
            }
            else {
                _this.processGhiTam(type);
            }
        }, 300);
    };
    /* Xử lý xuất hóa đơn */
    InvoiceComponent.prototype.processXuatHoaDon = function (type, isCheckNoVat) {
        var _this = this;
        var _index = 0;
        var _lstInv = [];
        this.invoice_products.load().then(function (dataSource) {
            _lstInv = dataSource.filter(function (p) { return p.product_name; });
        });
        if (this.isHdGTGT) {
            for (var i = 0; i < _lstInv.length; i++) {
                if (_lstInv[i].amount > 0 && !_lstInv[i].vat && !_lstInv[i].is_refund_ticket) {
                    var it = _lstInv[i];
                    _index = i;
                    this._isValid = false;
                    break;
                }
            }
        }
        if (this.isHdGTGT || this.frmData.is_exemption_decree) {
            /* Áp dụng thuế giảm trừ theo Nghị định số 92/2021 */
            var _objND92 = this.frmData.invoice_products.filter(function (p) { return (p.vat == "7" || p.vat == "3.5"); })[0];
            if (_objND92 || this.frmData.is_exemption_decree) {
                var dateFrom = moment__WEBPACK_IMPORTED_MODULE_2__("01/11/2021", 'DD/MM/YYYY').format('YYYY-MM-DD');
                var dateTo = moment__WEBPACK_IMPORTED_MODULE_2__("31/12/2021", 'DD/MM/YYYY').format('YYYY-MM-DD');
                var invoiceDate = void 0;
                if (!this.frmData.invoice_date)
                    invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
                else
                    invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.frmData.invoice_date).format('YYYY-MM-DD');
                if (invoiceDate < dateFrom || invoiceDate > dateTo) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Chỉ áp dụng giảm thuế GTGT theo Nghị định số 92/2021 cho các hóa đơn từ ngày 01/11/2021 đến 31/12/2021", 'error');
                    return false;
                }
            }
        }
        /* Áp dụng thuế giảm trừ theo Nghị quyết số 43/2022/QH15 */
        // if (this.isHdGTGT || this.frmData.is_resolution_43) {
        //   let _objNQ43 = this.frmData.invoice_products.filter(p => (p.vat == "8"))[0];
        //   if (_objNQ43 || this.frmData.is_resolution_43) {
        //     let dateFromNQ43 = moment("01/02/2022", 'DD/MM/YYYY').format('YYYY-MM-DD');
        //     let dateToNQ43 = moment("31/12/2022", 'DD/MM/YYYY').format('YYYY-MM-DD');
        //     let invoiceDateNQ43: any;
        //     if (!this.frmData.invoice_date)
        //       invoiceDateNQ43 = moment(new Date()).format('YYYY-MM-DD');
        //     else
        //       invoiceDateNQ43 = moment(this.frmData.invoice_date).format('YYYY-MM-DD')
        //     if (!this.isPassNQ43 && (invoiceDateNQ43 < dateFromNQ43 || invoiceDateNQ43 > dateToNQ43)) {
        //       Library.notify("Chỉ áp dụng giảm thuế GTGT theo Nghị quyết số 43/2022/QH15 cho các hóa đơn từ ngày 01/02/2022 đến 31/12/2022", 'error');
        //       return false;
        //     }
        //   }
        // }
        if (!this.vatService.checkVatMauHoaDon(_lstInv, this.is_multi_vat)) {
            return false;
        }
        if (!this._isValid && isCheckNoVat) {
            var result = _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(this._translate.CONFIRM.no_vat, this._translate.NOTIFY.notify);
            result.then(function (dialogResult) {
                if (dialogResult) {
                    _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(_index, 'vat'));
                    return false;
                }
                else {
                    if (type === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.TrinhKy && _this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].hinhThucXuat.XuatChoKy) {
                        _this.confirmCheckPreview = true;
                    }
                    if (_this.confirmCheckPreview) {
                        if (_this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].hinhThucXuat.XuatChoKy) {
                            _this.xuatHoaDon(_this.frmData);
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].confirmXuatChoKy(function () {
                                if (!_this.isAccessExportInv) {
                                    if (type === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.TrinhKy) {
                                        _this.frmData.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChoDuyet;
                                        _this.frmData.refuse_reason = '';
                                    }
                                    else {
                                        if (_this.frmData.approve_status !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.TuChoi) {
                                            _this.frmData.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChuaTrinhKy;
                                        }
                                    }
                                }
                                _this.xuatChoKy(_this.frmData);
                            });
                        }
                        _this.confirmCheckPreview = false;
                    }
                    else {
                        _this.previewBeforeExport(type);
                    }
                }
            });
        }
        else {
            if (type === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.TrinhKy && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].hinhThucXuat.XuatChoKy) {
                this.confirmCheckPreview = true;
            }
            if (this.confirmCheckPreview) {
                if (this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].hinhThucXuat.XuatChoKy) {
                    this.xuatHoaDon(this.frmData);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].confirmXuatChoKy(function () {
                        if (!_this.isAccessExportInv) {
                            if (type === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.TrinhKy) {
                                _this.frmData.refuse_reason = '';
                                _this.frmData.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChoDuyet;
                            }
                            else {
                                if (_this.frmData.approve_status !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.TuChoi) {
                                    _this.frmData.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChuaTrinhKy;
                                }
                            }
                        }
                        _this.xuatChoKy(_this.frmData);
                    });
                }
                this.confirmCheckPreview = false;
            }
            else {
                this.previewBeforeExport(type);
            }
        }
    };
    InvoiceComponent.prototype.previewBeforeExport = function (type) {
        var _this = this;
        this.handleFormData();
        var trang_thai = '';
        if (this.formInvoice.getHtXuatValue() !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].hinhThucXuat.XuatChoKy) {
            trang_thai = this._translate.THONG_TIN.xuat_va_ky;
        }
        else {
            trang_thai = this._translate.THONG_TIN.xuat_cho_ky;
        }
        var du_lieu = this.vatService.taodulieuXemTruocMau(this.frmData);
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
        this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_23__["PreviewInvoiceComponent"], {
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
    InvoiceComponent.prototype.processGhiTam = function (type) {
        if (!this.isAccessExportInv) {
            if (type === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.TrinhKy) {
                this.frmData.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChoDuyet;
                this.frmData.refuse_reason = '';
            }
            else {
                if (this.frmData.approve_status !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.TuChoi) {
                    this.frmData.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChuaTrinhKy;
                }
            }
        }
        this.ghiTam(this.frmData);
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
                        if (this.frmData.invoice_options) {
                            this.frmData.invoice_options.forEach(function (item) {
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
                        if (!this.isAccessExportInv) {
                            if (type === _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.TrinhKy) {
                                this.frmData.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChoDuyet;
                                this.frmData.refuse_reason = '';
                            }
                            else {
                                if (this.frmData.approve_status !== _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.TuChoi) {
                                    this.frmData.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApprove.ChuaTrinhKy;
                                }
                            }
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
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["InvoiceModel"](1);
        this.frmData.invoice_date = null;
        this.frmData.template_id = inv.template_id;
        this.frmData.invoice_release_id = inv.invoice_release_id;
        this.frmData.payment_method_name = inv.payment_method_name;
        this.frmData.payment_method_view_name = inv.payment_method_view_name;
        this.frmData.currency_code = inv.currency_code;
        this.frmData.template_code = inv.template_code;
        this.frmData.invoice_series = inv.invoice_series;
        this.frmData.invoice_options = inv.invoice_options;
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
        this.formInvoice.resetTMR();
        this.formInvoice.emails = [];
        this.ttDaXuatHoaDon = false;
        this.setDataSessionStorage(this.frmData);
    };
    InvoiceComponent.prototype.handleFormData = function () {
        var _this = this;
        this.tempKiFile = 0;
        var invoice_products = [];
        this.invoice_products.load().then(function (dataSource) {
            var transport = "";
            dataSource.forEach(function (item, index) {
                delete item.error;
                if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                    item.row_content = item.product_name;
                    if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(_this.pkInvoiceCurrent) != "")
                        item.id = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].makeid();
                    invoice_products.push(item);
                    if (item.is_transport_number) {
                        transport += item.product_name + "; ";
                    }
                }
            });
            if (transport != "") {
                transport = transport.trim();
                transport = transport.slice(0, -1);
                _this.frmData.transport_number = transport;
            }
            if (_this.frmData.list_date) {
                _this.frmData.list_date = moment__WEBPACK_IMPORTED_MODULE_2__(_this.frmData.list_date).format('YYYY-MM-DD');
            }
            _this.frmData.invoice_files = JSON.parse(JSON.stringify(_this.fileData));
            _this.frmData.invoice_products = invoice_products;
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
                            _this.frmData.transport_number = item.product_name;
                        }
                    }
                });
                _this.frmData.invoice_files = JSON.parse(JSON.stringify(_this.fileData));
                _this.frmData.invoice_products = invoice_products;
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
        var decimal_amount = this.getFormatterToNumber(this.formatter.thanh_tien);
        var decimal_amount_vat = this.getFormatterToNumber(this.formatter.tien_thue);
        if (this.frmData.vat_service_ticket != null && this.frmData.vat_service_ticket != '-1') {
            this.frmData.total_vat_service_ticket = this.roundNumber((Number.parseInt(this.frmData.vat_service_ticket) * this.frmData.money_service_ticket) / 100, decimal_amount_vat);
        }
        else {
            this.frmData.total_vat_service_ticket = null;
        }
        this.frmData.total_service_ticket_with_vat = this.roundNumber(this.frmData.money_service_ticket + this.frmData.total_vat_service_ticket, decimal_amount);
    };
    InvoiceComponent.prototype.canDeactivate = function () {
        var _this = this;
        if (!this.showTraLai) {
            this.configsService.getAll().subscribe(function (res) {
                if (res.data && res.data.configs) {
                    _this.authService.setConfigs(res.data.configs);
                    _this.configs = _this.authService.getConfigs();
                }
            });
            if (!this.checkDataFormChange(this.valueChange, this.frmData)) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_14__["Observable"](function (observer) {
                    _this.confirmService.confirm().subscribe(function (value) {
                        switch (value) {
                            case 'yes':
                                _this.subData(_core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.GhiTam, _this.frmData).then(function (value1) {
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
            else {
                return true;
            }
        }
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
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/modules/vat/components/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/modules/vat/components/invoice/invoice.component.scss")]
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
            _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_17__["ConfirmService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_18__["ConfigsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_22__["ViewInvoiceService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_24__["MyBsModalService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_25__["InvoiceService"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/vat/components/keep-number/keep-number.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/vat/components/keep-number/keep-number.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">HÓA ĐƠN CHỜ KÝ</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"cancelForm\" [formData]=\"frmData\" validationGroup=\"formData\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item [label]=\"{text: 'Mẫu hóa đơn'}\" dataField=\"invoice_release_id\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: invoice_releases, displayExpr: 'name', valueExpr: 'value', onValueChanged: invoiceReleaseChange}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Mẫu hóa đơn không được để trống\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"invoice_type_name\" [label]=\"{text: 'Loại hóa đơn'}\" [editorOptions]=\"{disabled: true}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"invoice_date\" [label]=\"{text: 'Ngày hóa đơn'}\" editorType=\"dxDateBox\" [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd'}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"number_of_invoice\" [label]=\"{text: 'Số lượng hóa đơn'}\" editorType=\"dxNumberBox\">\r\n          <dxi-validation-rule type=\"required\" message=\"Số lượng hóa đơn không được để trống\"></dxi-validation-rule>\r\n          <dxi-validation-rule type=\"range\" [max]=\"soTon\" message=\"Số hóa đơn vượt quá số hóa đơn đã đăng ký\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item name=\"text-support\">\r\n          <div *dxTemplate>\r\n            <p *ngIf=\"soTon\" style=\"margin-top: 3px;\">(Tổng số hóa đơn còn lại: {{ soTon }})</p>\r\n          </div>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"Ghi\" icon=\"fa fa-floppy-o\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button text=\"Quay lại\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/vat/components/keep-number/keep-number.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/vat/components/keep-number/keep-number.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/vat/components/keep-number/keep-number.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/vat/components/keep-number/keep-number.component.ts ***!
  \*****************************************************************************/
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
            template: __webpack_require__(/*! ./keep-number.component.html */ "./src/app/modules/vat/components/keep-number/keep-number.component.html"),
            styles: [__webpack_require__(/*! ./keep-number.component.scss */ "./src/app/modules/vat/components/keep-number/keep-number.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"]])
    ], KeepNumberComponent);
    return KeepNumberComponent;
}());



/***/ }),

/***/ "./src/app/modules/vat/components/product-grip/product-grip.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/vat/components/product-grip/product-grip.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Phần không tự tính giá trị, nhập mẫu bảng kê -->\r\n<div class=\"row support-invoice\">\r\n  <div class=\"col-md-12\">\r\n    <!-- Thêm dòng -->\r\n    <div class=\"pull-left\">\r\n      <div style=\"float: left;width:  30%; padding-top: 4px\">{{ _translate.CONTROLL.BUTTON.add_row }}</div>\r\n      <div style=\"float: left; width: 30%\">\r\n        <dx-number-box #numberBox [max]=\"100\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"rowData\"></dx-number-box>\r\n      </div>\r\n      <div>\r\n        <dx-button style=\"height: 27px\" icon=\"fa fa-plus-circle\" type=\"default\" text=\"\" (onClick)=\"addRow()\">\r\n        </dx-button>\r\n      </div>\r\n    </div>\r\n    <div class=\"pull-right\">\r\n      <!-- Hóa đơn bán hàng NĐ 92 -->\r\n      <dx-check-box *ngIf=\"isShowND92\" [(value)]=\"formDataInInvoice.is_exemption_decree\"\r\n        text=\"Giảm thuế theo NĐ số 92/2021\" (onValueChanged)=\"_tinhGiaTri($event)\"></dx-check-box>\r\n      <div *ngIf=\"isShowND92\" class=\"toggle normal\"\r\n        style=\"display: inline-block; align-items: center;margin-right: 42px;margin-left: 7px;\">\r\n        <img id=\"link3\" style=\"cursor: pointer\" src=\"assets\\img\\icons\\Icon_Information.png\"\r\n          (click)=\"onClickGuidReduce()\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n      </div>\r\n      <!-- Hóa đơn bán hàng NQ 43 -->\r\n      <dx-check-box *ngIf=\"!isHdGTGT\" style=\"margin-right: 20px\" [(value)]=\"formDataInInvoice.is_resolution_43\"\r\n        text=\"{{ _translate.THONG_TIN.giam_thue_theo_nq43 }}\" (onValueChanged)=\"_changeNQ43($event)\"></dx-check-box>\r\n      <!-- <div *ngIf=\"!isHdGTGT\" class=\"toggle normal\" style=\"display: inline-block; align-items: center;margin-right: 42px;margin-left: 7px;\">\r\n        <img id=\"link4\" style=\"cursor: pointer\" src=\"assets\\img\\icons\\Icon_Information.png\" (click)=\"onClickGuidNQ43()\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n      </div> -->\r\n      <!-- Bán hàng qua điện thoại -->\r\n      <dx-check-box *ngIf=\"configs.system_parameter.view_sale_by_phone\" class=\"auto-input\"\r\n        text=\"{{ _translate.CONTROLL.LABEL.sale_by_phone }}\" [(value)]=\"formDataInInvoice.sale_by_phone\"></dx-check-box>\r\n      <!-- Tổng tiền từ âm chuyển thành dương -->\r\n      <dx-check-box class=\"auto-input\" text=\"{{ _translate.CONTROLL.BUTTON.total_money_from_negative_to_positive }}\"\r\n        [(value)]=\"formDataInInvoice.is_total_amount_negative_to_positive\" (onValueChanged)=\"_tinhGiaTri()\">\r\n      </dx-check-box>\r\n      <!-- Không tự tính giá trị -->\r\n      <dx-check-box class=\"auto-input\" text=\"{{ _translate.CONTROLL.LABEL.no_calculation }}\"\r\n        [(value)]=\"formDataInInvoice.auto_value\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      <!-- Tính thành tiền, tiền thuế theo số lượng và tổng tiền -->\r\n      <dx-check-box *ngIf=\"isHdGTGT\" class=\"auto-input\" text=\"{{ _translate.CONTROLL.LABEL.auto_value_price }}\"\r\n        [(value)]=\"formDataInInvoice.auto_value_price\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      <dx-menu [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\" submenuDirection=\"auto\"\r\n        (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n      </dx-menu>\r\n      <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx\" (change)=\"onFileBangKeChange($event)\" multiple=\"false\"\r\n        style=\"display: none;\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n  [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{ _translate.CONFIRM.import_type }}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"thayTheToanBo()\" text=\"{{ _translate.CONTROLL.BUTTON.replace_all }}\" type=\"default\">\r\n      </dx-button>\r\n      <dx-button (click)=\"themTiep()\" text=\"{{ _translate.CONTROLL.BUTTON.add_more }}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{ _translate.CONTROLL.BUTTON.cancel }}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n\r\n<!-- phần table hiển thị -->\r\n<div class=\"row invoice-table\">\r\n  <div class=\"col-md-12\">\r\n    <dx-data-grid id=\"gridInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n      [allowColumnResizing]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n      (onKeyDown)=\"onGripKeyDown($event)\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n      (onEditorPrepared)=\"onEditorPrepared($event)\" (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n      (onRowPrepared)=\"onRowPrepared($event)\" (onCellPrepared)=\"onCellPrepared($event)\"  (onContentReady)=\"onContentReady($event)\">\r\n      <!-- [wordWrapEnabled]=\"true\" (onEditorPrepared)=\"onEditorPrepared($event)\" -->\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"!ttDaXuatHoaDon\"></dxo-editing>\r\n      <dxo-sorting mode=\"false\"></dxo-sorting>\r\n      <dxo-scrolling mode=\"virtual\">\r\n        <!-- or \"virtual\" | \"infinite\" -->\r\n      </dxo-scrolling>\r\n      <!-- Xóa -->\r\n      <dxi-column cellTemplate=\"deleteColumn\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.delete }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.delete_column }}\" [allowEditing]=\"false\" alignment=\"center\" [fixed]=\"true\"\r\n        fixedPosition=\"left\">\r\n      </dxi-column>\r\n      <!-- STT -->\r\n      <dxi-column dataField=\"view_order\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.view_order }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.stt }}\" alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Đơn hàng/ Hợp đồng -->\r\n      <dxi-column\r\n        *ngIf=\"(extentionGrid && extentionGrid.don_hang_hop_dong) || (configs && configs.system_parameter && configs.system_parameter.display_contract_order)\"\r\n        dataField=\"contract_order\" minWidth=\"{{ _translate.GRID_WIDTH.don_hang_hop_dong }}\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.po_no_contract_no }}\" alignment=\"left\"></dxi-column>\r\n      <!-- Mã hàng hóa -->\r\n      <dxi-column cssClass=\"overlay-content123\" dataField=\"product_code\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_code }}\" minWidth=\"{{ _translate.GRID_WIDTH.ma_hang }}\"\r\n        alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\" [editorOptions]=\"editorOptionsForCode\">\r\n        <dxo-lookup *ngIf=\"reloadSelectProduct\" [dataSource]=\"select.productsView\" displayExpr=\"mhvth\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <!-- Mã quản lý -->\r\n      <dxi-column *ngIf=\"extentionGrid && extentionGrid.ma_quan_ly\" dataField=\"management_code\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.ma_hang }}\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.management_code }}\"\r\n        alignment=\"left\" [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Tên hàng hóa -->\r\n      <dxi-column dataField=\"product_name\" minWidth=\"{{ _translate.GRID_WIDTH.ten_hang }}\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_name }}\" alignment=\"left\" [fixed]=\"true\"\r\n        fixedPosition=\"left\"></dxi-column>\r\n      <!-- Phí hoàn vé -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.incurred_refund_ticket\" cellTemplate=\"PhiHoanVe\"\r\n        caption=\"{{ _translate.CONTROLL.LABEL.refund_fee }}\" minWidth=\"{{ _translate.GRID_WIDTH.cktm }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Số máy -->\r\n      <dxi-column\r\n        *ngIf=\"((_objTemplateSelect && _objTemplateSelect.template_type=='HOA_DON_KINH_DOANH_XE') || (_oTemplateTT78 && _oTemplateTT78.template_type=='HOA_DON_KINH_DOANH_XE'))\"\r\n        dataField=\"engine_number\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.engine_number }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.so_may }}\" alignment=\"center\"></dxi-column>\r\n      <!-- Số khung -->\r\n      <dxi-column\r\n        *ngIf=\"((_objTemplateSelect && _objTemplateSelect.template_type=='HOA_DON_KINH_DOANH_XE') || (_oTemplateTT78 && _oTemplateTT78.template_type=='HOA_DON_KINH_DOANH_XE'))\"\r\n        dataField=\"chassis_number\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.chassis_number }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.so_khung }}\" alignment=\"center\"></dxi-column>\r\n      <!-- Phí dịch vụ -->\r\n      <dxi-column\r\n        *ngIf=\"((_objTemplateSelect && (_objTemplateSelect.template_type=='HOA_DON_NHA_HANG_KHACH_SAN' || _objTemplateSelect.template_type=='HOA_DON_VE_MAY_BAY_CHUNG')) || (_oTemplateTT78 && (_oTemplateTT78.template_type=='HOA_DON_NHA_HANG_KHACH_SAN' || _oTemplateTT78.template_type=='HOA_DON_VE_MAY_BAY_CHUNG')))\"\r\n        cellTemplate=\"phi_dich_vu\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.money_service }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\" [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Diễn giải -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_promotion\" cellTemplate=\"dien_giai\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.explain }}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Khuyến mại -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.promotional_goods_on_the_invoice\" cellTemplate=\"khuyen_mai\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.promotion }}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Số lô -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.view_lot || extentionGrid.so_lo\" dataField=\"lot\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.lot }}\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.lot }}\" alignment=\"left\">\r\n      </dxi-column>\r\n      <!-- Hạn sử dụng -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.view_expiration_date || extentionGrid.han_dung\"\r\n        dataField=\"expiration_date\" minWidth=\"{{ _translate.GRID_WIDTH.han_su_dung }}\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.expiration_date }}\" alignment=\"left\"></dxi-column>\r\n      <!-- Số tham chiếu -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.items_number\" dataField=\"items_number\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.han_su_dung }}\" caption=\"{{ _translate.CONTROLL.LABEL.reference_number }}\"\r\n        alignment=\"left\"></dxi-column>\r\n      <!-- Ngày -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.complete_order_date\" dataField=\"complete_order_date\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.han_su_dung }}\" caption=\"{{ _translate.CONFIGS.day }}\" alignment=\"left\">\r\n      </dxi-column>\r\n      <!-- mpq -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.mpq\" dataField=\"mpq\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.han_su_dung }}\" caption=\"MPQ\" alignment=\"left\"></dxi-column>\r\n      <!-- Quốc gia -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.view_country || extentionGrid.nuoc_san_xuat\"\r\n        [editorOptions]=\"{showClearButton: true}\" dataField=\"country_code\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.country }}\" minWidth=\"{{ _translate.GRID_WIDTH.country }}\"\r\n        alignment=\"center\">\r\n        <dxo-lookup [dataSource]=\"select.countrys\" displayExpr=\"name\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <!-- Số đơn vận -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.display_transport_number_from_product\"\r\n        cellTemplate=\"is_transport_number\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.transport_number  }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.is_transport_number  }}\" [allowEditing]=\"false\" alignment=\"center\">\r\n      </dxi-column>\r\n      <!-- Chiết khấu thương mại -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.commercial_discount\" cellTemplate=\"cktm\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.commercial_discount }}\" minWidth=\"{{ _translate.GRID_WIDTH.cktm }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Định khoản -->\r\n      <dxi-column cssClass=\"dinh-khoan\" *ngIf=\"configs.system_parameter.view_provisions_on_accounts\"\r\n        dataField=\"provisions_on_accounts\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.provisions_on_accounts }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.dinh_khoan }}\" alignment=\"center\">\r\n        <dxo-lookup [dataSource]=\"select.select_provisions_on_accounts\" displayExpr=\"mdk\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <!-- Màu sắc/ chất liệu -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.color_material\" dataField=\"color_material\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.mau_sac }}\" caption=\"{{ _translate.CONFIGS.color_material }}\"\r\n        alignment=\"left\"></dxi-column>\r\n      <!-- Hành trình -->\r\n      <!-- <dxi-column *ngIf=\"((_objTemplateSelect && (_objTemplateSelect.template_type=='HOA_DON_VE_MAY_BAY_CHUNG' || _objTemplateSelect.template_type=='HOA_DON_VE_MAY_BAY_HOAN_VE' )) || (_oTemplateTT78 && (_oTemplateTT78.template_type=='HOA_DON_VE_MAY_BAY_CHUNG' || _oTemplateTT78.template_type=='HOA_DON_VE_MAY_BAY_HOAN_VE' )))\" dataField=\"journey_name\"\r\n                  minWidth=\"{{ _translate.GRID_WIDTH.mau_sac }}\"\r\n                  caption=\"{{ _translate.GRID.INVOICE_DETAILS.journey_name }}\"\r\n                  alignment=\"left\"></dxi-column> -->\r\n      <!-- Đơn vị tính -->\r\n      <dxi-column dataField=\"unit_code\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.unit_code }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.unit_code }}\" alignment=\"center\" [editorOptions]=\"lookupColumnOptions\">\r\n        <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <!-- Ngày -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.product_date\" dataField=\"product_date\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.han_su_dung }}\" caption=\"{{ _translate.CONFIGS.day }}\" alignment=\"left\">\r\n      </dxi-column>\r\n      <!-- Tỷ giá -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.product_exchange_rate\" dataField=\"product_exchange_rate\"\r\n        headerCellTemplate=\"exchangeRateHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        [editorOptions]=\"{ format: formatter.ty_gia,step: '0' }\" [format]=\"formatter.ty_gia\" dataType=\"number\"\r\n        alignment=\"center\"></dxi-column>\r\n      <!-- Số lượng -->\r\n      <dxi-column dataField=\"quantity\" headerCellTemplate=\"quantityHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\" [editorOptions]=\"{ format: formatter.so_luong,step: '0' }\"\r\n        [format]=\"formatter.so_luong\" dataType=\"number\" alignment=\"center\"></dxi-column>\r\n      <!-- Đơn giá sau thuế -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.price_after_vat\" dataField=\"price_after_vat\"\r\n        headerCellTemplate=\"priceaftervatHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        [editorOptions]=\"{ format: formatter.don_gia_sau_thue,step: '0' }\" [format]=\"formatter.don_gia_sau_thue\"\r\n        dataType=\"number\" alignment=\"right\"></dxi-column>\r\n      <!-- Đơn giá NT -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.view_price_nte\" dataField=\"price_nte\"\r\n        headerCellTemplate=\"price_nteHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        [editorOptions]=\"{ format: formatter.don_gia_nte, step:'0' }\" [format]=\"formatter.don_gia_nte\" dataType=\"number\"\r\n        alignment=\"right\"></dxi-column>\r\n      <!-- Đơn giá -->\r\n      <dxi-column dataField=\"price\" headerCellTemplate=\"priceHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        [editorOptions]=\"{ format: formatter.don_gia,step: '0' }\" [format]=\"formatter.don_gia\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Thành tiền chưa trừ CK -->\r\n      <dxi-column\r\n        *ngIf=\"((_objTemplateSelect && _objTemplateSelect.is_discount && _objTemplateSelect.template_type!='HOA_DON_BAN_GIAO_XE' && _objTemplateSelect.template_type!='HOA_DON_BAO_DUONG_XE')\r\n      || (_oTemplateTT78 && _oTemplateTT78.is_discount && _oTemplateTT78.template_type!='HOA_DON_BAN_GIAO_XE' && _oTemplateTT78.template_type!='HOA_DON_BAO_DUONG_XE'))\"\r\n        dataField=\"amount_without_discount\" headerCellTemplate=\"amountNoDiscountHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\"\r\n        [editorOptions]=\"{ format: formatter.thanh_tien_chua_ck ,step: '0'}\" [format]=\"formatter.thanh_tien_chua_ck\"\r\n        dataType=\"number\" alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Chiết khấu -->\r\n      <dxi-column\r\n        *ngIf=\"((_objTemplateSelect && _objTemplateSelect.is_discount && _objTemplateSelect.template_type!='HOA_DON_BAN_GIAO_XE' && _objTemplateSelect.template_type!='HOA_DON_BAO_DUONG_XE')\r\n      || (_oTemplateTT78 && _oTemplateTT78.is_discount && _oTemplateTT78.template_type!='HOA_DON_BAN_GIAO_XE' && _oTemplateTT78.template_type!='HOA_DON_BAO_DUONG_XE'))\"\r\n        dataField=\"discount\" headerCellTemplate=\"discountHeader\" minWidth=\"{{ _translate.GRID_WIDTH.chiet_khau }}\"\r\n        [editorOptions]=\"{ format: formatter.ty_le_chiet_khau,step: '0' }\" [format]=\"formatter.ty_le_chiet_khau\"\r\n        dataType=\"number\" alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Tiền chiết khấu -->\r\n      <dxi-column\r\n        *ngIf=\"((_objTemplateSelect && _objTemplateSelect.is_discount) || (_oTemplateTT78 && _oTemplateTT78.is_discount))\"\r\n        dataField=\"amount_discount\" headerCellTemplate=\"amount_discountHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tien_chiet_khau }}\" [editorOptions]=\"{ format: formatter.tien_chiet_khau }\"\r\n        [format]=\"formatter.tien_chiet_khau\" dataType=\"number\" alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Chiết khấu theo đơn giá -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.discount_on_price\" dataField=\"discount_on_price\"\r\n        headerCellTemplate=\"discount_on_priceHeader\" minWidth=\"{{ _translate.GRID_WIDTH.tien_chiet_khau }}\"\r\n        [editorOptions]=\"{ format: formatter.ck_theo_don_gia }\" [format]=\"formatter.ck_theo_don_gia\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Đơn giá sau chiết khấu -->\r\n      <dxi-column\r\n        *ngIf=\"((_objTemplateSelect && _objTemplateSelect.is_discount && (_objTemplateSelect.template_type=='HOA_DON_BAN_GIAO_XE' || _objTemplateSelect.template_type=='HOA_DON_BAO_DUONG_XE'))\r\n      || (_oTemplateTT78 && _oTemplateTT78.is_discount && (_oTemplateTT78.template_type=='HOA_DON_BAN_GIAO_XE' || _oTemplateTT78.template_type=='HOA_DON_BAO_DUONG_XE'))) || configs.system_parameter.discount_on_price\"\r\n        dataField=\"price_after_discount\" headerCellTemplate=\"priceHeaderAfterDiscount\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\" [editorOptions]=\"{ format: formatter.don_gia,step: '0' }\"\r\n        [format]=\"formatter.don_gia\" dataType=\"number\" alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Thành tiền -->\r\n      <dxi-column dataField=\"amount\" headerCellTemplate=\"amountHeader\" minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\"\r\n        [editorOptions]=\"{ format: formatter.thanh_tien ,step: '0'}\" [format]=\"formatter.thanh_tien\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Vat -->\r\n      <dxi-column cssClass=\"vat-invoices\" *ngIf=\"isHdGTGT\" dataField=\"vat\" headerCellTemplate=\"vatHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.vat }}\" alignment=\"center\"\r\n        [editorOptions]=\"{showClearButton: true ,step: '0'}\">\r\n        <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n      </dxi-column>\r\n      <!-- Tiền thuế -->\r\n      <dxi-column *ngIf=\"isHdGTGT\" dataField=\"amount_vat\" headerCellTemplate=\"amountVatHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tien_thue }}\" [editorOptions]=\"{ format: formatter.tien_thue, step: '0' }\"\r\n        [format]=\"formatter.tien_thue\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n      <!-- Thuế khác -->\r\n      <dxi-column\r\n        *ngIf=\"((_objTemplateSelect && (_objTemplateSelect.template_type=='HOA_DON_VE_MAY_TONG_HOP' || _objTemplateSelect.template_type=='HOA_DON_VE_MAY_BAY_CHUNG' || _objTemplateSelect.template_type=='HOA_DON_VE_MAY_BAY_HOAN_VE')) || (_oTemplateTT78 && (_oTemplateTT78.template_type=='HOA_DON_VE_MAY_TONG_HOP' || _oTemplateTT78.template_type=='HOA_DON_VE_MAY_BAY_CHUNG' || _oTemplateTT78.template_type=='HOA_DON_VE_MAY_BAY_HOAN_VE')))\"\r\n        dataField=\"other_tax\" caption=\"{{ _translate.CONTROLL.LABEL.othertax  }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tien_thue }}\" [editorOptions]=\"{ format: formatter.thanh_tien, step: '0' }\"\r\n        [format]=\"formatter.thanh_tien\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n      <!-- Tiền phí khác -->\r\n      <dxi-column\r\n        *ngIf=\"((_objTemplateSelect && (_objTemplateSelect.template_type=='HOA_DON_VE_MAY_TONG_HOP' || _objTemplateSelect.template_type=='HOA_DON_VE_MAY_BAY_CHUNG' || _objTemplateSelect.template_type=='HOA_DON_VE_MAY_BAY_HOAN_VE')) || (_oTemplateTT78 && (_oTemplateTT78.template_type=='HOA_DON_VE_MAY_TONG_HOP' || _oTemplateTT78.template_type=='HOA_DON_VE_MAY_BAY_CHUNG' || _oTemplateTT78.template_type=='HOA_DON_VE_MAY_BAY_HOAN_VE')))\"\r\n        dataField=\"other_charge\" caption=\"{{ _translate.CONTROLL.LABEL.money_other  }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tien_thue }}\" [editorOptions]=\"{ format: formatter.thanh_tien, step: '0' }\"\r\n        [format]=\"formatter.thanh_tien\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n      <!-- Tổng tiền -->\r\n      <dxi-column dataField=\"amount_after_vat\" headerCellTemplate=\"amountAfterVatHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tong_tien_sau_thue }}\"\r\n        [editorOptions]=\"{ format: formatter.tong_tien, step:'0'}\" [format]=\"formatter.tong_tien\" dataType=\"number\"\r\n        alignment=\"right\"></dxi-column>\r\n      <!-- config column header -->\r\n      <div *dxTemplate=\"let d of 'quantityHeader'\">\r\n        <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.quantity }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'exchangeRateHeader'\">\r\n        <p (click)=\"configDecimal('ty_gia')\" style=\"cursor: pointer;\">\r\n          {{ _translate.CONTROLL.LABEL.currency_rate }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceHeader'\">\r\n        <p (click)=\"configDecimal('don_gia')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.price }}<img\r\n            src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceaftervatHeader'\">\r\n        <p (click)=\"configDecimal('don_gia_sau_thue')\" style=\"cursor: pointer;\">{{\r\n          _translate.GRID.INVOICE_DETAILS.price_after_vat }}<img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceHeaderAfterDiscount'\">\r\n        <p (click)=\"configDecimal('don_gia')\" style=\"cursor: pointer;\">{{\r\n          _translate.GRID.INVOICE_DETAILS.price_after_discount }}<img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'price_nteHeader'\">\r\n        <p (click)=\"configDecimal('don_gia_nte')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.price_nte }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountHeader'\">\r\n        <p (click)=\"configDecimal('thanh_tien')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.amount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountNoDiscountHeader'\">\r\n        <p (click)=\"configDecimal('thanh_tien_chua_ck')\" style=\"cursor: pointer;\">{{\r\n          _translate.GRID.INVOICE_DETAILS.amount_without_discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'discountHeader'\">\r\n        <p (click)=\"configDecimal('ty_le_chiet_khau')\" style=\"cursor: pointer;\">{{\r\n          _translate.GRID.INVOICE_DETAILS.discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amount_discountHeader'\">\r\n        <p (click)=\"configDecimal('tien_chiet_khau')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount_discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'discount_on_priceHeader'\">\r\n        <p (click)=\"configDecimal('ck_theo_don_gia')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.discount_on_price }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'vatHeader'\">\r\n        <p>VAT</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount_vat }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountAfterVatHeader'\">\r\n        <p (click)=\"configDecimal('tong_tien')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.total_money }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <!-- config column -->\r\n      <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n        <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'dien_giai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_promotion\" [disabled]=\"d.data.is_promotion_new\"\r\n          (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'khuyen_mai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_promotion_new\" [disabled]=\"d.data.is_promotion\"\r\n          (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'phi_dich_vu'\">\r\n        <dx-check-box [(value)]=\"d.data.is_money_service\" (onValueChanged)=\"changePhiDV(d.data)\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'is_transport_number'\">\r\n        <dx-check-box [(value)]=\"d.data.is_transport_number\"></dx-check-box>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let d of 'cktm'\">\r\n        <dx-check-box [(value)]=\"d.data.commercial_discount\" (onValueChanged)=\"changeCKTM(d.data)\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'PhiHoanVe'\">\r\n        <dx-check-box [(value)]=\"d.data.is_refund_ticket\" (onValueChanged)=\"changePhiHoanVe(d.data)\"></dx-check-box>\r\n      </div>\r\n      <!-- <div *dxTemplate=\"let d of 'product_code'\" style=\"border: none;\" class=\"wrap-code-template\">\r\n        <dx-autocomplete valueExpr=\"code\" [dataSource]=\"select.productsView\" (onFocusOut)=\"product_fieldChange(d.data, 'product_code')\" [(value)]=\"d.data.product_code\" (onItemClick)=\"product_fieldChange(d.data, 'product_code')\">\r\n          <div *dxTemplate=\"let item of 'item'\">\r\n            <span>{{item.code}}: {{ item.name }}</span>\r\n          </div>\r\n        </dx-autocomplete>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'product_name'\" style=\"border: none;\" class=\"wrap-name-template\">\r\n        <dx-autocomplete valueExpr=\"name\" [dataSource]=\"select.productsView\" (onFocusOut)=\"product_fieldChange(d.data, 'product_name')\" [(value)]=\"d.data.product_name\" (onItemClick)=\"product_fieldChange(d.data, 'product_name')\">\r\n          <div *dxTemplate=\"let item of 'item'\">\r\n            <span>{{ item.name }}</span>\r\n          </div>\r\n        </dx-autocomplete>\r\n      </div> -->\r\n      <dxo-paging [enabled]=\"true\"></dxo-paging>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    </dx-data-grid>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/vat/components/product-grip/product-grip.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/vat/components/product-grip/product-grip.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-row i{color:#0E77BB;font-size:18px}.support-invoice{margin-top:20px;margin-bottom:10px}.support-invoice .support-link{padding:6px 15px;border:1px solid #007bff;text-decoration:none}.support-invoice .support-link.mgr-15{margin-right:8px}.support-invoice .support-link img,.support-invoice .support-link i{margin-right:15px;margin-top:-2px}.support-invoice .auto-input{margin-right:20px !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}::ng-deep .styleItemToList{color:dodgerblue}.button-dropdown-extend{display:inline-flex}::ng-deep .vat-invoices .dx-texteditor-buttons-container{display:-ms-inline-grid;display:inline-grid}::ng-deep #gridInvoice{height:208px}::ng-deep .popGuid .dx-widget{display:inline-block}::ng-deep .wrap-column-autoC{padding:0px !important}::ng-deep .wrap-column-autoC .wrap-code-template dx-autocomplete{border:none !important}::ng-deep .wrap-column-autoC .wrap-code-template dx-autocomplete input{text-align:center}::ng-deep .wrap-column-autoC .wrap-name-template dx-autocomplete{border:none !important}::ng-deep .wrap-column-autoC .wrap-name-template dx-autocomplete input{text-align:left}\n"

/***/ }),

/***/ "./src/app/modules/vat/components/product-grip/product-grip.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/vat/components/product-grip/product-grip.component.ts ***!
  \*******************************************************************************/
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
        this.select = {};
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_8__["InvoiceModel"](1);
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
        this.firstTime = true;
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
        this.editorOptionsForCode = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                return _this.invoiceService.addProductInSelecBox(args, _this.select.productsView, _this.dataGrid);
            }
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
        this.onContentReady = function (e) {
            var arrFooter = [
                { name: _this._translate.GRID.INVOICE_DETAILS.total_money, class: 'table-footer-1' },
                { name: _this._translate.GRID.INVOICE_DETAILS.amount_vat, class: 'table-footer-2' },
                { name: _this._translate.GRID.INVOICE_DETAILS.amount, class: 'table-footer-3' },
                { name: _this._translate.GRID.INVOICE_DETAILS.amount_without_discount, class: 'table-footer-4' },
            ];
            _this.invoiceService.formatSumColumnGrid(arrFooter);
            if (_this.firstTime) {
                setTimeout(function () {
                    _this.dataGrid.instance.refresh();
                    _this.dataGrid.instance.updateDimensions();
                    _this.firstTime = false;
                }, 10);
            }
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
                if (isEdit) {
                    invoice = data.init[1];
                    if (invoice.invoice_products.length > 0) {
                        _this.invoiceService.addProductInListP(_this.select.products, invoice.invoice_products, 'code', 'mhvth');
                    }
                }
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
                item.mhvth = item.mhvth ? item.mhvth : (item.code + ': ' + item.name);
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
                            case 'unit_code':
                                _this.unit_codeChange(row);
                                break;
                            case 'country_code':
                                _this.country_codeChange(row);
                                break;
                            case 'quantity':
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
                            case 'discount_on_price':
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
                    eles[2].innerHTML = e.data.product_code;
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
            if (e.dataField === 'product_code') {
                e.editorOptions.onOpened = function (arg) {
                    var popupInstance = arg.component._popup;
                    popupInstance.option('width', 400);
                    popupInstance.option('minWidth', 400);
                };
            }
            if (e.dataField === 'product_name') {
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
            if (e.column.dataField == "product_code") {
                if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(e.data.product_code) != "" && !this.productCodePattern.test(e.data.product_code)) {
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
                    row.product_code = data.code;
                    row.product_name = data.name;
                    row.unit_code = _this.checkUnitCode(data.unit_code);
                    row.quantity = null;
                    row.vat = data.vat ? data.vat.toString() : null;
                    if (_this.configs.system_parameter.price_after_vat) {
                        row.price_after_vat = data.price ? parseFloat(data.price) : data.price;
                        if ((row.vat == 5 || row.vat == 10) && row.price_after_vat)
                            row.price = (row.price_after_vat / (1 + row.vat / 100));
                        else
                            row.price = row.price_after_vat;
                    }
                    else
                        row.price = data.price ? parseFloat(data.price) : data.price;
                    row.amount = data.price ? parseFloat(data.price) : 0;
                    row.amount_vat = (row.vat >= 0 || row.vat == -3) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
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
    /* Thêm dòng hàng hóa */
    ProductGripComponent.prototype.addRow = function (rowIndexFocus) {
        if (rowIndexFocus >= 0) {
            var rowIndex = rowIndexFocus + 1;
            var data = this.frmData.add_invoice_products_data(rowIndex, rowIndex);
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
                var data = this.frmData.add_invoice_products_data(order, order);
                this.invoice_products.insert(data);
            }
        }
        this.dataGrid.instance.refresh();
    };
    ProductGripComponent.prototype.view_orderChange = function () {
        var _this = this;
        if (!this.isTT78) {
            var _index_1 = 0;
            this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    if (item.view_order && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) != _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                        item.view_order = ++_index_1;
                    }
                    if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                        if (!item.is_money_service) {
                            item.view_order = ++_index_1;
                        }
                        else {
                            item.view_order = null;
                        }
                    }
                });
            });
        }
        else {
            var _index_2 = 0;
            this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    if (item.view_order && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) != _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                        item.view_order = ++_index_2;
                    }
                    if (_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                        if (!item.is_money_service) {
                            item.view_order = ++_index_2;
                        }
                        else {
                            item.view_order = null;
                        }
                    }
                });
            });
        }
    };
    // Thay đổi cột mã hàng
    ProductGripComponent.prototype.product_codeChange = function (row) {
        var _this = this;
        this.select.products.some(function (item) {
            if (item.code === row.product_code && !item.notCallApi) {
                _this.productsService.getProduct(item.id).subscribe(function (rs) {
                    if (rs.status == "success") {
                        var product = rs.data.product;
                        if (product) {
                            row.product_name = product.name;
                            row.unit_code = _this.checkUnitCode(product.unit_code);
                            row.quantity = null;
                            if (_this.isHdGTGT) {
                                row.vat = product.vat != null ? product.vat.toString() : null;
                            }
                            else {
                                row.vat = null;
                            }
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
                                row.amount_vat = (row.vat >= 0 || row.vat == -3) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                            }
                            else {
                                row.amount_vat = null;
                            }
                            row.amount_after_vat = row.amount + (row.amount_vat != null ? row.amount_vat : 0);
                            var test = _this.invoice_products;
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
            if (!_this.isTT78) {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.formDataInInvoice, _this.formatter, !_this.formDataInInvoice.auto_value, _this.formDataInInvoice.auto_value_price, _this.select, _this._objTemplateSelect, _this.configs.system_parameter);
                if ((_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBay
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayTongHop
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayChung
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayHoanVe
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonXangDau) && !_this.formDataInInvoice.auto_value) {
                    _core_index__WEBPACK_IMPORTED_MODULE_6__["VChanggeMoneyService"]._changeMoneyTicket(_this.formDataInInvoice, _this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type));
                }
                _this.amount_after_vat = _this.formDataInInvoice.amount_after_vat;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.formDataInInvoice, _this.formatter, !_this.formDataInInvoice.auto_value, _this.formDataInInvoice.auto_value_price, _this.select, _this._oTemplateTT78, _this.configs.system_parameter);
                if ((_core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBay
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayTongHop
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayChung
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonVeMayBayHoanVe
                    || _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_11__["sEnum"].templatetype.HoaDonXangDau) && !_this.formDataInInvoice.auto_value) {
                    _core_index__WEBPACK_IMPORTED_MODULE_6__["VChanggeMoneyService"]._changeMoneyTicket(_this.formDataInInvoice, _this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type));
                }
                _this.amount_after_vat = _this.formDataInInvoice.amount_after_vat;
            }
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
                this.formDataInInvoice.buyer_tax_code = buyer_tax_code[1].trim();
            }
            ////
            var buyer_name = info[2].A.split(':');
            if (buyer_name.length > 1 && buyer_name[1].trim() != '') {
                this.formDataInInvoice.buyer_name = buyer_name[1].trim();
            }
            ////
            var buyer_address = info[3].A.split(':');
            if (buyer_address.length > 1 && buyer_address[1].trim() != '') {
                this.formDataInInvoice.buyer_address = buyer_address[1].trim();
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
                    if (!item.product_code && !item.product_name && !item.quantity && !item.price && !item.amount && !item.amount_vat && !item.amount_after_vat) {
                        _this.invoice_products.remove(item.id);
                    }
                });
            });
        }
        fileData.forEach(function (element) {
            if (element.product_name) {
                var invoice_1 = new Object;
                invoice_1["id"] = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].makeid();
                invoice_1["view_order"] = element.view_order ? parseInt(element.view_order) : null;
                invoice_1["product_code"] = element.product_code ? element.product_code : "";
                invoice_1["product_name"] = element.product_name ? element.product_name : "";
                invoice_1["unit_code"] = element.unit_name ? _this.getUnitCodeByUnitName(element.unit_name) : "";
                invoice_1["unit_name"] = element.unit_name ? element.unit_name : "";
                invoice_1["quantity"] = element.quantity ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(element.quantity) : null;
                invoice_1["vat"] = (element.vat && _this.isHdGTGT) ? element.vat : null;
                invoice_1["contract_order"] = element.contract_order ? element.contract_order : "";
                if (element.price) {
                    if (_this.configs.system_parameter.price_after_vat) {
                        invoice_1["price_after_vat"] = element.price ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(element.price) : null;
                        if ((invoice_1["vat"] == 5 || invoice_1["vat"] == 10 || invoice_1["vat"] == 7 || invoice_1["vat"] == 3.5) && invoice_1["price_after_vat"] !== null)
                            invoice_1["price"] = (invoice_1["price_after_vat"] / (1 + invoice_1["vat"] / 100));
                        else
                            invoice_1["price"] = invoice_1["price_after_vat"];
                    }
                    else
                        invoice_1["price"] = element.price ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(element.price) : null;
                }
                invoice_1["amount"] = element.amount ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(element.amount) : null;
                invoice_1["amount_vat"] = element.amount_vat ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(element.amount_vat) : null;
                // invoice["note"] = element.note ? element.note : null;
                invoice_1["other_tax"] = element.other_tax ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(element.other_tax) : null;
                invoice_1["other_charge"] = element.other_charge ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(element.other_charge) : null;
                invoice_1["product_exchange_rate"] = element.product_exchange_rate ? _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].toNumber(element.product_exchange_rate) : null;
                invoice_1["product_date"] = element.product_date ? element.product_date : null;
                invoice_1["engine_number"] = element.engine_number ? element.engine_number : null;
                invoice_1["chassis_number"] = element.chassis_number ? element.chassis_number : null;
                invoice_1["management_code"] = element.management_code ? element.management_code : null;
                invoice_1["is_money_service"] = element.is_money_service && (element.is_money_service == "X" || element.is_money_service == "x") ? true : false;
                invoice_1["is_refund_ticket"] = element.is_refund_ticket && (element.is_refund_ticket == "X" || element.is_refund_ticket == "x") ? true : false;
                invoice_1["is_promotion"] = element.is_promotion && (element.is_promotion == "X" || element.is_promotion == "x") ? true : false;
                invoice_1["is_promotion_new"] = element.is_promotion_new && (element.is_promotion_new == "X" || element.is_promotion_new == "x") ? true : false;
                invoice_1["lot"] = element.lot ? element.lot : null;
                invoice_1["expiration_date"] = element.expiration_date ? element.expiration_date : null;
                if (invoice_1["amount_vat"] !== null && invoice_1["amount"] !== null)
                    invoice_1["amount_after_vat"] = invoice_1["amount_vat"] + invoice_1["amount"];
                else if (invoice_1["amount"] !== null)
                    invoice_1["amount_after_vat"] = invoice_1["amount"];
                else if (invoice_1["amount_vat"] !== null)
                    invoice_1["amount_after_vat"] = invoice_1["amount_vat"];
                else
                    invoice_1["amount_after_vat"] = null;
                if (invoice_1["other_tax"] !== null)
                    invoice_1["amount_after_vat"] = invoice_1["amount_after_vat"] + invoice_1["other_tax"];
                if (invoice_1["other_charge"] !== null)
                    invoice_1["amount_after_vat"] = invoice_1["amount_after_vat"] + invoice_1["other_charge"];
                var _obj = _this.select.products.filter(function (p) { return p.code === invoice_1["product_code"]; })[0];
                if (!_obj && invoice_1["product_code"] !== '') {
                    var _objPush = {
                        code: invoice_1["product_code"],
                        name: invoice_1["product_name"],
                        mhvth: invoice_1["product_code"] + ': ' + invoice_1["product_name"],
                    };
                    _this.select.products.push(_objPush);
                }
                invoice_1["commercial_discount"] = false;
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
            if (!this.select.unit_codes || !Array.isArray(this.select.unit_codes)) {
                this.select.unit_codes = [];
            }
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
        if (row.is_money_service && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(row.product_name) == '') {
            row.product_name = 'Phí dịch vụ';
            this.invoice_products.update(row.id, row);
        }
        else if (!row.is_money_service && _core_index__WEBPACK_IMPORTED_MODULE_6__["VStringService"]._getValueToString(row.product_name) === 'Phí dịch vụ') {
            row.product_name = '';
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
            template: __webpack_require__(/*! ./product-grip.component.html */ "./src/app/modules/vat/components/product-grip/product-grip.component.html"),
            styles: [__webpack_require__(/*! ./product-grip.component.scss */ "./src/app/modules/vat/components/product-grip/product-grip.component.scss")]
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

/***/ "./src/app/modules/vat/components/send-invoices/send-invoices.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/vat/components/send-invoices/send-invoices.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.process_invoice}}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-7\">\r\n            <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n              <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                <dxi-item [label]=\"{text: _translate.GRID.INVOICE.template_code }\" dataField=\"template\"  [editorOptions]=\"{readOnly: true}\">\r\n                </dxi-item>\r\n              </dxi-item>\r\n              <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n                <dxi-item dataField=\"invoice_date\" [label]=\"{text: _translate.GRID.INVOICE.invoice_date}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item cssClass=\"invoice-number-create-invoice\" dataField=\"invoice_number\" [label]=\"{text: _translate.GRID.INVOICE.invoice_number}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item dataField=\"customer_code\" [label]=\"{text: _translate.CONTROLL.LABEL.customer_code}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item dataField=\"buyer_tax_code\" [label]=\"{text: _translate.GRID.INVOICE.buyer_tax_code }\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item dataField=\"buyer_name\" [label]=\"{text: _translate.CONTROLL.LABEL.buyer_name }\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item dataField=\"buyer_mobile\" [label]=\"{text: _translate.CONTROLL.LABEL.phone }\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              </dxi-item>\r\n              <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                <dxi-item dataField=\"buyer_name\" [label]=\"{text: _translate.CONTROLL.LABEL.customer_name}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              </dxi-item>\r\n            </dx-form>\r\n          </div>\r\n          <div class=\"col-lg-5\">\r\n            <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n              <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                <dxi-item cssClass=\"form-input-visibility\" dataField=\"invoice_date\" [label]=\"{text: 'temp'}\"></dxi-item>\r\n                <!-- <dxi-item dataField=\"a\" [label]=\"{text: 'Số xác thực'}\" [editorOptions]=\"{disabled: true}\"></dxi-item> -->\r\n              </dxi-item>\r\n              <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n                  <dxi-item dataField=\"currency_code\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_code}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item dataField=\"currency_rate\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_rate}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              </dxi-item>\r\n              <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                  <dxi-item dataField=\"payment_method_name\" [label]=\"{text: _translate.CONTROLL.LABEL.payment_method}\"  [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                <dxi-item dataField=\"buyer_email\" [label]=\"{text: 'Email'}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              </dxi-item>\r\n            </dx-form>\r\n          </div>\r\n          <div class=\"col-lg-12 link-send-invoice\">\r\n            <div class=\"pull-right\">\r\n              <a *ngIf=\"invoice.status == 'DA_XUAT'\" (click)=\"sendMail()\" href=\"javascript:void(0)\">{{_translate.CONTROLL.LABEL.send_invoice}}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <dx-data-grid\r\n        id=\"invoiceHistoryGrid\"\r\n        [dataSource]=\"invoice_process\"\r\n        (onEditorPreparing) = \"onEditorPreparing($event)\"\r\n        [showBorders]=\"true\"\r\n        [wordWrapEnabled]=\"true\"\r\n        [showRowLines]=\"true\">\r\n        <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n        <dxi-column cellTemplate=\"stt\" caption=\"{{_translate.GRID.INVOICE_DETAILS.view_order}}\" width=\"80\" alignment=\"center\"></dxi-column>\r\n        <dxi-column dataField=\"process_time\" caption=\"{{_translate.CONTROLL.LABEL.date_made}}\" width=\"180\" dataType=\"datetime\" format=\"dd/MM/yyyy HH:mm:ss\" dateSerializationFormat=\"yyyy-MM-dd HH:mm:ss\" alignment=\"center\"></dxi-column>\r\n        <dxi-column dataField=\"content\" cellTemplate=\"content\" caption=\"{{_translate.CONTROLL.LABEL.task}}\" alignment=\"left\"></dxi-column>\r\n        <dxi-column dataField=\"user_name\" caption=\"{{_translate.CONTROLL.LABEL.person_made}}\" alignment=\"left\"></dxi-column>\r\n        <div *dxTemplate=\"let d of 'stt'\">\r\n          <p>{{ d.rowIndex + 1 }}</p>\r\n        </div>\r\n        <div *dxTemplate=\"let d of 'content'\">\r\n              {{ d.data.content}}\r\n          </div>\r\n      </dx-data-grid>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" icon=\"{{_translate.ICONS.come_back }}\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n      </dx-button>\r\n    </div>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/modules/vat/components/send-invoices/send-invoices.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/vat/components/send-invoices/send-invoices.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .form-input-visibility{visibility:hidden}::ng-deep .invoice-number-create-invoice input{color:red;font-weight:bold}.link-send-invoice{margin-top:10px}.link-send-invoice a{text-decoration:underline}#invoiceHistoryGrid{margin-top:15px}\n"

/***/ }),

/***/ "./src/app/modules/vat/components/send-invoices/send-invoices.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/vat/components/send-invoices/send-invoices.component.ts ***!
  \*********************************************************************************/
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
/* harmony import */ var _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../send-mail/send-mail.component */ "./src/app/modules/vat/components/send-mail/send-mail.component.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
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
    function SendInvoicesComponent(authService, bsModalRef, vatService, modalService, bsModalSendMail, customersService) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.modalService = modalService;
        this.bsModalSendMail = bsModalSendMail;
        this.customersService = customersService;
        this.frmData = {};
        this._translate = this.authService.getTranslate();
    }
    SendInvoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadTableContent();
        var invoice = this.invoice;
        var template_code = invoice.template_code ? invoice.template_code : invoice.template.template_code;
        var invoice_series = invoice.invoice_series ? invoice.invoice_series : invoice.template.invoice_series;
        this.frmData.template = template_code + " - " + invoice_series;
        this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_1__(invoice.invoice_date).format('DD/MM/YYYY');
        this.frmData.invoice_number = invoice.invoice_number;
        this.frmData.customer_code = invoice.customer_code;
        this.frmData.buyer_tax_code = invoice.buyer_tax_code;
        this.frmData.buyer_name = invoice.buyer_name;
        this.frmData.buyer_mobile = invoice.buyer_mobile;
        this.frmData.buyer_email = invoice.buyer_email;
        this.frmData.currency_code = invoice.currency_code;
        this.frmData.payment_method_name = invoice.payment_method_view_name;
        this.frmData.customer_id = invoice.customer_id;
        this.email = invoice.buyer_email;
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
        var sub = this.vatService.getInvoiceProccess(this.invoice.id).subscribe(function (rs) {
            var mapObj = {
                T: "; ",
            };
            _this.invoice_process = rs.data.invoice_process;
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
            invoice_id: this.invoice.id,
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
            template: __webpack_require__(/*! ./send-invoices.component.html */ "./src/app/modules/vat/components/send-invoices/send-invoices.component.html"),
            styles: [__webpack_require__(/*! ./send-invoices.component.scss */ "./src/app/modules/vat/components/send-invoices/send-invoices.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_7__["CustomersService"]])
    ], SendInvoicesComponent);
    return SendInvoicesComponent;
}());



/***/ }),

/***/ "./src/app/modules/vat/components/send-mail/send-mail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/vat/components/send-mail/send-mail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.BUTTON.send}} EMAIL</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n        <dxi-item dataField=\"email\" [label]=\"{text: 'Email'}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Email {{_translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n          <!-- <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.email\" message=\"Email {{_translate.VALIDATION.not_pattern}}\"></dxi-validation-rule> -->\r\n        </dxi-item>\r\n      </dx-form>\r\n      <div style=\"margin-top: 10px;\">\r\n          <a style=\"color: silver;text-decoration: underline;font-size: 90%;\">{{_translate.CONTROLL.LABEL.note1}}: </a><a style=\"color: silver;font-size: 90%;\"> {{_translate.CONTROLL.LABEL.note_email}}</a>\r\n        </div>\r\n        <div style=\"margin-top: 5px;\">\r\n            <a style=\"color: silver;font-size: 90%;\">{{_translate.CONTROLL.LABEL.example}}: admin@efy.com.vn;sale@efy.com.vn</a>\r\n          </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <dx-button text=\"{{_translate.CONTROLL.BUTTON.send}}\" icon=\"{{_translate.ICONS.send_email}}\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n      </dx-button>\r\n      <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n      </dx-button>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "./src/app/modules/vat/components/send-mail/send-mail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/vat/components/send-mail/send-mail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/vat/components/send-mail/send-mail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/vat/components/send-mail/send-mail.component.ts ***!
  \*************************************************************************/
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
    function SendMailComponent(bsModalRef, vatService, authService, customersService) {
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.authService = authService;
        this.customersService = customersService;
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
            template: __webpack_require__(/*! ./send-mail.component.html */ "./src/app/modules/vat/components/send-mail/send-mail.component.html"),
            styles: [__webpack_require__(/*! ./send-mail.component.scss */ "./src/app/modules/vat/components/send-mail/send-mail.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_5__["CustomersService"]])
    ], SendMailComponent);
    return SendMailComponent;
}());



/***/ }),

/***/ "./src/app/modules/vat/components/sign-many/sign-many.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/vat/components/sign-many/sign-many.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{ 'MENU.list_invoice_waiting_for_signing' | translate }}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"dong()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid \r\n    id=\"gridContainer\"\r\n    [dataSource]=\"invoiceList\"\r\n    [showRowLines]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [columnMinWidth]=\"50\"\r\n    [columnResizingMode]=\"true\"\r\n    [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\">\r\n\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\" caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"template_code\" caption=\"{{ 'GRID.INVOICE.template_code' | translate }}\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"template.invoice_series\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" [width]=\"90\" alignment=\"center\" [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column>\r\n    <dxi-column dataField=\"invoice_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\" [width]=\"110\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"buyer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\" [width]=\"140\" alignment=\"left\"></dxi-column>\r\n    <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\" alignment=\"left\"></dxi-column>\r\n    <dxi-column dataField=\"total_payment\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" dataType=\"number\" format=\"0,###.##\"  alignment=\"right\" ></dxi-column>\r\n    <dxi-column cellTemplate=\"statusName\" caption=\"{{ 'GRID.GENERAL.status' | translate }}\" [width]=\"130\" alignment=\"center\"></dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n        *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n      <p>{{ d.data.template.template_code }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n      <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name || 'Hóa đơn chờ ký' }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'statusName'\">\r\n      <p style=\"color:green;\" *ngIf=\"d.data.status =='DA_XUAT'\">Đã ký</p>\r\n      <p style=\"color: red;\" *ngIf=\"d.data.status !='DA_XUAT' && d.data.status !='GIU_SO'\">{{ d.data.status }}</p>\r\n    </div>\r\n    \r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <div style=\"width: 89%\">\r\n    <label class=\"custom-control-label\"\r\n           for=\"customRadio212\">{{reportCountERR}}</label>\r\n  </div>\r\n\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.sign}}\" icon=\"{{_translate.ICONS.pencil}}\" *ngIf=\"!daXong\" type=\"default\" (click)=\"kyHangLoat()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/vat/components/sign-many/sign-many.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/vat/components/sign-many/sign-many.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-control-label{margin-top:4px;color:red;font-weight:800;font-family:Times New Roman}\n"

/***/ }),

/***/ "./src/app/modules/vat/components/sign-many/sign-many.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/vat/components/sign-many/sign-many.component.ts ***!
  \*************************************************************************/
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
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
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
    function SignManyComponent(bsModalRef, vatService, socketService, authService, router, spinner, vPreviewInvService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.router = router;
        this.spinner = spinner;
        this.vPreviewInvService = vPreviewInvService;
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
            }
            else {
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
        if (this.isHdGTGT) {
            if (this.search)
                this.router.navigate(["/system/vat-invoice"], { queryParams: this.search });
            else
                this.router.navigate(["/system/vat-invoice"]);
        }
        else {
            if (this.search)
                this.router.navigate(["/system/sale-invoice"], { queryParams: this.search });
            else
                this.router.navigate(["/system/sale-invoice"]);
        }
    };
    SignManyComponent.prototype.viewDetailInvoice = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            var dulieu = this.vatService.taodulieuXemMau(ids);
            dulieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(dulieu);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    SignManyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-many',
            template: __webpack_require__(/*! ./sign-many.component.html */ "./src/app/modules/vat/components/sign-many/sign-many.component.html"),
            styles: [__webpack_require__(/*! ./sign-many.component.scss */ "./src/app/modules/vat/components/sign-many/sign-many.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__["ViewInvoiceService"]])
    ], SignManyComponent);
    return SignManyComponent;
}());



/***/ }),

/***/ "./src/app/modules/vat/components/view-invoice/view-invoice.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/vat/components/view-invoice/view-invoice.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{lblTitle}}</h4>\r\n  <div>\r\n    <div *ngFor=\"let item of items | paginate: { itemsPerPage: 1, currentPage: p }; let i = index\">\r\n    </div>\r\n    <pagination-controls style=\"width: 50%;\" (pageChange)=\"getPage($event)\"></pagination-controls>\r\n  </div>\r\n  <div style=\"display: flex; align-items: center;\">\r\n    <dx-button *ngIf=\"isXuatHD\" text=\"Đồng ý\" icon=\"{{_translate.ICONS.save}}\" type=\"default\" (click)=\"dongy()\">\r\n    </dx-button>\r\n    <i class=\"fa fa-times\" style=\"font-size:25px; cursor: pointer;\" (click)=\"dong()\"></i>\r\n  </div>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"body-content\">\r\n    <div *ngIf=\"isXuatHD\" class=\"canh-bao\">\r\n      <p style=\"font-weight: 600;\">\r\n        <span class=\"nhap-nhay\"></span>\r\n        <span style=\"font-size: 17px;\">Lưu ý: </span>\r\n        Đề nghị đơn vị kiểm tra thật kỹ các nội dung hóa đơn đã nhập trước khi xuất như: Ngày hóa đơn, Bên mua hàng, Tên\r\n        hàng hóa dịch vụ, Tổng tiền,…để tránh xuất sai.\r\n      </p>\r\n    </div>\r\n    <div style=\"display: flex; width: 100%;\">\r\n      <iframe height=\"{{heightT}}\" id=\"preview-iframe\"></iframe>\r\n      <div *ngIf=\"isXuatHD\" class=\"thong-tin-hoa-don\">\r\n        <div class=\"e-invoice\">\r\n          <p style=\" font-weight: 600;\" *ngIf=\"!isHoaDon\">Ngày chứng từ : </p>\r\n          <p style=\" font-weight: 600;\" *ngIf=\"isHoaDon\">Ngày hóa đơn : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">{{ngayHD}}</p>\r\n        </div>\r\n        <div class=\"e-invoice\">\r\n          <p style=\"font-weight: 600;\">Trạng thái : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">Xuất {{hinhthucxuat}}</p>\r\n        </div>\r\n        <div class=\"e-invoice\">\r\n          <p style=\"font-weight: 600;\">Tổng tiền : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">{{total_payment}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/vat/components/view-invoice/view-invoice.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/vat/components/view-invoice/view-invoice.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-header{display:flex;justify-content:space-between;align-items:center}.pagination{display:flex}.pagination a{color:black;float:left;padding:8px 16px;text-decoration:none}::ng-deep .body-content{height:100%}.modal-body .body-content{display:flex;justify-content:center;align-items:center;flex-direction:column}.nhap-nhay{background:red;padding:0.5px 9px;margin-right:5px;border-radius:57%;-webkit-animation:flicker 1s infinite}@-webkit-keyframes flicker{0%{opacity:0}9%{opacity:0}10%{opacity:.5}13%{opacity:0}20%{opacity:.5}25%{opacity:1}}.example{padding:20px}input[type=button]{padding:5px 10px;margin:10px 5px;border-radius:5px;cursor:pointer;background:#ddd;border:1px solid #ccc}input[type=button]:hover{background:#ccc}.confirm{display:none}.confirm>div:first-of-type{position:fixed;width:100%;height:100%;background:rgba(0,0,0,0.5);top:0px;left:0px}.confirm>div:last-of-type{padding:10px 20px;background:white;position:absolute;width:auto;height:auto;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border-radius:5px;border:1px solid #333}.confirm>div:last-of-type div:first-of-type{min-width:150px;padding:10px}.confirm>div:last-of-type div:last-of-type{text-align:right}.canh-bao{margin-bottom:10px}#preview-iframe{width:calc(100% - 20px)}\n"

/***/ }),

/***/ "./src/app/modules/vat/components/view-invoice/view-invoice.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/vat/components/view-invoice/view-invoice.component.ts ***!
  \*******************************************************************************/
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
    function ViewInvoiceComponent(bsModal, vatService, router, translate, authService, socketService, spinner) {
        var _this = this;
        this.bsModal = bsModal;
        this.vatService = vatService;
        this.router = router;
        this.translate = translate;
        this.authService = authService;
        this.socketService = socketService;
        this.spinner = spinner;
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
        this.isHoaDon = false;
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
                this.lblTitle = "BẢN DỰ THẢO HÓA ĐƠN ĐIỆN TỬ";
                this.isTaiHD = false;
                this.isHoaDon = false;
                break;
            case "NAP_EXCEL_HD":
                this.lblTitle = "BẢN DỰ THẢO HÓA ĐƠN ĐIỆN TỬ";
                this.isTaiHD = false;
                this.isHoaDon = true;
                break;
            case "XEM_HOA_DON":
                this.lblTitle = "XEM HÓA ĐƠN ĐIỆN TỬ";
                this.isTaiHD = true;
                break;
            case "IN_CHUYEN_DOI":
                this.lblTitle = "IN CHUYỂN ĐỔI HÓA ĐƠN ĐIỆN TỬ";
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
            case "NAP_EXCEL_HD":
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
        var data = {
            invoices: invoicesArr
        };
        var sub = this.vatService.previewInvoiceImport(data).subscribe(function (rs) {
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
                    var appCode = "REPX";
                    if (rs.data.invoice.is_html_template)
                        appCode = "HTML";
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
        var sub = this.vatService.xemHoaDonInvoiceImport(arrId).subscribe(function (rs) {
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
            template: __webpack_require__(/*! ./view-invoice.component.html */ "./src/app/modules/vat/components/view-invoice/view-invoice.component.html"),
            styles: [__webpack_require__(/*! ./view-invoice.component.scss */ "./src/app/modules/vat/components/view-invoice/view-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], ViewInvoiceComponent);
    return ViewInvoiceComponent;
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



/***/ }),

/***/ "./src/app/modules/vat/vat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/vat/vat.module.ts ***!
  \*******************************************/
/*! exports provided: VatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatModule", function() { return VatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _vat_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vat.routing */ "./src/app/modules/vat/vat.routing.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/vat/components/index/index.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/modules/vat/components/invoice/invoice.component.ts");
/* harmony import */ var _components_keep_number_keep_number_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/keep-number/keep-number.component */ "./src/app/modules/vat/components/keep-number/keep-number.component.ts");
/* harmony import */ var _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/send-invoices/send-invoices.component */ "./src/app/modules/vat/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/send-mail/send-mail.component */ "./src/app/modules/vat/components/send-mail/send-mail.component.ts");
/* harmony import */ var _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-grip/product-grip.component */ "./src/app/modules/vat/components/product-grip/product-grip.component.ts");
/* harmony import */ var _components_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/form-invoice/form-invoice.component */ "./src/app/modules/vat/components/form-invoice/form-invoice.component.ts");
/* harmony import */ var _components_import_invoices_import_invoices_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/import-invoices/import-invoices.component */ "./src/app/modules/vat/components/import-invoices/import-invoices.component.ts");
/* harmony import */ var _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sign-many/sign-many.component */ "./src/app/modules/vat/components/sign-many/sign-many.component.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/modules/vat-shared/components/view-attach-file/view-attach-file.component */ "./src/app/shared/modules/vat-shared/components/view-attach-file/view-attach-file.component.ts");
/* harmony import */ var _components_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/import-invoices-dt/import-invoices-dt.component */ "./src/app/modules/vat/components/import-invoices-dt/import-invoices-dt.component.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/choose-hdck/choose-hdck.component */ "./src/app/modules/vat/components/choose-hdck/choose-hdck.component.ts");
/* harmony import */ var _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/view-invoice/view-invoice.component */ "./src/app/modules/vat/components/view-invoice/view-invoice.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// library

// general































var VatModule = /** @class */ (function () {
    function VatModule() {
    }
    VatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _vat_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["VatSharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SomeModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_2__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_15__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_19__["DxLookupModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_18__["TagInputModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_19__["DxTooltipModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_19__["DxPopoverModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_26__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_27__["NgxSpinnerModule"]
            ],
            exports: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_7__["InvoiceComponent"],
                _components_keep_number_keep_number_component__WEBPACK_IMPORTED_MODULE_8__["KeepNumberComponent"],
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_9__["SendInvoicesComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_10__["SendMailComponent"],
                _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_11__["ProductGripComponent"],
                _components_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_12__["FormInvoiceComponent"],
                _components_import_invoices_import_invoices_component__WEBPACK_IMPORTED_MODULE_13__["ImportInvoicesComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_14__["SignManyComponent"],
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_7__["InvoiceComponent"],
                _components_keep_number_keep_number_component__WEBPACK_IMPORTED_MODULE_8__["KeepNumberComponent"],
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_9__["SendInvoicesComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_10__["SendMailComponent"],
                _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_11__["ProductGripComponent"],
                _components_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_12__["FormInvoiceComponent"],
                _components_import_invoices_import_invoices_component__WEBPACK_IMPORTED_MODULE_13__["ImportInvoicesComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_14__["SignManyComponent"],
                _components_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_17__["ImportInvoicesDtComponent"],
                _components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_24__["ChooseHdckComponent"],
                _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_25__["ViewInvoiceComponent"]
            ],
            entryComponents: [
                _components_keep_number_keep_number_component__WEBPACK_IMPORTED_MODULE_8__["KeepNumberComponent"],
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_9__["SendInvoicesComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_10__["SendMailComponent"],
                _components_import_invoices_import_invoices_component__WEBPACK_IMPORTED_MODULE_13__["ImportInvoicesComponent"],
                _components_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_17__["ImportInvoicesDtComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_14__["SignManyComponent"],
                _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_16__["ViewAttachFileComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["NotifySuccessComponent"],
                _components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_24__["ChooseHdckComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["NotifyReduceTaxComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SendDataForTaxComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SendListEmailComponent"],
                _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_25__["ViewInvoiceComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SignatureOffComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["ViewInvoiceMultipageComponent"],
                _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_30__["PreviewInvoiceComponent"]
            ],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceResolver"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["ShowInvoiceResolver"],
                _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_20__["VatDeactivateGuard"],
                _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_21__["ConfirmService"],
                _modules_lists_shared__WEBPACK_IMPORTED_MODULE_22__["ListsService"],
                _modules_customers_shared__WEBPACK_IMPORTED_MODULE_23__["CustomersService"],
                _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_28__["MyBsModalService"],
                _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_29__["InvoicesService"]
            ]
        })
    ], VatModule);
    return VatModule;
}());



/***/ }),

/***/ "./src/app/modules/vat/vat.routing.ts":
/*!********************************************!*\
  !*** ./src/app/modules/vat/vat.routing.ts ***!
  \********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/vat/components/index/index.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/modules/vat/components/invoice/invoice.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/modules/vat/shared/index.ts");
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
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceResolver"] },
        data: { brec: 'create_invoice' }
    },
    {
        path: ':invoiceId',
        component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["VatDeactivateGuard"]],
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_4__["ShowInvoiceResolver"] },
        data: { brec: 'invoice_details' }
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



/***/ })

}]);
//# sourceMappingURL=invoice-buy-invoice-buy-module~vat-vat-module.js.map