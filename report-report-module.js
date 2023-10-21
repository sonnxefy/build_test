(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./src/app/modules/report/components/daily-summary-report-hospital/daily-summary-report-hospital.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/daily-summary-report-hospital/daily-summary-report-hospital.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"20\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column caption=\"Tên nhóm khách hàng\" dataField=\"customer_type_name\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ngày\" dataField=\"invoice_date\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Doanh thu trước thuế\" dataField=\"amount\" alignment=\"right\"  [format]=\"formatter.tong_tien\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tiền thuế\" dataField=\"total_amount_vat\"  [format]=\"formatter.tong_tien\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Doanh thu sau thuế\" dataField=\"total_payment\" alignment=\"right\"  [format]=\"formatter.tong_tien\">\r\n    </dxi-column>\r\n    <dxo-summary>\r\n      <dxi-group-item column='amount' summaryType=\"sum\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-group-item column=\"amount_vat\" summaryType=\"sum\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-total-item column=\"amount\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\" summaryType=\"sum\">\r\n      </dxi-total-item>\r\n      <dxi-total-item column=\"amount_vat\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        summaryType=\"sum\">\r\n      </dxi-total-item>\r\n    </dxo-summary>\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/daily-summary-report-hospital/daily-summary-report-hospital.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/daily-summary-report-hospital/daily-summary-report-hospital.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-datagrid-summary-item.dx-datagrid-text-content.dx-datagrid-group-text-content{color:red}.dx-datagrid-summary-item{color:red;background-color:yellow}.mergecells{display:table-cell;vertical-align:middle !important;border-color:rgba(61,70,109,0.5) !important;border-style:solid !important;border-width:0.2px 0.2px 0.2px 0.2px !important;background:white !important;color:black !important}.mergecellselected{background:rgba(175,21,30,0.8) !important;color:white !important}\n"

/***/ }),

/***/ "./src/app/modules/report/components/daily-summary-report-hospital/daily-summary-report-hospital.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/daily-summary-report-hospital/daily-summary-report-hospital.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DailySummaryReportHospitalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailySummaryReportHospitalComponent", function() { return DailySummaryReportHospitalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DailySummaryReportHospitalComponent = /** @class */ (function () {
    function DailySummaryReportHospitalComponent(
    // public bsModalRef: BsModalRef,
    authService, modalService, reportService, vatService, translate, route, socketService, spinner, vPreviewInvService) {
        this.authService = authService;
        this.modalService = modalService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.route = route;
        this.socketService = socketService;
        this.spinner = spinner;
        this.vPreviewInvService = vPreviewInvService;
        this.lstfrmData = [];
        this.dataSource = {};
        this.groupTemplate = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
        this.groupIndexKCT = 0;
        this.groupIndex0 = 0;
        this.groupIndex5 = 0;
        this.groupIndex10 = 0;
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    DailySummaryReportHospitalComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        this.loadList(null);
    };
    DailySummaryReportHospitalComponent.prototype.loadList = function (findByData) {
        //  Library.showloading();
        var data = {
            "report": {
                "from_date": this.findData.from_date,
                "to_date": this.findData.to_date,
                "template_id": this.findData.template_id,
                "user_ids": this.findData.user_ids,
                "tax_code": "",
                "verify_code": "",
                "export_place": this.findData.export_place,
                "customer_type": this.findData.customer_type,
                "is_view": this.findData.is_view,
                "adjustment_type": this.findData.adjustment_type,
            }
        };
        if (findByData) {
            data = {
                "report": {
                    "from_date": findByData.from_date,
                    "to_date": findByData.to_date,
                    "template_id": findByData.template_id,
                    "user_ids": findByData.user_ids,
                    "tax_code": "",
                    "verify_code": "",
                    "export_place": findByData.export_place,
                    "customer_type": findByData.customer_type,
                    "is_view": findByData.is_view,
                    "adjustment_type": findByData.adjustment_type,
                }
            };
        }
        this.dataSource = {};
        this.dataSource.store = this.reportService.getHospitalDaily(data);
    };
    DailySummaryReportHospitalComponent.prototype.calculateNetRevenueTotal = function (options) {
        if (options.name === 'amount') {
            options.totalValue = 1000000;
        }
        if (options.name === 'amount_vat') {
            options.totalValue = 2000000;
        }
    };
    DailySummaryReportHospitalComponent.prototype.GetDisplayText = function (d) {
        return d.data.collapsedItems ? d.data.collapsedItems[0].groupName : d.data.items[0].groupName;
    };
    DailySummaryReportHospitalComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    DailySummaryReportHospitalComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    DailySummaryReportHospitalComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    DailySummaryReportHospitalComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    DailySummaryReportHospitalComponent.prototype.onCellPrepared = function (cellInfo) {
    };
    DailySummaryReportHospitalComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    DailySummaryReportHospitalComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    DailySummaryReportHospitalComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    DailySummaryReportHospitalComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    DailySummaryReportHospitalComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    DailySummaryReportHospitalComponent.prototype.view = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.invoice_id);
            }
            var dataView = this.vatService.taodulieuXemMau(ids);
            dataView['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(dataView);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    DailySummaryReportHospitalComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], DailySummaryReportHospitalComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DailySummaryReportHospitalComponent.prototype, "findData", void 0);
    DailySummaryReportHospitalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-daily-summary-report-hospital',
            template: __webpack_require__(/*! ./daily-summary-report-hospital.component.html */ "./src/app/modules/report/components/daily-summary-report-hospital/daily-summary-report-hospital.component.html"),
            styles: [__webpack_require__(/*! ./daily-summary-report-hospital.component.scss */ "./src/app/modules/report/components/daily-summary-report-hospital/daily-summary-report-hospital.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_9__["ViewInvoiceService"]])
    ], DailySummaryReportHospitalComponent);
    return DailySummaryReportHospitalComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/detail-report-bill-pharmacy/detail-report-bill-pharmacy.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/detail-report-bill-pharmacy/detail-report-bill-pharmacy.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"20\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column allowMerge=\"true\" caption=\"STT\" alignment=\"center\" cellTemplate=\"stt\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ngày phiếu thu\" dataField=\"date\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ngày hóa đơn\" dataField=\"date\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số HĐ\" dataField=\"invoice_number\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Mã LK\" dataField=\"receipts_no\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Họ và tên\" alignment=\"center\" cellTemplate=\"name\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Doanh thu trước thuế\" dataField=\"amount\" [format]=\"formatter.tong_tien\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tiền thuế\" dataField=\"total_amount_vat\" [format]=\"formatter.tong_tien\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Doanh thu sau thuế\" dataField=\"total_payment\" [format]=\"formatter.tong_tien\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Cơ sở\" dataField=\"export_place_name\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Nhà thuốc\" dataField=\"customer_type_name\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ghi chú\" dataField=\"adjustment_type\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n          *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'stt'\">\r\n      {{d.rowIndex + 1}}\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'name'\">\r\n      <p *ngIf=\"d.data.customer_name\">{{d.data.customer_name}}</p>\r\n      <p *ngIf=\"!d.data.customer_name\">{{d.data.buyer_name}}</p>\r\n    </div>\r\n    <dxo-summary>\r\n      <dxi-group-item column='amount' summaryType=\"sum\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-group-item column=\"amount_vat\" summaryType=\"sum\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-total-item column=\"amount\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\" summaryType=\"sum\">\r\n      </dxi-total-item>\r\n      <dxi-total-item column=\"amount_vat\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        summaryType=\"sum\">\r\n      </dxi-total-item>\r\n    </dxo-summary>\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/report/components/detail-report-bill-pharmacy/detail-report-bill-pharmacy.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/detail-report-bill-pharmacy/detail-report-bill-pharmacy.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-datagrid-summary-item.dx-datagrid-text-content.dx-datagrid-group-text-content{color:red}.dx-datagrid-summary-item{color:red;background-color:yellow}.mergecells{display:table-cell;vertical-align:middle !important;border-color:rgba(61,70,109,0.5) !important;border-style:solid !important;border-width:0.2px 0.2px 0.2px 0.2px !important;background:white !important;color:black !important}.mergecellselected{background:rgba(175,21,30,0.8) !important;color:white !important}\n"

/***/ }),

/***/ "./src/app/modules/report/components/detail-report-bill-pharmacy/detail-report-bill-pharmacy.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/detail-report-bill-pharmacy/detail-report-bill-pharmacy.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: DetailReportBillPharmacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailReportBillPharmacyComponent", function() { return DetailReportBillPharmacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DetailReportBillPharmacyComponent = /** @class */ (function () {
    function DetailReportBillPharmacyComponent(
    // public bsModalRef: BsModalRef,
    authService, modalService, reportService, vatService, translate, vPreviewInvService) {
        this.authService = authService;
        this.modalService = modalService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.vPreviewInvService = vPreviewInvService;
        this.lstfrmData = [];
        this.dataSource = {};
        this.groupTemplate = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
        this.groupIndexKCT = 0;
        this.groupIndex0 = 0;
        this.groupIndex5 = 0;
        this.groupIndex10 = 0;
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    DetailReportBillPharmacyComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        this.loadList(null);
    };
    DetailReportBillPharmacyComponent.prototype.loadList = function (findByData) {
        //  Library.showloading();
        var data = {
            "report": {
                "from_date": this.findData.from_date,
                "to_date": this.findData.to_date,
                "template_id": "",
                "user_ids": this.findData.user_ids,
                "tax_code": "",
                "verify_code": "",
                "export_place": this.findData.export_place,
                "customer_type": this.findData.customer_type,
                "is_view": this.findData.is_view,
            }
        };
        if (findByData) {
            data = {
                "report": {
                    "from_date": findByData.from_date,
                    "to_date": findByData.to_date,
                    "template_id": "",
                    "user_ids": findByData.user_ids,
                    "tax_code": "",
                    "verify_code": "",
                    "export_place": findByData.export_place,
                    "customer_type": findByData.customer_type,
                    "is_view": findByData.is_view,
                }
            };
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        //  this.invoiceTypeNames.shift();this.fi
        this.dataSource.store = this.reportService.getHospitalDetail(data);
        // this.reportService.getAllInvoiceBuy().subscribe(value => console.log(value));
    };
    DetailReportBillPharmacyComponent.prototype.calculateNetRevenueTotal = function (options) {
        if (options.name === 'amount') {
            options.totalValue = 1000000;
        }
        if (options.name === 'amount_vat') {
            options.totalValue = 2000000;
        }
    };
    DetailReportBillPharmacyComponent.prototype.GetDisplayText = function (d) {
        return d.data.collapsedItems ? d.data.collapsedItems[0].groupName : d.data.items[0].groupName;
    };
    DetailReportBillPharmacyComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    DetailReportBillPharmacyComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    DetailReportBillPharmacyComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    DetailReportBillPharmacyComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    DetailReportBillPharmacyComponent.prototype.onCellPrepared = function (cellInfo) {
    };
    DetailReportBillPharmacyComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    DetailReportBillPharmacyComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    DetailReportBillPharmacyComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    DetailReportBillPharmacyComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    DetailReportBillPharmacyComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    DetailReportBillPharmacyComponent.prototype.view = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.invoice_id);
            }
            var dataView = this.vatService.taodulieuXemMau(ids);
            dataView['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(dataView);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    DetailReportBillPharmacyComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], DetailReportBillPharmacyComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailReportBillPharmacyComponent.prototype, "findData", void 0);
    DetailReportBillPharmacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-report-bill-pharmacy',
            template: __webpack_require__(/*! ./detail-report-bill-pharmacy.component.html */ "./src/app/modules/report/components/detail-report-bill-pharmacy/detail-report-bill-pharmacy.component.html"),
            styles: [__webpack_require__(/*! ./detail-report-bill-pharmacy.component.scss */ "./src/app/modules/report/components/detail-report-bill-pharmacy/detail-report-bill-pharmacy.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__["ViewInvoiceService"]])
    ], DetailReportBillPharmacyComponent);
    return DetailReportBillPharmacyComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/export-xml/export-xml.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/export-xml/export-xml.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Báo cáo tình hình sử dụng hóa đơn</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p style=\"margin-bottom: 10px\"><span class=\"title\">Tên tổ chức (cá nhân): </span><span>{{name}}</span></p>\r\n    <p style=\"margin-bottom: 15px\"><span class=\"title\">Mã số thuế: </span><span>{{tax_code}}</span></p>\r\n    <dx-form id=\"form\"\r\n      [formData]=\"adress\"\r\n      validationGroup=\"listData\"\r\n      [showColonAfterLabel]=\"false\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"4\">\r\n          <dxi-item [label]=\"{text: 'Tỉnh/Thành phố'}\" dataField=\"province_code\" editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: citis,  displayExpr: 'name', valueExpr: 'code', placeholder: 'Tỉnh/Thành phố',\r\n              searchEnabled: true, noDataText: 'Chưa có Tỉnh/Thành phố nào', onValueChanged: onCitis}\">\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Quận/Huyện'}\" dataField=\"district_code\" editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: quanhuyen,  displayExpr: 'name', valueExpr: 'code', placeholder: 'Quận/Huyện',\r\n              searchEnabled: true, noDataText: 'Chưa có Quận/Huyện nào',  onValueChanged: onQuanHuyen}\">\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Phường/Xã'}\" dataField=\"commune_code\" editorType=\"dxSelectBox\"\r\n              [editorOptions]=\"{items: phuongxa,  displayExpr: 'name', valueExpr: 'code', placeholder: 'Phường/Xã',\r\n              searchEnabled: true, noDataText: 'Chưa có Phường/Xã nào',  onValueChanged: onXaPhuong}\">\r\n          </dxi-item>\r\n          <dxi-item [label]=\"{text: 'Số nhà'}\" dataField=\"home_address\" \r\n              [editorOptions]=\"{placeholder: 'Số nhà', noDataText: 'Chưa có Số nhà nào'}\">\r\n          </dxi-item>\r\n      </dxi-item>\r\n    </dx-form>\r\n    <div class=\"report-gird-edit\">\r\n        <dx-context-menu\r\n        [items]=\"contextMenu\"\r\n        target=\"#gridReport\"\r\n        (onItemClick)=\"contextTableClick($event)\">\r\n      </dx-context-menu>\r\n      <dx-data-grid\r\n      id=\"gridReport\"\r\n        [dataSource]=\"dataSource\"\r\n        [showRowLines]=\"true\" \r\n        [allowColumnReordering]=\"true\"\r\n        [allowColumnResizing]=\"true\" \r\n        [showBorders]=\"true\"\r\n        [columnMinWidth]=\"50\" \r\n        [columnAutoWidth]=\"true\" \r\n        [wordWrapEnabled]=\"true\" \r\n        (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n        (onRowPrepared)=\"onRowPrepared($event)\"\r\n        (onRowUpdated)=\"onRowUpdated($event)\"\r\n        (onContentReady)=\"onContentReady($event)\"\r\n        (onCellPrepared)=\"onCellPrepared($event)\">\r\n        <dxo-editing mode=\"cell\" \r\n        [allowUpdating]=\"true\" \r\n        [allowDeleting]=\"true\" \r\n        [useIcons]=\"true\">\r\n        </dxo-editing>\r\n        <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n        <dxo-sorting mode=\"none\"></dxo-sorting>\r\n        <dxi-column dataField=\"invoice_type\" caption=\"Tên loại hóa đơn\" [width]=\"70\" cssClass=\"invoice-type\">\r\n          <dxo-lookup \r\n            [dataSource]=\"invoiceTypeNames\" \r\n            displayExpr=\"name\" \r\n            valueExpr=\"code\">\r\n          </dxo-lookup>\r\n        </dxi-column>\r\n    \r\n        <dxi-column cssClass=\"invoice-type\" dataField=\"template_code\" caption=\"Ký hiệu mẫu hóa đơn\" [width]=\"60\">\r\n        </dxi-column>\r\n    \r\n        <dxi-column dataField=\"invoice_series\" caption=\"Ký hiệu hóa đơn\" [width]=\"60\">\r\n        </dxi-column>\r\n    \r\n        <dxi-column caption=\"Số tồn đầu kỳ, mua/phát hành trong kỳ\">\r\n           <dxi-column\r\n                caption=\"Tổng số\"\r\n                dataField=\"amount\"\r\n                [width]=\"60\">\r\n           </dxi-column>\r\n           <dxi-column caption=\"Số tồn đầu kỳ\">\r\n              <dxi-column\r\n                caption=\"Từ số\"\r\n                dataField=\"opening_begin_number\"\r\n                [width]=\"60\">\r\n              </dxi-column>\r\n              <dxi-column\r\n                caption=\"Đến số\"\r\n                dataField=\"opening_end_number\"\r\n                [width]=\"60\">\r\n              </dxi-column>\r\n           </dxi-column>\r\n           <dxi-column caption=\"Số mua/phát hành trong kỳ\">\r\n              <dxi-column\r\n                caption=\"Từ số\"\r\n                dataField=\"in_period_release_begin_number\"\r\n                [width]=\"60\">\r\n              </dxi-column>\r\n              <dxi-column\r\n                caption=\"Đến số\"\r\n                dataField=\"in_period_release_end_number\"\r\n                [width]=\"60\">\r\n              </dxi-column>\r\n           </dxi-column>\r\n        </dxi-column>\r\n    \r\n        <dxi-column caption=\"Số sử dụng, xóa bỏ, mất, hủy trong kỳ \">\r\n            <dxi-column caption=\"Tổng số sử dụng, xóa bỏ, mất, hủy\">\r\n              <dxi-column\r\n                caption=\"Từ số\"\r\n                dataField=\"in_period_used_begin_number\"\r\n                [width]=\"60\">\r\n              </dxi-column>\r\n              <dxi-column\r\n                caption=\"Đến số\"\r\n                dataField=\"in_period_used_end_number\"\r\n                [width]=\"60\">\r\n              </dxi-column>\r\n              <dxi-column\r\n                caption=\"Cộng\"\r\n                dataField=\"in_period_used_total\"\r\n                [width]=\"50\">\r\n              </dxi-column>\r\n           </dxi-column>\r\n            <dxi-column caption=\"Trong đó\">\r\n                <dxi-column\r\n                    caption=\"Số lượng đã sử dụng\"\r\n                    dataField=\"in_period_used_amount\"\r\n                    [width]=\"60\">\r\n                </dxi-column>\r\n                <dxi-column caption=\"Xóa bỏ\">\r\n                  <dxi-column\r\n                    caption=\"Số lượng\"\r\n                    dataField=\"in_period_delete_amount\">\r\n                  </dxi-column>\r\n                  <dxi-column\r\n                    caption=\"Số\"\r\n                    dataField=\"in_period_delete_list\"\r\n                    [width]=\"60\">\r\n                  </dxi-column>\r\n                </dxi-column>\r\n                <dxi-column caption=\"Mất\">\r\n                  <dxi-column\r\n                    caption=\"Số lượng\"\r\n                    dataField=\"in_period_lost_amount\">\r\n                  </dxi-column>\r\n                  <dxi-column\r\n                    caption=\"Số\"\r\n                    dataField=\"in_period_lost_list\"\r\n                    [width]=\"60\">\r\n                  </dxi-column>\r\n                </dxi-column>\r\n                <dxi-column caption=\"Hủy\">\r\n                  <dxi-column\r\n                    caption=\"Số lượng\"\r\n                    dataField=\"in_period_destroy_amount\">\r\n                  </dxi-column>\r\n                  <dxi-column\r\n                    caption=\"Số\"\r\n                    dataField=\"in_period_destroy_list\"\r\n                    [width]=\"60\">\r\n                  </dxi-column>\r\n                </dxi-column>\r\n            </dxi-column>\r\n        </dxi-column>\r\n    \r\n        <dxi-column caption=\"Tồn cuối kỳ\">\r\n          <dxi-column\r\n            caption=\"Từ số\"\r\n            dataField=\"closing_begin_number\"\r\n            [width]=\"60\">\r\n          </dxi-column>\r\n          <dxi-column\r\n            caption=\"Đến số\"\r\n            dataField=\"closing_end_number\"\r\n            [width]=\"60\">\r\n          </dxi-column>\r\n          <dxi-column\r\n            caption=\"Số lượng\"\r\n            dataField=\"closing_amount\">\r\n          </dxi-column>\r\n        </dxi-column>\r\n        <dxo-summary>\r\n          <dxi-total-item\r\n              name=\"totalAmount\"\r\n              column=\"amount\"\r\n              summaryType=\"sum\"\r\n              displayFormat=\"{0}\">\r\n          </dxi-total-item>\r\n          <dxi-total-item\r\n              name=\"totalInPeriodUsedTotal\"\r\n              column=\"in_period_used_total\"\r\n              summaryType=\"sum\"\r\n              displayFormat=\"{0}\">\r\n          </dxi-total-item>\r\n          <dxi-total-item\r\n              name=\"totalClosingAmount\"\r\n              column=\"closing_amount\"\r\n              summaryType=\"sum\"\r\n              displayFormat=\"{0}\">\r\n          </dxi-total-item>\r\n        </dxo-summary>\r\n      </dx-data-grid>\r\n    </div>\r\n    <p class=\"note\">*Lưu ý: bấm chuột phải chọn Thêm để thêm hàng mới</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <dx-button icon=\"assets\\img\\icons\\XuatFile.png\" text=\"Kết xuất Xml\" type=\"default\" validationGroup=\"listData\" [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button icon=\"assets\\img\\icons\\QuayLai.png\" text=\"Quay lại\" type=\"default\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/export-xml/export-xml.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/export-xml/export-xml.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{font-weight:600}.report-gird-edit{margin-top:30px}.disabledRow{background:#e3e3e3}.dx-overlay-content{width:150px !important}::ng-deep #gridReport .dx-datagrid-content .dx-data-row td{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}::ng-deep #gridReport .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit{width:20px;min-width:20px !important}::ng-deep #gridReport .dx-datagrid .dx-row>td{font-size:12px !important;padding:5px}.note{font-size:12px;margin-top:10px}\n"

/***/ }),

/***/ "./src/app/modules/report/components/export-xml/export-xml.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/report/components/export-xml/export-xml.component.ts ***!
  \******************************************************************************/
/*! exports provided: ExportXmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportXmlComponent", function() { return ExportXmlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExportXmlComponent = /** @class */ (function () {
    function ExportXmlComponent(bsModalRef, modalService, reportService) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.reportService = reportService;
        this.adress = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["Adress"]();
        this.isDisQuanHuyen = true;
        this.isDisPhuongXa = true;
        this.isDisSoNha = true;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
        this.onCitis = function (e) {
            _this.province_name = e.component.option("selectedItem").name;
            _this.isDisQuanHuyen = false;
            _this.getQuanHuyen(e.value);
        };
        this.onQuanHuyen = function (e) {
            _this.district_name = e.component.option("selectedItem").name;
            _this.isDisPhuongXa = false;
            _this.getXaPhuong(e.value);
        };
        this.onXaPhuong = function (e) {
            _this.commune_name = e.component.option("selectedItem").name;
            _this.isDisSoNha = false;
        };
        this.onSubmit = function (e) {
            var items = [];
            _this.dataSource.forEach(function (item) {
                if (item.invoice_type != "") {
                    items.push(item);
                }
            });
            if (!_this.province_name) {
                if (_this.citis) {
                    _this.citis.forEach(function (city) {
                        if (city.code == _this.adress.province_code) {
                            _this.province_name = city.name;
                        }
                    });
                }
            }
            if (!_this.district_name) {
                if (_this.quanhuyen) {
                    _this.quanhuyen.forEach(function (qh) {
                        if (qh.code == _this.adress.district_code) {
                            _this.district_name = qh.name;
                        }
                    });
                }
            }
            if (!_this.commune_name) {
                if (_this.phuongxa) {
                    _this.phuongxa.forEach(function (px) {
                        if (px.code == _this.adress.commune_code) {
                            _this.commune_name = px.name;
                        }
                    });
                }
            }
            if (!_this.province_name) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Tỉnh/Thành phố không được để trống", "error");
                return;
            }
            if (!_this.district_name) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Quận/Huyện không được để trống", "error");
                return;
            }
            if (!_this.commune_name) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Phường/Xã không được để trống", "error");
                return;
            }
            var totalAmount = _this.dataGrid.instance.getTotalSummaryValue("totalAmount");
            var totalInPeriodUsedTotal = _this.dataGrid.instance.getTotalSummaryValue("totalInPeriodUsedTotal");
            var totalClosingAmount = _this.dataGrid.instance.getTotalSummaryValue("totalClosingAmount");
            var ClosingAmount = _this.dataGrid.instance.getTotalSummaryValue("closing_amount");
            var data = {
                "report": {
                    "report_period": _this.reportPeriod,
                    "closing_amount": ClosingAmount,
                    "from_date": _this.from_date,
                    "to_date": _this.to_date,
                    "province_code": _this.adress.province_code,
                    "province_name": _this.province_name,
                    "district_code": _this.adress.district_code,
                    "district_name": _this.district_name,
                    "commune_code": _this.adress.commune_code,
                    "commune_name": _this.commune_name,
                    "home_address": _this.adress.home_address,
                    "total_amount": totalAmount,
                    "total_in_period_used_total": totalInPeriodUsedTotal,
                    "total_closing_amount": totalClosingAmount,
                    "items": items,
                    "total_invoive_temp": _this.total_invoive_temp
                }
            };
            if (_this.typeCode) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                _this.reportService.exportXml(data, _this.typeCode).subscribe(function (res) {
                    if (res.status == 'success') {
                        var file = res.data.report;
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Xuất file XML thành công", 'success');
                        _this.bsModalRef.hide();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                    }
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Bạn phải chọn loại báo cáo", "error");
            }
        };
    }
    ExportXmlComponent.prototype.ngOnInit = function () {
        this.loadList();
        if (this.info_export_declaration.province_code) {
            this.adress.province_code = this.info_export_declaration.province_code;
            this.getQuanHuyen(this.info_export_declaration.province_code);
        }
        if (this.info_export_declaration.province_code) {
            this.adress.district_code = this.info_export_declaration.district_code;
            this.getXaPhuong(this.info_export_declaration.district_code);
        }
        if (this.info_export_declaration.commune_code) {
            this.adress.commune_code = this.info_export_declaration.commune_code;
        }
        if (this.info_export_declaration.home_address) {
            this.adress.home_address = this.info_export_declaration.home_address;
        }
        this.invoiceTypeNames.shift();
    };
    ExportXmlComponent.prototype.loadList = function () {
        var _this = this;
        var data = {
            "report": {
                "report_period": this.reportPeriod,
                "from_date": this.from_date,
                "to_date": this.to_date,
            }
        };
        //this.dataSource.store = this.reportService.getAll(data, this.typeCode);
        this.reportService.getAll1(data, this.typeCode).subscribe(function (res) {
            _this.dataSource = res.data.report.items;
            _this.total_invoive_temp = res.data.report.total_invoive_temp;
            var tempRow = _this.frmData.tempRow();
            tempRow.forEach(function (element) {
                _this.dataSource.push(element);
            });
        });
    };
    ExportXmlComponent.prototype.getQuanHuyen = function (value) {
        var _this = this;
        var data = {
            "list": {
                "listtype_code": "DM_QUAN_HUYEN_CQHC",
                "tag_name": "tinh_thanh",
                "tag_value": value,
            }
        };
        this.reportService.getOrtherList(data).subscribe(function (res) {
            _this.quanhuyen = res.data.lists;
        });
    };
    ExportXmlComponent.prototype.getXaPhuong = function (value) {
        var _this = this;
        var data = {
            "list": {
                "listtype_code": "DM_XA_PHUONG_CQHC",
                "tag_name": "quan_huyen",
                "tag_value": value,
            }
        };
        this.reportService.getOrtherList(data).subscribe(function (res) {
            _this.phuongxa = res.data.lists;
        });
    };
    ExportXmlComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text == 'Thêm') {
            this.addRow();
        }
    };
    ExportXmlComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ExportXmlComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ExportXmlComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField != "invoice_type") {
            if (e.row.data.invoice_type == "") {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify("Bạn chưa chọn loại hóa đơn", "error");
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export == "1";
        }
        if (e.dataField == "invoice_series") {
            // e.editorOptions.onKeyDown = (ekey) => {
            // }
        }
    };
    ExportXmlComponent.prototype.onCellPrepared = function (e) {
        if (e.columnIndex == 0 && e.rowType == "data") {
            if (this.itemSystemExport.includes(e.rowIndex)) {
                e.cellElement.querySelector(".dx-link-delete").remove();
            }
        }
    };
    ExportXmlComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export == "1") {
                e.rowElement.style.background = "#F1F1F1";
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ExportXmlComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code == e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case "opening_begin_number":
                if (e.key.opening_begin_number != "") {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number != "" || e.key.opening_begin_number != "") {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = "";
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case "opening_end_number":
                if (e.key.opening_end_number != "") {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number != "" || e.key.opening_begin_number != "") {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = "";
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case "in_period_release_begin_number":
                if (e.key.in_period_release_begin_number != "") {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number != "" || e.key.in_period_release_begin_number != "") {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = "";
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case "in_period_release_end_number":
                if (e.key.in_period_release_end_number != "") {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number != "" || e.key.in_period_release_begin_number != "") {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = "";
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case "closing_begin_number":
                if (e.key.closing_begin_number != "") {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number != "" || e.key.closing_begin_number != "") {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = "";
                }
                this.dataGrid.instance.refresh();
                break;
            case "closing_end_number":
                if (e.key.closing_end_number != "") {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number != "" || e.key.closing_begin_number != "") {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = "";
                }
                this.dataGrid.instance.refresh();
                break;
            case "in_period_used_begin_number":
                if (e.key.in_period_used_begin_number != "") {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case "in_period_used_end_number":
                if (e.key.in_period_used_end_number != "") {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case "invoice_series":
                if (e.key.invoice_series != "") {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case "template_code":
                if (e.key.template_code != "") {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ExportXmlComponent.prototype.onContentReady = function (e) {
        e.component.columnOption("command:edit", {
            visibleIndex: -1
        });
    };
    ExportXmlComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ExportXmlComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], ExportXmlComponent.prototype, "dataGrid", void 0);
    ExportXmlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-xml',
            template: __webpack_require__(/*! ./export-xml.component.html */ "./src/app/modules/report/components/export-xml/export-xml.component.html"),
            styles: [__webpack_require__(/*! ./export-xml.component.scss */ "./src/app/modules/report/components/export-xml/export-xml.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["ReportService"]])
    ], ExportXmlComponent);
    return ExportXmlComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/forder-student/report-collection-to-class/report-collection-to-class.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/forder-student/report-collection-to-class/report-collection-to-class.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\"\r\n                [dataSource]=\"dataSource\"\r\n                [showRowLines]=\"true\"\r\n                [allowColumnReordering]=\"true\"\r\n                [allowColumnResizing]=\"true\"\r\n                [showBorders]=\"true\"\r\n                [columnMinWidth]=\"20\"\r\n                [columnAutoWidth]=\"true\"\r\n                [wordWrapEnabled]=\"true\"\r\n                (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n                (onRowPrepared)=\"onRowPrepared($event)\"\r\n                (onRowUpdated)=\"onRowUpdated($event)\"\r\n                (onContentReady)=\"onContentReady($event)\"\r\n                (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column dataField=\"order\" allowMerge=\"true\" caption=\"STT\" [width]=\"5+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n\r\n    <dxi-column caption=\"Tên lớp\" dataField=\"class_name\" [width]=\"7+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tháng thu học phí\" dataField=\"school_fee_month\" [width]=\"12+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Mã khoản thu\" dataField=\"product_code\" [width]=\"15+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tên khoản thu\" dataField=\"product_name\" [width]=\"48+'%'\" alignment=\"left\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số lượng HS-SV đã thu tiền\" dataField=\"sum_student\" [width]=\"13+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n<!--    <dxo-summary>-->\r\n<!--      <dxi-group-item-->\r\n<!--        column='amount'-->\r\n<!--        summaryType=\"sum\"-->\r\n<!--        name='amount'-->\r\n<!--        valueFormat=\"0,###.##\"-->\r\n<!--        displayFormat=\"{0}\"-->\r\n<!--        [alignByColumn]=\"true\">-->\r\n<!--      </dxi-group-item>-->\r\n<!--      <dxi-group-item-->\r\n<!--        column=\"amount_vat\"-->\r\n<!--        summaryType=\"sum\"-->\r\n<!--        name='amount_vat'-->\r\n<!--        valueFormat=\"0,###.##\"-->\r\n<!--        displayFormat=\"{0}\"-->\r\n<!--        [alignByColumn]=\"true\">-->\r\n<!--      </dxi-group-item>-->\r\n<!--      <dxi-total-item-->\r\n<!--        column=\"amount\"-->\r\n<!--        name='amount'-->\r\n<!--        valueFormat=\"0,###.##\"-->\r\n<!--        displayFormat=\"{0}\"-->\r\n<!--        summaryType=\"sum\">-->\r\n<!--      </dxi-total-item>-->\r\n<!--      <dxi-total-item-->\r\n<!--        column=\"amount_vat\"-->\r\n<!--        name='amount_vat'-->\r\n<!--        valueFormat=\"0,###.##\"-->\r\n<!--        displayFormat=\"{0}\"-->\r\n<!--        summaryType=\"sum\">-->\r\n<!--      </dxi-total-item>-->\r\n<!--    </dxo-summary>-->\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager\r\n      [showPageSizeSelector]=\"true\"\r\n      [allowedPageSizes]=\"[15, 50, 100]\"\r\n      [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\"\r\n      infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/forder-student/report-collection-to-class/report-collection-to-class.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/forder-student/report-collection-to-class/report-collection-to-class.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/forder-student/report-collection-to-class/report-collection-to-class.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/forder-student/report-collection-to-class/report-collection-to-class.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ReportCollectionToClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCollectionToClassComponent", function() { return ReportCollectionToClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library/public/v-string.service */ "./src/app/core/library/public/v-string.service.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ReportCollectionToClassComponent = /** @class */ (function () {
    function ReportCollectionToClassComponent(authService, modalService, reportService, vatService, translate) {
        this.authService = authService;
        this.modalService = modalService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ReportCollectionToClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = this.authService.getCurrentUser();
        var mst = _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        var sub2 = this.vatService.getConfig().subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.configs = rs.data.configs;
                var _obj = rs.data.configs.filter(function (p) { return p.name === 'system_parameter'; })[0];
                if (_obj) {
                    _this.system_parameter = JSON.parse(_obj.value);
                }
            }
            else {
                // Library.notify('Có lỗi khi tải cấu hình', 'error');
            }
        }, function (err) {
        }, function () {
            sub2.unsubscribe();
        });
        this.loadList(null);
    };
    ReportCollectionToClassComponent.prototype.loadList = function (findByData) {
        var data = {
            report: {
                study_year: this.findData.study_year,
                school_fee_months: this.findData.school_fee_months,
                class_codes: this.findData.class_codes,
                product_codes: this.findData.product_codes,
            }
        };
        if (findByData) {
            data = {
                report: {
                    study_year: findByData.study_year,
                    school_fee_months: findByData.school_fee_months,
                    class_codes: findByData.class_codes,
                    product_codes: findByData.product_codes,
                }
            };
        }
        this.dataSource = {};
        this.dataSource.store = this.reportService.getAllCollectionToClass(data, true);
    };
    ReportCollectionToClassComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportCollectionToClassComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportCollectionToClassComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportCollectionToClassComponent.prototype.onCellPrepared = function (cellInfo) {
        if (cellInfo.rowType === 'data') {
            if (cellInfo.rowIndex > 0 && cellInfo.column.command !== 'edit') {
                if (cellInfo.component.cellValue(cellInfo.rowIndex - 1, cellInfo.column.dataField) == cellInfo.value) {
                    if (cellInfo.component.cellValue(cellInfo.rowIndex - 1, cellInfo.column.dataField)) {
                        var prev = this.mergelements[cellInfo.rowIndex - 1][cellInfo.column.dataField];
                        if (!this.mergelements[cellInfo.rowIndex]) {
                            this.mergelements[cellInfo.rowIndex] = {};
                        }
                        this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = prev;
                        if (prev) {
                            // cellInfo.cellElement.css('display', 'none');
                            var span = prev.attr('rowspan');
                            if (span) {
                                prev.attr('rowspan', Number(span) + 1);
                            }
                            else {
                                prev.attr('rowspan', 2);
                            }
                        }
                    }
                    else {
                        if (!this.mergelements[cellInfo.rowIndex]) {
                            this.mergelements[cellInfo.rowIndex] = {};
                        }
                        // this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = cellInfo.cellElement;
                    }
                }
                else {
                    if (!this.mergelements[cellInfo.rowIndex]) {
                        this.mergelements[cellInfo.rowIndex] = {};
                    }
                }
            }
            else {
                if (!this.mergelements[cellInfo.rowIndex]) {
                    this.mergelements[cellInfo.rowIndex] = {};
                }
            }
        }
    };
    ReportCollectionToClassComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportCollectionToClassComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportCollectionToClassComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportCollectionToClassComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    ReportCollectionToClassComponent.prototype.edit = function (data) {
        window.open("/system/invoice-buy/edit-invoice/" + data.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"])
    ], ReportCollectionToClassComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportCollectionToClassComponent.prototype, "findData", void 0);
    ReportCollectionToClassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-collection-to-class',
            template: __webpack_require__(/*! ./report-collection-to-class.component.html */ "./src/app/modules/report/components/forder-student/report-collection-to-class/report-collection-to-class.component.html"),
            styles: [__webpack_require__(/*! ./report-collection-to-class.component.scss */ "./src/app/modules/report/components/forder-student/report-collection-to-class/report-collection-to-class.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ReportCollectionToClassComponent);
    return ReportCollectionToClassComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/forder-student/report-dont-collection-student/report-dont-collection-student.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/forder-student/report-dont-collection-student/report-dont-collection-student.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\"\r\n                [dataSource]=\"dataSource\"\r\n                [showRowLines]=\"true\"\r\n                [allowColumnReordering]=\"true\"\r\n                [allowColumnResizing]=\"true\"\r\n                [showBorders]=\"true\"\r\n                [columnMinWidth]=\"20\"\r\n                [columnAutoWidth]=\"true\"\r\n                [wordWrapEnabled]=\"true\"\r\n                (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n                (onRowPrepared)=\"onRowPrepared($event)\"\r\n                (onRowUpdated)=\"onRowUpdated($event)\"\r\n                (onContentReady)=\"onContentReady($event)\"\r\n                (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column dataField=\"order\" allowMerge=\"true\" caption=\"STT\" [width]=\"5+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n\r\n    <dxi-column caption=\"Mã HS-SV\" dataField=\"code\" alignment=\"center\" [width]=\"11+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tên HS-SV\" dataField=\"name\" [width]=\"16+'%'\" alignment=\"left\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tên lớp\" dataField=\"class_code\" [width]=\"8+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"student_reduce_rate_code\" caption=\"Tỷ lệ miễn giảm HP\" [width]=\"14+'%'\" alignment=\"center\">\r\n    <dxo-lookup [dataSource]=\"redues\" valueExpr=\"code\" displayExpr=\"name\"></dxo-lookup>\r\n   </dxi-column>\r\n    <dxi-column caption=\"Mã khoản thu\" dataField=\"product_code\" alignment=\"center\" [width]=\"12+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tên khoản thu\" dataField=\"product_name\" [width]=\"24+'%'\" alignment=\"left\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tháng thu học phí\" dataField=\"school_fee_month\" alignment=\"center\" [width]=\"11+'%'\">\r\n    </dxi-column>\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager\r\n      [showPageSizeSelector]=\"true\"\r\n      [allowedPageSizes]=\"[15, 50, 100]\"\r\n      [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\"\r\n      infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/forder-student/report-dont-collection-student/report-dont-collection-student.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/forder-student/report-dont-collection-student/report-dont-collection-student.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/forder-student/report-dont-collection-student/report-dont-collection-student.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/forder-student/report-dont-collection-student/report-dont-collection-student.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ReportDontCollectionStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDontCollectionStudentComponent", function() { return ReportDontCollectionStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library/public/v-string.service */ "./src/app/core/library/public/v-string.service.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ReportDontCollectionStudentComponent = /** @class */ (function () {
    function ReportDontCollectionStudentComponent(authService, modalService, reportService, vatService, translate) {
        this.authService = authService;
        this.modalService = modalService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ReportDontCollectionStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = this.authService.getCurrentUser();
        var mst = _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        var sub2 = this.vatService.getConfig().subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.configs = rs.data.configs;
                var _obj = rs.data.configs.filter(function (p) { return p.name === 'system_parameter'; })[0];
                if (_obj) {
                    _this.system_parameter = JSON.parse(_obj.value);
                }
            }
            else {
                // Library.notify('Có lỗi khi tải cấu hình', 'error');
            }
        }, function (err) {
        }, function () {
            sub2.unsubscribe();
        });
        this.redues = this.findData.redues;
        this.loadList(null);
    };
    ReportDontCollectionStudentComponent.prototype.loadList = function (findByData) {
        var data = {
            report: {
                study_year: this.findData.study_year,
                school_fee_months: this.findData.school_fee_months,
                class_codes: this.findData.class_codes,
                product_codes: this.findData.product_codes,
            }
        };
        if (findByData) {
            data = {
                report: {
                    study_year: findByData.study_year,
                    school_fee_months: findByData.school_fee_months,
                    class_codes: findByData.class_codes,
                    product_codes: findByData.product_codes,
                }
            };
        }
        this.dataSource = {};
        this.dataSource.store = this.reportService.getAllCollectionToClass(data);
    };
    ReportDontCollectionStudentComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportDontCollectionStudentComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportDontCollectionStudentComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportDontCollectionStudentComponent.prototype.onCellPrepared = function (cellInfo) {
        if (cellInfo.rowType === 'data') {
            if (cellInfo.rowIndex > 0 && cellInfo.column.command !== 'edit') {
                if (cellInfo.component.cellValue(cellInfo.rowIndex - 1, cellInfo.column.dataField) == cellInfo.value) {
                    if (cellInfo.component.cellValue(cellInfo.rowIndex - 1, cellInfo.column.dataField)) {
                        var prev = this.mergelements[cellInfo.rowIndex - 1][cellInfo.column.dataField];
                        if (!this.mergelements[cellInfo.rowIndex]) {
                            this.mergelements[cellInfo.rowIndex] = {};
                        }
                        this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = prev;
                        if (prev) {
                            // cellInfo.cellElement.css('display', 'none');
                            var span = prev.attr('rowspan');
                            if (span) {
                                prev.attr('rowspan', Number(span) + 1);
                            }
                            else {
                                prev.attr('rowspan', 2);
                            }
                        }
                    }
                    else {
                        if (!this.mergelements[cellInfo.rowIndex]) {
                            this.mergelements[cellInfo.rowIndex] = {};
                        }
                        // this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = cellInfo.cellElement;
                    }
                }
                else {
                    if (!this.mergelements[cellInfo.rowIndex]) {
                        this.mergelements[cellInfo.rowIndex] = {};
                    }
                }
            }
            else {
                if (!this.mergelements[cellInfo.rowIndex]) {
                    this.mergelements[cellInfo.rowIndex] = {};
                }
            }
        }
    };
    ReportDontCollectionStudentComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportDontCollectionStudentComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportDontCollectionStudentComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportDontCollectionStudentComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    ReportDontCollectionStudentComponent.prototype.edit = function (data) {
        window.open("/system/invoice-buy/edit-invoice/" + data.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"])
    ], ReportDontCollectionStudentComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportDontCollectionStudentComponent.prototype, "findData", void 0);
    ReportDontCollectionStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-dont-collection-student',
            template: __webpack_require__(/*! ./report-dont-collection-student.component.html */ "./src/app/modules/report/components/forder-student/report-dont-collection-student/report-dont-collection-student.component.html"),
            styles: [__webpack_require__(/*! ./report-dont-collection-student.component.scss */ "./src/app/modules/report/components/forder-student/report-dont-collection-student/report-dont-collection-student.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_5__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ReportDontCollectionStudentComponent);
    return ReportDontCollectionStudentComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/hospital-with-vat-major/hospital-with-vat-major.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/report/components/hospital-with-vat-major/hospital-with-vat-major.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"20\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column caption=\"Thuế suất\" dataField=\"vat_export\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tiền thuế\" alignment=\"center\" [format]=\"formatter.tong_tien\">\r\n      <dxi-column caption=\"Hóa đơn điều chỉnh\" dataField=\"amount_vat_ajust\" alignment=\"center\"\r\n        [format]=\"formatter.tong_tien\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Hóa đơn thay thế\" dataField=\"amount_vat_replace\" alignment=\"center\"\r\n        [format]=\"formatter.tong_tien\">\r\n      </dxi-column>\r\n    </dxi-column>\r\n    <dxi-column caption=\"Doanh thu trước thuế\">\r\n      <dxi-column caption=\"Hóa đơn điều chỉnh\" dataField=\"amount_ajust\" alignment=\"center\"\r\n        [format]=\"formatter.tong_tien\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Hóa đơn thay thế\" dataField=\"amount_replace\" alignment=\"center\"\r\n        [format]=\"formatter.tong_tien\">\r\n      </dxi-column>\r\n    </dxi-column>\r\n    <dxi-column caption=\"Doanh thu sau thuế\" alignment=\"center\" [format]=\"formatter.tong_tien\">\r\n      <dxi-column caption=\"Hóa đơn điều chỉnh\" dataField=\"amount_after_vat_ajust\" alignment=\"center\"\r\n        [format]=\"formatter.tong_tien\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Hóa đơn thay thế\" dataField=\"amount_after_vat_replace\" alignment=\"center\"\r\n        [format]=\"formatter.tong_tien\">\r\n      </dxi-column>\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ghi chú\" dataField=\"total_payment\" alignment=\"center\" [format]=\"formatter.tong_tien\">\r\n    </dxi-column>\r\n  </dx-data-grid>\r\n</div>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/report/components/hospital-with-vat-major/hospital-with-vat-major.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/report/components/hospital-with-vat-major/hospital-with-vat-major.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-datagrid-summary-item.dx-datagrid-text-content.dx-datagrid-group-text-content{color:red}.dx-datagrid-summary-item{color:red;background-color:yellow}.mergecells{display:table-cell;vertical-align:middle !important;border-color:rgba(61,70,109,0.5) !important;border-style:solid !important;border-width:0.2px 0.2px 0.2px 0.2px !important;background:white !important;color:black !important}.mergecellselected{background:rgba(175,21,30,0.8) !important;color:white !important}\n"

/***/ }),

/***/ "./src/app/modules/report/components/hospital-with-vat-major/hospital-with-vat-major.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/report/components/hospital-with-vat-major/hospital-with-vat-major.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: HospitalWithVatMajorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalWithVatMajorComponent", function() { return HospitalWithVatMajorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HospitalWithVatMajorComponent = /** @class */ (function () {
    function HospitalWithVatMajorComponent(
    // public bsModalRef: BsModalRef,
    authService, modalService, reportService, vatService, translate, vPreviewInvService) {
        this.authService = authService;
        this.modalService = modalService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.vPreviewInvService = vPreviewInvService;
        this.lstfrmData = [];
        this.dataSource = {};
        this.groupTemplate = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
        this.groupIndexKCT = 0;
        this.groupIndex0 = 0;
        this.groupIndex5 = 0;
        this.groupIndex10 = 0;
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    HospitalWithVatMajorComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        this.loadList(null);
    };
    HospitalWithVatMajorComponent.prototype.loadList = function (findByData) {
        var _this = this;
        //  Library.showloading();
        var data = {
            "report": {
                "from_date": this.findData.from_date,
                "to_date": this.findData.to_date,
                "tax_code": "",
                "customer_type": this.findData.customer_type,
                "is_view": this.findData.is_view,
            }
        };
        if (findByData) {
            data = {
                "report": {
                    "from_date": findByData.from_date,
                    "to_date": findByData.to_date,
                    "tax_code": "",
                    "customer_type": findByData.customer_type,
                    "is_view": findByData.is_view
                }
            };
        }
        this.reportService.getHospitalWithVatMajor(data).subscribe(function (res) {
            var keyArray = Object.keys(res.data);
            _this.dataSource = Object.values(res.data);
            for (var i = 0; i < _this.dataSource.length; i++) {
                _this.dataSource[i]["vat_export"] = keyArray[i];
            }
        });
    };
    HospitalWithVatMajorComponent.prototype.calculateNetRevenueTotal = function (options) {
        if (options.name === 'amount') {
            options.totalValue = 1000000;
        }
        if (options.name === 'amount_vat') {
            options.totalValue = 2000000;
        }
    };
    HospitalWithVatMajorComponent.prototype.GetDisplayText = function (d) {
        return d.data.collapsedItems ? d.data.collapsedItems[0].groupName : d.data.items[0].groupName;
    };
    HospitalWithVatMajorComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    HospitalWithVatMajorComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    HospitalWithVatMajorComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    HospitalWithVatMajorComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    HospitalWithVatMajorComponent.prototype.onCellPrepared = function (cellInfo) {
    };
    HospitalWithVatMajorComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    HospitalWithVatMajorComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    HospitalWithVatMajorComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    HospitalWithVatMajorComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    HospitalWithVatMajorComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    HospitalWithVatMajorComponent.prototype.view = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.invoice_id);
            }
            var dataView = this.vatService.taodulieuXemMau(ids);
            dataView['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(dataView);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    HospitalWithVatMajorComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], HospitalWithVatMajorComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HospitalWithVatMajorComponent.prototype, "findData", void 0);
    HospitalWithVatMajorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hospital-with-vat-major',
            template: __webpack_require__(/*! ./hospital-with-vat-major.component.html */ "./src/app/modules/report/components/hospital-with-vat-major/hospital-with-vat-major.component.html"),
            styles: [__webpack_require__(/*! ./hospital-with-vat-major.component.scss */ "./src/app/modules/report/components/hospital-with-vat-major/hospital-with-vat-major.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__["ViewInvoiceService"]])
    ], HospitalWithVatMajorComponent);
    return HospitalWithVatMajorComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/report/components/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n  <div class=\"col-md-8\" style=\"padding-right: 0px\">\r\n    <div *ngIf=\"!isTypeStudent\" class=\"report pull-left\">\r\n      <div class=\"search-date\">\r\n        <div class=\"column\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.export_period}}</div>\r\n            <div class=\"value\">\r\n              <dx-select-box [items]=\"exportSchedules\" displayExpr=\"name\" valueExpr=\"code\"\r\n                (onValueChanged)=\"onExportSchedules($event)\" [value]=\"exportSchedulesDefault\"\r\n                style=\"margin-right: 0px;\">\r\n              </dx-select-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"column day\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.from_date}}</div>\r\n            <div class=\"value\">\r\n              <dx-date-box [(value)]=\"startDate\" [useMaskBehavior]=\"true\" [(max)]=\"endDate\" type=\"date\"\r\n                [displayFormat]=\"'dd/MM/yyyy'\" (onValueChanged)=\"onStartDate($event)\">\r\n              </dx-date-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"column day\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.to_date}}</div>\r\n            <div class=\"value\">\r\n              <dx-date-box [(value)]=\"endDate\" [useMaskBehavior]=\"true\" [(min)]=\"startDate\" type=\"date\"\r\n                [displayFormat]=\"'dd/MM/yyyy'\" (onValueChanged)=\"onEndDate($event)\">\r\n              </dx-date-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"column\" *ngIf=\"isVisibleInvoiceType\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.GRID.TEMPLATE.invoice_type}}</div>\r\n            <div class=\"value\">\r\n              <dx-select-box [items]=\"invoiceTypeNames\" displayExpr=\"name\" valueExpr=\"code\" [value]=\"invoiceTypeDefault\"\r\n                (onValueChanged)=\"onInvoiceType($event)\">\r\n              </dx-select-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Nhóm loại hóa đơn -->\r\n        <div class=\"column\" *ngIf=\"showGroupTypeInvoice()\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.GRID.TEMPLATE.invoice_type}}</div>\r\n            <div class=\"value\">\r\n              <dx-select-box [items]=\"arrGroupTypeInvoice\" displayExpr=\"name\" valueExpr=\"code\" [value]=\"valueGroupTypeInvoice\"\r\n                (onValueChanged)=\"onChangeGroupTypeInvoice($event)\">\r\n              </dx-select-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"column\" *ngIf=\"isVisibleTemplate\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.invoice_form}}</div>\r\n            <div class=\"value\">\r\n              <dx-select-box [items]=\"templates\" displayExpr=\"name\" valueExpr=\"template_id\" [(value)]=\"templateDefault\"\r\n                (onValueChanged)=\"onTemplate($event)\">\r\n              </dx-select-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"search-student\" style=\"width: 30%\" *ngIf=\"isVisibleTemplate && typeCode != 'detail-receipt'\">\r\n          <div class=\"field\">\r\n            <div class=\"label\" style=\"width: 91px\">{{_translate.CONTROLL.LABEL.importer}}</div>\r\n            <div class=\"value\" style=\"width:59.5%\">\r\n              <app-dropdown-checkbox [list]=\"valueImporter\" (shareCheckedList)=\"getChecklist($event, 'importer')\"\r\n                [setNameSelector]=\"'người lập'\">\r\n              </app-dropdown-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Nơi xuất hóa đơn -->\r\n        <div *ngIf=\"isReportHospitalDetail\" class=\"column day\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.export_place}}</div>\r\n            <div class=\"value\">\r\n              <dx-drop-down-box [(value)]=\"exportPlace\" valueExpr=\"code\" displayExpr=\"name\" placeholder=\"Select...\"\r\n                #gridBox9 [dataSource]=\"exportPlaces\">\r\n                <div *dxTemplate=\"let data of 'content'\">\r\n                  <dx-tree-view [dataSource]=\"exportPlaces\" dataStructure=\"plain\" keyExpr=\"code\"\r\n                    selectionMode=\"multiple\" showCheckBoxesMode=\"selectAll\" [selectNodesRecursive]=\"false\"\r\n                    displayExpr=\"name\" [selectByClick]=\"true\" (onSelectionChanged)=\"onExportPlaceSelectChanged($event)\">\r\n                  </dx-tree-view>\r\n                </div>\r\n              </dx-drop-down-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Mẫu hóa đơn -->\r\n        <div *ngIf=\"isReportHospitalDaily\" class=\"column day\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.invoice_form}}</div>\r\n            <div class=\"value\">\r\n              <dx-drop-down-box [(value)]=\"invoiceTypeName\" valueExpr=\"template_id\" displayExpr=\"name\"\r\n                placeholder=\"Select...\" #gridBox9 [dataSource]=\"templatesHospital\">\r\n                <div *dxTemplate=\"let data of 'content'\">\r\n                  <dx-tree-view [dataSource]=\"templatesHospital\" dataStructure=\"plain\" keyExpr=\"template_id\"\r\n                    selectionMode=\"multiple\" showCheckBoxesMode=\"selectAll\" [selectNodesRecursive]=\"false\"\r\n                    displayExpr=\"name\" [selectByClick]=\"true\"\r\n                    (onSelectionChanged)=\"onInvoiceTypeNamesSelectChanged($event)\">\r\n                  </dx-tree-view>\r\n                </div>\r\n              </dx-drop-down-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Loại khách hàng bệnh viện VAT -->\r\n        <div class=\"column\" *ngIf=\"isReportHospitalVAT\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.customer_type}}</div>\r\n            <div class=\"value\">\r\n              <dx-select-box [items]=\"customerTypes\" displayExpr=\"name\" valueExpr=\"code\"\r\n                (onValueChanged)=\"onCustomerChanged($event)\" [value]=\"customerTypeSingle\">\r\n              </dx-select-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Loại khách hàng -->\r\n        <div *ngIf=\"isReportHospitalDetail\" class=\"column\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.customer_type}}</div>\r\n            <div class=\"value\">\r\n              <dx-drop-down-box [(value)]=\"customerType\" valueExpr=\"code\" displayExpr=\"name\" placeholder=\"Select...\"\r\n                #gridBox3 [dataSource]=\"customerTypes\">\r\n                <div *dxTemplate=\"let data of 'content'\">\r\n                  <dx-tree-view [dataSource]=\"customerTypes\" dataStructure=\"plain\" keyExpr=\"code\"\r\n                    selectionMode=\"multiple\" showCheckBoxesMode=\"selectAll\" [selectNodesRecursive]=\"false\"\r\n                    displayExpr=\"name\" [selectByClick]=\"true\" (onSelectionChanged)=\"onCustomerTypesChanged($event)\">\r\n                  </dx-tree-view>\r\n                </div>\r\n              </dx-drop-down-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Trạng thái xử lý -->\r\n        <div *ngIf=\"isReportHospital\" class=\"column day\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.processing_status}}</div>\r\n            <div class=\"value\">\r\n              <dx-drop-down-box [(value)]=\"adjustmentType\" valueExpr=\"code\" displayExpr=\"name\" placeholder=\"Select...\"\r\n                #gridBox10 [dataSource]=\"adjustmentTypes\">\r\n                <div *dxTemplate=\"let data of 'content'\">\r\n                  <dx-tree-view [dataSource]=\"adjustmentTypes\" dataStructure=\"plain\" keyExpr=\"code\"\r\n                    selectionMode=\"multiple\" showCheckBoxesMode=\"selectAll\" [selectNodesRecursive]=\"false\"\r\n                    displayExpr=\"name\" [selectByClick]=\"true\" (onSelectionChanged)=\"onAdjustmentTypesChanged($event)\">\r\n                  </dx-tree-view>\r\n                </div>\r\n              </dx-drop-down-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"search-student\" style=\"width: 30%\" *ngIf=\"accountType === 'HS-SV' && isShowClass\">\r\n          <div class=\"field\">\r\n            <div class=\"label\" style=\"width: 91px\">{{_translate.CONTROLL.LABEL.class}}</div>\r\n            <div class=\"value\" style=\"width:59.5%\">\r\n              <app-dropdown-checkbox [list]=\"classTypeNamesDetails\"\r\n                (shareCheckedList)=\"getChecklist($event, 'class-details')\" [setNameSelector]=\"'lớp'\">\r\n              </app-dropdown-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"invoice-type\">\r\n      </div>\r\n      \r\n      <div *ngIf=\"configSystems.system_parameter.view_subsidiary_report && isVisibleCompany\" class=\"cong-ty\">\r\n        <div class=\"column\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">\r\n              {{_translate.CONTROLL.LABEL.customer_name}}\r\n            </div>\r\n            <div class=\"value\">\r\n              <dx-drop-down-box [(value)]=\"IdCompanys\" valueExpr=\"id\" displayExpr=\"mstName\" placeholder=\"Select...\"\r\n                #gridBox10 [dataSource]=\"list_company\">\r\n                <div *dxTemplate=\"let data of 'content'\">\r\n                  <dx-tree-view [dataSource]=\"list_company\" dataStructure=\"plain\" keyExpr=\"id\" selectionMode=\"multiple\"\r\n                    showCheckBoxesMode=\"selectAll\" [selectNodesRecursive]=\"false\" displayExpr=\"mstName\"\r\n                    [selectByClick]=\"true\" (onSelectionChanged)=\"onChangeUnit($event)\" class=\"luoi-cay\">\r\n                  </dx-tree-view>\r\n                </div>\r\n              </dx-drop-down-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div *ngIf=\"isTypeStudent\" class=\"report pull-left\">\r\n      <div class=\"search-date\">\r\n        <div class=\"column\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.study_year}}</div>\r\n            <div class=\"value\">\r\n              <dx-select-box [items]=\"arrYear\" displayExpr=\"name\" valueExpr=\"code\"\r\n                (onValueChanged)=\"onExportSchedulesStudent($event)\" [value]=\"valueYearDefault\">\r\n              </dx-select-box>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"search-student\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.collection_month}}</div>\r\n            <div class=\"value\">\r\n              <app-dropdown-checkbox [list]=\"arrCollectionMonth\"\r\n                (shareCheckedList)=\"getChecklist($event,'collection_month')\" [setNameSelector]=\"'tháng'\">\r\n              </app-dropdown-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"search-date\">\r\n        <div class=\"search-student\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.CONTROLL.LABEL.class}}</div>\r\n            <div class=\"value\">\r\n              <app-dropdown-checkbox [list]=\"classTypeNames\" (shareCheckedList)=\"getChecklist($event,'class')\"\r\n                [setNameSelector]=\"'lớp'\">\r\n              </app-dropdown-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"search-student\">\r\n          <div class=\"field\">\r\n            <div class=\"label\">{{_translate.GRID.REVENUE.revenue_code}}</div>\r\n            <div class=\"value\">\r\n              <app-dropdown-checkbox [list]=\"productsTypeNames\" (shareCheckedList)=\"getChecklist($event,'revenue_code')\"\r\n                [setNameSelector]=\"'khoản thu'\">\r\n              </app-dropdown-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\" style=\"margin-top:-2px;padding-left: 0px\">\r\n    <div class=\"pull-left button-panel\">\r\n      <dx-button class=\"pull-right\" *ngIf=\"isVisibleExExcel\" id=\"add\" (click)=\"exportExcel()\"\r\n        icon=\"{{_translate.ICONS.excel}}\" text=\"{{_translate.CONTROLL.BUTTON.export_excel}}\" type=\"default\"></dx-button>\r\n      <dx-button class=\"pull-right\" style=\"margin-right: 5px\" *ngIf=\"isVisibleExXml\" id=\"edit\" (click)=\"exportXml()\"\r\n        icon=\"{{_translate.ICONS.xml}}\" text=\"{{_translate.CONTROLL.BUTTON.export_xml}}\" type=\"default\"></dx-button>\r\n      <dx-button id=\"df\" class=\"pull-right\" style=\"margin-right: 5px\" (click)=\"search()\" icon=\"fa fa-search\"\r\n        text=\"{{_translate.CONTROLL.LABEL.search}}\" type=\"default\"></dx-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"report-content\">\r\n  <div class=\"row\">\r\n    <!-- Menu trái -->\r\n    <div class=\"col-md-3\" *ngIf=\"visibleLeft;else other_content\">\r\n      <div class=\"list-report\">\r\n        <div>\r\n          <div style=\"width: 287px;float: left;\" class=\"title-list text-center\">\r\n            {{_translate.CONTROLL.LABEL.report_type}}</div>\r\n          <dx-button id=\"hideReport\" (click)=\"functionHide()\" icon=\"\\assets\\img\\Close.PNG\" type=\"default\"></dx-button>\r\n        </div>\r\n        <dx-list [items]=\"reportTypes\" displayExpr=\"text\" valueExpr=\"code\" [showSelectionControls]=\"true\"\r\n          selectionMode=\"single\" [(selectedItems)]=\"selectedItems\" (onSelectionChanged)=\"onSelectionChanged($event)\">\r\n        </dx-list>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Content -->\r\n    <div class=\"{{visibleLeft ? 'col-md-9 styleShow' : 'col-md-12 styleHide'}}\">\r\n      <div class=\"review\">\r\n        <ng-template #other_content>\r\n          <dx-button id=\"showReport\" [class]=\"classClick\" (click)=\"functionShow()\" icon=\"\\assets\\img\\Open.PNG\"\r\n            type=\"default\"></dx-button>\r\n        </ng-template>\r\n\r\n        <!-- Các báo cáo dạng bảng -->\r\n        <div class=\"show-img\" *ngIf=\"visibleReviewImg\">\r\n          <div *ngIf=\"titleReport\">\r\n            <h4 class=\"modal-title text-center\" style=\"margin-top: 10px\">{{titleReport}}</h4><br />\r\n          </div>\r\n          <ng-container [ngSwitch]=\"typeCode\">\r\n            <ng-container *ngSwitchCase=\"'bc26'\">\r\n              <app-report-bc26 [findData]=\"findData\"></app-report-bc26>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'misa'\">\r\n              <app-report-misa></app-report-misa>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'fast'\">\r\n              <app-report-fast-hassyu *ngIf=\"isHassyu\" [findData]=\"findData\"></app-report-fast-hassyu>\r\n              <app-report-fast *ngIf=\"!isHassyu\" [findData]=\"findData\"></app-report-fast>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'list'\">\r\n              <app-report-list [findData]=\"findData\"></app-report-list>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'declaration'\">\r\n              <app-report-declaration [findData]=\"findData\"></app-report-declaration>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'sold'\">\r\n              <app-report-list-invoice [findData]=\"findData\"></app-report-list-invoice>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'list-collection-to-class'\">\r\n              <app-report-collection-to-class [findData]=\"findDataStudent\"></app-report-collection-to-class>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'list-dont-collection-student'\">\r\n              <app-report-dont-collection-student [findData]=\"findDataStudent\"></app-report-dont-collection-student>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'list-invoice-buy'\">\r\n              <app-report-invoice-buy [findData]=\"findData\"></app-report-invoice-buy>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'revenue'\">\r\n              <app-report-revenue [findData]=\"findData\"></app-report-revenue>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'vat'\">\r\n              <app-report-vat [findData]=\"findData\"></app-report-vat>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'detail-product'\">\r\n              <app-report-detail-product [findData]=\"findDataDetails\" [templates]=\"templates\">\r\n              </app-report-detail-product>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'hospital'\">\r\n              <app-report-hospital-fee [findData]=\"findDataDetails\" [templates]=\"templates\"></app-report-hospital-fee>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'hospital-user'\">\r\n              <app-report-hospital-fee [typeCode]=\"typeCode\" [findData]=\"findDataDetails\" [templates]=\"templates\">\r\n              </app-report-hospital-fee>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'hospital-synthetic'\">\r\n              <app-report-hospital-synthesis [findData]=\"findData\" [templates]=\"templates\">\r\n              </app-report-hospital-synthesis>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"'usage-invoice'\">\r\n              <app-report-sse [findData]=\"findData\"></app-report-sse>\r\n            </ng-container>\r\n            <!-- Báo cáo tổng hợp hóa đơn theo ngày (Dùng riêng cho bệnh viện) -->\r\n            <ng-container *ngSwitchCase=\"'daily-summary-report-hospital'\">\r\n              <app-daily-summary-report-hospital [findData]=\"findDataHospital\"></app-daily-summary-report-hospital>\r\n            </ng-container>\r\n            <!-- Báo cáo tổng hợp mức thuế suất theo từng nhóm khách hàng (Dùng riêng cho bệnh viện) -->\r\n            <ng-container *ngSwitchCase=\"'report-customer-group'\">\r\n              <app-report-customer-group [findData]=\"findDataHospital\"></app-report-customer-group>\r\n            </ng-container>\r\n            <!-- Báo cáo chi tiết mức thuế suất theo từng nhóm khách hàng (Dùng riêng cho bệnh viện) -->\r\n            <ng-container *ngSwitchCase=\"'report-customer-detail'\">\r\n              <app-report-group-customer-detail [findData]=\"findDataHospital\"></app-report-group-customer-detail>\r\n            </ng-container>\r\n            <!-- Báo cáo chi tiết hóa đơn theo cơ sở - nhà thuốc (Dùng riêng cho bệnh viện) -->\r\n            <ng-container *ngSwitchCase=\"'detail-report-bill-pharmacy'\">\r\n              <app-detail-report-bill-pharmacy [findData]=\"findDataHospital\"></app-detail-report-bill-pharmacy>\r\n            </ng-container>\r\n            <!-- Báo cáo chi tiết chứng từ khấu trừ thuế  -->\r\n            <ng-container *ngSwitchCase=\"'license-export-detail'\">\r\n              <app-report-license-detail [findData]=\"findDataLicense\"></app-report-license-detail>\r\n            </ng-container>\r\n            <!-- Báo cáo sử dụng chứng từ khấu trừ thuế -->\r\n            <ng-container *ngSwitchCase=\"'license-export-used'\">\r\n              <app-license-export-used [findData]=\"findDataLicense\"></app-license-export-used>\r\n            </ng-container>\r\n            <!-- Báo cáo sử dụng chứng từ khấu trừ thuế -->\r\n            <ng-container *ngSwitchCase=\"'hospital-with-vat-major'\">\r\n              <app-hospital-with-vat-major [findData]=\"findDataHospital\"></app-hospital-with-vat-major>\r\n            </ng-container>\r\n            <!-- Báo cáo sử dụng biên lai -->\r\n            <ng-container *ngSwitchCase=\"'use-receipt'\">\r\n              <app-report-use-receipt [findData]=\"findData\" ></app-report-use-receipt>\r\n            </ng-container>\r\n            <!-- Báo cáo chi tiết biên lai -->\r\n            <ng-container *ngSwitchCase=\"'detail-receipt'\">\r\n              <app-report-detail-receipt [findData]=\"findData\" ></app-report-detail-receipt>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <!-- Các báo cáo dạng biểu đồ -->\r\n        <ng-container [ngSwitch]=\"typeVisibleChart\">\r\n          <ng-container *ngSwitchCase=\"'column_chart'\">\r\n            <div class=\"column-chart\">\r\n              <dx-chart [dataSource]=\"dataSourceColumnChart\" palette=\"soft\" [size]=\"sizeColumnChart\"\r\n                [valueAxis]=\"valueAxis\">\r\n                <dxo-series-template nameField=\"group_customer\">\r\n                </dxo-series-template>\r\n                <dxo-common-series-settings argumentField=\"date\" valueField=\"total_amount\" type=\"bar\"\r\n                  [ignoreEmptyPoints]=\"true\">\r\n                </dxo-common-series-settings>\r\n                <dxo-legend verticalAlignment=\"bottom\" horizontalAlignment=\"center\">\r\n                </dxo-legend>\r\n                <dxo-margin [bottom]=\"20\"></dxo-margin>\r\n                <dxo-export [enabled]=\"true\" [fileName]=\"fileNameColumnChart\"></dxo-export>\r\n                <dxo-title text=\"Doanh thu theo nhóm khách hàng\">\r\n                </dxo-title>\r\n                <dxo-tooltip [enabled]=\"true\" [customizeTooltip]=\"customizeTooltip\"></dxo-tooltip>\r\n              </dx-chart>\r\n              <!--  -->\r\n              <dx-chart id=\"chart\" [dataSource]=\"dataSourceColumnChartCustomer\" palette=\"soft\" [size]=\"sizeColumnChart\">\r\n                <dxi-series valueField=\"total_payment\" name=\"Doanh thu\" color=\"#5496D3\"></dxi-series>\r\n                <dxo-common-series-settings argumentField=\"name\" type=\"bar\" [ignoreEmptyPoints]=\"true\">\r\n                </dxo-common-series-settings>\r\n                <dxo-margin [bottom]=\"20\"></dxo-margin>\r\n                <dxo-export [enabled]=\"true\" [fileName]=\"fileNameColumnChart\"></dxo-export>\r\n                <!-- <dxo-title text=\"Doanh thu theo khách hàng\">\r\n                </dxo-title> -->\r\n                <!-- <dxo-legend verticalAlignment=\"top\" horizontalAlignment=\"center\">\r\n                </dxo-legend> -->\r\n                <dxo-title text=\"Doanh thu theo khách hàng\">\r\n                  <dxo-subtitle text=\"(ĐVT: triệu đồng)\"></dxo-subtitle>\r\n                </dxo-title>\r\n                <dxo-tooltip [enabled]=\"true\" [customizeTooltip]=\"customizeTooltip\"></dxo-tooltip>\r\n              </dx-chart>\r\n            </div>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'circle_chart'\">\r\n            <div class=\"circle-chart\">\r\n              <dx-pie-chart id=\"pie\" palette=\"bright\" [dataSource]=\"dataSourceCircleChart\" [size]=\"sizeCircleChart\">\r\n                <dxo-legend horizontalAlignment=\"center\" verticalAlignment=\"bottom\"></dxo-legend>\r\n                <dxo-export [enabled]=\"true\" [fileName]=\"fileNameCircleChart\"></dxo-export>\r\n                <dxi-series argumentField=\"name\" valueField=\"percent\">\r\n                  <dxo-label [visible]=\"true\" [customizeText]=\"customizeLabel\">\r\n                    <dxo-connector [visible]=\"true\" [width]=\"0.5\"></dxo-connector>\r\n                    <dxo-format precision=2></dxo-format>\r\n                  </dxo-label>\r\n                  <dxo-small-values-grouping mode=\"smallValueThreshold\" [threshold]=\"4.5\"></dxo-small-values-grouping>\r\n                </dxi-series>\r\n                <dxo-title text=\"Biểu đồ hình tròn\">\r\n                  <dxo-subtitle text=\"Doanh thu theo nhóm khách hàng (BC03DN/BC-iHOADON)\"></dxo-subtitle>\r\n                </dxo-title>\r\n              </dx-pie-chart>\r\n            </div>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'revenue_line_chart'\">\r\n            <div class=\"circle-chart\">\r\n              <dx-chart palette=\"violet\" [dataSource]=\"dataSourceRevenueLineChart\" [valueAxis]=\"valueAxisDoanhThu\">\r\n                <dxi-series valueField=\"revenue\" name=\"Doanh thu\" color=\"#5496D3\"></dxi-series>\r\n                <dxi-series valueField=\"cost\" name=\"Chi phí\" color=\"#AA0000\"></dxi-series>\r\n                <dxo-common-series-settings argumentField=\"month\" type=\"line\"></dxo-common-series-settings>\r\n                <dxo-margin [bottom]=\"20\"></dxo-margin>\r\n                <dxi-value-axis>\r\n                  <dxo-label [customizeText]=\"customizeText\"></dxo-label>\r\n                </dxi-value-axis>\r\n                <dxo-legend verticalAlignment=\"bottom\" horizontalAlignment=\"center\" itemTextPosition=\"bottom\">\r\n                </dxo-legend>\r\n                <dxo-title text=\"Doanh thu - Chi phí theo hóa đơn\">\r\n                </dxo-title>\r\n                <dxo-export [enabled]=\"true\"></dxo-export>\r\n                <dxo-tooltip [enabled]=\"true\" [customizeTooltip]=\"customizeTooltip\"></dxo-tooltip>\r\n              </dx-chart>\r\n              <dx-chart palette=\"violet\" [dataSource]=\"dataSourceRevenueLineChart\" [valueAxis]=\"valueAxis\">\r\n                <dxi-series valueField=\"issued_amount\" name=\"Lập - xuất hóa đơn\" color=\"#5496D3\"></dxi-series>\r\n                <dxo-common-series-settings argumentField=\"month\" type=\"line\"></dxo-common-series-settings>\r\n                <dxo-margin [bottom]=\"20\"></dxo-margin>\r\n                <dxo-legend verticalAlignment=\"bottom\" horizontalAlignment=\"center\" itemTextPosition=\"bottom\">\r\n                </dxo-legend>\r\n                <dxo-title text=\"Tình hình lập - xuất hóa đơn\">\r\n                </dxo-title>\r\n                <dxo-export [enabled]=\"true\"></dxo-export>\r\n                <dxo-tooltip [enabled]=\"true\" [customizeTooltip]=\"customizeTooltip\"></dxo-tooltip>\r\n              </dx-chart>\r\n              <dx-chart palette=\"violet\" [dataSource]=\"dataSourceRevenueLineChart\" [valueAxis]=\"valueAxis\">\r\n                <dxi-series valueField=\"adjustment_amount\" name=\"Điều chỉnh\" color=\"#5597D3\"></dxi-series>\r\n                <dxi-series valueField=\"replacement_amount\" name=\"Thay Thế\" color=\"#EC7828\"></dxi-series>\r\n                <dxi-series valueField=\"cancellation_amount\" name=\"Hủy\" color=\"#A3A3A3\"></dxi-series>\r\n                <dxo-common-series-settings argumentField=\"month\" type=\"line\"></dxo-common-series-settings>\r\n                <dxo-margin [bottom]=\"20\"></dxo-margin>\r\n                <dxo-legend verticalAlignment=\"bottom\" horizontalAlignment=\"center\" itemTextPosition=\"bottom\">\r\n                </dxo-legend>\r\n                <dxo-title text=\"Tình hình xử lý hóa đơn\">\r\n                </dxo-title>\r\n                <dxo-export [enabled]=\"true\"></dxo-export>\r\n                <dxo-tooltip [enabled]=\"true\" [customizeTooltip]=\"customizeTooltip\"></dxo-tooltip>\r\n              </dx-chart>\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- popup -->\r\n<dx-popup class=\"popup\" [width]=\"400\" [height]=\"120\" [showTitle]=\"true\" title=\"{{_translate.NOTIFY.processing}}\"\r\n  [dragEnabled]=\"false\" (onShowing)=\"onImportShowing($event)\" (onHiding)=\"onImportHiding($event)\"\r\n  [(visible)]=\"showPopup\">\r\n  <div *dxTemplate=\"let data of 'content'\">\r\n    <div style=\"height: 30px;\">\r\n      <dx-progress-bar [min]=\"0\" [max]=\"100\" [value]=\"valueProgress\" [statusFormat]=\"format\">\r\n      </dx-progress-bar>\r\n    </div>\r\n    <!-- <p style=\"height: 25px;\">\r\n        <span>{{thongbao}}</span>\r\n    </p> -->\r\n  </div>\r\n</dx-popup>"

/***/ }),

/***/ "./src/app/modules/report/components/index/index.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/report/components/index/index.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .report .column{width:30%;display:inline-block;margin:0;text-align:right}::ng-deep .report .company{width:56%;display:inline-flex;margin:0;text-align:right}::ng-deep .report .search-student{width:30%;display:inline-block;margin:0}::ng-deep .report .column .field{padding:5px 0}::ng-deep .report .day{width:30%}::ng-deep .report .day .field .value{width:56% !important}::ng-deep .report .day .field .dx-datebox{width:100% !important}::ng-deep .column .field>div,::ng-deep .search-student .field>div{display:inline-block;vertical-align:middle}::ng-deep .report .column .field .label{width:110px;margin-right:10px}@media screen and (max-width: 1367px){::ng-deep .report .column .field .label{width:100px}}::ng-deep .report .search-student .field .label{width:138px;margin-right:10px;text-align:right}::ng-deep .report .search-student .field .value{width:53.5%}::ng-deep .report .column .field .value{width:56%}::ng-deep .report .column .field .value .dx-selectbox{border-radius:0}::ng-deep .report .column .field .value .dx-datebox{border-radius:0}::ng-deep .report .column .field .value .dx-datebox .dx-texteditor-input{min-height:25px;max-height:25px;padding:3px 35px 3px 9px !important}::ng-deep .report .column .field .value .dx-texteditor-input{min-height:20px;max-height:25px}::ng-deep .report .search-date{margin:0;width:100%}::ng-deep .report .search-date .dx-texteditor-input{padding-top:5px !important;padding-bottom:4px}::ng-deep .report .cong-ty{margin:0 -17px;width:100%}::ng-deep .report .cong-ty .dx-texteditor-input{padding-top:5px !important;padding-bottom:4px}::ng-deep .report .cong-ty .dx-treeview-item{padding:1px 6px}::ng-deep .luoi-cay .dx-treeview-item{padding-top:1px}::ng-deep .report .cong-ty .column{width:100%}::ng-deep .report .cong-ty .column .field .value{width:82.4%}.pull-left{width:100%}.button-panel{margin-top:5px}.list-header .dx-selectbox{border-radius:0;display:inline-block;margin-right:8px;height:28px;max-height:32px}.list-header .dx-datebox{border-radius:0;display:inline-block;margin-right:8px;height:28px;max-height:32px}.title-list{font-weight:600;padding:8px 4px;background-color:#d8d8d8}.review{width:100%;height:100%;border:1px solid #999999;border-radius:2px;background-color:#fff;box-shadow:inset 0px 0px 0.5px 0.5px rgba(0,0,0,0.5)}.report-content .row .col-md-3{padding-right:0}.report-content .row .col-md-9{padding-left:5px}.column-chart{margin-left:20px;margin-top:10px}.circle-chart{margin-left:20px;margin-top:10px}.hide{position:absolute;z-index:1;left:0}.report-content .row{position:relative}.styleShow{float:right}.styleHide{float:right;padding-left:43px}::ng-deep .report .column .field .value .dx-texteditor.dx-editor-outlined{border-radius:0px}::ng-deep .trang-thai-thanh-toan .dx-texteditor-container{height:27px;width:440px}::ng-deep .trang-thai-thanh-toan .dx-texteditor.dx-editor-outlined{border-radius:0px}.lbl-don-vi{width:137px;margin-left:10px;margin-top:5px}\n"

/***/ }),

/***/ "./src/app/modules/report/components/index/index.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/report/components/index/index.component.ts ***!
  \********************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_search_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/search/shared */ "./src/app/modules/search/shared/index.ts");
/* harmony import */ var _export_xml_export_xml_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export-xml/export-xml.component */ "./src/app/modules/report/components/export-xml/export-xml.component.ts");
/* harmony import */ var _report_bc26_report_bc26_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../report-bc26/report-bc26.component */ "./src/app/modules/report/components/report-bc26/report-bc26.component.ts");
/* harmony import */ var _report_misa_report_misa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../report-misa/report-misa.component */ "./src/app/modules/report/components/report-misa/report-misa.component.ts");
/* harmony import */ var _report_revenue_report_revenue_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../report-revenue/report-revenue.component */ "./src/app/modules/report/components/report-revenue/report-revenue.component.ts");
/* harmony import */ var _report_vat_report_vat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../report-vat/report-vat.component */ "./src/app/modules/report/components/report-vat/report-vat.component.ts");
/* harmony import */ var _report_detail_product_report_detail_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../report-detail-product/report-detail-product.component */ "./src/app/modules/report/components/report-detail-product/report-detail-product.component.ts");
/* harmony import */ var _report_list_report_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../report-list/report-list.component */ "./src/app/modules/report/components/report-list/report-list.component.ts");
/* harmony import */ var _report_declaration_report_declaration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../report-declaration/report-declaration.component */ "./src/app/modules/report/components/report-declaration/report-declaration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_report_components_report_invoice_buy_report_invoice_buy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/report/components/report-invoice-buy/report-invoice-buy.component */ "./src/app/modules/report/components/report-invoice-buy/report-invoice-buy.component.ts");
/* harmony import */ var _modules_report_components_forder_student_report_collection_to_class_report_collection_to_class_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/report/components/forder-student/report-collection-to-class/report-collection-to-class.component */ "./src/app/modules/report/components/forder-student/report-collection-to-class/report-collection-to-class.component.ts");
/* harmony import */ var _modules_report_components_forder_student_report_dont_collection_student_report_dont_collection_student_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/report/components/forder-student/report-dont-collection-student/report-dont-collection-student.component */ "./src/app/modules/report/components/forder-student/report-dont-collection-student/report-dont-collection-student.component.ts");
/* harmony import */ var _modules_report_components_report_fast_hassyu_report_fast_hassyu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/report/components/report-fast-hassyu/report-fast-hassyu.component */ "./src/app/modules/report/components/report-fast-hassyu/report-fast-hassyu.component.ts");
/* harmony import */ var _modules_report_components_report_fast_report_fast_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/report/components/report-fast/report-fast.component */ "./src/app/modules/report/components/report-fast/report-fast.component.ts");
/* harmony import */ var _modules_report_components_report_list_invoice_report_list_invoice_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @modules/report/components/report-list-invoice/report-list-invoice.component */ "./src/app/modules/report/components/report-list-invoice/report-list-invoice.component.ts");
/* harmony import */ var _modules_report_components_report_hospital_fee_report_hospital_fee_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @modules/report/components/report-hospital-fee/report-hospital-fee.component */ "./src/app/modules/report/components/report-hospital-fee/report-hospital-fee.component.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var _modules_report_components_report_hospital_synthesis_report_hospital_synthesis_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @modules/report/components/report-hospital-synthesis/report-hospital-synthesis.component */ "./src/app/modules/report/components/report-hospital-synthesis/report-hospital-synthesis.component.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _modules_report_components_report_sse_report_sse_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @modules/report/components/report-sse/report-sse.component */ "./src/app/modules/report/components/report-sse/report-sse.component.ts");
/* harmony import */ var _report_license_detail_report_license_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../report-license-detail/report-license-detail.component */ "./src/app/modules/report/components/report-license-detail/report-license-detail.component.ts");
/* harmony import */ var _license_export_used_license_export_used_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../license-export-used/license-export-used.component */ "./src/app/modules/report/components/license-export-used/license-export-used.component.ts");
/* harmony import */ var _detail_report_bill_pharmacy_detail_report_bill_pharmacy_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../detail-report-bill-pharmacy/detail-report-bill-pharmacy.component */ "./src/app/modules/report/components/detail-report-bill-pharmacy/detail-report-bill-pharmacy.component.ts");
/* harmony import */ var _daily_summary_report_hospital_daily_summary_report_hospital_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../daily-summary-report-hospital/daily-summary-report-hospital.component */ "./src/app/modules/report/components/daily-summary-report-hospital/daily-summary-report-hospital.component.ts");
/* harmony import */ var _report_customer_group_report_customer_group_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../report-customer-group/report-customer-group.component */ "./src/app/modules/report/components/report-customer-group/report-customer-group.component.ts");
/* harmony import */ var _report_customer_group_detail_report_customer_group_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../report-customer-group-detail/report-customer-group-detail.component */ "./src/app/modules/report/components/report-customer-group-detail/report-customer-group-detail.component.ts");
/* harmony import */ var _hospital_with_vat_major_hospital_with_vat_major_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../hospital-with-vat-major/hospital-with-vat-major.component */ "./src/app/modules/report/components/hospital-with-vat-major/hospital-with-vat-major.component.ts");
/* harmony import */ var _report_use_receipt_report_use_receipt_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../report-use-receipt/report-use-receipt.component */ "./src/app/modules/report/components/report-use-receipt/report-use-receipt.component.ts");
/* harmony import */ var _report_detail_receipt_report_detail_receipt_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../report-detail-receipt/report-detail-receipt.component */ "./src/app/modules/report/components/report-detail-receipt/report-detail-receipt.component.ts");
/* harmony import */ var _config_sidebar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @config/sidebar */ "./src/app/config/sidebar.ts");
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
    function IndexComponent(reportService, modalService, authService, route, cdr, searchService, templateService) {
        var _this = this;
        this.reportService = reportService;
        this.modalService = modalService;
        this.authService = authService;
        this.route = route;
        this.cdr = cdr;
        this.searchService = searchService;
        this.templateService = templateService;
        this.reportTypes = [];
        this.selectedItems = [];
        this.titleReport = '';
        this.isReportHospitalDaily = false;
        this.isReportHospitalVAT = false;
        this.sReportHospitalVAT = false;
        this.isVisibleInvoiceType = false;
        this.isVisibleExXml = true;
        this.isVisibleExExcel = true;
        this.visibleLeft = true;
        this.isVisibleTemplate = false;
        this.classTypeNames = [];
        this.classTypeNamesDetails = [];
        this.invoiceType = '';
        this.valueGroupTypeInvoice = '';
        this.loaiPhanMemKeToan = '';
        this.maLoaiPhanMemKeToan = '';
        this.visibleReviewImg = true; //báo cáo hiển thị dạng bảng
        this.dataSourceColumnChart = [];
        this.dataSourceColumnChartCustomer = [];
        this.dataSourceCircleChart = [];
        this.dataSourceRevenueLineChart = [];
        this.dataSourceExportLineChart = [];
        this.dataSourceHandleLineChart = [];
        this.sizeColumnChart = { width: 900, height: 470 };
        this.sizeCircleChart = { width: 900, height: 450 };
        this.valueAxis = { min: 0, tickInterval: 1 };
        this.valueAxisDoanhThu = { min: 0 };
        this.fileNameColumnChart = 'bieu_do_hinh_cot_doanh_thu_theo_nhom_k_h';
        this.fileNameCircleChart = 'bieu_do_hinh_tron_doanh_thu_theo_nhom_k_h';
        this.arrYear = [];
        this.arrCollectionMonth = [];
        this.valueImporter = [];
        this.valueImporterDefault = [];
        this.isHassyu = false;
        this.exportPlace = [];
        this.customerType = [];
        this.exportPlaces = [];
        this.customerTypes = [];
        this.isReportHospital = false;
        this.isReportHospitalDetail = false;
        this.adjustmentType = [];
        this.adjustmentTypes = [];
        this.showPopup = false;
        this.companyIndex = 0;
        this.tempKiFile = 0;
        this.valueProgress = 0;
        this.errorImport = false;
        this.daXong = false;
        this.ganXong = false;
        this.isExportFailed = false;
        this.isVisibleCompany = false;
        this.lstErrExport = [];
        this.isGroupTypeInvoice = false;
        this.arrTemplate = [];
        this.listpermissions = [];
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ": " + percent + '%';
        };
        this.exportExcel = function () {
            if (!_this.reportPeriod && _this.accountType !== 'HS-SV') {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Kỳ báo cáo không đúng', 'error');
                return false;
            }
            if (_this.configSystems.system_parameter.view_subsidiary_report && _this.IdCompanys && _this.IdCompanys.length > 0) {
                _this.BaoCaoCongTy();
            }
            else {
                var fromDate = moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD');
                var toDate = moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD');
                var data = void 0;
                switch (_this.typeCode) {
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.bc26:
                        data = {
                            'report': {
                                'report_period': _this.reportPeriod,
                                'from_date': fromDate,
                                'to_date': toDate,
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.totalNumberInvoice:
                        data = {
                            'report': {
                                'report_period': _this.reportPeriod,
                                'from_date': fromDate,
                                'to_date': toDate,
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.misa:
                        data = {
                            'report': {
                                'from_date': fromDate,
                                'to_date': toDate,
                                'invoice_type': _this.invoiceType
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sse:
                        data = {
                            'report': {
                                'from_date': fromDate,
                                'to_date': toDate,
                                'invoice_type': _this.invoiceType
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.fast:
                        data = {
                            'report': {
                                'from_date': fromDate,
                                'to_date': toDate,
                                'invoice_type': _this.invoiceType
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.declaration:
                        data = {
                            'report': {
                                'report_period': _this.reportPeriod,
                                'from_date': fromDate,
                                'to_date': toDate,
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.list:
                        data = {
                            'report': {
                                'report_period': _this.reportPeriod,
                                'from_date': fromDate,
                                'to_date': toDate,
                                'tax_code': "",
                                'verify_code': ""
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenue:
                        data = {
                            'report': {
                                'from_date': fromDate,
                                'to_date': toDate,
                                'invoice_type': _this.invoiceType
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.vat:
                        data = {
                            'report': {
                                'from_date': fromDate,
                                'to_date': toDate,
                                'invoice_type': _this.invoiceType
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailProduct:
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sold:
                        data = {
                            report: {
                                from_date: fromDate,
                                to_date: toDate,
                                template_id: _this.templateId,
                                user_ids: _this.valueImporterDefault,
                                tax_code: "",
                                verify_code: "",
                                group_type_invoice: _this.valueGroupTypeInvoice
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalSynthetic:
                        data = {
                            report: {
                                from_date: fromDate,
                                to_date: toDate,
                                template_id: _this.templateId,
                                user_ids: _this.valueImporterDefault
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalFee:
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalUser:
                        data = {
                            report: {
                                from_date: fromDate,
                                to_date: toDate,
                                template_id: _this.templateId,
                                user_ids: _this.valueImporterDefault,
                                adjustment_types: _this.adjustmentType,
                                customer_types: _this.customerType,
                                export_places: _this.exportPlace,
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listInvoiceBuy:
                        data = {
                            'report': {
                                'report_period': _this.reportPeriod,
                                'from_date': fromDate,
                                'to_date': toDate,
                                'page': '1',
                                'limit': '15'
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listCollectionToClass:
                        data = {
                            'report': {
                                'study_year': _this.valueYearDefault,
                                'school_fee_months': _this.valueCollectionMonth,
                                'class_codes': _this.valueClass,
                                'product_codes': _this.valueRevenueCode
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listDontCollectionStudent:
                        data = {
                            'report': {
                                'study_year': _this.valueYearDefault,
                                'school_fee_months': _this.valueCollectionMonth,
                                'class_codes': _this.valueClass,
                                'product_codes': _this.valueRevenueCode
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportLicenseDetail:
                        data = {
                            'license': {
                                'from_date': moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                                'to_date': moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                                'period': _this.kytinhthue,
                                'type': "excel",
                                'is_view': false,
                                'period_type': _this.reportPeriod,
                                'page': 1,
                                'limit': 15,
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.licenseExportUsed:
                        data = {
                            'license': {
                                'from_date': moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                                'to_date': moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                                'period': _this.kytinhthue,
                                'type': "excel",
                                'is_view': false,
                                'period_type': _this.reportPeriod,
                                'page': 1,
                                'limit': 15
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReportBillPharmacy:
                        data = {
                            "report": {
                                "from_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                                "to_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                                "template_id": "",
                                "user_ids": [],
                                "tax_code": "",
                                "verify_code": "",
                                "export_place": _this.exportPlace,
                                "customer_type": _this.customerType,
                                "is_view": false,
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.dailySummaryReportHospital:
                        data = {
                            "report": {
                                "from_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                                "to_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                                "template_id": _this.invoiceTypeName,
                                "user_ids": [],
                                "tax_code": "",
                                "verify_code": "",
                                "export_place": _this.exportPlace,
                                "customer_type": _this.customerType,
                                "ajustment_type": _this.adjustmentType,
                                "is_view": false,
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportCustomerGroup:
                        data = {
                            "report": {
                                "from_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                                "to_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                                "template_id": "",
                                "user_ids": [],
                                "tax_code": "",
                                "verify_code": "",
                                "export_place": "",
                                "customer_type": _this.customerTypeSingle,
                                "is_view": false,
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportCustomerDetail:
                        data = {
                            "report": {
                                'report_period': _this.reportPeriod,
                                "from_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                                "to_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                                "template_id": "",
                                "user_ids": "",
                                "tax_code": "",
                                "verify_code": "",
                                "export_place": "",
                                "customer_type": _this.customerTypeSingle,
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalWithVatMajor:
                        data = {
                            "report": {
                                'report_period': _this.reportPeriod,
                                "from_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                                "to_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                                "tax_code": "",
                                "customer_type": _this.customerTypeSingle,
                                "is_view": false
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.useReceipt:
                        data = {
                            "report": {
                                'report_period': _this.reportPeriod,
                                "from_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                                "to_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                                "is_view": false
                            }
                        };
                        break;
                    case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReceipt:
                        data = {
                            "report": {
                                'report_period': _this.reportPeriod,
                                "from_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                                "to_date": moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                                "is_view": false,
                                "template_id": _this.templateId
                            }
                        };
                        break;
                    default:
                        break;
                }
                if (_this.typeCode) {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
                    if (_this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listCollectionToClass || _this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listDontCollectionStudent) {
                        var isExport = _this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listCollectionToClass;
                        _this.reportService.exportExceltoStudent(data, isExport).subscribe(function (res) {
                            if (res.status === 'success') {
                                var file = res.data.report;
                                _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Xuất file Excel thành công', 'success');
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(res.message, 'error');
                            }
                            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                        });
                    }
                    else {
                        var typeCode = _this.typeCode;
                        _this.reportService.exportExcel(data, typeCode).subscribe(function (res) {
                            if (res.status === 'success') {
                                var file = res.data.report;
                                _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Xuất file Excel thành công', 'success');
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(res.message, 'error');
                            }
                            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                        });
                    }
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Bạn phải chọn loại báo cáo', 'error');
                }
            }
        };
        this.exportXml = function () {
            if (_this.typeCode == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.declaration) {
                var loaiKy = "Quý";
                var period_type = "Q";
                if (_this.reportPeriod == "THANG") {
                    loaiKy = "Tháng";
                    period_type = "T";
                }
                var info_export_declaration_1;
                if (_this.configs.configs) {
                    _this.configs.configs.forEach(function (config) {
                        if (config.name === 'info_export_declaration') {
                            info_export_declaration_1 = JSON.parse(config.value);
                        }
                    });
                }
                var province_code_1 = "";
                if (_this.currentUser && _this.currentUser.account)
                    province_code_1 = _this.currentUser.account.tax_province_code;
                var province_name = "";
                var province = _this.tinhthanhDBHC.filter(function (p) { return p.code == province_code_1; })[0];
                if (province)
                    province_name = province.name;
                var dulieu = {
                    report_period: _this.reportPeriod,
                    from_date: moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                    to_date: moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                    period_type: period_type,
                    tax_period: _this.kytinhthue,
                    province_name: province_name,
                    create_date: moment__WEBPACK_IMPORTED_MODULE_4__(),
                    tax_agency_name: "",
                    tax_agency_code: "",
                    province_code: province_code_1,
                };
                var initialState = {
                    dulieu: dulieu,
                    citis: _this.tinhthanhDBHC,
                };
                if (_this.typeCode) {
                    _this.bsModalRef = _this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_25__["ReportDataInvoiceComponent"], {
                        class: 'modal-lg', initialState: initialState, backdrop: 'static',
                        keyboard: false
                    });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Bạn phải chọn loại báo cáo', 'error');
                }
            }
            else if (_this.typeCode == "license-export-used") {
                var data = {
                    'license': {
                        'from_date': moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                        'to_date': moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                        'period': _this.kytinhthue,
                        'type': "xml",
                        'is_view': false,
                        'period_type': _this.reportPeriod,
                        'page': 1,
                        'limit': 15
                    }
                };
                _this.reportService.exportXml(data, _this.typeCode).subscribe(function (res) {
                    if (res.status === 'success') {
                        var file = res.data.report;
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Xuất file xml thành công', 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(res.message, 'error');
                    }
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
                });
            }
            else {
                if (!_this.reportPeriod) {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Kỳ báo cáo không đúng', 'error');
                    return false;
                }
                var name_1 = _this.currentUser.account.name;
                var tax_code = _this.currentUser.account.tax_code;
                var info_export_declaration_2;
                if (_this.configs.configs) {
                    _this.configs.configs.forEach(function (config) {
                        if (config.name === 'info_export_declaration') {
                            info_export_declaration_2 = JSON.parse(config.value);
                        }
                    });
                }
                var invoiceTypes = JSON.parse(JSON.stringify(_this.invoiceTypeNames));
                var initialState = {
                    name: name_1,
                    tax_code: tax_code,
                    typeCode: _this.typeCode,
                    info_export_declaration: info_export_declaration_2,
                    citis: _this.citis,
                    reportPeriod: _this.reportPeriod,
                    from_date: moment__WEBPACK_IMPORTED_MODULE_4__(_this.startDate).format('YYYY-MM-DD'),
                    to_date: moment__WEBPACK_IMPORTED_MODULE_4__(_this.endDate).format('YYYY-MM-DD'),
                    invoiceTypeNames: invoiceTypes
                };
                if (_this.typeCode) {
                    _this.bsModalRef = _this.modalService.show(_export_xml_export_xml_component__WEBPACK_IMPORTED_MODULE_6__["ExportXmlComponent"], {
                        class: 'modal-lg full-width', initialState: initialState, backdrop: 'static',
                        keyboard: false
                    });
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Bạn phải chọn loại báo cáo', 'error');
                }
            }
        };
        this.customizeTooltip = function (arg) {
            return {
                text: _this.formatter.format(arg.valueText)
            };
        };
        this.customizeText = function (arg) {
            return _this.formatter.format(arg.value);
        };
        this._translate = this.authService.getTranslate();
        this.accountType = this.authService.getAccountType();
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getInvoiceTypeNames();
        this.configSystems = this.authService.getConfigs();
        this.getTemplates();
        this.getCurrentUser();
        this.getCitis();
        this.formatter = new Intl.NumberFormat('ja-JP');
        this.exportSchedules = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].layKyXuatHoaDonBaoCao(this._translate).schedule;
        if (this.configSystems.system_parameter.not_export_more_than_a_month) {
            this.exportSchedulesDefault = this.exportSchedules[7].code;
            this.startDate = this.exportSchedules[7].startDate;
            this.endDate = this.exportSchedules[7].endDate;
        }
        else {
            this.exportSchedulesDefault = this.exportSchedules[0].code;
            this.startDate = this.exportSchedules[0].startDate;
            this.endDate = this.exportSchedules[0].endDate;
        }
        this.reportPeriod = this.exportSchedules[0].reportPeriod;
        /** Công ty con */
        if (this.configSystems.system_parameter && this.configSystems.system_parameter.view_subsidiary_report && this.configSystems.system_parameter.list_company) {
            var CompanyP = new Object;
            CompanyP["id"] = "000-0000-0000-0000-0000-0000-0000";
            CompanyP["tax_code"] = this.currentUser.account.tax_code;
            CompanyP["unit_name"] = this.currentUser.account.name;
            var companys_1 = [];
            companys_1.push(CompanyP);
            if (this.configSystems.system_parameter.list_company)
                this.configSystems.system_parameter.list_company.forEach(function (item) {
                    companys_1.push(item);
                });
            this.list_company = companys_1;
            this.list_company.forEach(function (item) {
                item.mstName = item.tax_code + ' - ' + item.unit_name;
            });
        }
        this.laykytinhthue(this.exportSchedules[0]);
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(this.currentUser.account.tax_code);
        if (mst === '0106878852') {
            this.isHassyu = true;
        }
        this.route.data.subscribe(function (data) {
            _this.configs = data.configs[0];
            data.configs[0].configs.forEach(function (config) {
                if (config.name === 'system_parameter') {
                    switch (JSON.parse(config.value).accounting_software) {
                        case 'MISA':
                            _this.loaiPhanMemKeToan = 'MISA';
                            _this.maLoaiPhanMemKeToan = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.misa;
                            break;
                        case 'FAST':
                            _this.loaiPhanMemKeToan = 'FAST';
                            _this.maLoaiPhanMemKeToan = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.fast;
                            break;
                        case 'SSE':
                            _this.loaiPhanMemKeToan = 'SSE';
                            _this.maLoaiPhanMemKeToan = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sse;
                            break;
                        default:
                            break;
                    }
                }
            });
            _this.invoiceTypeNames = data.configs[1].DM_LOAI_HOA_DON;
            _this.redues = data.configs[1].DM_TY_LE_MIEN_GIAM_HOC_PHI;
            _this.exportPlaces = data.configs[1].DM_NOI_XUAT_HOA_DON;
            if (_this.exportPlaces) {
                _this.exportPlaces.push({ name: "HĐ không có nơi xuất hóa đơn", code: "khong_co" });
            }
            _this.customerTypes = data.configs[1].DM_NHOM_KHACH_HANG;
            if (_this.customerTypes) {
                _this.customerTypes.push({ name: "HĐ không có nhóm khách hàng", code: "khong_co" });
            }
            // this.customerTypeSingles.push({ name: "HĐ không có nhóm khách hàng", code: "is_null" })
            _this.adjustmentTypes = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_22__["VSelectBoxService"]._adjustmentTypes(_this._translate);
            _this.arrGroupTypeInvoice = _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_22__["VSelectBoxService"].groupTypeInvoice(_this._translate);
            if (_this.invoiceTypeNames) {
                _this.invoiceTypeNames.unshift({
                    code: '',
                    name: 'Tất cả'
                });
            }
            _this.invoiceTypeDefault = _this.invoiceTypeNames[0].code;
            _this.invoiceType = _this.invoiceTypeDefault;
            if (_this.accountType === 'HS-SV') {
                var moth = moment__WEBPACK_IMPORTED_MODULE_4__();
                var currentUser = _this.authService.getCurrentUser();
                _this.arrYear = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].listYears(currentUser.account.start_time_study, moth);
                _this.valueYearDefault = _this.arrYear[1].code;
                _this.arrCollectionMonth = _this.sortCollectionMonth(_this.valueYearDefault);
                _this.valueCollectionMonth = _this.returnValueSearchDefault(_this.arrCollectionMonth);
                var demo = JSON.stringify(data.configs[1].DM_LOP_HOC);
                _this.classTypeNames = JSON.parse(demo);
                if (_this.classTypeNames) {
                    _this.classTypeNames.unshift({
                        code: 'TAT_CA',
                        name: 'Tất cả'
                    });
                    _this.classTypeNames.forEach(function (item) { return item['checked'] = true; });
                    _this.valueClass = _this.returnValueSearchDefault(_this.classTypeNames);
                }
                _this.classTypeNamesDetails = JSON.parse(demo);
                if (_this.classTypeNamesDetails) {
                    _this.classTypeNamesDetails.unshift({
                        code: 'KHONG_CHON_LOP',
                        name: 'HĐ không chọn lớp'
                    });
                    _this.classTypeNamesDetails.unshift({
                        code: 'TAT_CA',
                        name: 'Tất cả'
                    });
                    _this.classTypeNamesDetails.forEach(function (item) { return item['checked'] = true; });
                    _this.valueClassDetails = _this.returnValueSearchDefault(_this.classTypeNamesDetails);
                }
                _this.productsTypeNames = data.configs[2];
                if (_this.productsTypeNames) {
                    _this.productsTypeNames.unshift({
                        code: 'TAT_CA',
                        name: 'Tất cả'
                    });
                    _this.productsTypeNames.forEach(function (item) { return item['checked'] = true; });
                    _this.valueRevenueCode = _this.returnValueSearchDefault(_this.productsTypeNames);
                }
            }
            _this.getUsers();
        });
    };
    IndexComponent.prototype.sortCollectionMonth = function (value) {
        if (value) {
            var arrYear = value.split('-');
            var arr = [];
            for (var i = 0; i < 13; i++) {
                if (i === 0) {
                    arr.push({ id: i, code: 'TAT_CA', name: "T\u1EA5t c\u1EA3", checked: true });
                }
                else if (i < 8 && i !== 0) {
                    arr.push({ id: 5 + i, code: "0" + i + "/" + arrYear[1], name: "Th\u00E1ng " + i + " - " + arrYear[1], checked: true });
                }
                else {
                    if (i < 10) {
                        arr.push({ id: i - 7, code: "0" + i + "/" + arrYear[0], name: "Th\u00E1ng " + i + " - " + arrYear[0], checked: true });
                    }
                    else {
                        arr.push({ id: i - 7, code: i + "/" + arrYear[0], name: "Th\u00E1ng " + i + " - " + arrYear[0], checked: true });
                    }
                }
            }
            var arrCode_1 = [];
            arr.forEach(function (item) { return arrCode_1.push(item.code); });
            return arr.sort(function (previosItem, currentItem) {
                return previosItem.id - currentItem.id;
            });
        }
        return [];
    };
    IndexComponent.prototype.functionHide = function () {
        this.visibleLeft = false;
        this.classClick = 'hide';
    };
    IndexComponent.prototype.functionShow = function () {
        this.classClick = 'show';
        this.visibleLeft = true;
    };
    IndexComponent.prototype.getSearch = function (v) {
        this.ReportBc26.loadList(this.findData);
    };
    IndexComponent.prototype.getUsers = function () {
        var _this = this;
        this.searchService.getUserAndListType(false).subscribe(function (rs) {
            if (Array.isArray(rs)) {
                if (rs[0].status == "success") {
                    _this.valueImporter = rs[0].data.users;
                    _this.valueImporter.unshift({
                        id: 'TAT_CA',
                        name: 'Tất cả'
                    });
                    _this.valueImporter.forEach(function (item) {
                        item['checked'] = false;
                        item['code'] = item['id'];
                    });
                    _this.valueImporterDefault = _this.returnValueImporter(_this.valueImporter);
                    _this.getList();
                }
            }
            return null;
        });
    };
    IndexComponent.prototype.getSelectedItemsKeys = function (items) {
        var result = [], that = this;
        items.forEach(function (item) {
            if (item.selected) {
                result.push(item.key);
            }
            if (item.items.length) {
                result = result.concat(that.getSelectedItemsKeys(item.items));
            }
        });
        return result;
    };
    IndexComponent.prototype.getList = function () {
        var _this = this;
        var currentUser = this.authService.getCurrentUser();
        this.listpermissions = currentUser.user.permissions.split(',');
        if (this.listpermissions) {
            this.reportTypes = [];
            var bc26 = this.listpermissions.filter(function (p) { return p === 'BC26/AC'; })[0];
            if (bc26) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bc26, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.bc26, mabaocao: bc26 });
            }
            var pmkt = this.listpermissions.filter(function (p) { return p === 'BC_PM_KE_TOAN'; })[0];
            if (pmkt) {
                this.reportTypes.push({
                    text: this._translate.CONTROLL.LABEL.bc_misa_fast + " (" + this.loaiPhanMemKeToan + ")",
                    code: "" + this.maLoaiPhanMemKeToan,
                    mabaocao: pmkt
                });
            }
            var list = this.listpermissions.filter(function (p) { return p === '01_1/GTGT'; })[0];
            if (list) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bk_ban_ra, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.list, mabaocao: list });
            }
            var tokhaiBanRa = this.listpermissions.filter(function (p) { return p === '03/DL-HĐĐT'; })[0];
            if (tokhaiBanRa) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.to_khai_ban_ra, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.declaration, mabaocao: tokhaiBanRa });
            }
            // hdmh
            var bangkemuavao = this.listpermissions.filter(function (p) { return p === '01_2/GTGT'; })[0];
            if (bangkemuavao)
                this.reportTypes.push({ text: 'Bảng kê hàng hóa dịch vụ mua vào (01_2/GTGT)', code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listInvoiceBuy, mabaocao: '01_2/GTGT' });
            if (this.accountType === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].khoidonvi.HSSV) {
                this.reportTypes.push({ text: 'Báo cáo tổng hợp tình hình thu tiền theo lớp (BC01TH/BC-iHOADON)', code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listCollectionToClass, mabaocao: 'BC01TH/BC-iHOADON' });
                this.reportTypes.push({
                    text: 'Tổng hợp danh sách học sinh chưa thu tiền (BC02TH/BC-iHOADON)',
                    code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listDontCollectionStudent,
                    mabaocao: 'BC02TH/BC-iHOADON'
                });
            }
            // Báo cáo tổng hợp doanh thu theo nhóm khách hàng (BC01DN/BC-iHOADON)
            var revenue = this.listpermissions.filter(function (p) { return p === 'BC01DN/BC-IHOADON'; })[0];
            if (revenue) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bc_th_nhomkh, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenue, mabaocao: revenue });
            }
            // Báo cáo theo mức thuế suất (BC01THUE/BC-iHOADON)
            var vat = this.listpermissions.filter(function (p) { return p === 'BC01THUE/BC-iHOADON'; })[0];
            if (vat) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bc_theo_muc_thue, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.vat, mabaocao: vat });
            }
            //Báo cáo chi tiết hóa đơn theo cơ sở - nhà thuốc (Dùng riêng cho bệnh viện)
            var detailReportBillPharmacy = this.listpermissions.filter(function (p) { return p === 'BC03BV/BC-IHOADON'; })[0];
            if (detailReportBillPharmacy) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.detail_report_bill_pharmacy, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReportBillPharmacy, mabaocao: detailReportBillPharmacy });
            }
            //Báo cáo tổng hợp hóa đơn theo ngày (Dùng riêng cho bệnh viện)
            var dailySummaryReportHospital = this.listpermissions.filter(function (p) { return p === 'BC02BV/BC-IHOADON'; })[0];
            if (dailySummaryReportHospital) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.daily_summary_report_hospital, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.dailySummaryReportHospital, mabaocao: dailySummaryReportHospital });
            }
            //Báo cáo tổng hợp mức thuế suất theo từng nhóm khách hàng (Dùng riêng cho bệnh viện)
            var reportCustomerGroup = this.listpermissions.filter(function (p) { return p === 'BC01BV/BC-IHOADON'; })[0];
            if (reportCustomerGroup) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.report_customer_group, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportCustomerGroup, mabaocao: reportCustomerGroup });
            }
            //BÁO CÁO TỔNG HỢP MỨC THUẾ SUẤT HĐ THAY THẾ VÀ HĐ ĐIỀU CHỈNH (DÙNG RIÊNG CHO BỆNH VIỆN)
            var hospitalWithVatMajor = this.listpermissions.filter(function (p) { return p === 'BC04BV/BC-IHOADON'; })[0];
            if (hospitalWithVatMajor) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.hospital_with_vat_major, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalWithVatMajor, mabaocao: hospitalWithVatMajor });
            }
            //Báo cáo chi tiết mức thuế suất theo từng nhóm khách hàng (Dùng riêng cho bệnh viện)
            var reportCustomerDetail = this.listpermissions.filter(function (p) { return p === '01_1/GTGT'; })[0];
            if (reportCustomerDetail) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.report_customer_detail, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportCustomerDetail, mabaocao: reportCustomerDetail });
            }
            // Báo cáo bảng kê hóa đơn bán ra
            var bangKeHoaDonBanRa = this.listpermissions.filter(function (p) { return p === 'BC08DN/BC-iHOADON'; })[0];
            if (bangKeHoaDonBanRa) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bk_hoa_don_ban_ra, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sold, mabaocao: bangKeHoaDonBanRa });
            }
            // Báo cáo thống kê tổng hóa đơn đã sử dụng
            var tongsohoadonsudung = this.listpermissions.filter(function (p) { return p === 'BC09SD/BC-iHOADON'; })[0];
            if (tongsohoadonsudung) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.total_used_number_inoivce, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.totalNumberInvoice, mabaocao: tongsohoadonsudung });
            }
            // Báo cáo chi tiết hàng hóa dịch vụ của hóa đơn (BC02DN/BC-iHOADON)
            var detail_product = this.listpermissions.filter(function (p) { return p === 'BC02DN/BC-iHOADON'; })[0];
            if (detail_product) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bc_ct_hang_hoa, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailProduct, mabaocao: detail_product });
            }
            // Báo cáo sử dụng chứng trừ khấu trừ thuế TNCN
            var license_export_used = this.listpermissions.filter(function (p) { return p === 'BC_LISENCE_USED'; })[0];
            if (license_export_used) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.license_export_used, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.licenseExportUsed, mabaocao: license_export_used });
            }
            // Báo cáo chi tiết chứng từ khấu trừ thuế TNCN
            var report_license_detail = this.listpermissions.filter(function (p) { return p === 'BC_LISENCE_DETAIL'; })[0];
            if (report_license_detail) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.report_license_detail, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportLicenseDetail, mabaocao: report_license_detail });
            }
            // Báo cáo tình hình sử dụng biên lai
            var report_receipt_used = this.listpermissions.filter(function (p) { return p === 'BC_RECEIPT_USED'; })[0];
            if (report_receipt_used) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.report_receipt_used, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.useReceipt, mabaocao: report_receipt_used });
            }
            // Báo cáo chi tiết biên lai
            var report_receipt_detail = this.listpermissions.filter(function (p) { return p === 'BC_RECEIPT_DETAIL'; })[0];
            if (report_receipt_detail) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.report_receipt_detail, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReceipt, mabaocao: report_receipt_detail });
            }
            if (this.accountType === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].khoidonvi.YTE) {
                // Báo cáo chi tiết thu viện phí cho khối bệnh viện
                var reportHospitalFees = this.listpermissions.filter(function (p) { return p === 'BC01YT/BC-iHOADON'; })[0];
                if (reportHospitalFees) {
                    this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bc_ct_thu_vien_phi, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalFee, mabaocao: reportHospitalFees });
                }
                // Báo cáo chi tiết thu viện phí theo người lập hóa đơn (BC02YT/BC-iHOADON)
                var reportHospitalUser = this.listpermissions.filter(function (p) { return p === 'BC02YT/BC-iHOADON'; })[0];
                if (reportHospitalUser) {
                    this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bc_ct_thu_vien_phi_theo_nguoi_lap, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalUser, mabaocao: reportHospitalUser });
                }
                // Báo cáo tổng hợp thu viện phí (BC03YT/BC-iHOADON)
                var reportHospitalSys = this.listpermissions.filter(function (p) { return p === 'BC03YT/BC-iHOADON'; })[0];
                if (reportHospitalSys) {
                    this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bc_tong_hop_thu_vien_phi, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalSynthetic, mabaocao: reportHospitalSys });
                }
            }
            // Báo cáo biểu đồ hình cột doanh thu theo khách hàng (BC03DN/BC-iHOADON)
            var column_chart = this.listpermissions.filter(function (p) { return p === 'BC03DN/BC-iHOADON'; })[0];
            if (column_chart) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bc_bdc_nhomkh, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart, mabaocao: column_chart });
            }
            // Báo cáo biểu đồ tình hình lập – xuất hóa đơn (BC07DN/BC-iHOADON)
            var revenue_line_chart = this.listpermissions.filter(function (p) { return p === 'BC07DN/BC-iHOADON'; })[0];
            if (revenue_line_chart) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bc_bd_lap_xuat_hd, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenueLineChart, mabaocao: revenue_line_chart });
            }
            // Báo cáo biểu đồ hình tròn doanh thu theo nhóm khách hàng (BC04DN/BC-iHOADON)
            var circle_chart = this.listpermissions.filter(function (p) { return p === 'BC04DN/BC-iHOADON'; })[0];
            if (circle_chart) {
                this.reportTypes.push({ text: this._translate.CONTROLL.LABEL.bc_bdt_nhomkh, code: _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart, mabaocao: circle_chart });
            }
        }
        this.findData = {
            typeCode: this.typeCode,
            reportPeriod: this.reportPeriod,
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            invoiceTypeNames: this.invoiceTypeNames,
            invoice_type: this.invoiceType,
            template_id: this.templateId,
            user_id: this.valueImporterDefault,
            group_type_invoice: this.valueGroupTypeInvoice
        };
        this.findDataDetails = {
            typeCode: this.typeCode,
            reportPeriod: this.reportPeriod,
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            invoiceTypeNames: this.invoiceTypeNames,
            invoice_type: this.invoiceType,
            template_id: this.templateId,
            user_id: this.valueImporterDefault,
            class_codes: this.valueClassDetails,
            adjustment_types: this.adjustmentType,
            export_places: this.exportPlace,
            customer_types: this.customerType,
            group_type_invoice: this.valueGroupTypeInvoice
        };
        this.findDataStudent = {
            study_year: this.valueYearDefault,
            school_fee_months: this.valueCollectionMonth,
            class_codes: this.valueClass,
            product_codes: this.valueRevenueCode,
            redues: this.redues
        };
        this.findDataLicense = {
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            period: this.kytinhthue,
            period_type: this.reportPeriod,
            type: "xml",
            is_view: true,
        };
        if (this.typeCode == "report-customer-group" || this.typeCode == "report-customer-detail") {
            this.findDataHospital = {
                report_period: this.reportPeriod,
                from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
                to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
                template_id: this.invoiceTypeName,
                user_ids: [],
                tax_code: "",
                verify_code: "",
                export_place: this.exportPlace,
                customer_type: this.customerTypeSingle,
                adjustment_type: this.adjustmentType,
                is_view: true,
            };
        }
        else {
            this.findDataHospital = {
                report_period: this.reportPeriod,
                from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
                to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
                template_id: this.invoiceTypeName,
                user_ids: [],
                tax_code: "",
                verify_code: "",
                export_place: this.exportPlace,
                customer_type: this.customerType,
                adjustment_type: this.adjustmentType,
                is_view: true,
            };
        }
        var error = this.checkPermission();
        if (!error) {
            this.route.params.subscribe(function (res) {
                if (res.type === 'pmkt') {
                    _this.typeCode = _this.maLoaiPhanMemKeToan;
                }
                else {
                    _this.typeCode = res.type;
                    _this.reportTypes.forEach(function (reportType) {
                        if (reportType.code === _this.typeCode) {
                            _this.selectedItems = [];
                            _this.selectedItems.push(reportType);
                            _this.onSelectionChanged(null);
                        }
                    });
                }
            });
        }
    };
    // Kiểm tra có quyền vào báo cáo không
    IndexComponent.prototype.checkPermission = function () {
        var _this = this;
        var error = false;
        var permissions = _config_sidebar__WEBPACK_IMPORTED_MODULE_36__["sidebar"].find(function (item) { return item.url === '/recordtype'; });
        if (permissions) {
            var listUrls_1 = permissions.children;
            this.route.params.subscribe(function (res) {
                var objUrl = listUrls_1.find(function (item) { return item.url.split('/').pop() === res.type; });
                if (objUrl && objUrl.permissions.filter(function (element) { return _this.listpermissions.includes(element); }).length == 0) {
                    error = true;
                    _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Bạn không có quyền xem báo cáo', 'error');
                }
            });
        }
        return error;
    };
    IndexComponent.prototype.getCurrentUser = function () {
        this.currentUser = this.authService.getCurrentUser();
    };
    IndexComponent.prototype.onExportSchedules = function (e) {
        var selectedItem = e.component.option('selectedItem');
        this.startDate = selectedItem.startDate;
        this.endDate = selectedItem.endDate;
        this.reportPeriod = selectedItem.reportPeriod;
        this.laykytinhthue(selectedItem);
        this.findData = {
            typeCode: this.typeCode,
            reportPeriod: this.reportPeriod,
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            invoiceTypeNames: this.invoiceTypeNames,
            invoice_type: this.invoiceType,
            template_id: this.templateId,
            user_id: this.valueImporterDefault,
            group_type_invoice: this.valueGroupTypeInvoice
        };
        var dataSearchDetails = {
            typeCode: this.typeCode,
            reportPeriod: this.reportPeriod,
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            invoiceTypeNames: this.invoiceTypeNames,
            invoice_type: this.invoiceType,
            template_id: this.templateId,
            user_id: this.valueImporterDefault,
            class_codes: this.valueClassDetails,
            adjustment_types: this.adjustmentType,
            export_places: this.exportPlace,
            customer_types: this.customerType,
            group_type_invoice: this.valueGroupTypeInvoice
        };
        this.findDataStudent = {
            study_year: this.valueYearDefault,
            school_fee_months: this.valueCollectionMonth,
            class_codes: this.valueClass,
            product_codes: this.valueRevenueCode,
            redues: this.redues
        };
        this.findDataLicense = {
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            period: this.kytinhthue,
            period_type: this.reportPeriod,
            type: "xml",
            is_view: true,
        };
        if (this.typeCode == "report-customer-group" || this.typeCode == "report-customer-detail") {
            this.findDataHospital = {
                report_period: this.reportPeriod,
                from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
                to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
                template_id: this.invoiceTypeName,
                user_ids: [],
                tax_code: "",
                verify_code: "",
                export_place: this.exportPlace,
                customer_type: this.customerTypeSingle,
                adjustment_type: this.adjustmentType,
                is_view: true,
            };
        }
        else {
            this.findDataHospital = {
                report_period: this.reportPeriod,
                from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
                to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
                template_id: this.invoiceTypeName,
                user_ids: [],
                tax_code: "",
                verify_code: "",
                export_place: this.exportPlace,
                customer_type: this.customerType,
                adjustment_type: this.adjustmentType,
                is_view: true,
            };
        }
        switch (this.typeCode) {
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.bc26:
                if (this.ReportBc26)
                    this.ReportBc26.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.misa:
                //  this.ReportMisa.loadList();
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sse:
                //  this.ReportSse.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.totalNumberInvoice:
                if (this.ReportSse)
                    this.ReportSse.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.fast:
                if (this.isHassyu) {
                    if (this.ReportFastHassyu)
                        this.ReportFastHassyu.loadList(this.findData);
                }
                else {
                    if (this.ReportFast)
                        this.ReportFast.loadList(this.findData);
                }
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.list:
                if (this.ReportList)
                    this.ReportList.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.declaration:
                if (this.ReportDeclaration)
                    this.ReportDeclaration.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenue:
                if (this.ReportRevenue)
                    this.ReportRevenue.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sold:
                if (this.ReportListInvoice)
                    this.ReportListInvoice.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.vat:
                if (this.ReportVat)
                    this.ReportVat.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailProduct:
                if (this.ReportDetailProduct)
                    this.ReportDetailProduct.loadList(dataSearchDetails);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalFee:
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalUser:
                if (this.ReportHospitalFee)
                    this.ReportHospitalFee.loadList(dataSearchDetails);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalSynthetic:
                if (this.ReportHospitalSynthesis)
                    this.ReportHospitalSynthesis.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listInvoiceBuy:
                if (this.ReportInoiveBuy)
                    this.ReportInoiveBuy.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listCollectionToClass:
                if (this.ReportCollectionToClass)
                    this.ReportCollectionToClass.loadList(this.findDataStudent);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listDontCollectionStudent:
                if (this.ReportDontCollectionStudent)
                    this.ReportDontCollectionStudent.loadList(this.findDataStudent);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportLicenseDetail:
                if (this.ReportLicenseDetailComponent)
                    this.ReportLicenseDetailComponent.loadList(this.findDataLicense);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.licenseExportUsed:
                if (this.LicenseExportUsedComponent)
                    this.LicenseExportUsedComponent.loadList(this.findDataLicense);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReportBillPharmacy:
                if (this.DetailReportBillPharmacyComponent)
                    this.DetailReportBillPharmacyComponent.loadList(this.findDataHospital);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.dailySummaryReportHospital:
                if (this.DailySummaryReportHospitalComponent)
                    this.DailySummaryReportHospitalComponent.loadList(this.findDataHospital);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportCustomerGroup:
                if (this.ReportCustomerGroupComponent)
                    this.ReportCustomerGroupComponent.loadList(this.findDataHospital);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportCustomerDetail:
                if (this.ReportCustomerGroupDetailComponent)
                    this.ReportCustomerGroupDetailComponent.loadList(this.findDataHospital);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalWithVatMajor:
                if (this.HospitalWithVatMajorComponent)
                    this.HospitalWithVatMajorComponent.loadList(this.findDataHospital);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.useReceipt:
                if (this.ReportUseReceiptComponent)
                    this.ReportUseReceiptComponent.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReceipt:
                if (this.ReportDetailReceiptComponent)
                    this.ReportDetailReceiptComponent.loadList(this.findData);
                break;
            default:
                break;
        }
        if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart;
            this.getDataChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart;
            this.getDataChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenueLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenueLineChart;
            this.getDataLineChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.exportLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.exportLineChart;
            this.getDataLineChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.handleLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.handleLineChart;
            this.getDataLineChart();
        }
        else {
            this.visibleReviewImg = true;
            this.typeVisibleChart = 'no';
        }
    };
    IndexComponent.prototype.onExportSchedulesStudent = function (e) {
        this.arrCollectionMonth = this.sortCollectionMonth(e.value);
        this.valueYearDefault = e.value;
        var report = {
            study_year: this.valueYearDefault,
            school_fee_months: this.valueCollectionMonth,
            class_codes: this.valueClass,
            product_codes: this.valueRevenueCode
        };
        switch (this.typeCode) {
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listCollectionToClass:
                this.ReportCollectionToClass.loadList(report);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listDontCollectionStudent:
                this.ReportDontCollectionStudent.loadList(report);
                break;
            default:
                break;
        }
    };
    IndexComponent.prototype.onStartDate = function (e) {
        if (e.event) {
            this.startDate = moment__WEBPACK_IMPORTED_MODULE_4__(e.value).format('YYYY-MM-DD HH:mm:ss');
            if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart || this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart) {
                this.getDataChart();
            }
            if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenueLineChart || this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.exportLineChart || this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.handleLineChart) {
                this.getDataLineChart();
            }
        }
    };
    IndexComponent.prototype.onEndDate = function (e) {
        if (e.event) {
            this.endDate = moment__WEBPACK_IMPORTED_MODULE_4__(e.value).format('YYYY-MM-DD HH:mm:ss');
            if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart || this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart) {
                this.getDataChart();
            }
            if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenueLineChart || this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.exportLineChart || this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.handleLineChart) {
                this.getDataLineChart();
            }
        }
    };
    IndexComponent.prototype.onSelectionChanged = function (e) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        this.exportSchedules = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].layKyXuatHoaDonBaoCao(this._translate).schedule;
        if (e) {
            this.typeCode = e.addedItems[0].code;
            this.mabaocao = e.addedItems[0].mabaocao;
        }
        this.customVisible();
        // let invoiceTypes = JSON.parse(JSON.stringify(this.invoiceTypeNames));
        this.findData = {
            typeCode: this.typeCode,
            reportPeriod: this.reportPeriod,
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            invoiceTypeNames: this.invoiceTypeNames,
            invoice_type: this.invoiceType,
            template_id: this.templateId,
            group_type_invoice: this.valueGroupTypeInvoice
        };
        if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart;
            this.getDataChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart;
            this.getDataChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenueLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenueLineChart;
            this.getDataLineChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.exportLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.exportLineChart;
            this.getDataLineChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.handleLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.handleLineChart;
            this.getDataLineChart();
        }
        else {
            this.visibleReviewImg = true;
            this.typeVisibleChart = 'no';
        }
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
    };
    IndexComponent.prototype.customVisible = function () {
        this.templates = this.arrTemplate;
        switch (this.typeCode) {
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.bc26:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = true;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospital = false;
                this.isReportHospitalDetail = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO TÌNH HÌNH SỬ DỤNG HÓA ĐƠN';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.totalNumberInvoice:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospital = false;
                this.isReportHospitalDetail = false;
                this.isReportHospitalVAT = false;
                this.titleReport = this._translate.CONTROLL.LABEL.total_used_number_inoivce.toUpperCase();
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.misa:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = true;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospitalDetail = false;
                this.isReportHospital = false;
                this.titleReport = '';
                this.isReportHospitalVAT = false;
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sse:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = true;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospitalDetail = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'DỮ LIỆU NẠP PHẦN MỀM KẾ TOÁN';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.fast:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = true;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospitalDetail = false;
                this.isReportHospital = false;
                this.titleReport = '';
                this.isReportHospitalVAT = false;
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.list:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = true;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospitalDetail = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                if (this.mabaocao == "01_1/GTGT")
                    this.titleReport = 'BẢNG KÊ HOÁ ĐƠN, CHỨNG TỪ HÀNG HOÁ, DỊCH VỤ BÁN RA';
                else if (this.mabaocao == "03/DL-HĐĐT") {
                    this.isVisibleExXml = true;
                    this.titleReport = 'TỜ KHAI DỮ LIỆU HÓA ĐƠN, CHỨNG TỪ HÀNG HÓA, DỊCH VỤ BÁN RA';
                }
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.declaration:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = true;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospitalDetail = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'TỜ KHAI DỮ LIỆU HÓA ĐƠN, CHỨNG TỪ HÀNG HÓA, DỊCH VỤ BÁN RA';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenue:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospitalDetail = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO TỔNG HỢP DOANH THU THEO NHÓM KHÁCH HÀNG';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.vat:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = true;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospitalDetail = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO THEO MỨC THUẾ SUẤT';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailProduct:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isShowClass = true;
                this.isVisibleInvoiceType = false;
                this.isVisibleTemplate = true;
                this.isVisibleCompany = true;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isTypeStudent = false;
                this.isReportHospitalDetail = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                this.valueGroupTypeInvoice = "OTHERS";
                if (this.arrTemplate && this.arrTemplate.length > 0) {
                    this.templates = this.arrTemplate.filter(function (p) { return p.template_type != 'HOA_DON_MAY_TINH_TIEN' && p.template_type != "HOA_DON_KHOI_TAO_TU_MAY_TINH_TIEN" && p.invoice_type != "01CTT56"; });
                    if (this.templates && this.templates.length > 0) {
                        this.templateDefault = this.templates[0].template_id;
                        this.templateId = this.templateDefault;
                    }
                }
                this.titleReport = 'BÁO CÁO CHI TIẾT HÀNG HÓA DỊCH VỤ HÓA ĐƠN';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalFee:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isShowClass = true;
                this.isVisibleInvoiceType = false;
                this.isVisibleTemplate = true;
                this.isVisibleCompany = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isTypeStudent = false;
                this.isReportHospitalDetail = true;
                this.isReportHospital = true;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO CHI TIẾT THU VIỆN PHÍ';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalUser:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isShowClass = true;
                this.isVisibleInvoiceType = false;
                this.isVisibleTemplate = true;
                this.isVisibleExXml = false;
                this.isVisibleCompany = false;
                this.isVisibleExExcel = true;
                this.isTypeStudent = false;
                this.isReportHospitalDetail = true;
                this.isReportHospital = true;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO CHI TIẾT THU VIỆN PHÍ THEO NGƯỜI LẬP HÓA ĐƠN';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalSynthetic:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleCompany = false;
                this.isVisibleTemplate = true;
                this.isTypeStudent = false;
                this.isShowClass = true;
                this.isReportHospitalDetail = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO TỔNG HỢP THU VIỆN PHÍ';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sold:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isShowClass = true;
                this.isVisibleInvoiceType = false;
                this.isVisibleTemplate = true;
                this.isVisibleCompany = true;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isTypeStudent = false;
                this.isReportHospitalDetail = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO BẢNG KÊ HÓA ĐƠN BÁN RA';
                this.valueGroupTypeInvoice = "OTHERS";
                if (this.arrTemplate && this.arrTemplate.length > 0) {
                    this.templates = this.arrTemplate.filter(function (p) { return p.template_type != 'HOA_DON_MAY_TINH_TIEN' && p.template_type != "HOA_DON_KHOI_TAO_TU_MAY_TINH_TIEN" && p.invoice_type != "01CTT56"; });
                    if (this.templates && this.templates.length > 0) {
                        this.templateDefault = this.templates[0].template_id;
                        this.templateId = this.templateDefault;
                    }
                }
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listInvoiceBuy:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isShowClass = false;
                this.isVisibleInvoiceType = false;
                this.isVisibleTemplate = true;
                this.isVisibleCompany = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isTypeStudent = false;
                this.isReportHospital = false;
                this.isReportHospitalDetail = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BẢNG KÊ HOÁ ĐƠN, CHỨNG TỪ HÀNG HOÁ, DỊCH VỤ MUA VÀO';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listCollectionToClass:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isShowClass = false;
                this.isVisibleInvoiceType = false;
                this.isVisibleTemplate = true;
                this.isVisibleCompany = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isTypeStudent = true;
                this.isReportHospitalDetail = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO TỔNG HỢP TÌNH HÌNH THU TIỀN THEO LỚP';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listDontCollectionStudent:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isShowClass = false;
                this.isVisibleInvoiceType = false;
                this.isVisibleTemplate = true;
                this.isVisibleCompany = false;
                this.isVisibleExXml = false;
                this.isReportHospitalDetail = false;
                this.isVisibleExExcel = true;
                this.isTypeStudent = true;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO TỔNG HỢP DANH SÁCH HS-SV CHƯA THU TIỀN';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportLicenseDetail:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isReportHospitalDetail = false;
                this.isShowClass = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO CHI TIẾT CHỨNG TỪ';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.licenseExportUsed:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = true;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isReportHospitalDetail = false;
                this.isShowClass = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO SỬ DỤNG CHỨNG TỪ';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReportBillPharmacy:
                this.isReportHospitalDaily = false;
                this.exportSchedulesDefault = this.exportSchedules[7].code;
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospital = false;
                this.isReportHospitalDetail = true;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO CÁO CHI TIẾT HÓA ĐƠN THEO CƠ SỞ - NHÀ THUỐC (DÙNG RIÊNG CHO BỆNH VIỆN)';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.dailySummaryReportHospital:
                this.isReportHospitalDaily = true;
                this.exportSchedulesDefault = this.exportSchedules[7].code;
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospital = true;
                this.isReportHospitalDetail = true;
                this.isReportHospitalVAT = false;
                this.titleReport = 'BÁO CÁO TỔNG HỢP HÓA ĐƠN THEO NGÀY (DÙNG RIÊNG CHO BỆNH VIỆN)';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportCustomerGroup:
                this.isReportHospitalDaily = false;
                this.exportSchedules = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].layKyXuatHoaDonBaoCao(this._translate).schedule.slice(7, 21);
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospital = false;
                this.isReportHospitalDetail = false;
                this.isReportHospitalVAT = true;
                this.titleReport = 'BÁO CÁO TỔNG HỢP MỨC THUẾ SUẤT THEO TỪNG NHÓM KHÁCH HÀNG(DÙNG RIÊNG CHO BỆNH VIỆN)';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportCustomerDetail:
                this.isReportHospitalDaily = false;
                this.exportSchedules = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].layKyXuatHoaDonBaoCao(this._translate).schedule.slice(7, 21);
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospital = false;
                this.isReportHospitalDetail = false;
                this.isReportHospitalVAT = true;
                this.titleReport = 'BÁO CÁO CHI TIẾT MỨC THUẾ SUẤT THEO TỪNG NHÓM KHÁCH HÀNG(DÙNG RIÊNG CHO BỆNH VIỆN)';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalWithVatMajor:
                this.isReportHospitalDaily = false;
                this.exportSchedulesDefault = this.exportSchedules[7].code;
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospital = false;
                this.isReportHospitalDetail = false;
                this.isReportHospitalVAT = true;
                this.titleReport = 'BÁO CÁO TỔNG HỢP MỨC THUẾ SUẤT HĐ THAY THẾ VÀ HĐ ĐIỀU CHỈNH (DÙNG RIÊNG CHO BỆNH VIỆN)';
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.useReceipt:
                this.isReportHospitalDaily = false;
                this.exportSchedulesDefault = this.exportSchedules[7].code;
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospital = false;
                this.isReportHospitalDetail = false;
                this.isReportHospitalVAT = false;
                this.titleReport = this._translate.CONTROLL.LABEL.use_receipt;
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReceipt:
                this.isReportHospitalDaily = false;
                this.exportSchedulesDefault = this.exportSchedules[7].code;
                this.isVisibleInvoiceType = false;
                this.isVisibleExXml = false;
                this.isVisibleExExcel = true;
                this.isVisibleTemplate = true;
                this.isVisibleCompany = false;
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isReportHospital = false;
                this.isReportHospitalDetail = false;
                this.isReportHospitalVAT = false;
                this.titleReport = this._translate.CONTROLL.LABEL.detail_receipt;
                this.templates = [];
                if (this.arrTemplate && this.arrTemplate.length > 0) {
                    this.templates = this.arrTemplate.filter(function (p) { return p.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].loaihoadon.BLP; });
                    if (this.templates && this.templates.length > 0) {
                        this.templateDefault = this.templates[0].template_id;
                        this.templateId = this.templateDefault;
                    }
                }
                break;
            default:
                this.isReportHospitalDaily = false;
                if (this.configSystems.system_parameter.not_export_more_than_a_month) {
                    this.exportSchedulesDefault = this.exportSchedules[7].code;
                }
                else {
                    this.exportSchedulesDefault = this.exportSchedules[0].code;
                }
                this.isTypeStudent = false;
                this.isShowClass = false;
                this.isVisibleInvoiceType = true;
                this.isVisibleExXml = false;
                this.isReportHospitalDetail = false;
                this.isVisibleExExcel = false;
                this.titleReport = '';
                this.isVisibleTemplate = false;
                this.isVisibleCompany = false;
                this.isReportHospital = false;
                this.isReportHospitalVAT = false;
                break;
        }
    };
    IndexComponent.prototype.getDataLineChart = function () {
        var _this = this;
        this.handleDataChart();
        var data = {
            'report': {
                'from_date': moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
                'to_date': moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
                'invoice_type': this.invoiceType
            }
        };
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        this.reportService.dataChartLine(data)
            .subscribe(function (rs) {
            rs.data.report.forEach(function (item) {
                _this.dataSourceRevenueLineChart.push({
                    month: 'T' + parseInt(item.month, 10),
                    revenue: item.revenue,
                    issued_amount: item.issued_amount,
                    adjustment_amount: item.adjustment_amount,
                    replacement_amount: item.replacement_amount,
                    cancellation_amount: item.cancellation_amount,
                });
                _this.dataSourceRevenueLineChart.push({
                    month: 'T' + parseInt(item.month, 10),
                    cost: item.cost,
                    issued_amount: item.issued_amount,
                    adjustment_amount: item.adjustment_amount,
                    replacement_amount: item.replacement_amount,
                    cancellation_amount: item.cancellation_amount,
                });
            });
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.getDataChart = function () {
        var _this = this;
        this.handleDataChart();
        var data = {
            'report': {
                'from_date': moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
                'to_date': moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
                'invoice_type': this.invoiceType
            }
        };
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        this.reportService.dataChart(data).subscribe(function (res) {
            if (res && res.status === 'success') {
                var dataTotal = res.data.revenue.total;
                var revenue = res.data.revenue.item;
                var revenuecustomer = res.data.revenue_customer;
                _this.dataSourceColumnChart = [];
                _this.dataSourceColumnChartCustomer = [];
                if (_this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart) {
                    var _loop_1 = function (key) {
                        if (revenue.hasOwnProperty(key)) {
                            var dataByDate = revenue[key];
                            dataByDate.forEach(function (element) {
                                var columnObj = {};
                                columnObj['date'] = key;
                                columnObj['total_amount'] = element.total_amount;
                                columnObj['group_customer'] = element.name;
                                _this.dataSourceColumnChart.push(columnObj);
                            });
                        }
                    };
                    for (var key in revenue) {
                        _loop_1(key);
                    }
                    /////
                    revenuecustomer.forEach(function (item) {
                        _this.dataSourceColumnChartCustomer.push({
                            total_payment: item.total_payment,
                            name: item.name ? _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(item.name) : _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(item.buyer_name),
                            buyer_name: _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(item.buyer_name),
                            tax_code: _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(item.tax_code)
                        });
                    });
                }
                else if (_this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart) {
                    var totalamount_1 = 0;
                    dataTotal.forEach(function (element) {
                        totalamount_1 += element.total_amount;
                    });
                    dataTotal.forEach(function (element) {
                        var pieObj = {
                            name: element.name,
                            percent: _this.roundNumber((element.total_amount / totalamount_1) * 100, 2)
                        };
                        _this.dataSourceCircleChart.push(pieObj);
                    });
                }
            }
        }, function (err) {
        }, function () {
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.roundNumber = function (number, n) {
        if (number == null) {
            return number;
        }
        else {
            var p = Math.pow(10, n);
            return Math.round(number * p) / p;
        }
    };
    IndexComponent.prototype.handleDataChart = function () {
        this.dataSourceColumnChart = [];
        this.dataSourceCircleChart = [];
        this.dataSourceRevenueLineChart = [];
        this.dataSourceExportLineChart = [];
        this.dataSourceHandleLineChart = [];
    };
    IndexComponent.prototype.customizeLabel = function (point) {
        return point.argumentText + ': ' + point.valueText + '%';
    };
    IndexComponent.prototype.getTemplates = function () {
        var _this = this;
        this.templateService.getAll1().subscribe(function (rs) {
            var listTemplate = rs.data.templates;
            if (listTemplate && listTemplate.length > 0) {
                var arrTemplate_1 = [];
                var listTemptTT78 = listTemplate.filter(function (p) { return p.is_decree_new; });
                if (listTemptTT78 && listTemptTT78.length > 0)
                    arrTemplate_1 = listTemptTT78;
                _this.reportService.getTemplates().subscribe(function (result) {
                    if (result.data) {
                        var listRelease = result.data.invoice_releases;
                        if (listRelease && listRelease.length > 0) {
                            listRelease.forEach(function (release) {
                                listTemplate.forEach(function (template) {
                                    if (template.id === release.template_id) {
                                        var _obj = arrTemplate_1.filter(function (p) { return p.id === template.id; })[0];
                                        if (!_obj) {
                                            arrTemplate_1.push(template);
                                        }
                                    }
                                });
                            });
                        }
                    }
                    _this.templates = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].convertTemplate(arrTemplate_1);
                    if (_this.templates && _this.templates.length > 0) {
                        _this.templates.unshift({
                            template_id: '',
                            name: 'Tất cả'
                        });
                        _this.templatesHospital = _this.templates.filter(function (item) { return item.name !== "Tất cả"; });
                    }
                    _this.arrTemplate = _this.templates;
                    _this.templateDefault = _this.templates[0].template_id;
                    _this.templateId = _this.templateDefault;
                    // Nếu là bc chi tiết biên lai
                    if (_this.typeCode == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReceipt) {
                        if (_this.arrTemplate && _this.arrTemplate.length > 0) {
                            _this.templates = _this.arrTemplate.filter(function (p) { return p.invoice_type == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].loaihoadon.BLP; });
                            if (_this.templates && _this.templates.length > 0) {
                                _this.templateDefault = _this.templates[0].template_id;
                                _this.templateId = _this.templateDefault;
                            }
                        }
                    }
                });
            }
        });
    };
    IndexComponent.prototype.onTemplate = function (e) {
        this.templateId = e.value;
        this.setFindData();
        this.searchData(this.findData);
    };
    IndexComponent.prototype.setFindData = function () {
        this.findData = {
            typeCode: this.typeCode,
            reportPeriod: this.reportPeriod,
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            invoiceTypeNames: this.invoiceTypeNames,
            invoice_type: this.invoiceType,
            template_id: this.templateId,
            user_id: this.valueImporterDefault,
            adjustment_types: this.adjustmentType,
            export_places: this.exportPlace,
            customer_types: this.customerType,
            group_type_invoice: this.valueGroupTypeInvoice
        };
    };
    IndexComponent.prototype.searchData = function (findData) {
        switch (this.typeCode) {
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.bc26:
                this.ReportBc26.loadList(findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.misa:
                //  this.ReportMisa.loadList();
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sse:
                // this.ReportSse.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.totalNumberInvoice:
                this.ReportSse.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.fast:
                if (this.isHassyu)
                    this.ReportFastHassyu.loadList(this.findData);
                else
                    this.ReportFast.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.list:
                this.ReportList.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.declaration:
                this.ReportDeclaration.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenue:
                this.ReportRevenue.loadList(findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sold:
                this.ReportListInvoice.loadList(findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.vat:
                this.ReportVat.loadList(findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailProduct:
                this.ReportDetailProduct.loadList(findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalFee:
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalUser:
                this.ReportHospitalFee.loadList(findData);
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listInvoiceBuy:
                this.ReportInoiveBuy.loadList(findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalSynthetic:
                this.ReportHospitalSynthesis.loadList(findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReceipt:
                this.ReportDetailReceiptComponent.loadList(findData);
                break;
            default:
                break;
        }
        if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart;
            this.getDataChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart;
            this.getDataChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenueLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenueLineChart;
            this.getDataLineChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.exportLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.exportLineChart;
            this.getDataLineChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.handleLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.handleLineChart;
            this.getDataLineChart();
        }
        else {
            this.visibleReviewImg = true;
            this.typeVisibleChart = 'no';
        }
    };
    IndexComponent.prototype.onInvoiceType = function (e) {
        this.invoiceType = e.value;
        this.findData = {
            typeCode: this.typeCode,
            reportPeriod: this.reportPeriod,
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            invoiceTypeNames: this.invoiceTypeNames,
            invoice_type: this.invoiceType,
            template_id: this.templateId,
            user_id: this.valueImporterDefault,
            adjustment_types: this.adjustmentType,
            export_places: this.exportPlace,
            customer_types: this.customerType
        };
        if (this.typeCode == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.vat && this.invoiceType
            && (this.invoiceType == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].loaihoadon.GTKT01 || this.invoiceType == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].loaihoadon.GTTT02)) {
            this.findData['template_code'] = '5';
        }
        this.searchData(this.findData);
    };
    IndexComponent.prototype.onChangeGroupTypeInvoice = function (e) {
        this.valueGroupTypeInvoice = e.value;
        if (e.value != "OTHERS")
            this.templates = this.arrTemplate.filter(function (p) { return p.template_type == 'HOA_DON_MAY_TINH_TIEN' || p.template_type == "HOA_DON_KHOI_TAO_TU_MAY_TINH_TIEN" || p.template_id == ''; });
        else
            this.templates = this.arrTemplate.filter(function (p) { return p.template_type != 'HOA_DON_MAY_TINH_TIEN' && p.template_type != "HOA_DON_KHOI_TAO_TU_MAY_TINH_TIEN"; });
        this.templates = this.templates.filter(function (p) { return p.invoice_type != "01CTT56"; });
        if (this.templates && this.templates.length > 0) {
            this.templateDefault = this.templates[0].template_id;
            this.templateId = this.templateDefault;
        }
        this.findData = {
            typeCode: this.typeCode,
            reportPeriod: this.reportPeriod,
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            invoiceTypeNames: this.invoiceTypeNames,
            invoice_type: this.invoiceType,
            template_id: this.templateId,
            user_id: this.valueImporterDefault,
            adjustment_types: this.adjustmentType,
            export_places: this.exportPlace,
            customer_types: this.customerType,
            group_type_invoice: this.valueGroupTypeInvoice
        };
        this.searchData(this.findData);
    };
    IndexComponent.prototype.search = function () {
        this.findData = {
            typeCode: this.typeCode,
            reportPeriod: this.reportPeriod,
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            invoiceTypeNames: this.invoiceTypeNames,
            invoice_type: this.invoiceType,
            template_id: this.templateId,
            user_id: this.valueImporterDefault,
            group_type_invoice: this.valueGroupTypeInvoice
        };
        var dataSearchDetails = {
            typeCode: this.typeCode,
            reportPeriod: this.reportPeriod,
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            invoiceTypeNames: this.invoiceTypeNames,
            invoice_type: this.invoiceType,
            template_id: this.templateId,
            user_id: this.valueImporterDefault,
            class_codes: this.valueClassDetails,
            adjustment_types: this.adjustmentType,
            export_places: this.exportPlace,
            customer_types: this.customerType,
            group_type_invoice: this.valueGroupTypeInvoice
        };
        var dataSearch = {
            study_year: this.valueYearDefault,
            school_fee_months: this.valueCollectionMonth,
            class_codes: this.valueClass,
            product_codes: this.valueRevenueCode
        };
        this.findDataLicense = {
            from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            period_type: this.reportPeriod,
            period: this.kytinhthue,
            type: "xml",
            is_view: true,
        };
        if (this.typeCode == "report-customer-group" || this.typeCode == "report-customer-detail") {
            this.findDataHospital = {
                report_period: this.reportPeriod,
                from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
                to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
                template_id: this.invoiceTypeName,
                user_ids: [],
                tax_code: "",
                verify_code: "",
                export_place: this.exportPlace,
                customer_type: this.customerTypeSingle,
                adjustment_type: this.adjustmentType,
                is_view: true,
            };
        }
        else {
            this.findDataHospital = {
                report_period: this.reportPeriod,
                from_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
                to_date: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
                template_id: this.invoiceTypeName,
                user_ids: [],
                tax_code: "",
                verify_code: "",
                export_place: this.exportPlace,
                customer_type: this.customerType,
                adjustment_type: this.adjustmentType,
                is_view: true,
            };
        }
        switch (this.typeCode) {
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.bc26:
                this.ReportBc26.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.misa:
                //  this.ReportMisa.loadList();
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sse:
                // this.ReportSse.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.totalNumberInvoice:
                this.ReportSse.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.fast:
                if (this.isHassyu)
                    this.ReportFastHassyu.loadList(this.findData);
                else
                    this.ReportFast.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.list:
                this.ReportList.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.declaration:
                this.ReportDeclaration.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenue:
                this.ReportRevenue.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sold:
                this.ReportListInvoice.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.vat:
                this.ReportVat.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailProduct:
                this.ReportDetailProduct.loadList(dataSearchDetails);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalFee:
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalUser:
                this.ReportHospitalFee.loadList(dataSearchDetails);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listInvoiceBuy:
                this.ReportInoiveBuy.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalSynthetic:
                this.ReportHospitalSynthesis.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listCollectionToClass:
                this.ReportCollectionToClass.loadList(dataSearch);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.listDontCollectionStudent:
                this.ReportDontCollectionStudent.loadList(dataSearch);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.licenseExportUsed:
                this.LicenseExportUsedComponent.loadList(this.findDataLicense);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportLicenseDetail:
                this.ReportLicenseDetailComponent.loadList(this.findDataLicense);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReportBillPharmacy:
                if (this.DetailReportBillPharmacyComponent)
                    this.DetailReportBillPharmacyComponent.loadList(this.findDataHospital);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.dailySummaryReportHospital:
                if (this.DailySummaryReportHospitalComponent)
                    this.DailySummaryReportHospitalComponent.loadList(this.findDataHospital);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportCustomerGroup:
                if (this.ReportCustomerGroupComponent)
                    this.ReportCustomerGroupComponent.loadList(this.findDataHospital);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.reportCustomerDetail:
                if (this.ReportCustomerGroupDetailComponent)
                    this.ReportCustomerGroupDetailComponent.loadList(this.findDataHospital);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.hospitalWithVatMajor:
                if (this.HospitalWithVatMajorComponent)
                    this.HospitalWithVatMajorComponent.loadList(this.findDataHospital);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.useReceipt:
                this.ReportUseReceiptComponent.loadList(this.findData);
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailReceipt:
                this.ReportDetailReceiptComponent.loadList(this.findData);
                break;
            default:
                break;
        }
        if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.columnChart;
            this.getDataChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.circleChart;
            this.getDataChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenueLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.revenueLineChart;
            this.getDataLineChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.exportLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.exportLineChart;
            this.getDataLineChart();
        }
        else if (this.typeCode === _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.handleLineChart) {
            this.visibleReviewImg = false;
            this.typeVisibleChart = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.handleLineChart;
            this.getDataLineChart();
        }
        else {
            this.visibleReviewImg = true;
            this.typeVisibleChart = 'no';
        }
    };
    ;
    IndexComponent.prototype.getCitis = function () {
        var _this = this;
        this.reportService.getAllListbyListtypeByCode('DM_TINH_THANH_CQHC').subscribe(function (res) {
            if (res) {
                _this.citis = res.data.DM_TINH_THANH_CQHC;
            }
        });
        this.reportService.getAllListbyListtypeByCode('DM_TINH_THANH').subscribe(function (res) {
            if (res) {
                _this.tinhthanhDBHC = res.data.DM_TINH_THANH;
            }
        });
    };
    IndexComponent.prototype.getChecklist = function (e, key) {
        if (Array.isArray(e) && e.length) {
            if (key === 'collection_month') {
                this.valueCollectionMonth = this.returnValueSearch(e);
            }
            else if (key === 'class') {
                this.valueClass = this.returnValueSearch(e);
            }
            else if (key === 'revenue_code') {
                this.valueRevenueCode = this.returnValueSearch(e);
            }
            else if (key === 'importer') {
                this.valueImporterDefault = this.returnValueImporter(e);
            }
            else if (key === 'class-details') {
                this.valueClassDetails = this.returnValueSearch(e);
            }
        }
        else {
            if (key === 'collection_month') {
                this.valueCollectionMonth = null;
            }
            else if (key === 'class') {
                this.valueClass = null;
            }
            else if (key === 'revenue_code') {
                this.valueRevenueCode = null;
            }
            else if (key === 'importer') {
                this.valueImporterDefault = null;
            }
            else if (key === 'class-details') {
                this.valueClassDetails = null;
            }
        }
    };
    IndexComponent.prototype.returnValueSearch = function (value) {
        return value.filter(function (item) { return item !== 'TAT_CA'; }).toString().replace(/,/g, ';');
    };
    IndexComponent.prototype.returnValueSearchDefault = function (arr) {
        if (Array.isArray(arr) && arr.length) {
            var arrValue_1 = [];
            arr.forEach(function (item) { return arrValue_1.push(item.code); });
            return this.returnValueSearch(arrValue_1);
        }
    };
    IndexComponent.prototype.returnValueImporter = function (arr) {
        if (Array.isArray(arr) && arr.length) {
            var arrValue_2 = [];
            arr.forEach(function (item) {
                if (item.id) {
                    if (item.checked) {
                        arrValue_2.push(item.id);
                    }
                }
                else {
                    arrValue_2.push(item);
                }
            });
            return arrValue_2.filter(function (item) { return item !== 'TAT_CA'; });
        }
    };
    IndexComponent.prototype.onInvoiceTypeNamesSelectChanged = function (e) {
        var nodes = e.component.getNodes();
        this.invoiceTypeName = this.getSelectedItemsKeys(nodes);
    };
    // Sự kiện thay đổi nơi xuất hóa đơn
    IndexComponent.prototype.onExportPlaceSelectChanged = function (e) {
        var nodes = e.component.getNodes();
        this.exportPlace = this.getSelectedItemsKeys(nodes);
    };
    // Sự kiện thay đổi loại khách hàng
    IndexComponent.prototype.onCustomerTypesChanged = function (e) {
        var nodes = e.component.getNodes();
        this.customerType = this.getSelectedItemsKeys(nodes);
    };
    // Sự kiện thay đổi tình trạng xử lý
    IndexComponent.prototype.onAdjustmentTypesChanged = function (e) {
        var nodes = e.component.getNodes();
        this.adjustmentType = this.getSelectedItemsKeys(nodes);
    };
    IndexComponent.prototype.onChangeUnit = function (e) {
        var nodes = e.component.getNodes();
        this.IdCompanys = this.getSelectedItemsKeys(nodes);
    };
    IndexComponent.prototype.laykytinhthue = function (item) {
        var startDate = item.startDate;
        var endDate = item.endDate;
        var reportPeriod = item.reportPeriod;
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(startDate);
        var year = date.year();
        var month = date.month() < 12 ? date.month() + 1 : 1;
        if (reportPeriod == "QUY") {
            if (month == 1)
                this.kytinhthue = "1" + "/" + year;
            else if (month == 4)
                this.kytinhthue = "2" + "/" + year;
            else if (month == 7)
                this.kytinhthue = "3" + "/" + year;
            else if (month == 10)
                this.kytinhthue = "4" + "/" + year;
        }
        else if (reportPeriod == "THANG") {
            this.kytinhthue = month < 10 ? "0" + month + "/" + year : month + "/" + year;
        }
    };
    IndexComponent.prototype.BaoCaoCongTy = function () {
        var _this = this;
        this.showPopup = true;
        this.isExportFailed = false;
        this.lstErrExport = [];
        var list = [];
        this.IdCompanys.forEach(function (item) {
            var obj = _this.list_company.filter(function (p) { return p.id == item; })[0];
            if (obj)
                list.push(obj);
        });
        this.listCompanyExports = list;
        this.totalNumberCompany = this.listCompanyExports.length;
        this.companyIndex = 0;
        this.tempKiFile = 0;
        this.XuatBaoCao();
    };
    IndexComponent.prototype.XuatBaoCao = function () {
        var _this = this;
        var i = this.companyIndex;
        var objCompany = this.listCompanyExports[i];
        var tax_code = "";
        var verify_code = "";
        if (objCompany.id != "000-0000-0000-0000-0000-0000-0000") {
            tax_code = objCompany.tax_code;
            verify_code = objCompany.verify_code;
        }
        var fromDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD');
        var toDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD');
        var data;
        switch (this.typeCode) {
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.list:
                data = {
                    'report': {
                        'report_period': this.reportPeriod,
                        'from_date': fromDate,
                        'to_date': toDate,
                        'tax_code': tax_code,
                        'verify_code': verify_code
                    }
                };
                break;
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailProduct:
            case _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sold:
                data = {
                    report: {
                        from_date: fromDate,
                        to_date: toDate,
                        template_id: this.templateId,
                        user_ids: this.valueImporterDefault,
                        tax_code: tax_code,
                        verify_code: verify_code
                    }
                };
                break;
            default:
                break;
        }
        ////////////////////
        var percentComplete = 100 / this.totalNumberCompany;
        var typeCode = this.typeCode;
        this.reportService.exportExcel(data, typeCode).subscribe(function (rs) {
            var isSuccess = false;
            _this.valueProgress += percentComplete;
            _this.ganXong = true;
            _this.tempKiFile = 0;
            if (rs.status == 'success') {
                isSuccess = true;
                var file = rs.data.report;
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
            }
            else {
                _this.isExportFailed = true;
                var object = new Object;
                object["MST"] = objCompany.tax_code;
                object["NoiDung"] = rs.message;
                _this.lstErrExport.push(object);
            }
            _this.continuteExportInvoice(isSuccess);
        }, function (err) { }, function () {
            // this.subXuatHoaDon.unsubscribe();
        });
    };
    IndexComponent.prototype.onImportHiding = function (e) {
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
    IndexComponent.prototype.onImportShowing = function (e) {
        this.valueProgress = 0;
    };
    IndexComponent.prototype.onCustomerChanged = function (e) {
        this.customerTypeSingle = e.value;
    };
    IndexComponent.prototype.continuteExportInvoice = function (isSuccess) {
        var _this = this;
        if (this.companyIndex == this.totalNumberCompany - 1) {
            if (!this.isExportFailed && isSuccess) {
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Xuất báo cáo thành công", 'success');
            }
            else {
                var initialState = {
                    lstErr: this.lstErrExport,
                    notifyType: "THONG_BAO_XUAT_BAO_CAO"
                };
                this.modalService.show(_shared_index__WEBPACK_IMPORTED_MODULE_25__["SendDataForTaxComponent"], {
                    backdrop: 'static',
                    keyboard: true,
                    class: 'modal-lg modal-margin-width',
                    initialState: initialState
                });
                var subModal_1 = this.modalService.onHide.subscribe(function () {
                    subModal_1.unsubscribe();
                });
            }
            this.daXong = true;
            setTimeout(function () {
                _this.showPopup = false;
            }, 300);
        }
        else if (this.companyIndex < this.totalNumberCompany - 1) {
            this.companyIndex++;
            this.XuatBaoCao();
        }
    };
    IndexComponent.prototype.showGroupTypeInvoice = function () {
        if (this.typeCode == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.sold || this.typeCode == _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].mabaocao.detailProduct)
            return true;
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_bc26_report_bc26_component__WEBPACK_IMPORTED_MODULE_7__["ReportBc26Component"]),
        __metadata("design:type", _report_bc26_report_bc26_component__WEBPACK_IMPORTED_MODULE_7__["ReportBc26Component"])
    ], IndexComponent.prototype, "ReportBc26", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_misa_report_misa_component__WEBPACK_IMPORTED_MODULE_8__["ReportMisaComponent"]),
        __metadata("design:type", _report_misa_report_misa_component__WEBPACK_IMPORTED_MODULE_8__["ReportMisaComponent"])
    ], IndexComponent.prototype, "ReportMisa", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_revenue_report_revenue_component__WEBPACK_IMPORTED_MODULE_9__["ReportRevenueComponent"]),
        __metadata("design:type", _report_revenue_report_revenue_component__WEBPACK_IMPORTED_MODULE_9__["ReportRevenueComponent"])
    ], IndexComponent.prototype, "ReportRevenue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_vat_report_vat_component__WEBPACK_IMPORTED_MODULE_10__["ReportVatComponent"]),
        __metadata("design:type", _report_vat_report_vat_component__WEBPACK_IMPORTED_MODULE_10__["ReportVatComponent"])
    ], IndexComponent.prototype, "ReportVat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_detail_product_report_detail_product_component__WEBPACK_IMPORTED_MODULE_11__["ReportDetailProductComponent"]),
        __metadata("design:type", _report_detail_product_report_detail_product_component__WEBPACK_IMPORTED_MODULE_11__["ReportDetailProductComponent"])
    ], IndexComponent.prototype, "ReportDetailProduct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_report_components_report_hospital_fee_report_hospital_fee_component__WEBPACK_IMPORTED_MODULE_21__["ReportHospitalFeeComponent"]),
        __metadata("design:type", _modules_report_components_report_hospital_fee_report_hospital_fee_component__WEBPACK_IMPORTED_MODULE_21__["ReportHospitalFeeComponent"])
    ], IndexComponent.prototype, "ReportHospitalFee", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_12__["ReportListComponent"]),
        __metadata("design:type", _report_list_report_list_component__WEBPACK_IMPORTED_MODULE_12__["ReportListComponent"])
    ], IndexComponent.prototype, "ReportList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_report_components_report_invoice_buy_report_invoice_buy_component__WEBPACK_IMPORTED_MODULE_15__["ReportInvoiceBuyComponent"]),
        __metadata("design:type", _modules_report_components_report_invoice_buy_report_invoice_buy_component__WEBPACK_IMPORTED_MODULE_15__["ReportInvoiceBuyComponent"])
    ], IndexComponent.prototype, "ReportInoiveBuy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_report_components_forder_student_report_collection_to_class_report_collection_to_class_component__WEBPACK_IMPORTED_MODULE_16__["ReportCollectionToClassComponent"]),
        __metadata("design:type", _modules_report_components_forder_student_report_collection_to_class_report_collection_to_class_component__WEBPACK_IMPORTED_MODULE_16__["ReportCollectionToClassComponent"])
    ], IndexComponent.prototype, "ReportCollectionToClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_report_components_forder_student_report_dont_collection_student_report_dont_collection_student_component__WEBPACK_IMPORTED_MODULE_17__["ReportDontCollectionStudentComponent"]),
        __metadata("design:type", _modules_report_components_forder_student_report_dont_collection_student_report_dont_collection_student_component__WEBPACK_IMPORTED_MODULE_17__["ReportDontCollectionStudentComponent"])
    ], IndexComponent.prototype, "ReportDontCollectionStudent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_report_components_report_fast_hassyu_report_fast_hassyu_component__WEBPACK_IMPORTED_MODULE_18__["ReportFastHassyuComponent"]),
        __metadata("design:type", _modules_report_components_report_fast_hassyu_report_fast_hassyu_component__WEBPACK_IMPORTED_MODULE_18__["ReportFastHassyuComponent"])
    ], IndexComponent.prototype, "ReportFastHassyu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_report_components_report_fast_report_fast_component__WEBPACK_IMPORTED_MODULE_19__["ReportFastComponent"]),
        __metadata("design:type", _modules_report_components_report_fast_report_fast_component__WEBPACK_IMPORTED_MODULE_19__["ReportFastComponent"])
    ], IndexComponent.prototype, "ReportFast", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_report_components_report_list_invoice_report_list_invoice_component__WEBPACK_IMPORTED_MODULE_20__["ReportListInvoiceComponent"]),
        __metadata("design:type", _modules_report_components_report_list_invoice_report_list_invoice_component__WEBPACK_IMPORTED_MODULE_20__["ReportListInvoiceComponent"])
    ], IndexComponent.prototype, "ReportListInvoice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_report_components_report_hospital_synthesis_report_hospital_synthesis_component__WEBPACK_IMPORTED_MODULE_23__["ReportHospitalSynthesisComponent"]),
        __metadata("design:type", _modules_report_components_report_hospital_synthesis_report_hospital_synthesis_component__WEBPACK_IMPORTED_MODULE_23__["ReportHospitalSynthesisComponent"])
    ], IndexComponent.prototype, "ReportHospitalSynthesis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_declaration_report_declaration_component__WEBPACK_IMPORTED_MODULE_13__["ReportDeclarationComponent"]),
        __metadata("design:type", _report_declaration_report_declaration_component__WEBPACK_IMPORTED_MODULE_13__["ReportDeclarationComponent"])
    ], IndexComponent.prototype, "ReportDeclaration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_modules_report_components_report_sse_report_sse_component__WEBPACK_IMPORTED_MODULE_26__["ReportSseComponent"]),
        __metadata("design:type", _modules_report_components_report_sse_report_sse_component__WEBPACK_IMPORTED_MODULE_26__["ReportSseComponent"])
    ], IndexComponent.prototype, "ReportSse", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_license_detail_report_license_detail_component__WEBPACK_IMPORTED_MODULE_27__["ReportLicenseDetailComponent"]),
        __metadata("design:type", _report_license_detail_report_license_detail_component__WEBPACK_IMPORTED_MODULE_27__["ReportLicenseDetailComponent"])
    ], IndexComponent.prototype, "ReportLicenseDetailComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_use_receipt_report_use_receipt_component__WEBPACK_IMPORTED_MODULE_34__["ReportUseReceiptComponent"]),
        __metadata("design:type", _report_use_receipt_report_use_receipt_component__WEBPACK_IMPORTED_MODULE_34__["ReportUseReceiptComponent"])
    ], IndexComponent.prototype, "ReportUseReceiptComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_detail_receipt_report_detail_receipt_component__WEBPACK_IMPORTED_MODULE_35__["ReportDetailReceiptComponent"]),
        __metadata("design:type", _report_detail_receipt_report_detail_receipt_component__WEBPACK_IMPORTED_MODULE_35__["ReportDetailReceiptComponent"])
    ], IndexComponent.prototype, "ReportDetailReceiptComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_license_export_used_license_export_used_component__WEBPACK_IMPORTED_MODULE_28__["LicenseExportUsedComponent"]),
        __metadata("design:type", _license_export_used_license_export_used_component__WEBPACK_IMPORTED_MODULE_28__["LicenseExportUsedComponent"])
    ], IndexComponent.prototype, "LicenseExportUsedComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_detail_report_bill_pharmacy_detail_report_bill_pharmacy_component__WEBPACK_IMPORTED_MODULE_29__["DetailReportBillPharmacyComponent"]),
        __metadata("design:type", _detail_report_bill_pharmacy_detail_report_bill_pharmacy_component__WEBPACK_IMPORTED_MODULE_29__["DetailReportBillPharmacyComponent"])
    ], IndexComponent.prototype, "DetailReportBillPharmacyComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_daily_summary_report_hospital_daily_summary_report_hospital_component__WEBPACK_IMPORTED_MODULE_30__["DailySummaryReportHospitalComponent"]),
        __metadata("design:type", _daily_summary_report_hospital_daily_summary_report_hospital_component__WEBPACK_IMPORTED_MODULE_30__["DailySummaryReportHospitalComponent"])
    ], IndexComponent.prototype, "DailySummaryReportHospitalComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_customer_group_report_customer_group_component__WEBPACK_IMPORTED_MODULE_31__["ReportCustomerGroupComponent"]),
        __metadata("design:type", _report_customer_group_report_customer_group_component__WEBPACK_IMPORTED_MODULE_31__["ReportCustomerGroupComponent"])
    ], IndexComponent.prototype, "ReportCustomerGroupComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_customer_group_detail_report_customer_group_detail_component__WEBPACK_IMPORTED_MODULE_32__["ReportCustomerGroupDetailComponent"]),
        __metadata("design:type", _report_customer_group_detail_report_customer_group_detail_component__WEBPACK_IMPORTED_MODULE_32__["ReportCustomerGroupDetailComponent"])
    ], IndexComponent.prototype, "ReportCustomerGroupDetailComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_hospital_with_vat_major_hospital_with_vat_major_component__WEBPACK_IMPORTED_MODULE_33__["HospitalWithVatMajorComponent"]),
        __metadata("design:type", _hospital_with_vat_major_hospital_with_vat_major_component__WEBPACK_IMPORTED_MODULE_33__["HospitalWithVatMajorComponent"])
    ], IndexComponent.prototype, "HospitalWithVatMajorComponent", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/report/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/report/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_modules_report_shared__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _modules_search_shared__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
            _modules_template_shared__WEBPACK_IMPORTED_MODULE_24__["TemplateService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/license-export-used/license-export-used.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/report/components/license-export-used/license-export-used.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"20\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column  allowMerge=\"true\" caption=\"STT\" [width]=\"5+'%'\" alignment=\"center\" cellTemplate=\"stt\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ký hiệu chứng từ\" dataField=\"license_series\" [width]=\"12+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số chứng từ\" dataField=\"license_number\" [width]=\"8+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ngày chứng từ\" dataField=\"license_date\" dataType=\"date\" format=\"dd/MM/yyyy\"\r\n      dateSerializationFormat=\"yyyy-MM-dd\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Họ tên người bị khấu trừ thuế\" dataField=\"taxpayers_name\" [width]=\"12+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Mã số thuế(Hoặc số CMN; Sổ hộ chiếu)\" dataField=\"id_card\" [width]=\"12+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số tiền thuế\" dataField=\"amount_personal_income_tax_withheld\" [width]=\"12+'%'\" [format]=\"formatter.tong_tien\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ghi chú\" dataField=\"note\" [width]=\"9+'%'\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n          *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'stt'\">\r\n      {{d.rowIndex + 1}}\r\n    </div>\r\n    <dxo-summary>\r\n      <dxi-group-item column='amount' summaryType=\"sum\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-group-item column=\"amount_vat\" summaryType=\"sum\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-total-item column=\"amount\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\" summaryType=\"sum\">\r\n      </dxi-total-item>\r\n      <dxi-total-item column=\"amount_vat\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        summaryType=\"sum\">\r\n      </dxi-total-item>\r\n    </dxo-summary>\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/report/components/license-export-used/license-export-used.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/report/components/license-export-used/license-export-used.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-datagrid-summary-item.dx-datagrid-text-content.dx-datagrid-group-text-content{color:red}.dx-datagrid-summary-item{color:red;background-color:yellow}.mergecells{display:table-cell;vertical-align:middle !important;border-color:rgba(61,70,109,0.5) !important;border-style:solid !important;border-width:0.2px 0.2px 0.2px 0.2px !important;background:white !important;color:black !important}.mergecellselected{background:rgba(175,21,30,0.8) !important;color:white !important}\n"

/***/ }),

/***/ "./src/app/modules/report/components/license-export-used/license-export-used.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/report/components/license-export-used/license-export-used.component.ts ***!
  \************************************************************************************************/
/*! exports provided: LicenseExportUsedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseExportUsedComponent", function() { return LicenseExportUsedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LicenseExportUsedComponent = /** @class */ (function () {
    function LicenseExportUsedComponent(
    // public bsModalRef: BsModalRef,
    authService, modalService, reportService, vatService, translate, vPreviewInvService) {
        this.authService = authService;
        this.modalService = modalService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.vPreviewInvService = vPreviewInvService;
        this.lstfrmData = [];
        this.dataSource = {};
        this.groupTemplate = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
        this.groupIndexKCT = 0;
        this.groupIndex0 = 0;
        this.groupIndex5 = 0;
        this.groupIndex10 = 0;
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    LicenseExportUsedComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        this.loadList(null);
    };
    LicenseExportUsedComponent.prototype.loadList = function (findByData) {
        //  Library.showloading();
        var data = {
            "license": {
                "from_date": this.findData.from_date,
                "to_date": this.findData.to_date,
                "period": this.findData.period,
                "type": this.findData.type,
                "is_view": this.findData.is_view,
                "period_type": this.findData.period_type,
            }
        };
        if (findByData) {
            data = {
                "license": {
                    "from_date": findByData.from_date,
                    "to_date": findByData.to_date,
                    "period": findByData.period,
                    "type": findByData.type,
                    "is_view": findByData.is_view,
                    "period_type": findByData.period_type,
                }
            };
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        //  this.invoiceTypeNames.shift();
        this.dataSource.store = this.reportService.getLicenseUsed(data);
        // this.reportService.getAllInvoiceBuy().subscribe(value => console.log(value));
    };
    LicenseExportUsedComponent.prototype.calculateNetRevenueTotal = function (options) {
        if (options.name === 'amount') {
            options.totalValue = 1000000;
        }
        if (options.name === 'amount_vat') {
            options.totalValue = 2000000;
        }
    };
    LicenseExportUsedComponent.prototype.GetDisplayText = function (d) {
        return d.data.collapsedItems ? d.data.collapsedItems[0].groupName : d.data.items[0].groupName;
    };
    LicenseExportUsedComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    LicenseExportUsedComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    LicenseExportUsedComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    LicenseExportUsedComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    LicenseExportUsedComponent.prototype.onCellPrepared = function (cellInfo) {
    };
    LicenseExportUsedComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    LicenseExportUsedComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    LicenseExportUsedComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    LicenseExportUsedComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    LicenseExportUsedComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    LicenseExportUsedComponent.prototype.view = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.invoice_id);
            }
            var dataView = this.vatService.taodulieuXemMau(ids);
            dataView['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(dataView);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    LicenseExportUsedComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], LicenseExportUsedComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LicenseExportUsedComponent.prototype, "findData", void 0);
    LicenseExportUsedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-license-export-used',
            template: __webpack_require__(/*! ./license-export-used.component.html */ "./src/app/modules/report/components/license-export-used/license-export-used.component.html"),
            styles: [__webpack_require__(/*! ./license-export-used.component.scss */ "./src/app/modules/report/components/license-export-used/license-export-used.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__["ViewInvoiceService"]])
    ], LicenseExportUsedComponent);
    return LicenseExportUsedComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-bc26/report-bc26.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-bc26/report-bc26.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n<dx-data-grid\r\n\r\nid=\"gridReport\"\r\n  [dataSource]=\"dataSource\"\r\n  [showRowLines]=\"true\" \r\n  [allowColumnReordering]=\"true\"\r\n  [allowColumnResizing]=\"true\" \r\n  [showBorders]=\"true\"\r\n  [columnMinWidth]=\"50\" \r\n  [columnAutoWidth]=\"true\" \r\n  [wordWrapEnabled]=\"true\" \r\n  (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n  (onRowPrepared)=\"onRowPrepared($event)\"\r\n  (onRowUpdated)=\"onRowUpdated($event)\"\r\n  (onContentReady)=\"onContentReady($event)\">\r\n  <!-- <dxo-load-panel [enabled]=\"true\"></dxo-load-panel> -->\r\n  <dxo-sorting mode=\"none\"></dxo-sorting>\r\n  <dxi-column dataField=\"invoice_type\" caption=\"Tên loại hóa đơn\" [width]=\"70\" cssClass=\"invoice-type\" [fixed]=\"true\">\r\n    <dxo-lookup \r\n      [dataSource]=\"invoiceTypeNames\" \r\n      displayExpr=\"name\" \r\n      valueExpr=\"code\">\r\n    </dxo-lookup>\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"template_code\" caption=\"Ký hiệu mẫu hóa đơn\" [width]=\"100\" [fixed]=\"true\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Ký hiệu hóa đơn\" [width]=\"70\" [fixed]=\"true\">\r\n  </dxi-column>\r\n\r\n  <dxi-column caption=\"Số tồn đầu kỳ, mua/phát hành trong kỳ\">\r\n     <dxi-column\r\n          caption=\"Tổng số\"\r\n          dataField=\"amount\"\r\n          [width]=\"60\">\r\n     </dxi-column>\r\n     <dxi-column caption=\"Số tồn đầu kỳ\">\r\n        <dxi-column\r\n          caption=\"Từ số\"\r\n          dataField=\"opening_begin_number\"\r\n          [width]=\"70\">\r\n        </dxi-column>\r\n        <dxi-column\r\n          caption=\"Đến số\"\r\n          dataField=\"opening_end_number\"\r\n          [width]=\"70\">\r\n        </dxi-column>\r\n     </dxi-column>\r\n     <dxi-column caption=\"Số mua/phát hành trong kỳ\">\r\n        <dxi-column\r\n          caption=\"Từ số\"\r\n          dataField=\"in_period_release_begin_number\"\r\n          [width]=\"70\">\r\n        </dxi-column>\r\n        <dxi-column\r\n          caption=\"Đến số\"\r\n          dataField=\"in_period_release_end_number\"\r\n          [width]=\"70\">\r\n        </dxi-column>\r\n     </dxi-column>\r\n  </dxi-column>\r\n\r\n  <dxi-column caption=\"Số sử dụng, xóa bỏ, mất, hủy trong kỳ \">\r\n      <dxi-column caption=\"Tổng số sử dụng, xóa bỏ, mất, hủy\">\r\n        <dxi-column\r\n          caption=\"Từ số\"\r\n          dataField=\"in_period_used_begin_number\"\r\n          [width]=\"70\">\r\n        </dxi-column>\r\n        <dxi-column\r\n          caption=\"Đến số\"\r\n          dataField=\"in_period_used_end_number\"\r\n          [width]=\"70\">\r\n        </dxi-column>\r\n        <dxi-column\r\n          caption=\"Cộng\"\r\n          dataField=\"in_period_used_total\"\r\n          alignment=\"center\"\r\n          [width]=\"60\">\r\n        </dxi-column>\r\n     </dxi-column>\r\n      <dxi-column caption=\"Trong đó\">\r\n          <dxi-column\r\n              caption=\"Số lượng đã sử dụng\"\r\n              dataField=\"in_period_used_amount\"\r\n              alignment=\"center\"\r\n              cellTemplate=\"usedNumber\"\r\n              [width]=\"70\">\r\n          </dxi-column>\r\n          <dxi-column caption=\"Xóa bỏ\">\r\n            <dxi-column\r\n              caption=\"Số lượng\"\r\n              cellTemplate=\"deleteNumber\"\r\n              alignment=\"center\"\r\n              dataField=\"in_period_delete_amount\">\r\n            </dxi-column>\r\n            <dxi-column\r\n              caption=\"Số\"\r\n              dataField=\"in_period_delete_list\"\r\n              [width]=\"75\">\r\n            </dxi-column>\r\n          </dxi-column>\r\n          <dxi-column caption=\"Mất\">\r\n            <dxi-column\r\n              caption=\"Số lượng\"\r\n              alignment=\"center\"\r\n              dataField=\"in_period_lost_amount\">\r\n            </dxi-column>\r\n            <dxi-column\r\n              caption=\"Số\"\r\n              dataField=\"in_period_lost_list\"\r\n              [width]=\"70\">\r\n            </dxi-column>\r\n          </dxi-column>\r\n          <dxi-column caption=\"Hủy\">\r\n            <dxi-column\r\n              caption=\"Số lượng\"\r\n              alignment=\"center\"\r\n              dataField=\"in_period_destroy_amount\">\r\n            </dxi-column>\r\n            <dxi-column\r\n              caption=\"Số\"\r\n              dataField=\"in_period_destroy_list\"\r\n              [width]=\"70\">\r\n            </dxi-column>\r\n          </dxi-column>\r\n      </dxi-column>\r\n  </dxi-column>\r\n\r\n  <dxi-column caption=\"Tồn cuối kỳ\">\r\n    <dxi-column\r\n      caption=\"Từ số\"\r\n      dataField=\"closing_begin_number\"\r\n      [width]=\"70\">\r\n    </dxi-column>\r\n    <dxi-column\r\n      caption=\"Đến số\"\r\n      dataField=\"closing_end_number\"\r\n      [width]=\"70\">\r\n    </dxi-column>\r\n    <dxi-column\r\n      caption=\"Số lượng\"\r\n      alignment=\"center\"\r\n      dataField=\"closing_amount\">\r\n    </dxi-column>\r\n  </dxi-column>\r\n  <dxo-summary>\r\n    <dxi-total-item\r\n        name=\"totalAmount\"\r\n        column=\"amount\"\r\n        summaryType=\"sum\"\r\n        displayFormat=\"{0}\">\r\n    </dxi-total-item>\r\n    <dxi-total-item\r\n        name=\"totalInPeriodUsedTotal\"\r\n        column=\"in_period_used_total\"\r\n        summaryType=\"sum\"\r\n        displayFormat=\"{0}\">\r\n    </dxi-total-item>\r\n    <dxi-total-item\r\n        name=\"totalClosingAmount\"\r\n        column=\"closing_amount\"\r\n        summaryType=\"sum\"\r\n        displayFormat=\"{0}\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n  <div *dxTemplate=\"let d of 'usedNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewUsedNumber(d.data)\" routerLink=\"system/search\">{{ d.data.in_period_used_amount }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'deleteNumber'\">\r\n    <a class=\"gach-chan\" (click)=\"viewDeleteNumber(d.data)\" href=\"javascript:void(0)\">{{ d.data.in_period_delete_amount }}</a>\r\n  </div>\r\n \r\n</dx-data-grid>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/report/components/report-bc26/report-bc26.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-bc26/report-bc26.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-bc26/report-bc26.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-bc26/report-bc26.component.ts ***!
  \********************************************************************************/
/*! exports provided: ReportBc26Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportBc26Component", function() { return ReportBc26Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportBc26Component = /** @class */ (function () {
    function ReportBc26Component(
    // public bsModalRef: BsModalRef,
    modalService, reportService, router, authService, translate) {
        var _this = this;
        this.modalService = modalService;
        this.reportService = reportService;
        this.router = router;
        this.authService = authService;
        this.translate = translate;
        this.adress = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["Adress"]();
        this.isDisQuanHuyen = true;
        this.isDisPhuongXa = true;
        this.isDisSoNha = true;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
        this.onSubmit = function (e) {
            var items = [];
            _this.dataSource.forEach(function (item) {
                if (item.invoice_type !== '') {
                    items.push(item);
                }
            });
            if (!_this.province_name) {
                _this.citis.forEach(function (city) {
                    if (city.code === _this.adress.province_code) {
                        _this.province_name = city.name;
                    }
                });
            }
            if (!_this.district_name) {
                _this.quanhuyen.forEach(function (qh) {
                    if (qh.code === _this.adress.district_code) {
                        _this.district_name = qh.name;
                    }
                });
            }
            if (!_this.commune_name) {
                _this.phuongxa.forEach(function (px) {
                    if (px.code === _this.adress.commune_code) {
                        _this.commune_name = px.name;
                    }
                });
            }
            var totalAmount = _this.dataGrid.instance.getTotalSummaryValue('totalAmount');
            var totalInPeriodUsedTotal = _this.dataGrid.instance.getTotalSummaryValue('totalInPeriodUsedTotal');
            var totalClosingAmount = _this.dataGrid.instance.getTotalSummaryValue('totalClosingAmount');
            var data = {
                'report': {
                    'report_period': _this.reportPeriod,
                    'from_date': _this.from_date,
                    'to_date': _this.to_date,
                    'province_code': _this.adress.province_code,
                    'province_name': _this.province_name,
                    'district_code': _this.adress.district_code,
                    'district_name': _this.district_name,
                    'commune_code': _this.adress.commune_code,
                    'commune_name': _this.commune_name,
                    'home_address': _this.adress.home_address,
                    'total_amount': totalAmount,
                    'total_in_period_used_total': totalInPeriodUsedTotal,
                    'total_closing_amount': totalClosingAmount,
                    'items': items
                }
            };
            if (_this.typeCode) {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
                _this.reportService.exportXml(data, _this.typeCode).subscribe(function (res) {
                    if (res.status === 'success') {
                        var file = res.data.report;
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Xuất file XML thành công', 'success');
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(res.message, 'error');
                    }
                    _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
                });
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Bạn phải chọn loại báo cáo', 'error');
            }
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
    }
    ReportBc26Component.prototype.ngOnInit = function () {
        this.loadList(null);
        // if (this.info_export_declaration.commune_code) {
        //   this.adress.commune_code = this.info_export_declaration.commune_code;
        // }
        // if (this.info_export_declaration.home_address) {
        //   this.adress.home_address = this.info_export_declaration.home_address;
        // }
    };
    ReportBc26Component.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportBc26Component.prototype.viewUsedNumber = function (data) {
        if (data.in_period_used_amount > 0) {
            var param = void 0;
            var adjustment_type = [];
            adjustment_type.push('1');
            adjustment_type.push('2');
            adjustment_type.push('3');
            adjustment_type.push('4');
            adjustment_type.push('5');
            param = {
                is_advanced: true,
                startDate: this.findData.from_date,
                endDate: this.findData.to_date,
                template_code: data.template_code,
                invoice_series: data.invoice_series,
                adjustment_type: adjustment_type,
            };
            this.router.navigateByUrl(this.router.createUrlTree(['system/search'], {
                queryParams: param,
                queryParamsHandling: 'merge'
            }));
        }
    };
    ReportBc26Component.prototype.viewDeleteNumber = function (data) {
        if (data.in_period_delete_amount > 0) {
            var param = void 0;
            var adjustment_type = [];
            adjustment_type.push('7');
            param = {
                is_advanced: true,
                startDate: this.findData.from_date,
                endDate: this.findData.to_date,
                template_code: data.template_code,
                invoice_series: data.invoice_series,
                adjustment_type: adjustment_type,
            };
            this.router.navigateByUrl(this.router.createUrlTree(['system/search'], {
                queryParams: param,
                queryParamsHandling: 'merge'
            }));
        }
    };
    ReportBc26Component.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].showloading();
        var data = {
            report: {
                report_period: this.findData.reportPeriod,
                from_date: this.findData.from_date,
                to_date: this.findData.to_date,
            }
        };
        if (findByData) {
            data = {
                report: {
                    report_period: findByData.reportPeriod,
                    from_date: findByData.from_date,
                    to_date: findByData.to_date,
                }
            };
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        //  this.invoiceTypeNames.shift();
        this.dataSource.store = this.reportService.getAll(data, this.findData.typeCode);
        _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].hideloading();
    };
    ReportBc26Component.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
            // e.editorOptions.onKeyDown = (ekey) => {
            // }
        }
    };
    ReportBc26Component.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportBc26Component.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number != '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportBc26Component.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ReportBc26Component.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], ReportBc26Component.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportBc26Component.prototype, "findData", void 0);
    ReportBc26Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-bc26',
            template: __webpack_require__(/*! ./report-bc26.component.html */ "./src/app/modules/report/components/report-bc26/report-bc26.component.html"),
            styles: [__webpack_require__(/*! ./report-bc26.component.scss */ "./src/app/modules/report/components/report-bc26/report-bc26.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ReportBc26Component);
    return ReportBc26Component;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-customer-group-detail/report-customer-group-detail.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-customer-group-detail/report-customer-group-detail.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"20\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column dataField=\"order\" allowMerge=\"true\" caption=\"STT\" [width]=\"5+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"\">\r\n      <dxi-column cellTemplate=\"invoiceNumber\" caption=\"Số hoá đơn\" dataField=\"invoice_number\" [width]=\"8+'%'\"\r\n        alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column caption=\"Ngày, tháng, năm lập hóa đơn\" dataField=\"invoice_date\" [width]=\"12+'%'\" alignment=\"center\">\r\n      </dxi-column>\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tên người mua\" dataField=\"customer_name\" [width]=\"20+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Mã số thuế người mua\" dataField=\"buyer_tax_code\" [width]=\"12+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số vận đơn\" *ngIf=\"ismstGiaNguyen\" dataField=\"transport_number\" [width]=\"10+'%'\"\r\n      alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Doanh thu chưa có thuế GTGT\" dataField=\"amount\" [width]=\"12+'%'\"  [format]=\"formatter.tong_tien\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Thuế suất\" dataField=\"type\" [width]=\"8+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Thuế GTGT\" dataField=\"amount_vat\" [width]=\"12+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ghi chú\" dataField=\"note\" [width]=\"9+'%'\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n          *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <dxo-summary>\r\n      <dxi-group-item column='amount' summaryType=\"sum\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-group-item column=\"amount_vat\" summaryType=\"sum\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-total-item column=\"amount\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\" summaryType=\"sum\">\r\n      </dxi-total-item>\r\n      <dxi-total-item column=\"amount_vat\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        summaryType=\"sum\">\r\n      </dxi-total-item>\r\n    </dxo-summary>\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/report/components/report-customer-group-detail/report-customer-group-detail.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-customer-group-detail/report-customer-group-detail.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-datagrid-summary-item.dx-datagrid-text-content.dx-datagrid-group-text-content{color:red}.dx-datagrid-summary-item{color:red;background-color:yellow}.mergecells{display:table-cell;vertical-align:middle !important;border-color:rgba(61,70,109,0.5) !important;border-style:solid !important;border-width:0.2px 0.2px 0.2px 0.2px !important;background:white !important;color:black !important}.mergecellselected{background:rgba(175,21,30,0.8) !important;color:white !important}table{font-family:arial, sans-serif;border-collapse:collapse;width:100%}td,th{border:1px solid #dddddd;text-align:left;padding:8px}tr:nth-child(even){background-color:#dddddd}\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-customer-group-detail/report-customer-group-detail.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-customer-group-detail/report-customer-group-detail.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ReportCustomerGroupDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCustomerGroupDetailComponent", function() { return ReportCustomerGroupDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportCustomerGroupDetailComponent = /** @class */ (function () {
    function ReportCustomerGroupDetailComponent(authService, reportService, vatService, translate, vPreviewInvService) {
        this.authService = authService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.vPreviewInvService = vPreviewInvService;
        this.lstfrmData = [];
        this.dataSource = {};
        this.groupTemplate = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
        this.groupIndexKCT = 0;
        this.groupIndex0 = 0;
        this.groupIndex5 = 0;
        this.groupIndex10 = 0;
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ReportCustomerGroupDetailComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_2__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        this.loadList(null);
    };
    ReportCustomerGroupDetailComponent.prototype.loadList = function (findByData) {
        //  Library.showloading();
        var data = {
            "report": {
                'report_period': this.findData.report_period,
                "from_date": this.findData.from_date,
                "to_date": this.findData.to_date,
                "template_id": "",
                "user_ids": this.findData.user_ids,
                "tax_code": "",
                "verify_code": "",
                "export_place": this.findData.export_place,
                "customer_type": this.findData.customer_type,
            }
        };
        if (findByData) {
            data = {
                "report": {
                    'report_period': findByData.report_period,
                    "from_date": findByData.from_date,
                    "to_date": findByData.to_date,
                    "template_id": "",
                    "user_ids": findByData.user_ids,
                    "tax_code": "",
                    "verify_code": "",
                    "export_place": findByData.export_place,
                    "customer_type": findByData.customer_type,
                }
            };
        }
        this.dataSource = {};
        this.dataSource.store = this.reportService.getHospitalVATDetail(data);
    };
    ReportCustomerGroupDetailComponent.prototype.calculateNetRevenueTotal = function (options) {
        if (options.name === 'amount') {
            options.totalValue = 1000000;
        }
        if (options.name === 'amount_vat') {
            options.totalValue = 2000000;
        }
    };
    ReportCustomerGroupDetailComponent.prototype.GetDisplayText = function (d) {
        return d.data.collapsedItems ? d.data.collapsedItems[0].groupName : d.data.items[0].groupName;
    };
    ReportCustomerGroupDetailComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    ReportCustomerGroupDetailComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportCustomerGroupDetailComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportCustomerGroupDetailComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportCustomerGroupDetailComponent.prototype.onCellPrepared = function (cellInfo) {
    };
    ReportCustomerGroupDetailComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportCustomerGroupDetailComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportCustomerGroupDetailComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportCustomerGroupDetailComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ReportCustomerGroupDetailComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    ReportCustomerGroupDetailComponent.prototype.view = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.invoice_id);
            }
            var dataView = this.vatService.taodulieuXemMau(ids);
            dataView['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(dataView);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    ReportCustomerGroupDetailComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], ReportCustomerGroupDetailComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportCustomerGroupDetailComponent.prototype, "findData", void 0);
    ReportCustomerGroupDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-group-customer-detail',
            template: __webpack_require__(/*! ./report-customer-group-detail.component.html */ "./src/app/modules/report/components/report-customer-group-detail/report-customer-group-detail.component.html"),
            styles: [__webpack_require__(/*! ./report-customer-group-detail.component.scss */ "./src/app/modules/report/components/report-customer-group-detail/report-customer-group-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_1__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_6__["ViewInvoiceService"]])
    ], ReportCustomerGroupDetailComponent);
    return ReportCustomerGroupDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-customer-group/report-customer-group.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-customer-group/report-customer-group.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"20\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column allowMerge=\"true\" caption=\"STT\" alignment=\"center\" cellTemplate=\"stt\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Thuế suất\" dataField=\"name\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tiền thuế\" dataField=\"amount_vat\" [format]=\"formatter.tong_tien\"  alignment=\"right\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Doanh thu trước thuế\" dataField=\"amount\" alignment=\"right\" [format]=\"formatter.tong_tien\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Doanh thu sau thuế\" dataField=\"amount_after_vat\" alignment=\"right\" [format]=\"formatter.tong_tien\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ghi chú\" dataField=\"\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n          *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'stt'\">\r\n      {{d.rowIndex + 1}}\r\n    </div>\r\n    <dxo-summary>\r\n      <dxi-group-item column='amount' summaryType=\"sum\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-group-item column=\"amount_vat\" summaryType=\"sum\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-total-item column=\"amount\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\" summaryType=\"sum\">\r\n      </dxi-total-item>\r\n      <dxi-total-item column=\"amount_vat\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        summaryType=\"sum\">\r\n      </dxi-total-item>\r\n    </dxo-summary>\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-customer-group/report-customer-group.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-customer-group/report-customer-group.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-datagrid-summary-item.dx-datagrid-text-content.dx-datagrid-group-text-content{color:red}.dx-datagrid-summary-item{color:red;background-color:yellow}.mergecells{display:table-cell;vertical-align:middle !important;border-color:rgba(61,70,109,0.5) !important;border-style:solid !important;border-width:0.2px 0.2px 0.2px 0.2px !important;background:white !important;color:black !important}.mergecellselected{background:rgba(175,21,30,0.8) !important;color:white !important}table{font-family:arial, sans-serif;border-collapse:collapse;width:100%}td,th{border:1px solid #dddddd;text-align:left;padding:8px}tr:nth-child(even){background-color:#dddddd}\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-customer-group/report-customer-group.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-customer-group/report-customer-group.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ReportCustomerGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCustomerGroupComponent", function() { return ReportCustomerGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportCustomerGroupComponent = /** @class */ (function () {
    function ReportCustomerGroupComponent(
    // public bsModalRef: BsModalRef,
    authService, modalService, reportService, vatService, translate, vPreviewInvService) {
        this.authService = authService;
        this.modalService = modalService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.vPreviewInvService = vPreviewInvService;
        this.lstfrmData = [];
        this.dataSource = {};
        this.groupTemplate = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
        this.groupIndexKCT = 0;
        this.groupIndex0 = 0;
        this.groupIndex5 = 0;
        this.groupIndex10 = 0;
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ReportCustomerGroupComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_3__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        this.loadList(null);
    };
    ReportCustomerGroupComponent.prototype.loadList = function (findByData) {
        var _this = this;
        var data = {
            "report": {
                "from_date": this.findData.from_date,
                "to_date": this.findData.to_date,
                "tax_code": "",
                "customer_type": this.findData.customer_type,
                "is_view": this.findData.is_view,
            }
        };
        if (findByData) {
            data = {
                "report": {
                    "from_date": findByData.from_date,
                    "to_date": findByData.to_date,
                    "tax_code": "",
                    "customer_type": findByData.customer_type,
                    "is_view": findByData.is_view,
                }
            };
        }
        this.reportService.getHospitalVAT(data).subscribe(function (res) {
            var obj = res.data;
            var newArray = [];
            _this.data = Object.entries(obj);
            if (_this.data.length > 0) {
                _this.data.forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    value.name = key;
                    newArray.push(value);
                });
            }
            setTimeout(function () {
                _this.dataSource = newArray;
            }, 500);
        });
    };
    ReportCustomerGroupComponent.prototype.calculateNetRevenueTotal = function (options) {
        if (options.name === 'amount') {
            options.totalValue = 1000000;
        }
        if (options.name === 'amount_vat') {
            options.totalValue = 2000000;
        }
    };
    ReportCustomerGroupComponent.prototype.GetDisplayText = function (d) {
        return d.data.collapsedItems ? d.data.collapsedItems[0].groupName : d.data.items[0].groupName;
    };
    ReportCustomerGroupComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    ReportCustomerGroupComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportCustomerGroupComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportCustomerGroupComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportCustomerGroupComponent.prototype.onCellPrepared = function (cellInfo) {
    };
    ReportCustomerGroupComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportCustomerGroupComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportCustomerGroupComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportCustomerGroupComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ReportCustomerGroupComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    ReportCustomerGroupComponent.prototype.view = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.invoice_id);
            }
            var dataView = this.vatService.taodulieuXemMau(ids);
            dataView['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(dataView);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    ReportCustomerGroupComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], ReportCustomerGroupComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportCustomerGroupComponent.prototype, "findData", void 0);
    ReportCustomerGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-customer-group',
            template: __webpack_require__(/*! ./report-customer-group.component.html */ "./src/app/modules/report/components/report-customer-group/report-customer-group.component.html"),
            styles: [__webpack_require__(/*! ./report-customer-group.component.scss */ "./src/app/modules/report/components/report-customer-group/report-customer-group.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__["ViewInvoiceService"]])
    ], ReportCustomerGroupComponent);
    return ReportCustomerGroupComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-declaration/report-declaration.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-declaration/report-declaration.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\"\r\n   [dataSource]=\"dataSource\"\r\n    [showRowLines]=\"true\"\r\n    [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [showBorders]=\"true\"\r\n    [columnMinWidth]=\"20\"\r\n    [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\"\r\n    (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n    (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\"\r\n    (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column dataField=\"order\" allowMerge=\"true\" caption=\"STT\" [width]=\"5+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"\">\r\n      <dxi-column cellTemplate=\"invoiceNumber\" caption=\"Số hoá đơn\" dataField=\"invoice_number\" [width]=\"8+'%'\" alignment=\"center\" >\r\n      </dxi-column>\r\n      <dxi-column caption=\"Ngày, tháng, năm lập hóa đơn\" dataField=\"invoice_date\" [width]=\"12+'%'\" alignment=\"center\" >\r\n      </dxi-column>\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tên người mua\" dataField=\"customer_name\" [width]=\"20+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Mã số thuế người mua\" dataField=\"buyer_tax_code\" [width]=\"12+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số vận đơn\" *ngIf=\"ismstGiaNguyen\"   dataField=\"transport_number\" [width]=\"10+'%'\" alignment=\"center\">\r\n  </dxi-column>\r\n    <dxi-column caption=\"Doanh thu chưa có thuế GTGT\" dataField=\"amount\" [width]=\"12+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Thuế suất\" dataField=\"type\" [width]=\"8+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Thuế GTGT\" dataField=\"amount_vat\" [width]=\"12+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ghi chú\" dataField=\"note\" [width]=\"9+'%'\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n  <dxo-pager\r\n      [showPageSizeSelector]=\"true\"\r\n      [allowedPageSizes]=\"[15, 50, 100]\"\r\n      [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\"\r\n      infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n  </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/report/components/report-declaration/report-declaration.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-declaration/report-declaration.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-datagrid-summary-item.dx-datagrid-text-content.dx-datagrid-group-text-content{color:red}.dx-datagrid-summary-item{color:red;background-color:yellow}.mergecells{display:table-cell;vertical-align:middle !important;border-color:rgba(61,70,109,0.5) !important;border-style:solid !important;border-width:0.2px 0.2px 0.2px 0.2px !important;background:white !important;color:black !important}.mergecellselected{background:rgba(175,21,30,0.8) !important;color:white !important}\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-declaration/report-declaration.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-declaration/report-declaration.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ReportDeclarationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDeclarationComponent", function() { return ReportDeclarationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportDeclarationComponent = /** @class */ (function () {
    function ReportDeclarationComponent(authService, reportService, vatService, translate, vPreviewInvService) {
        this.authService = authService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.vPreviewInvService = vPreviewInvService;
        this.lstfrmData = [];
        this.dataSource = {};
        this.groupTemplate = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
        this.groupIndexKCT = 0;
        this.groupIndex0 = 0;
        this.groupIndex5 = 0;
        this.groupIndex10 = 0;
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ReportDeclarationComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        this.loadList(null);
    };
    ReportDeclarationComponent.prototype.loadList = function (findByData) {
        //  Library.showloading();
        var data = {
            'report': {
                'report_period': this.findData.reportPeriod,
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
            }
        };
        if (findByData) {
            data = {
                'report': {
                    'report_period': findByData.reportPeriod,
                    'from_date': findByData.from_date,
                    'to_date': findByData.to_date,
                }
            };
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAll(data, "declaration");
        // this.reportService.getAllInvoiceBuy().subscribe(value => console.log(value));
    };
    ReportDeclarationComponent.prototype.customizeText = function (e) {
        var formatter = new Intl.NumberFormat('ja-JP');
        var totalMoney = '0';
        if (e && e.value) {
            var _arr = e.value.split('&');
            if (_arr.length > 1) {
                // totalMoney = "TTHĐ bán ra:" + '\n' + formatter.format(parseFloat(_arr[0] || "0"));
                if (_arr[0] != '')
                    totalMoney = formatter.format(parseFloat(_arr[0] || '0'));
                // if (_arr[1] != "")
                //   totalMoney += '\n' + "TTHĐ giảm trừ:" + '\n' + formatter.format(parseFloat(_arr[1] || "0"));
            }
        }
        return totalMoney;
    };
    ReportDeclarationComponent.prototype.calculateNetRevenueTotal = function (options) {
        // if (options.summaryProcess === 'start') {
        //   options.totalValue = 0;
        // }
        // if (options.summaryProcess === 'calculate') {
        //   if (options.value !== undefined && options.totalValue !== undefined) {
        //     if (options.groupIndex === 0) {
        //       if (options.value.AccountType === 'Expenses') {
        //         options.totalValue = options.totalValue - parseInt(options.name === 'year1' ? options.value.Year1 : options.value.Year2  );
        //       } else {
        //         options.totalValue = options.totalValue + parseInt(options.name === 'year1' ? options.value.Year1 : options.value.Year2);
        //       }
        //     } else {
        //       options.totalValue = options.totalValue + parseInt(options.name === 'year1' ? options.value.Year1 : options.value.Year2);
        //     }
        //   }
        // }
        // if (options.summaryProcess === 'finalize') {
        // }
        if (options.name === 'amount') {
            options.totalValue = 1000000;
        }
        if (options.name === 'amount_vat') {
            options.totalValue = 2000000;
        }
    };
    ReportDeclarationComponent.prototype.GetDisplayText = function (d) {
        return d.data.collapsedItems ? d.data.collapsedItems[0].groupName : d.data.items[0].groupName;
    };
    ReportDeclarationComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    ReportDeclarationComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportDeclarationComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportDeclarationComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportDeclarationComponent.prototype.onCellPrepared = function (cellInfo) {
        // if (cellInfo.rowType === 'data') {
        //   if (cellInfo.cellElement) {
        //     if (cellInfo.cellElement.addClass)
        //       cellInfo.cellElement.addClass('mergecells');
        //     // color cell on selection
        //     cellInfo.cellElement.click(function () {
        //       $('.mergecellselected').removeClass('mergecellselected');
        //       $(this).addClass('mergecellselected');
        //     });
        //   }
        //   if (cellInfo.rowIndex > 0 && cellInfo.column.command !== 'edit') {
        //     if (cellInfo.component.cellValue(cellInfo.rowIndex - 1, cellInfo.column.dataField) == cellInfo.value) {
        //       if (cellInfo.component.cellValue(cellInfo.rowIndex - 1, cellInfo.column.dataField)) {
        //         const prev = this.mergelements[cellInfo.rowIndex - 1][cellInfo.column.dataField];
        //         if (!this.mergelements[cellInfo.rowIndex]) {
        //           this.mergelements[cellInfo.rowIndex] = {};
        //         }
        //         this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = prev;
        //         if (prev) {
        //           if(cellInfo.cellElement.css)
        //           cellInfo.cellElement.css('display', 'none');
        //           const span = prev.attr('rowspan');
        //           if (span) {
        //             prev.attr('rowspan', Number(span) + 1);
        //           } else {
        //             prev.attr('rowspan', 2);
        //           }
        //         }
        //       } else {
        //         if (!this.mergelements[cellInfo.rowIndex]) {
        //           this.mergelements[cellInfo.rowIndex] = {};
        //         }
        //         this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = cellInfo.cellElement;
        //       }
        //     } else {
        //       if (!this.mergelements[cellInfo.rowIndex]) {
        //         this.mergelements[cellInfo.rowIndex] = {};
        //       }
        //       this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = cellInfo.cellElement;
        //     }
        //   } else {
        //     if (!this.mergelements[cellInfo.rowIndex]) {
        //       this.mergelements[cellInfo.rowIndex] = {};
        //     }
        //     this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = cellInfo.cellElement;
        //   }
        // }
    };
    ReportDeclarationComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportDeclarationComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportDeclarationComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportDeclarationComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    // customizeText(e) {
    //   if (!e.value) {
    //     e.value = 0;
    //   }
    //   return e.value;
    // }
    ReportDeclarationComponent.prototype.view = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.invoice_id);
            }
            var dataView = this.vatService.taodulieuXemMau(ids);
            dataView['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(dataView);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    ReportDeclarationComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], ReportDeclarationComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportDeclarationComponent.prototype, "findData", void 0);
    ReportDeclarationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-declaration',
            template: __webpack_require__(/*! ./report-declaration.component.html */ "./src/app/modules/report/components/report-declaration/report-declaration.component.html"),
            styles: [__webpack_require__(/*! ./report-declaration.component.scss */ "./src/app/modules/report/components/report-declaration/report-declaration.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_1__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_6__["ViewInvoiceService"]])
    ], ReportDeclarationComponent);
    return ReportDeclarationComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-detail-product/report-detail-product.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-detail-product/report-detail-product.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-context-menu [items]=\"contextMenu\" target=\"#gridReport\" >\r\n  </dx-context-menu>\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"50\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n\r\n    <dxi-column caption=\"STT\" dataField=\"order\"  [width]=\"10\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.MENU.invoice_number}}\" dataField=\"invoice_number\" [width]=\"90\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column  caption=\"{{_translate.GRID.INVOICE.template_code}}\" dataField=\"template_code\" alignment=\"center\" >\r\n    </dxi-column>\r\n    <dxi-column  caption=\"{{_translate.GRID.INVOICE.invoice_series}}\" dataField=\"invoice_series\" alignment=\"center\" >\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.invoice_date}}\" dataField=\"invoice_date\" dataType=\"date\" format=\"dd/MM/yyyy\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.customer_code}}\" dataField=\"customer_code\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.buyer_tax_code}}\" dataField=\"buyer_tax_code\" [width]=\"100\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.customer_name}}\" dataField=\"customer_name\" [width]=\"250\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.MENU.name_buyer}}\" dataField=\"buyer_name\" [width]=\"250\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.product_code}}\" dataField=\"product_code\" [width]=\"90\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.MENU.name_of_goods_and_service}}\" dataField=\"product_name\" [width]=\"250\">\r\n    </dxi-column>\r\n    <dxi-column *ngIf=\"isHoaDonKinhDoanhXe\" caption=\"{{_translate.GRID.INVOICE_DETAILS.engine_number}}\" dataField=\"engine_number\" [width]=\"100\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column *ngIf=\"isHoaDonKinhDoanhXe\" caption=\"{{_translate.GRID.INVOICE_DETAILS.chassis_number}}\" dataField=\"chassis_number\" [width]=\"100\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column *ngIf=\"isVeMayBayTongHop\" caption=\"{{_translate.CONTROLL.LABEL.othertax}}\" dataField=\"other_tax\" [width]=\"100\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column *ngIf=\"isVeMayBayTongHop\" caption=\"{{_translate.CONTROLL.LABEL.money_other}}\" dataField=\"other_charge\" [width]=\"100\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.MENU.unit}}\" dataField=\"unit_code\" [width]=\"70\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.quantity}}\" dataField=\"quantity\" [width]=\"60\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.price}}\" dataField=\"price\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.amount}}\" dataField=\"amount\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"VAT\" dataField=\"vat\" [width]=\"60\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.amount_vat}}\" dataField=\"amount_vat\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.total_money}}\" dataField=\"amount_after_vat\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.GENERAL.note}}\" dataField=\"adjustment_type\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.importer}}\" dataField=\"user_name\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxo-remote-operations  [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager\r\n        [showPageSizeSelector]=\"true\"\r\n        [allowedPageSizes]=\"[15, 50, 100]\"\r\n        [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\"\r\n        infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-detail-product/report-detail-product.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-detail-product/report-detail-product.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-detail-product/report-detail-product.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-detail-product/report-detail-product.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ReportDetailProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDetailProductComponent", function() { return ReportDetailProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportDetailProductComponent = /** @class */ (function () {
    function ReportDetailProductComponent(modalService, reportService, translate, authService) {
        this.modalService = modalService;
        this.reportService = reportService;
        this.translate = translate;
        this.authService = authService;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.isHoaDonKinhDoanhXe = false;
        this.isVeMayBayTongHop = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.isTypeAccount = this.authService.getAccountType();
    }
    ReportDetailProductComponent.prototype.ngOnInit = function () {
        this.loadList(null);
    };
    ReportDetailProductComponent.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var template_id = this.findData.template_id;
        var data;
        if (this.isTypeAccount === 'HS-SV') {
            data = {
                'report': {
                    'report_period': this.findData.reportPeriod,
                    'from_date': this.findData.from_date,
                    'to_date': this.findData.to_date,
                    'template_id': this.findData.template_id,
                    'user_ids': this.findData.user_id,
                    'class_codes': this.findData.class_codes,
                    'group_type_invoice': this.findData.group_type_invoice
                }
            };
        }
        else {
            data = {
                'report': {
                    'report_period': this.findData.reportPeriod,
                    'from_date': this.findData.from_date,
                    'to_date': this.findData.to_date,
                    'template_id': this.findData.template_id,
                    'user_ids': this.findData.user_id,
                    'group_type_invoice': this.findData.group_type_invoice
                }
            };
        }
        if (findByData) {
            if (this.isTypeAccount === 'HS-SV') {
                data = {
                    'report': {
                        'report_period': findByData.reportPeriod,
                        'from_date': findByData.from_date,
                        'to_date': findByData.to_date,
                        'template_id': findByData.template_id,
                        'user_ids': findByData.user_id,
                        'class_codes': findByData.class_codes,
                        'group_type_invoice': findByData.group_type_invoice
                    }
                };
            }
            else {
                data = {
                    'report': {
                        'report_period': findByData.reportPeriod,
                        'from_date': findByData.from_date,
                        'to_date': findByData.to_date,
                        'template_id': findByData.template_id,
                        'user_ids': findByData.user_id,
                        'group_type_invoice': findByData.group_type_invoice
                    }
                };
            }
            template_id = findByData.template_id;
        }
        if (this.templates && template_id !== '') {
            this.template = this.templates.filter(function (p) { return p.template_id === template_id; })[0];
            if (this.template) {
                this.isHoaDonKinhDoanhXe = this.template.template_type === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonKinhDoanhXe;
                this.isVeMayBayTongHop = this.template.template_type === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayTongHop;
            }
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAll(data, 'detail-product');
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
    };
    ReportDetailProductComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    ReportDetailProductComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportDetailProductComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportDetailProductComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportDetailProductComponent.prototype.onCellPrepared = function (e) {
        if (e.columnIndex === 0 && e.rowType === 'data') {
            if (this.itemSystemExport.includes(e.rowIndex)) {
                e.cellElement.querySelector('.dx-link-delete').remove();
            }
        }
    };
    ReportDetailProductComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportDetailProductComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportDetailProductComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportDetailProductComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ReportDetailProductComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], ReportDetailProductComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportDetailProductComponent.prototype, "findData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportDetailProductComponent.prototype, "templates", void 0);
    ReportDetailProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-detail-product',
            template: __webpack_require__(/*! ./report-detail-product.component.html */ "./src/app/modules/report/components/report-detail-product/report-detail-product.component.html"),
            styles: [__webpack_require__(/*! ./report-detail-product.component.scss */ "./src/app/modules/report/components/report-detail-product/report-detail-product.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ReportDetailProductComponent);
    return ReportDetailProductComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-detail-receipt/report-detail-receipt.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-detail-receipt/report-detail-receipt.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid\r\n    [dataSource]=\"dataSource\"\r\n    [showRowLines]=\"true\"  \r\n    [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [wordWrapEnabled]=\"true\"\r\n    [showBorders]=\"true\"\r\n  >\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column dataField=\"order\" allowMerge=\"true\" caption=\"STT\" [width]=\"5+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"receipt_number\" caption=\"{{_translate.GRID.INVOICE.receipt_number}}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"receipt_date\" caption=\"{{_translate.GRID.INVOICE.receipt_date}}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"payer_name\" caption=\"{{_translate.GRID.INVOICE.payer_name}}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"payer_tax_code\" caption=\"{{_translate.GRID.INVOICE.buyer_tax_code}}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"payer_address\" caption=\"{{_translate.CONTROLL.LABEL.address}}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"total_payment_string\" caption=\"{{_translate.GRID.INVOICE_DETAILS.total_money}}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"note\" caption=\"{{_translate.GRID.GENERAL.note}}\" alignment=\"center\">\r\n    </dxi-column>\r\n    \r\n\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[ 15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n\r\n  </dx-data-grid>\r\n</div>\r\n\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/report/components/report-detail-receipt/report-detail-receipt.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-detail-receipt/report-detail-receipt.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-detail-receipt/report-detail-receipt.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-detail-receipt/report-detail-receipt.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ReportDetailReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDetailReceiptComponent", function() { return ReportDetailReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportDetailReceiptComponent = /** @class */ (function () {
    function ReportDetailReceiptComponent(authService, spinner, socketService, reportService) {
        this.authService = authService;
        this.spinner = spinner;
        this.socketService = socketService;
        this.reportService = reportService;
        this.dataSource = {
            store: []
        };
        this._translate = this.authService.getTranslate();
    }
    ReportDetailReceiptComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(currentUser.account.tax_code);
        this.loadList(null);
    };
    ReportDetailReceiptComponent.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var params = {
            'report': {
                'report_period': this.findData.reportPeriod,
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
                'is_view': true,
                'template_id': this.findData.template_id
            }
        };
        if (findByData) {
            params = {
                'report': {
                    "from_date": findByData.from_date,
                    "to_date": findByData.to_date,
                    "is_view": true,
                    "template_id": findByData.template_id ? findByData.template_id : null
                }
            };
        }
        this.dataSource = {
            id: 'order',
            store: []
        };
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAlluseReceipt('/receipts/detail-report', params);
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportDetailReceiptComponent.prototype, "findData", void 0);
    ReportDetailReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-detail-receipt',
            template: __webpack_require__(/*! ./report-detail-receipt.component.html */ "./src/app/modules/report/components/report-detail-receipt/report-detail-receipt.component.html"),
            styles: [__webpack_require__(/*! ./report-detail-receipt.component.scss */ "./src/app/modules/report/components/report-detail-receipt/report-detail-receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__["ReportService"]])
    ], ReportDetailReceiptComponent);
    return ReportDetailReceiptComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-fast-hassyu/report-fast-hassyu.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-fast-hassyu/report-fast-hassyu.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <!-- <dx-context-menu [items]=\"contextMenu\" target=\"#gridReport\" >\r\n  </dx-context-menu> -->\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"50\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\">\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    \r\n    <dxi-column caption=\"STT\" dataField=\"order\"  [width]=\"10\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.customer_code}}\" dataField=\"customer_code\" [width]=\"79\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.customer_name}}\" dataField=\"customer_name\" [width]=\"172\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.invoice_voucher}}\" dataField=\"invoice_date\" dataType=\"date\" format=\"dd/MM/yyyy\" [width]=\"93\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.template_code}}\" dataField=\"template_code\" [width]=\"111\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.invoice_series}}\" dataField=\"invoice_series\" [width]=\"79\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.MENU.invoice_number}}\" dataField=\"invoice_number\" [width]=\"97\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.product_common}}\" dataField=\"general_interpretation\" [width]=\"179\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.amount}}\" dataField=\"amount\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"VAT\" dataField=\"vat\" [width]=\"60\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.amount_vat}}\" dataField=\"amount_vat\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.total_money}}\" dataField=\"amount_after_vat\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.GENERAL.note}}\" dataField=\"note\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxo-remote-operations  [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager\r\n        [showPageSizeSelector]=\"true\"\r\n        [allowedPageSizes]=\"[15, 50, 100]\"\r\n        [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\"\r\n        infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-fast-hassyu/report-fast-hassyu.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-fast-hassyu/report-fast-hassyu.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-fast-hassyu/report-fast-hassyu.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-fast-hassyu/report-fast-hassyu.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ReportFastHassyuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFastHassyuComponent", function() { return ReportFastHassyuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
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






var ReportFastHassyuComponent = /** @class */ (function () {
    function ReportFastHassyuComponent(modalService, reportService, translate, authService) {
        this.modalService = modalService;
        this.reportService = reportService;
        this.translate = translate;
        this.authService = authService;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.isHoaDonKinhDoanhXe = false;
        this.isVeMayBayTongHop = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.isTypeAccount = this.authService.getAccountType();
    }
    ReportFastHassyuComponent.prototype.ngOnInit = function () {
        this.loadList(null);
    };
    ReportFastHassyuComponent.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var data;
        data = {
            'report': {
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
                'report_period': this.findData.reportPeriod,
            }
        };
        if (findByData) {
            data = {
                'report': {
                    'from_date': findByData.from_date,
                    'to_date': findByData.to_date,
                    'report_period': this.findData.reportPeriod,
                }
            };
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAll(data, 'fast');
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], ReportFastHassyuComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportFastHassyuComponent.prototype, "findData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportFastHassyuComponent.prototype, "templates", void 0);
    ReportFastHassyuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-fast-hassyu',
            template: __webpack_require__(/*! ./report-fast-hassyu.component.html */ "./src/app/modules/report/components/report-fast-hassyu/report-fast-hassyu.component.html"),
            styles: [__webpack_require__(/*! ./report-fast-hassyu.component.scss */ "./src/app/modules/report/components/report-fast-hassyu/report-fast-hassyu.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ReportFastHassyuComponent);
    return ReportFastHassyuComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-fast/report-fast.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-fast/report-fast.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <!-- <dx-context-menu [items]=\"contextMenu\" target=\"#gridReport\" >\r\n  </dx-context-menu> -->\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"50\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\">\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n\r\n    <dxi-column caption=\"STT\" dataField=\"order\"  [width]=\"10\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.template_code}}\" dataField=\"template_code\" [width]=\"119\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.invoice_series}}\" dataField=\"invoice_series\" [width]=\"71\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.MENU.invoice_number}}\" dataField=\"invoice_number\" [width]=\"90\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.invoice_voucher}}\" dataField=\"invoice_date\" dataType=\"date\" format=\"dd/MM/yyyy\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Hình thức thanh toán\" dataField=\"payment_method_view_name\" [width]=\"90\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.customer_name}}\" dataField=\"customer_name\" [width]=\"417\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Nội dung hóa đơn\" dataField=\"destroy_reason\" [width]=\"251\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Trạng thái hóa đơn\" dataField=\"adjustment_type\" [width]=\"82\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxo-remote-operations  [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager\r\n        [showPageSizeSelector]=\"true\"\r\n        [allowedPageSizes]=\"[15, 50, 100]\"\r\n        [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\"\r\n        infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-fast/report-fast.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-fast/report-fast.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-fast/report-fast.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-fast/report-fast.component.ts ***!
  \********************************************************************************/
/*! exports provided: ReportFastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFastComponent", function() { return ReportFastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
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






var ReportFastComponent = /** @class */ (function () {
    function ReportFastComponent(modalService, reportService, translate, authService) {
        this.modalService = modalService;
        this.reportService = reportService;
        this.translate = translate;
        this.authService = authService;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.isHoaDonKinhDoanhXe = false;
        this.isVeMayBayTongHop = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.isTypeAccount = this.authService.getAccountType();
    }
    ReportFastComponent.prototype.ngOnInit = function () {
        this.loadList(null);
    };
    ReportFastComponent.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var data;
        data = {
            'report': {
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
                'report_period': this.findData.reportPeriod,
            }
        };
        if (findByData) {
            data = {
                'report': {
                    'from_date': findByData.from_date,
                    'to_date': findByData.to_date,
                    'report_period': this.findData.reportPeriod,
                }
            };
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAll(data, 'fast');
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], ReportFastComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportFastComponent.prototype, "findData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportFastComponent.prototype, "templates", void 0);
    ReportFastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-fast',
            template: __webpack_require__(/*! ./report-fast.component.html */ "./src/app/modules/report/components/report-fast/report-fast.component.html"),
            styles: [__webpack_require__(/*! ./report-fast.component.scss */ "./src/app/modules/report/components/report-fast/report-fast.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ReportFastComponent);
    return ReportFastComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-hospital-fee/report-hospital-fee.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-hospital-fee/report-hospital-fee.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-context-menu [items]=\"contextMenu\" target=\"#gridReport\" >\r\n  </dx-context-menu>\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"50\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n\r\n    <!-- <dxi-column caption=\"STT\" dataField=\"order\"  [width]=\"10\" alignment=\"center\">\r\n    </dxi-column> -->\r\n    <dxi-column *ngIf=\"ishospital\" caption=\"{{_translate.CONTROLL.LABEL.export_place}}\" dataField=\"export_place\" [width]=\"187\">\r\n    </dxi-column>\r\n    <dxi-column *ngIf=\"ishospital\" caption=\"{{_translate.CONTROLL.LABEL.customer_group}}\" dataField=\"customer_type\" [width]=\"128\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.importer}}\" dataField=\"name\" [width]=\"120\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.MENU.invoice_number}}\" dataField=\"invoice_number\" [width]=\"75\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.template_code}}\" dataField=\"template_code\" [width]=\"102\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.invoice_series}}\" dataField=\"invoice_series\" [width]=\"77\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.invoice_date}}\" dataField=\"invoice_date\" [width]=\"95\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tên bệnh nhân\" dataField=\"buyer_name\" [width]=\"148\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số thẻ BHYT\" dataField=\"customer_code\" [width]=\"143\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.address}}\" dataField=\"buyer_address\" [width]=\"271\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.total_money}}\" dataField=\"total_payment\" [width]=\"150\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.processing_status}}\" dataField=\"adjustment_type\" [width]=\"180\">\r\n    </dxi-column>\r\n    \r\n    <dxo-remote-operations  [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager\r\n        [showPageSizeSelector]=\"true\"\r\n        [allowedPageSizes]=\"[15, 50, 100]\"\r\n        [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\"\r\n        infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-hospital-fee/report-hospital-fee.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-hospital-fee/report-hospital-fee.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-hospital-fee/report-hospital-fee.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-hospital-fee/report-hospital-fee.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ReportHospitalFeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportHospitalFeeComponent", function() { return ReportHospitalFeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportHospitalFeeComponent = /** @class */ (function () {
    function ReportHospitalFeeComponent(modalService, reportService, translate, authService) {
        this.modalService = modalService;
        this.reportService = reportService;
        this.translate = translate;
        this.authService = authService;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.isHoaDonKinhDoanhXe = false;
        this.isVeMayBayTongHop = false;
        this.ishospital = true;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.isTypeAccount = this.authService.getAccountType();
    }
    ReportHospitalFeeComponent.prototype.ngOnInit = function () {
        this.loadList(null);
    };
    ReportHospitalFeeComponent.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var template_id = this.findData.template_id;
        var data;
        data = {
            'report': {
                'report_period': this.findData.reportPeriod,
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
                'template_id': this.findData.template_id,
                'user_ids': this.findData.user_id,
                'adjustment_types': this.findData.adjustment_types,
                'export_places': this.findData.export_places,
                'customer_types': this.findData.customer_types,
            }
        };
        if (findByData) {
            data = {
                'report': {
                    'report_period': findByData.reportPeriod,
                    'from_date': findByData.from_date,
                    'to_date': findByData.to_date,
                    'template_id': findByData.template_id,
                    'user_ids': findByData.user_id,
                    'adjustment_types': findByData.adjustment_types,
                    'customer_types': findByData.customer_types,
                    'export_places': findByData.export_places,
                }
            };
            template_id = findByData.template_id;
        }
        if (this.typeCode == _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].mabaocao.hospitalUser) {
            this.ishospital = false;
        }
        else
            this.ishospital = true;
        if (this.templates && template_id !== '') {
            this.template = this.templates.filter(function (p) { return p.template_id === template_id; })[0];
            if (this.template) {
                this.isHoaDonKinhDoanhXe = this.template.template_type === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonKinhDoanhXe;
                this.isVeMayBayTongHop = this.template.template_type === _config_sEnum__WEBPACK_IMPORTED_MODULE_6__["sEnum"].templatetype.HoaDonVeMayBayTongHop;
            }
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAll(data, 'hospital');
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
    };
    ReportHospitalFeeComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    ReportHospitalFeeComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportHospitalFeeComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportHospitalFeeComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportHospitalFeeComponent.prototype.onCellPrepared = function (e) {
        if (e.columnIndex === 0 && e.rowType === 'data') {
            if (this.itemSystemExport.includes(e.rowIndex)) {
                e.cellElement.querySelector('.dx-link-delete').remove();
            }
        }
    };
    ReportHospitalFeeComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportHospitalFeeComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportHospitalFeeComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportHospitalFeeComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ReportHospitalFeeComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], ReportHospitalFeeComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportHospitalFeeComponent.prototype, "findData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportHospitalFeeComponent.prototype, "templates", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportHospitalFeeComponent.prototype, "typeCode", void 0);
    ReportHospitalFeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-hospital-fee',
            template: __webpack_require__(/*! ./report-hospital-fee.component.html */ "./src/app/modules/report/components/report-hospital-fee/report-hospital-fee.component.html"),
            styles: [__webpack_require__(/*! ./report-hospital-fee.component.scss */ "./src/app/modules/report/components/report-hospital-fee/report-hospital-fee.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ReportHospitalFeeComponent);
    return ReportHospitalFeeComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-hospital-synthesis/report-hospital-synthesis.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-hospital-synthesis/report-hospital-synthesis.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-context-menu [items]=\"contextMenu\" target=\"#gridReport\" >\r\n  </dx-context-menu>\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"50\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n\r\n    <dxi-column caption=\"STT\" dataField=\"order\"  [width]=\"5+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.template_code}}\" dataField=\"template_code\" [width]=\"110\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.invoice_series}}\" dataField=\"invoice_series\" [width]=\"15+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Nội dung thu\" dataField=\"customer_type\" [width]=\"25+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số lượng\">\r\n      <dxi-column\r\n           caption=\"Tổng\"\r\n           dataField=\"number_invoice\"\r\n           [width]=\"80\">\r\n      </dxi-column>\r\n      <dxi-column   \r\n          caption=\"Đã sử dụng\"\r\n          dataField=\"number_invoice_used\"\r\n          [width]=\"80\">\r\n      </dxi-column>\r\n      <dxi-column\r\n           caption=\"Đã xóa bỏ\"\r\n           dataField=\"number_invoice_cancel\"\r\n           [width]=\"80\">\r\n      </dxi-column>\r\n   </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.total_money}}\" dataField=\"total_money\" [width]=\"25+'%'\" alignment=\"right\">\r\n    </dxi-column>\r\n    <dxo-remote-operations  [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager\r\n        [showPageSizeSelector]=\"true\"\r\n        [allowedPageSizes]=\"[15, 50, 100]\"\r\n        [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\"\r\n        infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-hospital-synthesis/report-hospital-synthesis.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-hospital-synthesis/report-hospital-synthesis.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-hospital-synthesis/report-hospital-synthesis.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-hospital-synthesis/report-hospital-synthesis.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ReportHospitalSynthesisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportHospitalSynthesisComponent", function() { return ReportHospitalSynthesisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
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






var ReportHospitalSynthesisComponent = /** @class */ (function () {
    function ReportHospitalSynthesisComponent(modalService, reportService, translate, authService) {
        this.modalService = modalService;
        this.reportService = reportService;
        this.translate = translate;
        this.authService = authService;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.isHoaDonKinhDoanhXe = false;
        this.isVeMayBayTongHop = false;
        this.ishospital = true;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.isTypeAccount = this.authService.getAccountType();
    }
    ReportHospitalSynthesisComponent.prototype.ngOnInit = function () {
        this.loadList(null);
    };
    ReportHospitalSynthesisComponent.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var template_id = this.findData.template_id;
        var data;
        data = {
            'report': {
                'report_period': this.findData.reportPeriod,
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
                'template_id': this.findData.template_id,
                'user_ids': this.findData.user_id,
            }
        };
        if (findByData) {
            data = {
                'report': {
                    'report_period': findByData.reportPeriod,
                    'from_date': findByData.from_date,
                    'to_date': findByData.to_date,
                    'template_id': findByData.template_id,
                    'user_ids': findByData.user_id,
                }
            };
            template_id = findByData.template_id;
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAll(data, 'hospital-synthetic');
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
    };
    ReportHospitalSynthesisComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    ReportHospitalSynthesisComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportHospitalSynthesisComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportHospitalSynthesisComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportHospitalSynthesisComponent.prototype.onCellPrepared = function (e) {
        if (e.columnIndex === 0 && e.rowType === 'data') {
            if (this.itemSystemExport.includes(e.rowIndex)) {
                e.cellElement.querySelector('.dx-link-delete').remove();
            }
        }
    };
    ReportHospitalSynthesisComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportHospitalSynthesisComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportHospitalSynthesisComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportHospitalSynthesisComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ReportHospitalSynthesisComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], ReportHospitalSynthesisComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportHospitalSynthesisComponent.prototype, "findData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportHospitalSynthesisComponent.prototype, "templates", void 0);
    ReportHospitalSynthesisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-hospital-synthesis',
            template: __webpack_require__(/*! ./report-hospital-synthesis.component.html */ "./src/app/modules/report/components/report-hospital-synthesis/report-hospital-synthesis.component.html"),
            styles: [__webpack_require__(/*! ./report-hospital-synthesis.component.scss */ "./src/app/modules/report/components/report-hospital-synthesis/report-hospital-synthesis.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ReportHospitalSynthesisComponent);
    return ReportHospitalSynthesisComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-invoice-buy/report-invoice-buy.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-invoice-buy/report-invoice-buy.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\"\r\n                [dataSource]=\"dataSource\"\r\n                [showRowLines]=\"true\"\r\n                [allowColumnReordering]=\"true\"\r\n                [allowColumnResizing]=\"true\"\r\n                [showBorders]=\"true\"\r\n                [columnMinWidth]=\"20\"\r\n                [columnAutoWidth]=\"true\"\r\n                [wordWrapEnabled]=\"true\"\r\n                (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n                (onRowPrepared)=\"onRowPrepared($event)\"\r\n                (onRowUpdated)=\"onRowUpdated($event)\"\r\n                (onContentReady)=\"onContentReady($event)\"\r\n                (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column dataField=\"order\" allowMerge=\"true\" caption=\"STT\" [width]=\"5+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"\">\r\n      <dxi-column cellTemplate=\"invoiceNumber\" caption=\"Số hoá đơn\" dataField=\"invoice_number\" [width]=\"8+'%'\" alignment=\"center\" >\r\n      </dxi-column>\r\n      <dxi-column caption=\"Ngày, tháng, năm lập hóa đơn\" dataField=\"invoice_date\" [width]=\"12+'%'\" alignment=\"center\" >\r\n      </dxi-column>\r\n    </dxi-column>\r\n    <dxi-column caption=\"Đơn vị bán hàng\" dataField=\"seller_legal_name\" [width]=\"20+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Mã số thuế\" dataField=\"seller_tax_code\" [width]=\"12+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Giá trị HDDV mua vào chưa có thuế\" dataField=\"sum_not_vat\" [width]=\"12+'%'\" format=\"0,###.##\">\r\n    </dxi-column>\r\n    <dxi-column cellTemplate=\"vat\" caption=\"Thuế GTGT đủ điều kiện khấu trừ\" dataField=\"sum_vat\" [width]=\"8+'%'\" format=\"0,###.##\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ghi chú\" dataField=\"note\" [width]=\"9+'%'\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"edit(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <dxo-summary>\r\n      <dxi-group-item\r\n        column='amount'\r\n        summaryType=\"sum\"\r\n        name='amount'\r\n        valueFormat=\"0,###.##\"\r\n        displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-group-item\r\n        column=\"amount_vat\"\r\n        summaryType=\"sum\"\r\n        name='amount_vat'\r\n        valueFormat=\"0,###.##\"\r\n        displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-total-item\r\n        column=\"amount\"\r\n        name='amount'\r\n        valueFormat=\"0,###.##\"\r\n        displayFormat=\"{0}\"\r\n        summaryType=\"sum\">\r\n      </dxi-total-item>\r\n      <dxi-total-item\r\n        column=\"amount_vat\"\r\n        name='amount_vat'\r\n        valueFormat=\"0,###.##\"\r\n        displayFormat=\"{0}\"\r\n        summaryType=\"sum\">\r\n      </dxi-total-item>\r\n    </dxo-summary>\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager\r\n      [showPageSizeSelector]=\"true\"\r\n      [allowedPageSizes]=\"[15, 50, 100]\"\r\n      [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\"\r\n      infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n    <div *dxTemplate=\"let d of 'vat'\">\r\n      <p>{{ d.data.sum_vat}}</p>\r\n    </div>\r\n  </dx-data-grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-invoice-buy/report-invoice-buy.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-invoice-buy/report-invoice-buy.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mergecells{display:table-cell;vertical-align:middle !important;border-color:rgba(61,70,109,0.5) !important;border-style:solid !important;border-width:0.2px 0.2px 0.2px 0.2px !important;background:white !important;color:black !important}.mergecellselected{background:rgba(175,21,30,0.8) !important;color:white !important}::ng-deep .dx-datagrid-summary-item.dx-datagrid-text-content.dx-datagrid-group-text-content{color:red}.dx-datagrid-summary-item{color:red;background-color:yellow}\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-invoice-buy/report-invoice-buy.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-invoice-buy/report-invoice-buy.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ReportInvoiceBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportInvoiceBuyComponent", function() { return ReportInvoiceBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/library/public/v-string.service */ "./src/app/core/library/public/v-string.service.ts");
/* harmony import */ var _core_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/library */ "./src/app/core/library/index.ts");
/* harmony import */ var _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/helper/Helper */ "./src/app/core/helper/Helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ReportInvoiceBuyComponent = /** @class */ (function () {
    function ReportInvoiceBuyComponent(authService, modalService, reportService, vatService, translate) {
        this.authService = authService;
        this.modalService = modalService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ReportInvoiceBuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = this.authService.getCurrentUser();
        var mst = _core_library_public_v_string_service__WEBPACK_IMPORTED_MODULE_7__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        var sub2 = this.vatService.getConfig().subscribe(function (rs) {
            if (rs.status === 'success') {
                _this.configs = rs.data.configs;
                var _obj = rs.data.configs.filter(function (p) { return p.name === 'system_parameter'; })[0];
                if (_obj) {
                    _this.system_parameter = JSON.parse(_obj.value);
                }
            }
            else {
                // Library.notify('Có lỗi khi tải cấu hình', 'error');
            }
        }, function (err) {
        }, function () {
            sub2.unsubscribe();
        });
        this.loadList(null);
    };
    ReportInvoiceBuyComponent.prototype.loadList = function (findByData) {
        var data = {
            'report': {
                'report_period': this.findData.reportPeriod,
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
            }
        };
        if (findByData) {
            data = {
                'report': {
                    'report_period': findByData.reportPeriod,
                    'from_date': findByData.from_date,
                    'to_date': findByData.to_date,
                }
            };
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAllInvoiceBuy(data);
    };
    ReportInvoiceBuyComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportInvoiceBuyComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportInvoiceBuyComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_library__WEBPACK_IMPORTED_MODULE_8__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportInvoiceBuyComponent.prototype.onCellPrepared = function (cellInfo) {
        if (cellInfo.rowType === 'data') {
            if (cellInfo.rowIndex > 0 && cellInfo.column.command !== 'edit') {
                if (cellInfo.component.cellValue(cellInfo.rowIndex - 1, cellInfo.column.dataField) == cellInfo.value) {
                    if (cellInfo.component.cellValue(cellInfo.rowIndex - 1, cellInfo.column.dataField)) {
                        var prev = this.mergelements[cellInfo.rowIndex - 1][cellInfo.column.dataField];
                        if (!this.mergelements[cellInfo.rowIndex]) {
                            this.mergelements[cellInfo.rowIndex] = {};
                        }
                        this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = prev;
                        if (prev) {
                            // cellInfo.cellElement.css('display', 'none');
                            var span = prev.attr('rowspan');
                            if (span) {
                                prev.attr('rowspan', Number(span) + 1);
                            }
                            else {
                                prev.attr('rowspan', 2);
                            }
                        }
                    }
                    else {
                        if (!this.mergelements[cellInfo.rowIndex]) {
                            this.mergelements[cellInfo.rowIndex] = {};
                        }
                        // this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = cellInfo.cellElement;
                    }
                }
                else {
                    if (!this.mergelements[cellInfo.rowIndex]) {
                        this.mergelements[cellInfo.rowIndex] = {};
                    }
                }
            }
            else {
                if (!this.mergelements[cellInfo.rowIndex]) {
                    this.mergelements[cellInfo.rowIndex] = {};
                }
            }
        }
    };
    ReportInvoiceBuyComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportInvoiceBuyComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_helper_Helper__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportInvoiceBuyComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportInvoiceBuyComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    ReportInvoiceBuyComponent.prototype.edit = function (data) {
        window.open("/system/invoice-buy/edit-invoice/" + data.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"])
    ], ReportInvoiceBuyComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportInvoiceBuyComponent.prototype, "findData", void 0);
    ReportInvoiceBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-invoice-buy',
            template: __webpack_require__(/*! ./report-invoice-buy.component.html */ "./src/app/modules/report/components/report-invoice-buy/report-invoice-buy.component.html"),
            styles: [__webpack_require__(/*! ./report-invoice-buy.component.scss */ "./src/app/modules/report/components/report-invoice-buy/report-invoice-buy.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ReportInvoiceBuyComponent);
    return ReportInvoiceBuyComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-license-detail/report-license-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-license-detail/report-license-detail.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"50\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column width=\"100\" dataField=\"template_code\" allowMerge=\"true\" caption=\"Mẫu số\" alignment=\"center\"\r\n      [fixed]=\"true\" fixedPosition=\"left\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ký hiệu\" width=\"100\" dataField=\"license_series\" [fixed]=\"true\" fixedPosition=\"left\"\r\n      alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số chứng từ\" width=\"100\" dataField=\"license_number\" alignment=\"center\" [fixed]=\"true\"\r\n      fixedPosition=\"left\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ngày chứng từ\" width=\"100\" dataField=\"license_date\" [fixed]=\"true\" fixedPosition=\"left\"\r\n      alignment=\"center\" dataType=\"date\" format=\"dd/MM/yyyy\" dateSerializationFormat=\"dd/MM/yyyy\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Họ và tên người nộp thuế\" width=\"150\" dataField=\"taxpayers_name\" [fixed]=\"true\"\r\n      fixedPosition=\"left\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Mã số thuế\" width=\"120\" dataField=\"taxpayers_tax_code\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Quốc tịch\" width=\"100\" dataField=\"nationality\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Địa chỉ\" width=\"200\" dataField=\"taxpayers_address\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số điện thoại\" width=\"120\" dataField=\"taxpayers_mobile\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Là cá nhân cư trú\" width=\"100\" dataField=\"resident_individual\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số CMND/CCCD/HC\" width=\"100\" dataField=\"id_card\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Nơi cấp\" width=\"100\" dataField=\"card_issuer_address\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ngày cấp\" width=\"100\" dataField=\"card_issuer_date\" dataType=\"date\" format=\"dd/MM/yyyy\"\r\n      dateSerializationFormat=\"dd/MM/yyyy\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Khoản thu nhập\" width=\"100\" dataField=\"income\" alignment=\"center\" >\r\n    </dxi-column>\r\n    <dxi-column caption=\"Khoản đóng bảo hiểm bắt buộc\" width=\"100\" dataField=\"compulsory_insurance_payment\" [format]=\"formatter.tong_tien\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tháng trả thu nhập\" width=\"100\" dataField=\"month_pay_income\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Năm trả thu nhập\" width=\"100\" dataField=\"year_pay_income\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tổng TN chịu thuế phải khấu trừ\" width=\"100\" dataField=\"total_taxable_income_deducted\" [format]=\"formatter.tong_tien\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tổng TN tính thuế\" width=\"100\" dataField=\"total_taxable_income\" [format]=\"formatter.tong_tien\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số thuế TNCN đã khấu trừ\" width=\"100\" dataField=\"amount_personal_income_tax_withheld\" [format]=\"formatter.tong_tien\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tổng TN chịu thuế đã trả\" width=\"100\" dataField=\"total_taxable_income_paid\" [format]=\"formatter.tong_tien\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số TNCN còn được nhận\" width=\"100\" dataField=\"amount_personal_income_still_received\" [format]=\"formatter.tong_tien\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ghi chú\" width=\"100\" dataField=\"note\" alignment=\"center\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span\r\n          *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <dxo-summary>\r\n      <dxi-group-item column='amount' summaryType=\"sum\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-group-item column=\"amount_vat\" summaryType=\"sum\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-total-item column=\"amount\" name='amount' valueFormat=\"0,###.##\" displayFormat=\"{0}\" summaryType=\"sum\">\r\n      </dxi-total-item>\r\n      <dxi-total-item column=\"amount_vat\" name='amount_vat' valueFormat=\"0,###.##\" displayFormat=\"{0}\"\r\n        summaryType=\"sum\">\r\n      </dxi-total-item>\r\n    </dxo-summary>\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"timer\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/report/components/report-license-detail/report-license-detail.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-license-detail/report-license-detail.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-datagrid-summary-item.dx-datagrid-text-content.dx-datagrid-group-text-content{color:red}.dx-datagrid-summary-item{color:red;background-color:yellow}.mergecells{display:table-cell;vertical-align:middle !important;border-color:rgba(61,70,109,0.5) !important;border-style:solid !important;border-width:0.2px 0.2px 0.2px 0.2px !important;background:white !important;color:black !important}.mergecellselected{background:rgba(175,21,30,0.8) !important;color:white !important}\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-license-detail/report-license-detail.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-license-detail/report-license-detail.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ReportLicenseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportLicenseDetailComponent", function() { return ReportLicenseDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportLicenseDetailComponent = /** @class */ (function () {
    function ReportLicenseDetailComponent(authService, reportService, vatService, translate, vPreviewInvService) {
        this.authService = authService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.vPreviewInvService = vPreviewInvService;
        this.lstfrmData = [];
        this.dataSource = {};
        this.groupTemplate = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
        this.groupIndexKCT = 0;
        this.groupIndex0 = 0;
        this.groupIndex5 = 0;
        this.groupIndex10 = 0;
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ReportLicenseDetailComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        this.formatter = _core_index__WEBPACK_IMPORTED_MODULE_2__["VChanggeMoneyService"].getFormatterColumnInv(this.configs.decimal_places_json);
        var currentUser = this.authService.getCurrentUser();
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_2__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        this.loadList(null);
    };
    ReportLicenseDetailComponent.prototype.loadList = function (findByData) {
        var data = {
            "license": {
                "from_date": this.findData.from_date,
                "to_date": this.findData.to_date,
                "period": this.findData.period,
                "type": this.findData.type,
                "is_view": this.findData.is_view,
                "period_type": this.findData.period_type,
            }
        };
        if (findByData) {
            data = {
                "license": {
                    "from_date": findByData.from_date,
                    "to_date": findByData.to_date,
                    "period": findByData.period,
                    "type": findByData.type,
                    "is_view": findByData.is_view,
                    "period_type": findByData.period_type,
                }
            };
        }
        this.dataSource = {};
        this.dataSource.store = this.reportService.getLicenseDetail(data);
    };
    ReportLicenseDetailComponent.prototype.calculateNetRevenueTotal = function (options) {
        if (options.name === 'amount') {
            options.totalValue = 1000000;
        }
        if (options.name === 'amount_vat') {
            options.totalValue = 2000000;
        }
    };
    ReportLicenseDetailComponent.prototype.GetDisplayText = function (d) {
        return d.data.collapsedItems ? d.data.collapsedItems[0].groupName : d.data.items[0].groupName;
    };
    ReportLicenseDetailComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    ReportLicenseDetailComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportLicenseDetailComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportLicenseDetailComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportLicenseDetailComponent.prototype.onCellPrepared = function (cellInfo) {
        // if (cellInfo.rowType === 'data') {
        //   if (cellInfo.cellElement) {
        //     if (cellInfo.cellElement.addClass)
        //       cellInfo.cellElement.addClass('mergecells');
        //     // color cell on selection
        //     cellInfo.cellElement.click(function () {
        //       $('.mergecellselected').removeClass('mergecellselected');
        //       $(this).addClass('mergecellselected');
        //     });
        //   }
        //   if (cellInfo.rowIndex > 0 && cellInfo.column.command !== 'edit') {
        //     if (cellInfo.component.cellValue(cellInfo.rowIndex - 1, cellInfo.column.dataField) == cellInfo.value) {
        //       if (cellInfo.component.cellValue(cellInfo.rowIndex - 1, cellInfo.column.dataField)) {
        //         const prev = this.mergelements[cellInfo.rowIndex - 1][cellInfo.column.dataField];
        //         if (!this.mergelements[cellInfo.rowIndex]) {
        //           this.mergelements[cellInfo.rowIndex] = {};
        //         }
        //         this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = prev;
        //         if (prev) {
        //           if(cellInfo.cellElement.css)
        //           cellInfo.cellElement.css('display', 'none');
        //           const span = prev.attr('rowspan');
        //           if (span) {
        //             prev.attr('rowspan', Number(span) + 1);
        //           } else {
        //             prev.attr('rowspan', 2);
        //           }
        //         }
        //       } else {
        //         if (!this.mergelements[cellInfo.rowIndex]) {
        //           this.mergelements[cellInfo.rowIndex] = {};
        //         }
        //         this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = cellInfo.cellElement;
        //       }
        //     } else {
        //       if (!this.mergelements[cellInfo.rowIndex]) {
        //         this.mergelements[cellInfo.rowIndex] = {};
        //       }
        //       this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = cellInfo.cellElement;
        //     }
        //   } else {
        //     if (!this.mergelements[cellInfo.rowIndex]) {
        //       this.mergelements[cellInfo.rowIndex] = {};
        //     }
        //     this.mergelements[cellInfo.rowIndex][cellInfo.column.dataField] = cellInfo.cellElement;
        //   }
        // }
    };
    ReportLicenseDetailComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportLicenseDetailComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportLicenseDetailComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportLicenseDetailComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ReportLicenseDetailComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    ReportLicenseDetailComponent.prototype.view = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.invoice_id);
            }
            var dataView = this.vatService.taodulieuXemMau(ids);
            dataView['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_2__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(dataView);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    ReportLicenseDetailComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], ReportLicenseDetailComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportLicenseDetailComponent.prototype, "findData", void 0);
    ReportLicenseDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-license-detail',
            template: __webpack_require__(/*! ./report-license-detail.component.html */ "./src/app/modules/report/components/report-license-detail/report-license-detail.component.html"),
            styles: [__webpack_require__(/*! ./report-license-detail.component.scss */ "./src/app/modules/report/components/report-license-detail/report-license-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_1__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_6__["ViewInvoiceService"]])
    ], ReportLicenseDetailComponent);
    return ReportLicenseDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-list-invoice/report-list-invoice.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-list-invoice/report-list-invoice.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-context-menu [items]=\"contextMenu\" target=\"#gridReport\" >\r\n  </dx-context-menu>\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"50\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n\r\n    <dxi-column caption=\"STT\" dataField=\"order\"  [width]=\"10\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column cellTemplate=\"invoiceNumber\" caption=\"{{_translate.MENU.invoice_number}}\" sortOrder=\"desc\" [sortIndex]=\"1\" dataField=\"invoice_number\" [width]=\"90\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column  caption=\"{{_translate.GRID.INVOICE.template_code}}\" dataField=\"template_code\" alignment=\"center\" >\r\n    </dxi-column>\r\n    <dxi-column  caption=\"{{_translate.GRID.INVOICE.invoice_series}}\" dataField=\"invoice_series\" alignment=\"center\" >\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.invoice_date}}\" sortOrder=\"desc\" [sortIndex]=\"0\" dataField=\"invoice_date\" dataType=\"date\" format=\"dd/MM/yyyy\" [width]=\"90\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.receipts_no}}\" dataField=\"receipts_no\" [width]=\"90\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.customer_code}}\" dataField=\"customer_code\" [width]=\"90\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.buyer_tax_code}}\" dataField=\"buyer_tax_code\" [width]=\"100\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE.customer_name}}\" dataField=\"customer_name\" [width]=\"250\" alignment=\"left\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.address}}\" dataField=\"buyer_address\" [width]=\"250\" alignment=\"left\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.buyer_name}}\" dataField=\"buyer_name\" [width]=\"165\" alignment=\"left\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.currency_code}}\" dataField=\"currency_code\" [width]=\"71\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.currency_rate}}\" dataField=\"currency_rate\" [width]=\"143\" alignment=\"right\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.amount_discount}}\" dataField=\"amount_discount\" [width]=\"147\" alignment=\"right\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.amount}}\" dataField=\"amount\" [width]=\"147\" alignment=\"right\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.amount_vat}}\" dataField=\"total_amount_vat\" [width]=\"147\" alignment=\"right\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.INVOICE_DETAILS.total_money}}\" dataField=\"total_payment\" [width]=\"172\" alignment=\"right\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.GRID.GENERAL.note}}\" dataField=\"adjustment_type\" [width]=\"151\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"{{_translate.CONTROLL.LABEL.importer}}\" dataField=\"user_export\" [width]=\"150\" alignment=\"left\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <dxo-remote-operations  [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager\r\n        [showPageSizeSelector]=\"true\"\r\n        [allowedPageSizes]=\"[15, 50, 100]\"\r\n        [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\"\r\n        infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-list-invoice/report-list-invoice.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-list-invoice/report-list-invoice.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-list-invoice/report-list-invoice.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-list-invoice/report-list-invoice.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ReportListInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListInvoiceComponent", function() { return ReportListInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_sEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @config/sEnum */ "./src/app/config/sEnum.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportListInvoiceComponent = /** @class */ (function () {
    function ReportListInvoiceComponent(reportService, translate, authService, vatService, vPreviewInvService) {
        this.reportService = reportService;
        this.translate = translate;
        this.authService = authService;
        this.vatService = vatService;
        this.vPreviewInvService = vPreviewInvService;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.isHoaDonKinhDoanhXe = false;
        this.isVeMayBayTongHop = false;
        this.configs = {};
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.isTypeAccount = this.authService.getAccountType();
    }
    ReportListInvoiceComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        this.loadList(null);
    };
    ReportListInvoiceComponent.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var template_id = this.findData.template_id;
        var data;
        if (this.isTypeAccount === 'HS-SV') {
            data = {
                'report': {
                    'report_period': this.findData.reportPeriod,
                    'from_date': this.findData.from_date,
                    'to_date': this.findData.to_date,
                    'template_id': this.findData.template_id,
                    'user_ids': this.findData.user_id,
                    'class_codes': this.findData.class_codes,
                    'group_type_invoice': this.findData.group_type_invoice
                }
            };
        }
        else {
            data = {
                'report': {
                    'report_period': this.findData.reportPeriod,
                    'from_date': this.findData.from_date,
                    'to_date': this.findData.to_date,
                    'template_id': this.findData.template_id,
                    'user_ids': this.findData.user_id,
                    'group_type_invoice': this.findData.group_type_invoice
                }
            };
        }
        if (findByData) {
            if (this.isTypeAccount === 'HS-SV') {
                data = {
                    'report': {
                        'report_period': findByData.reportPeriod,
                        'from_date': findByData.from_date,
                        'to_date': findByData.to_date,
                        'template_id': findByData.template_id,
                        'user_ids': findByData.user_id,
                        'class_codes': findByData.class_codes,
                        'group_type_invoice': findByData.group_type_invoice
                    }
                };
            }
            else {
                data = {
                    'report': {
                        'report_period': findByData.reportPeriod,
                        'from_date': findByData.from_date,
                        'to_date': findByData.to_date,
                        'template_id': findByData.template_id,
                        'user_ids': findByData.user_id,
                        'group_type_invoice': findByData.group_type_invoice
                    }
                };
            }
            template_id = findByData.template_id;
        }
        if (this.templates && template_id !== '') {
            this.template = this.templates.filter(function (p) { return p.template_id === template_id; })[0];
            if (this.template) {
                this.isHoaDonKinhDoanhXe = this.template.template_type === _config_sEnum__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.HoaDonKinhDoanhXe;
                this.isVeMayBayTongHop = this.template.template_type === _config_sEnum__WEBPACK_IMPORTED_MODULE_5__["sEnum"].templatetype.HoaDonVeMayBayTongHop;
            }
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAll(data, 'sold');
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
    };
    ReportListInvoiceComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    ReportListInvoiceComponent.prototype.view = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.id);
            }
            var dataView = this.vatService.taodulieuXemMau(ids);
            dataView['configs'] = _config_sEnum__WEBPACK_IMPORTED_MODULE_5__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(dataView);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    ReportListInvoiceComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportListInvoiceComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportListInvoiceComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportListInvoiceComponent.prototype.onCellPrepared = function (e) {
        if (e.columnIndex === 0 && e.rowType === 'data') {
            if (this.itemSystemExport.includes(e.rowIndex)) {
                e.cellElement.querySelector('.dx-link-delete').remove();
            }
        }
    };
    ReportListInvoiceComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportListInvoiceComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_1__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportListInvoiceComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportListInvoiceComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ReportListInvoiceComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    ReportListInvoiceComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxDataGridComponent"])
    ], ReportListInvoiceComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportListInvoiceComponent.prototype, "findData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportListInvoiceComponent.prototype, "templates", void 0);
    ReportListInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-list-invoice',
            template: __webpack_require__(/*! ./report-list-invoice.component.html */ "./src/app/modules/report/components/report-list-invoice/report-list-invoice.component.html"),
            styles: [__webpack_require__(/*! ./report-list-invoice.component.scss */ "./src/app/modules/report/components/report-list-invoice/report-list-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_modules_report_shared__WEBPACK_IMPORTED_MODULE_2__["ReportService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_6__["VatService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_7__["ViewInvoiceService"]])
    ], ReportListInvoiceComponent);
    return ReportListInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-list/report-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-list/report-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid id=\"gridReport\"\r\n   [dataSource]=\"dataSource\"\r\n    [showRowLines]=\"true\"\r\n     [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n     [showBorders]=\"true\"\r\n      [columnMinWidth]=\"20\"\r\n       [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\"\r\n     (onEditorPreparing)=\"onEditorPreparing($event)\"\r\n      (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\"\r\n     (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column dataField=\"order\" allowMerge=\"true\" caption=\"STT\" [width]=\"5+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"\">\r\n      <dxi-column cellTemplate=\"invoiceNumber\" caption=\"Số hoá đơn\" dataField=\"invoice_number\" alignment=\"center\" >\r\n      </dxi-column>\r\n      <dxi-column  caption=\"Mẫu số\" dataField=\"template_code\" alignment=\"center\" >\r\n      </dxi-column>\r\n      <dxi-column  caption=\"Kí hiệu\" dataField=\"invoice_series\" alignment=\"center\" >\r\n      </dxi-column>\r\n      <dxi-column caption=\"Ngày, tháng, năm lập hóa đơn\" dataField=\"invoice_date\" alignment=\"center\" >\r\n      </dxi-column>\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tên người mua\" dataField=\"customer_name\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Mã số thuế người mua\" dataField=\"buyer_tax_code\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số vận đơn\" *ngIf=\"ismstGiaNguyen\"   dataField=\"transport_number\" alignment=\"center\">\r\n  </dxi-column>\r\n    <dxi-column caption=\"Doanh thu chưa có thuế GTGT\" dataField=\"amount\" >\r\n    </dxi-column>\r\n    <dxi-column caption=\"Thuế suất\" dataField=\"type\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Thuế GTGT\" dataField=\"amount_vat\" >\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ghi chú\" dataField=\"note\">\r\n    </dxi-column>\r\n    <div *dxTemplate=\"let d of 'invoiceNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"view(d.data)\" href=\"javascript:void(0)\">{{ d.data.invoice_number }}<span *ngIf=\"d.data.time_print_conversion\">-CĐ ({{ d.data.time_print_conversion }})</span></a>\r\n    </div>\r\n    <dxo-summary>\r\n      <dxi-group-item\r\n      column='amount'\r\n          summaryType=\"sum\"\r\n          name='amount'\r\n          valueFormat=\"0,###.##\"\r\n          displayFormat=\"{0}\"\r\n          [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-group-item\r\n      column=\"amount_vat\"\r\n          summaryType=\"sum\"\r\n          name='amount_vat'\r\n          valueFormat=\"0,###.##\"\r\n          displayFormat=\"{0}\"\r\n          [alignByColumn]=\"true\">\r\n      </dxi-group-item>\r\n      <dxi-total-item\r\n          column=\"amount\"\r\n          name='amount'\r\n          valueFormat=\"0,###.##\"\r\n          displayFormat=\"{0}\"\r\n          summaryType=\"sum\">\r\n        </dxi-total-item>\r\n        <dxi-total-item\r\n          column=\"amount_vat\"\r\n          name='amount_vat'\r\n          valueFormat=\"0,###.##\"\r\n          displayFormat=\"{0}\"\r\n          summaryType=\"sum\">\r\n    </dxi-total-item>\r\n  </dxo-summary>\r\n  <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n  <dxo-pager\r\n      [showPageSizeSelector]=\"true\"\r\n      [allowedPageSizes]=\"[15, 50, 100]\"\r\n      [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\"\r\n      infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n  </dxo-pager>\r\n  </dx-data-grid>\r\n</div>\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/report/components/report-list/report-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-list/report-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .dx-datagrid-summary-item.dx-datagrid-text-content.dx-datagrid-group-text-content{color:red}.dx-datagrid-summary-item{color:red;background-color:yellow}.mergecells{display:table-cell;vertical-align:middle !important;border-color:rgba(61,70,109,0.5) !important;border-style:solid !important;border-width:0.2px 0.2px 0.2px 0.2px !important;background:white !important;color:black !important}.mergecellselected{background:rgba(175,21,30,0.8) !important;color:white !important}::ng-deep .view-invoice{max-width:100%;margin:0px;height:100%}\n"

/***/ }),

/***/ "./src/app/modules/report/components/report-list/report-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-list/report-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: ReportListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListComponent", function() { return ReportListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/service/view-invoice.service */ "./src/app/shared/service/view-invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ReportListComponent = /** @class */ (function () {
    function ReportListComponent(
    // public bsModalRef: BsModalRef,
    authService, modalService, reportService, vatService, translate, route, socketService, spinner, vPreviewInvService) {
        this.authService = authService;
        this.modalService = modalService;
        this.reportService = reportService;
        this.vatService = vatService;
        this.translate = translate;
        this.route = route;
        this.socketService = socketService;
        this.spinner = spinner;
        this.vPreviewInvService = vPreviewInvService;
        this.lstfrmData = [];
        this.dataSource = {};
        this.groupTemplate = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
        this.groupIndexKCT = 0;
        this.groupIndex0 = 0;
        this.groupIndex5 = 0;
        this.groupIndex10 = 0;
        this.mergelements = {};
        this.select = {};
        this.configs = {};
        this.system_parameter = {};
        this.ismstGiaNguyen = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
    }
    ReportListComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_3__["VStringService"]._getValueToString(currentUser.account.tax_code);
        if (mst === '0309554758') {
            this.ismstGiaNguyen = true;
        }
        this.loadList(null);
    };
    ReportListComponent.prototype.loadList = function (findByData) {
        //  Library.showloading();
        var data = {
            'report': {
                'report_period': this.findData.reportPeriod,
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
            }
        };
        if (findByData) {
            data = {
                'report': {
                    'report_period': findByData.reportPeriod,
                    'from_date': findByData.from_date,
                    'to_date': findByData.to_date,
                }
            };
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAll(data, this.findData.typeCode);
    };
    ReportListComponent.prototype.loadList03DL = function (findByData) {
        //  Library.showloading();
        var data = {
            'report': {
                'report_period': this.findData.reportPeriod,
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
            }
        };
        if (findByData) {
            data = {
                'report': {
                    'report_period': findByData.reportPeriod,
                    'from_date': findByData.from_date,
                    'to_date': findByData.to_date,
                }
            };
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAll(data, "declaration");
    };
    ReportListComponent.prototype.calculateNetRevenueTotal = function (options) {
        if (options.name === 'amount') {
            options.totalValue = 1000000;
        }
        if (options.name === 'amount_vat') {
            options.totalValue = 2000000;
        }
    };
    ReportListComponent.prototype.GetDisplayText = function (d) {
        return d.data.collapsedItems ? d.data.collapsedItems[0].groupName : d.data.items[0].groupName;
    };
    ReportListComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text === 'Thêm') {
            this.addRow();
        }
    };
    ReportListComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportListComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportListComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField !== 'invoice_type') {
            if (e.row.data.invoice_type === '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export === '1' || e.dataField === 'amount' || e.dataField === 'closing_amount';
        }
        if (e.dataField === 'invoice_series') {
        }
    };
    ReportListComponent.prototype.onCellPrepared = function (cellInfo) {
    };
    ReportListComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export === '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportListComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code === e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number !== '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number !== '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number !== '' || e.key.opening_begin_number !== '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number !== '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number !== '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number !== '' || e.key.in_period_release_begin_number !== '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number !== '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number !== '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number !== '' || e.key.closing_begin_number !== '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number !== '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number !== '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_3__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series !== '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code !== '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportListComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportListComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ReportListComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    ReportListComponent.prototype.view = function (data) {
        if (data) {
            var ids = [];
            if (data) {
                ids.push(data.invoice_id);
            }
            var dataView = this.vatService.taodulieuXemMau(ids);
            dataView['configs'] = _core_index__WEBPACK_IMPORTED_MODULE_3__["sEnum"].cauhinhxemmau.hoadon;
            this.vPreviewInvService.xemMau(dataView);
        }
        else {
            _core_index__WEBPACK_IMPORTED_MODULE_3__["Library"].notify(this._translate.NOTIFY.no_record_selected, 'error');
        }
    };
    ReportListComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], ReportListComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportListComponent.prototype, "findData", void 0);
    ReportListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-list',
            template: __webpack_require__(/*! ./report-list.component.html */ "./src/app/modules/report/components/report-list/report-list.component.html"),
            styles: [__webpack_require__(/*! ./report-list.component.scss */ "./src/app/modules/report/components/report-list/report-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            _modules_vat_shared__WEBPACK_IMPORTED_MODULE_2__["VatService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _core_index__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _shared_service_view_invoice_service__WEBPACK_IMPORTED_MODULE_9__["ViewInvoiceService"]])
    ], ReportListComponent);
    return ReportListComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-misa/report-misa.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-misa/report-misa.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-context-menu\r\n  target=\"#gridReport\">\r\n</dx-context-menu>\r\n<dx-data-grid\r\n\r\nid=\"gridReport\" >\r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-sorting mode=\"none\"></dxo-sorting>\r\n\r\n  <dxi-column dataField=\"template_code\" caption=\"Hiển thị trên sổ\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Hình thức bán hàng\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Kiêm phiếu xuất kho\" [width]=\"60\">\r\n  </dxi-column>\r\n  \r\n  <dxi-column dataField=\"invoice_series\" caption=\"Lập kèm hóa đơn\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Đã lập hóa đơn\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Ngày hạch toán (*)\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Ngày chứng từ (*)\" [width]=\"60\">\r\n  </dxi-column>\r\n  \r\n  <dxi-column dataField=\"invoice_series\" caption=\"Số chứng từ (*)\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Mẫu số HĐ\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Ký hiệu HĐ\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Số hóa đơn\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Ngày hóa đơn\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Mã khách hàng\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Tên khách hàng\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Địa chỉ\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Mã số thuế\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Diễn giải\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Mã hàng (*)\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Tên hàng\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"TK Tiền/Chi phí/Nợ (*)\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"TK Doanh thu/Có (*)\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"ĐVT\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Số lượng\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Đơn giá\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Thành tiền\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"% thuế GTGT\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Tiền thuế GTGT\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"TK thuế GTGT\" [width]=\"60\">\r\n  </dxi-column>\r\n\r\n  <dxi-column dataField=\"invoice_series\" caption=\"Đối tượng khách hàng\" [width]=\"60\">\r\n  </dxi-column>\r\n  \r\n</dx-data-grid>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/report/components/report-misa/report-misa.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-misa/report-misa.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-misa/report-misa.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-misa/report-misa.component.ts ***!
  \********************************************************************************/
/*! exports provided: ReportMisaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportMisaComponent", function() { return ReportMisaComponent; });
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

var ReportMisaComponent = /** @class */ (function () {
    function ReportMisaComponent() {
    }
    ReportMisaComponent.prototype.ngOnInit = function () {
    };
    ReportMisaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-misa',
            template: __webpack_require__(/*! ./report-misa.component.html */ "./src/app/modules/report/components/report-misa/report-misa.component.html"),
            styles: [__webpack_require__(/*! ./report-misa.component.scss */ "./src/app/modules/report/components/report-misa/report-misa.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportMisaComponent);
    return ReportMisaComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-revenue/report-revenue.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-revenue/report-revenue.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-context-menu [items]=\"contextMenu\" target=\"#gridReport\">\r\n  </dx-context-menu>\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"50\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n\r\n    <dxi-column caption=\"STT\" dataField=\"order\"  [width]=\"5+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Nhóm khách hàng\" dataField=\"customer_group_name\" [width]=\"25+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số hóa đơn xuất ra\" dataField=\"total_invoice\" [width]=\"13+'%'\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tổng tiền (đ)\" dataField=\"total_amount\" [width]=\"20+'%'\" format=\"0,###.##\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ghi chú\" dataField=\"\" [width]=\"30+'%'\">\r\n    </dxi-column>\r\n    <dxo-summary >\r\n      <dxi-total-item\r\n          summaryType=\"sum\"\r\n          valueFormat=\"0,###.##\" \r\n          displayFormat=\"{0}\" \r\n          column=\"total_amount\">\r\n      </dxi-total-item>\r\n    </dxo-summary>\r\n  </dx-data-grid>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/report/components/report-revenue/report-revenue.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-revenue/report-revenue.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-revenue/report-revenue.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-revenue/report-revenue.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ReportRevenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRevenueComponent", function() { return ReportRevenueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportRevenueComponent = /** @class */ (function () {
    function ReportRevenueComponent(
    // public bsModalRef: BsModalRef,
    modalService, reportService) {
        this.modalService = modalService;
        this.reportService = reportService;
        this.lstfrmData = [];
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
    }
    ReportRevenueComponent.prototype.ngOnInit = function () {
        this.loadList(null);
    };
    ReportRevenueComponent.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var data = {
            "report": {
                "report_period": this.findData.reportPeriod,
                "from_date": this.findData.from_date,
                "to_date": this.findData.to_date,
            }
        };
        if (findByData) {
            data = {
                "report": {
                    "report_period": findByData.reportPeriod,
                    "from_date": findByData.from_date,
                    "to_date": findByData.to_date,
                }
            };
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        console.log(this.findData);
        this.dataSource.store = this.reportService.getAll(data, this.findData.typeCode);
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
    };
    ReportRevenueComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text == 'Thêm') {
            this.addRow();
        }
    };
    ReportRevenueComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item);
                _this.dataSource.reload();
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportRevenueComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportRevenueComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField != "invoice_type") {
            if (e.row.data.invoice_type == "") {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify("Bạn chưa chọn loại hóa đơn", "error");
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export == "1" || e.dataField == "amount" || e.dataField == "closing_amount";
        }
        if (e.dataField == "invoice_series") {
        }
    };
    ReportRevenueComponent.prototype.onCellPrepared = function (e) {
        if (e.columnIndex == 0 && e.rowType == "data") {
            if (this.itemSystemExport.includes(e.rowIndex)) {
                e.cellElement.querySelector(".dx-link-delete").remove();
            }
        }
    };
    ReportRevenueComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export == "1") {
                e.rowElement.style.background = "#F1F1F1";
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportRevenueComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code == e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case "opening_begin_number":
                if (e.key.opening_begin_number != "") {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number != "" || e.key.opening_begin_number != "") {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = "";
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case "opening_end_number":
                if (e.key.opening_end_number != "") {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number != "" || e.key.opening_begin_number != "") {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = "";
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case "in_period_release_begin_number":
                if (e.key.in_period_release_begin_number != "") {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number != "" || e.key.in_period_release_begin_number != "") {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = "";
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case "in_period_release_end_number":
                if (e.key.in_period_release_end_number != "") {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number != "" || e.key.in_period_release_begin_number != "") {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = "";
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case "closing_begin_number":
                if (e.key.closing_begin_number != "") {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number != "" || e.key.closing_begin_number != "") {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = "";
                }
                this.dataGrid.instance.refresh();
                break;
            case "closing_end_number":
                if (e.key.closing_end_number != "") {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number != "" || e.key.closing_begin_number != "") {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = "";
                }
                this.dataGrid.instance.refresh();
                break;
            case "in_period_used_begin_number":
                if (e.key.in_period_used_begin_number != "") {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case "in_period_used_end_number":
                if (e.key.in_period_used_end_number != "") {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case "invoice_series":
                if (e.key.invoice_series != "") {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case "template_code":
                if (e.key.template_code != "") {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportRevenueComponent.prototype.onContentReady = function (e) {
        e.component.columnOption("command:edit", {
            visibleIndex: -1
        });
    };
    ReportRevenueComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ReportRevenueComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], ReportRevenueComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportRevenueComponent.prototype, "findData", void 0);
    ReportRevenueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-revenue',
            template: __webpack_require__(/*! ./report-revenue.component.html */ "./src/app/modules/report/components/report-revenue/report-revenue.component.html"),
            styles: [__webpack_require__(/*! ./report-revenue.component.scss */ "./src/app/modules/report/components/report-revenue/report-revenue.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["ReportService"]])
    ], ReportRevenueComponent);
    return ReportRevenueComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-sse/report-sse.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-sse/report-sse.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid\r\n  \r\n  id=\"gridReport\"\r\n    [dataSource]=\"dataSource\"\r\n    [showRowLines]=\"true\" \r\n    [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" \r\n    [showBorders]=\"true\"\r\n    [columnMinWidth]=\"50\" \r\n    [columnAutoWidth]=\"true\" \r\n    [wordWrapEnabled]=\"true\" >\r\n    <!-- <dxo-load-panel [enabled]=\"true\"></dxo-load-panel> -->\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column dataField=\"template_code\" caption=\"Mẫu số\" [width]=\"100\" [fixed]=\"true\" alignment=\"center\">\r\n    </dxi-column>\r\n  \r\n    <dxi-column dataField=\"invoice_series\" caption=\"Ký hiệu\" [width]=\"70\" [fixed]=\"true\" alignment=\"center\">\r\n    </dxi-column>\r\n  \r\n    <dxi-column caption=\"Tổng\">\r\n       <dxi-column\r\n            caption=\"Số lượng\"\r\n            dataField=\"total_count_invoice\"\r\n            [width]=\"60\">\r\n       </dxi-column>\r\n       <dxi-column\r\n            caption=\"Tổng tiền\"\r\n            dataField=\"total_payment_invoice\"\r\n            [width]=\"60\">\r\n       </dxi-column>\r\n    </dxi-column>\r\n  \r\n    <dxi-column caption=\"Trong đó\">\r\n        <dxi-column caption=\"Đã xuất (không tính các hóa đơn xóa bỏ)\">\r\n          <dxi-column\r\n            caption=\"Số lượng\"\r\n            dataField=\"total_count_invoice_valid\"\r\n            [width]=\"70\">\r\n          </dxi-column>\r\n          <dxi-column\r\n            caption=\"Tổng tiền\"\r\n            dataField=\"total_payment_invoice_valid\"\r\n            [width]=\"70\">\r\n          </dxi-column>\r\n       </dxi-column>\r\n       <dxi-column caption=\"Xóa bỏ\">\r\n            <dxi-column\r\n                caption=\"Số lượng\"\r\n                dataField=\"total_count_invoice_cancel\"\r\n                alignment=\"center\"\r\n                [width]=\"70\">\r\n            </dxi-column>\r\n            <dxi-column\r\n                caption=\"Số\"\r\n                cellTemplate=\"deleteNumber\"\r\n                alignment=\"center\"\r\n                dataField=\"in_period_delete_amount\">\r\n            </dxi-column>\r\n            <dxi-column\r\n                caption=\"Tổng tiền\"\r\n                dataField=\"total_payment_invoice_cancel\"\r\n                [width]=\"75\">\r\n            </dxi-column>\r\n        </dxi-column>\r\n        <dxi-column caption=\"Không đủ đk cấp mã/ CQT không tiếp nhận\">\r\n          <dxi-column\r\n              caption=\"Số lượng\"\r\n              dataField=\"total_count_invoice_invalid\"\r\n              alignment=\"center\"\r\n              [width]=\"70\">\r\n          </dxi-column>\r\n          <dxi-column\r\n              caption=\"Số\"\r\n              cellTemplate=\"deleteNumber\"\r\n              alignment=\"center\"\r\n              dataField=\"in_period_delete_amount\">\r\n          </dxi-column>\r\n          <dxi-column\r\n              caption=\"Tổng tiền\"\r\n              dataField=\"total_payment_invoice_invalid\"\r\n              [width]=\"75\">\r\n          </dxi-column>\r\n      </dxi-column>\r\n    </dxi-column>\r\n    <dxo-summary>\r\n      <dxi-total-item\r\n          name=\"totalAmount\"\r\n          column=\"amount\"\r\n          summaryType=\"sum\"\r\n          displayFormat=\"{0}\">\r\n      </dxi-total-item>\r\n      <dxi-total-item\r\n          name=\"totalInPeriodUsedTotal\"\r\n          column=\"in_period_used_total\"\r\n          summaryType=\"sum\"\r\n          displayFormat=\"{0}\">\r\n      </dxi-total-item>\r\n      <dxi-total-item\r\n          name=\"totalClosingAmount\"\r\n          column=\"closing_amount\"\r\n          summaryType=\"sum\"\r\n          displayFormat=\"{0}\">\r\n      </dxi-total-item>\r\n    </dxo-summary>\r\n    <div *dxTemplate=\"let d of 'usedNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"viewUsedNumber(d.data)\" routerLink=\"system/search\">{{ d.data.in_period_used_amount }}</a>\r\n    </div>\r\n    <div *dxTemplate=\"let d of 'deleteNumber'\">\r\n      <a class=\"gach-chan\" (click)=\"viewDeleteNumber(d.data)\" href=\"javascript:void(0)\">{{ d.data.in_period_delete_amount }}</a>\r\n    </div>\r\n   \r\n  </dx-data-grid>\r\n  </div>"

/***/ }),

/***/ "./src/app/modules/report/components/report-sse/report-sse.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-sse/report-sse.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-sse/report-sse.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/report/components/report-sse/report-sse.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReportSseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSseComponent", function() { return ReportSseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
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






var ReportSseComponent = /** @class */ (function () {
    function ReportSseComponent(modalService, reportService, translate, authService) {
        this.modalService = modalService;
        this.reportService = reportService;
        this.translate = translate;
        this.authService = authService;
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.isHoaDonKinhDoanhXe = false;
        this.isVeMayBayTongHop = false;
        this._language = this.authService.getLanguage();
        this._translate = this.authService.getTranslate();
        translate.use(this._language);
        this.isTypeAccount = this.authService.getAccountType();
    }
    ReportSseComponent.prototype.ngOnInit = function () {
        this.loadList(null);
    };
    ReportSseComponent.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var data;
        data = {
            'report': {
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
                'report_period': this.findData.reportPeriod,
            }
        };
        if (findByData) {
            data = {
                'report': {
                    'from_date': findByData.from_date,
                    'to_date': findByData.to_date,
                    'report_period': this.findData.reportPeriod,
                }
            };
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAll(data, 'usage-invoice');
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
    };
    ReportSseComponent.prototype.viewUsedNumber = function () {
    };
    ReportSseComponent.prototype.viewDeleteNumber = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], ReportSseComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportSseComponent.prototype, "findData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportSseComponent.prototype, "templates", void 0);
    ReportSseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-sse',
            template: __webpack_require__(/*! ./report-sse.component.html */ "./src/app/modules/report/components/report-sse/report-sse.component.html"),
            styles: [__webpack_require__(/*! ./report-sse.component.scss */ "./src/app/modules/report/components/report-sse/report-sse.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _core_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ReportSseComponent);
    return ReportSseComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-use-receipt/report-use-receipt.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-use-receipt/report-use-receipt.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-data-grid\r\n    [dataSource]=\"dataSource\"\r\n    [showRowLines]=\"true\"  \r\n    [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\"\r\n    [wordWrapEnabled]=\"true\"\r\n    [showBorders]=\"true\"\r\n  >\r\n    <!-- Hiển thị 1 biểu diễn đồ hoạ cho quá trình tải dữ liệu hoặc xử lý bất đồng bộ -->\r\n    <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n    <!-- Vô hiệu hoá chức năng sắp xếp -->\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n\r\n\r\n\r\n    <dxi-column dataField=\"order\" allowMerge=\"true\" caption=\"STT\" [width]=\"5+'%'\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"template_code\" caption=\"{{_translate.GRID.INVOICE.template_code1}}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column dataField=\"receipt_series\" caption=\"{{_translate.GRID.INVOICE.receipt_series}}\" alignment=\"center\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Số biên lai sử dụng trong kỳ\" alignment=\"center\">\r\n      <dxi-column dataField=\"total_count_receipt\" caption=\"{{_translate.GRID.INVOICE.total_count_receipt}}\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"min_number_receipt\" caption=\"{{_translate.GRID.INVOICE.min_number_receipt}}\" alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"max_number_receipt\" caption=\"{{_translate.GRID.INVOICE.max_number_receipt}}\" alignment=\"center\">\r\n      </dxi-column>\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tình trạng biên lai\" alignment=\"center\">\r\n      <dxi-column dataField=\"total_count_receipt_valid\" caption=\"{{_translate.THONG_TIN.bien_lai_goc}}\"  alignment=\"center\">\r\n      </dxi-column>\r\n      <dxi-column dataField=\"total_count_receipt_cancel\" caption=\"{{_translate.THONG_TIN.bien_lai_xoa_bo}}\"  alignment=\"center\">\r\n      </dxi-column>\r\n    </dxi-column>\r\n    <!-- chỉ định các hoạt động này được thực hiện trên máy chủ -->\r\n    <dxo-remote-operations [sorting]=\"true\" [paging]=\"true\" [filtering]=\"true\" [summary]=\"true\">\r\n    </dxo-remote-operations>\r\n    <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[15, 50, 100]\" [showNavigationButtons]=\"true\"\r\n      [showInfo]=\"true\" infoText=\"{{ _translate.DXO_PAGER.page }}\">>\r\n    </dxo-pager>\r\n\r\n  </dx-data-grid>\r\n</div>\r\n\r\n\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"timer\">\r\n<p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/modules/report/components/report-use-receipt/report-use-receipt.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-use-receipt/report-use-receipt.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-use-receipt/report-use-receipt.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/report/components/report-use-receipt/report-use-receipt.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ReportUseReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportUseReceiptComponent", function() { return ReportUseReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportUseReceiptComponent = /** @class */ (function () {
    function ReportUseReceiptComponent(authService, spinner, socketService, reportService) {
        this.authService = authService;
        this.spinner = spinner;
        this.socketService = socketService;
        this.reportService = reportService;
        this.dataSource = {
            store: []
        };
        this._translate = this.authService.getTranslate();
    }
    ReportUseReceiptComponent.prototype.ngOnInit = function () {
        this.configs = this.authService.getConfigs();
        var currentUser = this.authService.getCurrentUser();
        var mst = _core_index__WEBPACK_IMPORTED_MODULE_1__["VStringService"]._getValueToString(currentUser.account.tax_code);
        this.loadList(null);
    };
    ReportUseReceiptComponent.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].showloading();
        var data = {
            'report': {
                'report_period': this.findData.reportPeriod,
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
                'is_view': true,
                'template_id': null
            }
        };
        if (findByData) {
            data = {
                'report': {
                    "from_date": findByData.from_date,
                    "to_date": findByData.to_date,
                    "is_view": true,
                    "template_id": null
                }
            };
        }
        this.dataSource = {
            id: 'order',
            store: []
        };
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAlluseReceipt('/receipts/report-status-use', data);
        _core_index__WEBPACK_IMPORTED_MODULE_1__["Library"].hideloading();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportUseReceiptComponent.prototype, "findData", void 0);
    ReportUseReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-use-receipt',
            template: __webpack_require__(/*! ./report-use-receipt.component.html */ "./src/app/modules/report/components/report-use-receipt/report-use-receipt.component.html"),
            styles: [__webpack_require__(/*! ./report-use-receipt.component.scss */ "./src/app/modules/report/components/report-use-receipt/report-use-receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _core_index__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_2__["ReportService"]])
    ], ReportUseReceiptComponent);
    return ReportUseReceiptComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/report-vat/report-vat.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-vat/report-vat.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"report-gird-edit\">\r\n  <dx-context-menu [items]=\"contextMenu\" target=\"#gridReport\">\r\n  </dx-context-menu>\r\n  <dx-data-grid id=\"gridReport\" [dataSource]=\"dataSource\" [showRowLines]=\"true\" [allowColumnReordering]=\"true\"\r\n    [allowColumnResizing]=\"true\" [showBorders]=\"true\" [columnMinWidth]=\"50\" [columnAutoWidth]=\"true\"\r\n    [wordWrapEnabled]=\"true\" (onEditorPreparing)=\"onEditorPreparing($event)\" (onRowPrepared)=\"onRowPrepared($event)\"\r\n    (onRowUpdated)=\"onRowUpdated($event)\" (onContentReady)=\"onContentReady($event)\"\r\n    (onCellPrepared)=\"onCellPrepared($event)\">\r\n    <dxo-sorting mode=\"none\"></dxo-sorting>\r\n    <dxi-column caption=\"Không chịu thuế\" dataField=\"total_amount_product_vatx\" [width]=\"15+'%'\" format=\"0,###.##\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Thuế suất 0%\" dataField=\"total_amount_product_vat0\" [width]=\"15+'%'\" format=\"0,###.##\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Thuế suất 5%\" dataField=\"total_amount_product_vat5\" [width]=\"15+'%'\" format=\"0,###.##\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Thuế suất 10%\" dataField=\"total_amount_product_vat10\" [width]=\"15+'%'\" format=\"0,###.##\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Tổng tiền (đ)\" dataField=\"total_amount_product\" [width]=\"15+'%'\" format=\"0,###.##\">\r\n    </dxi-column>\r\n    <dxi-column caption=\"Ghi chú\" dataField=\"\" [width]=\"25+'%'\">\r\n    </dxi-column>\r\n  </dx-data-grid>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/report/components/report-vat/report-vat.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/report/components/report-vat/report-vat.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/report/components/report-vat/report-vat.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/report/components/report-vat/report-vat.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReportVatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportVatComponent", function() { return ReportVatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/report/shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportVatComponent = /** @class */ (function () {
    function ReportVatComponent(
    // public bsModalRef: BsModalRef,
    modalService, reportService) {
        this.modalService = modalService;
        this.reportService = reportService;
        this.lstfrmData = [];
        this.dataSource = {};
        this.frmData = new _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        this.contextMenu = [{ text: 'Thêm' }];
        this.itemSystemExport = [];
        this.needSummaryUpdate = false;
    }
    ReportVatComponent.prototype.ngOnInit = function () {
        this.loadList(null);
    };
    ReportVatComponent.prototype.loadList = function (findByData) {
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].showloading();
        var data = {
            'report': {
                'report_period': this.findData.reportPeriod,
                'from_date': this.findData.from_date,
                'to_date': this.findData.to_date,
                'invoice_type': this.findData.invoice_type,
            }
        };
        if (findByData) {
            data = {
                'report': {
                    'report_period': findByData.reportPeriod,
                    'from_date': findByData.from_date,
                    'to_date': findByData.to_date,
                    'invoice_type': findByData.invoice_type,
                }
            };
            if (findByData && findByData.template_code) {
                data.report['template_code'] = findByData.template_code;
            }
        }
        this.dataSource = {};
        this.invoiceTypeNames = this.findData.invoiceTypeNames;
        this.dataSource.store = this.reportService.getAll(data, this.findData.typeCode);
        _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].hideloading();
    };
    ReportVatComponent.prototype.contextTableClick = function (e) {
        if (e.itemData.text == 'Thêm') {
            this.addRow();
        }
    };
    ReportVatComponent.prototype.deleteRow = function (item) {
        var _this = this;
        setTimeout(function () {
            var check = confirm('Bạn có đồng ý xóa không?');
            if (check) {
                _this.dataSource.remove(item.order);
                _this.dataGrid.instance.refresh();
            }
        }, 100);
    };
    ReportVatComponent.prototype.addRow = function () {
        var data = this.frmData.addRow();
        this.dataSource.push(data);
        this.dataGrid.instance.refresh();
    };
    ReportVatComponent.prototype.onEditorPreparing = function (e) {
        if (e.dataField != 'invoice_type') {
            if (e.row.data.invoice_type == '') {
                e.cancel = true;
                _core_index__WEBPACK_IMPORTED_MODULE_2__["Library"].notify('Bạn chưa chọn loại hóa đơn', 'error');
            }
        }
        if (e.row.data) {
            e.editorOptions.disabled = e.row.data.system_export == '1' || e.dataField == 'amount' || e.dataField == 'closing_amount';
        }
        if (e.dataField == 'invoice_series') {
        }
    };
    ReportVatComponent.prototype.onCellPrepared = function (e) {
        if (e.columnIndex == 0 && e.rowType == 'data') {
            if (this.itemSystemExport.includes(e.rowIndex)) {
                e.cellElement.querySelector('.dx-link-delete').remove();
            }
        }
    };
    ReportVatComponent.prototype.onRowPrepared = function (e) {
        if (e.data) {
            if (e.data.system_export == '1') {
                e.rowElement.style.background = '#F1F1F1';
                this.itemSystemExport.push(e.rowIndex);
            }
        }
    };
    ReportVatComponent.prototype.onRowUpdated = function (e) {
        this.invoiceTypeNames.forEach(function (invoiceType) {
            if (invoiceType.code == e.data.invoice_type) {
                e.key.invoice_type_name = invoiceType.name;
            }
        });
        var column = Object.keys(e.data)[0];
        switch (column) {
            case 'opening_begin_number':
                if (e.key.opening_begin_number != '') {
                    e.key.opening_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_begin_number);
                }
                if (e.key.opening_end_number != '' || e.key.opening_begin_number != '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'opening_end_number':
                if (e.key.opening_end_number != '') {
                    e.key.opening_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.opening_end_number);
                }
                if (e.key.opening_end_number != '' || e.key.opening_begin_number != '') {
                    e.key.amount = e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.in_period_release_end_number || e.key.in_period_release_begin_number) {
                    e.key.amount += e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_begin_number':
                if (e.key.in_period_release_begin_number != '') {
                    e.key.in_period_release_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_begin_number);
                }
                if (e.key.in_period_release_end_number != '' || e.key.in_period_release_begin_number != '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_release_end_number':
                if (e.key.in_period_release_end_number != '') {
                    e.key.in_period_release_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_release_end_number);
                }
                if (e.key.in_period_release_end_number != '' || e.key.in_period_release_begin_number != '') {
                    e.key.amount = e.key.in_period_release_end_number - e.key.in_period_release_begin_number + 1;
                }
                else {
                    e.key.amount = '';
                }
                if (e.key.opening_end_number || e.key.opening_begin_number) {
                    e.key.amount += e.key.opening_end_number - e.key.opening_begin_number + 1;
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_begin_number':
                if (e.key.closing_begin_number != '') {
                    e.key.closing_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_begin_number);
                }
                if (e.key.closing_end_number != '' || e.key.closing_begin_number != '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'closing_end_number':
                if (e.key.closing_end_number != '') {
                    e.key.closing_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.closing_end_number);
                }
                if (e.key.closing_end_number != '' || e.key.closing_begin_number != '') {
                    e.key.closing_amount = e.key.closing_end_number - e.key.closing_begin_number + 1;
                }
                else {
                    e.key.closing_amount = '';
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_begin_number':
                if (e.key.in_period_used_begin_number != '') {
                    e.key.in_period_used_begin_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_begin_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'in_period_used_end_number':
                if (e.key.in_period_used_end_number != '') {
                    e.key.in_period_used_end_number = _core_index__WEBPACK_IMPORTED_MODULE_2__["Helper"].formatNumberInvoice(e.key.in_period_used_end_number);
                }
                this.dataGrid.instance.refresh();
                break;
            case 'invoice_series':
                if (e.key.invoice_series != '') {
                    e.key.invoice_series = e.key.invoice_series.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            case 'template_code':
                if (e.key.template_code != '') {
                    e.key.template_code = e.key.template_code.toUpperCase();
                }
                this.dataGrid.instance.refresh();
                break;
            default:
                break;
        }
    };
    ReportVatComponent.prototype.onContentReady = function (e) {
        e.component.columnOption('command:edit', {
            visibleIndex: -1
        });
    };
    ReportVatComponent.prototype.checkStartEnd = function (start, end) {
        if (start > end) {
            return false;
        }
        return true;
    };
    ReportVatComponent.prototype.customizeText = function (e) {
        if (!e.value) {
            e.value = 0;
        }
        return e.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxDataGridComponent"])
    ], ReportVatComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReportVatComponent.prototype, "findData", void 0);
    ReportVatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-vat',
            template: __webpack_require__(/*! ./report-vat.component.html */ "./src/app/modules/report/components/report-vat/report-vat.component.html"),
            styles: [__webpack_require__(/*! ./report-vat.component.scss */ "./src/app/modules/report/components/report-vat/report-vat.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _modules_report_shared__WEBPACK_IMPORTED_MODULE_3__["ReportService"]])
    ], ReportVatComponent);
    return ReportVatComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/report.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/report/report.module.ts ***!
  \*************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/report/components/index/index.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _report_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report.routing */ "./src/app/modules/report/report.routing.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/modules/report/shared/index.ts");
/* harmony import */ var _components_export_xml_export_xml_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/export-xml/export-xml.component */ "./src/app/modules/report/components/export-xml/export-xml.component.ts");
/* harmony import */ var _components_report_bc26_report_bc26_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/report-bc26/report-bc26.component */ "./src/app/modules/report/components/report-bc26/report-bc26.component.ts");
/* harmony import */ var _components_report_misa_report_misa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/report-misa/report-misa.component */ "./src/app/modules/report/components/report-misa/report-misa.component.ts");
/* harmony import */ var _components_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/report-list/report-list.component */ "./src/app/modules/report/components/report-list/report-list.component.ts");
/* harmony import */ var _components_report_revenue_report_revenue_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/report-revenue/report-revenue.component */ "./src/app/modules/report/components/report-revenue/report-revenue.component.ts");
/* harmony import */ var _components_report_vat_report_vat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/report-vat/report-vat.component */ "./src/app/modules/report/components/report-vat/report-vat.component.ts");
/* harmony import */ var _components_report_detail_product_report_detail_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/report-detail-product/report-detail-product.component */ "./src/app/modules/report/components/report-detail-product/report-detail-product.component.ts");
/* harmony import */ var _modules_vat_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/vat/shared */ "./src/app/modules/vat/shared/index.ts");
/* harmony import */ var _components_report_invoice_buy_report_invoice_buy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/report-invoice-buy/report-invoice-buy.component */ "./src/app/modules/report/components/report-invoice-buy/report-invoice-buy.component.ts");
/* harmony import */ var _components_forder_student_report_collection_to_class_report_collection_to_class_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/forder-student/report-collection-to-class/report-collection-to-class.component */ "./src/app/modules/report/components/forder-student/report-collection-to-class/report-collection-to-class.component.ts");
/* harmony import */ var _components_forder_student_report_dont_collection_student_report_dont_collection_student_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/forder-student/report-dont-collection-student/report-dont-collection-student.component */ "./src/app/modules/report/components/forder-student/report-dont-collection-student/report-dont-collection-student.component.ts");
/* harmony import */ var _modules_users_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/users/shared */ "./src/app/modules/users/shared/index.ts");
/* harmony import */ var _components_report_fast_hassyu_report_fast_hassyu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/report-fast-hassyu/report-fast-hassyu.component */ "./src/app/modules/report/components/report-fast-hassyu/report-fast-hassyu.component.ts");
/* harmony import */ var _components_report_fast_report_fast_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/report-fast/report-fast.component */ "./src/app/modules/report/components/report-fast/report-fast.component.ts");
/* harmony import */ var _components_report_list_invoice_report_list_invoice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/report-list-invoice/report-list-invoice.component */ "./src/app/modules/report/components/report-list-invoice/report-list-invoice.component.ts");
/* harmony import */ var _components_report_hospital_fee_report_hospital_fee_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/report-hospital-fee/report-hospital-fee.component */ "./src/app/modules/report/components/report-hospital-fee/report-hospital-fee.component.ts");
/* harmony import */ var _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @core/library/public/v-select-box.service */ "./src/app/core/library/public/v-select-box.service.ts");
/* harmony import */ var _modules_template_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @modules/template/shared */ "./src/app/modules/template/shared/index.ts");
/* harmony import */ var _components_report_hospital_synthesis_report_hospital_synthesis_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/report-hospital-synthesis/report-hospital-synthesis.component */ "./src/app/modules/report/components/report-hospital-synthesis/report-hospital-synthesis.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _components_report_declaration_report_declaration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/report-declaration/report-declaration.component */ "./src/app/modules/report/components/report-declaration/report-declaration.component.ts");
/* harmony import */ var _components_report_sse_report_sse_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/report-sse/report-sse.component */ "./src/app/modules/report/components/report-sse/report-sse.component.ts");
/* harmony import */ var _components_license_export_used_license_export_used_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/license-export-used/license-export-used.component */ "./src/app/modules/report/components/license-export-used/license-export-used.component.ts");
/* harmony import */ var _components_report_license_detail_report_license_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/report-license-detail/report-license-detail.component */ "./src/app/modules/report/components/report-license-detail/report-license-detail.component.ts");
/* harmony import */ var _components_detail_report_bill_pharmacy_detail_report_bill_pharmacy_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/detail-report-bill-pharmacy/detail-report-bill-pharmacy.component */ "./src/app/modules/report/components/detail-report-bill-pharmacy/detail-report-bill-pharmacy.component.ts");
/* harmony import */ var _components_daily_summary_report_hospital_daily_summary_report_hospital_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/daily-summary-report-hospital/daily-summary-report-hospital.component */ "./src/app/modules/report/components/daily-summary-report-hospital/daily-summary-report-hospital.component.ts");
/* harmony import */ var _components_report_customer_group_report_customer_group_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/report-customer-group/report-customer-group.component */ "./src/app/modules/report/components/report-customer-group/report-customer-group.component.ts");
/* harmony import */ var _components_report_customer_group_detail_report_customer_group_detail_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/report-customer-group-detail/report-customer-group-detail.component */ "./src/app/modules/report/components/report-customer-group-detail/report-customer-group-detail.component.ts");
/* harmony import */ var _components_hospital_with_vat_major_hospital_with_vat_major_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/hospital-with-vat-major/hospital-with-vat-major.component */ "./src/app/modules/report/components/hospital-with-vat-major/hospital-with-vat-major.component.ts");
/* harmony import */ var _components_report_use_receipt_report_use_receipt_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/report-use-receipt/report-use-receipt.component */ "./src/app/modules/report/components/report-use-receipt/report-use-receipt.component.ts");
/* harmony import */ var _components_report_detail_receipt_report_detail_receipt_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/report-detail-receipt/report-detail-receipt.component */ "./src/app/modules/report/components/report-detail-receipt/report-detail-receipt.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//library

//general



































var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _report_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _core_index__WEBPACK_IMPORTED_MODULE_4__["devextremeModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxTreeListModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_27__["NgxSpinnerModule"]
            ],
            declarations: [
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"],
                _components_export_xml_export_xml_component__WEBPACK_IMPORTED_MODULE_8__["ExportXmlComponent"],
                _components_report_bc26_report_bc26_component__WEBPACK_IMPORTED_MODULE_9__["ReportBc26Component"],
                _components_report_misa_report_misa_component__WEBPACK_IMPORTED_MODULE_10__["ReportMisaComponent"],
                _components_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_11__["ReportListComponent"],
                _components_report_revenue_report_revenue_component__WEBPACK_IMPORTED_MODULE_12__["ReportRevenueComponent"],
                _components_report_vat_report_vat_component__WEBPACK_IMPORTED_MODULE_13__["ReportVatComponent"],
                _components_report_detail_product_report_detail_product_component__WEBPACK_IMPORTED_MODULE_14__["ReportDetailProductComponent"],
                _components_report_invoice_buy_report_invoice_buy_component__WEBPACK_IMPORTED_MODULE_16__["ReportInvoiceBuyComponent"],
                _components_forder_student_report_collection_to_class_report_collection_to_class_component__WEBPACK_IMPORTED_MODULE_17__["ReportCollectionToClassComponent"],
                _components_forder_student_report_dont_collection_student_report_dont_collection_student_component__WEBPACK_IMPORTED_MODULE_18__["ReportDontCollectionStudentComponent"],
                _components_report_fast_hassyu_report_fast_hassyu_component__WEBPACK_IMPORTED_MODULE_20__["ReportFastHassyuComponent"],
                _components_report_fast_report_fast_component__WEBPACK_IMPORTED_MODULE_21__["ReportFastComponent"],
                _components_report_list_invoice_report_list_invoice_component__WEBPACK_IMPORTED_MODULE_22__["ReportListInvoiceComponent"],
                _components_report_hospital_fee_report_hospital_fee_component__WEBPACK_IMPORTED_MODULE_23__["ReportHospitalFeeComponent"],
                _components_report_hospital_synthesis_report_hospital_synthesis_component__WEBPACK_IMPORTED_MODULE_26__["ReportHospitalSynthesisComponent"],
                _components_report_declaration_report_declaration_component__WEBPACK_IMPORTED_MODULE_28__["ReportDeclarationComponent"],
                _components_report_sse_report_sse_component__WEBPACK_IMPORTED_MODULE_29__["ReportSseComponent"],
                _components_license_export_used_license_export_used_component__WEBPACK_IMPORTED_MODULE_30__["LicenseExportUsedComponent"],
                _components_report_license_detail_report_license_detail_component__WEBPACK_IMPORTED_MODULE_31__["ReportLicenseDetailComponent"],
                _components_detail_report_bill_pharmacy_detail_report_bill_pharmacy_component__WEBPACK_IMPORTED_MODULE_32__["DetailReportBillPharmacyComponent"],
                _components_daily_summary_report_hospital_daily_summary_report_hospital_component__WEBPACK_IMPORTED_MODULE_33__["DailySummaryReportHospitalComponent"],
                _components_report_customer_group_report_customer_group_component__WEBPACK_IMPORTED_MODULE_34__["ReportCustomerGroupComponent"],
                _components_report_customer_group_detail_report_customer_group_detail_component__WEBPACK_IMPORTED_MODULE_35__["ReportCustomerGroupDetailComponent"],
                _components_hospital_with_vat_major_hospital_with_vat_major_component__WEBPACK_IMPORTED_MODULE_36__["HospitalWithVatMajorComponent"],
                _components_report_use_receipt_report_use_receipt_component__WEBPACK_IMPORTED_MODULE_37__["ReportUseReceiptComponent"],
                _components_report_detail_receipt_report_detail_receipt_component__WEBPACK_IMPORTED_MODULE_38__["ReportDetailReceiptComponent"]
            ],
            entryComponents: [
                _components_export_xml_export_xml_component__WEBPACK_IMPORTED_MODULE_8__["ExportXmlComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["ReportDataInvoiceComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["SendDataForTaxComponent"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["ViewInvoiceMultipageComponent"]
            ],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_7__["ReportService"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["ReportResolver"],
                _modules_vat_shared__WEBPACK_IMPORTED_MODULE_15__["VatService"],
                _modules_users_shared__WEBPACK_IMPORTED_MODULE_19__["UsersService"],
                _core_library_public_v_select_box_service__WEBPACK_IMPORTED_MODULE_24__["VSelectBoxService"],
                _modules_template_shared__WEBPACK_IMPORTED_MODULE_25__["TemplateService"]
            ]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/modules/report/report.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/report/report.routing.ts ***!
  \**************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/report/components/index/index.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/app/modules/report/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var custom_template_brec = [
    {
        label: { brec: "Báo cáo tổng hợp" },
        url: ""
    }
];
var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], resolve: { configs: _shared__WEBPACK_IMPORTED_MODULE_3__["ReportResolver"] } },
    { path: ':type', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], data: {
            custom_brec: custom_template_brec
        }, resolve: { configs: _shared__WEBPACK_IMPORTED_MODULE_3__["ReportResolver"] } }
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
//# sourceMappingURL=report-report-module.js.map