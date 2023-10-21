(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "./src/app/modules/home/components/change-password/change-password.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/home/components/change-password/change-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.change_password }} {{_translate.MENU.user }}</h4>\r\n    <!-- <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button> -->\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"form\"\r\n             [formData]=\"user\"\r\n             validationGroup=\"userData\"\r\n             [showColonAfterLabel]=\"false\">\r\n        <dxi-item dataField=\"old_password\" [editorOptions]=\"{mode: 'password'}\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.password_old }}\"></dxo-label>\r\n          <dxi-validation-rule\r\n            type=\"required\"\r\n            message=\"{{_translate.CONTROLL.LABEL.password_old }} {{_translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"new_password\" [editorOptions]=\"{mode: 'password'}\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.password_new }}\"></dxo-label>\r\n          <dxi-validation-rule\r\n            type=\"required\"\r\n            message=\"{{_translate.CONTROLL.LABEL.password_new }} {{_translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n          <dxi-validation-rule\r\n            type=\"pattern\"\r\n            [pattern]=\"passwordPattern\"\r\n            message=\"{{_translate.CONTROLL.LABEL.password_new }} {{showTextValidPass}}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item editorType=\"dxTextBox\" [editorOptions]=\"{mode: 'password'}\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.re_password_new }}\"></dxo-label>\r\n          <dxi-validation-rule\r\n            type=\"required\"\r\n            message=\"{{_translate.CONTROLL.LABEL.re_password_new }} {{_translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n          <dxi-validation-rule\r\n            type=\"compare\"\r\n            [comparisonTarget]=\"passwordComparison\"\r\n            message=\"{{_translate.CONTROLL.LABEL.re_password_new }} {{_translate.VALIDATION.incorrect }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button\r\n      text=\"{{_translate.CONTROLL.BUTTON.save }}\"\r\n      type=\"default\"\r\n      validationGroup=\"userData\"\r\n      [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <!-- <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" type=\"default\" icon=\"{{_translate.ICONS.come_back }}\"\r\n               (click)=\"bsModalRef.hide()\">\r\n    </dx-button> -->\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/home/components/change-password/change-password.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/home/components/change-password/change-password.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/home/components/change-password/change-password.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/components/change-password/change-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_users_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/users/shared */ "./src/app/modules/users/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(authService, bsModalRef, coreService, router, usersService, configsService, translate) {
        var _this = this;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.coreService = coreService;
        this.router = router;
        this.usersService = usersService;
        this.configsService = configsService;
        this.translate = translate;
        this.passwordPattern = /^.{6,}$/;
        this.password = '';
        this.passwordOptions = {
            mode: 'password',
            value: this.password
        };
        this.passwordComparison = function () {
            return _this.form.instance.option('formData').new_password;
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = {
            old_password: '',
            new_password: '',
        };
        this.configs = this.authService.getConfigs();
        this.showTextValidPass = this._translate.VALIDATION.than6;
        if (this.configs) {
            if (this.configs.system_parameter.is_regex_pass) {
                this.passwordPattern = /^(?=.*[!@#$%^&*-])(?=(.*[0-9]){2,})(?=.*[A-Z])(?=.*[a-z]).{8,20}$/;
                this.showTextValidPass = this._translate.CONTROLL.LABEL.regex_password;
            }
        }
        else {
            this.configsService.getAll().subscribe(function (res) {
                if (res.data && res.data.configs) {
                    _this.authService.setConfigs(res.data.configs);
                    _this.configs = _this.authService.getConfigs();
                    if (_this.configs.system_parameter.is_regex_pass) {
                        _this.passwordPattern = /^(?=.*[!@#$%^&*-])(?=(.*[0-9]){2,})(?=.*[A-Z])(?=.*[a-z]).{8,20}$/;
                        _this.showTextValidPass = _this._translate.CONTROLL.LABEL.regex_password;
                    }
                }
            });
        }
    };
    ChangePasswordComponent.prototype.onSubmit = function (e) {
        var _this = this;
        this.coreService.showChangePassword = false;
        var data = {
            user: {
                old_password: this.user.old_password,
                new_password: this.user.new_password,
            }
        };
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        this.usersService.changePassword(data).subscribe(function (response) {
            if (response.status === 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                _this.bsModalRef.hide();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(response.message, 'error');
            }
        }, function (err) { _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(err, 'error'); }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormComponent"])
    ], ChangePasswordComponent.prototype, "form", void 0);
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/modules/home/components/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/modules/home/components/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_users_shared__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_7__["ConfigsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/invoice-package/invoice-package.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/home/components/invoice-package/invoice-package.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h3 style=\"color: #337ab7;\r\n  font-size: 20px;\r\n  font-weight: bold;\">THÔNG BÁO</h3>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\" style=\"flex-direction:column;padding: 15px;\" *ngIf=\"isWarning\">\r\n    <div style=\"display: flex;\">\r\n      <span style=\"font-size: 16px;\r\n      padding-bottom: 10px;\">Số lượng hóa đơn đầu vào còn được sử dụng: </span>\r\n      <span style=\"font-size: 16px;\r\n      color: red;\r\n      font-weight: bold;\r\n      margin-left: 10px;\">{{remaining_amount}}</span>\r\n    </div>\r\n    <span style=\"font-size: 16px;\">Vui lòng gia hạn để không bị gián đoạn trong quá trình sử dụng dịch vụ.</span>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!isWarning\" style=\"flex-direction:column;padding: 15px;\">\r\n    <span style=\"font-size: 16px;\r\n    padding-bottom: 10px;\">Bạn đã hết gói dịch vụ Quản lý hóa đơn đầu vào.</span>\r\n    <span style=\"font-size: 16px;\">Vui lòng gia hạn để có thể tiếp tục.</span>\r\n  </div>\r\n  <div class=\"row\" style=\"justify-content: flex-end;\r\n  padding-right: 15px;\">\r\n    <dx-button text=\"Đóng\" type=\"default\" (click)=\"dong()\">\r\n    </dx-button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/home/components/invoice-package/invoice-package.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/home/components/invoice-package/invoice-package.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}.notify{margin:auto;padding-top:15px}.notify label{margin-left:3px;vertical-align:top}:host :focus{border:1px black solid}\n"

/***/ }),

/***/ "./src/app/modules/home/components/invoice-package/invoice-package.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/components/invoice-package/invoice-package.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InvoicePackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePackageComponent", function() { return InvoicePackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoicePackageComponent = /** @class */ (function () {
    function InvoicePackageComponent(authService, coreService, bsModalRef, options) {
        this.authService = authService;
        this.coreService = coreService;
        this.bsModalRef = bsModalRef;
        this.options = options;
        this.closeNotif = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.arrData = [];
        this._translate = this.authService.getTranslate();
    }
    InvoicePackageComponent.prototype.ngOnInit = function () {
    };
    InvoicePackageComponent.prototype.dong = function () {
        this.bsModalRef.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InvoicePackageComponent.prototype, "closeNotif", void 0);
    InvoicePackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./invoice-package.component.html */ "./src/app/modules/home/components/invoice-package/invoice-package.component.html"),
            styles: [__webpack_require__(/*! ./invoice-package.component.scss */ "./src/app/modules/home/components/invoice-package/invoice-package.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalOptions"]])
    ], InvoicePackageComponent);
    return InvoicePackageComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/nhac-viec/nhac-viec.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/components/nhac-viec/nhac-viec.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{ 'NOTIFY.notify' | translate }}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <h2 *ngIf=\"conut1 || conut2 || conut3\" style=\"font-weight: bold;font-size: 15px;\"><span *ngIf=\"conut4\">I.</span> {{ 'CONTROLL.LABEL.create_export_invoice' | translate }}</h2>\r\n  <p class=\"name csp\" *ngIf=\"conut1\" (click)=\"goTo(conut1)\">- {{ 'CONTROLL.LABEL.have' | translate }} <span class=\"name2\">{{ conut1.quatity }}</span> {{ 'GRID.INVOICE.invoice_wait_for_sign' | translate }}</p>\r\n  <p class=\"name csp\" *ngIf=\"conut2\" (click)=\"goTo(conut2)\">- {{ 'CONTROLL.LABEL.have' | translate }} <span class=\"name2\">{{ conut2.quatity }}</span> {{ 'CONTROLL.LABEL.invoice_wait_send' | translate }}</p>\r\n  <p class=\"name csp\" *ngIf=\"conut3\" (click)=\"goTo(conut3)\">- {{ 'CONTROLL.LABEL.have' | translate }} <span class=\"name2\">{{ conut3.quatity }}</span> {{ 'CONTROLL.LABEL.invoice_signed_error' | translate }}</p>\r\n  <p class=\"name csp\" *ngIf=\"conut5\" (click)=\"goTo(conut5)\">- {{ 'CONTROLL.LABEL.have' | translate }} <span class=\"name2\">{{ conut5.quatity }}</span> {{ 'CONTROLL.LABEL.invoice_signed_approved_decline' | translate }}</p>\r\n\r\n  <h2 *ngIf=\"conut4\" style=\"font-weight: bold;font-size: 15px;\">II. {{ 'CONTROLL.LABEL.report_use_invoice' | translate }}</h2>\r\n  <p class=\"name\" *ngIf=\"conut4\">- {{ 'CONTROLL.LABEL.date' | translate }} {{ conut4.quatity }} {{ 'CONTROLL.LABEL.duration_report_use_invoice' | translate }} {{ conut4.quatity }}.</p>\r\n\r\n  <dx-check-box *ngIf=\"conut4\" id=\"reportCheckbox\" text=\"{{ 'CONTROLL.LABEL.reported' | translate }}\" [value]=\"false\" (onValueChanged)=\"daBaoCao()\"></dx-check-box>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <div class=\"button-box\">\r\n    <dx-button text=\"{{ 'CONTROLL.BUTTON.agree' | translate }}\" icon=\"assets\\img\\icons\\DongY.png\" type=\"default\" (click)=\"dongy()\">\r\n    </dx-button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/home/components/nhac-viec/nhac-viec.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/components/nhac-viec/nhac-viec.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".name{margin-left:15px}.modal-body{line-height:1.8}.name2{font-weight:bold;color:#0C11FF;cursor:pointer}.csp{cursor:pointer}\n"

/***/ }),

/***/ "./src/app/modules/home/components/nhac-viec/nhac-viec.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/components/nhac-viec/nhac-viec.component.ts ***!
  \**************************************************************************/
/*! exports provided: NhacViecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhacViecComponent", function() { return NhacViecComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NhacViecComponent = /** @class */ (function () {
    function NhacViecComponent(authService, bsModalRef, coreService, router, translate) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.coreService = coreService;
        this.router = router;
        this.translate = translate;
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    NhacViecComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.forEach(function (item) {
            if (item.name == 'lxhd1') {
                _this.conut1 = item;
            }
            if (item.name == 'lxhd2') {
                _this.conut2 = item;
            }
            if (item.name == 'lxhd3') {
                _this.conut3 = item;
            }
            if (item.name == 'baocao') {
                _this.conut4 = item;
            }
            if (item.name == 'lxhd4') {
                _this.conut5 = item;
            }
            if (item.name == 'lxhd5') {
                _this.conut6 = item;
            }
        });
    };
    NhacViecComponent.prototype.dongy = function () {
        this.bsModalRef.hide();
        this.coreService.showNhacViec = false;
    };
    NhacViecComponent.prototype.goTo = function (data) {
        var param = data.param;
        param.send = param.send || null;
        param.status = param.status || null;
        param.errorSign = param.errorSign || null;
        param.is_advanced = true;
        param.approve_status = param.approve_status || null;
        this.router.navigate([data.link], {
            queryParams: param,
            queryParamsHandling: 'merge'
        });
        this.dongy();
    };
    NhacViecComponent.prototype.daBaoCao = function () {
        this.coreService.daBaoCao();
        this.conut4 = null;
    };
    NhacViecComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    NhacViecComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nhac-viec',
            template: __webpack_require__(/*! ./nhac-viec.component.html */ "./src/app/modules/home/components/nhac-viec/nhac-viec.component.html"),
            styles: [__webpack_require__(/*! ./nhac-viec.component.scss */ "./src/app/modules/home/components/nhac-viec/nhac-viec.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], NhacViecComponent);
    return NhacViecComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/notification/notification.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/components/notification/notification.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\" [ngStyle]=\"colorTitle\">{{this.title}}</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\" style=\"display: flex; overflow: auto;\">\r\n    <div style=\"margin-left: 22px;margin-right: 22px;line-height: 24px;\" [innerHTML]=\"htmlString | safeHtml\">\r\n\r\n    </div>\r\n    <!-- <iframe sandbox=\"allow-same-origin\" id=\"preview-iframe\" src=\"\" frameborder=\"0\" height=\"100%\"\r\n      style=\"flex:1\"\r\n      onload=\"this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';\"></iframe> -->\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\" style=\"height: 50px;\">\r\n  <dx-button text=\"Đóng\" style=\"margin-right: 10px;\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/home/components/notification/notification.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/components/notification/notification.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}.notify{margin:auto;padding-top:15px}.notify label{margin-left:3px;vertical-align:top}:host :focus{border:1px black solid}\n"

/***/ }),

/***/ "./src/app/modules/home/components/notification/notification.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/home/components/notification/notification.component.ts ***!
  \********************************************************************************/
/*! exports provided: NotificationComponent, SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _modules_home_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/home/shared */ "./src/app/modules/home/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(authService, coreService, bsModalRef, options, homeService) {
        this.authService = authService;
        this.coreService = coreService;
        this.bsModalRef = bsModalRef;
        this.options = options;
        this.homeService = homeService;
        this.closeNotif = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.arrData = [];
        this._translate = this.authService.getTranslate();
    }
    NotificationComponent.prototype.ngOnInit = function () {
        if (this.currentUser && this.currentUser.account)
            this.unit_name = this.currentUser.account.name;
        this.dataSource = this.options.initialState;
        var firstNotify;
        var o_tct = this.dataSource.data.filter(function (p) { return p.token == "TCTPOB"; })[0];
        if (o_tct)
            firstNotify = o_tct;
        else
            firstNotify = this.dataSource.data[this.dataSource.data.length - 1];
        this.htmlString = js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].decode(firstNotify.content);
        this.htmlString = this.htmlString.replace("_object_name_", this.unit_name);
        this.title = firstNotify.title;
        this.colorTitle = { color: '#C70000' };
        this.imgContent = "<img src=\"assets/img/icons/thong-bao-tap-huan.png\" width=\"735px\" height=\"auto\" >";
        // this.iframe = document.getElementById('preview-iframe');
        // this.iframe.contentDocument.open("text/html", "replace");
        // this.iframe.contentDocument.write(this.htmlString);
        // this.iframe.contentDocument.close();
        this.arrData.push(firstNotify.id);
    };
    NotificationComponent.prototype.dong = function () {
        var isConThongBao = false;
        for (var i = this.dataSource.data.length - 1; 0 <= i; i--) {
            if (this.arrData.indexOf(this.dataSource.data[i].id) < 0) {
                isConThongBao = true;
                this.htmlString = js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].decode(this.dataSource.data[i].content);
                this.htmlString = this.htmlString.replace("_object_name_", this.unit_name);
                this.title = this.dataSource.data[i].title;
                // this.iframe.contentDocument.write(this.htmlString);
                // this.iframe.contentDocument.close();
                this.arrData.push(this.dataSource.data[i].id);
                break;
            }
        }
        if (!isConThongBao) {
            var idPopupArray_1 = [];
            this.dataSource.data.forEach(function (item) {
                if (item.view_type == 'POPUP') {
                    idPopupArray_1.push(item.id);
                }
            });
            if (idPopupArray_1.length > 0) {
                var sub_1 = this.homeService.notifyClose(idPopupArray_1).subscribe(function (rs) { }, function (err) { }, function () {
                    sub_1.unsubscribe();
                });
            }
            this.coreService.showThongBaoNangCap = false;
            this.bsModalRef.hide();
            this.bsModalRef.content.successSaveItem = 'QUAY_LAI';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "closeNotif", void 0);
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/modules/home/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/modules/home/components/notification/notification.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalOptions"],
            _modules_home_shared__WEBPACK_IMPORTED_MODULE_6__["HomeService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());

var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: "safeHtml" }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/modules/home/components/notify-invoice-expired/notify-invoice-expired.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/home/components/notify-invoice-expired/notify-invoice-expired.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div><h4 class=\"modal-title pull-left\">thông báo thời hạn gói dịch vụ</h4></div>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 pt-1 pb-2\">\r\n        <span style=\"font-size: 14px;\">Số lượng hóa đơn còn được sử dụng: </span> <span\r\n        class=\"text-danger font-weight-bold\">{{this.dataAmount}}</span>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <p style=\"font-size: 14px; line-height: 21px\">Quý khách <span *ngIf=\"this.dataAmount === 0\"\r\n                                                                      class=\"text-danger font-weight-bold\">đã hết hạn gói dịch vụ.</span><span\r\n          *ngIf=\"this.dataAmount !== 0\" class=\"text-danger font-weight-bold\">sắp hết hạn gói dịch vụ.</span> Vui lòng\r\n          <span class=\"text-danger font-weight-bold\">Gia hạn dịch vụ</span> để có thể tiếp tục sử dụng dịch vụ hóa đơn\r\n          điện tử.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div style=\"padding: 1rem; border-top: 1px solid #e9ecef\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div *ngIf=\"this.dataAmount > 9\" class=\"form-check-inline\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" (click)=\"onChangeCheck()\" class=\"form-check-input\" value=\"{{this.isCheck}}\">Không hiển\r\n          thị lần sau\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"button-box\" style=\"display: flex; justify-content: flex-end; align-items: center\">\r\n        <dx-button text=\"Gia hạn dịch vụ\" type=\"default\" (click)=\"dongy()\">\r\n        </dx-button>\r\n        <dx-button text=\"Đóng\" type=\"default\" (click)=\"close()\">\r\n        </dx-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/home/components/notify-invoice-expired/notify-invoice-expired.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/home/components/notify-invoice-expired/notify-invoice-expired.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/home/components/notify-invoice-expired/notify-invoice-expired.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/home/components/notify-invoice-expired/notify-invoice-expired.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: NotifyInvoiceExpiredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyInvoiceExpiredComponent", function() { return NotifyInvoiceExpiredComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotifyInvoiceExpiredComponent = /** @class */ (function () {
    function NotifyInvoiceExpiredComponent(authService, bsModalRef, coreService, router) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.coreService = coreService;
        this.router = router;
        this.isCheck = false;
        this.arrCookie = [];
        this._translate = this.authService.getTranslate();
    }
    NotifyInvoiceExpiredComponent.prototype.ngOnInit = function () {
    };
    NotifyInvoiceExpiredComponent.prototype.close = function () {
        document.cookie = 'isNotifyUser=' + JSON.stringify(this.checkCookie());
        this.bsModalRef.hide();
    };
    NotifyInvoiceExpiredComponent.prototype.dongy = function () {
        document.cookie = 'isNotifyUser=' + JSON.stringify(this.checkCookie());
        this.bsModalRef.content.successSaveItem = 'SuccessHomePage';
        this.bsModalRef.hide();
    };
    NotifyInvoiceExpiredComponent.prototype.checkCookie = function () {
        var _this = this;
        if (this.isCheck === true) {
            this.valueCokie = 1;
        }
        else {
            this.valueCokie = 0;
        }
        this.arrCookie = [];
        var ca = document.cookie.split(';');
        var name = 'isNotifyUser';
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].split('=');
            if (name === c[0].trim()) {
                this.arrCookie = JSON.parse(c[1]);
            }
        }
        if (this.arrCookie.length > 0) {
            var value = this.arrCookie.some(function (element) { return element.tax_code === _this.tax_code; });
            if (value) {
                for (var i = 0; i < this.arrCookie.length; i++) {
                    if (this.tax_code === this.arrCookie[i].tax_code) {
                        this.arrCookie[i].isCheck = this.valueCokie;
                    }
                }
            }
            else {
                this.arrCookie.push({ isCheck: this.valueCokie, tax_code: this.tax_code });
            }
        }
        else {
            this.arrCookie.push({ isCheck: this.valueCokie, tax_code: this.tax_code });
        }
        return this.arrCookie;
    };
    NotifyInvoiceExpiredComponent.prototype.onChangeCheck = function () {
        this.isCheck = !this.isCheck;
    };
    NotifyInvoiceExpiredComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notify-invoice-expired',
            template: __webpack_require__(/*! ./notify-invoice-expired.component.html */ "./src/app/modules/home/components/notify-invoice-expired/notify-invoice-expired.component.html"),
            styles: [__webpack_require__(/*! ./notify-invoice-expired.component.scss */ "./src/app/modules/home/components/notify-invoice-expired/notify-invoice-expired.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _core_services__WEBPACK_IMPORTED_MODULE_1__["CoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NotifyInvoiceExpiredComponent);
    return NotifyInvoiceExpiredComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/notify-mail-csk/notify-mail-csk.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/home/components/notify-mail-csk/notify-mail-csk.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\" [ngStyle]=\"colorTitle\">{{this.title}}</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"report-gird-edit\" *ngIf=\"auto_notify_error_mail\">\r\n    <h3 style=\"font-size: 18px; margin-bottom: 10px; font-weight: bold\">Danh sách hóa đơn gửi email lỗi:</h3>\r\n    <dx-data-grid id=\"gridReport\" [dataSource]=\"dataEmail\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n      [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"20\" [columnAutoWidth]=\"true\"\r\n      [wordWrapEnabled]=\"true\">\r\n      <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n      <dxo-sorting mode=\"none\"></dxo-sorting>\r\n      <dxi-column caption=\"TT\" alignment=\"center\" cellTemplate=\"stt\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'stt'\">\r\n        {{d.rowIndex + 1}}\r\n      </div>\r\n      <dxi-column caption=\"Số hóa đơn\" dataField=\"invoice_number\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Mẫu số/Ký hiệu\" alignment=\"center\" cellTemplate=\"tempalte\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'tempalte'\">\r\n        <p>{{ d.data.template_code }}</p>\r\n        <p>{{ d.data.invoice_series }}</p>\r\n      </div>\r\n      <dxi-column caption=\"Ngày hóa đơn\" dataField=\"invoice_date\" [editorOptions]=\"{useMaskBehavior:true}\"\r\n        dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Mã số thuế\" dataField=\"tax_code\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Tên khách hàng\" dataField=\"customer_name\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Trạng thái gửi\" alignment=\"center\" cellTemplate=\"statusSendTax\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n        <a title=\"{{d.data.error_content}}\" style=\"cursor: pointer; color: blue; text-decoration: solid;\">Gửi mail\r\n          lỗi</a>\r\n      </div>\r\n      <dxi-column alignment=\"center\" cellTemplate=\"actionIcon\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'actionIcon'\">\r\n        <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n          href=\"javascript:void(0)\"></a>\r\n      </div>\r\n      <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n      </dxo-remote-operations>\r\n      <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n      <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n      </dxo-pager>\r\n    </dx-data-grid>\r\n  </div>\r\n  <div class=\"report-gird-edit\" *ngIf=\"mail_license_error\">\r\n    <h3 style=\"font-size: 18px; margin-bottom: 10px; font-weight: bold; margin-top: 15px;\">Danh sách chứng từ gửi email\r\n      lỗi:</h3>\r\n    <dx-data-grid id=\"gridReport\" [dataSource]=\"dataLicense\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n      [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"20\" [columnAutoWidth]=\"true\"\r\n      [wordWrapEnabled]=\"true\">\r\n      <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n      <dxo-sorting mode=\"none\"></dxo-sorting>\r\n      <dxi-column caption=\"TT\" alignment=\"center\" cellTemplate=\"stt\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'stt'\">\r\n        {{d.rowIndex + 1}}\r\n      </div>\r\n      <dxi-column caption=\"Số chứng từ\" dataField=\"invoice_number\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Mẫu số/Ký hiệu\" alignment=\"center\" cellTemplate=\"tempalte\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'tempalte'\">\r\n        <p>{{ d.data.template_code }}</p>\r\n        <p>{{ d.data.invoice_series }}</p>\r\n      </div>\r\n      <dxi-column caption=\"Ngày chứng từ\" dataField=\"date_invoice\" [editorOptions]=\"{useMaskBehavior:true}\"\r\n        dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Mã số thuế\" dataField=\"tax_code\" alignment=\"center\">\r\n      </dxi-column>\r\n      <!-- Số CMND -->\r\n      <dxi-column dataField=\"id_card\" caption=\"{{ 'GRID.INVOICE.id_card' | translate }}\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Tên khách hàng\" dataField=\"customer_name\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Trạng thái gửi\" alignment=\"center\" cellTemplate=\"statusSendTax\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n        <a title=\"{{d.data.error_content}}\" style=\"cursor: pointer; color: blue; text-decoration: solid;\">Gửi mail\r\n          lỗi</a>\r\n      </div>\r\n      <dxi-column alignment=\"center\" cellTemplate=\"actionIcon\">\r\n      </dxi-column>\r\n      <div *dxTemplate=\"let d of 'actionIcon'\">\r\n        <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n          href=\"javascript:void(0)\"></a>\r\n      </div>\r\n      <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n      </dxo-remote-operations>\r\n      <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n      <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n      </dxo-pager>\r\n    </dx-data-grid>\r\n  </div>\r\n  <div style=\"display: flex; flex-direction: column; width: 100%;\" *ngIf=\"auto_notify_cks_expire\">\r\n    <h3 style=\"font-size: 18px; margin-bottom: 10px; font-weight: bold; margin-top: 10px\">Danh sách chứng thư sắp hết\r\n      hạn:</h3>\r\n    <div style=\"display: flex; flex-direction: column; width: 100%; margin-bottom: 20px;\"\r\n      *ngFor=\"let item of dataCSK; let i= index\">\r\n      <div style=\"display: flex; margin-bottom: 10px;\">\r\n        <span style=\"margin-right: 10px;\">{{i+1}}. Tên chứng thư :</span>\r\n        <span>{{item.name}}</span>\r\n      </div>\r\n      <div style=\"display: flex; margin-bottom: 5px;\">\r\n        <div style=\"display: flex; margin-bottom: 5px; margin-right: 20px;\">\r\n          <span style=\"margin-right: 10px;\">Ngày hết hạn :</span>\r\n          <span>{{item.cert_valid_to | date: 'dd/MM/yyyy'}}</span>\r\n        </div>\r\n        <div style=\"display: flex;\">\r\n          <span style=\"margin-right: 10px; margin-left: 100px;\">Số ngày còn lại :</span>\r\n          <span>{{item.remaining_days}}</span>\r\n        </div>\r\n      </div>\r\n      <span>Nhà cung cấp EFY-CA</span>\r\n      <div style=\"display: flex; align-items: center; margin: 9px 0px;\">\r\n        <label for=\"{{item.id}}\" style=\"word-wrap:break-word; cursor: pointer; display: flex; align-items: center;\">\r\n          <input id=\"{{item.id}}\" type=\"checkbox\" (change)=\"check($event)\" style=\"margin-right: 7px;\" />Không hiển thị\r\n          lần\r\n          sau\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\" style=\"height: 50px;\">\r\n  <dx-button text=\"Đóng\" style=\"margin-right: 10px;\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/home/components/notify-mail-csk/notify-mail-csk.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/home/components/notify-mail-csk/notify-mail-csk.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}.notify{margin:auto;padding-top:15px}.notify label{margin-left:3px;vertical-align:top}:host :focus{border:1px black solid}\n"

/***/ }),

/***/ "./src/app/modules/home/components/notify-mail-csk/notify-mail-csk.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/components/notify-mail-csk/notify-mail-csk.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NotifyMailCskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyMailCskComponent", function() { return NotifyMailCskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_home_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/home/shared */ "./src/app/modules/home/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotifyMailCskComponent = /** @class */ (function () {
    function NotifyMailCskComponent(authService, coreService, bsModalRef, homeService) {
        this.authService = authService;
        this.coreService = coreService;
        this.bsModalRef = bsModalRef;
        this.homeService = homeService;
        this.closeNotif = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = "Thông báo";
        this.dataCSK = {};
        this.arrId = [];
        this._translate = this.authService.getTranslate();
    }
    NotifyMailCskComponent.prototype.ngOnInit = function () {
    };
    NotifyMailCskComponent.prototype.delete = function (data) {
        var _this = this;
        var error_mails = {
            error_mails: [data.id]
        };
        var result = _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
        result.then(function (dialogResult) {
            if (dialogResult) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                _this.homeService.deleteMailError(error_mails).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.homeService.getListEMailError().subscribe(function (res) {
                            _this.dataEmail = res.data.mail_error_notifications.list;
                            _this.dataLicense = res.data.mail_license_error_notifications.list;
                            if (_this.dataEmail && _this.dataEmail.length > 0) {
                                _this.auto_notify_error_mail = true;
                            }
                            else {
                                _this.auto_notify_error_mail = false;
                            }
                            if (_this.dataLicense && _this.dataLicense.length > 0) {
                                _this.mail_license_error = true;
                            }
                            else {
                                _this.mail_license_error = false;
                            }
                            if (_this.dataEmail.length == 0 && _this.dataLicense.length == 0) {
                                _this.bsModalRef.hide();
                            }
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                        });
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
    };
    NotifyMailCskComponent.prototype.ngAfterViewInit = function () {
    };
    NotifyMailCskComponent.prototype.check = function ($event) {
        var checked = $event.target.checked;
        var id = $event.target.id;
        if (checked) {
            this.arrId.push(id);
        }
        else {
            this.arrId = this.arrId.filter(function (item) { return item != id; });
        }
    };
    NotifyMailCskComponent.prototype.dong = function () {
        var data = {
            signatures: this.arrId
        };
        this.homeService.hiddenNotification(data).subscribe();
        this.bsModalRef.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NotifyMailCskComponent.prototype, "closeNotif", void 0);
    NotifyMailCskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notify-mail-csk.component.html */ "./src/app/modules/home/components/notify-mail-csk/notify-mail-csk.component.html"),
            styles: [__webpack_require__(/*! ./notify-mail-csk.component.scss */ "./src/app/modules/home/components/notify-mail-csk/notify-mail-csk.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_home_shared__WEBPACK_IMPORTED_MODULE_4__["HomeService"]])
    ], NotifyMailCskComponent);
    return NotifyMailCskComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/notify-warning/notify-warning.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/components/notify-warning/notify-warning.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\" [ngStyle]=\"colorTitle\">{{titleHead}}</h4>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div style=\"display: flex; align-items: start\">\r\n        <div style=\"margin-left: 10px;margin-right: 22px;margin-top: 5px;\" [innerHTML]=\"imgContent\">\r\n        </div>\r\n        <div [innerHTML]=\"content\">\r\n        </div>\r\n      </div>\r\n    </div>    \r\n</div>\r\n<div class=\"modal-footer\" style=\"height: 50px;\">\r\n  <dx-button *ngIf=\"typeNotify == 'CHUA_AP_DUNG_TT78' || typeNotify == 'DA_CO_TAI_KHOAN_V3' || typeNotify == 'CHUYEN_DOI_HD_TT78' || typeNotify == 'KIEM_TRA_THONG_TIN'\"\r\n    text=\"{{lblButtonDongY}}\"\r\n    type=\"default\" (click)=\"DongY()\">\r\n  </dx-button>\r\n  <dx-button\r\n    text=\"{{lblButtonDong}}\"\r\n    type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/home/components/notify-warning/notify-warning.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/components/notify-warning/notify-warning.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{display:inline-block;padding-right:3px}.SLine1{color:#f10909;font-weight:800}.PLine2{margin-top:5px}.SLine2{color:#f10909;font-weight:600}.SEmail{color:blue;text-decoration:underline;margin-left:5px}.notify-provice-convert{margin-top:5px;margin-bottom:5px}.to-do-steps{font-weight:700;margin-bottom:5px}.dear-units{margin-bottom:10px;margin-right:10px}.step-1{color:#C70000 !important;margin-bottom:5px}.step-2{color:#C70000 !important;margin-bottom:5px}.step-3{color:#C70000 !important;margin-bottom:20px;cursor:pointer}.step-3-1{color:#C70000 !important;margin-bottom:20px}.use-invoice-TT78{font-style:italic}.PStep{margin-left:42px;margin-bottom:10px}.DStep1{margin-left:42px;margin-bottom:10px;display:inline-flex}.PStep3{margin-left:42px;margin-bottom:5px}.PStep4{margin-left:72px;margin-bottom:10px}.PStep5{margin-left:68px}.step-4{color:#C70000 !important;margin-bottom:20px;cursor:pointer}.step-4-1{color:#C70000 !important;margin-bottom:20px}.imgIcon{width:21px;margin-right:8px}.DIcon{width:16px;height:16px;margin-right:8px}.lblBold{font-weight:700}.step-done{color:blue;margin-bottom:5px}.step3-done{color:blue;margin-bottom:20px}.PGuid{margin-left:72px;font-style:italic;margin-bottom:10px;margin-right:10px}.PZalo{text-align:center;font-weight:700;color:#0070C0;margin-top:10px}.IZalo{text-align:center;margin-top:10px}.imgZalo{width:12%}.linkTaiDay{color:#0E76BC !important;text-decoration:underline !important;cursor:pointer;font-weight:600}.PVideo{margin-left:72px;font-style:italic;margin-bottom:10px;margin-right:10px}.PCKS{color:red;font-weight:bold}.PBoldText{font-weight:bold}\n"

/***/ }),

/***/ "./src/app/modules/home/components/notify-warning/notify-warning.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/components/notify-warning/notify-warning.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotifyWarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyWarningComponent", function() { return NotifyWarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _modules_info_service_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/info-service/shared */ "./src/app/modules/info-service/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotifyWarningComponent = /** @class */ (function () {
    function NotifyWarningComponent(authService, bsModalRef, coreService, router, modalService, infoService, translate) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.coreService = coreService;
        this.router = router;
        this.modalService = modalService;
        this.infoService = infoService;
        this.translate = translate;
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    NotifyWarningComponent.prototype.ngOnInit = function () {
        if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.HoaDonChoKy) {
            var line1 = "<div class=\"content\">";
            var line2 = "<p><span>" + this._translate.CONTROLL.LABEL.notify_TT78 + "</span></p>";
            var line3 = "<p class =\"PLine2\"><span>" + this._translate.CONTROLL.LABEL.convert_apply_TT78 + "</span><span class=\"SLine2\">" + " " + this._translate.CONTROLL.LABEL.request_processing_invoice_exist + "</span></p>";
            var line4 = "</div>";
            this.content = line1 + line2 + line3 + line4;
            this.imgContent = "<img src=\"assets/img/icons/warning.jpg\" width=\"70px\">";
            this.titleHead = this._translate.MENU.notify_processing_invoice_wait;
            this.colorTitle = { color: 'red' };
            this.lblButtonDong = this._translate.CONTROLL.BUTTON.close;
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.ChuyenDoiSDHDTT78) {
            var line5 = void 0;
            var line6 = void 0;
            var line7 = void 0;
            var line8 = void 0;
            this.titleHead = this._translate.MENU.notify_convert_invoice_TT78;
            var line1 = "<div class=\"content\">";
            var line2 = "<p class=\"dear-units\"><span>" + this._translate.CONTROLL.LABEL.dear_units + "</span></p>";
            var line3 = "<p class=\"dear-units\"><span class = \"notify-provice-convert\">" + this._translate.CONTROLL.LABEL.notify_provice_convert + "</span></p>";
            var line4 = "<p class=\"dear-units\"><span class = \"to-do-steps\">" + this._translate.CONTROLL.LABEL.to_convert_to_do_steps + "</span><span class=\"PCKS\">Chữ ký số</span><span class=\"PBoldText\"> và làm theo các bước sau:</span></p>";
            if (this.displayStep1)
                line5 = "<p class=\"PStep\"><img src=\"assets/img/icons/Icon_Noti_B1.png\" class=\"imgIcon\"><span class = \"step-1\">" + this._translate.CONTROLL.LABEL.step_1 + "</span></p>";
            else
                line5 = "<p class=\"PStep\"><img src=\"assets/img/icons/Icon_Buoc_Done.png\" class=\"imgIcon\"><span class = \"step-done\">" + this._translate.CONTROLL.LABEL.step_1 + "</span></p>";
            if (this.displayStep2)
                line6 = "<p class=\"PStep\"><img src=\"assets/img/icons/Icon_Noti_B2.png\" class=\"imgIcon\"><a href=\"register-template\" class = \"step-2\">" + this._translate.CONTROLL.LABEL.step_2 + "</a></p>";
            else
                line6 = "<p class=\"PStep\"><img src=\"assets/img/icons/Icon_Buoc_Done.png\" class=\"imgIcon\"><span class = \"step-done\">" + this._translate.CONTROLL.LABEL.step_2 + "</span></p>";
            var line11 = "<p class=\"PGuid\"><span class = \"notify-provice-convert\">" + "Sau khi đăng ký, CQT sẽ gửi email chấp nhận trong vòng 01 ngày làm việc. Trong thời gian chờ CQT chấp nhận, DN vẫn xuất hóa đơn bình thường theo Thông tư 32." + "</span></p>";
            if (this.displayStep3) {
                if (this.status_register == "CHAP_NHAN") {
                    line7 = "<p class=\"PStep3\"><img src=\"assets/img/icons/Icon_Noti_B3.png\" class=\"imgIcon\"><a href=\"cancel-release-notify\" class = \"step-3\">" + this._translate.CONTROLL.LABEL.step_3 + "</a></p>";
                    line8 = "<p class=\"PStep4\"><a href=\"cancel-release-notify\" class = \"step-4\">" + this._translate.CONTROLL.LABEL.according_old_regulation + "</a></p>";
                }
                else {
                    line7 = "<p class=\"PStep3\"><img src=\"assets/img/icons/Icon_Noti_B3.png\" class=\"imgIcon\"><a class = \"step-3-1\">" + this._translate.CONTROLL.LABEL.step_3 + "</a></p>";
                    line8 = "<p class=\"PStep4\"><a class = \"step-4-1\">" + this._translate.CONTROLL.LABEL.according_old_regulation + "</a></p>";
                }
            }
            else {
                line7 = "<p class=\"PStep3\"><img src=\"assets/img/icons/Icon_Buoc_Done.png\" class=\"imgIcon\"><span class = \"step3-done\">" + this._translate.CONTROLL.LABEL.step_3 + "</span></p>";
                line8 = "<p class=\"PStep4\"><span class = \"step3-done\">" + this._translate.CONTROLL.LABEL.according_old_regulation + "</span></p>";
            }
            var line12 = "<p class=\"PGuid\"><span class = \"notify-provice-convert\">" + "DN nộp thông báo hủy hóa đơn (Mẫu số TB03/AC) và Báo cáo quyết toán tình hình sử dụng hóa đơn (Mẫu số BC26/AC) đến CQT bằng Hình thức điện tử (có thể thực hiện sau)." + "</span></p>";
            // let line9 = "<p><span class = \"use-invoice-TT78\">" + this._translate.CONTROLL.LABEL.begin_use_invoice_TT78 + "</span></p>";
            var line13 = "<p class=\"PZalo\"><span class = \"notify-provice-convert\">" + "Group Zalo hỗ trợ" + "</span></p>";
            var line14 = "<div class=\"IZalo\"><img src=\"assets/img/icons/iHD_Zalo_Update.png\" class=\"imgZalo\"></div>";
            var line15 = "<p class=\"PVideo\"><span>Xem video hướng dẫn chuyển đổi: </span><a target=\"_blank\" class=\"linkTaiDay\" href=\"https://www.youtube.com/watch?v=4rVj9ZpNjsg\">Tại đây</a></p> ";
            var line10 = "</div>";
            this.colorTitle = { color: '#C70000' };
            this.content = line1 + line2 + line4 + line5 + line6 + line11 + line7 + line8 + line12 + line15 + line13 + line14 + line10;
            this.lblButtonDong = this._translate.CONTROLL.BUTTON.later;
            this.lblButtonDongY = this._translate.CONTROLL.BUTTON.begin_convert;
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.KiemTraThongTin) {
            this.lblButtonDong = "Không";
            this.lblButtonDongY = "Có";
            this.titleHead = "THÔNG BÁO KIỂM TRA LẠI CÁC THÔNG TIN";
            var line5 = "<div class=\"DStep1\"><img src=\"assets/img/icons/dangkysudung.png\" class=\"DIcon\"><p><span class=\"lblBold\">Email </span><span>\"" + this.email + "\"</span><span>" + " sẽ được dùng để nhận các thông báo của Cơ quan Thuế gửi cho đơn vị." + "</span></p></div>";
            var line6 = "<div class=\"DStep1\"><img src=\"assets/img/icons/Icon_B2.png\" class=\"DIcon\"><p><span class=\"lblBold\">Tên đơn vị </span><span>\"" + this.tendonvi + "\", </span><span class=\"lblBold\">địa chỉ </span><span>\"" + this.diachi + "\" </span><span>" + " sẽ được dùng để tạo mẫu hóa đơn." + "</span></p></div>";
            var line8 = "<p class=\"PStep5\"><span>" + "Bạn có chắc chắn muốn nộp tờ khai với các thông tin này? " + "</span></p>";
            this.colorTitle = { color: '#0e76bc' };
            this.content = line5 + line6 + line8;
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.DaCoTaiKhoanV3) {
            this.lblButtonDong = "Quay lại";
            this.lblButtonDongY = "Đăng nhập";
            this.titleHead = "THÔNG BÁO";
            var line1 = "<div class=\"content\">";
            var line2 = "<p><span>" + "Bạn đã có tài khoản sử dụng phần mềm iHoadon của EFY Việt Nam. Vui lòng đăng nhập và làm theo hướng dẫn để thực hiện đăng ký sử dụng hóa đơn điện tử theo Thông tư 78" + "</span></p>";
            var line4 = "</div>";
            this.content = line1 + line2 + line4;
            this.imgContent = "<img src=\"assets/img/icons/warning.jpg\" width=\"70px\">";
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.ChuaApDungTT78) {
            this.lblButtonDong = "Quay lại";
            this.lblButtonDongY = "Đồng ý";
            this.titleHead = "THÔNG BÁO";
            var line1 = "<div class=\"content\">";
            var line2 = "<p><span>" + "Địa bàn của đơn vị chưa áp dụng chuyển đổi hóa đơn điện tử theo Thông tư 78" + "</span></p>";
            var line3 = "<p class=\"PLine2\"><span>" + "Vui lòng để lại thông tin để chúng tôi hỗ trợ sử dụng hóa đơn điện tử theo Thông tư 32" + "</span></p>";
            var line4 = "</div>";
            this.content = line1 + line2 + line3 + line4;
            this.imgContent = "<img src=\"assets/img/icons/warning.jpg\" width=\"70px\">";
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.NgungHoatDong) {
            this.lblButtonDong = "Quay lại";
            this.titleHead = "THÔNG BÁO";
            var line1 = "<div class=\"content\">";
            var line2 = "<p><span>" + "Vì lý do nào đó, tài khoản của bạn đang ngừng hoạt động trên hệ thống. Vui lòng liên hệ một trong các kênh sau để được hỗ trợ:" + "</span></p>";
            var line3 = "<p class=\"PLine2\"><span>" + "Tổng đài: Miền Bắc - 19006142 | Miền Nam - 19006139" + "</span></p>";
            var line4 = "<p class=\"PLine2\"><span>" + "Email: " + "</span><span class=\"SEmail\">" + "ihoadon@efy.com.vn" + "</span></p>";
            var line5 = "</div>";
            this.content = line1 + line2 + line3 + line4 + line5;
            this.imgContent = "<img src=\"assets/img/icons/warning.jpg\" width=\"70px\">";
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.TaiKhoanTichHop) {
            this.lblButtonDong = "Quay lại";
            this.titleHead = "THÔNG BÁO";
            var line1 = "<div class=\"content\">";
            var line2 = "<p><span>" + "Đơn vị của bạn thuộc danh sách NNT tích hợp nên cần thực hiện theo quy trình khác. Vui lòng không đăng ký ở đây" + "</span></p>";
            var line5 = "</div>";
            this.content = line1 + line2 + line5;
            this.imgContent = "<img src=\"assets/img/icons/warning.jpg\" width=\"70px\">";
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.TonTaiHoaDonChoKy) {
            this.lblButtonDong = "Quay lại";
            this.titleHead = "THÔNG BÁO";
            var line1 = "<div class=\"content\">";
            var line2 = "<p><span>" + "Bạn vẫn còn hóa đơn chờ ký tại phần mềm iHoadon trên máy tính. Vui lòng kiểm tra và xử lý hết hóa đơn trước khi chuyển đổi sang sử dụng HĐĐT theo TT78" + "</span></p>";
            var line5 = "</div>";
            this.content = line1 + line2 + line5;
            this.imgContent = "<img src=\"assets/img/icons/warning.jpg\" width=\"70px\">";
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.NopToKhaiThanhCong) {
            this.lblButtonDong = "Đóng";
            this.titleHead = "THÔNG BÁO";
            var line1 = "<div class=\"content\">";
            var line2 = "<p><span>" + "Gửi tờ khai đăng ký thành công." + "</span></p>";
            var line3 = "<p class=\"PLine2\"><span>" + "EFY Việt Nam sẽ liên hệ với bạn trong thời gian gần nhất để làm các thủ tục tiếp theo." + "</span></p>";
            var line5 = "</div>";
            this.content = line1 + line2 + line3 + line5;
            this.imgContent = "<img src=\"assets/img/icons/Icon_Buoc_Done.png\" width=\"40px\">";
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.DangKyThanhCong) {
            this.lblButtonDong = "Đóng";
            this.titleHead = "THÔNG BÁO";
            var line1 = "<div class=\"content\">";
            var line2 = "<p><span>" + "Đăng ký sử dụng thành công." + "</span></p>";
            var line3 = "<p class=\"PLine2\"><span>" + "EFY Việt Nam sẽ liên hệ với bạn trong thời gian gần nhất để làm các thủ tục tiếp theo." + "</span></p>";
            var line5 = "</div>";
            this.content = line1 + line2 + line3 + line5;
            this.imgContent = "<img src=\"assets/img/icons/Icon_Buoc_Done.png\" width=\"40px\">";
        }
        if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.ChuyenDoiSDHDTT78) {
            var sub_1 = this.authService.syncDeclarations().subscribe(function (rs) {
            }, function (err) {
            }, function () {
                sub_1.unsubscribe();
            });
        }
    };
    NotifyWarningComponent.prototype.dong = function () {
        this.bsModalRef.hide();
        if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.HoaDonChoKy)
            this.coreService.showWarningInvoiceWait = false;
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.KiemTraThongTin)
            this.bsModalRef.content.successSaveItem = 'TU_CHOI';
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.NgungHoatDong)
            this.bsModalRef.content.successSaveItem = 'QUAY_LAI';
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.TaiKhoanTichHop)
            this.bsModalRef.content.successSaveItem = 'QUAY_LAI';
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.TonTaiHoaDonChoKy)
            this.bsModalRef.content.successSaveItem = 'QUAY_LAI';
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.ChuaApDungTT78)
            this.bsModalRef.content.successSaveItem = 'QUAY_LAI';
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.DaCoTaiKhoanV3 || this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.NopToKhaiThanhCong || this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.DangKyThanhCong) {
            this.bsModalRef.hide();
            this.router.navigate(['login']);
        }
    };
    NotifyWarningComponent.prototype.DongY = function () {
        var _this = this;
        if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.ChuyenDoiSDHDTT78) {
            if (this.displayStep1) {
                //Gọi api kiểm tra Còn hóa đơn chờ ký hay k
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                var subModal_1 = this.infoService.getStatusInvoiceWait().subscribe(function (res) {
                    if (res.status == "success") {
                        if (res.data.is_exist)
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng xuất các hóa đơn chờ ký để chuyển đổi áp dụng HĐĐT theo TT78.", 'error');
                        else {
                            _this.bsModalRef.hide();
                            _this.router.navigate(['register-global']);
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(res.message, 'error');
                    }
                    subModal_1.unsubscribe();
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                });
            }
            else {
                if (this.displayStep2) {
                    this.bsModalRef.hide();
                    this.router.navigate(['register-template']);
                }
                else if (this.displayStep3) {
                    if (this.status_register == "CHAP_NHAN") {
                        this.bsModalRef.hide();
                        this.router.navigate(['cancel-release-notify']);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng chờ CQT xử lý tờ khai đăng ký trước khi thực hiện hủy hóa đơn theo quy định cũ", 'error', 5000);
                    }
                }
            }
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.KiemTraThongTin) {
            this.bsModalRef.content.successSaveItem = 'DONG_Y';
            this.bsModalRef.hide();
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.DaCoTaiKhoanV3) {
            this.bsModalRef.hide();
            this.router.navigate(['login']);
        }
        else if (this.typeNotify == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].notify.ChuaApDungTT78) {
            this.bsModalRef.content.successSaveItem = 'QUAY_LAI';
            this.bsModalRef.hide();
            this.router.navigate([]).then(function (result) { window.open('https://ihoadon.vn/register/', '_blank'); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxFormComponent"])
    ], NotifyWarningComponent.prototype, "form", void 0);
    NotifyWarningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notify-warning',
            template: __webpack_require__(/*! ./notify-warning.component.html */ "./src/app/modules/home/components/notify-warning/notify-warning.component.html"),
            styles: [__webpack_require__(/*! ./notify-warning.component.scss */ "./src/app/modules/home/components/notify-warning/notify-warning.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["CoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _modules_info_service_shared__WEBPACK_IMPORTED_MODULE_7__["InfoServiceService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], NotifyWarningComponent);
    return NotifyWarningComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/sign-contract/sign-contract.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/components/sign-contract/sign-contract.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <img src=\"assets/img/icons/icon_contract.png\" alt=\"econtract\" style=\"width: 16px;margin-right: 5px;\">\r\n  <h4 class=\"modal-title pull-left tb-contract\">HỆ THỐNG HỢP ĐỒNG ĐIỆN TỬ EFY-eCONTRACT</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div style=\"text-align: center;font-weight: bold;margin-bottom: 20px;\">\r\n    <p style=\"margin-bottom: 5px;\">THÔNG BÁO</p>\r\n    <p>Ký hợp đồng điện tử dịch vụ hóa đơn điện tử iHOADON</p>\r\n  </div>\r\n  <div style=\"text-align: center;margin-bottom: 20px;\"><span>Kính gửi: </span><span class=\"bold\">{{ currentUser.account.name }} ({{ currentUser.account.tax_code }})</span></div>\r\n  <div><p style=\"margin-bottom: 5px;\">EFY Việt Nam xin gửi Quý khách hàng hợp đồng điện tử dịch vụ iHOADON</p></div>\r\n  <div><p style=\"margin-bottom: 5px;\">Để hoàn tất quá trình mua hàng, đơn vị vui lòng thực hiện ký hợp đồng điện tử cho đơn hàng sau:</p></div>\r\n\r\n  <dx-data-grid\r\n    id=\"packageGrip\"\r\n    [dataSource]=\"packages\"\r\n    [showBorders]=\"true\"\r\n    [showRowLines]=\"true\">\r\n    <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n    <dxi-column cellTemplate=\"stt\" caption=\"STT\" width=\"80\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"package_code\" caption=\"Gói dịch vụ\" alignment=\"center\"></dxi-column>\r\n    <dxi-column cellTemplate=\"month_regulation\" caption=\"Thời gian sử dụng\" alignment=\"center\"></dxi-column>\r\n    <div *dxTemplate=\"let d of 'month_regulation'\" style=\"cursor: pointer;\">\r\n      <span *ngIf=\"d.data.month_regulation && d.data.month_regulation != '0'\">{{ d.data.month_regulation }}{{ (d.data.type == 'PACKAGE') ? ' tháng' : ' năm' }}</span>\r\n    </div>\r\n    <dxi-column dataField=\"amount\" caption=\"Số hóa đơn được xuất\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"registration_date\" caption=\"Ngày đăng ký\" dataType=\"datetime\" format=\"dd/MM/yyyy HH:mm:ss\" dateSerializationFormat=\"yyyy-MM-dd HH:mm:ss\" alignment=\"center\"></dxi-column>\r\n    <div *dxTemplate=\"let d of 'stt'\">\r\n      <p>{{ d.rowIndex + 1 }}</p>\r\n    </div>\r\n  </dx-data-grid>\r\n  \r\n  <div style=\"margin-top: 15px;\">Kích vào biểu tượng để xem hợp đồng chờ ký <a href=\"javascript:void(0)\" (click)=\"viewContract()\"><img src=\"assets\\img\\icons\\HopDong.png\"></a></div>\r\n  <div style=\"margin-top: 15px;margin-bottom: 7px;\">Nhấn nút \"Ký điện tử\" để thực hiện ký hợp đồng này.</div>\r\n  <div><p style=\"margin-bottom: 5px;\"><span>Giải pháp ký hợp đồng được cung cấp bởi dịch vụ </span><span style=\"font-weight: bold;\">Hợp đồng điện tử EFY-eCONTRACT </span><span>của EFY Việt Nam.</span></p></div>\r\n  <div><p style=\"margin-bottom: 5px;\"><span>Tìm hiểu thêm về tính pháp lý của hợp đồng điện tử tại </span><span><a href=\"https://econtract.efy.com.vn\" target=\"_blank\">www.econtract.efy.com.vn</a></span></p></div>\r\n  <div><p style=\"margin-bottom: 5px;\">Trường hợp cần hỗ trợ vui lòng liên hệ tổng đài: Miền Bắc 19006142 - Miền Nam 19006139</p></div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <div class=\"button-box\">\r\n    <dx-button (click)=\"onKy($event)\" text=\"Ký điện tử\" type=\"default\" class=\"ky-dien-tu\">\r\n    </dx-button>\r\n    <dx-button text=\"Bỏ qua, ký sau\" type=\"default\" (click)=\"boquaky()\">\r\n    </dx-button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/home/components/sign-contract/sign-contract.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/components/sign-contract/sign-contract.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bold{font-weight:bold}.modal-body p{line-height:1.5}#packageGrip{margin-top:15px}.modal-footer .button-box{margin:0px auto}.ky-dien-tu{background-color:#FF8D29}.ky-dien-tu:hover{background-color:#FF7700}.ky-dien-tu:active{background-color:#FF7700}.ky-dien-tu:focus{background-color:#FF7700}.tb-contract{font-size:15px;color:#FF8D29;text-transform:none}\n"

/***/ }),

/***/ "./src/app/modules/home/components/sign-contract/sign-contract.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/components/sign-contract/sign-contract.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SignContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignContractComponent", function() { return SignContractComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_home_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/home/shared */ "./src/app/modules/home/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignContractComponent = /** @class */ (function () {
    function SignContractComponent(bsModalRef, authService, homeService, socketService, coreService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.authService = authService;
        this.homeService = homeService;
        this.socketService = socketService;
        this.coreService = coreService;
        this.packagesCanKy = [];
        // khoiTao(formatter) {
        //   this.packages[0].payment_method_names.some(item => {
        //     if (item.is_default) {
        //       this.packages[0].payment_method_name = item.code;
        //     }
        //   });
        //   this.packages[0] = [];
        //   this.packages[0].month_regulation = this.currentUser.month_regulation;
        //   this.packages[0].package_code = this.currentUser.package_code;
        //   this.packages[0].amount = this.currentUser.amount;
        //   this.packages[0].registration_date = this.currentUser.registration_date;
        //   //set value default
        //   if (this.packages[0].month_regulation.length) {
        //     this.coreService.boquaKy = true;
        //   }
        // }
        this.onKy = function (e) {
            if (_this.packagesCanKy.length) {
                _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, _this.packagesCanKy[0].content_contract, 'bien_ban.pdf', 'pdf', true, null, 'ALIGN_LEFT', 'PAGE_LAST');
            }
        };
    }
    SignContractComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getCurrentUser();
        this.connectWebsocket();
        this.homeService.getPackageContract().subscribe(function (rs) {
            if (rs.status == "success") {
                _this.packages = rs.data.packages;
                _this.packagesCanKy = _this.packages.filter(function (item) { return item.unsigned == 1; });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(rs.message, 'error');
                _this.bsModalRef.hide();
            }
        });
    };
    SignContractComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName == "efy_Sign") {
                // Helper.dowloadFile('a.pdf', 'pdf', data.Data.Content);
                var f_data = {
                    "customer": {
                        "id": _this.currentUser.account.van_account_id
                    },
                    "service": {
                        "file_content": data.Data.Content
                    }
                };
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
                _this.homeService.kyHopDong(f_data).subscribe(function (res) {
                    if (res.status == "success") {
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Ký hợp đồng thành công", "success");
                        var currentUser = _this.authService.getCurrentUser();
                        currentUser.unsigned = 0;
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));
                        _this.bsModalRef.hide();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(res.message, "error");
                    }
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                });
            }
        });
    };
    SignContractComponent.prototype.viewContract = function () {
        if (this.packagesCanKy[0]) {
            var win = window.open("hello", "", "width=100%, height=auto");
            var pdf_file = this.packagesCanKy[0].content_contract;
            win.document.write("<iframe width=\"100%\" height=\"97%\" src=\"data:application/pdf;base64," + pdf_file + "\"></iframe>");
            win.resizeTo(screen.availWidth, screen.availHeight);
            win.focus();
        }
    };
    SignContractComponent.prototype.boquaky = function () {
        this.bsModalRef.hide();
        this.coreService.boquaKy = true;
    };
    SignContractComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-contract',
            template: __webpack_require__(/*! ./sign-contract.component.html */ "./src/app/modules/home/components/sign-contract/sign-contract.component.html"),
            styles: [__webpack_require__(/*! ./sign-contract.component.scss */ "./src/app/modules/home/components/sign-contract/sign-contract.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _modules_home_shared__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["CoreService"]])
    ], SignContractComponent);
    return SignContractComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/survey-sheet/survey-sheet.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/components/survey-sheet/survey-sheet.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body survey-sheet\">\r\n    <div class=\"survey-sheet-content\">\r\n        <div style=\"text-align: end;\">\r\n            <img src=\"../../../.../../../../assets/img/Phieu khao sat khach hang-02.png\" alt=\"\"\r\n                style=\"cursor: pointer; width: 20px;\" (click)=\"dong()\">\r\n        </div>\r\n        <h1>PHIẾU KHẢO SÁT VỀ NHU CẦU SỬ DỤNG DỊCH VỤ CỦA KHÁCH HÀNG</h1>\r\n        <h2 style=\"padding: 15px 0px;\">Hiện nay, EFY Việt Nam đang cung cấp hệ sinh thái các dịch vụ cho doanh nghiệp,\r\n            tổ chức:</h2>\r\n        <div class=\"checkbox-content\" *ngFor=\"let item of list\">\r\n            <label for=\"{{item.id}}\">- {{item.name}}</label>\r\n            <input type=\"checkbox\" name=\"checkbox\" id=\"{{item.id}}\" [(ngModel)]=\"item.value\">\r\n        </div>\r\n        <h2 style=\"padding-bottom: 15px;\">Khách hàng cần tìm hiểu về phần mềm vui lòng tích chọn vào\r\n            dịch vụ và để lại số điện thoại, email, Tỉnh/\r\n            Thành Phố. Chúng tôi sẽ liên hệ và tư vấn chi tiết.</h2>\r\n        <form [formGroup]=\"formData\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"name-email\">\r\n                <input type=\"text\" placeholder=\"Số điện thoại\" class=\"phone\" formControlName=\"phone_number\">\r\n                <input type=\"text\" placeholder=\"Email\" class=\"email\" formControlName=\"email\">\r\n            </div>\r\n            <div class=\"address-btn\">\r\n                <select formControlName=\"province\" [value]=\"province_name\">\r\n                    <option *ngFor=\"let opt of cities\" [value]=\"opt.name\">{{opt.name}}</option>\r\n                </select>\r\n                <button type=\"submit\">Gửi</button>\r\n            </div>\r\n        </form>\r\n        <h2>Anh chị không có nhu cầu vui lòng tắt thông báo này.</h2>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/home/components/survey-sheet/survey-sheet.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/components/survey-sheet/survey-sheet.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}.notify{margin:auto;padding-top:15px}.notify label{margin-left:3px;vertical-align:top}:host :focus{border:1px black solid}.survey-sheet{background-image:url(\"/assets/img/Phieu khao sat khach hang-01-01.png\");background-repeat:no-repeat;background-attachment:fixed;background-size:cover;height:465px}.survey-sheet .survey-sheet-content{padding-left:337px;font-size:12px}.survey-sheet .survey-sheet-content h1{color:#f7e439;font-weight:bold}.survey-sheet .survey-sheet-content h2{color:white}.survey-sheet .survey-sheet-content .checkbox-content{display:flex;justify-content:space-between;align-items:center;color:#fff;padding-bottom:10px;margin:0px 15px}.survey-sheet .survey-sheet-content .checkbox-content label{cursor:pointer}.survey-sheet .survey-sheet-content .checkbox-content input{cursor:pointer}.survey-sheet .survey-sheet-content .address-btn{display:flex;align-items:center;padding-bottom:15px}.survey-sheet .survey-sheet-content .address-btn select{border:none;outline:none;border-radius:12px;padding:5px 27px;width:45%}.survey-sheet .survey-sheet-content .address-btn button{border:none;outline:none;padding:5px 10px;border-radius:3px;background-color:#0775ef;color:white;margin-left:20px}.survey-sheet .survey-sheet-content .name-email{display:flex;justify-content:space-between;align-items:center;padding-bottom:10px}.survey-sheet .survey-sheet-content .name-email input{border:none;outline:none;border-radius:12px;padding:5px 27px}.survey-sheet .survey-sheet-content .name-email .phone{width:35%}.survey-sheet .survey-sheet-content .name-email .email{width:60%}\n"

/***/ }),

/***/ "./src/app/modules/home/components/survey-sheet/survey-sheet.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/home/components/survey-sheet/survey-sheet.component.ts ***!
  \********************************************************************************/
/*! exports provided: SurveySheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveySheetComponent", function() { return SurveySheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_home_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/home/shared */ "./src/app/modules/home/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SurveySheetComponent = /** @class */ (function () {
    function SurveySheetComponent(authService, coreService, bsModalRef, homeService, fb) {
        var _this = this;
        this.authService = authService;
        this.coreService = coreService;
        this.bsModalRef = bsModalRef;
        this.homeService = homeService;
        this.fb = fb;
        this.closeNotif = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = "Thông báo";
        this.dataCSK = {};
        this.arrId = [];
        this.list = [
            { id: 1, name: "Phần mềm hợp đồng điện tử", value: false },
            { id: 2, name: "Phần mềm bảo hiểm xã hội điện tử", value: false },
            { id: 3, name: "Chữ ký số", value: false },
            { id: 4, name: "Phần mềm hóa đơn điện tử", value: false },
            { id: 5, name: "Chứng từ khấu trừ thuế TNCN điện tử", value: false },
            { id: 6, name: "Phần mềm lưu trữ hóa đơn đầu vào", value: false },
            { id: 7, name: "Phiếu xuất kho kiêm vận chuyển nội bộ", value: false },
            { id: 8, name: "Phiếu thu", value: false }
        ];
        this._translate = this.authService.getTranslate();
        this.homeService.getDataSelect().subscribe(function (res) {
            _this.cities = res.data.DM_TINH_THANH;
        });
        this.formData = this.fb.group({
            phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/),
                ]),],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(([a-zA-Z0-9_\-\.&]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*;\s*|\s*$))*$/),
                ]),],
            province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ])]
        });
    }
    SurveySheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.getInforDeclare().subscribe(function (res) {
            _this.province_name = res.data.province_name;
            _this.formData.get('province').setValue(res.data.province_name);
        });
    };
    SurveySheetComponent.prototype.ngAfterViewInit = function () {
    };
    SurveySheetComponent.prototype.dong = function () {
        var _this = this;
        this.bsModalRef.hide();
        this.homeService.closeSurveySheet().subscribe(function (res) {
            if (res.status == 'success') {
                var currentUser = _this.authService.getCurrentUser();
                currentUser.display_popup_demand_survey = false;
                _this.authService.setCurentAuth(currentUser);
            }
        });
    };
    SurveySheetComponent.prototype.validForm = function () {
        var valid_phone = this.formData.get("phone_number").errors;
        var valid_mail = this.formData.get("email").errors;
        var valid_city = this.formData.get("province").errors;
        var list_service = this.list.filter(function (item) { return item.value; });
        if (this.formData.status == "INVALID" || list_service.length === 0) {
            if (valid_phone) {
                if (valid_phone.pattern) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng nhập số điện thoại đúng định dạng', 'error');
                    return false;
                }
                if (valid_phone.required) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng nhập số điện thoại', 'error');
                    return false;
                }
            }
            if (valid_mail) {
                if (valid_mail.pattern) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng nhập địa chỉ email đúng định dạng', 'error');
                    return false;
                }
                if (valid_mail.required) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng nhập địa chỉ email', 'error');
                    return false;
                }
            }
            if (valid_city) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng chọn Tỉnh/ Thành Phố', 'error');
                return false;
            }
            if (list_service.length === 0) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng chọn ít nhất một dịch vụ', 'error');
                return false;
            }
        }
        else {
            return true;
        }
    };
    SurveySheetComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.validForm()) {
            return;
        }
        var services = '';
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.value) {
                services += i.name + ';';
            }
        }
        var data = this.formData.value;
        data['services'] = services.slice(0, -1);
        this.homeService.sendSurveySheet(data).subscribe(function (res) {
            if (res.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Cảm ơn bạn đã thực hiện khảo sát", "success");
                _this.dong();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("thất bại", "error");
                _this.bsModalRef.hide();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SurveySheetComponent.prototype, "closeNotif", void 0);
    SurveySheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-survey-sheet',
            template: __webpack_require__(/*! ./survey-sheet.component.html */ "./src/app/modules/home/components/survey-sheet/survey-sheet.component.html"),
            styles: [__webpack_require__(/*! ./survey-sheet.component.scss */ "./src/app/modules/home/components/survey-sheet/survey-sheet.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_home_shared__WEBPACK_IMPORTED_MODULE_4__["HomeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], SurveySheetComponent);
    return SurveySheetComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/thong-bao-nang-cap/thong-bao-nang-cap.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/home/components/thong-bao-nang-cap/thong-bao-nang-cap.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n  <div style=\"text-align: center;font-weight: bold;margin-bottom: 20px;color:#0f7ddb\">\r\n    <p style=\"margin-bottom: 5px;\">THÔNG BÁO</p>\r\n    <p>THAY ĐỔI KIỂU HIỂN THỊ BẢN PDF ĐỐI VỚI HÓA ĐƠN CÓ NHIỀU TRANG</p>\r\n  </div>\r\n  <div style=\"text-align: center;margin-bottom: 20px;\"><span>Kính gửi: </span><span class=\"bold\">{{ currentUser.account.name }} ({{ currentUser.account.tax_code }})</span></div>\r\n  <div><p style=\"margin-bottom: 10px;\">Phần mềm hóa đơn điện tử EFY-iHOADON đã thay đổi kiểu hiển thị bản PDF đối với hóa đơn có nhiều trang áp dụng theo Thông tư 78. Vui lòng lựa chọn kiểu hiển thị mà đơn vị sẽ áp dụng:</p></div>\r\n  <div class=\"radOptionTemp\">\r\n    <dx-radio-group class=\"radioGroupH\" [dataSource]=\"optionsTemp\" displayExpr=\"name\" valueExpr=\"code\" [(value)]=\"valueTempt\"\r\n                layout=\"horizontal\" (onValueChanged)=\"onValueChanged($event)\"\r\n                itemTemplate = \"item\">\r\n                <div *dxTemplate=\"let priority of 'item'\">\r\n                  <div *ngIf=\"priority.code =='1'\" style=\"font-family: sans-serif;\">Không lặp lại thông tin người bán, người mua ở các trang sau <span style=\"font-weight: bold;color: red;\">(Kiểu mới - khuyên dùng)</span></div>\r\n                  <div *ngIf=\"priority.code =='0'\" style=\"font-family: sans-serif;\">Lặp lại thông tin người bán, người mua ở các trang sau (Kiểu cũ)</div>\r\n                </div>\r\n    </dx-radio-group>\r\n  </div>\r\n  <div style=\"margin-bottom: 20px;font-weight: bold;\">Ví dụ: </div>\r\n  <div>\r\n    <img id=\"nhieutrang\" src=\"{{urlImg}}\" style=\"width:730px;margin-left: 16px;\">\r\n  </div>\r\n  <div style=\"margin-top: 20px;color: red;font-style: italic\">Lưu ý: Sau khi thay đổi, các hóa đơn đã xuất vẫn hiển thị theo kiểu cũ .</div>\r\n  <iframe id=\"after-iframe\" width=\"0%\" height=\"0px\"></iframe>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <div class=\"button-box\">\r\n    <dx-button text=\"Lưu\" type=\"default\" (click)=\"dongy()\">\r\n    </dx-button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"{{ 'NOTIFY.processing' | translate }}\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/home/components/thong-bao-nang-cap/thong-bao-nang-cap.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/home/components/thong-bao-nang-cap/thong-bao-nang-cap.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bold{font-weight:bold}.modal-body p{line-height:1.5}#packageGrip{margin-top:15px}.modal-footer .button-box{margin:0px auto}.ky-dien-tu{background-color:#FF8D29}.ky-dien-tu:hover{background-color:#FF7700}.ky-dien-tu:active{background-color:#FF7700}.ky-dien-tu:focus{background-color:#FF7700}.tb-contract{font-size:15px;color:#FF8D29;text-transform:none}.radOptionTemp{margin-bottom:20px}::ng-deep .radioGroupH .dx-radiobutton{margin-left:11px;margin-bottom:10px}\n"

/***/ }),

/***/ "./src/app/modules/home/components/thong-bao-nang-cap/thong-bao-nang-cap.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/home/components/thong-bao-nang-cap/thong-bao-nang-cap.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ThongBaoNangCapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongBaoNangCapComponent", function() { return ThongBaoNangCapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_home_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/home/shared */ "./src/app/modules/home/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ThongBaoNangCapComponent = /** @class */ (function () {
    function ThongBaoNangCapComponent(authService, bsModalRef, coreService, router, homeService, translate, templateService, configsService) {
        var _this = this;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.coreService = coreService;
        this.router = router;
        this.homeService = homeService;
        this.translate = translate;
        this.templateService = templateService;
        this.configsService = configsService;
        this.isSuccess = false;
        this.showPopup = false;
        this.valueProgress = 0;
        this.errorImport = false;
        this.subXuatHoaDon = [];
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this.isExportFailed = false;
        this.frmData = new _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__["ModifyModel"]();
        this.rowData = 1;
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
        translate.use(this.authService.getLanguage());
        this._translate = this.authService.getTranslate();
        this.optionsTemp =
            [
                { name: "Không lặp lại header (Thông tin người bán, người mua) ở các trang sau (Cách hiển thị mới EFY khuyên dùng) ", code: "1" },
                { name: "Lặp lại header tại các trang sau (Cách hiển thị cũ) ", code: "0" }
            ];
    }
    ThongBaoNangCapComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        this.currentUser = this.authService.getCurrentUser();
        this.valueTempt = "1";
        this.urlImg = "assets\\img\\icons\\khong_lap_heads.png";
    };
    ThongBaoNangCapComponent.prototype.onValueChanged = function (e) {
        this.valueTempt = e.value;
        if (e.value == '1')
            this.urlImg = "assets\\img\\icons\\khong_lap_heads.png";
        else if (e.value == '0')
            this.urlImg = "assets\\img\\icons\\lap_heads.png";
    };
    ThongBaoNangCapComponent.prototype.dongy = function () {
        var _this = this;
        if (this.valueTempt == "1") {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            this.homeService.getTemplate().subscribe(function (rs) {
                if (rs.status == "success") {
                    if (rs.data.templates && rs.data.templates.length > 0) {
                        _this.arrTemplate = [];
                        _this.arrTemplate = rs.data.templates.filter(function (p) { return p.json_data.multipages_option != '1'; });
                        if (_this.arrTemplate && _this.arrTemplate.length) {
                            _this.showPopup = true;
                            _this.invoiceIndex = 0;
                            _this.tempKiFile = 0;
                            _this.totalInvoice = _this.arrTemplate.length;
                            _this.XuLyMau();
                        }
                        else
                            _this.updateConfig(false);
                    }
                    else
                        _this.updateConfig(false);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
        else {
            this.updateConfig(false);
        }
    };
    ThongBaoNangCapComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ThongBaoNangCapComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm("Cảnh báo: Quá trình chuyển đổi mẫu mẫu sẽ dừng lại nếu bạn đóng cửa sổ này?");
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
    ThongBaoNangCapComponent.prototype.XuLyMau = function () {
        var _this = this;
        var i = this.invoiceIndex;
        var sub = this.templateService.show(this.arrTemplate[i].id).subscribe(function (rs) {
            if (rs.status == 'success') {
                var data = rs.data;
                var dateTempt = data.template;
                _this.loadTemplate(dateTempt, true);
                var tempt = _this.TaoMauDayLen();
                _this.goiApiTaoMau(tempt);
            }
            else {
                _this.isExportFailed = true;
                _this.continuteExportInvoice();
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    ThongBaoNangCapComponent.prototype.goiApiTaoMau = function (tempt) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.subXuatHoaDon = this.templateService.modifyNew(this.arrTemplate[this.invoiceIndex].id, tempt, true).subscribe(function (rs) {
            var isSuccess = false;
            _this.valueProgress += percentComplete;
            _this.ganXong = true;
            _this.tempKiFile = 0;
            if (rs.status == 'success') {
                isSuccess = true;
            }
            else {
                _this.isExportFailed = true;
            }
            _this.continuteExportInvoice();
        }, function (err) { }, function () {
            _this.subXuatHoaDon.unsubscribe();
        });
    };
    ThongBaoNangCapComponent.prototype.continuteExportInvoice = function () {
        if (this.invoiceIndex == this.totalInvoice - 1) {
            this.updateConfig(true);
        }
        else if (this.invoiceIndex < this.totalInvoice - 1) {
            this.invoiceIndex++;
            this.XuLyMau();
        }
    };
    ThongBaoNangCapComponent.prototype.updateConfig = function (isConvert) {
        var _this = this;
        if (!isConvert)
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.configs.system_parameter.chuyen_doi_mau = true;
        var data = {
            config: {
                value: JSON.stringify(this.configs.system_parameter)
            }
        };
        this.configsService.update(this.configs.id.system_parameter, data).subscribe(function (response) {
            if (response.status == "success") {
                if (isConvert) {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Chuyển đổi mẫu thành công", 'success', 5000);
                    _this.daXong = true;
                    setTimeout(function () {
                        _this.showPopup = false;
                    }, 300);
                }
                _this.bsModalRef.hide();
                _this.configsService.getAll().subscribe(function (res) {
                    if (res.data && res.data.configs)
                        _this.authService.setConfigs(res.data.configs);
                });
            }
        }, function (err) { }, function () {
            if (!isConvert)
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    ThongBaoNangCapComponent.prototype.loadTemplate = function (dateTempt, isTaoMau) {
        this.frmData.fillData(dateTempt, "", true, true);
        var raw_file_Decode = Base64.decode(dateTempt.raw_file);
        var raw_file_Parse = JSON.parse(raw_file_Decode);
        this.dataPreview = raw_file_Parse.html + "</html>";
        this.watermark_image_default = raw_file_Parse.watermark_image_default;
        this.watermark_image = raw_file_Parse.watermark_image;
        this.footer = raw_file_Parse.footer;
        this.genCreateTemplate();
    };
    ThongBaoNangCapComponent.prototype.genCreateTemplate = function () {
        //preview
        this.iframeF = document.getElementById('after-iframe');
        this.iframeF.contentDocument.open("text/html", "replace");
        this.iframeF.contentDocument.write(this.dataPreview);
        this.iframeF.contentDocument.close();
        // let tHead = $('#after-iframe').contents().find(".header-block");
        // tHead.replaceWith('<tbody class=\"header-block\" style=\"display: table-header-group;\">' + tHead.html() + '</tbody>');
        // let tHeadHH = $('#after-iframe').contents().find(".table-header");
        // tHeadHH.replaceWith('<tbody class=\"table-header\">' + tHeadHH.html() + '</tbody>');
        var tBody = $('#after-iframe').contents().find(".report-body");
        tBody.css('display', 'table-row-group');
        var tDetailS1 = $('#after-iframe').contents().find(".detail-sumary1");
        var tDetailS2 = $('#after-iframe').contents().find(".detail-sumary2");
        tBody.after("<tbody class=\"t-body-sign\" style=\"display: table-footer-group;page-break-inside: avoid;page-break-after: auto !important;\"></tbody>");
        var tBodySign = $('#after-iframe').contents().find(".t-body-sign");
        tBodySign.append(tDetailS1);
        tBodySign.append(tDetailS2);
        if (this.frmData.json_data.borderColor)
            this.currentBold = this.frmData.json_data.borderColor;
        else {
            this.currentBold = "#776b6b";
            this.frmData.json_data.borderColor = "#776b6b";
        }
        this.frmData.json_data.multipages_option = this.valueTempt;
    };
    ThongBaoNangCapComponent.prototype.TaoMauDayLen = function () {
        $("#after-iframe").contents().find('#tthanghoa').empty();
        // /////// Font Hàng hóa
        var name1 = $('#after-iframe').contents().find('.name-1a783984-576d-c322-7843-bdacf97ac189').css("display");
        var name2 = $('#after-iframe').contents().find('.name-2a783984-576d-c322-7843-bdacf97ac189').css("display");
        var name3 = $('#after-iframe').contents().find('.name-3a783984-576d-c322-7843-bdacf97ac189').css("display");
        var name4 = $('#after-iframe').contents().find('.name-4a783984-576d-c322-7843-bdacf97ac189').css("display");
        var name5 = $('#after-iframe').contents().find('.name-5a783984-576d-c322-7843-bdacf97ac189').css("display");
        var name6 = $('#after-iframe').contents().find('.name-6a783984-576d-c322-7843-bdacf97ac189').css("display");
        var vienBangHangHoa = '#tbDetail .detail-data td:last-child{border-color:' + this.currentBold + ';border-top-color:' + '#dfdfdf' + '}' + '#tbDetail th {border-color:' + this.currentBold + '}' + '#tbDetail .detail-header th:last-child {border-color:' + this.currentBold + '}' + '#tbDetail td {border-color:' + this.currentBold + '}' + '#tbDetail .detail-data td {border-width:1px 0px 1px 1px;border-top-color:' + '#dfdfdf' + '}' + '#tbDetail .detail-sumary td {border-width:1px 1px 1px 1px;border-top-color:' + '#dfdfdf' + '}';
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
        data.raw_file = Base64.encode(JSON.stringify(rawfile));
        return data;
    };
    ThongBaoNangCapComponent.prototype.styleFontInvoice = function () {
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
    ThongBaoNangCapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thong-bao-nang-cap',
            template: __webpack_require__(/*! ./thong-bao-nang-cap.component.html */ "./src/app/modules/home/components/thong-bao-nang-cap/thong-bao-nang-cap.component.html"),
            styles: [__webpack_require__(/*! ./thong-bao-nang-cap.component.scss */ "./src/app/modules/home/components/thong-bao-nang-cap/thong-bao-nang-cap.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["CoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_home_shared__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__["TemplateService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_7__["ConfigsService"]])
    ], ThongBaoNangCapComponent);
    return ThongBaoNangCapComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/img/bg_login.jpg\" id=\"bg\" alt=\"background\">\r\n<div id=\"wrap\">\r\n  <div class=\"container\">\r\n    <header class=\"home-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <a routerLink=\"/\"><img src=\"assets/img/logo.png\" alt=\"ihoadon\" /></a>\r\n          <div class=\"pt-2 pl-1\">\r\n            <h3 class=\"text-white text-uppercase font-weight-bold\">\r\n              <ng-container *ngIf=\"datasAccount\">\r\n                <span>{{datasAccount.name}} </span> | <span>{{ 'CONTROLL.LABEL.mst' | translate }}\r\n                  : {{datasAccount.tax_code}}</span>\r\n              </ng-container>\r\n            </h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <ul class=\"nav nav-home-header\">\r\n            <li class=\"nav-item\">\r\n              <a routerLink=\"/system/information-account\"><img src=\"assets/img/icons/user.png\"></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <app-bell [option]=\"'home'\"></app-bell>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a routerLink=\"/system/information-service\"><img src=\"assets/img/icons/infomation.png\"></a>\r\n            </li>\r\n            <li *ngIf=\"!isVn\" class=\"nav-item\">\r\n              <a href=\"javascript:void(0)\" (click)=\"changLangugeVn()\"><img src=\"assets/img/icons/VIE.png\"></a>\r\n            </li>\r\n            <li *ngIf=\"isVn\" class=\"nav-item\">\r\n              <a href=\"javascript:void(0)\" (click)=\"changLangugeEn()\"><img src=\"assets/img/icons/ENG.png\"></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a routerLink=\"/\"><img src=\"assets/img/icons/logout.png\" (click)=\"logout()\"></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </header>\r\n  </div>\r\n  <div class=\"container\" id=\"content-wraper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7\">\r\n        <h3 class=\"title-article\"> {{ 'MENU.issue_the_invoice' | translate }}</h3>\r\n        <div class=\"row release-invoice\">\r\n          <div class=\"col-md-4 article-group\">\r\n            <a (click)=\"dangky()\" [ngClass]=\"userPermission.includes('dang_ky') ? '' : 'down-opacity'\">\r\n              <article>\r\n                <img class=\"logo-article\" src=\"{{ icon_url + 'DangKy_TT78.png' }}\">\r\n                <p><img class=\"number-title\" src=\"{{ icon_url + '1.png' }}\">{{ 'MENU.register_invoice' | translate }}\r\n                </p>\r\n              </article>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-md-4 article-group\">\r\n            <a [routerLink]=\"userPermission.includes('mau_hoa_don') ? '/system/template' : '/'\"\r\n              [ngClass]=\"userPermission.includes('mau_hoa_don') ? '' : 'down-opacity'\">\r\n              <article>\r\n                <img class=\"logo-article\" src=\"{{ icon_url + 'release-2.png' }}\">\r\n                <p><img class=\"number-title\" src=\"{{ icon_url + '2.png' }}\">{{ 'MENU.create_templates' | translate }}\r\n                </p>\r\n              </article>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-md-4 article-group\">\r\n            <a [routerLink]=\"userPermission.includes('dang_ky_phat_hanh') ? '/system/release-notify' : '/'\"\r\n              [ngClass]=\"userPermission.includes('dang_ky_phat_hanh') ? '' : 'down-opacity'\">\r\n              <article>\r\n                <img class=\"logo-article\" src=\"{{ icon_url + 'release-3.png' }}\">\r\n                <p><img class=\"number-title\" src=\"{{ icon_url + '3.png' }}\">{{ 'MENU.notice_of_release' | translate\r\n                  }}/{{ 'CONTROLL.BUTTON.cancel' | translate }}\r\n                </p>\r\n              </article>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row invoice-management\">\r\n          <div class=\"col-lg-12\">\r\n            <h3 class=\"title-article\">{{ 'MENU.invoice_management' | translate }}</h3>\r\n          </div>\r\n          <div class=\"col-md-4 article-group\">\r\n            <a [routerLink]=\"(userPermission.includes('lap_hoa_don_dien_tu') || userPermission.includes('quan_ly_phieu_thu') || userPermission.includes('lap_chung_tu_khau_tru_thue_tncn') || userPermission.includes('lap_hoa_don_tao_tu_may_tinh_tien') || userPermission.includes('lap_bien_lai') || userPermission.includes('lap_ve_dien_tu') ) ? linkLapHoaDon() : '/'\"\r\n              [ngClass]=\"(userPermission.includes('lap_hoa_don_dien_tu') || userPermission.includes('quan_ly_phieu_thu') || userPermission.includes('lap_chung_tu_khau_tru_thue_tncn')|| userPermission.includes('lap_hoa_don_tao_tu_may_tinh_tien') || userPermission.includes('lap_bien_lai') || userPermission.includes('lap_ve_dien_tu')) ? '' : 'down-opacity'\">\r\n              <article>\r\n                <img class=\"logo-article\" src=\"{{ icon_url + 'manage-1.png' }}\">\r\n                <p><img class=\"number-title\" src=\"{{ icon_url + '1.png' }}\">{{ 'MENU.create_invoice' | translate }}</p>\r\n              </article>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-md-4 article-group\">\r\n            <a [routerLink]=\"userPermission.includes('phe_duyet') ? '/system/approve-invoice' : '/'\"\r\n              [ngClass]=\"userPermission.includes('phe_duyet') ? '' : 'down-opacity'\">\r\n              <article>\r\n                <img class=\"logo-article\" src=\"{{ icon_url + 'manage-2.png' }}\">\r\n                <p><img class=\"number-title\" src=\"{{ icon_url + '2.png' }}\">{{ 'MENU.approve_the_invoice' | translate }}\r\n                </p>\r\n              </article>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-md-4 article-group\">\r\n            <a [routerLink]=\"isNavigateLink() ? xulyHoaDon() : '/'\"\r\n              [ngClass]=\"isNavigateLink() ? '' : 'down-opacity'\">\r\n              <article>\r\n                <img class=\"logo-article\" src=\"{{ icon_url + 'manage-3.png' }}\">\r\n                <p><img class=\"number-title\" src=\"{{ icon_url + '3.png' }}\">{{ 'MENU.handling_invoices' | translate }}\r\n                </p>\r\n              </article>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <h3 class=\"title-article\">{{ 'MENU.search_invoice' | translate }}</h3>\r\n        <div class=\"row search\">\r\n          <div class=\"col-md-4 article-group\">\r\n            <a [routerLink]=\"(userPermission.includes('nhom_tra_cuu') || userPermission.includes('tra_cuu_chung_tu_khau_tru_thue_tncn')) ? tracuuHoaDon() : '/'\"\r\n              [ngClass]=\"(userPermission.includes('nhom_tra_cuu') || userPermission.includes('tra_cuu_chung_tu_khau_tru_thue_tncn')) ? '' : 'down-opacity'\">\r\n              <article>\r\n                <img class=\"logo-article\" src=\"{{ icon_url + 'search-1.png' }}\">\r\n                <p>{{ 'MENU.look_up' | translate }}</p>\r\n              </article>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-md-4 article-group\">\r\n            <a [routerLink]=\"listReport.permissionReport ? listReport.routerLinkReport : '/'\"\r\n              [ngClass]=\"listReport.permissionReport ? '' : 'down-opacity'\">\r\n              <article>\r\n                <img class=\"logo-article\" src=\"{{ icon_url + 'search-2.png' }}\">\r\n                <p>{{ 'MENU.report' | translate }}</p>\r\n              </article>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-md-4 article-group\">\r\n            <a routerLink=\"/system/invoice-buy\">\r\n              <!--            <a routerLink=\"/\">-->\r\n              <article>\r\n                <img class=\"logo-article\" src=\"{{ icon_url + 'manage-1.png' }}\">\r\n                <p>{{ 'MENU.buy_invoice' | translate }}</p>\r\n              </article>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-5\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 list\">\r\n            <h3 class=\"title-article\">{{ 'MENU.category' | translate }}</h3>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-md-6 article-group\">\r\n                <a [routerLink]=\"userPermission.includes('danh_muc_khach_hang') ? urlCustomer : '/'\"\r\n                  [ngClass]=\"userPermission.includes('danh_muc_khach_hang') ? '' : 'down-opacity'\">\r\n                  <article>\r\n                    <img class=\"logo-article\" src=\"{{ icon_url + 'list-1.png' }}\">\r\n                    <p *ngIf=\"!isTruongHoc\">{{ 'MENU.customer' | translate }}</p>\r\n                    <p *ngIf=\"isTruongHoc\">{{ 'MENU.student_customer' | translate }}</p>\r\n                  </article>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-6 article-group\">\r\n                <a [routerLink]=\"userPermission.includes('danh_muc_hang_hoa') ? urlProduct : '/'\"\r\n                  [ngClass]=\"userPermission.includes('danh_muc_hang_hoa') ? '' : 'down-opacity'\">\r\n                  <article>\r\n                    <img class=\"logo-article\" src=\"{{ icon_url + 'list-2.png' }}\">\r\n                    <p *ngIf=\"!isTruongHoc\">{{ 'MENU.goods_and_services' | translate }}</p>\r\n                    <p *ngIf=\"isTruongHoc\">{{ 'MENU.revenue' | translate }}</p>\r\n                  </article>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-6 article-group\">\r\n                <a [routerLink]=\"userPermission.includes('danh_muc_doi_tuong') ? '/system/warehouses' : '/'\"\r\n                  [ngClass]=\"userPermission.includes('danh_muc_doi_tuong') ? '' : 'down-opacity'\">\r\n                  <article>\r\n                    <img class=\"logo-article\" src=\"{{ icon_url + 'list-3.png' }}\">\r\n                    <p>{{ 'MENU.warehouse_of_goods_and_services' | translate }}</p>\r\n                  </article>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-6 article-group\">\r\n                <a [routerLink]=\"userPermission.includes('danh_muc_doi_tuong') ? '/system/lists' : '/'\"\r\n                  [ngClass]=\"userPermission.includes('danh_muc_doi_tuong') ? '' : 'down-opacity'\">\r\n                  <article>\r\n                    <img class=\"logo-article\" src=\"{{ icon_url + 'list-4.png' }}\" style=\"margin-top: 37px\">\r\n                    <p>{{ 'MENU.other' | translate }}</p>\r\n                  </article>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 system-management\">\r\n            <h3 class=\"title-article\">{{ 'MENU.system_management' | translate }}</h3>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-md-6 article-group\">\r\n                <a routerLink=\"/system/user-manual/manual\">\r\n                  <article>\r\n                    <img class=\"logo-article\" src=\"{{ icon_url + 'search-3.png' }}\">\r\n                    <p>{{ 'MENU.guide' | translate }}</p>\r\n                  </article>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-6 article-group\">\r\n                <div class=\"temp\">\r\n                  <a [routerLink]=\"userPermission.includes('nguoi_su_dung') ? '/system/users' : '/'\"\r\n                    [ngClass]=\"userPermission.includes('nguoi_su_dung') ? '' : 'down-opacity'\">\r\n                    <article class=\"child-item\" style=\"top:0;left:0;\">\r\n                      <img class=\"logo-article\" src=\"{{ icon_url + 'system-1.png' }}\">\r\n                      <p>{{ 'MENU.user' | translate }}</p>\r\n                    </article>\r\n                  </a>\r\n                  <a [routerLink]=\"userPermission.includes('thong_tin_don_vi') ? '/system/information-unit' : '/'\"\r\n                    [ngClass]=\"userPermission.includes('thong_tin_don_vi') ? '' : 'down-opacity'\">\r\n                    <article class=\"child-item\" style=\"top:0;right:0;\">\r\n                      <img class=\"logo-article\" src=\"{{ icon_url + 'system-2.png' }}\">\r\n                      <p>{{ 'MENU.unit_information' | translate }}</p>\r\n                    </article>\r\n                  </a>\r\n                </div>\r\n                <div class=\".cleanfix\"></div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-6 article-group\">\r\n                <div class=\"temp\">\r\n                  <a [routerLink]=\"userPermission.includes('tham_so_he_thong') ? '/system/diary-transmission' : '/'\"\r\n                    [ngClass]=\"userPermission.includes('tham_so_he_thong') ? '' : 'down-opacity'\">\r\n                    <article class=\"child-item\" style=\"top:0;left:0;\">\r\n                      <img class=\"logo-article\" src=\"{{ icon_url + 'NhatKyTruyenNhan.png' }}\" style=\"width: 45px;\">\r\n                      <p>{{ 'MENU.diary_transmission' | translate }}</p>\r\n                    </article>\r\n                  </a>\r\n                  <a [routerLink]=\"userPermission.includes('tham_so_he_thong') ? '/system/configs' : '/'\"\r\n                    [ngClass]=\"userPermission.includes('tham_so_he_thong') ? '' : 'down-opacity'\">\r\n                    <article class=\"child-item\" style=\"top:0;right:0;\">\r\n                      <img class=\"logo-article\" src=\"{{ icon_url + 'system-4.png' }}\">\r\n                      <p>{{ 'MENU.system_parameters' | translate }}</p>\r\n                    </article>\r\n                  </a>\r\n                </div>\r\n                <div class=\".cleanfix\"></div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-md-6 article-group\">\r\n                <div class=\"temp\">\r\n                  <a href=\"javascript:void(0)\" class=\"down-opacity\">\r\n                    <article class=\"child-item\" style=\"top:0;left:0;\">\r\n                      <img class=\"logo-article\" src=\"{{ icon_url + 'system-5.png' }}\">\r\n                      <p>{{ 'MENU.data_backup' | translate }}</p>\r\n                    </article>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"down-opacity\">\r\n                    <article class=\"child-item\" style=\"top:0;right:0;\">\r\n                      <img class=\"logo-article\" src=\"{{ icon_url + 'system-6.png' }}\">\r\n                      <p>{{ 'MENU.data_restore' | translate }}</p>\r\n                    </article>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <footer>\r\n    <p>\r\n      <a href=\"https://baohiemxahoidientu.vn/download_teamviewer.zip\" style=\"text-decoration: none; color: #fff\">\r\n        <img src=\"assets/img/icons/teamviewer.png\" alt=\"teamviewer\"> TeamViewer\r\n      </a>\r\n      &nbsp;\r\n      <a href=\"http://download.baohiemxahoidientu.vn/sp/UltraViewer_setup_5.0_vi.rar\"\r\n        style=\"text-decoration: none;color: #fff\">\r\n        <img src=\"assets/img/icons/ultraviewer.png\" alt=\"ultraviewer\"> UltraViewer\r\n      </a>\r\n      &nbsp;<img src=\"assets/img/icons/phone.png\" alt=\"phone\"> {{ 'FOOTER.HOME.northern' | translate }}: <span\r\n        class=\"in-dam\">19006142</span> | {{ 'FOOTER.HOME.southern' | translate }}: <span class=\"in-dam\">19006139</span>\r\n      &nbsp;<img src=\"assets/img/icons/mail.png\" alt=\"mail\"> ihoadon@efy.com.vn\r\n      <span class=\"pull-right\">{{ 'FOOTER.HOME.version' | translate }} {{ version }}</span>\r\n    </p>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrap{min-height:100%}.release-invoice .article-group:nth-child(1) article{background-color:#1b75bb}.release-invoice .article-group:nth-child(2) article{background-color:#2c9bf1}.release-invoice .article-group:nth-child(3) article{background-color:#11b5ef}.invoice-management .article-group:nth-child(2) article{background-color:#f26323}.invoice-management .article-group:nth-child(3) article{background-color:#f8901f}.invoice-management .article-group:nth-child(4) article{background-color:#ffb024}.search .article-group:nth-child(1) article{background-color:#03b60f}.search .article-group:nth-child(2) article{background-color:#03c323}.search .article-group:nth-child(3) article{background-color:#68d824}.list .article-group:nth-child(1) article{background-color:#ee0e5e}.list .article-group:nth-child(2) article{background-color:#e91e63}.list .article-group:nth-child(3) article{background-color:#c2185b}.list .article-group:nth-child(4) article{background-color:#880e4f}.system-management article{background-color:#ac00ca}#bg{position:fixed;top:0;left:0;z-index:0;width:100%;min-width:100%;min-height:100%}.container{position:relative}@media (min-width: 1024px){.container{max-width:1276px}}.home-header{padding-top:25px;padding-bottom:45px}.home-header .nav-home-header{float:right;margin-top:8px}.home-header .nav-home-header .nav-item+.nav-item{margin-left:15px}@media (max-width: 767px){.home-header .nav-home-header{float:left;margin-top:15px}}#content-wraper{color:#fff}#content-wraper .title-article{margin-bottom:15px}#content-wraper a{text-decoration:none}#content-wraper .temp{position:relative;width:215px;height:100px;text-align:center;margin-bottom:15px;float:right}@media (max-width: 1024px){#content-wraper .temp{width:190px}}@media (max-width: 1023px){#content-wraper .temp{float:initial;margin:0px auto 15px}}@media (max-width: 767px){#content-wraper .temp{margin:0 0 15px}}#content-wraper .article-group a:not(.down-opacity) article:hover{-webkit-filter:brightness(115%);filter:brightness(115%);border:1px solid red}#content-wraper article{position:relative;width:215px;height:100px;text-align:center;border:1px solid #375972}#content-wraper article img.logo-article{margin-top:10px;margin-bottom:12px}#content-wraper article img.number-title{margin:0px 4px 2px 0px}#content-wraper article p{position:absolute;bottom:10px;left:10px;color:#fff;text-align:left}@media (max-width: 1024px){#content-wraper article{width:190px}}#content-wraper .child-item{position:absolute;width:102px;height:100px}@media (max-width: 1024px){#content-wraper .child-item{width:92px}}#content-wraper .release-invoice article{margin-bottom:15px}#content-wraper .invoice-management{margin-top:28px;margin-bottom:24px}#content-wraper .invoice-management article{margin-bottom:15px}#content-wraper .search article{margin-bottom:15px}#content-wraper .list article{margin:0px auto 15px}@media (max-width: 767px){#content-wraper .list article{margin:0 0 15px}}#content-wraper .list .title-article{margin-left:11px}@media (max-width: 1023px){#content-wraper .list .title-article{margin-left:0}}#content-wraper .system-management article{float:right;margin-bottom:15px}@media (max-width: 1023px){#content-wraper .system-management article{float:initial;margin:0px auto 15px}}@media (max-width: 767px){#content-wraper .system-management article{margin:0 0 15px}}#content-wraper .system-management .title-article{margin-left:20px}@media (max-width: 1023px){#content-wraper .system-management .title-article{margin-left:0}}footer{margin-top:-20px;color:#fff;font-size:13px}.list-notifi{position:absolute;right:52px;left:auto;width:280px;padding:0 0 0 0;margin:0;top:124%;margin-top:0;border-top-left-radius:0;border-top-right-radius:0;display:block;box-shadow:none;border-color:#eee;z-index:1000;float:left;min-width:160px;font-size:14px;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.15);border-radius:4px;border-top:none}.list-notifi li{display:list-item;text-align:-webkit-match-parent;position:relative}.list-notifi li .menu{max-height:200px;margin:0;padding:0;list-style:none;overflow-x:hidden}.list-notifi .header{border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0;background-color:#ffffff;padding:7px 10px;border-bottom:1px solid #f4f4f4;color:#444444;font-size:14px}.list-notifi>li .menu>li>a{color:#444444;overflow:hidden;text-overflow:ellipsis;padding:10px;display:block;white-space:nowrap;border-bottom:1px solid #f4f4f4}.list-notifi>li .menu>li>a .fa{width:20px}.list-notifi>li.footer>a{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px;font-size:12px;background-color:#fff;padding:7px 10px;border-bottom:1px solid #eeeeee;color:#444 !important;text-align:center}.list-notifi>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.text-aqua{color:#00c0ef !important}.beeperNub{background-image:url(\"/assets/img/icons/icons.png\");background-repeat:no-repeat;background-size:auto;background-position:0 -225px;height:11px;position:absolute;top:33px;right:100px;width:20px}::ng-deep .form-size{max-width:54% !important}::ng-deep .pend-notify{max-width:560px !important;width:560px !important}::ng-deep .survey-sheet .modal-content{border-radius:23px !important}\n"

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_home_components_sign_contract_sign_contract_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/home/components/sign-contract/sign-contract.component */ "./src/app/modules/home/components/sign-contract/sign-contract.component.ts");
/* harmony import */ var _modules_home_components_nhac_viec_nhac_viec_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/home/components/nhac-viec/nhac-viec.component */ "./src/app/modules/home/components/nhac-viec/nhac-viec.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _components_thong_bao_nang_cap_thong_bao_nang_cap_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/thong-bao-nang-cap/thong-bao-nang-cap.component */ "./src/app/modules/home/components/thong-bao-nang-cap/thong-bao-nang-cap.component.ts");
/* harmony import */ var _modules_home_components_notify_invoice_expired_notify_invoice_expired_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/home/components/notify-invoice-expired/notify-invoice-expired.component */ "./src/app/modules/home/components/notify-invoice-expired/notify-invoice-expired.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_info_service_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/info-service/shared */ "./src/app/modules/info-service/shared/index.ts");
/* harmony import */ var _components_notify_warning_notify_warning_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/notify-warning/notify-warning.component */ "./src/app/modules/home/components/notify-warning/notify-warning.component.ts");
/* harmony import */ var _modules_home_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/home/components/change-password/change-password.component */ "./src/app/modules/home/components/change-password/change-password.component.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/modules/home/components/notification/notification.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared */ "./src/app/modules/home/shared/index.ts");
/* harmony import */ var _components_notify_mail_csk_notify_mail_csk_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/notify-mail-csk/notify-mail-csk.component */ "./src/app/modules/home/components/notify-mail-csk/notify-mail-csk.component.ts");
/* harmony import */ var _components_invoice_package_invoice_package_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/invoice-package/invoice-package.component */ "./src/app/modules/home/components/invoice-package/invoice-package.component.ts");
/* harmony import */ var _components_survey_sheet_survey_sheet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/survey-sheet/survey-sheet.component */ "./src/app/modules/home/components/survey-sheet/survey-sheet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router, modalService, coreService, cdRef, translate, configsService, route, bsModalHome, infoService, homeService) {
        this.authService = authService;
        this.router = router;
        this.modalService = modalService;
        this.coreService = coreService;
        this.cdRef = cdRef;
        this.translate = translate;
        this.configsService = configsService;
        this.route = route;
        this.bsModalHome = bsModalHome;
        this.infoService = infoService;
        this.homeService = homeService;
        this.datasAccount = null;
        this.icon_url = 'assets/img/icons/home/';
        this.showNotifi = false;
        this.listReport = {};
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].VERSION;
        // configs: any;
        this.len = 1;
        this.isVn = true;
        this.arrCookie = [];
        this.isTruongHoc = true;
        this.displayStep1 = false;
        this.displayStep2 = false;
        this.displayStep3 = false;
        this.dataEmail = [];
        this.ds_quyen_hoa_don = ['xu_ly_hoa_don', 'dieu_chinh_hoa_don', 'thay_the_hoa_don', 'xoa_hoa_don'];
        this.ds_quyen_chung_tu = ['xu_ly_chung_tu_khau_tru_thue_tncn', 'xoa_chung_tu'];
        this.ds_quyen_bien_lai = ['xu_ly_bien_lai', 'dieu_chinh_bien_lai', 'thay_the_bien_lai', 'xoa_bien_lai'];
        if (this.authService.getLanguage() !== 'vn') {
            this.isVn = false;
        }
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.isAccount_type = this.authService.getAccountType();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getInforAccount();
        this.getCurrentPermission();
        this.showNotiInvoiceBuyPackage();
        var _curentUser = this.authService.getCurrentUser();
        var isConvert = _curentUser.is_convert_TT78;
        if (_curentUser.display_popup_demand_survey) {
            this.modalService.show(_components_survey_sheet_survey_sheet_component__WEBPACK_IMPORTED_MODULE_20__["SurveySheetComponent"], { class: 'modal-lg survey-sheet', backdrop: 'static', keyboard: false });
        }
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        this.configsService.getAll().subscribe(function (res) {
            if (res.data && res.data.configs) {
                _this.authService.setConfigs(res.data.configs);
                var configs = _this.authService.getConfigs();
                if (_this.coreService.showThongBaoNangCap) {
                    _this.homeService.getContent().subscribe(function (res) {
                        if (res.status == "success") {
                            _this.contenNotif = res;
                            if (_this.contenNotif.data && _this.contenNotif.data.length > 0) {
                                var initialState = {
                                    data: _this.contenNotif.data,
                                    currentUser: _curentUser
                                };
                                _this.bsModalSignRef = _this.modalService.show(_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"], { class: 'modal-lg', backdrop: 'static', keyboard: false, initialState: initialState });
                                _this.cdRef.detectChanges();
                            }
                            else
                                _this.coreService.showThongBaoNangCap = false;
                        }
                        else
                            _this.coreService.showThongBaoNangCap = false;
                    });
                }
                if (_this.coreService.showChoCQTXuLy) {
                    _this.homeService.getCountSendCQT().subscribe(function (res) {
                        if (res.status == "success") {
                            if (res.data && parseInt(res.data.total) > 0) {
                                var initialState = {
                                    count: res.data.total,
                                    yesterday_date: res.data.yesterday
                                };
                                _this.bsModalSignRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_15__["PendingNotificationComponent"], { class: 'pend-notify modal-dialog', backdrop: 'static', keyboard: false, initialState: initialState });
                                _this.cdRef.detectChanges();
                            }
                            else
                                _this.coreService.showChoCQTXuLy = false;
                        }
                        else
                            _this.coreService.showChoCQTXuLy = false;
                    });
                }
                if (configs && configs.system_parameter) {
                    if (configs.system_parameter.chuyen_doi_mau === undefined || !configs.system_parameter.chuyen_doi_mau) {
                        var subModal_1 = _this.infoService.checkHtmltempt().subscribe(function (res) {
                            if (res.status == "success") {
                                if (res.data.is_html) {
                                    _this.modalService.show(_components_thong_bao_nang_cap_thong_bao_nang_cap_component__WEBPACK_IMPORTED_MODULE_9__["ThongBaoNangCapComponent"], { class: 'modal-lg', backdrop: 'static', keyboard: false });
                                    _this.cdRef.detectChanges();
                                }
                            }
                            subModal_1.unsubscribe();
                        }, function (err) {
                        });
                    }
                }
            }
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
        });
        ///
        // Thông báo mail lỗi csk hết hạn
        if (_curentUser.auto_notify_error_mail || _curentUser.auto_notify_cks_expire) {
            var auto_notify_error_mail_1 = false;
            var auto_notify_cks_expire_1 = false;
            var mail_license_error_1 = false;
            this.homeService.getListEMailError().subscribe(function (res) {
                _this.dataEmail = res.data.mail_error_notifications.list;
                _this.dataLicense = res.data.mail_license_error_notifications.list;
                if (_this.dataEmail && _this.dataEmail.length > 0) {
                    auto_notify_error_mail_1 = true;
                }
                else {
                    auto_notify_error_mail_1 = false;
                }
                if (_this.dataLicense && _this.dataLicense.length > 0) {
                    mail_license_error_1 = true;
                }
                else {
                    mail_license_error_1 = false;
                }
                _this.homeService.getCSKOverTime().subscribe(function (res) {
                    _this.dataCSK = res.data;
                    if (_this.dataCSK && _this.dataCSK.length > 0) {
                        auto_notify_cks_expire_1 = true;
                    }
                    else {
                        auto_notify_cks_expire_1 = false;
                    }
                    var initialState = {
                        auto_notify_error_mail: auto_notify_error_mail_1,
                        auto_notify_cks_expire: auto_notify_cks_expire_1,
                        mail_license_error: mail_license_error_1,
                        dataEmail: _this.dataEmail,
                        dataCSK: _this.dataCSK,
                        dataLicense: _this.dataLicense
                    };
                    if (auto_notify_error_mail_1 || auto_notify_cks_expire_1) {
                        _this.modalService.show(_components_notify_mail_csk_notify_mail_csk_component__WEBPACK_IMPORTED_MODULE_18__["NotifyMailCskComponent"], { class: 'modal-lg', backdrop: 'static', keyboard: false, initialState: initialState });
                    }
                });
            });
        }
        var account = _curentUser.account;
        if (account) {
            if (account.account_type == "HS-SV") {
                this.urlCustomer = "/system/students";
                this.isTruongHoc = true;
                this.urlProduct = "/system/revenues";
                this.urlHandInv = "/system/handle-invoice-student";
            }
            else {
                this.urlCustomer = "/system/customers";
                this.isTruongHoc = false;
                this.urlProduct = "/system/products";
                this.urlHandInv = "/system/handle-invoice";
            }
        }
        var IsSelectReport = false;
        this.userPermission.forEach(function (element) {
            switch (element) {
                case 'BC26/AC':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/bc26'
                            };
                    }
                    break;
                case 'BC_PM_KE_TOAN':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/bc26'
                            };
                    }
                    break;
                case '01_1/GTGT':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/list'
                            };
                    }
                    break;
                case 'BC01DN/BC-IHOADON':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/revenue'
                            };
                    }
                    break;
                case 'BC01THUE/BC-iHOADON':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/vat'
                            };
                    }
                    break;
                case 'BC02DN/BC-iHOADON':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/detail-product'
                            };
                    }
                    break;
                case 'BC03DN/BC-iHOADON':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/column_chart'
                            };
                    }
                    break;
                case 'BC07DN/BC-iHOADON':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/revenue_line_chart'
                            };
                    }
                    break;
                case 'BC04DN/BC-iHOADON':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/circle_chart'
                            };
                    }
                    break;
                case 'BC_LISENCE_DETAIL':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/report-license-detail'
                            };
                    }
                    break;
                case 'BC_LISENCE_USED':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/license-export-used'
                            };
                    }
                    break;
                case 'BC_RECEIPT_USED':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/use-receipt'
                            };
                    }
                    break;
                case 'BC_RECEIPT_DETAIL':
                    if (!IsSelectReport) {
                        IsSelectReport = true;
                        _this.listReport =
                            {
                                permissionReport: true,
                                routerLinkReport: '/system/report/detail-receipt'
                            };
                    }
                    break;
            }
        });
        this.tax_code = parseInt(this.authService.getCurrentUser().account.tax_code, 10);
    };
    // notifInside(){
    //   this.notifComp.dong(event);
    // }
    HomeComponent.prototype.showNotiInvoiceBuyPackage = function () {
        var _this = this;
        this.homeService.getDataPackageInvoiceBuy().subscribe(function (res) {
            var packages = res.data.packages.filter(function (p) { return p.type == "INPUT_INVOICE_PACKAGE"; });
            if (packages.length > 0) {
                var isremaining = packages.filter(function (p) { return (p.amount - p.used_amount) > 0; });
                if (isremaining.length == 1) {
                    var used_amount = parseInt(isremaining[0].used_amount);
                    var amount = parseInt(isremaining[0].amount);
                    var remaining_amount = amount - used_amount;
                    var warning_amout = 5 * amount / 100;
                    if (remaining_amount <= warning_amout && remaining_amount !== 0) {
                        var initialState = {
                            isWarning: true,
                            remaining_amount: remaining_amount
                        };
                        _this.modalService.show(_components_invoice_package_invoice_package_component__WEBPACK_IMPORTED_MODULE_19__["InvoicePackageComponent"], {
                            class: 'modal-md', backdrop: 'static', initialState: initialState,
                            keyboard: false
                        });
                    }
                }
                if (isremaining.length == 0) {
                    var initialState = {
                        isWarning: false,
                    };
                    _this.modalService.show(_components_invoice_package_invoice_package_component__WEBPACK_IMPORTED_MODULE_19__["InvoicePackageComponent"], {
                        class: 'modal-md', backdrop: 'static', initialState: initialState,
                        keyboard: false
                    });
                }
            }
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.authService.getCurrentUser().unsigned === 1 && !this.coreService.boquaKy) {
            var initialState = {
                invoice_releases: ''
            };
            this.modalService.show(_modules_home_components_sign_contract_sign_contract_component__WEBPACK_IMPORTED_MODULE_4__["SignContractComponent"], {
                class: 'modal-lg full-modal form-size', initialState: initialState, backdrop: 'static',
                keyboard: false
            });
            this.cdRef.detectChanges();
        }
        this.sub = this.coreService.noticeStream.subscribe(function (rs) {
            if (rs && rs.length > 0) {
                /* Hiển thị thông báo nhắc việc */
                var initialState = {
                    data: rs
                };
                if (_this.len === 1 && _this.coreService.showNhacViec) {
                    _this.modalService.show(_modules_home_components_nhac_viec_nhac_viec_component__WEBPACK_IMPORTED_MODULE_5__["NhacViecComponent"], { class: 'modal-lg', backdrop: 'static', keyboard: false, initialState: initialState });
                    _this.len++;
                    _this.cdRef.detectChanges();
                }
            }
            // sub.unsubscribe();
        });
        var _curentUser = this.authService.getCurrentUser();
        if (_curentUser.is_convert_TT78) {
            var sub_1 = this.authService.apiInfoRegister().subscribe(function (rs) {
                if (rs.status == "success") {
                    _this.authService.setInfoRegister(rs.data);
                    //Kiểm tra tờ khai chưa được chấp nhận
                    if ((rs.data && !rs.data.id) || (rs.data && !rs.data.is_end) || !rs.data) {
                        var subChild_1 = _this.authService.getInforDeclare().subscribe(function (rsChild) {
                            if (rsChild.status == "success") {
                                if (rsChild.data && rsChild.data.id && (rsChild.data.status == "TU_CHOI" || !rsChild.data.status)) {
                                    var lstErr = void 0;
                                    if (rsChild.data.status == "TU_CHOI")
                                        lstErr = JSON.parse(rsChild.data.error_content);
                                    else {
                                        lstErr = [];
                                        var object = new Object;
                                        object["MLoi"] = "VE019";
                                        object["MTLoi"] = "Nộp tờ khai không thành công";
                                        lstErr.push(object);
                                    }
                                    var initialState = {
                                        lstErr: lstErr,
                                        notifyType: "THONG_BAO_LOI_CQT",
                                        titleErr: "Đăng ký sử dụng HĐĐT không được CQT Chấp nhận"
                                    };
                                    _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_15__["SendDataForTaxComponent"], {
                                        backdrop: 'static',
                                        keyboard: true,
                                        class: 'modal-lg modal-margin-width',
                                        initialState: initialState
                                    });
                                    var subModal_2 = _this.modalService.onHide.subscribe(function () {
                                        subModal_2.unsubscribe();
                                    });
                                }
                            }
                        }, function (err) { }, function () {
                            subChild_1.unsubscribe();
                        });
                    }
                }
            }, function (err) { }, function () {
                sub_1.unsubscribe();
            });
            var subRelease_1 = this.authService.getInvoiceRelease().subscribe(function (rs) {
                if (rs.status == "success") {
                    _this.authService.setInfoFormRelease(rs.data);
                }
            }, function (err) { }, function () {
                subRelease_1.unsubscribe();
            });
        }
        else {
            /* Hiển thị thông báo chuyển đổi TT78 */
            if (_curentUser && this.coreService.showWarningInvoiceWait) {
                if (_curentUser.is_exists_wait_sign && !_curentUser.is_convert_TT78) {
                    var initialState = {
                        typeNotify: _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].notify.HoaDonChoKy,
                    };
                    this.modalService.show(_components_notify_warning_notify_warning_component__WEBPACK_IMPORTED_MODULE_13__["NotifyWarningComponent"], { class: 'modal-lg', backdrop: 'static', keyboard: false, initialState: initialState });
                    this.cdRef.detectChanges();
                }
            }
        }
        //#region Thay đổi mật khẩu
        if (_curentUser.change_password && this.coreService.showChangePassword) {
            this.modalService.show(_modules_home_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_14__["ChangePasswordComponent"], { class: 'modal-lg', backdrop: 'static', keyboard: false });
            this.cdRef.detectChanges();
        }
        // if (_curentUser && _curentUser.notify && _curentUser.notify.content) {
        //   const initialState = {
        //     noiDungNangCap: _curentUser.notify.content,
        //     _curentUser: _curentUser
        //   };
        //   this.modalService.show(ThongBaoNangCapComponent, { class: 'modal-lg', backdrop: 'static', keyboard: false, initialState });
        //   this.cdRef.detectChanges();
        // }
        //#endregion
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (value) { return value.HomepageResolverService; })).subscribe(function (value) {
            var a = value.some(function (demo) { return demo.activation_status === '0'; });
            if (a === false) {
                var arrayData = [];
                if (value && value.length > 0)
                    arrayData.push(value[value.length - 1]);
                // for (let i = 0; i < value.length; i++) {
                //   if (value.length - parseInt(value[i].order, 10) === 0) {
                //     arrayData.push(value[i]);
                //   }
                // }
                var amount = parseInt(arrayData[0].amount, 10);
                var used_amount = parseInt(arrayData[0].used_amount, 10);
                var amount_remain = amount - used_amount;
                var total = ((amount - used_amount) / amount) * 100;
                if (total < 10) {
                    _this.dataIsNotify = _this.getCookie();
                    var initialState = {
                        dataAmount: amount_remain,
                        tax_code: parseInt(_this.authService.getCurrentUser().account.tax_code, 10)
                    };
                    if (_this.dataIsNotify === null || _this.dataIsNotify === 0 || amount_remain === 0) {
                        _this.bsModalHome = _this.modalService.show(_modules_home_components_notify_invoice_expired_notify_invoice_expired_component__WEBPACK_IMPORTED_MODULE_10__["NotifyInvoiceExpiredComponent"], {
                            class: 'modal-md', initialState: initialState, backdrop: 'static',
                            keyboard: false
                        });
                    }
                    _this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalHome.content !== undefined) {
                            if (_this.bsModalHome.content.successSaveItem === 'SuccessHomePage') {
                                _this.router.navigate(['/system/information-service']);
                                delete _this.bsModalHome.content.successSaveItem;
                            }
                        }
                    });
                }
            }
        }, function (error) { return _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(error, 'error'); });
        /* Cập nhật thông báo */
        // let dateFromStart = moment("17/04/2022", 'DD/MM/YYYY').format('YYYY-MM-DD 06:00:00');
        // let dateFromEnd = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        // if (dateFromEnd < dateFromStart) {
        //   if (this.coreService.showThongBaoNangCap) {
        //     this.modalService.show(NotificationComponent, { class: 'modal-lg', backdrop: 'static', keyboard: false });
        //     this.cdRef.detectChanges();
        //   }
        // }
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirmVA(this._translate.CONFIRM.logout, this._translate.NOTIFY.notify, function () {
            if (_this.authService.getTypeLogin() == "OPEN_ID") {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                _this.authService.logoutOpenId().toPromise().then(function (res) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    if (res.status == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].statusApi.success) {
                        _this.authService.logout();
                        window.open(res.data.link, "_parent");
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, res.status);
                    }
                });
            }
            else {
                _this.authService.logout();
                window.location.href = '/login';
            }
        });
    };
    HomeComponent.prototype.dangky = function () {
        var _this = this;
        if (this.userPermission.includes('dang_ky')) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var subModal_3 = this.infoService.getStatusInvoiceWait().subscribe(function (res) {
                if (res.status == "success") {
                    if (res.data.is_exist)
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Vui lòng xuất các hóa đơn chờ ký để chuyển đổi áp dụng HĐĐT theo TT78.", 'error');
                    else {
                        var sub_2 = _this.authService.syncDeclarations().subscribe(function (rs) {
                            _this.router.navigate(['register-new']);
                        }, function (err) {
                            _this.router.navigate(['register-new']);
                        }, function () {
                            sub_2.unsubscribe();
                        });
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                }
                subModal_3.unsubscribe();
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            });
        }
        else {
            this.router.navigate(['/']);
        }
    };
    HomeComponent.prototype.getCurrentPermission = function () {
        var currentUser = this.authService.getCurrentUser();
        if (currentUser.user.permissions) {
            this.userPermission = currentUser.user.permissions.split(',');
        }
    };
    HomeComponent.prototype.linkLapHoaDon = function () {
        var company_type = this.authService.getInfoRegister().company_type;
        var account_type = this.authService.getCurrentUser().account.account_type;
        var is_cash_register = this.authService.getInfoRegister().is_cash_register;
        var is_invoice_no_code = this.authService.getInfoRegister().is_invoice_no_code;
        var is_invoice_with_code = this.authService.getInfoRegister().is_invoice_with_code;
        var link;
        if (this.userPermission.includes('lap_hoa_don_dien_tu') && (is_invoice_no_code || is_invoice_with_code)) {
            if (account_type == "HS-SV") {
                switch (company_type) {
                    case 'KHAU_TRU':
                        link = '/system/student-vat-invoice';
                        break;
                    case 'TRUC_TIEP':
                        link = '/system/student-sale-invoice';
                        break;
                    default:
                        link = '/system/student-sale-invoice';
                        break;
                }
            }
            else {
                switch (company_type) {
                    case 'KHAU_TRU':
                        link = '/system/vat-invoice';
                        // link = '/system/list-invoice/01GTKT';
                        break;
                    case 'TRUC_TIEP':
                        link = '/system/sale-invoice';
                        // link = '/system/list-invoice/02GTTT';
                        break;
                    case 'TRUC_TIEP_KHAU_TRU':
                        link = '/system/vat-invoice';
                        // link = '/system/list-invoice/02GTTT';non-tariff-invoice
                        break;
                    case 'CHEXUAT_PHITHUEQUAN':
                        link = '/system/non-tariff-invoice';
                        break;
                    default:
                        break;
                }
            }
        }
        else if (this.userPermission.includes('lap_hoa_don_tao_tu_may_tinh_tien') && is_cash_register) {
            switch (company_type) {
                case 'KHAU_TRU':
                case 'TRUC_TIEP_KHAU_TRU':
                    link = '/system/bills-invoice-vat';
                    break;
                case 'TRUC_TIEP':
                    link = '/system/bills-invoice-sale';
                    break;
                default:
                    break;
            }
        }
        else if (this.userPermission.includes('lap_ve_dien_tu') && (is_invoice_no_code || is_invoice_with_code)) {
            link = '/system/ticket-invoice';
        }
        else if (this.userPermission.includes('quan_ly_phieu_thu') && account_type == "HS-SV") {
            link = '/system/receipts';
        }
        else if (this.userPermission.includes('lap_chung_tu_khau_tru_thue_tncn')) {
            link = '/system/voucher-tax';
        }
        else if (this.userPermission.includes('lap_bien_lai')) {
            link = '/system/payment-receipt';
        }
        return link;
    };
    HomeComponent.prototype.isNavigateLink = function (list_role) {
        var _this = this;
        var ds_quyen = this.ds_quyen_hoa_don.concat(this.ds_quyen_chung_tu, this.ds_quyen_bien_lai);
        if (list_role)
            ds_quyen = list_role;
        if (this.userPermission) {
            var is_exist = ds_quyen.some(function (item) { return _this.userPermission.some(function (p) { return p === item; }); });
            return is_exist;
        }
        return false;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    HomeComponent.prototype.changLangugeVn = function () {
        this.isVn = true;
        this.authService.setLanguage('vn');
        this.translate.use('vn');
    };
    HomeComponent.prototype.changLangugeEn = function () {
        this.isVn = false;
        this.authService.setLanguage('en');
        this.translate.use('en');
    };
    HomeComponent.prototype.getInforAccount = function () {
        var dataAcount = JSON.parse(window.localStorage.getItem('currentUser'));
        this.datasAccount = dataAcount.account;
    };
    HomeComponent.prototype.getCookie = function () {
        this.arrCookie = [];
        var ca = document.cookie.split(';');
        var name = 'isNotifyUser';
        var tax_code = parseInt(this.authService.getCurrentUser().account.tax_code, 10);
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].split('=');
            if (name === c[0].trim()) {
                this.arrCookie = JSON.parse(c[1]);
            }
            else {
                this.arrCookie = [];
            }
        }
        if (this.arrCookie.length > 0) {
            var value = this.arrCookie.some(function (element) { return element.tax_code === tax_code; });
            if (value) {
                for (var i = 0; i < this.arrCookie.length; i++) {
                    if (tax_code === this.arrCookie[i].tax_code) {
                        return parseInt(this.arrCookie[i].isCheck, 10);
                    }
                }
            }
            else {
                return 0;
            }
        }
        else {
            return 0;
        }
    };
    HomeComponent.prototype.xulyHoaDon = function () {
        if (this.isNavigateLink(this.ds_quyen_hoa_don))
            return this.urlHandInv;
        else {
            if (this.isNavigateLink(this.ds_quyen_chung_tu))
                this.urlHandInv = "/system/handle-vouchers";
            else if (this.isNavigateLink(this.ds_quyen_bien_lai))
                this.urlHandInv = "/system/handle-receipt";
        }
        return this.urlHandInv;
    };
    HomeComponent.prototype.tracuuHoaDon = function () {
        var link = "/";
        if (this.userPermission.includes('nhom_tra_cuu'))
            link = "/system/search";
        else if (this.userPermission.includes('tra_cuu_chung_tu_khau_tru_thue_tncn'))
            link = "/system/search-vouchers";
        return link;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('notifComp'),
        __metadata("design:type", _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"])
    ], HomeComponent.prototype, "notifComp", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_8__["ConfigsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_info_service_shared__WEBPACK_IMPORTED_MODULE_12__["InfoServiceService"],
            _shared__WEBPACK_IMPORTED_MODULE_17__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _components_sign_contract_sign_contract_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sign-contract/sign-contract.component */ "./src/app/modules/home/components/sign-contract/sign-contract.component.ts");
/* harmony import */ var _components_nhac_viec_nhac_viec_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nhac-viec/nhac-viec.component */ "./src/app/modules/home/components/nhac-viec/nhac-viec.component.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _components_thong_bao_nang_cap_thong_bao_nang_cap_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/thong-bao-nang-cap/thong-bao-nang-cap.component */ "./src/app/modules/home/components/thong-bao-nang-cap/thong-bao-nang-cap.component.ts");
/* harmony import */ var _components_notify_invoice_expired_notify_invoice_expired_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notify-invoice-expired/notify-invoice-expired.component */ "./src/app/modules/home/components/notify-invoice-expired/notify-invoice-expired.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _modules_info_service_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/info-service/shared */ "./src/app/modules/info-service/shared/index.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/modules/home/components/change-password/change-password.component.ts");
/* harmony import */ var _modules_users_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/users/shared */ "./src/app/modules/users/shared/index.ts");
/* harmony import */ var _components_notify_warning_notify_warning_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/notify-warning/notify-warning.component */ "./src/app/modules/home/components/notify-warning/notify-warning.component.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/modules/home/components/notification/notification.component.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _components_notify_mail_csk_notify_mail_csk_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/notify-mail-csk/notify-mail-csk.component */ "./src/app/modules/home/components/notify-mail-csk/notify-mail-csk.component.ts");
/* harmony import */ var _components_invoice_package_invoice_package_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/invoice-package/invoice-package.component */ "./src/app/modules/home/components/invoice-package/invoice-package.component.ts");
/* harmony import */ var _components_survey_sheet_survey_sheet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/survey-sheet/survey-sheet.component */ "./src/app/modules/home/components/survey-sheet/survey-sheet.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//component


















var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_4__["devextremeModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_8__["vTranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_sign_contract_sign_contract_component__WEBPACK_IMPORTED_MODULE_6__["SignContractComponent"],
                _components_nhac_viec_nhac_viec_component__WEBPACK_IMPORTED_MODULE_7__["NhacViecComponent"],
                _components_thong_bao_nang_cap_thong_bao_nang_cap_component__WEBPACK_IMPORTED_MODULE_9__["ThongBaoNangCapComponent"],
                _components_notify_invoice_expired_notify_invoice_expired_component__WEBPACK_IMPORTED_MODULE_10__["NotifyInvoiceExpiredComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordComponent"],
                _components_notify_warning_notify_warning_component__WEBPACK_IMPORTED_MODULE_15__["NotifyWarningComponent"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"],
                _components_notify_mail_csk_notify_mail_csk_component__WEBPACK_IMPORTED_MODULE_19__["NotifyMailCskComponent"],
                _components_invoice_package_invoice_package_component__WEBPACK_IMPORTED_MODULE_20__["InvoicePackageComponent"],
                _components_survey_sheet_survey_sheet_component__WEBPACK_IMPORTED_MODULE_21__["SurveySheetComponent"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["SafeHtmlPipe"]
            ],
            entryComponents: [
                _components_sign_contract_sign_contract_component__WEBPACK_IMPORTED_MODULE_6__["SignContractComponent"],
                _components_nhac_viec_nhac_viec_component__WEBPACK_IMPORTED_MODULE_7__["NhacViecComponent"],
                _components_thong_bao_nang_cap_thong_bao_nang_cap_component__WEBPACK_IMPORTED_MODULE_9__["ThongBaoNangCapComponent"],
                _components_notify_invoice_expired_notify_invoice_expired_component__WEBPACK_IMPORTED_MODULE_10__["NotifyInvoiceExpiredComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordComponent"],
                _components_notify_warning_notify_warning_component__WEBPACK_IMPORTED_MODULE_15__["NotifyWarningComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["NotifySuccessComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_3__["SendDataForTaxComponent"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"],
                _components_notify_mail_csk_notify_mail_csk_component__WEBPACK_IMPORTED_MODULE_19__["NotifyMailCskComponent"],
                _components_invoice_package_invoice_package_component__WEBPACK_IMPORTED_MODULE_20__["InvoicePackageComponent"],
                _components_survey_sheet_survey_sheet_component__WEBPACK_IMPORTED_MODULE_21__["SurveySheetComponent"]
            ],
            providers: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsModalRef"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsModalService"],
                _modules_info_service_shared__WEBPACK_IMPORTED_MODULE_12__["InfoServiceService"],
                _modules_users_shared__WEBPACK_IMPORTED_MODULE_14__["UsersService"],
                _modules_template_shared__WEBPACK_IMPORTED_MODULE_17__["TemplateService"],
                _modules_configs_shared__WEBPACK_IMPORTED_MODULE_18__["ConfigsService"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-home-home-module.js.map