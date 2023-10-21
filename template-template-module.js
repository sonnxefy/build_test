(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["template-template-module"],{

/***/ "./src/app/modules/template/components/bill-cash-register/bill-cash-register.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/template/components/bill-cash-register/bill-cash-register.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">CẬP NHẬT MẪU HÓA ĐƠN KHỞI TẠO TỪ MÁY TÍNH TIỀN</h4>\r\n</div>\r\n<div class=\"form-container\">\r\n  <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n    <dxi-item dataField=\"invoice_release_id\" [template]=\"'typeInvoice'\" cssClass=\"cash layout_input\">\r\n      <dxo-label text=\"Loại hóa đơn\"></dxo-label>\r\n      <dxi-validation-rule type=\"required\" message=\"Loại hóa đơn {{ _translate.VALIDATION.required }}\">\r\n      </dxi-validation-rule>\r\n    </dxi-item>\r\n    <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n      <dxi-item dataField=\"template_code\" [editorOptions]=\"{ readOnly: true}\" cssClass=\"cash layout_input\">\r\n        <dxo-label text=\"{{ 'GRID.INVOICE.template_code' | translate }}\"></dxo-label>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\" *ngIf=\"!isEdit\">\r\n        <dxo-label text=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\"></dxo-label>\r\n        <dxi-item [editorOptions]=\"{ disabled: true}\" dataField=\"series_short\">\r\n          <dxo-label [visible]=\"false\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"series_short2\"\r\n          [editorOptions]=\"{ mask: formatMaskSeries, maskRules: maskRules, maskChar: '_', onValueChanged: onChangeSeries , readOnly: isEdit}\"\r\n          cssClass=\"cash layout_input\">\r\n          <dxo-label [visible]=\"false\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\"\r\n            message=\"{{ 'GRID.INVOICE.invoice_series' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item dataField=\"invoice_series\" *ngIf=\"isEdit\" [editorOptions]=\"{readOnly: isEdit}\"\r\n        cssClass=\"cash layout_input\">\r\n        <dxo-label text=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\"></dxo-label>\r\n      </dxi-item>\r\n    </dxi-item>\r\n    <dxi-item dataField=\"json_data.name\" editorType=\"dxTextBox\" cssClass=\"cash layout_input\">\r\n      <dxo-label text=\"Tên đơn vị\"></dxo-label>\r\n      <dxi-validation-rule type=\"required\" message=\"Tên đơn vị {{ _translate.VALIDATION.required}}\">\r\n      </dxi-validation-rule>\r\n    </dxi-item>\r\n    <dxi-item dataField=\"json_data.business_address\" editorType=\"dxTextBox\" cssClass=\"cash layout_input\">\r\n      <dxo-label text=\"Địa chỉ\"></dxo-label>\r\n      <dxi-validation-rule type=\"required\" message=\"Địa chỉ {{ _translate.VALIDATION.required}}\">\r\n      </dxi-validation-rule>\r\n    </dxi-item>\r\n    <dxi-item dataField=\"json_data.phone\" editorType=\"dxTextBox\" cssClass=\"cash layout_input\">\r\n      <dxo-label text=\"Số điện thoại\"></dxo-label>\r\n    </dxi-item>\r\n    <div *dxTemplate=\"let d of 'typeInvoice'\">\r\n      <dx-select-box [dataSource]=\"typeinvoices\" displayExpr=\"name\" valueExpr=\"code\" [(value)]=\"frmData.invoice_type\"\r\n        searchEnabled=\"true\" (onItemClick)=\"changedTypeInvoice($event)\">\r\n      </dx-select-box>\r\n    </div>\r\n  </dx-form>\r\n  <div style=\"padding:20px; display: flex; justify-content: flex-end;\">\r\n    <dx-button appScrollToInvalid text=\"{{ _translate.CONTROLL.BUTTON.save}}\" [(icon)]=\"this._translate.ICONS.save\"\r\n      type=\"default\" validationGroup=\"formData\" (click)=\"ghi()\">\r\n    </dx-button>\r\n    <dx-button type=\"default\" [(icon)]=\"this._translate.ICONS.come_back\" (click)=\"dong()\"\r\n      text=\"{{ _translate.CONTROLL.BUTTON.come_back}}\"></dx-button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/template/components/bill-cash-register/bill-cash-register.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/template/components/bill-cash-register/bill-cash-register.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container{padding:20px}::ng-deep .cash.layout_input span.dx-field-item-label-content{width:117px !important}::ng-deep .template.invoice_series input{text-transform:uppercase}\n"

/***/ }),

/***/ "./src/app/modules/template/components/bill-cash-register/bill-cash-register.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/template/components/bill-cash-register/bill-cash-register.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BillCashRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillCashRegisterComponent", function() { return BillCashRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BillCashRegisterComponent = /** @class */ (function () {
    function BillCashRegisterComponent(authService, translate, templateService, router, bsModalRef) {
        var _this = this;
        this.authService = authService;
        this.translate = translate;
        this.templateService = templateService;
        this.router = router;
        this.bsModalRef = bsModalRef;
        this.frmData = new _modules_template_shared__WEBPACK_IMPORTED_MODULE_4__["ModifyModel"]();
        this.isDisplayKyHieu = false;
        this.isDisplayMauSo = false;
        this.typeinvoices = [];
        this.isEdit = false;
        this.onChangeSeries = function (e) {
            e.value.toUpperCase();
            _this.frmData["series_short2"] = e.value.toUpperCase();
            _this.frmData.invoice_series = _this.HinhThucHD + _this.namLapHD + "M" + e.value.toUpperCase();
            // let ts = this.frmData.invoice_series;
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.currentUser = this.authService.getCurrentUser();
    }
    BillCashRegisterComponent.prototype.ngOnInit = function () {
        this.typeinvoices =
            [
                { name: 'Hóa đơn GTGT', code: '01GTKT' },
                { name: 'Hóa đơn bán hàng ', code: '02GTTT' },
            ];
        this.formatMaskSeries = "TT";
        this.maskRules =
            {
                // "C": /[c|C|k|K]/,
                // "S": /[0-9]/,
                // "L": /[t|T|d|D|l|L|m|M|n|N|b|B|g|G|h|H]/,
                "T": /[A-Za-z]/
            };
        if (this.isEdit) {
        }
        else {
            var localData = localStorage.getItem('infoRegister');
            this.frmData.template_type = _core_index__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonMayTinhTien;
            this.frmData.is_decree_new = true;
            this.frmData.invoice_type = "01GTKT";
            this.frmData.template_code = "1";
            this.frmData.json_data.business_address = this.currentUser.account.business_address;
            this.frmData.json_data.name = this.currentUser.account.name;
            this.HinhThucHD = "C";
            // this.frmData.json_data.business_address = localData;
            // this.frmData.json_data.name = ;
            if (this.infoDangKy.is_invoice_with_code == "0") {
                this.frmData.is_invoice_with_code = false;
            }
            else if (this.infoDangKy.is_invoice_with_code == "1") {
                this.frmData.is_invoice_with_code = true;
            }
            this.namLapHD = moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).format("YYYY").slice(2, 4);
            var loaiHD = "M";
            // this.frmData.invoice_series = this.HinhThucHD + namLapHD + loaiHD;
            this.frmData["series_short"] = this.HinhThucHD + this.namLapHD + loaiHD;
            this.frmData["series_short2"] = '';
        }
    };
    BillCashRegisterComponent.prototype.onFieldDataChanged = function () {
        var ts = "";
    };
    BillCashRegisterComponent.prototype.dong = function () {
        this.bsModalRef.hide();
        // this.router.navigate(['/system/template']);
    };
    BillCashRegisterComponent.prototype.ghi = function () {
        var _this = this;
        setTimeout(function () {
            var data = JSON.parse(JSON.stringify(_this.frmData));
            if (_this.isEdit) {
                _this.editTT78(data);
            }
            else {
                _this.addTT78(data);
            }
        }, 300);
    };
    BillCashRegisterComponent.prototype.editTT78 = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        delete data.invoice_releases;
        delete data.series_short;
        delete data.series_short2;
        this.templateService.modifyNew(this.id, data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify('Sửa mẫu thành công', 'success');
                _this.dong();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
        });
    };
    BillCashRegisterComponent.prototype.addTT78 = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        delete data.series_short;
        delete data.series_short2;
        data.invoice_type = this.frmData.invoice_type;
        //   data.raw_file = this.templateService.raw_file;
        this.templateService.addTempt(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify('Thêm mới thành công', 'success');
                _this.id = rs.data.template.id;
                _this.frmData.invoice_type = rs.data.template.invoice_type;
                _this.dong();
                //    this.router.navigate(['/system/template']);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
        });
    };
    BillCashRegisterComponent.prototype.onClickMauSo = function () {
        this.isDisplayMauSo = !this.isDisplayMauSo;
    };
    BillCashRegisterComponent.prototype.onClickKyHieu = function () {
        this.isDisplayKyHieu = !this.isDisplayKyHieu;
    };
    BillCashRegisterComponent.prototype.changedTypeInvoice = function (data) {
        this.frmData.invoice_type = data.itemData.code;
        if (data.itemData.code == "01GTKT") {
            this.frmData.template_code = "1";
        }
        else if (data.itemData.code == "02GTTT") {
            this.frmData.template_code = "2";
        }
    };
    BillCashRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-cash-register',
            template: __webpack_require__(/*! ./bill-cash-register.component.html */ "./src/app/modules/template/components/bill-cash-register/bill-cash-register.component.html"),
            styles: [__webpack_require__(/*! ./bill-cash-register.component.scss */ "./src/app/modules/template/components/bill-cash-register/bill-cash-register.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_4__["TemplateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]])
    ], BillCashRegisterComponent);
    return BillCashRegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/template/components/index/index.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/template/components/index/index.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n  <div class=\"col-lg-8 option-header\">\r\n    <div class=\"pull-left\">\r\n      <!-- <form (ngSubmit)=\"onSubmit($event)\">\r\n        <dx-form id=\"infoForm\" [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item [label]=\"{text: 'Năm'}\" dataField=\"year\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: listTenYear,  displayExpr: 'name', valueExpr: 'value'}\">\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </form> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4 button-header\">\r\n    <div class=\"pull-right button-panel\">\r\n      <dx-button id=\"add\" (click)=\"add()\" icon=\"assets\\img\\icons\\TaoMau.png\"\r\n        text=\"{{ 'MENU.create_templates' | translate }}\" type=\"default\"></dx-button>\r\n      <dx-button id=\"add\" (click)=\"addMTT()\" icon=\"assets\\img\\icons\\TaoMau.png\"\r\n        text=\"{{ 'MENU.create_templates_mtt' | translate }}\" type=\"default\"></dx-button>\r\n      <!-- <dx-button id=\"edit\" (click)=\"edit()\" icon=\"assets\\img\\icons\\Sua.png\" text=\"{{ 'CONTROLL.BUTTON.edit' | translate }}\" type=\"default\" [disabled]=\"!(selectedRows.length == 1)\"></dx-button> -->\r\n      <dx-button id=\"delete\" (click)=\"delete(null)\" icon=\"assets\\img\\icons\\Xoa.png\"\r\n        text=\"{{ 'CONTROLL.BUTTON.delete' | translate }}\" type=\"default\" [disabled]=\"!selectedRows.length\"></dx-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSource\" (onSelectionChanged)=\"selectionChanged($event)\"\r\n  [showRowLines]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\"\r\n  [columnResizingMode]=\"true\" [columnAutoWidth]=\"true\">\r\n  <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n  </dxo-selection>\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <!-- Ngày tạo -->\r\n  <dxi-column dataField=\"created_at\" caption=\"{{ 'GRID.TEMPLATE.created_at' | translate }}\" width=\"120\" dataType=\"date\"\r\n    format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n  <!-- Loại hóa đơn -->\r\n  <dxi-column dataField=\"invoice_type\" caption=\"{{ 'GRID.TEMPLATE.invoice_type' | translate }}\" alignment=\"left\">\r\n    <dxo-lookup [dataSource]=\"invoiceTypeFilter\" valueExpr=\"value\" displayExpr=\"text\"></dxo-lookup>\r\n  </dxi-column>\r\n  <!-- Mẫu số -->\r\n  <dxi-column dataField=\"template_code\" caption=\"{{ 'GRID.INVOICE.template_code' | translate }}\" alignment=\"left\">\r\n  </dxi-column>\r\n  <!-- Ký hiệu -->\r\n  <dxi-column dataField=\"invoice_series\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" alignment=\"left\">\r\n  </dxi-column>\r\n  <!-- Lặp header -->\r\n  <dxi-column dataField=\"json_data.multipages_option\" caption=\"{{ _translate.CONTROLL.LABEL.repeat_header }}\"\r\n    alignment=\"center\" cellTemplate=\"repeatheader\" [width]=\"150\" [allowFiltering]=\"false\" [allowSorting]=\"false\"\r\n    headerCellTemplate=\"HeaderTemplate\" [filterOperations]=\"['contains']\">\r\n  </dxi-column>\r\n  <!-- Sử dụng -->\r\n  <dxi-column dataField=\"status\" caption=\"{{ _translate.CONTROLL.LABEL.template_used }}\" alignment=\"center\"\r\n    cellTemplate=\"action\" [width]=\"80\" [allowFiltering]=\"false\" [allowSorting]=\"false\"\r\n    [filterOperations]=\"['contains']\">\r\n  </dxi-column>\r\n\r\n  <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_3}}\"\r\n    width=\"{{_translate.GRID_WIDTH.hanh_dong_3}}\" alignment=\"center\"></dxi-column>\r\n\r\n  <div *dxTemplate=\"let d of 'view'\">\r\n    <a href=\"javascript:void(0)\" (click)=\"view(d.data)\"><img src=\"assets\\img\\icons\\XemHD.png\"></a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoice_form_name'\">\r\n    <p>{{ d.data.invoice_form_name || \"HĐ điện tử (TT32)\" }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\" *ngIf=\"d.data.template_type !=='HOA_DON_MAY_TINH_TIEN'\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n    <a *ngIf=\"d.data.is_html_template\" title=\"{{_translate.CONTROLL.BUTTON.copy}}\" class=\"copyIcon actionIcon\"\r\n      (click)=\"copy(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'action' \">\r\n    <div class=\"toggle normal\" (click)=\"changeStatus(d.data)\">\r\n      <input type=\"checkbox\" id=\"normal\" [checked]=\"d.data.status == 'HOAT_DONG'\">\r\n      <label class=\"toggle-item\"></label>\r\n    </div>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'repeatheader' \">\r\n    <div class=\"toggle normal\" (click)=\"changeRepateHeader(d.data)\">\r\n      <input *ngIf=\"d.data.is_html_template && d.data.is_decree_new && d.data.invoice_type !='01CTT56'\" type=\"checkbox\"\r\n        id=\"normal\" [checked]=\"d.data.json_data.multipages_option == '0' || !d.data.json_data.multipages_option\">\r\n      <label *ngIf=\"d.data.is_html_template && d.data.is_decree_new && d.data.invoice_type !='01CTT56'\"\r\n        class=\"toggle-item\"></label>\r\n    </div>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'HeaderTemplate'\">\r\n    <p style=\"cursor: pointer;\">\r\n      {{ _translate.CONTROLL.LABEL.repeat_header }} <img (click)=\"onClickHeader()\" id=\"link14\"\r\n        src=\"assets\\img\\icons\\Icon_Information.png\" style=\"margin-bottom: 3px;\"></p>\r\n    <dx-popover target=\"#link14\" position=\"top\" [width]=\"300\" [(visible)]=\"isDisplayHeader\">\r\n      <div *dxTemplate=\"let data of 'content'\">\r\n        <p>Chọn cấu hình này hiển thị thông tin header (người bán, người mua) ở trang sau đối với hóa đơn nhiều trang\r\n        </p>\r\n      </div>\r\n    </dx-popover>\r\n  </div>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\">\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<iframe id=\"after-iframe\" width=\"0%\" height=\"0px\"></iframe>"

/***/ }),

/***/ "./src/app/modules/template/components/index/index.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/template/components/index/index.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toggle{position:relative;display:inline-block;transition:all 0.3s ease}label.toggle-item{width:32px;background:#CCCCCC;height:18px;display:inline-block;border-radius:50px;position:relative;transition:all 0.3s ease;cursor:pointer}label.toggle-item:before{content:\"\";position:absolute;display:block;top:2px;left:2px;border-radius:50%;transition:0.3s ease}#normal:checked+label.toggle-item{background:#54cb0e}#normal:checked+label.toggle-item:before{left:16px}.normal label:before{content:\"\";position:absolute;border:none;width:14px;height:14px;background:#fff;transition:all 0.2s ease}#normal{height:32px;left:0;opacity:0;position:absolute;top:0;width:32px}:host::ng-deep .full-modal .modal-content{display:none !important}@media screen and (max-width: 1367px){.button-panel{width:472px}}\n"

/***/ }),

/***/ "./src/app/modules/template/components/index/index.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/template/components/index/index.component.ts ***!
  \**********************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _bill_cash_register_bill_cash_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bill-cash-register/bill-cash-register.component */ "./src/app/modules/template/components/bill-cash-register/bill-cash-register.component.ts");
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
    function IndexComponent(modalService, authService, router, templateService, translate, notifyService) {
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
        this.templateService = templateService;
        this.translate = translate;
        this.notifyService = notifyService;
        this.selectedRows = [];
        this.selectedItems = [];
        this.frmForm = {};
        this.templates = [];
        this.listTenYear = [{
                name: "Tất cả",
                value: 0
            }];
        this.arrColumns = [
            {
                name: 'columnSTT',
                value: 'valueSTT',
                class: 'center',
                height: "25px",
                title: "Số thứ tự",
                content: "1"
            },
            {
                name: 'name-1a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueMaHangHoa',
                class: 'name-1a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Mã hàng",
                content: "MH001"
            },
            {
                name: 'columnTenHangHoa',
                value: 'valueTenHangHoa',
                class: 'columnTenHangHoa',
                height: "25px",
                title: "Tên hàng hóa",
                content: "Hóa đơn điện tử"
            },
            {
                name: 'columnSoMay',
                value: 'valueSoMay',
                class: 'columnSoMay',
                height: "25px",
                title: "Số máy",
                content: "Q12P"
            },
            {
                name: 'columnSoKhung',
                value: 'valueSoKhung',
                class: 'columnSoKhung',
                height: "25px",
                title: "Số khung",
                content: "K123K"
            },
            {
                name: 'name-2a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueSolo',
                class: 'name-2a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Số lô",
                content: "SL001"
            },
            {
                name: 'name-3a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueHanDung',
                class: 'name-3a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Hạn dùng",
                content: "60 ngày"
            },
            {
                name: 'name-4a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueNuocSx',
                class: 'name-4a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Nước sản xuất",
                content: "Việt Nam"
            },
            {
                name: 'columnDonViTinh',
                value: 'valueDonViTinh',
                class: 'center',
                height: "25px",
                title: "Đơn vị tính",
                content: "Chiếc"
            },
            {
                name: 'columnSoLuong',
                value: 'valueSoLuong',
                class: 'number-center',
                height: "25px",
                title: "Số lượng",
                content: "1"
            },
            {
                name: 'columnDonGia',
                value: 'valueDonGia',
                class: 'number',
                height: "25px",
                title: "Đơn giá",
                content: "1.000.000"
            },
            {
                name: 'columnTienCK',
                value: 'valueTienCK',
                class: 'number',
                height: "25px",
                title: "Tiền chiết khấu",
                content: ""
            },
            {
                name: 'columnThanhTienChuaCK',
                value: 'valueThanhTienChuaCK',
                class: 'number',
                height: "25px",
                title: "Thành tiền chưa chiết khấu",
                content: "1.000.000"
            },
            {
                name: 'columnThanhTien',
                value: 'valueThanhTien',
                class: 'number',
                height: "25px",
                title: "Thành tiền",
                content: "1.000.000"
            },
            {
                name: 'columnThueSuatGTGT',
                value: 'valueThueSuatGTGT',
                class: 'number-center',
                height: "25px",
                title: "Thuế suất GTGT",
                content: "0"
            },
            {
                name: 'columnTienThueGTGT',
                value: 'valueTienThueGTGT',
                class: 'number',
                height: "25px",
                title: "Tiền thuế GTGT",
                content: "0"
            },
            {
                name: 'columnThanhTienSauThue',
                value: 'valueThanhTienSauThue',
                class: 'number',
                height: "25px",
                title: "Thành tiền sau thuế",
                content: "1.000.000"
            },
            {
                name: 'columnMaSo',
                value: 'valueMaSo',
                class: 'columnMaSo',
                height: "25px",
                title: "Mã số",
                content: "MS001"
            },
            {
                name: 'columnThucXuat',
                value: 'valueThucXuat',
                class: 'number-center',
                height: "25px",
                title: "Thực xuất",
                content: "10"
            },
            {
                name: 'columnThucNhap',
                value: 'valueThucNhap',
                class: 'number-center',
                height: "25px",
                title: "Thực nhập",
                content: "10"
            },
            {
                name: 'columnThueKhac',
                value: 'valueThueKhac',
                class: 'number-center',
                height: "25px",
                title: "Thuế khác",
                content: "1.000.000"
            },
            {
                name: 'columnPhiKhac',
                value: 'valuePhiKhac',
                class: 'number-center',
                height: "25px",
                title: "Phí khác",
                content: "1.000.000"
            },
            {
                name: 'name-5a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueDonHangHopDong',
                class: 'name-5a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Đơn hàng/ Hợp đồng",
                content: "OSGC-CT-2020"
            },
            {
                name: 'name-6a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueMaQuanLy',
                class: 'name-6a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Mã quản lý",
                content: "MQL-2020"
            },
            {
                name: 'columnDonGiaSauCK',
                value: 'valueDonGiaSauCK',
                class: 'number',
                height: "25px",
                title: "Đơn giá sau CK",
                content: "1.000.000"
            },
        ];
        this.invoiceTypeFilter = [
            {
                text: "Phiếu thu",
                value: "08HSPT"
            },
            {
                text: "Hóa đơn giá trị gia tăng",
                value: "01GTKT"
            },
            {
                text: "Hóa đơn bán hàng",
                value: "02GTTT"
            },
            {
                text: "Hoá đơn bán hàng (dành cho tổ chức, cá nhân trong khu phi thuế quan)",
                value: "07KPTQ"
            },
            {
                text: "Phiếu xuất kho hàng gửi bán đại lý",
                value: "04HGDL"
            },
            {
                text: "Phiếu xuất kho kiêm vận chuyển nội bộ",
                value: "03XKNB"
            },
            {
                text: "Chứng từ khấu trừ thuế thu nhập cá nhân",
                value: "01CTT56"
            },
            {
                text: "Biên lai điện tử",
                value: "BLP"
            },
        ];
        this.statusFilter = [
            {
                text: "Đã phát hành",
                value: "DA_TB_THUE"
            },
            {
                text: "Chờ phát hành",
                value: "CHUA_TB_THUE"
            },
            {
                text: "Đã hủy số",
                value: "DA_HUY_SO"
            }
        ];
        this.frmData = new _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__["ModifyModel"]();
        this.subXuatHoaDon = [];
        this.isDisplayHeader = false;
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.frmForm.year = 0;
        this.templateService.invoice_type = null;
        this.templateService.data = null;
        this.templateService.isCopy = false;
        this.templateService.istemplateOld = false;
        this.loadList();
        var currentYear = parseInt(moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format("YYYY"));
        for (var i = 0; i < 10; i++) {
            this.listTenYear.push({
                name: currentYear,
                value: currentYear
            });
            currentYear--;
        }
    };
    IndexComponent.prototype.loadList = function () {
        this.dataSource = {};
        this.dataSource.store = this.templateService.getAll();
    };
    // Chọn đối tượng trong màn hình danh sách
    IndexComponent.prototype.selectionChanged = function (data) {
        this.selectedItems = data.selectedRowsData;
    };
    IndexComponent.prototype.add = function () {
        this.router.navigate(['/system/template/init']);
    };
    IndexComponent.prototype.addMTT = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        this.templateService._getDataToTemplate().subscribe(function (rs) {
            if (rs.status == 'success') {
                var infoDangKy = rs.data;
                var initialState = {
                    invoice_releases: '',
                    infoDangKy: infoDangKy
                };
                _this.bsModalRef = _this.modalService.show(_bill_cash_register_bill_cash_register_component__WEBPACK_IMPORTED_MODULE_8__["BillCashRegisterComponent"], {
                    class: 'modal-lg', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    _this.loadList();
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.edit = function (data) {
        var _this = this;
        if (data.template_type === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].templatetype.HoaDonMayTinhTien) {
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
            this.templateService._getDataToTemplate().subscribe(function (rs) {
                if (rs.status == 'success') {
                    var infoDangKy = rs.data;
                    var initialState = {
                        frmData: data,
                        id: data.id,
                        isEdit: true,
                        invoice_releases: '',
                        infoDangKy: infoDangKy
                    };
                    _this.bsModalRef = _this.modalService.show(_bill_cash_register_bill_cash_register_component__WEBPACK_IMPORTED_MODULE_8__["BillCashRegisterComponent"], {
                        class: 'modal-lg', initialState: initialState, backdrop: 'static',
                        keyboard: false
                    });
                    _this.modalService.onHide.subscribe(function () {
                    });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
            });
        }
        else {
            var tempId_1 = data ? data.id : this.selectedRows[0];
            if (data.is_html_template) {
                this.notifyService.getRealeaseByTemplateId(tempId_1).subscribe(function (res) {
                    if (res.status === 'success') {
                        if (res.data.invoice_releases && res.data.invoice_releases.length) {
                            var lstRelease = res.data.invoice_releases.filter(function (p) { return p.release_status == "DA_TB_THUE" || p.release_status == "DA_HUY_SO"; });
                            if (lstRelease && lstRelease.length > 0)
                                _this.templateService.istemplateOld = true;
                        }
                        _this.router.navigate(["/system/template/new"], { queryParams: { id: tempId_1 } });
                    }
                }, function (error) { return _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(error, 'error'); }, function () { return _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading(); });
            }
            else {
                this.router.navigate(["/system/template/old"], { queryParams: { id: tempId_1 } });
            }
        }
    };
    IndexComponent.prototype.copy = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var tempId = data ? data.id : this.selectedRows[0];
        this.templateService.show(tempId).subscribe(function (rs) {
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
            if (rs.status == "success") {
                var data_1 = rs.data.template;
                _this.templateService.invoice_type = data_1.invoice_type;
                _this.templateService.data = data_1;
                _this.templateService.isCopy = true;
                _this.router.navigate(['system/template/new']);
            }
            else {
                _this.router.navigate(['/system/template']);
                return null;
            }
        });
        // if (data.is_html_template) {
        //   this.router.navigate([`/system/template/new`], { queryParams: { id: tempId } });
        // } else {
        //   this.router.navigate([`/system/template/old`], { queryParams: { id: tempId } });
        // }
    };
    IndexComponent.prototype.delete = function (data) {
        var _this = this;
        var ids = data ? data.id : this.selectedRows.join(',');
        var result = _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].confirm("Bạn có chắc chắn muốn xóa đối tượng đã chọn?", "Thông báo");
        result.then(function (dialogResult) {
            if (dialogResult) {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
                _this.templateService.delete(ids).subscribe(function (rs) {
                    if (rs.status === "success") {
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Xóa dữ liệu thành công", 'success');
                        _this.loadList();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                });
            }
        });
    };
    IndexComponent.prototype.view = function (item) {
        var win = window.open("", "", "width=200, height=100");
        win.document.body.innerHTML = "Đang tải dữ liệu!";
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        this.templateService.view(item.id).subscribe(function (rs) {
            var str_html = "";
            if (rs[0].data) {
                str_html += "<a title=\"Download File\" style=\"font-family: 'Verdana';color: #333;font-weight: 600;float:right; margin-bottom: 5px;\n      margin-right: 20px;\" download=\"hoadonmau.png\" href=\"data:image/png;base64," + rs[0].data.template.jpg_file + "\">T\u1EA3i m\u1EABu g\u1ED1c</a>";
            }
            if (rs[1].data) {
                str_html += "<a title=\"Download File\" style=\"font-family: 'Verdana';color: #333;font-weight: 600;float:right; margin-bottom: 5px;\n        margin-right: 20px;\" download=\"hoadonchuyendoi.png\" href=\"data:image/png;base64," + rs[1].data.template.jpg_file + "\">T\u1EA3i m\u1EABu chuy\u1EC3n \u0111\u1ED5i</a>";
            }
            if (rs[0].data) {
                str_html += "<div style=\"text-align: center;\"><img src=\"data:image/png;base64," + rs[0].data.template.jpg_file + "\"></div>";
            }
            if (rs[1].data) {
                str_html += "<div style=\"text-align: center; margin-top: 15px;\"><img src=\"data:image/png;base64," + rs[1].data.template.jpg_file + "\"></div>";
            }
            win.document.body.innerHTML = str_html;
            win.resizeTo(screen.availWidth, screen.availHeight);
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
        });
        // let win = window.open("", "Preview", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
        // win.document.body.innerHTML = `<div style="text-align: center;"><img src="data:image/png;base64,${item.html_file}"></div>`;
    };
    IndexComponent.prototype.onSubmit = function (e) {
    };
    IndexComponent.prototype.changeStatus = function (data) {
        var _this = this;
        var textContent = "";
        var status = "";
        if (data.status == 'HOAT_DONG') {
            textContent = this._translate.NOTIFY.off_status;
            status = "KHONG_HOAT_DONG";
        }
        else {
            textContent = this._translate.NOTIFY.on_status;
            status = "HOAT_DONG";
        }
        var setInvoiceDate = _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].confirm(textContent, this._translate.NOTIFY.notify);
        setInvoiceDate.then(function (dialog) {
            if (!dialog) {
                return;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
                var obj = {
                    id: data.id,
                    status: status
                };
                _this.templateService.updateStatusTemplate(obj).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        data.status = data.status == 'HOAT_DONG' ? "KHONG_HOAT_DONG" : "HOAT_DONG";
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                });
            }
        });
        // this.confirmService.confirm(textContent, '', sEnum.modal_confirm.confirm, sEnum.objBtn.isBtnYes, sEnum.objBtn.isBtnNo).toPromise().then(res => {
        //   if (res == sEnum.objBtn.isBtnYes) {
        //     Library.showloading();
        //     this.template = {
        //       'commercial_template': {
        //         'id': data.id,
        //         'status': data.status == 1 ? 0 : 1,
        //       }
        //     };
        //     this.createSampleCommercialContractService.changeTemplateStatus(this.template).toPromise().then(res => {
        //       if (res.status == sEnum.statusApi.success) {
        //         data.status = (data.status == 1) ? '0' : '1'
        //         Library.hideloading();
        //       } else {
        //         Library.notify(res.message, 'error');
        //       }
        //     });
        //   } else {
        //     return;
        //   }
        // });
    };
    IndexComponent.prototype.changeRepateHeader = function (oMauSo) {
        var _this = this;
        var textContent = "";
        var multipages_option = "";
        if (oMauSo.json_data.multipages_option == '0' || !oMauSo.json_data.multipages_option) {
            textContent = this._translate.NOTIFY.off_header;
            multipages_option = "1";
        }
        else {
            textContent = this._translate.NOTIFY.on_header;
            multipages_option = "0";
        }
        this.valueTempt = multipages_option;
        var setInvoiceDate = _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].confirm(textContent, this._translate.NOTIFY.notify);
        setInvoiceDate.then(function (dialog) {
            if (!dialog) {
                return;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
                var sub_1 = _this.templateService.show(oMauSo.id).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        var data = rs.data;
                        var dateTempt = data.template;
                        _this.loadTemplate(dateTempt);
                        var tempt = _this.TaoMauDayLen();
                        _this.goiApiTaoMau(oMauSo, tempt);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, 'error', 5000);
                    }
                }, function (err) { }, function () {
                    sub_1.unsubscribe();
                });
            }
        });
    };
    IndexComponent.prototype.goiApiTaoMau = function (oMauSo, tempt) {
        var _this = this;
        this.subXuatHoaDon = this.templateService.modifyNew(oMauSo.id, tempt, true).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Chuyển đổi mẫu thành công", 'success', 5000);
                if (oMauSo.json_data.multipages_option == '0' || !oMauSo.json_data.multipages_option) {
                    oMauSo.json_data.multipages_option = "1";
                }
                else {
                    oMauSo.json_data.multipages_option = "0";
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, 'error', 5000);
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
            _this.subXuatHoaDon.unsubscribe();
        });
    };
    IndexComponent.prototype.loadTemplate = function (dateTempt) {
        this.frmData.fillData(dateTempt, "", true, true);
        var raw_file_Decode = Base64.decode(dateTempt.raw_file);
        var raw_file_Parse = JSON.parse(raw_file_Decode);
        this.dataPreview = raw_file_Parse.html + "</html>";
        this.watermark_image_default = raw_file_Parse.watermark_image_default;
        this.watermark_image = raw_file_Parse.watermark_image;
        this.footer = raw_file_Parse.footer;
        this._htmlAttach = raw_file_Parse.html_attach;
        this.genCreateTemplate();
    };
    IndexComponent.prototype.genCreateTemplate = function () {
        //preview
        this.iframeF = document.getElementById('after-iframe');
        this.iframeF.contentDocument.open("text/html", "replace");
        this.iframeF.contentDocument.write(this.dataPreview);
        this.iframeF.contentDocument.close();
        this.frmData.json_data.multipages_option = this.valueTempt;
        if (this.frmData.json_data.multipages_option == "1") {
            var tBody = $('#after-iframe').contents().find(".report-body");
            tBody.css('display', 'table-row-group');
            var tDetailS1 = $('#after-iframe').contents().find(".detail-sumary1");
            var tDetailS2 = $('#after-iframe').contents().find(".detail-sumary2");
            tBody.after("<tbody class=\"t-body-sign\" style=\"display: table-footer-group;page-break-inside: avoid;page-break-after: auto !important;\"></tbody>");
            var tBodySign = $('#after-iframe').contents().find(".t-body-sign");
            tBodySign.append(tDetailS1);
            tBodySign.append(tDetailS2);
        }
        else if (this.frmData.json_data.multipages_option == "0") {
            var tBody = $('#after-iframe').contents().find(".report-body");
            tBody.css('display', 'table-footer-group');
            var tDetailS1 = $('#after-iframe').contents().find(".detail-sumary1");
            var tDetailS2 = $('#after-iframe').contents().find(".detail-sumary2");
            tBody.append(tDetailS1);
            tBody.append(tDetailS2);
            var tBodySign = $('#after-iframe').contents().find(".t-body-sign");
            tBodySign.remove();
        }
        if (this.frmData.json_data.borderColor)
            this.currentBold = this.frmData.json_data.borderColor;
        else {
            this.currentBold = "#776b6b";
            this.frmData.json_data.borderColor = "#776b6b";
        }
    };
    IndexComponent.prototype.TaoMauDayLen = function () {
        $("#after-iframe").contents().find('#tthanghoa').empty();
        // /////// Font Hàng hóa
        var name1 = $('#after-iframe').contents().find('.name-1a783984-576d-c322-7843-bdacf97ac189').css("display");
        var name2 = $('#after-iframe').contents().find('.name-2a783984-576d-c322-7843-bdacf97ac189').css("display");
        var name3 = $('#after-iframe').contents().find('.name-3a783984-576d-c322-7843-bdacf97ac189').css("display");
        var name4 = $('#after-iframe').contents().find('.name-4a783984-576d-c322-7843-bdacf97ac189').css("display");
        var name5 = $('#after-iframe').contents().find('.name-5a783984-576d-c322-7843-bdacf97ac189').css("display");
        var name6 = $('#after-iframe').contents().find('.name-6a783984-576d-c322-7843-bdacf97ac189').css("display");
        // /////// Font Hàng hóa
        var vienBangHangHoa = '#tbDetail .detail-data td:last-child{border-color:' + this.currentBold + '}' + '#tbDetail td{border-color:' + this.currentBold + '}' + '#tbDetail th {border-color:' + this.currentBold + '}' + '#tbDetail .detail-header th:last-child {border-color:' + this.currentBold + '}' + '#tbDetail td {border-color:' + this.currentBold + '}';
        if (this.frmData.json_data.multipages_option == "1")
            vienBangHangHoa = '#tbDetail .detail-data td:last-child{border-color:' + this.currentBold + ';border-top-color:' + '#dfdfdf' + '}' + '#tbDetail th {border-color:' + this.currentBold + '}' + '#tbDetail .detail-header th:last-child {border-color:' + this.currentBold + '}' + '#tbDetail td {border-color:' + this.currentBold + '}' + '#tbDetail .detail-data td {border-width:1px 0px 1px 1px;border-top-color:' + '#dfdfdf' + '}' + '#tbDetail .detail-sumary td {border-width:1px 1px 1px 1px;border-top-color:' + '#dfdfdf' + '}';
        $("#after-iframe").contents().find('#tthanghoa').html('.name-1a783984-576d-c322-7843-bdacf97ac189{display:' + name1 + '}.name-2a783984-576d-c322-7843-bdacf97ac189{display:' + name2 + '}.name-3a783984-576d-c322-7843-bdacf97ac189{display:' + name3 + '}.name-4a783984-576d-c322-7843-bdacf97ac189{display:' + name4 + '}.name-5a783984-576d-c322-7843-bdacf97ac189{display:' + name5 + '}.name-6a783984-576d-c322-7843-bdacf97ac189{display:' + name6 + '}' + '.middle-box {border-color:' + this.currentBold + '}' + '.title-middle-box {border-color:' + this.currentBold + '}' + '.line-table-title {border-color:' + this.currentBold + '}' + '.border-right {border-color:' + this.currentBold + '}' + '.line-table {border-color:' + this.currentBold + '}' + vienBangHangHoa + this.styleFontInvoice());
        // ///////
        var data = JSON.parse(JSON.stringify(this.frmData));
        var dataPreviews = "<html xmlns:inv=\"http://laphoadon.gdt.gov.vn/2014/09/invoicexml/v1\" xmlns:user=\"http://mycompany.com/mynamespace\"\nxmlns:sign=\"http://www.w3.org/2000/09/xmldsig#\">" + this.iframeF.contentDocument.documentElement.innerHTML;
        var rawfile = {
            watermark_image_default: this.watermark_image_default,
            watermark_image: this.watermark_image,
            html: dataPreviews,
            footer: this.footer
        };
        if (this._htmlAttach)
            rawfile["html_attach"] = this._htmlAttach;
        data.raw_file = Base64.encode(JSON.stringify(rawfile));
        return data;
    };
    IndexComponent.prototype.styleFontInvoice = function () {
        var result = '';
        this.arrColumns.forEach(function (item) {
            var underline = $('#after-iframe').contents().find('.' + item.value).css("text-decoration");
            var styleUnderLine = "none";
            if (underline)
                styleUnderLine = underline.split(" ");
            var color = $('#after-iframe').contents().find('.' + item.value).css("color");
            var fontFamily = $('#after-iframe').contents().find('.' + item.value).css("font-family");
            var fontSize = $('#after-iframe').contents().find('.' + item.value).css("font-size");
            var fontWeight = $('#after-iframe').contents().find('.' + item.value).css("font-weight");
            var fontStyle = $('#after-iframe').contents().find('.' + item.value).css("font-style");
            var wordSpace = $('#after-iframe').contents().find('.' + item.value).css("word-spacing");
            var display = $('#after-iframe').contents().find('.' + item.value).css("display");
            var width = $('#after-iframe').contents().find('.' + item.value).css("width");
            var textAlign = $('#after-iframe').contents().find('.' + item.value).css("text-align");
            var important = "";
            if (display == "block")
                important = "!important";
            result += '.' + item.value + '{color:' + color + ';font-family:' + fontFamily + ';font-size:' + fontSize + ';font-weight:' + fontWeight + ';font-style:' + fontStyle + ';text-decoration:' + styleUnderLine[0] + ';word-spacing:' + wordSpace + ';display:' + display + ' ' + important + ';width:' + width + ';text-align:' + textAlign + '}';
        });
        return result;
    };
    /* Hướng dẫn */
    IndexComponent.prototype.onClickHeader = function () {
        this.isDisplayHeader = !this.isDisplayHeader;
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-template-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/template/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/template/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__["TemplateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/template/components/init/init.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/template/components/init/init.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n    <div class=\"col-md-2 select-area\">\r\n        <div class=\"label\">Áp dụng theo</div>\r\n        <dx-select-box class=\"selectbox\" [dataSource]=\"typeCirculars\" [(value)]=\"type_circulars\" valueExpr=\"code\" displayExpr=\"name\"\r\n            (onValueChanged)=\"typeCircularChange($event)\">\r\n        </dx-select-box>\r\n    </div>\r\n    <div class=\"col-md-2 select-area\">\r\n        <div class=\"label\">{{ 'CONTROLL.LABEL.invoice_type' | translate }}</div>\r\n        <dx-select-box class=\"selectbox\" [dataSource]=\"invoiceTypes\" [(value)]=\"invoice_type\" valueExpr=\"code\" displayExpr=\"name\"\r\n            (onValueChanged)=\"invoiceTypeChange($event)\" placeholder=\"{{ 'CONTROLL.LABEL.choose_invoice_type' | translate }}\">\r\n        </dx-select-box>\r\n    </div>\r\n    <div class=\"col-md-2 select-area\">\r\n        <div class=\"label\">{{ 'CONTROLL.LABEL.template_type' | translate }}</div>\r\n        <dx-select-box class=\"selectbox\" [dataSource]=\"templateTypes\" [(value)]=\"template_type\" valueExpr=\"code\" displayExpr=\"name\"\r\n            (onValueChanged)=\"templateTypeChange($event)\" placeholder=\"{{ 'CONTROLL.LABEL.choose_template_type' | translate }}\">\r\n        </dx-select-box>\r\n    </div>\r\n    <div class=\"col-md-2 select-area\">\r\n        <div class=\"label\">{{ 'CONTROLL.LABEL.vat_type' | translate }}</div>\r\n        <dx-select-box class=\"selectbox\" [dataSource]=\"vatTypes\" [(value)]=\"vat_type\" valueExpr=\"code\" displayExpr=\"name\"\r\n            (onValueChanged)=\"vatTypeChange($event)\" placeholder=\"{{ 'CONTROLL.LABEL.choose_vat_type' | translate }}\">\r\n        </dx-select-box>\r\n    </div>\r\n    <div class=\"col-md-2 select-area\">\r\n        <div class=\"label\">{{ 'CONTROLL.LABEL.language' | translate }}</div>\r\n        <dx-select-box class=\"selectbox\" [dataSource]=\"languages\" [(value)]=\"language\" valueExpr=\"code\" displayExpr=\"name\"\r\n            (onValueChanged)=\"languageChange($event)\" placeholder=\"{{ 'CONTROLL.LABEL.choose_language' | translate }}\">\r\n        </dx-select-box>\r\n    </div>\r\n    <div class=\"col-md-2 select-area\">\r\n        <div class=\"label\">{{ 'CONTROLL.LABEL.paper_size' | translate }}</div>\r\n        <dx-select-box class=\"selectbox\" [dataSource]=\"subPaperSizes\" [(value)]=\"papersize\" valueExpr=\"code\" displayExpr=\"name\"\r\n            (onValueChanged)=\"papersizeChange($event)\">\r\n        </dx-select-box>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div *ngFor=\"let item of tabs[0].items\" class=\"col-md-4 image-gallery\">\r\n        <div class=\"thumbnail\">\r\n            <a href=\"javascript:void(0)\" (click)=\"chosseTemplate(item)\">\r\n                <img src=\"data:image/png;base64,{{item.jpg_file}}\" class=\"img-thumbnail\" style=\"width:100%\">\r\n                <div class=\"caption\">\r\n                    <p style=\"text-align: center;\">{{ item.display_name || item.invoice_type }}</p>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- <dx-tab-panel\r\n      #tabPanel\r\n      [dataSource]=\"tabs\"\r\n      [selectedIndex]=\"0\"\r\n      [loop]=\"false\"\r\n      [animationEnabled]=\"false\"\r\n      [swipeEnabled]=\"true\"\r\n      (onSelectionChanged)=\"selectTab($event)\"\r\n      >\r\n      <div *dxTemplate=\"let tab of 'title'\">\r\n          <span>{{tab.title}}</span>\r\n      </div>\r\n      <div *dxTemplate=\"let tab of 'item'\">\r\n          <div class=\"container-fluid tabpanel-item\">\r\n              <div class=\"row\">\r\n                  <div *ngFor=\"let item of tab.items\" class=\"col-md-4 image-gallery\">\r\n                      <div class=\"thumbnail\">\r\n                          <a href=\"javascript:void(0)\" (click)=\"chosseTemplate(item)\">\r\n                              <img src=\"data:image/png;base64,{{item.jpg_file}}\" class=\"img-thumbnail\" style=\"width:100%\"> \r\n                              <div class=\"caption\">\r\n                                  <p style=\"text-align: center;\">{{ item.name || item.invoice_type }}</p>\r\n                              </div>\r\n                          </a>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      </dx-tab-panel> -->\r\n</div>"

/***/ }),

/***/ "./src/app/modules/template/components/init/init.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/template/components/init/init.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-header{padding-top:10px;padding-bottom:20px}.list-header h2{padding-top:10px}.list-header .list-title{color:#0e76bc;font-weight:600;font-size:12pt}.list-header .select-area{margin-top:10px}#gridContainer{min-height:469px}.image-gallery{margin-bottom:15px}.label{font-weight:500;color:#0d11f1;padding-bottom:5px}.selectbox{height:29px}\n"

/***/ }),

/***/ "./src/app/modules/template/components/init/init.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/template/components/init/init.component.ts ***!
  \********************************************************************/
/*! exports provided: InitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitComponent", function() { return InitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InitComponent = /** @class */ (function () {
    function InitComponent(authService, route, router, templateService, translate) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.templateService = templateService;
        this.translate = translate;
        this.tabs = [];
        this.offsetEntity = 4;
        this.endLoad = false;
        this.invoiceTypes = [];
        this.templateTypesCurrent = [
            {
                name: "Mẫu cơ bản",
                code: "MAU_CO_BAN"
            },
            {
                name: "Thư xác nhận thu nhập",
                code: "THU_XAC_NHAN_THU_NHAP"
            },
            {
                name: "Hóa đơn máy tính tiền",
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.HoaDonKhoiTaoTumayTinhTien
            },
            {
                name: "Phiếu tính tiền",
                code: 'PHIEU_THU_MAY_TINH_TIEN'
            },
            {
                name: "Hóa đơn bệnh viện",
                code: "HOA_DON_BENH_VIEN"
            },
            {
                name: "Hóa đơn điện nước",
                code: "HOA_DON_DIEN_NUOC"
            },
            {
                name: "Hóa đơn Logistic",
                code: "HOA_DON_LOGISTIC"
            },
            {
                name: "Hóa đơn thuế nhà thầu",
                code: "HOA_DON_THUE_NHA_THAU"
            },
            {
                name: "Hóa đơn vé máy bay",
                code: "HOA_DON_VE_MAY_BAY"
            },
            {
                name: "Hóa đơn khối trường học",
                code: "HOA_DON_KHOI_TRUONG_HOC"
            },
            {
                name: "Hóa đơn nhà hàng, khách sạn",
                code: "HOA_DON_NHA_HANG_KHACH_SAN"
            },
            {
                name: "Hóa đơn trung tâm đăng kiểm",
                code: "HOA_DON_DANG_KIEM"
            },
            {
                name: "Hóa đơn xăng dầu",
                code: "HOA_DON_XANG_DAU"
            },
            {
                name: "Hóa đơn bất động sản",
                code: "HOA_DON_BAT_DONG_SAN"
            },
            {
                name: "Hóa đơn kinh doanh xe",
                code: "HOA_DON_KINH_DOANH_XE"
            },
            {
                name: "Hóa đơn kiêm tờ khai hoàn thuế",
                code: "HOA_DON_KIEM_TO_KHAI_HOAN_THUE"
            },
            {
                name: "Khác",
                code: "KHAC"
            },
        ];
        this.vatTypes = [
            {
                name: "Mẫu một loại thuế",
                code: "MAU_MOT_LOAI_THUE"
            },
            {
                name: "Mẫu nhiều loại thuế",
                code: "MAU_NHIEU_LOAI_THUE"
            },
        ];
        this.languages = [
            {
                name: "Tiếng việt",
                code: "VI"
            },
            {
                name: "Song ngữ(Việt-Anh)",
                code: "EN"
            },
        ];
        this.papersizes = [
            {
                name: "A4 dọc",
                code: "A4_DOC"
            },
            {
                name: "A4 ngang",
                code: "A4_NGANG"
            },
            {
                name: "A5 ngang",
                code: "A5_NGANG"
            },
        ];
        this.typeCirculars = [
            {
                name: "Thông tư 32",
                code: "THONG_TU_32"
            },
            {
                name: "Thông tư 78",
                code: "THONG_TU_78"
            },
        ];
        this.billPaperSizes = [];
        this.receiptTypeArray = [];
        this.ds_loai_ve = [];
        this.invoice_type = "01GTKT";
        this.template_type = "MAU_CO_BAN";
        this.arrayTemplate = ["MAU_CO_BAN"];
        this.vat_type = "MAU_MOT_LOAI_THUE";
        this.language = "EN";
        this.papersize = "A4_DOC";
        this.type_circulars = "THONG_TU_78";
        this.is_multi_vat = false;
        this.vnArray = [];
        this.findData = {
            invoice_type: this.invoice_type,
            template_type: this.arrayTemplate,
            is_multi_vat: this.is_multi_vat,
            language: this.language,
            paper_size: this.papersize,
            type_circulars: this.type_circulars
        };
        translate.use(this.authService.getLanguage());
        this._translate = this.authService.getTranslate();
    }
    InitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loadDataDefault();
        this.templateTypes = this.templateTypesCurrent.filter(function (item) { return item.code !== "THU_XAC_NHAN_THU_NHAP"; });
        this.subPaperSizes = this.papersizes;
        this.route.data.subscribe(function (data) {
            _this.tabs[0] = {
                title: "Kho mẫu hóa đơn dùng chung",
                items: data.init
            };
            _this.tabs[1] = {
                title: "Kho mẫu hóa đơn của đơn vị",
                items: []
            };
        });
        $('.main').scroll(function () {
            var a = $('.main').scrollTop() + $('.main').height() - $('.main')[0].scrollHeight;
            if (Math.round(a * 1000) / 1000 == 0) {
                if (!_this.endLoad) {
                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                    var sub_1 = _this.templateService.getTemplate(_this.findData, 3, _this.offsetEntity).subscribe(function (rs) {
                        if (rs.status == 'success') {
                            if (rs.data.list_invoice_form.length == 0) {
                                _this.endLoad = true;
                            }
                            rs.data.list_invoice_form.forEach(function (item) {
                                _this.tabs[0].items.push(item);
                            });
                            _this.offsetEntity += 3;
                        }
                        else {
                            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                        }
                    }, function (err) { }, function () {
                        sub_1.unsubscribe();
                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                    });
                }
            }
        });
    };
    InitComponent.prototype.selectTab = function (e) {
        var _this = this;
        if (e.addedItems[0].title == "Kho mẫu hóa đơn của đơn vị") {
            if (!this.tabs[1].items.length) {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                this.templateService.getUnitTemplate(this.invoice_type).subscribe(function (rs) {
                    if (rs.status == 'success') {
                        _this.tabs[1].items = rs.data.templates;
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                });
            }
        }
    };
    InitComponent.prototype.loadData = function (findData) {
        // Library.showloading();
        // this.templateService.getAllTemplate(invoice_type).subscribe(rs => {
        //   this.tabs[0] = {
        //     title: "Kho mẫu hóa đơn dùng chung",
        //     items: rs[0].data.list_invoice_form
        //   };
        var _this = this;
        //   this.tabs[1] = {
        //     title: "Kho mẫu hóa đơn của đơn vị",
        //     items: rs[1].data.templates
        //   };
        // }, err => {}, () => {
        //   Library.hideloading();
        // });
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.templateService.getTemplate(this.findData, 3, 1).subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.tabs[0].items = rs.data.list_invoice_form;
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    InitComponent.prototype.chosseTemplate = function (item) {
        var _this = this;
        if (item.json_data) {
            // this.router.navigate([`system/template/${item.id}`]);
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            this.templateService.show(item.id).subscribe(function (rs) {
                if (rs.status == 'success') {
                    var data = rs.data.template;
                    if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTKT01 || _this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTTT02) {
                        if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTKT01)
                            _this.templateService.invoice_type = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.GTKT01;
                        if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTTT02)
                            _this.templateService.invoice_type = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.GTTT02;
                    }
                    else
                        _this.templateService.invoice_type = _this.invoice_type;
                    _this.templateService.raw_file = data.raw_file;
                    _this.templateService.html_file = data.html_file;
                    _this.templateService.template_id = data.id;
                    _this.templateService.number_of_row = data.number_of_row;
                    _this.templateService.template_type = data.template_type;
                    _this.templateService.paper_size = data.paper_size;
                    //trường thêm
                    _this.templateService.is_multi_vat = data.is_multi_vat;
                    _this.templateService.is_multi_pages = data.is_multi_pages;
                    _this.templateService.seller_sign_position = data.seller_sign_position;
                    _this.templateService.buyer_sign_position = data.buyer_sign_position;
                    _this.templateService.is_discount = data.is_discount;
                    _this.templateService.invoice_type_begin = data.release_info ? data.release_info.invoice_type : "";
                    _this.templateService.invoice_series_begin = data.release_info ? data.release_info.invoice_series : "";
                    _this.templateService.template_code_begin = data.release_info ? data.release_info.template_code : "";
                    _this.router.navigate(['system/template/create']);
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var tax_refund_form_1 = false;
            if (item.template_type == "HOA_DON_KIEM_TO_KHAI_HOAN_THUE")
                tax_refund_form_1 = true;
            var obj = {
                id: item.id,
                tax_refund_form: tax_refund_form_1
            };
            this.templateService.showShareTemplate(obj).subscribe(function (rs) {
                if (rs.status == 'success') {
                    var data = rs.data.invoice_form;
                    if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTKT01 || _this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTTT02) {
                        if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTKT01)
                            _this.templateService.invoice_type = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.GTKT01;
                        if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTTT02)
                            _this.templateService.invoice_type = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.GTTT02;
                    }
                    else
                        _this.templateService.invoice_type = _this.invoice_type;
                    _this.templateService.raw_file = data.raw_file;
                    _this.templateService.html_file = data.html_file;
                    _this.templateService.template_id = data.id;
                    _this.templateService.number_of_row = data.number_of_row;
                    _this.templateService.template_type = data.template_type;
                    _this.templateService.paper_size = data.paper_size;
                    //trường thêm
                    _this.templateService.is_multi_vat = data.is_multi_vat;
                    _this.templateService.is_multi_pages = data.is_multi_pages;
                    _this.templateService.seller_sign_position = data.seller_sign_position;
                    _this.templateService.buyer_sign_position = data.buyer_sign_position;
                    _this.templateService.is_discount = data.is_discount;
                    _this.templateService.invoice_type_begin = data.release_info ? data.release_info.invoice_type : "";
                    _this.templateService.invoice_series_begin = data.release_info ? data.release_info.invoice_series : "";
                    _this.templateService.template_code_begin = data.release_info ? data.release_info.template_code : "";
                    _this.templateService.type_circular = data.type_circulars;
                    if (tax_refund_form_1) {
                        _this.templateService.raw_file_attach = data.raw_file_temp;
                        _this.templateService.html_file_attach = data.raw_file_temp;
                    }
                    _this.router.navigate(['system/template/new']);
                    // this.router.navigate(['system/template/old']);
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
    };
    InitComponent.prototype.invoiceTypeChange = function (e) {
        this.endLoad = false;
        this.offsetEntity = 4;
        this.invoice_type = e.value;
        this.papersize = "A4_DOC";
        this.templateTypes = this.templateTypesCurrent.filter(function (item) { return item.code !== "THU_XAC_NHAN_THU_NHAP"; });
        this.setLanguageByTypeInvoice();
        switch (this.invoice_type) {
            case _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.CTT56:
                this.templateTypes = this.templateTypesCurrent.filter(function (item) { return item.code === "MAU_CO_BAN" || item.code === "THU_XAC_NHAN_THU_NHAP"; });
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.BLP:
                this.templateTypes = this.receiptTypeArray;
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTKT01:
            case _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTTT02:
                this.templateTypes = this.ds_loai_ve;
                this.papersize = _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].paperSizes.A80Doc;
                break;
        }
        if (this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HSPT || this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.BLP)
            this.papersize = "A5_NGANG";
        if (this.template_type != this.templateTypes[0].code)
            this.template_type = this.templateTypes[0].code;
        else {
            this.findData = {
                invoice_type: this.invoice_type,
                template_type: this.arrayTemplate,
                is_multi_vat: this.is_multi_vat,
                language: this.language,
                paper_size: this.papersize,
                type_circulars: this.type_circulars
            };
            this.loadData(this.findData);
        }
    };
    InitComponent.prototype.typeCircularChange = function (e) {
        this.endLoad = false;
        this.offsetEntity = 4;
        this.type_circulars = e.value;
        this.findData = {
            invoice_type: this.invoice_type,
            template_type: this.arrayTemplate,
            is_multi_vat: this.is_multi_vat,
            language: this.language,
            paper_size: this.papersize,
            type_circulars: this.type_circulars
        };
        this.loadData(this.findData);
    };
    InitComponent.prototype.templateTypeChange = function (e) {
        this.endLoad = false;
        this.offsetEntity = 4;
        this.template_type = e.value;
        this.arrayTemplate = [];
        this.arrayTemplate.push(this.template_type);
        if (e.value == "HOA_DON_VE_MAY_BAY" || e.value == "HOA_DON_KIEM_TO_KHAI_HOAN_THUE") {
            this.vat_type = "MAU_NHIEU_LOAI_THUE";
            this.is_multi_vat = true;
            if (e.value == "HOA_DON_VE_MAY_BAY") {
                this.arrayTemplate.push("HOA_DON_VE_MAY_BAY_HOAN_TIEN");
                this.arrayTemplate.push("HOA_DON_VE_MAY_BAY_THU_TIEN");
                this.arrayTemplate.push("HOA_DON_VE_MAY_TONG_HOP");
                this.arrayTemplate.push("HOA_DON_VE_MAY_BAY_CHUNG");
                this.arrayTemplate.push("HOA_DON_VE_MAY_BAY_HOAN_VE");
            }
        }
        else {
            this.vat_type = "MAU_MOT_LOAI_THUE";
            this.is_multi_vat = false;
            if (e.value == "HOA_DON_KINH_DOANH_XE") {
                this.arrayTemplate.push("HOA_DON_BAN_GIAO_XE");
                this.arrayTemplate.push("HOA_DON_BAO_DUONG_XE");
            }
        }
        this.papersize = "A4_DOC";
        if (e.value != "MAU_CO_BAN") {
            if (e.value == "HOA_DON_XANG_DAU")
                this.subPaperSizes = this.papersizes.filter(function (p) { return p.code != "A4_NGANG"; });
            else
                this.subPaperSizes = this.papersizes;
        }
        else
            this.subPaperSizes = this.papersizes;
        this.setPaperSizeByTemplateType();
        this.setLanguageByTypeInvoice();
        if (e.value == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.PhieuInMayTinhTien || e.value == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.VeTheInSanMenhGia || e.value == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.VeTheKhongInSanMenhGia) {
            this.subPaperSizes = this.billPaperSizes;
            this.papersize = this.subPaperSizes[0].code;
        }
        this.findData = {
            invoice_type: this.invoice_type,
            template_type: this.arrayTemplate,
            is_multi_vat: this.is_multi_vat,
            language: this.language,
            paper_size: this.papersize,
            type_circulars: this.type_circulars
        };
        this.loadData(this.findData);
    };
    InitComponent.prototype.vatTypeChange = function (e) {
        this.endLoad = false;
        this.offsetEntity = 4;
        if (e.value == 'MAU_MOT_LOAI_THUE')
            this.is_multi_vat = false;
        else
            this.is_multi_vat = true;
        this.findData = {
            invoice_type: this.invoice_type,
            template_type: this.arrayTemplate,
            is_multi_vat: this.is_multi_vat,
            language: this.language,
            paper_size: this.papersize,
            type_circulars: this.type_circulars
        };
        this.loadData(this.findData);
    };
    InitComponent.prototype.languageChange = function (e) {
        this.endLoad = false;
        this.offsetEntity = 4;
        this.language = e.value;
        this.findData = {
            invoice_type: this.invoice_type,
            template_type: this.arrayTemplate,
            is_multi_vat: this.is_multi_vat,
            language: this.language,
            paper_size: this.papersize,
            type_circulars: this.type_circulars
        };
        this.loadData(this.findData);
    };
    InitComponent.prototype.papersizeChange = function (e) {
        this.endLoad = false;
        this.offsetEntity = 4;
        this.papersize = e.value;
        this.findData = {
            invoice_type: this.invoice_type,
            template_type: this.arrayTemplate,
            is_multi_vat: this.is_multi_vat,
            language: this.language,
            paper_size: this.papersize,
            type_circulars: this.type_circulars
        };
        this.loadData(this.findData);
    };
    InitComponent.prototype.ngOnDestroy = function () {
        $('.main').unbind('scroll');
    };
    InitComponent.prototype._loadDataDefault = function () {
        /* Load loại hóa đơn */
        this.invoiceTypes = [
            {
                name: this._translate.THONG_TIN.hoa_don_gtgt,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.GTKT01
            },
            {
                name: this._translate.THONG_TIN.hoa_don_ban_hang,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.GTTT02
            },
            {
                name: this._translate.THONG_TIN.hoa_don_ban_hang_phi_thue_quan,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.KPTQ07
            },
            {
                name: this._translate.THONG_TIN.phieu_thu,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HSPT
            },
            {
                name: this._translate.THONG_TIN.phieu_xuat_kho_dai_ly,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HGDL04
            },
            {
                name: this._translate.THONG_TIN.phieu_xuat_kho_noi_bo,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.XKNB03
            },
            {
                name: this._translate.THONG_TIN.chung_tu_thue_tncn,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.CTT56
            },
            {
                name: this._translate.THONG_TIN.bien_lai,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.BLP
            },
            {
                name: this._translate.THONG_TIN.ve_gia_tri_gia_tang,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTKT01
            },
            {
                name: this._translate.THONG_TIN.ve_ban_hang,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTTT02
            },
        ];
        /* Loại hóa đơn biên lai điện tử */
        this.receiptTypeArray = [
            {
                name: this._translate.THONG_TIN.bien_lai_khong_in_san_menh_gia,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.BienLaiKhongInSanMenhGia
            },
            {
                name: this._translate.THONG_TIN.bien_lai_in_san_menh_gia,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.BienLaiInSanMenhGia
            },
        ];
        /* Loại vé thẻ điện tử */
        this.ds_loai_ve = [
            {
                name: this._translate.THONG_TIN.ve_khong_in_san_menh_gia,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.VeTheKhongInSanMenhGia
            },
            {
                name: this._translate.THONG_TIN.ve_in_san_menh_gia,
                code: _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.VeTheInSanMenhGia
            },
        ];
        /* Loại hóa đơn mặc định load mẫu tiếng việt */
        this.vnArray = [_core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HGDL04, _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.XKNB03, _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.HSPT, _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.BLP, _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTKT01, _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].loaihoadon.VETHEGTTT02];
        /* Load khổ giấy máy tính tiền */
        this.billPaperSizes = [
            {
                name: "Khổ 80mm",
                code: "A80_DOC"
            },
            {
                name: "Khổ 57mm",
                code: "A57_DOC"
            },
        ];
    };
    InitComponent.prototype.setLanguageByTypeInvoice = function () {
        this.language = "EN";
        if (this.vnArray.includes(this.invoice_type) || this.template_type == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.PhieuInMayTinhTien)
            this.language = "VI";
    };
    InitComponent.prototype.setPaperSizeByTemplateType = function () {
        switch (this.template_type) {
            case _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.BienLaiInSanMenhGia:
            case _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.BienLaiKhongInSanMenhGia:
                this.papersize = "A5_NGANG";
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabPanel'),
        __metadata("design:type", Object)
    ], InitComponent.prototype, "tabPanel", void 0);
    InitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-init',
            template: __webpack_require__(/*! ./init.component.html */ "./src/app/modules/template/components/init/init.component.html"),
            styles: [__webpack_require__(/*! ./init.component.scss */ "./src/app/modules/template/components/init/init.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_3__["TemplateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], InitComponent);
    return InitComponent;
}());



/***/ }),

/***/ "./src/app/modules/template/components/modify/modify.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/template/components/modify/modify.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row template-area\">\r\n  <div class=\"col-md-8 template-preview img-thumbnail\">\r\n    <!-- <img *ngIf=\"dataPreview\" src=\"data:image/png;base64,{{dataPreview}}\" class=\"img-thumbnail\" style=\"width:100%\"> -->\r\n    <iframe id=\"preview-iframe\" width=\"828\" height=\"1160\"></iframe>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"collect-information\">\r\n      <h3>{{ 'CONTROLL.LABEL.input_info_unit' | translate }}</h3>\r\n      <form (ngSubmit)=\"onSubmit($event)\">\r\n        <dx-form id=\"form_top\" [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item  dataField=\"template_code\" [editorOptions]=\"{ mask: maskTemplateCode, maskRules: rules, maskChar: '_', onValueChanged: reloadIframePreview}\">\r\n                <dxo-label text=\"{{ 'GRID.INVOICE.template_code' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\" message=\"{{ 'GRID.INVOICE.template_code' | translate }} {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item cssClass=\"template invoice_series\" dataField=\"invoice_series\" [editorOptions]=\"{ mask: maskInvoiceSeries, maskRules: rules, maskChar: '_', onValueChanged: reloadIframePreview}\">\r\n                <dxo-label text=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\" message=\"{{ 'GRID.INVOICE.invoice_series' | translate }} {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item  dataField=\"symbol_no_vat\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: ['-', '/', 'x']}\">\r\n              <dxo-label text=\"{{ 'CONTROLL.LABEL.display_not_vat' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.display_not_vat' | translate }} {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n        <dx-form [formData]=\"frmData.json_data\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item  dataField=\"name\" [editorOptions]=\"{onValueChanged: reloadFromServer}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.company_name' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.company_name' | translate }} {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item  dataField=\"tax_code\" [editorOptions]=\"{disabled: true, onValueChanged: reloadIframePreview}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.tax_code' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.tax_code' | translate }} {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.tax_code\" message=\"{{ 'CONTROLL.LABEL.tax_code' | translate }} {{ 'VALIDATION.not_pattern' | translate }}\"></dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item dataField=\"business_address\" [editorOptions]=\"{onValueChanged: reloadFromServer}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.address' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.address' | translate }} {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item [label]=\"{text: 'Email'}\" dataField=\"company_email\" [editorOptions]=\"{onValueChanged: reloadIframePreview}\">\r\n              <dxi-validation-rule type=\"required\" message=\"Email {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.email\" message=\"Email {{ 'VALIDATION.not_pattern' | translate }}\"></dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item dataField=\"phone\" [editorOptions]=\"{onValueChanged: reloadIframePreview}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.phone' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"pattern.phone\" message=\"{{ 'CONTROLL.LABEL.phone' | translate }} {{ 'VALIDATION.not_pattern' | translate }}\"></dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item  dataField=\"bank_name\" [editorOptions]=\"{onValueChanged: reloadIframePreview}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.bank_name' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item  dataField=\"bank_account_number\" [editorOptions]=\"{onValueChanged: reloadIframePreview}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.bank_account_number' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item [label]=\"{text: 'Website'}\" dataField=\"website\" [editorOptions]=\"{onValueChanged: reloadIframePreview}\">\r\n            </dxi-item>\r\n            <dxi-item  dataField=\"watermark_text\" [editorOptions]=\"{onValueChanged: reloadFromServer}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.watermark_text' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item  dataField=\"watermark_text_direction\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: watermark_text_directions, onValueChanged: reloadFromServer, displayExpr: 'name', valueExpr: 'value'}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.watermark_text_direction' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item  dataField=\"watermark_text_color\" editorType=\"dxColorBox\" [editorOptions]=\"{onValueChanged: reloadFromServer}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.watermark_text_color' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item dataField=\"watermark_text_size\"  editorType=\"dxNumberBox\" [editorOptions]=\"{onValueChanged: reloadFromServer}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.watermark_text_size' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item dataField=\"is_use_form_convert\" \r\n            editorType=\"dxCheckBox\" [editorOptions]=\"{onValueChanged: onIsUseFormConvert}\">\r\n            <dxo-label text=\"{{ 'CONTROLL.LABEL.use_form_convert' | translate }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dx-form>\r\n        <div class=\"group-dx-checkbox\">\r\n          <div class=\"dx-field-label xem-mau-chuyen-doi-label\">{{ 'CONTROLL.LABEL.view_conversion_invoice_form' | translate }}:</div>\r\n          <dx-check-box id=\"checkbox-cd\" [disabled]=\"isDisXemChuyenDoi\" [(value)]=\"checkboxChuyenDoi\" (onValueChanged)=\"checkboxChange()\">\r\n          </dx-check-box>\r\n        </div>\r\n\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\" id=\"form-hoa-don-nhieu-trang\">        \r\n          <dxi-item  dataField=\"is_multi_pages\" editorType=\"dxCheckBox\" \r\n            [editorOptions]=\"{onValueChanged: onIsMultiPages}\">\r\n            <dxo-label text=\"{{ 'CONTROLL.LABEL.multi_pages' | translate }}\"></dxo-label>\r\n          </dxi-item>\r\n          <dxi-item cssClass=\"check-box-view-xy\"  dataField=\"is_view_pages_xy\" editorType=\"dxCheckBox\" [editorOptions]=\"{disabled: isDisIsViewPagesXY, onValueChanged: reloadFromServer}\">\r\n            <dxo-label text=\"{{ 'CONTROLL.LABEL.view_pages_xy' | translate }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dx-form>\r\n\r\n        <div class=\"custom-file\">\r\n          <input type=\"file\" id=\"logo-file\" class=\"custom-file-input\" accept=\"image/x-png,image/jpeg\" (change)=\"logoChanged($event)\" aria-describedby=\"fileHelp\">\r\n          <label class=\"custom-file-label logo-file-label\" for=\"exampleInputFile\">\r\n              {{ 'CONTROLL.LABEL.choose_the_logo' | translate }}\r\n          </label>\r\n        </div>\r\n        <dx-button id=\"remove-logo\" icon=\"fa fa-trash-o\" type=\"danger\" (click)=\"xoaLogo()\"></dx-button>\r\n        <!-- <img class=\"preview-logo\" *ngIf=\"frmData.logo\" src=\"data:image/png;base64,{{frmData.logo}}\" style=\"width: 150px; height: auto;margin-top: 10px;\"> -->\r\n\r\n        <div class=\"custom-file\">\r\n          <input type=\"file\" id=\"watermark-file\" class=\"custom-file-input\" accept=\"image/x-png,image/jpeg\" (change)=\"watermarkChanged($event)\" aria-describedby=\"fileHelp\">\r\n          <label class=\"custom-file-label watermark-file-label\" for=\"exampleInputFile\">\r\n              {{ 'CONTROLL.LABEL.choose_the_watermark' | translate }}\r\n          </label>\r\n        </div>\r\n        <dx-button id=\"remove-watermark\" icon=\"fa fa-trash-o\" type=\"danger\" (click)=\"xoaAnhNen()\"></dx-button>\r\n        <!-- <img class=\"preview-logo\" *ngIf=\"frmData.watermark_image\" src=\"data:image/png;base64,{{frmData.watermark_image}}\" style=\"width: 150px; height: auto;margin-top: 10px;\"> -->\r\n\r\n        \r\n        <div class=\"pull-right modify-panel\">\r\n          <dx-button text=\"{{ 'CONTROLL.BUTTON.save_info' | translate }}\" icon=\"fa fa-floppy-o\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\"></dx-button>\r\n          <dx-button appBackButton type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\" text=\"{{ 'CONTROLL.BUTTON.come_back' | translate }}\"></dx-button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/template/components/modify/modify.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/template/components/modify/modify.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".template-area{margin-top:20px}.template-area .template-preview{box-shadow:1px 0 10px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);text-align:center}.template-area .collect-information{height:100%;background:#fff;padding:30px 10px;box-shadow:1px 0 10px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);border-radius:3px}.template-area .collect-information>h3{font-weight:bold;margin-bottom:15px;text-align:justify}.template-area .collect-information #form_top{margin-bottom:10px}.template-area .collect-information .modify-panel{margin-top:20px}.custom-file{margin-top:15px;margin-bottom:5px;width:81%}#remove-watermark,#remove-logo{margin-top:13px;margin-left:10px;height:calc(2.25rem + 2px);width:calc(2.25rem + 2px)}#checkbox-cd{margin-bottom:15px}::ng-deep .template.invoice_series input{text-transform:uppercase}::ng-deep .check-box-view-xy .dx-checkbox-container{margin-right:0}.xem-mau-chuyen-doi-label{width:218px;padding-right:10px}#form-hoa-don-nhieu-trang{margin-left:33px}.group-dx-checkbox{padding-top:6px}#checkbox-cd{margin-bottom:10px}#checkbox-cd.dx-state-disabled{background-color:#EEEEEE}\n"

/***/ }),

/***/ "./src/app/modules/template/components/modify/modify.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/template/components/modify/modify.component.ts ***!
  \************************************************************************/
/*! exports provided: ModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyComponent", function() { return ModifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ModifyComponent = /** @class */ (function () {
    function ModifyComponent(authService, route, router, templateService, translate) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.templateService = templateService;
        this.translate = translate;
        this.id = "";
        this.frmData = new _modules_template_shared__WEBPACK_IMPORTED_MODULE_5__["ModifyModel"]();
        this.pattern = _config_index__WEBPACK_IMPORTED_MODULE_6__["pattern"];
        this.rules = { 'h': /^[A-Za-z]{2}[0-9]{2}\z/ };
        this.maskInvoiceSeries = 'CC/00E';
        this.checkboxChuyenDoi = false;
        this.selector = {};
        this.isDisIsViewPagesXY = true;
        this.isDisXemChuyenDoi = true;
        this.watermark_text_directions = [
            {
                name: 'Ngang',
                value: 'Horizontal'
            },
            {
                name: 'Dọc',
                value: 'Vertical'
            },
            {
                name: 'Chéo',
                value: 'ForwardDiagonal'
            },
            {
                name: 'Chéo ngược',
                value: 'BackwardDiagonal'
            },
        ];
        this.a = function (e) {
            console.log(e.value);
        };
        this.reloadIframePreview = function (e) {
            _this.frmData.invoice_series = _this.frmData.invoice_series.toUpperCase();
            var data = _this.frmData;
            var a = data.invoice_series.substr(0, 2);
            var b = data.invoice_series.substr(2, 2);
            _this.selector.template_code.html(_this.invoice_type + "0/" + data.template_code);
            _this.selector.invoice_series.html(a + '/' + b + 'E');
            _this.selector.name.html(data.json_data.name);
            _this.selector.tax_code.html(data.json_data.tax_code);
            // this.selector.business_address.html(data.json_data.business_address);
            _this.selector.phone.html(data.json_data.phone);
            var tai_khoan = "";
            if (data.json_data.bank_account_number) {
                tai_khoan = data.json_data.bank_account_number;
            }
            if (tai_khoan && data.json_data.bank_name) {
                tai_khoan += " - " + data.json_data.bank_name;
            }
            else if (!tai_khoan && data.json_data.bank_name) {
                tai_khoan = data.json_data.bank_name;
            }
            _this.selector.bank_account_number.html(tai_khoan);
            _this.selector.website.html(data.json_data.website);
            _this.selector.company_email.html(data.json_data.company_email);
        };
        this.reloadFromServer = function () {
            var data = JSON.parse(JSON.stringify(_this.frmData));
            var a = data.invoice_series.substr(0, 2);
            var b = data.invoice_series.substr(2, 2);
            var rgbColor = _this.hexToRgb(data.json_data.watermark_text_color);
            if (rgbColor) {
                data.json_data.watermark_text_color = rgbColor.r + ";" + rgbColor.g + ";" + rgbColor.b;
            }
            data.invoice_series = a + '/' + b + 'E';
            data.template_code = _this.invoice_type + "0/" + data.template_code;
            if (_this.isEdit()) {
                data.raw_file = _this.frmData.raw_file;
                data.invoice_type = _this.frmData.invoice_type;
            }
            else {
                data.raw_file = _this.templateService.raw_file;
                data.invoice_type = _this.templateService.invoice_type;
            }
            var temp = _this.checkboxChuyenDoi ? 1 : 0;
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
            _this.templateService.getTemplateModify(data, temp).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.dataPreview = js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].decode(rs.data.template.html_file);
                    // Helper.dowloadFile('demo.html', 'html', rs.data.template.html_file);
                    _this.genDatatoTemplate();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
            });
        };
        this.onIsMultiPages = function (e) {
            _this.reloadFromServer();
            if (e.value) {
                _this.isDisIsViewPagesXY = false;
            }
            else {
                _this.isDisIsViewPagesXY = true;
            }
        };
        this.onIsUseFormConvert = function (e) {
            if (e.value) {
                _this.isDisXemChuyenDoi = false;
            }
            else {
                _this.isDisXemChuyenDoi = true;
                _this.checkboxChuyenDoi = false;
            }
        };
        translate.use(this.authService.getLanguage());
    }
    ModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.queryParams['id'];
        this.route.data.subscribe(function (data) {
            if (_this.isEdit()) {
                _this.invoice_type = data.template.invoice_type;
                _this.frmData.fillData(data.template, _this.invoice_type, true, false);
                _this.dataPreview = js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].decode(data.template.html_file);
                if (data.template.json_data.watermark_text_color)
                    _this.frmData.json_data.watermark_text_color = _this.rgbToHex(data.template.json_data.watermark_text_color);
                // Helper.dowloadFile('demo.html', 'html', data.template.html_file);
                if (data.template.is_multi_pages) {
                    _this.isDisIsViewPagesXY = false;
                }
                else {
                    _this.isDisIsViewPagesXY = true;
                }
                if (data.template.is_use_form_convert) {
                    _this.isDisXemChuyenDoi = false;
                }
                else {
                    _this.isDisXemChuyenDoi = true;
                }
            }
            else {
                //trường mở rộng
                _this.isDisXemChuyenDoi = false;
                _this.frmData.is_multi_vat = _this.templateService.is_multi_vat;
                // this.frmData.is_multi_pages = false; //this.templateService.is_multi_pages
                _this.isDisIsViewPagesXY = false;
                _this.frmData.is_view_pages_xy = false;
                _this.frmData.seller_sign_position = _this.templateService.seller_sign_position;
                _this.frmData.buyer_sign_position = _this.templateService.buyer_sign_position;
                _this.frmData.is_discount = _this.templateService.is_discount;
                //fill
                var year = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format("YYYY").slice(2, 4);
                _this.frmData.invoice_series = "  " + year;
                var account = _this.authService.getCurrentUser().account;
                _this.invoice_type = _this.templateService.invoice_type;
                _this.frmData.json_data.name = account.name;
                _this.frmData.json_data.tax_code = account.tax_code;
                _this.frmData.json_data.business_address = account.business_address;
                _this.frmData.json_data.company_email = account.email;
                _this.frmData.json_data.phone = account.phone;
                _this.frmData.json_data.bank_name = account.bank_name;
                _this.frmData.json_data.bank_account_number = account.bank_account_number;
                _this.frmData.json_data.website = account.website;
                //preview
                _this.dataPreview = js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].decode(_this.templateService.html_file);
                // this.dataPreview = Base64.decode(this.pattern.demo);
            }
            _this.maskTemplateCode = "\\" + _this.invoice_type + "\\0/000";
            _this.genDatatoTemplate();
        });
    };
    ModifyComponent.prototype.rgbToHex = function (str) {
        var a = str.split(";");
        console.log(a);
        return "#" + this.componentToHex(a[0]) + this.componentToHex(a[1]) + this.componentToHex(a[2]);
    };
    ModifyComponent.prototype.componentToHex = function (c) {
        var hex = Number(c).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    ModifyComponent.prototype.genDatatoTemplate = function () {
        //preview
        var iframe = document.getElementById('preview-iframe');
        iframe.contentDocument.open("text/html", "replace");
        iframe.contentDocument.write(this.dataPreview);
        iframe.contentDocument.close();
        //set element
        var preview = $('#preview-iframe').contents();
        this.selector.invoice_series = preview.find('nobr:contains([KY_HIEU])');
        this.selector.template_code = preview.find('nobr:contains([MAU_SO])');
        this.selector.name = preview.find('nobr:contains([TEN_DV])');
        this.selector.tax_code = preview.find('nobr:contains([MST_DV])');
        // this.selector.business_address = preview.find('nobr:contains([DIA_CHI_DK])');
        this.selector.bank_account_number = preview.find('nobr:contains([TAI_KHOAN])');
        this.selector.phone = preview.find('nobr:contains([DIEN_THOAI])');
        this.selector.company_email = preview.find('nobr:contains([EMAIL])');
        this.selector.website = preview.find('nobr:contains([WEBSITE])');
        this.reloadIframePreview(1);
    };
    ModifyComponent.prototype.hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };
    ModifyComponent.prototype.xoaLogo = function () {
        this.frmData.extend_info.logo = 'R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
        $('#logo-file').value = "";
        this.reloadFromServer();
        $('.logo-file-label').html('Chọn logo đơn vị');
    };
    ModifyComponent.prototype.xoaAnhNen = function () {
        this.frmData.extend_info.watermark_image = 'R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
        $('#watermark-file').value = "";
        this.reloadFromServer();
        $('.watermark-file-label').html('Chọn ảnh nền đơn vị');
    };
    ModifyComponent.prototype.ngAfterViewInit = function () {
        this.form.instance.getEditor("template_code").focus();
    };
    ModifyComponent.prototype.isEdit = function () {
        if (!this.id) {
            return false;
        }
        return true;
    };
    ModifyComponent.prototype.logoChanged = function (e) {
        var _this = this;
        var fileReader = new FileReader();
        var pattern = /image-*/;
        if (!e.target.files[0].type.match(pattern)) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Định dạng file không đúng', 'error');
            return;
        }
        else {
            if (e.target.files[0].size <= 307200) {
                fileReader.readAsDataURL(e.target.files[0]);
                fileReader.onload = function (evt) {
                    var base64result = fileReader.result.toString().split(',')[1];
                    _this.frmData.extend_info.logo = base64result;
                    $('.logo-file-label').html(e.target.files[0].name);
                    _this.reloadFromServer();
                };
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Chỉ nên upload ảnh kích cỡ nhỏ hơn 300KB', 'error');
            }
        }
    };
    ModifyComponent.prototype.watermarkChanged = function (e) {
        var _this = this;
        var fileReader = new FileReader();
        var pattern = /image-*/;
        if (!e.target.files[0].type.match(pattern)) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Định dạng file không đúng', 'error');
            return;
        }
        else {
            if (e.target.files[0].size <= 1048576) {
                fileReader.readAsDataURL(e.target.files[0]);
                fileReader.onload = function (evt) {
                    var base64result = fileReader.result.toString().split(',')[1];
                    _this.frmData.extend_info.watermark_image = base64result;
                    $('.watermark-file-label').html(e.target.files[0].name);
                    _this.reloadFromServer();
                };
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Chỉ nên upload ảnh kích cỡ nhỏ hơn 1MB', 'error');
            }
        }
    };
    ModifyComponent.prototype.onSubmit = function (e) {
        var data = JSON.parse(JSON.stringify(this.frmData));
        var a = data.invoice_series.substr(0, 2);
        var b = data.invoice_series.substr(2, 2);
        var rgbColor = this.hexToRgb(data.json_data.watermark_text_color);
        if (rgbColor) {
            data.json_data.watermark_text_color = rgbColor.r + ";" + rgbColor.g + ";" + rgbColor.b;
        }
        data.is_html_template = false;
        data.invoice_series = a + '/' + b + 'E';
        data.template_code = this.invoice_type + "0/" + data.template_code;
        console.log(data);
        if (this.isEdit()) {
            this.edit(data);
        }
        else {
            this.add(data);
        }
    };
    ModifyComponent.prototype.add = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        data.invoice_type = this.templateService.invoice_type;
        data.raw_file = this.templateService.raw_file;
        this.templateService.add(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Thêm mới thành công', 'success');
                _this.router.navigate(['/system/template']);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
        });
    };
    ModifyComponent.prototype.edit = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        this.templateService.modify(this.id, data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify('Sửa mẫu thành công', 'success');
                // this.dataPreview = rs.data.template.html_file;
                _this.router.navigate(['/system/template']);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
        });
    };
    ModifyComponent.prototype.checkboxChange = function () {
        this.reloadFromServer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormComponent"])
    ], ModifyComponent.prototype, "form", void 0);
    ModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'template-modify',
            template: __webpack_require__(/*! ./modify.component.html */ "./src/app/modules/template/components/modify/modify.component.html"),
            styles: [__webpack_require__(/*! ./modify.component.scss */ "./src/app/modules/template/components/modify/modify.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_5__["TemplateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], ModifyComponent);
    return ModifyComponent;
}());



/***/ }),

/***/ "./src/app/modules/template/components/modifynew/modifynew.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/template/components/modifynew/modifynew.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row template-area\">\r\n  <div class=\"col-md-8 template-preview img-thumbnail\" style=\"overflow-x: hidden; \">\r\n    <!-- <img *ngIf=\"dataPreview\" src=\"data:image/png;base64,{{dataPreview}}\" class=\"img-thumbnail\" style=\"width:100%\"> -->\r\n    <iframe sandbox=\"allow-same-origin\" id=\"preview-iframe\" onload=\"this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';\"></iframe>\r\n    <iframe #iframeTempt  style=\"margin-top: 20px\" sandbox=\"allow-same-origin\" id=\"preview-iframe-tempt\"></iframe>\r\n    <iframe sandbox=\"allow-same-origin\" id=\"after-iframe\" width=\"0%\" height=\"0%\" style=\"margin-left: 20px;\"></iframe>\r\n    <iframe  sandbox=\"allow-same-origin\" id=\"after-iframe-tempt\" width=\"0%\" height=\"0%\" style=\"margin-left: 20px;\"></iframe>\r\n    <input id=\"file-input-logo\" type=\"file\" accept=\".jpg,.jpeg,.png,.gif\" (change)=\"logoChanged($event)\"\r\n      style=\"display: none;\" />\r\n  </div>\r\n  <div class=\"col-md-4 inforCommon\" style=\"overflow-x: hidden; \">\r\n    <div class=\"collect-information\">\r\n      <h3 class=\"titleTempplate\">{{title_form}}</h3>\r\n      <!-- Thông tin mẫu -->\r\n      <form (ngSubmit)=\"onSubmit($event)\">\r\n        <!-- <dx-form id=\"form_top\" [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"template-series\" dataField=\"template_code\"\r\n              [editorOptions]=\"{ mask: maskTemplateCode, maskRules: rulesTemplateCode, maskChar: '_', onValueChanged: reloadInforTemp}\">\r\n              <dxo-label text=\"{{ 'GRID.INVOICE.template_code' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\"\r\n                message=\"{{ 'GRID.INVOICE.template_code' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item cssClass=\"template invoice_series\" dataField=\"invoice_series\"\r\n              [editorOptions]=\"{ mask: maskInvoiceSeries, maskRules: rulesInvoiceSeries, maskChar: '_', onValueChanged: reloadInforTemp}\">\r\n              <dxo-label text=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\"\r\n                message=\"{{ 'GRID.INVOICE.invoice_series' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n            <dxi-item dataField=\"symbol_no_vat\" editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: itemsTypeDisplay,inputAttr: {  'style': 'font-weight: bold;'}}\">\r\n              <dxo-label text=\"{{ 'CONTROLL.LABEL.display_not_vat' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\"\r\n                message=\"{{ 'CONTROLL.LABEL.display_not_vat' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form> -->\r\n        <!-- Mẫu TT78 -->\r\n        <dx-form id=\"form_top\" [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"template-series custom-tempt\" dataField=\"template_code\" [template]=\"'templateMauSo'\">\r\n              <dxo-label text=\"{{ 'GRID.INVOICE.template_code' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item cssClass=\"template invoice_series invS custom-tempt\" dataField=\"invoice_series\"\r\n              style=\"margin-top: 5px;\" [template]=\"'templateKyHieu'\">\r\n              <dxo-label text=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item *ngIf=\"!isChungTuTNCN && !isPhieuThuHS && !isBienLaiDienTu\" cssClass=\"custom-tempt\" dataField=\"symbol_no_vat\"\r\n              [template]=\"'typeInvoice'\">\r\n              <dxo-label text=\"{{ 'CONTROLL.LABEL.display_not_vat' | translate }}\">\r\n              </dxo-label>\r\n            </dxi-item>\r\n            <!-- <dxi-item dataField=\"symbol_no_vat\" editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: itemsTypeDisplay,inputAttr: {  'style': 'font-weight: bold;'}}\">\r\n              <dxo-label text=\"{{ 'CONTROLL.LABEL.display_not_vat' | translate }}\"></dxo-label>\r\n              <dxi-validation-rule type=\"required\"\r\n                message=\"\">\r\n              </dxi-validation-rule>\r\n            </dxi-item> -->\r\n          </dxi-item>\r\n\r\n          <div *dxTemplate=\"let d of 'typeInvoice'\">\r\n            <dx-select-box [dataSource]=\"itemsTypeDisplay\" style=\"margin-left: 24px;font-weight: bold\"\r\n              [(value)]=\"frmData.symbol_no_vat\">\r\n              <dx-validator validationGroup=\"formData\">\r\n                <dxi-validation-rule type=\"required\"\r\n                  message=\"{{ 'CONTROLL.LABEL.display_not_vat' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n                </dxi-validation-rule>\r\n              </dx-validator>\r\n            </dx-select-box>\r\n            <div class=\"toggle normal\" style=\"display: flex; align-items: center; margin-top: -27px;margin-left: -7px;\">\r\n              <p style=\"color: red;\">*</p>\r\n            </div>\r\n          </div>\r\n          <!-- Temp Mẫu Số -->\r\n          <div *dxTemplate=\"let d of 'templateMauSo'\">\r\n            <dx-text-box [(value)]=\"frmData.template_code\" style=\"margin-left: 24px\" mask=\"{{formatMaskTemplace}}\"\r\n              [maskRules]=\"ruleTempt\" maskChar=\"_\" (onValueChanged)=\"reloadInforTemp()\" [(readOnly)]=\"readOnlyMauSo\">\r\n              <dx-validator *ngIf=\"!isBienLaiDienTu\" validationGroup=\"formData\">\r\n                <dxi-validation-rule type=\"required\"\r\n                  message=\"{{ 'GRID.INVOICE.template_code' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n                </dxi-validation-rule>\r\n              </dx-validator>\r\n              <!-- <dx-validator *ngIf=\"isBienLaiDienTu\" validationGroup=\"formData\">\r\n                <dxi-validation-rule type=\"required\"\r\n                  message=\"{{ 'GRID.INVOICE.template_code' | translate }} {{ 'không đúng định dạng' }}\">\r\n                </dxi-validation-rule>\r\n              </dx-validator> -->\r\n            </dx-text-box>\r\n            <div class=\"toggle normal\" style=\"display: flex; align-items: center; margin-top: -25px;margin-left: -7px;\">\r\n              <p style=\"color: red;\">*</p>\r\n              <img *ngIf=\"!isChungTuTNCN && !isPhieuThuHS\" id=\"link1\" style=\"cursor: pointer;padding-left: 3px;\"\r\n                src=\"assets\\img\\icons\\Icon_Information.png\" (click)=\"onClickMauSo()\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n            </div>\r\n            <dx-popover target=\"#link1\" position=\"top\" [width]=\"300\" [(visible)]=\"isDisplayMauSo\">\r\n              <div *ngIf=\"frmData.is_decree_new && !isBienLaiDienTu\">\r\n                <div *dxTemplate=\"let data of 'content'\">\r\n                  <p>Số 1: Phản ánh loại HĐ giá trị gia tăng.</p>\r\n                  <p>Số 2: Phản ánh loại HĐ bán hàng.</p>\r\n                  <p>Số 3: Phản ánh loại HĐ bán tài sản công.</p>\r\n                  <p>Số 4: Phản ánh loại HĐ bán hàng dự trữ quốc gia.</p>\r\n                  <p>Số 5: Phản ánh các loại HĐ khác là tem điện tử, vé điện tử, thẻ điện tử, phiếu thu điện tử hoặc các\r\n                    chứng từ điện tử có tên gọi khác nhưng có nội dung của HĐĐT theo quy định tại Nghị định số 123.</p>\r\n                  <p>Số 6: Phản ánh PXK kiêm vận chuyển nội bộ điện tử, hoặc PXK hàng gửi bán đại lý điện tử.</p>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!frmData.is_decree_new\">\r\n                <div *dxTemplate=\"let data of 'content'\">\r\n                  <p>2 ký tự đầu thể hiện loại hoá đơn.</p>\r\n                  <p>4 ký tự tiếp theo thể hiện tên HĐ.</p>\r\n                  <p>1 ký tự tiếp theo thể hiện số liên của HĐ (Với hóa đơn điện tử thì số liên là 0).</p>\r\n                  <p>1 ký tự tiếp theo là dấu “/”.</p>\r\n                  <p>3 ký tự tiếp theo là số thứ tự của mẫu HĐ.</p>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"isBienLaiDienTu\">\r\n                <div *dxTemplate=\"let data of 'content'\">\r\n                  <p>+ 2 ký tự đầu thể hiện loại biên lai.</p>\r\n                  <p>+ 3 ký tự tiếp theo thể hiện tên biên lai.</p>\r\n                  <p>+ 1 ký tự tiếp theo thể hiện số liên biên lai.</p>\r\n                  <p>+ 1 ký tự tiếp theo là dấu “-”.</p>\r\n                  <p>+ 3 ký tự tiếp theo là số thứ tự của biên lai.</p>\r\n                </div>\r\n              </div>\r\n            </dx-popover>\r\n          </div>\r\n          <!-- Ký hiệu -->\r\n          <div *dxTemplate=\"let d of 'templateKyHieu'\">\r\n            <dx-text-box [(value)]=\"frmData.invoice_series\" style=\"margin-left: 24px;\" mask=\"{{formatMaskSeries}}\"\r\n              [maskRules]=\"maskRules\" maskChar=\"_\" (onValueChanged)=\"reloadInforTemp()\">\r\n              <dx-validator validationGroup=\"formData\">\r\n                <dxi-validation-rule type=\"required\"\r\n                  message=\"{{ 'GRID.INVOICE.invoice_series' | translate }} {{ 'VALIDATION.required' | translate }}\">\r\n                </dxi-validation-rule>\r\n              </dx-validator>\r\n            </dx-text-box>\r\n            <div class=\"toggle normal\" style=\"display: flex; align-items: center; margin-top: -26px;margin-left: -7px;\">\r\n              <p style=\"color: red;\">*</p>\r\n              <img *ngIf=\"!isChungTuTNCN && !isPhieuThuHS\" id=\"link2\" style=\"cursor: pointer;padding-left: 3px;\"\r\n                src=\"assets\\img\\icons\\Icon_Information.png\" (click)=\"onClickKyHieu()\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n            </div>\r\n            <dx-popover target=\"#link2\" position=\"top\" [width]=\"300\" [(visible)]=\"isDisplayKyHieu\">\r\n              <div *ngIf=\"frmData.is_decree_new && !isBienLaiDienTu\">\r\n                <div *dxTemplate=\"let data of 'content'\">\r\n                  <dx-scroll-view>\r\n                    <p><span>Ký hiệu là nhóm </span><span style=\"font-weight: bold;\">6 ký tự</span> được quy định như\r\n                      sau:</p>\r\n                    <p><span style=\"font-weight: bold;\">- Ký tự đầu tiên </span><span>là C hoặc K: C thể hiện HĐ có mã\r\n                        của CQT, K thể hiện HĐ không có mã.</span></p>\r\n                    <p><span style=\"font-weight: bold;\">- 2 ký tự tiếp theo </span><span>là thể hiện năm lập HĐ, được\r\n                        xác định theo 2 chữ số cuối của năm dương lịch. Ví dụ: Năm lập HĐ là năm 2021 thì thể hiện là số\r\n                        21.</span></p>\r\n                    <p><span style=\"font-weight: bold;\">- 1 ký tự tiếp theo </span><span>thể hiện loại HĐ được sử\r\n                        dụng:</span></p>\r\n                    <p>+ Chữ T: Áp dụng đối với HĐ do các doanh nghiệp, tổ chức, hộ, cá nhân kinh doanh đăng ký sử\r\n                      dụng với CQT.</p>\r\n                    <p>+ Chữ D: Áp dụng đối với HĐ bán tài sản công và HĐ bán hàng dự trữ quốc gia hoặc HĐ đặc thù không\r\n                      nhất thiết phải có một số tiêu thức do các doanh nghiệp, tổ chức đăng ký sử dụng.</p>\r\n                    <p>+ Chữ L: Áp dụng đối với HĐ của CQT cấp theo từng lần phát sinh.</p>\r\n                    <p>+ Chữ M: Áp dụng đối với HĐ được khởi tạo từ máy tính tiền.</p>\r\n                    <p>+ Chữ N: Áp dụng đối với PXK kiêm vận chuyển nội bộ điện tử.</p>\r\n                    <p>+ Chữ B: Áp dụng đối với PXK hàng gửi bán đại lý điện tử.</p>\r\n                    <p>+ Chữ G: Áp dụng đối với tem, vé, thẻ điện tử là hóa đơn GTGT.</p>\r\n                    <p>+ Chữ H: Áp dụng đối với tem, vé, thẻ điện tử là hóa đơn bán hàng.</p>\r\n                    <p><span style=\"font-weight: bold;\">- 2 ký tự cuối </span><span>là chữ viết do người bán tự xác\r\n                        định căn cứ theo nhu cầu quản lý.</span></p>\r\n                  </dx-scroll-view>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!frmData.is_decree_new\">\r\n                <div *dxTemplate=\"let data of 'content'\">\r\n                  <p>2 ký tự đầu là chữ cái in hoa của bảng chữ tiếng việt dùng để phân biệt các ký hiệu hóa đơn.</p>\r\n                  <p>2 ký tự tiếp theo thể hiện 2 số cuối của năm tạo mẫu hoá đơn.</p>\r\n                  <p>1 ký tự cuối thể hiện hình thức hoá đơn, trong đó Hoá đơn điện tử là E.</p>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"isBienLaiDienTu\">\r\n                <div *dxTemplate=\"let data of 'content'\">\r\n                  <p>+ 2 ký tự đầu là chữ cái in hoa của bảng chữ tiếng việt bao gồm: A, B, C, D, E, G, H, K, L, M, N, P, Q, R, S, T, U, V, X, Y.</p>\r\n                  <p>+ 1 ký tự tiếp theo là dấu “-”.</p>\r\n                  <p>+ 2 ký tự tiếp theo thể hiện 2 số cuối của năm tạo mẫu biên lai.</p>\r\n                  <p>+ 1 ký tự cuối thể hiện hình thức biên lai, trong đó Hoá đơn điện tử là E.</p>\r\n                </div>\r\n              </div>\r\n            </dx-popover>\r\n          </div>\r\n        </dx-form>\r\n        <div class=\"line-border\" style=\"margin-top: 14px !important;\"></div>\r\n        <!-- Bổ sung thông tin người bán-->\r\n        <div style=\"margin-top: 10px;\" *ngIf=\"!isThuXacNhan\">\r\n          <div style=\"display: flex\">\r\n            <h3 class=\"titleTemptInfoBB\">{{titleTemptInfoBB}}</h3>\r\n            <a href=\"javascript:void(0)\" (click)=\"themmoiTTBenBan()\"\r\n              style=\"float: left;margin-left: 5px;margin-top: 10px;\">\r\n              <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n            </a>\r\n          </div>\r\n          <span *ngIf=\"!isChungTuTNCN\" style=\"font-size: 12px;word-spacing: -1px;\"><i>{{text_guide_grid}}</i></span>\r\n        </div>\r\n        <div style=\"margin-bottom: 12px;margin-top: 10px;\" *ngIf=\"!isThuXacNhan\">\r\n          <dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnResizing]=\"false\"\r\n            [columnMinWidth]=\"30\" [showColumnHeaders]=\"false\" [columnAutoWidth]=\"false\"\r\n            (onEditorPrepared)=\"editorPrepared($event)\" (onCellPrepared)=\"onCellPrepared($event)\"\r\n            (onEditorPreparing)=\"onEditorPreparing($event)\" [wordWrapEnabled]=\"true\" cssClass=\"cell-highlighted\">\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n            <dxi-column cellTemplate=\"check\" alignment=\"center\" [width]=\"30\" [allowEditing]=\"true\"></dxi-column>\r\n            <dxi-column dataField=\"name\" alignment=\"left\" [allowEditing]=\"true\" [filterOperations]=\"['contains', '=']\"\r\n              [width]=\"108\"></dxi-column>\r\n            <dxi-column editorType=\"dxTextArea\" dataField=\"value\" alignment=\"left\"\r\n              [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n            <dxi-column dataField=\"width\" alignment=\"center\" [width]=\"50\">\r\n              <dxo-lookup [dataSource]=\"sourceWidthSize\" displayExpr=\"name\" valueExpr=\"code\" onValueChanged=\"b($event)\">\r\n              </dxo-lookup>\r\n            </dxi-column>\r\n            <dxi-column cellTemplate=\"deleteColumn\" [width]=\"30\" [allowEditing]=\"false\" alignment=\"center\">\r\n            </dxi-column>\r\n            <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n              <a class=\"delete-row\" *ngIf=\"d.data.type != '1'\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i\r\n                  class=\"fa fa-times\"></i></a>\r\n            </div>\r\n            <div *dxTemplate=\"let d of 'check'\">\r\n              <dx-check-box [(value)]=\"d.data.is_show\" *ngIf=\"disableCheckBoxSeller(d.data)\"\r\n                (onValueChanged)=\"checkShowHideTN(d.data)\"></dx-check-box>\r\n            </div>\r\n          </dx-data-grid>\r\n        </div>\r\n\r\n        <div *ngIf=\"!isChungTuTNCN\" class=\"line-border\"></div>\r\n        <!-- Bổ sung thông tin người nộp thuế -->\r\n        <h3 *ngIf=\"isThuXacNhan\" class=\"titleTemptInfo\">Bổ sung thông tin người nộp thuế</h3>\r\n        <div *ngIf=\"isThuXacNhan\" style=\"margin-bottom: 12px;\">\r\n          <dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSourceUserTXN\" [showRowLines]=\"true\"\r\n            [allowColumnResizing]=\"false\" [columnMinWidth]=\"30\" [showColumnHeaders]=\"false\" [columnAutoWidth]=\"false\"\r\n            [wordWrapEnabled]=\"true\">\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n            <dxi-column cellTemplate=\"check\" alignment=\"center\" [width]=\"30\" [allowEditing]=\"true\"></dxi-column>\r\n            <dxi-column dataField=\"name\" alignment=\"left\" [allowEditing]=\"true\" [filterOperations]=\"['contains', '=']\">\r\n            </dxi-column>\r\n            <div *dxTemplate=\"let d of 'check'\">\r\n              <dx-check-box [(value)]=\"d.data.is_show\" (onValueChanged)=\"checkShowHideUserTXN()\"></dx-check-box>\r\n            </div>\r\n          </dx-data-grid>\r\n        </div>\r\n        <h3 *ngIf=\"isThuXacNhan\" class=\"titleTemptInfo\">Thông tin thu nhập</h3>\r\n        <div *ngIf=\"isThuXacNhan\" style=\"margin-bottom: 12px;\">\r\n          <dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSourceTXN\" [showRowLines]=\"true\"\r\n            [allowColumnResizing]=\"false\" [columnMinWidth]=\"30\" [showColumnHeaders]=\"false\" [columnAutoWidth]=\"false\"\r\n            [wordWrapEnabled]=\"true\">\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n            <dxi-column cellTemplate=\"check\" alignment=\"center\" [width]=\"30\" [allowEditing]=\"true\"></dxi-column>\r\n            <dxi-column dataField=\"name\" alignment=\"left\" [allowEditing]=\"true\" [filterOperations]=\"['contains', '=']\">\r\n            </dxi-column>\r\n            <div *dxTemplate=\"let d of 'check'\">\r\n              <dx-check-box [(value)]=\"d.data.is_show\" (onValueChanged)=\"checkShowHideTXN()\"></dx-check-box>\r\n            </div>\r\n          </dx-data-grid>\r\n        </div>\r\n        <!-- <h3 *ngIf=\"isThuXacNhan\" class=\"titleTemptInfo\">Thông tin khác</h3>\r\n        <div *ngIf=\"isThuXacNhan\" style=\"margin-bottom: 12px;\">\r\n          <dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSourceTXNOther\" [showRowLines]=\"true\"\r\n            [allowColumnResizing]=\"false\" [columnMinWidth]=\"30\" [showColumnHeaders]=\"false\" [columnAutoWidth]=\"false\"\r\n            [wordWrapEnabled]=\"true\">\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n            <dxi-column cellTemplate=\"check\" alignment=\"center\" [width]=\"30\" [allowEditing]=\"true\"></dxi-column>\r\n            <dxi-column dataField=\"name\" alignment=\"left\" [allowEditing]=\"true\" [filterOperations]=\"['contains', '=']\">\r\n            </dxi-column>\r\n            <div *dxTemplate=\"let d of 'check'\">\r\n              <dx-check-box [(value)]=\"d.data.is_show\" (onValueChanged)=\"checkShowHideTXNOther()\"></dx-check-box>\r\n            </div>\r\n          </dx-data-grid>\r\n        </div> -->\r\n        <!-- Bổ sung thông tin người mua-->\r\n        <div style=\"margin-top: 10px;margin-bottom: 10px;\">\r\n          <div style=\"display: flex;\">\r\n            <h3 class=\"titleTemptInfo\">{{titleTemptInfo}}</h3>\r\n            <a href=\"javascript:void(0)\" (click)=\"themmoiTTBenMua()\"\r\n              style=\"float: left;margin-left: 5px;margin-top: 10px;\">\r\n              <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n            </a>\r\n          </div>\r\n          <span *ngIf=\"!isChungTuTNCN && !isThuXacNhan\" style=\"font-size: 12px;word-spacing: -1px;\"><i>{{text_guide_grid}}</i></span>\r\n        </div>\r\n        <div style=\"margin-bottom: 12px;\">\r\n          <dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSourceBenMua\" [showRowLines]=\"true \"\r\n            [allowColumnResizing]=\"false\" [columnMinWidth]=\"30\" [showColumnHeaders]=\"false\" [columnAutoWidth]=\"false\"\r\n            (onCellPrepared)=\"onCellPreparedBenMua($event)\" (onEditorPreparing)=\"onEditorPreparingBenMua($event)\"\r\n            (onEditorPrepared)=\"editorPreparedBenMua($event)\" [wordWrapEnabled]=\"true\" (onCellHoverChanged)=\"onCellHoverChanged($event)\">\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n            <dxi-column cellTemplate=\"check\" alignment=\"center\" [width]=\"30\" [allowEditing]=\"true\"></dxi-column>\r\n            <dxi-column *ngIf=\"isThuXacNhan\" dataField=\"index_name\" alignment=\"left\" [allowEditing]=\"true\" [filterOperations]=\"['contains', '=']\"\r\n              [width]=\"30\"></dxi-column>\r\n            <dxi-column dataField=\"name\" alignment=\"left\" [allowEditing]=\"true\" [filterOperations]=\"['contains', '=']\"\r\n              ></dxi-column>\r\n            <dxi-column *ngIf=\"isThuXacNhan\" dataField=\"name_en\" alignment=\"left\" [allowEditing]=\"true\" [filterOperations]=\"['contains', '=']\"\r\n            [width]=\"60\"></dxi-column>\r\n            <dxi-column dataField=\"data_type\" alignment=\"center\" [width]=\"50\">\r\n              <dxo-lookup [dataSource]=\"sourceDataType\" displayExpr=\"name\"  valueExpr=\"code\" onValueChanged=\"b($event)\">\r\n              </dxo-lookup>\r\n            </dxi-column>\r\n            <dxi-column dataField=\"width\" alignment=\"center\" [width]=\"80\">\r\n              <dxo-lookup [dataSource]=\"sourceWidthSize\" displayExpr=\"name\" valueExpr=\"code\" onValueChanged=\"b($event)\">\r\n              </dxo-lookup>\r\n            </dxi-column>\r\n            <dxi-column cellTemplate=\"deleteColumn\" [width]=\"30\" [allowEditing]=\"false\" alignment=\"center\">\r\n            </dxi-column>\r\n            <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n              <a class=\"delete-row\" *ngIf=\"d.data.type != '3'\" href=\"javascript:void(0)\"\r\n                (click)=\"deleteRowBenMua(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n            </div>\r\n            <div *dxTemplate=\"let d of 'check'\">\r\n              <dx-check-box [(value)]=\"d.data.is_show\" (onValueChanged)=\"checkShowHideBenMua(d.data)\"></dx-check-box>\r\n            </div>\r\n          </dx-data-grid>\r\n        </div>\r\n        <!-- Bổ sung thông tin hàng hóa -->\r\n        <div style=\"margin-top: 10px;margin-bottom: 10px;\" *ngIf=\"hien_thi_danh_sach_hh()\">\r\n          <div style=\"display: flex;\">\r\n            <h3 class=\"titleTemptInfo\">{{tieu_de_hhdv}}</h3>\r\n            <a href=\"javascript:void(0)\" (click)=\"themmoiTTHangHoa()\"\r\n              style=\"float: left;margin-left: 5px;margin-top: 10px;\">\r\n              <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n            </a>\r\n          </div>\r\n          <span style=\"font-size: 12px;word-spacing: -1px;\"><i>{{text_guide_grid}}</i></span>\r\n        </div>\r\n        <div style=\"margin-bottom: 12px;\" *ngIf=\"hien_thi_danh_sach_hh()\">\r\n          <dx-data-grid id=\"gridContainer\" [dataSource]=\"ds_hang_hoa_dich_vu\" [showRowLines]=\"true \"\r\n            [allowColumnResizing]=\"false\" [columnMinWidth]=\"30\" [showColumnHeaders]=\"false\" [columnAutoWidth]=\"false\"\r\n            (onCellPrepared)=\"onCellPreparedBSHHDV($event)\" (onEditorPreparing)=\"onEditorPreparingBSHHDV($event)\"\r\n            (onEditorPrepared)=\"editorPreparedBSHHDV($event)\" [wordWrapEnabled]=\"true\" (onCellHoverChanged)=\"onCellHoverChangedBSHHDV($event)\">\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n            <dxi-column cellTemplate=\"check\" alignment=\"center\" [width]=\"30\" [allowEditing]=\"true\"></dxi-column>\r\n            <dxi-column dataField=\"name\" alignment=\"left\" [allowEditing]=\"true\" [filterOperations]=\"['contains', '=']\"\r\n              ></dxi-column>\r\n            <!-- <dxi-column dataField=\"name_en\" alignment=\"left\" [allowEditing]=\"true\" [filterOperations]=\"['contains', '=']\"\r\n            [width]=\"60\"></dxi-column> -->\r\n            <dxi-column dataField=\"data_type\" alignment=\"center\" [width]=\"50\">\r\n              <dxo-lookup [dataSource]=\"sourceDataType\" displayExpr=\"name\"  valueExpr=\"code\" onValueChanged=\"b($event)\">\r\n              </dxo-lookup>\r\n            </dxi-column>\r\n            <dxi-column dataField=\"width\" alignment=\"center\" [width]=\"80\">\r\n              <dxo-lookup [dataSource]=\"sourceWidthSize\" displayExpr=\"name\" valueExpr=\"code\" onValueChanged=\"b($event)\">\r\n              </dxo-lookup>\r\n            </dxi-column>\r\n            <dxi-column cellTemplate=\"deleteColumn\" [width]=\"30\" [allowEditing]=\"false\" alignment=\"center\">\r\n            </dxi-column>\r\n            <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n              <a class=\"delete-row\" *ngIf=\"d.data.type != '6'\" href=\"javascript:void(0)\"\r\n                (click)=\"deleteRowBSHHDV(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n            </div>\r\n            <div *dxTemplate=\"let d of 'check'\">\r\n              <dx-check-box *ngIf=\"disableCheckBoxSellerBSHHDV(d.data)\" [(value)]=\"d.data.is_show\" (onValueChanged)=\"checkShowHideBSHHDV(d.data)\"></dx-check-box>\r\n            </div>\r\n          </dx-data-grid>\r\n        </div>\r\n        <!-- The End -->\r\n        <div *ngIf=\"hien_thi_mau_vien_bang_hh()\" class=\"line-border\"></div>\r\n        <!-- Hiển thị thêm cột trên danh sách mặt hàng -->\r\n        <h3 *ngIf=\"hien_thi_bang_hh()\" class=\"titleTemptInfo\">{{\r\n          'CONTROLL.LABEL.display_columns_on_goods' | translate }}</h3>\r\n        <div *ngIf=\"hien_thi_bang_hh()\" style=\"margin-bottom: 12px;\">\r\n          <dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSourceHangHoa\" [showRowLines]=\"true\"\r\n            [allowColumnResizing]=\"false\" [columnMinWidth]=\"30\" [showColumnHeaders]=\"false\" [columnAutoWidth]=\"false\"\r\n            [wordWrapEnabled]=\"true\">\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n            <dxi-column cellTemplate=\"check\" alignment=\"center\" [width]=\"30\" [allowEditing]=\"true\"></dxi-column>\r\n            <dxi-column dataField=\"name\" alignment=\"left\" [allowEditing]=\"false\" [filterOperations]=\"['contains', '=']\">\r\n            </dxi-column>\r\n            <div *dxTemplate=\"let d of 'check'\">\r\n              <dx-check-box [(value)]=\"d.data.is_show\" (onValueChanged)=\"checkShowHideHangHoa()\"></dx-check-box>\r\n            </div>\r\n          </dx-data-grid>\r\n        </div>\r\n        <!-- Thông tin thuế thu nhập cá nhân khấu trừ -->\r\n        <h3 *ngIf=\"isChungTuTNCN && !isThuXacNhan\" class=\"titleTemptInfo\">{{ 'CONTROLL.LABEL.information_on_personal' |\r\n          translate }}</h3>\r\n        <div *ngIf=\"isChungTuTNCN && !isThuXacNhan\" style=\"margin-bottom: 12px;\">\r\n          <dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSourceTNCN\" [showRowLines]=\"true\"\r\n            [allowColumnResizing]=\"false\" [columnMinWidth]=\"30\" [showColumnHeaders]=\"false\" [columnAutoWidth]=\"false\"\r\n            [wordWrapEnabled]=\"true\">\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n            <dxi-column cellTemplate=\"check\" alignment=\"center\" [width]=\"30\" [allowEditing]=\"true\"></dxi-column>\r\n            <dxi-column dataField=\"name\" alignment=\"left\" [allowEditing]=\"true\" [filterOperations]=\"['contains', '=']\">\r\n            </dxi-column>\r\n            <div *dxTemplate=\"let d of 'check'\">\r\n              <dx-check-box [(value)]=\"d.data.is_show\" (onValueChanged)=\"checkShowHideTNCN()\"></dx-check-box>\r\n            </div>\r\n          </dx-data-grid>\r\n        </div>\r\n        <!-- Độ đậm viền bảng hàng hóa -->\r\n        <dx-form *ngIf=\"hien_thi_mau_vien_bang_hh()\" id=\"form_do_dam\" [formData]=\"frmData.json_data\"\r\n          validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item>\r\n              <dx-color-box [(value)]=\"currentBold\" applyValueMode=\"instantly\"\r\n                (onValueChanged)=\"boldBorder_valueChanged($event)\" [editAlphaChannel]=true></dx-color-box>\r\n              <dxo-label text=\"Màu viền bảng HH\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n        <!-- Thông tin loại phí biên lai điện tử -->\r\n        <div *ngIf=\"hien_thi_loai_phi()\">\r\n          <div class=\"dx-field\" style=\"display: grid;\">\r\n            <div class=\"dx-field-label\" style=\"text-align: left;width: 100%;margin-bottom: 2px;\"><span>Tên loại phí, lệ phí</span> <span style=\"color: red;margin-left: 3px;\">*</span></div>\r\n            <div class=\"dx-field-value\" style=\"width: 100%;\">\r\n              <dx-autocomplete\r\n                placeholder=\"Nhập tên loại phí, lệ phí...\"\r\n                [showClearButton]=\"true\"\r\n                [dataSource]=\"feeArray\"\r\n                [(value)]=\"fee_name\"\r\n                (onItemClick)=\"feeChoose($event)\">\r\n              <div *dxTemplate=\"let item of 'item'\">\r\n                <span>{{ item.name }}</span>\r\n              </div>\r\n              </dx-autocomplete>\r\n            </div>\r\n          </div>\r\n          <div class=\"dx-field\" style=\"display: grid;\">\r\n            <div class=\"dx-field-label\" style=\"text-align: left;width: 100%;margin-bottom: 2px;\"><span>Số tiền</span> <span style=\"color: red;margin-left: 3px;\">*</span></div>\r\n            <div class=\"dx-field-value\" style=\"width: 100%;\">\r\n            <dx-number-box [(value)]=\"fee_money\" format=\"0,###\" [showClearButton]=\"true\">\r\n            </dx-number-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!isChungTuTNCN\" class=\"line-border\"></div>\r\n        <!-- Màu chữ -->\r\n        <dx-form id=\"form_mau_chu\" [formData]=\"frmData.json_data\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item>\r\n              <dx-color-box [(value)]=\"currentColor\" (onValueChanged)=\"colorBox_valueChanged($event)\"></dx-color-box>\r\n              <dxo-label text=\"{{ 'CONTROLL.LABEL.invoice_text_color' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n        <!-- Font chữ -->\r\n        <dx-form id=\"form_font_chu\" [formData]=\"frmData.json_data\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item>\r\n              <dx-select-box #selectBox [searchMode]=\"searchModeOption\" [searchTimeout]=\"searchTimeoutOption\"\r\n                [minSearchLength]=\"minSearchLengthOption\" [searchEnabled]=\"true\" [(value)]=\"currentFont\"\r\n                [items]=\"datasourceFont\" (onValueChanged)=\"fontBox_valueChanged($event)\"></dx-select-box>\r\n              <!-- <dx-color-box [(value)]=\"currentFont\" (onValueChanged)=\"fontBox_valueChanged($event)\"></dx-color-box> -->\r\n              <dxo-label text=\"{{ 'CONTROLL.LABEL.invoice_font_color' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n        <!-- Chọn logo đơn vị -->\r\n        <div class=\"custom-file\" *ngIf=\"!isPhieuTinhTien && !isThuXacNhan \">\r\n          <input type=\"file\" id=\"logo-file\" class=\"custom-file-input\" accept=\"image/x-png,image/jpeg\"\r\n            (change)=\"logoChanged($event)\" aria-describedby=\"fileHelp\" rel=\"TooltipLogo\" title=\"Logo đơn vị\"\r\n            data-toggle=\"tooltip\">\r\n          <label style=\"contain: content;\" class=\"custom-file-label logo-file-label\" for=\"exampleInputFile\">\r\n            {{ 'CONTROLL.LABEL.choose_the_logo' | translate }}\r\n          </label>\r\n        </div>\r\n        <dx-button id=\"remove-logo\" icon=\"fa fa-trash-o\" type=\"danger\" (click)=\"xoaLogo()\" *ngIf=\"!isPhieuTinhTien && !isThuXacNhan\">\r\n        </dx-button>\r\n        <!-- Vị trí hiển thị logo -->\r\n        <dx-form [formData]=\"frmData.json_data\" validationGroup=\"formData\" *ngIf=\"!isPhieuTinhTien && !isThuXacNhan\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"lblDisplayLogo\">\r\n              <dxo-label text=\"{{ 'CONTROLL.LABEL.display_position_logo' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n            <dxi-item cssClass=\"radiogroup\">\r\n              <dx-radio-group [dataSource]=\"optionsLogo\" displayExpr=\"name\" valueExpr=\"code\" [(value)]=\"priority\"\r\n                layout=\"horizontal\" (onValueChanged)=\"onValueChanged($event)\">\r\n              </dx-radio-group>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n        <!-- Chọn ảnh viền hóa đơn -->\r\n        <div class=\"custom-file\" *ngIf=\"hien_thi_anh_vien()\">\r\n          <input type=\"text\" placeholder=\"Chọn ảnh viền hóa đơn\" class=\"inputSearch\" rel=\"TooltipAnhVien\"\r\n            title=\"Ảnh viền hóa đơn\" data-toggle=\"tooltip\">\r\n          <dx-button (click)=\"ImageBoxChanged($event)\" class=\"buttonChoose\" text=\"Browse\"></dx-button>\r\n          <dx-button id=\"remove-vien\" icon=\"fa fa-trash-o\" type=\"danger\" (click)=\"xoaAnhVien()\"></dx-button>\r\n        </div>\r\n        <!-- Chọn ảnh nền <-> chữ nền hóa đơn -->\r\n        <div class=\"custom-file\" *ngIf=\"!isPhieuTinhTien\">\r\n          <input type=\"file\" id=\"watermark-file\" class=\"custom-file-input\" accept=\"image/x-png,image/jpeg\"\r\n            (change)=\"watermarkChanged($event)\" aria-describedby=\"fileHelp\" rel=\"TooltipAnhNen\" title=\"Ảnh nền hóa đơn\"\r\n            data-toggle=\"tooltip\">\r\n          <label style=\"contain: content;\" class=\"custom-file-label watermark-file-label\" for=\"exampleInputFile\">\r\n            {{ 'CONTROLL.LABEL.choose_the_watermark' | translate }}\r\n          </label>\r\n        </div>\r\n        <dx-button *ngIf=\"!isPhieuTinhTien\" id=\"remove-watermark\" icon=\"fa fa-trash-o\" type=\"danger\"\r\n          (click)=\"xoaAnhNen()\"></dx-button>\r\n\r\n        <div class=\"backgroud-text\" *ngIf=\"!isPhieuTinhTien\">\r\n          <dx-form id=\"form-watermark\" [formData]=\"frmData.json_data\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item dataField=\"watermark_text\" [editorOptions]=\"{onValueChanged: reloadInforTemp}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.watermark_text' | translate }}\"></dxo-label>\r\n\r\n              </dxi-item>\r\n              <dxi-item dataField=\"watermark_text_direction\" editorType=\"dxSelectBox\"\r\n                [editorOptions]=\"{items: watermark_text_directions, onValueChanged: reloadInforTemp, displayExpr: 'name', valueExpr: 'value'}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.watermark_text_direction' | translate }}\"></dxo-label>\r\n              </dxi-item>\r\n              <dxi-item>\r\n                <dx-color-box [(value)]=\"currentColorImage\" (onValueChanged)=\"colorBoxImgae_valueChanged($event)\">\r\n                </dx-color-box>\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.watermark_text_color' | translate }}\"></dxo-label>\r\n              </dxi-item>\r\n              <dxi-item dataField=\"watermark_text_size\" editorType=\"dxNumberBox\"\r\n                [editorOptions]=\"{onValueChanged: reloadInforTemp}\">\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.watermark_text_size' | translate }}\"></dxo-label>\r\n              </dxi-item>\r\n              <dxi-item>\r\n                <dx-check-box id=\"checkboxBold\" [(value)]=\"watermark_text_italic\"\r\n                  (onValueChanged)=\"checkboxChangeBold($event)\">\r\n                </dx-check-box>\r\n                <dxo-label text=\"{{ 'CONTROLL.LABEL.italic' | translate }}\"></dxo-label>\r\n              </dxi-item>\r\n              <!-- <dxi-item dataField=\"is_multi_pages\" editorType=\"dxCheckBox\"\r\n                [editorOptions]=\"{onValueChanged: reloadInforTemp}\">\r\n                <dxo-label text=\"Chữ in đậm\"></dxo-label>\r\n              </dxi-item>\r\n              <dxi-item dataField=\"is_view_pages_xy\" editorType=\"dxCheckBox\"\r\n                [editorOptions]=\"{onValueChanged: reloadInforTemp}\">\r\n                <dxo-label text=\"Chữ in nghiêng\"></dxo-label>\r\n              </dxi-item> -->\r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <!-- Độ nét -->\r\n        <dx-form [formData]=\"frmData.json_data\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"lblDisplayLogo\">\r\n              <dxo-label text=\"{{ 'CONTROLL.LABEL.opacity' | translate }}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n        <div class=\"d-flex\">\r\n          <div class=\"first-control d-flex control-input\" style=\"width:310px;\">\r\n            <div class=\"flex-1 m-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content\"\r\n              id=\"slider\">\r\n              <div class=\"ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min\" style=\"width: 62%;\"></div>\r\n              <span tabindex=\"0\" class=\"ui-slider-handle ui-corner-all ui-state-default slider-span\"\r\n                style=\"left: 62%;\"></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"line-border\" *ngIf=\"!isPhieuTinhTien\"></div>\r\n        <dx-form *ngIf=\"hien_thi_ban_the_hien()\" [formData]=\"frmData\"\r\n          validationGroup=\"formData\" id=\"form-no-display-invoice-viewer\">\r\n          <dxi-item dataField=\"is_digital_invoice\" editorType=\"dxCheckBox\"\r\n            [editorOptions]=\"{onValueChanged: onNoDisplayInvoiceViewer}\">\r\n            <dxo-label text=\"{{ 'CONTROLL.LABEL.no_display_e_invoice_viewer' | translate }}\"></dxo-label>\r\n          </dxi-item>\r\n        </dx-form>\r\n        <div *ngIf=\"hien_thi_so_dong_hang_hoa()\" style=\"margin-bottom: 10px;height: 22px;\">\r\n          <div style=\"float: left;width:  35%; padding-top: 4px;font-family: Segoe UI;\">\r\n            {{'CONTROLL.LABEL.count_product' | translate }}</div>\r\n          <div style=\"float: left; width: 18%\">\r\n            <dx-number-box #numberBox [max]=\"150\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"rowData\"\r\n              (onValueChanged)=\"numberBox_valueChanged($event)\"></dx-number-box>\r\n          </div>\r\n        </div>\r\n        <dx-form style=\"margin-top: 10px;margin-bottom: 7px;\" *ngIf=\"!isPhieuTinhTien\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item>\r\n              <dx-select-box #selectBox [searchMode]=\"searchModeOption\" [searchTimeout]=\"searchTimeoutOption\"\r\n                [minSearchLength]=\"minSearchLengthOption\" [searchEnabled]=\"true\" [items]=\"datasourceMauHD\"\r\n                [value]=\"datasourceMauHD[0]\" (onValueChanged)=\"MHD_ValueChanged($event)\"></dx-select-box>\r\n              <dxo-label text=\"{{lblMauHD}}\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n        <!-- Thay đổi cấu trúc mẫu hiển thị k lặp header -->\r\n        <div *ngIf=\"hien_thi_nhieu_trang()\" class=\"row lbl-nhieu-trang\">Cách hiển thị hóa đơn nhiều trang:\r\n        </div>\r\n        <div *ngIf=\"hien_thi_nhieu_trang()\" class=\"row rowRadio\" style=\"display: flex;\">\r\n          <div class=\"rowChildRadio\">\r\n            <dx-radio-group class=\"radioGroup\" [dataSource]=\"optionsPages\" displayExpr=\"name\" valueExpr=\"code\"\r\n              [(value)]=\"mutipage\" layout=\"vertical\" (onValueChanged)=\"onPagesChanged($event)\" [(readOnly)]=\"hideRow\">\r\n            </dx-radio-group>\r\n          </div>\r\n          <div class=\"toggle normal\" style=\"display: block; align-items: center;height: 34px;\">\r\n            <div style=\"margin-top:3px\">\r\n              <img id=\"link14\" style=\"cursor: pointer;padding-left: 13px;\" src=\"assets\\img\\icons\\Icon_Information.png\"\r\n                (mouseleave)=\"onClickTypeInvoice()\" (mouseenter)=\"onClickTypeInvoice()\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n            </div>\r\n            <div style=\"margin-top:17px\">\r\n              <img id=\"link15\" style=\"cursor: pointer;padding-left: 15px;\" src=\"assets\\img\\icons\\Icon_Information.png\"\r\n                (mouseleave)=\"onClicknoHead()\" (mouseenter)=\"onClicknoHead()\" alt=\"efy.vn\" alt=\"Efy.vn\">\r\n            </div>\r\n          </div>\r\n          <dx-popover target=\"#link14\" position=\"top\" [width]=\"400\" [(visible)]=\"isDisplayTypeInvoice\">\r\n            <div *dxTemplate=\"let data of 'content'\">\r\n              <div>\r\n                <img id=\"nhieutrang\" src=\"assets\\img\\icons\\khong_lap_heads.png\" style=\"width:360px\">\r\n              </div>\r\n            </div>\r\n          </dx-popover>\r\n          <dx-popover target=\"#link15\" position=\"top\" [width]=\"400\" [(visible)]=\"isDisplayNoHead\">\r\n            <div *dxTemplate=\"let data of 'content'\">\r\n              <div>\r\n                <img id=\"nhieutrang\" src=\"assets\\img\\icons\\lap_heads.png\" style=\"width:360px\">\r\n              </div>\r\n            </div>\r\n          </dx-popover>\r\n        </div>\r\n        <!-- </div> -->\r\n        <!-- <dx-check-box id=\"checkboxcd\" [(value)]=\"checkboxChuyenDoi\" (onValueChanged)=\"checkboxChange($event)\">\r\n          </dx-check-box> -->\r\n        <div class=\"pull-right modify-panel\" style=\"margin-bottom: 0px;\">\r\n          <!-- <dx-button appBackButton type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\" text=\"Xuất file\"></dx-button> -->\r\n          <dx-button text=\"{{ 'CONTROLL.BUTTON.save' | translate }}\" icon=\"fa fa-floppy-o\" type=\"default\"\r\n            validationGroup=\"formData\" [useSubmitBehavior]=\"true\"></dx-button>\r\n          <dx-button type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\"\r\n            text=\"{{ 'CONTROLL.BUTTON.come_back' | translate }}\" (onClick)=\"backfunc($event)\"></dx-button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-md-4 gallery\">\r\n    <div class=\"collect-information\">\r\n      <h3 class=\"titleTempplate\">{{ 'CONTROLL.LABEL.choose_box_image' | translate }}</h3>\r\n      <div class=\"line-border\"></div>\r\n      <div class=\"row\">\r\n        <div *ngFor=\"let item of items\" class=\"col-md-4 image-gallery\">\r\n          <div class=\"thumbnail\">\r\n            <a href=\"javascript:void(0)\" (click)=\"chosseTemplate(item)\">\r\n              <img src=\"{{item.jpg_file}}\" class=\"img-thumbnail\" style=\"width:100%\">\r\n              <div class=\"caption\">\r\n                <p style=\"text-align: center;\">{{ item.display_name || item.invoice_type }}</p>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"line-border\"></div>\r\n      <div class=\"row\">\r\n        <div class=\"pull-right modify-panel\">\r\n          <dx-button type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\"\r\n            text=\"{{ 'CONTROLL.BUTTON.come_back' | translate }}\" (onClick)=\"QuayLai($event)\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Chỉnh sửa font chữ hóa đơn -->\r\n  <dx-popup class=\"popup\" [width]=\"815\" [height]=\"215\" [showTitle]=\"true\" [dragEnabled]=\"true\"\r\n    [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\" titleTemplate=\"title\">\r\n    <div *dxTemplate=\"let data of 'content'\">\r\n      <div style=\"float: left; width: 137px;margin-top: -13px;\">\r\n        <dx-select-box #selectBox [searchMode]=\"searchModeOption\" [searchTimeout]=\"searchTimeoutOption\"\r\n          [minSearchLength]=\"minSearchLengthOption\" [searchEnabled]=\"true\" [(value)]=\"valueFont\"\r\n          [items]=\"datasourceFont\" (onValueChanged)=\"FontSelect_ValueChanged($event)\"></dx-select-box>\r\n      </div>\r\n      <div class=\"textFont Wfont\">\r\n        <dx-number-box #numberBox [max]=\"60\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"fontSize\"\r\n          (onValueChanged)=\"FontSize_ValueChanged($event)\"></dx-number-box>\r\n      </div>\r\n      <div class=\"textFont colorBox\">\r\n        <dx-color-box style=\"height: 27px;\" [(value)]=\"currentColorText\"\r\n          (onValueChanged)=\"colorBoxText_valueChanged($event)\">\r\n        </dx-color-box>\r\n      </div>\r\n      <div style=\"float: left; width: 24px;margin-left: 10px;margin-top: -13px;\">\r\n        <button [style.background-color]=\"toggleBold ? '#c7c7c7' : '#ffffff'\" (click)=\"enableDisableBold()\"\r\n          style=\"border: none;height: 27px;\" type=\"button\" class=\"fa fa-bold fa-1x\" id=\"color-picker\" tabindex=\"104\">\r\n        </button>\r\n      </div>\r\n      <div style=\"float: left; width: 16px;margin-top: -13px;\">\r\n        <button [style.background-color]=\"toggleItalic ? '#c7c7c7' : '#ffffff'\" (click)=\"enableDisableItalic()\"\r\n          style=\"border: none;height: 27px;\" type=\"button\" class=\"fa fa-italic\" id=\"color-picker\" tabindex=\"104\">\r\n        </button>\r\n      </div>\r\n      <div style=\"float: left; width: 20px;margin-left: 5px;margin-top: -13px;\">\r\n        <button [style.background-color]=\"toggleUnderline ? '#c7c7c7' : '#ffffff'\" (click)=\"enableDisableUnderline()\"\r\n          style=\"border: none;height: 27px;\" type=\"button\" class=\"fa fa-underline\" id=\"color-picker\" tabindex=\"104\">\r\n        </button>\r\n      </div>\r\n      <!-- Căn lề -->\r\n      <div style=\"float: left; width: 22px;margin-left: 5px;margin-top: -13px;\">\r\n        <button [style.background-color]=\"toggleAlignLeft ? '#c7c7c7' : '#ffffff'\" (click)=\"enableDisableAlignLeft()\"\r\n          style=\"border: none;height: 27px;\" type=\"button\" class=\"fa fa-align-left\" id=\"color-picker\" tabindex=\"104\">\r\n        </button>\r\n      </div>\r\n      <div style=\"float: left; width: 22px;margin-left: 5px;margin-top: -13px;\">\r\n        <button [style.background-color]=\"toggleAlignCenter ? '#c7c7c7' : '#ffffff'\"\r\n          (click)=\"enableDisableAlignCenter()\" style=\"border: none;height: 27px;\" type=\"button\"\r\n          class=\"fa fa-align-center\" id=\"color-picker\" tabindex=\"104\">\r\n        </button>\r\n      </div>\r\n      <div style=\"float: left; width: 17px;margin-left: 5px;margin-top: -13px;\">\r\n        <button [style.background-color]=\"toggleAlignRight ? '#c7c7c7' : '#ffffff'\" (click)=\"enableDisableAlignRight()\"\r\n          style=\"border: none;height: 27px;\" type=\"button\" class=\"fa fa-align-right\" id=\"color-picker\" tabindex=\"104\">\r\n        </button>\r\n      </div>\r\n      <!-- Khoảng cách các ký tự -->\r\n      <div style=\"transform: rotate(90deg);width: 28px;float: left;margin-top: 0px;margin-left: 11px;\"\r\n        class=\"line-border\"></div>\r\n      <div style=\"float: left;padding-top: 4px;margin-top: -13px;\">{{ 'CONTROLL.LABEL.word_spacing' | translate }}</div>\r\n      <div class=\"textFont Wfont\" style=\"margin-left: 10px\">\r\n        <dx-number-box #numberBox [max]=\"20\" [min]=\"-20\" [showSpinButtons]=\"true\" [(value)]=\"spacechar\"\r\n          (onValueChanged)=\"SpaceChar_ValueChanged($event)\"></dx-number-box>\r\n      </div>\r\n      <div class=\"textFont Wfont\" style=\"margin-left: 2px;margin-top: -10px\">\r\n        /\r\n      </div>\r\n      <div class=\"textFont Wfont\" style=\"margin-left: 10px;margin-top: -22px\">\r\n        <dx-number-box #numberBox1 [max]=\"1000\" [min]=\"-1020\" [showSpinButtons]=\"true\" [(value)]=\"paddingPostion\"\r\n          (onValueChanged)=\"paddingPostion_ValueChanged($event)\"></dx-number-box>\r\n      </div>\r\n      <!-- Sửa tên -->\r\n      <div style=\"float: left;padding-top: 6px\">{{ 'CONTROLL.LABEL.edit_name_label_invoice' | translate }}</div>\r\n      <div>\r\n        <input type=\"text\" class=\"inputTextChange\" (change)=\"textChanged($event)\" [(value)]=\"textValue\"\r\n          [(readonly)]=\"isReadOnly\">\r\n      </div>\r\n      <!-- Preview -->\r\n      <div style=\"float: left;padding-top: 7px\">Preview</div>\r\n      <div class=\"background-area\">\r\n        <span [ngStyle]=\"textarea\">{{textAria}}</span>\r\n      </div>\r\n    </div>\r\n    <div *dxTemplate=\"let data of 'title'\">\r\n      <h4 class=\"titleEdit\">{{ 'MENU.information_format' | translate }}</h4>\r\n    </div>\r\n  </dx-popup>\r\n\r\n  <!-- Chỉnh sửa độ rộng cột bảng sản phẩm -->\r\n  <dx-popup [width]=\"529\" [height]=\"50\" [showTitle]=\"false\" [dragEnabled]=\"true\" [closeOnOutsideClick]=\"true\"\r\n    [(visible)]=\"showPopupHH\">\r\n    <div *dxTemplate=\"let data of 'content'\">\r\n      <div style=\"float: left; width: 165px;margin-top: -8px;\">\r\n        <span>{{tieude}}:</span>\r\n      </div>\r\n      <div style=\"float: left;padding-top: 4px;margin-top: -13px;margin-right: 10px;\">Width(%)</div>\r\n      <div style=\"float: left; width: 68px;margin-top: -13px;\">\r\n        <dx-number-box #numberBox [max]=\"100\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"widthHH\"\r\n          (onValueChanged)=\"Width_ValueChanged($event)\"></dx-number-box>\r\n      </div>\r\n      <div style=\"float: left;padding-top: 4px;margin-top: -13px;margin-left: 10px;\">Min-Width(px)</div>\r\n      <div style=\"float: left; width: 69px;margin-left: 10px;margin-top: -13px;\">\r\n        <dx-number-box #numberBox [max]=\"500\" [min]=\"1\" [showSpinButtons]=\"true\" [(value)]=\"minwidthHH\"\r\n          (onValueChanged)=\"MinWidthHH_ValueChanged($event)\"></dx-number-box>\r\n      </div>\r\n\r\n    </div>\r\n  </dx-popup>\r\n  <dx-popover  [(visible)]=\"showPopupOver\" [(target)]=\"popoverTarget\" [width]=\"200\">\r\n    <div *dxTemplate=\"let data of 'content'\">\r\n      <span style=\"font-size: 12px;\">{{ popOverText }}</span>\r\n    </div>\r\n  </dx-popover>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/template/components/modifynew/modifynew.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/template/components/modifynew/modifynew.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".template-area{margin-top:20px}.template-area .template-preview{box-shadow:1px 0 10px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);text-align:center;height:800px}.template-area .template-preview iframe{width:66%}.template-area .inforCommon{height:800px}.template-area .collect-information{background:#fff;padding:30px 10px;box-shadow:1px 0 10px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);border-radius:3px}.template-area .collect-information>h3{font-weight:bold;margin-bottom:15px;text-align:justify}.template-area .collect-information #form_top{margin-bottom:10px}.template-area .collect-information #form_mau_chu{margin-top:15px}.template-area .collect-information #form_do_dam{margin-top:15px}.template-area .collect-information #form_font_chu{margin-top:15px}.template-area .collect-information #form-watermark{margin-bottom:10px;margin-top:10px;margin-left:10px}.titleTemptInfo{font-size:16px;font-weight:bold;margin-top:17px;margin-bottom:5px}.titleTemptInfoBB{font-size:16px;font-weight:bold;margin-top:17px;margin-bottom:4px}.titleTempplate{font-size:16px;font-weight:bold;text-transform:uppercase;margin-top:-15px}.line-border{border:0.5px solid #CDCDCD;margin:8px 0}.custom-file{margin-top:15px;width:89%}.anh-nen{margin-bottom:15px;width:331px}#remove-logo{margin-top:15px;margin-left:5px;position:absolute;height:calc(2.25rem + 2px);width:calc(2.25rem + 2px)}#remove-watermark{margin-top:15px;margin-left:5px;position:absolute;height:calc(2.25rem + 2px);width:calc(2.25rem + 2px)}#remove-vien{margin-left:5px;position:absolute;height:calc(2.25rem + 2px);width:calc(2.25rem + 2px)}.dx-button{margin-right:0px;margin-left:8px}#checkbox-cd{margin-bottom:15px}::ng-deep .template.invoice_series input{text-transform:uppercase}::ng-deep .lblDisplayLogo .dx-field-item-label-content{margin:15px 0px 5px 0px}::ng-deep .radiogroup .dx-radiobutton{margin-left:25px}::ng-deep .nhieu-trang .dx-radiobutton{margin-left:25px;margin-bottom:10px}::ng-deep .check-box-view-xy .dx-checkbox-container{margin-right:0px;margin-bottom:10px}.backgroud-text{width:100%;border:0.5px solid #CDCDCD;height:175px;margin-bottom:10px;padding-right:9px;margin-top:15px;display:none}::ng-deep .template-series .dx-item.dx-box-item{flex:1 1 0px !important}::ng-deep .dx-item.dx-box-item .check-box-view-xy{flex:0 1 0px !important}::ng-deep .invS{margin-bottom:7px;margin-top:7px}::ng-deep .text-box-right .dx-texteditor{margin-top:-8px;margin-bottom:8px;width:245px}::ng-deep .text-box-left .dx-texteditor{width:100px;margin-right:-15px;margin-top:-8px;margin-bottom:8px}.xem-mau-chuyen-doi-label{width:218px;padding-right:10px}#form-hoa-don-nhieu-trang{margin-left:33px}.group-dx-checkbox{padding-top:6px;margin-bottom:10px}#checkbox-cd{margin-bottom:10px}#checkbox-cd.dx-state-disabled{background-color:#EEEEEE}.themmoi{display:inline-block;margin-left:10px}.textFont{float:left;width:60px;margin-top:-13px}::ng-deep .Wfont .dx-texteditor-buttons-container{width:35%}::ng-deep .colorBox .dx-colorbox-input-container .dx-colorbox-input.dx-texteditor-input{padding-left:29px}::ng-deep .colorBox .dx-colorbox-input-container .dx-colorbox-input{padding-left:29px}.ui-datepicker-prev.ui-state-hover .ui-icon,.ui-datepicker-prev.ui-state-focus .ui-icon,.ui-datepicker-prev.ui-button:hover .ui-icon,.ui-datepicker-prev.ui-button:focus .ui-icon,.ui-datepicker-next.ui-state-hover .ui-icon,.ui-datepicker-next.ui-state-focus .ui-icon,.ui-datepicker-next.ui-button:hover .ui-icon,.ui-datepicker-next.ui-button:focus .ui-icon,.ui-datepicker-trigger{margin-top:-29px;cursor:pointer;float:right;position:relative}.gallery{display:none}td.no-pading .ui-datepicker-trigger{margin-top:-29px}.image-gallery{margin-bottom:15px}.buttonChoose{width:21%;height:38px;margin:0px 0px 2px 0px;background:#ddd;border:none;cursor:pointer;border-radius:0px 4px 4px 0px;font-size:15px}.buttonChoose:hover{background:#ccc}.inputSearch{padding:6px;font-size:14px;width:79%;border:0.5px solid #635c5c40;border-radius:4px 0px 0px 4px;height:38px}.cell-highlighted{background-color:#635c5c40}.ui-dialog{border:none !important;box-shadow:2px 2px 13px rgba(0,0,0,0.3)}.ui-dialog *{font-size:13px}.ui-widget-header{border:none;background:transparent !important;color:#222222;font-weight:bold}.m-detail-popup .ui-dialog .ui-dialog-title{padding-top:16px !important}.ui-dialog .ui-dialog-titlebar-close{top:16px;right:8px;border:none;opacity:7}.ui-dialog .ui-dialog-titlebar-close:hover,.ui-dialog .ui-dialog-titlebar-close:active,.ui-dialog .ui-dialog-titlebar-close:focus{opacity:1}.ui-dialog .m-toolbar{border-width:0;background-color:#F5F5F5;border-top:solid 1px #ddd;padding:16px}.ui-dialog .m-toolbar .btn{min-width:80px;font-size:13px !important}.ui-dialog,.ui-dialog .ui-dialog-content{padding:0}.ui-dialog .content{padding:0px 16px 16px 16px}.ui-dialog .ui-dialog-title{font-size:20px}.ui-dialog .ui-dialog-buttonpane{background-color:#FFF}.ui-widget-content{border-color:#ddd}.ui-menu.ui-widget.ui-widget-content{border:unset;box-shadow:-1px 1px 5px 1px #ddd}.ui-menu.ui-widget.ui-widget-content::-webkit-scrollbar{width:4px}.ui-menu.ui-widget.ui-widget-content:hover::-webkit-scrollbar{width:8px}.ui-menu.ui-widget.ui-widget-content::-webkit-scrollbar-thumb{background-color:#C7C7C7}.ui-menu.ui-widget.ui-widget-content::-webkit-scrollbar-track{background-color:#F0F0F0}.m-message-box .message{display:inline-block}.m-messag-dialog .m-message-box{padding-left:88px;min-height:62px !important;z-index:10;background-position:16px 5px;background-repeat:no-repeat}.m-message .m-message-box-content{padding-left:88px;min-height:62px !important;z-index:10;background-position:16px 5px;background-repeat:no-repeat;background-position-x:17px;height:auto !important}.first-control{margin-bottom:10px;margin-top:10px;width:380px !important}.txt-body-content{width:295px;height:112px;resize:none;border:1px solid #ccc}.txt-body-content:disabled{background-color:#fff}.m-icon-isMac{background-size:32px 32px}.m-messag-dialog .ui-dialog-titlebar{height:30px;padding:0 !important;margin:0 !important}.m-messag-dialog .ui-dialog .ui-dialog-title{display:none}.m-messag-dialog .ui-dialog-titlebar-close{top:8px;right:8px;margin:0;padding:0;z-index:99;border:none;opacity:0.7}.m-messag-dialog .ui-dialog-titlebar-close:hover,.m-messag-dialog .ui-dialog-titlebar-close:focus,.m-messag-dialog .ui-dialog-titlebar-close:active{opacity:1}.m-messag-dialog .ui-dialog-buttonpane{background-color:#FFF;padding:0;margin:0;border:none}.m-messag-dialog .ui-dialog-buttonpane button{margin:16px 10px 16px 0;cursor:pointer;font-size:13px}.m-messag-dialog .ui-dialog-buttonpane button:last-child{margin-right:16px}.m-messag-dialog .ui-dialog-title{display:none}.m-messag-dialog .ui-state-hover,.m-messag-dialog .ui-widget-content .ui-state-hover,.m-messag-dialog .ui-widget-header .ui-state-hover{border:1px solid #ddd !important;background-color:#fafcfd !important}::ng-deep .dx-datagrid-rowsview{border-top:none}.m-messag-dialog .content{padding:0 16px 0 0}.m-messag-dialog .content .title{font-size:18px;padding-bottom:10px}.m-messag-dialog .content span{display:block;line-height:22px;text-align:justify}.m-messag-dialog .content .no-title{font-size:16px}.custom-combobox{display:flex;display:-webkit-flex;width:100%}.bottom-padding{padding:0 !important;font-size:16px !important}.custom-combobox-input{flex:1;-webkit-box-flex:1}.custom-combobox-input:focus{border:1px solid #309FE9 !important;box-shadow:unset}.custom-combobox-input,.custom-combobox-toggle{height:32px}.custom-combobox-toggle{width:32px;z-index:2;margin-left:-33px;height:28px;margin-top:3px}.custom-combobox-toggle:focus{outline:none !important}.flex-1{flex-grow:1;flex:1}.m-col{padding-left:8px}.m-row .m-col:first-child{padding-left:0}.flex,.flex1{flex:1}.flex2{flex:2}.ui-slider-handle:nth-child(4){background:red}.ui-slider-range{background:cyan}.dx-dropdowneditor.dx-dropdowneditor-field-clickable{cursor:pointer;height:27px}.background-area{width:714px;border:0.5px solid #CDCDCD;height:90px;margin-top:10px;float:left;padding:5px;margin-left:10px;margin-top:10px}.inputTextChange{font-size:14px;width:714px;border:0.5px solid #635c5c40;height:25px;margin-left:11px;margin-top:5px}.titleEdit{font-size:18px;font-weight:600;text-transform:uppercase;color:#0e76bc}::ng-deep .custom-tempt .dx-texteditor-container .dx-texteditor-input-container .dx-texteditor-input{padding:0px 9px}::ng-deep .template.invoice_series input{text-transform:uppercase}.rowRadio{margin-top:10px}.rowRadio .rowChildRadio .radioGroup{display:flex;justify-content:center}.lbl-nhieu-trang{color:#333;margin-left:1px;margin-top:15px}::ng-deep .radioGroup .dx-radiobutton{margin-left:25px;margin-bottom:10px}@media screen and (max-width: 1367px){.template-area{margin-top:20px}.template-area .template-preview{box-shadow:1px 0 10px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);text-align:center;height:500px}.template-area .template-preview iframe{width:98%}.template-area .inforCommon{height:500px}}\n"

/***/ }),

/***/ "./src/app/modules/template/components/modifynew/modifynew.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/template/components/modifynew/modifynew.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModifynewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifynewComponent", function() { return ModifynewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};















var ModifynewComponent = /** @class */ (function () {
    function ModifynewComponent(authService, route, router, templateService, translate, http, zone, renderer) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.templateService = templateService;
        this.translate = translate;
        this.http = http;
        this.zone = zone;
        this.renderer = renderer;
        this.popoverTarget = false;
        this.popOverText = '';
        this.formItems = [];
        this.customForms = [];
        this.id = "";
        this.frmData = new _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__["ModifyModel"]();
        this.pattern = _config_index__WEBPACK_IMPORTED_MODULE_7__["pattern"];
        this.rules = { 'h': /^[A-Za-z]{2}[0-9]{2}\z/ };
        this.rulesTemplateCode = { 'h': /^[A-Za-z]{2}[0-9]{2}\z/ };
        this.rulesInvoiceSeries = { 'h': /^[A-Za-z]{2}[0-9]{2}\z/ };
        this.maskInvoiceSeries = 'CC/00E';
        this.checkboxChuyenDoi = false;
        this.selector = {};
        this.colspan = 4;
        this.isDisIsViewPagesXY = true;
        this.isDisXemChuyenDoi = true;
        this.items = [];
        this.showPopup = false;
        this.showPopupHH = false;
        this.rowData = 1;
        this.deleterowData = 1;
        this.frmFont = {};
        this.searchModeOption = "contains";
        this.searchTimeoutOption = 200;
        this.minSearchLengthOption = 0;
        this.classFontChange = "Default";
        this.arrFontChange = [];
        this.isFirtsOpenForm = false;
        this.isBegin = false;
        this.isBenBan = false;
        this.isBenMua = false;
        this.isMauDraff = false;
        this.reportHeight = "1026px";
        this.isReadOnly = false;
        this.maxWidth = 794;
        this.maxHeight = 1123;
        this.isDisplayKyHieu = false;
        this.isDisplayMauSo = false;
        this.hideRow = false;
        this.readOnlyMauSo = false;
        this.isDisplayTypeInvoice = false;
        this.isDisplayNoHead = false;
        this.isChungTuTNCN = false;
        this.isMauHoanThue = false;
        this.isPhieuTinhTien = false;
        this.isMayTinhTien = false;
        this.isThuXacNhan = false;
        this.isTemVeThe = false;
        this.datasourceFont = [];
        this.datasourceMauHD = [];
        this.itemsTypeDisplay = [];
        this.watermark_text_directions = [];
        this.arrColumns = [];
        this.listNameImage = [];
        this.arrayExtendBuyer = [];
        this.isTT78 = false;
        this.isCopyMau = false;
        this.isTT32 = false;
        this.isPhieuThuHS = false;
        this.showPopupOver = false;
        this.arrThuXacNhan = [];
        this.isBienLaiDienTu = false;
        this.fieldBuyerBLArray = [];
        this.fieldProductBLArray = [];
        this.feeArray = [];
        this.cusorFieldArray = [];
        this.arrIds = [];
        this.arrAfterIds = [];
        this.ds_nguoi_mua_ve_the = [];
        this.extention = "png";
        this.a = function (e) {
            console.log(e.value);
        };
        this.reloadIframePreview = function (e) {
            var data = _this.frmData;
            _this.frmData.invoice_series = _this.frmData.invoice_series.toUpperCase();
            if (_this.isChungTuTNCN) {
                var data_1 = _this.frmData;
                $('#preview-iframe').contents().find(".number-form").html(data_1.template_code);
                var a = data_1.invoice_series.substr(0, 2);
                var b = data_1.invoice_series.substr(2, 4);
                $("#preview-iframe").contents().find(".symbol").html(a + '/' + b + '/E');
            }
            else if (_this.isPhieuThuHS) {
                var data_2 = _this.frmData;
                $('#preview-iframe').contents().find(".number-form").html(data_2.template_code);
                var a = data_2.invoice_series.substr(0, 2);
                var b = data_2.invoice_series.substr(2, 4);
                $("#preview-iframe").contents().find(".symbol").html(b + '/' + a);
            }
            else if (_this.isBienLaiDienTu) {
                _this.frmData.invoice_series = _this.frmData.invoice_series.toUpperCase();
                var data_3 = _this.frmData;
                var a = data_3.invoice_series.substr(0, 2);
                var b = data_3.invoice_series.substr(2, 2);
                $("#preview-iframe").contents().find(".number-form").html(_this.getKyTuMauSo() + "0-" + data_3.template_code);
                $("#preview-iframe").contents().find(".symbol").html(a + '-' + b + 'E');
            }
            else if (_this.frmData.is_decree_new) {
                $('#preview-iframe').contents().find(".number-form").html(data.template_code);
                $('#preview-iframe').contents().find(".symbol").html(data.invoice_series);
                var charInv = _this.frmData.invoice_series.substring(1, 0);
                $('#preview-iframe').contents().find(".symbol-number-form").html(data.template_code + data.invoice_series.toUpperCase());
                if ($('#preview-iframe').contents().find(".symbol-number-form-attach"))
                    $('#preview-iframe').contents().find(".symbol-number-form-attach").html(data.template_code + data.invoice_series.toUpperCase());
                if (_this.HinhThucHD != "C" || charInv == "K") {
                    $('#preview-iframe').contents().find(".tax_authority_code").css('display', 'none');
                }
                else {
                    $('#preview-iframe').contents().find(".tax_authority_code").css('display', 'block');
                }
            }
            else {
                _this.frmData.invoice_series = _this.frmData.invoice_series.toUpperCase();
                var data_4 = _this.frmData;
                var a = data_4.invoice_series.substr(0, 2);
                var b = data_4.invoice_series.substr(2, 2);
                $("#preview-iframe").contents().find(".number-form").html(_this.invoice_type + "0/" + data_4.template_code);
                $("#preview-iframe").contents().find(".symbol").html(a + '/' + b + 'E');
            }
        };
        /////// Xử lý chữ nền
        this.reloadInforTemp = function () {
            var data = JSON.parse(JSON.stringify(_this.frmData));
            if (_this.isChungTuTNCN) {
                if (_this.isThuXacNhan) {
                    data.invoice_series = data.invoice_series.toUpperCase();
                }
                else {
                    _this.frmData.invoice_series = _this.frmData.invoice_series.toUpperCase();
                    var a = data.invoice_series.substr(0, 2);
                    var b = data.invoice_series.substr(2, 4);
                    data.invoice_series = a + '/' + b + '/E';
                    data.template_code = data.template_code;
                }
            }
            else if (_this.isPhieuThuHS) {
                _this.frmData.invoice_series = _this.frmData.invoice_series.toUpperCase();
                var a = data.invoice_series.substr(0, 2);
                var b = data.invoice_series.substr(2, 4);
                data.invoice_series = a + b;
                data.template_code = data.template_code;
            }
            else if (_this.isBienLaiDienTu) {
                _this.frmData.invoice_series = _this.frmData.invoice_series.toUpperCase();
                var a = data.invoice_series.substr(0, 2);
                var b = data.invoice_series.substr(2, 2);
                data.invoice_series = a + '-' + b + 'E';
                data.template_code = _this.getKyTuMauSo() + "0-" + data.template_code;
            }
            else if (!_this.frmData.is_decree_new) {
                _this.frmData.invoice_series = _this.frmData.invoice_series.toUpperCase();
                var a = data.invoice_series.substr(0, 2);
                var b = data.invoice_series.substr(2, 2);
                data.invoice_series = a + '/' + b + 'E';
                data.template_code = _this.invoice_type + "0/" + data.template_code;
            }
            _this.arrIds.forEach(function (id) {
                $('#' + id).contents().find(".number-form").html(data.template_code);
                $('#' + id).contents().find(".symbol").html(data.invoice_series.toUpperCase());
                $('#' + id).contents().find(".symbol-number-form").html(data.template_code + data.invoice_series.toUpperCase());
                if ($('#' + id).contents().find(".symbol-number-form-attach"))
                    $('#' + id).contents().find(".symbol-number-form-attach").html(data.template_code + data.invoice_series.toUpperCase());
                if (_this.frmData.json_data.watermark_text) {
                    $('#' + id).contents().find(".water-text").html(_this.frmData.json_data.watermark_text);
                    var slider = $("#slider").slider("values", 0);
                    $("#slider").slider("option", "value", slider);
                    // $('#' + id).contents().find(".water-text").draggable({
                    //   aspectRatio: 1 / 2,
                    // });
                    $('#' + id).contents().find(".water-text").css('cursor', 'move');
                    if (_this.frmData.json_data.watermark_text_size) {
                        $('#' + id).contents().find(".water-text").css('font-size', _this.frmData.json_data.watermark_text_size);
                    }
                    else {
                        $('#' + id).contents().find(".water-text").css('font-size', 50);
                        _this.frmData.json_data.watermark_text_size = "50";
                    }
                    switch (_this.frmData.json_data.watermark_text_direction) {
                        case 'Horizontal':
                            $('#' + id).contents().find(".water-text").css('transform', 'rotate(0deg)');
                            break;
                        case 'Vertical':
                            $('#' + id).contents().find(".water-text").css('transform', 'rotate(-90deg)');
                            break;
                        case 'ForwardDiagonal':
                            $('#' + id).contents().find(".water-text").css('transform', 'rotate(50deg)');
                            break;
                        case 'BackwardDiagonal':
                            $('#' + id).contents().find(".water-text").css('transform', 'rotate(90deg)');
                            break;
                        default:
                            $('#' + id).contents().find(".water-text").css('transform', 'rotate(0deg)');
                            _this.frmData.json_data.watermark_text_direction = "rotate(0deg)";
                            break;
                    }
                }
                else {
                    $('#' + id).contents().find(".water-text").html('');
                    _this.frmData.json_data.watermark_text_size = null;
                    _this.frmData.json_data.watermark_text_direction = null;
                    _this.frmData.json_data.watermark_text_color = null;
                    _this.currentColorImage = null;
                    _this.watermark_text_italic = false;
                }
            });
        };
        this.reloadFromServer = function () {
            var data = JSON.parse(JSON.stringify(_this.frmData));
            var a = data.invoice_series.substr(0, 2);
            var b = data.invoice_series.substr(2, 2);
            var rgbColor = _this.hexToRgb(data.json_data.watermark_text_color);
            if (rgbColor) {
                data.json_data.watermark_text_color = rgbColor.r + ";" + rgbColor.g + ";" + rgbColor.b;
            }
            data.invoice_series = a + '/' + b + 'E';
            data.template_code = _this.invoice_type + "0/" + data.template_code;
            if (_this.isEdit()) {
                data.raw_file = _this.frmData.raw_file;
                data.invoice_type = _this.frmData.invoice_type;
            }
            else {
                data.raw_file = _this.templateService.raw_file;
                data.invoice_type = _this.templateService.invoice_type;
            }
            var temp = _this.checkboxChuyenDoi ? 1 : 0;
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
            _this.templateService.getTemplateModify(data, temp).subscribe(function (rs) {
                if (rs.status == 'success') {
                    _this.dataPreview = js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].decode(rs.data.template.html_file);
                    // Helper.dowloadFile('demo.html', 'html', rs.data.template.html_file);
                    _this.genDatatoTemplate();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
            });
        };
        this.onIsMultiPages = function (e) {
            // this.reloadFromServer();
            if (e.value) {
                _this.isDisIsViewPagesXY = false;
            }
            else {
                _this.isDisIsViewPagesXY = true;
            }
        };
        this.onIsUseFormConvert = function (e) {
            if (e.value) {
                _this.isDisXemChuyenDoi = false;
            }
            else {
                _this.isDisXemChuyenDoi = true;
                _this.checkboxChuyenDoi = false;
            }
        };
        this.onNoDisplayInvoiceViewer = function (e) {
            if (e.value) {
                $("#preview-iframe").contents().find('.invoice_date:parent').each(function () {
                    $(this).insertBefore($(this).prev('.instance_invoice'));
                });
                $('#preview-iframe').contents().find(".ban-sao").html('&nbsp;&nbsp;&nbsp;&nbsp;');
                $('#preview-iframe').contents().find(".ban-sao-in-duoi").html('&nbsp;&nbsp;&nbsp;&nbsp;');
            }
            else {
                $("#preview-iframe").contents().find('.instance_invoice:parent').each(function () {
                    $(this).insertBefore($(this).prev('.invoice_date'));
                });
                $('#preview-iframe').contents().find(".ban-sao").html('(Bản thể hiện của hóa đơn điện tử)');
                $('#preview-iframe').contents().find(".ban-sao-in-duoi").html('(E-Invoice viewer)');
            }
        };
        $('input[rel="TooltipLogo"]').tooltip();
        $('input[rel="TooltipAnhNen"]').tooltip();
        $('input[rel="TooltipAnhVien"]').tooltip();
        translate.use(this.authService.getLanguage());
        this._translate = this.authService.getTranslate();
    }
    ModifynewComponent.prototype.onKeyDown = function (ev) {
        var _this = this;
        if (ev.keyCode === 27) {
            this.showPopup = false;
            if (this.arrFontChange) {
                if (this.arrFontChange.length > 0) {
                    var _loop_1 = function (i) {
                        this_1.arrIds.forEach(function (id) {
                            $('#' + id).contents().find("." + _this.arrFontChange[i]).css('border-radius', '3px').css('border', 'none');
                        });
                    };
                    var this_1 = this;
                    for (var i = 0; i < this.arrFontChange.length; i++) {
                        _loop_1(i);
                    }
                }
                this.arrFontChange = [];
            }
            this.valueFont = null;
            this.fontSize = null;
            this.currentColorText = null;
            this.spacechar = null;
            this.paddingPostion = null;
            ///////////
            this.showPopupHH = false;
            this.classFontChange = "";
            this.widthHH = null;
            this.minwidthHH = null;
        }
    };
    ModifynewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadInforDefault();
        this.logoTempt = this.templateService.logoTempt;
        this.id = this.route.snapshot.queryParams['id'];
        this.route.data.subscribe(function (data) {
            _this.infoDangKy = data.template;
            if (_this.infoDangKy && _this.infoDangKy.id)
                _this.isTT78 = true;
            if (_this.isEdit() || _this.templateService.isCopy) {
                var dateTempt = void 0;
                if (_this.templateService.isCopy) {
                    _this.isCopyMau = true;
                    dateTempt = _this.templateService.data;
                    dateTempt.symbol_no_vat = "/";
                    _this.invoice_type = _this.templateService.data.invoice_type;
                    if (_this.templateService.data.template_type === "THU_XAC_NHAN_THU_NHAP") {
                        _this.isThuXacNhan = true;
                    }
                    if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].loaihoadon.CTT56)
                        _this.isChungTuTNCN = true;
                    if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].loaihoadon.BLP)
                        _this.isBienLaiDienTu = true;
                    if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].loaihoadon.HSPT)
                        _this.isPhieuThuHS = true;
                    if (_this.isInvoiceTypeNotDependTT78()) {
                        _this.frmData.fillData(dateTempt, _this.invoice_type, false, true);
                        _this.isTT78 = false;
                    }
                    else
                        _this.frmData.fillData(dateTempt, _this.invoice_type, false, _this.isTT78);
                    if (!_this.isTT78) {
                        var year = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format("YYYY").slice(2, 4);
                        _this.frmData.invoice_series = "  " + year;
                        if (_this.isChungTuTNCN) {
                            if (!_this.isThuXacNhan) {
                                year = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format("YYYY");
                                _this.frmData.invoice_series = "  " + year;
                            }
                            else {
                                _this.frmData.invoice_series = year + "  ";
                            }
                        }
                        if (_this.isPhieuThuHS)
                            _this.frmData.invoice_series = year + "  ";
                    }
                    if (!_this.frmData.is_decree_new && _this.isTT78)
                        _this.isTT32 = true;
                }
                else {
                    dateTempt = data.template;
                    _this.invoice_type = data.template.invoice_type;
                    if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].loaihoadon.CTT56)
                        _this.isChungTuTNCN = true;
                    if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].loaihoadon.BLP)
                        _this.isBienLaiDienTu = true;
                    if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].loaihoadon.HSPT)
                        _this.isPhieuThuHS = true;
                    if (dateTempt.template_type === "THU_XAC_NHAN_THU_NHAP") {
                        _this.isThuXacNhan = true;
                    }
                    if (_this.isInvoiceTypeNotDependTT78()) {
                        _this.frmData.fillData(dateTempt, _this.invoice_type, true, true);
                        _this.isTT78 = false;
                    }
                    else
                        _this.frmData.fillData(dateTempt, _this.invoice_type, true, _this.isTT78);
                    if (_this.templateService.istemplateOld || _this.frmData.symbol_no_vat == "-")
                        _this.itemsTypeDisplay.push("-");
                }
                var raw_file_Decode = js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].decode(dateTempt.raw_file);
                var raw_file_Parse = JSON.parse(raw_file_Decode);
                _this.dataPreview = raw_file_Parse.html + "</html>";
                if (dateTempt.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe) {
                    _this.isMauHoanThue = true;
                    _this.dataPreviewAttach = raw_file_Parse.html_attach + "</html>";
                }
                _this.watermark_image_default = raw_file_Parse.watermark_image_default;
                _this.watermark_image = raw_file_Parse.watermark_image;
                _this.dataSource = dateTempt.json_data.fields.filter(function (x) { return x.type == "1" || x.type == "2"; });
                _this.dataSourceBenMua = dateTempt.json_data.fields.filter(function (x) { return x.type == "3" || x.type == "4"; });
                _this.dataSourceUserTXN = dateTempt.json_data.fields.filter(function (x) { return x.type == "7"; });
                _this.ds_hang_hoa_dich_vu = dateTempt.json_data.fields.filter(function (x) { return x.type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].truong_mo_rong.hang_hoa_hoa_don || x.type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].truong_trong_csdl.hang_hoa_hoa_don; });
                _this.dataSourceTXN = dateTempt.json_data.fields.filter(function (x) { return x.type == "8" && x.name !== 'tien-thue-nha-txn'; });
                // this.dataSourceTXNOther = dateTempt.json_data.fields.filter(x => (x.type == "8" && x.name === 'tien-thue-nha-txn') || x.type === '4');
                _this.dataSourceHangHoa = dateTempt.json_data.fields.filter(function (x) { return x.type == "5"; });
                var dataSourceTNCN = dateTempt.json_data.fields.filter(function (x) { return x.code != '1a783984-576d-c322-7843-bdacf97ac189' && x.code != '2a783984-576d-c322-7843-bdacf97ac189' && x.code != '3a783984-576d-c322-7843-bdacf97ac189' && x.code != '4a783984-576d-c322-7843-bdacf97ac189' && x.code != '5a783984-576d-c322-7843-bdacf97ac189' && x.type == '5'; });
                if (dataSourceTNCN.length == 0) {
                    _this.dataSourceTNCN = _this.dataSourceTNCN;
                }
                else {
                    _this.dataSourceTNCN = dataSourceTNCN;
                }
                if (_this.frmData.template_type === _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.VeTheInSanMenhGia || _this.frmData.template_type === _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.VeTheKhongInSanMenhGia)
                    _this.isTemVeThe = true;
                if (_this.frmData.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.PhieuInMayTinhTien)
                    _this.isPhieuTinhTien = true;
                if (_this.frmData.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.HoaDonKhoiTaoTumayTinhTien)
                    _this.isMayTinhTien = true;
                if (_this.frmData.template_type == "THU_XAC_NHAN_THU_NHAP")
                    _this.isThuXacNhan = true;
                _this.paper_size = dateTempt.paper_size;
                if (!_this.isPhieuThuHS && !_this.isChungTuTNCN && _this.frmData.is_decree_new) {
                    _this.HinhThucHD = _this.frmData.invoice_series.substring(1, 0);
                    if (_this.isCopyMau && _this.isTT78) {
                        var changeInvoiceWithCode = false;
                        if (_this.infoDangKy.is_invoice_with_code == "0") {
                            _this.HinhThucHD = "K";
                            if (_this.frmData.is_invoice_with_code)
                                changeInvoiceWithCode = true;
                            _this.frmData.is_invoice_with_code = false;
                        }
                        else if (_this.infoDangKy.is_invoice_with_code == "1") {
                            _this.HinhThucHD = "C";
                            if (!_this.frmData.is_invoice_with_code)
                                changeInvoiceWithCode = true;
                            _this.frmData.is_invoice_with_code = true;
                        }
                        if (changeInvoiceWithCode)
                            _this.frmData.invoice_series = _this.HinhThucHD + _this.frmData.invoice_series.substring(1);
                        else
                            _this.frmData.invoice_series = _this.HinhThucHD + _this.frmData.invoice_series.substring(1, 4);
                    }
                }
            }
            else {
                _this.invoice_type = _this.templateService.invoice_type;
                if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].loaihoadon.CTT56)
                    _this.isChungTuTNCN = true;
                if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].loaihoadon.HSPT)
                    _this.isPhieuThuHS = true;
                if (_this.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].loaihoadon.BLP)
                    _this.isBienLaiDienTu = true;
                //trường mở rộng
                _this.isDisXemChuyenDoi = false;
                _this.frmData.is_multi_vat = _this.templateService.is_multi_vat;
                _this.frmData.number_of_row = _this.templateService.number_of_row;
                _this.frmData.template_type = _this.templateService.template_type;
                // this.frmData.is_multi_pages = false; //this.templateService.is_multi_pages
                _this.isDisIsViewPagesXY = false;
                _this.frmData.is_view_pages_xy = false;
                _this.frmData.seller_sign_position = _this.templateService.seller_sign_position;
                _this.frmData.buyer_sign_position = _this.templateService.buyer_sign_position;
                _this.frmData.is_discount = _this.templateService.is_discount;
                _this.paper_size = _this.templateService.paper_size;
                _this.frmData.paper_size = _this.templateService.paper_size;
                //fill
                if (_this.frmData.template_type === _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.VeTheInSanMenhGia || _this.frmData.template_type === _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.VeTheKhongInSanMenhGia)
                    _this.isTemVeThe = true;
                if (_this.frmData.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.PhieuInMayTinhTien)
                    _this.isPhieuTinhTien = true;
                if (_this.frmData.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.HoaDonKhoiTaoTumayTinhTien)
                    _this.isMayTinhTien = true;
                if (_this.frmData.template_type == "THU_XAC_NHAN_THU_NHAP")
                    _this.isThuXacNhan = true;
                var year = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format("YYYY").slice(2, 4);
                if (_this.isInvoiceTypeNotDependTT78())
                    _this.isTT78 = false;
                if (_this.isChungTuTNCN) {
                    if (_this.isThuXacNhan) {
                        _this.frmData.template_code = "TXN";
                    }
                    else {
                        _this.frmData.template_code = "CTT56";
                        year = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format("YYYY");
                    }
                }
                else if (_this.isPhieuThuHS) {
                    _this.frmData.template_code = "PT";
                }
                _this.frmData.invoice_series = "  " + year;
                if (_this.isThuXacNhan) {
                    _this.frmData.invoice_series = year + "  ";
                }
                if (_this.isPhieuThuHS)
                    _this.frmData.invoice_series = year + "  ";
                var account = _this.authService.getCurrentUser().account;
                if (_this.templateService.invoice_type == _this.templateService.invoice_type_begin) {
                    var invoice_series = _this.templateService.invoice_series_begin ? _this.templateService.invoice_series_begin.replace('/', '') : "";
                    _this.frmData.invoice_series = invoice_series.slice(0, -1);
                    _this.frmData.template_code = _this.templateService.template_code_begin ? _this.templateService.template_code_begin.replace(_this.templateService.invoice_type_begin + "0/", '') : "";
                }
                _this.frmData.json_data.name = account.name;
                _this.frmData.json_data.tax_code = account.tax_code;
                _this.frmData.json_data.business_address = account.business_address;
                _this.frmData.json_data.company_email = account.email;
                _this.frmData.json_data.phone = account.phone;
                _this.frmData.json_data.bank_name = account.bank_name;
                _this.frmData.json_data.bank_account_number = account.bank_account_number;
                _this.frmData.json_data.website = account.website;
                if (_this.templateService.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.HoaDonKiemToKhaiHoanVe) {
                    _this.isMauHoanThue = true;
                    _this.dataPreviewAttach = js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].decode(_this.templateService.html_file_attach);
                }
                _this.dataPreview = js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].decode(_this.templateService.html_file);
                _this.customInforBenBan(account);
                _this.customInforBenMua();
                _this.customInforHangHoa();
            }
            if (_this.isChungTuTNCN) {
                if (_this.isThuXacNhan) {
                    _this.datasourceMauHD = _this.datasourceMauHD.filter(function (p) { return p != "Mẫu chuyển đổi"; });
                    _this.hideRow = true;
                }
                else {
                    _this.hideRow = true;
                }
            }
            else if (_this.isPhieuThuHS || _this.isBienLaiDienTu) {
                _this.datasourceMauHD = _this.datasourceMauHD.filter(function (p) { return p != "Mẫu chuyển đổi"; });
            }
            if (!_this.isBienLaiDienTu && !_this.isChungTuTNCN && !_this.isPhieuThuHS && ((!_this.isEdit() && _this.templateService.type_circular == "THONG_TU_78") || _this.isTT32)) {
                _this.frmData.is_decree_new = true;
                if (_this.isTT78) {
                    if (_this.infoDangKy.is_invoice_with_code == "0") {
                        _this.HinhThucHD = "K";
                        _this.frmData.is_invoice_with_code = false;
                    }
                    else if (_this.infoDangKy.is_invoice_with_code == "1") {
                        _this.HinhThucHD = "C";
                        _this.frmData.is_invoice_with_code = true;
                    }
                    if (_this.isMayTinhTien) {
                        _this.HinhThucHD = "C";
                        _this.frmData.is_invoice_with_code = true;
                    }
                }
                else {
                    _this.HinhThucHD = "C";
                    _this.frmData.is_invoice_with_code = true;
                }
                var namLapHD = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format("YYYY").slice(2, 4);
                var loaiHD = "";
                switch (_this.invoice_type) {
                    case "01GTKT":
                        if (_this.isPhieuTinhTien) {
                            _this.frmData.template_code = "PTT";
                        }
                        else if (_this.isTemVeThe) {
                            _this.frmData.template_code = "5";
                            loaiHD = "G";
                        }
                        else {
                            _this.frmData.template_code = "1";
                            if (_this.isMayTinhTien)
                                loaiHD = "M";
                            else
                                loaiHD = "T";
                        }
                        break;
                    case "02GTTT":
                        if (_this.isPhieuTinhTien) {
                            _this.frmData.template_code = "PTT";
                        }
                        else if (_this.isTemVeThe) {
                            _this.frmData.template_code = "5";
                            loaiHD = "H";
                        }
                        else {
                            _this.frmData.template_code = "2";
                            if (_this.isMayTinhTien)
                                loaiHD = "M";
                            else
                                loaiHD = "T";
                        }
                        break;
                    case "07KPTQ":
                        _this.frmData.template_code = "2";
                        if (_this.isMayTinhTien)
                            loaiHD = "M";
                        else
                            loaiHD = "T";
                        break;
                    case "03XKNB":
                        loaiHD = "N";
                        _this.frmData.template_code = "6";
                        break;
                    case "04HGDL":
                        _this.frmData.template_code = "6";
                        loaiHD = "B";
                        break;
                }
                if (_this.isTT32) {
                    var NgDungDinhNghia = _this.frmData.invoice_series.substr(0, 2);
                    _this.frmData.invoice_series = _this.HinhThucHD + namLapHD + loaiHD + NgDungDinhNghia;
                }
                else {
                    if (_this.isPhieuTinhTien) {
                        _this.frmData.invoice_series = namLapHD;
                    }
                    else {
                        _this.frmData.invoice_series = _this.HinhThucHD + namLapHD + loaiHD;
                    }
                }
            }
            ////////Begin---> Xử lý chung cho từng loại mẫu
            switch (_this.paper_size) {
                case _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Doc:
                    _this.anhkhung = _this.templateService.anhkhungA4Doc;
                    break;
                case _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Ngang:
                    _this.anhkhung = _this.templateService.anhkhungA4ngang;
                    break;
                case _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A5Ngang:
                    _this.anhkhung = _this.templateService.anhkhungA5Ngang;
                    _this.reportHeight = "500px";
                    _this.maxHeight = 562;
                    break;
                case _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A80Doc:
                case _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A57Doc:
                    if (_this.paper_size == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A80Doc)
                        _this.reportHeight = "562px";
                    else
                        _this.reportHeight = "640px";
                    _this.maxHeight = 562;
                    break;
                default:
                    _this.anhkhung = _this.templateService.anhkhungA4Doc;
                    break;
            }
            //////////////////////////////// The End
            _this.arrAfterIds.push('after-iframe');
            _this.arrIds.push('preview-iframe');
            if (_this.isMauHoanThue) {
                _this.arrIds.push('preview-iframe-tempt');
                _this.arrAfterIds.push('after-iframe-tempt');
            }
            _this.getProducts();
            _this.getTextForm();
            _this.format_MauSo_KyHieu();
            _this.genDatatoTemplate();
            ////////////////////////////////////////////////////////////////////////////////
            _this.configListenTemp();
            $(document).contextmenu(function () {
                return false;
            });
        });
    };
    ModifynewComponent.prototype.configListenTemp = function () {
        var _this = this;
        // 
        document.addEventListener('mousedown', function (ev) {
            var startpoint = ev.clientX;
            _this.arrIds.forEach(function (id) {
                if (startpoint > 800) {
                    _this.dataSourceBenMua.forEach(function (item) {
                        var classname = "childparent-" + item.code;
                        var value = "value-" + item.code;
                        var name = "name-" + item.code;
                        $('#' + id).contents().find("." + classname).css('border-radius', '3px').css('border', 'none');
                        $('#' + id).contents().find("." + value).css('border-radius', '3px').css('border', 'none');
                        $('#' + id).contents().find("." + name).css('border-radius', '3px').css('border', 'none');
                    });
                    _this.dataSource.forEach(function (item) {
                        var classname = "childparent-" + item.code;
                        var value = "value-" + item.code;
                        var name = "name-" + item.code;
                        $('#' + id).contents().find("." + classname).css('border-radius', '3px').css('border', 'none');
                        $('#' + id).contents().find("." + value).css('border-radius', '3px').css('border', 'none');
                        $('#' + id).contents().find("." + name).css('border-radius', '3px').css('border', 'none');
                    });
                    if (!_this.showPopup) {
                        if (_this.arrFontChange) {
                            if (_this.arrFontChange.length > 0) {
                                var ts = _this.arrFontChange;
                                var _loop_2 = function (i) {
                                    _this.arrIds.forEach(function (idT) {
                                        $('#' + idT).contents().find("." + _this.arrFontChange[i]).css('border-radius', '3px').css('border', 'none');
                                    });
                                };
                                for (var i = 0; i < _this.arrFontChange.length; i++) {
                                    _loop_2(i);
                                }
                            }
                            _this.arrFontChange = [];
                        }
                        _this.valueFont = null;
                        _this.fontSize = null;
                        _this.currentColorText = null;
                        _this.spacechar = null;
                        _this.paddingPostion = null;
                    }
                    if (!_this.showPopupHH) {
                        _this.classFontChange = "";
                        _this.widthHH = null;
                        _this.minwidthHH = null;
                    }
                    $('#' + id).css('pointer-events', 'none');
                    //////logo left
                    $('#' + id).contents().find(".logo-company-left").find(".logo-company").find(".ui-resizable-se").css('display', 'none');
                    $('#' + id).contents().find(".logo-company-left").find(".delete-logo-template").css('display', 'none');
                    $('#' + id).contents().find(".logo-company-left").find(".logo-company").css('border-width', '0px');
                    /////// logo right
                    $('#' + id).contents().find(".logo-company-right").find(".logo-company").find(".ui-resizable-se").css('display', 'none');
                    $('#' + id).contents().find(".logo-company-right").find(".delete-logo-template").css('display', 'none');
                    $('#' + id).contents().find(".logo-company-right").find(".logo-company").css('border-width', '0px');
                    /////// ảnh nền
                    $('#' + id).contents().find(".bg-template-parent").find(".ui-resizable-se").css('display', 'none');
                    $('#' + id).contents().find(".bg-template-parent").find(".delete-logo-template").css('display', 'none');
                    $('#' + id).contents().find(".bg-template-parent").css('border-width', '0px');
                    $('#' + id).contents().find(".bg-template-parent").css('z-index', '-1');
                    $('#' + id).contents().find(".bg-template").css('opacity', $("#slider").slider("values", 0));
                    $('#' + id).contents().find(".template-table").css('z-index', '100');
                    /// Chữ ký số người bán
                    $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").find(".ui-resizable-se").css('display', 'none');
                    $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").css('border-width', '0px');
                    /// Chữ ký số người mua
                    // $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").find(".ui-resizable-se").css('display', 'none');
                    //$('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").css('border-width', '0px');
                }
                else {
                    _this.dataSourceBenMua.forEach(function (item) {
                        var classname = "childparent-" + item.code;
                        var value = "value-" + item.code;
                        var name = "name-" + item.code;
                        $('#' + id).contents().find("." + classname).css('border-radius', '3px').css('border', 'none');
                        $('#' + id).contents().find("." + value).css('border-radius', '3px').css('border', 'none');
                        $('#' + id).contents().find("." + name).css('border-radius', '3px').css('border', 'none');
                    });
                    _this.dataSource.forEach(function (item) {
                        var classname = "childparent-" + item.code;
                        var value = "value-" + item.code;
                        var name = "name-" + item.code;
                        $('#' + id).contents().find("." + classname).css('border-radius', '3px').css('border', 'none');
                        $('#' + id).contents().find("." + value).css('border-radius', '3px').css('border', 'none');
                        $('#' + id).contents().find("." + name).css('border-radius', '3px').css('border', 'none');
                    });
                    if (!_this.showPopup) {
                        if (_this.arrFontChange) {
                            if (_this.arrFontChange.length > 0) {
                                var _loop_3 = function (i) {
                                    _this.arrIds.forEach(function (idT) {
                                        $('#' + idT).contents().find("." + _this.arrFontChange[i]).css('border-radius', '3px').css('border', 'none');
                                    });
                                };
                                for (var i = 0; i < _this.arrFontChange.length; i++) {
                                    _loop_3(i);
                                }
                            }
                            _this.arrFontChange = [];
                        }
                        _this.valueFont = null;
                        _this.fontSize = null;
                        _this.currentColorText = null;
                        _this.spacechar = null;
                        _this.paddingPostion = null;
                    }
                    if (!_this.showPopupHH) {
                        _this.classFontChange = "";
                        _this.widthHH = null;
                        _this.minwidthHH = null;
                    }
                    $('#' + id).css('pointer-events', 'auto');
                    /////////////logo left
                    $('#' + id).contents().find(".logo-company-left").find(".logo-company").find(".ui-resizable-se").css('display', 'block');
                    $('#' + id).contents().find(".logo-company-left").find(".delete-logo-template").css('display', 'block');
                    $('#' + id).contents().find(".logo-company-left").find(".logo-company").css('border-width', '1px');
                    ///////////// logo right
                    $('#' + id).contents().find(".logo-company-right").find(".logo-company").find(".ui-resizable-se").css('display', 'block');
                    $('#' + id).contents().find(".logo-company-right").find(".delete-logo-template").css('display', 'block');
                    $('#' + id).contents().find(".logo-company-right").find(".logo-company").css('border-width', '1px');
                    //////////// Ảnh nền
                    $('#' + id).contents().find(".bg-template-parent").find(".ui-resizable-se").css('display', 'block');
                    $('#' + id).contents().find(".bg-template-parent").find(".delete-logo-template").css('display', 'block');
                    $('#' + id).contents().find(".bg-template-parent").css('border-width', '1px');
                    $('#' + id).contents().find(".bg-template-parent").css('z-index', '500');
                    $('#' + id).contents().find(".bg-template").css('opacity', 0.5);
                    $('#' + id).contents().find(".template-table").css('z-index', '-1');
                    /* Chữ ký số người bán */
                    $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").find(".ui-resizable-se").css('display', 'block');
                    $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").css('border-width', '1px');
                }
            });
        });
        var self = this;
        this.arrIds.forEach(function (id) {
            // Thêm trường vào thông tin người mua 
            _this.arrayExtendBuyer.forEach(function (item) {
                if ($('#' + id).contents().find(".value-" + item.code)[0]) {
                    var oCustomer = _this.dataSourceBenMua.filter(function (p) { return p.code == item.code; })[0];
                    if (!oCustomer)
                        _this.dataSourceBenMua.push(item);
                }
            });
            $('#' + id).each(function () {
                //Using closures to capture each one
                var iframe = $(this);
                self.isBegin = true;
                self.isBenBan = false;
                self.isBenMua = false;
                self.isMauDraff = false;
                iframe.contents().find('span').mousedown(function (event) {
                    if (self.isBegin) {
                        if (event.which == 3) {
                            if (self.arrFontChange && self.arrFontChange.length > 0) {
                            }
                            else {
                                self.arrFontChange.push(event.target.className);
                                $('#' + id).contents().find("." + self.arrFontChange[0]).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
                            }
                            iframe.trigger("click");
                        }
                        else if (event.which == 1 && event.ctrlKey) {
                            var filter = void 0;
                            if (self.arrFontChange)
                                filter = self.arrFontChange.filter(function (p) { return p == event.target.className; });
                            if (filter.length > 0) {
                                var index = self.arrFontChange.indexOf(filter[0]);
                                if (index != -1) {
                                    $('#' + id).contents().find("." + event.target.className).css('border-radius', '3px').css('border', 'none');
                                    self.arrFontChange.splice(index, 1);
                                }
                            }
                            else {
                                self.arrFontChange.push(event.target.className);
                                $('#' + id).contents().find("." + event.target.className).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
                            }
                        }
                    }
                });
                self.ChangeFontTemptPlate(iframe, self);
            });
        });
    };
    ModifynewComponent.prototype.genDatatoTemplate = function () {
        var _this = this;
        this.arrIds.forEach(function (id) {
            if (id == 'preview-iframe') {
                _this.iframe = document.getElementById(id);
                _this.iframe.contentDocument.open("text/html", "replace");
                _this.iframe.contentDocument.write(_this.dataPreview);
                _this.iframe.contentDocument.close();
            }
            else {
                _this.iframeAttach = document.getElementById(id);
                _this.iframeAttach.contentDocument.open("text/html", "replace");
                _this.iframeAttach.contentDocument.write(_this.dataPreviewAttach);
                _this.iframeAttach.contentDocument.close();
            }
            /////////////Chuyển đổi mẫu từ tt32 đến mẫu tt78
            if (_this.isCopyMau) {
                if (_this.isTT78 && _this.isTT32) {
                    /* Mẫu số */
                    var parentFirst = $('#' + id).contents().find(".number-form").parent();
                    var parentSecond = $('#' + id).contents().find(".number-form").parent().parent();
                    if (parentFirst[0] && parentFirst[0].localName == "tr")
                        parentFirst.remove();
                    else
                        parentSecond.remove();
                    /* Ký hiệu */
                    var el = $('#' + id).contents().find(".symbol");
                    el.addClass('symbol-number-form');
                    el.removeClass('symbol');
                    /* Xóa bản thể hiện */
                    var parentBS = $('#' + id).contents().find(".ban-sao").parent();
                    if (parentBS[0] && parentBS[0].localName == "td") {
                        var childBS = $('#' + id).contents().find(".ban-sao");
                        childBS.empty();
                        childBS.addClass('tax_authority_code');
                        childBS.removeClass('ban-sao');
                        if (_this.HinhThucHD == "C")
                            childBS.append("<span class=\"lblMaCQT\">Mã CQT: </span><span class=\"ma-co-quan-thue\"></span>");
                    }
                    else {
                        parentBS.empty();
                        if (_this.HinhThucHD == "C") {
                            parentBS.addClass('tax_authority_code');
                            parentBS.removeClass('instance_invoice');
                            parentBS.append("<span class=\"lblMaCQT\">Mã CQT: </span><span class=\"ma-co-quan-thue\"></span>");
                        }
                    }
                    // Xử lý Mẫu Phiếu xuất kho nội bộ
                    if (_this.frmData.invoice_type == "03XKNB") {
                        var isEnglish = false;
                        if ($('#' + id).contents().find(".italic-8g399973-576d-c322-7843-bdacf97ac189")[0])
                            isEnglish = true;
                        /* Thêm mã số thuế kho nhận */
                        var parentOf = $('#' + id).contents().find(".parent-3g399973-576d-c322-7843-bdacf97ac189");
                        var childMSTKhoNhan = "<div class=\"childparent-8d903984-576d-c322-7843-bdacf97ac100\">";
                        if (isEnglish) {
                            childMSTKhoNhan += "<span style=\"display: table-cell;white-space: nowrap;padding-right: 1px;\" class=\"name-8d903984-576d-c322-7843-bdacf97ac100\">Mã số thuế kho nhận</span>";
                            childMSTKhoNhan += "<span class=\"italic-8d903984-576d-c322-7843-bdacf97ac100\" style=\"display: table-cell;margin-top: 2px;padding-right: 3px;font-style: italic;font-size: 12px !important;line-height: 20px;\">(Receiving warehouse tax code):</span>";
                        }
                        else
                            childMSTKhoNhan += "<span style=\"display: table-cell;white-space: nowrap;padding-right: 3px;\" class=\"name-8d903984-576d-c322-7843-bdacf97ac100\">Mã số thuế kho nhận:</span>";
                        childMSTKhoNhan += "<span style=\"display: table-cell;white-space: pre-line;\" class=\"value-8d903984-576d-c322-7843-bdacf97ac100\"></span>";
                        childMSTKhoNhan += "</div>";
                        parentOf.append(childMSTKhoNhan);
                        /* Thay đổi Xuất tại kho thành Địa chỉ kho xuất */
                        var parentXTK = $('#' + id).contents().find(".parent-8g399973-576d-c322-7843-bdacf97ac189");
                        parentXTK.addClass('parent-11111125-549a-01ea-e507-cc7b0ab28a69');
                        parentXTK.removeClass('parent-8g399973-576d-c322-7843-bdacf97ac189');
                        var childparentXTK = $('#' + id).contents().find(".childparent-8g399973-576d-c322-7843-bdacf97ac189");
                        childparentXTK.addClass('childparent-11111125-549a-01ea-e507-cc7b0ab28a69');
                        childparentXTK.removeClass('childparent-8g399973-576d-c322-7843-bdacf97ac189');
                        var nameXTK = $('#' + id).contents().find(".name-8g399973-576d-c322-7843-bdacf97ac189");
                        nameXTK.addClass('name-11111125-549a-01ea-e507-cc7b0ab28a69');
                        nameXTK.removeClass('name-8g399973-576d-c322-7843-bdacf97ac189');
                        nameXTK.html('Địa chỉ kho xuất:');
                        if (isEnglish) {
                            var italicXTK = $('#' + id).contents().find(".italic-8g399973-576d-c322-7843-bdacf97ac189");
                            italicXTK.addClass('italic-11111125-549a-01ea-e507-cc7b0ab28a69');
                            italicXTK.removeClass('italic-8g399973-576d-c322-7843-bdacf97ac189');
                            italicXTK.html('(Export warehouse address):');
                            nameXTK.html('Địa chỉ kho xuất');
                        }
                        var valueXTK = $('#' + id).contents().find(".value-8g399973-576d-c322-7843-bdacf97ac189");
                        valueXTK.addClass('value-11111125-549a-01ea-e507-cc7b0ab28a69');
                        valueXTK.removeClass('value-8g399973-576d-c322-7843-bdacf97ac189');
                        /* Thay đổi Nhập tại kho thành Địa chỉ kho nhập */
                        var parentNTK = $('#' + id).contents().find(".parent-9g399973-576d-c322-7843-bdacf97ac189");
                        parentNTK.addClass('parent-11111119-549a-01ea-e507-cc7b0ab28a69');
                        parentNTK.removeClass('parent-9g399973-576d-c322-7843-bdacf97ac189');
                        var childparentNTK = $('#' + id).contents().find(".childparent-9g399973-576d-c322-7843-bdacf97ac189");
                        childparentNTK.addClass('childparent-11111119-549a-01ea-e507-cc7b0ab28a69');
                        childparentNTK.removeClass('childparent-9g399973-576d-c322-7843-bdacf97ac189');
                        var nameNTK = $('#' + id).contents().find(".name-9g399973-576d-c322-7843-bdacf97ac189");
                        nameNTK.addClass('name-11111119-549a-01ea-e507-cc7b0ab28a69');
                        nameNTK.removeClass('name-9g399973-576d-c322-7843-bdacf97ac189');
                        nameNTK.html('Địa chỉ kho nhập:');
                        if (isEnglish) {
                            var italicNTK = $('#' + id).contents().find(".italic-9g399973-576d-c322-7843-bdacf97ac189");
                            italicNTK.addClass('italic-11111119-549a-01ea-e507-cc7b0ab28a69');
                            italicNTK.removeClass('italic-9g399973-576d-c322-7843-bdacf97ac189');
                            italicNTK.html('(Import warehouse address):');
                            nameNTK.html('Địa chỉ kho nhập');
                        }
                        var valueNTK = $('#' + id).contents().find(".value-9g399973-576d-c322-7843-bdacf97ac189");
                        valueNTK.addClass('value-11111119-549a-01ea-e507-cc7b0ab28a69');
                        valueNTK.removeClass('value-9g399973-576d-c322-7843-bdacf97ac189');
                    }
                    $('#' + id).contents().find(".symbol-number-form").css('font-weight', 'bold');
                    $('#' + id).contents().find(".invoice-number").html('0');
                    $('#' + id).contents().find(".symbol-number-form").html(_this.frmData.template_code + _this.frmData.invoice_series);
                    ////////
                }
            }
            if (_this.isTemVeThe) {
                if (_this.HinhThucHD == "K")
                    $('#' + id).contents().find(".parent-ma-co-quan-thue").css({ 'display': 'none' });
            }
            var parentSignSeller = $('#' + id).contents().find(".sign-block").parent();
            parentSignSeller.css("vertical-align", "baseline");
            var parentSignBuyer = $('#' + id).contents().find(".sign-block-buyer").parent();
            parentSignBuyer.css("vertical-align", "top");
            if (!_this.isChungTuTNCN && !_this.isPhieuThuHS)
                $('#' + id).contents().find(".efy-esign-none-buyer").css({ 'display': 'block', 'max-width': '208px', 'width': '208px' });
            $('#' + id).contents().find(".efy-esign-none-tax").css({ 'display': 'block' });
            $('#' + id).contents().find(".signhander").css({ 'margin-bottom': '-10px' });
            $(document).find(".template-preview").focusin(function () {
                console.log("event");
            });
            if (_core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(_this.frmData.number_of_row) != "")
                _this.rowData = Number.parseInt(_this.frmData.number_of_row);
            else
                _this.rowData = 3;
            if (_this.rowData == 100)
                _this.hideRow = true;
            _this.frmData.json_data.is_multiple_fee = _this.hideRow ? "0" : "1";
            _this.trRow = "";
            _this.createRowData(_this.rowData, id);
            $('#' + id).contents().find(".tbody-content-detail").append($(_this.trRow));
            ///////// Xử lý dữ liệu sua copy
            if (_this.isEdit() || _this.templateService.isCopy) {
                if (!_this.frmData.json_data.multipages_option) {
                    _this.mutipage = "0";
                    _this.frmData.json_data.multipages_option = _this.mutipage;
                }
                else
                    _this.mutipage = _this.frmData.json_data.multipages_option;
                $('#' + id).contents().find(".bg-template-parent").css('z-index', '500');
                //  $("#slider").slider("option", "value", this.frmData.json_data.watermark_text_transparency);
                $("#slider").slider({
                    value: _this.frmData.json_data.watermark_text_transparency,
                    range: false,
                    max: 1,
                    min: 0,
                    step: 0.01,
                    slide: function (event, ui) {
                        $('#' + id).contents().find(".bg-template").css('opacity', ui.value);
                        $('#' + id).contents().find(".water-text").css('opacity', ui.value);
                    },
                    change: function (event, ui) {
                        $('#' + id).contents().find(".bg-template").css('opacity', ui.value);
                        $('#' + id).contents().find(".water-text").css('opacity', ui.value);
                    }
                });
                ///////logo trái
                $('#' + id).contents().find(".logo-company-left").find(".delete-logo-template").css('display', 'block');
                var width = $('#' + id).contents().find(".logo-company-left").find(".logo-company").width();
                var height = $('#' + id).contents().find(".logo-company-left").find(".logo-company").height();
                var rateLogo = width / height;
                if (width >= height) {
                    if (rateLogo >= 2) {
                        $('#' + id).contents().find(".logo-company-left").find(".logo-company").resizable({
                            aspectRatio: true,
                            maxWidth: 250,
                            maxHeight: 125,
                        });
                    }
                    else {
                        $('#' + id).contents().find(".logo-company-left").find(".logo-company").resizable({
                            aspectRatio: true,
                            maxWidth: 150,
                            maxHeight: 150,
                        });
                    }
                }
                else {
                    $('#' + id).contents().find(".logo-company-left").find(".logo-company").resizable({
                        aspectRatio: true,
                        maxWidth: 150 * rateLogo,
                        maxHeight: 150,
                    });
                }
                $('#' + id).contents().find(".logo-company-left").find(".logo-company").css('border-width', '1px');
                $('#' + id).contents().find(".logo-company-left").find(".logo-company").draggable({
                    addClasses: false,
                    containment: "parent",
                    disabled: false,
                    create: function () {
                        $(this).removeClass('ui-draggable-disabled');
                    },
                    start: function () {
                    }
                });
                ///////logo phải
                $('#' + id).contents().find(".logo-company-right").find(".delete-logo-template").css('display', 'block');
                var widthR = $('#' + id).contents().find(".logo-company-right").find(".logo-company").width();
                var heightR = $('#' + id).contents().find(".logo-company-right").find(".logo-company").height();
                var rateLogoR = width / height;
                if (widthR >= heightR) {
                    if (rateLogoR >= 2) {
                        $('#' + id).contents().find(".logo-company-right").find(".logo-company").resizable({
                            aspectRatio: true,
                            maxWidth: 250,
                            maxHeight: 125,
                        });
                    }
                    else {
                        $('#' + id).contents().find(".logo-company-right").find(".logo-company").resizable({
                            aspectRatio: true,
                            maxWidth: 150,
                            maxHeight: 150,
                        });
                    }
                }
                else {
                    $('#' + id).contents().find(".logo-company-right").find(".logo-company").resizable({
                        aspectRatio: true,
                        maxWidth: 150 * rateLogoR,
                        maxHeight: 150,
                    });
                }
                $('#' + id).contents().find(".logo-company-right").find(".logo-company").css('border-width', '1px');
                $('#' + id).contents().find(".logo-company-right").find(".logo-company").draggable({
                    addClasses: false,
                    containment: "parent",
                    disabled: false,
                    create: function () {
                        $(this).removeClass('ui-draggable-disabled');
                    },
                    start: function () {
                    }
                });
                /////// ảnh nền
                $('#' + id).contents().find(".bg-template-parent").css('border-width', '1px');
                $('#' + id).contents().find(".bg-template-parent").find(".ui-resizable-se").css({ display: 'block' });
                $('#' + id).contents().find(".bg-template-parent").resizable({
                    aspectRatio: true,
                    maxWidth: _this.maxWidth,
                    maxHeight: _this.maxHeight,
                });
                $('#' + id).contents().find(".bg-template-parent").draggable({
                    addClasses: false,
                    containment: "parent",
                    disabled: false,
                    create: function () {
                        $(this).removeClass('ui-draggable-disabled');
                    },
                    start: function () {
                    }
                });
                /* Chữ ký số người bán */
                $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").css('border-width', '1px');
                $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").find(".ui-resizable-se").css({ display: 'block' });
                $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").resizable({
                    maxWidth: 341,
                    maxHeight: 206,
                    minWidth: 241,
                    minHeight: 66,
                });
                var zIndexSeller = $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").css('z-index');
                if (zIndexSeller == "500") {
                    $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").draggable({
                        addClasses: false,
                        containment: "parent",
                        disabled: true,
                        create: function () {
                            $(this).removeClass('ui-draggable-disabled');
                        },
                        start: function () {
                        }
                    });
                }
                else {
                    $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").draggable({
                        addClasses: false,
                        containment: "parent",
                        disabled: true,
                        create: function () {
                            $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").css('width', '241px').css('height', '106px').css('display', 'block')
                                .css('cursor', 'move').css('z-index', '500').css('border-width', '1px').css('border-style', 'solid').css('border-color', 'rgb(20, 146, 230)');
                            $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").find(".ui-resizable-se").css({ position: 'absolute', width: '8px', height: '8px', background: 'rgb(20, 146, 230)', right: '-5px', bottom: '-5px', cursor: 'se-resize', border: '1px solid rgb(255, 255, 255)', display: 'block' });
                        },
                    });
                }
                /* Chữ ký số người mua */
                // $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").css('border-width', '1px');
                // $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").find(".ui-resizable-se").css({ display: 'block' });
                // $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").resizable(
                //   {
                //     maxWidth: 341,
                //     maxHeight: 206,
                //     minWidth: 241,
                //     minHeight: 66,
                //   },
                // );
                // let zIndexBuyer = $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").css('z-index');
                // if (zIndexBuyer == "500") {
                //   $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").draggable({
                //     addClasses: false,
                //     containment: "parent",
                //     disabled: true,
                //     create: function () {
                //       $(this).removeClass('ui-draggable-disabled');
                //     },
                //     start: function () {
                //     }
                //   });
                // }
                // else {
                //   $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").draggable({
                //     addClasses: false,
                //     containment: "parent",
                //     disabled: true,
                //     create: function () {
                //       $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").css('width', '241px').css('height', '106px').css('display', 'block')
                //         .css('cursor', 'move').css('z-index', '500').css('border-width', '1px').css('border-style', 'solid').css('border-color', 'rgb(20, 146, 230)');
                //       $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").find(".ui-resizable-se").css({ position: 'absolute', width: '8px', height: '8px', background: 'rgb(20, 146, 230)', right: '-5px', bottom: '-5px', cursor: 'se-resize', border: '1px solid rgb(255, 255, 255)', display: 'block' });
                //     },
                //   });
                // }
                $('.logo-file-label').html(_this.frmData.json_data.logo_name);
                if (_core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(_this.frmData.json_data.watermark_image_name) != "")
                    $('.watermark-file-label').html(_this.frmData.json_data.watermark_image_name);
                $(".inputSearch").val(_this.frmData.json_data.watermark_image_default_name);
                _this.priority = _this.frmData.json_data.logo_position;
                //  this.mutipage = this.frmData.json_data.multipages_option;
                if (_this.frmData.json_data.color)
                    _this.currentColor = _this.rgb2hex(_this.frmData.json_data.color);
                if (_this.frmData.json_data.watermark_text_color)
                    _this.currentColorImage = _this.frmData.json_data.watermark_text_color;
                if (_this.frmData.json_data.font)
                    _this.currentFont = _this.frmData.json_data.font;
                if (_this.frmData.fee_money)
                    _this.fee_money = _this.frmData.fee_money;
                if (_this.frmData.fee_name)
                    _this.fee_name = _this.frmData.fee_name;
                if (_this.frmData.json_data.borderColor)
                    _this.currentBold = _this.frmData.json_data.borderColor;
                else
                    _this.currentBold = "#776b6b";
                _this.watermark_text_italic = _this.frmData.json_data.watermark_text_italic;
            }
            else {
                _this.currentBold = "#776b6b";
                ///// Thông tin đơn vị
                $('#' + id).contents().find(".seler-name").html(_this.frmData.json_data.name);
                $('#' + id).contents().find(".seler-tax-number").html(_this.frmData.json_data.tax_code);
                $('#' + id).contents().find(".seler-address").html(_this.frmData.json_data.business_address);
                $('#' + id).contents().find(".value-9f783984-576d-c322-7843-bdacf97ac189").html(_this.frmData.json_data.company_email);
                $('#' + id).contents().find(".value-8f783984-576d-c322-7843-bdacf97ac189").html(_this.frmData.json_data.phone);
                $('#' + id).contents().find(".value-7f783984-576d-c322-7843-bdacf97ac189").html(_this.frmData.json_data.website);
                $('#' + id).contents().find(".value-1db1350b-570c-0fa1-08fa-10e67f64c8c7").html(_this.frmData.json_data.bank_name);
                //////////////
                $('#' + id).contents().find(".logo-company-left").find(".logo-template").css('background-image', 'url(data:image/' + "jpg" + ';base64,' + _this.logoTempt + ')');
                $('#' + id).contents().find(".logo-company-right").find(".logo-template").css('background-image', 'url(data:image/' + "jpg" + ';base64,' + _this.logoTempt + ')');
                _this.frmData.json_data.watermark_text_color = "#f2d40c";
                _this.priority = "1";
                _this.frmData.json_data.logo_position = _this.priority;
                $("#slider").slider({
                    value: $('#' + id).contents().find(".bg-template").css('opacity'),
                    range: false,
                    max: 1,
                    min: 0,
                    step: 0.01,
                    slide: function (event, ui) {
                        $('#' + id).contents().find(".bg-template").css('opacity', ui.value);
                        $('#' + id).contents().find(".water-text").css('opacity', ui.value);
                    },
                    change: function (event, ui) {
                        $('#' + id).contents().find(".bg-template").css('opacity', ui.value);
                        $('#' + id).contents().find(".water-text").css('opacity', ui.value);
                        this.watermark_text_transparency = ui.value;
                    }
                });
                ////////// logo phải
                var maxWidthLogo = 191;
                var widthLogoDefault_1 = "111px";
                if (_this.isTemVeThe) {
                    if (_this.paper_size == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A57Doc) {
                        widthLogoDefault_1 = "83px";
                        maxWidthLogo = 99;
                    }
                    if (_this.paper_size == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A80Doc)
                        maxWidthLogo = 181;
                }
                $('#' + id).contents().find(".logo-company-right").find(".logo-company").resizable({
                    handles: 'e,s,se',
                    aspectRatio: 2 / 1,
                    maxWidth: maxWidthLogo,
                    maxHeight: 95,
                });
                $('#' + id).contents().find(".logo-company-right").find(".logo-company").draggable({
                    addClasses: false,
                    containment: "parent",
                    create: function () {
                        $(this).addClass('ui-draggable');
                        $(this).addClass('ui-draggable-handle');
                        var deleteLogo = "<div class=\"delete-logo-template\" style=\"background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAANVJREFUOI3NkqEOgzAQhssWtmZqgSDmeQme4DKBwvIwtZc+wXwFqm6PQPEnSeoW3NwSFMkUSdMBYcHwy8t/X9qvDRhjD7Yhhy3LOwUAQAwA8dS8LMvbqhMopcCFAECstc6jKDr73SNjLHcH1tqeiDqlFBBRl6bpRWudSykNIlofELCZZwSAuKqqO+c8RMRaCNFO9RYlcs7DYRiGpmnec51JwHhnRKyLonj6Ttz8OBiXpZRGCNH6Tqy1/SIgy7KrMeblChshSZKciOjj9mclrs0Ov/K/+QJrAWQ4qQiKIQAAAABJRU5ErkJggg==&quot;); display: block;\"></div>";
                        $(this).addClass('ui-draggable');
                        $(this).addClass('ui-draggable-handle');
                        $('#' + id).contents().find(".logo-company-right").find(".logo-company").css('width', widthLogoDefault_1).css('height', '49.6341px').css('display', 'none')
                            .css('cursor', 'move').css('z-index', '500').css('border-width', '1px').css('border-style', 'solid').css('border-color', 'rgb(20, 146, 230)');
                        $('#' + id).contents().find(".logo-company-right").find(".logo-company").find(".ui-resizable-se").css({ position: 'absolute', width: '8px', height: '8px', background: 'rgb(20, 146, 230)', right: '-5px', bottom: '-5px', cursor: 'se-resize', border: '1px solid rgb(255, 255, 255)', display: 'block' });
                        $('#' + id).contents().find(".logo-company-right").find(".logo-company").append($(deleteLogo));
                    },
                    start: function () {
                        $(this).addClass('ui-draggable-dragging');
                        var left = $('#' + id).contents().find(".logo-company-right").find(".logo-company").offset().left;
                        var top = $('#' + id).contents().find(".logo-company-right").find(".logo-company").offset().top;
                    }
                });
                ///////// Logo trái 
                $('#' + id).contents().find(".logo-company-left").find(".logo-company").resizable({
                    handles: 'e,s,se',
                    aspectRatio: 2 / 1,
                    maxWidth: maxWidthLogo,
                    maxHeight: 95,
                });
                $('#' + id).contents().find(".logo-company-left").find(".logo-company").draggable({
                    addClasses: false,
                    containment: "parent",
                    disabled: false,
                    create: function () {
                        var deleteLogo = "<div class=\"delete-logo-template\" style=\"background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAANVJREFUOI3NkqEOgzAQhssWtmZqgSDmeQme4DKBwvIwtZc+wXwFqm6PQPEnSeoW3NwSFMkUSdMBYcHwy8t/X9qvDRhjD7Yhhy3LOwUAQAwA8dS8LMvbqhMopcCFAECstc6jKDr73SNjLHcH1tqeiDqlFBBRl6bpRWudSykNIlofELCZZwSAuKqqO+c8RMRaCNFO9RYlcs7DYRiGpmnec51JwHhnRKyLonj6Ttz8OBiXpZRGCNH6Tqy1/SIgy7KrMeblChshSZKciOjj9mclrs0Ov/K/+QJrAWQ4qQiKIQAAAABJRU5ErkJggg==&quot;); display: block;\"></div>";
                        $(this).addClass('ui-draggable');
                        $(this).addClass('ui-draggable-handle');
                        $('#' + id).contents().find(".logo-company-left").find(".logo-company").css('width', widthLogoDefault_1).css('height', '49.6341px').css('display', 'block')
                            .css('cursor', 'move').css('z-index', '500').css('border-width', '1px').css('border-style', 'solid').css('border-color', 'rgb(20, 146, 230)');
                        $('#' + id).contents().find(".logo-company-left").find(".logo-company").find(".ui-resizable-se").css({ position: 'absolute', width: '8px', height: '8px', background: 'rgb(20, 146, 230)', right: '-5px', bottom: '-5px', cursor: 'se-resize', border: '1px solid rgb(255, 255, 255)', display: 'block' });
                        $('#' + id).contents().find(".logo-company-left").find(".logo-company").append($(deleteLogo));
                    },
                    start: function () {
                        $(this).addClass('ui-draggable-dragging');
                    }
                });
                ///////// Ảnh nền
                $('#' + id).contents().find(".bg-template-parent").resizable({
                    handles: 'e,s,se',
                    aspectRatio: 4 / 3,
                    start: function () {
                    }
                });
                $('#' + id).contents().find(".bg-template-parent").draggable({
                    addClasses: false,
                    containment: "parent",
                    create: function () {
                        $(this).addClass('ui-draggable');
                        $(this).addClass('ui-draggable-handle');
                        $('#' + id).contents().find(".bg-template-parent").css('cursor', 'move');
                        $('#' + id).contents().find(".bg-template-parent").find(".ui-resizable-se").css({ position: 'absolute', width: '8px', height: '8px', background: 'rgb(20, 146, 230)', right: '-5px', bottom: '-5px', cursor: 'se-resize', border: '1px solid rgb(255, 255, 255)', display: 'none' });
                    },
                    start: function () {
                        $(this).addClass('ui-draggable-dragging');
                    }
                });
                /* Chữ ký số người bán*/
                $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").resizable({
                    handles: 'w,se',
                    maxWidth: 341,
                    maxHeight: 206,
                    minWidth: 241,
                    minHeight: 66,
                });
                $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").draggable({
                    addClasses: false,
                    containment: "parent",
                    disabled: true,
                    create: function () {
                        $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").css('width', '241px').css('height', '106px').css('display', 'block')
                            .css('cursor', 'move').css('z-index', '500').css('border-width', '1px').css('border-style', 'solid').css('border-color', 'rgb(20, 146, 230)');
                        $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").find(".ui-resizable-se").css({ position: 'absolute', width: '8px', height: '8px', background: 'rgb(20, 146, 230)', right: '-5px', bottom: '-5px', cursor: 'se-resize', border: '1px solid rgb(255, 255, 255)', display: 'block' });
                    },
                });
                /* Chữ ký số người mua*/
                // $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").resizable(
                //   {
                //     handles: 'w,se',
                //     maxWidth: 341,
                //     maxHeight: 206,
                //     minWidth: 241,
                //     minHeight: 66,
                //   });
                // $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").draggable({
                //   addClasses: false,
                //   containment: "parent",
                //   disabled: true,
                //   create: function () {
                //     $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").css('width', '241px').css('height', '106px').css('display', 'block')
                //       .css('cursor', 'move').css('z-index', '500').css('border-width', '1px').css('border-style', 'solid').css('border-color', 'rgb(20, 146, 230)');
                //     $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").find(".ui-resizable-se").css({ position: 'absolute', width: '8px', height: '8px', background: 'rgb(20, 146, 230)', right: '-5px', bottom: '-5px', cursor: 'se-resize', border: '1px solid rgb(255, 255, 255)', display: 'block' });
                //   },
                // });
                $("#slider").slider("option", "value", "0.35");
                if (_this.frmData.template_type != "HOA_DON_VE_MAY_TONG_HOP")
                    _this.watermark_image_default = _this.anhkhung;
                /* Thay đổi cấu trúc mẫu hiển thị k lặp header */
                _this.mutipage = "1";
                _this.frmData.json_data.multipages_option = _this.mutipage;
                // let tHead = $('#' + id).contents().find(".header-block");
                // tHead.replaceWith('<tbody class=\"header-block\" style=\"display: table-header-group;\">' + tHead.html() + '</tbody>');
                // let tHeadHH = $('#' + id).contents().find(".table-header");
                // tHeadHH.replaceWith('<tbody class=\"table-header\">' + tHeadHH.html() + '</tbody>');
                if (!_this.hideRow) {
                    var tBody = $('#' + id).contents().find(".report-body");
                    tBody.css('display', 'table-row-group');
                    var tDetailS1 = $('#' + id).contents().find(".detail-sumary1");
                    var tDetailS2 = $('#' + id).contents().find(".detail-sumary2");
                    tBody.after("<tbody class=\"t-body-sign\" style=\"display: table-footer-group;page-break-inside: avoid;page-break-after: auto !important;\"></tbody>");
                    var tBodySign = $('#' + id).contents().find(".t-body-sign");
                    tBodySign.append(tDetailS1);
                    tBodySign.append(tDetailS2);
                }
                // else
                // {
                //   this.mutipage = "0";
                //   this.frmData.json_data.multipages_option = this.mutipage;
                // }
                _this.frmData.json_data.borderColor = _this.currentBold;
                ////
            }
            ////////////----------------Chung----------------///////////////////////grid
            _this.reloadInforTemp();
            ///// style cấu trúc html 
            if (!_this.isTemVeThe)
                $('#' + id).contents().find('.detail').css({ display: 'block' });
            if (!_this.isPhieuTinhTien) {
                if (!_this.isTemVeThe)
                    $('#' + id).contents().find('.header-block').css({ display: 'block' });
                $('#' + id).contents().find('.report-container').css({ height: _this.reportHeight });
            }
            $('#' + id).contents().find('.tdDetail').css('vertical-align', 'baseline');
            ////////
            //////// Thêm ảnh khung
            $('#' + id).contents().find(".bg-template-default").css('background-image', 'url(data:image/' + "jpg" + ';base64,' + _this.watermark_image_default + ')').css('display', 'block');
            //////// Thêm ảnh  nền
            if (_core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(_this.watermark_image) != "") {
                $('#' + id).contents().find(".bg-template-parent").css('display', 'block');
            }
            else {
                $('#' + id).contents().find(".bg-template-parent").css('display', 'none');
            }
            $('#' + id).contents().find(".bg-template-parent").find(".bg-template").css('background-image', 'url(data:image/' + "jpg" + ';base64,' + _this.watermark_image + ')').css('display', 'block');
            //////// Footer
            $('#' + id).contents().find(".report-footer").css({ display: 'block' });
            ///////
            $('#' + id).contents().find(".template-table").css({ display: 'block' });
            /////// thông tin người mua
            for (var i = 0; i < _this.dataSourceBenMua.length; i++) {
                var code = "";
                if (_this.dataSourceBenMua[i].type == "4")
                    code = _this.dataSourceBenMua[i].code;
                else
                    code = _this.dataSourceBenMua[i].code;
                $('#' + id).contents().find(".GroupCustomField").find(".childparent-" + code).css('float', 'left').css('width', _this.dataSourceBenMua[i].width + '%').css('cursor', 'move');
                $('#' + id).contents().find(".parent-" + code).sortable({
                    connectWith: ".sort",
                }).disableSelection();
                var classname = "parent-" + code;
                if (_this.dataSourceBenMua[i].is_show)
                    $('#' + id).contents().find("." + classname).css('display', 'block');
                else
                    $('#' + id).contents().find("." + classname).css('display', 'none');
            }
            _this.arrThuXacNhan.forEach(function (item) {
                $('#' + id).contents().find(".GroupCustomField").find(".childparent-" + item).css('cursor', 'move');
                $('#' + id).contents().find(".parent-" + item).sortable({
                    connectWith: ".sort",
                }).disableSelection();
            });
            _this.cusorFieldArray.forEach(function (item) {
                $('#' + id).contents().find(".GroupCustomField").find(".childparent-" + item).css('cursor', 'move');
                $('#' + id).contents().find(".parent-" + item).sortable({
                    connectWith: ".sort",
                }).disableSelection();
            });
            /////////Thông tin bên bán
            for (var i = 0; i < _this.dataSource.length; i++) {
                var code = "";
                code = _this.dataSource[i].code;
                $('#' + id).contents().find(".GroupUserField").find(".childparent-" + code).css('float', 'left').css('width', _this.dataSource[i].width + '%').css('cursor', 'move');
                if (code != "8e693984-576d-c322-7843-bdacf97ac189")
                    $('#' + id).contents().find(".parent-" + code).sortable({
                        connectWith: ".sort",
                    }).disableSelection();
                var classname = "parent-" + code;
                var textvSP = "value-" + code;
                var name_1 = "name-" + code;
                var italic = "italic-" + code;
                if (code == "ky-so-ben-ban" || code == "ma-qr-code") {
                    classname = code;
                    textvSP = code;
                    name_1 = code;
                    italic = code;
                }
                if (_this.dataSource[i].is_show) {
                    if (code == "8e693984-576d-c322-7843-bdacf97ac189") {
                        $('#' + id).contents().find("." + name_1).css('display', 'table-cell');
                        $('#' + id).contents().find("." + italic).css('display', 'table-cell');
                    }
                    else if (code == "ky-so-ben-ban" || code == "ma-qr-code") {
                        $('#' + id).contents().find("." + classname).css('display', 'inline-block');
                        if (code == "ky-so-ben-ban")
                            $('#preview-iframe').contents().find(".da-duoc-ky-so-ben-ban").css('display', 'none');
                    }
                    else
                        $('#' + id).contents().find("." + classname).css('display', 'block');
                }
                else {
                    if (code == "ky-so-ben-ban")
                        $('#preview-iframe').contents().find(".da-duoc-ky-so-ben-ban").css('display', '');
                    if (code == "8e693984-576d-c322-7843-bdacf97ac189") {
                        $('#' + id).contents().find("." + name_1).css('display', 'none');
                        $('#' + id).contents().find("." + italic).css('display', 'none');
                    }
                    else
                        $('#' + id).contents().find("." + classname).css('display', 'none');
                }
                $('#' + id).contents().find("." + textvSP).html(_this.dataSource[i].value);
                if (code == "8e693984-576d-c322-7843-bdacf97ac189")
                    $('#' + id).contents().find(".value-ten-to-chuc-tncn").html(_this.dataSource[i].value);
                if (id == "preview-iframe") {
                    if (code != "ky-so-ben-ban" && code != "ma-qr-code")
                        _this.dataSource[i].name = $('#' + id).contents().find("." + name_1).text() + $('#' + id).contents().find("." + italic).text();
                }
                /* Thêm các thuộc tính vào trong mẫu html */
                if (code == "8e693984-576d-c322-7843-bdacf97ac189" || code == "6e693984-576d-c322-7843-bdacf97ac189" || code == "7e693984-576d-c322-7843-bdacf97ac189") {
                    $('#' + id).contents().find("." + classname).addClass("sort");
                    $('#' + id).contents().find("." + classname).addClass("ui-helper-clearfix");
                }
                /* Chứng từ thuế thu nhập cá nhân */
                if (_this.isChungTuTNCN || _this.isPhieuThuHS) {
                    if (code == "6e693984-576d-c322-7843-bdacf97ac189") {
                        var mst = _this.dataSource[i].value;
                        if (_core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(mst) != "") {
                            mst = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(mst).replace('-', '');
                            var mst1 = (mst.length > 0 ? mst.substring(0, 1) : "");
                            var mst2 = (mst.length > 1 ? mst.substring(1, 2) : "");
                            var mst3 = (mst.length > 2 ? mst.substring(2, 3) : "");
                            var mst4 = (mst.length > 3 ? mst.substring(3, 4) : "");
                            var mst5 = (mst.length > 4 ? mst.substring(4, 5) : "");
                            var mst6 = (mst.length > 5 ? mst.substring(5, 6) : "");
                            var mst7 = (mst.length > 6 ? mst.substring(6, 7) : "");
                            var mst8 = (mst.length > 7 ? mst.substring(7, 8) : "");
                            var mst9 = (mst.length > 8 ? mst.substring(8, 9) : "");
                            var mst10 = (mst.length > 9 ? mst.substring(9, 10) : "");
                            var mst11 = (mst.length > 10 ? mst.substring(10, 11) : "");
                            var mst12 = (mst.length > 11 ? mst.substring(11, 12) : "");
                            var mst13 = (mst.length > 12 ? mst.substring(12, 13) : "");
                            $('#' + id).contents().find(".organization-tax-1").html(mst1);
                            $('#' + id).contents().find(".organization-tax-2").html(mst2);
                            $('#' + id).contents().find(".organization-tax-3").html(mst3);
                            $('#' + id).contents().find(".organization-tax-4").html(mst4);
                            $('#' + id).contents().find(".organization-tax-5").html(mst5);
                            $('#' + id).contents().find(".organization-tax-6").html(mst6);
                            $('#' + id).contents().find(".organization-tax-7").html(mst7);
                            $('#' + id).contents().find(".organization-tax-8").html(mst8);
                            $('#' + id).contents().find(".organization-tax-9").html(mst9);
                            $('#' + id).contents().find(".organization-tax-10").html(mst10);
                            $('#' + id).contents().find(".organization-tax-11").html(mst11);
                            $('#' + id).contents().find(".organization-tax-12").html(mst12);
                            $('#' + id).contents().find(".organization-tax-13").html(mst13);
                        }
                    }
                }
                /* End */
            }
            /////////////
            //////// 0
            $('#' + id).contents().find('body').css('overflow', 'hidden').css('transform-origin', '0px 0px 0px');
            // $('#' + id).contents().find('body').css('overflow', 'hidden').css('transform', 'scale(0.98)').css('transform-origin', '0px 0px 0px');
            ////////// logo trái
            $('#' + id).contents().find(".logo-company-left").find(".logo-company").click(function (e) {
                if (e.target.className != "delete-logo-template")
                    document.getElementById("file-input-logo").click();
            });
            $('#' + id).contents().find(".logo-company-left").find(".delete-logo-template").click(function (e) {
                if (e.target.className == "delete-logo-template") {
                    $('#' + id).contents().find(".logo-company-left").find(".logo-company").css('background-image', 'url(data:image/jpg' + ';base64,' + "" + ')');
                    $('#file-input-logo').val('');
                    $('#logo-file').val('');
                    $('.logo-file-label').html('Chọn logo đơn vị');
                }
            });
            ////////////////////logo phải
            $('#' + id).contents().find(".logo-company-right").find(".logo-company").click(function (e) {
                if (e.target.className != "delete-logo-template") {
                    document.getElementById("file-input-logo").click();
                }
            });
            $('#' + id).contents().find(".logo-company-right").find(".delete-logo-template").click(function (e) {
                if (e.target.className == "delete-logo-template") {
                    $('#' + id).contents().find(".logo-company-right").find(".logo-company").css('background-image', 'url(data:image/jpg' + ';base64,' + "" + ')');
                    $('#file-input-logo').val('');
                    $('#logo-file').val('');
                    $('.logo-file-label').html('Chọn logo đơn vị');
                }
            });
            _this.reloadIframePreview(1);
            ////////////-----------------Đóng--------------------///////////////////
        });
    };
    //////// Hiển thị logo sang trái, phải
    ModifynewComponent.prototype.onValueChanged = function ($event) {
        if ($event.value == "1") {
            this.frmData.json_data.logo_position = "1";
            $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").show();
            $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").hide();
        }
        else {
            this.frmData.json_data.logo_position = "2";
            $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").hide();
            $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").show();
        }
    };
    //////// Tùy chỉnh hiển thị nhiều trang
    ModifynewComponent.prototype.onPagesChanged = function ($event) {
        this.frmData.json_data.multipages_option = $event.value;
        this.mutipage = $event.value;
        if ($event.value == "1") {
            // let tHead = $('#preview-iframe').contents().find(".header-block");
            // tHead.replaceWith('<tbody class=\"header-block\" style=\"display: table-header-group;\">' + tHead.html() + '</tbody>');
            // let tHeadHH = $('#preview-iframe').contents().find(".table-header");
            // tHeadHH.replaceWith('<tbody class=\"table-header\">' + tHeadHH.html() + '</tbody>');
            var tBody = $('#preview-iframe').contents().find(".report-body");
            tBody.css('display', 'table-row-group');
            var tDetailS1 = $('#preview-iframe').contents().find(".detail-sumary1");
            var tDetailS2 = $('#preview-iframe').contents().find(".detail-sumary2");
            tBody.after("<tbody class=\"t-body-sign\" style=\"display: table-footer-group;page-break-inside: avoid;page-break-after: auto !important;\"></tbody>");
            var tBodySign = $('#preview-iframe').contents().find(".t-body-sign");
            tBodySign.append(tDetailS1);
            tBodySign.append(tDetailS2);
        }
        else if ($event.value == "0") {
            // let tHead = $('#preview-iframe').contents().find(".header-block");
            // tHead.replaceWith('<thead class=\"header-block\" style=\"display: table-header-group;\">' + tHead.html() + '</thead>');
            // let tHeadHH = $('#preview-iframe').contents().find(".table-header");
            // tHeadHH.replaceWith('<thead class=\"table-header\">' + tHeadHH.html() + '</thead>');
            var tBody = $('#preview-iframe').contents().find(".report-body");
            tBody.css('display', 'table-footer-group');
            var tDetailS1 = $('#preview-iframe').contents().find(".detail-sumary1");
            var tDetailS2 = $('#preview-iframe').contents().find(".detail-sumary2");
            tBody.append(tDetailS1);
            tBody.append(tDetailS2);
            var tBodySign = $('#preview-iframe').contents().find(".t-body-sign");
            tBodySign.remove();
        }
    };
    /////// Thay đổi màu chữ nền
    ModifynewComponent.prototype.colorBoxImgae_valueChanged = function (args) {
        var rgbColor = this.hexToRgb(args.value);
        if (rgbColor) {
            var rgb = "rgb(" + rgbColor.r + "," + rgbColor.g + "," + rgbColor.b + ")";
            $("#preview-iframe").contents().find(".water-text").css('color', rgb);
            this.frmData.json_data.watermark_text_color = args.value;
        }
    };
    ;
    ModifynewComponent.prototype.checkboxChangeBold = function (e) {
        if (this.watermark_text_italic)
            $("#preview-iframe").contents().find(".water-text").css('font-style', 'italic');
        else
            $("#preview-iframe").contents().find(".water-text").css('font-style', 'normal');
        this.frmData.json_data.watermark_text_italic = this.watermark_text_italic;
    };
    ///////// Thay đổi màu chữ hóa đơn
    ModifynewComponent.prototype.colorBox_valueChanged = function (args) {
        var rgbColor = this.hexToRgb(args.value);
        if (rgbColor) {
            var rgb_1 = "rgb(" + rgbColor.r + "," + rgbColor.g + "," + rgbColor.b + ")";
            this.arrIds.forEach(function (id) {
                $("#" + id).contents().find('body').css('color', rgb_1);
                $("#" + id).contents().find(".container").find('table').css('color', rgb_1);
            });
            this.frmData.json_data.color = rgb_1;
        }
    };
    ;
    /* Độ đậm viền bảng hàng hóa */
    ModifynewComponent.prototype.boldBorder_valueChanged = function (args) {
        if (args.value) {
            this.arrIds.forEach(function (id) {
                $("#" + id).contents().find("#tbDetail").find("th").css('border-color', args.value);
                $("#" + id).contents().find("#tbDetail").find("th:last-child").css('border-color', args.value);
                $("#" + id).contents().find("#tbDetail").find("td").css('border-color', args.value);
                $("#" + id).contents().find(".line-table").css('border-color', args.value);
                $("#" + id).contents().find(".border-right").css('border-color', args.value);
                $("#" + id).contents().find(".line-table-title").css('border-color', args.value);
                $("#" + id).contents().find(".middle-box").css('border-color', args.value);
                $("#" + id).contents().find(".title-middle-box").css('border-color', args.value);
            });
            this.currentBold = args.value;
            this.frmData.json_data.borderColor = args.value;
        }
    };
    ;
    /* Thay đổi font chữ hóa đơn */
    ModifynewComponent.prototype.fontBox_valueChanged = function (args) {
        var _this = this;
        if (args.value) {
            this.arrIds.forEach(function (id) {
                $('#' + id).contents().find('body').css('font-family', args.value);
                $('#' + id).contents().find(".container").find('table').css('font-family', args.value);
                $('#' + id).contents().find('.number').css('font-family', args.value);
                $('#' + id).contents().find('.number-center').css('font-family', args.value);
                $('#' + id).contents().find('.style-number').css('font-family', args.value);
                ////
                $('#' + id).contents().find('.name-1a783984-576d-c322-7843-bdacf97ac189').css('font-family', args.value);
                $('#' + id).contents().find('.columnDonViTinh').css('font-family', args.value);
                $('#' + id).contents().find('.columnSoLuong').css('font-family', args.value);
                $('#' + id).contents().find('.columnDonGia').css('font-family', args.value);
                $('#' + id).contents().find('.name-2a783984-576d-c322-7843-bdacf97ac189').css('font-family', args.value);
                $('#' + id).contents().find('.name-3a783984-576d-c322-7843-bdacf97ac189').css('font-family', args.value);
                $('#' + id).contents().find('.name-4a783984-576d-c322-7843-bdacf97ac189').css('font-family', args.value);
                $('#' + id).contents().find('.name-5a783984-576d-c322-7843-bdacf97ac189').css('font-family', args.value);
                $('#' + id).contents().find('.name-6a783984-576d-c322-7843-bdacf97ac189').css('font-family', args.value);
                ///
                _this.arrColumns.forEach(function (item) {
                    $('#' + id).contents().find('.' + item.value).css('font-family', args.value);
                });
            });
            this.frmData.json_data.font = args.value;
        }
    };
    ;
    //// Thay đổi logo mẫu hóa đơn
    ModifynewComponent.prototype.logoChanged = function (e) {
        var _this = this;
        var fileReader = new FileReader();
        var pattern = /image-*/;
        if (!e.target.files[0].type.match(pattern)) {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Định dạng file không đúng', 'error');
            return;
        }
        else {
            if (e.target.files[0].size <= 307200) {
                fileReader.readAsDataURL(e.target.files[0]);
                var extension_1 = e.target.files[0].name.split('.').pop();
                var image_1 = new Image();
                image_1.src = window.URL.createObjectURL(e.target.files[0]);
                var maxWidth_1 = 250;
                var maxHeight_1 = 125;
                var maxSize_1 = 150;
                // if (this.isTemVeThe) {
                //   if (this.paper_size == sEnum.paperSizes.A57Doc) {
                //     maxWidth = 99;
                //     maxHeight = 48;
                //     maxSize = 72;
                //   }
                //   if (this.paper_size == sEnum.paperSizes.A80Doc)
                //   {
                //     maxWidth = 181;
                //     maxHeight = 90;
                //     maxSize = 108;
                //   }
                // }
                fileReader.onload = function (evt) {
                    image_1.onload = function () {
                        var width = image_1.naturalWidth;
                        var height = image_1.naturalHeight;
                        var rateLogo = width / height;
                        ///logo left
                        var wlogo = $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").width();
                        if (width >= height) {
                            $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").css('height', 111 / rateLogo);
                            $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").css('width', 111);
                            if (rateLogo >= 2) {
                                $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").resizable({
                                    aspectRatio: true,
                                    maxWidth: maxWidth_1,
                                    maxHeight: maxHeight_1,
                                });
                            }
                            else {
                                $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").resizable({
                                    aspectRatio: true,
                                    maxWidth: maxSize_1,
                                    maxHeight: maxSize_1,
                                });
                            }
                        }
                        else {
                            $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").css('height', 150);
                            $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").css('width', 150 * rateLogo);
                            $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").resizable({
                                aspectRatio: true,
                                maxWidth: maxSize_1 * rateLogo,
                                maxHeight: maxSize_1,
                            });
                        }
                        ///////////logo right
                        if (width >= height) {
                            $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").css('height', 111 / rateLogo);
                            $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").css('width', 111);
                            if (rateLogo >= 2) {
                                $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").resizable({
                                    aspectRatio: true,
                                    maxWidth: maxWidth_1,
                                    maxHeight: maxHeight_1,
                                });
                            }
                            else {
                                $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").resizable({
                                    aspectRatio: true,
                                    maxWidth: maxSize_1,
                                    maxHeight: maxSize_1,
                                });
                            }
                        }
                        else {
                            $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").css('height', 150);
                            $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").css('width', 150 * rateLogo);
                            $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").resizable({
                                aspectRatio: true,
                                maxWidth: maxSize_1 * rateLogo,
                                maxHeight: maxSize_1,
                            });
                        }
                    };
                    var base64result = fileReader.result.toString().split(',')[1];
                    if (base64result) {
                        $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").css('background-image', 'url(data:image/' + extension_1 + ';base64,' + base64result + ')');
                        $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").css('background-image', 'url(data:image/' + extension_1 + ';base64,' + base64result + ')');
                        $('.logo-file-label').html(e.target.files[0].name);
                        _this.frmData.json_data.logo_name = e.target.files[0].name;
                    }
                };
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Chỉ nên upload ảnh kích cỡ nhỏ hơn 300KB', 'error');
            }
        }
    };
    ///////Xóa logo
    ModifynewComponent.prototype.xoaLogo = function () {
        $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").css('background-image', 'url(data:image/jpg' + ';base64,' + "" + ')');
        $('#file-input-logo').val('');
        $('#logo-file').val('');
        $('.logo-file-label').html('Chọn logo đơn vị');
        //////logo left
        $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").find(".ui-resizable-se").css('display', 'none');
        $("#preview-iframe").contents().find(".logo-company-left").find(".delete-logo-template").css('display', 'none');
        $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").css('border-width', '0px');
        /////// logo right
        $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").find(".ui-resizable-se").css('display', 'none');
        $("#preview-iframe").contents().find(".logo-company-right").find(".delete-logo-template").css('display', 'none');
        $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").css('border-width', '0px');
        this.frmData.json_data.logo_name = 'Chọn logo đơn vị';
    };
    ////// Thay đổi ảnh viền
    ModifynewComponent.prototype.ImageBoxChanged = function (e) {
        var _this = this;
        this.items = [];
        this.listNameImage.forEach(function (item) {
            _this.ObjectImage = {};
            var urlOrigion = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].API_URL + "/image/khung/";
            var extended = ".jpg";
            _this.ObjectImage.display_name = item.title;
            _this.ObjectImage.id = _core_index__WEBPACK_IMPORTED_MODULE_8__["Helper"].makeid();
            var objectPaper = item.paperSize.filter(function (p) { return p == _this.paper_size; })[0];
            if ((item.paperSize && item.paperSize.length == 0) || objectPaper) {
                switch (_this.paper_size) {
                    case _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Doc:
                        _this.ObjectImage.jpg_file = urlOrigion + item.name + extended;
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Ngang:
                        _this.ObjectImage.jpg_file = urlOrigion + item.name + "_" + _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Ngang.toLowerCase() + extended;
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A5Ngang:
                        _this.ObjectImage.jpg_file = urlOrigion + item.name + "_" + _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A5Ngang.toLowerCase() + extended;
                        break;
                    default:
                        _this.ObjectImage.jpg_file = urlOrigion + item.name + extended;
                        break;
                }
                _this.items.push(_this.ObjectImage);
            }
        });
        $(".gallery").css('display', 'block');
        $(".inforCommon").css('display', 'none');
    };
    ////// Xóa ảnh viền
    ModifynewComponent.prototype.xoaAnhVien = function () {
        this.arrIds.forEach(function (id) {
            $("#" + id).contents().find(".bg-template-default").css('background-image', 'url(data:image/jpg' + ';base64,' + "" + ')');
        });
        $(".inputSearch").val('');
        this.watermark_image_default_name = '';
        this.watermark_image_default = '';
    };
    ////// Thay đổi ảnh nền hóa đơn
    ModifynewComponent.prototype.watermarkChanged = function (e) {
        var _this = this;
        var fileReader = new FileReader();
        var pattern = /image-*/;
        if (!e.target.files[0].type.match(pattern)) {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Định dạng file không đúng', 'error');
            return;
        }
        else {
            if (e.target.files[0].size <= 1048576) {
                fileReader.readAsDataURL(e.target.files[0]);
                var image_2 = new Image();
                image_2.src = window.URL.createObjectURL(e.target.files[0]);
                fileReader.onload = function (evt) {
                    image_2.onload = function () {
                        var width = image_2.naturalWidth;
                        var height = image_2.naturalHeight;
                        var top = (_this.maxHeight - height) / 2;
                        var left = (_this.maxWidth - width) / 2;
                        var base64result = fileReader.result.toString().split(',')[1];
                        var extension = e.target.files[0].name.split('.').pop();
                        if (base64result) {
                            _this.arrIds.forEach(function (id) {
                                $('#' + id).contents().find(".bg-template-parent").css('z-index', '500').css('border-width', '1px').css('border-style', 'solid').css('border-color', 'rgb(20, 146, 230)').css('display', 'block').css('background-image', 'none').css('width', width).css('height', height).css('top', top).css('left', left);
                                $('#' + id).contents().find(".bg-template-parent").find(".bg-template").css('background-image', 'url(data:image/' + extension + ';base64,' + base64result + ')');
                                $('#' + id).contents().find(".bg-template-parent").find(".ui-resizable-se").css('display', 'block');
                                $('#' + id).contents().find(".bg-template-parent").resizable({
                                    aspectRatio: true,
                                    maxWidth: _this.maxWidth,
                                    maxHeight: _this.maxHeight,
                                });
                            });
                            var slider = $("#slider").slider("values", 0);
                            $("#slider").slider("option", "value", slider);
                            $('.watermark-file-label').html(e.target.files[0].name);
                            _this.frmData.json_data.watermark_image_name = e.target.files[0].name;
                            _this.watermark_image = base64result;
                        }
                    };
                };
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Chỉ nên upload ảnh kích cỡ nhỏ hơn 1MB', 'error');
            }
        }
    };
    ////// Xóa ảnh nền hóa đơn
    ModifynewComponent.prototype.xoaAnhNen = function () {
        this.arrIds.forEach(function (id) {
            $('#' + id).contents().find(".bg-template-parent").find(".bg-template").css('background-image', 'url(data:image/jpg' + ';base64,' + "" + ')');
            $('#watermark-file').val('');
            $('.watermark-file-label').html('Chọn ảnh nền hóa đơn');
            $('#' + id).contents().find(".bg-template-parent").css('border-width', '0px').css('display', 'none');
            $('#' + id).contents().find(".bg-template-parent").find(".ui-resizable-se").css('display', 'none');
        });
        this.frmData.json_data.watermark_image_name = '';
        this.watermark_image = '';
    };
    //////// Thêm mới thông tin người bán
    ModifynewComponent.prototype.themmoiTTBenBan = function () {
        var data = this.add_row_data_ben_ban();
        this.dataSource.push(data);
        var countChild = $("#preview-iframe").contents().find(".GroupUserField").get(0).childElementCount;
        var testadd1 = "<div class=\"sort ui-helper-clearfix " + "parent-" + data.code + "\" >\n    <div class=\"" + "childparent-" + data.code + "\" >\n<span style=\"display: table-cell;white-space: nowrap;\" class=\"" + "name-" + data.code + "\"></span>\n<span style=\"display: table-cell;margin-top: 2px;font-style: italic;font-size: 12px !important;line-height: 20px;\" class=\"" + "italic-" + data.code + "\"></span>\n<span style=\"display: table-cell;white-space: pre-line;\" class=\"" + "value-" + data.code + "\">       </span></div></div>";
        $("#preview-iframe").contents().find(".GroupUserField").append($(testadd1));
        $("#preview-iframe").contents().find(".GroupUserField").find(".childparent-" + data.code).css('float', 'left').css('width', '100%').css('cursor', 'move');
        $('#preview-iframe').contents().find(".parent-" + data.code).sortable({
            connectWith: ".sort",
        }).disableSelection();
        /////Sự kiện click vào span
        var self = this;
        this.CreateAgainDrapAnđrop();
        $("#preview-iframe").each(function () {
            //Using closures to capture each one
            var iframe = $(this);
            self.isBegin = false;
            self.isBenBan = true;
            self.isBenMua = false;
            self.isMauDraff = false;
            iframe.contents().find('span').mousedown(function (event) {
                if (self.isBenBan) {
                    if (event.which == 3) {
                        if (self.arrFontChange && self.arrFontChange.length > 0) {
                        }
                        else {
                            self.arrFontChange.push(event.target.className);
                            $('#preview-iframe').contents().find("." + self.arrFontChange[0]).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
                        }
                        iframe.trigger("click");
                    }
                    else if (event.which == 1 && event.ctrlKey) {
                        var filter = void 0;
                        if (self.arrFontChange)
                            filter = self.arrFontChange.filter(function (p) { return p == event.target.className; });
                        if (filter.length > 0) {
                            var index = self.arrFontChange.indexOf(filter[0]);
                            if (index != -1) {
                                $('#preview-iframe').contents().find("." + event.target.className).css('border-radius', '3px').css('border', 'none');
                                self.arrFontChange.splice(index, 1);
                            }
                        }
                        else {
                            self.arrFontChange.push(event.target.className);
                            $('#preview-iframe').contents().find("." + event.target.className).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
                        }
                    }
                }
            });
            self.ChangeFontTemptPlate(iframe, self);
        });
        $(document).contextmenu(function () {
            return false;
        });
    };
    //////// Thêm mới thông tin người mua
    ModifynewComponent.prototype.themmoiTTBenMua = function () {
        var data = this.add_row_data_ben_mua();
        this.dataSourceBenMua.push(data);
        var testadd1 = "<div class=\"sort ui-helper-clearfix " + "parent-" + data.code + "\" >\n    <div class=\"" + "childparent-" + data.code + "\" >\n    <span style=\"display: table-cell;white-space: nowrap;padding-right: 3px;\" class=\"" + "name-" + data.code + "\"></span>\n    <span style=\"display: table-cell;white-space: pre-line;\" class=\"" + "value-" + data.code + "\">       </span></div></div>";
        if (this.isThuXacNhan) {
            testadd1 = "<div class=\"sort ui-helper-clearfix " + "parent-" + data.code + "\" >\n    <div class=\"" + "childparent-" + data.code + "\" >\n    <span style=\"display: table-cell;white-space: nowrap;\" class=\"" + "name-" + data.code + "\"></span>\n    <span style=\"display: table-cell;margin-top: 2px;font-style: italic;font-size: 12px !important;line-height: 20px;\" class=\"" + "italic-" + data.code + "\"></span>\n    <span style=\"display: table-cell;white-space: pre-line;\" class=\"" + "value-" + data.code + "\">       </span></div></div>";
        }
        $("#preview-iframe").contents().find(".GroupCustomField").append($(testadd1));
        $("#preview-iframe").contents().find(".GroupCustomField").find(".childparent-" + data.code).css('float', 'left').css('width', '100%').css('cursor', 'move');
        $('#preview-iframe').contents().find(".parent-" + data.code).sortable({
            connectWith: ".sort",
        }).disableSelection();
        /////Sự kiện click vào span
        var self = this;
        this.CreateAgainDrapAnđrop();
        $("#preview-iframe").each(function () {
            //Using closures to capture each one
            var iframe = $(this);
            self.isBegin = false;
            self.isBenBan = false;
            self.isBenMua = true;
            self.isMauDraff = false;
            iframe.contents().find('span').mousedown(function (event) {
                if (self.isBenMua) {
                    if (event.which == 3) {
                        if (self.arrFontChange && self.arrFontChange.length > 0) {
                        }
                        else {
                            self.arrFontChange.push(event.target.className);
                            $('#preview-iframe').contents().find("." + self.arrFontChange[0]).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
                        }
                        iframe.trigger("click");
                    }
                    else if (event.which == 1 && event.ctrlKey) {
                        var filter = void 0;
                        if (self.arrFontChange)
                            filter = self.arrFontChange.filter(function (p) { return p == event.target.className; });
                        if (filter.length > 0) {
                            var index = self.arrFontChange.indexOf(filter[0]);
                            if (index != -1) {
                                $('#preview-iframe').contents().find("." + event.target.className).css('border-radius', '3px').css('border', 'none');
                                self.arrFontChange.splice(index, 1);
                            }
                        }
                        else {
                            self.arrFontChange.push(event.target.className);
                            $('#preview-iframe').contents().find("." + event.target.className).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
                        }
                    }
                }
            });
            self.ChangeFontTemptPlate(iframe, self);
        });
        $(document).contextmenu(function () {
            return false;
        });
    };
    /* Bổ sung thông tin hàng hóa, dịch vụ */
    ModifynewComponent.prototype.themmoiTTHangHoa = function () {
        var data = this.add_row_data_hang_hoa();
        this.ds_hang_hoa_dich_vu.push(data);
        var testadd1 = "<div class=\"sort ui-helper-clearfix " + "parent-" + data.code + "\" >\n    <div class=\"" + "childparent-" + data.code + "\" >\n    <span style=\"display: table-cell;white-space: nowrap;padding-right: 3px;\" class=\"" + "name-" + data.code + "\"></span>\n    <span style=\"display: table-cell;white-space: pre-line;\" class=\"" + "value-" + data.code + "\">       </span></div></div>";
        $("#preview-iframe").contents().find(".GroupCustomField").append($(testadd1));
        $("#preview-iframe").contents().find(".GroupCustomField").find(".childparent-" + data.code).css('float', 'left').css('width', '100%').css('cursor', 'move');
        $('#preview-iframe').contents().find(".parent-" + data.code).sortable({
            connectWith: ".sort",
        }).disableSelection();
        /////Sự kiện click vào span
        var self = this;
        this.CreateAgainDrapAnđrop();
        $("#preview-iframe").each(function () {
            //Using closures to capture each one
            var iframe = $(this);
            self.isBegin = false;
            self.isBenBan = false;
            self.isBenMua = true;
            self.isMauDraff = false;
            iframe.contents().find('span').mousedown(function (event) {
                if (self.isBenMua) {
                    if (event.which == 3) {
                        if (self.arrFontChange && self.arrFontChange.length > 0) {
                        }
                        else {
                            self.arrFontChange.push(event.target.className);
                            $('#preview-iframe').contents().find("." + self.arrFontChange[0]).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
                        }
                        iframe.trigger("click");
                    }
                    else if (event.which == 1 && event.ctrlKey) {
                        var filter = void 0;
                        if (self.arrFontChange)
                            filter = self.arrFontChange.filter(function (p) { return p == event.target.className; });
                        if (filter.length > 0) {
                            var index = self.arrFontChange.indexOf(filter[0]);
                            if (index != -1) {
                                $('#preview-iframe').contents().find("." + event.target.className).css('border-radius', '3px').css('border', 'none');
                                self.arrFontChange.splice(index, 1);
                            }
                        }
                        else {
                            self.arrFontChange.push(event.target.className);
                            $('#preview-iframe').contents().find("." + event.target.className).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
                        }
                    }
                }
            });
            self.ChangeFontTemptPlate(iframe, self);
        });
        $(document).contextmenu(function () {
            return false;
        });
    };
    /////////// Xóa thông tin đơn vị
    ModifynewComponent.prototype.deleteRow = function (item) {
        var index = this.dataSource.indexOf(item);
        if (index !== -1) {
            var classname = "";
            if (item.type == "2")
                classname = "parent-" + item.code;
            else
                classname = "parent-" + item.code;
            this.dataSource.splice(index, 1);
            $('#preview-iframe').contents().find("." + classname).remove();
        }
    };
    /////////// Xóa thông tin bên mua
    ModifynewComponent.prototype.deleteRowBenMua = function (item) {
        var index = this.dataSourceBenMua.indexOf(item);
        if (index !== -1) {
            this.dataSourceBenMua.splice(index, 1);
            var classParent = "parent-" + item.code;
            var childList = $('#preview-iframe').contents().find("." + classParent).children();
            for (var i = 0; i < childList.length; i++) {
                var code = childList[i].className.replace('childparent-', '').replace(' ui-sortable-handle', '');
                if (code !== item.code) {
                    $('#preview-iframe').contents().find(".parent-" + code).append($(childList[i]));
                }
            }
            $('#preview-iframe').contents().find("." + classParent).remove();
            var classChildParent = "childparent-" + item.code;
            $('#preview-iframe').contents().find("." + classChildParent).remove();
        }
    };
    /* Xóa thông tin hàng hóa dịch vụ */
    ModifynewComponent.prototype.deleteRowBSHHDV = function (item) {
        var index = this.ds_hang_hoa_dich_vu.indexOf(item);
        if (index !== -1) {
            this.ds_hang_hoa_dich_vu.splice(index, 1);
            var classParent = "parent-" + item.code;
            var childList = $('#preview-iframe').contents().find("." + classParent).children();
            for (var i = 0; i < childList.length; i++) {
                var code = childList[i].className.replace('childparent-', '').replace(' ui-sortable-handle', '');
                if (code !== item.code) {
                    $('#preview-iframe').contents().find(".parent-" + code).append($(childList[i]));
                }
            }
            $('#preview-iframe').contents().find("." + classParent).remove();
            var classChildParent = "childparent-" + item.code;
            $('#preview-iframe').contents().find("." + classChildParent).remove();
        }
    };
    /////////Sự kiện xử lý trên lưới bên bán
    ModifynewComponent.prototype.editorPrepared = function (e) {
        if (e.parentType == 'dataRow') {
            //////////name
            var classname = "name" + "-" + e.row.data.code;
            var valuex = e.row.data.name;
            var italic = "italic-" + e.row.data.code;
            if (valuex == '') {
                $('#preview-iframe').contents().find("." + italic).html('');
                $('#preview-iframe').contents().find("." + italic).css('padding-right', '0px');
                $('#preview-iframe').contents().find("." + classname).html(e.row.data.name);
                $('#preview-iframe').contents().find("." + classname).css('padding-right', '0px');
            }
            else {
                $('#preview-iframe').contents().find("." + classname).css('padding-right', '3px');
                if ($("#preview-iframe").contents().find("." + italic)[0]) {
                    var namereplace = e.row.data.name.replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;");
                    var splitr = namereplace.split('(');
                    if (splitr[1]) {
                        $('#preview-iframe').contents().find("." + italic).html('(' + splitr[1]);
                        $('#preview-iframe').contents().find("." + italic).css('padding-right', '3px');
                    }
                    else {
                        $('#preview-iframe').contents().find("." + italic).html('');
                        $('#preview-iframe').contents().find("." + italic).css('padding-right', '0px');
                    }
                    $('#preview-iframe').contents().find("." + classname).html(splitr[0]);
                }
                else {
                    var namereplace = e.row.data.name.replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;");
                    $('#preview-iframe').contents().find("." + classname).html(namereplace);
                }
            }
            ///////////value
            var classnameValue = "value" + "-" + e.row.data.code;
            $('#preview-iframe').contents().find("." + classnameValue).html('   ' + _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value));
            switch (e.row.data.code) {
                case "9f783984-576d-c322-7843-bdacf97ac189":
                    this.frmData.json_data.company_email = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value);
                    break;
                case "8f783984-576d-c322-7843-bdacf97ac189":
                    this.frmData.json_data.phone = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value);
                    break;
                case "7f783984-576d-c322-7843-bdacf97ac189":
                    this.frmData.json_data.website = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value);
                    break;
                case "2db1350b-570c-0fa1-08fa-10e67f64c8c7":
                    this.frmData.json_data.fax = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value);
                    break;
                case "1db1350b-570c-0fa1-08fa-10e67f64c8c7":
                    this.frmData.json_data.bank_name = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value);
                    break;
            }
            //////////width
            var classwidth = "childparent-" + e.row.data.code;
            if (Number.parseInt(e.row.data.width) != 30)
                $('#preview-iframe').contents().find("." + classwidth).css('width', Number.parseInt(e.row.data.width) - 1 + '%');
            else {
                if (e.row.data.code == "7f783984-576d-c322-7843-bdacf97ac189")
                    $('#preview-iframe').contents().find("." + classwidth).css('width', Number.parseInt(e.row.data.width) + 5 + '%');
                else
                    $('#preview-iframe').contents().find("." + classwidth).css('width', Number.parseInt(e.row.data.width) + 2 + '%');
            }
        }
    };
    /////////Sự kiện xử lý trên lưới bên mua
    ModifynewComponent.prototype.editorPreparedBenMua = function (e) {
        if (e.parentType == 'dataRow') {
            ////////name
            var classname = e.dataField + "-" + e.row.data.code;
            var valuex = e.row.data.name;
            if (valuex == '')
                $('#preview-iframe').contents().find("." + classname).html(e.row.data.name);
            else
                $('#preview-iframe').contents().find("." + classname).html(e.row.data.name + ': ');
            ////////width
            var classwidth = "childparent-" + e.row.data.code;
            $('#preview-iframe').contents().find("." + classwidth).css('width', Number.parseInt(e.row.data.width) - 1 + '%');
        }
    };
    ModifynewComponent.prototype.editorPreparedBSHHDV = function (e) {
        if (e.parentType == 'dataRow') {
            ////////name
            var classname = e.dataField + "-" + e.row.data.code;
            var valuex = e.row.data.name;
            if (valuex == '')
                $('#preview-iframe').contents().find("." + classname).html(e.row.data.name);
            else
                $('#preview-iframe').contents().find("." + classname).html(e.row.data.name + ': ');
            ////////width
            var classwidth = "childparent-" + e.row.data.code;
            $('#preview-iframe').contents().find("." + classwidth).css('width', Number.parseInt(e.row.data.width) - 1 + '%');
        }
    };
    //////// Ẩn hiện thông tin đơn vị bên bán
    ModifynewComponent.prototype.checkShowHideTN = function (item) {
        if (item.code != "8e693984-576d-c322-7843-bdacf97ac189") {
            var classnameParent = "parent-" + item.code;
            var classChildParent = "childparent-" + item.code;
            if (item.code == "ky-so-ben-ban" || item.code == "ma-qr-code") {
                classnameParent = item.code;
                classChildParent = item.code;
            }
            var childList = $('#preview-iframe').contents().find("." + classnameParent).children();
            for (var i = 0; i < childList.length; i++) {
                var code = childList[i].className.replace('childparent-', '').replace(' ui-sortable-handle', '');
                if (code !== item.code) {
                    $('#preview-iframe').contents().find(".parent-" + code).append($(childList[i]));
                }
            }
            if (item.is_show) {
                if (item.code == "ky-so-ben-ban" || item.code == "ma-qr-code") {
                    $('#preview-iframe').contents().find("." + classnameParent).css('display', 'inline-block');
                    $('#preview-iframe').contents().find("." + classChildParent).css('display', 'inline-block');
                    if (item.code == "ky-so-ben-ban")
                        $('#preview-iframe').contents().find(".da-duoc-ky-so-ben-ban").css('display', 'none');
                }
                else {
                    $('#preview-iframe').contents().find("." + classnameParent).css('display', 'block');
                    $('#preview-iframe').contents().find("." + classChildParent).css('display', 'block');
                }
            }
            else {
                if (item.code == "ky-so-ben-ban")
                    $('#preview-iframe').contents().find(".da-duoc-ky-so-ben-ban").css('display', '');
                $('#preview-iframe').contents().find("." + classnameParent).css('display', 'none');
                $('#preview-iframe').contents().find("." + classChildParent).css('display', 'none');
            }
        }
        else {
            var classname = "name-" + item.code;
            var classnameEn = "italic-" + item.code;
            if (item.is_show) {
                if (this.isTemVeThe && item.code == "8e693984-576d-c322-7843-bdacf97ac189") {
                    $('#preview-iframe').contents().find("." + classname).css('display', 'inline-block');
                    $('#preview-iframe').contents().find("." + classnameEn).css('display', 'inline-block');
                }
                else {
                    $('#preview-iframe').contents().find("." + classname).css('display', 'table-cell');
                    $('#preview-iframe').contents().find("." + classnameEn).css('display', 'table-cell');
                }
            }
            else {
                $('#preview-iframe').contents().find("." + classname).css('display', 'none');
                $('#preview-iframe').contents().find("." + classnameEn).css('display', 'none');
            }
        }
        if (this.isTemVeThe)
            this.CreateAgainDrapAnđrop();
    };
    ModifynewComponent.prototype.checkShowHideHangHoa = function () {
        var _this = this;
        var pxk = this.dataSourceHangHoa.filter(function (p) { return p.name == "Mã hàng" || p.name == "Đơn hàng/Hợp đồng"; });
        var listChecked = pxk.filter(function (p) { return p.is_show; });
        var numberChecked = listChecked.length;
        var numberColspan = 3 + numberChecked;
        this.dataSourceHangHoa.forEach(function (item) {
            var classname = "name-" + item.code;
            if (_this.isBienLaiDienTu)
                classname = item.code;
            if (item.is_show) {
                if (_this.invoice_type == "03XKNB") {
                    $("#preview-iframe").contents().find(".report-body").find(".detail-sumary").find(".col-span-full").first().attr('colspan', numberColspan);
                    $('#preview-iframe').contents().find("." + classname).css('display', 'table-cell');
                }
                else {
                    $('#preview-iframe').contents().find("." + classname).css('display', 'table-cell');
                }
            }
            else {
                if (_this.invoice_type == "03XKNB") {
                    $("#preview-iframe").contents().find(".report-body").find(".detail-sumary").find(".col-span-full").first().attr('colspan', numberColspan);
                    $('#preview-iframe').contents().find("." + classname).css('display', 'none');
                }
                else {
                    $('#preview-iframe').contents().find("." + classname).css('display', 'none');
                }
            }
        });
    };
    ModifynewComponent.prototype.checkShowHideTNCN = function () {
        this.dataSourceTNCN.forEach(function (item) {
            var classname = "name-" + item.code;
            var classitalic = "italic-" + item.code;
            var classvalue = "value-" + item.code;
            if (item.is_show) {
                $('#preview-iframe').contents().find("." + classname).css('display', 'table-cell');
                $('#preview-iframe').contents().find("." + classitalic).css('display', 'table-cell');
                $('#preview-iframe').contents().find("." + classvalue).css('display', 'table-cell');
            }
            else {
                $('#preview-iframe').contents().find("." + classname).css('display', 'none');
                $('#preview-iframe').contents().find("." + classitalic).css('display', 'none');
                $('#preview-iframe').contents().find("." + classvalue).css('display', 'none');
            }
        });
    };
    ModifynewComponent.prototype.checkShowHideUserTXN = function () {
        this.dataSourceUserTXN.forEach(function (item) {
            var classname = "name-" + item.code;
            var classitalic = "italic-" + item.code;
            var classvalue = "value-" + item.code;
            if (item.is_show) {
                $('#preview-iframe').contents().find("." + classname).css('display', 'table-cell');
                $('#preview-iframe').contents().find("." + classitalic).css('display', 'table-cell');
                $('#preview-iframe').contents().find("." + classvalue).css('display', 'table-cell');
            }
            else {
                $('#preview-iframe').contents().find("." + classname).css('display', 'none');
                $('#preview-iframe').contents().find("." + classitalic).css('display', 'none');
                $('#preview-iframe').contents().find("." + classvalue).css('display', 'none');
            }
        });
    };
    ModifynewComponent.prototype.checkShowHideTXN = function () {
        this.dataSourceTXN.forEach(function (item) {
            var classname = "name-" + item.code;
            var classitalic = "italic-" + item.code;
            var classvalue = "value-" + item.code;
            if (item.is_show) {
                $('#preview-iframe').contents().find("." + classname).css('display', 'table-cell');
                $('#preview-iframe').contents().find("." + classitalic).css('display', 'table-cell');
                $('#preview-iframe').contents().find("." + classvalue).css('display', 'table-cell');
            }
            else {
                $('#preview-iframe').contents().find("." + classname).css('display', 'none');
                $('#preview-iframe').contents().find("." + classitalic).css('display', 'none');
                $('#preview-iframe').contents().find("." + classvalue).css('display', 'none');
            }
        });
    };
    ModifynewComponent.prototype.checkShowHideTXNOther = function () {
        this.dataSourceTXNOther.forEach(function (item) {
            var classname = "name-" + item.code;
            var classitalic = "italic-" + item.code;
            var classvalue = "value-" + item.code;
            if (item.is_show) {
                $('#preview-iframe').contents().find("." + classname).css('display', 'table-cell');
                $('#preview-iframe').contents().find("." + classitalic).css('display', 'table-cell');
                $('#preview-iframe').contents().find("." + classvalue).css('display', 'table-cell');
            }
            else {
                if (item.code === 'tien-thue-nha-txn') {
                    $('#preview-iframe').contents().find(".childparent-tien-thue-nha-txn").css('display', 'none');
                }
                $('#preview-iframe').contents().find("." + classname).css('display', 'none');
                $('#preview-iframe').contents().find("." + classitalic).css('display', 'none');
                $('#preview-iframe').contents().find("." + classvalue).css('display', 'none');
            }
        });
    };
    //////// Ẩn hiện thông tin đơn vị bên mua
    ModifynewComponent.prototype.checkShowHideBenMua = function (item) {
        var classnameParent = "parent-" + item.code;
        var classChildParent = "childparent-" + item.code;
        var childList = $('#preview-iframe').contents().find("." + classnameParent).children();
        for (var i = 0; i < childList.length; i++) {
            var code = childList[i].className.replace('childparent-', '').replace(' ui-sortable-handle', '');
            if (code !== item.code) {
                $('#preview-iframe').contents().find(".parent-" + code).append($(childList[i]));
            }
        }
        if (item.is_show) {
            $('#preview-iframe').contents().find("." + classChildParent).css('display', 'block');
            $('#preview-iframe').contents().find("." + classnameParent).css('display', 'block');
        }
        else {
            $('#preview-iframe').contents().find("." + classChildParent).css('display', 'none');
            $('#preview-iframe').contents().find("." + classnameParent).css('display', 'none');
        }
        if (this.isTemVeThe)
            this.CreateAgainDrapAnđrop();
    };
    /* Ẩn hiện thông tin bổ sung hàng hóa dịch vụ */
    ModifynewComponent.prototype.checkShowHideBSHHDV = function (item) {
        var classnameParent = "parent-" + item.code;
        var classChildParent = "childparent-" + item.code;
        var childList = $('#preview-iframe').contents().find("." + classnameParent).children();
        for (var i = 0; i < childList.length; i++) {
            var code = childList[i].className.replace('childparent-', '').replace(' ui-sortable-handle', '');
            if (code !== item.code) {
                $('#preview-iframe').contents().find(".parent-" + code).append($(childList[i]));
            }
        }
        if (item.is_show) {
            $('#preview-iframe').contents().find("." + classChildParent).css('display', 'block');
            $('#preview-iframe').contents().find("." + classnameParent).css('display', 'block');
        }
        else {
            $('#preview-iframe').contents().find("." + classChildParent).css('display', 'none');
            $('#preview-iframe').contents().find("." + classnameParent).css('display', 'none');
        }
        if (this.isTemVeThe)
            this.CreateAgainDrapAnđrop();
    };
    ///////Sự kiện xử lý trên lưới bên bán
    ModifynewComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField == "value" && e.parentType == "dataRow") {
            if (e.row.key.code == "1db1350b-570c-0fa1-08fa-10e67f64c8c7" || e.row.key.code == "7e693984-576d-c322-7843-bdacf97ac189" || e.row.key.code == "8e693984-576d-c322-7843-bdacf97ac189") {
                e.editorName = "dxTextArea";
                e.editorOptions.height = 300;
            }
            if (e.row.key.code == '6e693984-576d-c322-7843-bdacf97ac189' || e.row.key.code == 'ky-so-ben-ban' || e.row.key.code == 'a188b9ae-40c4-11ee-be56-0242ac120002' || e.row.key.code == "ma-qr-code")
                e.editorOptions.disabled = true;
        }
        this.dataSource.forEach(function (item) {
            if (item.code != e.row.data.code) {
                var classname_1 = "childparent-" + item.code;
                $('#preview-iframe').contents().find("." + classname_1).css('border-radius', '3px').css('border', 'none');
            }
            else {
                var classname_2 = "childparent-" + e.row.data.code;
                $('#preview-iframe').contents().find("." + classname_2).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
            }
        });
        var classname = "childparent-" + e.row.data.code;
        e.editorOptions.onFocusOut = function (args) {
            $('#preview-iframe').contents().find("." + classname).css('border-radius', '3px').css('border', 'none');
            ///////////
            if (e.parentType == 'dataRow') {
                //////////name
                var classname_3 = "name" + "-" + e.row.data.code;
                var valuex = e.row.data.name;
                var italic = "italic-" + e.row.data.code;
                if (valuex == '') {
                    $('#preview-iframe').contents().find("." + italic).html('');
                    $('#preview-iframe').contents().find("." + italic).css('padding-right', '0px');
                    $('#preview-iframe').contents().find("." + classname_3).html(e.row.data.name);
                    $('#preview-iframe').contents().find("." + classname_3).css('padding-right', '0px');
                }
                else {
                    $('#preview-iframe').contents().find("." + classname_3).css('padding-right', '3px');
                    if ($("#preview-iframe").contents().find("." + italic)[0]) {
                        var namereplace = e.row.data.name.replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;");
                        var splitr = namereplace.split('(');
                        if (splitr[1]) {
                            $('#preview-iframe').contents().find("." + italic).html('(' + splitr[1]);
                            $('#preview-iframe').contents().find("." + italic).css('padding-right', '3px');
                        }
                        else {
                            $('#preview-iframe').contents().find("." + italic).html('');
                            $('#preview-iframe').contents().find("." + italic).css('padding-right', '0px');
                        }
                        $('#preview-iframe').contents().find("." + classname_3).html(splitr[0]);
                    }
                    else {
                        var namereplace = e.row.data.name.replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;");
                        $('#preview-iframe').contents().find("." + classname_3).html(namereplace);
                    }
                }
                ///////////value
                var classnameValue = "value" + "-" + e.row.data.code;
                $('#preview-iframe').contents().find("." + classnameValue).html('   ' + _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value));
                if (classnameValue == "value-8e693984-576d-c322-7843-bdacf97ac189")
                    $('#preview-iframe').contents().find(".value-ten-to-chuc-tncn").html('   ' + _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value));
                switch (e.row.data.code) {
                    case "9f783984-576d-c322-7843-bdacf97ac189":
                        this.frmData.json_data.company_email = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value);
                        break;
                    case "8f783984-576d-c322-7843-bdacf97ac189":
                        this.frmData.json_data.phone = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value);
                        break;
                    case "7f783984-576d-c322-7843-bdacf97ac189":
                        this.frmData.json_data.website = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value);
                        break;
                    case "2db1350b-570c-0fa1-08fa-10e67f64c8c7":
                        this.frmData.json_data.fax = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value);
                        break;
                    case "1db1350b-570c-0fa1-08fa-10e67f64c8c7":
                        this.frmData.json_data.bank_name = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(e.row.data.value);
                        break;
                }
                //////////width
                var classwidth = "childparent-" + e.row.data.code;
                if (Number.parseInt(e.row.data.width) != 30)
                    $('#preview-iframe').contents().find("." + classwidth).css('width', Number.parseInt(e.row.data.width) - 1 + '%');
                else {
                    if (e.row.data.code == "7f783984-576d-c322-7843-bdacf97ac189")
                        $('#preview-iframe').contents().find("." + classwidth).css('width', Number.parseInt(e.row.data.width) + 5 + '%');
                    else
                        $('#preview-iframe').contents().find("." + classwidth).css('width', Number.parseInt(e.row.data.width) + 2 + '%');
                }
            }
        };
    };
    ModifynewComponent.prototype.onEditorPreparingBenMua = function (e) {
        this.dataSourceBenMua.forEach(function (item) {
            if (item.code != e.row.data.code) {
                var classname_4 = "childparent-" + item.code;
                $('#preview-iframe').contents().find("." + classname_4).css('border-radius', '3px').css('border', 'none');
            }
            else {
                var classnameChild = "childparent-" + e.row.data.code;
                $('#preview-iframe').contents().find("." + classnameChild).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
            }
        });
        var classname = "childparent-" + e.row.data.code;
        var self = this;
        e.editorOptions.onFocusOut = function (args) {
            $('#preview-iframe').contents().find("." + classname).css('border-radius', '3px').css('border', 'none');
            /////
            if (e.parentType == 'dataRow') {
                ////////name
                if (self.isThuXacNhan) {
                    //////////name
                    var classname_5 = "name" + "-" + e.row.data.code;
                    var valuex = e.row.data.name;
                    var italic = "italic-" + e.row.data.code;
                    if (valuex == '') {
                        $('#preview-iframe').contents().find("." + italic).html('');
                        $('#preview-iframe').contents().find("." + italic).css('padding-right', '0px');
                        $('#preview-iframe').contents().find("." + classname_5).html(e.row.data.name);
                        $('#preview-iframe').contents().find("." + classname_5).css('padding-right', '0px');
                    }
                    else {
                        $('#preview-iframe').contents().find("." + classname_5).css('padding-right', '3px');
                        if ($("#preview-iframe").contents().find("." + italic)[0]) {
                            var namereplace = e.row.data.name.replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;");
                            if (e.row.data.name_en) {
                                $('#preview-iframe').contents().find("." + italic).html(e.row.data.name_en);
                                $('#preview-iframe').contents().find("." + italic).css('padding-right', '3px');
                            }
                            else {
                                $('#preview-iframe').contents().find("." + italic).html('');
                                $('#preview-iframe').contents().find("." + italic).css('padding-right', '0px');
                            }
                        }
                        else {
                            var namereplace = e.row.data.name.replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;");
                            $('#preview-iframe').contents().find("." + classname_5).html(namereplace);
                        }
                        if (e.row.data.index_name)
                            $('#preview-iframe').contents().find("." + classname_5).html(e.row.data.index_name + e.row.data.name);
                        else
                            $('#preview-iframe').contents().find("." + classname_5).html(e.row.data.name);
                    }
                }
                else {
                    var classname_6 = e.dataField + "-" + e.row.data.code;
                    var valuex = e.row.data.name;
                    if (valuex == '')
                        $('#preview-iframe').contents().find("." + classname_6).html(e.row.data.name);
                    else
                        $('#preview-iframe').contents().find("." + classname_6).html(e.row.data.name + ': ');
                }
                ////////width
                var classwidth = "childparent-" + e.row.data.code;
                $('#preview-iframe').contents().find("." + classwidth).css('width', Number.parseInt(e.row.data.width) - 1 + '%');
            }
        };
    };
    ModifynewComponent.prototype.onEditorPreparingBSHHDV = function (e) {
        if (e.dataField == "value" && e.parentType == "dataRow") {
            if (e.row.key.code == '8l873098-576d-c322-7843-bdacf97ac100')
                e.editorOptions.disabled = true;
        }
        this.ds_hang_hoa_dich_vu.forEach(function (item) {
            if (item.code != e.row.data.code) {
                var classname_7 = "childparent-" + item.code;
                $('#preview-iframe').contents().find("." + classname_7).css('border-radius', '3px').css('border', 'none');
            }
            else {
                var classnameChild = "childparent-" + e.row.data.code;
                $('#preview-iframe').contents().find("." + classnameChild).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
            }
        });
        var classname = "childparent-" + e.row.data.code;
        var self = this;
        e.editorOptions.onFocusOut = function (args) {
            $('#preview-iframe').contents().find("." + classname).css('border-radius', '3px').css('border', 'none');
            /////
            if (e.parentType == 'dataRow') {
                ////////name
                if (self.isThuXacNhan) {
                    //////////name
                    var classname_8 = "name" + "-" + e.row.data.code;
                    var valuex = e.row.data.name;
                    var italic = "italic-" + e.row.data.code;
                    if (valuex == '') {
                        $('#preview-iframe').contents().find("." + italic).html('');
                        $('#preview-iframe').contents().find("." + italic).css('padding-right', '0px');
                        $('#preview-iframe').contents().find("." + classname_8).html(e.row.data.name);
                        $('#preview-iframe').contents().find("." + classname_8).css('padding-right', '0px');
                    }
                    else {
                        $('#preview-iframe').contents().find("." + classname_8).css('padding-right', '3px');
                        if ($("#preview-iframe").contents().find("." + italic)[0]) {
                            var namereplace = e.row.data.name.replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;");
                            if (e.row.data.name_en) {
                                $('#preview-iframe').contents().find("." + italic).html(e.row.data.name_en);
                                $('#preview-iframe').contents().find("." + italic).css('padding-right', '3px');
                            }
                            else {
                                $('#preview-iframe').contents().find("." + italic).html('');
                                $('#preview-iframe').contents().find("." + italic).css('padding-right', '0px');
                            }
                        }
                        else {
                            var namereplace = e.row.data.name.replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;").replace(" ", "&#8239;");
                            $('#preview-iframe').contents().find("." + classname_8).html(namereplace);
                        }
                        if (e.row.data.index_name)
                            $('#preview-iframe').contents().find("." + classname_8).html(e.row.data.index_name + e.row.data.name);
                        else
                            $('#preview-iframe').contents().find("." + classname_8).html(e.row.data.name);
                    }
                }
                else {
                    var classname_9 = e.dataField + "-" + e.row.data.code;
                    var valuex = e.row.data.name;
                    if (valuex == '')
                        $('#preview-iframe').contents().find("." + classname_9).html(e.row.data.name);
                    else
                        $('#preview-iframe').contents().find("." + classname_9).html(e.row.data.name + ': ');
                }
                ////////width
                var classwidth = "childparent-" + e.row.data.code;
                $('#preview-iframe').contents().find("." + classwidth).css('width', Number.parseInt(e.row.data.width) - 1 + '%');
            }
        };
    };
    ModifynewComponent.prototype.hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };
    ModifynewComponent.prototype.rgb2hex = function (rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    };
    ModifynewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Lấy tham chiếu đến phần tử iframe
        var iframe = this.iframeTempt.nativeElement;
        if (!this.isMauHoanThue)
            this.renderer.setStyle(iframe, 'height', "0px");
        // Thêm sự kiện load cho iframe
        iframe.onload = function () {
            // Tính toán chiều cao mới dựa trên chiều cao của nội dung trong iframe
            var newHeight = iframe.contentWindow.document.body.scrollHeight + 20;
            // Thiết lập chiều cao của iframe
            _this.renderer.setStyle(iframe, 'height', newHeight + "px");
        };
        // this.form.instance.getEditor("template_code").focus();
    };
    ModifynewComponent.prototype.isEdit = function () {
        if (!this.id) {
            return false;
        }
        return true;
    };
    ModifynewComponent.prototype.styleFontInvoice = function () {
        var result = '';
        this.arrColumns.forEach(function (item) {
            var underline = $('#preview-iframe').contents().find('.' + item.value).css("text-decoration");
            var styleUnderLine = "none";
            if (underline)
                styleUnderLine = underline.split(" ");
            var color = $('#preview-iframe').contents().find('.' + item.value).css("color");
            var fontFamily = $('#preview-iframe').contents().find('.' + item.value).css("font-family");
            var fontSize = $('#preview-iframe').contents().find('.' + item.value).css("font-size");
            var fontWeight = $('#preview-iframe').contents().find('.' + item.value).css("font-weight");
            var fontStyle = $('#preview-iframe').contents().find('.' + item.value).css("font-style");
            var wordSpace = $('#preview-iframe').contents().find('.' + item.value).css("word-spacing");
            var display = $('#preview-iframe').contents().find('.' + item.value).css("display");
            var width = $('#preview-iframe').contents().find('.' + item.value).css("width");
            var textAlign = $('#preview-iframe').contents().find('.' + item.value).css("text-align");
            var important = "";
            if (display == "block")
                important = "!important";
            result += '.' + item.value + '{color:' + color + ';font-family:' + fontFamily + ';font-size:' + fontSize + ';font-weight:' + fontWeight + ';font-style:' + fontStyle + ';text-decoration:' + styleUnderLine[0] + ';word-spacing:' + wordSpace + ';display:' + display + ' ' + important + ';width:' + width + ';text-align:' + textAlign + '}';
        });
        return result;
    };
    ModifynewComponent.prototype.onSubmit = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var customerUrl_1, customerSpan_1, watermark_image_top_1, watermark_image_left_1, watermark_image_height_1, watermark_image_width_1, base64data_1, colorFooter, fontFooter, _footer, viewTCTN, data_5, a, b, a, b, a, b, a, b, rawfile;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(this._validGridBenBan() && this._validGridBenMua() && this._validForm() && this._validGridBSHHDV())) return [3 /*break*/, 3];
                                this.viewMauGoc();
                                customerUrl_1 = "http://tracuu.ihoadon.vn";
                                customerSpan_1 = "http://tracuu.ihoadon.vn";
                                watermark_image_top_1 = null;
                                watermark_image_left_1 = null;
                                watermark_image_height_1 = null;
                                watermark_image_width_1 = null;
                                base64data_1 = null;
                                if (!this.isTemVeThe) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.thay_doi_kich_thuoc_logo()];
                            case 1:
                                base64data_1 = _a.sent();
                                _a.label = 2;
                            case 2:
                                this.arrAfterIds.forEach(function (id) {
                                    if (id == 'after-iframe') {
                                        var after = "<html xmlns:inv=\"http://laphoadon.gdt.gov.vn/2014/09/invoicexml/v1\" xmlns:user=\"http://mycompany.com/mynamespace\"\n            xmlns:sign=\"http://www.w3.org/2000/09/xmldsig#\">" + _this.iframe.contentDocument.documentElement.innerHTML + "</html>";
                                        _this.afteriframe = document.getElementById('after-iframe');
                                        _this.afteriframe.contentDocument.open("text/html", "replace");
                                        _this.afteriframe.contentDocument.write(after);
                                        _this.afteriframe.contentDocument.close();
                                    }
                                    else {
                                        var after = "<html xmlns:inv=\"http://laphoadon.gdt.gov.vn/2014/09/invoicexml/v1\" xmlns:user=\"http://mycompany.com/mynamespace\"\n            xmlns:sign=\"http://www.w3.org/2000/09/xmldsig#\">" + _this.iframeAttach.contentDocument.documentElement.innerHTML + "</html>";
                                        _this.afteriframeAttach = document.getElementById('after-iframe-tempt');
                                        _this.afteriframeAttach.contentDocument.open("text/html", "replace");
                                        _this.afteriframeAttach.contentDocument.write(after);
                                        _this.afteriframeAttach.contentDocument.close();
                                    }
                                    /////////#tbDetail collapse
                                    $('#' + id).contents().find("#tbDetail").css('border-collapse', 'separate');
                                    /////////
                                    watermark_image_top_1 = $('#' + id).contents().find(".bg-template-parent").position().top;
                                    watermark_image_left_1 = $('#' + id).contents().find(".bg-template-parent").position().left;
                                    watermark_image_height_1 = $('#' + id).contents().find(".bg-template-parent").height();
                                    watermark_image_width_1 = $('#' + id).contents().find(".bg-template-parent").width();
                                    ///////Ảnh nền
                                    $('#' + id).contents().find(".bg-template-parent").find(".ui-resizable-se").css({ display: 'none' });
                                    $('#' + id).contents().find(".bg-template-parent").css('border-width', '0px');
                                    $('#' + id).contents().find(".bg-template-parent").draggable({
                                        disabled: true
                                    });
                                    ///////Logo left
                                    $('#' + id).contents().find(".logo-company-left").find(".logo-company").css('border-width', '0px');
                                    $('#' + id).contents().find(".logo-company-left").find(".logo-company").find(".ui-resizable-se").css({ display: 'none' });
                                    $('#' + id).contents().find(".logo-company-left").find(".logo-company").find(".delete-logo-template").css({ display: 'none' });
                                    $('#' + id).contents().find(".logo-company-left").find(".logo-company").draggable({
                                        disabled: true
                                    });
                                    ///////// Logo Right
                                    $('#' + id).contents().find(".logo-company-right").find(".logo-company").css('border-width', '0px');
                                    $('#' + id).contents().find(".logo-company-right").find(".logo-company").find(".ui-resizable-se").css({ display: 'none' });
                                    $('#' + id).contents().find(".logo-company-right").find(".logo-company").find(".delete-logo-template").css({ display: 'none' });
                                    $('#' + id).contents().find(".logo-company-right").find(".logo-company").draggable({
                                        disabled: true
                                    });
                                    if (_this.isTemVeThe && base64data_1) {
                                        $('#' + id).contents().find(".logo-company-left").find(".logo-company").css('background-image', 'url(data:image/' + _this.extention + ';base64,' + base64data_1 + ')');
                                        $('#' + id).contents().find(".logo-company-right").find(".logo-company").css('background-image', 'url(data:image/' + _this.extention + ';base64,' + base64data_1 + ')');
                                    }
                                    ///////Chữ ký số người bán
                                    $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").find(".ui-resizable-se").css({ display: 'none' });
                                    $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").css('border-width', '0px');
                                    $('#' + id).contents().find(".sign-block").find(".efy-esign-parent").draggable({
                                        disabled: true
                                    });
                                    ///////Chữ ký số người mua
                                    // $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").find(".ui-resizable-se").css({ display: 'none' });
                                    // $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").css('border-width', '0px');
                                    // $('#' + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").draggable({
                                    //   disabled: true
                                    // });
                                    $('#' + id).contents().find(".efy-esign-none-buyer").css('display', 'none');
                                    $('#' + id).contents().find(".efy-esign-none-tax").css('display', 'none');
                                    //////////// Chuyển đổi
                                    if (_this.frmData.is_digital_invoice)
                                        $('#' + id).contents().find(".ban-sao").html('&nbsp;&nbsp;&nbsp;&nbsp;');
                                    else
                                        $('#' + id).contents().find(".ban-sao").html('(Bản thể hiện của hóa đơn điện tử)');
                                    $('#' + id).contents().find(".nguoichuyendoi").css('display', 'none');
                                    $('#' + id).contents().find(".ngaychuyendoi").css('display', 'none');
                                    $('#' + id).contents().find(".nguoi_chuyen_doi_lbl").css('display', 'none');
                                    $('#' + id).contents().find(".parent-ghi-chu-chuyen-doi").css('display', 'none');
                                    $('#' + id).contents().find(".childparent-ban-the-hien-ve-the").css('display', 'none');
                                    $('#' + id).contents().find(".childparent-nguoi_chuyen_doi").css('display', 'none');
                                    $('#' + id).contents().find(".childparent-ngay_chuyen_doi").css('display', 'none');
                                    /////////// Xóa ảnh nền
                                    $('#' + id).contents().find(".bg-template-parent").find(".bg-template").css('background-image', '').css('display', 'none');
                                    $('#' + id).contents().find(".bg-template-parent").css('display', 'none');
                                    ////////// Xóa chữ nền
                                    $('#' + id).contents().find(".water-text").html('');
                                    /////////// Xóa ảnh khung
                                    $('#' + id).contents().find(".bg-template-default").css('background-image', '').css('display', 'none');
                                    //////// Ẩn footer
                                    $('#' + id).contents().find(".report-footer").css({ display: 'none' });
                                    //////// Ẩn mẫu tempt
                                    $('#' + id).contents().find(".template-table").css({ display: 'none' });
                                    /////// Xóa hàng hóa
                                    $('#' + id).contents().find(".tbody-content-detail").empty();
                                    var name1 = $('#' + id).contents().find('.name-1a783984-576d-c322-7843-bdacf97ac189').css("display");
                                    var name2 = $('#' + id).contents().find('.name-2a783984-576d-c322-7843-bdacf97ac189').css("display");
                                    var name3 = $('#' + id).contents().find('.name-3a783984-576d-c322-7843-bdacf97ac189').css("display");
                                    var name4 = $('#' + id).contents().find('.name-4a783984-576d-c322-7843-bdacf97ac189').css("display");
                                    var name5 = $('#' + id).contents().find('.name-5a783984-576d-c322-7843-bdacf97ac189').css("display");
                                    var name6 = $('#' + id).contents().find('.name-6a783984-576d-c322-7843-bdacf97ac189').css("display");
                                    var name7 = $('#' + id).contents().find('.columnDonViTinh').css("display");
                                    var name8 = $('#' + id).contents().find('.columnSoLuong').css("display");
                                    var name9 = $('#' + id).contents().find('.columnDonGia').css("display");
                                    _this.frmData.fee_money = _this.fee_money;
                                    _this.frmData.fee_name = _this.fee_name;
                                    $('#' + id).contents().find('#tthanghoa').empty();
                                    // /////// Font Hàng hóa
                                    var vienBangHangHoa = '#tbDetail .detail-data td:last-child{border-color:' + _this.currentBold + '}' + '#tbDetail td{border-color:' + _this.currentBold + '}' + '#tbDetail th {border-color:' + _this.currentBold + '}' + '#tbDetail .detail-header th:last-child {border-color:' + _this.currentBold + '}' + '#tbDetail td {border-color:' + _this.currentBold + '}';
                                    if (_this.frmData.json_data.multipages_option == "1")
                                        vienBangHangHoa = '#tbDetail .detail-data td:last-child{border-color:' + _this.currentBold + ';border-top-color:' + '#dfdfdf' + '}' + '#tbDetail th {border-color:' + _this.currentBold + '}' + '#tbDetail .detail-header th:last-child {border-color:' + _this.currentBold + '}' + '#tbDetail td {border-color:' + _this.currentBold + '}' + '#tbDetail .detail-data td {border-width:1px 0px 1px 1px;border-top-color:' + '#dfdfdf' + '}' + '#tbDetail .detail-sumary td {border-width:1px 1px 1px 1px;border-top-color:' + '#dfdfdf' + '}';
                                    if (_this.isPhieuTinhTien)
                                        vienBangHangHoa = "";
                                    var thong_tin_hang_hoa = '.name-1a783984-576d-c322-7843-bdacf97ac189{display:' + name1 + '}.name-2a783984-576d-c322-7843-bdacf97ac189{display:' + name2 + '}.name-3a783984-576d-c322-7843-bdacf97ac189{display:' + name3 + '}.name-4a783984-576d-c322-7843-bdacf97ac189{display:' + name4 + '}.name-5a783984-576d-c322-7843-bdacf97ac189{display:' + name5 + '}.name-6a783984-576d-c322-7843-bdacf97ac189{display:' + name6 + '}';
                                    if (_this.isBienLaiDienTu)
                                        thong_tin_hang_hoa += '.columnDonViTinh{display:' + name7 + '}.columnSoLuong{display:' + name8 + '}.columnDonGia{display:' + name9 + '}.name-1a783984-576d-c322-7843-bdacf97ac189{display:' + name1 + '}';
                                    $('#' + id).contents().find('#tthanghoa').html(thong_tin_hang_hoa + '.middle-box {border-color:' + _this.currentBold + '}' + '.title-middle-box {border-color:' + _this.currentBold + '}' + '.line-table-title {border-color:' + _this.currentBold + '}' + '.border-right {border-color:' + _this.currentBold + '}' + '.line-table {border-color:' + _this.currentBold + '}' + vienBangHangHoa + _this.styleFontInvoice());
                                    // ///////
                                    if ($('#' + id).contents().find(".customerUrl")[0]) {
                                        customerUrl_1 = $('#' + id).contents().find(".customerUrl").attr('href');
                                        if ($('#' + id).contents().find(".customerSpan")[0]) {
                                            customerSpan_1 = $('#' + id).contents().find(".customerSpan").text();
                                        }
                                    }
                                    ///// style cấu trúc html
                                    if (!_this.isTemVeThe)
                                        $('#' + id).contents().find('.detail').css({ display: 'table-row-group' });
                                    $('#' + id).contents().find('.header-block').css({ display: 'table-header-group' });
                                    $('#' + id).contents().find('.report-container').css({ height: 'auto' });
                                    $('#' + id).contents().find('.tdDetail').css('vertical-align', 'inherit');
                                    ///////////////////
                                    $('#' + id).contents().find('body').css('overflow', '').css('transform', '').css('transform-origin', '');
                                    if (_core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(_this.frmData.json_data.logo_name) == "") {
                                        $('#' + id).contents().find(".logo-company-right").find(".logo-template").css('background-image', '');
                                        $('#' + id).contents().find(".logo-company-left").find(".logo-template").css('background-image', '');
                                    }
                                });
                                colorFooter = this.frmData.json_data.color ? this.frmData.json_data.color : 'rgb(0, 0, 0)';
                                fontFooter = this.frmData.json_data.font ? this.frmData.json_data.font : 'Times New Roman';
                                _footer = "<html>\n        <head>\n            <META http-equiv=\"Content-Type\" content=\"text/html; charset=utf-16\">\n            <title>M\u1EABu h\u00F3a \u0111\u01A1n</title>\n            <style>\n                @page {\n                    margin: 0px;\n                }\n        \n                body {\n                    padding: 0;\n                    margin: 0;\n                }\n        \n                body,\n                table {\n                    font-size: 14px;\n                    line-height: 25px;\n                    font-family: " + fontFooter + ";\n                    text-align: center;\n                    color: " + colorFooter + ";\n                }\n        \n                .container {\n                    padding-left: 45px;\n                    width: 825px;\n                    overflow: visible;\n                    position: relative;\n                    background-repeat: no-repeat;\n                    background-position: center;\n                }\n        \n                .font-color-data {\n                    color: #000000 !important;\n                }\n        \n                .font-bold {\n                    font-weight: 800;\n                }\n        \n                .text-left {\n                    text-align: left;\n                }\n        \n                .efy-info {\n                    line-height: 20px;\n                    font-size: 16px;\n                }\n        \n                .center {\n                    text-align: center;\n                }\n        \n                .search-block {\n                    margin-bottom: 35px;\n                }\n        \n                .content div span {\n                    display: inline-block;\n                }\n        \n                .detail {\n                    position: relative;\n                }\n        \n                .note {\n                    margin-top: 14px;\n                    font-size: 16px;\n                }\n        \n                .note-search {\n                    line-height: 15px;\n                    font-size: 15px;\n                    font-style: italic;\n                    text-align: center;\n                    margin-top:5px;\n                }\n        \n                .width-invoice-info {\n                    width: 55px;\n                }\n        \n                .clear {\n                    clear: both;\n                }\n        \n                .value-row-bottom-left {\n                    width: 60px;\n                    text-align: right;\n                }\n        \n                .row-bottom-left {\n                    width: 360px;\n                }\n        \n                .lable-row-bottom-left {\n                    width: 280px;\n                }\n        \n                .half-width-left {\n                    float: left;\n                    width: 50%;\n                }\n        \n                .span-value-number-table {\n                    float: right;\n                }\n        \n                .margin-right-value {\n                    margin-right: 20px;\n                }\n                .matracuu\n                {\n                  font-weight: bold;\n            margin-left:5px;\n                }\n             .matracuuText\n                {\n            margin-left:5px;\n                }\n            </style>\n        </head>\n        \n        <body>\n            <div class=\"container\" style=\"position:relative;\">\n                <div class=\"search-block\">\n            <div class=\"note\"><i><div> Tra c\u1EE9u H\u00F3a \u0111\u01A1n \u0111i\u1EC7n t\u1EED t\u1EA1i: <a target=\"_blank\"\n                                href=\"" + customerUrl_1 + "\"><span class=\"customerSpan\"><em class=\"customerUrl\"></em>" + customerSpan_1 + "</span></a><span class=\"matracuuText\">M\u00E3 tra c\u1EE9u:&nbsp;</span></i><span class=\"matracuu\"></span> \n                        </div></div>\n                    <div class=\"efy-info\">(T\u1ED5 ch\u1EE9c cung c\u1EA5p d\u1ECBch v\u1EE5 H\u0110\u0110T: C\u00F4ng ty CP c\u00F4ng ngh\u1EC7 tin h\u1ECDc EFY Vi\u1EC7t Nam, MST: 0102519041, <a target=\"_blank\" href=\"https://efy.com.vn\">www.efy.com.vn</a>, \u0110T: 19006142)</div>  \n                </div>\n            </div>\n        </body>";
                                if (this.frmData.is_decree_new || this.isPhieuThuHS) {
                                    viewTCTN = '(Tổ chức truyền nhận và cung cấp giải pháp HĐĐT: Công ty CP công nghệ tin học EFY Việt Nam, MST: 0102519041, <a target="_blank" href="https://efy.com.vn">www.efy.com.vn</a>, ĐT: 19006142)';
                                    if (this.frmData && this.frmData.json_data && (this.frmData.json_data.tax_code == '9999999683' || this.frmData.json_data.tax_code == '0102519041' || this.frmData.json_data.tax_code == '9999999379'))
                                        viewTCTN = '(TCTN và TCGP cung cấp HĐĐT: Công ty CP công nghệ tin học EFY Việt Nam, MST: 0102519041, <a target="_blank" href="https://efy.com.vn">www.efy.com.vn</a>, ĐT: 19006142 | 19006139)';
                                    _footer = "<html>\n        <head>\n            <META http-equiv=\"Content-Type\" content=\"text/html; charset=utf-16\">\n            <title>M\u1EABu h\u00F3a \u0111\u01A1n</title>\n            <style>\n                @page {\n                    margin: 0px;\n                }\n        \n                body {\n                    padding: 0;\n                    margin: 0;\n                }\n        \n                body,\n                table {\n                    font-size: 14px;\n                    line-height: 25px;\n                    font-family: " + fontFooter + ";\n                    text-align: center;\n                    color: " + colorFooter + ";\n                }\n        \n                .container {\n                    padding-left: 45px;\n                    width: 825px;\n                    overflow: visible;\n                    position: relative;\n                    background-repeat: no-repeat;\n                    background-position: center;\n                }\n        \n                .font-color-data {\n                    color: #000000 !important;\n                }\n        \n                .font-bold {\n                    font-weight: 800;\n                }\n        \n                .text-left {\n                    text-align: left;\n                }\n        \n                .efy-info {\n                    line-height: 20px;\n                    font-size: 13px;\n                }\n        \n                .center {\n                    text-align: center;\n                }\n        \n                .search-block {\n                    margin-bottom: 35px;\n                }\n        \n                .content div span {\n                    display: inline-block;\n                }\n        \n                .detail {\n                    position: relative;\n                }\n        \n                .note {\n                    margin-top: 14px;\n                    font-size: 13px;\n                }\n        \n                .note-search {\n                    line-height: 15px;\n                    font-size: 15px;\n                    font-style: italic;\n                    text-align: center;\n                    margin-top:5px;\n                }\n        \n                .width-invoice-info {\n                    width: 55px;\n                }\n        \n                .clear {\n                    clear: both;\n                }\n        \n                .value-row-bottom-left {\n                    width: 60px;\n                    text-align: right;\n                }\n        \n                .row-bottom-left {\n                    width: 360px;\n                }\n        \n                .lable-row-bottom-left {\n                    width: 280px;\n                }\n        \n                .half-width-left {\n                    float: left;\n                    width: 50%;\n                }\n        \n                .span-value-number-table {\n                    float: right;\n                }\n        \n                .margin-right-value {\n                    margin-right: 20px;\n                }\n                .matracuu\n                {\n                  font-weight: bold;\n            margin-left:5px;\n                }\n             .matracuuText\n                {\n            margin-left:5px;\n                }\n            </style>\n        </head>\n        \n        <body>\n            <div class=\"container\" style=\"position:relative;\">\n                <div class=\"search-block\">\n            <div class=\"note\"><i><div> Tra c\u1EE9u H\u00F3a \u0111\u01A1n \u0111i\u1EC7n t\u1EED t\u1EA1i: <a target=\"_blank\"\n                                href=\"" + customerUrl_1 + "\"><span class=\"customerSpan\"><em class=\"customerUrl\"></em>" + customerSpan_1 + "</span></a><span class=\"matracuuText\">M\u00E3 tra c\u1EE9u:&nbsp;</span></i><span class=\"matracuu\"></span> \n                        </div></div>\n                    <div class=\"efy-info\">" + viewTCTN + "</div>  \n                </div>\n            </div>\n        </body>";
                                }
                                data_5 = JSON.parse(JSON.stringify(this.frmData));
                                data_5.json_data.watermark_image_width = watermark_image_width_1;
                                data_5.json_data.watermark_image_height = watermark_image_height_1;
                                data_5.json_data.watermark_image_top = watermark_image_top_1;
                                data_5.json_data.watermark_image_left = watermark_image_left_1;
                                if (this.isChungTuTNCN) {
                                    if (this.isThuXacNhan) {
                                        data_5.invoice_series = data_5.invoice_series.toUpperCase();
                                    }
                                    else {
                                        a = data_5.invoice_series.substr(0, 2);
                                        b = data_5.invoice_series.substr(2, 4);
                                        data_5.invoice_series = a + '/' + b + '/E';
                                    }
                                }
                                else if (this.isPhieuThuHS) {
                                    a = data_5.invoice_series.substr(0, 2);
                                    b = data_5.invoice_series.substr(2, 4);
                                    data_5.invoice_series = a + b;
                                }
                                else if (this.isBienLaiDienTu) {
                                    a = data_5.invoice_series.substr(0, 2);
                                    b = data_5.invoice_series.substr(2, 2);
                                    data_5.invoice_series = a + '-' + b + 'E';
                                    data_5.template_code = this.getKyTuMauSo() + "0-" + data_5.template_code;
                                }
                                else {
                                    if (this.frmData.is_decree_new) {
                                        data_5.invoice_series = data_5.invoice_series.toUpperCase();
                                    }
                                    else {
                                        a = data_5.invoice_series.substr(0, 2);
                                        b = data_5.invoice_series.substr(2, 2);
                                        data_5.invoice_series = a + '/' + b + 'E';
                                        data_5.template_code = this.invoice_type + "0/" + data_5.template_code;
                                    }
                                }
                                data_5.number_of_row = this.rowData;
                                ///////// Thêm thông tin người bán vào chuỗi json
                                data_5.json_data.fields = [];
                                this.dataSource.forEach(function (item) {
                                    data_5.json_data.fields.push(item);
                                    switch (item.code) {
                                        case "8e693984-576d-c322-7843-bdacf97ac189":
                                            data_5.json_data.name = item.value;
                                            break;
                                        case "7e693984-576d-c322-7843-bdacf97ac189":
                                            data_5.json_data.business_address = item.value;
                                            break;
                                        case "6e693984-576d-c322-7843-bdacf97ac189":
                                            data_5.json_data.tax_code = item.value;
                                            break;
                                        case "9f783984-576d-c322-7843-bdacf97ac189":
                                            data_5.json_data.email = item.value;
                                            break;
                                        case "8f783984-576d-c322-7843-bdacf97ac189":
                                            data_5.json_data.phone = item.value;
                                            break;
                                        case "7f783984-576d-c322-7843-bdacf97ac189":
                                            data_5.json_data.website = item.value;
                                            break;
                                        case "2db1350b-570c-0fa1-08fa-10e67f64c8c7":
                                            data_5.json_data.fax = item.value;
                                            break;
                                        case "1db1350b-570c-0fa1-08fa-10e67f64c8c7":
                                            data_5.json_data.bank_name = item.value;
                                            break;
                                    }
                                });
                                this.dataSourceBenMua.forEach(function (item) {
                                    data_5.json_data.fields.push(item);
                                });
                                if (!this.isChungTuTNCN) {
                                    this.dataSourceHangHoa.forEach(function (item) {
                                        data_5.json_data.fields.push(item);
                                    });
                                }
                                else {
                                    if (!this.isThuXacNhan) {
                                        this.dataSourceTNCN.forEach(function (item) {
                                            data_5.json_data.fields.push(item);
                                        }); /*  */
                                    }
                                    else {
                                        this.dataSourceUserTXN.forEach(function (item) {
                                            data_5.json_data.fields.push(item);
                                        }); /*  */
                                        // this.dataSourceTXNOther.forEach(item => {
                                        //   data.json_data.fields.push(item);
                                        // });/*  */
                                        this.dataSourceTXN.forEach(function (item) {
                                            data_5.json_data.fields.push(item);
                                        }); /*  */
                                    }
                                }
                                this.ds_hang_hoa_dich_vu.forEach(function (item) {
                                    data_5.json_data.fields.push(item);
                                });
                                this.dataPreview = "<html xmlns:inv=\"http://laphoadon.gdt.gov.vn/2014/09/invoicexml/v1\" xmlns:user=\"http://mycompany.com/mynamespace\"\n                            xmlns:sign=\"http://www.w3.org/2000/09/xmldsig#\">" + this.afteriframe.contentDocument.documentElement.innerHTML;
                                if (this.isMauHoanThue)
                                    this.dataPreviewAttach = "<html xmlns:inv=\"http://laphoadon.gdt.gov.vn/2014/09/invoicexml/v1\" xmlns:user=\"http://mycompany.com/mynamespace\"\n                                    xmlns:sign=\"http://www.w3.org/2000/09/xmldsig#\">" + this.afteriframeAttach.contentDocument.documentElement.innerHTML;
                                data_5.json_data.watermark_text_transparency = $("#slider").slider("values", 0);
                                data_5.json_data.watermark_image_default_name = this.watermark_image_default_name;
                                data_5.is_html_template = true;
                                rawfile = {
                                    watermark_image_default: this.watermark_image_default,
                                    watermark_image: this.watermark_image,
                                    html: this.dataPreview,
                                    footer: _footer
                                };
                                if (this.isMauHoanThue)
                                    rawfile["html_attach"] = this.dataPreviewAttach;
                                //////// Sửa mẫu
                                // let watermark_image_default = ``;
                                // let watermark_image = ``;
                                // let html = ``;
                                // let footer = ``;
                                // let suafile = 
                                // {
                                //   watermark_image_default: watermark_image_default,
                                //   watermark_image: watermark_image,
                                //   html: html,
                                //   footer: footer
                                // }
                                // let _data = Base64.encode(JSON.stringify(suafile));
                                ////////
                                data_5.raw_file = js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].encode(JSON.stringify(rawfile));
                                if (this.isChungTuTNCN) {
                                    console.log(data_5);
                                    if (this.isEdit()) {
                                        this.editVoucher(data_5);
                                    }
                                    else {
                                        this.addVoucher(data_5);
                                    }
                                }
                                else {
                                    if (this.frmData.is_decree_new || this.isPhieuThuHS || this.isBienLaiDienTu) {
                                        if (this.isEdit()) {
                                            this.editTT78(data_5);
                                        }
                                        else {
                                            this.addTT78(data_5);
                                        }
                                    }
                                    else {
                                        if (this.isEdit()) {
                                            this.edit(data_5);
                                        }
                                        else {
                                            this.add(data_5);
                                        }
                                    }
                                }
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, 300);
                return [2 /*return*/];
            });
        });
    };
    ModifynewComponent.prototype._validGridBenBan = function () {
        var _this = this;
        var _isvalid = true;
        this.dataSource.forEach(function (element, index) {
            if (element.type == "2") {
                // if (element.name == "") {
                //   Library.notify("Thông tin bên bán không được để trống", "error");
                //   _isvalid = false;
                //   return false;
                // }
                if (element.value == "" && !_this.isThuXacNhan) {
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify("Thông tin bên bán không được để trống", "error");
                    _isvalid = false;
                    return false;
                }
            }
            if (element.type == "1" && !_this.isThuXacNhan) {
                if (element.name == "") {
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify("Thông tin bên bán không được để trống", "error");
                    _isvalid = false;
                    return false;
                }
            }
        });
        return _isvalid;
    };
    ModifynewComponent.prototype._validGridBenMua = function () {
        var _isvalid = true;
        this.dataSourceBenMua.forEach(function (element, index) {
            if (element.type == "4") {
                if (element.name == "") {
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify("Thông tin bên mua không được để trống", "error");
                    _isvalid = false;
                    return false;
                }
            }
            if (element.type == "3") {
                if (element.name == "") {
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify("Thông tin bên mua không được để trống", "error");
                    _isvalid = false;
                    return false;
                }
            }
        });
        return _isvalid;
    };
    ModifynewComponent.prototype._validGridBSHHDV = function () {
        var _isvalid = true;
        this.ds_hang_hoa_dich_vu.forEach(function (element, index) {
            if (element.type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].truong_mo_rong.hang_hoa_hoa_don) {
                if (element.name == "") {
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify("Thông tin hàng hóa, dịch vụ không được để trống", "error");
                    _isvalid = false;
                    return false;
                }
            }
            if (element.type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].truong_trong_csdl.hang_hoa_hoa_don) {
                if (element.name == "") {
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify("Thông tin hàng hóa, dịch vụ không được để trống", "error");
                    _isvalid = false;
                    return false;
                }
            }
        });
        return _isvalid;
    };
    ModifynewComponent.prototype._validForm = function () {
        var _isvalid = true;
        var kyboi = "";
        var thongtin = this.dataSource.filter(function (p) { return p.code == "8e693984-576d-c322-7843-bdacf97ac189"; })[0];
        if (thongtin)
            kyboi = thongtin.value;
        var ngayky = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format('DD/MM/YYYY  HH:mm:ss');
        // Ký bởi người bán
        if ($("#preview-iframe").contents().find(".seler-sign-name")[0])
            $("#preview-iframe").contents().find(".seler-sign-name").html(kyboi);
        // Ngày ký người bán
        if ($("#preview-iframe").contents().find(".seler-sign-date")[0])
            $("#preview-iframe").contents().find(".seler-sign-date").html(ngayky);
        var heightSeller = $("#preview-iframe").contents().find(".sign-block").find(".efy-esign-parent").innerHeight();
        var heightCKS = $("#preview-iframe").contents().find(".sign-block").find(".efy-esign-parent").find(".efy-esign-none").innerHeight();
        if (heightCKS > heightSeller) {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify("Diện tích chữ ký số đang vượt quá giới hạn được thiết lập", "error");
            _isvalid = false;
            return false;
        }
        if (this.isBienLaiDienTu && this.frmData.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.BienLaiInSanMenhGia) {
            if (_core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._getValueToString(this.fee_name) == "") {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify("Tên loại phí, lệ phí không được để trống", "error");
                _isvalid = false;
                return false;
            }
            if (this.fee_money == null) {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify("Số tiền không được để trống", "error");
                _isvalid = false;
                return false;
            }
        }
        return _isvalid;
    };
    ModifynewComponent.prototype.add = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
        data.invoice_type = this.templateService.invoice_type;
        //   data.raw_file = this.templateService.raw_file;
        this.templateService.add(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Thêm mới thành công', 'success');
                _this.id = rs.data.template.id;
                _this.invoice_type = rs.data.template.invoice_type;
                _this.frmData.invoice_type = rs.data.template.invoice_type;
                //    this.router.navigate(['/system/template']);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
        });
    };
    ModifynewComponent.prototype.addTT78 = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
        data.invoice_type = this.templateService.invoice_type;
        //   data.raw_file = this.templateService.raw_file;
        this.templateService.addTempt(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Thêm mới thành công', 'success');
                _this.id = rs.data.template.id;
                _this.invoice_type = rs.data.template.invoice_type;
                _this.frmData.invoice_type = rs.data.template.invoice_type;
                //    this.router.navigate(['/system/template']);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
        });
    };
    ModifynewComponent.prototype.addVoucher = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
        data.invoice_type = this.templateService.invoice_type;
        this.templateService.addVoucher(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Thêm mới thành công', 'success');
                _this.id = rs.data.template.id;
                _this.invoice_type = rs.data.template.invoice_type;
                _this.frmData.invoice_type = rs.data.template.invoice_type;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
        });
    };
    ModifynewComponent.prototype.edit = function (data) {
        _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
        this.templateService.modify(this.id, data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Sửa mẫu thành công', 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
        });
    };
    ModifynewComponent.prototype.editTT78 = function (data) {
        _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
        this.templateService.modifyNew(this.id, data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Sửa mẫu thành công', 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
        });
    };
    ModifynewComponent.prototype.editVoucher = function (data) {
        _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
        this.templateService.modifyVoucher(this.id, data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Sửa mẫu thành công', 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
        });
    };
    ModifynewComponent.prototype.add_row_data_ben_ban = function () {
        var _guidID = guid_typescript__WEBPACK_IMPORTED_MODULE_5__["Guid"].create();
        return {
            code: _guidID.toString(),
            is_show: true,
            name: '',
            value: '',
            width: '100',
            type: '2'
        };
    };
    ModifynewComponent.prototype.add_row_data_ben_mua = function () {
        var _guidID = guid_typescript__WEBPACK_IMPORTED_MODULE_5__["Guid"].create();
        return {
            code: _guidID.toString(),
            is_show: true,
            name: '',
            data_type: 'chu',
            width: '100',
            type: '4',
            value: '',
        };
    };
    ModifynewComponent.prototype.add_row_data_hang_hoa = function () {
        var _guidID = guid_typescript__WEBPACK_IMPORTED_MODULE_5__["Guid"].create();
        return {
            code: _guidID.toString(),
            is_show: true,
            name: '',
            data_type: 'chu',
            width: '100',
            type: _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].truong_mo_rong.hang_hoa_hoa_don,
            value: '',
        };
    };
    ///////// xem hóa đơn chuyển đổi (E-Invoice viewer)
    ModifynewComponent.prototype.checkboxChange = function (e) {
        if (e.value) {
            $('#preview-iframe').contents().find(".ban-sao").html('(Hóa đơn chuyển đổi từ hóa đơn điện tử)');
            $('#preview-iframe').contents().find(".ban-sao-in-duoi").html('(E-Invoice convert)');
            $('#preview-iframe').contents().find(".nguoichuyendoi").css('display', 'block');
            $('#preview-iframe').contents().find(".ngaychuyendoi").css('display', 'block');
            $('#preview-iframe').contents().find(".ngaychuyendoi").css('display', 'block');
            $('#preview-iframe').contents().find(".nguoilapky").css('display', 'none');
        }
        else {
            if (this.frmData.is_digital_invoice) {
                $('#preview-iframe').contents().find(".ban-sao").html('&nbsp;&nbsp;&nbsp;&nbsp;');
                $('#preview-iframe').contents().find(".ban-sao-in-duoi").html('&nbsp;&nbsp;&nbsp;&nbsp;');
            }
            else {
                $('#preview-iframe').contents().find(".ban-sao").html('(Bản thể hiện của hóa đơn điện tử)');
                $('#preview-iframe').contents().find(".ban-sao-in-duoi").html('(E-Invoice viewer)');
            }
            $('#preview-iframe').contents().find(".nguoichuyendoi").css('display', 'none');
            $('#preview-iframe').contents().find(".ngaychuyendoi").css('display', 'none');
            $('#preview-iframe').contents().find(".nguoilapky").css('display', 'block');
        }
    };
    ModifynewComponent.prototype.Chon = function (e) {
        $(".gallery").css('display', 'none');
        $(".inforCommon").css('display', 'block');
    };
    ModifynewComponent.prototype.QuayLai = function (e) {
        $(".gallery").css('display', 'none');
        $(".inforCommon").css('display', 'block');
    };
    ModifynewComponent.prototype.backfunc = function (e) {
        this.router.navigate(['/system/template']);
    };
    ModifynewComponent.prototype.chosseTemplate = function (item) {
        var _this = this;
        if (item.jpg_file) {
            var img = new Image();
            this.getBase64ImageFromURL(item.jpg_file, img).subscribe(function (base64data) {
                _this.arrIds.forEach(function (id) {
                    $("#" + id).contents().find(".bg-template-default").css('background-image', 'url(data:image/' + "jpg" + ';base64,' + base64data + ')').css('display', 'block');
                });
                $(".inputSearch").val(item.display_name);
                $(".gallery").css('display', 'none');
                $(".inforCommon").css('display', 'block');
                _this.watermark_image_default_name = item.display_name;
                _this.watermark_image_default = base64data;
            });
        }
    };
    ModifynewComponent.prototype.getBase64ImageFromURL = function (url, img) {
        var _this = this;
        var is_tem_ve = this.isTemVeThe;
        return rxjs__WEBPACK_IMPORTED_MODULE_11__["Observable"].create(function (observer) {
            // create an image object
            img.crossOrigin = 'Anonymous';
            img.src = url;
            if (!img.complete) {
                // This will call another method that will create image from url
                img.onload = function () {
                    observer.next(_this.getBase64Image(img, is_tem_ve));
                    observer.complete();
                };
                img.onerror = function (err) {
                    observer.error(err);
                };
            }
            else {
                observer.next(_this.getBase64Image(img, is_tem_ve));
                observer.complete();
            }
        });
    };
    ModifynewComponent.prototype.getBase64Image = function (img, is_tem_ve) {
        // We create a HTML canvas object that will create a 2d image
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        // This will draw image    
        if (is_tem_ve)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        else
            ctx.drawImage(img, 0, 0);
        // Convert the drawn image to Data URL
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    ModifynewComponent.prototype.createImageFromBlob = function (image) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            return reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    ModifynewComponent.prototype.getImageFromService = function (imageUrl) {
        var _this = this;
        this.getImage(imageUrl).subscribe(function (data) {
            return _this.createImageFromBlob(data);
        }, function (error) {
        });
    };
    ModifynewComponent.prototype.getImage = function (imageUrl) {
        return this.http.get(imageUrl, { responseType: 'blob' });
    };
    ModifynewComponent.prototype.setStatusDataOnCellPrepared = function (e, message) {
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
    ModifynewComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            if (e.data.type == "2") {
                switch (e.column.dataField) {
                    // case "name":
                    //   if (e.data.name == "") this.setStatusDataOnCellPrepared(e, "Thông tin không được để trống");
                    //   break;
                    case "value":
                        if (e.data.value == "")
                            this.setStatusDataOnCellPrepared(e, "Thông tin không được để trống");
                        break;
                    default:
                        break;
                }
            }
            if (e.data.type == "1") {
                switch (e.column.dataField) {
                    case "name":
                        if (e.data.name == "")
                            this.setStatusDataOnCellPrepared(e, "Thông tin không được để trống");
                        break;
                    default:
                        break;
                }
            }
        }
    };
    ModifynewComponent.prototype.onCellPreparedBenMua = function (e) {
        if (e.rowType == "data") {
            if (e.data.type == "4") {
                switch (e.column.dataField) {
                    case "name":
                        if (e.data.name == "")
                            this.setStatusDataOnCellPrepared(e, "Thông tin không được để trống");
                        break;
                    default:
                        break;
                }
            }
            if (e.data.type == "3") {
                switch (e.column.dataField) {
                    case "name":
                        if (e.data.name == "")
                            this.setStatusDataOnCellPrepared(e, "Thông tin không được để trống");
                        break;
                    default:
                        break;
                }
            }
        }
    };
    ModifynewComponent.prototype.onCellPreparedBSHHDV = function (e) {
        if (e.rowType == "data") {
            if (e.data.type == "9") {
                switch (e.column.dataField) {
                    case "name":
                        if (e.data.name == "")
                            this.setStatusDataOnCellPrepared(e, "Thông tin không được để trống");
                        break;
                    default:
                        break;
                }
            }
            if (e.data.type == "6") {
                switch (e.column.dataField) {
                    case "name":
                        if (e.data.name == "")
                            this.setStatusDataOnCellPrepared(e, "Thông tin không được để trống");
                        break;
                    default:
                        break;
                }
            }
        }
    };
    ModifynewComponent.prototype.numberBox_valueChanged = function (e) {
        var _this = this;
        this.arrIds.forEach(function (id) {
            _this.trRow = "";
            _this.rowData = Number.parseInt(e.value);
            var heightSeller = $("#" + id).contents().find(".sign-block").find(".efy-esign-parent").height();
            $("#" + id).contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").css('height', heightSeller);
            $("#" + id).contents().find(".tbody-content-detail").empty();
            _this.createRowData(e.value, id);
            $("#" + id).contents().find(".tbody-content-detail").append($(_this.trRow));
        });
    };
    ModifynewComponent.prototype.enableDisableBold = function () {
        var _this = this;
        this.toggleBold = !this.toggleBold;
        if (this.toggleBold) {
            this.textarea["font-weight"] = "bold";
            if (this.arrFontChange.length > 0) {
                var _loop_4 = function (i) {
                    this_2.arrIds.forEach(function (id) {
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('font-weight', 'bold');
                    });
                };
                var this_2 = this;
                for (var i = 0; i < this.arrFontChange.length; i++) {
                    _loop_4(i);
                }
            }
        }
        else {
            this.textarea["font-weight"] = "normal";
            if (this.arrFontChange.length > 0) {
                var _loop_5 = function (i) {
                    this_3.arrIds.forEach(function (id) {
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('font-weight', 'normal');
                    });
                };
                var this_3 = this;
                for (var i = 0; i < this.arrFontChange.length; i++) {
                    _loop_5(i);
                }
            }
        }
    };
    ModifynewComponent.prototype.enableDisableItalic = function () {
        var _this = this;
        this.toggleItalic = !this.toggleItalic;
        if (this.toggleItalic) {
            this.textarea["font-style"] = "italic";
            if (this.arrFontChange.length > 0) {
                var _loop_6 = function (i) {
                    this_4.arrIds.forEach(function (id) {
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('font-style', 'italic');
                    });
                };
                var this_4 = this;
                for (var i = 0; i < this.arrFontChange.length; i++) {
                    _loop_6(i);
                }
            }
        }
        else {
            this.textarea["font-style"] = "normal";
            if (this.arrFontChange.length > 0) {
                var _loop_7 = function (i) {
                    this_5.arrIds.forEach(function (id) {
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('font-style', 'normal');
                    });
                };
                var this_5 = this;
                for (var i = 0; i < this.arrFontChange.length; i++) {
                    _loop_7(i);
                }
            }
        }
    };
    ModifynewComponent.prototype.enableDisableUnderline = function () {
        var _this = this;
        this.toggleUnderline = !this.toggleUnderline;
        if (this.toggleUnderline) {
            this.textarea["text-decoration"] = "underline";
            if (this.arrFontChange.length > 0) {
                var _loop_8 = function (i) {
                    this_6.arrIds.forEach(function (id) {
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('text-decoration', 'underline');
                    });
                };
                var this_6 = this;
                for (var i = 0; i < this.arrFontChange.length; i++) {
                    _loop_8(i);
                }
            }
        }
        else {
            this.textarea["text-decoration"] = "none";
            if (this.arrFontChange.length > 0) {
                var _loop_9 = function (i) {
                    this_7.arrIds.forEach(function (id) {
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('text-decoration', 'none');
                    });
                };
                var this_7 = this;
                for (var i = 0; i < this.arrFontChange.length; i++) {
                    _loop_9(i);
                }
            }
        }
    };
    ModifynewComponent.prototype.enableDisableAlignLeft = function () {
        this.toggleAlignLeft = !this.toggleAlignLeft;
        if (!this.toggleAlignLeft && !this.toggleAlignCenter && !this.toggleAlignRight)
            this.toggleAlignLeft = true;
        if (this.toggleAlignLeft) {
            this.toggleAlignRight = false;
            this.toggleAlignCenter = false;
        }
        this.textarea["text-align"] = "left";
        this.SetFontVerticalAlign('left');
    };
    ModifynewComponent.prototype.enableDisableAlignCenter = function () {
        this.toggleAlignCenter = !this.toggleAlignCenter;
        if (!this.toggleAlignLeft && !this.toggleAlignCenter && !this.toggleAlignRight)
            this.toggleAlignLeft = true;
        if (this.toggleAlignCenter) {
            this.toggleAlignLeft = false;
            this.toggleAlignRight = false;
            this.textarea["text-align"] = "center";
            this.SetFontVerticalAlign('center');
        }
        else {
            this.textarea["text-align"] = "left";
            this.SetFontVerticalAlign('left');
        }
    };
    ModifynewComponent.prototype.enableDisableAlignRight = function () {
        this.toggleAlignRight = !this.toggleAlignRight;
        if (!this.toggleAlignLeft && !this.toggleAlignCenter && !this.toggleAlignRight)
            this.toggleAlignLeft = true;
        if (this.toggleAlignRight) {
            this.toggleAlignLeft = false;
            this.toggleAlignCenter = false;
            this.textarea["text-align"] = "right";
            this.SetFontVerticalAlign('right');
        }
        else {
            this.textarea["text-align"] = "left";
            this.SetFontVerticalAlign('left');
        }
    };
    ModifynewComponent.prototype.Width_ValueChanged = function (e) {
        var _this = this;
        this.arrIds.forEach(function (id) {
            $("#" + id).contents().find("." + _this.classFontChange).css('width', e.value + "%");
        });
    };
    ModifynewComponent.prototype.MinWidthHH_ValueChanged = function (e) {
        var _this = this;
        this.arrIds.forEach(function (id) {
            $("#" + id).contents().find("." + _this.classFontChange).css('min-width', e.value + "px");
        });
    };
    ModifynewComponent.prototype.FontSelect_ValueChanged = function (e) {
        var _this = this;
        this.textarea["font-family"] = e.value;
        if (this.arrFontChange.length > 0) {
            if (e.previousValue) {
                var _loop_10 = function (i) {
                    this_8.arrIds.forEach(function (id) {
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('font-family', e.value);
                    });
                };
                var this_8 = this;
                for (var i = 0; i < this.arrFontChange.length; i++) {
                    _loop_10(i);
                }
            }
        }
    };
    ModifynewComponent.prototype.FontSize_ValueChanged = function (e) {
        var _this = this;
        this.textarea["font-size"] = e.value + "px";
        if (this.arrFontChange.length > 0) {
            if (e.previousValue) {
                var _loop_11 = function (i) {
                    this_9.arrIds.forEach(function (id) {
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('font-size', e.value + "px");
                    });
                };
                var this_9 = this;
                for (var i = 0; i < this.arrFontChange.length; i++) {
                    _loop_11(i);
                }
            }
        }
    };
    ModifynewComponent.prototype.colorBoxText_valueChanged = function (e) {
        var _this = this;
        this.textarea["color"] = e.value;
        if (this.arrFontChange.length > 0) {
            if (e.previousValue) {
                var _loop_12 = function (i) {
                    this_10.arrIds.forEach(function (id) {
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('color', e.value);
                    });
                };
                var this_10 = this;
                for (var i = 0; i < this.arrFontChange.length; i++) {
                    _loop_12(i);
                }
            }
        }
    };
    ModifynewComponent.prototype.SpaceChar_ValueChanged = function (e) {
        var _this = this;
        this.textarea["word-spacing"] = Number.parseInt(e.value) + "px";
        if (this.arrFontChange.length > 0) {
            if (e.previousValue) {
                var _loop_13 = function (i) {
                    this_11.arrIds.forEach(function (id) {
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('word-spacing', Number.parseInt(e.value) + "px");
                    });
                };
                var this_11 = this;
                for (var i = 0; i < this.arrFontChange.length; i++) {
                    _loop_13(i);
                }
            }
        }
    };
    ModifynewComponent.prototype.paddingPostion_ValueChanged = function (e) {
        this.textarea["padding-left"] = Number.parseInt(e.value) + "px";
        if (this.arrFontChange.length > 0) {
            if (e.previousValue) {
                for (var i = 0; i < this.arrFontChange.length; i++) {
                    $("#preview-iframe").contents().find("." + this.arrFontChange[i]).css('padding-left', Number.parseInt(e.value) + "px");
                }
            }
        }
    };
    ModifynewComponent.prototype.viewMauDraff = function () {
        var kyboi = "";
        var thongtin = this.dataSource.filter(function (p) { return p.code == "8e693984-576d-c322-7843-bdacf97ac189"; })[0];
        if (thongtin)
            kyboi = thongtin.value;
        var ngayky = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format('DD/MM/YYYY  HH:mm:ss');
        var obj = new Object;
        obj["hotennguoimuahang"] = "Nguyễn Văn A";
        obj["tendonvi"] = "Công ty cổ phần Công nghệ tin học Efy Việt Nam";
        obj["masothue"] = "0102519041";
        obj["diachi"] = "Tầng 9 tòa nhà Sannam, phường Dịch Vọng Hậu,thành phố Hà Nội";
        obj["hinhthucthanhtoan"] = "TM/CK";
        obj["sotk"] = "08611 0001 6888 - Ngân hàng TMCP Quân đội";
        obj["tygia"] = "23000 VNĐ / USD";
        obj["ghichu"] = "Chuyển đổi hóa đơn";
        obj["dulieudong"] = "Efy Việt Nam";
        obj["TIEN_HH_DV_GTGT_KHONG_THUE"] = "1.000.000";
        obj["TIEN_HH_DV_GTGT0"] = "1.000.000";
        obj["TIEN_HH_DV_GTGT5"] = "1.000.000";
        obj["TIEN_HH_DV_GTGT10"] = "1.000.000";
        obj["TONG_TIEN_HH_DV_GTGT"] = "1.000.000";
        obj["TIEN_THUE_GTGT"] = "1.000.000";
        obj["TIEN_THUE_GTGT0"] = "1.000.000";
        obj["TIEN_THUE_GTGT5"] = "1.000.000";
        obj["TIEN_THUE_GTGT10"] = "1.000.000";
        obj["TONG_TIEN_THUE_GTGT"] = "1.000.000";
        obj["TIEN_THANH_TOAN_KHONG_THUE"] = "1.000.000";
        obj["TIEN_THANH_TOAN_GTGT0"] = "1.000.000";
        obj["TIEN_THANH_TOAN_GTGT5"] = "1.000.000";
        obj["TIEN_THANH_TOAN_GTGT10"] = "1.000.000";
        obj["TONG_TIEN_THANH_TOAN"] = "1.000.000";
        obj["total_amount_product_without_vat"] = "1.000.000";
        obj["vat_percentage"] = "10%";
        obj["total_amount_vat"] = "1.000.000";
        obj["total_payment"] = "1.000.000";
        obj["total_payment_word"] = "Một triệu đồng chẵn";
        obj["value_1h883984_576d_c322_7843_bdacf97ac189"] = "Một triệu đồng chẵn";
        obj["other_tax"] = "1.000.000";
        obj["other_charge"] = "1.000.000";
        obj["isViewMauGoc"] = false;
        obj["kyboi"] = kyboi;
        obj["ngayky"] = ngayky;
        obj["NguoiMuaKy"] = "Efy Việt Nam";
        obj["tenCQT"] = "TỔNG CỤC THUẾ";
        obj["TIEN_HH_DV_GTGT8"] = "1.000.000";
        obj["TIEN_THUE_GTGT8"] = "1.000.000";
        obj["TIEN_THANH_TOAN_GTGT8"] = "1.000.000";
        /* Thuế TNCN */
        obj["nnt_ho_va_ten"] = "Nguyễn Văn A";
        obj["nnt_mst_1"] = "9";
        obj["nnt_mst_2"] = "9";
        obj["nnt_mst_3"] = "9";
        obj["nnt_mst_4"] = "9";
        obj["nnt_mst_5"] = "9";
        obj["nnt_mst_6"] = "9";
        obj["nnt_mst_7"] = "9";
        obj["nnt_mst_8"] = "9";
        obj["nnt_mst_9"] = "9";
        obj["nnt_mst_10"] = "9";
        obj["nnt_mst_11"] = "9";
        obj["nnt_mst_12"] = "9";
        obj["nnt_mst_13"] = "9";
        obj["nnt_quoc_tich"] = "Việt Nam";
        obj["nnt_dia_chi_lien_he"] = "Duy Tân - Cầu Giấy - Hà Nội";
        obj["nnt_cmnd"] = "999999999";
        obj["nnt_noi_cap"] = "Hà Nội";
        obj["nnt_ngay_cap"] = "20/02/2002";
        obj["tncn_khoan_thu_nhap"] = "Khoản thu nhập";
        obj["tncn_bao_hiem"] = "Bảo hiểm bắt buộc";
        obj["tncn_thoi_diem_tra_thang"] = "02";
        obj["tncn_thoi_diem_tra_nam"] = "2020";
        obj["tncn_thu_nhap_chiu_thue"] = "1.000.000";
        obj["tncn_thu_nhap_tinh_thue"] = "1.000.000";
        obj["tncn_thu_nhap_da_khau_tru"] = "1.000.000";
        obj["tncn_thu_nhap_da_tra"] = "1.000.000";
        obj["tncn_thu_nhap_duoc_nhan"] = "1.000.000";
        /* Thôn tin vé máy bay */
        obj["fare_refund_total"] = "1.000.000";
        obj["vat_amount_refund_total"] = "1.000.000";
        obj["other_tax_refund_total"] = "1.000.000";
        obj["other_charge_refund_total"] = "1.000.000";
        obj["total_payment_refund_total"] = "1.000.000";
        obj["fare_refund_service"] = "1.000.000";
        obj["vat_rate_refund_service"] = "10%";
        obj["vat_amount_refund_service"] = "1.000.000";
        obj["other_tax_refund_service"] = "1.000.000";
        obj["other_charge_refund_service"] = "1.000.000";
        obj["total_payment_refund_service"] = "1.000.000";
        obj["ho_ten_nguoi_nop_tien"] = "Nguyễn Văn A";
        obj["lop"] = "2A";
        obj["loai_tien"] = "VND";
        obj["tien_bang_so"] = "1.000.000";
        obj["tien_bang_chu"] = "Một triệu đồng chẵn.";
        obj["ngay_hoa_don"] = "02";
        obj["thang_hoa_don"] = "02";
        obj["nam_hoa_don"] = "2020";
        obj["dien_thoai_ben_mua"] = "0390098321";
        obj["noi_dung_thu"] = "Hóa đơn điện tử";
        if (this.isTemVeThe)
            obj["noi_dung_thu"] = obj["noi_dung_thu"].toUpperCase();
        obj["ma_tra_cuu"] = "YUOU9XPORD";
        this.FillandRemoveDataToTemplate(obj);
        var self = this;
        this.CreateAgainDrapAnđrop();
        $("#preview-iframe").each(function () {
            var iframe = $(this);
            self.isBegin = false;
            self.isBenBan = false;
            self.isBenMua = false;
            self.isMauDraff = true;
            iframe.contents().find('span').mousedown(function (event) {
                if (self.isMauDraff) {
                    if (event.which == 3) {
                        if (self.arrFontChange && self.arrFontChange.length > 0) {
                        }
                        else {
                            self.arrFontChange.push(event.target.className);
                            $('#preview-iframe').contents().find("." + self.arrFontChange[0]).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
                        }
                        iframe.trigger("click");
                    }
                    else if (event.which == 1 && event.ctrlKey) {
                        var filter = void 0;
                        if (self.arrFontChange)
                            filter = self.arrFontChange.filter(function (p) { return p == event.target.className; });
                        if (filter.length > 0) {
                            var index = self.arrFontChange.indexOf(filter[0]);
                            if (index != -1) {
                                $('#preview-iframe').contents().find("." + event.target.className).css('border-radius', '3px').css('border', 'none');
                                self.arrFontChange.splice(index, 1);
                            }
                        }
                        else {
                            self.arrFontChange.push(event.target.className);
                            $('#preview-iframe').contents().find("." + event.target.className).css('border-radius', '3px').css('border', '1px solid rgb(28 149 230)');
                        }
                    }
                }
            });
            self.ChangeFontTemptPlate(iframe, self);
        });
    };
    ModifynewComponent.prototype.viewMauGoc = function () {
        var heightSeller = $("#preview-iframe").contents().find(".sign-block").find(".efy-esign-parent").height();
        $("#preview-iframe").contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").css('height', heightSeller);
        var obj = new Object;
        obj["hotennguoimuahang"] = "";
        obj["tendonvi"] = "";
        obj["masothue"] = "";
        obj["diachi"] = "";
        obj["hinhthucthanhtoan"] = "";
        obj["sotk"] = "";
        obj["tygia"] = "";
        obj["ghichu"] = "";
        obj["dulieudong"] = "";
        obj["TIEN_HH_DV_GTGT_KHONG_THUE"] = "";
        obj["TIEN_HH_DV_GTGT0"] = "";
        obj["TIEN_HH_DV_GTGT5"] = "";
        obj["TIEN_HH_DV_GTGT10"] = "";
        obj["TONG_TIEN_HH_DV_GTGT"] = "";
        obj["TIEN_THUE_GTGT"] = "";
        obj["TIEN_THUE_GTGT0"] = "";
        obj["TIEN_THUE_GTGT5"] = "";
        obj["TIEN_THUE_GTGT10"] = "";
        obj["TONG_TIEN_THUE_GTGT"] = "";
        obj["TIEN_THANH_TOAN_KHONG_THUE"] = "";
        obj["TIEN_THANH_TOAN_GTGT0"] = "";
        obj["TIEN_THANH_TOAN_GTGT5"] = "";
        obj["TIEN_THANH_TOAN_GTGT10"] = "";
        obj["TONG_TIEN_THANH_TOAN"] = "";
        obj["total_amount_product_without_vat"] = "";
        obj["vat_percentage"] = "";
        obj["total_amount_vat"] = "";
        obj["total_payment"] = "";
        obj["total_payment_word"] = "";
        obj["value_1h883984_576d_c322_7843_bdacf97ac189"] = "";
        obj["other_tax"] = "";
        obj["other_charge"] = "";
        obj["isViewMauGoc"] = true;
        obj["kyboi"] = "";
        obj["ngayky"] = "";
        obj["NguoiMuaKy"] = "";
        obj["tenCQT"] = "";
        obj["TIEN_HH_DV_GTGT8"] = "";
        obj["TIEN_THUE_GTGT8"] = "";
        obj["TIEN_THANH_TOAN_GTGT8"] = "";
        /* Thuế TNCN */
        obj["nnt_ho_va_ten"] = "";
        obj["nnt_mst_1"] = "";
        obj["nnt_mst_2"] = "";
        obj["nnt_mst_3"] = "";
        obj["nnt_mst_4"] = "";
        obj["nnt_mst_5"] = "";
        obj["nnt_mst_6"] = "";
        obj["nnt_mst_7"] = "";
        obj["nnt_mst_8"] = "";
        obj["nnt_mst_9"] = "";
        obj["nnt_mst_10"] = "";
        obj["nnt_mst_11"] = "";
        obj["nnt_mst_12"] = "";
        obj["nnt_mst_13"] = "";
        obj["nnt_quoc_tich"] = "";
        obj["nnt_dia_chi_lien_he"] = "";
        obj["nnt_cmnd"] = "";
        obj["nnt_noi_cap"] = "";
        obj["nnt_ngay_cap"] = "";
        obj["tncn_khoan_thu_nhap"] = "";
        obj["tncn_bao_hiem"] = "";
        obj["tncn_thoi_diem_tra_thang"] = "";
        obj["tncn_thoi_diem_tra_nam"] = "";
        obj["tncn_thu_nhap_chiu_thue"] = "";
        obj["tncn_thu_nhap_tinh_thue"] = "";
        obj["tncn_thu_nhap_da_khau_tru"] = "";
        obj["tncn_thu_nhap_da_tra"] = "";
        obj["tncn_thu_nhap_duoc_nhan"] = "";
        /* Thôn tin vé máy bay */
        obj["fare_refund_total"] = "";
        obj["vat_amount_refund_total"] = "";
        obj["other_tax_refund_total"] = "";
        obj["other_charge_refund_total"] = "";
        obj["total_payment_refund_total"] = "";
        obj["fare_refund_service"] = "";
        obj["vat_rate_refund_service"] = "";
        obj["vat_amount_refund_service"] = "";
        obj["other_tax_refund_service"] = "";
        obj["other_charge_refund_service"] = "";
        obj["total_payment_refund_service"] = "";
        obj["ho_ten_nguoi_nop_tien"] = "";
        obj["lop"] = "";
        obj["loai_tien"] = "";
        obj["tien_bang_so"] = "";
        obj["tien_bang_chu"] = "";
        obj["ngay_hoa_don"] = "";
        obj["thang_hoa_don"] = "";
        obj["nam_hoa_don"] = "";
        obj["dien_thoai_ben_mua"] = "";
        obj["noi_dung_thu"] = "";
        obj["ma_tra_cuu"] = "";
        this.FillandRemoveDataToTemplate(obj);
    };
    ModifynewComponent.prototype.MHD_ValueChanged = function (e) {
        var heightSeller = $("#preview-iframe").contents().find(".sign-block").find(".efy-esign-parent").height();
        $("#preview-iframe").contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").css('height', heightSeller);
        if (e.value == "Mẫu gốc") {
            if (this.frmData.is_digital_invoice) {
                $('#preview-iframe').contents().find(".ban-sao").html('&nbsp;&nbsp;&nbsp;&nbsp;');
                $('#preview-iframe').contents().find(".ban-sao-in-duoi").html('&nbsp;&nbsp;&nbsp;&nbsp;');
            }
            else {
                $('#preview-iframe').contents().find(".ban-sao").html('(Bản thể hiện của hóa đơn điện tử)');
                $('#preview-iframe').contents().find(".ban-sao-in-duoi").html('(E-Invoice viewer)');
            }
            $('#preview-iframe').contents().find(".nguoichuyendoi").css('display', 'none');
            $('#preview-iframe').contents().find(".ngaychuyendoi").css('display', 'none');
            $('#preview-iframe').contents().find(".nguoi_chuyen_doi_lbl").css('display', 'none');
            $('#preview-iframe').contents().find(".parent-ghi-chu-chuyen-doi").css('display', 'none');
            $('#preview-iframe').contents().find(".nguoilapky").css('display', 'block');
            $('#preview-iframe').contents().find(".childparent-ban-the-hien-ve-the").css('display', 'none');
            $('#preview-iframe').contents().find(".childparent-nguoi_chuyen_doi").css('display', 'none');
            $('#preview-iframe').contents().find(".childparent-ngay_chuyen_doi").css('display', 'none');
            this.viewMauGoc();
        }
        if (e.value == "Dữ liệu mẫu") {
            this.viewMauDraff();
        }
        if (e.value == "Mẫu chuyển đổi") {
            $('#preview-iframe').contents().find(".ban-sao").html('(Hóa đơn chuyển đổi từ hóa đơn điện tử)');
            $('#preview-iframe').contents().find(".ban-sao-in-duoi").html('(E-Invoice convert)');
            $('#preview-iframe').contents().find(".nguoichuyendoi").css('display', 'block');
            $('#preview-iframe').contents().find(".ngaychuyendoi").css('display', 'block');
            $('#preview-iframe').contents().find(".nguoi_chuyen_doi_lbl").css('display', 'block');
            $('#preview-iframe').contents().find(".parent-ghi-chu-chuyen-doi").css('display', 'block');
            $('#preview-iframe').contents().find(".nguoilapky").css('display', 'none');
            $('#preview-iframe').contents().find(".childparent-ban-the-hien-ve-the").css('display', 'block');
            $('#preview-iframe').contents().find(".childparent-nguoi_chuyen_doi").css('display', 'block');
            $('#preview-iframe').contents().find(".childparent-ngay_chuyen_doi").css('display', 'block');
        }
    };
    ModifynewComponent.prototype.ChangeFontTemptPlate = function (iframe, self) {
        this.arrIds.forEach(function (id) {
            iframe.contents().find('div').mousedown(function (event) {
                $('#' + id).contents().find(".template-table").css('z-index', '-1');
            });
            // //////////Thay đổi độ rộng cột hh classFontChange
            iframe.contents().find('th').mousedown(function (event) {
                if (event.which == 3) {
                    self.classFontChange = event.target.className;
                    var column = self.arrColumns.filter(function (p) { return p.name == self.classFontChange; })[0];
                    if (column)
                        iframe.trigger("click");
                }
            });
            ////ĐacK 
            iframe.click(function (event) {
                if (iframe[0].id == id) {
                    var column = self.arrColumns.filter(function (p) { return p.name == self.classFontChange; })[0];
                    if (column) {
                        self.tieude = column.title;
                        var width = $('#' + id).contents().find("." + self.classFontChange)[0].style.width;
                        var minwidth = $('#' + id).contents().find("." + self.classFontChange).css('min-width');
                        var intSize = minwidth.replace("px", "");
                        var intwidth = width.replace("%", "");
                        self.widthHH = intwidth;
                        self.minwidthHH = intSize;
                        self.showPopupHH = true;
                    }
                    else {
                        self.isReadOnly = false;
                        self.dataSource.forEach(function (item) {
                            var value = "value-" + item.code;
                            var name = "name-" + item.code;
                            var italic = "italic-" + item.code;
                            if (value == self.arrFontChange[0] || name == self.arrFontChange[0] || italic == self.arrFontChange[0])
                                self.isReadOnly = true;
                        });
                        if (self.arrFontChange[0] == "symbol-number-form" || self.arrFontChange[0] == "symbol-number-form-attach" || self.arrFontChange[0] == "number-form" || self.arrFontChange[0] == "symbol" || self.arrFontChange[0] == "invoice-number" || self.arrFontChange[0] == "invoice-number-attach")
                            self.isReadOnly = true;
                        for (var i = 1; i < 14; i++) {
                            var mstToChuc = "organization-tax-" + i.toString();
                            if (self.arrFontChange[0] == mstToChuc) {
                                self.isReadOnly = true;
                                break;
                            }
                        }
                        /* Chữ ký số */
                        self.arrFontChange[0] = self.arrFontChange[0].replace('efy-sign-label', '').replace('efy-sign-value', '').replace('efy-sign-date', '').replace(/\s+/, '');
                        var text = $('#' + id).contents().find("." + self.arrFontChange[0]).text();
                        var font = $('#' + id).contents().find("." + self.arrFontChange[0]).css('font-family');
                        var textalign = $('#' + id).contents().find("." + self.arrFontChange[0]).css('text-align');
                        var fontSize = $('#' + id).contents().find("." + self.arrFontChange[0]).css('font-size');
                        var textColor = $('#' + id).contents().find("." + self.arrFontChange[0]).css('color');
                        var fontBold = $('#' + id).contents().find("." + self.arrFontChange[0]).css('font-weight');
                        var fontItalic = $('#' + id).contents().find("." + self.arrFontChange[0]).css('font-style');
                        var fontUnderline = $('#' + id).contents().find("." + self.arrFontChange[0]).css('text-decoration');
                        var wordspacing = $('#' + id).contents().find("." + self.arrFontChange[0]).css('word-spacing');
                        var textTranfer = $('#' + id).contents().find("." + self.arrFontChange[0]).css('text-transform');
                        var paddingleft = $('#' + id).contents().find("." + self.arrFontChange[0]).css('padding-left');
                        var styleUnderLine = void 0;
                        if (fontUnderline)
                            styleUnderLine = fontUnderline.split(" ");
                        self.toggleUnderline = false;
                        if (styleUnderLine && styleUnderLine[0])
                            if (styleUnderLine[0] == "underline")
                                self.toggleUnderline = true;
                        if (font)
                            font = font.replace(/["']/g, "");
                        if (fontSize) {
                            var intSize = fontSize.replace("px", "");
                            self.fontSize = Number.parseInt(intSize);
                        }
                        if (wordspacing) {
                            var intspacing = wordspacing.replace("px", "");
                            self.spacechar = Number.parseInt(intspacing);
                        }
                        if (paddingleft) {
                            var intpaddingleft = paddingleft.replace("px", "");
                            self.paddingPostion = Number.parseInt(intpaddingleft);
                        }
                        self.valueFont = font;
                        self.currentColorText = textColor;
                        if (Number.parseInt(fontBold) >= 600)
                            self.toggleBold = true;
                        else
                            self.toggleBold = false;
                        if (fontItalic == "italic")
                            self.toggleItalic = true;
                        else
                            self.toggleItalic = false;
                        if (textalign == "left") {
                            self.toggleAlignLeft = true;
                            self.toggleAlignCenter = false;
                            self.toggleAlignRight = false;
                        }
                        else if (textalign == "center") {
                            self.toggleAlignCenter = true;
                            self.toggleAlignLeft = false;
                            self.toggleAlignRight = false;
                        }
                        else if (textalign == "right") {
                            self.toggleAlignRight = true;
                            self.toggleAlignLeft = false;
                            self.toggleAlignCenter = false;
                        }
                        self.textarea =
                            {
                                'color': textColor,
                                'font-family': font,
                                'font-size': fontSize,
                                'font-weight': fontBold,
                                'font-style': fontItalic,
                                'text-decoration': fontUnderline,
                                'word-spacing': wordspacing,
                                'text-transform': textTranfer,
                                'width': '100%',
                                'display': 'block',
                                'text-align': textalign
                            };
                        self.textAria = text;
                        self.textValue = text;
                        self.showPopup = true;
                    }
                }
            });
        });
    };
    ModifynewComponent.prototype.CreateAgainDrapAnđrop = function () {
        //preview
        var after = "<html xmlns:inv=\"http://laphoadon.gdt.gov.vn/2014/09/invoicexml/v1\" xmlns:user=\"http://mycompany.com/mynamespace\"\n    xmlns:sign=\"http://www.w3.org/2000/09/xmldsig#\">" + this.iframe.contentDocument.documentElement.innerHTML + "</html>";
        this.iframe = document.getElementById('preview-iframe');
        this.iframe.contentDocument.open("text/html", "replace");
        this.iframe.contentDocument.write(after);
        this.iframe.contentDocument.close();
        var slider = $("#slider").slider("values", 0);
        $("#slider").slider({
            value: slider,
            range: false,
            max: 1,
            min: 0,
            step: 0.01,
            slide: function (event, ui) {
                $("#preview-iframe").contents().find(".bg-template").css('opacity', ui.value);
                $("#preview-iframe").contents().find(".water-text").css('opacity', ui.value);
            },
            change: function (event, ui) {
                $("#preview-iframe").contents().find(".bg-template").css('opacity', ui.value);
                $("#preview-iframe").contents().find(".water-text").css('opacity', ui.value);
            }
        });
        ///////logo trái
        $("#preview-iframe").contents().find(".logo-company-left").find(".delete-logo-template").css('display', 'block');
        var width = $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").width();
        var height = $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").height();
        var rateLogo = width / height;
        if (width >= height) {
            if (rateLogo >= 2) {
                $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").resizable({
                    aspectRatio: true,
                    maxWidth: 250,
                    maxHeight: 125,
                });
            }
            else {
                $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").resizable({
                    aspectRatio: true,
                    maxWidth: 150,
                    maxHeight: 150,
                });
            }
        }
        else {
            $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").resizable({
                aspectRatio: true,
                maxWidth: 150 * rateLogo,
                maxHeight: 150,
            });
        }
        $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").css('border-width', '1px');
        $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").draggable({
            addClasses: false,
            containment: "parent",
            disabled: false,
            create: function () {
                $(this).removeClass('ui-draggable-disabled');
            },
            start: function () {
            }
        });
        ///////logo phải
        $("#preview-iframe").contents().find(".logo-company-right").find(".delete-logo-template").css('display', 'block');
        var widthR = $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").width();
        var heightR = $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").height();
        var rateLogoR = width / height;
        if (widthR >= heightR) {
            if (rateLogoR >= 2) {
                $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").resizable({
                    aspectRatio: true,
                    maxWidth: 250,
                    maxHeight: 125,
                });
            }
            else {
                $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").resizable({
                    aspectRatio: true,
                    maxWidth: 150,
                    maxHeight: 150,
                });
            }
        }
        else {
            $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").resizable({
                aspectRatio: true,
                maxWidth: 150 * rateLogoR,
                maxHeight: 150,
            });
        }
        $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").css('border-width', '1px');
        $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").draggable({
            addClasses: false,
            containment: "parent",
            disabled: false,
            create: function () {
                $(this).removeClass('ui-draggable-disabled');
            },
            start: function () {
            }
        });
        /////// ảnh nền
        $("#preview-iframe").contents().find(".bg-template-parent").css('border-width', '1px');
        $("#preview-iframe").contents().find(".bg-template-parent").find(".ui-resizable-se").css({ display: 'block' });
        $("#preview-iframe").contents().find(".bg-template-parent").resizable({
            aspectRatio: true,
            maxWidth: this.maxWidth,
            maxHeight: this.maxHeight,
        });
        $("#preview-iframe").contents().find(".bg-template-parent").draggable({
            addClasses: false,
            containment: "parent",
            disabled: false,
            create: function () {
                $(this).removeClass('ui-draggable-disabled');
            },
            start: function () {
            }
        });
        /* Chữ ký số người bán */
        $("#preview-iframe").contents().find(".sign-block").find(".efy-esign-parent").css('border-width', '1px');
        $("#preview-iframe").contents().find(".sign-block").find(".efy-esign-parent").find(".ui-resizable-se").css({ display: 'block' });
        $("#preview-iframe").contents().find(".sign-block").find(".efy-esign-parent").resizable({
            maxWidth: 341,
            maxHeight: 206,
            minWidth: 241,
            minHeight: 66,
        });
        $("#preview-iframe").contents().find(".sign-block").find(".efy-esign-parent").draggable({
            addClasses: false,
            containment: "parent",
            disabled: true,
            create: function () {
                $(this).removeClass('ui-draggable-disabled');
            },
            start: function () {
            }
        });
        /* Chữ ký số người mua */
        // $("#preview-iframe").contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").css('border-width', '1px');
        // $("#preview-iframe").contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").find(".ui-resizable-se").css({ display: 'block' });
        // $("#preview-iframe").contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").resizable(
        //   {
        //     maxWidth: 341,
        //     maxHeight: 206,
        //     minWidth: 241,
        //     minHeight: 66,
        //   },
        // );
        // $("#preview-iframe").contents().find(".sign-block-buyer").find(".efy-esign-parent-buyer").draggable({
        //   addClasses: false,
        //   containment: "parent",
        //   disabled: true,
        //   create: function () {
        //     $(this).removeClass('ui-draggable-disabled');
        //   },
        //   start: function () {
        //   }
        // });
        ////////////----------------Chung----------------///////////////////////grid
        /////// thông tin người mua
        for (var i = 0; i < this.dataSourceBenMua.length; i++) {
            var code = "";
            if (this.dataSourceBenMua[i].type == "4")
                code = this.dataSourceBenMua[i].code;
            else
                code = this.dataSourceBenMua[i].code;
            $("#preview-iframe").contents().find(".GroupCustomField").find(".childparent-" + code).css('float', 'left').css('width', this.dataSourceBenMua[i].width + '%').css('cursor', 'move');
            $('#preview-iframe').contents().find(".parent-" + code).sortable({
                connectWith: ".sort",
            }).disableSelection();
            var classname = "parent-" + code;
            if (this.dataSourceBenMua[i].is_show)
                $('#preview-iframe').contents().find("." + classname).css('display', 'block');
            else
                $('#preview-iframe').contents().find("." + classname).css('display', 'none');
        }
        this.arrThuXacNhan.forEach(function (item) {
            $("#preview-iframe").contents().find(".GroupCustomField").find(".childparent-" + item).css('cursor', 'move');
            $('#preview-iframe').contents().find(".parent-" + item).sortable({
                connectWith: ".sort",
            }).disableSelection();
        });
        this.cusorFieldArray.forEach(function (item) {
            $("#preview-iframe").contents().find(".GroupCustomField").find(".childparent-" + item).css('cursor', 'move');
            $('#preview-iframe').contents().find(".parent-" + item).sortable({
                connectWith: ".sort",
            }).disableSelection();
        });
        /* Thông tin hàng hóa bổ sung */
        for (var i = 0; i < this.ds_hang_hoa_dich_vu.length; i++) {
            var code = this.ds_hang_hoa_dich_vu[i].code;
            $("#preview-iframe").contents().find(".GroupCustomField").find(".childparent-" + code).css('float', 'left').css('width', this.ds_hang_hoa_dich_vu[i].width + '%').css('cursor', 'move');
            $('#preview-iframe').contents().find(".parent-" + code).sortable({
                connectWith: ".sort",
            }).disableSelection();
            var classname = "parent-" + code;
            if (this.ds_hang_hoa_dich_vu[i].is_show)
                $('#preview-iframe').contents().find("." + classname).css('display', 'block');
            else
                $('#preview-iframe').contents().find("." + classname).css('display', 'none');
        }
        /////////Thông tin bên bán
        for (var i = 0; i < this.dataSource.length; i++) {
            var code = "";
            code = this.dataSource[i].code;
            $("#preview-iframe").contents().find(".GroupUserField").find(".childparent-" + code).css('float', 'left').css('width', this.dataSource[i].width + '%').css('cursor', 'move');
            if (code != "8e693984-576d-c322-7843-bdacf97ac189")
                $('#preview-iframe').contents().find(".parent-" + code).sortable({
                    connectWith: ".sort",
                }).disableSelection();
            var classname = "parent-" + code;
            var textvSP = "value-" + code;
            var name_2 = "name-" + code;
            var italic = "italic-" + code;
            if (code == "ky-so-ben-ban" || code == "ma-qr-code") {
                classname = code;
                textvSP = code;
                name_2 = code;
                italic = code;
            }
            if (this.dataSource[i].is_show) {
                if (code == "8e693984-576d-c322-7843-bdacf97ac189") {
                    $('#preview-iframe').contents().find("." + name_2).css('display', 'table-cell');
                    $('#preview-iframe').contents().find("." + italic).css('display', 'table-cell');
                }
                if (code == "ky-so-ben-ban" || code == "ma-qr-code") {
                    $('#preview-iframe').contents().find("." + classname).css('display', 'inline-block');
                    if (code == "ky-so-ben-ban")
                        $('#preview-iframe').contents().find(".da-duoc-ky-so-ben-ban").css('display', 'none');
                }
                else
                    $('#preview-iframe').contents().find("." + classname).css('display', 'block');
            }
            else {
                if (code == "ky-so-ben-ban")
                    $('#preview-iframe').contents().find(".da-duoc-ky-so-ben-ban").css('display', '');
                if (code == "8e693984-576d-c322-7843-bdacf97ac189") {
                    $('#preview-iframe').contents().find("." + name_2).css('display', 'none');
                    $('#preview-iframe').contents().find("." + italic).css('display', 'none');
                }
                else
                    $('#preview-iframe').contents().find("." + classname).css('display', 'none');
            }
            $('#preview-iframe').contents().find("." + textvSP).html(this.dataSource[i].value);
            if (code != "ky-so-ben-ban" && code != "ma-qr-code")
                this.dataSource[i].name = $('#preview-iframe').contents().find("." + name_2).text() + $('#preview-iframe').contents().find("." + italic).text();
        }
        /////////////
        ////////// logo trái
        $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").click(function (e) {
            if (e.target.className != "delete-logo-template")
                document.getElementById("file-input-logo").click();
        });
        $("#preview-iframe").contents().find(".logo-company-left").find(".delete-logo-template").click(function (e) {
            if (e.target.className == "delete-logo-template") {
                $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").css('background-image', 'url(data:image/jpg' + ';base64,' + "" + ')');
                $('#file-input-logo').val('');
                $('#logo-file').val('');
                $('.logo-file-label').html('Chọn logo đơn vị');
            }
        });
        ////////////////////logo phải
        $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").click(function (e) {
            if (e.target.className != "delete-logo-template") {
                document.getElementById("file-input-logo").click();
            }
        });
        $("#preview-iframe").contents().find(".logo-company-right").find(".delete-logo-template").click(function (e) {
            if (e.target.className == "delete-logo-template") {
                $("#preview-iframe").contents().find(".logo-company-right").find(".logo-company").css('background-image', 'url(data:image/jpg' + ';base64,' + "" + ')');
                $('#file-input-logo').val('');
                $('#logo-file').val('');
                $('.logo-file-label').html('Chọn logo đơn vị');
            }
        });
        ////////////-----------------Đóng--------------------///////////////////
    };
    ////////// Thay đổi
    ModifynewComponent.prototype.FillandRemoveDataToTemplate = function (obj) {
        ////Họ tên người mua hàng
        if ($("#preview-iframe").contents().find(".value-9c103984-576d-c322-7843-bdacf97ac189")[0])
            $("#preview-iframe").contents().find(".value-9c103984-576d-c322-7843-bdacf97ac189").html(obj.hotennguoimuahang);
        ////Tên đơn vị
        if ($("#preview-iframe").contents().find(".value-8c103984-576d-c322-7843-bdacf97ac189")[0])
            $("#preview-iframe").contents().find(".value-8c103984-576d-c322-7843-bdacf97ac189").html(obj.tendonvi);
        ////Mã số thuế
        if ($("#preview-iframe").contents().find(".value-8d903984-576d-c322-7843-bdacf97ac100")[0])
            $("#preview-iframe").contents().find(".value-8d903984-576d-c322-7843-bdacf97ac100").html(obj.masothue);
        ////Địa chỉ
        if ($("#preview-iframe").contents().find(".value-7c103984-576d-c322-7843-bdacf97ac189")[0])
            $("#preview-iframe").contents().find(".value-7c103984-576d-c322-7843-bdacf97ac189").html(obj.diachi);
        ////Hình thức thanh toán
        if ($("#preview-iframe").contents().find(".value-3a9f145a-549a-01ea-e507-cc7b0ab28a69")[0])
            $("#preview-iframe").contents().find(".value-3a9f145a-549a-01ea-e507-cc7b0ab28a69").html(obj.hinhthucthanhtoan);
        ////Số tài khoản
        if ($("#preview-iframe").contents().find(".value-d0f2a367-8ca8-006a-eb0c-cf3261f00a1c")[0])
            $("#preview-iframe").contents().find(".value-d0f2a367-8ca8-006a-eb0c-cf3261f00a1c").html(obj.sotk);
        ////Tỷ giá
        if ($("#preview-iframe").contents().find(".value-e0f2a367-8ca8-006a-eb0c-cf3261f00a1c")[0])
            $("#preview-iframe").contents().find(".value-e0f2a367-8ca8-006a-eb0c-cf3261f00a1c").html(obj.tygia);
        ////Ghi chú
        if ($("#preview-iframe").contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00a1c")[0])
            $("#preview-iframe").contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00a1c").html(obj.ghichu);
        ///////// Dữ liệu động
        this.dataSourceBenMua.forEach(function (item) {
            if (item.code != "3a9f145a-549a-01ea-e507-cc7b0ab28a69" && item.code != "d0f2a367-8ca8-006a-eb0c-cf3261f00a1c" && item.code != "e0f2a367-8ca8-006a-eb0c-cf3261f00a1c" && item.code != "f0f2a367-8ca8-006a-eb0c-cf3261f00a1c") {
                var classname = "value-" + item.code;
                if ($("#preview-iframe").contents().find("." + classname)[0])
                    $('#preview-iframe').contents().find("." + classname).html(obj.dulieudong);
            }
        });
        ///////// Fill dữ liệu đến hàng hóa
        this.arrColumns.forEach(function (item) {
            var content = item.content;
            if (obj.isViewMauGoc)
                content = '';
            if ($("#preview-iframe").contents().find("." + item.name)[0])
                $("#preview-iframe").contents().find(".tbody-content-detail").find("tr").first().find("." + item.value).html(content);
        });
        ///////////// Hiển thị tiền số 
        if ($("#preview-iframe").contents().find(".TIEN_HH_DV_GTGT_KHONG_THUE")[0])
            $("#preview-iframe").contents().find(".TIEN_HH_DV_GTGT_KHONG_THUE").html(obj.TIEN_HH_DV_GTGT_KHONG_THUE);
        if ($("#preview-iframe").contents().find(".TIEN_HH_DV_GTGT0")[0])
            $("#preview-iframe").contents().find(".TIEN_HH_DV_GTGT0").html(obj.TIEN_HH_DV_GTGT0);
        if ($("#preview-iframe").contents().find(".TIEN_HH_DV_GTGT5")[0])
            $("#preview-iframe").contents().find(".TIEN_HH_DV_GTGT5").html(obj.TIEN_HH_DV_GTGT5);
        if ($("#preview-iframe").contents().find(".TIEN_HH_DV_GTGT10")[0])
            $("#preview-iframe").contents().find(".TIEN_HH_DV_GTGT10").html(obj.TIEN_HH_DV_GTGT10);
        if ($("#preview-iframe").contents().find(".TIEN_HH_DV_GTGT8")[0])
            $("#preview-iframe").contents().find(".TIEN_HH_DV_GTGT8").html(obj.TIEN_HH_DV_GTGT8);
        if ($("#preview-iframe").contents().find(".TONG_TIEN_HH_DV_GTGT")[0])
            $("#preview-iframe").contents().find(".TONG_TIEN_HH_DV_GTGT").html(obj.TONG_TIEN_HH_DV_GTGT);
        if ($("#preview-iframe").contents().find(".TIEN_THUE_GTGT")[0])
            $("#preview-iframe").contents().find(".TIEN_THUE_GTGT").html(obj.TIEN_THUE_GTGT);
        if ($("#preview-iframe").contents().find(".TIEN_THUE_GTGT0")[0])
            $("#preview-iframe").contents().find(".TIEN_THUE_GTGT0").html(obj.TIEN_THUE_GTGT0);
        if ($("#preview-iframe").contents().find(".TIEN_THUE_GTGT5")[0])
            $("#preview-iframe").contents().find(".TIEN_THUE_GTGT5").html(obj.TIEN_THUE_GTGT5);
        if ($("#preview-iframe").contents().find(".TIEN_THUE_GTGT8")[0])
            $("#preview-iframe").contents().find(".TIEN_THUE_GTGT8").html(obj.TIEN_THUE_GTGT8);
        if ($("#preview-iframe").contents().find(".TIEN_THUE_GTGT10")[0])
            $("#preview-iframe").contents().find(".TIEN_THUE_GTGT10").html(obj.TIEN_THUE_GTGT10);
        if ($("#preview-iframe").contents().find(".TONG_TIEN_THUE_GTGT")[0])
            $("#preview-iframe").contents().find(".TONG_TIEN_THUE_GTGT").html(obj.TONG_TIEN_THUE_GTGT);
        if ($("#preview-iframe").contents().find(".TIEN_THANH_TOAN_KHONG_THUE")[0])
            $("#preview-iframe").contents().find(".TIEN_THANH_TOAN_KHONG_THUE").html(obj.TIEN_THANH_TOAN_KHONG_THUE);
        if ($("#preview-iframe").contents().find(".TIEN_THANH_TOAN_GTGT0")[0])
            $("#preview-iframe").contents().find(".TIEN_THANH_TOAN_GTGT0").html(obj.TIEN_THANH_TOAN_GTGT0);
        if ($("#preview-iframe").contents().find(".TIEN_THANH_TOAN_GTGT5")[0])
            $("#preview-iframe").contents().find(".TIEN_THANH_TOAN_GTGT5").html(obj.TIEN_THANH_TOAN_GTGT5);
        if ($("#preview-iframe").contents().find(".TIEN_THANH_TOAN_GTGT8")[0])
            $("#preview-iframe").contents().find(".TIEN_THANH_TOAN_GTGT8").html(obj.TIEN_THANH_TOAN_GTGT8);
        if ($("#preview-iframe").contents().find(".TIEN_THANH_TOAN_GTGT10")[0])
            $("#preview-iframe").contents().find(".TIEN_THANH_TOAN_GTGT10").html(obj.TIEN_THANH_TOAN_GTGT10);
        if ($("#preview-iframe").contents().find(".TONG_TIEN_THANH_TOAN")[0])
            $("#preview-iframe").contents().find(".TONG_TIEN_THANH_TOAN").html(obj.TONG_TIEN_THANH_TOAN);
        if ($("#preview-iframe").contents().find(".total-amount-product-without-vat")[0])
            $("#preview-iframe").contents().find(".total-amount-product-without-vat").html(obj.total_amount_product_without_vat);
        if ($("#preview-iframe").contents().find(".vat-percentage")[0])
            $("#preview-iframe").contents().find(".vat-percentage").html(obj.vat_percentage);
        if ($("#preview-iframe").contents().find(".total-amount-vat")[0])
            $("#preview-iframe").contents().find(".total-amount-vat").html(obj.total_amount_vat);
        if ($("#preview-iframe").contents().find(".total-payment")[0])
            $("#preview-iframe").contents().find(".total-payment").html(obj.total_payment);
        if ($("#preview-iframe").contents().find(".total-payment-word")[0])
            $("#preview-iframe").contents().find(".total-payment-word").html(obj.total_payment_word);
        if ($("#preview-iframe").contents().find(".value-1h883984-576d-c322-7843-bdacf97ac189")[0])
            $("#preview-iframe").contents().find(".value-1h883984-576d-c322-7843-bdacf97ac189").html(obj.value_1h883984_576d_c322_7843_bdacf97ac189);
        if ($("#preview-iframe").contents().find(".other-tax")[0])
            $("#preview-iframe").contents().find(".other-tax").html(obj.other_tax);
        if ($("#preview-iframe").contents().find(".other-charge")[0])
            $("#preview-iframe").contents().find(".other-charge").html(obj.other_charge);
        /* Thông tin chữ ký số */
        // Ký bởi người bán
        if ($("#preview-iframe").contents().find(".seler-sign-name")[0])
            $("#preview-iframe").contents().find(".seler-sign-name").html(obj.kyboi);
        // Ngày ký người bán
        if ($("#preview-iframe").contents().find(".seler-sign-date")[0])
            $("#preview-iframe").contents().find(".seler-sign-date").html(obj.ngayky);
        // Ký bởi người mua
        if ($("#preview-iframe").contents().find(".seler-sign-name-buyer")[0])
            $("#preview-iframe").contents().find(".seler-sign-name-buyer").html(obj.NguoiMuaKy);
        // Ngày ký người mua
        if ($("#preview-iframe").contents().find(".seler-sign-date-buyer")[0])
            $("#preview-iframe").contents().find(".seler-sign-date-buyer").html(obj.ngayky);
        // Ký bởi Tổng cục thuế
        if ($("#preview-iframe").contents().find(".seler-sign-name-tax")[0])
            $("#preview-iframe").contents().find(".seler-sign-name-tax").html(obj.tenCQT);
        // Ngày ký Tổng cục thuế
        if ($("#preview-iframe").contents().find(".seler-sign-date-tax")[0])
            $("#preview-iframe").contents().find(".seler-sign-date-tax").html(obj.ngayky);
        /* Thuế thu nhập cá nhân */
        if ($("#preview-iframe").contents().find(".value-ten-nnt")[0])
            $("#preview-iframe").contents().find(".value-ten-nnt").html(obj.nnt_ho_va_ten);
        if ($("#preview-iframe").contents().find(".mst-nnt-1")[0])
            $("#preview-iframe").contents().find(".mst-nnt-1").html(obj.nnt_mst_1);
        if ($("#preview-iframe").contents().find(".mst-nnt-2")[0])
            $("#preview-iframe").contents().find(".mst-nnt-2").html(obj.nnt_mst_2);
        if ($("#preview-iframe").contents().find(".mst-nnt-3")[0])
            $("#preview-iframe").contents().find(".mst-nnt-3").html(obj.nnt_mst_3);
        if ($("#preview-iframe").contents().find(".mst-nnt-4")[0])
            $("#preview-iframe").contents().find(".mst-nnt-4").html(obj.nnt_mst_4);
        if ($("#preview-iframe").contents().find(".mst-nnt-5")[0])
            $("#preview-iframe").contents().find(".mst-nnt-5").html(obj.nnt_mst_5);
        if ($("#preview-iframe").contents().find(".mst-nnt-6")[0])
            $("#preview-iframe").contents().find(".mst-nnt-6").html(obj.nnt_mst_6);
        if ($("#preview-iframe").contents().find(".mst-nnt-7")[0])
            $("#preview-iframe").contents().find(".mst-nnt-7").html(obj.nnt_mst_7);
        if ($("#preview-iframe").contents().find(".mst-nnt-8")[0])
            $("#preview-iframe").contents().find(".mst-nnt-8").html(obj.nnt_mst_8);
        if ($("#preview-iframe").contents().find(".mst-nnt-9")[0])
            $("#preview-iframe").contents().find(".mst-nnt-9").html(obj.nnt_mst_9);
        if ($("#preview-iframe").contents().find(".mst-nnt-10")[0])
            $("#preview-iframe").contents().find(".mst-nnt-10").html(obj.nnt_mst_10);
        if ($("#preview-iframe").contents().find(".mst-nnt-11")[0])
            $("#preview-iframe").contents().find(".mst-nnt-11").html(obj.nnt_mst_11);
        if ($("#preview-iframe").contents().find(".mst-nnt-12")[0])
            $("#preview-iframe").contents().find(".mst-nnt-12").html(obj.nnt_mst_12);
        if ($("#preview-iframe").contents().find(".mst-nnt-13")[0])
            $("#preview-iframe").contents().find(".mst-nnt-13").html(obj.nnt_mst_13);
        if ($("#preview-iframe").contents().find(".value-quoc-tich-nnt")[0])
            $("#preview-iframe").contents().find(".value-quoc-tich-nnt").html(obj.nnt_quoc_tich);
        if ($("#preview-iframe").contents().find(".value-dia-chi-nnt")[0])
            $("#preview-iframe").contents().find(".value-dia-chi-nnt").html(obj.nnt_dia_chi_lien_he);
        if ($("#preview-iframe").contents().find(".value-cmnd-nnt")[0])
            $("#preview-iframe").contents().find(".value-cmnd-nnt").html(obj.nnt_cmnd);
        if ($("#preview-iframe").contents().find(".value-noi-cap-nnt")[0])
            $("#preview-iframe").contents().find(".value-noi-cap-nnt").html(obj.nnt_noi_cap);
        if ($("#preview-iframe").contents().find(".value-ngay-cap-nnt")[0])
            $("#preview-iframe").contents().find(".value-ngay-cap-nnt").html(obj.nnt_ngay_cap);
        if ($("#preview-iframe").contents().find(".value-tien-thu-nhap-nnt")[0])
            $("#preview-iframe").contents().find(".value-tien-thu-nhap-nnt").html(obj.tncn_khoan_thu_nhap);
        if ($("#preview-iframe").contents().find(".value-tien-dong-bao-hiem-nnt")[0])
            $("#preview-iframe").contents().find(".value-tien-dong-bao-hiem-nnt").html(obj.tncn_bao_hiem);
        if ($("#preview-iframe").contents().find(".value-thang-tra-thu-nhap-nnt")[0])
            $("#preview-iframe").contents().find(".value-thang-tra-thu-nhap-nnt").html(obj.tncn_thoi_diem_tra_thang);
        if ($("#preview-iframe").contents().find(".value-nam-tra-thu-nhap-nnt")[0])
            $("#preview-iframe").contents().find(".value-nam-tra-thu-nhap-nnt").html(obj.tncn_thoi_diem_tra_nam);
        if ($("#preview-iframe").contents().find(".value-tien-chiu-thue-nnt")[0])
            $("#preview-iframe").contents().find(".value-tien-chiu-thue-nnt").html(obj.tncn_thu_nhap_chiu_thue);
        if ($("#preview-iframe").contents().find(".value-tien-tinh-thue-nnt")[0])
            $("#preview-iframe").contents().find(".value-tien-tinh-thue-nnt").html(obj.tncn_thu_nhap_tinh_thue);
        if ($("#preview-iframe").contents().find(".value-tien-thue-da-khau-tru-nnt")[0])
            $("#preview-iframe").contents().find(".value-tien-thue-da-khau-tru-nnt").html(obj.tncn_thu_nhap_da_khau_tru);
        if ($("#preview-iframe").contents().find(".value-tien-thue-da-tra-nnt")[0])
            $("#preview-iframe").contents().find(".value-tien-thue-da-tra-nnt").html(obj.tncn_thu_nhap_da_tra);
        if ($("#preview-iframe").contents().find(".value-tien-duoc-nhan-nnt")[0])
            $("#preview-iframe").contents().find(".value-tien-duoc-nhan-nnt").html(obj.tncn_thu_nhap_duoc_nhan);
        if ($("#preview-iframe").contents().find(".fare_refund_total")[0])
            $("#preview-iframe").contents().find(".fare_refund_total").html(obj.fare_refund_total);
        if ($("#preview-iframe").contents().find(".vat_amount_refund_total")[0])
            $("#preview-iframe").contents().find(".vat_amount_refund_total").html(obj.vat_amount_refund_total);
        if ($("#preview-iframe").contents().find(".other_tax_refund_total")[0])
            $("#preview-iframe").contents().find(".other_tax_refund_total").html(obj.other_tax_refund_total);
        if ($("#preview-iframe").contents().find(".other_charge_refund_total")[0])
            $("#preview-iframe").contents().find(".other_charge_refund_total").html(obj.other_charge_refund_total);
        if ($("#preview-iframe").contents().find(".total_payment_refund_total")[0])
            $("#preview-iframe").contents().find(".total_payment_refund_total").html(obj.total_payment_refund_total);
        if ($("#preview-iframe").contents().find(".fare_refund_service")[0])
            $("#preview-iframe").contents().find(".fare_refund_service").html(obj.fare_refund_service);
        if ($("#preview-iframe").contents().find(".vat_rate_refund_service")[0])
            $("#preview-iframe").contents().find(".vat_rate_refund_service").html(obj.vat_rate_refund_service);
        if ($("#preview-iframe").contents().find(".vat_amount_refund_service")[0])
            $("#preview-iframe").contents().find(".vat_amount_refund_service").html(obj.vat_amount_refund_service);
        if ($("#preview-iframe").contents().find(".other_tax_refund_service")[0])
            $("#preview-iframe").contents().find(".other_tax_refund_service").html(obj.other_tax_refund_service);
        if ($("#preview-iframe").contents().find(".other_charge_refund_service")[0])
            $("#preview-iframe").contents().find(".other_charge_refund_service").html(obj.other_charge_refund_service);
        if ($("#preview-iframe").contents().find(".total_payment_refund_service")[0])
            $("#preview-iframe").contents().find(".total_payment_refund_service").html(obj.total_payment_refund_service);
        /* Phiếu thu */
        if ($("#preview-iframe").contents().find(".value-9c103984-576d-c322-7843-bdacf97bd888")[0])
            $("#preview-iframe").contents().find(".value-9c103984-576d-c322-7843-bdacf97bd888").html(obj.ho_ten_nguoi_nop_tien);
        if ($("#preview-iframe").contents().find(".value-7d873098-576d-c322-7843-bdacf97ac100")[0])
            $("#preview-iframe").contents().find(".value-7d873098-576d-c322-7843-bdacf97ac100").html(obj.lop);
        if ($("#preview-iframe").contents().find(".value-8l873098-576d-c322-7843-bdacf97ac100")[0])
            $("#preview-iframe").contents().find(".value-8l873098-576d-c322-7843-bdacf97ac100").html(obj.noi_dung_thu);
        if ($("#preview-iframe").contents().find(".matracuu")[0])
            $("#preview-iframe").contents().find(".matracuu").html(obj.ma_tra_cuu);
        if ($("#preview-iframe").contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00999")[0])
            $("#preview-iframe").contents().find(".value-f0f2a367-8ca8-006a-eb0c-cf3261f00999").html(obj.loai_tien);
        if ($("#preview-iframe").contents().find(".value-0929ca81-5681-49ac-9804-af48cb63af9a")[0])
            $("#preview-iframe").contents().find(".value-0929ca81-5681-49ac-9804-af48cb63af9a").html(obj.tien_bang_so);
        if ($("#preview-iframe").contents().find(".value-178af720-402f-4266-828c-64dd2b0bf356")[0])
            $("#preview-iframe").contents().find(".value-178af720-402f-4266-828c-64dd2b0bf356").html(obj.tien_bang_chu);
        if ($("#preview-iframe").contents().find(".value-ten-don-vi-hoac-nguoi-nop-tien")[0])
            $("#preview-iframe").contents().find(".value-ten-don-vi-hoac-nguoi-nop-tien").html(obj.ho_ten_nguoi_nop_tien);
        if ($("#preview-iframe").contents().find(".value-11111121-549a-01ea-e507-cc7b0ab28a69")[0])
            $("#preview-iframe").contents().find(".value-11111121-549a-01ea-e507-cc7b0ab28a69").html(obj.dien_thoai_ben_mua);
        if ($("#preview-iframe").contents().find(".value-noi-dung-thu")[0])
            $("#preview-iframe").contents().find(".value-noi-dung-thu").html(obj.noi_dung_thu);
        if ($("#preview-iframe").contents().find(".ThangHD")[0])
            $("#preview-iframe").contents().find(".ThangHD").html(obj.thang_hoa_don);
        if ($("#preview-iframe").contents().find(".NgayHD")[0])
            $("#preview-iframe").contents().find(".NgayHD").html(obj.ngay_hoa_don);
        if ($("#preview-iframe").contents().find(".NamHD")[0])
            $("#preview-iframe").contents().find(".NamHD").html(obj.nam_hoa_don);
    };
    ModifynewComponent.prototype.createRowData = function (countRow, id) {
        for (var i = 0; i < countRow; i++) {
            this.trRow += '<tr class="detail-data font-color-data text-left">';
            var ths = $("#" + id).contents().find("#tbDetail").find("th");
            var _loop_14 = function () {
                var className = ths[j].className;
                var column = this_12.arrColumns.filter(function (p) { return p.name == className; })[0];
                if (column) {
                    var valueColumn = column.value;
                    var height = column.height;
                    if (this_12.paper_size == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A5Ngang)
                        height = "18px";
                    if (i > 0)
                        valueColumn = '';
                    if ($("#" + id).contents().find("." + column.name)[0])
                        this_12.trRow += '<td style="height: ' + height + ';"' + ' class="' + column.class + '"><span class="' + valueColumn + '"></span></td>';
                }
            };
            var this_12 = this;
            for (var j = 0; j < ths.length; j++) {
                _loop_14();
            }
            this.trRow += '</tr>';
        }
    };
    ModifynewComponent.prototype.SetFontVerticalAlign = function (align) {
        var _this = this;
        if (this.arrFontChange.length > 0) {
            var _loop_15 = function (i) {
                this_13.arrIds.forEach(function (id) {
                    var column = _this.arrColumns.filter(function (p) { return p.value == _this.arrFontChange[i]; })[0];
                    if (column)
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('display', 'block');
                    if (!_this.arrFontChange[i].includes("name-"))
                        $("#" + id).contents().find("." + _this.arrFontChange[i]).css('width', '100%');
                    $("#" + id).contents().find("." + _this.arrFontChange[i]).css('text-align', align);
                });
            };
            var this_13 = this;
            for (var i = 0; i < this.arrFontChange.length; i++) {
                _loop_15(i);
            }
        }
    };
    /* Thay đổi text */
    ModifynewComponent.prototype.textChanged = function (e) {
        var _this = this;
        this.textAria = e.srcElement.value;
        if (this.arrFontChange.length > 0) {
            var _loop_16 = function (i) {
                this_14.arrIds.forEach(function (id) {
                    $("#" + id).contents().find("." + _this.arrFontChange[i]).html(e.srcElement.value);
                });
                ///
                this_14.dataSourceBenMua.forEach(function (item) {
                    var name = "name-" + item.code;
                    var italic = "italic-" + item.code;
                    if (name == _this.arrFontChange[i] || italic == _this.arrFontChange[i])
                        item.name = e.srcElement.value;
                });
            };
            var this_14 = this;
            // if (e.previousValue) {
            for (var i = 0; i < this.arrFontChange.length; i++) {
                _loop_16(i);
            }
            // }
        }
    };
    ModifynewComponent.prototype.onClickMauSo = function () {
        this.isDisplayMauSo = !this.isDisplayMauSo;
    };
    ModifynewComponent.prototype.onClickKyHieu = function () {
        this.isDisplayKyHieu = !this.isDisplayKyHieu;
    };
    ModifynewComponent.prototype.onClickTypeInvoice = function () {
        this.isDisplayTypeInvoice = !this.isDisplayTypeInvoice;
    };
    ModifynewComponent.prototype.onClicknoHead = function () {
        this.isDisplayNoHead = !this.isDisplayNoHead;
    };
    ModifynewComponent.prototype.disableCheckBoxSeller = function (data) {
        if (this.invoice_type == "08HSPT")
            return true;
        else if (data.code != "6e693984-576d-c322-7843-bdacf97ac189" && data.code != "7e693984-576d-c322-7843-bdacf97ac189")
            return true;
        return false;
    };
    ModifynewComponent.prototype.disableCheckBoxSellerBSHHDV = function (data) {
        if (data.code != "8l873098-576d-c322-7843-bdacf97ac100")
            return true;
        return false;
    };
    ModifynewComponent.prototype.onCellHoverChanged = function (e) {
        if (e.rowType == 'data') {
            if (e.eventType === 'mouseover' && e.column.dataField && e.column.dataField != 'is_show' && e.column.dataField != '') {
                var field = e.column.dataField;
                var text = "";
                switch (field) {
                    case "index_name":
                        text = 'Ký tự đầu dòng';
                        break;
                    case "name":
                        text = 'Tên trường thông tin';
                        break;
                    case "name_en":
                        text = 'Tên tiếng anh';
                        break;
                    case "data_type":
                        text = 'Định dạng';
                        break;
                    case "width":
                        text = 'Kích thước';
                        break;
                }
                this.popOverText = text;
                this.popoverTarget = e.cellElement;
                this.showPopupOver = true;
            }
            else if (e.eventType === 'mouseout') {
                this.showPopupOver = false;
                //this.popOver.instance.hide();
            }
        }
    };
    ModifynewComponent.prototype.onCellHoverChangedBSHHDV = function (e) {
        if (e.rowType == 'data') {
            if (e.eventType === 'mouseover' && e.column.dataField && e.column.dataField != 'is_show' && e.column.dataField != '') {
                var field = e.column.dataField;
                var text = "";
                switch (field) {
                    case "index_name":
                        text = 'Ký tự đầu dòng';
                        break;
                    case "name":
                        text = 'Tên trường thông tin';
                        break;
                    case "name_en":
                        text = 'Tên tiếng anh';
                        break;
                    case "data_type":
                        text = 'Định dạng';
                        break;
                    case "width":
                        text = 'Kích thước';
                        break;
                }
                this.popOverText = text;
                this.popoverTarget = e.cellElement;
                this.showPopupOver = true;
            }
            else if (e.eventType === 'mouseout') {
                this.showPopupOver = false;
                //this.popOver.instance.hide();
            }
        }
    };
    ModifynewComponent.prototype.format_MauSo_KyHieu = function () {
        if (this.isChungTuTNCN) {
            if (this.isThuXacNhan) {
                this.readOnlyMauSo = true;
                this.formatMaskTemplace = "CCC";
                this.formatMaskSeries = "00CC";
                this.maskRules = { 'h': /^[A-Za-z]{3}\z/ };
                this.ruleTempt = { 'h': /^[A-Za-z]{3}\z/ };
            }
            else {
                this.readOnlyMauSo = true;
                this.formatMaskTemplace = "CCC00";
                this.formatMaskSeries = "CC/0000/E";
                this.maskRules = { 'h': /^[A-Za-z]{2}[0-9]{4}\z/ };
                this.ruleTempt = { 'h': /^[A-Za-z]{3}[0-9]{2}\z/ };
            }
        }
        else if (this.isPhieuTinhTien) {
            this.readOnlyMauSo = true;
            this.formatMaskTemplace = "CCC";
            this.formatMaskSeries = "00CC";
            this.maskRules = { 'h': /^[A-Za-z]{3}\z/ };
            this.ruleTempt = { 'h': /^[A-Za-z]{3}\z/ };
        }
        else if (this.isPhieuThuHS) {
            this.readOnlyMauSo = true;
            this.formatMaskTemplace = "CC";
            this.formatMaskSeries = "00CC";
            this.maskRules = { 'h': /^[0-9]{2}[A-Za-z]{2}\z/ };
            this.ruleTempt = { 'h': /^[A-Za-z]{2}[A-Za-z]{2}\z/ };
        }
        else if (this.isBienLaiDienTu) {
            this.formatMaskTemplace = "\\" + this.getKyTuMauSo() + "\\0-000";
            this.formatMaskTemplace = this.formatMaskTemplace.replace("L", "\\L");
            this.formatMaskSeries = "CC-00E";
            this.maskRules = { 'h': /^[A-Za-z]{2}[0-9]{2}\z/ };
            this.ruleTempt = { 'h': /^[A-Za-z]{2}[0-9]{2}\z/ };
        }
        else {
            if (this.frmData.is_decree_new) {
                this.readOnlyMauSo = true;
                this.formatMaskTemplace = "X";
                this.formatMaskSeries = "CSSLTT";
                this.ruleTempt = { "X": /[1-6]/ };
                this.maskRules =
                    {
                        "C": /[c|C|k|K]/,
                        "S": /[0-9]/,
                        "L": /[t|T|d|D|l|L|m|M|n|N|b|B|g|G|h|H]/,
                        "T": /[A-Za-z]/
                    };
            }
            else {
                this.formatMaskTemplace = "\\" + this.invoice_type + "\\0/000";
                this.formatMaskTemplace = this.formatMaskTemplace.replace("L", "\\L");
                this.formatMaskSeries = "CC/00E";
                this.maskRules = { 'h': /^[A-Za-z]{2}[0-9]{2}\z/ };
                this.ruleTempt = { 'h': /^[A-Za-z]{2}[0-9]{2}\z/ };
            }
        }
    };
    ModifynewComponent.prototype.loadInforDefault = function () {
        this.arrColumns = [
            {
                name: 'columnSTT',
                value: 'valueSTT',
                class: 'center',
                height: "25px",
                title: "Số thứ tự",
                content: "1"
            },
            {
                name: 'name-1a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueMaHangHoa',
                class: 'name-1a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Mã hàng",
                content: "MH001"
            },
            {
                name: 'columnTenHangHoa',
                value: 'valueTenHangHoa',
                class: 'columnTenHangHoa',
                height: "25px",
                title: "Tên hàng hóa",
                content: "Hóa đơn điện tử"
            },
            {
                name: 'columnSoMay',
                value: 'valueSoMay',
                class: 'columnSoMay',
                height: "25px",
                title: "Số máy",
                content: "Q12P"
            },
            {
                name: 'columnSoKhung',
                value: 'valueSoKhung',
                class: 'columnSoKhung',
                height: "25px",
                title: "Số khung",
                content: "K123K"
            },
            {
                name: 'name-2a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueSolo',
                class: 'name-2a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Số lô",
                content: "SL001"
            },
            {
                name: 'name-3a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueHanDung',
                class: 'name-3a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Hạn dùng",
                content: "60 ngày"
            },
            {
                name: 'name-4a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueNuocSx',
                class: 'name-4a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Nước sản xuất",
                content: "Việt Nam"
            },
            {
                name: 'columnDonViTinh',
                value: 'valueDonViTinh',
                class: 'columnDonViTinh center',
                height: "25px",
                title: "Đơn vị tính",
                content: "Chiếc"
            },
            {
                name: 'columnSoLuong',
                value: 'valueSoLuong',
                class: 'columnSoLuong number-center',
                height: "25px",
                title: "Số lượng",
                content: "1"
            },
            {
                name: 'columnDonGia',
                value: 'valueDonGia',
                class: 'columnDonGia number',
                height: "25px",
                title: "Đơn giá",
                content: "1.000.000"
            },
            {
                name: 'columnTienCK',
                value: 'valueTienCK',
                class: 'number',
                height: "25px",
                title: "Tiền chiết khấu",
                content: ""
            },
            {
                name: 'columnThanhTienChuaCK',
                value: 'valueThanhTienChuaCK',
                class: 'number',
                height: "25px",
                title: "Thành tiền chưa chiết khấu",
                content: "1.000.000"
            },
            {
                name: 'columnThanhTien',
                value: 'valueThanhTien',
                class: 'number',
                height: "25px",
                title: "Thành tiền",
                content: "1.000.000"
            },
            {
                name: 'columnThueSuatGTGT',
                value: 'valueThueSuatGTGT',
                class: 'number-center',
                height: "25px",
                title: "Thuế suất GTGT",
                content: "0"
            },
            {
                name: 'columnTienThueGTGT',
                value: 'valueTienThueGTGT',
                class: 'number',
                height: "25px",
                title: "Tiền thuế GTGT",
                content: "0"
            },
            {
                name: 'columnThanhTienSauThue',
                value: 'valueThanhTienSauThue',
                class: 'number',
                height: "25px",
                title: "Thành tiền sau thuế",
                content: "1.000.000"
            },
            {
                name: 'columnMaSo',
                value: 'valueMaSo',
                class: 'columnMaSo',
                height: "25px",
                title: "Mã số",
                content: "MS001"
            },
            {
                name: 'columnThucXuat',
                value: 'valueThucXuat',
                class: 'number-center',
                height: "25px",
                title: "Thực xuất",
                content: "10"
            },
            {
                name: 'columnThucNhap',
                value: 'valueThucNhap',
                class: 'number-center',
                height: "25px",
                title: "Thực nhập",
                content: "10"
            },
            {
                name: 'columnThueKhac',
                value: 'valueThueKhac',
                class: 'number-center',
                height: "25px",
                title: "Thuế khác",
                content: "1.000.000"
            },
            {
                name: 'columnTenHanhTrinh',
                value: 'valueTenHanhTrinh',
                class: 'columnTenHanhTrinh',
                height: "25px",
                title: "Hành trình",
                content: "Hà Nội"
            },
            {
                name: 'columnPhiKhac',
                value: 'valuePhiKhac',
                class: 'number-center',
                height: "25px",
                title: "Phí khác",
                content: "1.000.000"
            },
            {
                name: 'name-5a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueDonHangHopDong',
                class: 'name-5a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Đơn hàng/ Hợp đồng",
                content: "OSGC-CT-2020"
            },
            {
                name: 'name-6a783984-576d-c322-7843-bdacf97ac189',
                value: 'valueMaQuanLy',
                class: 'name-6a783984-576d-c322-7843-bdacf97ac189',
                height: "25px",
                title: "Mã quản lý",
                content: "MQL-2020"
            },
            {
                name: 'columnDonGiaSauCK',
                value: 'valueDonGiaSauCK',
                class: 'number',
                height: "25px",
                title: "Đơn giá sau CK",
                content: "1.000.000"
            },
        ];
        this.optionsLogo =
            [
                { name: "Góc trên bên trái", code: "1" },
                { name: "Góc trên bên phải", code: "2" }
            ];
        this.sourceDataType =
            [
                { name: "Chữ", code: "chu" },
                { name: "Số lượng", code: "soluong" },
                { name: "Ngày", code: "ngay" },
            ];
        this.sourceWidthSize =
            [
                { name: "30%", code: "30" },
                { name: "50%", code: "50" },
                { name: "100%", code: "100" }
            ];
        this.optionsTextBox = [
            "Ảnh nền hóa đơn",
            "Chữ nền hóa đơn",
        ];
        this.dataSourceBenMua = [
            {
                code: "3a9f145a-549a-01ea-e507-cc7b0ab28a69",
                is_show: true,
                name: 'Hình thức thanh toán',
                data_type: 'chu',
                width: '50',
                type: '3',
            },
            {
                code: "d0f2a367-8ca8-006a-eb0c-cf3261f00a1c",
                is_show: true,
                name: 'Số tài khoản',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "e0f2a367-8ca8-006a-eb0c-cf3261f00a1c",
                is_show: false,
                name: 'Tỷ giá',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "f0f2a367-8ca8-006a-eb0c-cf3261f00a1c",
                is_show: false,
                name: 'Ghi chú',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "dia-chi-nnt",
                is_show: true,
                name: 'Địa chỉ hoặc điện thoại liên hệ',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "quoc-tich-nnt",
                is_show: true,
                name: 'Quốc tịch',
                data_type: 'chu',
                width: '100',
                type: '3',
            }
        ];
        this.fieldBuyerBLArray = [
            {
                code: "ten-don-vi-hoac-nguoi-nop-tien",
                is_show: true,
                name: 'Tên người nộp tiền',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "8d903984-576d-c322-7843-bdacf97ac100",
                is_show: false,
                name: 'Mã số thuế',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "7c103984-576d-c322-7843-bdacf97ac189",
                is_show: true,
                name: 'Địa chỉ',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "11111121-549a-01ea-e507-cc7b0ab28a69",
                is_show: false,
                name: 'Điện thoại',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "3a9f145a-549a-01ea-e507-cc7b0ab28a69",
                is_show: false,
                name: 'Hình thức thanh toán',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "f0f2a367-8ca8-006a-eb0c-cf3261f00999",
                is_show: false,
                name: 'Loại tiền',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "e0f2a367-8ca8-006a-eb0c-cf3261f00a1c",
                is_show: false,
                name: 'Tỷ giá',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
        ];
        this.ds_nguoi_mua_ve_the = [
            {
                code: "9c103984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Họ tên người mua hàng',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "8c103984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Tên đơn vị',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "8d903984-576d-c322-7843-bdacf97ac100",
                is_show: false,
                name: 'Mã số thuế',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "7c103984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Địa chỉ',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "8e31d4c8-40c2-11ee-be56-0242ac120002",
                is_show: false,
                name: 'Email',
                data_type: 'chu',
                width: '100',
                type: '3',
            },
            {
                code: "11111121-549a-01ea-e507-cc7b0ab28a69",
                is_show: false,
                name: 'Điện thoại',
                data_type: 'chu',
                width: '100',
                type: '3',
            }
        ];
        this.dataSource = [
            {
                code: "8e693984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Tên đơn vị',
                value: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ TIN HỌC EFY VIỆT NAM',
                width: '100',
                type: '1'
            },
            {
                code: "6e693984-576d-c322-7843-bdacf97ac189",
                is_show: true,
                name: 'Mã số thuế',
                value: '0102519041',
                width: '100',
                type: '1'
            },
            {
                code: "7e693984-576d-c322-7843-bdacf97ac189",
                is_show: true,
                name: 'Địa chỉ',
                value: 'Tầng 9 tòa nhà Sannam, số 78 phố Duy Tân, phường Dịch Vọng Hậu, quận Cầu Giấy, thành phố Hà Nội',
                width: '100',
                type: '1'
            },
            {
                code: "9f783984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Email',
                value: 'nguyena@gmail.com',
                width: '100',
                type: '1'
            },
            {
                code: "8f783984-576d-c322-7843-bdacf97ac189",
                is_show: true,
                name: 'Điện thoại',
                value: '0912417152',
                width: '100',
                type: '1'
            },
            {
                code: "7f783984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Website',
                value: 'efy.com.vn',
                width: '100',
                type: '1'
            },
            {
                code: "2db1350b-570c-0fa1-08fa-10e67f64c8c7",
                is_show: false,
                name: 'Fax',
                value: '',
                width: '100',
                type: '1'
            },
            {
                code: "1db1350b-570c-0fa1-08fa-10e67f64c8c7",
                is_show: true,
                name: 'Số tài khoản',
                value: '0105900192019',
                width: '100',
                type: '1'
            },
        ];
        this.dataSourceHangHoa = [
            {
                code: "1a783984-576d-c322-7843-bdacf97ac189",
                is_show: true,
                name: 'Mã hàng',
                type: '5'
            },
            {
                code: "2a783984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Số lô',
                type: '5'
            },
            {
                code: "3a783984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Hạn dùng',
                type: '5'
            },
            {
                code: "4a783984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Nước sản xuất',
                type: '5'
            },
            {
                code: "5a783984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Đơn hàng/Hợp đồng',
                type: '5'
            },
            {
                code: "6a783984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Mã quản lý',
                type: '5'
            },
        ];
        this.fieldProductBLArray = [
            {
                code: "columnDonViTinh",
                is_show: false,
                name: 'Đơn vị tính',
                type: '5'
            },
            {
                code: "columnSoLuong",
                is_show: false,
                name: 'Số lượng',
                type: '5'
            },
            {
                code: "columnDonGia",
                is_show: false,
                name: 'Đơn giá',
                type: '5'
            },
        ];
        this.ds_hang_hoa_dich_vu = [
            {
                code: "8l873098-576d-c322-7843-bdacf97ac100",
                is_show: true,
                name: 'Tên hàng hóa dịch vụ',
                type: _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].truong_trong_csdl.hang_hoa_hoa_don
            }
        ];
        this.dataSourceTNCN = [
            {
                code: "tien-dong-bao-hiem-nnt",
                is_show: true,
                name: 'Khoản đóng bảo hiểm bắt buộc',
                type: '5'
            },
            {
                code: "tien-chiu-thue-nnt",
                is_show: true,
                name: 'Thu nhập chịu thuế phải khấu trừ',
                type: '5'
            },
            {
                code: "tien-tinh-thue-nnt",
                is_show: true,
                name: 'Tổng thu nhập tính thuế',
                type: '5'
            },
            {
                code: "tien-thue-da-khau-tru-nnt",
                is_show: true,
                name: 'Số thuế thu nhập cá nhân đã khấu trừ',
                type: '5'
            },
            {
                code: "tien-thue-da-tra-nnt",
                is_show: true,
                name: 'Tổng thu nhập chịu thuế đã trả',
                type: '5'
            },
            {
                code: "tien-duoc-nhan-nnt",
                is_show: true,
                name: 'Số thuế thu nhập cá nhân còn được nhận',
                type: '5'
            },
        ];
        this.dataSourceUserTXN = [
            {
                code: "ten-txn",
                is_show: true,
                name: 'Họ và tên',
                type: '7'
            },
            {
                code: "chuc-vu-txn",
                is_show: true,
                name: 'Chức vụ',
                type: '7'
            },
            {
                code: "ngay-den-viet-nam-txn",
                is_show: true,
                name: 'Ngày đến Việt Nam',
                type: '7'
            },
        ];
        this.dataSourceTXN = [
            {
                code: "so-tien-txn",
                is_show: true,
                name: 'Thu nhập chịu thuế',
                type: '8'
            },
            {
                code: "so-tien-tai-viet-nam-txn",
                is_show: true,
                name: 'Số tiền chịu thuế tại VN',
                type: '8'
            },
            {
                code: "so-tien-tai-nuoc-ngoai-txn",
                is_show: true,
                name: 'Số tiền chịu thuế tại nước ngoài',
                type: '8'
            },
            {
                code: "cac-khoan-bi-tru-txn",
                is_show: true,
                name: 'Các khoản bị khấu trừ ngoài VN',
                type: '8'
            },
            {
                code: "thue-thu-nhap-ca-nhan-txn",
                is_show: true,
                name: 'Thuế thu nhập cá nhân',
                type: '8'
            },
            {
                code: "bao-hiem-xa-hoi-txn",
                is_show: true,
                name: 'Các khoản đóng bảo hiểm',
                type: '8'
            },
            {
                code: "khoan-khau-tru-khac-txn",
                is_show: true,
                name: 'Các khoản bị khấu trừ khác',
                type: '8'
            },
        ];
        this.dataSourceTXNOther = [
            {
                code: "tien-thue-nha-txn",
                is_show: true,
                name: 'Tiền thuê nhà',
                type: '8'
            }
        ];
        this.optionsPages =
            [
                { name: "Không lặp header ở các trang sau", code: "1" },
                { name: "Lặp header ở các trang sau", code: "0" }
            ];
        this.listNameImage = [
            {
                title: 'Có Nền trống đồng',
                name: 'efy_co_nen_trong_dong_xanh_tim',
                paperSize: [
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Doc
                ],
            },
            {
                title: 'Không nền viền xanh',
                name: 'efy_khong_nen_vien_hoa_xanh_tim',
                paperSize: [
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Doc
                ],
            },
            {
                title: 'Hoa sáu cánh xanh',
                name: 'efy_hoa_sau_canh_xanh',
                paperSize: [
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Doc
                ],
            },
            {
                title: 'Không viền sóng đen',
                name: 'efy_khong_vien_den_ne_song_den',
                paperSize: [
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Doc
                ],
            },
            {
                title: 'Không viền kẻ đen hoa tròn',
                name: 'efy_khong_vien_ke_den_hoa_tron',
                paperSize: [
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Doc
                ],
            },
            {
                title: 'Không viền sóng xanh',
                name: 'efy_khong_vien_song_xanh',
                paperSize: [
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Doc
                ],
            },
            {
                title: 'Hoa xanh sóng',
                name: 'efy_vien_ne_hoa_xanh_song',
                paperSize: [
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A4Doc
                ],
            },
            {
                title: 'Không viền mệnh hỏa',
                name: 'efy_khong_vien_menh_hoa',
                paperSize: [],
            },
            {
                title: 'Không viền nền trống đồng',
                name: 'efy_khong_vien_nen_trong_dong',
                paperSize: [],
            },
            {
                title: 'Phong thủy mệnh kim',
                name: 'efy_mau_phong_thuy_manh_kim',
                paperSize: [],
            },
            {
                title: 'Phong thủy mệnh hỏa',
                name: 'efy_mau_phong_thuy_menh_hoa',
                paperSize: [],
            },
            {
                title: 'Phong thủy mệnh mộc',
                name: 'efy_mau_phong_thuy_menh_moc',
                paperSize: [],
            },
            {
                title: 'Phong thủy mệnh thổ',
                name: 'efy_mau_phong_thuy_menh_tho',
                paperSize: [],
            },
            {
                title: 'Phong thủy mệnh thủy',
                name: 'efy_mau_phong_thuy_menh_thuy',
                paperSize: [],
            },
            {
                title: 'Nền hoa đỏ',
                name: 'efy_vien_có_nen_hoa_do',
                paperSize: [],
            },
            {
                title: 'Viền đậm hoa đỏ',
                name: 'efy_vien_dam_hoa_do',
                paperSize: [],
            },
            {
                title: 'Viền hoa văn đỏ',
                name: 'efy_vien_hoa_van_do',
                paperSize: [],
            },
            {
                title: 'Viền hoa văn xanh dương',
                name: 'efy_vien_hoa_van_xanh_duong',
                paperSize: [],
            },
            {
                title: 'Viền kẻ đỏ',
                name: 'efy_vien_ke_do',
                paperSize: [],
            },
            {
                title: 'Viền kẻ xanh lá',
                name: 'efy_vien_ke_xanh_la',
                paperSize: [],
            },
            {
                title: 'Viền khung kẻ đen',
                name: 'efy_vien_khung_ke_den_bao_trum',
                paperSize: [],
            },
            {
                title: 'Viền trống đồng xanh dương',
                name: 'efy_viên_trong_dong_xanh_duong',
                paperSize: [],
            },
            {
                title: 'Viền xanh dương kẻ',
                name: 'efy_vien_xanh_duong_ke',
                paperSize: [],
            },
            {
                title: 'Viền xanh lá hoa văn',
                name: 'efy_vien_xanh_la_hoa_van',
                paperSize: [],
            },
            {
                title: 'Có Nền trống đồng',
                name: 'efy_vien_xanh tim_trong dong',
                paperSize: [
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].paperSizes.A5Ngang
                ],
            },
        ];
        this.datasourceFont = [
            "Times New Roman",
            "Arial",
            "Calibri",
            "Open Sans",
            "Georgia",
            "Verdana",
        ];
        this.datasourceMauHD = [
            "Mẫu gốc",
            "Mẫu chuyển đổi",
            "Dữ liệu mẫu",
        ];
        this.itemsTypeDisplay = [
            "/",
            "x",
        ];
        this.watermark_text_directions = [
            {
                name: 'Ngang',
                value: 'Horizontal'
            },
            {
                name: 'Dọc',
                value: 'Vertical'
            },
            {
                name: 'Chéo',
                value: 'ForwardDiagonal'
            },
            {
                name: 'Dọc ngược',
                value: 'BackwardDiagonal'
            },
        ];
        this.arrayExtendBuyer = [
            {
                code: "11111120-549a-01ea-e507-cc7b0ab28a69",
                is_show: true,
                name: 'Mã khách hàng',
                data_type: 'chu',
                width: '50',
                type: '3',
            }
        ];
        this.arrThuXacNhan = ['8e693984-576d-c322-7843-bdacf97ac18911', '6a64d8cd-f916-4645-9681-44135d8f60b7', 'ten-txn', 'chuc-vu-txn', '30b8f1ad-377e-43da-b1b3-783dd9a62dd4', 'ngay-den-viet-nam-txn', 'thu-nhap-chiu-thue-txn',
            'so-tien-txn', '14d8d4a9-b17c-4287-b5f6-87f5069d0812', 'so-tien-tai-viet-nam-txn', 'so-tien-tai-nuoc-ngoai-txn', 'cac-khoan-bi-tru-txn', 'thue-thu-nhap-ca-nhan-txn', 'bao-hiem-xa-hoi-txn', 'khoan-khau-tru-khac-txn', 'tien-thue-nha-txn'];
        this.cusorFieldArray = [
            'ten-don-vi-hoac-nguoi-nop-tien',
            'ten-loai-phi-le-phi',
            'total-payment',
            '1h883984-576d-c322-7843-bdacf97ac189'
        ];
    };
    ModifynewComponent.prototype.getKyTuMauSo = function () {
        var firstCharTemplace = "01";
        if (this.frmData.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.BienLaiInSanMenhGia)
            firstCharTemplace = "02";
        return firstCharTemplace + this.invoice_type;
    };
    ModifynewComponent.prototype.getTextForm = function () {
        this.text_guide_grid = this._translate.CONTROLL.LABEL.click_content_on_invoice;
        this.title_form = this._translate.THONG_TIN.thiet_lap_mau_hoa_don;
        this.tieu_de_hhdv = this._translate.THONG_TIN.bo_sung_thong_tin_hang_hoa_dich_vu;
        if (this.isChungTuTNCN) {
            if (this.isThuXacNhan) {
                this.titleTemptInfoBB = this._translate.CONTROLL.LABEL.add_information_taxpayer;
                this.titleTemptInfo = 'Thông tin khác';
                this.lblMauHD = "Mẫu thư xác nhận";
            }
            else {
                this.titleTemptInfoBB = this._translate.CONTROLL.LABEL.add_information_organization;
                this.titleTemptInfo = this._translate.CONTROLL.LABEL.add_information_taxpayer;
                this.lblMauHD = this._translate.MENU.voucher_form;
            }
        }
        else if (this.isPhieuThuHS) {
            this.titleTemptInfoBB = 'Bổ sung thông tin đơn vị thu tiền';
            this.titleTemptInfo = this._translate.THONG_TIN.bo_sung_thong_tin_nguoi_nop_tien;
            this.lblMauHD = "Mẫu phiếu thu";
        }
        else if (this.isBienLaiDienTu) {
            this.title_form = this._translate.THONG_TIN.thiet_lap_mau_bien_lai;
            this.titleTemptInfoBB = this._translate.THONG_TIN.bo_sung_thong_tin_don_vi_thu_tien;
            this.text_guide_grid = this._translate.THONG_TIN.click_chuot_mau_bien_lai;
            this.titleTemptInfo = this._translate.THONG_TIN.bo_sung_thong_tin_nguoi_nop_tien;
        }
        else {
            this.titleTemptInfoBB = this._translate.CONTROLL.LABEL.add_information_seller;
            this.titleTemptInfo = this._translate.CONTROLL.LABEL.add_information_buyer;
            this.lblMauHD = this._translate.MENU.invoice_form;
        }
    };
    ModifynewComponent.prototype.RemoveElementFromObjectArray = function (arrKey, arrItem) {
        arrItem = arrItem.filter(function (item1) { return !arrKey.some(function (item2) { return item2 === item1.code; }); });
        return arrItem;
    };
    ModifynewComponent.prototype.setPropertyName = function (code, propertyName, newValue, items) {
        var item = items.find(function (item) { return item.code === code; });
        if (item) {
            item[propertyName] = newValue;
        }
        console.log(this.items);
    };
    ModifynewComponent.prototype.changeDataSource = function () {
        if (this.isBienLaiDienTu) {
            var arrKey = ['7f783984-576d-c322-7843-bdacf97ac189', '2db1350b-570c-0fa1-08fa-10e67f64c8c7', '1db1350b-570c-0fa1-08fa-10e67f64c8c7'];
            this.dataSource = this.RemoveElementFromObjectArray(arrKey, this.dataSource);
            this.setPropertyName('8f783984-576d-c322-7843-bdacf97ac189', 'is_show', false, this.dataSource);
            this.dataSourceBenMua = this.fieldBuyerBLArray;
            if (this.frmData.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.BienLaiInSanMenhGia)
                this.dataSourceBenMua = this.dataSourceBenMua.filter(function (p) { return p.code == '3a9f145a-549a-01ea-e507-cc7b0ab28a69' || p.code == 'f0f2a367-8ca8-006a-eb0c-cf3261f00999' || p.code == 'e0f2a367-8ca8-006a-eb0c-cf3261f00a1c'; });
            this.dataSourceHangHoa = this.fieldProductBLArray;
        }
    };
    ModifynewComponent.prototype.hien_thi_bang_hh = function () {
        if (!this.isChungTuTNCN && !this.isPhieuThuHS && !this.isPhieuTinhTien && !this.hideRow && !this.isTemVeThe)
            return true;
        return false;
    };
    ModifynewComponent.prototype.hien_thi_mau_vien_bang_hh = function () {
        if (!this.isChungTuTNCN && !this.isPhieuThuHS && !this.hideRow)
            return true;
        return false;
    };
    ModifynewComponent.prototype.hien_thi_nhieu_trang = function () {
        if (!this.isChungTuTNCN && !this.isPhieuThuHS && !this.isBienLaiDienTu && !this.isTemVeThe)
            return true;
        return false;
    };
    ModifynewComponent.prototype.hien_thi_ban_the_hien = function () {
        if (!this.isChungTuTNCN && !this.isPhieuThuHS && !this.isPhieuTinhTien && !this.isBienLaiDienTu && !this.isTemVeThe)
            return true;
        return false;
    };
    ModifynewComponent.prototype.hien_thi_so_dong_hang_hoa = function () {
        if (!this.hideRow && !this.isPhieuTinhTien && !this.isTemVeThe)
            return true;
        return false;
    };
    ModifynewComponent.prototype.hien_thi_loai_phi = function () {
        if (this.isBienLaiDienTu && this.frmData.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.BienLaiInSanMenhGia)
            return true;
        return false;
    };
    ModifynewComponent.prototype.getProducts = function () {
        var _this = this;
        if (this.isBienLaiDienTu && this.frmData.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.BienLaiInSanMenhGia) {
            // tìm kiếm mã số thuế
            this.feeArray = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_13___default.a({
                load: function (loadOptions) {
                    return _this.templateService.getDataSourceForm(loadOptions.searchValue, 'code');
                }
            });
        }
    };
    ModifynewComponent.prototype.feeChoose = function (e) {
        var oFee = e.itemData;
        this.fee_name = oFee.name;
        this.fee_money = oFee.price;
    };
    ModifynewComponent.prototype.isInvoiceTypeNotDependTT78 = function () {
        if (this.isChungTuTNCN || this.isPhieuThuHS || this.isThuXacNhan || this.isBienLaiDienTu)
            return true;
        return false;
    };
    ModifynewComponent.prototype.customInforBenMua = function () {
        if (this.isChungTuTNCN) {
            this.dataSourceBenMua = this.dataSourceBenMua.filter(function (p) { return p.code == "quoc-tich-nnt" || p.code == "dia-chi-nnt"; });
            if (this.isThuXacNhan) {
                this.dataSourceBenMua = [];
                var tien_thue_nha = {
                    code: "tien-thue-nha-txn",
                    is_show: true,
                    name: 'Tiền thuê nhà',
                    data_type: 'chu',
                    width: '100',
                    type: '3',
                };
                this.dataSourceBenMua.push(tien_thue_nha);
            }
        }
        else if (this.isPhieuThuHS) {
            this.dataSourceBenMua = this.dataSourceBenMua.filter(function (p) { return p.code != "quoc-tich-nnt" && p.code != "dia-chi-nnt"; });
            this.dataSourceBenMua.forEach(function (item) {
                if (item.code == "d0f2a367-8ca8-006a-eb0c-cf3261f00a1c" || item.code == "3a9f145a-549a-01ea-e507-cc7b0ab28a69")
                    item.is_show = false;
            });
        }
        else if (this.isPhieuTinhTien) {
            this.dataSourceBenMua = [];
            var cccd = {
                code: "86679804-89b9-42e3-b173-9059da407f64",
                is_show: false,
                name: 'Căn cước công dân',
                data_type: 'chu',
                width: '100',
                type: '3',
            };
            this.dataSourceBenMua.push(cccd);
        }
        else {
            this.dataSourceBenMua = this.dataSourceBenMua.filter(function (p) { return p.code != "quoc-tich-nnt" && p.code != "dia-chi-nnt"; });
        }
        if (this.isMayTinhTien) {
            var cccd = {
                code: "925b5412-03a6-4544-83ad-c22567faddb8",
                is_show: false,
                name: 'Căn cước công dân',
                data_type: 'chu',
                width: '100',
                type: '3',
            };
            var sdt = {
                code: "11111121-549a-01ea-e507-cc7b0ab28a69",
                is_show: false,
                name: 'Số điện thoại',
                data_type: 'chu',
                width: '100',
                type: '3',
            };
            var dia_chi = {
                code: "7c103984-576d-c322-7843-bdacf97ac189",
                is_show: false,
                name: 'Địa chỉ',
                data_type: 'chu',
                width: '100',
                type: '3',
            };
            this.dataSourceBenMua.push(dia_chi);
            this.dataSourceBenMua.push(sdt);
            this.dataSourceBenMua.push(cccd);
            this.dataSourceBenMua.forEach(function (item) {
                if (item.code == "3a9f145a-549a-01ea-e507-cc7b0ab28a69" || item.code == "d0f2a367-8ca8-006a-eb0c-cf3261f00a1c")
                    item.is_show = false;
            });
            this.dataSourceBenMua = this.dataSourceBenMua.filter(function (p) { return p.code != "e0f2a367-8ca8-006a-eb0c-cf3261f00a1c"; });
        }
        if (this.isTemVeThe) {
            this.dataSourceBenMua = this.ds_nguoi_mua_ve_the;
        }
        if (this.isBienLaiDienTu) {
            this.dataSourceBenMua = this.fieldBuyerBLArray;
            if (this.frmData.template_type == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].templatetype.BienLaiInSanMenhGia)
                this.dataSourceBenMua = this.dataSourceBenMua.filter(function (p) { return p.code == '3a9f145a-549a-01ea-e507-cc7b0ab28a69' || p.code == 'f0f2a367-8ca8-006a-eb0c-cf3261f00999' || p.code == 'e0f2a367-8ca8-006a-eb0c-cf3261f00a1c'; });
        }
    };
    ModifynewComponent.prototype.customInforBenBan = function (account) {
        /*
          8e693984-576d-c322-7843-bdacf97ac189: Tên đơn vị
          6e693984-576d-c322-7843-bdacf97ac189: Mã số thuế
          7e693984-576d-c322-7843-bdacf97ac189: Địa chỉ
          9f783984-576d-c322-7843-bdacf97ac189: Email
          8f783984-576d-c322-7843-bdacf97ac189: Điện thoại
          7f783984-576d-c322-7843-bdacf97ac189: Website
          2db1350b-570c-0fa1-08fa-10e67f64c8c7: Fax
          1db1350b-570c-0fa1-08fa-10e67f64c8c7: Số tài khoản
         */
        if (this.isChungTuTNCN) {
            this.dataSource = this.dataSource.filter(function (p) { return p.code != "9f783984-576d-c322-7843-bdacf97ac189" && p.code != "7f783984-576d-c322-7843-bdacf97ac189"
                && p.code != "2db1350b-570c-0fa1-08fa-10e67f64c8c7" && p.code != "1db1350b-570c-0fa1-08fa-10e67f64c8c7"; });
        }
        else if (this.isPhieuThuHS) {
            this.dataSource = this.dataSource.filter(function (p) { return p.code != "7f783984-576d-c322-7843-bdacf97ac189" && p.code != "2db1350b-570c-0fa1-08fa-10e67f64c8c7"
                && p.code != "1db1350b-570c-0fa1-08fa-10e67f64c8c7"; });
            this.dataSource.forEach(function (item) {
                if (item.code == "7e693984-576d-c322-7843-bdacf97ac189" || item.code == "8f783984-576d-c322-7843-bdacf97ac189")
                    item.is_show = false;
            });
        }
        else if (this.isPhieuTinhTien) {
            this.dataSource = this.dataSource.filter(function (p) { return p.code != "9f783984-576d-c322-7843-bdacf97ac189" && p.code != "8f783984-576d-c322-7843-bdacf97ac189"
                && p.code != "7f783984-576d-c322-7843-bdacf97ac189" && p.code != "2db1350b-570c-0fa1-08fa-10e67f64c8c7" && p.code != "1db1350b-570c-0fa1-08fa-10e67f64c8c7"; });
        }
        if (this.isMayTinhTien) {
            this.dataSource.forEach(function (item) {
                if (item.code == "1db1350b-570c-0fa1-08fa-10e67f64c8c7")
                    item.is_show = false;
            });
        }
        //preview
        this.dataSource.forEach(function (item) {
            switch (item.code) {
                case "8e693984-576d-c322-7843-bdacf97ac189":
                    item.value = account.name;
                    break;
                case "7e693984-576d-c322-7843-bdacf97ac189":
                    item.value = account.business_address;
                    break;
                case "6e693984-576d-c322-7843-bdacf97ac189":
                    item.value = account.tax_code;
                    break;
                case "9f783984-576d-c322-7843-bdacf97ac189":
                    item.value = account.email;
                    break;
                case "8f783984-576d-c322-7843-bdacf97ac189":
                    item.value = account.phone;
                    break;
                case "7f783984-576d-c322-7843-bdacf97ac189":
                    item.value = account.website;
                    break;
                case "2db1350b-570c-0fa1-08fa-10e67f64c8c7":
                    item.value = account.fax;
                    break;
                case "1db1350b-570c-0fa1-08fa-10e67f64c8c7":
                    item.value = account.bank_name;
                    break;
            }
        });
        if (this.isBienLaiDienTu || this.isTemVeThe) {
            var arrKey = ['7f783984-576d-c322-7843-bdacf97ac189', '2db1350b-570c-0fa1-08fa-10e67f64c8c7', '1db1350b-570c-0fa1-08fa-10e67f64c8c7'];
            this.dataSource = this.RemoveElementFromObjectArray(arrKey, this.dataSource);
            this.setPropertyName('8f783984-576d-c322-7843-bdacf97ac189', 'is_show', false, this.dataSource);
            if (this.isTemVeThe) {
                var nguoi_xuat_ve = {
                    code: "a188b9ae-40c4-11ee-be56-0242ac120002",
                    is_show: false,
                    name: 'Người xuất vé',
                    data_type: 'chu',
                    width: '100',
                    type: '1',
                };
                var chu_ky_so = {
                    code: "ky-so-ben-ban",
                    is_show: false,
                    name: 'Chữ ký số:',
                    data_type: 'chu',
                    width: '100',
                    type: '1',
                };
                var ma_qr_code = {
                    code: "ma-qr-code",
                    is_show: true,
                    name: 'QR code:',
                    data_type: 'chu',
                    width: '100',
                    type: '1',
                };
                this.dataSource.push(nguoi_xuat_ve);
                this.dataSource.push(chu_ky_so);
                this.dataSource.push(ma_qr_code);
            }
        }
    };
    ModifynewComponent.prototype.customInforHangHoa = function () {
        var _this = this;
        //////// Nếu không phải mẫu phi thuế quan thì bỏ mã quản lý đi
        if (this.invoice_type != "07KPTQ") {
            this.dataSourceHangHoa.forEach(function (column, index) {
                if (column.code == "6a783984-576d-c322-7843-bdacf97ac189")
                    delete _this.dataSourceHangHoa[index];
            });
        }
        if (this.isBienLaiDienTu) {
            this.dataSourceHangHoa = this.fieldProductBLArray;
        }
    };
    ModifynewComponent.prototype.hien_thi_danh_sach_hh = function () {
        if (this.isTemVeThe)
            return true;
        return false;
    };
    ModifynewComponent.prototype.hien_thi_anh_vien = function () {
        if (this.isPhieuTinhTien || this.isTemVeThe)
            return false;
        return true;
    };
    ModifynewComponent.prototype.thay_doi_kich_thuoc_logo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var base64, width, height, img, base64data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base64 = $("#preview-iframe").contents().find(".logo-company-left").find(".logo-company").css('background-image').replace("url(\"", "").replace("\")", "");
                        width = $('#preview-iframe').contents().find(".logo-company-left").find(".logo-company").width();
                        height = $('#preview-iframe').contents().find(".logo-company-left").find(".logo-company").height();
                        img = new Image();
                        img.height = width;
                        img.width = height;
                        if (base64 == 'none')
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.getBase64ImageFromURL(base64, img).toPromise().then(function (base64data) {
                                $('#preview-iframe').contents().find(".logo-company-left").find(".logo-company").css('background-image', 'url(data:image/' + _this.extention + ';base64,' + base64data + ')');
                                $('#preview-iframe').contents().find(".logo-company-right").find(".logo-company").css('background-image', 'url(data:image/' + _this.extention + ';base64,' + base64data + ')');
                                return base64data;
                            })];
                    case 1:
                        base64data = _a.sent();
                        return [2 /*return*/, base64data];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormComponent"])
    ], ModifynewComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("eventRadioGroup"),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxRadioGroupComponent"])
    ], ModifynewComponent.prototype, "eventRadioGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopupComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopupComponent"])
    ], ModifynewComponent.prototype, "popup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopoverComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopoverComponent"])
    ], ModifynewComponent.prototype, "popOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframeTempt'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModifynewComponent.prototype, "iframeTempt", void 0);
    ModifynewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modifynew',
            template: __webpack_require__(/*! ./modifynew.component.html */ "./src/app/modules/template/components/modifynew/modifynew.component.html"),
            styles: [__webpack_require__(/*! ./modifynew.component.scss */ "./src/app/modules/template/components/modifynew/modifynew.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__["TemplateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ModifynewComponent);
    return ModifynewComponent;
}());



/***/ }),

/***/ "./src/app/modules/template/template.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/template/template.module.ts ***!
  \*****************************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _template_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template.routing */ "./src/app/modules/template/template.routing.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/index */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/template/components/index/index.component.ts");
/* harmony import */ var _components_init_init_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/init/init.component */ "./src/app/modules/template/components/init/init.component.ts");
/* harmony import */ var _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modify/modify.component */ "./src/app/modules/template/components/modify/modify.component.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _components_modifynew_modifynew_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modifynew/modifynew.component */ "./src/app/modules/template/components/modifynew/modifynew.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var _components_bill_cash_register_bill_cash_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/bill-cash-register/bill-cash-register.component */ "./src/app/modules/template/components/bill-cash-register/bill-cash-register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//library

//general













var TemplateModule = /** @class */ (function () {
    function TemplateModule() {
    }
    TemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _template_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _core_index__WEBPACK_IMPORTED_MODULE_2__["devextremeModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_9__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxColorBoxModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxPopoverModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxScrollViewModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _components_init_init_component__WEBPACK_IMPORTED_MODULE_7__["InitComponent"],
                _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_8__["ModifyComponent"],
                _components_modifynew_modifynew_component__WEBPACK_IMPORTED_MODULE_10__["ModifynewComponent"],
                _components_bill_cash_register_bill_cash_register_component__WEBPACK_IMPORTED_MODULE_14__["BillCashRegisterComponent"],
            ],
            entryComponents: [
                _components_bill_cash_register_bill_cash_register_component__WEBPACK_IMPORTED_MODULE_14__["BillCashRegisterComponent"],
            ],
            providers: [_shared_index__WEBPACK_IMPORTED_MODULE_4__["TemplateService"], _shared_index__WEBPACK_IMPORTED_MODULE_4__["TemplateDetailResolver"], _shared_index__WEBPACK_IMPORTED_MODULE_4__["InitResolver"], _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_13__["NotifyService"]]
        })
    ], TemplateModule);
    return TemplateModule;
}());



/***/ }),

/***/ "./src/app/modules/template/template.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/template/template.routing.ts ***!
  \******************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/template/components/index/index.component.ts");
/* harmony import */ var _components_init_init_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/init/init.component */ "./src/app/modules/template/components/init/init.component.ts");
/* harmony import */ var _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modify/modify.component */ "./src/app/modules/template/components/modify/modify.component.ts");
/* harmony import */ var _components_modifynew_modifynew_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modifynew/modifynew.component */ "./src/app/modules/template/components/modifynew/modifynew.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "./src/app/modules/template/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var custom_template_brec = [
    {
        label: { brec: "Mẫu hóa đơn" },
        url: "/system/template"
    },
    {
        label: { brec: "Chọn mẫu" },
        url: "/system/template/init"
    },
    {
        label: { brec: "Tạo và chỉnh sửa" },
        url: ""
    },
];
var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: 'init', component: _components_init_init_component__WEBPACK_IMPORTED_MODULE_3__["InitComponent"], resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_6__["InitResolver"] }, data: { brec: 'Chọn mẫu' } },
    { path: 'old', component: _components_modify_modify_component__WEBPACK_IMPORTED_MODULE_4__["ModifyComponent"], resolve: { template: _shared__WEBPACK_IMPORTED_MODULE_6__["TemplateDetailResolver"] }, data: {
            brec: 'Tạo và chỉnh sửa',
            custom_brec: custom_template_brec
        } },
    { path: 'new', component: _components_modifynew_modifynew_component__WEBPACK_IMPORTED_MODULE_5__["ModifynewComponent"], resolve: { template: _shared__WEBPACK_IMPORTED_MODULE_6__["TemplateDetailResolver"] }, data: {
            brec: 'Tạo và chỉnh sửa',
            custom_brec: custom_template_brec
        } },
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
//# sourceMappingURL=template-template-module.js.map