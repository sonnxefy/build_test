(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["handle-invoice-student-handle-invoice-student-module"],{

/***/ "./src/app/modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row invoice-form\">\r\n  <div class=\"col-md-6\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item *ngIf=\"!isTT78\" [label]=\"{text: _translate.CONTROLL.LABEL.invoice_form }\" dataField=\"invoice_release_id\"\r\n                  editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: select.invoice_releases, onValueChanged: templateChange, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item *ngIf=\"isTT78\" dataField=\"template_id\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: select.templatesTT78, onValueChanged: onChangeTem, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_form }}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\" message=\"{{ _translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"adjustment_form\" [label]=\"{text: _translate.CONTROLL.LABEL.adjustment_form}\"\r\n                  editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: select.adjustment_forms, onValueChanged: adjustmentFormChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.adjustment_form}} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"adjustment_object\" [label]=\"{text: _translate.CONTROLL.LABEL.adjustment_object}\"\r\n                  editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: select.adjustment_objects, onValueChanged: adjustmentObjectChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.adjustment_object}} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"invoice_date\" [label]=\"{text: _translate.GRID.INVOICE.invoice_date}\" editorType=\"dxDateBox\"\r\n                  [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', disabled: disableInvoiceDate, onValueChanged: changeDateTime}\">\r\n        </dxi-item>\r\n        <dxi-item cssClass=\"vat invoice-number-create-invoice\" dataField=\"invoice_number\"\r\n                  [label]=\"{text: _translate.GRID.INVOICE.invoice_number}\" editorType=\"dxNumberBox\"\r\n                  [editorOptions]=\"{ disabled: true}\">\r\n        </dxi-item>\r\n        <dxi-item [label]=\"{text: _translate.CONTROLL.LABEL.currency_code}\" dataField=\"currency_code\"\r\n                  editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: select.currency_codes, onValueChanged: currencyCodeChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n        </dxi-item>\r\n        <dxi-item dataField=\"currency_rate\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_rate}\"\r\n                  editorType=\"dxNumberBox\"\r\n                  [editorOptions]=\"{disabled: frmData.currency_code == 'VND',onValueChanged: currencyRateChange, format: '0,###'}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item [label]=\"{text: _translate.CONTROLL.LABEL.payment_method}\" dataField=\"payment_method_name\"\r\n                  editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: select.payment_method_names, displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.payment_method}} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item name=\"ht-xuat\">\r\n          <dxo-label text=\"{{_translate.CONTROLL.LABEL.export_form}}\"></dxo-label>\r\n          <div *dxTemplate>\r\n            <dx-select-box\r\n              [(value)]=\"frmData.status\"\r\n              displayExpr=\"name\"\r\n              valueExpr=\"code\"\r\n              [items]=\"htXuatOptions\"\r\n              [disabled] = \"!configs.system_parameter.allow_keep_invoice_number\"\r\n            ></dx-select-box>\r\n          </div>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='group-input-button'>\r\n          <dxi-item name=\"origin-invoice-number\">\r\n            <dxo-label text=\"{{_translate.GRID.INVOICE.invoice_number_original}}\"></dxo-label>\r\n            <div *dxTemplate>\r\n              <dx-text-box\r\n                [(value)]=\"oldForm.invoice_number\"\r\n                disabled=\"true\"\r\n              ></dx-text-box>\r\n            </div>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"origin_btn_options\" cssClass='btn-small'>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"soXacThucGoc\" [label]=\"{text: _translate.CONTROLL.LABEL.certificate_code}\"\r\n                  [editorOptions]=\"{disabled: true}\">\r\n        </dxi-item>\r\n        <!-- <dxi-item dataField=\"doc_relate_symbol\" [label]=\"{text: _translate.CONTROLL.LABEL.doc_relate_symbol}\">\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.doc_relate_symbol}} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"doc_relate_date\" [label]=\"{text: _translate.CONTROLL.LABEL.doc_relate_date}\"\r\n                  editorType=\"dxDateBox\"\r\n                  [editorOptions]=\"{displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd'}\">\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.doc_relate_date}} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n          <dxi-validation-rule type=\"range\" [min]=\"minNgayVB\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.doc_relate_date}} {{ _translate.VALIDATION.less_date_inv }}\"></dxi-validation-rule>\r\n          <dxi-validation-rule type=\"range\" [max]=\"maxNgayVB\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.doc_relate_date}} {{ _translate.VALIDATION.than_date_curent }}\"></dxi-validation-rule>\r\n        </dxi-item> -->\r\n      </dxi-item>\r\n      <dxi-item *ngIf=\"configs.system_parameter.display_export_place\" itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item [label]=\"{text: _translate.CONTROLL.LABEL.export_place}\" dataField=\"export_place\"\r\n                  editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: select.export_places, onValueChanged: exportPlaceChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item *ngIf=\"configs.system_parameter.display_transport_number\" itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"transport_number\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.transport_number' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item *ngIf=\"isTT78\" itemType=\"group\" [colCount]=\"1\">\r\n        <!-- Lý do thay thế -->\r\n        <dxi-item dataField=\"destroy_reason\">\r\n          <dxo-label text=\"Lý do điều chỉnh\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <dx-form\r\n      [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"student_code\" [label]=\"{text: _translate.CONTROLL.LABEL.code_student }\"\r\n                  [editorOptions]=\"{disabled: tod.student_code || disableForm.rest, isRequired: false}\">\r\n\r\n        </dxi-item>\r\n        <dxi-item dataField=\"student_name\" [label]=\"{text: _translate.CONTROLL.LABEL.name_student }\"\r\n                  [editorOptions]=\"{disabled: tod.student_name || disableForm.rest, isRequired: false}\">\r\n        </dxi-item>\r\n        <dxi-item dataField=\"class_name\" [label]=\"{text: _translate.CONTROLL.LABEL.class }\"\r\n                  [editorOptions]=\"{disabled: tod.class_name || disableForm.rest, isRequired: false}\">\r\n        </dxi-item>\r\n        <dxi-item dataField=\"study_year\" [label]=\"{text: _translate.CONTROLL.LABEL.study_year }\"\r\n                  [editorOptions]=\"{disabled: tod.study_year || disableForm.rest}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"buyer_address\" [label]=\"{text: _translate.CONTROLL.LABEL.address }\"\r\n                  [editorOptions]=\"{disabled: tod.buyer_address || disableForm.rest}\">\r\n        </dxi-item>\r\n        <!-- Tỷ lệ miễn giảm HP -->\r\n        <dxi-item dataField=\"student_reduce_rate_code\" editorType=\"dxSelectBox\"\r\n                  [label]=\"{text: _translate.CONTROLL.LABEL.exemption_and_reduction_rates }\"\r\n                  [editorOptions]=\"{items: TLMG_student, disabled: disableForm.rest, displayExpr: 'name', valueExpr: 'code'}\"\r\n        >\r\n        </dxi-item>\r\n        <dxi-item [label]=\"{text: 'Email'}\">\r\n          <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n            <div\r\n              class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n              <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                <app-tag-input-email [variableName]=\"this.emails\" (numberGenerated)=\"renderDataEmail($event)\"\r\n                ></app-tag-input-email>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n\r\n  <div class=\"col-md-12\" style=\"margin-top:7px;margin-bottom:7px\">\r\n    <dx-form>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <!--        <dxi-item name=\"xuat-mau-bb\">-->\r\n        <!--          <dx-button id=\"btn-xuat-mau-bb\" (click)=\"xuatMauBienBan()\" icon=\"{{_translate.ICONS.file_word}}\"-->\r\n        <!--                     text=\"{{_translate.CONTROLL.BUTTON.export_record}}\" type=\"default\"></dx-button>-->\r\n        <!--        </dxi-item>-->\r\n\r\n        <ng-container *ngIf=\"configs.system_parameter.allow_keep_invoice_number\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item name=\"btn-chossen-hdck\">\r\n              <dx-button id=\"btn-chossen-hdck\" (click)=\"showModalHdck()\" icon=\"assets\\img\\icons\\GiuSo.png\"\r\n                         text=\"{{_translate.CONTROLL.BUTTON.select_inv_wait_sign}}\" type=\"default\"></dx-button>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </ng-container>\r\n\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n</div>\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"350\"\r\n  [height]=\"175\"\r\n  [showTitle]=\"true\"\r\n  title=\"Thông báo\"\r\n  [dragEnabled]=\"false\"\r\n  [closeOnOutsideClick]=\"true\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{_translate.CONFIRM.update_customer}}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"capNhatDmKhachHang()\" text=\"{{_translate.CONTROLL.LABEL.update}}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{_translate.CONTROLL.BUTTON.cancel}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .vat.invoice-number-create-invoice input{color:red;font-weight:bold}\n"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AdjustFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustFormComponent", function() { return AdjustFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/library/invoice/v-changge-money.service */ "./src/app/core/library/invoice/v-changge-money.service.ts");
/* harmony import */ var _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/library/public/v-string.service */ "./src/app/core/library/public/v-string.service.ts");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _modules_handle_invoice_student_components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/handle-invoice-student/components/choose-hdck/choose-hdck.component */ "./src/app/modules/handle-invoice-student/components/choose-hdck/choose-hdck.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var AdjustFormComponent = /** @class */ (function () {
    function AdjustFormComponent(authService, route, modalService, vatService, translate, customersService, router) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.modalService = modalService;
        this.vatService = vatService;
        this.translate = translate;
        this.customersService = customersService;
        this.router = router;
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.adjustmentObject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTT78TypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emails = [];
        this.arrEmail = [];
        this.select = {};
        this.pattern = _config_index__WEBPACK_IMPORTED_MODULE_10__["pattern"];
        this.tax_codes = [];
        this.customer_codes = [];
        this.customerCurent = {};
        this.showPopup = false;
        this.disableForm = {
            tax_code: true,
            rest: true
        };
        this.formItems = [];
        this.customForms = [];
        this.customerTempt = {};
        // thay đổi disable của 3 input customer_name, buyer_name, buyer_address
        this.tod = {};
        this.disableInvoiceDate = this.authService.isAllowEditInvoiceDate();
        this.htXuatOptions = [];
        this.origin_btn_options = {
            text: '', icon: 'fa fa-eye', type: 'default',
            onClick: function () {
                var ids = [];
                ids.push(_this.oldForm.id);
                if (_this.oldForm.adjustment_type === 5) {
                    if (_this.oldForm.template_code.indexOf('02GTTT') >= 0)
                        window.open("/system/handle-invoice-student/edit-adjust-sale/" + _this.oldForm.id, '_blank');
                    else
                        window.open("/system/handle-invoice-student/edit-adjust-vat/" + _this.oldForm.id, '_blank');
                }
                else if (_this.oldForm.adjustment_type === 3) {
                    if (_this.oldForm.template_code.indexOf('02GTTT') >= 0)
                        window.open("/system/handle-invoice-student/edit-replace-sale/" + _this.oldForm.id, '_blank');
                    else
                        window.open("/system/handle-invoice-student/edit-replace-vat/" + _this.oldForm.id, '_blank');
                }
                else {
                    if (_this.oldForm.template_code.indexOf('02GTTT') >= 0) {
                        window.open("/system/student-sale-invoice/" + _this.oldForm.id, '_blank');
                    }
                    else {
                        window.open("/system/student-vat-invoice/" + _this.oldForm.id, '_blank');
                    }
                }
            }
        };
        this.mst_btn_options = {
            text: '', icon: 'assets/img/icons/Them.png', type: 'default',
            onClick: function () {
                var initialState = {
                    isVisibleGhiVaThemMoi: false
                };
                _this.bsModalRef = _this.modalService.show(_shared_components__WEBPACK_IMPORTED_MODULE_3__["AddCustomerComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                var submodal = _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveData) {
                        var customer = _this.bsModalRef.content.successSaveData;
                        _this.frmData.customer_name = customer.name;
                        _this.frmData.buyer_tax_code = customer.tax_code;
                        _this.frmData.buyer_name = customer.contact_person_name;
                        _this.frmData.buyer_address = customer.business_address;
                        _this.frmData.customer_code = customer.code;
                        _this.frmData.buyer_mobile = customer.contact_mobile;
                        if (customer.email) {
                            _this.frmData.buyer_email = customer.email;
                            _this.emails = [];
                            var stringDataEmailGet = customer.email.split(';');
                            for (var i = 0; i < stringDataEmailGet.length; i++) {
                                _this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
                            }
                        }
                        else {
                            _this.frmData.buyer_email = customer.email;
                            _this.emails = [];
                        }
                        if (customer.bank_account_number) {
                            _this.frmData.bank_account_number = customer.bank_account_number;
                        }
                        if (customer.bank_name) {
                            _this.frmData.bank_name = customer.bank_name;
                        }
                    }
                    submodal.unsubscribe();
                });
            }
        };
        this.adjustmentFormChange = function (e) {
            switch (e.value) {
                case 'THONG_TIN':
                    _this.select.adjustment_objects = [
                        {
                            name: 'Tiền chữ',
                            code: 'TIEN_CHU'
                        },
                        {
                            name: 'Tên học sinh, Địa chỉ, ...',
                            code: 'KH_DC'
                        },
                    ];
                    break;
                case 'TANG':
                    _this.select.adjustment_objects = [
                        {
                            name: 'Hàng hóa dịch vụ',
                            code: 'HH_DV'
                        },
                        {
                            name: 'Khác',
                            code: 'KHAC_TANG'
                        },
                    ];
                    break;
                case 'GIAM':
                    _this.select.adjustment_objects = [
                        {
                            name: 'Hàng hóa dịch vụ',
                            code: 'HH_DV'
                        },
                        {
                            name: 'Khác',
                            code: 'KHAC_GIAM'
                        },
                    ];
                    break;
                case 'KHAC':
                    _this.select.adjustment_objects = [
                        {
                            name: 'Khác',
                            code: 'KHAC'
                        },
                    ];
                    _this.frmData.adjustment_object = 'KHAC';
                    break;
                default:
                    break;
            }
        };
        this.adjustmentObjectChange = function (e) {
            if (_this.frmData.adjustment_form === 'THONG_TIN' && e.value === 'KH_DC') {
                _this.disableForm = { tax_code: false, rest: false };
                _this.adjustmentObject.emit('THONG_TIN_KH_DC');
            }
            else if (_this.frmData.adjustment_form === 'THONG_TIN' && e.value === 'TIEN_CHU') {
                _this.disableForm = { tax_code: true, rest: true };
                _this.adjustmentObject.emit('THONG_TIN_TIEN_CHU');
            }
            else if (_this.frmData.adjustment_form === 'KHAC' && e.value === 'KHAC') {
                _this.disableForm = { tax_code: false, rest: false };
                _this.adjustmentObject.emit('KHAC_KHAC');
            }
            else if (_this.frmData.adjustment_form === 'TANG' && e.value === 'HH_DV') {
                _this.disableForm = { tax_code: true, rest: true };
                _this.adjustmentObject.emit('TANG_HH_DV');
            }
            else if (_this.frmData.adjustment_form === 'TANG' && e.value === 'KHAC_TANG') {
                _this.disableForm = { tax_code: true, rest: true };
                _this.adjustmentObject.emit('TANG_KHAC_TANG');
            }
            else if (_this.frmData.adjustment_form === 'GIAM' && e.value === 'HH_DV') {
                _this.disableForm = { tax_code: true, rest: true };
                _this.adjustmentObject.emit('GIAM_HH_DV');
            }
            else if (_this.frmData.adjustment_form === 'GIAM' && e.value === 'KHAC_GIAM') {
                _this.disableForm = { tax_code: true, rest: true };
                _this.adjustmentObject.emit('GIAM_KHAC_GIAM');
            }
            if (e.value) {
                _this.frmData.buyer_tax_code = _this.oldForm.buyer_tax_code;
                _this.frmData.customer_name = _this.oldForm.customer_name;
                _this.frmData.buyer_address = _this.oldForm.buyer_address;
            }
            // this.adjustmentObject.emit(e.value);
        };
        this.customer_object_codeChange = function (e) {
            _this.setDisabledByCustomer_object_code(e.value);
        };
        this.templateChange = function (e) {
            _this.select.invoice_releases.forEach(function (item) {
                if (e.value === item.value) {
                    _this.frmData.template_id = item.template_id;
                    _this._objTemplateSelect = item;
                    _this.onTemplateTypeChange.emit(item);
                    if (!_this._objTemplateSelect.is_discount) {
                        _this.dataSource.items().forEach(function (item) {
                            item.discount = null;
                            item.amount_discount = null;
                        });
                        _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_14__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._objTemplateSelect, _this.configs.system_parameter);
                        if (_core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBay
                            || _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                            || _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                            || _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonXangDau) {
                            _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_14__["VChanggeMoneyService"]._changeMoneyTicket(_this.frmData, _this.formatter, _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type));
                        }
                    }
                    // Nếu là mẫu html
                    if (item.fields) {
                        _this.formItems = [];
                        _this.customForms = [];
                        var _dulieumorong_1 = item.fields.filter(function (x) { return x.type === '4'; });
                        if (_dulieumorong_1.length > 0) {
                            _dulieumorong_1.forEach(function (item) {
                                if (item.is_show) {
                                    if (item.data_type === 'chu') {
                                        _this.customForms.push({
                                            editorType: 'dxTextBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_1);
                                                }, disabled: true
                                            }
                                        });
                                    }
                                    if (item.data_type === 'soluong') {
                                        _this.customForms.push({
                                            editorType: 'dxNumberBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_1);
                                                }, disabled: true
                                            }
                                        });
                                    }
                                    if (item.data_type === 'soluong') {
                                        _this.customForms.push({
                                            editorType: 'dxNumberBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_1);
                                                }, disabled: true
                                            }
                                        });
                                    }
                                    if (item.data_type === 'ngay') {
                                        _this.customForms.push({
                                            editorType: 'dxDateBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_1);
                                                }, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', disabled: true
                                            }
                                        });
                                    }
                                    if (item.data_type === 'danhmuc') {
                                        _this.customForms.push({
                                            editorType: 'dxSelectBox',
                                            dataField: item.code,
                                            label: { text: item.name }
                                        });
                                    }
                                }
                            });
                            _this.formItems.push(_this.createCustomGroup());
                        }
                        _dulieumorong_1.forEach(function (item) {
                            _this.customerTempt[item.code] = item.value;
                        });
                    }
                    else {
                        _this.formItems = [];
                        _this.customerTempt = {};
                    }
                }
            });
        };
        this.onChangeTem = function (e) {
            _this.select.templatesTT78.forEach(function (item) {
                if (e.value === item.value) {
                    _this.frmData.template_id = item.value;
                    _this.frmData.invoice_series = item.invoice_series;
                    _this.frmData.template_code = item.template_code;
                    _this.onTemplateTT78TypeChange.emit(item);
                    for (var key in item) {
                        if (item.hasOwnProperty(key)) {
                            var value = item[key];
                            _this._oTemplateTT78[key] = value;
                        }
                    }
                    if (!_this._oTemplateTT78.is_discount) {
                        _this.invoice_products.load().then(function (dataSource) {
                            dataSource.forEach(function (item, index) {
                                item.discount = null;
                                item.amount_discount = null;
                            });
                        });
                        _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_14__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._oTemplateTT78, _this.configs.system_parameter);
                        if (_core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBay
                            || _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                            || _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                            || _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonXangDau) {
                            _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_14__["VChanggeMoneyService"]._changeMoneyTicket(_this.frmData, _this.formatter, _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type));
                        }
                    }
                    // Nếu là mẫu html
                    if (item.fields) {
                        _this.formItems = [];
                        _this.customForms = [];
                        var _arrayGrid = item.fields.filter(function (x) { return x.type === '5'; });
                        var _dulieumorong_2 = item.fields.filter(function (x) { return x.type === '4'; });
                        if (_dulieumorong_2.length > 0) {
                            _dulieumorong_2.forEach(function (item1) {
                                if (item1.is_show) {
                                    if (item1.data_type === 'chu') {
                                        _this.customForms.push({
                                            //  cssClass: 'vat layout_input',
                                            editorType: 'dxTextBox',
                                            dataField: item1.code,
                                            label: { text: item1.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_2);
                                                }
                                            }
                                        });
                                    }
                                    if (item1.data_type === 'soluong') {
                                        _this.customForms.push({
                                            //    cssClass: 'vat layout_input',
                                            editorType: 'dxNumberBox',
                                            dataField: item1.code,
                                            label: { text: item1.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_2);
                                                }
                                            }
                                        });
                                    }
                                    if (item1.data_type === 'ngay') {
                                        _this.customForms.push({
                                            //   cssClass: 'vat layout_input',
                                            editorType: 'dxDateBox',
                                            dataField: item1.code,
                                            label: { text: item1.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_2);
                                                }, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss',
                                            }
                                        });
                                    }
                                    if (item1.data_type === 'danhmuc') {
                                        _this.customForms.push({
                                            //    cssClass: 'vat layout_input',
                                            editorType: 'dxSelectBox',
                                            dataField: item1.code,
                                            label: { text: item1.name }
                                        });
                                    }
                                }
                            });
                            _this.formItems.push(_this.createCustomGroup());
                            _this.frmData.invoice_options = _dulieumorong_2;
                        }
                        else
                            _this.frmData.invoice_options = [];
                        _dulieumorong_2.forEach(function (value) {
                            _this.customerTempt[value.code] = value.value;
                        });
                    }
                    else {
                        _this.formItems = [];
                        _this.customerTempt = {};
                    }
                }
            });
        };
        this.currencyCodeChange = function (e) {
            if (_this.frmData.currency_code === 'VND') {
                _this.frmData.currency_rate = null;
            }
            _this.frmData.total_payment_in_word = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_16__["Helper"].tienBangChu(_this.frmData.total_payment, _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_14__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien), _this.frmData.currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        this.exportPlaceChange = function (e) {
            _this.select.export_places.forEach(function (item) {
                if (e.value === item.code) {
                    _this.frmData.export_address = item.dia_chi;
                }
            });
        };
        this.currencyRateChange = function (e) {
            if (!_this.isTT78)
                _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_14__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._objTemplateSelect, _this.configs.system_parameter);
            else
                _core_library_invoice_v_changge_money_service__WEBPACK_IMPORTED_MODULE_14__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._oTemplateTT78, _this.configs.system_parameter);
        };
        this.changeDateTime = function (e) {
            _this.changeTemplateInvoice(e.value);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    AdjustFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.minNgayVB = moment__WEBPACK_IMPORTED_MODULE_9__(this.oldForm.invoice_date).format('YYYY-MM-DD');
        this.maxNgayVB = moment__WEBPACK_IMPORTED_MODULE_9__(new Date()).format('YYYY-MM-DD');
        this.routeSub = this.route.data.subscribe(function (data) {
            _this.configs = _this.authService.getConfigs();
            // put data DM for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.payment_method_names = data.init[1].DM_HINH_THUC_THANH_TOAN;
            _this.select.currency_codes = data.init[1].DM_LOAI_TIEN;
            _this.select.customer_types = data.init[1].DM_NHOM_KHACH_HANG;
            _this.select.export_places = data.init[1].DM_NOI_XUAT_HOA_DON;
            _this.select.adjustment_forms = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_11__["VSelectBoxService"]._adjustmentForms(_this._translate);
            _this.htXuatOptions = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_11__["VSelectBoxService"]._htXuatOptions(_this._translate, _this.frmData.status);
            if (_this.configs.system_parameter.allow_keep_invoice_number === false) {
                _this.htXuatOptions = _this.htXuatOptions.filter(function (e) { return e.code !== _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].hinhThucXuat.XuatChoKy; });
            }
            if (_this.isTT78) {
                var temptTT78 = [];
                temptTT78 = data.init[0].filter(function (item) { return item.template_type !== 'HOA_DON_KHOI_TAO_TU_MAY_TINH_TIEN' && item.template_type !== 'PHIEU_THU_MAY_TINH_TIEN'; });
                _this.select.adjustment_forms = _this.select.adjustment_forms.filter(function (p) { return p.code != 'TANG_GIAM'; });
                if (temptTT78 && temptTT78.length > 0) {
                    _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
                    if (Number.parseInt(_this.frmData.invoice_number) > 0) {
                        if (_this.frmData.is_invoice_with_code != _this.infoDangKy.is_invoice_with_code) {
                            _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.frmData.is_invoice_with_code; });
                        }
                    }
                }
                if (_this.frmData.id)
                    _this.changeTemplateInvoice(_this.frmData.invoice_date);
            }
            else {
                _this.select.invoice_releases = data.init[0];
            }
        });
        this.select.customer_object_codes = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_11__["VSelectBoxService"]._customerObject(this._translate);
        this.select.adjustment_objects = [];
        if (this.frmData.adjustment_form) {
            this.adjustmentFormChange({ value: this.frmData.adjustment_form });
        }
        // Set disabled cho đơn vị tổ chức
        this.setDisabledByCustomer_object_code(this.frmData.customer_object_code);
        // tìm kiếm mã số thuế
        this.tax_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_13___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'tax_code');
            }
        });
        // // tìm kiếm mã khách hàng
        this.customer_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_13___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'code');
            }
        });
        if (!this.isTT78) {
            this.select.invoice_releases.forEach(function (item) {
                if (item.template_id === _this.frmData.template_id) {
                    // Nếu là mẫu html
                    if (item.fields && item.fields.length > 0) {
                        _this.formItems = [];
                        _this.customForms = [];
                        var _dulieumorong_3 = item.fields.filter(function (x) { return x.type === '4'; });
                        if (_dulieumorong_3.length > 0) {
                            _dulieumorong_3.forEach(function (item) {
                                if (item.is_show) {
                                    if (item.data_type === 'chu') {
                                        _this.customForms.push({
                                            editorType: 'dxTextBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_3);
                                                }
                                            }
                                        });
                                    }
                                    if (item.data_type === 'soluong') {
                                        _this.customForms.push({
                                            editorType: 'dxNumberBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_3);
                                                }
                                            }
                                        });
                                    }
                                    if (item.data_type === 'ngay') {
                                        _this.customForms.push({
                                            editorType: 'dxDateBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_3);
                                                }, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss',
                                            }
                                        });
                                    }
                                    if (item.data_type === 'danhmuc') {
                                        _this.customForms.push({
                                            editorType: 'dxSelectBox',
                                            dataField: item.code,
                                            label: { text: item.name }
                                        });
                                    }
                                }
                            });
                            _this.formItems.push(_this.createCustomGroup());
                        }
                        if (_this.frmData.invoice_options && _this.frmData.invoice_options.length > 0) {
                            _this.frmData.invoice_options.forEach(function (iteminv) {
                                _this.customerTempt[iteminv.code] = iteminv.value;
                            });
                        }
                        else {
                            _dulieumorong_3.forEach(function (item) {
                                _this.customerTempt[item.code] = item.value;
                            });
                        }
                    }
                }
            });
        }
        else {
            this.select.templatesTT78.forEach(function (item) {
                if (item.value === _this.frmData.template_id) {
                    // Nếu là mẫu html
                    if (item.fields && item.fields.length > 0) {
                        _this.formItems = [];
                        _this.customForms = [];
                        var _dulieumorong_4 = item.fields.filter(function (x) { return x.type === '4'; });
                        if (_dulieumorong_4.length > 0) {
                            _dulieumorong_4.forEach(function (item) {
                                if (item.is_show) {
                                    if (item.data_type === 'chu') {
                                        _this.customForms.push({
                                            editorType: 'dxTextBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_4);
                                                }
                                            }
                                        });
                                    }
                                    if (item.data_type === 'soluong') {
                                        _this.customForms.push({
                                            editorType: 'dxNumberBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_4);
                                                }
                                            }
                                        });
                                    }
                                    if (item.data_type === 'ngay') {
                                        _this.customForms.push({
                                            editorType: 'dxDateBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_4);
                                                }, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss',
                                            }
                                        });
                                    }
                                    if (item.data_type === 'danhmuc') {
                                        _this.customForms.push({
                                            editorType: 'dxSelectBox',
                                            dataField: item.code,
                                            label: { text: item.name }
                                        });
                                    }
                                }
                            });
                            _this.formItems.push(_this.createCustomGroup());
                        }
                        if (_this.frmData.invoice_options && _this.frmData.invoice_options.length > 0) {
                            _this.frmData.invoice_options.forEach(function (iteminv) {
                                _this.customerTempt[iteminv.code] = iteminv.value;
                            });
                        }
                        else {
                            _dulieumorong_4.forEach(function (item) {
                                _this.customerTempt[item.code] = item.value;
                            });
                            _this.frmData.invoice_options = _dulieumorong_4;
                        }
                    }
                }
            });
        }
        if (this.frmData.buyer_email) {
            this.emails = [];
            var emailToString = this.frmData.buyer_email;
            var a11 = emailToString.replace(/;/g, ',');
            this.emails = a11.split(',');
        }
    };
    AdjustFormComponent.prototype.ngAfterViewInit = function () {
        // this.listDxForm._results[1].readOnly = true;
    };
    AdjustFormComponent.prototype.readonlyAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = true;
        });
        this.readOnlyCacTruongConLai = true;
    };
    AdjustFormComponent.prototype.removeReadonlyAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = false;
            // item.instance.resetValues();
        });
        this.readOnlyCacTruongConLai = false;
    };
    ////// Tạo form mở rộng
    AdjustFormComponent.prototype.createCustomGroup = function () {
        return {
            itemType: 'group',
            colCount: '2',
            items: this.customForms
        };
    };
    /////// sự kiện thay đổi các trường mở rộng
    AdjustFormComponent.prototype.changeItem = function (_dulieumorong) {
        var _this = this;
        _dulieumorong.forEach(function (item) {
            for (var key in _this.customerTempt) {
                if (item.code === key) {
                    item.value = _this.customerTempt[key];
                }
            }
            _this.frmData.invoice_options = _dulieumorong;
        });
    };
    AdjustFormComponent.prototype.setDisabledByCustomer_object_code = function (value) {
        this.tod.customer_name = false;
        this.tod.buyer_name = false;
        this.tod.buyer_address = false;
        switch (value) {
            case 'DOANH_NGHIEP':
                break;
            case 'TRUONG_HOC':
                this.frmData.customer_name = '';
                this.tod.customer_name = true;
                break;
            default:
                break;
        }
    };
    AdjustFormComponent.prototype.getHtXuatValue = function () {
        return this.frmData.status;
    };
    // gửi data lên parent component
    AdjustFormComponent.prototype.onFieldDataChanged = function () {
        if (this.frmData.adjustment_object === 'MST') {
            this.dataSource.items()[0].product_name = "\u0110i\u1EC1u ch\u1EC9nh m\u00E3 s\u1ED1 thu\u1EBF C\u00F4ng ty/\u0111\u01A1n v\u1ECB mua h\u00E0ng t\u1EEB " + this.oldForm.buyer_tax_code + " th\u00E0nh " + this.frmData.buyer_tax_code;
            this.dataSource.reload();
        }
        if (this.frmData.adjustment_object === 'KH_DC') {
            var _noiDungDc = '';
            if (this.frmData.student_name && this.oldForm.student_name !== this.frmData.student_name) {
                _noiDungDc = "\u0110i\u1EC1u ch\u1EC9nh t\u00EAn h\u1ECDc sinh t\u1EEB " + this.oldForm.student_name + " th\u00E0nh " + this.frmData.student_name;
            }
            if (this.frmData.buyer_address && this.oldForm.buyer_address !== this.frmData.buyer_address) {
                if (_noiDungDc) {
                    _noiDungDc += '\n';
                }
                _noiDungDc += "\u0110i\u1EC1u ch\u1EC9nh \u0111\u1ECBa ch\u1EC9 c\u1EE7a \u0111\u01A1n v\u1ECB mua h\u00E0ng t\u1EEB " + this.oldForm.buyer_address + " th\u00E0nh " + this.frmData.buyer_address;
            }
            this.dataSource.items()[0].product_name = _noiDungDc;
            this.dataSource.reload();
        }
        this.formEvent.emit(this.frmData);
    };
    AdjustFormComponent.prototype.taxCodeChoose = function (e) {
        var customer = e.itemData;
        if (this.frmData.customer_object_code !== 'CA_NHAN' && this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.customer_name = customer.name;
        }
        this.frmData.buyer_name = customer.contact_person_name;
        if (this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.buyer_address = customer.business_address;
        }
        this.frmData.customer_code = customer.code;
        this.frmData.buyer_mobile = customer.contact_mobile;
        if (customer.email) {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
            var stringDataEmailGet = customer.email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
        else {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
        }
        this.frmData.customer_id = customer.id;
        this.onFieldDataChanged();
    };
    AdjustFormComponent.prototype.customerCodeChoose = function (e) {
        var customer = e.itemData;
        if (this.frmData.customer_object_code !== 'CA_NHAN' && this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.customer_name = customer.name;
        }
        this.frmData.buyer_name = customer.contact_person_name;
        if (this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.buyer_address = customer.business_address;
        }
        this.frmData.buyer_tax_code = customer.tax_code;
        this.frmData.buyer_mobile = customer.contact_mobile;
        if (customer.email) {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
            var stringDataEmailGet = customer.email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
        else {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
        }
        this.frmData.customer_id = customer.id;
        if (customer.bank_account_number) {
            this.frmData.bank_account_number = customer.bank_account_number;
        }
        if (customer.bank_name) {
            this.frmData.bank_name = customer.bank_name;
        }
        this.onFieldDataChanged();
    };
    AdjustFormComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    AdjustFormComponent.prototype.xuatMauBienBan = function () {
        _core_library__WEBPACK_IMPORTED_MODULE_17__["Library"].showloading();
        var inv = Object.assign({}, this.oldForm);
        inv.doc_relate_date = this.frmData.doc_relate_date;
        inv.doc_relate_symbol = this.frmData.doc_relate_symbol;
        inv.destroy_reason = this.frmData.destroy_reason;
        inv.invoice_files = [];
        this.vatService.xuatMauBienBanDc(inv).subscribe(function (rs) {
            if (rs.status === 'success') {
                var file = rs.data.invoice;
                _core_helper_Helper__WEBPACK_IMPORTED_MODULE_16__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
            }
            else {
                _core_library__WEBPACK_IMPORTED_MODULE_17__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_library__WEBPACK_IMPORTED_MODULE_17__["Library"].hideloading();
        });
    };
    AdjustFormComponent.prototype.showModalHdck = function () {
        var _this = this;
        var initialState = {
            invoiceNumberOrigin: this.oldForm.invoice_number,
            templateCode: this.oldForm.template_code,
            invoiceDateOrigin: this.oldForm.invoice_date,
            onSave: function (data) {
                _this.frmData.id = data.id;
                _this.frmData.invoice_date = data.invoice_date;
                _this.frmData.invoice_number = data.invoice_number;
                _this.frmData.batch_id = data.batch_id;
            }
        };
        this.bsModalHdckRef = this.modalService.show(_modules_handle_invoice_student_components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_18__["ChooseHdckComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-lg full-modal',
            initialState: initialState
        });
    };
    AdjustFormComponent.prototype.renderDataEmail = function ($event) {
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
            this.frmData.buyer_email = emailToString.replace(/,/g, ';');
        }
        else {
            this.frmData.buyer_email = null;
        }
        this.formEvent.emit(this.frmData);
    };
    AdjustFormComponent.prototype.huy = function () {
        this.showPopup = false;
    };
    AdjustFormComponent.prototype.changeTemplateInvoice = function (strDate) {
        var _this = this;
        if (this.isTT78) {
            var year_1 = "";
            if (_core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(strDate) != "")
                year_1 = _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(strDate).substring(4, 2);
            else {
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_9__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                year_1 = _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(invoiceDate).substring(4, 2);
            }
            var templates = this.select.templatesTT78;
            this.select.templatesTT78 = [];
            if (templates && templates.length > 0) {
                templates.forEach(function (item) {
                    if (_core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_15__["VStringService"]._getValueToString(item.name) != "")
                        item.name = item.name.replace(item.name.substring(4, 2), year_1);
                    // for (const key in item) {
                    //   if (item.hasOwnProperty(key)) {
                    //     const value = item[key];
                    //     this._oTemplateTT78[key] = value;
                    //   }
                    // }
                    if (item.value === _this.frmData.template_id) {
                        _this.onTemplateTT78TypeChange.emit(item);
                        //  item.invoice_series = item.invoice_series.replace(item.invoice_series.substring(3, 1), year);
                        // this.frmData.invoice_series = item.invoice_series;
                        // this.frmData.template_code = item.template_code;
                    }
                    _this.select.templatesTT78.push(item);
                });
            }
        }
    };
    AdjustFormComponent.prototype.disableTemplateInput = function () {
        if (this.frmData.invoice_number) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxFormComponent"]),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "listDxForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxFormComponent"])
    ], AdjustFormComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "TLMG_student", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "oldForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "invoice_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onFormChange'),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "formEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('adjustmentObjectChange'),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "adjustmentObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTypeChange'),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "onTemplateTypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTT78TypeChange'),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "onTemplateTT78TypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "infoDangKy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AdjustFormComponent.prototype, "isTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustFormComponent.prototype, "fileData", void 0);
    AdjustFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adjust-form',
            template: __webpack_require__(/*! ./adjust-form.component.html */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component.html"),
            styles: [__webpack_require__(/*! ./adjust-form.component.scss */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_8__["CustomersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdjustFormComponent);
    return AdjustFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Phần không tự tính giá trị, nhập mẫu bảng kê -->\r\n<div class=\"row support-invoice\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"pull-right\">\r\n      <!-- <dx-check-box *ngIf=\"configs.system_parameter.view_sale_by_phone\" id=\"auto-input\"\r\n                    text=\"{{ _translate.CONTROLL.LABEL.sale_by_phone }}\"\r\n                    [(value)]=\"frmData.sale_by_phone\"></dx-check-box> -->\r\n      <dx-check-box text=\"{{ _translate.CONTROLL.LABEL.no_calculation }}\" [(value)]=\"frmData.auto_value\"\r\n        (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      <dx-check-box *ngIf=\"isHdGTGT\" text=\"{{_translate.CONTROLL.LABEL.auto_value_price }}\"\r\n        [(value)]=\"frmData.auto_value_price\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <button type=\"button\" (click)=\"aa()\">aaa</button> -->\r\n\r\n<!-- phần table hiển thị -->\r\n<div class=\"row invoice-table\">\r\n  <div class=\"col-md-12\">\r\n    <dx-data-grid id=\"gridInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n      [allowColumnResizing]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n      (onKeyDown)=\"onGripKeyDown($event)\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n      (onEditorPrepared)=\"onEditorPrepared($event)\" (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n      (onCellClick)=\"onCellClick($event)\" (onRowPrepared)=\"onRowPrepared($event)\">\r\n      <!-- [wordWrapEnabled]=\"true\" -->\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"gripAllowEdit\"></dxo-editing>\r\n      <!-- <dxo-selection showCheckBoxesMode=\"none\" mode=\"single\"></dxo-selection> -->\r\n      <dxo-sorting mode=\"false\"></dxo-sorting>\r\n      <dxi-column cellTemplate=\"deleteColumn\" [fixed]=\"true\" fixedPosition=\"left\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.delete }}\" [allowEditing]=\"false\"\r\n        width=\"{{ _translate.GRID_WIDTH.delete_column }}\" minWidth=\"{{ _translate.GRID_WIDTH.delete_column }}\"\r\n        alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"view_order\" [fixed]=\"true\" fixedPosition=\"left\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.view_order }}\" width=\"{{ _translate.GRID_WIDTH.stt }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.stt }}\" alignment=\"center\"></dxi-column>\r\n\r\n      <dxi-column *ngIf=\"isTextProductName\" [fixed]=\"true\" fixedPosition=\"left\"\r\n        [editorOptions]=\"{showClearButton: true}\" dataField=\"product_name\"\r\n        caption=\"{{ _translate.GRID.REVENUE.revenue_name }}\" alignment=\"left\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.ten_hang }}\">\r\n        <dxo-lookup [dataSource]=\"select.productsView\" displayExpr=\"product_name\" valueExpr=\"product_name\"></dxo-lookup>\r\n      </dxi-column>\r\n\r\n      <dxi-column *ngIf=\"!isTextProductName\" [fixed]=\"true\" fixedPosition=\"left\" dataField=\"product_name\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.product_name }}\" alignment=\"left\">\r\n      </dxi-column>\r\n\r\n      <!-- <dxi-column [fixed]=\"true\" fixedPosition=\"left\" dataField=\"product_code\"\r\n                  caption=\"{{ _translate.GRID.REVENUE.revenue_code }}\" alignment=\"left\">\r\n      </dxi-column> -->\r\n\r\n      <dxi-column dataField=\"school_fee_month\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.school_fee_month }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.thang_thu_hp }}\" [editorOptions]=\"{disabled: true}\" alignment=\"center\"\r\n        [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Học kỳ -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_semester\" dataField=\"semester\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.hoc_ky }}\" caption=\"{{  _translate.GRID.INVOICE_DETAILS.semester }}\"\r\n        alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Diễn giải -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_promotion\" cellTemplate=\"dien_giai\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.explain }}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"unit_code\" [editorOptions]=\"lookupColumnOptions\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.unit_code }}\" width=\"{{ _translate.GRID_WIDTH.unit_code }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.unit_code }}\" alignment=\"center\">\r\n        <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"quantity\" headerCellTemplate=\"quantityHeader\" width=\"{{ _translate.GRID_WIDTH.so_luong }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\" [editorOptions]=\"{ format: formatter.so_luong }\"\r\n        [format]=\"formatter.so_luong\" dataType=\"number\" alignment=\"center\"></dxi-column>\r\n\r\n      <dxi-column dataField=\"price\" headerCellTemplate=\"priceHeader\" width=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\" [editorOptions]=\"{ format: formatter.don_gia }\"\r\n        [format]=\"formatter.don_gia\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n\r\n      <dxi-column dataField=\"amount\" headerCellTemplate=\"amountHeader\" width=\"{{ _translate.GRID_WIDTH.thanh_tien }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\" [editorOptions]=\"{ format: formatter.thanh_tien }\"\r\n        [format]=\"formatter.thanh_tien\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n      <dxi-column *ngIf=\"isHdGTGT\" dataField=\"vat\" [editorOptions]=\"{showClearButton: true}\"\r\n        headerCellTemplate=\"vatHeader\" width=\"{{ _translate.GRID_WIDTH.vat }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.vat }}\" alignment=\"center\">\r\n        <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column *ngIf=\"isHdGTGT\" dataField=\"amount_vat\" headerCellTemplate=\"amountVatHeader\"\r\n        width=\"{{ _translate.GRID_WIDTH.tien_thue }}\" minWidth=\"{{ _translate.GRID_WIDTH.tien_thue }}\"\r\n        [editorOptions]=\"{ format: formatter.tien_thue }\" [format]=\"formatter.tien_thue\" dataType=\"number\"\r\n        alignment=\"right\"></dxi-column>\r\n      <dxi-column dataField=\"amount_after_vat\" headerCellTemplate=\"amountAfterVatHeader\"\r\n        width=\"{{ _translate.GRID_WIDTH.tong_tien_sau_thue }}\" minWidth=\"{{ _translate.GRID_WIDTH.tong_tien_sau_thue }}\"\r\n        [editorOptions]=\"{ format: formatter.tong_tien }\" [format]=\"formatter.tong_tien\" dataType=\"number\"\r\n        alignment=\"right\"></dxi-column>\r\n\r\n      <!-- config column header -->\r\n      <div *dxTemplate=\"let d of 'quantityHeader'\">\r\n        <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.quantity }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceHeader'\">\r\n        <p (click)=\"configDecimal('don_gia')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.price }} <img\r\n            src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountHeader'\">\r\n        <p (click)=\"configDecimal('thanh_tien')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.amount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'dien_giai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_promotion\" [disabled]=\"d.data.is_promotion_new\"\r\n          (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountAfterVatHeader'\">\r\n        <p (click)=\"configDecimal('tong_tien')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.total_money\r\n          }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'vatHeader'\">\r\n        <p>VAT</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\" style=\"cursor: pointer;\"> {{ _translate.GRID.INVOICE_DETAILS.amount_vat\r\n          }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <!-- config column -->\r\n      <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n        <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n      </div>\r\n      <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    </dx-data-grid>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-row i{color:#0E77BB;font-size:18px}.support-invoice{margin-bottom:10px}.support-invoice .support-link{padding:6px 15px;border:1px solid #007bff;text-decoration:none}.support-invoice .support-link.mgr-15{margin-right:15px}.support-invoice .support-link img{margin-right:15px;margin-top:-2px}.support-invoice #auto-input{margin-right:75px}\n"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AdjustGripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustGripComponent", function() { return AdjustGripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/data/custom_store */ "./node_modules/devextreme/data/custom_store.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_components_select_month_select_month_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/select-month/select-month.component */ "./src/app/shared/components/select-month/select-month.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AdjustGripComponent = /** @class */ (function () {
    function AdjustGripComponent(authService, route, router, modalService, vatService, translate) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.vatService = vatService;
        this.translate = translate;
        this.contextMenu = [{ text: 'Thêm' }, { text: 'Xóa' }];
        this.select = {};
        this.showPopup = false;
        this.dataExcelFile = null;
        this.ttDaXuatHoaDon = false;
        this.isTextProductName = false;
        this.gripAllowEdit = false;
        this.isHdGTGT = true;
        this.selectMonth = false;
        this.gripChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.autoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lookupColumnOptions = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                var _this = this;
                var newItem = {};
                newItem.code = _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._convertToViKdau(args.text);
                newItem.name = args.text;
                this.select.unit_codes.unshift(newItem);
                setTimeout(function () {
                    _this.dataGrid.instance.columnOption('unit_code', 'lookup', {
                        dataSource: _this.select.unit_codes,
                        displayExpr: 'name',
                        valueExpr: 'code'
                    });
                });
                return newItem;
            }.bind(this)
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    AdjustGripComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.oldForm.template_code.indexOf('02GTTT') >= 0 || this.oldForm.template_code == "2") {
            this.isHdGTGT = false;
        }
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        var moth = moment__WEBPACK_IMPORTED_MODULE_10__();
        this.select.arrayYears = _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].listYears(currentUser.account.start_time_study, moth);
        this.fee_months = this.select.arrayYears[1];
        this.routeSub = this.route.data.subscribe(function (data) {
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.vats = data.init[1].DM_TY_LE_VAT;
            _this.select.select_provisions_on_accounts = data.init[1].DM_DINH_KHOAN;
            _this.select.products = [];
            _this.oldForm.invoice_products.forEach(function (item) {
                _this.select.products.push(item);
            });
            _this.select.productsView = {
                store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_4___default.a({
                    key: 'product_name',
                    loadMode: 'raw',
                    load: function (loadOptions) {
                        return _this.select.products;
                    },
                    byKey: function (key) {
                        return [];
                    }
                }),
                paginate: true,
                sort: 'product_name'
            };
        });
        //Event
        this.createUpdateEvent();
    };
    AdjustGripComponent.prototype.aa = function () {
        var _this = this;
        this.isTextProductName = !this.isTextProductName;
        // this.dataGrid.instance.repaint()
        setTimeout(function () {
            _this.dataGrid.instance.repaint();
            _this.dataGrid.instance.refresh();
        }, 100);
    };
    AdjustGripComponent.prototype.changeColumnProductNameToSelect = function () {
        var _this = this;
        this.isTextProductName = true;
        setTimeout(function () {
            _this.dataGrid.instance.refresh();
        }, 100);
    };
    AdjustGripComponent.prototype.changeColumnProductNameToText = function () {
        var _this = this;
        this.isTextProductName = false;
        setTimeout(function () {
            _this.dataGrid.instance.refresh();
        }, 100);
    };
    // khởi tạo sự kiện khi update
    AdjustGripComponent.prototype.createUpdateEvent = function () {
        var _this = this;
        setTimeout(function () {
            _this.invoice_products.on('updated', function (key, value) {
                var column = Object.keys(value)[0];
                _this.invoice_products.byKey(key).then(function (row) {
                    switch (column) {
                        case 'view_order':
                            _this.view_orderChange();
                            break;
                        case 'product_name':
                            _this.product_nameChange(row);
                            break;
                        case 'unit_code':
                            _this.unit_codeChange(row);
                            break;
                        case 'quantity':
                        case 'price':
                        case 'price_nte':
                        case 'vat':
                        case 'amount':
                        case 'amount_vat':
                        case 'amount_after_vat':
                        case 'amount_discount':
                        case 'discount':
                        case 'amount_without_discount':
                        case 'other_tax':
                        case 'other_charge':
                            _this._tinhGiaTri();
                            break;
                        default:
                            break;
                    }
                }, function (error) {
                    alert(error);
                });
            });
        }, 100);
    };
    AdjustGripComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    AdjustGripComponent.prototype.onCellClick = function (e) {
        var _this = this;
        if (e.column.dataField === 'school_fee_month') {
            this.selectMonth = false;
            var product = this.select.products.filter(function (p) { return p.code === e.row.data.product_code; })[0];
            if (product) {
                if (product.form_revenue === _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].hinhthucthu.Thang) {
                    var initialState = {
                        fee_months: this.fee_months,
                        month_year: e.row.data.school_fee_month,
                        product_code: e.row.data.product_code
                    };
                    this.bsModalRef = this.modalService.show(_shared_components_select_month_select_month_component__WEBPACK_IMPORTED_MODULE_11__["SelectMonthComponent"], {
                        class: 'second child-modal',
                        initialState: initialState,
                        backdrop: 'static',
                        keyboard: false,
                    });
                    var index_1 = 0;
                    this.modalService.onHide.subscribe(function () {
                        if (!_this.selectMonth) {
                            index_1++;
                            var tr = index_1;
                            if (index_1 == 1) {
                                if (e.row.data.product_code == _this.bsModalRef.content.product_code) {
                                    if (_this.bsModalRef.content.successSaveItem) {
                                        e.row.data.school_fee_month = _this.bsModalRef.content.successSaveData;
                                    }
                                    else {
                                    }
                                    var _lstMonth = [];
                                    if (e.row.data.school_fee_month)
                                        _lstMonth = e.row.data.school_fee_month.split(';').filter(function (p) { return p !== ''; });
                                    if (_lstMonth && _lstMonth.length > 0) {
                                        e.row.data.quantity = _lstMonth.length;
                                    }
                                    else {
                                        e.row.data.quantity = null;
                                    }
                                    if (e.row.data.quantity) {
                                        e.row.data.amount = e.row.data.price ? parseFloat(e.row.data.price) * parseFloat(e.row.data.quantity) : 0;
                                    }
                                    else {
                                        e.row.data.amount = e.row.data.price ? parseFloat(e.row.data.price) : 0;
                                    }
                                    if (_this.isHdGTGT) {
                                        e.row.data.amount_vat = (e.row.data.vat >= 0) ? _this.caculatorAmountVat(e.row.data.amount, e.row.data.vat) : null;
                                    }
                                    else {
                                        e.row.data.amount_vat = null;
                                    }
                                    e.row.data.amount_after_vat = e.row.data.amount + (e.row.data.amount_vat != null ? e.row.data.amount_vat : 0);
                                    _this.invoice_products.update(e.row.data.id, e.row.data);
                                    _this._tinhGiaTri();
                                    return true;
                                }
                            }
                        }
                    });
                }
            }
        }
    };
    AdjustGripComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            e.rowElement.style.whiteSpace = 'pre-wrap';
        }
    };
    AdjustGripComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField === 'product_name' && e.parentType === 'dataRow' && e.editorName !== 'dxSelectBox') {
            e.editorName = 'dxTextArea';
        }
        // if (e.parentType === 'dataRow') {
        //   e.editorOptions.onFocusOut = (args) => {
        //     if (e.dataField === 'unit_code') {
        //       const _obj = this.select.unit_codes.filter(p => p.code === e.row.data.unit_code)[0];
        //       if (_obj) {
        //         e.row.data.unit_name = _obj.name;
        //       } else {
        //         e.row.data.unit_name = '';
        //       }
        //     }
        //     if (e.dataField === 'country_code') {
        //       const _obj = this.select.countrys.filter(p => p.code === e.row.data.country_code)[0];
        //       if (_obj) {
        //         e.row.data.country_name = _obj.name;
        //       } else {
        //         e.row.data.country_name = '';
        //       }
        //     }
        //     this.invoice_products.update(e.row.data.id, e.row.data);
        //   };
        // }
    };
    AdjustGripComponent.prototype.onEditorPrepared = function (e) {
        if ((e.dataField === 'amount_without_discount' || e.dataField === 'discount' || e.dataField === 'amount_discount' || e.dataField === 'quantity' || e.dataField === 'price' || e.dataField === 'amount' || e.dataField === 'amount_vat' || e.dataField === 'amount_after_vat') && e.parentType === 'dataRow') {
            e.editorElement.childNodes[1].firstChild.onwheel = function (evt) {
                e.component.cancelEditData();
            };
            e.editorElement.childNodes[1].firstChild.addEventListener('select', function () {
                this.selectionStart = this.selectionEnd;
            }, false);
        }
    };
    AdjustGripComponent.prototype.onContextMenuPreparing = function (e) {
        var _this = this;
        if (e.row.rowType === 'data') {
            e.items = [{
                    text: 'Thêm hàng',
                    onItemClick: function () {
                        _this.addRow();
                    }
                },
                {
                    text: 'Xóa hàng',
                    onItemClick: function () {
                        _this.deleteRow(e.row.data);
                    }
                }];
        }
    };
    AdjustGripComponent.prototype.addRow = function () {
        var len, order;
        if (this.dataSource.items().length >= 1) {
            len = this.dataSource.items().length;
            order = this.dataSource.items()[len - 1].order + 1;
        }
        else {
            order = 1;
        }
        this.invoice_products.insert(this.frmData.add_invoice_products_data(order, order));
        this.dataSource.reload();
    };
    AdjustGripComponent.prototype.view_orderChange = function () {
        var _this = this;
        if (!this.isTT78) {
            var _index_1 = 0;
            this.dataSource.items().forEach(function (item) {
                if (item.view_order && _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    item.view_order = ++_index_1;
                }
                if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    if (!item.is_money_service) {
                        item.view_order = ++_index_1;
                    }
                    else {
                        item.view_order = null;
                    }
                }
            });
        }
        else {
            var _index_2 = 0;
            this.dataSource.items().forEach(function (item) {
                if (item.view_order && _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) !== _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    item.view_order = ++_index_2;
                }
                if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    if (!item.is_money_service) {
                        item.view_order = ++_index_2;
                    }
                    else {
                        item.view_order = null;
                    }
                }
            });
        }
    };
    // Thay đổi cột mã hàng
    AdjustGripComponent.prototype.product_nameChange = function (row) {
        var _this = this;
        setTimeout(function () {
            _this.select.products.some(function (item) {
                if (item.product_name === row.product_name) {
                    row.unit_code = _this.checkUnitCode(item.unit_code);
                    row.quantity = item.quantity ? parseFloat(item.quantity) : item.quantity;
                    row.price = item.price ? parseFloat(item.price) : item.price;
                    row.price_nte = item.price_nte ? parseFloat(item.price_nte) : item.price_nte;
                    row.amount = item.price ? parseFloat(item.price) : 0;
                    row.engine_number = item.engine_number;
                    row.school_fee_month = item.school_fee_month;
                    row.chassis_number = item.chassis_number;
                    row.other_tax = item.other_tax;
                    row.product_code = item.product_code;
                    row.other_charge = item.other_charge;
                    row.semester = item.semester;
                    if (_this.isHdGTGT) {
                        row.vat = item.vat != null ? item.vat.toString() : null;
                        row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                        row.amount_after_vat = row.amount + row.amount_vat;
                    }
                    else {
                        row.amount_after_vat = row.amount;
                    }
                    _this.invoice_products.update(row.order, row);
                    return true;
                }
            });
            _this._tinhGiaTri();
        }, 200);
    };
    AdjustGripComponent.prototype.unit_codeChange = function (row) {
        var _obj = this.select.unit_codes.filter(function (p) { return p.code == row.unit_code; })[0];
        if (_obj) {
            row.unit_name = _obj.name;
            this.invoice_products.update(row.id, row);
        }
        else {
            row.unit_name = '';
            this.invoice_products.update(row.id, row);
        }
    };
    AdjustGripComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code == unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    AdjustGripComponent.prototype._tinhGiaTri = function () {
        var _this = this;
        if (!this.isTT78) {
            setTimeout(function () {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, _this.select, _this._objTemplateSelect, _this.configs.system_parameter);
                if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBay
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayTongHop
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayChung
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayHoanVe
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonXangDau) {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["VChanggeMoneyService"]._changeMoneyTicket(_this.frmData, _this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type));
                }
            }, 100);
        }
        else {
            setTimeout(function () {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, _this.select, _this._oTemplateTT78, _this.configs.system_parameter);
                if (_core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBay
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayTongHop
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayChung
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayHoanVe
                    || _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonXangDau) {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["VChanggeMoneyService"]._changeMoneyTicket(_this.frmData, _this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type));
                }
            }, 100);
        }
    };
    AdjustGripComponent.prototype.caculatorAmountVat = function (amount, vat) {
        var temp = amount / 100 * vat;
        return this.roundNumber(temp, 5);
    };
    AdjustGripComponent.prototype.roundNumber = function (number, n) {
        var p = Math.pow(10, n);
        return Math.round(number * p) / p;
    };
    // Bật modal thay đổi số thập phân
    AdjustGripComponent.prototype.configDecimal = function (n) {
        var _this = this;
        var initialState = {
            column: n,
            formatter: this.formatter,
            showDonGiaNte: this.configs.system_parameter.view_price_nte
        };
        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_6__["ConfigDecimalComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                _this.formatter[data.column] = data.character;
                _this._tinhGiaTri();
            }
        });
    };
    // Xóa hàng
    AdjustGripComponent.prototype.deleteRow = function (item) {
        var _this = this;
        // setTimeout(() => {
        var check = confirm('Bạn có đồng ý xóa không?');
        if (check && !this.ttDaXuatHoaDon) {
            setTimeout(function () {
                _this.invoice_products.remove(item.id);
                // this.dataSource.store().remove(item.id);
                _this.dataSource.reload();
                _this._tinhGiaTri();
            }, 100);
        }
        // }, 200);
    };
    AdjustGripComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    AdjustGripComponent.prototype.changePhiDV = function (row) {
        this.view_orderChange();
        if (row.is_money_service) {
            row.commercial_discount = false;
        }
        if (row.is_money_service && _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(row.product_name) === '') {
            row.product_name = 'Phí dịch vụ';
            this.invoice_products.update(row.id, row);
        }
        else if (!row.is_money_service && _core_index__WEBPACK_IMPORTED_MODULE_5__["VStringService"]._getValueToString(row.product_name) === 'Phí dịch vụ') {
            row.product_name = '';
            this.invoice_products.update(row.id, row);
        }
    };
    AdjustGripComponent.prototype.cktmChange = function (row) {
        if (row.commercial_discount) {
            row.is_money_service = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"])
    ], AdjustGripComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"]),
        __metadata("design:type", Object)
    ], AdjustGripComponent.prototype, "listDxForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustGripComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustGripComponent.prototype, "invoice_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustGripComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustGripComponent.prototype, "not_auto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustGripComponent.prototype, "oldForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustGripComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AdjustGripComponent.prototype, "isTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustGripComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdjustGripComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('gripChange'),
        __metadata("design:type", Object)
    ], AdjustGripComponent.prototype, "gripChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('autoChange'),
        __metadata("design:type", Object)
    ], AdjustGripComponent.prototype, "autoChange", void 0);
    AdjustGripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adjust-grip',
            template: __webpack_require__(/*! ./adjust-grip.component.html */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component.html"),
            styles: [__webpack_require__(/*! ./adjust-grip.component.scss */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_7__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], AdjustGripComponent);
    return AdjustGripComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-bottom: 0!important; padding-left: 0!important;\">\r\n  <div class=\"row\">\r\n    <div class=\"pl-0 col-md-12\">\r\n      <div class=\"button-redirect\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"javascript:void(0)\">{{_translate.CONTROLL.BUTTON.report_adjustment}}</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link \" (click)=\"routeReport()\" href=\"javascript:void(0)\">\r\n              {{this.textReport}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"invoice-container\">\r\n    <!-- phần form thông tin -->\r\n    <app-adjust-form\r\n      [type]=\"1\"\r\n      [frmData]=\"frmData\"\r\n      [oldForm]=\"oldForm\"\r\n      [dataSource]=\"dataSource\"\r\n      [invoice_products]=\"invoice_products\"\r\n      [formatter]=\"formatter\"\r\n      [_objTemplateSelect]=\"_objTemplateSelect\"\r\n      [fileData]=\"fileData\"\r\n      [TLMG_student]=\"select.TLMG\"\r\n      (adjustmentObjectChange)=\"adjustmentObjectChange($event)\"\r\n      (onTemplateTypeChange)=\"onTemplateTypeChange($event)\"\r\n      [_oTemplateTT78] = \"_oTemplateTT78\"\r\n      [isTT78] = \"isTT78\"\r\n      [infoDangKy] = \"infoDangKy\"\r\n      (onTemplateTT78TypeChange)=\"onTemplateTT78TypeChange($event)\"\r\n    ></app-adjust-form>\r\n\r\n    <!-- <dx-button id=\"btn-chossen-hdck\" (click)=\"showModalHdck()\" icon=\"assets\\img\\icons\\GiuSo.png\" text=\"Chọn hóa đơn chờ ký\" type=\"default\"></dx-button> -->\r\n\r\n    <!-- table product -->\r\n    <app-adjust-grip\r\n        #child\r\n        [dataSource]=\"dataSource\"\r\n        [invoice_products]=\"invoice_products\"\r\n        [formatter]=\"formatter\"\r\n        [oldForm]=\"oldForm\"\r\n        [frmData]=\"frmData\"\r\n        [isTT78] = \"isTT78\"\r\n        [_oTemplateTT78] = \"_oTemplateTT78\"\r\n        [_objTemplateSelect]=\"_objTemplateSelect\">\r\n      >\r\n    </app-adjust-grip>\r\n\r\n    <!-- <button type=\"button\" (click)=\"updateCustomer()\">aa</button> -->\r\n\r\n    <div class=\"table-footer\">\r\n      <div class=\"table-footer-1\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-table-footer\" dataField=\"amount_after_vat\" editorType=\"dxNumberBox\"\r\n                      [editorOptions]=\"{format: formatter.thanh_tien, disabled: true,step:'0'}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n      <div class=\"table-footer-2\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-vat-table-footer\" dataField=\"total_amount_vat\" editorType=\"dxNumberBox\"\r\n                      [editorOptions]=\"{format: formatter.tien_thue, disabled: true, step:'0'}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n      <div class=\"table-footer-3\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-after-vat-table-footer\" dataField=\"amount\" editorType=\"dxNumberBox\"\r\n                      [editorOptions]=\"{format: formatter.tong_tien, disabled: true}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n      <div class=\"table-footer-4\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-table-footer\" dataField=\"amount_without_discount\" editorType=\"dxNumberBox\"\r\n                      [editorOptions]=\"{format: formatter.thanh_tien_chua_ck, disabled: true}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- vùng chọn file -->\r\n    <div class=\"row after-table\">\r\n      <div class=\"col-md-5\">\r\n        <file-upload-multiple [fileData]=\"fileData\" (fileChange)=\"getFileData($event)\"></file-upload-multiple>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <!-- <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item dataField=\"aaa\" [label]=\"{text: 'Tiền phí khác'}\" editorType=\"dxNumberBox\" [editorOptions]=\"{format: '0,###'}\"></dxi-item>\r\n            <dxi-item cssClass=\"vat money-pull-right\" dataField=\"on_currency_amount\" [label]=\"{text: _translate.CONTROLL.LABEL.on_currency_amount}\" editorType=\"dxNumberBox\" [editorOptions]=\"{format: '0,###', disabled: checkDisabledTotalPaymentInWord(),onKeyDown:keyDown}\"></dxi-item>\r\n            <dxi-item cssClass=\"vat money-pull-right\" dataField=\"amount\" [label]=\"{text: _translate.CONTROLL.LABEL.amount}\" editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatter.thanh_tien, disabled: checkDisabledTotalPaymentInWord(),onKeyDown:keyDown}\"></dxi-item>\r\n            <dxi-item cssClass=\"vat money-pull-right\" dataField=\"amount_vat5\" [label]=\"{text: _translate.CONTROLL.LABEL.amount_vat5}\" editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatter.tien_thue, disabled: checkDisabledTotalPaymentInWord(),onKeyDown:keyDown}\"></dxi-item>\r\n            <dxi-item cssClass=\"vat money-pull-right\" dataField=\"amount_vat10\" [label]=\"{text: _translate.CONTROLL.LABEL.amount_vat10}\" editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatter.tien_thue, disabled: checkDisabledTotalPaymentInWord(),onKeyDown:keyDown}\"></dxi-item>\r\n            <dxi-item cssClass=\"vat money-pull-right\" dataField=\"total_payment\" [label]=\"{text: _translate.CONTROLL.LABEL.amount_after_vat}\" editorType=\"dxNumberBox\" [editorOptions]=\"{format: formatter.tong_tien, onValueChanged: totalPaymentChange, disabled: checkDisabledTotalPaymentInWord(),onKeyDown:keyDown}\"></dxi-item>\r\n          </dxi-item>\r\n        </dx-form> -->\r\n        <div class=\"vat money-pull-right\">\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.on_currency_amount}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.on_currency_amount\" tabIndex=\"-1\" format=\"0,###\"\r\n                             step=\"0\"\r\n                             [disabled]=\"checkDisabledTotalPaymentInWord()\" (onKeyDown)=\"keyDown($event)\"\r\n              ></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount\" tabIndex=\"-1\" [format]=\"formatter.thanh_tien\"\r\n                             [disabled]=\"checkDisabledTotalPaymentInWord()\"\r\n                             step=\"0\"\r\n                             (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_amount_discount}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_discount\" tabIndex=\"-1\" [format]=\"formatter.tien_chiet_khau\"\r\n                             [disabled]=\"checkDisabledTotalPaymentInWord()\"\r\n                             step=\"0\"\r\n                             (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat5}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat5\" [format]=\"formatter.tien_thue\"\r\n                             [disabled]=\"checkDisabledTotalPaymentInWord()\"\r\n                             step=\"0\"\r\n                             (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat8}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat8\" [format]=\"formatter.tien_thue\"\r\n                             [disabled]=\"checkDisabledTotalPaymentInWord()\"\r\n                             step=\"0\"\r\n                             (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat10}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat10\" [format]=\"formatter.tien_thue\"\r\n                             [disabled]=\"checkDisabledTotalPaymentInWord()\"\r\n                             step=\"0\"\r\n                             (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat_other}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat_other\" [format]=\"formatter.tien_thue\"\r\n                             [disabled]=\"checkDisabledTotalPaymentInWord()\"\r\n                             step=\"0\"\r\n                             (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-5\">\r\n      </div>\r\n\r\n      <div class=\"col-md-3\">\r\n      </div>\r\n\r\n      <div class=\"col-md-4\" style=\"margin-top: 10px\">\r\n        <div class=\"vat money-pull-right\">\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_after_vat}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.total_payment\" [format]=\"formatter.tong_tien\"\r\n                             [disabled]=\"checkDisabledTotalPaymentInWord()\"\r\n                             tabIndex=\"-1\"\r\n                             step=\"0\"\r\n                             (onKeyDown)=\"keyDown($event)\"\r\n                             (onValueChanged)=\"totalPaymentChange($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item *ngIf=\"frmData.adjustment_form == 'THONG_TIN' && frmData.adjustment_object == 'TIEN_CHU'\"\r\n                      cssClass=\"vat total-payment-in-word\" name=\"origin-invoice-number\">\r\n              <dxo-label text=\"{{_translate.CONTROLL.LABEL.amount_pre_adjusted}}\"></dxo-label>\r\n              <div *dxTemplate>\r\n                <dx-text-box\r\n                  [(value)]=\"oldForm.total_payment_in_word\"\r\n                  readOnly=\"true\"\r\n                ></dx-text-box>\r\n              </div>\r\n            </dxi-item>\r\n            <dxi-item cssClass=\"vat total-payment-in-word\"\r\n                      [label]=\"{text: _translate.CONTROLL.LABEL.total_payment_in_word}\"\r\n                      dataField=\"total_payment_in_word\"\r\n                      [editorOptions]=\"{readOnly: checkDisabledTotalPaymentInWord(), onValueChanged: total_payment_in_wordChange}\"></dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n    </div>\r\n    <div class=\"row button-action\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" (click)=\"preview()\" icon=\"{{_translate.ICONS.view}}\"\r\n                     text=\"{{ _translate.CONTROLL.BUTTON.preview_invoice}}\" type=\"default\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"view()\" icon=\"{{_translate.ICONS.view}}\"\r\n                     text=\"{{ _translate.CONTROLL.BUTTON.view_invoice}}\" type=\"default\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"inChuyenDoi()\" icon=\"{{_translate.ICONS.print}}\"\r\n                     text=\"{{ _translate.CONTROLL.BUTTON.print_conversion}}\" type=\"default\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"isTuChoi\" (click)=\"xemlydotuchoi()\" [(icon)]=\"this._translate.ICONS.view\"\r\n                     text=\"{{_translate.CONTROLL.BUTTON.reason_reject}}\"\r\n                     type=\"default\"></dx-button>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !isAccessExportInv\" text=\"{{ _translate.CONTROLL.BUTTON.sign_approval}}\"\r\n                     icon=\"assets\\img\\icons\\XuatFile.png\" (click)=\"eSubmit('TRINH_KY')\" type=\"default\"\r\n                     validationGroup=\"formData\"\r\n                     [useSubmitBehavior]=\"true\"></dx-button>\r\n          <!-- <button type=\"button\" (click)=\"test()\">Test</button> -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" text=\"{{ _translate.CONTROLL.BUTTON.export_invoice}}\" appScrollToInvalid\r\n                     icon=\"{{_translate.ICONS.export_inv}}\" (click)=\"eSubmit('XUAT')\" type=\"default\"\r\n                     validationGroup=\"formData\" [useSubmitBehavior]=\"true\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" text=\"{{ _translate.CONTROLL.BUTTON.save_temporary}}\" appScrollToInvalid\r\n                     icon=\"{{_translate.ICONS.save}}\" (click)=\"eSubmit('GHI_TAM')\" type=\"default\"\r\n                     validationGroup=\"formData\" [useSubmitBehavior]=\"true\"></dx-button>\r\n          <dx-button appBackButton type=\"default\" icon=\"{{_translate.ICONS.come_back}}\"\r\n                     text=\"{{ _translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container{padding-top:15px}.after-table{margin-top:10px}::ng-deep .vat.total-payment-in-word{margin-top:15px}::ng-deep .vat.total-payment-in-word input{color:#000000;font-weight:bold;text-align:right}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}::ng-deep .vat.money-pull-right input{text-align:right}::ng-deep .pr-0.money-pull-right input{text-align:right}::ng-deep .prt-1.money-pull-right input{text-align:right}.vat.money-pull-right .dx-field-label{width:45%}.vat.money-pull-right .dx-field-value{width:55% !important}.button-action{margin-top:18px}.table-footer{height:40px;background:#E3E3E3;padding-top:3px}.table-footer .table-footer-1{display:inline-block;width:109px;float:right}.table-footer .table-footer-2{display:inline-block;width:120px;margin-right:32px;float:right}.table-footer .table-footer-3{display:inline-block;width:150px;margin-right:90px;float:right}.table-footer .table-footer-4{display:inline-block;width:109px;margin-right:190px;float:right}#btn-chossen-hdck{margin-top:10px;margin-left:50%;margin-bottom:10px}.dx-field-value.dx-widget,.dx-field-value:not(.dx-widget)>.dx-widget{height:25px}::ng-deep .prv-s-invoice .modal-content{border:0px;border-radius:0px}::ng-deep .v-s-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AdjustInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustInvoiceComponent", function() { return AdjustInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_handle_invoice_components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/handle-invoice/components/send-invoices/send-invoices.component */ "./src/app/modules/handle-invoice/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/handle-invoice/shared */ "./src/app/modules/handle-invoice/shared/index.ts");
/* harmony import */ var _modules_handle_invoice_student_components_adjust_adjust_form_adjust_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component.ts");
/* harmony import */ var _modules_handle_invoice_student_components_adjust_adjust_grip_adjust_grip_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
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























var AdjustInvoiceComponent = /** @class */ (function () {
    function AdjustInvoiceComponent(route, modalService, vatService, handleInvoiceService, socketService, authService, cdRef, translate, router, confirmService, spinner, vPreviewInvService, customeModalService) {
        var _this = this;
        this.route = route;
        this.modalService = modalService;
        this.vatService = vatService;
        this.handleInvoiceService = handleInvoiceService;
        this.socketService = socketService;
        this.authService = authService;
        this.cdRef = cdRef;
        this.translate = translate;
        this.router = router;
        this.confirmService = confirmService;
        this.spinner = spinner;
        this.vPreviewInvService = vPreviewInvService;
        this.customeModalService = customeModalService;
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["InvoiceModel"](5);
        this.ttDaXuatHoaDon = false; // Trạng thái đã xuất hóa đơn hay chưa
        this.formatter = {};
        this.select = {};
        this._objTemplateSelect = {};
        this.formatNumber = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].numberInvoiceFormatDev;
        this.tempKiFile = 0;
        this.confirmCheckPreview = false;
        this.isTuChoi = false;
        this.isAccessExportInv = false;
        this.fileData = [];
        this.isHdGTGT = true;
        this._oTemplateTT78 = {};
        this.isTT78 = false;
        this.total_payment_in_wordChange = function (e) {
            if (_this.frmData.adjustment_form === 'THONG_TIN' && _this.frmData.adjustment_object === 'TIEN_CHU') {
                var invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(_this.oldForm.invoice_date).format('DD/MM/YYYY');
                _this.dataSource.items()[0].product_name = "\u0110i\u1EC1u ch\u1EC9nh d\u00F2ng s\u1ED1 ti\u1EC1n b\u1EB1ng ch\u1EEF c\u1EE7a h\u00F3a \u0111\u01A1n s\u1ED1 " + _this.oldForm.invoice_number + ", k\u00FD hi\u1EC7u " + _this.oldForm.invoice_series + " ng\u00E0y " + invoice_date + " t\u1EEB: " + _this.oldForm.total_payment_in_word + " th\u00E0nh " + e.value;
                _this.productGrip.dataGrid.instance.refresh();
            }
        };
        // sự kiện form
        this.totalPaymentChange = function (e) {
            // this.onNumberChange();
            var currency_code = _this.frmData.currency_code;
            if (_this.configs.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            _this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].tienBangChu(e.value, _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien), currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    AdjustInvoiceComponent.prototype.ngAfterViewInit = function () {
        if (this.frmData.status === 'DA_XUAT') {
            this.disablleScreen();
            this.cdRef.detectChanges();
        }
        this.setDataSessionStorage(this.frmData);
    };
    AdjustInvoiceComponent.prototype.disablleScreen = function () {
        this.formInvoice.readonlyAllForm();
        this.productGrip.ttDaXuatHoaDon = true;
        this.ttDaXuatHoaDon = true;
    };
    AdjustInvoiceComponent.prototype.routeReport = function () {
        if (this.dataInvoice.origin_id !== null) {
            if (this.dataInvoice.status === 'GHI_TAM') {
                this.router.navigate(['/system/handle-report/create-report/', this.dataInvoice.origin_id, 'DIEU_CHINH']);
            }
            else {
                this.router.navigate(['/system/handle-report/create-report/', this.dataInvoice.id, 'DIEU_CHINH']);
            }
        }
        else {
            this.router.navigate(['/system/handle-report/create-report/', this.dataInvoice.id, 'DIEU_CHINH']);
        }
    };
    AdjustInvoiceComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var status;
        if (!this.frmData.id && !this.frmData.invoice_number) {
            status = 'THEM_MOI';
        }
        if (this.frmData.id && !this.frmData.invoice_number) {
            status = 'GHI_TAM';
        }
        if (this.frmData.id && this.frmData.invoice_number) {
            status = 'GIU_SO';
        }
        var xmlInvoice = "";
        var isNewXml = 0;
        if (status === 'THEM_MOI') {
            if (!this.isTT78) {
                var sub_1 = this.vatService.ghiTamForSeries(this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        _this.frmData.id = rs.data.id;
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_1.unsubscribe();
                });
            }
            else {
                var sub_2 = this.vatService.ghiTamForSeriesTT78(this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        _this.frmData.id = rs.data.id;
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_2.unsubscribe();
                });
            }
        }
        else if (status === 'GHI_TAM') {
            if (!this.isTT78) {
                var sub_3 = this.vatService.editBatch(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_3.unsubscribe();
                });
            }
            else {
                var sub_4 = this.vatService.editBatchTT78(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_4.unsubscribe();
                });
            }
        }
        else if (status === 'GIU_SO') {
            if (!this.isTT78) {
                var sub_5 = this.vatService.editBatch(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_5.unsubscribe();
                });
            }
            else {
                var sub_6 = this.vatService.editBatchTT78(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_6.unsubscribe();
                });
            }
        }
    };
    AdjustInvoiceComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        if (this.isTT78) {
            var ListSerialNumber = "DSCKS";
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
            }
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate, 'InvoiceData', ListSerialNumber, true);
        }
        else
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate);
    };
    AdjustInvoiceComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        // Helper.dowloadFile('hoadon.xml', 'xml', xml_string);
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        }, 20);
        var sub = this.vatService.xuatHoaDon({
            id: this.frmData.id,
            xml_string: xml_string,
            invoice_files: this.frmData.invoice_files
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.disablleScreen();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất hóa đơn thành công', 'success');
                _this.fileData = _this.frmData.invoice_files;
                _this.setDataSessionStorage(_this.frmData);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    AdjustInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // kết nối websocket
        this.connectWebsocket();
        var isViewTT32 = false;
        if (this.route.snapshot.queryParams['status'] === 'viewInvTT32') {
            isViewTT32 = true;
        }
        this.routeSub = this.route.data.subscribe(function (data) {
            if (data.init[4].length > 0) {
                _this.textReport = _this._translate.CONTROLL.BUTTON.view_report;
            }
            else {
                _this.textReport = _this._translate.CONTROLL.BUTTON.create_report;
            }
            _this.configs = _this.authService.getConfigs();
            _this.infoDangKy = _this.authService.getInfoRegister();
            _this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(_this.configs.decimal_places_json);
            _this.formatter.display_int = _this.configs.system_parameter.display_int;
            // put data DM for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.select_provisions_on_accounts = data.init[1].DM_DINH_KHOAN;
            _this.select.payment_method_names = data.init[1].DM_HINH_THUC_THANH_TOAN;
            _this.select.vats = data.init[1].DM_TY_LE_VAT;
            _this.select.TLMG = data.init[1].DM_TY_LE_MIEN_GIAM_HOC_PHI;
            _this.frmData.total_payment_in_word = null;
            if (_this.infoDangKy) {
                if (_this.infoDangKy.status == "CHAP_NHAN")
                    _this.isTT78 = true;
            }
            if (_this.isTT78 == true && isViewTT32)
                _this.isTT78 = false;
            if (_this.isTT78) {
                var temptTT78 = [];
                temptTT78 = data.init[0];
                if (temptTT78 && temptTT78.length > 0) {
                    _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
                    if (data.init[3] && Number.parseInt(data.init[3].invoice_number) > 0) {
                        if (data.init[3].is_invoice_with_code != _this.infoDangKy.is_invoice_with_code) {
                            _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == data.init[3].is_invoice_with_code; });
                        }
                    }
                }
            }
            else {
                _this.select.invoice_releases = data.init[0];
            }
            if (data.status === 'dieuchinhmoi') {
                _this.khoiTaoKhiThemMoi(data.init[3]);
                _this.oldForm = data.init[3];
            }
            else {
                _this.khoiTaoKhiSua(data.init[3]);
                _this.oldForm = data.init[3].origin;
            }
            if (data.init[4].length > 0 && _this.isTT78) {
                var oReport = data.init[4][data.init[4].length - 1];
                if (oReport)
                    _this.frmData.destroy_reason = oReport.adjustment_reason;
            }
            if (_this.oldForm.template_code.indexOf('02GTTT') >= 0) {
                _this.isHdGTGT = false;
            }
            _this.dataInvoice = data.init[3];
        });
        if (!this.isTT78) {
            this.select.invoice_releases.some(function (item) {
                if (item.value === _this.oldForm.invoice_release_id) {
                    _this._objTemplateSelect = item;
                    return true;
                }
            });
        }
        else {
            this.select.templatesTT78.some(function (item) {
                if (item.value === _this.oldForm.template_id) {
                    _this.invoiceTemplateTT78 = item;
                    for (var key in item) {
                        if (item.hasOwnProperty(key)) {
                            _this._oTemplateTT78[key] = item[key];
                        }
                    }
                    return true;
                }
            });
        }
        var currentUser = this.authService.getCurrentUser();
        var listpermissions = currentUser.user.permissions.split(',');
        var _obj = listpermissions.filter(function (p) { return p === 'phe_duyet'; });
        if (_obj.length > 0) {
            this.isAccessExportInv = true;
        }
        else {
            this.isAccessExportInv = false;
        }
    };
    AdjustInvoiceComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                // Helper.dowloadFile('test.xml', 'xml', data.Data.Content);
                if (data.Data.Name === 'hoadon.xml') {
                    _this.goiApiXuatHoaDon(data.Data.Content);
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    _this.frmData.issuer_name = data.Data.IssuerName;
                    _this.xuLiApiKhiXuat();
                }
                else {
                    _this.frmData.invoice_files.forEach(function (item) {
                        if (item.file_name === data.Data.Name) {
                            item.file_content = data.Data.Content;
                        }
                    });
                    _this.tempKiFile++;
                    if (_this.tempKiFile === _this.frmData.invoice_files.length) {
                        _this.xuLiApiKhiXuat();
                    }
                }
            }
        });
    };
    AdjustInvoiceComponent.prototype.khoiTaoKhiThemMoi = function (data) {
        var _this = this;
        // khởi tạo mới lưới
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6___default.a({
            key: 'id',
            data: this.frmData.invoice_products_data()
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7___default.a({
            store: this.invoice_products
        });
        // tạo mới đối tượng file
        this.fileData = [];
        // khởi tạo dữ liệu form điều chỉnh
        this.frmData.fillFormDieuChinh(data);
        if (this.frmData.vat_service_ticket != null) {
            this.frmData.vat_service_ticket = this.frmData.vat_service_ticket.toString();
        }
        if (!this.isTT78) {
            this.select.invoice_releases = this.select.invoice_releases.filter(function (p) { return p.number_survival > 0; });
            this.select.invoice_releases.forEach(function (item) {
                if (item.template_id == _this.frmData.template_id) {
                    _this.invoicereleaseTempt = item;
                }
            });
        }
        else {
            if (this.select.templatesTT78.length) {
                this.select.templatesTT78.forEach(function (item) {
                    if (item.value === _this.frmData.template_id) {
                        _this.invoiceTemplateTT78 = item;
                    }
                });
            }
        }
    };
    AdjustInvoiceComponent.prototype.checkDisabledTotalPaymentInWord = function () {
        if ((this.frmData.adjustment_form == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].adjustmentForm.thong_tin && this.frmData.adjustment_object == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].adjustmentForm.tien_chu) || this.frmData.adjustment_form == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].adjustmentForm.khac || this.frmData.auto_value) {
            return false;
        }
        return true;
    };
    AdjustInvoiceComponent.prototype.khoiTaoKhiSua = function (data) {
        var _this = this;
        // khởi tạo lưới từ dữ liệu sửa
        var _lst = this.frmData.setInvoice_products_data(data.invoice_products);
        if (_lst) {
            _lst.forEach(function (item) {
                if (item.product_name && item.unit_name) {
                    var obj1 = _this.select.unit_codes.filter(function (p) { return p.name === item.unit_name; })[0];
                    if (!obj1) {
                        item.unit_code = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._convertToViKdau(item.unit_name);
                    }
                    else if (!item.unit_code || (item.unit_code && item.unit_code != obj1.code))
                        item.unit_code = obj1.code;
                }
            });
        }
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6___default.a({
            key: 'id',
            data: _lst
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7___default.a({
            store: this.invoice_products
        });
        // khởi tạo dữ liệu form
        this.frmData.fillFormData(data);
        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.approve_status) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.TuChoi) {
            this.isTuChoi = true;
        }
        if (this.frmData.vat_service_ticket != null) {
            this.frmData.vat_service_ticket = this.frmData.vat_service_ticket.toString();
        }
        if (!this.isTT78) {
            this.select.invoice_releases.forEach(function (item) {
                if (item.template_id == _this.frmData.template_id) {
                    _this.invoicereleaseTempt = item;
                }
            });
        }
        else {
            this.select.templatesTT78.forEach(function (item) {
                if (item.value === _this.frmData.template_id) {
                    _this.invoiceTemplateTT78 = item;
                }
            });
        }
        // lấy file
        // this.fileData = [];
        this.fileData = data.invoice_files;
        // this.fileData = data.invoice_files;
        // cấu hình thập phân thêm mới
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
        // co cho sua luoi hang hoa ko
        var temp = this.frmData.adjustment_form + '_' + this.frmData.adjustment_object;
        if (temp === 'THONG_TIN_MST' || temp === 'THONG_TIN_KH_DC' || temp === 'THONG_TIN_TIEN_CHU') {
            this.productGrip.gripAllowEdit = false;
        }
        else {
            this.productGrip.gripAllowEdit = true;
        }
        if (temp === 'TANG_HH_DV' || temp === 'GIAM_HH_DV') {
            this.setContentProductNameV2('', 'select');
        }
    };
    /** Tương tác giữa các component */
    AdjustInvoiceComponent.prototype.getDataInChildForm = function (e) {
        this.frmData = e;
        if (this.frmData.adjustment_form === 'THONG_TIN' && this.frmData.adjustment_object === 'MST') {
            this.dataSource.items()[0].product_name = "\u0110i\u1EC1u ch\u1EC9nh m\u00E3 s\u1ED1 thu\u1EBF C\u00F4ng ty/\u0111\u01A1n v\u1ECB mua h\u00E0ng t\u1EEB " + this.oldForm.buyer_tax_code + " th\u00E0nh " + this.frmData.buyer_tax_code;
            this.productGrip.dataGrid.instance.refresh();
        }
        else if (this.frmData.adjustment_form === 'THONG_TIN' && this.frmData.adjustment_object === 'KH_DC') {
            if (this.oldForm.customer_name !== this.frmData.customer_name && this.oldForm.buyer_address === this.frmData.buyer_address) {
                this.dataSource.items()[0].product_name = "\u0110i\u1EC1u ch\u1EC9nh t\u00EAn \u0111\u01A1n v\u1ECB mua h\u00E0ng t\u1EEB " + this.oldForm.customer_name + " th\u00E0nh " + this.frmData.customer_name;
            }
            else if (this.oldForm.customer_name === this.frmData.customer_name && this.oldForm.buyer_address !== this.frmData.buyer_address) {
                this.dataSource.items()[0].product_name = "\u0110i\u1EC1u ch\u1EC9nh \u0111\u1ECBa ch\u1EC9 c\u1EE7a \u0111\u01A1n v\u1ECB mua h\u00E0ng t\u1EEB " + this.oldForm.buyer_address + " th\u00E0nh " + this.frmData.buyer_address;
            }
            else if (this.oldForm.customer_name === this.frmData.customer_name && this.oldForm.buyer_address === this.frmData.buyer_address) {
                this.dataSource.items()[0].product_name = '';
            }
            else {
                this.dataSource.items()[0].product_name = "\u0110i\u1EC1u ch\u1EC9nh t\u00EAn \u0111\u01A1n v\u1ECB mua h\u00E0ng t\u1EEB " + this.oldForm.customer_name + " th\u00E0nh " + this.frmData.customer_name + "\n\u0110i\u1EC1u ch\u1EC9nh \u0111\u1ECBa ch\u1EC9 c\u1EE7a \u0111\u01A1n v\u1ECB mua h\u00E0ng t\u1EEB " + this.oldForm.buyer_address + " th\u00E0nh " + this.frmData.buyer_address;
            }
            this.productGrip.dataGrid.instance.refresh();
        }
    };
    AdjustInvoiceComponent.prototype.updateSomeTotalInput = function (e) {
    };
    AdjustInvoiceComponent.prototype.fillAutoInput = function (e) {
        this.frmData.auto_value = e;
    };
    // Lấy data khi chọn file đính kèm bảng kê
    AdjustInvoiceComponent.prototype.getFileData = function (fileData) {
        this.fileData = fileData;
    };
    AdjustInvoiceComponent.prototype.adjustmentObjectChange = function (v) {
        this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].tienBangChu(this.frmData.total_payment, _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien), this.frmData.currency_code, this.configs.system_parameter.display_read_money_english);
        switch (v) {
            case 'TANG_HH_DV':
                this.setContentProductName('', 'select');
                this.productGrip.gripAllowEdit = true;
                break;
            case 'TANG_KHAC_TANG':
                this.setContentProductName('', 'text');
                this.productGrip.gripAllowEdit = true;
                break;
            case 'GIAM_HH_DV':
                this.setContentProductName('', 'select');
                this.productGrip.gripAllowEdit = true;
                break;
            case 'GIAM_KHAC_GIAM':
                this.setContentProductName('', 'text');
                this.productGrip.gripAllowEdit = true;
                break;
            case 'THONG_TIN_KH_DC':
                this.setContentProductName("\u0110i\u1EC1u ch\u1EC9nh t\u00EAn h\u1ECDc sinh t\u1EEB " + this.oldForm.student_name + " th\u00E0nh " + this.oldForm.student_name + "\n\u0110i\u1EC1u ch\u1EC9nh \u0111\u1ECBa ch\u1EC9 c\u1EE7a h\u1ECDc sinh t\u1EEB " + this.oldForm.buyer_address + " th\u00E0nh " + this.oldForm.buyer_address, 'text');
                this.productGrip.gripAllowEdit = false;
                break;
            case 'THONG_TIN_TIEN_CHU':
                var invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.oldForm.invoice_date).format('DD/MM/YYYY');
                this.setContentProductName("\u0110i\u1EC1u ch\u1EC9nh d\u00F2ng s\u1ED1 ti\u1EC1n b\u1EB1ng ch\u1EEF c\u1EE7a h\u00F3a \u0111\u01A1n s\u1ED1 " + this.oldForm.invoice_number + ", k\u00FD hi\u1EC7u " + this.oldForm.invoice_series + " ng\u00E0y " + invoice_date + " t\u1EEB: " + this.oldForm.total_payment_in_word + " th\u00E0nh ", 'text');
                this.productGrip.gripAllowEdit = false;
                break;
            case 'KHAC_KHAC':
                this.productGrip.changeColumnProductNameToText();
                this.productGrip.gripAllowEdit = true;
                break;
            default:
                break;
        }
    };
    AdjustInvoiceComponent.prototype.setContentProductName = function (value, type) {
        var _this = this;
        setTimeout(function () {
            _this.productGrip.dataSource.items()[0].product_name = value;
            if (type === 'text') {
                _this.productGrip.changeColumnProductNameToText();
            }
            else if (type === 'select') {
                _this.productGrip.changeColumnProductNameToSelect();
            }
        }, 100);
    };
    AdjustInvoiceComponent.prototype.setContentProductNameV2 = function (value, type) {
        var _this = this;
        setTimeout(function () {
            if (type === 'text') {
                _this.productGrip.changeColumnProductNameToText();
            }
            else if (type === 'select') {
                _this.productGrip.changeColumnProductNameToSelect();
            }
        }, 100);
    };
    /** Kết thúc */
    AdjustInvoiceComponent.prototype.roundNumber = function (number, n) {
        if (number == null) {
            return number;
        }
        else {
            var p = Math.pow(10, n);
            return Math.round(number * p) / p;
        }
    };
    AdjustInvoiceComponent.prototype.formatDecimalColumn = function (number) {
        if (number === 0) {
            return '0,###';
        }
        else {
            return '0,###.' + '0'.repeat(number);
        }
    };
    // Các hàm chức năng chính
    AdjustInvoiceComponent.prototype.getDataPreview = function () {
        var _this = this;
        var formatter = {};
        formatter = this.configs.system_parameter.decpoint_is_dot ? { decimal: '.', thousands: ',' } : { decimal: ',', thousands: '.' };
        var data = JSON.parse(JSON.stringify(this.frmData));
        var decimal_quatity = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.so_luong);
        var decimal_price = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.don_gia);
        var decimal_amount = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.thanh_tien);
        var decimal_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tien_thue);
        var decimal_amount_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien);
        // let decimal_amount =  VChanggeMoneyService.getFormatterToNumber(this.formatter.thanh_tien);
        var total_amount_product_with_vatx = null, total_amount_product_with_vat0 = null, total_amount_product_with_vat5 = null, total_amount_product_with_vat10 = null, amount_vat0 = null;
        data.invoice_products.forEach(function (item) {
            if (item.vat === -1) {
                total_amount_product_with_vatx += item.amount_after_vat;
            }
            if (item.vat === 0) {
                total_amount_product_with_vat0 += item.amount_after_vat;
            }
            if (item.vat === 0) {
                amount_vat0 += item.amount_vat;
            }
            if (item.vat === 5) {
                total_amount_product_with_vat5 += item.amount_after_vat;
            }
            if (item.vat === 10) {
                total_amount_product_with_vat10 += item.amount_after_vat;
            }
            item['unit_name'] = '';
            _this.select.unit_codes.forEach(function (unit) {
                item.discount = '';
                item.total_discount = '';
                if (unit.code === item.unit_code) {
                    item['unit_name'] = unit.name;
                }
            });
            item.amount = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(item.amount, decimal_amount, formatter);
            item.price = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(item.price, decimal_price, formatter);
            item.quantity = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(item.quantity, decimal_quatity, formatter);
            item.amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(item.amount_vat, 0, formatter);
            item.amount_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(item.amount_after_vat, decimal_amount_after_vat, formatter);
        });
        data.total_amount_product_with_vatx = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(total_amount_product_with_vatx, decimal_amount_after_vat, formatter);
        data.total_amount_product_with_vat0 = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(total_amount_product_with_vat0, decimal_amount_after_vat, formatter);
        data.total_amount_product_with_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(total_amount_product_with_vat5, decimal_amount_after_vat, formatter);
        data.total_amount_product_with_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(total_amount_product_with_vat10, decimal_amount_after_vat, formatter);
        data.amount_vat0 = amount_vat0;
        data.total_amount_product_vatx = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(data.total_amount_product_vatx, decimal_amount, formatter);
        data.total_amount_product_vat0 = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(data.total_amount_product_vat0, decimal_amount, formatter);
        data.total_amount_product_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(data.total_amount_product_vat5, decimal_amount, formatter);
        data.total_amount_product_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(data.total_amount_product_vat10, decimal_amount, formatter);
        data.amount_vat5 = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(data.amount_vat5, decimal_amount_vat, formatter);
        data.amount_vat10 = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(data.amount_vat10, decimal_amount_vat, formatter);
        data.amount = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(data.amount, decimal_amount, formatter);
        data.total_amount_vat = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(data.total_amount_vat, decimal_amount_vat, formatter);
        data.total_payment = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatMoney(data.total_payment, decimal_amount_after_vat, formatter);
        return data;
    };
    AdjustInvoiceComponent.prototype.demo = function () {
        //
    };
    AdjustInvoiceComponent.prototype.preview = function () {
        var _this = this;
        setTimeout(function () {
            _this.handleFormData();
            if (!_this._validForm(true)) {
                return;
            }
            var data = _this.vatService.taodulieuXemTruocHS(_this.frmData);
            data['configs'] = _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].cauhinhxemmau.hoadon;
            _this.vPreviewInvService.xemMau(data);
        }, 300);
    };
    AdjustInvoiceComponent.prototype.view = function () {
        var ids = [];
        ids.push(this.frmData.id);
        var data = this.vatService.taodulieuXemMauHS(ids);
        data['configs'] = _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].cauhinhxemmau.hoadon;
        this.vPreviewInvService.xemMau(data);
    };
    AdjustInvoiceComponent.prototype.inChuyenDoi = function () {
        var ids = [];
        ids.push(this.frmData.id);
        var data = this.vatService.taodulieuInchuyendoiHS(ids);
        data['configs'] = _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].cauhinhxemmau.hoadon;
        this.vPreviewInvService.xemMau(data);
    };
    AdjustInvoiceComponent.prototype.ghiTam = function (data) {
        var _this = this;
        if (this.frmData.id) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            if (!this.isTT78) {
                var sub_7 = this.vatService.editBatch(this.frmData.id, data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.id = rs.data.id;
                        if (_this.frmData.approve_status === _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.ChoDuyet) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Trình ký thành công', 'success');
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Cập nhật thành công', 'success');
                        }
                        _this.setDataSessionStorage(_this.frmData);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_7.unsubscribe();
                });
            }
            else {
                var sub_8 = this.vatService.editBatchTT78(this.frmData.id, data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.id = rs.data.id;
                        if (_this.frmData.approve_status === _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.ChoDuyet) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Trình ký thành công', 'success');
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Cập nhật thành công', 'success');
                        }
                        _this.setDataSessionStorage(_this.frmData);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_8.unsubscribe();
                });
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            if (!this.isTT78) {
                var sub_9 = this.vatService.ghiTamForSeries(data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.id = rs.data.id;
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Ghi tạm thành công', 'success');
                        _this.setDataSessionStorage(_this.frmData);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_9.unsubscribe();
                });
            }
            else {
                var sub_10 = this.vatService.ghiTamForSeriesTT78(data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.id = rs.data.id;
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Ghi tạm thành công', 'success');
                        _this.setDataSessionStorage(_this.frmData);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_10.unsubscribe();
                });
            }
        }
    };
    AdjustInvoiceComponent.prototype.xuatChoKy = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        if (!this.isTT78) {
            var sub_11 = this.vatService.xuatChoKyForSeries(data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.id = rs.data.id;
                    _this.frmData.invoice_number = rs.data.invoice_number;
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    if (_this.frmData.approve_status === _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.ChoDuyet) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Trình ký thành công', 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất chờ ký thành công', 'success');
                    }
                    _this.setDataSessionStorage(_this.frmData);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_11.unsubscribe();
            });
        }
        else {
            var sub_12 = this.vatService.xuatChoKyForSeriesTT78(data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.id = rs.data.id;
                    _this.frmData.invoice_number = rs.data.invoice_number;
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    if (_this.frmData.approve_status === _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.ChoDuyet) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Trình ký thành công', 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất chờ ký thành công', 'success');
                    }
                    _this.setDataSessionStorage(_this.frmData);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_12.unsubscribe();
            });
        }
    };
    AdjustInvoiceComponent.prototype.xuatHoaDon = function (data) {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            if (this.frmData.invoice_files.length) {
                this.frmData.invoice_files.forEach(function (item) {
                    _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, item.file_content, item.file_name, item.file_name.split('.').pop(), true, _this.frmData.invoice_date);
                });
            }
            else {
                if (this.isTT78) {
                    var ListSerialNumber = "DSCKS";
                    if (this.infoDangKy && this.infoDangKy.registration_signature) {
                        var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                        if (signatures && signatures.length > 0)
                            ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                    }
                    var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
                }
                else
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
            }
        }
    };
    AdjustInvoiceComponent.prototype._validForm = function (isOnlyCheckAm) {
        var _isValid = true;
        if ((this.frmData.amount_vat5 < 0 || this.frmData.amount_vat10 < 0 || this.frmData.total_payment < 0)
            && !this.configs.system_parameter.allow_export_with_negative) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.discount_same_vat, 'error');
            return false;
        }
        if (isOnlyCheckAm) {
            return true;
        }
        if (this.frmData.customer_object_code === 'TRUONG_HOC') {
            if (!this.frmData.student_code) {
                if (this.formInvoice.form.instance.getEditor('student_code')) {
                    this.formInvoice.form.instance.getEditor('student_code').focus();
                }
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.code_student + ' ' + this._translate.VALIDATION.required, 'error');
                return false;
            }
            if (!this.frmData.student_name) {
                if (this.formInvoice.form.instance.getEditor('student_name')) {
                    this.formInvoice.form.instance.getEditor('student_name').focus();
                }
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.name_student + ' ' + this._translate.VALIDATION.required, 'error');
                return false;
            }
        }
        var _lst = this.frmData.invoice_products.filter(function (p) { return p.product_name; });
        if (_lst.length === 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_product, 'error');
            this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
            return false;
        }
        else {
            var _loop_1 = function (i) {
                if ((_lst[i].group_code == "HOCPHI" || _lst[i].group_code == "HOCTHEM") && (_lst[i].school_fee_month == '' || !_lst[i].school_fee_month)) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this_1._translate.GRID.INVOICE_DETAILS.school_fee_month + " " + this_1._translate.VALIDATION.required, 'error', 5000);
                    this_1.productGrip.dataGrid.instance.focus(this_1.productGrip.dataGrid.instance.getCellElement(i, 'product_code'));
                    return { value: false };
                }
                var _lstProduct = _lst.filter(function (p) { return p.product_code == _lst[i].product_code; });
                if (_lstProduct && _lstProduct.length > 1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Mã '" + _lst[i].product_code + "' bị trùng", 'error', 5000);
                    this_1.productGrip.dataGrid.instance.focus(this_1.productGrip.dataGrid.instance.getCellElement(i, 'product_code'));
                    return { value: false };
                }
            };
            var this_1 = this;
            for (var i = 0; i < _lst.length; i++) {
                var state_1 = _loop_1(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            if (!this.isTT78) {
                var numberRow = this.invoicereleaseTempt.numberRow;
                if (numberRow == 100) {
                    if (_lst.length > 1) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Chỉ được chọn 1 khoản thu để xuất hóa đơn", 'error', 5000);
                        this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
                        return false;
                    }
                }
            }
            else {
                if (this.frmData.destroy_reason === null || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.destroy_reason) == "") {
                    this.formInvoice.form.instance.getEditor('destroy_reason').focus();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Lý do điều chỉnh" + ' ' + this._translate.VALIDATION.required, 'error');
                    return false;
                }
                var numberRow = this.invoiceTemplateTT78.numberRow;
                if (numberRow == 100) {
                    if (_lst.length > 1) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Chỉ được chọn 1 khoản thu để xuất hóa đơn", 'error', 5000);
                        this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
                        return false;
                    }
                }
            }
        }
        return _isValid;
    };
    AdjustInvoiceComponent.prototype.eSubmit = function (type) {
        var _this = this;
        var checkValid = this.formInvoice.form.instance.validate();
        if (!checkValid.isValid) {
            return;
        }
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        this.total_payment = "";
        setTimeout(function () {
            _this.handleFormData();
            if (type !== 'GHI_TAM') {
                if (!_this._validForm(false)) {
                    return;
                }
                if (!_core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_10__["InvoicesService"].checkTimeExportInv(_this.configs.system_parameter)) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_11__["String"].Format(_this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_2__(_this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_2__(_this.configs.system_parameter.time_end).format('HH:mm')), 'error');
                    return;
                }
            }
            if (_this.frmData.invoice_options) {
                _this.frmData.invoice_options.forEach(function (item) {
                    delete item['is_show'];
                    delete item['type'];
                    delete item['width'];
                    delete item['statusData'];
                    delete item['id'];
                    delete item['invoice_id'];
                });
            }
            if (_this.frmData.total_payment > 20000000 && (_this.frmData.payment_method_name === 'TM')) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng chọn HTTT chuyển khoản cho hóa đơn có giá trị lớn hơn 20 triệu đồng', 'error');
                return false;
            }
            if (!_this.isAccessExportInv && type === 'XUAT' && _this.formInvoice.getHtXuatValue() !== _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].hinhThucXuat.XuatChoKy) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.you_not_permissions, 'error');
                return false;
            }
            if (type === 'XUAT' || (type === 'TRINH_KY' && _this.frmData.status === _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].hinhThucXuat.XuatChoKy)) {
                if (type === 'TRINH_KY' && _this.frmData.status === _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].hinhThucXuat.XuatChoKy) {
                    _this.confirmCheckPreview = true;
                }
                if (_this.confirmCheckPreview) {
                    if (_this.formInvoice.getHtXuatValue() !== _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].hinhThucXuat.XuatChoKy) {
                        _this.xuatHoaDon(_this.frmData);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].confirmXuatChoKy(function () {
                            if (!_this.isAccessExportInv) {
                                if (type === 'TRINH_KY') {
                                    _this.frmData.refuse_reason = '';
                                    _this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.ChoDuyet;
                                }
                                else {
                                    if (_this.frmData.approve_status !== _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.TuChoi) {
                                        _this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.ChuaTrinhKy;
                                    }
                                }
                            }
                            _this.xuatChoKy(_this.frmData);
                        });
                    }
                    _this.confirmCheckPreview = false;
                }
                else {
                    _this.previewBeforeExport(type);
                }
            }
            else {
                if (!_this.isAccessExportInv) {
                    if (type === 'TRINH_KY') {
                        _this.frmData.refuse_reason = '';
                        _this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.ChoDuyet;
                    }
                    else {
                        if (_this.frmData.approve_status !== _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.TuChoi) {
                            _this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.ChuaTrinhKy;
                        }
                    }
                }
                _this.ghiTam(_this.frmData);
            }
        }, 300);
    };
    AdjustInvoiceComponent.prototype.previewBeforeExport = function (type) {
        var _this = this;
        this.handleFormData();
        var trang_thai = '';
        if (this.formInvoice.getHtXuatValue() !== _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].hinhThucXuat.XuatChoKy) {
            trang_thai = this._translate.THONG_TIN.xuat_va_ky;
        }
        else {
            trang_thai = this._translate.THONG_TIN.xuat_cho_ky;
        }
        var du_lieu = this.vatService.taodulieuXemTruocHS(this.frmData);
        du_lieu['configs'] = _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].cauhinhxemmau.hoadon;
        var content_invoice = {
            du_lieu: du_lieu,
            ngay_hoa_don: "",
            trang_thai: trang_thai,
            tong_tien: "",
            title_invoice_type: this._translate.THONG_TIN.ban_du_thao_hoa_don.toUpperCase(),
            note_warn: this._translate.THONG_TIN.luu_y_truoc_khi_xuat,
            is_display_img_note: true,
            text_ngay_hoa_don: this._translate.THONG_TIN.ngay_hoa_don,
            text_tong_tien: this._translate.THONG_TIN.tong_tien,
            question_again: this._translate.THONG_TIN.ban_co_chac_chan_xuat_hoa_don_khong
        };
        var initialState = {
            content_invoice: content_invoice,
        };
        this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_22__["PreviewInvoiceComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-xl prv-s-invoice v-s-invoice',
            initialState: initialState
        });
        var subModal = this.customeModalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].actionHander.DongY) {
                _this.confirmCheckPreview = true;
                _this.eSubmit(type);
            }
            subModal.unsubscribe();
        });
    };
    AdjustInvoiceComponent.prototype.handleFormData = function () {
        var _this = this;
        this.tempKiFile = 0;
        var invoice_products = [];
        this.invoice_products.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                delete item.error;
                if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                    if ((_this.frmData.adjustment_form === 'TANG' && _this.frmData.adjustment_object === 'HH_DV') || (_this.frmData.adjustment_form == 'GIAM' && _this.frmData.adjustment_object === 'HH_DV'))
                        item.row_content = _this.rowContentInInvoiceProduct(item, _this.frmData.adjustment_form);
                    else
                        item.row_content = item.product_name;
                    invoice_products.push(item);
                    if (item.is_transport_number) {
                        _this.frmData.transport_number = item.product_name;
                    }
                }
            });
        });
        if ((this.frmData.adjustment_form === 'THONG_TIN' && this.frmData.adjustment_object === 'MST') || (this.frmData.adjustment_form == 'THONG_TIN' && this.frmData.adjustment_object === 'KH_DC')) {
            this.frmData.total_payment_in_word = '';
        }
        this.frmData.payment_method_view_name = this.frmData.payment_method_name;
        this.frmData.invoice_files = JSON.parse(JSON.stringify(this.fileData));
        this.frmData.note_view_on_invoice = "H\u00F3a \u0111\u01A1n n\u00E0y \u0111i\u1EC1u ch\u1EC9nh cho h\u00F3a \u0111\u01A1n s\u1ED1 " + this.oldForm.invoice_number + ", m\u1EABu s\u1ED1 " + this.oldForm.template_code + ", k\u00FD hi\u1EC7u " + this.oldForm.invoice_series + " ng\u00E0y " + moment__WEBPACK_IMPORTED_MODULE_2__(this.oldForm.invoice_date).format('DD/MM/YYYY');
        this.frmData.invoice_products = invoice_products;
        this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getObjFormatterToColumn(this.formatter));
    };
    AdjustInvoiceComponent.prototype.handleFormDataSub = function () {
        var _this = this;
        var wait = function (delay) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return new Promise(function (resolve) { return setTimeout.apply(void 0, [resolve, delay].concat(args)); });
        };
        return wait(200).then(function () {
            _this.tempKiFile = 0;
            var invoice_products = [];
            _this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    delete item.error;
                    if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                        if ((_this.frmData.adjustment_form === 'TANG' && _this.frmData.adjustment_object === 'HH_DV') || (_this.frmData.adjustment_form == 'GIAM' && _this.frmData.adjustment_object === 'HH_DV'))
                            item.row_content = _this.rowContentInInvoiceProduct(item, _this.frmData.adjustment_form);
                        else
                            item.row_content = item.product_name;
                        invoice_products.push(item);
                        if (item.is_transport_number) {
                            _this.frmData.transport_number = item.product_name;
                        }
                    }
                });
            });
            if ((_this.frmData.adjustment_form === 'THONG_TIN' && _this.frmData.adjustment_object === 'MST') || (_this.frmData.adjustment_form == 'THONG_TIN' && _this.frmData.adjustment_object === 'KH_DC')) {
                _this.frmData.total_payment_in_word = '';
            }
            _this.frmData.payment_method_view_name = _this.frmData.payment_method_name;
            _this.frmData.invoice_files = JSON.parse(JSON.stringify(_this.fileData));
            _this.frmData.note_view_on_invoice = "H\u00F3a \u0111\u01A1n n\u00E0y \u0111i\u1EC1u ch\u1EC9nh cho h\u00F3a \u0111\u01A1n s\u1ED1 " + _this.oldForm.invoice_number + ", m\u1EABu s\u1ED1 " + _this.oldForm.template_code + ", k\u00FD hi\u1EC7u " + _this.oldForm.invoice_series + " ng\u00E0y " + moment__WEBPACK_IMPORTED_MODULE_2__(_this.oldForm.invoice_date).format('DD/MM/YYYY');
            _this.frmData.invoice_products = invoice_products;
            _this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
            return true;
        });
    };
    AdjustInvoiceComponent.prototype.rowContentInInvoiceProduct = function (row, status) {
        if (this.oldForm.template_code.indexOf('02GTTT') >= 0) {
            var status_view = (status === 'TANG') ? 'tăng' : 'giảm';
            var str = void 0, temp_1, quantity = void 0, price = void 0;
            this.oldForm.invoice_products.some(function (item) {
                if (item.product_name === row.product_name) {
                    temp_1 = item;
                    return true;
                }
            });
            if (temp_1.quantity !== row.quantity) {
                quantity = true;
            }
            if (temp_1.price !== row.price) {
                price = true;
            }
            if (quantity === true || price === true) {
                str = "\u0110i\u1EC1u ch\u1EC9nh " + status_view + " " + (quantity ? 'Số lượng, ' : '') + (price ? 'Đơn giá, ' : '') + "th\u00E0nh ti\u1EC1n c\u1EE7a m\u1EB7t h\u00E0ng";
            }
            else {
                str = "\u0110i\u1EC1u ch\u1EC9nh " + status_view + " S\u1ED1 l\u01B0\u1EE3ng, \u0110\u01A1n gi\u00E1, th\u00E0nh ti\u1EC1n c\u1EE7a m\u1EB7t h\u00E0ng";
            }
            return str + (" " + row.product_name);
        }
        else if (this.oldForm.template_code.indexOf('01GTKT') >= 0) {
            var status_view = (status === 'TANG') ? 'tăng' : 'giảm';
            var str = void 0, temp_2, quantity = void 0, price = void 0, vat = void 0;
            this.oldForm.invoice_products.some(function (item) {
                if (item.product_name === row.product_name) {
                    temp_2 = item;
                    return true;
                }
            });
            if (temp_2.quantity !== row.quantity) {
                quantity = true;
            }
            if (temp_2.price !== row.price) {
                price = true;
            }
            if (temp_2.vat !== row.vat) {
                vat = true;
            }
            var vat_view = ((temp_2.vat === -1 || temp_2.vat === 0) && vat !== true) ? '' : ', tiền thuế';
            if (vat) {
                str = "\u0110i\u1EC1u ch\u1EC9nh " + status_view + " thu\u1EBF su\u1EA5t v\u00E0 ti\u1EC1n thu\u1EBF GTGT c\u1EE7a m\u1EB7t h\u00E0ng";
            }
            else if (quantity === true || price === true) {
                str = "\u0110i\u1EC1u ch\u1EC9nh " + status_view + " " + (quantity ? 'Số lượng, ' : '') + (price ? 'Đơn giá, ' : '') + "th\u00E0nh ti\u1EC1n" + vat_view + " c\u1EE7a m\u1EB7t h\u00E0ng";
            }
            else {
                str = "\u0110i\u1EC1u ch\u1EC9nh " + status_view + " S\u1ED1 l\u01B0\u1EE3ng, \u0110\u01A1n gi\u00E1, th\u00E0nh ti\u1EC1n, thu\u1EBF su\u1EA5t" + vat_view + " c\u1EE7a m\u1EB7t h\u00E0ng";
            }
            return str + (" " + row.product_name);
        }
    };
    AdjustInvoiceComponent.prototype.test = function () {
        this.productGrip.createUpdateEvent();
    };
    AdjustInvoiceComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
        this.routeSub.unsubscribe();
        // this.socketService.close();
    };
    AdjustInvoiceComponent.prototype.xemlydotuchoi = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.vatService.showToSendInvoice(this.frmData.id).subscribe(function (rs) {
            if (rs.status === 'success') {
                var initialState = {
                    invoice: rs.data.invoice,
                    listDM: _this.listDM
                };
                _this.bsModalRef = _this.modalService.show(_modules_handle_invoice_components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_12__["SendInvoicesComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem) {
                    }
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    AdjustInvoiceComponent.prototype.onSubmit = function () {
    };
    AdjustInvoiceComponent.prototype.keyDown = function (e) {
        // setTimeout(() => {
        if (e.event.key === 'Delete') {
            e.event.srcElement.value = null;
        }
        // }, 100);
    };
    AdjustInvoiceComponent.prototype.onTemplateTypeChange = function (e) {
        this.invoicereleaseTempt = e;
    };
    AdjustInvoiceComponent.prototype.onTemplateTT78TypeChange = function (e) {
        this.invoiceTemplateTT78 = e;
    };
    AdjustInvoiceComponent.prototype.onNumberTicketChange = function () {
        if (!this.isTT78) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._objTemplateSelect, this.configs.system_parameter);
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBay
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonXangDau) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyTicket(this.frmData, this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type));
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._oTemplateTT78, this.configs.system_parameter);
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBay
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].templatetype.HoaDonXangDau) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyTicket(this.frmData, this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type));
            }
        }
    };
    AdjustInvoiceComponent.prototype.onVatChange = function () {
        var decimal_amount = this.getFormatterToNumber(this.formatter.thanh_tien);
        var decimal_amount_vat = this.getFormatterToNumber(this.formatter.tien_thue);
        var decimal_vat = this.getFormatterToNumber(this.formatter.vat);
        if (this.frmData.vat_service_ticket === '5' || this.frmData.vat_service_ticket === '10') {
            this.frmData.total_vat_service_ticket = this.roundNumber((Number.parseInt(this.frmData.vat_service_ticket) * this.frmData.money_service_ticket) / 100, decimal_amount_vat);
        }
        else {
            this.frmData.total_vat_service_ticket = 0;
        }
        this.frmData.total_service_ticket_with_vat = this.roundNumber(this.frmData.money_service_ticket + this.frmData.total_vat_service_ticket, decimal_amount);
    };
    AdjustInvoiceComponent.prototype.getFormatterToNumber = function (formatter) {
        var s1 = formatter.replace('0,###', '');
        if (s1 === '') {
            return 0;
        }
        else {
            var s2 = s1.replace('.', '');
            return s2.split('').length;
        }
    };
    AdjustInvoiceComponent.prototype.setDataSessionStorage = function (value) {
        this.valueChange = JSON.stringify(value);
    };
    AdjustInvoiceComponent.prototype.checkDataFormChange = function (dataChange, dataForm) {
        var dataBefore = JSON.parse(dataChange);
        var dataAfter = JSON.parse(JSON.stringify(dataForm));
        return lodash__WEBPACK_IMPORTED_MODULE_14__["isEqual"](dataBefore, dataAfter);
    };
    AdjustInvoiceComponent.prototype.subData = function (type, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var checkValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        checkValid = this.formInvoice.form.instance.validate();
                        if (!checkValid.isValid) {
                            return [2 /*return*/, false];
                        }
                        if (this.windowPreviewBeforeSubmit) {
                            this.windowPreviewBeforeSubmit.focus();
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.handleFormDataSub()];
                    case 1:
                        _a.sent();
                        if (this.frmData.invoice_options) {
                            this.frmData.invoice_options.forEach(function (item) {
                                delete item['is_show'];
                                delete item['type'];
                                delete item['width'];
                                delete item['statusData'];
                            });
                        }
                        if (this.frmData.total_payment > 20000000 && (this.frmData.payment_method_name === 'TM')) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.payment_method_more_than_20_million, 'error');
                            return [2 /*return*/, false];
                        }
                        if (!this.isAccessExportInv) {
                            if (type === 'TRINH_KY') {
                                this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.ChoDuyet;
                                this.frmData.refuse_reason = '';
                            }
                            else {
                                if (this.frmData.approve_status !== _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.TuChoi) {
                                    this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_9__["sEnum"].statusApprove.ChuaTrinhKy;
                                }
                            }
                        }
                        if (!value.id) return [3 /*break*/, 6];
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                        if (!!this.isTT78) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.vatService.editBatch(this.frmData.id, value).toPromise().then(function (res) {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                                if (res.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, this.vatService.editBatchTT78(this.frmData.id, value).toPromise().then(function (res) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                            if (res.status === 'success') {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                return true;
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                return false;
                            }
                        })];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [3 /*break*/, 10];
                    case 6:
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                        if (!!this.isTT78) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.vatService.ghiTamForSeries(value).toPromise().then(function (res) {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                                if (res.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8: return [4 /*yield*/, this.vatService.ghiTamForSeriesTT78(value).toPromise().then(function (res) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                            if (res.status === 'success') {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                return true;
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                return false;
                            }
                        })];
                    case 9: return [2 /*return*/, _a.sent()];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    AdjustInvoiceComponent.prototype.canDeactivate = function () {
        var _this = this;
        if (!this.checkDataFormChange(this.valueChange, this.frmData)) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_13__["Observable"](function (observer) {
                _this.confirmService.confirm().subscribe(function (value) {
                    switch (value) {
                        case 'yes':
                            _this.subData('GHI_TAM', _this.frmData).then(function (value1) {
                                observer.next(value1);
                                observer.complete();
                            });
                            break;
                        case 'no':
                            observer.next(true);
                            observer.complete();
                            break;
                        case 'cancel':
                            observer.next(false);
                            observer.complete();
                            break;
                        default:
                            observer.next(true);
                            observer.complete();
                            break;
                    }
                });
            });
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_handle_invoice_student_components_adjust_adjust_grip_adjust_grip_component__WEBPACK_IMPORTED_MODULE_18__["AdjustGripComponent"]),
        __metadata("design:type", _modules_handle_invoice_student_components_adjust_adjust_grip_adjust_grip_component__WEBPACK_IMPORTED_MODULE_18__["AdjustGripComponent"])
    ], AdjustInvoiceComponent.prototype, "productGrip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_handle_invoice_student_components_adjust_adjust_form_adjust_form_component__WEBPACK_IMPORTED_MODULE_17__["AdjustFormComponent"]),
        __metadata("design:type", _modules_handle_invoice_student_components_adjust_adjust_form_adjust_form_component__WEBPACK_IMPORTED_MODULE_17__["AdjustFormComponent"])
    ], AdjustInvoiceComponent.prototype, "formInvoice", void 0);
    AdjustInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adjust-invoice',
            template: __webpack_require__(/*! ./adjust-invoice.component.html */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component.html"),
            styles: [__webpack_require__(/*! ./adjust-invoice.component.scss */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_16__["HandleInvoiceService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_20__["ViewInvoiceService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_21__["MyBsModalService"]])
    ], AdjustInvoiceComponent);
    return AdjustInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/choose-hdck/choose-hdck.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/choose-hdck/choose-hdck.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">DANH SÁCH HÓA ĐƠN CHỜ KÝ</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid \r\n    id=\"gridContainer\"\r\n    [dataSource]=\"invoiceList\"\r\n    [showRowLines]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [(selectedRowKeys)]=\"selectedRows\"\r\n    [columnMinWidth]=\"50\"\r\n    [columnResizingMode]=\"true\"\r\n    [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\">\r\n\r\n    <dxo-selection selectAllMode=\"page\" mode=\"single\"></dxo-selection>\r\n\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxi-column dataField=\"invoice_number\" caption=\"Số hóa đơn\" [width]=\"110\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"invoice_date\" caption=\"Ngày HĐ\" [width]=\"110\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"student_code\" caption=\"Mã học sinh\" [width]=\"140\" alignment=\"center\"></dxi-column>\r\n    <dxi-column cellTemplate=\"customerName\" caption=\"Tên học sinh\" alignment=\"left\"></dxi-column>\r\n\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p>{{ d.data.student_name || 'Hóa đơn chờ ký' }}</p>\r\n    </div>\r\n    \r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <!-- <dxo-paging [enabled]=\"false\"></dxo-paging> -->\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button text=\"Chọn\" icon=\"assets\\img\\icons\\Ghi.png\" type=\"default\" (click)=\"choose()\" [disabled]=\"!(selectedRows.length == 1)\">\r\n  </dx-button>\r\n  <dx-button text=\"Quay lại\" icon=\"assets\\img\\icons\\QuayLai.png\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n  </dx-button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/choose-hdck/choose-hdck.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/choose-hdck/choose-hdck.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/choose-hdck/choose-hdck.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/choose-hdck/choose-hdck.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ChooseHdckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseHdckComponent", function() { return ChooseHdckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/handle-invoice/shared */ "./src/app/modules/handle-invoice/shared/index.ts");
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




var ChooseHdckComponent = /** @class */ (function () {
    function ChooseHdckComponent(bsModalRef, handleInvoiceService) {
        this.bsModalRef = bsModalRef;
        this.handleInvoiceService = handleInvoiceService;
        this.selectedRows = [];
    }
    ChooseHdckComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.invoiceNumberOrigin);
        // console.log(this.templateCode);
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        this.handleInvoiceService.layCacHoaDonChoKy(this.invoiceDateOrigin, this.invoiceReleaseId).subscribe(function (rs) {
            _this.invoiceList = rs.data.invoices;
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
        });
    };
    ChooseHdckComponent.prototype.choose = function () {
        this.onSave(this.selectedRows[0]);
        this.bsModalRef.hide();
    };
    ChooseHdckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choose-hdck',
            template: __webpack_require__(/*! ./choose-hdck.component.html */ "./src/app/modules/handle-invoice-student/components/choose-hdck/choose-hdck.component.html"),
            styles: [__webpack_require__(/*! ./choose-hdck.component.scss */ "./src/app/modules/handle-invoice-student/components/choose-hdck/choose-hdck.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_2__["HandleInvoiceService"]])
    ], ChooseHdckComponent);
    return ChooseHdckComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/index/index.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/index/index.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-7\">\r\n    <app-search-advanced\r\n      (searchContentChange)=\"getSearch($event)\"\r\n      [isSearchStudent]=\"isSearchStudent\"\r\n    >\r\n    </app-search-advanced>\r\n  </div>\r\n  <div class=\"col-md-5 list-header\" style=\"max-height: 70px;\">\r\n    <div class=\"pull-right button-panel\">\r\n      <dx-button *ngIf=\"isDaDKTT78\" (click)=\"BaoCaoCQT()\" icon=\"assets\\img\\icons\\DieuChinh.png\"\r\n                 text=\"Báo CQT HĐ sai\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"dieuChinh()\" icon=\"assets\\img\\icons\\DieuChinh.png\" [disabled]=\"isDisableAdjust\"\r\n                 text=\"{{ 'CONTROLL.BUTTON.adjusted' | translate }}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"thayThe()\" icon=\"assets\\img\\icons\\ThayThe.png\"\r\n                 text=\"{{ 'CONTROLL.BUTTON.replaced' | translate }}\" type=\"default\"\r\n                 [disabled]=\"isDisableReplace\">\r\n      </dx-button>\r\n      <dx-button (click)=\"routerCancelInvoice()\" [(icon)]=\"_translate.ICONS.delete\"\r\n                 text=\"{{_translate.CONTROLL.LABEL.cancel_invoice}}\" type=\"default\"\r\n                 [disabled]=\"(selectedRows.length == 0)\"></dx-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerInvoice\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n              [showRowLines]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\"\r\n              [columnMinWidth]=\"50\"  [showBorders]=\"true\"\r\n              [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\" (onRowPrepared)=\"onRowPrepared($event)\" (onContentReady)=\"onContentReady($event)\">\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\"></dxo-selection>\r\n  <!--  <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"handleinvoice\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"single\"></dxo-sorting>\r\n  <dxo-selection mode=\"multiple\"></dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\"\r\n              caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" [width]=\"_translate.GRID_WIDTH.so_hoa_don\"\r\n              alignment=\"center\" sortOrder=\"desc\" [sortIndex]=\"1\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <dxi-column cellTemplate=\"templateCode\"\r\n              caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n              [width]=\"_translate.GRID_WIDTH.mau_so_ky_hieu\" alignment=\"center\"></dxi-column>\r\n  <!-- <dxi-column dataField=\"template.invoice_series\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" [width]=\"110\" alignment=\"center\"\r\n      [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column> -->\r\n  <dxi-column dataField=\"invoice_date\" [editorOptions]=\"{useMaskBehavior:true}\"\r\n              caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\"\r\n              [width]=\"_translate.GRID_WIDTH.ngay_hoa_don\" dataType=\"date\" format=\"dd/MM/yyyy\"\r\n              dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"\r\n              headerCellTemplate=\"titleHeaderTemplate\" sortOrder=\"desc\" [sortIndex]=\"0\"></dxi-column>\r\n  <dxi-column dataField=\"student_code\"\r\n              caption=\"{{ 'CONTROLL.LABEL.code_student' | translate }}\"\r\n              [width]=\"_translate.GRID_WIDTH.ma_so_thue\" alignment=\"left\">\r\n  </dxi-column>\r\n\r\n  <dxi-column cellTemplate=\"studentName\"\r\n              caption=\"{{ 'CONTROLL.LABEL.name_student' | translate }}\" alignment=\"left\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"class_name\"\r\n              caption=\"{{ 'CONTROLL.LABEL.class' | translate }}\"\r\n              [width]=\"_translate.GRID_WIDTH.ma_so_thue\" alignment=\"left\">\r\n  </dxi-column>\r\n\r\n  <dxi-column *ngIf=\"configs.system_parameter.display_transport_number_from_product\" dataField=\"transport_number\"\r\n              caption=\"{{ 'GRID.INVOICE_DETAILS.transport_number' | translate }}\"\r\n              width=\"{{_translate.GRID_WIDTH.transport_number}}\" alignment=\"left\"\r\n              headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <!-- total_payment_string: trường này không có trong invoice, để hiển thị định dạng tổng tiền ngoài màn hình -->\r\n  <dxi-column dataField=\"total_payment_string\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" alignment=\"right\" headerCellTemplate=\"titleHeaderTemplate\"\r\n              [width]=\"_translate.GRID_WIDTH.tong_tien\"></dxi-column>\r\n\r\n  <dxi-column cellTemplate=\"statusInvoice\" caption=\"{{ 'CONTROLL.LABEL.processing_status' | translate }}\"\r\n              [width]=\"_translate.GRID_WIDTH.trang_thai_gui_mail\" alignment=\"center\"></dxi-column>\r\n  <!-- <dxi-column dataField=\"note_view_on_invoice\" caption=\"{{ 'GRID.GENERAL.note' | translate }}\"\r\n              headerCellTemplate=\"titleHeaderTemplate\"></dxi-column> -->\r\n  <dxi-column *ngIf=\"isDaDKTT78\" cellTemplate=\"statusSendTax\" caption=\"TT gửi HĐ sai sót\"\r\n              [width]=\"106\" alignment=\"center\">\r\n  </dxi-column>\r\n  <dxi-column caption=\"{{ 'GRID.GENERAL.handle-report' | translate }}\">\r\n    <dxi-column cellTemplate=\"invoice_reports\" caption=\"{{ 'GRID.GENERAL.electric_report' | translate }}\"\r\n                [width]=\"_translate.GRID_WIDTH.electric_report\" alignment=\"center\"></dxi-column>\r\n    <dxi-column cellTemplate=\"file_content\" caption=\"{{ 'GRID.GENERAL.paper_report' | translate }}\"\r\n                [width]=\"_translate.GRID_WIDTH.electric_report\" alignment=\"center\"></dxi-column>\r\n  </dxi-column>\r\n\r\n  <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\"\r\n              width=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" alignment=\"center\"></dxi-column>\r\n\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p (click)=\"editNotSelect(d.data)\" style=\"text-decoration: underline;cursor: pointer;\">\r\n      {{ d.data.template_code }}</p>\r\n    <p (click)=\"editNotSelect(d.data)\" style=\"text-decoration: underline;cursor: pointer;\">\r\n      {{ d.data.invoice_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n    <a *ngIf=\"d.data.status === 'DA_XUAT'\" class=\"gach-chan\" (click)=\"viewNotSelect(d.data)\"\r\n       href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span *ngIf=\"d.data.time_print_conversion\">-CĐ\r\n        ({{ d.data.time_print_conversion }})</span></a>\r\n    <p *ngIf=\"d.data.status !== 'DA_XUAT'\">{{ d.data.invoice_number }}<span *ngIf=\"d.data.time_print_conversion\">-CĐ\r\n        ({{ d.data.time_print_conversion }})</span></p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'customerName'\">\r\n    <p class=\"gach-chan\" (click)=\"editNotSelect(d.data)\" *ngIf=\"d.data.status !='GIU_SO' && d.data.status !='DA_XUAT'\">\r\n      {{ d.data.customer_name || d.data.buyer_name }}\r\n    </p>\r\n    <p class=\"gach-chan\" (click)=\"editNotSelect(d.data)\" *ngIf=\"d.data.status =='GIU_SO'\">\r\n      {{ d.data.customer_name || _translate.GRID.INVOICE.invoice_wait_for_sign }}</p>\r\n    <p *ngIf=\"d.data.status =='DA_XUAT'\">{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let d of 'studentName'\">\r\n    <p class=\"gach-chan\" (click)=\"editNotSelect(d.data)\" *ngIf=\"d.data.status !='GIU_SO' && d.data.status !='DA_XUAT'\">\r\n      {{ d.data.student_name }}\r\n    </p>\r\n    <p class=\"gach-chan\" (click)=\"editNotSelect(d.data)\" *ngIf=\"d.data.status =='GIU_SO'\">\r\n      {{ d.data.student_name || _translate.GRID.INVOICE.invoice_wait_for_sign }}</p>\r\n    <p *ngIf=\"d.data.status =='DA_XUAT'\">{{ d.data.student_name }}</p>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let d of 'actionEmail'\">\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status !='GIU_SO'\" class=\"chua-gui-khach-hang gach-chan\"\r\n       (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.un_sent' | translate }}\r\n    </a>\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status =='GIU_SO'\" class=\"cho-ky\"\r\n       (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_sign' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_GUI'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n       href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_it' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_NHAN'\" class=\"gach-chan\" (click)=\"sendInvoice(d.data.id)\"\r\n       href=\"javascript:void(0)\">{{ 'GRID.INVOICE.received' | translate }}</a>\r\n    <p *ngIf=\"!d.data.send_email_status\" href=\"javascript:void(0)\">{{ trangthaihoadon(d.data) }} <a\r\n      *ngIf=\"trangthaihoadon(d.data) == 'Lỗi ký HD' || trangthaihoadon(d.data) == 'Signed error'\" class=\"gach-chan\"\r\n      (click)=\"editNotSelect(d.data)\" href=\"javascript:void(0)\">({{ 'GRID.INVOICE.re_sign' | translate }})</a></p>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let d of 'statusInvoice'\">\r\n    <ng-container [ngSwitch]=\"d.data.adjustment_type\">\r\n      <p *ngSwitchCase=\"1\">{{ 'GRID.GENERAL.original_invoice' | translate }}</p>\r\n      <p *ngSwitchCase=\"2\">{{ 'GRID.GENERAL.invoice_replaced' | translate }}</p>\r\n      <p *ngSwitchCase=\"3\">{{ 'GRID.GENERAL.invoice_replacement' | translate }}</p>\r\n      <p *ngSwitchCase=\"4\">{{ 'GRID.GENERAL.invoice_adjusted' | translate }}</p>\r\n      <p *ngSwitchCase=\"5\">{{ 'GRID.GENERAL.adjustment_invoice' | translate }}</p>\r\n      <p *ngSwitchCase=\"6\">{{ 'GRID.GENERAL.invoice_deleted' | translate }}</p>\r\n      <p *ngSwitchCase=\"7\">{{ 'GRID.GENERAL.invoice_removed' | translate }}</p>\r\n    </ng-container>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    <a *ngIf=\"getStatusSendTax(d.data) != ''\" href=\"javascript:void(0)\"\r\n      (click)=\"ThongDiepGuiNhan(d.data)\">{{ getStatusSendTax(d.data) }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'invoice_reports'\">\r\n    <ng-container\r\n      *ngIf=\"filterReport(d.data.invoice_reports,'0').length >0 || filterReport(d.data.invoice_reports,'1').length ==0\">\r\n      <ng-container *ngFor=\"let data of d.data.invoice_reports; let i=index\">\r\n\r\n        <ng-container *ngIf=\"data.status === 'HOAT_DONG'\">\r\n          <div *ngIf=\"data.signature_status === 'CHUA_KY' && data.suggest_adjustment_content === null\">\r\n            <div>\r\n                <span>\r\n                <a class=\"text-decoration\" (click)=\"viewReport(d.data.id,data)\" href=\"javascript:void(0)\">Chưa gửi</a>\r\n              </span>\r\n            </div>\r\n            <div>\r\n                <span>\r\n                  <a class=\"text-decoration\" (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">...</a>\r\n                </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"data.signature_status === 'NGUOI_BAN_KY' && data.suggest_adjustment_content === null\">\r\n            <div>\r\n                <span>\r\n                  <a class=\"text-decoration\" (click)=\"viewReport(d.data.id,data)\"\r\n                     href=\"javascript:void(0)\">Chờ KH ký</a>\r\n                </span>\r\n            </div>\r\n            <div>\r\n              <span>\r\n                <a class=\"text-decoration\" (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">...</a>\r\n              </span>\r\n            </div>\r\n            <a title=\"file {{_translate.GRID.GENERAL.attach}}\"\r\n               class=\"attachIcon actionIcon text-decoration\" (click)=\"downloadFile(d.data,'0')\"\r\n               href=\"javascript:void(0)\">\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"data.signature_status === 'NGUOI_MUA_KY' && data.suggest_adjustment_content === null\">\r\n            <div>\r\n                <span>\r\n                  <a class=\"text-decoration\" (click)=\"viewReport(d.data.id,data)\" href=\"javascript:void(0)\">KH đã ký</a>\r\n                </span>\r\n            </div>\r\n            <div>\r\n                <span>\r\n                  <a class=\"text-decoration\" (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">...</a>\r\n                </span>\r\n            </div>\r\n            <a title=\"file {{_translate.GRID.GENERAL.attach}}\"\r\n               class=\"attachIcon actionIcon text-decoration\" (click)=\"downloadFile(d.data,'0')\"\r\n               href=\"javascript:void(0)\">\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"data.signature_status === 'CHUA_KY' && data.suggest_adjustment_content !== null\">\r\n            <div>\r\n                <span>\r\n                <a class=\"text-decoration\" (click)=\"viewReport(d.data.id,data)\" href=\"javascript:void(0)\">\r\n                  KH đề nghị điều chỉnh\r\n                </a>\r\n              </span>\r\n            </div>\r\n            <div>\r\n                <span>\r\n                  <a class=\"text-decoration\" (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">...</a>\r\n                </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"data.signature_status === 'NGUOI_BAN_KY' && data.suggest_adjustment_content !== null\">\r\n            <div>\r\n                <span>\r\n                  <a class=\"text-decoration\" (click)=\"viewReport(d.data.id,data)\" href=\"javascript:void(0)\">\r\n                    KH đề nghị điều chỉnh\r\n                  </a>\r\n                </span>\r\n            </div>\r\n            <div>\r\n              <span>\r\n                <a class=\"text-decoration\" (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">...</a>\r\n              </span>\r\n            </div>\r\n            <a title=\"file {{_translate.GRID.GENERAL.attach}}\"\r\n               class=\"attachIcon actionIcon text-decoration\" (click)=\"downloadFile(d.data,'0')\"\r\n               href=\"javascript:void(0)\">\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"data.signature_status === 'NGUOI_MUA_KY' && data.suggest_adjustment_content !== null\">\r\n            <div>\r\n                <span>\r\n                  <a class=\"text-decoration\" (click)=\"viewReport(d.data.id,data)\" href=\"javascript:void(0)\">\r\n                    KH đề nghị điều chỉnh\r\n                  </a>\r\n                </span>\r\n            </div>\r\n            <div>\r\n                <span>\r\n                  <a class=\"text-decoration\" (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">...</a>\r\n                </span>\r\n            </div>\r\n            <a title=\"file {{_translate.GRID.GENERAL.attach}}\"\r\n               class=\"attachIcon actionIcon text-decoration\" (click)=\"downloadFile(d.data,'0')\"\r\n               href=\"javascript:void(0)\">\r\n            </a>\r\n          </div>\r\n\r\n        </ng-container>\r\n      </ng-container>\r\n      <!-- <ng-container *ngIf=\"filterReport(d.data.invoice_reports,'0').length > 0\">\r\n            <a title=\"file đính kèm\"\r\n               class=\"attachIcon actionIcon text-decoration\" (click)=\"downloadFile(data.invoice_id,'0')\" href=\"javascript:void(0)\">\r\n            </a>\r\n      </ng-container> -->\r\n      <!-- <div *ngIf=\"d.data.invoice_reports.length == 0\">\r\n        <div class=\"dropdown\" style=\"float:none;\">\r\n          <a title=\"{{_translate.CONTROLL.BUTTON.extend}}\" style=\"font-size: 27px\"\r\n             (click)=\"myFunction1(d.data.id + d.data.invoice_number)\"\r\n             href=\"javascript:void(0)\"><i class=\"dx-icon fa fa-plus-circle\"></i></a>\r\n          <div [id]=\"d.data.id + d.data.invoice_number\" class=\"dropdown-content\" style=\"min-width: 180px!important;\">\r\n            <a href=\"javascript:void(0)\"\r\n               (click)=\"cancelReport(d.data)\">{{ 'CONTROLL.BUTTON.cancel_report' | translate }}\r\n            </a>\r\n            <a href=\"javascript:void(0)\"\r\n               (click)=\"dieuChinhBtn(d.data)\">{{ 'CONTROLL.BUTTON.create_adjustment_report' | translate }}\r\n            </a>\r\n            <a href=\"javascript:void(0)\" (click)=\"thayTheBtn(d.data)\">{{ 'CONTROLL.BUTTON.create_replace_report' | translate }}\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <a class=\"text-decoration\" (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">...</a>\r\n        </div>\r\n      </div> -->\r\n    </ng-container>\r\n\r\n    <div *ngIf=\"d.data.invoice_reports.length == 0\">\r\n      <!-- <div class=\"dropdown\" style=\"float:none;\">\r\n        <a title=\"{{_translate.CONTROLL.BUTTON.extend}}\" style=\"font-size: 27px\"\r\n           (click)=\"myFunction1(d.data.id + d.data.invoice_number)\"\r\n           href=\"javascript:void(0)\"><i class=\"dx-icon fa fa-plus-circle\"></i></a>\r\n        <div [id]=\"d.data.id + d.data.invoice_number\" class=\"dropdown-content\" style=\"min-width: 180px!important;\">\r\n          <a href=\"javascript:void(0)\"\r\n             (click)=\"cancelReport(d.data)\">{{ 'CONTROLL.BUTTON.cancel_report' | translate }}\r\n          </a>\r\n          <a href=\"javascript:void(0)\"\r\n             (click)=\"dieuChinhBtn(d.data)\">{{ 'CONTROLL.BUTTON.create_adjustment_report' | translate }}\r\n          </a>\r\n          <a href=\"javascript:void(0)\" (click)=\"thayTheBtn(d.data)\">{{ 'CONTROLL.BUTTON.create_replace_report' | translate }}\r\n          </a>\r\n        </div>\r\n      </div> -->\r\n      <div>\r\n        <a class=\"text-decoration\" (click)=\"sendInvoice(d.data.id)\" href=\"javascript:void(0)\">...</a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let d of 'file_content'\">\r\n    <div *ngIf=\"filterReport(d.data.invoice_reports,'0').length == 0\">\r\n      <div *ngIf=\"filterReport(d.data.invoice_reports,'1').length == 0 && d.data.status !='GHI_TAM'\"\r\n           style=\"float:none;\">\r\n        <a class=\"{{_translate.ICONS.upload}}\" (click)=\"dinhKemFile($event)\" title=\"{{_translate.GRID.GENERAL.attach}}\"\r\n           style=\"color: #007BFF;font-size:18px;cursor: pointer;line-height: 26px\">\r\n          <input type=\"file\" id=\"file-dinh-kem\" [attr.data-rowindex]=\"d.data.id\"\r\n                 accept=\".xlsx, .docx, .doc, .pdf, .xls, .xml\" (change)=\"onDinhKemFile($event)\" multiple=\"false\"\r\n                 style=\"display: none;\"/>\r\n          <!-- Chọn file -->\r\n          <!-- <i class=\"{{_translate.ICONS.upload}}\"></i> -->\r\n        </a>\r\n        <div class=\"dropdown\">\r\n          <a title=\"{{_translate.CONTROLL.BUTTON.get_template_report}}\" style=\"float: right;\"\r\n             class=\"{{_translate.ICONS.download}}\"\r\n             style=\"color: #007BFF;font-size:18px;cursor: pointer;line-height: 26px\"\r\n             (click)=\"myFunction1(d.data.id + d.data.invoice_number)\"\r\n             href=\"javascript:void(0)\"></a>\r\n          <div [id]=\"d.data.id + d.data.invoice_number\" class=\"dropdown-content\" style=\"min-width: 227px!important;\" [ngClass]=\"{'last-drodown':( pageSize - 1 == d.rowIndex || pageSize - 2 == d.rowIndex || pageSize - 3 == d.rowIndex) && pageSize > 4, 'small-grid': pageSize < 5}\">\r\n            <!-- <a  (click)=\"kyHangLoat(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.sign' | translate }} <i [(class)]=\"_translate.ICONS.pencil\"></i></a> -->\r\n            <a (click)=\"downloadFileDocx(d.data, 'HUY')\"\r\n               href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.get_file_content_cancel' | translate }}\r\n              <i [class]=\"_translate.ICONS.print\"></i></a>\r\n            <a (click)=\"downloadFileDocx(d.data, 'DIEU_CHINH')\"\r\n               href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.get_file_content_adjust' | translate }}\r\n              <i [class]=\"_translate.ICONS.print\"></i></a>\r\n            <!-- <a  (click)=\"viewAttachFile(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.view_attach_file' | translate }} <i [(class)]=\"_translate.ICONS.view_attach_file\"></i></a> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"filterReport(d.data.invoice_reports,'1').length > 0\" class=\"dropdown\" style=\"float:none;\">\r\n        <a title=\"file {{_translate.GRID.GENERAL.attach}}\"\r\n           class=\"attachIcon actionIcon text-decoration\" (click)=\"downloadFile(d.data,'1')\" href=\"javascript:void(0)\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <div class=\"dropdown\">\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.extend}}\"\r\n         style=\"float: right;\" class=\"morongIcon actionIcon\"\r\n         (click)=\"myFunction(d.data.id)\"\r\n         href=\"javascript:void(0)\"></a>\r\n      <div [id]=\"d.data.id\" class=\"dropdown-content\" style=\"margin-top: 26px!important;\" [ngClass]=\"{'last-drodown':( pageSize - 1 == d.rowIndex || pageSize - 2 == d.rowIndex || pageSize - 3 == d.rowIndex) && pageSize > 4, 'small-grid': pageSize < 5}\">\r\n        <!-- <a  (click)=\"kyHangLoat(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.sign' | translate }} <i [(class)]=\"_translate.ICONS.pencil\"></i></a> -->\r\n        <a (click)=\"inChuyenDoi(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.print_conversion' | translate }}\r\n          <i [class]=\"_translate.ICONS.print\"></i></a>\r\n        <!-- <a  (click)=\"viewAttachFile(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.view_attach_file' | translate }} <i [(class)]=\"_translate.ICONS.view_attach_file\"></i></a> -->\r\n      </div>\r\n    </div>\r\n    <a *ngIf=\"d.data.invoice_files &&d.data.invoice_files.length>0\"\r\n       style=\"float: right;\" title=\"{{_translate.CONTROLL.BUTTON.view_attach_file}}\" class=\"attachIcon actionIcon\"\r\n       (click)=\"viewAttachFile(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n    <a *ngIf=\"d.data.status =='GHI_TAM'\" style=\"float: right;\" title=\"{{_translate.CONTROLL.BUTTON.delete}}\"\r\n       class=\"xoaIcon actionIcon\" (click)=\"deleteItem(d.data)\"\r\n       href=\"javascript:void(0)\">\r\n    </a>\r\n    <a *ngIf=\"d.data.status =='GHI_TAM'\" style=\"float: right;\" title=\"{{_translate.CONTROLL.BUTTON.edit}}\"\r\n       class=\"suaIcon actionIcon\" (click)=\"editNotSelect(d.data)\"\r\n       href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" style=\"float: right;\" class=\"xemIcon actionIcon\"\r\n       (click)=\"view(d.data)\"\r\n       href=\"javascript:void(0)\">\r\n    </a>\r\n  </div>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n\r\n  <dxo-summary>\r\n    <dxi-total-item summaryType=\"custom\" cssClass=\"dxi-total-payment-total_payment_string\" [customizeText]=\"customizeText\" showInColumn=\"total_payment_string\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 35, 50, 100]\" [showNavigationButtons]=\"true\"\r\n             [showInfo]=\"true\">\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/index/index.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/index/index.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline;cursor:pointer}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.last-drodown{bottom:30px}.small-grid{position:fixed  !important;right:39px !important}.text-decoration{text-decoration:none}::ng-deep .truyen-nhan{max-width:80% !important;margin:auto}::ng-deep #gridContainerInvoice .dx-cell-focus-disabled{overflow:visible !important}::ng-deep #gridContainerInvoice .dx-datagrid-rowsview{overflow:visible}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/index/index.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/index/index.component.ts ***!
  \************************************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/handle-invoice/shared */ "./src/app/modules/handle-invoice/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/modules/vat-shared/components/view-attach-file/view-attach-file.component */ "./src/app/shared/modules/vat-shared/components/view-attach-file/view-attach-file.component.ts");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_handle_invoice_components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/handle-invoice/components/send-invoices/send-invoices.component */ "./src/app/modules/handle-invoice/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var _modules_handle_invoice_student_shared_handle_invoice_student_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/handle-invoice-student/shared/handle-invoice-student.service */ "./src/app/modules/handle-invoice-student/shared/handle-invoice-student.service.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _modules_handle_invoice_components_report_tax_invoice_error_report_tax_invoice_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/handle-invoice/components/report-tax-invoice-error/report-tax-invoice-error.component */ "./src/app/modules/handle-invoice/components/report-tax-invoice-error/report-tax-invoice-error.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _remove_remove_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../remove/remove.component */ "./src/app/modules/handle-invoice-student/components/remove/remove.component.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/service/invoice.service */ "./src/app/shared/service/invoice.service.ts");
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
    function IndexComponent(authService, handleInvoiceService, vatService, modalService, router, translate, handleReportService, handleStudentService, fb, templateService, spinner, socketService, vPreviewInvService, invoiceService) {
        var _this = this;
        this.authService = authService;
        this.handleInvoiceService = handleInvoiceService;
        this.vatService = vatService;
        this.modalService = modalService;
        this.router = router;
        this.translate = translate;
        this.handleReportService = handleReportService;
        this.handleStudentService = handleStudentService;
        this.fb = fb;
        this.templateService = templateService;
        this.spinner = spinner;
        this.socketService = socketService;
        this.vPreviewInvService = vPreviewInvService;
        this.invoiceService = invoiceService;
        this.selectedRows = [];
        this.selectedItems = [];
        this.clickCurent = undefined;
        this.idRow = undefined;
        this.configs = {};
        this.isSearchStudent = true;
        this.isDaDKTT78 = false;
        this.isExistFormRelease = false;
        this.isDisableAdjust = true;
        this.isDisableReplace = true;
        this.objStatusBtn = {};
        this.customizeText = function (url) {
            _this.invoiceService.handleTotalGrid(url.value, _this.objStatusBtn, _this.dataGrid);
            return '';
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.formFileContent = this.fb.group(this.handleReportService.generatedFormControlAll);
        this.configs = this.authService.getConfigs();
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser.is_convert_TT78) {
            this.infoDangKy = this.authService.getInfoRegister();
            if (this.infoDangKy && this.infoDangKy.id) {
                if (this.infoDangKy.status == "CHAP_NHAN") {
                    this.isDaDKTT78 = true;
                    var infoFormRelease = this.authService.getInfoFormRelease();
                    if (infoFormRelease && infoFormRelease.invoice_releases && infoFormRelease.invoice_releases.length > 0) {
                        var invoicesReleases = infoFormRelease.invoice_releases.filter(function (p) { return (parseInt(p.amount) - parseInt(p.used_amount)) > 0; });
                        if (invoicesReleases && invoicesReleases.length > 0)
                            this.isExistFormRelease = true;
                    }
                }
            }
        }
        /* Hiện nút điều chỉnh/thay thế */
        if (this.configs.system_parameter.incurred_adjustment_invoice || this.configs.system_parameter.process_not_in_software) {
            this.isDisableAdjust = false;
            if (this.configs.system_parameter.process_not_in_software)
                this.isDisableReplace = false;
        }
    };
    // HS-SV
    IndexComponent.prototype.loadList = function (params) {
        this.dataSource = {};
        this.dataSource.store = this.handleStudentService.getAllStudent(params);
    };
    IndexComponent.prototype.filterReport = function (data, _condition) {
        if (data && data.length > 0) {
            return data.filter(function (p) { return p.is_paper_report === _condition && p.status === 'HOAT_DONG'; });
        }
        else {
            return [];
        }
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            switch (e.data.status) {
                case 'DA_XUAT':
                    break;
                case 'GHI_TAM':
                    if (e.data.invoice_number) {
                        if (e.data.send_department_status == "DA_GUI_CQT")
                            e.rowElement.style.color = '#008B8B';
                        else if (e.data.send_department_status == "DA_CAP")
                            e.rowElement.style.color = 'black';
                        else if (e.data.send_department_status == "DA_TIEP_NHAN")
                            e.rowElement.style.color = 'black';
                        else
                            e.rowElement.style.color = 'red';
                    }
                    else {
                        e.rowElement.style.color = '#DEA960';
                    }
                    break;
                case 'GIU_SO':
                    e.rowElement.style.color = '#008B8B';
                    break;
                default:
                    break;
            }
            if (e.data.adjustment_type === '2' || e.data.adjustment_type === '7' || e.data.adjustment_type === '6') {
                var eles = e.rowElement.getElementsByTagName('td');
                for (var i = 0; i < eles.length; i++) {
                    if (i !== 9 && i !== 1) {
                        eles[i].style.textDecoration = 'line-through';
                    }
                }
            }
        }
    };
    IndexComponent.prototype.trangthaihoadon = function (data) {
        switch (data.status) {
            case 'DA_XUAT':
                break;
            case 'GHI_TAM':
                if (data.invoice_number) {
                    return this._translate.GRID.INVOICE.signed_error;
                }
                else {
                    return this._translate.CONTROLL.BUTTON.save_temporary;
                }
            case 'GIU_SO':
                return this._translate.GRID.INVOICE.wait_for_sign;
            default:
                break;
        }
    };
    IndexComponent.prototype.getSearch = function (e) {
        this.paramSearch = e;
        this.loadList(e);
    };
    IndexComponent.prototype.checkDisableButton = function () {
        if (this.selectedItems.length) {
            if (this.selectedItems[0].status == 'DA_XUAT') {
                return true;
            }
            return false;
        }
        return false;
    };
    IndexComponent.prototype.myFunction = function (e) {
        if (this.idRow && document.getElementById(this.idRow)) {
            document.getElementById(this.idRow).classList.remove('show');
        }
        if (this.clickCurent !== undefined && this.clickCurent !== e && document.getElementById(this.clickCurent)) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        document.getElementById(e).classList.toggle('show');
        this.clickCurent = e;
    };
    IndexComponent.prototype.myFunction1 = function (e) {
        if (this.clickCurent && document.getElementById(this.clickCurent)) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (this.idRow !== '' && this.idRow !== e && document.getElementById(this.idRow)) {
            document.getElementById(this.idRow).classList.remove('show');
        }
        document.getElementById(e).classList.toggle('show');
        this.idRow = e;
    };
    // Chọn đối tượng trong màn hình danh sách
    IndexComponent.prototype.selectionChanged = function (data) {
        this.hidenDropdownList();
        this.selectedItems = data.selectedRowsData;
        if (this.selectedRows.length == 1 || this.configs.system_parameter.incurred_adjustment_invoice || this.configs.system_parameter.process_not_in_software) {
            if (this.selectedRows.length == 1 || this.configs.system_parameter.process_not_in_software) {
                this.isDisableAdjust = false;
                this.isDisableReplace = false;
            }
            else {
                this.isDisableAdjust = false;
                this.isDisableReplace = true;
            }
        }
        else {
            this.isDisableAdjust = true;
            this.isDisableReplace = true;
        }
    };
    IndexComponent.prototype.setUrlNavigate = function () {
        var url = window.location.pathname;
        if (sessionStorage.hasOwnProperty('urlIndex')) {
            if (sessionStorage.getItem('urlIndex') !== null) {
                sessionStorage.setItem('urlIndex', url);
            }
            else {
                sessionStorage.setItem('urlIndex', url);
            }
        }
        else {
            sessionStorage.setItem('urlIndex', url);
        }
    };
    IndexComponent.prototype.routerCancelInvoice = function () {
        var _this = this;
        if (this.selectedItems && this.selectedItems.length > 0) {
            var lstGhiTam = this.selectedItems.filter(function (p) { return p.status == 'GHI_TAM'; });
            if (lstGhiTam && lstGhiTam.length == this.selectedItems.length) {
                var ids_1 = this.selectedRows.join(',');
                var result = _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        _this.handleInvoiceService.delete(ids_1).subscribe(function (rs) {
                            if (rs.status === 'success') {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                _this.loadList(_this.paramSearch);
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                            }
                        }, function (err) {
                        }, function () {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                        });
                    }
                });
            }
            else {
                var lstInvoice = this.selectedItems.filter(function (p) { return p.status == 'DA_XUAT' && p.adjustment_type == '1'; });
                if (lstInvoice && lstInvoice.length > 0) {
                    if (lstInvoice.length == 1) {
                        var row = lstInvoice[0];
                        this.setUrlNavigate();
                        this.router.navigate(['/system/handle-report/', row.id, 'HUY']);
                    }
                    else {
                        var _lstCancel = lstInvoice.filter(function (p) { return p.adjustment_type == '7' || p.adjustment_type == '2'; });
                        if (_lstCancel && _lstCancel.length > 0) {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.choose_cancel_invoice, 'error');
                        }
                        else
                            this.delete(lstInvoice);
                    }
                }
                else
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Bạn không thể hủy hóa đơn này', 'error');
            }
        }
    };
    IndexComponent.prototype.dieuChinh = function () {
        if (this.isExistFormRelease) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
            return;
        }
        if (this.selectedItems && this.selectedItems.length == 0) {
            if (this.configs.system_parameter.process_not_in_software) {
                this.router.navigate(['/system/handle-invoice/adjust-without-software']);
            }
            else if (this.configs.system_parameter.incurred_adjustment_invoice)
                this.router.navigate(['/system/handle-invoice/multiple-adjust']);
        }
        else {
            var row = this.selectedItems[0];
            if (row.status === 'DA_XUAT' && row.adjustment_type !== '7' && row.adjustment_type !== '2') {
                var template_code = row.template_code.split('/');
                switch (template_code[0]) {
                    case '01GTKT0':
                    case '02GTTT0':
                    case '1':
                    case '2':
                        this.setUrlNavigate();
                        this.router.navigate(['/system/handle-report/', row.id, 'DIEU_CHINH']);
                        break;
                    // case '02GTTT0':
                    //   this.router.navigate(['/system/handle-report/', row.id, 'DIEU_CHINH']);
                    //   break;
                    default:
                        break;
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Bạn không thể điều chỉnh hóa đơn này', 'error');
            }
        }
    };
    IndexComponent.prototype.thayThe = function () {
        if (this.isExistFormRelease) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
            return;
        }
        if (this.selectedItems && this.selectedItems.length == 0 && this.configs.system_parameter.process_not_in_software) {
            this.router.navigate(['/system/handle-invoice/replace-without-software']);
        }
        else {
            var row = this.selectedItems[0];
            if (row.status === 'DA_XUAT' && row.adjustment_type !== '4') {
                this.router.navigate(["/system/handle-invoice/replace/" + row.id]);
                var template_code = row.template_code.split('/');
                switch (template_code[0]) {
                    case '01GTKT0':
                    case '02GTTT0':
                    case '2':
                    case '1':
                        this.setUrlNavigate();
                        this.router.navigate(['/system/handle-report/', row.id, 'THAY_THE']);
                        break;
                    // case '02GTTT0':
                    //   this.router.navigate([`/system/handle-invoice/sale-replace/${row.id}`]);
                    //   break;
                    default:
                        break;
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Bạn không thể thay thế hóa đơn này', 'error');
            }
        }
    };
    IndexComponent.prototype.editNotSelect = function (row) {
        if (this.isExistFormRelease) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng hủy dải hóa đơn theo TT32 chưa sử dụng trước khi lập hóa đơn theo TT78", "error", 5000);
            return;
        }
        this.hidenDropdownList();
        if (row.status === 'DA_XUAT') {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Bạn không thể sửa hóa đơn đã xuất', 'error');
        }
        else {
            if (row.adjustment_type === '5') {
                if (row.is_adjustment_invoices || row.is_outside_process) {
                    if (row.is_adjustment_invoices)
                        this.router.navigate(["/system/handle-invoice/multiple-adjust/" + row.id]);
                    else
                        this.router.navigate(["/system/handle-invoice/adjust-without-software/" + row.id]);
                }
                else {
                    switch (row.invoice_type) {
                        case '01GTKT':
                            if (row.batch_id)
                                this.router.navigate(["/system/handle-invoice-student/edit-adjust-vat/" + row.id]);
                            else
                                this.router.navigate(["/system/handle-invoice/edit-adjust/" + row.id]);
                            break;
                        case '02GTTT':
                            if (row.batch_id)
                                this.router.navigate(["/system/handle-invoice-student/edit-adjust-sale/" + row.id]);
                            else
                                this.router.navigate(["/system/handle-invoice/edit-sale-adjust/" + row.id]);
                            break;
                        default:
                            break;
                    }
                }
            }
            else if (row.adjustment_type === '3') {
                if (row.is_outside_process) {
                    this.router.navigate(["/system/handle-invoice/replace-without-software/" + row.id]);
                }
                else {
                    switch (row.invoice_type) {
                        case '01GTKT':
                            if (row.batch_id)
                                this.router.navigate(["/system/handle-invoice-student/edit-replace-vat/" + row.id]);
                            else
                                this.router.navigate(["/system/handle-invoice/edit-replace/" + row.id]);
                            break;
                        case '02GTTT':
                            if (row.batch_id)
                                this.router.navigate(["/system/handle-invoice-student/edit-replace-sale/" + row.id]);
                            else
                                this.router.navigate(["/system/handle-invoice/edit-sale-replace/" + row.id]);
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    };
    IndexComponent.prototype.viewNotSelect = function (row) {
        this.hidenDropdownList();
        if (row.status == 'DA_XUAT') {
            var ids = [];
            ids.push(row.id);
            if (this.configs.system_parameter.view_multi_invoice) {
                var data = this.vatService.taodulieuXemMau(ids);
                data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadon;
                this.vPreviewInvService.xemMau(data);
            }
            else {
                var initialState = {
                    items: ids,
                    isXuatHD: false,
                    hinhthucxuat: '',
                    typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.xem_hoa_don
                };
                this.vPreviewInvService.xemMauPhanTrang(initialState);
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Hóa đơn bị ký lỗi, bạn vui lòng ký lại hóa đơn', 'error');
        }
    };
    IndexComponent.prototype.view = function (data) {
        if (data) {
            this.dataInfor = data;
            var ids = [];
            ids.push(data.id);
            if (this.configs.system_parameter.view_multi_invoice) {
                var data_1 = this.vatService.taodulieuXemMauHS(ids);
                data_1['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadon;
                this.vPreviewInvService.xemMau(data_1);
            }
            else {
                var initialState = {
                    items: ids,
                    isXuatHD: false,
                    hinhthucxuat: '',
                    typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.xem_hoa_don
                };
                this.vPreviewInvService.xemMauPhanTrang(initialState);
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    IndexComponent.prototype.viewDetailInvoice = function (row) {
        this.router.navigate(["/system/vat-invoice/" + row.id]);
    };
    IndexComponent.prototype.viewReport = function (idInv, data) {
        var url = window.location.pathname;
        var type;
        if (data.type === 'HUY') {
            type = 'THAY_THE';
        }
        else {
            type = data.type;
        }
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
        this.handleReportService.createReport(idInv, type);
    };
    IndexComponent.prototype.sendInvoice = function (id) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var sub = this.vatService.showToSendInvoice(id).subscribe(function (rs) {
            if (rs.status == 'success') {
                var initialState = {
                    invoice: rs.data.invoice,
                };
                _this.bsModalRef = _this.modalService.show(_modules_handle_invoice_components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_13__["SendInvoicesComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem) {
                        _this.loadList(_this.paramSearch);
                    }
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.delete = function (lstInvoice) {
        var _this = this;
        this.hidenDropdownList();
        var ids = [];
        lstInvoice = lstInvoice.sort(function (invA, invB) {
            return new Date(invB.invoice_date) - new Date(invA.invoice_date) || invB.invoice_number.localeCompare(invA.invoice_number);
        });
        ids = lstInvoice.map(function (e) { return e.id; });
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var isView = false;
        var sub = this.handleInvoiceService.showHDXoaBo(ids, isView).subscribe(function (rs) {
            // let countReport = 0;
            // if (rs[1].data.invoice_reports)
            //   countReport = rs[1].data.invoice_reports.length;
            var lstInvoice = rs[0].data.invoices.filter(function (p) { return p.adjustment_type == '7'; });
            if (lstInvoice && lstInvoice.length > 0)
                isView = true;
            var lstInv = [];
            ids.forEach(function (id) {
                var inv = rs[0].data.invoices.filter(function (p) { return p.id == id; })[0];
                lstInv.push(inv);
            });
            var initialState = {
                isView: isView,
                data: lstInv,
                configs: _this.configs,
                infoDangKy: _this.infoDangKy
                //  countReport: countReport,
            };
            _this.bsModalRef = _this.modalService.show(_remove_remove_component__WEBPACK_IMPORTED_MODULE_20__["RemoveComponent"], {
                class: 'modal-lg full-width', initialState: initialState, backdrop: 'static',
                keyboard: false
            });
            _this.modalService.onHide.subscribe(function () {
                if (_this.bsModalRef.content.successSaveItem) {
                    _this.loadList(_this.paramSearch);
                }
            });
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.viewAttachFile = function (data) {
        var _this = this;
        this.hidenDropdownList();
        if (data) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            this.vatService.showAttachFile(data.id).subscribe(function (rs) {
                if (rs.status == 'success') {
                    if (rs.data && rs.data.invoice && rs.data.invoice.invoice_files.length > 0) {
                        var initialState = {
                            fileData: rs.data.invoice.invoice_files,
                            view_attach_file: true,
                        };
                        _this.bsModalRef = _this.modalService.show(_shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_7__["ViewAttachFileComponent"], {
                            backdrop: 'static',
                            keyboard: false,
                            class: 'modal-lg',
                            initialState: initialState
                        });
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.not_file_attach, 'error');
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
    };
    IndexComponent.prototype.inChuyenDoi = function (data) {
        if (this.selectedItems.length || data) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == 'DA_XUAT'; });
            if (_lst.length > 0 || data) {
                var ids = [];
                if (data) {
                    if (data.status == 'DA_XUAT') {
                        ids.push(data.id);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.not_print_convert, 'error');
                        return;
                    }
                }
                else {
                    ids = _lst.map(function (e) { return e.id; });
                }
                if (this.configs.system_parameter.view_multi_invoice) {
                    var data_2 = this.vatService.taodulieuInchuyendoiHS(ids);
                    data_2['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.hoadon;
                    this.vPreviewInvService.xemMau(data_2);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.in_chuyen_doi_hs
                    };
                    this.vPreviewInvService.xemMauPhanTrang(initialState);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    IndexComponent.prototype.downloadFile = function (data, isBBGiay) {
        var _this = this;
        this.hidenDropdownList();
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.handleReportService.getAllFileContentOfReport(data.id, isBBGiay)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (value) {
            if (value.status === 'success') {
                return value.data.invoice_reports;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () { return _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading(); }))
            .subscribe(function (value) {
            _this.arrayFileContent = [];
            for (var i = 0; i < value.length; i++) {
                if (value[i].file_content !== null) {
                    if (value[i].type === 'DIEU_CHINH') {
                        _this.arrayFileContent.push({ id: value[i].id, file_content: value[i].file_content, file_name: value[i].file_name });
                    }
                    else {
                        _this.arrayFileContent.push({ id: value[i].id, file_content: value[i].file_content, file_name: value[i].file_name });
                    }
                }
            }
            var initialState = {
                fileData: _this.arrayFileContent,
                view_attach_file: true,
                view_paper_report: (isBBGiay == '1' ? true : false),
                _objInv: data
            };
            _this.bsModalRef = _this.modalService.show(_shared_modules_vat_shared_components_view_attach_file_view_attach_file_component__WEBPACK_IMPORTED_MODULE_7__["ViewAttachFileComponent"], {
                backdrop: 'static',
                keyboard: false,
                class: 'modal-lg',
                initialState: initialState
            });
        }, function (error) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(error, 'error');
        });
    };
    IndexComponent.prototype.dieuChinhBtn = function (data) {
        var row = data;
        if (row.status === 'DA_XUAT' && row.adjustment_type !== '7' && row.adjustment_type !== '2') {
            var template_code = row.template_code.split('/');
            switch (template_code[0]) {
                case '01GTKT0':
                case '1':
                    this.router.navigate(['/system/handle-report/', row.id, 'DIEU_CHINH']);
                    break;
                case '02GTTT0':
                case '2':
                    this.router.navigate(["/system/handle-invoice/sale-adjust/" + row.id]);
                    break;
                default:
                    break;
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Bạn không thể điều chỉnh hóa đơn này', 'error');
        }
    };
    IndexComponent.prototype.thayTheBtn = function (data) {
        var row = data;
        if (row.status === 'DA_XUAT' && row.adjustment_type !== 7 && row.adjustment_type !== 2 && row.adjustment_type !== 4 && row.adjustment_type !== 5) {
            this.router.navigate(["/system/handle-invoice/replace/" + row.id]);
            var template_code = row.template_code.split('/');
            switch (template_code[0]) {
                case '01GTKT0':
                case '1':
                    this.router.navigate(['/system/handle-report/', row.id, 'THAY_THE']);
                    break;
                case '02GTTT0':
                case '2':
                    this.router.navigate(["/system/handle-invoice/sale-replace/" + row.id]);
                    break;
                default:
                    break;
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Bạn không thể thay thế hóa đơn này', 'error');
        }
    };
    IndexComponent.prototype.cancelReport = function (data) {
        var row = data;
        if (row.status === 'DA_XUAT' && row.adjustment_type !== '7') {
            this.router.navigate(['/system/handle-report/', row.id, 'HUY']);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Hóa đơn đã bị hủy', 'error');
        }
    };
    IndexComponent.prototype.dinhKemFile = function (evt) {
        evt.srcElement.firstChild.click();
        // document.getElementById("file-dinh-kem").click();
        // console.log(e)
    };
    IndexComponent.prototype.onDinhKemFile = function (e) {
        var _this = this;
        var rowIndex = e.target.dataset.rowindex;
        var fileAttachData = [];
        var fileReader = new FileReader();
        var file = e.target.files[0];
        if (file.size <= 2000000) {
            var pattFile = /(\.xlsx|\.docx|\.doc|\.pdf|\.xls|\.xml)$/i;
            if (pattFile.test(file.name)) {
                fileReader.readAsDataURL(file);
                fileReader.onload = function (e) {
                    var base64result = fileReader.result.toString().split(',')[1];
                    fileAttachData.unshift({
                        type: 'DK',
                        file_name: file.name,
                        file_content: base64result,
                    });
                    var data = {
                        invoice_report: {
                            invoice_id: rowIndex,
                            type: 'HUY',
                            status: 'HOAT_DONG',
                            signature_status: 'NGUOI_BAN_KY',
                            file_content: base64result,
                            is_paper_report: '1',
                            file_name: file.name
                        }
                    };
                    _this.handleReportService.apiCreateReport(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () { return _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading(); }))
                        .subscribe(function (value) {
                        if (value.status === 'success') {
                            _this.loadList(_this.paramSearch);
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.attach_paper_report, 'success');
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(value.message, 'error');
                        }
                    }, function (error) {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(error, 'error');
                    });
                };
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('File bạn chọn không đúng định dạng xls, xlsx, doc, docx, pdf, xml', 'error');
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Yêu cầu file nhỏ hơn 2MB', 'error');
        }
    };
    IndexComponent.prototype.downloadFileDocx = function (data, type) {
        var dataSeller = JSON.parse(window.localStorage.getItem('currentUser'));
        var a = {
            invoice_report: {
                invoice_id: data.id,
                file_extension: 'docx',
                doc_relate_date: moment__WEBPACK_IMPORTED_MODULE_12__(new Date()).format('YYYY-MM-DD'),
                type: type,
                json_data: {
                    seller_name: dataSeller.account.name,
                    seller_address: dataSeller.account.business_address,
                    seller_tax_code: dataSeller.account.tax_code,
                    seller_mobile: dataSeller.account.contact_mobile,
                    seller_surrogate_name: dataSeller.account.surrogate_name,
                    seller_surrogate_position: dataSeller.account.surrogate_position,
                    buyer_name: data.hasOwnProperty('customer_name') && data.customer_name !== null ? data.customer_name : data.buyer_name,
                    buyer_address: data.hasOwnProperty('buyer_address') ? data.buyer_address : null,
                    buyer_tax_code: data.hasOwnProperty('buyer_tax_code') ? data.buyer_tax_code : null,
                    buyer_mobile: data.hasOwnProperty('buyer_mobile') ? data.buyer_mobile : null,
                    buyer_surrogate_name: data.hasOwnProperty('buyer_surrogate_name') ? data.buyer_surrogate_name : null,
                    buyer_surrogate_position: data.hasOwnProperty('buyer_surrogate_position') ? data.buyer_surrogate_position : null,
                    template_code: data.hasOwnProperty('template_code') ? data.template_code : null,
                    invoice_series: data.hasOwnProperty('invoice_series') ? data.invoice_series : null,
                    invoice_date: data.hasOwnProperty('invoice_date') ? data.invoice_date : null,
                    invoice_number: data.hasOwnProperty('invoice_number') ? data.invoice_number : null,
                },
                is_paper_report: 1
            }
        };
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.handleReportService.apiGetFileContent(a).subscribe(function (value) {
            if (value.status === 'success') {
                _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].dowloadFile(value.data.invoice.file_name, 'docx', value.data.invoice.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(value.message, 'error');
            }
        }, function (error) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(error.message, 'error');
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.hidenDropdownList = function () {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (this.idRow) {
            document.getElementById(this.idRow).classList.remove('show');
        }
    };
    IndexComponent.prototype.LydoKTiepNhan = function (data) {
        var lstErr = JSON.parse(data.error_content);
        var initialState = {
            lstErr: lstErr,
            notifyType: "THONG_BAO_LOI_CQT"
        };
        this.bsModalSignRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_15__["SendDataForTaxComponent"], {
            backdrop: 'static',
            keyboard: true,
            class: 'modal-lg modal-margin-width',
            initialState: initialState
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            subModal.unsubscribe();
        });
    };
    IndexComponent.prototype.BaoCaoCQT = function () {
        var _this = this;
        this.hidenDropdownList();
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var sub = this.templateService.getAll1().subscribe(function (rs) {
            if (rs.status == 'success') {
                var listTemplate = rs.data.templates;
                var lstInvoice = _this.selectedItems;
                lstInvoice = lstInvoice.sort(function (invA, invB) {
                    return new Date(invB.invoice_date) - new Date(invA.invoice_date) || invB.invoice_number.localeCompare(invA.invoice_number);
                });
                var initialState = {
                    data: lstInvoice,
                    configs: _this.configs,
                    listTemplate: listTemplate,
                    infoDangKy: _this.infoDangKy
                };
                _this.bsModalRef = _this.modalService.show(_modules_handle_invoice_components_report_tax_invoice_error_report_tax_invoice_error_component__WEBPACK_IMPORTED_MODULE_17__["ReportTaxInvoiceErrorComponent"], {
                    class: 'modal-lg full-width', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem) {
                        _this.loadList(_this.paramSearch);
                    }
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
    };
    IndexComponent.prototype.onContentReady = function (e) {
        if (e) {
            var dataSource = this.dataGrid.instance.getDataSource();
            this.pageSize = dataSource.items().length;
        }
    };
    IndexComponent.prototype.ThongDiepGuiNhan = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        if (data.invoice_wrongs && data.invoice_wrongs.length > 0) {
            var lstErr = data.invoice_wrongs;
            var initialState = {
                lstErr: lstErr,
                notifyType: "THONG_DIEP_TRUYEN_NHAN_MTT",
            };
            this.bsModalSignRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_15__["SendDataForTaxComponent"], {
                backdrop: 'static',
                keyboard: true,
                class: 'modal-lg truyen-nhan',
                initialState: initialState
            });
            var subModal_1 = this.modalService.onHide.subscribe(function () {
                subModal_1.unsubscribe();
            });
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        }
        else {
            var message = {
                message_code: data.message_wrong_code
            };
            var sub_1 = this.handleInvoiceService.getInforSendRecieve(message).subscribe(function (rs) {
                if (rs.status == "success") {
                    var lstErr = rs.data;
                    var initialState = {
                        lstErr: lstErr,
                        notifyType: "THONG_DIEP_TRUYEN_NHAN",
                        send_wrong_status: data.send_wrong_status,
                        noi_dung_loi: data.error_content
                    };
                    _this.bsModalSignRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_15__["SendDataForTaxComponent"], {
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
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, "error");
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
    };
    IndexComponent.prototype.deleteItem = function (data) {
        var _this = this;
        var ids = data.id;
        var result = _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
        result.then(function (dialogResult) {
            if (dialogResult) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                _this.handleInvoiceService.delete(ids).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                        _this.loadList(_this.paramSearch);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                });
            }
        });
    };
    IndexComponent.prototype.getStatusSendTax = function (data) {
        var status = "";
        if (data.invoice_wrongs && data.invoice_wrongs.length > 0) {
            switch (data.invoice_wrongs[0].status) {
                case "DA_GUI":
                case "DA_GUI_CQT":
                    status = "Đã gửi TB";
                    break;
                case "KHONG_TIEP_NHAN":
                    status = "CQT không tiếp nhận";
                    break;
                case "TIEP_NHAN":
                    status = "CQT tiếp nhận";
                    break;
                case "CHAP_NHAN":
                    status = "CQT chấp nhận";
                    break;
                case "KHONG_CHAP_NHAN":
                    status = "CQT không chấp nhận";
                    break;
            }
        }
        else {
            switch (data.send_wrong_status) {
                case "DA_GUI":
                case "DA_GUI_CQT":
                    status = "Đã gửi TB";
                    break;
                case "KHONG_TIEP_NHAN":
                    status = "CQT không tiếp nhận";
                    break;
                case "TIEP_NHAN":
                    status = "CQT tiếp nhận";
                    break;
                case "CHAP_NHAN":
                    status = "CQT chấp nhận";
                    break;
                case "KHONG_CHAP_NHAN":
                    status = "CQT không chấp nhận";
                    break;
            }
        }
        return status;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_19__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_19__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/handle-invoice-student/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/handle-invoice-student/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_2__["HandleInvoiceService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_8__["HanldeReportService"],
            _modules_handle_invoice_student_shared_handle_invoice_student_service__WEBPACK_IMPORTED_MODULE_14__["HandleInvoiceStudentService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_16__["TemplateService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_21__["ViewInvoiceService"],
            _shared_service_invoice_service__WEBPACK_IMPORTED_MODULE_22__["InvoiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/remove/remove.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/remove/remove.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.cancel_invoice}}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid\r\n    id=\"invoiceHistoryGrid\"\r\n    [dataSource]=\"dataSource\"\r\n    [showBorders]=\"true\"\r\n    [wordWrapEnabled]=\"true\"\r\n    (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\"\r\n    [showRowLines]=\"true\">\r\n    <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n    <!-- Số hóa đơn -->\r\n    <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"invoice_number\"\r\n              caption=\"{{ 'GRID.INVOICE.invoice_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n              alignment=\"center\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Mẫu số, ký hiệu -->\r\n    <dxi-column cellTemplate=\"templateCode\"\r\n              caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Ngày hóa đơn -->\r\n    <dxi-column dataField=\"invoice_date\" caption=\"{{ 'GRID.INVOICE.invoice_date' | translate }}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\" [editorOptions]=\"{useMaskBehavior:true}\" dataType=\"date\"\r\n              format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Mã số thuế -->\r\n     <dxi-column dataField=\"buyer_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"left\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Tên khách hàng -->\r\n    <dxi-column cellTemplate=\"customerName\" caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\"\r\n              alignment=\"left\" minWidth=\"200\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Địa chỉ bên mua -->\r\n    <dxi-column dataField=\"buyer_address\" caption=\"{{_translate.CONTROLL.LABEL.address}}\" minWidth=\"200\" \r\n                [allowEditing]=\"false\" alignment=\"left\" [allowEditing]=\"false\">\r\n    </dxi-column>\r\n    <!-- Tổng tiền -->\r\n    <dxi-column dataField=\"total_payment\" caption=\"{{ 'GRID.INVOICE.total_payment' | translate }}\" alignment=\"right\"\r\n              minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\" [allowEditing]=\"false\" dataType=\"number\" format=\"0,###.##\">\r\n    </dxi-column>\r\n    <!-- Số văn bản -->\r\n    <!-- <dxi-column dataField=\"doc_relate_symbol\" [allowEditing]=\"!isView\"\r\n                caption=\"{{_translate.CONTROLL.LABEL.doc_relate_symbol}}\" minWidth=\"150\" alignment=\"left\">\r\n    </dxi-column> -->\r\n    <!-- Ngày văn bản -->\r\n    <!-- <dxi-column dataField=\"doc_relate_date\" [allowEditing]=\"!isView\" \r\n                caption=\"{{_translate.CONTROLL.LABEL.doc_relate_date}}\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"left\" minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\">\r\n    </dxi-column> -->\r\n    <!-- Ngày hủy -->\r\n    <dxi-column dataField=\"destroy_date\"\r\n                caption=\"{{ 'GRID.INVOICE.date_cancel' | translate }}\" [editorOptions]=\"{ placeholder: 'dd/MM/yyyy',useMaskBehavior:true }\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"left\" minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\">\r\n    </dxi-column>\r\n    <!-- Lý do hủy -->\r\n    <dxi-column dataField=\"destroy_reason\"\r\n                caption=\"{{_translate.CONTROLL.LABEL.destroy_reason}}\" alignment=\"left\" minWidth=\"150\">\r\n    </dxi-column>\r\n    <!-- Email -->\r\n    <!-- <dxi-column dataField=\"buyer_email\" [allowEditing]=\"!isView\" \r\n                caption=\"Email\" alignment=\"left\" minWidth=\"150\">\r\n    </dxi-column> -->\r\n    <!-- <dxi-column cellTemplate=\"DinhKemFile\" caption=\"{{_translate.CONTROLL.LABEL.attach_file}}\" [width]=\"150\" alignment=\"left\"></dxi-column> -->\r\n    <!-- <dxi-column *ngIf=\"!isView\" cellTemplate=\"downloadBB\" caption=\"{{_translate.CONTROLL.LABEL.doc_relate}}\" [width]=\"90\" alignment=\"center\"></dxi-column> -->\r\n\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n      <p>{{ d.data.template_code }}</p>\r\n      <p>{{ d.data.invoice_series }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n        *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.customer_name }}</p>\r\n      <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.customer_name || _translate.GRID.INVOICE.invoice_wait_for_sign }}</p>\r\n    </div>\r\n      <div *dxTemplate=\"let data of 'DinhKemFile'\">\r\n          <a href=\"javascript:void(0)\" (click)=\"dinhKemFile($event)\">\r\n            <input type=\"file\" id=\"file-dinh-kem\" [attr.data-rowindex]=\"data.rowIndex\" accept=\".xlsx, .docx, .doc, .pdf, .xls, .xml\" (change)=\"onDinhKemFile($event)\" multiple=\"false\" style=\"display: none;\"/>\r\n\r\n            <p *ngIf=\"data.data.invoice_files&&data.data.invoice_files.length\" (click)=\"downloadFile(data.data.invoice_files[0])\">{{data.data.invoice_files[0].file_name}}</p>\r\n          </a>\r\n        </div>\r\n      <!-- <div *dxTemplate=\"let d of 'downloadBB'\">\r\n          <a href=\"javascript:void(0)\" (click)=\"xuatMauBienBan(d.data)\"><img src=\"assets\\img\\icons\\TaiMauBangKe.png\"></a>\r\n        </div> -->\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <dx-button *ngIf=\"!isView\" text=\"{{_translate.CONTROLL.BUTTON.save }}\" (click)=\"xoaBo()\" icon=\"{{_translate.ICONS.save }}\" type=\"default\" validationGroup=\"formData\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back }}\" icon=\"{{_translate.ICONS.come_back }}\" type=\"default\" (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup\r\n  class=\"popup\"\r\n  [width]=\"400\"\r\n  [height]=\"120\"\r\n  [showTitle]=\"true\"\r\n  title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\"\r\n  (onShowing)=\"onImportShowing($event)\"\r\n  (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar \r\n        [min]=\"0\" \r\n        [max]=\"100\" \r\n        [value]=\"valueProgress\"\r\n        [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/remove/remove.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/remove/remove.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gach-chan{text-decoration:underline}.img-upload-second{text-align:center}.img-upload-second i{margin-top:10px;width:40px;height:auto;cursor:pointer}.img-upload-second p{margin-top:10px}\n"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/remove/remove.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/remove/remove.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RemoveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveComponent", function() { return RemoveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/handle-invoice/shared */ "./src/app/modules/handle-invoice/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var RemoveComponent = /** @class */ (function () {
    function RemoveComponent(bsModalRef, socketService, handleInvoiceService, authService, vatService, translate, router) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.socketService = socketService;
        this.handleInvoiceService = handleInvoiceService;
        this.authService = authService;
        this.vatService = vatService;
        this.translate = translate;
        this.router = router;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.emailPattern = _config_index__WEBPACK_IMPORTED_MODULE_11__["pattern"].email;
        this.isTT78 = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    RemoveComponent.prototype.ngOnInit = function () {
        this.invoicesStore = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_9___default.a({
            key: 'id',
            data: this.data
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_10___default.a({
            store: this.invoicesStore
        });
        if (this.infoDangKy && this.infoDangKy.id) {
            if (this.infoDangKy.status == "CHAP_NHAN")
                this.isTT78 = true;
        }
        // this.invoicesStore.load().then((dataSource) => {
        //   dataSource.forEach((item, index) => {
        //     item.doc_relate_symbol = this.createDocRelateNumber();
        //   });
        // });
        this.connectWebsocket();
    };
    RemoveComponent.prototype.createDocRelateNumber = function () {
        var number_report = "";
        if (this.countReport < 10)
            number_report = '0' + this.countReport + '/' + new Date().getFullYear() + '/BB-HBHĐ';
        else
            number_report = this.countReport + '/' + new Date().getFullYear() + '/BB-HBHĐ';
        this.countReport++;
        return number_report;
    };
    RemoveComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDonImport().subscribe(function (message) {
            var data = message;
            if (data.Status == 'success') {
                if (data.SvcName == "efy_Sign") {
                    var i = _this.invoiceIndex;
                    if (data.Data.Name == 'hoadon.xml') {
                        _this.goiApiXuatHoaDon(data.Data.Content, _this.invoices[i]);
                    }
                    else if (data.Data.Name == 'ten_filek_the_trung-dc-nhi.xml') {
                        _this.invoices[i].issuer_name = data.Data.IssuerName;
                        _this.xuLiApiKhiXuat(_this.invoices[i]);
                    }
                    else {
                        _this.invoices[i].invoice_files.forEach(function (item) {
                            if (item.file_name == data.Data.Name) {
                                item.file_content = data.Data.Content;
                            }
                        });
                        _this.tempKiFile++;
                        if (_this.tempKiFile == _this.invoices[i].invoice_files.length) {
                            _this.xuLiApiKhiXuat(_this.invoices[i]);
                        }
                    }
                }
            }
            else {
                _this.showPopup = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(data.Description, 'error');
            }
        });
    };
    RemoveComponent.prototype._validGrid = function () {
        var _this = this;
        var invalid = true;
        this.invoicesStore.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                item.doc_relate_date = item.doc_relate_date ? moment__WEBPACK_IMPORTED_MODULE_1__(item.doc_relate_date).format('YYYY-MM-DD') : item.doc_relate_date;
                item.destroy_date = item.destroy_date ? moment__WEBPACK_IMPORTED_MODULE_1__(item.destroy_date).format('YYYY-MM-DD') : item.destroy_date;
                if (!item.destroy_date && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.CONTROLL.LABEL.cancel_date + " " + _this._translate.VALIDATION.required, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_date'));
                    invalid = false;
                    return false;
                }
                else {
                    var currentDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(item.destroy_date) > moment__WEBPACK_IMPORTED_MODULE_1__(currentDate) && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.date_cancel_invoice_not_greater_date_current, 'error');
                        _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_date'));
                        invalid = false;
                        return false;
                    }
                    var invoice_date = moment__WEBPACK_IMPORTED_MODULE_1__(item.invoice_date).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(item.destroy_date) < moment__WEBPACK_IMPORTED_MODULE_1__(invoice_date) && invalid) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.date_cancel_invoice_greater_or_equal_date_invoice, 'error');
                        _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_date'));
                        invalid = false;
                        return false;
                    }
                }
                if (!item.destroy_reason && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.CONTROLL.LABEL.reason_cancels + " " + _this._translate.VALIDATION.required, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'destroy_reason'));
                    invalid = false;
                    return false;
                }
                if (item.buyer_email && !_this.emailPattern.test(item.buyer_email) && invalid) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Email ' + _this._translate.VALIDATION.not_pattern, 'error');
                    _this.dataGrid.instance.focus(_this.dataGrid.instance.getCellElement(index, 'buyer_email'));
                    invalid = false;
                    return false;
                }
            });
        });
        return invalid;
    };
    RemoveComponent.prototype.xoaBo = function () {
        var _this = this;
        if (!_core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_6__["InvoicesService"].checkTimeExportInv(this.configs.system_parameter)) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_7__["String"].Format(this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_1__(this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_1__(this.configs.system_parameter.time_end).format('HH:mm')), 'error');
            return;
        }
        setTimeout(function () {
            if (_this._validGrid()) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirmVA(_this._translate.CONFIRM.acction_function, _this._translate.NOTIFY.notify, function () {
                    _this.showPopup = true;
                    _this.invoicesStore.load().then(function (dataSource) {
                        if (dataSource.length > 0) {
                            _this.invoices = dataSource.filter(function (p) { return p.adjustment_type != '7'; });
                            _this.totalInvoice = _this.invoices.length;
                            _this.invoiceIndex = 0;
                            _this.tempKiFile = 0;
                            _this.xuatHoaDon();
                        }
                    });
                });
            }
        }, 300);
    };
    RemoveComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        var i = this.invoiceIndex;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat(this.invoices[i]);
        }
        else {
            if (this.invoices[i].invoice_files.length) {
                this.invoices[i].invoice_files.forEach(function (item) {
                    _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, item.file_content, item.file_name, item.file_name.split('.').pop(), true, _this.invoices[i].invoice_date);
                });
            }
            else {
                if (this.isTT78) {
                    var ListSerialNumber = "DSCKS";
                    if (this.infoDangKy && this.infoDangKy.registration_signature) {
                        var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                        if (signatures && signatures.length > 0)
                            ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                    }
                    var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
                }
                else
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
            }
        }
    };
    RemoveComponent.prototype.xuLiApiKhiXuat = function (invoice) {
        var _this = this;
        var tempTemplate = invoice.template;
        delete invoice.template;
        var xmlInvoice = "";
        var isNewXml = 0;
        var data = {
            id: invoice.id,
            adjustment_type: "7",
            destroy_reason: invoice.destroy_reason,
            email: invoice.buyer_email,
            date: invoice.destroy_date
        };
        var sub = this.handleInvoiceService.getXmlString(data).subscribe(function (rs) {
            invoice.template = tempTemplate;
            if (rs.status == 'success') {
                xmlInvoice = rs.data.invoice.xml_string;
                var isNewXml_1 = rs.data.invoice.is_new_xml;
                var sign_date = moment__WEBPACK_IMPORTED_MODULE_1__(rs.data.invoice.sign_date).format('YYYY-MM-DD HH:mm:ss');
                if (isNewXml_1)
                    _this.nodeSign = "//HDon/DSCKS/NBan";
                else
                    _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                if (xmlInvoice != "") {
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing))
                        _this.goiApiXuatHoaDon(xmlInvoice, invoice);
                    else {
                        if (_this.isTT78)
                            _this.xuLyKiFile(xmlInvoice, sign_date);
                        else
                            _this.xuLyKiFile(xmlInvoice, invoice.invoice_date);
                    }
                }
            }
            else {
                _this.showPopup = false;
                _this.errorImport = true;
                //this.onImportHiding();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    RemoveComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        if (this.isTT78) {
            var ListSerialNumber = "DSCKS";
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
            }
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate, 'InvoiceData', ListSerialNumber, true);
        }
        else
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate);
    };
    RemoveComponent.prototype.goiApiXuatHoaDon = function (xml_string, invoice) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        // Helper.dowloadFile('hoadon.xml', 'xml', xml_string);
        this.subXuatHoaDon = this.handleInvoiceService.cancelInvoice({
            invoice: {
                id: invoice.id,
                // doc_relate_symbol: invoice.doc_relate_symbol,
                // doc_relate_date: invoice.doc_relate_date,
                destroy_reason: invoice.destroy_reason,
                destroy_date: invoice.destroy_date,
                //email: invoice.buyer_email,
                xml_string: xml_string
            },
            invoice_files: invoice.invoice_files,
        }).subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.valueProgress += percentComplete;
                _this.tempKiFile = 0;
                invoice.adjustment_type = '7';
                if (_this.invoiceIndex < _this.totalInvoice - 1) {
                    _this.invoiceIndex++;
                    _this.xuatHoaDon();
                }
                else if (_this.invoiceIndex == _this.totalInvoice - 1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.cancel_invoice_done, 'success');
                    _this.isView = true;
                    setTimeout(function () {
                        _this.showPopup = false;
                    }, 300);
                }
            }
            else {
                _this.showPopup = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) { }, function () {
            // Library.hideloading();
            _this.subXuatHoaDon.unsubscribe();
        });
    };
    RemoveComponent.prototype.dinhKemFile = function (evt) {
        evt.srcElement.firstChild.click();
        // document.getElementById("file-dinh-kem").click();
        // console.log(e)
    };
    RemoveComponent.prototype.choseFile = function (evt) {
        //evt.srcElement.firstChild.click();
        document.getElementById("file-input").click();
    };
    RemoveComponent.prototype.fileChanged = function (e) {
        var _this = this;
        setTimeout(function () {
            //let rowIndex = e.target.dataset.rowindex;
            var fileAttachData = [];
            var fileReader = new FileReader();
            var file = e.target.files[0];
            var pattFile = /(\.xlsx|\.docx|\.doc|\.pdf|\.xls|\.xml)$/i;
            // console.log(file)
            if (pattFile.test(file.name)) {
                fileReader.readAsDataURL(file);
                fileReader.onload = function (e) {
                    var base64result = fileReader.result.toString().split(',')[1];
                    fileAttachData.unshift({
                        type: "DK",
                        file_name: file.name,
                        file_content: base64result,
                    });
                    // if (document.getElementById('list-file')) {
                    //   document.getElementById('list-file').scrollTop = 0;
                    // }
                    var _lstAttach = [];
                    _lstAttach = _this.dataSource[0]["invoice_files"];
                    if (_lstAttach == null) {
                        _lstAttach = [];
                    }
                    else {
                        _lstAttach.push(fileAttachData[0]);
                    }
                    _this.dataSource[0]["invoice_files"] = _lstAttach;
                    // this.dataSource[rowIndex]["report_cancel_invoice_file_name"] = file.name;
                    //this.dataSource.reload();
                };
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("File bạn chọn không đúng định dạng xls, xlsx, doc, docx, pdf, xml", "error");
            }
        }, 200);
    };
    RemoveComponent.prototype.onDinhKemFile = function (e) {
        var _this = this;
        var rowIndex = e.target.dataset.rowindex;
        var fileAttachData = [];
        var fileReader = new FileReader();
        var file = e.target.files[0];
        var pattFile = /(\.xlsx|\.docx|\.doc|\.pdf|\.xls|\.xml)$/i;
        // console.log(file)
        if (pattFile.test(file.name)) {
            fileReader.readAsDataURL(file);
            fileReader.onload = function (e) {
                var test = fileReader.result;
                var base64result = fileReader.result.toString().split(',')[1];
                fileAttachData.unshift({
                    type: "DK",
                    file_name: file.name,
                    file_content: base64result,
                });
                if (document.getElementById('list-file')) {
                    document.getElementById('list-file').scrollTop = 0;
                }
                _this.invoicesStore.load().then(function (dataSource) {
                    dataSource.forEach(function (item, index) {
                        if (index == rowIndex)
                            item.invoice_files = fileAttachData;
                    });
                });
                // this.dataSource[rowIndex]["invoice_files"] = fileAttachData;
                // this.dataSource[rowIndex]["report_cancel_invoice_file_content"] = base64result;
                // this.dataSource[rowIndex]["report_cancel_invoice_file_name"] = file.name;
            };
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("File bạn chọn không đúng định dạng xls, xlsx, doc, docx, pdf, xml", "error");
        }
    };
    RemoveComponent.prototype.removeFile = function (i) {
        var _lstAttach = [];
        _lstAttach = this.dataSource[0]["invoice_files"];
        _lstAttach.splice(i, 1);
    };
    RemoveComponent.prototype.downloadFile = function (data) {
        var re = /(?:\.([^.]+))?$/;
        var fileType = re.exec(data.file_name)[1];
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(data.file_name, fileType, data.file_content);
    };
    RemoveComponent.prototype.xuatMauBienBan = function (data) {
        if (this._validGrid()) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var inv = Object.assign({}, data);
            inv.adjustment_type = "1";
            inv.auto_value_price = inv.auto_value_price == null ? false : inv.auto_value_price;
            inv.invoice_files = [];
            inv.doc_relate_date = moment__WEBPACK_IMPORTED_MODULE_1__(data.doc_relate_date).format('YYYY-MM-DD');
            this.vatService.xuatMauBienBan(inv).subscribe(function (rs) {
                if (rs.status == 'success') {
                    var file = rs.data.invoice;
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) { }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            });
        }
    };
    RemoveComponent.prototype.viewDetailInvoice = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            var win_1 = window.open('', '', 'width=200, height=100');
            win_1.document.body.innerHTML = this._translate.NOTIFY.loading;
            win_1.blur();
            var sub_1 = this.vatService.xemHoaDonInvoiceImport(ids).subscribe(function (rs) {
                if (rs.status === 'success') {
                    var pdf_file = rs.data.invoice.pdf_file;
                    win_1.document.write("\n            <iframe width=\"100%\" height=\"97%\" src=\"data:application/pdf;base64," + pdf_file + "#download=1\"></iframe>\n          ");
                    win_1.resizeTo(screen.availWidth, screen.availHeight);
                    win_1.focus();
                }
                else {
                    win_1.close();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    RemoveComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    RemoveComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm(this._translate.CONFIRM.sign_stop);
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
    RemoveComponent.prototype.dong = function () {
        this.bsModalRef.hide();
        this.router.navigate(['/system/handle-invoice-student/']);
    };
    RemoveComponent.prototype.onEditorPreparing = function (e) {
        if (e.parentType === 'dataRow') {
            if (e.dataField === 'destroy_date' || e.dataField === 'destroy_reason') {
                if (this.isView || e.row.data.adjustment_type == "7")
                    e.editorOptions.disabled = true;
            }
        }
    };
    RemoveComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            /* Bôi đỏ các trường bắt buộc */
            if (e.column.dataField == "destroy_date") {
                if (!e.data.destroy_date) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = this._translate.CONTROLL.LABEL.cancel_date + " " + this._translate.VALIDATION.required;
                }
                else {
                    var currentDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
                    var invoice_date = moment__WEBPACK_IMPORTED_MODULE_1__(e.data.invoice_date).format('YYYY-MM-DD');
                    var destroy_date = moment__WEBPACK_IMPORTED_MODULE_1__(e.data.destroy_date).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(destroy_date) > moment__WEBPACK_IMPORTED_MODULE_1__(currentDate)) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = this._translate.NOTIFY.date_cancel_invoice_not_greater_date_current;
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(destroy_date) < moment__WEBPACK_IMPORTED_MODULE_1__(invoice_date)) {
                        e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                        e.cellElement.title = this._translate.NOTIFY.date_cancel_invoice_greater_or_equal_date_invoice;
                    }
                }
            }
            if (e.column.dataField == "destroy_reason") {
                if (!e.data.destroy_reason) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = this._translate.CONTROLL.LABEL.reason_cancels + " " + this._translate.VALIDATION.required;
                }
            }
            if (e.column.dataField == "buyer_email") {
                if (e.data.buyer_email && !this.emailPattern.test(e.data.buyer_email)) {
                    e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                    e.cellElement.title = 'Email ' + this._translate.VALIDATION.not_pattern;
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"])
    ], RemoveComponent.prototype, "dataGrid", void 0);
    RemoveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove',
            template: __webpack_require__(/*! ./remove.component.html */ "./src/app/modules/handle-invoice-student/components/remove/remove.component.html"),
            styles: [__webpack_require__(/*! ./remove.component.scss */ "./src/app/modules/handle-invoice-student/components/remove/remove.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_13__["HandleInvoiceService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])
    ], RemoveComponent);
    return RemoveComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/replace/replace-form/replace-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/replace/replace-form/replace-form.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row invoice-form\">\r\n  <div class=\"col-md-6\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item *ngIf=\"!isTT78\" [label]=\"{text: _translate.CONTROLL.LABEL.invoice_form}\" dataField=\"invoice_release_id\"\r\n                  editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: select.invoice_releases, onValueChanged: templateChange, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"_translate.CONTROLL.LABEL.invoice_form {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item *ngIf=\"isTT78\" dataField=\"template_id\" editorType=\"dxSelectBox\" [editorOptions]=\"{items: select.templatesTT78, onValueChanged: onChangeTem, displayExpr: 'name', valueExpr: 'value', disabled: disableTemplateInput()}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.invoice_form }}\"></dxo-label>\r\n        <dxi-validation-rule type=\"required\" message=\"{{ _translate.CONTROLL.LABEL.invoice_form }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n      </dxi-item>\r\n      </dxi-item>\r\n\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"invoice_date\" [label]=\"{text: _translate.GRID.INVOICE.invoice_date }\"\r\n                  editorType=\"dxDateBox\"\r\n                  [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', disabled: disableInvoiceDate, onValueChanged: changeDateTime}\">\r\n        </dxi-item>\r\n\r\n        <dxi-item cssClass=\"vat invoice-number-create-invoice\" dataField=\"invoice_number\"\r\n                  [label]=\"{text: _translate.GRID.INVOICE.invoice_number }\" editorType=\"dxNumberBox\"\r\n                  [editorOptions]=\"{ disabled: true}\">\r\n        </dxi-item>\r\n\r\n        <dxi-item [label]=\"{text: _translate.CONTROLL.LABEL.currency_code}\" dataField=\"currency_code\"\r\n                  editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: select.currency_codes, onValueChanged: currencyCodeChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n        </dxi-item>\r\n        <dxi-item dataField=\"currency_rate\" [label]=\"{text: _translate.CONTROLL.LABEL.currency_rate}\"\r\n                  editorType=\"dxNumberBox\"\r\n                  [editorOptions]=\"{disabled: frmData.currency_code == 'VND',onValueChanged: currencyRateChange, format: '0,###'}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item [label]=\"{text: _translate.CONTROLL.LABEL.payment_method}\" dataField=\"payment_method_name\"\r\n                  editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: select.payment_method_names,onValueChanged: paymentMethodChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.payment_method}} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item name=\"ht-xuat\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.export_form }}\"></dxo-label>\r\n          <div *dxTemplate>\r\n            <dx-select-box [(value)]=\"frmData.status\" displayExpr=\"name\" valueExpr=\"code\" [items]=\"htXuatOptions\" [disabled] = \"!configs.system_parameter.allow_keep_invoice_number\">\r\n            </dx-select-box>\r\n          </div>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <dxi-item *ngIf=\"configs.system_parameter.view_bank_account_seller\" itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"seller_bank_account_number\" editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: select.list_bank_account_seller, onValueChanged: bankAccountSellerChange, displayExpr: 'name_display', valueExpr: 'code',showClearButton: true}\">\r\n          <dxo-label text=\"{{ _translate.CONTROLL.LABEL.seller_bank_account_name }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item itemType=\"group\" [colCount]=\"2\" cssClass='group-input-button'>\r\n          <dxi-item name=\"origin-invoice-number\">\r\n            <dxo-label text=\"{{_translate.GRID.INVOICE.invoice_number_original}}\"></dxo-label>\r\n            <div *dxTemplate>\r\n              <dx-text-box [(value)]=\"oldForm.invoice_number\" disabled=\"true\"></dx-text-box>\r\n            </div>\r\n          </dxi-item>\r\n          <dxi-item itemType=\"button\" alignment=\"left\" [buttonOptions]=\"origin_btn_options\" cssClass='btn-small'>\r\n          </dxi-item>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"soXacThucGoc\" [label]=\"{text: _translate.CONTROLL.LABEL.certificate_code}\"\r\n                  [editorOptions]=\"{disabled: true}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n\r\n      <!-- <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"doc_relate_symbol\" [label]=\"{text: _translate.CONTROLL.LABEL.doc_relate_symbol}\">\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.doc_relate_symbol}} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"doc_relate_date\" [label]=\"{text: _translate.CONTROLL.LABEL.doc_relate_date}\"\r\n                  editorType=\"dxDateBox\" [editorOptions]=\"{displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd'}\">\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.doc_relate_date}} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n          <dxi-validation-rule type=\"range\" [min]=\"minNgayVB\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.doc_relate_date}} {{ _translate.VALIDATION.less_date_inv }}\">\r\n          </dxi-validation-rule>\r\n          <dxi-validation-rule type=\"range\" [max]=\"maxNgayVB\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.doc_relate_date}} {{ _translate.VALIDATION.than_date_curent }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item> -->\r\n      <!-- <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"destroy_reason\" [label]=\"{text: _translate.CONTROLL.LABEL.destroy_reason}\">\r\n          <dxi-validation-rule type=\"required\"\r\n                               message=\"{{_translate.CONTROLL.LABEL.destroy_reason}} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n      </dxi-item> -->\r\n      <dxi-item *ngIf=\"configs.system_parameter.display_export_place\" itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item [label]=\"{text: _translate.CONTROLL.LABEL.export_place}\" dataField=\"export_place\"\r\n                  editorType=\"dxSelectBox\"\r\n                  [editorOptions]=\"{items: select.export_places, onValueChanged: exportPlaceChange, displayExpr: 'name', valueExpr: 'code'}\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item *ngIf=\"configs.system_parameter.display_transport_number\" itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"transport_number\">\r\n          <dxo-label text=\"{{ 'CONTROLL.LABEL.transport_number' | translate }}\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item *ngIf=\"isTT78\" itemType=\"group\" [colCount]=\"1\">\r\n        <!-- Lý do thay thế -->\r\n        <dxi-item dataField=\"destroy_reason\">\r\n          <dxo-label text=\"Lý do thay thế\"></dxo-label>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <dx-form [formData]=\"frmData\" validationGroup=\"formData\" (onFieldDataChanged)=\"onFieldDataChanged()\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <dxi-item dataField=\"student_code\" [label]=\"{text: _translate.CONTROLL.LABEL.code_student }\">\r\n        </dxi-item>\r\n        <dxi-item dataField=\"student_name\" [label]=\"{text: _translate.CONTROLL.LABEL.name_student }\">\r\n        </dxi-item>\r\n        <dxi-item dataField=\"class_name\" [label]=\"{text: _translate.CONTROLL.LABEL.class }\">\r\n        </dxi-item>\r\n        <dxi-item dataField=\"study_year\" [label]=\"{text: _translate.CONTROLL.LABEL.study_year }\">\r\n        </dxi-item>\r\n      </dxi-item>\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"buyer_address\" [label]=\"{text: _translate.CONTROLL.LABEL.address }\">\r\n        </dxi-item>\r\n\r\n        <dxi-item dataField=\"student_reduce_rate_code\" editorType=\"dxSelectBox\"\r\n                  [label]=\"{text: _translate.CONTROLL.LABEL.exemption_and_reduction_rates }\"\r\n                  [editorOptions]=\"{\r\n                  items: select.student_reduce_rate_codes,\r\n                   displayExpr: 'name', valueExpr: 'code',\r\n                   onValueChanged: reduceMethodChange}\"\r\n        >\r\n          <dxi-validation-rule type=\"required\" message=\"{{ _translate.CONTROLL.LABEL.exemption_and_reduction_rates }} {{ _translate.VALIDATION.required }}\"></dxi-validation-rule>\r\n        </dxi-item>\r\n\r\n        <dxi-item [label]=\"{text: 'Email'}\" >\r\n          <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n            <div\r\n              class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n              <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                <app-tag-input-email [variableName]=\"this.emails\" (numberGenerated)=\"renderDataEmail($event)\"\r\n                ></app-tag-input-email>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n  <div class=\"col-md-12\" style=\"margin-top:7px;margin-bottom:7px\">\r\n    <dx-form>\r\n      <dxi-item itemType=\"group\" [colCount]=\"2\">\r\n        <ng-container *ngIf=\"configs.system_parameter.allow_keep_invoice_number\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item name=\"btn-chossen-hdck\">\r\n              <dx-button id=\"btn-chossen-hdck\" (click)=\"showModalHdck()\" icon=\"assets\\img\\icons\\GiuSo.png\"\r\n                         text=\"{{_translate.CONTROLL.BUTTON.select_inv_wait_sign}}\" type=\"default\"></dx-button>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </ng-container>\r\n\r\n      </dxi-item>\r\n    </dx-form>\r\n  </div>\r\n</div>\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"Thông báo\" [dragEnabled]=\"false\"\r\n          [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">Bạn có muốn cập nhật lại dữ liệu vào danh mục khách hàng không?</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"capNhatDmKhachHang()\" text=\"Cập nhật\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"Hủy\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/replace/replace-form/replace-form.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/replace/replace-form/replace-form.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .vat.invoice-number-create-invoice input{color:red;font-weight:bold}\n"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/replace/replace-form/replace-form.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/replace/replace-form/replace-form.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ReplaceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceFormComponent", function() { return ReplaceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_handle_invoice_student_components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/handle-invoice-student/components/choose-hdck/choose-hdck.component */ "./src/app/modules/handle-invoice-student/components/choose-hdck/choose-hdck.component.ts");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ReplaceFormComponent = /** @class */ (function () {
    function ReplaceFormComponent(route, modalService, vatService, authService, customersService) {
        var _this = this;
        this.route = route;
        this.modalService = modalService;
        this.vatService = vatService;
        this.authService = authService;
        this.customersService = customersService;
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.adjustmentObject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRedueFeeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTemplateTT78TypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = {};
        this.pattern = _config_index__WEBPACK_IMPORTED_MODULE_8__["pattern"];
        this.tax_codes = [];
        this.customer_codes = [];
        this.configs = {};
        this.emails = [];
        this.arrEmail = [];
        // thay đổi disable của 3 input customer_name, buyer_name, buyer_address
        this.formItems = [];
        this.customForms = [];
        this.customerTempt = {};
        this.tod = {};
        this.disableInvoiceDate = this.authService.isAllowEditInvoiceDate();
        this.htXuatOptions = [];
        this.showPopup = false;
        this.customerCurent = {};
        this.origin_btn_options = {
            text: '', icon: 'fa fa-eye', type: 'default',
            onClick: function () {
                var ids = [];
                ids.push(_this.oldForm.id);
                if (_this.oldForm.adjustment_type === 5) {
                    if (_this.oldForm.template_code.indexOf('02GTTT') >= 0)
                        window.open("/system/handle-invoice-student/edit-adjust-sale/" + _this.oldForm.id, '_blank');
                    else
                        window.open("/system/handle-invoice-student/edit-adjust-vat/" + _this.oldForm.id, '_blank');
                }
                else if (_this.oldForm.adjustment_type === 3) {
                    if (_this.oldForm.template_code.indexOf('02GTTT') >= 0)
                        window.open("/system/handle-invoice-student/edit-replace-sale/" + _this.oldForm.id, '_blank');
                    else
                        window.open("/system/handle-invoice-student/edit-replace-vat/" + _this.oldForm.id, '_blank');
                }
                else {
                    if (_this.oldForm.template_code.indexOf('02GTTT') >= 0) {
                        window.open("/system/student-sale-invoice/" + _this.oldForm.id, '_blank');
                    }
                    else {
                        window.open("/system/student-vat-invoice/" + _this.oldForm.id, '_blank');
                    }
                }
            }
        };
        this.mst_btn_options = {
            text: '', icon: 'assets/img/icons/Them.png', type: 'default',
            onClick: function () {
                var initialState = {
                    isVisibleGhiVaThemMoi: false
                };
                _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_10__["AddCustomerComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                var submodal = _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveData) {
                        var customer = _this.bsModalRef.content.successSaveData;
                        _this.frmData.customer_name = customer.name;
                        _this.frmData.buyer_tax_code = customer.tax_code;
                        _this.frmData.buyer_name = customer.contact_person_name;
                        _this.frmData.buyer_address = customer.business_address;
                        _this.frmData.customer_code = customer.code;
                        _this.frmData.buyer_mobile = customer.contact_mobile;
                        if (customer.email) {
                            _this.frmData.buyer_email = customer.email;
                            _this.emails = [];
                            var stringDataEmailGet = customer.email.split(';');
                            for (var i = 0; i < stringDataEmailGet.length; i++) {
                                _this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
                            }
                        }
                        else {
                            _this.frmData.buyer_email = customer.email;
                            _this.emails = [];
                        }
                        if (customer.bank_account_number) {
                            _this.frmData.bank_account_number = customer.bank_account_number;
                        }
                        if (customer.bank_name) {
                            _this.frmData.bank_name = customer.bank_name;
                        }
                    }
                    submodal.unsubscribe();
                });
            }
        };
        this.reduceMethodChange = function (e) {
            _this.select.student_reduce_rate_codes.forEach(function (item) {
                if (e.value === item.code) {
                    _this.onRedueFeeChange.emit(item);
                }
            });
        };
        // sự kiện
        this.taxCodeKeyUp = function (e) {
            var str = _this.frmData.buyer_tax_code;
            var len = str.length;
            if (len >= 3) {
                _this.vatService.searchMST(str).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        var arr_1 = [];
                        rs.data.customers.forEach(function (item) {
                            arr_1.push(item);
                        });
                        _this.tax_codes = arr_1;
                    }
                });
            }
        };
        this.customerChanged = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.name) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.customer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.contact_person_name) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.buyer_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.contact_mobile) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.buyer_mobile)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.business_address) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.buyer_address)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.email) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.buyer_email)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.bank_name) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.bank_name)
                                || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.bank_account_number) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.bank_account_number)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this.customer_object_codeChange = function (e) {
            _this.setDisabledByCustomer_object_code(e.value);
        };
        this.templateChange = function (e) {
            _this.select.invoice_releases.forEach(function (item) {
                if (e.value === item.value) {
                    _this.frmData.template_id = item.template_id;
                    _this._objTemplateSelect = item;
                    _this.onTemplateTypeChange.emit(item);
                    if (!_this._objTemplateSelect.is_discount) {
                        _this.dataSource.items().forEach(function (item) {
                            item.discount = null;
                            item.amount_discount = null;
                        });
                        _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._objTemplateSelect, _this.configs.system_parameter);
                        if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBay
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) == _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonXangDau) {
                            _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyTicket(_this.frmData, _this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type));
                        }
                    }
                }
                // Nếu là mẫu html
                if (item.fields) {
                    _this.formItems = [];
                    _this.customForms = [];
                    var _dulieumorong_1 = item.fields.filter(function (x) { return x.type === '4'; });
                    if (_dulieumorong_1.length > 0) {
                        _dulieumorong_1.forEach(function (item) {
                            if (item.is_show) {
                                if (item.data_type === 'chu') {
                                    _this.customForms.push({
                                        editorType: 'dxTextBox',
                                        dataField: item.code,
                                        label: { text: item.name },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_1);
                                            }
                                        }
                                    });
                                }
                                if (item.data_type === 'soluong') {
                                    _this.customForms.push({
                                        editorType: 'dxNumberBox',
                                        dataField: item.code,
                                        label: { text: item.name },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_1);
                                            }
                                        }
                                    });
                                }
                                if (item.data_type === 'ngay') {
                                    _this.customForms.push({
                                        editorType: 'dxDateBox',
                                        dataField: item.code,
                                        label: { text: item.name },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_1);
                                            }, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss'
                                        }
                                    });
                                }
                                if (item.data_type === 'danhmuc') {
                                    _this.customForms.push({
                                        editorType: 'dxSelectBox',
                                        dataField: item.code,
                                        label: { text: item.name }
                                    });
                                }
                            }
                        });
                        _this.formItems.push(_this.createCustomGroup());
                    }
                    _dulieumorong_1.forEach(function (item) {
                        _this.customerTempt[item.code] = item.value;
                    });
                }
                else {
                    _this.formItems = [];
                    _this.customerTempt = {};
                }
            });
        };
        this.onChangeTem = function (e) {
            _this.select.templatesTT78.forEach(function (item) {
                if (e.value == item.value) {
                    _this.frmData.template_id = item.value;
                    _this.frmData.invoice_series = item.invoice_series;
                    _this.frmData.template_code = item.template_code;
                    _this.onTemplateTT78TypeChange.emit(item);
                    for (var key in item) {
                        if (item.hasOwnProperty(key)) {
                            var value = item[key];
                            _this._oTemplateTT78[key] = value;
                        }
                    }
                    if (!_this._oTemplateTT78.is_discount) {
                        _this.invoice_products.load().then(function (dataSource) {
                            dataSource.forEach(function (item, index) {
                                item.discount = null;
                                item.amount_discount = null;
                            });
                        });
                        _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._oTemplateTT78, _this.configs.system_parameter);
                        if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBay
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                            || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].templatetype.HoaDonXangDau) {
                            _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyTicket(_this.frmData, _this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type));
                        }
                    }
                    // Nếu là mẫu html
                    if (item.fields) {
                        _this.formItems = [];
                        _this.customForms = [];
                        var _dulieumorong_2 = item.fields.filter(function (x) { return x.type === '4'; });
                        if (_dulieumorong_2.length > 0) {
                            _dulieumorong_2.forEach(function (item1) {
                                if (item1.is_show) {
                                    if (item1.data_type === 'chu') {
                                        _this.customForms.push({
                                            //  cssClass: 'vat layout_input',
                                            editorType: 'dxTextBox',
                                            dataField: item1.code,
                                            label: { text: item1.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_2);
                                                }
                                            }
                                        });
                                    }
                                    if (item1.data_type === 'soluong') {
                                        _this.customForms.push({
                                            //    cssClass: 'vat layout_input',
                                            editorType: 'dxNumberBox',
                                            dataField: item1.code,
                                            label: { text: item1.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_2);
                                                }
                                            }
                                        });
                                    }
                                    if (item1.data_type === 'ngay') {
                                        _this.customForms.push({
                                            //   cssClass: 'vat layout_input',
                                            editorType: 'dxDateBox',
                                            dataField: item1.code,
                                            label: { text: item1.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_2);
                                                }, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss',
                                            }
                                        });
                                    }
                                    if (item1.data_type === 'danhmuc') {
                                        _this.customForms.push({
                                            //    cssClass: 'vat layout_input',
                                            editorType: 'dxSelectBox',
                                            dataField: item1.code,
                                            label: { text: item1.name }
                                        });
                                    }
                                }
                            });
                            _this.formItems.push(_this.createCustomGroup());
                            _this.frmData.invoice_options = _dulieumorong_2;
                        }
                        else
                            _this.frmData.invoice_options = [];
                        _dulieumorong_2.forEach(function (value) {
                            _this.customerTempt[value.code] = value.value;
                        });
                    }
                    else {
                        _this.formItems = [];
                        _this.customerTempt = {};
                    }
                }
            });
        };
        //
        this.currencyCodeChange = function (e) {
            if (_this.frmData.currency_code === 'VND') {
                _this.frmData.currency_rate = null;
            }
            _this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].tienBangChu(_this.frmData.total_payment, _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien), _this.frmData.currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        this.exportPlaceChange = function (e) {
            var _obj = _this.select.export_places.filter(function (p) { return p.code === e.value; })[0];
            if (_obj) {
                _this.frmData.export_address = _obj.dia_chi;
                _this.frmData.export_place_name = _obj.name;
            }
        };
        this.bankAccountSellerChange = function (e) {
            var _obj = _this.select.list_bank_account_seller.filter(function (p) { return p.code === e.value; })[0];
            if (_obj) {
                _this.frmData.seller_bank_account_name = _obj.name;
                // this.frmData.export_place_name = _obj.name;
            }
            else {
                _this.frmData.seller_bank_account_name = '';
            }
        };
        this.paymentMethodChange = function (e) {
            var _obj = _this.select.payment_method_names.filter(function (p) { return p.code === e.value; })[0];
            if (_obj) {
                _this.frmData.payment_method_view_name = _obj.name;
            }
        };
        this.currencyRateChange = function (e) {
            if (!_this.isTT78)
                _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._objTemplateSelect, _this.configs.system_parameter);
            else
                _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, null, _this._oTemplateTT78, _this.configs.system_parameter);
        };
        this.updateCustomerInfo = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.code) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.customer_code)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this.updateTaxcodeInfo = function (e) {
            if (_this.frmData.customer_id) {
                _this.customersService.getCustomer(_this.frmData.customer_id).subscribe(function (response) {
                    if (response.data) {
                        _this.customerCurent = response.data.customer;
                        if (_this.customerCurent) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.customerCurent.tax_code) !== _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.frmData.buyer_tax_code)) {
                                _this.showPopup = true;
                                return;
                            }
                        }
                    }
                });
            }
        };
        this.changeDateTime = function (e) {
            _this.changeTemplateInvoice(e.value);
        };
        this._translate = this.authService.getTranslate();
    }
    ReplaceFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.minNgayVB = moment__WEBPACK_IMPORTED_MODULE_2__(this.oldForm.invoice_date).format('YYYY-MM-DD');
        this.maxNgayVB = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
        this.configs = this.authService.getConfigs();
        this.routeSub = this.route.data.subscribe(function (data) {
            // put data DM for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.payment_method_names = data.init[1].DM_HINH_THUC_THANH_TOAN;
            _this.select.currency_codes = data.init[1].DM_LOAI_TIEN;
            _this.select.customer_types = data.init[1].DM_NHOM_KHACH_HANG;
            _this.select.export_places = data.init[1].DM_NOI_XUAT_HOA_DON;
            _this.select.list_bank_account_seller = data.init[1].DM_TAI_KHOAN_NGAN_HANG;
            _this.select.student_reduce_rate_codes = data.init[1].DM_TY_LE_MIEN_GIAM_HOC_PHI;
            _this.select.list_bank_account_seller.forEach(function (item) {
                item.name_display = item.code + ': ' + item.name;
            });
            _this.htXuatOptions = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._htXuatOptions(_this._translate, _this.frmData.status);
            if (_this.configs.system_parameter.allow_keep_invoice_number === false) {
                _this.htXuatOptions = _this.htXuatOptions.filter(function (e) { return e.code !== _config_sEnum__WEBPACK_IMPORTED_MODULE_13__["sEnum"].hinhThucXuat.XuatChoKy; });
            }
            if (_this.isTT78) {
                var temptTT78 = [];
                temptTT78 = data.init[0].filter(function (item) { return item.template_type !== 'HOA_DON_KHOI_TAO_TU_MAY_TINH_TIEN' && item.template_type !== 'PHIEU_THU_MAY_TINH_TIEN'; });
                if (temptTT78 && temptTT78.length > 0) {
                    _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
                    if (Number.parseInt(_this.frmData.invoice_number) > 0) {
                        if (_this.frmData.is_invoice_with_code != _this.infoDangKy.is_invoice_with_code) {
                            _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.frmData.is_invoice_with_code; });
                        }
                    }
                }
                if (_this.frmData.id)
                    _this.changeTemplateInvoice(_this.frmData.invoice_date);
            }
            else {
                _this.select.invoice_releases = data.init[0];
            }
        });
        this.select.customer_object_codes = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_6__["VSelectBoxService"]._customerObject(this._translate);
        this.select.adjustment_objects = [];
        // Set disabled cho đơn vị tổ chức
        this.setDisabledByCustomer_object_code(this.frmData.customer_object_code);
        // tìm kiếm mã số thuế
        this.tax_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'tax_code');
            }
        });
        // // tìm kiếm mã khách hàng
        this.customer_codes = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
            load: function (loadOptions) {
                return _this.vatService.getDataSourceForm(loadOptions.searchValue, 'code');
            }
        });
        if (!this.isTT78) {
            this.select.invoice_releases.forEach(function (item) {
                if (item.template_id === _this.frmData.template_id) {
                    // Nếu là mẫu html
                    if (item.fields && item.fields.length > 0) {
                        _this.formItems = [];
                        _this.customForms = [];
                        var _dulieumorong_3 = item.fields.filter(function (x) { return x.type === '4'; });
                        if (_dulieumorong_3.length > 0) {
                            _dulieumorong_3.forEach(function (item) {
                                if (item.is_show) {
                                    if (item.data_type === 'chu') {
                                        _this.customForms.push({
                                            editorType: 'dxTextBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_3);
                                                }
                                            }
                                        });
                                    }
                                    if (item.data_type === 'soluong') {
                                        _this.customForms.push({
                                            editorType: 'dxNumberBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_3);
                                                }
                                            }
                                        });
                                    }
                                    if (item.data_type === 'ngay') {
                                        _this.customForms.push({
                                            editorType: 'dxDateBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_3);
                                                }, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss',
                                            }
                                        });
                                    }
                                    if (item.data_type === 'danhmuc') {
                                        _this.customForms.push({
                                            editorType: 'dxSelectBox',
                                            dataField: item.code,
                                            label: { text: item.name }
                                        });
                                    }
                                }
                            });
                            _this.formItems.push(_this.createCustomGroup());
                        }
                        if (_this.frmData.invoice_options && _this.frmData.invoice_options.length > 0) {
                            _this.frmData.invoice_options.forEach(function (iteminv) {
                                _this.customerTempt[iteminv.code] = iteminv.value;
                            });
                        }
                        else {
                            _dulieumorong_3.forEach(function (item) {
                                _this.customerTempt[item.code] = item.value;
                            });
                        }
                    }
                }
            });
        }
        else {
            this.select.templatesTT78.forEach(function (item) {
                if (item.value === _this.frmData.template_id) {
                    // Nếu là mẫu html
                    if (item.fields && item.fields.length > 0) {
                        _this.formItems = [];
                        _this.customForms = [];
                        var _dulieumorong_4 = item.fields.filter(function (x) { return x.type === '4'; });
                        if (_dulieumorong_4.length > 0) {
                            _dulieumorong_4.forEach(function (item) {
                                if (item.is_show) {
                                    if (item.data_type === 'chu') {
                                        _this.customForms.push({
                                            editorType: 'dxTextBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_4);
                                                }
                                            }
                                        });
                                    }
                                    if (item.data_type === 'soluong') {
                                        _this.customForms.push({
                                            editorType: 'dxNumberBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_4);
                                                }
                                            }
                                        });
                                    }
                                    if (item.data_type === 'ngay') {
                                        _this.customForms.push({
                                            editorType: 'dxDateBox',
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {
                                                onValueChanged: function () {
                                                    _this.changeItem(_dulieumorong_4);
                                                }, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss',
                                            }
                                        });
                                    }
                                    if (item.data_type === 'danhmuc') {
                                        _this.customForms.push({
                                            editorType: 'dxSelectBox',
                                            dataField: item.code,
                                            label: { text: item.name }
                                        });
                                    }
                                }
                            });
                            _this.formItems.push(_this.createCustomGroup());
                        }
                        if (_this.frmData.invoice_options && _this.frmData.invoice_options.length > 0) {
                            _this.frmData.invoice_options.forEach(function (iteminv) {
                                _this.customerTempt[iteminv.code] = iteminv.value;
                            });
                        }
                        else {
                            _dulieumorong_4.forEach(function (item) {
                                _this.customerTempt[item.code] = item.value;
                            });
                            _this.frmData.invoice_options = _dulieumorong_4;
                        }
                    }
                }
            });
        }
        if (this.frmData.buyer_email) {
            this.emails = [];
            var emailToString = this.frmData.buyer_email;
            var a11 = emailToString.replace(/;/g, ',');
            this.emails = a11.split(',');
        }
    };
    ////// Tạo form mở rộng
    ReplaceFormComponent.prototype.createCustomGroup = function () {
        return {
            itemType: 'group',
            colCount: '2',
            items: this.customForms
        };
    };
    /////// sự kiện thay đổi các trường mở rộng
    ReplaceFormComponent.prototype.changeItem = function (_dulieumorong) {
        var _this = this;
        _dulieumorong.forEach(function (item) {
            for (var key in _this.customerTempt) {
                if (item.code === key) {
                    item.value = _this.customerTempt[key];
                }
            }
            _this.frmData.invoice_options = _dulieumorong;
        });
    };
    ReplaceFormComponent.prototype.ngAfterViewInit = function () {
        // this.listDxForm._results[1].readOnly = true;
    };
    ReplaceFormComponent.prototype.readonlyAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = true;
        });
        this.readOnlyCacTruongConLai = true;
    };
    ReplaceFormComponent.prototype.removeReadonlyAllForm = function () {
        this.listDxForm._results.forEach(function (item) {
            item.readOnly = false;
            // item.instance.resetValues();
        });
        this.readOnlyCacTruongConLai = false;
    };
    ReplaceFormComponent.prototype.setDisabledByCustomer_object_code = function (value) {
        this.tod.customer_name = false;
        this.tod.buyer_name = false;
        this.tod.buyer_address = false;
        switch (value) {
            case 'DOANH_NGHIEP':
                break;
            case 'CA_NHAN':
                this.frmData.customer_name = '';
                this.tod.customer_name = true;
                break;
            case 'KHACH_LE':
                this.frmData.customer_name = '';
                this.frmData.buyer_address = '';
                this.tod.customer_name = true;
                this.tod.buyer_address = true;
                break;
            default:
                break;
        }
    };
    ReplaceFormComponent.prototype.getHtXuatValue = function () {
        return this.frmData.status;
    };
    // gửi data lên parent component
    ReplaceFormComponent.prototype.onFieldDataChanged = function () {
        this.formEvent.emit(this.frmData);
    };
    ReplaceFormComponent.prototype.taxCodeChoose = function (e) {
        var customer = e.itemData;
        if (this.frmData.customer_object_code !== 'CA_NHAN' && this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.customer_name = customer.name;
        }
        this.frmData.buyer_name = customer.contact_person_name;
        if (this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.buyer_address = customer.business_address;
        }
        this.frmData.customer_code = customer.code;
        this.frmData.buyer_mobile = customer.contact_mobile;
        if (customer.email) {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
            var stringDataEmailGet = customer.email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
        else {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
        }
        this.frmData.customer_id = customer.id;
        this.onFieldDataChanged();
    };
    ReplaceFormComponent.prototype.customerCodeChoose = function (e) {
        var customer = e.itemData;
        if (this.frmData.customer_object_code !== 'CA_NHAN' && this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.customer_name = customer.name;
        }
        this.frmData.buyer_name = customer.contact_person_name;
        if (this.frmData.customer_object_code !== 'KHACH_LE') {
            this.frmData.buyer_address = customer.business_address;
        }
        this.frmData.buyer_tax_code = customer.tax_code;
        this.frmData.customer_id = customer.id;
        this.frmData.buyer_mobile = customer.contact_mobile;
        if (customer.email) {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
            var stringDataEmailGet = customer.email.split(';');
            for (var i = 0; i < stringDataEmailGet.length; i++) {
                this.emails.push({ display: stringDataEmailGet[i], value: stringDataEmailGet[i] });
            }
        }
        else {
            this.frmData.buyer_email = customer.email;
            this.emails = [];
        }
        this.frmData.bank_account_number = customer.bank_account_number ? customer.bank_account_number : '';
        this.frmData.bank_name = customer.bank_name ? customer.bank_name : '';
        this.onFieldDataChanged();
    };
    ///////////////
    ReplaceFormComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    ReplaceFormComponent.prototype.onSubmit = function () {
    };
    //
    ReplaceFormComponent.prototype.clone = function () {
        var cloneObj = new (this.constructor());
        for (var attribut in this) {
            if (typeof this[attribut] === 'object') {
                cloneObj[attribut] = this.clone();
            }
            else {
                cloneObj[attribut] = this[attribut];
            }
        }
        return cloneObj;
    };
    ReplaceFormComponent.prototype.xuatMauBienBan = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        var inv = Object.assign({}, this.oldForm);
        inv.doc_relate_date = this.frmData.doc_relate_date;
        inv.doc_relate_symbol = this.frmData.doc_relate_symbol;
        inv.destroy_reason = this.frmData.destroy_reason;
        inv.adjustment_type = '1';
        inv.auto_value_price = inv.auto_value_price === null ? false : inv.auto_value_price;
        // inv.invoice_products =this.oldForm.invoice_products;
        // this.dataSource.items().forEach(item => {
        //   if (item.product_name)
        //     inv.invoice_products.push(item);
        // });
        inv.invoice_files = [];
        this.vatService.xuatMauBienBanThuHoi(inv).subscribe(function (rs) {
            if (rs.status === 'success') {
                var file = rs.data.invoice;
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
        });
        // if (!this.frmData.doc_relate_symbol) {
        //   Library.notify(this._translate.CONTROLL.LABEL.doc_relate_symbol +" "+this._translate.VALIDATION.required, 'error');
        // } else if (!this.frmData.doc_relate_date) {
        //   Library.notify(this._translate.CONTROLL.LABEL.doc_relate_date +" "+this._translate.VALIDATION.required, 'error');
        // } else if (!this.frmData.destroy_reason) {
        //   Library.notify(this._translate.CONTROLL.LABEL.destroy_reason +" "+this._translate.VALIDATION.required, 'error');
        // } else {
        //   const initialState = {
        //     oldForm: this.oldForm,
        //     frmData: this.frmData,
        //     _objTemplateSelect: this._objTemplateSelect,
        //     fileData: this.fileData,
        //     onSave: (data) => {
        //       console.log(data);
        //       this.frmData.id = data.id;
        //       this.frmData.invoice_date = data.invoice_date;
        //       this.frmData.invoice_number = data.invoice_number;
        //     }
        //   };
        //   this.bsModalRef = this.modalService.show(ReportCancelInvComponent, {
        //     backdrop: 'static',
        //     keyboard: false,
        //     class: 'modal-lg full-modal',
        //     initialState
        //   });
        // }
    };
    ReplaceFormComponent.prototype.showModalHdck = function () {
        var _this = this;
        var initialState = {
            invoiceNumberOrigin: this.oldForm.invoice_number,
            templateCode: this.oldForm.template_code,
            invoiceDateOrigin: this.oldForm.invoice_date,
            onSave: function (data) {
                _this.frmData.id = data.id;
                _this.frmData.invoice_date = data.invoice_date;
                _this.frmData.invoice_number = data.invoice_number;
                _this.frmData.batch_id = data.batch_id;
            }
        };
        this.bsModalRef = this.modalService.show(_modules_handle_invoice_student_components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_11__["ChooseHdckComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-lg full-modal',
            initialState: initialState
        });
    };
    ReplaceFormComponent.prototype.capNhatDmKhachHang = function () {
        var _this = this;
        this.customerCurent.tax_code = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.buyer_tax_code);
        this.customerCurent.name = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.customer_name);
        this.customerCurent.code = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.customer_code);
        this.customerCurent.contact_person_name = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.buyer_name);
        this.customerCurent.contact_mobile = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.buyer_mobile);
        this.customerCurent.business_address = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.buyer_address);
        this.customerCurent.email = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.buyer_email);
        this.customerCurent.bank_name = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.bank_name);
        this.customerCurent.bank_account_number = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(this.frmData.bank_account_number);
        var data = { customer: this.customerCurent };
        this.customersService.edit(data, this.customerCurent.id).subscribe(function (response) {
            if (response.status === 'success') {
                _this.showPopup = false;
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(response.message, 'error');
            }
        }, function (err) {
        }, function () {
        });
    };
    ReplaceFormComponent.prototype.huy = function () {
        this.showPopup = false;
    };
    ReplaceFormComponent.prototype.renderDataEmail = function ($event) {
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
            this.frmData.buyer_email = emailToString.replace(/,/g, ';');
        }
        else {
            this.frmData.buyer_email = null;
        }
        this.formEvent.emit(this.frmData);
    };
    ReplaceFormComponent.prototype.changeTemplateInvoice = function (strDate) {
        var _this = this;
        if (this.isTT78) {
            var year_1 = "";
            if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(strDate) != "")
                year_1 = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(strDate).substring(4, 2);
            else {
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                year_1 = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(invoiceDate).substring(4, 2);
            }
            var templates = this.select.templatesTT78;
            this.select.templatesTT78 = [];
            if (templates && templates.length > 0) {
                templates.forEach(function (item) {
                    if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(item.name) != "")
                        item.name = item.name.replace(item.name.substring(4, 2), year_1);
                    // for (const key in item) {
                    //   if (item.hasOwnProperty(key)) {
                    //     const value = item[key];
                    //     this._oTemplateTT78[key] = value;
                    //   }
                    // }
                    if (item.value === _this.frmData.template_id) {
                        _this.onTemplateTT78TypeChange.emit(item);
                        //  item.invoice_series = item.invoice_series.replace(item.invoice_series.substring(3, 1), year);
                        // this.frmData.invoice_series = item.invoice_series;
                        // this.frmData.template_code = item.template_code;
                    }
                    _this.select.templatesTT78.push(item);
                });
            }
        }
    };
    ReplaceFormComponent.prototype.disableTemplateInput = function () {
        if (this.frmData.invoice_number) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"]),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "listDxForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxFormComponent"])
    ], ReplaceFormComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "oldForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "invoice_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "fileData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onFormChange'),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "formEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('adjustmentObjectChange'),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "adjustmentObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTypeChange'),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "onTemplateTypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onRedueFeeChange'),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "onRedueFeeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onTemplateTT78TypeChange'),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "onTemplateTT78TypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "infoDangKy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReplaceFormComponent.prototype, "isTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceFormComponent.prototype, "_oTemplateTT78", void 0);
    ReplaceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-replace-form',
            template: __webpack_require__(/*! ./replace-form.component.html */ "./src/app/modules/handle-invoice-student/components/replace/replace-form/replace-form.component.html"),
            styles: [__webpack_require__(/*! ./replace-form.component.scss */ "./src/app/modules/handle-invoice-student/components/replace/replace-form/replace-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_12__["CustomersService"]])
    ], ReplaceFormComponent);
    return ReplaceFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Phần không tự tính giá trị, nhập mẫu bảng kê -->\r\n<div class=\"row support-invoice\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"pull-right\">\r\n      <!-- <dx-check-box *ngIf=\"configs.system_parameter.view_sale_by_phone\" id=\"auto-input\" text=\"{{ _translate.CONTROLL.LABEL.sale_by_phone }}\"\r\n                    [(value)]=\"frmData.sale_by_phone\"></dx-check-box> -->\r\n      <dx-check-box id=\"auto-input\" text=\"{{ _translate.CONTROLL.LABEL.no_calculation }}\" [(value)]=\"frmData.auto_value\"\r\n        (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      <dx-check-box *ngIf=\"isHdGTGT\" id=\"auto-input\" text=\"{{ _translate.CONTROLL.LABEL.auto_value_price }}\"\r\n        [(value)]=\"frmData.auto_value_price\" (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      <!-- <a href=\"javascript:void(0)\" (click)=\"layMauBangKe()\" class=\"support-link mgr-15\">\r\n      <img src=\"assets/img/icons/TaiMauBangKe.png\"><span>{{ _translate.CONTROLL.BUTTON.get_the_sample_file }}</span>\r\n    </a>\r\n    <a href=\"javascript:void(0)\" (click)=\"napDuLieuTuBangKe()\" [class.disabled-link]=\"ttDaXuatHoaDon\"\r\n      class=\"support-link\">\r\n      <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx\" (change)=\"onFileBangKeChange($event)\" multiple=\"false\"\r\n        style=\"display: none;\" />\r\n      <img src=\"assets/img/icons/NapDuLieuBangKe.png\"><span>{{ _translate.CONTROLL.BUTTON.import_data }}</span>\r\n    </a> -->\r\n      <dx-menu [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\" submenuDirection=\"auto\"\r\n        (onItemClick)=\"itemExtrasClick($event)\" cssClass='button-dropdown-extend'>\r\n      </dx-menu>\r\n      <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx\" (change)=\"onFileBangKeChange($event)\" multiple=\"false\"\r\n        style=\"display: none;\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"350\" [height]=\"175\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n  [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p style=\"margin-bottom: 35px;\">{{ _translate.CONFIRM.import_type }}</p>\r\n    <div class=\"pull-right\">\r\n      <dx-button (click)=\"thayTheToanBo()\" text=\"{{ _translate.CONTROLL.BUTTON.replace_all }}\" type=\"default\">\r\n      </dx-button>\r\n      <dx-button (click)=\"themTiep()\" text=\"{{ _translate.CONTROLL.BUTTON.add_more }}\" type=\"default\"></dx-button>\r\n      <dx-button (click)=\"huy()\" text=\"{{ _translate.CONTROLL.BUTTON.cancel }}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</dx-popup>\r\n<!-- <button type=\"button\" (click)=\"aa()\">aaa</button> -->\r\n\r\n<!-- phần table hiển thị -->\r\n<div class=\"row invoice-table\">\r\n  <div class=\"col-md-12\">\r\n    <dx-data-grid id=\"gridInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n      [allowColumnResizing]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n      (onKeyDown)=\"onGripKeyDown($event)\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n      (onEditorPrepared)=\"onEditorPrepared($event)\" (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n      (onCellClick)=\"onCellClick($event)\" (onRowPrepared)=\"onRowPrepared($event)\">\r\n      <!-- [wordWrapEnabled]=\"true\" -->\r\n\r\n      <dxo-editing mode=\"cell\" [allowUpdating]=\"true\"></dxo-editing>\r\n      <!-- <dxo-selection showCheckBoxesMode=\"none\" mode=\"single\"></dxo-selection> -->\r\n      <dxo-sorting mode=\"false\"></dxo-sorting>\r\n      <dxi-column cellTemplate=\"deleteColumn\" [fixed]=\"true\" fixedPosition=\"left\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.delete }}\" minWidth=\"{{ _translate.GRID_WIDTH.delete_column }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"view_order\" [fixed]=\"true\" fixedPosition=\"left\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.view_order }}\" minWidth=\"{{ _translate.GRID_WIDTH.stt }}\"\r\n        alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"product_code\" [editorOptions]=\"{showClearButton: true}\" [fixed]=\"true\" fixedPosition=\"left\"\r\n        caption=\"{{ _translate.GRID.REVENUE.revenue_code }}\" minWidth=\"{{ _translate.GRID_WIDTH.ma_hang }}\"\r\n        alignment=\"center\">\r\n        <dxo-lookup [dataSource]=\"select.productsView\" displayExpr=\"mhvth\" valueExpr=\"code\" itemTemplate=\"item\">\r\n        </dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column dataField=\"product_name\" [fixed]=\"true\" fixedPosition=\"left\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.ten_hang }}\" caption=\"{{ _translate.GRID.REVENUE.revenue_name }}\"\r\n        alignment=\"left\">\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"unit_code\" [editorOptions]=\"lookupColumnOptions\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.unit_code }}\" width=\"{{ _translate.GRID_WIDTH.unit_code }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.unit_code }}\" alignment=\"center\">\r\n        <dxo-lookup [dataSource]=\"select.unit_codes\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"school_fee_month\" caption=\"{{ _translate.GRID.INVOICE_DETAILS.school_fee_month }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.thang_thu_hp }}\" [editorOptions]=\"{disabled: true}\" alignment=\"center\"\r\n        [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Học kỳ -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_semester\" dataField=\"semester\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.hoc_ky }}\" caption=\"{{  _translate.GRID.INVOICE_DETAILS.semester }}\"\r\n        alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\"></dxi-column>\r\n      <!-- Diễn giải -->\r\n      <dxi-column *ngIf=\"configs.system_parameter.is_promotion\" cellTemplate=\"dien_giai\"\r\n        caption=\"{{ _translate.GRID.INVOICE_DETAILS.explain }}\" minWidth=\"{{ _translate.GRID_WIDTH.dien_giai }}\"\r\n        [allowEditing]=\"false\" alignment=\"center\"></dxi-column>\r\n      <dxi-column dataField=\"quantity\" headerCellTemplate=\"quantityHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.so_luong }}\" [editorOptions]=\"{ format: formatter.so_luong }\"\r\n        [format]=\"formatter.so_luong\" dataType=\"number\" alignment=\"center\"></dxi-column>\r\n\r\n      <dxi-column dataField=\"price\" headerCellTemplate=\"priceHeader\" minWidth=\"{{ _translate.GRID_WIDTH.don_gia }}\"\r\n        [editorOptions]=\"{ format: formatter.don_gia }\" [format]=\"formatter.don_gia\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n\r\n      <dxi-column dataField=\"amount\" headerCellTemplate=\"amountHeader\" minWidth=\"{{ _translate.GRID_WIDTH.thanh_tien }}\"\r\n        [editorOptions]=\"{ format: formatter.thanh_tien }\" [format]=\"formatter.thanh_tien\" dataType=\"number\"\r\n        alignment=\"right\">\r\n      </dxi-column>\r\n\r\n      <dxi-column *ngIf=\"isHdGTGT\" dataField=\"vat\" [editorOptions]=\"{showClearButton: true}\"\r\n        headerCellTemplate=\"vatHeader\" width=\"{{ _translate.GRID_WIDTH.vat }}\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.vat }}\" alignment=\"center\">\r\n        <dxo-lookup [dataSource]=\"select.vats\" displayExpr=\"name\" valueExpr=\"code\"></dxo-lookup>\r\n      </dxi-column>\r\n      <dxi-column *ngIf=\"isHdGTGT\" dataField=\"amount_vat\" headerCellTemplate=\"amountVatHeader\"\r\n        width=\"{{ _translate.GRID_WIDTH.tien_thue }}\" minWidth=\"{{ _translate.GRID_WIDTH.tien_thue }}\"\r\n        [editorOptions]=\"{ format: formatter.tien_thue }\" [format]=\"formatter.tien_thue\" dataType=\"number\"\r\n        alignment=\"right\"></dxi-column>\r\n\r\n      <dxi-column dataField=\"amount_after_vat\" headerCellTemplate=\"amountAfterVatHeader\"\r\n        minWidth=\"{{ _translate.GRID_WIDTH.tong_tien_sau_thue }}\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n        [format]=\"formatter.tong_tien\" dataType=\"number\" alignment=\"right\"></dxi-column>\r\n      <div *dxTemplate=\"let d of 'quantityHeader'\">\r\n        <p (click)=\"configDecimal('so_luong')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.quantity }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'priceHeader'\">\r\n        <p (click)=\"configDecimal('don_gia')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.price }}<img\r\n            src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let d of 'amountHeader'\">\r\n        <p (click)=\"configDecimal('thanh_tien')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.amount }}\r\n          <img src=\"assets/img/icons/SoThapPhan.png\">\r\n        </p>\r\n      </div>\r\n\r\n      <div *dxTemplate=\"let d of 'amountAfterVatHeader'\">\r\n        <p (click)=\"configDecimal('tong_tien')\" style=\"cursor: pointer;\">{{ _translate.GRID.INVOICE_DETAILS.total_money\r\n          }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'dien_giai'\">\r\n        <dx-check-box [(value)]=\"d.data.is_promotion\" [disabled]=\"d.data.is_promotion_new\"\r\n          (onValueChanged)=\"_tinhGiaTri()\"></dx-check-box>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'vatHeader'\">\r\n        <p>VAT</p>\r\n      </div>\r\n      <div *dxTemplate=\"let d of 'amountVatHeader'\">\r\n        <p (click)=\"configDecimal('tien_thue')\" style=\"cursor: pointer;\"> {{ _translate.GRID.INVOICE_DETAILS.amount_vat\r\n          }} <img src=\"assets/img/icons/SoThapPhan.png\"></p>\r\n      </div>\r\n\r\n      <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n        <a class=\"delete-row\" href=\"javascript:void(0)\" (click)=\"deleteRow(d.data)\"><i class=\"fa fa-times\"></i></a>\r\n      </div>\r\n      <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n      <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    </dx-data-grid>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-row i{color:#0E77BB;font-size:18px}.support-invoice{margin-top:20px;margin-bottom:10px}.support-invoice .support-link{padding:6px 15px;border:1px solid #007bff;text-decoration:none}.support-invoice .support-link.mgr-15{margin-right:15px}.support-invoice .support-link img{margin-right:15px;margin-top:-2px}.support-invoice #auto-input{margin-right:75px}.button-dropdown-extend{display:inline-flex}\n"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ReplaceGripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceGripComponent", function() { return ReplaceGripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/data/custom_store */ "./node_modules/devextreme/data/custom_store.js");
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_components_select_month_select_month_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/select-month/select-month.component */ "./src/app/shared/components/select-month/select-month.component.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ReplaceGripComponent = /** @class */ (function () {
    function ReplaceGripComponent(authService, route, router, modalService, vatService, productsService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.vatService = vatService;
        this.productsService = productsService;
        this.contextMenu = [{ text: 'Thêm' }, { text: 'Xóa' }];
        this.select = {};
        this.arrProducts = [];
        this.showPopup = false; // Popup
        this.dataExcelFile = null;
        this.ttDaXuatHoaDon = false;
        this.gripAllowEdit = false;
        this.isHdGTGT = true;
        this.dataExcelFileInfo = null;
        this.selectMonth = false;
        this.extras = [];
        this.gripChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.autoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lookupColumnOptions = {
            acceptCustomValue: true,
            showClearButton: true,
            onCustomItemCreating: function (args) {
                var _this = this;
                //
                //
                var newItem = {};
                newItem.code = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._convertToViKdau(args.text);
                newItem.name = args.text;
                this.select.unit_codes.unshift(newItem);
                setTimeout(function () {
                    _this.dataGrid.instance.columnOption('unit_code', 'lookup', {
                        dataSource: _this.select.unit_codes,
                        displayExpr: 'name',
                        valueExpr: 'code'
                    });
                });
                return newItem;
            }.bind(this)
        };
        this._translate = this.authService.getTranslate();
        this.extras = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.import_from_excel,
                items: [
                    {
                        id: 'LAY_MAU_BANG_KE',
                        name: this._translate.CONTROLL.BUTTON.get_the_sample_file,
                        icon: this._translate.ICONS.download
                    },
                    {
                        id: 'NAP_DU_LIEU_BANG_KE',
                        name: this._translate.CONTROLL.BUTTON.import_data,
                        icon: this._translate.ICONS.excel
                    }
                ]
            }];
    }
    ReplaceGripComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.oldForm.template_code.indexOf('02GTTT') >= 0 || this.oldForm.template_code == "2") {
            this.isHdGTGT = false;
        }
        this.configs = this.authService.getConfigs();
        var moth = moment__WEBPACK_IMPORTED_MODULE_10__();
        var currentUser = this.authService.getCurrentUser();
        this.select.arrayYears = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].listYears(currentUser.account.start_time_study, moth);
        this.fee_months = this.select.arrayYears[1];
        this.routeSub = this.route.data.subscribe(function (data) {
            // put data DM for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.vats = data.init[1].DM_TY_LE_VAT;
            _this.select.select_provisions_on_accounts = data.init[1].DM_DINH_KHOAN;
            _this.select.countrys = data.init[1].DM_QUOC_GIA;
            _this.select.revenue_forms = data.init[1].DM_HINH_THUC_THU;
            // Hàng hóa dịch vụ
            _this.select.products = data.init[2];
            _this.select.products.forEach(function (item) {
                item.mhvth = item.code + ': ' + item.name;
                item.vat = item.vat != null ? item.vat.toString() : null;
            });
            _this.select.productsView = {
                store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_5___default.a({
                    key: 'code',
                    loadMode: 'raw',
                    load: function (loadOptions) {
                        return _this.select.products;
                    },
                    byKey: function (key) {
                        return data.init[2].filter(function (p) { return p.code === key.toString(); });
                    }
                }),
                paginate: true,
                sort: 'name'
            };
        });
        // Event
        this.createUpdateEvent();
    };
    // khởi tạo sự kiện khi update
    ReplaceGripComponent.prototype.createUpdateEvent = function () {
        var _this = this;
        var product = this.invoice_products;
        setTimeout(function () {
            _this.invoice_products.on('updated', function (key, value) {
                var column = Object.keys(value)[0];
                _this.invoice_products.byKey(key).then(function (row) {
                    switch (column) {
                        case 'view_order':
                            _this.view_orderChange();
                            break;
                        case 'product_code':
                            _this.product_codeChange(row);
                            break;
                        case 'unit_code':
                            _this.unit_codeChange(row);
                            break;
                        case 'country_code':
                            _this.country_codeChange(row);
                            break;
                        case 'quantity':
                        case 'price':
                        case 'price_nte':
                        case 'vat':
                        case 'amount':
                        case 'amount_vat':
                        case 'amount_after_vat':
                        case 'amount_discount':
                        case 'discount':
                        case 'amount_without_discount':
                        case 'other_tax':
                        case 'other_charge':
                            _this._tinhGiaTri();
                            break;
                        default:
                            break;
                    }
                }, function (error) {
                    alert(error);
                });
            });
        }, 100);
    };
    ReplaceGripComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    ReplaceGripComponent.prototype.onCellClick = function (e) {
        var _this = this;
        if (e.column.dataField === 'school_fee_month') {
            this.selectMonth = false;
            var product = this.select.products.filter(function (p) { return p.code === e.row.data.product_code; })[0];
            if (product) {
                this.productsService.getProduct(product.id).subscribe(function (rs) {
                    if (rs.status == "success") {
                        var productServ = rs.data.product;
                        if (productServ) {
                            if (productServ.form_revenue === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].hinhthucthu.Thang) {
                                var initialState = {
                                    fee_months: _this.fee_months,
                                    month_year: e.row.data.school_fee_month,
                                    product_code: e.row.data.product_code
                                };
                                _this.bsModalRef = _this.modalService.show(_shared_components_select_month_select_month_component__WEBPACK_IMPORTED_MODULE_11__["SelectMonthComponent"], {
                                    class: 'second child-modal',
                                    initialState: initialState,
                                    backdrop: 'static',
                                    keyboard: false,
                                });
                                var index_1 = 0;
                                _this.modalService.onHide.subscribe(function () {
                                    if (!_this.selectMonth) {
                                        index_1++;
                                        var tr = index_1;
                                        if (index_1 == 1) {
                                            if (e.row.data.product_code == _this.bsModalRef.content.product_code) {
                                                if (_this.bsModalRef.content.successSaveItem) {
                                                    e.row.data.school_fee_month = _this.bsModalRef.content.successSaveData;
                                                }
                                                else {
                                                }
                                                var _lstMonth = [];
                                                if (e.row.data.school_fee_month)
                                                    _lstMonth = e.row.data.school_fee_month.split(';').filter(function (p) { return p !== ''; });
                                                if (_lstMonth && _lstMonth.length > 0) {
                                                    e.row.data.quantity = _lstMonth.length;
                                                }
                                                else {
                                                    e.row.data.quantity = null;
                                                }
                                                if (e.row.data.quantity) {
                                                    e.row.data.amount = e.row.data.price ? parseFloat(e.row.data.price) * parseFloat(e.row.data.quantity) : 0;
                                                }
                                                else {
                                                    e.row.data.amount = e.row.data.price ? parseFloat(e.row.data.price) : 0;
                                                }
                                                if (_this.isHdGTGT) {
                                                    e.row.data.amount_vat = (e.row.data.vat >= 0) ? _this.caculatorAmountVat(e.row.data.amount, e.row.data.vat) : null;
                                                }
                                                else {
                                                    e.row.data.amount_vat = null;
                                                }
                                                e.row.data.amount_after_vat = e.row.data.amount + (e.row.data.amount_vat != null ? e.row.data.amount_vat : 0);
                                                _this.invoice_products.update(e.row.data.id, e.row.data);
                                                _this._tinhGiaTri();
                                                return true;
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
                    }
                });
            }
        }
    };
    ReplaceGripComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            e.rowElement.style.whiteSpace = 'pre-wrap';
            var eles = e.rowElement.getElementsByTagName('td');
            if (!e.isEditing) {
                eles[2].innerHTML = e.data.product_code;
            }
            if (e.data.error) {
                var ele = eles[eles.length - 1];
                ele.style.background = 'red url(\'assets/img/icons/fa-remove.png\') no-repeat 2% center';
                ele.title = e.data.error;
            }
        }
    };
    ReplaceGripComponent.prototype.onEditorPreparing = function (e) {
        var _this = this;
        if (e.parentType === 'dataRow') {
            if (e.dataField === 'product_code') {
                e.editorOptions.onOpened = function (arg) {
                    var popupInstance = arg.component._popup;
                    popupInstance.option('width', 400);
                    popupInstance.option('minWidth', 400);
                    // popupInstance.off("optionChanged", this.optionChangedHandler);
                    // popupInstance.on("optionChanged", this.optionChangedHandler);
                };
            }
            if (e.dataField === 'product_name') {
                e.editorName = 'dxTextArea';
            }
            e.editorOptions.onFocusOut = function (args) {
                if (e.dataField === 'unit_code') {
                    var _obj = _this.select.unit_codes.filter(function (p) { return p.code === e.row.data.unit_code; })[0];
                    if (_obj) {
                        e.row.data.unit_name = _obj.name;
                    }
                    else {
                        e.row.data.unit_name = '';
                    }
                }
                if (e.dataField === 'country_code') {
                    var _obj = _this.select.countrys.filter(function (p) { return p.code === e.row.data.country_code; })[0];
                    if (_obj) {
                        e.row.data.country_name = _obj.name;
                    }
                    else {
                        e.row.data.country_name = '';
                    }
                }
                _this.invoice_products.update(e.row.data.id, e.row.data);
            };
        }
    };
    ReplaceGripComponent.prototype.onEditorPrepared = function (e) {
        if ((e.dataField === 'amount_without_discount' || e.dataField === 'discount' || e.dataField === 'amount_discount' || e.dataField === 'quantity' || e.dataField === 'price' || e.dataField === 'amount' || e.dataField === 'amount_vat' || e.dataField === 'amount_after_vat') && e.parentType === 'dataRow') {
            e.editorElement.childNodes[1].firstChild.onwheel = function (evt) {
                e.component.cancelEditData();
            };
            e.editorElement.childNodes[1].firstChild.addEventListener('select', function () {
                this.selectionStart = this.selectionEnd;
            }, false);
        }
    };
    ReplaceGripComponent.prototype.onContextMenuPreparing = function (e) {
        var _this = this;
        if (e.row.rowType === 'data') {
            e.items = [{
                    text: 'Thêm hàng',
                    onItemClick: function () {
                        _this.addRow();
                    }
                },
                {
                    text: 'Xóa hàng',
                    onItemClick: function () {
                        _this.deleteRow(e.row.data);
                    }
                }];
        }
    };
    ReplaceGripComponent.prototype.addRow = function () {
        var len, order;
        if (this.dataSource.items().length >= 1) {
            len = this.dataSource.items().length;
            order = this.dataSource.items()[len - 1].order + 1;
        }
        else {
            order = 1;
        }
        var data = this.frmData.add_invoice_products_data(order, order);
        this.invoice_products.insert(data);
        // this.dataSource.store().insert(data);
        this.dataSource.reload();
    };
    ReplaceGripComponent.prototype.view_orderChange = function () {
        var _this = this;
        if (!this.isTT78) {
            var _index_1 = 0;
            this.dataSource.items().forEach(function (item) {
                if (item.view_order && _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) != _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    item.view_order = ++_index_1;
                }
                if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    if (!item.is_money_service) {
                        item.view_order = ++_index_1;
                    }
                    else {
                        item.view_order = null;
                    }
                }
            });
        }
        else {
            var _index_2 = 0;
            this.dataSource.items().forEach(function (item) {
                if (item.view_order && _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) != _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    item.view_order = ++_index_2;
                }
                if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonNhaHangKhachSan) {
                    if (!item.is_money_service) {
                        item.view_order = ++_index_2;
                    }
                    else {
                        item.view_order = null;
                    }
                }
            });
        }
    };
    // Thay đổi cột mã hàng
    ReplaceGripComponent.prototype.product_codeChange = function (row) {
        var _this = this;
        this.select.products.some(function (item) {
            if (item.code === row.product_code) {
                _this.productsService.getProduct(item.id).subscribe(function (rs) {
                    if (rs.status == "success") {
                        var product_1 = rs.data.product;
                        if (product_1) {
                            var isUpdate = true;
                            var _indexNumber = 0;
                            if (isUpdate) {
                                if (product_1.form_revenue == _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].hinhthucthu.Thang) {
                                    _this.selectMonth = true;
                                    var initialState = {
                                        fee_months: _this.fee_months,
                                        product_code: row.product_code
                                    };
                                    _this.bsModalRef = _this.modalService.show(_shared_components_select_month_select_month_component__WEBPACK_IMPORTED_MODULE_11__["SelectMonthComponent"], {
                                        class: 'second child-modal',
                                        initialState: initialState,
                                        backdrop: 'static',
                                        keyboard: false,
                                    });
                                    var index_2 = 0;
                                    _this.modalService.onHide.subscribe(function () {
                                        if (_this.selectMonth) {
                                            index_2++;
                                            if (index_2 == 1) {
                                                if (_this.bsModalRef.content.successSaveItem) {
                                                    if (row.product_code == _this.bsModalRef.content.product_code) {
                                                        var _lstMonth = _this.bsModalRef.content.successSaveData;
                                                        _lstMonth = _lstMonth.split(';').filter(function (p) { return p != ""; });
                                                        row.school_fee_month = _this.bsModalRef.content.successSaveData;
                                                        row.product_name = product_1.name;
                                                        if (_this.select.revenue_forms && _this.select.revenue_forms.length > 0) {
                                                            var _obj = _this.select.revenue_forms.filter(function (p) { return p.code === product_1.form_revenue; })[0];
                                                            if (_obj) {
                                                                row.semester = _obj.name;
                                                            }
                                                        }
                                                        row.unit_code = _this.checkUnitCode(product_1.unit_code);
                                                        if (row.unit_code == "NAM" || row.unit_code == "NAMHOC" || row.unit_code == "KY")
                                                            row.quantity = 1;
                                                        else if (row.unit_code == "THANG")
                                                            row.quantity = _lstMonth.length;
                                                        else
                                                            row.quantity = null;
                                                        row.price = product_1.price ? parseFloat(product_1.price) : product_1.price;
                                                        row.price = row.price ? parseFloat(row.price) - (row.price * parseFloat(_this.student_reduce_rate_code)) / 100 : row.price;
                                                        row.amount = row.price ? parseFloat(row.price) * parseFloat(row.quantity) : row.price;
                                                        if (_this.isHdGTGT) {
                                                            row.vat = product_1.vat != null ? product_1.vat.toString() : null;
                                                        }
                                                        else {
                                                            row.vat = null;
                                                        }
                                                        if (_this.isHdGTGT) {
                                                            row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                                                        }
                                                        else {
                                                            row.amount_vat = null;
                                                        }
                                                        row.group_code = product_1.group_code;
                                                        row.amount_after_vat = row.amount + (row.amount_vat != null ? row.amount_vat : 0);
                                                        _this.invoice_products.update(row.id, row);
                                                        _this._tinhGiaTri();
                                                        var prot = _this.arrProducts;
                                                        if (!_this.arrProducts || (_this.arrProducts && _this.arrProducts.length == 0)) {
                                                            var IProduct = {
                                                                code: product_1.code,
                                                                price: product_1.price
                                                            };
                                                            _this.arrProducts.push(IProduct);
                                                        }
                                                        else {
                                                            var product_2 = _this.arrProducts.filter(function (p) { return p.code === product_2.code; })[0];
                                                            if (!product_2) {
                                                                var IProduct = {
                                                                    code: product_2.code,
                                                                    price: product_2.price
                                                                };
                                                                _this.arrProducts.push(IProduct);
                                                            }
                                                        }
                                                        return true;
                                                    }
                                                }
                                                else {
                                                    if (row.product_code == _this.bsModalRef.content.product_code) {
                                                        row.school_fee_month = "";
                                                        row.product_name = product_1.name;
                                                        row.group_code = product_1.group_code;
                                                        row.unit_code = _this.checkUnitCode(product_1.unit_code);
                                                        row.quantity = null;
                                                        if (_this.select.revenue_forms && _this.select.revenue_forms.length > 0) {
                                                            var _obj = _this.select.revenue_forms.filter(function (p) { return p.code === product_1.form_revenue; })[0];
                                                            if (_obj) {
                                                                row.semester = _obj.name;
                                                            }
                                                        }
                                                        row.price = product_1.price ? parseFloat(product_1.price) : product_1.price;
                                                        row.price = row.price ? parseFloat(row.price) - (row.price * parseFloat(_this.student_reduce_rate_code)) / 100 : row.price;
                                                        row.amount = row.price ? parseFloat(product_1.price) : row.price;
                                                        if (_this.isHdGTGT) {
                                                            row.vat = product_1.vat != null ? product_1.vat.toString() : null;
                                                        }
                                                        else {
                                                            row.vat = null;
                                                        }
                                                        if (_this.isHdGTGT) {
                                                            row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                                                        }
                                                        else {
                                                            row.amount_vat = null;
                                                        }
                                                        row.amount_after_vat = row.amount + (row.amount_vat != null ? row.amount_vat : 0);
                                                        var test = _this.invoice_products;
                                                        _this.invoice_products.update(row.id, row);
                                                        _this._tinhGiaTri();
                                                        if (!_this.arrProducts || (_this.arrProducts && _this.arrProducts.length == 0)) {
                                                            var IProduct = {
                                                                code: product_1.code,
                                                                price: product_1.price
                                                            };
                                                            _this.arrProducts.push(IProduct);
                                                        }
                                                        else {
                                                            var product_3 = _this.arrProducts.filter(function (p) { return p.code === product_3.code; })[0];
                                                            if (!product_3) {
                                                                var IProduct = {
                                                                    code: product_3.code,
                                                                    price: product_3.price
                                                                };
                                                                _this.arrProducts.push(IProduct);
                                                            }
                                                        }
                                                        return true;
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                                else {
                                    row.school_fee_month = '';
                                    var _oHinhThucThu = _this.select.revenue_forms.filter(function (p) { return p.code == product_1.form_revenue; })[0];
                                    if (_oHinhThucThu) {
                                        if (_oHinhThucThu.note) {
                                            var mapObj_1 = {
                                                T: _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.fee_months.code).split('-')[0],
                                                S: _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this.fee_months.code).split('-')[1],
                                            };
                                            row.school_fee_month = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_oHinhThucThu.note).replace(/T|S/gi, function (matched) {
                                                return mapObj_1[matched];
                                            });
                                        }
                                    }
                                    var _lstMonth = null;
                                    if (row.school_fee_month !== '') {
                                        _lstMonth = row.school_fee_month.split(';').filter(function (p) { return p !== ''; });
                                    }
                                    if (_lstMonth) {
                                        row.quantity = _lstMonth.length;
                                    }
                                    else {
                                        row.quantity = null;
                                    }
                                    row.product_name = product_1.name;
                                    row.group_code = product_1.group_code;
                                    if (_this.select.revenue_forms && _this.select.revenue_forms.length > 0) {
                                        var _obj = _this.select.revenue_forms.filter(function (p) { return p.code === product_1.form_revenue; })[0];
                                        if (_obj) {
                                            row.semester = _obj.name;
                                        }
                                    }
                                    row.unit_code = _this.checkUnitCode(product_1.unit_code);
                                    if (row.unit_code == "NAM" || row.unit_code == "NAMHOC" || row.unit_code == "KY")
                                        row.quantity = 1;
                                    else if (row.unit_code == "THANG")
                                        row.quantity = _lstMonth.length;
                                    else
                                        row.quantity = null;
                                    row.price = product_1.price ? parseFloat(product_1.price) : product_1.price;
                                    var t = _this.student_reduce_rate_code;
                                    row.price = row.price ? parseFloat(row.price) - (row.price * parseFloat(_this.student_reduce_rate_code)) / 100 : row.price;
                                    if (row.quantity) {
                                        row.amount = row.price ? parseFloat(row.price) * parseFloat(row.quantity) : row.price;
                                    }
                                    else {
                                        row.amount = row.price ? parseFloat(row.price) : row.price;
                                    }
                                    if (_this.isHdGTGT) {
                                        row.vat = product_1.vat != null ? product_1.vat.toString() : null;
                                    }
                                    else {
                                        row.vat = null;
                                    }
                                    if (_this.isHdGTGT) {
                                        row.amount_vat = (row.vat >= 0) ? _this.caculatorAmountVat(row.amount, row.vat) : null;
                                    }
                                    else {
                                        row.amount_vat = null;
                                    }
                                    row.amount_after_vat = row.amount + (row.amount_vat != null ? row.amount_vat : 0);
                                    _this.invoice_products.update(row.id, row);
                                    _this._tinhGiaTri();
                                    if (!_this.arrProducts || (_this.arrProducts && _this.arrProducts.length == 0)) {
                                        var IProduct = {
                                            code: product_1.code,
                                            price: product_1.price
                                        };
                                        _this.arrProducts.push(IProduct);
                                    }
                                    else {
                                        var product_4 = _this.arrProducts.filter(function (p) { return p.code === product_4.code; })[0];
                                        if (!product_4) {
                                            var IProduct = {
                                                code: product_4.code,
                                                price: product_4.price
                                            };
                                            _this.arrProducts.push(IProduct);
                                        }
                                    }
                                    return true;
                                }
                            }
                            else {
                                return false;
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
                    }
                });
            }
        });
    };
    ReplaceGripComponent.prototype.unit_codeChange = function (row) {
        var _obj = this.select.unit_codes.filter(function (p) { return p.code === row.unit_code; })[0];
        if (_obj) {
            row.unit_name = _obj.name;
            this.invoice_products.update(row.id, row);
        }
        else {
            row.unit_name = '';
            this.invoice_products.update(row.id, row);
        }
    };
    ReplaceGripComponent.prototype.country_codeChange = function (row) {
        var _obj = this.select.countrys.filter(function (p) { return p.code === row.country_code; })[0];
        if (_obj) {
            row.country_name = _obj.name;
            this.invoice_products.update(row.id, row);
        }
        else {
            row.country_name = '';
            this.invoice_products.update(row.id, row);
        }
    };
    ReplaceGripComponent.prototype.checkUnitCode = function (unitCode) {
        var items = this.select.unit_codes;
        for (var i = 0; i < items.length; i++) {
            if (items[i].code === unitCode) {
                return unitCode;
            }
        }
        return null;
    };
    ReplaceGripComponent.prototype._tinhGiaTri = function () {
        var _this = this;
        if (!this.isTT78) {
            setTimeout(function () {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, _this.select, _this._objTemplateSelect, _this.configs.system_parameter);
                if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBay
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayTongHop
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayChung
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayHoanVe
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonXangDau) {
                    _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyTicket(_this.frmData, _this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._objTemplateSelect.template_type));
                }
            }, 100);
        }
        else {
            setTimeout(function () {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyItem(_this.dataSource, _this.invoice_products, _this.frmData, _this.formatter, !_this.frmData.auto_value, _this.frmData.auto_value_price, _this.select, _this._oTemplateTT78, _this.configs.system_parameter);
                if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBay
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayTongHop
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayChung
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayHoanVe
                    || _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonXangDau) {
                    _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"]._changeMoneyTicket(_this.frmData, _this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(_this._oTemplateTT78.template_type));
                }
            }, 100);
        }
    };
    ReplaceGripComponent.prototype.caculatorAmountVat = function (amount, vat) {
        var temp = amount / 100 * vat;
        return this.roundNumber(temp, 5);
    };
    ReplaceGripComponent.prototype.roundNumber = function (number, n) {
        var p = Math.pow(10, n);
        return Math.round(number * p) / p;
    };
    // Bật modal thay đổi số thập phân
    ReplaceGripComponent.prototype.configDecimal = function (n) {
        var _this = this;
        var initialState = {
            column: n,
            formatter: this.formatter,
            showDonGiaNte: this.configs.system_parameter.view_price_nte
        };
        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_8__["ConfigDecimalComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                _this.formatter[data.column] = data.character;
                _this._tinhGiaTri();
            }
        });
    };
    // Xóa hàng
    ReplaceGripComponent.prototype.deleteRow = function (item) {
        var _this = this;
        // setTimeout(() => {
        var check = confirm('Bạn có đồng ý xóa không?');
        if (check && !this.ttDaXuatHoaDon) {
            setTimeout(function () {
                _this.invoice_products.remove(item.id);
                // this.dataSource.store().remove(item.id);
                _this.dataSource.reload();
                _this._tinhGiaTri();
            }, 100);
        }
        // }, 200);
    };
    ReplaceGripComponent.prototype.updateSomeTotalInputNotCheckCktm = function () {
        var _this = this;
        setTimeout(function () {
            _this.gripChange.emit([_this.dataSource, _this.invoice_products, _this.formatter]);
        }, 200);
    };
    // Lấy mẫu bảng kê
    ReplaceGripComponent.prototype.layMauBangKe = function () {
        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        this.vatService.layFileMau({
            customer_name: this.frmData.customer_name,
            buyer_tax_code: this.frmData.buyer_tax_code,
            buyer_address: this.frmData.buyer_address,
            buyer_name: this.frmData.buyer_name,
            invoice_type_name: ""
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                var file = rs.data.invoice;
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
        });
    };
    // Nạp dữ liệu bảng kê
    ReplaceGripComponent.prototype.napDuLieuTuBangKe = function () {
        document.getElementById('file-bang-ke').click();
    };
    ReplaceGripComponent.prototype.onFileBangKeChange = function (evt) {
        var _this = this;
        var target = (evt.target);
        if (target.files.length !== 1) {
            throw new Error('Không thể chọn nhiều file');
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_4__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].sheet_to_json(ws, { header: 'A', range: 10 }));
            var account = (xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].sheet_to_json(ws, { header: 'A', range: 0 }));
            var fileBangKe = document.getElementById('file-bang-ke');
            fileBangKe.value = '';
            _this.dataExcelFile = data;
            _this.dataExcelFileInfo = account.slice(0, 4);
            _this.showPopup = true;
        };
        reader.readAsBinaryString(target.files[0]);
    };
    ReplaceGripComponent.prototype.thayTheToanBo = function () {
        this.fillDataFromFile(this.dataExcelFile, this.dataExcelFileInfo, 'thaythe');
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ReplaceGripComponent.prototype.themTiep = function () {
        this.fillDataFromFile(this.dataExcelFile, this.dataExcelFileInfo, 'themtiep');
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ReplaceGripComponent.prototype.huy = function () {
        this.showPopup = false;
        this.dataExcelFile = null;
    };
    ReplaceGripComponent.prototype.fillDataFromFile = function (data, info, status) {
        var _this = this;
        if (info.length === 4) {
            var customer_name = info[0].A.split(':');
            if (customer_name.length > 1) {
                this.frmData.customer_name = customer_name[1].trim();
            }
            ////
            var buyer_tax_code = info[1].A.split(':');
            if (buyer_tax_code.length > 1) {
                this.frmData.buyer_tax_code = buyer_tax_code[1].trim();
            }
            ////
            var buyer_name = info[2].A.split(':');
            if (buyer_name.length > 1) {
                this.frmData.buyer_name = buyer_name[1].trim();
            }
            ////
            var buyer_address = info[3].A.split(':');
            if (buyer_address.length > 1) {
                this.frmData.buyer_address = buyer_address[1].trim();
            }
        }
        if (status === 'thaythe') {
            this.dataSource.items().forEach(function (item) {
                // this.dataSource.store().remove(item.id);
                _this.invoice_products.remove(item.id);
            });
        }
        else {
            this.dataSource.items().forEach(function (item) {
                if (!item.product_code && !item.product_name && !item.quantity && !item.price && !item.amount && !item.amount_vat && !item.amount_after_vat) {
                    // this.dataSource.store().remove(item.id);
                    _this.invoice_products.remove(item.id);
                }
            });
        }
        // let arr = [];
        var j = 10000;
        data.forEach(function (item) {
            // item.A = item.A || "0";
            item.B = item.B || '';
            item.C = item.C || '';
            item.D = item.D || '';
            item.E = item.E || '0';
            item.F = item.F || '0';
            item.G = item.G || '0';
            // item.H = item.H || "0";
            // item.I = item.I || "0";
            var temp = {};
            if (_this.frmData.auto_value) {
                // temp.order = (status === 'thaythe') ? parseInt(item.A) : j;
                temp.id = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].makeid();
                if (item.A) {
                    temp.view_order = parseInt(item.A, 10);
                }
                else {
                    temp.view_order = null;
                }
                temp.product_code = item.B;
                temp.product_name = item.C;
                temp.unit_code = _this.getUnitCodeByUnitName(item.D);
                temp.quantity = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].toNumber(item.E);
                temp.price = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].toNumber(item.F);
                temp.amount = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].toNumber(item.G);
                if (item.H && _this.isHdGTGT) {
                    temp.vat = item.H;
                }
                else {
                    temp.vat = null;
                }
                if (_this.isHdGTGT) {
                    temp.amount_vat = item.I != null ? _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].toNumber(item.I) : null;
                }
                else {
                    temp.amount_vat = null;
                }
                temp.amount_after_vat = temp.amount_vat + temp.amount;
            }
            else {
                temp.id = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].makeid();
                // temp.order = (status === 'thaythe') ? parseInt(item.A) : j;
                if (item.A) {
                    temp.view_order = parseInt(item.A, 10);
                }
                else {
                    temp.view_order = null;
                }
                temp.product_code = item.B;
                temp.product_name = item.C;
                temp.unit_code = _this.getUnitCodeByUnitName(item.D);
                temp.quantity = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].toNumber(item.E);
                temp.price = _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].toNumber(item.F);
                // temp.amount = temp.price * temp.quantity;
                if (item.H && _this.isHdGTGT) {
                    temp.vat = item.H;
                }
                else {
                    temp.vat = null;
                }
                // if (this.isHdGTGT){
                //   temp.amount_vat = (temp.vat > 0) ? temp.vat * temp.amount / 100 : 0;
                // }
                // else
                //   temp.amount_vat = null;
                // temp.amount_after_vat = temp.amount_vat + temp.amount;
            }
            temp.commercial_discount = false;
            setTimeout(function () {
                _this.dataGrid.instance.columnOption('unit_code', 'lookup', {
                    dataSource: _this.select.unit_codes,
                    displayExpr: 'name',
                    valueExpr: 'code'
                });
            });
            // arr.push(temp);
            // this.dataSource.store().insert(temp);
            _this.invoice_products.insert(temp);
            j++;
        });
        this.dataSource.reload();
        this._tinhGiaTri();
    };
    ReplaceGripComponent.prototype.getUnitCodeByUnitName = function (unitName) {
        if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(unitName) !== '') {
            if (this.select.unit_codes && this.select.unit_codes.length > 0) {
                var _obj = this.select.unit_codes.filter(function (p) { return p.name === unitName; })[0];
                if (_obj) {
                    return _obj.code;
                }
                else {
                    var code_1 = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._convertToViKdau(unitName);
                    var oDuplicate = this.select.unit_codes.filter(function (p) { return p.code === code_1; })[0];
                    if (oDuplicate)
                        code_1 = code_1 + _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].addtionalUnitCode();
                    this.select.unit_codes.push({ code: code_1, name: unitName });
                    return code_1;
                }
            }
            else {
                this.select.unit_codes = [];
            }
        }
        return null;
    };
    ReplaceGripComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    ReplaceGripComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'LAY_MAU_BANG_KE') {
            this.layMauBangKe();
        }
        else if (e.itemData.id === 'NAP_DU_LIEU_BANG_KE') {
            this.napDuLieuTuBangKe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"])
    ], ReplaceGripComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceGripComponent.prototype, "dataSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceGripComponent.prototype, "invoice_products", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceGripComponent.prototype, "formatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceGripComponent.prototype, "_objTemplateSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceGripComponent.prototype, "student_reduce_rate_code", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceGripComponent.prototype, "oldForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceGripComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceGripComponent.prototype, "arrProducts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReplaceGripComponent.prototype, "isTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReplaceGripComponent.prototype, "_oTemplateTT78", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('gripChange'),
        __metadata("design:type", Object)
    ], ReplaceGripComponent.prototype, "gripChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('autoChange'),
        __metadata("design:type", Object)
    ], ReplaceGripComponent.prototype, "autoChange", void 0);
    ReplaceGripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-replace-grip',
            template: __webpack_require__(/*! ./replace-grip.component.html */ "./src/app/modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component.html"),
            styles: [__webpack_require__(/*! ./replace-grip.component.scss */ "./src/app/modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_9__["VatService"],
            _modules_products_shared__WEBPACK_IMPORTED_MODULE_12__["ProductsService"]])
    ], ReplaceGripComponent);
    return ReplaceGripComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-bottom: 0!important; padding-left: 0!important;\">\r\n  <div class=\"row\">\r\n    <div class=\"pl-0 col-md-12\">\r\n      <div class=\"button-redirect\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"javascript:void(0)\">{{_translate.CONTROLL.BUTTON.report_replace}}</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link \" (click)=\"routeReport()\" href=\"javascript:void(0)\">\r\n              {{this.textReport}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"invoice-container\">\r\n    <!-- phần form thông tin -->\r\n    <app-replace-form [type]=\"1\"\r\n                      [frmData]=\"frmData\"\r\n                      [oldForm]=\"oldForm\"\r\n                      [dataSource]=\"dataSource\"\r\n                      [invoice_products]=\"invoice_products\"\r\n                      [formatter]=\"formatter\"\r\n                      [fileData]=\"fileData\"\r\n                      (onRedueFeeChange)=\"onRedueFeeChange($event)\"\r\n                      (onTemplateTypeChange)=\"onTemplateTypeChange($event)\"\r\n                      [_oTemplateTT78] = \"_oTemplateTT78\"\r\n                      [isTT78] = \"isTT78\"\r\n                      [infoDangKy] = \"infoDangKy\"\r\n                      (onTemplateTT78TypeChange)=\"onTemplateTT78TypeChange($event)\"\r\n                      [_objTemplateSelect]=\"_objTemplateSelect\">\r\n    </app-replace-form>\r\n\r\n    <!-- <dx-button id=\"btn-chossen-hdck\" (click)=\"showModalHdck()\" icon=\"assets\\img\\icons\\GiuSo.png\"\r\n      text=\"Chọn hóa đơn chờ ký\" type=\"default\"></dx-button> -->\r\n\r\n    <!-- table product -->\r\n    <app-replace-grip\r\n        #child\r\n        [dataSource]=\"dataSource\"\r\n        [invoice_products]=\"invoice_products\"\r\n        [formatter]=\"formatter\"\r\n        [oldForm]=\"oldForm\"\r\n        [frmData]=\"frmData\"\r\n        [arrProducts]=\"arrProducts\"\r\n        [student_reduce_rate_code] = \"student_reduce_rate_code\"\r\n        [isTT78] = \"isTT78\"\r\n        [_oTemplateTT78] = \"_oTemplateTT78\"\r\n        [_objTemplateSelect]=\"_objTemplateSelect\">\r\n    </app-replace-grip>\r\n\r\n    <div class=\" table-footer\">\r\n      <div class=\"table-footer-1\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-table-footer\" dataField=\"amount_after_vat\" editorType=\"dxNumberBox\"\r\n                      [editorOptions]=\"{format: formatter.thanh_tien, disabled: true}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n      <div class=\"table-footer-2\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-vat-table-footer\" dataField=\"total_amount_vat\" editorType=\"dxNumberBox\"\r\n                      [editorOptions]=\"{format: formatter.tien_thue, disabled: true}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n      <div class=\"table-footer-3\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-after-vat-table-footer\" dataField=\"amount\" editorType=\"dxNumberBox\"\r\n                      [editorOptions]=\"{format: formatter.tong_tien, disabled: true}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n      <div class=\"table-footer-4\">\r\n        <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n          <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n            <dxi-item cssClass=\"vat amount-table-footer\" dataField=\"amount_without_discount\" editorType=\"dxNumberBox\"\r\n                      [editorOptions]=\"{format: formatter.thanh_tien_chua_ck, disabled: true}\">\r\n              <dxo-label [visible]=\"false\"></dxo-label>\r\n            </dxi-item>\r\n          </dxi-item>\r\n        </dx-form>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- vùng chọn file -->\r\n    <div class=\"row after-table\">\r\n      <div class=\"col-md-5\">\r\n        <file-upload-multiple [fileData]=\"fileData\" (fileChange)=\"getFileData($event)\"></file-upload-multiple>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"vat money-pull-right\">\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.on_currency_amount}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.on_currency_amount\" tabIndex=\"-1\" format=\"0,###\"\r\n                             [disabled]=\"!frmData.auto_value\"\r\n                             (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount\" tabIndex=\"-1\" [format]=\"formatter.thanh_tien\"\r\n                             [disabled]=\"!frmData.auto_value\"\r\n                             (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_amount_discount}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_discount\" tabIndex=\"-1\" [format]=\"formatter.tien_chiet_khau\"\r\n                             (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat5}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat5\" tabIndex=\"-1\" [format]=\"formatter.tien_thue\"\r\n                             [disabled]=\"!frmData.auto_value\" (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat8}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat8\" tabIndex=\"-1\" [format]=\"formatter.tien_thue\"\r\n                             [disabled]=\"!frmData.auto_value\" (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat10}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat10\" tabIndex=\"-1\" [format]=\"formatter.tien_thue\"\r\n                             [disabled]=\"!frmData.auto_value\" (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"isHdGTGT\" class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_vat_other}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.amount_vat_other\" tabIndex=\"-1\" [format]=\"formatter.tien_thue\"\r\n                             [disabled]=\"!frmData.auto_value\" (onKeyDown)=\"keyDown($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n      </div>\r\n\r\n      <div class=\"col-md-3\">\r\n      </div>\r\n\r\n      <div class=\"col-md-4\" style=\"margin-top: 10px\">\r\n        <div class=\"vat money-pull-right\">\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.amount_after_vat}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-number-box [(value)]=\"frmData.total_payment\" [format]=\"formatter.tong_tien\"\r\n                             [disabled]=\"!frmData.auto_value\"\r\n                             (onKeyDown)=\"keyDown($event)\"\r\n                             (onValueChanged)=\"totalPaymentChange($event)\"></dx-number-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"vat total-payment-in-word\">\r\n          <div class=\"dx-field\">\r\n            <div class=\"dx-field-label\">{{ _translate.CONTROLL.LABEL.total_payment_in_word}}</div>\r\n            <div class=\"dx-field-value\">\r\n              <dx-text-box [(value)]=\"frmData.total_payment_in_word\" [disabled]=\"!frmData.auto_value\"></dx-text-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row button-action\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"pull-left\">\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" (click)=\"preview()\" icon=\"{{_translate.ICONS.view}}\"\r\n                     text=\"{{ _translate.CONTROLL.BUTTON.preview_invoice}}\" type=\"default\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"view()\" icon=\"{{_translate.ICONS.view}}\"\r\n                     text=\"{{ _translate.CONTROLL.BUTTON.view_invoice}}\"\r\n                     type=\"default\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"ttDaXuatHoaDon\" (click)=\"inChuyenDoi()\" icon=\"{{_translate.ICONS.print}}\"\r\n                     text=\"{{ _translate.CONTROLL.BUTTON.print_conversion}}\"\r\n                     type=\"default\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"isTuChoi\" (click)=\"xemlydotuchoi()\" [(icon)]=\"this._translate.ICONS.view\"\r\n                     text=\"{{_translate.CONTROLL.BUTTON.reason_reject}}\"\r\n                     type=\"default\"></dx-button>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon && !isAccessExportInv\" text=\"{{ _translate.CONTROLL.BUTTON.sign_approval}}\"\r\n                     icon=\"assets\\img\\icons\\XuatFile.png\" (click)=\"eSubmit('TRINH_KY')\" type=\"default\"\r\n                     validationGroup=\"formData\"\r\n                     [useSubmitBehavior]=\"true\"></dx-button>\r\n          <!-- <button type=\"button\" (click)=\"test()\">Test</button> -->\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" text=\"{{ _translate.CONTROLL.BUTTON.export_invoice}}\" appScrollToInvalid\r\n                     icon=\"{{_translate.ICONS.export_inv}}\"\r\n                     (click)=\"eSubmit('XUAT', false)\" type=\"default\" validationGroup=\"formData\"\r\n                     [useSubmitBehavior]=\"true\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"!ttDaXuatHoaDon\" text=\"{{ _translate.CONTROLL.BUTTON.save_temporary}}\" appScrollToInvalid\r\n                     icon=\"{{_translate.ICONS.save}}\"\r\n                     (click)=\"eSubmit('GHI_TAM')\" type=\"default\" validationGroup=\"formData\" [useSubmitBehavior]=\"true\">\r\n          </dx-button>\r\n          <dx-button appBackButton type=\"default\" icon=\"{{_translate.ICONS.come_back}}\"\r\n                     text=\"{{ _translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-container{padding-top:15px}.after-table{margin-top:10px}::ng-deep .vat.total-payment-in-word{margin-top:15px}::ng-deep .vat.total-payment-in-word input{color:#000000;font-weight:bold;text-align:right}.vat.total-payment-in-word .dx-field-label{width:12%}.vat.total-payment-in-word .dx-field-value{width:88% !important}::ng-deep .vat.amount-table-footer input,::ng-deep .vat.amount-vat-table-footer input,::ng-deep .vat.amount-after-vat-table-footer input{font-weight:bold;text-align:right;color:#0034F5}::ng-deep .vat.money-pull-right input{text-align:right}::ng-deep .pr-0.money-pull-right input{text-align:right}::ng-deep .prt-1.money-pull-right input{text-align:right}.vat.money-pull-right .dx-field-label{width:45%}.vat.money-pull-right .dx-field-value{width:55% !important}.button-action{margin-top:18px}.table-footer{height:40px;background:#E3E3E3;padding-top:3px}.table-footer .table-footer-1{display:inline-block;width:109px;float:right}.table-footer .table-footer-2{display:inline-block;width:120px;margin-right:32px;float:right}.table-footer .table-footer-3{display:inline-block;width:150px;margin-right:90px;float:right}.table-footer .table-footer-4{display:inline-block;width:109px;margin-right:190px;float:right}#btn-chossen-hdck{margin-top:10px;margin-left:50%;margin-bottom:10px}.dx-field-value.dx-widget,.dx-field-value:not(.dx-widget)>.dx-widget{height:25px}::ng-deep .prv-s-invoice .modal-content{border:0px;border-radius:0px}::ng-deep .v-s-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ReplaceInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceInvoiceComponent", function() { return ReplaceInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_handle_invoice_components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/handle-invoice/components/choose-hdck/choose-hdck.component */ "./src/app/modules/handle-invoice/components/choose-hdck/choose-hdck.component.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
/* harmony import */ var _modules_handle_invoice_components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/handle-invoice/components/send-invoices/send-invoices.component */ "./src/app/modules/handle-invoice/components/send-invoices/send-invoices.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_router_router_library_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/router/router-library.service */ "./src/app/shared/router/router-library.service.ts");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var _modules_handle_invoice_student_components_replace_replace_form_replace_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/handle-invoice-student/components/replace/replace-form/replace-form.component */ "./src/app/modules/handle-invoice-student/components/replace/replace-form/replace-form.component.ts");
/* harmony import */ var _modules_handle_invoice_student_components_replace_replace_grip_replace_grip_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component */ "./src/app/modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
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
























var ReplaceInvoiceComponent = /** @class */ (function () {
    function ReplaceInvoiceComponent(route, modalService, vatService, socketService, authService, cdRef, translate, router, routerLibrary, confirmService, spinner, vPreviewInvService, customeModalService) {
        var _this = this;
        this.route = route;
        this.modalService = modalService;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.cdRef = cdRef;
        this.translate = translate;
        this.router = router;
        this.routerLibrary = routerLibrary;
        this.confirmService = confirmService;
        this.spinner = spinner;
        this.vPreviewInvService = vPreviewInvService;
        this.customeModalService = customeModalService;
        this.frmData = new _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["InvoiceModel"](3);
        this.ttDaXuatHoaDon = false; // Trạng thái đã xuất hóa đơn hay chưa
        this.formatter = {};
        this.select = {};
        this._objTemplateSelect = {};
        this.formatNumber = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].numberInvoiceFormatDev;
        this.tempKiFile = 0;
        this.confirmCheckPreview = false;
        this.isHdGTGT = true;
        this.fileData = [];
        this.isTuChoi = false;
        this.isAccessExportInv = false;
        this.arrProducts = [];
        this._oTemplateTT78 = {};
        this.isTT78 = false;
        // sự kiện form
        this.totalPaymentChange = function (e) {
            var currency_code = _this.frmData.currency_code;
            if (_this.configs.system_parameter.view_price_nte) {
                currency_code = 'VND';
            }
            _this.frmData.total_payment_in_word = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].tienBangChu(e.value, _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien), currency_code, _this.configs.system_parameter.display_read_money_english);
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    ReplaceInvoiceComponent.prototype.ngAfterViewInit = function () {
        if (this.frmData.status === 'DA_XUAT') {
            this.disablleScreen();
            this.cdRef.detectChanges();
        }
        this.setDataSessionStorage(this.frmData);
    };
    ReplaceInvoiceComponent.prototype.disablleScreen = function () {
        this.formInvoice.readonlyAllForm();
        this.productGrip.ttDaXuatHoaDon = true;
        this.ttDaXuatHoaDon = true;
    };
    ReplaceInvoiceComponent.prototype.onRedueFeeChange = function (e) {
        var _this = this;
        this.dataSource.items().forEach(function (item) {
            var product = _this.arrProducts.filter(function (p) { return p.code = item.product_code; })[0];
            if (product) {
                item.price = parseFloat(product.price) - (product.price * parseFloat(e.note)) / 100;
            }
        });
        _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._objTemplateSelect, this.configs.system_parameter);
        this.student_reduce_rate_code = e.note;
    };
    ReplaceInvoiceComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var status;
        if (!this.frmData.id && !this.frmData.invoice_number) {
            status = 'THEM_MOI';
        }
        if (this.frmData.id && !this.frmData.invoice_number) {
            status = 'GHI_TAM';
        }
        if (this.frmData.id && this.frmData.invoice_number) {
            status = 'GIU_SO';
        }
        var xmlInvoice = "";
        var isNewXml = 0;
        if (status === 'THEM_MOI') {
            if (!this.isTT78) {
                var sub_1 = this.vatService.ghiTamForSeries(this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        _this.frmData.id = rs.data.id;
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_1.unsubscribe();
                });
            }
            else {
                var sub_2 = this.vatService.ghiTamForSeriesTT78(this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        _this.frmData.id = rs.data.id;
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_2.unsubscribe();
                });
            }
        }
        else if (status === 'GHI_TAM') {
            if (!this.isTT78) {
                var sub_3 = this.vatService.editBatch(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_3.unsubscribe();
                });
            }
            else {
                var sub_4 = this.vatService.editBatchTT78(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_number = rs.data.invoice_number;
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_4.unsubscribe();
                });
            }
        }
        else if (status === 'GIU_SO') {
            if (!this.isTT78) {
                var sub_5 = this.vatService.editBatch(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, _this.frmData.invoice_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_5.unsubscribe();
                });
            }
            else {
                var sub_6 = this.vatService.editBatchTT78(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                        var invoice_sign_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_sign_date).format('YYYY-MM-DD HH:mm:ss');
                        // demo kí số vào file
                        //  Lấy xml từ serer
                        isNewXml = rs.data.is_new_xml;
                        if (isNewXml)
                            _this.nodeSign = "//HDon/DSCKS/NBan";
                        else
                            _this.nodeSign = "//inv:transaction/inv:invoices/inv:invoice";
                        xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                        if (xmlInvoice != "") {
                            if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                _this.goiApiXuatHoaDon(xmlInvoice);
                            }
                            else {
                                _this.xuLyKiFile(xmlInvoice, invoice_sign_date);
                            }
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_6.unsubscribe();
                });
            }
        }
    };
    ReplaceInvoiceComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        if (this.isTT78) {
            var ListSerialNumber = "DSCKS";
            if (this.infoDangKy && this.infoDangKy.registration_signature) {
                var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                if (signatures && signatures.length > 0)
                    ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
            }
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate, 'InvoiceData', ListSerialNumber, true);
        }
        else
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate);
    };
    ReplaceInvoiceComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        }, 20);
        var sub = this.vatService.xuatHoaDon({
            id: this.frmData.id,
            xml_string: xml_string,
            invoice_files: this.frmData.invoice_files
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.disablleScreen();
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất hóa đơn thành công', 'success');
                _this.fileData = _this.frmData.invoice_files;
                _this.setDataSessionStorage(_this.frmData);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ReplaceInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // kết nối websocket
        this.connectWebsocket();
        this.configs = this.authService.getConfigs();
        this.infoDangKy = this.authService.getInfoRegister();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        this.formatter.display_int = this.configs.system_parameter.display_int;
        ///////
        var isViewTT32 = false;
        if (this.route.snapshot.queryParams['status'] === 'viewInvTT32') {
            isViewTT32 = true;
        }
        this.routeSub = this.route.data.subscribe(function (data) {
            if (data.init[5].length > 0) {
                _this.textReport = _this._translate.CONTROLL.BUTTON.view_report;
            }
            else {
                _this.textReport = _this._translate.CONTROLL.BUTTON.create_report;
            }
            // put data DM for select
            _this.select.unit_codes = data.init[1].DM_DON_VI_TINH;
            _this.select.select_provisions_on_accounts = data.init[1].DM_DINH_KHOAN;
            _this.select.payment_method_names = data.init[1].DM_HINH_THUC_THANH_TOAN;
            _this.select.vats = data.init[1].DM_TY_LE_VAT;
            _this.select.student_reduce_rate_codes = data.init[1].DM_TY_LE_MIEN_GIAM_HOC_PHI;
            if (_this.infoDangKy) {
                if (_this.infoDangKy.status == "CHAP_NHAN")
                    _this.isTT78 = true;
            }
            if (_this.isTT78 == true && isViewTT32)
                _this.isTT78 = false;
            if (_this.isTT78) {
                var temptTT78 = [];
                temptTT78 = data.init[0];
                if (temptTT78 && temptTT78.length > 0) {
                    _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == _this.infoDangKy.is_invoice_with_code; });
                    if (data.init[4] && Number.parseInt(data.init[4].invoice_number) > 0) {
                        if (data.init[4].is_invoice_with_code != _this.infoDangKy.is_invoice_with_code) {
                            _this.select.templatesTT78 = temptTT78.filter(function (p) { return p.is_invoice_with_code == data.init[4].is_invoice_with_code; });
                        }
                    }
                }
            }
            else {
                _this.select.invoice_releases = data.init[0];
            }
            if (data.status === 'thaythemoi') {
                _this.khoiTaoKhiThemMoi(data.init[4]);
                _this.oldForm = data.init[4];
            }
            else {
                _this.khoiTaoKhiSua(data.init[4]);
                _this.oldForm = data.init[4].origin;
            }
            if (data.init[5].length > 0 && _this.isTT78) {
                var oReport = data.init[5][data.init[5].length - 1];
                if (oReport)
                    _this.frmData.destroy_reason = oReport.destroy_reason;
            }
            if (_this.oldForm.template_code.indexOf('02GTTT') >= 0 || _this.oldForm.template_code == "2") {
                _this.isHdGTGT = false;
            }
            // mẫu nhiều loại thuế suất ko
            if (!_this.isTT78) {
                _this.select.invoice_releases.some(function (item) {
                    if (item.value === _this.oldForm.invoice_release_id) {
                        _this.is_multi_vat = item.is_multi_vat;
                        _this._objTemplateSelect = item;
                        return true;
                    }
                });
            }
            else {
                _this.select.templatesTT78.forEach(function (item) {
                    if (item.value === _this.oldForm.template_id) {
                        _this.invoiceTemplateTT78 = item;
                    }
                });
                _this.select.templatesTT78.some(function (item) {
                    if (item.value === _this.oldForm.template_id) {
                        _this.is_multi_vat = item.is_multi_vat;
                        for (var key in item) {
                            if (item.hasOwnProperty(key)) {
                                _this._oTemplateTT78[key] = item[key];
                            }
                        }
                        return true;
                    }
                });
            }
            _this.dataInvoice = data.init[4];
        });
        var currentUser = this.authService.getCurrentUser();
        var listpermissions = currentUser.user.permissions.split(',');
        var obj2 = listpermissions.filter(function (p) { return p === 'phe_duyet'; });
        if (obj2.length > 0) {
            this.isAccessExportInv = true;
        }
        else {
            this.isAccessExportInv = false;
        }
    };
    ReplaceInvoiceComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                // Helper.dowloadFile('test.xml', 'xml', data.Data.Content);
                if (data.Data.Name === 'hoadon.xml') {
                    _this.goiApiXuatHoaDon(data.Data.Content);
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    _this.frmData.issuer_name = data.Data.IssuerName;
                    _this.xuLiApiKhiXuat();
                }
                else {
                    _this.frmData.invoice_files.forEach(function (item) {
                        if (item.file_name === data.Data.Name) {
                            item.file_content = data.Data.Content;
                        }
                    });
                    _this.tempKiFile++;
                    if (_this.tempKiFile === _this.frmData.invoice_files.length) {
                        _this.xuLiApiKhiXuat();
                    }
                }
            }
        });
    };
    ReplaceInvoiceComponent.prototype.khoiTaoKhiThemMoi = function (data) {
        var _this = this;
        // khởi tạo mới lưới
        var inv_products = this.frmData.setInvoice_products_data(data.invoice_products);
        inv_products.forEach(function (item) {
            item.vat = item.vat != null ? item.vat.toString() : null;
        });
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7___default.a({
            key: 'id',
            data: inv_products
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8___default.a({
            store: this.invoice_products
        });
        // tạo mới đối tượng file
        this.fileData = [];
        // khởi tạo dữ liệu form
        this.frmData.fillFormThayThe(data);
        if (this.frmData.vat_service_ticket != null) {
            this.frmData.vat_service_ticket = this.frmData.vat_service_ticket.toString();
        }
        if (!this.isTT78) {
            this.select.invoice_releases = this.select.invoice_releases.filter(function (p) { return p.number_survival > 0; });
            this.select.invoice_releases.forEach(function (item) {
                if (item.template_id === _this.frmData.template_id) {
                    _this.invoicereleaseTempt = item;
                }
            });
        }
        else {
            if (this.select.templatesTT78.length) {
                this.select.templatesTT78.forEach(function (item) {
                    if (item.value === _this.frmData.template_id) {
                        _this.invoiceTemplateTT78 = item;
                    }
                });
            }
        }
        this.select.student_reduce_rate_codes.forEach(function (item) {
            if (_this.frmData.student_reduce_rate_code === item.code) {
                _this.student_reduce_rate_code = item.note;
            }
        });
    };
    ReplaceInvoiceComponent.prototype.checkDisabledTotalPaymentInWord = function () {
        if (this.frmData.adjustment_form === 'THONG_TIN' && this.frmData.adjustment_object === 'TIEN_CHU') {
            return false;
        }
        return true;
    };
    ReplaceInvoiceComponent.prototype.khoiTaoKhiSua = function (data) {
        var _this = this;
        var inv_products = this.frmData.setInvoice_products_data(data.invoice_products);
        inv_products.forEach(function (item) {
            item.vat = item.vat != null ? item.vat.toString() : null;
        });
        // khởi tạo lưới từ dữ liệu sửa
        this.invoice_products = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_7___default.a({
            key: 'id',
            data: inv_products
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8___default.a({
            store: this.invoice_products
        });
        // khởi tạo dữ liệu form
        this.frmData.fillFormData(data);
        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.approve_status) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.TuChoi) {
            this.isTuChoi = true;
        }
        // lấy file
        this.fileData = data.invoice_files || [];
        if (this.frmData.vat_service_ticket != null) {
            this.frmData.vat_service_ticket = this.frmData.vat_service_ticket.toString();
        }
        if (!this.isTT78) {
            this.select.invoice_releases.forEach(function (item) {
                if (item.template_id === _this.frmData.template_id) {
                    _this.invoicereleaseTempt = item;
                }
            });
        }
        else {
            this.select.templatesTT78.forEach(function (item) {
                if (item.value === _this.frmData.template_id) {
                    _this.invoiceTemplateTT78 = item;
                }
            });
        }
        this.select.student_reduce_rate_codes.forEach(function (item) {
            if (_this.frmData.student_reduce_rate_code === item.code) {
                _this.student_reduce_rate_code = item.note;
            }
        });
        // cấu hình thập phân thêm mới
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
    };
    ReplaceInvoiceComponent.prototype.updateSomeTotalInput = function (e) {
    };
    ReplaceInvoiceComponent.prototype.fillAutoInput = function (e) {
        // this.frmData.auto_value = e;
    };
    // Lấy data khi chọn file đính kèm bảng kê
    ReplaceInvoiceComponent.prototype.getFileData = function (fileData) {
        this.fileData = fileData;
    };
    ReplaceInvoiceComponent.prototype.formatDecimalColumn = function (number) {
        if (number === 0) {
            return '0,###';
        }
        else {
            return '0,###.' + '0'.repeat(number);
        }
    };
    ReplaceInvoiceComponent.prototype.onTemplateTT78TypeChange = function (e) {
        this.invoiceTemplateTT78 = e;
    };
    // Các hàm chức năng chính
    ReplaceInvoiceComponent.prototype.preview = function () {
        var _this = this;
        setTimeout(function () {
            _this.handleFormData();
            if (!_this._validForm(true)) {
                return;
            }
            var data = _this.vatService.taodulieuXemTruocHS(_this.frmData);
            data['configs'] = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].cauhinhxemmau.hoadon;
            _this.vPreviewInvService.xemMau(data);
        }, 300);
    };
    ReplaceInvoiceComponent.prototype.view = function () {
        var ids = [];
        ids.push(this.frmData.id);
        var data = this.vatService.taodulieuXemMauHS(ids);
        data['configs'] = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].cauhinhxemmau.hoadon;
        this.vPreviewInvService.xemMau(data);
    };
    ReplaceInvoiceComponent.prototype.inChuyenDoi = function () {
        var ids = [];
        ids.push(this.frmData.id);
        var data = this.vatService.taodulieuInchuyendoiHS(ids);
        data['configs'] = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].cauhinhxemmau.hoadon;
        this.vPreviewInvService.xemMau(data);
    };
    ReplaceInvoiceComponent.prototype.ghiTam = function (data) {
        var _this = this;
        if (this.frmData.id) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            if (!this.isTT78) {
                var sub_7 = this.vatService.editBatch(this.frmData.id, data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.id = rs.data.id;
                        if (_this.frmData.approve_status === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChoDuyet) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Trình ký thành công', 'success');
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Cập nhật thành công', 'success');
                        }
                        _this.setDataSessionStorage(_this.frmData);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_7.unsubscribe();
                });
            }
            else {
                var sub_8 = this.vatService.editBatchTT78(this.frmData.id, data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.id = rs.data.id;
                        if (_this.frmData.approve_status === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChoDuyet) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Trình ký thành công', 'success');
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Cập nhật thành công', 'success');
                        }
                        _this.setDataSessionStorage(_this.frmData);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_8.unsubscribe();
                });
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
            if (!this.isTT78) {
                var sub_9 = this.vatService.ghiTamForSeries(data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.id = rs.data.id;
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Ghi tạm thành công', 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                    _this.setDataSessionStorage(_this.frmData);
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_9.unsubscribe();
                });
            }
            else {
                var sub_10 = this.vatService.ghiTamForSeriesTT78(data).subscribe(function (rs) {
                    if (rs.status === 'success') {
                        _this.frmData.id = rs.data.id;
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Ghi tạm thành công', 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                    }
                    _this.setDataSessionStorage(_this.frmData);
                }, function (err) {
                }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                    sub_10.unsubscribe();
                });
            }
        }
    };
    ReplaceInvoiceComponent.prototype.xuatChoKy = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        if (!this.isTT78) {
            var sub_11 = this.vatService.xuatChoKyForSeries(data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.id = rs.data.id;
                    _this.frmData.invoice_number = rs.data.invoice_number;
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    if (_this.frmData.approve_status === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChoDuyet) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Trình ký thành công', 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất chờ ký thành công', 'success');
                    }
                    _this.setDataSessionStorage(_this.frmData);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_11.unsubscribe();
            });
        }
        else {
            var sub_12 = this.vatService.xuatChoKyForSeriesTT78(data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.id = rs.data.id;
                    _this.frmData.invoice_number = rs.data.invoice_number;
                    _this.frmData.invoice_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.invoice_date).format('YYYY-MM-DD HH:mm:ss');
                    if (_this.frmData.approve_status === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChoDuyet) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Trình ký thành công', 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất chờ ký thành công', 'success');
                    }
                    _this.setDataSessionStorage(_this.frmData);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                sub_12.unsubscribe();
            });
        }
    };
    ReplaceInvoiceComponent.prototype.xuatHoaDon = function (data) {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            if (this.frmData.invoice_files.length) {
                this.frmData.invoice_files.forEach(function (item) {
                    _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, item.file_content, item.file_name, item.file_name.split('.').pop(), true, _this.frmData.invoice_date);
                });
            }
            else {
                if (this.isTT78) {
                    var ListSerialNumber = "DSCKS";
                    if (this.infoDangKy && this.infoDangKy.registration_signature) {
                        var signatures = this.infoDangKy.registration_signature.filter(function (p) { return p.register_form == "THEM_MOI" || p.register_form == "GIA_HAN"; });
                        if (signatures && signatures.length > 0)
                            ListSerialNumber = signatures.map(function (obj) { return obj.cert_serial; }).join(';');
                    }
                    var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", ListSerialNumber, true);
                }
                else
                    this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice');
            }
        }
    };
    ReplaceInvoiceComponent.prototype._validForm = function (isOnlyCheckAm) {
        var _this = this;
        var _isValid = true;
        if ((this.frmData.amount_vat5 < 0 || this.frmData.amount_vat10 < 0 || this.frmData.total_payment < 0)
            && !this.configs.system_parameter.allow_export_with_negative) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.discount_same_vat, 'error');
            return false;
        }
        if (isOnlyCheckAm) {
            return true;
        }
        if (!this.frmData.student_code) {
            if (this.formInvoice.form.instance.getEditor('student_code')) {
                this.formInvoice.form.instance.getEditor('student_code').focus();
            }
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.code_student + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.student_name) {
            if (this.formInvoice.form.instance.getEditor('student_name')) {
                this.formInvoice.form.instance.getEditor('student_name').focus();
            }
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.CONTROLL.LABEL.name_student + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.total_payment && this.frmData.total_payment !== 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tổng tiền hóa đơn không được để trống", 'error');
            return false;
        }
        var _lst = this.frmData.invoice_products.filter(function (p) { return p.product_name; });
        if (_lst.length === 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_product, 'error');
            this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
            return false;
        }
        else {
            var _lstValidThanhTien = this.frmData.invoice_products.filter(function (p) { return !p.amount && p.amount !== 0; });
            if (_lstValidThanhTien.length == this.frmData.invoice_products.length) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Thành tiền không được để trống", 'error', 5000);
                this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'amount'));
                return false;
            }
            var _lstValidTongTien = this.frmData.invoice_products.filter(function (p) { return !p.amount_after_vat && p.amount_after_vat !== 0; });
            if (_lstValidTongTien.length == this.frmData.invoice_products.length) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tổng tiền hàng hóa không được để trống", 'error', 5000);
                this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'amount_after_vat'));
                return false;
            }
            var _loop_1 = function (i) {
                if ((_lst[i].group_code == "HOCPHI" || _lst[i].group_code == "HOCTHEM") && (_lst[i].school_fee_month == '' || !_lst[i].school_fee_month)) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this_1._translate.GRID.INVOICE_DETAILS.school_fee_month + " " + this_1._translate.VALIDATION.required, 'error', 5000);
                    this_1.productGrip.dataGrid.instance.focus(this_1.productGrip.dataGrid.instance.getCellElement(i, 'product_code'));
                    return { value: false };
                }
                var _lstProduct = _lst.filter(function (p) { return p.product_code == _lst[i].product_code; });
                if (_lstProduct && _lstProduct.length > 1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Mã '" + _lst[i].product_code + "' bị trùng", 'error', 5000);
                    this_1.productGrip.dataGrid.instance.focus(this_1.productGrip.dataGrid.instance.getCellElement(i, 'product_code'));
                    return { value: false };
                }
            };
            var this_1 = this;
            for (var i = 0; i < _lst.length; i++) {
                var state_1 = _loop_1(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            if (!this.isTT78) {
                var numberRow = this.invoicereleaseTempt.numberRow;
                if (numberRow == 100) {
                    if (_lst.length > 1) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Chỉ được chọn 1 khoản thu để xuất hóa đơn", 'error', 5000);
                        this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
                        return false;
                    }
                }
            }
            else {
                if (this.frmData.destroy_reason === null || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this.frmData.destroy_reason) == "") {
                    this.formInvoice.form.instance.getEditor('destroy_reason').focus();
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Lý do thay thế" + ' ' + this._translate.VALIDATION.required, 'error');
                    return false;
                }
                var numberRow = this.invoiceTemplateTT78.numberRow;
                if (numberRow == 100) {
                    if (_lst.length > 1) {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.only_seclected_1_product_to_export_invoice, 'error', 5000);
                        this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(0, 'product_code'));
                        return false;
                    }
                }
                this.invoice_products.load().then(function (dataSource) {
                    dataSource.forEach(function (item, index) {
                        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.product_name) != "" && !item.is_promotion && !item.is_promotion_new && !item.commercial_discount && _isValid) {
                            // if (item.quantity == null && _isValid) {
                            //   Library.notify("Số lượng" + " " + this._translate.VALIDATION.required, 'error');
                            //   this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(index, 'quantity'));
                            //   _isValid = false;
                            //   return false;
                            // }
                            // if (item.price == null && _isValid) {
                            //   Library.notify("Đơn giá" + " " + this._translate.VALIDATION.required, 'error');
                            //   this.productGrip.dataGrid.instance.focus(this.productGrip.dataGrid.instance.getCellElement(index, 'price'));
                            //   _isValid = false;
                            //   return false;
                            // }
                        }
                        else if (item.is_promotion || item.is_promotion_new || item.commercial_discount) {
                            if ((item.product_name == null || item.product_name == '') && _isValid) {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tên hàng hóa" + " " + _this._translate.VALIDATION.required, 'error');
                                _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'product_name'));
                                _isValid = false;
                                return false;
                            }
                        }
                        if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(item.product_name) != "" && !item.is_promotion) {
                            if (_this.isHdGTGT) {
                                if (item.vat == null && _isValid) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Thuế suất" + " " + _this._translate.VALIDATION.required, 'error');
                                    _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'vat'));
                                    _isValid = false;
                                    return false;
                                }
                                if (item.vat != "-1" && item.amount_vat == null && _isValid) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tiền thuế" + " " + _this._translate.VALIDATION.required, 'error');
                                    _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'amount_vat'));
                                    _isValid = false;
                                    return false;
                                }
                            }
                            if (item.amount == null && _isValid) {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Thành tiền" + " " + _this._translate.VALIDATION.required, 'error');
                                _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(index, 'amount'));
                                _isValid = false;
                                return false;
                            }
                        }
                    });
                });
            }
        }
        return _isValid;
    };
    ReplaceInvoiceComponent.prototype.eSubmit = function (type, isCheckNoVat) {
        var _this = this;
        var checkValid = this.formInvoice.form.instance.validate();
        if (!checkValid.isValid) {
            return;
        }
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        this.total_payment = "";
        setTimeout(function () {
            _this.handleFormData();
            if (type !== 'GHI_TAM') {
                if (!_this._validForm(false)) {
                    return;
                }
                if (!_core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_10__["InvoicesService"].checkTimeExportInv(_this.configs.system_parameter)) {
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_11__["String"].Format(_this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_2__(_this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_2__(_this.configs.system_parameter.time_end).format('HH:mm')), 'error');
                    return;
                }
            }
            if (_this.frmData.invoice_options) {
                _this.frmData.invoice_options.forEach(function (item) {
                    delete item['is_show'];
                    delete item['type'];
                    delete item['width'];
                    delete item['statusData'];
                    delete item['id'];
                    delete item['invoice_id'];
                });
            }
            if (_this.frmData.total_payment > 20000000 && (_this.frmData.payment_method_name === 'TM')) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Vui lòng chọn HTTT chuyển khoản cho hóa đơn có giá trị lớn hơn 20 triệu đồng', 'error');
                return false;
            }
            if (!_this.isAccessExportInv && type === 'XUAT' && _this.formInvoice.getHtXuatValue() !== _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].hinhThucXuat.XuatChoKy) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.you_not_permissions, 'error');
                return false;
            }
            if (type === 'XUAT' || (type === 'TRINH_KY' && _this.frmData.status === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].hinhThucXuat.XuatChoKy)) {
                var _lstInv_1 = [];
                _this.invoice_products.load().then(function (dataSource) {
                    _lstInv_1 = dataSource.filter(function (p) { return p.product_name; });
                });
                var _index_1 = 0;
                var _isValid = true;
                for (var i = 0; i < _lstInv_1.length; i++) {
                    if (_lstInv_1[i].amount > 0 && !_lstInv_1[i].vat) {
                        _index_1 = i;
                        _isValid = false;
                        break;
                    }
                }
                if (!_this.vatService.checkVatMauHoaDon(_lstInv_1, _this.is_multi_vat)) {
                    return false;
                }
                if (!_isValid && isCheckNoVat) {
                    var result = _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirm(_this._translate.CONFIRM.no_vat, _this._translate.NOTIFY.notify);
                    result.then(function (dialogResult) {
                        if (dialogResult) {
                            _this.productGrip.dataGrid.instance.focus(_this.productGrip.dataGrid.instance.getCellElement(_index_1, 'vat'));
                            return false;
                        }
                        else {
                            if (type === 'TRINH_KY' && _this.frmData.status === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].hinhThucXuat.XuatChoKy) {
                                _this.confirmCheckPreview = true;
                            }
                            if (_this.confirmCheckPreview) {
                                if (_this.formInvoice.getHtXuatValue() !== _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].hinhThucXuat.XuatChoKy) {
                                    _this.xuatHoaDon(_this.frmData);
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].confirmXuatChoKy(function () {
                                        if (!_this.isAccessExportInv) {
                                            if (type === 'TRINH_KY') {
                                                _this.frmData.refuse_reason = '';
                                                _this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChoDuyet;
                                            }
                                            else {
                                                if (_this.frmData.approve_status !== _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.TuChoi) {
                                                    _this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChuaTrinhKy;
                                                }
                                            }
                                        }
                                        _this.xuatChoKy(_this.frmData);
                                    });
                                }
                                _this.confirmCheckPreview = false;
                            }
                            else {
                                _this.previewBeforeExport(type);
                            }
                        }
                    });
                }
                else {
                    if (type === 'TRINH_KY' && _this.frmData.status === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].hinhThucXuat.XuatChoKy) {
                        _this.confirmCheckPreview = true;
                    }
                    if (_this.confirmCheckPreview) {
                        if (_this.formInvoice.getHtXuatValue() != _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].hinhThucXuat.XuatChoKy) {
                            _this.xuatHoaDon(_this.frmData);
                        }
                        else {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].confirmXuatChoKy(function () {
                                if (!_this.isAccessExportInv) {
                                    if (type === 'TRINH_KY') {
                                        _this.frmData.refuse_reason = '';
                                        _this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChoDuyet;
                                    }
                                    else {
                                        if (_this.frmData.approve_status !== _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.TuChoi) {
                                            _this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChuaTrinhKy;
                                        }
                                    }
                                }
                                _this.xuatChoKy(_this.frmData);
                            });
                        }
                    }
                    else {
                        _this.previewBeforeExport(type);
                    }
                }
            }
            else {
                if (!_this.isAccessExportInv) {
                    if (type === 'TRINH_KY') {
                        _this.frmData.refuse_reason = '';
                        _this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChoDuyet;
                    }
                    else {
                        if (_this.frmData.approve_status !== _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.TuChoi) {
                            _this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChuaTrinhKy;
                        }
                    }
                }
                _this.ghiTam(_this.frmData);
            }
        }, 300);
    };
    ReplaceInvoiceComponent.prototype.previewBeforeExport = function (type) {
        var _this = this;
        this.handleFormData();
        var trang_thai = '';
        if (this.formInvoice.getHtXuatValue() !== _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].hinhThucXuat.XuatChoKy) {
            trang_thai = this._translate.THONG_TIN.xuat_va_ky;
        }
        else {
            trang_thai = this._translate.THONG_TIN.xuat_cho_ky;
        }
        var du_lieu = this.vatService.taodulieuXemTruocHS(this.frmData);
        du_lieu['configs'] = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].cauhinhxemmau.hoadon;
        var content_invoice = {
            du_lieu: du_lieu,
            ngay_hoa_don: "",
            trang_thai: trang_thai,
            tong_tien: "",
            title_invoice_type: this._translate.THONG_TIN.ban_du_thao_hoa_don.toUpperCase(),
            note_warn: this._translate.THONG_TIN.luu_y_truoc_khi_xuat,
            is_display_img_note: true,
            text_ngay_hoa_don: this._translate.THONG_TIN.ngay_hoa_don,
            text_tong_tien: this._translate.THONG_TIN.tong_tien,
            question_again: this._translate.THONG_TIN.ban_co_chac_chan_xuat_hoa_don_khong
        };
        var initialState = {
            content_invoice: content_invoice,
        };
        this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_23__["PreviewInvoiceComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-xl prv-s-invoice v-s-invoice',
            initialState: initialState
        });
        var subModal = this.customeModalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem == _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].actionHander.DongY) {
                _this.confirmCheckPreview = true;
                _this.eSubmit(type);
            }
            subModal.unsubscribe();
        });
    };
    ReplaceInvoiceComponent.prototype.handleFormData = function () {
        var _this = this;
        this.tempKiFile = 0;
        var invoice_products = [];
        this.invoice_products.load().then(function (dataSource) {
            dataSource.forEach(function (item, index) {
                //delete item.error;
                if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                    item.row_content = item.product_name;
                    invoice_products.push(item);
                    if (item.is_transport_number) {
                        _this.frmData.transport_number = item.product_name;
                    }
                }
            });
        });
        this.frmData.invoice_files = JSON.parse(JSON.stringify(this.fileData));
        this.frmData.note_view_on_invoice = "H\u00F3a \u0111\u01A1n n\u00E0y thay th\u1EBF cho h\u00F3a \u0111\u01A1n s\u1ED1 " + this.oldForm.invoice_number + ", m\u1EABu s\u1ED1 " + this.oldForm.template_code + ", k\u00FD hi\u1EC7u " + this.oldForm.invoice_series + " ng\u00E0y " + moment__WEBPACK_IMPORTED_MODULE_2__(this.oldForm.invoice_date).format('DD/MM/YYYY');
        this.frmData.invoice_products = invoice_products;
        this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getObjFormatterToColumn(this.formatter));
    };
    ReplaceInvoiceComponent.prototype.handleFormDataSub = function () {
        var _this = this;
        var wait = function (delay) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return new Promise(function (resolve) { return setTimeout.apply(void 0, [resolve, delay].concat(args)); });
        };
        return wait(200).then(function () {
            _this.tempKiFile = 0;
            var invoice_products = [];
            _this.invoice_products.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    //delete item.error;
                    if (item.product_code || item.product_name || (!item.product_name && item.is_promotion)) {
                        item.row_content = item.product_name;
                        invoice_products.push(item);
                        if (item.is_transport_number) {
                            _this.frmData.transport_number = item.product_name;
                        }
                    }
                });
            });
            _this.frmData.invoice_files = JSON.parse(JSON.stringify(_this.fileData));
            _this.frmData.note_view_on_invoice = "H\u00F3a \u0111\u01A1n n\u00E0y thay th\u1EBF cho h\u00F3a \u0111\u01A1n s\u1ED1 " + _this.oldForm.invoice_number + ", m\u1EABu s\u1ED1 " + _this.oldForm.template_code + ", k\u00FD hi\u1EC7u " + _this.oldForm.invoice_series + " ng\u00E0y " + moment__WEBPACK_IMPORTED_MODULE_2__(_this.oldForm.invoice_date).format('DD/MM/YYYY');
            _this.frmData.invoice_products = invoice_products;
            _this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
            return true;
        });
    };
    ReplaceInvoiceComponent.prototype.showModalHdck = function () {
        var _this = this;
        var initialState = {
            invoiceNumberOrigin: this.oldForm.invoice_number,
            invoiceReleaseId: this.oldForm.invoice_release_id,
            onSave: function (data) {
                _this.frmData.id = data.id;
                _this.frmData.invoice_date = data.invoice_date;
                _this.frmData.invoice_number = data.invoice_number;
            }
        };
        this.bsModalHdckRef = this.modalService.show(_modules_handle_invoice_components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_4__["ChooseHdckComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-lg full-modal',
            initialState: initialState
        });
    };
    ReplaceInvoiceComponent.prototype.test = function () {
        this.productGrip.createUpdateEvent();
        // this.handleFormData();
        // window.scrollTo(100, 100);
    };
    ReplaceInvoiceComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
        this.routeSub.unsubscribe();
        // this.socketService.close();
    };
    ReplaceInvoiceComponent.prototype.xemlydotuchoi = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var sub = this.vatService.showToSendInvoice(this.frmData.id).subscribe(function (rs) {
            if (rs.status === 'success') {
                var initialState = {
                    invoice: rs.data.invoice,
                    listDM: _this.listDM
                };
                _this.bsModalRef = _this.modalService.show(_modules_handle_invoice_components_send_invoices_send_invoices_component__WEBPACK_IMPORTED_MODULE_13__["SendInvoicesComponent"], {
                    class: 'modal-lg full-modal', initialState: initialState, backdrop: 'static',
                    keyboard: false
                });
                _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem) {
                    }
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ReplaceInvoiceComponent.prototype.onSubmit = function () {
    };
    ReplaceInvoiceComponent.prototype.routeReport = function () {
        if (this.dataInvoice.origin_id !== null) {
            if (this.dataInvoice.status === 'GHI_TAM') {
                this.router.navigate(['/system/handle-report/create-report/', this.dataInvoice.origin_id, 'THAY_THE']);
            }
            else {
                this.router.navigate(['/system/handle-report/create-report/', this.dataInvoice.id, 'THAY_THE']);
            }
        }
        else {
            this.router.navigate(['/system/handle-report/create-report/', this.dataInvoice.id, 'THAY_THE']);
        }
    };
    ReplaceInvoiceComponent.prototype.onTemplateTypeChange = function (e) {
        this.invoicereleaseTempt = e;
    };
    ReplaceInvoiceComponent.prototype.onNumberTicketChange = function () {
        if (!this.isTT78) {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._objTemplateSelect, this.configs.system_parameter);
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBay
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonXangDau) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyTicket(this.frmData, this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._objTemplateSelect.template_type));
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyItem(this.dataSource, this.invoice_products, this.frmData, this.formatter, !this.frmData.auto_value, this.frmData.auto_value_price, null, this._oTemplateTT78, this.configs.system_parameter);
            if (_core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBay
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBayHoanTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonVeMayBayThuTien
                || _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type) === _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].templatetype.HoaDonXangDau) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"]._changeMoneyTicket(this.frmData, this.formatter, _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(this._oTemplateTT78.template_type));
            }
        }
    };
    ReplaceInvoiceComponent.prototype.onVatChange = function () {
        var decimal_amount = this.getFormatterToNumber(this.formatter.thanh_tien);
        var decimal_amount_vat = this.getFormatterToNumber(this.formatter.tien_thue);
        var decimal_vat = this.getFormatterToNumber(this.formatter.vat);
        if (this.frmData.vat_service_ticket === '5' || this.frmData.vat_service_ticket == '10') {
            this.frmData.total_vat_service_ticket = this.roundNumber((Number.parseInt(this.frmData.vat_service_ticket) * this.frmData.money_service_ticket) / 100, decimal_amount_vat);
        }
        else {
            this.frmData.total_vat_service_ticket = 0;
        }
        this.frmData.total_service_ticket_with_vat = this.roundNumber(this.frmData.money_service_ticket + this.frmData.total_vat_service_ticket, decimal_amount);
    };
    ReplaceInvoiceComponent.prototype.getFormatterToNumber = function (formatter) {
        var s1 = formatter.replace('0,###', '');
        if (s1 === '') {
            return 0;
        }
        else {
            var s2 = s1.replace('.', '');
            return s2.split('').length;
        }
    };
    ReplaceInvoiceComponent.prototype.roundNumber = function (number, n) {
        if (number == null) {
            return number;
        }
        else {
            var p = Math.pow(10, n);
            return Math.round(number * p) / p;
        }
    };
    ReplaceInvoiceComponent.prototype.keyDown = function (e) {
        // setTimeout(() => {
        if (e.event.key === 'Delete') {
            e.event.srcElement.value = null;
        }
        // }, 100);
    };
    ReplaceInvoiceComponent.prototype.setDataSessionStorage = function (value) {
        this.valueChange = JSON.stringify(value);
    };
    ReplaceInvoiceComponent.prototype.checkDataFormChange = function (dataChange, dataForm) {
        var dataBefore = JSON.parse(dataChange);
        var dataAfter = JSON.parse(JSON.stringify(dataForm));
        return lodash__WEBPACK_IMPORTED_MODULE_14__["isEqual"](dataBefore, dataAfter);
    };
    ReplaceInvoiceComponent.prototype.subData = function (type, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var checkValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        checkValid = this.formInvoice.form.instance.validate();
                        if (!checkValid.isValid) {
                            return [2 /*return*/, false];
                        }
                        if (this.windowPreviewBeforeSubmit) {
                            this.windowPreviewBeforeSubmit.focus();
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.handleFormDataSub()];
                    case 1:
                        _a.sent();
                        if (this.frmData.invoice_options) {
                            this.frmData.invoice_options.forEach(function (item) {
                                delete item['is_show'];
                                delete item['type'];
                                delete item['width'];
                                delete item['statusData'];
                            });
                        }
                        if (this.frmData.total_payment > 20000000 && (this.frmData.payment_method_name === 'TM')) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.payment_method_more_than_20_million, 'error');
                            return [2 /*return*/, false];
                        }
                        if (!this.isAccessExportInv) {
                            if (type === 'TRINH_KY') {
                                this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChoDuyet;
                                this.frmData.refuse_reason = '';
                            }
                            else {
                                if (this.frmData.approve_status !== _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.TuChoi) {
                                    this.frmData.approve_status = _config_sEnum__WEBPACK_IMPORTED_MODULE_12__["sEnum"].statusApprove.ChuaTrinhKy;
                                }
                            }
                        }
                        if (!value.id) return [3 /*break*/, 6];
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                        if (!!this.isTT78) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.vatService.editBatch(this.frmData.id, value).toPromise().then(function (res) {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                                if (res.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, this.vatService.editBatchTT78(this.frmData.id, value).toPromise().then(function (res) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                            if (res.status === 'success') {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                return true;
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                return false;
                            }
                        })];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [3 /*break*/, 10];
                    case 6:
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                        if (!!this.isTT78) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.vatService.ghiTamForSeries(value).toPromise().then(function (res) {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                                if (res.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8: return [4 /*yield*/, this.vatService.ghiTamForSeriesTT78(value).toPromise().then(function (res) {
                            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                            if (res.status === 'success') {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                return true;
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                                return false;
                            }
                        })];
                    case 9: return [2 /*return*/, _a.sent()];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ReplaceInvoiceComponent.prototype.canDeactivate = function () {
        var _this = this;
        if (!this.checkDataFormChange(this.valueChange, this.frmData)) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_15__["Observable"](function (observer) {
                _this.confirmService.confirm().subscribe(function (value) {
                    switch (value) {
                        case 'yes':
                            _this.subData('GHI_TAM', _this.frmData).then(function (value1) {
                                observer.next(value1);
                                observer.complete();
                            });
                            break;
                        case 'no':
                            observer.next(true);
                            observer.complete();
                            break;
                        case 'cancel':
                            observer.next(false);
                            observer.complete();
                            break;
                        default:
                            observer.next(true);
                            observer.complete();
                            break;
                    }
                });
            });
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_handle_invoice_student_components_replace_replace_grip_replace_grip_component__WEBPACK_IMPORTED_MODULE_19__["ReplaceGripComponent"]),
        __metadata("design:type", _modules_handle_invoice_student_components_replace_replace_grip_replace_grip_component__WEBPACK_IMPORTED_MODULE_19__["ReplaceGripComponent"])
    ], ReplaceInvoiceComponent.prototype, "productGrip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_handle_invoice_student_components_replace_replace_form_replace_form_component__WEBPACK_IMPORTED_MODULE_18__["ReplaceFormComponent"]),
        __metadata("design:type", _modules_handle_invoice_student_components_replace_replace_form_replace_form_component__WEBPACK_IMPORTED_MODULE_18__["ReplaceFormComponent"])
    ], ReplaceInvoiceComponent.prototype, "formInvoice", void 0);
    ReplaceInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-replace-invoice',
            template: __webpack_require__(/*! ./replace-invoice.component.html */ "./src/app/modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component.html"),
            styles: [__webpack_require__(/*! ./replace-invoice.component.scss */ "./src/app/modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_router_router_library_service__WEBPACK_IMPORTED_MODULE_16__["RouterLibraryService"],
            _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_17__["ConfirmService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_21__["ViewInvoiceService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_22__["MyBsModalService"]])
    ], ReplaceInvoiceComponent);
    return ReplaceInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/handle-invoice-student.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/handle-invoice-student.module.ts ***!
  \*********************************************************************************/
/*! exports provided: HandleInvoiceStudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleInvoiceStudentModule", function() { return HandleInvoiceStudentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_modules_vat_shared_vat_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/modules/vat-shared/vat-shared.module */ "./src/app/shared/modules/vat-shared/vat-shared.module.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/handle-report/hanlde-report.service */ "./src/app/modules/handle-report/hanlde-report.service.ts");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
/* harmony import */ var _shared_router_router_library_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/router/router-library.service */ "./src/app/shared/router/router-library.service.ts");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/handle-invoice/shared */ "./src/app/modules/handle-invoice/shared/index.ts");
/* harmony import */ var _modules_handle_invoice_student_components_adjust_adjust_form_adjust_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-form/adjust-form.component.ts");
/* harmony import */ var _modules_handle_invoice_student_components_adjust_adjust_grip_adjust_grip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-grip/adjust-grip.component.ts");
/* harmony import */ var _modules_handle_invoice_student_components_adjust_adjust_invoice_adjust_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component.ts");
/* harmony import */ var _modules_handle_invoice_student_components_replace_replace_form_replace_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/handle-invoice-student/components/replace/replace-form/replace-form.component */ "./src/app/modules/handle-invoice-student/components/replace/replace-form/replace-form.component.ts");
/* harmony import */ var _modules_handle_invoice_student_components_replace_replace_grip_replace_grip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component */ "./src/app/modules/handle-invoice-student/components/replace/replace-grip/replace-grip.component.ts");
/* harmony import */ var _modules_handle_invoice_student_components_replace_replace_invoice_replace_invoice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component */ "./src/app/modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component.ts");
/* harmony import */ var _modules_handle_invoice_student_components_index_index_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/handle-invoice-student/components/index/index.component */ "./src/app/modules/handle-invoice-student/components/index/index.component.ts");
/* harmony import */ var _modules_handle_invoice_student_handle_invoice_student_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/handle-invoice-student/handle-invoice-student.routing */ "./src/app/modules/handle-invoice-student/handle-invoice-student.routing.ts");
/* harmony import */ var _modules_handle_invoice_student_shared_replace_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @modules/handle-invoice-student/shared/replace-invoice-student-resolver.service */ "./src/app/modules/handle-invoice-student/shared/replace-invoice-student-resolver.service.ts");
/* harmony import */ var _components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/choose-hdck/choose-hdck.component */ "./src/app/modules/handle-invoice-student/components/choose-hdck/choose-hdck.component.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _modules_handle_invoice_handle_invoice_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @modules/handle-invoice/handle-invoice.module */ "./src/app/modules/handle-invoice/handle-invoice.module.ts");
/* harmony import */ var _modules_handle_invoice_components_report_tax_invoice_error_report_tax_invoice_error_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @modules/handle-invoice/components/report-tax-invoice-error/report-tax-invoice-error.component */ "./src/app/modules/handle-invoice/components/report-tax-invoice-error/report-tax-invoice-error.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _components_remove_remove_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/remove/remove.component */ "./src/app/modules/handle-invoice-student/components/remove/remove.component.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var HandleInvoiceStudentModule = /** @class */ (function () {
    function HandleInvoiceStudentModule() {
    }
    HandleInvoiceStudentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _shared_modules_vat_shared_vat_shared_module__WEBPACK_IMPORTED_MODULE_3__["VatSharedModule"],
                _core_library__WEBPACK_IMPORTED_MODULE_4__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_5__["vTranslateModule"],
                _modules_handle_invoice_student_handle_invoice_student_routing__WEBPACK_IMPORTED_MODULE_19__["HandleInvoiceStudentRouting"],
                _modules_handle_invoice_handle_invoice_module__WEBPACK_IMPORTED_MODULE_25__["HandleInvoiceModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_27__["NgxSpinnerModule"]
            ],
            declarations: [
                _modules_handle_invoice_student_components_index_index_component__WEBPACK_IMPORTED_MODULE_18__["IndexComponent"],
                _modules_handle_invoice_student_components_adjust_adjust_form_adjust_form_component__WEBPACK_IMPORTED_MODULE_12__["AdjustFormComponent"],
                _modules_handle_invoice_student_components_adjust_adjust_grip_adjust_grip_component__WEBPACK_IMPORTED_MODULE_13__["AdjustGripComponent"],
                _modules_handle_invoice_student_components_adjust_adjust_invoice_adjust_invoice_component__WEBPACK_IMPORTED_MODULE_14__["AdjustInvoiceComponent"],
                _modules_handle_invoice_student_components_replace_replace_form_replace_form_component__WEBPACK_IMPORTED_MODULE_15__["ReplaceFormComponent"],
                _modules_handle_invoice_student_components_replace_replace_grip_replace_grip_component__WEBPACK_IMPORTED_MODULE_16__["ReplaceGripComponent"],
                _modules_handle_invoice_student_components_replace_replace_invoice_replace_invoice_component__WEBPACK_IMPORTED_MODULE_17__["ReplaceInvoiceComponent"],
                _components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_21__["ChooseHdckComponent"],
                _components_remove_remove_component__WEBPACK_IMPORTED_MODULE_28__["RemoveComponent"]
            ],
            providers: [
                _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_11__["HandleInvoiceService"],
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"],
                _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_11__["AdjustInvoiceResolver"],
                _modules_handle_invoice_shared__WEBPACK_IMPORTED_MODULE_11__["ReplaceInvoiceResolver"],
                _modules_handle_report_hanlde_report_service__WEBPACK_IMPORTED_MODULE_7__["HanldeReportService"],
                _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_8__["VatDeactivateGuard"],
                _shared_router_router_library_service__WEBPACK_IMPORTED_MODULE_9__["RouterLibraryService"],
                _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmService"],
                _modules_handle_invoice_student_shared_replace_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_20__["ReplaceInvoiceStudentResolver"],
                _modules_products_shared__WEBPACK_IMPORTED_MODULE_22__["ProductsService"],
                _modules_template_shared__WEBPACK_IMPORTED_MODULE_24__["TemplateService"],
                _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_29__["ViewInvoiceService"],
                _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_30__["MyBsModalService"]
            ],
            entryComponents: [
                _components_choose_hdck_choose_hdck_component__WEBPACK_IMPORTED_MODULE_21__["ChooseHdckComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_23__["SendDataForTaxComponent"],
                _modules_handle_invoice_components_report_tax_invoice_error_report_tax_invoice_error_component__WEBPACK_IMPORTED_MODULE_26__["ReportTaxInvoiceErrorComponent"],
                _components_remove_remove_component__WEBPACK_IMPORTED_MODULE_28__["RemoveComponent"],
                _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_31__["PreviewInvoiceComponent"]
            ],
        })
    ], HandleInvoiceStudentModule);
    return HandleInvoiceStudentModule;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/handle-invoice-student.routing.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/handle-invoice-student.routing.ts ***!
  \**********************************************************************************/
/*! exports provided: HandleInvoiceStudentRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleInvoiceStudentRouting", function() { return HandleInvoiceStudentRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
/* harmony import */ var _modules_handle_invoice_student_components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/handle-invoice-student/components/index/index.component */ "./src/app/modules/handle-invoice-student/components/index/index.component.ts");
/* harmony import */ var _modules_handle_invoice_student_components_adjust_adjust_invoice_adjust_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component */ "./src/app/modules/handle-invoice-student/components/adjust/adjust-invoice/adjust-invoice.component.ts");
/* harmony import */ var _modules_handle_invoice_student_components_replace_replace_invoice_replace_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component */ "./src/app/modules/handle-invoice-student/components/replace/replace-invoice/replace-invoice.component.ts");
/* harmony import */ var _modules_handle_invoice_student_shared_adjust_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/handle-invoice-student/shared/adjust-invoice-student-resolver.service */ "./src/app/modules/handle-invoice-student/shared/adjust-invoice-student-resolver.service.ts");
/* harmony import */ var _modules_handle_invoice_student_shared_replace_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/handle-invoice-student/shared/replace-invoice-student-resolver.service */ "./src/app/modules/handle-invoice-student/shared/replace-invoice-student-resolver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _modules_handle_invoice_student_components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    {
        path: 'adjust-vat/:originId',
        component: _modules_handle_invoice_student_components_adjust_adjust_invoice_adjust_invoice_component__WEBPACK_IMPORTED_MODULE_4__["AdjustInvoiceComponent"],
        resolve: { init: _modules_handle_invoice_student_shared_adjust_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_6__["AdjustInvoiceStudentResolverService"] },
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__["VatDeactivateGuard"]],
        data: {
            type: '01GTKT',
            brec: 'create_invoice_adjustment',
            status: 'dieuchinhmoi'
        }
    },
    {
        path: 'adjust-sale/:originId',
        component: _modules_handle_invoice_student_components_adjust_adjust_invoice_adjust_invoice_component__WEBPACK_IMPORTED_MODULE_4__["AdjustInvoiceComponent"],
        resolve: { init: _modules_handle_invoice_student_shared_adjust_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_6__["AdjustInvoiceStudentResolverService"] },
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__["VatDeactivateGuard"]],
        data: {
            type: '02GTTT',
            brec: 'create_invoice_adjustment',
            status: 'dieuchinhmoi'
        }
    },
    {
        path: 'replace-vat/:originId',
        component: _modules_handle_invoice_student_components_replace_replace_invoice_replace_invoice_component__WEBPACK_IMPORTED_MODULE_5__["ReplaceInvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__["VatDeactivateGuard"]],
        resolve: { init: _modules_handle_invoice_student_shared_replace_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ReplaceInvoiceStudentResolver"] },
        data: {
            type: '01GTKT',
            brec: 'create_invoice_instead',
            status: 'thaythemoi'
        }
    },
    {
        path: 'replace-sale/:originId',
        component: _modules_handle_invoice_student_components_replace_replace_invoice_replace_invoice_component__WEBPACK_IMPORTED_MODULE_5__["ReplaceInvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__["VatDeactivateGuard"]],
        resolve: { init: _modules_handle_invoice_student_shared_replace_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ReplaceInvoiceStudentResolver"] },
        data: {
            type: '02GTTT',
            brec: 'create_invoice_instead',
            status: 'thaythemoi'
        }
    },
    {
        path: 'edit-adjust-vat/:invoiceId',
        component: _modules_handle_invoice_student_components_adjust_adjust_invoice_adjust_invoice_component__WEBPACK_IMPORTED_MODULE_4__["AdjustInvoiceComponent"],
        resolve: { init: _modules_handle_invoice_student_shared_adjust_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_6__["AdjustInvoiceStudentResolverService"] },
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__["VatDeactivateGuard"]],
        data: {
            type: '01GTKT',
            brec: 'create_invoice_adjustment',
        }
    },
    {
        path: 'edit-adjust-sale/:invoiceId',
        component: _modules_handle_invoice_student_components_adjust_adjust_invoice_adjust_invoice_component__WEBPACK_IMPORTED_MODULE_4__["AdjustInvoiceComponent"],
        resolve: { init: _modules_handle_invoice_student_shared_adjust_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_6__["AdjustInvoiceStudentResolverService"] },
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__["VatDeactivateGuard"]],
        data: {
            type: '02GTTT',
            brec: 'create_invoice_adjustment',
        }
    },
    {
        path: 'edit-replace-vat/:invoiceId',
        component: _modules_handle_invoice_student_components_replace_replace_invoice_replace_invoice_component__WEBPACK_IMPORTED_MODULE_5__["ReplaceInvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__["VatDeactivateGuard"]],
        resolve: { init: _modules_handle_invoice_student_shared_replace_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ReplaceInvoiceStudentResolver"] },
        data: {
            type: '01GTKT',
            brec: 'create_invoice_instead',
        }
    },
    {
        path: 'edit-replace-sale/:invoiceId',
        component: _modules_handle_invoice_student_components_replace_replace_invoice_replace_invoice_component__WEBPACK_IMPORTED_MODULE_5__["ReplaceInvoiceComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__["VatDeactivateGuard"]],
        resolve: { init: _modules_handle_invoice_student_shared_replace_invoice_student_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ReplaceInvoiceStudentResolver"] },
        data: {
            type: '02GTTT',
            brec: 'create_invoice_instead',
        }
    },
];
var HandleInvoiceStudentRouting = /** @class */ (function () {
    function HandleInvoiceStudentRouting() {
    }
    HandleInvoiceStudentRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], HandleInvoiceStudentRouting);
    return HandleInvoiceStudentRouting;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/shared/adjust-invoice-student-resolver.service.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/shared/adjust-invoice-student-resolver.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: AdjustInvoiceStudentResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustInvoiceStudentResolverService", function() { return AdjustInvoiceStudentResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_handle_invoice_student_shared_handle_invoice_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/handle-invoice-student/shared/handle-invoice-student.service */ "./src/app/modules/handle-invoice-student/shared/handle-invoice-student.service.ts");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdjustInvoiceStudentResolverService = /** @class */ (function () {
    function AdjustInvoiceStudentResolverService(router, handleInvoiceService, authService) {
        this.router = router;
        this.handleInvoiceService = handleInvoiceService;
        this.authService = authService;
    }
    AdjustInvoiceStudentResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var check = false;
        var origin_id = route.paramMap.get('originId');
        var invoiceId = route.paramMap.get('invoiceId');
        var loaiHoaDon = route.data.type;
        var isTT78 = false;
        var isViewTT32 = false;
        if (route.queryParams['status'] === 'viewInvTT32') {
            isViewTT32 = true;
        }
        var infoDangKy = this.authService.getInfoRegister();
        if (infoDangKy && infoDangKy.id) {
            if (infoDangKy.status == "CHAP_NHAN")
                isTT78 = true;
        }
        if (isTT78 == true && isViewTT32)
            isTT78 = false;
        if (invoiceId) {
            check = true;
        }
        if (isTT78) {
            return this.handleInvoiceService.showInvoiceAdjustResolverTT78(origin_id || invoiceId, check, loaiHoaDon)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (rs) {
                _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                if (rs[0].status === 'success' && rs[1].status === 'success' && rs[2].status === 'success' && rs[3].status === 'success') {
                    var templates = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertTemplatesToInvoiceResolver(rs[3]);
                    return [
                        templates,
                        rs[0].data,
                        '',
                        rs[1].data.invoice,
                        rs[2].data.invoice_reports
                    ];
                }
                else {
                    if (loaiHoaDon === '01GTKT') {
                        _this.router.navigate(['/system/vat-invoice']);
                    }
                    else {
                        _this.router.navigate(['/system/sale-invoice']);
                    }
                    return null;
                }
            }));
        }
        else {
            return this.handleInvoiceService.showInvoiceAdjustResolver(origin_id || invoiceId, check, loaiHoaDon)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (rs) {
                _core_library__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                if (rs[0].status === 'success' && rs[1].status === 'success' && rs[2].status === 'success' && rs[3].status === 'success') {
                    var invoice_releases = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].convertDataToInvoiceResolver(rs[0]);
                    return [
                        invoice_releases,
                        rs[1].data,
                        '',
                        rs[2].data.invoice,
                        rs[3].data.invoice_reports,
                    ];
                }
                else {
                    if (loaiHoaDon === '01GTKT') {
                        _this.router.navigate(['/system/vat-invoice']);
                    }
                    else {
                        _this.router.navigate(['/system/sale-invoice']);
                    }
                    return null;
                }
            }));
        }
    };
    AdjustInvoiceStudentResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_handle_invoice_student_shared_handle_invoice_student_service__WEBPACK_IMPORTED_MODULE_4__["HandleInvoiceStudentService"],
            _core_index__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], AdjustInvoiceStudentResolverService);
    return AdjustInvoiceStudentResolverService;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/shared/handle-invoice-student.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/shared/handle-invoice-student.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: HandleInvoiceStudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleInvoiceStudentService", function() { return HandleInvoiceStudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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





var HandleInvoiceStudentService = /** @class */ (function () {
    function HandleInvoiceStudentService(apiService, authService) {
        this.apiService = apiService;
        this.authService = authService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format('YYYY-MM-DD');
    }
    HandleInvoiceStudentService.prototype.getAllStudent = function (params) {
        var company_type = this.authService.getCurrentUser().account.company_type;
        var filter_value;
        switch (company_type) {
            case 'KHAU_TRU':
                filter_value = '01GTKT';
                break;
            case 'TRUC_TIEP':
                filter_value = '02GTTT';
                break;
            default:
                break;
        }
        var fields = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].danh_sach_truong.hoa_don;
        var includes = 'includes[]=invoice_wrongs&includes[]=invoice_files&includes[]=invoice_reports&options[is_view_index]=1&options[with_invoice_wrongs]=1';
        var filter_string = "\n    &filter_groups[1][or]=true\n    &filter_groups[1][filters][0][key]=originInvoiceExported\n    &filter_groups[1][filters][0][value]=true\n    &filter_groups[1][filters][0][operator]=eq\n    &filter_groups[1][filters][1][key]=adjustment_type\n    &filter_groups[1][filters][1][value]=1\n    &filter_groups[1][filters][1][operator]=eq\n    &filter_groups[1][filters][1][not]=true\n\n    &filter_groups[2][filters][0][key]=send_department_status\n    &filter_groups[2][filters][0][value]=KHONG_HOP_LE\n    &filter_groups[2][filters][0][operator]=eq\n    &filter_groups[2][filters][0][not]=true\n    ";
        var filter = filter_value ? filter_string + ("&filter_groups[2][filters][0][key]=template.invoice_type&filter_groups[2][filters][0][value]=" + filter_value + "&filter_groups[2][filters][0][operator]=eq") : filter_string;
        if (params) {
            filter += '&' + params + '&filter_groups[3][filters][3][key]=invoice_type&filter_groups[3][filters][3][value]=08HSPT&filter_groups[3][filters][3][operator]=eq&filter_groups[3][filters][3][not]=true';
        }
        var sort = '&sort[0][key]=status_order&sort[0][direction]=ASC';
        return this.apiService.getDataTable('/invoices', includes + fields + filter, sort);
    };
    HandleInvoiceStudentService.prototype.showInvoiceAdjustResolver = function (id, edit, loaiHoaDon) {
        var arr = [
            this.apiService.get("/invoice-releases?includes[]=template&filter_groups[0][filters][0][key]=release_status&filter_groups[0][filters][0][value][0]=DA_TB_THUE&filter_groups[0][filters][0][value][1]=DA_HUY_SO&filter_groups[0][filters][0][operator]=in&filter_groups[0][filters][2][key]=start_using_date&filter_groups[0][filters][2][value]=" + this.currentDate + "&filter_groups[0][filters][2][operator]=lte&filter_groups[1][filters][1][key]=template.invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq"),
            this.apiService.get('/get-lists-by-listtype-code/DM_NHOM_KHACH_HANG,DM_LOAI_TIEN,DM_HINH_THUC_THANH_TOAN,DM_DON_VI_TINH,DM_TY_LE_VAT,DM_DINH_KHOAN,DM_NOI_XUAT_HOA_DON,DM_QUOC_GIA,DM_TAI_KHOAN_NGAN_HANG,DM_HINH_THUC_THU,DM_TY_LE_MIEN_GIAM_HOC_PHI'),
            this.apiService.get('/invoices/' + id + '?includes[]=invoice_files&includes[]=invoice_products&includes[]=invoice_options&includes[]=origin&includes[]=origin.invoice_products&includes[]=origin.invoice_options'),
            this.apiService.get("/invoice-reports?filter_groups[0][filters][1][key]=invoice_id&filter_groups[0][filters][1][value]=" + id + "&filter_groups[0][filters][1][operator]=eq&filter_groups[1][filters][1][key]=status&filter_groups[1][filters][1][value]=HOAT_DONG&filter_groups[1][filters][1][operator]=eq&filter_groups[1][filters][4][key]=type&filter_groups[1][filters][4][value]=DIEU_CHINH&filter_groups[1][filters][4][operator]=eq&filter_groups[2][filters][4][key]=is_paper_report&filter_groups[2][filters][4][value]=0&filter_groups[2][filters][4][operator]=eq"),
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(arr);
    };
    HandleInvoiceStudentService.prototype.showInvoiceAdjustResolverTT78 = function (id, edit, loaiHoaDon) {
        var arr = [
            this.apiService.get('/get-lists-by-listtype-code/DM_NHOM_KHACH_HANG,DM_LOAI_TIEN,DM_HINH_THUC_THANH_TOAN,DM_DON_VI_TINH,DM_TY_LE_VAT,DM_DINH_KHOAN,DM_NOI_XUAT_HOA_DON,DM_QUOC_GIA,DM_TAI_KHOAN_NGAN_HANG,DM_HINH_THUC_THU,DM_TY_LE_MIEN_GIAM_HOC_PHI'),
            this.apiService.get('/invoices/' + id + '?includes[]=invoice_files&includes[]=invoice_products&includes[]=invoice_options&includes[]=origin&includes[]=origin.invoice_products&includes[]=origin.invoice_options'),
            this.apiService.get("/invoice-reports?filter_groups[0][filters][1][key]=invoice_id&filter_groups[0][filters][1][value]=" + id + "&filter_groups[0][filters][1][operator]=eq&filter_groups[1][filters][1][key]=status&filter_groups[1][filters][1][value]=HOAT_DONG&filter_groups[1][filters][1][operator]=eq&filter_groups[1][filters][4][key]=type&filter_groups[1][filters][4][value]=DIEU_CHINH&filter_groups[1][filters][4][operator]=eq&filter_groups[2][filters][4][key]=is_paper_report&filter_groups[2][filters][4][value]=0&filter_groups[2][filters][4][operator]=eq"),
            this.apiService.get("/templates?filter_groups[0][filters][0][key]=is_decree_new&filter_groups[0][filters][0][value]=1&filter_groups[0][filters][0][operator]=eq&filter_groups[1][filters][1][key]=invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq")
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(arr);
    };
    HandleInvoiceStudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _core_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HandleInvoiceStudentService);
    return HandleInvoiceStudentService;
}());



/***/ }),

/***/ "./src/app/modules/handle-invoice-student/shared/replace-invoice-student-resolver.service.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/handle-invoice-student/shared/replace-invoice-student-resolver.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: ReplaceInvoiceStudentResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceInvoiceStudentResolver", function() { return ReplaceInvoiceStudentResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
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





var ReplaceInvoiceStudentResolver = /** @class */ (function () {
    function ReplaceInvoiceStudentResolver(vatService, router, authService) {
        this.vatService = vatService;
        this.router = router;
        this.authService = authService;
    }
    ReplaceInvoiceStudentResolver.prototype.resolve = function (route, state) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var check = false;
        var dmHS = ',DM_TY_LE_MIEN_GIAM_HOC_PHI,DM_HINH_THUC_THU,DM_LOP_HOC';
        var origin_id = route.paramMap.get('originId');
        var invoiceId = route.paramMap.get('invoiceId');
        var loaiHoaDon = route.data.type;
        var isTT78 = false;
        var isViewTT32 = false;
        if (route.queryParams['status'] === 'viewInvTT32') {
            isViewTT32 = true;
        }
        var infoDangKy = this.authService.getInfoRegister();
        if (infoDangKy && infoDangKy.id) {
            if (infoDangKy.status == "CHAP_NHAN")
                isTT78 = true;
        }
        if (isTT78 == true && isViewTT32)
            isTT78 = false;
        if (invoiceId) {
            check = true;
        }
        if (isTT78) {
            return this.vatService.showInvoiceReplaceResolverTT78(origin_id || invoiceId, check, loaiHoaDon, dmHS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                if (rs[0].status == "success" && rs[1].status == "success" && rs[2].status == "success" && rs[3].status == "success") {
                    var templates = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToInvoiceResolver(rs[0]);
                    return [
                        templates,
                        rs[1].data,
                        rs[2].data.products,
                        rs[3].data.configs,
                        rs[4].data.invoice,
                        rs[5].data.invoice_reports,
                    ];
                }
                else {
                    if (loaiHoaDon == "01GTKT")
                        _this.router.navigate(['/system/vat-invoice']);
                    else
                        _this.router.navigate(['/system/sale-invoice']);
                    return null;
                }
            }));
        }
        else {
            return this.vatService.showInvoiceReplaceResolver(origin_id || invoiceId, check, loaiHoaDon, dmHS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rs) {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                if (rs[0].status == "success" && rs[1].status == "success" && rs[2].status == "success" && rs[3].status == "success") {
                    var invoice_releases = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertDataToInvoiceResolver(rs[0]);
                    return [
                        invoice_releases,
                        rs[1].data,
                        rs[2].data.products,
                        rs[3].data.configs,
                        rs[4].data.invoice,
                        rs[5].data.invoice_reports,
                    ];
                }
                else {
                    if (loaiHoaDon == "01GTKT")
                        _this.router.navigate(['/system/vat-invoice']);
                    else
                        _this.router.navigate(['/system/sale-invoice']);
                    return null;
                }
            }));
        }
    };
    ReplaceInvoiceStudentResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_modules_vat_shared__WEBPACK_IMPORTED_MODULE_3__["VatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ReplaceInvoiceStudentResolver);
    return ReplaceInvoiceStudentResolver;
}());



/***/ })

}]);
//# sourceMappingURL=handle-invoice-student-handle-invoice-student-module.js.map