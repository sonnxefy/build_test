(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-service-info-service-module"],{

/***/ "./src/app/modules/info-service/components/index/index.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/info-service/components/index/index.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n  <div class=\"col-md-8\">\r\n    <div class=\"pull-left\">\r\n      <h2 style=\"font-weight: bold;\">{{ 'CONTROLL.LABEL.info_service_ihoadon' | translate }}</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"pull-right button-panel\">\r\n      <dx-button (click)=\"giaHanDichVu()\" text=\"{{ 'CONTROLL.BUTTON.service_extension' | translate }}\" type=\"default\">\r\n      </dx-button>\r\n      <dx-button id=\"refresh\" (click)=\"refresh()\" icon=\"assets\\img\\icons\\Refresh-02.png\"></dx-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"report-content\">\r\n  <dx-data-grid id=\"gridContainer\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnResizing]=\"true\"\r\n    [columnMinWidth]=\"50\" [columnAutoWidth]=\"true\" [wordWrapEnabled]=\"true\">\r\n\r\n    <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n\r\n    <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n    <dxi-column cellTemplate=\"stt\" caption=\"STT\" width=\"40\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"package_code\" caption=\"{{ 'GRID.SERVICE_PACKAGE.service_package' | translate }}\"\r\n      [filterOperations]=\"['contains', '=']\" alignment=\"center\"></dxi-column>\r\n\r\n    <dxi-column cellTemplate=\"month_regulation\" caption=\"{{ 'GRID.SERVICE_PACKAGE.used_time' | translate }}\"\r\n      alignment=\"center\" [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n    <div *dxTemplate=\"let d of 'month_regulation'\" style=\"cursor: pointer;\">\r\n      <span *ngIf=\"d.data.month_regulation && d.data.month_regulation != '0'\">{{ d.data.month_regulation }} tháng</span>\r\n    </div>\r\n    <dxi-column dataField=\"amount\" caption=\"{{ 'GRID.SERVICE_PACKAGE.amount_exported' | translate }}\" alignment=\"center\"\r\n      [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n\r\n    <dxi-column dataField=\"used_amount\" caption=\"{{ 'GRID.RELEASE_NOTIFY.used' | translate }}\" alignment=\"center\"\r\n      [filterOperations]=\"['contains', '=']\"></dxi-column> +\r\n\r\n    <dxi-column dataField=\"registration_date\" caption=\"{{ 'GRID.SERVICE_PACKAGE.registration_date' | translate }}\"\r\n      [filterOperations]=\"['contains', '=']\" dataType=\"date\" format=\"dd/MM/yyyy\" alignment=\"center\"></dxi-column>\r\n\r\n    <dxi-column dataField=\"activation_date\" caption=\"{{ 'GRID.SERVICE_PACKAGE.activation_date' | translate }}\"\r\n      [filterOperations]=\"['contains', '=']\" dataType=\"date\" format=\"dd/MM/yyyy\" alignment=\"center\"></dxi-column>\r\n\r\n    <dxi-column dataField=\"expiration_date\" caption=\"{{ 'GRID.SERVICE_PACKAGE.expiration_date' | translate }}\"\r\n      [filterOperations]=\"['contains', '=']\" dataType=\"date\" format=\"dd/MM/yyyy\" alignment=\"center\"></dxi-column>\r\n\r\n    <dxi-column cellTemplate=\"contract\" caption=\"{{ 'GRID.SERVICE_PACKAGE.electronic_contract' | translate }}\"\r\n      alignment=\"center\" [width]=\"140\">\r\n    </dxi-column>\r\n\r\n    <dxi-column dataField=\"hoadon\" caption=\"{{ 'GRID.SERVICE_PACKAGE.e_invoice' | translate }}\" alignment=\"center\">\r\n    </dxi-column>\r\n\r\n    <div *dxTemplate=\"let d of 'stt'\">\r\n      {{ d.rowIndex + 1}}\r\n    </div>\r\n\r\n    <div *dxTemplate=\"let d of 'contract'\" style=\"cursor: pointer;\">\r\n      <div *ngIf=\"d.data.contract_status == '1' && d.data.content_contract != '' && d.data.unsigned == '1'\"\r\n        (click)=\"onCellClick(d.data)\">\r\n        <img style=\"margin-right: 5px\" src=\"assets\\img\\icons\\HopDong.png\" />\r\n        <p>{{ 'CONTROLL.BUTTON.sign_contract' | translate }}</p>\r\n      </div>\r\n      <div *ngIf=\"d.data.contract_status == '2' && d.data.content_contract != ''\" (click)=\"onCellClick(d.data)\">\r\n        <img style=\"margin-right: 5px\" src=\"assets\\img\\icons\\HopDong.png\" />\r\n        <p>{{ 'CONTROLL.BUTTON.signed' | translate }}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\" infoText=\"{{ 'DXO_PAGER.page' | translate }}\">\r\n    </dxo-pager>\r\n    <div *dxTemplate=\"let data of 'cellTemplate'\">\r\n      <a href=\"javascript:void(0)\" >{{ 'GRID.TEMPLATE.view' | translate }}</a>\r\n    </div>\r\n  </dx-data-grid>\r\n\r\n  <dx-popup class=\"popup\" [width]=\"800\" [height]=\"180\" [showTitle]=\"true\"\r\n    title=\"{{ 'CONTROLL.LABEL.e_contract_ihoadon' | translate }}\" [dragEnabled]=\"false\" [closeOnOutsideClick]=\"false\"\r\n    [(visible)]=\"popupContract\">\r\n    <div *dxTemplate=\"let data of 'content'\">\r\n      <p>{{ 'CONTROLL.LABEL.click_icon_view_contract' | translate }} <a href=\"javascript:void(0)\"\r\n          (click)=\"viewContract($event)\"><img src=\"assets\\img\\icons\\HopDong.png\"></a></p>\r\n      <div class=\"text-center\" style=\"margin-top: 30px\">\r\n        <dx-button (click)=\"onKy($event)\" text=\"{{ 'CONTROLL.BUTTON.electronic_sign' | translate }}\" type=\"default\">\r\n        </dx-button>\r\n        <dx-button (click)=\"cannel($event)\" text=\"{{ 'CONTROLL.BUTTON.ignore_sign_later' | translate }}\" type=\"default\">\r\n        </dx-button>\r\n      </div>\r\n    </div>\r\n\r\n  </dx-popup>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/info-service/components/index/index.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/info-service/components/index/index.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#refresh{background:none;border:none}\n"

/***/ }),

/***/ "./src/app/modules/info-service/components/index/index.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/info-service/components/index/index.component.ts ***!
  \**************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_info_service_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/info-service/shared */ "./src/app/modules/info-service/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _renewal_renewal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renewal/renewal.component */ "./src/app/modules/info-service/components/renewal/renewal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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
    function IndexComponent(infoServiceService, modalService, authService, socketService, translate) {
        var _this = this;
        this.infoServiceService = infoServiceService;
        this.modalService = modalService;
        this.authService = authService;
        this.socketService = socketService;
        this.translate = translate;
        this.popupContract = false;
        this.onKy = function (e) {
            _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, _this.content_contract, 'bien_ban.pdf', 'pdf', true, null, 'ALIGN_LEFT', 'PAGE_LAST');
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.loadList();
        this.getDataSelect();
        this.getInfo();
        this.layDanhMucGoiDichVu();
        this.connectWebsocket();
        this.van_account_id = this.authService.getCurrentUser().account.van_account_id;
    };
    IndexComponent.prototype.loadList = function () {
        this.dataSource = {};
        this.dataSource.store = this.infoServiceService.getAll();
    };
    IndexComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName == 'efy_Sign') {
                // Helper.dowloadFile('a.pdf', 'pdf', data.Data.Content);
                var f_data = {
                    'customer': {
                        'id': _this.van_account_id
                    },
                    'service': {
                        'file_content': data.Data.Content
                    }
                };
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
                _this.infoServiceService.kyHopDong(f_data).subscribe(function (res) {
                    if (res.status == 'success') {
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Ký hợp đồng thành công', 'success');
                        _this.popupContract = false;
                        var currentUser = _this.authService.getCurrentUser();
                        currentUser.unsigned = 0;
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));
                        _this.loadList();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(res.message, 'error');
                    }
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                });
            }
        });
    };
    IndexComponent.prototype.giaHanDichVu = function () {
        var _this = this;
        var initialState = {
            cities: this.cities,
            taxDepartments: this.taxDepartments,
            infoUnit: this.infoUnit,
            packagesAll: this.packages
        };
        console.log(initialState);
        this.bsModalRef = this.modalService.show(_renewal_renewal_component__WEBPACK_IMPORTED_MODULE_4__["RenewalComponent"], {
            class: 'modal-lg full-width', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        this.modalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem) {
                // this.dataGrid.instance.refresh();
                _this.dataSource = {};
                _this.loadList();
            }
        });
    };
    IndexComponent.prototype.refresh = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        this.infoServiceService.refresh().subscribe(function (res) {
            if (res.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Làm mới thông tin dịch vụ thành công', 'success');
                _this.dataSource = {};
                _this.loadList();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(res.error, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.onCellClick = function (data) {
        // Library.showloading();
        // this.infoServiceService.getContract(data.contract_id).subscribe((res) => {
        //   if (res.status == "success") { 
        //     this.content_contract = res.data.contract.content_contract;
        //     if (this.content_contract != '') {
        //       if (data.contract_status == '2') {
        //         this.viewContract();
        //       } else {
        //         this.popupContract = true;
        //       }
        //     }
        //   }
        //   else {
        //     if (data.content_contract != '')
        //       this.content_contract = data.content_contract;
        //     else
        //       Library.notify(res.message, 'error');
        //   }
        //   Library.hideloading();
        // });
        this.content_contract = data.content_contract;
        if (data.content_contract != '') {
            if (data.contract_status == '2') {
                this.viewContract();
            }
            else {
                this.popupContract = true;
            }
        }
    };
    IndexComponent.prototype.viewContract = function () {
        var win = window.open('hello', '', 'width=100%, height=auto');
        if (this.content_contract) {
            var pdf_file = this.content_contract;
            win.document.write("\n        <a id=\"idA\" title=\"Download File\" style=\"font-family: 'Verdana';color: #333;font-weight: 600;float:right; margin-bottom: 5px;\n          margin-right: 20px;\" download=\"hoadon.pdf\" href=\"data:application/pdf;base64," + pdf_file + "\">T\u1EA3i File</a>\n        <iframe width=\"100%\" height=\"97%\" src=\"data:application/pdf;base64," + pdf_file + "#download=1\"></iframe>\n        \n      ");
            win.resizeTo(screen.availWidth, screen.availHeight);
            win.focus();
        }
    };
    IndexComponent.prototype.cannel = function () {
        this.popupContract = false;
    };
    IndexComponent.prototype.getDataSelect = function () {
        var _this = this;
        this.infoServiceService.getDataSelect().subscribe(function (res) {
            _this.cities = res.data.DM_TINH_THANH;
            _this.taxDepartments = res.data.DM_CO_QUAN_THUE;
        });
    };
    IndexComponent.prototype.getInfo = function () {
        var _this = this;
        this.accountId = this.authService.getCurrentUser().account.id;
        if (this.accountId) {
            this.infoServiceService.getInfo(this.accountId).subscribe(function (res) {
                _this.infoUnit = res.data.account;
            });
        }
    };
    IndexComponent.prototype.layDanhMucGoiDichVu = function () {
        var _this = this;
        this.infoServiceService.layDanhMucGoiDichVu().subscribe(function (res) {
            _this.packages = res.data;
        });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/info-service/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/info-service/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_modules_info_service_shared__WEBPACK_IMPORTED_MODULE_1__["InfoServiceService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/info-service/components/renewal/renewal.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/info-service/components/renewal/renewal.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"service-renewal\"> \r\n  <form (ngSubmit)=\"onSubmit($event)\" class=\"form-info-register\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">ĐĂNG KÝ GIA HẠN DỊCH VỤ iHOADON</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <dx-form [formData]=\"service\" validationGroup=\"formData\" [showColonAfterLabel]=\"false\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item [label]=\"{text: 'Hình thức đăng ký'}\" dataField=\"register_type\" editorType=\"dxRadioGroup\" \r\n              [editorOptions]=\"{dataSource:registerTypes , layout: 'horizontal', \r\n                onValueChanged: onRegisterTypeChanged, displayExpr: 'name', valueExpr: 'code'}\" cssClass='register-type'>\r\n            <dxi-validation-rule type=\"required\" message=\"Hình thức đăng ký không được để trống\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n              <dxi-item [label]=\"{visible: false}\" dataField=\"username\" cssClass='code-register-type'\r\n              [editorOptions]=\"{placeholder: placeholderRegtype ,visible: isVisibleRegtype}\">\r\n              </dxi-item>\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dx-form>\r\n      <h3 class=\"form-title ttdv\">A.Thông tin đơn vị</h3>\r\n      <dx-form [formData]=\"customer\" validationGroup=\"formData\" [showColonAfterLabel]=\"false\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item [label]=\"{text: 'Tỉnh/thành phố'}\" dataField=\"tax_province_code\" editorType=\"dxSelectBox\" \r\n            [editorOptions]=\"{items: cities,  displayExpr: 'name', valueExpr: 'code', searchEnabled: 'true', disabled: 'true'}\">\r\n            <dxi-validation-rule type=\"required\" message=\"Tỉnh/thành phố không được để trống\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Cơ quan thuế quản lý'}\" dataField=\"tax_department\" editorType=\"dxSelectBox\" \r\n            [editorOptions]=\"{items: taxDepartments,  displayExpr: 'name', valueExpr: 'code', searchEnabled: 'true',disabled: 'true'}\">\r\n            <dxi-validation-rule type=\"required\" message=\"Cơ quan thuế quản lý không được để trống\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Mã số thuế'}\" dataField=\"tax_code\" [editorOptions]=\"{disabled: 'true'}\">\r\n            <dxi-validation-rule type=\"required\" message=\"Mã số thuế không được để trống\"></dxi-validation-rule>\r\n            <dxi-validation-rule \r\n              type=\"pattern\" \r\n              [pattern]=\"taxCodePattern\"  \r\n              message=\"Mã số thuế không đúng định dạng\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Tên đơn vị'}\" dataField=\"name\" [editorOptions]=\"{disabled: 'true'}\">\r\n            <dxi-validation-rule type=\"required\" message=\"Tên đơn vị không được để trống\"></dxi-validation-rule>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item [label]=\"{text: 'Địa chỉ ĐKKD'}\" dataField=\"address_business\">\r\n            <dxi-validation-rule type=\"required\" message=\"Địa chỉ ĐKKD không được để trống\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Địa chỉ giao dịch (nếu khác)'}\" dataField=\"address_transaction\" \r\n            [editorOptions]=\"{placeholder: 'Nếu trùng địa chỉ ĐKKD thì nhập địa chỉ ĐKKD'}\">\r\n            <!-- <dxi-validation-rule type=\"required\" message=\"Địa chỉ giao dịch không được để trống\"></dxi-validation-rule> -->\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item [label]=\"{text: 'Người liên hệ'}\" dataField=\"contact_person_name\">\r\n            <dxi-validation-rule type=\"required\" message=\"Người liên hệ không được để trống\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Điện thoại di động'}\" dataField=\"contact_mobile\">\r\n            <dxi-validation-rule type=\"required\" message=\"Điện thoại di động không được để trống\"></dxi-validation-rule>\r\n            <dxi-validation-rule \r\n            type=\"pattern\" \r\n            [pattern]=\"phonePattern\"  \r\n            message=\"Số điện thoại không đúng\">\r\n          </dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Email liên hệ'}\" dataField=\"email\">\r\n            <dxi-validation-rule type=\"required\" message=\"Email liên hệ không được để trống\"></dxi-validation-rule>\r\n            <dxi-validation-rule \r\n              type=\"pattern\" \r\n              [pattern]=\"emailPattern\"  \r\n              message=\"Điạ chỉ email không đúng\">\r\n            </dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item editorType=\"dxTextBox\" [label]=\"{text: 'Nhắc lại email'}\">\r\n            <dxi-validation-rule  \r\n              type=\"compare\" \r\n              [comparisonTarget]=\"emailComparison\" \r\n              message=\"Email xác nhận không đúng\">\r\n            </dxi-validation-rule>\r\n            <dxi-validation-rule type=\"required\" message=\"Nhập lại email không được để trống\"></dxi-validation-rule>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxo-label text=\"B. Lựa chọn gói dịch vụ iHOADON\" [showColon]=\"false\"></dxo-label>\r\n      </dx-form>\r\n      <h3 class=\"form-title\">B. Lựa chọn gói dịch vụ iHOADON</h3> <i>(đã bao gồm thuế)</i>\r\n      <p class=\"tkbg\"><span>Tham khảo bản giá</span><span><a href=\"https://ihoadon.vn/hddt/bang-gia-dich-vu-phan-mem-hoa-don-dien-tu-ihoadon.html\" target=\"_blank\">Tại đây</a></span></p>\r\n      \r\n      \r\n\r\n      <table class=\"table table-bordered\" id=\"service\">\r\n        <thead>\r\n          <tr>\r\n            <th style=\"width: 20%\"><strong>Gói dịch vụ</strong></th>\r\n            <th style=\"width: 15%\"><strong>Số lượng</strong></th>\r\n            <th style=\"width: 20%\"><strong>Đơn giá (đ)</strong></th>\r\n            <th style=\"width: 25%\"><strong>Khuyến mại</strong></th>\r\n            <th style=\"width: 20%\"><strong>Thành tiền (đ)</strong></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of packagesAll.package;let i = index\">\r\n            <td>{{ item.code }} ({{ item.maximum_order_amount }} hóa đơn)</td>\r\n            <td><input type=\"text\" pattern=\"[1-9][0-9]*\"\r\n              title=\"Số lượng gói không đúng định dạng\" class=\"form-control\" name=\"{{ item.code }}\" placeholder=\"Nhập số lượng\" (keyup)=\"changeAmountPackage($event, item.money, item.maximum_order_amount)\"></td>\r\n            <td style=\"text-align: right\">{{ item.money }}</td>\r\n            <td></td>\r\n            <td style=\"text-align: right\">{{ (packageInput[item.code]) ? packageInput[item.code]['total_money'] : '' }}</td>\r\n            <!-- <td style=\"text-align: right\">{{ (item.money * packageInput[item.code]) ? item.money * packageInput[item.code] : '' }}</td> -->\r\n          </tr>\r\n          <!-- <tr>\r\n            <td>Thuê bao ({{ packagesAll.subscriber[0].unit_name }})</td>\r\n            <td>\r\n              <select class=\"form-control\" required title=\"Số lượng không được để trống\" [(ngModel)]=\"subscriberAmount\" name=\"subscriber_amount\" (change)=\"triggerSubscriberAmount()\">\r\n                <option value=\"\" disabled>Chọn số lượng</option>\r\n                <option *ngFor=\"let item1 of packagesAll.subscriber\" value=\"{{ item1.amount }}\" >{{ item1.amount }} {{ item1.unit_name }}</option>\r\n              </select>\r\n            </td>\r\n            <td style=\"text-align: right\">{{ (subscriberSelected) ? subscriberSelected.unit_money : '' }}</td>\r\n            <td style=\"white-space: pre-line\">{{ (subscriberSelected) ? subscriberSelected.note : '' }}</td>\r\n            <td style=\"text-align: right\">{{ (subscriberSelected) ? subscriberSelected.money : '' }}</td>\r\n          </tr> -->\r\n          <tr>\r\n            <td colspan=\"5\"><strong>{{ total }}</strong></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <!-- <dx-button icon=\"assets\\img\\icons\\Ghi.png\" text=\"Ghi\" type=\"default\" validationGroup=\"listData\" [useSubmitBehavior]=\"true\">\r\n      </dx-button> -->\r\n      <dx-button icon=\"assets\\img\\icons\\GhiVaThemMoi.png\" text=\"Đăng ký\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n      </dx-button>\r\n      <dx-button text=\"Quay lại\" type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\" (click)=\"bsModalRef.hide()\">\r\n      </dx-button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/info-service/components/renewal/renewal.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/info-service/components/renewal/renewal.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service-renewal{padding:15px 20px}.form-title{margin:15px 0px;font-weight:bold;display:inline-block}h2{text-align:center;color:#0e77bb;font-size:18px;font-weight:bold;margin:15px 0px}.footer-form{float:right;padding-top:20px;padding-bottom:50px}::ng-deep .form-info-register .register-type .dx-radiobutton-icon:before{width:18px;height:18px}::ng-deep .form-info-register .register-type .dx-radiobutton-checked .dx-radiobutton-icon-dot{margin-top:-15px;margin-left:5px}::ng-deep .form-info-register .register-type .dx-field-item-label{margin-right:70px}::ng-deep .form-info-register .register-type .dx-field-item-label .dx-field-item-label-content{font-weight:600 !important}::ng-deep .form-info-register .fax-info{padding-right:0 !important}::ng-deep .form-info-register .fax-info .dx-field-item-label-content{width:145px !important}::ng-deep .form-info-register .website-info .dx-field-item-label-content{width:50px !important}::ng-deep .form-info-register .expiry-date{padding-right:0 !important}::ng-deep .form-info-register .expiry-date .dx-field-item-label-content{width:186px !important}::ng-deep .form-info-register .package-code{padding-left:0 !important}::ng-deep .form-info-register .package-code .dx-field-item-label-content{width:100px !important}::ng-deep .form-info-register .total-time .dx-field-item-label-content{width:186px !important}::ng-deep .form-info-register .count{padding-right:0 !important}::ng-deep .form-info-register .count .dx-field-item-label-content{width:151px !important}::ng-deep .form-info-register .into-money{padding-left:0 !important}::ng-deep .form-info-register .into-money .dx-field-item-label-content{width:90px !important}::ng-deep .form-info-register .mounth .dx-field-item-label-content{width:151px !important}.form-info-register .tkbg{margin-left:54px;padding-bottom:15px}.form-info-register .tkbg span:first-child{text-align:right;padding-right:20px}.form-info-register .tkbg span:last-child{text-align:left;font-weight:600}.form-info-register .ttdv{margin-top:0}::ng-deep .form-info-register .code-register-type{margin-left:195px}#service thead tr{text-align:center}#service th{background:#C0C0FF;vertical-align:middle}#service td{padding:4px 6px;vertical-align:middle}#service .form-control{height:28px;font-size:14px}#service select.form-control{padding:2px 8px !important}\n"

/***/ }),

/***/ "./src/app/modules/info-service/components/renewal/renewal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/info-service/components/renewal/renewal.component.ts ***!
  \******************************************************************************/
/*! exports provided: RenewalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalComponent", function() { return RenewalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_info_service_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/info-service/shared */ "./src/app/modules/info-service/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RenewalComponent = /** @class */ (function () {
    function RenewalComponent(bsModalRef, modalService, InfoServiceService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.InfoServiceService = InfoServiceService;
        this.isVisibleRegtype = false;
        this.placeholderRegtype = "";
        this.isDisPackeges = true;
        this.isDisYears = false;
        this.isDisTaxDepartments = true;
        this.packageInput = {};
        this.subscriberAmount = '';
        this.subscriberSelected = {};
        this.registerTypes = [{
                name: 'Nhà cung cấp EFY',
                code: 'TRUC_TIEP'
            }, {
                name: 'Qua đại lý',
                code: 'DAI_LY'
            }, {
                name: 'Cộng tác viên',
                code: 'CTV'
            }];
        this.numberYears = [{
                code: '1',
                name: '1 Năm'
            }, {
                code: '2',
                name: '2 năm'
            }, {
                code: '3',
                name: '3 năm'
            }];
        this.groupUnits = [{
                code: 'DN',
                name: 'Doanh nghiệp'
            }, {
                code: 'HS-SV',
                name: 'Trường học '
            }, {
                code: 'YTE',
                name: 'Y tế '
            }, {
                code: 'HangKhong',
                name: 'Hàng không, hóa đơn bán vé máy bay '
            }];
        this.declarationForms = [{
                code: 'TRUC_TIEP',
                name: 'Trực tiếp'
            }, {
                code: 'KHAU_TRU',
                name: 'Khấu trừ'
            }, {
                code: 'CHEXUAT_PHITHUEQUAN',
                name: 'Đơn vị trong khu chế xuất, khu phi thuế quan'
            }];
        this.email = "";
        this.emailComparison = function () {
            return _this.form['_results'][1].instance.option("formData").email;
        };
        this.emailPattern = _config_pattern__WEBPACK_IMPORTED_MODULE_2__["pattern"].email;
        this.phonePattern = _config_pattern__WEBPACK_IMPORTED_MODULE_2__["pattern"].phone;
        this.taxCodePattern = _config_pattern__WEBPACK_IMPORTED_MODULE_2__["pattern"].tax_code;
        this.customer = new _modules_info_service_shared__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
        this.service = new _modules_info_service_shared__WEBPACK_IMPORTED_MODULE_4__["Service"]();
        this.onRegisterTypeChanged = function (e) {
            if (e.value) {
                if (e.value == 'DAI_LY') {
                    _this.isVisibleRegtype = true;
                    _this.placeholderRegtype = 'Nhập mã xác nhận của đại lý';
                }
                else if (e.value == 'TRUC_TIEP') {
                    _this.isVisibleRegtype = false;
                }
                else if (e.value == 'CTV') {
                    _this.isVisibleRegtype = true;
                    _this.placeholderRegtype = 'Nhập mã xác nhận của cộng tác viên';
                }
            }
        };
        this.onYearChanged = function (e) {
            _this.service.maximum_order_amount = "";
            _this.service.money = 0;
            _this.service.number_month_regulation = "";
            _this.isDisPackeges = false;
            _this.getPackages(e.value);
        };
        this.onPackageChanged = function (e) {
            if (_this.packages) {
                _this.packages.forEach(function (element) {
                    if (element.code == e.value) {
                        _this.service.maximum_order_amount = element.maximum_order_amount;
                        _this.service.money = element.money;
                        _this.service.number_month_regulation = element.number_month_regulation;
                    }
                });
            }
        };
        this.onSubmit = function (e) {
            _this.service['package'] = [];
            _this.service['subscriber'] = {};
            for (var x in _this.packageInput) {
                if (_this.packageInput[x].amount > 0) {
                    _this.service['package'].push({
                        'code': x,
                        'amount': _this.packageInput[x].amount
                    });
                }
            }
            _this.service['subscriber'].amount = _this.subscriberAmount;
            var data = {
                "customer": _this.customer,
                "service": _this.service,
            };
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            _this.InfoServiceService.giaHan(data).subscribe(function (res) {
                if (res.status == "success") {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Đănng ký gia hạn thành công", "success");
                    _this.bsModalRef.hide();
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, "error");
                }
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            });
        };
    }
    RenewalComponent.prototype.ngOnInit = function () {
        this.customer.tax_province_code = this.infoUnit.tax_province_code;
        this.customer.tax_department = this.infoUnit.tax_department;
        this.customer.address_business = this.infoUnit.business_address;
        this.customer.address_transaction = this.infoUnit.transaction_address;
        this.customer.contact_person_name = this.infoUnit.contact_person_name;
        this.customer.contact_mobile = this.infoUnit.contact_mobile;
        this.customer.email = this.infoUnit.email;
        this.customer.tax_code = this.infoUnit.tax_code;
        this.customer.name = this.infoUnit.name;
        for (var i = 0; i < this.packagesAll.package.length; i++) {
            this.packagesAll.package[i].money = this.formatMoney(this.packagesAll.package[i].money);
        }
    };
    RenewalComponent.prototype.getPackages = function (year) {
        var packages = [];
        this.packagesAll.forEach(function (element) {
            if (element.number_year == year) {
                packages.push(element);
            }
        });
        this.packages = packages;
    };
    RenewalComponent.prototype.getPackageByCode = function (code) {
        var _this = this;
        this.packagesAll.forEach(function (element) {
            if (element.code == code) {
                _this.package = element;
            }
        });
    };
    RenewalComponent.prototype.formatMoney = function (value) {
        if (!value) {
            value = "";
        }
        var string = value.toString().replace(/[^-0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return string;
    };
    RenewalComponent.prototype.toNumber = function (value) {
        if (typeof value == 'string') {
            value = value.replace(/\./g, '');
        }
        return (parseInt(value)) ? parseInt(value) : 0;
    };
    RenewalComponent.prototype.triggerSubscriberAmount = function () {
        this.subscriberSelected = {};
        for (var i = 0; i < this.packagesAll.subscriber.length; i++) {
            if (this.packagesAll.subscriber[i].amount == this.subscriberAmount) {
                this.subscriberSelected = this.packagesAll.subscriber[i];
                console.log(this.subscriberSelected);
                this.subscriberSelected.note.replace(/\n/g, '<br>');
            }
        }
        this.getTotal();
    };
    RenewalComponent.prototype.changeAmountPackage = function (event, money, maximumOrderAmount) {
        var name = event.target.name;
        this.packageInput[name] = {};
        var value = this.toNumber(event.target.value);
        money = this.toNumber(money);
        maximumOrderAmount = this.toNumber(maximumOrderAmount);
        this.packageInput[name] = {
            'amount': value,
            'money': money,
            'total_money': money * value,
            'total_order_amount': value * maximumOrderAmount
        };
        this.getTotal();
    };
    RenewalComponent.prototype.getTotal = function () {
        var totalMoneyPackage = 0;
        var totalOrderAmount = 0;
        for (var x in this.packageInput) {
            totalMoneyPackage += this.toNumber(this.packageInput[x]['total_money']);
            totalOrderAmount += this.toNumber(this.packageInput[x]['total_order_amount']);
            this.packageInput[x]['total_money'] = this.formatMoney(this.packageInput[x]['total_money']);
            this.packageInput[x]['money'] = this.formatMoney(this.packageInput[x]['money']);
        }
        console.log(this.subscriberSelected.money);
        console.log(this.toNumber(this.subscriberSelected.money));
        var totalMoney = this.formatMoney(this.toNumber(this.subscriberSelected.money) + totalMoneyPackage);
        var totalYear = this.toNumber(this.subscriberSelected.amount) + this.toNumber(this.subscriberSelected.promotion_year);
        totalMoney = totalMoney;
        totalOrderAmount = totalOrderAmount;
        this.total = "T\u1ED5ng thanh to\u00E1n: " + totalMoney + " \u0111, s\u1ED1 l\u01B0\u1EE3ng " + totalOrderAmount + " h\u00F3a \u0111\u01A1n.";
        this.subscriberSelected.unit_money = this.formatMoney(this.subscriberSelected.unit_money);
        this.subscriberSelected.money = this.formatMoney(this.subscriberSelected.money);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxFormComponent"])
    ], RenewalComponent.prototype, "form", void 0);
    RenewalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-renewal',
            template: __webpack_require__(/*! ./renewal.component.html */ "./src/app/modules/info-service/components/renewal/renewal.component.html"),
            styles: [__webpack_require__(/*! ./renewal.component.scss */ "./src/app/modules/info-service/components/renewal/renewal.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_6__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _modules_info_service_shared__WEBPACK_IMPORTED_MODULE_4__["InfoServiceService"]])
    ], RenewalComponent);
    return RenewalComponent;
}());



/***/ }),

/***/ "./src/app/modules/info-service/info-service.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/info-service/info-service.module.ts ***!
  \*************************************************************/
/*! exports provided: InfoServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoServiceModule", function() { return InfoServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/info-service/components/index/index.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _info_service_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-service.routing */ "./src/app/modules/info-service/info-service.routing.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/modules/info-service/shared/index.ts");
/* harmony import */ var _components_renewal_renewal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/renewal/renewal.component */ "./src/app/modules/info-service/components/renewal/renewal.component.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//library

//general





var InfoServiceModule = /** @class */ (function () {
    function InfoServiceModule() {
    }
    InfoServiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _info_service_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _core_index__WEBPACK_IMPORTED_MODULE_4__["devextremeModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxTreeListModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_9__["vTranslateModule"]
            ],
            declarations: [_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], _components_renewal_renewal_component__WEBPACK_IMPORTED_MODULE_8__["RenewalComponent"]],
            entryComponents: [
                _components_renewal_renewal_component__WEBPACK_IMPORTED_MODULE_8__["RenewalComponent"]
            ],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_7__["InfoServiceService"]]
        })
    ], InfoServiceModule);
    return InfoServiceModule;
}());



/***/ }),

/***/ "./src/app/modules/info-service/info-service.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/info-service/info-service.routing.ts ***!
  \**************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/info-service/components/index/index.component.ts");
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



/***/ })

}]);
//# sourceMappingURL=info-service-info-service-module.js.map