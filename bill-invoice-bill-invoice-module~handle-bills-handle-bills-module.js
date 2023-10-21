(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bill-invoice-bill-invoice-module~handle-bills-handle-bills-module"],{

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

/***/ "./src/app/modules/bill-invoice/shared/bill.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/bill-invoice/shared/bill.model.ts ***!
  \***********************************************************/
/*! exports provided: BillModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillModel", function() { return BillModel; });
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");

var BillModel = /** @class */ (function () {
    function BillModel(adjustment_type) {
        this.adjustment_form = "";
        this.adjustment_object = "";
        this.id = null;
        this.bill_number = null;
        this.template_id = '';
        this.adjustment_type = null;
        this.buyer_name = '';
        this.buyer_tax_code = '';
        this.buyer_mobile = '';
        this.buyer_email = '';
        this.customer_code = '';
        this.customer_name = '';
        this.buyer_address = '';
        this.bill_date = '';
        this.note = '';
        this.auto_value = false;
        this.decimal_places_json = '';
        this.template_code = null;
        this.bill_series = '';
        this.destroy_reason = '';
        this.id_card = '';
        this.amount = null;
        this.amount_vat = null;
        this.amount_after_vat = null;
        this.amount_discount = null;
        this.cash = null;
        this.returns = null;
        this.total_payment = null;
        this.total_payment_word = '';
        this.status = '';
        this.currency_rate = null;
        this.currency_code = '';
        this.total_amount_vat = null;
        this.number_of_vouchers = '';
        this.bank_account = null; // Tài khoản ngân hàng
        this.payment_method_code = ""; //Mã hình thức thanh toán,
        this.payment_method_name = ""; //Tên hình thức thanh toán
        this.is_resolution_43 = false;
        this.sales_percentage = null;
        this.money_resolution_43 = null;
        this.destroy_date = '';
        // note_view_on_bill: string = '';
        this.origin_id = '';
        this.bill_products = [
            {
                id: _core_index__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
                product_name: '',
                product_code: "",
                order: null,
                price: null,
                quantity: null,
                vat: null,
                unit_code: "",
                unit_name: "",
                amount: null,
                amount_vat: null,
                amount_after_vat: null,
                commercial_discount: false,
                is_explain: false,
                is_promotion: false,
                amount_discount: null,
                discount: null,
                view_order: null
            }
        ];
        this.bill_options = [];
        this.tax_information = [];
        this.adjustment_type = adjustment_type;
    }
    BillModel.prototype.fillFormThayThe = function (data) {
        // this.id = data.id;
        // this.bill_number = data.bill_number;
        this.origin_id = data.id;
        this.template_id = data.template_id;
        this.adjustment_type = data.adjustment_type;
        this.buyer_name = data.buyer_name;
        this.buyer_tax_code = data.buyer_tax_code;
        this.buyer_mobile = data.buyer_mobile;
        this.customer_name = data.customer_name;
        this.customer_code = data.customer_code;
        this.buyer_email = data.buyer_email;
        this.buyer_address = data.buyer_address;
        // this.bill_date = data.bill_date;
        this.note = data.note;
        this.auto_value = data.auto_value;
        this.decimal_places_json = data.decimal_places_json;
        this.template_code = data.template_code;
        this.bill_series = data.bill_series;
        this.destroy_reason = data.destroy_reason;
        this.destroy_date = data.destroy_date;
        this.id_card = data.id_card;
        this.amount = data.amount;
        this.amount_vat = data.amount_vat;
        this.amount_after_vat = data.amount_after_vat;
        this.amount_discount = data.amount_discount;
        this.cash = data.cash;
        this.returns = data.returns;
        this.total_payment = data.total_payment;
        this.total_payment_word = data.total_payment_word;
        this.currency_rate = data.currency_rate;
        this.currency_code = data.currency_code;
        this.total_amount_vat = data.total_amount_vat;
        this.tax_information = data.bill_vats;
        this.bank_account = data.bank_account;
        this.payment_method_code = data.payment_method_code;
        this.payment_method_name = data.payment_method_name;
        this.sales_percentage = data.sales_percentage;
        this.is_resolution_43 = data.is_resolution_43;
        this.money_resolution_43 = data.money_resolution_43;
        this.bill_options = data.bill_options;
    };
    BillModel.prototype.fillFormDieuChinh = function (data) {
        // this.id = data.id;
        // this.bill_number = data.bill_number;
        this.origin_id = data.id;
        this.template_id = data.template_id;
        this.adjustment_type = data.adjustment_type;
        this.adjustment_object = data.adjustment_object;
        this.adjustment_form = data.adjustment_form;
        this.buyer_name = data.buyer_name;
        this.buyer_tax_code = data.buyer_tax_code;
        this.buyer_mobile = data.buyer_mobile;
        this.customer_name = data.customer_name;
        this.customer_code = data.customer_code;
        this.buyer_email = data.buyer_email;
        this.buyer_address = data.buyer_address;
        // this.bill_date = data.bill_date;
        this.note = data.note;
        this.auto_value = data.auto_value;
        this.decimal_places_json = data.decimal_places_json;
        this.template_code = data.template_code;
        this.bill_series = data.bill_series;
        this.destroy_reason = data.destroy_reason;
        this.destroy_date = data.destroy_date;
        this.id_card = data.id_card;
        this.amount = null;
        this.amount_vat = null;
        this.amount_after_vat = null;
        this.amount_discount = null;
        this.cash = null;
        this.returns = null;
        this.total_payment = null;
        this.total_payment_word = "";
        this.currency_rate = data.currency_rate;
        this.currency_code = data.currency_code;
        this.total_amount_vat = null;
        // this.status = data.status;
        this.tax_information = data.bill_vats;
        this.bank_account = data.bank_account;
        this.payment_method_code = data.payment_method_code;
        this.payment_method_name = data.payment_method_name;
        this.sales_percentage = data.sales_percentage;
        this.is_resolution_43 = data.is_resolution_43;
        this.money_resolution_43 = data.money_resolution_43;
        this.bill_options = data.bill_options;
    };
    BillModel.prototype.fillFormData = function (data) {
        this.id = data.id;
        this.origin_id = data.origin_id;
        this.bill_number = data.bill_number;
        this.template_id = data.template_id;
        this.adjustment_type = data.adjustment_type;
        this.buyer_name = data.buyer_name;
        this.buyer_tax_code = data.buyer_tax_code;
        this.buyer_mobile = data.buyer_mobile;
        this.customer_name = data.customer_name;
        this.customer_code = data.customer_code;
        this.buyer_email = data.buyer_email;
        this.buyer_address = data.buyer_address;
        this.bill_date = data.bill_date;
        this.note = data.note;
        this.auto_value = data.auto_value;
        this.decimal_places_json = data.decimal_places_json;
        this.template_code = data.template_code;
        this.bill_series = data.bill_series;
        this.destroy_reason = data.destroy_reason;
        this.destroy_date = data.destroy_date;
        this.id_card = data.id_card;
        this.amount = data.amount;
        this.amount_vat = data.amount_vat;
        this.amount_after_vat = data.amount_after_vat;
        this.amount_discount = data.amount_discount;
        this.cash = data.cash;
        this.returns = data.returns;
        this.total_payment = data.total_payment;
        this.total_payment_word = data.total_payment_word;
        this.currency_rate = data.currency_rate;
        this.currency_code = data.currency_code;
        this.total_amount_vat = data.total_amount_vat;
        this.status = data.status;
        this.tax_information = data.bill_vats;
        this.bank_account = data.bank_account;
        this.payment_method_code = data.payment_method_code;
        this.payment_method_name = data.payment_method_name;
        this.sales_percentage = data.sales_percentage;
        this.is_resolution_43 = data.is_resolution_43;
        this.money_resolution_43 = data.money_resolution_43;
        this.bill_options = data.bill_options;
        this.adjustment_form = data.adjustment_form;
        this.adjustment_object = data.adjustment_object;
        this.time_print_conversion = data.time_print_conversion;
    };
    BillModel.prototype.bill_products_data = function () {
        var arr = [];
        for (var i = 0; i < 5; i++) {
            arr.push({
                id: _core_index__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
                order: i + 1,
                product_name: '',
                product_code: "",
                price: null,
                quantity: null,
                vat: null,
                amount: null,
                amount_vat: null,
                amount_after_vat: null,
                unit_code: "",
                unit_name: "",
                commercial_discount: false,
                is_explain: false,
                is_promotion: false,
                amount_discount: null,
                discount: null
            });
        }
        return arr;
    };
    BillModel.prototype.setInvoice_products_data = function (data) {
        var arr = [];
        data.forEach(function (item) {
            arr.push({
                id: _core_index__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
                order: item.order,
                product_name: item.product_name,
                product_code: item.product_code,
                price: item.price,
                quantity: item.quantity,
                vat: item.vat,
                amount: item.amount,
                amount_vat: item.amount_vat,
                amount_after_vat: item.amount_after_vat,
                unit_code: item.unit_code,
                unit_name: item.unit_name,
                commercial_discount: item.commercial_discount,
                is_explain: item.is_explain,
                is_promotion: item.is_promotion,
                amount_discount: item.amount_discount,
                discount: item.discount
            });
            // index++;
        });
        arr = arr.sort(function (itemA, itemB) {
            return itemA.order - itemB.order;
        });
        var index = arr.length ? parseInt(arr.slice(-1)[0]["order"]) : 0;
        for (var i = 0; i < 5; i++) {
            arr.push({
                id: _core_index__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
                order: index + 1,
                product_name: '',
                product_code: "",
                price: null,
                quantity: null,
                vat: null,
                amount: null,
                amount_vat: null,
                amount_after_vat: null,
                unit_code: "",
                unit_name: "",
                commercial_discount: false,
                is_explain: false,
                is_promotion: false,
                amount_discount: null,
                discount: null
            });
            index++;
        }
        return arr;
    };
    BillModel.prototype.add_invoice_products_data = function (view_order, order) {
        return {
            id: _core_index__WEBPACK_IMPORTED_MODULE_0__["Helper"].makeid(),
            order: order,
            product_name: '',
            product_code: "",
            price: null,
            quantity: null,
            vat: null,
            amount: null,
            amount_vat: null,
            amount_after_vat: null,
            unit_code: "",
            unit_name: "",
            commercial_discount: false,
            is_explain: false,
            is_promotion: false,
            amount_discount: null,
            discount: null
        };
    };
    BillModel.prototype.tempImportRow = function (countRow) {
        var arr = [];
        for (var i = 0; i < countRow; i++) {
            arr.push({
                number_of_vouchers: "",
                commercial_discount: false,
                is_promotion: false /* Hàng khuyến mại */,
                is_explain: false /* Diễn giải */,
                adjustment_form: "" /* Phương thức điều chỉnh */,
                buyer_tax_code: "",
                total_amount_vat: null,
                total_payment: null,
                buyer_name: "",
                customer_name: "",
                buyer_address: "",
                buyer_mobile: "",
                buyer_email: "",
                payment_method_code: "",
                bank_account: "",
                customer_code: "",
                product_code: "",
                product_name: "",
                unit_code: "",
                number_code: "",
                unit_name: "",
                quantity: null,
                price: null,
                amount: null,
                vat: null,
                discount: null,
                amount_discount: null,
                amount_vat: null,
                amount_after_vat: null,
                id: null,
                order: i + 1,
                view_order: i + 1,
                dataType: "KHACH_HANG",
                statusData: "INVALID",
            });
        }
        return arr;
    };
    BillModel.prototype.addImportRow = function (order, view_order) {
        var arr = {
            number_of_vouchers: "",
            commercial_discount: false,
            is_promotion: false /* Hàng khuyến mại */,
            is_explain: false /* Diễn giải*/,
            adjustment_form: "" /* Phương thức điều chỉnh */,
            buyer_tax_code: "",
            total_amount_vat: null,
            total_payment: null,
            buyer_name: "",
            customer_name: "",
            buyer_address: "",
            buyer_mobile: "",
            buyer_email: "",
            payment_method_code: "",
            bank_account: "",
            customer_code: "",
            product_code: "",
            product_name: "",
            unit_code: "",
            number_code: "",
            unit_name: "",
            quantity: null,
            price: null,
            amount: null,
            vat: null,
            discount: null,
            amount_discount: null,
            amount_vat: null,
            amount_after_vat: null,
            id: null,
            order: order,
            view_order: view_order,
            dataType: "KHACH_HANG",
            statusData: "INVALID",
        };
        return arr;
    };
    return BillModel;
}());



/***/ })

}]);
//# sourceMappingURL=bill-invoice-bill-invoice-module~handle-bills-handle-bills-module.js.map