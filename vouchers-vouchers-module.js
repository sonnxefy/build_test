(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vouchers-vouchers-module"],{

/***/ "./src/app/core/library/invoice/my-bsmodel.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/library/invoice/my-bsmodel.service.ts ***!
  \************************************************************/
/*! exports provided: MyBsModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBsModalService", function() { return MyBsModalService; });
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MyBsModalService = /** @class */ (function (_super) {
    __extends(MyBsModalService, _super);
    function MyBsModalService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MyBsModalService;
}(ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__["BsModalService"]));



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



/***/ }),

/***/ "./src/app/modules/vouchers/components/import-voucher-from-excel/import-voucher-from-excel.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/import-voucher-from-excel/import-voucher-from-excel.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"import-invoices\">\r\n  <form class=\"form-import-invoices\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">{{ _translate.MENU.import_license_from_excel}}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalImportRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"padding-bottom: 0px;\">\r\n      <div class=\"row inport-selector\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"select-file\">\r\n            <div class=\"field field-first\" style=\"width: 44%;\">\r\n              <div class=\"label\">{{ _translate.MENU.voucher_form}}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [items]=\"templates\" displayExpr=\"name\" [(value)]=\"template_id\" valueExpr=\"value\"\r\n                  [disabled]=\"disabledInvoiceReleases\" (onValueChanged)=\"onInvoiceTemplate($event)\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n            <div class=\"field field-first\" style=\"width: 44%;\">\r\n              <div class=\"label\">Mẫu thư XN</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [items]=\"templatesTXN\" displayExpr=\"name\" [(value)]=\"templatesTXN_id\" valueExpr=\"value\"\r\n                  [disabled]=\"disabledInvoiceReleases\" (onValueChanged)=\"onInvoiceTemplateTXN($event)\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"field field-first\" style=\"width: 44%;\">\r\n              <div class=\"label\">{{ _translate.CONTROLL.LABEL.invoice_form}}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box  displayExpr=\"name\"\r\n                               valueExpr=\"value\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div> -->\r\n            <!-- <div class=\"field field-first\" style=\"width: 27%;\">\r\n              <div class=\"label\" style=\"width: 135px;\">{{ _translate.CONTROLL.LABEL.export_form }}</div>\r\n              <div class=\"value\">\r\n                <dx-select-box [(value)]=\"htXuat\" displayExpr=\"name\" valueExpr=\"code\" [items]=\"htXuatOptions\"\r\n                  [disabled]=\"!configs.system_parameter.allow_keep_invoice_number\">\r\n                </dx-select-box>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"select-file\">\r\n            <div class=\"field\">\r\n              <div class=\"label\">{{ _translate.CONTROLL.LABEL.file_name }}</div>\r\n              <div class=\"value\">\r\n                <dx-text-box [readOnly]=\"true\" style=\"width: 92.5%!important; border-style: solid!important;\"\r\n                  [value]=\"fileName\">\r\n                </dx-text-box>\r\n              </div>\r\n              <div class=\"btn-select-file\" style=\"margin-left: 30px;margin-top: 13px;\">\r\n                <a href=\"javascript:void(0)\" class=\"support-link\" (click)=\"napDuLieuTuBangKe()\">\r\n                  <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx, .xls\" multiple=\"false\" style=\"display: none;\"\r\n                    (change)=\"onFileChanged($event)\" />\r\n                  <span>{{ _translate.CONTROLL.LABEL.select_file }}</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col-md-5\">\r\n            <div class=\"select-file\">\r\n              <div class=\"field\" *ngIf=\"!isAllowEditInvoiceDate\">\r\n                <div class=\"label\" style=\"width: 135px;\">Ngày xuất hóa đơn</div>\r\n                <div class=\"value\">\r\n                  <dx-date-box\r\n                    [(value)]=\"invoice_date\"\r\n                    displayFormat=\"dd/MM/yyyy\"\r\n                    dateSerializationFormat=\"yyyy-MM-dd\"\r\n                    >\r\n                  </dx-date-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n      </div>\r\n      <div class=\"note-template-import\">\r\n        <p><span style=\"font-weight: 600; color: red; padding-right: 5px;\">{{ _translate.CONTROLL.LABEL.note1 }}</span>\r\n          {{ _translate.CONTROLL.LABEL.import_list_license_from_file_excel }}</p>\r\n        <p style=\"margin-left: 48px;\">{{ _translate.CONTROLL.LABEL.correct_format_download_template }} <a\r\n            href=\"javascript:void(0)\" style=\"font-weight: 600\" (click)=\"getFileTemp()\">{{\r\n            _translate.CONTROLL.LABEL.click_here }}</a></p>\r\n      </div>\r\n      <div class=\"read-file\">\r\n        <dx-button text=\"{{ _translate.CONTROLL.LABEL.read_file_excel }}\" type=\"default\" [disabled]=\"isDisReadFile\"\r\n          (click)=\"chonDocFile()\"></dx-button>\r\n      </div>\r\n      <!-- phần table hiển thị -->\r\n      <div class=\"row invoice-table\">\r\n        <div class=\"col-md-12\">\r\n          <dx-data-grid id=\"gridImportInvoice\" [dataSource]=\"dataSource\" [showBorders]=\"true\" [showRowLines]=\"true\"\r\n            [wordWrapEnabled]=\"true\" [columnAutoWidth]=\"false\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\"\r\n            [columnResizingMode]=\"true\" (onContextMenuPreparing)=\"onContextMenuPreparing($event)\"\r\n            (onEditorPreparing)=\"onEditorPreparing($event)\" (onContentReady)=\"onContentReady($event)\"\r\n            (onCellPrepared)=\"onCellPrepared($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n            (onRowUpdated)=\"onRowUpdated($event)\" (onRowRemoving)=\"onRowRemoving($event)\"\r\n            (onKeyDown)=\"onGripKeyDown($event)\">\r\n            <dxo-scrolling mode=\"virtual\"></dxo-scrolling>\r\n            <dxo-editing mode=\"cell\" [allowUpdating]=\"true\" [allowDeleting]=\"true\" [useIcons]=\"true\">\r\n            </dxo-editing>\r\n            <dxo-sorting mode=\"false\"></dxo-sorting>\r\n            <dxo-column-fixing [enabled]=\"true\"></dxo-column-fixing>\r\n            <!-- ngày chứng từ -->\r\n            <dxi-column dataField=\"license_date\" [width]=\"130\" caption=\"{{infoColumn('license_date').column_name}}\"\r\n              alignment=\"left\" [fixed]=\"true\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\"\r\n              fixedPosition=\"left\" dataType=\"date\" [editorOptions]=\"{useMaskBehavior:true}\">\r\n            </dxi-column>\r\n            <!-- Họ tên -->\r\n            <dxi-column dataField=\"taxpayers_name\" caption=\"{{infoColumn('taxpayers_name').column_name}}\" [width]=\"140\"\r\n              alignment=\"center\" [fixed]=\"true\" fixedPosition=\"left\">\r\n            </dxi-column>\r\n            <!-- mã số thuế -->\r\n            <dxi-column dataField=\"taxpayers_tax_code\" [width]=\"140\"\r\n              caption=\"{{infoColumn('taxpayers_tax_code').column_name}}\" alignment=\"center\" [fixed]=\"true\"\r\n              fixedPosition=\"left\"></dxi-column>\r\n            <!-- quốc tịch -->\r\n            <dxi-column dataField=\"nationality\" [width]=\"100\" caption=\"{{infoColumn('nationality').column_name}}\"\r\n              alignment=\"center\"></dxi-column>\r\n            <!-- cá nhân cư trú -->\r\n            <dxi-column *ngIf=\"infoColumn('resident_individual').is_visible\" dataField=\"resident_individual\"\r\n              [width]=\"100\" caption=\"{{infoColumn('resident_individual').column_name}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- địa chỉ  -->\r\n            <dxi-column dataField=\"taxpayers_address\" [width]=\"180\"\r\n              caption=\"{{infoColumn('taxpayers_address').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- số điện thoại -->\r\n            <dxi-column dataField=\"taxpayers_mobile\" [width]=\"120\"\r\n              caption=\"{{infoColumn('taxpayers_mobile').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- email -->\r\n            <dxi-column dataField=\"taxpayers_email\" [width]=\"150\"\r\n              caption=\"{{infoColumn('taxpayers_email').column_name}}\" alignment=\"left\">\r\n              <dxi-validation-rule type=\"pattern\" [pattern]=\"emailPattern\"\r\n                message=\"Email {{ _translate.VALIDATION.not_pattern }}\">\r\n              </dxi-validation-rule>\r\n            </dxi-column>\r\n            <!-- số CMND -->\r\n            <dxi-column dataField=\"id_card\" [width]=\"120\" caption=\"{{infoColumn('id_card').column_name}}\"\r\n              alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Nơi cấp -->\r\n            <dxi-column dataField=\"card_issuer_address\" [width]=\"200\"\r\n              caption=\"{{infoColumn('card_issuer_address').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- ngày cấp -->\r\n            <dxi-column dataField=\"card_issuer_date\" [width]=\"100\"\r\n              caption=\"{{infoColumn('card_issuer_date').column_name}}\" alignment=\"left\" format=\"dd/MM/yyyy\"\r\n              dateSerializationFormat=\"yyyy/MM/dd\" dataType=\"date\">\r\n            </dxi-column>\r\n            <!-- Khoản thu nhập -->\r\n            <dxi-column dataField=\"income\" [width]=\"200\" caption=\"{{infoColumn('income').column_name}}\"\r\n              alignment=\"left\">\r\n            </dxi-column>\r\n\r\n            <!-- Khoản đóng bảo hiểm bắt buộc -->\r\n            <dxi-column dataField=\"compulsory_insurance_payment\" [width]=\"100\"\r\n              *ngIf=\"inforFields('tien-dong-bao-hiem-nnt')\"\r\n              caption=\"{{infoColumn('compulsory_insurance_payment').column_name}}\" alignment=\"left\" dataType=\"number\"\r\n              [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- Tháng trả thu nhập -->\r\n            <dxi-column dataField=\"month_pay_income\" [width]=\"100\"\r\n              caption=\"{{infoColumn('month_pay_income').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Năm trả thu nhập -->\r\n            <dxi-column dataField=\"year_pay_income\" [width]=\"100\"\r\n              caption=\"{{infoColumn('year_pay_income').column_name}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Tổng thu nhập thuế phải khấu trừ -->\r\n            <dxi-column dataField=\"total_taxable_income_deducted\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\" *ngIf=\"inforFields('tien-chiu-thue-nnt')\"\r\n              caption=\"{{infoColumn('total_taxable_income_deducted').column_name}}\" alignment=\"left\" dataType=\"number\"\r\n              [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- Tổng thu nhập tính thuế -->\r\n            <dxi-column dataField=\"total_taxable_income\" [editorOptions]=\"{ format: formatter.tong_tien }\" [width]=\"100\"\r\n              caption=\"{{infoColumn('total_taxable_income').column_name}}\" alignment=\"left\" dataType=\"number\"\r\n              *ngIf=\"inforFields('tien-tinh-thue-nnt')\" [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- Số thuế thu nhập cá nhân đã khấu trừ -->\r\n            <dxi-column dataField=\"amount_personal_income_tax_withheld\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\" *ngIf=\"inforFields('tien-thue-da-khau-tru-nnt')\"\r\n              caption=\"{{infoColumn('amount_personal_income_tax_withheld').column_name}}\" [format]=\"formatter.tong_tien\"\r\n              alignment=\"left\" dataType=\"number\">\r\n            </dxi-column>\r\n            <!-- Tổng thu nhập chịu thuế phải trả -->\r\n            <dxi-column dataField=\"total_taxable_income_paid\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              [width]=\"100\" caption=\"{{infoColumn('total_taxable_income_paid').column_name}}\" alignment=\"left\"\r\n              dataType=\"number\" [format]=\"formatter.tong_tien\" *ngIf=\"inforFields('tien-thue-da-tra-nnt')\">\r\n            </dxi-column>\r\n            <!-- Số thu nhập cá nhân còn được nhận -->\r\n            <dxi-column dataField=\"amount_personal_income_still_received\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\" *ngIf=\"inforFields('tien-duoc-nhan-nnt')\"\r\n              caption=\"{{infoColumn('amount_personal_income_still_received').column_name}}\" alignment=\"left\"\r\n              dataType=\"number\" [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- Thư xác nhận -->\r\n            <!-- Chức vụ -->\r\n            <dxi-column dataField=\"position\" [width]=\"100\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.GRID.USER.position}}\" alignment=\"center\">\r\n            </dxi-column>\r\n            <!-- Ngày đến việt nam -->\r\n            <dxi-column dataField=\"date_to_vietnam\" [width]=\"100\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.day_came_to_Viet_Nam}}\" alignment=\"left\" dataType=\"date\"\r\n              format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\">\r\n            </dxi-column>\r\n            <!-- THu nhập từ -->\r\n            <dxi-column dataField=\"income_from_date\" [width]=\"100\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.income_in_the_period_from}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- THu nhập đến -->\r\n            <dxi-column dataField=\"income_to_date\" [width]=\"100\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"Thu nhập trong giai đoạn đến\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Thu nhập chịu thuế -->\r\n            <dxi-column dataField=\"income_taxes\" [width]=\"100\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.income_taxes}}\" alignment=\"left\" dataType=\"number\"\r\n              [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- Số tiền chịu thuế tại việt nam -->\r\n            <dxi-column dataField=\"income_taxes_in_vietnam\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.taxable_amount_in_Vietnam}}\" alignment=\"left\" dataType=\"number\"\r\n              [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- Số tiền chịu thuế tại nước ngoài -->\r\n            <dxi-column dataField=\"income_taxable_abroad\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.in_a_foreign_country}}\" alignment=\"left\" dataType=\"number\"\r\n              [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- Các khoản bị khấu trừ ngài việt nam  -->\r\n            <dxi-column dataField=\"deductions_outside_vietnam\" [width]=\"100\"\r\n              [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.deductions_outside_Vietnam}}\" alignment=\"left\" dataType=\"number\"\r\n              [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- thuế thu nhập cá nhân -->\r\n            <dxi-column dataField=\"personal_income_tax\" [width]=\"100\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.personal_income_tax}}\" alignment=\"left\" dataType=\"number\"\r\n              [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- các khoản đóng bảo hiểm -->\r\n            <dxi-column dataField=\"insurance_payments\" [width]=\"100\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.insurance_contributions}}\" alignment=\"left\" dataType=\"number\"\r\n              [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- các khoản bị khấu trừ khác -->\r\n            <dxi-column dataField=\"deductions\" [width]=\"100\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.other_deductions}}\" alignment=\"left\" dataType=\"number\"\r\n              [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- Tiền thuê nhà -->\r\n            <dxi-column dataField=\"rent_money\" [width]=\"100\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.house_rent}}\" alignment=\"left\" dataType=\"number\"\r\n              [format]=\"formatter.tong_tien\">\r\n            </dxi-column>\r\n            <!-- Số hợp đồng  -->\r\n            <dxi-column dataField=\"contract_number\" [width]=\"100\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.vehicle_contract_number}}\" alignment=\"left\">\r\n            </dxi-column>\r\n            <!-- Ngày hợp đồng  -->\r\n            <dxi-column dataField=\"contract_date\" [width]=\"100\" [editorOptions]=\"{ format: formatter.tong_tien }\"\r\n              caption=\"{{_translate.CONTROLL.LABEL.day_contract}}\" alignment=\"center\" dataType=\"date\"\r\n              dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\">\r\n            </dxi-column>\r\n            <!-- <div id=\"context-table\" *dxTemplate=\"let d of 'deleteColumn'\">\r\n              <a class=\"delete-row\" href=\"javascript:void(0)\"><i class=\"fa fa-times\"></i></a>\r\n            </div> -->\r\n\r\n            <div *dxTemplate=\"let data of 'DinhKemFile'\">\r\n              <a href=\"javascript:void(0)\" *ngIf=\"data.data.number_of_vouchers != ''\">\r\n                <input type=\"file\" id=\"file-dinh-kem\" [attr.data-rowindex]=\"data.rowIndex\"\r\n                  accept=\".xlsx, .docx, .doc, .pdf, .xls, .xml\" multiple=\"false\" style=\"display: none;\" />\r\n                <!-- <span><i class=\"fa fa-file\"></i></span> -->\r\n                {{ _translate.CONTROLL.LABEL.select_file }}\r\n                <p>{{data.data.file_attach_name}}</p>\r\n              </a>\r\n            </div>\r\n            <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n            <dxo-paging [enabled]=\"true\"></dxo-paging>\r\n          </dx-data-grid>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7\">\r\n          <div class=\"note-footer\">\r\n            <p style=\"margin-left: 0;\"><span style=\"font-weight: 500; color: red;\">{{ _translate.GRID.GENERAL.note\r\n                }}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.can_edit_delete_on_grid }}</p>\r\n            <!-- <p><span class=\"mau-vang\"> </span>{{ _translate.CONTROLL.LABEL.yellow_number_of_voucher }}</p> -->\r\n            <p><span class=\"mau-do\"> </span>{{ _translate.CONTROLL.LABEL.red_incorrect_format }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <div class=\"note-footer\" style=\"text-align: right; margin-right: 50px;\">\r\n            <p style=\"padding: 8px;\"></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.number_of_valid_documents }} <span\r\n                style=\"color: seagreen; font-weight: 600\">{{totalInvoiceInvalid}}</span></p>\r\n            <p>{{ _translate.CONTROLL.LABEL.number_of_voucher_wrong_format }} <span\r\n                style=\"color: red; font-weight: 600\">{{totalErrorInvoice}}</span></p>\r\n            <!-- <p>{{ _translate.CONTROLL.LABEL.number_of_voucher_duplicate }} <span\r\n                style=\"color: yellow; font-weight: 600\">{{totalDuplicateInvoice}}</span></p> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <div class=\"col-md-4\">\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\Xem.png\" text=\"{{ _translate.CONTROLL.BUTTON.preview_voucher }}\"\r\n          type=\"default\" (click)=\"preview()\"></dx-button>\r\n          <dx-button disableDoubleClick *ngIf=\"!isVisibleBtnSubmit\" icon=\"assets\\img\\icons\\Xem.png\" text=\"{{ _translate.CONTROLL.BUTTON.view_voucher }}\" (click)=\"xemChungTu()\"\r\n          type=\"default\"></dx-button>\r\n      </div>\r\n      <div class=\"col-md-8 btn-right\">\r\n        <dx-button disableDoubleClick text=\"{{ _translate.CONTROLL.BUTTON.come_back}}\" type=\"default\" icon=\"assets\\img\\icons\\QuayLai.png\"\r\n          (click)=\"dong()\">\r\n        </dx-button>\r\n        <!-- <dx-button *ngIf=\"isVisibleBtnSubmit\" text=\"Xuất dữ liệu trên lưới ra Excel\"\r\n          icon=\"assets\\img\\icons\\XuatFile.png\" (click)=\"xuatFile()\" type=\"default\"></dx-button> -->\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit\" text=\"Ghi tạm\" icon=\"assets\\img\\icons\\GhiTam.png\" type=\"default\" (click)=\"submit('LUU')\"></dx-button>\r\n        <!-- <dx-button *ngIf=\"isVisibleBtnSubmit\"  text=\"Xuất chờ ký\" icon=\"assets\\img\\icons\\XuatHD.png\" (click)=\"submit('CHO_KY')\" type=\"default\" ></dx-button> -->\r\n        <dx-button disableDoubleClick *ngIf=\"isVisibleBtnSubmit\" text=\"{{ _translate.CONTROLL.BUTTON.export_vouchers}}\" icon=\"assets\\img\\icons\\XuatHD.png\"\r\n          type=\"default\" (click)=\"submit('XUAT')\"></dx-button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- popup -->\r\n\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.processing }}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopupImport\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n\r\n  </div>\r\n</dx-popup>\r\n\r\n<dx-popup class=\"popup\" [width]=\"500\" [height]=\"160\" [showTitle]=\"true\" title=\"{{ _translate.NOTIFY.notify }}\"\r\n  [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\" [(visible)]=\"popupCachNapDuLieu\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <p>{{ _translate.CONTROLL.LABEL.please_choose_load_data }} </p>\r\n    <div class=\"text-center\" style=\"margin-top: 25px\">\r\n      <dx-button text=\"{{ _translate.CONTROLL.BUTTON.replace_all}}\" type=\"default\" (click)=\"thayThe($event)\">\r\n      </dx-button>\r\n      <dx-button text=\"{{ _translate.CONTROLL.BUTTON.add_more}}\" type=\"default\" (click)=\"themTiep($event)\"></dx-button>\r\n    </div>\r\n  </div>\r\n\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/vouchers/components/import-voucher-from-excel/import-voucher-from-excel.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/import-voucher-from-excel/import-voucher-from-excel.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".import-invoices .dx-texteditor{border-radius:0;display:inline-block;margin-right:8px;height:28px;max-height:32px}.import-invoices .select-file .field>div{display:inline-block;vertical-align:middle}.import-invoices .select-file{width:100%;display:inline-block;margin:0}.import-invoices .select-file .field .label{width:90px;margin-right:10px;text-align:right;margin-top:7px}.import-invoices .select-file .field .value{width:35% !important;margin-top:10px}.import-invoices .select-file .field.field-first{display:inline-block}.import-invoices .select-file .field.field-first .value{width:calc(100% - 150px) !important}::ng-deep .import-invoices .select-file .field .dx-texteditor{width:100% !important}.support-link{top:-2px;position:relative;padding:5px 25px 7px 25px;background-color:#337ab7;border-color:#2d6da3;color:#fff;text-decoration:none}.support-link.mgr-15{margin-right:15px}.support-link img{margin-right:10px;margin-top:-2px}#auto-input{margin-right:75px}.note-template-import{margin-top:10px;margin-left:52px;display:inline-block;width:39%}.read-file{display:inline-block;margin-left:6px;position:relative;top:-10px}.note-footer{margin-top:10px}.note-footer p{margin-left:20px;margin-bottom:5px}.mau-vang{padding-right:15px;margin-right:10px;background-color:yellow}.mau-do{padding-right:15px;margin-right:10px;background-color:red}::ng-deep #gridImportInvoice{height:400px}::ng-deep .btn-right{padding-right:0}::ng-deep .btn-right .dx-button{float:right}::ng-deep .btn-right .dx-button:last-child{margin-right:8px !important}::ng-deep #gridImportInvoice .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit{width:40px;min-width:20px !important}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-validator.dx-datagrid-invalid .dx-highlight-outline::after{border:2px solid #d9534f}::ng-deep .dx-datagrid-rowsview .dx-data-row .dx-cell-modified .dx-highlight-outline::after{border-color:#fff}::ng-deep .form-import-invoices .inport-selector .dx-texteditor-input{padding-bottom:15px}::ng-deep .notify-modal{max-width:22%}::ng-deep .view-invoice{max-width:100%;margin:0px;min-height:100%}\n"

/***/ }),

/***/ "./src/app/modules/vouchers/components/import-voucher-from-excel/import-voucher-from-excel.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/import-voucher-from-excel/import-voucher-from-excel.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ImportVoucherFromExcelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportVoucherFromExcelComponent", function() { return ImportVoucherFromExcelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/data/array_store */ "./node_modules/devextreme/data/array_store.js");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/vouchers/shared */ "./src/app/modules/vouchers/shared/index.ts");
/* harmony import */ var _config_pattern__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @config/pattern */ "./src/app/config/pattern.ts");
/* harmony import */ var _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../view-invoice/view-invoice.component */ "./src/app/modules/vouchers/components/view-invoice/view-invoice.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
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
















var ImportVoucherFromExcelComponent = /** @class */ (function () {
    function ImportVoucherFromExcelComponent(authService, socketService, modalImportService, bsModalViewModel, bsModalImportRef, _location, bsModalRef, modalService, voucherService, spinner) {
        this.authService = authService;
        this.socketService = socketService;
        this.modalImportService = modalImportService;
        this.bsModalViewModel = bsModalViewModel;
        this.bsModalImportRef = bsModalImportRef;
        this._location = _location;
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.voucherService = voucherService;
        this.spinner = spinner;
        this.licenseOptions = [];
        this.fieldDisable = [];
        this.select = {};
        this.licensesArr = [];
        this.emailPattern = _config_pattern__WEBPACK_IMPORTED_MODULE_12__["pattern"].email;
        this.columns = [];
        this.errorImport = false;
        this.countInvoice = 1;
        this.listColumn = [];
        this.formatter = {};
        this.fields = [];
        this.frmData = new _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_11__["VoucherModel"](1);
        this.totalInvoice = 0;
        this.totalLetter = 0;
        this.isDisReadFile = true;
        this.confirmCheckPreview = false;
        this.popupCachNapDuLieu = false;
        this.showPopupImport = false;
        this.fileData = [];
        this.fileName = "";
        this.htXuat = "XuatVaKy";
        this.templates = [];
        this.isThemTiep = true;
        this.valueProgress = 0;
        this.licenseHaveTaxpayerName = [];
        this.disabledInvoiceReleases = false;
        this.dataFormGird = [];
        this.tempKiFile = 0;
        this.DaXuat = false;
        this.ttDaXuatHoaDon = false;
        this.isVisibleBtnSubmit = true;
        this.htXuatOptions = [];
        this.licensesId = [];
        this.lettersArray = [];
        this.isHdGTGT = true;
        this.templatesTXN = [];
        this.isGhiTamTXN = false;
        this.dsThuXacNhan = [];
        this.idDaXuatArray = [];
        this.listpermissions = [];
        this.templatesTXNOptions = []; //trường mở rộng của mẫu chứng từ
        this.templatesOptions = []; // trường mở rộng của mẫu thư xn
        this.fieldsKTTTXN = ['template_id', 'name', 'license_id', 'id_txn']; //Các fields trong model nhưng ko tồn tại trong TXN
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
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return 'Hoàn thành: ' + percent + '%';
        };
        this._translate = this.authService.getTranslate();
        this.configs = this.authService.getConfigs();
        this.listColumn = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].listColumnImportExcelVoucher(this._translate);
        this.currentUser = this.authService.getCurrentUser();
    }
    ImportVoucherFromExcelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectWebsocket();
        this.licenses = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6___default.a({
            key: 'keyData',
            data: []
        });
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_7___default.a({
            store: this.licenses
        });
        this.currentUser = this.authService.getCurrentUser();
        this.listpermissions = this.currentUser.user.permissions.split(',');
        this.taxCode = this.currentUser.account.tax_code;
        if (this.currentUser.account.van_account_info) {
            this.province_name = this.currentUser.account.van_account_info.city_name;
        }
        if (this.licensesImport && this.licensesImport.length > 0) {
            this.select.templateTXN = this.templatesTXN.find(function (template) { return template.value == _this.templatesTXN_id; });
            this.select.template = this.templates.find(function (template) { return template.value == _this.template_id; });
            var isOldTemp = [];
            try {
                isOldTemp = this.select.template.fields.filter(function (p) { return p.code == "tien-dong-bao-hiem-nnt"; });
            }
            catch (err) { }
            if (isOldTemp.length > 0) {
                this.fields = this.select.template.fields;
            }
            else {
                this.fields = this.dataSourceTNCN;
            }
            this.template_code = this.select.template.template_code;
            this.license_series = this.select.template.invoice_series;
            for (var index = 0; index < this.licensesImport.length; index++) {
                var license_options = this.licensesImport[index].license_options;
                license_options = this.converArrayToObject(license_options, "code", "value");
                this.licensesImport[index] = lodash__WEBPACK_IMPORTED_MODULE_15__["merge"](this.licensesImport[index], license_options);
                this.licensesImport[index].TXN = {};
                if (this.licensesImport[index].license_confirm_letters.length > 0) {
                    var license_letters = this.licensesImport[index].license_confirm_letters;
                    license_letters = license_letters.sort(function (a, b) {
                        var dateA = new Date(a.updated_at);
                        var dateB = new Date(b.updated_at);
                        return dateB - dateA;
                    });
                    var license_confirm_letters = license_letters[0];
                    this.licensesImport[index].TXN = license_confirm_letters;
                    if (license_confirm_letters.license_confirm_letter_options &&
                        license_confirm_letters.license_confirm_letter_options.length > 0) {
                        var letter_options = this.converArrayToObject(license_confirm_letters.license_confirm_letter_options, "code", "value");
                        this.licensesImport[index] = lodash__WEBPACK_IMPORTED_MODULE_15__["merge"](this.licensesImport[index], letter_options);
                    }
                }
            }
        }
        else {
            if (this.templatesTXN[0]) {
                this.select.templateTXN = this.templatesTXN[0];
                this.templatesTXN_id = this.templatesTXN[0].value;
            }
            if (this.templates[0]) {
                this.select.template = this.templates[0];
                this.template_id = this.templates[0].value;
                var isOldTemp = this.templates[0].fields.filter(function (p) { return p.code == "tien-dong-bao-hiem-nnt"; });
                if (isOldTemp.length > 0) {
                    this.fields = this.templates[0].fields;
                }
                else {
                    this.fields = this.dataSourceTNCN;
                }
                this.template_code = this.templates[0].template_code;
                this.license_series = this.templates[0].invoice_series;
            }
        }
        this.layTruongMoRong();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        this.htXuatOptions = _core_index__WEBPACK_IMPORTED_MODULE_1__["VSelectBoxService"]._htXuatOptions(this._translate);
        if (this.licensesImport) {
            this.layDuLieuTuHoaDonChoXuat();
        }
        else {
            this.loadRow(10);
        }
    };
    // Lấy trường mở rộng
    ImportVoucherFromExcelComponent.prototype.layTruongMoRong = function () {
        var _this = this;
        var templateCurren = {};
        var templateTXNCurrent = {};
        if (this.template_id) {
            templateCurren = this.templates.find(function (t) { return t.value == _this.template_id; });
            this.templatesOptions = templateCurren.fields.filter(function (field) { return field.type == "4"; })
                .map(function (item) {
                return {
                    code: item.code,
                    name: item.name,
                    value: item.value,
                    is_show: item.is_show,
                    data_type: item.data_type
                };
            });
        }
        if (this.templatesTXN_id) {
            templateTXNCurrent = this.templatesTXN.find(function (t) { return t.value == _this.templatesTXN_id; });
            this.templatesTXNOptions = templateTXNCurrent.fields.filter(function (field) { return field.type == "4"; })
                .map(function (item) {
                return {
                    code: item.code,
                    name: item.name,
                    value: item.value,
                    is_show: item.is_show,
                    data_type: item.data_type
                };
            });
        }
    };
    //set lại các cột trong gird
    ImportVoucherFromExcelComponent.prototype.setFormGird = function () {
        var _this = this;
        if (this.columns.length > 0) {
            this.columns.forEach(function (item) {
                _this.dataGrid.columns.forEach(function (column, index) {
                    if (column["dataField"] == item.dataField)
                        _this.dataGrid.columns.splice(index, 1);
                });
            });
        }
        this.columns = [];
        var arrColumns = this.templatesOptions.concat(this.templatesTXNOptions);
        arrColumns.forEach(function (item) {
            if (item.is_show) {
                var oField = {
                    column_code: item.code,
                    column_name: item.name,
                    is_visible: true
                };
                _this.listColumn.push(oField);
                if (item.data_type === 'chu') {
                    var column = {
                        caption: item.name,
                        dataField: item.code,
                        width: 150,
                    };
                    _this.columns.push(column);
                }
                if (item.data_type === 'soluong') {
                    var column = {
                        caption: item.name,
                        dataField: item.code,
                        width: 150,
                        dataType: "number",
                        editorOptions: {
                            format: '#,###'
                        },
                        format: '#,###'
                    };
                    _this.columns.push(column);
                }
                if (item.data_type === 'ngay') {
                    var column = {
                        caption: item.name,
                        dataField: item.code,
                        width: 150,
                        dataType: 'date',
                        format: "dd/MM/yyyy",
                        dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss'
                    };
                    _this.columns.push(column);
                }
            }
        });
        if (this.columns.length > 0) {
            var codeTemplate_1 = lodash__WEBPACK_IMPORTED_MODULE_15__["map"](this.templatesOptions, 'code');
            var index = this.dataGrid.columns.findIndex(function (obj) {
                return obj.dataField === 'position';
            });
            this.columns.forEach(function (item) {
                if (index != -1 && codeTemplate_1.includes(item.dataField)) {
                    _this.dataGrid.columns.splice(index++, 0, item);
                }
                else {
                    _this.dataGrid.columns.push(item);
                }
            });
        }
    };
    ImportVoucherFromExcelComponent.prototype.ngAfterViewInit = function () {
        this.setFormGird();
    };
    ImportVoucherFromExcelComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDonImport().subscribe(function (message) {
            var data = message;
            if (data.Status == 'success') {
                if (data.SvcName == "efy_Sign") {
                    if (data.Data.Name == 'hoadon.xml') {
                        _this.goiApiXuatHoaDon(data.Data.Content);
                    }
                    else if (data.Data.Name == 'ten_filek_the_trung-dc-nhi.xml') {
                        _this.license.issuer_name = data.Data.IssuerName;
                        _this.xuLiApiKhiXuat();
                    }
                    else if (data.Data.Name === 'thu_xac_nhan.pdf') {
                        _this.goiApiXuatHoaDonThu(data.Data.Content);
                    }
                    else {
                        _this.license.license_files.forEach(function (item) {
                            if (item.file_name == data.Data.Name) {
                                item.file_content = data.Data.Content;
                            }
                        });
                        _this.tempKiFile++;
                        if (_this.tempKiFile == _this.license.license_files.length) {
                            _this.xuLiApiKhiXuat();
                        }
                    }
                }
                else if (data.SvcName === 'efy_viewInvoice') {
                    if (data.Status == "success")
                        _this.viewInvoice(data.Data.Content, data.Data.typeView, data.Data.hinhthucxuat, data.Data.invoice_date);
                    else if (data.Status == "error") {
                        var popUp = window.open('about:blank', 'name', 'width=200, height=100');
                        if (popUp == null || typeof (popUp) == 'undefined') {
                        }
                        else
                            popUp.close();
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(data.Description, 'error');
                        _this.spinner.hide();
                    }
                }
            }
            else {
                _this.errorImport = true;
                _this.showPopupImport = false;
                _this.isVisibleBtnSubmit = false;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(data.Description, 'error');
            }
        });
    };
    ImportVoucherFromExcelComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.subXuatHoaDon = this.voucherService.xuatChungTu({
            id: this.license.id,
            xml_string: xml_string,
            license_files: this.license.license_files
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.ttDaXuatHoaDon = true;
                _this.valueProgress += percentComplete;
                if (_this.letter != null)
                    _this.kyThuXacNhan();
                else
                    _this.xuatTiepChungTu();
            }
            else {
                _this.showPopupImport = false;
                _this.errorImport = true;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
            _this.showPopupImport = false;
            _this.isVisibleBtnSubmit = false;
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            _this.subXuatHoaDon.unsubscribe();
        });
    };
    ImportVoucherFromExcelComponent.prototype.disablleScreen = function () {
        this.DaXuat = true;
    };
    ImportVoucherFromExcelComponent.prototype.taoThuXacNhan = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete this.letter.file_content;
                        delete this.letter.id;
                        return [4 /*yield*/, this.voucherService.ghiTamThuXacNhan(this.letter).toPromise().then(function (rs) {
                                if (rs.status === 'success') {
                                    _this.letter.id = rs.data.id;
                                    _this.letter['file_content'] = rs.data.pdf_file.file_content;
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error', 5000);
                                    return false;
                                }
                            }).catch(function (error) {
                                _this.showPopupImport = false;
                                _this.isVisibleBtnSubmit = false;
                                return false;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ImportVoucherFromExcelComponent.prototype.updateGhiTamThuXacNhan = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete this.letter.id_txn;
                        return [4 /*yield*/, this.voucherService.updateGhiTamThuXacNhan(this.letter, id).toPromise().then(function (rs) {
                                if (rs.status === 'success') {
                                    _this.letter['file_content'] = rs.data.pdf_file.file_content;
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error', 5000);
                                    return false;
                                }
                            }).catch(function (error) {
                                _this.showPopupImport = false;
                                _this.isVisibleBtnSubmit = false;
                                return false;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ImportVoucherFromExcelComponent.prototype.kyThuXacNhan = function () {
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.goiApiXuatHoaDonThu(this.letter['file_content']);
        }
        else {
            this.xuLyKiFileThu(this.letter['file_content']);
        }
    };
    ImportVoucherFromExcelComponent.prototype.xuatTiepChungTu = function () {
        if (this.countInvoice < this.totalInvoice) {
            this.countInvoice++;
            this.xuatHoaDon();
        }
        else if (this.countInvoice == this.totalInvoice) {
            this.valueProgress = 100;
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Xuất chứng từ thành công", 'success');
            this.isVisibleBtnSubmit = false;
            this.showPopupImport = false;
            this.bsModalImportRef.hide();
            this._location.back();
        }
    };
    ImportVoucherFromExcelComponent.prototype.goiApiXuatHoaDonThu = function (data) {
        var _this = this;
        var license_confirm_letter = {
            id: this.letter.id,
            pdf_file: {
                file_name: "thu_xac_nhan.pdf",
                file_content: data
            }
        };
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        }, 20);
        var sub = this.voucherService.xuatTXN(license_confirm_letter).subscribe(function (rs) {
            _this.xuatTiepChungTu();
        }, function (err) {
            _this.xuatTiepChungTu();
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ImportVoucherFromExcelComponent.prototype.xuLyKiFileThu = function (xmlInvoice, signDate) {
        var _this = this;
        // this.connectWebsocketThu();
        var nodeSign = '//CTu/DSCKS/TCTTNhap';
        this.connectWebsocket();
        if (this.socketService.checkNull()) {
            this.socketService.connect();
        }
        this.socketService.kiFile(function () { return _this.connectWebsocket(); }, xmlInvoice, 'thu_xac_nhan.pdf', 'pdf', nodeSign, signDate, 'ALIGN_LEFT', 'PAGE_LAST', null, this.taxCode);
    };
    ImportVoucherFromExcelComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var status;
        if (!this.license.id && !this.license.license_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].processInv.ThemMoi;
        }
        if (this.license.id && !this.license.license_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.GhiTam;
        }
        if (this.license.id && this.license.license_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.ChoKy;
        }
        var xmlInvoice = "";
        var license = Object.assign({}, this.license);
        delete license.id_ct;
        this.letter = null;
        if (status === _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].processInv.ThemMoi) {
            var sub_1 = this.voucherService.ghiTam(license, true).subscribe(function (rs) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var license_sign_date, oThuXacNhan, isXuatChungTu;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(rs.status === 'success')) return [3 /*break*/, 4];
                            this.license.license_number = rs.data.license_number;
                            this.idDaXuatArray.push(rs.data.id);
                            this.license.license_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_date).format('YYYY-MM-DD HH:mm:ss');
                            license_sign_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_sign_date).format('YYYY-MM-DD HH:mm:ss');
                            this.license.id = rs.data.id;
                            oThuXacNhan = this.lettersArray.filter(function (p) { return p.id_txn == _this.license.id_ct; })[0];
                            isXuatChungTu = false;
                            if (!oThuXacNhan) return [3 /*break*/, 2];
                            delete oThuXacNhan.id_txn;
                            this.letter = oThuXacNhan;
                            this.letter.license_id = rs.data.id;
                            return [4 /*yield*/, this.taoThuXacNhan()];
                        case 1:
                            isXuatChungTu = _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            isXuatChungTu = true;
                            _a.label = 3;
                        case 3:
                            if (isXuatChungTu) {
                                this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                                if (xmlInvoice != "") {
                                    if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                        || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                        this.goiApiXuatHoaDon(xmlInvoice);
                                    }
                                    else {
                                        this.xuLyKiFile(xmlInvoice, license_sign_date);
                                    }
                                }
                            }
                            else {
                                this.showPopupImport = false;
                                this.errorImport = true;
                                this.isVisibleBtnSubmit = false;
                            }
                            return [3 /*break*/, 5];
                        case 4:
                            this.showPopupImport = false;
                            this.errorImport = true;
                            this.isVisibleBtnSubmit = false;
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                _this.showPopupImport = false;
                _this.isVisibleBtnSubmit = false;
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else if (status === _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.GhiTam) {
            var sub_2 = this.voucherService.edit(license.id, license, true).subscribe(function (rs) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var license_sign_date, oThuXacNhan, isXuatChungTu;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(rs.status === 'success')) return [3 /*break*/, 6];
                            this.license.license_number = rs.data.license_number;
                            this.idDaXuatArray.push(rs.data.id);
                            this.license.license_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_date).format('YYYY-MM-DD HH:mm:ss');
                            license_sign_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_sign_date).format('YYYY-MM-DD HH:mm:ss');
                            this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                            xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                            oThuXacNhan = this.lettersArray.filter(function (p) { return p.id_txn == _this.license.id; })[0];
                            isXuatChungTu = false;
                            if (!oThuXacNhan) return [3 /*break*/, 2];
                            delete oThuXacNhan.id_txn;
                            this.letter = oThuXacNhan;
                            this.letter.license_id = rs.data.id;
                            return [4 /*yield*/, this.taoThuXacNhan()];
                        case 1:
                            isXuatChungTu = _a.sent();
                            return [3 /*break*/, 5];
                        case 2:
                            oThuXacNhan = this.lettersArray.filter(function (p) { return p.license_id == _this.license.id; })[0];
                            if (!oThuXacNhan) return [3 /*break*/, 4];
                            this.letter = oThuXacNhan;
                            this.letter.license_id = rs.data.id;
                            this.letter.id = this.letter.id_txn;
                            return [4 /*yield*/, this.updateGhiTamThuXacNhan(this.letter.id_txn)];
                        case 3:
                            isXuatChungTu = _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            isXuatChungTu = true;
                            _a.label = 5;
                        case 5:
                            if (isXuatChungTu) {
                                this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                                if (xmlInvoice != "") {
                                    if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                        || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                        this.goiApiXuatHoaDon(xmlInvoice);
                                    }
                                    else {
                                        this.xuLyKiFile(xmlInvoice, license_sign_date);
                                    }
                                }
                            }
                            else {
                                this.showPopupImport = false;
                                // this.errorImport = true;
                                this.isVisibleBtnSubmit = false;
                            }
                            return [3 /*break*/, 7];
                        case 6:
                            this.showPopupImport = false;
                            // this.errorImport = true;
                            this.isVisibleBtnSubmit = false;
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
            }, function () {
                sub_2.unsubscribe();
            });
        }
        else if (status === _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].statusInv.ChoKy) {
            var sub_3 = this.voucherService.edit(license.id, license, true).subscribe(function (rs) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var license_sign_date, oThuXacNhan, isXuatChungTu;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(rs.status === 'success')) return [3 /*break*/, 4];
                            this.license.license_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_date).format('YYYY-MM-DD HH:mm:ss');
                            license_sign_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_sign_date).format('YYYY-MM-DD HH:mm:ss');
                            this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                            oThuXacNhan = this.lettersArray.filter(function (p) { return p.id_txn == _this.license.id_ct; })[0];
                            isXuatChungTu = false;
                            this.idDaXuatArray.push(rs.data.id);
                            if (!oThuXacNhan) return [3 /*break*/, 2];
                            delete oThuXacNhan.id_txn;
                            this.letter = oThuXacNhan;
                            this.letter.license_id = rs.data.id;
                            return [4 /*yield*/, this.taoThuXacNhan()];
                        case 1:
                            isXuatChungTu = _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            isXuatChungTu = true;
                            _a.label = 3;
                        case 3:
                            if (isXuatChungTu) {
                                this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(rs.data.xml_string);
                                if (xmlInvoice != "") {
                                    if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                                        || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                                        this.goiApiXuatHoaDon(xmlInvoice);
                                    }
                                    else {
                                        this.xuLyKiFile(xmlInvoice, license_sign_date);
                                    }
                                }
                            }
                            else {
                                this.showPopupImport = false;
                                // this.errorImport = true;
                                this.isVisibleBtnSubmit = false;
                            }
                            return [3 /*break*/, 5];
                        case 4:
                            this.showPopupImport = false;
                            // this.errorImport = true;
                            this.isVisibleBtnSubmit = false;
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                sub_3.unsubscribe();
            });
        }
    };
    ImportVoucherFromExcelComponent.prototype.infoColumn = function (columnName) {
        if (this.listColumn && this.listColumn.length > 0) {
            var _obj = this.listColumn.filter(function (p) { return p.column_code == columnName; })[0];
            if (_obj) {
                if ((_obj.column_code == "vat" || _obj.column_code == "amount_vat") && !this.isHdGTGT) {
                    _obj.is_visible = false;
                }
                return _obj;
            }
            else
                return { column_code: "", column_name: "", is_visible: false };
        }
    };
    ImportVoucherFromExcelComponent.prototype.inforFields = function (field_name) {
        var ojb = this.fields.filter(function (p) { return p.code == field_name; });
        if (ojb.length > 0) {
            if (ojb[0].is_show) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    ImportVoucherFromExcelComponent.prototype.setDataSessionStorage1 = function (data) {
        this.valueChange = JSON.stringify(data);
    };
    ImportVoucherFromExcelComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate, 'LicenseData', '', true, this.taxCode, true);
    };
    ImportVoucherFromExcelComponent.prototype.preview = function () {
        var convert = this.convertGirdToInvoices("preview");
        if (convert) {
            if (this.configs.system_parameter.display_template_from_server) {
                var initialState = {
                    items: this.licensesArr,
                    isXuatHD: false,
                    typeAction: 'NAP_EXCEL'
                };
                this.bsModalViewModel = this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_13__["ViewVoucherComponent"], {
                    backdrop: 'static',
                    keyboard: false,
                    class: 'modal-xl view-invoice',
                    initialState: initialState
                });
                var subModal_1 = this.modalImportService.onHide.subscribe(function () {
                    subModal_1.unsubscribe();
                });
            }
            else {
                this.checkCKS("XEM_TRUOC");
            }
        }
    };
    ImportVoucherFromExcelComponent.prototype.checkCKS = function (typeView) {
        var _this = this;
        this.connectWebsocket();
        if (this.socketService.checkNull()) {
            this.socketService.connect();
        }
        setTimeout(function () {
            var res = _this.socketService.getStatusCertificate();
            if (res && res.status === 'error' && res.code == 10) {
                var initialState = {
                    typeNotify: "XEM_MAU",
                };
                _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_10__["SignatureOffComponent"], {
                    class: 'modal-lg', backdrop: 'static',
                    keyboard: false,
                    initialState: initialState
                });
                _this.modalService.onHide.subscribe(function () {
                });
            }
            else {
                if (typeView == "XEM_TRUOC") {
                    var initialState = {
                        items: _this.licensesArr,
                        isXuatHD: false,
                        typeAction: 'NAP_EXCEL'
                    };
                    _this.bsModalViewModel = _this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_13__["ViewVoucherComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-xl view-invoice',
                        initialState: initialState
                    });
                    var subModal_2 = _this.modalImportService.onHide.subscribe(function () {
                        subModal_2.unsubscribe();
                    });
                }
                else if (typeView == "XUAT_HOA_DON") {
                    var hinhthucxuat = "";
                    if (_this.htXuat != _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].hinhThucXuat.XuatChoKy) {
                        hinhthucxuat = "và ký";
                    }
                    else {
                        hinhthucxuat = "chờ ký";
                    }
                    var initialState = {
                        items: _this.licensesArr,
                        isXuatHD: true,
                        hinhthucxuat: hinhthucxuat,
                        typeAction: 'NAP_EXCEL'
                    };
                    _this.bsModalViewModel = _this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_13__["ViewVoucherComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-xl view-invoice',
                        initialState: initialState
                    });
                    var subModal_3 = _this.modalImportService.onHide.subscribe(function () {
                        if (_this.bsModalViewModel.content.successSaveItem == "DONG_Y") {
                            _this.connectWebsocket();
                            _this.confirmCheckPreview = true;
                            _this.submit('XUAT');
                        }
                        subModal_3.unsubscribe();
                    });
                }
            }
        });
    };
    ImportVoucherFromExcelComponent.prototype.onInvoiceTemplate = function (e) {
        this.select.template = e.component.option("selectedItem");
        this.template_id = e.value;
        this.template_code = this.select.template.template_code;
        this.license_series = this.select.template.invoice_series;
        var fields = this.templates.filter(function (p) { return p.value == e.value; })[0].fields;
        var isOldTemp = fields.filter(function (p) { return p.code == "tien-dong-bao-hiem-nnt"; });
        if (isOldTemp.length > 0) {
            this.fields = fields;
        }
        else {
            this.fields = this.dataSourceTNCN;
        }
        this.layTruongMoRong();
        this.setFormGird();
        //Load lại danh sách cấu hình các trường
    };
    ImportVoucherFromExcelComponent.prototype.onInvoiceTemplateTXN = function (e) {
        this.select.templateTXN = e.component.option("selectedItem");
        this.templatesTXN_id = e.value;
        this.layTruongMoRong();
        this.setFormGird();
    };
    ImportVoucherFromExcelComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ImportVoucherFromExcelComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm("Cảnh báo: Quá trình nạp dữ liệu sẽ dừng lại nếu bạn đóng cửa sổ này");
        }
        if (r) {
            if (this.subXuatHoaDon) {
                this.subXuatHoaDon.unsubscribe();
            }
            if (this.subLuuChoXuat) {
                this.subLuuChoXuat.unsubscribe();
            }
            this.valueProgress = 0;
            this.totalInvoice = 0;
            this.isVisibleBtnSubmit = false;
        }
        else {
            e.cancel = true;
        }
    };
    ImportVoucherFromExcelComponent.prototype.loadRow = function (countRow) {
        var _this = this;
        var tempRow = this.frmData.tempImportRow(countRow);
        tempRow.forEach(function (element) {
            _this.licenses.insert(element);
        });
    };
    ImportVoucherFromExcelComponent.prototype.checkStatusData = function () {
        var _this = this;
        this.licenses.load().then(function (dataSource) {
            var invalid = dataSource.filter(function (item) {
                return item.taxpayers_name && item.statusData == "INVALID";
            });
            var errorDuplicateOngird = dataSource.filter(function (item) {
                return item.taxpayers_name && item.statusData == "ERROR_DUPLICATE_ONGIRD";
            });
            var errorData = dataSource.filter(function (item) {
                return item.taxpayers_name && item.statusData == "DATA_ERROR";
            });
            _this.totalInvoiceInvalid = invalid.length;
            _this.totalErrorInvoice = errorDuplicateOngird.length + errorData.length;
        });
    };
    ImportVoucherFromExcelComponent.prototype.submit = function (type) {
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        this.dsThuXacNhan = [];
        this.idDaXuatArray = [];
        var convert = this.convertGirdToInvoices("submit");
        if (convert) {
            this.checkStatusData();
            if (type == "LUU") {
                this.showPopupImport = true;
                this.luuChoXuat();
            }
            if (type == "XUAT") {
                if (!this.listpermissions.includes('phe_duyet_chung_tu')) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Bạn không có quyền thực hiện chức năng 'Xuất và ký'", 'error');
                    return;
                }
                if (this.confirmCheckPreview) {
                    this.showPopupImport = true;
                    this.xuatHoaDon();
                    this.confirmCheckPreview = false;
                }
                else {
                    this.previewBeforeSubmit();
                }
            }
        }
    };
    ImportVoucherFromExcelComponent.prototype.previewBeforeSubmit = function () {
        var _this = this;
        this.convertGirdToInvoices("preview");
        if (this.configs.system_parameter.display_template_from_server) {
            var hinhthucxuat = "";
            var initialState = {
                items: this.licensesArr,
                isXuatHD: true,
                hinhthucxuat: hinhthucxuat,
                typeAction: 'NAP_EXCEL'
            };
            this.bsModalViewModel = this.modalImportService.show(_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_13__["ViewVoucherComponent"], {
                backdrop: 'static',
                keyboard: false,
                class: 'modal-xl view-invoice',
                initialState: initialState
            });
            var subModal_4 = this.modalImportService.onHide.subscribe(function () {
                if (_this.bsModalViewModel.content.successSaveItem == "DONG_Y") {
                    _this.confirmCheckPreview = true;
                    _this.submit('XUAT');
                }
                subModal_4.unsubscribe();
            });
        }
        else {
            this.checkCKS("XUAT_HOA_DON");
        }
    };
    ImportVoucherFromExcelComponent.prototype.convertGirdToInvoices = function (type) {
        var _this = this;
        var vouchers = [];
        var letters = [];
        var invalid = true;
        var decimal_amount_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(this.formatter.tong_tien);
        this.licenses.load().then(function (dataSource) {
            dataSource.forEach(function (element, index) {
                if (element.taxpayers_name) {
                    if (element.nationality == "") {
                        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Quốc tịch không được để trống", "error");
                        invalid = false;
                        return false;
                    }
                    var voucher = new _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_11__["VoucherModel"](1);
                    var letter = new _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_11__["ConfirmLettersModel"];
                    if (element.id) {
                        voucher.id = element.id;
                        letter.license_id = element.id;
                        letter["id_txn"] = element.id_txn;
                        if (!letter["id_txn"])
                            letter["id_txn"] = voucher.id;
                    }
                    else {
                        voucher['id_ct'] = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].makeid(),
                            letter['id_txn'] = voucher['id_ct'];
                    }
                    voucher.license_number = element.license_number;
                    voucher.taxpayers_name = element.taxpayers_name;
                    voucher.template_id = _this.template_id;
                    voucher.province_name = _this.province_name;
                    voucher.license_date = element.license_date ? moment__WEBPACK_IMPORTED_MODULE_8__(element.license_date).format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm:ss'); // Ngày hóa đơn
                    voucher.nationality = element.nationality;
                    voucher.resident_individual = element.resident_individual;
                    voucher.taxpayers_address = element.taxpayers_address;
                    voucher.taxpayers_mobile = element.taxpayers_mobile;
                    voucher.taxpayers_tax_code = element.taxpayers_tax_code;
                    voucher.taxpayers_email = element.taxpayers_email;
                    voucher.id_card = element.id_card;
                    voucher.license_files = element.license_files;
                    voucher.card_issuer_address = element.card_issuer_address;
                    voucher.income = element.income;
                    voucher['is_voucher_currency'] = element.is_voucher_currency ? element.is_voucher_currency : false;
                    voucher.card_issuer_date = element.card_issuer_date ? moment__WEBPACK_IMPORTED_MODULE_8__(element.card_issuer_date).format('YYYY-MM-DD') : "";
                    voucher.compulsory_insurance_payment = _this.roundNumber(element.compulsory_insurance_payment, decimal_amount_after_vat);
                    voucher.year_pay_income = element.year_pay_income;
                    voucher.month_pay_income = element.month_pay_income;
                    voucher.total_taxable_income_deducted = _this.roundNumber(element.total_taxable_income_deducted, decimal_amount_after_vat);
                    voucher.total_taxable_income = _this.roundNumber(element.total_taxable_income, decimal_amount_after_vat);
                    voucher.amount_personal_income_tax_withheld = _this.roundNumber(element.amount_personal_income_tax_withheld, decimal_amount_after_vat);
                    voucher.total_taxable_income_paid = _this.roundNumber(element.total_taxable_income_paid, decimal_amount_after_vat);
                    voucher.amount_personal_income_still_received = _this.roundNumber(element.amount_personal_income_still_received, decimal_amount_after_vat);
                    voucher.recept_no = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYYMMDDHHmmss');
                    voucher.license_series = _this.license_series;
                    voucher.template_code = _this.template_code;
                    voucher.license_options = _this.layGiaTriMoRongDayDu(element, 'template');
                    letter.position = element.position;
                    letter.date_to_vietnam = element.date_to_vietnam ? moment__WEBPACK_IMPORTED_MODULE_8__(element.date_to_vietnam).format('YYYY-MM-DD HH:mm:ss') : '';
                    letter.income_from_date = element.income_from_date;
                    letter.income_to_date = element.income_to_date;
                    letter.income_taxes = _this.roundNumber(element.income_taxes, decimal_amount_after_vat);
                    letter.deductions_outside_vietnam = _this.roundNumber(element.deductions_outside_vietnam, decimal_amount_after_vat);
                    letter.income_taxable_abroad = _this.roundNumber(element.income_taxable_abroad, decimal_amount_after_vat);
                    letter.income_taxes_in_vietnam = _this.roundNumber(element.income_taxes_in_vietnam, decimal_amount_after_vat);
                    letter.personal_income_tax = _this.roundNumber(element.personal_income_tax, decimal_amount_after_vat);
                    letter.insurance_payments = _this.roundNumber(element.insurance_payments, decimal_amount_after_vat);
                    letter.deductions = _this.roundNumber(element.deductions, decimal_amount_after_vat);
                    letter.rent_money = _this.roundNumber(element.rent_money, decimal_amount_after_vat);
                    letter.contract_number = element.contract_number;
                    letter.template_id = _this.templatesTXN_id;
                    letter.name = element.taxpayers_name;
                    letter.contract_date = element.contract_date ? moment__WEBPACK_IMPORTED_MODULE_8__(element.contract_date).format('YYYY-MM-DD HH:mm:ss') : '';
                    letter.license_confirm_letter_options = _this.layGiaTriMoRongDayDu(element, 'templateTXN');
                    if (voucher['is_voucher_currency'] && element.hasOwnProperty('currency_code')) {
                        voucher.currency_code = element.currency_code;
                    }
                    else if (_this.configs.system_parameter.voucher_currency) {
                        voucher.currency_code = _this.configs.system_parameter.voucher_currency;
                    }
                    var decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
                    voucher.decimal_places_json = decimal_places_json;
                    vouchers.push(voucher);
                    if (_this.checkTXN(letter)) {
                        letters.push(letter);
                    }
                }
            });
        });
        this.totalInvoice = vouchers.length;
        this.licensesArr = vouchers;
        this.lettersArray = letters;
        this.totalLetter = letters.length;
        this.licensesArr = this.licensesArr.sort(function (itemA, itemB) {
            return new Date(itemA.license_date).getTime() - new Date(itemB.license_date).getTime();
        });
        return invalid;
    };
    ImportVoucherFromExcelComponent.prototype.luuChoXuat = function () {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.license = this.licensesArr[this.countInvoice - 1];
        /* Tạm thời chưa xử lý sửa ghi tạm */
        if (this.license.id) {
            var license = Object.assign({}, this.license);
            this.letter = null;
            this.subLuuChoXuat = this.voucherService.edit(license.id, license).subscribe(function (rs) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var oThuXacNhan;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(rs.status == 'success')) return [3 /*break*/, 5];
                            this.license.id = rs.data.id;
                            oThuXacNhan = this.lettersArray.filter(function (p) { return p.id_txn == _this.license.id; })[0];
                            if (!oThuXacNhan) return [3 /*break*/, 2];
                            delete oThuXacNhan.id_txn;
                            this.letter = oThuXacNhan;
                            this.letter.license_id = rs.data.id;
                            return [4 /*yield*/, this.taoThuXacNhan()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            oThuXacNhan = this.lettersArray.filter(function (p) { return p.license_id == _this.license.id; })[0];
                            if (!oThuXacNhan) return [3 /*break*/, 4];
                            this.letter = oThuXacNhan;
                            this.letter.license_id = rs.data.id;
                            this.letter.id = this.letter.id_txn;
                            return [4 /*yield*/, this.updateGhiTamThuXacNhan(this.letter.id_txn)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            this.valueProgress += percentComplete;
                            if (this.countInvoice < this.totalInvoice) {
                                this.countInvoice++;
                                this.luuChoXuat();
                            }
                            else if (this.countInvoice == this.totalInvoice) {
                                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.NOTIFY.save_invoice_success, 'success');
                                this.showPopupImport = false;
                                this.isVisibleBtnSubmit = false;
                                setTimeout(function () {
                                    _this.bsModalImportRef.hide();
                                    _this._location.back();
                                }, 500);
                            }
                            return [3 /*break*/, 6];
                        case 5:
                            this.showPopupImport = false;
                            this.errorImport = true;
                            this.isVisibleBtnSubmit = false;
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            var license = Object.assign({}, this.license);
            delete license.id_ct;
            this.letter = null;
            this.subLuuChoXuat = this.voucherService.ghiTam(license).subscribe(function (rs) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var oThuXacNhan;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(rs.status == 'success')) return [3 /*break*/, 3];
                            this.license.id = rs.data.id;
                            oThuXacNhan = this.lettersArray.filter(function (p) { return p.id_txn == _this.license.id_ct; })[0];
                            if (!oThuXacNhan) return [3 /*break*/, 2];
                            delete oThuXacNhan.id_txn;
                            this.letter = oThuXacNhan;
                            this.letter.license_id = rs.data.id;
                            return [4 /*yield*/, this.taoThuXacNhan()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            this.valueProgress += percentComplete;
                            if (this.countInvoice < this.totalInvoice) {
                                this.countInvoice++;
                                this.luuChoXuat();
                            }
                            else if (this.countInvoice == this.totalInvoice) {
                                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.NOTIFY.save_invoice_success, 'success');
                                this.showPopupImport = false;
                                this.isVisibleBtnSubmit = false;
                                setTimeout(function () {
                                    _this.bsModalImportRef.hide();
                                    _this._location.back();
                                }, 500);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            this.showPopupImport = false;
                            this.isVisibleBtnSubmit = false;
                            this.errorImport = true;
                            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    ImportVoucherFromExcelComponent.prototype.roundNumber = function (number, n) {
        if (number == null) {
            return number;
        }
        else {
            var p = Math.pow(10, n);
            return Math.round(number * p) / p;
        }
    };
    ImportVoucherFromExcelComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        this.license = this.licensesArr[this.countInvoice - 1];
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            this.connectWebsocket();
            if (this.license.license_files && this.license.license_files.length) {
                this.license.license_files.forEach(function (item) {
                    _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, item.file_content, item.file_name, item.file_name.split('.').pop(), true, _this.license.license_date);
                });
            }
            else {
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", '', true, this.taxCode, true);
            }
        }
    };
    ImportVoucherFromExcelComponent.prototype.xuatThuXacNhan = function () {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            this.connectWebsocket();
            var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('YYYY-MM-DD HH:mm:ss');
            this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", '', true, this.taxCode, true);
        }
    };
    ImportVoucherFromExcelComponent.prototype.onEditorPreparing = function (e) {
        var _this = this;
        if (e.parentType === 'dataRow') {
            e.editorOptions.onValueChanged = function (args) {
                switch (e.dataField) {
                    default:
                        break;
                }
                _this.checkStatusData();
                e.setValue(args.value);
            };
        }
    };
    ImportVoucherFromExcelComponent.prototype.onGripKeyDown = function (e) {
        if (e.event.code == "Delete") {
            // console.log(e.event.srcElement);
            e.event.srcElement.value = null;
            // e.event.srcElement.parentNode.parentNode.querySelector('input').value = null;
        }
    };
    ImportVoucherFromExcelComponent.prototype.onRowRemoving = function (e) {
        var _this = this;
        var keyData = e.data.keyData;
        if (keyData) {
            this.licenses.load().then(function (dataSource) {
                dataSource.forEach(function (row) {
                    if (row.keyData == keyData) {
                        _this.licenses.remove(row.keyData);
                    }
                });
            });
        }
        else {
            this.licenses.remove(e.key);
        }
        this.checkStatusData();
        this.dataGrid.instance.refresh();
    };
    ImportVoucherFromExcelComponent.prototype.onRowUpdated = function (e) {
    };
    ImportVoucherFromExcelComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == "data") {
            // if (e.data.statusData == "ERROR_DUPLICATE_ONGIRD" && e.column.dataField == "taxpayers_name") {
            //   e.cellElement.style.background = "#FF0000";
            // }
            if (e.data.taxpayers_name) {
                switch (e.column.dataField) {
                    case "license_date":
                        this.setStatusDataOnCellPrepared(e, "Ngày chứng từ không được để trống");
                        break;
                    case "taxpayers_name":
                        this.setStatusDataOnCellPrepared(e, "Họ tên không được để trống");
                        break;
                    case "taxpayers_tax_code":
                        this.setStatusDataOnCellPrepared(e, "Mã số thuế không được để trống");
                        break;
                    case "nationality":
                        this.setStatusDataOnCellPrepared(e, "Quốc tịch không được để trống");
                        break;
                    case "taxpayers_address":
                        this.setStatusDataOnCellPrepared(e, "Địa chỉ không được để trống");
                        break;
                    case "taxpayers_email":
                        this.setStatusDataOnCellPrepared(e, "Email không được để trống");
                        break;
                    case "id_card":
                        this.setStatusDataOnCellPrepared(e, "Số CMND/CCCD không được để trống");
                        break;
                    case "year_pay_income":
                        this.setStatusDataOnCellPrepared(e, "Năm trả thu nhập không được để trống");
                        break;
                    default:
                        break;
                }
            }
        }
    };
    ImportVoucherFromExcelComponent.prototype.setStatusDataOnCellPrepared = function (e, message) {
        if (e.data.nationality == "" || e.data.year_pay_income == "") {
            if ((e.column.dataField == "nationality" || e.column.dataField == "year_pay_income") && e.value == "") {
                e.cellElement.style.background = "red url('assets/img/icons/fa-remove.png') no-repeat 2% center";
                e.cellElement.title = message;
            }
            e.data.statusData = "DATA_ERROR";
        }
        else
            e.data.statusData = "INVALID";
    };
    ImportVoucherFromExcelComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.statusData == "ERROR_DUPLICATE_DATABASE" && e.data.taxpayers_name) {
                e.rowElement.style.background = "#FFFF00";
            }
            else {
                e.rowElement.style.background = "";
            }
        }
        this.checkStatusData();
    };
    ImportVoucherFromExcelComponent.prototype.onContentReady = function (e) {
        e.component.columnOption("command:edit", {
            visibleIndex: -1
        });
    };
    ImportVoucherFromExcelComponent.prototype.onContextMenuPreparing = function (e) {
        var _this = this;
        if (e.row) {
            if (e.row.rowType === "data") {
                e.items = [{
                        text: "Thêm chứng từ",
                        onItemClick: function () {
                            _this.addRow();
                        }
                    }];
            }
        }
    };
    ImportVoucherFromExcelComponent.prototype.addRow = function () {
        var data = this.frmData.addImportRow();
        this.licenses.insert(data);
        this.dataGrid.instance.refresh();
    };
    ImportVoucherFromExcelComponent.prototype.chonDocFile = function () {
        this.popupCachNapDuLieu = true;
    };
    ImportVoucherFromExcelComponent.prototype.thayThe = function (e) {
        this.isThemTiep = false;
        this.popupCachNapDuLieu = false;
        this.readFile();
    };
    ImportVoucherFromExcelComponent.prototype.themTiep = function (e) {
        this.isThemTiep = true;
        this.popupCachNapDuLieu = false;
        this.readFile();
    };
    ImportVoucherFromExcelComponent.prototype.readFile = function () {
        var _this = this;
        this.isDisReadFile = true;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_5__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(ws, { header: "A", range: 0 }));
            var fileBangKe = document.getElementById("file-bang-ke");
            fileBangKe.value = "";
            var _arrData = [];
            if (data && data[0]) {
                var columnsName = data.map(function (e) { return e.A; });
                var _index = columnsName.indexOf("license_date");
                if (_index == -1) {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("File mẫu không đúng định dạng. Vui lòng nhấn vào Tại đây để lấy lại file mẫu", "error");
                    return false;
                }
                else {
                    if (_index > 0) {
                        data.splice(0, _index);
                    }
                    for (var i = 1; i < data.length; i++) {
                        var _row = {};
                        for (var key in data[i]) {
                            if (data[i].hasOwnProperty(key)) {
                                var column = data[0][key];
                                var value = data[i][key];
                                _row[column] = value;
                            }
                        }
                        _arrData.push(_row);
                    }
                }
                _this.dataExcelFile = _arrData;
                _this.fillData(_this.dataExcelFile);
            }
            //  this.countAll = data.length;
            //  this.showPopupImport = true;
        };
        reader.readAsBinaryString(this.target.files[0]);
    };
    ImportVoucherFromExcelComponent.prototype.onFileChanged = function (evt) {
        this.target = (evt.target);
        this.fileName = this.target.files[0].name;
        // this.fileSize = target.files[0].size/1024;
        if (this.target.files.length !== 1) {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Không thể chọn nhiều file', 'error');
            throw new Error('Không thể chọn nhiều file');
        }
        ;
        this.isDisReadFile = false;
    };
    ImportVoucherFromExcelComponent.prototype.napDuLieuTuBangKe = function () {
        document.getElementById("file-bang-ke").click();
        this.isThemTiep = false;
    };
    //fill dữ liệu từ file excel
    ImportVoucherFromExcelComponent.prototype.fillData = function (fileData) {
        var _this = this;
        var isValid = true;
        if (!this.isThemTiep) {
            this.licenses.load().then(function (dataSource) {
                dataSource.forEach(function (item, index) {
                    _this.licenses.remove(item.keyData);
                });
            });
        }
        fileData.forEach(function (element) {
            var voucher = new Object;
            var decimal_amount_after_vat = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].getFormatterToNumber(_this.formatter.tong_tien);
            if (element.taxpayers_name) {
                voucher["statusData"] = "INVALID";
                var licenseDate = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.license_date);
                var cardIssuerDate = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.card_issuer_date);
                var date_to_vietnam = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.date_to_vietnam);
                var contract_date = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(element.contract_date);
                if (licenseDate == "ERROR") {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Ngày hóa đơn không đúng định dạng", "error");
                    isValid = false;
                    return;
                }
                voucher["license_date"] = licenseDate;
                voucher["taxpayers_name"] = element.taxpayers_name ? element.taxpayers_name : "";
                voucher["taxpayers_tax_code"] = element.taxpayers_tax_code ? element.taxpayers_tax_code : "";
                voucher["nationality"] = element.nationality ? element.nationality : "";
                voucher["resident_individual"] = element.resident_individual && (element.resident_individual == "X" || element.resident_individual == "x") ? true : false;
                voucher["taxpayers_address"] = element.taxpayers_address ? element.taxpayers_address : "";
                voucher["taxpayers_mobile"] = element.taxpayers_mobile ? element.taxpayers_mobile : "";
                voucher["taxpayers_email"] = element.taxpayers_email ? element.taxpayers_email : "";
                voucher["id_card"] = element.id_card ? element.id_card : "";
                voucher["card_issuer_address"] = element.card_issuer_address ? element.card_issuer_address : "";
                voucher["card_issuer_date"] = cardIssuerDate;
                voucher["income"] = element.income ? element.income : "";
                voucher["compulsory_insurance_payment"] = element.compulsory_insurance_payment ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.compulsory_insurance_payment) : null;
                voucher["month_pay_income"] = element.month_pay_income ? element.month_pay_income : "";
                voucher["year_pay_income"] = element.year_pay_income ? element.year_pay_income : "";
                voucher["total_taxable_income_deducted"] = element.total_taxable_income_deducted ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.total_taxable_income_deducted) : null;
                voucher["total_taxable_income"] = element.total_taxable_income ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.total_taxable_income) : null;
                voucher["amount_personal_income_tax_withheld"] = element.amount_personal_income_tax_withheld ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_personal_income_tax_withheld) : null;
                voucher["total_taxable_income_paid"] = element.total_taxable_income_paid ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.total_taxable_income_paid) : null;
                voucher["amount_personal_income_still_received"] = element.amount_personal_income_still_received ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.amount_personal_income_still_received) : null;
                voucher["position"] = element.position ? element.position : "";
                voucher["date_to_vietnam"] = date_to_vietnam;
                voucher["income_from_date"] = element.income_from_date ? element.income_from_date : "";
                voucher["income_to_date"] = element.income_to_date ? element.income_to_date : "";
                voucher["income_taxes"] = element.income_taxes ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.income_taxes) : null;
                voucher["income_taxes_in_vietnam"] = element.income_taxes_in_vietnam ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.income_taxes_in_vietnam) : null;
                voucher["income_taxable_abroad"] = element.income_taxable_abroad ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.income_taxable_abroad) : null;
                voucher["deductions_outside_vietnam"] = element.deductions_outside_vietnam ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.deductions_outside_vietnam) : null;
                voucher["personal_income_tax"] = element.personal_income_tax ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.personal_income_tax) : null;
                voucher["insurance_payments"] = element.insurance_payments ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.insurance_payments) : null;
                voucher["deductions"] = element.deductions ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.deductions) : null;
                voucher["rent_money"] = element.rent_money ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(element.rent_money) : null;
                voucher["contract_number"] = element.contract_number ? element.contract_number : "";
                voucher["contract_date"] = contract_date;
                voucher["license_files"] = [];
                voucher["is_voucher_currency"] = _this.configs.system_parameter["is_voucher_currency"] ? _this.configs.system_parameter["is_voucher_currency"] : false;
                voucher['currency_code'] = '';
                if (voucher['is_voucher_currency'] && _this.configs.system_parameter.voucher_currency) {
                    voucher['currency_code'] = _this.configs.system_parameter.voucher_currency;
                }
                voucher = lodash__WEBPACK_IMPORTED_MODULE_15__["merge"](voucher, _this.layGiaTriMoRong(element));
                if (element.total_taxable_income_deducted) {
                    var arr = element.total_taxable_income_deducted.split('.');
                    if (arr.length == 2) {
                        _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                    }
                    else
                        _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                }
                if (element.total_taxable_income) {
                    var arr = element.total_taxable_income.split('.');
                    if (arr.length == 2) {
                        _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                    }
                    else
                        _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                }
                if (element.amount_personal_income_tax_withheld) {
                    var arr = element.amount_personal_income_tax_withheld.split('.');
                    if (arr.length == 2) {
                        _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                    }
                    else
                        _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                }
                if (element.total_taxable_income_paid) {
                    var arr = element.total_taxable_income_paid.split('.');
                    if (arr.length == 2) {
                        _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                    }
                    else
                        _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                }
                if (element.amount_personal_income_still_received) {
                    var arr = element.amount_personal_income_still_received.split('.');
                    if (arr.length == 2) {
                        _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(arr[1].length);
                    }
                    else
                        _this.formatter.tong_tien = _core_index__WEBPACK_IMPORTED_MODULE_1__["VChanggeMoneyService"].formatDecimalColumn(0);
                }
                _this.licenses.insert(voucher);
            }
        });
        if (isValid) {
            var dataTempt_1 = [];
            this.licenses.load().then(function (dataSource) {
                var datagroup = dataSource.filter(function (p) { return p.taxpayers_name; });
                if (datagroup && datagroup.length > 0) {
                    datagroup.forEach(function (e) {
                        var listItem = dataSource.filter(function (w) { return w.productTaxpayersName == e.taxpayers_name; });
                        dataTempt_1.push(e);
                        if (listItem && listItem.length > 0) {
                            listItem.forEach(function (inv) {
                                dataTempt_1.push(inv);
                            });
                        }
                    });
                }
            });
            //  this.checkDuplicateNumberOfVouchers(dataTempt);
            this.checkStatusData();
            this.dataGrid.instance.refresh();
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
        }
    };
    // Lấy giá trị mở rộng(dạng key:value)
    ImportVoucherFromExcelComponent.prototype.layGiaTriMoRong = function (data, type) {
        if (type === void 0) { type = ''; }
        var arrMoRong = this.templatesOptions.concat(this.templatesTXNOptions);
        var result = {};
        arrMoRong.forEach(function (column) {
            var col = column.code;
            var val = '';
            if (type) {
            }
            else {
                if (data.hasOwnProperty(column.code)) {
                    switch (column.data_type) {
                        case 'ngay':
                            val = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].processDate(data[col]);
                            break;
                        case 'soluong':
                            val = data[col] ? _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].toNumber(data[col]) : null;
                            break;
                        default:
                            val = data[col];
                    }
                }
            }
            result[col] = val;
        });
        return result;
    };
    //Lấy giá trị các trường mở rộng đầy đủ
    ImportVoucherFromExcelComponent.prototype.layGiaTriMoRongDayDu = function (data, type) {
        if (type === void 0) { type = ''; }
        var arrGtmr = this.templatesOptions.concat(this.templatesTXNOptions);
        var result = [];
        if (type) {
            switch (type) {
                case 'template':
                    arrGtmr = this.templatesOptions;
                    break;
                case 'templateTXN':
                    arrGtmr = this.templatesTXNOptions;
                    break;
            }
        }
        arrGtmr.forEach(function (item) {
            var value = data[item.code] ? data[item.code] : null;
            if (item.data_type == 'ngay' && value) {
                value = moment__WEBPACK_IMPORTED_MODULE_8__(value).format('YYYY-MM-DD HH:mm:ss');
            }
            result.push({
                code: item.code,
                data_type: item.data_type,
                name: item.name,
                value: value
            });
        });
        return result;
    };
    //Kiểm tra có nhập mẫu thư XN không ?
    ImportVoucherFromExcelComponent.prototype.checkTXN = function (letter) {
        var _this = this;
        var dataLetter = Object.keys(letter).filter(function (item) { return !_this.fieldsKTTTXN.includes(item); });
        var exists = dataLetter.filter(function (item) { return letter.hasOwnProperty(item) && letter[item] !== null && letter[item] !== '' && letter[item] != undefined; });
        var status = false;
        if (exists.length > 1) {
            status = true;
        }
        if (!status && letter.license_confirm_letter_options) {
            if (letter.license_confirm_letter_options.find(function (o) { return o.value !== null && o.value !== '' && o.value != undefined; }))
                return true;
        }
        return status;
    };
    ImportVoucherFromExcelComponent.prototype.layDuLieuTuHoaDonChoXuat = function () {
        var _this = this;
        this.licensesImport.forEach(function (license) {
            _this.template_id = license.template_id;
            _this.template_code = license.template_code;
            _this.license_series = license.license_series;
            var rowVoucher = new Object;
            _this.licensesId.push(license.id);
            rowVoucher["id"] = license.id;
            rowVoucher["statusData"] = "INVALID";
            rowVoucher['license_number'] = license.license_number;
            rowVoucher["license_date"] = license.license_date;
            rowVoucher["taxpayers_name"] = license.taxpayers_name;
            rowVoucher["taxpayers_tax_code"] = license.taxpayers_tax_code;
            rowVoucher["nationality"] = license.nationality;
            rowVoucher["resident_individual"] = license.resident_individual;
            rowVoucher["taxpayers_address"] = license.taxpayers_address;
            rowVoucher["taxpayers_address"] = license.taxpayers_address;
            rowVoucher["taxpayers_mobile"] = license.taxpayers_mobile;
            rowVoucher["taxpayers_email"] = license.taxpayers_email;
            rowVoucher["id_card"] = license.id_card;
            rowVoucher["license_files"] = license.license_files;
            rowVoucher["card_issuer_address"] = license.card_issuer_address;
            rowVoucher["card_issuer_date"] = license.card_issuer_date;
            rowVoucher["income"] = license.income;
            rowVoucher["compulsory_insurance_payment"] = license.compulsory_insurance_payment;
            rowVoucher["month_pay_income"] = license.month_pay_income;
            rowVoucher["year_pay_income"] = license.year_pay_income;
            rowVoucher["total_taxable_income_deducted"] = license.total_taxable_income_deducted;
            rowVoucher["total_taxable_income"] = license.total_taxable_income;
            rowVoucher["amount_personal_income_tax_withheld"] = license.amount_personal_income_tax_withheld;
            rowVoucher["total_taxable_income_paid"] = license.total_taxable_income_paid;
            rowVoucher["amount_personal_income_still_received"] = license.amount_personal_income_still_received;
            rowVoucher["is_voucher_currency"] = license.is_voucher_currency ? license.is_voucher_currency : false;
            if (rowVoucher["is_voucher_currency"]) {
                rowVoucher['currency_code'] = license.currency_code ? license.currency_code : '';
            }
            rowVoucher["position"] = license.TXN.position;
            rowVoucher["date_to_vietnam"] = license.TXN.date_to_vietnam;
            rowVoucher["income_from_date"] = license.TXN.income_from_date;
            rowVoucher["income_to_date"] = license.TXN.income_to_date;
            rowVoucher["income_taxes"] = license.TXN.income_taxes;
            rowVoucher["income_taxes_in_vietnam"] = license.TXN.income_taxes_in_vietnam;
            rowVoucher["income_taxable_abroad"] = license.TXN.income_taxable_abroad;
            rowVoucher["deductions_outside_vietnam"] = license.TXN.deductions_outside_vietnam;
            rowVoucher["personal_income_tax"] = license.TXN.personal_income_tax;
            rowVoucher["insurance_payments"] = license.TXN.insurance_payments;
            rowVoucher["deductions"] = license.TXN.deductions;
            rowVoucher["rent_money"] = license.TXN.rent_money;
            rowVoucher["contract_number"] = license.TXN.contract_number;
            rowVoucher["contract_date"] = license.TXN.contract_date;
            var license_confirm_letters = license.TXN;
            if (license_confirm_letters && license_confirm_letters.id) {
                rowVoucher["id_txn"] = license_confirm_letters.id;
            }
            rowVoucher = lodash__WEBPACK_IMPORTED_MODULE_15__["merge"](rowVoucher, _this.layGiaTriMoRong(license));
            _this.licenses.insert(rowVoucher);
        });
        this.changeTemplateInvoice(this.licensesImport[0].license_date);
        this.checkStatusData();
    };
    ImportVoucherFromExcelComponent.prototype.getFileTemp = function () {
        var data = {
            license: {
                template_ids: [this.template_id, this.templatesTXN_id]
            }
        };
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        this.voucherService.getTempFile(data).subscribe(function (res) {
            if (res.status == 'success') {
                var file = res.data.product;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify("Xuất file Excel thành công", 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(res.message, 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
        });
    };
    ImportVoucherFromExcelComponent.prototype.dong = function () {
        this.bsModalImportRef.hide();
        this._location.back();
    };
    ImportVoucherFromExcelComponent.prototype.xuLiApiKhiXuatThu = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var status;
        status = _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].processInv.ThemMoi;
        var xmlInvoice = "";
        if (status === _core_index__WEBPACK_IMPORTED_MODULE_1__["sEnum"].processInv.ThemMoi) {
            var sub_4 = this.voucherService.ghiTamThuXacNhan(this.letter).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                    //  Lấy xml từ serer
                    _this.letterId = rs.data.id;
                    var sign_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _this.goiApiXuatHoaDonThu(rs.data.pdf_file.file_content);
                    }
                    else {
                        _this.xuLyKiFileThu(rs.data.pdf_file, sign_date);
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
                sub_4.unsubscribe();
            });
        }
    };
    ImportVoucherFromExcelComponent.prototype.ghiTamThu = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var sub = this.voucherService.ghiTamThuXacNhan(this.letter).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.frmData.id = rs.data.id;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    ImportVoucherFromExcelComponent.prototype.xemChungTu = function () {
        if (this.configs.system_parameter.display_template_from_server)
            this.viewInvoiceFromServer(this.idDaXuatArray);
        else
            this.viewInvoiceFromClient(this.idDaXuatArray);
    };
    ImportVoucherFromExcelComponent.prototype.viewInvoiceFromServer = function (ids) {
        var _this = this;
        this.checkSubmit = window.open('about:blank', 'name', 'width=200, height=100');
        this.checkSubmit.document.body.innerHTML = this._translate.NOTIFY.loading;
        this.checkSubmit.blur();
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var sub = this.voucherService.xemChungTuImport(ids).subscribe(function (rs) {
            if (rs.status === 'success') {
                var pdf_file = rs.data.license.pdf_file;
                var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_1__["VPreviewInvService"]._getUrlInvoice(pdf_file);
                _this.checkSubmit.document.write("\n              <style type=\"text/css\" >\n                    .text-button{\n                        color: #fff;\n                        text-decoration: none;\n                    }\n                   .design-button{\n                        position: fixed;\n                        bottom: 0;\n                        left: 0;\n                        right: 0;\n                        padding: 9px 25px;\n                        background: white;\n                   }\n                   .button-content-style{\n                      background-color: #337ab7;\n                      color: #fff;\n                      border: 1px solid #2d6da3;\n                      margin: 0 10px;\n                      padding: 5px 10px 5px;\n                   }\n                   .dropdown {\n                    position: relative;\n                    display: inline-block;\n                   }\n                   .dropdown-content {\n                      display: none;\n                      position: absolute;\n                      bottom: 28px;\n                      background-color: #f9f9f9;\n                      min-width: 160px;\n                      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n                      z-index: 1;\n                    }\n                   .dropdown-content a {\n                      color: black;\n                      padding: 12px 16px;\n                      text-decoration: none;\n                      display: block;\n                   }\n                   .dropdown-content a:hover {background-color: #b5acac;}\n                   .dropdown:hover .dropdown-content {\n                      display: block;\n                    }\n                    .dropdown:hover .dropbtn {\n                      background-color: #2d6da3;\n                    }\n              </style>\n           <div>\n                <iframe width=\"100%\" height=\"94%\" style=\"padding-bottom: 29px\" src=\"" + objectUrl + "\"></iframe>\n           </div>\n            <script type=\"text/javascript\">\n              function setConfirmInvoice() {\n                document.cookie = \"AK_SS_I=CHECKED; path=/\";\n                window.close();\n              }\n              function setConfirmInvoice2() {\n                document.cookie = \"AK_SS_I=CHECKED2; path=/\";\n                window.close();\n              }\n              function setConfirmInvoice3() {\n                document.cookie = \"AK_SS_I=CHECKED3; path=/\";\n                window.close();\n              }\n              function setConfirmInvoice4() {\n                document.cookie = \"AK_SS_I=CHECKED4; path=/\";\n                window.close();\n              }\n              function closeWin(){\n                window.close();\n              }\n            </script>\n        ");
                _this.checkSubmit.resizeTo(screen.availWidth, screen.availHeight);
                _this.checkSubmit.focus();
            }
            else {
                _this.checkSubmit.close();
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    /* View hóa đơn từ client */
    ImportVoucherFromExcelComponent.prototype.viewInvoiceFromClient = function (ids) {
        var _this = this;
        var popup = window.open('about:blank', 'name', "width=200, height=100");
        popup.document.body.innerHTML = this._translate.NOTIFY.loading;
        popup.blur();
        this.spinner.show();
        var sub = this.voucherService.xemChungTuImport(ids).subscribe(function (rs) {
            if (rs.status === 'success') {
                /* Xem hóa đơn từ Client */
                var json_data = rs.data.license.json_data;
                var appCode = "VOUCHERS";
                _this.socketService.xemhoadon(function () { return _this.connectWebsocket(); }, json_data, appCode, "XEM_TRUOC_KHI_XUAT");
            }
            else {
                popup.close();
                _this.spinner.hide();
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
            _this.spinner.hide();
        }, function () {
            sub.unsubscribe();
        });
    };
    ImportVoucherFromExcelComponent.prototype.viewInvoice = function (content, typeView, hinhthucxuat, invoice_date) {
        var w = 1920, h = 900;
        w = window.screen.availWidth * 100 / 100;
        h = window.screen.availHeight * 93 / 100;
        var pdf_file = content;
        var objectUrl = _core_index__WEBPACK_IMPORTED_MODULE_1__["VPreviewInvService"]._getUrlInvoice(pdf_file);
        var win = window.open(objectUrl, 'name', 'width=' + w + ', height=' + h);
        win.resizeTo(screen.availWidth, screen.availHeight);
        win.focus();
        this.spinner.hide();
    };
    ImportVoucherFromExcelComponent.prototype.converArrayToObject = function (arr, key, value) {
        var obj = {};
        arr.forEach(function (item) {
            obj[item[key]] = item[value];
        });
        return obj;
    };
    ImportVoucherFromExcelComponent.prototype.changeTemplateInvoice = function (strDate) {
        var _this = this;
        var year = "";
        if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(strDate) != "")
            year = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(strDate).substring(4, 2);
        else {
            var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('YYYY-MM-DD HH:mm:ss');
            year = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(invoiceDate).substring(4, 2);
        }
        var templates_temp = this.templates;
        this.templates = [];
        if (templates_temp && templates_temp.length > 0) {
            templates_temp.forEach(function (item) {
                if (_core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(item.name) != "")
                    item.name = item.name.replace(item.name.substring(15, 13), year);
                _this.templates.push(item);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxDataGridComponent"])
    ], ImportVoucherFromExcelComponent.prototype, "dataGrid", void 0);
    ImportVoucherFromExcelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-voucher-from-excel',
            template: __webpack_require__(/*! ./import-voucher-from-excel.component.html */ "./src/app/modules/vouchers/components/import-voucher-from-excel/import-voucher-from-excel.component.html"),
            styles: [__webpack_require__(/*! ./import-voucher-from-excel.component.scss */ "./src/app/modules/vouchers/components/import-voucher-from-excel/import-voucher-from-excel.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _core_services__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_11__["VoucherService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"]])
    ], ImportVoucherFromExcelComponent);
    return ImportVoucherFromExcelComponent;
}());



/***/ }),

/***/ "./src/app/modules/vouchers/components/income-confirmation/income-confirmation.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/income-confirmation/income-confirmation.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"background-color: white;\">\r\n  <!-- <div class=\"col-md-1\" style=\"background-color: #F5F5F5;\"></div> -->\r\n  <div class=\"col-md-12\">\r\n    <div class=\"voucher-container\">\r\n      <!-- Chứng từ khấu trừ thuế TNCN -->\r\n      <h1 style=\"font-weight: bold; font-size: 16px; text-align: center; padding: 20px 0px;\">\r\n        {{_translate.MENU.income_confirmation_letter | uppercase}}</h1>\r\n      <div class=\"proof-of-tax-deduction\">\r\n        <!-- Mẫu hóa đơn -->\r\n        <div class=\"proof\">\r\n          <div>\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.CONTROLL.LABEL.sample_confirmation_letter}}</span><span\r\n                    class=\"req-text\">*</span></div>\r\n                <div class=\"value\">\r\n                  <dx-select-box [(value)]=\"frmData.template_id\" displayExpr=\"name\" valueExpr=\"value\"\r\n                    [dataSource]=\"select.templatesTT78\" (onValueChanged)=\"onChangeTem($event)\">\r\n                  </dx-select-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- họ tên-- -->\r\n            <div class=\"column\" *ngIf=\"inforFields('ten-txn').is_show || !frmData.template_id\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.fullname}} <span class=\"req-text\">*</span></div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.name\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <!-- Ngày chứng từ -->\r\n            <div class=\"column\" *ngIf=\"inforFields('ngay-den-viet-nam-txn').is_show || !frmData.template_id\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.CONTROLL.LABEL.day_came_to_Viet_Nam}}</span></div>\r\n                <div class=\"value\">\r\n                  <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n                    <dxi-item dataField=\"date_to_vietnam\" editorType=\"dxDateBox\"\r\n                      [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', showClearButton: true}\">\r\n                      <dxo-label [visible]=\"false\"></dxo-label>\r\n                    </dxi-item>\r\n                  </dx-form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Chức vụ -->\r\n            <div class=\"column\" *ngIf=\"inforFields('chuc-vu-txn').is_show || !frmData.template_id\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.GRID.USER.position}}</span></div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.position\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Thông tin thu nhập -->\r\n          <h1 style=\"font-weight: bold; font-size: 13px; text-align: left; padding: 7px 6%;\">\r\n            {{_translate.TITLE.income_information | uppercase}}</h1>\r\n          <div>\r\n            <!-- Thgu nhập trong giai đoạn -->\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.CONTROLL.LABEL.income_in_the_period_from}}</span></div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.income_from_date\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Đến -->\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>Đến</span>\r\n                </div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.income_to_date\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Thu nhập chịu thuế   -->\r\n          <div class=\"column\" *ngIf=\"inforFields('so-tien-txn').is_show || !frmData.template_id\">\r\n            <div class=\"field\">\r\n              <div class=\"label\">{{_translate.CONTROLL.LABEL.income_taxes}} <img src=\"assets/img/icons/SoThapPhan.png\"\r\n                  (click)=\"configDecimal('thu_xac_nhan_thu_nhap')\" style=\"cursor: pointer;\">\r\n              </div>\r\n              <div class=\"value\">\r\n                <dx-number-box [(value)]=\"frmData.income_taxes\" [format]=\"formatter.thu_xac_nhan_thu_nhap\"\r\n                  [showClearButton]=\"true\">\r\n                </dx-number-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: flex;\">\r\n            <!-- Số tiền chịu thuế tại VN -->\r\n            <div class=\"column\" *ngIf=\"inforFields('so-tien-tai-viet-nam-txn').is_show || !frmData.template_id\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.taxable_amount_in_Vietnam}} <img\r\n                    src=\"assets/img/icons/SoThapPhan.png\" (click)=\"configDecimal('thu_xac_nhan_thu_nhap')\"\r\n                    style=\"cursor: pointer;\"></div>\r\n                <div class=\"value\">\r\n                  <dx-number-box [(value)]=\"frmData.income_taxes_in_vietnam\" [format]=\"formatter.thu_xac_nhan_thu_nhap\"\r\n                    [showClearButton]=\"true\">\r\n                  </dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Tại nước ngoài -->\r\n            <div class=\"column\" *ngIf=\"inforFields('so-tien-tai-nuoc-ngoai-txn').is_show || !frmData.template_id\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.in_a_foreign_country}} <img\r\n                    src=\"assets/img/icons/SoThapPhan.png\" (click)=\"configDecimal('thu_xac_nhan_thu_nhap')\"\r\n                    style=\"cursor: pointer;\"></div>\r\n                <div class=\"value\">\r\n                  <dx-number-box [(value)]=\"frmData.income_taxable_abroad\" [format]=\"formatter.thu_xac_nhan_thu_nhap\"\r\n                    [showClearButton]=\"true\">\r\n                  </dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: flex;\">\r\n            <!-- Các khoản khấu trừ ngoài Việt Nam  -->\r\n            <div class=\"column\" *ngIf=\"inforFields('cac-khoan-bi-tru-txn').is_show || !frmData.template_id\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.deductions_outside_Vietnam}} <img\r\n                    src=\"assets/img/icons/SoThapPhan.png\" (click)=\"configDecimal('thu_xac_nhan_thu_nhap')\"\r\n                    style=\"cursor: pointer;\"></div>\r\n                <div class=\"value\">\r\n                  <dx-number-box [(value)]=\"frmData.deductions_outside_vietnam\" [showClearButton]=\"true\"\r\n                    [format]=\"formatter.thu_xac_nhan_thu_nhap\" [showClearButton]=\"true\">\r\n                  </dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Thuế thu nhập các nhân -->\r\n            <div class=\"column\" *ngIf=\"inforFields('thue-thu-nhap-ca-nhan-txn').is_show || !frmData.template_id\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.personal_income_tax}} <img\r\n                    src=\"assets/img/icons/SoThapPhan.png\" (click)=\"configDecimal('thu_xac_nhan_thu_nhap')\"\r\n                    style=\"cursor: pointer;\"></div>\r\n                <div class=\"value\">\r\n                  <dx-number-box [(value)]=\"frmData.personal_income_tax\" [format]=\"formatter.thu_xac_nhan_thu_nhap\"\r\n                    [showClearButton]=\"true\">\r\n                  </dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: flex;\">\r\n            <!-- Các khoản đóng bảo hiểm  -->\r\n            <div class=\"column\" *ngIf=\"inforFields('bao-hiem-xa-hoi-txn').is_show || !frmData.template_id\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.insurance_contributions}} <img\r\n                    src=\"assets/img/icons/SoThapPhan.png\" (click)=\"configDecimal('thu_xac_nhan_thu_nhap')\"\r\n                    style=\"cursor: pointer;\"></div>\r\n                <div class=\"value\">\r\n                  <dx-number-box [(value)]=\"frmData.insurance_payments\" [format]=\"formatter.thu_xac_nhan_thu_nhap\"\r\n                    [showClearButton]=\"true\">\r\n                  </dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Các khoản bị khẩu trừ khác -->\r\n            <div class=\"column\" *ngIf=\"inforFields('khoan-khau-tru-khac-txn').is_show || !frmData.template_id\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.other_deductions}} <img\r\n                    src=\"assets/img/icons/SoThapPhan.png\" (click)=\"configDecimal('thu_xac_nhan_thu_nhap')\"\r\n                    style=\"cursor: pointer;\"></div>\r\n                <div class=\"value\">\r\n                  <dx-number-box [(value)]=\"frmData.deductions\" [format]=\"formatter.thu_xac_nhan_thu_nhap\"\r\n                    [showClearButton]=\"true\">\r\n                  </dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <h1 style=\"font-weight: bold; font-size: 13px; padding: 7px 6%;\">\r\n            {{_translate.TITLE.other_information | uppercase}}</h1>\r\n          <div>\r\n            <!-- Tiền thuê nhà -->\r\n            <div class=\"column\" *ngIf=\"inforFields('tien-thue-nha-txn').is_show || !frmData.template_id\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.house_rent}} <img src=\"assets/img/icons/SoThapPhan.png\"\r\n                    (click)=\"configDecimal('thu_xac_nhan_thu_nhap')\" style=\"cursor: pointer;\"></div>\r\n                <div class=\"value\">\r\n                  <dx-number-box [(value)]=\"frmData.rent_money\" [format]=\"formatter.thu_xac_nhan_thu_nhap\"\r\n                    [showClearButton]=\"true\">\r\n                  </dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Số hợp đồng -->\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.vehicle_contract_number}}</div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.contract_number\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.CONTROLL.LABEL.day_contract}}</span></div>\r\n                <div class=\"value\">\r\n                  <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n                    <dxi-item dataField=\"contract_date\" editorType=\"dxDateBox\"\r\n                      [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', showClearButton: true}\">\r\n                      <dxo-label [visible]=\"false\"></dxo-label>\r\n                    </dxi-item>\r\n                  </dx-form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"column name-customer\">\r\n              <dx-form [formData]=\"customerTempt\" [items]=\"formItems\"\r\n                style=\"margin-top:7px; margin-bottom: 10px\" class=\"customer-tempt\">\r\n              </dx-form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row rowButton\" style=\"padding-left: 7%;padding-right: 1%;\">\r\n        <div class=\"col-md-12\" style=\"padding-right: 50px;\">\r\n          <div class=\"pull-left\">\r\n            <!-- Xem trước -->\r\n            <dx-button disableDoubleClick *ngIf=\"!DaXuat\" (click)=\"preview()\" [(icon)]=\"this._translate.ICONS.view\"\r\n              text=\"{{_translate.CONTROLL.BUTTON.preview}}\" type=\"default\"></dx-button>\r\n            <!-- in thư -->\r\n            <!-- <dx-button *ngIf=\"DaXuat\" (click)=\"view()\" [(icon)]=\"this._translate.ICONS.view\"\r\n              text=\"{{_translate.CONTROLL.BUTTON.print_letter}}\" type=\"default\"></dx-button> -->\r\n            <!-- Xem thư -->\r\n            <dx-button disableDoubleClick *ngIf=\"DaXuat\" (click)=\"view()\" [(icon)]=\"this._translate.ICONS.view\"\r\n              text=\"{{_translate.CONTROLL.BUTTON.see_letter}}\" type=\"default\"></dx-button>\r\n          </div>\r\n          <div class=\"pull-right\">\r\n            <!-- xuất thư-->\r\n            <dx-button disableDoubleClick *ngIf=\"!DaXuat\" type=\"default\" text=\"{{_translate.CONTROLL.BUTTON.export_letter}}\"\r\n              [(icon)]=\"this._translate.ICONS.export_inv\" (click)=\"eSubmit('XUAT',true)\" [disabled]=\"isDisableXuat\">\r\n            </dx-button>\r\n            <!-- xuất thư-->\r\n            <dx-button disableDoubleClick *ngIf=\"DaXuat\" type=\"default\" text=\"{{_translate.CONTROLL.BUTTON.export_again}}\"\r\n              [(icon)]=\"this._translate.ICONS.export_inv\" (click)=\"eSubmit('XUAT',true)\"></dx-button>\r\n            <!-- Ghi tạm -->\r\n            <dx-button disableDoubleClick *ngIf=\"!DaXuat\" (click)=\"eSubmit('GHI_TAM')\" type=\"default\" [disabled]=\"isDisableGhiTam\"\r\n              text=\"{{_translate.CONTROLL.BUTTON.save_temporary}}\" [(icon)]=\"this._translate.ICONS.save\">\r\n            </dx-button>\r\n            <!-- Đóng -->\r\n            <dx-button disableDoubleClick (click)=\"dong()\" [(icon)]=\"this._translate.ICONS.come_back\" type=\"default\"\r\n              text=\"{{_translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Button -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!-- <div class=\"row\" style=\"background-color: #F5F5F5;height: 20px;\"></div> -->\r\n  </div>\r\n  <!-- <div class=\"col-md-1\" style=\"background-color: #F5F5F5;\"></div> -->\r\n</div>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/vouchers/components/income-confirmation/income-confirmation.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/income-confirmation/income-confirmation.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .column{display:inline-block;margin:0;text-align:right}:host::ng-deep .column .field{padding:5px 0;text-align:center}::ng-deep .day{width:32%}::ng-deep .day .field .label{width:61px !important}::ng-deep .day .field .value{width:56% !important}::ng-deep .day .field .dx-datebox{width:100% !important}::ng-deep .column .field>div{display:inline-block;vertical-align:middle}:host::ng-deep .column .field .label{text-align:right}:host::ng-deep .column .field .value .dx-texteditor-input{padding-bottom:3px !important}::ng-deep .number .field .value .dx-texteditor-input{color:red;font-weight:bold;padding-bottom:0px}::ng-deep .column .field .value{width:53%}::ng-deep .column .field .value .dx-selectbox{border-radius:0}::ng-deep .column .field .value .dx-datebox{border-radius:0}::ng-deep .column .field .value .dx-datebox .dx-texteditor-input{min-height:20px;max-height:25px}::ng-deep .column .field .value .dx-texteditor-input{min-height:20px;max-height:25px}::ng-deep .column .field .valueProcess{width:56%}::ng-deep .column .field .valueProcess .dx-selectbox{border-radius:0}::ng-deep .column .field .valueProcess .dx-datebox{border-radius:0}::ng-deep .column .field .valueProcess .dx-datebox .dx-texteditor-input{min-height:20px;max-height:25px;padding:3px 35px 3px 3px !important}::ng-deep .column .field .valueProcess .dx-texteditor-input{min-height:20px;max-height:25px}::ng-deep .search-date{width:100%}::ng-deep .search-date .dx-texteditor-input{padding-top:5px !important;padding-bottom:0px}::ng-deep .search-panel .dx-textbox .dx-texteditor-input{padding-top:5px !important;padding-bottom:0px}::ng-deep .proof-of-tax-deduction .dx-textbox .dx-texteditor-input,::ng-deep .advanced-invoice-buy .dx-textbox .dx-texteditor-input{padding-bottom:3px}.search-panel{width:100%}.search-panel .dx-texteditor{border-radius:0}.search-panel .column{width:68%}.search-panel .label{margin:0}.search-panel .value{width:76% !important}.search-panel .value .dx-textbox{width:83%;display:inline-flex}.search-panel .value .dx-button{position:relative;top:-2px;border-left:0;height:27px}.search-panel .value .dx-button-content{padding-right:0 !important}.search-panel .value .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .value #advBtn{margin-top:0;width:5%}.search-panel .value #searchBtn{margin-top:0;width:9%}.search-panel .valueProcess{width:63%}.search-panel .valueProcess .dx-textbox{width:94%;display:inline-flex}.search-panel .valueProcess .dx-button{position:relative;top:-2px;border-left:0;height:27px}.search-panel .valueProcess .dx-button-content{padding-right:0 !important}.search-panel .valueProcess .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .valueProcess #advBtn{margin-top:0;width:5%}.search-panel .valueProcess #searchBtn{margin-top:0;width:9%}.voucher-container{width:100%;height:100%}.voucher-container .proof-of-tax-deduction{transition:all .3s linear 0s;width:100%;display:flex;flex-direction:column;align-items:center}.voucher-container .proof-of-tax-deduction .proof{width:100%}.voucher-container .proof-of-tax-deduction .proof .custom{display:flex}.voucher-container .proof-of-tax-deduction .proof .dx-texteditor{border-radius:0}.voucher-container .proof-of-tax-deduction .proof .column{width:50%}.voucher-container .proof-of-tax-deduction .proof .column .value{width:47%}.voucher-container .proof-of-tax-deduction .proof .column .loai-tien{width:44% !important}.voucher-container .proof-of-tax-deduction .proof .name-customer{width:100% !important}.voucher-container .proof-of-tax-deduction .proof .name-customer .label{width:25%}.voucher-container .proof-of-tax-deduction .proof .name-customer .value{width:47% !important}.voucher-container .proof-of-tax-deduction .proof div .citizen-id .label{width:47%}.voucher-container .proof-of-tax-deduction .proof div .time .label{width:26%}.voucher-container .proof-of-tax-deduction .proof div .time .value{width:20%}.voucher-container .proof-of-tax-deduction .proof .citizen-id .label{width:20%}.voucher-container .proof-of-tax-deduction .proof .name-customer-buy{width:35.07% !important}.voucher-container .proof-of-tax-deduction .proof .name-customer-buy .value{width:63.5% !important}.voucher-container .proof-of-tax-deduction .proof :host .dx-fieldset{width:100px}.voucher-container .proof-of-tax-deduction .group-btn{width:80%;display:flex;justify-content:space-between}.voucher-container .proof-of-tax-deduction .group-btn .btn{padding:10px 10px 10px !important}.button-ok{height:30px;padding-bottom:10px !important;padding-left:20px}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-popup-content{padding-top:5px !important;padding-left:5px !important;padding-right:5px !important;padding-bottom:0 !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-treeview{height:80% !important;padding-bottom:5px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .processing_status-search.dx-treeview,::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .exporter-search.dx-treeview{height:75% !important;padding-bottom:5px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-button-search{border-radius:12px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-button-search .dx-button-content .dx-icon{font-size:13px !important}.rowButton{margin-top:25px;margin-bottom:10px}::ng-deep .nguoi-nop-thue .dx-field-item-label-text{font-weight:bold !important}::ng-deep .khong-co-mst .dx-field-item-label-text{color:red;font-style:italic}::ng-deep .thang-thu-nhap .dx-field-item-label{width:125px}::ng-deep .thang-thu-nhap .dx-field-item-label-content{width:110px !important}::ng-deep .tinh-tien .dx-texteditor-container .dx-texteditor-input-container .dx-texteditor-input{padding:0px 3px}::ng-deep .thue-thu-nhap .dx-field-item-label-location-left{padding-right:18px}::ng-deep .chungtu.invoice-number-create-invoice input{color:red;font-weight:bold}.req-text{margin-left:2px;color:red}::ng-deep .so-tien .dx-texteditor-input{padding:0px 9px 0px 9px}::ng-deep.custom-input .dx-texteditor-container .dx-texteditor-input-container .dx-texteditor-input{padding:0px 0px 0px 3px;height:25px}@media (min-width: 1367px){::ng-deep.custom-input .dx-field-item-label{padding-left:28px;padding-right:10px}}@media (max-width: 1367px) and (min-width: 1023px){::ng-deep.custom-input .dx-field-item-label{padding-left:0px;padding-right:10px}}:host::ng-deep .dx-item .dx-texteditor{width:91%}::ng-deep .prv-s-invoice .modal-content{border:0px;border-radius:0px}::ng-deep .v-s-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/vouchers/components/income-confirmation/income-confirmation.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/income-confirmation/income-confirmation.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: IncomeConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeConfirmationComponent", function() { return IncomeConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vouchers/shared */ "./src/app/modules/vouchers/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
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





















var IncomeConfirmationComponent = /** @class */ (function () {
    function IncomeConfirmationComponent(authService, translate, modalService, fb, voucherService, socketService, cdRef, confirmService, spinner, route, router, configsService, customeModalService, vPreviewInvService) {
        this.authService = authService;
        this.translate = translate;
        this.modalService = modalService;
        this.fb = fb;
        this.voucherService = voucherService;
        this.socketService = socketService;
        this.cdRef = cdRef;
        this.confirmService = confirmService;
        this.spinner = spinner;
        this.route = route;
        this.router = router;
        this.configsService = configsService;
        this.customeModalService = customeModalService;
        this.vPreviewInvService = vPreviewInvService;
        this.select = {};
        this.configs = {};
        this.priorities = [
            { code: 1, name: 'Có' },
            { code: 0, name: 'Không' }
        ];
        this.DaXuat = false;
        this.fileData = [];
        this.tempKiFile = 0;
        this.isAccessExportInv = false;
        this.confirmCheckPreview = false;
        this._isValid = false;
        this._oTemplateTT78 = {};
        this.formItems = [];
        this.customForms = [];
        this.customerTempt = {};
        this.extentionGrid = {};
        this.taxCode = '';
        this.province_name = '';
        this.fields = [];
        this.emailPattern = _config_index__WEBPACK_IMPORTED_MODULE_17__["pattern"].email;
        this.arrEmail = [];
        this.emails = [];
        this.isDisableGhiTam = true;
        this.isDisableXuat = true;
        this.is_voucher_currency = false;
        this.currentIndex = 3;
        this.onChangeCity = function (e) {
            var ts = e;
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    IncomeConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectWebsocket();
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser.account) {
            this.taxCode = this.currentUser.account.tax_code;
            if (this.currentUser.account.van_account_info)
                this.province_name = this.currentUser.account.van_account_info.city_name;
        }
        this.routeSub = this.route.data.subscribe(function (data) {
            // get cấu hình
            var danh_muc = _this.authService.getDMLocal();
            _this.configs = _this.authService.getConfigs();
            _this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_8__["VChanggeMoneyService"].getFormatterColumnInv(_this.configs.decimal_places_json);
            // this.frmData.display_currency = JSON.stringify(this.configs.display_currency);
            _this.formatter.display_int = _this.configs.system_parameter.display_int;
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.select_provisions_on_accounts = danh_muc.DM_DINH_KHOAN ? danh_muc.DM_DINH_KHOAN.data : null;
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            _this.select.countrys = danh_muc.DM_QUOC_GIA ? danh_muc.DM_QUOC_GIA.data : null;
            _this.select.cities = danh_muc.DM_TINH_THANH ? danh_muc.DM_TINH_THANH.data : null;
            var isEdit = false; //có TXN chưa ?
            var invoice;
            if (data.init[1] == true && _this.route.snapshot.paramMap.get('idTXN')) {
                isEdit = true;
            }
            if (isEdit) {
                _this.select.templatesTT78 = data.init[2].filter(function (item) { return item.template_type == 'THU_XAC_NHAN_THU_NHAP'; });
                invoice = data.init[3];
            }
            else {
                if (data.init[2]) {
                    _this.select.templatesTT78 = data.init[2].filter(function (item) { return item.template_type == 'THU_XAC_NHAN_THU_NHAP'; });
                }
                else {
                    _this.select.templatesTT78 = data.init[0].filter(function (item) { return item.template_type == 'THU_XAC_NHAN_THU_NHAP'; });
                }
            }
            if (isEdit) {
                _this.khoiTaoKhiSua(invoice);
            }
            else {
                _this.khoiTaoKhiThemMoi();
                _this.frmData.name = data.init[0].taxpayers_name;
                _this.frmData.income_taxes = data.init[0].total_taxable_income_deducted;
                _this.frmData.personal_income_tax = data.init[0].amount_personal_income_tax_withheld;
                _this.frmData.insurance_payments = data.init[0].compulsory_insurance_payment ? Number(data.init[0].compulsory_insurance_payment) : null;
            }
            if (_this.configs.system_parameter.is_voucher_currency) {
                _this.is_voucher_currency = true;
            }
            _this.changeValueTempt();
            _this.setDisableBtn();
            _this.setDataSessionStorage(_this.frmData);
        });
        var listpermissions = this.currentUser.user.permissions.split(',');
        var _obj = listpermissions.filter(function (p) { return p === 'phe_duyet'; });
        if (_obj.length > 0) {
            this.isAccessExportInv = true;
        }
        else {
            this.isAccessExportInv = false;
        }
    };
    IncomeConfirmationComponent.prototype.setDisableBtn = function () {
        if (this.frmData_ct && this.frmData_ct.status) {
            if (this.frmData_ct.status === 'GHI_TAM') {
                this.isDisableXuat = true;
                this.isDisableGhiTam = false;
            }
            else {
                this.isDisableXuat = false;
                this.isDisableGhiTam = false;
            }
        }
        else {
            this.isDisableXuat = true;
            this.isDisableGhiTam = true;
        }
    };
    IncomeConfirmationComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
        this.routeSub.unsubscribe();
    };
    IncomeConfirmationComponent.prototype.ngAfterViewInit = function () {
        if (this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].statusInv.DaXuat) {
            this.disablleScreen();
            this.cdRef.detectChanges();
        }
    };
    // Bật modal thay đổi số thập phân
    IncomeConfirmationComponent.prototype.configDecimal = function (n) {
        var _this = this;
        var initialState = {
            column: n,
            formatter: this.formatter,
            isTxn: true,
        };
        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_4__["ConfigDecimalComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                // this.formatter[data.column] = data.character;
                // this._tinhGiaTri();
            }
            subModal.unsubscribe();
        });
    };
    IncomeConfirmationComponent.prototype.readonlyAllForm = function () {
        // this.listDxForm._results.forEach(item => {
        //   item.readOnly = true;
        // });
    };
    // removeReadonlyAllForm() {
    //   // this.listDxForm._results.forEach(item => {
    //   //   item.readOnly = false;
    //   // });
    //   this.DaXuat = false;
    // }
    /*  */
    IncomeConfirmationComponent.prototype.khoiTaoKhiThemMoi = function () {
        this.fileData = [];
        if (this.select.templatesTT78.length) {
            this.frmData.template_id = this.select.templatesTT78[0].value;
            this.fields = this.select.templatesTT78[0].fields;
            for (var key in this.select.templatesTT78[0]) {
                if (this.select.templatesTT78[0].hasOwnProperty(key)) {
                    this._oTemplateTT78[key] = this.select.templatesTT78[0][key];
                }
            }
            this.invoiceTemplateTT78 = this.select.templatesTT78[0];
        }
        var license_date = moment__WEBPACK_IMPORTED_MODULE_9__(new Date()).format('YYYY-MM-DD HH:mm:ss');
        // this.frmData.license_date = license_date;
        // this.frmData.province_name = this.province_name;
    };
    /*  */
    IncomeConfirmationComponent.prototype.khoiTaoKhiSua = function (data) {
        var _this = this;
        // khởi tạo dữ liệu form
        this.frmData.fillFormData(data);
        // lấy file
        // let isOldTemp = this.select.templatesTT78.filter(p => p.value == data.template_id)[0]
        // let lengthTemp = isOldTemp.fields.filter(p => p.code == "tien-dong-bao-hiem-nnt")
        // if (lengthTemp.length > 0) {
        this.fields = this.select.templatesTT78.filter(function (p) { return p.value == data.template_id; })[0].fields;
        // } else {
        //   this.fields = this.dataSourceTNCN;
        // }
        if (this.voucherService.isCopy) {
            this.fileData = [];
            var _oTempt = this.select.templatesTT78.filter(function (p) { return p.value === _this.frmData.template_id; })[0];
            if (_oTempt) {
                this.frmData.template_id = _oTempt.value;
                // this.frmData.license_series = _oTempt.invoice_series;
                // this.frmData.template_code = _oTempt.template_code;
            }
            else {
                this.frmData.template_id = null;
                // this.frmData.license_series = null;
                // this.frmData.template_code = null;
            }
        }
        else {
            this.fileData = data.license_files;
        }
        this.select.templatesTT78.forEach(function (item) {
            if (item.value === _this.frmData.template_id) {
                _this.invoiceTemplateTT78 = item;
            }
        });
        this.select.templatesTT78.some(function (item) {
            if (item.value === _this.frmData.template_id) {
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        _this._oTemplateTT78[key] = item[key];
                    }
                }
                return true;
            }
        });
        // if (this.frmData.taxpayers_email) {
        //   this.emails = [];
        //   const emailToString = this.frmData.taxpayers_email;
        //   const a11 = emailToString.replace(/;/g, ',');
        //   this.emails = a11.split(',');
        // }
        // cấu hình thập phân thêm mới
        // this.formatter = VChanggeMoneyService.getFormatterColumnInv(JSON.parse(data.decimal_places_json));
    };
    IncomeConfirmationComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
        var status;
        status = _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].processInv.ThemMoi;
        if (!this.frmData.id) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].processInv.ThemMoi;
        }
        if (this.frmData.id && this.frmData.status === "GHI_TAM") {
            status = _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].statusInv.GhiTam;
        }
        if (this.frmData.id && this.frmData.status === 'DA_XUAT') {
            status = 'XUAT_LAI';
        }
        var xmlInvoice = "";
        if (status === _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].processInv.ThemMoi || status === 'XUAT_LAI') {
            this.frmData.id = null;
            if (this.frmData.license_confirm_letter_options) {
                this.frmData.license_confirm_letter_options.forEach(function (item) {
                    delete item.id;
                });
            }
            var sub_1 = this.voucherService.ghiTamThuXacNhan(this.frmData).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.id = rs.data.id;
                    _this.setDataSessionStorage(_this.frmData);
                    _this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                    //  Lấy xml từ serer
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _this.goiApiXuatHoaDon(rs.data.pdf_file.file_content);
                    }
                    else {
                        _this.xuLyKiFile(rs.data.pdf_file);
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else if (status === _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].statusInv.GhiTam) {
            var sub_2 = this.voucherService.updateGhiTamThuXacNhan(this.frmData, this.frmData.id).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _this.goiApiXuatHoaDon(rs.data.pdf_file.file_content);
                    }
                    else {
                        _this.xuLyKiFile(rs.data.pdf_file, rs.data.sign_date);
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                sub_2.unsubscribe();
            });
        }
    };
    IncomeConfirmationComponent.prototype.goiApiXuatHoaDon = function (data) {
        var _this = this;
        var license_confirm_letter = {
            id: this.frmData.id,
            pdf_file: {
                file_name: "thu_xac_nhan.pdf",
                file_content: data
            }
        };
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
        }, 20);
        var sub = this.voucherService.xuatTXN(license_confirm_letter).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.disablleScreen();
                // this.fileData = this.frmData.license_files;
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                _this.isExportInvoice = true;
                _this.setDataSessionStorage(_this.frmData);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IncomeConfirmationComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        this.socketService.kiFile(function () { return _this.connectWebsocket(); }, xmlInvoice.file_content, 'thu_xac_nhan.pdf', 'pdf', this.nodeSign, signDate, 'ALIGN_LEFT', 'PAGE_LAST', null, this.taxCode);
    };
    /* Kết nối đến socket */
    IncomeConfirmationComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                if (data.Data.Name === 'thu_xac_nhan.pdf') {
                    _this.goiApiXuatHoaDon(data.Data.Content);
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    _this.frmData.issuer_name = data.Data.IssuerName;
                    _this.xuLiApiKhiXuat();
                }
                else {
                    // this.frmData.license_files.forEach(item => {
                    //   if (item.file_name === data.Data.Name) {
                    //     item.file_content = data.Data.Content;
                    //   }
                    // });
                    _this.tempKiFile++;
                    // if (this.tempKiFile === this.frmData.license_files.length) {
                    //   this.xuLiApiKhiXuat();
                    // }
                }
            }
        });
    };
    /* Disbale Form */
    IncomeConfirmationComponent.prototype.disablleScreen = function () {
        this.readonlyAllForm();
        this.DaXuat = true;
    };
    /*  */
    IncomeConfirmationComponent.prototype.setDataSessionStorage = function (data) {
        this.valueChange = JSON.stringify(data);
        // localStorage.setItem('txn', JSON.stringify(this.valueChange))
    };
    IncomeConfirmationComponent.prototype.setDataSessionStorage_lct = function () {
        this.setDataSessionStorage(this.frmData);
    };
    IncomeConfirmationComponent.prototype.setFrmdataStorage_lct = function () {
        this.frmData = JSON.parse(this.valueChange);
    };
    /*  */
    IncomeConfirmationComponent.prototype.checkDataFormChange = function (dataChange, dataForm) {
        var dataBefore = JSON.parse(dataChange);
        var dataAfter = JSON.parse(JSON.stringify(dataForm));
        return lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"](dataBefore, dataAfter);
        // return true;
    };
    IncomeConfirmationComponent.prototype.updateData_lct = function () {
        var _this = this;
        this.setDisableBtn();
        setTimeout(function () {
            if (!_this.frmData.id) {
                var setMapFields = {
                    'name': 'taxpayers_name',
                    'insurance_payments': 'compulsory_insurance_payment',
                    'income_taxes': 'total_taxable_income_deducted',
                    'personal_income_tax': 'amount_personal_income_tax_withheld'
                };
                for (var key in setMapFields) {
                    _this.frmData[key] = _this.frmData_ct[setMapFields[key]] ? _this.frmData_ct[setMapFields[key]] : _this.frmData[key];
                }
            }
            _this.setDataSessionStorage(_this.frmData);
        });
    };
    IncomeConfirmationComponent.prototype.checkDataFormChange_lct = function () {
        if (!this.frmData.id) {
            return this.checkDataFormChange(this.valueChange, this.frmData);
        }
        return true;
    };
    /*  */
    IncomeConfirmationComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.configsService.getAll().subscribe(function (res) {
            if (res.data && res.data.configs) {
                _this.authService.setConfigs(res.data.configs);
                _this.configs = _this.authService.getConfigs();
            }
        });
        if (!this.checkDataFormChange(this.valueChange, this.frmData)) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"](function (observer) {
                _this.confirmService.confirm().subscribe(function (value) {
                    switch (value) {
                        case 'yes':
                            _this.subData(_core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].statusInv.GhiTam, _this.frmData).then(function (value1) {
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
        else {
            return true;
        }
    };
    /*  */
    IncomeConfirmationComponent.prototype.subData = function (type, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // const checkValid = this.form.instance.validate();
                        // if (!checkValid.isValid) {
                        //   return false;
                        // }
                        if (this.windowPreviewBeforeSubmit) {
                            this.windowPreviewBeforeSubmit.focus();
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.handleFormDataSub()];
                    case 1:
                        _a.sent();
                        if (this.frmData.license_confirm_letter_options) {
                            this.frmData.license_confirm_letter_options.forEach(function (item) {
                                delete item['is_show'];
                                delete item['type'];
                                delete item['width'];
                                delete item['statusData'];
                                delete item['index_name'];
                                delete item['name_en'];
                            });
                        }
                        if (!data.id) return [3 /*break*/, 3];
                        _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
                        return [4 /*yield*/, this.voucherService.updateGhiTamThuXacNhan(data, data.id).toPromise().then(function (res) {
                                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
                                if (res.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
                        return [4 /*yield*/, this.voucherService.ghiTamThuXacNhan(data).toPromise().then(function (res) {
                                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
                                if (res.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /*  */
    IncomeConfirmationComponent.prototype.handleFormDataSub = function () {
        var _this = this;
        var wait = function (delay) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return new Promise(function (resolve) { return setTimeout.apply(void 0, [resolve, delay].concat(args)); });
        };
        return wait(200).then(function () {
            // this.fileData =[];
            _this.tempKiFile = 0;
            // this.frmData.license_files = JSON.parse(JSON.stringify(this.fileData));
            // this.frmData.license_files = []
            // this.frmData.decimal_places_json = JSON.stringify(VChanggeMoneyService.getObjFormatterToColumn(this.formatter));
            return true;
        });
    };
    /* Xuất hóa đơn */
    IncomeConfirmationComponent.prototype.eSubmit = function (type, isCheckNoVat) {
        var _this = this;
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        this.tong_tien = "";
        // this.setCurrencyVoucher();
        setTimeout(function () {
            _this.handleFormData();
            _this._isValid = _this._validForm();
            if (!_this._isValid) {
                return;
            }
            _this._isValid = _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_13__["InvoicesService"].checkTimeExportInv(_this.configs.system_parameter);
            if (!_this._isValid) {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_14__["String"].Format(_this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_9__(_this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_9__(_this.configs.system_parameter.time_end).format('HH:mm')), 'error');
                return;
            }
            if (_this.frmData.license_confirm_letter_options) {
                _this.frmData.license_confirm_letter_options.forEach(function (item) {
                    delete item['is_show'];
                    delete item['type'];
                    delete item['width'];
                    delete item['statusData'];
                    delete item['index_name'];
                    delete item['name_en'];
                });
            }
            if (type === 'XUAT' || (type === _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].statusInv.TrinhKy && _this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].hinhThucXuat.XuatChoKy)) {
                _this.processXuatHoaDon(type, isCheckNoVat);
            }
            else {
                _this.processGhiTam(type);
            }
        }, 300);
    };
    /* Xử lý xuất hóa đơn */
    IncomeConfirmationComponent.prototype.processXuatHoaDon = function (type, isCheckNoVat) {
        var _this = this;
        if (type === _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].statusInv.TrinhKy && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].hinhThucXuat.XuatChoKy) {
            this.confirmCheckPreview = true;
        }
        if (this.confirmCheckPreview) {
            if (this.frmData.status !== _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].hinhThucXuat.XuatChoKy) {
                this.xuatHoaDon(this.frmData);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Helper"].confirmXuatChoKy(function () {
                    _this.xuatChoKy(_this.frmData);
                });
            }
            this.confirmCheckPreview = false;
        }
        else {
            this.previewBeforeExport(type);
        }
    };
    IncomeConfirmationComponent.prototype.previewBeforeExport = function (type) {
        var _this = this;
        this.handleFormData();
        var trang_thai = this._translate.THONG_TIN.xuat_va_ky;
        var du_lieu = this.voucherService.taodulieuxemtruoctxn(this.frmData);
        du_lieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].cauhinhxemmau.thuxacnhan;
        var content_invoice = {
            du_lieu: du_lieu,
            trang_thai: trang_thai,
            title_invoice_type: this._translate.THONG_TIN.ban_du_thao_thu_xac_nhan_thu_nhap.toUpperCase(),
            is_display_img_note: false,
            text_tong_tien: this._translate.THONG_TIN.tong_tien,
            question_again: this._translate.THONG_TIN.ban_co_chac_chan_xuat_thu_xac_nhan_khong
        };
        var initialState = {
            content_invoice: content_invoice,
        };
        this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_18__["PreviewInvoiceComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-xl prv-s-invoice v-s-invoice',
            initialState: initialState
        });
        var subModal = this.customeModalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem == _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].actionHander.DongY) {
                _this.confirmCheckPreview = true;
                _this.eSubmit(type);
            }
            subModal.unsubscribe();
        });
    };
    /* Xử lý ghi tạm hóa đơn */
    IncomeConfirmationComponent.prototype.processGhiTam = function (type) {
        this.ghiTam(this.frmData);
    };
    IncomeConfirmationComponent.prototype.handleFormData = function () {
        this.tempKiFile = 0;
        this.frmData.license_id = this.frmData_ct.id;
        console.log('this.frmData_ct: ', this.frmData_ct);
        // this.frmData.license_files = [];//JSON.parse(JSON.stringify(this.fileData));
        // this.frmData.decimal_places_json = JSON.stringify(VChanggeMoneyService.getObjFormatterToColumn(this.formatter));
    };
    IncomeConfirmationComponent.prototype.newLicenseConfirm_lct = function () {
        this.frmData = new _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_5__["ConfirmLettersModel"]();
        this.khoiTaoKhiThemMoi();
        this.DaXuat = false;
        this.updateData_lct();
    };
    /* Validate */
    IncomeConfirmationComponent.prototype._validForm = function () {
        var _isValid = true;
        if (!this.frmData.template_id) {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(this._translate.CONTROLL.LABEL.invoice_form + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.name) {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(this._translate.CONTROLL.LABEL.fullname + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        // if (!this.frmData.province_name) {
        //   Library.notify(this._translate.CONTROLL.LABEL.province_city + ' ' + this._translate.VALIDATION.required, 'error');
        //   return false;
        // }
        // if (!this.frmData.taxpayers_name) {
        //   Library.notify(this._translate.CONTROLL.LABEL.fullname + ' ' + this._translate.VALIDATION.required, 'error');
        //   return false;
        // }
        // if (!this.frmData.nationality) {
        //   Library.notify(this._translate.CONTROLL.LABEL.nationality + ' ' + this._translate.VALIDATION.required, 'error');
        //   return false;
        // }
        // if (!this.frmData.taxpayers_tax_code && !this.frmData.id_card) {
        //   Library.notify(this._translate.CONTROLL.LABEL.req_taxcode_cmnd, 'error');
        //   return false;
        // }
        // if (!this.frmData.year_pay_income) {
        //   Library.notify(this._translate.CONTROLL.COMBO.year + ' ' + this._translate.VALIDATION.required, 'error');
        //   return false;
        // }
        // if (this.frmData.taxpayers_email && !this.emailPattern.test(this.frmData.taxpayers_email)) {
        //   Library.notify("Email" + ' ' + this._translate.VALIDATION.not_pattern, 'error');
        //   return false;
        // }
        return _isValid;
    };
    /* Ghi tạm */
    IncomeConfirmationComponent.prototype.ghiTam = function (data) {
        var _this = this;
        if (this.frmData.id) {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
            var sub_3 = this.voucherService.updateGhiTamThuXacNhan(data, this.frmData.id).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.id = rs.data.id;
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                    _this.setDataSessionStorage(_this.frmData);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
                sub_3.unsubscribe();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
            var sub_4 = this.voucherService.ghiTamThuXacNhan(data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.frmData.id = rs.data.id;
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                    // if (this.frmData.license_id && this.frmData.id) {
                    // this.router.navigate([`/system/voucher-tax/${this.frmData.license_id};idTXN=${this.frmData.id}`])
                    // this.router.navigate([`/system/voucher-tax/${VStringService._getValueToString(this.frmData.license_id)}`, { idTXN: this.frmData.id }]);
                    // }
                    _this.setDataSessionStorage(_this.frmData);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
                sub_4.unsubscribe();
            });
        }
    };
    IncomeConfirmationComponent.prototype.xuatHoaDon = function (data) {
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            this.xuLiApiKhiXuat();
        }
    };
    /* Xuất chờ ký */
    IncomeConfirmationComponent.prototype.xuatChoKy = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].showloading();
        var sub = this.voucherService.xuatChoKy(data).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.frmData.id = rs.data.id;
                // this.frmData.license_number = rs.data.license_number;
                // this.frmData.license_date = moment(rs.data.license_date).format('YYYY-MM-DD HH:mm:ss');
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                _this.setDataSessionStorage(_this.frmData);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_8__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    IncomeConfirmationComponent.prototype.onChangeTem = function (e) {
        var _this = this;
        this.select.templatesTT78.forEach(function (item) {
            if (e.value === item.value) {
                _this.fields = item.fields;
                _this.frmData.template_id = item.value;
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        var value = item[key];
                        _this._oTemplateTT78[key] = value;
                    }
                }
                // Nếu là mẫu html
                if (item.fields) {
                    _this.formItems = [];
                    _this.customForms = [];
                    var _arrayGrid = item.fields.filter(function (x) { return x.type === '5'; });
                    if (_arrayGrid && _arrayGrid.length > 0) {
                        _this.extentionGrid.ma_hang = false;
                        _this.extentionGrid.so_lo = false;
                        _this.extentionGrid.han_dung = false;
                        _this.extentionGrid.nuoc_san_xuat = false;
                        _this.extentionGrid.don_hang_hop_dong = false;
                        _this.extentionGrid.ma_quan_ly = false;
                        for (var i = 0; i < _arrayGrid.length; i++) {
                            var column = _arrayGrid[i]['name'];
                            var value = _arrayGrid[i]['is_show'];
                            var _ma = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._convertToViKdau(column);
                            _this.extentionGrid[_core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._convertToViKdau(column)] = value;
                        }
                    }
                    var _dulieumorong_1 = item.fields.filter(function (x) { return x.type === '4'; });
                    if (_dulieumorong_1.length > 0) {
                        _dulieumorong_1.forEach(function (item1) {
                            if (item1.is_show) {
                                if (item1.data_type === 'chu') {
                                    _this.customForms.push({
                                        cssClass: 'custom-input',
                                        editorType: 'dxTextBox',
                                        dataField: item1.code,
                                        label: { text: item1.name },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_1);
                                            }
                                        }
                                    });
                                }
                                if (item1.data_type === 'soluong') {
                                    _this.customForms.push({
                                        cssClass: 'custom-input',
                                        editorType: 'dxNumberBox',
                                        dataField: item1.code,
                                        label: { text: item1.name },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_1);
                                            },
                                            format: _this.formatter.thu_xac_nhan_thu_nhap,
                                            showClearButton: true
                                        }
                                    });
                                }
                                if (item1.data_type === 'ngay') {
                                    _this.customForms.push({
                                        cssClass: 'custom-input',
                                        editorType: 'dxDateBox',
                                        dataField: item1.code,
                                        label: { text: item1.name },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_1);
                                            }, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss',
                                        }
                                    });
                                }
                                if (item1.data_type === 'danhmuc') {
                                    _this.customForms.push({
                                        cssClass: 'custom-input',
                                        editorType: 'dxSelectBox',
                                        dataField: item1.code,
                                        label: { text: item1.name }
                                    });
                                }
                            }
                        });
                        _this.formItems.push(_this.createCustomGroup());
                        _this.frmData.license_confirm_letter_options = _dulieumorong_1;
                    }
                    else
                        _this.frmData.license_confirm_letter_options = [];
                    _dulieumorong_1.forEach(function (value) {
                        _this.customerTempt[value.code] = value.value;
                    });
                }
                else {
                    _this.formItems = [];
                    _this.customerTempt = {};
                    _this.extentionGrid.ma_hang = false;
                    _this.extentionGrid.so_lo = false;
                    _this.extentionGrid.han_dung = false;
                    _this.extentionGrid.nuoc_san_xuat = false;
                    _this.extentionGrid.don_hang_hop_dong = false;
                    _this.extentionGrid.ma_quan_ly = false;
                }
            }
        });
    };
    IncomeConfirmationComponent.prototype.changeValueTempt = function () {
        var _this = this;
        this.select.templatesTT78.forEach(function (item) {
            if (item.value === _this.frmData.template_id) {
                // Nếu là mẫu html
                if (item.fields && item.fields.length > 0) {
                    _this.formItems = [];
                    _this.customForms = [];
                    var _arrayGrid = item.fields.filter(function (x) { return x.type === '5'; });
                    if (_arrayGrid && _arrayGrid.length > 0) {
                        _this.extentionGrid.ma_hang = false;
                        _this.extentionGrid.so_lo = false;
                        _this.extentionGrid.han_dung = false;
                        _this.extentionGrid.nuoc_san_xuat = false;
                        _this.extentionGrid.don_hang_hop_dong = false;
                        _this.extentionGrid.ma_quan_ly = false;
                        for (var i = 0; i < _arrayGrid.length; i++) {
                            var column = _arrayGrid[i]['name'];
                            var value = _arrayGrid[i]['is_show'];
                            var _ma = _core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._convertToViKdau(column);
                            _this.extentionGrid[_core_index__WEBPACK_IMPORTED_MODULE_8__["VStringService"]._convertToViKdau(column)] = value;
                        }
                    }
                    var _dulieumorong_2 = item.fields.filter(function (x) { return x.type === '4'; });
                    if (_dulieumorong_2.length > 0) {
                        _dulieumorong_2.forEach(function (item1) {
                            if (item1.is_show) {
                                if (item1.data_type === 'chu') {
                                    _this.customForms.push({
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
                                        editorType: 'dxNumberBox',
                                        dataField: item1.code,
                                        label: { text: item1.name },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_2);
                                            },
                                            format: _this.formatter.thu_xac_nhan_thu_nhap,
                                            showClearButton: true
                                        }
                                    });
                                }
                                if (item1.data_type === 'ngay') {
                                    _this.customForms.push({
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
                                        editorType: 'dxSelectBox',
                                        dataField: item1.code,
                                        label: { text: item1.name }
                                    });
                                }
                            }
                        });
                        _this.formItems.push(_this.createCustomGroup());
                    }
                    if (_this.frmData.license_confirm_letter_options && _this.frmData.license_confirm_letter_options.length > 0) {
                        _this.frmData.license_confirm_letter_options.forEach(function (iteminv) {
                            _this.customerTempt[iteminv.code] = iteminv.value;
                        });
                    }
                    else {
                        _dulieumorong_2.forEach(function (item2) {
                            _this.customerTempt[item2.code] = item2.value;
                        });
                        _this.frmData.license_confirm_letter_options = _dulieumorong_2;
                    }
                }
            }
        });
    };
    /////// sự kiện thay đổi các trường mở rộng
    IncomeConfirmationComponent.prototype.changeItem = function (_dulieumorong) {
        var _this = this;
        _dulieumorong.forEach(function (item) {
            for (var key in _this.customerTempt) {
                if (item.code === key) {
                    item.value = _this.customerTempt[key];
                }
            }
            _this.frmData.license_confirm_letter_options = _dulieumorong;
        });
    };
    ////// Tạo form mở rộng
    IncomeConfirmationComponent.prototype.createCustomGroup = function () {
        return {
            itemType: 'group',
            colCount: '2',
            items: this.customForms
        };
    };
    IncomeConfirmationComponent.prototype.disableTemplateInput = function () {
        // if (this.frmData.license_number) {
        //   return true;
        // }
        // return false;
    };
    IncomeConfirmationComponent.prototype.tinhgiatri = function () {
        // if (!this.frmData.auto_value) {
        //   if (this.frmData.total_taxable_income_paid != null && this.frmData.amount_personal_income_tax_withheld != null)
        //     this.frmData.amount_personal_income_still_received = VChanggeMoneyService.roundNumber(this.frmData.total_taxable_income_paid - this.frmData.amount_personal_income_tax_withheld, this.formatter.so_tncncdn);
        //   else if (this.frmData.total_taxable_income_paid != null)
        //     this.frmData.amount_personal_income_still_received = VChanggeMoneyService.roundNumber(this.frmData.total_taxable_income_paid, this.formatter.so_tncncdn);
        //   else if (this.frmData.amount_personal_income_tax_withheld != null)
        //     this.frmData.amount_personal_income_still_received = VChanggeMoneyService.roundNumber(this.frmData.amount_personal_income_tax_withheld, this.formatter.so_tncncdn);
        // }
    };
    /* Xem trước thư xác nhận */
    IncomeConfirmationComponent.prototype.preview = function () {
        var _this = this;
        setTimeout(function () {
            _this.handleFormData();
            if (!_this._validForm()) {
                return;
            }
            var data = _this.voucherService.taodulieuxemtruoctxn(_this.frmData);
            data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].cauhinhxemmau.thuxacnhan;
            _this.vPreviewInvService.xemMau(data);
        }, 300);
    };
    IncomeConfirmationComponent.prototype.view = function () {
        var ids = [];
        ids.push(this.frmData.id);
        var dulieu;
        if (this.frmData.status == 'GHI_TAM') {
            dulieu = this.voucherService.taodulieuxemtruoctxn(this.frmData);
            dulieu['configs'] = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].cauhinhxemmau.thuxacnhan); //clone đối tượng
        }
        else {
            dulieu = this.voucherService.taodulieuxemtxn(ids);
            dulieu['configs'] = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_core_index__WEBPACK_IMPORTED_MODULE_8__["sEnum"].cauhinhxemmau.thuxacnhan);
            dulieu['configs']['is_view_server'] = true;
        }
        this.vPreviewInvService.xemMau(dulieu);
    };
    IncomeConfirmationComponent.prototype.renderDataEmail = function ($event) {
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
            // this.frmData.taxpayers_email = emailToString.replace(/,/g, ';');
        }
        else {
            // this.frmData.taxpayers_email = null;
        }
    };
    IncomeConfirmationComponent.prototype.keyDown = function (e) {
        if (e.event.key === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    IncomeConfirmationComponent.prototype.onChangeAutoValue = function () {
        this.tinhgiatri();
    };
    ;
    // /* Tạo mới */
    // handleAddNew() {
    //   if (this.isExportInvoice) {
    //     this.addNew();
    //   } else {
    //     if (!this.checkDataFormChange(this.valueChange, this.frmData)) {
    //       this.confirmService.confirm()
    //         .subscribe(
    //           value => {
    //             switch (value) {
    //               case 'yes':
    //                 this.subData(sEnum.statusInv.GhiTam, this.frmData).then(res => {
    //                   if (res) {
    //                     this.addNew();
    //                   } else {
    //                     return;
    //                   }
    //                 });
    //                 break;
    //               case 'no':
    //                 this.addNew();
    //                 break;
    //               case 'cancel':
    //                 this.addNew();
    //                 break;
    //               default:
    //                 break;
    //             }
    //           }
    //         );
    //     } else {
    //       this.addNew();
    //     }
    //   }
    // }
    /* Tạo mới */
    // addNew() {
    //   const inv = Object.assign({}, this.frmData);
    //   // this.frmData = new VoucherModel(1);
    //   // this.frmData.template_id = inv.template_id;
    //   // this.frmData.license_series = inv.license_series;
    //   // this.frmData.template_code = inv.template_code;
    //   // this.frmData.license_date = inv.license_date;
    //   // this.frmData.province_name = inv.province_name;
    //   // this.formatter = VChanggeMoneyService.getFormatterColumnInv(JSON.parse(inv.decimal_places_json));
    //   this.emails = [];
    //   this.DaXuat = false;
    //   this.removeReadonlyAllForm();
    //   this.setDataSessionStorage(this.frmData);
    // }
    IncomeConfirmationComponent.prototype.totalTaxableChange = function (e) {
        // this.frmData.total_taxable_income_paid = e.value;
        this.tinhgiatri();
    };
    IncomeConfirmationComponent.prototype.inforFields = function (field_name) {
        var ojb = this.fields.filter(function (p) { return p.code == field_name; });
        if (ojb.length > 0) {
            if (ojb[0].is_show) {
                return { is_show: true };
            }
            else {
                return { is_show: false };
            }
        }
        else {
            return { is_show: false };
        }
    };
    IncomeConfirmationComponent.prototype.onChangeCurrency = function (e) {
        if (e) {
            this.configs.system_parameter["is_voucher_currency"] = e.value;
            if (!e.value) {
                this.is_voucher_currency = false;
                // this.frmData.currency_code = '';
            }
            else {
                this.is_voucher_currency = true;
            }
        }
    };
    IncomeConfirmationComponent.prototype.setCurrencyVoucher = function () {
        var _this = this;
        // this.configs.system_parameter["voucher_currency"] = this.frmData.currency_code;
        var id = this.configs.id.system_parameter;
        var data = {
            config: {
                value: JSON.stringify(this.configs.system_parameter)
            }
        };
        this.voucherService.updateConfig(id, data).subscribe(function (res) {
            if (res.status == 'success') {
                _this.configsService.getAll().subscribe(function (res) {
                    if (res.data && res.data.configs)
                        _this.authService.setConfigs(res.data.configs);
                });
            }
        });
    };
    IncomeConfirmationComponent.prototype.dong = function () {
        this.router.navigate(["/system/voucher-tax"]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxFormComponent"]),
        __metadata("design:type", Object)
    ], IncomeConfirmationComponent.prototype, "listDxForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxFormComponent"])
    ], IncomeConfirmationComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IncomeConfirmationComponent.prototype, "frmData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IncomeConfirmationComponent.prototype, "frmData_ct", void 0);
    IncomeConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-income-confirmation',
            template: __webpack_require__(/*! ./income-confirmation.component.html */ "./src/app/modules/vouchers/components/income-confirmation/income-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./income-confirmation.component.scss */ "./src/app/modules/vouchers/components/income-confirmation/income-confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_5__["VoucherService"],
            _core_index__WEBPACK_IMPORTED_MODULE_8__["SocketService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_16__["ConfigsService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_19__["MyBsModalService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_20__["ViewInvoiceService"]])
    ], IncomeConfirmationComponent);
    return IncomeConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/modules/vouchers/components/index/index.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/index/index.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-section\">\r\n  <div class=\"col-md-8\">\r\n    <app-voucher-search (searchContentChange)=\"getSearch($event)\"></app-voucher-search>\r\n  </div>\r\n  <div class=\"col-md-4 list-header\" style=\"max-height: 70px;\">\r\n    <div *ngIf=\"isLapChungTu\" class=\"pull-right button-panel\">\r\n      <dx-button [(icon)]=\"_translate.ICONS.plus\" text=\"{{ 'CONTROLL.BUTTON.create_vouchers' | translate }}\"\r\n        type=\"default\" (click)=\"createLicense()\"></dx-button>\r\n      <dx-button [(icon)]=\"_translate.ICONS.pencil\" (click)=\"kyHangLoat()\"\r\n        text=\"{{ 'CONTROLL.BUTTON.sign' | translate }}\" type=\"default\" [disabled]=\"!selectedRows.length\"></dx-button>\r\n      <dx-menu [dataSource]=\"extras\" displayExpr=\"name\" orientation=\"horizontal\" submenuDirection=\"auto\"\r\n        cssClass='button-dropdown-extend' (onItemClick)=\"itemExtrasClick($event)\">\r\n      </dx-menu>\r\n    </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid id=\"gridContainerInvoice\" (onSelectionChanged)=\"selectionChanged($event)\" [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" [(selectedRowKeys)]=\"selectedRows\" [allowColumnResizing]=\"true\" [columnMinWidth]=\"50\"\r\n  id=\"gridContainerVat\" [showBorders]=\"true\" [columnResizingMode]=\"true\" [wordWrapEnabled]=\"true\"\r\n  (onRowPrepared)=\"onRowPrepared($event)\" [noDataText]=\"textHienThiLuoi\" (onContentReady)=\"onContentReady($event)\">\r\n  <dxo-selection selectAllMode=\"{{pageSelect}}\" mode=\"multiple\">\r\n  </dxo-selection>\r\n  <!-- <dxo-state-storing [enabled]=\"true\" type=\"sessionStorage\" storageKey=\"handleinvoice\"></dxo-state-storing> -->\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"single\"></dxo-sorting>\r\n  <!-- <dxo-selection mode=\"multiple\"></dxo-selection> -->\r\n  <dxo-filter-row [visible]=\"true\" showAllText='{{_translate.CONTROLL.COMBO.all}}'></dxo-filter-row>\r\n  <!-- Số chứng từ -->\r\n  <dxi-column cellTemplate=\"licenseNumber\" dataField=\"license_number\"\r\n    caption=\"{{ 'CONTROLL.LABEL.vehicle_license_number' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.so_hoa_don}}\"\r\n    alignment=\"center\" sortOrder=\"desc\" [sortIndex]=\"1\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <!-- Mẫu số, ký hiệu -->\r\n  <dxi-column cellTemplate=\"templateCode\" [filterOperations]=\"['contains']\" [calculateFilterExpression]=\"calculateFilterExpression\"\r\n    caption=\"{{ 'GRID.INVOICE.template_code' | translate }}, {{ 'GRID.INVOICE.invoice_series' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.mau_so_ky_hieu}}\" alignment=\"center\"></dxi-column>\r\n  <!-- Ngày chứng từ -->\r\n  <dxi-column dataField=\"license_date\" [editorOptions]=\"{useMaskBehavior:true}\"\r\n    caption=\"{{ 'CONTROLL.LABEL.invoice_voucher' | translate }}\" minWidth=\"{{_translate.GRID_WIDTH.ngay_hoa_don}}\"\r\n    dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"dd/MM/yyyy\" alignment=\"center\"\r\n    headerCellTemplate=\"titleHeaderTemplate\" sortOrder=\"desc\" [sortIndex]=\"0\"></dxi-column>\r\n  <!-- Mã số thuế -->\r\n  <dxi-column dataField=\"taxpayers_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.ma_so_thue}}\" alignment=\"center\" allowSearch=\"true\">\r\n  </dxi-column>\r\n  <!-- Số CMND -->\r\n  <dxi-column dataField=\"id_card\" caption=\"{{ 'GRID.INVOICE.id_card' | translate }}\" alignment=\"center\" minWidth=\"120\">\r\n  </dxi-column>\r\n  <!-- Tên người nộp thuế -->\r\n  <dxi-column dataField=\"taxpayers_name\" caption=\"{{ 'GRID.INVOICE.taxpayer_name' | translate }}\" alignment=\"left\"\r\n    minWidth=\"160\"></dxi-column>\r\n  <!-- Số TNCN còn được nhận -->\r\n  <dxi-column dataField=\"amount_personal_income_still_received_format\"\r\n    caption=\"{{ 'GRID.INVOICE.amount_personal_income_still_received' | translate }}\" alignment=\"right\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\">\r\n  </dxi-column>\r\n  <dxi-column caption=\"Thư xác nhận thu nhập\" alignment=\"center\" cellTemplate=\"thuXacNhan\" [allowSorting]=\"false\"\r\n    dataField=\"license_confirm_letters.status\" minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\">\r\n    <dxo-lookup [dataSource]=\"adjustmentTypes\" valueExpr=\"code\" [displayExpr]=\"displayFunction\" width=\"120\"></dxo-lookup>\r\n  </dxi-column>\r\n  <!-- Email| Ghi chú -->\r\n  <dxi-column cellTemplate=\"actionEmail\" caption=\"{{ 'GRID.INVOICE.send_email_status' | translate }}\" alignment=\"center\"\r\n    minWidth=\"{{_translate.GRID_WIDTH.trang_thai_gui_mail}}\">\r\n  </dxi-column>\r\n  <!-- Chức năng -->\r\n  <dxi-column cellTemplate=\"actionIcon\" minWidth=\"{{_translate.GRID_WIDTH.hanh_dong}}\" alignment=\"center\">\r\n  </dxi-column>\r\n  <div *dxTemplate=\"let d of 'licenseNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewDetailVoucher(d.data)\" href=\"javascript:void(0)\">{{ d.data.license_number }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'templateCode'\">\r\n    <p style=\"text-decoration: underline;cursor: pointer;\">\r\n      {{ d.data.template_code }}</p>\r\n    <p style=\"text-decoration: underline;cursor: pointer;\">\r\n      {{ d.data.license_series }}</p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'thuXacNhan'\">\r\n    <a title=\"Xuất lại\" (click)=\"editTXN(d.data)\" href=\"javascript:void(0)\" style=\"color: #474747;\"\r\n      *ngIf=\"d.data.license_confirm_letters.length > 0 && d.data.license_confirm_letters[0].status == 'DA_XUAT'\"><i\r\n        class=\"{{_translate.ICONS.export_inv}}\" style=\"font-size: 20px; margin-right: 20px ;cursor: pointer;\"></i></a>\r\n    <a title=\"Lập thư XN\" (click)=\"editTXN(d.data)\" href=\"javascript:void(0)\" style=\"color: #474747;\"\r\n      *ngIf=\"d.data.license_confirm_letters.length > 0 && d.data.license_confirm_letters[0].status == 'GHI_TAM'\"> <i\r\n        class=\"{{_translate.ICONS.add_new}}\" style=\"font-size: 20px; margin-right: 20px ;cursor: pointer;\"></i></a>\r\n    <a title=\"Xem thư XN\" class=\"xemIcon actionIcon\" (click)=\"viewTXN(d.data.license_confirm_letters)\"\r\n      href=\"javascript:void(0)\" *ngIf=\"d.data.license_confirm_letters.length > 0\">\r\n    </a>\r\n    <a title=\"Lập thư XN\" *ngIf=\"d.data.license_confirm_letters.length === 0\" (click)=\"taoThuXacNhan(d.data)\"\r\n      style=\"color: #474747;\" href=\"javascript:void(0)\"> <i class=\"{{_translate.ICONS.add_new}}\"\r\n        style=\"font-size: 20px; cursor: pointer;\"></i></a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'statusSendTax'\">\r\n    {{d.data.license_date}}\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionEmail'\">\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status !='GIU_SO'\" class=\"chua-gui-khach-hang gach-chan\"\r\n      (click)=\"sendVoucher(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.un_sent' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'CHUA_GUI' && d.data.status =='GIU_SO'\" class=\"cho-ky\"\r\n      (click)=\"sendVoucher(d.data.id)\" href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_sign' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'GUI_LOI'\" class=\"chua-gui-khach-hang gach-chan\"\r\n      (click)=\"sendVoucher(d.data.id)\" href=\"javascript:void(0)\">Gửi mail lỗi</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_GUI'\" class=\"gach-chan\" (click)=\"sendVoucher(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.wait_for_it' | translate }}</a>\r\n    <a *ngIf=\"d.data.send_email_status == 'DA_NHAN'\" class=\"gach-chan\" (click)=\"sendVoucher(d.data.id)\"\r\n      href=\"javascript:void(0)\">{{ 'GRID.INVOICE.received' | translate }}</a>\r\n    <p *ngIf=\"!d.data.send_email_status\" href=\"javascript:void(0)\">{{ trangthaihoadon(d.data) }} <a\r\n        *ngIf=\"trangthaihoadon(d.data) == 'Lỗi ký HD' || trangthaihoadon(d.data) == 'Signed error'\" class=\"gach-chan\"\r\n        (click)=\"editNotSelect(d.data)\" href=\"javascript:void(0)\">({{ 'GRID.INVOICE.re_sign' | translate }})</a></p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.view_invoice}}\" class=\"xemIcon actionIcon\" (click)=\"view(d.data)\"\r\n      href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\"\r\n      href=\"javascript:void(0)\"></a>\r\n    <div class=\"dropdown\">\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.extend}}\" class=\"morongIcon actionIcon\" (click)=\"myFunction(d.data.id)\"\r\n        href=\"javascript:void(0)\"></a>\r\n      <div [id]=\"d.data.id\" class=\"dropdown-content\"\r\n        [ngClass]=\"{'last-drodown':( pageSize - 1 == d.rowIndex || pageSize - 2 == d.rowIndex || pageSize - 3 == d.rowIndex) && pageSize > 4, 'small-grid': pageSize < 5}\">\r\n        <a (click)=\"copy(d.data)\" href=\"javascript:void(0)\">{{'CONTROLL.BUTTON.copy' | translate}}\r\n          <i [class]=\"_translate.ICONS.copy\"></i></a>\r\n        <a (click)=\"inChuyenDoi(d.data)\" href=\"javascript:void(0)\">{{ 'CONTROLL.BUTTON.print_conversion' | translate }}\r\n            <i [class]=\"_translate.ICONS.print\"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"configs.system_parameter.number_row_per_page\"></dxo-paging>\r\n  <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 35, 50, 100]\" [showNavigationButtons]=\"true\"\r\n    [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page}}\">>\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n<!-- popup -->\r\n<app-download-pdf></app-download-pdf>\r\n"

/***/ }),

/***/ "./src/app/modules/vouchers/components/index/index.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/index/index.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chua-gui-khach-hang{color:red}.cho-ky{color:#008b8b}.gach-chan{text-decoration:underline}.search-section{padding-bottom:15px}.button-panel{margin-top:30px}.mainmenubtn{background-color:red;color:white;border:none;cursor:pointer;padding:20px;margin-top:20px}.last-drodown{bottom:30px}.small-grid{position:fixed  !important;right:39px !important}::ng-deep #gridContainerVat .dx-cell-focus-disabled{overflow:visible !important}::ng-deep #gridContainerVat .dx-datagrid-rowsview{overflow:visible}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/vouchers/components/index/index.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/vouchers/components/index/index.component.ts ***!
  \**********************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vouchers/shared */ "./src/app/modules/vouchers/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _import_voucher_from_excel_import_voucher_from_excel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../import-voucher-from-excel/import-voucher-from-excel.component */ "./src/app/modules/vouchers/components/import-voucher-from-excel/import-voucher-from-excel.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sign-many/sign-many.component */ "./src/app/modules/vouchers/components/sign-many/sign-many.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components/download-pdf/download-pdf.component */ "./src/app/shared/components/download-pdf/download-pdf.component.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
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















var IndexComponent = /** @class */ (function () {
    function IndexComponent(authService, translate, router, voucherService, modalService, modalImportService, socketService, vatService, vPreviewInvService, spinner) {
        var _this = this;
        this.authService = authService;
        this.translate = translate;
        this.router = router;
        this.voucherService = voucherService;
        this.modalService = modalService;
        this.modalImportService = modalImportService;
        this.socketService = socketService;
        this.vatService = vatService;
        this.vPreviewInvService = vPreviewInvService;
        this.spinner = spinner;
        this.selectedRows = [];
        this.selectedItems = [];
        this.configs = {};
        this.idRow = undefined;
        this.clickCurent = undefined;
        this.extras = [];
        this.templates = [];
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.loaiChungTu = '01CTT56';
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.select = {};
        this.invoices = [];
        this.isExportFailed = false;
        this.isLapChungTu = false;
        this.isTXN = false;
        this.adjustmentTypes = [
            { code: 'GHI_TAM', name: 'Chưa xuất' },
            { code: 'DA_XUAT', name: 'Đã xuất' }
        ];
        this.isViewGhiTam = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this.displayFunction = function (item) {
            if (!item) {
                return 'Tất cả'; // Thay thế từ "All" bằng "Tất cả"
            }
            return item.name;
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.extras = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.extend,
                items: [
                    {
                        id: "NAP_CT_TU_EXCEL",
                        name: this._translate.CONTROLL.BUTTON.import_license_from_excel,
                        icon: this._translate.ICONS.excel
                    },
                    {
                        id: 'SUA',
                        name: this._translate.CONTROLL.BUTTON.edit,
                        icon: this._translate.ICONS.edit
                    },
                    {
                        id: 'XOA',
                        name: this._translate.CONTROLL.BUTTON.delete,
                        icon: this._translate.ICONS.delete
                    },
                    {
                        id: 'XEM',
                        name: this._translate.CONTROLL.BUTTON.view_voucher,
                        icon: this._translate.ICONS.view
                    },
                    {
                        id: 'INCHUYENDOI',
                        name: this._translate.CONTROLL.BUTTON.print_conversion,
                        icon: this._translate.ICONS.print
                    },
                    {
                        id: 'GUI_BEN_MUA',
                        name: this._translate.CONTROLL.LABEL.send_voucher,
                        icon: this._translate.ICONS.send_email
                    },
                    {
                        id: 'TAI_CT_PDF',
                        name: this._translate.CONTROLL.BUTTON.tai_ct_pdf,
                        icon: this._translate.ICONS.download
                    },
                    {
                        id: "TAI_CT_XML",
                        name: this._translate.CONTROLL.BUTTON.tai_ct_xml,
                        icon: this._translate.ICONS.xml
                    }
                ]
            }];
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.textHienThiLuoi = "Không có dữ liệu";
        this.configs = this.authService.getConfigs();
        this.voucherService.isCopy = false;
        this.currentUser = this.authService.getCurrentUser();
        var listpermissions = this.currentUser.user.permissions.split(',');
        if (this.configs.system_parameter.select_invoice_current_page)
            this.pageSelect = "page";
        else
            this.pageSelect = "allPages";
        var quyenlapchungtu = listpermissions.filter(function (p) { return p === 'lap_chung_tu_khau_tru_thue_tncn'; })[0];
        if (quyenlapchungtu)
            this.isLapChungTu = true;
        if (!this.isLapChungTu) {
            this.textHienThiLuoi = "Bạn không có quyền thực hiện chức năng này";
        }
    };
    IndexComponent.prototype.selectionChanged = function (data) {
        this.hidenDropdownList();
        this.selectedItems = data.selectedRowsData;
    };
    IndexComponent.prototype.hidenDropdownList = function () {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (this.idRow) {
            document.getElementById(this.idRow).classList.remove('show');
        }
    };
    IndexComponent.prototype.loadList = function (params) {
        this.dataSource = {};
        if (this.isLapChungTu) {
            if (params) {
                this.dataSource.store = this.voucherService.getAll(params);
            }
            else {
                this.dataSource.store = this.voucherService.getAll();
            }
        }
    };
    IndexComponent.prototype.getSearch = function (e) {
        this.paramSearch = e;
        this.loadList(e);
    };
    IndexComponent.prototype.onRowPrepared = function (e) {
        if (e.rowType === 'data') {
            switch (e.data.status) {
                case 'DA_XUAT':
                    break;
                case 'GHI_TAM':
                    if (e.data.license_number) {
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
    IndexComponent.prototype.view = function (data) {
        if (this.selectedItems.length > 0 || data) {
            var _lst = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT' || p.status === 'GHI_TAM' || p.status === 'KY_LOI'; });
            if (_lst.length > 0 || data) {
                if (this.selectedItems.length === 1) {
                    this.dataInfor = this.selectedItems[0];
                }
                else {
                    this.dataInfor = data;
                }
                var ids = [];
                if (data) {
                    ids.push(data.id);
                }
                else {
                    ids = _lst.map(function (e) { return e.id; });
                }
                if (this.configs.system_parameter.view_multi_invoice) {
                    var data_1 = this.voucherService.taodulieuXemMau(ids);
                    data_1['configs'] = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.chungtu);
                    this.vPreviewInvService.xemMau(data_1);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.xem_chung_tu
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
    IndexComponent.prototype.viewTXN = function (data) {
        this.isTXN = true;
        var ids = [];
        data.forEach(function (item) {
            ids.push(item.id);
        });
        var dulieu;
        if (data[0].status == 'GHI_TAM') {
            dulieu = this.voucherService.taodulieuxemtruoctxn(data[0]);
            dulieu['configs'] = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.thuxacnhan); //clone đối tượng
        }
        else {
            dulieu = this.voucherService.taodulieuxemtxn(ids);
            dulieu['configs'] = lodash__WEBPACK_IMPORTED_MODULE_12__["cloneDeep"](_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.thuxacnhan);
            dulieu['configs']['is_view_server'] = true;
        }
        this.vPreviewInvService.xemMau(dulieu);
    };
    IndexComponent.prototype.edit = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee, rowData, template_id, templateTXN_id, index, recordCuoiCung;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.thunhapcanhan)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        rowData = null;
                        //edit 1 bản ghi
                        if (data) {
                            if (_core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(data.status) == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat)
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_voucher, 'error');
                            else
                                rowData = data;
                            if (rowData) {
                                if (rowData.license_confirm_letters.length > 0) {
                                    this.router.navigate(["/system/voucher-tax/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id), { idTXN: rowData.license_confirm_letters[0].id }]);
                                }
                                else {
                                    this.router.navigate(["/system/voucher-tax/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(rowData.id)]);
                                }
                            }
                        }
                        else {
                            if (this.selectedItems.length > 0) {
                                if (this.selectedItems.find(function (item) { return item.status == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat; })) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_voucher, 'error');
                                    return [2 /*return*/];
                                }
                                template_id = this.selectedItems[0].template_id;
                                templateTXN_id = null;
                                for (index = 0; index < this.selectedItems.length; index++) {
                                    if (this.selectedItems[index].template_id != template_id) {
                                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng chọn chứng từ và thư xác nhận có cùng mẫu.", 'error');
                                        return [2 /*return*/];
                                    }
                                    if (this.selectedItems[index].license_confirm_letters.length > 0) {
                                        recordCuoiCung = this.selectedItems[index].license_confirm_letters[this.selectedItems[index].license_confirm_letters.length - 1];
                                        if (templateTXN_id == null) {
                                            templateTXN_id = recordCuoiCung.template_id;
                                        }
                                        else if (recordCuoiCung.template_id != templateTXN_id) {
                                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng chọn chứng từ và thư xác nhận có cùng mẫu.", 'error');
                                            return [2 /*return*/];
                                        }
                                    }
                                }
                                // this.selectedItems.forEach(item => {
                                // })
                                // Mở form nạp excel
                                this.openImportForm(this.selectedItems, template_id, templateTXN_id);
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Vui lòng chọn chứng từ cần sửa.', 'error');
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.editTXN = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.thunhapcanhan)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        this.router.navigate(["/system/voucher-tax/" + _core_index__WEBPACK_IMPORTED_MODULE_4__["VStringService"]._getValueToString(data.id), { isThuXacNhan: true, idTXN: data.license_confirm_letters[0].id }]);
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, status_1, ids_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.thunhapcanhan)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (this.selectedItems.length || data) {
                            status_1 = '';
                            ids_1 = '';
                            if (data) {
                                ids_1 = data.id;
                            }
                            else {
                                ids_1 = this.selectedRows.join(',');
                            }
                            result = _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
                            result.then(function (dialogResult) {
                                if (dialogResult) {
                                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                                    _this.voucherService.delete(ids_1).subscribe(function (rs) {
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
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.kyHangLoat = function () {
        var _this = this;
        var check = this.selectedItems.filter(function (item) { return item.status != 'DA_XUAT'; });
        var checkDaSuat = this.selectedItems.filter(function (item) { return item.status == 'DA_XUAT'; });
        if (check.length > 0 && checkDaSuat.length == 0) {
            // if (this.selectedItems.length > 50) {
            //   Library.notify(this._translate.NOTIFY.only_up_to_25_invoices_can_be_selected_for_sign, 'error');
            //   return false;
            // }
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var ids_2 = [];
            ids_2 = this.selectedRows;
            this.voucherService.getInvoicesWaitSign(ids_2).subscribe(function (rs) {
                if (rs.status === 'success') {
                    var initialState = {
                        licenseList: rs.data.licenses,
                        configs: rs.data.configs,
                        isHdGTGT: _this.loaiChungTu === '01GTKT' ? true : false,
                        ids: ids_2
                    };
                    _this.bsModalSignRef = _this.modalService.show(_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_11__["SignManyComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-lg full-modal',
                        initialState: initialState
                    });
                    var subModal_1 = _this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalSignRef.content.successSaveItem) {
                            _this.selectedItems = [];
                            _this.selectedRows = [];
                            _this.loadList(_this.paramSearch);
                            subModal_1.unsubscribe();
                        }
                    });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng chỉ chọn chứng từ ghi tạm hoặc ký lỗi", 'error');
        }
    };
    IndexComponent.prototype.guibenmua = function (data) {
        var _this = this;
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        var check = true;
        if (data) {
            if (data.status !== 'DA_XUAT') {
                check = false;
            }
        }
        else {
            if (this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; }).length === 0) {
                check = false;
            }
        }
        if (check && (this.selectedItems.length || data)) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            var ids_3 = [];
            if (data) {
                ids_3.push(data.id);
            }
            else {
                ids_3 = this.selectedItems.filter(function (p) { return p.status === 'DA_XUAT'; }).map(function (p) { return p.id; });
            }
            this.voucherService.getListVoucher(ids_3).subscribe(function (rs) {
                if (rs.status === 'success') {
                    var initialState = {
                        licenseList: rs.data.licenses,
                        configs: _this.configs,
                        ids: ids_3
                    };
                    _this.bsModalSignRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_7__["SendListVoucherComponent"], {
                        backdrop: 'static',
                        keyboard: false,
                        class: 'modal-lg full-modal',
                        initialState: initialState
                    });
                    var subModal_2 = _this.modalService.onHide.subscribe(function () {
                        if (_this.bsModalSignRef.content.successSaveItem) {
                            _this.selectedItems = [];
                            _this.selectedRows = [];
                            _this.loadList(_this.paramSearch);
                            subModal_2.unsubscribe();
                        }
                    });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.no_invoice_selected, 'error');
        }
    };
    IndexComponent.prototype.taiHDXml = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                var ids = [];
                ids = _lst.map(function (e) { return e.id; });
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                var sub_1 = this.voucherService.xuatCTXml(ids).subscribe(function (rs) {
                    if (rs.status == "success") {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].dowloadFile(rs.data.file_name, 'zip', rs.data.file_content);
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, "error");
                    }
                }, function (err) { }, function () {
                    sub_1.unsubscribe();
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.please_choose_voucher_exported, 'error');
                return;
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.please_choose_voucher_exported, 'error');
            return;
        }
    };
    IndexComponent.prototype.taiHDPdf = function () {
        if (this.selectedItems.length > 0) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].statusInv.DaXuat; });
            if (_lst.length > 0) {
                var ids = _lst.map(function (e) { return e.id; });
                this.downloadPdf.downloadPdf(ids, 'licenses', 'license', false);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.please_choose_voucher_exported, 'error');
                return;
            }
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.please_choose_voucher_exported, 'error');
            return;
        }
    };
    IndexComponent.prototype.createLicense = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.thunhapcanhan)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        this.router.navigate(['system/voucher-tax/create']);
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'KY_SO') {
            this.kyHangLoat();
        }
        else if (e.itemData.id === 'SUA') {
            this.edit(null);
        }
        else if (e.itemData.id === 'XOA') {
            this.delete(null);
        }
        else if (e.itemData.id === 'XEM') {
            this.view(null);
        }
        else if (e.itemData.id === 'GUI_BEN_MUA') {
            this.guibenmua(null);
        }
        else if (e.itemData.id === 'LIST_INVOICE_BUY') {
            this.guibenmua(null);
        }
        else if (e.itemData.id === 'DETAILS_OF_EACH_GOODS_AND_SERVICE') {
            this.guibenmua(null);
        }
        else if (e.itemData.id === 'ADD_MULTIPLE_INVOICE') {
            this.guibenmua(null);
        }
        else if (e.itemData.id == "TAI_CT_XML") {
            this.taiHDXml();
        }
        else if (e.itemData.id == "TAI_CT_PDF") {
            this.taiHDPdf();
        }
        else if (e.itemData.id == "NAP_CT_TU_EXCEL") {
            this.napHDTuExcelDt();
        }
        else if (e.itemData.id === 'INCHUYENDOI') {
            this.inChuyenDoi(null);
        }
    };
    IndexComponent.prototype.sendVoucher = function (id) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var ids = [];
        ids.push(id);
        var sub = this.voucherService.layDanhSachChungTu(ids).subscribe(function (rs) {
            if (rs.status == 'success') {
                var initialState = {
                    licenses: rs.data.licenses,
                };
                _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_7__["LogProcessVoucherComponent"], {
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
    IndexComponent.prototype.trangthaihoadon = function (data) {
        switch (data.status) {
            case 'DA_XUAT':
                break;
            case 'GHI_TAM':
                if (data.license_number) {
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
    IndexComponent.prototype.editNotSelect = function (row) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.thunhapcanhan)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        if (row.status === 'DA_XUAT') {
                            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.you_cannot_edit_an_exported_voucher, 'error');
                        }
                        else {
                            this.router.navigate(["/system/voucher-tax/" + row.id]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.viewDetailVoucher = function (row) {
        if (row.license_confirm_letters.length > 0) {
            this.router.navigate(["/system/voucher-tax/" + row.id, { idTXN: row.license_confirm_letters[0].id }]);
        }
        else {
            this.router.navigate(["/system/voucher-tax/" + row.id]);
        }
    };
    IndexComponent.prototype.taoThuXacNhan = function (row) {
        return __awaiter(this, void 0, void 0, function () {
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.thunhapcanhan)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        this.router.navigate(["/system/voucher-tax/" + row.id, { isThuXacNhan: true }]);
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.copy = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee, row, sub;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.thunhapcanhan)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        row = data ? data : this.selectedItems[0];
                        sub = this.voucherService.show(row.id).subscribe(function (rs) {
                            if (rs.status == 'success') {
                                if (rs.data.license) {
                                    rs.data.license.id = null;
                                    rs.data.license.origin_id = null;
                                    rs.data.license.status = null;
                                    rs.data.license.license_number = null;
                                    rs.data.license.destroy_date = null;
                                    rs.data.license.destroy_reason = null;
                                    rs.data.license.adjustment_type = 1;
                                    rs.data.license.license_sign_date = null;
                                    rs.data.license.send_email_status = null;
                                    rs.data.license.verify_code = null;
                                    if (rs.data.license.license_options && rs.data.license.license_options.length > 0) {
                                        rs.data.license.license_options.forEach(function (item) {
                                            delete item['id'];
                                            delete item['license_id'];
                                        });
                                    }
                                    _this.voucherService.data = rs.data.license;
                                    _this.voucherService.isCopy = true;
                                }
                                if (_this.voucherService.data) {
                                    _this.router.navigate(['system/voucher-tax/create']);
                                }
                                // if (this.loaiHoaDon === '01GTKT') {
                                //   this.router.navigate(['system/vat-invoice/create']);
                                // } else {
                                //   if (this.loaiHoaDon == sEnum.loaihoadon.KPTQ07)
                                //     this.router.navigate(['system/non-tariff-invoice/create']);
                                //   else if (this.loaiHoaDon == sEnum.loaihoadon.GTTT02)
                                //     this.router.navigate(['system/sale-invoice/create']);
                                // }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Xử lý sự kiện click phần mở rộng của từng hóa đơn*/
    IndexComponent.prototype.myFunction = function (id) {
        if (this.clickCurent !== '' && this.clickCurent !== id) {
            var valueCurrent = document.getElementById(this.clickCurent);
            if (!valueCurrent)
                document.getElementById(id).classList.toggle('show');
            else {
                document.getElementById(this.clickCurent).classList.remove('show');
                document.getElementById(id).classList.toggle('show');
            }
        }
        else
            document.getElementById(id).classList.toggle('show');
        this.clickCurent = id;
    };
    IndexComponent.prototype.openImportForm = function (data, template_id, templatesTXN_id) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        if (data && data.length > 0) {
            this.voucherService.getEditImportVoucher(lodash__WEBPACK_IMPORTED_MODULE_12__["map"](data, 'id'), this.loaiChungTu).subscribe(function (res) {
                _this.license = res[0].data.licenses;
                _this.templates = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToVoucherResolver(res[1]);
                var initialState = {
                    templates: _this.templates.filter(function (item) { return item.template_type !== 'THU_XAC_NHAN_THU_NHAP'; }),
                    templatesTXN: _this.templates.filter(function (item) { return item.template_type == 'THU_XAC_NHAN_THU_NHAP'; }),
                    licensesImport: _this.license,
                    template_id: template_id,
                    templatesTXN_id: templatesTXN_id
                };
                _this.bsModalImportRef = _this.modalImportService.show(_import_voucher_from_excel_import_voucher_from_excel_component__WEBPACK_IMPORTED_MODULE_8__["ImportVoucherFromExcelComponent"], {
                    backdrop: 'static',
                    keyboard: false,
                    class: 'modal-lg full-width',
                    initialState: initialState
                });
                var subModal = _this.modalImportService.onHide.subscribe(function () {
                    _this.dataGrid.instance.deselectAll();
                    _this.loadList(_this.paramSearch);
                    subModal.unsubscribe();
                });
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
    };
    IndexComponent.prototype.napHDTuExcelDt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isCheckInitFee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkInitialFee(_core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].initial_fee.thunhapcanhan)];
                    case 1:
                        isCheckInitFee = _a.sent();
                        if (!isCheckInitFee)
                            return [2 /*return*/];
                        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
                        this.voucherService.getImportVoucher(this.loaiChungTu).subscribe(function (res) {
                            // this.select.products = res[5].data.products;
                            if (res.status == 'success') {
                                _this.templates = _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].convertTemplatesToVoucherResolver(res);
                                var initialState = {
                                    templates: _this.templates.filter(function (item) { return item.template_type !== 'THU_XAC_NHAN_THU_NHAP'; }),
                                    templatesTXN: _this.templates.filter(function (item) { return item.template_type == 'THU_XAC_NHAN_THU_NHAP'; }),
                                    select: _this.select,
                                };
                                _this.bsModalImportRef = _this.modalImportService.show(_import_voucher_from_excel_import_voucher_from_excel_component__WEBPACK_IMPORTED_MODULE_8__["ImportVoucherFromExcelComponent"], {
                                    backdrop: 'static',
                                    keyboard: false,
                                    class: 'modal-lg full-width',
                                    initialState: initialState
                                });
                                var subModal_3 = _this.modalImportService.onHide.subscribe(function () {
                                    _this.loadList(_this.paramSearch);
                                    subModal_3.unsubscribe();
                                });
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.onContentReady = function (e) {
        if (e) {
            var dataSource = this.dataGrid.instance.getDataSource();
            this.pageSize = dataSource ? dataSource.items().length : 0;
        }
    };
    // convertKyHieu(license_series, license_date) {
    //   let year = "";
    //   if (VStringService._getValueToString(license_date) != "")
    //     year = VStringService._getValueToString(license_date).substring(4, 2);
    //   else {
    //     let invoiceDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    //     year = VStringService._getValueToString(invoiceDate).substring(4, 2);
    //   }
    //   return license_series.replace(license_series.substring(7, 5), year);
    // }
    IndexComponent.prototype.inChuyenDoi = function (data) {
        if (this.clickCurent) {
            document.getElementById(this.clickCurent).classList.remove('show');
        }
        if (this.selectedItems.length || data) {
            var _lst = this.selectedItems.filter(function (p) { return p.status == 'DA_XUAT'; });
            if (_lst.length > 0 || data) {
                var ids = [];
                if (data) {
                    if (data.status === 'DA_XUAT') {
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
                    var data_2 = this.voucherService.taodulieuInMau(ids, false);
                    data_2['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].cauhinhxemmau.chungtu;
                    this.vPreviewInvService.xemMau(data_2);
                }
                else {
                    var initialState = {
                        items: ids,
                        isXuatHD: false,
                        hinhthucxuat: '',
                        typeAction: _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].typeCode.in_chuyen_doi_tncn
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
    IndexComponent.prototype.calculateFilterExpression = function (filterValue, selectedFilterOperation) {
        selectedFilterOperation = "contains"; //Helper.multilfilterColumn;
        return [["template_code_temp", selectedFilterOperation || '=', filterValue], 'or', ["license_series_temp", selectedFilterOperation || '=', filterValue]];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_13__["DownloadPdfComponent"]),
        __metadata("design:type", _shared_components_download_pdf_download_pdf_component__WEBPACK_IMPORTED_MODULE_13__["DownloadPdfComponent"])
    ], IndexComponent.prototype, "downloadPdf", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/vouchers/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/vouchers/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_2__["VoucherService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_10__["VatService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_14__["ViewInvoiceService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/vouchers/components/send-mail/send-mail.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/send-mail/send-mail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  send-mail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/vouchers/components/send-mail/send-mail.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/send-mail/send-mail.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/vouchers/components/send-mail/send-mail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/send-mail/send-mail.component.ts ***!
  \******************************************************************************/
/*! exports provided: SendMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailComponent", function() { return SendMailComponent; });
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

var SendMailComponent = /** @class */ (function () {
    function SendMailComponent() {
    }
    SendMailComponent.prototype.ngOnInit = function () {
    };
    SendMailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-mail',
            template: __webpack_require__(/*! ./send-mail.component.html */ "./src/app/modules/vouchers/components/send-mail/send-mail.component.html"),
            styles: [__webpack_require__(/*! ./send-mail.component.scss */ "./src/app/modules/vouchers/components/send-mail/send-mail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SendMailComponent);
    return SendMailComponent;
}());



/***/ }),

/***/ "./src/app/modules/vouchers/components/send-vouchers/send-vouchers.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/send-vouchers/send-vouchers.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  send-vouchers works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/vouchers/components/send-vouchers/send-vouchers.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/send-vouchers/send-vouchers.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/vouchers/components/send-vouchers/send-vouchers.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/send-vouchers/send-vouchers.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SendVouchersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendVouchersComponent", function() { return SendVouchersComponent; });
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

var SendVouchersComponent = /** @class */ (function () {
    function SendVouchersComponent() {
    }
    SendVouchersComponent.prototype.ngOnInit = function () {
    };
    SendVouchersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-vouchers',
            template: __webpack_require__(/*! ./send-vouchers.component.html */ "./src/app/modules/vouchers/components/send-vouchers/send-vouchers.component.html"),
            styles: [__webpack_require__(/*! ./send-vouchers.component.scss */ "./src/app/modules/vouchers/components/send-vouchers/send-vouchers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SendVouchersComponent);
    return SendVouchersComponent;
}());



/***/ }),

/***/ "./src/app/modules/vouchers/components/sign-many/sign-many.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/sign-many/sign-many.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{ 'THONG_TIN.danh_sach_cho_ky_so' | translate }}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"dong()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <dx-data-grid id=\"gridContainer\" [dataSource]=\"licenseList\" [showRowLines]=\"true\" [allowColumnResizing]=\"true\"\r\n    [columnMinWidth]=\"50\" [columnResizingMode]=\"true\" [columnAutoWidth]=\"true\" [wordWrapEnabled]=\"true\">\r\n\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxi-column cellTemplate=\"invoiceNumber\" dataField=\"license_number\"\r\n      caption=\"{{ 'CONTROLL.LABEL.vehicle_license_number' | translate }}\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"template_code\" caption=\"{{ 'GRID.INVOICE.template_code' | translate }}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"license_series\" caption=\"{{ 'GRID.INVOICE.invoice_series' | translate }}\" alignment=\"center\"\r\n      [allowSorting]=\"false\" [allowFiltering]=\"false\"></dxi-column>\r\n    <dxi-column dataField=\"license_date\" caption=\"{{ 'CONTROLL.LABEL.invoice_voucher' | translate }}\"\r\n      dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\"></dxi-column>\r\n    <dxi-column dataField=\"taxpayers_tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\"\r\n      alignment=\"left\"></dxi-column>\r\n    <dxi-column dataField=\"id_card\" caption=\"{{ 'GRID.INVOICE.id_card' | translate }}\" alignment=\"left\"></dxi-column>\r\n    <dxi-column dataField=\"taxpayers_name\" caption=\"{{ 'GRID.INVOICE.taxpayer_name' | translate }}\" alignment=\"left\">\r\n    </dxi-column>\r\n    <!-- <dxi-column dataField=\"amount_personal_income_still_received\"\r\n      caption=\"{{ 'GRID.INVOICE.amount_personal_income_still_received' | translate }}\" dataType=\"number\"\r\n      format=\"0,###.##\" alignment=\"right\" minWidth=\"{{_translate.GRID_WIDTH.tong_tien}}\">\r\n    </dxi-column> -->\r\n    <dxi-column cellTemplate=\"statusCT\" caption=\"{{ 'THONG_TIN.trang_thai_chung_tu' | translate }}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column cellTemplate=\"statusTXN\" caption=\"{{ 'THONG_TIN.trang_thai_thu_xac_nhan' | translate }}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column cellTemplate=\"cellCheckbox\" headerCellTemplate=\"titleHeaderTemplate\">\r\n    \r\n    </dxi-column>\r\n    <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n      <p>{{ 'THONG_TIN.ky_so_txn' | translate }}</p>\r\n      <input class=\"all-checkbox\" type=\"checkbox\" (change)=\"changeCheckAll($event)\" [ngModel] = \"checkAll\" />\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'cellCheckbox'\" class=\"contain-checkbox\">\r\n      <input *ngIf=\"kiemtraTXN(d.data)\" class=\"item-checkbox\" type=\"checkbox\" [(ngModel)] = \"d.data.checkTXN\" (change)=\"changeCheckItem($event)\"/>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"viewDetailInvoice(d.data)\" href=\"javascript:void(0)\">{{ d.data.license_number\r\n        }}<span *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'templateCode'\">\r\n      <p>{{ d.data.template.template_code }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'customerName'\">\r\n      <p *ngIf=\"d.data.status !='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name }}</p>\r\n      <p *ngIf=\"d.data.status =='GIU_SO'\">{{ d.data.customer_name || d.data.buyer_name || 'Hóa đơn chờ ký' }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'statusCT'\">\r\n      <p style=\"color:green;\" *ngIf=\"d.data.status =='DA_XUAT'\">Đã ký</p>\r\n      <p style=\"color: red;\" *ngIf=\"d.data.status =='GHI_TAM' && d.data.license_number\">Ký lỗi</p>\r\n      <p style=\"color: rgb(222, 169, 96);\" *ngIf=\"d.data.status =='GHI_TAM' && !d.data.license_number\">Ghi tạm</p>\r\n      <p style=\"color: red;\" *ngIf=\"d.data.status !='DA_XUAT' && d.data.status !='GHI_TAM'\">{{ d.data.status }}</p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'statusTXN'\">\r\n      <div *ngIf=\"kiemtraTXN(d.data)\">\r\n        <p style=\"color:green;\" *ngIf=\"d.data.license_confirm_letters.length > 0 && d.data.license_confirm_letters[0].status =='DA_XUAT'\">Đã ký</p>\r\n        <p style=\"color: rgb(222, 169, 96);\" *ngIf=\"d.data.license_confirm_letters.length > 0 && d.data.license_confirm_letters[0].status =='GHI_TAM'\">Ghi tạm</p>\r\n        <p style=\"color: red;\" *ngIf=\"d.data.license_confirm_letters.length > 0 && d.data.license_confirm_letters[0].status !='DA_XUAT' && d.data.license_confirm_letters[0].status !='GHI_TAM'\">{{ d.data.license_confirm_letters[0].status }}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <dxo-remote-operations [sorting]=\"false\" [filtering]=\"false\"></dxo-remote-operations>\r\n    <dxo-paging [enabled]=\"false\"></dxo-paging>\r\n  </dx-data-grid>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <div style=\"width: 89%\">\r\n    <label class=\"custom-control-label label-block\" for=\"customRadio212\">{{reportCountERR}}</label>\r\n    <label class=\"custom-control-label label-block\" for=\"customRadio213\">{{reportCountTXN}}</label>\r\n  </div>\r\n\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.sign}}\" icon=\"{{_translate.ICONS.pencil}}\" *ngIf=\"!daXong\"\r\n    type=\"default\" (click)=\"kyHangLoat()\">\r\n  </dx-button>\r\n  <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" icon=\"{{_translate.ICONS.come_back}}\" type=\"default\"\r\n    (click)=\"dong()\">\r\n  </dx-button>\r\n</div>\r\n\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/vouchers/components/sign-many/sign-many.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/sign-many/sign-many.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-control-label{margin-top:4px;color:red;font-weight:800;font-family:Times New Roman}.all-checkbox{margin-top:5px;height:16px;width:16px}.contain-checkbox{display:flex;align-items:center;justify-content:center}.item-checkbox{height:16px;width:16px}.label-block{display:block}\n"

/***/ }),

/***/ "./src/app/modules/vouchers/components/sign-many/sign-many.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/sign-many/sign-many.component.ts ***!
  \******************************************************************************/
/*! exports provided: SignManyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignManyComponent", function() { return SignManyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/vouchers/shared */ "./src/app/modules/vouchers/shared/index.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
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









var SignManyComponent = /** @class */ (function () {
    function SignManyComponent(bsModalRef, vatService, socketService, authService, router, spinner, voucherService, vPreviewInvService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.vatService = vatService;
        this.socketService = socketService;
        this.authService = authService;
        this.router = router;
        this.spinner = spinner;
        this.voucherService = voucherService;
        this.vPreviewInvService = vPreviewInvService;
        this.licenseIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.valueProgress = 0;
        this.errorImport = false;
        this.showPopup = false;
        this.isExportFailed = false;
        this.reportCountERR = "";
        this.reportCountTXN = "";
        this.isTT78 = false;
        this.checkAll = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this._translate = this.authService.getTranslate();
    }
    SignManyComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        this.infoDangKy = this.authService.getInfoRegister();
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser.account) {
            this.taxCode = this.currentUser.account.tax_code;
        }
        if (this.infoDangKy) {
            if (this.infoDangKy.status == "CHAP_NHAN")
                this.isTT78 = true;
        }
        this.convertData();
        this.connectWebsocket();
    };
    SignManyComponent.prototype.convertData = function () {
        this.licenseList = this.licenseList.sort(function (itemA, itemB) {
            return new Date(itemA.license_date).getTime() - new Date(itemB.license_date).getTime();
        });
        this.licenseList.forEach(function (item) {
            item.license_date = moment__WEBPACK_IMPORTED_MODULE_2__(item.license_date).format('YYYY-MM-DD HH:mm:ss');
            delete item.updated_at;
            delete item.decpoint_is_dot;
            delete item.money_decimal_format;
            item["checkTXN"] = false;
        });
    };
    SignManyComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    SignManyComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm(this._translate.CONFIRM.sign_stop);
        }
        if (r) {
            if (this.subXuatHoaDon) {
                this.subXuatHoaDon.unsubscribe();
            }
            this.daXong = true;
            this.totalInvoice = 0;
            this.valueProgress = 0;
        }
        else {
            e.cancel = true;
        }
    };
    SignManyComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDonImport().subscribe(function (message) {
            var data = message;
            if (data.Status == 'success') {
                if (data.SvcName == "efy_Sign") {
                    var i = _this.licenseIndex;
                    if (data.Data.Name == 'hoadon.xml') {
                        _this.goiApiXuatHoaDon(data.Data.Content, _this.licenses[i]);
                    }
                    else if (data.Data.Name == 'ten_filek_the_trung-dc-nhi.xml') {
                        _this.licenses[i].issuer_name = data.Data.IssuerName;
                        _this.xuLiApiKhiXuat(_this.licenses[i]);
                    }
                    else if (data.Data.Name === 'thu_xac_nhan.pdf') {
                        _this.goiApiXuatHoaDonThu(data.Data.Content);
                    }
                    else {
                        _this.licenses[i].invoice_files.forEach(function (item) {
                            if (item.file_name == data.Data.Name) {
                                item.file_content = data.Data.Content;
                            }
                        });
                        _this.tempKiFile++;
                        if (_this.tempKiFile == _this.licenses[i].invoice_files.length) {
                            _this.xuLiApiKhiXuat(_this.licenses[i]);
                        }
                    }
                }
            }
            else {
                var popUp = window.open('about:blank', 'name', 'width=200, height=100');
                if (popUp == null || typeof (popUp) == 'undefined') {
                }
                else
                    popUp.close();
                _this.spinner.hide();
                if (data.Description == "") {
                    _this.showPopup = false;
                    _this.errorImport = true;
                }
                else {
                    if (data.Data.Name === 'thu_xac_nhan.pdf')
                        _this.licenseList[_this.licenseIndex].license_confirm_letters[0].status = data.Description;
                    else
                        _this.licenseList[_this.licenseIndex].status = data.Description;
                    _this.isExportFailed = true;
                    _this.continuteExportInvoice(false);
                }
            }
        });
    };
    SignManyComponent.prototype.continuteExportInvoice = function (isSuccess) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.valueProgress += percentComplete;
        if (this.licenseIndex == this.totalInvoice - 1) {
            this.reportCountERR = "";
            this.reportCountTXN = "";
            if (!this.isExportFailed && isSuccess)
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.sign_success, 'success', 5000);
            else {
                var lstInvoiceERR = this.licenseList.filter(function (p) { return p.status != "DA_XUAT" && p.status != "GHI_TAM"; });
                this.reportCountERR = "Có " + lstInvoiceERR.length + " chứng từ ký lỗi. Đề nghị kiểm tra lại!";
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Có " + lstInvoiceERR.length + " chứng từ ký lỗi", 'success', 5000);
            }
            this.daXong = true;
            setTimeout(function () {
                _this.showPopup = false;
                // this.voucherService.getInvoicesWaitSign(this.ids).subscribe(res => {
                //   this.licenseList = res.data.licenses
                // })
            }, 300);
            try {
                var dsTxnErr = this.licenseList.filter(function (p) { return p['checkTXN'] && p.license_confirm_letters[0].status != 'DA_XUAT' && p.license_confirm_letters[0].status != 'GHI_TAM'; });
                if (dsTxnErr && dsTxnErr.length > 0)
                    this.reportCountTXN = "Có " + dsTxnErr.length + " thư xác nhận ký lỗi. Đề nghị kiểm tra lại!";
            }
            catch (error) {
            }
        }
        else if (this.licenseIndex < this.totalInvoice - 1) {
            this.licenseIndex++;
            this.xuatHoaDon();
        }
    };
    SignManyComponent.prototype.xuLyKiFile = function (xmlLicense, signDate) {
        var _this = this;
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlLicense, 'hoadon.xml', this.nodeSign, signDate, 'LicenseData', '', true, this.taxCode, true);
    };
    SignManyComponent.prototype.xuLiApiKhiXuat = function (license) {
        var _this = this;
        var tempTemplate = license.template;
        var xmlInvoice = "";
        var isNewXml = 0;
        var licenseClone = Object.assign({}, license);
        delete licenseClone.checkTXN;
        delete licenseClone.template;
        delete licenseClone.license_confirm_letters;
        delete licenseClone.license_number_tempt;
        var sub = this.voucherService.edit(licenseClone.id, licenseClone, true).subscribe(function (rs) {
            license.template = tempTemplate;
            if (rs.status == 'success') {
                license.license_date = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.license_date).format('YYYY-MM-DD HH:mm:ss');
                _this.licenseList[_this.licenseIndex]["license_number_tempt"] = rs.data.license_number;
                isNewXml = rs.data.is_new_xml;
                _this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(rs.data.xml_string);
                if (xmlInvoice != "") {
                    if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                        || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                        _this.goiApiXuatHoaDon(xmlInvoice, license);
                    }
                    else {
                        _this.xuLyKiFile(xmlInvoice, license.invoice_date);
                    }
                }
            }
            else {
                if (_this.licenseList[_this.licenseIndex].status != 'DA_XUAT')
                    _this.licenseList[_this.licenseIndex].status = rs.message;
                _this.isExportFailed = true;
                _this.continuteExportInvoice(false);
            }
        }, function (err) { }, function () {
            sub.unsubscribe();
        });
    };
    SignManyComponent.prototype.goiApiXuatHoaDon = function (xml_string, license) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Helper.dowloadFile('hoadon.xml', 'xml', xml_string);
                this.subXuatHoaDon = this.voucherService.xuatChungTu({
                    id: license.id,
                    xml_string: xml_string,
                    license_files: license.license_files
                }).subscribe(function (rs) { return __awaiter(_this, void 0, void 0, function () {
                    var isSuccess, isKyTXN, isTaoThanhCong;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                isSuccess = false;
                                this.ganXong = true;
                                this.tempKiFile = 0;
                                isKyTXN = false;
                                this.letter = null;
                                if (rs.status == 'success') {
                                    this.licenseList[this.licenseIndex].license_number = this.licenseList[this.licenseIndex]["license_number_tempt"];
                                    this.licenseList[this.licenseIndex].status = 'DA_XUAT';
                                    isSuccess = true;
                                    if (license["checkTXN"])
                                        isKyTXN = true;
                                }
                                else {
                                    if (this.licenseList[this.licenseIndex].status != 'DA_XUAT')
                                        this.licenseList[this.licenseIndex].status = rs.message;
                                    this.isExportFailed = true;
                                }
                                if (!isKyTXN) return [3 /*break*/, 2];
                                this.letter = license.license_confirm_letters[0];
                                return [4 /*yield*/, this.taoThuXacNhan()];
                            case 1:
                                isTaoThanhCong = _a.sent();
                                if (isTaoThanhCong)
                                    this.kyThuXacNhan();
                                else
                                    this.continuteExportInvoice(isSuccess);
                                return [3 /*break*/, 3];
                            case 2:
                                this.continuteExportInvoice(isSuccess);
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, function (err) { }, function () {
                    // Library.hideloading();
                    _this.subXuatHoaDon.unsubscribe();
                });
                return [2 /*return*/];
            });
        });
    };
    SignManyComponent.prototype.taoThuXacNhan = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.voucherService.updateGhiTamThuXacNhan(this.letter, this.letter.id).toPromise().then(function (rs) {
                            if (rs.status === 'success') {
                                _this.letter['file_content'] = rs.data.pdf_file.file_content;
                                _this.letter['sign_date'] = moment__WEBPACK_IMPORTED_MODULE_2__(rs.data.sign_date).format('YYYY-MM-DD HH:mm:ss');
                                return true;
                            }
                            else {
                                return false;
                            }
                        }, function (err) { return false; }).catch(function (error) {
                            return false;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SignManyComponent.prototype.kyThuXacNhan = function () {
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.goiApiXuatHoaDonThu(this.letter['file_content']);
        }
        else {
            this.xuLyKiFileThu(this.letter['file_content'], this.letter['sign_date']);
        }
    };
    SignManyComponent.prototype.goiApiXuatHoaDonThu = function (data) {
        var _this = this;
        var license_confirm_letter = {
            id: this.letter.id,
            pdf_file: {
                file_name: "thu_xac_nhan.pdf",
                file_content: data
            }
        };
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        }, 20);
        var sub = this.voucherService.xuatTXN(license_confirm_letter).subscribe(function (rs) {
            if (rs.status == 'success') {
                _this.licenseList[_this.licenseIndex].license_confirm_letters[0].status = 'DA_XUAT';
            }
            else {
                _this.licenseList[_this.licenseIndex].license_confirm_letters[0].status = rs.message;
            }
            _this.continuteExportInvoice(true);
        }, function (err) {
            _this.continuteExportInvoice(true);
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    SignManyComponent.prototype.xuLyKiFileThu = function (xmlInvoice, signDate) {
        var _this = this;
        // this.connectWebsocketThu();
        var nodeSign = '//CTu/DSCKS/TCTTNhap';
        this.connectWebsocket();
        if (this.socketService.checkNull()) {
            this.socketService.connect();
        }
        this.socketService.kiFile(function () { return _this.connectWebsocket(); }, xmlInvoice, 'thu_xac_nhan.pdf', 'pdf', nodeSign, signDate, 'ALIGN_LEFT', 'PAGE_LAST', null, this.taxCode);
    };
    SignManyComponent.prototype.xuatHoaDon = function () {
        var _this = this;
        var i = this.licenseIndex;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat(this.licenses[i]);
        }
        else {
            if (this.licenses[i].license_files && this.licenses[i].license_files.length) {
                this.licenses[i].license_files.forEach(function (item) {
                    _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, item.file_content, item.file_name, item.file_name.split('.').pop(), true, _this.licenses[i].license_date);
                });
            }
            else {
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", '', true, this.taxCode, true);
            }
        }
    };
    SignManyComponent.prototype.kyHangLoat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].confirmVA(this._translate.THONG_TIN.dong_y_ky_so, this._translate.NOTIFY.notify, function () {
            _this.showPopup = true;
            _this.licenses = JSON.parse(JSON.stringify(_this.licenseList));
            _this.totalInvoice = _this.licenses.length;
            _this.licenseIndex = 0;
            _this.tempKiFile = 0;
            _this.xuatHoaDon();
        });
    };
    SignManyComponent.prototype.dong = function () {
        if (this.ganXong) {
            this.bsModalRef.content.successSaveItem = "success";
        }
        this.bsModalRef.hide();
    };
    SignManyComponent.prototype.viewDetailInvoice = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            var dulieu = this.voucherService.taodulieuXemMau(ids);
            dulieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.chungtu;
            this.vPreviewInvService.xemMau(dulieu);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    SignManyComponent.prototype.kiemtraTXN = function (data) {
        if (data.license_confirm_letters && data.license_confirm_letters.length > 0)
            return true;
        return false;
    };
    SignManyComponent.prototype.changeCheckAll = function ($event) {
        var _this = this;
        this.checkAll = $event.target.checked;
        this.licenseList.forEach(function (item) {
            if (_this.kiemtraTXN(item)) {
                item["checkTXN"] = $event.target.checked;
            }
        });
    };
    SignManyComponent.prototype.changeCheckItem = function ($event) {
        var _this = this;
        if (!$event.target.checked && this.checkAll)
            this.checkAll = false;
        else if ($event.target.checked && !this.checkAll) {
            var itemCheck = this.licenseList.some(function (p) { return _this.kiemtraTXN(p) && !p["checkTXN"]; });
            if (!itemCheck)
                this.checkAll = true;
        }
    };
    SignManyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-many',
            template: __webpack_require__(/*! ./sign-many.component.html */ "./src/app/modules/vouchers/components/sign-many/sign-many.component.html"),
            styles: [__webpack_require__(/*! ./sign-many.component.scss */ "./src/app/modules/vouchers/components/sign-many/sign-many.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_4__["VatService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_7__["VoucherService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_8__["ViewInvoiceService"]])
    ], SignManyComponent);
    return SignManyComponent;
}());



/***/ }),

/***/ "./src/app/modules/vouchers/components/view-invoice/view-invoice.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/view-invoice/view-invoice.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{lblTitle}}</h4>\r\n  <div>\r\n    <div *ngFor=\"let item of items | paginate: { itemsPerPage: 1, currentPage: p }; let i = index\">\r\n    </div>\r\n    <pagination-controls style=\"width: 50%;\" (pageChange)=\"getPage($event)\"></pagination-controls>\r\n  </div>\r\n  <div style=\"display: flex; align-items: center;\">\r\n    <dx-button disableDoubleClick *ngIf=\"isXuatHD\" text=\"Đồng ý\" icon=\"{{_translate.ICONS.save}}\" type=\"default\" (click)=\"dongy()\">\r\n    </dx-button>\r\n    <i class=\"fa fa-times\" style=\"font-size:25px; cursor: pointer;\" (click)=\"dong()\"></i>\r\n  </div>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"body-content\">\r\n    <div *ngIf=\"isXuatHD\" class=\"canh-bao\">\r\n      <p style=\"font-weight: 600;\">\r\n        <span class=\"nhap-nhay\"></span>\r\n        <span style=\"font-size: 17px;\">Lưu ý: </span>\r\n        Đề nghị đơn vị kiểm tra thật kỹ các nội dung hóa đơn đã nhập trước khi xuất như: Ngày hóa đơn, Bên mua hàng, Tên\r\n        hàng hóa dịch vụ, Tổng tiền,…để tránh xuất sai.\r\n      </p>\r\n    </div>\r\n    <div style=\"display: flex; width: 100%;\">\r\n      <iframe height=\"{{heightT}}\" id=\"preview-iframe\"></iframe>\r\n      <div *ngIf=\"isXuatHD\" class=\"thong-tin-hoa-don\" >\r\n        <div class=\"e-invoice\">\r\n          <p style=\" font-weight: 600;\">Ngày chứng từ : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">{{ngayHD}}</p>\r\n        </div>\r\n        <div class=\"e-invoice\">\r\n          <p style=\"font-weight: 600;\">Trạng thái : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">Xuất và ký</p>\r\n        </div>\r\n        <div class=\"e-invoice\">\r\n          <p style=\"font-weight: 600;\">Tổng tiền : </p>\r\n          <p style=\"color: orange;font-weight: 600;\">{{total_payment}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/vouchers/components/view-invoice/view-invoice.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/view-invoice/view-invoice.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-header{display:flex;justify-content:space-between;align-items:center}.pagination{display:flex}.pagination a{color:black;float:left;padding:8px 16px;text-decoration:none}::ng-deep .body-content{height:100%}.modal-body .body-content{display:flex;justify-content:center;align-items:center;flex-direction:column}.nhap-nhay{background:red;padding:0.5px 9px;margin-right:5px;border-radius:57%;-webkit-animation:flicker 1s infinite}.ht-xuat{width:25%;padding:15px;background:#ffffff;box-shadow:rgba(0,0,0,0.35) 0px 5px 15px}@-webkit-keyframes flicker{0%{opacity:0}9%{opacity:0}10%{opacity:.5}13%{opacity:0}20%{opacity:.5}25%{opacity:1}}.example{padding:20px}input[type=button]{padding:5px 10px;margin:10px 5px;border-radius:5px;cursor:pointer;background:#ddd;border:1px solid #ccc}input[type=button]:hover{background:#ccc}.confirm{display:none}.confirm>div:first-of-type{position:fixed;width:100%;height:100%;background:rgba(0,0,0,0.5);top:0px;left:0px}.confirm>div:last-of-type{padding:10px 20px;background:white;position:absolute;width:auto;height:auto;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border-radius:5px;border:1px solid #333}.confirm>div:last-of-type div:first-of-type{min-width:150px;padding:10px}.confirm>div:last-of-type div:last-of-type{text-align:right}.canh-bao{margin-bottom:10px}#preview-iframe{width:calc(100% - 20px)}\n"

/***/ }),

/***/ "./src/app/modules/vouchers/components/view-invoice/view-invoice.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/view-invoice/view-invoice.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVoucherComponent", function() { return ViewVoucherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/vouchers/shared */ "./src/app/modules/vouchers/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewVoucherComponent = /** @class */ (function () {
    function ViewVoucherComponent(bsModal, voucherService, router, translate, authService, socketService, spinner) {
        var _this = this;
        this.bsModal = bsModal;
        this.voucherService = voucherService;
        this.router = router;
        this.translate = translate;
        this.authService = authService;
        this.socketService = socketService;
        this.spinner = spinner;
        this.key = 'name';
        this.reverse = false;
        this.isTaiHD = false;
        this.invoices = [];
        this.showPopup = false;
        this.invoiceIndex = 0;
        this.tempKiFile = 0;
        this.daXong = false;
        this.ganXong = false;
        this.valueProgress = 0;
        this.errorImport = false;
        this.isExportFailed = false;
        this.p = 1;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.heightT = screen.availHeight - 195;
    }
    ViewVoucherComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ViewVoucherComponent.prototype.ngOnInit = function () {
        this.connectWebsocket();
        this.configs = this.authService.getConfigs();
        switch (this.typeAction) {
            case "NAP_EXCEL":
                this.lblTitle = "BẢN DỰ THẢO CHỨNG TỪ ĐIỆN TỬ";
                this.isTaiHD = false;
                break;
            case "XEM_HOA_DON":
                this.lblTitle = "XEM CHỨNG TỪ ĐIỆN TỬ";
                this.isTaiHD = true;
                break;
        }
        this.getPage(1, 'desc', 'created');
    };
    ViewVoucherComponent.prototype.viewTransport = function (item) {
        var id = item.id;
    };
    ViewVoucherComponent.prototype.getPage = function (page, sort, order) {
        if (sort === void 0) { sort = 'desc'; }
        if (order === void 0) { order = 'created'; }
        switch (this.typeAction) {
            case "NAP_EXCEL":
                this.action_napexcel(page);
                break;
            case "XEM_HOA_DON":
                this.action_xemhoadon(page);
                break;
        }
    };
    ViewVoucherComponent.prototype.action_napexcel = function (page) {
        var _this = this;
        this.p = page;
        var oTransport;
        var index = 1;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (index == page) {
                oTransport = item;
                break;
            }
            index = index + 1;
        }
        this.spinner.show();
        var licensesArr = [];
        licensesArr.push(oTransport);
        var data = {
            licenses: licensesArr
        };
        var sub = this.voucherService.previewVoucherImport(data).subscribe(function (rs) {
            if (rs.status == 'success') {
                //Xem hóa đơn từ server
                if (_this.configs.system_parameter.display_template_from_server) {
                    _this.total_payment = rs.data.license.total_payment;
                    _this.objectUrl = rs.data.license.pdf_file;
                    _this.ngayHD = moment__WEBPACK_IMPORTED_MODULE_5__(rs.data.license.license_date).format('DD/MM/YYYY');
                    _this.mainTest = "data:application/pdf;base64," + _this.objectUrl;
                    var iframe = document.getElementById('preview-iframe');
                    iframe.setAttribute("src", _this.mainTest);
                    _this.spinner.hide();
                }
                else {
                    /* Xem hóa đơn từ Client */
                    _this.total_payment = rs.data.license.total_payment;
                    var license_date = rs.data.license.license_date;
                    var json_data = rs.data.license.json_data;
                    var appCode = "VOUCHERS";
                    _this.socketService.xemhoadon(function () { return _this.connectWebsocket(); }, json_data, appCode, "XEM_TRUOC_KHI_XUAT", _this.hinhthucxuat, license_date);
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        }, function () {
            sub.unsubscribe();
        });
    };
    ViewVoucherComponent.prototype.action_xemhoadon = function (page) {
        var _this = this;
        this.p = page;
        var id;
        var index = 1;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (index == page) {
                id = item;
                break;
            }
            index = index + 1;
        }
        this.spinner.show();
        var arrId = [];
        arrId.push(id);
        var sub = this.voucherService.xemChungTuImport(arrId).subscribe(function (rs) {
            if (rs.status == 'success') {
                //Xem hóa đơn từ server
                if (_this.configs.system_parameter.display_template_from_server) {
                    _this.objectUrl = rs.data.license.pdf_file;
                    _this.ngayHD = moment__WEBPACK_IMPORTED_MODULE_5__(rs.data.license.license_date).format('DD/MM/YYYY');
                    _this.mainTest = "data:application/pdf;base64," + _this.objectUrl;
                    var iframe = document.getElementById('preview-iframe');
                    iframe.setAttribute("src", _this.mainTest);
                    _this.spinner.hide();
                }
                else {
                    /* Xem hóa đơn từ Client */
                    var license_date = rs.data.license.license_date;
                    var json_data = rs.data.license.json_data;
                    var appCode = "REPX";
                    if (rs.data.license.is_html_template)
                        appCode = "HTML";
                    _this.socketService.xemhoadon(function () { return _this.connectWebsocket(); }, json_data, appCode, "XEM_TRUOC_KHI_XUAT", _this.hinhthucxuat, license_date);
                }
            }
            else {
                _this.spinner.hide();
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
            _this.spinner.hide();
        }, function () {
            sub.unsubscribe();
        });
    };
    ViewVoucherComponent.prototype.dong = function () {
        // this.router.navigate(['/system/transport-license']);
        this.bsModal.hide();
    };
    ViewVoucherComponent.prototype.dongy = function () {
        this.bsModal.content.successSaveItem = 'DONG_Y';
        this.bsModal.hide();
    };
    /* Kết nối đến socket */
    ViewVoucherComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_viewInvoice') {
                if (data.Status == "success")
                    _this.viewInvoice(data.Data.Content, data.Data.typeView, data.Data.hinhthucxuat, data.Data.license_date);
                else if (data.Status == "error") {
                    _this.spinner.hide();
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(data.Description, 'error');
                }
            }
        });
    };
    ViewVoucherComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
    };
    ViewVoucherComponent.prototype.viewInvoice = function (content, typeView, hinhthucxuat, license_date) {
        this.objectUrl = content;
        this.ngayHD = moment__WEBPACK_IMPORTED_MODULE_5__(license_date).format('DD/MM/YYYY');
        this.mainTest = "data:application/pdf;base64," + this.objectUrl;
        var iframe = document.getElementById('preview-iframe');
        iframe.setAttribute("src", this.mainTest);
        this.spinner.hide();
    };
    ViewVoucherComponent.prototype.continuteExportInvoice = function (isSuccess) {
        var _this = this;
        var percentComplete = 100 / this.totalInvoice;
        this.valueProgress += percentComplete;
        if (this.invoiceIndex == this.totalInvoice - 1) {
            if (!this.isExportFailed && isSuccess)
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Tải hóa đơn thành công", 'success', 5000);
            else {
                // Danh sách lỗi
            }
            this.daXong = true;
            setTimeout(function () {
                _this.showPopup = false;
            }, 300);
        }
        else if (this.invoiceIndex < this.totalInvoice - 1) {
            this.invoiceIndex++;
        }
    };
    ViewVoucherComponent.prototype.iterator = function (a, take, skip) {
        var current = skip * 10;
        var l = a.length;
        var end = current + take;
        var part = a.slice(current, end);
        current = end < l ? end : 0;
        return part;
    };
    ViewVoucherComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    ViewVoucherComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100 && this.errorImport == false) {
            r = confirm("Cảnh báo: Quá trình tải hóa đơn sẽ dừng lại nếu bạn đóng cửa sổ này?");
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
    ViewVoucherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-invoice',
            template: __webpack_require__(/*! ./view-invoice.component.html */ "./src/app/modules/vouchers/components/view-invoice/view-invoice.component.html"),
            styles: [__webpack_require__(/*! ./view-invoice.component.scss */ "./src/app/modules/vouchers/components/view-invoice/view-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_7__["VoucherService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _core_index__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ViewVoucherComponent);
    return ViewVoucherComponent;
}());



/***/ }),

/***/ "./src/app/modules/vouchers/components/voucher/voucher.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/voucher/voucher.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n  <div class=\"col-md-12\">\r\n    <div id=\"tab-invoice\">\r\n      <dx-tabs [dataSource]=\"tabs\" [(selectedIndex)]=\"selectedIndex\" (onItemClick)=\"selectTab($event)\">\r\n      </dx-tabs>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"background-color: white;\" *ngIf=\"isVoucher\">\r\n  <!-- <div class=\"col-md-1\" style=\"background-color: #F5F5F5;\"></div> -->\r\n  <div class=\"col-md-12\">\r\n    <div class=\"voucher-container\">\r\n      <!-- Chứng từ khấu trừ thuế TNCN -->\r\n      <h1 style=\"font-weight: bold; font-size: 16px; text-align: center; padding: 20px 0px;\">\r\n        {{_translate.MENU.proof_of_tax_deduction | uppercase}}</h1>\r\n      <div class=\"proof-of-tax-deduction\">\r\n        <!-- Mẫu hóa đơn -->\r\n        <div class=\"proof\">\r\n          <!-- Loại tiền -->\r\n          <div>\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.CONTROLL.LABEL.currency_code}}</span>\r\n                  <dx-check-box (onValueChanged)=\"onChangeCurrency($event)\" style=\"margin-left: 15px;\"\r\n                    [value]=\"frmData.is_voucher_currency\">\r\n                  </dx-check-box>\r\n                </div>\r\n                <div class=\"value loai-tien\">\r\n                  <dx-text-box [(value)]=\"frmData.currency_code\"\r\n                    placeholder=\"{{_translate.CONTROLL.LABEL.enter_currency}}\" *ngIf=\"frmData.is_voucher_currency\">\r\n                  </dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.CONTROLL.LABEL.invoice_form}}</span><span\r\n                    class=\"req-text\">*</span></div>\r\n                <div class=\"value\">\r\n                  <dx-select-box [(value)]=\"frmData.template_id\" displayExpr=\"name\" valueExpr=\"value\"\r\n                    [dataSource]=\"select.templatesTT78\" (onValueChanged)=\"onChangeTem($event)\" [(readOnly)]=\"DaXuat\">\r\n                  </dx-select-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Số chứng từ-- -->\r\n            <div class=\"column number\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.vehicle_license_number}}</div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.license_number\" disabled=\"true\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <!-- Ngày chứng từ -->\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.CONTROLL.LABEL.invoice_voucher}}</span><span\r\n                    class=\"req-text\">*</span></div>\r\n                <div class=\"value\">\r\n                  <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n                    <dxi-item dataField=\"license_date\" editorType=\"dxDateBox\"\r\n                      [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss', readOnly: DaXuat, onValueChanged: changeDateTime}\">\r\n                      <dxo-label [visible]=\"false\"></dxo-label>\r\n                    </dxi-item>\r\n                  </dx-form>\r\n                  <!-- <dx-date-box type=\"date\" [useMaskBehavior]=\"true\" [displayFormat]=\"'dd/MM/yyyy'\"\r\n                    [(value)]=\"frmData.license_date\" [(readOnly)] = \"DaXuat\">\r\n                  </dx-date-box> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Tỉnh/thành phố -->\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.CONTROLL.LABEL.province_city}}</span><span\r\n                    class=\"req-text\">*</span></div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.province_name\" [(readOnly)]=\"DaXuat\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Thông tin người nộp thuế -->\r\n          <h1 style=\"font-weight: bold; font-size: 13px; text-align: left; padding: 7px 7%;\">\r\n            {{_translate.TITLE.taxpayer_information | uppercase}}</h1>\r\n          <div>\r\n            <!-- Họ và tên -->\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.CONTROLL.LABEL.fullname}}</span><span class=\"req-text\">*</span>\r\n                </div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.taxpayers_name\" [(readOnly)]=\"DaXuat\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Quốc tịch -->\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.CONTROLL.LABEL.nationality}}</span><span class=\"req-text\">*</span>\r\n                </div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.nationality\" [(readOnly)]=\"DaXuat\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Địa chỉ   -->\r\n          <div class=\"column name-customer\">\r\n            <div class=\"field\">\r\n              <div class=\"label\">{{_translate.CONTROLL.LABEL.address}}</div>\r\n              <div class=\"value\">\r\n                <dx-text-box [(value)]=\"frmData.taxpayers_address\" [(readOnly)]=\"DaXuat\"></dx-text-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"custom\">\r\n            <div style=\"display: flex; flex-direction: column;flex:1;\">\r\n              <!-- Số điện thoại -->\r\n              <div class=\"column\" style=\"width:100%;\">\r\n                <div class=\"field\">\r\n                  <div class=\"label\">{{_translate.CONTROLL.LABEL.phone_number}}</div>\r\n                  <div class=\"value\">\r\n                    <dx-text-box [(value)]=\"frmData.taxpayers_mobile\" [(readOnly)]=\"DaXuat\"></dx-text-box>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Mã số thuế -->\r\n              <div class=\"column\" style=\"width:100%;\">\r\n                <div class=\"field\">\r\n                  <div class=\"label\">{{_translate.CONTROLL.LABEL.tax_code}}</div>\r\n                  <div class=\"value\">\r\n                    <dx-text-box [(value)]=\"frmData.taxpayers_tax_code\" [(readOnly)]=\"DaXuat\"></dx-text-box>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Cá nhân cư trú -->\r\n              <div style=\"width:100%;\">\r\n                <div class=\"column\" style=\"width:100%;\">\r\n                  <div class=\"field\">\r\n                    <div class=\"label\">{{_translate.CONTROLL.LABEL.resident_individual}}</div>\r\n                    <div class=\"value\">\r\n                      <dx-radio-group [dataSource]=\"priorities\" displayExpr=\"name\" valueExpr=\"code\"\r\n                        [(value)]=\"frmData.resident_individual\" layout=\"horizontal\" [(readOnly)]=\"DaXuat\">\r\n                      </dx-radio-group>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Email -->\r\n            <div class=\"column\" style=\"flex:1;\">\r\n              <div class=\"field\">\r\n                <div class=\"label\" style=\"vertical-align: top; margin-top: 5px;\">{{_translate.CONTROLL.LABEL.email}}\r\n                </div>\r\n                <div class=\"value\">\r\n                  <dx-form [formData]=\"frmData\" validationGroup=\"formData\" style=\"flex:1\">\r\n                    <dxi-item>\r\n                      <dxo-label [visible]=\"false\"></dxo-label>\r\n                      <div class=\"dx-field-item-content dx-field-item-content-location-right\">\r\n                        <div\r\n                          class=\"dx-textbox dx-texteditor dx-widget dx-texteditor-empty dx-validator dx-visibility-change-handler\">\r\n                          <div class=\"dx-texteditor-container\" style=\"background: #fff; border: 1px solid #ddd;\">\r\n                            <app-tag-input-email [variableName]=\"this.emails\"\r\n                              (numberGenerated)=\"renderDataEmail($event)\" style=\"flex: 1;\"></app-tag-input-email>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </dxi-item>\r\n                  </dx-form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Dữ liệu mở rộng -->\r\n          <div class=\"column name-customer\">\r\n            <dx-form [formData]=\"customerTempt\" [items]=\"formItems\" class=\"customer-tempt\">\r\n            </dx-form>\r\n          </div>\r\n\r\n          <div style=\"color:red; padding:0px 0px 7px 7%;font-style: italic; margin-top: 15px;\">\r\n            {{_translate.CONTROLL.LABEL.in_case_taxpayer_does_not_have_tax}}:</div>\r\n          <!-- Số CMND/CCCD hoặc số hộ chiếu  -->\r\n          <div class=\"column name-customer citizen-id\">\r\n            <div class=\"field\">\r\n              <div class=\"label\">{{_translate.CONTROLL.LABEL.id_card}}</div>\r\n              <div class=\"value\">\r\n                <dx-text-box [(value)]=\"frmData.id_card\" [(readOnly)]=\"DaXuat\"></dx-text-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <!-- Nơi cấp -->\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.card_issuer_address}}</div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.card_issuer_address\" [(readOnly)]=\"DaXuat\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Ngày cấp -->\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">{{_translate.CONTROLL.LABEL.card_issuer_date}}</div>\r\n                <div class=\"value\">\r\n                  <dx-form [formData]=\"frmData\" validationGroup=\"formData\">\r\n                    <dxi-item dataField=\"card_issuer_date\" editorType=\"dxDateBox\"\r\n                      [editorOptions]=\"{useMaskBehavior:true, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd', readOnly: DaXuat}\">\r\n                      <dxo-label [visible]=\"false\"></dxo-label>\r\n                    </dxi-item>\r\n                  </dx-form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Thông tin thuế thu nhập cá nhân khấu trừ -->\r\n          <h1 style=\"font-weight: bold; font-size: 13px; text-align: left; padding: 7px 7%;\">\r\n            {{_translate.TITLE.personal_income_tax_information_withholding | uppercase}}</h1>\r\n          <div>\r\n            <!-- Khoản thu nhập -->\r\n            <div class=\"column citizen-id\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">[1] {{_translate.CONTROLL.LABEL.income}}</div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.income\" [(readOnly)]=\"DaXuat\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Khoản đóng bảo hiểm bắt buộc   -->\r\n            <div class=\"column citizen-id\" *ngIf=\"inforFields('tien-dong-bao-hiem-nnt').is_show\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">[{{inforFields('tien-dong-bao-hiem-nnt').index + currentIndex - 1}}]\r\n                  {{_translate.CONTROLL.LABEL.compulsory_insurance_payment}}<img src=\"assets/img/icons/SoThapPhan.png\"\r\n                    (click)=\"configDecimal('khoan_dong_bh')\" style=\"cursor: pointer;\"></div>\r\n                <div class=\"value so-tien\">\r\n                  <dx-number-box [(value)]=\"frmData.compulsory_insurance_payment\" [(readOnly)]=\"DaXuat\"\r\n                    [format]=\"formatter.khoan_dong_bh\" [showClearButton]=\"true\"></dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <!-- Thời điểm trả thu nhập:  -->\r\n            <div class=\"column time\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">[{{currentIndex}}] {{_translate.CONTROLL.LABEL.time_to_pay_income}}</div>\r\n                <div class=\"label\"  style=\"width: 27%;\">{{_translate.CONTROLL.COMBO.month}}</div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.month_pay_income\" [(readOnly)]=\"DaXuat\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Năm -->\r\n            <div class=\"column\">\r\n              <div class=\"field\">\r\n                <div class=\"label\"><span>{{_translate.CONTROLL.COMBO.year}}</span><span class=\"req-text\">*</span></div>\r\n                <div class=\"value\">\r\n                  <dx-text-box [(value)]=\"frmData.year_pay_income\" [(readOnly)]=\"DaXuat\"></dx-text-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <!-- Tổng thu nhập chịu thuế phải khấu trừ  -->\r\n            <div class=\"column citizen-id\" *ngIf=\"inforFields('tien-chiu-thue-nnt').is_show\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">[{{inforFields('tien-chiu-thue-nnt').index + 3}}]\r\n                  {{_translate.CONTROLL.LABEL.total_taxable_income_deducted}} <img src=\"assets/img/icons/SoThapPhan.png\"\r\n                    (click)=\"configDecimal('tong_tnctpkt')\" style=\"cursor: pointer;\"></div>\r\n                <div class=\"value so-tien\">\r\n                  <dx-number-box [(value)]=\"frmData.total_taxable_income_deducted\"\r\n                    (onValueChanged)=\"totalTaxableChange($event)\" [format]=\"formatter.tong_tnctpkt\"\r\n                    (onKeyDown)=\"keyDown($event)\" [(readOnly)]=\"DaXuat\" [showClearButton]=\"true\">\r\n                  </dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Tổng thu nhập tính thuế  -->\r\n            <div class=\"column citizen-id\" *ngIf=\"inforFields('tien-tinh-thue-nnt').is_show\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">[{{inforFields('tien-tinh-thue-nnt').index + 3}}]\r\n                  {{_translate.CONTROLL.LABEL.total_taxable_income}} <img src=\"assets/img/icons/SoThapPhan.png\"\r\n                    (click)=\"configDecimal('tong_tntt')\" style=\"cursor: pointer;\"></div>\r\n                <div class=\"value so-tien\">\r\n                  <dx-number-box [(value)]=\"frmData.total_taxable_income\" [format]=\"formatter.tong_tntt\"\r\n                    (onKeyDown)=\"keyDown($event)\" [(readOnly)]=\"DaXuat\" [showClearButton]=\"true\"></dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <!-- Số thuế thu nhập cá nhân đã khấu trừ -->\r\n            <div class=\"column citizen-id\" *ngIf=\"inforFields('tien-thue-da-khau-tru-nnt').is_show\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">[{{inforFields('tien-thue-da-khau-tru-nnt').index + 3}}]\r\n                  {{_translate.CONTROLL.LABEL.amount_personal_income_tax_withheld}} <img\r\n                    src=\"assets/img/icons/SoThapPhan.png\" (click)=\"configDecimal('so_thue_tncndkt')\"\r\n                    style=\"cursor: pointer;\"></div>\r\n                <div class=\"value so-tien\">\r\n                  <dx-number-box [(value)]=\"frmData.amount_personal_income_tax_withheld\"\r\n                    [format]=\"formatter.so_thue_tncndkt\" (onValueChanged)=\"tinhgiatri()\" (onKeyDown)=\"keyDown($event)\"\r\n                    [(readOnly)]=\"DaXuat\" [showClearButton]=\"true\"></dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Tổng thu nhập chịu thuế đã trả  -->\r\n            <div class=\"column citizen-id\" *ngIf=\"inforFields('tien-thue-da-tra-nnt').is_show\">\r\n              <div class=\"field\">\r\n                <div class=\"label\">[{{inforFields('tien-thue-da-tra-nnt').index + 3}}]\r\n                  {{_translate.CONTROLL.LABEL.total_taxable_income_paid}} <img src=\"assets/img/icons/SoThapPhan.png\"\r\n                    (click)=\"configDecimal('tong_tnctdt')\" style=\"cursor: pointer;\">\r\n                </div>\r\n                <div class=\"value so-tien\">\r\n                  <dx-number-box [(value)]=\"frmData.total_taxable_income_paid\" [format]=\"formatter.tong_tnctdt\"\r\n                    (onValueChanged)=\"tinhgiatri()\" (onKeyDown)=\"keyDown($event)\" [(readOnly)]=\"DaXuat\" [showClearButton]=\"true\"></dx-number-box>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Số thu nhập cá nhân còn được nhận  -->\r\n          <div class=\"column name-customer\" *ngIf=\"inforFields('tien-duoc-nhan-nnt').is_show\">\r\n            <div class=\"field\">\r\n              <div class=\"label\" *ngIf=\"inforFields('tien-duoc-nhan-nnt').calculation\">\r\n                [{{inforFields('tien-duoc-nhan-nnt').index +\r\n                3}}]=[{{inforFields('tien-thue-da-tra-nnt').index +\r\n                3}}]-[{{inforFields('tien-thue-da-khau-tru-nnt').index + 3}}]\r\n                {{_translate.CONTROLL.LABEL.amount_personal_income_still_received}} <img\r\n                  src=\"assets/img/icons/SoThapPhan.png\" (click)=\"configDecimal('so_tncncdn')\" style=\"cursor: pointer;\">\r\n              </div>\r\n              <div class=\"label\" *ngIf=\"!inforFields('tien-duoc-nhan-nnt').calculation\">\r\n                [{{inforFields('tien-duoc-nhan-nnt').index +\r\n                3}}]\r\n                {{_translate.CONTROLL.LABEL.amount_personal_income_still_received}} <img\r\n                  src=\"assets/img/icons/SoThapPhan.png\" (click)=\"configDecimal('so_tncncdn')\" style=\"cursor: pointer;\">\r\n              </div>\r\n              <div class=\"value so-tien\">\r\n                <dx-number-box [(value)]=\"frmData.amount_personal_income_still_received\" [format]=\"formatter.so_tncncdn\"\r\n                  (onKeyDown)=\"keyDown($event)\" [(readOnly)]=\"DaXuat\" [showClearButton]=\"true\"></dx-number-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Không tự tính -->\r\n        <div style=\"display: flex; width: 60%\">\r\n          <div class=\"column\">\r\n            <div class=\"field\">\r\n              <div class=\"value\" style=\"width: 5%;\">\r\n                <dx-check-box [(value)]=\"frmData.auto_value\" (onValueChanged)=\"onChangeAutoValue()\"\r\n                  [(readOnly)]=\"DaXuat\"></dx-check-box>\r\n              </div>\r\n              <div class=\"label\" style=\"width: 143px;\">{{_translate.CONTROLL.LABEL.no_calculation}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row rowButton\" style=\"padding-left: 7%;padding-right: 7%;\">\r\n        <div class=\"col-md-12\" style=\"padding-right: 0px;\">\r\n          <div class=\"pull-left\">\r\n            <!-- Xem trước chứng từ -->\r\n            <dx-button disableDoubleClick *ngIf=\"!DaXuat\" (click)=\"preview()\" [(icon)]=\"this._translate.ICONS.view\"\r\n              text=\"{{_translate.CONTROLL.BUTTON.preview_voucher}}\" type=\"default\"></dx-button>\r\n            <!-- Xem chứng từ -->\r\n            <dx-button disableDoubleClick *ngIf=\"DaXuat\" (click)=\"view()\" [(icon)]=\"this._translate.ICONS.view\"\r\n              text=\"{{_translate.CONTROLL.BUTTON.see_voucher}}\" type=\"default\"></dx-button>\r\n          </div>\r\n          <div class=\"pull-right\">\r\n            <!-- xuất chứng từ -->\r\n            <dx-button disableDoubleClick *ngIf=\"!DaXuat\" type=\"default\" text=\"{{_translate.CONTROLL.BUTTON.export_vouchers}}\"\r\n              [(icon)]=\"this._translate.ICONS.export_inv\" (click)=\"eSubmit('XUAT',true)\"></dx-button>\r\n            <!-- Ghi tạm -->\r\n            <dx-button disableDoubleClick *ngIf=\"!DaXuat\" (click)=\"eSubmit('GHI_TAM')\" type=\"default\"\r\n              text=\"{{_translate.CONTROLL.BUTTON.save_temporary}}\" [(icon)]=\"this._translate.ICONS.save\">\r\n            </dx-button>\r\n            <!-- Tạo mới -->\r\n            <dx-button disableDoubleClick type=\"default\" text=\"{{_translate.CONTROLL.BUTTON.create_new}}\"\r\n              [(icon)]=\"this._translate.ICONS.add_new\" (click)=\"handleAddNew()\"></dx-button>\r\n            <!-- Đóng -->\r\n            <dx-button disableDoubleClick (click)=\"dong()\" [(icon)]=\"this._translate.ICONS.come_back\" type=\"default\"\r\n              text=\"{{_translate.CONTROLL.BUTTON.close}}\"></dx-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Button -->\r\n    <!-- <div class=\"row\" style=\"background-color: #F5F5F5;height: 20px;\"></div> -->\r\n  </div>\r\n  <!-- <div class=\"col-md-1\" style=\"background-color: #F5F5F5;\"></div> -->\r\n</div>\r\n<div [hidden]=\"!isIncomeConfirmation\">\r\n  <app-income-confirmation [frmData]=\"frmData_txn\" [frmData_ct]=\"frmData\">\r\n  </app-income-confirmation>\r\n</div>\r\n\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/vouchers/components/voucher/voucher.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/voucher/voucher.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .column{display:inline-block;margin:0;text-align:right}::ng-deep .voucher-container .column .field{padding:5px 0;display:flex;align-items:center}::ng-deep .day{width:32%}::ng-deep .day .field .label{width:61px !important}::ng-deep .day .field .value{width:56% !important}::ng-deep .day .field .dx-datebox{width:100% !important}::ng-deep .column .field>div{display:inline-block;vertical-align:middle}::ng-deep .voucher-container .column .field .label{width:40%;padding-right:10px}::ng-deep .number .field .value .dx-texteditor-input{color:red;font-weight:bold;padding-bottom:0px}::ng-deep .column .field .value{width:53%}::ng-deep .column .field .value .dx-selectbox{border-radius:0}::ng-deep .column .field .value .dx-datebox{border-radius:0}::ng-deep .column .field .value .dx-datebox .dx-texteditor-input{min-height:20px;max-height:25px}::ng-deep .column .field .value .dx-texteditor-input{min-height:20px;max-height:25px}::ng-deep .column .field .valueProcess{width:56%}::ng-deep .column .field .valueProcess .dx-selectbox{border-radius:0}::ng-deep .column .field .valueProcess .dx-datebox{border-radius:0}::ng-deep .column .field .valueProcess .dx-datebox .dx-texteditor-input{min-height:20px;max-height:25px;padding:3px 35px 3px 9px !important}::ng-deep .column .field .valueProcess .dx-texteditor-input{min-height:20px;max-height:25px}::ng-deep .search-date{width:100%}::ng-deep .search-date .dx-texteditor-input{padding-top:5px !important;padding-bottom:0px}::ng-deep .search-panel .dx-textbox .dx-texteditor-input{padding-top:5px !important;padding-bottom:0px}::ng-deep .proof-of-tax-deduction .dx-textbox .dx-texteditor-input,::ng-deep .advanced-invoice-buy .dx-textbox .dx-texteditor-input{padding-bottom:3px}.search-panel{width:100%}.search-panel .dx-texteditor{border-radius:0}.search-panel .column{width:68%}.search-panel .label{margin:0}.search-panel .value{width:76% !important}.search-panel .value .dx-textbox{width:83%;display:inline-flex}.search-panel .value .dx-button{position:relative;top:-2px;border-left:0;height:27px}.search-panel .value .dx-button-content{padding-right:0 !important}.search-panel .value .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .value #advBtn{margin-top:0;width:5%}.search-panel .value #searchBtn{margin-top:0;width:9%}.search-panel .valueProcess{width:63%}.search-panel .valueProcess .dx-textbox{width:94%;display:inline-flex}.search-panel .valueProcess .dx-button{position:relative;top:-2px;border-left:0;height:27px}.search-panel .valueProcess .dx-button-content{padding-right:0 !important}.search-panel .valueProcess .dx-icon{margin-right:3px !important;margin-left:3px !important}.search-panel .valueProcess #advBtn{margin-top:0;width:5%}.search-panel .valueProcess #searchBtn{margin-top:0;width:9%}.voucher-container{width:100%;height:100%}.voucher-container .proof-of-tax-deduction{transition:all .3s linear 0s;width:100%;display:flex;flex-direction:column;align-items:center}.voucher-container .proof-of-tax-deduction .proof{width:100%}.voucher-container .proof-of-tax-deduction .proof .custom{display:flex}.voucher-container .proof-of-tax-deduction .proof .dx-texteditor{border-radius:0}.voucher-container .proof-of-tax-deduction .proof .column{width:50%}.voucher-container .proof-of-tax-deduction .proof .column .value{width:47%}.voucher-container .proof-of-tax-deduction .proof .column .loai-tien{width:47% !important}.voucher-container .proof-of-tax-deduction .proof .name-customer{width:100% !important}.voucher-container .proof-of-tax-deduction .proof .name-customer .label{width:20%}.voucher-container .proof-of-tax-deduction .proof .name-customer .value{width:73.5% !important}.voucher-container .proof-of-tax-deduction .proof div .time .value{width:20%}.voucher-container .proof-of-tax-deduction .proof .name-customer-buy{width:35.07% !important}.voucher-container .proof-of-tax-deduction .proof .name-customer-buy .value{width:63.5% !important}.voucher-container .proof-of-tax-deduction .proof :host .dx-fieldset{width:100px}.voucher-container .proof-of-tax-deduction .group-btn{width:80%;display:flex;justify-content:space-between}.voucher-container .proof-of-tax-deduction .group-btn .btn{padding:10px 10px 10px !important}.button-ok{height:30px;padding-bottom:10px !important;padding-left:20px}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-popup-content{padding-top:5px !important;padding-left:5px !important;padding-right:5px !important;padding-bottom:0 !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-treeview{height:80% !important;padding-bottom:5px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .processing_status-search.dx-treeview,::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .exporter-search.dx-treeview{height:75% !important;padding-bottom:5px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-button-search{border-radius:12px !important}::ng-deep .dx-dropdowneditor-overlay .dx-overlay-content .dx-template-wrapper .dx-button-search .dx-button-content .dx-icon{font-size:13px !important}.rowButton{margin-top:25px;margin-bottom:10px}::ng-deep .nguoi-nop-thue .dx-field-item-label-text{font-weight:bold !important}::ng-deep .khong-co-mst .dx-field-item-label-text{color:red;font-style:italic}::ng-deep .thang-thu-nhap .dx-field-item-label{width:125px}::ng-deep .thang-thu-nhap .dx-field-item-label-content{width:110px !important}::ng-deep .tinh-tien .dx-texteditor-container .dx-texteditor-input-container .dx-texteditor-input{padding:0px 9px}::ng-deep .thue-thu-nhap .dx-field-item-label-location-left{padding-right:18px}::ng-deep .chungtu.invoice-number-create-invoice input{color:red;font-weight:bold}.req-text{margin-left:2px;color:red}::ng-deep .so-tien .dx-texteditor-input{padding:0px 9px 0px 9px}::ng-deep.custom-input .dx-texteditor-container .dx-texteditor-input-container .dx-texteditor-input{padding:0px 0px 0px 3px;height:25px}@media (min-width: 1367px){::ng-deep.custom-input .dx-field-item-label{padding-left:28px;padding-right:10px}}@media (max-width: 1367px) and (min-width: 1023px){::ng-deep.custom-input .dx-field-item-label{padding-left:0px;padding-right:10px}}::ng-deep .customer-tempt .dx-layout-manager .dx-field-item-optional.dx-flex-layout.dx-label-h-align{padding-left:0;padding-right:0}::ng-deep .customer-tempt .dx-layout-manager .dx-field-item-optional.dx-flex-layout.dx-label-h-align label{width:40%;padding-right:10px;text-align:right}::ng-deep .customer-tempt .dx-layout-manager .dx-field-item-optional.dx-flex-layout.dx-label-h-align label .dx-field-item-label-content{width:unset !important}::ng-deep .customer-tempt .dx-layout-manager .dx-field-item-optional.dx-flex-layout.dx-label-h-align label .dx-field-item-label-content span{text-wrap:wrap;font-family:Arial, Helvetica, sans-serif}::ng-deep .customer-tempt .dx-layout-manager .dx-field-item-optional.dx-flex-layout.dx-label-h-align .dx-field-item-content.dx-field-item-content-location-right{width:40%}::ng-deep .customer-tempt .dx-layout-manager .dx-field-item-optional.dx-flex-layout.dx-label-h-align .dx-field-item-content.dx-field-item-content-location-right .dx-datebox.dx-textbox.dx-texteditor.dx-widget.dx-visibility-change-handler.dx-auto-width.dx-dropdowneditor-button-visible.dx-dropdowneditor.dx-datebox-date.dx-datebox-calendar{width:calc((47/60)*100%) !important}::ng-deep .customer-tempt .dx-layout-manager .dx-field-item-optional.dx-flex-layout.dx-label-h-align .dx-field-item-content.dx-field-item-content-location-right .dx-show-invalid-badge{width:calc((47/60)*100%)}#tab-invoice{width:100%;border-bottom:1px solid #ddd}#tab-invoice .dx-tabs{width:20%;border-bottom:0}::ng-deep .dx-tab.dx-tab-selected{color:#2680eb !important}::ng-deep #tab-invoice .dx-tab{padding:4px}::ng-deep .prv-s-invoice .modal-content{border:0px;border-radius:0px}::ng-deep .v-s-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/vouchers/components/voucher/voucher.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/vouchers/components/voucher/voucher.component.ts ***!
  \**************************************************************************/
/*! exports provided: VoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherComponent", function() { return VoucherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vouchers/shared */ "./src/app/modules/vouchers/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/library/invoice/invoices.service */ "./src/app/core/library/invoice/invoices.service.ts");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_configs_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/configs/shared */ "./src/app/modules/configs/shared/index.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var _income_confirmation_income_confirmation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../income-confirmation/income-confirmation.component */ "./src/app/modules/vouchers/components/income-confirmation/income-confirmation.component.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
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





















var VoucherComponent = /** @class */ (function () {
    function VoucherComponent(authService, translate, modalService, fb, voucherService, 
    // private socketService: SocketService,
    cdRef, confirmService, spinner, route, router, configsService, customeModalService, vPreviewInvService) {
        var _this = this;
        this.authService = authService;
        this.translate = translate;
        this.modalService = modalService;
        this.fb = fb;
        this.voucherService = voucherService;
        this.cdRef = cdRef;
        this.confirmService = confirmService;
        this.spinner = spinner;
        this.route = route;
        this.router = router;
        this.configsService = configsService;
        this.customeModalService = customeModalService;
        this.vPreviewInvService = vPreviewInvService;
        this.configs = {};
        this.isIncomeConfirmation = false;
        this.frmData = new _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_5__["VoucherModel"](1);
        this.frmData_txn = new _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_5__["ConfirmLettersModel"]();
        this.priorities = [
            { code: 1, name: 'Có' },
            { code: 0, name: 'Không' }
        ];
        this.DaXuat = false;
        this.fileData = [];
        this.tempKiFile = 0;
        this.isAccessExportInv = false;
        this.confirmCheckPreview = false;
        this._isValid = false;
        this.select = {};
        this._oTemplateTT78 = {};
        this.formItems = [];
        this.customForms = [];
        this.customerTempt = {};
        this.extentionGrid = {};
        this.taxCode = '';
        this.province_name = '';
        this.fields = [];
        this.emailPattern = _config_index__WEBPACK_IMPORTED_MODULE_16__["pattern"].email;
        this.arrEmail = [];
        this.emails = [];
        this.currentIndex = 3;
        this.listpermissions = [];
        this.isVoucher = false;
        this.tabs = [];
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
        this.onChangeCity = function (e) {
            var ts = e;
        };
        this.changeDateTime = function (e) {
            _this.changeTemplateInvoice(e.value);
        };
        this.socketService = new _core_index__WEBPACK_IMPORTED_MODULE_7__["SocketService"](this.authService, this.modalService, this.spinner);
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.tabs = _core_index__WEBPACK_IMPORTED_MODULE_7__["VSelectBoxService"].tabsVoucher(this._translate);
        this.selectedIndex = 0;
        this.isVoucher = true;
    }
    VoucherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectWebsocket();
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser.account) {
            this.taxCode = this.currentUser.account.tax_code;
            if (this.currentUser.account.van_account_info)
                this.province_name = this.currentUser.account.van_account_info.city_name;
        }
        if (this.route.snapshot.paramMap.get('isThuXacNhan')) {
            this.selectedIndex = 1;
            this.isVoucher = false;
            this.isIncomeConfirmation = true;
        }
        this.routeSub = this.route.data.subscribe(function (data) {
            // get cấu hình
            var danh_muc = _this.authService.getDMLocal();
            _this.configs = _this.authService.getConfigs();
            _this.oldConfigs = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_this.configs.system_parameter);
            _this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].getFormatterColumnInv(_this.configs.decimal_places_json);
            _this.frmData.display_currency = JSON.stringify(_this.configs.display_currency);
            _this.formatter.display_int = _this.configs.system_parameter.display_int;
            _this.select.unit_codes = danh_muc.DM_DON_VI_TINH ? danh_muc.DM_DON_VI_TINH.data : null;
            _this.select.select_provisions_on_accounts = danh_muc.DM_DINH_KHOAN ? danh_muc.DM_DINH_KHOAN.data : null;
            _this.select.payment_method_names = danh_muc.DM_HINH_THUC_THANH_TOAN ? danh_muc.DM_HINH_THUC_THANH_TOAN.data : null;
            _this.select.vats = danh_muc.DM_TY_LE_VAT ? danh_muc.DM_TY_LE_VAT.data : null;
            _this.select.countrys = danh_muc.DM_QUOC_GIA ? danh_muc.DM_QUOC_GIA.data : null;
            _this.select.cities = danh_muc.DM_TINH_THANH ? danh_muc.DM_TINH_THANH.data : null;
            var isEdit = false;
            var invoice;
            if (data.init[1] == true)
                isEdit = true;
            if (isEdit) {
                _this.select.templatesTT78 = data.init[2].filter(function (item) { return item.template_type !== 'THU_XAC_NHAN_THU_NHAP'; });
                invoice = data.init[0];
            }
            else {
                _this.select.templatesTT78 = data.init[0].filter(function (item) { return item.template_type !== 'THU_XAC_NHAN_THU_NHAP'; });
            }
            if (isEdit || _this.voucherService.isCopy) {
                if (_this.voucherService.isCopy) {
                    _this.khoiTaoKhiSua(_this.voucherService.data);
                }
                else {
                    // this.isSuaGhiTam = true;
                    _this.khoiTaoKhiSua(invoice);
                }
            }
            else {
                _this.khoiTaoKhiThemMoi();
            }
            if (_this.configs.system_parameter.voucher_currency) {
                _this.frmData.currency_code = _this.configs.system_parameter.voucher_currency;
            }
            _this.changeValueTempt();
            // localStorage.setItem('lct', JSON.stringify(this.frmData))
            setTimeout(function () {
                _this.setDataSessionStorage(_this.frmData);
                _this.changeTemplateInvoice(_this.frmData.license_date);
            });
        });
        this.listpermissions = this.currentUser.user.permissions.split(',');
        var _obj = this.listpermissions.filter(function (p) { return p === 'phe_duyet'; });
        if (_obj.length > 0) {
            this.isAccessExportInv = true;
        }
        else {
            this.isAccessExportInv = false;
        }
    };
    VoucherComponent.prototype.ngOnDestroy = function () {
        this.ioSignature.unsubscribe();
        this.routeSub.unsubscribe();
        // localStorage.removeItem('lct');
        // localStorage.removeItem('txn');
    };
    VoucherComponent.prototype.ngAfterViewInit = function () {
        if (this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].statusInv.DaXuat) {
            this.disablleScreen();
            this.cdRef.detectChanges();
        }
    };
    // Bật modal thay đổi số thập phân
    VoucherComponent.prototype.configDecimal = function (n) {
        var _this = this;
        var initialState = {
            column: n,
            formatter: this.formatter,
            isVoucher: true,
        };
        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_4__["ConfigDecimalComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        var subModal = this.modalService.onHide.subscribe(function () {
            var data = _this.bsModalRef.content.successSaveItem;
            if (data) {
                // this.formatter[data.column] = data.character;
                // this._tinhGiaTri();
            }
            subModal.unsubscribe();
        });
    };
    VoucherComponent.prototype.readonlyAllForm = function () {
        // this.listDxForm._results.forEach(item => {
        //   item.readOnly = true;
        // });
    };
    VoucherComponent.prototype.removeReadonlyAllForm = function () {
        // this.listDxForm._results.forEach(item => {
        //   item.readOnly = false;
        // });
        this.DaXuat = false;
    };
    /*  */
    VoucherComponent.prototype.khoiTaoKhiThemMoi = function () {
        this.fileData = [];
        if (this.select.templatesTT78.length) {
            this.frmData.template_id = this.select.templatesTT78[0].value;
            var isOldTemp = this.select.templatesTT78[0].fields.filter(function (p) { return p.code == "tien-dong-bao-hiem-nnt"; });
            if (isOldTemp.length > 0) {
                this.fields = this.select.templatesTT78[0].fields;
            }
            else {
                this.fields = this.dataSourceTNCN;
            }
            this.frmData.license_series = this.select.templatesTT78[0].invoice_series;
            this.frmData.template_code = this.select.templatesTT78[0].template_code;
            for (var key in this.select.templatesTT78[0]) {
                if (this.select.templatesTT78[0].hasOwnProperty(key)) {
                    this._oTemplateTT78[key] = this.select.templatesTT78[0][key];
                }
            }
            this.invoiceTemplateTT78 = this.select.templatesTT78[0];
        }
        this.frmData['is_voucher_currency'] = this.configs.system_parameter.is_voucher_currency ? this.configs.system_parameter.is_voucher_currency : false;
        var license_date = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('YYYY-MM-DD HH:mm:ss');
        this.frmData.license_date = license_date;
        this.frmData.province_name = this.province_name;
    };
    /*  */
    VoucherComponent.prototype.khoiTaoKhiSua = function (data) {
        var _this = this;
        // khởi tạo dữ liệu form
        this.frmData.fillFormData(data);
        this.frmData['is_voucher_currency'] = data.is_voucher_currency ? data.is_voucher_currency : false;
        // lấy file
        var isOldTemp = this.select.templatesTT78.filter(function (p) { return p.value == data.template_id; })[0];
        var lengthTemp = isOldTemp.fields.filter(function (p) { return p.code == "tien-dong-bao-hiem-nnt"; });
        if (lengthTemp.length > 0) {
            this.fields = this.select.templatesTT78.filter(function (p) { return p.value == data.template_id; })[0].fields;
        }
        else {
            this.fields = this.dataSourceTNCN;
        }
        if (this.voucherService.isCopy) {
            this.fileData = [];
            var _oTempt = this.select.templatesTT78.filter(function (p) { return p.value === _this.frmData.template_id; })[0];
            if (_oTempt) {
                this.frmData.template_id = _oTempt.value;
                this.frmData.license_series = _oTempt.invoice_series;
                this.frmData.template_code = _oTempt.template_code;
            }
            else {
                this.frmData.template_id = null;
                this.frmData.license_series = null;
                this.frmData.template_code = null;
            }
        }
        else {
            this.fileData = data.license_files;
        }
        this.select.templatesTT78.forEach(function (item) {
            if (item.value === _this.frmData.template_id) {
                _this.invoiceTemplateTT78 = item;
            }
        });
        this.select.templatesTT78.some(function (item) {
            if (item.value === _this.frmData.template_id) {
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        _this._oTemplateTT78[key] = item[key];
                    }
                }
                return true;
            }
        });
        if (this.frmData.taxpayers_email) {
            this.emails = [];
            var emailToString = this.frmData.taxpayers_email;
            var a11 = emailToString.replace(/;/g, ',');
            this.emails = a11.split(',');
        }
        // cấu hình thập phân thêm mới
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(data.decimal_places_json));
    };
    VoucherComponent.prototype.xuLiApiKhiXuat = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        var status;
        if (!this.frmData.id && !this.frmData.license_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].processInv.ThemMoi;
        }
        if (this.frmData.id && !this.frmData.license_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].statusInv.GhiTam;
        }
        if (this.frmData.id && this.frmData.license_number) {
            status = _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].statusInv.ChoKy;
        }
        var xmlInvoice = "";
        if (status === _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].processInv.ThemMoi) {
            var sub_1 = this.voucherService.ghiTam(this.frmData, true).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.setCurrencyVoucher();
                    _this.frmData.license_number = rs.data.license_number;
                    _this.frmData.license_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_date).format('YYYY-MM-DD HH:mm:ss');
                    var license_sign_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.frmData.id = rs.data.id;
                    _this.setDataSessionStorage(_this.frmData);
                    _this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                    //  Lấy xml từ serer
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(rs.data.xml_string);
                    if (xmlInvoice != "") {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                            _this.goiApiXuatHoaDon(xmlInvoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, license_sign_date);
                        }
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
                sub_1.unsubscribe();
            });
        }
        else if (status === _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].statusInv.GhiTam) {
            var sub_2 = this.voucherService.edit(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.setCurrencyVoucher();
                    _this.frmData.license_number = rs.data.license_number;
                    _this.frmData.license_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_date).format('YYYY-MM-DD HH:mm:ss');
                    var license_sign_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(rs.data.xml_string);
                    _this.setDataSessionStorage(_this.frmData);
                    if (xmlInvoice != "") {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                            _this.goiApiXuatHoaDon(xmlInvoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, license_sign_date);
                        }
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                sub_2.unsubscribe();
            });
        }
        else if (status === _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].statusInv.ChoKy) {
            var sub_3 = this.voucherService.edit(this.frmData.id, this.frmData, true).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.setCurrencyVoucher();
                    _this.frmData.license_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_date).format('YYYY-MM-DD HH:mm:ss');
                    var license_sign_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_sign_date).format('YYYY-MM-DD HH:mm:ss');
                    _this.nodeSign = "//CTu/DSCKS/TCTTNhap";
                    xmlInvoice = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(rs.data.xml_string);
                    _this.setDataSessionStorage(_this.frmData);
                    if (xmlInvoice != "") {
                        if (_this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
                            || (_this.configs.integrate_parameter.remote_signing && _this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
                            _this.goiApiXuatHoaDon(xmlInvoice);
                        }
                        else {
                            _this.xuLyKiFile(xmlInvoice, license_sign_date);
                        }
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
                sub_3.unsubscribe();
            });
        }
    };
    VoucherComponent.prototype.goiApiXuatHoaDon = function (xml_string) {
        var _this = this;
        setTimeout(function () {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        }, 20);
        var sub = this.voucherService.xuatChungTu({
            id: this.frmData.id,
            xml_string: xml_string,
            license_files: this.frmData.license_files
        }).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.voucherService.isCopy = false;
                _this.frmData.status = rs.data.status;
                _this.disablleScreen();
                _this.fileData = _this.frmData.license_files;
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(_this._translate.NOTIFY.export_success, 'success');
                _this.isExportInvoice = true;
                _this.setDataSessionStorage(_this.frmData);
                _this.voucherService.isCopy = false;
                // if(this.frmData.id)
                // this.router.navigate([`/system/voucher-tax/${rs.data.id}`]);
                // if (this.isSuaGhiTam) {
                //   this.router.navigate([`/system/voucher-tax/${this.frmData.id}`, { isSuaGhiTam: true }]);
                // } else {
                // }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    VoucherComponent.prototype.xuLyKiFile = function (xmlInvoice, signDate) {
        var _this = this;
        this.socketService.kiSo(function () { return _this.connectWebsocket(); }, xmlInvoice, 'hoadon.xml', this.nodeSign, signDate, 'LicenseData', '', true, this.taxCode, true);
    };
    /* Kết nối đến socket */
    VoucherComponent.prototype.connectWebsocket = function () {
        var _this = this;
        this.ioSignature = this.socketService.lapHoaDon().subscribe(function (message) {
            var data = message;
            if (data.SvcName === 'efy_Sign') {
                if (data.Data.Name === 'hoadon.xml') {
                    _this.goiApiXuatHoaDon(data.Data.Content);
                }
                else if (data.Data.Name === 'ten_filek_the_trung-dc-nhi.xml') {
                    _this.frmData.issuer_name = data.Data.IssuerName;
                    _this.xuLiApiKhiXuat();
                }
                else {
                    _this.frmData.license_files.forEach(function (item) {
                        if (item.file_name === data.Data.Name) {
                            item.file_content = data.Data.Content;
                        }
                    });
                    _this.tempKiFile++;
                    if (_this.tempKiFile === _this.frmData.license_files.length) {
                        _this.xuLiApiKhiXuat();
                    }
                }
            }
        });
    };
    /* Disbale Form */
    VoucherComponent.prototype.disablleScreen = function () {
        this.readonlyAllForm();
        this.DaXuat = true;
    };
    /*  */
    VoucherComponent.prototype.setDataSessionStorage = function (data) {
        this.valueChange = JSON.stringify(data);
        this.incomeConfirmationComponent.updateData_lct();
        // localStorage.setItem('lct', this.valueChange);
    };
    /*  */
    VoucherComponent.prototype.checkDataFormChange = function (dataChange, dataForm) {
        var dataBefore = JSON.parse(dataChange);
        var dataAfter = JSON.parse(JSON.stringify(dataForm));
        return lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"](dataBefore, dataAfter);
        // return true;
    };
    /*  */
    VoucherComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.configsService.getAll().subscribe(function (res) {
            if (res.data && res.data.configs) {
                _this.authService.setConfigs(res.data.configs);
                _this.configs = _this.authService.getConfigs();
            }
        });
        if (!this.checkDataFormChange(this.valueChange, this.frmData)) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
                _this.confirmService.confirm().subscribe(function (value) {
                    switch (value) {
                        case 'yes':
                            _this.subData(_core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].statusInv.GhiTam, _this.frmData).then(function (value1) {
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
        else {
            return true;
        }
    };
    /*  */
    VoucherComponent.prototype.subData = function (type, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.windowPreviewBeforeSubmit) {
                            this.windowPreviewBeforeSubmit.focus();
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.handleFormDataSub()];
                    case 1:
                        _a.sent();
                        if (this.frmData.license_options) {
                            this.frmData.license_options.forEach(function (item) {
                                delete item['is_show'];
                                delete item['type'];
                                delete item['width'];
                                delete item['statusData'];
                            });
                        }
                        if (!data.id) return [3 /*break*/, 3];
                        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
                        return [4 /*yield*/, this.voucherService.edit(data.id, data).toPromise().then(function (res) {
                                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
                                if (res.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
                        return [4 /*yield*/, this.voucherService.ghiTam(data).toPromise().then(function (res) {
                                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
                                if (res.status === 'success') {
                                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(_this._translate.NOTIFY.update_success, 'success');
                                    return true;
                                }
                                else {
                                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(res.message, 'error');
                                    return false;
                                }
                            })];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /*  */
    VoucherComponent.prototype.handleFormDataSub = function () {
        var _this = this;
        var wait = function (delay) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return new Promise(function (resolve) { return setTimeout.apply(void 0, [resolve, delay].concat(args)); });
        };
        return wait(200).then(function () {
            // this.fileData =[];
            _this.tempKiFile = 0;
            // this.frmData.license_files = JSON.parse(JSON.stringify(this.fileData));
            _this.frmData.license_files = [];
            _this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].getObjFormatterToColumn(_this.formatter));
            return true;
        });
    };
    /* Xuất hóa đơn */
    VoucherComponent.prototype.eSubmit = function (type, isCheckNoVat) {
        var _this = this;
        if (this.windowPreviewBeforeSubmit) {
            this.windowPreviewBeforeSubmit.focus();
            return;
        }
        this.tong_tien = "";
        setTimeout(function () {
            _this.handleFormData();
            _this._isValid = _this._validForm();
            if (!_this._isValid) {
                return;
            }
            _this._isValid = _core_library_invoice_invoices_service__WEBPACK_IMPORTED_MODULE_12__["InvoicesService"].checkTimeExportInv(_this.configs.system_parameter);
            if (!_this._isValid) {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(typescript_string_operations__WEBPACK_IMPORTED_MODULE_13__["String"].Format(_this._translate.NOTIFY.time_export_inv, moment__WEBPACK_IMPORTED_MODULE_8__(_this.configs.system_parameter.time_start).format('HH:mm'), moment__WEBPACK_IMPORTED_MODULE_8__(_this.configs.system_parameter.time_end).format('HH:mm')), 'error');
                return;
            }
            if (_this.frmData.license_options) {
                _this.frmData.license_options.forEach(function (item) {
                    delete item['is_show'];
                    delete item['type'];
                    delete item['width'];
                    delete item['statusData'];
                });
            }
            if (type === 'XUAT' || (type === _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].statusInv.TrinhKy && _this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].hinhThucXuat.XuatChoKy)) {
                _this.processXuatHoaDon(type, isCheckNoVat);
            }
            else {
                _this.processGhiTam(type);
            }
        }, 300);
    };
    /* Xử lý xuất hóa đơn */
    VoucherComponent.prototype.processXuatHoaDon = function (type, isCheckNoVat) {
        var _this = this;
        if (type === _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].statusInv.TrinhKy && this.frmData.status === _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].hinhThucXuat.XuatChoKy) {
            this.confirmCheckPreview = true;
        }
        if (!this.listpermissions.includes('phe_duyet_chung_tu')) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Bạn không có quyền thực hiện chức năng 'Xuất và ký'", 'error');
            return;
        }
        if (this.confirmCheckPreview) {
            if (this.frmData.status !== _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].hinhThucXuat.XuatChoKy) {
                this.xuatHoaDon(this.frmData);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Helper"].confirmXuatChoKy(function () {
                    _this.xuatChoKy(_this.frmData);
                });
            }
            this.confirmCheckPreview = false;
        }
        else {
            this.previewBeforeExport(type);
        }
    };
    VoucherComponent.prototype.previewBeforeExport = function (type) {
        var _this = this;
        this.handleFormData();
        var trang_thai = this._translate.THONG_TIN.xuat_va_ky;
        var du_lieu = this.voucherService.taodulieuXemTruocChungTu(this.frmData);
        du_lieu['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].cauhinhxemmau.chungtu;
        var content_invoice = {
            du_lieu: du_lieu,
            ngay_hoa_don: "",
            trang_thai: trang_thai,
            tong_tien: "",
            title_invoice_type: this._translate.THONG_TIN.ban_du_thao_chung_tu.toUpperCase(),
            note_warn: this._translate.THONG_TIN.luu_y_truoc_khi_xuat_chung_tu,
            is_display_img_note: true,
            text_ngay_hoa_don: this._translate.THONG_TIN.ngay_chung_tu,
            text_tong_tien: this._translate.THONG_TIN.tong_tien,
            question_again: this._translate.THONG_TIN.ban_co_chac_chan_xuat_chung_tu_khong
        };
        var initialState = {
            content_invoice: content_invoice,
        };
        this.bsModalRef = this.customeModalService.show(_shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_18__["PreviewInvoiceComponent"], {
            backdrop: 'static',
            keyboard: false,
            class: 'modal-xl prv-s-invoice v-s-invoice',
            initialState: initialState
        });
        var subModal = this.customeModalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem == _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].actionHander.DongY) {
                _this.confirmCheckPreview = true;
                _this.eSubmit(type);
            }
            subModal.unsubscribe();
        });
    };
    /* Xử lý ghi tạm hóa đơn */
    VoucherComponent.prototype.processGhiTam = function (type) {
        this.ghiTam(this.frmData);
    };
    VoucherComponent.prototype.handleFormData = function () {
        this.tempKiFile = 0;
        this.frmData.license_files = []; //JSON.parse(JSON.stringify(this.fileData));
        this.frmData.decimal_places_json = JSON.stringify(_core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].getObjFormatterToColumn(this.formatter));
    };
    /* Validate */
    VoucherComponent.prototype._validForm = function () {
        var _isValid = true;
        if (!this.frmData.template_id) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.CONTROLL.LABEL.invoice_form + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.license_date) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.CONTROLL.LABEL.invoice_voucher + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.province_name) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.CONTROLL.LABEL.province_city + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.taxpayers_name) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.CONTROLL.LABEL.fullname + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.nationality) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.CONTROLL.LABEL.nationality + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (!this.frmData.taxpayers_tax_code && !this.frmData.id_card) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.CONTROLL.LABEL.req_taxcode_cmnd, 'error');
            return false;
        }
        if (!this.frmData.year_pay_income) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(this._translate.CONTROLL.COMBO.year + ' ' + this._translate.VALIDATION.required, 'error');
            return false;
        }
        if (this.frmData.taxpayers_email && !this.emailPattern.test(this.frmData.taxpayers_email)) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify("Email" + ' ' + this._translate.VALIDATION.not_pattern, 'error');
            return false;
        }
        return _isValid;
    };
    /* Ghi tạm */
    VoucherComponent.prototype.ghiTam = function (data) {
        var _this = this;
        if (this.frmData.id) {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
            var sub_4 = this.voucherService.edit(this.frmData.id, data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.setCurrencyVoucher();
                    _this.frmData.id = rs.data.id;
                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                    _this.setDataSessionStorage(_this.frmData);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
                sub_4.unsubscribe();
            });
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
            var sub_5 = this.voucherService.ghiTam(data).subscribe(function (rs) {
                if (rs.status === 'success') {
                    _this.setCurrencyVoucher();
                    _this.frmData.id = rs.data.id;
                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(_this._translate.NOTIFY.save_invoice_success, 'success');
                    _this.setDataSessionStorage(_this.frmData);
                    _this.voucherService.isCopy = false;
                    // this.router.navigate([`/system/voucher-tax/${rs.data.id}`]);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
                }
            }, function (err) {
            }, function () {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
                sub_5.unsubscribe();
            });
        }
    };
    VoucherComponent.prototype.xuatHoaDon = function (data) {
        var _this = this;
        if (this.configs.integrate_parameter.concentrate_signature.is_concentrate_signature
            || (this.configs.integrate_parameter.remote_signing && this.configs.integrate_parameter.remote_signing.is_remote_signing)) {
            this.xuLiApiKhiXuat();
        }
        else {
            if (this.frmData.license_files.length) {
                this.frmData.license_files.forEach(function (item) {
                    _this.socketService.kiFile(function () { return _this.connectWebsocket(); }, item.file_content, item.file_name, item.file_name.split('.').pop(), true, _this.frmData.license_date);
                });
            }
            else {
                var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('YYYY-MM-DD HH:mm:ss');
                this.socketService.kiSo(function () { return _this.connectWebsocket(); }, 'PHRlbXBJbnZvaWNlPjwvdGVtcEludm9pY2U+', 'ten_filek_the_trung-dc-nhi.xml', '//tempInvoice', invoiceDate, "", '', true, this.taxCode, true);
            }
        }
    };
    /* Xuất chờ ký */
    VoucherComponent.prototype.xuatChoKy = function (data) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].showloading();
        var sub = this.voucherService.xuatChoKy(data).subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.frmData.id = rs.data.id;
                _this.frmData.license_number = rs.data.license_number;
                _this.frmData = rs.data.status;
                _this.frmData.license_date = moment__WEBPACK_IMPORTED_MODULE_8__(rs.data.license_date).format('YYYY-MM-DD HH:mm:ss');
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(_this._translate.NOTIFY.export_wait_sign_success, 'success');
                _this.setDataSessionStorage(_this.frmData);
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].notify(rs.message, 'error');
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_7__["Library"].hideloading();
            sub.unsubscribe();
        });
    };
    VoucherComponent.prototype.onChangeTem = function (e) {
        var _this = this;
        this.select.templatesTT78.forEach(function (item) {
            if (e.value === item.value) {
                var isOldTemp = item.fields.filter(function (p) { return p.code == 'tien-dong-bao-hiem-nnt'; });
                if (isOldTemp.length > 0) {
                    _this.fields = item.fields;
                }
                else {
                    _this.fields = _this.dataSourceTNCN;
                }
                _this.frmData.template_id = item.value;
                _this.frmData.license_series = item.invoice_series;
                _this.frmData.template_code = item.template_code;
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        var value = item[key];
                        _this._oTemplateTT78[key] = value;
                    }
                }
                _this.frmData.compulsory_insurance_payment = _this.inforFields('tien-dong-bao-hiem-nnt').is_show ? _this.frmData.compulsory_insurance_payment : null;
                _this.frmData.total_taxable_income_deducted = _this.inforFields('tien-chiu-thue-nnt').is_show ? _this.frmData.total_taxable_income_deducted : null;
                _this.frmData.total_taxable_income = _this.inforFields('tien-tinh-thue-nnt').is_show ? _this.frmData.total_taxable_income : null;
                _this.frmData.amount_personal_income_tax_withheld = _this.inforFields('tien-thue-da-khau-tru-nnt').is_show ? _this.frmData.amount_personal_income_tax_withheld : null;
                _this.frmData.total_taxable_income_paid = _this.inforFields('tien-thue-da-tra-nnt').is_show ? _this.frmData.total_taxable_income_paid : null;
                _this.frmData.amount_personal_income_still_received = _this.inforFields('tien-duoc-nhan-nnt').is_show ? _this.frmData.amount_personal_income_still_received : null;
                // Nếu là mẫu html
                if (item.fields) {
                    _this.formItems = [];
                    _this.customForms = [];
                    var _arrayGrid = item.fields.filter(function (x) { return x.type === '5'; });
                    if (_arrayGrid && _arrayGrid.length > 0) {
                        _this.extentionGrid.ma_hang = false;
                        _this.extentionGrid.so_lo = false;
                        _this.extentionGrid.han_dung = false;
                        _this.extentionGrid.nuoc_san_xuat = false;
                        _this.extentionGrid.don_hang_hop_dong = false;
                        _this.extentionGrid.ma_quan_ly = false;
                        for (var i = 0; i < _arrayGrid.length; i++) {
                            var column = _arrayGrid[i]['name'];
                            var value = _arrayGrid[i]['is_show'];
                            var _ma = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._convertToViKdau(column);
                            _this.extentionGrid[_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._convertToViKdau(column)] = value;
                        }
                    }
                    var _dulieumorong_1 = item.fields.filter(function (x) { return x.type === '4'; });
                    if (_dulieumorong_1.length > 0) {
                        _dulieumorong_1.forEach(function (item1) {
                            if (item1.is_show) {
                                if (item1.data_type === 'chu') {
                                    _this.customForms.push({
                                        editorType: 'dxTextBox',
                                        dataField: item1.code,
                                        label: { text: item1.name, showColon: false },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_1);
                                            }
                                        }
                                    });
                                }
                                if (item1.data_type === 'soluong') {
                                    _this.customForms.push({
                                        editorType: 'dxNumberBox',
                                        dataField: item1.code,
                                        label: { text: item1.name, showColon: false },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_1);
                                            },
                                            format: _this.formatter.so_tncncdn,
                                            showClearButton: true
                                        },
                                        format: _this.formatter.so_tncncdn,
                                    });
                                }
                                if (item1.data_type === 'ngay') {
                                    _this.customForms.push({
                                        editorType: 'dxDateBox',
                                        dataField: item1.code,
                                        label: { text: item1.name, showColon: false },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_1);
                                            }, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss',
                                        }
                                    });
                                }
                                if (item1.data_type === 'danhmuc') {
                                    _this.customForms.push({
                                        editorType: 'dxSelectBox',
                                        dataField: item1.code,
                                        label: { text: item1.name, showColon: false }
                                    });
                                }
                            }
                        });
                        _this.formItems.push(_this.createCustomGroup());
                        _this.frmData.license_options = _dulieumorong_1;
                    }
                    else
                        _this.frmData.license_options = [];
                    _dulieumorong_1.forEach(function (value) {
                        _this.customerTempt[value.code] = value.value;
                    });
                }
                else {
                    _this.formItems = [];
                    _this.customerTempt = {};
                    _this.extentionGrid.ma_hang = false;
                    _this.extentionGrid.so_lo = false;
                    _this.extentionGrid.han_dung = false;
                    _this.extentionGrid.nuoc_san_xuat = false;
                    _this.extentionGrid.don_hang_hop_dong = false;
                    _this.extentionGrid.ma_quan_ly = false;
                }
            }
        });
    };
    VoucherComponent.prototype.changeValueTempt = function () {
        var _this = this;
        this.select.templatesTT78.forEach(function (item) {
            if (item.value === _this.frmData.template_id) {
                var isOldTemp = item.fields.filter(function (p) { return p.code == 'tien-dong-bao-hiem-nnt'; });
                if (isOldTemp.length > 0) {
                    _this.fields = item.fields;
                }
                else {
                    _this.fields = _this.dataSourceTNCN;
                }
                _this.frmData.template_id = item.value;
                _this.frmData.license_series = item.invoice_series;
                _this.frmData.template_code = item.template_code;
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        var value = item[key];
                        _this._oTemplateTT78[key] = value;
                    }
                }
                _this.frmData.compulsory_insurance_payment = _this.inforFields('tien-dong-bao-hiem-nnt').is_show ? _this.frmData.compulsory_insurance_payment : null;
                _this.frmData.total_taxable_income_deducted = _this.inforFields('tien-chiu-thue-nnt').is_show ? _this.frmData.total_taxable_income_deducted : null;
                _this.frmData.total_taxable_income = _this.inforFields('tien-tinh-thue-nnt').is_show ? _this.frmData.total_taxable_income : null;
                _this.frmData.amount_personal_income_tax_withheld = _this.inforFields('tien-thue-da-khau-tru-nnt').is_show ? _this.frmData.amount_personal_income_tax_withheld : null;
                _this.frmData.total_taxable_income_paid = _this.inforFields('tien-thue-da-tra-nnt').is_show ? _this.frmData.total_taxable_income_paid : null;
                _this.frmData.amount_personal_income_still_received = _this.inforFields('tien-duoc-nhan-nnt').is_show ? _this.frmData.amount_personal_income_still_received : null;
                // Nếu là mẫu html
                if (item.fields && item.fields.length > 0) {
                    _this.formItems = [];
                    _this.customForms = [];
                    var _arrayGrid = item.fields.filter(function (x) { return x.type === '5'; });
                    if (_arrayGrid && _arrayGrid.length > 0) {
                        _this.extentionGrid.ma_hang = false;
                        _this.extentionGrid.so_lo = false;
                        _this.extentionGrid.han_dung = false;
                        _this.extentionGrid.nuoc_san_xuat = false;
                        _this.extentionGrid.don_hang_hop_dong = false;
                        _this.extentionGrid.ma_quan_ly = false;
                        for (var i = 0; i < _arrayGrid.length; i++) {
                            var column = _arrayGrid[i]['name'];
                            var value = _arrayGrid[i]['is_show'];
                            var _ma = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._convertToViKdau(column);
                            _this.extentionGrid[_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._convertToViKdau(column)] = value;
                        }
                    }
                    var _dulieumorong_2 = item.fields.filter(function (x) { return x.type === '4'; });
                    if (_dulieumorong_2.length > 0) {
                        _dulieumorong_2.forEach(function (item1) {
                            if (item1.is_show) {
                                if (item1.data_type === 'chu') {
                                    _this.customForms.push({
                                        editorType: 'dxTextBox',
                                        dataField: item1.code,
                                        label: { text: item1.name, showColon: false },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_2);
                                            }
                                        }
                                    });
                                }
                                if (item1.data_type === 'soluong') {
                                    _this.customForms.push({
                                        editorType: 'dxNumberBox',
                                        dataField: item1.code,
                                        label: { text: item1.name, showColon: false },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_2);
                                            },
                                            format: _this.formatter.so_tncncdn,
                                            showClearButton: true
                                        },
                                        format: _this.formatter.so_tncncdn,
                                    });
                                }
                                if (item1.data_type === 'ngay') {
                                    _this.customForms.push({
                                        editorType: 'dxDateBox',
                                        dataField: item1.code,
                                        label: { text: item1.name, showColon: false },
                                        editorOptions: {
                                            onValueChanged: function () {
                                                _this.changeItem(_dulieumorong_2);
                                            }, displayFormat: 'dd/MM/yyyy', dateSerializationFormat: 'yyyy-MM-dd HH:mm:ss',
                                        }
                                    });
                                }
                                if (item1.data_type === 'danhmuc') {
                                    _this.customForms.push({
                                        editorType: 'dxSelectBox',
                                        dataField: item1.code,
                                        label: { text: item1.name, showColon: false }
                                    });
                                }
                            }
                        });
                        _this.formItems.push(_this.createCustomGroup());
                    }
                    if (_this.frmData.license_options && _this.frmData.license_options.length > 0) {
                        _this.frmData.license_options.forEach(function (iteminv) {
                            if (iteminv.data_type == 'soluong' && iteminv.value) {
                                _this.customerTempt[iteminv.code] = parseInt(iteminv.value);
                            }
                            else {
                                _this.customerTempt[iteminv.code] = iteminv.value;
                            }
                        });
                    }
                    else {
                        _dulieumorong_2.forEach(function (item2) {
                            _this.customerTempt[item2.code] = item2.value;
                        });
                        _this.frmData.license_options = _dulieumorong_2;
                    }
                }
            }
        });
    };
    /////// sự kiện thay đổi các trường mở rộng
    VoucherComponent.prototype.changeItem = function (_dulieumorong) {
        var _this = this;
        _dulieumorong.forEach(function (item) {
            for (var key in _this.customerTempt) {
                if (item.code === key) {
                    item.value = _this.customerTempt[key];
                }
            }
            _this.frmData.license_options = _dulieumorong;
        });
    };
    ////// Tạo form mở rộng
    VoucherComponent.prototype.createCustomGroup = function () {
        return {
            itemType: 'group',
            colCount: '2',
            items: this.customForms
        };
    };
    VoucherComponent.prototype.disableTemplateInput = function () {
        if (this.frmData.license_number) {
            return true;
        }
        return false;
    };
    VoucherComponent.prototype.tinhgiatri = function () {
        if (!this.frmData.auto_value) {
            if (this.inforFields('tien-duoc-nhan-nnt').is_show) {
                if (this.inforFields('tien-thue-da-tra-nnt').is_show) {
                    if (this.frmData.total_taxable_income_paid != null && this.frmData.amount_personal_income_tax_withheld != null)
                        this.frmData.amount_personal_income_still_received = _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].roundNumber(this.frmData.total_taxable_income_paid - this.frmData.amount_personal_income_tax_withheld, this.formatter.so_tncncdn);
                    else if (this.frmData.total_taxable_income_paid != null)
                        this.frmData.amount_personal_income_still_received = _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].roundNumber(this.frmData.total_taxable_income_paid, this.formatter.so_tncncdn);
                    else if (this.frmData.amount_personal_income_tax_withheld != null)
                        this.frmData.amount_personal_income_still_received = _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].roundNumber(0 - this.frmData.amount_personal_income_tax_withheld, this.formatter.so_tncncdn);
                }
                else if (this.inforFields('tien-chiu-thue-nnt').is_show) {
                    if (this.frmData.total_taxable_income_deducted != null && this.frmData.amount_personal_income_tax_withheld != null)
                        this.frmData.amount_personal_income_still_received = _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].roundNumber(this.frmData.total_taxable_income_deducted - this.frmData.amount_personal_income_tax_withheld, this.formatter.so_tncncdn);
                    else if (this.frmData.total_taxable_income_deducted != null)
                        this.frmData.amount_personal_income_still_received = _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].roundNumber(this.frmData.total_taxable_income_deducted, this.formatter.so_tncncdn);
                    else if (this.frmData.amount_personal_income_tax_withheld != null)
                        this.frmData.amount_personal_income_still_received = _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].roundNumber(0 - this.frmData.amount_personal_income_tax_withheld, this.formatter.so_tncncdn);
                }
            }
            else
                this.frmData.amount_personal_income_still_received = null;
        }
    };
    /* Xem trước chứng từ */
    VoucherComponent.prototype.preview = function () {
        var _this = this;
        setTimeout(function () {
            _this.handleFormData();
            if (!_this._validForm()) {
                return;
            }
            var data = _this.voucherService.taodulieuXemTruocChungTu(_this.frmData);
            data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].cauhinhxemmau.chungtu;
            _this.vPreviewInvService.xemMau(data);
        }, 300);
    };
    VoucherComponent.prototype.view = function () {
        var ids = [];
        ids.push(this.frmData.id);
        var data = this.voucherService.taodulieuXemMau(ids);
        data['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].cauhinhxemmau.chungtu;
        this.vPreviewInvService.xemMau(data);
    };
    VoucherComponent.prototype.renderDataEmail = function ($event) {
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
            this.frmData.taxpayers_email = emailToString.replace(/,/g, ';');
        }
        else {
            this.frmData.taxpayers_email = null;
        }
    };
    VoucherComponent.prototype.keyDown = function (e) {
        if (e.event.key === 'Delete') {
            e.event.srcElement.value = null;
        }
    };
    VoucherComponent.prototype.onChangeAutoValue = function () {
        this.tinhgiatri();
    };
    ;
    /* Tạo mới */
    VoucherComponent.prototype.handleAddNew = function () {
        var _this = this;
        if (this.isExportInvoice) {
            this.addNew();
        }
        else {
            if (!this.checkDataFormChange(this.valueChange, this.frmData)) {
                this.confirmService.confirm()
                    .subscribe(function (value) {
                    switch (value) {
                        case 'yes':
                            _this.subData(_core_index__WEBPACK_IMPORTED_MODULE_7__["sEnum"].statusInv.GhiTam, _this.frmData).then(function (res) {
                                if (res) {
                                    _this.addNew();
                                }
                                else {
                                    return;
                                }
                            });
                            break;
                        case 'no':
                            _this.addNew();
                            break;
                        case 'cancel':
                            _this.addNew();
                            break;
                        default:
                            break;
                    }
                });
            }
            else {
                this.addNew();
            }
        }
    };
    /* Refresh trường mở rộng */
    VoucherComponent.prototype.refreshLicenseOprion = function () {
        var _this = this;
        this.customForms.forEach(function (item) {
            if (item.dataField) {
                if (item.editorType == "dxNumberBox") {
                    _this.customerTempt[item.dataField] = null;
                }
                else {
                    _this.customerTempt[item.dataField] = "";
                }
            }
        });
    };
    /* Tạo mới */
    VoucherComponent.prototype.addNew = function () {
        var _this = this;
        var inv = Object.assign({}, this.frmData);
        this.frmData = new _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_5__["VoucherModel"](1);
        this.frmData.template_id = inv.template_id;
        this.frmData.license_series = inv.license_series;
        this.frmData.template_code = inv.template_code;
        this.frmData.license_date = inv.license_date;
        this.frmData.province_name = inv.province_name;
        this.refreshLicenseOprion();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_7__["VChanggeMoneyService"].getFormatterColumnInv(JSON.parse(inv.decimal_places_json));
        this.emails = [];
        this.DaXuat = false;
        this.removeReadonlyAllForm();
        setTimeout(function () {
            _this.setDataSessionStorage(_this.frmData);
            _this.incomeConfirmationComponent.newLicenseConfirm_lct();
        });
    };
    VoucherComponent.prototype.totalTaxableChange = function (e) {
        if (this.inforFields('tien-thue-da-tra-nnt').is_show)
            this.frmData.total_taxable_income_paid = e.value;
        else
            this.frmData.total_taxable_income_paid = null;
        this.tinhgiatri();
    };
    VoucherComponent.prototype.inforFields = function (field_name) {
        if (this.fields && this.fields.length > 0) {
            var ojb = this.fields.filter(function (p) { return p.code == field_name; });
            var baoHiem = this.fields.filter(function (p) { return p.code == 'tien-dong-bao-hiem-nnt'; });
            if (baoHiem[0].is_show) {
                this.currentIndex = 3;
            }
            else {
                this.currentIndex = 2;
            }
            var calculation = true;
            var arrayCalculation = this.fields.filter(function (item) { return item.code == "tien-thue-da-khau-tru-nnt" || item.code == "tien-thue-da-tra-nnt" || item.code == "tien-duoc-nhan-nnt"; }).filter(function (item) { return item.is_show == true; });
            if (arrayCalculation.length < 3) {
                calculation = false;
            }
            else {
                calculation = true;
            }
            var array = this.fields.filter(function (item) { return item.code == 'tien-dong-bao-hiem-nnt' || item.code == 'tien-chiu-thue-nnt' || item.code == "tien-tinh-thue-nnt" || item.code == "tien-thue-da-khau-tru-nnt" || item.code == "tien-thue-da-tra-nnt" || item.code == "tien-duoc-nhan-nnt"; });
            this.listFieldsShow = array.filter(function (item) { return item.is_show == true; });
            var index = this.listFieldsShow.findIndex(function (item) { return item.code == field_name; });
            if (ojb.length > 0) {
                if (ojb[0].is_show) {
                    return { is_show: true, index: index, calculation: calculation };
                }
                else {
                    return { is_show: false };
                }
            }
            else {
                return { is_show: false };
            }
        }
        else
            return { is_show: false };
    };
    VoucherComponent.prototype.onChangeCurrency = function (e) {
        if (e) {
            this.configs.system_parameter["is_voucher_currency"] = e.value;
            if (!e.value) {
                this.frmData['is_voucher_currency'] = false;
                this.frmData.currency_code = '';
            }
            else {
                this.frmData['is_voucher_currency'] = true;
            }
        }
    };
    VoucherComponent.prototype.setCurrencyVoucher = function () {
        var _this = this;
        if (this.configs.system_parameter.voucher_currency != this.frmData.currency_code) {
            this.configs.system_parameter["voucher_currency"] = this.frmData.currency_code;
            var id = this.configs.id.system_parameter;
            var data = {
                config: {
                    value: JSON.stringify(this.configs.system_parameter),
                    is_no_add_log: true
                }
            };
            this.voucherService.updateConfig(id, data).subscribe(function (res) {
                if (res.status == 'success') {
                    _this.configsService.getAll().subscribe(function (res) {
                        if (res.data && res.data.configs)
                            _this.authService.setConfigs(res.data.configs);
                    });
                }
            });
        }
    };
    VoucherComponent.prototype.updateOddCurrenVoucher = function () {
        var _this = this;
        var id = this.configs.id.system_parameter;
        var data = {
            config: {
                value: JSON.stringify(this.oldConfigs),
                is_no_add_log: true
            }
        };
        this.voucherService.updateConfig(id, data).subscribe(function (res) {
            if (res.status == 'success') {
                _this.configsService.getAll().subscribe(function (res) {
                    if (res.data && res.data.configs)
                        _this.authService.setConfigs(res.data.configs);
                });
            }
        });
    };
    VoucherComponent.prototype.selectTab = function (e) {
        var _this = this;
        var tab = e.itemData.code;
        switch (tab) {
            case 'CHUNG_TU':
                this.connectWebsocket();
                if (!this.incomeConfirmationComponent.checkDataFormChange_lct()) {
                    var confirm_1 = this.confirmService.confirm('Có một số thông tin thay đổi chưa được lưu lại, bạn có muốn chuyển tab?')
                        .subscribe(function (value) {
                        switch (value) {
                            case 'yes':
                                // this.eSubmit('GHI_TAM')
                                _this.incomeConfirmationComponent.setDataSessionStorage_lct();
                                _this.isVoucher = true;
                                _this.isIncomeConfirmation = false;
                                break;
                            case 'no':
                                _this.incomeConfirmationComponent.setFrmdataStorage_lct();
                                _this.incomeConfirmationComponent.setDataSessionStorage_lct();
                                _this.isVoucher = true;
                                _this.isIncomeConfirmation = false;
                                break;
                            case 'cancel':
                                // this.addNew();
                                _this.selectedIndex = 1;
                                break;
                            default:
                                break;
                        }
                    }, function (err) { }, function () {
                        confirm_1.unsubscribe();
                    });
                }
                else {
                    this.isVoucher = true;
                    this.isIncomeConfirmation = false;
                }
                break;
            case 'THU_XN':
                if (!this.checkDataFormChange(this.valueChange, this.frmData) && !this.DaXuat) {
                    var confirm_2 = this.confirmService.confirm('Có một số thông tin thay đổi chưa được lưu lại, bạn có muốn chuyển tab?')
                        .subscribe(function (value) {
                        switch (value) {
                            case 'yes':
                                // this.eSubmit('GHI_TAM')
                                _this.setDataSessionStorage(_this.frmData);
                                _this.isVoucher = false;
                                _this.isIncomeConfirmation = true;
                                break;
                            case 'no':
                                _this.frmData = JSON.parse(_this.valueChange);
                                _this.setDataSessionStorage(_this.frmData);
                                _this.isVoucher = false;
                                _this.isIncomeConfirmation = true;
                                _this.changeValueTempt();
                                break;
                            case 'cancel':
                                // this.addNew();
                                _this.selectedIndex = 0;
                                break;
                            default:
                                break;
                        }
                    }, function (err) { }, function () {
                        confirm_2.unsubscribe();
                    });
                }
                else {
                    this.setDataSessionStorage(this.frmData);
                    this.isVoucher = false;
                    this.isIncomeConfirmation = true;
                }
                break;
            default:
                break;
        }
    };
    VoucherComponent.prototype.dong = function () {
        this.router.navigate(["/system/voucher-tax"]);
    };
    VoucherComponent.prototype.changeTemplateInvoice = function (strDate) {
        var _this = this;
        var year = "";
        if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(strDate) != "")
            year = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(strDate).substring(4, 2);
        else {
            var invoiceDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('YYYY-MM-DD HH:mm:ss');
            year = _core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(invoiceDate).substring(4, 2);
        }
        var templates = this.select.templatesTT78;
        this.select.templatesTT78 = [];
        if (templates && templates.length > 0) {
            templates.forEach(function (item) {
                if (_core_index__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(item.name) != "")
                    item.name = item.name.replace(item.name.substring(15, 13), year);
                _this.select.templatesTT78.push(item);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_income_confirmation_income_confirmation_component__WEBPACK_IMPORTED_MODULE_17__["IncomeConfirmationComponent"]),
        __metadata("design:type", _income_confirmation_income_confirmation_component__WEBPACK_IMPORTED_MODULE_17__["IncomeConfirmationComponent"])
    ], VoucherComponent.prototype, "incomeConfirmationComponent", void 0);
    VoucherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voucher',
            template: __webpack_require__(/*! ./voucher.component.html */ "./src/app/modules/vouchers/components/voucher/voucher.component.html"),
            styles: [__webpack_require__(/*! ./voucher.component.scss */ "./src/app/modules/vouchers/components/voucher/voucher.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _modules_vouchers_shared__WEBPACK_IMPORTED_MODULE_5__["VoucherService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
            _modules_configs_shared__WEBPACK_IMPORTED_MODULE_15__["ConfigsService"],
            _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_19__["MyBsModalService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_20__["ViewInvoiceService"]])
    ], VoucherComponent);
    return VoucherComponent;
}());



/***/ }),

/***/ "./src/app/modules/vouchers/vouchers-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/vouchers/vouchers-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VouchersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VouchersRoutingModule", function() { return VouchersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_vouchers_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vouchers/components/index/index.component */ "./src/app/modules/vouchers/components/index/index.component.ts");
/* harmony import */ var _modules_vouchers_components_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/vouchers/components/voucher/voucher.component */ "./src/app/modules/vouchers/components/voucher/voucher.component.ts");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ "./src/app/modules/vouchers/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _modules_vouchers_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    {
        path: 'create',
        component: _modules_vouchers_components_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_3__["VoucherComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__["VatDeactivateGuard"]],
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_5__["VoucherResolver"] },
        data: { brec: 'create_voucher' }
    },
    {
        path: 'edit',
        component: _modules_vouchers_components_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_3__["VoucherComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__["VatDeactivateGuard"]],
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_5__["ShowVoucherResolver"] },
        data: { brec: 'voucher_details' }
    },
    {
        path: ':voucherId',
        component: _modules_vouchers_components_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_3__["VoucherComponent"],
        canDeactivate: [_modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__["VatDeactivateGuard"]],
        resolve: { init: _shared__WEBPACK_IMPORTED_MODULE_5__["ShowVoucherResolver"] },
        data: { brec: 'voucher_details' }
    },
];
var VouchersRoutingModule = /** @class */ (function () {
    function VouchersRoutingModule() {
    }
    VouchersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VouchersRoutingModule);
    return VouchersRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/vouchers/vouchers.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/vouchers/vouchers.module.ts ***!
  \*****************************************************/
/*! exports provided: VouchersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VouchersModule", function() { return VouchersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _vouchers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vouchers-routing.module */ "./src/app/modules/vouchers/vouchers-routing.module.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/vouchers/components/index/index.component.ts");
/* harmony import */ var _components_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/voucher/voucher.component */ "./src/app/modules/vouchers/components/voucher/voucher.component.ts");
/* harmony import */ var _components_import_voucher_from_excel_import_voucher_from_excel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/import-voucher-from-excel/import-voucher-from-excel.component */ "./src/app/modules/vouchers/components/import-voucher-from-excel/import-voucher-from-excel.component.ts");
/* harmony import */ var _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/send-mail/send-mail.component */ "./src/app/modules/vouchers/components/send-mail/send-mail.component.ts");
/* harmony import */ var _components_send_vouchers_send_vouchers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/send-vouchers/send-vouchers.component */ "./src/app/modules/vouchers/components/send-vouchers/send-vouchers.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared */ "./src/app/modules/vouchers/shared/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/vat/deactivate/vat-deactivate.guard */ "./src/app/modules/vat/deactivate/vat-deactivate.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/service/confirm.service */ "./src/app/shared/service/confirm.service.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/view-invoice/view-invoice.component */ "./src/app/modules/vouchers/components/view-invoice/view-invoice.component.ts");
/* harmony import */ var _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sign-many/sign-many.component */ "./src/app/modules/vouchers/components/sign-many/sign-many.component.ts");
/* harmony import */ var _components_income_confirmation_income_confirmation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/income-confirmation/income-confirmation.component */ "./src/app/modules/vouchers/components/income-confirmation/income-confirmation.component.ts");
/* harmony import */ var _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/components/preview-invoice/preview-invoice.component */ "./src/app/shared/components/preview-invoice/preview-invoice.component.ts");
/* harmony import */ var _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @core/library/invoice/my-bsmodel.service */ "./src/app/core/library/invoice/my-bsmodel.service.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var VouchersModule = /** @class */ (function () {
    function VouchersModule() {
    }
    VouchersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _vouchers_routing_module__WEBPACK_IMPORTED_MODULE_3__["VouchersRoutingModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _core_index__WEBPACK_IMPORTED_MODULE_2__["devextremeModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_10__["vTranslateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxPopoverModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_13__["VatSharedModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_13__["SomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxFormModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                _components_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_5__["VoucherComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_20__["SignManyComponent"],
                _components_import_voucher_from_excel_import_voucher_from_excel_component__WEBPACK_IMPORTED_MODULE_6__["ImportVoucherFromExcelComponent"],
                _components_send_mail_send_mail_component__WEBPACK_IMPORTED_MODULE_7__["SendMailComponent"],
                _components_send_vouchers_send_vouchers_component__WEBPACK_IMPORTED_MODULE_8__["SendVouchersComponent"],
                _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__["ViewVoucherComponent"],
                _components_income_confirmation_income_confirmation_component__WEBPACK_IMPORTED_MODULE_21__["IncomeConfirmationComponent"],
            ],
            entryComponents: [
                _shared_index__WEBPACK_IMPORTED_MODULE_13__["ViewInvoiceMultipageComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_13__["SignatureOffComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_13__["SendListVoucherComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_13__["LogProcessVoucherComponent"],
                _components_import_voucher_from_excel_import_voucher_from_excel_component__WEBPACK_IMPORTED_MODULE_6__["ImportVoucherFromExcelComponent"],
                _components_view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_19__["ViewVoucherComponent"],
                _components_sign_many_sign_many_component__WEBPACK_IMPORTED_MODULE_20__["SignManyComponent"],
                _shared_components_preview_invoice_preview_invoice_component__WEBPACK_IMPORTED_MODULE_22__["PreviewInvoiceComponent"]
            ],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_9__["VoucherResolver"],
                _shared__WEBPACK_IMPORTED_MODULE_9__["ShowVoucherResolver"],
                _modules_vat_deactivate_vat_deactivate_guard__WEBPACK_IMPORTED_MODULE_14__["VatDeactivateGuard"],
                _shared_service_confirm_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmService"],
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_18__["VatService"],
                _core_library_invoice_my_bsmodel_service__WEBPACK_IMPORTED_MODULE_23__["MyBsModalService"],
                _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_24__["ViewInvoiceService"]
            ]
        })
    ], VouchersModule);
    return VouchersModule;
}());



/***/ })

}]);
//# sourceMappingURL=vouchers-vouchers-module.js.map