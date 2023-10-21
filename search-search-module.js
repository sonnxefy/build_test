(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/modules/search/components/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/search/components/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <!-- <div class=\"col-md-4\">\r\n    <div class=\"pull-left\">\r\n      <div class=\"list-title\">\r\n                <h2>DANH SÁCH DANH MỤC ĐỐI TƯỢNG</h2>\r\n            </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n  </div> -->\r\n  <!-- (advandChange)=\"getAdvandStatusResult($event)\" -->\r\n  <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n    <app-search-advanced\r\n      [_find]=\"_find\"\r\n      (searchContentChange)=\"getSearch($event)\"\r\n      [isSearchInvoice]=\"isSearchInvoice\"\r\n      (objParamsExport)=\"convertParamsToObject($event)\"\r\n    >\r\n    </app-search-advanced>\r\n  </div>\r\n  <div class=\"col-md-4 list-header list-header-search\" style=\"max-height: 70px\">\r\n    <div class=\"pull-right button-panel\">\r\n      <dx-button *ngIf=\"isShowBangTH\" (click)=\"GuiBangDuLieu()\" [(icon)]=\"_translate.ICONS.plus\"\r\n                 text=\"Gửi bảng dữ liệu cho CQT\" type=\"default\"></dx-button>\r\n      <dx-menu\r\n        [dataSource]=\"extras\"\r\n        displayExpr=\"name\"\r\n        orientation=\"horizontal\"\r\n        submenuDirection=\"auto\"\r\n        (onItemClick)=\"itemExtrasClick($event)\"\r\n        cssClass='button-dropdown-extend'>\r\n      </dx-menu>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid\r\n  id=\"gridContainer\"\r\n  class=\"tracuu\"\r\n  [dataSource]=\"dataSource\"\r\n  [(selectedRowKeys)]=\"selectedRows\"\r\n  [showRowLines]=\"true\"\r\n  [noDataText]=\"noDataText\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnMinWidth]=\"50\"\r\n  [columnAutoWidth]=\"true\"\r\n  [wordWrapEnabled]=\"true\"\r\n  [(selectedRowKeys)]=\"selectedRows\"\r\n  (onSelectionChanged)=\"selectionChanged($event)\"\r\n  (onRowPrepared)=\"onRowPrepared($event)\">\r\n  <!-- <dxo-scrolling mode=\"virtual\">scroll phân trang</dxo-scrolling> -->\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\">\r\n  </dxo-selection>\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"search\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxi-column dataField=\"invoice_date\" [editorOptions]=\"{useMaskBehavior:true}\" caption=\"{{_translate.GRID.INVOICE.invoice_date}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\" dataType=\"date\" format=\"dd/MM/yyyy\" alignment=\"center\" [width]=\"_translate.GRID_WIDTH.ngay_hoa_don\" sortOrder=\"desc\" [sortIndex]=\"0\" [calculateFilterExpression]=\"calculateFilterExpression\"></dxi-column>\r\n\r\n  <dxi-column dataField=\"user.name\" caption=\"Người lập\" alignment=\"left\"\r\n    [filterOperations]=\"['contains', '=']\" [allowFiltering]=\"false\" [allowSorting]=\"false\" [width]=\"100\"></dxi-column>\r\n\r\n  <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\" caption=\"{{_translate.GRID.INVOICE.invoice_number}}\" alignment=\"left\" [width]=\"_translate.GRID_WIDTH.so_hoa_don\" sortOrder=\"desc\" [sortIndex]=\"1\"\r\n    [filterOperations]=\"['contains', '=']\" alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <!-- Mã số đơn hàng -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_the_order\" dataField=\"the_order\"\r\n              caption=\"{{ _translate.CONTROLL.LABEL.the_order_no_code}}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.so_phieu}}\" alignment=\"left\">\r\n  </dxi-column>\r\n  <!-- Số phiếu -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"receipts_no\" headerCellTemplate=\"titleHeaderTemplate\" caption=\"{{_translate.GRID.INVOICE.receipts_no}}\" [width]=\"_translate.GRID_WIDTH.so_phieu\" alignment=\"left\" [allowFiltering]=\"false\"\r\n    [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n\r\n  <dxi-column cellTemplate=\"templateCode\" caption=\"{{_translate.GRID.INVOICE.template_code}}, {{_translate.GRID.INVOICE.invoice_series}}\" [width]=\"_translate.GRID_WIDTH.mau_so_ky_hieu\" alignment=\"left\" [allowFiltering]=\"false\"\r\n    [filterOperations]=\"['contains', '=']\" alignment=\"center\"></dxi-column>\r\n\r\n  <!-- <dxi-column dataField=\"template.invoice_series\" caption=\"Ký hiệu\" [width]=\"80\" alignment=\"left\" [allowFiltering]=\"false\"\r\n    [filterOperations]=\"['contains', '=']\" [allowSorting]=\"false\" alignment=\"center\"></dxi-column> -->\r\n\r\n  <dxi-column dataField=\"buyer_tax_code\" caption=\"{{_translate.GRID.INVOICE.buyer_tax_code}}\" [width]=\"_translate.GRID_WIDTH.ma_so_thue\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n\r\n  <dxi-column cellTemplate=\"customerName\" dataField=\"customer_name\" caption=\"{{_translate.GRID.INVOICE.customer_name}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\" [allowFiltering]=\"false\" [minWidth]=\"125\"></dxi-column>\r\n\r\n  <!-- Thành tiền -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"amount\" caption=\"{{_translate.GRID.INVOICE_DETAILS.amount}}\" alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\"  dataType=\"number\" format=\"0,###.##\" [width]=\"_translate.GRID_WIDTH.tong_tien\"></dxi-column>\r\n  <!-- Tiền thuế -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_recepts_no\" dataField=\"total_amount_vat\" caption=\"{{_translate.GRID.INVOICE_DETAILS.amount_vat}}\" alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\"\r\n  [filterOperations]=\"['contains', '=']\"  dataType=\"number\" format=\"0,###.##\" [width]=\"_translate.GRID_WIDTH.tong_tien\"></dxi-column>\r\n  <!-- Tổng tiền -->\r\n  <dxi-column dataField=\"total_payment\" caption=\"{{_translate.GRID.INVOICE.total_payment}}\" alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\"  dataType=\"number\" format=\"0,###.##\" [width]=\"_translate.GRID_WIDTH.tong_tien\"></dxi-column>\r\n  <!-- Trạng thái thanh toán -->\r\n  <dxi-column *ngIf=\"configs.system_parameter.check_payment_status\" cellTemplate=\"viewPaymentStatus\" caption=\"{{_translate.GRID.INVOICE.payment_status}}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Trạng thái xử lý hóa đơn -->\r\n  <dxi-column dataField=\"adjustment_type\" caption=\"{{_translate.GRID.GENERAL.status}}\" [width]=\"_translate.GRID_WIDTH.trang_thai_gui_mail\" alignment=\"center\" headerCellTemplate=\"titleHeaderTemplate\">\r\n    <dxo-lookup [dataSource]=\"statusFilter\" valueExpr=\"value\" displayExpr=\"text\"></dxo-lookup>\r\n  </dxi-column>\r\n  <!-- Trạng thái gửi CQT -->\r\n  <dxi-column *ngIf=\"isTT78\" cellTemplate=\"statusSendTax\" caption=\"Trạng thái gửi CQT\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <dxi-column dataField=\"note_view_on_invoice\" caption=\"{{_translate.CONTROLL.LABEL.note}}\" alignment=\"left\" [width]=\"_translate.GRID_WIDTH.ghi_chu\" headerCellTemplate=\"titleHeaderTemplate\"\r\n  [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n  <dxi-column cellTemplate=\"actionIcon\" alignment=\"center\" [width]=\"90\"></dxi-column>\r\n\r\n  <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewNotSelect(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}</a>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p >{{ d.data.template_code }}</p>\r\n    <p >{{ d.data.invoice_series }}</p>\r\n\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n    <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name || 'Hóa đơn chờ ký' }}</p>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n      <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\"  class=\"xemIcon actionIcon\" (click)=\"viewNotSelect(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.print_conversion}}\"  class=\"inIcon actionIcon\" (click)=\"inChuyenDoi(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n    <a *ngIf=\"d.data.invoice_files.length>0\"  title=\"{{_translate.CONTROLL.BUTTON.view_attach_file}}\" class=\"attachIcon actionIcon\" (click)=\"viewAttachFile(d.data)\" href=\"javascript:void(0)\">\r\n      </a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_GUI_CQT' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n    href=\"javascript:void(0)\">Đã gửi để cấp mã</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_CAP' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n    href=\"javascript:void(0)\">Đã cấp mã</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'KHONG_DU_DK_CAP_MA' && d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n    href=\"javascript:void(0)\" style=\"color: red;\" (click)=\"LydoKTiepNhan(d.data)\">Không đủ ĐK cấp mã</a>\r\n\r\n    <a *ngIf=\"d.data.send_department_status == 'CHUA_GUI_CQT' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n    href=\"javascript:void(0)\">Chưa gửi CQT</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_GUI_CQT' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n    href=\"javascript:void(0)\">Đã gửi CQT</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'DA_TIEP_NHAN' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n    href=\"javascript:void(0)\">CQT đã tiếp nhận</a>\r\n    <a *ngIf=\"d.data.send_department_status == 'KHONG_HOP_LE' && !d.data.is_invoice_with_code && d.data.xml_type=='3'\"\r\n    href=\"javascript:void(0)\" style=\"color: red;\" (click)=\"LydoKTiepNhan(d.data)\">CQT kiểm tra không hợp lệ </a>\r\n  </div>\r\n  <!-- Trạng thái thanh toán -->\r\n  <div *dxTemplate=\"let d of 'viewPaymentStatus'\">\r\n    <a href=\"javascript:void(0)\">{{ trangthaithanhtoan(d.data) }}</a>\r\n  </div>\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" cssClass=\"dxi-total-payment-total_payment\" [customizeText]=\"customizeText\" showInColumn=\"total_payment\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n    <dxo-pager\r\n        [showPageSizeSelector]=\"true\"\r\n        [allowedPageSizes]=\"[15, 35, 50, 100]\"\r\n        [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\"\r\n        infoText=\"{{_translate.DXO_PAGER.page}}\">\r\n    </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/modules/search/components/index/index.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/search/components/index/index.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-search-advanced{width:100%}.chua-gui-khach-hang{color:red}.list-header-style{padding-top:39px}.list-header-search{padding:39px 17px}::ng-deep .sendTax .modal-content{width:61%;margin-left:25%}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/search/components/index/index.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/search/components/index/index.component.ts ***!
  \********************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_search_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/search/shared */ "./src/app/modules/search/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/modules/vat-shared/components/view-attach-file/view-attach-file.component */ "./src/app/shared/modules/vat-shared/components/view-attach-file/view-attach-file.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
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
    function IndexComponent(authService, searchService, modalService, vatService, route, translate, router, socketService, spinner, apiService, vPreviewInvService, invoiceService) {
        var _this = this;
        this.authService = authService;
        this.searchService = searchService;
        this.modalService = modalService;
        this.vatService = vatService;
        this.route = route;
        this.translate = translate;
        this.router = router;
        this.socketService = socketService;
        this.spinner = spinner;
        this.apiService = apiService;
        this.vPreviewInvService = vPreviewInvService;
        this.invoiceService = invoiceService;
        this.dataSource = {};
        this.noDataText = 'Không có hóa đơn nào';
        this._find = {};
        this.extras = [];
        this.configs = {};
        this.selectedItems = [];
        this.selectedRows = [];
        this.isTT78 = false;
        this.isShowBangTH = false;
        this.isSearchInvoice = true;
        this.objStatusBtn = {};
        this.customizeText = function (url) {
            _this.invoiceService.handleTotalGrid(url.value, _this.objStatusBtn, _this.dataGrid);
            return '';
        };
        this._translate = this.authService.getTranslate();
        this._language = this.authService.getLanguage();
        translate.use(this._language);
        this.statusFilter = [{
                text: 'HĐ gốc',
                value: '1'
            }, {
                text: 'HĐ bị thay thế',
                value: '2'
            }, {
                text: 'HĐ thay thế',
                value: '3'
            }, {
                text: 'HĐ bị điều chỉnh',
                value: '4'
            }, {
                text: 'HĐ điều chỉnh',
                value: '5'
            }, {
                text: 'HĐ bị xóa bỏ',
                value: '6'
            }, {
                text: 'HĐ xóa bỏ',
                value: '7'
            }, {
                text: 'HĐ điều chỉnh chiết khấu',
                value: '9'
            }];
        this.extras = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.export_excel,
                items: [
                    {
                        id: 'HOA_DON',
                        name: "Hóa đơn",
                        icon: this._translate.ICONS.excel
                    },
                    {
                        id: 'PXK_KVCNB',
                        name: "PXK kiêm VCNB",
                        icon: this._translate.ICONS.excel
                    },
                    {
                        id: 'PXK_HGDL',
                        name: "PXK gửi đại lý",
                        icon: this._translate.ICONS.excel
                    }
                ]
            }];
    }
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
            if (e.data.adjustment_type === '2' || e.data.adjustment_type === '7') {
                var eles = e.rowElement.getElementsByTagName('td');
                for (var i = 0; i < eles.length; i++) {
                    if (i !== 9 && i !== 1) {
                        eles[i].style.textDecoration = 'line-through';
                    }
                }
            }
        }
    };
    // isFilter = true;
    IndexComponent.prototype.ngOnInit = function () {
        this._find = this.route.snapshot.queryParams;
        this.configs = this.authService.getConfigs();
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser.is_convert_TT78) {
            this.infoDangKy = this.authService.getInfoRegister();
            if (this.infoDangKy && this.infoDangKy.id) {
                if (this.infoDangKy.status == "CHAP_NHAN")
                    this.isTT78 = true;
            }
        }
    };
    IndexComponent.prototype.loadList = function (params) {
        if (params) {
            this.dataSource.store = this.searchService.getAll(params);
        }
        else {
            this.dataSource.store = this.searchService.getAll();
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
    IndexComponent.prototype.viewNotSelect = function (data) {
        var _this = this;
        this.dataInfor = data;
        var ids = [];
        if (data) {
            if (data.xml_type == 4 && _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(data.link_pdf_file) != "") {
                var oData = {
                    url: data.link_pdf_file,
                    type: 'pdf'
                };
                var popup_1 = window.open('about:blank', 'name', "width=200, height=100");
                popup_1.document.body.innerHTML = this._translate.NOTIFY.loading;
                popup_1.blur();
                this.spinner.show();
                var sub_1 = this.searchService.getFilePdf(oData).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        var w = 1920, h = 900;
                        w = window.screen.availWidth * 100 / 100;
                        h = window.screen.availHeight * 93 / 100;
                        var pdf_file = rs.data.file_content;
                        var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_3__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                        var win = window.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
                        win.resizeTo(screen.availWidth, screen.availHeight);
                        win.focus();
                        _this.spinner.hide();
                    }
                    else {
                        popup_1.close();
                        _this.spinner.hide();
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                    popup_1.close();
                    _this.spinner.hide();
                }, function () {
                    sub_1.unsubscribe();
                });
            }
            else {
                ids.push(data.id);
                if (this.configs.system_parameter.view_multi_invoice) {
                    var dataView = this.vatService.taodulieuXemMau(ids);
                    dataView['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
                    this.vPreviewInvService.xemMau(dataView);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].typeCode.xem_hoa_don
                    };
                    this.vPreviewInvService.xemMauPhanTrang(initialState);
                }
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    IndexComponent.prototype.getSearch = function (e) {
        this.paramSearch = e;
        this.dataSource = {};
        this.loadList(e);
    };
    // getAdvandStatusResult(e){
    //   if(e && e[0] == true){
    //     this.isFilter = false;
    //   }else{
    //     this.isFilter = true;
    //   }
    // }
    IndexComponent.prototype.inChuyenDoi = function (data) {
        var _this = this;
        if (data) {
            var ids = [];
            if (data) {
                if (data.xml_type == 4 && _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(data.link_pdf_file) != "") {
                    var oData = {
                        url: data.link_pdf_file,
                        type: 'pdf'
                    };
                    var popup_2 = window.open('about:blank', 'name', "width=200, height=100");
                    popup_2.document.body.innerHTML = this._translate.NOTIFY.loading;
                    popup_2.blur();
                    this.spinner.show();
                    var sub_2 = this.searchService.getFilePdf(oData).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            var w = 1920, h = 900;
                            w = window.screen.availWidth * 100 / 100;
                            h = window.screen.availHeight * 93 / 100;
                            var pdf_file = rs.data.file_content;
                            var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_3__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                            var win = window.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
                            win.resizeTo(screen.availWidth, screen.availHeight);
                            win.focus();
                            _this.spinner.hide();
                        }
                        else {
                            popup_2.close();
                            _this.spinner.hide();
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                        }
                    }, function (err) {
                        popup_2.close();
                        _this.spinner.hide();
                    }, function () {
                        sub_2.unsubscribe();
                    });
                }
                else {
                    if (data.status === 'DA_XUAT') {
                        ids.push(data.id);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.not_print_convert, 'error');
                        return;
                    }
                    if (this.configs.system_parameter.view_multi_invoice) {
                        var dataView = this.vatService.taodulieuInMau(ids, false);
                        dataView['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
                        this.vPreviewInvService.xemMau(dataView);
                    }
                    else {
                        var initialState = {
                            items: ids,
                            isXuatHD: false,
                            hinhthucxuat: '',
                            typeAction: _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].typeCode.in_chuyen_doi_hd
                        };
                        this.vPreviewInvService.xemMauPhanTrang(initialState);
                    }
                }
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    IndexComponent.prototype.viewAttachFile = function (data) {
        var _this = this;
        if (data) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            this.vatService.showAttachFile(data.id).subscribe(function (rs) {
                if (rs.status === 'success') {
                    if (rs.data && rs.data.invoice && rs.data.invoice.invoice_files.length > 0) {
                        var initialState = {
                            fileData: rs.data.invoice.invoice_files,
                            view_attach_file: true,
                        };
                        _this.bsModalRef = _this.modalService.show(_shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_9__["ViewAttachFileComponent"], {
                            backdrop: 'static',
                            keyboard: false,
                            class: 'modal-lg',
                            initialState: initialState
                        });
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.not_file_attach, 'error');
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            });
        }
    };
    IndexComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'HOA_DON') {
            this.xuatExcelHoaDon();
        }
        else if (e.itemData.id === 'PXK_KVCNB') {
            this.xuatExcelPXKVCNB();
        }
        else if (e.itemData.id === 'PXK_HGDL') {
            this.xuatExcelPXKHGDL();
        }
    };
    IndexComponent.prototype.xuatExcelHoaDon = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var oSort = this.apiService.oSort;
        if (oSort && oSort.nameColumn == 'invoice_date') {
            var direction_1 = oSort.isDest ? 'DESC' : 'ASC';
            this.objExport.invoices.sort.forEach(function (item) {
                if (item.value == "invoice_date")
                    item.direction = direction_1;
            });
        }
        this.objExport.invoicetype.loaihoadon = "HOA_DON";
        this.searchService.exportExcel(this.objExport).subscribe(function (res) {
            if (res.status === 'success') {
                var file = res.data.invoice;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất file Excel thành công', 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.xuatExcelPXKHGDL = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        this.objExport.invoicetype.loaihoadon = "PXK_HGDL";
        this.searchService.exportExcel(this.objExport).subscribe(function (res) {
            if (res.status === 'success') {
                var file = res.data.invoice;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất file Excel thành công', 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.xuatExcelPXKVCNB = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        this.objExport.invoicetype.loaihoadon = "PXK_KVCNB";
        this.searchService.exportExcel(this.objExport).subscribe(function (res) {
            if (res.status === 'success') {
                var file = res.data.invoice;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất file Excel thành công', 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.convertParamsToObject = function (e) {
        this.objExport = {
            invoicetype: {
                loaihoadon: null
            },
            invoices: {
                student_name: null,
                search_string: null,
                approve_status: null,
                template_code: null,
                invoice_series: null,
                product_name: null,
                status: null,
                user_id: null,
                adjustment_type: null,
                customer_object_code: null,
                send_email_status: null,
                is_buyer_signed: null,
                customer_name: null,
                from_date: null,
                to_date: null,
                other_id: null,
                based_on: null,
                sort: [
                    {
                        value: "invoice_date",
                        direction: "DESC"
                    },
                    {
                        value: "invoice_number",
                        direction: "ASC"
                    },
                ]
            }
        };
        this.objExport.invoices.based_on = e.based_on;
        this.objExport.invoices.search_string = e.contentSearch;
        this.objExport.invoices.approve_status = e.approve_status;
        this.objExport.invoices.template_code = e.template_code;
        this.objExport.invoices.invoice_series = e.invoice_series;
        this.objExport.invoices.product_name = e.product_name;
        this.objExport.invoices.status = e.status;
        this.objExport.invoices.user_id = e.user_id;
        this.objExport.invoices.adjustment_type = e.adjustment_type;
        this.objExport.invoices.customer_object_code = e.customer_object_code;
        this.objExport.invoices.send_email_status = e.send_email_status;
        this.objExport.invoices.is_buyer_signed = e.is_buyer_signed;
        this.objExport.invoices.customer_name = e.customer_name;
        this.objExport.invoices.from_date = e.startDate;
        this.objExport.invoices.to_date = e.endDate;
        this.objExport.invoices.student_name = e.student_name;
        this.objExport.invoices.sort.forEach(function (item, index) {
            if (item.value == "invoice_number" || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.value) == '') {
                item.value = "invoice_number";
                item.direction = e.sortinvoicenumber ? e.sortinvoicenumber : "ASC";
            }
        });
        if (Array.isArray(e.other_id)) {
            if (e.other_id.length == 1) {
                if (e.other_id[0] == "TU_XUAT") {
                    this.objExport.invoices.other_id = 'in_app';
                }
                else if (e.other_id[0] == "TICH_HOP") {
                    this.objExport.invoices.other_id = 'out_app';
                }
            }
        }
    };
    IndexComponent.prototype.GuiBangDuLieu = function () {
        var _this = this;
        var initialState = {
            invoices: this.selectedItems,
            configs: this.configs,
            notifyType: "GUI_BANG_TONG_HOP",
            infoDangKy: this.infoDangKy
        };
        this.bsModalSignRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_8__["SendDataForTaxComponent"], {
            backdrop: 'static',
            keyboard: true,
            class: 'sendTax modal-lg modal-margin-width',
            initialState: initialState
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            if (_this.bsModalSignRef.content.successSaveData) {
            }
            subModal.unsubscribe();
        });
    };
    // Chọn đối tượng trong màn hình danh sách
    IndexComponent.prototype.selectionChanged = function (data) {
        this.selectedItems = data.selectedRowsData;
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
    IndexComponent.prototype.calculateFilterExpression = function (value, selectedFilterOperations, target) {
        var column = this;
        if (target === 'headerFilter' && value === 'weekends') {
            return "";
        }
        return column.defaultCalculateFilterExpression.apply(this, arguments);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/search/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/search/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _modules_search_shared__WEBPACK_IMPORTED_MODULE_1__["SearchService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_11__["ViewInvoiceService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_12__["InvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/search/search.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/search/search.module.ts ***!
  \*************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/search/components/index/index.component.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _search_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.routing */ "./src/app/modules/search/search.routing.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/modules/vat-shared/components/view-attach-file/view-attach-file.component */ "./src/app/shared/modules/vat-shared/components/view-attach-file/view-attach-file.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//library


//general





var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _search_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _shared_index__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_4__["VatSharedModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_3__["devextremeModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
            ],
            declarations: [_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]],
            entryComponents: [
                _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_8__["ViewAttachFileComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_4__["SendDataForTaxComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_4__["ViewInvoiceMultipageComponent"]
            ],
            providers: [_modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"]]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/modules/search/search.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/search/search.routing.ts ***!
  \**************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/search/components/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
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
//# sourceMappingURL=search-search-module.js.map