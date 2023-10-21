(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["diary-transmission-diary-transmission-module"],{

/***/ "./src/app/modules/diary-transmission/components/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/components/index/index.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n    <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n        <app-search-diary (searchContentChange)=\"getSearch()\">\r\n        </app-search-diary>\r\n    </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerVat\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n    [showRowLines]=\"true\" [showBorders]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\"\r\n    [columnAutoWidth]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n    (onRowPrepared)=\"onRowPrepared($event)\" [noDataText] =\"textHienThiLuoi\">\r\n    <!-- <dxo-scrolling mode=\"virtual\"></dxo-scrolling> -->\r\n    <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n    </dxo-selection>\r\n    <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"vat\"></dxo-state-storing> -->\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n    <dxo-selection mode=\"multiple\"></dxo-selection>\r\n    <dxo-filter-row [visible]=\"true\" [applyFilter]=\"currentFilter\"></dxo-filter-row>\r\n    <!-- Thời gian gửi -->\r\n    <dxi-column cellTemplate=\"send_date\" caption=\"{{ 'GRID.DIARY.sending_time' | translate }}\" alignment=\"center\" \r\n        alignment=\"center\">\r\n    </dxi-column>\r\n    <!-- Mã thông điệp tham chiếu -->\r\n    <dxi-column caption=\"{{ 'GRID.DIARY.reference_message_code' | translate }}\" alignment=\"left\"\r\n        dataField=\"message_code_ref\">\r\n    </dxi-column>\r\n    <!-- Loại nghiệp vụ -->\r\n    <dxi-column cellTemplate=\"type\" caption=\"{{ 'GRID.DIARY.type_business' | translate }}\" alignment=\"left\" [allowFiltering]=\"true\">\r\n        <dxo-lookup [dataSource]=\"type_of_business\" displayExpr=\"name\" valueExpr=\"type_code\">\r\n        </dxo-lookup>\r\n    </dxi-column>\r\n    <!-- Mẫu số, ký hiệu -->\r\n    <dxi-column dataField=\"invoice_symbol\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" alignment=\"center\">\r\n\r\n    </dxi-column>\r\n    <!-- Số hóa đơn -->\r\n    <dxi-column dataField=\"invoice_number\" caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <!-- Ngày hóa đơn -->\r\n    <dxi-column dataField=\"invoice_date\" caption=\"{{ 'CONTROLL.LABEL.invoice_date' | translate }}\"\r\n        dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n    </dxi-column>\r\n    <!-- Mã số thuế khách hàng-->\r\n    <dxi-column dataField=\"buyer_tax_code\" caption=\"{{ 'GRID.DIARY.customer_tax_code' | translate }}\"\r\n        alignment=\"center\">\r\n    </dxi-column>\r\n    <!-- Trạng thái -->\r\n    <dxi-column dataField=\"name_status\" caption=\"{{ 'GRID.GENERAL.status' | translate }}\" alignment=\"left\">\r\n    </dxi-column>\r\n    <!-- Chức năng -->\r\n    <dxi-column cellTemplate=\"actionIcon\" width=\"50\" alignment=\"center\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'type'\">\r\n        {{d.data.type_code | diaryType}}\r\n    </div>\r\n    <!-- Trạng thái thanh toán -->\r\n    <div *dxTemplate=\"let d of 'viewPaymentStatus'\">\r\n    </div>\r\n    <!-- Hoạt động -->\r\n    <div *dxTemplate=\"let d of 'actionIcon'\">\r\n        <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n            href=\"javascript:void(0)\">\r\n        </a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'send_date'\">\r\n        {{d.data.send_date | date: 'dd/MM/yyyy' }}\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'short_name'\">\r\n        {{d.data.short_name }}\r\n    </div>\r\n\r\n    <dxo-summary>\r\n        <dxi-total-item summaryType=\"custom\" [customizeText]=\"customizeText\" showInColumn=\"total_payment_string\">\r\n        </dxi-total-item>\r\n    </dxo-summary>\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 35, 50, 100]\" [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n    </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n    <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n    [dragEnabled]=\"false\" (onShowing)=\"onImportShowing()\" (onHiding)=\"onImportHiding()\"\r\n    [(visible)]=\"showPopup\">\r\n    <div *dxTemplate=\"let data of 'content'\">\r\n        <div style=\"height: 30px;\">\r\n            <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n            </dx-progress-bar>\r\n        </div>\r\n        <!-- <p style=\"height: 25px;\">\r\n          <span>{{thongbao}}</span>\r\n      </p> -->\r\n    </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/diary-transmission/components/index/index.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/components/index/index.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/diary-transmission/components/index/index.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/components/index/index.component.ts ***!
  \********************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_diary_transmission_shared_diary_transmission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/diary-transmission/shared/diary-transmission.service */ "./src/app/modules/diary-transmission/shared/diary-transmission.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _view_diary_view_diary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-diary/view-diary.component */ "./src/app/modules/diary-transmission/components/view-diary/view-diary.component.ts");
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
    function IndexComponent(authService, translate, modalService, diaryTransmissionService, activatedRoute) {
        var _this = this;
        this.authService = authService;
        this.translate = translate;
        this.modalService = modalService;
        this.diaryTransmissionService = diaryTransmissionService;
        this.activatedRoute = activatedRoute;
        this.dataSource = {};
        this.selectedRows = [];
        this.selectedItems = [];
        this.showPopup = false;
        this.clickCurent = undefined;
        this.configs = {};
        this.type_of_business = [
            { type_code: 100, name: 'Đăng ký sử dụng' },
            { type_code: 200, name: 'Hóa đơn có mã' },
            { type_code: 203, name: 'Hóa đơn không mã' },
            { type_code: 300, name: 'Thông báo hóa đơn sai sót' },
            { type_code: 400, name: 'Bảng tổng hợp' },
        ];
        this.idRow = undefined;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this.isNhatKyTruyenNhan = false;
        this.configs = this.authService.getConfigs();
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.curentUser = this.authService.getCurrentUser();
        this.curentAccount = this.curentUser.account;
        translate.use(this._language);
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.urlParam = params;
        });
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.textHienThiLuoi = "Không có dữ liệu";
        var listpermissions = this.curentUser.user.permissions.split(',');
        var quyenlapchungtu = listpermissions.filter(function (p) { return p === 'tham_so_he_thong'; })[0];
        if (quyenlapchungtu)
            this.isNhatKyTruyenNhan = true;
        if (!this.isNhatKyTruyenNhan) {
            this.textHienThiLuoi = "Bạn không có quyền thực hiện chức năng này";
        }
        this.loadList();
    };
    IndexComponent.prototype.selectionChanged = function (data) {
        this.selectedItems = data.selectedRowsData;
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
    };
    IndexComponent.prototype.onImportShowing = function () {
    };
    IndexComponent.prototype.onImportHiding = function () {
    };
    IndexComponent.prototype.view = function (data) {
        var _this = this;
        var sub = this.diaryTransmissionService.getDiaryDetail(data.id).subscribe(function (rs) {
            _this.diaryData = rs.data;
            var initialState = {
                diaryData: _this.diaryData
            };
            _this.bsModalRef = _this.modalService.show(_view_diary_view_diary_component__WEBPACK_IMPORTED_MODULE_6__["ViewDiaryComponent"], {
                class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                keyboard: false,
            });
            _this.modalService.onHide.subscribe(function () {
            });
        });
    };
    IndexComponent.prototype.loadList = function () {
        this.dataSource = {};
        if (this.isNhatKyTruyenNhan) {
            this.data = Object.assign({}, this.urlParam, { send_tax_code: this.curentAccount.tax_code });
            // let data = Object.assign(...obj, {value : this.curentAccount.tax_code})
            this.dataSource.store = this.diaryTransmissionService.getDiary(this.data);
        }
    };
    IndexComponent.prototype.getSearch = function () {
        this.loadList();
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/diary-transmission/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/diary-transmission/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _modules_diary_transmission_shared_diary_transmission_service__WEBPACK_IMPORTED_MODULE_3__["DiaryTransmissionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/diary-transmission/components/search-advanced/search-advanced.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/components/search-advanced/search-advanced.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-date\">\r\n  <div class=\"column\">\r\n    <div class=\"field\">\r\n      <div class=\"label\">{{_translate.CONTROLL.LABEL.period}}</div>\r\n      <div class=\"value\">\r\n        <dx-select-box [items]=\"exportSchedules\" displayExpr=\"name\" valueExpr=\"code\"\r\n          (onValueChanged)=\"onExportSchedules($event)\" [value]=\"objParams.exportSchedulesDefault\">\r\n        </dx-select-box>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"column day\">\r\n    <div class=\"field\">\r\n      <div class=\"label\">{{_translate.CONTROLL.LABEL.from_date}}</div>\r\n      <div class=\"value\">\r\n        <dx-date-box [(value)]=\"objParams.startDate\" type=\"date\" [useMaskBehavior]=\"true\" [displayFormat]=\"'dd/MM/yyyy'\"\r\n          (onValueChanged)=\"onStartDate($event)\">\r\n        </dx-date-box>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"column day\">\r\n    <div class=\"field\">\r\n      <div class=\"label\">{{_translate.CONTROLL.LABEL.to_date}}</div>\r\n      <div class=\"value\">\r\n        <dx-date-box [(value)]=\"objParams.endDate\" [useMaskBehavior]=\"true\" type=\"date\" [displayFormat]=\"'dd/MM/yyyy'\"\r\n          (onValueChanged)=\"onEndDate($event)\">\r\n        </dx-date-box>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/diary-transmission/components/search-advanced/search-advanced.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/components/search-advanced/search-advanced.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .search-section .column{width:36%;display:inline-block;margin:0;text-align:right}::ng-deep .search-section .column .field{padding:5px 0}::ng-deep .search-section .day{width:32%}::ng-deep .search-section .day .field .label{width:61px !important}::ng-deep .search-section .day .field .value{width:56% !important}::ng-deep .search-section .day .field .dx-datebox{width:100% !important}::ng-deep .column .field>div{display:inline-block;vertical-align:middle}::ng-deep .search-section .column .field .label{width:110px;margin-right:10px}::ng-deep .search-section .column .field .value{width:53%}::ng-deep .search-section .column .field .value .dx-selectbox{border-radius:0}::ng-deep .search-section .column .field .value .dx-datebox{border-radius:0}::ng-deep .search-section .column .field .value .dx-datebox .dx-texteditor-input{min-height:25px;max-height:25px}::ng-deep .search-section .column .field .value .dx-texteditor-input{min-height:20px;max-height:25px}::ng-deep .search-section .column .field .valueProcess{width:56%}::ng-deep .search-section .column .field .valueProcess .dx-selectbox{border-radius:0}::ng-deep .search-section .column .field .valueProcess .dx-datebox{border-radius:0}::ng-deep .search-section .column .field .valueProcess .dx-datebox .dx-texteditor-input{min-height:25px;max-height:25px;padding:3px 35px 3px 9px !important}::ng-deep .search-section .column .field .valueProcess .dx-texteditor-input{min-height:20px;max-height:25px}::ng-deep .search-section .search-date{width:100%}::ng-deep .search-section .search-date .dx-texteditor-input{padding-top:5px !important;padding-bottom:4px}::ng-deep .search-section .search-panel .dx-textbox .dx-texteditor-input{padding-top:5px !important;padding-bottom:4px}::ng-deep .search-section .advanced .dx-textbox .dx-texteditor-input,::ng-deep .search-section .advanced-invoice-buy .dx-textbox .dx-texteditor-input{padding-top:5px !important;padding-bottom:4px}.search-panel{width:100%}.search-panel .dx-texteditor{border-radius:0}.search-panel .column{width:68%}.search-panel .label{margin:0}.search-panel .value{width:76% !important}.search-panel .value .dx-textbox{width:83%;display:inline-flex}.search-panel .value .dx-button{position:relative;top:-2px;border-left:0;height:27px}.search-panel .value .dx-button-content{padding-right:0 !important}.search-panel .value .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .value #advBtn{margin-top:0;width:5%}.search-panel .value #searchBtn{margin-top:0;width:9%}.search-panel .valueProcess{width:63%}.search-panel .valueProcess .dx-textbox{width:94%;display:inline-flex}.search-panel .valueProcess .dx-button{position:relative;top:-2px;border-left:0;height:27px}.search-panel .valueProcess .dx-button-content{padding-right:0 !important}.search-panel .valueProcess .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .valueProcess #advBtn{margin-top:0;width:5%}.search-panel .valueProcess #searchBtn{margin-top:0;width:9%}.advanced,.advanced-invoice-buy{margin:0 -15px;transition:all .3s linear 0s;width:145%}.advanced .dx-texteditor,.advanced-invoice-buy .dx-texteditor{border-radius:0}.advanced .column,.advanced-invoice-buy .column{width:24%}.advanced .column .value,.advanced-invoice-buy .column .value{width:47%}.advanced .name-customer,.advanced-invoice-buy .name-customer{width:48% !important}.advanced .name-customer .value,.advanced-invoice-buy .name-customer .value{width:73.4% !important}.advanced .name-customer-buy,.advanced-invoice-buy .name-customer-buy{width:35.07% !important}.advanced .name-customer-buy .value,.advanced-invoice-buy .name-customer-buy .value{width:63.5% !important}.advanced :host .dx-fieldset,.advanced-invoice-buy :host .dx-fieldset{width:100px}.button-ok{height:30px;padding-bottom:10px !important;padding-left:20px}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-popup-content{padding-top:5px !important;padding-left:5px !important;padding-right:5px !important;padding-bottom:0 !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-treeview{height:80% !important;padding-bottom:5px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .processing_status-search.dx-treeview,::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .exporter-search.dx-treeview{height:75% !important;padding-bottom:5px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-button-search{border-radius:12px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-button-search .dx-button-content .dx-icon{font-size:13px !important}\n"

/***/ }),

/***/ "./src/app/modules/diary-transmission/components/search-advanced/search-advanced.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/components/search-advanced/search-advanced.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SearchAdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAdvancedComponent", function() { return SearchAdvancedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_search_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/search/shared */ "./src/app/modules/search/shared/index.ts");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SearchAdvancedComponent = /** @class */ (function () {
    function SearchAdvancedComponent(authService, searchService, route, router, translate, listsService) {
        this.authService = authService;
        this.searchService = searchService;
        this.route = route;
        this.router = router;
        this.translate = translate;
        this.listsService = listsService;
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchContentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.objParamsExport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isVisibleAdvanced = false;
        this.objParams = {};
        this.customerTypes = [];
        this.exportPlaces = [];
        this.adjustmentTypes = [];
        this.sourceInvoices = [];
        this.approveStatus = [];
        this.sortInvoiceNumber = [];
        this.sends = [];
        this.listStatus = [];
        this.objectCustomers = [];
        this.buyerSelect = [];
        this.paramsDateSearchs = "";
        this.arrSelected = [];
        this.isShow = true;
        this.objectReductionRates = [];
        this.arrayCategory = [
            {
                code: "DM_NHOM_KHACH_HANG",
                order: 0,
            },
            {
                code: "DM_NOI_XUAT_HOA_DON",
                order: 0,
            },
        ];
        this.statusTaxAuthorities = [];
        this.statusTaxErrors = [];
        this.buyerSignsMinutes = [];
        this.isTT78 = false;
        this.infoDangKy = {};
        this.isFormHandInvoice = false;
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        //  this.isSearchStudent = this.authService.getAccountType() === 'HS-SV';
    }
    Object.defineProperty(SearchAdvancedComponent.prototype, "variableName", {
        set: function (value) {
            this.isShow = value;
        },
        enumerable: true,
        configurable: true
    });
    SearchAdvancedComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.exportSchedules = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].getExportSchedule(this._translate, true).schedule;
        this.adjustmentTypes = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"]._adjustmentTypes(this._translate);
        this.statusTaxAuthorities = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"].statusTaxAuthorities(this._translate);
        this.statusTaxErrors = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"].statusTaxErrors(this._translate);
        this.buyerSignsMinutes = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"].buyerSignsMinutes(this._translate);
        this.sends = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"]._statusSendMail(this._translate);
        this.objectCustomers = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"]._objectCustomers(this._translate);
        this.buyerSelect = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"]._buyerSelect(this._translate);
        this.listStatus = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"]._listStatus(this._translate);
        this.sourceInvoices = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"].sourceInvoice(this._translate);
        this.sortInvoiceNumber = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"]._sortInvoiceNumber(this._translate);
        if (this.isSearchStudent)
            this.placeholder =
                this._translate.CONTROLL.LABEL.input +
                    " " +
                    this._translate.GRID.INVOICE.invoice_number +
                    ", " +
                    this._translate.GRID.LIST_CATEGORY.nameClass;
        else
            this.placeholder =
                this._translate.CONTROLL.LABEL.input +
                    " " +
                    this._translate.GRID.INVOICE.invoice_number +
                    ", " +
                    this._translate.CONTROLL.LABEL.tax_code;
        var approveStatus;
        if (this.isShow) {
            approveStatus = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_5__["VSelectBoxService"]._approveStatus(this._translate);
        }
        else {
            approveStatus = [
                { name: "Tự động cập nhật từ hệ thống iHOADON", code: "1" },
                { name: "Tự thêm vào phần mềm ", code: "0" },
            ];
        }
        if (this.isSearchStudent) {
            this.getReductionRates();
        }
        if (this.route.snapshot.data.brec === "approve_the_invoice" &&
            this.approveStatus) {
            approveStatus.splice(0, 1);
        }
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser.is_convert_TT78) {
            this.infoDangKy = this.authService.getInfoRegister();
            if (this.infoDangKy && this.infoDangKy.id) {
                if (this.infoDangKy.status == "CHAP_NHAN") {
                    this.isTT78 = true;
                }
            }
        }
        this.approveStatus = approveStatus;
        this.myMethodChangingQueryParams();
    };
    SearchAdvancedComponent.prototype.getReductionRates = function () {
        var _this = this;
        this.searchService.getTLMGtoSearchStudent().subscribe(function (value) {
            if (value.status === "success") {
                _this.objectReductionRates = value.data.DM_TY_LE_MIEN_GIAM_HOC_PHI;
            }
        }, function (error) { return console.log(error); });
    };
    SearchAdvancedComponent.prototype.onAdvancedClick = function () {
        this.objParams.is_advanced = !this.isVisibleAdvanced;
        this.changeParamUrl();
        this.isVisibleAdvanced = !this.isVisibleAdvanced;
    };
    SearchAdvancedComponent.prototype.getUsers = function () {
        var _this = this;
        var users = this.authService.getUsers();
        if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"].isEmptyObject(users)) {
            this.searchService.getusers().subscribe(function (rs) {
                if (rs.status == "success") {
                    _this.users = rs.data.users;
                    _this.authService.setUsers(_this.users);
                    if (_this.objParams.user_id) {
                        _this.selectedItemDropdownToId(_this.objParams.user_id, _this.users);
                    }
                }
            });
        }
        else {
            this.users = users;
            if (this.objParams.user_id) {
                this.selectedItemDropdownToId(this.objParams.user_id, this.users);
            }
        }
        this.searchService.getUserAndListType(true).subscribe(function (rs) {
            if (Array.isArray(rs)) {
                // if (rs[0].status == "success") {
                //   this.users = rs[0].data.users;
                //   if (this.objParams.user_id) {
                //     this.selectedItemDropdownToId(this.objParams.user_id, this.users);
                //   }
                // }
                if (rs[0].status == "success") {
                    localStorage["listtypes"] = JSON.stringify(rs[0].data.listtypes);
                    var arrApiGetCategory = _this.listsService.getDMBy(_this.arrayCategory);
                    if (arrApiGetCategory.length > 0) {
                        arrApiGetCategory[0].subscribe(function (response) {
                            var _data = [];
                            if (response.status == "success") {
                                _data.push(response);
                                _this.authService.setDMLocal(_data);
                                var dataCategory = _this.authService.getDMLocal();
                                if (dataCategory) {
                                    _this.customerTypes = dataCategory.DM_NHOM_KHACH_HANG
                                        ? dataCategory.DM_NHOM_KHACH_HANG.data
                                        : null;
                                    _this.exportPlaces = dataCategory.DM_NOI_XUAT_HOA_DON
                                        ? dataCategory.DM_NOI_XUAT_HOA_DON.data
                                        : null;
                                }
                            }
                        });
                    }
                    else {
                        var dataCategory = _this.authService.getDMLocal();
                        if (dataCategory) {
                            _this.customerTypes = dataCategory.DM_NHOM_KHACH_HANG
                                ? dataCategory.DM_NHOM_KHACH_HANG.data
                                : null;
                            _this.exportPlaces = dataCategory.DM_NOI_XUAT_HOA_DON
                                ? dataCategory.DM_NOI_XUAT_HOA_DON.data
                                : null;
                        }
                    }
                }
            }
            // return null;
        });
        // .toPromise().then(res => {
        //   if (res.status === 'success') {
        //     this.users = res.data.users;
        //     // Tạm đóng
        //     // this.users.push({
        //     //   id: '26BD90-1999-11E9-QT83-199999DHUYPN',
        //     //   name: this._translate.CONTROLL.COMBO.all
        //     // });
        //     if (this.objParams.user_id) {
        //       this.selectedItemDropdownToId(this.objParams.user_id, this.users);
        //     }
        //   }
        // });
    };
    SearchAdvancedComponent.prototype.onExportSchedules = function (e) {
        var selectedItem = e.component.option("selectedItem");
        this.objParams.exportSchedulesDefault = selectedItem.code;
        this.objParams.startDate = selectedItem.startDate;
        this.objParams.endDate = selectedItem.endDate;
        this.search(undefined);
    };
    SearchAdvancedComponent.prototype.onStartDate = function (e) {
        if (e.event) {
            this.objParams.startDate = e.value
                ? moment__WEBPACK_IMPORTED_MODULE_7__(e.value).format("YYYY-MM-DD")
                : "";
            this.search(undefined);
        }
    };
    SearchAdvancedComponent.prototype.onEndDate = function (e) {
        if (e.event) {
            this.objParams.endDate = e.value
                ? moment__WEBPACK_IMPORTED_MODULE_7__(e.value).format("YYYY-MM-DD")
                : "";
            this.search(undefined);
        }
    };
    SearchAdvancedComponent.prototype.search = function (e) {
        if (e !== undefined) {
            if (this.gridBox) {
                this.gridBox.instance.close();
            }
            if (this.gridBox1) {
                this.gridBox1.instance.close();
            }
            if (this.gridBox2) {
                this.gridBox2.instance.close();
            }
            if (this.gridBox3) {
                this.gridBox3.instance.close();
            }
            if (this.gridBox4) {
                this.gridBox4.instance.close();
            }
            if (this.gridBox5) {
                this.gridBox5.instance.close();
            }
            if (this.gridBox6) {
                this.gridBox6.instance.close();
            }
            if (this.gridBox7) {
                this.gridBox7.instance.close();
            }
            if (this.gridBox8) {
                this.gridBox8.instance.close();
            }
            if (this.gridBox9) {
                this.gridBox9.instance.close();
            }
            if (this.gridBox10) {
                this.gridBox10.instance.close();
            }
        }
        this.paramsDateSearchs = "&";
        var _indexfilter_groups = 8888;
        if (this.objParams.contentSearch) {
            this.paramsDateSearchs +=
                _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][or]=true\n          &filter_groups[" + _indexfilter_groups + "][filters][0][key]=buyer_tax_code\n          &filter_groups[" + _indexfilter_groups + "][filters][0][value]=" + this.objParams.contentSearch + "\n          &filter_groups[" + _indexfilter_groups + "][filters][0][operator]=ct\n          &filter_groups[" + _indexfilter_groups + "][filters][1][key]=invoice_number\n          &filter_groups[" + _indexfilter_groups + "][filters][1][value]=" + this.objParams.contentSearch + "\n          &filter_groups[" + _indexfilter_groups + "][filters][1][operator]=ct\n          &filter_groups[" + _indexfilter_groups + "][filters][2][key]=buyer_name\n          &filter_groups[" + _indexfilter_groups + "][filters][2][value]=" + encodeURIComponent(this.objParams.contentSearch) + "\n          &filter_groups[" + _indexfilter_groups + "][filters][2][operator]=ct\n          &filter_groups[" + _indexfilter_groups + "][filters][3][key]=class_name\n          &filter_groups[" + _indexfilter_groups + "][filters][3][value]=" + this.objParams.contentSearch + "\n          &filter_groups[" + _indexfilter_groups + "][filters][3][operator]=ct\n          &filter_groups[" + _indexfilter_groups + "][filters][4][key]=customer_name\n          &filter_groups[" + _indexfilter_groups + "][filters][4][value]=" + encodeURIComponent(this.objParams.contentSearch) + "\n          &filter_groups[" + _indexfilter_groups + "][filters][4][operator]=ct\n          &filter_groups[" + _indexfilter_groups + "][filters][5][key]=customer_code\n          &filter_groups[" + _indexfilter_groups + "][filters][5][value]=" + encodeURIComponent(this.objParams.contentSearch) + "\n          &filter_groups[" + _indexfilter_groups + "][filters][5][operator]=ct&");
            _indexfilter_groups++;
        }
        // Tìm kiếm theo ngày bắt đầu
        if (this.objParams.startDate) {
            this.objParams.startDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.objParams.startDate).format("YYYY-MM-DD");
            this.paramsDateSearchs +=
                _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][filters][0][key]=date\n        &filter_groups[" + _indexfilter_groups + "][filters][0][value]=" + this.objParams.startDate + "\n        &filter_groups[" + _indexfilter_groups + "][filters][0][operator]=gte&");
            _indexfilter_groups++;
        }
        // Tìm kiếm ngày kết thức
        if (this.objParams.endDate) {
            this.objParams.endDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.objParams.endDate).format("YYYY-MM-DD");
            this.paramsDateSearchs +=
                _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][filters][2][key]=date\n        &filter_groups[" + _indexfilter_groups + "][filters][2][value]=" + this.objParams.endDate + "\n        &filter_groups[" + _indexfilter_groups + "][filters][2][operator]=lt&");
            _indexfilter_groups++;
        }
        // Trạng thái kí
        if (this.objParams.approve_status) {
            if (Array.isArray(this.objParams.approve_status) &&
                this.objParams.approve_status.length > 0) {
                var _obj = this.objParams.approve_status.filter(function (p) { return p === "TAT_CA"; })[0];
                if (!_obj) {
                    this.paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][filters][3][key]=approve_status");
                    for (var i = 0; i < this.objParams.approve_status.length; i++) {
                        this.paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][value][" + i + "]=" + this.objParams.approve_status[i]);
                    }
                    this.paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][operator]=eq&");
                    _indexfilter_groups++;
                }
            }
            else {
                if (Array.isArray(this.objParams.approve_status)) {
                    if (this.route.snapshot.data.brec === "approve_the_invoice" &&
                        this.approveStatus) {
                        var approveStatus = this.approveStatus.filter(function (p) { return p.code !== "TAT_CA"; });
                        this.paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][filters][3][key]=approve_status");
                        for (var i = 0; i < approveStatus.length; i++) {
                            this.paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][value][" + i + "]=" + approveStatus[i].code);
                        }
                        this.paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][operator]=in&");
                        _indexfilter_groups++;
                    }
                }
                else {
                    if (this.objParams.approve_status !== "TAT_CA") {
                        var key_filter = this.objParams.approve_status;
                        this.paramsDateSearchs += "filter_groups[" + _indexfilter_groups + "][filters][3][key]=approve_status&filter_groups[" + _indexfilter_groups + "][filters][3][value]=" + this.objParams.approve_status + "&filter_groups[" + _indexfilter_groups + "][filters][3][operator]=ct&";
                        _indexfilter_groups++;
                    }
                }
            }
        }
        else {
            if (this.route.snapshot.data.brec === "approve_the_invoice" &&
                this.approveStatus) {
                var approveStatus = this.approveStatus.filter(function (p) { return p.code !== "TAT_CA"; });
                this.paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][filters][3][key]=approve_status");
                for (var i = 0; i < approveStatus.length; i++) {
                    this.paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][value][" + i + "]=" + approveStatus[i].code);
                }
                this.paramsDateSearchs += _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("&filter_groups[" + _indexfilter_groups + "][filters][3][operator]=in&");
                _indexfilter_groups++;
            }
        }
        // Tìm kiếm theo người mua kí
        this.objParams.is_advanced = this.isVisibleAdvanced;
        if (this.isVisibleAdvanced === true) {
            var count = 0;
            var param = "";
            for (var key in this.objParams) {
                if (this.objParams.hasOwnProperty(key)) {
                    var value = this.objParams[key];
                    if (value &&
                        key !== "startDate" &&
                        key !== "endDate" &&
                        key !== "is_advanced" &&
                        key !== "exportSchedulesDefault" &&
                        key !== "contentSearch") {
                        if (value.length > 0) {
                            if (Array.isArray(value)) {
                                var _obj = value.filter(function (p) { return p === "TAT_CA"; })[0];
                                var _obj1 = value.filter(function (p) { return p === "26BD90-1999-11E9-QT83-199999DHUYPN"; })[0];
                                if (!_obj && !_obj1) {
                                    if (key == "other_id") {
                                        if (value.length == 1) {
                                            param += "filter_groups[" + _indexfilter_groups + "][filters][" + count + "][key]=" + key;
                                            if (value[0] == "TU_XUAT") {
                                                param += "&filter_groups[" + _indexfilter_groups + "][filters][" + count + "][value]=null";
                                                param += "&filter_groups[" + _indexfilter_groups + "][filters][" + count + "][operator]=eq&";
                                            }
                                            else if (value[0] == "TICH_HOP") {
                                                param += "&filter_groups[" + _indexfilter_groups + "][filters][" + count + "][value]=null";
                                                param += "&filter_groups[" + _indexfilter_groups + "][filters][" + count + "][operator]=eq&filter_groups[" + _indexfilter_groups + "][filters][" + count + "][not]=true&";
                                            }
                                        }
                                    }
                                    else if (key == "signature_status") {
                                        if (Array.isArray(this.objParams.signature_status) && this.objParams.signature_status.length > 0) {
                                            for (var i = 0; i < this.objParams.signature_status.length; i++) {
                                                param += _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("&options[signature_status][" + i + "]=" + this.objParams.signature_status[i]);
                                            }
                                            param += '&';
                                        }
                                    }
                                    else {
                                        param += "filter_groups[" + _indexfilter_groups + "][filters][" + count + "][key]=" + key;
                                        for (var i = 0; i < value.length; i++) {
                                            param += "&filter_groups[" + _indexfilter_groups + "][filters][" + count + "][value][" + i + "]=" + value[i];
                                        }
                                        param += "&filter_groups[" + _indexfilter_groups + "][filters][" + count + "][operator]=in&";
                                    }
                                    _indexfilter_groups++;
                                    if (key === "send_email_status" &&
                                        value.filter(function (p) { return p === "CHUA_GUI"; })[0]) {
                                        // count++;
                                        // param += `filter_groups[${_indexfilter_groups}][filters][${count}][key]=time_print_conversion&filter_groups[${_indexfilter_groups}][filters][${count}][value]=null&filter_groups[${_indexfilter_groups}][filters][${count}][operator]=eq&`;
                                        // _indexfilter_groups++;
                                    }
                                }
                            }
                            else {
                                if (value !== "TAT_CA") {
                                    var key_filter = key;
                                    if (key_filter === "product_name") {
                                        key_filter = "invoice_products.product_name";
                                    }
                                    if (key_filter === "customer_name") {
                                        param +=
                                            _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][or]=true\n                          &filter_groups[" + _indexfilter_groups + "][filters][" + count + "][key]=buyer_name\n                          &filter_groups[" + _indexfilter_groups + "][filters][" + count + "][value]=" + encodeURIComponent(value) + "\n                          &filter_groups[" + _indexfilter_groups + "][filters][" + count + "][operator]=ct\n                          &filter_groups[" + _indexfilter_groups + "][filters][" + (count + 1) + "][key]=customer_name\n                          &filter_groups[" + _indexfilter_groups + "][filters][" + (count + 1) + "][value]=" + encodeURIComponent(value) + "\n                          &filter_groups[" + _indexfilter_groups + "][filters][" + (count + 1) + "][operator]=ct&");
                                        count++;
                                    }
                                    else
                                        param += "filter_groups[" + _indexfilter_groups + "][filters][" + count + "][key]=" + key_filter + "&filter_groups[" + _indexfilter_groups + "][filters][" + count + "][value]=" + encodeURIComponent(value) + "&filter_groups[" + _indexfilter_groups + "][filters][" + count + "][operator]=ct&";
                                    _indexfilter_groups++;
                                    if (key === "send_email_status" && value === "CHUA_GUI") {
                                        // count++;
                                        // param += `filter_groups[${_indexfilter_groups}][filters][${count}][key]=time_print_conversion&filter_groups[${_indexfilter_groups}][filters][${count}][value]=null&filter_groups[${_indexfilter_groups}][filters][${count}][operator]=eq&`;
                                        // _indexfilter_groups++;
                                    }
                                }
                            }
                            // if (this.errorSign) {
                            //   count++;
                            //   param += `filter_groups[1000][filters][${count}][key]=invoice_number&filter_groups[1000][filters][${count}][value]=null&filter_groups[1000][filters][${count}][operator]=eq&filter_groups[1000][filters][${count}][not]=true&`;
                            // }
                            count++;
                        }
                    }
                }
            }
            this.paramsDateSearchs += param;
            this.paramsDateSearchs = this.paramsDateSearchs.slice(0, -1);
        }
        this.searchContentChange.emit(this.paramsDateSearchs);
        this.objParamsExport.emit(this.objParams);
        this.changeParamUrl();
    };
    SearchAdvancedComponent.prototype.onSendChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.send_email_status = this.getSelectedItemsKeys(nodes);
    };
    SearchAdvancedComponent.prototype.onAdjustmentTypesChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.adjustment_type = this.getSelectedItemsKeys(nodes);
    };
    SearchAdvancedComponent.prototype.onSelectionChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.adjustment_type = this.getSelectedItemsKeys(nodes);
    };
    SearchAdvancedComponent.prototype.approveonSelectionChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.approve_status = this.getSelectedItemsKeys(nodes);
    };
    SearchAdvancedComponent.prototype.getSelectedItemsKeys = function (items) {
        var result = [], that = this;
        items.forEach(function (item) {
            if (item.selected) {
                result.push(item.key);
            }
            if (item.items.length) {
                result = result.concat(that.getSelectedItemsKeys(item.items));
            }
        });
        // if(result.length>0)
        // {
        //   if (items.length === result.length)
        //   result.push("TAT_CA");
        // }
        return result;
    };
    SearchAdvancedComponent.prototype.onObjectCustomersChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.customer_object_code = this.getSelectedItemsKeys(nodes);
    };
    SearchAdvancedComponent.prototype.onObjectReductionRatesChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.student_reduce_rate_code = this.getSelectedItemsKeys(nodes);
    };
    SearchAdvancedComponent.prototype.onStatusChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.status = this.getSelectedItemsKeys(nodes);
    };
    SearchAdvancedComponent.prototype.onStatusTaxAuthority = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.send_department_status = this.getSelectedItemsKeys(nodes);
    };
    SearchAdvancedComponent.prototype.onStatusTaxError = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.send_wrong_status = this.getSelectedItemsKeys(nodes);
    };
    /* Người mua ký */
    SearchAdvancedComponent.prototype.onBuyerSignsMinutes = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.signature_status = this.getSelectedItemsKeys(nodes);
    };
    SearchAdvancedComponent.prototype.onBuyerSelectChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.is_buyer_signed = this.getSelectedItemsKeys(nodes);
    };
    SearchAdvancedComponent.prototype.onUserChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.user_id = this.getSelectedItemsKeys(nodes);
    };
    // Sự kiện thay đổi nhóm khách hàng
    SearchAdvancedComponent.prototype.onCustomerTypeChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.customer_type = this.getSelectedItemsKeys(nodes);
    };
    // Sự kiện thay đổi nơi xuất hóa đơn
    SearchAdvancedComponent.prototype.onExportPlaceSelectChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.export_place = this.getSelectedItemsKeys(nodes);
    };
    /* Sự kiện thay đổi nguồn lập hóa đơn */
    SearchAdvancedComponent.prototype.onSourceInvoiceSelectChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.other_id = this.getSelectedItemsKeys(nodes);
    };
    /* Sự kiện sắp xếp số hóa đơn */
    SearchAdvancedComponent.prototype.onsortInvoiceNumber = function (e) {
        this.objParams.sortinvoicenumber = e.value;
        this.objParamsExport.emit(this.objParams);
    };
    SearchAdvancedComponent.prototype.myMethodChangingQueryParams = function () {
        var _this = this;
        var e = undefined;
        this.sub = this.route.queryParams.subscribe(function (params) {
            var qp = {};
            var startDate = "";
            var endDate = "";
            if (!params.exportSchedulesDefault) {
                var oKyXuat = _this.exportSchedules.filter(function (p) { return p.code == "THANG_NAY"; })[0];
                if (oKyXuat) {
                    startDate = oKyXuat.startDate;
                    endDate = oKyXuat.endDate;
                }
            }
            _this.objParams = {
                is_advanced: params.is_advanced ? true : false,
                exportSchedulesDefault: params.exportSchedulesDefault ? params.exportSchedulesDefault : 'THANG_NAY',
                startDate: params.startDate ? params.startDate : startDate,
                endDate: params.endDate ? params.endDate : endDate,
                contentSearch: params.contentSearch ? params.contentSearch : '',
                template_code: params.template_code ? params.template_code : '',
                invoice_series: params.invoice_series ? params.invoice_series : '',
                buyer_tax_code: params.buyer_tax_code ? params.buyer_tax_code : '',
                product_name: params.product_name ? params.product_name : '',
                invoice_number: params.invoice_number ? params.invoice_number : '',
                user_id: params.user_id ? params.user_id : '',
                adjustment_type: params.adjustment_type ? params.adjustment_type : '',
                status: params.status ? params.status : '',
                customer_object_code: params.customer_object_code ? params.customer_object_code : '',
                send_email_status: params.send_email_status ? params.send_email_status : '',
                is_buyer_signed: params.is_buyer_signed ? params.is_buyer_signed : '',
                customer_name: params.customer_name ? params.customer_name : '',
                student_name: params.student_name ? params.student_name : '',
                approve_status: params.approve_status ? params.approve_status : '',
                customer_type: params.customer_type ? params.customer_type : '',
                export_place: params.export_place ? params.export_place : '',
                other_id: params.other_id ? params.other_id : '',
                send_department_status: params.send_department_status ? params.send_department_status : '',
                send_wrong_status: params.send_wrong_status ? params.send_wrong_status : '',
                receipts_no: params.receipts_no ? params.receipts_no : '',
                signature_status: params.signature_status ? params.signature_status : "",
            };
            _this.isVisibleAdvanced = _this.objParams.is_advanced;
            if (_this.objParams.send_email_status) {
                _this.selectedItemDropdown(_this.objParams.send_email_status, _this.sends);
            }
            if (_this.objParams.adjustment_type) {
                _this.selectedItemDropdown(_this.objParams.adjustment_type, _this.adjustmentTypes);
            }
            if (_this.objParams.send_department_status) {
                _this.selectedItemDropdown(_this.objParams.send_department_status, _this.statusTaxAuthorities);
            }
            if (_this.objParams.send_wrong_status) {
                _this.selectedItemDropdown(_this.objParams.send_wrong_status, _this.statusTaxErrors);
            }
            if (_this.objParams.signature_status) {
                _this.selectedItemDropdown(_this.objParams.signature_status, _this.buyerSignsMinutes);
            }
            if (_this.objParams.status) {
                _this.selectedItemDropdown(_this.objParams.status, _this.listStatus);
            }
            if (_this.objParams.customer_object_code) {
                _this.selectedItemDropdown(_this.objParams.customer_object_code, _this.objectCustomers);
            }
            if (_this.objParams.is_buyer_signed) {
                _this.selectedItemDropdown(_this.objParams.is_buyer_signed, _this.buyerSelect);
            }
            if (_this.objParams.approve_status) {
                _this.selectedItemDropdown(_this.objParams.approve_status, _this.approveStatus);
            }
            if (_this.objParams.customer_type) {
                _this.selectedItemDropdown(_this.objParams.customer_type, _this.customerTypes);
            }
            if (_this.objParams.export_place) {
                _this.selectedItemDropdown(_this.objParams.export_place, _this.exportPlaces);
            }
            if (_this.objParams.other_id) {
                _this.selectedItemDropdown(_this.objParams.other_id, _this.sourceInvoices);
            }
            if (params.send || params.status || params.errorSign) {
                _this.search(e);
            }
            else {
                _this.search(e);
            }
        });
    };
    // hanlde selected item dropdown : Huypn
    SearchAdvancedComponent.prototype.selectedItemDropdown = function (items, arrItem) {
        if (Array.isArray(items)) {
            this.arrSelected = items;
        }
        else {
            this.arrSelected.push(items);
        }
        for (var i = 0; i < arrItem.length; i++) {
            for (var j = 0; j < this.arrSelected.length; j++) {
                if (arrItem[i].code === this.arrSelected[j]) {
                    arrItem[i].selected = true;
                }
            }
        }
    };
    // hanlde selected item dropdown : Huypn
    SearchAdvancedComponent.prototype.selectedItemDropdownToId = function (items, arrItem) {
        if (Array.isArray(items)) {
            this.arrSelected = items;
        }
        else {
            this.arrSelected.push(items);
        }
        for (var i = 0; i < arrItem.length; i++) {
            for (var j = 0; j < this.arrSelected.length; j++) {
                if (arrItem[i].id === this.arrSelected[j]) {
                    arrItem[i].selected = true;
                }
            }
        }
    };
    SearchAdvancedComponent.prototype.changeParamUrl = function () {
        var qp = {};
        for (var key in this.objParams) {
            if (this.objParams.hasOwnProperty(key)) {
                var value = this.objParams[key];
                if (value) {
                    qp[key] = value;
                }
                else {
                    qp[key] = null;
                }
            }
        }
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: qp,
            queryParamsHandling: "merge",
        });
    };
    SearchAdvancedComponent.prototype.removeParamInit = function () {
        // this.status = "";
        // const qp: Params = {};
        // // qp.status = null;
        // qp.errorSign = null;
        // qp.send = null;
        // this.router.navigate(
        //   [],
        //   {
        //     relativeTo: this.route,
        //     queryParams: qp,
        //     queryParamsHandling: "merge"
        //   }
        // );
    };
    SearchAdvancedComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownBoxComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDropDownBoxComponent"])
    ], SearchAdvancedComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gridBox"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "gridBox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gridBox1"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "gridBox1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gridBox2"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "gridBox2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gridBox3"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "gridBox3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gridBox4"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "gridBox4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gridBox5"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "gridBox5", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gridBox6"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "gridBox6", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gridBox7"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "gridBox7", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gridBox8"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "gridBox8", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gridBox9"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "gridBox9", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gridBox10"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "gridBox10", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("dateChange"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "dateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("searchContentChange"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "searchContentChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("objParamsExport"),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "objParamsExport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "_find", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SearchAdvancedComponent.prototype, "variableName", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchAdvancedComponent.prototype, "isSearchStudent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SearchAdvancedComponent.prototype, "isFormHandInvoice", void 0);
    SearchAdvancedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-search-diary",
            template: __webpack_require__(/*! ./search-advanced.component.html */ "./src/app/modules/diary-transmission/components/search-advanced/search-advanced.component.html"),
            styles: [__webpack_require__(/*! ./search-advanced.component.scss */ "./src/app/modules/diary-transmission/components/search-advanced/search-advanced.component.scss")],
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _modules_search_shared__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_9__["ListsService"]])
    ], SearchAdvancedComponent);
    return SearchAdvancedComponent;
}());



/***/ }),

/***/ "./src/app/modules/diary-transmission/components/view-diary/view-diary.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/components/view-diary/view-diary.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">THEO DÕI GỬI - NHẬN HÓA ĐƠN ĐIỆN TỬ</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div style=\"display: flex;flex-direction: column;width: 100%; padding-left: 5px;\">\r\n    <span style=\"padding-bottom: 10px;\">Ngày gửi: {{diaryDetail.send_date | date: 'dd/MM/yyyy HH:mm:ss'}}</span>\r\n    <span style=\"padding-bottom: 10px;\">Mã thông điệp tham chiếu: {{diaryDetail.message_code_ref}}</span>\r\n    <div style=\"display: flex;\">\r\n      <span style=\"flex: 1; padding-bottom: 10px;\">Loại nghiệp vụ: {{diaryDetail.type_code | diaryType}}</span>\r\n      <span style=\"flex: 1; padding-bottom: 10px;\">Ký hiệu: {{diaryDetail.invoice_symbol}}</span>\r\n    </div>\r\n    <div style=\"display: flex;\">\r\n      <span style=\"flex: 1;padding-bottom: 10px;\">Số hóa đơn: {{diaryDetail.invoice_number}}</span>\r\n      <span style=\"flex: 1;padding-bottom: 10px;\">Ngày hóa đơn: {{diaryDetail.invoice_date | date: 'dd/MM/yyyy'}}</span>\r\n    </div>\r\n  </div>\r\n  <dx-data-grid id=\"invoiceHistoryGrid\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n    [allowColumnResizing]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\">\r\n    <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n    <dxi-column cellTemplate=\"stt\" caption=\"STT\" alignment=\"center\" width=\"50\"></dxi-column>\r\n    <dxi-column dataField=\"type_code\" caption=\"Mã loại thông điệp\" alignment=\"center\" width=\"100\"></dxi-column>\r\n    <dxi-column dataField=\"receiving_date\" width=\"250\" caption=\"Ngày gửi\" dataType=\"datetime\"\r\n      format=\"dd/MM/yyyy HH:mm:ss\" dateSerializationFormat=\"yyyy-MM-dd HH:mm:ss\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"message_code\" width=\"350\" caption=\"Mã thông điệp\" alignment=\"center\"></dxi-column>\r\n    <dxi-column cellTemplate=\"message\" caption=\"Thông điệp\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"content\" caption=\"#\" alignment=\"center\" width=\"100\" cellTemplate=\"actionIcon\"></dxi-column>\r\n    <div *dxTemplate=\"let d of 'stt'\">\r\n      <p>{{ d.rowIndex + 1 }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'message'\">\r\n      <p>{{ d.data.message }}</p>\r\n      <div style=\"display: flex; flex-direction: column; width: 100%; align-items: baseline;\">\r\n        <b class=\"text-danger\">{{d.data.error_code}}</b>\r\n        <b class=\"text-danger\">{{d.data.error_message_re}}</b>\r\n      </div>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'actionIcon'\">\r\n      <div>\r\n        <a href=\"javascript:void(0)\" (click)=\"getFileXmlSend(d.data)\">XML</a>\r\n      </div>\r\n      <div>\r\n        <a title=\"{{_translate.CONTROLL.BUTTON.get_template_report}}\" style=\"float: right;\"\r\n          class=\"{{_translate.ICONS.download}}\" style=\"color: #007BFF;font-size:18px;cursor: pointer;line-height: 26px\"\r\n          (click)=\"downloadFileXml(d.data)\" href=\"javascript:void(0)\"></a>\r\n      </div>\r\n    </div>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button text=\"Quay lại\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"close()\">\r\n  </dx-button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/diary-transmission/components/view-diary/view-diary.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/components/view-diary/view-diary.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-danger{color:red;font-weight:bold}\n"

/***/ }),

/***/ "./src/app/modules/diary-transmission/components/view-diary/view-diary.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/components/view-diary/view-diary.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewDiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDiaryComponent", function() { return ViewDiaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_diary_transmission_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/diary-transmission/shared */ "./src/app/modules/diary-transmission/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewDiaryComponent = /** @class */ (function () {
    function ViewDiaryComponent(bsModalRef, modalService, diaryTransmissionService, authService, translate) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.diaryTransmissionService = diaryTransmissionService;
        this.authService = authService;
        this.translate = translate;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
    }
    ViewDiaryComponent.prototype.ngOnInit = function () {
        this.diaryDetail = this.diaryData.send_record;
        var send_record = {
            type_code: this.diaryDetail.type_code,
            message_code: this.diaryDetail.message_code,
            receiving_date: this.diaryDetail.send_date,
            number_send: this.diaryDetail.number_send,
            error_message: this.diaryDetail.error_message,
            xml: this.diaryDetail.xml,
            is_send: true
        };
        var records = this.diaryData.receiver_records;
        records.unshift(send_record);
        this.dataSource = records;
        this.convertMessage();
    };
    ViewDiaryComponent.prototype.close = function () {
        this.bsModalRef.hide();
    };
    ViewDiaryComponent.prototype.downloadFileXml = function (data) {
        var base64String = window.btoa(unescape(encodeURIComponent(data.xml)));
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].dowloadFile("xml", 'xml', base64String);
    };
    ViewDiaryComponent.prototype.getFileXmlSend = function (data) {
        var base64String = window.btoa(unescape(encodeURIComponent(data.xml)));
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].showFileXml("xml", 'xml', base64String);
    };
    ViewDiaryComponent.prototype.convertMessage = function () {
        var _this = this;
        var send_record = this.diaryDetail;
        this.dataSource.forEach(function (item) {
            var parser = new xml2js__WEBPACK_IMPORTED_MODULE_5__["Parser"]({ strict: false, trim: true });
            if (item.error_message) {
                if (item.error_message) {
                    parser.parseString(item.error_message, function (err, result) {
                        var a = result.LDO;
                        if (a.MTLOI) {
                            _this.xmlErrorCode = 'Mã lỗi: ' + result.LDO.MLOI[0];
                            _this.xmlError = 'Mô tả lỗi: ' + result.LDO.MTLOI[0];
                        }
                        else {
                            _this.xmlErrorCode = 'Mã lỗi: ' + result.LDO.MLOI[0];
                            _this.xmlError = 'Mô tả lỗi: ' + result.LDO.MTA[0];
                        }
                    });
                }
            }
            if (item.is_send) {
                switch (item.type_code) {
                    case '200':
                        item.message = "Gửi hóa đơn điện tử tới cơ quan thuế để cấp mã";
                        break;
                    case '100':
                        item.message = "Gửi hóa đăng ký sử dụng tới cơ quan thuế";
                        break;
                    case '203':
                        item.message = "Gửi hóa đơn không mã tới cơ quan thuế";
                        break;
                    case '300':
                        item.message = "Thông báo hóa đơn sai xót";
                        break;
                    case '400':
                        item.message = " Bảng tổng hợp";
                        break;
                    default:
                        item.message = '';
                }
            }
            else {
                switch (item.type_code) {
                    case '999':
                        if (send_record.error_status == '1' && send_record.error_type_code == '999') {
                            item.message = "Lỗi!";
                            if (send_record.error_message && send_record.error_type_code == '999') {
                                item.error_code = _this.xmlErrorCode;
                                item.error_message_re = _this.xmlError;
                            }
                        }
                        else {
                            item.message = "CQT phản hồi";
                        }
                        break;
                    case '102':
                        if (send_record.error_status == '1' && send_record.error_type_code == '102') {
                            item.message = "CQT không tiếp nhận đăng ký";
                            if (send_record.error_message && send_record.error_type_code == '102') {
                                item.error_code = _this.xmlErrorCode;
                                item.error_message_re = _this.xmlError;
                            }
                        }
                        else {
                            item.message = "CQT tiếp nhận ĐK sử dụng";
                        }
                        break;
                    case '103':
                        if (send_record.error_status == '1' && send_record.error_type_code == '103') {
                            item.message = "CQT không chấp nhận đăng ký";
                            if (send_record.error_message && send_record.error_type_code == '103') {
                                item.error_code = _this.xmlErrorCode;
                                item.error_message_re = _this.xmlError;
                            }
                        }
                        else {
                            item.message = "CQT chấp nhận ĐK sử dụng";
                        }
                        break;
                    case '202':
                        if (send_record.error_status == '1' && send_record.error_type_code == '202') {
                            item.message = "Không Đủ điều kiện cấp mã";
                            if (send_record.error_message && send_record.error_type_code == '202') {
                                item.error_code = _this.xmlErrorCode;
                                item.error_message_re = _this.xmlError;
                            }
                        }
                        else {
                            item.message = "Đủ điều kiện cấp mã";
                        }
                        break;
                    case '204':
                        if (send_record.type_code == '200') {
                            item.message = "CQT từ chối cấp mã";
                        }
                        else if (send_record.type_code == '300') {
                            if (send_record.error_status == '1' && send_record.error_type_code == '204') {
                                item.message = "CQT không tiếp nhận thông báo hóa đơn sai sót";
                            }
                            else {
                                item.message = "CQT đã tiếp nhận thông báo hóa đơn sai sót";
                            }
                        }
                        else if (send_record.type_code == '203') {
                            if (send_record.error_status == '1' && send_record.error_type_code == '204') {
                                item.message = "CQT không tiếp nhận hóa đơn không mã";
                            }
                            else {
                                item.message = "CQT đã tiếp nhận hóa đơn không mã";
                            }
                        }
                        else if (send_record.type_code == '400') {
                            if (send_record.error_status == '1' && send_record.error_type_code == '204') {
                                item.message = "CQT không tiếp nhận bảng tổng hợp";
                            }
                            else {
                                item.message = "CQT tiếp nhận bảng tổng hợp";
                            }
                        }
                        if (send_record.error_message && send_record.error_type_code == '204') {
                            item.error_code = _this.xmlErrorCode;
                            item.error_message_re = _this.xmlError;
                        }
                        break;
                    case '301':
                        if (send_record.error_status == '1') {
                            item.message = "Không chấp nhận thông báo hóa đơn sai sót";
                            if (send_record.error_message && send_record.error_type_code == '301') {
                                item.error_code = _this.xmlErrorCode;
                                item.error_message_re = _this.xmlError;
                            }
                        }
                        else if (send_record.error_status == '0') {
                            item.message = "CQT đã duyệt";
                        }
                        else {
                            item.message = "Chấp nhận thông báo hóa đơn sai sót";
                        }
                        break;
                    default:
                        item.message = '';
                }
            }
        });
    };
    ViewDiaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "view-diary",
            template: __webpack_require__(/*! ./view-diary.component.html */ "./src/app/modules/diary-transmission/components/view-diary/view-diary.component.html"),
            styles: [__webpack_require__(/*! ./view-diary.component.scss */ "./src/app/modules/diary-transmission/components/view-diary/view-diary.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _modules_diary_transmission_shared__WEBPACK_IMPORTED_MODULE_2__["DiaryTransmissionService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ViewDiaryComponent);
    return ViewDiaryComponent;
}());



/***/ }),

/***/ "./src/app/modules/diary-transmission/diary-transmission.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/diary-transmission.module.ts ***!
  \*************************************************************************/
/*! exports provided: DiaryTransmissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryTransmissionModule", function() { return DiaryTransmissionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _diary_transmission_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./diary-transmission.routing */ "./src/app/modules/diary-transmission/diary-transmission.routing.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/diary-transmission/components/index/index.component.ts");
/* harmony import */ var _components_view_diary_view_diary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/view-diary/view-diary.component */ "./src/app/modules/diary-transmission/components/view-diary/view-diary.component.ts");
/* harmony import */ var _components_search_advanced_search_advanced_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search-advanced/search-advanced.component */ "./src/app/modules/diary-transmission/components/search-advanced/search-advanced.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared */ "./src/app/modules/diary-transmission/shared/index.ts");
/* harmony import */ var _shared_diary_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/diary.pipe */ "./src/app/modules/diary-transmission/shared/diary.pipe.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var DiaryTransmissionModule = /** @class */ (function () {
    function DiaryTransmissionModule() {
    }
    DiaryTransmissionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _diary_transmission_routing__WEBPACK_IMPORTED_MODULE_9__["routing"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["VatSharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SomeModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_2__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_4__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxLookupModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTooltipModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxPopoverModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxTreeListModule"]
            ],
            exports: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"],
                _components_view_diary_view_diary_component__WEBPACK_IMPORTED_MODULE_11__["ViewDiaryComponent"],
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"],
                _components_view_diary_view_diary_component__WEBPACK_IMPORTED_MODULE_11__["ViewDiaryComponent"],
                _components_search_advanced_search_advanced_component__WEBPACK_IMPORTED_MODULE_12__["SearchAdvancedComponent"],
                _shared_diary_pipe__WEBPACK_IMPORTED_MODULE_14__["DiaryPipe"]
            ],
            entryComponents: [
                _components_view_diary_view_diary_component__WEBPACK_IMPORTED_MODULE_11__["ViewDiaryComponent"],
            ],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_13__["DiaryTransmissionService"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["BsModalService"],
                _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"]
            ]
        })
    ], DiaryTransmissionModule);
    return DiaryTransmissionModule;
}());



/***/ }),

/***/ "./src/app/modules/diary-transmission/diary-transmission.routing.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/diary-transmission.routing.ts ***!
  \**************************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/diary-transmission/components/index/index.component.ts");
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

/***/ "./src/app/modules/diary-transmission/shared/diary-transmission.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/diary-transmission/shared/diary-transmission.service.ts ***!
  \*********************************************************************************/
/*! exports provided: DiaryTransmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryTransmissionService", function() { return DiaryTransmissionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiaryTransmissionService = /** @class */ (function () {
    function DiaryTransmissionService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
        this.isCopy = false;
    }
    DiaryTransmissionService.prototype._serverError = function (err) {
        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Lỗi kết nối api', 'error');
        if (err instanceof Response) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw('Lỗi kết nối api');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw('Lỗi kết nối api');
    };
    DiaryTransmissionService.prototype.getDiary = function (data) {
        return this.apiService.getDataTableForDiary("/invoices/load-list-message", data);
        // return this.http.post(environment.VAN_URL + '/loadListMessage',param)
        // .catch(this._serverError);
    };
    DiaryTransmissionService.prototype.getDiaryDetail = function (id) {
        return this.apiService.post("/invoices/show-receiver", { "id": id });
    };
    DiaryTransmissionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DiaryTransmissionService);
    return DiaryTransmissionService;
}());



/***/ }),

/***/ "./src/app/modules/diary-transmission/shared/diary.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/diary-transmission/shared/diary.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: DiaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryPipe", function() { return DiaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DiaryPipe = /** @class */ (function () {
    function DiaryPipe() {
    }
    DiaryPipe.prototype.transform = function (type_code) {
        switch (type_code) {
            case "100":
                return "Đăng ký sử dụng";
            case "200":
                return "Hóa đơn có mã";
            case "203":
                return "Hóa đơn không mã";
            case "300":
                return "Thông báo hóa đơn sai sót";
            case "400":
                return "Bảng tổng hợp";
            case "999":
                return "Lỗi";
            default:
                break;
        }
    };
    DiaryPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'diaryType' })
    ], DiaryPipe);
    return DiaryPipe;
}());



/***/ }),

/***/ "./src/app/modules/diary-transmission/shared/index.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/diary-transmission/shared/index.ts ***!
  \************************************************************/
/*! exports provided: DiaryTransmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diary_transmission_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diary-transmission.service */ "./src/app/modules/diary-transmission/shared/diary-transmission.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiaryTransmissionService", function() { return _diary_transmission_service__WEBPACK_IMPORTED_MODULE_0__["DiaryTransmissionService"]; });




/***/ })

}]);
//# sourceMappingURL=diary-transmission-diary-transmission-module.js.map