(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-manual-user-manual-module"],{

/***/ "./src/app/modules/user-manual/components/manual/manual.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user-manual/components/manual/manual.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pl-0 mb-0\">\r\n  <div class=\"row\">\r\n    <div class=\"pl-0 col-md-12\">\r\n      <div class=\"button-redirect\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"javascript:void(0)\">{{_translate.MENU.guide}}</a>\r\n          </li>\r\n<!--          <li class=\"nav-item\">-->\r\n<!--            <a class=\"nav-link \" (click)=\"routerNavigate()\" href=\"javascript:void(0)\">-->\r\n<!--              {{_translate.NOTIFY.notify}}-->\r\n<!--            </a>-->\r\n<!--          </li>-->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row pt-2\" style=\"padding-left: 20px\">\r\n    <div class=\"col-md-7\">\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n      <a href=\"javascript:void(0)\" (click)=\"routerHelper(5)\">\r\n        <article class=\"mr-5 text-center\" style=\"display: inline-block!important;\">\r\n          <span><img src=\"assets/img/icons/xu_ly_sai_sot.png\" alt=\"\"></span>\r\n          <p class=\"pt-3 font-weight-bold\">{{_translate.CONTROLL.LABEL.handle_invoice_error}}</p>\r\n        </article>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row\" style=\"padding-top: 70px\">\r\n        <div class=\"col-md-2 pr-0\" style=\"max-width: 15%\">\r\n          <a href=\"javascript:void(0)\" (click)=\"routerHelper(1)\">\r\n            <article class=\"mr-5 text-center\" style=\"display: inline-block!important;\">\r\n              <span><img src=\"assets/img/icons/set-up-report.png\" alt=\"\"></span>\r\n              <p class=\"pt-3 font-weight-bold\">{{_translate.CONTROLL.LABEL.initial_setup}}</p>\r\n            </article>\r\n          </a>\r\n          <div style=\"position: absolute; top: 25px; left: 98px\">\r\n            <article>\r\n              <span><img src=\"assets/img/icons/100.png\" alt=\"\"></span>\r\n            </article>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 pr-0\" style=\"max-width: 15%\">\r\n          <a href=\"javascript:void(0)\" (click)=\"routerHelper(2)\">\r\n            <article class=\"mr-5 text-center\" style=\"display: inline-block!important;\">\r\n              <span><img src=\"assets/img/icons/lap_ho_so.png\" alt=\"\"></span>\r\n              <p class=\"pt-3 font-weight-bold\">{{_translate.CONTROLL.LABEL.create_document_notify_for_invoice}}</p>\r\n            </article>\r\n          </a>\r\n          <div style=\"position: absolute; top: 25px; left: 114px\">\r\n            <article>\r\n              <span><img src=\"assets/img/icons/100.png\" alt=\"\"></span>\r\n            </article>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 pr-0\" style=\"max-width: 15%\">\r\n          <a href=\"javascript:void(0)\" (click)=\"routerHelper(3)\">\r\n            <article class=\"mr-5 text-center\" style=\"display: inline-block!important;\">\r\n              <span><img src=\"assets/img/icons/3_lap_xuat_75.png\" alt=\"\"></span>\r\n              <p class=\"pt-3 font-weight-bold\">{{_translate.CONTROLL.LABEL.create_and_export_invoice}}</p>\r\n            </article>\r\n          </a>\r\n          <div style=\"position: absolute; top: 25px; left: 108px\">\r\n            <article>\r\n              <span><img src=\"assets/img/icons/100.png\" alt=\"\"></span>\r\n            </article>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 pr-0\">\r\n          <a href=\"javascript:void(0)\" (click)=\"routerHelper(4)\">\r\n            <article class=\"mt-3 mr-5 text-center\" style=\"display: inline-block!important;\">\r\n              <span><img src=\"assets/img/icons/4_gui_r95.png\" alt=\"\"></span>\r\n              <p class=\"pt-4 font-weight-bold\">{{_translate.CONTROLL.LABEL.send_invoice}}</p>\r\n            </article>\r\n          </a>\r\n          <div style=\"position: absolute; left: 239px; bottom: 98px\">\r\n            <article>\r\n              <span><img src=\"assets/img/icons/len.png\" alt=\"\"></span>\r\n            </article>\r\n          </div>\r\n          <div style=\"position: absolute; top: 25px; left: 115px\">\r\n            <article>\r\n              <span><img src=\"assets/img/icons/385.png\" alt=\"\"></span>\r\n            </article>\r\n          </div>\r\n          <div style=\"position: absolute; top: 31px; left: 340px\">\r\n            <article>\r\n              <span><img src=\"assets/img/icons/xuong.png\" alt=\"\"></span>\r\n            </article>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 text-center\">\r\n          <a href=\"javascript:void(0)\" (click)=\"routerHelper(7)\">\r\n            <article class=\" text-center ml-3\" style=\"display: inline-block!important;\">\r\n              <span><img src=\"assets/img/icons/bao_cao.png\" alt=\"\"></span>\r\n              <p class=\"pt-3 font-weight-bold\">{{_translate.MENU.report}}</p>\r\n            </article>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <a href=\"javascript:void(0)\" (click)=\"routerHelper(6)\">\r\n        <article class=\"mr-5 text-center\" style=\"display: inline-block!important;width: 35%\">\r\n          <span><img src=\"assets/img/icons/huy_hoa_don.png\" alt=\"\"></span>\r\n          <p class=\"pt-3 font-weight-bold\">{{_translate.CONTROLL.LABEL.cancel_invoice_not_use}}</p>\r\n        </article>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row pt-2\">\r\n    <div class=\"col-md-12 text-center\">\r\n      <button type=\"button\" class=\"btn style-button\"\r\n              (click)=\"routerHelper(8)\">{{_translate.CONTROLL.LABEL.other_utility}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/user-manual/components/manual/manual.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user-manual/components/manual/manual.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "article p{color:#333}.style-button{border-radius:0 !important;line-height:10px !important;color:#fff;padding:10px 80px;background-color:#337ab7;border:1px solid #2d6da3}.style-button:hover{color:#fff;background-color:#285f8f;border-color:#265a87}\n"

/***/ }),

/***/ "./src/app/modules/user-manual/components/manual/manual.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user-manual/components/manual/manual.component.ts ***!
  \***************************************************************************/
/*! exports provided: ManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualComponent", function() { return ManualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManualComponent = /** @class */ (function () {
    function ManualComponent(authService, translate, router) {
        this.authService = authService;
        this.translate = translate;
        this.router = router;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.translate.use(this._language);
    }
    ManualComponent.prototype.ngOnInit = function () {
    };
    ManualComponent.prototype.routerNavigate = function () {
        this.router.navigate(['/system/user-manual/notify']);
    };
    ManualComponent.prototype.routerHelper = function (number) {
        switch (number) {
            case 1:
                window.open('http://help.ihoadon.vn/huongdanv3/thietlapbandau/cacbuocthietlap/1/', '_blank');
                break;
            case 2:
                window.open('http://help.ihoadon.vn/huongdanv3/hosothongbaophathanh/1/', '_blank');
                break;
            case 3:
                window.open('http://help.ihoadon.vn/huongdanv3/lapxuathd/laphoadon/1/', '_blank');
                break;
            case 4:
                window.open('http://help.ihoadon.vn/huongdanv3/guihd/1/', '_blank');
                break;
            case 5:
                window.open('http://help.ihoadon.vn/huongdanv3/xulyhoadon/cactruonghop/1/', '_blank');
                break;
            case 6:
                window.open('http://help.ihoadon.vn/huongdanv3/taothongbaophathanh/1/#i25-huy-dai-so-tai-thong-bao-phat-hanh-a-nop', '_blank');
                break;
            case 7:
                window.open('http://help.ihoadon.vn/huongdanv3/baocao/1/', '_blank');
                break;
            case 8:
                window.open('http://help.ihoadon.vn/huongdanv3/tienichkhac/hoadonngoaite/1/', '_blank');
                break;
            default:
                this.router.navigate(['/']);
        }
    };
    ManualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manual',
            template: __webpack_require__(/*! ./manual.component.html */ "./src/app/modules/user-manual/components/manual/manual.component.html"),
            styles: [__webpack_require__(/*! ./manual.component.scss */ "./src/app/modules/user-manual/components/manual/manual.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ManualComponent);
    return ManualComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-manual/components/notify/notify.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user-manual/components/notify/notify.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pl-0\">\r\n  <div class=\"row\">\r\n    <div class=\"pl-0 col-md-12\">\r\n      <div class=\"button-redirect\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link \" (click)=\"routerNavigate()\" href=\"javascript:void(0)\">{{_translate.MENU.guide}}</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"javascript:void(0)\">\r\n              {{_translate.NOTIFY.notify}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row pt-2\">\r\n    <div class=\"col-md-4 pr-0\">\r\n      <dx-data-grid\r\n        id=\"gridContainer\"\r\n        [dataSource]=\"dataSource\"\r\n        [showBorders]=\"true\"\r\n        [showRowLines]=\"true\"\r\n        [hoverStateEnabled]=\"true\"\r\n        (onSelectionChanged)=\"selectionChanged($event)\"\r\n        [(selectedRowKeys)]=\"selectedRows\"\r\n      >\r\n        <dxo-selection mode=\"single\"></dxo-selection>\r\n        <dxo-paging [pageSize]=\"5\"></dxo-paging>\r\n        <dxo-pager\r\n          [showPageSizeSelector]=\"true\"\r\n          [allowedPageSizes]=\"[5, 10]\"\r\n          [showInfo]=\"true\">\r\n        </dxo-pager>\r\n        <dxi-column\r\n          cellTemplate=\"timeNotify\"\r\n          [caption]=\"_translate.NOTIFY.date_notify\"\r\n          width=\"150\"\r\n          alignment=\"center\"\r\n        >\r\n        </dxi-column>\r\n        <dxi-column\r\n          cellTemplate=\"titleNotify\"\r\n          [caption]=\"_translate.NOTIFY.title\"\r\n          [width]=\"_translate.GRID_WIDTH.title_notify\"\r\n        >\r\n        </dxi-column>\r\n        <div *dxTemplate=\"let d of 'timeNotify'\">\r\n          <span [className]=\"d.data.read_status === false ? 'testCss':''\">{{formatTime(d.data.created_at)}}</span>\r\n        </div>\r\n        <div *dxTemplate=\"let d of 'titleNotify'\">\r\n          <span [className]=\"d.data.read_status === false ? 'testCss':''\">{{d.data.title}}</span>\r\n        </div>\r\n      </dx-data-grid>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"card mb-0\">\r\n        <div class=\"card-header\">\r\n          <h1 class=\"text-primary text-uppercase font-weight-bold\"\r\n              style=\"font-size: 16px\">{{this.textTitle}}</h1>\r\n\r\n          <span>{{this.textDate}}</span>\r\n        </div>\r\n        <div class=\"card-body\"\r\n             style=\"height:372px;overflow-y: scroll;\"\r\n             [innerHTML]=\"this.contentHtml | safeHtml\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/user-manual/components/notify/notify.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user-manual/components/notify/notify.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-redirect .nav-tabs{border-bottom:1px solid #dee2e6 !important}.testCss{font-weight:600}\n"

/***/ }),

/***/ "./src/app/modules/user-manual/components/notify/notify.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user-manual/components/notify/notify.component.ts ***!
  \***************************************************************************/
/*! exports provided: NotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyComponent", function() { return NotifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_user_manual_user_manual_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/user-manual/user-manual.service */ "./src/app/modules/user-manual/user-manual.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotifyComponent = /** @class */ (function () {
    function NotifyComponent(authService, translate, router, route, userManualService) {
        this.authService = authService;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.userManualService = userManualService;
        this.dataSource = [];
        this.selectedRows = [];
        this.testCss = true;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.translate.use(this._language);
    }
    NotifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return value.NotifyResolverService; })).subscribe(function (value) {
            _this.dataSource = value.notifies;
            _this.selectedRows.push(_this.dataSource[0]);
            if (value.notifies.length > 0) {
                _this.getContentdefault(value.notifies, false);
            }
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(error, 'error');
        });
    };
    NotifyComponent.prototype.getContentdefault = function (value, isRead) {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.userManualService.getNotifyById(value[0].id, isRead).subscribe(function (data1) {
            if (data1.status === 'success') {
                _this.renderData(data1.data.notify, isRead);
            }
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(error, 'error');
        }, function () { return _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading(); });
    };
    NotifyComponent.prototype.routerNavigate = function () {
        this.router.navigate(['/system/user-manual/manual']);
    };
    NotifyComponent.prototype.selectionChanged = function ($event) {
        if (this.selectedRows.length > 0) {
            this.getContentdefault(this.selectedRows, true);
        }
    };
    NotifyComponent.prototype.formatTime = function (created_at) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(created_at).format('DD/MM/YYYY HH:mm');
    };
    NotifyComponent.prototype.renderData = function (value, isRead) {
        this.textTitle = value.title;
        this.contentHtml = value.content;
        this.textDate = this.formatTime(value.created_at);
        if (isRead) {
            for (var i = 0; i < this.dataSource.length; i++) {
                if (value.id === this.dataSource[i].id) {
                    this.dataSource[i].read_status = true;
                }
            }
        }
    };
    NotifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notify',
            template: __webpack_require__(/*! ./notify.component.html */ "./src/app/modules/user-manual/components/notify/notify.component.html"),
            styles: [__webpack_require__(/*! ./notify.component.scss */ "./src/app/modules/user-manual/components/notify/notify.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _modules_user_manual_user_manual_service__WEBPACK_IMPORTED_MODULE_7__["UserManualService"]])
    ], NotifyComponent);
    return NotifyComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-manual/shared/safe-html.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/user-manual/shared/safe-html.ts ***!
  \*********************************************************/
/*! exports provided: SafeHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtml", function() { return SafeHtml; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtml = /** @class */ (function () {
    function SafeHtml(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtml.prototype.transform = function (value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    SafeHtml = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
    ], SafeHtml);
    return SafeHtml;
}());



/***/ }),

/***/ "./src/app/modules/user-manual/user-manual.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/user-manual/user-manual.module.ts ***!
  \***********************************************************/
/*! exports provided: UserManualModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManualModule", function() { return UserManualModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_user_manual_user_manual_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/user-manual/user-manual.routing */ "./src/app/modules/user-manual/user-manual.routing.ts");
/* harmony import */ var _modules_user_manual_user_manual_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/user-manual/user-manual.service */ "./src/app/modules/user-manual/user-manual.service.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _modules_user_manual_shared_safe_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/user-manual/shared/safe-html */ "./src/app/modules/user-manual/shared/safe-html.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
/* harmony import */ var _modules_user_manual_components_manual_manual_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/user-manual/components/manual/manual.component */ "./src/app/modules/user-manual/components/manual/manual.component.ts");
/* harmony import */ var _modules_user_manual_components_notify_notify_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/user-manual/components/notify/notify.component */ "./src/app/modules/user-manual/components/notify/notify.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UserManualModule = /** @class */ (function () {
    function UserManualModule() {
    }
    UserManualModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _modules_user_manual_user_manual_routing__WEBPACK_IMPORTED_MODULE_2__["ManualRouting"],
                _core_library__WEBPACK_IMPORTED_MODULE_5__["devextremeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_7__["vTranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ],
            declarations: [
                _modules_user_manual_components_manual_manual_component__WEBPACK_IMPORTED_MODULE_11__["ManualComponent"],
                _modules_user_manual_components_notify_notify_component__WEBPACK_IMPORTED_MODULE_12__["NotifyComponent"],
                _modules_user_manual_shared_safe_html__WEBPACK_IMPORTED_MODULE_8__["SafeHtml"]
            ],
            providers: [
                _modules_user_manual_user_manual_service__WEBPACK_IMPORTED_MODULE_3__["UserManualService"],
                _core_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_10__["HanldeReportService"]
            ]
        })
    ], UserManualModule);
    return UserManualModule;
}());



/***/ }),

/***/ "./src/app/modules/user-manual/user-manual.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/user-manual/user-manual.routing.ts ***!
  \************************************************************/
/*! exports provided: ManualRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualRouting", function() { return ManualRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_user_manual_components_manual_manual_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/user-manual/components/manual/manual.component */ "./src/app/modules/user-manual/components/manual/manual.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'manual', component: _modules_user_manual_components_manual_manual_component__WEBPACK_IMPORTED_MODULE_2__["ManualComponent"], data: { brec: 'Hướng dẫn sử dụng' } },
    // {path: 'notify', component: NotifyComponent, data: {brec: 'Thông báo sự kiện'}, resolve: {NotifyResolverService}},
    { path: '**', redirectTo: '/' },
];
var ManualRouting = /** @class */ (function () {
    function ManualRouting() {
    }
    ManualRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManualRouting);
    return ManualRouting;
}());



/***/ }),

/***/ "./src/app/modules/user-manual/user-manual.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/user-manual/user-manual.service.ts ***!
  \************************************************************/
/*! exports provided: UserManualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManualService", function() { return UserManualService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserManualService = /** @class */ (function () {
    function UserManualService(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    UserManualService.prototype.getAllNotify = function () {
        return this.apiService.get('/notifies?sort[0][key]=created_at&sort[0][direction]=DESC');
    };
    UserManualService.prototype.getNotifyById = function (idNotify, value) {
        if (value) {
            return this.apiService.get("/notifies/" + idNotify + "?options[update_read]=1");
        }
        else {
            return this.apiService.get("/notifies/" + idNotify);
        }
    };
    UserManualService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], UserManualService);
    return UserManualService;
}());



/***/ })

}]);
//# sourceMappingURL=user-manual-user-manual-module.js.map