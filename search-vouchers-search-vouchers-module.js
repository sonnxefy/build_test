(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-vouchers-search-vouchers-module"],{

/***/ "./src/app/modules/search-vouchers/components/index/index.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/search-vouchers/components/index/index.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n    <div class=\"col-md-8\">\r\n        <app-voucher-search (searchContentChange)=\"getSearch($event)\"></app-voucher-search>\r\n    </div>\r\n    <!-- <div class=\"col-md-5 list-header\" style=\"max-height: 70px;\">\r\n      <div class=\"pull-right button-panel\">\r\n        <dx-button [(icon)]=\"_translate.ICONS.plus\" text=\"{{ 'CONTROLL.BUTTON.create_vouchers' | translate }}\"\r\n          type=\"default\" (click)=\"createLicense()\"></dx-button>\r\n        <dx-menu [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\" submenuDirection=\"auto\"\r\n          cssClass='button-dropdown-extend' (onItemClick)=\"itemExtrasClick($event)\">\r\n        </dx-menu>\r\n      </div>\r\n    </div> -->\r\n</div>\r\n<dx-data-grid id=\"gridContainerInvoice\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n    [showRowLines]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\"\r\n    id=\"gridContainerVat\" [showBorders]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n    (onRowPrepared)=\"onRowPrepared($event)\" [noDataText] =\"textHienThiLuoi\">\r\n    <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\">\r\n    </dxo-selection>\r\n    <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"handleinvoice\"></dxo-state-storing> -->\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"single\"></dxo-sorting>\r\n    <dxo-selection mode=\"multiple\"></dxo-selection>\r\n    <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n    <!-- Số chứng từ -->\r\n    <dxi-column cellTemplate=\"licenseNumber\" dataField=\"license_number\"\r\n        caption=\"{{ 'CONTROLL.LABEL.vehicle_license_number' | translate }}\"\r\n        minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\" alignment=\"center\" sortOrder=\"desc\" [sortIndex]=\"1\"\r\n        headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n    <!-- Mẫu số, ký hiệu -->\r\n    <dxi-column cellTemplate=\"templateCode\" [filterOperations]=\"['contains']\" [calculateFilterExpression]=\"calculateFilterExpression\"\r\n        caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n        minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\"></dxi-column>\r\n    <!-- Ngày chứng từ -->\r\n    <dxi-column dataField=\"license_date\" [editorOptions]=\"{useMaskBehavior:true}\"\r\n        caption=\"{{ 'CONTROLL.LABEL.invoice_voucher' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\"\r\n        dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"dd/MM/yyyy\" alignment=\"center\"\r\n        headerCellTemplate=\"titleHeaderTemplate\" sortOrder=\"desc\" [sortIndex]=\"0\"></dxi-column>\r\n    <!-- Mã số thuế -->\r\n    <dxi-column dataField=\"taxpayers_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n        minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"center\" allowSearch=\"true\">\r\n    </dxi-column>\r\n    <!-- Số CMND -->\r\n    <dxi-column dataField=\"id_card\" caption=\"{{ 'GRID.INVOICE.id_card' | translate }}\" alignment=\"center\" minWidth=\"80\">\r\n    </dxi-column>\r\n    <!-- Tên người nộp thuế -->\r\n    <dxi-column dataField=\"taxpayers_name\" caption=\"{{ 'GRID.INVOICE.taxpayer_name' | translate }}\" alignment=\"left\"\r\n        minWidth=\"200\"></dxi-column>\r\n    <!-- Số TNCN còn được nhận -->\r\n    <dxi-column dataField=\"amount_personal_income_still_received_format\"\r\n        caption=\"{{ 'GRID.INVOICE.amount_personal_income_still_received' | translate }}\" alignment=\"right\"\r\n        minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\">\r\n    </dxi-column>\r\n    <!-- Email| Ghi chú -->\r\n    <dxi-column cellTemplate=\"actionEmail\" caption=\"{{ 'CONTROLL.LABEL.note' | translate }}\"\r\n        alignment=\"center\" minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\">\r\n    </dxi-column>\r\n    <!-- Chức năng -->\r\n    <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'licenseNumber'\">\r\n        <a class=\"gach-chan\" (click)=\"viewDetailVoucher(d.data)\" href=\"javascript:void(0)\">{{ d.data.license_number\r\n            }}</a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n        <p style=\"text-decoration: underline;cursor: pointer;\">\r\n            {{ d.data.template_code }}</p>\r\n        <p style=\"text-decoration: underline;cursor: pointer;\">\r\n            {{ d.data.license_series }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n        {{d.data.license_date}}\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'actionEmail'\">\r\n        <p *ngIf=\"d.data.adjustment_type == '7'\" href=\"javascript:void(0)\">Chứng từ bị xóa bỏ</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'actionIcon'\">\r\n        <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n            href=\"javascript:void(0)\">\r\n        </a>\r\n    </div>\r\n    <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n        <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n    </div>\r\n\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 35, 50, 100]\" [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n    </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n    <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n    [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n    [(visible)]=\"showPopup\">\r\n    <div *dxTemplate=\"let data of 'content'\">\r\n        <div style=\"height: 30px;\">\r\n            <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n            </dx-progress-bar>\r\n        </div>\r\n    </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/search-vouchers/components/index/index.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/search-vouchers/components/index/index.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}::ng-deep #gridContainerVat .dx-cell-focus-disabled{overflow:visible !important}::ng-deep #gridContainerVat .dx-datagrid-rowsview{overflow:visible}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/search-vouchers/components/index/index.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/search-vouchers/components/index/index.component.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var _modules_search_vouchers_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/search-vouchers/shared */ "./src/app/modules/search-vouchers/shared/index.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/vouchers/shared */ "./src/app/modules/vouchers/shared/index.ts");
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
    function IndexComponent(authService, translate, router, searchVoucherService, modalService, socketService, vPreviewInvService, voucherService, spinner) {
        var _this = this;
        this.authService = authService;
        this.translate = translate;
        this.router = router;
        this.searchVoucherService = searchVoucherService;
        this.modalService = modalService;
        this.socketService = socketService;
        this.vPreviewInvService = vPreviewInvService;
        this.voucherService = voucherService;
        this.spinner = spinner;
        this.selectedRows = [];
        this.selectedItems = [];
        this.configs = {};
        this.idRow = undefined;
        this.clickCurent = undefined;
        this.extras = [];
        this.templates = [];
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.loaiChungTu = '01CTT56';
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.select = {};
        this.invoices = [];
        this.isExportFailed = false;
        this.isTraCuuChungTu = false;
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
                    {
                        id: "NAP_CT_TU_EXCEL",
                        name: this._translate.CONTROLL.BUTTON.import_license_from_excel,
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
                        name: this._translate.CONTROLL.BUTTON.view_voucher,
                        icon: this._translate.ICONS.view
                    },
                    {
                        id: 'GUI_BEN_MUA',
                        name: this._translate.CONTROLL.LABEL.send_voucher,
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
        this.searchVoucherService.isCopy = false;
        this.currentUser = this.authService.getCurrentUser();
        var listpermissions = this.currentUser.user.permissions.split(',');
        var quyentracuuchungtu = listpermissions.filter(function (p) { return p === 'tra_cuu_chung_tu_khau_tru_thue_tncn'; })[0];
        if (quyentracuuchungtu)
            this.isTraCuuChungTu = true;
        if (!this.isTraCuuChungTu) {
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
        if (this.isTraCuuChungTu) {
            if (params) {
                this.dataSource.store = this.searchVoucherService.getAll(params);
            }
            else {
                this.dataSource.store = this.searchVoucherService.getAll();
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
                    var data_1 = this.voucherService.taodulieuXemMau(ids);
                    data_1['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.chungtu;
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
                    var arrStatusInv = ["GHI_TAM"];
                    var license_1 = this.selectedItems.map(function (p) { return p.status; });
                    var result = arrStatusInv.every(function (val) { return license_1.includes(val); });
                    if (result) {
                        var recept_no = this.selectedItems.map(function (s) { return s.recept_no; });
                        var arrReceptNoItem = recept_no.reduce(function (listItem, element) {
                            if (listItem.indexOf(element) === -1) {
                                listItem.push(element);
                            }
                            return listItem;
                        }, []);
                        if (arrReceptNoItem.length == 1) {
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.same_receipt_license, 'error');
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_invoice, 'error');
                    }
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
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
                    _this.searchVoucherService.delete(ids_1).subscribe(function (rs) {
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
            this.searchVoucherService.getListVoucher(ids).subscribe(function (rs) {
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
    IndexComponent.prototype.taiHDXml = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                var ids = [];
                ids = _lst.map(function (e) { return e.id; });
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                var sub_1 = this.searchVoucherService.xuatCTXml(ids).subscribe(function (rs) {
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
        var sub = this.searchVoucherService.xuatChungTuPdf(ids).subscribe(function (rs) {
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
        else if (e.itemData.id == "TAI_CT_XML") {
            this.taiHDXml();
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
        var sub = this.searchVoucherService.layDanhSachChungTu(ids).subscribe(function (rs) {
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
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_voucher, 'error');
        }
        else {
            this.router.navigate(["/system/voucher-tax/" + row.id]);
        }
    };
    IndexComponent.prototype.viewDetailVoucher = function (data) {
        this.dataInfor = data;
        var ids = [];
        if (data) {
            ids.push(data.id);
            if (this.configs.system_parameter.view_multi_invoice) {
                var data_2 = this.voucherService.taodulieuXemMau(ids);
                data_2['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.chungtu;
                this.vPreviewInvService.xemMau(data_2);
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
    IndexComponent.prototype.copy = function (data) {
        var _this = this;
        var row = data ? data : this.selectedItems[0];
        var sub = this.searchVoucherService.show(row.id).subscribe(function (rs) {
            if (rs.status == 'success') {
                if (rs.data.license) {
                    rs.data.license.id = null;
                    rs.data.license.origin_id = null;
                    rs.data.license.status = null;
                    rs.data.license.license_number = null;
                    rs.data.license.destroy_date = null;
                    rs.data.license.destroy_reason = null;
                    rs.data.license.adjustment_type = 1;
                    rs.data.license.license_sign_date = null;
                    rs.data.license.send_email_status = null;
                    rs.data.license.verify_code = null;
                    if (rs.data.license.license_options && rs.data.license.license_options.length > 0) {
                        rs.data.license.license_options.forEach(function (item) {
                            delete item['id'];
                            delete item['license_id'];
                        });
                    }
                    _this.searchVoucherService.data = rs.data.license;
                    _this.searchVoucherService.isCopy = true;
                }
                if (_this.searchVoucherService.data) {
                    _this.router.navigate(['system/voucher-tax/create']);
                }
                // if (this.loaiHoaDon === '01GTKT') {
                //   this.router.navigate(['system/vat-invoice/create']);
                // } else {
                //   if (this.loaiHoaDon == sEnum.loaihoadon.KPTQ07)
                //     this.router.navigate(['system/non-tariff-invoice/create']);
                //   else if (this.loaiHoaDon == sEnum.loaihoadon.GTTT02)
                //     this.router.navigate(['system/sale-invoice/create']);
                // }
            }
        });
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
    IndexComponent.prototype.calculateFilterExpression = function (filterValue, selectedFilterOperation) {
        selectedFilterOperation = "contains"; //Helper.multilfilterColumn;
        return [["template_code_temp", selectedFilterOperation || '=', filterValue], 'or', ["license_series_temp", selectedFilterOperation || '=', filterValue]];
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/search-vouchers/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/search-vouchers/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_search_vouchers_shared__WEBPACK_IMPORTED_MODULE_7__["SearchVoucherService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_8__["ViewInvoiceService"],
            _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_9__["VoucherService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/search-vouchers/search-vouchers-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/search-vouchers/search-vouchers-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SearchVouchersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVouchersRoutingModule", function() { return SearchVouchersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/search-vouchers/components/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
];
var SearchVouchersRoutingModule = /** @class */ (function () {
    function SearchVouchersRoutingModule() {
    }
    SearchVouchersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchVouchersRoutingModule);
    return SearchVouchersRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/search-vouchers/search-vouchers.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/search-vouchers/search-vouchers.module.ts ***!
  \*******************************************************************/
/*! exports provided: SearchVouchersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVouchersModule", function() { return SearchVouchersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _search_vouchers_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-vouchers-routing.module */ "./src/app/modules/search-vouchers/search-vouchers-routing.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/search-vouchers/components/index/index.component.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var SearchVouchersModule = /** @class */ (function () {
    function SearchVouchersModule() {
    }
    SearchVouchersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _search_vouchers_routing_module__WEBPACK_IMPORTED_MODULE_11__["SearchVouchersRoutingModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_2__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_3__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxPopoverModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["VatSharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["SomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"],
            ],
            entryComponents: [
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["ViewInvoiceMultipageComponent"]
            ],
            providers: [
                _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__["VatDeactivateGuard"],
                _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmService"],
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_13__["VatService"],
                _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_14__["ViewInvoiceService"]
            ]
        })
    ], SearchVouchersModule);
    return SearchVouchersModule;
}());



/***/ }),

/***/ "./src/app/modules/search-vouchers/shared/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/search-vouchers/shared/index.ts ***!
  \*********************************************************/
/*! exports provided: SearchVoucherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vouchers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-vouchers.service */ "./src/app/modules/search-vouchers/shared/search-vouchers.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchVoucherService", function() { return _search_vouchers_service__WEBPACK_IMPORTED_MODULE_0__["SearchVoucherService"]; });




/***/ }),

/***/ "./src/app/modules/search-vouchers/shared/search-vouchers.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/search-vouchers/shared/search-vouchers.service.ts ***!
  \***************************************************************************/
/*! exports provided: SearchVoucherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVoucherService", function() { return SearchVoucherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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





var SearchVoucherService = /** @class */ (function () {
    function SearchVoucherService(apiService) {
        this.apiService = apiService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format('YYYY-MM-DD');
        this.isCopy = false;
    }
    /*  */
    SearchVoucherService.prototype.getAll = function (params) {
        var includes = '&options[is_view_index]=1&options[type_list_name]=TRA_CUU_CHUNG_TU';
        var fields = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].danh_sach_truong.chung_tu;
        var filter = "&filter_groups[1001][filters][2][key]=license_number&filter_groups[1001][filters][2][value]=0000000&filter_groups[1001][filters][2][operator]=eq&filter_groups[1001][filters][2][not]=true&";
        if (params) {
            filter += '&' + params;
        }
        var sort = '&sort[0][key]=status_order&sort[0][direction]=ASC';
        return this.apiService.getDataTable('/licenses', includes + fields + filter, sort);
    };
    /*  */
    SearchVoucherService.prototype.ghiTam = function (data, license_number) {
        if (license_number === void 0) { license_number = false; }
        var url = license_number ? '/licenses?options[license_number]=1' : '/licenses';
        return this.apiService.post(url, { license: data });
    };
    /*  */
    SearchVoucherService.prototype.xuatChungTu = function (data) {
        return this.apiService.post('/licenses-export', { license: data });
    };
    /*  */
    SearchVoucherService.prototype.edit = function (id, data, license_number) {
        if (license_number === void 0) { license_number = false; }
        var url = license_number ? "/licenses/" + id + "?options[license_number]=1" : "/licenses/" + id;
        return this.apiService.put(url, { license: data });
    };
    /*  */
    SearchVoucherService.prototype.xuatChoKy = function (data) {
        if (data.id) {
            return this.apiService.put("/licenses/" + data.id + "?options[license_number]=1&options[sign_later]=1", { license: data });
        }
        return this.apiService.post('/licenses?options[license_number]=1&options[sign_later]=1', { license: data });
    };
    /*  */
    SearchVoucherService.prototype.preview = function (data) {
        return this.apiService.post('/licenses-preview', {
            licenses: [
                data
            ]
        });
    };
    SearchVoucherService.prototype.previewVoucherImport = function (data) {
        return this.apiService.post('/licenses-preview', data);
    };
    /*  */
    SearchVoucherService.prototype.view = function (id) {
        return this.apiService.post('/licenses-view', { license: { ids: [id] } });
    };
    /*  */
    SearchVoucherService.prototype.getInvoiceResolver = function (loaiHoaDon) {
        var _arrOut = [];
        _arrOut.push(this.apiService.get("/templates?filter_groups[1][filters][1][key]=invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq&filter_groups[2][filters][2][key]=status&filter_groups[2][filters][2][value]=HOAT_DONG&filter_groups[2][filters][2][operator]=eq"));
        return _arrOut;
    };
    /*  */
    SearchVoucherService.prototype.showVoucherResolver = function (id, loaiHoaDon) {
        var _arrOut = [];
        _arrOut.push(this.apiService.get('/licenses/' + id + '?includes[]=license_files&includes[]=license_options'));
        _arrOut.push(this.apiService.get("/templates?filter_groups[1][filters][1][key]=invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq&filter_groups[2][filters][2][key]=status&filter_groups[2][filters][2][value]=HOAT_DONG&filter_groups[2][filters][2][operator]=eq"));
        return _arrOut;
    };
    /*  */
    SearchVoucherService.prototype.delete = function (id) {
        return this.apiService.delete('/licenses/' + id);
    };
    /*  */
    SearchVoucherService.prototype.xemChungTuImport = function (ids) {
        return this.apiService.post('/licenses-view', { license: { ids: ids } });
    };
    /*  */
    SearchVoucherService.prototype.xuatChungTuPdf = function (ids) {
        return this.apiService.post('/licenses/export-file-zip-pdf', { license: ids });
    };
    /*  */
    SearchVoucherService.prototype.xuatCTXml = function (ids) {
        return this.apiService.post('/licenses/export-file-zip-xml', { license: ids });
    };
    /*  */
    SearchVoucherService.prototype.layDanhSachChungTu = function (ids) {
        var includes = '&options[type_list_name]=TRA_CUU_CHUNG_TU';
        var param = '&filter_groups[0][or] = true';
        ids.forEach(function (id, index) {
            param += "&sort[0][key]=license_number&sort[0][direction]=ASC&filter_groups[0][filters][" + index + "][key]=id&filter_groups[0][filters][" + index + "][value]=" + id + "&filter_groups[0][filters][" + index + "][operator]=eq";
        });
        return this.apiService.get('/licenses?' + includes + param);
    };
    SearchVoucherService.prototype.sendMail = function (data) {
        return this.apiService.post('/license-send-mail', { licenses: data });
    };
    SearchVoucherService.prototype.getVoucherProccess = function (license_id) {
        return this.apiService.get("/license-process?includes[]=user&filter_groups[0][filters][0][key]=license_id&filter_groups[0][filters][0][value]=" + license_id + "&filter_groups[0][filters][0][operator]=eq&sort[0][key]=process_time&sort[0][direction]=DESC");
    };
    /* lấy danh sách chứng từ */
    SearchVoucherService.prototype.getListVoucher = function (ids) {
        var _obj = {};
        var _arrfilters = [];
        _obj.filter_groups = [];
        ids.forEach(function (id, index) {
            var _objFilters = { key: 'id', value: id, operator: 'eq' };
            _arrfilters.push(_objFilters);
        });
        var filters = { filters: _arrfilters };
        _obj.filter_groups.push(filters);
        _obj.filter_groups[0].or = true;
        _obj.sort = [{ key: 'license_order', direction: 'ASC' }];
        return this.apiService.post('/licenses/get-all', _obj);
    };
    SearchVoucherService.prototype.show = function (id) {
        return this.apiService.get('/licenses/' + id + '?includes[]=license_files&includes[]=license_options');
    };
    SearchVoucherService.prototype.getImportVoucher = function (loaiHoaDon) {
        return this.apiService.get("/templates?filter_groups[1][filters][1][key]=invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq&filter_groups[2][filters][2][key]=status&filter_groups[2][filters][2][value]=HOAT_DONG&filter_groups[2][filters][2][operator]=eq");
    };
    SearchVoucherService.prototype.getEditImportVoucher = function (ids, dmHS, loaiHoaDon) {
        var param = '';
        var includes = '&options[type_list_name]=LAP_CHUNG_TU';
        ids.forEach(function (id, index) {
            param += "&filter_groups[0][or]=true&filter_groups[0][filters][" + index + "][key]=id&filter_groups[0][filters][" + index + "][value]=" + id + "&filter_groups[0][filters][" + index + "][operator]=eq";
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            this.apiService.get('/licenses?' + includes + param),
            this.apiService.get("/templates?filter_groups[1][filters][1][key]=invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq&filter_groups[2][filters][2][key]=status&filter_groups[2][filters][2][value]=HOAT_DONG&filter_groups[2][filters][2][operator]=eq")
        ]);
    };
    SearchVoucherService.prototype.getTempFile = function () {
        return this.apiService.post('/licenses/export-template-license');
    };
    SearchVoucherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SearchVoucherService);
    return SearchVoucherService;
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
//# sourceMappingURL=search-vouchers-search-vouchers-module.js.map