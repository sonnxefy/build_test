(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ticket-ticket-module"],{

/***/ "./src/app/modules/ticket/components/history-invoice/history-invoice.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/history-invoice/history-invoice.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.process_ticket}}</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"container-fluid\" style=\"margin-bottom: 20px;\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-7\">\r\n                    <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n                        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n                            <!-- mẫu vé -->\r\n                            <dxi-item [label]=\"{text: _translate.GRID.INVOICE.template_ticket }\" dataField=\"template\"\r\n                                [editorOptions]=\"{readOnly: true}\">\r\n                            </dxi-item>\r\n                            <!-- Số vé -->\r\n                            <dxi-item cssClass=\"invoice-number-create-invoice\" dataField=\"invoice_number\"\r\n                                [label]=\"{text: _translate.GRID.INVOICE.ticket_number}\"\r\n                                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                        </dxi-item>\r\n                        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n                            <!-- Ngày xuất vé -->\r\n                            <dxi-item dataField=\"invoice_date\" [label]=\"{text: _translate.GRID.INVOICE.ticket_date}\"\r\n                                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                            <!-- Mã số thuế -->\r\n                            <dxi-item dataField=\"buyer_tax_code\"\r\n                                [label]=\"{text: _translate.GRID.INVOICE.buyer_tax_code }\"\r\n                                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                        </dxi-item>\r\n                        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                            <!-- Tên khách hàng -->\r\n                            <dxi-item dataField=\"buyer_name\" [label]=\"{text: _translate.GRID.INVOICE.customer_name}\"\r\n                                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                        </dxi-item>\r\n                    </dx-form>\r\n                </div>\r\n                <div class=\"col-lg-5\">\r\n                    <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n                        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                            <dxi-item dataField=\"payment_method_name\"\r\n                                [label]=\"{text: _translate.CONTROLL.LABEL.payment_method}\"\r\n                                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                        </dxi-item>\r\n                        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                            <dxi-item dataField=\"buyer_email\" [label]=\"{text: 'Email'}\"\r\n                                [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n                        </dxi-item>\r\n                    </dx-form>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 link-send-invoice\">\r\n                    <div class=\"pull-right\">\r\n                        <a *ngIf=\"invoice.status == 'DA_XUAT'\" (click)=\"sendMail()\"\r\n                            href=\"javascript:void(0)\">{{_translate.CONTROLL.LABEL.send_ticket}}</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <dx-data-grid id=\"invoiceHistoryGrid\" [dataSource]=\"invoice_process\"\r\n            (onEditorPreparing)=\"onEditorPreparing($event)\" [showBorders]=\"true\" [wordWrapEnabled]=\"true\"\r\n            [showRowLines]=\"true\">\r\n            <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n            <dxi-column cellTemplate=\"stt\" caption=\"{{_translate.GRID.INVOICE_DETAILS.view_order}}\" width=\"80\"\r\n                alignment=\"center\"></dxi-column>\r\n            <dxi-column dataField=\"process_time\" caption=\"{{_translate.CONTROLL.LABEL.date_made}}\" width=\"180\"\r\n                dataType=\"datetime\" format=\"dd/MM/yyyy HH:mm:ss\" dateSerializationFormat=\"yyyy-MM-dd HH:mm:ss\"\r\n                alignment=\"center\"></dxi-column>\r\n            <dxi-column dataField=\"content\" cellTemplate=\"content\" caption=\"{{_translate.CONTROLL.LABEL.task}}\"\r\n                alignment=\"left\"></dxi-column>\r\n            <dxi-column dataField=\"user_name\" caption=\"{{_translate.CONTROLL.LABEL.person_made}}\"\r\n                alignment=\"left\"></dxi-column>\r\n            <div *dxTemplate=\"let d of 'stt'\">\r\n                <p>{{ d.rowIndex + 1 }}</p>\r\n            </div>\r\n            <div *dxTemplate=\"let d of 'content'\">\r\n                {{ d.data.content}}\r\n            </div>\r\n        </dx-data-grid>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" icon=\"{{_translate.ICONS.come_back }}\"\r\n            type=\"default\" (click)=\"bsModalRef.hide()\">\r\n        </dx-button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/ticket/components/history-invoice/history-invoice.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/history-invoice/history-invoice.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/ticket/components/history-invoice/history-invoice.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/history-invoice/history-invoice.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HistoryInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryInvoiceComponent", function() { return HistoryInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _sendEmail_send_email_send_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sendEmail/send-email/send-email.component */ "./src/app/modules/ticket/components/sendEmail/send-email/send-email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HistoryInvoiceComponent = /** @class */ (function () {
    function HistoryInvoiceComponent(authService, bsModalRef, vatService, modalService, bsModalSendMail, customersService) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.modalService = modalService;
        this.bsModalSendMail = bsModalSendMail;
        this.customersService = customersService;
        this.frmData = {};
        this._translate = this.authService.getTranslate();
    }
    HistoryInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadTableContent();
        var invoice = this.invoice;
        var template_code = invoice.template_code ? invoice.template_code : invoice.template.template_code;
        var invoice_series = invoice.invoice_series ? invoice.invoice_series : invoice.template.invoice_series;
        this.frmData.template = template_code + " - " + invoice_series;
        this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_4__(invoice.invoice_date).format('DD/MM/YYYY');
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
    HistoryInvoiceComponent.prototype.loadTableContent = function () {
        var _this = this;
        this.invoice_process = {};
        var sub = this.vatService.getInvoiceProccess(this.invoice.id).subscribe(function (rs) {
            var mapObj = {
                T: "; ",
            };
            _this.invoice_process = rs.data.invoice_process;
            if (_this.invoice_process && _this.invoice_process.length > 0) {
                _this.invoice_process.forEach(function (item) {
                    item.content = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(item.content).replace(/;/g, "; ");
                });
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    HistoryInvoiceComponent.prototype.sendMail = function () {
        var _this = this;
        var initialState = {
            invoice_id: this.invoice.id,
            email: this.email,
            customer_id: this.frmData.customer_id
        };
        this.bsModalSendMail = this.modalService.show(_sendEmail_send_email_send_email_component__WEBPACK_IMPORTED_MODULE_6__["SendEmailComponent"], { class: 'modal-md', initialState: initialState, backdrop: 'static', keyboard: false });
        this.modalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem == 'success_mail') {
                _this.loadTableContent();
            }
        });
    };
    HistoryInvoiceComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField === 'content' && e.parentType == "dataRow") {
            e.editorName = 'dxTextArea';
        }
    };
    HistoryInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history-invoice',
            template: __webpack_require__(/*! ./history-invoice.component.html */ "./src/app/modules/ticket/components/history-invoice/history-invoice.component.html"),
            styles: [__webpack_require__(/*! ./history-invoice.component.scss */ "./src/app/modules/ticket/components/history-invoice/history-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_3__["VatService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_2__["CustomersService"]])
    ], HistoryInvoiceComponent);
    return HistoryInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/ticket/components/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/ticket/components/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n    <app-search-ticket-advanced [listUser]=\"listUser\" (searchContentChange)=\"getSearch($event)\">\r\n    </app-search-ticket-advanced>\r\n  </div>\r\n  <div class=\"col-md-4\" style=\"max-height: 70px\">\r\n    <div class=\"list-header row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-right button-panel\" style=\"display: flex\">\r\n          <dx-button (click)=\"lapHoaDon()\" [(icon)]=\"_translate.ICONS.plus\" text=\"Lập vé\" type=\"default\"></dx-button>\r\n\r\n          <dx-button id=\"product3\" (click)=\"inhoadon()\" [(icon)]=\"_translate.ICONS.print\"\r\n            text=\"{{ _translate.CONTROLL.LABEL.print_ticket }}\" type=\"default\">\r\n          </dx-button>\r\n\r\n          <dx-menu [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\" submenuDirection=\"auto\"\r\n            (onItemClick)=\"itemExtrasClick($event)\" cssClass=\"button-dropdown-extend\">\r\n          </dx-menu>\r\n          <i [ngClass]=\"_translate.ICONS.setting\" (click)=\"settingColumn()\" class=\"icons-setting\" aria-hidden=\"true\"\r\n            ngbTooltip=\"This is a tooltip\"></i>\r\n          <dx-tooltip target=\".icons-setting\" showEvent=\"dxhoverstart\" hideEvent=\"dxhoverend\">\r\n            <span *dxTemplate=\"let data of 'content'\">\r\n              <span>Cấu hình ẩn hiển cột thông tin</span>\r\n            </span>\r\n          </dx-tooltip>\r\n          <!-- <img [src]=\"_translate.ICONS.setting\" (click)=\"settingColumn()\" class=\"icons-setting\" alt=\"\"\r\n                        srcset=\"\"> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerVat\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [showBorders]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\"\r\n  [columnAutoWidth]=\"true\" [columnResizingMode]=\"true\" [width]=\"'100%'\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\">\r\n  <!-- <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\">\r\n    </dxo-selection> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\" showAllText=\"{{ _translate.CONTROLL.COMBO.all }}\"></dxo-filter-row>\r\n\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n\r\n  <!-- Số vé -->\r\n  <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\" *ngIf=\"showColumn('ticket_number')\"\r\n    caption=\"{{ 'GRID.INVOICE.ticket_number' | translate }}\" minWidth=\"{{ _translate.GRID_WIDTH.so_hoa_don }}\"\r\n    alignment=\"center\" sortOrder=\"desc\" [sortIndex]=\"1\">\r\n  </dxi-column>\r\n\r\n  <!-- Mẫu vé -->\r\n  <dxi-column cellTemplate=\"templateCode\" dataField=\"template_code_temp\" [filterOperations]=\"['contains']\"\r\n    [allowSorting]=\"false\" [calculateFilterExpression]=\"calculateFilterTemplate\" *ngIf=\"showColumn('template_ticket')\"\r\n    caption=\"{{ 'GRID.INVOICE.template_ticket' | translate }}, {{\r\n      'GRID.INVOICE.invoice_series' | translate\r\n    }}\" minWidth=\"{{ _translate.GRID_WIDTH.mau_so_ky_hieu }}\" alignment=\"center\">\r\n  </dxi-column>\r\n\r\n  <!-- Ngày xuất vé -->\r\n  <dxi-column dataField=\"invoice_date\" caption=\"{{ 'CONTROLL.LABEL.ticket_date' | translate }}\"\r\n    *ngIf=\"showColumn('ticket_date')\" minWidth=\"{{ _translate.GRID_WIDTH.ngay_hoa_don }}\"\r\n    [editorOptions]=\"{ useMaskBehavior: true }\" dataType=\"date\" format=\"dd/MM/yyyy\" sortOrder=\"desc\" [sortIndex]=\"0\"\r\n    dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n  </dxi-column>\r\n\r\n  <!-- Mã số thuế -->\r\n  <dxi-column dataField=\"buyer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n    *ngIf=\"showColumn('buyer_tax_code')\" minWidth=\"{{ _translate.GRID_WIDTH.ma_so_thue }}\" alignment=\"left\">\r\n  </dxi-column>\r\n\r\n  <!-- Tên khách hàng -->\r\n  <dxi-column cellTemplate=\"customerName\" [filterOperations]=\"['contains']\"\r\n    [calculateFilterExpression]=\"calculateFilterExpression\" caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\"\r\n    alignment=\"left\" *ngIf=\"showColumn('customer_name')\" minWidth=\"200\">\r\n  </dxi-column>\r\n\r\n  <!-- Tên hàng hoá dịch vụ -->\r\n  <!-- <dxi-column cellTemplate=\"productName\" caption=\"{{ 'MENU.name_of_goods_and_service' | translate }}\" alignment=\"left\"\r\n        minWidth=\"200\" *ngIf=\"showColumn('name_of_goods_and_service')\">\r\n    </dxi-column> -->\r\n\r\n  <!-- Thành tiền -->\r\n  <dxi-column dataField=\"amount_string\" caption=\"{{ 'GRID.INVOICE_DETAILS.amount' | translate }}\" alignment=\"right\"\r\n    minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\" *ngIf=\"showColumn('amount')\">\r\n  </dxi-column>\r\n  <!-- Tiền thuế -->\r\n  <dxi-column dataField=\"total_amount_vat_string\" caption=\"{{ 'GRID.INVOICE_DETAILS.amount_vat' | translate }}\"\r\n    alignment=\"right\" minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\" *ngIf=\"showColumn('amount_vat')\">\r\n  </dxi-column>\r\n  <!-- Tổng tiền -->\r\n  <dxi-column dataField=\"total_payment_string\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\"\r\n    alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\" minWidth=\"{{ _translate.GRID_WIDTH.tong_tien }}\"\r\n    *ngIf=\"showColumn('total_payment')\">\r\n  </dxi-column>\r\n  <!-- Trạng thái gửi CQT -->\r\n  <dxi-column cellTemplate=\"statusSendTax\" dataField=\"send_department_status\" caption=\"Trạng thái gửi CQT\"\r\n    minWidth=\"{{ _translate.GRID_WIDTH.trang_thai_gui_mail }}\" *ngIf=\"showColumn('status_send_cqt')\" alignment=\"center\">\r\n    <dxo-lookup [dataSource]=\"trangThaiGuiCQTStatus\" valueExpr=\"code\" [displayExpr]=\"displayFunction\"></dxo-lookup>\r\n  </dxi-column>\r\n  <!-- Tình trạng xử lý -->\r\n  <dxi-column dataField=\"adjustment_type\" cellTemplate=\"statusInvoice\"\r\n    caption=\"{{ 'CONTROLL.LABEL.processing_status' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\" *ngIf=\"showColumn('status_process')\"\r\n    [allowFiltering]=\"false\">\r\n    <!-- <dxo-lookup [dataSource]=\"dsTinhTrangXuLy\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup> -->\r\n  </dxi-column>\r\n  <!-- Người xuất vé -->\r\n  <dxi-column [calculateDisplayValue]=\"calculateDisplayName\" [allowFiltering]=\"false\"\r\n    caption=\"{{ 'CONTROLL.LABEL.userTicket' | translate }}\" alignment=\"left\" minWidth=\"100\"\r\n    *ngIf=\"showColumn('userTicket')\">\r\n  </dxi-column>\r\n  <!-- Email, trạng thái hóa đơn -->\r\n  <dxi-column cellTemplate=\"actionEmail\" caption=\"{{ 'GRID.INVOICE.send_email_status' | translate }}\"\r\n    minWidth=\"{{ _translate.GRID_WIDTH.trang_thai_gui_mail }}\" alignment=\"center\"\r\n    *ngIf=\"showColumn('send_email_status')\">\r\n  </dxi-column>\r\n  <!-- Chức năng -->\r\n  <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{ _translate.GRID_WIDTH.hanh_dong }}\" alignment=\"center\">\r\n  </dxi-column>\r\n\r\n  <!-- template -->\r\n  <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number\r\n      }}<span *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.template_code }}</p>\r\n    <p>{{ d.data.invoice_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'productName'\">\r\n    <p>{{ getProductName(d.data) }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p *ngIf=\"d.data.status != 'GIU_SO'\">\r\n      {{ d.data.customer_name || d.data.buyer_name }}\r\n    </p>\r\n    <p *ngIf=\"d.data.status == 'GIU_SO'\">\r\n      {{\r\n      d.data.customer_name ||\r\n      d.data.buyer_name ||\r\n      _translate.GRID.INVOICE.invoice_wait_for_sign\r\n      }}\r\n    </p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    <a *ngIf=\"\r\n        d.data.send_department_status == 'DA_GUI_CQT' &&\r\n        d.data.is_invoice_with_code &&\r\n        d.data.xml_type == '3'\r\n      \" href=\"javascript:void(0)\">Đã gửi để cấp mã</a>\r\n    <a *ngIf=\"\r\n        d.data.send_department_status == 'DA_CAP' &&\r\n        d.data.is_invoice_with_code &&\r\n        d.data.xml_type == '3'\r\n      \" href=\"javascript:void(0)\">Đã cấp mã</a>\r\n    <a *ngIf=\"\r\n        d.data.send_department_status == 'KHONG_DU_DK_CAP_MA' &&\r\n        d.data.is_invoice_with_code &&\r\n        d.data.xml_type == '3'\r\n      \" href=\"javascript:void(0)\" style=\"color: red\" (click)=\"LydoKTiepNhan(d.data)\">Không đủ ĐK cấp mã</a>\r\n\r\n    <a *ngIf=\"\r\n        d.data.send_department_status == 'CHUA_GUI_CQT' &&\r\n        !d.data.is_invoice_with_code &&\r\n        d.data.xml_type == '3'\r\n      \" href=\"javascript:void(0)\">Chưa gửi CQT</a>\r\n    <a *ngIf=\"\r\n        d.data.send_department_status == 'DA_GUI_CQT' &&\r\n        !d.data.is_invoice_with_code &&\r\n        d.data.xml_type == '3'\r\n      \" href=\"javascript:void(0)\">Đã gửi CQT</a>\r\n    <a *ngIf=\"\r\n        d.data.send_department_status == 'DA_TIEP_NHAN' &&\r\n        !d.data.is_invoice_with_code &&\r\n        d.data.xml_type == '3'\r\n      \" href=\"javascript:void(0)\">CQT đã tiếp nhận</a>\r\n    <a *ngIf=\"\r\n        d.data.send_department_status == 'KHONG_HOP_LE' &&\r\n        !d.data.is_invoice_with_code &&\r\n        d.data.xml_type == '3'\r\n      \" href=\"javascript:void(0)\" style=\"color: red\" (click)=\"LydoKTiepNhan(d.data)\">CQT kiểm tra không hợp lệ\r\n    </a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionEmail'\">\r\n    <a *ngIf=\"\r\n        d.data.send_email_status == 'CHUA_GUI' && d.data.status != 'GIU_SO'\r\n      \" class=\"chua-gui-khach-hang gach-chan\" (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{\r\n      \"GRID.INVOICE.un_sent\" | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'GUI_LOI'\" style=\"color: red\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ \"GRID.INVOICE.send_mail_error\" | translate }}</a>\r\n    <a *ngIf=\"\r\n        d.data.send_email_status == 'CHUA_GUI' && d.data.status == 'GIU_SO'\r\n      \" class=\"cho-ky\" (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ \"GRID.INVOICE.wait_for_sign\" |\r\n      translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_GUI'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ \"GRID.INVOICE.wait_for_it\" | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_NHAN'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ \"GRID.INVOICE.received\" | translate }}</a>\r\n    <p *ngIf=\"!d.data.send_email_status\" href=\"javascript:void(0)\">\r\n      {{ trangthaihoadon(d.data) }}\r\n      <a *ngIf=\"\r\n          trangthaihoadon(d.data) == 'Lỗi ký HD' ||\r\n          trangthaihoadon(d.data) == 'Signed error'\r\n        \" class=\"gach-chan\" (click)=\"editNotSelect(d.data)\" href=\"javascript:void(0)\">({{ \"GRID.INVOICE.re_sign\" |\r\n        translate }})</a>\r\n    </p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{ _translate.CONTROLL.BUTTON.view_invoice }}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{ _translate.CONTROLL.BUTTON.edit }}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <a title=\"{{ _translate.CONTROLL.BUTTON.delete }}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <div class=\"dropdown\">\r\n      <a title=\"{{ _translate.CONTROLL.BUTTON.extend }}\" class=\"morongIcon actionIcon\" (click)=\"myFunction(d.data.id)\"\r\n        href=\"javascript:void(0)\"></a>\r\n      <div [id]=\"d.data.id\" class=\"dropdown-content\" [ngClass]=\"{'last-drodown':( pageSize - 1 == d.rowIndex || pageSize - 2 == d.rowIndex || pageSize - 3 == d.rowIndex) && pageSize > 4, 'small-grid': pageSize < 5}\">\r\n        <a (click)=\"inChuyenDoi(d.data)\" href=\"javascript:void(0)\">{{ \"CONTROLL.BUTTON.print_conversion\" | translate }}\r\n          <i [class]=\"_translate.ICONS.print\"></i></a>\r\n        <a (click)=\"copy(d.data)\" href=\"javascript:void(0)\">{{ \"CONTROLL.BUTTON.copy\" | translate }}\r\n          <i [class]=\"_translate.ICONS.copy\"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'statusInvoice'\">\r\n    <ng-container [ngSwitch]=\"d.data.adjustment_type\">\r\n      <p *ngSwitchCase=\"1\">{{ \"GRID.GENERAL.original_invoice\" | translate }}</p>\r\n      <p *ngSwitchCase=\"2\">{{ \"GRID.GENERAL.invoice_replaced\" | translate }}</p>\r\n      <p *ngSwitchCase=\"3\">\r\n        {{ \"GRID.GENERAL.invoice_replacement\" | translate }}\r\n      </p>\r\n      <p *ngSwitchCase=\"4\">{{ \"GRID.GENERAL.invoice_adjusted\" | translate }}</p>\r\n      <p *ngSwitchCase=\"5\">\r\n        {{ \"GRID.GENERAL.adjustment_invoice\" | translate }}\r\n      </p>\r\n      <p *ngSwitchCase=\"7\">{{ \"GRID.GENERAL.invoice_removed\" | translate }}</p>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{ info.column.caption }}</p>\r\n  </div>\r\n\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" cssClass=\"dxi-total-payment-total_payment_string\" [customizeText]=\"customizeText\" showInColumn=\"total_payment_string\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 35, 50, 100]\" [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n\r\n<app-download-pdf></app-download-pdf>"

/***/ }),

/***/ "./src/app/modules/ticket/components/index/index.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/ticket/components/index/index.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-section{margin-bottom:15px}.icons-setting{font-size:30px;color:#337ab7;margin-left:8px}.icons-setting:hover{cursor:pointer}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}.chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}.last-drodown{bottom:30px}.small-grid{position:fixed !important;right:39px !important}::ng-deep #gridContainerVat .dx-cell-focus-disabled{overflow:visible !important}.dropdown{position:relative}.dropdown .dropdown-content{position:absolute;z-index:100}\n"

/***/ }),

/***/ "./src/app/modules/ticket/components/index/index.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/ticket/components/index/index.component.ts ***!
  \********************************************************************/
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
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/download-pdf/download-pdf.component */ "./src/app/shared/components/download-pdf/download-pdf.component.ts");
/* harmony import */ var _shared_components_setting_column_setting_column_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/setting-column/setting-column.component */ "./src/app/shared/components/setting-column/setting-column.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _history_invoice_history_invoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../history-invoice/history-invoice.component */ "./src/app/modules/ticket/components/history-invoice/history-invoice.component.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _modules_ticket_shared_ticket_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/ticket/shared/ticket.service */ "./src/app/modules/ticket/shared/ticket.service.ts");
/* harmony import */ var _shared_components_preview_ticket_preview_ticket_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/components/preview-ticket/preview-ticket.component */ "./src/app/shared/components/preview-ticket/preview-ticket.component.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _sendEmail_send_email_ticket_send_email_ticket_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../sendEmail/send-email-ticket/send-email-ticket.component */ "./src/app/modules/ticket/components/sendEmail/send-email-ticket/send-email-ticket.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
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
    function IndexComponent(translate, authService, vatService, spinner, socketService, router, modalService, configsService, route, ticketService, templateService, invoiceService) {
        var _this = this;
        this.translate = translate;
        this.authService = authService;
        this.vatService = vatService;
        this.spinner = spinner;
        this.socketService = socketService;
        this.router = router;
        this.modalService = modalService;
        this.configsService = configsService;
        this.route = route;
        this.ticketService = ticketService;
        this.templateService = templateService;
        this.invoiceService = invoiceService;
        this.selectedRows = [];
        this.extras = [];
        this.configs = {};
        this.trangThaiGuiCQTStatus = [];
        this.footerSum = {};
        this.selectedItems = [];
        this.clickCurent = '';
        this.arrColumn = [];
        this.listUser = [];
        this.dsTinhTrangXuLy = [];
        this.objStatusBtn = {};
        this.customizeText = function (url) {
            _this.invoiceService.handleTotalGrid(url.value, _this.objStatusBtn, _this.dataGrid);
            return '';
        };
        this.calculateDisplayName = function (e) {
            var user = _this.listUser.find(function (u) { return u.id == e.user_id; });
            if (user)
                return user.name;
            return '';
        };
        this.displayFunction = function (item) {
            if (!item) {
                return 'Tất cả';
            }
            return item.name;
        };
        this._translate = this.authService.getTranslate();
        this._language = this.authService.getLanguage();
        translate.use(this._language);
        this.extras = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.extend,
                items: [
                    // {
                    //   id: 'SUA',
                    //   name: this._translate.CONTROLL.BUTTON.edit,
                    //   icon: this._translate.ICONS.edit
                    // },
                    {
                        id: 'XOA',
                        name: this._translate.CONTROLL.BUTTON.delete,
                        icon: this._translate.ICONS.delete
                    },
                    {
                        id: 'GUI_EMAIL',
                        name: this._translate.CONTROLL.LABEL.send_email,
                        icon: this._translate.ICONS.send_email
                    },
                    // {
                    //   id: 'TAI_HD_PDF',
                    //   name: this._translate.CONTROLL.BUTTON.tai_ve_pdf,
                    //   icon: this._translate.ICONS.download
                    // },
                    {
                        id: "TAI_HD_XML",
                        name: this._translate.CONTROLL.BUTTON.tai_ve_xml,
                        icon: this._translate.ICONS.xml
                    },
                ]
            }];
        this.loadList();
    }
    IndexComponent.prototype.settingColumn = function () {
        var _this = this;
        var initialState = {
            // isVisibleGhiVaThemMoi: false
            arrColumn: this.arrColumn
        };
        this.bsModalRef = this.modalService.show(_shared_components_setting_column_setting_column_component__WEBPACK_IMPORTED_MODULE_10__["SettingColumnComponent"], {
            class: 'modal-lg full-modal',
            initialState: initialState,
            backdrop: 'static',
            keyboard: false
        });
        var submodal = this.modalService.onHide.subscribe(function () {
            _this.configsService.getAll().subscribe(function (res) {
                var configs = res.data.configs;
                var con = configs.find(function (item) { return item.name == 'config_column_ticket_invoice'; });
                if (con && con.id) {
                    var data = {
                        config: {
                            value: JSON.stringify(_this.arrColumn)
                        }
                    };
                    _this.configsService.update(con.id, data).subscribe(function (response) {
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
                }
            });
            submodal.unsubscribe();
        });
    };
    IndexComponent.prototype.showColumn = function (code) {
        var item = this.arrColumn.find(function (i) { return i.code === code; });
        if (item)
            return item.show;
        return false;
    };
    IndexComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'SUA') {
            this.edit(null);
        }
        else if (e.itemData.id === 'XOA') {
            this.delete(null);
        }
        else if (e.itemData.id === 'GUI_EMAIL') {
            this.guibenmua(null);
        }
        else if (e.itemData.id == "TAI_HD_PDF") {
            this.taiHDPdf();
        }
        else if (e.itemData.id == "TAI_HD_XML") {
            this.taiHDXml();
        }
        else if (e.itemData.id === 'INCHUYENDOI') {
            this.inChuyenDoi(null);
        }
    };
    /* Kết nối đến socket  */
    IndexComponent.prototype.connectWebsocket = function () {
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
                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(data.Description, 'error');
                    _this.spinner.hide();
                }
            }
        });
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
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            else {
                ids = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; }).map(function (p) { return p.id; });
            }
            this.vatService.layCacHoaDonKySoHangLoat(ids, '').subscribe(function (rs) {
                if (rs[0].status === 'success') {
                    var initialState = {
                        invoiceList: rs[0].data.invoices,
                        configs: rs[1].data.configs
                    };
                    var modalSendEmail = _this.modalService.show(_sendEmail_send_email_ticket_send_email_ticket_component__WEBPACK_IMPORTED_MODULE_18__["SendEmailTicketComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-lg full-modal',
                        initialState: initialState
                    });
                    var subModal_1 = _this.modalService.onHide.subscribe(function () {
                        // if (modalSendEmail.content.successSaveItem) {
                        _this.selectedItems = [];
                        _this.selectedRows = [];
                        _this.loadList(_this.paramSearch);
                        subModal_1.unsubscribe();
                        // }
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
    /* Tải file xml vé*/
    IndexComponent.prototype.taiHDXml = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                var ids = [];
                ids = _lst.map(function (e) { return e.id; });
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                var sub_1 = this.vatService.xuatHDXml(ids).subscribe(function (rs) {
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
    // Tải file vé pdf
    IndexComponent.prototype.taiHDPdf = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                var ids = _lst.map(function (e) { return e.id; });
                this.downloadPdf.downloadPdf(ids, 'invoices', 'invoice', false);
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
    IndexComponent.prototype.loadList = function (params) {
        var params_temp = params ? params : '';
        this.dataSource = {};
        var _lst = this.vatService.getAllTicket(params_temp);
        this.dataSource.store = _lst;
    };
    IndexComponent.prototype.getProductName = function (data) {
        if (data.invoice_products && data.invoice_products.length > 0) {
            return data.invoice_products[0].product_name;
        }
        return '';
    };
    IndexComponent.prototype.calculateFilterTemplate = function (filterValue, selectedFilterOperation) {
        selectedFilterOperation = "contains";
        return [["template_code", selectedFilterOperation || '=', filterValue], 'or', ["invoice_series", selectedFilterOperation || '=', filterValue]];
    };
    IndexComponent.prototype.viewInvoice = function (content, typeView, hinhthucxuat, invoice_date) {
        var _this = this;
        if (typeView == "XEM_TRUOC_KHI_XUAT") {
            var pdf_file = content;
            var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_3__["VPreviewInvService"]._getUrlInvoice(pdf_file);
            this.checkSubmit = window.open(objectUrl, 'name', "width=" + screen.availWidth + ", height=" + screen.availHeight);
            this.checkSubmit.document.body.innerHTML = this._translate.NOTIFY.loading;
            this.checkSubmit.blur();
            var timer_1 = setInterval(function () {
                if (_this.checkSubmit.closed) {
                    clearInterval(timer_1);
                    var isCheck = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].getCookie('AK_SS_I');
                    _this.checkSubmit = undefined;
                    if (isCheck === 'CHECKED') {
                        _this.setUrlNavigate();
                        document.cookie = 'AK_SS_I=; path=/';
                        var status_1 = 'HUY';
                        _this.router.navigate(['/system/handle-report/', _this.dataInfor.id, status_1]);
                    }
                    else if (isCheck === 'CHECKED2') {
                        _this.setUrlNavigate();
                        document.cookie = 'AK_SS_I=; path=/';
                        var status_2 = 'THAY_THE';
                        _this.router.navigate(['/system/handle-report/', _this.dataInfor.id, status_2]);
                    }
                    else if (isCheck === 'CHECKED3') {
                        _this.setUrlNavigate();
                        document.cookie = 'AK_SS_I=; path=/';
                        var status_3 = 'DIEU_CHINH';
                        _this.router.navigate(['/system/handle-report/', _this.dataInfor.id, status_3]);
                    }
                    else if (isCheck === 'CHECKED4') {
                        _this.setUrlNavigate();
                        window.open('http://help.ihoadon.vn/huongdanv3/xulyhoadon/cactruonghop/1/', '_blank');
                        document.cookie = 'AK_SS_I=; path=/';
                    }
                }
            }, 500);
            var myPara = '<div class="design-button">' +
                '<div style="width: 50%; display: inline-block; float: left">' +
                '<div class="dropdown">' +
                '<button type="button" class="dropbtn button-content-style">' +
                '<a href="javascript:void(0)" class="text-button">Xử lý hóa đơn</a>' +
                '</button>' +
                '<div class="dropdown-content" style="left:0;">' +
                '<a href="javascript:void(0)" onclick="setConfirmInvoice()">Hủy bỏ hóa đơn</a>' +
                '<a href="javascript:void(0)" onclick="setConfirmInvoice2()">Thay thế hóa đơn</a>' +
                '<a href="javascript:void(0)" onclick="setConfirmInvoice3()">Điều chỉnh hóa đơn</a>' +
                '<a href="javascript:void(0)" onclick="setConfirmInvoice4()">Hướng dẫn xử lý</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div style="width: 50%; display: inline-block; float:rigth;">' +
                '<div style="float: right">' +
                '</div>' +
                '</div>' +
                '</div>';
            var myPara1 = '<div class="design-button">' +
                '<div style="width: 50%; display: inline-block; float: left">' +
                '<div class="dropdown">' +
                '<button type="button" class="dropbtn button-content-style">' +
                '<a href="javascript:void(0)" class="text-button">Xử lý hóa đơn</a>' +
                '</button>' +
                '<div class="dropdown-content" style="left:0;">' +
                '<a href="javascript:void(0)" onclick="setConfirmInvoice2()">Thay thế hóa đơn</a>' +
                '<a href="javascript:void(0)" onclick="setConfirmInvoice3()">Ðiều chỉnh hóa đơn</a>' +
                '<a href="javascript:void(0)" onclick="setConfirmInvoice4()">Hướng dẫn xử lý</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div style="width: 50%; display: inline-block; float:right;">' +
                '<div style="float: right">' +
                '</div>' +
                '</div>' +
                '</div>';
            this.checkSubmit.document.write("\n              <style type=\"text/css\" >\n                    .text-button{\n                        color: #fff;\n                        text-decoration: none;\n                    }\n                   .design-button{\n                        position: fixed;\n                        bottom: 0;\n                        left: 0;\n                        right: 0;\n                        padding: 9px 25px;\n                        background: white;\n                   }\n                   .button-content-style{\n                      background-color: #337ab7;\n                      color: #fff;\n                      border: 1px solid #2d6da3;\n                      margin: 0 10px;\n                      padding: 5px 10px 5px;\n                   }\n                   .dropdown {\n                    position: relative;\n                    display: inline-block;\n                   }\n                   .dropdown-content {\n                      display: none;\n                      position: absolute;\n                      bottom: 28px;\n                      background-color: #f9f9f9;\n                      min-width: 160px;\n                      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n                      z-index: 1;\n                    }\n                   .dropdown-content a {\n                      color: black;\n                      padding: 12px 16px;\n                      text-decoration: none;\n                      display: block;\n                   }\n                   .dropdown-content a:hover {background-color: #b5acac;}\n                   .dropdown:hover .dropdown-content {\n                      display: block;\n                    }\n                    .dropdown:hover .dropbtn {\n                      background-color: #2d6da3;\n                    }\n              </style>\n           <div>\n                <iframe width=\"100%\" height=\"94%\" style=\"padding-bottom: 29px\" src=\"" + objectUrl + "\"></iframe>\n           </div>\n            <script type=\"text/javascript\">\n              function setConfirmInvoice() {\n                document.cookie = \"AK_SS_I=CHECKED; path=/\";\n                window.close();\n              }\n              function setConfirmInvoice2() {\n                document.cookie = \"AK_SS_I=CHECKED2; path=/\";\n                window.close();\n              }\n              function setConfirmInvoice3() {\n                document.cookie = \"AK_SS_I=CHECKED3; path=/\";\n                window.close();\n              }\n              function setConfirmInvoice4() {\n                document.cookie = \"AK_SS_I=CHECKED4; path=/\";\n                window.close();\n              }\n              function closeWin(){\n                window.close();\n              }\n            </script>\n        ");
            this.checkSubmit.resizeTo(screen.availWidth, screen.availHeight);
            this.checkSubmit.focus();
            this.spinner.hide();
        }
        else if (typeView == "XEM_TRUOC") {
            var w = 1920, h = 900;
            w = window.screen.availWidth * 100 / 100;
            h = window.screen.availHeight * 93 / 100;
            var pdf_file = content;
            var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_3__["VPreviewInvService"]._getUrlInvoice(pdf_file);
            var win = window.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
            win.resizeTo(screen.availWidth, screen.availHeight);
            win.focus();
            this.spinner.hide();
        }
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
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.listUser = data.init.data.users ? data.init.data.users : [];
        });
        this.vatService.isCopy = false;
        this.configs = this.authService.getConfigs();
        this.ticketService.configs = this.configs;
        if (this.configs.config_column_ticket_invoice) {
            this.arrColumn = this.configs.config_column_ticket_invoice;
        }
        else {
            this.arrColumn = [
                {
                    name: this._translate.GRID.INVOICE.ticket_number,
                    code: 'ticket_number',
                    disable: true,
                    show: true
                },
                {
                    name: this._translate.GRID.INVOICE.template_ticket,
                    code: 'template_ticket',
                    disable: true,
                    show: true
                },
                {
                    name: this._translate.CONTROLL.LABEL.ticket_date,
                    code: 'ticket_date',
                    disable: true,
                    show: true
                },
                {
                    name: this._translate.GRID.INVOICE.buyer_tax_code,
                    code: 'buyer_tax_code',
                    disable: false,
                    show: false
                },
                {
                    name: this._translate.GRID.INVOICE.customer_name,
                    code: 'customer_name',
                    disable: false,
                    show: false
                },
                // {
                //   name: this._translate.MENU.name_of_goods_and_service,
                //   code: 'name_of_goods_and_service',
                //   disable: false,
                //   show: true
                // },
                {
                    name: this._translate.GRID.INVOICE_DETAILS.amount,
                    code: 'amount',
                    disable: false,
                    show: false
                },
                {
                    name: this._translate.GRID.INVOICE_DETAILS.amount_vat,
                    code: 'amount_vat',
                    disable: false,
                    show: false
                },
                {
                    name: this._translate.GRID.INVOICE.total_payment,
                    code: 'total_payment',
                    disable: false,
                    show: true
                },
                {
                    name: this._translate.CONTROLL.LABEL.status_send_cqt,
                    code: 'status_send_cqt',
                    disable: true,
                    show: true
                },
                {
                    name: this._translate.CONTROLL.LABEL.status_process,
                    code: 'status_process',
                    disable: false,
                    show: false
                },
                {
                    name: this._translate.CONTROLL.LABEL.userTicket,
                    code: 'userTicket',
                    disable: false,
                    show: false
                },
                {
                    name: this._translate.GRID.INVOICE.send_email_status,
                    code: 'send_email_status',
                    disable: true,
                    show: true
                },
            ];
        }
        this.infoDangKy = this.authService.getInfoRegister();
        this.trangThaiGuiCQTStatus = _core_index__WEBPACK_IMPORTED_MODULE_3__["VSelectBoxService"].statusTaxAuthorities(this._translate);
        this.dsTinhTrangXuLy = _core_index__WEBPACK_IMPORTED_MODULE_3__["VSelectBoxService"]._adjustmentTypes(this._translate);
        this.connectWebsocket();
    };
    IndexComponent.prototype.inhoadon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = lodash__WEBPACK_IMPORTED_MODULE_19__["cloneDeep"](this.selectedItems);
                if (this.checkInHoaDon()) {
                    this.inTungHoaDon();
                }
                else {
                    this.selectedItems = data;
                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.not_print_ticket, 'error');
                }
                return [2 /*return*/];
            });
        });
    };
    IndexComponent.prototype.inTungHoaDon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, invoiceTemplate, invoiceTicket_1, is_multi_product_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        invoiceTemplate = null;
                        if (this.selectedItems.length > 0) {
                            invoiceTicket_1 = this.selectedItems.pop();
                            is_multi_product_1 = false;
                            this.templateService.show(invoiceTicket_1.template_id).toPromise().then(function (rs) {
                                if (rs.status == "success") {
                                    invoiceTemplate = rs.data.template;
                                    var sub = _this.vatService.view(invoiceTicket_1.id, true).subscribe(function (rs) {
                                        if (rs.status === 'success') {
                                            if (rs.data.data.item && rs.data.data.item.length > 0) {
                                                var invoice = rs.data.data.item[0];
                                                var rawHtml = _this.ticketService.createFormTypeBase64(invoice, invoiceTemplate, is_multi_product_1, { inVe: true });
                                                var html = Base64.encode(rawHtml);
                                                _this.socketService.inFileHtml(function () { return _this.connectWebsocket(); }, html);
                                                setTimeout(function () {
                                                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                                                }, 300);
                                            }
                                        }
                                        else {
                                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                                        }
                                    }, function (err) {
                                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(err.message, 'error');
                                    }, function () {
                                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                                        _this.inTungHoaDon();
                                    });
                                }
                            }).catch(function (err) {
                                _this.inTungHoaDon();
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.checkInHoaDon = function () {
        var statusCheck = false;
        var data = this.selectedItems.filter(function (item) { return item.send_department_status; });
        if (data.length > 0) {
            if (this.infoDangKy.is_invoice_with_code) {
                data = data.filter(function (item) { return item.send_department_status == 'DA_CAP'; });
                if (data.length > 0)
                    statusCheck = true;
            }
            else if (this.infoDangKy.is_invoice_no_code) {
                data = data.filter(function (item) { return ['CHUA_GUI_CQT', 'DA_GUI_CQT', 'DA_TIEP_NHAN'].includes(item.send_department_status); });
                if (data.length > 0)
                    statusCheck = true;
            }
        }
        this.selectedItems = data;
        return statusCheck;
    };
    IndexComponent.prototype.LydoKTiepNhan = function (data) {
        var lstErr = JSON.parse(data.error_content_invoice);
        var initialState = {
            lstErr: lstErr,
            notifyType: "THONG_BAO_LOI_CQT"
        };
        this.modalService.show(_shared_components__WEBPACK_IMPORTED_MODULE_8__["SendDataForTaxComponent"], {
            backdrop: 'static',
            keyboard: true,
            class: 'modal-lg modal-margin-width',
            initialState: initialState
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            subModal.unsubscribe();
        });
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType == 'data') {
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
    IndexComponent.prototype.lapHoaDon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        this.router.navigate(['system/ticket-invoice/create']);
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.sendInvoice = function (id) {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var sub = this.vatService.showToSendInvoice(id).subscribe(function (rs) {
            if (rs.status == 'success') {
                var initialState = {
                    invoice: rs.data.invoice,
                };
                _this.bsModalRef = _this.modalService.show(_history_invoice_history_invoice_component__WEBPACK_IMPORTED_MODULE_13__["HistoryInvoiceComponent"], {
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
    IndexComponent.prototype.view = function (data, inChuyenDoi) {
        var _this = this;
        if (inChuyenDoi === void 0) { inChuyenDoi = false; }
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        if (data.id) {
            var temp = this.templateService.show(data.template_id).subscribe(function (rbs) {
                if (rbs.status === 'success') {
                    var invoiceTemplate_1 = rbs.data.template;
                    if (inChuyenDoi) {
                        var sub_2 = _this.vatService.inChuyenDoiInvoiceImport([data.id], false, { view_html: 1 }).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                _this.showModalHtml(rs, invoiceTemplate_1, inChuyenDoi);
                            }
                        }, function (err) { }, function () {
                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                            sub_2.unsubscribe();
                        });
                    }
                    else {
                        var sub_3 = _this.vatService.view(data.id, true).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                _this.showModalHtml(rs, invoiceTemplate_1, inChuyenDoi);
                            }
                        }, function (err) { }, function () {
                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                            sub_3.unsubscribe();
                        });
                    }
                }
            });
        }
    };
    IndexComponent.prototype.showModalHtml = function (rs, invoiceTemplate, inChuyenDoi) {
        if (rs.data.data.item && rs.data.data.item.length > 0) {
            var invoice = rs.data.data.item[0];
            // Sửa is_multi_product nếu sau này mở rộng ra nhiều hh/1 vé
            var is_multi_product = false;
            var rawHtml = this.ticketService.createFormTypeBase64(invoice, invoiceTemplate, is_multi_product, { inChuyenDoi: inChuyenDoi });
            var initialState = {
                dataPreview: rawHtml + '</html>',
                isPreview: true,
                content_invoice: {
                    'invoice_date': this.ticketService.invoice_date
                }
            };
            this.bsModalRef = this.modalService.show(_shared_components_preview_ticket_preview_ticket_component__WEBPACK_IMPORTED_MODULE_16__["PreviewTicketComponent"], {
                class: 'modal-sm full-modal-ticket1',
                initialState: initialState,
                backdrop: 'static',
                keyboard: false
            });
            var submodal_1 = this.modalService.onHide.subscribe(function () {
                submodal_1.unsubscribe();
            });
        }
    };
    IndexComponent.prototype.copy = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, row, sub;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.hoadonbanra)];
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
                                    rs.data.invoice.time_print_conversion = null;
                                    // rs.data.invoice.extend_json_invoice = null;
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
                                _this.router.navigate(['system/ticket-invoice/create']);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.inChuyenDoi = function (data) {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (data.status == 'DA_XUAT') {
            this.view(data, true);
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.not_print_convert, 'error');
        }
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
    IndexComponent.prototype.xemhoadonPDF = function (rs) {
        var _this = this;
        //Xem hóa đơn từ server
        if (this.configs.system_parameter.display_template_from_server) {
            var w = 1920, h = 900;
            w = window.screen.availWidth * 100 / 100;
            h = window.screen.availHeight * 93 / 100;
            var pdf_file = rs.data.invoice.pdf_file;
            var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_3__["VPreviewInvService"]._getUrlInvoice(pdf_file);
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
    // Chọn đối tượng trong grid
    IndexComponent.prototype.selectionChanged = function (data) {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        this.selectedItems = data.selectedRowsData;
    };
    IndexComponent.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, status_4, ids_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.selectedItems.length || data) {
                            status_4 = '';
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
                                    _this.vatService.delete(ids_1).subscribe(function (rs) {
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
    IndexComponent.prototype.edit = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee, rowData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.hoadonbanra)];
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
                                }
                            }
                        }
                        if (rowData) {
                            this.router.navigate(["/system/ticket-invoice/" + _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rowData.id)]);
                        }
                        return [2 /*return*/];
                }
            });
        });
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
    IndexComponent.prototype.editNotSelect = function (row) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_config_sEnum__WEBPACK_IMPORTED_MODULE_2__["sEnum"].initial_fee.hoadonbanra)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (row.status === 'DA_XUAT') {
                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                        }
                        else {
                            this.router.navigate(["/system/ticket-invoice/" + row.id]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.calculateFilterExpression = function (filterValue, selectedFilterOperation) {
        selectedFilterOperation = "contains";
        return [["customer_name_temp", selectedFilterOperation || '=', filterValue], 'or', ["buyer_name_temp", selectedFilterOperation || '=', filterValue]];
    };
    IndexComponent.prototype.viewDetailInvoice = function (row) {
        this.router.navigate(["/system/ticket-invoice/" + row.id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_21__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_21__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_9__["DownloadPdfComponent"]),
        __metadata("design:type", _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_9__["DownloadPdfComponent"])
    ], IndexComponent.prototype, "downloadPdf", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/ticket/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/ticket/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _core_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"],
            _core_services__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsModalService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_14__["ConfigsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _modules_ticket_shared_ticket_service__WEBPACK_IMPORTED_MODULE_15__["TicketService"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_17__["TemplateService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_20__["InvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/ticket/components/invoice/invoice.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ticket/components/invoice/invoice.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"font-weight: bold; font-size: 16px; text-align: center; padding: 20px 0px;\">\r\n  {{_translate.MENU.electronic_ticket | uppercase}}</h1>\r\n\r\n<form>\r\n  <div class=\"ticket-container\">\r\n    <!-- Thông tin trên hóa đơn -->\r\n    <div class=\"row invoice-form\">\r\n      <div class=\"col-md-8\">\r\n        <dx-form tabIndex=\"formLeft\" [formData]=\"frmData\" validationGroup=\"formData\">\r\n\r\n          <!-- Đơn vị tiền tệ -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" [cssClass]=\"cssClass.dvtt\">\r\n            <dxi-item [template]=\"'templateCurrency'\">\r\n              <dxo-label text=\"Đơn vị tiền tệ\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <!-- Mẫu vé/nhập thông tin bên mua -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n            <dxi-item dataField=\"template_id\" editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: select.templates, onValueChanged: onChangeTem, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.ticket_template }}\"></dxo-label>\r\n              <dxi-validation-rule *ngIf=\"!isGhiTam\" type=\"required\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.ticket_template }} {{ _translate.VALIDATION.required }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item dataField=\"buyer_exten\" editorType=\"dxCheckBox\" cssClass=\"buyer_exten max_right\"\r\n              [editorOptions]=\"{ text: _translate.CONTROLL.LABEL.buyer_exten, onValueChanged: onChangeBuyerInfo}\">\r\n              <dxo-label text=\" \" [showColon]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n\r\n          <!-- Mã số thuế, mã khách hàng -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" [cssClass]=\"cssClass.buyerInfo\">\r\n            <dxi-item [template]=\"'templateTaxCode'\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.tax_code}}\">\r\n              </dxo-label>\r\n            </dxi-item>\r\n            <dxi-item [template]=\"'templateCustomerCode'\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_code}}\">\r\n              </dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n\r\n          <!-- Tên đơn vị -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\" [cssClass]=\"cssClass.buyerInfo\">\r\n            <dxi-item dataField=\"customer_name\" [editorOptions]=\"{onValueChanged: customerChanged}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.customer_name}}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n\r\n          <!-- Họ tên người mua/số đt -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" [cssClass]=\"cssClass.buyerInfo\">\r\n            <dxi-item dataField=\"buyer_name\" [editorOptions]=\"{onValueChanged: customerChanged}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.buyer_name }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item dataField=\"buyer_mobile\" cssClass=\"max_right\" [editorOptions]=\"{onValueChanged: customerChanged}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.phone }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.phone\"\r\n                message=\"{{ _translate.CONTROLL.LABEL.phone }} {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n          </dxi-item>\r\n\r\n          <!-- Địa chỉ -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\" [cssClass]=\"cssClass.buyerInfo\">\r\n            <dxi-item dataField=\"buyer_address\" [editorOptions]=\"{onValueChanged: customerChanged}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.buyer_address }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n\r\n          <!-- Trường mở rộng -->\r\n          <dxi-item [cssClass]=\"cssClass.buyerInfo\">\r\n            <app-form-extend #formExtend_bm [disableForm]=\"ttDaXuatHoaDon\" [formData]=\"frmData\"\r\n              [customerTempt]=\"customerTempt_bm\" [formItems]=\"formItems_bm\" [is_element_child]=\"true\"\r\n              [typeOptions]=\"'invoice_options'\"></app-form-extend>\r\n          </dxi-item>\r\n\r\n          <!-- email -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item [label]=\"{text: 'Email'}\" cssClass=\"max_left\">\r\n              <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n                <div\r\n                  class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n                  <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                    <app-tag-input-email [variableName]=\"this.emails\" (numberGenerated)=\"renderDataEmail($event)\">\r\n                    </app-tag-input-email>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </dxi-item>\r\n          </dxi-item>\r\n\r\n\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\" [cssClass]=\"cssClass.is_multi_product\">\r\n            <!-- Tên hàng hoá dịch vụ -->\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item>\r\n                <dxo-label text=\"{{ _translate.MENU.name_of_goods_and_service }}\"></dxo-label>\r\n                <div *dxTemplate=\"let d of 'templateProductName'\">\r\n                  <dx-autocomplete valueExpr=\"name\" placeholder=\"Nhập tên hàng hóa, dịch vụ...\"\r\n                    [dataSource]=\"productArray\" [(value)]=\"frmData.invoice_products[0].product_name\"\r\n                    (onItemClick)=\"onItemClick($event)\" (onFocusOut)=\"onFocusOut($event)\">\r\n                    <div *dxTemplate=\"let item of 'item'\">\r\n                      <span>{{ item.name }}</span>\r\n                    </div>\r\n                  </dx-autocomplete>\r\n                </div>\r\n              </dxi-item>\r\n            </dxi-item>\r\n            <!-- Trường mở rộng -->\r\n            <dxi-item>\r\n              <app-form-extend #formExtend_hh [disableForm]=\"ttDaXuatHoaDon\" [formData]=\"frmData\"\r\n                [customerTempt]=\"customerTempt_hh\" [formItems]=\"formItems_hh\" [is_element_child]=\"true\"\r\n                [typeOptions]=\"'extension'\"></app-form-extend>\r\n            </dxi-item>\r\n\r\n            <!-- Hđ gtgt -->\r\n            <!-- Đơn giá/thuế suất -->\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\" [cssClass]=\"cssClass.isHdGTGT\">\r\n              <dxi-item dataField=\"invoice_products[0].price\" editorType=\"dxNumberBox\"\r\n                [editorOptions]=\"{onValueChanged: onChangePrice, format: '0,###', useMaskBehavior:true, showClearButton: true}\"\r\n                cssClass=\"format-right\">\r\n                <dxo-label text=\"{{ _translate.GRID.INVOICE_DETAILS.price }}\"></dxo-label>\r\n                <dxi-validation-rule *ngIf=\"!isGhiTam\" type=\"required\"\r\n                  message=\"{{ _translate.GRID.INVOICE_DETAILS.price }} {{ _translate.VALIDATION.required }}\">\r\n                </dxi-validation-rule>\r\n              </dxi-item>\r\n              <dxi-item dataField=\"invoice_products[0].vat\" editorType=\"dxSelectBox\"\r\n                [editorOptions]=\"{items: select.vats, onValueChanged: onChangeVAT, displayExpr: 'name', valueExpr: 'code'}\">\r\n                <dxo-label text=\"{{ _translate.GRID.INVOICE_DETAILS.vat }}\"></dxo-label>\r\n                <dxi-validation-rule *ngIf=\"!isGhiTam\" type=\"required\"\r\n                  message=\"{{ _translate.GRID.INVOICE_DETAILS.vat }} {{ _translate.VALIDATION.required }}\">\r\n                </dxi-validation-rule>\r\n              </dxi-item>\r\n            </dxi-item>\r\n            <!-- Tiền thuế/tổng tiền -->\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\" [cssClass]=\"cssClass.isHdGTGT\">\r\n              <dxi-item dataField=\"invoice_products[0].amount_vat\" cssClass=\"amount_vat format-right\"\r\n                editorType=\"dxNumberBox\" [editorOptions]=\"{format: '0,###', showClearButton: true}\">\r\n                <dxo-label text=\"{{ _translate.GRID.INVOICE_DETAILS.amount_vat }}\"></dxo-label>\r\n                <!-- <dxi-validation-rule type=\"required\"\r\n                  message=\"{{ _translate.GRID.INVOICE_DETAILS.amount_vat }} {{ _translate.VALIDATION.required }}\">\r\n                </dxi-validation-rule> -->\r\n              </dxi-item>\r\n              <dxi-item cssClass=\"format-right\" dataField=\"invoice_products[0].amount_after_vat\"\r\n                editorType=\"dxNumberBox\" [editorOptions]=\"{format: '#,###', onValueChanged: changeTotalPayment}\">\r\n                <dxo-label text=\"{{ _translate.GRID.INVOICE_DETAILS.total_money }}\"></dxo-label>\r\n                <dxi-validation-rule *ngIf=\"!isGhiTam\" type=\"required\"\r\n                  message=\"{{ _translate.GRID.INVOICE_DETAILS.total_money }} {{ _translate.VALIDATION.required }}\">\r\n                </dxi-validation-rule>\r\n              </dxi-item>\r\n            </dxi-item>\r\n\r\n            <!-- hđ bán hàng -->\r\n            <!-- Đơn giá -->\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\" [cssClass]=\"cssClass.isHdBH\">\r\n              <dxi-item dataField=\"invoice_products[0].price\" cssClass=\"format-right\" editorType=\"dxNumberBox\"\r\n                [editorOptions]=\"{format: '#,###'}\">\r\n                <dxo-label text=\"{{ _translate.GRID.INVOICE_DETAILS.price }}\"></dxo-label>\r\n                <dxi-validation-rule *ngIf=\"!isGhiTam\" type=\"required\"\r\n                  message=\"{{ _translate.GRID.INVOICE_DETAILS.price }} {{ _translate.VALIDATION.required }}\">\r\n                </dxi-validation-rule>\r\n              </dxi-item>\r\n            </dxi-item>\r\n            <!-- Hóa đơn bán hàng NQ 43 -->\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\" [cssClass]=\"cssClass.isHdBH\">\r\n              <dxi-item [template]=\"'templateCheckbox43'\">\r\n                <dxo-label text=\" \" [showColon]=\"false\"></dxo-label>\r\n              </dxi-item>\r\n            </dxi-item>\r\n            <!-- Tỉ lệ % trên doanh thu/Số tiền giảm theo nghị quyết -->\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\" [cssClass]=\"cssClass.nq43\">\r\n              <dxi-item [template]=\"'templateSalesPercentage'\">\r\n                <dxo-label\r\n                  text=\"{{ _translate.CONTROLL.LABEL.sales_percentage }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"></dxo-label>\r\n              </dxi-item>\r\n              <dxi-item dataField=\"money_resolution_43\" editorType=\"dxNumberBox\" [editorOptions]=\"{format: '#,###'}\"\r\n                cssClass=\"max_right format-right\">\r\n                <dxo-label text=\"Số tiền giảm theo NQ\"></dxo-label>\r\n                <dxi-validation-rule *ngIf=\"!isGhiTam\" type=\"required\"\r\n                  message=\"Số tiền giảm theo NQ {{ _translate.VALIDATION.required }}\">\r\n                </dxi-validation-rule>\r\n              </dxi-item>\r\n            </dxi-item>\r\n\r\n            <!-- Tổng tiền -->\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\" [cssClass]=\"cssClass.isHdBH\">\r\n              <dxi-item dataField=\"invoice_products[0].amount_after_vat\" cssClass=\"format-right\"\r\n                editorType=\"dxNumberBox\" [editorOptions]=\"{format: '#,###', onValueChanged: changeTotalPayment}\">\r\n                <dxo-label text=\"{{ _translate.GRID.INVOICE_DETAILS.total_money }}\"></dxo-label>\r\n                <dxi-validation-rule *ngIf=\"!isGhiTam\" type=\"required\"\r\n                  message=\"{{ _translate.GRID.INVOICE_DETAILS.total_money }} {{ _translate.VALIDATION.required }}\">\r\n                </dxi-validation-rule>\r\n              </dxi-item>\r\n            </dxi-item>\r\n\r\n\r\n            <!-- Số tiền bằng chữ -->\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item dataField=\"total_payment_in_word\">\r\n                <dxo-label text=\"{{ _translate.CONTROLL.LABEL.total_payment_in_word }}\"></dxo-label>\r\n                <dxi-validation-rule *ngIf=\"!isGhiTam\" type=\"required\"\r\n                  message=\"{{ _translate.CONTROLL.LABEL.total_payment_in_word }} {{ _translate.VALIDATION.required }}\">\r\n                </dxi-validation-rule>\r\n              </dxi-item>\r\n            </dxi-item>\r\n          </dxi-item>\r\n\r\n\r\n          <!-- Template -->\r\n          <!-- Mã số thuế -->\r\n          <div *dxTemplate=\"let d of 'templateTaxCode'\"\r\n            style=\"display: grid;grid-template-columns: 1fr auto;width: 100%;\">\r\n            <dx-autocomplete valueExpr=\"tax_code\" placeholder=\"Tìm kiếm...\" [dataSource]=\"tax_codes\"\r\n              [(value)]=\"frmData.buyer_tax_code\" (onItemClick)=\"taxCodeChoose($event)\"\r\n              (onFocusOut)=\"updateTaxcodeInfo($event)\">\r\n              <div *dxTemplate=\"let item of 'item'\">\r\n                <span>{{item.tax_code}}: {{ item.name }}</span>\r\n              </div>\r\n            </dx-autocomplete>\r\n            <button (click)=\"searchTaxCode()\" type=\"button\" class=\"button-tax-code\">\r\n              <i class=\"{{_translate.ICONS.search}}\" style=\"font-size: 22px;\"></i>\r\n            </button>\r\n          </div>\r\n          <!-- Mã khách hàng -->\r\n          <div *dxTemplate=\"let d of 'templateCustomerCode'\"\r\n            style=\"display: grid;grid-template-columns: 1fr auto;width: 100%;\">\r\n            <dx-autocomplete valueExpr=\"code\" placeholder=\"Tìm kiếm...\" [dataSource]=\"customer_codes\"\r\n              [(value)]=\"frmData.customer_code\" (onItemClick)=\"customerCodeChoose($event)\"\r\n              (onFocusOut)=\"updateCustomerInfo($event)\">\r\n              <div *dxTemplate=\"let item of 'item'\">\r\n                <span>{{item.code}}: {{ item.name }}</span>\r\n              </div>\r\n            </dx-autocomplete>\r\n            <button (click)=\"editTaxCode()\" type=\"button\" class=\"button-tax-code\">\r\n              <i class=\"dx-icon fa fa-plus-circle icon-size\"></i>\r\n            </button>\r\n          </div>\r\n\r\n          <!-- Check box NQ43 -->\r\n          <div *dxTemplate=\"let d of 'templateCheckbox43'\"\r\n            style=\"display: grid;grid-template-columns: 1fr auto;width: 100%;\">\r\n            <dx-check-box style=\"margin-right: 20px\" [(value)]=\"frmData.is_resolution_43\"\r\n              text=\"{{ _translate.THONG_TIN.giam_thue_theo_nq43 }}\"\r\n              (onValueChanged)=\"_changeNQ43($event)\"></dx-check-box>\r\n          </div>\r\n\r\n          <!-- Tỉ lệ % trên doanh thu -->\r\n          <div *dxTemplate=\"let d of 'templateSalesPercentage'\"\r\n            style=\"display: flex; justify-content: space-between;flex-wrap: nowrap; transform: translateX(-32px);width: calc(100% + 32px);\">\r\n            <img id=\"link14\" (click)=\"isDisplayGuideSale=!isDisplayGuideSale\"\r\n              style=\"cursor: pointer; width: 15px; height: 15px; margin-right: 17px;\"\r\n              src=\"assets\\img\\icons\\Icon_Information.png\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n            <dx-popover target=\"#link14\" position=\"top\" [width]=\"350\" [(visible)]=\"isDisplayGuideSale\">\r\n              <div *dxTemplate=\"let data of 'content'\">\r\n                <p>- 1% : Phân phối, cung cấp hàng hóa dịch vụ</p>\r\n                <p>- 5% : Dịch vụ xây dựng không bao thầu nguyên vật liệu</p>\r\n                <p>- 3% : Sản xuất, vận tải, dịch vụ có gắn với hàng hóa, xây dựng có bao thầu nguyên vật liệu</p>\r\n                <p>- 2% : Hoạt động kinh doanh khác</p>\r\n              </div>\r\n            </dx-popover>\r\n            <dx-number-box class=\"ti_le_phan_tram\" [(value)]=\"frmData.sales_percentage\"\r\n              (onValueChanged)=\"onChangeSalePercen($event)\"></dx-number-box>\r\n            <p style=\"margin-left: 5px;margin-top: 5px;\"> %</p>\r\n          </div>\r\n\r\n          <!-- Đơn vị tiền tệ -->\r\n          <div *dxTemplate=\"let d of 'templateCurrency'\" style=\"width: 100%;\" class=\"dvtt\">\r\n            <dx-check-box [(value)]=\"is_currency\" (onValueChanged)=\"changeCurrency($event)\"></dx-check-box>\r\n            <dx-text-box *ngIf=\"is_currency\" [(value)]=\"currency_name\"\r\n              placeholder=\"{{_translate.CONTROLL.LABEL.enter_currency}}\">\r\n            </dx-text-box>\r\n          </div>\r\n\r\n          <!-- Hàng hóa -->\r\n          <div *dxTemplate=\"let d of 'templateProductName'\">\r\n            <dx-autocomplete valueExpr=\"name\" placeholder=\"Nhập tên loại phí, lệ phí...\" [dataSource]=\"feeArray\"\r\n              [(value)]=\"frmData.fee_name\" [readOnly]=\"readOnlyFields()\" (onItemClick)=\"feeChoose($event)\">\r\n              <div *dxTemplate=\"let item of 'item'\">\r\n                <span>{{ item.name }}</span>\r\n              </div>\r\n            </dx-autocomplete>\r\n          </div>\r\n\r\n        </dx-form>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <dx-form tabIndex=\"formRight\" [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item [cssClass]=\"cssClass.dvtt\" itemType=\"empty\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"itemEmpty\"></dxi-item>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <!-- ngày xuất vé -->\r\n            <dxi-item dataField=\"invoice_date\" editorType=\"dxDateBox\"\r\n              [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', disabled: disableInvoiceDate , onValueChanged: changeDateTime}\">\r\n              <dxo-label text=\"{{ _translate.GRID.INVOICE.ticket_date }}\"></dxo-label>\r\n            </dxi-item>\r\n            <!-- Số vé -->\r\n            <dxi-item cssClass=\"so-bien-lai\" dataField=\"invoice_number\"\r\n              [editorOptions]=\"{ readOnly: true, format:'#,###'}\" editorType=\"dxNumberBox\">\r\n              <dxo-label text=\"{{ _translate.GRID.INVOICE.ticket_number }}\"></dxo-label>\r\n            </dxi-item>\r\n            <!-- Hình thức thanh toán -->\r\n            <dxi-item dataField=\"payment_method_name\" editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: select.payment_method_names,onValueChanged: paymentMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.payment_method }}\"></dxo-label>\r\n            </dxi-item>\r\n            <!-- Loại tiền -->\r\n            <dxi-item dataField=\"currency_code\" editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: select.currency_codes, onValueChanged: currencyCodeChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.currency_code }}\"></dxo-label>\r\n            </dxi-item>\r\n            <!-- Tỷ giá -->\r\n            <dxi-item dataField=\"currency_rate\" editorType=\"dxNumberBox\"\r\n              [editorOptions]=\"{disabled: frmData.currency_code == 'VND', format: '#,###'}\">\r\n              <dxo-label text=\"{{ _translate.CONTROLL.LABEL.currency_rate }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cập nhật thông tin khách hàng -->\r\n    <dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n      [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n      <div *dxTemplate=\"let data of 'content'\">\r\n        <p style=\"margin-bottom: 35px;\">{{ _translate.CONFIRM.update_customer }}</p>\r\n        <div class=\"pull-right\">\r\n          <dx-button (click)=\"capNhatDmKhachHang()\" text=\"{{ _translate.CONTROLL.LABEL.update }}\"\r\n            type=\"default\"></dx-button>\r\n          <dx-button (click)=\"huy()\" text=\"{{ _translate.CONTROLL.BUTTON.cancel }}\" type=\"default\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </dx-popup>\r\n\r\n    <div [ngClass]=\"{'hidden': !is_multi_product}\">\r\n      <app-product-grip></app-product-grip>\r\n    </div>\r\n    <div class=\"row button-action\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n          <!-- Xem trước vé -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" (click)=\"preview()\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.preview_ticket }}\" type=\"default\"></dx-button>\r\n          <!-- Xem vé -->\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"view()\" [(icon)]=\"this._translate.ICONS.view\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.view_ticket }}\" type=\"default\"></dx-button>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n          <!-- Xuất vé -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" disableDoubleClick appScrollToInvalid text=\"{{ _translate.CONTROLL.LABEL.export_ticket }}\"\r\n            [(icon)]=\"this._translate.ICONS.export_inv\" (click)=\"eSubmit('XUAT',true)\" type=\"default\"\r\n            validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n          </dx-button>\r\n          <!-- Xuất và in -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" appScrollToInvalid text=\"{{ _translate.CONTROLL.LABEL.export_print_ticket }}\"\r\n            [(icon)]=\"this._translate.ICONS.export_inv\" type=\"default\" validationGroup=\"formData\"\r\n            [useSubmitBehavior]=\"true\" (click)=\"eSubmit('XUAT_IN')\">\r\n          </dx-button>\r\n          <!-- Ghi tạm -->\r\n          <dx-button disableDoubleClick *ngIf=\"showButtonGhiTam()\" appScrollToInvalid text=\"{{ _translate.CONTROLL.BUTTON.save_temporary}}\"\r\n            [(icon)]=\"this._translate.ICONS.save\" (click)=\"eSubmit('GHI_TAM')\" type=\"default\"\r\n            [useSubmitBehavior]=\"true\">\r\n          </dx-button>\r\n          <!-- Tạo mới -->\r\n          <dx-button disableDoubleClick text=\"{{ _translate.CONTROLL.BUTTON.create_new}}\" [(icon)]=\"this._translate.ICONS.add_new\"\r\n            type=\"default\" (click)=\"handleAddNew()\"></dx-button>\r\n          \r\n          <!-- Đóng -->\r\n          <dx-button appBackButton type=\"default\" [(icon)]=\"this._translate.ICONS.come_back\"\r\n            text=\"{{ _translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n\r\n\r\n<!-- popup -->\r\n<!-- <dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.processing }}\"\r\n          [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n          [(visible)]=\"showPopupImport\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n\r\n  </div>\r\n</dx-popup> -->"

/***/ }),

/***/ "./src/app/modules/ticket/components/invoice/invoice.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ticket/components/invoice/invoice.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-form{margin-bottom:30px}.button-tax-code{background:#337ab7;color:#fff;border-color:transparent;border:none}.button-tax-code i{font-size:20px}.button-tax-code:focus{outline:none}::ng-deep dx-number-box .dx-texteditor-input{padding:7px 9px 8px}::ng-deep .hidden{display:none !important}::ng-deep .dvtt{display:flex}::ng-deep .dvtt dx-text-box{flex:1}::ng-deep .dvtt dx-text-box input{padding-top:9px}::ng-deep .dvtt dx-check-box{width:30px}:host ::ng-deep .format-right .dx-texteditor-input{text-align:right}::ng-deep .ti_le_phan_tram{flex:1}::ng-deep .ticket-container .dx-overlay-wrapper.dx-invalid-message{width:100% !important}\n"

/***/ }),

/***/ "./src/app/modules/ticket/components/invoice/invoice.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/ticket/components/invoice/invoice.component.ts ***!
  \************************************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/components/form-extend/form-extend.component */ "./src/app/shared/components/form-extend/form-extend.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_components_preview_ticket_preview_ticket_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/components/preview-ticket/preview-ticket.component */ "./src/app/shared/components/preview-ticket/preview-ticket.component.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var _modules_ticket_shared_ticket_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @modules/ticket/shared/ticket.service */ "./src/app/modules/ticket/shared/ticket.service.ts");
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
    function InvoiceComponent(authService, translate, spinner, customersService, route, vatService, listService, modalService, productsService, templateService, socketService, configsService, ticketService) {
        var _this = this;
        this.authService = authService;
        this.translate = translate;
        this.spinner = spinner;
        this.customersService = customersService;
        this.route = route;
        this.vatService = vatService;
        this.listService = listService;
        this.modalService = modalService;
        this.productsService = productsService;
        this.templateService = templateService;
        this.socketService = socketService;
        this.configsService = configsService;
        this.ticketService = ticketService;
        this.isAccessExportInv = false; //Quyền thực hiện xuất
        this.ttDaXuatHoaDon = false;
        this.productArray = [];
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__["InvoiceModel"](1);
        this.select = {};
        this.disableInvoiceDate = this.authService.isAllowEditInvoiceDate();
        this.isTuChoi = false;
        this.tax_codes = [];
        this.customer_codes = [];
        this.customerFormExtens = {
            cssClass: {
                soluong: 'format-right'
            }
        };
        this.emails = [];
        this.isExportInvoice = false;
        this.isDisplayGuideSale = false;
        // isDisable = false;
        this.template_id = '';
        this.readCode = false;
        this.customerCurent = {};
        this.cssClass = {
            nq43: '',
            buyerInfo: '',
            isHdGTGT: '',
            isHdBH: '',
            is_multi_product: '',
            dvtt: 'hidden'
        };
        this.showPopup = false;
        this.pattern = _config_pattern__WEBPACK_IMPORTED_MODULE_6__["pattern"];
        this.configs = {};
        this.hinhThucXuat = '';
        this.arrEmail = [];
        this.isHdGTGT = false;
        this.invoice_products = [];
        this.customForms_hh = [];
        this.customerTempt_hh = {};
        this.confirmCheckPreview = false;
        this.formItems_hh = [];
        this.customForms_bm = [];
        this.customerTempt_bm = {};
        this.currency_name = '';
        this.formItems_bm = [];
        this.is_currency = false;
        this.is_multi_product = false;
        this.isGhiTam = false;
        // Thay đổi hiển thị thông tin bên mua
        this.onChangeBuyerInfo = function (e) {
            _this.frmData.buyer_tax_code = null;
            _this.frmData.customer_code = null;
            _this.frmData.customer_name = null;
            _this.frmData.buyer_name = null;
            _this.frmData.buyer_mobile = null;
            _this.frmData.buyer_address = null;
            for (var key in _this.customerTempt_bm) {
                if (_this.customerTempt_bm.hasOwnProperty(key)) {
                    _this.customerTempt_bm[key] = null;
                }
            }
            _this.setCssClass();
        };
        this.changeCurrency = function (e) {
            if (!_this.is_currency) {
                _this.currency_name = null;
            }
        };
        this.changeTotalPayment = function (e) {
            var currency_code = _this.frmData.currency_code;
            if (_this.configs.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            _this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].tienBangChu(e.value, 0, currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        // Thay đổi tổng tiền
        this.totalPaymentChange = function (e) {
            _this.onNumberChange();
            if (_this.frmData.auto_value)
                _this.frmData.amount_after_vat = _this.frmData.total_payment;
            var currency_code = _this.frmData.currency_code;
            if (_this.configs.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            _this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].tienBangChu(e.value, _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.total_payment), currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        this.onFocusOut = function (e) {
            if (!_this.is_multi_product && _this.frmData.invoice_products[0].product_name) {
                _this.tinhGiaTri();
            }
        };
        this.onItemClick = function (e) {
            var product = e.itemData;
            if (!_this.is_multi_product) {
                var product_temp = _this.frmData.invoice_products[0];
                if (product) {
                    if (product) {
                        product_temp.order = 1;
                        product_temp.view_order = 1;
                        product_temp.price = product.price ? parseFloat(product.price) : null;
                        product_temp.product_name = product.name;
                        product_temp.product_code = product.code;
                        product_temp.unit_code = _this.checkUnitCode(product.unit_code);
                        product_temp.quantity = 1;
                        if (_this.isHdGTGT) {
                            product_temp.vat = product.vat != null ? product.vat.toString() : null;
                        }
                        else {
                            product_temp.vat = null;
                        }
                        product_temp.amount = product.price ? parseFloat(product.price) : 0;
                        if (_this.isHdGTGT) {
                            product_temp.amount_vat = (product_temp.vat >= 0 || product_temp.vat == -3) ? _this.caculatorAmountVat(product_temp.amount, product_temp.vat) : null;
                        }
                        else {
                            product_temp.amount_vat = null;
                        }
                        product_temp.amount_after_vat = product_temp.amount + (product_temp.amount_vat != null ? product_temp.amount_vat : 0);
                        _this.tinhGiaTri();
                    }
                }
                else {
                    _this.changeProduct(null);
                }
            }
            else {
            }
        };
        this.changeProduct = function (event) {
            var product_temp = _this.frmData.invoice_products[0];
            product_temp.order = 1;
            product_temp.view_order = 1;
            product_temp.price = null;
            // product_temp.product_name = null;
            product_temp.product_code = null;
            product_temp.quantity = 1;
            product_temp.vat = null;
            product_temp.amount = null;
            product_temp.amount_vat = null;
            product_temp.amount_after_vat = null;
            // this.productArray.load().then((dataSource) => {
            //   if (!dataSource || (dataSource && dataSource.length == 0)) {
            //   }
            // })
        };
        this.onChangeVAT = function (e) {
            _this.tinhGiaTri();
        };
        this.onChangePrice = function (e) {
            _this.tinhGiaTri();
        };
        // Thay đổi template
        this.onChangeTem = function (e, isEdit) {
            _this.select.templates.forEach(function (item) {
                if (e.value === item.value) {
                    if (item.number_of_row != '100') {
                        _this.is_multi_product = true;
                        _this.cssClass.is_multi_product = 'hidden';
                    }
                    else {
                        _this.is_multi_product = false;
                        _this.cssClass.is_multi_product = '';
                    }
                    _this.formDuLieuMoRong(item);
                    // this.frmData.template_id = item.value;
                    _this.frmData.invoice_series = item.invoice_series;
                    _this.frmData.template_code = item.template_code;
                    _this.is_multi_vat = item.is_multi_vat;
                    _this.invoiceTemplate = lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"](item);
                    if (item.invoice_type === _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].loaihoadon.GTKT01) {
                        _this.frmData.is_resolution_43 = false;
                        _this.isHdGTGT = true;
                        _this.cssClass.isHdGTGT = '';
                        _this.cssClass.isHdBH = 'hidden';
                    }
                    else {
                        _this.isHdGTGT = false;
                        _this.cssClass.isHdGTGT = 'hidden';
                        _this.cssClass.isHdBH = '';
                        _this.frmData.invoice_products[0].vat = null;
                        _this.frmData.invoice_products[0].amount = null;
                        _this.frmData.invoice_products[0].amount_vat = null;
                    }
                    _this.tinhGiaTri();
                }
            });
            setTimeout(function () {
                _this.setCssClass();
            }, 1);
        };
        this.customerChanged = function (e) {
            if (_this.frmData.customer_id && _this.frmData.buyer_exten) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.customerCurent.name) !== _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.frmData.customer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.customerCurent.contact_person_name) !== _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.frmData.buyer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.customerCurent.contact_mobile) !== _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.frmData.buyer_mobile)
                                || _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.customerCurent.business_address) !== _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.frmData.buyer_address)
                                || _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.customerCurent.email) !== _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.frmData.buyer_email)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this.currencyRateChange = function (e) {
        };
        this.disableTemplateInput = function () {
        };
        // focus ra ngoài mst
        this.updateTaxcodeInfo = function (e) {
            if (_this.frmData.customer_id && _this.frmData.buyer_exten) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.customerCurent.tax_code) !== _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.frmData.buyer_tax_code)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        // focus ra ngoài mã kh 
        this.updateCustomerInfo = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.customerCurent.code) !== _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(_this.frmData.customer_code)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        // Tìm kiếm mã số thuế
        this.searchTaxCode = function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
            if (!_this.frmData.buyer_tax_code) {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Vui lòng nhập mã số thuế!", "error");
            }
            else {
                _this.vatService.getInfoCompany(_this.frmData.buyer_tax_code).subscribe(function (res) {
                    if (res.status == "success") {
                        _this.taxCodeChoose({ itemData: res.data.customer });
                    }
                });
            }
            setTimeout(function () {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            }, 1000);
        };
        // Thay đổi ngày biên lai
        this.changeDateTime = function (e) {
            if (e.value) {
                var year_1 = "";
                if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(e.value) != "")
                    year_1 = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(e.value).substring(4, 2);
                else {
                    var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_13__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                    year_1 = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(invoiceDate).substring(4, 2);
                }
                var templates = lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"](_this.select.templates);
                _this.select.templates.length = 0;
                if (templates && templates.length > 0) {
                    templates.forEach(function (item) {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(item.name) != "")
                            item.name = item.name.replace(item.name.substring(4, 2), year_1);
                        _this.select.templates.push(item);
                    });
                }
            }
        };
        // Thay đổi hình thức thanh toán
        this.paymentMethodChange = function (e) {
            // const _obj = this.select.payment_method_names.filter(p => p.code === e.value)[0];
            // if (_obj) {
            //   this.frmData.payment_method_name = _obj.name;
            // }
        };
        // Thay đổi loại tiền
        this.currencyCodeChange = function (e) {
            if (_this.frmData.currency_code === 'VND') {
                _this.frmData.currency_rate = null;
            }
            _this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].tienBangChu(_this.frmData.total_payment, _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.total_payment), _this.frmData.currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    InvoiceComponent.prototype.ngAfterViewInit = function () {
        if (this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.DaXuat || (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.GhiTam && this.frmData.send_department_status === 'KHONG_DU_DK_CAP_MA')
            || (this.frmData.id != null && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.GhiTam && this.frmData.send_department_status === 'DA_GUI_CQT' && this.frmData.is_invoice_with_code)) {
            this.disablleScreen();
        }
        var dvtt = document.querySelector('.dvtt');
        var itemEmpty = document.querySelector('.itemEmpty');
        if (dvtt && itemEmpty) {
            var dvttHeight = dvtt.clientHeight;
            itemEmpty.style.height = dvttHeight + 'px';
        }
        // this.onChangeTem(this.template_temp);
    };
    InvoiceComponent.prototype.onChangeSalePercen = function () {
        this.tinhGiaTri();
    };
    // Thay đổi checkbox nq43
    InvoiceComponent.prototype._changeNQ43 = function () {
        this.frmData.sales_percentage = null;
        this.frmData.money_resolution_43 = null;
        this.setCssClass();
    };
    InvoiceComponent.prototype.canDeactivate = function () {
        return true;
    };
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectWebsocket();
        this.productArray = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8___default.a({
            load: function (loadOptions) {
                return _this.vatService.getProductsForm(loadOptions.searchValue, 'code');
            }
        });
        this.currentUser = this.authService.getCurrentUser();
        this.role_branch = this.listService.getDataConfigLocalStorage();
        this.routeSub = this.route.data.subscribe(function (data) {
            // let danh_muc = this.authService.getDMLocal();
            _this.configs = _this.authService.getConfigs();
            _this.currency_name = _this.configs.system_parameter.ticket_currency ? _this.configs.system_parameter.ticket_currency : '';
            _this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterColumnInv(_this.configs.decimal_places_json);
            _this.select.products = data.init[0].products;
            _this.select.templates = data.init[0].templates;
            var danh_muc = _this.authService.getDMLocal();
            _this.configs = _this.authService.getConfigs();
            _this.infoDangKy = _this.authService.getInfoRegister();
            _this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterColumnInv(_this.configs.decimal_places_json);
            _this.frmData.display_currency = JSON.stringify(_this.configs.display_currency);
            _this.formatter.display_int = _this.configs.system_parameter.display_int;
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.select_provisions_on_accounts = danh_muc.DM_DINH_KHOAN ? danh_muc.DM_DINH_KHOAN.data : null;
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            _this.select.currency_codes = danh_muc.DM_LOAI_TIEN ? danh_muc.DM_LOAI_TIEN : null;
            var isEdit = data.init[0].isEdit;
            var invoice;
            if (isEdit) {
                invoice = data.init[0].invoices;
            }
            if (_this.select.templates.length > 0) {
                if (invoice && Number.parseInt(invoice.invoice_number) > 0) {
                    if (invoice.is_invoice_with_code != _this.infoDangKy.is_invoice_with_code) {
                        _this.select.templates = _this.select.templates.filter(function (p) { return p.is_invoice_with_code == invoice.is_invoice_with_code; });
                    }
                }
                else {
                    _this.select.templates = _this.select.templates.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
                }
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
        // tìm kiếm mã số thuế
        this.tax_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'tax_code');
            }
        });
        // tìm kiếm mã khách hàng
        this.customer_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'code');
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
    /* Kết nối đến socket */
    InvoiceComponent.prototype.connectWebsocket = function (type) {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                // ký nội dung
                if (data.Data.Name === 'hoadon.xml') {
                    _this.sendInvoice(data.Data.Content);
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    _this.xuLiApiKhiXuat();
                }
            }
            else if (data.SvcName === 'efy_viewInvoice') {
            }
        });
    };
    InvoiceComponent.prototype.handleFormData = function () {
        this.form_submit = lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"](this.frmData);
        if (this.form_submit.extension.length > 0) {
            this.form_submit.extension.forEach(function (item) {
                delete item['is_show'];
                delete item['type'];
                delete item['width'];
                delete item['statusData'];
            });
        }
        if (this.form_submit.invoice_options.length > 0) {
            this.form_submit.invoice_options.forEach(function (item) {
                delete item['is_show'];
                delete item['type'];
                delete item['width'];
                delete item['statusData'];
            });
        }
        console.log('this.form_submit: ', this.form_submit);
        if (this.form_submit.invoice_products.length > 0) {
            this.form_submit.invoice_products = this.form_submit.invoice_products.filter(function (item) { return item.product_name; });
            if (this.form_submit.invoice_products.length > 0) {
                if (!this.is_multi_product) {
                    this.form_submit.invoice_products[0].extension = JSON.stringify(lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"](this.form_submit.extension));
                }
                else {
                }
            }
        }
        delete this.form_submit.extension;
        delete this.form_submit.buyer_information;
        // delete this.form_submit.total_payment;
        this.form_submit.invoice_files = [];
        this.form_submit.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getObjFormatterToColumn(this.formatter));
        if (this.is_currency) {
            this.form_submit['currency_name'] = this.currency_name ? this.currency_name : "empty";
        }
    };
    InvoiceComponent.prototype.khoiTaoKhiSua = function (data) {
        var _this = this;
        var template = this.select.templates.find(function (item) { return item.value === data.template_id; });
        template = template ? template : this.select.templates[0];
        if (template.number_of_row != '100') {
            this.is_multi_product = true;
        }
        // Khởi tạo thông tin hàng hóa
        this.frmData.fillFormData(data);
        this.handleEmail(data.buyer_email);
        // Đơn vị tiền tệ
        if (data.extend_json_invoice) {
            var extension = JSON.parse(data.extend_json_invoice);
            if (extension.currency_name) {
                this.is_currency = true;
                this.currency_name = extension.currency_name;
            }
            this.frmData.buyer_exten = extension.buyer_exten ? extension.buyer_exten : false;
        }
        // Tên hàng hoá dv/mở rộng
        var invoice_products = this.frmData.setInvoice_products_data(data.invoice_products);
        if (!this.is_multi_product) {
            invoice_products.length = 1;
            var extension = [];
            this.frmData.invoice_products = invoice_products;
            if (data.invoice_products.length > 0 && data.invoice_products[0].extension) {
                extension = JSON.parse(data.invoice_products[0].extension);
            }
            this.frmData['extension'] = extension;
        }
        else {
            this.frmData['extension'] = [];
        }
        this.template_temp = template;
        if (this.select.templates.length > 0) {
            this.onChangeTem(template, true);
        }
        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(this.frmData.approve_status) == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusApprove.TuChoi) {
            this.isTuChoi = true;
        }
        if (data.currency_name) {
            this.cssClass.dvtt = '';
            if (data.currency_name == 'empty')
                data.currency_name = '';
            this.currency_name = data.currency_name;
        }
        else {
            if (this.configs.display_currency) {
                var arrConfigCurrency = _core_index__WEBPACK_IMPORTED_MODULE_1__["VSelectBoxService"]._arrConfigCurrency();
                arrConfigCurrency.forEach(function (key) {
                    if (_this.configs.display_currency[key])
                        _this.cssClass.dvtt = '';
                });
            }
            if (this.cssClass.dvtt) {
                this.is_currency = false;
                this.currency_name = null;
            }
        }
        // cấu hình thập phân thêm mới
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
    };
    // Xem trước vé
    InvoiceComponent.prototype.preview = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        this.handleFormData();
        var sub = this.vatService.preview(this.form_submit, true).subscribe(function (rs) {
            if (rs.status === 'success') {
                if (rs.data.data.item && rs.data.data.item.length > 0) {
                    var invoice = rs.data.data.item[0];
                    var rawHtml = _this.ticketService.createFormTypeBase64(invoice, _this.invoiceTemplate, _this.is_multi_product, { isPreview: true });
                    var initialState = {
                        dataPreview: rawHtml + '</html>',
                        isPreview: true
                    };
                    _this.bsModalRef = _this.modalService.show(_shared_components_preview_ticket_preview_ticket_component__WEBPACK_IMPORTED_MODULE_20__["PreviewTicketComponent"], {
                        class: 'modal-lg full-modal-ticket1',
                        initialState: initialState,
                        backdrop: 'static',
                        keyboard: false
                    });
                    var submodal_1 = _this.modalService.onHide.subscribe(function () {
                        submodal_1.unsubscribe();
                    });
                }
            }
        }, function (err) { }, function () { _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); });
    };
    InvoiceComponent.prototype.handleAddNew = function () {
        this.addNew();
    };
    InvoiceComponent.prototype.addNew = function () {
        var _this = this;
        this.isGhiTam = true;
        var inv = Object.assign({}, this.frmData);
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__["InvoiceModel"](1);
        this.frmData.invoice_date = null;
        this.frmData.template_id = inv.template_id;
        this.frmData.invoice_release_id = inv.invoice_release_id;
        this.frmData.payment_method_name = inv.payment_method_name;
        this.frmData.payment_method_view_name = inv.payment_method_view_name;
        this.frmData.currency_code = inv.currency_code;
        this.frmData.template_code = inv.template_code;
        this.frmData.invoice_series = inv.invoice_series;
        this.frmData.invoice_options = inv.invoice_options;
        if (this.frmData.invoice_options) {
            this.frmData.invoice_options.forEach(function (option) {
                option.value = null;
            });
        }
        this.frmData.buyer_exten = inv.buyer_exten;
        this.frmData.is_resolution_43 = inv.is_resolution_43;
        if (!this.is_multi_product) {
            this.frmData.invoice_products[0].vat = null;
            this.frmData.invoice_products[0].extension = null;
        }
        this.emails = [];
        this.formExtend_hh.resetOptions();
        if (!this.is_multi_product) {
            this.formExtend_hh.resetForm();
            this.formExtend_bm.resetForm();
        }
        else { }
        this.unDisableScreen();
        var template = this.select.templates.find(function (item) { return item.value === _this.frmData.template_id; });
        this.onChangeTem(template);
    };
    /* Tính tiền */
    InvoiceComponent.prototype.onNumberChange = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"]._calTotalMoney(this.frmData, this.formatter, !this.frmData.auto_value);
    };
    InvoiceComponent.prototype.khoiTaoKhiThemMoi = function () {
        var _this = this;
        if (this.configs.system_parameter.is_ticket_currency)
            this.is_currency = this.configs.system_parameter.is_ticket_currency;
        if (this.select.templates.length > 0 && this.select.templates[0].number_of_row != '100') {
            this.is_multi_product = true;
        }
        this.invoice_products = this.frmData.invoice_products_data();
        this.select.payment_method_names.some(function (item) {
            if (item.is_default) {
                _this.frmData.payment_method_name = item.code;
                var _obj = _this.select.payment_method_names.filter(function (p) { return p.code === item.code; })[0];
                if (_obj) {
                    _this.frmData.payment_method_view_name = _obj.name;
                }
            }
        });
        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(this.frmData.payment_method_name) === '') {
            this.frmData.payment_method_name = 'TMCK';
            this.frmData.payment_method_view_name = 'TM/CK';
        }
        this.frmData.currency_code = 'VND';
        this.frmData["buyer_exten"] = false;
        this.frmData.is_resolution_43 = false;
        if (!this.is_multi_product) {
            this.invoice_products.length = 1;
            this.frmData.extension = this.frmData.invoice_products[0].extension;
            this.frmData.invoice_products[0].vat = null;
        }
        else {
            this.frmData.extension = [];
        }
        // set value default
        if (this.select.templates.length > 0) {
            this.template_temp = this.select.templates[0];
            this.frmData.template_id = this.template_temp.value;
            this.onChangeTem(this.select.templates[0]);
        }
        else {
            this.cssClass.nq43 = 'hidden';
            this.cssClass.buyerInfo = 'hidden';
            this.cssClass.isHdGTGT = 'hidden';
            this.cssClass.isHdBH = 'hidden';
            this.cssClass.is_multi_product = 'hidden';
        }
        if (this.configs.display_currency) {
            var arrConfigCurrency = _core_index__WEBPACK_IMPORTED_MODULE_1__["VSelectBoxService"]._arrConfigCurrency();
            arrConfigCurrency.forEach(function (key) {
                if (_this.configs.display_currency[key])
                    _this.cssClass.dvtt = '';
            });
        }
        if (this.cssClass.dvtt) {
            this.is_currency = false;
            this.currency_name = null;
        }
    };
    InvoiceComponent.prototype.formDuLieuMoRong = function (item) {
        var _this = this;
        this.customForms_hh = [];
        this.customerTempt_hh = {};
        this.customForms_bm = [];
        this.customerTempt_bm = {};
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].resetObject(this.formItems_hh);
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].resetObject(this.formItems_bm);
        if (item.fields && item.fields.length > 0) {
            var _dulieumorong_bm = lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"](item.fields).filter(function (x) { return x.type === '4'; });
            var invoice_options_1 = this.frmData.invoice_options;
            if (invoice_options_1 && invoice_options_1.length > 0) {
                _dulieumorong_bm = _dulieumorong_bm.map(function (dl) {
                    var option = invoice_options_1.find(function (x) { return x.code == dl.code; });
                    if (option) {
                        dl.value = option.value;
                    }
                    return dl;
                });
            }
            this.frmData.invoice_options = _dulieumorong_bm;
            if (_dulieumorong_bm.length > 0) {
                this.formExtend_bm.createForm(this.customForms_bm, _dulieumorong_bm, this.customerFormExtens);
            }
            _dulieumorong_bm.forEach(function (value) {
                _this.customerTempt_bm[value.code] = value.value;
            });
            if (!this.is_multi_product) {
                var _dulieumorong_hh = lodash__WEBPACK_IMPORTED_MODULE_14__["cloneDeep"](item.fields).filter(function (x) { return x.type === '9'; });
                var extension_1 = this.frmData.extension;
                if (extension_1 && extension_1.length > 0) {
                    _dulieumorong_hh = _dulieumorong_hh.map(function (dl) {
                        var option = extension_1.find(function (x) { return x.code == dl.code; });
                        if (option) {
                            dl.value = option.value;
                        }
                        return dl;
                    });
                }
                this.frmData.extension = _dulieumorong_hh;
                if (_dulieumorong_hh.length > 0) {
                    this.formExtend_hh.createForm(this.customForms_hh, _dulieumorong_hh, this.customerFormExtens);
                }
                _dulieumorong_hh.forEach(function (value) {
                    _this.customerTempt_hh[value.code] = value.value;
                });
            }
        }
        else {
            this.frmData.invoice_options = [];
            this.frmData.extension = [];
        }
    };
    InvoiceComponent.prototype.caculatorAmountVat = function (amount, vat) {
        var temp = amount / 100 * vat;
        return this.roundNumber(temp, 5);
    };
    InvoiceComponent.prototype.roundNumber = function (number, n) {
        var p = Math.pow(10, n);
        return Math.round(number * p) / p;
    };
    InvoiceComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code === unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    InvoiceComponent.prototype.tinhGiaTri = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].tinhGiaTriKhac(this.frmData, this.formatter);
    };
    InvoiceComponent.prototype.setCssClass = function () {
        this.cssClass.nq43 = (!this.isHdGTGT && this.frmData.is_resolution_43) ? '' : 'hidden';
        this.cssClass.buyerInfo = this.frmData.buyer_exten ? '' : 'hidden';
    };
    // Xem lại vé
    InvoiceComponent.prototype.view = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        this.handleFormData();
        if (this.frmData.id) {
            var sub = this.vatService.view(this.frmData.id, true).subscribe(function (rs) {
                if (rs.status === 'success') {
                    if (rs.data.data.item && rs.data.data.item.length > 0) {
                        var invoice = rs.data.data.item[0];
                        var rawHtml = _this.ticketService.createFormTypeBase64(invoice, _this.invoiceTemplate, _this.is_multi_product);
                        var initialState = {
                            dataPreview: rawHtml + '</html>',
                            isPreview: true
                        };
                        _this.bsModalRef = _this.modalService.show(_shared_components_preview_ticket_preview_ticket_component__WEBPACK_IMPORTED_MODULE_20__["PreviewTicketComponent"], {
                            class: 'modal-lg full-modal-ticket1',
                            initialState: initialState,
                            backdrop: 'static',
                            keyboard: false
                        });
                        var submodal_2 = _this.modalService.onHide.subscribe(function () {
                            submodal_2.unsubscribe();
                        });
                    }
                }
            }, function (err) { }, function () { _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); });
        }
    };
    /* Xuất hóa đơn */
    InvoiceComponent.prototype.eSubmit = function (type) {
        var _this = this;
        this.isGhiTam = false;
        this.checkTemplate();
        this.hinhThucXuat = type;
        setTimeout(function () {
            if (type == 'XUAT' || type == 'XUAT_IN') {
                if (!_this._validForm() && !_this.form.instance.validate().isValid) {
                    return;
                }
            }
            _this.handleFormData();
            if (type === 'XUAT' || type == 'XUAT_IN') {
                if (_this.confirmCheckPreview) {
                    _this.xuatHoaDon(type);
                    _this.confirmCheckPreview = false;
                }
                else {
                    _this.previewBeforeSubmit(type);
                }
            }
            else {
                _this.isGhiTam = true;
                _this.processGhiTam(type);
            }
        }, 300);
    };
    InvoiceComponent.prototype._validForm = function () {
        if (!this.frmData.template_id) {
            _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_22__["InvoicesService"].focusField(this.listDxForm, 'formLeft', 'template_id');
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.CONTROLL.LABEL.ticket_template + " " + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.invoice_products[0].product_name) {
            // InvoicesService.focusField(this.listDxForm, 'formLeft', 'invoice_products[0].product_code');
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.MENU.name_of_goods_and_service + " " + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.invoice_products[0].amount_after_vat) {
            // InvoicesService.focusField(this.listDxForm, 'formLeft', 'invoice_products[0].amount_after_vat');
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.GRID.INVOICE_DETAILS.total_money + " " + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.currency_code) {
            _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_22__["InvoicesService"].focusField(this.listDxForm, 'formRight', 'currency_code');
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.CONTROLL.LABEL.currency_code + " " + this._translate.VALIDATION.required, 'error');
            return false;
        }
        else {
            if (this.frmData.currency_code !== 'VND' && !this.frmData.currency_rate) {
                _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_22__["InvoicesService"].focusField(this.listDxForm, 'formRight', 'currency_rate');
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.CONTROLL.LABEL.currency_rate + " " + this._translate.VALIDATION.required, 'error');
                return false;
            }
        }
        if (!this.frmData.invoice_products[0].price) {
            // InvoicesService.focusField(this.listDxForm, 'formLeft', 'invoice_products[0].price');
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.GRID.INVOICE_DETAILS.price + " " + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (this.isHdGTGT) {
            if (!this.frmData.invoice_products[0].amount_vat
                && this.frmData.invoice_products[0].vat
                && !["0", "-1", "-2"].includes(this.frmData.invoice_products[0].vat)) {
                // InvoicesService.focusField(this.listDxForm, 'formLeft', 'invoice_products[0].amount_vat');
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.GRID.INVOICE_DETAILS.amount_vat + " " + this._translate.VALIDATION.required, 'error');
                return false;
            }
            if (!this.frmData.invoice_products[0].vat) {
                // InvoicesService.focusField(this.listDxForm, 'formLeft', 'invoice_products[0].vat');
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.GRID.INVOICE_DETAILS.vat + " " + this._translate.VALIDATION.required, 'error');
                return false;
            }
        }
        else {
            if (this.frmData.is_resolution_43) {
                if (!this.frmData.sales_percentage) {
                    // InvoicesService.focusField(this.listDxForm, 'formLeft', 'sales_percentage');
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.CONTROLL.LABEL.sales_percentage + " " + this._translate.VALIDATION.required, 'error');
                    return false;
                }
                if (!this.frmData.money_resolution_43) {
                    _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_22__["InvoicesService"].focusField(this.listDxForm, 'formLeft', 'money_resolution_43');
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Số tiền giảm theo NQ' + " " + this._translate.VALIDATION.required, 'error');
                    return false;
                }
                else {
                    if (![1, 2, 3, 5].includes(this.frmData.sales_percentage)) {
                        // InvoicesService.focusField(this.listDxForm, 'formLeft', 'sales_percentage');
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Tỷ lệ % trên doanh thu chỉ bao gồm các giá trị: 1, 2, 3, 5", 'error');
                        return false;
                    }
                }
            }
        }
        if (!this.frmData.total_payment_in_word) {
            // InvoicesService.focusField(this.listDxForm, 'formLeft', 'invoice_products[0].price');
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.CONTROLL.LABEL.total_payment_in_word + " " + this._translate.VALIDATION.required, 'error');
            return false;
        }
        return true;
    };
    InvoiceComponent.prototype.previewBeforeSubmit = function (type) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        this.handleFormData();
        var sub = this.vatService.preview(this.form_submit, true).subscribe(function (rs) {
            if (rs.status === 'success') {
                if (rs.data.data.item && rs.data.data.item.length > 0) {
                    var invoice = rs.data.data.item[0];
                    var rawHtml = _this.ticketService.createFormTypeBase64(invoice, _this.invoiceTemplate, _this.is_multi_product, { isPreview: true });
                    var initialState = {
                        dataPreview: rawHtml + '</html>',
                        isPreview: false,
                        content_invoice: {
                            question_again: _this._translate.THONG_TIN.hoi_truoc_khi_xuat_ve,
                            'invoice_date': _this.ticketService.invoice_date
                        }
                    };
                    _this.bsModalRef = _this.modalService.show(_shared_components_preview_ticket_preview_ticket_component__WEBPACK_IMPORTED_MODULE_20__["PreviewTicketComponent"], {
                        class: 'modal-lg full-modal-ticket2',
                        initialState: initialState,
                        backdrop: 'static',
                        keyboard: false
                    });
                    var submodal_3 = _this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalRef.content.successSaveItem == _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].actionHander.DongY) {
                            _this.confirmCheckPreview = true;
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
                            if (type === _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.TrinhKy) {
                                _this.eSubmit(_core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.TrinhKy);
                            }
                            else {
                                _this.eSubmit(type);
                            }
                        }
                        submodal_3.unsubscribe();
                    });
                }
            }
        }, function (err) { }, function () { _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); });
    };
    InvoiceComponent.prototype.xuatHoaDon = function (type) {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)
            || (!this.configs.system_parameter.otherInvoice_sign && !this.checkTemplate())) {
            this.xuLiApiKhiXuat();
        }
        else {
            var ListSerialNumber = "DSCKS";
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
            }
            var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_13__(new Date()).format('YYYY-MM-DD HH:mm:ss');
            this.socketService.kiSo(function (type) { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
        }
        // }
    };
    // Check có mã
    InvoiceComponent.prototype.checkTemplate = function () {
        return this.frmData.invoice_series.startsWith("C");
    };
    InvoiceComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var xmlInvoice = "";
        if (!this.form_submit.id) {
            var sub_1 = this.vatService.ghiTamTT78(this.form_submit, true).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.invoice_number = rs.data.invoice_number;
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_13__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_13__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.frmData.id = rs.data.id;
                    _this.verify_code = rs.data.verify_code;
                    _this.setDataSessionStorage(_this.frmData);
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)
                        || (!_this.configs.system_parameter.otherInvoice_sign && !_this.checkTemplate())) {
                        _this.sendInvoice(xmlInvoice);
                    }
                    else {
                        _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                    }
                    if (_this.hinhThucXuat == 'XUAT_IN') {
                        _this.inhoadon();
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else {
            var sub_2 = this.vatService.editTT78(this.frmData.id, this.form_submit, true).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.invoice_number = rs.data.invoice_number;
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_13__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_13__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)
                        || (!_this.configs.system_parameter.otherInvoice_sign && !_this.checkTemplate())) {
                        _this.sendInvoice(xmlInvoice);
                    }
                    else {
                        _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                    }
                    if (_this.hinhThucXuat == 'XUAT_IN') {
                        _this.inhoadon();
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                sub_2.unsubscribe();
            });
        }
    };
    InvoiceComponent.prototype.inhoadon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sub;
            return __generator(this, function (_a) {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
                sub = this.vatService.view(this.frmData.id, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        if (rs.data.data.item && rs.data.data.item.length > 0) {
                            var invoice = rs.data.data.item[0];
                            var rawHtml = _this.ticketService.createFormTypeBase64(invoice, _this.invoiceTemplate, _this.is_multi_product, { inVe: true });
                            var html = Base64.encode(rawHtml);
                            _this.socketService.inFileHtml(function () { return _this.connectWebsocket(); }, html);
                            setTimeout(function () {
                                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                            }, 300);
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(err.message, 'error');
                }, function () { _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); });
                return [2 /*return*/];
            });
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
    /* Disbale Form và bảng hàng hóa */
    InvoiceComponent.prototype.disablleScreen = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = true;
        });
        this.ttDaXuatHoaDon = true;
    };
    // 
    InvoiceComponent.prototype.unDisableScreen = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = false;
        });
        this.ttDaXuatHoaDon = false;
    };
    InvoiceComponent.prototype.sendInvoice = function (xml_string) {
        var _this = this;
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        }, 20);
        var sub = this.vatService.xuatHoaDon({
            id: this.frmData.id,
            xml_string: xml_string,
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.setCurrencyTicket();
                _this.disablleScreen();
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                _this.isExportInvoice = true;
            }
            else
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    InvoiceComponent.prototype.setCurrencyTicket = function () {
        var _this = this;
        // if (this.configs.system_parameter.ticket_currency != this.currency_name) {
        this.configs.system_parameter["ticket_currency"] = this.currency_name;
        this.configs.system_parameter["is_ticket_currency"] = this.is_currency;
        var id = this.configs.id.system_parameter;
        var data = {
            config: {
                value: JSON.stringify(this.configs.system_parameter),
                is_no_add_log: true
            }
        };
        this.vatService.updateConfig(id, data).subscribe(function (res) {
            if (res.status == 'success') {
                _this.configsService.getAll().subscribe(function (res) {
                    if (res.data && res.data.configs)
                        _this.authService.setConfigs(res.data.configs);
                    _this.configs = _this.authService.getConfigs();
                });
            }
        });
        // }
    };
    InvoiceComponent.prototype.trangthaihoadon = function (data) {
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
    /* Xử lý ghi tạm hóa đơn */
    InvoiceComponent.prototype.processGhiTam = function (type) {
        if (!this.isAccessExportInv) {
            if (type === _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.TrinhKy) {
                this.form_submit.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusApprove.ChoDuyet;
                this.form_submit.refuse_reason = '';
            }
            else {
                if (this.form_submit.approve_status !== _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusApprove.TuChoi) {
                    this.form_submit.approve_status = _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusApprove.ChuaTrinhKy;
                }
            }
        }
        this.ghiTam(this.form_submit);
    };
    /* Ghi tạm */
    InvoiceComponent.prototype.ghiTam = function (data) {
        var _this = this;
        if (this.frmData.id) {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
            var sub_3 = this.vatService.editTT78(this.form_submit.id, data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.id = rs.data.id;
                    if (_this.frmData.approve_status === _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusApprove.ChoDuyet) {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.sign_board_success, 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                    }
                    _this.setCurrencyTicket();
                    _this.setDataSessionStorage(_this.frmData);
                }
                else {
                    if (rs.message.includes('CHUA_CO_BIEN_GIAM_TRU')) {
                        var initialState = {
                            typeNotify: "MAU_HOA_DON",
                        };
                        _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_19__["NotifyReduceTaxComponent"], {
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
                        _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_19__["NotifyReduceTaxComponent"], {
                            backdrop: 'static',
                            keyboard: false,
                            class: 'mauhoadon43 modal-lg',
                            initialState: initialState
                        });
                    }
                    else
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                sub_3.unsubscribe();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
            var sub_4 = this.vatService.ghiTamTT78(data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    // if (rs.data.status == sEnum.statusInv.ChoKy)
                    //   this.isShowButtonWaiteSign = false;
                    _this.setCurrencyTicket();
                    _this.frmData.id = rs.data.id;
                    // this.pkInvoiceSelectWaitSign = this.frmData.id;
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                    _this.setDataSessionStorage(_this.frmData);
                }
                else {
                    if (rs.message.includes('CHUA_CO_BIEN_GIAM_TRU')) {
                        var initialState = {
                            typeNotify: "MAU_HOA_DON",
                        };
                        _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_19__["NotifyReduceTaxComponent"], {
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
                        _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_19__["NotifyReduceTaxComponent"], {
                            backdrop: 'static',
                            keyboard: false,
                            class: 'mauhoadon43 modal-lg',
                            initialState: initialState
                        });
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                    }
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                sub_4.unsubscribe();
            });
        }
    };
    InvoiceComponent.prototype.setDataSessionStorage = function (data) {
        this.valueChange = JSON.stringify(data);
    };
    InvoiceComponent.prototype.showButtonGhiTam = function () {
        return !this.ttDaXuatHoaDon;
    };
    // chọn mã số thuế
    InvoiceComponent.prototype.taxCodeChoose = function (e) {
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
        this.handleEmail(customer.email);
        this.frmData.customer_id = customer.id;
        this.frmData.bank_account_number = customer.bank_account_number ? customer.bank_account_number : '';
        this.frmData.bank_name = customer.bank_name ? customer.bank_name : '';
    };
    InvoiceComponent.prototype.handleEmail = function (email) {
        if (email) {
            this.frmData.buyer_email = email;
            this.emails = [];
            var stringDataEmailGet = email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
        else {
            this.frmData.buyer_email = email;
            this.emails = [];
        }
    };
    InvoiceComponent.prototype.huy = function () {
        this.showPopup = false;
    };
    InvoiceComponent.prototype.capNhatDmKhachHang = function () {
        var _this = this;
        if (this.frmData.buyer_exten) {
            this.customerCurent.tax_code = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(this.frmData.buyer_tax_code);
            this.customerCurent.name = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(this.frmData.customer_name);
            this.customerCurent.code = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(this.frmData.customer_code);
            this.customerCurent.contact_person_name = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(this.frmData.buyer_name);
            this.customerCurent.contact_mobile = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(this.frmData.buyer_mobile);
            this.customerCurent.business_address = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(this.frmData.buyer_address);
            this.customerCurent.email = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(this.frmData.buyer_email);
            var data = { customer: this.customerCurent };
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
            this.customersService.edit(data, this.customerCurent.id).subscribe(function (response) {
                if (response.status === 'success') {
                    _this.showPopup = false;
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(response.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            });
        }
    };
    // Chọn mã khách hàng
    InvoiceComponent.prototype.customerCodeChoose = function (e) {
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
    };
    InvoiceComponent.prototype.renderDataEmail = function ($event) {
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
    };
    // Cập nhật thông tin khách hàng
    InvoiceComponent.prototype.editTaxCode = function () {
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
                        if (Array.isArray(this.listRoleBranchOrigin) && this.listRoleBranchOrigin.length > 0) {
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
                        this.bsModalRef = this.modalService.show(_shared_components__WEBPACK_IMPORTED_MODULE_12__["AddCustomerComponent"], {
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
                            // submodal.unsubscribe();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InvoiceComponent.prototype.handleListRoleBranch = function (roleUser) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_17__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_17__["DxFormComponent"])
    ], InvoiceComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_17__["DxFormComponent"]),
        __metadata("design:type", Object)
    ], InvoiceComponent.prototype, "listDxForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formExtend_hh'),
        __metadata("design:type", _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_16__["FormExtendComponent"])
    ], InvoiceComponent.prototype, "formExtend_hh", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formExtend_bm'),
        __metadata("design:type", _shared_components_form_extend_form_extend_component__WEBPACK_IMPORTED_MODULE_16__["FormExtendComponent"])
    ], InvoiceComponent.prototype, "formExtend_bm", void 0);
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/modules/ticket/components/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/modules/ticket/components/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_3__["CustomersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__["VatService"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_10__["ListsService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsModalService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_15__["ProductsService"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_18__["TemplateService"],
            _core_services__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_21__["ConfigsService"],
            _modules_ticket_shared_ticket_service__WEBPACK_IMPORTED_MODULE_23__["TicketService"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/ticket/components/product-grip/product-grip.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/product-grip/product-grip.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/ticket/components/product-grip/product-grip.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/product-grip/product-grip.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/ticket/components/product-grip/product-grip.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/ticket/components/product-grip/product-grip.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductGripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGripComponent", function() { return ProductGripComponent; });
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

var ProductGripComponent = /** @class */ (function () {
    function ProductGripComponent() {
    }
    ProductGripComponent.prototype.ngOnInit = function () {
    };
    ProductGripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-grip',
            template: __webpack_require__(/*! ./product-grip.component.html */ "./src/app/modules/ticket/components/product-grip/product-grip.component.html"),
            styles: [__webpack_require__(/*! ./product-grip.component.scss */ "./src/app/modules/ticket/components/product-grip/product-grip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductGripComponent);
    return ProductGripComponent;
}());



/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/many-receive/many-receive.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/many-receive/many-receive.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-data-grid id=\"gridContainer\" [dataSource]=\"invoiceList\" [showRowLines]=\"true\"\r\n  [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\" [columnResizingMode]=\"true\" [columnAutoWidth]=\"true\"\r\n  [wordWrapEnabled]=\"true\">\r\n  <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxi-column cellTemplate=\"invoiceNumber\" [allowEditing]=\"false\" dataField=\"invoice_number\"\r\n    caption=\"{{ 'GRID.INVOICE.ticket_number' | translate }}\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n  <dxi-column dataField=\"template_code\" [allowEditing]=\"false\" caption=\"{{ 'GRID.INVOICE.template_code' | translate }}\"\r\n    [width]=\"110\" alignment=\"center\">\r\n  </dxi-column>\r\n  <dxi-column cellTemplate=\"invoiceSeries\" dataField=\"template.invoice_series\" [allowEditing]=\"false\"\r\n    caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" [width]=\"90\" alignment=\"center\" [allowSorting]=\"false\"\r\n    [allowFiltering]=\"false\"></dxi-column>\r\n  <dxi-column dataField=\"invoice_date\" [allowEditing]=\"false\" caption=\"{{ 'GRID.INVOICE.ticket_date' | translate }}\"\r\n    [width]=\"110\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n  </dxi-column>\r\n  <dxi-column dataField=\"buyer_tax_code\" [allowEditing]=\"false\"\r\n    caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\" [width]=\"120\" alignment=\"left\">\r\n  </dxi-column>\r\n  <dxi-column cellTemplate=\"customerName\" [allowEditing]=\"false\"\r\n    caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\" alignment=\"left\">\r\n  </dxi-column>\r\n  <dxi-column dataField=\"buyer_email\" [allowEditing]=\"true\" caption=\"Email\" [width]=\"190\" alignment=\"left\">\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.template.template_code }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoiceSeries'\">\r\n    <p>{{ d.data.bill_series || d.data.invoice_series || d.data.template.invoice_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n    <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name || 'Hóa đơn chờ ký' }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number\r\n      }}<span *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n  </div>\r\n  <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n  <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n</dx-data-grid>\r\n\r\n<div class=\"wrappe-note\">\r\n  <div style=\"margin-left: 18px;\">\r\n    <a style=\"color: silver;text-decoration: underline;font-size: 90%;\">{{_translate.CONTROLL.LABEL.note1}}: </a><a\r\n      style=\"color: silver;font-size: 90%;\"> Nhập danh sách email. Mỗi email cách nhau bởi dấu ;</a>\r\n  </div>\r\n  <div style=\"margin-top: 5px;margin-left: 18px;\">\r\n    <a style=\"color: silver;font-size: 90%;\">Ví dụ: admin@efy.com.vn;sale@efy.com.vn</a>\r\n  </div>\r\n</div>\r\n<div class=\"footer-btn\">\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.send}}\" icon=\"{{_translate.ICONS.send_email}}\" type=\"default\"\r\n    (click)=\"dongy()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\"\r\n    (click)=\"dong()\">\r\n  </dx-button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/many-receive/many-receive.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/many-receive/many-receive.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrappe-note{margin-top:20px;margin-bottom:20px}.footer-btn{display:flex;justify-content:flex-end}\n"

/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/many-receive/many-receive.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/many-receive/many-receive.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ManyReceiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManyReceiveComponent", function() { return ManyReceiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _modules_ticket_shared_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/ticket/shared/ticket.service */ "./src/app/modules/ticket/shared/ticket.service.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_components_preview_ticket_preview_ticket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/preview-ticket/preview-ticket.component */ "./src/app/shared/components/preview-ticket/preview-ticket.component.ts");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
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










var ManyReceiveComponent = /** @class */ (function () {
    function ManyReceiveComponent(authService, bsModalRef, customersService, vatService, ticketService, modalService, templateService) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.customersService = customersService;
        this.vatService = vatService;
        this.ticketService = ticketService;
        this.modalService = modalService;
        this.templateService = templateService;
    }
    ManyReceiveComponent.prototype.ngOnInit = function () {
        this.invoice_list = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_8___default.a({
            key: 'id',
            data: this.invoiceList
        });
        this._translate = this.authService.getTranslate();
        this.arrInvoiceList = JSON.stringify(this.invoiceList);
    };
    ManyReceiveComponent.prototype.view = function (data) {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var is_multi_product = false;
        if (data.id && data.template_id) {
            var temp_1 = this.templateService.show(data.template_id).subscribe(function (rbs) {
                if (rbs.status === 'success') {
                    var invoiceTemplate_1 = rbs.data.template;
                    var sub = _this.vatService.view(data.id, true).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            if (rs.data.data.item && rs.data.data.item.length > 0) {
                                var invoice = rs.data.data.item[0];
                                var rawHtml = _this.ticketService.createFormTypeBase64(invoice, invoiceTemplate_1, is_multi_product);
                                var initialState = {
                                    dataPreview: rawHtml + '</html>',
                                    isPreview: true
                                };
                                _this.modalService.show(_shared_components_preview_ticket_preview_ticket_component__WEBPACK_IMPORTED_MODULE_7__["PreviewTicketComponent"], {
                                    class: 'modal-lg full-modal-ticket1',
                                    initialState: initialState,
                                    backdrop: 'static',
                                    keyboard: false
                                });
                            }
                        }
                    }, function (err) { _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(err.message, 'error'); }, function () { _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); });
                }
            }, function (err) {
                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(err.message, 'error');
            }, function () { temp_1.unsubscribe(); });
        }
    };
    ManyReceiveComponent.prototype.dong = function () {
        this.bsModalRef.content.successSaveItem = 'success';
        this.bsModalRef.hide();
    };
    ManyReceiveComponent.prototype._validForm = function () {
        var invoices = this.invoiceList.filter(function (item) { return item.buyer_email; });
        return invoices.length == this.invoiceList.length;
    };
    ManyReceiveComponent.prototype.dongy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = [];
                        if (!this._validForm()) {
                            _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Email" + ' ' + this._translate.VALIDATION.required, 'error');
                            return [2 /*return*/, false];
                        }
                        this.invoiceList.forEach(function (item) {
                            data.push({ id: item.id, email: item.buyer_email });
                        });
                        _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
                        return [4 /*yield*/, this.vatService.sendMail(data).toPromise()
                                .then(function (rs) {
                                if (rs.status === 'success') {
                                    _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.CONTROLL.LABEL.send_access_email, 'success');
                                    _this.bsModalRef.content.successSaveItem = 'success_mail';
                                    _this.bsModalRef.hide();
                                    _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                                    return true;
                                }
                                else {
                                    _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                                    _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                                    return false;
                                }
                            }, function (reason) {
                                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                                _core_library__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(reason, 'error');
                                return false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ManyReceiveComponent.prototype, "invoiceList", void 0);
    ManyReceiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-many-receive',
            template: __webpack_require__(/*! ./many-receive.component.html */ "./src/app/modules/ticket/components/sendEmail/many-receive/many-receive.component.html"),
            styles: [__webpack_require__(/*! ./many-receive.component.scss */ "./src/app/modules/ticket/components/sendEmail/many-receive/many-receive.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalRef"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_3__["CustomersService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"],
            _modules_ticket_shared_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_4__["TemplateService"]])
    ], ManyReceiveComponent);
    return ManyReceiveComponent;
}());



/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/one-receive/one-receive.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/one-receive/one-receive.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-form-data\">\r\n  <dx-form tabIndex=\"thongTinHoaDon\" [formData]=\"frmData\" validationGroup=\"formData\">\r\n    <dxi-item  itemType=\"group\" [colCount]=\"1\">\r\n      <dxi-item editorType=\"dxTextBox\" dataField=\"username\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.name_receiver }}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\" message=\"{{ _translate.CONTROLL.LABEL.name_receiver }} {{ _translate.VALIDATION.required }}\">\r\n      </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item editorType=\"dxTextBox\" dataField=\"email\">\r\n        <dxo-label text=\"{{ _translate.CONTROLL.LABEL.email }}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\" message=\"{{ _translate.CONTROLL.LABEL.email }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n    </dxi-item>\r\n  </dx-form>\r\n</div>\r\n\r\n<div class=\"wrappe-note\">\r\n  <div style=\"margin-left: 18px;\">\r\n    <a style=\"color: silver;text-decoration: underline;font-size: 90%;\">{{_translate.CONTROLL.LABEL.note1}}: </a><a\r\n      style=\"color: silver;font-size: 90%;\"> Nhập danh sách email. Mỗi email cách nhau bởi dấu ;</a>\r\n  </div>\r\n  <div style=\"margin-top: 5px;margin-left: 18px;\">\r\n    <a style=\"color: silver;font-size: 90%;\">Ví dụ: admin@efy.com.vn;sale@efy.com.vn</a>\r\n  </div>\r\n</div>\r\n<div class=\"footer-btn\">\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.send}}\" icon=\"{{_translate.ICONS.send_email}}\" type=\"default\"\r\n    (click)=\"dongy()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\"\r\n    (click)=\"dong()\">\r\n  </dx-button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/one-receive/one-receive.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/one-receive/one-receive.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrappe-note{margin-top:20px;margin-bottom:20px}.footer-btn{display:flex;justify-content:flex-end}.wrapper-form-data{width:70%;margin:auto}\n"

/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/one-receive/one-receive.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/one-receive/one-receive.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OneReceiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneReceiveComponent", function() { return OneReceiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OneReceiveComponent = /** @class */ (function () {
    function OneReceiveComponent(authService, bsModalRef, vatService) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.frmData = {};
    }
    OneReceiveComponent.prototype.ngOnInit = function () {
        this.invoice_list = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_2___default.a({
            key: 'id',
            data: this.invoiceList
        });
        this._translate = this.authService.getTranslate();
    };
    OneReceiveComponent.prototype.onEditingStart = function (e) {
        // e.component.saveEditData();
    };
    OneReceiveComponent.prototype.selectionChanged = function (data) {
    };
    OneReceiveComponent.prototype.onEditorPrepared = function (e) { };
    OneReceiveComponent.prototype.onEditorPreparing = function (e) { };
    OneReceiveComponent.prototype.view = function (data) { };
    OneReceiveComponent.prototype.dong = function () {
        this.bsModalRef.content.successSaveItem = 'success';
        this.bsModalRef.hide();
    };
    OneReceiveComponent.prototype.dongy = function () {
        var _this = this;
        if (this.invoiceList.length > 0) {
            var ids = lodash__WEBPACK_IMPORTED_MODULE_4__["map"](this.invoiceList, 'id');
            if (!this._validForm())
                return false;
            _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
            var data = {
                ids: ids,
                email: this.frmData.email,
                buyer_name: this.frmData.username
            };
            var sub_1 = this.vatService.sendEmailOneReceive(data).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.CONTROLL.LABEL.send_access_email, 'success');
                    _this.bsModalRef.content.successSaveItem = 'success_mail';
                    _this.bsModalRef.hide();
                    _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                }
            }, function (err) {
                _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(err.message, 'error');
            }, function () {
                sub_1.unsubscribe();
                _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
    };
    OneReceiveComponent.prototype._validForm = function () {
        if (!this.frmData.username) {
            _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.CONTROLL.LABEL.name_receiver + " " + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.email) {
            _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.CONTROLL.LABEL.email + " " + this._translate.VALIDATION.required, 'error');
            return false;
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OneReceiveComponent.prototype, "invoiceList", void 0);
    OneReceiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-one-receive',
            template: __webpack_require__(/*! ./one-receive.component.html */ "./src/app/modules/ticket/components/sendEmail/one-receive/one-receive.component.html"),
            styles: [__webpack_require__(/*! ./one-receive.component.scss */ "./src/app/modules/ticket/components/sendEmail/one-receive/one-receive.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"]])
    ], OneReceiveComponent);
    return OneReceiveComponent;
}());



/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/send-email-ticket/send-email-ticket.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/send-email-ticket/send-email-ticket.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.email_received_ticket}}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"container-fluid\" style=\"margin-bottom: 20px;\">\r\n\r\n    <div id=\"config-tabs-ticket\">\r\n      <dx-tabs [dataSource]=\"tabs\" [selectedIndex]=\"selectedIndex\" (onItemClick)=\"selectTab($event)\">\r\n      </dx-tabs>\r\n    </div>\r\n    <div [ngClass]=\"cssClass.tabMany\" class=\"wrapper-form\">\r\n      <app-many-receive [invoiceList]=\"invoiceList\"></app-many-receive>\r\n    </div>\r\n    <div [ngClass]=\"cssClass.tabOne\" class=\"wrapper-form\">\r\n      <app-one-receive [invoiceList]=\"invoiceList\"></app-one-receive>\r\n    </div>\r\n\r\n\r\n    <!-- <dx-tab-panel #tabPanel [selectedIndex]=\"0\" [loop]=\"true\" [animationEnabled]=\"true\"\r\n      [swipeEnabled]=\"true\">\r\n      <dxi-item title=\"{{_translate.CONTROLL.LABEL.many_receive}}\">\r\n        <div *dxTemplate class=\"wrapper-form\">\r\n        </div>\r\n      </dxi-item>\r\n      <dxi-item title=\"{{_translate.CONTROLL.LABEL.one_receive}}\">\r\n        <div *dxTemplate>\r\n          <div *dxTemplate class=\"wrapper-form\">\r\n          </div>\r\n        </div>\r\n      </dxi-item>\r\n    </dx-tab-panel> -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/send-email-ticket/send-email-ticket.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/send-email-ticket/send-email-ticket.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-form{padding:40px;padding-bottom:0px}.hidden{display:none}#config-tabs-ticket{width:100%;border-bottom:1px solid #ddd}#config-tabs-ticket .dx-tabs{width:40%;border-bottom:0}::ng-deep #config-tabs-ticket .dx-tab{padding:4px}\n"

/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/send-email-ticket/send-email-ticket.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/send-email-ticket/send-email-ticket.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SendEmailTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmailTicketComponent", function() { return SendEmailTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendEmailTicketComponent = /** @class */ (function () {
    function SendEmailTicketComponent(bsModalRef, authService) {
        this.bsModalRef = bsModalRef;
        this.authService = authService;
        this.tabs = [];
        this.selectedIndex = 0;
        this.currencyCode = 'GUI_NHIEU_NGUOI';
        this.cssClass = {
            tabMany: '',
            tabOne: 'hidden'
        };
        this._translate = this.authService.getTranslate();
        this.tabs = [
            {
                id: 0,
                code: "GUI_NHIEU_NGUOI",
                text: this._translate.CONTROLL.LABEL.many_receive,
            },
            {
                id: 0,
                code: "GUI_MOT_NGUOI",
                text: this._translate.CONTROLL.LABEL.one_receive,
            },
        ];
    }
    SendEmailTicketComponent.prototype.ngOnInit = function () {
        this.companies = [
            { title: this._translate.CONTROLL.LABEL.many_receive },
            { title: this._translate.CONTROLL.LABEL.one_receive },
        ];
        // this.invoiceList = []
    };
    SendEmailTicketComponent.prototype.randomTest = function () {
        return Math.random() * 100;
    };
    SendEmailTicketComponent.prototype.selectTab = function (e) {
        var tab = e.itemData.code;
        if (tab == 'GUI_NHIEU_NGUOI') {
            this.cssClass.tabMany = '';
            this.cssClass.tabOne = 'hidden';
        }
        else {
            this.cssClass.tabMany = 'hidden';
            this.cssClass.tabOne = '';
        }
    };
    SendEmailTicketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-email-ticket',
            template: __webpack_require__(/*! ./send-email-ticket.component.html */ "./src/app/modules/ticket/components/sendEmail/send-email-ticket/send-email-ticket.component.html"),
            styles: [__webpack_require__(/*! ./send-email-ticket.component.scss */ "./src/app/modules/ticket/components/sendEmail/send-email-ticket/send-email-ticket.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SendEmailTicketComponent);
    return SendEmailTicketComponent;
}());



/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/send-email/send-email.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/send-email/send-email.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.BUTTON.send}} EMAIL</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n      <dxi-item dataField=\"email\" [label]=\"{text: 'Email'}\">\r\n        <dxi-validation-rule type=\"required\" message=\"Email {{_translate.VALIDATION.required}}\"></dxi-validation-rule>\r\n        <!-- <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.email\" message=\"Email {{_translate.VALIDATION.not_pattern}}\"></dxi-validation-rule> -->\r\n      </dxi-item>\r\n    </dx-form>\r\n    <div style=\"margin-top: 10px;\">\r\n        <a style=\"color: silver;text-decoration: underline;font-size: 90%;\">{{_translate.CONTROLL.LABEL.note1}}: </a><a style=\"color: silver;font-size: 90%;\"> {{_translate.CONTROLL.LABEL.note_email}}</a>\r\n      </div>\r\n      <div style=\"margin-top: 5px;\">\r\n          <a style=\"color: silver;font-size: 90%;\">{{_translate.CONTROLL.LABEL.example}}: admin@efy.com.vn;sale@efy.com.vn</a>\r\n        </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.send}}\" icon=\"{{_translate.ICONS.send_email}}\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/send-email/send-email.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/send-email/send-email.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/ticket/components/sendEmail/send-email/send-email.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ticket/components/sendEmail/send-email/send-email.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SendEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmailComponent", function() { return SendEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SendEmailComponent = /** @class */ (function () {
    function SendEmailComponent(bsModalRef, vatService, authService, customersService) {
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.authService = authService;
        this.customersService = customersService;
        this.frmData = {};
        this.pattern = _config_pattern__WEBPACK_IMPORTED_MODULE_1__["pattern"];
        this._translate = this.authService.getTranslate();
    }
    SendEmailComponent.prototype.ngOnInit = function () {
        this.frmData.email = this.email;
    };
    SendEmailComponent.prototype.onSubmit = function (e) {
        var _this = this;
        var data = [{
                id: this.invoice_id,
                email: this.frmData.email
            }];
        _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
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
                _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(_this._translate.NOTIFY.send_mail_success, 'success');
                _this.bsModalRef.content.successSaveItem = "success_mail";
                _this.bsModalRef.hide();
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    SendEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-email',
            template: __webpack_require__(/*! ./send-email.component.html */ "./src/app/modules/ticket/components/sendEmail/send-email/send-email.component.html"),
            styles: [__webpack_require__(/*! ./send-email.component.scss */ "./src/app/modules/ticket/components/sendEmail/send-email/send-email.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]])
    ], SendEmailComponent);
    return SendEmailComponent;
}());



/***/ }),

/***/ "./src/app/modules/ticket/shared/ticket.resolver.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/ticket/shared/ticket.resolver.ts ***!
  \**********************************************************/
/*! exports provided: TicketResolver, TicketResolverIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketResolver", function() { return TicketResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketResolverIndex", function() { return TicketResolverIndex; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _modules_users_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/users/shared */ "./src/app/modules/users/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TicketResolver = /** @class */ (function () {
    function TicketResolver(vatService, listsService, router, authService) {
        this.vatService = vatService;
        this.listsService = listsService;
        this.router = router;
        this.authService = authService;
    }
    TicketResolver.prototype.resolve = function (route, state) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var _countDm = 0;
        var dataJoin = [];
        var dataDM;
        var invoice_id = route.paramMap.get('invoiceId');
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
        var isEdit = false;
        if (invoice_id)
            isEdit = true;
        var dataRecord = this.vatService.getTicketResolver(invoice_id);
        if (dataRecord.length > 0) {
            dataRecord.forEach(function (element) {
                dataJoin.push(element);
            });
        }
        var dataForkJoin = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(dataJoin);
        return dataForkJoin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            var status = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success;
            for (var index = 0; index < rs.length; index++) {
                if (rs[index].status != _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusApi.success) {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs[index].message, "error");
                    _this.router.navigate(['/system/ticket-invoice']);
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
                var templates = void 0;
                if (isEdit) {
                    templates = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToInvoiceResolver(rs[dataJoin.length - 2]);
                    return [
                        {
                            products: rs[_countDm].data.products,
                            templates: templates,
                            isEdit: isEdit,
                            invoices: rs[dataJoin.length - 1].data.invoice
                        }
                    ];
                }
                else {
                    templates = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToInvoiceResolver(rs[dataJoin.length - 1]);
                    return [
                        {
                            products: rs[_countDm].data.products,
                            templates: templates,
                            isEdit: isEdit,
                        }
                    ];
                }
            }
            else
                return null;
        }));
    };
    TicketResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["ListsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], TicketResolver);
    return TicketResolver;
}());

var TicketResolverIndex = /** @class */ (function () {
    function TicketResolverIndex(vatService, usersService) {
        this.vatService = vatService;
        this.usersService = usersService;
    }
    TicketResolverIndex.prototype.resolve = function (route, state) {
        return this.usersService.getAllUser('?fields[]=id&fields[]=name&');
    };
    TicketResolverIndex = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"],
            _modules_users_shared__WEBPACK_IMPORTED_MODULE_7__["UsersService"]])
    ], TicketResolverIndex);
    return TicketResolverIndex;
}());



/***/ }),

/***/ "./src/app/modules/ticket/shared/ticket.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/ticket/shared/ticket.service.ts ***!
  \*********************************************************/
/*! exports provided: TicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketService", function() { return TicketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TicketService = /** @class */ (function () {
    function TicketService(translate, authService) {
        this.translate = translate;
        this.authService = authService;
        this.invoice_date = '';
        this.configs = {};
        this._translate = this.authService.getTranslate();
        this._language = this.authService.getLanguage();
        translate.use(this._language);
    }
    /**
     *
     * @param invoice
     * @param invoiceTemplate
     * @param is_multi_product: Vé là loại 1 sp hay nhiều sp
     * @param options Các tuỳ chọn:
     *    - inVe: in vé ra máy in nhiệt
     *    - inChuyenDoi: In chuyển đổi
     *    - isPreview: Màn xem trước?
     * @returns
     */
    TicketService.prototype.createFormTypeBase64 = function (invoice, invoiceTemplate, is_multi_product, options) {
        if (options === void 0) { options = {}; }
        var rawHtml = JSON.parse(Base64.decode(invoiceTemplate.raw_file));
        rawHtml = rawHtml.html + '</html>';
        this.invoice_date = '';
        var parser = new DOMParser();
        var doc = parser.parseFromString(rawHtml, 'text/html');
        // test ảnh
        // const divBackground:any = doc.querySelector('.logo-template-right');
        // if(divBackground) {
        //   let url_image:string = divBackground.style.backgroundImage;
        //   url_image = url_image.slice(4, -1).replace(/["']/g, '');
        //   let img:any = doc.createElement('img');
        //   img.src = url_image;
        //   img.style.width = '100%';
        //   divBackground.style.background = "none";
        //   divBackground.appendChild(img);
        // }
        var is_not_display_hhmmss = invoice.invoice.is_not_display_hhmmss;
        //Thêm viền cho vé
        var container = doc.querySelector('.container');
        if (container) {
            if (!options || (options && !options.inVe)) {
                container.style.borderRadius = '5px';
                container.style.border = '2px solid rgb(0, 149, 249)';
                container.style.padding = '20px';
                container.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 0px 10px';
                container.style.margin = 'auto';
            }
            else if (options && options.inVe) {
                // set đường viền cho vùng ký
                var efyEsignNone = doc.querySelector('.efy-esign-none');
                if (efyEsignNone) {
                    efyEsignNone.style.borderWidth = '2px';
                }
            }
        }
        //invoice-number
        var invoice_number = doc.querySelector('.invoice-number');
        if (invoice_number) {
            invoice_number.textContent = invoice.invoice.invoice_number ? invoice.invoice.invoice_number : "";
        }
        var invoice_sign_date = doc.querySelector('.efy-sign-date');
        var seler_sign_name = doc.querySelector('.seler-sign-name');
        var kySoBenBan = doc.querySelector('.ky-so-ben-ban');
        var KylblKySoBenBan = doc.querySelector('.da-duoc-ky-so-ben-ban');
        if (options && options.isPreview) {
            kySoBenBan.style.display = "none";
            if (KylblKySoBenBan)
                KylblKySoBenBan.style.display = "none";
        }
        else {
            // Bên bán ký ?
            if (KylblKySoBenBan && !invoice.invoice.is_view_signature) {
                KylblKySoBenBan.style.display = "none";
                kySoBenBan.style.display = "none";
            }
            else {
                // Ngày ký/ký bởi
                if (invoice_sign_date && invoice.invoice.invoice_sign_date) {
                    if (is_not_display_hhmmss) {
                        invoice_sign_date.textContent = moment__WEBPACK_IMPORTED_MODULE_2__(invoice.invoice.invoice_sign_date).format("DD/MM/YYYY");
                    }
                    else {
                        invoice_sign_date.textContent = moment__WEBPACK_IMPORTED_MODULE_2__(invoice.invoice.invoice_sign_date).format("DD/MM/YYYY HH:mm:ss");
                    }
                }
                if (seler_sign_name) {
                    seler_sign_name.textContent = invoice.seler.sign_name ? invoice.seler.sign_name : invoice.seler.name;
                }
            }
        }
        // mã cqt
        var maCoQuanThue = doc.querySelector('.ma-co-quan-thue');
        if (maCoQuanThue) {
            maCoQuanThue.textContent = invoice.invoice.tax_authority_code;
        }
        // thue-mien-giam-nq43
        if (invoice.invoice.is_resolution_43) {
            var mienGiam43 = doc.querySelector('.thue-mien-giam-nq43');
            if (mienGiam43) {
                mienGiam43.textContent = "Đã giảm " + invoice.invoice.money_resolution_43 + this._translate.THONG_TIN.tinh_thue_nq101;
                var parentThueMienGiam = doc.querySelector('.parent-thue-mien-giam-nq43');
                if (parentThueMienGiam) {
                    parentThueMienGiam.style.display = 'block';
                }
            }
        }
        if (invoice.invoice.invoice_date) {
            this.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(invoice.invoice.invoice_date).format("DD/MM/YYYY");
        }
        var buyer_email = "";
        if (invoice.customer.email)
            buyer_email = invoice.customer.email.replace(/;/g, '; ');
        // Giá tiền
        var total_payment = doc.querySelector('.total-payment');
        if (total_payment) {
            total_payment.textContent = invoice.invoice.total_payment;
        }
        var arrMap = {
            // 'gia_tien': {
            //   id: 'f0f2a367-8ca8-006a-eb0c-cf3261f00999',
            //   value: invoice.invoice.total_payment
            // },
            'nguoi_xuat': {
                id: 'a188b9ae-40c4-11ee-be56-0242ac120002',
                value: invoice.invoice.user_name_export
            },
            'ho_ten_nguoi_mua': {
                id: '9c103984-576d-c322-7843-bdacf97ac189',
                value: invoice.customer.contact
            },
            'ten_don_vi': {
                id: '8c103984-576d-c322-7843-bdacf97ac189',
                value: invoice.customer.name
            },
            'mst': {
                id: '8d903984-576d-c322-7843-bdacf97ac100',
                value: invoice.customer.tax_number
            },
            'dia_chi': {
                id: '7c103984-576d-c322-7843-bdacf97ac189',
                value: invoice.customer.address
            },
            'email': {
                id: '8e31d4c8-40c2-11ee-be56-0242ac120002',
                value: buyer_email
            },
            'sdt': {
                id: '11111121-549a-01ea-e507-cc7b0ab28a69',
                value: invoice.customer.tel
            },
        };
        // in chuyển đổi
        if (options && options.inChuyenDoi) {
            var e = doc.querySelector('.childparent-ngay_chuyen_doi');
            if (e)
                e.style.display = 'block';
            e = doc.querySelector('.childparent-nguoi_chuyen_doi');
            if (e)
                e.style.display = 'block';
            var textInChuyenDoi = doc.querySelector('.childparent-ban-the-hien-ve-the');
            if (textInChuyenDoi) {
                textInChuyenDoi.style.display = 'unset';
            }
            var nguoiChuyenDoi = doc.querySelector('.nguoi_chuyen_doi');
            if (nguoiChuyenDoi) {
                if (this.configs && !this.configs.system_parameter.dont_display_conversion_name) {
                    nguoiChuyenDoi.textContent = invoice.invoice.name_print_convert;
                    console.log(123);
                }
                else {
                    if (e)
                        e.style.display = 'none';
                }
            }
            var ngayChuyenDoi = doc.querySelector('.ngay_chuyen_doi');
            if (ngayChuyenDoi && invoice.invoice.date_print_convert) {
                ngayChuyenDoi.textContent = moment__WEBPACK_IMPORTED_MODULE_2__(invoice.invoice.date_print_convert).format("DD/MM/YYYY HH:mm");
            }
        }
        for (var field in arrMap) {
            var _a = arrMap[field], id = _a.id, value = _a.value;
            var xElements = doc.querySelector(".value-" + id);
            if (xElements) {
                xElements.textContent = value;
            }
        }
        var dateString = invoice.invoice.invoice_date;
        if (dateString) {
            var dateObject = new Date(dateString);
            var year = dateObject.getFullYear();
            var month = dateObject.getMonth() + 1;
            var day = dateObject.getDate();
            var xElements = doc.querySelector('.NgayHD');
            xElements.textContent = "" + day;
            xElements = doc.querySelector('.ThangHD');
            xElements.textContent = "" + month;
            xElements = doc.querySelector('.NamHD');
            xElements.textContent = "" + year;
        }
        // Trường mở rộng bên mua
        if (invoice.invoice.invoice_options.length > 0) {
            var inv_options = invoice.invoice.invoice_options;
            inv_options.forEach(function (option) {
                var xElements = doc.querySelector(".value-" + option.code);
                if (xElements) {
                    var value = '';
                    if (option.data_type == 'ngay' && option.value) {
                        value = moment__WEBPACK_IMPORTED_MODULE_2__(option.value).format("DD/MM/YYYY");
                    }
                    else {
                        value = option.value;
                    }
                    xElements.textContent = value;
                }
            });
        }
        // Trường mở rộng hàng hoá
        if (!is_multi_product) {
            if (invoice.order.length > 0) {
                if (invoice.order[0].extension && invoice.order[0].extension.length > 0) {
                    var pro_options = invoice.order[0].extension;
                    pro_options.forEach(function (option) {
                        var xElements = doc.querySelector(".value-" + option.code);
                        if (xElements) {
                            var value = '';
                            if (option.data_type == 'ngay' && option.value) {
                                value = moment__WEBPACK_IMPORTED_MODULE_2__(option.value).format("DD/MM/YYYY");
                            }
                            else {
                                value = option.value;
                            }
                            xElements.textContent = value;
                        }
                    });
                }
                // Tên hàng hoá
                var xElements = doc.querySelector(".value-8l873098-576d-c322-7843-bdacf97ac100");
                if (xElements) {
                    xElements.textContent = invoice.order[0].item_name;
                }
            }
        }
        var qrcodeElement = doc.querySelector('.qrcode');
        if (invoice.invoice.qr_code) {
            var qrcode = this.generateQRCode(invoice.invoice.qr_code);
            if (qrcodeElement && qrcode) {
                qrcodeElement.style.backgroundImage = 'url(' + qrcode + ')';
                // qrcodeElement.style.backgroundRepeat = 'no-repeat';
            }
        }
        // mã tra cứu
        var matracuu = doc.querySelector('.matracuu');
        if (matracuu && invoice.invoice.invoice_code && invoice.invoice.invoice_number) {
            var link = doc.createElement('a');
            link.href = "https://ihoadon.vn/kiem-tra/?shd=" + invoice.invoice.invoice_number + "&mtc=" + invoice.invoice.invoice_code;
            link.textContent = invoice.invoice.invoice_code;
            link.target = "_blank";
            link.style.textDecoration = "none";
            matracuu.textContent = '';
            matracuu.appendChild(link);
        }
        // Nếu chưa đc sinh số
        if (!invoice.invoice.invoice_number) {
            if (kySoBenBan)
                kySoBenBan.style.display = "none";
            if (KylblKySoBenBan)
                KylblKySoBenBan.style.display = "none";
            if (matracuu)
                matracuu.style.display = "none";
            // const maqrcode: any = doc.querySelector('.ma-qr-code')
            // if (maqrcode)
            //   maqrcode.style.display = "none";
        }
        return doc.documentElement.outerHTML;
    };
    TicketService.prototype.generateQRCode = function (qr) {
        var qrcode = null;
        var qrcodeOptions = {
            width: 140,
            height: 140
        }; // Kích thước của QR code
        qrcode__WEBPACK_IMPORTED_MODULE_1__["toDataURL"](qr, qrcodeOptions, function (err, url) {
            if (err)
                throw err;
            qrcode = url;
        });
        return qrcode;
    };
    TicketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _core_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], TicketService);
    return TicketService;
}());



/***/ }),

/***/ "./src/app/modules/ticket/ticket-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/ticket/ticket-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TicketRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketRoutingModule", function() { return TicketRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/ticket/components/index/index.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/modules/ticket/components/invoice/invoice.component.ts");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
/* harmony import */ var _shared_ticket_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/ticket.resolver */ "./src/app/modules/ticket/shared/ticket.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"],
        resolve: { init: _shared_ticket_resolver__WEBPACK_IMPORTED_MODULE_5__["TicketResolverIndex"] },
    },
    {
        path: 'create',
        component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__["VatDeactivateGuard"]],
        resolve: { init: _shared_ticket_resolver__WEBPACK_IMPORTED_MODULE_5__["TicketResolver"] },
        data: { brec: 'create_ticket' }
    },
    {
        path: ':invoiceId',
        component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__["VatDeactivateGuard"]],
        resolve: { init: _shared_ticket_resolver__WEBPACK_IMPORTED_MODULE_5__["TicketResolver"] },
        data: { brec: 'invoice_details' }
    }
];
var TicketRoutingModule = /** @class */ (function () {
    function TicketRoutingModule() {
    }
    TicketRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TicketRoutingModule);
    return TicketRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/ticket/ticket.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/ticket/ticket.module.ts ***!
  \*************************************************/
/*! exports provided: TicketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketModule", function() { return TicketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticket-routing.module */ "./src/app/modules/ticket/ticket-routing.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/ticket/components/index/index.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/modules/ticket/components/invoice/invoice.component.ts");
/* harmony import */ var _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-grip/product-grip.component */ "./src/app/modules/ticket/components/product-grip/product-grip.component.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_components_search_ticket_advanced_search_ticket_advanced_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/components/search-ticket-advanced/search-ticket-advanced.component */ "./src/app/shared/components/search-ticket-advanced/search-ticket-advanced.component.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_components_setting_column_setting_column_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/components/setting-column/setting-column.component */ "./src/app/shared/components/setting-column/setting-column.component.ts");
/* harmony import */ var _shared_ticket_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/ticket.resolver */ "./src/app/modules/ticket/shared/ticket.resolver.ts");
/* harmony import */ var _shared_components_preview_ticket_preview_ticket_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/components/preview-ticket/preview-ticket.component */ "./src/app/shared/components/preview-ticket/preview-ticket.component.ts");
/* harmony import */ var _components_history_invoice_history_invoice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/history-invoice/history-invoice.component */ "./src/app/modules/ticket/components/history-invoice/history-invoice.component.ts");
/* harmony import */ var _components_sendEmail_many_receive_many_receive_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sendEmail/many-receive/many-receive.component */ "./src/app/modules/ticket/components/sendEmail/many-receive/many-receive.component.ts");
/* harmony import */ var _components_sendEmail_one_receive_one_receive_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/sendEmail/one-receive/one-receive.component */ "./src/app/modules/ticket/components/sendEmail/one-receive/one-receive.component.ts");
/* harmony import */ var _components_sendEmail_send_email_ticket_send_email_ticket_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/sendEmail/send-email-ticket/send-email-ticket.component */ "./src/app/modules/ticket/components/sendEmail/send-email-ticket/send-email-ticket.component.ts");
/* harmony import */ var _components_sendEmail_send_email_send_email_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/sendEmail/send-email/send-email.component */ "./src/app/modules/ticket/components/sendEmail/send-email/send-email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var TicketModule = /** @class */ (function () {
    function TicketModule() {
    }
    TicketModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_8__["VatSharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_8__["SomeModule"],
                _core_library__WEBPACK_IMPORTED_MODULE_6__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_7__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxLookupModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_11__["TagInputModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTooltipModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPopoverModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                _ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketRoutingModule"],
            ],
            exports: [],
            entryComponents: [
                _shared_components_search_ticket_advanced_search_ticket_advanced_component__WEBPACK_IMPORTED_MODULE_14__["SearchTicketAdvancedComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_8__["ViewInvoiceMultipageComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_8__["SignatureOffComponent"],
                _shared_components_setting_column_setting_column_component__WEBPACK_IMPORTED_MODULE_16__["SettingColumnComponent"],
                _shared_components_preview_ticket_preview_ticket_component__WEBPACK_IMPORTED_MODULE_18__["PreviewTicketComponent"],
                _components_history_invoice_history_invoice_component__WEBPACK_IMPORTED_MODULE_19__["HistoryInvoiceComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_8__["SendDataForTaxComponent"],
                _components_sendEmail_send_email_ticket_send_email_ticket_component__WEBPACK_IMPORTED_MODULE_22__["SendEmailTicketComponent"],
                _components_sendEmail_send_email_send_email_component__WEBPACK_IMPORTED_MODULE_23__["SendEmailComponent"],
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
                _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceComponent"],
                _components_product_grip_product_grip_component__WEBPACK_IMPORTED_MODULE_5__["ProductGripComponent"],
                _components_history_invoice_history_invoice_component__WEBPACK_IMPORTED_MODULE_19__["HistoryInvoiceComponent"],
                _components_sendEmail_many_receive_many_receive_component__WEBPACK_IMPORTED_MODULE_20__["ManyReceiveComponent"],
                _components_sendEmail_one_receive_one_receive_component__WEBPACK_IMPORTED_MODULE_21__["OneReceiveComponent"],
                _components_sendEmail_send_email_ticket_send_email_ticket_component__WEBPACK_IMPORTED_MODULE_22__["SendEmailTicketComponent"],
                _components_sendEmail_send_email_send_email_component__WEBPACK_IMPORTED_MODULE_23__["SendEmailComponent"]
            ],
            providers: [
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_15__["VatService"],
                _shared_ticket_resolver__WEBPACK_IMPORTED_MODULE_17__["TicketResolver"],
                _shared_ticket_resolver__WEBPACK_IMPORTED_MODULE_17__["TicketResolverIndex"]
            ]
        })
    ], TicketModule);
    return TicketModule;
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
//# sourceMappingURL=ticket-ticket-module.js.map