(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["release-notify-release-notify-module"],{

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



/***/ }),

/***/ "./src/app/modules/release-notify/components/add/add.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/add/add.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{ 'MENU.notice_of_release' | translate }} {{ 'MENU.invoice_form' | translate }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"infoForm\" [formData]=\"frmData.info\" validationGroup=\"formData\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item  dataField=\"template_id\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: templates, searchEnabled: 'true', onValueChanged: templateChange, displayExpr: 'name', valueExpr: 'value'}\">\r\n            <dxo-label text=\"{{ 'CONTROLL.LABEL.invoice_form' | translate }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.invoice_form' | translate }} {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"3\">\r\n        <dxi-item dataField=\"amount\"   editorType=\"dxNumberBox\" [editorOptions]=\"{onValueChanged: changeNumber}\">\r\n            <dxo-label text=\"{{ 'CONTROLL.LABEL.quantity_issued' | translate }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.quantity_issued' | translate }} {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n          <dxi-validation-rule type=\"pattern\" pattern=\"^[1-9][0-9]*$\" message=\"{{ 'CONTROLL.LABEL.quantity_issued' | translate }} {{ 'VALIDATION.than0' | translate }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"begin_number\"  editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatNumber, disabled: true}\">\r\n            <dxo-label text=\"{{ 'CONTROLL.LABEL.from_number' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"end_number\"  editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatNumber, disabled: true}\">\r\n            <dxo-label text=\"{{ 'CONTROLL.LABEL.to_number' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"release_date\"   editorType=\"dxDateBox\" [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd', onValueChanged: refeshValidate}\">\r\n          <dxo-label text=\"{{ 'GRID.RELEASE_NOTIFY.release_date' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"start_using_date\"   editorType=\"dxDateBox\" [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd'}\">\r\n          <dxo-label text=\"{{ 'GRID.RELEASE_NOTIFY.start_using_date' | translate }}\"></dxo-label>\r\n          <!-- <dxi-validation-rule type=\"range\" [min]=\"minStartUsingDate\" message=\"Ngày bắt đầu sử dụng phải sau 2 ngày kể từ ngày TBPH\"></dxi-validation-rule> -->\r\n          <dxi-validation-rule type=\"required\" message=\"{{ 'GRID.RELEASE_NOTIFY.start_using_date' | translate }} {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item   dataField=\"release_status\" editorType=\"dxRadioGroup\" [editorOptions]=\"{\r\n            dataSource: registerRadioItems, valueExpr: 'value', layout: 'horizontal'}\">\r\n            <dxo-label text=\"{{ 'CONTROLL.LABEL.issue_the_invoice' | translate }}\"></dxo-label>\r\n        \r\n          </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n    <!-- <br>\r\n    <br>\r\n    <h3 class=\"form-title\">Đơn vị chủ quản (trường hợp tổ chức, cá nhân dùng hóa đơn của đơn vị chủ quản tự in, đặt in)</h3>\r\n    <dx-form id=\"unitForm\" [formData]=\"frmData.unit\" validationGroup=\"formData\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"name\" [label]=\"{text: 'Tên đơn vị chủ quản'}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"taxCode\" [label]=\"{text: 'MST'}\">\r\n        </dxi-item>\r\n        <dxi-item dataField=\"people\" [label]=\"{text: 'Người đại diện'}\">\r\n        </dxi-item>\r\n        <dxi-item dataField=\"city\" [label]=\"{text: 'Tỉnh/thành phố'}\">\r\n        </dxi-item>\r\n        <dxi-item dataField=\"owner\" [label]=\"{text: 'CQ thuế tiếp nhận TB'}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"note\" [label]=\"{text: 'Ghi chú'}\" editorType=\"dxTextArea\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form> -->\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button *ngIf=\"showViewButton\" (click)=\"viewDocument()\" text=\"{{ 'CONTROLL.BUTTON.view_confirmation_report' | translate }}\" icon=\"assets\\img\\icons\\Xem.png\" type=\"default\">\r\n    </dx-button>\r\n    <dx-button *ngIf=\"showSaveButton\" text=\"{{ 'CONTROLL.BUTTON.save' | translate }}\" icon=\"fa fa-floppy-o\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button text=\"{{ 'CONTROLL.BUTTON.come_back' | translate }}\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/release-notify/components/add/add.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/add/add.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/release-notify/components/add/add.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/add/add.component.ts ***!
  \************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../document/document.component */ "./src/app/modules/release-notify/components/document/document.component.ts");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
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








var AddComponent = /** @class */ (function () {
    function AddComponent(authService, bsModalRef, notifyService, modalService, bsModalDocument, translate) {
        var _this = this;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.notifyService = notifyService;
        this.modalService = modalService;
        this.bsModalDocument = bsModalDocument;
        this.translate = translate;
        this.registerRadioItems = [];
        this.formatNumber = _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].numberInvoiceFormatDev;
        this.frmData = new _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_5__["NotifyModel"]();
        this.showSaveButton = true;
        this.showViewButton = false;
        this.minStartUsingDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).add(2, 'days').format("YYYY-MM-DD");
        this.refeshValidate = function (e) {
            _this.minStartUsingDate = moment__WEBPACK_IMPORTED_MODULE_1__(e.value).add(2, 'days').format("YYYY-MM-DD");
        };
        this.changeNumber = function (e) {
            _this.frmData.info.end_number = _this.frmData.info.begin_number + e.value - 1;
        };
        this.templateChange = function (e) {
            _this.templates.forEach(function (item) {
                if (item.value == e.value) {
                    _this.frmData.info.begin_number = item.end_number + 1;
                    _this.frmData.info.end_number = item.end_number + _this.frmData.info.amount;
                }
            });
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.registerRadioItems = [
            {
                text: this._translate.CONTROLL.LABEL.wait_for_release,
                value: "CHUA_TB_THUE"
            },
            {
                text: this._translate.CONTROLL.LABEL.released,
                value: "DA_TB_THUE"
            },
        ];
    }
    AddComponent.prototype.ngOnInit = function () {
        if (this.rowData) {
            this.frmData.fillData(this.rowData);
            var currentUser = this.authService.getCurrentUser();
            if (this.rowData.release_status == 'DA_TB_THUE' || this.rowData.release_status == 'DA_HUY_SO') {
                this.showSaveButton = false;
            }
            if (currentUser.user.is_super_admin == '1') {
                this.showSaveButton = true;
            }
            if (this.rowData.confirm_file) {
                this.showViewButton = true;
            }
        }
    };
    AddComponent.prototype.a = function () {
        console.log(this.minStartUsingDate);
        // console.log(this.dxForm);
    };
    // onSubmit(e) {
    //   let nameTemplate = "";
    //   this.templates.forEach(item => {
    //     if (item.value == this.frmData.info.template_id) {
    //       nameTemplate = item.name;
    //     }
    //   });
    //   console.log(this.frmData.info);
    //   if (this.frmData.info.release_status == "DA_TB_THUE") {
    //     var result = Library.confirm(`Bạn có chắc chắn "${nameTemplate}" đã đăng ký với cơ quan thuế không?`, "Thông báo");
    //     result.then((dialogResult) => {
    //       if (dialogResult) {
    //         // this.hanle();
    //         const initialState = {
    //           formAdd: this.frmData,
    //         };
    //         this.bsModalDocument = this.modalService.show(DocumentComponent, {class: 'modal-lg full-modal', initialState});
    //         this.modalService.onHide.subscribe(() => {
    //           if (this.bsModalRef.content.successSaveItem) {
    //           }
    //         });
    //       }
    //     });
    //   } else {
    //     this.hanle();
    //   }
    // }
    AddComponent.prototype.onSubmit = function (e) {
        var _this = this;
        if (this.frmData.info.release_status == "DA_TB_THUE") {
            // this.hanle();
            var initialState = {
                formAdd: this.frmData.info,
                templates: this.templates,
                rowData: this.rowData
            };
            this.bsModalDocument = this.modalService.show(_document_document_component__WEBPACK_IMPORTED_MODULE_4__["DocumentComponent"], {
                backdrop: 'static',
                keyboard: false,
                class: 'modal-lg full-modal', initialState: initialState
            });
            var subModal_1 = this.modalService.onHide.subscribe(function () {
                if (_this.bsModalDocument.content.successSaveItem) {
                    _this.bsModalRef.content.successSaveItem = "success";
                    _this.bsModalRef.hide();
                    localStorage.removeItem('new_member');
                }
                subModal_1.unsubscribe();
            });
        }
        else {
            this.hanle();
        }
    };
    AddComponent.prototype.hanle = function () {
        if (this.rowData) {
            this.edit();
        }
        else {
            this.add();
        }
    };
    AddComponent.prototype.add = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        this.notifyService.add(this.frmData.info).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify('Thêm mới thành công', 'success');
                _this.bsModalRef.content.successSaveItem = "success";
                _this.bsModalRef.hide();
                localStorage.removeItem('new_member');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
        });
    };
    AddComponent.prototype.edit = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        this.notifyService.edit(this.rowData.id, this.frmData.info).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify('Sửa thành công', 'success');
                _this.bsModalRef.content.successSaveItem = "success";
                _this.bsModalRef.hide();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
        });
    };
    AddComponent.prototype.viewDocument = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].dowloadFile('BM06_BB_XAC_NHAN_HOAN_THANH_DKDV.pdf', 'pdf', this.rowData.confirm_file);
        // alert(1);
        // let win = window.open("hello","_blank");
        // win.document.write(`<body style="margin: 0px;"><embed width="100%" height="100%" src="data:application/pdf;base64,${this.rowData.confirm_file}"></body>`)
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/modules/release-notify/components/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/modules/release-notify/components/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_5__["NotifyService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/modules/release-notify/components/cancel-number/cancel-number.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/cancel-number/cancel-number.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{ 'CONTROLL.BUTTON.cancel_number' | translate }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"cancelForm\" [formData]=\"frmData\" validationGroup=\"formData\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item  dataField=\"template_id\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: templates, displayExpr: 'name', valueExpr: 'value', disabled: true}\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.invoice_form' | translate }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.invoice_form' | translate }} {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"amount_release\"  [editorOptions]=\"{disabled: true}\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.quantity_issued' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"used_amount\"  [editorOptions]=\"{disabled: true}\">\r\n          <dxo-label text=\"{{ 'GRID.RELEASE_NOTIFY.used' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"amount\" editorType=\"dxNumberBox\" [editorOptions]=\"{disabled: true}\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.quantity_can_be_canceled' | translate }}\"></dxo-label>\r\n        \r\n        </dxi-item>\r\n        <dxi-item dataField=\"cancelFrom\"  editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatNumber, disabled: true}\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.from_number' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"cancelTo\"  editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatNumber, disabled: true}\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.to_number' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"destroy_apply_date\" editorType=\"dxDateBox\" [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd'}\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.cancel_date' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <!-- <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item [label]=\"{text: 'Hình thức'}\" dataField=\"ignore_type\" editorType=\"dxRadioGroup\" [editorOptions]=\"{\r\n          dataSource: radioItems, \r\n          valueExpr: 'value', \r\n          layout: 'horizontal', \r\n          onValueChanged: changeRatio\r\n        }\">\r\n          <dxi-validation-rule type=\"required\" message=\"Hình thức hủy {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item> -->\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"begin_number\"  editorType=\"dxNumberBox\" [editorOptions]=\"{disabled: true}\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.number_range' | translate }}, {{ 'CONTROLL.LABEL.from_number' | translate }}\"></dxo-label>\r\n        \r\n        </dxi-item>\r\n        <dxi-item dataField=\"end_number\"  editorType=\"dxNumberBox\" [editorOptions]=\"{disabled: true}\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.to_number' | translate }}\"></dxo-label>\r\n          <dxi-validation-rule type=\"range\" [min]=\"rangeEndNumber[0]\" message=\"{{ 'VALIDATION.range_to_number' | translate }}\"></dxi-validation-rule>\r\n          <dxi-validation-rule type=\"range\" [max]=\"rangeEndNumber[1]\" message=\"{{ 'VALIDATION.to_number' | translate }}\"></dxi-validation-rule>\r\n          <dxi-validation-rule type=\"required\" message=\"{{ 'CONTROLL.LABEL.to_number' | translate }} {{ 'VALIDATION.required' | translate }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"destroy_reason\" editorType=\"dxTextArea\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.note' | translate }}\"></dxo-label>\r\n        \r\n          <!-- <dxi-item dataField=\"reason\" [label]=\"{text: 'Ghi chú'}\"> -->\r\n      </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <dx-button text=\"{{ 'CONTROLL.BUTTON.save' | translate }}\" icon=\"assets\\img\\icons\\Ghi.png\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n        </dx-button>\r\n    <dx-button text=\"{{ 'CONTROLL.BUTTON.come_back' | translate }}\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/release-notify/components/cancel-number/cancel-number.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/cancel-number/cancel-number.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ignoreGrid{margin-top:8px}\n"

/***/ }),

/***/ "./src/app/modules/release-notify/components/cancel-number/cancel-number.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/cancel-number/cancel-number.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CancelNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelNumberComponent", function() { return CancelNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CancelNumberComponent = /** @class */ (function () {
    function CancelNumberComponent(authService, bsModalRef, notifyService, translate) {
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.notifyService = notifyService;
        this.translate = translate;
        this.ignores = [];
        this.formatNumber = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].numberInvoiceFormatDev;
        this.rangeEndNumber = [];
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    CancelNumberComponent.prototype.ngOnInit = function () {
        this.frmData = new _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_1__["CancelModel"]();
        this.frmData.fillData(this.rowData, this.ignores);
        this.rangeEndNumber[0] = this.frmData.begin_number;
        this.rangeEndNumber[1] = this.frmData.cancelTo;
        this.frmData.end_number = this.rowData.end_number;
    };
    CancelNumberComponent.prototype.onSubmit = function (e) {
        var _this = this;
        var data = __assign({}, this.frmData);
        ['template_id', 'amount_release', 'cancelFrom', 'cancelTo', 'used_amount', 'end_number'].forEach(function (k) {
            delete data[k];
        });
        var result = _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(this._translate.CONFIRM.cancel_number, this._translate.NOTIFY.notify);
        result.then(function (dialogResult) {
            if (dialogResult) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                _this.notifyService.ignore(data).subscribe(function (rs) {
                    if (rs.status == "success") {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.cancel_number_success, 'success');
                        _this.bsModalRef.content.successSaveItem = "success";
                        _this.bsModalRef.hide();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                });
            }
        });
        console.log(this.frmData);
    };
    CancelNumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cancel-number',
            template: __webpack_require__(/*! ./cancel-number.component.html */ "./src/app/modules/release-notify/components/cancel-number/cancel-number.component.html"),
            styles: [__webpack_require__(/*! ./cancel-number.component.scss */ "./src/app/modules/release-notify/components/cancel-number/cancel-number.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_1__["NotifyService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], CancelNumberComponent);
    return CancelNumberComponent;
}());



/***/ }),

/***/ "./src/app/modules/release-notify/components/declaration/declaration.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/declaration/declaration.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">ĐỊA CHỈ ĐĂNG KÝ KINH DOANH</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <dx-form id=\"cancelForm\" [formData]=\"frmData\" validationGroup=\"formData\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item [label]=\"{text: 'Tỉnh/Thành phố'}\" dataField=\"province_code\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: provinces, displayExpr: 'name', valueExpr: 'code', onValueChanged: provinceChange}\"> <!-- searchEnabled: 'true',  -->\r\n            <dxi-validation-rule type=\"required\" message=\"Tỉnh/Thành phố không được để trống\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Quận/Huyện'}\" dataField=\"district_code\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: districts, displayExpr: 'name', valueExpr: 'code', onValueChanged: districtChange}\">\r\n            <dxi-validation-rule type=\"required\" message=\"Quận/Huyện không được để trống\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Phường/Xã'}\" dataField=\"commune_code\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: communes, displayExpr: 'name', valueExpr: 'code'}\">\r\n          </dxi-item>\r\n          <dxi-item dataField=\"home_address\" [label]=\"{text: 'Số nhà'}\">\r\n          </dxi-item>\r\n        </dxi-item>\r\n      </dx-form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <dx-button text=\"Đồng ý\" icon=\"assets\\img\\icons\\DongY.png\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n      </dx-button>\r\n      <dx-button text=\"Quay lại\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n      </dx-button>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "./src/app/modules/release-notify/components/declaration/declaration.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/declaration/declaration.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/release-notify/components/declaration/declaration.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/declaration/declaration.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DeclarationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationComponent", function() { return DeclarationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
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




var DeclarationComponent = /** @class */ (function () {
    function DeclarationComponent(bsModalRef, notifyService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.notifyService = notifyService;
        this.frmData = {
            province_code: "",
            province_name: "",
            district_code: "",
            district_name: "",
            commune_name: "",
            commune_code: "",
            home_address: "",
        };
        this.provinceChange = function (e) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var sub = _this.notifyService.getListtypeExpandFilter({
                listtype_code: "DM_QUAN_HUYEN_CQHC",
                tag_name: "tinh_thanh",
                tag_value: e.value,
            }).subscribe(function (rs) {
                if (rs.status == "success") {
                    _this.districts = rs.data.lists;
                    _this.communes = [];
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, "error");
                }
            }, function (err) { }, function () {
                sub.unsubscribe();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            });
        };
        this.districtChange = function (e) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var sub = _this.notifyService.getListtypeExpandFilter({
                listtype_code: "DM_XA_PHUONG_CQHC",
                tag_name: "quan_huyen",
                tag_value: e.value,
            }).subscribe(function (rs) {
                if (rs.status == "success") {
                    _this.communes = rs.data.lists;
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, "error");
                }
            }, function (err) { }, function () {
                sub.unsubscribe();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            });
        };
    }
    DeclarationComponent.prototype.ngOnInit = function () {
    };
    DeclarationComponent.prototype.onSubmit = function (e) {
        var _this = this;
        var province_name = "", district_name = "", commune_name = "";
        this.provinces.some(function (item) {
            if (item.code == _this.frmData.province_code) {
                province_name = item.name;
                return true;
            }
        });
        this.districts.some(function (item) {
            if (item.code == _this.frmData.district_code) {
                district_name = item.name;
                return true;
            }
        });
        this.communes.some(function (item) {
            if (item.code == _this.frmData.commune_code) {
                commune_name = item.name;
                return true;
            }
        });
        var data = {
            id: this.rowData.id,
            code: "1",
            province_code: this.frmData.province_code,
            province_name: province_name,
            district_code: this.frmData.district_code,
            district_name: district_name,
            commune_name: commune_name,
            commune_code: this.frmData.commune_code,
            home_address: this.frmData.home_address,
        };
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.notifyService.xuatToKhai(data).subscribe(function (rs) {
            if (rs.status == "success") {
                console.log(rs);
                var data_1 = rs.data.invoice_release;
                // let file_content = atob(data.file_content);
                // Helper.download("1" + data.file_name, file_content);
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(data_1.file_name, 'zip', data_1.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, "error");
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
        });
    };
    DeclarationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-declaration',
            template: __webpack_require__(/*! ./declaration.component.html */ "./src/app/modules/release-notify/components/declaration/declaration.component.html"),
            styles: [__webpack_require__(/*! ./declaration.component.scss */ "./src/app/modules/release-notify/components/declaration/declaration.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_2__["NotifyService"]])
    ], DeclarationComponent);
    return DeclarationComponent;
}());



/***/ }),

/***/ "./src/app/modules/release-notify/components/document/document.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/document/document.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">XÁC NHẬN HOÀN THÀNH THÔNG BÁO PHÁT HÀNH HÓA ĐƠN ĐIỆN TỬ</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p style=\"margin-bottom: 5px;\">Kính gửi: {{ currentUser.account.name }}</p>\r\n    <h3 class=\"title\">A. Thông báo của nhà cung cấp dịch vụ EFY-iHOADON</h3>\r\n    <ul>\r\n      <li>\r\n        - Để đảm bảo trách nhiệm giữa nhà cung cấp dịch vụ và đơn vị sử dụng dịch vụ, nhà cung cấp dịch vụ EFY Việt Nam đề nghị đơn vị kiểm tra kỹ lại các nội dung thông báo phát hành hóa đơn điện tử tại mục (B). Đơn vị có thể lấy bản giấy thông báo phát hành nộp cơ quan thuế ra đối chiếu hoặc truy cập vào trang <a href=\"http://www.tracuuhoadon.gdt.gov.vn/tbphtc.html\" target=\"_blank\">http://www.tracuuhoadon.gdt.gov.vn/tbphtc.html</a> để biết trạng thái cơ quan thuế đồng ý cho phép phát hành hóa đơn điện tử.\r\n      </li>\r\n      <li>\r\n        - Tại mục (B), trường hợp đơn vị đối chiếu lệch nội dung, ví dụ: sai ngày thông báo phát hành giữa bản giấy và nội dung hiển thị, đơn vị có thể điều chỉnh lại. Tương tự với các nội dung khác.\r\n      </li>\r\n      <li>\r\n        - Sau khi đối chiếu xong, đơn vị nhấn vào biểu tượng <img src=\"assets/img/MauXacNhan.png\"> để xem trước biên bản xác nhận. Nhấn nút “<span style=\"color: #1F90FF;\">Ký xác nhận</span> ” để ký biên bản xác nhận hoàn thành thông báo phát hành hóa đơn điện tử. Biên bản được ký điện tử bởi hai bên: Nhà cung cấp và đơn vị sử dụng dịch vụ, đồng thời gửi vào email: {{ currentUser.account.email }} hoặc sang chức năng “Xác nhận hoàn thành” để xem lại biên bản đã ký.\r\n      </li>\r\n    </ul>\r\n    <h3 class=\"title\">B. Nội dung xác nhận</h3>\r\n    <dx-form [formData]=\"formDoc\" validationGroup=\"formData\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"contract_date\" [label]=\"{text: 'Ngày ký hợp đồng dịch vụ'}\" editorType=\"dxDateBox\" [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd', disabled: disabledHopDong()}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Ngày ký hợp đồng dịch vụ không được để trống\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"contract_number\" [label]=\"{text: 'Số hợp đồng'}\" [editorOptions]=\"{disabled: disabledHopDong()}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Số hợp đồng không được để trống\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"template_code\" [label]=\"{text: 'Mẫu số hóa đơn'}\" [editorOptions]=\"{disabled: true}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"invoice_series\" [label]=\"{text: 'Ký hiệu hóa đơn'}\" [editorOptions]=\"{disabled: true}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n          <dxi-item dataField=\"amount\" [label]=\"{text: 'Số lượng phát hành'}\" [editorOptions]=\"{disabled: true}\">\r\n            <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule>\r\n          </dxi-item>\r\n          <dxi-item dataField=\"begin_number\" [label]=\"{text: 'Từ số'}\" [editorOptions]=\"{format: formatNumber, disabled: true}\">\r\n            <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"end_number\" [label]=\"{text: 'Đến số'}\" [editorOptions]=\"{format: formatNumber, disabled: true}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Trường này không được để trống\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"release_date\" [label]=\"{text: 'Ngày thông báo phát hành'}\" editorType=\"dxDateBox\" [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd'}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Ngày thông báo phát hành không được để trống\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"start_using_date\" [label]=\"{text: 'Ngày bắt đầu sử dụng'}\" editorType=\"dxDateBox\" [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd'}\">\r\n          <dxi-validation-rule type=\"required\" message=\"Ngày bắt đầu sử dụng không được để trống\"></dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n    <div style=\"margin-top: 10px;\">\r\n      <a class=\"m-bold\" href=\"javascript:void(0)\" (click)=\"viewFile()\">Xem biên bản xác nhận điện tử <img src=\"assets/img/MauXacNhan.png\"></a>\r\n    </div>\r\n    <p class=\"m-bold\">Đơn vị cam kết hoàn toàn chịu trách nhiệm trước pháp luật về tính chính xác, trung thực của nội dung nêu trên.</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button text=\"Kí xác nhận\" icon=\"fa fa-floppy-o\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button text=\"Quay lại\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/modules/release-notify/components/document/document.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/document/document.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body{line-height:1.5}.modal-body .title{font-weight:bold;margin-bottom:5px}.modal-body ul{list-style-type:none;padding-left:5px}.modal-body ul li{margin-bottom:5px}.modal-body .m-bold{font-weight:bold}.modal-body .view-document{margin-top:5px;margin-bottom:5px}\n"

/***/ }),

/***/ "./src/app/modules/release-notify/components/document/document.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/document/document.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_vat_shared_vat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/vat/shared/vat.service */ "./src/app/modules/vat/shared/vat.service.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_info_unit_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/info-unit/shared */ "./src/app/modules/info-unit/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(vatService, bsModalRef, authService, notifyService, socketService, fb, infoUnitService) {
        this.vatService = vatService;
        this.bsModalRef = bsModalRef;
        this.authService = authService;
        this.notifyService = notifyService;
        this.socketService = socketService;
        this.fb = fb;
        this.infoUnitService = infoUnitService;
        this.disabledInputHopDong = false;
        this.formatNumber = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].numberInvoiceFormatDev;
        this.isKyTapTrung = false;
    }
    DocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formDataToken = this.fb.group(this.notifyService.formUserToken);
        this.dataToken = JSON.parse(localStorage.getItem('currentUser'));
        this.dataAccount = this.dataToken.account;
        this.formDataToken.patchValue({
            cert_serial: this.dataToken.account.cert_serial,
            cert_provider: this.dataToken.account.cert_provider,
            cert_valid_from: this.dataToken.account.cert_valid_from,
            cert_valid_to: this.dataToken.account.cert_valid_to,
            cert_content: this.dataToken.account.cert_content,
            icc_token: this.dataToken.account.icc_token,
        });
        //connect web socket
        var sub2 = this.vatService.getConfig().subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.configs = rs.data.configs;
                rs.data.configs.forEach(function (item) {
                    if (item.name == 'integrate_parameter') {
                        //this.isKyTapTrung = JSON.parse(item.value).concentrate_signature.is_concentrate_signature;
                        var config = JSON.parse(item.value);
                        _this.isKyTapTrung = config.concentrate_signature.is_concentrate_signature;
                    }
                });
            }
            else {
                // Library.notify('Có lỗi khi tải cấu hình', 'error');
            }
        }, function (err) {
        }, function () {
            sub2.unsubscribe();
        });
        this.connectWebsocket();
        this.currentUser = this.authService.getCurrentUser();
        this.formDoc = JSON.parse(JSON.stringify(this.formAdd));
        var van_account_info = this.currentUser.account.van_account_info;
        if (van_account_info.contract_date) {
            this.formDoc.contract_date = moment__WEBPACK_IMPORTED_MODULE_2__(van_account_info.contract_date).format('YYYY-MM-DD');
        }
        this.formDoc.contract_number = van_account_info.contract_number;
        if (van_account_info.register_type === 'TRUC_TIEP' && van_account_info.contract_number) {
            this.disabledInputHopDong = true;
        }
        else {
            this.disabledInputHopDong = false;
        }
        this.templates.some(function (item) {
            if (item.value === _this.formDoc.template_id) {
                _this.formDoc.template_code = item.template_code;
                _this.formDoc.invoice_series = item.invoice_series;
            }
        });
    };
    DocumentComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            console.log(data);
            console.log(_this.dataAccount);
            if (data.SvcName === 'efy_Sign') {
                _this.formDoc.confirm_file = data.Data.Content;
                if (_this.dataAccount.cert_serial !== null) {
                    if (_this.dataAccount.cert_serial === data.Cert.SerialNumber) {
                        if (_this.rowData) {
                            _this.edit();
                        }
                        else {
                            _this.add(_this.formDataToken.value, false);
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Chữ ký số không đúng', 'error');
                    }
                }
                else {
                    _this.formDataToken.patchValue({
                        cert_serial: data.Cert.SerialNumber,
                        cert_provider: _this.convertIssuer(data.Cert.Issuer),
                        cert_valid_from: _this.convertDate(data.Cert.DateFrom),
                        cert_valid_to: _this.convertDate(data.Cert.DateTo),
                        cert_content: data.Cert.CertContent,
                        icc_token: ''
                    });
                    if (_this.rowData) {
                        _this.edit();
                    }
                    else {
                        _this.add(_this.formDataToken.value, true);
                    }
                }
            }
        });
    };
    DocumentComponent.prototype.convertIssuer = function (str) {
        return str;
    };
    DocumentComponent.prototype.convertDate = function (str) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(str).format('YYYY-MM-DD HH:mm:ss');
    };
    DocumentComponent.prototype.updateAccount = function (id, data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var dataAcount = {
            account: {
                name: data.name,
                account_type: data.account_type,
                tax_province_code: data.tax_province_code,
                tax_district_code: data.tax_district_code,
                business_address: data.business_address,
                transaction_address: data.transaction_address,
                phone: data.phone,
                email: data.email,
                fax: data.fax,
                website: data.website,
                surrogate_name: data.surrogate_name,
                surrogate_position: data.surrogate_position,
                submitted_person_name: data.submitted_person_name,
                contact_person_name: data.contact_person_name,
                contact_mobile: data.contact_mobile,
                tax_department: data.tax_department,
                company_type: data.company_type,
                bank_name: data.bank_name,
                bank_account_number: data.bank_account_number,
                company_email: data.company_email,
                cert_serial: data.cert_serial,
                cert_valid_from: data.cert_valid_from,
                cert_valid_to: data.cert_valid_to,
                cert_provider: data.cert_provider,
                cert_content: data.cert_content,
                icc_token: data.icc_token,
                report_period: data.report_period,
            }
        };
        this.infoUnitService.updateInfo(dataAcount, id).subscribe(function (value) {
            if (value.status === 'success') {
                _this.dataToken.account = value.data.account;
                localStorage['currentUser'] = JSON.stringify(_this.dataToken);
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Thêm mới thông báo phát hành thành công', 'success');
                _this.bsModalRef.content.successSaveItem = 'success';
                _this.bsModalRef.hide();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Thêm mới thông báo phát hành thành công', 'success');
                _this.bsModalRef.content.successSaveItem = 'success';
                _this.bsModalRef.hide();
            }
        }, function (error) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Thêm mới thông báo phát hành thành công', 'success');
            _this.bsModalRef.content.successSaveItem = 'success';
            _this.bsModalRef.hide();
        }, function () { return _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading(); });
    };
    DocumentComponent.prototype.add = function (dataSign, isUpdate) {
        var _this = this;
        var data = JSON.parse(JSON.stringify(this.formDoc));
        ['template_code', 'invoice_series'].forEach(function (k) {
            delete data[k];
        });
        var dataUser = this.dataAccount;
        dataUser.cert_serial = dataSign.cert_serial;
        dataUser.cert_valid_from = dataSign.cert_valid_from;
        dataUser.cert_valid_to = dataSign.cert_valid_to;
        dataUser.cert_provider = dataSign.cert_provider;
        dataUser.cert_content = dataSign.cert_content;
        dataUser.icc_token = dataSign.icc_token;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.notifyService.addNotify(data, dataSign).subscribe(function (rs) {
            if (rs.status === 'success') {
                if (isUpdate) {
                    _this.updateAccount(dataUser.id, dataUser);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Thêm mới thông báo phát hành thành công', 'success');
                    _this.bsModalRef.content.successSaveItem = 'success';
                    _this.bsModalRef.hide();
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    DocumentComponent.prototype.edit = function () {
        var _this = this;
        var data = JSON.parse(JSON.stringify(this.formDoc));
        ['template_code', 'invoice_series'].forEach(function (k) {
            delete data[k];
        });
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.notifyService.edit(this.rowData.id, data).subscribe(function (rs) {
            if (rs.status == 'success') {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Sửa thông báo phát hành thành công', 'success');
                _this.bsModalRef.content.successSaveItem = 'success';
                _this.bsModalRef.hide();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    DocumentComponent.prototype.viewFile = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.notifyService.getFileReportPreview(this.formDoc).subscribe(function (rs) {
            if (rs.status == 'success') {
                var data = rs.data.invoice_release;
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].dowloadFile(data.file_name, 'pdf', data.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    DocumentComponent.prototype.onSubmit = function (e) {
        var _this = this;
        if (moment__WEBPACK_IMPORTED_MODULE_2__(this.formDoc.release_date).add(2, 'days') > moment__WEBPACK_IMPORTED_MODULE_2__(this.formDoc.start_using_date)) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Ngày bắt đầu sử dụng phải lớn hơn ngày phát hành tối thiểu 2 ngày', 'error');
            return false;
        }
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.notifyService.getFileReportPreview(this.formDoc).subscribe(function (rs) {
            if (rs.status === 'success') {
                var data = rs.data.invoice_release;
                _this.formDoc.confirm_file = rs.data.invoice_release.file_content;
                if (_this.isKyTapTrung) {
                    console.log(1);
                }
                else {
                    _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, data.file_content, data.file_name, 'pdf', true, null, 'ALIGN_LEFT', 'PAGE_FIRST');
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    DocumentComponent.prototype.disabledHopDong = function () {
        if (this.currentUser.user.is_super_admin == '1') {
            return false;
        }
        else {
            var info = this.currentUser.account.van_account_info;
            if (info.register_type == 'TRUC_TIEP' && info.contract_number) {
                return true;
            }
            return false;
        }
    };
    DocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document',
            template: __webpack_require__(/*! ./document.component.html */ "./src/app/modules/release-notify/components/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.scss */ "./src/app/modules/release-notify/components/document/document.component.scss")]
        }),
        __metadata("design:paramtypes", [_modules_vat_shared_vat_service__WEBPACK_IMPORTED_MODULE_3__["VatService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_5__["NotifyService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _modules_info_unit_shared__WEBPACK_IMPORTED_MODULE_7__["InfoUnitService"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/modules/release-notify/components/index/index.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/index/index.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n  <div class=\"col-md-3\">\r\n      <div class=\"pull-left\">\r\n          \r\n      </div>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <div class=\"pull-right button-panel\">\r\n      <dx-button *ngIf = \"!isTT78\" (click)=\"add()\" icon=\"assets\\img\\icons\\Them.png\" text=\"{{ 'CONTROLL.BUTTON.add' | translate }}\" type=\"default\"></dx-button>\r\n      <!-- <dx-button (click)=\"edit()\" icon=\"assets\\img\\icons\\Sua.png\" text=\"{{ 'CONTROLL.BUTTON.edit' | translate }}\" type=\"default\" [disabled]=\"!(selectedRows.length == 1)\"></dx-button> -->\r\n      <dx-button (click)=\"delete(null)\" icon=\"assets\\img\\icons\\Xoa.png\" text=\"{{ 'CONTROLL.BUTTON.delete' | translate }}\" type=\"default\" [disabled]=\"!selectedRows.length\"></dx-button>\r\n      <!-- <dx-button (click)=\"huySo()\" icon=\"assets\\img\\icons\\HuySo.png\" text=\"{{ 'CONTROLL.BUTTON.cancel_number' | translate }}\" type=\"default\" [disabled]=\"!(selectedRows.length == 1)\"></dx-button> -->\r\n      <!-- <dx-button (click)=\"xuatToKhai()\" icon=\"assets\\img\\icons\\KetxuatXML.png\" text=\"{{ 'CONTROLL.BUTTON.export_release' | translate }}\" [disabled]=\"!(selectedRows.length == 1)\" type=\"default\"></dx-button> -->\r\n      <!-- <dx-button (click)=\"xuatExcel()\" icon=\"assets\\img\\icons\\KetxuatExcel.png\" text=\"{{ 'CONTROLL.BUTTON.export_excel' | translate }}\" type=\"default\" [disabled]=\"!selectedRows.length\"></dx-button> -->\r\n      <!-- <dx-menu\r\n      [dataSource]=\"extras\"\r\n      displayExpr=\"name\"\r\n      orientation=\"horizontal\"\r\n      submenuDirection=\"auto\"\r\n      (onItemClick)=\"itemExtrasClick($event)\"\r\n      cssClass='button-dropdown-extend'>\r\n    </dx-menu> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid \r\n  id=\"gridContainer\"\r\n  (onSelectionChanged)=\"selectionChanged($event)\"\r\n  [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\"\r\n  [(selectedRowKeys)]=\"selectedRows\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnMinWidth]=\"50\"\r\n  [columnResizingMode]=\"true\"\r\n  [columnAutoWidth]=\"true\"\r\n  [wordWrapEnabled]=\"true\"\r\n  (onContentReady)=\"onContentReady($event)\">\r\n  <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n  </dxo-selection>\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxi-column dataField=\"release_date\" width=\"110\" caption=\"{{ 'GRID.RELEASE_NOTIFY.release_date' | translate }}\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n  <dxi-column dataField=\"start_using_date\" width=\"110\" caption=\"{{ 'GRID.RELEASE_NOTIFY.start_using_date' | translate }}\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n  <dxi-column cellTemplate=\"templateInvoice\" caption=\"{{ 'GRID.INVOICE.template_code' | translate }}\" alignment=\"left\"></dxi-column>\r\n  <dxi-column cellTemplate=\"numberInvoice\" caption=\"{{ 'GRID.INVOICE_DETAILS.quantity' | translate }}\" [allowFiltering]=\"false\" alignment=\"left\"></dxi-column>\r\n  <dxi-column dataField=\"release_status\" width=\"120\" caption=\"{{ 'GRID.GENERAL.status' | translate }}\" alignment=\"left\">\r\n    <dxo-lookup [dataSource]=\"statusFilter\" valueExpr=\"value\" displayExpr=\"text\"></dxo-lookup>\r\n  </dxi-column>\r\n  <dxi-column cellTemplate=\"actionIcon\"  minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_4}}\" width=\"{{_translate.GRID_WIDTH.hanh_dong_4}}\"  alignment=\"center\"></dxi-column>\r\n  <div *dxTemplate=\"let d of 'numberInvoice'\">\r\n    <p>{{ 'GRID.RELEASE_NOTIFY.registration_number' | translate }}: {{ d.data.amount }} ({{ formatNumberInvoice(d.data.begin_number) }} - {{ formatNumberInvoice(d.data.end_number) }})</p>\r\n    <p>{{ 'GRID.RELEASE_NOTIFY.used' | translate }}: {{ d.data.used_amount || 0 }}</p>\r\n    <p *ngIf=\"d.data.release_status == 'DA_HUY_SO'\">{{ 'GRID.RELEASE_NOTIFY.cancel_all' | translate }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'templateInvoice'\">\r\n    <p>{{ d.data.invoice_type_name }} - {{ d.data.template.template_code }} - {{ d.data.template.invoice_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\" href=\"javascript:void(0)\">\r\n      </a>\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\" href=\"javascript:void(0)\">\r\n      </a>\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.cancel_number}}\" class=\"huySoIcon actionIcon\" (click)=\"huySo(d.data)\" href=\"javascript:void(0)\">\r\n      </a>\r\n      <div class=\"dropdown\" >\r\n        <a title=\"{{_translate.CONTROLL.BUTTON.extend}}\" class=\"morongIcon actionIcon\"  (click)=\"myFunction(d.data.id)\" href=\"javascript:void(0)\"></a>\r\n        <div [(id)]=\"d.data.id\"  class=\"dropdown-content\" [ngClass]=\"{'last-drodown':( pageSize - 1 == d.rowIndex || pageSize - 2 == d.rowIndex || pageSize - 3 == d.rowIndex) && pageSize > 4, 'small-grid': pageSize < 5}\">\r\n          <a  (click)=\"xuatToKhai(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.export_release' | translate }} <i [(class)]=\"_translate.ICONS.xml\"></i></a>\r\n          <a  (click)=\"xuatExcel(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.export_excel' | translate }} <i [(class)]=\"_translate.ICONS.excel\"></i></a>\r\n          <!-- <a  (click)=\"viewAttachFile(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.view_attach_file' | translate }} <i [(class)]=\"_translate.ICONS.view_attach_file\"></i></a> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n  <dxo-pager \r\n      [showPageSizeSelector]=\"true\" \r\n      [allowedPageSizes]=\"[15, 50, 100]\"\r\n      [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\">\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n"

/***/ }),

/***/ "./src/app/modules/release-notify/components/index/index.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/index/index.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .dx-cell-focus-disabled{overflow:visible !important}:host ::ng-deep .dx-datagrid-rowsview{overflow:visible}:host ::ng-deep .dx-scrollable-container{overflow:visible}.last-drodown{bottom:30px}.small-grid{position:fixed  !important;right:39px !important}\n"

/***/ }),

/***/ "./src/app/modules/release-notify/components/index/index.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/release-notify/components/index/index.component.ts ***!
  \****************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/release-notify/shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add/add.component */ "./src/app/modules/release-notify/components/add/add.component.ts");
/* harmony import */ var _cancel_number_cancel_number_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel-number/cancel-number.component */ "./src/app/modules/release-notify/components/cancel-number/cancel-number.component.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
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
    function IndexComponent(authService, vatService, notifyService, modalService, coreService, translate) {
        this.authService = authService;
        this.vatService = vatService;
        this.notifyService = notifyService;
        this.modalService = modalService;
        this.coreService = coreService;
        this.translate = translate;
        this.selectedRows = [];
        this.selectedItems = [];
        this.clickCurent = "";
        this.extras = [];
        this.statusFilter = [];
        this.isTT78 = false;
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.statusFilter = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_9__["VSelectBoxService"]._trangThaiPhatHanh(this._translate);
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.loadList();
        this.loadTemplates();
        var infoDangKy = this.authService.getInfoRegister();
        if (infoDangKy && infoDangKy.id) {
            if (infoDangKy.status == "CHAP_NHAN")
                this.isTT78 = true;
        }
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
                        id: "KET_XUAT_EXCEL",
                        name: this._translate.CONTROLL.BUTTON.export_excel,
                        icon: this._translate.ICONS.excel
                    }
                ]
            }];
    };
    IndexComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id == 'XOA') {
            this.delete(null);
        }
        else if (e.itemData.id == 'KET_XUAT_EXCEL') {
            this.xuatExcel(null);
        }
    };
    IndexComponent.prototype.loadList = function () {
        this.dataSource = {};
        this.dataSource.store = this.notifyService.getAll();
    };
    IndexComponent.prototype.loadTemplates = function () {
        var _this = this;
        var sub = this.coreService.getTemplateOption().subscribe(function (rs) {
            _this.templates = rs;
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.myFunction = function (e) {
        if (this.clickCurent != "" && this.clickCurent != e) {
            document.getElementById(this.clickCurent).classList.remove('show');
            // window.onclick = function (o) {
            //   // if (!o.target.matches('.dropbtn')) {
            //   var myDropdown = document.getElementById("dropdown");
            //   if (myDropdown.classList.contains('show')) {
            //     myDropdown.classList.remove('show');
            //   }
            //   // }
            // }
        }
        document.getElementById(e).classList.toggle("show");
        this.clickCurent = e;
    };
    // Chọn đối tượng trong màn hình danh sách
    IndexComponent.prototype.selectionChanged = function (data) {
        if (this.clickCurent)
            document.getElementById(this.clickCurent).classList.remove('show');
        this.selectedItems = data.selectedRowsData;
    };
    IndexComponent.prototype.setNumberInvoice = function (data) {
        return typescript_string_operations__WEBPACK_IMPORTED_MODULE_8__["String"].Format(this._translate.CONTROLL.LABEL.so_dang_ky, data.amount + " (" + data.begin_number + " - " + data.end_number + ")", "" + data.used_amount);
    };
    IndexComponent.prototype.formatNumberInvoice = function (numberInvoice) {
        return _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatNumberInvoice(numberInvoice);
    };
    IndexComponent.prototype.add = function () {
        var _this = this;
        if (this.clickCurent)
            document.getElementById(this.clickCurent).classList.remove('show');
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        var sub = this.notifyService.getTemplatesVer2().subscribe(function (rs) {
            var data = [];
            rs.data.templates.forEach(function (item) {
                data.push({
                    name: item.invoice_type_name + " - " + item.template_code + " - " + item.invoice_series,
                    value: item.id,
                    end_number: parseInt(item.end_number) || 0,
                    invoice_series: item.invoice_series,
                    template_code: item.template_code,
                    is_decree_new: item.is_decree_new
                });
            });
            if (data && data.length > 0)
                data = data.filter(function (p) { return p.is_decree_new != true; });
            var initialState = {
                templates: data
            };
            _this.bsModalRef = _this.modalService.show(_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], { class: 'modal-lg', initialState: initialState });
            _this.modalService.onHide.subscribe(function () {
                if (_this.bsModalRef.content.successSaveItem) {
                    _this.loadList();
                }
            });
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.edit = function (data) {
        var _this = this;
        if (this.clickCurent)
            document.getElementById(this.clickCurent).classList.remove('show');
        // if (this.selectedItems[0].release_status == "CHUA_TB_THUE") {
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        var id = data ? data.id : this.selectedRows[0];
        var sub = this.notifyService.showVer2(id).subscribe(function (rs) {
            var data = [];
            rs[1].data.templates.forEach(function (item) {
                data.push({
                    name: item.invoice_type_name + " - " + item.template_code + " - " + item.invoice_series,
                    value: item.id,
                    end_number: parseInt(item.end_number) || 0,
                    invoice_series: item.invoice_series,
                    template_code: item.template_code,
                    is_decree_new: item.is_decree_new
                });
            });
            if (data && data.length > 0)
                data = data.filter(function (p) { return p.is_decree_new != true; });
            var initialState = {
                rowData: rs[0].data.invoice_release,
                templates: data
            };
            _this.bsModalRef = _this.modalService.show(_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], { class: 'modal-lg', initialState: initialState });
            _this.modalService.onHide.subscribe(function () {
                if (_this.bsModalRef.content.successSaveItem) {
                    _this.loadList();
                }
            });
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
            sub.unsubscribe();
        });
        // } else {
        //   Library.notify("Bạn không thể chọn đăng ký đã phát hành để sửa", "error");
        // }
    };
    IndexComponent.prototype.delete = function (data) {
        var _this = this;
        if (this.clickCurent)
            document.getElementById(this.clickCurent).classList.remove('show');
        // if (this.selectedItems[0].release_status == "CHUA_TB_THUE") {
        var ids = data ? data.id : this.selectedRows.join(',');
        var result = _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
        result.then(function (dialogResult) {
            if (dialogResult) {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
                _this.notifyService.delete(ids).subscribe(function (rs) {
                    if (rs.status === "success") {
                        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                        _this.loadList();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
                });
            }
        });
        // } else {
        //   Library.notify("Bạn không thể chọn đăng ký đã phát hành để xóa", "error");
        // }
    };
    IndexComponent.prototype.huySo = function (data) {
        var _this = this;
        if (this.clickCurent)
            document.getElementById(this.clickCurent).classList.remove('show');
        var rowData = data ? data : this.selectedItems[0];
        if (rowData.release_status == "DA_TB_THUE") {
            var initialState = {
                rowData: rowData,
                templates: this.templates,
            };
            this.bsModalRef = this.modalService.show(_cancel_number_cancel_number_component__WEBPACK_IMPORTED_MODULE_5__["CancelNumberComponent"], { class: 'modal-lg full-modal', initialState: initialState });
            this.modalService.onHide.subscribe(function () {
                if (_this.bsModalRef.content.successSaveItem) {
                    _this.dataSource = {};
                    _this.loadList();
                }
            });
        }
        else if (rowData.release_status == "DA_HUY_SO") {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(this._translate.NOTIFY.cancel_number, "error");
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify("Bạn không thể chọn đăng ký chờ phát hành để hủy số.", "error");
        }
    };
    IndexComponent.prototype.xuatToKhai = function (data) {
        var rowData = data ? data : this.selectedItems[0];
        if (this.clickCurent)
            document.getElementById(this.clickCurent).classList.remove('show');
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        // let sub = this.notifyService.getDMTinhThanh().subscribe(rs => {
        //   if (rs.status == "success") {
        //     const initialState = {
        //       rowData: rowData,
        //       templates: this.templates,
        //       provinces: rs.data.DM_TINH_THANH_CQHC
        //     };
        //     this.bsModalRef = this.modalService.show(DeclarationComponent, { class: 'modal-lg', initialState });
        //   } else {
        //     Library.notify(rs.message, "error");
        //   }
        // }, err => { }, () => {
        //   Library.hideloading();
        // });
        var _data = {
            id: rowData.id,
            code: "1",
            // province_code: this.frmData.province_code,
            // province_name: province_name,
            // district_code: this.frmData.district_code,
            // district_name: district_name,
            // commune_name: commune_name,
            // commune_code: this.frmData.commune_code,
            home_address: this.authService.getCurrentUser().account.business_address,
        };
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        var sub = this.notifyService.xuatToKhai(_data).subscribe(function (rs) {
            if (rs.status == "success") {
                console.log(rs);
                var data_1 = rs.data.invoice_release;
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].dowloadFile(data_1.file_name, 'zip', data_1.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, "error");
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.xuatExcel = function (data) {
        if (this.clickCurent)
            document.getElementById(this.clickCurent).classList.remove('show');
        var ids = data ? data.id : this.selectedRows.join(',');
        _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].showloading();
        var sub = this.notifyService.export(ids).subscribe(function (rs) {
            if (rs.status == "success") {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Helper"].dowloadFile(rs.data.invoice_release.file_name, 'xlsx', rs.data.invoice_release.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].notify(rs.message, "error");
            }
        }, function (err) { }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_6__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.onContentReady = function (e) {
        if (e) {
            var dataSource = this.dataGrid.instance.getDataSource();
            this.pageSize = dataSource.items().length;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-release-notify-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/release-notify/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/release-notify/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _modules_release_notify_shared__WEBPACK_IMPORTED_MODULE_1__["NotifyService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_index__WEBPACK_IMPORTED_MODULE_6__["CoreService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/release-notify/release-notify.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/release-notify/release-notify.module.ts ***!
  \*****************************************************************/
/*! exports provided: ReleaseNotifyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseNotifyModule", function() { return ReleaseNotifyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _release_notify_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./release-notify.routing */ "./src/app/modules/release-notify/release-notify.routing.ts");
/* harmony import */ var _modules_vat_shared_vat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared/vat.service */ "./src/app/modules/vat/shared/vat.service.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/release-notify/components/index/index.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/modules/release-notify/shared/index.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/modules/release-notify/components/add/add.component.ts");
/* harmony import */ var _components_cancel_number_cancel_number_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cancel-number/cancel-number.component */ "./src/app/modules/release-notify/components/cancel-number/cancel-number.component.ts");
/* harmony import */ var _components_declaration_declaration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/declaration/declaration.component */ "./src/app/modules/release-notify/components/declaration/declaration.component.ts");
/* harmony import */ var _components_document_document_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/document/document.component */ "./src/app/modules/release-notify/components/document/document.component.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _modules_info_unit_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/info-unit/shared */ "./src/app/modules/info-unit/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//library

//general











var ReleaseNotifyModule = /** @class */ (function () {
    function ReleaseNotifyModule() {
    }
    ReleaseNotifyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _release_notify_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _core_index__WEBPACK_IMPORTED_MODULE_2__["devextremeModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_12__["vTranslateModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"],
                _components_cancel_number_cancel_number_component__WEBPACK_IMPORTED_MODULE_9__["CancelNumberComponent"],
                _components_declaration_declaration_component__WEBPACK_IMPORTED_MODULE_10__["DeclarationComponent"],
                _components_document_document_component__WEBPACK_IMPORTED_MODULE_11__["DocumentComponent"]
            ],
            entryComponents: [
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"],
                _components_cancel_number_cancel_number_component__WEBPACK_IMPORTED_MODULE_9__["CancelNumberComponent"],
                _components_declaration_declaration_component__WEBPACK_IMPORTED_MODULE_10__["DeclarationComponent"],
                _components_document_document_component__WEBPACK_IMPORTED_MODULE_11__["DocumentComponent"]
            ],
            providers: [
                _modules_vat_shared_vat_service__WEBPACK_IMPORTED_MODULE_4__["VatService"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["NotifyService"],
                _modules_info_unit_shared__WEBPACK_IMPORTED_MODULE_13__["InfoUnitService"],
            ]
        })
    ], ReleaseNotifyModule);
    return ReleaseNotifyModule;
}());



/***/ }),

/***/ "./src/app/modules/release-notify/release-notify.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/release-notify/release-notify.routing.ts ***!
  \******************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/release-notify/components/index/index.component.ts");
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
//# sourceMappingURL=release-notify-release-notify-module.js.map