(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-sync-invoice-sync-module"],{

/***/ "./src/app/modules/invoice-sync/components/index/index.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/invoice-sync/components/index/index.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-8\">\r\n  </div>\r\n  <div class=\"col-md-4\" style=\"max-height: 70px;\">\r\n      <div class=\"list-header row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"pull-right button-panel\" >\r\n              <dx-button (click)=\"xuatHoaDon()\" icon=\"assets\\img\\icons\\XuatHD.png\" text=\"Xuất hóa đơn\" type=\"default\" [disabled]=\"!(selectedRows.length == 1)\"></dx-button>\r\n              <dx-button *ngIf=\"ishowTraLai\" (click)=\"traLai()\" icon=\"assets\\img\\icons\\XuatFile.png\" text=\"Trả lại\" type=\"default\" [disabled]=\"!(selectedRows.length == 1)\"></dx-button>\r\n              <dx-button (click)=\"layDeNghiXuat()\" icon=\"assets\\img\\icons\\LayFileMau.png\" text=\"Lấy đề nghị xuất\" type=\"default\"></dx-button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n\r\n<dx-data-grid \r\n  id=\"gridContainer\"\r\n  (onSelectionChanged)=\"selectionChanged($event)\"\r\n  [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\"\r\n  [(selectedRowKeys)]=\"selectedRows\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnMinWidth]=\"50\"\r\n  [columnResizingMode]=\"true\"\r\n  [columnAutoWidth]=\"true\"\r\n  [wordWrapEnabled]=\"true\"\r\n  (onRowPrepared)=\"onRowPrepared($event)\">\r\n  <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n  </dxo-selection>  \r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <!-- <dxi-column dataField=\"export_time\"  caption=\"Ngày chuyển\" [width]=\"110\" alignment=\"center\"></dxi-column> -->\r\n  <dxi-column dataField=\"export_time\" caption=\"Ngày chuyển\" [width]=\"90\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" sortOrder=\"desc\" alignment=\"center\"></dxi-column>\r\n  <dxi-column dataField=\"export_user\" caption=\"Người chuyển\" [width]=\"120\" alignment=\"left\"></dxi-column>\r\n  <dxi-column dataField=\"buyer_tax_code\" caption=\"Mã số thuế\" [width]=\"120\" alignment=\"left\"></dxi-column>\r\n  <dxi-column dataField=\"customer_code\" caption=\"Mã khách hàng\" [width]=\"120\" alignment=\"center\"></dxi-column>\r\n  <dxi-column *ngIf=\"!isHistory\" cellTemplate=\"customerName\" caption=\"Tên khách hàng\" alignment=\"left\"></dxi-column>\r\n  <dxi-column *ngIf=\"isHistory\" dataField=\"buyer_name\" caption=\"Tên khách hàng\" alignment=\"left\"></dxi-column>\r\n  <dxi-column dataField=\"buyer_address\" caption=\"Địa chỉ xuất\" [width]=\"200\" alignment=\"left\"></dxi-column>\r\n  <dxi-column dataField=\"export_content\" caption=\"Nội dung xuất\" [width]=\"180\" alignment=\"left\"></dxi-column>\r\n  <dxi-column dataField=\"total_payment\" caption=\"Tổng tiền (đ)\" dataType=\"number\" format=\"0,###.##\" [width]=\"140\" alignment=\"right\"></dxi-column>\r\n  <dxi-column dataField=\"note\" caption=\"Ghi chú\" [width]=\"100\" alignment=\"left\"></dxi-column>\r\n\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p>{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n  </div>\r\n\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" cssClass=\"dxi-total-payment-total_payment\" [customizeText]=\"customizeText\" showInColumn=\"total_payment\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n  <dxo-pager \r\n      [showPageSizeSelector]=\"true\" \r\n      [allowedPageSizes]=\"[15, 50, 100]\"\r\n      [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\"\r\n      infoText=\"Trang {0} trong {1} trang của {2} dòng\">\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n"

/***/ }),

/***/ "./src/app/modules/invoice-sync/components/index/index.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/invoice-sync/components/index/index.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/invoice-sync/components/index/index.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/invoice-sync/components/index/index.component.ts ***!
  \**************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_invoice_sync_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/invoice-sync/shared */ "./src/app/modules/invoice-sync/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_search_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/search/shared */ "./src/app/modules/search/shared/index.ts");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
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
    function IndexComponent(invoiceSyncService, modalService, router, searchService, listsService, authService, invoiceService) {
        var _this = this;
        this.invoiceSyncService = invoiceSyncService;
        this.modalService = modalService;
        this.router = router;
        this.searchService = searchService;
        this.listsService = listsService;
        this.authService = authService;
        this.invoiceService = invoiceService;
        this.selectedRows = [];
        this.selectedItems = [];
        this.showKeepNumber = false;
        this.ishowTraLai = true;
        this.isHistory = false;
        this.objStatusBtn = {};
        this.arrayCategory = [
            {
                "code": "DM_NHOM_KHACH_HANG",
                "order": 0
            },
            {
                "code": "DM_NOI_XUAT_HOA_DON",
                "order": 0
            },
        ];
        this.customizeText = function (url) {
            _this.invoiceService.handleTotalGrid(url.value, _this.objStatusBtn, _this.dataGrid);
            return '';
        };
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configs = this.authService.getConfigs();
        if (this.configs && this.configs.integrate_parameter && this.configs.integrate_parameter.integrate_crm && this.configs.integrate_parameter.integrate_crm.is_integrate_his)
            this.isHistory = true;
        this.searchService.getUserAndListType(true).subscribe(function (rs) {
            if (Array.isArray(rs)) {
                if (rs[0].status == "success") {
                    localStorage['listtypes'] = JSON.stringify(rs[0].data.listtypes);
                    var arrApiGetCategory = _this.listsService.getDMBy(_this.arrayCategory);
                    if (arrApiGetCategory.length > 0) {
                        arrApiGetCategory[0].subscribe(function (response) {
                            var _data = [];
                            if (response.status == "success") {
                                _data.push(response);
                                _this.authService.setDMLocal(_data);
                            }
                        });
                    }
                }
            }
        });
        this.loadList();
    };
    IndexComponent.prototype.loadList = function (params) {
        this.dataSource = {};
        if (params) {
            this.dataSource.store = this.invoiceSyncService.getAll(params);
        }
        else {
            this.dataSource.store = this.invoiceSyncService.getAll();
        }
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            // e.rowElement.style.whiteSpace = 'pre-wrap';
            var eles = e.rowElement.getElementsByTagName('td');
            eles[6].style.whiteSpace = 'pre-wrap';
        }
    };
    // Chọn đối tượng trong màn hình danh sách 
    IndexComponent.prototype.selectionChanged = function (data) {
        this.selectedItems = data.selectedRowsData;
    };
    IndexComponent.prototype.xuatHoaDon = function () {
        var row = this.selectedItems[0];
        if (row && row.template_code == "2")
            this.router.navigate(["/system/sale-invoice/" + row.id]);
        else
            this.router.navigate(["/system/vat-invoice/" + row.id]);
    };
    IndexComponent.prototype.traLai = function () {
        var row = this.selectedItems[0];
        if (row && row.template_code == "2")
            this.router.navigate(["/system/sale-invoice/" + row.id], { queryParams: { status: 'return' } });
        else
            this.router.navigate(["/system/vat-invoice/" + row.id], { queryParams: { status: 'return' } });
    };
    IndexComponent.prototype.layDeNghiXuat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var sub = this.invoiceSyncService.layDeNghiXuat().subscribe(function (rs) {
            if (rs.status === 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Lấy đề nghị xuất thành công', 'success');
                _this.loadList();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/invoice-sync/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/invoice-sync/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_modules_invoice_sync_shared__WEBPACK_IMPORTED_MODULE_2__["InvoiceSyncService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_search_shared__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_6__["ListsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_7__["InvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/invoice-sync/invoice-sync.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/invoice-sync/invoice-sync.module.ts ***!
  \*************************************************************/
/*! exports provided: InvoiceSyncModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSyncModule", function() { return InvoiceSyncModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/modules/invoice-sync/shared/index.ts");
/* harmony import */ var _invoice_sync_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-sync.routing */ "./src/app/modules/invoice-sync/invoice-sync.routing.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/invoice-sync/components/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//library





var InvoiceSyncModule = /** @class */ (function () {
    function InvoiceSyncModule() {
    }
    InvoiceSyncModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _invoice_sync_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _core_index__WEBPACK_IMPORTED_MODULE_2__["devextremeModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"]
            ],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceSyncService"]]
        })
    ], InvoiceSyncModule);
    return InvoiceSyncModule;
}());



/***/ }),

/***/ "./src/app/modules/invoice-sync/invoice-sync.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/invoice-sync/invoice-sync.routing.ts ***!
  \**************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/invoice-sync/components/index/index.component.ts");
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



/***/ }),

/***/ "./src/app/modules/invoice-sync/shared/index.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/invoice-sync/shared/index.ts ***!
  \******************************************************/
/*! exports provided: InvoiceSyncService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoice_sync_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-sync.service */ "./src/app/modules/invoice-sync/shared/invoice-sync.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvoiceSyncService", function() { return _invoice_sync_service__WEBPACK_IMPORTED_MODULE_0__["InvoiceSyncService"]; });




/***/ }),

/***/ "./src/app/modules/invoice-sync/shared/invoice-sync.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/invoice-sync/shared/invoice-sync.service.ts ***!
  \*********************************************************************/
/*! exports provided: InvoiceSyncService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSyncService", function() { return InvoiceSyncService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceSyncService = /** @class */ (function () {
    function InvoiceSyncService(apiService) {
        this.apiService = apiService;
    }
    InvoiceSyncService.prototype.getAll = function (params) {
        var includes = ''; //'options[sum_payment_wait_export]=1';
        var filter = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._removeNewline("\n&filter_groups[0][filters][0][key]=search_status\n&filter_groups[0][filters][0][value]=2\n&filter_groups[0][filters][0][operator]=eq\n    ");
        if (params) {
            filter += '&' + params;
        }
        // let sort = '&sort[0][key]=status_order&sort[0][direction]=ASC&sort[1][key]=invoice_number&sort[1][direction]=DESC'
        return this.apiService.getDataTable("/invoices", includes + filter);
    };
    InvoiceSyncService.prototype.layDeNghiXuat = function () {
        return this.apiService.post("/invoices-crm-sync", { invoice: { from_date: '2010-01-01' } });
    };
    InvoiceSyncService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], InvoiceSyncService);
    return InvoiceSyncService;
}());



/***/ })

}]);
//# sourceMappingURL=invoice-sync-invoice-sync-module.js.map