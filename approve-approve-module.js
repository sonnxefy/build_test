(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approve-approve-module"],{

/***/ "./src/app/modules/approve/approve.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/approve/approve.module.ts ***!
  \***************************************************/
/*! exports provided: ApproveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveModule", function() { return ApproveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/modules/approve/shared/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _approve_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./approve.routing */ "./src/app/modules/approve/approve.routing.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/approve/components/index/index.component.ts");
/* harmony import */ var _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sign-many/sign-many.component */ "./src/app/modules/approve/components/sign-many/sign-many.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//library

//general






var ApproveModule = /** @class */ (function () {
    function ApproveModule() {
    }
    ApproveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _approve_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_2__["devextremeModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_8__["SignManyComponent"],
            ],
            entryComponents: [
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_8__["SignManyComponent"]
            ],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_4__["ApproveService"], _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"]]
        })
    ], ApproveModule);
    return ApproveModule;
}());



/***/ }),

/***/ "./src/app/modules/approve/approve.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/approve/approve.routing.ts ***!
  \****************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/approve/components/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] }
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

/***/ "./src/app/modules/approve/components/index/index.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/approve/components/index/index.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n      <app-search-advanced\r\n        (searchContentChange)=\"getSearch($event)\">\r\n      </app-search-advanced>\r\n    <!-- <div class=\"search-date\">\r\n      <div class=\"column\">\r\n          <div class=\"field\">\r\n              <div class=\"label\">{{_translate.CONTROLL.LABEL.export_period}}</div>\r\n              <div class=\"value\">\r\n                  <dx-select-box \r\n                        [items]=\"exportSchedules\"\r\n                        displayExpr=\"name\" \r\n                        valueExpr=\"code\"\r\n                        (onValueChanged)=\"onExportSchedules($event)\"\r\n                        [value]=\"exportSchedulesDefault\">\r\n                    </dx-select-box>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"column day\">\r\n          <div class=\"field\">\r\n              <div class=\"label\">{{_translate.CONTROLL.LABEL.from_date}}</div>\r\n              <div class=\"value\">\r\n                  <dx-date-box \r\n                    [(value)]=\"startDate\" \r\n                    [(max)]=\"endDate\"\r\n                    type=\"date\" \r\n                    [displayFormat]=\"'dd/MM/yyyy'\"\r\n                   (onValueChanged)=\"onStartDate($event)\">\r\n                  </dx-date-box>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"column day\">\r\n          <div class=\"field\">\r\n              <div class=\"label\">{{_translate.CONTROLL.LABEL.to_date}}</div>\r\n              <div class=\"value\">\r\n                  <dx-date-box \r\n                    [(value)]=\"endDate\" \r\n                    [(min)]=\"startDate\" \r\n                    type=\"date\" \r\n                    [displayFormat]=\"'dd/MM/yyyy'\"\r\n                    (onValueChanged)=\"onEndDate($event)\">\r\n                  </dx-date-box>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"search-panels\">\r\n      <div class=\"column\">\r\n          <div class=\"field\">\r\n              <div class=\"label\">{{_translate.CONTROLL.LABEL.search}}</div>\r\n              <div class=\"value\">\r\n                  <dx-text-box placeholder=\"{{_translate.CONTROLL.LABEL.input}} {{_translate.GRID.INVOICE.invoice_number}}, {{_translate.CONTROLL.LABEL.tax_code}}\" [(value)]='contentSearch'></dx-text-box>\r\n                  <dx-button id=\"searchBtn\" icon=\"fa fa-search\" type=\"default\" (click)=\"search()\"></dx-button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"column day\" style=\"width: 32%;\">\r\n        <div class=\"field\">\r\n          <div class=\"label\" style=\"width: 102px !important;\">{{_translate.CONTROLL.LABEL.approve_fettle}}</div>\r\n          <div class=\"valueProcess\" style=\"width: 60% !important;\">\r\n            <dx-drop-down-box [(value)]=\"objParams.approve_status\" valueExpr=\"code\" displayExpr=\"name\"\r\n                              placeholder=\"Select...\" [dataSource]=\"approveStatus\" #gridBox6\r\n            >\r\n              <div *dxTemplate=\"let data of 'content'\">\r\n                <dx-tree-view\r\n                  [dataSource]=\"approveStatus\"\r\n                  dataStructure=\"plain\"\r\n                  keyExpr=\"code\"\r\n                  selectionMode=\"multiple\"\r\n                  showCheckBoxesMode=\"normal\"\r\n                  [selectNodesRecursive]=\"false\"\r\n                  displayExpr=\"name\"\r\n                  [selectByClick]=\"true\"\r\n                  (onItemSelectionChanged)=\"onapproveStatusChanged($event)\"\r\n                >\r\n                </dx-tree-view>\r\n                <div class=\"text-center pt-1\">\r\n                  <dx-button\r\n                    text=\"{{_translate.CONTROLL.LABEL.search}}\"\r\n                    (onClick)=\"search()\"\r\n                    stylingMode=\"contained\"\r\n                    type=\"normal\"\r\n                    class=\"dx-button-search\"\r\n                    icon=\"search\"\r\n                  >\r\n                  </dx-button>\r\n                </div>\r\n    \r\n              </div>\r\n            </dx-drop-down-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"col-md-4\" style=\"max-height: 70px;\">\r\n    <div class=\"list-header row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-right button-panel\" style=\"margin-top: 28px;\">\r\n          <dx-button (click)=\"kyHangLoat()\" text=\"{{ _translate.CONTROLL.BUTTON.approve_invoice }}\" type=\"default\" [disabled]=\"!selectedRows.length\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid \r\n  id=\"gridContainer\"\r\n  (onSelectionChanged)=\"selectionChanged($event)\"\r\n  [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\"\r\n  [(selectedRowKeys)]=\"selectedRows\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnMinWidth]=\"50\"\r\n  [columnResizingMode]=\"true\"\r\n  [columnAutoWidth]=\"true\"\r\n  [wordWrapEnabled]=\"true\"\r\n  (onRowPrepared)=\"onRowPrepared($event)\">\r\n  <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n  </dxo-selection>  \r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxi-column dataField=\"invoice_date\" caption=\"{{_translate.GRID.INVOICE.invoice_date}}\" [width]=\"150\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n  <dxi-column cellTemplate=\"templateCode\" caption=\"{{_translate.GRID.INVOICE.template_code}}\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n  <dxi-column cellTemplate=\"invoice_series\" caption=\"{{_translate.GRID.INVOICE.invoice_series}}\" [width]=\"110\" alignment=\"center\" [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column>\r\n  <dxi-column dataField=\"buyer_tax_code\" caption=\"{{_translate.GRID.INVOICE.buyer_tax_code}}\" [width]=\"140\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <dxi-column cellTemplate=\"customerName\" caption=\"{{_translate.GRID.INVOICE.customer_name}}\" alignment=\"left\"></dxi-column>\r\n  <dxi-column dataField=\"total_payment\" caption=\"{{_translate.GRID.INVOICE.total_payment}}\" dataType=\"number\" format=\"0,###.##\"  alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <dxi-column dataField=\"note\" caption=\"{{_translate.GRID.INVOICE.send_email_status}}\" [width]=\"130\" alignment=\"center\"></dxi-column>\r\n  <dxi-column cellTemplate=\"buttonDuyet\" caption=\"#\" [width]=\"90\" alignment=\"left\"></dxi-column>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p>{{ d.data.template_code }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoice_series'\">\r\n    <p>{{ d.data.invoice_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p>{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let d of 'buttonDuyet'\" style=\"text-align: center;\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n    <!-- <a href=\"javascript:void(0)\" (click)=\"edit(d.data)\" title=\"Ký duyệt\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></a> -->\r\n    <!-- <a href=\"javascript:void(0)\" class=\"xemIcon actionIcon\" (click)=\"edit(d.data)\" title=\"Ký duyệt\"><img src=\"assets/img/icons/KyDuyet.png\" style=\"margin-bottom: 13px\"></a> -->\r\n  </div>\r\n  \r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n  <dxo-pager \r\n      [showPageSizeSelector]=\"true\" \r\n      [allowedPageSizes]=\"[15, 50, 100]\"\r\n      [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\"\r\n      infoText=\"Trang {0} trong {1} trang của {2} dòng\">\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n"

/***/ }),

/***/ "./src/app/modules/approve/components/index/index.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/approve/components/index/index.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}::ng-deep .dx-cell-focus-disabled{overflow:visible !important}::ng-deep .dx-datagrid-rowsview{overflow:visible}\n"

/***/ }),

/***/ "./src/app/modules/approve/components/index/index.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/approve/components/index/index.component.ts ***!
  \*********************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_approve_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/approve/shared */ "./src/app/modules/approve/shared/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sign-many/sign-many.component */ "./src/app/modules/approve/components/sign-many/sign-many.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
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
    function IndexComponent(approveService, router, authService, vatService, modalService, modalImportService, translate, route) {
        this.approveService = approveService;
        this.router = router;
        this.authService = authService;
        this.vatService = vatService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.translate = translate;
        this.route = route;
        this.selectedRows = [];
        this.selectedItems = [];
        this.showKeepNumber = false;
        this.invoice_releases = [];
        this.objParams = {};
        this.approveStatus = [];
        //dropbutton
        this.extras = [{
                id: '1',
                name: 'Mở rộng',
                items: [{
                        id: 'NAP_HD_TU_EXCEL',
                        name: 'Nạp HĐ từ Excel',
                    }]
            }];
        //end-dropbutton
        this.select = {};
        this.disEditMulti = true;
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.loaiHoaDon = this.route.snapshot.data.type;
        if (localStorage.getItem('new_member')) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify('Bạn phải tạo thông báo phát hành trước khi lập hóa đơn', 'warning');
        }
        this.exportSchedules = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].getExportSchedule(this._translate).schedule;
        this.exportSchedulesDefault = this.exportSchedules[3].code;
        this.startDate = this.exportSchedules[3].startDate;
        this.endDate = this.exportSchedules[3].endDate;
        this.approveStatus = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_8__["VSelectBoxService"]._approveStatus(this._translate);
        if (this.approveStatus) {
            this.approveStatus.splice(1, 1);
        }
        this.sendDateChange();
    };
    IndexComponent.prototype.loadList = function (params) {
        this.dataSource = {};
        var ref = {};
        if (params) {
            var _lst = this.vatService.getAll(this.loaiHoaDon, params);
            this.dataSource.store = _lst;
            // this.footerSum = {
            //   summary: _lst.summary,
            //   summary_deduction: _lst.summary_deduction,
            // };
        }
        else {
            this.dataSource.store = this.vatService.getAll(this.loaiHoaDon);
        }
    };
    // loadList(params?){
    //   this.dataSource = {};
    //   if(params){
    //     this.dataSource.store = this.approveService.getAll(params);
    //   }else{
    //     this.dataSource.store = this.approveService.getAll();
    //   }
    // }
    IndexComponent.prototype.onRowPrepared = function (e) {
    };
    IndexComponent.prototype.getSearch = function (e) {
        this.paramSearch = e;
        this.loadList(e);
    };
    // Chọn đối tượng trong màn hình danh sách
    IndexComponent.prototype.selectionChanged = function (data) {
        this.disEditMulti = true;
        this.selectedItems = data.selectedRowsData;
        if (this.selectedItems.length > 1) {
            var checks = this.selectedItems.filter(function (item) {
                return item.number_of_vouchers;
            });
            if (checks.length == this.selectedItems.length) {
                this.disEditMulti = false;
            }
        }
    };
    IndexComponent.prototype.lapHoaDon = function () {
        this.router.navigate(['system/vat-invoice/create']);
    };
    IndexComponent.prototype.edit = function (row) {
        this.kyHangLoat();
    };
    IndexComponent.prototype.delete = function () {
        var _this = this;
        var status = this.selectedItems[0].status;
        if (status == 'GHI_TAM') {
            var ids_1 = this.selectedRows.join(',');
            var result = _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].confirm('Bạn có chắc chắn muốn xóa đối tượng đã chọn?', 'Thông báo');
            result.then(function (dialogResult) {
                if (dialogResult) {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                    _this.approveService.delete(ids_1).subscribe(function (rs) {
                        if (rs.status === 'success') {
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify('Xóa dữ liệu thành công', 'success');
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
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify('Bạn không thể xóa hóa đơn được chọn', 'error');
        }
    };
    IndexComponent.prototype.onExportSchedules = function (e) {
        var selectedItem = e.component.option('selectedItem');
        this.startDate = selectedItem.startDate;
        this.endDate = selectedItem.endDate;
        this.sendDateChange();
    };
    IndexComponent.prototype.onStartDate = function (e) {
        if (e.event) {
            this.startDate = moment__WEBPACK_IMPORTED_MODULE_9__(e.value).format('YYYY-MM-DD HH:mm:ss');
            this.sendDateChange();
        }
    };
    IndexComponent.prototype.onEndDate = function (e) {
        if (e.event) {
            this.endDate = moment__WEBPACK_IMPORTED_MODULE_9__(e.value).format('YYYY-MM-DD HH:mm:ss');
            this.sendDateChange();
        }
    };
    IndexComponent.prototype.sendDateChange = function () {
        var paramsDateSearchs = "filter_groups[999][filters][0][key]=created_at&filter_groups[999][filters][0][value][0]=" + this.startDate + "&filter_groups[999][filters][0][value][1]=" + this.endDate + "&filter_groups[999][filters][0][operator]=bt&";
        var param = paramsDateSearchs.slice(0, -1);
        this.loadList(param);
        this.paramSearch = param;
    };
    IndexComponent.prototype.search = function () {
        var paramsDateSearchs = "filter_groups[999][filters][0][key]=created_at&filter_groups[999][filters][0][value][0]=" + this.startDate + "&filter_groups[999][filters][0][value][1]=" + this.endDate + "&filter_groups[999][filters][0][operator]=bt&";
        var paramsContentSearchs = paramsDateSearchs + ("filter_groups[1000][or]=true&filter_groups[1000][filters][0][key]=buyer_tax_code&filter_groups[1000][filters][0][value]=" + this.contentSearch + "&filter_groups[1000][filters][0][operator]=ct&filter_groups[1000][filters][1][key]=customer_name&filter_groups[1000][filters][1][value]=" + this.contentSearch + "&filter_groups[1000][filters][1][operator]=ct&filter_groups[1000][filters][2][key]=buyer_name&filter_groups[1000][filters][2][value]=" + this.contentSearch + "&filter_groups[1000][filters][2][operator]=ct");
        if (this.objParams.approve_status) {
            if (Array.isArray(this.objParams.approve_status)) {
                if (this.objParams.approve_status.length > 0) {
                    var _obj = this.objParams.approve_status.filter(function (p) { return p == 'TAT_CA'; })[0];
                    if (!_obj) {
                        paramsContentSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("&filter_groups[1001][filters][3][key]=approve_status");
                        for (var i = 0; i < this.objParams.approve_status.length; i++) {
                            paramsContentSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("&filter_groups[1001][filters][3][value][" + i + "]=" + this.objParams.approve_status[i]);
                        }
                        paramsContentSearchs += _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._removeNewline("&filter_groups[1001][filters][3][operator]=in");
                    }
                }
            }
        }
        this.loadList(paramsContentSearchs);
        this.paramSearch = paramsContentSearchs;
    };
    IndexComponent.prototype.onapproveStatusChanged = function (e) {
        var nodes = e.component.getNodes();
        this.objParams.approve_status = this.getSelectedItemsKeys(nodes);
    };
    IndexComponent.prototype.getSelectedItemsKeys = function (items) {
        var result = [], that = this;
        items.forEach(function (item) {
            if (item.selected) {
                result.push(item.key);
            }
            if (item.items.length) {
                result = result.concat(that.getSelectedItemsKeys(item.items));
            }
        });
        return result;
    };
    IndexComponent.prototype.kyHangLoat = function () {
        var _this = this;
        if (this.selectedItems.length) {
            var listChoDuyet = this.selectedItems.filter(function (p) { return p.approve_status == '1'; });
            if (listChoDuyet.length == 0) {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify('Chưa chọn hóa đơn chờ duyệt', 'error');
                return false;
            }
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
            this.vatService.layCacHoaDonKySoHangLoat(this.selectedRows, this.loaiHoaDon).subscribe(function (rs) {
                if (rs[0].status == 'success') {
                    rs[0].data.invoices.forEach(function (element) {
                        element.dongy = null;
                        element.tuchoi = null;
                    });
                    var initialState = {
                        invoiceList: rs[0].data.invoices,
                        configs: rs[1].data.configs,
                        invoice_releases: _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertDataToInvoiceResolver(rs[2])
                    };
                    _this.bsModalSignRef = _this.modalService.show(_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_6__["SignManyComponent"], {
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
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify('Có lỗi xảy ra', 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify('Vui lòng chọn hóa đơn', 'error');
        }
    };
    IndexComponent.prototype.view = function (data) {
        var _this = this;
        if (this.selectedItems.length || data) {
            var _lst = this.selectedItems;
            if (_lst.length > 0 || data) {
                var ids_2 = [];
                if (data) {
                    ids_2.push(data.id);
                }
                else {
                    ids_2 = _lst.map(function (e) { return e.id; });
                }
                var w = 1920, h = 900;
                w = window.screen.availWidth * 100 / 100;
                h = window.screen.availHeight * 93 / 100;
                this.checkSubmit = window.open('about:blank', 'name', 'width=200, height=100');
                this.checkSubmit.document.body.innerHTML = this._translate.NOTIFY.loading;
                this.checkSubmit.blur();
                var timer_1 = setInterval(function () {
                    if (_this.checkSubmit.closed) {
                        clearInterval(timer_1);
                        var isCheck = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].getCookie('AK_SS_I');
                        _this.checkSubmit = undefined;
                        if (isCheck === 'CHECKED') {
                            document.cookie = 'AK_SS_I=; path=/';
                            var status_1 = 'HUY';
                            _this.router.navigate(['/system/handle-report/', data.id, status_1]);
                        }
                        else if (isCheck === 'CHECKED2') {
                            document.cookie = 'AK_SS_I=; path=/';
                            var status_2 = 'THAY_THE';
                            _this.router.navigate(['/system/handle-report/', data.id, status_2]);
                        }
                        else if (isCheck === 'CHECKED3') {
                            document.cookie = 'AK_SS_I=; path=/';
                            var status_3 = 'DIEU_CHINH';
                            _this.router.navigate(['/system/handle-report/', data.id, status_3]);
                        }
                        else if (isCheck === 'CHECKED4') {
                            document.cookie = 'AK_SS_I=; path=/';
                        }
                    }
                }, 500);
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                var sub_1 = this.vatService.xemHoaDonInvoiceImport(ids_2).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        var pdf_file = rs.data.invoice.pdf_file;
                        var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_5__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                        var a = true;
                        var b = '<h3>Hello</h3>';
                        if (a) {
                        }
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
                            // '<button type="button" class="button-content-style">' +
                            // '<a href="javascript:void(0)" class="text-button">Sao chép</a>' +
                            // '</button>' +
                            // '<button type="button" class="button-content-style">' +
                            // '<a href="javascript:void(0)" class="text-button">In chuyển đổi</a>' +
                            // '</button>' +
                            // '<button type="button" class="button-content-style">' +
                            // '<a href="javascript:void(0)" class="text-button">Gửi hóa đơn</a>' +
                            // '</button>' +
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
                            // '<button type="button" class="button-content-style">' +
                            // '<a href="javascript:void(0)" class="text-button">Sao chép</a>' +
                            // '</button>' +
                            // '<button type="button" class="button-content-style">' +
                            // '<a href="javascript:void(0)" class="text-button">In chuyển đổi</a>' +
                            // '</button>' +
                            // '<button type="button" class="button-content-style">' +
                            // '<a href="javascript:void(0)" class="text-button">Gửi hóa đơn</a>' +
                            // '</button>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        _this.checkSubmit.document.write("\n                  <style type=\"text/css\" >\n                        .text-button{\n                            color: #fff;\n                            text-decoration: none;\n                        }\n                       .design-button{\n                            position: fixed;\n                            bottom: 0;\n                            left: 0;\n                            right: 0;\n                            padding: 9px 25px;\n                            background: white;\n                       }\n                       .button-content-style{\n                          background-color: #337ab7;\n                          color: #fff;\n                          border: 1px solid #2d6da3;\n                          margin: 0 10px;\n                          padding: 5px 10px 5px;\n                       }\n                       .dropdown {\n                        position: relative;\n                        display: inline-block;\n                       }\n                       .dropdown-content {\n                          display: none;\n                          position: absolute;\n                          bottom: 28px;\n                          background-color: #f9f9f9;\n                          min-width: 160px;\n                          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n                          z-index: 1;\n                        }\n                       .dropdown-content a {\n                          color: black;\n                          padding: 12px 16px;\n                          text-decoration: none;\n                          display: block;\n                       }\n                       .dropdown-content a:hover {background-color: #b5acac;}\n                       .dropdown:hover .dropdown-content {\n                          display: block;\n                        }\n                        .dropdown:hover .dropbtn {\n                          background-color: #2d6da3;\n                        }\n                  </style>\n               <div>\n                    <iframe width=\"100%\" height=\"94%\" style=\"padding-bottom: 29px\" src=\"" + objectUrl + "\"></iframe>\n               </div>\n                <script type=\"text/javascript\">\n                  function setConfirmInvoice() {\n                    document.cookie = \"AK_SS_I=CHECKED; path=/\";\n                    window.close();\n                  }\n                  function setConfirmInvoice2() {\n                    document.cookie = \"AK_SS_I=CHECKED2; path=/\";\n                    window.close();\n                  }\n                  function setConfirmInvoice3() {\n                    document.cookie = \"AK_SS_I=CHECKED3; path=/\";\n                    window.close();\n                  }\n                  function setConfirmInvoice4() {\n                    document.cookie = \"AK_SS_I=CHECKED4; path=/\";\n                    window.close();\n                  }\n                  function closeWin(){\n                    window.close();\n                  }\n                </script>\n            ");
                        if (ids_2.length === 1 || data.status === 'DA_XUAT') {
                            if (data.adjustment_type !== 4) {
                                _this.checkSubmit.document.write(myPara);
                            }
                            else {
                                _this.checkSubmit.document.write(myPara1);
                            }
                        }
                        _this.checkSubmit.resizeTo(screen.availWidth, screen.availHeight);
                        _this.checkSubmit.focus();
                        // win.resizeTo(screen.availWidth, screen.availHeight);
                        // win.focus();
                        // win.open(objectUrl, "name", "width=" + w + ", height=" + h);
                    }
                    else {
                        _this.checkSubmit.close();
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                    sub_1.unsubscribe();
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/approve/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/approve/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_modules_approve_shared__WEBPACK_IMPORTED_MODULE_2__["ApproveService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_3__["VatService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/approve/components/sign-many/sign-many.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/approve/components/sign-many/sign-many.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\" style=\"text-transform: uppercase;\">{{ _translate.MENU.approve_the_invoice }}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid \r\n    id=\"gridContainer\"\r\n    [dataSource]=\"invoiceList\"\r\n    [showRowLines]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [columnMinWidth]=\"50\"\r\n    [columnResizingMode]=\"true\"\r\n    [columnAutoWidth]=\"true\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\"\r\n    [wordWrapEnabled]=\"true\">\r\n    <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n    <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxi-column [allowEditing]=\"false\" dataField=\"template_code\" caption=\"{{_translate.GRID.INVOICE.template_code}}\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column [allowEditing]=\"false\" dataField=\"template.invoice_series\" caption=\"{{_translate.GRID.INVOICE.invoice_series}}\" [width]=\"70\" alignment=\"center\" [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column>\r\n    <dxi-column [allowEditing]=\"false\" dataField=\"buyer_tax_code\" caption=\"{{_translate.GRID.INVOICE.buyer_tax_code}}\" [width]=\"90\" alignment=\"left\"></dxi-column>\r\n    <dxi-column [allowEditing]=\"false\" cellTemplate=\"customerName\" caption=\"{{_translate.GRID.INVOICE.customer_name}}\" alignment=\"left\"></dxi-column>\r\n    <dxi-column [allowEditing]=\"false\" dataField=\"total_payment\" caption=\"{{_translate.GRID.INVOICE.total_payment}}\" [width]=\"110\" dataType=\"number\" format=\"0,###.##\"  alignment=\"right\" ></dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.approve_status}}\">\r\n      <dxi-column\r\n        cellTemplate=\"dong_y\"\r\n        alignment=\"center\"\r\n        headerCellTemplate=\"titleHeaderTemplateDongy\"\r\n        [width]=\"65\">\r\n      </dxi-column>\r\n      <dxi-column\r\n        cellTemplate=\"tu_choi\"\r\n        alignment=\"center\"\r\n        headerCellTemplate=\"titleHeaderTemplateTuchoi\"\r\n        [width]=\"65\">\r\n      </dxi-column>\r\n   </dxi-column>\r\n   <dxi-column [allowEditing]=\"true\" dataField=\"refuse_reason\" caption=\"{{_translate.CONTROLL.BUTTON.reason_reject}}\" [width]=\"130\" alignment=\"left\"></dxi-column>\r\n    <dxi-column [allowEditing]=\"false\" cellTemplate=\"statusName\" caption=\"{{_translate.GRID.GENERAL.status}}\" [width]=\"90\" alignment=\"center\"></dxi-column>\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n      <p>{{ d.data.template.template_code }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n      <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name || 'Hóa đơn chờ ký' }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'statusName'\">\r\n      <p *ngIf=\"d.data.approve_status =='0'\">Chưa trình ký</p>\r\n      <p *ngIf=\"d.data.approve_status =='1'\">Chờ duyệt</p>\r\n      <p *ngIf=\"d.data.approve_status =='2'\">Đã duyệt</p>\r\n      <p *ngIf=\"d.data.approve_status =='3'\">Từ chối</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'dong_y'\">\r\n      <dx-check-box [(value)]=\"d.data.dongy\" (onValueChanged)=\"_dongyPD(d.data)\"></dx-check-box>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'tu_choi'\">\r\n      <dx-check-box [(value)]=\"d.data.tuchoi\" (onValueChanged)=\"_tuchoiPD(d)\"></dx-check-box>\r\n    </div>\r\n    <div *dxTemplate=\"let info of 'titleHeaderTemplateDongy'\">\r\n        <i>{{ _translate.CONTROLL.BUTTON.agree}}</i>\r\n      <dx-check-box (onValueChanged)=\"checkalldongy($event)\"></dx-check-box>\r\n    </div>\r\n    <div *dxTemplate=\"let info of 'titleHeaderTemplateTuchoi'\">\r\n        <i>{{_translate.GRID.GENERAL.rejected}}</i>\r\n      <dx-check-box (onValueChanged)=\"checkalltuchoi($event)\"></dx-check-box>\r\n    </div>\r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button text=\"{{_translate.GRID.USER.approved }}\" *ngIf=\"!daXong\" type=\"default\" (click)=\"kyHangLoat()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{ _translate.CONTROLL.BUTTON.close}}\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"Quá trình đang xử lý\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/approve/components/sign-many/sign-many.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/approve/components/sign-many/sign-many.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/approve/components/sign-many/sign-many.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/approve/components/sign-many/sign-many.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SignManyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignManyComponent", function() { return SignManyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
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
    function SignManyComponent(bsModalRef, vatService, socketService, authService, translate) {
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.translate = translate;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.coKiSoTapChung = false;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return 'Hoàn thành: ' + percent + '%';
        };
        this.isTT78 = false;
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
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
            r = confirm("Cảnh báo: Quá trình ký số hóa đơn sẽ dừng lại nếu bạn đóng cửa sổ này");
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
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(data.Description, 'error');
            }
        });
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
        invoice.dongy = undefined;
        invoice.tuchoi = undefined;
        invoice.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].statusApprove.DaDuyet;
        var xmlInvoice = "";
        var isNewXml = 0;
        if (invoice.status == 'GHI_TAM') {
            if (!this.isTT78) {
                var sub_1 = this.vatService.edit(invoice.id, invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        invoice.invoice_number = rs.data.invoice_number;
                        invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        //demo kí số vào file
                        //  Lấy xml từ serer
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
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
                        _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                        _this.showPopup = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    //Library.hideloading();
                    sub_1.unsubscribe();
                });
            }
            else {
                var sub_2 = this.vatService.editTT78(invoice.id, invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        invoice.invoice_number = rs.data.invoice_number;
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        //demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
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
                        _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                        _this.showPopup = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    //Library.hideloading();
                    sub_2.unsubscribe();
                });
            }
        }
        else if (invoice.status == 'GIU_SO') {
            if (!this.isTT78) {
                var sub_3 = this.vatService.edit(invoice.id, invoice, true).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        invoice.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        //demo kí số vào file
                        //  Lấy xml từ serer
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
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
                        _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                        _this.showPopup = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                    sub_3.unsubscribe();
                });
            }
            else {
                var sub_4 = this.vatService.editTT78(invoice.id, invoice, true).subscribe(function (rs) {
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
                        //demo kí số vào file
                        //  Lấy xml từ serer
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rs.data.xml_string);
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
                        _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                        _this.showPopup = false;
                        _this.errorImport = true;
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                    sub_4.unsubscribe();
                });
            }
        }
    };
    SignManyComponent.prototype.setStatusDataOnCellPrepared = function (e, message) {
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
    SignManyComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            if (e.data.tuchoi == true) {
                switch (e.column.dataField) {
                    case "refuse_reason":
                        if (e.data.refuse_reason == "")
                            this.setStatusDataOnCellPrepared(e, "Lý do không được để trống");
                        break;
                    default:
                        break;
                }
            }
        }
    };
    SignManyComponent.prototype.goiApiXuatHoaDon = function (xml_string, invoice) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        // Helper.dowloadFile('hoadon.xml', 'xml', xml_string);
        this.subXuatHoaDon = this.vatService.xuatHoaDon({
            id: invoice.id,
            xml_string: xml_string,
            invoice_files: invoice.invoice_files
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.valueProgress += percentComplete;
                _this.invoiceList[_this.invoiceIndex].statusByMe = 'DA_KY';
                _this.ganXong = true;
                _this.tempKiFile = 0;
                if (_this.invoiceIndex < _this.totalInvoice - 1) {
                    _this.invoiceIndex++;
                    _this.xuatHoaDon();
                }
                else if (_this.invoiceIndex == _this.totalInvoice - 1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Duyệt hóa đơn thành công', 'success');
                    _this.daXong = true;
                    setTimeout(function () {
                        _this.showPopup = false;
                    }, 300);
                }
            }
            else {
                _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                _this.showPopup = false;
                _this.errorImport = true;
                _this.daXong = true;
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
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
        var isCheck = true;
        var _isvalid = true;
        this.invoiceList.forEach(function (item) {
            if (!item.dongy && !item.tuchoi)
                isCheck = false;
            if (item.tuchoi == true) {
                if (item.refuse_reason == "") {
                    _isvalid = false;
                }
            }
        });
        if (!isCheck) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Chưa chọn trạng thái duyệt", 'error');
            return;
        }
        if (!_isvalid) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Lý do từ chối không được để trống", 'error');
            return;
        }
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].confirmVA('Bạn có chắc chắn xử lý các hóa đơn không?', 'Thông báo', function () {
            _this.showPopup = true;
            _this.invoices = JSON.parse(JSON.stringify(_this.invoiceList.filter(function (item) { return item.dongy; })));
            var isdongy = false;
            if (_this.invoices && _this.invoices.length > 0) {
                isdongy = true;
                _this.totalInvoice = _this.invoices.length;
                _this.invoiceIndex = 0;
                _this.tempKiFile = 0;
                _this.xuatHoaDon();
            }
            _this.invoicesDeny = JSON.parse(JSON.stringify(_this.invoiceList.filter(function (item) { return item.tuchoi; })));
            if (_this.invoicesDeny && _this.invoicesDeny.length > 0) {
                _this.invoicesDeny.forEach(function (invoice) {
                    _this.subXuatHoaDon = _this.vatService.tuchoi({
                        id: invoice.id,
                        refuse_reason: invoice.refuse_reason
                    }).subscribe(function (rs) {
                        if (rs.status == 'success') {
                            if (!isdongy) {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Duyệt hóa đơn thành công', 'success');
                                _this.daXong = true;
                                _this.ganXong = true;
                                _this.showPopup = false;
                            }
                        }
                        else {
                            _this.invoiceList[_this.invoiceIndex].statusByMe = rs.message;
                            _this.showPopup = false;
                            _this.errorImport = true;
                            _this.daXong = true;
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                        }
                    }, function (err) { }, function () {
                        // Library.hideloading();
                        _this.subXuatHoaDon.unsubscribe();
                    });
                });
            }
        });
    };
    SignManyComponent.prototype.dong = function () {
        if (this.ganXong) {
            this.bsModalRef.content.successSaveItem = "success";
        }
        this.bsModalRef.hide();
    };
    SignManyComponent.prototype._dongyPD = function (e) {
        if (e.dongy)
            e.tuchoi = false;
    };
    SignManyComponent.prototype._tuchoiPD = function (e) {
        if (e.data.tuchoi) {
            e.data.dongy = false;
            if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(e.data.refuse_reason) == "")
                e.data.refuse_reason = "";
        }
    };
    SignManyComponent.prototype.checkalldongy = function (e) {
        this.invoiceList.forEach(function (item) {
            item.dongy = e.value;
            item.tuchoi = false;
        });
    };
    SignManyComponent.prototype.checkalltuchoi = function (e) {
        this.invoiceList.forEach(function (item) {
            item.dongy = false;
            item.tuchoi = e.value;
        });
    };
    SignManyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-many',
            template: __webpack_require__(/*! ./sign-many.component.html */ "./src/app/modules/approve/components/sign-many/sign-many.component.html"),
            styles: [__webpack_require__(/*! ./sign-many.component.scss */ "./src/app/modules/approve/components/sign-many/sign-many.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], SignManyComponent);
    return SignManyComponent;
}());



/***/ }),

/***/ "./src/app/modules/approve/shared/approve.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/approve/shared/approve.service.ts ***!
  \***********************************************************/
/*! exports provided: ApproveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveService", function() { return ApproveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApproveService = /** @class */ (function () {
    function ApproveService(apiService, authService) {
        this.apiService = apiService;
        this.authService = authService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("YYYY-MM-DD");
    }
    ApproveService.prototype.getAll = function (params) {
        var company_type = this.authService.getCurrentUser().account.company_type;
        var filter_value;
        switch (company_type) {
            case 'KHAU_TRU':
                filter_value = '01GTKT';
                break;
            case 'TRUC_TIEP':
                filter_value = '02GTTT';
                break;
            default:
                break;
        }
        var includes = 'includes[]=template';
        var filter_string = "&filter_groups[0][filters][0][key]=crm_id&filter_groups[0][filters][0][value]=null&filter_groups[0][filters][0][operator]=eq&filter_groups[0][filters][1][key]=status&filter_groups[0][filters][1][value]=GHI_TAM&filter_groups[0][filters][1][operator]=eq&filter_groups[0][filters][2][key]=invoice_number&filter_groups[0][filters][2][value]=null&filter_groups[0][filters][2][operator]=eq&filter_groups[0][filters][3][key]=adjustment_type&filter_groups[0][filters][3][value]=1&filter_groups[0][filters][3][operator]=eq";
        var filter = filter_value ? filter_string + ("&filter_groups[2][filters][0][key]=template.invoice_type&filter_groups[2][filters][0][value]=" + filter_value + "&filter_groups[2][filters][0][operator]=eq") : filter_string;
        if (params) {
            filter += '&' + params;
        }
        var sort = '//&sort[1][key]=created_at&sort[1][direction]=DESC'; //&sort[1][key]=invoice_number&sort[1][direction]=DESC
        return this.apiService.getDataTable("/invoices", includes + filter, sort);
    };
    ApproveService.prototype.show = function (id) {
        return this.apiService.get("/invoices/" + id);
    };
    ApproveService.prototype.delete = function (id) {
        return this.apiService.delete("/invoices/" + id);
    };
    ApproveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ApproveService);
    return ApproveService;
}());



/***/ }),

/***/ "./src/app/modules/approve/shared/index.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/approve/shared/index.ts ***!
  \*************************************************/
/*! exports provided: ApproveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _approve_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approve.service */ "./src/app/modules/approve/shared/approve.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApproveService", function() { return _approve_service__WEBPACK_IMPORTED_MODULE_0__["ApproveService"]; });




/***/ })

}]);
//# sourceMappingURL=approve-approve-module.js.map