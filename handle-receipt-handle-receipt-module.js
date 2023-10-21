(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["handle-receipt-handle-receipt-module"],{

/***/ "./src/app/modules/handle-receipt/components/index/index.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/handle-receipt/components/index/index.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section1\" style=\"margin-bottom: 10px;padding-right: 15px;\">\r\n  <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n    <app-receipt-search (searchContentChange)=\"getSearch($event)\">\r\n    </app-receipt-search>\r\n  </div>\r\n  <div class=\"col-md-4 list-header\" style=\"max-height: 70px;\">\r\n    <div *ngIf=\"isXuLyBienlai\" class=\"pull-right button-panel\">\r\n      <dx-button [(icon)]=\"_translate.ICONS.delete\" text=\"{{ 'THONG_TIN.huy_bien_lai' | translate }}\"\r\n        type=\"default\" (click)=\"cancelReceipt()\"></dx-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerInvoice\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\"\r\n  [showBorders]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\" [noDataText] =\"textHienThiLuoi\">\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\"></dxo-selection>\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"handleinvoice\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"single\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\" showAllText='{{_translate.CONTROLL.COMBO.all}}'></dxo-filter-row>\r\n <!-- Số biên lai -->\r\n  <dxi-column cellTemplate=\"receiptNumber\" dataField=\"receipt_number\"\r\n    caption=\"{{ 'GRID.INVOICE.receipt_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n    alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\" sortOrder=\"desc\" [sortIndex]=\"1\">\r\n  </dxi-column>\r\n  <!-- Mẫu số, ký hiệu -->\r\n  <dxi-column cellTemplate=\"templateCode\" [filterOperations]=\"['contains']\" [calculateFilterExpression]=\"calculateFilterExpression\"\r\n    caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Ngày biên lai -->\r\n  <dxi-column dataField=\"receipt_date\" caption=\"{{ 'GRID.INVOICE.receipt_date' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n    format=\"dd/MM/yyyy\" sortOrder=\"desc\" [sortIndex]=\"0\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Mã số thuế -->\r\n  <dxi-column dataField=\"payer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\">\r\n  </dxi-column>\r\n  <!-- Tên người nộp tiền -->\r\n  <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.payer_name' | translate }}\" alignment=\"left\"\r\n    minWidth=\"200\" [filterOperations]=\"['contains']\" [calculateFilterExpression]=\"calculateFilterCustomerExpression\">\r\n  </dxi-column>\r\n  <!-- Tổng tiền -->\r\n  <dxi-column dataField=\"total_payment_string\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\"\r\n    alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\" minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\">\r\n  </dxi-column>\r\n  <!-- Tình trạng xử lý -->\r\n  <dxi-column cellTemplate=\"statusInvoice\" caption=\"{{ 'CONTROLL.LABEL.processing_status' | translate }}\"\r\n  minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\" alignment=\"center\" dataField=\"adjustment_type\">\r\n    <dxo-lookup [dataSource]=\"adjustmentTypes\" valueExpr=\"code\" displayExpr=\"name\" width=\"120\"></dxo-lookup>\r\n  </dxi-column>\r\n  <!-- Chức năng -->\r\n  <dxi-column cellTemplate=\"actionIcon\" width=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let d of 'statusInvoice'\">\r\n    <ng-container [ngSwitch]=\"d.data.adjustment_type\">\r\n      <p *ngSwitchCase=\"1\">{{ 'THONG_TIN.bien_lai_goc' | translate }}</p>\r\n      <p *ngSwitchCase=\"7\">{{ 'THONG_TIN.bien_lai_xoa_bo' | translate }}</p>\r\n    </ng-container>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.template_code }}</p>\r\n    <p>{{ d.data.receipt_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'receiptNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewDetailReceipt(d.data)\" href=\"javascript:void(0)\">{{ d.data.receipt_number }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p>{{ d.data.customer_name || d.data.payer_name }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.THONG_TIN.xem_bien_lai}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n    <!-- <a *ngIf=\"d.data.status =='DA_XUAT'\" style=\"float: right;\" title=\"{{_translate.CONTROLL.BUTTON.tai_hd_xml}}\"\r\n    class=\"taiXmlIcon actionIcon\" (click)=\"taiHDXml(d.data)\"\r\n    href=\"javascript:void(0)\">\r\n    </a> -->\r\n  </div>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" cssClass=\"dxi-total-payment-total_payment_string\" [customizeText]=\"customizeText\" showInColumn=\"total_payment_string\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager\r\n    [showPageSizeSelector]=\"true\"\r\n    [allowedPageSizes]=\"[15, 35, 50, 100]\"\r\n    [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\"\r\n    infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar\r\n        [min]=\"0\"\r\n        [max]=\"100\"\r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-receipt/components/index/index.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/handle-receipt/components/index/index.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline}.search-section1{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}::ng-deep #gridContainerVat .dx-cell-focus-disabled{overflow:visible !important}::ng-deep #gridContainerVat .dx-datagrid-rowsview{overflow:visible}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/handle-receipt/components/index/index.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/handle-receipt/components/index/index.component.ts ***!
  \****************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_handle_receipt_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/handle-receipt/shared */ "./src/app/modules/handle-receipt/shared/index.ts");
/* harmony import */ var _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/payment-receipt/shared/payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
/* harmony import */ var _receipt_cancel_receipt_cancel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../receipt-cancel/receipt-cancel.component */ "./src/app/modules/handle-receipt/components/receipt-cancel/receipt-cancel.component.ts");
/* harmony import */ var _shared_components_receipt_search_advanced_search_advanced_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/receipt-search-advanced/search-advanced.component */ "./src/app/shared/components/receipt-search-advanced/search-advanced.component.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
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
    function IndexComponent(authService, translate, router, receiptService, modalService, modalImportService, socketService, paymentRService, vPreviewInvService, invoiceService, spinner) {
        var _this = this;
        this.authService = authService;
        this.translate = translate;
        this.router = router;
        this.receiptService = receiptService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.socketService = socketService;
        this.paymentRService = paymentRService;
        this.vPreviewInvService = vPreviewInvService;
        this.invoiceService = invoiceService;
        this.spinner = spinner;
        this.selectedRows = [];
        this.selectedItems = [];
        this.configs = {};
        this.idRow = undefined;
        this.clickCurent = undefined;
        this.extras = [];
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.invoices = [];
        this.isExportFailed = false;
        this.isXuLyBienlai = false;
        this.objStatusBtn = {};
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this.adjustmentTypes = [];
        this.customizeText = function (url) {
            _this.invoiceService.handleTotalGrid(url.value, _this.objStatusBtn, _this.dataGrid);
            return '';
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
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
                        name: this._translate.CONTROLL.BUTTON.view_voucher,
                        icon: this._translate.ICONS.view
                    },
                    {
                        id: 'GUI_BEN_MUA',
                        name: this._translate.CONTROLL.LABEL.send_invoice,
                        icon: this._translate.ICONS.send_email
                    },
                    {
                        id: 'TAI_CT_PDF',
                        name: this._translate.CONTROLL.BUTTON.tai_ct_pdf,
                        icon: this._translate.ICONS.download
                    },
                    {
                        id: "TAI_CT_XML",
                        name: this._translate.CONTROLL.BUTTON.tai_ct_xml,
                        icon: this._translate.ICONS.xml
                    }
                ]
            }];
    }
    IndexComponent.prototype.ngAfterViewInit = function () {
        if (this.searchComponent.isViewProcessStatus)
            this.searchComponent.isViewProcessStatus = false;
    };
    IndexComponent.prototype.ngOnInit = function () {
        if (this.searchComponent)
            this.searchComponent.isViewProcessStatus = false;
        this.textHienThiLuoi = "Không có dữ liệu";
        this.configs = this.authService.getConfigs();
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        this.currentUser = this.authService.getCurrentUser();
        var listpermissions = this.currentUser.user.permissions.split(',');
        var quyenxulybienlai = listpermissions.filter(function (p) { return p === 'xu_ly_bien_lai'; })[0];
        if (quyenxulybienlai)
            this.isXuLyBienlai = true;
        if (!this.isXuLyBienlai) {
            this.textHienThiLuoi = "Bạn không có quyền thực hiện chức năng này";
        }
        this.adjustmentTypes = _core_index__WEBPACK_IMPORTED_MODULE_3__["VSelectBoxService"]._adjustmentTypes(this._translate);
        this.adjustmentTypes = this.adjustmentTypes.filter(function (p) { return p.code == '1' || p.code == '7'; });
        this.adjustmentTypes.forEach(function (item) {
            item.name = item.name.replace("Hóa đơn", "Biên lai");
        });
    };
    IndexComponent.prototype.selectionChanged = function (data) {
        this.hidenDropdownList();
        this.selectedItems = data.selectedRowsData;
    };
    IndexComponent.prototype.hidenDropdownList = function () {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (this.idRow) {
            document.getElementById(this.idRow).classList.remove('show');
        }
    };
    IndexComponent.prototype.loadList = function (params) {
        this.dataSource = {};
        if (this.isXuLyBienlai) {
            if (params) {
                this.dataSource.store = this.receiptService.getAll(params);
            }
            else {
                this.dataSource.store = this.receiptService.getAll();
            }
        }
    };
    IndexComponent.prototype.getSearch = function (e) {
        this.paramSearch = e;
        this.loadList(e);
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            switch (e.data.status) {
                case 'DA_XUAT':
                    break;
                case 'GHI_TAM':
                    if (e.data.license_number) {
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
                    data_1['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
                    this.vPreviewInvService.xemMau(data_1);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].typeCode.xem_bien_lai
                    };
                    this.vPreviewInvService.xemMauPhanTrang(initialState);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
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
    IndexComponent.prototype.edit = function (data) {
        var rowData = null;
        if (data) {
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(data.status) == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat)
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_voucher, 'error');
            else
                rowData = data;
        }
        else {
            if (this.selectedItems.length > 0) {
                if (this.selectedItems.length == 1) {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.selectedItems[0].status) == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat)
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_voucher, 'error');
                    else
                        rowData = this.selectedItems[0];
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.only_choose_voucher_edit, 'error');
                }
            }
        }
        if (rowData) {
            this.router.navigate(["/system/voucher-tax/" + _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rowData.id)]);
        }
    };
    IndexComponent.prototype.delete = function (data) {
        var _this = this;
        if (this.selectedItems.length || data) {
            var status_1 = '';
            var ids_1 = '';
            if (data) {
                ids_1 = data.id;
            }
            else {
                ids_1 = this.selectedRows.join(',');
            }
            var result = _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
            result.then(function (dialogResult) {
                if (dialogResult) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                    _this.receiptService.delete(ids_1).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                            _this.loadList(_this.paramSearch);
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                        }
                    }, function (err) {
                    }, function () {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    });
                }
            });
        }
    };
    IndexComponent.prototype.kyHangLoat = function (data) {
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
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            else {
                ids = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; }).map(function (p) { return p.id; });
            }
            this.receiptService.layDanhSachBienLai(ids).subscribe(function (rs) {
                if (rs.status === 'success') {
                    var initialState = {
                        licenseList: rs.data.licenses,
                        configs: _this.configs
                    };
                    _this.bsModalSignRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_6__["SendListVoucherComponent"], {
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
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_invoice_selected, 'error');
        }
    };
    IndexComponent.prototype.taiHDXml = function (data) {
        if (data) {
            var ids = [];
            if (data.status != _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
                return;
            }
            ids.push(data.id);
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var sub_1 = this.receiptService.xuatCTXml(ids).subscribe(function (rs) {
                if (rs.status == "success") {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(rs.data.file_name, 'zip', rs.data.file_content);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, "error");
                }
            }, function (err) { }, function () {
                sub_1.unsubscribe();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.please_choose_voucher_exported, 'error');
            return;
        }
    };
    IndexComponent.prototype.taiHDPdf = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                this.invoices = _lst.map(function (e) { return e.id; });
                this.showPopup = true;
                this.totalInvoice = Math.floor(this.invoices.length / 10) + 1;
                this.invoiceIndex = 0;
                this.tempKiFile = 0;
                this.xulyTaiFilePdf();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.please_choose_voucher_exported, 'error');
                return;
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.please_choose_voucher_exported, 'error');
            return;
        }
    };
    IndexComponent.prototype.xulyTaiFilePdf = function () {
        var _this = this;
        var ids = this.iterator(this.invoices, 10, this.invoiceIndex);
        var sub = this.receiptService.xuatChungTuPdf(ids).subscribe(function (rs) {
            var isSuccess = false;
            _this.ganXong = true;
            _this.tempKiFile = 0;
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(rs.data.file_name, 'zip', rs.data.file_content);
                isSuccess = true;
            }
            else {
                _this.isExportFailed = true;
            }
            _this.continuteExportInvoice(isSuccess);
        }, function (err) { }, function () {
            sub.unsubscribe();
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.continuteExportInvoice = function (isSuccess) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.valueProgress += percentComplete;
        if (this.invoiceIndex == this.totalInvoice - 1) {
            if (!this.isExportFailed && isSuccess)
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tải chứng từ thành công", 'success', 5000);
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
    IndexComponent.prototype.createLicense = function () {
        this.router.navigate(['system/voucher-tax/create']);
    };
    IndexComponent.prototype.iterator = function (a, take, skip) {
        var current = skip * 10;
        var l = a.length;
        var end = current + take;
        var part = a.slice(current, end);
        current = end < l ? end : 0;
        return part;
    };
    IndexComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'KY_SO') {
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
        else if (e.itemData.id === 'ADD_MULTIPLE_INVOICE') {
            this.guibenmua(null);
        }
        else if (e.itemData.id == "TAI_CT_PDF") {
            this.taiHDPdf();
        }
    };
    IndexComponent.prototype.sendVoucher = function (id) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var ids = [];
        ids.push(id);
        var sub = this.receiptService.layDanhSachBienLai(ids).subscribe(function (rs) {
            if (rs.status == 'success') {
                var initialState = {
                    licenses: rs.data.licenses,
                };
                _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_6__["LogProcessVoucherComponent"], {
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
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.trangthaihoadon = function (data) {
        switch (data.status) {
            case 'DA_XUAT':
                break;
            case 'GHI_TAM':
                if (data.license_number) {
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
        if (row.status === 'DA_XUAT') {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.THONG_TIN.ban_khong_the_sua_bien_lai_da_xuat, 'error');
        }
        else {
            this.router.navigate(["/system/payment-receipt/" + row.id]);
        }
    };
    IndexComponent.prototype.viewDetailReceipt = function (row) {
        this.router.navigate(["/system/payment-receipt/" + row.id]);
    };
    IndexComponent.prototype.cancelReceipt = function () {
        var _this = this;
        var lstInvoice = this.selectedItems.filter(function (p) { return p.status == 'DA_XUAT'; });
        if (lstInvoice && lstInvoice.length > 0) {
            var _lstCancel = lstInvoice.filter(function (p) { return p.adjustment_type == '7'; });
            if (_lstCancel && _lstCancel.length > 0) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.THONG_TIN.chon_bien_lai_chua_bi_xoa_bo_hoac_chua_bi_thay_the, 'error');
            }
            else {
                var ids_2 = [];
                lstInvoice = lstInvoice.sort(function (invA, invB) {
                    return new Date(invB.receipt_date) - new Date(invA.receipt_date) || invB.receipt_number.localeCompare(invA.receipt_number);
                });
                ids_2 = lstInvoice.map(function (e) { return e.id; });
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                var isView_1 = false;
                var sub_2 = this.receiptService.layDanhSachBienLai(ids_2).subscribe(function (rs) {
                    var lstInvoice = rs.data.receipts.filter(function (p) { return p.adjustment_type == '7'; });
                    if (lstInvoice && lstInvoice.length > 0)
                        isView_1 = true;
                    var lstInv = [];
                    ids_2.forEach(function (id) {
                        var inv = rs.data.receipts.filter(function (p) { return p.id == id; })[0];
                        lstInv.push(inv);
                    });
                    var initialState = {
                        isView: isView_1,
                        data: lstInv,
                        configs: _this.configs,
                    };
                    _this.bsModalRef = _this.modalService.show(_receipt_cancel_receipt_cancel_component__WEBPACK_IMPORTED_MODULE_9__["ReceiptCancelComponent"], {
                        class: 'modal-lg full-width', initialState: initialState, backdrop: 'static',
                        keyboard: false
                    });
                    _this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalRef.content.successSaveItem) {
                            _this.loadList(_this.paramSearch);
                        }
                    });
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_2.unsubscribe();
                });
            }
        }
        else
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Bạn không thể hủy hóa đơn này', 'error');
    };
    IndexComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    IndexComponent.prototype.onImportHiding = function (e) {
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
    IndexComponent.prototype.calculateFilterExpression = function (filterValue, selectedFilterOperation) {
        selectedFilterOperation = "contains"; //Helper.multilfilterColumn;
        return [["template_code_temp", selectedFilterOperation || '=', filterValue], 'or', ["receipt_series_temp", selectedFilterOperation || '=', filterValue]];
    };
    IndexComponent.prototype.calculateFilterCustomerExpression = function (filterValue, selectedFilterOperation) {
        selectedFilterOperation = "contains"; //Helper.multilfilterColumn;
        return [["customer_name_temp", selectedFilterOperation || '=', filterValue], 'or', ["payer_name_temp", selectedFilterOperation || '=', filterValue]];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_receipt_search_advanced_search_advanced_component__WEBPACK_IMPORTED_MODULE_10__["ReceiptSearchComponent"]),
        __metadata("design:type", _shared_components_receipt_search_advanced_search_advanced_component__WEBPACK_IMPORTED_MODULE_10__["ReceiptSearchComponent"])
    ], IndexComponent.prototype, "searchComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_13__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_13__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/handle-receipt/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/handle-receipt/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_handle_receipt_shared__WEBPACK_IMPORTED_MODULE_7__["HandleReceiptService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_8__["PaymentReceiptService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_11__["ViewInvoiceService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_12__["InvoiceService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-receipt/components/receipt-cancel/receipt-cancel.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/handle-receipt/components/receipt-cancel/receipt-cancel.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{_translate.THONG_TIN.huy_bien_lai}}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"dong()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid id=\"invoiceHistoryGrid\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [wordWrapEnabled]=\"true\"\r\n    (onEditorPreparing)=\"onEditorPreparing($event)\" (onCellPrepared)=\"onCellPrepared($event)\" [showRowLines]=\"true\">\r\n    <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n    <!-- Số biên lai -->\r\n    <dxi-column cellTemplate=\"receiptNumber\" dataField=\"receipt_number\"\r\n      caption=\"{{ 'GRID.INVOICE.receipt_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n      alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Mẫu số, ký hiệu -->\r\n    <dxi-column cellTemplate=\"templateCode\"\r\n      caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n      minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Ngày biên lai -->\r\n    <dxi-column dataField=\"receipt_date\" caption=\"{{ 'GRID.INVOICE.receipt_date' | translate }}\"\r\n      minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n      format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Tên người nộp tiền -->\r\n    <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.payer_name' | translate }}\" alignment=\"left\"\r\n      minWidth=\"200\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Ngày hủy -->\r\n    <dxi-column dataField=\"destroy_date\" caption=\"{{ 'GRID.INVOICE.date_cancel' | translate }}\"\r\n      [editorOptions]=\"{ placeholder: 'dd/MM/yyyy',useMaskBehavior:true }\" dataType=\"date\" format=\"dd/MM/yyyy\"\r\n      dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"left\" minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\">\r\n    </dxi-column>\r\n    <!-- Lý do hủy -->\r\n    <dxi-column dataField=\"destroy_reason\" caption=\"{{_translate.CONTROLL.LABEL.destroy_reason}}\" alignment=\"left\"\r\n      minWidth=\"150\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n      <p>{{ d.data.template_code }}</p>\r\n      <p>{{ d.data.receipt_series }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'receiptNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"viewDetailReceipt(d.data)\" href=\"javascript:void(0)\">{{ d.data.receipt_number }}</a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p>{{ d.data.customer_name || d.data.payer_name }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n      <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n    </div>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button disableDoubleClick *ngIf=\"!isView\" text=\"{{_translate.CONTROLL.BUTTON.save }}\" (click)=\"xoaBo()\"\r\n    icon=\"{{_translate.ICONS.save }}\" type=\"default\" validationGroup=\"formData\">\r\n  </dx-button>\r\n  <!-- Đóng -->\r\n  <dx-button  text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" icon=\"{{_translate.ICONS.come_back }}\" type=\"default\"\r\n    (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/handle-receipt/components/receipt-cancel/receipt-cancel.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/handle-receipt/components/receipt-cancel/receipt-cancel.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gach-chan{text-decoration:underline}.img-upload-second{text-align:center}.img-upload-second i{margin-top:10px;width:40px;height:auto;cursor:pointer}.img-upload-second p{margin-top:10px}\n"

/***/ }),

/***/ "./src/app/modules/handle-receipt/components/receipt-cancel/receipt-cancel.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/handle-receipt/components/receipt-cancel/receipt-cancel.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ReceiptCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptCancelComponent", function() { return ReceiptCancelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/payment-receipt/shared/payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_handle_receipt_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/handle-receipt/shared */ "./src/app/modules/handle-receipt/shared/index.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var ReceiptCancelComponent = /** @class */ (function () {
    function ReceiptCancelComponent(bsModalImportRef, socketService, handleReceiptService, authService, vatService, translate, router, paymentRService, modalService, modalImportService, spinner, bsModalViewModel, vPreviewInvService) {
        var _this = this;
        this.bsModalImportRef = bsModalImportRef;
        this.socketService = socketService;
        this.handleReceiptService = handleReceiptService;
        this.authService = authService;
        this.vatService = vatService;
        this.translate = translate;
        this.router = router;
        this.paymentRService = paymentRService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.spinner = spinner;
        this.bsModalViewModel = bsModalViewModel;
        this.vPreviewInvService = vPreviewInvService;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.emailPattern = _config_index__WEBPACK_IMPORTED_MODULE_11__["pattern"].email;
        this.isTT78 = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ReceiptCancelComponent.prototype.ngOnInit = function () {
        this.invoicesStore = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9___default.a({
            key: 'id',
            data: this.data
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10___default.a({
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
    ReceiptCancelComponent.prototype.createDocRelateNumber = function () {
        var number_report = "";
        if (this.countReport < 10)
            number_report = '0' + this.countReport + '/' + new Date().getFullYear() + '/BB-HBHĐ';
        else
            number_report = this.countReport + '/' + new Date().getFullYear() + '/BB-HBHĐ';
        this.countReport++;
        return number_report;
    };
    ReceiptCancelComponent.prototype.connectWebsocket = function () {
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
    ReceiptCancelComponent.prototype._validGrid = function () {
        var _this = this;
        var invalid = true;
        this.invoicesStore.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                item.doc_relate_date = item.doc_relate_date ? moment__WEBPACK_IMPORTED_MODULE_1__(item.doc_relate_date).format('YYYY-MM-DD') : item.doc_relate_date;
                item.destroy_date = item.destroy_date ? moment__WEBPACK_IMPORTED_MODULE_1__(item.destroy_date).format('YYYY-MM-DD') : item.destroy_date;
                if (!item.destroy_date && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.CONTROLL.LABEL.cancel_date + " " + _this._translate.VALIDATION.required, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_date'));
                    invalid = false;
                    return false;
                }
                else {
                    var currentDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(item.destroy_date) > moment__WEBPACK_IMPORTED_MODULE_1__(currentDate) && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.date_cancel_invoice_not_greater_date_current, 'error');
                        _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_date'));
                        invalid = false;
                        return false;
                    }
                    var receipt_date = moment__WEBPACK_IMPORTED_MODULE_1__(item.receipt_date).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(item.destroy_date) < moment__WEBPACK_IMPORTED_MODULE_1__(receipt_date) && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.THONG_TIN.ngay_huy_lon_hon_ngay_bien_lai, 'error');
                        _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_date'));
                        invalid = false;
                        return false;
                    }
                }
                if (!item.destroy_reason && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.CONTROLL.LABEL.reason_cancels + " " + _this._translate.VALIDATION.required, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_reason'));
                    invalid = false;
                    return false;
                }
                if (item.payer_email && !_this.emailPattern.test(item.payer_email) && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Email ' + _this._translate.VALIDATION.not_pattern, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'payer_email'));
                    invalid = false;
                    return false;
                }
            });
        });
        return invalid;
    };
    ReceiptCancelComponent.prototype.xoaBo = function () {
        var _this = this;
        if (!_core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesService"].checkTimeExportInv(this.configs.system_parameter)) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_7__["String"].Format(this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_1__(this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_1__(this.configs.system_parameter.time_end).format('HH:mm')), 'error');
            return;
        }
        setTimeout(function () {
            if (_this._validGrid()) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirmVA(_this._translate.CONFIRM.acction_function, _this._translate.NOTIFY.notify, function () {
                    _this.showPopup = true;
                    _this.invoicesStore.load().then(function (dataSource) {
                        if (dataSource.length > 0) {
                            _this.invoices = dataSource.filter(function (p) { return p.adjustment_type != '7'; });
                            _this.totalInvoice = _this.invoices.length;
                            _this.invoiceIndex = 0;
                            _this.tempKiFile = 0;
                            _this.xuatHoaDon();
                        }
                    });
                });
            }
        }, 300);
    };
    ReceiptCancelComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        var i = this.invoiceIndex;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat(this.invoices[i]);
        }
        else
            this.socketService.kyBienLai(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
    };
    ReceiptCancelComponent.prototype.xuLiApiKhiXuat = function (invoice) {
        var _this = this;
        var tempTemplate = invoice.template;
        delete invoice.template;
        var xmlInvoice = "";
        var data = {
            id: invoice.id,
            destroy_reason: invoice.destroy_reason,
            destroy_date: invoice.destroy_date,
            adjustment_type: "7",
            email: invoice.buyer_email,
        };
        var isNewXml = 0;
        var sub = this.handleReceiptService.getXmlString(data).subscribe(function (rs) {
            invoice.template = tempTemplate;
            if (rs.status == 'success') {
                xmlInvoice = rs.data.receipt.xml_string;
                var sign_date = moment__WEBPACK_IMPORTED_MODULE_1__(rs.data.receipt.receipt_sign_date).format('YYYY-MM-DD HH:mm:ss');
                isNewXml = rs.data.is_new_xml;
                if (isNewXml)
                    _this.nodeSign = "//HDon/DSCKS/NBan";
                else
                    _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                if (xmlInvoice != "") {
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing))
                        _this.goiApiXuatHoaDon(xmlInvoice, invoice);
                    else {
                        _this.xuLyKiFile(xmlInvoice, sign_date);
                    }
                }
            }
            else {
                _this.showPopup = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    ReceiptCancelComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        this.socketService.kyBienLai(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate);
    };
    ReceiptCancelComponent.prototype.goiApiXuatHoaDon = function (xml_string, invoice) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        // Helper.dowloadFile('hoadon.xml', 'xml', xml_string);
        this.subXuatHoaDon = this.handleReceiptService.cancelReceipt({
            receipt: {
                id: invoice.id,
                destroy_reason: invoice.destroy_reason,
                destroy_date: invoice.destroy_date,
                xml_string: xml_string
            }
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.valueProgress += percentComplete;
                _this.tempKiFile = 0;
                invoice.adjustment_type = '7';
                if (_this.invoiceIndex < _this.totalInvoice - 1) {
                    _this.invoiceIndex++;
                    _this.xuatHoaDon();
                }
                else if (_this.invoiceIndex == _this.totalInvoice - 1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.THONG_TIN.huy_bien_lai_thanh_cong, 'success');
                    _this.isView = true;
                    setTimeout(function () {
                        _this.showPopup = false;
                    }, 300);
                }
            }
            else {
                _this.showPopup = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _this.subXuatHoaDon.unsubscribe();
        });
    };
    ReceiptCancelComponent.prototype.dinhKemFile = function (evt) {
        evt.srcElement.firstChild.click();
        // document.getElementById("file-dinh-kem").click();
        // console.log(e)
    };
    ReceiptCancelComponent.prototype.choseFile = function (evt) {
        //evt.srcElement.firstChild.click();
        document.getElementById("file-input").click();
    };
    ReceiptCancelComponent.prototype.fileChanged = function (e) {
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
    ReceiptCancelComponent.prototype.onDinhKemFile = function (e) {
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
    ReceiptCancelComponent.prototype.removeFile = function (i) {
        var _lstAttach = [];
        _lstAttach = this.dataSource[0]["invoice_files"];
        _lstAttach.splice(i, 1);
    };
    ReceiptCancelComponent.prototype.downloadFile = function (data) {
        var re = /(?:\.([^.]+))?$/;
        var fileType = re.exec(data.file_name)[1];
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(data.file_name, fileType, data.file_content);
    };
    ReceiptCancelComponent.prototype.xuatMauBienBan = function (data) {
        if (this._validGrid()) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var inv = Object.assign({}, data);
            inv.adjustment_type = "1";
            inv.auto_value_price = inv.auto_value_price == null ? false : inv.auto_value_price;
            inv.invoice_files = [];
            inv.doc_relate_date = moment__WEBPACK_IMPORTED_MODULE_1__(data.doc_relate_date).format('YYYY-MM-DD');
            this.vatService.xuatMauBienBan(inv).subscribe(function (rs) {
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
    ReceiptCancelComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ReceiptCancelComponent.prototype.onImportHiding = function (e) {
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
    ReceiptCancelComponent.prototype.dong = function () {
        this.bsModalImportRef.content.successSaveItem = "close";
        this.bsModalImportRef.hide();
    };
    ReceiptCancelComponent.prototype.onEditorPreparing = function (e) {
        if (e.parentType === 'dataRow') {
            if (e.dataField === 'destroy_date' || e.dataField === 'destroy_reason') {
                if (this.isView || e.row.data.adjustment_type == "7")
                    e.editorOptions.disabled = true;
            }
        }
    };
    ReceiptCancelComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            /* Bôi đỏ các trường bắt buộc */
            if (e.column.dataField == "destroy_date") {
                if (!e.data.destroy_date) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = this._translate.CONTROLL.LABEL.cancel_date + " " + this._translate.VALIDATION.required;
                }
                else {
                    var currentDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
                    var receipt_date = moment__WEBPACK_IMPORTED_MODULE_1__(e.data.receipt_date).format('YYYY-MM-DD');
                    var destroy_date = moment__WEBPACK_IMPORTED_MODULE_1__(e.data.destroy_date).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(destroy_date) > moment__WEBPACK_IMPORTED_MODULE_1__(currentDate)) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = this._translate.NOTIFY.date_cancel_invoice_not_greater_date_current;
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(destroy_date) < moment__WEBPACK_IMPORTED_MODULE_1__(receipt_date)) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = this._translate.THONG_TIN.ngay_huy_lon_hon_ngay_bien_lai;
                    }
                }
            }
            if (e.column.dataField == "destroy_reason") {
                if (!e.data.destroy_reason) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = this._translate.CONTROLL.LABEL.reason_cancels + " " + this._translate.VALIDATION.required;
                }
            }
            if (e.column.dataField == "payer_email") {
                if (e.data.payer_email && !this.emailPattern.test(e.data.payer_email)) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = 'Email ' + this._translate.VALIDATION.not_pattern;
                }
            }
        }
    };
    ReceiptCancelComponent.prototype.viewDetailReceipt = function (data) {
        if (data) {
            this.dataInfor = data;
            var ids = [];
            ids.push(data.id);
            if (this.configs.system_parameter.view_multi_invoice) {
                var data_1 = this.paymentRService.taodulieuXemMau(ids);
                data_1['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
                this.vPreviewInvService.xemMau(data_1);
            }
            else {
                var initialState = {
                    items: ids,
                    isXuatHD: false,
                    hinhthucxuat: '',
                    typeAction: _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].typeCode.xem_bien_lai
                };
                this.vPreviewInvService.xemMauPhanTrang(initialState);
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    ReceiptCancelComponent.prototype.setUrlNavigate = function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"])
    ], ReceiptCancelComponent.prototype, "dataGrid", void 0);
    ReceiptCancelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receipt-cancel',
            template: __webpack_require__(/*! ./receipt-cancel.component.html */ "./src/app/modules/handle-receipt/components/receipt-cancel/receipt-cancel.component.html"),
            styles: [__webpack_require__(/*! ./receipt-cancel.component.scss */ "./src/app/modules/handle-receipt/components/receipt-cancel/receipt-cancel.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _modules_handle_receipt_shared__WEBPACK_IMPORTED_MODULE_16__["HandleReceiptService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_13__["PaymentReceiptService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsModalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_17__["ViewInvoiceService"]])
    ], ReceiptCancelComponent);
    return ReceiptCancelComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-receipt/handle-receipt-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/handle-receipt/handle-receipt-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: HandleReceiptRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleReceiptRoutingModule", function() { return HandleReceiptRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/handle-receipt/components/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
];
var HandleReceiptRoutingModule = /** @class */ (function () {
    function HandleReceiptRoutingModule() {
    }
    HandleReceiptRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HandleReceiptRoutingModule);
    return HandleReceiptRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/handle-receipt/handle-receipt.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/handle-receipt/handle-receipt.module.ts ***!
  \*****************************************************************/
/*! exports provided: HandleReceiptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleReceiptModule", function() { return HandleReceiptModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _handle_receipt_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-receipt-routing.module */ "./src/app/modules/handle-receipt/handle-receipt-routing.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/handle-receipt/components/index/index.component.ts");
/* harmony import */ var _components_receipt_cancel_receipt_cancel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/receipt-cancel/receipt-cancel.component */ "./src/app/modules/handle-receipt/components/receipt-cancel/receipt-cancel.component.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_components_receipt_search_advanced_search_advanced_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/components/receipt-search-advanced/search-advanced.component */ "./src/app/shared/components/receipt-search-advanced/search-advanced.component.ts");
/* harmony import */ var _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/payment-receipt/shared/payment-receipt.service */ "./src/app/modules/payment-receipt/shared/payment-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var HandleReceiptModule = /** @class */ (function () {
    function HandleReceiptModule() {
    }
    HandleReceiptModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _handle_receipt_routing_module__WEBPACK_IMPORTED_MODULE_2__["HandleReceiptRoutingModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_5__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_6__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxPopoverModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_9__["VatSharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_9__["SomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxFormModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
            ],
            entryComponents: [
                _components_receipt_cancel_receipt_cancel_component__WEBPACK_IMPORTED_MODULE_4__["ReceiptCancelComponent"],
                _shared_components_receipt_search_advanced_search_advanced_component__WEBPACK_IMPORTED_MODULE_15__["ReceiptSearchComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_9__["ViewInvoiceMultipageComponent"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
                _components_receipt_cancel_receipt_cancel_component__WEBPACK_IMPORTED_MODULE_4__["ReceiptCancelComponent"]
            ],
            providers: [
                _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_10__["VatDeactivateGuard"],
                _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmService"],
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_14__["VatService"],
                _modules_payment_receipt_shared_payment_receipt_service__WEBPACK_IMPORTED_MODULE_16__["PaymentReceiptService"]
            ]
        })
    ], HandleReceiptModule);
    return HandleReceiptModule;
}());



/***/ }),

/***/ "./src/app/modules/handle-receipt/shared/handle-receipt.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/handle-receipt/shared/handle-receipt.service.ts ***!
  \*************************************************************************/
/*! exports provided: HandleReceiptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleReceiptService", function() { return HandleReceiptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HandleReceiptService = /** @class */ (function () {
    function HandleReceiptService(apiService) {
        this.apiService = apiService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format('YYYY-MM-DD');
        this.isCopy = false;
    }
    /*  */
    HandleReceiptService.prototype.getAll = function (params) {
        var includes = '&options[is_view_index]=1';
        var fields = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].danh_sach_truong.bien_lai;
        var filter_string = '&filter_groups[1][or]=true&filter_groups[1][filters][0][key]=originInvoiceExported&filter_groups[1][filters][0][value]=true&filter_groups[1][filters][0][operator]=eq&filter_groups[1][filters][1][key]=adjustment_type&filter_groups[1][filters][1][value]=1&filter_groups[1][filters][1][operator]=eq&filter_groups[1][filters][1][not]=true';
        var filter = filter_string;
        if (params) {
            filter += '&' + params;
        }
        var sort = '&sort[0][key]=status_order&sort[0][direction]=ASC';
        return this.apiService.getDataTable('/receipts', includes + fields + filter, sort);
    };
    /*  */
    HandleReceiptService.prototype.ghiTam = function (data, license_number) {
        if (license_number === void 0) { license_number = false; }
        var url = license_number ? '/licenses?options[license_number]=1' : '/licenses';
        return this.apiService.post(url, { license: data });
    };
    /*  */
    HandleReceiptService.prototype.xuatChungTu = function (data) {
        return this.apiService.post('/licenses-export', { license: data });
    };
    /*  */
    HandleReceiptService.prototype.edit = function (id, data, license_number) {
        if (license_number === void 0) { license_number = false; }
        var url = license_number ? "/licenses/" + id + "?options[license_number]=1" : "/licenses/" + id;
        return this.apiService.put(url, { license: data });
    };
    /*  */
    HandleReceiptService.prototype.xuatChoKy = function (data) {
        if (data.id) {
            return this.apiService.put("/licenses/" + data.id + "?options[license_number]=1&options[sign_later]=1", { license: data });
        }
        return this.apiService.post('/licenses?options[license_number]=1&options[sign_later]=1', { license: data });
    };
    /*  */
    HandleReceiptService.prototype.preview = function (data) {
        return this.apiService.post('/licenses-preview', {
            licenses: [
                data
            ]
        });
    };
    /*  */
    HandleReceiptService.prototype.view = function (id) {
        return this.apiService.post('/licenses-view', { license: { ids: [id] } });
    };
    /*  */
    HandleReceiptService.prototype.getInvoiceResolver = function (loaiHoaDon) {
        var _arrOut = [];
        _arrOut.push(this.apiService.get("/templates?filter_groups[1][filters][1][key]=invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq&filter_groups[2][filters][2][key]=status&filter_groups[2][filters][2][value]=HOAT_DONG&filter_groups[2][filters][2][operator]=eq"));
        return _arrOut;
    };
    /*  */
    HandleReceiptService.prototype.showVoucherResolver = function (id, loaiHoaDon) {
        var _arrOut = [];
        _arrOut.push(this.apiService.get('/licenses/' + id + '?includes[]=license_files&includes[]=license_options'));
        _arrOut.push(this.apiService.get("/templates?filter_groups[1][filters][1][key]=invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq&filter_groups[2][filters][2][key]=status&filter_groups[2][filters][2][value]=HOAT_DONG&filter_groups[2][filters][2][operator]=eq"));
        return _arrOut;
    };
    /*  */
    HandleReceiptService.prototype.delete = function (id) {
        return this.apiService.delete('/licenses/' + id);
    };
    /*  */
    HandleReceiptService.prototype.xemChungTuImport = function (ids) {
        return this.apiService.post('/licenses-view', { license: { ids: ids } });
    };
    /*  */
    HandleReceiptService.prototype.xuatChungTuPdf = function (ids) {
        return this.apiService.post('/licenses/export-file-zip-pdf', { license: ids });
    };
    /*  */
    HandleReceiptService.prototype.xuatCTXml = function (ids) {
        return this.apiService.post('/licenses/export-file-zip-xml', { license: ids });
    };
    /*  */
    HandleReceiptService.prototype.layDanhSachBienLai = function (ids) {
        var includes = '';
        var param = '&filter_groups[0][or]=true';
        ids.forEach(function (id, index) {
            param += "&sort[0][key]=receipt_number&sort[0][direction]=ASC&filter_groups[0][filters][" + index + "][key]=id&filter_groups[0][filters][" + index + "][value]=" + id + "&filter_groups[0][filters][" + index + "][operator]=eq";
        });
        return this.apiService.get('/receipts?' + includes + param);
    };
    HandleReceiptService.prototype.sendMail = function (data) {
        return this.apiService.post('/license-send-mail', { licenses: data });
    };
    HandleReceiptService.prototype.getVoucherProccess = function (license_id) {
        return this.apiService.get("/license-process?includes[]=user&filter_groups[0][filters][0][key]=license_id&filter_groups[0][filters][0][value]=" + license_id + "&filter_groups[0][filters][0][operator]=eq&sort[0][key]=process_time&sort[0][direction]=DESC");
    };
    HandleReceiptService.prototype.getXmlString = function (data) {
        return this.apiService.post('/receipts/get-xml', { receipt: data });
    };
    HandleReceiptService.prototype.cancelReceipt = function (data) {
        return this.apiService.post('/receipts-cancel', data);
    };
    HandleReceiptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HandleReceiptService);
    return HandleReceiptService;
}());



/***/ }),

/***/ "./src/app/modules/handle-receipt/shared/index.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/handle-receipt/shared/index.ts ***!
  \********************************************************/
/*! exports provided: HandleReceiptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handle_receipt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle-receipt.service */ "./src/app/modules/handle-receipt/shared/handle-receipt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HandleReceiptService", function() { return _handle_receipt_service__WEBPACK_IMPORTED_MODULE_0__["HandleReceiptService"]; });




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
//# sourceMappingURL=handle-receipt-handle-receipt-module.js.map