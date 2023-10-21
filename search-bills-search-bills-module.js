(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-bills-search-bills-module"],{

/***/ "./src/app/modules/search-bills/components/index/index.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/search-bills/components/index/index.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n    <app-search-bill-advanced (searchContentChange)=\"getSearch($event)\">\r\n    </app-search-bill-advanced>\r\n  </div>\r\n  <div class=\"col-md-4\" style=\"max-height: 70px\">\r\n    <div class=\"list-header row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-right button-panel\">\r\n          <dx-menu [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\" submenuDirection=\"auto\"\r\n            (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n        </div>\r\n        <div class=\"pull-right button-panel\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerVat\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [showBorders]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\"\r\n  [columnAutoWidth]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\">\r\n  <!-- <dxo-scrolling mode=\"virtual\"></dxo-scrolling> -->\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\">\r\n  </dxo-selection>\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"vat\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <!-- Số hóa đơn -->\r\n  <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"bill_number\"\r\n    caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n    alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\" sortOrder=\"desc\" [sortIndex]=\"1\">\r\n  </dxi-column>\r\n  <!-- Mã số đơn hàng -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_the_order\" dataField=\"the_order\"\r\n    caption=\"{{ 'CONTROLL.LABEL.the_order_no_code' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_phieu}}\"\r\n    alignment=\"left\">\r\n  </dxi-column>\r\n  <!-- Số phiếu -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"receipts_no\"\r\n    caption=\"{{ 'GRID.INVOICE.receipts_no' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_phieu}}\"\r\n    alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <!-- Mẫu số, ký hiệu -->\r\n  <dxi-column cellTemplate=\"templateCode\"\r\n    caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Ngày hóa đơn -->\r\n  <dxi-column dataField=\"bill_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n    format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" sortOrder=\"desc\" [sortIndex]=\"0\">\r\n  </dxi-column>\r\n  <!-- Người chuyển -->\r\n  <dxi-column *ngIf=\"false\" dataField=\"export_user\" caption=\"{{ 'CONTROLL.LABEL.transferer' | translate }}\"\r\n    alignment=\"left\" minWidth=\"150\">\r\n  </dxi-column>\r\n  <!-- Mã số thuế -->\r\n  <dxi-column dataField=\"buyer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <!-- Tên khách hàng -->\r\n  <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\" alignment=\"left\"\r\n    minWidth=\"200\">\r\n  </dxi-column>\r\n  <!-- Số đơn vận -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_transport_number_from_product\" dataField=\"transport_number\"\r\n    caption=\"{{ 'GRID.INVOICE_DETAILS.transport_number' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.transport_number}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <!-- Thành tiền -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"amount_string\"\r\n    caption=\"{{ 'GRID.INVOICE_DETAILS.amount' | translate }}\" alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.thanh_tien}}\" [format]=\"formatter.tong_tien\">\r\n  </dxi-column>\r\n  <!-- Tiền thuế -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"total_amount_vat_string\"\r\n    caption=\"{{ 'GRID.INVOICE_DETAILS.amount_vat' | translate }}\" alignment=\"right\"\r\n    headerCellTemplate=\"titleHeaderTemplate\" minWidth=\"{{_translate.GRID_WIDTH.thanh_tien}}\"\r\n    [format]=\"formatter.tong_tien\">\r\n  </dxi-column>\r\n  <!-- Tổng tiền -->\r\n  <dxi-column dataField=\"total_payment\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" alignment=\"right\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\" [format]=\"formatter.tong_tien\">\r\n  </dxi-column>\r\n  <!-- Trạng thái thanh toán -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.check_payment_status\" cellTemplate=\"viewPaymentStatus\"\r\n    caption=\"{{ 'GRID.INVOICE.payment_status' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\"\r\n    alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Trạng thái gửi CQT -->\r\n  <dxi-column cellTemplate=\"statusSendTax\" caption=\"Trạng thái gửi CQT\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\" dataField=\"status\">\r\n    <dxo-lookup [dataSource]=\"trangThaiGuiCQTStatus\" valueExpr=\"code\" [displayExpr]=\"displayFunction\"\r\n      width=\"120\"></dxo-lookup>\r\n  </dxi-column>\r\n  <!-- Email, trạng thái hóa đơn -->\r\n  <!-- Chức năng -->\r\n  <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.bill_number }}<span\r\n        *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.template_code }}</p>\r\n    <p>{{ d.data.bill_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p>{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n  </div>\r\n\r\n  <!-- Trạng thái gửi CQT -->\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    <a *ngIf=\"d.data.status == 'DA_GUI_CQT'\" href=\"javascript:void(0)\">Đã gửi\r\n      CQT</a>\r\n    <a *ngIf=\"d.data.status == 'KHONG_HOP_LE'\" href=\"javascript:void(0)\" style=\"color: red;\"\r\n      (click)=\"LydoKTiepNhan(d.data)\">CQT không\r\n      tiếp nhận</a>\r\n    <a *ngIf=\"d.data.status == 'DA_XUAT'\" href=\"javascript:void(0)\">Đã xuất</a>\r\n    <a *ngIf=\"d.data.status == 'DA_TIEP_NHAN'\" href=\"javascript:void(0)\">CQT\r\n      chấp nhận</a>\r\n  </div>\r\n  <!--  -->\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" cssClass=\"dxi-total-payment-total_payment\" [customizeText]=\"customizeText\" showInColumn=\"total_payment\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 35, 50, 100]\" [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/search-bills/components/index/index.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/search-bills/components/index/index.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .view-bill{max-width:100%;margin:0px;height:100%}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/search-bills/components/index/index.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/search-bills/components/index/index.component.ts ***!
  \**************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_search_bills_shared_searchbill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/search-bills/shared/searchbill.service */ "./src/app/modules/search-bills/shared/searchbill.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
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
    function IndexComponent(authService, modalService, modalImportService, router, searchbillService, route, translate, socketService, spinner, billService, vPreviewInvService, invoiceService) {
        var _this = this;
        this.authService = authService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.router = router;
        this.searchbillService = searchbillService;
        this.route = route;
        this.translate = translate;
        this.socketService = socketService;
        this.spinner = spinner;
        this.billService = billService;
        this.vPreviewInvService = vPreviewInvService;
        this.invoiceService = invoiceService;
        this.trangThaiGuiCQTStatus = [];
        this.clickCurent = '';
        this.showPopup = false;
        this.selectedItems = [];
        this.extras = [];
        this.objStatusBtn = {};
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
        this.extras = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.extend,
                items: [
                    {
                        id: 'XEM',
                        name: this._translate.CONTROLL.BUTTON.view_invoice,
                        icon: this._translate.ICONS.view
                    },
                ]
            }];
    }
    IndexComponent.prototype.viewDetailInvoice = function (data) {
        this.view(data);
    };
    IndexComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        this.trangThaiGuiCQTStatus = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_11__["VSelectBoxService"]._trangThaiGuiCQT(this._translate);
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_9__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
    };
    IndexComponent.prototype.viewAttachFile = function () { };
    IndexComponent.prototype.selectionChanged = function (e) {
        this.selectedItems = e.selectedRowsData;
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType == 'data') {
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
    IndexComponent.prototype.onImportShowing = function (e) {
    };
    IndexComponent.prototype.onImportHiding = function (e) {
    };
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
        this.dataSource.store = this.searchbillService.getAll(params);
    };
    IndexComponent.prototype.getSearch = function (e) {
        this.paramSearch = e;
        this.loadList(e);
    };
    IndexComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'XEM') {
            this.view(null);
        }
        else if (e.itemData.id == "TAI_HD_PDF") {
            this.taiHDPdf();
        }
    };
    IndexComponent.prototype.taiHDPdf = function () {
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
                    if (!_core_index__WEBPACK_IMPORTED_MODULE_9__["VStringService"]._attemptConvertBool(data.is_default_template))
                        is_default_tempplate = false;
                }
                else {
                    ids = _lst.map(function (e) { return e.id; });
                    var arrDefault = _lst.filter(function (p) { return _core_index__WEBPACK_IMPORTED_MODULE_9__["VStringService"]._attemptConvertBool(p.is_default_template); });
                    var arrNotDefault = _lst.filter(function (p) { return !_core_index__WEBPACK_IMPORTED_MODULE_9__["VStringService"]._attemptConvertBool(p.is_default_template); });
                    if (arrDefault.length > 0 && arrNotDefault.length > 0) {
                        _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Bạn không thể xem hóa đơn từ phần mềm iHoadon và phần mềm bán hàng cùng lúc", 'error');
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
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_9__["sEnum"].typeCode.xem_hoa_don_mtt_html_xl
                    };
                    this.vPreviewInvService.xemMauPhanTrang(initialState);
                }
                else {
                    if (this.configs.system_parameter.view_multi_invoice) {
                        var data_1 = this.billService.taodulieuXemMau(ids);
                        data_1['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_9__["sEnum"].cauhinhxemmau.hoadon;
                        this.vPreviewInvService.xemMau(data_1);
                    }
                    else {
                        var initialState = {
                            items: ids,
                            isXuatHD: false,
                            hinhthucxuat: '',
                            typeAction: _core_index__WEBPACK_IMPORTED_MODULE_9__["sEnum"].typeCode.xem_hoa_don_mtt,
                            cssClass: 'modal-xl view-bill'
                        };
                        this.vPreviewInvService.xemMauPhanTrang(initialState);
                    }
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    IndexComponent.prototype.LydoKTiepNhan = function (data) {
        var lstErr = JSON.parse(data.error_content);
        var initialState = {
            lstErr: lstErr,
            notifyType: "THONG_BAO_LOI_CQT"
        };
        this.bsModalSignRef = this.modalService.show(_shared_components__WEBPACK_IMPORTED_MODULE_6__["SendDataForTaxComponent"], {
            backdrop: 'static',
            keyboard: true,
            class: 'modal-lg modal-margin-width',
            initialState: initialState
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            subModal.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_14__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_14__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/search-bills/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/search-bills/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_search_bills_shared_searchbill_service__WEBPACK_IMPORTED_MODULE_4__["SearchbillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _core_services__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_10__["BillService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_12__["ViewInvoiceService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_13__["InvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/search-bills/search-bills-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/search-bills/search-bills-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SearchBillsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBillsRoutingModule", function() { return SearchBillsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/search-bills/components/index/index.component.ts");
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
];
var SearchBillsRoutingModule = /** @class */ (function () {
    function SearchBillsRoutingModule() {
    }
    SearchBillsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchBillsRoutingModule);
    return SearchBillsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/search-bills/search-bills.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/search-bills/search-bills.module.ts ***!
  \*************************************************************/
/*! exports provided: SearchBillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBillsModule", function() { return SearchBillsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_bills_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-bills-routing.module */ "./src/app/modules/search-bills/search-bills-routing.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/search-bills/components/index/index.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/bill-invoice/shared/bill.service */ "./src/app/modules/bill-invoice/shared/bill.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SearchBillsModule = /** @class */ (function () {
    function SearchBillsModule() {
    }
    SearchBillsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _search_bills_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchBillsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _core_library__WEBPACK_IMPORTED_MODULE_5__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_6__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxLookupModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_8__["TagInputModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxTooltipModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxPopoverModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
            ],
            declarations: [_components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]],
            entryComponents: [_shared_components__WEBPACK_IMPORTED_MODULE_12__["ViewInvoiceMultipageComponent"]],
            providers: [
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_11__["VatService"],
                _modules_bill_invoice_shared_bill_service__WEBPACK_IMPORTED_MODULE_13__["BillService"]
            ]
        })
    ], SearchBillsModule);
    return SearchBillsModule;
}());



/***/ })

}]);
//# sourceMappingURL=search-bills-search-bills-module.js.map