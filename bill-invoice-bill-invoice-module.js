(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bill-invoice-bill-invoice-module"],{

/***/ "./src/app/modules/bill-invoice/bill-invoice-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/bill-invoice/bill-invoice-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: BillInvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillInvoiceRoutingModule", function() { return BillInvoiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/bill-invoice/components/index/index.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/modules/bill-invoice/components/invoice/invoice.component.ts");
/* harmony import */ var _shared_invoice_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/invoice.resolver */ "./src/app/modules/bill-invoice/shared/invoice.resolver.ts");
/* harmony import */ var _shared_show_invoice_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/show-invoice.resolver */ "./src/app/modules/bill-invoice/shared/show-invoice.resolver.ts");
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
        path: 'create',
        component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        resolve: { init: _shared_invoice_resolver__WEBPACK_IMPORTED_MODULE_4__["InvoiceResolver"] },
        data: { brec: 'create_invoice' }
    },
    {
        path: ':invoiceId',
        component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        resolve: { init: _shared_show_invoice_resolver__WEBPACK_IMPORTED_MODULE_5__["ShowInvoiceResolver"] },
        data: { brec: 'invoice_details' }
    },
];
var BillInvoiceRoutingModule = /** @class */ (function () {
    function BillInvoiceRoutingModule() {
    }
    BillInvoiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BillInvoiceRoutingModule);
    return BillInvoiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/bill-invoice.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/bill-invoice/bill-invoice.module.ts ***!
  \*************************************************************/
/*! exports provided: BillInvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillInvoiceModule", function() { return BillInvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _bill_invoice_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bill-invoice-routing.module */ "./src/app/modules/bill-invoice/bill-invoice-routing.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/bill-invoice/components/index/index.component.ts");
/* harmony import */ var _components_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/form-invoice/form-invoice.component */ "./src/app/modules/bill-invoice/components/form-invoice/form-invoice.component.ts");
/* harmony import */ var _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product-grip/product-grip.component */ "./src/app/modules/bill-invoice/components/product-grip/product-grip.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/modules/bill-invoice/components/invoice/invoice.component.ts");
/* harmony import */ var _shared_invoice_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/invoice.resolver */ "./src/app/modules/bill-invoice/shared/invoice.resolver.ts");
/* harmony import */ var _shared_show_invoice_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/show-invoice.resolver */ "./src/app/modules/bill-invoice/shared/show-invoice.resolver.ts");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/send-invoices/send-invoices.component */ "./src/app/modules/bill-invoice/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/send-mail/send-mail.component */ "./src/app/modules/bill-invoice/components/send-mail/send-mail.component.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _components_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/import-invoices-dt/import-invoices-dt.component */ "./src/app/modules/bill-invoice/components/import-invoices-dt/import-invoices-dt.component.ts");
/* harmony import */ var _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/view-invoice/view-invoice.component */ "./src/app/modules/bill-invoice/components/view-invoice/view-invoice.component.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _components_send_invoice_to_tax_send_invoice_to_tax_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/send-invoice-to-tax/send-invoice-to-tax.component */ "./src/app/modules/bill-invoice/components/send-invoice-to-tax/send-invoice-to-tax.component.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var BillInvoiceModule = /** @class */ (function () {
    function BillInvoiceModule() {
    }
    BillInvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _bill_invoice_routing_module__WEBPACK_IMPORTED_MODULE_10__["BillInvoiceRoutingModule"],
                _core_library__WEBPACK_IMPORTED_MODULE_3__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_4__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxLookupModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTooltipModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxPopoverModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_20__["VatSharedModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_11__["IndexComponent"],
                _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__["InvoiceComponent"],
                _components_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_12__["FormInvoiceComponent"],
                _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_13__["ProductGripComponent"],
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_21__["SendInvoicesComponent"],
                _components_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_24__["ImportInvoicesDtComponent"],
                _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_25__["ViewInvoiceBillComponent"],
                _components_send_invoice_to_tax_send_invoice_to_tax_component__WEBPACK_IMPORTED_MODULE_27__["SendInvoiceToTaxComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_22__["SendMailComponent"]
            ],
            entryComponents: [
                _shared_components__WEBPACK_IMPORTED_MODULE_9__["ViewInvoiceMultipageComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_20__["SendListEmailComponent"],
                _components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_21__["SendInvoicesComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_22__["SendMailComponent"],
                _components_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_24__["ImportInvoicesDtComponent"],
                _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_25__["ViewInvoiceBillComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_9__["SendDataForTaxComponent"],
                _shared_components__WEBPACK_IMPORTED_MODULE_9__["NotifyReduceTaxComponent"],
                _components_send_invoice_to_tax_send_invoice_to_tax_component__WEBPACK_IMPORTED_MODULE_27__["SendInvoiceToTaxComponent"],
                _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_28__["PreviewInvoiceComponent"]
            ],
            providers: [
                _shared_invoice_resolver__WEBPACK_IMPORTED_MODULE_15__["InvoiceResolver"],
                _shared_show_invoice_resolver__WEBPACK_IMPORTED_MODULE_16__["ShowInvoiceResolver"],
                _modules_lists_shared__WEBPACK_IMPORTED_MODULE_17__["ListsService"],
                _modules_customers_shared__WEBPACK_IMPORTED_MODULE_18__["CustomersService"],
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_19__["VatService"],
                _modules_template_shared__WEBPACK_IMPORTED_MODULE_23__["TemplateService"],
                _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_26__["MyBsModalService"],
                _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_29__["ViewInvoiceService"]
            ]
        })
    ], BillInvoiceModule);
    return BillInvoiceModule;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/components/form-invoice/form-invoice.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/form-invoice/form-invoice.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row invoice-form\">\r\n  <div class=\"col-md-12\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <!-- mẫu hóa đơn -->\r\n        <dxi-item dataField=\"template_id\" editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.templatesTT78, onValueChanged: onChangeTem, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_form }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{ _translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <!-- ngày hóa đơn số hóa đơn -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item [cssClass]=\"'max_left'\" dataField=\"bill_date\" editorType=\"dxDateBox\"\r\n            [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss' , onValueChanged: changeDateTime}\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_date }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item [cssClass]=\"'max_right'\" dataField=\"bill_number\" [template]=\"'notifydate'\">\r\n            <dxo-label text=\"{{ _translate.GRID.INVOICE.invoice_number }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\" [cssClass]=\"showFormMTT\">\r\n        <!-- Thông tin đơn vị -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- mã số thuế -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='vat_mtt layout_input group-input-button'>\r\n            <dxi-item name=\"search-mst\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.tax_code }}\"></dxo-label>\r\n              <div *dxTemplate>\r\n                <dx-autocomplete valueExpr=\"tax_code\"\r\n                  placeholder=\"{{ _translate.CONTROLL.PLACE_HOLDER.input_content_search }}\" [dataSource]=\"tax_codes\"\r\n                  [readOnly]=\"readOnlyCacTruongConLai\" (onItemClick)=\"taxCodeChoose($event)\"\r\n                  [(value)]=\"frmData.buyer_tax_code\" (onFocusOut)=\"updateTaxcodeInfo($event)\"\r\n                  (onValueChanged)=\"changeTaxCode($event)\">\r\n                  <div *dxTemplate=\"let item of 'item'\">\r\n                    <span>{{item.tax_code}}: {{ item.name }}</span>\r\n                  </div>\r\n                </dx-autocomplete>\r\n              </div>\r\n            </dxi-item>\r\n            <!--            <dxi-item itemType=\"button\" [buttonOptions]=\"mst_btn_options\" cssClass='btn-small'>-->\r\n            <!--            </dxi-item>-->\r\n            <dxi-item cssClass='btn-small'>\r\n              <button (click)=\"searchTaxCode()\" type=\"button\" class=\"button-tax-code\">\r\n                <i class=\"{{_translate.ICONS.search}}\" style=\"font-size: 22px;\"></i>\r\n              </button>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <!-- Mã kh -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='vat_mtt layout_input group-input-button'>\r\n            <dxi-item name=\"search-mkh\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_code }}\"></dxo-label>\r\n              <div *dxTemplate>\r\n                <dx-autocomplete valueExpr=\"code\" [(value)]=\"frmData.customer_code\"\r\n                  placeholder=\"{{ _translate.CONTROLL.PLACE_HOLDER.input_content_search }}\"\r\n                  [dataSource]=\"customer_codes\" [readOnly]=\"readOnlyCacTruongConLai\"\r\n                  (onItemClick)=\"customerCodeChoose($event)\" (onFocusOut)=\"updateCustomerInfo($event)\">\r\n                  <div *dxTemplate=\"let item of 'item'\">\r\n                    <span>{{item.code}}: {{ item.name }}</span>\r\n                  </div>\r\n                </dx-autocomplete>\r\n              </div>\r\n            </dxi-item>\r\n            <dxi-item cssClass='btn-small'>\r\n              <button (click)=\"editTaxCode()\" type=\"button\" class=\"button-tax-code\">\r\n                <i class=\"dx-icon fa fa-plus-circle icon-size\"></i>\r\n              </button>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Tên đơn vị -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item dataField=\"customer_name\" [editorOptions]=\"{ isRequired: false,onValueChanged: customerChanged}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_name }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Họ tên người mua -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item dataField=\"buyer_name\" [editorOptions]=\"{onValueChanged: customerChanged}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.buyer_name }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Địa chỉ người mua -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item dataField=\"buyer_address\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.buyer_address }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Hình thức thanh toán và email -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item cssClass=\"vat_mtt layout_input\" dataField=\"payment_method_code\" editorType=\"dxSelectBox\"\r\n            [editorOptions]=\"{items: select.payment_method_names,onValueChanged: paymentMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payment_method }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Email'}\">\r\n            <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n              <div\r\n                class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n                <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                  <app-tag-input-email [variableName]=\"this.emails\" (numberGenerated)=\"renderDataEmail($event)\">\r\n                  </app-tag-input-email>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Số đtdd và số CCCD -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"buyer_mobile\" [editorOptions]=\"{onValueChanged: customerChanged}\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.phone }}\"></dxo-label>\r\n            <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.phone\"\r\n              message=\"{{ _translate.CONTROLL.LABEL.phone }} {{ _translate.VALIDATION.not_pattern }}\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item cssClass=\"vat_mtt layout_input\" dataField=\"id_card\">\r\n            <dxo-label text=\"Số CCCD\"></dxo-label>\r\n            <!-- <dxi-validation-rule *ngIf=\"frmData.customer_object_code != 'DOANH_NGHIEP'\" type=\"required\" message=\"{{ _translate.CONTROLL.LABEL.buyer_name }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule> -->\r\n          </dxi-item>\r\n        </dxi-item>\r\n\r\n        <!-- Tên ngân hàng -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item cssClass=\"vat_mtt layout_input\" dataField=\"bank_account\">\r\n            <dxo-label text=\"{{ _translate.CONTROLL.LABEL.bank_name }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Trường mở rộng -->\r\n        <dxi-item>\r\n          <app-form-extend [disableForm]=\"ttDaXuatHoaDon\" [formData]=\"frmData\" [customerTempt]=\"customerTempt\"\r\n            [formItems]=\"formItems\" [typeOptions]=\"'bill_options'\"></app-form-extend>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n\r\n      <div *dxTemplate=\"let d of 'notifydate'\">\r\n        <div style=\"display: flex; align-items: center;\">\r\n          <dx-text-box [disabled]=\"true\" [(value)]=\"frmData.bill_number\"\r\n            class=\"invoice-number-create-invoice\"></dx-text-box>\r\n          <dx-button hint=\"{{_translate.CONTROLL.LABEL.advanced}}\" id=\"advBtn\" (click)=\"onAdvancedClick()\"\r\n            [(icon)]=\"_translate.ICONS.advanced\" type=\"default\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </dx-form>\r\n  </div>\r\n</div>\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"Thông báo\" [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{_translate.CONFIRM.update_customer}}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"capNhatDmKhachHang()\" text=\"{{_translate.CONTROLL.LABEL.update}}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{_translate.CONTROLL.BUTTON.cancel}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/form-invoice/form-invoice.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/form-invoice/form-invoice.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .vat_mtt.invoice-number-create-invoice input{color:red;font-weight:bold}.icon-size{font-size:21px;padding:2px 0}.button-tax-code{background:#337ab7;color:#fff;border-color:transparent;border:none}.button-tax-code:focus{outline:none}::ng-deep .vat_mtt.invoice-note input{color:#0070C0;font-weight:bold}::ng-deep .show-form-mtt{display:none !important}::ng-deep .layout_input_left span.dx-field-item-label-content{width:144px !important}::ng-deep .vat.layout_input span.dx-field-item-label-content{min-width:unset !important}#advBtn{width:26px;height:26px;margin-left:5px}:host ::ng-deep .invoice-number-create-invoice{color:red;font-weight:bold;padding-top:3px}\n"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/form-invoice/form-invoice.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/form-invoice/form-invoice.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FormInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInvoiceComponent", function() { return FormInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components/form-extend/form-extend.component */ "./src/app/shared/components/form-extend/form-extend.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
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





// import { VSelectBoxService } from '@core/library/public/v-select-box.service';










var FormInvoiceComponent = /** @class */ (function () {
    function FormInvoiceComponent(authService, translate, route, vatService, customersService, listService, modalService, billService) {
        var _this = this;
        this.authService = authService;
        this.translate = translate;
        this.route = route;
        this.vatService = vatService;
        this.customersService = customersService;
        this.listService = listService;
        this.modalService = modalService;
        this.billService = billService;
        this.select = [];
        this.emails = [];
        this.tax_codes = [];
        // isShow = false;
        this.showFormMTT = "show-form-mtt";
        this.customerCurent = {};
        this.pattern = _config_index__WEBPACK_IMPORTED_MODULE_6__["pattern"];
        this.customer_codes = [];
        this.showPopup = false;
        this.arrEmail = [];
        this.customForms = [];
        this.customerTempt = {};
        this.formItems = [];
        this.configs = {};
        this.ttDaXuatHoaDon = false;
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChangeTem = function (e) {
            _this.select.templatesTT78.forEach(function (item) {
                if (e.value === item.value) {
                    _this.changePayment_method_code(item);
                    _this.formDuLieuMoRong(item);
                    _this.frmData.template_id = item.value;
                    _this.frmData.bill_series = item.bill_series;
                    _this.frmData.template_code = item.template_code;
                    var templateSelect = {};
                    for (var key in item) {
                        if (item.hasOwnProperty(key)) {
                            var value = item[key];
                            templateSelect[key] = value;
                        }
                    }
                    _this.onTemplateTypeChange.emit(item);
                }
            });
        };
        this.customerChanged = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.customerCurent.name) !== _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.frmData.customer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.customerCurent.contact_person_name) !== _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.frmData.buyer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.customerCurent.contact_mobile) !== _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.frmData.buyer_mobile)
                                || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.customerCurent.business_address) !== _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.frmData.buyer_address)
                                || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.customerCurent.email) !== _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.frmData.buyer_email)
                                || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.customerCurent.bank_name) !== _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.frmData.bank_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.customerCurent.bank_account_number) !== _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.frmData.bank_account_number)) {
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
                            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.customerCurent.tax_code) !== _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.frmData.buyer_tax_code)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this.updateCustomerInfo = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.customerCurent.code) !== _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this.frmData.customer_code)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this.paymentMethodChange = function (e) {
            var _obj = _this.select.payment_method_names.filter(function (p) { return p.code === e.value; })[0];
            if (_obj) {
                _this.frmData.payment_method_name = _obj.name;
            }
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    FormInvoiceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var template = null;
        template = this.select.templatesTT78.find(function (item) { return item.value == _this.frmData.template_id; });
        var payment_method_code = this.frmData.payment_method_code;
        this.onChangeTem(template);
        if (this.frmData.id || this.billService.isCopy)
            this.frmData.payment_method_code = payment_method_code;
    };
    FormInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.data.subscribe(function (data) {
            _this.configs = _this.authService.getConfigs();
            var danh_muc = _this.authService.getDMLocal();
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            var temptTT78 = data.init[1];
            if (data.init[2] == true) {
                _this.select.templatesTT78 = data.init[3];
            }
            else {
                _this.select.templatesTT78 = temptTT78;
            }
        });
        // tìm kiếm mã số thuế
        this.tax_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_4___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'tax_code');
            }
        });
        // // tìm kiếm mã khách hàng
        this.customer_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_4___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'code');
            }
        });
        if (this.frmData.buyer_email) {
            this.emails = [];
            var emailToString = this.frmData.buyer_email;
            var a11 = emailToString.replace(/;/g, ',');
            this.emails = a11.split(',');
        }
    };
    FormInvoiceComponent.prototype.ngOnDestroy = function () {
    };
    FormInvoiceComponent.prototype.changePayment_method_code = function (template) {
        if (template && template.fields) {
            var payment_method = template.fields.find(function (item) { return item.code == '3a9f145a-549a-01ea-e507-cc7b0ab28a69'; });
            if (payment_method && payment_method.is_show == true) {
                if (!this.frmData.payment_method_code)
                    this.frmData.payment_method_code = 'TMCK';
            }
            else {
                this.frmData.payment_method_code = '';
            }
        }
    };
    FormInvoiceComponent.prototype.changeDateTime = function () {
    };
    FormInvoiceComponent.prototype.onAdvancedClick = function () {
        // this.isShow = !this.isShow;
        this.showFormMTT = this.showFormMTT ? '' : 'show-form-mtt';
    };
    FormInvoiceComponent.prototype.customer_object_codeChange = function () {
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
    FormInvoiceComponent.prototype.changeTaxCode = function (e) {
        this.frmData.buyer_tax_code = e.value;
    };
    FormInvoiceComponent.prototype.searchTaxCode = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        if (!this.frmData.buyer_tax_code) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Vui lòng nhập mã số thuế!", "error");
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
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        }, 1000);
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
                        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_7__["AddCustomerComponent"], {
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
    FormInvoiceComponent.prototype.onFieldDataChanged = function () {
        this.formEvent.emit(this.frmData);
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
    FormInvoiceComponent.prototype.capNhatDmKhachHang = function () {
        var _this = this;
        this.customerCurent.tax_code = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.frmData.buyer_tax_code);
        this.customerCurent.name = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.frmData.customer_name);
        this.customerCurent.code = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.frmData.customer_code);
        this.customerCurent.contact_person_name = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.frmData.buyer_name);
        this.customerCurent.contact_mobile = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.frmData.buyer_mobile);
        this.customerCurent.business_address = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.frmData.buyer_address);
        this.customerCurent.email = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.frmData.buyer_email);
        this.customerCurent.bank_name = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.frmData.bank_name);
        this.customerCurent.bank_account_number = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.frmData.bank_account_number);
        var data = { customer: this.customerCurent };
        this.customersService.edit(data, this.customerCurent.id).subscribe(function (response) {
            if (response.status === 'success') {
                _this.showPopup = false;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(response.message, 'error');
            }
        }, function (err) {
        }, function () {
        });
    };
    FormInvoiceComponent.prototype.huy = function () {
        this.showPopup = false;
    };
    // reset trường mở rộng
    FormInvoiceComponent.prototype.resetTMR = function () {
        this.formExtend.resetForm();
        this.formExtend.resetOptions();
    };
    FormInvoiceComponent.prototype.formDuLieuMoRong = function (item) {
        var _this = this;
        var _dulieumorong = lodash__WEBPACK_IMPORTED_MODULE_13__["cloneDeep"](item.fields).filter(function (x) { return x.type === '4'; });
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].resetObject(this.formItems);
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
    FormInvoiceComponent.prototype.disableTemplateInput = function () {
        if (this.frmData.bill_number) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormComponent"]),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "listDxForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_12__["FormExtendComponent"]),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "formExtend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormInvoiceComponent.prototype, "ttDaXuatHoaDon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "bill_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onFormChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "formEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTypeChange'),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "onTemplateTypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormInvoiceComponent.prototype, "formatter", void 0);
    FormInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bill-form-invoice',
            template: __webpack_require__(/*! ./form-invoice.component.html */ "./src/app/modules/bill-invoice/components/form-invoice/form-invoice.component.html"),
            styles: [__webpack_require__(/*! ./form-invoice.component.scss */ "./src/app/modules/bill-invoice/components/form-invoice/form-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_11__["VatService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_9__["CustomersService"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_10__["ListsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_14__["BillService"]])
    ], FormInvoiceComponent);
    return FormInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/components/import-invoices-dt/import-invoices-dt.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/import-invoices-dt/import-invoices-dt.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"import-invoices\">\r\n  <form class=\"form-import-invoices\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">{{ _translate.MENU.import_invoice_from_excel}}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"dong()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"padding-bottom: 0px;\">\r\n      <div class=\"row inport-selector\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"select-file\">\r\n            <div class=\"field field-first\" style=\"width: 44%;\">\r\n              <div class=\"label\">{{ _translate.CONTROLL.LABEL.invoice_form}}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [items]=\"templatesTT78\" displayExpr=\"name\" [(value)]=\"template_id\" valueExpr=\"value\"\r\n                  [disabled]=\"disabledInvoiceReleases\" (onValueChanged)=\"onInvoiceTemplate($event)\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"!isTamThoiAnNut\" class=\"field field-first\" style=\"width: 27%;\">\r\n              <div class=\"label\" style=\"width: 135px;\">{{ _translate.CONTROLL.LABEL.export_form }}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [(value)]=\"htXuat\" displayExpr=\"name\" valueExpr=\"code\" [items]=\"htXuatOptions\"\r\n                  [disabled]=\"!configs.system_parameter.allow_keep_invoice_number\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"select-file\">\r\n            <div class=\"field\">\r\n              <div class=\"label\">{{ _translate.CONTROLL.LABEL.file_name }}</div>\r\n              <div class=\"value\">\r\n                <dx-text-box [readOnly]=\"true\" style=\"width: 92.5%!important; border-style: solid!important;\"\r\n                  [value]=\"fileName\"></dx-text-box>\r\n              </div>\r\n              <div class=\"btn-select-file\" style=\"margin-left: 30px;margin-top: 13px;\">\r\n                <a href=\"javascript:void(0)\" (click)=\"napDuLieuTuBangKe()\" class=\"support-link\">\r\n                  <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx, .xls\" (change)=\"onFileChanged($event)\"\r\n                    multiple=\"false\" style=\"display: none;\" />\r\n                  <span>{{ _translate.CONTROLL.LABEL.select_file }}</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"note-template-import\">\r\n        <p><span style=\"font-weight: 600; color: red; padding-right: 5px;\">{{ _translate.CONTROLL.LABEL.note1 }}</span>\r\n          {{ _translate.CONTROLL.LABEL.import_list_invoice_from_file_excel }}</p>\r\n        <p style=\"margin-left: 48px;\">{{ _translate.CONTROLL.LABEL.correct_format_download_template }} <a\r\n            href=\"javascript:void(0)\" style=\"font-weight: 600\" (click)=\"getFileTemp()\">{{\r\n            _translate.CONTROLL.LABEL.click_here }}</a></p>\r\n      </div>\r\n      <div class=\"read-file\">\r\n        <dx-button (click)=\"chonDocFile()\" text=\"{{ _translate.CONTROLL.LABEL.read_file_excel }}\" type=\"default\"\r\n          [disabled]=\"isDisReadFile\"></dx-button>\r\n        <dx-button *ngIf=\"!isTamThoiAnNut\" (click)=\"configColumn()\" text=\"{{ _translate.CONTROLL.LABEL.config }}\" type=\"default\"></dx-button>\r\n      </div>\r\n      <!-- phần table hiển thị -->\r\n      <div class=\"row invoice-table\">\r\n        <div class=\"col-md-12\">\r\n          <dx-data-grid id=\"gridImportInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n            [wordWrapEnabled]=\"true\" [columnAutoWidth]=\"false\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\"\r\n            [columnResizingMode]=\"true\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n            (onEditorPreparing)=\"onEditorPreparing($event)\" (onContentReady)=\"onContentReady($event)\"\r\n            (onCellPrepared)=\"onCellPrepared($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n            (onRowUpdated)=\"onRowUpdated($event)\" (onRowRemoving)=\"onRowRemoving($event)\"\r\n            (onKeyDown)=\"onGripKeyDown($event)\">\r\n            <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\" [allowDeleting]=\"true\" [useIcons]=\"true\">\r\n            </dxo-editing>\r\n            <dxo-sorting mode=\"false\"></dxo-sorting>\r\n            <dxo-column-fixing [enabled]=\"true\"></dxo-column-fixing>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('number_of_vouchers').is_visible\" dataField=\"number_of_vouchers\" [width]=\"130\"\r\n              caption=\"{{infoColumn('number_of_vouchers').column_name}}\" alignment=\"left\" [fixed]=\"true\"\r\n              fixedPosition=\"left\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('bill_date').is_visible\" dataField=\"bill_date\"\r\n              caption=\"{{infoColumn('bill_date').column_name}}\" [width]=\"140\" dataType=\"date\" format=\"dd/MM/yyyy\"\r\n              dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\">\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('customer_code').is_visible\" dataField=\"customer_code\" [width]=\"100\"\r\n              caption=\"{{infoColumn('customer_code').column_name}}\" alignment=\"center\" [fixed]=\"true\"\r\n              fixedPosition=\"left\"></dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('buyer_tax_code').is_visible\" dataField=\"buyer_tax_code\" [width]=\"100\"\r\n              caption=\"{{infoColumn('buyer_tax_code').column_name}}\" alignment=\"left\" [fixed]=\"true\"\r\n              fixedPosition=\"left\">\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"taxCodePattern\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.tax_code }} {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('customer_name').is_visible\" dataField=\"customer_name\" [width]=\"180\"\r\n              caption=\"{{infoColumn('customer_name').column_name}}\" alignment=\"left\" [fixed]=\"true\"\r\n              fixedPosition=\"left\">\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('buyer_name').is_visible\" dataField=\"buyer_name\" [width]=\"120\"\r\n              caption=\"{{infoColumn('buyer_name').column_name}}\" alignment=\"left\" [fixed]=\"true\" fixedPosition=\"left\">\r\n            </dxi-column>\r\n           \r\n            <dxi-column *ngIf=\"infoColumn('buyer_address').is_visible\" dataField=\"buyer_address\" [width]=\"200\"\r\n              caption=\"{{infoColumn('buyer_address').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('buyer_mobile').is_visible\" dataField=\"buyer_mobile\" [width]=\"100\"\r\n              caption=\"{{infoColumn('buyer_mobile').column_name}}\" alignment=\"left\">\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"phonePattern\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.phone_number }} {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-column>\r\n\r\n            <!-- Căn cước công dân -->\r\n            <dxi-column *ngIf=\"infoColumn('id_card').is_visible\" dataField=\"id_card\" [width]=\"100\"\r\n              caption=\"{{infoColumn('id_card').column_name}}\" alignment=\"left\" [fixed]=\"true\" fixedPosition=\"left\">\r\n            </dxi-column>\r\n            <!-- Hình thức bán hàng -->\r\n            <dxi-column *ngIf=\"infoColumn('sell_form').is_visible\" dataField=\"sell_form\" [width]=\"200\"\r\n              caption=\"{{infoColumn('sell_form').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Email nhận hóa đơn -->\r\n            <dxi-column *ngIf=\"infoColumn('buyer_email').is_visible\" dataField=\"buyer_email\" [width]=\"150\"\r\n              caption=\"{{infoColumn('buyer_email').column_name}}\" alignment=\"left\">\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"emailPattern\"\r\n                message=\"Email {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('payment_method_code').is_visible\" dataField=\"payment_method_code\"\r\n              [width]=\"100\" caption=\"{{infoColumn('payment_method_code').column_name}}\" alignment=\"left\">\r\n              <dxo-lookup [dataSource]=\"select.payment_method_names\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Tỷ giá trên hóa đơn -->\r\n            <dxi-column *ngIf=\"infoColumn('currency_rate').is_visible\" dataField=\"currency_rate\"\r\n              caption=\"{{infoColumn('currency_rate').column_name}}\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.ty_gia }\" [format]=\"formatter.ty_gia\" dataType=\"number\"\r\n              alignment=\"right\"></dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('bank_account').is_visible\" dataField=\"bank_account\"\r\n              [width]=\"100\" caption=\"{{infoColumn('bank_account').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Mã hàng hóa -->\r\n            <dxi-column *ngIf=\"infoColumn('product_code').is_visible\" dataField=\"product_code\"\r\n              [editorOptions]=\"{showClearButton: true}\" caption=\"{{infoColumn('product_code').column_name}}\"\r\n              alignment=\"center\" [width]=\"100\">\r\n              <dxo-lookup [dataSource]=\"select.products\" displayExpr=\"code\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('product_name').is_visible\" dataField=\"product_name\" [width]=\"150\"\r\n              caption=\"{{infoColumn('product_name').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Diễn giải -->\r\n            <dxi-column *ngIf=\"infoColumn('is_explain').is_visible\" dataField=\"is_explain\" [width]=\"100\"\r\n              caption=\"{{infoColumn('is_explain').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Khuyến mại -->\r\n            <dxi-column *ngIf=\"infoColumn('is_promotion').is_visible\" dataField=\"is_promotion\" [width]=\"100\"\r\n              caption=\"{{infoColumn('is_promotion').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Chiết khấu thương mại -->\r\n            <dxi-column *ngIf=\"infoColumn('commercial_discount').is_visible\" dataField=\"commercial_discount\"\r\n              [width]=\"100\" caption=\"{{infoColumn('commercial_discount').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Đơn vị tính -->\r\n            <dxi-column *ngIf=\"infoColumn('unit_name').is_visible\" dataField=\"unit_code\"\r\n              [editorOptions]=\"lookupColumnOptions\" caption=\"{{infoColumn('unit_name').column_name}}\" [width]=\"100\"\r\n              alignment=\"center\">\r\n              <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Số lượng -->\r\n            <dxi-column *ngIf=\"infoColumn('quantity').is_visible\" dataField=\"quantity\"\r\n              caption=\"{{infoColumn('quantity').column_name}}\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.so_luong }\" [format]=\"formatter.so_luong\" dataType=\"number\"\r\n              alignment=\"center\"></dxi-column>\r\n            <!-- Đơn giá -->\r\n            <dxi-column *ngIf=\"infoColumn('price').is_visible\" dataField=\"price\"\r\n              caption=\"{{infoColumn('price').column_name}}\" [width]=\"90\" [editorOptions]=\"{ format: formatter.don_gia }\"\r\n              [format]=\"formatter.don_gia\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n          \r\n\r\n            <dxi-column *ngIf=\"infoColumn('discount').is_visible\" dataField=\"discount\"\r\n              caption=\"{{infoColumn('discount').column_name}}\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.ty_le_chiet_khau }\" [format]=\"formatter.ty_le_chiet_khau\"\r\n              dataType=\"number\" alignment=\"center\"></dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('amount_discount').is_visible\" dataField=\"amount_discount\"\r\n              caption=\"{{infoColumn('amount_discount').column_name}}\" [width]=\"109\"\r\n              [editorOptions]=\"{ format: formatter.tien_chiet_khau }\" [format]=\"formatter.tien_chiet_khau\"\r\n              dataType=\"number\" alignment=\"right\">\r\n            </dxi-column>\r\n              <!-- Thành tiền -->\r\n            <dxi-column *ngIf=\"infoColumn('amount').is_visible\" dataField=\"amount\"\r\n              caption=\"{{infoColumn('amount').column_name}}\" [width]=\"109\"\r\n              [editorOptions]=\"{ format: formatter.thanh_tien }\" [format]=\"formatter.thanh_tien\" dataType=\"number\"\r\n              alignment=\"right\">\r\n            </dxi-column>\r\n\r\n            <dxi-column *ngIf=\"infoColumn('vat').is_visible\" dataField=\"vat\" [editorOptions]=\"{showClearButton: true}\"\r\n              caption=\"{{infoColumn('vat').column_name}}\" [width]=\"90\" alignment=\"center\">\r\n              <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n            </dxi-column>\r\n            <!-- Tiền thuế -->\r\n            <dxi-column *ngIf=\"infoColumn('amount_vat').is_visible\" dataField=\"amount_vat\"\r\n              caption=\"{{infoColumn('amount_vat').column_name}}\" [width]=\"120\"\r\n              [editorOptions]=\"{ format: formatter.tien_thue }\" [format]=\"formatter.tien_thue\" dataType=\"number\"\r\n              alignment=\"right\">\r\n            </dxi-column>\r\n            <dxi-column *ngIf=\"infoColumn('amount_after_vat').is_visible\" dataField=\"amount_after_vat\"\r\n              caption=\"{{infoColumn('amount_after_vat').column_name}}\" [width]=\"130\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\" dataType=\"number\"\r\n              alignment=\"right\">\r\n            </dxi-column>\r\n            <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n              <a class=\"delete-row\" href=\"javascript:void(0)\"><i class=\"fa fa-times\"></i></a>\r\n            </div>\r\n            <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n            <dxo-paging [enabled]=\"true\"></dxo-paging>\r\n          </dx-data-grid>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7\">\r\n          <div class=\"note-footer\">\r\n            <p style=\"margin-left: 0;\"><span style=\"font-weight: 500; color: red;\">{{ _translate.GRID.GENERAL.note\r\n                }}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.can_edit_delete_on_grid }}</p>\r\n            <p><span class=\"mau-vang\"> </span>{{ _translate.CONTROLL.LABEL.yellow_number_of_voucher }}</p>\r\n            <p><span class=\"mau-do\"> </span>{{ _translate.CONTROLL.LABEL.red_incorrect_format }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <div class=\"note-footer\" style=\"text-align: right; margin-right: 50px;\">\r\n            <p style=\"padding: 8px;\"></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.number_of_valid_documents }} <span\r\n                style=\"color: seagreen; font-weight: 600\">{{totalInvoiceInvalid}}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.number_of_voucher_wrong_format }} <span\r\n                style=\"color: red; font-weight: 600\">{{totalErrorInvoice}}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.number_of_voucher_duplicate }} <span\r\n                style=\"color: yellow; font-weight: 600\">{{totalDuplicateInvoice}}</span></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <div class=\"col-md-4\">\r\n        <dx-button *ngIf=\"isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\Xem.png\"\r\n          text=\"{{ _translate.CONTROLL.BUTTON.preview_invoice }}\" (click)=\"preview()\" type=\"default\"></dx-button>\r\n        <!-- <dx-button *ngIf=\"!isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\Xem.png\"\r\n          text=\"{{ _translate.CONTROLL.BUTTON.view_invoice }}\" (click)=\"xemHoaDon()\" type=\"default\"></dx-button> -->\r\n      </div>\r\n      <div class=\"col-md-8 btn-right\">\r\n        <dx-button text=\"{{ _translate.CONTROLL.BUTTON.come_back}}\" type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\"\r\n          (click)=\"dong()\">\r\n        </dx-button>\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit\" text=\"Ghi tạm\" icon=\"assets\\img\\icons\\GhiTam.png\" (click)=\"submit('LUU')\"\r\n          type=\"default\"></dx-button>\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit && isAccessExportInv\" text=\"{{ _translate.CONTROLL.BUTTON.export_invoice}}\"\r\n          icon=\"assets\\img\\icons\\XuatHD.png\" (click)=\"submit('XUAT')\" type=\"default\"></dx-button>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.processing }}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopupImport\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n\r\n  </div>\r\n</dx-popup>\r\n\r\n<dx-popup class=\"popup\" [width]=\"500\" [height]=\"160\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n  [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"popupCachNapDuLieu\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p>{{ _translate.CONTROLL.LABEL.please_choose_load_data }} </p>\r\n    <div class=\"text-center\" style=\"margin-top: 25px\">\r\n      <dx-button (click)=\"thayThe($event)\" text=\"{{ _translate.CONTROLL.BUTTON.replace_all}}\" type=\"default\">\r\n      </dx-button>\r\n      <dx-button (click)=\"themTiep($event)\" text=\"{{ _translate.CONTROLL.BUTTON.add_more}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/import-invoices-dt/import-invoices-dt.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/import-invoices-dt/import-invoices-dt.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".import-invoices .dx-texteditor{border-radius:0;display:inline-block;margin-right:8px;height:28px;max-height:32px}.import-invoices .select-file .field>div{display:inline-block;vertical-align:middle}.import-invoices .select-file{width:100%;display:inline-block;margin:0}.import-invoices .select-file .field .label{width:90px;margin-right:10px;text-align:right;margin-top:7px}.import-invoices .select-file .field .value{width:35% !important;margin-top:10px}.import-invoices .select-file .field.field-first{display:inline-block}.import-invoices .select-file .field.field-first .value{width:calc(100% - 150px) !important}::ng-deep .import-invoices .select-file .field .dx-texteditor{width:100% !important}.support-link{top:-2px;position:relative;padding:5px 25px 7px 25px;background-color:#337ab7;border-color:#2d6da3;color:#fff;text-decoration:none}.support-link.mgr-15{margin-right:15px}.support-link img{margin-right:10px;margin-top:-2px}#auto-input{margin-right:75px}.note-template-import{margin-top:10px;margin-left:52px;display:inline-block;width:39%}.read-file{display:inline-block;margin-left:6px;position:relative;top:-10px}.note-footer{margin-top:10px}.note-footer p{margin-left:20px;margin-bottom:5px}.mau-vang{padding-right:15px;margin-right:10px;background-color:yellow}.mau-do{padding-right:15px;margin-right:10px;background-color:red}::ng-deep #gridImportInvoice{height:400px}::ng-deep .btn-right{padding-right:0}::ng-deep .btn-right .dx-button{float:right}::ng-deep .btn-right .dx-button:last-child{margin-right:8px !important}::ng-deep #gridImportInvoice .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit{width:40px;min-width:20px !important}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-validator.dx-datagrid-invalid .dx-highlight-outline::after{border:2px solid #d9534f}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-cell-modified .dx-highlight-outline::after{border-color:#fff}::ng-deep .form-import-invoices .inport-selector .dx-texteditor-input{padding-bottom:15px}::ng-deep .notify-modal{max-width:22%}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/import-invoices-dt/import-invoices-dt.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/import-invoices-dt/import-invoices-dt.component.ts ***!
  \****************************************************************************************************/
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../view-invoice/view-invoice.component */ "./src/app/modules/bill-invoice/components/view-invoice/view-invoice.component.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.model */ "./src/app/modules/bill-invoice/shared/bill.model.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
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


























var ImportInvoicesDtComponent = /** @class */ (function () {
    function ImportInvoicesDtComponent(route, bsModalImportRef, modalService, vatService, socketService, authService, modalImportService, bsModalViewModel, _location, billService, productsService, router, invoiceService) {
        this.route = route;
        this.bsModalImportRef = bsModalImportRef;
        this.modalService = modalService;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.modalImportService = modalImportService;
        this.bsModalViewModel = bsModalViewModel;
        this._location = _location;
        this.billService = billService;
        this.productsService = productsService;
        this.router = router;
        this.invoiceService = invoiceService;
        this.fileName = "";
        this.isDisReadFile = true;
        this.select = {};
        this.isAccessExportInv = false;
        this.formatter = {};
        this.frmData = new _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_18__["BillModel"](1);
        this.fieldDisable = ["number_of_vouchers", "bill_date", "customer_code", "currency_code", "currency_rate", "buyer_tax_code", "customer_name", "buyer_name", "buyer_address", "buyer_mobile", "buyer_email", "payment_method_code", "bank_account", "id_card"];
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
        this.taxCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].tax_code;
        this.emailPattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].email;
        this.phonePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].phone;
        this.datetimePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].datetime;
        this.productCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"].productCodePattern;
        this.isVisibleBtnSubmit = true;
        this.approveRequired = false;
        this.dataFormGird = [];
        this.disabledInvoiceReleases = false;
        this.invoicesId = [];
        this.columns = [];
        this.billoptions = [];
        this.confirmCheckPreview = false;
        this.popupCachNapDuLieu = false;
        this.isThemTiep = true;
        this.isTT78 = false;
        this.isToKhaiThue = false;
        this.isPassNQ43 = false;
        this.isTamThoiAnNut = true;
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
        this.configs = this.authService.getConfigs();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnImportBillExcel(this._translate);
        if (this.infoDangKy) {
            if (this.infoDangKy.status == "CHAP_NHAN") {
                this.isTT78 = true;
            }
        }
        this.htXuatOptions = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_12__["VSelectBoxService"]._htXuatOptions(this._translate);
        this.bill_series = this.templatesTT78.length > 0 ? this.templatesTT78[0].bill_series : null;
        this.template_code = this.templatesTT78.length > 0 ? this.templatesTT78[0].template_code : null;
        this.template_id = this.templatesTT78.length > 0 ? this.templatesTT78[0].value : null;
        this.is_multi_vat = this.templatesTT78.length > 0 ? this.templatesTT78[0].is_multi_vat : null;
        if (this.hoaDonImportChoXuat) {
            this.invoice_date = this.hoaDonImportChoXuat[0].bill_date ? moment__WEBPACK_IMPORTED_MODULE_11__(this.hoaDonImportChoXuat[0].bill_date).format('YYYY-MM-DD HH:mm:ss') : "";
            this.template_id = this.hoaDonImportChoXuat[0].template_id;
            this.templatesTT78.forEach(function (item) {
                if (item.value === _this.template_id) {
                    _this.onInvoiceTemplate(item, false);
                }
            });
            this.htXuat = this.hoaDonImportChoXuat[0].status;
            if (this.htXuat == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.GhiTam)
                this.htXuat = 'XuatVaKy';
            var template = this.templatesTT78.filter(function (p) { return p.value == _this.template_id; });
            if (template.length > 0) {
                this.is_multi_vat = template[0].is_multi_vat;
            }
            if (this.hoaDonImportChoXuat[0].status == "GIU_SO") {
                this.disabledInvoiceReleases = true;
            }
            if (this.hoaDonImportChoXuat[0].status == "GHI_TAM") {
                var isExistKyLoi = this.hoaDonImportChoXuat.some(function (item) { return parseInt(item.bill_number) > 0; });
                if (isExistKyLoi)
                    this.disabledInvoiceReleases = true;
            }
            this.layDuLieuTuHoaDonChoXuat();
        }
        else {
            this.loadRow(10);
        }
        this.currentUser = this.authService.getCurrentUser();
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
        if (this.hoaDonImportChoXuat && this.hoaDonImportChoXuat.length != 0) {
            this.setFormGird();
        }
        else {
            this.onInvoiceTemplate(this.templatesTT78[0], true);
        }
    };
    ImportInvoicesDtComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDonImport().subscribe(function (message) {
            var data = message;
            if (data.Status == 'success') {
                if (data.SvcName == "efy_Sign") {
                    if (data.Data.Name == 'hoadon.xml') {
                        _this.sendInvoice(data.Data.Content);
                    }
                    else if (data.Data.Name === 'thongdiep.xml') {
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
            invoice.bill_products = invoice.bill_products.sort(function (itemA, itemB) {
                return itemA.order - itemB.order;
            });
            var number_of_vouchers = invoice.number_of_vouchers ? invoice.number_of_vouchers : _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].genNumberOfVoucher(_this.hoaDonImportChoXuat);
            var bill_options = _this.layBillOption(invoice);
            if (invoice.bill_products && invoice.bill_products.length > 0) {
                for (var i = 0; i < invoice.bill_products.length; i++) {
                    var product = invoice.bill_products[i];
                    _this.layDuLieuDong(product, invoice, i, number_of_vouchers, bill_options);
                }
            }
            else {
                _this.layDuLieuDong({}, invoice, 0, number_of_vouchers, bill_options);
            }
        });
        this.checkStatusData();
    };
    ImportInvoicesDtComponent.prototype.layDuLieuDong = function (product, invoice, i, number_of_vouchers, bill_options) {
        var rowInvoice = new Object;
        this.template_id = invoice.template_id;
        this.template_code = invoice.template_code;
        this.bill_series = invoice.bill_series;
        if (i == 0) {
            this.invoicesId.push(invoice.id);
            rowInvoice["statusData"] = "INVALID";
            rowInvoice["id"] = invoice.id;
            rowInvoice["number_of_vouchers"] = number_of_vouchers;
            rowInvoice["customer_code"] = invoice.customer_code;
            rowInvoice["currency_code"] = invoice.currency_code;
            rowInvoice["buyer_tax_code"] = invoice.buyer_tax_code;
            rowInvoice["customer_name"] = invoice.customer_name;
            rowInvoice["status"] = invoice.status;
            rowInvoice["buyer_name"] = invoice.buyer_name;
            rowInvoice["buyer_address"] = invoice.buyer_address;
            rowInvoice["consult_number"] = invoice.consult_number;
            rowInvoice["buyer_mobile"] = invoice.buyer_mobile;
            rowInvoice["currency_rate"] = invoice.currency_rate;
            ///// HĐ xe
            rowInvoice["buyer_email"] = invoice.buyer_email;
            rowInvoice["payment_method_name"] = invoice.payment_method_name;
            rowInvoice["payment_method_code"] = invoice.payment_method_code;
            rowInvoice["bank_account"] = invoice.bank_account;
            rowInvoice["note"] = invoice.note;
            rowInvoice["bill_number"] = invoice.bill_number;
            rowInvoice["bill_date"] = invoice.bill_date;
            rowInvoice["bill_options"] = bill_options.refBillArr;
            rowInvoice = lodash__WEBPACK_IMPORTED_MODULE_16__["merge"](rowInvoice, bill_options.refBill);
        }
        else {
            rowInvoice["number_of_vouchers"] = "";
            rowInvoice["customer_code"] = "";
            rowInvoice["currency_code"] = "";
            rowInvoice["currency_rate"] = null;
            rowInvoice["buyer_tax_code"] = "";
            rowInvoice["customer_name"] = "";
            rowInvoice["buyer_name"] = "";
            rowInvoice["buyer_address"] = "";
            rowInvoice["buyer_mobile"] = "";
            rowInvoice["buyer_email"] = "";
            rowInvoice["payment_method_name"] = "";
            rowInvoice["payment_method_code"] = "";
            rowInvoice["bank_account"] = "";
            rowInvoice["note"] = "";
            rowInvoice["dataType"] = "HANG_HOA";
            rowInvoice["productNumberOfVouchers"] = number_of_vouchers;
            rowInvoice = lodash__WEBPACK_IMPORTED_MODULE_16__["merge"](rowInvoice, lodash__WEBPACK_IMPORTED_MODULE_16__["mapValues"](bill_options.refBill, function () { return ""; }));
        }
        rowInvoice["commercial_discount"] = product.commercial_discount ? product.commercial_discount : false;
        rowInvoice["is_explain"] = product.is_explain ? product.is_explain : false; /* Diễn giải */
        rowInvoice["is_promotion"] = product.is_promotion ? product.is_promotion : false; /* Khuyến mại */
        rowInvoice["product_code"] = product.product_code ? product.product_code : null;
        rowInvoice["product_name"] = product.product_name ? product.product_name : null;
        rowInvoice["unit_code"] = product.unit_code ? product.unit_code : null;
        rowInvoice["unit_name"] = product.unit_name ? product.unit_name : null;
        rowInvoice["quantity"] = product.quantity ? product.quantity : null;
        rowInvoice["discount"] = product.discount ? product.discount : null;
        rowInvoice["amount_discount"] = product.amount_discount ? product.amount_discount : null;
        rowInvoice["price"] = product.price ? product.price : null;
        rowInvoice["amount"] = product.amount ? product.amount : null;
        rowInvoice["vat"] = product.vat ? product.vat : null;
        rowInvoice["amount_vat"] = product.amount_vat ? product.amount_vat : null;
        rowInvoice["amount_after_vat"] = product.amount_after_vat ? product.amount_after_vat : null;
        rowInvoice["order"] = product.order ? product.order : null;
        rowInvoice["view_order"] = product.view_order ? product.view_order : null;
        this.invoice_products.insert(rowInvoice);
    };
    ImportInvoicesDtComponent.prototype.layBillOption = function (bill) {
        var refBill = {};
        var refBillArr = [];
        var arrOptions = bill.bill_options ? bill.bill_options : [];
        this.billoptions.forEach(function (item) {
            var temp = __assign({}, item);
            var option = arrOptions.find(function (o) { return o.code == temp.code; });
            refBill[item.code] = '';
            if (option) {
                temp.value = option.value;
                refBill[item.code] = option.value;
            }
            refBillArr.push(temp);
        });
        return {
            refBill: refBill,
            refBillArr: refBillArr
        };
    };
    ImportInvoicesDtComponent.prototype.loadRow = function (countRow) {
        var _this = this;
        var tempRow = this.frmData.tempImportRow(countRow);
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
        var data = this.frmData.addImportRow(order, order);
        this.invoice_products.insert(data);
        this.dataGrid.instance.refresh();
    };
    ImportInvoicesDtComponent.prototype.getFileTemp = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var data = {
            invoice: {
                invoice_type: _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].exportType.hoadon,
                columns: [],
                template_id: this.template_id
            }
        };
        this.billService.getFileTemmpImportInvoices(data).subscribe(function (res) {
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
                var bill_date = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.bill_date);
                if (bill_date == "ERROR") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Ngày hóa đơn không đúng định dạng", "error");
                    isValid = false;
                    return;
                }
                else if (bill_date != "")
                    invoice["bill_date"] = bill_date;
                invoice["customer_code"] = element.customer_code ? element.customer_code : "";
                invoice["currency_code"] = element.currency_code ? element.currency_code : "VND";
                invoice["currency_rate"] = element.currency_rate ? element.currency_rate : null;
                invoice["buyer_tax_code"] = element.buyer_tax_code ? element.buyer_tax_code : "";
                invoice["customer_name"] = element.customer_name ? element.customer_name : "";
                invoice["buyer_name"] = element.buyer_name ? element.buyer_name : "";
                invoice["buyer_address"] = element.buyer_address ? element.buyer_address : "";
                invoice["buyer_mobile"] = element.buyer_mobile ? element.buyer_mobile : "";
                invoice["id_card"] = element.id_card ? element.id_card : "";
                invoice["buyer_email"] = element.buyer_email ? element.buyer_email : "";
                invoice["payment_method_code"] = element.payment_method_name ? _this.getPaymentMethodCodeByName(element.payment_method_name) : "";
                invoice["payment_method_name"] = element.payment_method_name ? element.payment_method_name : "";
                invoice["bank_account"] = element.bank_account ? element.bank_account : "";
                invoice["note"] = element.note ? element.note : "";
                invoice["product_code"] = element.product_code ? element.product_code : "";
                invoice["product_name"] = element.product_name ? element.product_name : "";
                invoice["is_explain"] = element.is_explain && (element.is_explain == "X" || element.is_explain == "x") ? true : false; /* Diễn giải */
                invoice["is_promotion"] = element.is_promotion && (element.is_promotion == "X" || element.is_promotion == "x") ? true : false; /* Khuyến mại */
                invoice["commercial_discount"] = element.commercial_discount && (element.commercial_discount == "X" || element.commercial_discount == "x") ? true : false;
                /* Các trường mở rộng */
                var optionClone = lodash__WEBPACK_IMPORTED_MODULE_16__["cloneDeep"](_this.billoptions);
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
                invoice["bill_options"] = optionClone;
                /* Các trường mở rộng */
                if (invoice["bill_options"] && invoice["bill_options"].length > 0) {
                    invoice["bill_options"].forEach(function (invOption) {
                        invoice[invOption.code] = invOption.value;
                    });
                }
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
                invoice["unit_code"] = element.unit_name ? _this.getUnitCodeByUnitName(element.unit_name) : "";
                invoice["unit_name"] = element.unit_name ? element.unit_name : "";
                invoice["quantity"] = element.quantity ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.quantity) : null;
                invoice["price"] = element.price ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.price) : null;
                invoice["discount"] = element.discount ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.discount) : null;
                invoice["amount_discount"] = element.amount_discount ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_discount) : null;
                invoice["amount"] = element.amount && element.amount.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount) : null;
                if (_this.isHdGTGT) {
                    invoice["vat"] = element.vat ? _this.checkVat(element.vat) : null;
                    invoice["vat_name"] = element.vat_name ? element.vat_name : null;
                    invoice["amount_vat"] = element.amount_vat && element.amount_vat.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_vat) : null;
                }
                else {
                    invoice["vat"] = null;
                    invoice["vat_name"] = null;
                    invoice["amount_vat"] = null;
                }
                invoice["amount_after_vat"] = element.amount_after_vat && element.amount_after_vat.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_after_vat) : null;
                invoice["note"] = element.note ? element.note : "";
                if (_index == 0) {
                    if (element.quantity) {
                        var arr = element.quantity.split('.');
                        if (arr.length == 2) {
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.so_luong = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                    }
                    /* Cấu hình thập phân */
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
                    if (element.amount_discount) {
                        var arr = element.amount_discount.split('.');
                        if (arr.length == 2) {
                            _this.formatter.tien_chiet_khau = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                        }
                        else
                            _this.formatter.tien_chiet_khau = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
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
                        var hanghoa = dataSource.filter(function (p) { return (p.number_of_vouchers == element.number_of_vouchers || p.productNumberOfVouchers == element.number_of_vouchers) && !p.is_promotion && !p.is_explain; })[0];
                        if (hanghoa)
                            stt_1 = Math.max.apply(Math, dataSource.filter(function (p) { return (p.number_of_vouchers == element.number_of_vouchers || p.productNumberOfVouchers == element.number_of_vouchers) && !p.is_promotion && !p.is_explain; }).map(function (o) { return o.order; }));
                        ++stt_1;
                    });
                    invoice["dataType"] = "HANG_HOA";
                    invoice["number_of_vouchers"] = "";
                    invoice["invoice_date"] = "";
                    invoice["customer_code"] = "";
                    invoice["currency_code"] = "";
                    invoice["currency_rate"] = null;
                    invoice["buyer_tax_code"] = "";
                    invoice["customer_name"] = "";
                    invoice["buyer_name"] = "";
                    invoice["buyer_address"] = "";
                    invoice["buyer_mobile"] = "";
                    invoice["id_card"] = "";
                    invoice["buyer_email"] = "";
                    invoice["payment_method_code"] = "";
                    invoice["payment_method_name"] = "";
                    invoice["bank_account"] = "";
                    invoice["productNumberOfVouchers"] = element.number_of_vouchers;
                    invoice["order"] = stt_1;
                    if (invoice["is_promotion"] || invoice["is_explain"]) {
                        invoice["view_order"] = "";
                    }
                    else
                        invoice["view_order"] = stt_1;
                }
                else {
                    invoice["number_of_vouchers_backup"] = element.number_of_vouchers ? element.number_of_vouchers : "";
                    invoice["number_of_vouchers"] = element.number_of_vouchers ? element.number_of_vouchers : "";
                    numberOfVouchers.push(invoice["number_of_vouchers"]);
                    invoice["order"] = 1;
                    invoice["view_order"] = 1;
                    invoice["environmental_fee"] = element.environmental_fee && element.environmental_fee.trim() != "-" ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.environmental_fee) : null;
                    if (invoice["is_promotion"] || invoice["is_explain"])
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
        this.billoptions = [];
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
                        var billoption = {
                            code: item.code,
                            name: item.name,
                            value: '',
                            data_type: item.data_type
                        };
                        _this.billoptions.push(billoption);
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
    ImportInvoicesDtComponent.prototype.onInvoiceTemplate = function (e, setForm) {
        if (setForm === void 0) { setForm = true; }
        if (e.component) {
            this.selectedItem = e.component.option("selectedItem");
        }
        else {
            this.selectedItem = e;
        }
        this.template_id = e.value;
        this.template_code = this.selectedItem.template_code;
        this.bill_series = this.selectedItem.bill_series;
        this.is_multi_vat = this.selectedItem.is_multi_vat;
        this.billoptions = this.selectedItem.fields
            .filter(function (field) { return field.type == "4"; })
            .map(function (_a) {
            var code = _a.code, name = _a.name, value = _a.value, data_type = _a.data_type;
            return ({ code: code, name: name, value: value, data_type: data_type });
        });
        this.fieldDisable = lodash__WEBPACK_IMPORTED_MODULE_16__["compact"](lodash__WEBPACK_IMPORTED_MODULE_16__["uniq"](this.fieldDisable.concat(lodash__WEBPACK_IMPORTED_MODULE_16__["map"](this.billoptions, 'code'))));
        if (setForm) {
            this.setFormGird();
        }
    };
    //set lại các cột trong gird
    ImportInvoicesDtComponent.prototype.setFormGird = function () {
        var _this = this;
        if (this.columns.length > 0) {
            this.columns.forEach(function (item) {
                _this.dataGrid.columns.forEach(function (column, index) {
                    if (column["dataField"] == item.dataField)
                        _this.dataGrid.columns.splice(index, 1);
                });
            });
        }
        this.columns = [];
        if (this.selectedItem.fields && this.selectedItem.fields.length > 0) {
            var _dulieumorong = this.selectedItem.fields.filter(function (x) { return x.type === '4'; });
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
                    case "product_name":
                        this.setStatusDataOnCellPrepared(e, "Tên hàng hóa không được để trống");
                        break;
                    case "amount":
                        this.setStatusDataOnCellPrepared(e, "Thành tiền không được để trống");
                        break;
                    case "amount_after_vat":
                        this.setStatusDataOnCellPrepared(e, "Tổng tiền không được để trống");
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
        if (((e.column.dataField == "amount" || e.column.dataField == "amount_after_vat") && e.value == null && !e.data.is_explain) || ((e.column.dataField != "amount" && e.column.dataField != "amount_after_vat" && e.column.dataField != "product_code") && (e.value == null || e.value == "")) || (e.column.dataField == "product_code" && _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(e.value) != "" && !this.productCodePattern.test(e.value))) {
            e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
            e.cellElement.title = message;
            if (e.data.statusData != "ERROR_DUPLICATE_DATABASE" && e.data.statusData != "ERROR_DUPLICATE_ONGIRD")
                e.data.statusData = "DATA_ERROR";
        }
        else {
            if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(e.data.product_code) != "" && !this.productCodePattern.test(e.data.product_code))
                e.data.statusData == "DATA_ERROR";
            else if (e.data.product_name == null || e.data.product_name == "")
                e.data.statusData == "DATA_ERROR";
            else if (e.data.amount == null)
                e.data.statusData == "DATA_ERROR";
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
    ImportInvoicesDtComponent.prototype.productCodeChange = function (row) {
        var _this = this;
        this.select.products.some(function (item) {
            if (item.code === row.product_code) {
                var sub_1 = _this.productsService.getProduct(item.id).subscribe(function (rs) {
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
                    sub_1.unsubscribe();
                });
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
    ImportInvoicesDtComponent.prototype.kyThongDiep = function (xmlInvoice, signDate) {
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
    ImportInvoicesDtComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
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
        // if (!this.invoice.id && !this.invoice.bill_number) status = 'THEM_MOI';
        // if (this.invoice.id && !this.invoice.bill_number) status = 'GHI_TAM';
        // if (this.invoice.id && this.invoice.bill_number) status = 'GIU_SO';
        var xmlInvoice = "";
        var isNewXml = 0;
        var bill_invoice = Object.assign({}, this.invoice);
        delete bill_invoice.info_message;
        if (status == 'THEM_MOI') {
            var sub_2 = this.billService.addNew(bill_invoice, true).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.bill_number = rs.data.bill_number;
                    _this.invoice.bill_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.bill_date).format('YYYY-MM-DD HH:mm:ss');
                    var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.invoice.id = rs.data.id;
                    _this.invoicesId.push(rs.data.id);
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _this.xuatTiepHoaDon('XUAT');
                    }
                    else {
                        if (_this.configs.system_parameter.is_seller_sign_bill)
                            _this.xuLyKiFile(xmlInvoice, bill_sign_date);
                        else {
                            _this.invoice["info_message"] = rs.data.info_message;
                            if (_this.invoice["info_message"] && _this.invoice["info_message"].message) {
                                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.invoice["info_message"].message.message);
                                if (xmlInvoice != "") {
                                    _this.kyThongDiep(xmlInvoice, bill_sign_date);
                                }
                            }
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
        else if (status == 'GHI_TAM') {
            var sub_3 = this.billService.edit(bill_invoice.id, bill_invoice, true).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoice.bill_number = rs.data.bill_number;
                    _this.frmData.bill_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.bill_date).format('YYYY-MM-DD HH:mm:ss');
                    var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                    //demo kí số vào file
                    //  Lấy xml từ serer
                    isNewXml = rs.data.is_new_xml;
                    if (isNewXml)
                        _this.nodeSign = "//HDon/DSCKS/NBan";
                    else
                        _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _this.xuatTiepHoaDon('XUAT');
                    }
                    else {
                        if (_this.configs.system_parameter.is_seller_sign_bill)
                            _this.xuLyKiFile(xmlInvoice, bill_sign_date);
                        else {
                            _this.invoice["info_message"] = rs.data.info_message;
                            if (_this.invoice["info_message"] && _this.invoice["info_message"].message) {
                                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.invoice["info_message"].message.message);
                                if (xmlInvoice != "") {
                                    _this.kyThongDiep(xmlInvoice, bill_sign_date);
                                }
                            }
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
    ImportInvoicesDtComponent.prototype.sendInvoice = function (xml_string) {
        var _this = this;
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        }, 20);
        var xmlInvoice = "";
        var sub = this.billService.sendInvoice({
            id: this.invoice.id,
            xml_string: xml_string,
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.invoice["info_message"] = rs.data.info_message;
                var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_11__(rs.data.bill_sign_date).format('YYYY-MM-DD HH:mm:ss');
                if (_this.invoice["info_message"] && _this.invoice["info_message"].message) {
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.invoice["info_message"].message.message);
                    if (xmlInvoice != "") {
                        _this.kyThongDiep(xmlInvoice, bill_sign_date);
                    }
                }
            }
            else
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ImportInvoicesDtComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        this.subXuatHoaDon = this.billService.sendMessage({
            id: this.invoice.id,
            info_message: {
                message: {
                    message: xml_string,
                    message_code: this.invoice["info_message"].message.message_code
                },
                tcntCode: this.invoice["info_message"].tcntCode,
                messageCodeType: this.invoice["info_message"].messageCodeType
            }
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.xuatTiepHoaDon('XUAT');
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
            var ListSerialNumber = "DSCKS";
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
            }
            var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_11__(new Date()).format('YYYY-MM-DD HH:mm:ss');
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
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
            this.subLuuChoXuat = this.billService.edit(this.invoice.id, this.invoice).subscribe(function (rs) {
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
            this.subLuuChoXuat = this.billService.addNew(this.invoice).subscribe(function (rs) {
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
                    invoice["payment_method_code"] = element.payment_method_code; //Hình thức thanh toán
                    invoice["bank_account_number"] = element.bank_account_number; //Số tài khoản
                    invoice["bank_name"] = element.bank_name; //thuộc ngân hàng
                    invoice["note"] = element.note; //ghi chú
                    /* Hóa đơn Pepsi */
                    invoice["total_large_unit"] = element.total_large_unit;
                    invoice["total_small_unit"] = element.total_small_unit;
                    invoice["billing_source"] = element.billing_source;
                    invoice["template_code"] = element.template_code;
                    invoice["bill_series"] = element.bill_series;
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
            var isCheckData = dataSource.every(function (item) { return _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(item.number_of_vouchers) == ""; });
            if (isCheckData) {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Số phiếu, chứng từ không được để trống", "error");
                invalid = false;
                return;
            }
            dataSource.forEach(function (element, index) {
                if (element.number_of_vouchers == "" && element.dataType == "KHACH_HANG" && element.product_name && type == "submit") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Số phiếu, chứng từ không được để trống", "error");
                    invalid = false;
                    return;
                }
                //có số phiếu/chứng từ
                if (element.number_of_vouchers) {
                    if (type == "submit") {
                        if (element.product_name == "") {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tên hàng hóa không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                        if (element.amount_after_vat == null && !element.is_explain) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tổng tiền không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                        if (element.amount == null && !element.is_explain) {
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Thành tiền không được để trống", "error");
                            invalid = false;
                            return false;
                        }
                    }
                    var invoice_1 = new _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_18__["BillModel"](1);
                    if (element.id) {
                        invoice_1.id = element.id;
                        invoice_1.status = element.status;
                    }
                    invoice_1.bill_number = element.bill_number;
                    invoice_1.template_id = _this.template_id;
                    invoice_1["number_of_vouchers"] = element.number_of_vouchers; // số phiếu chứng từ
                    invoice_1.bill_date = element.bill_date ? moment__WEBPACK_IMPORTED_MODULE_11__(element.bill_date).format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_11__().format('YYYY-MM-DD HH:mm:ss'); // Ngày hóa đơn
                    invoice_1.buyer_tax_code = element.buyer_tax_code; //Mã số thuế
                    invoice_1.buyer_name = element.buyer_name; //Tên người mua
                    invoice_1.customer_name = element.customer_name; //Tên đơn vị (Tên khách hàng)
                    invoice_1.customer_code = element.customer_code; //mã đơn vị (mã khách hàng)
                    invoice_1.currency_code = element.currency_code;
                    invoice_1.currency_rate = _this.roundNumber(element.currency_rate, decimal_tygia);
                    invoice_1.buyer_address = element.buyer_address; //Địa chỉ
                    invoice_1.id_card = element.id_card; // Số CCCD
                    invoice_1.bank_account = element.bank_account; // Tài khoản ngân hàng
                    invoice_1.buyer_mobile = element.buyer_mobile; //Điện thoại liên hệ
                    invoice_1.template_code = _this.template_code;
                    invoice_1.bill_series = _this.bill_series;
                    /////
                    invoice_1.buyer_email = element.buyer_email; //Email
                    invoice_1.payment_method_code = element.payment_method_code; //Hình thức thanh toán
                    invoice_1.payment_method_name = element.payment_method_name; //Hình thức thanh toán
                    if (!invoice_1.payment_method_name) {
                        var _obj = _this.select.payment_method_names.filter(function (p) { return p.code == element.payment_method_code; })[0];
                        if (_obj) {
                            invoice_1.payment_method_name = _obj.name;
                        }
                    }
                    invoice_1.note = element.note; //ghi chú
                    invoice_1.bill_products[0].product_code = element.product_code;
                    invoice_1.bill_products[0].product_name = element.product_name;
                    invoice_1.bill_products[0].unit_code = element.unit_code;
                    invoice_1.bill_products[0].unit_name = element.unit_name;
                    invoice_1.bill_products[0].quantity = element.quantity;
                    invoice_1.bill_products[0].discount = element.discount;
                    invoice_1.bill_products[0].amount_discount = element.amount_discount;
                    invoice_1.bill_products[0].price = element.price;
                    invoice_1.bill_products[0].amount = element.amount;
                    invoice_1.bill_products[0].vat = element.vat;
                    invoice_1.bill_products[0].amount_vat = element.amount_vat;
                    invoice_1.bill_products[0].amount_after_vat = element.amount_after_vat;
                    invoice_1.bill_products[0].order = element.order;
                    invoice_1.bill_products[0].view_order = element.view_order;
                    invoice_1.bill_products[0].commercial_discount = element.commercial_discount;
                    invoice_1.bill_products[0].is_promotion = element.is_promotion;
                    invoice_1.bill_products[0].is_explain = element.is_explain;
                    var decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
                    invoice_1.decimal_places_json = decimal_places_json;
                    if (element.id) {
                        invoice_1.id = invoice_1.id;
                    }
                    /* Các trường mở rộng */
                    if (_this.billoptions && _this.billoptions.length > 0) {
                        var optionClone = lodash__WEBPACK_IMPORTED_MODULE_16__["cloneDeep"](_this.billoptions);
                        optionClone.forEach(function (billOption) {
                            for (var key in element) {
                                if (billOption.code === key) {
                                    if (billOption.data_type == 'ngay' && element[key])
                                        billOption.value = moment__WEBPACK_IMPORTED_MODULE_11__(element[key]).format('YYYY-MM-DD HH:mm:ss');
                                    else
                                        billOption.value = element[key];
                                }
                            }
                        });
                        invoice_1.bill_options = [];
                        optionClone.forEach(function (val) { return invoice_1.bill_options.push(Object.assign({}, val)); });
                    }
                    invoices.push(invoice_1);
                }
                if (element.productNumberOfVouchers) {
                    var invoiceProduct = {
                        product_code: element.product_code,
                        product_name: element.product_name,
                        unit_code: element.unit_code,
                        unit_name: element.unit_name,
                        quantity: element.quantity,
                        price: element.price,
                        vat: element.vat,
                        commercial_discount: element.commercial_discount,
                        is_promotion: element.is_promotion,
                        is_explain: element.is_explain,
                        amount_discount: element.amount_discount,
                        discount: element.discount,
                        order: element.order,
                        view_order: element.view_order,
                        amount: element.amount,
                        amount_vat: element.amount_vat,
                        amount_after_vat: element.amount_after_vat,
                    };
                    for (var i = 0; i < invoices.length; i++) {
                        if (invoices[i].number_of_vouchers == element.productNumberOfVouchers) {
                            invoices[i].bill_products.push(invoiceProduct);
                        }
                    }
                }
            });
        });
        var _loop_3 = function (i) {
            var amount = null, total_amount_vat = null, amount_after_vat = null, amount_after_vatx = null, amount_after_vat0 = null, amount_after_vat5 = null, amount_after_vat8 = null, amount_after_vat10 = null, total_amount_product_vat0 = null, amount_vat5 = null, amount_vat8 = null, amount_vat10 = null, amount_vat0 = null, total_amount_product_vat5 = null, total_amount_product_vat8 = null, total_amount_product_vat10 = null, total_amount_product_vatx = null, amount_after_vat_other = null, amount_after_vat_kkknt = null, total_amount_product_vat_kkknt, total_amount_product_vat_other, amount_vat_other, other_charge = null, other_tax = null, amount_discount = null;
            invoices[i].bill_products.forEach(function (product, index) {
                if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(product.product_name) != "" && !product.is_promotion && !product.is_explain && !product.commercial_discount && invalid) {
                }
                else if (product.is_promotion || product.is_explain || product.commercial_discount) {
                    if ((product.product_name == null || product.product_name == '') && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tên hàng hóa" + " " + _this._translate.VALIDATION.required, 'error');
                        invalid = false;
                        return false;
                    }
                }
                if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(product.product_name) != "" && !product.is_explain) {
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
                if (!product.is_promotion && !product.is_explain) {
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
                    if (!_this.is_multi_vat && index > 0 && invoices[i].bill_products[index].vat != invoices[i].bill_products[index - 1].vat && invalid) {
                        var _obj = invoices[i].bill_products.filter(function (p) { return !p.is_promotion && !p.is_explain && p.vat != null; })[0];
                        var temp_2 = _obj ? _obj.vat : null;
                        if (!_this.is_multi_vat) {
                            var check_same_vat_1 = true;
                            invoices[i].bill_products.forEach(function (item) {
                                if (item.vat != null) {
                                    if (item.vat !== temp_2 && item.product_name && !item.is_promotion && !item.is_explain) {
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
                    }
                }
            });
            invoices[i].amount = this_3.roundNumber(amount, decimal_amount);
            // invoices[i].total_amount_vat = this.roundNumber(total_amount_vat, decimal_amount_vat);
            invoices[i].amount_vat = this_3.roundNumber(total_amount_vat, decimal_amount_vat);
            invoices[i].amount_after_vat = this_3.roundNumber(amount_after_vat, decimal_amount_after_vat);
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
                invoices[i].amount_vat0 = amount_vat0 != null ? this_3.roundNumber(amount_vat0, decimal_amount_vat) : null;
                invoices[i].amount_vat5 = amount_vat5 != null ? this_3.roundNumber(amount_vat5, decimal_amount_vat) : null;
                invoices[i].amount_vat8 = amount_vat8 != null ? this_3.roundNumber(amount_vat8, decimal_amount_vat) : null;
                invoices[i].amount_vat10 = amount_vat10 != null ? this_3.roundNumber(amount_vat10, decimal_amount_vat) : null;
                invoices[i].amount_vat_other = amount_vat_other != null ? this_3.roundNumber(amount_vat_other, decimal_amount_vat) : null;
            }
            invoices[i].total_amount_product_vatx = total_amount_product_vatx != null ? this_3.roundNumber(total_amount_product_vatx, decimal_amount) : null;
            invoices[i].total_amount_product_vat0 = total_amount_product_vat0 != null ? this_3.roundNumber(total_amount_product_vat0, decimal_amount) : null;
            invoices[i].total_amount_product_vat5 = total_amount_product_vat5 != null ? this_3.roundNumber(total_amount_product_vat5, decimal_amount) : null;
            invoices[i].total_amount_product_vat8 = total_amount_product_vat8 != null ? this_3.roundNumber(total_amount_product_vat8, decimal_amount) : null;
            invoices[i].total_amount_product_vat10 = total_amount_product_vat10 != null ? this_3.roundNumber(total_amount_product_vat10, decimal_amount) : null;
            invoices[i].total_amount_product_vat_kkknt = total_amount_product_vat_kkknt != null ? this_3.roundNumber(total_amount_product_vat_kkknt, decimal_amount) : null;
            invoices[i].total_amount_product_vat_other = total_amount_product_vat_other != null ? this_3.roundNumber(total_amount_product_vat_other, decimal_amount) : null;
            invoices[i].cash = invoices[i].cash ? this_3.roundNumber(invoices[i].cash, decimal_amount_after_vat) : this_3.roundNumber(invoices[i].amount_after_vat, decimal_amount_after_vat);
            invoices[i].returns = this_3.roundNumber((invoices[i].cash - invoices[i].amount_after_vat), decimal_amount_after_vat);
            invoices[i].total_payment = this_3.roundNumber(invoices[i].amount_after_vat, decimal_amount_after_vat);
            invoices[i].currency_code = invoices[i].currency_code ? invoices[i].currency_code : 'VND';
            invoices[i].currency_rate = invoices[i].currency_rate ? invoices[i].currency_rate : 1;
            var tien_chu = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].tienBangChu(Math.abs(invoices[i].total_payment), decimal_amount_after_vat, invoices[i].currency_code, this_3.configs.system_parameter.display_read_money_english);
            invoices[i].total_payment_word = this_3.invoiceService.docTienAm(invoices[i].total_payment, tien_chu, this_3.configs, invoices[i].currency_code);
            if (invoices[i].total_payment > 20000000 && (invoices[i].payment_method_code == 'TM') && type == "submit" && invalid) {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Vui lòng chọn HTTT chuyển khoản cho hóa đơn có giá trị lớn hơn 20 triệu đồng', 'error');
                var countRowBefore = 0;
                for (var j = 0; j < i; j++) {
                    countRowBefore += invoices[j].bill_products.length;
                }
                this_3.dataGrid.instance.focus(this_3.dataGrid.instance.getCellElement(countRowBefore, 'payment_method_code'));
                invalid = false;
                return { value: void 0 };
            }
            _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_7__["InvoicesService"].deleteProperties(new _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_18__["BillModel"](1), invoices[i], true);
            // Valid tỷ giá
            var invoice_products = invoices[i].bill_products.filter(function (item) { return item.product_exchange_rate; });
            if (invoices[i].currency_code && invoices[i].currency_code != "VND") {
                if (invoice_products && invoice_products.length > 0) {
                    if (invoice_products.length !== invoices[i].bill_products.length) {
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
                this.bsModalViewModel = this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_17__["ViewInvoiceBillComponent"], {
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
                typeAction: 'NAP_EXCEL_HD'
            };
            this.bsModalViewModel = this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_17__["ViewInvoiceBillComponent"], {
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
                if (!item.is_promotion && !item.is_explain) {
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
            var _obj = _this.select.payment_method_names.filter(function (p) { return p.code == data.payment_method_code; })[0];
            if (_obj) {
                data.payment_method_name = _obj.name;
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
        var sub = this.billService.view(this.invoicesId).subscribe(function (rs) {
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
                if (type == "XUAT") {
                    if (_this.confirmCheckPreview) {
                        _this.showPopupImport = true;
                        _this.xuatHoaDon();
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
                    _this.bsModalViewModel = _this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_17__["ViewInvoiceBillComponent"], {
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
                        typeAction: 'NAP_EXCEL_HD'
                    };
                    _this.bsModalViewModel = _this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_17__["ViewInvoiceBillComponent"], {
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
    ImportInvoicesDtComponent.prototype.xuatTiepHoaDon = function (type) {
        if (type == "XUAT") {
            var percentComplete = 100 / this.totalInvoice;
            this.ttDaXuatHoaDon = true;
            this.valueProgress += percentComplete;
            if (this.countInvoice < this.totalInvoice) {
                this.countInvoice++;
                this.xuatHoaDon();
            }
            else if (this.countInvoice == this.totalInvoice) {
                this.valueProgress = 100;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.NOTIFY.export_success, 'success');
                this.isVisibleBtnSubmit = false;
                this.showPopupImport = false;
                this.bsModalImportRef.hide();
                this.bsModalImportRef.content.successSaveItem = "success";
                this.funcNavigate();
            }
        }
    };
    ImportInvoicesDtComponent.prototype.funcNavigate = function () {
        var linkUrl = '/system/bills-invoice-vat';
        if (!this.isHdGTGT)
            linkUrl = '/system/bills-invoice-sale';
        if (this.search)
            this.router.navigate([linkUrl], { queryParams: this.search });
        else
            this.router.navigate([linkUrl]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], ImportInvoicesDtComponent.prototype, "dataGrid", void 0);
    ImportInvoicesDtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-invoices-dt',
            template: __webpack_require__(/*! ./import-invoices-dt.component.html */ "./src/app/modules/bill-invoice/components/import-invoices-dt/import-invoices-dt.component.html"),
            styles: [__webpack_require__(/*! ./import-invoices-dt.component.scss */ "./src/app/modules/bill-invoice/components/import-invoices-dt/import-invoices-dt.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_22__["MyBsModalService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_19__["BillService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_20__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_23__["InvoiceService"]])
    ], ImportInvoicesDtComponent);
    return ImportInvoicesDtComponent;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/components/index/index.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/index/index.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n    <app-search-bill-advanced (searchContentChange)=\"getSearch($event)\" [loaiHoaDon]=\"loaiHoaDon\">\r\n    </app-search-bill-advanced>\r\n  </div>\r\n  <div class=\"col-md-4\" style=\"max-height: 70px\">\r\n    <div class=\"list-header row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-right button-panel\">\r\n          <dx-button (click)=\"lapHoaDon()\" [(icon)]=\"_translate.ICONS.plus\"\r\n            text=\"{{ 'CONTROLL.BUTTON.create_invoice' | translate }}\" type=\"default\"></dx-button>\r\n          <dx-button id=\"product3\" (click)=\"inhoadon()\" [(icon)]=\"_translate.ICONS.print\" text=\"In PTT\" type=\"default\">\r\n          </dx-button>\r\n          <dx-menu *ngIf=\"test\" [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\"\r\n            submenuDirection=\"auto\" (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerVat\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [showBorders]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\"\r\n  [columnAutoWidth]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n  (onContentReady)=\"onContentReady($event)\">\r\n  <!-- <dxo-scrolling mode=\"virtual\"></dxo-scrolling> -->\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\">\r\n  </dxo-selection>\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"vat\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\" showAllText='{{_translate.CONTROLL.COMBO.all}}'></dxo-filter-row>\r\n  <!-- Số hóa đơn -->\r\n  <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"bill_number\"\r\n    caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n    alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\" sortOrder=\"desc\" [sortIndex]=\"1\">\r\n  </dxi-column>\r\n  <!-- Mã số đơn hàng -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_the_order\" dataField=\"the_order\"\r\n    caption=\"{{ 'CONTROLL.LABEL.the_order_no_code' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_phieu}}\"\r\n    alignment=\"left\">\r\n  </dxi-column>\r\n  <!-- Số phiếu -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"receipts_no\"\r\n    caption=\"{{ 'GRID.INVOICE.receipts_no' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_phieu}}\"\r\n    alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <!-- Mẫu số, ký hiệu -->\r\n  <dxi-column cellTemplate=\"templateCode\"\r\n    caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Ngày hóa đơn -->\r\n  <dxi-column dataField=\"bill_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n    format=\"dd/MM/yyyy\" sortOrder=\"desc\" [sortIndex]=\"0\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Mã số thuế -->\r\n  <dxi-column dataField=\"buyer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <!-- Tên khách hàng -->\r\n  <dxi-column [filterOperations]=\"['contains']\" [calculateFilterExpression]=\"calculateFilterExpression\"\r\n    cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\" alignment=\"left\"\r\n    minWidth=\"200\">\r\n  </dxi-column>\r\n  <!-- Số đơn vận -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_transport_number_from_product\" dataField=\"transport_number\"\r\n    caption=\"{{ 'GRID.INVOICE_DETAILS.transport_number' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.transport_number}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <!-- Thành tiền -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"amount_string\"\r\n    caption=\"{{ 'GRID.INVOICE_DETAILS.amount' | translate }}\" alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.thanh_tien}}\">\r\n  </dxi-column>\r\n  <!-- Tiền thuế -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"total_amount_vat_string\"\r\n    caption=\"{{ 'GRID.INVOICE_DETAILS.amount_vat' | translate }}\" alignment=\"right\"\r\n    headerCellTemplate=\"titleHeaderTemplate\" minWidth=\"{{_translate.GRID_WIDTH.thanh_tien}}\">.\r\n  </dxi-column>\r\n  <!-- Tổng tiền -->\r\n  <dxi-column dataField=\"total_payment_string\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" alignment=\"right\"\r\n    headerCellTemplate=\"titleHeaderTemplate\" minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\">\r\n  </dxi-column>\r\n  <!-- Trạng thái thanh toán -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.check_payment_status\" cellTemplate=\"viewPaymentStatus\"\r\n    caption=\"{{ 'GRID.INVOICE.payment_status' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\"\r\n    alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Trạng thái gửi CQT -->\r\n  <dxi-column *ngIf=\"isTT78\" cellTemplate=\"statusSendTax\" caption=\"Trạng thái gửi CQT\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\" dataField=\"status\">\r\n    <dxo-lookup [dataSource]=\"trangThaiGuiCQTStatus\" valueExpr=\"code\" [displayExpr]=\"displayFunction\"\r\n      width=\"120\"></dxo-lookup>\r\n  </dxi-column>\r\n  <!-- Email, trạng thái hóa đơn -->\r\n  <dxi-column cellTemplate=\"actionEmail\" caption=\"{{ 'GRID.INVOICE.send_email_status' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Chức năng -->\r\n  <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.template_code }}</p>\r\n    <p>{{ d.data.bill_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.bill_number }}<span\r\n      *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p>{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionEmail'\">\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status !='GIU_SO'\" class=\"chua-gui-khach-hang gach-chan\"\r\n      (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.un_sent' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'GUI_LOI'\" style=\"color: red;\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.send_mail_error' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status =='GIU_SO'\" class=\"cho-ky\"\r\n      (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_sign' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_GUI'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_it' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_NHAN'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.received' | translate }}</a>\r\n    <p *ngIf=\"!d.data.send_email_status\" href=\"javascript:void(0)\">{{ trangthaihoadon(d.data) }} <a\r\n        *ngIf=\"trangthaihoadon(d.data) == 'Lỗi ký HD' || trangthaihoadon(d.data) == 'Signed error'\" class=\"gach-chan\"\r\n        (click)=\"editNotSelect(d.data)\" href=\"javascript:void(0)\">({{ 'GRID.INVOICE.re_sign' | translate }})</a></p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    <a *ngIf=\"d.data.status == 'DA_XUAT'\" href=\"javascript:void(0)\">Đã xuất</a>\r\n    <a *ngIf=\"d.data.status == 'KHONG_DU_DK_CAP_MA'\" href=\"javascript:void(0)\" (click)=\"LydoKTiepNhan(d.data)\">Không đủ\r\n      ĐK cấp mã</a>\r\n    <a *ngIf=\"d.data.status == 'CHUA_GUI_CQT'\" href=\"javascript:void(0)\">Chưa gửi CQT</a>\r\n    <a *ngIf=\"d.data.status == 'DA_GUI_CQT'\" href=\"javascript:void(0)\">Đã gửi CQT</a>\r\n    <a *ngIf=\"d.data.status == 'DA_TIEP_NHAN'\" href=\"javascript:void(0)\">CQT đã tiếp nhận</a>\r\n    <a *ngIf=\"d.data.status == 'KHONG_HOP_LE'\" href=\"javascript:void(0)\" style=\"color: red;\"\r\n      (click)=\"LydoKTiepNhan(d.data)\">CQT kiểm tra không hợp lệ </a>\r\n  </div>\r\n  <!-- Trạng thái thanh toán -->\r\n  <div *dxTemplate=\"let d of 'viewPaymentStatus'\">\r\n    <a href=\"javascript:void(0)\">{{ trangthaithanhtoan(d.data) }}</a>\r\n  </div>\r\n  <!--  -->\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <div class=\"dropdown\">\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.extend}}\" class=\"morongIcon actionIcon\" (click)=\"myFunction(d.data.id)\"\r\n        href=\"javascript:void(0)\"></a>\r\n      <div [id]=\"d.data.id\" class=\"dropdown-content\"\r\n        [ngClass]=\"{'last-drodown':( pageSize - 1 == d.rowIndex || pageSize - 2 == d.rowIndex || pageSize - 3 == d.rowIndex) && pageSize > 4, 'small-grid': pageSize < 5}\">\r\n        <a (click)=\"copy(d.data)\" href=\"javascript:void(0)\">{{'CONTROLL.BUTTON.copy' | translate}}\r\n          <i [class]=\"_translate.ICONS.copy\"></i></a>\r\n        <a (click)=\"inhoadon(d.data)\" href=\"javascript:void(0)\">In phiếu tính tiền\r\n          <i [class]=\"_translate.ICONS.print\"></i></a>\r\n        <a (click)=\"inChuyenDoi(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.print_conversion' | translate }}\r\n          <i [class]=\"_translate.ICONS.print\"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" cssClass=\"dxi-total-payment-total_payment_string\" [customizeText]=\"customizeText\" showInColumn=\"total_payment_string\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 35, 50, 100]\" [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n\r\n<iframe id=\"preview-iframe-print\" width=\"0%\" height=\"0%\" style=\"margin-left: 9px;height:0px\"></iframe>\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"200\" [showTitle]=\"true\" title=\"IN PHIẾU TÍNH TIỀN\" [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopupIn\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div class=\"dx-field\">\r\n      <div class=\"dx-field-label\">Chọn mẫu: </div>\r\n      <div class=\"dx-field-value\">\r\n        <dx-select-box displayExpr=\"name\" valueExpr=\"id\" [items]=\"listTemplate\" [value]=\"listTemplate[0].id\"\r\n          (onValueChanged)=\"onPrintTempChanged($event)\">\r\n        </dx-select-box>\r\n      </div>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n      Số lượng phiếu tính tiền : {{numberPrint}}\r\n    </div>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"huy()\" text=\"Quay lại\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"print()\" text=\"In phiếu tính tiền\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n<app-download-pdf></app-download-pdf>"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/index/index.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/index/index.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}.last-drodown{bottom:30px}.small-grid{position:fixed  !important;right:39px !important}::ng-deep #gridContainerVat .dx-cell-focus-disabled{overflow:visible !important}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}::ng-deep .view-bill{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/index/index.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/index/index.component.ts ***!
  \**************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../send-invoices/send-invoices.component */ "./src/app/modules/bill-invoice/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../import-invoices-dt/import-invoices-dt.component */ "./src/app/modules/bill-invoice/components/import-invoices-dt/import-invoices-dt.component.ts");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var _send_invoice_to_tax_send_invoice_to_tax_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../send-invoice-to-tax/send-invoice-to-tax.component */ "./src/app/modules/bill-invoice/components/send-invoice-to-tax/send-invoice-to-tax.component.ts");
/* harmony import */ var _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/components/download-pdf/download-pdf.component */ "./src/app/shared/components/download-pdf/download-pdf.component.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
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
    function IndexComponent(authService, billService, modalService, modalImportService, router, route, translate, socketService, spinner, templateService, invoiceService, vPreviewInvService) {
        var _this = this;
        this.authService = authService;
        this.billService = billService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.socketService = socketService;
        this.spinner = spinner;
        this.templateService = templateService;
        this.invoiceService = invoiceService;
        this.vPreviewInvService = vPreviewInvService;
        this.selectedRows = [];
        this.selectedItems = [];
        this.test = true;
        this.isAccessExportInv = true;
        this.invoice_releases = [];
        this.templatesTT78 = [];
        this.infoDangKy = {};
        this.extras = [];
        this.numberPrint = 0;
        this.data_extras_invoice_buy = [];
        this.extend = [];
        this.trangThaiGuiCQTStatus = [];
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
        this.listTemplate = [];
        this.showPopupIn = false;
        this.isPrint = false;
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
        this.objStatusBtn = {};
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this.customizeText = function (url) {
            _this.invoiceService.handleTotalGrid(url.value, _this.objStatusBtn, _this.dataGrid);
            return '';
        };
        this.displayFunction = function (item) {
            if (!item) {
                return 'Tất cả';
            }
            return item.name;
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
                    {
                        id: 'NAP_HD_TU_EXCEL_DT',
                        name: this._translate.THONG_TIN.nap_hd_mtt_tu_excel,
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
                    },
                    {
                        id: 'GUI_BEN_MUA',
                        name: this._translate.CONTROLL.LABEL.send_invoice,
                        icon: this._translate.ICONS.send_email
                    },
                    {
                        id: 'GUI_HD_CQT',
                        name: this._translate.THONG_TIN.gui_hoa_don_den_cqt,
                        icon: this._translate.ICONS.send_email
                    },
                    {
                        id: 'IN_CHUYEN_DOI',
                        name: this._translate.CONTROLL.BUTTON.print_conversion,
                        icon: this._translate.ICONS.print
                    },
                    {
                        id: 'TAI_HD_PDF',
                        name: this._translate.CONTROLL.BUTTON.tai_hd_pdf,
                        icon: this._translate.ICONS.download
                    },
                    {
                        id: "TAI_HD_XML",
                        name: this._translate.CONTROLL.BUTTON.tai_hd_xml,
                        icon: this._translate.ICONS.xml
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
        var _this = this;
        this.handleUI(this.route.snapshot.data.type);
        this.configs = this.authService.getConfigs();
        this.billService.isCopy = false;
        this.billService.getTemp(this.route.snapshot.data.type).subscribe(function (res) {
            if (res.data.templates.length) {
                _this.template_id = res.data.templates[0].id;
                _this.listTemplate = res.data.templates.map(function (temp) {
                    return __assign({}, temp, { name: temp.template_code + temp.invoice_series });
                });
            }
        });
        if (this.curentUser.account.tax_code == "0102519041")
            this.isEFY = true;
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        this.connectWebsocket();
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser && this.currentUser.account && this.currentUser.account.van_account_info) {
            this.province_name = this.currentUser.account.van_account_info.city_name;
        }
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        var listpermissions = this.currentUser.user.permissions.split(',');
        var _obj = listpermissions.filter(function (p) { return p === 'phe_duyet'; });
        if (_obj.length > 0) {
            this.isAccessExportInv = true;
        }
        else {
            this.isAccessExportInv = false;
        }
        this.trangThaiGuiCQTStatus = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_16__["VSelectBoxService"]._trangThaiGuiCQT(this._translate);
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
            var _lst = this.billService.getAll(this.loaiHoaDon, params);
            this.dataSource.store = _lst;
            this.footerSum = {
                summary: _lst.summary,
                summary_deduction: _lst.summary_deduction,
            };
        }
        else {
            this.dataSource.store = this.billService.getAll(this.loaiHoaDon, params);
        }
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
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
                if (data.bill_number) {
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
    };
    IndexComponent.prototype.lapHoaDon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.maytinhtien)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.loaiHoaDon === '01GTKT') 
                        // this.router.navigate(['system/vat-invoice/create'], { queryParams: { code: this.loaiHoaDon } });
                        {
                            this.router.navigate(['system/bills-invoice-vat/create']);
                        }
                        else {
                            this.router.navigate(['system/bills-invoice-sale/create']);
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
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.maytinhtien)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        row = data ? data : this.selectedItems[0];
                        sub = this.billService.show(row.id).subscribe(function (rs) {
                            if (rs.status == 'success') {
                                if (rs.data.bill) {
                                    rs.data.bill.id = null;
                                    rs.data.bill.adjustment_type = '1';
                                    rs.data.bill.adjustment_object = null;
                                    rs.data.bill.adjustment_form = null;
                                    rs.data.bill.bill_number = null;
                                    rs.data.bill.bill_date = null;
                                    rs.data.bill.status = null;
                                    rs.data.bill.updated_at = null;
                                    rs.data.bill.bill_order = null;
                                    rs.data.bill.status_order = null;
                                    rs.data.bill.doc_relate_date = null;
                                    rs.data.bill.doc_relate_symbol = null;
                                    rs.data.bill.note_view_on_bill = null;
                                    rs.data.bill.send_department_status = null;
                                    rs.data.bill.extend_json_bill = null;
                                    rs.data.bill.is_outside_process = false;
                                    rs.data.bill.other_id = null;
                                    rs.data.bill.verify_code = null;
                                    rs.data.bill.auto_value = false;
                                    rs.data.bill.destroy_reason = null;
                                    rs.data.bill.destroy_date = null;
                                    rs.data.bill.origin_id = null;
                                    if (rs.data.bill.bill_options && rs.data.bill.bill_options.length > 0) {
                                        rs.data.bill.bill_options.forEach(function (item) {
                                            delete item['id'];
                                            delete item['bill_id'];
                                        });
                                    }
                                    _this.billService.data = rs.data.bill;
                                    _this.billService.isCopy = true;
                                }
                                if (_this.loaiHoaDon === '01GTKT') {
                                    _this.router.navigate(['system/bills-invoice-vat/create']);
                                }
                                else {
                                    _this.router.navigate(['system/bills-invoice-sale/create']);
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
            var isCheckInitFee, rowData, oInvoice, _hdDaXuat, isCheckAllEquals, isExistOther, arrStatusInv, arrStatusItem_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.maytinhtien)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        rowData = null;
                        if (data) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(data.status) == _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].statusInv.DaXuat)
                                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                            else {
                                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(data.status) == _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].statusInv.GhiTam && _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(data.send_department_status) == 'KHONG_DU_DK_CAP_MA')
                                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Không sửa được hóa đơn không đủ điều kiện cấp mã", 'error');
                                else
                                    rowData = data;
                            }
                        }
                        else {
                            if (this.selectedItems.length > 0) {
                                if (this.selectedItems.length == 1)
                                    rowData = this.selectedItems[0];
                                else {
                                    oInvoice = this.selectedItems.filter(function (p) { return p.send_department_status; })[0];
                                    _hdDaXuat = this.selectedItems.filter(function (p) { return p.status != _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].statusInv.GhiTam; })[0];
                                    if (_hdDaXuat || oInvoice) {
                                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                                        return [2 /*return*/];
                                    }
                                    isCheckAllEquals = this.selectedItems.every(function (item) { return item.template_id == _this.selectedItems[0].template_id; });
                                    if (!isCheckAllEquals) {
                                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.THONG_TIN.chon_hoa_don_cung_mau, 'error');
                                        return [2 /*return*/];
                                    }
                                    isExistOther = this.selectedItems.find(function (item) { return item.adjustment_type != 1; });
                                    if (isExistOther) {
                                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.THONG_TIN.cho_phep_sua_hoa_don_goc, 'error');
                                        return [2 /*return*/];
                                    }
                                    arrStatusInv = ["GIU_SO", "GHI_TAM"];
                                    arrStatusItem_1 = this.selectedItems.map(function (obj) { return obj.status; });
                                    result = arrStatusInv.every(function (val) { return arrStatusItem_1.includes(val); });
                                    if (result) {
                                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.same_status_invoice, 'error');
                                        return [2 /*return*/];
                                    }
                                    this.openImportForm(rowData);
                                }
                            }
                        }
                        if (rowData) {
                            if (rowData.adjustment_type === '5') {
                                this.router.navigate(["/system/handle-bills/edit-adjust/" + rowData.id]);
                            }
                            else if (rowData.adjustment_type === '3') {
                                this.router.navigate(["/system/handle-bills/edit-replace/" + rowData.id]);
                            }
                            else {
                                if (this.loaiHoaDon === '01GTKT') {
                                    this.router.navigate(["system/bills-invoice-vat/" + _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rowData.id)]);
                                }
                                else {
                                    this.router.navigate(["system/bills-invoice-sale/" + _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rowData.id)]);
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
            var _lst, subRoute;
            return __generator(this, function (_a) {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                _lst = [];
                if (data) {
                    _lst.push(data.id);
                }
                else {
                    _lst = this.selectedRows;
                }
                subRoute = this.billService.getEditImportInvoice(_lst, '', this.loaiHoaDon).subscribe(function (res) {
                    // Hàng hóa dịch vụ
                    setTimeout(function () {
                        _this.select.products = res[0].data.products;
                        _this.hoaDonImportChoXuat = res[1].data.bills.sort(function (itemA, itemB) {
                            return moment__WEBPACK_IMPORTED_MODULE_10__(itemA.created_at, 'YYYY-MM-DD HH:mm:ss').valueOf() - moment__WEBPACK_IMPORTED_MODULE_10__(itemB.created_at, 'YYYY-MM-DD HH:mm:ss').valueOf();
                        });
                        _this.select.unit_codes = res[2].data.DM_DON_VI_TINH;
                        _this.select.select_provisions_on_accounts = res[2].data.DM_DINH_KHOAN;
                        _this.select.payment_method_names = res[2].data.DM_HINH_THUC_THANH_TOAN;
                        _this.select.vats = res[2].data.DM_TY_LE_VAT;
                        _this.templatesTT78 = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].convertTemplatesToBillResolver(res[3]);
                        _this.hoaDonImportChoXuat.forEach(function (invoice) {
                            invoice.bill_products.forEach(function (row) {
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
                        var search = _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_19__["InvoicesService"].getSearchParams(_this.route);
                        var initialState = {
                            isHdGTGT: _this.loaiHoaDon === '01GTKT' ? true : false,
                            select: _this.select,
                            hoaDonImportChoXuat: _this.hoaDonImportChoXuat,
                            templatesTT78: _this.templatesTT78,
                            infoDangKy: _this.infoDangKy,
                            search: search
                        };
                        _this.bsModalImportRef = _this.modalImportService.show(_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_18__["ImportInvoicesDtComponent"], {
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
                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                }, function (err) {
                }, function () {
                    subRoute.unsubscribe();
                });
                return [2 /*return*/];
            });
        });
    };
    IndexComponent.prototype.editNotSelect = function (row) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.maytinhtien)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.isExistFormRelease) {
                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
                            return [2 /*return*/];
                        }
                        if (row.status != 'GHI_TAM') {
                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                        }
                        else {
                            if (row.adjustment_type === '5') {
                                this.router.navigate(["/system/handle-bills/edit-adjust/" + row.id]);
                            }
                            else if (row.adjustment_type === '3') {
                                this.router.navigate(["/system/handle-bills/edit-replace/" + row.id]);
                            }
                            else {
                                if (this.loaiHoaDon === '01GTKT') {
                                    this.router.navigate(["system/bills-invoice-vat/" + _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(row.id)]);
                                }
                                else {
                                    this.router.navigate(["system/bills-invoice-sale/" + _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(row.id)]);
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.viewDetailInvoice = function (data) {
        if (data.adjustment_type === '5') {
            this.router.navigate(["/system/handle-bills/edit-adjust/" + data.id]);
        }
        else if (data.adjustment_type === '3') {
            this.router.navigate(["/system/handle-bills/edit-replace/" + data.id]);
        }
        else {
            if (this.loaiHoaDon === '01GTKT') {
                this.router.navigate(["system/bills-invoice-vat/" + _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(data.id)]);
            }
            else {
                this.router.navigate(["system/bills-invoice-sale/" + _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(data.id)]);
            }
        }
    };
    IndexComponent.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, status_1, ids_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.maytinhtien)];
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
                            result = _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
                            result.then(function (dialogResult) {
                                if (dialogResult) {
                                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                                    _this.billService.delete(ids_1).subscribe(function (rs) {
                                        if (rs.status === 'success') {
                                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                            _this.loadList(_this.paramSearch);
                                        }
                                        else {
                                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                                        }
                                    }, function (err) {
                                    }, function () {
                                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
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
            if (this.selectedItems.filter(function (p) { return p.bill_number; }).length === 0) {
                check = false;
            }
        }
        if (check && (this.selectedItems.length || data)) {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            else {
                ids = this.selectedItems.filter(function (p) { return p.bill_number; }).map(function (p) { return p.id; });
            }
            this.billService.layCacHoaDonKySoHangLoat(ids, this.loaiHoaDon).subscribe(function (rs) {
                if (rs[0].status === 'success') {
                    var initialState = {
                        isBill: true,
                        invoiceList: rs[0].data.bills,
                        configs: rs[1].data.configs,
                    };
                    _this.bsModalSignRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_13__["SendListEmailComponent"], {
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
                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            }, function (err) {
            }, function () {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_invoice_selected, 'error');
        }
    };
    IndexComponent.prototype.viewAttachFile = function (data) {
    };
    IndexComponent.prototype.sendInvoice = function (id) {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var sub = this.billService.showToSendInvoice(id).subscribe(function (rs) {
            if (rs.status == 'success') {
                var initialState = {
                    invoice: rs.data.bill,
                };
                _this.bsModalRef = _this.modalService.show(_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_14__["SendInvoicesComponent"], {
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
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.kyHangLoat = function (data) {
    };
    IndexComponent.prototype.napHDTuExcelDt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, subImport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.maytinhtien)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        subImport = this.billService.getImportInvoice(this.loaiHoaDon).subscribe(function (res) {
                            _this.templatesTT78 = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].convertTemplatesToBillResolver(res[2]);
                            _this.select.products = res[0].data.products;
                            _this.select.unit_codes = res[1].data.DM_DON_VI_TINH;
                            _this.select.select_provisions_on_accounts = res[1].data.DM_DINH_KHOAN;
                            _this.select.payment_method_names = res[1].data.DM_HINH_THUC_THANH_TOAN;
                            _this.select.vats = res[1].data.DM_TY_LE_VAT;
                            var search = _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_19__["InvoicesService"].getSearchParams(_this.route);
                            var initialState = {
                                isHdGTGT: _this.loaiHoaDon === '01GTKT' ? true : false,
                                select: _this.select,
                                isAccessExportInv: _this.isAccessExportInv,
                                templatesTT78: _this.templatesTT78,
                                infoDangKy: _this.infoDangKy,
                                search: search
                            };
                            _this.bsModalImportRef = _this.modalImportService.show(_import_invoices_dt_import_invoices_dt_component__WEBPACK_IMPORTED_MODULE_18__["ImportInvoicesDtComponent"], {
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
                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                        }, function (err) { }, function () { subImport.unsubscribe(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.inPXK = function (data) {
    };
    /* In biên bản trả hàng */
    IndexComponent.prototype.inBBTraHang = function (data) {
    };
    IndexComponent.prototype.taiHDPdf = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return (p.status == 'DA_TIEP_NHAN' || p.status == _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].statusInv.DaXuat || p.status == 'DA_GUI_CQT'); });
            if (_lst.length > 0) {
                var ids = _lst.map(function (e) { return e.id; });
                this.downloadPdf.downloadPdf(ids, 'bills', 'bill', false);
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
                return;
            }
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
            return;
        }
    };
    IndexComponent.prototype.inBBGiaoNhan = function () {
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
        else if (e.itemData.id === 'IN_CHUYEN_DOI') {
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
        else if (e.itemData.id === 'GUI_HD_CQT') {
            this.guihoadoncqt();
        }
    };
    IndexComponent.prototype.LydoKTiepNhan = function (data) {
        var lstErr = JSON.parse(data.error_content);
        var initialState = {
            lstErr: lstErr,
            notifyType: "THONG_BAO_LOI_CQT"
        };
        this.bsModalSignRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_13__["SendDataForTaxComponent"], {
            backdrop: 'static',
            keyboard: true,
            class: 'modal-lg modal-margin-width',
            initialState: initialState
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            subModal.unsubscribe();
        });
    };
    /* Kết nối đến socket  */
    IndexComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_viewInvoice') {
                if (data.Status == "success") {
                }
                else if (data.Status == "error") {
                    var popUp = window.open('about:blank', 'name', 'width=200, height=100');
                    if (popUp == null || typeof (popUp) == 'undefined') {
                    }
                    else
                        popUp.close();
                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(data.Description, 'error');
                    _this.spinner.hide();
                }
            }
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
    };
    /* Trạng thái thanh toán */
    IndexComponent.prototype.trangthaithanhtoan = function (data) {
        if (Number.parseInt(data.bill_number) > 0) {
            if (data.payment_status)
                return "Đã thanh toán";
            else
                return "Chưa thanh toán";
        }
        else
            return "";
    };
    IndexComponent.prototype.onContentReady = function (e) {
        if (e) {
            var dataSource = this.dataGrid.instance.getDataSource();
            this.pageSize = dataSource ? dataSource.items().length : 0;
        }
    };
    IndexComponent.prototype.taiHDXml = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.bill_number; });
            if (_lst.length > 0) {
                var ids = [];
                ids = _lst.map(function (e) { return e.id; });
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                var sub_1 = this.billService.xuatHDXml(ids).subscribe(function (rs) {
                    if (rs.status == "success") {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(rs.data.file_name, 'zip', rs.data.file_content);
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, "error");
                    }
                }, function (err) { }, function () {
                    sub_1.unsubscribe();
                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                });
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
                return;
            }
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
            return;
        }
    };
    IndexComponent.prototype.view = function (data) {
        var is_default_tempplate = true;
        if (this.selectedItems.length > 0 || data) {
            var _lst = this.selectedItems;
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
                    if (!_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._attemptConvertBool(data.is_default_template))
                        is_default_tempplate = false;
                }
                else {
                    ids = _lst.map(function (e) { return e.id; });
                    var arrDefault = _lst.filter(function (p) { return _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._attemptConvertBool(p.is_default_template); });
                    var arrNotDefault = _lst.filter(function (p) { return !_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._attemptConvertBool(p.is_default_template); });
                    if (arrDefault.length > 0 && arrNotDefault.length > 0) {
                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Bạn không thể xem hóa đơn từ phần mềm iHoadon và phần mềm bán hàng cùng lúc", 'error');
                        return;
                    }
                    else if (arrNotDefault.length > 0)
                        is_default_tempplate = false;
                }
                if (is_default_tempplate) {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].typeCode.xem_hoa_don_mtt_html
                    };
                    this.vPreviewInvService.xemMauPhanTrang(initialState);
                }
                else {
                    if (this.configs.system_parameter.view_multi_invoice) {
                        var data_1 = this.billService.taodulieuXemMau(ids);
                        data_1['configs'] = _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].cauhinhxemmau.hoadon;
                        this.vPreviewInvService.xemMau(data_1);
                    }
                    else {
                        var initialState = {
                            items: ids,
                            isXuatHD: false,
                            hinhthucxuat: '',
                            typeAction: _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].typeCode.xem_hoa_don_mtt,
                            cssClass: 'modal-xl view-bill'
                        };
                        this.vPreviewInvService.xemMauPhanTrang(initialState);
                    }
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    IndexComponent.prototype.inhoadon = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var ghiTam;
            return __generator(this, function (_a) {
                if (this.clickCurent) {
                    document.getElementById(this.clickCurent).classList.remove('show');
                }
                if (this.listTemplate.length > 0) {
                    if (this.selectedItems.length > 0 || this.dataPrint || data) {
                        if (this.selectedItems.length > 0) {
                            this.numberPrint = this.selectedItems.length;
                            ghiTam = this.selectedItems.filter(function (item) { return !item.bill_number; });
                            if (ghiTam.length === 0) {
                                if (this.listTemplate.length > 1) {
                                    if (this.isPrint) {
                                        this.templateService.show(this.template_id).toPromise().then(function (rs) {
                                            if (rs.status == "success") {
                                                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                                                _this.selectedItems.forEach(function (item) {
                                                    _this.createFormTypeBase64(rs.data.template, item);
                                                    var html = Base64.encode(_this.arrHtml);
                                                    _this.socketService.inFileHtml(function () { return _this.connectWebsocket(); }, html);
                                                });
                                                setTimeout(function () {
                                                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                                                    _this.dataGrid.instance.clearSelection();
                                                }, 1000);
                                            }
                                            else {
                                                return null;
                                            }
                                        });
                                    }
                                    else {
                                        this.showPopupIn = true;
                                    }
                                }
                                else {
                                    this.templateService.show(this.listTemplate[0].id).toPromise().then(function (rs) {
                                        if (rs.status == "success") {
                                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                                            _this.selectedItems.forEach(function (item) {
                                                _this.createFormTypeBase64(rs.data.template, item);
                                                var html = Base64.encode(_this.arrHtml);
                                                _this.socketService.inFileHtml(function () { return _this.connectWebsocket(); }, html);
                                            });
                                            setTimeout(function () {
                                                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                                                _this.dataGrid.instance.clearSelection();
                                            }, 1000);
                                        }
                                        else {
                                            return null;
                                        }
                                    });
                                }
                            }
                            else {
                                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Vui lòng chọn hóa đơn đã xuất', 'error');
                            }
                        }
                        else {
                            this.numberPrint = 1;
                            if (data) {
                                if (data.bill_number) {
                                    if (this.listTemplate.length > 1) {
                                        if (this.isPrint) {
                                            this.templateService.show(this.template_id).toPromise().then(function (rs) {
                                                if (rs.status == "success") {
                                                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                                                    _this.createFormTypeBase64(rs.data.template, data);
                                                    var html = Base64.encode(_this.arrHtml);
                                                    _this.socketService.inFileHtml(function () { return _this.connectWebsocket(); }, html);
                                                    setTimeout(function () {
                                                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                                                        _this.dataGrid.instance.clearSelection();
                                                        _this.isPrint = false;
                                                    }, 1000);
                                                }
                                                else {
                                                    return null;
                                                }
                                            });
                                        }
                                        else {
                                            this.showPopupIn = true;
                                            this.dataPrint = data;
                                        }
                                    }
                                    else {
                                        this.templateService.show(this.listTemplate[0].id).toPromise().then(function (rs) {
                                            if (rs.status == "success") {
                                                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                                                _this.createFormTypeBase64(rs.data.template, data);
                                                var html = Base64.encode(_this.arrHtml);
                                                _this.socketService.inFileHtml(function () { return _this.connectWebsocket(); }, html);
                                                setTimeout(function () {
                                                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                                                    _this.dataGrid.instance.clearSelection();
                                                }, 1000);
                                            }
                                            else {
                                                return null;
                                            }
                                        });
                                    }
                                }
                                else {
                                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Vui lòng chọn hóa đơn đã xuất', 'error');
                                }
                            }
                            else {
                                if (this.isPrint) {
                                    this.templateService.show(this.template_id).toPromise().then(function (rs) {
                                        if (rs.status == "success") {
                                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                                            _this.createFormTypeBase64(rs.data.template, _this.dataPrint);
                                            var html = Base64.encode(_this.arrHtml);
                                            _this.socketService.inFileHtml(function () { return _this.connectWebsocket(); }, html);
                                            setTimeout(function () {
                                                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                                                _this.dataGrid.instance.clearSelection();
                                                _this.dataPrint = null;
                                            }, 1000);
                                        }
                                        else {
                                            return null;
                                        }
                                    });
                                }
                                else {
                                    this.showPopupIn = true;
                                    this.dataPrint = data;
                                }
                            }
                        }
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Chưa chọn bản ghi nào', 'error');
                    }
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Chưa có mẫu phiếu tính tiền', 'error');
                }
                return [2 /*return*/];
            });
        });
    };
    IndexComponent.prototype.huy = function () {
        this.showPopupIn = false;
    };
    IndexComponent.prototype.createFormTypeBase64 = function (template, item) {
        var _this = this;
        var raw_file_Decode = Base64.decode(template.raw_file);
        var raw_file_Parse = JSON.parse(raw_file_Decode);
        var htmlBefore = raw_file_Parse.html + "</html>";
        var watermark_image_default = raw_file_Parse.watermark_image_default;
        var watermark_image = raw_file_Parse.watermark_image;
        var countRow = template.number_of_row;
        var arrayHtml = "";
        var heightRow = "";
        switch (template.paper_size) {
            case _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].paperSizes.A4Doc:
                heightRow = "25px;";
                break;
            case _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].paperSizes.A4Ngang:
                heightRow = "25px;";
                break;
            case _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].paperSizes.A5Ngang:
                heightRow = "18px;";
                this.reportHeight = "500px";
                break;
            default:
                heightRow = "25px;";
                break;
        }
        var _index = 0;
        this.iframe = document.getElementById('preview-iframe-print');
        this.iframe.contentDocument.open("text/html", "replace");
        this.iframe.contentDocument.write(htmlBefore);
        this.iframe.contentDocument.close();
        this.generateQRCode(item.bill_number, item.verify_code);
        _index++;
        //////// Thêm ảnh khung
        $("#preview-iframe-print").contents().find(".bg-template-default").css('background-image', 'url(data:image/' + "jpg" + ';base64,' + watermark_image_default + ')').css('display', 'block');
        // qrcode
        $("#preview-iframe-print").contents().find(".qrcode").css('background-image', 'url(' + "" + '' + this.qrcode + ')').css('display', 'block');
        //////// Thêm ảnh  nền
        $("#preview-iframe-print").contents().find(".bg-template-parent").css('display', 'block');
        $("#preview-iframe-print").contents().find(".bg-template-parent").find(".bg-template").css('background-image', 'url(data:image/' + "jpg" + ';base64,' + watermark_image + ')').css('display', 'block');
        //////// Footer
        $("#preview-iframe-print").contents().find(".report-footer").css({ display: 'block' });
        /////Fill dữ liệu vào hóa đơn
        // Ngày hóa đơn
        var a = moment__WEBPACK_IMPORTED_MODULE_10__();
        var invDate;
        if (item.bill_date)
            invDate = moment__WEBPACK_IMPORTED_MODULE_10__(item.bill_date);
        else
            invDate = moment__WEBPACK_IMPORTED_MODULE_10__();
        var yearInv = invDate.year();
        var monthInv = invDate.month() < 12 ? invDate.month() + 1 : 1;
        var dayInv = invDate.date();
        if ($("#preview-iframe-print").contents().find(".NgayHD")[0])
            $('#preview-iframe-print').contents().find(".NgayHD").html(dayInv);
        if ($("#preview-iframe-print").contents().find(".ThangHD")[0])
            $('#preview-iframe-print').contents().find(".ThangHD").html(monthInv);
        if ($("#preview-iframe-print").contents().find(".NamHD")[0])
            $('#preview-iframe-print').contents().find(".NamHD").html(yearInv);
        if ($("#preview-iframe-print").contents().find(".number-form")[0])
            $('#preview-iframe-print').contents().find(".number-form").html(template.template_code);
        if ($("#preview-iframe-print").contents().find(".symbol")[0])
            $('#preview-iframe-print').contents().find(".symbol").html(template.invoice_series);
        if ($('#preview-iframe-print').contents().find(".symbol-number-form")[0])
            $('#preview-iframe-print').contents().find(".symbol-number-form").html(template.template_code + template.invoice_series.toUpperCase());
        if ($("#preview-iframe-print").contents().find(".invoice-number")[0] && item.bill_number)
            $('#preview-iframe-print').contents().find(".invoice-number").html(item.bill_number);
        else
            $('#preview-iframe-print').contents().find(".invoice-number").html("");
        if ($("#preview-iframe-print").contents().find(".invoice-date")[0] && item.bill_date)
            $('#preview-iframe-print').contents().find(".invoice-date").html(moment__WEBPACK_IMPORTED_MODULE_10__(item.bill_date).format('DD/MM/YYYY'));
        else
            $('#preview-iframe-print').contents().find(".invoice-date").html("");
        /* Mã cơ quan thuế */
        if (template.is_decree_new) {
            if (template.is_invoice_with_code) {
                $('#preview-iframe-print').contents().find(".tax_authority_code").css('display', 'block');
                if ($("#preview-iframe-print").contents().find(".ma-co-quan-thue")[0]) {
                    $('#preview-iframe-print').contents().find(".ma-co-quan-thue").html(item.tax_authority_code);
                    if (item.send_department_status == "KHONG_DU_DK_CAP_MA")
                        $('#preview-iframe-print').contents().find(".ma-co-quan-thue").html('Không đủ điều kiện cấp mã');
                }
            }
            else
                $('#preview-iframe-print').contents().find(".tax_authority_code").css('display', 'none');
        }
        if (this.configs.system_parameter.display_time_sign_invoice) {
            var singDate = invDate.format('DD/MM/YYYY HH:mm:ss');
            // if (item.invoice_sign_date)
            //   singDate = moment(item.invoice_sign_date).format('DD/MM/YYYY HH:mm:ss');
            if ($("#preview-iframe-print").contents().find(".seler-sign-date")[0])
                $('#preview-iframe-print').contents().find(".seler-sign-date").html(singDate);
            // if ($("#preview-iframe-print").contents().find(".seler-sign-name")[0])
            //   $('#preview-iframe-print').contents().find(".seler-sign-name").html(this.currentUser.account.name);
        }
        else {
            var singDate = invDate.format('DD/MM/YYYY');
            // if (item.invoice_sign_date)
            //   singDate = moment(item.invoice_sign_date).format('DD/MM/YYYY');
            if ($("#preview-iframe-print").contents().find(".seler-sign-date")[0])
                $('#preview-iframe-print').contents().find(".seler-sign-date").html(singDate);
            // if ($("#preview-iframe-print").contents().find(".seler-sign-name")[0])
            //   $('#preview-iframe-print').contents().find(".seler-sign-name").html(this.currentUser.account.name);
        }
        ///// mã số thuế bên mua
        if ($("#preview-iframe-print").contents().find(".value-8d903984-576d-c322-7843-bdacf97ac100")[0])
            $('#preview-iframe-print').contents().find(".value-8d903984-576d-c322-7843-bdacf97ac100").html(item.buyer_tax_code);
        //////// Địa chỉ bên mua
        if ($("#preview-iframe-print").contents().find(".value-7c103984-576d-c322-7843-bdacf97ac189")[0])
            $('#preview-iframe-print').contents().find(".value-7c103984-576d-c322-7843-bdacf97ac189").html(item.buyer_address);
        // tên người mua
        if ($("#preview-iframe-print").contents().find(".value-9c103984-576d-c322-7843-bdacf97ac189")[0]) {
            var name_1 = '';
            if (item.customer_name) {
                name_1 = item.customer_name;
            }
            else {
                name_1 = item.buyer_name;
            }
            $('#preview-iframe-print').contents().find(".value-9c103984-576d-c322-7843-bdacf97ac189").html(name_1);
        }
        //CCCD
        if ($("#preview-iframe-print").contents().find(".value-86679804-89b9-42e3-b173-9059da407f64")[0])
            $('#preview-iframe-print').contents().find(".value-86679804-89b9-42e3-b173-9059da407f64").html(item.id_card);
        /////// Hình thức thanh toán
        if ($("#preview-iframe-print").contents().find(".value-3a9f145a-549a-01ea-e507-cc7b0ab28a69")[0])
            $('#preview-iframe-print').contents().find(".value-3a9f145a-549a-01ea-e507-cc7b0ab28a69").html(item.payment_method_view_name);
        ////// Tài khoản bên mua
        if ($("#preview-iframe-print").contents().find(".value-d0f2a367-8ca8-006a-eb0c-cf3261f00a1c")[0])
            $('#preview-iframe-print').contents().find(".value-d0f2a367-8ca8-006a-eb0c-cf3261f00a1c").html(item.bank_account_number);
        /////// Ghi chú trên hóa đơn
        if ($("#preview-iframe-print").contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00a1c")[0])
            $('#preview-iframe-print').contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00a1c").html(item.note);
        /////// Tên đơn vị
        if ($("#preview-iframe-print").contents().find(".value-8c103984-576d-c322-7843-bdacf97ac189")[0])
            $('#preview-iframe-print').contents().find(".value-8c103984-576d-c322-7843-bdacf97ac189").html(item.customer_name);
        ////// Lớp
        if ($("#preview-iframe-print").contents().find(".value-7d873098-576d-c322-7843-bdacf97ac100")[0])
            $('#preview-iframe-print').contents().find(".value-7d873098-576d-c322-7843-bdacf97ac100").html(item.class_name);
        /// Mã tra cứu
        if ($("#preview-iframe-print").contents().find(".matracuu")[0])
            $('#preview-iframe-print').contents().find(".matracuu").html(item.verify_code);
        /* Loại tiền */
        if ($("#preview-iframe-print").contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00999")[0])
            $('#preview-iframe-print').contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00999").html(item.currency_code);
        $('#preview-iframe-print').contents().find('.report-container').css({ height: this.reportHeight });
        $('#preview-iframe-print').contents().find('.detail').css({ display: 'block' });
        ////////Fill thông tin hàng hóa
        if ($("#preview-iframe-print").contents().find(".value-8l873098-576d-c322-7843-bdacf97ac100")[0])
            $('#preview-iframe-print').contents().find(".value-8l873098-576d-c322-7843-bdacf97ac100").html(item.bill_products[0].product_name);
        var format;
        var displayInt = this.formatter.display_int ? this.formatter.display_int : (this.configs.display_int ? this.configs.display_int : false);
        format = this.configs.decpoint_is_dot ? { decimal: ".", thousands: ",", display_int: displayInt } : { decimal: ",", thousands: ".", display_int: displayInt };
        var decimal_quatity = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.so_luong);
        // let decimal_number_real_export = VChanggeMoneyService.getFormatterToNumber(formatter.so_luong);
        // let decimal_number_real_import = VChanggeMoneyService.getFormatterToNumber(formatter.so_luong);
        var decimal_price = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.don_gia);
        var decimal_price_nte = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.don_gia_nte);
        var decimal_amount = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.thanh_tien);
        var decimal_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tien_thue);
        var decimal_vat = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.vat);
        var decimal_amount_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien);
        if (_index == 1) {
            this.trRow = "";
            item.bill_products.forEach(function (product) {
                _this.trRow += '<tr class="detail-data font-color-data text-left">';
                _this.trRow += '<td style="height: "' + heightRow + '" colspan="3" align="left"><span class="valueTenHangHoa">' + product.product_name + '</span></td>';
                _this.trRow += '</tr>';
                _this.trRow += '<tr class="detail-data font-color-data text-left">';
                var ths = $("#preview-iframe-print").contents().find("#tbDetail").find("th");
                for (var j = 0; j < ths.length; j++) {
                    var className = ths[j].className;
                    switch (className) {
                        case "columnSTT":
                            if ($("#preview-iframe-print").contents().find(".columnSTT")[0])
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
                        // case "columnDonViTinh":
                        //   let unit_name = product.unit_name ? product.unit_name : "";
                        //   this.trRow += '<td style="height: "' + heightRow + '" class="center"><span class="valueDonViTinh">' + unit_name + '</span></td>';
                        //   break;
                        case "columnSoLuong":
                            var danh_muc = _this.authService.getDMLocal();
                            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
                            var quantity = product.quantity ? _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(product.quantity, decimal_quatity, format) : "";
                            var unit_name = '';
                            if (product.unit_code) {
                                if (danh_muc.DM_DON_VI_TINH) {
                                    unit_name = _this.select.unit_codes.find(function (item) { return item.code === product.unit_code; }).name;
                                }
                                quantity += " " + unit_name;
                            }
                            _this.trRow += '<td style="height: "' + heightRow + '"><span class="valueSoLuong" style="word-wrap: normal; width:100%">' + quantity + '</span></td>';
                            break;
                        case "columnDonGia":
                            var price = product.price ? _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(product.price, decimal_price, format) : "";
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
                            var amount = product.amount ? _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(product.amount, decimal_amount, format) : "";
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
            if (item.bill_products.length < countRow) {
                var count = countRow - item.bill_products.length;
                this.createRowData(count, template);
            }
        }
        $("#preview-iframe-print").contents().find(".tbody-content-detail").append($(this.trRow));
        if ($("#preview-iframe-print").contents().find(".TIEN_HH_DV_GTGT_KHONG_THUE")[0])
            $('#preview-iframe-print').contents().find(".TIEN_HH_DV_GTGT_KHONG_THUE").html(item.total_amount_product_vatx);
        if ($("#preview-iframe-print").contents().find(".TIEN_HH_DV_GTGT0")[0])
            $('#preview-iframe-print').contents().find(".TIEN_HH_DV_GTGT0").html(item.total_amount_product_vat0);
        if ($("#preview-iframe-print").contents().find(".TIEN_HH_DV_GTGT5")[0])
            $('#preview-iframe-print').contents().find(".TIEN_HH_DV_GTGT5").html(item.total_amount_product_vat5);
        if ($("#preview-iframe-print").contents().find(".TIEN_HH_DV_GTGT10")[0])
            $('#preview-iframe-print').contents().find(".TIEN_HH_DV_GTGT10").html(item.total_amount_product_vat10);
        if ($("#preview-iframe-print").contents().find(".TONG_TIEN_HH_DV_GTGT")[0])
            $('#preview-iframe-print').contents().find(".TONG_TIEN_HH_DV_GTGT").html(item.amount);
        if ($("#preview-iframe-print").contents().find(".TIEN_THUE_GTGT")[0])
            $('#preview-iframe-print').contents().find(".TIEN_THUE_GTGT").html(template.symbol_no_vat);
        if ($("#preview-iframe-print").contents().find(".TIEN_THUE_GTGT0")[0])
            $('#preview-iframe-print').contents().find(".TIEN_THUE_GTGT0").html(item.amount_vat0);
        if ($("#preview-iframe-print").contents().find(".TIEN_THUE_GTGT5")[0])
            $('#preview-iframe-print').contents().find(".TIEN_THUE_GTGT5").html(item.amount_vat5);
        if ($("#preview-iframe-print").contents().find(".TIEN_THUE_GTGT10")[0])
            $('#preview-iframe-print').contents().find(".TIEN_THUE_GTGT10").html(item.amount_vat10);
        if ($("#preview-iframe-print").contents().find(".TONG_TIEN_THUE_GTGT")[0])
            $('#preview-iframe-print').contents().find(".TONG_TIEN_THUE_GTGT").html(item.total_amount_vat);
        if ($("#preview-iframe-print").contents().find(".TIEN_THANH_TOAN_KHONG_THUE")[0])
            $('#preview-iframe-print').contents().find(".TIEN_THANH_TOAN_KHONG_THUE").html(item.amount_after_vatx);
        if ($("#preview-iframe-print").contents().find(".TIEN_THANH_TOAN_GTGT0")[0])
            $('#preview-iframe-print').contents().find(".TIEN_THANH_TOAN_GTGT0").html(item.amount_after_vat0);
        if ($("#preview-iframe-print").contents().find(".TIEN_THANH_TOAN_GTGT5")[0])
            $('#preview-iframe-print').contents().find(".TIEN_THANH_TOAN_GTGT5").html(item.amount_after_vat5);
        if ($("#preview-iframe-print").contents().find(".TIEN_THANH_TOAN_GTGT10")[0])
            $('#preview-iframe-print').contents().find(".TIEN_THANH_TOAN_GTGT10").html(item.amount_after_vat10);
        if ($("#preview-iframe-print").contents().find(".TONG_TIEN_THANH_TOAN")[0])
            $('#preview-iframe-print').contents().find(".TONG_TIEN_THANH_TOAN").html(item.amount_after_vat);
        if ($("#preview-iframe-print").contents().find(".total-amount-product-without-vat")[0])
            $('#preview-iframe-print').contents().find(".total-amount-product-without-vat").html(_core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(item.amount, decimal_amount, format));
        if (item.bill_products[0].vat && item.bill_products[0].vat != -1) {
            if ($("#preview-iframe-print").contents().find(".vat-percentage")[0])
                $('#preview-iframe-print').contents().find(".vat-percentage").html(item.bill_products[0].vat + " %");
        }
        else if ($("#preview-iframe-print").contents().find(".vat-percentage")[0])
            $('#preview-iframe-print').contents().find(".vat-percentage").html();
        if ($("#preview-iframe-print").contents().find(".total-amount-vat")[0])
            $('#preview-iframe-print').contents().find(".total-amount-vat").html(_core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(item.amount_vat, decimal_amount_vat, format));
        if ($("#preview-iframe-print").contents().find(".total-amount-product-without-vat")[0])
            $('#preview-iframe-print').contents().find(".total-amount-product-without-vat").html(_core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(item.amount, decimal_amount_vat, format));
        if ($("#preview-iframe-print").contents().find(".total-payment")[0])
            $('#preview-iframe-print').contents().find(".total-payment").html(_core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(item.total_payment, decimal_amount_after_vat, format));
        if ($("#preview-iframe-print").contents().find(".value-1h883984-576d-c322-7843-bdacf97ac189")[0])
            $('#preview-iframe-print').contents().find(".value-1h883984-576d-c322-7843-bdacf97ac189").html(item.total_payment_word);
        if ($("#preview-iframe-print").contents().find(".tien-khach-tra")[0])
            $('#preview-iframe-print').contents().find(".tien-khach-tra").html(_core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(item.cash, decimal_amount_vat, format));
        if ($("#preview-iframe-print").contents().find(".tien-tra-lai-khach")[0])
            $('#preview-iframe-print').contents().find(".tien-tra-lai-khach").html(_core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(item.returns, decimal_amount_vat, format));
        if ($("#preview-iframe-print").contents().find(".total-payment-word")[0])
            $('#preview-iframe-print').contents().find(".total-payment-word").html(item.total_amount_vat);
        ///The End
        var htmlAfter = "<html xmlns:inv=\"http://laphoadon.gdt.gov.vn/2014/09/invoicexml/v1\" xmlns:user=\"http://mycompany.com/mynamespace\"\n          xmlns:sign=\"http://www.w3.org/2000/09/xmldsig#\">" + this.iframe.contentDocument.documentElement.innerHTML + "</html></br></br></br>";
        arrayHtml += htmlAfter;
        this.arrHtml = arrayHtml;
    };
    IndexComponent.prototype.createRowData = function (countRow, template) {
        for (var i = 0; i < countRow; i++) {
            this.trRow += '<tr class="detail-data font-color-data text-left">';
            var ths = $("#preview-iframe-print").contents().find("#tbDetail").find("th");
            var _loop_1 = function () {
                var className = ths[j].className;
                var column = this_1.arrColumns.filter(function (p) { return p.name == className; })[0];
                if (column) {
                    var valueColumn = column.value;
                    var height = column.height;
                    if (template.paper_size == _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].paperSizes.A5Ngang)
                        height = "18px";
                    if (i > 0)
                        valueColumn = '';
                    if ($("#preview-iframe-print").contents().find("." + column.name)[0])
                        this_1.trRow += '<td style="height: ' + height + ';"' + ' class="' + column.class + '"><span class="' + valueColumn + '"></span></td>';
                }
            };
            var this_1 = this;
            for (var j = 0; j < ths.length; j++) {
                _loop_1();
            }
            this.trRow += '</tr>';
        }
    };
    IndexComponent.prototype.generateQRCode = function (shd, mtc) {
        var _this = this;
        var qrcodeData = 'https://ihoadon.vn/kiem-tra/?shd=' + shd + '&mtc=' + mtc + '&lang=vn'; // Chuỗi dữ liệu để tạo QR code
        var qrcodeOptions = {
            width: 120,
            height: 120
        }; // Kích thước của QR code
        qrcode__WEBPACK_IMPORTED_MODULE_17___default.a.toDataURL(qrcodeData, qrcodeOptions, function (err, url) {
            if (err)
                throw err;
            _this.qrcode = url;
        });
    };
    IndexComponent.prototype.onPrintTempChanged = function (e) {
        this.template_id = e.value;
    };
    IndexComponent.prototype.print = function () {
        var _this = this;
        this.isPrint = true;
        this.showPopupIn = false;
        setTimeout(function () {
            _this.inhoadon();
        }, 200);
    };
    IndexComponent.prototype.calculateFilterExpression = function (filterValue, selectedFilterOperation) {
        selectedFilterOperation = "contains";
        return [["customer_name_temp", selectedFilterOperation || '=', filterValue], 'or', ["buyer_name_temp", selectedFilterOperation || '=', filterValue]];
    };
    IndexComponent.prototype.guihoadoncqt = function () {
        var _this = this;
        if (this.selectedItems.length > 0) {
            var isCheckStatusInvoice = this.selectedItems.every(function (p) { return p.status == _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].statusInv.DaXuat; });
            if (!isCheckStatusInvoice) {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.THONG_TIN.chon_hoa_don_da_xuat_va_chua_gui_thue, 'error');
                return;
            }
            var invoiceList = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](this.selectedItems);
            var search = _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_19__["InvoicesService"].getSearchParams(this.route);
            var initialState = {
                invoiceList: invoiceList,
                isHdGTGT: this.loaiHoaDon === '01GTKT' ? true : false,
                search: search
            };
            this.bsModalSignRef = this.modalService.show(_send_invoice_to_tax_send_invoice_to_tax_component__WEBPACK_IMPORTED_MODULE_20__["SendInvoiceToTaxComponent"], {
                backdrop: 'static',
                keyboard: false,
                class: 'modal-lg full-modal',
                initialState: initialState
            });
            var subModal_2 = this.modalService.onHide.subscribe(function () {
                if (_this.bsModalSignRef.content.successSaveItem) {
                    _this.selectedItems = [];
                    _this.selectedRows = [];
                    _this.loadList(_this.paramSearch);
                    subModal_2.unsubscribe();
                }
            });
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.THONG_TIN.chon_hoa_don_da_xuat_va_chua_gui_thue, 'error');
        }
    };
    IndexComponent.prototype.inChuyenDoi = function (data) {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (this.selectedItems.length || data) {
            // -> trạng thái CQT đã tiếp nhận
            var _lst = this.selectedItems.filter(function (p) { return p.status == 'DA_TIEP_NHAN'; });
            if (_lst.length > 0 || data) {
                var ids = [];
                if (data) {
                    if (data.status === 'DA_TIEP_NHAN') {
                        ids.push(data.id);
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.not_print_convert, 'error');
                        return;
                    }
                }
                else {
                    ids = _lst.map(function (e) { return e.id; });
                }
                if (this.configs.system_parameter.view_multi_invoice) {
                    var data_2 = this.billService.taodulieuInMau(ids, false);
                    data_2['configs'] = _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].cauhinhxemmau.hoadon;
                    this.vPreviewInvService.xemMau(data_2);
                }
                else {
                    // Xem nhiều trang 
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].typeCode.in_chuyen_doi_hd_mtt
                    };
                    this.vPreviewInvService.xemMauPhanTrang(initialState);
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxMenuComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxMenuComponent"])
    ], IndexComponent.prototype, "dxMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expandMenu'),
        __metadata("design:type", Object)
    ], IndexComponent.prototype, "expandMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_21__["DownloadPdfComponent"]),
        __metadata("design:type", _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_21__["DownloadPdfComponent"])
    ], IndexComponent.prototype, "downloadPdf", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/bill-invoice/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/bill-invoice/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_12__["BillService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _core_services__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_15__["TemplateService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_22__["InvoiceService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_23__["ViewInvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/components/invoice/invoice.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/invoice/invoice.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"invoice-container\">\r\n    <iframe id=\"preview-iframe-bill-e\" width=\"0%\" height=\"0%\" style=\"margin-left: 9px;height:0px\"></iframe>\r\n    <!-- Thông tin trên hóa đơn -->\r\n    <bill-form-invoice [ttDaXuatHoaDon]=\"ttDaXuatHoaDon\" [dataSource]=\"dataSource\" [bill_products]=\"bill_products\"\r\n      [frmData]=\"frmData\" [formatter]=\"formatter\" (onTemplateTypeChange)=\"onTemplateTypeChange($event)\">\r\n    </bill-form-invoice>\r\n    <!-- Hàng hóa trên hóa đơn -->\r\n    <bill-product-grip [bill_products]=\"bill_products\" #child [dataSource]=\"dataSource\" [formDataInInvoice]=\"frmData\"\r\n      [formatter]=\"formatter\" [_objTemplateSelect]=\"_objTemplateSelect\" [isHdGTGT]=\"isHdGTGT\">\r\n    </bill-product-grip>\r\n    <div class=\"table-footer\">\r\n      <!-- Tổng tiền -->\r\n      <div class=\"table-footer-1\">\r\n        <div class=\"vat amount-table-footer\">\r\n          <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [value]=\"frmData.amount_after_vat\" step=\"0\"\r\n            [format]=\"formatter.tong_tien\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <!-- Tiền thuế -->\r\n      <div class=\"table-footer-2\" *ngIf=\"isHdGTGT\">\r\n        <div class=\"vat amount-vat-table-footer\">\r\n          <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [value]=\"frmData.amount_vat\" step=\"0\"\r\n            [format]=\"formatter.tien_thue\" [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n      <!-- Thành tiền -->\r\n      <div class=\"table-footer-3\">\r\n        <div class=\"vat amount-after-vat-table-footer\">\r\n          <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [value]=\"frmData.amount\" step=\"0\" [format]=\"formatter.thanh_tien\"\r\n            [disabled]=\"true\">\r\n          </dx-number-box>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top : 20px\">\r\n      <div class=\"col-md-5\">\r\n        <!-- Giảm trừ nghị quyết 43 -->\r\n        <!-- Tỷ lệ % doanh thu -->\r\n        <div class=\"col-md-12\" style=\"margin-top:5px\">\r\n          <div *ngIf=\"frmData.is_resolution_43\" style=\"display: inline-flex;margin-top:5px\">\r\n            <p style=\"margin-right: 5px;margin-top: 5px\">Tỷ lệ % trên doanh thu </p>\r\n\r\n            <div class=\"toggle normal\" style=\"display: flex; align-items: center; margin-top: -6px;\">\r\n              <img id=\"link14\" style=\"cursor: pointer;padding-left: 2px;padding-right: 7px\"\r\n                src=\"assets\\img\\icons\\Icon_Information.png\" (click)=\"guideSales()\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n            </div>\r\n            <dx-popover target=\"#link14\" position=\"top\" [width]=\"350\" [(visible)]=\"isDisplayGuideSale\">\r\n              <div *dxTemplate=\"let data of 'content'\">\r\n                <p>- 1% : Phân phối, cung cấp hàng hóa dịch vụ</p>\r\n                <p>- 5% : Dịch vụ xây dựng không bao thầu nguyên vật liệu</p>\r\n                <p>- 3% : Sản xuất, vận tải, dịch vụ có gắn với hàng hóa, xây dựng có bao thầu nguyên vật liệu</p>\r\n                <p>- 2% : Hoạt động kinh doanh khác</p>\r\n              </div>\r\n            </dx-popover>\r\n\r\n            <dx-number-box [width]=\"50\" [(value)]=\"frmData.sales_percentage\"\r\n              (onValueChanged)=\"onChangeSalePercen($event)\"></dx-number-box>\r\n            <p style=\"margin-left: 5px;margin-top: 5px\"> %</p>\r\n          </div>\r\n        </div>\r\n        <!-- Đã giảm 20% -->\r\n        <div class=\"col-md-12\" style=\"margin-top:5px\">\r\n          <div *ngIf=\"frmData.is_resolution_43\" style=\"display: inline-flex;margin-top:5px\">\r\n            <p style=\"margin-right: 5px;margin-top: 5px;width: 100px\">Đã giảm </p>\r\n            <dx-number-box [format]=\"formatter.tong_tien\" [(value)]=\"frmData.money_resolution_43\"\r\n              [readOnly]=\"!frmData.auto_value\"></dx-number-box>\r\n            <p style=\"margin-left: 5px\"> {{ _translate.THONG_TIN.tinh_thue_nq101}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <!-- Thành tiền -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount\" tabIndex=\"-1\"\r\n              [format]=\"formatter.thanh_tien\" [disabled]=\"!frmData.auto_value\" step=\"0\"\r\n              (onValueChanged)=\"onNumberChange()\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Tổng tiền thuế -->\r\n        <div class=\"dx-field\" *ngIf=\"isHdGTGT\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount_vat\" [format]=\"formatter.tien_thue\"\r\n              [disabled]=\"!frmData.auto_value\" tabIndex=\"-1\" step=\"0\" (onKeyDown)=\"keyDown($event)\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Cộng chiết khấu -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_amount_discount}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount_discount\" tabIndex=\"-1\" step=\"0\"\r\n              [format]=\"formatter.tien_chiet_khau\" (onValueChanged)=\"onNumberChange()\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <!-- Tổng tiền sau thuế -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_after_vat}}</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.amount_after_vat\"\r\n              [format]=\"formatter.tong_tien\" [disabled]=\"!frmData.auto_value\" tabIndex=\"-1\" step=\"0\"\r\n              (onKeyDown)=\"keyDown($event)\" (onValueChanged)=\"totalPaymentChange($event)\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Tiền mặt -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">Tiền mặt</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.cash\" [format]=\"formatter.tong_tien\"\r\n              tabIndex=\"-1\" step=\"0\" (onValueChanged)=\"cashChange($event)\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n        <!-- Trả lại khách -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\">Trả lại khách</div>\r\n          <div class=\"dx-field-value\">\r\n            <dx-number-box [readOnly]=\"ttDaXuatHoaDon\" [(value)]=\"frmData.returns\" [format]=\"formatter.tong_tien\"\r\n              tabIndex=\"-1\" step=\"0\">\r\n            </dx-number-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top : 15px\">\r\n      <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-8\">\r\n        <!-- Số tiền bằng chữ -->\r\n        <div class=\"dx-field\">\r\n          <div class=\"dx-field-label\" style=\"width: 27%;\">{{ _translate.CONTROLL.LABEL.total_payment_in_word}}</div>\r\n          <div class=\"dx-field-value\" style=\"width: 73%;\">\r\n            <dx-text-box [(value)]=\"frmData.total_payment_word\" [disabled]=\"!frmData.auto_value\"\r\n              [readOnly]=\"ttDaXuatHoaDon\"></dx-text-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row button-action\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n          <!-- Xem trước hóa đơn -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.preview_invoice}}\" type=\"default\" (click)=\"preview()\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"view()\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.view_invoice}}\" type=\"default\"></dx-button>\r\n          <!-- In chuyển đổi -->\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"inChuyenDoi()\"\r\n            [(icon)]=\"this._translate.ICONS.print\" [text]=\"inChuyenDoiText()\" type=\"default\"></dx-button>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n          <!-- Xuất hóa đơn -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" appScrollToInvalid\r\n            text=\"{{ _translate.CONTROLL.BUTTON.export_invoice}}\" [(icon)]=\"this._translate.ICONS.export_inv\"\r\n            type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\" (click)=\"eSubmit('XUAT')\">\r\n          </dx-button>\r\n          <!-- Xuất và in -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" appScrollToInvalid text=\"Xuất và in PTT\"\r\n            [(icon)]=\"this._translate.ICONS.export_inv\" type=\"default\" validationGroup=\"formData\"\r\n            [useSubmitBehavior]=\"true\" (click)=\"eSubmit('XUAT_IN')\">\r\n          </dx-button>\r\n          <!-- Ghi tạm -->\r\n          <dx-button disableDoubleClick appScrollToInvalid text=\"{{ _translate.CONTROLL.BUTTON.save_temporary}}\"\r\n            *ngIf=\"!ttDaXuatHoaDon\" [(icon)]=\"this._translate.ICONS.save\" type=\"default\" validationGroup=\"formData\"\r\n            [useSubmitBehavior]=\"true\" [disabled]=\"isDisable\" (click)=\"eSubmit('GHI_TAM')\">\r\n          </dx-button>\r\n          <!-- Tạo mới -->\r\n          <dx-button text=\"{{ _translate.CONTROLL.BUTTON.create_new}}\" [(icon)]=\"this._translate.ICONS.add_new\"\r\n            type=\"default\" (click)=\"handleAddNew()\"></dx-button>\r\n          <!-- Đóng -->\r\n          <dx-button type=\"default\" appBackButton [(icon)]=\"this._translate.ICONS.come_back\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"200\" [showTitle]=\"true\" title=\"IN PHIẾU TÍNH TIỀN\" [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopupIn\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div class=\"dx-field thue-suat-may-bay\">\r\n      <div class=\"dx-field-label\">Chọn mẫu: </div>\r\n      <div class=\"dx-field-value\">\r\n        <dx-select-box displayExpr=\"name\" valueExpr=\"id\" [items]=\"listTempPrint\" [value]=\"listTempPrint[0].id\"\r\n          (onValueChanged)=\"onPrintTempChanged($event)\">\r\n        </dx-select-box>\r\n      </div>\r\n    </div>\r\n    <div class=\"dx-field\">\r\n      Số lượng phiếu tính tiền : 1\r\n    </div>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"huy()\" text=\"Quay lại\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"print()\" text=\"In phiếu tính tiền\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/invoice/invoice.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/invoice/invoice.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container{padding-top:0px}.after-table{margin-top:10px}::ng-deep .vat.total-payment-in-word{margin-top:15px}::ng-deep .vat.total-payment-in-word input{color:#000000;font-weight:bold;text-align:right}.vat.total-payment-in-word .dx-field-label{width:12%}.vat.total-payment-in-word .dx-field-value{width:88% !important}::ng-deep .vat.money-pull-right input{text-align:right}::ng-deep .pr-0.money-pull-right input{text-align:right}::ng-deep .prt-1.money-pull-right input{text-align:right}.vat.money-pull-right .dx-field-label{width:45%}.vat.money-pull-right .dx-field-value{width:55% !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}.button-action{margin-top:18px}.table-footer{height:40px;background:#E3E3E3;padding-top:3px}.table-footer .table-footer-1{display:inline-block;width:109px;float:right}.table-footer .table-footer-2{display:inline-block;width:120px;margin-right:32px;float:right}.table-footer .table-footer-3{display:inline-block;width:150px;margin-right:90px;float:right}.table-footer .table-footer-4{display:inline-block;width:109px;margin-right:190px;float:right}.dx-field-value.dx-widget,.dx-field-value:not(.dx-widget)>.dx-widget{height:30px}::ng-deep .nd92Notify .modal-content{width:80%}::ng-deep .mauhoadon .modal-content{width:67%}::ng-deep .mauhoadon43 .modal-content{width:72%}::ng-deep .prv-s-invoice .modal-content{border:0px;border-radius:0px}::ng-deep .v-s-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/invoice/invoice.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/invoice/invoice.component.ts ***!
  \******************************************************************************/
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
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../form-invoice/form-invoice.component */ "./src/app/modules/bill-invoice/components/form-invoice/form-invoice.component.ts");
/* harmony import */ var _product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../product-grip/product-grip.component */ "./src/app/modules/bill-invoice/components/product-grip/product-grip.component.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.model */ "./src/app/modules/bill-invoice/shared/bill.model.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @shared/components/form-extend/form-extend.component */ "./src/app/shared/components/form-extend/form-extend.component.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
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
    function InvoiceComponent(route, router, modalService, billService, socketService, authService, cdRef, translate, customersService, confirmService, configsService, templateService, spinner, vatService, vPreviewInvService, customeModalService, invoiceService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.billService = billService;
        this.socketService = socketService;
        this.authService = authService;
        this.cdRef = cdRef;
        this.translate = translate;
        this.customersService = customersService;
        this.confirmService = confirmService;
        this.configsService = configsService;
        this.templateService = templateService;
        this.spinner = spinner;
        this.vatService = vatService;
        this.vPreviewInvService = vPreviewInvService;
        this.customeModalService = customeModalService;
        this.invoiceService = invoiceService;
        this.frmData = new _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_17__["BillModel"](1);
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
        this.formatNumber = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].numberInvoiceFormatDev;
        this.extentionGrid = {};
        this.fileData = [];
        this.tempKiFile = 0;
        this.confirmCheckPreview = false;
        this._isValid = false;
        this.isTuChoi = false;
        this.isPrint = false;
        this.invoicereleaseTempt = {};
        this.productCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_12__["pattern"].productCodePattern;
        this.isShowButtonWaiteSign = true;
        this.isTT78 = false;
        this.isPassNQ43 = false;
        this.isDisplayGuideSale = false;
        this.keyError = [];
        this.reportHeight = "1026px";
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
        this.showPopupIn = false;
        this.is_default_template = false;
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
            var tien_chu = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].tienBangChu(Math.abs(e.value), _this.getFormatterToNumber(_this.formatter.tong_tien), currency_code, _this.configs.system_parameter.display_read_money_english); //Helper.money(e.value, currency_code);
            _this.frmData.total_payment_word = _this.invoiceService.docTienAm(e.value, tien_chu, _this.configs, currency_code);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    InvoiceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this.frmData.status) != "" && this.frmData.status != _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.GhiTam) {
            this.disablleScreen();
            this.cdRef.detectChanges();
        }
        var dateFromNQ43 = moment__WEBPACK_IMPORTED_MODULE_2__("01/07/2023", 'DD/MM/YYYY').format('YYYY-MM-DD');
        var invoiceDateNQ43 = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
        if (this.isPassNQ43)
            invoiceDateNQ43 = moment__WEBPACK_IMPORTED_MODULE_2__("01/07/2023", 'DD/MM/YYYY').format('YYYY-MM-DD');
        /* Nghị quyết số 43/2022/QH15 */
        if (!this.isHdGTGT && invoiceDateNQ43 >= dateFromNQ43) {
            if (this.configs.system_parameter.is_tb_nq43_mtt === undefined) {
                var initialState = {
                    typeNotify: "DOI_TUONG_GIAM_THUE_NQ43",
                };
                this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_13__["NotifyReduceTaxComponent"], {
                    backdrop: 'static',
                    keyboard: false,
                    class: 'nd92Notify modal-lg',
                    initialState: initialState
                });
                var subModal_1 = this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem == "DONG_Y") {
                        _this.configs.system_parameter.is_tb_nq43_mtt = true;
                    }
                    else {
                        _this.configs.system_parameter.is_tb_nq43_mtt = false;
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
                            if (_this.configs.system_parameter.is_tb_nq43_mtt) {
                                var initialState_1 = {
                                    typeNotify: "DOI_TUONG_GIAM_THUE_NQ43",
                                };
                                _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_13__["NotifyReduceTaxComponent"], {
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
                if (this.configs.system_parameter.is_tb_nq43_mtt && !this.frmData.id) {
                    var initialState = {
                        typeNotify: "DOI_TUONG_GIAM_THUE_NQ43",
                    };
                    this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_13__["NotifyReduceTaxComponent"], {
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
        if (this.frmData.amount_after_vat) {
            var currency_code = this.frmData.currency_code;
            var tien_chu = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].tienBangChu(Math.abs(this.frmData.amount_after_vat), this.getFormatterToNumber(this.formatter.tong_tien), currency_code, this.configs.system_parameter.display_read_money_english); //Helper.money(e.value, currency_code);
            this.frmData.total_payment_word = this.invoiceService.docTienAm(this.frmData.amount_after_vat, tien_chu, this.configs, currency_code);
        }
    };
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configs = this.authService.getConfigs();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        // kết nối websocket
        this.loaiHoaDon = this.route.snapshot.data.type;
        this.connectWebsocket();
        this.billService.getTemp(this.route.snapshot.data.type).subscribe(function (res) {
            _this.listTempPrint = res.data.templates.map(function (temp) {
                return __assign({}, temp, { name: temp.template_code + temp.invoice_series });
            });
            if (res.data.templates && res.data.templates.length > 0) {
                _this.templatePrinId = res.data.templates[0].id;
                _this.getTemplate(res.data.templates[0].id);
            }
        });
        this.routeSub = this.route.data.subscribe(function (data) {
            var danh_muc = _this.authService.getDMLocal();
            _this.configs = _this.authService.getConfigs();
            _this.infoDangKy = _this.authService.getInfoRegister();
            _this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterColumnInv(_this.configs.decimal_places_json);
            // this.frmData.decimal_places_json = JSON.stringify(this.configs.display_currency);
            _this.formatter.display_int = _this.configs.system_parameter.display_int;
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.select_provisions_on_accounts = danh_muc.DM_DINH_KHOAN ? danh_muc.DM_DINH_KHOAN.data : null;
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            var isEdit = false;
            var invoice;
            var loaiHoaDon = data.type;
            _this.infoDangKy = _this.authService.getInfoRegister();
            if (_this.infoDangKy.status == "CHAP_NHAN") {
                _this.isTT78 = true;
            }
            if (loaiHoaDon === _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.GTKT01) {
                _this.isHdGTGT = true;
            }
            else {
                _this.isHdGTGT = false;
            }
            var temptTT78 = [];
            if (data.init[2] == true) {
                isEdit = true;
                temptTT78 = data.init[3];
                invoice = data.init[1];
            }
            else {
                temptTT78 = data.init[1];
            }
            if (temptTT78 && temptTT78.length > 0) {
                _this.select.templatesTT78 = temptTT78;
            }
            if (isEdit || _this.billService.isCopy) {
                if (_this.billService.isCopy) {
                    _this.khoiTaoKhiSua(_this.billService.data);
                }
                else {
                    _this.khoiTaoKhiSua(invoice);
                }
            }
            else {
                if (data.init[1][0]) {
                    _this.template_id = data.init[1][0].value;
                    _this.listTemplate = data.init[1];
                    _this.invoicereleaseTempt = data.init[1][0].value;
                }
                _this.khoiTaoKhiThemMoi();
            }
        });
    };
    InvoiceComponent.prototype.getTemplate = function (data) {
        var _this = this;
        this.templateService.show(data).toPromise().then(function (rs) {
            if (rs.status == "success") {
                _this.template = rs.data.template;
            }
            else {
                return null;
            }
        });
    };
    InvoiceComponent.prototype.ngOnDestroy = function () {
    };
    // shd: số hđ
    // mtc: mã tra cứu
    InvoiceComponent.prototype.generateQRCode = function (shd, mtc) {
        var _this = this;
        var qrcodeData = 'https://ihoadon.vn/kiem-tra/?shd=' + shd + '&mtc=' + mtc + '&lang=vn'; // Chuỗi dữ liệu để tạo QR code
        var qrcodeOptions = {
            width: 100,
            height: 100
        }; // Kích thước của QR code
        qrcode__WEBPACK_IMPORTED_MODULE_20___default.a.toDataURL(qrcodeData, qrcodeOptions, function (err, url) {
            if (err)
                throw err;
            _this.qrcode = url;
        });
    };
    InvoiceComponent.prototype.khoiTaoKhiThemMoi = function () {
        // Khởi tạo thông tin hàng hóa
        // this.frmData.template_id = this.template_id;
        // this.frmData.bill_series = this.listTemplate.filter(item => item.value = this.template_id)[0].bill_series;
        // this.frmData.template_code = this.listTemplate.filter(item => item.value = this.template_id)[0].template_code;
        this.bill_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6___default.a({
            key: 'id',
            data: this.frmData.bill_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7___default.a({
            store: this.bill_products
        });
        if (this.select.templatesTT78.length) {
            this.frmData.template_id = this.select.templatesTT78[0].value;
            this.frmData.bill_series = this.select.templatesTT78[0].bill_series;
            this.frmData.template_code = this.select.templatesTT78[0].template_code;
            for (var key in this.select.templatesTT78[0]) {
                if (this.select.templatesTT78[0].hasOwnProperty(key)) {
                    this._objTemplateSelect[key] = this.select.templatesTT78[0][key];
                }
            }
            this.is_multi_vat = this.select.templatesTT78[0].is_multi_vat;
            this.invoiceTemplateTT78 = this.select.templatesTT78[0];
        }
    };
    InvoiceComponent.prototype.khoiTaoKhiSua = function (data) {
        var _this = this;
        // Khởi tạo thông tin hàng hóa
        this.is_default_template = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._attemptConvertBool(data.is_default_template);
        var _lst = this.frmData.setInvoice_products_data(data.bill_products);
        this.invoicereleaseTempt = data.template_id;
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
        this.bill_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6___default.a({
            key: 'id',
            data: _lst
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7___default.a({
            store: this.bill_products
        });
        // khởi tạo dữ liệu form
        this.frmData.fillFormData(data);
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
        this.pkInvoiceSelectWaitSign = this.frmData.id;
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
                        _this._objTemplateSelect[key] = item[key];
                    }
                }
                return true;
            }
        });
    };
    InvoiceComponent.prototype.eSubmit = function (type) {
        var _this = this;
        this.hinhThucXuat = type;
        setTimeout(function () {
            _this.handleFormData();
            if (type == 'XUAT' || type == 'XUAT_IN') {
                _this._isValid = _this._validForm();
                if (!_this._isValid) {
                    return;
                }
            }
            if (_this.windowPreviewBeforeSubmit) {
                _this.windowPreviewBeforeSubmit.focus();
                return;
            }
            if (type === 'XUAT' || type == 'XUAT_IN') {
                if (_this.isTT78) {
                    if (_this.confirmCheckPreview) {
                        _this.xuatHoaDon(type);
                        _this.confirmCheckPreview = false;
                    }
                    else {
                        _this.previewBeforeExport(type);
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Tờ khai đăng ký chưa được chấp nhận", 'error');
                }
            }
            else {
                _this.ghiTam();
            }
        }, 300);
    };
    InvoiceComponent.prototype.previewBeforeExport = function (type) {
        var _this = this;
        this.handleFormData();
        var trang_thai = this._translate.THONG_TIN.xuat_hoa_don;
        var du_lieu = this.billService.taodulieuXemTruocMau(this.frmData);
        du_lieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadon;
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
            if (_this.bsModalRef.content.successSaveItem == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].actionHander.DongY) {
                _this.confirmCheckPreview = true;
                _this.eSubmit(type);
            }
            subModal.unsubscribe();
        });
    };
    InvoiceComponent.prototype._validForm = function () {
        var _this = this;
        var _isValid = true;
        var _lst = this.frmData.bill_products;
        if (!this.frmData.amount_after_vat && this.frmData.amount_after_vat !== 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Tổng tiền hóa đơn không được để trống", 'error');
            return false;
        }
        if (!this.vatService.checkVatMauHoaDon(_lst, this.is_multi_vat)) {
            return false;
        }
        /* Hóa đơn bán hàng NQ43 */
        if (this.frmData.is_resolution_43) {
            if (!this.frmData.sales_percentage) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Tỷ lệ % trên doanh thu không được để trống", 'error');
                return false;
            }
            else if (this.frmData.sales_percentage != 1 && this.frmData.sales_percentage != 2
                && this.frmData.sales_percentage != 3 && this.frmData.sales_percentage != 5) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Tỷ lệ % trên doanh thu chỉ bao gồm các giá trị: 1, 2, 3, 5", 'error');
                return false;
            }
        }
        this.bill_products.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(item.product_name) != "" && !item.is_promotion && !item.is_promotion_new && !item.commercial_discount && _isValid) {
                }
                else if (item.is_promotion || item.is_promotion_new || item.commercial_discount) {
                    if ((item.product_name == null || item.product_name == '') && _isValid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Tên hàng hóa" + " " + _this._translate.VALIDATION.required, 'error');
                        _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'product_name'));
                        _isValid = false;
                        return false;
                    }
                }
                if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(item.product_name) != "" && !item.is_explain) {
                    if (_this.isHdGTGT) {
                        if (item.vat == null && _isValid) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Thuế suất" + " " + _this._translate.VALIDATION.required, 'error');
                            _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'vat'));
                            _isValid = false;
                            return false;
                        }
                        if (item.vat != "-1" && item.vat != "-2" && item.amount_vat == null && _isValid) {
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
        if (_lst.length === 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_product, 'error', 5000);
            this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
            return false;
        }
        return _isValid;
    };
    InvoiceComponent.prototype.xuatHoaDon = function (type) {
        var _this = this;
        this.info_message = null;
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
            var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
            this.socketService.kiSo(function () { return _this.connectWebsocket(type); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
        }
    };
    InvoiceComponent.prototype.ghiTam = function () {
        var _this = this;
        if (!this.frmData.id) {
            this.billService.addNew(this.frmData, false).subscribe(function (res) {
                if (res.status === 'success') {
                    _this.frmData.id = res.data.id;
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Ghi tạm hóa đơn thành công', 'success');
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(res.message, 'error');
                }
            });
        }
        else {
            this.billService.edit(this.frmData.id, this.frmData, false).subscribe(function (res) {
                if (res.status === 'success') {
                    _this.frmData.id = res.data.id;
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Ghi tạm hóa đơn thành công', 'success');
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(res.message, 'error');
                }
            });
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
        this.iframe = document.getElementById('preview-iframe-bill-e');
        this.iframe.contentDocument.open("text/html", "replace");
        this.iframe.contentDocument.write(htmlBefore);
        this.iframe.contentDocument.close();
        this.generateQRCode(this.frmData.bill_number, this.verify_code);
        _index++;
        //////// Thêm ảnh khung
        $("#preview-iframe-bill-e").contents().find(".bg-template-default").css('background-image', 'url(data:image/' + "jpg" + ';base64,' + watermark_image_default + ')').css('display', 'block');
        $("#preview-iframe-bill-e").contents().find(".qrcode").css('background-image', 'url(' + "" + '' + this.qrcode + ')').css('display', 'block');
        //////// Thêm ảnh  nền
        $("#preview-iframe-bill-e").contents().find(".bg-template-parent").css('display', 'block');
        $("#preview-iframe-bill-e").contents().find(".bg-template-parent").find(".bg-template").css('background-image', 'url(data:image/' + "jpg" + ';base64,' + watermark_image + ')').css('display', 'block');
        //////// Footer
        $("#preview-iframe-bill-e").contents().find(".report-footer").css({ display: 'block' });
        /////Fill dữ liệu vào hóa đơn
        // Ngày hóa đơn
        var a = moment__WEBPACK_IMPORTED_MODULE_2__();
        var invDate;
        if (this.frmData.bill_date)
            invDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.frmData.bill_date);
        else
            invDate = moment__WEBPACK_IMPORTED_MODULE_2__();
        var yearInv = invDate.year();
        var monthInv = invDate.month() < 12 ? invDate.month() + 1 : 1;
        var dayInv = invDate.date();
        if ($("#preview-iframe-bill-e").contents().find(".NgayHD")[0])
            $('#preview-iframe-bill-e').contents().find(".NgayHD").html(dayInv);
        if ($("#preview-iframe-bill-e").contents().find(".ThangHD")[0])
            $('#preview-iframe-bill-e').contents().find(".ThangHD").html(monthInv);
        if ($("#preview-iframe-bill-e").contents().find(".NamHD")[0])
            $('#preview-iframe-bill-e').contents().find(".NamHD").html(yearInv);
        /// Ẩn thông tin chữ ký số
        if (isPreview) {
            if ($("#preview-iframe-bill-e").contents().find(".efy-esign-none")[0])
                $('#preview-iframe-bill-e').contents().find(".efy-esign-none").css('display', 'none');
            if ($("#preview-iframe-bill-e").contents().find(".lblSignValid")[0])
                $('#preview-iframe-bill-e').contents().find(".lblSignValid").css('display', 'none');
            if ($("#preview-iframe-bill-e").contents().find(".lblKyBoi")[0])
                $('#preview-iframe-bill-e').contents().find(".lblKyBoi").css('display', 'none');
            if ($("#preview-iframe-bill-e").contents().find(".lblKyNgay")[0])
                $('#preview-iframe-bill-e').contents().find(".lblKyNgay").css('display', 'none');
            if ($("#preview-iframe-bill-e").contents().find(".seler-sign-date")[0])
                $('#preview-iframe-bill-e').contents().find(".seler-sign-date").css('display', 'none');
            if ($("#preview-iframe-bill-e").contents().find(".seler-sign-name")[0])
                $('#preview-iframe-bill-e').contents().find(".seler-sign-name").css('display', 'none');
        }
        else {
            if (this.configs.system_parameter.display_time_sign_invoice) {
                var singDate = invDate.format('DD/MM/YYYY HH:mm:ss');
                // if (item.invoice_sign_date)
                //   singDate = moment(item.invoice_sign_date).format('DD/MM/YYYY HH:mm:ss');
                if ($("#preview-iframe-bill-e").contents().find(".seler-sign-date")[0])
                    $('#preview-iframe-bill-e').contents().find(".seler-sign-date").html(singDate);
                // if ($("#preview-iframe-bill-e").contents().find(".seler-sign-name")[0])
                //   $('#preview-iframe-bill-e').contents().find(".seler-sign-name").html(this.currentUser.account.name);
            }
            else {
                var singDate = invDate.format('DD/MM/YYYY');
                // if (item.invoice_sign_date)
                //   singDate = moment(item.invoice_sign_date).format('DD/MM/YYYY');
                if ($("#preview-iframe-bill-e").contents().find(".seler-sign-date")[0])
                    $('#preview-iframe-bill-e').contents().find(".seler-sign-date").html(singDate);
                // if ($("#preview-iframe-bill-e").contents().find(".seler-sign-name")[0])
                //   $('#preview-iframe-bill-e').contents().find(".seler-sign-name").html(this.currentUser.account.name);
            }
        }
        ////////Thông tin mẫu số, ký hiệu ,số hóa đơn
        if ($("#preview-iframe-bill-e").contents().find(".number-form")[0])
            $('#preview-iframe-bill-e').contents().find(".number-form").html(this.template.template_code);
        if ($("#preview-iframe-bill-e").contents().find(".symbol")[0])
            $('#preview-iframe-bill-e').contents().find(".symbol").html(this.template.invoice_series);
        if ($('#preview-iframe-bill-e').contents().find(".symbol-number-form")[0])
            $('#preview-iframe-bill-e').contents().find(".symbol-number-form").html(this.template.template_code + this.template.invoice_series.toUpperCase());
        if ($("#preview-iframe-bill-e").contents().find(".invoice-number")[0] && this.frmData.bill_number)
            $('#preview-iframe-bill-e').contents().find(".invoice-number").html(this.frmData.bill_number);
        else
            $('#preview-iframe-bill-e').contents().find(".invoice-number").html("");
        if ($("#preview-iframe-bill-e").contents().find(".invoice-date")[0] && this.frmData.bill_date)
            $('#preview-iframe-bill-e').contents().find(".invoice-date").html(moment__WEBPACK_IMPORTED_MODULE_2__(this.frmData.bill_date).format('DD/MM/YYYY'));
        else
            $('#preview-iframe-bill-e').contents().find(".invoice-date").html("");
        /* Mã cơ quan thuế */
        if (this.template.is_decree_new) {
            if (this.template.is_invoice_with_code) {
                $('#preview-iframe-bill-e').contents().find(".tax_authority_code").css('display', 'block');
            }
            else
                $('#preview-iframe-bill-e').contents().find(".tax_authority_code").css('display', 'none');
        }
        /////////Tên học sinh
        if ($("#preview-iframe-bill-e").contents().find(".value-9c103984-576d-c322-7843-bdacf97bd888")[0])
            $('#preview-iframe-bill-e').contents().find(".value-9c103984-576d-c322-7843-bdacf97bd888").html(this.frmData.buyer_tax_code);
        ///// mã số thuế bên mua
        ///cccd
        if ($("#preview-iframe-bill-e").contents().find(".value-86679804-89b9-42e3-b173-9059da407f64")[0])
            $('#preview-iframe-bill-e').contents().find(".value-86679804-89b9-42e3-b173-9059da407f64").html(this.frmData.id_card);
        // tên người mua
        if ($("#preview-iframe-bill-e").contents().find(".value-9c103984-576d-c322-7843-bdacf97ac189")[0]) {
            var name_1 = '';
            if (this.frmData.customer_name) {
                name_1 = this.frmData.customer_name;
            }
            else {
                name_1 = this.frmData.buyer_name;
            }
            $('#preview-iframe-bill-e').contents().find(".value-9c103984-576d-c322-7843-bdacf97ac189").html(name_1);
        }
        if ($("#preview-iframe-bill-e").contents().find(".value-8d903984-576d-c322-7843-bdacf97ac100")[0])
            $('#preview-iframe-bill-e').contents().find(".value-8d903984-576d-c322-7843-bdacf97ac100").html(this.frmData.buyer_tax_code);
        //////// Địa chỉ bên mua
        if ($("#preview-iframe-bill-e").contents().find(".value-7c103984-576d-c322-7843-bdacf97ac189")[0])
            $('#preview-iframe-bill-e').contents().find(".value-7c103984-576d-c322-7843-bdacf97ac189").html(this.frmData.buyer_address);
        /////// Hình thức thanh toán
        if ($("#preview-iframe-bill-e").contents().find(".value-3a9f145a-549a-01ea-e507-cc7b0ab28a69")[0])
            $('#preview-iframe-bill-e').contents().find(".value-3a9f145a-549a-01ea-e507-cc7b0ab28a69").html(this.frmData.buyer_tax_code);
        ////// Tài khoản bên mua
        if ($("#preview-iframe-bill-e").contents().find(".value-d0f2a367-8ca8-006a-eb0c-cf3261f00a1c")[0])
            $('#preview-iframe-bill-e').contents().find(".value-d0f2a367-8ca8-006a-eb0c-cf3261f00a1c").html(this.frmData.buyer_tax_code);
        /////// Ghi chú trên hóa đơn
        if ($("#preview-iframe-bill-e").contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00a1c")[0])
            $('#preview-iframe-bill-e').contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00a1c").html(this.frmData.note);
        /////// Tên đơn vị 
        if ($("#preview-iframe-bill-e").contents().find(".value-8c103984-576d-c322-7843-bdacf97ac189")[0])
            $('#preview-iframe-bill-e').contents().find(".value-8c103984-576d-c322-7843-bdacf97ac189").html(this.frmData.buyer_tax_code);
        ////// Lớp
        if ($("#preview-iframe-bill-e").contents().find(".value-7d873098-576d-c322-7843-bdacf97ac100")[0])
            $('#preview-iframe-bill-e').contents().find(".value-7d873098-576d-c322-7843-bdacf97ac100").html(this.frmData.buyer_tax_code);
        /// Mã tra cứu
        if ($("#preview-iframe-bill-e").contents().find(".matracuu")[0])
            $('#preview-iframe-bill-e').contents().find(".matracuu").html(this.frmData.buyer_tax_code);
        /* Loại tiền */
        if ($("#preview-iframe-bill-e").contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00999")[0])
            $('#preview-iframe-bill-e').contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00999").html(this.frmData.currency_code);
        $('#preview-iframe-bill-e').contents().find('.detail').css({ display: 'block' });
        ////////Fill thông tin hàng hóa
        if ($("#preview-iframe-bill-e").contents().find(".value-8l873098-576d-c322-7843-bdacf97ac100")[0])
            $('#preview-iframe-bill-e').contents().find(".value-8l873098-576d-c322-7843-bdacf97ac100").html(this.frmData.bill_products[0].product_name);
        var format;
        var displayInt = this.formatter.display_int ? this.formatter.display_int : (this.configs.display_int ? this.configs.display_int : false);
        format = this.configs.decpoint_is_dot ? { decimal: ".", thousands: ",", display_int: displayInt } : { decimal: ",", thousands: ".", display_int: displayInt };
        var decimal_quatity = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.so_luong);
        // let decimal_number_real_export = VChanggeMoneyService.getFormatterToNumber(formatter.so_luong);
        // let decimal_number_real_import = VChanggeMoneyService.getFormatterToNumber(formatter.so_luong);
        var decimal_price = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.don_gia);
        var decimal_price_nte = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.don_gia_nte);
        var decimal_amount = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.thanh_tien);
        var decimal_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tien_thue);
        var decimal_vat = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.vat);
        var decimal_amount_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien);
        if (_index == 1) {
            this.trRow = "";
            this.frmData.bill_products.forEach(function (product) {
                _this.trRow += '<tr class="detail-data font-color-data text-left">';
                _this.trRow += '<td style="height: "' + heightRow + '" colspan="3" align="left"><span class="valueTenHangHoa">' + product.product_name + '</span></td>';
                _this.trRow += '</tr>';
                _this.trRow += '<tr class="detail-data font-color-data text-left">';
                var ths = $("#preview-iframe-bill-e").contents().find("#tbDetail").find("th");
                for (var j = 0; j < ths.length; j++) {
                    var className = ths[j].className;
                    switch (className) {
                        case "columnSTT":
                            if ($("#preview-iframe-bill-e").contents().find(".columnSTT")[0])
                                _this.trRow += '<td style="height: "' + heightRow + '" class="center"><span class="valueSTT">' + product.order + '</span></td>';
                            break;
                        case "name-1a783984-576d-c322-7843-bdacf97ac189":
                            _this.trRow += '<td style="height: "' + heightRow + '" class="center name-1a783984-576d-c322-7843-bdacf97ac189 columnMaHangHoa"><span class="valueMaHangHoa">' + product.product_code + '</span></td>';
                            break;
                        case "columnTenHangHoa":
                            _this.trRow += '<td style="height: "' + heightRow + '"><span class="valueTenHangHoa">' + product.product_name + '</span></td>';
                            break;
                        case "columnSoLuong":
                            var quantity = product.quantity ? _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(product.quantity, decimal_quatity, format) : "";
                            if (product.unit_code) {
                                var unit_name = _this.select.unit_codes.find(function (item) { return item.code === product.unit_code; }).name;
                                quantity += " " + unit_name;
                            }
                            _this.trRow += '<td style="height: "' + heightRow + '" class="number-center"><span class="valueSoLuong" style="word-wrap: normal; width:100%">' + quantity + '</span></td>';
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
                        case "columnThanhTien":
                            var amount = product.amount ? _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(product.amount, decimal_amount, format) : "";
                            _this.trRow += '<td style="height: "' + heightRow + '" class="number"><span class="valueThanhTien">' + amount + '</span></td>';
                            break;
                        case "columnThanhTienSauThue":
                            var amount_after_vat = product.amount_after_vat ? product.amount_after_vat : "";
                            _this.trRow += '<td style="height: "' + heightRow + '" class="number"><span class="valueThanhTienSauThue">' + amount_after_vat + '</span></td>';
                            break;
                    }
                }
                _this.trRow += '</tr>';
            });
        }
        $("#preview-iframe-bill-e").contents().find(".tbody-content-detail").append($(this.trRow));
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_HH_DV_GTGT_KHONG_THUE")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_HH_DV_GTGT_KHONG_THUE").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_HH_DV_GTGT0")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_HH_DV_GTGT0").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_HH_DV_GTGT5")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_HH_DV_GTGT5").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_HH_DV_GTGT10")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_HH_DV_GTGT10").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TONG_TIEN_HH_DV_GTGT")[0])
            $('#preview-iframe-bill-e').contents().find(".TONG_TIEN_HH_DV_GTGT").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_THUE_GTGT")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_THUE_GTGT").html(this.template.symbol_no_vat);
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_THUE_GTGT0")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_THUE_GTGT0").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_THUE_GTGT5")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_THUE_GTGT5").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_THUE_GTGT10")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_THUE_GTGT10").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TONG_TIEN_THUE_GTGT")[0])
            $('#preview-iframe-bill-e').contents().find(".TONG_TIEN_THUE_GTGT").html(this.frmData.total_amount_vat);
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_THANH_TOAN_KHONG_THUE")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_THANH_TOAN_KHONG_THUE").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_THANH_TOAN_GTGT0")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_THANH_TOAN_GTGT0").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_THANH_TOAN_GTGT5")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_THANH_TOAN_GTGT5").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TIEN_THANH_TOAN_GTGT10")[0])
            $('#preview-iframe-bill-e').contents().find(".TIEN_THANH_TOAN_GTGT10").html(this.frmData.amount);
        if ($("#preview-iframe-bill-e").contents().find(".TONG_TIEN_THANH_TOAN")[0])
            $('#preview-iframe-bill-e').contents().find(".TONG_TIEN_THANH_TOAN").html(this.frmData.amount_after_vat);
        if ($("#preview-iframe-bill-e").contents().find(".total-amount-product-without-vat")[0])
            $('#preview-iframe-bill-e').contents().find(".total-amount-product-without-vat").html(_core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(this.frmData.amount, decimal_amount, format));
        if (this.frmData.bill_products[0].vat && this.frmData.bill_products[0].vat != -1) {
            if ($("#preview-iframe-bill-e").contents().find(".vat-percentage")[0])
                $('#preview-iframe-bill-e').contents().find(".vat-percentage").html(this.frmData.bill_products[0].vat + " %");
        }
        else if ($("#preview-iframe-bill-e").contents().find(".vat-percentage")[0])
            $('#preview-iframe-bill-e').contents().find(".vat-percentage").html(this.template.symbol_no_vat);
        if ($("#preview-iframe-bill-e").contents().find(".total-amount-vat")[0])
            $('#preview-iframe-bill-e').contents().find(".total-amount-vat").html(_core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(this.frmData.amount_vat, decimal_amount_vat, format));
        if ($("#preview-iframe-bill-e").contents().find(".total-payment")[0])
            $('#preview-iframe-bill-e').contents().find(".total-payment").html(_core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(this.frmData.total_payment, decimal_amount_after_vat, format));
        if ($("#preview-iframe-bill-e").contents().find(".value-1h883984-576d-c322-7843-bdacf97ac189")[0])
            $('#preview-iframe-bill-e').contents().find(".value-1h883984-576d-c322-7843-bdacf97ac189").html(this.frmData.total_payment_word);
        if ($("#preview-iframe-bill-e").contents().find(".tien-khach-tra")[0])
            $('#preview-iframe-bill-e').contents().find(".tien-khach-tra").html(_core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(this.frmData.cash, decimal_amount_vat, format));
        if ($("#preview-iframe-bill-e").contents().find(".tien-tra-lai-khach")[0])
            $('#preview-iframe-bill-e').contents().find(".tien-tra-lai-khach").html(_core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].formatMoney(this.frmData.returns, decimal_amount_vat, format));
        if ($("#preview-iframe-bill-e").contents().find(".total-payment-word")[0])
            $('#preview-iframe-bill-e').contents().find(".total-payment-word").html(this.frmData.total_amount_vat);
        ///The End
        var htmlAfter = "<html xmlns:inv=\"http://laphoadon.gdt.gov.vn/2014/09/invoicexml/v1\" xmlns:user=\"http://mycompany.com/mynamespace\"\n          xmlns:sign=\"http://www.w3.org/2000/09/xmldsig#\">" + this.iframe.contentDocument.documentElement.innerHTML + "</html></br></br></br>";
        arrayHtml += htmlAfter;
        this.arrHtml = arrayHtml;
    };
    InvoiceComponent.prototype.createRowData = function (countRow) {
        for (var i = 0; i < countRow; i++) {
            this.trRow += '<tr class="detail-data font-color-data text-left">';
            var ths = $("#preview-iframe-bill-e").contents().find("#tbDetail").find("th");
            var _loop_1 = function () {
                var className = ths[j].className;
                var column = this_1.arrColumns.filter(function (p) { return p.name == className; })[0];
                if (column) {
                    var valueColumn = column.value;
                    var height = column.height;
                    if (this_1.template.paper_size == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].paperSizes.A5Ngang)
                        height = "18px";
                    if (i > 0)
                        valueColumn = '';
                    if ($("#preview-iframe-bill-e").contents().find("." + column.name)[0])
                        this_1.trRow += '<td style="height: ' + height + ';"' + ' class="' + column.class + '"><span class="' + valueColumn + '"></span></td>';
                }
            };
            var this_1 = this;
            for (var j = 0; j < ths.length; j++) {
                _loop_1();
            }
            this.trRow += '</tr>';
        }
    };
    InvoiceComponent.prototype.preview = function () {
        var _this = this;
        setTimeout(function () {
            _this.handleFormData();
            if (!_this._validForm()) {
                return;
            }
            var data = _this.billService.taodulieuXemTruocMau(_this.frmData);
            data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadon;
            _this.vPreviewInvService.xemMau(data);
        }, 300);
    };
    InvoiceComponent.prototype.inhoadon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var html, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.listTempPrint.length > 0)) return [3 /*break*/, 8];
                        if (!(this.listTempPrint.length > 1)) return [3 /*break*/, 5];
                        if (!this.isPrint) return [3 /*break*/, 3];
                        this.getTemplate(this.templatePrinId);
                        if (!(this.template && this.template.number_of_row > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handleFormData()];
                    case 1:
                        _a.sent();
                        if (!this._validForm()) {
                            return [2 /*return*/];
                        }
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        this.createFormTypeBase64(true);
                        html = js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].encode(this.arrHtml);
                        this.socketService.inFileHtml(function () { return _this.connectWebsocket(); }, html);
                        setTimeout(function () {
                            _this.isPrint = false;
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                        }, 300);
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        this.showPopupIn = true;
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        if (!(this.template && this.template.number_of_row > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.handleFormData()];
                    case 6:
                        _a.sent();
                        if (!this._validForm()) {
                            return [2 /*return*/];
                        }
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        this.createFormTypeBase64(true);
                        html = js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].encode(this.arrHtml);
                        this.socketService.inFileHtml(function () { return _this.connectWebsocket(); }, html);
                        setTimeout(function () {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                        }, 300);
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Chưa có mẫu phiếu tính tiền', 'error');
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    InvoiceComponent.prototype.handleFormData = function () {
        var _this = this;
        if (this.frmData.bill_options) {
            this.frmData.bill_options.forEach(function (item) {
                delete item['is_show'];
                delete item['type'];
                delete item['width'];
                delete item['statusData'];
            });
        }
        this.frmData.total_payment = this.frmData.amount_after_vat;
        this.frmData.currency_code = 'VND';
        this.frmData.currency_rate = 1;
        // this.frmData.buyer_address = null;
        if (!this.frmData.auto_value) {
            delete this.frmData.tax_information;
        }
        if (this.loaiHoaDon == '02GTTT') {
            delete this.frmData.tax_information;
        }
        this.deleteProperties();
        this.tempKiFile = 0;
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
                    if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(_this.pkInvoiceCurrent) != "")
                        item.id = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].makeid();
                    bill_products.push(item);
                }
            });
            _this.frmData.bill_products = bill_products;
            _this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
        });
    };
    InvoiceComponent.prototype.onNumberChange = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_4__["VChanggeMoneyService"]._calTotalMoney(this.frmData, this.formatter, !this.frmData.auto_value);
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
    InvoiceComponent.prototype.keyDown = function (e) {
        if (e.event.key === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    InvoiceComponent.prototype.cashChange = function (e) {
        if (e.value) {
            this.frmData.returns = this.frmData.cash - this.frmData.amount_after_vat;
        }
    };
    InvoiceComponent.prototype.deleteProperties = function () {
        var frmDataBill = new _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_17__["BillModel"](1);
        var keyOfBill = Object.keys(frmDataBill);
        var keyOfFrm = Object.keys(this.frmData);
        var formData = this.frmData;
        for (var i = 0; i <= keyOfFrm.length; i++) {
            var error = keyOfBill.includes(keyOfFrm[i]);
            if (!error) {
                delete this.frmData[keyOfFrm[i]];
            }
        }
        delete this.frmData.total_amount_vat;
    };
    InvoiceComponent.prototype.onTemplateTypeChange = function (e) {
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
    InvoiceComponent.prototype.disablleScreen = function () {
        this.formInvoice.readonlyAllForm();
        this.productGrip.ttDaXuatHoaDon = true;
        this.ttDaXuatHoaDon = true;
    };
    InvoiceComponent.prototype.view = function () {
        var ids = [];
        ids.push(this.frmData.id);
        if (this.is_default_template) {
            var initialState = {
                items: ids,
                isXuatHD: false,
                hinhthucxuat: '',
                typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.xem_hoa_don_mtt_html
            };
            this.vPreviewInvService.xemMauPhanTrang(initialState);
        }
        else {
            if (this.configs.system_parameter.view_multi_invoice) {
                var data = this.billService.taodulieuXemMau(ids);
                data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadon;
                this.vPreviewInvService.xemMau(data);
            }
            else {
                var initialState = {
                    items: ids,
                    isXuatHD: false,
                    hinhthucxuat: '',
                    typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.xem_hoa_don_mtt,
                    cssClass: 'modal-xl view-bill'
                };
                this.vPreviewInvService.xemMauPhanTrang(initialState);
            }
        }
    };
    /* Kết nối đến socket */
    InvoiceComponent.prototype.connectWebsocket = function (type) {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                if (data.Data.Name === 'hoadon.xml') {
                    _this.sendInvoice(data.Data.Content);
                }
                else if (data.Data.Name === 'thongdiep.xml') {
                    _this.goiApiXuatHoaDon(data.Data.Content);
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    _this.xuLiApiKhiXuat();
                }
            }
        });
    };
    InvoiceComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
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
    InvoiceComponent.prototype.kyThongDiep = function (xmlInvoice, signDate) {
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
    InvoiceComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var xmlInvoice = "";
        if (!this.frmData.id) {
            var sub_1 = this.billService.addNew(this.frmData, true).subscribe(function (res) {
                if (res.status === 'success') {
                    _this.frmData.bill_number = res.data.bill_number;
                    _this.frmData.bill_date = moment__WEBPACK_IMPORTED_MODULE_2__(res.data.bill_date).format('YYYY-MM-DD HH:mm:ss'); // moment(rs.data.invoice_date).format('DD/MM/YYYY');
                    var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(res.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.verify_code = res.data.verify_code;
                    _this.frmData.id = res.data.id;
                    xmlInvoice = res.data.xml_string;
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                        _this.disablleScreen();
                    }
                    else {
                        if (_this.configs.system_parameter.is_seller_sign_bill)
                            _this.xuLyKiFile(xmlInvoice, bill_sign_date);
                        else {
                            _this.info_message = res.data.info_message;
                            if (_this.info_message && _this.info_message.message) {
                                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(_this.info_message.message.message);
                                if (xmlInvoice != "") {
                                    _this.kyThongDiep(xmlInvoice, bill_sign_date);
                                }
                            }
                        }
                    }
                    if (_this.hinhThucXuat == 'XUAT_IN') {
                        _this.inhoadon();
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(res.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else {
            var sub_2 = this.billService.edit(this.frmData.id, this.frmData, true).subscribe(function (res) {
                if (res.status === 'success') {
                    _this.frmData.bill_number = res.data.bill_number;
                    _this.frmData.bill_date = moment__WEBPACK_IMPORTED_MODULE_2__(res.data.bill_date).format('YYYY-MM-DD HH:mm:ss'); // moment(rs.data.invoice_date).format('DD/MM/YYYY');
                    _this.verify_code = res.data.verify_code;
                    var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(res.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.frmData.id = res.data.id;
                    xmlInvoice = res.data.xml_string;
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                        _this.disablleScreen();
                    }
                    else {
                        if (_this.configs.system_parameter.is_seller_sign_bill)
                            _this.xuLyKiFile(xmlInvoice, bill_sign_date);
                        else {
                            _this.info_message = res.data.info_message;
                            if (_this.info_message && _this.info_message.message) {
                                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(_this.info_message.message.message);
                                if (xmlInvoice != "") {
                                    _this.kyThongDiep(xmlInvoice, bill_sign_date);
                                }
                            }
                        }
                    }
                    if (_this.hinhThucXuat == 'XUAT_IN') {
                        _this.inhoadon();
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(res.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                sub_2.unsubscribe();
            });
        }
    };
    InvoiceComponent.prototype.sendInvoice = function (xml_string) {
        var _this = this;
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        }, 20);
        var xmlInvoice = "";
        var sub = this.billService.sendInvoice({
            id: this.frmData.id,
            xml_string: xml_string,
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.info_message = rs.data.info_message;
                var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.bill_sign_date).format('YYYY-MM-DD HH:mm:ss');
                if (_this.info_message && _this.info_message.message) {
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(_this.info_message.message.message);
                    if (xmlInvoice != "") {
                        _this.kyThongDiep(xmlInvoice, bill_sign_date);
                    }
                }
            }
            else
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    InvoiceComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        if (this.info_message && this.info_message.message) {
            setTimeout(function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
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
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                    _this.disablleScreen();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                sub_3.unsubscribe();
            });
        }
    };
    /* Tạo mới */
    InvoiceComponent.prototype.handleAddNew = function () {
        this.addNew();
    };
    /* Tạo mới */
    InvoiceComponent.prototype.addNew = function () {
        var _this = this;
        var inv = Object.assign({}, this.frmData);
        this.frmData = new _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_17__["BillModel"](1);
        this.frmData.bill_date = null;
        this.frmData.template_id = inv.template_id;
        this.frmData.currency_code = inv.currency_code;
        this.frmData.template_code = inv.template_code;
        this.frmData.bill_options = inv.bill_options;
        this.frmData.bill_series = inv.bill_series;
        this.confirmCheckPreview = false;
        setTimeout(function () {
            _this.bill_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6___default.a({
                key: 'id',
                data: _this.frmData.bill_products_data()
            });
            _this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7___default.a({
                store: _this.bill_products
            });
        }, 1);
        this.formInvoice.resetTMR();
        this.productGrip.ttDaXuatHoaDon = false;
        this.productGrip.createUpdateEvent();
        this.formInvoice.removeReadonlyAllForm();
        this.formInvoice.emails = [];
        this.ttDaXuatHoaDon = false;
        setTimeout(function () {
            _this.formInvoice.changePayment_method_code(_this.select.templatesTT78.find(function (item) { return item.value == _this.frmData.template_id; }));
        }, 10);
    };
    InvoiceComponent.prototype.onPrintTempChanged = function (e) {
        this.templatePrinId = e.value;
    };
    InvoiceComponent.prototype.huy = function () {
        this.showPopupIn = false;
    };
    InvoiceComponent.prototype.print = function () {
        var _this = this;
        this.isPrint = true;
        this.showPopupIn = false;
        setTimeout(function () {
            _this.inhoadon();
        }, 200);
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
        if (this.productGrip)
            this.productGrip._tinhGiaTri();
    };
    /* In chuyển đổi */
    InvoiceComponent.prototype.inChuyenDoi = function () {
        var ids = [];
        ids.push(this.frmData.id);
        var data = this.billService.taodulieuInChuyenDoi(ids);
        data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadon;
        this.vPreviewInvService.xemMau(data);
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
    InvoiceComponent.prototype.ttInChuyenDoi = function () {
        return this.frmData.status == 'DA_TIEP_NHAN';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_15__["FormInvoiceComponent"]),
        __metadata("design:type", _form_invoice_form_invoice_component__WEBPACK_IMPORTED_MODULE_15__["FormInvoiceComponent"])
    ], InvoiceComponent.prototype, "formInvoice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_16__["ProductGripComponent"]),
        __metadata("design:type", _product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_16__["ProductGripComponent"])
    ], InvoiceComponent.prototype, "productGrip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_25__["FormExtendComponent"]),
        __metadata("design:type", _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_25__["FormExtendComponent"])
    ], InvoiceComponent.prototype, "formExtend", void 0);
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-bill',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/modules/bill-invoice/components/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/modules/bill-invoice/components/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_18__["BillService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_9__["CustomersService"],
            _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_11__["ConfigsService"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_19__["TemplateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_21__["VatService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_23__["ViewInvoiceService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_22__["MyBsModalService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_26__["InvoiceService"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/components/product-grip/product-grip.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/product-grip/product-grip.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--phần table hiển thị-->\r\n<div class=\"row invoice-table\">\r\n  <div class=\"col-md-12\" style=\"padding: 15px 20px;\">\r\n    <!-- Thêm dòng -->\r\n    <div class=\"pull-left\">\r\n      <div style=\"float: left;width:  30%; padding-top: 4px\">{{ _translate.CONTROLL.BUTTON.add_row }}</div>\r\n      <div style=\"float: left; width: 30%\">\r\n        <dx-number-box #numberBox [max]=\"100\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"rowData\"></dx-number-box>\r\n      </div>\r\n      <div>\r\n        <dx-button style=\"height: 27px\" icon=\"fa fa-plus-circle\" type=\"default\" text=\"\" (onClick)=\"addRow()\">\r\n        </dx-button>\r\n      </div>\r\n    </div>\r\n    <div class=\"pull-right\">\r\n      <!-- Hóa đơn bán hàng NQ 43 -->\r\n      <dx-check-box *ngIf=\"!isHdGTGT\" style=\"margin-right: 20px\" [(value)]=\"formDataInInvoice.is_resolution_43\"\r\n        text=\"{{ _translate.THONG_TIN.giam_thue_theo_nq43 }}\" (onValueChanged)=\"_changeNQ43($event)\"></dx-check-box>\r\n      <dx-check-box class=\"auto-input\" text=\"{{ _translate.CONTROLL.LABEL.no_calculation }}\"\r\n        [(value)]=\"formDataInInvoice.auto_value\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      <dx-menu [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\" submenuDirection=\"auto\"\r\n        (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n      </dx-menu>\r\n      <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx\" (change)=\"onFileBangKeChange($event)\" multiple=\"false\"\r\n      style=\"display: none;\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <dx-data-grid id=\"gridInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n      [allowColumnResizing]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n      (onKeyDown)=\"onGripKeyDown($event)\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n      (onEditorPrepared)=\"onEditorPrepared($event)\" (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n      (onRowPrepared)=\"onRowPrepared($event)\" (onCellPrepared)=\"onCellPrepared($event)\" (onContentReady)=\"onContentReady($event)\">\r\n      <!-- [wordWrapEnabled]=\"true\" (onEditorPrepared)=\"onEditorPrepared($event)\" -->\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"!ttDaXuatHoaDon\"></dxo-editing>\r\n      <dxo-sorting mode=\"false\"></dxo-sorting>\r\n      <dxo-scrolling mode=\"virtual\">\r\n      </dxo-scrolling>\r\n      <dxi-column cellTemplate=\"deleteColumn\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.delete }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.delete_column }}\" [allowEditing]=\"false\" alignment=\"center\" [fixed]=\"true\"\r\n        fixedPosition=\"left\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"order\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.view_order }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.stt }}\" alignment=\"center\" [fixed]=\"true\"\r\n        fixedPosition=\"left\"></dxi-column>\r\n      <dxi-column cssClass=\"overlay-content123\" dataField=\"product_code\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_code }}\" minWidth=\"{{ _translate.GRID_WIDTH.ma_hang }}\"\r\n        alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\" [editorOptions]=\"{showClearButton: true}\">\r\n        <dxo-lookup *ngIf=\"reloadSelectProduct\" [dataSource]=\"select.productsView\" displayExpr=\"mhvth\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column dataField=\"product_name\" minWidth=\"{{ _translate.GRID_WIDTH.ten_hang }}\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_name }}\" alignment=\"left\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Diễn giải -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_promotion\" cellTemplate=\"dien_giai\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.explain }}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Khuyến mại -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.promotional_goods_on_the_invoice\" cellTemplate=\"khuyen_mai\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.promotion }}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Chiết khấu thương mại -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.commercial_discount\" cellTemplate=\"cktm\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.commercial_discount }}\" minWidth=\"{{ _translate.GRID_WIDTH.cktm }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <!-- Đơn vị tính -->\r\n      <dxi-column dataField=\"unit_code\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.unit_code }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.unit_code }}\" alignment=\"center\" [editorOptions]=\"lookupColumnOptions\">\r\n        <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column dataField=\"quantity\" headerCellTemplate=\"quantityHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\" dataType=\"number\" alignment=\"center\"  [editorOptions]=\"{ format: formatter.so_luong,step: '0' }\"\r\n        [format]=\"formatter.so_luong\"></dxi-column>\r\n\r\n      <dxi-column dataField=\"price\" headerCellTemplate=\"priceHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        dataType=\"number\" alignment=\"right\" [editorOptions]=\"{ format: formatter.don_gia,step: '0' }\"\r\n        [format]=\"formatter.don_gia\">\r\n      </dxi-column>\r\n      <!-- Chiết khấu -->\r\n      <dxi-column\r\n        *ngIf=\"_objTemplateSelect && _objTemplateSelect.is_discount\"\r\n        dataField=\"discount\" headerCellTemplate=\"discountHeader\" minWidth=\"{{ _translate.GRID_WIDTH.chiet_khau }}\"\r\n        [editorOptions]=\"{ format: formatter.ty_le_chiet_khau,step: '0' }\" [format]=\"formatter.ty_le_chiet_khau\"\r\n        dataType=\"number\" alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Tiền chiết khấu -->\r\n      <dxi-column\r\n        *ngIf=\"_objTemplateSelect && _objTemplateSelect.is_discount\"\r\n        dataField=\"amount_discount\" headerCellTemplate=\"amount_discountHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tien_chiet_khau }}\" [editorOptions]=\"{ format: formatter.tien_chiet_khau }\"\r\n        [format]=\"formatter.tien_chiet_khau\" dataType=\"number\" alignment=\"right\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"amount\" headerCellTemplate=\"amountHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        dataType=\"number\" alignment=\"right\" [editorOptions]=\"{ format: formatter.thanh_tien, step: '0' }\"\r\n        [format]=\"formatter.thanh_tien\"></dxi-column>\r\n\r\n      <!--      <dxi-column *ngIf=\"isHdGTGT\" dataField=\"vat\" headerCellTemplate=\"vatHeader\"-->\r\n      <!--                  minWidth=\"{{ _translate.GRID_WIDTH.vat }}\" alignment=\"center\"-->\r\n      <!--                  [editorOptions]=\"{showClearButton: true ,step: '0'}\">-->\r\n      <!--      </dxi-column>-->\r\n\r\n      <dxi-column dataField=\"vat\" headerCellTemplate=\"vatHeader\" minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\"\r\n        alignment=\"center\" *ngIf=\"isHdGTGT\" [editorOptions]=\"{showClearButton: true ,step: '0'}\">\r\n        <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"amount_vat\" headerCellTemplate=\"amountVatHeader\" *ngIf=\"isHdGTGT\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\" dataType=\"number\" alignment=\"right\"\r\n        [editorOptions]=\"{ format: formatter.tien_thue, step: '0' }\" [format]=\"formatter.tien_thue\">\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"amount_after_vat\" headerCellTemplate=\"amountAfterVatHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tien_thue }}\" dataType=\"number\" alignment=\"right\"\r\n        [editorOptions]=\"{ format: formatter.tong_tien, step: '0' }\" [format]=\"formatter.tong_tien\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'quantityHeader'\">\r\n        <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.quantity }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceHeader'\">\r\n        <p (click)=\"configDecimal('don_gia')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.price }}<img\r\n            src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount_vat }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'vatHeader'\">\r\n        <p>VAT</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountHeader'\">\r\n        <p (click)=\"configDecimal('thanh_tien')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.amount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount_vat }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountAfterVatHeader'\">\r\n        <p (click)=\"configDecimal('tong_tien')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.total_money }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <!-- config column -->\r\n      <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n        <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'dien_giai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_explain\" [disabled]=\"d.data.is_promotion\"\r\n          (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'khuyen_mai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_promotion\" [disabled]=\"d.data.is_explain\"\r\n          (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n    \r\n      <div *dxTemplate=\"let d of 'is_transport_number'\">\r\n        <dx-check-box [(value)]=\"d.data.is_transport_number\"></dx-check-box>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let d of 'cktm'\">\r\n        <dx-check-box [(value)]=\"d.data.commercial_discount\" (onValueChanged)=\"changeCKTM(d.data)\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'discountHeader'\">\r\n        <p (click)=\"configDecimal('ty_le_chiet_khau')\" style=\"cursor: pointer;\">{{\r\n          _translate.GRID.INVOICE_DETAILS.discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amount_discountHeader'\">\r\n        <p (click)=\"configDecimal('tien_chiet_khau')\" style=\"cursor: pointer;\">\r\n          {{ _translate.GRID.INVOICE_DETAILS.amount_discount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'product_code'\">\r\n        <dxi-item editorType=\"dxSelectBox\"\r\n          [editorOptions]=\"{items: select.productsView, displayExpr: 'name', valueExpr: 'code'}\">\r\n        </dxi-item>\r\n      </div>\r\n      <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    </dx-data-grid>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n  [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div>\r\n    <p style=\"margin-bottom: 35px;\">{{ _translate.CONFIRM.import_type }}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"thayTheToanBo()\" text=\"{{ _translate.CONTROLL.BUTTON.replace_all }}\" type=\"default\">\r\n      </dx-button>\r\n      <dx-button (click)=\"themTiep()\" text=\"{{ _translate.CONTROLL.BUTTON.add_more }}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{ _translate.CONTROLL.BUTTON.cancel }}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/product-grip/product-grip.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/product-grip/product-grip.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-row i{color:#0E77BB;font-size:18px}.support-invoice{margin-top:20px;margin-bottom:10px}.support-invoice .support-link{padding:6px 15px;border:1px solid #007bff;text-decoration:none}.support-invoice .support-link.mgr-15{margin-right:8px}.support-invoice .support-link img,.support-invoice .support-link i{margin-right:15px;margin-top:-2px}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}::ng-deep .styleItemToList{color:dodgerblue}.button-dropdown-extend{display:inline-flex}.pull-right .auto-input{margin-right:75px !important}\n"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/product-grip/product-grip.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/product-grip/product-grip.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductGripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGripComponent", function() { return ProductGripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
/* harmony import */ var _shared_modules_vat_shared_components_config_decimal_config_decimal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/modules/vat-shared/components/config-decimal/config-decimal.component */ "./src/app/shared/modules/vat-shared/components/config-decimal/config-decimal.component.ts");
/* harmony import */ var _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/library/invoice/v-changge-money.service */ "./src/app/core/library/invoice/v-changge-money.service.ts");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme/data/custom_store */ "./node_modules/devextreme/data/custom_store.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.model */ "./src/app/modules/bill-invoice/shared/bill.model.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
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
    function ProductGripComponent(route, router, billService, modalService, productsService, authService, translate, invoiceService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.billService = billService;
        this.modalService = modalService;
        this.productsService = productsService;
        this.authService = authService;
        this.translate = translate;
        this.invoiceService = invoiceService;
        this.select = {};
        this.reloadSelectProduct = true;
        this.extras = [];
        this.dataExcelFile = null;
        this.dataExcelFileInfo = null;
        this.showPopup = false;
        this.frmData = new _modules_bill_invoice_shared_bill_model__WEBPACK_IMPORTED_MODULE_12__["BillModel"](1);
        this.amount_after_vat = 0;
        this.ttDaXuatHoaDon = false;
        this.productCodePattern = _config_pattern__WEBPACK_IMPORTED_MODULE_14__["pattern"].productCodePattern;
        this.rowData = 1;
        this.lookupColumnOptions = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                var _this = this;
                //
                //
                var newItem = {};
                newItem.code = _core_index__WEBPACK_IMPORTED_MODULE_13__["VStringService"]._convertToViKdau(args.text);
                var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === newItem.code; })[0];
                if (oDuplicate)
                    newItem.code = newItem.code + _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].addtionalUnitCode();
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
    };
    ProductGripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configs = this.authService.getConfigs();
        this.routeSub = this.route.data.subscribe(function (data) {
            var danh_muc = _this.authService.getDMLocal();
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            var products = data.init[0];
            var isEdit = false;
            if (data.init[2] == true)
                isEdit = true;
            _this.select.products = products;
            _this.select.productsView = {
                store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_11___default.a({
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
            _this.select.products.forEach(function (item) {
                item.mhvth = item.code + ': ' + item.name;
            });
            _this.bill_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    if (item.product_name && item.unit_name) {
                        var obj1 = _this.select.unit_codes.filter(function (p) { return p.name === item.unit_name; })[0];
                        if (!obj1) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_13__["VStringService"]._getValueToString(item.unit_code) == "")
                                item.unit_code = _core_index__WEBPACK_IMPORTED_MODULE_13__["VStringService"]._convertToViKdau(item.unit_name);
                            var oDuplicate = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                            if (oDuplicate)
                                item.unit_code = item.unit_code + _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].addtionalUnitCode();
                            _this.select.unit_codes.push({ code: item.unit_code, name: item.unit_name });
                        }
                        else {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_13__["VStringService"]._getValueToString(item.unit_code) != "") {
                                var oExistUnitCode = _this.select.unit_codes.filter(function (p) { return p.code === item.unit_code; })[0];
                                if (!oExistUnitCode)
                                    _this.select.unit_codes.push({ code: item.unit_code, name: item.unit_name });
                            }
                        }
                    }
                });
            });
            var loaiHoaDon = data.type;
            if (loaiHoaDon === _core_index__WEBPACK_IMPORTED_MODULE_13__["sEnum"].loaihoadon.GTKT01) {
                _this.isHdGTGT = true;
            }
            else {
                _this.isHdGTGT = false;
            }
        });
        this.createUpdateEvent();
    };
    ProductGripComponent.prototype._tinhGiaTri = function () {
        var _this = this;
        setTimeout(function () {
            _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_10__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.bill_products, _this.formDataInInvoice, _this.formatter, !_this.formDataInInvoice.auto_value, _this.formDataInInvoice.auto_value_price, _this.select, _this._objTemplateSelect, _this.configs.system_parameter);
            _this.amount_after_vat = _this.formDataInInvoice.amount_after_vat;
            _this.formDataInInvoice.amount_vat = _this.formDataInInvoice.total_amount_vat;
            _this.handleVat(_this.formDataInInvoice);
            _this.dataGrid.instance.refresh();
        }, 0);
    };
    ProductGripComponent.prototype.handleVat = function (data) {
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
        this.formDataInInvoice.tax_information = tax_information;
    };
    ProductGripComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    ProductGripComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            if (e.column.dataField == "product_code") {
                if (_core_index__WEBPACK_IMPORTED_MODULE_13__["VStringService"]._getValueToString(e.data.product_code) != "" && !this.productCodePattern.test(e.data.product_code)) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = this._translate.VALIDATION.required_productCode;
                }
            }
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
            }
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
    };
    ProductGripComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm(_this._translate.CONFIRM.delete);
            if (check && !_this.ttDaXuatHoaDon) {
                setTimeout(function () {
                    _this.bill_products.remove(item.id);
                    _this.dataGrid.instance.refresh();
                    _this._tinhGiaTri();
                }, 100);
            }
        }, 200);
    };
    ProductGripComponent.prototype.changeCKTM = function (row) {
        this._tinhGiaTri();
    };
    ProductGripComponent.prototype.configDecimal = function (n) {
        var _this = this;
        var initialState = {
            column: n,
            formatter: this.formatter,
            showDonGiaNte: this.configs.system_parameter.view_price_nte,
        };
        this.bsModalRef = this.modalService.show(_shared_modules_vat_shared_components_config_decimal_config_decimal_component__WEBPACK_IMPORTED_MODULE_9__["ConfigDecimalComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                _this.formatter[data.column] = data.character;
                _this._tinhGiaTri();
            }
            subModal.unsubscribe();
        });
    };
    ProductGripComponent.prototype.addRow = function (rowIndexFocus) {
        if (rowIndexFocus >= 0) {
            var rowIndex = rowIndexFocus + 1;
            var data = this.frmData.add_invoice_products_data(rowIndex, rowIndex);
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
        this.dataGrid.instance.refresh();
    };
    // tính tiền 
    ProductGripComponent.prototype.caculatorAmountVat = function (amount, vat) {
        var temp = amount / 100 * vat;
        return this.roundNumber(temp, 5);
    };
    ProductGripComponent.prototype.roundNumber = function (number, n) {
        var p = Math.pow(10, n);
        return Math.round(number * p) / p;
    };
    ProductGripComponent.prototype.createUpdateEvent = function () {
        var _this = this;
        setTimeout(function () {
            _this.bill_products.on('updated', function (key, value) {
                var column = Object.keys(value)[0];
                if (value.product_code !== 'add') {
                    _this.bill_products.byKey(key).then(function (row) {
                        switch (column) {
                            case 'view_order':
                                // this.view_orderChange();
                                break;
                            case 'product_code':
                                _this.product_codeChange(row);
                                break;
                            case 'unit_code':
                                _this.unit_codeChange(row);
                                break;
                            case 'country_code':
                                // this.country_codeChange(row);
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
                    _this.bill_products.remove(key);
                    _this.addRow(null);
                }
            });
        }, 100);
    };
    ProductGripComponent.prototype.product_codeChange = function (row) {
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
                            if (_this.isHdGTGT) {
                                row.vat = product.vat != null ? product.vat.toString() : null;
                            }
                            else {
                                row.vat = null;
                            }
                            // if (this.configs.system_parameter.price_after_vat) {
                            //   row.price_after_vat = product.price ? parseFloat(product.price) : product.price;
                            //   if ((row.vat == 5 || row.vat == 10) && row.price_after_vat)
                            //     row.price = (row.price_after_vat / (1 + row.vat / 100));
                            //   else
                            //     row.price = row.price_after_vat;
                            // }
                            // else
                            row.price = product.price ? parseFloat(product.price) : product.price;
                            row.amount = product.price ? parseFloat(product.price) : 0;
                            if (_this.isHdGTGT) {
                                row.amount_vat = (row.vat >= 0 || row.vat == -3) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                            }
                            else {
                                row.amount_vat = null;
                            }
                            row.amount_after_vat = row.amount + (row.amount_vat != null ? row.amount_vat : 0);
                            var test = _this.bill_products;
                            _this.bill_products.update(row.id, row);
                            _this._tinhGiaTri();
                            return true;
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_13__["Library"].notify(rs.message, 'error');
                    }
                });
            }
        });
    };
    ProductGripComponent.prototype.unit_codeChange = function (row) {
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
    ProductGripComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code === unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    ProductGripComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'LAY_MAU_BANG_KE') {
            this.layMauBangKe();
        }
        else if (e.itemData.id === 'NAP_DU_LIEU_BANG_KE') {
            this.napDuLieuTuBangKe();
        }
    };
    // Lấy mẫu bảng kê
    ProductGripComponent.prototype.layMauBangKe = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_13__["Library"].showloading();
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
            customer_name: this.formDataInInvoice.customer_name,
            buyer_tax_code: this.formDataInInvoice.buyer_tax_code,
            buyer_address: this.formDataInInvoice.buyer_address,
            buyer_name: this.formDataInInvoice.buyer_name,
            invoice_type_name: '',
            hiddens: fields
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                var file = rs.data.invoice;
                _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_13__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_13__["Library"].hideloading();
        });
    };
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
        reader.readAsBinaryString(target.files[0]);
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_15__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_15__["utils"].sheet_to_json(ws, { header: 'A', range: 10 }));
            var account = (xlsx__WEBPACK_IMPORTED_MODULE_15__["utils"].sheet_to_json(ws, { header: 'A', range: 0 }));
            var fileBangKe = document.getElementById('file-bang-ke');
            fileBangKe.value = '';
            var _arrData = [];
            if (data && data[0]) {
                var columnsName = data.map(function (e) { return e.A; });
                var _index = columnsName.indexOf("view_order");
                if (_index == -1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_13__["Library"].notify("File mẫu không đúng định dạng. Vui lòng nhấn vào Tại đây để lấy lại file mẫu", "error");
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
            _this.dataExcelFileInfo = account.slice(0, 5);
            _this.showPopup = true;
        };
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
        if (info.length === 5) {
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
            ////
            var id_card = info[4].A.split(':');
            if (id_card.length > 1 && id_card[1].trim() != '') {
                this.formDataInInvoice.id_card = id_card[1].trim();
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
                bill_1['id'] = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].makeid();
                bill_1['order'] = element.view_order ? parseInt(element.view_order) : null;
                bill_1['product_code'] = element.product_code ? element.product_code : "";
                bill_1['product_name'] = element.product_name ? element.product_name : "";
                bill_1['quantity'] = element.quantity ? _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].toNumber(element.quantity) : null;
                bill_1['vat'] = (element.vat && _this.isHdGTGT) ? element.vat : null;
                bill_1["amount_vat"] = element.amount_vat ? _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].toNumber(element.amount_vat) : null;
                bill_1['amount'] = element.amount ? _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].toNumber(element.amount) : null;
                bill_1["unit_code"] = element.unit_name ? _this.getUnitCodeByUnitName(element.unit_name) : "";
                bill_1["unit_name"] = element.unit_name ? element.unit_name : "";
                bill_1["price"] = element.price ? _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].toNumber(element.price) : null;
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
        _core_index__WEBPACK_IMPORTED_MODULE_13__["Library"].hideloading();
    };
    ProductGripComponent.prototype.getUnitCodeByUnitName = function (unitName) {
        if (_core_index__WEBPACK_IMPORTED_MODULE_13__["VStringService"]._getValueToString(unitName) !== '') {
            if (!this.select.unit_codes || this.select.unit_codes.length == 0)
                this.select.unit_codes = [];
            // if (this.select.unit_codes && Array.isArray(this.select.unit_codes)) {
            var _obj = this.select.unit_codes.filter(function (p) { return p.name === unitName; })[0];
            if (_obj) {
                return _obj.code;
            }
            else {
                var code_1 = _core_index__WEBPACK_IMPORTED_MODULE_13__["VStringService"]._convertToViKdau(unitName);
                var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === code_1; })[0];
                if (oDuplicate)
                    code_1 = code_1 + _core_helper_Helper__WEBPACK_IMPORTED_MODULE_8__["Helper"].addtionalUnitCode();
                this.select.unit_codes.push({ code: code_1, name: unitName });
                return code_1;
            }
            // } else {
            //   this.select.unit_codes = [];
            // }
        }
        return null;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"])
    ], ProductGripComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "formDataInInvoice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "bill_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductGripComponent.prototype, "isHdGTGT", void 0);
    ProductGripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bill-product-grip',
            template: __webpack_require__(/*! ./product-grip.component.html */ "./src/app/modules/bill-invoice/components/product-grip/product-grip.component.html"),
            styles: [__webpack_require__(/*! ./product-grip.component.scss */ "./src/app/modules/bill-invoice/components/product-grip/product-grip.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_2__["BillService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _core_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_16__["InvoiceService"]])
    ], ProductGripComponent);
    return ProductGripComponent;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/components/send-invoice-to-tax/send-invoice-to-tax.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/send-invoice-to-tax/send-invoice-to-tax.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{ _translate.THONG_TIN.danh_sach_hoa_don_gui_cqt }}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"dong()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid id=\"gridContainer\" [dataSource]=\"invoiceList\" [showRowLines]=\"true\" [allowColumnResizing]=\"true\"\r\n    [columnMinWidth]=\"50\" [columnResizingMode]=\"true\" [columnAutoWidth]=\"true\" [wordWrapEnabled]=\"true\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <!-- Số hóa đơn -->\r\n    <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"bill_number\"\r\n      caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n      alignment=\"center\">\r\n    </dxi-column>\r\n    <!-- Mẫu số -->\r\n    <dxi-column dataField=\"template_code\" caption=\"{{ 'GRID.INVOICE.template_code' | translate }}\" [width]=\"110\"\r\n      alignment=\"center\"></dxi-column>\r\n    <!-- Ký hiệu -->\r\n    <dxi-column dataField=\"bill_series\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n      [width]=\"90\" alignment=\"center\" [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column>\r\n    <!-- Ngày hóa đơn -->\r\n    <dxi-column dataField=\"bill_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\"\r\n      minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n      format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n    </dxi-column>\r\n    <!-- Mã số thuế -->\r\n    <dxi-column dataField=\"buyer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n      minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"left\">\r\n    </dxi-column>\r\n    <!-- Tên khách hàng -->\r\n    <dxi-column [filterOperations]=\"['contains']\"\r\n      cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\" alignment=\"left\"\r\n      minWidth=\"200\">\r\n    </dxi-column>\r\n    <!-- Tổng tiền -->\r\n    <dxi-column dataField=\"total_payment\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" dataType=\"number\"\r\n      format=\"0,###.##\" alignment=\"right\"></dxi-column>\r\n\r\n    <dxi-column cellTemplate=\"statusSendTax\" caption=\"{{ 'GRID.GENERAL.status' | translate }}\" [width]=\"130\"\r\n      alignment=\"center\"></dxi-column>\r\n\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.bill_number\r\n        }}</a>\r\n    </div>\r\n\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p>{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    <a *ngIf=\"d.data.status == 'DA_XUAT'\" href=\"javascript:void(0)\">Đã xuất</a>\r\n    <a *ngIf=\"d.data.status == 'KHONG_DU_DK_CAP_MA'\" href=\"javascript:void(0)\" (click)=\"LydoKTiepNhan(d.data)\">Không đủ\r\n      ĐK cấp mã</a>\r\n    <a *ngIf=\"d.data.status == 'CHUA_GUI_CQT'\" href=\"javascript:void(0)\">Chưa gửi CQT</a>\r\n    <a *ngIf=\"d.data.status == 'DA_GUI_CQT'\" href=\"javascript:void(0)\">Đã gửi CQT</a>\r\n    <a *ngIf=\"d.data.status == 'DA_TIEP_NHAN'\" href=\"javascript:void(0)\">CQT đã tiếp nhận</a>\r\n    <a *ngIf=\"d.data.status == 'KHONG_HOP_LE'\" href=\"javascript:void(0)\" style=\"color: red;\"\r\n      (click)=\"LydoKTiepNhan(d.data)\">CQT kiểm tra không hợp lệ </a>\r\n  </div>\r\n\r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button text=\"{{_translate.THONG_TIN.gui_cqt}}\" icon=\"{{_translate.ICONS.send_email}}\" *ngIf=\"!daXong\"\r\n    type=\"default\" (click)=\"guiCQT()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\"\r\n    (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/send-invoice-to-tax/send-invoice-to-tax.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/send-invoice-to-tax/send-invoice-to-tax.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-control-label{margin-top:4px;color:red;font-weight:800;font-family:Times New Roman}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}::ng-deep .view-bill{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/send-invoice-to-tax/send-invoice-to-tax.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/send-invoice-to-tax/send-invoice-to-tax.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SendInvoiceToTaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendInvoiceToTaxComponent", function() { return SendInvoiceToTaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SendInvoiceToTaxComponent = /** @class */ (function () {
    function SendInvoiceToTaxComponent(bsModalRef, vatService, socketService, authService, router, spinner, billService, modalImportService, modalService, vPreviewInvService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.router = router;
        this.spinner = spinner;
        this.billService = billService;
        this.modalImportService = modalImportService;
        this.modalService = modalService;
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
    SendInvoiceToTaxComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        this.infoDangKy = this.authService.getInfoRegister();
        if (this.infoDangKy) {
            if (this.infoDangKy.status == "CHAP_NHAN")
                this.isTT78 = true;
        }
        this.connectWebsocket();
    };
    SendInvoiceToTaxComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    SendInvoiceToTaxComponent.prototype.onImportHiding = function (e) {
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
    SendInvoiceToTaxComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDonImport().subscribe(function (message) {
            var data = message;
            if (data.Status == 'success') {
                if (data.SvcName == "efy_Sign") {
                    var i = _this.invoiceIndex;
                    if (data.Data.Name == 'thongdiep.xml') {
                        _this.guiThongDiepDaKy(data.Data.Content);
                    }
                    else if (data.Data.Name == 'ten_filek_the_trung-dc-nhi.xml') {
                        _this.taoThongDiep();
                    }
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
            }
        });
    };
    SendInvoiceToTaxComponent.prototype.guiThongDiepDaKy = function (xml_string) {
        var _this = this;
        if (this.dulieu != null) {
            this.dulieu["message"]["message"] = xml_string;
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            this.subXuatHoaDon = this.billService.guiThongDiep(this.dulieu).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.invoiceList.forEach(function (item) {
                        item.status = rs.data.status;
                    });
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.THONG_TIN.gui_hoa_don_cqt_thanh_cong, 'success');
                    _this.daXong = true;
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                _this.subXuatHoaDon.unsubscribe();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.THONG_TIN.khong_co_du_lieu_gui_cqt, "error");
        }
    };
    SendInvoiceToTaxComponent.prototype.guiCQT = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirmVA(this._translate.THONG_TIN.cau_hoi_xac_nhan_gui_cqt, this._translate.NOTIFY.notify, function () {
            _this.dulieu = null;
            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                _this.taoThongDiep();
            }
            else {
                var ListSerialNumber = "DSCKS";
                if (_this.infoDangKy && _this.infoDangKy.registration_signature) {
                    var signatures = _this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                    if (signatures && signatures.length > 0)
                        ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                }
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
            }
        });
    };
    SendInvoiceToTaxComponent.prototype.taoThongDiep = function () {
        var _this = this;
        var ids = this.invoiceList.map(function (item) { return item.id; });
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.billService.layThongDiep(ids).subscribe(function (rs) {
            if (rs.status == 'success') {
                if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                    || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                    _this.invoiceList.forEach(function (item) {
                        item.status = rs.data.status;
                    });
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.THONG_TIN.gui_hoa_don_cqt_thanh_cong, 'success');
                    _this.daXong = true;
                }
                else {
                    _this.dulieu = rs.data;
                    var bill_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.xuLyKiFile(rs.data.message.message, bill_sign_date);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
        });
    };
    SendInvoiceToTaxComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
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
    SendInvoiceToTaxComponent.prototype.dong = function () {
        if (this.daXong) {
            this.bsModalRef.content.successSaveItem = "success";
        }
        this.bsModalRef.hide();
        if (this.isHdGTGT) {
            if (this.search)
                this.router.navigate(["/system/bills-invoice-vat"], { queryParams: this.search });
            else
                this.router.navigate(["/system/bills-invoice-vat"]);
        }
        else {
            if (this.search)
                this.router.navigate(["/system/bills-invoice-sale"], { queryParams: this.search });
            else
                this.router.navigate(["/system/bills-invoice-sale"]);
        }
    };
    SendInvoiceToTaxComponent.prototype.viewDetailInvoice = function (data) {
        if (data) {
            var is_default_tempplate = true;
            var ids = [];
            ids.push(data.id);
            if (!_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._attemptConvertBool(data.is_default_template))
                is_default_tempplate = false;
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
    };
    SendInvoiceToTaxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-invoice-to-tax',
            template: __webpack_require__(/*! ./send-invoice-to-tax.component.html */ "./src/app/modules/bill-invoice/components/send-invoice-to-tax/send-invoice-to-tax.component.html"),
            styles: [__webpack_require__(/*! ./send-invoice-to-tax.component.scss */ "./src/app/modules/bill-invoice/components/send-invoice-to-tax/send-invoice-to-tax.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_7__["BillService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_9__["MyBsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_10__["ViewInvoiceService"]])
    ], SendInvoiceToTaxComponent);
    return SendInvoiceToTaxComponent;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/components/send-invoices/send-invoices.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/send-invoices/send-invoices.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.process_invoice}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-7\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item [label]=\"{text: _translate.GRID.INVOICE.template_code }\" dataField=\"template\"\r\n                [editorOptions]=\"{readOnly: true}\">\r\n              </dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n              <dxi-item dataField=\"bill_date\" [label]=\"{text: _translate.GRID.INVOICE.invoice_date}\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item cssClass=\"invoice-number-create-invoice\" dataField=\"bill_number\"\r\n                [label]=\"{text: _translate.GRID.INVOICE.invoice_number}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_tax_code\" [label]=\"{text: _translate.GRID.INVOICE.buyer_tax_code }\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_name\" [label]=\"{text: _translate.CONTROLL.LABEL.buyer_name }\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item dataField=\"buyer_name\" [label]=\"{text: _translate.CONTROLL.LABEL.customer_name}\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <div class=\"col-lg-5\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item dataField=\"buyer_mobile\" [label]=\"{text: _translate.CONTROLL.LABEL.phone }\"\r\n                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_mobile\" [label]=\"'Căn cước công đân'\" [editorOptions]=\"{disabled: true}\">\r\n              </dxi-item>\r\n              <dxi-item dataField=\"buyer_email\" [label]=\"{text: 'Email'}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <div class=\"col-lg-12 link-send-invoice\">\r\n          <div class=\"pull-right\">\r\n            <a *ngIf=\"invoice.bill_number\" (click)=\"sendMail()\"\r\n              href=\"javascript:void(0)\">{{_translate.CONTROLL.LABEL.send_invoice}}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <dx-data-grid id=\"invoiceHistoryGrid\" [dataSource]=\"invoice_process\" (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n      [showBorders]=\"true\" [wordWrapEnabled]=\"true\" [showRowLines]=\"true\">\r\n      <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n      <dxi-column cellTemplate=\"stt\" caption=\"{{_translate.GRID.INVOICE_DETAILS.view_order}}\" width=\"80\"\r\n        alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"process_time\" caption=\"{{_translate.CONTROLL.LABEL.date_made}}\" width=\"180\"\r\n        dataType=\"datetime\" format=\"dd/MM/yyyy HH:mm:ss\" dateSerializationFormat=\"yyyy-MM-dd HH:mm:ss\"\r\n        alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"content\" cellTemplate=\"content\" caption=\"{{_translate.CONTROLL.LABEL.task}}\"\r\n        alignment=\"left\"></dxi-column>\r\n      <dxi-column dataField=\"user_name\" caption=\"{{_translate.CONTROLL.LABEL.person_made}}\" alignment=\"left\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'stt'\">\r\n        <p>{{ d.rowIndex + 1 }}</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'content'\">\r\n        {{ d.data.content}}\r\n      </div>\r\n    </dx-data-grid>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" icon=\"{{_translate.ICONS.come_back }}\" type=\"default\"\r\n      (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/send-invoices/send-invoices.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/send-invoices/send-invoices.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .form-input-visibility{visibility:hidden}::ng-deep .invoice-number-create-invoice input{color:red;font-weight:bold}.link-send-invoice{margin-top:10px}.link-send-invoice a{text-decoration:underline}#invoiceHistoryGrid{margin-top:15px}\n"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/send-invoices/send-invoices.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/send-invoices/send-invoices.component.ts ***!
  \******************************************************************************************/
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
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../send-mail/send-mail.component */ "./src/app/modules/bill-invoice/components/send-mail/send-mail.component.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
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
    function SendInvoicesComponent(authService, bsModalRef, vatService, billService, modalService, bsModalSendMail, customersService) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.billService = billService;
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
        this.frmData.template = invoice.template_code + " - " + invoice.bill_series;
        this.frmData.bill_date = moment__WEBPACK_IMPORTED_MODULE_1__(invoice.bill_date).format('DD/MM/YYYY');
        this.frmData.bill_number = invoice.bill_number;
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
        var sub = this.billService.getInvoiceProccess(this.invoice.id).subscribe(function (rs) {
            var mapObj = {
                T: "; ",
            };
            _this.invoice_process = rs.data.bill_process;
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
        this.bsModalSendMail = this.modalService.show(_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_7__["SendMailComponent"], { class: 'modal-md', initialState: initialState, backdrop: 'static', keyboard: false });
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
            template: __webpack_require__(/*! ./send-invoices.component.html */ "./src/app/modules/bill-invoice/components/send-invoices/send-invoices.component.html"),
            styles: [__webpack_require__(/*! ./send-invoices.component.scss */ "./src/app/modules/bill-invoice/components/send-invoices/send-invoices.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_8__["BillService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_6__["CustomersService"]])
    ], SendInvoicesComponent);
    return SendInvoicesComponent;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/components/send-mail/send-mail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/send-mail/send-mail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.BUTTON.send}} EMAIL</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n        <dxi-item dataField=\"email\" [label]=\"{text: 'Email'}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Email {{_translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n          <!-- <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.email\" message=\"Email {{_translate.VALIDATION.not_pattern}}\"></dxi-validation-rule> -->\r\n        </dxi-item>\r\n      </dx-form>\r\n      <div style=\"margin-top: 10px;\">\r\n          <a style=\"color: silver;text-decoration: underline;font-size: 90%;\">{{_translate.CONTROLL.LABEL.note1}}: </a><a style=\"color: silver;font-size: 90%;\"> {{_translate.CONTROLL.LABEL.note_email}}</a>\r\n        </div>\r\n        <div style=\"margin-top: 5px;\">\r\n            <a style=\"color: silver;font-size: 90%;\">{{_translate.CONTROLL.LABEL.example}}: admin@efy.com.vn;sale@efy.com.vn</a>\r\n          </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <dx-button text=\"{{_translate.CONTROLL.BUTTON.send}}\" icon=\"{{_translate.ICONS.send_email}}\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n      </dx-button>\r\n      <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n      </dx-button>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/send-mail/send-mail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/send-mail/send-mail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/send-mail/send-mail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/send-mail/send-mail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SendMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailComponent", function() { return SendMailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
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
    function SendMailComponent(bsModalRef, billService, authService, customersService) {
        this.bsModalRef = bsModalRef;
        this.billService = billService;
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
        var sub = this.billService.sendMail(data).subscribe(function (rs) {
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
            template: __webpack_require__(/*! ./send-mail.component.html */ "./src/app/modules/bill-invoice/components/send-mail/send-mail.component.html"),
            styles: [__webpack_require__(/*! ./send-mail.component.scss */ "./src/app/modules/bill-invoice/components/send-mail/send-mail.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_5__["BillService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]])
    ], SendMailComponent);
    return SendMailComponent;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/components/view-invoice/view-invoice.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/view-invoice/view-invoice.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{lblTitle}}</h4>\r\n  <div>\r\n    <div *ngFor=\"let item of items | paginate: { itemsPerPage: 1, currentPage: p }; let i = index\">\r\n    </div>\r\n    <pagination-controls style=\"width: 50%;\" (pageChange)=\"getPage($event)\"></pagination-controls>\r\n  </div>\r\n  <div style=\"display: flex; align-items: center;\">\r\n    <dx-button *ngIf=\"isXuatHD\" text=\"Đồng ý\" icon=\"{{_translate.ICONS.save}}\" type=\"default\" (click)=\"dongy()\">\r\n    </dx-button>\r\n    <i class=\"fa fa-times\" style=\"font-size:25px; cursor: pointer;\" (click)=\"dong()\"></i>\r\n  </div>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"body-content\">\r\n    <div *ngIf=\"isXuatHD\" class=\"canh-bao\">\r\n      <p style=\"font-weight: 600;\">\r\n        <span class=\"nhap-nhay\"></span>\r\n        <span style=\"font-size: 17px;\">Lưu ý: </span>\r\n        Đề nghị đơn vị kiểm tra thật kỹ các nội dung hóa đơn đã nhập trước khi xuất như: Ngày hóa đơn, Bên mua hàng, Tên\r\n        hàng hóa dịch vụ, Tổng tiền,…để tránh xuất sai.\r\n      </p>\r\n    </div>\r\n    <div style=\"display: flex; width: 100%;\">\r\n      <iframe height=\"{{heightT}}\" id=\"preview-iframe\"></iframe>\r\n      <div *ngIf=\"isXuatHD\" class=\"thong-tin-hoa-don\">\r\n        <div class=\"e-invoice\">\r\n          <p style=\" font-weight: 600;\" *ngIf=\"!isHoaDon\">Ngày chứng từ : </p>\r\n          <p style=\" font-weight: 600;\" *ngIf=\"isHoaDon\">Ngày hóa đơn : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">{{ngayHD}}</p>\r\n        </div>\r\n        <div class=\"e-invoice\">\r\n          <p style=\"font-weight: 600;\">Trạng thái : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">Xuất {{hinhthucxuat}}</p>\r\n        </div>\r\n        <div class=\"e-invoice\">\r\n          <p style=\"font-weight: 600;\">Tổng tiền : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">{{total_payment}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/view-invoice/view-invoice.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/view-invoice/view-invoice.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-header{display:flex;justify-content:space-between;align-items:center}.pagination{display:flex}.pagination a{color:black;float:left;padding:8px 16px;text-decoration:none}::ng-deep .body-content{height:100%}.modal-body .body-content{display:flex;justify-content:center;align-items:center;flex-direction:column}.nhap-nhay{background:red;padding:0.5px 9px;margin-right:5px;border-radius:57%;-webkit-animation:flicker 1s infinite}.ht-xuat{width:25%;padding:15px;background:#ffffff;box-shadow:rgba(0,0,0,0.35) 0px 5px 15px}@-webkit-keyframes flicker{0%{opacity:0}9%{opacity:0}10%{opacity:.5}13%{opacity:0}20%{opacity:.5}25%{opacity:1}}.example{padding:20px}input[type=button]{padding:5px 10px;margin:10px 5px;border-radius:5px;cursor:pointer;background:#ddd;border:1px solid #ccc}input[type=button]:hover{background:#ccc}.confirm{display:none}.confirm>div:first-of-type{position:fixed;width:100%;height:100%;background:rgba(0,0,0,0.5);top:0px;left:0px}.confirm>div:last-of-type{padding:10px 20px;background:white;position:absolute;width:auto;height:auto;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border-radius:5px;border:1px solid #333}.confirm>div:last-of-type div:first-of-type{min-width:150px;padding:10px}.confirm>div:last-of-type div:last-of-type{text-align:right}.canh-bao{margin-bottom:10px}#preview-iframe{width:calc(100% - 20px)}\n"

/***/ }),

/***/ "./src/app/modules/bill-invoice/components/view-invoice/view-invoice.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/bill-invoice/components/view-invoice/view-invoice.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ViewInvoiceBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInvoiceBillComponent", function() { return ViewInvoiceBillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ViewInvoiceBillComponent = /** @class */ (function () {
    function ViewInvoiceBillComponent(bsModal, vatService, router, translate, authService, socketService, spinner, billService) {
        var _this = this;
        this.bsModal = bsModal;
        this.vatService = vatService;
        this.router = router;
        this.translate = translate;
        this.authService = authService;
        this.socketService = socketService;
        this.spinner = spinner;
        this.billService = billService;
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
    ViewInvoiceBillComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ViewInvoiceBillComponent.prototype.ngOnInit = function () {
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
    ViewInvoiceBillComponent.prototype.viewTransport = function (item) {
        var id = item.id;
    };
    ViewInvoiceBillComponent.prototype.getPage = function (page, sort, order) {
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
    ViewInvoiceBillComponent.prototype.action_napexcel = function (page) {
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
            bills: invoicesArr
        };
        var sub = this.billService.previewInvoiceImport(data).subscribe(function (rs) {
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
    ViewInvoiceBillComponent.prototype.action_xemhoadon = function (page) {
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
        var sub = this.billService.view(arrId).subscribe(function (rs) {
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
    ViewInvoiceBillComponent.prototype.action_inchuyendoi = function (page) {
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
    ViewInvoiceBillComponent.prototype.dong = function () {
        // this.router.navigate(['/system/transport-invoice']);
        this.bsModal.hide();
    };
    ViewInvoiceBillComponent.prototype.dongy = function () {
        this.bsModal.content.successSaveItem = 'DONG_Y';
        this.bsModal.hide();
    };
    /* Kết nối đến socket */
    ViewInvoiceBillComponent.prototype.connectWebsocket = function () {
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
    ViewInvoiceBillComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
    };
    ViewInvoiceBillComponent.prototype.viewInvoice = function (content, typeView, hinhthucxuat, invoice_date) {
        this.objectUrl = content;
        this.ngayHD = moment__WEBPACK_IMPORTED_MODULE_6__(invoice_date).format('DD/MM/YYYY');
        this.mainTest = "data:application/pdf;base64," + this.objectUrl;
        var iframe = document.getElementById('preview-iframe');
        iframe.setAttribute("src", this.mainTest);
        this.spinner.hide();
    };
    ViewInvoiceBillComponent.prototype.taihoadon = function () {
        this.invoices = this.items;
        this.showPopup = true;
        this.totalInvoice = Math.floor(this.invoices.length / 10) + 1;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.xulyTaiFilePdf();
    };
    ViewInvoiceBillComponent.prototype.xulyTaiFilePdf = function () {
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
    ViewInvoiceBillComponent.prototype.continuteExportInvoice = function (isSuccess) {
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
    ViewInvoiceBillComponent.prototype.iterator = function (a, take, skip) {
        var current = skip * 10;
        var l = a.length;
        var end = current + take;
        var part = a.slice(current, end);
        current = end < l ? end : 0;
        return part;
    };
    ViewInvoiceBillComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ViewInvoiceBillComponent.prototype.onImportHiding = function (e) {
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
    ViewInvoiceBillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-invoice',
            template: __webpack_require__(/*! ./view-invoice.component.html */ "./src/app/modules/bill-invoice/components/view-invoice/view-invoice.component.html"),
            styles: [__webpack_require__(/*! ./view-invoice.component.scss */ "./src/app/modules/bill-invoice/components/view-invoice/view-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_8__["BillService"]])
    ], ViewInvoiceBillComponent);
    return ViewInvoiceBillComponent;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/shared/invoice.resolver.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/bill-invoice/shared/invoice.resolver.ts ***!
  \*****************************************************************/
/*! exports provided: InvoiceResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceResolver", function() { return InvoiceResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
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
    function InvoiceResolver(billService, router, listsService, authService) {
        this.billService = billService;
        this.router = router;
        this.listsService = listsService;
        this.authService = authService;
    }
    InvoiceResolver.prototype.resolve = function (route, state) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var isTT78 = false;
        var infoDangKy = this.authService.getInfoRegister();
        if (infoDangKy && infoDangKy.id) {
            if (infoDangKy.status == "CHAP_NHAN")
                isTT78 = true;
        }
        var loaiHoaDon = route.data.type;
        var _countDm = 0;
        var dataJoin = [];
        var dataDM;
        /**
         * Thiếu bên học sinh sinh viên, rà soát lại các hàm liên quan
         */
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
        ];
        dataDM = this.listsService.getDMBy(arr);
        if (dataDM.length > 0) {
            dataDM.forEach(function (element) {
                dataJoin.push(element);
            });
        }
        _countDm = dataDM.length;
        var dataRecord;
        /* Thông tư 78 */
        dataRecord = this.billService.getInvoiceResolverTT78(loaiHoaDon);
        if (dataRecord.length > 0) {
            dataRecord.forEach(function (element) {
                dataJoin.push(element);
            });
        }
        var dataForkJoin = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(dataJoin);
        return dataForkJoin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            var status = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusApi.success;
            var isEdit = false;
            for (var index = 0; index < rs.length; index++) {
                if (rs[index].status != _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusApi.success) {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs[index].message, "error");
                    if (loaiHoaDon == "01GTKT")
                        _this.router.navigate(['/system/bills-invoice-vat']);
                    else if (loaiHoaDon == "02GTTT")
                        _this.router.navigate(['/system/bills-invoice-sale']);
                    status = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusApi.error;
                    break;
                }
            }
            if (status == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].statusApi.success) {
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
                if (loaiHoaDon == "03XKNB" || loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HGDL04) {
                    var templates = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertTemplatesToBillResolver(rs[dataJoin.length - 1]);
                    return [
                        rs[_countDm].data.products,
                        templates,
                        isEdit,
                        rs[dataJoin.length - 2].data.wavehourses,
                    ];
                }
                else {
                    var templates = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertTemplatesToBillResolver(rs[dataJoin.length - 1]);
                    return [
                        rs[_countDm].data.products,
                        templates,
                        isEdit,
                    ];
                }
            }
            else
                return null;
        }));
    };
    InvoiceResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_bill_service__WEBPACK_IMPORTED_MODULE_4__["BillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["ListsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], InvoiceResolver);
    return InvoiceResolver;
}());



/***/ }),

/***/ "./src/app/modules/bill-invoice/shared/show-invoice.resolver.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/bill-invoice/shared/show-invoice.resolver.ts ***!
  \**********************************************************************/
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
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
    function ShowInvoiceResolver(billService, router, listsService, authService) {
        this.billService = billService;
        this.router = router;
        this.listsService = listsService;
        this.authService = authService;
    }
    ShowInvoiceResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var invoice_id = route.paramMap.get('invoiceId');
        var isViewTT32 = false;
        if (route.queryParams['status'] === 'viewInvTT32') {
            isViewTT32 = true;
        }
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var isTT78 = false;
        var infoDangKy = this.authService.getInfoRegister();
        if (infoDangKy && infoDangKy.id) {
            if (infoDangKy.status == "CHAP_NHAN")
                isTT78 = true;
        }
        if (isTT78 == true && isViewTT32)
            isTT78 = false;
        var loaiHoaDon = route.data.type;
        var _countDm = 0;
        var dataJoin = [];
        var dataDM;
        /**
         * Thiếu bên học sinh sinh viên, rà soát lại các hàm liên quan
         */
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
        ];
        dataDM = this.listsService.getDMBy(arr);
        if (dataDM.length > 0) {
            dataDM.forEach(function (element) {
                dataJoin.push(element);
            });
        }
        _countDm = dataDM.length;
        var dataRecord;
        dataRecord = this.billService.showInvoiceResolverTT78(invoice_id, loaiHoaDon);
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
                    if (loaiHoaDon == "01GTKT")
                        _this.router.navigate(['/system/bills-invoice-vat']);
                    else if (loaiHoaDon == "02GTTT")
                        _this.router.navigate(['/system/bills-invoice-sale']);
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
                if (loaiHoaDon == "03XKNB" || loaiHoaDon == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].loaihoadon.HGDL04) {
                    var templates = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToBillResolver(rs[dataJoin.length - 1]);
                    return [
                        rs[_countDm].data.products,
                        rs[dataJoin.length - 3].data.bill,
                        isEdit,
                        templates,
                        rs[dataJoin.length - 2].data.wavehourses,
                    ];
                }
                else {
                    var templates = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToBillResolver(rs[dataJoin.length - 1]);
                    return [
                        rs[_countDm].data.products,
                        rs[dataJoin.length - 2].data.bill,
                        isEdit,
                        templates,
                    ];
                }
            }
            else
                return null;
        }));
    };
    ShowInvoiceResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_bill_service__WEBPACK_IMPORTED_MODULE_6__["BillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["ListsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ShowInvoiceResolver);
    return ShowInvoiceResolver;
}());



/***/ })

}]);
//# sourceMappingURL=bill-invoice-bill-invoice-module.js.map