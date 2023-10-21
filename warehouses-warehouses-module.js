(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouses-warehouses-module"],{

/***/ "./src/app/modules/warehouses/components/index/index.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/warehouses/components/index/index.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n  <div class=\"col-md-4\">\r\n      <div class=\"pull-left\">\r\n          <!-- <div class=\"list-title\">\r\n              <h2>DANH SÁCH DANH MỤC ĐỐI TƯỢNG</h2>\r\n          </div> -->\r\n      </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n        <div class=\"pull-right button-panel\">\r\n            <dx-button id=\"add\" (click)=\"add()\" icon=\"{{_translate.ICONS.plus}}\" text=\"{{_translate.CONTROLL.BUTTON.add}}\" type=\"default\"\r\n            ></dx-button>\r\n            <!-- <dx-button id=\"edit\" (click)=\"edit()\" icon=\"{{_translate.ICONS.edit}}\" text=\"{{_translate.CONTROLL.BUTTON.edit}}\" type=\"default\" \r\n            ></dx-button> -->\r\n            <dx-button id=\"delete\" (click)=\"delete(null)\" icon=\"{{_translate.ICONS.delete}}\" text=\"{{_translate.CONTROLL.BUTTON.delete}}\" type=\"default\" \r\n            ></dx-button>\r\n            <dx-button (click)=\"integrateCRM()\" [visible]=\"isIntegrateCRM\" icon=\"assets\\img\\icons\\NapDuLieu.png\" text=\"Đồng bộ CRM\" type=\"default\">\r\n            </dx-button>\r\n        </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid \r\n  id=\"gridContainer\" \r\n  [dataSource]=\"dataSource\"\r\n  [(selectedRowKeys)]=\"selectedRows\"\r\n  [showRowLines]=\"true\"\r\n  [noDataText]=\"noDataText\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnMinWidth]=\"50\"\r\n  [columnAutoWidth]=\"true\"\r\n  [wordWrapEnabled]=\"true\">\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n  </dxo-selection>      \r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxi-column dataField=\"code\" caption=\"{{_translate.GRID.WAREHOUSES.code}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\" [width]=\"150\"></dxi-column>\r\n  <dxi-column dataField=\"name\" caption=\"{{_translate.GRID.WAREHOUSES.name}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\" [width]=\"250\"></dxi-column>\r\n    <dxi-column dataField=\"address\" caption=\"{{_translate.CONTROLL.LABEL.address}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n  <dxi-column dataField=\"note\" caption=\"{{_translate.CONTROLL.LABEL.note}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\" [width]=\"150\"></dxi-column>\r\n  <!-- <dxi-column dataField=\"status\" caption=\"{{_translate.GRID.GENERAL.status}}\"  alignment=\"center\" [width]=\"180\" headerCellTemplate=\"titleHeaderTemplate\">\r\n    <dxo-lookup [dataSource]=\"statusFilter\" valueExpr=\"value\" displayExpr=\"text\"></dxo-lookup>\r\n  </dxi-column> -->\r\n  <dxi-column cellTemplate=\"actionIcon\"  minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" width=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\"  alignment=\"center\"></dxi-column>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n  </div>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  \r\n  <dxo-remote-operations [sorting]=\"true\"  [filtering]=\"true\" [paging]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager \r\n        [showPageSizeSelector]=\"true\" \r\n        [allowedPageSizes]=\"[15, 50, 100]\"\r\n        [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\"\r\n        infoText=\"{{ _translate.DXO_PAGER.page}}\">\r\n    </dxo-pager>\r\n</dx-data-grid>\r\n"

/***/ }),

/***/ "./src/app/modules/warehouses/components/index/index.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/warehouses/components/index/index.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-header .dx-selectbox{border-radius:0;display:inline-block;margin-right:8px;width:330px;height:28px;max-height:32px}\n"

/***/ }),

/***/ "./src/app/modules/warehouses/components/index/index.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/warehouses/components/index/index.component.ts ***!
  \************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _shared_modules_some_components_add_wavehourse_add_wavehourse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/modules/some/components/add-wavehourse/add-wavehourse.component */ "./src/app/shared/modules/some/components/add-wavehourse/add-wavehourse.component.ts");
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
    function IndexComponent(authService, listsService, modalService, cdr, route, productsService) {
        this.authService = authService;
        this.listsService = listsService;
        this.modalService = modalService;
        this.cdr = cdr;
        this.route = route;
        this.productsService = productsService;
        this.dataSource = {};
        this.selectedRows = [];
        this.noDataText = "Chưa có danh mục nào";
        this.isIntegrateCRM = false;
        this.listsIntegrateCRM = ["DM_NHOM_HANG_HOA", "DM_HINH_THUC_THANH_TOAN", "DM_NHOM_KHACH_HANG", "DM_DON_VI_TINH"];
        this._translate = this.authService.getTranslate();
        this.statusFilter = [{
                text: "Hoạt động",
                value: "HOAT_DONG"
            }, {
                text: "Không hoạt động",
                value: "KHONG_HOAT_DONG"
            }];
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.loadList();
        this.loadList();
        this.route.data.subscribe(function (data) {
            data.configs.forEach(function (config) {
                if (config.name == "integrate_parameter") {
                    _this.configCRM = JSON.parse(config.value).integrate_crm;
                }
            });
        });
    };
    IndexComponent.prototype.loadList = function () {
        var _this = this;
        this.productsService.loadAllWavehourses().subscribe(function (response) {
            _this.dataSource = response.data['wavehourses'];
        });
    };
    IndexComponent.prototype.getListtypes = function () {
        var _this = this;
        this.listsService.getAllListtype().subscribe(function (res) {
            _this.listtypes = res.data.listtypes;
            _this.selectedListtypeDefault = _this.listtypes.find(function (item) { return item.code == "DM_DON_VI_TINH"; }).id;
        });
    };
    IndexComponent.prototype.add = function () {
        var _this = this;
        this.wavehourse = new _modules_products_shared__WEBPACK_IMPORTED_MODULE_6__["Wavehourse"]();
        this.wavehourse.order = this.dataSource.length + 1;
        var initialState = {
            wavehourse: this.wavehourse,
            onSave: function (wavehourse) {
                _this.wavehourse = wavehourse;
                // this.wavehourses.push({
                //   id: wavehourse.id,
                //   name: wavehourse.name,
                //   code: wavehourse.code,
                // });
                _this.productsService.loadAllWavehourses().subscribe(function (response) {
                    _this.dataSource = response.data['wavehourses'];
                });
            }
        };
        this.bsModalRef = this.modalService.show(_shared_modules_some_components_add_wavehourse_add_wavehourse_component__WEBPACK_IMPORTED_MODULE_7__["AddWavehourseComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
    };
    IndexComponent.prototype.edit = function (data) {
        var _this = this;
        var id = data ? data.id : (this.selectedRows[0].length == 0 ? "" : this.selectedRows[0]);
        if (!id) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
            return;
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            this.productsService.getWavehourse(id).subscribe(function (response) {
                var wavehourse = response.data.wavehourse;
                var initialState = {
                    wavehourse: wavehourse
                };
                _this.bsModalRef = _this.modalService.show(_shared_modules_some_components_add_wavehourse_add_wavehourse_component__WEBPACK_IMPORTED_MODULE_7__["AddWavehourseComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem) {
                        //this.dataGrid.instance.refresh();
                        _this.dataSource = {};
                        _this.loadList();
                    }
                });
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
    };
    IndexComponent.prototype.delete = function (data) {
        var _this = this;
        var id = null;
        if (data)
            id = data.id;
        else {
            if (this.selectedRows) {
                if (this.selectedRows.length == 0)
                    id = "";
                else {
                    var arrId_1 = [];
                    this.selectedRows.forEach(function (element) {
                        arrId_1.push(element.id);
                    });
                    id = arrId_1.join(',');
                }
            }
        }
        if (!id) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
            return;
        }
        else {
            var result = _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
            if (result) {
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        _this.productsService.deleteWavehourse(id).subscribe(function (response) {
                            if (response.status === "success") {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                _this.dataSource = {};
                                _this.loadList();
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                            }
                        });
                    }
                });
            }
        }
    };
    IndexComponent.prototype.integrateCRM = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.listsService.integrateCRM(this.listIntegrateCRMCode).subscribe(function (res) {
            if (res.status == "success") {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Đồng bộ dữ liệu thành công", 'success');
                _this.dataSource = {};
                _this.loadList();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Có lỗi khi đồng bộ dữ liệu", 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/warehouses/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/warehouses/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_2__["ListsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/warehouses/warehouses.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/warehouses/warehouses.module.ts ***!
  \*********************************************************/
/*! exports provided: WarehousesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousesModule", function() { return WarehousesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _warehouses_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouses.routing */ "./src/app/modules/warehouses/warehouses.routing.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/warehouses/components/index/index.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//library


var WarehousesModule = /** @class */ (function () {
    function WarehousesModule() {
    }
    WarehousesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _warehouses_routing__WEBPACK_IMPORTED_MODULE_2__["WarehousesRoutingModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_6__["devextremeModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTreeListModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_5__["VatSharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_5__["SomeModule"],
            ],
            declarations: [_components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]],
            providers: [_modules_products_shared__WEBPACK_IMPORTED_MODULE_7__["ProductsService"]]
        })
    ], WarehousesModule);
    return WarehousesModule;
}());



/***/ }),

/***/ "./src/app/modules/warehouses/warehouses.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/warehouses/warehouses.routing.ts ***!
  \**********************************************************/
/*! exports provided: WarehousesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousesRoutingModule", function() { return WarehousesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/warehouses/components/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
];
var WarehousesRoutingModule = /** @class */ (function () {
    function WarehousesRoutingModule() {
    }
    WarehousesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WarehousesRoutingModule);
    return WarehousesRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=warehouses-warehouses-module.js.map