(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "./src/app/modules/customers/components/index/index.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/customers/components/index/index.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n  <div class=\"col-md-6\">\r\n          <div *ngIf=\"!isKhoiDoanhNghiep\" id=\"config-tabs\">\r\n              <dx-tabs [dataSource]=\"tabs\" [selectedIndex]=\"0\" (onItemClick)=\"selectTab($event)\">\r\n            \r\n              </dx-tabs>\r\n            </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n      <div class=\"pull-right button-panel\">\r\n          <dx-button id=\"add\" (click)=\"add()\" icon=\"assets\\img\\icons\\Them.png\" text=\"{{ 'CONTROLL.BUTTON.add' | translate }}\" type=\"default\"></dx-button>\r\n          <!-- <dx-button id=\"edit\" (click)=\"edit()\" icon=\"assets\\img\\icons\\Sua.png\" text=\"{{ 'CONTROLL.BUTTON.edit' | translate }}\" type=\"default\" \r\n            [disabled]=\"!(selectedRows.length == 1)\"></dx-button> -->\r\n          <!-- <dx-button id=\"delete\" (click)=\"delete()\" icon=\"assets\\img\\icons\\Xoa.png\" text=\"{{ 'CONTROLL.BUTTON.delete' | translate }}\" type=\"default\" \r\n            [disabled]=\"!selectedRows.length\"></dx-button> -->\r\n          <!-- <dx-button id=\"getfile\" (click)=\"getFileTemp()\" icon=\"assets\\img\\icons\\LayFileMau.png\" text=\"{{ 'CONTROLL.BUTTON.get_the_sample_file' | translate }}\" type=\"default\"></dx-button> -->\r\n          <!-- <a href=\"javascript:void(0)\" (click)=\"napDuLieuTuBangKe()\" class=\"support-link\"> -->\r\n            <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx\" (change)=\"onFileChanged($event)\" multiple=\"false\" style=\"display: none;\"/>\r\n            <!-- <img src=\"assets/img/icons/NapDuLieu.png\"><span>{{ 'CONTROLL.BUTTON.import_data' | translate }}</span>\r\n          </a> -->\r\n          <dx-menu\r\n          [dataSource]=\"extras\"\r\n          displayExpr=\"name\"\r\n          orientation=\"horizontal\"\r\n          submenuDirection=\"auto\"\r\n          (onItemClick)=\"itemExtrasClick($event)\"\r\n          cssClass='button-dropdown-extend'>\r\n        </dx-menu>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Khách hàng -->\r\n<div *ngIf=\"isCustomer\">\r\n<dx-data-grid \r\n  id=\"gridContainer\" \r\n  [dataSource]=\"dataSource\"\r\n  [(selectedRowKeys)]=\"selectedRows\"\r\n  [showRowLines]=\"true\"\r\n  [noDataText]=\"noDataText\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnMinWidth]=\"50\"\r\n  \r\n  [wordWrapEnabled]=\"true\">\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n  </dxo-selection>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxi-column dataField=\"code\" caption=\"{{ 'CONTROLL.LABEL.customer_code' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n   [width]=\"125\" [filterOperations]=\"['contains', '=']\" ></dxi-column>\r\n  <dxi-column dataField=\"name\" caption=\"{{ 'GRID.INVOICE.customer_name' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n   [filterOperations]=\"['contains', '=']\" sortOrder=\"asc\" ></dxi-column>\r\n  <dxi-column dataField=\"tax_code\" caption=\"{{ 'GRID.INVOICE.buyer_tax_code' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n   [width]=\"125\" [filterOperations]=\"['contains', '=']\" ></dxi-column>\r\n  <dxi-column dataField=\"surrogate_name\" caption=\"{{ 'GRID.CUSTOMER.surrogate_name' | translate }}\" alignment=\"left\" [width]=\"145\"\r\n    [filterOperations]=\"['contains', '=']\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <dxi-column dataField=\"contact_person_name\" caption=\"{{ 'CONTROLL.LABEL.buyer_name' | translate }}\" alignment=\"left\" [width]=\"145\"\r\n    [filterOperations]=\"['contains', '=']\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n    <dxi-column dataField=\"business_address\" caption=\"{{ 'CONTROLL.LABEL.address' | translate }}\" alignment=\"left\" [width]=\"145\"\r\n    [filterOperations]=\"['contains', '=']\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n  <dxi-column dataField=\"note\" caption=\"{{ 'CONTROLL.LABEL.note' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [width]=\"180\" [filterOperations]=\"['contains', '=']\" ></dxi-column>\r\n  <dxi-column dataField=\"status\" caption=\"{{ 'GRID.GENERAL.status' | translate }}\"  alignment=\"center\" [width]=\"130\" headerCellTemplate=\"titleHeaderTemplate\">\r\n    <dxo-lookup [dataSource]=\"statusFilter\" valueExpr=\"value\" displayExpr=\"text\"></dxo-lookup>\r\n  </dxi-column>\r\n  <dxi-column cellTemplate=\"actionIcon\"  minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" width=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\"  alignment=\"center\"></dxi-column>\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'actionIcon'\">\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"edit(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n    <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"delete(d.data)\" href=\"javascript:void(0)\">\r\n    </a>\r\n  </div>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\"  [filtering]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n  <dxo-pager \r\n      [showPageSizeSelector]=\"true\" \r\n      [allowedPageSizes]=\"[15, 50, 100]\"\r\n      [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\"\r\n      infoText=\"Trang {0} trong {1} trang của {2} dòng\">\r\n  </dxo-pager>\r\n</dx-data-grid>\r\n</div>\r\n<!-- End -->\r\n\r\n<!-- Học sinh sinh viên -->\r\n<div *ngIf=\"isStudent\">\r\n  <dx-data-grid \r\n    id=\"gridContainer\" \r\n    [dataSource]=\"dataSourceHSSV\"\r\n    [(selectedRowKeys)]=\"selectedRowsHSSV\"\r\n    [showRowLines]=\"true\"\r\n    [noDataText]=\"noDataTextHSSV\"\r\n    [allowColumnResizing]=\"true\"\r\n    [columnMinWidth]=\"50\"\r\n    [wordWrapEnabled]=\"true\">\r\n    <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n    <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n    </dxo-selection>\r\n    <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n    <!-- Mã HS-SV -->\r\n    <dxi-column dataField=\"code\" caption=\"{{ 'CONTROLL.LABEL.code_student' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n     [width]=\"125\" [filterOperations]=\"['contains', '=']\" ></dxi-column>\r\n     <!-- Tên HS-SV -->\r\n    <dxi-column dataField=\"name\" caption=\"{{ 'CONTROLL.LABEL.name_student' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n     [filterOperations]=\"['contains', '=']\" ></dxi-column>\r\n     <!-- Lớp -->\r\n    <dxi-column dataField=\"class_code\" caption=\"{{ 'CONTROLL.LABEL.class' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n     [width]=\"125\" [filterOperations]=\"['contains', '=']\" sortOrder=\"asc\"  >\r\n     <dxo-lookup [dataSource]=\"classCodes\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup>\r\n    </dxi-column>\r\n    <!-- Số thứ tự ẩn -->\r\n    <dxi-column dataField=\"order\" alignment=\"center\" [visible]=\"false\" sortOrder=\"asc\"></dxi-column>\r\n     <!-- Cha mẹ / Người giám hộ -->\r\n    <dxi-column dataField=\"guardians\" caption=\"{{ 'CONTROLL.LABEL.parent'| translate }} / {{ 'CONTROLL.LABEL.guardians'| translate }}\" alignment=\"left\" [width]=\"145\"\r\n      [filterOperations]=\"['contains', '=']\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n      <!-- Tỷ lệ miễn giảm -->\r\n    <dxi-column dataField=\"student_reduce_rate_code\" caption=\"{{ 'CONTROLL.LABEL.exemption_and_reduction_rates' | translate }}\" alignment=\"left\" [width]=\"145\"\r\n      [filterOperations]=\"['contains', '=']\" headerCellTemplate=\"titleHeaderTemplate\">\r\n      <dxo-lookup [dataSource]=\"student_reduce_rate_codes\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup>\r\n    </dxi-column>\r\n    <!-- Địa chỉ -->\r\n    <dxi-column dataField=\"address\" caption=\"{{ 'CONTROLL.LABEL.address' | translate }}\" alignment=\"left\" [width]=\"145\"\r\n      [filterOperations]=\"['contains', '=']\" headerCellTemplate=\"titleHeaderTemplate\"></dxi-column>\r\n    <!-- Ghi chú -->\r\n    <dxi-column dataField=\"note\" caption=\"{{ 'CONTROLL.LABEL.note' | translate }}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n      [width]=\"180\" [filterOperations]=\"['contains', '=']\" ></dxi-column>\r\n    <!-- Trạng thái -->\r\n    <dxi-column dataField=\"status\" caption=\"{{ 'GRID.GENERAL.status' | translate }}\"  alignment=\"center\" [width]=\"130\" headerCellTemplate=\"titleHeaderTemplate\">\r\n      <dxo-lookup [dataSource]=\"statusFilter\" valueExpr=\"value\" displayExpr=\"text\"></dxo-lookup>\r\n    </dxi-column>\r\n    <!-- Thêm, sửa, xóa -->\r\n    <dxi-column cellTemplate=\"actionIcon\"  minWidth=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\" width=\"{{_translate.GRID_WIDTH.hanh_dong_2}}\"  alignment=\"center\"></dxi-column>\r\n    <!-- Template -->\r\n    <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n      <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'actionIcon'\">\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.edit}}\" class=\"suaIcon actionIcon\" (click)=\"editHSSV(d.data)\" href=\"javascript:void(0)\">\r\n      </a>\r\n      <a title=\"{{_translate.CONTROLL.BUTTON.delete}}\" class=\"xoaIcon actionIcon\" (click)=\"deleteHSSV(d.data)\" href=\"javascript:void(0)\">\r\n      </a>\r\n    </div>\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\"  [filtering]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager \r\n        [showPageSizeSelector]=\"true\" \r\n        [allowedPageSizes]=\"[15, 50, 100]\"\r\n        [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\"\r\n        infoText=\"Trang {0} trong {1} trang của {2} dòng\">\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n  </div>\r\n<!-- End -->\r\n\r\n<!-- popup -->\r\n<dx-popup\r\nclass=\"popup\"\r\n[width]=\"400\"\r\n[height]=\"255\"\r\n[showTitle]=\"true\"\r\ntitle=\"{{ 'CONTROLL.BUTTON.import_data' | translate }}\"\r\n[dragEnabled]=\"false\"\r\n(onHiding)=\"onImportHiding($event)\"\r\n(onShowing)=\"onImportShowing($event)\"\r\n[(visible)]=\"showPopupImport\">\r\n<div *dxTemplate=\"let data of 'content'\">\r\n  <p style=\"margin-bottom: 10px\">Tên file:\r\n    <span>{{fileName}}</span>\r\n  </p>\r\n  <p style=\"margin-bottom: 10px\">Dung lượng:\r\n    <span>{{fileSize | number:'1.0-2'}}KB</span>\r\n  </p>\r\n  <div style=\"height: 30px;\">\r\n    <dx-progress-bar \r\n      [min]=\"0\" \r\n      [max]=\"100\" \r\n      [value]=\"valueProgress\"\r\n      [statusFormat]=\"format\"\r\n      [visible]=\"visibleProgressBar\">\r\n    </dx-progress-bar>\r\n  </div>\r\n  <p style=\"height: 25px;\">\r\n      <span>{{thongbao}}</span>\r\n    </p>\r\n    <p style=\"height: 25px;\">\r\n      <a href=\"javascript:void(0)\" (click)=\"layBanGhiLoi()\" *ngIf=\"visibleGetError\" style=\" color: red;\">* Lấy bản ghi lỗi</a>\r\n    </p>\r\n  <div class=\"pull-right\">\r\n    <dx-button (click)=\"thayTheToanBo()\" [disabled]=\"isDisable\" text=\"Thay thế toàn bộ\" type=\"default\"></dx-button>\r\n    <dx-button (click)=\"themTiep()\" [disabled]=\"isDisable\" text=\"Thêm tiếp\" type=\"default\"></dx-button>\r\n  </div>\r\n</div>\r\n</dx-popup>\r\n\r\n<dx-popup\r\nclass=\"popup\"\r\n[width]=\"400\"\r\n[height]=\"180\"\r\n[showTitle]=\"true\"\r\ntitle=\"Lấy file mẫu\"\r\n[dragEnabled]=\"false\"\r\n[(visible)]=\"showPopupGetFile\">\r\n<div *dxTemplate=\"let data of 'content'\">\r\n  <p style=\"margin-bottom: 40px\">Hãy lựa chọn hình thức lấy file mẫu?</p>\r\n  \r\n  <div class=\"pull-right\">\r\n    <dx-button (click)=\"fileCoDuLieu()\"  text=\"File có dữ liệu\" type=\"default\"></dx-button>\r\n    <dx-button (click)=\"fileTrang()\"  text=\"File trắng\" type=\"default\"></dx-button>\r\n  </div>\r\n</div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/customers/components/index/index.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/customers/components/index/index.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-import .dx-popup-content .dx-fileuploader{min-height:135px}.popup-import .dx-popup-content #import-btn{float:right;margin-top:45px}.support-link{padding:5px 15px 7px 15px;background-color:#337ab7;border-color:#2d6da3;color:#fff;text-decoration:none}.support-link.mgr-15{margin-right:15px}.support-link img{margin-right:10px;margin-top:-2px}#auto-input{margin-right:75px}#config-tabs{width:100%;border-bottom:1px solid #ddd}#config-tabs .dx-tabs{width:50%;border-bottom:0}::ng-deep #config-tabs .dx-tab{padding:3px}\n"

/***/ }),

/***/ "./src/app/modules/customers/components/index/index.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/customers/components/index/index.component.ts ***!
  \***********************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_customers_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/customers/shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/add-student/add-student.component */ "./src/app/shared/components/add-student/add-student.component.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @config/index */ "./src/app/config/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
/* harmony import */ var _shared_components_convert_class_convert_class_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components/convert-class/convert-class.component */ "./src/app/shared/components/convert-class/convert-class.component.ts");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
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
    function IndexComponent(productsService, authService, customersService, modalService, translate, listService) {
        var _this = this;
        this.productsService = productsService;
        this.authService = authService;
        this.customersService = customersService;
        this.modalService = modalService;
        this.translate = translate;
        this.listService = listService;
        this.dataSource = {};
        this.dataSourceHSSV = {};
        this.selectedRows = [];
        this.selectedRowsHSSV = [];
        this.noDataText = 'Chưa có khách hàng nào';
        this.tabs = [];
        this.showPopupImport = false;
        this.showPopupGetFile = false;
        this.valueProgress = 0;
        this.timeRemain = '';
        this.extras = [];
        this.header = [{
                code: 'NẠP DANH SÁCH KHÁCH HÀNG'
            }, {
                code: '* Ghi chú: - Cột chữ màu đỏ, đơn vị phải nhập nội dung.↵- Cột (3), đối với khách hàng là cá nhân đánh dấu \'X\' tương ứng↵- Cột (4), thể hiện Tên Tổ chức / Cá nhân↵- Cột (5), thể hiện địa chỉ đăng ký kinh doanh đối với Tổ chức hoặc địa chỉ viết hóa đơn đối với Cá nhân'
            }, {
                code: 'Mã khách hàng',
                tax_code: 'MST/MNS ',
                object_code: 'Khách hàng cá nhân ↵(Đánh dấu X)',
                name: 'Tên đơn vị, tổ chức / Tên cá nhân',
                business_address: 'Địa chỉ đăng ký kinh doanh ',
                transaction_address: 'Địa chỉ giao dịch',
                surrogate_name: 'Người đại diện pháp luật',
                surrogate_position: 'Chức vụ',
                // bank_account_number: 'Số tài khoản',
                bank_name: 'Ngân hàng',
                contact_person_name: 'Họ tên người mua hàng',
                contact_mobile: 'Điện thoại di động',
                email: 'Email',
                note: 'Ghi chú',
                error_message: 'Nội dung lỗi'
            }, {
                code: '(1)',
                tax_code: '(2)',
                object_code: '(3)',
                name: '(4)',
                business_address: '(5)',
                transaction_address: '(6)',
                surrogate_name: '(7)',
                surrogate_position: '(8)',
                bank_account_number: '(9)',
                bank_name: '(10)',
                contact_person_name: '(11)',
                contact_mobile: '(12)',
                email: '(13)',
                note: '(14)',
            }
        ];
        this.headerStudent = [{
                code: 'NẠP DANH SÁCH HỌC SINH - SINH VIÊN'
            }, {
                code: '* Ghi chú: - Cột chữ màu đỏ, đơn vị phải nhập nội dung.↵- Đối với cột Mã HS - SV: Nếu để trống thông tin này thì khi lưu dữ liệu phần mềm sẽ tự động tạo mã HS - SV để quản lý theo quy tắc: "Tên HS - SV không dấu +8 ký tự của ngày tháng năm↵sinh"; trường hợp mã đã có trên phần mềm thì sẽ tự sinh thêm ký tự từ A-Z ở sau ngày tháng năm sinh (Ví dụ học sinh họ tên Nguyễn Thu Hương sinh ngày 18/05/2008 thì phần mềm tự động sinh mã là:↵huong180508, học sinh khác cùng tên cùng ngày sinh thì mã là: huong180508a)↵- Cột "Tỷ lệ miễn giảm học phí": nếu để trống thì phần mềm sẽ lưu là "Không miễn giảm".  '
            }, {
                code: 'Mã HS - SV',
                name: 'Họ và Tên HS - SV',
                class_name: 'Tên lớp',
                address: 'Địa chỉ ',
                date_bith: 'Ngày tháng năm sinh',
                student_reduce_rate_code: 'Tỷ lệ miễn giảm học phí',
                guardians: 'Cha mẹ/ người giám hộ',
                mobile: 'Điện thoại di động',
                email: 'Email',
                note: 'Ghi chú',
                error_message: 'Nội dung lỗi'
            }, {
                code: '(1)',
                name: '(2)',
                class_name: '(3)',
                address: '(4)',
                date_bith: '(5)',
                student_reduce_rate_code: '(6)',
                guardians: '(7)',
                mobile: '(8)',
                email: '(9)',
                note: '(10)',
            }
        ];
        this.dataFail = [];
        this.stopImport = false;
        this.isDisable = false;
        this.visibleGetError = false;
        this.visibleProgressBar = false;
        this.thongbao = '';
        this.isStudent = true;
        this.isCustomer = true;
        this.isKhoiDoanhNghiep = true;
        this.extrasStudent = [];
        this.extrasCustomer = [];
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ': ' + percent + '%' + _this.timeRemain;
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.statusFilter = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_7__["VSelectBoxService"]._statusFilter(this._translate);
        this.tabs = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_7__["VSelectBoxService"]._tabCustomer(this._translate);
        this.user = this.authService.getCurrentUser();
        this.extrasStudent = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.extend,
                items: [
                    {
                        id: 'XOA',
                        name: this._translate.CONTROLL.BUTTON.delete,
                        icon: this._translate.ICONS.delete
                    },
                    {
                        id: 'CHUYEN_LOP',
                        name: this._translate.CONTROLL.BUTTON.change_class,
                        icon: this._translate.ICONS.download
                    },
                    {
                        id: 'LAY_FILE_MAU',
                        name: this._translate.CONTROLL.BUTTON.get_the_sample_file,
                        icon: this._translate.ICONS.download
                    }, {
                        id: 'NAP_DU_LIEU',
                        name: this._translate.CONTROLL.BUTTON.import_data,
                        icon: this._translate.ICONS.import_data
                    },
                ]
            }];
        this.extrasCustomer = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.extend,
                items: [
                    {
                        id: 'XOA',
                        name: this._translate.CONTROLL.BUTTON.delete,
                        icon: this._translate.ICONS.delete
                    },
                    {
                        id: 'LAY_FILE_MAU',
                        name: this._translate.CONTROLL.BUTTON.get_the_sample_file,
                        icon: this._translate.ICONS.download
                    }, {
                        id: 'NAP_DU_LIEU',
                        name: this._translate.CONTROLL.BUTTON.import_data,
                        icon: this._translate.ICONS.import_data
                    },
                ]
            }];
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.getAllListbyListtypeByCode();
        this.loadList();
        this.getListtypes();
        this.getConfigs();
        if (this.user.account.account_type == 'HS-SV') {
            this.isStudent = true;
            this.isCustomer = false;
            this.isKhoiDoanhNghiep = false;
            this.extras = this.extrasStudent;
            this.dataFail = this.dataFail.concat(this.headerStudent);
        }
        else {
            this.isStudent = false;
            this.isCustomer = true;
            this.isKhoiDoanhNghiep = true;
            this.extras = this.extrasCustomer;
            this.dataFail = this.dataFail.concat(this.header);
            this.role_branch = this.listService.getDataConfigLocalStorage();
        }
    };
    IndexComponent.prototype.loadList = function () {
        this.dataSource.store = this.customersService.getAll();
        this.dataSourceHSSV.store = this.customersService.getAllStudent();
    };
    IndexComponent.prototype.getConfigs = function () {
        var _this = this;
        this.customersService.getConfigs().subscribe(function (res) {
            res.data.configs.forEach(function (config) {
                if (config.name === 'maximum_object_import') {
                    _this.maximum_object_import = 100;
                }
            });
        });
    };
    IndexComponent.prototype.handleListRoleBranch = function (roleUser) {
        return __awaiter(this, void 0, void 0, function () {
            var arrList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listService.handleGetDMtoCustomer(roleUser)];
                    case 1:
                        arrList = _a.sent();
                        if (Array.isArray(arrList) && arrList.length) {
                            return [2 /*return*/, this.listService.handleCheckAll(arrList)];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    IndexComponent.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var customer, roleUser, _a, _b, initialState, initialState;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.isCustomer) return [3 /*break*/, 7];
                        this.listRoleBranchOrigin = [];
                        customer = new _modules_customers_shared__WEBPACK_IMPORTED_MODULE_1__["Customer"];
                        if (!this.role_branch) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.listService.getDataUserLocalStorege()];
                    case 1:
                        roleUser = _c.sent();
                        if (!roleUser) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.handleListRoleBranch(roleUser)];
                    case 2:
                        _a.listRoleBranchOrigin = _c.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        _b = this;
                        return [4 /*yield*/, this.listService.handleListRoleBranchUser()];
                    case 4:
                        _b.listRoleBranchOrigin = _c.sent();
                        _c.label = 5;
                    case 5:
                        if (Array.isArray(this.listRoleBranchOrigin) && this.listRoleBranchOrigin.length) {
                            if (this.listRoleBranchOrigin.length === 2) {
                                this.listRoleBranchOrigin = this.listRoleBranchOrigin.filter(function (value) {
                                    if (value.code !== 'TAT_CA') {
                                        value.checked = true;
                                        return value;
                                    }
                                });
                            }
                        }
                        _c.label = 6;
                    case 6:
                        initialState = {
                            customer: customer,
                            totalCount: this.dataGrid.instance.totalCount(),
                            objectCodes: this.objectCodes,
                            role_branch: this.role_branch,
                            roleBranchStatus: this.listRoleBranchOrigin
                        };
                        this.bsModalRef = this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_3__["AddCustomerComponent"], {
                            class: 'modal-lg full-modal',
                            initialState: initialState,
                            backdrop: 'static',
                            keyboard: false,
                        });
                        return [3 /*break*/, 8];
                    case 7:
                        initialState = {
                            totalCount: this.dataGrid.instance.totalCount(),
                            student_reduce_rate_codes: this.student_reduce_rate_codes,
                            classCodes: this.classCodes,
                            classCodeListTypeId: this.classCodeListTypeId,
                            objectCodes: this.objectCodes
                        };
                        this.bsModalRef = this.modalService.show(_shared_components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_4__["AddStudentComponent"], {
                            class: 'modal-lg full-modal',
                            initialState: initialState,
                            backdrop: 'static',
                            keyboard: false,
                        });
                        _c.label = 8;
                    case 8:
                        this.modalService.onHide.subscribe(function () {
                            if (_this.bsModalRef.content.successSaveItem) {
                                // this.dataGrid.instance.refresh();
                                _this.dataSource = {};
                                _this.dataSourceHSSV = {};
                                _this.loadList();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.edit = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id, roleUser, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        id = data ? data.id : (this.selectedRows[0].length === 0 ? '' : this.selectedRows[0]);
                        if (!!id) return [3 /*break*/, 1];
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
                        return [2 /*return*/];
                    case 1:
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                        this.listRoleBranchOrigin = [];
                        if (!this.role_branch) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.listService.getDataUserLocalStorege()];
                    case 2:
                        roleUser = _c.sent();
                        if (!roleUser) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, this.handleListRoleBranch(roleUser)];
                    case 3:
                        _a.listRoleBranchOrigin = _c.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        _b = this;
                        return [4 /*yield*/, this.listService.handleListRoleBranchUser()];
                    case 5:
                        _b.listRoleBranchOrigin = _c.sent();
                        _c.label = 6;
                    case 6:
                        this.customersService.getCustomer(id).subscribe(function (response) {
                            var customer = response.data.customer;
                            if (_this.role_branch && _this.listRoleBranchOrigin) {
                                if (customer.role_branch) {
                                    var role_branch_1 = customer.role_branch.split(';');
                                    var i_1 = 0;
                                    _this.listRoleBranchOrigin.forEach(function (item) {
                                        if (role_branch_1.indexOf(item.code) !== -1) {
                                            item.checked = true;
                                            i_1++;
                                        }
                                    });
                                    if (_this.listRoleBranchOrigin.length - i_1 === 1) {
                                        _this.listRoleBranchOrigin.forEach(function (item) {
                                            item.checked = true;
                                        });
                                    }
                                }
                            }
                            var initialState = {
                                customer: customer,
                                objectCodes: _this.objectCodes,
                                role_branch: _this.role_branch,
                                roleBranchStatus: _this.listRoleBranchOrigin
                            };
                            _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_3__["AddCustomerComponent"], {
                                class: 'modal-lg full-modal',
                                initialState: initialState,
                                backdrop: 'static',
                                keyboard: false,
                            });
                            _this.modalService.onHide.subscribe(function () {
                                if (_this.bsModalRef.content.successSaveItem) {
                                    // this.dataGrid.instance.refresh();
                                    _this.dataSource = {};
                                    _this.dataSourceHSSV = {};
                                    _this.loadList();
                                }
                            });
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                        });
                        _c.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    //HS-SV
    IndexComponent.prototype.editHSSV = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var id;
            return __generator(this, function (_a) {
                id = data ? data.id : (this.selectedRowsHSSV[0].length === 0 ? '' : this.selectedRowsHSSV[0]);
                if (!id) {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
                    return [2 /*return*/];
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                    this.customersService.getStudent(id).subscribe(function (response) {
                        var student = response.data.student;
                        var initialState = {
                            student: student,
                            revenues: _this.revenues,
                            student_reduce_rate_codes: _this.student_reduce_rate_codes,
                            classCodeListTypeId: _this.classCodeListTypeId,
                            classCodes: _this.classCodes,
                            objectCodes: _this.objectCodes
                        };
                        _this.bsModalRef = _this.modalService.show(_shared_components_add_student_add_student_component__WEBPACK_IMPORTED_MODULE_4__["AddStudentComponent"], {
                            class: 'modal-lg full-modal',
                            initialState: initialState,
                            backdrop: 'static',
                            keyboard: false,
                        });
                        _this.modalService.onHide.subscribe(function () {
                            if (_this.bsModalRef.content.successSaveItem) {
                                // this.dataGrid.instance.refresh();
                                _this.dataSource = {};
                                _this.dataSourceHSSV = {};
                                _this.loadList();
                            }
                        });
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    IndexComponent.prototype.delete = function (data) {
        var _this = this;
        var id = data ? data.id : (this.selectedRows.length === 0 ? '' : this.selectedRows.join(','));
        if (!id) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
            return;
        }
        else {
            var result = _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
            if (result) {
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                        _this.customersService.delete(id).subscribe(function (response) {
                            if (response.status === 'success') {
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                _this.dataSource = {};
                                _this.dataSourceHSSV = {};
                                _this.loadList();
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                            }
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                        });
                    }
                });
            }
        }
    };
    IndexComponent.prototype.deleteHSSV = function (data) {
        var _this = this;
        var id = data ? data.id : (this.selectedRowsHSSV.length === 0 ? '' : this.selectedRowsHSSV.join(','));
        if (!id) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
            return;
        }
        else {
            var result = _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].confirm(this._translate.CONFIRM.delete, this._translate.NOTIFY.notify);
            if (result) {
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                        _this.customersService.deleteStudent(id).subscribe(function (response) {
                            if (response.status === 'success') {
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.delete_success, 'success');
                                _this.dataSource = {};
                                _this.dataSourceHSSV = {};
                                _this.loadList();
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                            }
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                        });
                    }
                });
            }
        }
    };
    IndexComponent.prototype.getGroupCodes = function () {
        var _this = this;
        this.listtypes.forEach(function (listtype) {
            if (listtype.code === 'DM_NHOM_KHACH_HANG') {
                _this.customersService.getAllListsbyListtype(listtype.id).subscribe(function (res) {
                    _this.groupCodes = res.data.lists;
                });
            }
        });
    };
    IndexComponent.prototype.getStudentReduceRateCodes = function () {
        var _this = this;
        this.listtypes.forEach(function (listtype) {
            if (listtype.code === 'DM_TY_LE_MIEN_GIAM_HOC_PHI') {
                _this.customersService.getAllListsbyListtype(listtype.id).subscribe(function (res) {
                    _this.studentReduceRateCodes = res.data.lists;
                });
            }
        });
    };
    IndexComponent.prototype.getObjectCodes = function () {
        var _this = this;
        this.listtypes.forEach(function (listtype) {
            if (listtype.code === 'DM_DOI_TUONG_KHACH_HANG') {
                _this.customersService.getAllListsbyListtype(listtype.id).subscribe(function (res) {
                    _this.objectCodes = res.data.lists;
                });
            }
        });
    };
    IndexComponent.prototype.getListtypes = function () {
        var _this = this;
        this.customersService.getAllListtype().subscribe(function (res) {
            _this.listtypes = res.data.listtypes;
            // this.getGroupCodes();
            _this.getStudentReduceRateCodes();
            _this.getObjectCodes();
        });
    };
    // lay file mau
    IndexComponent.prototype.getFileTemp = function () {
        this.showPopupGetFile = true;
    };
    IndexComponent.prototype.fileCoDuLieu = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        if (this.isCustomer) {
            this.customersService.getFileTempData().subscribe(function (res) {
                if (res.status === 'success') {
                    var file = res.data.customer;
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(res.message, 'error');
                }
                _this.showPopupGetFile = false;
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
        else {
            this.customersService.getFileTempDataStudent().subscribe(function (res) {
                if (res.status === 'success') {
                    var file = res.data.student;
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(res.message, 'error');
                }
                _this.showPopupGetFile = false;
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
    };
    IndexComponent.prototype.fileTrang = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        if (this.isCustomer) {
            this.customersService.getFileTemp().subscribe(function (res) {
                if (res.status === 'success') {
                    var file = res.data.customer;
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(res.message, 'error');
                }
                _this.showPopupGetFile = false;
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
        else {
            this.customersService.getFileTempStudent().subscribe(function (res) {
                if (res.status === 'success') {
                    var file = res.data.student;
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(res.message, 'error');
                }
                _this.showPopupGetFile = false;
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
    };
    // import
    IndexComponent.prototype.thayTheToanBo = function () {
        this.isDisable = true;
        if (this.isCustomer) {
            this.import(this.dataExcelFile, 'THAY_THE');
        }
        else {
            this.importHSSV(this.dataExcelFile, 'THAY_THE');
        }
        this.dataExcelFile = null;
    };
    IndexComponent.prototype.themTiep = function () {
        this.isDisable = true;
        if (this.isCustomer) {
            this.import(this.dataExcelFile, 'THEM_TIEP');
        }
        else {
            this.importHSSV(this.dataExcelFile, 'THEM_TIEP');
        }
        this.dataExcelFile = null;
    };
    IndexComponent.prototype.huy = function () {
        this.showPopupImport = false;
        this.dataExcelFile = null;
    };
    IndexComponent.prototype.napDuLieuTuBangKe = function () {
        setTimeout(function () {
            document.getElementById('file-bang-ke').click();
        }, 50);
    };
    IndexComponent.prototype.onFileChanged = function (evt) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
        var target = (evt.target);
        this.fileName = target.files[0].name;
        this.fileSize = target.files[0].size / 1024;
        if (target.files.length !== 1) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify('Không thể chọn nhiều file', 'error');
            throw new Error('Không thể chọn nhiều file');
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].sheet_to_json(ws, { header: 'A', range: 5 }));
            var fileBangKe = document.getElementById('file-bang-ke');
            fileBangKe.value = '';
            _this.dataExcelFile = data;
            _this.countAll = data.length;
            _this.showPopupImport = true;
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
        };
        reader.readAsBinaryString(target.files[0]);
    };
    IndexComponent.prototype.import = function (dataExcelFile, type) {
        var _this = this;
        this.visibleProgressBar = true;
        var data = [];
        if (dataExcelFile) {
            dataExcelFile.forEach(function (element) {
                if ((element.B && !_config_index__WEBPACK_IMPORTED_MODULE_9__["pattern"].tax_code.test(element.B)) || !element.D || !element.E) {
                    var customer = {};
                    customer['code'] = element.A ? element.A : '';
                    customer['tax_code'] = element.B ? element.B : '';
                    customer['object_code'] = element.C ? element.C : '';
                    customer['name'] = element.D ? element.D : '';
                    customer['business_address'] = element.E ? element.E : '';
                    customer['transaction_address'] = element.F ? element.F : '';
                    customer['surrogate_name'] = element.G ? element.G : '';
                    customer['surrogate_position'] = element.H ? element.H : '';
                    // customer["bank_account_number"] = element.I ? element.I : "";
                    customer['bank_name'] = element.J ? element.J : '';
                    customer['contact_person_name'] = element.K ? element.K : '';
                    customer['contact_mobile'] = element.L ? element.L : '';
                    customer['email'] = element.M ? element.M : '';
                    if (_this.role_branch) {
                        customer['role_branch'] = element.N ? element.N : '';
                        customer['note'] = element.O ? element.O : '';
                    }
                    else {
                        customer['note'] = element.N ? element.N : '';
                    }
                    customer['error_message'] = 'Lỗi thiếu mã khách hàng, tên đơn vị, địa chỉ đăng ký kinh doanh hoặc mã số thuế sai định dạng';
                    _this.dataFail.push(customer);
                }
                else {
                    var customer = new _modules_customers_shared__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
                    customer.tax_code = element.B ? element.B : '';
                    customer.code = element.A ? element.A : '';
                    if (element.C) {
                        customer.object_code = 'CA_NHAN';
                    }
                    else {
                        customer.object_code = 'DOANH_NGHIEP';
                    }
                    customer.name = element.D ? element.D : '';
                    customer.business_address = element.E ? element.E : '';
                    customer.transaction_address = element.F ? element.F : '';
                    customer.surrogate_name = element.G ? element.G : '';
                    customer.surrogate_position = element.H ? element.H : '';
                    // customer.bank_account_number = element.I ? element.I : "";
                    customer.bank_name = element.J ? element.J : '';
                    customer.contact_person_name = element.K ? element.K : '';
                    customer.contact_mobile = element.L ? element.L : '';
                    customer.email = element.M ? element.M : '';
                    customer.order = 1;
                    if (_this.role_branch) {
                        customer.role_branch = element.N ? element.N : '';
                        customer.note = element.O ? element.O : '';
                    }
                    else {
                        customer.note = element.N ? element.N : '';
                    }
                    customer.status = 'HOAT_DONG';
                    data.push(customer);
                }
            });
        }
        if (type === 'THAY_THE') {
            this.customersService.clearData().subscribe(function (res) {
                if (res.status === 'success') {
                    _this.saveImport(data, 1);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            });
        }
        else if (type === 'THEM_TIEP') {
            this.saveImport(data, 1);
        }
    };
    IndexComponent.prototype.importHSSV = function (dataExcelFile, type) {
        var _this = this;
        this.visibleProgressBar = true;
        var data = [];
        var orderEnd = this.dataGrid.instance.totalCount();
        if (dataExcelFile) {
            dataExcelFile.forEach(function (element) {
                if (!element.B || !element.C) {
                    var student = {};
                    student['code'] = element.A ? element.A : '';
                    student['name'] = element.B ? element.B : '';
                    student['class_name'] = element.C ? element.C : '';
                    student['address'] = element.D ? element.D : '';
                    student['date_bith'] = element.E ? element.E : null;
                    student['student_reduce_rate_code'] = element.F ? element.F : 'KHONG_MIEN_GIAM';
                    student['guardians'] = element.G ? element.G : '';
                    student['mobile'] = element.H ? element.H : '';
                    student['email'] = element.I ? element.I : '';
                    student['note'] = element.J ? element.J : '';
                    student['error_message'] = 'Lỗi thiếu Họ và Tên HS - SV,Tên lớp';
                    _this.dataFail.push(student);
                }
                else {
                    var student = new _modules_customers_shared__WEBPACK_IMPORTED_MODULE_1__["Student"]();
                    student.code = element.A ? element.A : '';
                    student.name = element.B ? element.B : '';
                    student.class_name = element.C ? element.C : '';
                    student.address = element.D ? element.D : '';
                    student.date_bith = element.E ? element.E : null;
                    student.student_reduce_rate_code = element.F ? element.F : 'KHONG_MIEN_GIAM';
                    student.guardians = element.G ? element.G : '';
                    student.mobile = element.H ? element.H : '';
                    student.email = element.I ? element.I : '';
                    student.note = element.J ? element.J : '';
                    student.order = orderEnd++;
                    student.status = 'HOAT_DONG';
                    if (_this.studentReduceRateCodes && _this.studentReduceRateCodes.length > 0) {
                        var _obj = _this.studentReduceRateCodes.filter(function (p) { return p.name === element.F; })[0];
                        if (_obj || !element.F) {
                            if (_obj) {
                                student.student_reduce_rate_code = _obj.code;
                                data.push(student);
                            }
                            else {
                                student.student_reduce_rate_code = 'KHONG_MIEN_GIAM';
                                data.push(student);
                            }
                        }
                        else {
                            var student_1 = {};
                            student_1['code'] = element.A ? element.A : '';
                            student_1['name'] = element.B ? element.B : '';
                            student_1['class_name'] = element.C ? element.C : '';
                            student_1['address'] = element.D ? element.D : '';
                            student_1['date_bith'] = element.E ? element.E : null;
                            student_1['student_reduce_rate_code'] = element.F ? element.F : '';
                            student_1['guardians'] = element.G ? element.G : '';
                            student_1['mobile'] = element.H ? element.H : '';
                            student_1['email'] = element.I ? element.I : '';
                            student_1['note'] = element.J ? element.J : '';
                            student_1['error_message'] = 'Lỗi sai Tỷ Lệ miễn giảm';
                            _this.dataFail.push(student_1);
                        }
                    }
                    // switch (element.F) {
                    //   case "Không miễn, giảm":
                    //     student.student_reduce_rate_code = 'KHONG_MIEN_GIAM';
                    //     break;
                    //   case "50% học phí":
                    //     student.student_reduce_rate_code = 'MIEN_GIAM_50';
                    //     break;
                    //   case "100% học phí":
                    //     student.student_reduce_rate_code = 'MIEN_GIAM_100';
                    //     break;
                    //   case "Miễn giảm 70%":
                    //     student.student_reduce_rate_code = 'MIEN_GIAM_70';
                    //     break;
                    //   default:
                    //     student.student_reduce_rate_code = 'KHONG_MIEN_GIAM';
                    //     break;
                    // }
                    // data.push(student);
                }
            });
        }
        if (type === 'THAY_THE') {
            this.customersService.clearDataStudent().subscribe(function (res) {
                if (res.status === 'success') {
                    _this.saveImportHSSV(data, 1);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                }
            });
        }
        else if (type === 'THEM_TIEP') {
            this.saveImportHSSV(data, 1);
        }
    };
    IndexComponent.prototype.saveImportHSSV = function (data, page) {
        var _this = this;
        if (this.stopImport === true) {
            return;
        }
        var numberPages = Math.floor(data.length / this.maximum_object_import) + 1;
        var percentComplete = 100 / numberPages;
        var timePerRow = 7;
        var timeTotal = (numberPages) * timePerRow;
        var pageData = {
            'students': this.paginate(data, this.maximum_object_import, page)
        };
        this.sub = this.customersService.importDataStudent(pageData).subscribe(function (res) {
            timeTotal = timeTotal - (page * timePerRow);
            if (!_this.stopImport) {
                _this.timeRemain = ", " + _this._translate.NOTIFY.time_remaining + ": " + moment__WEBPACK_IMPORTED_MODULE_10__["utc"](timeTotal * 1000).format('HH:mm:ss') + ".";
            }
            if (res.status === 'success') {
                _this.getAllListbyListtypeByCode();
                _this.valueProgress += percentComplete;
                if (page < numberPages) {
                    _this.saveImportHSSV(data, page + 1);
                }
                if (res.data.customer_errors.length !== 0) {
                    res.data.customer_errors.forEach(function (error) {
                        delete error.id;
                        delete error.account_id;
                        delete error.guardians;
                        delete error.student_reduce_rate_code;
                        delete error.class_name;
                        delete error.order;
                        delete error.status;
                    });
                    _this.dataFail = _this.dataFail.concat(res.data.customer_errors);
                }
                _this.importSuccess = _this.countAll - _this.dataFail.length + 4;
                if (page === numberPages) {
                    _this.valueProgress = 100;
                    _this.customersService.confirmClearDataStudent().subscribe(function (res) {
                        if (res.status === 'success') {
                            _this.thongbao = _this._translate.NOTIFY.import + " " + _this.importSuccess + "/" + _this.countAll + " b\u1EA3n ghi (C\u00F3 " + (_this.dataFail.length - 4) + " b\u1EA3n ghi l\u1ED7i.)";
                            _this.timeRemain = '';
                            _this.showPopupImport = false;
                            if (_this.importSuccess < _this.countAll) {
                                _this.visibleGetError = true;
                                _this.layBanGhiLoi();
                            }
                            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.import_success, 'success');
                        }
                    });
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                _this.customersService.confirmClearDataStudent().subscribe(function (res) {
                });
                _this.valueProgress = 100;
                _this.showPopupImport = false;
            }
        });
    };
    IndexComponent.prototype.saveImport = function (data, page) {
        var _this = this;
        if (this.stopImport === true) {
            return;
        }
        var numberPages = Math.floor(data.length / this.maximum_object_import) + 1;
        var percentComplete = 100 / numberPages;
        var timePerRow = 7;
        var timeTotal = (numberPages) * timePerRow;
        var pageData = {
            'customers': this.paginate(data, this.maximum_object_import, page)
        };
        this.sub = this.customersService.importData(pageData).subscribe(function (res) {
            timeTotal = timeTotal - (page * timePerRow);
            if (!_this.stopImport) {
                _this.timeRemain = ", " + _this._translate.NOTIFY.time_remaining + ": " + moment__WEBPACK_IMPORTED_MODULE_10__["utc"](timeTotal * 1000).format('HH:mm:ss') + ".";
            }
            if (res.status === 'success') {
                _this.valueProgress += percentComplete;
                if (page < numberPages) {
                    _this.saveImport(data, page + 1);
                }
                if (res.data.customer_errors.length !== 0) {
                    res.data.customer_errors.forEach(function (error) {
                        delete error.id;
                        delete error.account_id;
                        delete error.group_code;
                        delete error.student_reduce_rate_code;
                        delete error.order;
                        delete error.status;
                        if (error.object_code === 'CA_NHAN') {
                            error.object_code = 'X';
                        }
                        else {
                            error.object_code = '';
                        }
                    });
                    _this.dataFail = _this.dataFail.concat(res.data.customer_errors);
                }
                _this.importSuccess = _this.countAll - _this.dataFail.length + 4;
                if (page === numberPages) {
                    _this.valueProgress = 100;
                    _this.customersService.confirmClearData().subscribe(function (res) {
                        if (res.status === 'success') {
                            _this.thongbao = _this._translate.NOTIFY.import + " " + _this.importSuccess + "/" + _this.countAll + " b\u1EA3n ghi (C\u00F3 " + (_this.dataFail.length - 4) + " b\u1EA3n ghi l\u1ED7i.)";
                            _this.timeRemain = '';
                            if (_this.importSuccess < _this.countAll) {
                                _this.visibleGetError = true;
                                //this.layBanGhiLoi();
                            }
                            else {
                                _this.showPopupImport = false;
                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.import_success, 'success');
                            }
                        }
                    });
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                _this.customersService.confirmClearData().subscribe(function (res) {
                });
                _this.valueProgress = 100;
                _this.showPopupImport = false;
            }
        });
    };
    IndexComponent.prototype.paginate = function (array, page_size, page_number) {
        --page_number; // because pages logically start with 1, but technically with 0
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };
    IndexComponent.prototype.onImportShowing = function (e) {
        this.stopImport = false;
        this.valueProgress = 0;
        this.timeRemain = '';
        this.visibleGetError = false;
    };
    IndexComponent.prototype.onImportHiding = function (e) {
        var r = true;
        if (this.valueProgress < 100) {
            r = confirm(this._translate.CONFIRM.import_data);
        }
        if (r) {
            this.sub.unsubscribe();
            this.stopImport = true;
            this.dataSource = {};
            this.dataSourceHSSV = {};
            this.loadList();
            this.valueProgress = 0;
            this.timeRemain = '';
            this.isDisable = false;
            this.thongbao = '';
            this.dataFail = [];
            if (this.user.account.account_type == 'HS-SV')
                this.dataFail = this.dataFail.concat(this.headerStudent);
            else
                this.dataFail = this.dataFail.concat(this.header);
            this.visibleProgressBar = false;
            this.customersService.confirmClearData().subscribe(function (res) {
            });
        }
        else {
            e.cancel = true;
        }
    };
    IndexComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'XOA') {
            if (this.isCustomer) {
                this.delete(null);
            }
            else {
                this.deleteHSSV(null);
            }
        }
        else if (e.itemData.id === 'LAY_FILE_MAU') {
            if (this.isCustomer) {
                this.getFileTemp();
            }
            else {
                this.getFileTemp();
            }
        }
        else if (e.itemData.id === 'NAP_DU_LIEU') {
            this.napDuLieuTuBangKe();
        }
        else if (e.itemData.id === 'CHUYEN_LOP') {
            this.chuyenlop(null);
        }
    };
    IndexComponent.prototype.chuyenlop = function (data) {
        var _this = this;
        var id = data ? data.id : (this.selectedRowsHSSV.length === 0 ? '' : this.selectedRowsHSSV);
        if (!id) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.select_object, 'error');
            return;
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
            this.customersService.getCustomer(id).subscribe(function (response) {
                var initialState = {
                    ids: id,
                    classCodes: _this.classCodes,
                    objectCodes: _this.objectCodes,
                    classCodeListTypeId: _this.classCodeListTypeId
                };
                if (!_this.isCustomer) {
                    _this.bsModalRef = _this.modalService.show(_shared_components_convert_class_convert_class_component__WEBPACK_IMPORTED_MODULE_13__["ConvertClassComponent"], {
                        class: 'second child-modal',
                        initialState: initialState,
                        backdrop: 'static',
                        keyboard: false,
                    });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify('Error', 'error');
                }
                _this.modalService.onHide.subscribe(function () {
                    if (_this.bsModalRef.content.successSaveItem) {
                        // this.dataGrid.instance.refresh();
                        _this.dataSource = {};
                        _this.dataSourceHSSV = {};
                        _this.loadList();
                    }
                });
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
        }
    };
    IndexComponent.prototype.layBanGhiLoi = function () {
        if (this.valueProgress < 100) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(this._translate.NOTIFY.import_error, 'error');
        }
        else {
            var ws = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].json_to_sheet(this.dataFail);
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_new();
            var wscols = [
                { wpx: 180 },
                { wpx: 130 },
                { wpx: 100 },
                { wpx: 200 },
                { wpx: 200 },
                { wpx: 200 },
                { wpx: 150 },
                { wpx: 150 },
                { wpx: 100 },
                { wpx: 100 },
                { wpx: 150 },
                { wpx: 150 },
                { wpx: 200 },
                { wpx: 100 },
                { wpx: 400 },
            ];
            var wsrows = [
                { hidden: true },
            ];
            ws['!cols'] = wscols;
            ws['!rows'] = wsrows;
            xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_append_sheet(wb, ws, 'Sheet1');
            xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](wb, 'danh_sach_loi.xlsx');
        }
    };
    IndexComponent.prototype.selectTab = function (e) {
        var tab = e.itemData.code;
        switch (tab) {
            case 'STUDENT':
                this.isStudent = true;
                this.isCustomer = false;
                this.extras = this.extrasStudent;
                break;
            case 'CUSTOMER':
                this.isCustomer = true;
                this.isStudent = false;
                this.extras = this.extrasCustomer;
                break;
            default:
                break;
        }
    };
    IndexComponent.prototype.getAllListbyListtypeByCode = function () {
        var _this = this;
        this.productsService.getAllListbyListtypeByCode('DM_LOP_HOC,DM_HINH_THUC_THU,DM_TY_LE_MIEN_GIAM_HOC_PHI').subscribe(function (response) {
            _this.revenues = response.data['DM_HINH_THUC_THU'];
            _this.classCodes = response.data['DM_LOP_HOC'];
            _this.student_reduce_rate_codes = response.data['DM_TY_LE_MIEN_GIAM_HOC_PHI'];
            _this.classCodeListTypeId = response.data['ids']['DM_LOP_HOC'];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/customers/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/customers/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_modules_products_shared__WEBPACK_IMPORTED_MODULE_12__["ProductsService"],
            _core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _modules_customers_shared__WEBPACK_IMPORTED_MODULE_1__["CustomersService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_14__["ListsService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/customers/customers.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/customers/customers.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/customers/components/index/index.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _customers_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers.routing */ "./src/app/modules/customers/customers.routing.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/modules/customers/shared/index.ts");
/* harmony import */ var _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/module/v-translate.module */ "./src/app/core/module/v-translate.module.ts");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _modules_products_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/products/shared */ "./src/app/modules/products/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//library

//general






var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _customers_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _core_index__WEBPACK_IMPORTED_MODULE_4__["devextremeModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxTreeListModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_module_v_translate_module__WEBPACK_IMPORTED_MODULE_8__["vTranslateModule"]
            ],
            declarations: [_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]],
            entryComponents: [],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_7__["CustomersService"], _modules_lists_shared__WEBPACK_IMPORTED_MODULE_9__["ListsService"], _modules_products_shared__WEBPACK_IMPORTED_MODULE_10__["ProductsService"]]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/modules/customers/customers.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/customers/customers.routing.ts ***!
  \********************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/customers/components/index/index.component.ts");
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
//# sourceMappingURL=customers-customers-module.js.map