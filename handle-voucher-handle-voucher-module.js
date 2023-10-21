(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["handle-voucher-handle-voucher-module"],{

/***/ "./src/app/modules/handle-voucher/components/index/index.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/handle-voucher/components/index/index.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-8\">\r\n    <app-voucher-search (searchContentChange)=\"getSearch($event)\"></app-voucher-search>\r\n  </div>\r\n  <div class=\"col-md-4 list-header\" style=\"max-height: 70px;\">\r\n    <div *ngIf=\"isXuLyChungTu\" class=\"pull-right button-panel\">\r\n      <dx-button [(icon)]=\"_translate.ICONS.delete\" text=\"{{ 'CONTROLL.BUTTON.cancel_vouchers' | translate }}\"\r\n        type=\"default\" (click)=\"cancelVoucher()\"></dx-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerInvoice\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\"\r\n  [showBorders]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\" [noDataText] =\"textHienThiLuoi\">\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\"></dxo-selection>\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"handleinvoice\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"single\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <!-- Số chứng từ -->\r\n  <dxi-column cellTemplate=\"licenseNumber\" dataField=\"license_number\"\r\n    caption=\"{{ 'CONTROLL.LABEL.vehicle_license_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n    alignment=\"center\" sortOrder=\"desc\" [sortIndex]=\"1\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <!-- Mẫu số, ký hiệu -->\r\n  <dxi-column cellTemplate=\"templateCode\" [filterOperations]=\"['contains']\" [calculateFilterExpression]=\"calculateFilterExpression\"\r\n    caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\"></dxi-column>\r\n  <!-- Ngày chứng từ -->\r\n  <dxi-column dataField=\"license_date\" [editorOptions]=\"{useMaskBehavior:true}\"\r\n    caption=\"{{ 'CONTROLL.LABEL.invoice_voucher' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\"\r\n    dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"\r\n    headerCellTemplate=\"titleHeaderTemplate\" sortOrder=\"desc\" [sortIndex]=\"0\"></dxi-column>\r\n  <!-- Mã số thuế -->\r\n  <dxi-column dataField=\"taxpayers_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"center\" allowSearch=\"true\">\r\n  </dxi-column>\r\n  <!-- Số CMND -->\r\n  <dxi-column dataField=\"id_card\" caption=\"{{ 'GRID.INVOICE.id_card' | translate }}\" alignment=\"center\" minWidth=\"80\">\r\n  </dxi-column>\r\n  <!-- Tên người nộp thuế -->\r\n  <dxi-column dataField=\"taxpayers_name\" caption=\"{{ 'GRID.INVOICE.taxpayer_name' | translate }}\" alignment=\"left\"\r\n    minWidth=\"200\"></dxi-column>\r\n  <!-- Số TNCN còn được nhận -->\r\n  <dxi-column dataField=\"amount_personal_income_still_received_format\"\r\n    caption=\"{{ 'GRID.INVOICE.amount_personal_income_still_received' | translate }}\" alignment=\"right\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\">\r\n  </dxi-column>\r\n  <!-- Tình trạng xử lý -->\r\n  <dxi-column cellTemplate=\"statusInvoice\" caption=\"{{ 'CONTROLL.LABEL.processing_status' | translate }}\"\r\n              [width]=\"_translate.GRID_WIDTH.trang_thai_gui_mail\" alignment=\"center\"></dxi-column>\r\n  <!-- Chức năng -->\r\n  <dxi-column cellTemplate=\"actionIcon\" width=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let d of 'licenseNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewDetailVoucher(d.data)\" href=\"javascript:void(0)\">{{ d.data.license_number }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p style=\"text-decoration: underline;cursor: pointer;\">\r\n      {{ d.data.template_code }}</p>\r\n    <p style=\"text-decoration: underline;cursor: pointer;\">\r\n      {{ d.data.license_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    {{d.data.license_date}}\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'statusInvoice'\">\r\n    <ng-container [ngSwitch]=\"d.data.adjustment_type\">\r\n      <p *ngSwitchCase=\"1\">{{ 'GRID.GENERAL.original_voucher' | translate }}</p>\r\n      <p *ngSwitchCase=\"7\">{{ 'GRID.GENERAL.voucher_removed' | translate }}</p>\r\n    </ng-container>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n    <a *ngIf=\"d.data.status =='DA_XUAT'\" style=\"float: right;\" title=\"{{_translate.CONTROLL.BUTTON.tai_hd_xml}}\"\r\n    class=\"taiXmlIcon actionIcon\" (click)=\"taiHDXml(d.data)\"\r\n    href=\"javascript:void(0)\">\r\n </a>\r\n  </div>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager\r\n    [showPageSizeSelector]=\"true\"\r\n    [allowedPageSizes]=\"[15, 35, 50, 100]\"\r\n    [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\"\r\n    infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar\r\n        [min]=\"0\"\r\n        [max]=\"100\"\r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-voucher/components/index/index.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/handle-voucher/components/index/index.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}::ng-deep #gridContainerVat .dx-cell-focus-disabled{overflow:visible !important}::ng-deep #gridContainerVat .dx-datagrid-rowsview{overflow:visible}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/handle-voucher/components/index/index.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/handle-voucher/components/index/index.component.ts ***!
  \****************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_handle_voucher_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/handle-voucher/shared */ "./src/app/modules/handle-voucher/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_handle_voucher_components_voucher_cancel_voucher_cancel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/handle-voucher/components/voucher-cancel/voucher-cancel.component */ "./src/app/modules/handle-voucher/components/voucher-cancel/voucher-cancel.component.ts");
/* harmony import */ var _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/vouchers/shared */ "./src/app/modules/vouchers/shared/index.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
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
    function IndexComponent(authService, translate, router, handVoucherService, modalService, modalImportService, socketService, voucher_service, vPreviewInvService, spinner) {
        var _this = this;
        this.authService = authService;
        this.translate = translate;
        this.router = router;
        this.handVoucherService = handVoucherService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.socketService = socketService;
        this.voucher_service = voucher_service;
        this.vPreviewInvService = vPreviewInvService;
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
        this.isXuLyChungTu = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
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
    IndexComponent.prototype.ngOnInit = function () {
        this.textHienThiLuoi = "Không có dữ liệu";
        this.configs = this.authService.getConfigs();
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        this.currentUser = this.authService.getCurrentUser();
        var listpermissions = this.currentUser.user.permissions.split(',');
        var quyenxulychungtu = listpermissions.filter(function (p) { return p === 'xu_ly_chung_tu_khau_tru_thue_tncn'; })[0];
        if (quyenxulychungtu)
            this.isXuLyChungTu = true;
        if (!this.isXuLyChungTu) {
            this.textHienThiLuoi = "Bạn không có quyền thực hiện chức năng này";
        }
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
        if (this.isXuLyChungTu) {
            if (params) {
                this.dataSource.store = this.handVoucherService.getAll(params);
            }
            else {
                this.dataSource.store = this.handVoucherService.getAll();
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
                    var data_1 = this.voucher_service.taodulieuXemMau(ids);
                    data_1['configs'] = lodash__WEBPACK_IMPORTED_MODULE_11__["cloneDeep"](_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.chungtu);
                    this.vPreviewInvService.xemMau(data_1);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.xem_chung_tu
                    };
                    this.vPreviewInvService.xemMauPhanTrang(initialState);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
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
            if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(data.status) == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat)
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_voucher, 'error');
            else
                rowData = data;
        }
        else {
            if (this.selectedItems.length > 0) {
                if (this.selectedItems.length == 1) {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(this.selectedItems[0].status) == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat)
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_voucher, 'error');
                    else
                        rowData = this.selectedItems[0];
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.only_choose_voucher_edit, 'error');
                }
            }
        }
        if (rowData) {
            this.router.navigate(["/system/voucher-tax/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)]);
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
            var result = _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
            result.then(function (dialogResult) {
                if (dialogResult) {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                    _this.handVoucherService.delete(ids_1).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                            _this.loadList(_this.paramSearch);
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                        }
                    }, function (err) {
                    }, function () {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
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
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            else {
                ids = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; }).map(function (p) { return p.id; });
            }
            this.handVoucherService.layDanhSachChungTu(ids).subscribe(function (rs) {
                if (rs.status === 'success') {
                    var initialState = {
                        licenseList: rs.data.licenses,
                        configs: _this.configs
                    };
                    _this.bsModalSignRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_7__["SendListVoucherComponent"], {
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
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_invoice_selected, 'error');
        }
    };
    IndexComponent.prototype.taiHDXml = function (data) {
        if (data) {
            var ids = [];
            if (data.status != _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.invoice_export_status, 'error');
                return;
            }
            ids.push(data.id);
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var sub_1 = this.handVoucherService.xuatCTXml(ids).subscribe(function (rs) {
                if (rs.status == "success") {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].dowloadFile(rs.data.file_name, 'zip', rs.data.file_content);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, "error");
                }
            }, function (err) { }, function () {
                sub_1.unsubscribe();
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.please_choose_voucher_exported, 'error');
            return;
        }
    };
    IndexComponent.prototype.taiHDPdf = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                this.invoices = _lst.map(function (e) { return e.id; });
                this.showPopup = true;
                this.totalInvoice = Math.floor(this.invoices.length / 10) + 1;
                this.invoiceIndex = 0;
                this.tempKiFile = 0;
                this.xulyTaiFilePdf();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.please_choose_voucher_exported, 'error');
                return;
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.please_choose_voucher_exported, 'error');
            return;
        }
    };
    IndexComponent.prototype.xulyTaiFilePdf = function () {
        var _this = this;
        var ids = this.iterator(this.invoices, 10, this.invoiceIndex);
        var sub = this.handVoucherService.xuatChungTuPdf(ids).subscribe(function (rs) {
            var isSuccess = false;
            _this.ganXong = true;
            _this.tempKiFile = 0;
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].dowloadFile(rs.data.file_name, 'zip', rs.data.file_content);
                isSuccess = true;
            }
            else {
                _this.isExportFailed = true;
            }
            _this.continuteExportInvoice(isSuccess);
        }, function (err) { }, function () {
            sub.unsubscribe();
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.continuteExportInvoice = function (isSuccess) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.valueProgress += percentComplete;
        if (this.invoiceIndex == this.totalInvoice - 1) {
            if (!this.isExportFailed && isSuccess)
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Tải chứng từ thành công", 'success', 5000);
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
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var ids = [];
        ids.push(id);
        var sub = this.handVoucherService.layDanhSachChungTu(ids).subscribe(function (rs) {
            if (rs.status == 'success') {
                var initialState = {
                    licenses: rs.data.licenses,
                };
                _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_7__["LogProcessVoucherComponent"], {
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
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs["message"], 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
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
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_voucher, 'error');
        }
        else {
            this.router.navigate(["/system/voucher-tax/" + row.id]);
        }
    };
    IndexComponent.prototype.viewDetailVoucher = function (row) {
        this.router.navigate(["/system/voucher-tax/" + row.id]);
    };
    IndexComponent.prototype.cancelVoucher = function () {
        var _this = this;
        var lstInvoice = this.selectedItems.filter(function (p) { return p.status == 'DA_XUAT'; });
        if (lstInvoice && lstInvoice.length > 0) {
            var _lstCancel = lstInvoice.filter(function (p) { return p.adjustment_type == '7'; });
            if (_lstCancel && _lstCancel.length > 0) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.choose_cancel_voucher, 'error');
            }
            else {
                var ids_2 = [];
                lstInvoice = lstInvoice.sort(function (invA, invB) {
                    return new Date(invB.license_date) - new Date(invA.license_date) || invB.license_number.localeCompare(invA.license_number);
                });
                ids_2 = lstInvoice.map(function (e) { return e.id; });
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                var isView_1 = false;
                var sub_2 = this.handVoucherService.layDanhSachChungTu(ids_2).subscribe(function (rs) {
                    var lstInvoice = rs.data.licenses.filter(function (p) { return p.adjustment_type == '7'; });
                    if (lstInvoice && lstInvoice.length > 0)
                        isView_1 = true;
                    var lstInv = [];
                    ids_2.forEach(function (id) {
                        var inv = rs.data.licenses.filter(function (p) { return p.id == id; })[0];
                        lstInv.push(inv);
                    });
                    var initialState = {
                        isView: isView_1,
                        data: lstInv,
                        configs: _this.configs,
                    };
                    _this.bsModalRef = _this.modalService.show(_modules_handle_voucher_components_voucher_cancel_voucher_cancel_component__WEBPACK_IMPORTED_MODULE_8__["VoucherCancelComponent"], {
                        class: 'modal-lg full-width', initialState: initialState, backdrop: 'static',
                        keyboard: false
                    });
                    _this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalRef.content.isView) {
                            _this.loadList(_this.paramSearch);
                        }
                    });
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                    sub_2.unsubscribe();
                });
            }
        }
        else
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Bạn không thể hủy hóa đơn này', 'error');
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
        return [["template_code_temp", selectedFilterOperation || '=', filterValue], 'or', ["license_series_temp", selectedFilterOperation || '=', filterValue]];
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/handle-voucher/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/handle-voucher/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_handle_voucher_shared__WEBPACK_IMPORTED_MODULE_2__["HandleVoucherService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_9__["VoucherService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_10__["ViewInvoiceService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-voucher/components/voucher-cancel/voucher-cancel.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/handle-voucher/components/voucher-cancel/voucher-cancel.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.BUTTON.cancel_vouchers}}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid\r\n    id=\"invoiceHistoryGrid\"\r\n    [dataSource]=\"dataSource\"\r\n    [showBorders]=\"true\"\r\n    [wordWrapEnabled]=\"true\"\r\n    (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\"\r\n    [showRowLines]=\"true\">\r\n    <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n    <!-- Số chứng từ -->\r\n    <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"license_number\"\r\n              caption=\"{{ 'CONTROLL.LABEL.vehicle_license_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n              alignment=\"center\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Mẫu số, ký hiệu -->\r\n    <dxi-column cellTemplate=\"templateCode\"\r\n              caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Ngày chứng từ -->\r\n    <dxi-column dataField=\"license_date\" caption=\"{{ 'CONTROLL.LABEL.invoice_voucher' | translate }}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n              format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Mã số thuế -->\r\n     <dxi-column dataField=\"taxpayers_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"left\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Tên người nộp thuế -->\r\n    <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.taxpayer_name' | translate }}\"\r\n              alignment=\"left\" minWidth=\"200\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Tổng tiền -->\r\n    <dxi-column dataField=\"amount_personal_income_still_received\" caption=\"{{ 'GRID.INVOICE.amount_personal_income_still_received' | translate }}\" alignment=\"right\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\" [allowEditing]=\"false\" dataType=\"number\" format=\"0,###.##\">\r\n    </dxi-column>\r\n    <!-- Ngày hủy -->\r\n    <dxi-column dataField=\"destroy_date\"\r\n                caption=\"{{ 'GRID.INVOICE.date_cancel' | translate }}\" [editorOptions]=\"{ placeholder: 'dd/MM/yyyy',useMaskBehavior:true }\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"left\" minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\">\r\n    </dxi-column>\r\n    <!-- Lý do hủy -->\r\n    <dxi-column dataField=\"destroy_reason\"\r\n                caption=\"{{_translate.CONTROLL.LABEL.destroy_reason}}\" alignment=\"left\" minWidth=\"150\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n      <p>{{ d.data.template_code }}</p>\r\n      <p>{{ d.data.license_series }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.license_number }}</a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.taxpayers_name }}</p>\r\n      <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.taxpayers_name || _translate.GRID.INVOICE.invoice_wait_for_sign }}</p>\r\n    </div>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button disableDoubleClick *ngIf=\"!isView\" text=\"{{_translate.CONTROLL.BUTTON.save }}\" (click)=\"xoaBo()\" icon=\"{{_translate.ICONS.save }}\" type=\"default\" validationGroup=\"formData\">\r\n  </dx-button>\r\n   <!-- Đóng -->\r\n   <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" icon=\"{{_translate.ICONS.come_back }}\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/handle-voucher/components/voucher-cancel/voucher-cancel.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/handle-voucher/components/voucher-cancel/voucher-cancel.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gach-chan{text-decoration:underline}.img-upload-second{text-align:center}.img-upload-second i{margin-top:10px;width:40px;height:auto;cursor:pointer}.img-upload-second p{margin-top:10px}\n"

/***/ }),

/***/ "./src/app/modules/handle-voucher/components/voucher-cancel/voucher-cancel.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/handle-voucher/components/voucher-cancel/voucher-cancel.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: VoucherCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherCancelComponent", function() { return VoucherCancelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_handle_voucher_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/handle-voucher/shared */ "./src/app/modules/handle-voucher/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/vouchers/shared */ "./src/app/modules/vouchers/shared/index.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var VoucherCancelComponent = /** @class */ (function () {
    function VoucherCancelComponent(bsModalRef, socketService, handleVoucherService, authService, vatService, translate, router, voucher_service, vPreviewInvService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.socketService = socketService;
        this.handleVoucherService = handleVoucherService;
        this.authService = authService;
        this.vatService = vatService;
        this.translate = translate;
        this.router = router;
        this.voucher_service = voucher_service;
        this.vPreviewInvService = vPreviewInvService;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.emailPattern = _config_index__WEBPACK_IMPORTED_MODULE_12__["pattern"].email;
        this.isTT78 = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    VoucherCancelComponent.prototype.ngOnInit = function () {
        this.invoicesStore = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_10___default.a({
            key: 'id',
            data: this.data
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_11___default.a({
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
    VoucherCancelComponent.prototype.createDocRelateNumber = function () {
        var number_report = "";
        if (this.countReport < 10)
            number_report = '0' + this.countReport + '/' + new Date().getFullYear() + '/BB-HBHĐ';
        else
            number_report = this.countReport + '/' + new Date().getFullYear() + '/BB-HBHĐ';
        this.countReport++;
        return number_report;
    };
    VoucherCancelComponent.prototype.connectWebsocket = function () {
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
    VoucherCancelComponent.prototype._validGrid = function () {
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
                    var invoice_date = moment__WEBPACK_IMPORTED_MODULE_1__(item.license_date).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(item.destroy_date) < moment__WEBPACK_IMPORTED_MODULE_1__(invoice_date) && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.date_cancel_invoice_greater_or_equal_date_invoice, 'error');
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
                if (item.buyer_email && !_this.emailPattern.test(item.buyer_email) && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Email ' + _this._translate.VALIDATION.not_pattern, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'buyer_email'));
                    invalid = false;
                    return false;
                }
            });
        });
        return invalid;
    };
    VoucherCancelComponent.prototype.xoaBo = function () {
        var _this = this;
        if (!_core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_7__["InvoicesService"].checkTimeExportInv(this.configs.system_parameter)) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__["String"].Format(this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_1__(this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_1__(this.configs.system_parameter.time_end).format('HH:mm')), 'error');
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
    VoucherCancelComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        var i = this.invoiceIndex;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat(this.invoices[i]);
        }
        else {
            var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD HH:mm:ss');
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", '', true, "", true);
        }
    };
    VoucherCancelComponent.prototype.xuLiApiKhiXuat = function (invoice) {
        var _this = this;
        var tempTemplate = invoice.template;
        delete invoice.template;
        var xmlInvoice = "";
        var data = {
            id: invoice.id,
            adjustment_type: "7",
            destroy_reason: invoice.destroy_reason,
            email: invoice.buyer_email,
            date: invoice.destroy_date
        };
        var sub = this.handleVoucherService.getXmlString(data).subscribe(function (rs) {
            invoice.template = tempTemplate;
            if (rs.status == 'success') {
                xmlInvoice = rs.data.license.xml_string;
                var sign_date = moment__WEBPACK_IMPORTED_MODULE_1__(rs.data.license.license_sign_date).format('YYYY-MM-DD HH:mm:ss');
                _this.nodeSign = "//CTu/DSCKS/TCTTNhap";
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
    VoucherCancelComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate, 'LicenseData', "", true, "", true);
    };
    VoucherCancelComponent.prototype.goiApiXuatHoaDon = function (xml_string, invoice) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        // Helper.dowloadFile('hoadon.xml', 'xml', xml_string);
        this.subXuatHoaDon = this.handleVoucherService.cancelInvoice({
            license: {
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
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.cancel_invoice_done, 'success');
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
    VoucherCancelComponent.prototype.dinhKemFile = function (evt) {
        evt.srcElement.firstChild.click();
        // document.getElementById("file-dinh-kem").click();
        // console.log(e)
    };
    VoucherCancelComponent.prototype.choseFile = function (evt) {
        //evt.srcElement.firstChild.click();
        document.getElementById("file-input").click();
    };
    VoucherCancelComponent.prototype.fileChanged = function (e) {
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
    VoucherCancelComponent.prototype.onDinhKemFile = function (e) {
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
    VoucherCancelComponent.prototype.removeFile = function (i) {
        var _lstAttach = [];
        _lstAttach = this.dataSource[0]["invoice_files"];
        _lstAttach.splice(i, 1);
    };
    VoucherCancelComponent.prototype.downloadFile = function (data) {
        var re = /(?:\.([^.]+))?$/;
        var fileType = re.exec(data.file_name)[1];
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(data.file_name, fileType, data.file_content);
    };
    VoucherCancelComponent.prototype.xuatMauBienBan = function (data) {
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
    VoucherCancelComponent.prototype.viewDetailInvoice = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            if (this.configs.system_parameter.view_multi_invoice) {
                var data_1 = this.voucher_service.taodulieuXemMau(ids);
                data_1['configs'] = lodash__WEBPACK_IMPORTED_MODULE_16__["cloneDeep"](_core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.chungtu);
                this.vPreviewInvService.xemMau(data_1);
            }
            else {
                var initialState = {
                    items: ids,
                    isXuatHD: false,
                    hinhthucxuat: '',
                    typeAction: _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].typeCode.xem_chung_tu
                };
                this.vPreviewInvService.xemMauPhanTrang(initialState);
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    VoucherCancelComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    VoucherCancelComponent.prototype.onImportHiding = function (e) {
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
    VoucherCancelComponent.prototype.dong = function () {
        this.bsModalRef.hide();
        this.router.navigate(['/system/handle-vouchers/']);
    };
    VoucherCancelComponent.prototype.onEditorPreparing = function (e) {
        if (e.parentType === 'dataRow') {
            if (e.dataField === 'destroy_date' || e.dataField === 'destroy_reason') {
                if (this.isView || e.row.data.adjustment_type == "7")
                    e.editorOptions.disabled = true;
            }
        }
    };
    VoucherCancelComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            /* Bôi đỏ các trường bắt buộc */
            if (e.column.dataField == "destroy_date") {
                if (!e.data.destroy_date) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = this._translate.CONTROLL.LABEL.cancel_date + " " + this._translate.VALIDATION.required;
                }
                else {
                    var currentDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
                    var license_date = moment__WEBPACK_IMPORTED_MODULE_1__(e.data.license_date).format('YYYY-MM-DD');
                    var destroy_date = moment__WEBPACK_IMPORTED_MODULE_1__(e.data.destroy_date).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(destroy_date) > moment__WEBPACK_IMPORTED_MODULE_1__(currentDate)) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = this._translate.NOTIFY.date_cancel_invoice_not_greater_date_current;
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(destroy_date) < moment__WEBPACK_IMPORTED_MODULE_1__(license_date)) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"])
    ], VoucherCancelComponent.prototype, "dataGrid", void 0);
    VoucherCancelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voucher-cancel',
            template: __webpack_require__(/*! ./voucher-cancel.component.html */ "./src/app/modules/handle-voucher/components/voucher-cancel/voucher-cancel.component.html"),
            styles: [__webpack_require__(/*! ./voucher-cancel.component.scss */ "./src/app/modules/handle-voucher/components/voucher-cancel/voucher-cancel.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _modules_handle_voucher_shared__WEBPACK_IMPORTED_MODULE_4__["HandleVoucherService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
            _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_14__["VoucherService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_15__["ViewInvoiceService"]])
    ], VoucherCancelComponent);
    return VoucherCancelComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-voucher/handle-voucher-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/handle-voucher/handle-voucher-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: HandleVoucherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleVoucherRoutingModule", function() { return HandleVoucherRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/handle-voucher/components/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
];
var HandleVoucherRoutingModule = /** @class */ (function () {
    function HandleVoucherRoutingModule() {
    }
    HandleVoucherRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HandleVoucherRoutingModule);
    return HandleVoucherRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/handle-voucher/handle-voucher.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/handle-voucher/handle-voucher.module.ts ***!
  \*****************************************************************/
/*! exports provided: HandleVoucherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleVoucherModule", function() { return HandleVoucherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _handle_voucher_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-voucher-routing.module */ "./src/app/modules/handle-voucher/handle-voucher-routing.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/handle-voucher/components/index/index.component.ts");
/* harmony import */ var _components_voucher_cancel_voucher_cancel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/voucher-cancel/voucher-cancel.component */ "./src/app/modules/handle-voucher/components/voucher-cancel/voucher-cancel.component.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var HandleVoucherModule = /** @class */ (function () {
    function HandleVoucherModule() {
    }
    HandleVoucherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _handle_voucher_routing_module__WEBPACK_IMPORTED_MODULE_2__["HandleVoucherRoutingModule"],
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
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
            ],
            entryComponents: [
                _components_voucher_cancel_voucher_cancel_component__WEBPACK_IMPORTED_MODULE_4__["VoucherCancelComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_9__["ViewInvoiceMultipageComponent"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
                _components_voucher_cancel_voucher_cancel_component__WEBPACK_IMPORTED_MODULE_4__["VoucherCancelComponent"]
            ],
            providers: [
                _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_10__["VatDeactivateGuard"],
                _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmService"],
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_14__["VatService"]
            ]
        })
    ], HandleVoucherModule);
    return HandleVoucherModule;
}());



/***/ }),

/***/ "./src/app/modules/handle-voucher/shared/handle-voucher.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/handle-voucher/shared/handle-voucher.service.ts ***!
  \*************************************************************************/
/*! exports provided: HandleVoucherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleVoucherService", function() { return HandleVoucherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import * as _ from 'lodash';
var HandleVoucherService = /** @class */ (function () {
    function HandleVoucherService(apiService) {
        this.apiService = apiService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format('YYYY-MM-DD');
        this.isCopy = false;
    }
    /*  */
    HandleVoucherService.prototype.getAll = function (params) {
        var includes = '&options[is_view_index]=1&options[type_list_name]=XU_LY_CHUNG_TU';
        var filter_string = '&filter_groups[1][or]=true&filter_groups[1][filters][0][key]=originInvoiceExported&filter_groups[1][filters][0][value]=true&filter_groups[1][filters][0][operator]=eq&filter_groups[1][filters][1][key]=adjustment_type&filter_groups[1][filters][1][value]=1&filter_groups[1][filters][1][operator]=eq&filter_groups[1][filters][1][not]=true';
        var filter = filter_string;
        if (params) {
            filter += '&' + params;
        }
        var fields = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].danh_sach_truong.chung_tu;
        var sort = '&sort[0][key]=status_order&sort[0][direction]=ASC';
        return this.apiService.getDataTable('/licenses', includes + fields + filter, sort);
    };
    /*  */
    HandleVoucherService.prototype.ghiTam = function (data, license_number) {
        if (license_number === void 0) { license_number = false; }
        var url = license_number ? '/licenses?options[license_number]=1' : '/licenses';
        return this.apiService.post(url, { license: data });
    };
    /*  */
    HandleVoucherService.prototype.xuatChungTu = function (data) {
        return this.apiService.post('/licenses-export', { license: data });
    };
    /*  */
    HandleVoucherService.prototype.edit = function (id, data, license_number) {
        if (license_number === void 0) { license_number = false; }
        var url = license_number ? "/licenses/" + id + "?options[license_number]=1" : "/licenses/" + id;
        return this.apiService.put(url, { license: data });
    };
    /*  */
    HandleVoucherService.prototype.xuatChoKy = function (data) {
        if (data.id) {
            return this.apiService.put("/licenses/" + data.id + "?options[license_number]=1&options[sign_later]=1", { license: data });
        }
        return this.apiService.post('/licenses?options[license_number]=1&options[sign_later]=1', { license: data });
    };
    /*  */
    HandleVoucherService.prototype.preview = function (data) {
        return this.apiService.post('/licenses-preview', {
            licenses: [
                data
            ]
        });
    };
    /*  */
    HandleVoucherService.prototype.view = function (id) {
        return this.apiService.post('/licenses-view', { license: { ids: [id] } });
    };
    /*  */
    HandleVoucherService.prototype.getInvoiceResolver = function (loaiHoaDon) {
        var _arrOut = [];
        _arrOut.push(this.apiService.get("/templates?filter_groups[1][filters][1][key]=invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq&filter_groups[2][filters][2][key]=status&filter_groups[2][filters][2][value]=HOAT_DONG&filter_groups[2][filters][2][operator]=eq"));
        return _arrOut;
    };
    /*  */
    HandleVoucherService.prototype.showVoucherResolver = function (id, loaiHoaDon) {
        var _arrOut = [];
        _arrOut.push(this.apiService.get('/licenses/' + id + '?includes[]=license_files&includes[]=license_options'));
        _arrOut.push(this.apiService.get("/templates?filter_groups[1][filters][1][key]=invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq&filter_groups[2][filters][2][key]=status&filter_groups[2][filters][2][value]=HOAT_DONG&filter_groups[2][filters][2][operator]=eq"));
        return _arrOut;
    };
    /*  */
    HandleVoucherService.prototype.delete = function (id) {
        return this.apiService.delete('/licenses/' + id);
    };
    /*  */
    HandleVoucherService.prototype.xemChungTuImport = function (ids) {
        return this.apiService.post('/licenses-view', { license: { ids: ids } });
    };
    /*  */
    HandleVoucherService.prototype.xuatChungTuPdf = function (ids) {
        return this.apiService.post('/licenses/export-file-zip-pdf', { license: ids });
    };
    /*  */
    HandleVoucherService.prototype.xuatCTXml = function (ids) {
        return this.apiService.post('/licenses/export-file-zip-xml', { license: ids });
    };
    /*  */
    HandleVoucherService.prototype.layDanhSachChungTu = function (ids) {
        var ids_temp = ids.slice();
        var includes = '&options[type_list_name]=XU_LY_CHUNG_TU';
        var arr = [];
        var _loop_1 = function () {
            var arrIds = ids_temp.splice(0, 20);
            var param = '&filter_groups[0][or]=true';
            arrIds.forEach(function (id, index) {
                param += "&sort[0][key]=license_number&sort[0][direction]=ASC&filter_groups[0][filters][" + index + "][key]=id&filter_groups[0][filters][" + index + "][value]=" + id + "&filter_groups[0][filters][" + index + "][operator]=eq";
            });
            arr.push(this_1.apiService.get('/licenses?' + includes + param));
        };
        var this_1 = this;
        while (ids_temp.length > 0) {
            _loop_1();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(arr).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) {
            var kq = {
                status: 'error',
                code: 'error',
                data: {
                    status: '',
                    licenses: [],
                    meta: { total: 0 }
                }
            };
            value.forEach(function (item) {
                if (item.status === 'success') {
                    kq.status = item.status;
                    kq.code = item.code;
                    kq.data.status = item.data.status;
                    kq.data.meta.total = kq.data.meta.total + item.data.meta.total;
                    kq.data.licenses = kq.data.licenses.concat(item.data.licenses);
                }
            });
            return kq;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading(); }));
    };
    HandleVoucherService.prototype.sendMail = function (data) {
        return this.apiService.post('/license-send-mail', { licenses: data });
    };
    HandleVoucherService.prototype.getVoucherProccess = function (license_id) {
        return this.apiService.get("/license-process?includes[]=user&filter_groups[0][filters][0][key]=license_id&filter_groups[0][filters][0][value]=" + license_id + "&filter_groups[0][filters][0][operator]=eq&sort[0][key]=process_time&sort[0][direction]=DESC");
    };
    HandleVoucherService.prototype.getXmlString = function (data) {
        return this.apiService.post('/licenses/get-xml', { license: data });
    };
    HandleVoucherService.prototype.cancelInvoice = function (data) {
        return this.apiService.post('/licenses-cancel', data);
    };
    HandleVoucherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HandleVoucherService);
    return HandleVoucherService;
}());



/***/ }),

/***/ "./src/app/modules/handle-voucher/shared/index.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/handle-voucher/shared/index.ts ***!
  \********************************************************/
/*! exports provided: HandleVoucherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handle_voucher_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle-voucher.service */ "./src/app/modules/handle-voucher/shared/handle-voucher.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HandleVoucherService", function() { return _handle_voucher_service__WEBPACK_IMPORTED_MODULE_0__["HandleVoucherService"]; });




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
//# sourceMappingURL=handle-voucher-handle-voucher-module.js.map