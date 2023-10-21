(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-data-tax-send-data-tax-module"],{

/***/ "./src/app/modules/send-data-tax/components/add-new-data/add-new-data.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/send-data-tax/components/add-new-data/add-new-data.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{ _translate.MENU.choose_send_data_for_tax }}</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 bang-tong-hop\">\r\n      <dx-form [formData]=\"frmData\">\r\n          <!-- Loại kỳ dữ liệu -->\r\n          <dxi-item cssClass=\"hinh-thuc-hoa-don\" itemType=\"group\" [colCount]=\"1\" style=\"display: flex;\">\r\n            <div style=\"margin-right: 8px;\">{{_translate.CONTROLL.LABEL.data_period_type}}:</div>\r\n            <dxi-item class=\"radioLoaiKyDuLieu\">\r\n              <dx-radio-group [dataSource]=\"loaikydulieu\" displayExpr=\"name\" valueExpr=\"code\" layout=\"horizontal\"\r\n                [(value)]=\"frmData.period_type\" (onValueChanged)=\"changeDateTime($event)\">\r\n                  <!-- <div class=\"radio\" style=\"margin-right:42px\" *dxTemplate=\"let data of 'radio'\">\r\n                     <p><b>{{data.name}}</b></p>\r\n                  </div> -->\r\n              </dx-radio-group>\r\n            </dxi-item>\r\n          </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\" style=\"display: flex;\" class=\"p-ky-du-lieu\">\r\n              <!-- Kỳ dữ liệu   -->\r\n              <dxi-item dataField=\"period\" editorType=\"dxDateBox\" [cssClass]=\"'ky-du-lieu'\" [editorOptions]=\"{useMaskBehavior:true, onValueChanged: periodChange, displayFormat: formatTime, dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss'}\">\r\n                <dxo-label style=\"margin-right: 26px;\" text=\"{{_translate.CONTROLL.LABEL.data_period}}\"></dxo-label>\r\n              </dxi-item>\r\n            </dxi-item>\r\n          <!-- Lần gửi -->\r\n          <dxi-item cssClass=\"hinh-thuc-hoa-don\" itemType=\"group\" [colCount]=\"1\" style=\"display: flex;\">\r\n            <div style=\"margin-right: 8px; width: 92px; text-align: right;\">{{_translate.CONTROLL.LABEL.number_send}}:</div>\r\n            <dxi-item class=\"radioLanGui\">\r\n              <dx-radio-group  [dataSource]=\"langui\" [(value)]=\"radLanGui\" [readOnly] = \"true\" displayExpr=\"name\" valueExpr=\"code\" layout=\"horizontal\" (onValueChanged)=\"changedlangui($event)\">\r\n              </dx-radio-group>\r\n            </dxi-item>\r\n            <div class=\"input-lan-gui dx-field-item-content dx-field-item-content-location-right\">\r\n              <div class=\"dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-widget\">\r\n                <div class=\"dx-texteditor-container\">\r\n                  <div class=\"dx-texteditor-input-container\">\r\n                    <input autocomplete=\"off\"\r\n                           class=\"dx-texteditor-input\"\r\n                           type=\"number\"\r\n                           [ngModel]=\"frmData.number\"\r\n                           min=\"1\"\r\n                           (change)=\"inputChange($event)\"\r\n                           maxlength=\"2\"\r\n                           tabindex=\"0\"\r\n                           readonly = \"true\"\r\n                           role=\"textbox\">\r\n                    <div data-dx_placeholder=\"\" class=\"dx-placeholder dx-state-invisible\"></div>\r\n                  </div>\r\n                  <div class=\"dx-texteditor-buttons-container\">\r\n                    <div></div>\r\n                  </div>      \r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <dx-text-box [(value)]=\"frmData.number\" style=\"width: 32px;margin-left: -17px;\">\r\n              \r\n            </dx-text-box> -->\r\n          </dxi-item>\r\n          \r\n          <!-- Loại hàng hóa -->\r\n          <dxi-item cssClass=\"hinh-thuc-hoa-don\" itemType=\"group\" [colCount]=\"1\" style=\"display: flex;\">\r\n            <div style=\"margin-right: 8px; width: 91px; margin-left: 2px\">{{_translate.CONTROLL.LABEL.commodity_type}}:</div>\r\n            <dxi-item class=\"radioInvForm\">\r\n              <dx-radio-group [(value)]=\"frmData.product_type\"  [dataSource]=\"loaihanghoa\" displayExpr=\"name\" valueExpr=\"code\" layout=\"horizontal\">\r\n              </dx-radio-group>\r\n            </dxi-item>\r\n          </dxi-item>\r\n      </dx-form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\" style=\"height: 50px;\">\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.automatically_get_data}}\" type=\"default\" (click)=\"TuLayDuLieu()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.selt_entering_data}}\" type=\"default\" (click)=\"TuNhapDuLieu()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.close}}\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/send-data-tax/components/add-new-data/add-new-data.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/send-data-tax/components/add-new-data/add-new-data.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-radiogroup .dx-radiobutton-icon:before{width:16px;height:16px}::ng-deep .dx-radiogroup .dx-radiobutton-icon-checked .dx-radiobutton-icon-dot{margin-top:-14px;margin-left:4px}.checkData{color:red;font-weight:bold}::ng-deep .ky-du-lieu .dx-field-item-label-content{width:92px !important}::ng-deep .radioLanGui .dx-radiogroup-horizontal .dx-radiobutton{margin-right:26px}::ng-deep .radioLoaiKyDuLieu .dx-radiogroup-horizontal .dx-radiobutton{margin-right:39px}::ng-deep .input-lan-gui .dx-texteditor{width:100px}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/send-data-tax/components/add-new-data/add-new-data.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/send-data-tax/components/add-new-data/add-new-data.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddNewDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewDataComponent", function() { return AddNewDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_send_data_tax_shared_send_data_tax_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/send-data-tax/shared/send-data-tax.service */ "./src/app/modules/send-data-tax/shared/send-data-tax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddNewDataComponent = /** @class */ (function () {
    function AddNewDataComponent(authService, bsModalRef, modalService, taxService, router, translate, route) {
        var _this = this;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.taxService = taxService;
        this.router = router;
        this.translate = translate;
        this.route = route;
        this.formatTime = "dd/MM/yyyy";
        this.frmData = {
            period_type: '',
            period: '',
            number: null,
            product_type: null
        };
        this.loaikydulieu = [
            { name: "Ngày", code: 'N' },
            { name: "Tháng", code: 'T' },
            { name: "Quý", code: 'Q' },
        ];
        this.langui = [
            { name: "Lần đầu", code: '0' },
            { name: "Bổ sung lần thứ", code: '1' },
        ];
        this.loaihanghoa = [
            { name: "Xăng dầu", code: 1 },
            { name: "Vận tải hàng không", code: 2 },
            { name: "Khác", code: 9 },
        ];
        this.periodChange = function (e) {
            var kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__(e.value).format("DD/MM/YYYY");
            if (_this.frmData.period_type == "Q" || _this.frmData.period_type == "T")
                kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__(_this.frmData.period).format("MM/YYYY");
            var data = {
                is_last: false,
                period_type: _this.frmData.period_type,
                period: kydulieu
            };
            _this.getInforSum(data);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    AddNewDataComponent.prototype.ngOnInit = function () {
        this.frmData.period_type = this.period_type;
        switch (this.period_type) {
            case "T":
                this.formatTime = "MM/yyyy";
                break;
            case "Q":
                this.formatTime = "MM/yyyy";
                break;
            case "N":
                this.formatTime = "dd/MM/yyyy";
                break;
        }
        this.frmData.period = this._getKyDuLieu(this.frmData.period_type);
        if (this.is_create_first) {
            this.frmData.product_type = 9;
            this.frmData.number = 1;
            this.radLanGui = '0';
        }
        else {
            this.radLanGui = '1';
            var kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__(this.frmData.period).format("DD/MM/YYYY");
            if (this.frmData.period_type == "Q" || this.frmData.period_type == "T")
                kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__(this.frmData.period).format("MM/YYYY");
            var data = {
                is_last: false,
                period_type: this.frmData.period_type,
                period: kydulieu
            };
            this.getInforSum(data);
        }
        // this.loadVat();
    };
    AddNewDataComponent.prototype.inputChange = function ($event) {
        // if ($event.srcElement.name === 'count_date') {
        //   this.configs.count_date = $event.srcElement.valueAsNumber;
        // }
    };
    AddNewDataComponent.prototype.getInforSum = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var sub = this.taxService.getInfoCreate(data).subscribe(function (rs) {
            if (rs.status == "success") {
                if (rs.data && rs.data.id) {
                    _this.frmData.number = rs.data.send_number ? parseInt(rs.data.send_number) + 1 : null;
                    _this.frmData.product_type = parseInt(rs.data.product_type);
                    _this.radLanGui = '1';
                }
                else {
                    _this.radLanGui = '0';
                    _this.frmData.number = 1;
                    _this.frmData.product_type = 9;
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(rs.message, "error", 5000);
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    AddNewDataComponent.prototype.changeDateTime = function (e) {
        if (e.value == "T" || e.value == "Q") {
            this.formatTime = "MM/yyyy";
        }
        else
            this.formatTime = "dd/MM/yyyy";
        this.frmData.period = this._getKyDuLieu(e.value);
    };
    AddNewDataComponent.prototype.dong = function () {
        this.bsModalRef.hide();
    };
    AddNewDataComponent.prototype.changedlangui = function (e) {
        if (e.value == "0") {
            this.isLanDau = true;
            this.frmData.number = null;
        }
        else {
            this.isLanDau = false;
        }
    };
    AddNewDataComponent.prototype._getKyDuLieu = function (reportPeriod) {
        var kydulieu;
        var date = moment__WEBPACK_IMPORTED_MODULE_6__();
        var year = date.year();
        var month = date.month() < 12 ? date.month() + 1 : 1;
        if (reportPeriod == "Q") {
            if (month >= 1 && month <= 3)
                kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__(_core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].processDate("01/" + "01" + "/" + year)).format('YYYY-MM-DD HH:mm:ss'); //"01" + "/" + year;
            else if (month >= 4 && month <= 6)
                kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__(_core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].processDate("01/" + "02" + "/" + year)).format('YYYY-MM-DD HH:mm:ss'); //"02" + "/" + year;
            else if (month >= 7 && month <= 9)
                kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__(_core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].processDate("01/" + "03" + "/" + year)).format('YYYY-MM-DD HH:mm:ss'); //"03" + "/" + year;
            else if (month >= 10 && month <= 12)
                kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__(_core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].processDate("01/" + "04" + "/" + year)).format('YYYY-MM-DD HH:mm:ss'); //"04" + "/" + year;
        }
        else if (reportPeriod == "T") {
            var monthYear = month < 10 ? "0" + month + "/" + year : month + "/" + year;
            kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__(_core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].processDate("01/" + monthYear)).format('YYYY-MM-DD HH:mm:ss');
        }
        else if (reportPeriod == "N") {
            kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm:ss');
        }
        return kydulieu;
    };
    AddNewDataComponent.prototype.TuNhapDuLieu = function () {
        this.openFormData(false);
    };
    AddNewDataComponent.prototype.TuLayDuLieu = function () {
        this.openFormData(true);
    };
    AddNewDataComponent.prototype._validForm = function () {
        var result = true;
        if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.frmData.period) == "") {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Kỳ dữ liệu không được để trống", "error");
            this.form.instance.getEditor("period").focus();
            return false;
        }
        else if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(this.frmData.period) != "") {
            if (this.frmData.period_type == "Q") {
                var quy = moment__WEBPACK_IMPORTED_MODULE_6__(this.frmData.period);
                var month = quy.month() < 12 ? quy.month() + 1 : 1;
                if (month > 4) {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Kỳ dữ liệu nằm trong khoảng Quý 01 đến Quý 04", "error");
                    this.form.instance.getEditor("period").focus();
                    return false;
                }
            }
        }
        return result;
    };
    AddNewDataComponent.prototype.createObjectData = function () {
        var object = new Object;
        var kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__(this.frmData.period).format("DD/MM/YYYY");
        if (this.frmData.period_type == "Q" || this.frmData.period_type == "T")
            kydulieu = moment__WEBPACK_IMPORTED_MODULE_6__(this.frmData.period).format("MM/YYYY");
        var langui = 0;
        if (this.isLanDau)
            langui = 1;
        else
            langui = this.frmData.number;
        object["kydulieu"] = kydulieu;
        object["langui"] = langui;
        return object;
    };
    AddNewDataComponent.prototype.openFormData = function (isAutoLoadData) {
        if (!this._validForm())
            return;
        var object = this.createObjectData();
        ///
        this.taxService.kydulieu = object["kydulieu"];
        this.taxService.langui = object["langui"];
        this.taxService.isAutoLoadData = isAutoLoadData;
        this.taxService.vats = this.vats;
        this.taxService.frmData = this.frmData;
        this.taxService.isUpdate = false;
        this.bsModalRef.hide();
        this.router.navigate(['system/send-data-tax/create'], { relativeTo: this.route });
        ///
        // const initialState = {
        //   kydulieu: object["kydulieu"],
        //   langui: object["langui"],
        //   isAutoLoadData: isAutoLoadData,
        //   vats: this.vats,
        //   frmData: this.frmData,
        //   isUpdate: false
        // };
        // this.bsModalSignRef = this.modalService.show
        //   (
        //     ShowDataInvoicesComponent,
        //     {
        //       backdrop: 'static',
        //       keyboard: false,
        //       class: 'modal-dialog modal-xl view-invoice',
        //       initialState
        //     }
        //   );
        // const subModal = this.modalService.onHide.subscribe(() => {
        //   subModal.unsubscribe();
        // });
    };
    AddNewDataComponent.prototype.loadVat = function () {
        var _this = this;
        this.taxService.loadVat().subscribe(function (rs) {
            if (rs.status == "success") {
                _this.vats = rs.data.DM_TY_LE_VAT;
            }
        }, function (err) {
        }, function () {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"])
    ], AddNewDataComponent.prototype, "form", void 0);
    AddNewDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-data',
            template: __webpack_require__(/*! ./add-new-data.component.html */ "./src/app/modules/send-data-tax/components/add-new-data/add-new-data.component.html"),
            styles: [__webpack_require__(/*! ./add-new-data.component.scss */ "./src/app/modules/send-data-tax/components/add-new-data/add-new-data.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_send_data_tax_shared_send_data_tax_service__WEBPACK_IMPORTED_MODULE_7__["SendDataTaxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], AddNewDataComponent);
    return AddNewDataComponent;
}());



/***/ }),

/***/ "./src/app/modules/send-data-tax/components/index/index.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/send-data-tax/components/index/index.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row header-func search-section\">\r\n  <div class=\"col-md-8\">\r\n    <div class=\"search-date\">\r\n      <div class=\"column\">\r\n        <div class=\"field\">\r\n          <div class=\"label\">{{_translate.CONTROLL.LABEL.export_period}}</div>\r\n          <div class=\"value\">\r\n            <dx-select-box [items]=\"exportSchedules\" displayExpr=\"name\" valueExpr=\"code\"\r\n                           [value]=\"objParams.exportSchedulesDefault\" (onValueChanged)=\"onExportSchedules($event)\">\r\n            </dx-select-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column day\">\r\n        <div class=\"field\">\r\n          <div class=\"label\">{{_translate.CONTROLL.LABEL.from_date}}</div>\r\n          <div class=\"value\">\r\n            <dx-date-box  [(value)]=\"objParams.startDate\" type=\"date\" [useMaskBehavior]=\"true\" [displayFormat]=\"'dd/MM/yyyy'\"\r\n                          (onValueChanged)=\"onStartDate($event)\">\r\n            </dx-date-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column day\">\r\n        <div class=\"field\">\r\n          <div class=\"label\">{{_translate.CONTROLL.LABEL.to_date}}</div>\r\n          <div class=\"value\">\r\n            <dx-date-box [(value)]=\"objParams.endDate\" [useMaskBehavior]=\"true\" type=\"date\" [displayFormat]=\"'dd/MM/yyyy'\"\r\n                         (onValueChanged)=\"onEndDate($event)\">\r\n            </dx-date-box>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-right\">\r\n          <dx-button (click)=\"themmoi()\" [(icon)]=\"_translate.ICONS.plus\"\r\n                     text=\"Thêm mới\" type=\"default\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid\r\n  id=\"gridContainerVat\"\r\n  [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\"\r\n  [showBorders]=\"true\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnAutoWidth]=\"true\"\r\n  [columnResizingMode]=\"true\"\r\n  [wordWrapEnabled]=\"true\">\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"vat\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <!-- Kỳ dữ liệu -->\r\n  <dxi-column cellTemplate=\"periodTemplate\" dataField=\"period\"\r\n              caption=\"Kỳ dữ liệu\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n              alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Số bảng tổng hợp -->\r\n  <dxi-column dataField=\"order\"\r\n              caption=\"Số bảng tổng hợp\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.so_phieu}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Ngày gửi bảng tổng hợp-->\r\n  <dxi-column dataField=\"send_date\" caption=\"Ngày gửi bảng tổng hợp\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n              format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" sortOrder=\"asc\">\r\n  </dxi-column>\r\n  <!-- Lần gửi -->\r\n  <dxi-column cellTemplate=\"numberSendTemplate\" dataField=\"send_number\"\r\n              caption=\"Lần gửi\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.so_phieu}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <!-- Trạng thái gửi CQT -->\r\n  <dxi-column cellTemplate=\"statusSendTax\"\r\n              caption=\"Trạng thái gửi CQT\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\">\r\n  </dxi-column>\r\n   <!-- Chức năng -->\r\n   <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\"\r\n               minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\" alignment=\"center\" [width]=\"155\">\r\n   </dxi-column>\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    <a *ngIf=\"d.data.status == 'CHUA_GUI'\"\r\n    href=\"javascript:void(0)\">Chưa gửi CQT</a>\r\n    <a *ngIf=\"d.data.status == 'DA_GUI_CQT'\"\r\n    href=\"javascript:void(0)\" (click)=\"thongdieptruyennhan(d.data)\">Đã gửi CQT</a>\r\n    <a *ngIf=\"d.data.status == 'DA_TIEP_NHAN'\"\r\n    href=\"javascript:void(0)\" (click)=\"thongdieptruyennhan(d.data)\">CQT đã tiếp nhận</a>\r\n    <a *ngIf=\"d.data.status == 'TIEP_NHAN'\"\r\n    href=\"javascript:void(0)\" (click)=\"thongdieptruyennhan(d.data)\">CQT đã tiếp nhận</a>\r\n    <a *ngIf=\"d.data.status == 'KHONG_TIEP_NHAN'\"\r\n    href=\"javascript:void(0)\" (click)=\"thongdieptruyennhan(d.data)\">CQT không tiếp nhận</a>\r\n  </div>\r\n  <div *dxTemplate = \"let d of 'periodTemplate'\">\r\n     {{formatDate(d.data.period,d.data.period_type)}}\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'numberSendTemplate'\">\r\n    <p *ngIf=\"d.data.is_first\">\r\n      Lần đầu\r\n    </p>\r\n    <p *ngIf=\"!d.data.is_first\">\r\n      Bổ sung lần {{d.data.order}}\r\n    </p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n       href=\"javascript:void(0)\">\r\n    </a>\r\n    <a *ngIf=\"d.data.is_external && d.data.status == 'CHUA_GUI'\" title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n       href=\"javascript:void(0)\"></a>\r\n    <a *ngIf=\"d.data.status == 'CHUA_GUI'\" title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n       href=\"javascript:void(0)\"></a>\r\n  </div>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]= \"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager\r\n    [showPageSizeSelector]=\"true\"\r\n    [allowedPageSizes]=\"[15, 35, 50, 100]\"\r\n    [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\"\r\n    infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n"

/***/ }),

/***/ "./src/app/modules/send-data-tax/components/index/index.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/send-data-tax/components/index/index.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-func{margin-top:10px;margin-bottom:10px}::ng-deep .search-section .column{width:36%;display:inline-block;margin:0;text-align:right}::ng-deep .search-section .column .field{padding:5px 0}::ng-deep .search-section .day{width:32%}::ng-deep .search-section .day .field .label{width:61px !important}::ng-deep .search-section .day .field .value{width:56% !important}::ng-deep .search-section .day .field .dx-datebox{width:100% !important}::ng-deep .column .field>div{display:inline-block;vertical-align:middle}::ng-deep .search-section .column .field .label{width:110px;margin-right:10px}::ng-deep .search-section .column .field .value{width:53%}::ng-deep .search-section .column .field .value .dx-selectbox{border-radius:0}::ng-deep .search-section .column .field .value .dx-datebox{border-radius:0}::ng-deep .search-section .column .field .value .dx-datebox .dx-texteditor-input{min-height:25px;max-height:25px}::ng-deep .search-section .column .field .value .dx-texteditor-input{min-height:20px;max-height:25px}::ng-deep .search-section .column .field .valueProcess{width:56%}::ng-deep .search-section .column .field .valueProcess .dx-selectbox{border-radius:0}::ng-deep .search-section .column .field .valueProcess .dx-datebox{border-radius:0}::ng-deep .search-section .column .field .valueProcess .dx-datebox .dx-texteditor-input{min-height:25px;max-height:25px;padding:3px 35px 3px 9px !important}::ng-deep .search-section .column .field .valueProcess .dx-texteditor-input{min-height:20px;max-height:25px}::ng-deep .search-section .search-date{width:100%}::ng-deep .search-section .search-date .dx-texteditor-input{padding-top:5px !important;padding-bottom:4px}::ng-deep .search-section .search-panel .dx-textbox .dx-texteditor-input{padding-top:5px !important;padding-bottom:4px}::ng-deep .search-section .advanced .dx-textbox .dx-texteditor-input,::ng-deep .search-section .advanced-invoice-buy .dx-textbox .dx-texteditor-input{padding-top:5px !important;padding-bottom:4px}.search-panel{width:100%}.search-panel .dx-texteditor{border-radius:0}.search-panel .column{width:68%}.search-panel .label{margin:0}.search-panel .value{width:76% !important}.search-panel .value .dx-textbox{width:83%;display:inline-flex}.search-panel .value .dx-button{position:relative;top:-2px;border-left:0;height:27px}.search-panel .value .dx-button-content{padding-right:0 !important}.search-panel .value .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .value #advBtn{margin-top:0;width:5%}.search-panel .value #searchBtn{margin-top:0;width:9%}.search-panel .valueProcess{width:63%}.search-panel .valueProcess .dx-textbox{width:94%;display:inline-flex}.search-panel .valueProcess .dx-button{position:relative;top:-2px;border-left:0;height:27px}.search-panel .valueProcess .dx-button-content{padding-right:0 !important}.search-panel .valueProcess .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .valueProcess #advBtn{margin-top:0;width:5%}.search-panel .valueProcess #searchBtn{margin-top:0;width:9%}.advanced,.advanced-invoice-buy{margin:0 -15px;transition:all .3s linear 0s;width:145%}.advanced .dx-texteditor,.advanced-invoice-buy .dx-texteditor{border-radius:0}.advanced .column,.advanced-invoice-buy .column{width:24%}.advanced .column .value,.advanced-invoice-buy .column .value{width:47%}.advanced .name-customer,.advanced-invoice-buy .name-customer{width:48% !important}.advanced .name-customer .value,.advanced-invoice-buy .name-customer .value{width:73.4% !important}.advanced .name-customer-buy,.advanced-invoice-buy .name-customer-buy{width:35.07% !important}.advanced .name-customer-buy .value,.advanced-invoice-buy .name-customer-buy .value{width:63.5% !important}.advanced :host .dx-fieldset,.advanced-invoice-buy :host .dx-fieldset{width:100px}.button-ok{height:30px;padding-bottom:10px !important;padding-left:20px}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-popup-content{padding-top:5px !important;padding-left:5px !important;padding-right:5px !important;padding-bottom:0 !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-treeview{height:80% !important;padding-bottom:5px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .processing_status-search.dx-treeview,::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .exporter-search.dx-treeview{height:75% !important;padding-bottom:5px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-button-search{border-radius:12px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-button-search .dx-button-content .dx-icon{font-size:13px !important}::ng-deep .sendTax .modal-content{width:62%;margin-left:25%}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}::ng-deep .truyen-nhan{max-width:80% !important;margin:auto}\n"

/***/ }),

/***/ "./src/app/modules/send-data-tax/components/index/index.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/send-data-tax/components/index/index.component.ts ***!
  \***************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_send_data_tax_components_add_new_data_add_new_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/send-data-tax/components/add-new-data/add-new-data.component */ "./src/app/modules/send-data-tax/components/add-new-data/add-new-data.component.ts");
/* harmony import */ var _modules_send_data_tax_shared_send_data_tax_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/send-data-tax/shared/send-data-tax.service */ "./src/app/modules/send-data-tax/shared/send-data-tax.service.ts");
/* harmony import */ var _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/handle-invoice/shared */ "./src/app/modules/handle-invoice/shared/index.ts");
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
    function IndexComponent(translate, authService, modalService, router, route, taxService, handleInvoiceService) {
        this.translate = translate;
        this.authService = authService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.taxService = taxService;
        this.handleInvoiceService = handleInvoiceService;
        this.objParams = {
            exportSchedulesDefault: '',
            startDate: '',
            endDate: ''
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.currentUser = this.authService.getCurrentUser();
        translate.use(this._language);
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        this.exportSchedules = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].getExportSchedule(this._translate, true).schedule;
        this.objParams.exportSchedulesDefault = "THANG_NAY";
        var oKyXuat = this.exportSchedules.filter(function (p) { return p.code == "THANG_NAY"; })[0];
        if (oKyXuat) {
            this.objParams.startDate = oKyXuat.startDate;
            this.objParams.endDate = oKyXuat.endDate;
        }
        this.loadList();
        this.loadVat();
    };
    IndexComponent.prototype.loadList = function (params) {
        var param = "";
        var _indexfilter_groups = 888;
        if (this.objParams.startDate) {
            this.objParams.startDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.objParams.startDate).format('YYYY-MM-DD 00:00:00');
            param += _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][filters][0][key]=created_at\n        &filter_groups[" + _indexfilter_groups + "][filters][0][value]=" + this.objParams.startDate + "\n        &filter_groups[" + _indexfilter_groups + "][filters][0][operator]=gte&");
            _indexfilter_groups++;
        }
        if (this.objParams.endDate) {
            this.objParams.endDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.objParams.endDate).format('YYYY-MM-DD 23:59:59');
            param += _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._removeNewline("filter_groups[" + _indexfilter_groups + "][filters][2][key]=created_at\n        &filter_groups[" + _indexfilter_groups + "][filters][2][value]=" + this.objParams.endDate + "\n        &filter_groups[" + _indexfilter_groups + "][filters][2][operator]=lt&");
            _indexfilter_groups++;
        }
        this.dataSource = {};
        var ref = {};
        if (param != "") {
            var _lst = this.taxService.getAll(param);
            this.dataSource.store = _lst;
        }
        else {
            this.dataSource.store = this.taxService.getAll();
        }
    };
    IndexComponent.prototype.themmoi = function () {
        var _this = this;
        var data = {
            is_last: true,
            period_type: "",
            period: ""
        };
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.taxService.getInfoCreate(data).subscribe(function (rs) {
            if (rs.status == "success") {
                var initialState = void 0;
                if (rs.data && rs.data.id) {
                    initialState = {
                        period_type: rs.data.period_type,
                        is_create_first: false,
                        vats: _this.vats
                    };
                }
                else {
                    initialState = {
                        period_type: "T",
                        is_create_first: true,
                        vats: _this.vats
                    };
                }
                _this.bsModalSignRef = _this.modalService.show(_modules_send_data_tax_components_add_new_data_add_new_data_component__WEBPACK_IMPORTED_MODULE_7__["AddNewDataComponent"], {
                    backdrop: 'static',
                    keyboard: true,
                    class: 'sendTax modal-lg modal-margin-width',
                    initialState: initialState
                });
                var subModal_1 = _this.modalService.onHide.subscribe(function () {
                    subModal_1.unsubscribe();
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, "error", 5000);
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.thongdieptruyennhan = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var message = {
            message_code: data.message_code
        };
        var sub = this.handleInvoiceService.getInforSendRecieve(message).subscribe(function (rs) {
            if (rs.status == "success") {
                var lstErr = rs.data;
                var initialState = {
                    lstErr: lstErr,
                    notifyType: "THONG_DIEP_TRUYEN_NHAN",
                    send_wrong_status: data.status
                };
                _this.bsModalSignRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_4__["SendDataForTaxComponent"], {
                    backdrop: 'static',
                    keyboard: true,
                    class: 'modal-lg modal-margin-width truyen-nhan',
                    initialState: initialState
                });
                var subModal_2 = _this.modalService.onHide.subscribe(function () {
                    subModal_2.unsubscribe();
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, "error");
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.onExportSchedules = function (e) {
        var selectedItem = e.component.option('selectedItem');
        this.objParams.exportSchedulesDefault = selectedItem.code;
        this.objParams.startDate = selectedItem.startDate;
        this.objParams.endDate = selectedItem.endDate;
        this.loadList();
    };
    IndexComponent.prototype.onStartDate = function (e) {
        if (e.event) {
            this.objParams.startDate = (e.value) ? moment__WEBPACK_IMPORTED_MODULE_5__(e.value).format('YYYY-MM-DD HH:mm:ss') : '';
            this.loadList();
        }
    };
    IndexComponent.prototype.onEndDate = function (e) {
        if (e.event) {
            this.objParams.endDate = (e.value) ? moment__WEBPACK_IMPORTED_MODULE_5__(e.value).format('YYYY-MM-DD HH:mm:ss') : '';
            this.loadList();
        }
    };
    IndexComponent.prototype.formatDate = function (date, period_type) {
        var result = "";
        if (date) {
            switch (period_type) {
                case 'N':
                    result = moment__WEBPACK_IMPORTED_MODULE_5__(_core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].processDate(date)).format('DD/MM/YYYY');
                    break;
                case 'T':
                    var dateTimeT = moment__WEBPACK_IMPORTED_MODULE_5__(_core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].processDate(date)).format('MM/YYYY');
                    if (dateTimeT == "Invalid date")
                        dateTimeT = date;
                    result = "Tháng " + dateTimeT;
                    break;
                case 'Q':
                    var dateTime = moment__WEBPACK_IMPORTED_MODULE_5__(_core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].processDate(date)).format('MM/YYYY');
                    if (dateTime == "Invalid date")
                        dateTime = date;
                    result = "Quý " + dateTime;
                    break;
            }
        }
        return result;
    };
    IndexComponent.prototype.edit = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.taxService.laythongtinbangtonghop(data.id).subscribe(function (rs) {
            if (rs.status == "success") {
                var kydulieu = "";
                if (rs.data.period) {
                    kydulieu = moment__WEBPACK_IMPORTED_MODULE_5__(rs.data.period).format("DD/MM/YYYY");
                    if (rs.data.period_type == "Q" || rs.data.period_type == "T")
                        kydulieu = moment__WEBPACK_IMPORTED_MODULE_5__(rs.data.period).format("MM/YYYY");
                    if (kydulieu == "Invalid date")
                        kydulieu = rs.data.period;
                }
                var frmData = {
                    period_type: rs.data.period_type,
                    period: rs.data.period,
                    number: rs.data.send_number,
                    product_type: rs.data.product_type
                };
                var initialState = {
                    isUpdate: true,
                    isAutoLoadData: false,
                    vats: _this.vats,
                    frmData: frmData,
                    is_first: rs.data.is_first,
                    external_invoices: rs.data.external_invoices,
                    kydulieu: kydulieu,
                    langui: rs.data.send_number,
                    id: rs.data.id
                };
                _this.taxService.kydulieu = kydulieu;
                _this.taxService.langui = rs.data.send_number;
                _this.taxService.isAutoLoadData = false;
                _this.taxService.vats = _this.vats;
                _this.taxService.frmData = frmData;
                _this.taxService.isUpdate = true;
                _this.taxService.is_first = rs.data.is_first;
                _this.taxService.external_invoices = rs.data.external_invoices;
                _this.taxService.id = rs.data.id;
                _this.router.navigate(['system/send-data-tax/create']);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, "error", 5000);
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.view = function (data) {
        var id = data.id;
        var extend = {
            is_external: data.is_external
        };
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        this.taxService.getFilePdf(id, extend).subscribe(function (rs) {
            if (rs.status == "success") {
                if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.fileData) != "")
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].showFileXml(rs.data.fileName, 'pdf', rs.data.fileData);
                else
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Nội dung file không có dữ liệu", "error", 5000);
            }
            else
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, "error", 5000);
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.delete = function (data) {
        var _this = this;
        var result = _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
        result.then(function (dialogResult) {
            if (dialogResult) {
                var id = data.id;
                var is_external = false;
                if (data.is_external)
                    is_external = true;
                var objSend = {
                    is_external: is_external
                };
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                var sub_1 = _this.taxService.xoaBangTongHop(id, objSend).subscribe(function (rs) {
                    if (rs.status == "success") {
                        _this.loadList();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, "error", 5000);
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_1.unsubscribe();
                });
            }
        });
    };
    IndexComponent.prototype.loadVat = function () {
        var _this = this;
        this.taxService.loadVat().subscribe(function (rs) {
            if (rs.status == "success") {
                _this.vats = rs.data.DM_TY_LE_VAT;
            }
        }, function (err) {
        }, function () {
        });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/send-data-tax/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/send-data-tax/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _modules_send_data_tax_shared_send_data_tax_service__WEBPACK_IMPORTED_MODULE_8__["SendDataTaxService"],
            _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_9__["HandleInvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/send-data-tax/components/show-data-invoices/show-data-invoices.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/send-data-tax/components/show-data-invoices/show-data-invoices.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">BẢNG TỔNG HỢP DỮ LIỆU HÓA ĐƠN</h4>\r\n</div> -->\r\n<div class=\"modal-body\">\r\n  <div class=\"report-gird-edit\">\r\n    <div>\r\n      <p style=\"text-align: center;font-weight: bold;font-size: 21px;margin-bottom: 15px;margin-left: 35px\">\r\n        {{oCaption.bang_tong_hop_du_lieu}}</p>\r\n    </div>\r\n    <div>\r\n      <dx-form [formData]=\"frmData\">\r\n        <!-- Kỳ dữ liệu -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\" style=\"display: flex;justify-content: center;\">\r\n          <div style=\"margin-right: 8px;width: 125px;text-align: right;font-weight: bold;\">\r\n            {{_translate.CONTROLL.LABEL.data_period}}:</div>\r\n          <div class=\"input-lan-gui dx-field-item-content dx-field-item-content-location-right\">\r\n            <div class=\"dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-widget\">\r\n              <div class=\"dx-texteditor-container\">\r\n                <div class=\"dx-texteditor-input-container ky-du-lieu\">\r\n                  <dx-text-box [(value)]=\"kydulieu\" [readOnly]=\"true\" style=\"padding-top: 7px;\"></dx-text-box>\r\n\r\n                  <div data-dx_placeholder=\"\" class=\"dx-placeholder dx-state-invisible\"></div>\r\n                </div>\r\n                <div class=\"dx-texteditor-buttons-container\">\r\n                  <div></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </dxi-item>\r\n        <!-- Lần gửi -->\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\" style=\"display: flex;justify-content: center;;margin-bottom: 10px\">\r\n          <div style=\"margin-right: 8px;width: 125px;text-align: right;font-weight: bold;\">\r\n            {{_translate.CONTROLL.LABEL.number_send}}:</div>\r\n          <div class=\"input-lan-gui dx-field-item-content dx-field-item-content-location-right\">\r\n            <div class=\"dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-widget\">\r\n              <div class=\"dx-texteditor-container\">\r\n                <div class=\"dx-texteditor-input-container\">\r\n                  <input autocomplete=\"off\" class=\"dx-texteditor-input\" type=\"number\" min=\"1\" maxlength=\"2\" tabindex=\"0\"\r\n                    [ngModel]=\"langui\" readonly=\"true\" role=\"textbox\">\r\n                  <div data-dx_placeholder=\"\" class=\"dx-placeholder dx-state-invisible\"></div>\r\n                </div>\r\n                <div class=\"dx-texteditor-buttons-container\">\r\n                  <div></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </dxi-item>\r\n        <!-- Số bảng tổng hợp -->\r\n        <dxi-item *ngIf=\"isShowSoBangTongHop\" itemType=\"group\" [colCount]=\"1\"\r\n          style=\"display: flex;margin-bottom: 10px;justify-content: center;\">\r\n          <div style=\"margin-right: 8px;width: 125px;text-align: right;font-weight: bold;\">\r\n            {{oCaption.so_tong_hop_du_lieu}}:</div>\r\n          <div class=\"input-lan-gui dx-field-item-content dx-field-item-content-location-right\">\r\n            <div class=\"dx-show-invalid-badge dx-textbox dx-texteditor dx-editor-outlined dx-widget\">\r\n              <div class=\"dx-texteditor-container\">\r\n                <div class=\"dx-texteditor-input-container\">\r\n                  <input autocomplete=\"off\" class=\"dx-texteditor-input\" type=\"number\" min=\"1\" [ngModel]=\"sobangtonghop\"\r\n                    maxlength=\"2\" tabindex=\"0\" role=\"textbox\">\r\n                  <div data-dx_placeholder=\"\" class=\"dx-placeholder dx-state-invisible\"></div>\r\n                </div>\r\n                <div class=\"dx-texteditor-buttons-container\">\r\n                  <div></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </dxi-item>\r\n      </dx-form>\r\n    </div>\r\n    <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n      [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"50\"\r\n      (onContextMenuPreparing)=\"onContextMenuPreparing($event)\" [columnAutoWidth]=\"true\">\r\n      <dxo-sorting mode=\"none\"></dxo-sorting>\r\n      <dxo-editing *ngIf=\"!isAutoLoadData\" mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n      <dxi-column caption=\"STT\" dataField=\"order\" [width]=\"63\" alignment=\"center\" sortOrder=\"asc\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.GRID.INVOICE.template_code}}\" dataField=\"template_code\" [width]=\"90\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.GRID.INVOICE.invoice_series}}\" dataField=\"invoice_series\" [width]=\"90\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.GRID.INVOICE.invoice_number}}\" dataField=\"invoice_number\" [width]=\"90\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.GRID.INVOICE.invoice_date}}\" dataField=\"invoice_date\" [width]=\"100\"\r\n        dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.GRID.INVOICE.customer_name}}\" dataField=\"customer_name\" [width]=\"344\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.CONTROLL.LABEL.buyer_name}}\" dataField=\"buyer_name\" [width]=\"162\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{oCaption.mst_khach_hang}}\" dataField=\"buyer_tax_code\" [width]=\"140\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.CONTROLL.LABEL.customer_code}}\" dataField=\"customer_code\" [width]=\"135\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.product_code}}\" dataField=\"product_code\" [width]=\"145\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.product_name}}\" dataField=\"product_name\" [width]=\"290\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.quantity}}\" dataField=\"quantity\" [width]=\"105\"\r\n        [editorOptions]=\"{ format: formatter.so_luong }\" [format]=\"formatter.so_luong\" dataType=\"number\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{oCaption.tong_thanh_tien}}\" dataField=\"amount\" [width]=\"150\"\r\n        [editorOptions]=\"{ format: formatter.thanh_tien }\" [format]=\"formatter.thanh_tien\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"vat\" caption=\"{{_translate.GRID.INVOICE_DETAILS.vat}}\" [width]=\"90\" alignment=\"center\"\r\n        [editorOptions]=\"{showClearButton: true ,step: '0'}\">\r\n        <dxo-lookup [dataSource]=\"vats\" displayExpr=\"name\" valueExpr=\"code\" *ngIf=\"!isAutoLoadData\"></dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.GRID.INVOICE.total_amount_vat}}\" dataField=\"amount_vat\" [width]=\"150\"\r\n        [editorOptions]=\"{ format: formatter.tien_thue }\" [format]=\"formatter.tien_thue\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Tổng tiền phí -->\r\n      <dxi-column caption=\"{{_translate.GRID.INVOICE.total_fee }}\" dataField=\"amount_fee\" [width]=\"150\"\r\n        [editorOptions]=\"{ format: formatter.tien_thue }\" [format]=\"formatter.tien_thue\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Tổng tiền giảm trừ khác -->\r\n      <dxi-column caption=\"{{_translate.GRID.INVOICE.other_total_deduction}}\" dataField=\"other_total_deduction\"\r\n        [width]=\"200\" [editorOptions]=\"{ format: formatter.tien_thue }\" [format]=\"formatter.tien_thue\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{_translate.CONTROLL.LABEL.amount_after_vat}}\" dataField=\"amount_after_vat\" [width]=\"161\"\r\n        [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Loại tiền -->\r\n      <dxi-column caption=\"{{_translate.CONTROLL.LABEL.currency_code}}\" dataField=\"product_exchange_code\" [width]=\"150\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n      <!-- Tỉ giá -->\r\n      <dxi-column caption=\"{{_translate.CONTROLL.LABEL.currency_rate}}\" dataField=\"product_exchange_rate\" [width]=\"150\"\r\n        alignment=\"right\" [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\"\r\n        dataType=\"number\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"status\" caption=\"{{_translate.GRID.GENERAL.status}}\" [width]=\"106\" alignment=\"center\"\r\n        [editorOptions]=\"{showClearButton: true ,step: '0'}\">\r\n        <dxo-lookup [dataSource]=\"processStatus\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{oCaption.loai_hd_lien_quan}}\" dataField=\"related_invoice_type\" [width]=\"132\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{oCaption.mau_so_hd_lien_quan}}\" dataField=\"related_template_code\" [width]=\"170\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{oCaption.ky_hieu_hd_lien_quan}}\" dataField=\"related_invoice_series\" [width]=\"170\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{oCaption.so_hd_lien_quan}}\" dataField=\"related_invoice_number\" [width]=\"137\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{oCaption.loai_ky_du_lieu_dieu_chinh}}\" dataField=\"period_type\" [width]=\"190\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"{{oCaption.ky_du_lieu_dieu_chinh}}\" dataField=\"period\" [width]=\"170\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column *ngIf=\"!isAutoLoadData\" caption=\"{{_translate.GRID.GENERAL.note}}\" dataField=\"note\" [width]=\"90\">\r\n      </dxi-column>\r\n      <dxo-remote-operations *ngIf=\"isAutoLoadData\" [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\"\r\n        [summary]=\"true\">\r\n      </dxo-remote-operations>\r\n      <dxo-remote-operations *ngIf=\"!isAutoLoadData\" [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n      <dxo-paging *ngIf=\"isAutoLoadData\" [pageSize]=\"15\"></dxo-paging>\r\n      <dxo-pager *ngIf=\"isAutoLoadData\" [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\"\r\n        [showNavigationButtons]=\"true\" [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">\r\n      </dxo-pager>\r\n    </dx-data-grid>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\" style=\"height: 55px;\">\r\n  <div style=\"color: red;font-style: italic;margin-right: 30px;\">\r\n    <span>{{_translate.CONTROLL.LABEL.note_general_table_max_line}}</span><br>\r\n    <span style=\"margin-left: 42px;line-height: 18px;\">{{_translate.CONTROLL.LABEL.auto_divide_multi_table}}</span>\r\n  </div>\r\n  <dx-button text=\"{{oCaption.gui_du_lieu}}\" type=\"default\" (click)=\"GuiDuLieu()\">\r\n  </dx-button>\r\n  <dx-button *ngIf=\"!isAutoLoadData\" text=\"{{_translate.CONTROLL.BUTTON.save_temporary}}\" type=\"default\"\r\n    (click)=\"GhiTam()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.close}}\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/send-data-tax/components/show-data-invoices/show-data-invoices.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/send-data-tax/components/show-data-invoices/show-data-invoices.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .ky-du-lieu .dx-text-box .dx-texteditor-input{padding-top:3px !important}\n"

/***/ }),

/***/ "./src/app/modules/send-data-tax/components/show-data-invoices/show-data-invoices.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/send-data-tax/components/show-data-invoices/show-data-invoices.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ShowDataInvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDataInvoicesComponent", function() { return ShowDataInvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_send_data_tax_shared_invoice_send__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/send-data-tax/shared/invoice-send */ "./src/app/modules/send-data-tax/shared/invoice-send.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_send_data_tax_shared_send_data_tax_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/send-data-tax/shared/send-data-tax.service */ "./src/app/modules/send-data-tax/shared/send-data-tax.service.ts");
/* harmony import */ var _modules_auth_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/auth/shared */ "./src/app/modules/auth/shared/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ShowDataInvoicesComponent = /** @class */ (function () {
    function ShowDataInvoicesComponent(translate, authService, taxService, socketService, registerService, router, location, activeRoute, modalService) {
        var _this = this;
        this.translate = translate;
        this.authService = authService;
        this.taxService = taxService;
        this.socketService = socketService;
        this.registerService = registerService;
        this.router = router;
        this.location = location;
        this.activeRoute = activeRoute;
        this.modalService = modalService;
        this.invoiceSend = new _modules_send_data_tax_shared_invoice_send__WEBPACK_IMPORTED_MODULE_6__["InvoiceSend"]();
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.fileIndex = 0;
        this.tempKiFile = 0;
        this.isTT78 = false;
        this.formatter = {};
        this.is_first = false;
        this.isExportFailed = false;
        this.isShowSoBangTongHop = false;
        this.maxRowXangDau = 8000;
        this.maxRowKhac = 5000;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this.processStatus = [
            {
                name: "Mới",
                code: "0"
            },
            {
                name: "Hủy",
                code: "1"
            },
            {
                name: "Điều chỉnh",
                code: "2"
            },
            {
                name: "Thay thế",
                code: "3"
            },
            {
                name: "Giải trình",
                code: "4"
            },
            {
                name: "Sai sót do tổng hợp",
                code: "5"
            }
        ];
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ShowDataInvoicesComponent.prototype.ngOnInit = function () {
        // Gán dữ liệu từ service
        this.kydulieu = this.taxService.kydulieu;
        this.langui = this.taxService.langui;
        this.isAutoLoadData = this.taxService.isAutoLoadData;
        this.vats = this.taxService.vats;
        this.frmData = this.taxService.frmData;
        this.isUpdate = this.taxService.isUpdate;
        this.is_first = this.taxService.is_first;
        this.external_invoices = this.taxService.external_invoices;
        this.id = this.taxService.id;
        this.connectWebsocket();
        this.configs = this.authService.getConfigs();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_2__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser.is_convert_TT78) {
            this.infoDangKy = this.authService.getInfoRegister();
            if (this.infoDangKy && this.infoDangKy.id) {
                if (this.infoDangKy.status == "CHAP_NHAN")
                    this.isTT78 = true;
            }
        }
        if (this.isAutoLoadData) {
            this.loadListInvoice();
        }
        else {
            if (this.isUpdate) {
                this.synthesize_datas = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_4___default.a({
                    key: 'id',
                    data: this.external_invoices
                });
                this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
                    store: this.synthesize_datas
                });
            }
            else {
                this.synthesize_datas = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_4___default.a({
                    key: 'id',
                    data: this.invoiceSend.add_invoices()
                });
                this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
                    store: this.synthesize_datas
                });
            }
        }
        this.oCaption =
            {
                mst_khach_hang: this._translate.CONTROLL.LABEL.mst + " " + this._translate.GRID.INVOICE.customer.toLowerCase(),
                tong_thanh_tien: this._translate.GRID.INVOICE_DETAILS.sum + " " + this._translate.GRID.INVOICE_DETAILS.amount.toLowerCase(),
                loai_hd_lien_quan: this._translate.CONTROLL.LABEL.type + " " + this._translate.CONTROLL.LABEL.invoice_involve,
                mau_so_hd_lien_quan: this._translate.GRID.INVOICE.template_code + " " + this._translate.CONTROLL.LABEL.invoice_involve,
                ky_hieu_hd_lien_quan: this._translate.GRID.INVOICE.invoice_series + " " + this._translate.CONTROLL.LABEL.invoice_involve,
                so_hd_lien_quan: this._translate.CONTROLL.LABEL.number + " " + this._translate.CONTROLL.LABEL.invoice_involve,
                loai_ky_du_lieu_dieu_chinh: this._translate.CONTROLL.LABEL.data_period_type + " " + this._translate.CONTROLL.BUTTON.adjusted.toLowerCase(),
                ky_du_lieu_dieu_chinh: this._translate.CONTROLL.LABEL.data_period + " " + this._translate.CONTROLL.BUTTON.adjusted.toLowerCase(),
                gui_du_lieu: this._translate.CONTROLL.BUTTON.send + " " + this._translate.CONTROLL.LABEL.data.toLowerCase(),
                bang_tong_hop_du_lieu: this._translate.MENU.send_data_tax.toUpperCase() + " " + this._translate.CONTROLL.LABEL.invoice.toUpperCase(),
                so_tong_hop_du_lieu: this._translate.CONTROLL.LABEL.number + " " + this._translate.CONTROLL.LABEL.general_table.toLowerCase(),
            };
    };
    ShowDataInvoicesComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.Status == 'success') {
                if (data.SvcName === 'efy_Sign') {
                    var i = _this.fileIndex;
                    if (data.Data.Name === 'hoadon.xml') {
                        _this.goiApiGuiFile(data.Data.Content);
                    }
                    else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                        _this.xuLyApiKhiXuat(_this.lstFile[i]);
                    }
                }
            }
            else {
                _this.isExportFailed = true;
                _this.continuteExportInvoice(false);
            }
        });
    };
    ShowDataInvoicesComponent.prototype.GuiDuLieu = function () {
        var _this = this;
        var question = _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].confirm("Bạn có chắc chắn gửi dữ liệu cho CQT không?", this._translate.NOTIFY.notify);
        question.then(function (result) {
            if (result) {
                if (!_this.isUpdate) {
                    if (_this.langui == 1)
                        _this.is_first = true;
                }
                if (_this.isAutoLoadData) {
                    var data = {
                        period_type: _this.frmData.period_type,
                        period: _this.kydulieu,
                        number: _this.sobangtonghop,
                        is_first: _this.is_first,
                        product_type: _this.frmData.product_type,
                        addition: _this.frmData.number,
                        add_hands: false
                    };
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
                    var sub_1 = _this.taxService.invoicesSummary(data).subscribe(function (rs) {
                        if (rs.status == "success") {
                            if (rs.data && rs.data.length > 0) {
                                _this.showPopup = true;
                                _this.lstFile = rs.data;
                                //this.id = rs.data[0].summary_id;
                                _this.totalFile = rs.data.length;
                                _this.fileIndex = 0;
                                _this.tempKiFile = 0;
                                _this.LayFileDuLieu();
                            }
                            else
                                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Không có dữ liệu gửi bảng tổng hợp", "error", 5000);
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, "error", 5000);
                        }
                    }, function (err) {
                    }, function () {
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                        sub_1.unsubscribe();
                    });
                }
                else {
                    var invoices_1 = [];
                    _this.synthesize_datas.load().then(function (dataSource) {
                        invoices_1 = dataSource.filter(function (p) { return _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(p.invoice_number) != "" || _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(p.product_name) != ""; });
                        invoices_1.forEach(function (item) {
                            if (item.invoice_date)
                                item.invoice_date = moment__WEBPACK_IMPORTED_MODULE_10__(item.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        });
                    });
                    var data = {
                        period_type: _this.frmData.period_type,
                        period: _this.kydulieu,
                        number: _this.sobangtonghop,
                        is_first: _this.is_first,
                        product_type: _this.frmData.product_type,
                        addition: _this.frmData.number,
                        add_hands: true,
                        invoices: invoices_1
                    };
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
                    if (_this.isUpdate) {
                        var sub_2 = _this.taxService.updateSummaryHand(_this.id, data).subscribe(function (rs) {
                            if (rs.status == "success") {
                                if (rs.data && rs.data.length > 0) {
                                    _this.showPopup = true;
                                    _this.lstFile = rs.data;
                                    _this.totalFile = rs.data.length;
                                    _this.fileIndex = 0;
                                    _this.tempKiFile = 0;
                                    _this.LayFileDuLieu();
                                }
                                else
                                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Không có dữ liệu gửi bảng tổng hợp", "error", 5000);
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, "error", 5000);
                            }
                        }, function (err) {
                        }, function () {
                            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                            sub_2.unsubscribe();
                        });
                    }
                    else {
                        var sub_3 = _this.taxService.invoicesSummaryHand(data).subscribe(function (rs) {
                            if (rs.status == "success") {
                                if (rs.data && rs.data.length > 0) {
                                    _this.showPopup = true;
                                    _this.lstFile = rs.data;
                                    _this.totalFile = rs.data.length;
                                    // this.id = rs.data[0].summary_id;
                                    _this.fileIndex = 0;
                                    _this.tempKiFile = 0;
                                    _this.LayFileDuLieu();
                                }
                                else
                                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Không có dữ liệu gửi bảng tổng hợp", "error", 5000);
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, "error", 5000);
                            }
                        }, function (err) {
                        }, function () {
                            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                            sub_3.unsubscribe();
                        });
                    }
                }
            }
            else {
            }
        });
    };
    ShowDataInvoicesComponent.prototype.LayFileDuLieu = function () {
        var _this = this;
        var i = this.fileIndex;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLyApiKhiXuat(this.lstFile[i]);
        }
        else {
            if (this.isTT78) {
                var ListSerialNumber = "DSCKS";
                if (this.infoDangKy && this.infoDangKy.registration_signature) {
                    var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                    if (signatures && signatures.length > 0)
                        ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                }
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
            }
            else
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
        }
    };
    ShowDataInvoicesComponent.prototype.xuLyApiKhiXuat = function (oFile) {
        var _this = this;
        var xmlInvoice = "";
        var mst = this.currentUser.account.tax_code;
        this.id = oFile.summary_id;
        var subFile = this.taxService.getInfoFile(oFile.file_id, mst).subscribe(function (rs) {
            if (rs.status == "success") {
                xmlInvoice = rs.data.file_content;
                var sign_date = moment__WEBPACK_IMPORTED_MODULE_10__(rs.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                if (xmlInvoice != "") {
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing))
                        _this.goiApiGuiFile(xmlInvoice);
                    else
                        _this.xuLyKiFile(xmlInvoice, sign_date);
                }
            }
            else {
                _this.isExportFailed = true;
                _this.continuteExportInvoice(false);
            }
        }, function (err) {
        }, function () {
            subFile.unsubscribe();
        });
    };
    ShowDataInvoicesComponent.prototype.xuLyKiFile = function (xmlInvoice, invoiceDate) {
        var _this = this;
        var nodeSign = "//BTHDLieu/DSCKS/NNT";
        var ListSerialNumber = "DSCKS";
        if (this.infoDangKy && this.infoDangKy.registration_signature) {
            var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
            if (signatures && signatures.length > 0)
                ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
        }
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', nodeSign, invoiceDate, 'generelData', ListSerialNumber, true);
    };
    ShowDataInvoicesComponent.prototype.goiApiGuiFile = function (xml_string) {
        var _this = this;
        var data = {
            xml_file: xml_string,
            id: this.id
        };
        this.subFile = this.taxService.sendXmlInvoice(data).subscribe(function (rs) {
            var isSuccess = false;
            _this.tempKiFile = 0;
            if (rs.status == 'success') {
                isSuccess = true;
            }
            else {
                _this.isExportFailed = true;
            }
            _this.continuteExportInvoice(isSuccess);
        }, function (err) { }, function () {
            _this.subFile.unsubscribe();
        });
    };
    ShowDataInvoicesComponent.prototype.GhiTam = function () {
        var _this = this;
        if (!this.isUpdate) {
            if (this.langui == 1)
                this.is_first = true;
        }
        var invoices = [];
        this.synthesize_datas.load().then(function (dataSource) {
            invoices = dataSource.filter(function (p) { return _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(p.invoice_number) != "" || _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(p.product_name) != ""; });
            invoices.forEach(function (item) {
                if (item.invoice_date)
                    item.invoice_date = moment__WEBPACK_IMPORTED_MODULE_10__(item.invoice_date).format('YYYY-MM-DD HH:mm:ss');
            });
        });
        var data = {
            period_type: this.frmData.period_type,
            period: this.kydulieu,
            number: this.sobangtonghop,
            is_first: this.is_first,
            product_type: this.frmData.product_type,
            addition: this.frmData.number,
            add_hands: true,
            invoices: invoices
        };
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        if (this.isUpdate) {
            var sub_4 = this.taxService.updateSummaryHand(this.id, data).subscribe(function (rs) {
                if (rs.status == "success") {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Ghi tạm thành công", "success", 5000);
                    _this.router.navigate(['/system/send-data-tax'], { relativeTo: _this.activeRoute });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, "error", 5000);
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                sub_4.unsubscribe();
            });
        }
        else {
            var sub_5 = this.taxService.invoicesSummaryHand(data).subscribe(function (rs) {
                if (rs.status == "success") {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Ghi tạm thành công", "success", 5000);
                    _this.router.navigate(['/system/send-data-tax'], { relativeTo: _this.activeRoute });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, "error", 5000);
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                sub_5.unsubscribe();
            });
        }
    };
    ShowDataInvoicesComponent.prototype.dong = function () {
        // this.location.back();
        this.router.navigate(['/system/send-data-tax'], { relativeTo: this.activeRoute });
        // window.location.reload();
        // this.router.navigate['/system/send-data-tax']
    };
    ShowDataInvoicesComponent.prototype.onContextMenuPreparing = function (e) {
        var _this = this;
        if (e.row && e.row.rowType === 'data') {
            if (!this.isAutoLoadData) {
                e.items = [
                    {
                        text: this._translate.CONTROLL.BUTTON.add_row,
                        onItemClick: function () {
                            _this.addRow();
                        }
                    },
                    {
                        text: this._translate.CONTROLL.BUTTON.delete_row,
                        onItemClick: function () {
                            _this.deleteRow(e.row.data);
                        }
                    },
                ];
            }
        }
    };
    /* Thêm dòng */
    ShowDataInvoicesComponent.prototype.addRow = function () {
        var len, order, orderLast;
        this.synthesize_datas.load().then(function (dataSource) {
            len = dataSource.length;
            if (len == 0)
                orderLast = 0;
            else
                orderLast = dataSource[len - 1].order;
        });
        for (var i = 0; i < 1; i++) {
            if (len >= 1) {
                order = ++orderLast;
            }
            else {
                order = 1;
            }
            var data = this.invoiceSend.addData(order);
            this.synthesize_datas.insert(data);
        }
        this.dataGrid.instance.refresh();
    };
    ShowDataInvoicesComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm(_this._translate.CONFIRM.delete);
            if (check) {
                setTimeout(function () {
                    _this.synthesize_datas.remove(item.id);
                    var order = 0;
                    var isOneRow = false;
                    _this.synthesize_datas.load().then(function (dataSource) {
                        dataSource.forEach(function (item, index) {
                            item.order = ++order;
                        });
                        if (dataSource.length == 0)
                            isOneRow = true;
                    });
                    _this.dataGrid.instance.refresh();
                    if (isOneRow)
                        _this.addRow();
                }, 100);
            }
        }, 200);
    };
    ShowDataInvoicesComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ShowDataInvoicesComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm(this._translate.CONFIRM.sign_stop);
        }
        if (r) {
            if (this.subFile) {
                this.subFile.unsubscribe();
            }
            this.valueProgress = 0;
        }
        else {
            e.cancel = true;
        }
    };
    ShowDataInvoicesComponent.prototype.continuteExportInvoice = function (isSuccess) {
        var percentComplete = 100 / this.totalFile;
        this.valueProgress += percentComplete;
        if (this.fileIndex == this.totalFile - 1) {
            if (!this.isExportFailed && isSuccess)
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Gửi bảng tổng hợp thành công", 'success', 5000);
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Có 1 số hóa đơn chưa gửi lên CQT", 'success', 5000);
            }
            this.showPopup = false;
            this.router.navigate(['/system/send-data-tax'], { relativeTo: this.activeRoute });
        }
        else if (this.fileIndex < this.totalFile - 1) {
            this.fileIndex++;
            this.LayFileDuLieu();
        }
    };
    ShowDataInvoicesComponent.prototype.loadListInvoice = function () {
        if (this.langui == 1)
            this.is_first = true;
        var data = {
            "period_type": this.frmData.period_type,
            "period": this.kydulieu,
            "is_first": this.is_first,
            "number": this.sobangtonghop,
            "product_type": this.frmData.product_type,
            "addition": this.frmData.number,
        };
        this.synthesize_datas = this.taxService.getInvoices(data, 'bang-tong-hop');
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
            store: this.synthesize_datas
        });
        //  this.dataSource.store = 
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxDataGridComponent"])
    ], ShowDataInvoicesComponent.prototype, "dataGrid", void 0);
    ShowDataInvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-data-invoices',
            template: __webpack_require__(/*! ./show-data-invoices.component.html */ "./src/app/modules/send-data-tax/components/show-data-invoices/show-data-invoices.component.html"),
            styles: [__webpack_require__(/*! ./show-data-invoices.component.scss */ "./src/app/modules/send-data-tax/components/show-data-invoices/show-data-invoices.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _modules_send_data_tax_shared_send_data_tax_service__WEBPACK_IMPORTED_MODULE_8__["SendDataTaxService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            _modules_auth_shared__WEBPACK_IMPORTED_MODULE_9__["RegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], ShowDataInvoicesComponent);
    return ShowDataInvoicesComponent;
}());



/***/ }),

/***/ "./src/app/modules/send-data-tax/send-data-tax.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/send-data-tax/send-data-tax.module.ts ***!
  \***************************************************************/
/*! exports provided: SendDataTaxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendDataTaxModule", function() { return SendDataTaxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _send_data_tax_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-data-tax.routing */ "./src/app/modules/send-data-tax/send-data-tax.routing.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/send-data-tax/components/index/index.component.ts");
/* harmony import */ var _components_add_new_data_add_new_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-new-data/add-new-data.component */ "./src/app/modules/send-data-tax/components/add-new-data/add-new-data.component.ts");
/* harmony import */ var _components_show_data_invoices_show_data_invoices_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/show-data-invoices/show-data-invoices.component */ "./src/app/modules/send-data-tax/components/show-data-invoices/show-data-invoices.component.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_send_data_tax_shared_data_tax_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/send-data-tax/shared/data-tax.resolver */ "./src/app/modules/send-data-tax/shared/data-tax.resolver.ts");
/* harmony import */ var _modules_send_data_tax_shared_edit_data_tax_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/send-data-tax/shared/edit-data-tax.resolver */ "./src/app/modules/send-data-tax/shared/edit-data-tax.resolver.ts");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
/* harmony import */ var _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/handle-invoice/shared */ "./src/app/modules/handle-invoice/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var SendDataTaxModule = /** @class */ (function () {
    function SendDataTaxModule() {
    }
    SendDataTaxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _send_data_tax_routing__WEBPACK_IMPORTED_MODULE_6__["SendDataTaxRoutingModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_10__["vTranslateModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_11__["devextremeModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_13__["DxLookupModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_12__["TagInputModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_13__["DxTooltipModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_13__["DxPopoverModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            entryComponents: [
                _components_add_new_data_add_new_data_component__WEBPACK_IMPORTED_MODULE_8__["AddNewDataComponent"],
                _components_show_data_invoices_show_data_invoices_component__WEBPACK_IMPORTED_MODULE_9__["ShowDataInvoicesComponent"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"],
                _components_add_new_data_add_new_data_component__WEBPACK_IMPORTED_MODULE_8__["AddNewDataComponent"],
                _components_show_data_invoices_show_data_invoices_component__WEBPACK_IMPORTED_MODULE_9__["ShowDataInvoicesComponent"]
            ],
            providers: [
                _modules_send_data_tax_shared_data_tax_resolver__WEBPACK_IMPORTED_MODULE_14__["DataTaxResolver"],
                _modules_send_data_tax_shared_edit_data_tax_resolver__WEBPACK_IMPORTED_MODULE_15__["DataTaxEditResolver"],
                _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_16__["VatDeactivateGuard"],
                _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_17__["HandleInvoiceService"]
            ]
        })
    ], SendDataTaxModule);
    return SendDataTaxModule;
}());



/***/ }),

/***/ "./src/app/modules/send-data-tax/send-data-tax.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/send-data-tax/send-data-tax.routing.ts ***!
  \****************************************************************/
/*! exports provided: SendDataTaxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendDataTaxRoutingModule", function() { return SendDataTaxRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/send-data-tax/components/index/index.component.ts");
/* harmony import */ var _modules_send_data_tax_components_show_data_invoices_show_data_invoices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/send-data-tax/components/show-data-invoices/show-data-invoices.component */ "./src/app/modules/send-data-tax/components/show-data-invoices/show-data-invoices.component.ts");
/* harmony import */ var _modules_send_data_tax_shared_edit_data_tax_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/send-data-tax/shared/edit-data-tax.resolver */ "./src/app/modules/send-data-tax/shared/edit-data-tax.resolver.ts");
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
    {
        path: 'create',
        component: _modules_send_data_tax_components_show_data_invoices_show_data_invoices_component__WEBPACK_IMPORTED_MODULE_3__["ShowDataInvoicesComponent"],
        data: { brec: 'create_summary_data' }
    },
    {
        path: ':Id',
        component: _modules_send_data_tax_components_show_data_invoices_show_data_invoices_component__WEBPACK_IMPORTED_MODULE_3__["ShowDataInvoicesComponent"],
        resolve: { init: _modules_send_data_tax_shared_edit_data_tax_resolver__WEBPACK_IMPORTED_MODULE_4__["DataTaxEditResolver"] },
        data: { brec: 'invoice_details' }
    },
];
var SendDataTaxRoutingModule = /** @class */ (function () {
    function SendDataTaxRoutingModule() {
    }
    SendDataTaxRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SendDataTaxRoutingModule);
    return SendDataTaxRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/send-data-tax/shared/data-tax.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/send-data-tax/shared/data-tax.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: DataTaxResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTaxResolver", function() { return DataTaxResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTaxResolver = /** @class */ (function () {
    function DataTaxResolver(router) {
        this.router = router;
    }
    DataTaxResolver.prototype.resolve = function (route, state) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        return null;
    };
    DataTaxResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DataTaxResolver);
    return DataTaxResolver;
}());



/***/ }),

/***/ "./src/app/modules/send-data-tax/shared/edit-data-tax.resolver.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/send-data-tax/shared/edit-data-tax.resolver.ts ***!
  \************************************************************************/
/*! exports provided: DataTaxEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTaxEditResolver", function() { return DataTaxEditResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTaxEditResolver = /** @class */ (function () {
    function DataTaxEditResolver(router) {
        this.router = router;
    }
    DataTaxEditResolver.prototype.resolve = function (route, state) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        return null;
    };
    DataTaxEditResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DataTaxEditResolver);
    return DataTaxEditResolver;
}());



/***/ }),

/***/ "./src/app/modules/send-data-tax/shared/invoice-send.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/send-data-tax/shared/invoice-send.ts ***!
  \**************************************************************/
/*! exports provided: InvoiceSend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSend", function() { return InvoiceSend; });
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");

var InvoiceSend = /** @class */ (function () {
    function InvoiceSend() {
        this.id = '';
        this.id_invoice = '';
        this.is_external = false; /* Có phải dữ liệu được thêm mới trên lưới k? */
        this.order = null; /* Số thứ tự */
        this.template_code = ''; /* Mẫu số */
        this.invoice_series = ''; /* Ký hiệu */
        this.customer_name = ''; /* Tên khách hàng */
        this.buyer_tax_code = ''; /* MST khách hàng */
        this.customer_code = ''; /* Mã khách hàng */
        this.product_code = ''; /* Mã hàng hóa, dịch vụ */
        this.product_name = ''; /* Tên hàng hóa, dịch vụ */
        this.quantity = null; /* Số lượng */
        this.amount = null; /* Tổng thành tiền */
        this.vat = ''; /* Thuế suất */
        this.amount_vat = null; /* Tổng tiền thuế */
        this.amount_after_vat = null; /* Tổng tiền thanh toán */
        this.status = ''; /* Trạng thái */
        this.related_invoice_type = ''; /* Loại HĐ liên quan */
        this.related_template_code = ''; /* Mẫu số  HĐ liên quan */
        this.period_type = ''; /* Loại kỳ dữ liệu điều chỉnh */
        this.period = ''; /* Kỳ dữ liệu điều chỉnh */
        this.note = ''; /* Ghi chú */
        this.invoice_date = ""; //Ngày hóa đơn
        this.invoice_number = ""; //Số hóa đơn
        this.buyer_name = "";
        this.related_invoice_series = ''; /* Ký hiệu  HĐ liên quan */
        this.related_invoice_number = ''; /* Số  HĐ liên quan */
        this.decimal_places_json = "";
    }
    InvoiceSend.prototype.add_invoices = function () {
        var arr = [];
        for (var i = 0; i < 10; i++) {
            arr.push({
                id: _core_helper_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
                id_invoice: "",
                is_external: true,
                order: i + 1,
                template_code: "",
                invoice_series: "",
                customer_name: "",
                buyer_tax_code: "",
                customer_code: "",
                product_code: "",
                product_name: "",
                quantity: null,
                amount: null,
                vat: "",
                amount_vat: null,
                amount_after_vat: null,
                status: "",
                related_invoice_type: "",
                related_template_code: "",
                period_type: "",
                period: "",
                note: "",
                invoice_date: "",
                invoice_number: "",
                buyer_name: "",
                related_invoice_series: "",
                related_invoice_number: "",
                decimal_places_json: ""
            });
        }
        return arr;
    };
    InvoiceSend.prototype.addData = function (order) {
        return {
            id: _core_helper_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
            is_external: true,
            id_invoice: "",
            order: order,
            template_code: "",
            invoice_series: "",
            customer_name: "",
            buyer_tax_code: "",
            customer_code: "",
            product_code: "",
            product_name: "",
            quantity: null,
            amount: null,
            vat: "",
            amount_vat: null,
            amount_after_vat: null,
            status: "",
            related_invoice_type: "",
            related_template_code: "",
            period_type: "",
            period: "",
            note: "",
            invoice_date: "",
            invoice_number: "",
            buyer_name: "",
            related_invoice_series: "",
            related_invoice_number: "",
            decimal_places_json: ""
        };
    };
    return InvoiceSend;
}());



/***/ }),

/***/ "./src/app/modules/send-data-tax/shared/send-data-tax.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/send-data-tax/shared/send-data-tax.service.ts ***!
  \***********************************************************************/
/*! exports provided: SendDataTaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendDataTaxService", function() { return SendDataTaxService; });
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


var SendDataTaxService = /** @class */ (function () {
    function SendDataTaxService(apiService) {
        this.apiService = apiService;
        this.isAutoLoadData = false;
        this.isUpdate = false;
        this.is_first = false;
    }
    SendDataTaxService.prototype.getAll = function (params) {
        var filter = "";
        if (params) {
            filter += '&' + params;
        }
        var sort = ''; //'&sort[0][key]=status_order&sort[0][direction]=ASC';
        return this.apiService.getDataTable('/new/invoices-summary', filter, sort);
    };
    /* Gửi dữ liệu tạo tự động */
    SendDataTaxService.prototype.invoicesSummary = function (data) {
        return this.apiService.post('/new/invoices-summary', data);
    };
    /* Gửi dữ liệu tạo thủ công */
    SendDataTaxService.prototype.invoicesSummaryHand = function (data) {
        return this.apiService.post('/new/invoices-summary-hand', data);
    };
    /* Update bảng tổng hợp */
    SendDataTaxService.prototype.updateSummaryHand = function (id, data) {
        return this.apiService.put('/new/invoices-summary-hand/' + id, data);
    };
    /* Danh mục vat */
    SendDataTaxService.prototype.loadVat = function () {
        return this.apiService.get("/get-lists-by-listtype-code/DM_TY_LE_VAT");
    };
    SendDataTaxService.prototype.getInfoFile = function (id, mst) {
        return this.apiService.get("/download/tmp-file?id=" + id + "&t=" + mst + "&raw=1");
    };
    SendDataTaxService.prototype.sendXmlInvoice = function (data) {
        return this.apiService.post('/new/invoices-summary-send', data);
    };
    SendDataTaxService.prototype.laythongtinbangtonghop = function (id) {
        var includes = 'includes[]=external_invoices';
        return this.apiService.get("/new/invoices-summary-hand/" + id + "?" + includes);
    };
    SendDataTaxService.prototype.xoaBangTongHop = function (id, data) {
        return this.apiService.post('/delete/invoices-summary-hand/' + id, data);
    };
    SendDataTaxService.prototype.getInvoices = function (data, type) {
        return this.apiService.getDataTableForReport("/new/invoices-summary-all", data, type);
    };
    SendDataTaxService.prototype.getFilePdf = function (id, data) {
        return this.apiService.post("/new/invoices-summary/" + id, data);
    };
    SendDataTaxService.prototype.getInfoCreate = function (data) {
        return this.apiService.post("/invoices-summary-single", data);
    };
    SendDataTaxService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], SendDataTaxService);
    return SendDataTaxService;
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
//# sourceMappingURL=send-data-tax-send-data-tax-module.js.map