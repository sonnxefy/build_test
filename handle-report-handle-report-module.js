(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["handle-report-handle-report-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].forkJoin = rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"];
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./src/app/modules/handle-report/cancel-report/cancel-report.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/handle-report/cancel-report/cancel-report.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"pl-0 col-md-12\">\r\n      <div class=\"button-redirect\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"routeReport()\">{{_translate.CONTROLL.LABEL.report}}</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link text-danger active\" (click)=\"routeCancelInvoice()\" href=\"javascript:void(0)\">\r\n              <i class=\"dx-icon fa fa-trash\"></i>\r\n              {{_translate.CONTROLL.LABEL.cancel_invoice}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-5\">\r\n    <form class=\"container\" [formGroup]=\"form\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row form-group\">\r\n            <div class=\"label-text-item col-md-3 text-right\">\r\n              <label>{{_translate.CONTROLL.LABEL.invoice_form}} :</label>\r\n            </div>\r\n            <div class=\"col-md-8 pl-0\">\r\n              <input type=\"text\" style=\"margin-left: 10px\" class=\"input-style-item-top p-1 font-weight-bold\"\r\n                     [value]=\"dataInvoice.template_code\"\r\n                     disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row form-group\">\r\n            <div class=\"label-text-item col-md-3 text-right\">\r\n              <label>{{_translate.GRID.INVOICE.invoice_number}} :</label>\r\n            </div>\r\n            <div class=\"col-md-8 pl-0\">\r\n              <input type=\"text\" style=\"margin-left: 10px\" class=\"input-style-item-top p-1 font-weight-bold\"\r\n                     [value]=\"dataInvoice.invoice_number\"\r\n                     disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row form-group\">\r\n            <div class=\"label-text-item col-md-3 text-right\">\r\n              <label>{{_translate.CONTROLL.LABEL.invoice_date}} :</label>\r\n            </div>\r\n            <div class=\"col-md-4 pl-0\">\r\n              <input type=\"text\" style=\"margin-left: 10px\" class=\"input-style-item-top p-1 font-weight-bold\"\r\n                     [value]=\"myDateValue\" disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row form-group\">\r\n            <div class=\"label-text-item col-md-3 text-right\">\r\n              <label>{{_translate.GRID.INVOICE_DETAILS.total_money}} :</label>\r\n            </div>\r\n            <div class=\"col-md-8 pl-0\">\r\n              <input type=\"text\" style=\"margin-left: 10px\" class=\"input-style-item-top p-1 font-weight-bold\"\r\n                     [value]=\"formatMoney\"\r\n                     disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row form-group\">\r\n            <div class=\"label-text-item col-md-2 label-text-item-bt text-right\">\r\n              <label *ngIf=\"accountType !== 'HS-SV'\">{{_translate.GRID.INVOICE.customer_name}} :</label>\r\n              <label *ngIf=\"accountType == 'HS-SV'\">{{_translate.CONTROLL.LABEL.name_student}} :</label>\r\n              \r\n            </div>\r\n            <div class=\"col-md-8 pl-0\">\r\n              <input *ngIf=\"accountType !== 'HS-SV'\" type=\"text\" style=\"margin-left: 10px\"\r\n                     class=\"input-style-item-top p-1 font-weight-bold\"\r\n                     [value]=\"dataInvoice.customer_name? dataInvoice.customer_name: dataInvoice.buyer_name\"\r\n                     disabled>\r\n              <input *ngIf=\"accountType == 'HS-SV'\" type=\"text\" style=\"margin-left: 10px\"\r\n                     class=\"input-style-item-top p-1 font-weight-bold\"\r\n                     [value]=\"dataInvoice.student_name? dataInvoice.student_name: dataInvoice.student_name\"\r\n                     disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-container formGroupName=\"invoice\">\r\n          <div class=\"col-md-12 pb-2\">\r\n            <div class=\"row \">\r\n              <div class=\"label-text-item col-md-2 label-text-item-bt text-right\">\r\n                <label style=\"line-height: 34px\">{{_translate.GRID.INVOICE.date_cancel}} <span\r\n                  class=\"text-danger\">(*)</span>:</label>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <dx-date-box\r\n                  type=\"date\"\r\n                  [displayFormat]=\"'dd/MM/yyyy'\"\r\n                  [useMaskBehavior]=\"true\"\r\n                  placeholder=\"{{_translate.GRID.TEMPLATE.enter_created_at}}\"\r\n                  formControlName=\"destroy_date\"\r\n                >\r\n                </dx-date-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 pb-2\">\r\n            <div class=\"row \" style=\"position: relative\">\r\n              <div class=\"col-md-2 label-text-item label-text-item-bt text-right\">\r\n                <label style=\"line-height: 50px\">{{_translate.CONTROLL.LABEL.reason_cancels}} <span\r\n                  class=\"text-danger\">(*)</span>:</label>\r\n              </div>\r\n              <div class=\"col-md-10 \">\r\n              <textarea rows=\"3\" class=\"p-1\" style=\"width: 75.4%!important\"\r\n                        placeholder=\"{{_translate.CONTROLL.LABEL.reason_cancel_report}}\" formControlName=\"destroy_reason\"></textarea>\r\n<!--                <div-->\r\n<!--                  *ngIf=\"submitted || form.get('invoice.destroy_reason').invalid && form.get('invoice.destroy_reason').dirty \">-->\r\n<!--                  <div *ngIf=\"form.get('invoice.destroy_reason').errors?.required\" class=\"text-danger\"-->\r\n<!--                  >-->\r\n<!--                    <label style=\"display: inline-block; position: absolute; top:20px; right: 215px\"> <i-->\r\n<!--                      class=\"fa fa-exclamation-circle dx-icon\" style=\"font-size: 20px\"></i> </label>-->\r\n<!--                  </div>-->\r\n<!--                </div>-->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 pb-2\">\r\n            <div class=\"row \">\r\n              <div class=\"col-md-1\">\r\n              </div>\r\n              <div class=\"col-md-1 pr-0\" style=\"max-width: 4% !important;\">\r\n                <input type=\"checkbox\" id=\"checked-notify\" [checked]=\"checkedInputEmail\" (click)=\"checkStatusEmail()\">\r\n              </div>\r\n              <div class=\"col-md-8 pl-0\">\r\n                <label for=\"checked-notify\" class=\"font-weight-bold\"> {{_translate.CONTROLL.LABEL.notify_cancel_report_for_customer}} :</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 pb-2\">\r\n            <div class=\"row\" style=\"position: relative\">\r\n              <div class=\"col-md-2 label-text-item label-text-item-bt text-right\">\r\n                <label>Email :</label>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                <app-input-multiple-email-cancel-invoice [variableName]=\"emails\"\r\n                                                         (numberGenerated)=\"renderDataEmail($event)\">\r\n                </app-input-multiple-email-cancel-invoice>\r\n                <div\r\n                  *ngIf=\"submitted || form.get('invoice.email').invalid && form.get('invoice.email').dirty \">\r\n                  <div *ngIf=\"form.get('invoice.email').errors?.required\" class=\"text-danger\"\r\n                  >\r\n                    <label style=\"display: inline-block; position: absolute; top:5px; right: 215px\"> <i\r\n                      class=\"fa fa-exclamation-circle dx-icon\" style=\"font-size: 20px\"></i> </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-1\"></div>\r\n            <div class=\"col-md-4\" style=\"margin-left: 47px\">\r\n              <div>\r\n                <file-upload-multiple [fileData]=\"fileData\" (fileChange)=\"getFileData($event)\"></file-upload-multiple>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row mt-3\" style=\"float: right\">\r\n            <button type=\"button\" class=\"button-content-style\" (click)=\"submit()\">\r\n              <span>{{_translate.CONTROLL.LABEL.cancel_invoice}}</span>\r\n            </button>\r\n            <button (click)=\"close()\" type=\"button\" class=\"button-content-style\">\r\n              <span>{{_translate.CONTROLL.BUTTON.come_back}}</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-report/cancel-report/cancel-report.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/handle-report/cancel-report/cancel-report.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-redirect .nav-tabs{border-bottom:1px solid #dee2e6 !important}.label-text-item{line-height:25px;padding-right:0}.input-style-item-top{width:100%;border:none;background-color:transparent;font-size:15px}.input-style-item{width:100%}.label-text-item-bt{max-width:142.5px}.button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}\n"

/***/ }),

/***/ "./src/app/modules/handle-report/cancel-report/cancel-report.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/handle-report/cancel-report/cancel-report.component.ts ***!
  \********************************************************************************/
/*! exports provided: CancelReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelReportComponent", function() { return CancelReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/library/invoice/v-changge-money.service */ "./src/app/core/library/invoice/v-changge-money.service.ts");
/* harmony import */ var _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/handle-invoice/shared */ "./src/app/modules/handle-invoice/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CancelReportComponent = /** @class */ (function () {
    function CancelReportComponent(authService, route, handleReport, fb, socketService, router, translate, handleInvoiceService) {
        this.authService = authService;
        this.route = route;
        this.handleReport = handleReport;
        this.fb = fb;
        this.socketService = socketService;
        this.router = router;
        this.translate = translate;
        this.handleInvoiceService = handleInvoiceService;
        this.date = new Date();
        this.emails = [];
        this.arrEmail = [];
        this.submitted = false;
        this.coKiSoTapChung = false;
        this.isRemoteSignning = false;
        this.dataConfigs = [];
        this.checkedInputEmail = true;
        this.fileData = [];
        this.dataReport = [];
        this.formatter = {};
        this.dataMoneyConfig = {};
        this.isTT78 = false;
        this.invoices = [];
        this.isCancelInvSucess = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.translate.use(this._language);
        this.accountType = this.authService.getAccountType();
    }
    CancelReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configs = this.authService.getConfigs();
        this.form = this.fb.group(this.handleReport.generatedFormCancelInvoice());
        this.id = this.route.snapshot.paramMap.get('id');
        var currentUser = this.authService.getCurrentUser();
        this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return value.CancelInvoiceResolverService; }))
            .subscribe(function (value) {
            _this.dataInvoice = value[0];
            _this.dataMoneyConfig = JSON.parse(_this.dataInvoice.decimal_places_json);
            _this.dataConfigs = value[1];
            _this.dataReport = value[2];
            _this.myDateValue = moment__WEBPACK_IMPORTED_MODULE_4__(value[0].invoice_date).format('DD/MM/YYYY');
            _this.updateDateInvoice = _this.dataInvoice.updated_at;
            _this.infoDangKy = _this.authService.getInfoRegister();
            if (_this.infoDangKy) {
                if (_this.infoDangKy.status == "CHAP_NHAN") {
                    _this.isTT78 = true;
                }
            }
            if (_this.dataReport.length > 0) {
                _this.emailString = _this.dataReport[0].email;
                _this.praseEmail(_this.emailString);
                _this.form.patchValue({
                    invoice: {
                        id: value[0].id,
                        destroy_date: _this.date,
                        destroy_reason: _this.dataReport[0].destroy_reason,
                        email: _this.emailString
                    }
                });
            }
            else {
                _this.emailString = _this.dataInvoice.hasOwnProperty('email') ? _this.dataInvoice.email : _this.dataInvoice.buyer_email;
                _this.praseEmail(_this.emailString);
                _this.form.patchValue({
                    invoice: {
                        id: value[0].id,
                        destroy_date: _this.date,
                        email: _this.emailString
                    }
                });
            }
            _this.dataConfigs.forEach(function (item) {
                if (item.name === 'integrate_parameter') {
                    var config = JSON.parse(item.value);
                    _this.coKiSoTapChung = config.concentrate_signature.is_concentrate_signature;
                    if (config.remote_signing && config.remote_signing.is_remote_signing) {
                        _this.isRemoteSignning = true;
                    }
                }
                if (item.name === 'decimal_places_json') {
                    _this.formatter = _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_11__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(item.value));
                }
                if (item.name === 'system_parameter') {
                    _this.isSystem_parameter = JSON.parse(item.value);
                }
            });
            var _obj = _this.dataConfigs.filter(function (p) { return p.name === 'system_parameter'; })[0];
            if (_obj) {
                _this.system_parameter = _obj;
            }
            if (_this.dataInvoice.total_payment) {
                _this.formatMoney = (_this.dataInvoice.total_payment).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            }
            else {
                _this.formatMoney = '0';
            }
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(error, 'error');
        });
        if (this.dataInvoice.xml_type == "4") {
            this.isTT78 = false;
        }
        this.connectWebsocket();
    };
    CancelReportComponent.prototype.praseEmail = function (data) {
        this.emails = [];
        if (data !== null && data !== undefined) {
            var stringDataEmailGet = data.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
    };
    CancelReportComponent.prototype.submit = function () {
        var _this = this;
        var _isValid = _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_8__["InvoicesService"].checkTimeExportInv(this.system_parameter);
        if (!_isValid) {
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_9__["String"].Format(this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_4__(this.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_4__(this.system_parameter.time_end).format('HH:mm')), 'error');
            return;
        }
        if (this.checkedInputEmail === true) {
            this.form.patchValue({
                invoice: {
                    email: this.emailString
                }
            });
            if (this.form.get('invoice.email').invalid) {
                this.submitted = true;
                return;
            }
        }
        else {
            this.form.patchValue({
                invoice: {
                    email: null
                }
            });
        }
        if (this.fileData.length > 0) {
            this.form.patchValue({
                invoice_files: this.fileData
            });
        }
        this.submitted = false;
        this.form.patchValue({
            invoice: {
                destroy_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.form.value.invoice.destroy_date).format('YYYY-MM-DD')
            }
        });
        if (this.dataReport.length > 0) {
            if (this.dataReport[0].doc_relate_date) {
                this.compareDate = new Date(moment__WEBPACK_IMPORTED_MODULE_4__(this.dataReport[0].doc_relate_date).format('YYYY-MM-DD')) <= new Date(moment__WEBPACK_IMPORTED_MODULE_4__(this.form.value.invoice.destroy_date).format('YYYY-MM-DD'));
                if (this.compareDate === false) {
                    _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.NOTIFY.date_cancel_invoice_greater_report, 'error');
                    return;
                }
            }
        }
        else {
            this.compareDate = new Date(moment__WEBPACK_IMPORTED_MODULE_4__(this.dataInvoice.invoice_date).format('YYYY-MM-DD')) <= new Date(moment__WEBPACK_IMPORTED_MODULE_4__(this.form.value.invoice.destroy_date).format('YYYY-MM-DD'));
            if (this.compareDate === false) {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.NOTIFY.date_cancel_invoice_greater_invoice, 'error');
                return;
            }
        }
        setTimeout(function () {
            if (_this.coKiSoTapChung || _this.isRemoteSignning) {
                _this.xuLiApiKhiXuat();
            }
            else {
                if (_this.isTT78 && _this.dataInvoice.xml_type != 1) {
                    var ListSerialNumber = "DSCKS";
                    if (_this.infoDangKy && _this.infoDangKy.registration_signature) {
                        var signatures = _this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                        if (signatures && signatures.length > 0)
                            ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                    }
                    var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                    _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
                }
                else
                    _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
            }
        }, 300);
    };
    CancelReportComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        var data = {
            id: this.form.value.invoice.id,
            adjustment_type: "7",
            destroy_reason: this.form.value.invoice.destroy_reason,
            email: this.form.value.invoice.email,
            date: this.form.value.invoice.destroy_date
        };
        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        var sub = this.handleReport.getXmlString(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                var xmlString = rs.data.invoice.xml_string;
                var isNewXml = rs.data.invoice.is_new_xml;
                var sign_date = moment__WEBPACK_IMPORTED_MODULE_4__(rs.data.invoice.sign_date).format('YYYY-MM-DD HH:mm:ss');
                if (isNewXml)
                    _this.nodeSign = "//HDon/DSCKS/NBan";
                else
                    _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                if (xmlString != "") {
                    if (_this.coKiSoTapChung || _this.isRemoteSignning || _this.dataInvoice.xml_type == 4) {
                        _this.form.patchValue({
                            invoice: {
                                xml_string: xmlString
                            }
                        });
                        if (_this.fileData.length > 0) {
                            _this.goiApiXoaHoaDon(_this.form.value, true);
                        }
                        else {
                            _this.goiApiXoaHoaDon(_this.form.value.invoice, false);
                        }
                    }
                    else {
                        var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_4__(_this.dataInvoice.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        if (_this.isTT78 && isNewXml) {
                            var ListSerialNumber = "DSCKS";
                            if (_this.infoDangKy && _this.infoDangKy.registration_signature) {
                                var signatures = _this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                                if (signatures && signatures.length > 0)
                                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                            }
                            _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlString, 'hoadon.xml', _this.nodeSign, sign_date, 'InvoiceData', ListSerialNumber, true);
                        }
                        else
                            _this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlString, 'hoadon.xml', _this.nodeSign, invoiceDate);
                    }
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    CancelReportComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                if (data.Data.Name === 'hoadon.xml') {
                    if (_this.isCancelInvSucess)
                        _this.sendData_TBSaiSot(data.Data.Content);
                    else {
                        _this.form.patchValue({
                            invoice: {
                                destroy_date: moment__WEBPACK_IMPORTED_MODULE_4__(_this.form.value.invoice.destroy_date).format('YYYY-MM-DD'),
                                xml_string: data.Data.Content
                            }
                        });
                        setTimeout(function () {
                            if (_this.fileData.length > 0) {
                                _this.goiApiXoaHoaDon(_this.form.value, true);
                            }
                            else {
                                _this.goiApiXoaHoaDon(_this.form.value.invoice, false);
                            }
                        }, 400);
                    }
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    if (_this.isCancelInvSucess)
                        _this.getXml_TBSaiSot();
                    else {
                        _this.xuLiApiKhiXuat();
                    }
                }
            }
        });
    };
    CancelReportComponent.prototype.goiApiXoaHoaDon = function (data, file_DK) {
        var _this = this;
        if (file_DK) {
            this.dataApi = data;
        }
        else {
            this.dataApi = { invoice: data };
        }
        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        var sub = this.handleReport.apiRemoveInvoice(this.dataApi).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.isCancelInvSucess = true;
                if (_this.configs.system_parameter.enable_send_wrong_cancel && _this.isTT78) {
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(_this._translate.NOTIFY.cancel_invoice_done, 'success');
                        _this.router.navigate(['/system/handle-report/', _this.id, 'HUY']);
                    }
                    else
                        _this.startProcess_TBSaiSot();
                }
                else {
                    if (_this.configs.system_parameter.enable_send_wrong_cancel && _this.dataInvoice.xml_type == 4) {
                        _this.startProcess_TBSaiSot();
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(_this._translate.NOTIFY.cancel_invoice_done, 'success');
                        _this.router.navigate(['/system/handle-report/', _this.id, 'HUY']);
                    }
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    CancelReportComponent.prototype.renderDataEmail = function ($event) {
        this.arrEmail = [];
        this.emails = $event;
        if (this.emails.length > 0) {
            for (var i = 0; i < this.emails.length; i++) {
                if (typeof this.emails[i] === 'object')
                    this.arrEmail.push(this.emails[i].value);
                else if (typeof this.emails[i] === 'string')
                    this.arrEmail.push(this.emails[i]);
            }
            var emailToString = this.arrEmail.toString();
            this.emailString = emailToString.replace(/,/g, ';');
        }
        else {
            this.emailString = null;
        }
    };
    CancelReportComponent.prototype.close = function () {
        this.router.navigate(['/system/handle-report/', this.id, 'HUY']);
    };
    CancelReportComponent.prototype.routeReport = function () {
        this.router.navigate(['/system/handle-report/create-report/', this.id, 'HUY']);
    };
    CancelReportComponent.prototype.routeCancelInvoice = function () {
        this.router.navigate(['/system/handle-report/cancel-report/', this.id]);
    };
    CancelReportComponent.prototype.checkStatusEmail = function () {
        this.checkedInputEmail = !this.checkedInputEmail;
    };
    CancelReportComponent.prototype.getFileData = function (fileData) {
        this.fileData = fileData;
        if (this.fileData.length > 0) {
            for (var i = 0; i < this.fileData.length; i++) {
                this.fileData[i].type = 'DK';
            }
        }
    };
    CancelReportComponent.prototype.startProcess_TBSaiSot = function () {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.getXml_TBSaiSot();
        }
        else {
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var ListSerialNumber = "DSCKS";
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
            }
            else
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
        }
    };
    CancelReportComponent.prototype.getXml_TBSaiSot = function () {
        var _this = this;
        var invoices = [];
        var object = new Object;
        object["tax_authority_code"] = this.dataInvoice.tax_authority_code;
        object["template_code"] = this.dataInvoice.template_code;
        object["invoice_series"] = this.dataInvoice.invoice_series;
        object["invoice_date"] = this.dataInvoice.invoice_date;
        object["invoice_number"] = this.dataInvoice.invoice_number;
        object["reason"] = this.form.value.invoice.destroy_reason;
        object["notification_nature"] = "1";
        if (this.dataInvoice.xml_type != "3") {
            object["type_apply_invoice"] = 3;
        }
        else {
            object["type_apply_invoice"] = 1;
        }
        object["is_invoice_with_code"] = this.dataInvoice.is_invoice_with_code;
        object["invoice_id"] = this.form.value.invoice.id;
        invoices.push(object);
        var data = {
            notification_type: 1,
            invoices: invoices,
        };
        var xmlInvoice = "";
        var sub = this.handleInvoiceService.getXmlInvoiceWrong(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                xmlInvoice = rs.data.xml_file;
                _this.invoices = rs.data.invoices;
                var sign_date = moment__WEBPACK_IMPORTED_MODULE_4__(rs.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                if (xmlInvoice != "") {
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing))
                        _this.sendData_TBSaiSot(xmlInvoice);
                    else
                        _this.signXml_TBSaiSot(xmlInvoice, sign_date);
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    CancelReportComponent.prototype.sendData_TBSaiSot = function (xml_string) {
        var _this = this;
        var subXuatHoaDon = this.handleInvoiceService.sendXmlInvoiceWrong({
            xml_file: xml_string,
            invoices: this.invoices,
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(_this._translate.NOTIFY.cancel_invoice_done, 'success');
                _this.router.navigate(['/system/handle-report/', _this.id, 'HUY']);
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            subXuatHoaDon.unsubscribe();
        });
    };
    CancelReportComponent.prototype.signXml_TBSaiSot = function (xmlInvoice, signDate) {
        var _this = this;
        var nodeSign = "//TBao/DSCKS/NNT";
        var ListSerialNumber = "DSCKS";
        if (this.infoDangKy && this.infoDangKy.registration_signature) {
            var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
            if (signatures && signatures.length > 0)
                ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
        }
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', nodeSign, signDate, 'NotificationData', ListSerialNumber, true);
    };
    CancelReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cancel-report',
            template: __webpack_require__(/*! ./cancel-report.component.html */ "./src/app/modules/handle-report/cancel-report/cancel-report.component.html"),
            styles: [__webpack_require__(/*! ./cancel-report.component.scss */ "./src/app/modules/handle-report/cancel-report/cancel-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_2__["HanldeReportService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _core_services__WEBPACK_IMPORTED_MODULE_6__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_12__["HandleInvoiceService"]])
    ], CancelReportComponent);
    return CancelReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/create-report/create-report.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/handle-report/create-report/create-report.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"pl-0 col-md-6\">\r\n      <div class=\"button-redirect\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"javascript:void(0)\">{{_translate.CONTROLL.LABEL.report}}</a>\r\n          </li>\r\n          <li *ngIf=\"statusCheckInvoice !== '2' && statusCheckInvoice !== '7' && status === 'HUY'\" class=\"nav-item\">\r\n            <a class=\"nav-link text-danger\" (click)=\"routerCancelInvoice()\" href=\"javascript:void(0)\">\r\n              <i class=\"dx-icon fa fa-trash\"></i>\r\n              {{_translate.CONTROLL.LABEL.cancel_invoice}}\r\n            </a>\r\n          </li>\r\n          <li *ngIf=\"statusCheckInvoice !== '2' && statusCheckInvoice !== '7' && status === 'DIEU_CHINH'\"\r\n              class=\"nav-item\">\r\n            <a class=\"nav-link\" (click)=\"routerCancelInvoice()\" href=\"javascript:void(0)\">\r\n              <!--              <i class=\"dx-icon fa fa-trash\"></i>-->\r\n              {{_translate.CONTROLL.BUTTON.create_report_adjust}}\r\n            </a>\r\n          </li>\r\n          <li *ngIf=\"statusCheckInvoice !== '2' && statusCheckInvoice !== '7' && status === 'THAY_THE'\"\r\n              class=\"nav-item\">\r\n            <a class=\"nav-link \" (click)=\"routerCancelInvoice()\" href=\"javascript:void(0)\">\r\n              <!--              <i class=\"dx-icon fa fa-trash\"></i>-->\r\n              {{_translate.CONTROLL.BUTTON.create_report_replace}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"pl-0 col-md-6\">\r\n      <div *ngIf=\"statusCheckInvoice === '7'\" class=\"\" style=\"float: right; padding: 0 10px; border: 1px solid red\">\r\n            <span style=\"line-height: 34px; color: red\">\r\n              <i class=\"dx-icon fa fa-trash\"></i>\r\n              {{_translate.CONTROLL.LABEL.report_cancelled}}\r\n            </span>\r\n      </div>\r\n      <div *ngIf=\"statusCheckInvoice === '2'\" class=\"\" style=\"float: right; padding: 0 10px; border: 1px solid red\">\r\n            <span style=\"line-height: 34px; color: red\">\r\n              <i class=\"dx-icon fa fa-trash\"></i>\r\n              {{_translate.CONTROLL.BUTTON.report_are_replaced}}\r\n            </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <form class=\"container\" [formGroup]=\"form\">\r\n      <ng-container formGroupName=\"invoice_report\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 text-center\">\r\n            <div class=\"pt-2\">\r\n              <h3 class=\"title font-weight-bold pb-1\">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h3>\r\n              <h3 class=\"title font-weight-bold pb-1\">Độc lập – Tự do – Hạnh phúc</h3>\r\n              <h3 class=\"title font-weight-bold pb-2\">-----oOo-----</h3>\r\n              <h3 class=\"title font-weight-bold pb-1\">BIÊN BẢN {{textBB}} HÓA ĐƠN</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8 text-right\">\r\n            <h3 class=\"title font-weight-bold pb-1\">\r\n              {{_translate.CONTROLL.LABEL.report_number}}: <input formControlName=\"doc_relate_symbol\" required\r\n                                                                  type=\"text\" placeholder=\"Nhập số biên bản\"\r\n                                                                  style=\"border: 1px solid #ddd;padding: 3px\">\r\n            </h3>\r\n          </div>\r\n          <div class=\"col-md-4 pl-0\">\r\n            <div\r\n              *ngIf=\"submitted || form.get('invoice_report.doc_relate_symbol').invalid && form.get('invoice_report.doc_relate_symbol').dirty \">\r\n              <div *ngIf=\"form.get('invoice_report.doc_relate_symbol').errors?.required\" class=\"text-danger\"\r\n                   style=\"line-height: 30px\">\r\n                <i class=\"fa fa-exclamation-circle dx-icon\" style=\"font-size: 20px\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row pt-2 pb-2\">\r\n          <div class=\"col-md-12\">\r\n            <ul class=\"list-rules\">\r\n              <li class=\"\">\r\n                <span>\r\n                  {{lblNghiDinh51}}\r\n                </span>\r\n              </li>\r\n              <li style=\"width: 94% !important;\">\r\n                <span style=\"line-height: 20px;\">\r\n                  {{lblNghiDinh04}}\r\n                </span>\r\n              </li>\r\n              <li>\r\n                <span>\r\n                  {{lblThongTu39}}\r\n                </span>\r\n              </li>\r\n              <li>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"row\">\r\n                      <label class=\"col-md-4 label-text-item text-right\"\r\n                             style=\"line-height: 36px!important;max-width: 22%!important\">\r\n                        {{_translate.CONTROLL.LABEL.report_date}} :\r\n                      </label>\r\n                      <div class=\"col-md-4\">\r\n                        <dx-date-box style=\"margin-left: 2px!important\"\r\n                                     type=\"date\" [displayFormat]=\"'dd/MM/yyyy'\"\r\n                                     [useMaskBehavior]=\"true\"\r\n                                     placeholder=\"{{_translate.CONFIGS.enter_the_date_of_record}}\"\r\n                                     formControlName=\"doc_relate_date\"\r\n                        >\r\n                        </dx-date-box>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <ng-container formGroupName=\"json_data\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 pt-1 pb-2\">\r\n              <label\r\n                class=\" font-weight-bold label-text text-right\"> {{_translate.CONTROLL.LABEL.report_party_A_seller}}\r\n                : </label>\r\n              <div class=\"\">\r\n                <input type=\"text\" style=\"margin-left: 1px!important;\" class=\"input-style p-1\"\r\n                       placeholder=\"{{_translate.CONTROLL.LABEL.customer_name}}\"\r\n                       formControlName=\"seller_name\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 pb-2\">\r\n              <div class=\" row\">\r\n                <label class=\"col-md-3 label-text-item-l\">\r\n                  {{_translate.GRID.INVOICE.buyer_tax_code}} :\r\n                </label>\r\n                <div class=\"col-md-9 pl-0\">\r\n                  <input type=\"text\" class=\"input-style-item-l p-1\" formControlName=\"seller_tax_code\"\r\n                         placeholder=\"{{_translate.GRID.INVOICE.buyer_tax_code}}\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 pb-2\">\r\n              <div class=\" row\">\r\n                <label class=\"col-md-3 label-text-item\">\r\n                  {{_translate.CONTROLL.LABEL.phone_number}}:\r\n                </label>\r\n                <div class=\"col-md-9 pl-0\">\r\n                  <input type=\"text\" class=\"input-style-item p-1\" formControlName=\"seller_mobile\"\r\n                         placeholder=\"{{_translate.CONTROLL.LABEL.phone_number}}\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 pb-2\">\r\n              <div class=\" row\">\r\n                <label class=\"col-md-3 label-text-item-l\">\r\n                  {{_translate.GRID.CUSTOMER.surrogate}} :\r\n                </label>\r\n                <div class=\"col-md-9 pl-0\">\r\n                  <input type=\"text\" class=\"input-style-item-l p-1\" formControlName=\"seller_surrogate_name\"\r\n                         placeholder=\"{{_translate.GRID.CUSTOMER.surrogate_name}}\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 pb-2\">\r\n              <div class=\" row\">\r\n                <label class=\"col-md-3 label-text-item text-right\" style=\"padding-right: 10px\">\r\n                  {{_translate.GRID.USER.position}} :\r\n                </label>\r\n                <div class=\"col-md-9 pl-0\">\r\n                  <input type=\"text\" class=\"input-style-item p-1\" formControlName=\"seller_surrogate_position\"\r\n                         placeholder=\"{{_translate.GRID.USER.position_surrogate}}\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"row\">\r\n                <label class=\"col-md-2 text-right\" style=\"max-width: 12.6% !important\">\r\n                  {{_translate.CONTROLL.LABEL.address}} :\r\n                </label>\r\n                <div class=\"col-md-10 pl-0\">\r\n              <textarea rows=\"2\" class=\" p-1\" style=\"width: 98% !important; border: 1px solid #ddd\"\r\n                        formControlName=\"seller_address\"\r\n                        placeholder=\"{{_translate.CONTROLL.LABEL.address_sign_business}}\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 pt-1 pb-2\">\r\n              <label style=\"margin-right: 5px!important;\"\r\n                     class=\" font-weight-bold label-text\"> {{_translate.CONTROLL.LABEL.report_party_B_buyer}}: </label>\r\n              <div class=\"\">\r\n                <input *ngIf=\"accountType!='HS-SV'\" type=\"text\" class=\"input-style p-1\" formControlName=\"buyer_name\"\r\n                       placeholder=\"{{_translate.CONTROLL.LABEL.customer_name}}\">\r\n                <input *ngIf=\"accountType=='HS-SV'\" type=\"text\" class=\"input-style p-1\" formControlName=\"student_name\"\r\n                       placeholder=\"{{_translate.CONTROLL.LABEL.name_student}}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 pb-2\">\r\n              <div class=\" row\">\r\n                <label class=\"col-md-3 label-text-item-l\">\r\n                  {{_translate.GRID.INVOICE.buyer_tax_code}} :\r\n                </label>\r\n                <div class=\"col-md-9 pl-0\">\r\n                  <input type=\"text\" class=\"input-style-item-l p-1\" formControlName=\"buyer_tax_code\"\r\n                         placeholder=\"{{_translate.GRID.INVOICE.buyer_tax_code}}\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 pb-2\">\r\n              <div class=\" row\">\r\n                <label class=\"col-md-3 label-text-item\">\r\n                  {{_translate.CONTROLL.LABEL.phone_number}}:\r\n                </label>\r\n                <div class=\"col-md-9 pl-0\">\r\n                  <input type=\"text\" class=\"input-style-item p-1\" formControlName=\"buyer_mobile\"\r\n                         placeholder=\"{{_translate.CONTROLL.LABEL.phone_number}}\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 pb-2\">\r\n              <div class=\" row\">\r\n                <label class=\"col-md-3 label-text-item-l\">\r\n                  {{_translate.GRID.CUSTOMER.surrogate}} :\r\n                </label>\r\n                <div class=\"col-md-9 pl-0\">\r\n                  <input type=\"text\" class=\"input-style-item-l p-1\" formControlName=\"buyer_surrogate_name\"\r\n                         placeholder=\"{{_translate.GRID.CUSTOMER.surrogate_name}}\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 pb-2\">\r\n              <div class=\" row\">\r\n                <label class=\"col-md-3 label-text-item text-right\" style=\"padding-right: 10px\">\r\n                  {{_translate.GRID.USER.position}} :\r\n                </label>\r\n                <div class=\"col-md-9 pl-0\">\r\n                  <input type=\"text\" class=\"input-style-item p-1\" formControlName=\"buyer_surrogate_position\"\r\n                         placeholder=\"{{_translate.GRID.USER.position_surrogate}}\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12 pb-2\">\r\n              <div class=\" row\">\r\n                <label class=\"col-md-2 text-right\" style=\"max-width: 12.6% !important\">\r\n                  {{_translate.CONTROLL.LABEL.address}} :\r\n                </label>\r\n                <div class=\"col-md-10 pl-0\">\r\n              <textarea rows=\"2\" class=\" p-1\" style=\"width: 98% !important;border: 1px solid #ddd\"\r\n                        formControlName=\"buyer_address\"\r\n                        placeholder=\"{{_translate.CONTROLL.LABEL.address_sign_business}}\"></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <ul class=\"list-rules\">\r\n              <li class=\"\">\r\n                <ng-container formGroupName=\"json_data\">\r\n                  <span>\r\n                  Hai bên thống nhất lập biên bản  để {{this.textSpan}} hóa đơn đã lập có Mẫu số  <input\r\n                    class=\"font-weight-bold input-data text-center\" formControlName=\"template_code\" disabled> ký hiệu\r\n                  <input class=\"font-weight-bold input-data text-center\" style=\"width: 70px!important;\"\r\n                         formControlName=\"invoice_series\"\r\n                         disabled>\r\n                  số <input class=\"font-weight-bold input-data text-center\" formControlName=\"invoice_number\"\r\n                            style=\"width: 60px!important;\"\r\n                            disabled>\r\n                  ngày tạo <app-input-date-format [dateInput]=\"dateFormat\"></app-input-date-format> theo quy định.\r\n                </span>\r\n                </ng-container>\r\n              </li>\r\n              <li>\r\n                <div class=\"row\">\r\n                  <div *ngIf=\"this.status === 'HUY' || this.status === 'THAY_THE'\" class=\"col-md-12 pt-1 pb-2\"\r\n                       style=\"position: relative\">\r\n                    <label style=\"margin-right: 13px!important;\"\r\n                           class=\" font-weight-bold label-text\"> {{_translate.CONTROLL.LABEL.reason_cancel}}\r\n                      <span\r\n                        class=\"text-danger\">(*)</span>:\r\n                    </label>\r\n                    <div class=\"\">\r\n                    <textarea rows=\"2\" class=\"p-1\"\r\n                              style=\"margin-left: 6px;width: 82.5%!important;border: 1px solid #ddd\"\r\n                              formControlName=\"destroy_reason\"\r\n                              placeholder=\"{{_translate.CONTROLL.LABEL.reason_cancel_report}}\"></textarea>\r\n                      <div\r\n                        *ngIf=\"submitted || form.get('invoice_report.destroy_reason').invalid && form.get('invoice_report.destroy_reason').dirty \">\r\n                        <div *ngIf=\"form.get('invoice_report.destroy_reason').errors?.required\" class=\"text-danger\"\r\n                             style=\"line-height: 23px\">\r\n                          <label style=\"display: inline-block; position: absolute; top:15px; right: 135px\"> <i\r\n                            class=\"fa fa-exclamation-circle dx-icon\" style=\"font-size: 20px\"></i> </label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"this.status === 'DIEU_CHINH'\" class=\"col-md-12 pb-2\" style=\"position: relative\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-3\" style=\"max-width: 18%; padding-right: 0\">\r\n                        <label style=\"width: 140.98px; float: right; line-height: 40px\"\r\n                               class=\"font-weight-bold\"> {{_translate.CONTROLL.LABEL.reason_adjust}}:\r\n                          <span class=\"text-danger\">*</span>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"col-md-9\" style=\"padding-left: 0; padding-right: 0\">\r\n                        <textarea rows=\"2\" class=\"p-1\" style=\"width: 100%!important; border: 1px solid #ddd\"\r\n                                  formControlName=\"adjustment_reason\"\r\n                                  placeholder=\"{{_translate.CONTROLL.LABEL.reason_adjust_report}}\"></textarea>\r\n                        <div\r\n                          *ngIf=\"submitted || form.get('invoice_report.adjustment_reason').invalid && form.get('invoice_report.adjustment_reason').dirty \">\r\n                          <div *ngIf=\"form.get('invoice_report.adjustment_reason').errors?.required\" class=\"text-danger\"\r\n                               style=\"line-height: 23px\">\r\n                            <label style=\"display: inline-block; position: absolute; top:11px; right: 62px\"> <i\r\n                              class=\"fa fa-exclamation-circle dx-icon\" style=\"font-size: 20px\"></i> </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"this.status === 'DIEU_CHINH'\" class=\"col-md-12 pb-2\" style=\"position: relative\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-3\" style=\"max-width: 18%; padding-right: 0\">\r\n                        <label style=\"line-height: 35px\"> {{_translate.CONTROLL.LABEL.content_adjust_report}}:\r\n                          <span\r\n                            class=\"text-danger\">*</span>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"col-md-9\" style=\"padding-left: 0; padding-right: 0\">\r\n                        <textarea rows=\"2\" class=\"p-1\" style=\"width: 100%!important; border: 1px solid #ddd\"\r\n                                  formControlName=\"adjustment_content_before\"\r\n                                  placeholder=\"{{_translate.CONTROLL.LABEL.content_adjust_report}}\"></textarea>\r\n                        <div\r\n                          *ngIf=\"submitted || form.get('invoice_report.adjustment_content_before').invalid && form.get('invoice_report.adjustment_content_before').dirty \">\r\n                          <div *ngIf=\"form.get('invoice_report.adjustment_content_before').errors?.required\"\r\n                               class=\"text-danger\"\r\n                               style=\"line-height: 23px\">\r\n                            <label style=\"display: inline-block; position: absolute; top:11px; right: 62px\"> <i\r\n                              class=\"fa fa-exclamation-circle dx-icon\" style=\"font-size: 20px\"></i> </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"this.status === 'DIEU_CHINH'\" class=\"col-md-12 pb-2\" style=\"position: relative\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-3\" style=\"max-width: 18%; padding-right: 0\">\r\n                        <label\r\n                          style=\"width: 178.98px; float: right; line-height: 39px\"> {{_translate.CONTROLL.LABEL.content_after_adjust_report}}\r\n                          :\r\n                          <span class=\"text-danger\">*</span>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"col-md-9\" style=\"padding-left: 0; padding-right: 0\">\r\n                        <textarea rows=\"2\" class=\"p-1\" style=\"width: 100%!important; border: 1px solid #ddd\"\r\n                                  formControlName=\"adjustment_content_after\"\r\n                                  placeholder=\"{{_translate.CONTROLL.LABEL.content_after_adjust_report}}\"></textarea>\r\n                        <div\r\n                          *ngIf=\"submitted || form.get('invoice_report.adjustment_content_after').invalid && form.get('invoice_report.adjustment_content_after').dirty \">\r\n                          <div *ngIf=\"form.get('invoice_report.adjustment_content_after').errors?.required\"\r\n                               class=\"text-danger\"\r\n                               style=\"line-height: 23px\">\r\n                            <label style=\"display: inline-block; position: absolute; top:11px; right: 62px\"> <i\r\n                              class=\"fa fa-exclamation-circle dx-icon\" style=\"font-size: 20px\"></i> </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <ng-container formGroupName=\"json_data\">\r\n                <span>\r\n                  Chúng tôi cam kết và hoàn toàn chịu trách nhiệm về việc {{this.textCancel}} hóa đơn đã lập,\r\n                  có mẫu số <input class=\" font-weight-bold input-data text-center\" formControlName=\"template_code\"\r\n                                   style=\"width: 100px!important;\"\r\n                                   disabled> số ký hiệu: <input\r\n                  class=\" font-weight-bold input-data text-center\" style=\"width: 70px!important;\"\r\n                  formControlName=\"invoice_series\" disabled> số <input\r\n                  class=\" font-weight-bold input-data text-center\" formControlName=\"invoice_number\"\r\n                  style=\"width: 60px!important;\"\r\n                  disabled> ngày tạo <app-input-date-format [dateInput]=\"dateFormat\"></app-input-date-format>.\r\n                </span>\r\n                </ng-container>\r\n              </li>\r\n              <li>\r\n                <span>\r\n                  Bản cam kết được lập thành 02 (hai) bản, bên A giữ 01 (một) bản, bên B giữ (01) một bản có giá trị như nhau.\r\n                </span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <div class=\"row mt-2 mb-5\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"text-center\">\r\n            <h2 class=\"font-weight-bold text-uppercase\">{{_translate.GRID.CUSTOMER.surrogate_party_a}}</h2>\r\n            <span class=\"font-italic\">{{_translate.CONTROLL.LABEL.signature_and_electronic_signature}}</span>\r\n            <div *ngIf=\"this.typeSeller\" class=\"pt-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-6\"\r\n                     style=\"\r\n                      padding: 10px 0;\r\n                      border: 1px solid #7cc576;\r\n                      background-color: #e3f2e4;\r\n                      color: red;\r\n                      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTEwLTI4VDE1OjMwOjEzKzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMC0yOFQxNzowNjoxMSswNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0xMC0yOFQxNzowNjoxMSswNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmMzU5NGViMi03M2VjLTIzNDItOTY3Zi1jYTE2OTczNjBjN2IiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0MDRiNGM5Yy1mNGEyLTQ1NGUtYjYwYS05OWQ4NzA0NDZjZTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YzhmZjU4Ny1jNGRlLTczNDYtODdmZC1lN2NiYWZiZjliZTQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVjOGZmNTg3LWM0ZGUtNzM0Ni04N2ZkLWU3Y2JhZmJmOWJlNCIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0yOFQxNTozMDoxMyswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMzU5NGViMi03M2VjLTIzNDItOTY3Zi1jYTE2OTczNjBjN2IiIHN0RXZ0OndoZW49IjIwMTktMTAtMjhUMTc6MDY6MTErMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Qu0cIAAAEbklEQVR4nO2cy28VVRjAf0BNEF9Vg02KukCMSEy9oVKKFqrxkePCVIgbk9kYUinxDzAkJLryH3ChVkJcTIxLwsIcRRBtfYAElIWmQDTEN0Rehp2kLr7bMMydc+98Z859dn5JFzP3fOec/vKdmfO4uUvm5+cpqWVpuzvQqZRiHJRiHJRiHJRiHJRiHJRiHJRiHPQVrcDYKEQ/2oY1ceb9MmMcLDYxdwC7gI+Bz4A3jI0GswouJjHvAJeAt4DngaeBN4HfjY2m04UXi5jHgKk6n08aG61P3lgMYirAdznKvZ686HUxFeBEzrKbkxe9LKZCfikAK5MXvSpmHXBMGfN18qIXxaxFpCxTxs0kLwrPfDuMtcBJ4CZl3BFr4t3JG72UMQ8CR9BLOQE8m77ZKxmzBvgBuFkZNwc8aU38b/qDXsiYNcjw0Uo5BWyyJr6S9WG3i1mNDB+fTHkcuOgq0M1D6X7gOLIw1DAHbAH+qVeoWzPmAeAoeilnkEw516hgN4pZhUzGBpRxp5BMuZCncLcNpVXI63Vlo4Ip/gLGgPN5A7opYwaBb9BL+QXZdsgtBbonYwaAb4H7lHELmfKHtsFuyJhBZO2jlfIrssJWS4HOFzMIfA7cq4z7E3gC+Nu34U4eSncBXyKvZg3ngBHgtyKNO8UYG61GdrX6gFlr4rkiDSkZAL5AL+UC8qAtJAUcYoyNPgReTt3bB7xkTXytaKMN6EeGz0PKuMvAeuTZUpiaZ4yx0QFSUqq8CJw0Nro7RMMO7kRmtA8r464iUs6G6sgNYoyNXgOeqVN+HXDI2Kg/VAcS3AMcQvZVNFwGhoCfQ3YmnTFbc8QMATPGRrcH7MdtwEHk9arhCrCBwFKgVszmzFK1PILIWR6gD/3AbLVODf8Bo8DpAH2oIS3mjCJ2CJmiF5FzC3KGPKSMuwo8CvxUoO26pMXMKuMr1RjtPiuIlFlg2CN2C/CjR1xu0mJ2I+sLDcPAV8AKRcytyOStomzrWrW948o4NTeIsSY+D7zgUc8G5I2SZ1itAD5FXq9aRmiBFMiYx1gTHwM2etS1kcbDqg+ZvG3yqL8lmbJA5iLSmvgo8J5HfcPIEMk6BVyOZNWIZ70tkwJ1VtfWxFNAzRdqcjBK9kP8APmnA0nepcVSoMG2gzXxDqRjWka5fha8FMmiMY96xoGdHnGFabgfY028E3jKo+4x4DDwCX6ZMo4IbQu5NqqsiQ9Tfw3lYrxAXNukgGIHz5r4IH7/pJa2SwHl1mZVzp4m9QXkTdh2KeCx52tNPAm834S+PEf9b1a2FK/NcGviVwkrZxp5nXcM3qcEVTkTAfowAewIUE9QCh2fWBPvx2+GvMAEsL9IH5pFiHOlKfweyFvpUCkQ7sBtEtirKL8H2Beo7aYQ8iRyO/BBjnLTiMiOJvQR7SvUz5y9dOCDNotmHNFuB94GtnF9jTQDfESTtyND0qyz6++rf11Lp3/boW0sKX8NJJsyYxyUYhyUYhyUYhyUYhyUYhyUYhz8D5KEz6pyCDy3AAAAAElFTkSuQmCC');\r\n                      background-repeat: no-repeat;\r\n                      text-align: left;\r\n                \"\r\n                >\r\n                  <div style=\"padding: 0 5px\">\r\n                    <p class=\"font-weight-bold\">Signature Valid</p>\r\n                  </div>\r\n                  <div style=\"padding: 0 5px\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 pr-0 font-weight-bold\" style=\"max-width: 25%!important;font-size: 12px;\">\r\n                        <p class=\"font-weight-bold\" style=\"font-family: Times New Roman; font-size: 14px\">Người ký: </p>\r\n                      </div>\r\n                      <div class=\"col-md-8 pl-0\">\r\n                        <p class=\"font-weight-bold\" style=\"font-size: 13px\">{{this.nameSeller}}</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div style=\"padding: 0 5px\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 pr-0 font-weight-bold\" style=\"max-width: 24%!important;font-size: 12px;\">\r\n                        <p class=\"font-weight-bold\" style=\"font-family: Times New Roman;font-size: 14px\">Ký ngày: </p>\r\n                      </div>\r\n                      <div class=\"col-md-8 pl-0\">\r\n                        <p class=\"font-weight-bold\">{{this.dateSeller}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"text-center\">\r\n            <h2 class=\"font-weight-bold text-uppercase\">{{_translate.GRID.CUSTOMER.surrogate_party_b}}</h2>\r\n            <span class=\"font-italic\">{{_translate.CONTROLL.LABEL.signature_and_electronic_signature}}</span>\r\n            <div *ngIf=\"this.typeBuyer\" class=\"pt-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-6\"\r\n                     style=\"\r\n                      padding: 10px 0;\r\n                      border: 1px solid #7cc576;\r\n                      background-color: #e3f2e4;\r\n                      color: red;\r\n                      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTEwLTI4VDE1OjMwOjEzKzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMC0yOFQxNzowNjoxMSswNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0xMC0yOFQxNzowNjoxMSswNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmMzU5NGViMi03M2VjLTIzNDItOTY3Zi1jYTE2OTczNjBjN2IiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0MDRiNGM5Yy1mNGEyLTQ1NGUtYjYwYS05OWQ4NzA0NDZjZTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YzhmZjU4Ny1jNGRlLTczNDYtODdmZC1lN2NiYWZiZjliZTQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVjOGZmNTg3LWM0ZGUtNzM0Ni04N2ZkLWU3Y2JhZmJmOWJlNCIgc3RFdnQ6d2hlbj0iMjAxOS0xMC0yOFQxNTozMDoxMyswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMzU5NGViMi03M2VjLTIzNDItOTY3Zi1jYTE2OTczNjBjN2IiIHN0RXZ0OndoZW49IjIwMTktMTAtMjhUMTc6MDY6MTErMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Qu0cIAAAEbklEQVR4nO2cy28VVRjAf0BNEF9Vg02KukCMSEy9oVKKFqrxkePCVIgbk9kYUinxDzAkJLryH3ChVkJcTIxLwsIcRRBtfYAElIWmQDTEN0Rehp2kLr7bMMydc+98Z859dn5JFzP3fOec/vKdmfO4uUvm5+cpqWVpuzvQqZRiHJRiHJRiHJRiHJRiHJRiHJRiHPQVrcDYKEQ/2oY1ceb9MmMcLDYxdwC7gI+Bz4A3jI0GswouJjHvAJeAt4DngaeBN4HfjY2m04UXi5jHgKk6n08aG61P3lgMYirAdznKvZ686HUxFeBEzrKbkxe9LKZCfikAK5MXvSpmHXBMGfN18qIXxaxFpCxTxs0kLwrPfDuMtcBJ4CZl3BFr4t3JG72UMQ8CR9BLOQE8m77ZKxmzBvgBuFkZNwc8aU38b/qDXsiYNcjw0Uo5BWyyJr6S9WG3i1mNDB+fTHkcuOgq0M1D6X7gOLIw1DAHbAH+qVeoWzPmAeAoeilnkEw516hgN4pZhUzGBpRxp5BMuZCncLcNpVXI63Vlo4Ip/gLGgPN5A7opYwaBb9BL+QXZdsgtBbonYwaAb4H7lHELmfKHtsFuyJhBZO2jlfIrssJWS4HOFzMIfA7cq4z7E3gC+Nu34U4eSncBXyKvZg3ngBHgtyKNO8UYG61GdrX6gFlr4rkiDSkZAL5AL+UC8qAtJAUcYoyNPgReTt3bB7xkTXytaKMN6EeGz0PKuMvAeuTZUpiaZ4yx0QFSUqq8CJw0Nro7RMMO7kRmtA8r464iUs6G6sgNYoyNXgOeqVN+HXDI2Kg/VAcS3AMcQvZVNFwGhoCfQ3YmnTFbc8QMATPGRrcH7MdtwEHk9arhCrCBwFKgVszmzFK1PILIWR6gD/3AbLVODf8Bo8DpAH2oIS3mjCJ2CJmiF5FzC3KGPKSMuwo8CvxUoO26pMXMKuMr1RjtPiuIlFlg2CN2C/CjR1xu0mJ2I+sLDcPAV8AKRcytyOStomzrWrW948o4NTeIsSY+D7zgUc8G5I2SZ1itAD5FXq9aRmiBFMiYx1gTHwM2etS1kcbDqg+ZvG3yqL8lmbJA5iLSmvgo8J5HfcPIEMk6BVyOZNWIZ70tkwJ1VtfWxFNAzRdqcjBK9kP8APmnA0nepcVSoMG2gzXxDqRjWka5fha8FMmiMY96xoGdHnGFabgfY028E3jKo+4x4DDwCX6ZMo4IbQu5NqqsiQ9Tfw3lYrxAXNukgGIHz5r4IH7/pJa2SwHl1mZVzp4m9QXkTdh2KeCx52tNPAm834S+PEf9b1a2FK/NcGviVwkrZxp5nXcM3qcEVTkTAfowAewIUE9QCh2fWBPvx2+GvMAEsL9IH5pFiHOlKfweyFvpUCkQ7sBtEtirKL8H2Beo7aYQ8iRyO/BBjnLTiMiOJvQR7SvUz5y9dOCDNotmHNFuB94GtnF9jTQDfESTtyND0qyz6++rf11Lp3/boW0sKX8NJJsyYxyUYhyUYhyUYhyUYhyUYhyUYhz8D5KEz6pyCDy3AAAAAElFTkSuQmCC');\r\n                      background-repeat: no-repeat;\r\n                      text-align: left;\r\n                \"\r\n                >\r\n                  <div style=\"padding: 0 5px\">\r\n                    <p class=\"font-weight-bold\">Signature Valid</p>\r\n                  </div>\r\n                  <div style=\"padding: 0 5px\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 pr-0 font-weight-bold\" style=\"max-width: 25%!important;font-size: 12px;\">\r\n                        <p class=\"font-weight-bold\" style=\"font-family: Times New Roman; font-size: 14px\">Người ký: </p>\r\n                      </div>\r\n                      <div class=\"col-md-8 pl-0\">\r\n                        <p class=\"font-weight-bold\" style=\"font-size: 13px\">{{this.nameBuyer}}</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div style=\"padding: 0 5px\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4 pr-0 font-weight-bold\" style=\"max-width: 24%!important;font-size: 12px;\">\r\n                        <p class=\"font-weight-bold\" style=\"font-family: Times New Roman;font-size: 14px\">Ký ngày: </p>\r\n                      </div>\r\n                      <div class=\"col-md-8 pl-0\">\r\n                        <p class=\"font-weight-bold\">{{this.dateBuyer}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <button class=\"button-content-style\" (click)=\"print()\">\r\n              <span>{{_translate.CONTROLL.BUTTON.print}}</span>\r\n            </button>\r\n            <button type=\"button\" class=\"button-content-style\" (click)=\"suggetReport()\">\r\n              <span>{{_translate.CONTROLL.BUTTON.view_feedback}}</span>\r\n            </button>\r\n            <button\r\n              *ngIf=\"this.showCancel\"\r\n              type=\"button\" class=\"button-content-style\"\r\n              (click)=\"cancelReport()\">\r\n              <span>{{_translate.CONTROLL.BUTTON.cancel_reports}}</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row \" style=\"float: right\">\r\n            <button type=\"button\" *ngIf=\"this.showReload\"\r\n                    class=\"button-content-style\"\r\n                    (click)=\"reload()\">\r\n              <span>{{_translate.CONTROLL.BUTTON.send_reload}}</span>\r\n            </button>\r\n\r\n            <button type=\"button\" *ngIf=\"this.showGhiTam\"\r\n                    class=\"button-content-style\"\r\n                    (click)=\"ghiTam()\">\r\n              <span>{{_translate.CONTROLL.BUTTON.save_temporary}}</span>\r\n            </button>\r\n            <button type=\"button\" *ngIf=\"this.showSigAndSend\"\r\n                    class=\"button-content-style\"\r\n                    (click)=\"signAndSend()\">\r\n              <span>{{_translate.CONTROLL.BUTTON.sign_and_send}}</span>\r\n            </button>\r\n            <button type=\"button\" class=\"button-content-style\" (click)=\"colse()\">\r\n              <span>{{_translate.CONTROLL.BUTTON.close}}</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-report/create-report/create-report.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/handle-report/create-report/create-report.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-redirect .nav-tabs{border-bottom:1px solid #dee2e6 !important}.list-rules li{list-style:none !important;padding:4px 0}.label-text{display:inline-block;margin-right:10px;line-height:25px;float:left}.input-style{width:82.7% !important;margin-left:5px !important;border:1px solid #ddd;color:#333}.input-style-item{width:91% !important;border:1px solid #ddd}.input-style-item-l{width:91% !important;margin-left:1px !important;border:1px solid #ddd;color:#333}.label-text-item{line-height:26px;padding-right:0;max-width:20% !important}.label-text-item-l{max-width:25% !important;line-height:26px;text-align:right}.button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}.input-data{border:none;width:100px;background-color:transparent}\n"

/***/ }),

/***/ "./src/app/modules/handle-report/create-report/create-report.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/handle-report/create-report/create-report.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReportComponent", function() { return CreateReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
/* harmony import */ var _modules_info_unit_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/info-unit/shared */ "./src/app/modules/info-unit/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _modules_handle_report_shared_components_cancel_report_modal_cancel_report_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/handle-report/shared/components/cancel-report-modal/cancel-report-modal.component */ "./src/app/modules/handle-report/shared/components/cancel-report-modal/cancel-report-modal.component.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _modules_handle_report_shared_components_send_report_send_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/handle-report/shared/components/send-report/send-report.component */ "./src/app/modules/handle-report/shared/components/send-report/send-report.component.ts");
/* harmony import */ var _modules_handle_report_shared_components_suggest_report_suggest_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/handle-report/shared/components/suggest-report/suggest-report.component */ "./src/app/modules/handle-report/shared/components/suggest-report/suggest-report.component.ts");
/* harmony import */ var _modules_handle_report_shared_components_reload_report_reload_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/handle-report/shared/components/reload-report/reload-report.component */ "./src/app/modules/handle-report/shared/components/reload-report/reload-report.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_library_invoice_v_preview_inv_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/library/invoice/v-preview-inv.service */ "./src/app/core/library/invoice/v-preview-inv.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var CreateReportComponent = /** @class */ (function () {
    function CreateReportComponent(authService, route, vatService, handleReport, inforUnitService, router, fb, modalService, socketService, bsModalRef, bsModalDocument, bsModalDocumentCancel, translate) {
        this.authService = authService;
        this.route = route;
        this.vatService = vatService;
        this.handleReport = handleReport;
        this.inforUnitService = inforUnitService;
        this.router = router;
        this.fb = fb;
        this.modalService = modalService;
        this.socketService = socketService;
        this.bsModalRef = bsModalRef;
        this.bsModalDocument = bsModalDocument;
        this.bsModalDocumentCancel = bsModalDocumentCancel;
        this.translate = translate;
        this.submitted = false;
        this.date = new Date();
        this.showSigAndSend = true;
        this.showGhiTam = true;
        this.showCancel = true;
        this.coKiSoTapChung = false;
        this.isRemoteSignning = false;
        this.showReload = true;
        this.isTT78 = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.translate.use(this._language);
        this.accountType = this.authService.getAccountType();
        this.currentUser = this.authService.getCurrentUser();
    }
    CreateReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoDangKy = this.authService.getInfoRegister();
        if (this.infoDangKy) {
            if (this.infoDangKy.status == "CHAP_NHAN")
                this.isTT78 = true;
        }
        this.form = this.fb.group(this.handleReport.generatedFormControlAll());
        this.id = this.route.snapshot.paramMap.get('id');
        this.status = this.route.snapshot.paramMap.get('status');
        if (this.status === 'DIEU_CHINH') {
            this.textBB = 'ĐIỀU CHỈNH';
            this.textType = this.status;
            this.textCancel = 'điều chỉnh';
            this.textSpan = 'điều chỉnh';
        }
        else {
            this.textBB = 'HỦY BỎ';
            this.textType = 'HUY';
            this.textCancel = 'hủy bỏ';
            this.textSpan = 'thu hồi và xóa bỏ';
        }
        this.lblNghiDinh51 = "- Căn cứ Nghị định 51/2010/NĐ-CP ngày 14/05/2010 của Chính phủ quy định về hóa đơn bán hàng hóa, cung ứng dịch vụ.";
        this.lblNghiDinh04 = "- Căn cứ Nghị định 04/2014/NĐ-CP ngày 17/01/2014 sửa đổi, bổ sung một số điều của nghị định 51/2010/NĐ-CP ngày 14/05/2010 của Chính phủ quy định về hoá đơn bán hàng hoá, cung ứng dịch vụ.";
        this.lblThongTu39 = "- Căn cứ Thông tư số 39/2014/TT-BTC ngày 31/3/2014 của Bộ Tài chính hướng dẫn thi hành Nghị định số 51/2010/NĐ-CP và Nghị định 04/2014/NĐ-CP.";
        this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return value.CreateReportResolverService; }))
            .subscribe(function (value) {
            if (value && value.length > 0) {
                var invoice = value[0];
                if (invoice && invoice.xml_type == 3) {
                    _this.lblNghiDinh51 = "- Căn cứ Nghị định 123/2020/NĐ-CP ngày 19/10/2020 của Chính Phủ quy định về hóa đơn, chứng từ.";
                    _this.lblNghiDinh04 = "- Căn cứ Thông tư 78/2021/TT-BTC ngày 17/9/2021 của Bộ Tài Chính hướng dẫn thực hiện một số điều của luật quản lý Thuế ngày 13 tháng 6 năm 2019, nghị định số 123/2020/NĐ-CP ngày 19 tháng 10 năm 2020 của Chính phủ quy định về hóa đơn, chứng từ.";
                    _this.lblThongTu39 = "";
                }
            }
            _this.handleData(value);
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(error, 'error');
        });
        this.connectWebsocket();
    };
    CreateReportComponent.prototype.handleData = function (value) {
        var _this = this;
        this.dataInvoice = value[0];
        this.statusCheckInvoice = value[0].adjustment_type;
        this.countReport = value[2].length + 1;
        if (this.textType === 'DIEU_CHINH') {
            if (this.countReport < 10) {
                this.number_report = '0' + this.countReport + '/' + new Date().getFullYear() + '/BB-ĐCHĐ';
            }
            else {
                this.number_report = this.countReport + '/' + new Date().getFullYear() + '/BB-ĐCHĐ';
            }
        }
        else {
            if (this.countReport < 10) {
                this.number_report = '0' + this.countReport + '/' + new Date().getFullYear() + 'BB-HBHĐ';
            }
            else {
                this.number_report = this.countReport + '/' + new Date().getFullYear() + '/BB-HBHĐ';
            }
        }
        this.dataConfigs = value[3];
        if (typeof value[1] !== 'undefined' && value[1].length > 0) {
            this.data = {};
            this.data = value[1][0];
            if (this.status === 'DIEU_CHINH') {
                this.form.patchValue({
                    invoice_report: {
                        adjustment_reason: this.data.adjustment_reason,
                        adjustment_content_before: this.data.adjustment_content_before,
                        adjustment_content_after: this.data.adjustment_content_after,
                    }
                });
            }
            else {
                this.form.patchValue({
                    invoice_report: {
                        destroy_reason: this.data.destroy_reason,
                    }
                });
            }
            this.form.patchValue({
                invoice_report: {
                    id: this.data.id,
                    account_id: this.data.account_id,
                    invoice_id: this.data.invoice_id,
                    file_server_id: this.data.file_server_id,
                    doc_relate_symbol: this.data.doc_relate_symbol,
                    doc_relate_date: this.data.doc_relate_date,
                    status: this.data.status,
                    signature_status: this.data.signature_status,
                    type: this.textType,
                    json_data: {
                        buyer_name: this.data.json_data.buyer_name,
                        buyer_address: this.data.json_data.buyer_address,
                        buyer_tax_code: this.data.json_data.buyer_tax_code,
                        buyer_mobile: this.data.json_data.buyer_mobile,
                        buyer_surrogate_name: this.data.json_data.buyer_surrogate_name,
                        buyer_surrogate_position: this.data.json_data.buyer_surrogate_position,
                        template_code: this.data.json_data.template_code,
                        invoice_series: this.data.json_data.invoice_series,
                        invoice_date: this.data.json_data.invoice_date,
                        invoice_number: this.data.json_data.invoice_number,
                        seller_name: this.data.json_data.seller_name,
                        seller_address: this.data.json_data.seller_address,
                        seller_tax_code: this.data.json_data.seller_tax_code,
                        seller_mobile: this.data.json_data.seller_mobile,
                        seller_surrogate_name: this.data.json_data.seller_surrogate_name,
                        seller_surrogate_position: this.data.json_data.seller_surrogate_position,
                        seller_sign_name: this.data.json_data.seller_sign_name,
                        buyer_sign_name: this.data.json_data.buyer_sign_name,
                        student_name: this.data.json_data.student_name,
                    },
                    seller_sign_position: this.data.seller_sign_position,
                    buyer_sign_position: this.data.buyer_sign_position,
                    buyer_sign_date: this.data.buyer_sign_date,
                    email: this.data.email,
                    file_content: this.data.file_content,
                    is_paper_report: 0,
                }
            });
            this.checkShow(this.form.value.invoice_report);
        }
        else {
            this.data = {};
            this.data = value[0];
            this.form.patchValue({
                invoice_report: {
                    invoice_id: this.data.id,
                    doc_relate_symbol: this.number_report,
                    doc_relate_date: this.date,
                    buyer_sign_date: this.data.buyer_sign_date,
                    type: this.textType,
                    json_data: {
                        buyer_name: this.data.hasOwnProperty('customer_name') && this.data.customer_name !== null ? this.data.customer_name : this.data.buyer_name,
                        buyer_address: this.data.hasOwnProperty('buyer_address') ? this.data.buyer_address : null,
                        buyer_tax_code: this.data.hasOwnProperty('buyer_tax_code') ? this.data.buyer_tax_code : null,
                        buyer_mobile: this.data.hasOwnProperty('buyer_mobile') ? this.data.buyer_mobile : null,
                        buyer_surrogate_name: this.data.hasOwnProperty('buyer_surrogate_name') ? this.data.buyer_surrogate_name : null,
                        buyer_surrogate_position: this.data.hasOwnProperty('buyer_surrogate_position') ? this.data.buyer_surrogate_position : null,
                        template_code: this.data.hasOwnProperty('template_code') ? this.data.template_code : null,
                        invoice_series: this.data.hasOwnProperty('invoice_series') ? this.data.invoice_series : null,
                        invoice_date: this.data.hasOwnProperty('invoice_date') ? this.data.invoice_date : null,
                        invoice_number: this.data.hasOwnProperty('invoice_number') ? this.data.invoice_number : null,
                        student_name: this.data.hasOwnProperty('student_name') && this.data.student_name !== null ? this.data.student_name : this.data.student_name,
                    },
                    is_paper_report: 0,
                    destroy_reason: this.data.destroy_reason,
                    email: this.data.buyer_email
                }
            });
            this.getDataLocalStoge();
            this.checkShow(this.form.value.invoice_report);
        }
        this.dateFormat = this.form.value.invoice_report.json_data.invoice_date;
        this.dataConfigs.forEach(function (item) {
            if (item.name === 'integrate_parameter') {
                var config = JSON.parse(item.value);
                _this.coKiSoTapChung = config.concentrate_signature.is_concentrate_signature;
                if (config.remote_signing && config.remote_signing.is_remote_signing) {
                    _this.isRemoteSignning = true;
                }
            }
        });
        this.dateSeller = moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('DD/MM/YYYY');
        this.dateBuyer = moment__WEBPACK_IMPORTED_MODULE_8__(this.data.buyer_sign_date).format('DD/MM/YYYY');
        this.nameBuyer = this.form.value.invoice_report.json_data.buyer_sign_name;
        this.nameSeller = this.form.value.invoice_report.json_data.seller_sign_name;
    };
    CreateReportComponent.prototype.checkShow = function (data) {
        if (data.signature_status === 'NGUOI_BAN_KY' || data.signature_status === 'NGUOI_MUA_KY') {
            this.showCancel = true;
            this.showSigAndSend = false;
            this.showGhiTam = false;
        }
        else {
            this.showCancel = false;
            this.showSigAndSend = true;
            this.showGhiTam = true;
        }
        if (data.signature_status === 'NGUOI_BAN_KY') {
            this.showReload = true;
        }
        else {
            this.showReload = false;
        }
        if (data.signature_status === 'NGUOI_BAN_KY' || data.signature_status === 'NGUOI_MUA_KY') {
            this.typeSeller = true;
        }
        if (data.signature_status === 'NGUOI_MUA_KY') {
            this.typeBuyer = true;
        }
        if (data.signature_status === 'CHUA_KY') {
            this.showCancel = true;
        }
    };
    CreateReportComponent.prototype.getDataLocalStoge = function () {
        var data = JSON.parse(window.localStorage.getItem('currentUser'));
        this.form.patchValue({
            invoice_report: {
                json_data: {
                    seller_name: data.account.name,
                    seller_address: data.account.business_address,
                    seller_tax_code: data.account.tax_code,
                    seller_mobile: data.account.contact_mobile,
                    seller_surrogate_name: data.account.surrogate_name,
                    seller_surrogate_position: data.account.surrogate_position,
                }
            }
        });
    };
    CreateReportComponent.prototype.cancelReport = function () {
        var _this = this;
        if (this.form.value.invoice_report.id !== null) {
            var initialState = {};
            if (this.form.value.invoice_report.signature_status === 'CHUA_KY') {
                initialState = {
                    id: this.form.value.invoice_report.id,
                };
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].showloading();
                this.handleReport.apiCancelReport(initialState)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].hideloading(); }))
                    .subscribe(function (value) {
                    if (value.status === 'success') {
                        _this.showCancel = false;
                        _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(_this._translate.NOTIFY.cancel_report_done, 'success');
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(value.message, 'error');
                    }
                }, function (error) {
                    _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(error, 'error');
                });
            }
            else {
                initialState = {
                    id: this.form.value.invoice_report.id,
                    dataEmail: this.form.value.invoice_report.email
                };
                this.bsModalDocumentCancel = this.modalService.show(_modules_handle_report_shared_components_send_report_send_report_component__WEBPACK_IMPORTED_MODULE_13__["SendReportComponent"], {
                    class: 'modal-lg', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalDocumentCancel.content.successSaveItem === 'SuccessSendReport') {
                        _this.router.navigate(['/system/handle-report/', _this.id, _this.status]);
                        delete _this.bsModalDocumentCancel.content.successSaveItem;
                    }
                });
            }
        }
    };
    // thieu modal notify success
    CreateReportComponent.prototype.ghiTam = function () {
        var _this = this;
        if (this.status === 'DIEU_CHINH') {
            if (this.form.get('invoice_report.adjustment_reason').invalid || this.form.get('invoice_report.adjustment_content_before').invalid || this.form.get('invoice_report.adjustment_content_after').invalid) {
                this.submitted = true;
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(this._translate.NOTIFY.enter_full_information, 'error');
                return;
            }
        }
        else {
            if (this.form.get('invoice_report.destroy_reason').invalid) {
                this.submitted = true;
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(this._translate.NOTIFY.enter_full_information, 'error');
                return;
            }
        }
        this.submitted = false;
        if (this.form.value.invoice_report.id !== null) {
            this.form.patchValue({
                invoice_report: {
                    doc_relate_symbol: this.form.value.invoice_report.doc_relate_symbol.toString(),
                    doc_relate_date: moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD'),
                }
            });
            if (this.dataInvoice.adjustment_type === '7') {
                this.compareDate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.dataInvoice.invoice_date).format('YYYY-MM-DD')) <= new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD')) && new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD')) <= new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.dataInvoice.destroy_date).format('YYYY-MM-DD'));
                if (this.compareDate === false) {
                    _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(this._translate.NOTIFY.date_report_and_date_cancel_report, 'error');
                    return;
                }
            }
            else {
                this.compareDate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.dataInvoice.invoice_date).format('YYYY-MM-DD')) <= new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD'));
                if (this.compareDate === false) {
                    _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(this._translate.NOTIFY.date_report, 'error');
                    return;
                }
            }
            _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].showloading();
            this.submitData(this.form.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].hideloading(); }))
                .subscribe(function (value) {
                if (value.status === 'success') {
                    _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                    _this.checkShow(_this.form.value.invoice_report);
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(value.message, 'error');
                }
            }, function (error) {
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(error, 'error');
            });
        }
        else {
            this.form.patchValue({
                invoice_report: {
                    type: this.textType,
                    signature_status: 'CHUA_KY',
                    status: 'HOAT_DONG',
                    doc_relate_symbol: this.form.value.invoice_report.doc_relate_symbol.toString(),
                    doc_relate_date: moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD'),
                    seller_sign_position: '' // '563;50;300;350;397;276',
                }
            });
            if (this.dataInvoice.adjustment_type === '7') {
                this.compareDate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.dataInvoice.invoice_date).format('YYYY-MM-DD')) <= new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD')) && new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD')) <= new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.dataInvoice.destroy_date).format('YYYY-MM-DD'));
                if (this.compareDate === false) {
                    _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(this._translate.NOTIFY.date_report_and_date_cancel_report, 'error');
                    return;
                }
            }
            else {
                this.compareDate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.dataInvoice.invoice_date).format('YYYY-MM-DD')) <= new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD'));
                if (this.compareDate === false) {
                    _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(this._translate.NOTIFY.date_report, 'error');
                    return;
                }
            }
            _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].showloading();
            this.submitData(this.form.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].hideloading(); }))
                .subscribe(function (value) {
                if (value.status === 'success') {
                    _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                    _this.form.patchValue({
                        invoice_report: {
                            id: value.data.invoice_report.id
                        }
                    });
                    _this.checkShow(_this.form.value.invoice_report);
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(value.message, 'error');
                }
            }, function (error) {
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(error, 'error');
            });
        }
    };
    CreateReportComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                _this.file_content = data.Data.Content;
                if (_this.file_content) {
                    _this.callSignAll(_this.file_content, data.Cert.FriendlyName);
                }
            }
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(error, 'error');
        });
    };
    CreateReportComponent.prototype.callSignAll = function (fileContent, nameSign) {
        var _this = this;
        this.form.patchValue({
            invoice_report: {
                file_content: fileContent,
                json_data: {
                    seller_sign_name: nameSign
                }
            }
        });
        var initialState = {
            data: this.form
        };
        this.bsModalDocument = this.modalService.show(_modules_handle_report_shared_components_cancel_report_modal_cancel_report_modal_component__WEBPACK_IMPORTED_MODULE_11__["CancelReportModalComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        this.modalService.onHide.subscribe(function () {
            if (_this.bsModalDocument.content.successSaveItem === 'SuccessCancelReport') {
                _this.showGhiTam = false;
                _this.showSigAndSend = false;
                _this.showCancel = true;
                _this.showReload = true;
                _this.typeSeller = true;
                _this.form.patchValue({
                    invoice_report: {
                        id: _this.bsModalDocument.content.successSaveData.id,
                        email: _this.bsModalDocument.content.successSaveData.email,
                        signature_status: _this.bsModalDocument.content.successSaveData.signature_status,
                        json_data: {
                            seller_sign_name: _this.bsModalDocument.content.successSaveData.seller_sign_name
                        }
                    }
                });
                _this.nameSeller = _this.bsModalDocument.content.successSaveData.seller_sign_name;
                _this.dateSeller = moment__WEBPACK_IMPORTED_MODULE_8__(_this.form.value.invoice_report.doc_relate_date).format('DD/MM/YYYY');
            }
        });
    };
    CreateReportComponent.prototype.submitData = function (data) {
        if (data.invoice_report.id !== null) {
            return this.handleReport.apiUpdateReport(data.invoice_report.id, data);
        }
        else {
            return this.handleReport.apiCreateReport(data);
        }
    };
    CreateReportComponent.prototype.signAndSend = function () {
        var _this = this;
        if (this.status === 'DIEU_CHINH') {
            if (this.form.get('invoice_report.adjustment_reason').invalid || this.form.get('invoice_report.adjustment_content_before').invalid || this.form.get('invoice_report.adjustment_content_after').invalid) {
                this.submitted = true;
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(this._translate.NOTIFY.enter_full_information, 'error');
                return;
            }
        }
        else {
            if (this.form.get('invoice_report.destroy_reason').invalid) {
                this.submitted = true;
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(this._translate.NOTIFY.enter_full_information, 'error');
                return;
            }
        }
        this.submitted = false;
        var seller_sign_position = this.form.value.invoice_report.seller_sign_position;
        if (!seller_sign_position) {
            seller_sign_position = ''; // '563;50;300;350;397;276';
        }
        this.form.patchValue({
            invoice_report: {
                signature_status: 'NGUOI_BAN_KY',
                status: 'HOAT_DONG',
                seller_sign_date: moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD hh:mm:ss'),
                doc_relate_symbol: this.form.value.invoice_report.doc_relate_symbol.toString(),
                doc_relate_date: moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD'),
                seller_sign_position: seller_sign_position,
                file_name: 'Bien_ban_' + this.textType + '_' + this.form.value.invoice_report.json_data.invoice_number + '.pdf',
            }
        });
        if (this.dataInvoice.adjustment_type === '7') {
            this.compareDate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.dataInvoice.invoice_date).format('YYYY-MM-DD')) <= new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD')) && new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD')) <= new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.dataInvoice.destroy_date).format('YYYY-MM-DD'));
            if (this.compareDate === false) {
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(this._translate.NOTIFY.date_report_and_date_cancel_report, 'error');
                return;
            }
        }
        else {
            this.compareDate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.dataInvoice.invoice_date).format('YYYY-MM-DD')) <= new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD'));
            if (this.compareDate === false) {
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(this._translate.NOTIFY.date_report, 'error');
                return;
            }
        }
        _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].showloading();
        this.handleReport.apiGetFileContent(this.form.value)
            .subscribe(function (value) {
            if (value.status === 'success') {
                var data = value.data.invoice;
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].hideloading();
                if (_this.coKiSoTapChung || _this.isRemoteSignning) {
                    _this.callSignAll(data.file_content, null);
                }
                else {
                    var oInforSign = {
                        file_content: data.file_content,
                        file_name: data.file_name,
                        extension: 'pdf',
                        is_valid_cks: true,
                        sign_date: _this.form.value.invoice_report.seller_sign_date,
                        alignment: 'ALIGN_LEFT',
                        page_sign: 'PAGE_LAST',
                        sign_position: seller_sign_position,
                        tax_code: _this.currentUser.account.tax_code,
                        is_not_check_serial_number: true,
                        is_not_check_ocsp: true
                    };
                    // if (this.isTT78) {
                    //   let ListSerialNumber = "DSCKS";
                    //   if (this.infoDangKy && this.infoDangKy.registration_signature) {
                    //     let signatures = this.infoDangKy.registration_signature.filter(p => p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN");
                    //     if (signatures && signatures.length > 0)
                    //       ListSerialNumber = signatures.map((obj: any) => obj.cert_serial).join(';');
                    //   }
                    //   oInforSign['list_serial_number'] = ListSerialNumber;
                    //   oInforSign['is_tt78'] = true;
                    // }
                    _this.socketService.kiFileTT78(function () { return _this.connectWebsocket(); }, oInforSign);
                }
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(value.message, 'error');
            }
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(error, 'error');
        });
    };
    CreateReportComponent.prototype.colse = function () {
        if (sessionStorage.hasOwnProperty('urlCreate')) {
            if (sessionStorage.getItem('urlCreate') !== null) {
                var url = sessionStorage.getItem('urlCreate');
                this.router.navigate([url]);
            }
            else {
                this.router.navigate(['/system/handle-report/', this.id, this.status]);
            }
        }
        else {
            this.router.navigate(['/system/handle-report/', this.id, this.status]);
        }
    };
    CreateReportComponent.prototype.routerCancelInvoice = function () {
        var template_code = this.dataInvoice.template_code.split('/');
        if (this.status === 'THAY_THE') {
            if (this.dataInvoice.handle_invoice_id) {
                if (template_code[0] === '01GTKT0' || template_code[0] === '1') {
                    if (this.accountType === 'HS-SV') {
                        this.router.navigate(['/system/handle-invoice-student/edit-replace', this.data.handle_invoice_id]);
                    }
                    else {
                        this.router.navigate(['/system/handle-invoice/edit-replace/', this.data.handle_invoice_id]);
                    }
                }
                else if (template_code[0] === '02GTTT0' || template_code[0] === '2') {
                    this.router.navigate(['/system/handle-invoice/edit-sale-replace/', this.data.handle_invoice_id]);
                }
            }
            else {
                if (template_code[0] === '01GTKT0' || template_code[0] === '1') {
                    if (this.accountType === 'HS-SV') {
                        this.router.navigate(['/system/handle-invoice-student/replace', this.data.id]);
                    }
                    else {
                        this.router.navigate(['/system/handle-invoice/replace/', this.data.id]);
                    }
                }
                else if (template_code[0] === '02GTTT0' || template_code[0] === '2') {
                    this.router.navigate(['/system/handle-invoice/sale-replace/', this.data.id]);
                }
            }
        }
        else if (this.status === 'HUY') {
            if (this.data.adjustment_type !== '7') {
                this.router.navigate(['/system/handle-report/cancel-report/', this.id]);
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify('Hóa đơn đã bị hủy', 'error');
            }
        }
        else if (this.status === 'DIEU_CHINH') {
            if (this.dataInvoice.handle_invoice_id !== null) {
                if (template_code[0] === '01GTKT0' || template_code[0] === '1') {
                    if (this.accountType === 'HS-SV') {
                        this.router.navigate(['/system/handle-invoice-student/edit-adjust', this.data.handle_invoice_id]);
                    }
                    else {
                        this.router.navigate(['/system/handle-invoice/edit-adjust/', this.data.handle_invoice_id]);
                    }
                }
                else if (template_code[0] === '02GTTT0' || template_code[0] === '2') {
                    this.router.navigate(['/system/handle-invoice/edit-sale-adjust/', this.data.handle_invoice_id]);
                }
            }
            else {
                if (template_code[0] === '01GTKT0' || template_code[0] === '1') {
                    if (this.accountType === 'HS-SV') {
                        this.router.navigate(['/system/handle-invoice-student/adjust', this.data.id]);
                    }
                    else {
                        this.router.navigate(['/system/handle-invoice/adjust/', this.data.id]);
                    }
                }
                else if (template_code[0] === '02GTTT0' || template_code[0] === '2') {
                    this.router.navigate(['/system/handle-invoice/sale-adjust/', this.data.id]);
                }
            }
        }
    };
    CreateReportComponent.prototype.suggetReport = function () {
        var _this = this;
        // this.bsModalDocument = this.modalService.show(SuggestReportComponent, {
        //   class: 'modal-lg', backdrop: 'static', keyboard: false
        // });
        _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].showloading();
        var sub = this.vatService.showToSendInvoice(this.id).subscribe(function (rs) {
            if (rs.status === 'success') {
                var initialState = {
                    invoice: rs.data.invoice,
                    listDM: [] // this.listDM
                };
                _this.bsModalRef = _this.modalService.show(_modules_handle_report_shared_components_suggest_report_suggest_report_component__WEBPACK_IMPORTED_MODULE_14__["SuggestReportComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    CreateReportComponent.prototype.reload = function () {
        var _this = this;
        if (this.form.value.invoice_report.id !== null && this.form.value.invoice_report.signature_status === 'NGUOI_BAN_KY') {
            var initialState = {
                id: this.form.value.invoice_report.id,
                email: this.form.value.invoice_report.email
            };
            this.bsModalDocument = this.modalService.show(_modules_handle_report_shared_components_reload_report_reload_report_component__WEBPACK_IMPORTED_MODULE_15__["ReloadReportComponent"], {
                class: 'modal-lg', initialState: initialState, backdrop: 'static',
                keyboard: false
            });
            this.modalService.onHide.subscribe(function () {
                if (_this.bsModalDocument.content.successSaveItem === 'Reload') {
                    _this.form.patchValue({
                        invoice_report: {
                            email: _this.bsModalDocument.content.successSaveData,
                        }
                    });
                    _this.nameSeller = _this.form.value.invoice_report.json_data.seller_sign_name;
                    delete _this.bsModalDocument.content.successSaveItem;
                }
            });
        }
        else {
            _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify('Biên bản không thể gửi lại !', 'error');
        }
    };
    CreateReportComponent.prototype.showPrint = function (objectUrl) {
        var w = 1920, h = 900;
        w = window.screen.availWidth * 100 / 100;
        h = window.screen.availHeight * 93 / 100;
        var win = window.open('about:blank', 'name', 'width=200, height=100');
        win.document.body.innerHTML = this._translate.NOTIFY.loading;
        win.blur();
        win.resizeTo(screen.availWidth, screen.availHeight);
        win.focus();
        win.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
    };
    CreateReportComponent.prototype.print = function () {
        var _this = this;
        this.form.patchValue({
            invoice_report: {
                doc_relate_symbol: this.form.value.invoice_report.doc_relate_symbol.toString(),
                doc_relate_date: moment__WEBPACK_IMPORTED_MODULE_8__(this.form.value.invoice_report.doc_relate_date).format('YYYY-MM-DD'),
            }
        });
        setTimeout(function () {
            var w = 1920, h = 900;
            w = window.screen.availWidth * 100 / 100;
            h = window.screen.availHeight * 93 / 100;
            var win = window.open('about:blank', 'name', 'width=200, height=100');
            win.document.body.innerHTML = _this._translate.NOTIFY.loading;
            win.blur();
            _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].showloading();
            _this.signature_status = _this.form.value.invoice_report.signature_status;
            _this.is_paper_report = _this.form.value.invoice_report.is_paper_report;
            if (_this.signature_status === 'NGUOI_MUA_KY' || _this.signature_status === 'NGUOI_BAN_KY') {
                _this.handleReport.getFileContentOfReport(_this.form.value.invoice_report.id, _this.form.value.invoice_report.type)
                    .subscribe(function (value) {
                    if (value.status === 'success') {
                        var objectUrl = _core_library_invoice_v_preview_inv_service__WEBPACK_IMPORTED_MODULE_17__["VPreviewInvService"]._getUrlInvoice(value.data.invoice_report.file_content);
                        win.resizeTo(screen.availWidth, screen.availHeight);
                        win.focus();
                        win.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
                    }
                    else {
                        _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(value.message, 'error');
                    }
                }, function (error) { return _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(error.message, 'error'); }, function () {
                    _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].hideloading();
                });
            }
            else {
                _this.handleReport.apiGetFileContent(_this.form.value).subscribe(function (value) {
                    if (value.status === 'success') {
                        _this.pdf_file = value.data.invoice.file_content;
                        _this.title_file_pdf = value.data.invoice.file_name;
                        var objectUrl = _core_library_invoice_v_preview_inv_service__WEBPACK_IMPORTED_MODULE_17__["VPreviewInvService"]._getUrlInvoice(_this.pdf_file);
                        win.resizeTo(screen.availWidth, screen.availHeight);
                        win.focus();
                        win.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
                    }
                }, function (error) { return _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].notify(error.message, 'error'); }, function () {
                    _core_library__WEBPACK_IMPORTED_MODULE_12__["Library"].hideloading();
                });
            }
        }, 500);
    };
    CreateReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-report',
            template: __webpack_require__(/*! ./create-report.component.html */ "./src/app/modules/handle-report/create-report/create-report.component.html"),
            styles: [__webpack_require__(/*! ./create-report.component.scss */ "./src/app/modules/handle-report/create-report/create-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_3__["HanldeReportService"],
            _modules_info_unit_shared__WEBPACK_IMPORTED_MODULE_4__["InfoUnitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"],
            _core_services__WEBPACK_IMPORTED_MODULE_10__["SocketService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_6__["BsModalRef"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_6__["BsModalRef"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_6__["BsModalRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"]])
    ], CreateReportComponent);
    return CreateReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/handle-report.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/handle-report/handle-report.module.ts ***!
  \***************************************************************/
/*! exports provided: HandleReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleReportModule", function() { return HandleReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _modules_info_unit_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/info-unit/shared */ "./src/app/modules/info-unit/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _handle_report_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./handle-report.routing */ "./src/app/modules/handle-report/handle-report.routing.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/index.component */ "./src/app/modules/handle-report/index/index.component.ts");
/* harmony import */ var _create_report_create_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-report/create-report.component */ "./src/app/modules/handle-report/create-report/create-report.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_components_cancel_report_modal_cancel_report_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/cancel-report-modal/cancel-report-modal.component */ "./src/app/modules/handle-report/shared/components/cancel-report-modal/cancel-report-modal.component.ts");
/* harmony import */ var _shared_components_input_date_format_input_date_format_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/input-date-format/input-date-format.component */ "./src/app/modules/handle-report/shared/components/input-date-format/input-date-format.component.ts");
/* harmony import */ var _view_report_view_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-report/view-report.component */ "./src/app/modules/handle-report/view-report/view-report.component.ts");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _modules_handle_report_shared_components_send_report_send_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/handle-report/shared/components/send-report/send-report.component */ "./src/app/modules/handle-report/shared/components/send-report/send-report.component.ts");
/* harmony import */ var _cancel_report_cancel_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cancel-report/cancel-report.component */ "./src/app/modules/handle-report/cancel-report/cancel-report.component.ts");
/* harmony import */ var _shared_components_suggest_report_suggest_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/components/suggest-report/suggest-report.component */ "./src/app/modules/handle-report/shared/components/suggest-report/suggest-report.component.ts");
/* harmony import */ var _shared_components_input_multiple_email_cancel_invoice_input_multiple_email_cancel_invoice_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/input-multiple-email-cancel-invoice/input-multiple-email-cancel-invoice.component */ "./src/app/modules/handle-report/shared/components/input-multiple-email-cancel-invoice/input-multiple-email-cancel-invoice.component.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _shared_components_reload_report_reload_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/components/reload-report/reload-report.component */ "./src/app/modules/handle-report/shared/components/reload-report/reload-report.component.ts");
/* harmony import */ var _shared_modules_vat_shared_vat_shared_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @shared/modules/vat-shared/vat-shared.module */ "./src/app/shared/modules/vat-shared/vat-shared.module.ts");
/* harmony import */ var _modules_handle_invoice_shared_handle_invoice_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @modules/handle-invoice/shared/handle-invoice.service */ "./src/app/modules/handle-invoice/shared/handle-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var HandleReportModule = /** @class */ (function () {
    function HandleReportModule() {
    }
    HandleReportModule_1 = HandleReportModule;
    HandleReportModule = HandleReportModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _handle_report_routing__WEBPACK_IMPORTED_MODULE_9__["routing"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_4__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDateBoxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_22__["TagInputModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_1__["devextremeModule"],
                _shared_modules_vat_shared_vat_shared_module__WEBPACK_IMPORTED_MODULE_24__["VatSharedModule"],
            ],
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"],
                _create_report_create_report_component__WEBPACK_IMPORTED_MODULE_11__["CreateReportComponent"],
                _shared_components_cancel_report_modal_cancel_report_modal_component__WEBPACK_IMPORTED_MODULE_13__["CancelReportModalComponent"],
                _shared_components_input_date_format_input_date_format_component__WEBPACK_IMPORTED_MODULE_14__["InputDateFormatComponent"],
                _view_report_view_report_component__WEBPACK_IMPORTED_MODULE_15__["ViewReportComponent"],
                _modules_handle_report_shared_components_send_report_send_report_component__WEBPACK_IMPORTED_MODULE_18__["SendReportComponent"],
                _shared_components_suggest_report_suggest_report_component__WEBPACK_IMPORTED_MODULE_20__["SuggestReportComponent"],
                _cancel_report_cancel_report_component__WEBPACK_IMPORTED_MODULE_19__["CancelReportComponent"],
                _shared_components_input_multiple_email_cancel_invoice_input_multiple_email_cancel_invoice_component__WEBPACK_IMPORTED_MODULE_21__["InputMultipleEmailCancelInvoiceComponent"],
                _shared_components_reload_report_reload_report_component__WEBPACK_IMPORTED_MODULE_23__["ReloadReportComponent"]
            ],
            entryComponents: [
                _modules_handle_report_shared_components_send_report_send_report_component__WEBPACK_IMPORTED_MODULE_18__["SendReportComponent"],
                _shared_components_cancel_report_modal_cancel_report_modal_component__WEBPACK_IMPORTED_MODULE_13__["CancelReportModalComponent"],
                _shared_components_input_date_format_input_date_format_component__WEBPACK_IMPORTED_MODULE_14__["InputDateFormatComponent"],
                _shared_components_suggest_report_suggest_report_component__WEBPACK_IMPORTED_MODULE_20__["SuggestReportComponent"],
                _shared_components_reload_report_reload_report_component__WEBPACK_IMPORTED_MODULE_23__["ReloadReportComponent"]
            ],
            providers: [
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_3__["VatService"],
                HandleReportModule_1,
                _modules_template_shared__WEBPACK_IMPORTED_MODULE_6__["TemplateService"],
                _modules_info_unit_shared__WEBPACK_IMPORTED_MODULE_7__["InfoUnitService"],
                _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_16__["NotifyService"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsModalRef"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsModalService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
                _shared_modules_vat_shared_vat_shared_module__WEBPACK_IMPORTED_MODULE_24__["VatSharedModule"],
                _modules_handle_invoice_shared_handle_invoice_service__WEBPACK_IMPORTED_MODULE_25__["HandleInvoiceService"]
            ]
        })
    ], HandleReportModule);
    return HandleReportModule;
    var HandleReportModule_1;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/handle-report.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/handle-report/handle-report.routing.ts ***!
  \****************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_report_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/report-resolver.service */ "./src/app/modules/handle-report/shared/report-resolver.service.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/modules/handle-report/index/index.component.ts");
/* harmony import */ var _create_report_create_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-report/create-report.component */ "./src/app/modules/handle-report/create-report/create-report.component.ts");
/* harmony import */ var _shared_create_report_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/create-report-resolver.service */ "./src/app/modules/handle-report/shared/create-report-resolver.service.ts");
/* harmony import */ var _modules_handle_report_shared_cancel_invoice_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/handle-report/shared/cancel-invoice-resolver.service */ "./src/app/modules/handle-report/shared/cancel-invoice-resolver.service.ts");
/* harmony import */ var _modules_handle_report_cancel_report_cancel_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/handle-report/cancel-report/cancel-report.component */ "./src/app/modules/handle-report/cancel-report/cancel-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'cancel-report/:id', component: _modules_handle_report_cancel_report_cancel_report_component__WEBPACK_IMPORTED_MODULE_7__["CancelReportComponent"], resolve: { CancelInvoiceResolverService: _modules_handle_report_shared_cancel_invoice_resolver_service__WEBPACK_IMPORTED_MODULE_6__["CancelInvoiceResolverService"] } },
    { path: ':id/:status', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"], resolve: { ReportResolverService: _shared_report_resolver_service__WEBPACK_IMPORTED_MODULE_2__["ReportResolverService"] } },
    { path: 'create-report/:id/:status', component: _create_report_create_report_component__WEBPACK_IMPORTED_MODULE_4__["CreateReportComponent"], resolve: { CreateReportResolverService: _shared_create_report_resolver_service__WEBPACK_IMPORTED_MODULE_5__["CreateReportResolverService"] } },
    { path: '**', redirectTo: '/' },
    { path: '/:status', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"], resolve: { ReportResolverService: _shared_report_resolver_service__WEBPACK_IMPORTED_MODULE_2__["ReportResolverService"] } },
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

/***/ "./src/app/modules/handle-report/index/index.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/handle-report/index/index.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3 mb-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h1 class=\"text-uppercase text-center text-primary font-weight-bold style-text-title\">\r\n        {{_translate.CONTROLL.LABEL.select_handle_report}}\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4 mb-2\">\r\n    <div class=\"col-md-4\">\r\n      <h3 *ngIf=\"data\"><strong style=\"margin-right: 24px\">{{_translate.MENU.invoice_form}} :</strong> {{data.template_code}}\r\n        - {{data.invoice_series}}</h3>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <h3 *ngIf=\"data\"><strong style=\"padding: 0 8px; margin-right: 15px\">{{_translate.GRID.INVOICE.invoice_number}} :</strong> {{data.invoice_number}}\r\n      </h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h3 *ngIf=\"data && isDoanhNghiep\"><strong style=\"padding: 0 8px; margin-right: 15px\">{{_translate.GRID.INVOICE.customer}} : </strong>\r\n        {{data.hasOwnProperty('customer_name') && data.customer_name !== null ? data.customer_name : data.buyer_name}}\r\n      </h3>\r\n      <h3 *ngIf=\"data && !isDoanhNghiep\"><strong style=\"padding: 0 8px; margin-right: 15px\">{{_translate.CONTROLL.LABEL.name_student}} : </strong>\r\n        {{data.hasOwnProperty('student_name') && data.student_name !== null ? data.student_name : data.student_name}}\r\n      </h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-5 mb-2\">\r\n    <div class=\"col-md-6 text-right\">\r\n      <a (click)=\"createReport()\" href=\"javascript:void(0)\" class=\"pl-3 text-decoration-none\">\r\n        <article class=\"mr-5\" style=\"display: inline-block!important;\">\r\n          <span [className]=\"textValue.styleImgL\"><img [src]=\"textValue.imgL\" alt=\"\"></span>\r\n          <p *ngIf=\"textValue\" [className]=\"textValue.styleL\">{{textValue.statusLeft}}</p>\r\n        </article>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <a href=\"javascript:void(0)\" (click)=\"handleNavigateUrlR()\" class=\"pl-3 text-decoration-none\">\r\n        <article class=\"ml-5\" style=\"display: inline-block!important;\">\r\n          <span [className]=\"textValue.styleImgR\"><img [src]=\"textValue.imgR\" alt=\"\"></span>\r\n          <p *ngIf=\"textValue\"\r\n             [className]=\"textValue.styleR\">\r\n            {{textValue.statusRight}}\r\n          </p>\r\n        </article>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row pt-5\">\r\n    <div class=\"col-md-12 text-center\">\r\n      <button type=\"button\" class=\"btn style-button\" (click)=\"close()\">{{_translate.CONTROLL.BUTTON.come_back}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-report/index/index.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/handle-report/index/index.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".style-text-title{font-size:21px}.style-icon{color:cadetblue;font-size:55px;margin-right:20px}.style-icon-l{color:cadetblue;font-size:55px;margin-left:13px}.style-icon-l{color:cadetblue;font-size:55px;margin-right:25px}.text-decoration-none{text-decoration:none}article p{color:#1d4999}.style-button{border-radius:0 !important;line-height:10px !important;color:#fff;padding:10px 22px;background-color:#337ab7;border:1px solid #2d6da3}.style-button:hover{background-color:#285f8f;border:1px solid #265a87}.ml-30{margin-left:30px !important}.ml-22{margin-left:22px !important}.mr-8{margin-right:8px !important}.ml-5{margin-left:5px !important}\n"

/***/ }),

/***/ "./src/app/modules/handle-report/index/index.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/handle-report/index/index.component.ts ***!
  \****************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
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
    function IndexComponent(authService, route, vatService, router, handleReport, translate) {
        this.authService = authService;
        this.route = route;
        this.vatService = vatService;
        this.router = router;
        this.handleReport = handleReport;
        this.translate = translate;
        this.data = {};
        this.textValue = {};
        this.dataReport = {};
        this.isDoanhNghiep = true;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.translate.use(this._language);
        this.accountType = this.authService.getAccountType();
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.status = this.route.snapshot.paramMap.get('status');
        if (this.status == "multiple") {
            this.textValue.statusLeft = this._translate.CONTROLL.BUTTON.view_report;
            this.textValue.statusRight = this._translate.CONTROLL.BUTTON.create_report_adjust;
            this.textValue.iconRight = 'fa fa-file-excel-o dx-icon style-icon-l';
            this.textValue.iconLeft = 'fa fa-file-excel-o dx-icon style-icon';
            this.textValue.imgL = 'assets/img/icons/create_report.png';
            this.textValue.imgR = 'assets/img/icons/adjust_report.png';
            this.textValue.styleImgL = 'mr-8';
            this.textValue.styleImgR = 'ml-30';
            this.textValue.styleL = 'font-weight-bold pt-2 pb-1';
            this.textValue.styleR = 'font-weight-bold pt-2 pb-1';
        }
        else {
            this.route.data
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return value.ReportResolverService; }))
                .subscribe(function (value) {
                _this.data = value[0];
                if (_this.data.batch_id)
                    _this.isDoanhNghiep = false;
                _this.dataReport = value[1];
                _this.handleIconAndText(_this.dataReport, _this.data, _this.status);
            });
        }
    };
    IndexComponent.prototype.handleIconAndText = function (dataReport, data, status) {
        if (data.status === 'DA_XUAT' || (data.status === 'GIU_SO' && data.adjustment_type === '3')) {
            if (dataReport !== undefined) {
                if (status === 'HUY') {
                    if (data.adjustment_type === '7') {
                        this.textValue.statusLeft = this._translate.CONTROLL.BUTTON.view_report;
                        this.textValue.statusRight = this._translate.CONTROLL.BUTTON.report_cancelled;
                        this.textValue.iconRight = 'fa fa-file-excel-o dx-icon style-icon-l';
                        this.textValue.iconLeft = 'fa fa-file-excel-o dx-icon style-icon';
                        this.textValue.imgL = 'assets/img/icons/create_report.png';
                        this.textValue.imgR = 'assets/img/icons/cancel_report.png';
                        this.textValue.styleImgL = 'mr-8';
                        this.textValue.styleImgR = 'ml-5';
                        this.textValue.styleL = 'font-weight-bold pt-2 pb-1';
                        this.textValue.styleR = 'text-danger font-weight-bold pt-2 pb-1';
                    }
                    else {
                        this.textValue.statusLeft = this._translate.CONTROLL.BUTTON.view_report;
                        this.textValue.statusRight = this._translate.CONTROLL.BUTTON.cancel_report_HD;
                        this.textValue.iconRight = 'fa fa-file-excel-o dx-icon style-icon-l';
                        this.textValue.iconLeft = 'fa fa-file-excel-o dx-icon style-icon';
                        this.textValue.imgL = 'assets/img/icons/create_report.png';
                        this.textValue.imgR = 'assets/img/icons/cancel_report.png';
                        this.textValue.styleImgL = 'mr-8';
                        this.textValue.styleImgR = 'ml-5';
                        this.textValue.styleL = 'font-weight-bold pt-2 pb-1';
                        this.textValue.styleR = 'font-weight-bold pt-2 pb-1';
                    }
                }
                else if (status === 'THAY_THE') {
                    this.textValue.statusLeft = this._translate.CONTROLL.BUTTON.view_report;
                    this.textValue.iconRight = 'fa fa-file-excel-o dx-icon style-icon-l';
                    this.textValue.iconLeft = 'fa fa-file-excel-o dx-icon style-icon';
                    this.textValue.imgL = 'assets/img/icons/create_report.png';
                    this.textValue.imgR = 'assets/img/icons/replace_report.png';
                    this.textValue.styleImgL = 'mr-8';
                    this.textValue.styleImgR = 'ml-22';
                    this.textValue.styleL = 'font-weight-bold pt-2 pb-1';
                    if (data.adjustment_type === '2') {
                        if (data.handle_invoice_id) {
                            this.textValue.styleR = 'font-weight-bold pt-2 pb-1';
                            this.textValue.statusRight = this._translate.CONTROLL.BUTTON.create_report_replace;
                        }
                        else {
                            this.textValue.styleR = 'text-danger font-weight-bold pt-2 pb-1';
                            this.textValue.statusRight = this._translate.GRID.GENERAL.invoice_are_replaced;
                        }
                    }
                    else {
                        this.textValue.styleR = 'font-weight-bold pt-2 pb-1';
                        this.textValue.statusRight = this._translate.CONTROLL.BUTTON.create_report_replace;
                    }
                }
                else {
                    this.textValue.statusLeft = this._translate.CONTROLL.BUTTON.view_report;
                    this.textValue.statusRight = this._translate.CONTROLL.BUTTON.create_report_adjust;
                    this.textValue.iconRight = 'fa fa-file-excel-o dx-icon style-icon-l';
                    this.textValue.iconLeft = 'fa fa-file-excel-o dx-icon style-icon';
                    this.textValue.imgL = 'assets/img/icons/create_report.png';
                    this.textValue.imgR = 'assets/img/icons/adjust_report.png';
                    this.textValue.styleImgL = 'mr-8';
                    this.textValue.styleImgR = 'ml-30';
                    this.textValue.styleL = 'font-weight-bold pt-2 pb-1';
                    this.textValue.styleR = 'font-weight-bold pt-2 pb-1';
                }
            }
            else {
                if (status === 'HUY') {
                    if (data.adjustment_type === '7') {
                        this.textValue.statusLeft = this._translate.CONTROLL.BUTTON.create_report;
                        this.textValue.statusRight = this._translate.CONTROLL.BUTTON.report_cancelled;
                        this.textValue.iconRight = 'fa fa-file-excel-o dx-icon style-icon-l';
                        this.textValue.iconLeft = 'fa fa-file-excel-o dx-icon style-icon';
                        this.textValue.imgL = 'assets/img/icons/create_report.png';
                        this.textValue.imgR = 'assets/img/icons/cancel_report.png';
                        this.textValue.styleImgL = 'mr-8';
                        this.textValue.styleImgR = 'ml-5';
                        this.textValue.styleL = 'font-weight-bold pt-2 pb-1';
                        this.textValue.styleR = 'text-danger font-weight-bold pt-2 pb-1';
                    }
                    else {
                        this.textValue.statusLeft = this._translate.CONTROLL.BUTTON.create_report;
                        this.textValue.statusRight = this._translate.CONTROLL.BUTTON.cancel_report_HD;
                        this.textValue.iconRight = 'fa fa-file-excel-o dx-icon style-icon-l';
                        this.textValue.iconLeft = 'fa fa-file-excel-o dx-icon style-icon';
                        this.textValue.imgL = 'assets/img/icons/create_report.png';
                        this.textValue.imgR = 'assets/img/icons/cancel_report.png';
                        this.textValue.styleImgL = 'mr-8';
                        this.textValue.styleImgR = 'ml-5';
                        this.textValue.styleL = 'font-weight-bold pt-2 pb-1';
                        this.textValue.styleR = 'font-weight-bold pt-2 pb-1';
                    }
                }
                else if (status === 'THAY_THE') {
                    this.textValue.statusLeft = this._translate.CONTROLL.BUTTON.create_report;
                    this.textValue.iconRight = 'fa fa-file-excel-o dx-icon style-icon-l';
                    this.textValue.iconLeft = 'fa fa-file-excel-o dx-icon style-icon';
                    this.textValue.imgL = 'assets/img/icons/create_report.png';
                    this.textValue.imgR = 'assets/img/icons/replace_report.png';
                    this.textValue.styleImgL = 'mr-8';
                    this.textValue.styleImgR = 'ml-22';
                    this.textValue.styleL = 'font-weight-bold pt-2 pb-1';
                    if (data.adjustment_type === '2') {
                        if (data.handle_invoice_id) {
                            this.textValue.styleR = 'font-weight-bold pt-2 pb-1';
                            this.textValue.statusRight = this._translate.CONTROLL.BUTTON.create_report_replace;
                        }
                        else {
                            this.textValue.styleR = 'text-danger font-weight-bold pt-2 pb-1';
                            this.textValue.statusRight = this._translate.GRID.GENERAL.invoice_replaced;
                        }
                    }
                    else {
                        this.textValue.styleR = 'font-weight-bold pt-2 pb-1';
                        this.textValue.statusRight = this._translate.CONTROLL.BUTTON.create_report_replace;
                    }
                }
                else {
                    this.textValue.statusLeft = this._translate.CONTROLL.BUTTON.create_report;
                    this.textValue.statusRight = this._translate.CONTROLL.BUTTON.create_report_adjust;
                    this.textValue.iconRight = 'fa fa-file-excel-o dx-icon style-icon-l';
                    this.textValue.iconLeft = 'fa fa-file-excel-o dx-icon style-icon';
                    this.textValue.styleImgL = 'mr-8';
                    this.textValue.styleImgR = 'ml-30';
                    this.textValue.styleL = 'font-weight-bold pt-2 pb-1';
                    this.textValue.styleR = 'font-weight-bold pt-2 pb-1';
                    this.textValue.imgL = 'assets/img/icons/create_report.png';
                    this.textValue.imgR = 'assets/img/icons/adjust_report.png';
                }
            }
        }
        else {
            this.router.navigate(['/']);
        }
    };
    IndexComponent.prototype.setSessionUrl = function () {
        var url = window.location.pathname;
        if (sessionStorage.hasOwnProperty('urlCreate')) {
            if (sessionStorage.getItem('urlCreate') !== null) {
                sessionStorage.setItem('urlCreate', url);
            }
            else {
                sessionStorage.setItem('urlCreate', url);
            }
        }
        else {
            sessionStorage.setItem('urlCreate', url);
        }
    };
    IndexComponent.prototype.createReport = function () {
        this.setSessionUrl();
        this.handleReport.createReport(this.data.id, this.status);
    };
    IndexComponent.prototype.handleNavigateUrlR = function () {
        var template_code = this.data.template_code.split('/');
        if (this.status === 'THAY_THE') {
            if (this.data.adjustment_type !== '2') {
                this.setSessionUrl();
                if (this.data.handle_invoice_id) {
                    if (template_code[0].indexOf('01GTKT') >= 0 || template_code[0] === '1') {
                        if (this.accountType === 'HS-SV') {
                            if (this.data.batch_id)
                                this.router.navigate(['/system/handle-invoice-student/edit-replace-vat', this.data.handle_invoice_id]);
                            else
                                this.router.navigate(['/system/handle-invoice/edit-replace', this.data.handle_invoice_id]);
                        }
                        else {
                            this.router.navigate(['/system/handle-invoice/edit-replace', this.data.handle_invoice_id]);
                        }
                    }
                    else if (template_code[0].indexOf('02GTTT') >= 0 || template_code[0] === '2') {
                        if (this.accountType === 'HS-SV') {
                            if (this.data.batch_id)
                                this.router.navigate(['/system/handle-invoice-student/edit-replace-sale', this.data.handle_invoice_id]);
                            else
                                this.router.navigate(['/system/handle-invoice/edit-sale-replace', this.data.handle_invoice_id]);
                        }
                        else
                            this.router.navigate(['/system/handle-invoice/edit-sale-replace', this.data.handle_invoice_id]);
                    }
                    else if (template_code[0].indexOf('07KPTQ') >= 0 || template_code[0] === '2') {
                        this.router.navigate(['/system/handle-invoice/edit-non-tariff-replace', this.data.handle_invoice_id]);
                    }
                }
                else {
                    if (template_code[0].indexOf('01GTKT') >= 0 || template_code[0] === '1' || template_code[0].indexOf('03XKNB') >= 0) {
                        this.router.navigate(['/system/handle-invoice/replace', this.data.id]);
                        if (this.accountType === 'HS-SV') {
                            if (this.data.batch_id)
                                this.router.navigate(['/system/handle-invoice-student/replace-vat', this.data.id]);
                            else
                                this.router.navigate(['/system/handle-invoice/replace', this.data.id]);
                        }
                        else {
                            this.router.navigate(['/system/handle-invoice/replace', this.data.id]);
                        }
                    }
                    else if (template_code[0].indexOf('02GTTT') >= 0 || template_code[0] === '2') {
                        if (this.accountType === 'HS-SV') {
                            if (this.data.batch_id)
                                this.router.navigate(['/system/handle-invoice-student/replace-sale', this.data.id]);
                            else
                                this.router.navigate(['/system/handle-invoice/sale-replace', this.data.id]);
                        }
                        else
                            this.router.navigate(['/system/handle-invoice/sale-replace', this.data.id]);
                    }
                    else if (template_code[0].indexOf('07KPTQ') >= 0 || template_code[0] === '2') {
                        this.router.navigate(['/system/handle-invoice/non-tariff-replace', this.data.id]);
                    }
                }
            }
            else if (this.data.adjustment_type === '2') {
                if (this.data.handle_invoice_id) {
                    if (template_code[0].indexOf('01GTKT') >= 0 || template_code[0] === '1') {
                        if (this.accountType === 'HS-SV') {
                            if (this.data.batch_id)
                                this.router.navigate(['/system/handle-invoice-student/edit-replace-vat', this.data.handle_invoice_id]);
                            else
                                this.router.navigate(['/system/handle-invoice/edit-replace', this.data.handle_invoice_id]);
                        }
                        else {
                            this.router.navigate(['/system/handle-invoice/edit-replace', this.data.handle_invoice_id]);
                        }
                    }
                    else if (template_code[0].indexOf('02GTTT') >= 0 || template_code[0] === '2') {
                        if (this.accountType === 'HS-SV') {
                            if (this.data.batch_id)
                                this.router.navigate(['/system/handle-invoice-student/edit-replace-sale', this.data.handle_invoice_id]);
                            else
                                this.router.navigate(['/system/handle-invoice/edit-sale-replace', this.data.handle_invoice_id]);
                        }
                        else
                            this.router.navigate(['/system/handle-invoice/edit-sale-replace', this.data.handle_invoice_id]);
                    }
                    else if (template_code[0].indexOf('07KPTQ') >= 0 || template_code[0] === '2') {
                        this.router.navigate(['/system/handle-invoice/edit-non-tariff-replace', this.data.handle_invoice_id]);
                    }
                }
                else {
                    _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify('Không thể lập hóa đơn thay thế hóa đơn này!', 'error');
                }
            }
        }
        else if (this.status === 'HUY') {
            if (this.data.adjustment_type !== '7') {
                this.router.navigate(['/system/handle-report/cancel-report/', this.data.id]);
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_5__["Library"].notify('Hóa đơn đã bị hủy', 'error');
            }
        }
        else if (this.status === 'DIEU_CHINH') {
            this.setSessionUrl();
            if (this.data.handle_invoice_id) {
                if (template_code[0].indexOf('01GTKT') >= 0 || template_code[0] === '1') {
                    if (this.accountType === 'HS-SV') {
                        if (this.data.batch_id)
                            this.router.navigate(['/system/handle-invoice-student/edit-adjust-vat', this.data.handle_invoice_id]);
                        else
                            this.router.navigate(['/system/handle-invoice/edit-adjust', this.data.handle_invoice_id]);
                    }
                    else {
                        this.router.navigate(['/system/handle-invoice/edit-adjust', this.data.handle_invoice_id]);
                    }
                }
                else if (template_code[0].indexOf('02GTTT') >= 0 || template_code[0] === '2') {
                    if (this.accountType === 'HS-SV') {
                        if (this.data.batch_id)
                            this.router.navigate(['/system/handle-invoice-student/edit-adjust-sale', this.data.handle_invoice_id]);
                        else
                            this.router.navigate(['/system/handle-invoice/edit-sale-adjust', this.data.handle_invoice_id]);
                    }
                    else
                        this.router.navigate(['/system/handle-invoice/edit-sale-adjust', this.data.handle_invoice_id]);
                }
                else if (template_code[0].indexOf('07KPTQ') >= 0 || template_code[0] === '2') {
                    this.router.navigate(['/system/handle-invoice/edit-non-tariff-adjust', this.data.handle_invoice_id]);
                }
            }
            else {
                if (template_code[0].indexOf('01GTKT') >= 0 || template_code[0] === '1') {
                    if (this.accountType === 'HS-SV') {
                        if (this.data.batch_id)
                            this.router.navigate(['/system/handle-invoice-student/adjust-vat', this.data.id]);
                        else
                            this.router.navigate(['/system/handle-invoice/adjust', this.data.id]);
                    }
                    else {
                        this.router.navigate(['/system/handle-invoice/adjust', this.data.id]);
                    }
                }
                else if (template_code[0].indexOf('02GTTT') >= 0 || template_code[0] === '2') {
                    if (this.accountType === 'HS-SV') {
                        if (this.data.batch_id)
                            this.router.navigate(['/system/handle-invoice-student/adjust-sale', this.data.id]);
                        else
                            this.router.navigate(['/system/handle-invoice/sale-adjust', this.data.id]);
                    }
                    else
                        this.router.navigate(['/system/handle-invoice/sale-adjust', this.data.id]);
                }
                else if (template_code[0].indexOf('07KPTQ') >= 0 || template_code[0] === '2') {
                    this.router.navigate(['/system/handle-invoice/non-tariff-adjust', this.data.id]);
                }
            }
        }
    };
    IndexComponent.prototype.close = function () {
        if (sessionStorage.hasOwnProperty('urlIndex')) {
            if (sessionStorage.getItem('urlIndex') !== null) {
                var url = sessionStorage.getItem('urlIndex');
                this.router.navigate([url]);
            }
            else {
                this.router.navigate(['/']);
            }
        }
        else {
            this.router.navigate(['/']);
        }
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/handle-report/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/handle-report/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_4__["HanldeReportService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/shared/cancel-invoice-resolver.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/cancel-invoice-resolver.service.ts ***!
  \*********************************************************************************/
/*! exports provided: CancelInvoiceResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelInvoiceResolverService", function() { return CancelInvoiceResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CancelInvoiceResolverService = /** @class */ (function () {
    function CancelInvoiceResolverService(handleService, router) {
        this.handleService = handleService;
        this.router = router;
    }
    CancelInvoiceResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var id = route.paramMap.get('id');
        var status = route.queryParams.status;
        return this.handleService.apiShowHDXoaBo(id, 1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            if (value[2].status === 'success' && value[0].status === 'success' && value[1].status === 'success' && value[0].data.invoice.status === 'DA_XUAT' && value[0].data.invoice.adjustment_type !== '2' && value[0].data.invoice.adjustment_type !== '4' && value[0].data.invoice.adjustment_type !== '7') {
                var dataInvoice = value[0].data.invoice;
                var dataConfig = value[1].data.configs;
                var dataReport = value[2].data.invoice_reports;
                return [
                    dataInvoice,
                    dataConfig,
                    dataReport
                ];
            }
            else {
                _this.router.navigate(['/system/handle-report/', id, 'HUY']);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading(); }));
    };
    CancelInvoiceResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_2__["HanldeReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CancelInvoiceResolverService);
    return CancelInvoiceResolverService;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/cancel-report-modal/cancel-report-modal.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/cancel-report-modal/cancel-report-modal.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h5 class=\"modal-title\">{{_translate.CONTROLL.LABEL.send_report}}</h5>\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form class=\"container\" [formGroup]=\"form\">\r\n    <div class=\"row mb-2\" style=\"position: relative\">\r\n      <label class=\"col-md-3 label-text-item text-right font-weight-bold pt-2 pb-4\">\r\n        Email :\r\n      </label>\r\n      <div class=\"col-md-8 pl-0\">\r\n        <app-tag-input-email-bst [variableName]=\"this.emails\"\r\n                                 (numberGenerated)=\"renderDataEmail($event)\"></app-tag-input-email-bst>\r\n\r\n        <div\r\n          *ngIf=\"submitted || form.get('invoice_report.email').invalid && form.get('invoice_report.email').dirty \">\r\n          <div *ngIf=\"form.get('invoice_report.email').errors?.required\">\r\n            <label style=\"display: inline-block; position: absolute; top:10px; right: -10px\"> <i\r\n              class=\"fa fa-exclamation-circle dx-icon text-danger\" style=\"font-size: 20px\"></i> </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-right\">\r\n        <button type=\"button\" class=\"button-content-style\" (click)=\"submit()\">\r\n          <span> {{_translate.CONTROLL.BUTTON.send}}</span>\r\n        </button>\r\n        <button type=\"button\" class=\"button-content-style\" (click)=\"close()\">\r\n          <span>{{_translate.CONTROLL.BUTTON.come_back}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/cancel-report-modal/cancel-report-modal.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/cancel-report-modal/cancel-report-modal.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}.demo .modal-content{margin-top:20% !important}\n"

/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/cancel-report-modal/cancel-report-modal.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/cancel-report-modal/cancel-report-modal.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CancelReportModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelReportModalComponent", function() { return CancelReportModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CancelReportModalComponent = /** @class */ (function () {
    function CancelReportModalComponent(authService, handleReportService, fb, bsModalRef, translate) {
        this.authService = authService;
        this.handleReportService = handleReportService;
        this.fb = fb;
        this.bsModalRef = bsModalRef;
        this.translate = translate;
        this.emails = [];
        this.arrEmail = [];
        this.submitted = false;
        this.checkSubmit = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.translate.use(this._language);
    }
    CancelReportModalComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group(this.handleReportService.generatedFormControlAll());
        this.form = this.data;
        this.outPutEmail = this.form.value.invoice_report.email;
        this.emails = [];
        if (this.outPutEmail !== null && this.outPutEmail !== undefined) {
            var stringDataEmailGet = this.outPutEmail.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
    };
    CancelReportModalComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.get('invoice_report.email').invalid) {
            this.submitted = true;
            return;
        }
        this.submitted = false;
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.apiReport(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        }))
            .subscribe(function (value) {
            if (value.status === 'success') {
                _this.form.patchValue({
                    invoice_report: {
                        id: value.data.invoice_report.id
                    }
                });
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.sign_and_send_success_report, 'success');
                _this.bsModalRef.content.successSaveItem = 'SuccessCancelReport';
                _this.bsModalRef.content.successSaveData = {
                    email: _this.form.value.invoice_report.email,
                    id: value.data.invoice_report.id,
                    signature_status: _this.form.value.invoice_report.signature_status,
                    seller_sign_name: value.data.invoice_report.hasOwnProperty('json_data') ? value.data.invoice_report.json_data.seller_sign_name : _this.form.value.invoice_report.json_data.seller_sign_name,
                };
                _this.bsModalRef.hide();
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(value.message, 'error');
            }
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(error, 'error');
        });
    };
    CancelReportModalComponent.prototype.close = function () {
        this.bsModalRef.hide();
    };
    CancelReportModalComponent.prototype.apiReport = function (data) {
        if (data.invoice_report.id !== null) {
            return this.handleReportService.apiUpdateReport(data.invoice_report.id, data);
        }
        else {
            return this.handleReportService.apiCreateReport(data);
        }
    };
    CancelReportModalComponent.prototype.renderDataEmail = function ($event) {
        this.arrEmail = [];
        this.emails = $event;
        if (this.emails.length > 0) {
            for (var i = 0; i < this.emails.length; i++) {
                if (typeof this.emails[i] === 'object')
                    this.arrEmail.push(this.emails[i].value);
                else if (typeof this.emails[i] === 'string')
                    this.arrEmail.push(this.emails[i]);
            }
            var emailToString = this.arrEmail.toString();
            this.form.patchValue({
                invoice_report: {
                    email: emailToString.replace(/,/g, ';')
                }
            });
        }
        else {
            this.form.patchValue({
                invoice_report: {
                    email: null
                }
            });
        }
    };
    CancelReportModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cancel-report-modal',
            template: __webpack_require__(/*! ./cancel-report-modal.component.html */ "./src/app/modules/handle-report/shared/components/cancel-report-modal/cancel-report-modal.component.html"),
            styles: [__webpack_require__(/*! ./cancel-report-modal.component.scss */ "./src/app/modules/handle-report/shared/components/cancel-report-modal/cancel-report-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_1__["HanldeReportService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], CancelReportModalComponent);
    return CancelReportModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/input-date-format/input-date-format.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/input-date-format/input-date-format.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [(ngModel)]=\"dateValue\" disabled class=\"text-center font-weight-bold input-style\">\r\n"

/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/input-date-format/input-date-format.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/input-date-format/input-date-format.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-style{background-color:transparent;width:85px !important;border:none}\n"

/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/input-date-format/input-date-format.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/input-date-format/input-date-format.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: InputDateFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDateFormatComponent", function() { return InputDateFormatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputDateFormatComponent = /** @class */ (function () {
    function InputDateFormatComponent() {
    }
    InputDateFormatComponent.prototype.ngOnInit = function () {
        this.displayDate(this.dateInput);
    };
    InputDateFormatComponent.prototype.displayDate = function (date) {
        this.dateValue = moment__WEBPACK_IMPORTED_MODULE_1__(date).format('DD/MM/YYYY');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputDateFormatComponent.prototype, "dateInput", void 0);
    InputDateFormatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-date-format',
            template: __webpack_require__(/*! ./input-date-format.component.html */ "./src/app/modules/handle-report/shared/components/input-date-format/input-date-format.component.html"),
            styles: [__webpack_require__(/*! ./input-date-format.component.scss */ "./src/app/modules/handle-report/shared/components/input-date-format/input-date-format.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputDateFormatComponent);
    return InputDateFormatComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/input-multiple-email-cancel-invoice/input-multiple-email-cancel-invoice.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/input-multiple-email-cancel-invoice/input-multiple-email-cancel-invoice.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tag-input\r\n  name=\"buyer_email\"\r\n  [(ngModel)]='emails'\r\n  [validators]=\"validators\"\r\n  [separatorKeyCodes]=\"[32,188,186,13,9]\"\r\n  [placeholder]=\"''\"\r\n  [clearOnBlur]=\"true\"\r\n  [addOnPaste]=\"true\"\r\n  [addOnBlur]=\"true\"\r\n  [editable]='true'\r\n  (onRemove)=\"onItemRemoved($event)\"\r\n  (onAdd)=\"onItemRemoved($event)\"\r\n  [secondaryPlaceholder]=\"langPlace()\"\r\n  required\r\n  style=\"\r\n  border: 1px solid rgb(169, 169, 169);\r\n   padding: 2px 0;\r\n    background: #fff;\r\n    width: 75.4%!important\"\r\n>\r\n</tag-input>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/input-multiple-email-cancel-invoice/input-multiple-email-cancel-invoice.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/input-multiple-email-cancel-invoice/input-multiple-email-cancel-invoice.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: InputMultipleEmailCancelInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMultipleEmailCancelInvoiceComponent", function() { return InputMultipleEmailCancelInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
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



var InputMultipleEmailCancelInvoiceComponent = /** @class */ (function () {
    function InputMultipleEmailCancelInvoiceComponent(authService, translate) {
        this.authService = authService;
        this.translate = translate;
        this.validators = [InputMultipleEmailCancelInvoiceComponent_1.must_be_email];
        this.emails = [];
        this.numberGenerated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.demo = authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    InputMultipleEmailCancelInvoiceComponent_1 = InputMultipleEmailCancelInvoiceComponent;
    Object.defineProperty(InputMultipleEmailCancelInvoiceComponent.prototype, "variableName", {
        set: function (value) {
            this.emails = value;
        },
        enumerable: true,
        configurable: true
    });
    InputMultipleEmailCancelInvoiceComponent.must_be_email = function (control) {
        var EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
        if (control.value.length !== '' && !EMAIL_REGEXP.test(control.value)) {
            return { 'must_be_email': true };
        }
        return null;
    };
    InputMultipleEmailCancelInvoiceComponent.prototype.ngOnInit = function () {
    };
    InputMultipleEmailCancelInvoiceComponent.prototype.onItemRemoved = function ($event) {
        this.numberGenerated.emit(this.emails);
    };
    InputMultipleEmailCancelInvoiceComponent.prototype.langPlace = function () {
        return this.demo.CONFIGS.email_send;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputMultipleEmailCancelInvoiceComponent.prototype, "variableName", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InputMultipleEmailCancelInvoiceComponent.prototype, "numberGenerated", void 0);
    InputMultipleEmailCancelInvoiceComponent = InputMultipleEmailCancelInvoiceComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-multiple-email-cancel-invoice',
            template: __webpack_require__(/*! ./input-multiple-email-cancel-invoice.component.html */ "./src/app/modules/handle-report/shared/components/input-multiple-email-cancel-invoice/input-multiple-email-cancel-invoice.component.html"),
            styles: [__webpack_require__(/*! ../../../../../shared/components/tag-input-email-bst/tag-input-email-bst.component.scss */ "./src/app/shared/components/tag-input-email-bst/tag-input-email-bst.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], InputMultipleEmailCancelInvoiceComponent);
    return InputMultipleEmailCancelInvoiceComponent;
    var InputMultipleEmailCancelInvoiceComponent_1;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/reload-report/reload-report.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/reload-report/reload-report.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h5 class=\"modal-title\">{{_translate.CONTROLL.LABEL.send_reload_report}}</h5>\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form class=\"container\" [formGroup]=\"form\">\r\n    <div class=\"row mb-2\" style=\"position: relative\">\r\n      <label class=\"col-md-3 label-text-item text-right font-weight-bold pt-2 pb-4\">\r\n        Email :\r\n      </label>\r\n      <div class=\"col-md-8 pl-0\">\r\n        <app-tag-input-email-bst [variableName]=\"this.arrEmail\"\r\n                                 (numberGenerated)=\"renderDataEmail($event)\"></app-tag-input-email-bst>\r\n\r\n        <div\r\n          *ngIf=\"submitted || form.get('email').invalid && form.get('email').dirty \">\r\n          <div *ngIf=\"form.get('email').errors?.required\">\r\n            <label style=\"display: inline-block; position: absolute; top:10px; right: -10px\"> <i\r\n              class=\"fa fa-exclamation-circle dx-icon text-danger\" style=\"font-size: 20px\"></i> </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-right\">\r\n        <button type=\"button\" [disabled]=\"checkSubmit\" class=\"button-content-style\" (click)=\"submit()\">\r\n          <span> {{_translate.CONTROLL.BUTTON.send}}</span>\r\n        </button>\r\n        <button type=\"button\" class=\"button-content-style\" [disabled]=\"checkSubmit\" (click)=\"close()\">\r\n          <span>{{_translate.CONTROLL.BUTTON.come_back}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/reload-report/reload-report.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/reload-report/reload-report.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}.demo .modal-content{margin-top:20% !important}\n"

/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/reload-report/reload-report.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/reload-report/reload-report.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ReloadReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReloadReportComponent", function() { return ReloadReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReloadReportComponent = /** @class */ (function () {
    function ReloadReportComponent(authService, translate, handleService, fb, bsModalRef) {
        this.authService = authService;
        this.translate = translate;
        this.handleService = handleService;
        this.fb = fb;
        this.bsModalRef = bsModalRef;
        this.arrEmail = [];
        this.submitted = false;
        this.checkSubmit = false;
        this.outPutEmail = [];
        this.dataEmail = [];
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.translate.use(this._language);
    }
    ReloadReportComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group(this.handleService.formReloadReport);
        this.form.patchValue({
            id: this.id,
            email: this.email
        });
        this.arrEmail = [];
        if (this.email !== null) {
            var stringDataEmailGet = this.email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.arrEmail.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
    };
    ReloadReportComponent.prototype.renderDataEmail = function ($event) {
        this.outPutEmail = [];
        this.dataEmail = [];
        this.dataEmail = $event;
        if (this.dataEmail.length > 0) {
            for (var i = 0; i < this.dataEmail.length; i++) {
                if (typeof this.dataEmail[i] === 'object')
                    this.outPutEmail.push(this.dataEmail[i].value);
                else if (typeof this.dataEmail[i] === 'string')
                    this.outPutEmail.push(this.dataEmail[i]);
            }
            var emailToString = this.outPutEmail.toString();
            this.form.patchValue({
                email: emailToString.replace(/,/g, ';')
            });
        }
        else {
            this.form.patchValue({
                email: null
            });
        }
    };
    ReloadReportComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.get('email').invalid) {
            this.submitted = true;
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.VALIDATION.enter_email_address_buyer, 'error');
            return;
        }
        this.submitted = false;
        this.checkSubmit = false;
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.handleService.apiReloadReport(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading(); }))
            .subscribe(function (value) {
            if (value.status === 'success') {
                _this.bsModalRef.content.successSaveItem = 'Reload';
                _this.bsModalRef.content.successSaveData = _this.form.value.email;
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.resend_report_success, 'success');
                _this.bsModalRef.hide();
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(value.message, 'error');
                _this.checkSubmit = true;
            }
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(error, 'error');
            _this.checkSubmit = true;
        });
    };
    ReloadReportComponent.prototype.close = function () {
        this.bsModalRef.hide();
    };
    ReloadReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reload-report',
            template: __webpack_require__(/*! ./reload-report.component.html */ "./src/app/modules/handle-report/shared/components/reload-report/reload-report.component.html"),
            styles: [__webpack_require__(/*! ./reload-report.component.scss */ "./src/app/modules/handle-report/shared/components/reload-report/reload-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_1__["HanldeReportService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]])
    ], ReloadReportComponent);
    return ReloadReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/send-report/send-report.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/send-report/send-report.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h5 class=\"modal-title\">{{_translate.CONTROLL.LABEL.cancel_reports}}</h5>\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form class=\"container\" [formGroup]=\"form\">\r\n    <div class=\"row\" style=\"position: relative\">\r\n      <label class=\"col-md-3 label-text-item text-right font-weight-bold pt-2 pb-4\">\r\n        {{_translate.CONTROLL.LABEL.reason_cancels}} <span\r\n        class=\"text-danger\">(*)</span>:\r\n      </label>\r\n      <div class=\"col-md-8 pl-0\">\r\n          <textarea rows=\"3\" class=\"p-1\" formControlName=\"cancel_reason\"\r\n                    placeholder=\"{{_translate.CONTROLL.LABEL.reason_cancel_report}}\" style=\"width: 100%\"></textarea>\r\n        <div\r\n          *ngIf=\"submitted || form.get('cancel_reason').invalid && form.get('cancel_reason').dirty \">\r\n          <div *ngIf=\"form.get('cancel_reason').errors?.required\">\r\n            <label style=\"display: inline-block; position: absolute; top:20px; right: -10px\"> <i\r\n              class=\"fa fa-exclamation-circle dx-icon text-danger\" style=\"font-size: 20px\"></i> </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-md-2\">\r\n      </div>\r\n      <div class=\"col-md-1 pr-0\" style=\"max-width: 4% !important;\">\r\n        <input type=\"checkbox\" id=\"checked-notify\" [checked]=\"checkedInputEmail\" (click)=\"checkStatusEmail()\">\r\n      </div>\r\n      <div class=\"col-md-9 pl-0\">\r\n        <label for=\"checked-notify\"\r\n               class=\"font-weight-bold\"> {{_translate.CONTROLL.LABEL.notify_cancel_report_for_customer}} :</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mb-2\" style=\"position: relative\">\r\n      <label class=\"col-md-3 label-text-item text-right font-weight-bold pt-2 pb-4\">\r\n        Email :\r\n      </label>\r\n      <div class=\"col-md-8 pl-0\">\r\n        <app-tag-input-email-bst [variableName]=\"this.emails\"\r\n                                 (numberGenerated)=\"renderDataEmail($event)\"></app-tag-input-email-bst>\r\n        <div\r\n          *ngIf=\"submitted || form.get('email').invalid && form.get('email').dirty \">\r\n          <div *ngIf=\"form.get('email').errors?.required\">\r\n            <label style=\"display: inline-block; position: absolute; top:10px; right: -10px\"> <i\r\n              class=\"fa fa-exclamation-circle dx-icon text-danger\" style=\"font-size: 20px\"></i> </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-right\">\r\n        <button type=\"button\" [disabled]=\"checkSubmit\" class=\"button-content-style\" (click)=\"submit()\">\r\n          <span> {{_translate.CONTROLL.BUTTON.send}}</span>\r\n        </button>\r\n        <button type=\"button\" class=\"button-content-style\" [disabled]=\"checkSubmit\" (click)=\"bsModalRef.hide()\">\r\n          <span>{{_translate.CONTROLL.BUTTON.come_back}}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/send-report/send-report.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/send-report/send-report.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 4px;padding:5px 10px 5px}\n"

/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/send-report/send-report.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/send-report/send-report.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SendReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportComponent", function() { return SendReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SendReportComponent = /** @class */ (function () {
    function SendReportComponent(authService, translate, handleReportService, fb, bsModalRef) {
        this.authService = authService;
        this.translate = translate;
        this.handleReportService = handleReportService;
        this.fb = fb;
        this.bsModalRef = bsModalRef;
        this.emails = [];
        this.arrEmail = [];
        this.submitted = false;
        this.checkSubmit = false;
        this.checkedInputEmail = true;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        this.translate.use(this._language);
    }
    SendReportComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group(this.handleReportService.formCancel);
        this.form.patchValue({
            id: this.id,
            email: this.dataEmail
        });
        this.emails = [];
        if (this.dataEmail !== null) {
            var stringDataEmailGet = this.dataEmail.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
    };
    SendReportComponent.prototype.renderDataEmail = function ($event) {
        this.arrEmail = [];
        this.emails = $event;
        if (this.emails.length > 0) {
            for (var i = 0; i < this.emails.length; i++) {
                if (typeof this.emails[i] === 'object')
                    this.arrEmail.push(this.emails[i].value);
                else if (typeof this.emails[i] === 'string')
                    this.arrEmail.push(this.emails[i]);
            }
            var emailToString = this.arrEmail.toString();
            this.dataEmail = emailToString.replace(/,/g, ';');
        }
        else {
            this.dataEmail = null;
        }
    };
    SendReportComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.get('cancel_reason').invalid) {
            this.submitted = true;
            return;
        }
        if (this.checkedInputEmail === true) {
            this.form.patchValue({
                email: this.dataEmail
            });
            if (this.form.get('email').invalid) {
                this.submitted = true;
                return;
            }
        }
        else {
            this.form.patchValue({
                email: null
            });
        }
        if (this.submitted === true) {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.enter_full_information, 'error');
        }
        this.submitted = false;
        this.checkSubmit = true;
        _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.handleReportService.apiCancelReport(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading(); }))
            .subscribe(function (value) {
            if (value.status === 'success') {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.cancel_report_done, 'success');
                _this.bsModalRef.content.successSaveItem = 'SuccessSendReport';
                _this.bsModalRef.hide();
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(value.message, 'error');
            }
        }, function (error) {
            _core_library__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(error, 'error');
        });
    };
    SendReportComponent.prototype.checkStatusEmail = function () {
        this.checkedInputEmail = !this.checkedInputEmail;
    };
    SendReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-report',
            template: __webpack_require__(/*! ./send-report.component.html */ "./src/app/modules/handle-report/shared/components/send-report/send-report.component.html"),
            styles: [__webpack_require__(/*! ./send-report.component.scss */ "./src/app/modules/handle-report/shared/components/send-report/send-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_2__["HanldeReportService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]])
    ], SendReportComponent);
    return SendReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/suggest-report/suggest-report.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/suggest-report/suggest-report.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.process_invoice}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-7\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item [label]=\"{text: _translate.GRID.INVOICE.template_code }\" dataField=\"template\"  [editorOptions]=\"{readOnly: true}\">\r\n              </dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n              <dxi-item dataField=\"invoice_date\" [label]=\"{text: _translate.GRID.INVOICE.invoice_date}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item cssClass=\"invoice-number-create-invoice\" dataField=\"invoice_number\" [label]=\"{text: _translate.GRID.INVOICE.invoice_number}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"customer_code\" [label]=\"{text: _translate.CONTROLL.LABEL.customer_code}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_tax_code\" [label]=\"{text: _translate.GRID.INVOICE.buyer_tax_code }\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_name\" [label]=\"{text: _translate.CONTROLL.LABEL.buyer_name }\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_mobile\" [label]=\"{text: _translate.CONTROLL.LABEL.phone }\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item dataField=\"buyer_name\" [label]=\"{text: _translate.CONTROLL.LABEL.customer_name}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <div class=\"col-lg-5\">\r\n          <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n              <dxi-item cssClass=\"form-input-visibility\" dataField=\"invoice_date\" [label]=\"{text: 'temp'}\"></dxi-item>\r\n              <!-- <dxi-item dataField=\"a\" [label]=\"{text: 'Số xác thực'}\" [editorOptions]=\"{disabled: true}\"></dxi-item> -->\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n                <dxi-item dataField=\"currency_code\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_code}\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: listDM.DM_LOAI_TIEN, displayExpr: 'name', valueExpr: 'code', readOnly: true}\"></dxi-item>\r\n              <dxi-item dataField=\"currency_rate\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_rate}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n            <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n                <dxi-item dataField=\"payment_method_name\" [label]=\"{text: _translate.CONTROLL.LABEL.payment_method}\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: listDM.DM_HINH_THUC_THANH_TOAN, displayExpr: 'name', valueExpr: 'code', readOnly: true}\"></dxi-item>\r\n              <dxi-item dataField=\"buyer_email\" [label]=\"{text: 'Email'}\" [editorOptions]=\"{disabled: true}\"></dxi-item>\r\n            </dxi-item>\r\n          </dx-form>\r\n        </div>\r\n        <!-- <div class=\"col-lg-12 link-send-invoice\">\r\n          <div class=\"pull-right\">\r\n            <a *ngIf=\"invoice.status == 'DA_XUAT'\" (click)=\"sendMail()\" href=\"javascript:void(0)\">{{_translate.CONTROLL.LABEL.send_invoice}}</a>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n    <dx-data-grid\r\n      id=\"invoiceHistoryGrid\"\r\n      [dataSource]=\"invoice_process\"\r\n      [showBorders]=\"true\"\r\n      [showRowLines]=\"true\"\r\n      [allowColumnResizing]=\"true\"\r\n      [columnResizingMode]=\"true\"\r\n      [wordWrapEnabled]=\"true\"\r\n    >\r\n      <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n      <dxi-column cellTemplate=\"stt\" caption=\"{{_translate.GRID.INVOICE_DETAILS.view_order}}\" width=\"80\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"process_time\" caption=\"{{_translate.CONTROLL.LABEL.date_made}}\" width=\"180\" dataType=\"datetime\" format=\"dd/MM/yyyy HH:mm:ss\" dateSerializationFormat=\"yyyy-MM-dd HH:mm:ss\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"content\" caption=\"{{_translate.CONTROLL.LABEL.task}}\" alignment=\"left\"></dxi-column>\r\n      <dxi-column dataField=\"user.name\" [width]=\"200\" caption=\"{{_translate.CONTROLL.LABEL.person_made}}\" alignment=\"left\"></dxi-column>\r\n      <div *dxTemplate=\"let d of 'stt'\">\r\n        <p>{{ d.rowIndex + 1 }}</p>\r\n      </div>\r\n    </dx-data-grid>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" icon=\"{{_translate.ICONS.come_back }}\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/suggest-report/suggest-report.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/suggest-report/suggest-report.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/handle-report/shared/components/suggest-report/suggest-report.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/components/suggest-report/suggest-report.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SuggestReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestReportComponent", function() { return SuggestReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuggestReportComponent = /** @class */ (function () {
    function SuggestReportComponent(authService, bsModalRef, vatService) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.frmData = {};
        this._translate = this.authService.getTranslate();
    }
    SuggestReportComponent.prototype.ngOnInit = function () {
        this.loadTableContent();
        var invoice = this.invoice;
        this.frmData.template = invoice.template.template_code + " - " + invoice.template.invoice_series;
        this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_1__(invoice.invoice_date).format('DD/MM/YYYY');
        this.frmData.invoice_number = invoice.invoice_number;
        this.frmData.customer_code = invoice.customer_code;
        this.frmData.buyer_tax_code = invoice.buyer_tax_code;
        this.frmData.buyer_name = invoice.buyer_name;
        this.frmData.buyer_mobile = invoice.buyer_mobile;
        this.frmData.buyer_email = invoice.buyer_email;
        this.frmData.currency_code = invoice.currency_code;
        this.frmData.payment_method_name = invoice.payment_method_name;
    };
    SuggestReportComponent.prototype.loadTableContent = function () {
        var _this = this;
        this.invoice_process = {};
        var sub = this.vatService.getInvoiceProccess(this.invoice.id).subscribe(function (rs) {
            _this.invoice_process = rs.data.invoice_process;
        }, function (err) {
        }, function () {
            sub.unsubscribe();
        });
    };
    SuggestReportComponent.prototype.sendMail = function () {
    };
    SuggestReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suggest-report',
            template: __webpack_require__(/*! ./suggest-report.component.html */ "./src/app/modules/handle-report/shared/components/suggest-report/suggest-report.component.html"),
            styles: [__webpack_require__(/*! ./suggest-report.component.scss */ "./src/app/modules/handle-report/shared/components/suggest-report/suggest-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"]])
    ], SuggestReportComponent);
    return SuggestReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/shared/create-report-resolver.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/create-report-resolver.service.ts ***!
  \********************************************************************************/
/*! exports provided: CreateReportResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReportResolverService", function() { return CreateReportResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateReportResolverService = /** @class */ (function () {
    function CreateReportResolverService(handleService, router) {
        this.handleService = handleService;
        this.router = router;
    }
    CreateReportResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var id = route.paramMap.get('id');
        var status = route.paramMap.get('status');
        return this.handleService.getAllDataToCreateReport(id, status)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
            if (data[0].status === 'success' && data[1].status === 'success' && data[2].status === 'success' && data[3].status === 'success') {
                return [
                    data[0].data.invoice,
                    data[1].data.invoice_reports,
                    data[2].data.invoice_reports,
                    data[3].data.configs
                ];
            }
            else {
                _this.router.navigate(['/']);
            }
        }));
    };
    CreateReportResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_4__["HanldeReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreateReportResolverService);
    return CreateReportResolverService;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/shared/report-resolver.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/handle-report/shared/report-resolver.service.ts ***!
  \*************************************************************************/
/*! exports provided: ReportResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportResolverService", function() { return ReportResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportResolverService = /** @class */ (function () {
    function ReportResolverService(router, handleService) {
        this.router = router;
        this.handleService = handleService;
    }
    ReportResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var id = route.paramMap.get('id');
        var status = route.paramMap.get('status');
        return this.handleService.getAllDataToIndex(id, status)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _core_library__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            if (data[0].status === 'success') {
                return [
                    data[0].data.invoice,
                    data[1].data.invoice_reports[0]
                ];
            }
            else {
                if (sessionStorage.hasOwnProperty('urlIndex')) {
                    if (sessionStorage.getItem('urlIndex') !== null) {
                        var url = sessionStorage.getItem('urlIndex');
                        _this.router.navigate([url]);
                    }
                    else {
                        _this.router.navigate(['/']);
                    }
                }
                else {
                    _this.router.navigate(['/']);
                }
            }
        }));
    };
    ReportResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_2__["HanldeReportService"]])
    ], ReportResolverService);
    return ReportResolverService;
}());



/***/ }),

/***/ "./src/app/modules/handle-report/view-report/view-report.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/handle-report/view-report/view-report.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <iframe  id=\"preview-iframe\" width=\"100%\" height=\"97%\" src=\"data:application/pdf;base64,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NVs2MzddNlsyMjZdN1s2MzBdOFs2NzZdOVs1NTBdMTBbNjA1XTExWzI2Nl0xMls2NTJdMTNbMjY2XTE0WzU5MV0xNVs0ODddMTZbNDk1XTE3Wzg3NF0xOFs2MzldMTlbNTM3XTIwWzQxOF0yMVsyNDVdMjJbNDkzXTIzWzUzNl0yNFszMDZdMjVbNjQ3XTI2WzUzNl0yN1s1MzddMjhbNDkzXTI5WzUzNl0zMFs1MzZdMzFbNTM2XTMyWzY3Nl0zM1s1NjBdMzRbNDg3XTM1WzYwNV0zNls1MTldMzdbNjc2XTM4WzY3Nl0zOVs3NjRdNDBbNDcyXTQxWzUzN100Mls1MzZdNDNbMjQ1XTQ0WzUwM100NVs0OTNdNDZbMjc1XTQ3WzUwNl00OFs1MDZdNDlbMzExXTUwWzQ5M101MVszMTFdNTJbNTM3XTUzWzQ3NF01NFszNDZdNTVbNDczXTU2WzUzN101N1s0OTNdNThbNTAzXTU5WzUzN102MFs0ODddNjFbNDU4XTYyWzQ5M102M1s4MTNdNjRbNTM2XTY1WzQ5M102Nls1NDZdNjdbNTAzXTY4WzQ3M102OVs0MjJdNzBbNDkzXTcxWzU2OF03Mls1MDNdNzNbNTM3XTc0WzQ3M103NVs0NTldNzZbNTM3XTc3WzUzN103OFs2MzJdNzlbNDkzXTgwWzQ5M104MVszOThdODJbNTA2XTgzWzUwNl04NFs0MjldODVbNDc5XTg2WzQ3M104N1s1MDZdODhbNTA2XTg5WzYzMF05MFs1MDZdOTFbNTA2XTkyWzUwNl05M1s1MDNdOTRbNTM2XTk1WzI0NV05NlsyNjddXS9DSURTeXN0ZW1JbmZvIDw8L09yZGVyaW5nKElkZW50aXR5KS9SZWdpc3RyeShBZG9iZSkvU3VwcGxlbWVudCAwPj4+Pg0KZW5kb2JqDQo5IDAgb2JqDQo8PC9UeXBlIC9Gb250RGVzY3JpcHRvci9Gb250TmFtZSAvRkFBQUFIK0NhbGlicmktQm9sZC9TdGVtViA4MC9EZXNjZW50IC0yNjgvQXNjZW50IDk1Mi9DYXBIZWlnaHQgNjMxL0ZsYWdzIDI2MjE3Ni9JdGFsaWNBbmdsZSAwL0ZvbnRCQm94IFstNTE4IC0zMDYgMTI0MCAxMDM5XS9Gb250RmlsZTIgNiAwIFI+Pg0KZW5kb2JqDQoxMCAwIG9iag0KPDwvTGVuZ3RoIDIxIDAgUi9GaWx0ZXIgL0ZsYXRlRGVjb2RlPj5zdHJlYW0NCnicXZXLjtpAEEX3SPyDl5PFCPplDxJCMn5ILPJQSD6AsRtiKRjLmAV/H/ftW6NoWIAu1VVdp267vSoO5aHvpmT1Y7w1Rz8l565vR3+/PcbGJ+/+0vXLhVJJ2zWTSPw019OwXKzm/OPzPvnroT/flovtNln9nMP3aXwmL3l7e/df5lXfx9aPXX9JXn4Xx/DH8TEMf/3V91OyXi52u6T151Dt62n4drr6ZIXU10M7r+im5+uc9t+SX8/BJzr+oWJXza319+HU+PHUX/zcyHr+7Lb1/NktF75vPy/YZDHx/dz8OY2fE4JSu/nbKioNZajMbquq8o3KIlZROaiMKg1Kr6kyxCTvLahSU22CchLLgypkvz3yNlRF2L1Kqco5prTkVagisTqsLKjUGjFLFflKqsCnFPtUkY/7KfCl7EWBLy2o0rAylyrgy6QK+LTENmFlzXkq8KXSC/hSTl6BL5eVJWKcrgJfSlpVB1XnUWnwWVbRkY/T1fCvkJXgyyUGPkda7TAz7qfhX0l2HfhUTj4NPicx8JXsWkc+2SHyyQ5FUJX0UqIXqQI+IzHwGcYM+AxrGvCJ7wZ8FXefM2JHUYGv5qxN9I/n04Avk1j0T/LeQOSowJdLXo4pidpD0WkDPit58M/yDJron/QJvpR5FnwZ8yz4Ks7axudvTwX/9nTaWpwsdm3j88fzaeP5lJrwT3F3Cz55xmz0TxT8y9i1hX8ZZ23BV8tK+FdILxVOiOwAvoor3Rq9kMGBL5MY+AxpHfwzrOLgn+YOLvonVeBfzQk6+GdI63A+Dbt2uF8snXbgM6LAZ+imA5/hPF18/qQm/Muks3i/sJcU/ukqXrhysYa7F++Kj8u9eYzjfK/jlYL7PNzkXe8/XjvDbUAev/4Bfr9yXw0KZW5kc3RyZWFtDQplbmRvYmoNCjIxIDAgb2JqDQo2NzIgDQplbmRvYmoNCjExIDAgb2JqDQo8PC9UeXBlIC9Gb250L1N1YnR5cGUgL1RydWVUeXBlL0Jhc2VGb250IC9GQUFBQkIrQ2FsaWJyaS1Cb2xkL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcvRmlyc3RDaGFyIDMyL0xhc3RDaGFyIDI1My9XaWR0aHMgWzIyNiAzMjUgNDM4IDQ5OCA1MDYgNzI5IDcwNCAyMzMgMzExIDMxMSA0OTggNDk4IDI1NyAzMDYgMjY3IDQyOSA1MDYgNTA2IDUwNiA1MDYgNTA2IDUwNiA1MDYgNTA2IDUwNiA1MDYgMjc1IDI3NSA0OTggNDk4IDQ5OCA0NjMgODk4IDYwNSA1NjAgNTI5IDYzMCA0ODcgNDU4IDYzNyA2MzAgMjY2IDMzMSA1NDYgNDIyIDg3NCA2NTggNjc2IDUzMiA2ODYgNTYyIDQ3MiA0OTUgNjUyIDU5MSA5MDYgNTUwIDUxOSA0NzggMzI0IDQyOSAzMjQgNDk4IDQ5OCAzMDAgNDkzIDUzNiA0MTggNTM2IDUwMyAzMTYgNDc0IDUzNiAyNDUgMjU1IDQ3OSAyNDUgODEzIDUzNiA1MzcgNTM2IDUzNiAzNTUgMzk4IDM0NiA1MzYgNDczIDc0NSA0NTkgNDczIDM5NyAzNDMgNDc1IDM0MyA0OTggMCA1MDYgMCAyNTcgMzE2IDQzNSA3MTEgNDk4IDQ5OCA0MDEgMTA2MSA0NzIgMzQ0IDg3NCAwIDQ3OCAwIDAgMjU3IDI1NyA0MzUgNDM1IDQ5OCA0OTggOTA1IDQ0NCA3MjAgMzk4IDM0NCA4NDIgMCAzOTcgNTE5IDAgMzI1IDQ5OCA1MDYgNDk4IDUwNiA0OTggNDk4IDQxNCA4MzQgNDE2IDUzOCA0OTggMCA1MDYgMzkwIDM0MiA0OTggMzM3IDMzNSAzMDAgNTYzIDU5NyAyNjcgMzAzIDI1MiA0MzUgNTM4IDY1NyA2OTAgNzAxIDQ2MyA2MDUgNjA1IDYwNSA2MDUgNjA1IDYwNSA3NzUgNTI5IDQ4NyA0ODcgNDg3IDQ4NyAyNjYgMjY2IDI2NiAyNjYgNjM5IDY1OCA2NzYgNjc2IDY3NiA2NzYgNjc2IDQ5OCA2ODAgNjUyIDY1MiA2NTIgNjUyIDUxOSA1MzIgNTU0IDQ5MyA0OTMgNDkzIDQ5MyA0OTMgNDkzIDc3NCA0MTggNTAzIDUwMyA1MDMgNTAzIDI0NSAyNDUgMjQ1IDI0NSA1MzYgNTM2IDUzNyA1MzcgNTM3IDUzNyA1MzcgNDk4IDU0MyA1MzYgNTM2IDUzNiA1MzYgNDczIF0vRm9udERlc2NyaXB0b3IgMTIgMCBSPj4NCmVuZG9iag0KMTIgMCBvYmoNCjw8L1R5cGUgL0ZvbnREZXNjcmlwdG9yL0ZvbnROYW1lIC9GQUFBQkIrQ2FsaWJyaS1Cb2xkL1N0ZW1WIDgwL0Rlc2NlbnQgLTI2OC9Bc2NlbnQgOTUyL0NhcEhlaWdodCA2MzEvRmxhZ3MgMjYyMTc2L0l0YWxpY0FuZ2xlIDAvRm9udEJCb3ggWy01MTggLTMwNiAxMjQwIDEwMzldL0ZvbnRGaWxlMiA2IDAgUj4+DQplbmRvYmoNCjE2IDAgb2JqDQo8PC9UeXBlIC9Gb250L1N1YnR5cGUgL1R5cGUwL0VuY29kaW5nIC9JZGVudGl0eS1IL0Jhc2VGb250IC9GQUFBQkcrQ2FsaWJyaS9EZXNjZW5kYW50Rm9udHMgWzE3IDAgUl0vVG9Vbmljb2RlIDE5IDAgUj4+DQplbmRvYmoNCjE3IDAgb2JqDQo8PC9UeXBlIC9Gb250L1N1YnR5cGUgL0NJREZvbnRUeXBlMi9CYXNlRm9udCAvRkFBQUJHK0NhbGlicmkvQ0lEVG9HSURNYXAgL0lkZW50aXR5L0ZvbnREZXNjcmlwdG9yIDE4IDAgUi9EVyAxMDAwL1cgWzBbNTA2XTFbNTc4XTJbMzA2XTNbMjI2XTRbNTMzXTVbNDc5XTZbNTI1XTdbNDIyXThbNjAyXTlbNjQ1XTEwWzQ3MF0xMVs1MjVdMTJbMjI5XTEzWzU1MV0xNFs1MDZdMTVbNTA2XTE2WzM4Nl0xN1s1MDZdMThbNTA2XTE5WzYyNF0yMFs1MTZdMjFbNDc5XTIyWzQ1Ml0yM1s1MDZdMjRbNTI1XTI1WzQ3OV0yNlsyMjldMjdbNTI1XTI4WzUyNV0yOVs1MjVdMzBbNDUxXTMxWzQ5N10zMls1MjddMzNbNDc5XTM0WzU3OF0zNVs1MjVdMzZbMjQ5XTM3WzUyNV0zOFs1MjVdMzlbMjUyXTQwWzUwNl00MVszOTFdNDJbNjAyXTQzWzUyN100NFsyMjldNDVbNzk4XTQ2WzUyN100N1szMzRdNDhbNTI3XTQ5WzQ4N101MFs1MjddNTFbNjAyXTUyWzUwNl01M1s1MDZdNTRbNTQzXTU1WzU3OF01Nls0NzldNTdbNjIzXTU4WzQ3OV01OVs0OTddNjBb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NDYwIDMxNCA0OTggMCA1MDYgMCAyNDkgMzA1IDQxOCA2OTAgNDk4IDQ5OCAzOTUgMTAzOCA0NTkgMzM4IDg2NiAwIDQ2OCAwIDAgMjQ5IDI0OSA0MTggNDE4IDQ5OCA0OTggOTA1IDQ1MCA3MDUgMzkxIDMzOCA4NDkgMCAzOTUgNDg3IDAgMzI1IDQ5OCA1MDYgNDk4IDUwNiA0OTggNDk4IDM5MiA4MzQgNDAyIDUxMiA0OTggMCA1MDYgMzk0IDMzOCA0OTggMzM1IDMzNCAyOTEgNTQ5IDU4NSAyNTIgMzA3IDI0NiA0MjIgNTEyIDYzNiA2NzEgNjc1IDQ2MyA1NzggNTc4IDU3OCA1NzggNTc4IDU3OCA3NjMgNTMzIDQ4OCA0ODggNDg4IDQ4OCAyNTEgMjUxIDI1MSAyNTEgNjI0IDY0NSA2NjIgNjYyIDY2MiA2NjIgNjYyIDQ5OCA2NjMgNjQxIDY0MSA2NDEgNjQxIDQ4NyA1MTYgNTI3IDQ3OSA0NzkgNDc5IDQ3OSA0NzkgNDc5IDc3MiA0MjIgNDk3IDQ5NyA0OTcgNDk3IDIyOSAyMjkgMjI5IDIyOSA1MjUgNTI1IDUyNyA1MjcgNTI3IDUyNyA1MjcgNDk4IDUyOSA1MjUgNTI1IDUyNSA1MjUgNDUyIF0vRm9udERlc2NyaXB0b3IgMTUgMCBSPj4NCmVuZG9iag0KMTUgMCBvYmoNCjw8L1R5cGUgL0ZvbnREZXNjcmlwdG9yL0ZvbnROYW1lIC9GQUFBQkUrQ2FsaWJyaS9TdGVtViA4MC9EZXNjZW50IC0yNjgvQXNjZW50IDk1Mi9DYXBIZWlnaHQgNjMxL0ZsYWdzIDMyL0l0YWxpY0FuZ2xlIDAvRm9udEJCb3ggWy01MDIgLTMwNyAxMjQxIDEwMjZdL0ZvbnRGaWxlMiAxMyAwIFI+Pg0KZW5kb2JqDQo2IDAgb2JqDQo8PC9MZW5ndGgxIDIzIDAgUi9MZW5ndGggMjQgMCBSL0ZpbHRlciAvRmxhdGVEZWNvZGU+PnN0cmVhbQ0KeJzUvQlcXNX5N37OvbPv+wozd/aBgRkYdkhgQoBAEhICSQQNCQRIwJBAWBITjUZbtY2mta5V617bWrWSSYyjcavGpWpsq1ar1iWtbdVKa11qXZj5P+eemQFiav311/f9f96QZ77n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KFNpZ25hdHVyZTEpL1YgMjcgMCBSL0YgMTMyL1R5cGUvQW5ub3QvU3VidHlwZS9XaWRnZXQvUmVjdFszOTEgNzkgNTYzIDE1MV0vQVA8PC9OIDM1IDAgUj4+L1AgNCAwIFIvRFI8PC9YT2JqZWN0PDwvRlJNIDM0IDAgUj4+Pj4+PgplbmRvYmoKMjcgMCBvYmoKPDwvVHlwZS9TaWcvRmlsdGVyL0Fkb2JlLlBQS01TL1N1YkZpbHRlci9hZGJlLnBrY3M3LnNoYTEvTShEOjIwMTkxMjA1MDAwMDAwKzA3JzAwJykvTmFtZSj+/wBDAPQAbgBnACAAdAB5ACAARQBGAFkAIABWAGkexwB0ACAATgBhAG0AIAAtACAAVABFAFMAVAAxKS9SZWFzb24oKS9Mb2NhdGlvbigpL0J5dGVSYW5nZSBbMCA1OTgxNiA2NzgxOCAyNzI4MiBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9Db250ZW50cyA8MzA4MjA2ZDUwNjA5MmE4NjQ4ODZmNzBkMDEwNzAyYTA4MjA2YzYzMDgyMDZjMjAyMDEwMTMxMGIzMDA5MDYwNTJiMGUwMzAyMWEwNTAwMzAyMzA2MDkyYTg2NDg4NmY3MGQwMTA3MDFhMDE2MDQxNGVhMTcyYzMxN2RjNDcwZjk4NzM0YTQ0MzlkNmZmNDc0YTBkNDBkMmRhMDgyMDRkOTMwODIwNGQ1MzA4MjAzYmRhMDAzMDIwMTAyMDIxMDU0MDEwMTEwMmUxZWQzMjlhMzk0NTY4Nzg0Mjk3MDMxMzAwZDA2MDkyYTg2NDg4NmY3MGQwMTAxMDUwNTAwMzA3MDMxMGIzMDA5MDYwMzU1MDQwNjEzMDI1NjRlMzEzZjMwM2QwNjAzNTUwNDBhMTMzNjU2Njk2NTc0NmU2MTZkMjA0NTQ2NTkyMDQ5NmU2NjZmNzI2ZDYxNzQ2OTYzNzMyMDU0NjU2MzY4NmU2ZjZjNmY2Nzc5MjA0YTZmNjk2ZTc0MjA1Mzc0NmY2MzZiMjA0MzZmNmQ3MDYxNmU3OTMxMGYzMDBkMDYwMzU1MDQwYjEzMDY0NTQ2NTkyZDQzNDEzMTBmMzAwZDA2MDM1NTA0MDMxMzA2NDU0NjU5MmQ0MzQxMzAxZTE3MGQzMTM5MzEzMDMyMzkzMDMyMzEzMzMzMzY1YTE3MGQzMjMwMzEzMDMyMzgzMDMyMzEzMzMzMzY1YTMwODFhZTMxMGIzMDA5MDYwMzU1MDQwNjEzMDI1NjRlMzExMjMwMTAwNjAzNTUwNDA4MGMwOTQ4YzNhMDIwNGVlMWJiOTk2OTMxMTczMDE1MDYwMzU1MDQwNzBjMGU0M2MzODJjYzgwNTUyMDQ3NDljMzgyY2M4MTU5MzEyODMwMjYwNjAzNTUwNDBhMGMxZjQzYzNiNDZlNjcyMDc0NzkyMDQ1NDY1OTIwNTY2OWUxYmI4Nzc0MjA0ZTYxNmQyMDJkMjA1NDQ1NTM1NDMxMzEyODMwMjYwNjAzNTUwNDAzMGMxZjQzYzNiNDZlNjcyMDc0NzkyMDQ1NDY1OTIwNTY2OWUxYmI4Nzc0MjA0ZTYxNmQyMDJkMjA1NDQ1NTM1NDMxMzExZTMwMWMwNjBhMDk5MjI2ODk5M2YyMmM2NDAxMDEwYzBlNGQ1MzU0M2EzOTM5MzkzOTM5MzkzOTM5MzkzOTMwODIwMTIyMzAwZDA2MDkyYTg2NDg4NmY3MGQwMTAxMDEwNTAwMDM4MjAxMGYwMDMwODIwMTBhMDI4MjAxMDEwMGRkNTkyMWRiMGU2Y2NiMjg3ZWJlZDdmYTM2N2M1ZDJiZmZhOWM3MDUzOGY4ZWExNzgwNjJkNTZlMTljZDU2YTY4MGVhZjZhZTUzYTM2YzgwZWU3YzVlZTIwMDU2OTcxNzI4OTM5ZTVhNWFiMjc4MTllYThhMmU3MjBhOGVlMDBhYjRjMjM4NjUzNGQzNTEzYTBkZmM4NTI1N2UwODkxZDE2MmY0MzQ1NzhhODFjYjMxYjk4ZGYzNDRiMjY3YjkyODg5ZGU0MjFhMjYyNWJmMTQ3NDJiMmRlN2M2ZWRhODY3ZTkwOWVmMzBjZTBiMGZkOTgwMDJkMTM0NGFlNTI1MDkyNmY0Yzk5MjQxZjA0ZDZjYzkzMjcyNGRiZmRkZjkzOGRlY2VkMjYyOGY4MTE2YjRkYTM3ZTRlYWM5ZmJjNGVjNDZhMjE4NzdjYjJkNTQxMDZhOWNjZDFkZjNkMWZkYTA1ZDRkN2IzMmFhZTVkOTQwOGZkMGUzMWQ2ZjE0YTdjNDc2N2I2Y2UxYzYzNjRmYjBkZjM0YTAxMGViZjE3MWM2YzFmYWM2ZWI2MGMwYjQ0OWYyNDQwNTYwNzUwMjc1NmZjM2VkZGUxZTVlMWQ4N2U3NmJlZGEzNjVhYmM4ZTY4YjRhMDVmZTUzZGEwYjhjYTU0Y2U1MmFjMTFiMjNkZjU5MDIwMzAxMDAwMWEzODIwMTJhMzA4MjAxMjYzMDBjMDYwMzU1MWQxMzAxMDFmZjA0MDIzMDAwMzAxZjA2MDM1NTFkMjMwNDE4MzAxNjgwMTRhNTFiZDQyYTQwZTVlMDM3ZWQ5NDU2YzlhMjkzZmM0ODM1ZjNiOWQzMzA2MDA2MDgyYjA2MDEwNTA1MDcwMTAxMDQ1NDMwNTIzMDJlMDYwODJiMDYwMTA1MDUwNzMwMDI4NjIyNjg3NDc0NzAzYTJmMmY3NjYxMmU2NTY2Nzk2MzYxMmU3NjZlMmY2MzY1NzI3NDczMmY2NTY2Nzk2MzYxMmU2MzcyNzQzMDIwMDYwODJiMDYwMTA1MDUwNzMwMDE4NjE0Njg3NDc0NzAzYTJmMmY2ZjYzNzM3MDJlNjU2Njc5NjM2MTJlNzY2ZTMwMTgwNjAzNTUxZDIwMDQxMTMwMGYzMDBkMDYwYjJiMDYwMTA0MDE4MWVkMDMwMTBhMDEzMDFkMDYwMzU1MWQyNTA0MTYzMDE0MDYwODJiMDYwMTA1MDUwNzAzMDIwNjA4MmIwNjAxMDUwNTA3MDMwNDMwMmIwNjAzNTUxZDFmMDQyNDMwMjIzMDIwYTAxZWEwMWM4NjFhNjg3NDc0NzAzYTJmMmY3NjYxMmU2NTY2Nzk2MzYxMmU3NjZlMmY3MDc1NjIyZjQzNTI0YzMwMWQwNjAzNTUxZDBlMDQxNjA0MTRmNzE5N2FkYTdhMDRlY2U5OWJjZGE1MzI0YmNhOWYyMGQ4ZGNjYjE0MzAwZTA2MDM1NTFkMGYwMTAxZmYwNDA0MDMwMjA1ZTAzMDBkMDYwOTJhODY0ODg2ZjcwZDAxMDEwNTA1MDAwMzgyMDEwMTAwYTdlYWNlYmVhNTYzZjYxYjliZDk1YWRiNTVhMzMwMjg1OWQwZGViN2Y2Y2NkOTBiZjZlMjVjZGYyOWVjMTkwZmI1YWJhNmE0Yzk2Mzk4NjE0MGM1OGQ1OTUxNzQyYjU0NGUzOWU5NmNmNDFjMTM3NzY2NDQ1NWEwY2VkOWI4Njk0ZDAzN2ZmYzExNzBlY2JhMDViZmE5NzE5MWM2NGFmYzVjZmU0MmIwOTUyNDJlZjM2ZGMyMjBiNzAxMjI4ZjM2Yzk2ZmNiY2VjN2ViZTYyMjE5ZGMxMDVkNjMxNTU1YjMxYTlkMGU4MDY2Njg0YWYxZWU0ZjRiZjQxMTZhYmRlNjQ3ZDA0MDZkODMzYjRlYmM1MTQ3YWI0MzNlMGE2OGMxN2U2YjFkNDAyZDAzMjdhODExYjZiNWUzYmQxZjBjZjE1YTc2MGRlNmE0OGFiYjZjODVmODdlOWUxNDg5YzIxZDVhZjA2M2IzNmViODhjZGY0YzBhMzJhM2E4ZTA2NGEzNjgzMWRkYjUyOGVhNGRhNmE3NDI0MWZhNzljYjI5ZWI2YmYxZTliMzBiZjk3NjJmYzBhYTQ3Mzg2ZGJlNDY1MmI4ODAzYTA1ZmEzNmY0MThlNjc1NGJhN2NjMDEzZWJkZjliMmRlOTU2ZjU4NmNjOGM4YTA1M2VjNzIyYmFiNDMzMTgyMDFhYzMwODIwMWE4MDIwMTAxMzA4MTg0MzA3MDMxMGIzMDA5MDYwMzU1MDQwNjEzMDI1NjRlMzEzZjMwM2QwNjAzNTUwNDBhMTMzNjU2Njk2NTc0NmU2MTZkMjA0NTQ2NTkyMDQ5NmU2NjZmNzI2ZDYxNzQ2OTYzNzMyMDU0NjU2MzY4NmU2ZjZjNmY2Nzc5MjA0YTZmNjk2ZTc0MjA1Mzc0NmY2MzZiMjA0MzZmNmQ3MDYxNmU3OTMxMGYzMDBkMDYwMzU1MDQwYjEzMDY0NTQ2NTkyZDQzNDEzMTBmMzAwZDA2MDM1NTA0MDMxMzA2NDU0NjU5MmQ0MzQxMDIxMDU0MDEwMTEwMmUxZWQzMjlhMzk0NTY4Nzg0Mjk3MDMxMzAwOTA2MDUyYjBlMDMwMjFhMDUwMDMwMGQwNjA5MmE4NjQ4ODZmNzBkMDEwMTAxMDUwMDA0ODIwMTAwMmViYWVlMjRkNzJkNGJkZjc2MjJlZjk1MDBmN2U3MzcxMjAwY2Q1ZmQxYWU3NDFmNWMzMjQ0ZjU5MDkwZWVkMzhiM2U0NTM5ODkwMGVhMGNkZGE3YjYxNzRkNWI0OGQxYTA2NDNmMzI0NmZiNjNhMThlNWMxOTZjMWMwYTA2MTAxYzczZGYzYjBhNmQwZWRjYjJhOWQ5YTMzNWIzMWYzZjVhYTZmNTgwODBkNjI4ZTU4NzRjY2VlMzI1MTcyYjg5N2ZjOWM1YjYzMjlkNDZjNmMyODc1MWMxZTU0YWU1MWQ1MmRhYmM5ZmFmZjRhOWJhMmY0ZDE0ZjBmZDRkOTFkOTY3ZmY4NjI4NjljM2ExZTAyN2I4MWJjZGZjNmQxMWM2NWE3MjFjOTQzNDc3MDllNDBkYTIxNWFiNWUxNjRlN2MyZmU1YzcwZGVkOTIxODk3ZjlmYTY4MmE0NzkyODRhNmEyMTE0NzY2ZjRlOThiMTUzODIwOGYxYWY1YzA1MmRlMTFmMzNkZWMzZDRjOGNmMDBmYTk3ZWJiNjIxYjNhOTJlODA0MWY2MDE0MTZkNzZmMGNlOGU5YzM3ZjhlN2Y0YWU2N2NhYzg2ZGNmZWJmZjIyNDkxM2UzZTc5ZTBkYmZlZjk0M2YzYjM0YzM3MDE1NzliOGQxZTM0YzViYmNlMWUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAw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cyAzPj4+PgplbmRvYmoKeHJlZgowIDUKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDkzNzk2IDAwMDAwIG4gCjAwMDAwOTQzNDggMDAwMDAgbiAKMDAwMDA5NDI4NSAwMDAwMCBuIAowMDAwMDk0MDQ1IDAwMDAwIG4gCjI3IDE2CjAwMDAwNTk1MzggMDAwMDAgbiAKMDAwMDA5MjYyOSAwMDAwMCBuIAowMDAwMDkyODQ5IDAwMDAwIG4gCjAwMDAwNTE5NjIgMDAwMDAgbiAKMDAwMDA1MzYyOCAwMDAwMCBuIAowMDAwMDU2MzE2IDAwMDAwIG4gCjAwMDAwOTI0OTkgMDAwMDAgbiAKMDAwMDA5MzI3NiAwMDAwMCBuIAowMDAwMDkzNTQzIDAwMDAwIG4gCjAwMDAwNTkzODAgMDAwMDAgbiAKMDAwMDA2NzgyOCAwMDAwMCBuIAowMDAwMDY3OTI3IDAwMDAwIG4gCjAwMDAwNjgwMDQgMDAwMDAgbiAKMDAwMDA5MTQ1MCAwMDAwMCBuIAowMDAwMDkxNjMyIDAwMDAwIG4gCjAwMDAwOTIwMzQgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDQzL1Jvb3QgMiAwIFIvSW5mbyAxIDAgUi9JRCBbPDBlZmFjODJjZDc3Yzk2NDJjMWU5MjY5YmNhNmIwMDRkPjxlZmYzMWU3NWM0ZjU5NGI0NTI1YTZlNTkxOTVkNWVlOD5dL1ByZXYgNTEzMzk+PgpzdGFydHhyZWYKOTQ1MTUKJSVFT0YK\"></iframe>\r\n</div>\r\n<div class=\"design-button\">\r\n  <div style=\"width: 50%; display: inline-block; float: left\">\r\n    <div class=\"dropdown\">\r\n      <button type=\"button\" class=\"dropbtn button-content-style\">\r\n        <a href=\"javascript:void(0)\" class=\"text-button\">Xử lý hóa đơn</a>\r\n      </button>\r\n      <div class=\"dropdown-content\" style=\"left:0;\">\r\n        <!-- <a href=\"javascript:void(0)\" onclick=\"setConfirmInvoice()\">Hủy bỏ hóa đơn</a>\r\n        <a href=\"javascript:void(0)\" onclick=\"setConfirmInvoice2()\">Thay thế hóa đơn</a>\r\n        <a href=\"javascript:void(0)\" onclick=\"setConfirmInvoice3()\">Điều chỉnh hóa đơn</a>\r\n        <a href=\"javascript:void(0)\" onclick=\"setConfirmInvoice4()\">Hướng dẫn xử lý</a> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"width: 50%; display: inline-block; float:rigth;\">\r\n    <div style=\"float: right\">\r\n      <button type=\"button\" class=\"button-content-style\">\r\n        <a href=\"javascript:void(0)\" class=\"text-button\">Sao chép</a>\r\n      </button>\r\n      <button type=\"button\" class=\"button-content-style\">\r\n        <a href=\"javascript:void(0)\" class=\"text-button\">In chuyển đổi</a>\r\n      </button>\r\n      <button type=\"button\" class=\"button-content-style\">\r\n        <a href=\"javascript:void(0)\" class=\"text-button\">Gửi hóa đơn</a>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/handle-report/view-report/view-report.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/handle-report/view-report/view-report.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-button{color:#fff;text-decoration:none}.design-button{position:fixed;bottom:0;left:0;right:0;padding:32px 25px;background:white}.button-content-style{background-color:#337ab7;color:#fff;border:1px solid #2d6da3;margin:0 10px;padding:5px 10px 5px}.dropdown{position:relative;display:inline-block}.dropdown-content{display:none;position:absolute;bottom:28px;background-color:#f9f9f9;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1}.dropdown-content a{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown-content a:hover{background-color:#b5acac}.dropdown:hover .dropdown-content{display:block}.dropdown:hover .dropbtn{background-color:#2d6da3}\n"

/***/ }),

/***/ "./src/app/modules/handle-report/view-report/view-report.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/handle-report/view-report/view-report.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewReportComponent", function() { return ViewReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewReportComponent = /** @class */ (function () {
    function ViewReportComponent(router, handleService, route) {
        this.router = router;
        this.handleService = handleService;
        this.route = route;
    }
    ViewReportComponent.prototype.ngOnInit = function () {
        // this.route.data
        //   // .pipe(map(value => value.CreateReportResolverService))
        //   .subscribe(value => {
        //     this.pdf_file= value.ViewReportResolverService[0].file_content
        //     console.log(value.ViewReportResolverService[0].file_content);
        //   }, error => {
        //     console.log(error);
        //   });
        var _this = this;
        this.routeSub = this.route.data.subscribe(function (data) {
            // //put data DM for select
            _this.pdf_file = "https://www.youtube.com/watch?v=eJ6MSv8Svgo"; // 'data:application/pdf;base64,' +data.ViewReportResolverService[0].file_content;
            // console.log(this.pdf_file);
            // this.iframe = document.getElementById('preview-iframe');
            // this.iframe.contentDocument.open("application/pdf", "replace");
            // this.iframe.contentDocument.write(data.ViewReportResolverService[0].file_content);
            // this.iframe.contentDocument.close();
        });
    };
    ViewReportComponent.prototype.ngAfterViewInit = function () {
        // this.routeSub = this.route.data.subscribe((data: any) => {
        //   //put data DM for select
        //   this.pdf_file = 'data:application/pdf;base64,' +data.ViewReportResolverService[0].file_content;
        //   console.log(this.pdf_file);
        // });
    };
    ViewReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-report',
            template: __webpack_require__(/*! ./view-report.component.html */ "./src/app/modules/handle-report/view-report/view-report.component.html"),
            styles: [__webpack_require__(/*! ./view-report.component.scss */ "./src/app/modules/handle-report/view-report/view-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_2__["HanldeReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ViewReportComponent);
    return ViewReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/info-unit/shared/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/info-unit/shared/index.ts ***!
  \***************************************************/
/*! exports provided: InfoUnitService, InfoUnitResolver, InfoUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_unit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-unit.service */ "./src/app/modules/info-unit/shared/info-unit.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoUnitService", function() { return _info_unit_service__WEBPACK_IMPORTED_MODULE_0__["InfoUnitService"]; });

/* harmony import */ var _info_unit_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-unit.resolver */ "./src/app/modules/info-unit/shared/info-unit.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoUnitResolver", function() { return _info_unit_resolver__WEBPACK_IMPORTED_MODULE_1__["InfoUnitResolver"]; });

/* harmony import */ var _info_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-unit */ "./src/app/modules/info-unit/shared/info-unit.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoUnit", function() { return _info_unit__WEBPACK_IMPORTED_MODULE_2__["InfoUnit"]; });






/***/ }),

/***/ "./src/app/modules/info-unit/shared/info-unit.resolver.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/info-unit/shared/info-unit.resolver.ts ***!
  \****************************************************************/
/*! exports provided: InfoUnitResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUnitResolver", function() { return InfoUnitResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _info_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-unit.service */ "./src/app/modules/info-unit/shared/info-unit.service.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InfoUnitResolver = /** @class */ (function () {
    function InfoUnitResolver(infoUnitService, router) {
        this.infoUnitService = infoUnitService;
        this.router = router;
    }
    InfoUnitResolver.prototype.resolve = function (route, state) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        return this.infoUnitService.getDataSelect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            if (rs.status == "success") {
                return rs.data;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, "error");
                _this.router.navigate(['/']);
                return null;
            }
        }));
    };
    InfoUnitResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_info_unit_service__WEBPACK_IMPORTED_MODULE_3__["InfoUnitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InfoUnitResolver);
    return InfoUnitResolver;
}());



/***/ }),

/***/ "./src/app/modules/info-unit/shared/info-unit.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/info-unit/shared/info-unit.service.ts ***!
  \***************************************************************/
/*! exports provided: InfoUnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUnitService", function() { return InfoUnitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoUnitService = /** @class */ (function () {
    function InfoUnitService(apiService, coreService) {
        this.apiService = apiService;
        this.coreService = coreService;
    }
    InfoUnitService.prototype.getInfo = function (id) {
        return this.apiService.get('/accounts/' + id);
    };
    InfoUnitService.prototype.getDataSelect = function () {
        return this.apiService.get('/get-lists-by-listtype-code/DM_TINH_THANH,DM_CO_QUAN_THUE');
    };
    InfoUnitService.prototype.updateInfo = function (data, id) {
        return this.apiService.put('/accounts/' + id, data);
    };
    InfoUnitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["CoreService"]])
    ], InfoUnitService);
    return InfoUnitService;
}());



/***/ }),

/***/ "./src/app/modules/info-unit/shared/info-unit.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/info-unit/shared/info-unit.ts ***!
  \*******************************************************/
/*! exports provided: InfoUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUnit", function() { return InfoUnit; });
var InfoUnit = /** @class */ (function () {
    function InfoUnit() {
        this['name'] = '';
        this['account_type'] = '';
        this['tax_province_code'] = '';
        this['tax_district_code'] = '';
        this['business_address'] = '';
        this['transaction_address'] = '';
        this['phone'] = '';
        this['email'] = '';
        this['fax'] = '';
        this['website'] = '';
        this['surrogate_name'] = '';
        this['surrogate_position'] = '';
        this['submitted_person_name'] = '';
        this['contact_person_name'] = '';
        this['contact_mobile'] = '';
        this['tax_department'] = '';
        this['company_type'] = '';
        this['bank_name'] = '';
        this['bank_account_number'] = '';
        this['company_email'] = '';
        this['cert_serial'] = '';
        this['cert_valid_from'] = '';
        this['cert_valid_to'] = '';
        this['cert_provider'] = '';
        this['cert_content'] = '';
        this['icc_token'] = '';
        this['report_period'] = '';
        this['time_study'] = 0;
        this['start_time_study'] = 0;
        this['end_time_study'] = 0;
        this['time_used_xml_new'] = '';
        this['xml_type'] = 1;
        this['tax_code'] = '';
        this['verify_code'] = '';
    }
    return InfoUnit;
}());



/***/ })

}]);
//# sourceMappingURL=handle-report-handle-report-module.js.map