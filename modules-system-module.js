(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-system-module"],{

/***/ "./node_modules/screenfull/dist/screenfull.js":
/*!****************************************************!*\
  !*** ./node_modules/screenfull/dist/screenfull.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
* screenfull
* v3.3.3 - 2018-09-04
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "./src/app/layout/components/breadcrumbs/breadcrumbs.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/layout/components/breadcrumbs/breadcrumbs.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-home fa-hg\"></i>\r\n<li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\" style=\"text-decoration: none; color: #2680eb;\">{{ 'MENU.home' | translate }}</a>\r\n</li>\r\n<ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\r\n  <li class=\"breadcrumb-item\"\r\n    *ngIf=\"breadcrumb.label.brec&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.brec\"\r\n    [ngClass]=\"{active: last}\"> <!--&&last\"-->\r\n    <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.brec}}</a>\r\n    <span *ngIf=\"last\">{{breadcrumb.label.brec}}</span>\r\n  </li>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/layout/components/breadcrumbs/breadcrumbs.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/components/breadcrumbs/breadcrumbs.component.ts ***!
  \************************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
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





// import {  } from "";
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(authService, router, route, translate) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.sub = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            // console.log(currentRoute);
            var i = 0;
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        if (routeSnapshot.url.length) {
                            url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                            if (route.snapshot.data.custom_brec) {
                                _this.breadcrumbs = route.snapshot.data.custom_brec;
                                return true;
                            }
                            var brec = route.snapshot.data.brec;
                            var lable = _this._translate.MENU[brec];
                            if (lable)
                                route.snapshot.data.brec = lable;
                            _this.breadcrumbs.push({
                                label: route.snapshot.data,
                                url: url
                            });
                        }
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BreadcrumbsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/layout/components/breadcrumbs/breadcrumbs.component.html")
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"system-footer\">\r\n  <div class=\"row footer-row\">\r\n    <div class=\"col-md-8 footer-left\">\r\n      <p>\r\n        <a href=\"https://baohiemxahoidientu.vn/download_teamviewer.zip\" style=\"text-decoration: none; color: initial\"><img src=\"assets/img/icons/teamview-black.png\" alt=\"teamviewer\"> TeamViewer</a>\r\n        &nbsp;<a href=\"http://download.baohiemxahoidientu.vn/sp/UltraViewer_setup_5.0_vi.rar\" style=\"text-decoration: none;color: initial\"><img src=\"assets/img/icons/ultraview-black.png\" alt=\"ultraviewer\"> UltraViewer</a>\r\n        &nbsp;<img src=\"assets/img/icons/hotline-black.png\" alt=\"hotline\"> {{ 'FOOTER.HOME.call_center_support' | translate }}: {{ 'FOOTER.HOME.northern' | translate }}: <span class=\"in-dam\">19006142</span> | {{ 'FOOTER.HOME.southern' | translate }}: <span class=\"in-dam\">19006139</span>\r\n        &nbsp;\r\n          <img src=\"assets/img/icons/mail-black.png\" alt=\"mail\"> ihoadon@efy.com.vn\r\n      </p>\r\n    </div>\r\n    <div class=\"col-md-4 footer-right\"><p>{{ 'FOOTER.HOME.version' | translate }} {{ version }}</p></div>\r\n  </div>\r\n      \r\n</footer>"

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
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




var FooterComponent = /** @class */ (function () {
    function FooterComponent(authService, translate) {
        this.authService = authService;
        this.translate = translate;
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].VERSION;
        translate.use(this.authService.getLanguage());
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/components/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <a routerLink=\"/\"><img src=\"assets/img/logo.png\" class=\"logo-ihoadon\" alt=\"ihoadon\"/></a>\r\n  <a routerLink=\"/\"><img src=\"assets/img/logo_mini.png\" class=\"logo-ihoadon-mini\" alt=\"ihoadon\"/></a>\r\n  <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appSidebarMinimizer appMobileSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <a href=\"javascript:void(0)\" (click)=\"fullScreen()\"><img id=\"expand-icon\" src=\"assets/img/icons/expand.png\"></a>\r\n  <div class=\"pl-4\">\r\n    <h3 class=\"text-white text-uppercase\">\r\n      <ng-container *ngIf=\"datasAccount\">\r\n        <span>{{datasAccount.name}} </span> | <span>{{ 'CONTROLL.LABEL.mst' | translate }} : {{datasAccount.tax_code}}</span>\r\n      </ng-container>\r\n    </h3>\r\n  </div>\r\n  <div class=\"manage-tab\">\r\n    <ul class=\"nav nav-home-header\">\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/system/information-account\"><img src=\"assets/img/icons/user.png\"></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <app-bell></app-bell>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/system/information-service\"><img src=\"assets/img/icons/infomation.png\"></a>\r\n      </li>\r\n      <!-- <li *ngIf=\"!isVn\"  class=\"nav-item\">\r\n        <a href=\"javascript:void(0)\" (click)=\"changLangugeVn()\"><img src=\"assets/img/icons/VIE.png\"></a>\r\n      </li>\r\n      <li *ngIf=\"isVn\"  class=\"nav-item\">\r\n        <a href=\"javascript:void(0)\" (click)=\"changLangugeEn()\"><img src=\"assets/img/icons/ENG.png\"></a>\r\n      </li> -->\r\n      <li class=\"nav-item\">\r\n        <a href=\"javascript:void(0)\" (click)=\"logout()\"><img src=\"assets/img/icons/logout.png\"></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"hty-header-banner d-md-down-none\">\r\n    <!-- content -->\r\n  </div>\r\n  <ul class=\"nav navbar-nav ml-auto\" style=\"margin-right: 12px;\">\r\n    <li></li>\r\n  </ul>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_3__);
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






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, translate) {
        this.authService = authService;
        this.router = router;
        this.translate = translate;
        this.isVn = true;
        this.datasAccount = null;
        if (this.authService.getLanguage() != 'vn') {
            this.isVn = false;
        }
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.class_header = 'app-header-system';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getInforAccount();
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].confirmVA(this._translate.CONFIRM.logout, this._translate.NOTIFY.notify, function () {
            _this.authService.logout();
            window.location.href = '/login';
        });
    };
    HeaderComponent.prototype.changLangugeVn = function () {
        this.isVn = true;
        this.authService.setLanguage('vn');
        this.translate.use('vn');
    };
    HeaderComponent.prototype.changLangugeEn = function () {
        this.isVn = false;
        this.authService.setLanguage('en');
        this.translate.use('en');
    };
    HeaderComponent.prototype.getInforAccount = function () {
        var dataAcount = JSON.parse(window.localStorage.getItem('currentUser'));
        this.datasAccount = dataAcount.account;
    };
    HeaderComponent.prototype.fullScreen = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_3__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_3__["toggle"]();
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/layout/components/index.ts ***!
  \********************************************/
/*! exports provided: FooterComponent, HeaderComponent, AppSidebarNavComponent, AppSidebarNavTitleComponent, AppSidebarNavItemComponent, AppSidebarNavLinkComponent, AppSidebarNavDropdownComponent, APP_SIDEBAR_NAV, BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });

/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["AppSidebarNavComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavTitleComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["AppSidebarNavTitleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavItemComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["AppSidebarNavItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavLinkComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["AppSidebarNavLinkComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavDropdownComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["AppSidebarNavDropdownComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APP_SIDEBAR_NAV", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["APP_SIDEBAR_NAV"]; });

/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "./src/app/layout/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsComponent"]; });







/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: AppSidebarNavComponent, AppSidebarNavTitleComponent, AppSidebarNavItemComponent, AppSidebarNavLinkComponent, AppSidebarNavDropdownComponent, APP_SIDEBAR_NAV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavComponent", function() { return AppSidebarNavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavTitleComponent", function() { return AppSidebarNavTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavItemComponent", function() { return AppSidebarNavItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavLinkComponent", function() { return AppSidebarNavLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNavDropdownComponent", function() { return AppSidebarNavDropdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SIDEBAR_NAV", function() { return APP_SIDEBAR_NAV; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/sidebar */ "./src/app/config/sidebar.ts");
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






var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.prototype.compareUrl = function (fUrl, sUrl) {
        var nfUrl = fUrl.split('/');
        var nsUrl = sUrl.split('/');
        if (nfUrl[1] === nsUrl[1] && nfUrl[2] === nsUrl[2]) {
            return true;
        }
        return false;
    };
    Helper.prototype.isUrl = function (childrens, currentUrl) {
        for (var i = 0; i < childrens.length; i++) {
            if (this.compareUrl(childrens[i].url, currentUrl)) {
                return true;
            }
        }
        return false;
    };
    Helper.prototype.checkPermissions = function (item) {
        var currentUser = JSON.parse(localStorage['currentUser']);
        if (currentUser.user.permissions) {
            var permissionsCurrentUser_1 = currentUser.user.permissions.split(',');
            if (item.permissions) {
                var count_1 = 0;
                item.permissions.forEach(function (itemPermission) {
                    if (permissionsCurrentUser_1.includes(itemPermission)) {
                        count_1++;
                        return;
                    }
                });
                if (count_1 > 0) {
                    return true;
                }
            }
        }
        return false;
    };
    return Helper;
}());
/**
 * Component quản lý layout sideBar.
 *
 * @author Toanph <skype: toanph1505>
 */
var AppSidebarNavComponent = /** @class */ (function () {
    function AppSidebarNavComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.configs = this.authService.getConfigs();
        var language = authService.getLanguage();
        var currentUser = this.authService.getCurrentUser();
        var copy_sidebar;
        if (language && language === 'en') {
            copy_sidebar = JSON.parse(JSON.stringify(_config_sidebar__WEBPACK_IMPORTED_MODULE_2__["sidebar_en"]));
        }
        else {
            copy_sidebar = JSON.parse(JSON.stringify(_config_sidebar__WEBPACK_IMPORTED_MODULE_2__["sidebar"]));
        }
        var infoRegister = this.authService.getInfoRegister();
        var company_type = this.authService.getInfoRegister().company_type;
        var account_type = this.authService.getCurrentUser().account.account_type;
        var is_cash_register = this.authService.getInfoRegister().is_cash_register;
        var is_invoice_no_code = this.authService.getInfoRegister().is_invoice_no_code;
        var is_invoice_with_code = this.authService.getInfoRegister().is_invoice_with_code;
        var invoice_type = this.authService.getInfoRegister().invoice_type;
        if (Object.keys(infoRegister).length === 0) {
            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKTMTT", copy_sidebar[1].children);
            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTTMTT", copy_sidebar[1].children);
            copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
        }
        switch (company_type) {
            case 'KHAU_TRU':
                copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                if (!is_cash_register) {
                    copy_sidebar[2].children = this.RemoveElementFromObjectArray("TCHDMTT", copy_sidebar[2].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDMTT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKTMTT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTTMTT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHSALE", copy_sidebar[1].children);
                    if (!is_invoice_no_code && !is_invoice_with_code) {
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                    }
                }
                else {
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTTMTT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHSALE", copy_sidebar[1].children);
                    if (!is_invoice_no_code && !is_invoice_with_code) {
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                    }
                }
                break;
            case 'TRUC_TIEP':
                copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                if (!is_cash_register) {
                    copy_sidebar[2].children = this.RemoveElementFromObjectArray("TCHDMTT", copy_sidebar[2].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDMTT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKTMTT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTTMTT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHVAT", copy_sidebar[1].children);
                    if (!is_invoice_no_code && !is_invoice_with_code) {
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                    }
                }
                else {
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKTMTT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHVAT", copy_sidebar[1].children);
                    if (!is_invoice_no_code && !is_invoice_with_code) {
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                    }
                }
                break;
            default:
                break;
        }
        switch (account_type) {
            case _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].khoidonvi.HSSV:
                copy_sidebar[4].children.splice(0, 1);
                copy_sidebar[4].children.splice(1, 1);
                copy_sidebar[3].children = this.RemoveElementFromObjectArray("BC01YT_BC_iHOADON", copy_sidebar[3].children);
                copy_sidebar[3].children = this.RemoveElementFromObjectArray("BC02YT_BC_iHOADON", copy_sidebar[3].children);
                copy_sidebar[3].children = this.RemoveElementFromObjectArray("BC03YT_BC_iHOADON", copy_sidebar[3].children);
                if (company_type == "TRUC_TIEP_KHAU_TRU") {
                    if (!is_cash_register) {
                        copy_sidebar[2].children = this.RemoveElementFromObjectArray("TCHDMTT", copy_sidebar[2].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDMTT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKTMTT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTTMTT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("03XKNB", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("04HGDL", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHVAT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("XLHDGTGT", copy_sidebar[1].children);
                        if (!is_invoice_no_code && !is_invoice_with_code) {
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                        }
                    }
                    else {
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("03XKNB", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("04HGDL", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHVAT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("XLHDGTGT", copy_sidebar[1].children);
                        if (!is_invoice_no_code && !is_invoice_with_code) {
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                        }
                    }
                }
                else {
                    if (!is_cash_register) {
                        copy_sidebar[2].children = this.RemoveElementFromObjectArray("TCHDMTT", copy_sidebar[2].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDMTT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKTMTT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTTMTT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("03XKNB", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("04HGDL", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("XLHDGTGT", copy_sidebar[1].children);
                        if (!is_invoice_no_code && !is_invoice_with_code) {
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                        }
                    }
                    else {
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("03XKNB", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("04HGDL", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("XLHDGTGT", copy_sidebar[1].children);
                        if (!is_invoice_no_code && !is_invoice_with_code) {
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                        }
                    }
                }
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].khoidonvi.DN:
            case _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].khoidonvi.YTE:
                copy_sidebar[4].children.splice(1, 1);
                copy_sidebar[4].children.splice(2, 1);
                copy_sidebar[1].children = this.RemoveElementFromObjectArray("PHIEUTHU", copy_sidebar[1].children);
                copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHVAT", copy_sidebar[1].children);
                copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHSALE", copy_sidebar[1].children);
                if (account_type == _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].khoidonvi.DN) {
                    copy_sidebar[3].children = this.RemoveElementFromObjectArray("BC01YT_BC_iHOADON", copy_sidebar[3].children);
                    copy_sidebar[3].children = this.RemoveElementFromObjectArray("BC02YT_BC_iHOADON", copy_sidebar[3].children);
                    copy_sidebar[3].children = this.RemoveElementFromObjectArray("BC03YT_BC_iHOADON", copy_sidebar[3].children);
                }
                if (company_type == "TRUC_TIEP_KHAU_TRU" || company_type == "CHEXUAT_PHITHUEQUAN") {
                    if (company_type == 'TRUC_TIEP_KHAU_TRU') {
                        if (!is_cash_register) {
                            copy_sidebar[2].children = this.RemoveElementFromObjectArray("TCHDMTT", copy_sidebar[2].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKTMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTTMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHVAT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHSALE", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("XLHDHSSV", copy_sidebar[1].children);
                            if (!is_invoice_no_code && !is_invoice_with_code) {
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                            }
                        }
                        else {
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHVAT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHSALE", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("XLHDHSSV", copy_sidebar[1].children);
                            if (!is_invoice_no_code && !is_invoice_with_code) {
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                            }
                        }
                    }
                    else {
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                        copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                        if (!is_cash_register) {
                            copy_sidebar[2].children = this.RemoveElementFromObjectArray("TCHDMTT", copy_sidebar[2].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKTMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTTMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHVAT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHSALE", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("XLHDHSSV", copy_sidebar[1].children);
                            if (!is_invoice_no_code && !is_invoice_with_code) {
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                            }
                        }
                        else {
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHVAT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHSALE", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("XLHDHSSV", copy_sidebar[1].children);
                            if (!is_invoice_no_code && !is_invoice_with_code) {
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                            }
                        }
                    }
                }
                else {
                    if (company_type == "KHAU_TRU") {
                        if (!is_cash_register) {
                            copy_sidebar[2].children = this.RemoveElementFromObjectArray("TCHDMTT", copy_sidebar[2].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKTMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTTMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHVAT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                            if (!is_invoice_no_code && !is_invoice_with_code) {
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                            }
                        }
                        else {
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTTMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHVAT", copy_sidebar[1].children);
                            if (!is_invoice_no_code && !is_invoice_with_code) {
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                            }
                        }
                    }
                    else if (company_type == "TRUC_TIEP") {
                        if (!is_cash_register) {
                            copy_sidebar[2].children = this.RemoveElementFromObjectArray("TCHDMTT", copy_sidebar[2].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKTMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTTMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHSALE", copy_sidebar[1].children);
                            if (!is_invoice_no_code && !is_invoice_with_code) {
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                            }
                        }
                        else {
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("07KPTQ", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKTMTT", copy_sidebar[1].children);
                            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDTHSALE", copy_sidebar[1].children);
                            if (!is_invoice_no_code && !is_invoice_with_code) {
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("02GTTT", copy_sidebar[1].children);
                                copy_sidebar[1].children = this.RemoveElementFromObjectArray("01GTKT", copy_sidebar[1].children);
                            }
                        }
                    }
                    copy_sidebar[1].children = this.RemoveElementFromObjectArray("XLHDHSSV", copy_sidebar[1].children);
                }
                break;
            default:
                break;
        }
        if ((is_invoice_no_code || is_invoice_with_code) && invoice_type.includes('HDONKHAC')) {
        }
        else
            copy_sidebar[1].children = this.RemoveElementFromObjectArray("TICKET", copy_sidebar[1].children);
        if (!this.configs.integrate_parameter.integrate_crm.is_integrate && !this.configs.integrate_parameter.integrate_crm.is_integrate_his) {
            copy_sidebar[1].children = this.RemoveElementFromObjectArray("HDCX", copy_sidebar[1].children);
        }
        /* Chức năng gửi bảng tổng hợp ở cuối cùng nên xóa theo độ dài của mảng */
        if (!currentUser.transmission_method) {
            copy_sidebar[1].children = this.RemoveElementFromObjectArray("BANGTONGHOP", copy_sidebar[1].children);
        }
        this.navigation = copy_sidebar;
    }
    AppSidebarNavComponent.prototype.RemoveElementFromObjectArray = function (key, arrItem) {
        arrItem.forEach(function (value, index) {
            if (value.id == key)
                arrItem.splice(index, 1);
        });
        return arrItem;
    };
    AppSidebarNavComponent.prototype.isDivider = function (item) {
        return item.divider ? true : false;
    };
    AppSidebarNavComponent.prototype.isTitle = function (item) {
        return item.title ? true : false;
    };
    AppSidebarNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: "\n      <nav class=\"sidebar-nav\">\n          <ul class=\"nav\">\n              <ng-template ngFor let-navitem [ngForOf]=\"navigation\">\n                  <li *ngIf=\"isDivider(navitem)\" class=\"nav-divider\"></li>\n                  <ng-template [ngIf]=\"isTitle(navitem)\">\n                      <app-sidebar-title [title]='navitem'></app-sidebar-title>\n                  </ng-template>\n                  <ng-template [ngIf]=\"!isDivider(navitem)&&!isTitle(navitem)\">\n                      <app-sidebar-item [item]='navitem'></app-sidebar-item>\n                  </ng-template>\n              </ng-template>\n          </ul>\n      </nav>"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppSidebarNavComponent);
    return AppSidebarNavComponent;
}());

/**
 * Component quản lý thẻ tiêu đề cho sidebar
 *
 * @author Toanph <skype: toanph1505>
 */
var AppSidebarNavTitleComponent = /** @class */ (function () {
    function AppSidebarNavTitleComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    AppSidebarNavTitleComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement;
        var li = this.renderer.createElement('li');
        var name = this.renderer.createText(this.title.name);
        this.renderer.addClass(li, 'nav-title');
        if (this.title.class) {
            var classes = this.title.class;
            this.renderer.addClass(li, classes);
        }
        if (this.title.wrapper) {
            var wrapper = this.renderer.createElement(this.title.wrapper.element);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(li, wrapper);
        }
        else {
            this.renderer.appendChild(li, name);
        }
        this.renderer.appendChild(nativeElement, li);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavTitleComponent.prototype, "title", void 0);
    AppSidebarNavTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-title',
            template: ''
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], AppSidebarNavTitleComponent);
    return AppSidebarNavTitleComponent;
}());

/**
 * Component hiển thị từng module
 *
 * @author Toanph <skype: toanph1505>
 */
var AppSidebarNavItemComponent = /** @class */ (function () {
    function AppSidebarNavItemComponent(authService, router, translate) {
        this.authService = authService;
        this.router = router;
        this.translate = translate;
        this.isOpenDropdown = false;
        this.helper = new Helper();
        this.hasPermission = true;
        this.hasVisibleRoot = true;
        this.checkPermissionReport = false;
        this.arrReport = [
            "Báo cáo tổng hợp doanh thu theo nhóm khách hàng",
            "Báo cáo chi tiết hàng hóa dịch vụ của hóa đơn",
            "Báo cáo biểu đồ hình cột doanh thu theo nhóm khách hàng",
            "Báo cáo biểu đồ tình hình lập - xuất hóa đơn",
            "Báo cáo biểu đồ hình tròn doanh thu theo nhóm khách hàng",
            "Báo cáo chi tiết thu viện phí theo người lập",
            "Báo cáo bảng kê hóa đơn bán ra",
            "Báo cáo sử dụng chứng từ khấu trừ thuế TNCN",
            "Báo cáo chi tiết chứng từ khấu trừ thuế TNCN"
        ];
        translate.use(this.authService.getLanguage());
    }
    // Khoi tao
    AppSidebarNavItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isDropdown()) {
            var countVisible_1 = 0;
            var childrens = this.item.children;
            childrens.forEach(function (children) {
                if (_this.helper.checkPermissions(children)) {
                    switch (children.name) {
                        case "Báo cáo tổng hợp doanh thu theo nhóm khách hàng":
                        case "Báo cáo chi tiết hàng hóa dịch vụ của hóa đơn":
                        case "Báo cáo biểu đồ hình cột doanh thu theo nhóm khách hàng":
                        case "Báo cáo biểu đồ tình hình lập - xuất hóa đơn":
                        case "Báo cáo chi tiết thu viện phí theo người lập":
                        case "Báo cáo biểu đồ hình tròn doanh thu theo nhóm khách hàng":
                        case "Báo cáo bảng kê hóa đơn bán ra":
                        case "Báo cáo sử dụng chứng từ khấu trừ thuế TNCN":
                        case "Báo cáo chi tiết chứng từ khấu trừ thuế TNCN":
                            _this.checkPermissionReport = true;
                            break;
                    }
                    countVisible_1++;
                }
            });
            this.hasVisibleRoot = countVisible_1 === 0 ? false : true;
            this.isOpenDropdown = this.helper.isUrl(childrens, this.router.url);
        }
        else {
            this.hasPermission = this.helper.checkPermissions(this.item);
        }
    };
    AppSidebarNavItemComponent.prototype.classNav = function () {
        var _this = this;
        var report = this.arrReport.filter(function (p) { return p == _this.item.name; })[0];
        if (report && this.hasPermission) {
            if (this.hasClass())
                return 'nav-item-report nav-dropdown ' + this.item.class;
            else
                return 'nav-item-report nav-dropdown';
        }
        else {
            if (this.hasClass())
                return 'nav-item nav-dropdown ' + this.item.class;
            else
                return 'nav-item nav-dropdown';
        }
    };
    AppSidebarNavItemComponent.prototype.hasClass = function () {
        return this.item.class ? true : false;
    };
    AppSidebarNavItemComponent.prototype.titleW = function () {
        if (this.item.name == "Báo cáo" && this.checkPermissionReport) {
            if (this.hasClass())
                return 'nav-item-report nav-dropdown ' + this.item.class;
            else
                return 'nav-item-report nav-dropdown';
        }
        else {
            if (this.hasClass())
                return 'nav-item nav-dropdown ' + this.item.class;
            else
                return 'nav-item nav-dropdown';
        }
    };
    AppSidebarNavItemComponent.prototype.isDropdown = function () {
        return this.item.children ? true : false;
    };
    AppSidebarNavItemComponent.prototype.thisUrl = function () {
        return this.item.url;
    };
    AppSidebarNavItemComponent.prototype.isActive = function () {
        return this.router.isActive(this.thisUrl(), false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavItemComponent.prototype, "item", void 0);
    AppSidebarNavItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-item',
            template: "\n      <li *ngIf=\"!isDropdown(); else dropdown\" [ngClass]=\"classNav()\">\n          <app-sidebar-link [link]='item' *ngIf=\"hasPermission\"></app-sidebar-link>\n      </li>\n      <ng-template #dropdown>\n          <li *ngIf=\"hasVisibleRoot\" [ngClass]=\"titleW()\"\n              [class.open]=\"isOpenDropdown\"\n              appNavDropdown>\n              <app-sidebar-dropdown [link]='item'></app-sidebar-dropdown>\n          </li>\n      </ng-template>\n  "
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], AppSidebarNavItemComponent);
    return AppSidebarNavItemComponent;
}());

/**
 * Component hiển thị Link Sidebar
 *
 * @author Toanph <skype: toanph1505>
 */
var AppSidebarNavLinkComponent = /** @class */ (function () {
    function AppSidebarNavLinkComponent() {
    }
    // Khoi tao
    AppSidebarNavLinkComponent.prototype.ngOnInit = function () {
        this.layout = 'nav-link';
        // check system or backend
        this.url = this.link.url; // "/" + this.link.url
    };
    AppSidebarNavLinkComponent.prototype.hasVariant = function () {
        return this.link.variant ? true : false;
    };
    AppSidebarNavLinkComponent.prototype.isBadge = function () {
        return this.link.badge ? true : false;
    };
    AppSidebarNavLinkComponent.prototype.isExternalLink = function () {
        return this.link.url.substring(0, 4) === 'http' ? true : false;
    };
    AppSidebarNavLinkComponent.prototype.isIcon = function () {
        return this.link.icon ? true : false;
    };
    AppSidebarNavLinkComponent.prototype.isImages = function () {
        return this.link.images ? true : false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavLinkComponent.prototype, "link", void 0);
    AppSidebarNavLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-link',
            template: "\n      <a *ngIf=\"!isExternalLink(); else external\"\n         class=\"{{ layout }}\"\n         [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\"\n         routerLinkActive=\"active\"\n         [routerLink]=\"[url]\">\n          <i *ngIf=\"isIcon()\" class=\"{{ link.icon }}\"></i>\n          <img class=\"sidebar-icon\" *ngIf=\"isImages()\" [src]=\"link.images\" alt=\"\">\n          <span *ngIf=\"isImages()\" class=\"sidebar-text\">{{ link.name }}</span>\n          <span *ngIf=\"isIcon()\">{{ link.name }}</span>\n          <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n      <ng-template #external>\n          <a class=\"{{ layout }}\" [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\" href=\"{{url}}\"\n             target=\"_blank\">\n              <i *ngIf=\"isIcon()\" class=\"{{ link.icon }}\"></i>\n              {{ link.name }}\n              <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n          </a>\n      </ng-template>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarNavLinkComponent);
    return AppSidebarNavLinkComponent;
}());

/**
 * Component quản lý dropdown cho sidebar
 *[ngClass]="{'active': isActiveDropdown}"
 * @author Toanph <skype: toanph1505>
 */
var AppSidebarNavDropdownComponent = /** @class */ (function () {
    function AppSidebarNavDropdownComponent(router) {
        this.router = router;
        this.helper = new Helper();
        this.checkPermissionReport = false;
        this.layout = 'nav-link';
    }
    AppSidebarNavDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        var childrens = this.link.children;
        childrens.forEach(function (children) {
            if (_this.helper.checkPermissions(children)) {
                switch (children.name) {
                    case "Báo cáo tổng hợp doanh thu theo nhóm khách hàng":
                    case "Báo cáo chi tiết hàng hóa dịch vụ của hóa đơn":
                    case "Báo cáo biểu đồ hình cột doanh thu theo nhóm khách hàng":
                    case "Báo cáo biểu đồ tình hình lập - xuất hóa đơn":
                    case "Báo cáo chi tiết thu viện phí theo người lập":
                    case "Báo cáo biểu đồ hình tròn doanh thu theo nhóm khách hàng":
                    case "Báo cáo bảng kê hóa đơn bán ra":
                    case "Báo cáo sử dụng chứng từ khấu trừ thuế TNCN":
                    case "Báo cáo chi tiết chứng từ khấu trừ thuế TNCN":
                        _this.checkPermissionReport = true;
                        break;
                }
            }
        });
        this.isActiveDropdown = this.helper.isUrl(childrens, this.router.url);
        this.routerSub = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (evt) {
            _this.isActiveDropdown = _this.helper.isUrl(childrens, _this.router.url);
        });
    };
    AppSidebarNavDropdownComponent.prototype.classNav = function () {
        if (this.link.children) {
            if (this.checkPermissionReport)
                return 'nav-link-report nav-dropdown-toggle ' + this.layout;
            else
                return 'nav-link nav-dropdown-toggle ' + this.layout;
        }
        else
            return 'nav-link nav-dropdown-toggle ' + this.layout;
    };
    AppSidebarNavDropdownComponent.prototype.isBadge = function () {
        return this.link.badge ? true : false;
    };
    AppSidebarNavDropdownComponent.prototype.isIcon = function () {
        return this.link.icon ? true : false;
    };
    AppSidebarNavDropdownComponent.prototype.isImages = function () {
        return this.link.images ? true : false;
    };
    AppSidebarNavDropdownComponent.prototype.ngOnDestroy = function () {
        this.routerSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavDropdownComponent.prototype, "link", void 0);
    AppSidebarNavDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-dropdown',
            template: "\n      <a [ngClass]=\"classNav()\" appNavDropdownToggle >\n          <i *ngIf=\"isIcon()\" class=\"{{ link.icon }}\"></i>\n          <img class=\"sidebar-icon\" *ngIf=\"isImages()\" [src]=\"link.images\" alt=\"\">\n          <span class=\"sidebar-text\">{{ link.name }}</span>\n          <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n      <ul class=\"nav-dropdown-items\">\n          <ng-template ngFor let-child [ngForOf]=\"link.children\">\n              <app-sidebar-item [item]='child'></app-sidebar-item>\n          </ng-template>\n      </ul>\n  "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppSidebarNavDropdownComponent);
    return AppSidebarNavDropdownComponent;
}());

var APP_SIDEBAR_NAV = [
    AppSidebarNavComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavItemComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavTitleComponent,
];


/***/ }),

/***/ "./src/app/layout/directives/aside/aside.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/directives/aside/aside.directive.ts ***!
  \************************************************************/
/*! exports provided: AsideToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideToggleDirective", function() { return AsideToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAsideMenuToggler]',
        }),
        __metadata("design:paramtypes", [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());



/***/ }),

/***/ "./src/app/layout/directives/aside/index.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/directives/aside/index.ts ***!
  \**************************************************/
/*! exports provided: AsideToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aside_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aside.directive */ "./src/app/layout/directives/aside/aside.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsideToggleDirective", function() { return _aside_directive__WEBPACK_IMPORTED_MODULE_0__["AsideToggleDirective"]; });




/***/ }),

/***/ "./src/app/layout/directives/index.ts":
/*!********************************************!*\
  !*** ./src/app/layout/directives/index.ts ***!
  \********************************************/
/*! exports provided: AsideToggleDirective, NavDropdownDirective, NavDropdownToggleDirective, NAV_DROPDOWN_DIRECTIVES, ReplaceDirective, SidebarToggleDirective, SidebarMinimizeDirective, BrandMinimizeDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aside */ "./src/app/layout/directives/aside/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsideToggleDirective", function() { return _aside__WEBPACK_IMPORTED_MODULE_0__["AsideToggleDirective"]; });

/* harmony import */ var _nav_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-dropdown */ "./src/app/layout/directives/nav-dropdown/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdownDirective", function() { return _nav_dropdown__WEBPACK_IMPORTED_MODULE_1__["NavDropdownDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdownToggleDirective", function() { return _nav_dropdown__WEBPACK_IMPORTED_MODULE_1__["NavDropdownToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAV_DROPDOWN_DIRECTIVES", function() { return _nav_dropdown__WEBPACK_IMPORTED_MODULE_1__["NAV_DROPDOWN_DIRECTIVES"]; });

/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replace */ "./src/app/layout/directives/replace/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceDirective", function() { return _replace__WEBPACK_IMPORTED_MODULE_2__["ReplaceDirective"]; });

/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/app/layout/directives/sidebar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_3__["SidebarToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarMinimizeDirective", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_3__["SidebarMinimizeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandMinimizeDirective", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_3__["BrandMinimizeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_3__["MobileSidebarToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarOffCanvasCloseDirective", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_3__["SidebarOffCanvasCloseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_TOGGLE_DIRECTIVES"]; });







/***/ }),

/***/ "./src/app/layout/directives/nav-dropdown/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/directives/nav-dropdown/index.ts ***!
  \*********************************************************/
/*! exports provided: NavDropdownDirective, NavDropdownToggleDirective, NAV_DROPDOWN_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-dropdown.directive */ "./src/app/layout/directives/nav-dropdown/nav-dropdown.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdownDirective", function() { return _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__["NavDropdownDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdownToggleDirective", function() { return _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__["NavDropdownToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAV_DROPDOWN_DIRECTIVES", function() { return _nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__["NAV_DROPDOWN_DIRECTIVES"]; });




/***/ }),

/***/ "./src/app/layout/directives/nav-dropdown/nav-dropdown.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/directives/nav-dropdown/nav-dropdown.directive.ts ***!
  \**************************************************************************/
/*! exports provided: NavDropdownDirective, NavDropdownToggleDirective, NAV_DROPDOWN_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownDirective", function() { return NavDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownToggleDirective", function() { return NavDropdownToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_DROPDOWN_DIRECTIVES", function() { return NAV_DROPDOWN_DIRECTIVES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNavDropdownToggle]'
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];


/***/ }),

/***/ "./src/app/layout/directives/replace/index.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/directives/replace/index.ts ***!
  \****************************************************/
/*! exports provided: ReplaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _replace_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replace.directive */ "./src/app/layout/directives/replace/replace.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceDirective", function() { return _replace_directive__WEBPACK_IMPORTED_MODULE_0__["ReplaceDirective"]; });




/***/ }),

/***/ "./src/app/layout/directives/replace/replace.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/directives/replace/replace.directive.ts ***!
  \****************************************************************/
/*! exports provided: ReplaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceDirective", function() { return ReplaceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReplaceDirective = /** @class */ (function () {
    function ReplaceDirective(el) {
        this.el = el;
    }
    // wait for the component to render completely
    ReplaceDirective.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement;
        var parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    ReplaceDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:max-line-length
            selector: '[appHostReplace], app-aside, app-breadcrumbs, app-events, app-footer, app-header, app-sidebar, app-sidebar-dropdown, app-sidebar-item, app-sidebar-item-admin, app-sidebar-link, app-sidebar-title'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ReplaceDirective);
    return ReplaceDirective;
}());



/***/ }),

/***/ "./src/app/layout/directives/sidebar/index.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/directives/sidebar/index.ts ***!
  \****************************************************/
/*! exports provided: SidebarToggleDirective, SidebarMinimizeDirective, BrandMinimizeDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/layout/directives/sidebar/sidebar.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SidebarToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarMinimizeDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SidebarMinimizeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandMinimizeDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["BrandMinimizeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["MobileSidebarToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarOffCanvasCloseDirective", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SidebarOffCanvasCloseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_TOGGLE_DIRECTIVES"]; });




/***/ }),

/***/ "./src/app/layout/directives/sidebar/sidebar.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/directives/sidebar/sidebar.directive.ts ***!
  \****************************************************************/
/*! exports provided: SidebarToggleDirective, SidebarMinimizeDirective, BrandMinimizeDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMinimizeDirective", function() { return SidebarMinimizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandMinimizeDirective", function() { return BrandMinimizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return MobileSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarOffCanvasCloseDirective", function() { return SidebarOffCanvasCloseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());

var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective() {
    }
    BrandMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('brand-minimized');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BrandMinimizeDirective.prototype, "toggleOpen", null);
    BrandMinimizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appBrandMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], BrandMinimizeDirective);
    return BrandMinimizeDirective;
}());

var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMobileSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarClose]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    BrandMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];


/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives */ "./src/app/layout/directives/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/app/layout/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var APP_DIRECTIVES = [_directives__WEBPACK_IMPORTED_MODULE_7__["AsideToggleDirective"], _directives__WEBPACK_IMPORTED_MODULE_7__["NAV_DROPDOWN_DIRECTIVES"], _directives__WEBPACK_IMPORTED_MODULE_7__["ReplaceDirective"], _directives__WEBPACK_IMPORTED_MODULE_7__["SIDEBAR_TOGGLE_DIRECTIVES"]];

var LayoutModule = /** @class */ (function () {
    function LayoutModule(parentModule) {
        if (parentModule) {
            throw new Error('LayoutModule is already loaded. Import it in the AppModule only');
        }
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                _shared_index__WEBPACK_IMPORTED_MODULE_5__["NotificationModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_6__["vTranslateModule"]
            ],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["APP_SIDEBAR_NAV"]
            ].concat(APP_DIRECTIVES),
            exports: [
                _components__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_8__["APP_SIDEBAR_NAV"]
            ].concat(APP_DIRECTIVES),
            providers: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [LayoutModule])
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/modules/system.component.html":
/*!***********************************************!*\
  !*** ./src/app/modules/system.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header-->\r\n<app-header></app-header>\r\n<div class=\"app-body\">\r\n  <!-- Sidebar-->\r\n  <div class=\"sidebar\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n  <!-- Content -->\r\n  <main class=\"main\">\r\n    <!-- Breadcrumb -->\r\n    <ol class=\"breadcrumb\">\r\n      <app-breadcrumbs></app-breadcrumbs>\r\n    </ol>\r\n    <!-- Main Conainer -->\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- Footer -->\r\n    <app-footer></app-footer>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/system.component.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/system.component.ts ***!
  \*********************************************/
/*! exports provided: SystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemComponent", function() { return SystemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemComponent = /** @class */ (function () {
    function SystemComponent(authService, translate) {
        this.authService = authService;
        this.translate = translate;
        translate.use(this.authService.getLanguage());
    }
    SystemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-system',
            template: __webpack_require__(/*! ./system.component.html */ "./src/app/modules/system.component.html"),
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SystemComponent);
    return SystemComponent;
}());



/***/ }),

/***/ "./src/app/modules/system.module.ts":
/*!******************************************!*\
  !*** ./src/app/modules/system.module.ts ***!
  \******************************************/
/*! exports provided: SystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function() { return SystemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system.component */ "./src/app/modules/system.component.ts");
/* harmony import */ var _system_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system.routing */ "./src/app/modules/system.routing.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SystemModule = /** @class */ (function () {
    function SystemModule() {
    }
    SystemModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _system_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_4__["vTranslateModule"]
            ],
            declarations: [
                _system_component__WEBPACK_IMPORTED_MODULE_2__["SystemComponent"],
            ]
        })
    ], SystemModule);
    return SystemModule;
}());



/***/ }),

/***/ "./src/app/modules/system.routing.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/system.routing.ts ***!
  \*******************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system.component */ "./src/app/modules/system.component.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _system_component__WEBPACK_IMPORTED_MODULE_2__["SystemComponent"],
        children: [
            {
                path: 'template',
                loadChildren: './template/template.module#TemplateModule',
                data: { brec: 'invoice_form' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            { path: 'lists', loadChildren: './lists/lists.module#ListsModule', data: { brec: 'other' }, canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]] },
            {
                path: 'warehouses',
                loadChildren: './warehouses/warehouses.module#WarehousesModule',
                data: { brec: 'Kho hàng hóa, dịch vụ' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            { path: 'users', loadChildren: './users/users.module#UsersModule', data: { brec: 'user' }, canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]] },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#CustomersModule',
                data: { brec: 'customer' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'students',
                loadChildren: './customers/customers.module#CustomersModule',
                data: { brec: 'student_customer' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'report',
                loadChildren: './report/report.module#ReportModule',
                data: { brec: 'Báo cáo tổng hợp' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'configs',
                loadChildren: './configs/configs.module#ConfigsModule',
                data: { brec: 'system_parameters' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ProductsModule',
                data: { brec: 'goods_and_services' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'revenues',
                loadChildren: './products/products.module#ProductsModule',
                data: { brec: 'revenue' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'information-account',
                loadChildren: './info-account/info-account.module#InfoAccountModule',
                data: { brec: 'account_information' },
            },
            { path: 'notification', loadChildren: './notification/notification.module#NotificationModule', data: { brec: 'Danh sách thông báo' } },
            { path: 'diary', loadChildren: './diary/diary.module#DiaryModule', data: { brec: 'activity_logs' }, canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]] },
            { path: 'search', loadChildren: './search/search.module#SearchModule', data: { brec: 'search_invoice' }, canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]] },
            { path: 'search-vouchers', loadChildren: './search-vouchers/search-vouchers.module#SearchVouchersModule', data: { brec: 'Tra cứu chứng từ', preload: true }, canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]] },
            {
                path: 'information-unit',
                loadChildren: './info-unit/info-unit.module#InfoUnitModule',
                data: { brec: 'unit_information' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'information-service',
                loadChildren: './info-service/info-service.module#InfoServiceModule',
                data: { brec: 'information_services' }
            },
            {
                path: 'release-notify',
                loadChildren: './release-notify/release-notify.module#ReleaseNotifyModule',
                data: { brec: 'notice_of_release' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'vat-invoice',
                loadChildren: './vat/vat.module#VatModule',
                data: { type: '01GTKT', brec: 'vat_invoice', preload: true },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'bills-invoice-vat',
                loadChildren: './bill-invoice/bill-invoice.module#BillInvoiceModule',
                data: { type: '01GTKT', brec: 'bills_invoice_vat', preload: true },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'bills-invoice-sale',
                loadChildren: './bill-invoice/bill-invoice.module#BillInvoiceModule',
                data: { type: '02GTTT', brec: 'bills_invoice_sale', preload: true },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'ticket-invoice',
                loadChildren: './ticket/ticket.module#TicketModule',
                data: { brec: 'electronic_ticket', preload: true },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'vat-invoice',
                loadChildren: './vat/vat.module#VatModule',
                data: { type: '02GTTT', brec: 'vat_invoice', preload: true },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'invoice-buy',
                loadChildren: './invoice-buy/invoice-buy.module#InvoiceBuyModule',
                data: { type: '03GTKT', brec: 'buy_invoice', preload: true },
            },
            {
                path: 'handle-invoice',
                loadChildren: './handle-invoice/handle-invoice.module#HandleInvoiceModule',
                data: { brec: 'handling_invoices', preload: true },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            { path: 'invoice-sync', loadChildren: './invoice-sync/invoice-sync.module#InvoiceSyncModule', data: { brec: 'Hóa đơn chờ xuất' } },
            { path: 'sale-invoice', loadChildren: './vat/vat.module#VatModule', data: { type: '02GTTT', brec: 'sale_invoice', preload: true } },
            { path: 'non-tariff-invoice', loadChildren: './vat/vat.module#VatModule', data: { type: '07KPTQ', brec: 'Hóa đơn bán hàng (KPTQ)', preload: true } },
            {
                path: 'transport-invoice',
                loadChildren: './internal-transport/internal-transport.module#InternalTransportModule',
                data: { type: '03XKNB', brec: 'delivery_note_cum_internal_shipping', preload: true },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'agent-invoice',
                loadChildren: './internal-transport/internal-transport.module#InternalTransportModule',
                data: { type: '04HGDL', brec: 'Phiếu xuất kho hàng gửi đại lý', preload: true },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'approve-invoice',
                loadChildren: './approve/approve.module#ApproveModule',
                data: { type: '01GTKT', brec: 'approve_the_invoice' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'search-account',
                loadChildren: './search-account/search-account.module#SearchAccountModule',
                data: { brec: 'account_lookup_invoice' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'send-data-tax',
                loadChildren: './send-data-tax/send-data-tax.module#SendDataTaxModule',
                data: { brec: 'send_data_tax' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
            {
                path: 'handle-report',
                loadChildren: './handle-report/handle-report.module#HandleReportModule',
            },
            {
                path: 'student-sale-invoice',
                loadChildren: './student-invoice/student-invoice.module#StudentInvoiceModule',
                data: { type: '02GTTT', brec: 'invoice_cum_collection_receipt', preload: true },
            },
            {
                path: 'student-vat-invoice',
                loadChildren: './student-invoice/student-invoice.module#StudentInvoiceModule',
                data: { type: '01GTKT', brec: 'invoice_cum_collection_receipt', preload: true },
            },
            {
                path: 'receipts',
                loadChildren: './student-invoice/student-invoice.module#StudentInvoiceModule',
                data: { type: '08HSPT', brec: 'receipts', preload: true },
            },
            {
                path: 'handle-invoice-student',
                loadChildren: './handle-invoice-student/handle-invoice-student.module#HandleInvoiceStudentModule',
                data: { brec: 'handling_invoices', preload: true },
            },
            {
                path: 'user-manual',
                loadChildren: './user-manual/user-manual.module#UserManualModule',
            },
            {
                path: 'voucher-tax',
                loadChildren: './vouchers/vouchers.module#VouchersModule',
                data: { type: '01CTT56', brec: 'proof_of_tax_deduction', preload: true }
            },
            {
                path: 'handle-vouchers',
                loadChildren: './handle-voucher/handle-voucher.module#HandleVoucherModule',
                data: { brec: 'handling_vouchers', preload: true },
            },
            { path: '**', redirectTo: 'templates' },
            {
                path: 'diary-transmission',
                loadChildren: './diary-transmission/diary-transmission.module#DiaryTransmissionModule',
                data: { brec: 'diary_transmission' },
            },
            {
                path: 'search-bills',
                loadChildren: './search-bills/search-bills.module#SearchBillsModule',
                data: { brec: 'search_bills' },
            },
            {
                path: 'handle-bills',
                loadChildren: './handle-bills/handle-bills.module#HandleBillsModule',
                data: { brec: 'handle_bills' },
            },
            {
                path: 'payment-receipt',
                loadChildren: './payment-receipt/payment-receipt.module#PaymentReceiptModule',
                data: { type: 'BLP', brec: 'payment_receipt', preload: true },
            },
            {
                path: 'handle-receipt',
                loadChildren: './handle-receipt/handle-receipt.module#HandleReceiptModule',
                data: { brec: 'xu_ly_bien_lai' },
                canActivate: [_shared_index__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]]
            },
        ]
    }
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
//# sourceMappingURL=modules-system-module.js.map