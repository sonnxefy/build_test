(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/modules/products/components/add-group-product/add-group-product.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-group-product/add-group-product.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{ 'CONTROLL.LABEL.update' | translate }} {{ 'GRID.PRODUCT.product_group' | translate }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"group-product-form\"\r\n      validationGroup=\"groupProductForm\"\r\n      [formData]=\"groupProduct\" [showColonAfterLabel]=\"false\">\r\n      <dxi-item dataField=\"code\" >\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.group_code' | translate }}\"></dxo-label>\r\n\r\n        <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.group_code' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"name\" >\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.group_name' | translate }}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.group_name' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"note\" >\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.note' | translate }}\"></dxo-label>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"order\"  [editorOptions]=\"{ disabled: true }\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.order' | translate }}\"></dxo-label>\r\n      </dxi-item>\r\n      <dxi-item [label]=\"{text: ' '}\" dataField=\"status\" editorType=\"dxCheckBox\"\r\n      [editorOptions]=\"{ text: txt.active}\">\r\n    </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{ 'CONTROLL.BUTTON.save' | translate }}\" type=\"default\" [useSubmitBehavior]=\"true\" validationGroup=\"groupProductForm\"></dx-button>\r\n    <dx-button text=\"{{ 'CONTROLL.BUTTON.come_back' | translate }}\" (click)=\"bsModalRef.hide()\"></dx-button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/products/components/add-group-product/add-group-product.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-group-product/add-group-product.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/products/components/add-group-product/add-group-product.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-group-product/add-group-product.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddGroupProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupProductComponent", function() { return AddGroupProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddGroupProductComponent = /** @class */ (function () {
    function AddGroupProductComponent(authService, bsModalRef, listsService, bsModalService, translate) {
        var _this = this;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.listsService = listsService;
        this.bsModalService = bsModalService;
        this.translate = translate;
        this.txt = {};
        this.focusField = function () {
            _this.bsModalService.onShown.subscribe(function () {
                _this.form.instance.getEditor("code").focus();
            });
        };
        this.onSubmit = function (e) {
            var _this = this;
            e.preventDefault();
            if (this.groupProduct.status) {
                this.groupProduct.status = "HOAT_DONG";
            }
            else {
                this.groupProduct.status = "KHONG_HOAT_DONG";
            }
            this.groupProduct.listtype_id = this.listTypeId;
            var data = { list: this.groupProduct };
            this.listsService.add(data).subscribe(function (response) {
                if (response.status == "success") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.add_success, "success");
                    _this.onSave(_this.groupProduct);
                    _this.bsModalRef.hide();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(response.message, "error");
                }
            }, function (err) { }, function () {
            });
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    AddGroupProductComponent.prototype.ngOnInit = function () {
        this.txt = {
            active: this._translate.GRID.GENERAL.active,
        };
    };
    AddGroupProductComponent.prototype.ngAfterViewInit = function () {
        this.focusField();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormComponent"])
    ], AddGroupProductComponent.prototype, "form", void 0);
    AddGroupProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-group-product',
            template: __webpack_require__(/*! ./add-group-product.component.html */ "./src/app/modules/products/components/add-group-product/add-group-product.component.html"),
            styles: [__webpack_require__(/*! ./add-group-product.component.scss */ "./src/app/modules/products/components/add-group-product/add-group-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["ListsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], AddGroupProductComponent);
    return AddGroupProductComponent;
}());



/***/ }),

/***/ "./src/app/modules/products/components/add-revenue/add-revenue.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-revenue/add-revenue.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{ 'CONTROLL.LABEL.update' | translate }} {{ 'GRID.REVENUE.collection_form' | translate }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"group-product-form\"\r\n      validationGroup=\"groupProductForm\"\r\n      [formData]=\"revenue\" [showColonAfterLabel]=\"false\">\r\n      <dxi-item dataField=\"code\" >\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.revenue_form_code' | translate }}\"></dxo-label>\r\n\r\n        <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.revenue_form_code' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"name\" >\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.revenue_form_name' | translate }}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.revenue_form_name' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"note\" >\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.note' | translate }}\"></dxo-label>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"order\"  [editorOptions]=\"{ disabled: true }\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.order' | translate }}\"></dxo-label>\r\n      </dxi-item>\r\n      <dxi-item [label]=\"{text: ' '}\" dataField=\"status\" editorType=\"dxCheckBox\"\r\n      [editorOptions]=\"{ text: txt.active}\">\r\n    </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"container-fluid pl-0 pr-0\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"text-center title-list\">Năm trước</div>\r\n          <dx-list\r\n          [dataSource]=\"monthBefore\" \r\n          displayExpr=\"name\" \r\n          valueExpr=\"code\" \r\n          [height]=\"200\"\r\n          [allowItemDeleting]=\"allowDeletingBefore\"\r\n          [itemDeleteMode]=\"deleteTypeBefore\"\r\n          [showSelectionControls]=\"true\"\r\n          selectionMode=\"multiple\"\r\n          [(selectedItems)]=\"selectedItemBefore\">\r\n      </dx-list>\r\n      </div>\r\n      <div class=\"col-md-6 pl-0\">\r\n        <div class=\"text-center title-list\">Năm sau</div>\r\n          <dx-list\r\n          [dataSource]=\"monthAfter\" \r\n          displayExpr=\"name\" \r\n          valueExpr=\"code\" \r\n          [height]=\"200\"\r\n          [allowItemDeleting]=\"allowDeletingAfter\"\r\n          [itemDeleteMode]=\"deleteTypeAfter\"\r\n          [showSelectionControls]=\"true\"\r\n          selectionMode=\"multiple\"\r\n          [(selectedItems)]=\"selectedItemAfter\">\r\n      </dx-list>\r\n        </div>\r\n        </div>\r\n        </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{ 'CONTROLL.BUTTON.save' | translate }}\" type=\"default\" [useSubmitBehavior]=\"true\" validationGroup=\"groupProductForm\"></dx-button>\r\n    <dx-button text=\"{{ 'CONTROLL.BUTTON.come_back' | translate }}\" (click)=\"bsModalRef.hide()\"></dx-button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/products/components/add-revenue/add-revenue.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-revenue/add-revenue.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-list{font-weight:600;padding:8px 4px;background-color:#d8d8d8}.text-center{text-align:center !important}\n"

/***/ }),

/***/ "./src/app/modules/products/components/add-revenue/add-revenue.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/products/components/add-revenue/add-revenue.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddRevenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRevenueComponent", function() { return AddRevenueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddRevenueComponent = /** @class */ (function () {
    function AddRevenueComponent(authService, bsModalRef, listsService, bsModalService, translate) {
        var _this = this;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.listsService = listsService;
        this.bsModalService = bsModalService;
        this.translate = translate;
        this.txt = {};
        this.selectedItemBefore = [];
        this.selectedItemAfter = [];
        this.allowDeletingBefore = false;
        this.deleteTypeBefore = "toggle";
        this.allowDeletingAfter = false;
        this.deleteTypeAfter = "toggle";
        this.isHinhThucThu = false;
        this.monthBefore = [
            {
                name: "Tháng 1",
                code: "01/T"
            },
            {
                name: "Tháng 2",
                code: "02/T"
            },
            {
                name: "Tháng 3",
                code: "03/T"
            },
            {
                name: "Tháng 4",
                code: "04/T"
            },
            {
                name: "Tháng 5",
                code: "05/T"
            },
            {
                name: "Tháng 6",
                code: "06/T"
            },
            {
                name: "Tháng 7",
                code: "07/T"
            },
            {
                name: "Tháng 8",
                code: "08/T"
            },
            {
                name: "Tháng 9",
                code: "09/T"
            },
            {
                name: "Tháng 10",
                code: "10/T"
            },
            {
                name: "Tháng 11",
                code: "11/T"
            },
            {
                name: "Tháng 12",
                code: "12/T"
            }
        ];
        this.monthAfter = [
            {
                name: "Tháng 1",
                code: "01/S"
            },
            {
                name: "Tháng 2",
                code: "02/S"
            },
            {
                name: "Tháng 3",
                code: "03/S"
            },
            {
                name: "Tháng 4",
                code: "04/S"
            },
            {
                name: "Tháng 5",
                code: "05/S"
            },
            {
                name: "Tháng 6",
                code: "06/S"
            },
            {
                name: "Tháng 7",
                code: "07/S"
            },
            {
                name: "Tháng 8",
                code: "08/S"
            },
            {
                name: "Tháng 9",
                code: "09/S"
            },
            {
                name: "Tháng 10",
                code: "10/S"
            },
            {
                name: "Tháng 11",
                code: "11/S"
            },
            {
                name: "Tháng 12",
                code: "12/S"
            }
        ];
        this.focusField = function () {
            _this.bsModalService.onShown.subscribe(function () {
                _this.form.instance.getEditor("code").focus();
            });
        };
        this.onSubmit = function (e) {
            var _this = this;
            e.preventDefault();
            if (this.revenue.status) {
                this.revenue.status = "HOAT_DONG";
            }
            else {
                this.revenue.status = "KHONG_HOAT_DONG";
            }
            this.revenue.listtype_id = this.listTypeId;
            var itemBefor = this.selectedItemBefore.length === 0 ? '' : this.selectedItemBefore.map(function (obj) { return obj.code; }).join(';');
            var itemAfter = this.selectedItemAfter.length === 0 ? '' : this.selectedItemAfter.map(function (obj) { return obj.code; }).join(';');
            if (itemBefor != '') {
                this.revenue.note = itemBefor;
                if (itemAfter != '')
                    this.revenue.note += ";" + itemAfter;
            }
            else {
                if (itemAfter != '')
                    this.revenue.note = itemAfter;
            }
            var data = { list: this.revenue };
            this.listsService.add(data).subscribe(function (response) {
                if (response.status == "success") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.add_success, "success");
                    _this.onSave(_this.revenue);
                    _this.bsModalRef.hide();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(response.message, "error");
                }
            }, function (err) { }, function () {
            });
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    AddRevenueComponent.prototype.ngOnInit = function () {
        this.txt = {
            active: this._translate.GRID.GENERAL.active,
        };
    };
    AddRevenueComponent.prototype.ngAfterViewInit = function () {
        this.focusField();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormComponent"])
    ], AddRevenueComponent.prototype, "form", void 0);
    AddRevenueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-revenue',
            template: __webpack_require__(/*! ./add-revenue.component.html */ "./src/app/modules/products/components/add-revenue/add-revenue.component.html"),
            styles: [__webpack_require__(/*! ./add-revenue.component.scss */ "./src/app/modules/products/components/add-revenue/add-revenue.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["ListsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], AddRevenueComponent);
    return AddRevenueComponent;
}());



/***/ }),

/***/ "./src/app/modules/products/components/add-unit-code/add-unit-code.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-unit-code/add-unit-code.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Cập nhật danh mục đơn vị tính</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"unitCalculation-form\"\r\n      validationGroup=\"unitCalculationForm\"\r\n      [formData]=\"unitCalculation\">\r\n      <dxi-item dataField=\"code\" [label]=\"{text: 'Mã đơn vị tính'}\" [editorOptions]=\"{onValueChanged: changeUnitCode}\">\r\n        <dxi-validation-rule type=\"required\" message=\"Mã đơn vị tính không được để trống\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"name\" [label]=\"{text: 'Tên đơn vị tính'}\">\r\n        <dxi-validation-rule type=\"required\" message=\"Tên đơn vị tính không được để trống\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"note\" [label]=\"{text: 'Ghi chú'}\"></dxi-item>\r\n      <dxi-item dataField=\"order\" [label]=\"{text: 'Số thứ tự'}\" [editorOptions]=\"{ disabled: true }\"></dxi-item>\r\n      <dxi-item [label]=\"{text: 'Trạng thái'}\" dataField=\"status\" editorType=\"dxCheckBox\"\r\n        [editorOptions]=\"{ text: 'Hoạt động'}\">\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"Ghi\" type=\"default\" [useSubmitBehavior]=\"true\" validationGroup=\"unitCalculationForm\"></dx-button>\r\n    <dx-button text=\"Quay lại\" (click)=\"bsModalRef.hide()\"></dx-button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/products/components/add-unit-code/add-unit-code.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-unit-code/add-unit-code.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/products/components/add-unit-code/add-unit-code.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-unit-code/add-unit-code.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddUnitCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUnitCodeComponent", function() { return AddUnitCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddUnitCodeComponent = /** @class */ (function () {
    function AddUnitCodeComponent(bsModalRef, listsService, bsModalService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.listsService = listsService;
        this.bsModalService = bsModalService;
        this.focusField = function () {
            _this.bsModalService.onShown.subscribe(function () {
                _this.form.instance.getEditor("code").focus();
            });
        };
        this.onSubmit = function (e) {
            var _this = this;
            e.preventDefault();
            if (this.unitCalculation.status) {
                this.unitCalculation.status = "HOAT_DONG";
            }
            else {
                this.unitCalculation.status = "KHONG_HOAT_DONG";
            }
            this.unitCalculation.listtype_id = this.listTypeId;
            var data = { list: this.unitCalculation };
            this.listsService.add(data).subscribe(function (response) {
                if (response.status == "success") {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Thêm dữ liệu thành công", "success");
                    _this.onSave(_this.unitCalculation);
                    _this.bsModalRef.hide();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(response.message, "error");
                }
            }, function (err) { }, function () {
            });
        };
        this.changeUnitCode = function (e) {
            _this.unitCalculation.code = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._convertToViKdau(e.value);
        };
    }
    AddUnitCodeComponent.prototype.ngOnInit = function () {
    };
    AddUnitCodeComponent.prototype.ngAfterViewInit = function () {
        this.focusField();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormComponent"])
    ], AddUnitCodeComponent.prototype, "form", void 0);
    AddUnitCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-unit-code',
            template: __webpack_require__(/*! ./add-unit-code.component.html */ "./src/app/modules/products/components/add-unit-code/add-unit-code.component.html"),
            styles: [__webpack_require__(/*! ./add-unit-code.component.scss */ "./src/app/modules/products/components/add-unit-code/add-unit-code.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_2__["ListsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], AddUnitCodeComponent);
    return AddUnitCodeComponent;
}());



/***/ }),

/***/ "./src/app/modules/products/components/add-wavehourse/add-wavehourse.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-wavehourse/add-wavehourse.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Cập nhật kho hàng hóa dịch vụ</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"ware-form\"\r\n      validationGroup=\"wareForm\"\r\n      [formData]=\"wavehourse\">\r\n      <dxi-item dataField=\"code\" [label]=\"{text: 'Mã kho'}\">\r\n        <dxi-validation-rule type=\"required\" message=\"Mã kho không được để trống\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"name\" [label]=\"{text: 'Tên kho'}\">\r\n        <dxi-validation-rule type=\"required\" message=\"Tên kho không được để trống\">\r\n        </dxi-validation-rule>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"address\" [label]=\"{text: 'Địa điểm'}\"></dxi-item>\r\n      <dxi-item dataField=\"note\" [label]=\"{text: 'Ghi chú'}\"></dxi-item>\r\n      <dxi-item dataField=\"order\" [label]=\"{text: 'Số thứ tự'}\" [editorOptions]=\"{ disabled: true }\"></dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"Ghi\" type=\"default\" [useSubmitBehavior]=\"true\" validationGroup=\"wareForm\"></dx-button>\r\n    <dx-button text=\"Quay lại\" (click)=\"bsModalRef.hide()\"></dx-button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/products/components/add-wavehourse/add-wavehourse.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-wavehourse/add-wavehourse.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/products/components/add-wavehourse/add-wavehourse.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/products/components/add-wavehourse/add-wavehourse.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddWavehourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWavehourseComponent", function() { return AddWavehourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddWavehourseComponent = /** @class */ (function () {
    function AddWavehourseComponent(bsModalRef, productsService, bsModalService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.productsService = productsService;
        this.bsModalService = bsModalService;
        this.focusField = function () {
            _this.bsModalService.onShown.subscribe(function () {
                _this.form.instance.getEditor("code").focus();
            });
        };
        this.onSubmit = function (e) {
            var _this = this;
            e.preventDefault();
            var data = { wavehourse: this.wavehourse };
            this.productsService.addWavehourse(data).subscribe(function (response) {
                if (response.status == "success") {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Thêm dữ liệu thành công", "success");
                    _this.wavehourse.id = response.data.id;
                    _this.onSave(_this.wavehourse);
                    _this.bsModalRef.hide();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(response.message, "error");
                }
            }, function (err) { }, function () {
            });
        };
    }
    AddWavehourseComponent.prototype.ngOnInit = function () {
    };
    AddWavehourseComponent.prototype.ngAfterViewInit = function () {
        this.focusField();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"])
    ], AddWavehourseComponent.prototype, "form", void 0);
    AddWavehourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-wavehourse',
            template: __webpack_require__(/*! ./add-wavehourse.component.html */ "./src/app/modules/products/components/add-wavehourse/add-wavehourse.component.html"),
            styles: [__webpack_require__(/*! ./add-wavehourse.component.scss */ "./src/app/modules/products/components/add-wavehourse/add-wavehourse.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
    ], AddWavehourseComponent);
    return AddWavehourseComponent;
}());



/***/ }),

/***/ "./src/app/modules/products/components/add/add.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/products/components/add/add.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{ 'CONTROLL.LABEL.update' | translate }}\r\n      {{ 'MENU.goods_and_services' | translate }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"form\" [formData]=\"product\" validationGroup=\"listData\" [showColonAfterLabel]=\"false\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Mã hàng hóa <Mã khoản thu> -->\r\n          <dxi-item dataField=\"code\" [editorOptions]=\"{placeholder: txt.product_code}\">\r\n            <dxo-label text=\"{{code}}\"></dxo-label>\r\n            <dxi-validation-rule type=\"required\"\r\n              message=\"{{code}} {{ 'VALIDATION.required' | translate }}\">\r\n            </dxi-validation-rule>\r\n            <dxi-validation-rule\r\n                type=\"pattern\"\r\n                [pattern]=\"productCodePattern\"\r\n                message=\"{{_translate.VALIDATION.required_productCode }}\">\r\n          </dxi-validation-rule>\r\n          </dxi-item>\r\n          <!-- Nhóm hàng -->\r\n          <dxi-item  itemType=\"group\" [colCount]=\"2\" cssClass='group-input-button'>\r\n            <dxi-item dataField=\"group_code\" cssClass='input-has-button-left input-right' editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: groupProducts,  displayExpr: 'name',\r\n                    valueExpr: 'code', placeholder: txt.product_group, searchEnabled: true,\r\n                    noDataText: txt.noDataText, value: selectedGroupProduct}\">\r\n              <dxo-label text=\"{{ 'GRID.PRODUCT.product_group' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule *ngIf=\"isTruongHoc\" type=\"required\"\r\n              message=\"{{ 'GRID.PRODUCT.product_group' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n            </dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"addGroupProduct\" cssClass='btn-small'>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <!-- Hình thức thu -->\r\n          <dxi-item *ngIf=\"isTruongHoc\" itemType=\"group\" [colCount]=\"2\" cssClass='group-input-button'>\r\n          <dxi-item dataField=\"form_revenue\" cssClass='input-has-button-left' editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: revenues,  displayExpr: 'name',\r\n                    valueExpr: 'code', placeholder: txt.form_revenue, searchEnabled: true,\r\n                    noDataText: txt.noDataText, value: selectedrevenue}\">\r\n               <dxi-validation-rule type=\"required\"\r\n                    message=\"{{ 'GRID.REVENUE.collection_form' | translate  }} {{ 'VALIDATION.required' | translate }}\">\r\n                </dxi-validation-rule>\r\n              <dxo-label text=\"{{ 'GRID.REVENUE.collection_form' | translate  }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"addRevenue\" cssClass='btn-small'>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Tên hàng hóa <Tên khoản thu> -->\r\n        <dxi-item dataField=\"name\" editorType=\"dxTextArea\" [colSpan]=\"2\" [editorOptions]=\"{placeholder: txt.item_name,height: 90}\">\r\n          <dxo-label text=\"{{name}}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{name}} {{ 'VALIDATION.required' | translate }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Đơn vị tính -->\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='group-input-button'>\r\n            <dxi-item dataField=\"unit_code\" editorType=\"dxSelectBox\" cssClass='input-has-button-left' [editorOptions]=\"{items: unitCalculations,onValueChanged: unitCodeChange,  displayExpr: 'name', valueExpr: 'code', placeholder: txt.unit_code,\r\n                    searchEnabled: true, noDataText: txt.noDataText, value: selectedUnitCalculation}\">\r\n              <dxo-label text=\"{{ 'GRID.INVOICE_DETAILS.unit_code' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"addUnitCalculation\" cssClass='btn-small'>\r\n            </dxi-item>\r\n          </dxi-item>\r\n          <!-- Đơn giá -->\r\n          <dxi-item dataField=\"price\" editorType=\"dxNumberBox\" [editorOptions]=\"{ format: formatter.don_gia }\">\r\n            <dxo-label text=\"{{ 'GRID.INVOICE_DETAILS.price' | translate }}\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- Thuế suất -->\r\n          <dxi-item dataField=\"vat\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: vats,  displayExpr: 'name', valueExpr: 'code', placeholder: txt.select,\r\n                  searchEnabled: true, noDataText: txt.noDataText}\">\r\n            <dxo-label text=\"{{ 'GRID.INVOICE_DETAILS.vat' | translate }}\"></dxo-label>\r\n          </dxi-item>\r\n          <!-- Tỷ lệ chiết khấu -->\r\n          <dxi-item *ngIf=\"!isTruongHoc\" dataField=\"discount\" editorType=\"dxNumberBox\" [editorOptions]=\"{ format: '#0.00', step: '0.01' }\">\r\n              <dxo-label text=\"{{ 'CONTROLL.LABEL.items_with_discount' | translate }}(%)\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <!-- Ghi chú -->\r\n        <dxi-item dataField=\"note\" editorType=\"dxTextArea\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.note' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <!-- Trạng thái -->\r\n          <dxi-item [label]=\"{text: ' '}\" dataField=\"status\" editorType=\"dxCheckBox\"\r\n            [editorOptions]=\"{ text: txt.active}\">\r\n          </dxi-item>\r\n          <!-- STT -->\r\n          <dxi-item *ngIf=\"showOrder\" dataField=\"order\" [editorOptions]=\"{ disabled: true }\">\r\n            <dxo-label text=\"{{ 'CONTROLL.LABEL.order' | translate }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{ 'CONTROLL.BUTTON.save' | translate }}\" type=\"default\" validationGroup=\"listData\"\r\n      [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button text=\"{{ 'CONTROLL.BUTTON.come_back' | translate }}\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/products/components/add/add.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/products/components/add/add.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/products/components/add/add.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/products/components/add/add.component.ts ***!
  \******************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _add_group_product_add_group_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-group-product/add-group-product.component */ "./src/app/modules/products/components/add-group-product/add-group-product.component.ts");
/* harmony import */ var _add_unit_code_add_unit_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-unit-code/add-unit-code.component */ "./src/app/modules/products/components/add-unit-code/add-unit-code.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _add_revenue_add_revenue_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add-revenue/add-revenue.component */ "./src/app/modules/products/components/add-revenue/add-revenue.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AddComponent = /** @class */ (function () {
    function AddComponent(authService, bsModalRef, bsModalWarehouse, bsModalGroupProduct, bsModalUnitCalculation, productsService, listsService, modalService, ref, translate) {
        var _this = this;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.bsModalWarehouse = bsModalWarehouse;
        this.bsModalGroupProduct = bsModalGroupProduct;
        this.bsModalUnitCalculation = bsModalUnitCalculation;
        this.productsService = productsService;
        this.listsService = listsService;
        this.modalService = modalService;
        this.ref = ref;
        this.translate = translate;
        this.showOrder = false;
        this.selectedGroupProduct = '';
        this.selectedrevenue = '';
        this.selectedUnitCalculation = '';
        this.selectedWavehourse = '';
        this.formatter = {};
        this.txt = {};
        this.productCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_7__["pattern"].productCodePattern;
        this.isTruongHoc = false;
        this.focusField = function () {
            _this.modalService.onShown.subscribe(function () {
                _this.form.instance.getEditor('code').focus();
            });
        };
        this.addGroupProduct = {
            text: '',
            icon: 'assets/img/icons/Them.png',
            type: 'default',
            onClick: function () {
                _this.groupProduct = new _modules_lists_shared__WEBPACK_IMPORTED_MODULE_4__["List"]();
                _this.groupProduct.order = _this.groupProducts.length + 1;
                var initialState = {
                    groupProduct: _this.groupProduct,
                    listTypeId: _this.groupProductListTypeId,
                    onSave: function (groupProduct) {
                        _this.groupProduct = groupProduct;
                        _this.groupProducts.push({
                            id: groupProduct.id,
                            name: groupProduct.name,
                            code: groupProduct.code,
                        });
                        _this.selectedGroupProduct = _this.groupProduct.code;
                    }
                };
                _this.bsModalGroupProduct = _this.modalService.show(_add_group_product_add_group_product_component__WEBPACK_IMPORTED_MODULE_8__["AddGroupProductComponent"], {
                    class: 'second child-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
            }
        };
        this.addRevenue = {
            text: '',
            icon: 'assets/img/icons/Them.png',
            type: 'default',
            onClick: function () {
                _this.revenue = new _modules_lists_shared__WEBPACK_IMPORTED_MODULE_4__["List"]();
                _this.revenue.order = _this.revenues.length + 1;
                var initialState = {
                    revenue: _this.revenue,
                    listTypeId: _this.revenuListTypeId,
                    onSave: function (revenue) {
                        _this.revenue = revenue;
                        _this.revenues.push({
                            id: revenue.id,
                            name: revenue.name,
                            code: revenue.code,
                        });
                        _this.selectedrevenue = _this.revenue.code;
                    }
                };
                _this.bsModalGroupProduct = _this.modalService.show(_add_revenue_add_revenue_component__WEBPACK_IMPORTED_MODULE_11__["AddRevenueComponent"], {
                    class: 'second child-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
            }
        };
        this.addUnitCalculation = {
            text: '',
            icon: 'assets/img/icons/Them.png',
            type: 'default',
            onClick: function () {
                _this.unitCalculation = new _modules_lists_shared__WEBPACK_IMPORTED_MODULE_4__["List"]();
                _this.unitCalculation.order = _this.unitCalculations.length + 1;
                var initialState = {
                    unitCalculation: _this.unitCalculation,
                    listTypeId: _this.unitCalculationListTypeId,
                    onSave: function (unitCalculation) {
                        _this.unitCalculation = unitCalculation;
                        _this.unitCalculations.push({
                            id: unitCalculation.id,
                            name: unitCalculation.name,
                            code: unitCalculation.code,
                        });
                        _this.selectedUnitCalculation = _this.unitCalculation.code;
                    }
                };
                _this.bsModalUnitCalculation = _this.modalService.show(_add_unit_code_add_unit_code_component__WEBPACK_IMPORTED_MODULE_9__["AddUnitCodeComponent"], {
                    class: 'second child-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
            }
        };
        this.unitCodeChange = function (e) {
            var _obj = _this.unitCalculations.filter(function (p) { return p.code == e.value; })[0];
            if (_obj) {
                //this.product.unit_name = _obj.name;
            }
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    AddComponent.prototype.ngOnInit = function () {
        var account = this.authService.getCurrentUser().account;
        if (account) {
            if (account.account_type == "HS-SV") {
                this.code = this._translate.GRID.REVENUE.revenue_code;
                this.name = this._translate.GRID.REVENUE.revenue_name;
                this.isTruongHoc = true;
            }
            else {
                this.code = this._translate.GRID.INVOICE_DETAILS.product_code;
                this.name = this._translate.GRID.INVOICE_DETAILS.item_name;
                this.isTruongHoc = false;
            }
        }
        this.txt = {
            product_group: this._translate.CONTROLL.LABEL.select + ' ' + this._translate.GRID.PRODUCT.product_group.toLowerCase(),
            warehouse: this._translate.CONTROLL.LABEL.select + ' ' + this._translate.CONTROLL.LABEL.warehouse.toLowerCase(),
            noDataText: this._translate.CONTROLL.LABEL.noDataText,
            product_code: this._translate.CONTROLL.LABEL.placeHolder_productCode,
            form_revenue: this._translate.CONTROLL.LABEL.select + ' ' + this._translate.GRID.REVENUE.collection_form.toLowerCase(),
            item_name: this._translate.CONTROLL.LABEL.input + ' ' + this.name.toLowerCase(),
            active: this._translate.GRID.GENERAL.active,
            unit_code: this._translate.CONTROLL.LABEL.select + ' ' + this._translate.GRID.INVOICE_DETAILS.unit_code.toLowerCase(),
            select: this._translate.CONTROLL.LABEL.select,
        };
        this.getProduct();
        this.formatter.don_gia = _core_index__WEBPACK_IMPORTED_MODULE_6__["VChanggeMoneyService"].formatDecimalColumn(this.configDecimal.don_gia);
    };
    AddComponent.prototype.ngAfterViewInit = function () {
        this.focusField();
    };
    // addWavehourse = {
    //   text: "",
    //   icon: "assets/img/icons/Them.png",
    //   type: "default",
    //   onClick: () => {
    //     this.wavehourse = new Wavehourse();
    //     this.wavehourse.order = this.wavehourses.length + 1;
    //     const initialState = {
    //       wavehourse: this.wavehourse,
    //       onSave: (wavehourse) => {
    //         this.wavehourse = wavehourse;
    //         this.wavehourses.push({
    //           id: wavehourse.id,
    //           name: wavehourse.name,
    //           code: wavehourse.code,
    //         });
    //         this.selectedWavehourse = this.wavehourse.id;
    //       }
    //     };
    //     this.bsModalWarehouse = this.modalService.show(AddWavehourseComponent, {
    //       class: 'second child-modal', initialState, backdrop: 'static',
    //       keyboard: false
    //     });
    //   }
    // };
    AddComponent.prototype.getProduct = function () {
        if (this.product.id != '') {
            if (this.product.status && this.product.status === 'HOAT_DONG') {
                this.product.status = true;
            }
            else if (this.product.status && this.product.status === 'KHONG_HOAT_DONG') {
                this.product.status = false;
            }
            this.selectedGroupProduct = this.product.group_code;
            this.selectedrevenue = this.product.form_revenue;
            this.selectedUnitCalculation = this.product.unit_code;
            this.selectedWavehourse = this.product.wavehourse_id;
            this.product.vat = this.product.vat ? this.product.vat.toString() : '';
        }
        else {
            this.product.order = this.totalCount + 1;
            this.product.status = true;
            this.product.discount = 0.00;
        }
    };
    //xử lý submit add product
    AddComponent.prototype.onSubmit = function (e) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        if (this.product.status) {
            this.product.status = 'HOAT_DONG';
        }
        else {
            this.product.status = 'KHONG_HOAT_DONG';
        }
        var data = { product: this.product };
        if (!this.product.id) {
            this.productsService.add(data).subscribe(function (response) {
                if (response.status == 'success') {
                    _this.bsModalRef.content.successSaveItem = 'Success';
                    _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(_this._translate.NOTIFY.add_success, 'success');
                    _this.bsModalRef.hide();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(response.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
            });
        }
        else {
            var id = this.product.id;
            this.productsService.edit(data, id).subscribe(function (response) {
                if (response.status == 'success') {
                    _this.bsModalRef.content.successSaveItem = 'Success';
                    _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                    _this.bsModalRef.hide();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(response.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormComponent"])
    ], AddComponent.prototype, "form", void 0);
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/modules/products/components/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/modules/products/components/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_4__["ListsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/modules/products/components/index/index.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/products/components/index/index.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"pull-left\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <div class=\"pull-right button-panel\">\r\n            <dx-button id=\"add\" (click)=\"add()\" icon=\"assets\\img\\icons\\Them.png\" text=\"{{ 'CONTROLL.BUTTON.add' | translate }}\" type=\"default\"></dx-button>\r\n            <dx-button (click)=\"integrateCRM()\" [visible]=\"isIntegrateCRM\" icon=\"assets\\img\\icons\\NapDuLieu.png\" text=\"{{ 'CONTROLL.BUTTON.syn_crm' | translate }}\" type=\"default\">\r\n            </dx-button>\r\n                <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx\" (change)=\"onFileChanged($event)\" multiple=\"false\" style=\"display: none;\"/>\r\n            <dx-menu\r\n          [dataSource]=\"extras\"\r\n          displayExpr=\"name\"\r\n          orientation=\"horizontal\"\r\n          submenuDirection=\"auto\"\r\n          (onItemClick)=\"itemExtrasClick($event)\"\r\n          cssClass='button-dropdown-extend'>\r\n        </dx-menu>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <dx-data-grid\r\n    id=\"gridContainer\"\r\n    [dataSource]=\"dataSource\"\r\n    [(selectedRowKeys)]=\"selectedRows\"\r\n    [showRowLines]=\"true\"\r\n    [noDataText]=\"noDataText\"\r\n    [allowColumnResizing]=\"true\"\r\n    [columnMinWidth]=\"50\"\r\n    [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\">\r\n    <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n    <dxo-selection selectAllMode=\"page\" mode=\"multiple\"></dxo-selection>\r\n    <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n\r\n    <dxi-column dataField=\"code\" caption=\"{{code}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n      [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n\r\n    <dxi-column dataField=\"name\" caption=\"{{name}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n      [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n    <!-- Hình thức thu -->\r\n      <dxi-column *ngIf=\"isTruongHoc\" dataField=\"form_revenue\" caption=\"{{ 'GRID.REVENUE.collection_form' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n      [filterOperations]=\"['contains', '=']\">\r\n        <dxo-lookup [dataSource]=\"revenues\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup>\r\n     </dxi-column>\r\n     <!-- Nhóm hàng -->\r\n    <dxi-column *ngIf=\"!isTruongHoc\" dataField=\"group_code\" caption=\"{{ 'GRID.PRODUCT.product_group' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n      [filterOperations]=\"['contains', '=']\">\r\n        <dxo-lookup [dataSource]=\"groupProducts\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup>\r\n    </dxi-column>\r\n    <!-- Đơn vị tính -->\r\n    <dxi-column dataField=\"unit_code\" caption=\"{{ 'GRID.INVOICE_DETAILS.unit_code' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n      [filterOperations]=\"['contains', '=']\">\r\n        <dxo-lookup [dataSource]=\"unitCalculations\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup>\r\n    </dxi-column>\r\n    <!-- Đơn giá -->\r\n    <dxi-column dataField=\"price\" caption=\"{{ 'GRID.INVOICE_DETAILS.price' | translate }}\" alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\"\r\n      [filterOperations]=\"['contains', '=']\" [width]=\"155\" [format]=\"formatter.don_gia\" ></dxi-column>\r\n    <!-- Thuế suất -->\r\n    <dxi-column *ngIf=\"!isTruongHoc\" dataField=\"vat\" caption=\"VAT\" alignment=\"center\" [filterOperations]=\"['contains', '=']\" \r\n      headerCellTemplate=\"titleHeaderTemplate\">\r\n      <dxo-lookup [dataSource]=\"vats\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup>\r\n    </dxi-column>\r\n    <!-- Chiết khấu -->\r\n    <dxi-column *ngIf=\"!isTruongHoc\" dataField=\"discount\" caption=\"{{ 'GRID.INVOICE_DETAILS.discount' | translate }}\" alignment=\"right\" [filterOperations]=\"['contains', '=']\" \r\n      headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n    <!-- Ghi chú -->\r\n    <dxi-column dataField=\"note\" caption=\"{{ 'CONTROLL.LABEL.note' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n      [filterOperations]=\"['contains', '=']\" ></dxi-column>\r\n    <!-- Trạng thái -->\r\n    <dxi-column dataField=\"status\" caption=\"{{ 'GRID.GENERAL.status' | translate }}\"  alignment=\"center\" [width]=\"120\" headerCellTemplate=\"titleHeaderTemplate\">\r\n      <dxo-lookup [dataSource]=\"statusFilter\" valueExpr=\"value\" displayExpr=\"text\"></dxo-lookup>\r\n    </dxi-column>\r\n    <dxi-column cellTemplate=\"actionIcon\"  minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" width=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\"  alignment=\"center\"></dxi-column>\r\n    <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n      <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'actionIcon'\">\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\" href=\"javascript:void(0)\">\r\n      </a>\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\" href=\"javascript:void(0)\">\r\n      </a>\r\n    </div>\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\"  [filtering]=\"true\"></dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager\r\n        [showPageSizeSelector]=\"true\"\r\n        [allowedPageSizes]=\"[15, 50, 100]\"\r\n        [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\"\r\n        infoText=\"{{ 'DXO_PAGER.page' | translate }}\">\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup\r\nclass=\"popup\"\r\n[width]=\"400\"\r\n[height]=\"255\"\r\n[showTitle]=\"true\"\r\ntitle=\"{{ 'CONTROLL.BUTTON.import_data' | translate }}\"\r\n[dragEnabled]=\"false\"\r\n(onHiding)=\"onImportHiding($event)\"\r\n(onShowing)=\"onImportShowing($event)\"\r\n[(visible)]=\"showPopup\">\r\n<div *dxTemplate=\"let data of 'content'\">\r\n  <p style=\"margin-bottom: 10px\">{{ 'CONTROLL.LABEL.file_name' | translate }}:\r\n    <span>{{fileName}}</span>\r\n  </p>\r\n  <p style=\"margin-bottom: 10px\">{{ 'CONTROLL.LABEL.capacity' | translate }}:\r\n    <span>{{fileSize | number:'1.0-2'}}KB</span>\r\n  </p>\r\n  <div style=\"height: 30px;\">\r\n    <dx-progress-bar \r\n      [min]=\"0\" \r\n      [max]=\"100\" \r\n      [value]=\"valueProgress\"\r\n      [statusFormat]=\"format\"\r\n      [visible]=\"visibleProgressBar\">\r\n    </dx-progress-bar>\r\n  </div>\r\n  \r\n<p style=\"height: 25px;\">\r\n  <span>{{thongbao}}</span>\r\n</p>\r\n<p style=\"height: 25px;\">\r\n  <a href=\"javascript:void(0)\" (click)=\"layBanGhiLoi()\" *ngIf=\"visibleGetError\" style=\" color: red;\">* {{ 'CONTROLL.BUTTON.get_data_error' | translate }}</a>\r\n</p>\r\n  <div class=\"pull-right\">\r\n    <dx-button (click)=\"thayTheToanBo()\" [disabled]=\"isDisable\" text=\"{{ 'CONTROLL.BUTTON.replace_all' | translate }}\" type=\"default\"></dx-button>\r\n    <dx-button (click)=\"themTiep()\" [disabled]=\"isDisable\" text=\"{{ 'CONTROLL.BUTTON.add_more' | translate }}\" type=\"default\"></dx-button>\r\n  </div>\r\n</div>\r\n</dx-popup>\r\n\r\n<dx-popup\r\nclass=\"popup-export\"\r\n[width]=\"400\"\r\n[height]=\"180\"\r\n[showTitle]=\"true\"\r\ntitle=\"{{ 'CONTROLL.BUTTON.get_the_sample_file' | translate }}\"\r\n[dragEnabled]=\"false\"\r\n[(visible)]=\"showPopupGetFile\">\r\n<div *dxTemplate=\"let data of 'content'\">\r\n  <p style=\"margin-bottom: 40px\">{{ 'CONFIRM.select_get_file_tem' | translate }}?</p>\r\n  \r\n  <div class=\"pull-right\">\r\n    <dx-button (click)=\"fileCoDuLieu()\"  text=\"{{ 'CONTROLL.BUTTON.file_has_data' | translate }}\" type=\"default\"></dx-button>\r\n    <dx-button (click)=\"fileTrang()\"  text=\"{{ 'CONTROLL.BUTTON.file_has_no_data' | translate }}\" type=\"default\"></dx-button>\r\n  </div>\r\n</div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/products/components/index/index.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/products/components/index/index.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".support-link{padding:5px 15px 7px 15px;background-color:#337ab7;border-color:#2d6da3;color:#fff;text-decoration:none}.support-link.mgr-15{margin-right:15px}.support-link img{margin-right:10px;margin-top:-2px}#auto-input{margin-right:75px}\n"

/***/ }),

/***/ "./src/app/modules/products/components/index/index.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/products/components/index/index.component.ts ***!
  \**********************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add/add.component */ "./src/app/modules/products/components/add/add.component.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
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
    function IndexComponent(productsService, modalService, authService, cdr, route, translate) {
        var _this = this;
        this.productsService = productsService;
        this.modalService = modalService;
        this.authService = authService;
        this.cdr = cdr;
        this.route = route;
        this.translate = translate;
        this.dataSource = {};
        this.selectedRows = [];
        this.noDataText = "Chưa có hàng hóa nào";
        this.formatter = {};
        this.showPopupGetFile = false;
        this.showPopup = false;
        this.valueProgress = 0;
        this.productCodePattern = _config_index__WEBPACK_IMPORTED_MODULE_9__["pattern"].productCodePattern;
        this.header = [{
                wavehourse_code: "DANH SÁCH DANH MỤC"
            }, {
                wavehourse_code: "* Ghi chú: Cột chữ màu đỏ, đơn vị phải nhập nội dung."
            }, {
                wavehourse_code: "Mã kho hàng",
                code: "Mã hàng",
                name: "Tên hàng ",
                group_name: "Tên nhóm hàng",
                group_code: "Mã nhóm hàng",
                unit_name: "Tên đơn vị tính",
                unit_code: "Mã đơn vị tính",
                number_per_invoice: "Số lượng",
                price: "Đơn giá bán",
                vat: "% VAT",
                discount: "% Chiết khấu",
                L: "Trạng thái",
                error_message: "Nội dung lỗi"
            }, {
                wavehourse_code: "(1)",
                code: "(2)",
                name: "(3)",
                group_name: "(4)",
                group_code: "(5)",
                unit_name: "(6)",
                unit_code: "(7)",
                number_per_invoice: "(8)",
                price: "(9)",
                vat: "(10)",
                discount: "(11)",
                L: "(12)",
            }
        ];
        this.headerStudent = [{
                wavehourse_code: "DANH SÁCH DANH MỤC"
            }, {
                wavehourse_code: "* Ghi chú: Cột chữ màu đỏ, đơn vị phải nhập nội dung."
            }, {
                code: "Mã khoản thu",
                name: "Tên khoản thu ",
                form_revenue_name: "Tên hình thức thu",
                form_revenue: "Mã hình thức thu",
                group_name: "Tên nhóm hàng",
                group_code: "Mã nhóm hàng",
                unit_name: "Tên đơn vị tính",
                unit_code: "Mã đơn vị tính",
                price: "Đơn giá bán",
                vat: "% VAT",
                L: "Trạng thái",
                error_message: "Nội dung lỗi"
            }, {
                code: "(1)",
                name: "(2)",
                form_revenue_name: "(3)",
                form_revenue: "(4)",
                group_name: "(5)",
                group_code: "(6)",
                unit_name: "(7)",
                unit_code: "(8)",
                price: "(9)",
                vat: "(10)",
                discount: "(11)",
                L: "(12)",
            }
        ];
        this.dataFail = new Array();
        this.stopImport = false;
        this.isDisable = false;
        this.visibleGetError = false;
        this.visibleProgressBar = false;
        this.thongbao = "";
        this.timeRemain = "";
        this.isTruongHoc = false;
        this.extras = [];
        this.saveImport = function (data, page) {
            if (_this.stopImport == true) {
                return;
            }
            var numberPages = Math.floor(data.length / _this.maximum_object_import) + 1;
            var percentComplete = 100 / numberPages;
            var timePerRow = 7;
            var timeTotal = (numberPages) * timePerRow;
            var pageData = {
                "products": _this.paginate(data, _this.maximum_object_import, page)
            };
            _this.productsService.importData(pageData).subscribe(function (res) {
                timeTotal = timeTotal - (page * timePerRow);
                _this.timeRemain = ", " + _this._translate.NOTIFY.time_remaining + ": " + moment__WEBPACK_IMPORTED_MODULE_10__["utc"](timeTotal * 1000).format('HH:mm:ss') + ".";
                if (res.status == "success") {
                    _this.valueProgress += percentComplete;
                    if (page < numberPages) {
                        _this.saveImport(data, page + 1);
                    }
                    if (res.data.product_errors.length != 0) {
                        res.data.product_errors.forEach(function (error) {
                            delete error.id;
                            delete error.account_id;
                            delete error.group_code;
                            delete error.student_reduce_rate_code;
                            delete error.order;
                            delete error.status;
                            if (error.object_code == "CA_NHAN") {
                                error.object_code = "X";
                            }
                            else {
                                error.object_code = "";
                            }
                        });
                        var tr = _this.dataFail.length;
                        _this.dataFail = _this.dataFail.concat(res.data.product_errors);
                    }
                    var _soBanGhiLoi = (res.data.product_errors ? res.data.product_errors.length : 0);
                    _this.importSuccess = _this.countAll - _this.dataFail.length + 4;
                    var banghiloi_1 = _this.countAll - _this.importSuccess + _soBanGhiLoi;
                    //  this.importSuccess = this.countAll - _soBanGhiLoi;
                    if (page == numberPages) {
                        _this.valueProgress = 100;
                        _this.productsService.confirmClearData().subscribe(function (res) {
                            if (res.status == "success") {
                                _this.thongbao = _this._translate.NOTIFY.import + " " + _this.importSuccess + "/" + _this.countAll + " b\u1EA3n ghi (C\u00F3 " + banghiloi_1 + " b\u1EA3n ghi l\u1ED7i.)";
                                _this.timeRemain = "";
                                if (_this.importSuccess < _this.countAll) {
                                    _this.visibleGetError = true;
                                    // this.layBanGhiLoi(res.data.product_errors);
                                }
                                else {
                                    _this.showPopup = false;
                                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.import_success, 'success');
                                }
                            }
                        });
                    }
                }
            });
        };
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%' + _this.timeRemain;
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.extras = [{
                id: "1",
                name: this._translate.CONTROLL.BUTTON.extend,
                items: [
                    {
                        id: "XOA",
                        name: this._translate.CONTROLL.BUTTON.delete,
                        icon: this._translate.ICONS.delete
                    },
                    {
                        id: "LAY_FILE_MAU",
                        name: this._translate.CONTROLL.BUTTON.get_the_sample_file,
                        icon: this._translate.ICONS.download
                    }, {
                        id: "NAP_DU_LIEU",
                        name: this._translate.CONTROLL.BUTTON.import_data,
                        icon: this._translate.ICONS.import_data
                    },
                ]
            }];
        this.currentUser = this.authService.getCurrentUser();
        this.statusFilter = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_7__["VSelectBoxService"]._statusFilter(this._translate);
        if (this.currentUser.account) {
            if (this.currentUser.account.account_type == "HS-SV") {
                this.code = this._translate.GRID.REVENUE.revenue_code;
                this.name = this._translate.GRID.REVENUE.revenue_name;
                this.isTruongHoc = true;
            }
            else {
                this.code = this._translate.GRID.INVOICE_DETAILS.product_code;
                this.name = this._translate.GRID.INVOICE_DETAILS.product_name;
                this.isTruongHoc = false;
            }
        }
        this.loadList();
        this.loadWavehourses();
        this.getAllListbyListtypeByCode();
        this.route.data.subscribe(function (data) {
            data.configs.forEach(function (config) {
                if (config.name == "integrate_parameter") {
                    _this.configCRM = JSON.parse(config.value).integrate_crm;
                    if (_this.configCRM.is_integrate) {
                        _this.isIntegrateCRM = true;
                    }
                    else {
                        _this.isIntegrateCRM = false;
                        _this.cdr.detectChanges();
                    }
                }
                if (config.name == "maximum_object_import") {
                    _this.maximum_object_import = config.value;
                }
                if (config.name == _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].configSys.decimal_places_json) {
                    _this.configDecimal = JSON.parse(config.value);
                    if (_this.configDecimal.don_gia > 0) {
                        var format = "0,###.";
                        for (var i = 0; i < _this.configDecimal.don_gia; i++) {
                            format += "#";
                        }
                        _this.formatter.don_gia = format;
                    }
                    else
                        _this.formatter.don_gia = "0,###.##";
                }
            });
        });
        if (this.currentUser.account.account_type == "HS-SV")
            this.dataFail = this.dataFail.concat(this.headerStudent);
        else
            this.dataFail = this.dataFail.concat(this.header);
    };
    IndexComponent.prototype.loadList = function () {
        this.dataSource.store = this.productsService.getAll();
    };
    IndexComponent.prototype.loadWavehourses = function () {
        var _this = this;
        this.productsService.loadAllWavehourses().subscribe(function (response) {
            _this.wavehourses = response.data['wavehourses'];
        });
    };
    IndexComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id == 'XOA') {
            this.delete(null);
        }
        else if (e.itemData.id == 'LAY_FILE_MAU') {
            this.getFileTemp();
        }
        else if (e.itemData.id == 'NAP_DU_LIEU') {
            this.napDuLieuTuBangKe();
        }
    };
    IndexComponent.prototype.add = function () {
        var _this = this;
        var product = new _modules_products_shared__WEBPACK_IMPORTED_MODULE_2__["Product"];
        var initialState = {
            product: product,
            totalCount: this.dataGrid.instance.totalCount(),
            groupProducts: this.groupProducts,
            revenues: this.revenues,
            unitCalculations: this.unitCalculations,
            vats: this.vats,
            groupProductListTypeId: this.groupProductListTypeId,
            revenuListTypeId: this.revenuListTypeId,
            unitCalculationListTypeId: this.unitCalculationListTypeId,
            vatListTypeId: this.vatListTypeId,
            wavehourses: this.wavehourses,
            configDecimal: this.configDecimal,
        };
        this.bsModalRef = this.modalService.show(_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], {
            class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        this.modalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem) {
                //this.dataGrid.instance.refresh();
                _this.dataSource = {};
                _this.loadList();
            }
        });
    };
    IndexComponent.prototype.integrateCRM = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        this.productsService.integrateCRM().subscribe(function (res) {
            if (res.status == "success") {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.syn_data_success, 'success');
                _this.dataSource = {};
                _this.loadList();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.edit = function (data) {
        var _this = this;
        var id = data ? data.id : (this.selectedRows[0].length == 0 ? "" : this.selectedRows[0]);
        if (!id) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
            return;
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
            this.productsService.getProduct(id).subscribe(function (response) {
                var product = response.data.product;
                var initialState = {
                    product: product,
                    groupProducts: _this.groupProducts,
                    revenues: _this.revenues,
                    unitCalculations: _this.unitCalculations,
                    vats: _this.vats,
                    groupProductListTypeId: _this.groupProductListTypeId,
                    revenuListTypeId: _this.revenuListTypeId,
                    unitCalculationListTypeId: _this.unitCalculationListTypeId,
                    vatListTypeId: _this.vatListTypeId,
                    wavehourses: _this.wavehourses,
                    configDecimal: _this.configDecimal,
                };
                _this.bsModalRef = _this.modalService.show(_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], {
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
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
    };
    IndexComponent.prototype.delete = function (data) {
        var _this = this;
        var id = data ? data.id : (this.selectedRows.length == 0 ? "" : this.selectedRows.join(','));
        if (!id) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
            return;
        }
        else {
            var result = _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
            if (result) {
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        _this.productsService.delete(id).subscribe(function (response) {
                            if (response.status === "success") {
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                _this.dataSource = {};
                                _this.loadList();
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                            }
                        });
                    }
                });
            }
        }
    };
    IndexComponent.prototype.setStatus = function (data) {
        if (data.status == "HOAT_DONG") {
            return this._translate.GRID.GENERAL.active;
        }
        else {
            data.status = "KHONG_HOAT_DONG";
            return this._translate.GRID.GENERAL.inactive;
        }
    };
    IndexComponent.prototype.getAllListbyListtypeByCode = function () {
        var _this = this;
        this.productsService.getAllListbyListtypeByCode('DM_NHOM_HANG_HOA,DM_DON_VI_TINH,DM_TY_LE_VAT,DM_HINH_THUC_THU').subscribe(function (response) {
            _this.groupProducts = response.data['DM_NHOM_HANG_HOA'];
            _this.revenues = response.data['DM_HINH_THUC_THU'];
            _this.groupProductListTypeId = response.data['ids']['DM_NHOM_HANG_HOA'];
            _this.revenuListTypeId = response.data['ids']['DM_HINH_THUC_THU'];
            _this.unitCalculations = response.data['DM_DON_VI_TINH'];
            _this.unitCalculationListTypeId = response.data['ids']['DM_DON_VI_TINH'];
            _this.vats = response.data['DM_TY_LE_VAT'];
            _this.vatListTypeId = response.data['ids']['DM_TY_LE_VAT'];
            if (_this.currentUser.account.account_type != "HS-SV")
                _this.groupProducts = _this.groupProducts.filter(function (p) { return p.code != "HOCTHEM" && p.code != "HOCPHI" && p.code != "CACKHOANKHAC"; });
        });
    };
    IndexComponent.prototype.getFileTemp = function () {
        this.showPopupGetFile = true;
    };
    IndexComponent.prototype.fileCoDuLieu = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        this.productsService.getFileTempData().subscribe(function (res) {
            if (res.status == 'success') {
                var file = res.data.product;
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(res.message, 'error');
            }
            _this.showPopupGetFile = false;
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.fileTrang = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        this.productsService.getFileTemp().subscribe(function (res) {
            if (res.status == 'success') {
                var file = res.data.product;
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(res.message, 'error');
            }
            _this.showPopupGetFile = false;
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.thayTheToanBo = function () {
        this.isDisable = true;
        this.import(this.dataExcelFile, 'THAY_THE');
        this.dataExcelFile = null;
    };
    IndexComponent.prototype.themTiep = function () {
        this.isDisable = true;
        this.import(this.dataExcelFile, 'THEM_TIEP');
        this.dataExcelFile = null;
    };
    // huy() {
    //   this.showPopup = false;
    //   this.dataExcelFile = null;
    // }
    IndexComponent.prototype.napDuLieuTuBangKe = function () {
        setTimeout(function () {
            document.getElementById("file-bang-ke").click();
        }, 50);
    };
    IndexComponent.prototype.onFileChanged = function (evt) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var target = (evt.target);
        console.log(target);
        this.fileName = target.files[0].name;
        this.fileSize = target.files[0].size / 1024;
        if (target.files.length !== 1) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.not_select_multi, 'error');
            throw new Error(this._translate.NOTIFY.not_select_multi);
        }
        ;
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var rangeRow = 5;
            if (_this.currentUser.account.account_type == "HS-SV")
                rangeRow = 4;
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].sheet_to_json(ws, { header: "A", range: rangeRow }));
            var fileBangKe = document.getElementById("file-bang-ke");
            fileBangKe.value = "";
            //data = data.filter(p=>p.B || p.C);
            _this.dataExcelFile = data;
            _this.countAll = data.length;
            _this.showPopup = true;
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        };
        reader.readAsBinaryString(target.files[0]);
    };
    IndexComponent.prototype.import = function (dataExcelFile, type) {
        var _this = this;
        this.visibleProgressBar = true;
        var data = [];
        if (dataExcelFile) {
            var _index_1 = 0;
            dataExcelFile.forEach(function (element) {
                var isValid = true;
                if (_this.currentUser.account.account_type == "HS-SV") {
                    if (!element.A || !element.B || !element.C || !element.D) {
                        var product = new Object;
                        product["code"] = element.A ? element.A : "";
                        product["name"] = element.B ? element.B : "";
                        product["form_revenue_name"] = element.C ? element.C : "";
                        product["form_revenue"] = element.D ? element.D : "";
                        product["group_name"] = element.E ? element.E : "";
                        product["group_code"] = element.F ? element.F : "";
                        product["unit_name"] = element.G ? element.G : "";
                        product["unit_code"] = element.H ? element.H : "";
                        product["price"] = element.I ? element.I : "";
                        product["vat"] = element.J ? element.J : "";
                        product["note"] = element.K ? element.K : "";
                        product["error_message"] = "Lỗi thiếu tên hàng";
                        if (element.B || element.C) {
                            ++_index_1;
                            _this.dataFail.push(product);
                        }
                    }
                    else {
                        ++_index_1;
                        var product_1 = new _modules_products_shared__WEBPACK_IMPORTED_MODULE_2__["Product"]();
                        product_1.code = element.A ? element.A : "";
                        product_1.name = element.B ? element.B : "";
                        product_1.form_revenue = element.D ? element.D : "";
                        product_1.group_code = element.F ? element.F : "";
                        product_1.unit_code = element.H ? element.H : "";
                        product_1.price = element.I ? element.I.replace(new RegExp(",", 'g'), "") : "";
                        _this.vats.forEach(function (vat) {
                            if (element.J && vat.name == element.J) {
                                product_1.vat = vat.code;
                            }
                        });
                        product_1.note = element.K ? element.K : "";
                        product_1.order = 1;
                        product_1["status"] = "HOAT_DONG";
                        if (product_1.code != "" && !_this.productCodePattern.test(product_1.code))
                            isValid = false;
                        if (!isValid) {
                            product_1["error_message"] = _this._translate.VALIDATION.required_productCode;
                            _this.dataFail.push(product_1);
                        }
                        else
                            data.push(product_1);
                    }
                }
                else {
                    if (!element.C) {
                        var product = new Object;
                        product["wavehourse_code"] = element.A ? element.A : "";
                        product["code"] = element.B ? element.B : "";
                        product["name"] = element.C ? element.C : "";
                        product["group_name"] = element.D ? element.D : "";
                        product["group_code"] = element.E ? element.E : "";
                        product["unit_name"] = element.F ? element.F : "";
                        product["unit_code"] = element.G ? element.G : "";
                        product["number_per_invoice"] = element.H ? element.H : "";
                        product["price"] = element.I ? element.I : "";
                        product["vat"] = element.J ? element.J : "";
                        product["discount"] = element.K ? element.K : "";
                        product["error_message"] = "Lỗi thiếu tên hàng";
                        if (element.B) {
                            ++_index_1;
                            _this.dataFail.push(product);
                        }
                    }
                    else {
                        ++_index_1;
                        var product_2 = new _modules_products_shared__WEBPACK_IMPORTED_MODULE_2__["Product"]();
                        product_2.code = element.B ? element.B : "";
                        product_2.name = element.C ? element.C : "";
                        product_2.group_code = element.E ? element.E : "";
                        product_2.unit_code = element.G ? element.G : "";
                        product_2.number_per_invoice = element.H ? element.H : "";
                        product_2.price = element.I ? element.I.replace(new RegExp(",", 'g'), "") : "";
                        _this.vats.forEach(function (vat) {
                            if (element.J && vat.name == element.J) {
                                product_2.vat = vat.code;
                            }
                        });
                        product_2.discount = element.K ? element.K : "";
                        product_2.note = element.N ? element.N : "";
                        product_2.order = 1;
                        product_2["status"] = "HOAT_DONG";
                        if (product_2.code != "" && !_this.productCodePattern.test(product_2.code))
                            isValid = false;
                        if (!isValid) {
                            product_2["error_message"] = _this._translate.VALIDATION.required_productCode;
                            _this.dataFail.push(product_2);
                        }
                        else
                            data.push(product_2);
                    }
                }
            });
            this.countAll = _index_1;
        }
        var _lst = data.filter(function (p) { return p.name; });
        if (_lst.length > 0) {
            if (type == "THAY_THE") {
                this.productsService.clearData().subscribe(function (res) {
                    if (res.status == "success") {
                        _this.saveImport(_lst, 1);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, "error");
                    }
                });
            }
            else if (type == "THEM_TIEP") {
                this.saveImport(_lst, 1);
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.file_empty, "error");
        }
    };
    IndexComponent.prototype.paginate = function (array, page_size, page_number) {
        --page_number; // because pages logically start with 1, but technically with 0
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };
    IndexComponent.prototype.onImportShowing = function (e) {
        this.stopImport = false;
    };
    IndexComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100) {
            r = confirm(this._translate.CONFIRM.import_data);
        }
        if (r) {
            this.stopImport = true;
            this.dataSource = {};
            this.loadList();
            this.valueProgress = 0;
            this.isDisable = false;
            this.thongbao = "";
            this.dataFail = new Array();
            if (this.currentUser.account.account_type == "HS-SV")
                this.dataFail = this.dataFail.concat(this.headerStudent);
            else
                this.dataFail = this.dataFail.concat(this.header);
        }
        else {
            e.cancel = true;
        }
    };
    IndexComponent.prototype.layBanGhiLoi = function (dataFail) {
        if (this.valueProgress < 100) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.import_error, "error");
        }
        else {
            var ws = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(this.dataFail);
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_new();
            var wscols = [
                { wpx: 130 },
                { wpx: 130 },
                { wpx: 200 },
                { wpx: 130 },
                { wpx: 130 },
                { wpx: 80 },
                { wpx: 80 },
                { wpx: 80 },
                { wpx: 80 },
                { wpx: 80 },
                { wpx: 80 },
                { wpx: 100 },
                { wpx: 400 }
            ];
            var wsrows = [
                { hidden: true },
            ];
            ws['!cols'] = wscols;
            ws['!rows'] = wsrows;
            xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_append_sheet(wb, ws, 'Sheet1');
            xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](wb, 'danh_sach_loi.xlsx');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/products/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/products/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_modules_products_shared__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/products/products.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/products/products.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/products/components/index/index.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _products_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.routing */ "./src/app/modules/products/products.routing.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/modules/products/components/add/add.component.ts");
/* harmony import */ var _components_add_group_product_add_group_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-group-product/add-group-product.component */ "./src/app/modules/products/components/add-group-product/add-group-product.component.ts");
/* harmony import */ var _components_add_unit_code_add_unit_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-unit-code/add-unit-code.component */ "./src/app/modules/products/components/add-unit-code/add-unit-code.component.ts");
/* harmony import */ var _components_add_wavehourse_add_wavehourse_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-wavehourse/add-wavehourse.component */ "./src/app/modules/products/components/add-wavehourse/add-wavehourse.component.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _components_add_revenue_add_revenue_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-revenue/add-revenue.component */ "./src/app/modules/products/components/add-revenue/add-revenue.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//library

//general









var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _products_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _core_index__WEBPACK_IMPORTED_MODULE_4__["devextremeModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxTreeListModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_12__["vTranslateModule"]
            ],
            declarations: [_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], _components_add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"], _components_add_group_product_add_group_product_component__WEBPACK_IMPORTED_MODULE_9__["AddGroupProductComponent"], _components_add_unit_code_add_unit_code_component__WEBPACK_IMPORTED_MODULE_10__["AddUnitCodeComponent"], _components_add_wavehourse_add_wavehourse_component__WEBPACK_IMPORTED_MODULE_11__["AddWavehourseComponent"], _components_add_revenue_add_revenue_component__WEBPACK_IMPORTED_MODULE_13__["AddRevenueComponent"]],
            entryComponents: [
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"],
                _components_add_group_product_add_group_product_component__WEBPACK_IMPORTED_MODULE_9__["AddGroupProductComponent"],
                _components_add_unit_code_add_unit_code_component__WEBPACK_IMPORTED_MODULE_10__["AddUnitCodeComponent"],
                _components_add_wavehourse_add_wavehourse_component__WEBPACK_IMPORTED_MODULE_11__["AddWavehourseComponent"],
                _components_add_revenue_add_revenue_component__WEBPACK_IMPORTED_MODULE_13__["AddRevenueComponent"]
            ],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_7__["ProductsService"], _shared__WEBPACK_IMPORTED_MODULE_7__["ProductsResolver"]]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/modules/products/products.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/products/products.routing.ts ***!
  \******************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/products/components/index/index.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/app/modules/products/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], resolve: { configs: _shared__WEBPACK_IMPORTED_MODULE_3__["ProductsResolver"] } },
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
//# sourceMappingURL=products-products-module.js.map