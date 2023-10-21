(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lists-lists-module"],{

/***/ "./src/app/modules/lists/components/add/add.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/lists/components/add/add.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit($event)\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{_translate.CONTROLL.LABEL.update}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <dx-form id=\"form\" \r\n      [formData]=\"list\" \r\n      validationGroup=\"listData\"\r\n      [items]=\"formItems\"\r\n      [showColonAfterLabel]=\"false\">\r\n      <dxi-item itemType=\"group\" [colCount]=\"1\">\r\n        <dxi-item dataField=\"code\" [label]=\"{text: code }\">\r\n          <dxi-validation-rule type=\"required\" message=\"{{code}} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item dataField=\"name\" editorType=\"dxTextArea\" [editorOptions]=\"{ height: 90 }\" [colSpan]=\"2\" [label]=\"{text: name}\">\r\n          <dxi-validation-rule type=\"required\" message=\"{{name}} {{ _translate.VALIDATION.required }}\">\r\n          </dxi-validation-rule>\r\n        </dxi-item>\r\n        <dxi-item [visible]=\"false\" itemType=\"group\" [colCount]=\"1\">\r\n          <dxi-item dataField=\"order\" [label]=\"{text: _translate.CONTROLL.LABEL.order}\" [editorOptions]=\"{ disabled: true }\"></dxi-item>\r\n         \r\n        </dxi-item>\r\n        <dxi-item *ngIf=\"!isHinhThucThu\" dataField=\"note\" [label]=\"{text: _translate.CONTROLL.LABEL.note}\"></dxi-item>\r\n        <dxi-item [label]=\"{text: ' '}\" dataField=\"status\" \r\n        editorType=\"dxCheckBox\" [editorOptions]=\"{ text: _translate.GRID.GENERAL.active}\">\r\n      </dxi-item>\r\n        </dxi-item>\r\n        \r\n    </dx-form>\r\n  </div>\r\n  <div *ngIf=\"isHinhThucThu\" class=\"container-fluid pl-0 pr-0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"text-center title-list\">Năm trước</div>\r\n            <dx-list\r\n            [dataSource]=\"monthBefore\" \r\n            displayExpr=\"name\" \r\n            valueExpr=\"code\" \r\n            [height]=\"200\"\r\n            [allowItemDeleting]=\"allowDeletingBefore\"\r\n            [itemDeleteMode]=\"deleteTypeBefore\"\r\n            [showSelectionControls]=\"true\"\r\n            selectionMode=\"multiple\"\r\n            [(selectedItems)]=\"selectedItemBefore\">\r\n        </dx-list>\r\n        </div>\r\n        <div class=\"col-md-6 pl-0\">\r\n          <div class=\"text-center title-list\">Năm sau</div>\r\n            <dx-list\r\n            [dataSource]=\"monthAfter\" \r\n            displayExpr=\"name\" \r\n            valueExpr=\"code\" \r\n            [height]=\"200\"\r\n            [allowItemDeleting]=\"allowDeletingAfter\"\r\n            [itemDeleteMode]=\"deleteTypeAfter\"\r\n            [showSelectionControls]=\"true\"\r\n            selectionMode=\"multiple\"\r\n            [(selectedItems)]=\"selectedItemAfter\">\r\n        </dx-list>\r\n          </div>\r\n          </div>\r\n          </div>\r\n  \r\n  <div class=\"modal-footer\">\r\n    <dx-button icon=\"{{_translate.ICONS.save}}\" text=\"{{_translate.CONTROLL.BUTTON.save}}\" type=\"default\" validationGroup=\"listData\" [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button icon=\"{{_translate.ICONS.save_and_add}}\" [visible]='isVisibleGhiVaThemMoi' text=\"{{_translate.CONTROLL.BUTTON.save_and_add}}\" (click)=\"onGhiVaThemMoi()\" type=\"default\" validationGroup=\"listData\" [useSubmitBehavior]=\"true\">\r\n    </dx-button>\r\n    <dx-button text=\"{{_translate.CONTROLL.BUTTON.come_back}}\" type=\"default\" icon=\"{{_translate.ICONS.come_back}}\" (click)=\"bsModalRef.hide()\">\r\n    </dx-button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/lists/components/add/add.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/lists/components/add/add.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .selected-data,::ng-deep .options{margin-top:20px;padding:20px;background:rgba(191,191,191,0.15)}::ng-deep .selected-data .caption{font-weight:bold;font-size:115%}::ng-deep .options .caption{font-size:18px;font-weight:500}::ng-deep .option{margin-top:10px}::ng-deep .option>span{margin-right:10px}::ng-deep .option>.dx-selectbox{display:inline-block;vertical-align:middle;max-width:350px;width:100%}.title-list{font-weight:600;padding:8px 4px;background-color:#d8d8d8}.text-center{text-align:center !important}\n"

/***/ }),

/***/ "./src/app/modules/lists/components/add/add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/lists/components/add/add.component.ts ***!
  \***************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
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
    function AddComponent(authService, bsModalRef, listsService, modalService) {
        var _this = this;
        this.authService = authService;
        this.bsModalRef = bsModalRef;
        this.listsService = listsService;
        this.modalService = modalService;
        this.formItems = [];
        this.json_data = {};
        this.selectedItemBefore = [];
        this.selectedItemAfter = [];
        this.allowDeletingBefore = false;
        this.deleteTypeBefore = "toggle";
        this.allowDeletingAfter = false;
        this.deleteTypeAfter = "toggle";
        this.isHinhThucThu = false;
        this.monthBefore = [
            {
                name: "Tháng 1",
                code: "01/T"
            },
            {
                name: "Tháng 2",
                code: "02/T"
            },
            {
                name: "Tháng 3",
                code: "03/T"
            },
            {
                name: "Tháng 4",
                code: "04/T"
            },
            {
                name: "Tháng 5",
                code: "05/T"
            },
            {
                name: "Tháng 6",
                code: "06/T"
            },
            {
                name: "Tháng 7",
                code: "07/T"
            },
            {
                name: "Tháng 8",
                code: "08/T"
            },
            {
                name: "Tháng 9",
                code: "09/T"
            },
            {
                name: "Tháng 10",
                code: "10/T"
            },
            {
                name: "Tháng 11",
                code: "11/T"
            },
            {
                name: "Tháng 12",
                code: "12/T"
            }
        ];
        this.monthAfter = [
            {
                name: "Tháng 1",
                code: "01/S"
            },
            {
                name: "Tháng 2",
                code: "02/S"
            },
            {
                name: "Tháng 3",
                code: "03/S"
            },
            {
                name: "Tháng 4",
                code: "04/S"
            },
            {
                name: "Tháng 5",
                code: "05/S"
            },
            {
                name: "Tháng 6",
                code: "06/S"
            },
            {
                name: "Tháng 7",
                code: "07/S"
            },
            {
                name: "Tháng 8",
                code: "08/S"
            },
            {
                name: "Tháng 9",
                code: "09/S"
            },
            {
                name: "Tháng 10",
                code: "10/S"
            },
            {
                name: "Tháng 11",
                code: "11/S"
            },
            {
                name: "Tháng 12",
                code: "12/S"
            }
        ];
        this.tasks = [
            "Tháng 01", "Tháng 02", "Tháng 03",
            "Tháng 04", "Tháng 05", "Tháng 06",
            "Tháng 07", "Tháng 08", "Tháng 09",
            "Tháng 10", "Tháng 11", "Tháng 12"
        ];
        this.ghiVaThemMoi = false;
        this.isVisibleGhiVaThemMoi = true;
        this.paintForm = function () {
            _this.listtypes.forEach(function (listtype) {
                if (_this.listtypeId == listtype.id && listtype.json_data) {
                    listtype.json_data.forEach(function (item) {
                        var source_type = item.source_type;
                        var source_data = item.source_data;
                        var formItem;
                        var validation = item.validation ? item.validation.split("|") : [];
                        var required = validation.includes("required") ? "required" : "";
                        switch (item.type) {
                            case "selectbox":
                                {
                                    if (source_type == 'DANH_MUC') {
                                        _this.listtypes.forEach(function (listtype) {
                                            if (listtype.code == source_data) {
                                                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
                                                _this.listsService.getAllListsbyListtype(listtype.id).subscribe(function (res) {
                                                    var dataSource = res.data.lists;
                                                    formItem =
                                                        {
                                                            dataField: item.code,
                                                            label: { text: item.name },
                                                            editorType: "dxSelectBox",
                                                            editorOptions: {
                                                                dataSource: dataSource,
                                                                displayExpr: 'name',
                                                                valueExpr: 'code',
                                                                placeholder: 'Chọn',
                                                                searchEnabled: 'true',
                                                            }
                                                        };
                                                    if (required != "") {
                                                        formItem.validationRules = [{
                                                                "type": required,
                                                                "message": "Trường này không được để trống"
                                                            }];
                                                    }
                                                    _this.form.instance.option('items')[0].items.push(formItem);
                                                    _this.form.instance.repaint();
                                                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                                                });
                                            }
                                        });
                                    }
                                    else if (source_type == 'JSON') {
                                        formItem =
                                            {
                                                dataField: source_data.code,
                                                label: { text: source_data.name },
                                                editorType: "dxSelectBox",
                                                editorOptions: {
                                                    dataSource: source_data.value,
                                                    displayExpr: 'name',
                                                    valueExpr: 'code',
                                                    placeholder: 'Chọn',
                                                }
                                            };
                                        if (required != "") {
                                            formItem.validationRules = [{
                                                    "type": required,
                                                    "message": "Trường này không được để trống"
                                                }];
                                        }
                                        _this.form.instance.option('items')[0].items.push(formItem);
                                        _this.form.instance.repaint();
                                    }
                                }
                                break;
                            case "checkbox":
                                {
                                    formItem =
                                        {
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorType: "dxCheckBox"
                                        };
                                    if (required != "") {
                                        formItem.validationRules = [{
                                                "type": required,
                                                "message": "Trường này không được để trống"
                                            }];
                                    }
                                    _this.form.instance.option('items')[0].items.push(formItem);
                                    _this.form.instance.repaint();
                                    if (!_this.id) {
                                        _this.list[item.code] = false;
                                    }
                                }
                                break;
                            default:
                                {
                                    formItem =
                                        {
                                            dataField: item.code,
                                            label: { text: item.name },
                                            editorOptions: {}
                                        };
                                    if (required != "") {
                                        formItem.validationRules = [{
                                                "type": required,
                                                "message": "Trường này không được để trống"
                                            }];
                                    }
                                    _this.form.instance.option('items')[0].items.push(formItem);
                                    _this.form.instance.repaint();
                                }
                                break;
                        }
                    });
                }
            });
        };
        //xử lý submit
        this.onSubmit = function (e) {
            var _this = this;
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
            if (this.list.status) {
                this.list.status = "HOAT_DONG";
            }
            else {
                this.list.status = "KHONG_HOAT_DONG";
            }
            this.list.listtype_id = this.listtypeId;
            if (this.isHinhThucThu) {
                var itemBefor = this.selectedItemBefore.length === 0 ? '' : this.selectedItemBefore.map(function (obj) { return obj.code; }).join(';');
                var itemAfter = this.selectedItemAfter.length === 0 ? '' : this.selectedItemAfter.map(function (obj) { return obj.code; }).join(';');
                if (itemBefor != '') {
                    this.list.note = itemBefor;
                    if (itemAfter != '')
                        this.list.note += ";" + itemAfter;
                }
                else {
                    if (itemAfter != '')
                        this.list.note = itemAfter;
                }
            }
            this.listtypes.forEach(function (listtype) {
                if (_this.listtypeId == listtype.id && listtype.json_data) {
                    listtype.json_data.forEach(function (item) {
                        for (var key in _this.list) {
                            if (item.code == key) {
                                _this.json_data[key] = _this.list[key];
                            }
                        }
                    });
                }
            });
            this.list.json_data = this.json_data;
            //let data = {list: this.list};
            var data = JSON.parse(JSON.stringify({ list: this.list }));
            for (var key in data.list.json_data) {
                if (data.list.json_data[key] == data.list[key]) {
                    delete data.list[key];
                }
            }
            if (!this.list.id) {
                this.listsService.add(data).subscribe(function (response) {
                    if (response.status == "success") {
                        _this.bsModalRef.content.successSaveItem = "success";
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Thêm dữ liệu thành công", "success");
                        if (_this.ghiVaThemMoi == true) {
                            var order = _this.list.order + 1;
                            _this.form.instance.resetValues();
                            _this.list = new _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["List"]();
                            _this.list.order = order;
                        }
                        else {
                            _this.bsModalRef.content.successSaveData = _this.list;
                            _this.bsModalRef.hide();
                        }
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(response.message, "error");
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                });
            }
            else {
                var id = this.list.id;
                this.listsService.edit(data, id).subscribe(function (response) {
                    if (response.status == "success") {
                        _this.bsModalRef.content.successSaveItem = "success";
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify("Câp nhật liệu thành công", "success");
                        _this.bsModalRef.hide();
                    }
                    else {
                        _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].notify(response.message, "error");
                    }
                }, function (err) { }, function () {
                    _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
                });
            }
        };
        this._translate = this.authService.getTranslate();
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        var listType = this.listtypes.filter(function (p) { return p.id == _this.listtypeId; })[0];
        if (listType) {
            if (listType.code == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].danhmuc.DanhMucLop) {
                this.code = this._translate.GRID.LIST_CATEGORY.codeClass;
                this.name = this._translate.GRID.LIST_CATEGORY.nameClass;
            }
            else {
                if (listType.code == _core_index__WEBPACK_IMPORTED_MODULE_5__["sEnum"].danhmuc.DanhMucHTThu)
                    this.isHinhThucThu = true;
                this.code = this._translate.GRID.LIST_CATEGORY.code;
                this.name = this._translate.GRID.LIST_CATEGORY.name;
            }
            this.modify_able = listType.modify_able;
        }
        this.getList();
    };
    AddComponent.prototype.ngAfterViewInit = function () {
        this.paintForm();
    };
    AddComponent.prototype.getList = function () {
        var _this = this;
        if (this.id) {
            _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].showloading();
            this.listsService.getList(this.id, this.modify_able).subscribe(function (response) {
                _this.list = response.data.list;
                if (_this.list.status && _this.list.status === "HOAT_DONG") {
                    _this.list.status = true;
                }
                else if (_this.list.status && _this.list.status === "KHONG_HOAT_DONG") {
                    _this.list.status = false;
                }
                if (_this.list.json_data) {
                    for (var key in _this.list.json_data) {
                        if (_this.list.json_data.hasOwnProperty(key)) {
                            var value = _this.list.json_data[key];
                            _this.list[key] = value;
                        }
                    }
                }
                if (_this.isHinhThucThu) {
                    if (_this.list.note) {
                        var _lst = _this.list.note.split(';').filter(function (p) { return p != ""; });
                        if (_lst && _lst.length > 0) {
                            _lst.forEach(function (item) {
                                var _oBefore = _this.monthBefore.filter(function (p) { return p.code == item; })[0];
                                if (_oBefore)
                                    _this.selectedItemBefore.push(_oBefore);
                                var _oAfter = _this.monthAfter.filter(function (p) { return p.code == item; })[0];
                                if (_oAfter)
                                    _this.selectedItemAfter.push(_oAfter);
                            });
                        }
                    }
                }
                _core_index__WEBPACK_IMPORTED_MODULE_5__["Library"].hideloading();
            });
            this.isVisibleGhiVaThemMoi = false;
        }
        else {
            this.list = new _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["List"]();
            this.list.order = this.totalCount + 1;
        }
    };
    AddComponent.prototype.onGhiVaThemMoi = function () {
        this.ghiVaThemMoi = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"])
    ], AddComponent.prototype, "form", void 0);
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/modules/lists/components/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/modules/lists/components/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_3__["ListsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/modules/lists/components/index/index.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/lists/components/index/index.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-header row\">\r\n  <div class=\"col-md-4\">\r\n      <div class=\"pull-left\">\r\n          <!-- <div class=\"list-title\">\r\n              <h2>DANH SÁCH DANH MỤC ĐỐI TƯỢNG</h2>\r\n          </div> -->\r\n      </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n        <div class=\"pull-right button-panel\">\r\n            <dx-button id=\"add\" (click)=\"add()\" icon=\"{{_translate.ICONS.plus}}\" text=\"{{_translate.CONTROLL.BUTTON.add}}\" type=\"default\"\r\n            [disabled]=\"!(modify_able == 1)\"></dx-button>\r\n            <dx-button id=\"edit\" (click)=\"edit()\" icon=\"{{_translate.ICONS.edit}}\" text=\"{{_translate.CONTROLL.BUTTON.edit}}\" type=\"default\" \r\n            [disabled]=\"!(selectedRows.length == 1) || !(modify_able == 1)\"></dx-button>\r\n            <dx-button id=\"delete\" (click)=\"delete()\" icon=\"{{_translate.ICONS.delete}}\" text=\"{{_translate.CONTROLL.BUTTON.delete}}\" type=\"default\" \r\n            [disabled]=\"!(selectedRows.length) || !(modify_able == 1)\"></dx-button>\r\n            <dx-button (click)=\"integrateCRM()\" [visible]=\"isIntegrateCRM\" icon=\"assets\\img\\icons\\NapDuLieu.png\" text=\"Đồng bộ CRM\" type=\"default\">\r\n            </dx-button>\r\n\r\n            <input type=\"file\" id=\"file-bang-ke\" accept=\".xlsx\" (change)=\"onFileChanged($event)\" multiple=\"false\" style=\"display: none;\"/>\r\n            <dx-menu *ngIf=\"showExtends\"\r\n            [dataSource]=\"extras\"\r\n            displayExpr=\"name\"\r\n            orientation=\"horizontal\"\r\n            submenuDirection=\"auto\"\r\n            (onItemClick)=\"itemExtrasClick($event)\"\r\n            cssClass='button-dropdown-extend'>\r\n          </dx-menu>\r\n        </div>\r\n        <div class=\"pull-right\">\r\n            <dx-select-box \r\n                [dataSource]=\"listtypes\" \r\n                displayExpr=\"name\" \r\n                valueExpr=\"id\" \r\n                [value]=\"selectedListtypeDefault\" \r\n                placeholder=\"Chọn loại danh mục\"\r\n                (onValueChanged)=\"onSelectedListtype($event)\">\r\n            </dx-select-box>\r\n        </div>\r\n  </div>\r\n</div>\r\n<dx-data-grid \r\n  id=\"gridContainer\" \r\n  [dataSource]=\"dataSource\"\r\n  [(selectedRowKeys)]=\"selectedRows\"\r\n  [showRowLines]=\"true\"\r\n  [noDataText]=\"noDataText\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnMinWidth]=\"50\"\r\n  [columnAutoWidth]=\"true\"\r\n  [wordWrapEnabled]=\"true\">\r\n  <dxo-sorting mode=\"multiple\"></dxo-sorting>\r\n  <dxo-selection selectAllMode=\"page\" mode=\"multiple\">\r\n  </dxo-selection>      \r\n  <dxo-load-panel [enabled]=\"true\"></dxo-load-panel>\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxi-column dataField=\"order\"\r\n              alignment=\"center\" sortOrder=\"asc\" [visible]=\"false\"></dxi-column>\r\n  <dxi-column dataField=\"code\" caption=\"{{code}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\" [width]=\"250\"></dxi-column>\r\n  <dxi-column dataField=\"name\" caption=\"{{name}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n  <dxi-column dataField=\"note\" caption=\"{{_translate.CONTROLL.LABEL.note}}\" alignment=\"left\" headerCellTemplate=\"titleHeaderTemplate\"\r\n    [filterOperations]=\"['contains', '=']\"></dxi-column>\r\n  <dxi-column dataField=\"status\" caption=\"{{_translate.GRID.GENERAL.status}}\"  alignment=\"center\" [width]=\"180\" headerCellTemplate=\"titleHeaderTemplate\">\r\n    <dxo-lookup [dataSource]=\"statusFilter\" valueExpr=\"value\" displayExpr=\"text\"></dxo-lookup>\r\n  </dxi-column>\r\n\r\n  <div *dxTemplate=\"let info of 'titleHeaderTemplate'\">\r\n    <p><i class=\"fa fa-sort icon-dx-sort\"></i> {{info.column.caption}} </p>\r\n  </div>\r\n  \r\n  <dxo-remote-operations [sorting]=\"true\"  [filtering]=\"true\" [paging]=\"true\">\r\n  </dxo-remote-operations>\r\n  <dxo-paging [pageSize]=\"15\"></dxo-paging>\r\n    <dxo-pager \r\n        [showPageSizeSelector]=\"true\" \r\n        [allowedPageSizes]=\"[15, 50, 100]\"\r\n        [showNavigationButtons]=\"true\"\r\n        [showInfo]=\"true\"\r\n        infoText=\"{{ _translate.DXO_PAGER.page}}\">\r\n    </dxo-pager>\r\n</dx-data-grid>\r\n\r\n<!-- popup -->\r\n<dx-popup\r\nclass=\"popup\"\r\n[width]=\"400\"\r\n[height]=\"255\"\r\n[showTitle]=\"true\"\r\n\r\n[dragEnabled]=\"false\"\r\n(onHiding)=\"onImportHiding($event)\"\r\n(onShowing)=\"onImportShowing($event)\"\r\n[(visible)]=\"showPopupImport\">\r\n<div *dxTemplate=\"let data of 'content'\">\r\n  <p style=\"margin-bottom: 10px\">Tên file:\r\n    <span>{{fileName}}</span>\r\n  </p>\r\n  <p style=\"margin-bottom: 10px\">Dung lượng:\r\n    <span>{{fileSize | number:'1.0-2'}}KB</span>\r\n  </p>\r\n  <div style=\"height: 30px;\">\r\n    <dx-progress-bar \r\n      [min]=\"0\" \r\n      [max]=\"100\" \r\n      [value]=\"valueProgress\"\r\n      [statusFormat]=\"format\"\r\n      [visible]=\"visibleProgressBar\">\r\n    </dx-progress-bar>\r\n  </div>\r\n  <p style=\"height: 25px;\">\r\n      <span>{{thongbao}}</span>\r\n    </p>\r\n    <p style=\"height: 25px;\">\r\n      <a href=\"javascript:void(0)\" (click)=\"layBanGhiLoi()\" *ngIf=\"visibleGetError\" style=\" color: red;\">* Lấy bản ghi lỗi</a>\r\n    </p>\r\n  <div class=\"pull-right\">\r\n    <dx-button (click)=\"thayTheToanBo()\" [disabled]=\"isDisable\" text=\"Thay thế toàn bộ\" type=\"default\"></dx-button>\r\n    <dx-button (click)=\"themTiep()\" [disabled]=\"isDisable\" text=\"Thêm tiếp\" type=\"default\"></dx-button>\r\n  </div>\r\n</div>\r\n</dx-popup>\r\n\r\n<dx-popup\r\nclass=\"popup\"\r\n[width]=\"400\"\r\n[height]=\"180\"\r\n[showTitle]=\"true\"\r\ntitle=\"Lấy file mẫu\"\r\n[dragEnabled]=\"false\"\r\n[(visible)]=\"showPopupGetFile\">\r\n<div *dxTemplate=\"let data of 'content'\">\r\n  <p style=\"margin-bottom: 40px\">Hãy lựa chọn hình thức lấy file mẫu?</p>\r\n  \r\n  <div class=\"pull-right\">\r\n    <dx-button (click)=\"fileCoDuLieu()\"  text=\"File có dữ liệu\" type=\"default\"></dx-button>\r\n    <dx-button (click)=\"fileTrang()\"  text=\"File trắng\" type=\"default\"></dx-button>\r\n  </div>\r\n</div>\r\n</dx-popup>\r\n"

/***/ }),

/***/ "./src/app/modules/lists/components/index/index.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/lists/components/index/index.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .list-header .dx-selectbox{border-radius:0;display:inline-block;margin-right:8px;width:330px;height:28px;max-height:32px}.column .field>div{display:inline-block;vertical-align:middle}.column .field .label{width:95px;margin-right:10px}.column .field .value{width:53%}\n"

/***/ }),

/***/ "./src/app/modules/lists/components/index/index.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/lists/components/index/index.component.ts ***!
  \*******************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_lists_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/lists/shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add/add.component */ "./src/app/modules/lists/components/add/add.component.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
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
    function IndexComponent(authService, listsService, modalService, cdr, route, translate) {
        var _this = this;
        this.authService = authService;
        this.listsService = listsService;
        this.modalService = modalService;
        this.cdr = cdr;
        this.route = route;
        this.translate = translate;
        this.dataSource = {};
        this.selectedRows = [];
        this.noDataText = "Chưa có danh mục nào";
        this.isIntegrateCRM = false;
        this.listsIntegrateCRM = ["DM_NHOM_HANG_HOA", "DM_HINH_THUC_THANH_TOAN", "DM_NHOM_KHACH_HANG", "DM_DON_VI_TINH"];
        this.valueProgress = 0;
        this.extras = [];
        this.showPopupGetFile = false;
        this.showExtends = false;
        this.visibleProgressBar = false;
        this.stopImport = false;
        this.isDisable = false;
        this.thongbao = '';
        this.dataFail = [];
        this.header = [{
                code: 'NẠP DANH SÁCH DANH MỤC LỚP HỌC'
            }, {
                code: '* Ghi chú: Cột chữ màu đỏ, đơn vị phải nhập nội dung.'
            }, {
                code: 'Mã lớp',
                name: "Tên lớp",
                note: 'Ghi chú',
                error_message: 'Nội dung lỗi'
            }, {
                code: '(1)',
                name: '(2)',
                note: '(3)',
            }
        ];
        this.visibleGetError = false;
        this.showPopupImport = false;
        this.format = function (value) {
            var percent = Math.round(value * 100);
            return _this._translate.NOTIFY.finish + ': ' + percent + '%';
        };
        this._translate = this.authService.getTranslate();
        translate.use(this.authService.getLanguage());
        this.statusFilter = [{
                text: "Hoạt động",
                value: "HOAT_DONG"
            }, {
                text: "Không hoạt động",
                value: "KHONG_HOAT_DONG"
            }];
        this.extras = [{
                id: '1',
                name: this._translate.CONTROLL.BUTTON.extend,
                items: [
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
        var _this = this;
        this.getListtypes();
        this.getConfigs();
        this.route.data.subscribe(function (data) {
            data.configs.forEach(function (config) {
                if (config.name == "integrate_parameter") {
                    _this.configCRM = JSON.parse(config.value).integrate_crm;
                }
            });
        });
    };
    IndexComponent.prototype.loadList = function () {
        var params = "filter_groups[0][filters][0][key]=listtype_id&filter_groups[0][filters][0][value]=" + this.listtypeId + "&filter_groups[0][filters][0][operator]=eq";
        this.dataSource.store = this.listsService.getAll(params);
    };
    IndexComponent.prototype.getListtypes = function () {
        var _this = this;
        this.listsService.getAllListtype().subscribe(function (res) {
            _this.listtypes = res.data.listtypes;
            _this.selectedListtypeDefault = _this.listtypes.find(function (item) { return item.code == "DM_DON_VI_TINH"; }).id;
        });
    };
    IndexComponent.prototype.add = function () {
        var _this = this;
        var initialState = {
            totalCount: this.dataGrid.instance.totalCount(),
            listtypeId: this.listtypeId,
            listtypes: this.listtypes
        };
        this.bsModalRef = this.modalService.show(_add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"], {
            class: 'modal-lg', initialState: initialState, backdrop: 'static',
            keyboard: false
        });
        this.modalService.onHide.subscribe(function () {
            if (_this.bsModalRef.content.successSaveItem) {
                //this.dataGrid.instance.refresh();
                _this.dataSource = {};
                _this.loadList();
            }
        });
    };
    IndexComponent.prototype.edit = function () {
        var _this = this;
        if (!this.selectedRows || this.selectedRows.length === 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng chọn đối tượng để sửa", 'error');
            return;
        }
        else if (this.selectedRows.length > 1) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Chỉ được chọn một đối tượng để sửa", 'error');
        }
        else if (this.selectedRows.length === 1) {
            var initialState = {
                id: this.selectedRows[0],
                listtypeId: this.listtypeId,
                listtypes: this.listtypes
            };
            this.bsModalRef = this.modalService.show(_add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"], {
                class: 'modal-lg', initialState: initialState, backdrop: 'static',
                keyboard: false
            });
            this.modalService.onHide.subscribe(function () {
                if (_this.bsModalRef.content.successSaveItem) {
                    //this.dataGrid.instance.refresh();
                    _this.dataSource = {};
                    _this.loadList();
                }
            });
        }
    };
    IndexComponent.prototype.delete = function () {
        var _this = this;
        if (!this.selectedRows || this.selectedRows.length === 0) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Vui lòng chọn đối tượng để xóa", 'error');
            return;
        }
        else {
            var ids_1 = "";
            for (var _i = 0, _a = this.selectedRows; _i < _a.length; _i++) {
                var id = _a[_i];
                ids_1 += id + ",";
            }
            ids_1 = ids_1.slice(0, -1);
            var result = _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].confirm("Bạn có chắc chắn muốn xóa đối tượng đã chọn?", "Thông báo");
            if (result) {
                result.then(function (dialogResult) {
                    if (dialogResult) {
                        _this.listsService.delete(ids_1).subscribe(function (response) {
                            if (response.status === "success") {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Xóa dữ liệu thành công", 'success');
                                //this.dataGrid.instance.refresh();
                                _this.dataSource = {};
                                _this.loadList();
                                _this.updateDmDVT([_this.listtypeId]);
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Có lỗi khi xóa dữ liệu", 'error');
                            }
                        });
                    }
                });
            }
        }
    };
    IndexComponent.prototype.onSelectedListtype = function (e) {
        var _this = this;
        this.listtypeId = e.value;
        if (this.listtypes) {
            this.listtypes.forEach(function (listtype) {
                if (listtype.id == _this.listtypeId) {
                    _this.modify_able = listtype.modify_able;
                    _this.cdr.detectChanges();
                    if (_this.configCRM.is_integrate) {
                        if (_this.listsIntegrateCRM.includes(listtype.code)) {
                            _this.isIntegrateCRM = true;
                            _this.cdr.detectChanges();
                            _this.listIntegrateCRMCode = listtype.code;
                        }
                        else {
                            _this.isIntegrateCRM = false;
                            _this.cdr.detectChanges();
                        }
                    }
                    else {
                        _this.isIntegrateCRM = false;
                        _this.cdr.detectChanges();
                    }
                    if (listtype.code == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].danhmuc.DanhMucLop || listtype.code == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].danhmuc.DanhMucDVT) {
                        if (listtype.code == _core_index__WEBPACK_IMPORTED_MODULE_4__["sEnum"].danhmuc.DanhMucDVT) {
                            _this.code = _this._translate.GRID.LIST_CATEGORY.code;
                            _this.name = _this._translate.GRID.LIST_CATEGORY.name;
                        }
                        else {
                            _this.code = _this._translate.GRID.LIST_CATEGORY.codeClass;
                            _this.name = _this._translate.GRID.LIST_CATEGORY.nameClass;
                        }
                        _this.showExtends = true;
                    }
                    else {
                        _this.code = _this._translate.GRID.LIST_CATEGORY.code;
                        _this.name = _this._translate.GRID.LIST_CATEGORY.name;
                        _this.showExtends = false;
                    }
                }
            });
        }
        this.dataSource = {};
        this.loadList();
    };
    IndexComponent.prototype.integrateCRM = function () {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        this.listsService.integrateCRM(this.listIntegrateCRMCode).subscribe(function (res) {
            if (res.status == "success") {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Đồng bộ dữ liệu thành công", 'success');
                _this.dataSource = {};
                _this.loadList();
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify("Có lỗi khi đồng bộ dữ liệu", 'error');
            }
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        });
    };
    IndexComponent.prototype.itemExtrasClick = function (e) {
        if (e.itemData.id === 'LAY_FILE_MAU') {
            this.getFileTemp();
        }
        else if (e.itemData.id === 'NAP_DU_LIEU') {
            this.napDuLieuTuBangKe();
        }
    };
    IndexComponent.prototype.napDuLieuTuBangKe = function () {
        setTimeout(function () {
            document.getElementById('file-bang-ke').click();
        }, 50);
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
            this.loadList();
            this.valueProgress = 0;
            this.isDisable = false;
            this.thongbao = '';
            this.dataFail = [];
            this.dataFail = this.dataFail.concat(this.header);
            this.visibleProgressBar = false;
            this.listsService.confirmClearData().subscribe(function (res) {
            });
        }
        else {
            e.cancel = true;
        }
    };
    IndexComponent.prototype.import = function (dataExcelFile, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, ids_2, dulieu;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.visibleProgressBar = true;
                        data = [];
                        if (dataExcelFile && dataExcelFile.length > 0) {
                            dataExcelFile.forEach(function (element) {
                                if (!element.code || !element.name) {
                                    var classCode = {};
                                    classCode['code'] = element.code ? element.code : '';
                                    classCode['name'] = element.name ? element.name : '';
                                    classCode['note'] = element.note ? element.note : '';
                                    classCode['error_message'] = 'Lỗi thiếu mã lớp, tên lớp';
                                    _this.dataFail.push(classCode);
                                }
                                else {
                                    var classCode = new _modules_lists_shared__WEBPACK_IMPORTED_MODULE_2__["List"]();
                                    classCode.code = element.code ? element.code : '';
                                    classCode.name = element.name ? element.name : '';
                                    classCode.note = element.note ? element.note : '';
                                    classCode.listtype_id = _this.listtypeId;
                                    classCode.order = 1;
                                    classCode.status = true;
                                    data.push(classCode);
                                }
                            });
                        }
                        if (!(type === 'THAY_THE')) return [3 /*break*/, 2];
                        ids_2 = [];
                        return [4 /*yield*/, this.dataSource.store.load().then(function (dataSource) {
                                if (dataSource.data.length > 0)
                                    ids_2 = dataSource.data.map(function (item) { return item.id; });
                            })];
                    case 1:
                        _a.sent();
                        dulieu = {
                            lists: {
                                ids: ids_2
                            }
                        };
                        this.listsService.clearData(dulieu).subscribe(function (res) {
                            if (res.status === 'success') {
                                _this.saveImport(data, 1);
                            }
                            else {
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        if (type === 'THEM_TIEP') {
                            this.saveImport(data, 1);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    IndexComponent.prototype.paginate = function (array, page_size, page_number) {
        --page_number; // because pages logically start with 1, but technically with 0
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };
    IndexComponent.prototype.getConfigs = function () {
        var _this = this;
        this.listsService.getConfigs().subscribe(function (res) {
            res.data.configs.forEach(function (config) {
                if (config.name === 'maximum_object_import') {
                    _this.maximum_object_import = 100;
                }
            });
        });
    };
    IndexComponent.prototype.saveImport = function (data, page) {
        var _this = this;
        if (this.stopImport === true) {
            return;
        }
        var numberPages = Math.floor(data.length / this.maximum_object_import) + 1;
        var percentComplete = 100 / numberPages;
        var pageData = this.paginate(data, this.maximum_object_import, page);
        var dm = this.listtypes.find(function (item) { return item.id == _this.listtypeId; });
        this.sub = this.listsService.importData(pageData, dm.code).subscribe(function (res) {
            if (res.status === 'success') {
                _this.valueProgress += percentComplete;
                if (page < numberPages) {
                    _this.saveImport(data, page + 1);
                }
                if (res.data.Class_errors.length !== 0) {
                    res.data.Class_errors.forEach(function (error) {
                        delete error.id;
                        delete error.listtype_id;
                        delete error.order;
                        delete error.status;
                        delete error.account_id;
                        delete error.json_data;
                    });
                    _this.dataFail = _this.dataFail.concat(res.data.Class_errors);
                }
                _this.importSuccess = _this.countAll - _this.dataFail.length + 4;
                if (page === numberPages) {
                    _this.valueProgress = 100;
                    _this.listsService.confirmClearData().subscribe(function (res) {
                        if (res.status === 'success') {
                            setTimeout(function () {
                                _this.updateDmDVT([_this.listtypeId]);
                            }, 1000);
                            _this.thongbao = _this._translate.NOTIFY.import + " " + _this.importSuccess + "/" + _this.countAll + " b\u1EA3n ghi (C\u00F3 " + (_this.dataFail.length - 4) + " b\u1EA3n ghi l\u1ED7i.)";
                            if (_this.importSuccess < _this.countAll) {
                                _this.visibleGetError = true;
                                // this.layBanGhiLoi();
                            }
                            else {
                                _this.showPopupImport = false;
                                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.import_success, 'success');
                            }
                        }
                    });
                }
            }
            else {
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(_this._translate.NOTIFY.an_error_occurred, 'error');
                _this.listsService.confirmClearData().subscribe(function (res) {
                });
                _this.valueProgress = 100;
                _this.showPopupImport = false;
            }
        });
    };
    // Cập nhật danh mục đơn vị tính vào localstorage
    IndexComponent.prototype.updateDmDVT = function (data) {
        var listT = this.listtypes.filter(function (item) { return data.includes(item.id); });
        var arrCode = lodash__WEBPACK_IMPORTED_MODULE_9__["map"](listT, 'code');
        if (arrCode.length > 0) {
            var updateDM_1 = this.listsService.getDMN(arrCode).subscribe(function (rs) {
                if (rs.status == 'success') {
                    arrCode.forEach(function (name) {
                        var dm = JSON.parse(localStorage.getItem('DANH_MUC'));
                        if (dm) {
                            arrCode.forEach(function (name) {
                                if (rs.data[name])
                                    dm[name]['data'] = rs.data[name];
                            });
                            localStorage.setItem('DANH_MUC', JSON.stringify(dm));
                        }
                    });
                }
            }, function (err) { }, function () {
                updateDM_1.unsubscribe();
            });
        }
    };
    IndexComponent.prototype.layBanGhiLoi = function () {
        if (this.valueProgress < 100) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(this._translate.NOTIFY.import_error, 'error');
        }
        else {
            var ws = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].json_to_sheet(this.dataFail);
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_new();
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
            xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_append_sheet(wb, ws, 'Sheet1');
            xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](wb, 'danh_sach_loi.xlsx');
        }
    };
    // import
    IndexComponent.prototype.thayTheToanBo = function () {
        this.isDisable = true;
        this.import(this.dataExcelFile, 'THAY_THE');
        this.dataExcelFile = null;
    };
    IndexComponent.prototype.themTiep = function () {
        this.isDisable = true;
        this.import(this.dataExcelFile, 'THEM_TIEP');
        this.dataExcelFile = null;
    };
    IndexComponent.prototype.huy = function () {
        this.showPopupImport = false;
        this.dataExcelFile = null;
    };
    IndexComponent.prototype.getFileTemp = function () {
        this.showPopupGetFile = true;
    };
    IndexComponent.prototype.fileCoDuLieu = function () {
        var _this = this;
        var dm = this.listtypes.find(function (item) { return item.id == _this.listtypeId; });
        if (dm && dm.code) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            this.listsService.getFileTempData(dm.code).subscribe(function (res) {
                if (res.status === 'success') {
                    var file = res.data.list;
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(res.message, 'error');
                }
                _this.showPopupGetFile = false;
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
    };
    IndexComponent.prototype.fileTrang = function () {
        var _this = this;
        var dm = this.listtypes.find(function (item) { return item.id == _this.listtypeId; });
        if (dm && dm.code) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
            this.listsService.getFileTemp(dm.code).subscribe(function (res) {
                if (res.status === 'success') {
                    var file = res.data.list;
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Helper"].dowloadFile(file.file_name, 'xlsx', file.file_content);
                }
                else {
                    _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify(res.message, 'error');
                }
                _this.showPopupGetFile = false;
                _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
            });
        }
    };
    IndexComponent.prototype.onFileChanged = function (evt) {
        var _this = this;
        _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].showloading();
        var target = (evt.target);
        this.fileName = target.files[0].name;
        this.fileSize = target.files[0].size / 1024;
        if (target.files.length !== 1) {
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].notify('Không thể chọn nhiều file', 'error');
            throw new Error('Không thể chọn nhiều file');
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_7__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var data = (xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].sheet_to_json(ws, { header: 'A', range: 3 }));
            var fileBangKe = document.getElementById('file-bang-ke');
            fileBangKe.value = '';
            var _arrData = [];
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
            _this.dataExcelFile = _arrData;
            _this.countAll = _arrData.length;
            _this.showPopupImport = true;
            _core_index__WEBPACK_IMPORTED_MODULE_4__["Library"].hideloading();
        };
        reader.readAsBinaryString(target.files[0]);
    };
    IndexComponent.prototype.onImportShowing = function (e) {
        this.stopImport = false;
        this.valueProgress = 0;
        this.visibleGetError = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxDataGridComponent"])
    ], IndexComponent.prototype, "dataGrid", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/modules/lists/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/modules/lists/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_index__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _modules_lists_shared__WEBPACK_IMPORTED_MODULE_2__["ListsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules/lists/lists.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/lists/lists.module.ts ***!
  \***********************************************/
/*! exports provided: ListsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsModule", function() { return ListsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/lists/components/index/index.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/index */ "./src/app/core/index.ts");
/* harmony import */ var _lists_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lists.routing */ "./src/app/modules/lists/lists.routing.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/modules/lists/shared/index.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/modules/lists/components/add/add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//library

//general




var ListsModule = /** @class */ (function () {
    function ListsModule() {
    }
    ListsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _lists_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _core_index__WEBPACK_IMPORTED_MODULE_4__["devextremeModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_3__["DxTreeListModule"],
                _shared_index__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], _components_add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"]],
            entryComponents: [
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"]
            ],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_7__["ListsService"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["ListsResolver"]
            ]
        })
    ], ListsModule);
    return ListsModule;
}());



/***/ }),

/***/ "./src/app/modules/lists/lists.routing.ts":
/*!************************************************!*\
  !*** ./src/app/modules/lists/lists.routing.ts ***!
  \************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/modules/lists/components/index/index.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/app/modules/lists/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], resolve: { configs: _shared__WEBPACK_IMPORTED_MODULE_3__["ListsResolver"] } },
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
//# sourceMappingURL=lists-lists-module.js.map