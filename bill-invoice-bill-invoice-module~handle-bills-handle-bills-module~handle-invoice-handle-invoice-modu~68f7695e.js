(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bill-invoice-bill-invoice-module~handle-bills-handle-bills-module~handle-invoice-handle-invoice-modu~68f7695e"],{

/***/ "./src/app/core/library/invoice/invoices.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/library/invoice/invoices.service.ts ***!
  \**********************************************************/
/*! exports provided: InvoicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesService", function() { return InvoicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/observable/forkJoin.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvoicesService = /** @class */ (function () {
    function InvoicesService(apiService, authService) {
        this.apiService = apiService;
        this.authService = authService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format("YYYY-MM-DD");
    }
    InvoicesService.prototype.getAll = function (loaiHoaDon, params) {
        var includes = 'includes[]=template&options[sum_payment_process]=1'; //&fields[]=id&fields[]=invoice_number&fields[]=template.id&fields[]=invoice_date&fields[]=buyer_tax_code&fields[]=status&fields[]=buyer_name&fields[]=customer_name&fields[]=send_email_status
        var filter = "&filter_groups[0][filters][-1][key]=adjustment_type\n    &filter_groups[0][filters][-1][value][0]=1\n    &filter_groups[0][filters][-1][value][1]=3\n    &filter_groups[0][filters][-1][value][2]=4\n    &filter_groups[0][filters][-1][value][2]=5\n    &filter_groups[0][filters][-1][operator]=in\n    &filter_groups[1][or]=true\n    &filter_groups[1][filters][0][key]=crm_id\n    &filter_groups[1][filters][0][value]=null\n    &filter_groups[1][filters][0][operator]=eq\n    &filter_groups[1][filters][1][key]=status\n    &filter_groups[1][filters][1][value]=DA_XUAT\n    &filter_groups[1][filters][1][operator]=eq\n    &filter_groups[2][filters][0][key]=template.invoice_type\n    &filter_groups[2][filters][0][value]=" + loaiHoaDon + "\n    &filter_groups[2][filters][0][operator]=eq";
        if (params) {
            filter += '&' + params;
        }
        var sort = '&sort[0][key]=status_order&sort[0][direction]=ASC'; //&sort[1][key]=invoice_number&sort[1][direction]=DESC
        return this.apiService.getDataTable("/invoices", includes + filter, sort);
    };
    InvoicesService.prototype.show = function (id) {
        return this.apiService.get("/invoices/" + id);
    };
    InvoicesService.prototype.getDMIndex = function () {
        return this.apiService.get("/get-lists-by-listtype-code/DM_LOAI_TIEN,DM_HINH_THUC_THANH_TOAN,DM_NHOM_KHACH_HANG,DM_DON_VI_TINH,DM_TY_LE_VAT,DM_DINH_KHOAN");
    };
    InvoicesService.prototype.showToSendInvoice = function (id) {
        return this.apiService.get("/invoices/" + id + '?includes[]=template');
    };
    InvoicesService.prototype.sendMail = function (data) {
        return this.apiService.post('/invoices-send-mail', { invoices: data });
    };
    InvoicesService.prototype.getInvoiceProccess = function (invoice_id) {
        return this.apiService.get("/invoice-process?includes[]=user&filter_groups[0][filters][0][key]=invoice_id&filter_groups[0][filters][0][value]=" + invoice_id + "&filter_groups[0][filters][0][operator]=eq&sort[0][key]=process_time&sort[0][direction]=DESC");
    };
    InvoicesService.prototype.delete = function (id) {
        return this.apiService.delete("/invoices/" + id);
    };
    InvoicesService.prototype.layFileMau = function (data) {
        return this.apiService.post("/invoices-export-template-product", { invoice: data });
    };
    InvoicesService.prototype.traLaiHoaDon = function (data) {
        return this.apiService.post("/invoices-crm-return", { invoice: data });
    };
    InvoicesService.prototype.ghiTam = function (data, invoice_number) {
        if (invoice_number === void 0) { invoice_number = false; }
        var url = invoice_number ? "/invoices?options[invoice_number]=1" : "/invoices";
        return this.apiService.post(url, { invoice: data });
    };
    InvoicesService.prototype.xuatChoKy = function (data) {
        if (data.id) {
            return this.apiService.put("/invoices/" + data.id + "?options[invoice_number]=1&options[sign_later]=1", { invoice: data });
        }
        return this.apiService.post("/invoices?options[invoice_number]=1&options[sign_later]=1", { invoice: data });
    };
    InvoicesService.prototype.getConfig = function () {
        return this.apiService.get("/configs");
    };
    InvoicesService.prototype.getFileTemmpImportInvoices = function () {
        return this.apiService.post("/invoices/export-template-invoice");
    };
    InvoicesService.prototype.searchMST = function (str) {
        return this.apiService.get("/customers?limit=10&page=1&filter_groups[0][filters][0][key]=tax_code&filter_groups[0][filters][0][value]=" + str + "&filter_groups[0][filters][0][operator]=ct");
    };
    InvoicesService.prototype.edit = function (id, data, invoice_number) {
        if (invoice_number === void 0) { invoice_number = false; }
        var url = invoice_number ? "/invoices/" + id + "?options[invoice_number]=1" : "/invoices/" + id;
        return this.apiService.put(url, { invoice: data });
    };
    InvoicesService.prototype.xuatHoaDon = function (data) {
        return this.apiService.post("/invoices-export", { invoice: data });
    };
    InvoicesService.prototype.view = function (id) {
        return this.apiService.post("/invoices-view", { invoice: { ids: [id] } });
    };
    InvoicesService.prototype.inChuyenDoi = function (id) {
        return this.apiService.post("/invoices-conversion", { invoice: { ids: [id] } });
    };
    InvoicesService.prototype.giuSo = function (data) {
        return this.apiService.post("/invoices-keep-number", { invoice: data });
    };
    InvoicesService.prototype.getTemplate = function () {
        return this.apiService.get("/invoice-releases?includes[]=template&filter_groups[0][filters][0][key]=release_status&filter_groups[0][filters][0][value]=DA_TB_THUE&filter_groups[0][filters][0][operator]=eq&filter_groups[0][filters][1][key]=start_using_date&filter_groups[0][filters][1][value]=" + this.currentDate + "&filter_groups[0][filters][1][operator]=lte"); //&filter_groups[0][filters][2][key]=number_exists&filter_groups[0][filters][2][value]=1&filter_groups[0][filters][2][operator]=eq
    };
    InvoicesService.prototype.preview = function (data) {
        return this.apiService.post("/invoices-preview", {
            template: {
                id: data.template_id
            },
            invoices: [
                data
            ]
        });
    };
    InvoicesService.prototype.layCacHoaDonKySoHangLoat = function (ids) {
        var param = "";
        ids.forEach(function (id, index) {
            param += "&sort[0][key]=invoice_number&sort[0][direction]=ASC&filter_groups[0][filters][" + index + "][key]=id&filter_groups[0][filters][" + index + "][value]=" + id + "&filter_groups[0][filters][" + index + "][operator]=eq";
        });
        return Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.apiService.get("/invoices?includes[]=invoice_files&includes[]=invoice_products&includes[]=template&filter_groups[0][or]=true" + param),
            this.apiService.get("/configs")
        ]);
    };
    InvoicesService.prototype.getInvoiceResolver = function (loaiHoaDon) {
        return Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.apiService.get("/invoice-releases?includes[]=template&filter_groups[0][filters][0][key]=release_status&filter_groups[0][filters][0][value][0]=DA_TB_THUE&filter_groups[0][filters][0][value][1]=DA_HUY_SO&filter_groups[0][filters][0][operator]=in&filter_groups[0][filters][2][key]=start_using_date&filter_groups[0][filters][2][value]=" + this.currentDate + "&filter_groups[0][filters][2][operator]=lte&filter_groups[1][filters][1][key]=template.invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq"),
            this.apiService.get("/get-lists-by-listtype-code/DM_NHOM_KHACH_HANG,DM_LOAI_TIEN,DM_HINH_THUC_THANH_TOAN,DM_DON_VI_TINH,DM_TY_LE_VAT,DM_DINH_KHOAN,DM_NOI_XUAT_HOA_DON"),
            // this.apiService.get("/products?limit=10&page=1&filter_groups[0][filters][0][key]=status&filter_groups[0][filters][0][value]=HOAT_DONG&filter_groups[0][filters][0][operator]=eq"),
            this.apiService.get("/products?filter_groups[0][filters][0][key]=status&filter_groups[0][filters][0][value]=HOAT_DONG&filter_groups[0][filters][0][operator]=eq"),
            this.apiService.get("/configs"),
        ]);
    };
    InvoicesService.prototype.getImportInvoice = function (loaiHoaDon) {
        return Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.apiService.get("/invoice-releases?includes[]=template&filter_groups[0][filters][0][key]=release_status&filter_groups[0][filters][0][value][0]=DA_TB_THUE&filter_groups[0][filters][0][value][1]=DA_HUY_SO&filter_groups[0][filters][0][operator]=in&filter_groups[0][filters][2][key]=start_using_date&filter_groups[0][filters][2][value]=" + this.currentDate + "&filter_groups[0][filters][2][operator]=lte&filter_groups[1][filters][1][key]=template.invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq"),
            this.apiService.get("/products?filter_groups[0][filters][0][key]=status&filter_groups[0][filters][0][value]=HOAT_DONG&filter_groups[0][filters][0][operator]=eq"),
        ]);
    };
    InvoicesService.prototype.getEditImportInvoice = function (ids) {
        var param = "";
        ids.forEach(function (id, index) {
            param += "&filter_groups[0][filters][" + index + "][key]=id&filter_groups[0][filters][" + index + "][value]=" + id + "&filter_groups[0][filters][" + index + "][operator]=eq";
        });
        return Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.apiService.get("/invoice-releases?includes[]=template&filter_groups[0][filters][0][key]=release_status&filter_groups[0][filters][0][value]=DA_TB_THUE&filter_groups[0][filters][0][operator]=eq&filter_groups[0][filters][1][key]=start_using_date&filter_groups[0][filters][1][value]=" + this.currentDate + "&filter_groups[0][filters][1][operator]=lte"),
            this.apiService.get("/products?filter_groups[0][filters][0][key]=status&filter_groups[0][filters][0][value]=HOAT_DONG&filter_groups[0][filters][0][operator]=eq"),
            this.apiService.get("/invoices?includes[]=invoice_files&includes[]=invoice_products&filter_groups[0][or]=true" + param),
        ]);
    };
    InvoicesService.prototype.showInvoiceResolver = function (id, loaiHoaDon) {
        return Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.apiService.get("/invoice-releases?includes[]=template&filter_groups[0][filters][0][key]=release_status&filter_groups[0][filters][0][value][0]=DA_TB_THUE&filter_groups[0][filters][0][value][1]=DA_HUY_SO&filter_groups[0][filters][0][operator]=in&filter_groups[0][filters][2][key]=start_using_date&filter_groups[0][filters][2][value]=" + this.currentDate + "&filter_groups[0][filters][2][operator]=lte&filter_groups[1][filters][1][key]=template.invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq"),
            this.apiService.get("/get-lists-by-listtype-code/DM_NHOM_KHACH_HANG,DM_LOAI_TIEN,DM_HINH_THUC_THANH_TOAN,DM_DON_VI_TINH,DM_TY_LE_VAT,DM_DINH_KHOAN,DM_NOI_XUAT_HOA_DON"),
            this.apiService.get("/products?filter_groups[0][filters][0][key]=status&filter_groups[0][filters][0][value]=HOAT_DONG&filter_groups[0][filters][0][operator]=eq"),
            this.apiService.get("/configs"),
            this.apiService.get("/invoices/" + id + '?includes[]=invoice_files&includes[]=invoice_products')
        ]);
    };
    InvoicesService.prototype.showInvoiceAdjustResolver = function (id, edit, loaiHoaDon) {
        var arr = [
            this.apiService.get("/invoice-releases?includes[]=template&filter_groups[0][filters][0][key]=release_status&filter_groups[0][filters][0][value][0]=DA_TB_THUE&filter_groups[0][filters][0][value][1]=DA_HUY_SO&filter_groups[0][filters][0][operator]=in&filter_groups[0][filters][2][key]=start_using_date&filter_groups[0][filters][2][value]=" + this.currentDate + "&filter_groups[0][filters][2][operator]=lte&filter_groups[1][filters][1][key]=template.invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq"),
            this.apiService.get("/get-lists-by-listtype-code/DM_NHOM_KHACH_HANG,DM_LOAI_TIEN,DM_HINH_THUC_THANH_TOAN,DM_DON_VI_TINH,DM_TY_LE_VAT,DM_DINH_KHOAN,DM_NOI_XUAT_HOA_DON"),
            // this.apiService.get("/products?filter_groups[0][filters][0][key]=status&filter_groups[0][filters][0][value]=HOAT_DONG&filter_groups[0][filters][0][operator]=eq"),
            this.apiService.get("/configs"),
            this.apiService.get("/invoices/" + id + '?includes[]=invoice_products&includes[]=origin&includes[]=origin.invoice_products')
        ];
        return Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(arr);
    };
    InvoicesService.prototype.showInvoiceReplaceResolver = function (id, edit, loaiHoaDon) {
        var arr = [
            this.apiService.get("/invoice-releases?includes[]=template&filter_groups[0][filters][0][key]=release_status&filter_groups[0][filters][0][value][0]=DA_TB_THUE&filter_groups[0][filters][0][value][1]=DA_HUY_SO&filter_groups[0][filters][0][operator]=in&filter_groups[0][filters][2][key]=start_using_date&filter_groups[0][filters][2][value]=" + this.currentDate + "&filter_groups[0][filters][2][operator]=lte&filter_groups[1][filters][1][key]=template.invoice_type&filter_groups[1][filters][1][value]=" + loaiHoaDon + "&filter_groups[1][filters][1][operator]=eq"),
            this.apiService.get("/get-lists-by-listtype-code/DM_NHOM_KHACH_HANG,DM_LOAI_TIEN,DM_HINH_THUC_THANH_TOAN,DM_DON_VI_TINH,DM_TY_LE_VAT,DM_DINH_KHOAN,DM_NOI_XUAT_HOA_DON"),
            this.apiService.get("/products?filter_groups[0][filters][0][key]=status&filter_groups[0][filters][0][value]=HOAT_DONG&filter_groups[0][filters][0][operator]=eq"),
            this.apiService.get("/configs"),
            this.apiService.get("/invoices/" + id + '?includes[]=invoice_products&includes[]=origin&includes[]=origin.invoice_products')
        ];
        return Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(arr);
    };
    InvoicesService.prototype.getInvoicesHaveNumberOfVouchers = function (numberOfVouchers) {
        var param = "fields[]=id&fields[]=number_of_vouchers&filter_groups[0][or]=true";
        numberOfVouchers.forEach(function (numberOfVoucher, index) { param += "&filter_groups[0][filters][" + index + "][key]=number_of_vouchers&filter_groups[0][filters][" + index + "][value]=" + numberOfVoucher + "&filter_groups[0][filters][" + index + "][operator]=eq"; });
        if (numberOfVouchers.length >= 20) {
            return this.apiService.post("/invoices/get-all", param);
        }
        else {
            return this.apiService.get("/invoices?" + param);
        }
    };
    InvoicesService.prototype.exportToExcel = function (data) {
        return this.apiService.post("/invoices/export-invoice", data);
    };
    InvoicesService.prototype.previewInvoiceImport = function (data) {
        return this.apiService.post("/invoices-preview", data);
    };
    InvoicesService.prototype.inChuyenDoiInvoiceImport = function (ids) {
        return this.apiService.post("/invoices-conversion", { invoice: { ids: ids } });
    };
    InvoicesService.prototype.xemHoaDonInvoiceImport = function (ids) {
        return this.apiService.post("/invoices-view", { invoice: { ids: ids } });
    };
    InvoicesService.prototype.xuatMauBienBan = function (data) {
        return this.apiService.post("/invoices/export-report-cancel-invoice", { invoice: data });
    };
    InvoicesService.prototype.xuatMauBienBanDc = function (data) {
        return this.apiService.post("/invoices/export-report-false-invoice", { invoice: data });
    };
    InvoicesService.prototype.checkVatMauHoaDon = function (dataSource, is_multi_vat) {
        var _obj = dataSource.items().filter(function (p) { return p.vat != null; })[0];
        var temp = _obj ? _obj.vat : null;
        if (!is_multi_vat) {
            var check_same_vat_1 = true;
            dataSource.items().forEach(function (item) {
                if (item.vat != null) {
                    if (item.vat != temp && item.product_name) {
                        check_same_vat_1 = false;
                    }
                }
            });
            if (!check_same_vat_1) {
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Mẫu hóa đơn đăng ký 1 loại thuế suất. Vui lòng kiểm tra lại thuế suất của hàng hóa', 'error');
                return false;
            }
        }
        return true;
    };
    InvoicesService.checkTimeExportInv = function (system_parameter) {
        if (system_parameter && system_parameter.time_export_inv == true) {
            if (system_parameter.time_start && system_parameter.time_end) {
                var date = new Date();
                var monthIndex = date.getMonth();
                var day = date.getDate();
                var year = date.getFullYear();
                var minutes = date.getMinutes();
                var hours = date.getHours();
                var time_start_tempt = new Date(system_parameter.time_start);
                var time_start = new Date(year, monthIndex, day, time_start_tempt.getHours(), time_start_tempt.getMinutes());
                var time_end_tempt = new Date(system_parameter.time_end);
                var time_end = new Date(year, monthIndex, day, time_end_tempt.getHours(), time_end_tempt.getMinutes());
                if (date >= time_start && date <= time_end) {
                    return true;
                }
                else
                    return false;
            }
            else
                return true;
        }
        else
            return true;
    };
    InvoicesService.deleteProperties = function (objMain, objTemp, isMayTinhTien) {
        var keyOfMain = Object.keys(objMain);
        var keyOfTemp = Object.keys(objTemp);
        for (var i = 0; i <= keyOfTemp.length; i++) {
            var error = keyOfMain.includes(keyOfTemp[i]);
            if (!error) {
                delete objTemp[keyOfTemp[i]];
            }
        }
        if (isMayTinhTien)
            delete objTemp["total_amount_vat"];
    };
    InvoicesService.focusField = function (listDxForm, tagForm, field) {
        if (tagForm && field) {
            var form_current = listDxForm.find(function (form) { return form.tabIndex === tagForm; });
            if (form_current) {
                form_current.instance.getEditor(field).focus();
            }
        }
    };
    InvoicesService.getSearchParams = function (route) {
        var search = new Object;
        route.queryParams.subscribe(function (queryParams) {
            for (var key in queryParams) {
                if (queryParams.hasOwnProperty(key))
                    search[key] = queryParams[key];
            }
        });
        search["idTempt"] = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].makeid();
        return search;
    };
    InvoicesService.prototype.xemMau = function (data) {
        return this.apiService.post(data.path, data.body);
    };
    InvoicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], InvoicesService);
    return InvoicesService;
}());



/***/ })

}]);
//# sourceMappingURL=bill-invoice-bill-invoice-module~handle-bills-handle-bills-module~handle-invoice-handle-invoice-modu~68f7695e.js.map